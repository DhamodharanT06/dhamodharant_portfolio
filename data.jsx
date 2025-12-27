// portfolio.data.jsi

export const skillsByDomain = [
  {
    domain: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", color: "#00D9FF", iconName: "FaPython", brightColor: "#00F5FF" },
      { name: "Java", color: "#00D9FF", iconName: "FaJava", brightColor: "#00D9FF" },
      { name: "C", color: "#00D9FF", iconName: "SiC", brightColor: "#00D9FF" },
    ]
  },
  {
    domain: "Web Development",
    icon: "Smartphone",
    skills: [
      { name: "HTML", color: "#00D9FF", iconName: "SiHtml5", brightColor: "#00F5FF" },
      { name: "CSS", color: "#00D9FF", iconName: "SiCss3", brightColor: "#00D9FF" },
      { name: "JavaScript", color: "#00D9FF", iconName: "SiJavascript", brightColor: "#00D9FF" },
    ]
  },
  {
    domain: "Mobile Application Development",
    icon: "Smartphone",
    skills: [
      { name: "Dart", color: "#00D9FF", iconName: "SiDart", brightColor: "#00F5FF" },
      { name: "Flutter", color: "#00D9FF", iconName: "SiFlutter", brightColor: "#00D9FF" },
      { name: "Android Studio", color: "#00D9FF", iconName: "SiAndroidstudio", brightColor: "#00D9FF" }
    ]
  },
  {
    domain: "Backend Frameworks",
    icon: "Database",
    skills: [
      { name: "FastAPI", color: "#00D9FF", iconName: "SiFastapi", brightColor: "#00F5FF" },
      { name: "Django", color: "#00D9FF", iconName: "SiDjango", brightColor: "#00D9FF" },
      { name: "Flask", color: "#00D9FF", iconName: "SiFlask", brightColor: "#00D9FF" },
    ]
  },
  {
    domain: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", color: "#00D9FF", iconName: "SiMysql", brightColor: "#00F5FF" },
      { name: "PostgreSQL", color: "#00D9FF", iconName: "DiPostgresql", brightColor: "#00D9FF" },
      { name: "MongoDB", color: "#00D9FF", iconName: "SiMongodb", brightColor: "#00D9FF" },
      { name: "Firebase", color: "#00D9FF", iconName: "SiFirebase", brightColor: "#00D9FF" },
    ]
  },
  {
    domain: "Artificial Intelligence",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", color: "#00D9FF", iconName: "SiTensorflow", brightColor: "#00F5FF" },
      { name: "TensorFlow", color: "#00D9FF", iconName: "SiTensorflow", brightColor: "#00D9FF" },
      { name: "PyTorch", color: "#00D9FF", iconName: "SiPytorch", brightColor: "#00D9FF" },
      { name: "Keras", color: "#00D9FF", iconName: "SiKeras", brightColor: "#00D9FF" }
    ]
  },
  {
    domain: "Others",
    icon: "Brain",
    skills: [
      { name: "Figma UI/UX", color: "#00D9FF", iconName: "SiFigma", brightColor: "#00F5FF" },
      { name: "Github", color: "#00D9FF", iconName: "FaGithub", brightColor: "#00D9FF" },
      { name: "IoT", color: "#00D9FF", iconName: "FaCuttlefish", brightColor: "#00D9FF" }
    ]
  }
];

// Legacy export for backward compatibility
export const skills = skillsByDomain.flatMap(domain => domain.skills);

export const projects = [
  { 
    title: "Smart Parking System", 
    description: "An intelligent Vision-based parking system using computer vision and Security Cameras.", 
    fullDescription: "Developed a self-adaptive vision-based smart parking system that uses security cameras and image processing to detect parking slot availability in real-time. The system displays available spots and their depth information, helping drivers find parking efficiently. Implemented on OpenCV and YOLO with Python for backend processing.",
    features: ["Real-time parking slot detection", "YOLO integration", "Web dashboard", "Mobile notifications", "IoT connectivity" , "Deep learning model"],
    tech: "Python, OpenCV, YOLO, IOT", 
    projectUrl: "", 
    githubUrl: "https://github.com/DhamodharanT06/smart_parking_system.git" 
  },
  { 
    title: "NDT Ultrasonics Project", 
    description: "Non-destructive testing system using ultrasonic waves for material inspection.", 
    fullDescription: "A comprehensive NDT (Non-Destructive Testing) system that uses ultrasonic waves to identify and visualize defects in materials without damaging them. The system calculates defect positions and depth, providing detailed analysis for quality control in manufacturing and construction industries.",
    features: ["Defect detection and mapping", "Depth calculation", "Real-time visualization", "Data export", "Calibration tools"],
    tech: "Python, Raspberry Pi, Ultrasonic Sensor, Matplotlib", 
    projectUrl: "https://drive.google.com/drive/folders/1jyTqfdIBy71k2uf8N2uYGUXJL_vIzlWN?usp=sharing", 
    githubUrl: "" 
  },
  { 
    title: "IPL Auction Game", 
    description: "Interactive cricket IPL auction simulation game with dynamic gameplay.", 
    fullDescription: "Created an engaging IPL (Indian Premier League) auction game where users can bid on players with a limited budget and build their winning team. The game features realistic auction mechanics, player statistics, and team management strategies. Built with interactive UI and real-time game logic.",
    features: ["Budget management", "Player bidding", "Team composition", "Score calculation", "Leaderboard"],
    tech: "Flutter, Dart", 
    projectUrl: "", 
    githubUrl: "" 
  },
  { 
    title: "AI Job Description Generator", 
    description: "Generates tailored job descriptions using AI and natural language processing.", 
    fullDescription: "An AI-powered tool that automatically generates professional job descriptions based on job role, requirements, and company details. Uses Google Gemini API for intelligent text generation and Flask backend for processing. Saves time for HR teams and ensures consistent formatting.",
    features: ["Role-based generation", "Requirement analysis", "Template support", "Export to multiple formats", "API integration"],
    tech: "Python, Flask, Gemini API, HTML/CSS", 
    projectUrl: "https://drive.google.com/drive/folders/1VlXCulyErYqxQ8I0E9rP6xgphqx_K1G-?usp=sharing", 
    githubUrl: "https://github.com/DhamodharanT06/ai-job-description-creator.git" 
  },
  { 
    title: "Market Crop Price Prediction", 
    description: "Machine learning project predicting agricultural crop prices using Random Forest algorithm.", 
    fullDescription: "A machine learning application that predicts agricultural crop prices in the market using historical data and the Random Forest algorithm. Includes data preprocessing, model training, and a web interface for price prediction. Helps farmers and traders make informed decisions.",
    features: ["Price prediction", "Historical data analysis", "Model accuracy metrics", "Web dashboard", "CSV export"],
    tech: "Python, Flask, Scikit-learn, HTML/CSS, Pandas", 
    projectUrl: "", 
    githubUrl: "https://github.com/DhamodharanT06/market_crop_price_prediction.git" 
  },
  { 
    title: "Hand Cricket Game", 
    description: "An engaging singleplayer hand cricket game built with Flutter for UI and Dart for game logic.", 
    fullDescription: "A mobile game recreation of the popular hand cricket game. Players choose finger counts to decide between batting and bowling outcomes. Features realistic game mechanics, score tracking, and an intuitive Flutter UI with smooth animations and satisfying interactions.",
    features: ["Single player mode", "Score tracking", "Innings management", "Statistics", "Game rules display"],
    tech: "Flutter, Dart", 
    projectUrl: "https://drive.google.com/drive/folders/1E-Ja73MCWjkwOheMWzPjYPpYFVjTKNCm?usp=sharing", 
    githubUrl: "https://github.com/DhamodharanT06/random_cricket.git" 
  },
  { 
    title: "Password Manager App", 
    description: "Secure password manager with Hive local storage, interactive features, and Light/Dark mode.", 
    fullDescription: "A secure Flutter-based password manager that stores passwords locally using Hive database. Features encryption, master password protection, password strength indicators, and a beautiful UI with Light/Dark mode support. Easy password generation and management.",
    features: ["Secure storage", "Password encryption", "Master password", "Password generator", "Light/Dark mode", "Search functionality"],
    tech: "Flutter, Dart, Hive, Cryptography", 
    projectUrl: "https://drive.google.com/drive/folders/1nw5c1B-I37ZvRy4TrmGviIPMfdCKlL4J?usp=sharing", 
    githubUrl: "https://github.com/DhamodharanT06/password_saver.git" 
  },
  { 
    title: "Crime Rate Prediction", 
    description: "Predicts safe or unsafe zones based on date, time, and location using classification model.", 
    fullDescription: "A machine learning application that predicts crime safety levels for specific locations, times, and dates using Random Forest classification. Built with Streamlit for interactive visualization and includes data analysis, model training, and real-time predictions with confidence scores.",
    features: ["Real-time predictions", "Location-based analysis", "Time-based patterns", "Confidence scoring", "Interactive dashboard", "Data visualization"],
    tech: "Python, Pandas, Scikit-learn, Streamlit", 
    projectUrl: "https://drive.google.com/drive/folders/1eigFOPP3RYWfAxvPogPlkFrufP6m60aX?usp=sharing", 
    githubUrl: "https://github.com/DhamodharanT06/crime_rate_prediction.git" 
  }
];

export const certificates = [
  { id: 1, title: "Data Analytics with Python", issuer: "NPTEL", description: "Completed comprehensive course on data analysis and visualization using Python libraries", issueDate: "2023", color: "green", certificateUrl: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs20/Course/NPTEL24CS20S105380433130354266.pdf" },
  { id: 2, title: "Introduction to Industry 4.0 and Industrial Internet of Things", issuer: "NPTEL", description: "Comprehensive course on Industry 4.0 concepts and IoT applications", issueDate: "2025", color: "green", certificateUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs43/Course/NPTEL25CS43S24360387804329203.pdf" },
  { id: 3, title: "Introduction to Large Language Model(LLMs)", issuer: "NPTEL", description: "Comprehensive course on LLMs and its related knowledge", issueDate: "2025", color: "green", certificateUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs161/Course/NPTEL25CS161S125430025710252195.pdf" },
  { id: 4, title: "Github Foundations", issuer: "GitHub", description: "Version control and collaboration using Git and GitHub", issueDate: "2024", color: "blue", certificateUrl: "https://drive.google.com/file/d/1tuJ4bIAH4uhBpKDLi_nqRR8xRmAs961C/view?usp=drive_link" },
  { id: 5, title: "UI/UX Design", issuer: "GUVI Geeks Network Certified", description: "Design thinking and user experience fundamentals", issueDate: "2023", color: "blue", certificateUrl: "https://drive.google.com/file/d/1KlFgNFfrKrWSKeFNWvZ7AsdxIpH3WHF-/view?usp=drive_link" },
  { id: 6, title: "Flutter for Beginners", issuer: "Great Learning", description: "Learned the basics of Mobile application development using Flutter", issueDate: "2024", color: "blue", certificateUrl: "https://drive.google.com/file/d/1X9ThwYdg3pHJL8MF44Mt8HuPaNmuCX9U/view?usp=sharing" },  
  { id: 7, title: "Python Mastery", issuer: "Udemy", description: "Gained knowledge on advanced Python concepts in web and best practices", issueDate: "2025", color: "blue", certificateUrl: "https://www.udemy.com/certificate/UC-aeae8a1b-e9ec-4f2c-b235-e88b8a337eff/" },  
];

export const memberships = [
  { id: 1, title: "IEEE Chief Executive Member", organization: "Institute of Electrical and Electronics Engineers", status: "Active since 2024", color: "green" },
  { id: 2, title: "Designer Lead", organization: "Neuranest Association for Department", status: "Member since 2024", color: "blue" }
];

export const academics = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    specialization: "AI & Machine Learning Specialization",
    institution: "KPR Institute of Engineering and Technology",
    startYear: "2023",
    endYear: "2027",
    status: "Expected 2027",
    cgpa: "8.99",
    color: "cyan",
    icon: "GraduationCap"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    field: "Biology Stream (TN Stateboard)",
    specialization: "",
    institution: "Sri Vidya Mandir Senior Secondary School",
    startYear: "2021",
    endYear: "2023",
    percentage: "91.7%",
    color: "teal",
    icon: "BookOpen"
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    field: "CBSE Board",
    specialization: "",
    institution: "Sri Vidya Mandir Senior Secondary School",
    startYear: "2020",
    endYear: "2021",
    percentage: "88.9%",
    color: "cyan",
    icon: "Award"
  }
];

export const internships = [
  { id: 1, company: "Hyperready Technologies LLP", role: "Junior Developer Intern", duration: "Oct 2025 - Feb 2026", description: "Working AI agents , LLM development and this Backend on realtime project", technologies: "Mastra , Python , Typescript , PyTorch , TensorFlow", color: "green" },
  { id: 2, company: "Onekit.inc", role: "Mobile Application Developer", duration: "Jul 2025 - Sep 2025", description: "Developed realtime project on mobile app and its backend integrations", technologies: "Flutter , Dart , Firebase , Figma", color: "blue" },
  { id: 3, company: "Nitroware Technologies Pvt Ltd", role: "Machine Learning Intern", duration: "Jan 2025 - Feb 2025", description: "Learned about ML techniques and its backend integrations", technologies: "Python , Django , Flask , PyTorch , TensorFlow", color: "green" },
];

export const publications = [
  {
    id: 1,
    title: "Secure and Ethical AI-Driven Approaches to Data Privacy in Sustainable Agriculture",
    authors: "Dr.Kothai G, Dhamodharan T, Abhivanth R, Naveen Prasath S.",
    journal: "CRC Book Chapter",
    book: "Blockchain and AI for Security and Privacy in Smart Agriculture",
    year: "2025",
    volume: "Book Chapter",
    pages: "--",
    doi: "Pending",
    status: "Accepted to Publish",
    // color: "green",
    about: "Authored a research-focused book chapter on privacy-preserving AI in agriculture, proposing federated learning, differential privacy, and encrypted collaboration to protect sensitive farm data. The work addresses ethical, legal, and scalability challenges while enabling secure, data-driven decision-making for sustainable agriculture.",
    link: "#"
  },
  {
    id: 2,
    title: "Self-Adaptive Vision-Based Smart Parking System",
    authors: "Dhamodharan T, Dhanyasri K, Dharshan S V, Dharun Balaji K, Anish Antony",
    journal: "Engineering Advance",
    book: "Blockchain and AI for Security and Privacy in Smart Agriculture",
    year: "2025",
    volume: "Paper Publication",
    pages: "--",
    doi: "Pending",
    status: "Accepted to Publish",
    // color: "green",
    about: "Authored a research paper proposing a YOLOv8-Seg–based smart parking system with Dynamic Slot Mapping for fine-grained parking occupancy detection, achieving high accuracy, low latency, and scalability without physical sensors. The system enhances urban parking management through real-time monitoring and efficient space utilization.",
    link: "#"
  },
  
];

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'skills', label: 'Skills' },
  { id: 'academics', label: 'Academics' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }
];
// export const navLinks = [
//   { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
//   { id: 'academics', label: 'Academics' }, { id: 'internships', label: 'Internships' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }
// ];

export const socialLinks = [
  { href: 'https://github.com/DhamodharanT06', iconName: 'Github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/dhamodharan-t-57071b292/', iconName: 'Linkedin', label: 'LinkedIn' },
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dhamodharant17@gmail.com&su=Let\'s%20Connect&body=Hi%20Dhamodharan%2C%0A%0AI\'d%20like%20to%20get%20in%20touch%20with%20you%20regarding...%0A%0ALooking%20forward%20to%20connecting%21%0A%0ABest%20regards', iconName: 'Mail', label: 'Email' },
  { href: 'https://leetcode.com/u/DhamodharanT/', iconName: 'SiLeetcode', label: 'LeetCode' },
  { href: 'https://www.hackerrank.com/profile/23am017_KPRIET', iconName: 'TbBrandHackerrank', label: 'HackerRank' }
];

// /* Keep auroraConfigs variable name for compatibility though background will be replaced */
export const auroraConfigs = [
  { cls: 'aurora absolute -top-[15%] -left-[10%] w-[75vmax] h-[28vmax] rotate-[18deg]', bg: 'linear-gradient(90deg, rgba(0,217,255,0.15), rgba(8,145,178,0.1), rgba(0,217,255,0.15))', delay: '0s' },
  { cls: 'aurora absolute top-[10%] right-[-20%] w-[85vmax] h-[24vmax] rotate-[-22deg]', bg: 'linear-gradient(90deg, rgba(8,145,178,0.12), rgba(0,217,255,0.1), rgba(8,145,178,0.12))', delay: '4s' },
  { cls: 'aurora absolute bottom-[-10%] left-[-15%] w-[65vmax] h-[26vmax] rotate-[8deg]', bg: 'linear-gradient(90deg, rgba(0,217,255,0.12), rgba(8,145,178,0.1), rgba(0,217,255,0.12))', delay: '8s' }
];

/* Resume link (string) kept same */
// export const resumeLink = "https://drive.google.com/file/d/1Egp24nAfganUMIbaUT7ABiS_DrzvvoDZ/view?usp=sharing";
// export const resumeLink = "https://drive.google.com/file/d/1LNrGe_iYhRVmkCwkC0PobQBMEunrZ8Kn/view?usp=drive_link";
export const resumeLink = "https://drive.google.com/file/d/1-YHSAe50igenOXtfFt5hx4dU1b4oD6ES/view?usp=sharing";

/* UI Content & Static Text */
// export const uiContent = {
//   header: {
//     name: "Dhamodharan T",
//     title: "Mobile Application Developer | AI & ML Engineer | UI/UX Designer"
//   },
//   about: {
//     heading: "About Me",
//     description: "Passionate developer with experience in Mobile App Development, Machine Learning, IoT, and UI/UX Design. I enjoy building interactive, real-time applications and polished user experiences."
//   },
//   skills: {
//     heading: "Tech Stack"
//   },
//   academics: {
//     heading: "Academic Journey",
//   },
//   resume: {
//     preview: "Preview Resume",
//     download: "Download Resume"
//   },
//   sections: {
//     internships: "Internship Experience",
//     projects: "Projects & Portfolio",
//     certificates: "Certifications",
//     publications: "Publications",
//     contact: "Get In Touch"
//   }
// };



