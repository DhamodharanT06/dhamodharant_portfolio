// portfolio.data.jsi

export const skillsByDomain = [
  {
    domain: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", color: "#00DD00", iconName: "FaPython", brightColor: "#00FF00" },
      { name: "Java", color: "#0080FF", iconName: "FaJava", brightColor: "#0099FF" },
      { name: "C", color: "#0088FF", iconName: "SiC", brightColor: "#0099FF" },
    ]
  },
  {
    domain: "Web Development",
    icon: "Smartphone",
    skills: [
      { name: "HTML", color: "#00CC00", iconName: "SiHtml5", brightColor: "#00FF00" },
      { name: "CSS", color: "#0077FF", iconName: "SiCss3", brightColor: "#0099FF" },
      { name: "JavaScript", color: "#FFFF00", iconName: "SiJavascript", brightColor: "#FFFF33" },
    ]
  },
  {
    domain: "Mobile Application Development",
    icon: "Smartphone",
    skills: [
      { name: "Dart", color: "#00AAFF", iconName: "SiDart", brightColor: "#00CCFF" },
      { name: "Flutter", color: "#0088FF", iconName: "SiFlutter", brightColor: "#00AAFF" },
      { name: "Android Studio", color: "#00DD00", iconName: "SiAndroidstudio", brightColor: "#00FF00" }
    ]
  },
  {
    domain: "Backend Frameworks",
    icon: "Database",
    skills: [
      { name: "FastAPI", color: "#00BB00", iconName: "SiFastapi", brightColor: "#00FF00" },
      { name: "Django", color: "#00AA00", iconName: "SiDjango", brightColor: "#0088FF" },
      { name: "Flask", color: "#00BB00", iconName: "SiFlask", brightColor: "#00FF00" },
    ]
  },
  {
    domain: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", color: "#0080FF", iconName: "SiMysql", brightColor: "#00AAFF" },
      { name: "PostgreSQL", color: "#0066FF", iconName: "DiPostgresql", brightColor: "#0088FF" },
      { name: "MongoDB", color: "#00CC00", iconName: "SiMongodb", brightColor: "#00FF00" },
      { name: "Firebase", color: "#00DD00", iconName: "SiFirebase", brightColor: "#00FF00" },
    ]
  },
  {
    domain: "Artificial Intelligence",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", color: "#0077FF", iconName: "SiTensorflow", brightColor: "#0099FF" },
      { name: "TensorFlow", color: "#0088FF", iconName: "SiTensorflow", brightColor: "#00AAFF" },
      { name: "PyTorch", color: "#FF4444", iconName: "SiPytorch", brightColor: "#FF6666" },
      { name: "Keras", color: "#FFDD00", iconName: "SiKeras", brightColor: "#FFFF00" }
    ]
  },
  {
    domain: "Others",
    icon: "Brain",
    skills: [
      { name: "Figma UI/UX", color: "#00BB00", iconName: "SiFigma", brightColor: "#00FF00" },
      { name: "Github", color: "#FF8800", iconName: "FaGithub", brightColor: "#FFAA00" },
      { name: "IoT", color: "#00CC00", iconName: "FaCuttlefish", brightColor: "#0099FF" }
    ]
  }
];

// Legacy export for backward compatibility
export const skills = skillsByDomain.flatMap(domain => domain.skills);

export const projects = [
  { title: "NDT Ultrasonics Project", description: "A system for non-destructive testing using ultrasonic waves and display the defect positions and depth.", tech: "Python, Raspberry Pi, Ultrasonic Sensor", projectUrl: "https://drive.google.com/drive/folders/1jyTqfdIBy71k2uf8N2uYGUXJL_vIzlWN?usp=sharing", githubUrl: "" },
  { title: "AI Job Description Generator", description: "Generates tailored job descriptions using AI and natural language processing.", tech: "Python, Flask, Gemini API", projectUrl: "https://drive.google.com/drive/folders/1VlXCulyErYqxQ8I0E9rP6xgphqx_K1G-?usp=sharing", githubUrl: "" },
  { title: "Market Crop Price Prediction", description: "Machine learning project predicting agricultural crop prices using Random Forest algorithm.", tech: "Python, Flask, HTML, CSS", projectUrl: "", githubUrl: "https://github.com/DhamodharanT06/market_crop_price_prediction.git" },
  { title: "Hand Cricket Game", description: "An engaging singleplayer hand cricket game built with Flutter for UI and Dart for game logic.", tech: "Flutter, Dart", projectUrl: "https://drive.google.com/drive/folders/1E-Ja73MCWjkwOheMWzPjYPpYFVjTKNCm?usp=sharing", githubUrl: "https://github.com/DhamodharanT06/random_cricket.git" },
  { title: "Password Manager App", description: "Secure password manager with Hive local storage, interactive features, and Light/Dark mode.", tech: "Flutter, Dart, Hive", projectUrl: "https://drive.google.com/drive/folders/1nw5c1B-I37ZvRy4TrmGviIPMfdCKlL4J?usp=sharing", githubUrl: "https://github.com/DhamodharanT06/password_saver.git" },
  { title: "Crime Rate Prediction", description: "Predicts safe or unsafe zones based on date, time, and location using classification model.", tech: "Python, Pandas, RandomForestClassifier, Streamlit", projectUrl: "https://drive.google.com/drive/folders/1eigFOPP3RYWfAxvPogPlkFrufP6m60aX?usp=sharing", githubUrl: "https://github.com/DhamodharanT06/crime_rate_prediction.git" }
];

export const certificates = [
  { id: 1, title: "UI/UX Design", issuer: "GUVI Geeks Network Certified", description: "Design thinking and user experience fundamentals", issueDate: "2023", color: "blue", certificateUrl: "" },
  { id: 2, title: "Data Analytics with Python", issuer: "NPTEL", description: "Completed comprehensive course on data analysis and visualization using Python libraries", issueDate: "2023", color: "green", certificateUrl: "" },
  { id: 3, title: "Github Foundations", issuer: "GitHub", description: "Version control and collaboration using Git and GitHub", issueDate: "2024", color: "blue", certificateUrl: "" },
  { id: 4, title: "Introduction to Industry 4.0 and Industrial Internet of Things", issuer: "NPTEL", description: "Comprehensive course on Industry 4.0 concepts and IoT applications", issueDate: "2025", color: "green", certificateUrl: "" },
  { id: 5, title: "Introduction to Large Language Model(LLMs)", issuer: "NPTEL", description: "Comprehensive course on LLMs and its related knowledge", issueDate: "2025", color: "blue", certificateUrl: "" },
  
];

export const memberships = [
  { id: 1, title: "IEEE Chief Executive Member", organization: "Institute of Electrical and Electronics Engineers", status: "Active since 2024", color: "green" },
  { id: 2, title: "Designer Lead", organization: "Neuranest Association for Department", status: "Member since 2024", color: "blue" }
];

export const internships = [
  { id: 1, company: "Nitroware Technologies Pvt Ltd", role: "Machine Learning Intern", duration: "Jan 2025 - Feb 2025", description: "Learned about ML techniques and its backend integrations", technologies: "Python , Django , Flask , PyTorch , TensorFlow", color: "green" },
  // { id: 2, company: "Velrona Technologies Pvt Ltd", role: "Mobile Application Developer", duration: "Jul 2025 - Sep 2025", description: "Developed realtime project on mobile app and its backend integrations", technologies: "Flutter , Dart , Firebase , Figma", color: "blue" },
  // { id: 3, company: "Hyperready Technologies LLP", role: "Junior Developer Intern", duration: "Oct 2025 - Feb 2026", description: "Working AI agents , LLM development and this Backend on realtime project", technologies: "Mastra , Python , Typescript , PyTorch , TensorFlow", color: "green" }
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
    color: "green"
  }
];

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'academics', label: 'Academics' }, { id: 'internships', label: 'Internships' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }
];

export const socialLinks = [
  { href: 'https://github.com/DhamodharanT06', iconName: 'Github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/dhamodharan-t-57071b292/', iconName: 'Linkedin', label: 'LinkedIn' },
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dhamodharant17@gmail.com&su=Let\'s%20Connect&body=Hi%20Dhamodharan%2C%0A%0AI\'d%20like%20to%20get%20in%20touch%20with%20you%20regarding...%0A%0ALooking%20forward%20to%20connecting%21%0A%0ABest%20regards', iconName: 'Mail', label: 'Email' },
  { href: 'https://leetcode.com/u/DhamodharanT/', iconName: 'SiLeetcode', label: 'LeetCode' },
  { href: 'https://www.hackerrank.com/profile/23am017_KPRIET', iconName: 'TbBrandHackerrank', label: 'HackerRank' }
];

// /* Keep auroraConfigs variable name for compatibility though background will be replaced */
export const auroraConfigs = [
  { cls: 'aurora absolute -top-[15%] -left-[10%] w-[75vmax] h-[28vmax] rotate-[18deg]', bg: 'linear-gradient(90deg, rgba(0,100,0,0.25), rgba(0,191,255,0.14), rgba(0,100,0,0.25))', delay: '0s' },
  { cls: 'aurora absolute top-[10%] right-[-20%] w-[85vmax] h-[24vmax] rotate-[-22deg]', bg: 'linear-gradient(90deg, rgba(57,255,20,0.18), rgba(0,191,255,0.16), rgba(57,255,20,0.18))', delay: '4s' },
  { cls: 'aurora absolute bottom-[-10%] left-[-15%] w-[65vmax] h-[26vmax] rotate-[8deg]', bg: 'linear-gradient(90deg, rgba(0,100,0,0.2), rgba(0,191,255,0.14), rgba(0,100,0,0.22))', delay: '8s' }
];

/* Resume link (string) kept same */
// export const resumeLink = "https://drive.google.com/file/d/1Egp24nAfganUMIbaUT7ABiS_DrzvvoDZ/view?usp=sharing";
export const resumeLink = "https://drive.google.com/file/d/1LNrGe_iYhRVmkCwkC0PobQBMEunrZ8Kn/view?usp=drive_link";


