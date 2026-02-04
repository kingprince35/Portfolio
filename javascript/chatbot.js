// Chatbot functionality
const chatButton = document.getElementById('chatButton');
const chatContainer = document.getElementById('chatContainer');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

// Toggle chat
chatButton.addEventListener('click', () => {
  chatContainer.classList.toggle('active');
  if (chatContainer.classList.contains('active')) {
    chatInput.focus();
  }
});

chatClose.addEventListener('click', () => {
  chatContainer.classList.remove('active');
});

// Knowledge base about Prince
const knowledge = {
  name: "Prince Prajapati",
  currentRole: "Associate Engineer at Cygnet.One (July 2025 - Present)",
  previousRole: "Data Analytics Intern at Cygnet Infotech (January 2025 - June 2025)",
  education: "BE in Electronics and Communication from Vishwakarma Government Engineering College (Graduated June 2025)",
  location: "Ahmedabad, Gujarat, India",
  
  skills: {
    programming: ["Python", "SQL", "Linux Shell Scripting"],
    dataAnalysis: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Google Colab"],
    machineLearning: ["Scikit-learn", "Linear Regression", "Feature Engineering", "EDA"],
    automation: ["KNIME Analytics Platform", "Selenium", "Web Scraping", "Workflow Automation", "CA Forms Automation"],
    ai: ["Streamlit", "OpenAI API", "Prompt Engineering", "Data Analysis Automation"],
    database: ["PostgreSQL", "Database Integration", "SQL Queries"],
    visualization: ["Power BI", "Tableau", "Data Dashboards"],
    tools: ["JSON", "XML", "DAX", "Data Modeling", "SFTP", "ETL Pipelines"]
  },
  
  projects: [
    {
      name: "AI-Based Data Analysis Agent",
      description: "Built AI-powered data analysis agent with Streamlit interface for automated dataset analysis and insights generation using OpenAI API",
      technologies: ["Python", "Streamlit", "OpenAI API", "Pandas", "Data Visualization"],
      year: "2024"
    },
    {
      name: "KNIME Invoice Automation & E-Invoicing Workflow",
      description: "Developed end-to-end KNIME workflow for invoice processing with validation, JSON/XML generation, Linux automation, and SFTP for enterprise ETL pipelines",
      technologies: ["KNIME", "Python", "SQL", "JSON/XML", "Linux", "SFTP"],
      year: "2024"
    },
    {
      name: "CA Dashboard Audit Tool with Database Integration",
      description: "Developed CA forms audit dashboard with database integration featuring outlier detection, missing value analysis, and festival/quarter-wise analysis",
      technologies: ["Python", "SQL", "Power BI", "Database Integration"],
      year: "2025-Present",
      status: "Currently in production use"
    },
    {
      name: "Bank Loan Data Analysis Dashboard",
      description: "Analyzed loan approval data to understand customer behavior, trends, and risk factors using decision support dashboards",
      technologies: ["Power BI", "Excel", "EDA", "SQL", "Tableau"],
      year: "2024"
    },
    {
      name: "Social Media Analysis Dashboard",
      description: "Analyzed social media data from Instagram, YouTube, TikTok, and music platforms with interactive Power BI dashboards",
      technologies: ["Python", "Power BI", "Pandas", "NumPy", "Web Scraping"],
      year: "2024"
    }
  ],
  
  experience: [
    {
      role: "Associate Engineer",
      company: "Cygnet.One",
      duration: "July 2025 - Present",
      responsibilities: [
        "Building and automating data workflows using Python and KNIME",
        "Designing scalable data analysis solutions with Pandas, NumPy, and Matplotlib",
        "Creating end-to-end automation scripts and data pipelines",
        "Developing solutions for business decision-making"
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "Cygnet Infotech",
      duration: "January 2025 - June 2025",
      responsibilities: [
        "Working with real datasets applying AI/ML techniques",
        "Data handling and visualization",
        "Developing data analysis skills"
      ]
    },
    {
      role: "Data Analyst",
      company: "InternQ",
      duration: "July 2024 - August 2024",
      responsibilities: [
        "Analyzed datasets to uncover trends",
        "Learned machine learning concepts",
        "Passed certification exam"
      ]
    }
  ],
  
  achievements: [
    "Completed 6+ internships across multiple organizations",
    "Developed production-ready automation workflows using KNIME, Python, and Linux",
    "Built AI-powered analysis tools and interactive dashboards"
  ],
  
  certifications: [
    "Workshop on Data Analysis using Python - DAIICT",
    "Introduction to Data Concept - IBM",
    "SQL, Python, C - Royal Technosoft",
    "Low Code/No-Code Data Literacy with KNIME - From Basic to Advanced"
  ],
  
  contact: {
    email: "prajapatiprince982@gmail.com",
    linkedin: "linkedin.com/in/princeprajapati-6b988823a",
    github: "github.com/kingprince35",
    twitter: "x.com/PrincePraj3378"
  }
};

// AI Response Generator
function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Greeting responses
  if (message.match(/^(hi|hello|hey|hola|namaste)/)) {
    return "Hello! 👋 I'm here to answer your questions about Prince Prajapati. What would you like to know?";
  }
  
  // About/Introduction
  if (message.includes('who') || message.includes('about') || message.includes('introduce')) {
    return `${knowledge.name} is an Associate Engineer at Cygnet.One specializing in Data Analytics, AI/ML, and Automation. He recently graduated with a BE in Electronics and Communication from Vishwakarma Government Engineering College (June 2025). With 6+ internships and experience across data analysis, KNIME automation, and Python development, he builds scalable data pipelines and AI-powered solutions.`;
  }
  
  // Current work/role
  if (message.includes('current') || message.includes('work') || message.includes('job') || message.includes('role')) {
    return `Prince is currently working as an ${knowledge.currentRole}. He specializes in building automated data workflows using Python and KNIME, designing scalable ETL pipelines, and creating data analysis solutions. Previously, he was a ${knowledge.previousRole}.`;
  }
  
  // Skills
  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
    return `Prince's technical skills include:\n\n📊 Data Analysis: Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau\n\n🤖 AI/ML: Scikit-learn, Streamlit, OpenAI API, Machine Learning\n\n⚙️ Automation: KNIME, Selenium, Web Scraping, ETL Pipelines\n\n💾 Database: PostgreSQL, Database Integration\n\n🛠️ Tools: Linux, JSON/XML, SFTP, Git`;
  }
  
  // Projects
  if (message.includes('project')) {
    const projectList = knowledge.projects.map(p => `• ${p.name} (${p.year})`).join('\n');
    return `Prince has worked on several impressive projects:\n\n${projectList}\n\nWould you like to know more about any specific project?`;
  }
  
  // AI Agent project
  if (message.includes('ai') && (message.includes('agent') || message.includes('analysis'))) {
    const project = knowledge.projects[0];
    return `${project.name}: ${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nThis project showcases Prince's expertise in AI integration and automation!`;
  }
  
  // KNIME project
  if (message.includes('knime') || message.includes('invoice')) {
    const project = knowledge.projects[1];
    return `${project.name}: ${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nThis demonstrates his enterprise-level automation skills!`;
  }
  
  // CA Dashboard
  if (message.includes('ca') || message.includes('dashboard') || message.includes('audit')) {
    const project = knowledge.projects[2];
    return `${project.name}: ${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nStatus: ${project.status}`;
  }
  
  // Experience
  if (message.includes('experience') || message.includes('internship')) {
    return `Prince has 6+ internships across multiple organizations including:\n\n• Cygnet.One (Associate Engineer - Current)\n• Cygnet Infotech (Data Analytics Intern)\n• InternQ (Data Analyst)\n• CSRBOX, Grownited, IBM, Oasis Infobyte\n\nHe has hands-on experience in data analysis, automation, and building production-ready solutions.`;
  }
  
  // Education
  if (message.includes('education') || message.includes('college') || message.includes('degree') || message.includes('study')) {
    return `${knowledge.education}. He specialized in Electronics and Communication Engineering, building a strong foundation in technical problem-solving and data-driven solutions.`;
  }
  
  // Certifications
  if (message.includes('certifi') || message.includes('course')) {
    return `Prince has completed several certifications:\n\n${knowledge.certifications.map(c => `• ${c}`).join('\n')}\n\nHe's committed to continuous learning and skill development!`;
  }
  
  // Achievements
  if (message.includes('achievement') || message.includes('accomplish')) {
    return `Key achievements:\n\n${knowledge.achievements.map(a => `✅ ${a}`).join('\n')}`;
  }
  
  // Contact
  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return `You can reach Prince at:\n\n📧 Email: ${knowledge.contact.email}\n💼 LinkedIn: ${knowledge.contact.linkedin}\n💻 GitHub: ${knowledge.contact.github}\n🐦 Twitter: ${knowledge.contact.twitter}`;
  }
  
  // Python
  if (message.includes('python')) {
    return `Prince is highly proficient in Python! He uses it for data analysis (Pandas, NumPy), visualization (Matplotlib, Seaborn), machine learning (Scikit-learn), automation (Selenium), and building AI applications (Streamlit, OpenAI API). Check out his projects to see Python in action!`;
  }
  
  // SQL/Database
  if (message.includes('sql') || message.includes('database')) {
    return `Prince works extensively with SQL and PostgreSQL for data extraction, validation, and manipulation. He has experience designing database schemas, writing complex queries, and integrating databases with analytical dashboards.`;
  }
  
  // Machine Learning
  if (message.includes('machine learning') || message.includes('ml')) {
    return `Prince has practical ML experience including linear regression, feature engineering, and exploratory data analysis. He's built predictive models and worked with Scikit-learn for various analytical projects. He's also exploring AI integration through OpenAI APIs.`;
  }
  
  // Location
  if (message.includes('location') || message.includes('where') || message.includes('based')) {
    return `Prince is based in ${knowledge.location}.`;
  }
  
  // Hire/Available
  if (message.includes('hire') || message.includes('available') || message.includes('looking')) {
    return `Prince is currently working as an Associate Engineer at Cygnet.One. For collaboration or opportunities, you can reach him at ${knowledge.contact.email} or connect on LinkedIn!`;
  }
  
  // Thank you
  if (message.includes('thank') || message.includes('thanks')) {
    return `You're welcome! 😊 Feel free to ask if you have more questions about Prince's work, projects, or skills!`;
  }
  
  // Default response
  return `I can help you learn about Prince's:\n\n• Current role and experience\n• Technical skills and tools\n• Projects (AI Agent, KNIME Automation, CA Dashboard, etc.)\n• Education and certifications\n• Contact information\n\nWhat would you like to know?`;
}

// Add message to chat
function addMessage(content, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = content;
  
  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTyping() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot';
  typingDiv.id = 'typing-indicator';
  
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator';
  indicator.innerHTML = '<span></span><span></span><span></span>';
  
  typingDiv.appendChild(indicator);
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTyping() {
  const typing = document.getElementById('typing-indicator');
  if (typing) {
    typing.remove();
  }
}

// Send message
function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;
  
  // Add user message
  addMessage(message, true);
  chatInput.value = '';
  
  // Show typing indicator
  showTyping();
  
  // Simulate thinking time
  setTimeout(() => {
    removeTyping();
    const response = generateResponse(message);
    addMessage(response);
  }, 800 + Math.random() * 700); // Random delay between 800-1500ms
}

// Event listeners
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Prevent chat from closing when clicking inside
chatContainer.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close chat when clicking outside
document.addEventListener('click', (e) => {
  if (!chatContainer.contains(e.target) && !chatButton.contains(e.target)) {
    chatContainer.classList.remove('active');
  }
});