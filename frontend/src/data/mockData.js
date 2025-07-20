// Mock data for portfolio sections

export const personalInfo = {
  name: "Golla Mallikarjuna",
  title: "BTech Student | Web Developer AI",
  email: "mallikarjuna.golla@example.com",
  phone: "+91 9876543210",
  location: "Hyderabad, Telangana, India",
  profileImage: "/images/profile.jpg",
  bio: "I am a passionate BTech student specializing in Web Development and Artificial Intelligence. With a strong foundation in computer science and a keen interest in emerging technologies, I strive to create innovative solutions that solve real-world problems. My journey involves continuous learning and applying cutting-edge technologies to build intelligent web applications.",
  socialLinks: {
    linkedin: "https://linkedin.com/in/mallikarjuna-golla",
    github: "https://github.com/mallikarjuna-golla",
    twitter: "https://twitter.com/mallikarjuna_g",
    portfolio: "https://mallikarjuna-portfolio.com"
  }
};

export const skills = {
  technical: [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 88, category: "Programming" },
    { name: "Machine Learning", level: 75, category: "AI/ML" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "Express.js", level: 78, category: "Backend" },
    { name: "TensorFlow", level: 70, category: "AI/ML" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Docker", level: 65, category: "DevOps" },
    { name: "AWS", level: 60, category: "Cloud" }
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration", 
    "Project Management",
    "Critical Thinking",
    "Communication",
    "Adaptability",
    "Leadership",
    "Time Management"
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    description: "A real-time chat application integrated with OpenAI GPT for intelligent responses and conversation analysis.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/mallikarjuna-golla/ai-chat-app",
    liveUrl: "https://ai-chat-app-demo.com",
    category: "AI/ML",
    bgColor: "light-pink",
    featured: true
  },
  {
    id: 2,
    title: "Smart Task Management System",
    description: "An intelligent task management platform with AI-driven priority suggestions and productivity analytics.",
    image: "/images/project2.jpg",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "TensorFlow"],
    githubUrl: "https://github.com/mallikarjuna-golla/smart-task-manager",
    liveUrl: "https://smart-task-demo.com",
    category: "Full Stack",
    bgColor: "mid-blue",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Analytics Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics and machine learning insights.",
    image: "/images/project3.jpg",
    technologies: ["React", "D3.js", "Node.js", "Redis", "Python"],
    githubUrl: "https://github.com/mallikarjuna-golla/ecommerce-dashboard",
    liveUrl: "https://ecommerce-analytics-demo.com",
    category: "Data Visualization",
    bgColor: "mid-purple",
    featured: false
  },
  {
    id: 4,
    title: "Voice-Controlled Web Assistant",
    description: "A web-based voice assistant that can perform various tasks using natural language processing and voice recognition.",
    image: "/images/project4.jpg",
    technologies: ["JavaScript", "Web Speech API", "Python", "Flask", "NLP"],
    githubUrl: "https://github.com/mallikarjuna-golla/voice-assistant",
    liveUrl: "https://voice-assistant-demo.com",
    category: "AI/ML",
    bgColor: "light-yellow",
    featured: false
  },
  {
    id: 5,
    title: "Blockchain-Based Voting System",
    description: "A secure and transparent voting system built on blockchain technology with smart contracts.",
    image: "/images/project5.jpg",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "Node.js"],
    githubUrl: "https://github.com/mallikarjuna-golla/blockchain-voting",
    liveUrl: "https://blockchain-voting-demo.com",
    category: "Blockchain",
    bgColor: "mid-green",
    featured: true
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialId: "AWS-SAA-123456",
    image: "/images/cert1.jpg",
    description: "Validated expertise in designing distributed systems on AWS",
    verificationUrl: "https://aws.amazon.com/verification/123456"
  },
  {
    id: 2,
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "October 2023",
    credentialId: "GCP-PCA-789012",
    image: "/images/cert2.jpg",
    description: "Demonstrated ability to design and manage robust, secure, scalable solutions",
    verificationUrl: "https://googlecloud.com/verification/789012"
  },
  {
    id: 3,
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "August 2023",
    credentialId: "COURSERA-ML-345678",
    image: "/images/cert3.jpg",
    description: "Comprehensive understanding of machine learning algorithms and applications",
    verificationUrl: "https://coursera.org/verify/345678"
  },
  {
    id: 4,
    title: "React Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "June 2023",
    credentialId: "META-REACT-901234",
    image: "/images/cert4.jpg",
    description: "Advanced React.js development skills and best practices",
    verificationUrl: "https://meta.com/verification/901234"
  },
  {
    id: 5,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "April 2023",
    credentialId: "MONGODB-DEV-567890",
    image: "/images/cert5.jpg",
    description: "Expertise in MongoDB database design and development",
    verificationUrl: "https://university.mongodb.com/verification/567890"
  },
  {
    id: 6,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "March 2023",
    credentialId: "CEH-123789",
    image: "/images/cert6.jpg",
    description: "Knowledge of cybersecurity and ethical hacking methodologies",
    verificationUrl: "https://eccouncil.org/verification/123789"
  }
];

export const experiences = [
  {
    id: 1,
    title: "AI/ML Intern",
    company: "TechCorp Solutions",
    duration: "May 2023 - August 2023",
    location: "Hyderabad, India",
    description: "Developed machine learning models for customer behavior prediction and worked on natural language processing projects.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    achievements: [
      "Improved model accuracy by 15%",
      "Automated data preprocessing pipeline",
      "Created comprehensive documentation"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "StartupXYZ",
    duration: "January 2023 - April 2023",
    location: "Remote",
    description: "Built responsive web applications using React and Node.js, implemented RESTful APIs and database management.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    achievements: [
      "Developed 3 major application features",
      "Reduced page load time by 40%",
      "Implemented user authentication system"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology (IIT)",
    duration: "2021 - 2025",
    location: "Hyderabad, India",
    gpa: "8.5/10",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence"
    ]
  }
];