// Vercel Serverless Function for Contact Form
// Uses Brevo (Sendinblue) API for sending emails
// Free forever: 300 emails/day

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get Brevo API key from environment variable
  const brevoApiKey = process.env.BREVO_API_KEY;
  
  if (!brevoApiKey) {
    console.error('Brevo API key not configured');
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('BREVO')));
    return res.status(500).json({ error: 'Server configuration error' });
  }
  
  console.log('Attempting to send email with API key:', brevoApiKey.substring(0, 20) + '...');

  try {
    // Brevo API endpoint for sending emails
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Dhamodharan',
          email: 'dhamodharant17@gmail.com'
        },
        to: [
          {
            email: 'dhamodharant17@gmail.com',
            name: 'Dhamodharan'
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: `Portfolio Contact: ${subject}`,
        htmlContent: `
          <h2>${subject}</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>This message was sent from your portfolio website.</small></p>
        `
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    });
  }
}
