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
  currentRole: "Associate Software Engineer, Data Analytics and AI at Cygnet.One (July 2025 - Present)",
  previousRole: "Data Analytics Intern at Cygnet Infotech (January 2025 - June 2025)",
  education: "BE in Electronics and Communication from Vishwakarma Government Engineering College (Graduated June 2025)",
  location: "Ahmedabad, Gujarat, India",

  skills: {
    programming: ["Python", "SQL", "Linux Shell Scripting"],
    llm: ["OpenAI API", "GROQ API", "Gemini 2.5 Flash", "LangChain", "RAG", "ChromaDB", "BM25", "Prompt Engineering", "Sentence Transformers"],
    backend: ["FastAPI", "SQLAlchemy", "Alembic", "JWT", "REST APIs", "PostgreSQL"],
    machineLearning: ["Scikit-learn", "XGBoost", "Feature Engineering", "EDA"],
    automation: ["KNIME Analytics Platform", "Selenium", "Web Scraping", "Workflow Automation", "ETL Pipelines", "UPSERT", "ALTERID"],
    devops: ["Docker", "docker-compose", "Linux", "Git", "PowerShell"],
    dataAnalysis: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Google Colab"],
    visualization: ["Power BI", "Tableau", "Streamlit", "Data Dashboards"],
    tools: ["JSON", "XML", "DAX", "Data Modeling", "SFTP"]
  },

  projects: [
    {
      name: "mlreadyscore — ML Data Readiness Package (Published on PyPI)",
      description: "Open-source Python package that scores any dataset's ML-readiness (0-100 with A+ to F grades) via 9 automated checks (missing values, outliers, multicollinearity, class imbalance, and more) with actionable fix recommendations. Supports CSV, Excel, JSON, and Parquet. Install with: pip install mlreadyscore",
      technologies: ["Python", "Pandas", "PyPI", "Open Source", "Data Quality"],
      year: "2025",
      status: "Published on PyPI (pip install mlreadyscore)"
    },
    {
      name: "EInvoice Nexus System v2.5 — Enterprise AI Compliance Platform",
      description: "25-feature enterprise AI platform with hybrid RAG (60% semantic + 40% BM25), AI country research, ERP gap assessment, proposal generator, and role-based access. Deployed in production at Cygnet.One, reducing compliance research time by 70%",
      technologies: ["FastAPI", "PostgreSQL", "ChromaDB", "GROQ", "Gemini", "BM25", "Docker"],
      year: "2025",
      status: "In production at Cygnet.One"
    },
    {
      name: "Financial Fraud Detection ML System",
      description: "End-to-end ML pipeline with 90% accuracy using IQR/Z-score outlier detection, cash violation rules (Rs 10K threshold), and voucher gap analysis. Deployed via FastAPI + Docker with a GROQ-powered AI chatbot, used in production by CA firms",
      technologies: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "PostgreSQL", "Streamlit", "Docker", "GROQ"],
      year: "2025",
      status: "In production by CA firms"
    },
    {
      name: "Tally-to-PostgreSQL ETL Pipeline",
      description: "Production ETL syncing Tally XML to PostgreSQL using GUID primary keys and ALTERID incremental sync. Reduced sync time from 10 minutes to 30 seconds with full UPSERT handling",
      technologies: ["Python", "PostgreSQL", "SQLAlchemy", "XML Parsing", "UPSERT", "ALTERID"],
      year: "2025"
    },
    {
      name: "KNIME Multi-Country E-Invoicing Pipeline",
      description: "Enterprise ETL automating invoice compliance for UAE Peppol, Poland KSeF, and Belgium B2B on production Linux servers. Docker containerized with a PowerShell file watcher, delivering an 80% reduction in manual effort",
      technologies: ["KNIME", "Python", "Docker", "JSON", "XML", "PostgreSQL", "Linux", "SFTP", "PowerShell"],
      year: "2025",
      status: "In production at Cygnet.One"
    },
    {
      name: "AI Data Analysis Agent",
      description: "AI agent that auto-analyzes uploaded datasets and generates insights using prompt engineering. 6-tab Streamlit interface with modular OOP architecture, delivering an 80% reduction in manual analysis",
      technologies: ["Python", "Streamlit", "OpenAI API", "GROQ API", "Pandas"],
      year: "2025"
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
  
  // Skills
  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
    return `Prince's technical skills include:\n\n🧠 LLM & GenAI: OpenAI API, GROQ, Gemini 2.5 Flash, LangChain, RAG, ChromaDB, BM25, Prompt Engineering\n\n⚙️ Backend: FastAPI, SQLAlchemy, Alembic, JWT, REST APIs, PostgreSQL\n\n🤖 ML: Scikit-learn, XGBoost, Feature Engineering, EDA\n\n🐳 DevOps: Docker, docker-compose, Linux, Git, PowerShell\n\n📊 Data & Viz: Python, SQL, Pandas, NumPy, KNIME, Selenium, Power BI, Tableau, Streamlit`;
  }

  // Helper: find a project by keywords
  const findProject = (...keys) => knowledge.projects.find(p => keys.some(k => p.name.toLowerCase().includes(k)));
  const describeProject = (p) => `${p.name}:\n\n${p.description}\n\nTechnologies: ${p.technologies.join(', ')}${p.status ? `\n\nStatus: ${p.status}` : ''}`;

  // Projects
  if (message.includes('project')) {
    const projectList = knowledge.projects.map(p => `• ${p.name} (${p.year})`).join('\n');
    return `Prince has worked on several impressive projects:\n\n${projectList}\n\nWould you like to know more about any specific project?`;
  }

  // mlreadyscore published library
  if (message.includes('mlready') || message.includes('library') || message.includes('package') || message.includes('pypi') || message.includes('pip ') || message.includes('open source') || message.includes('open-source')) {
    return describeProject(findProject('mlreadyscore')) + `\n\nIt's live on PyPI — anyone can install it with: pip install mlreadyscore 🎉`;
  }

  // EInvoice Nexus / RAG platform
  if (message.includes('einvoice') || message.includes('nexus') || message.includes('compliance') || message.includes('rag')) {
    return describeProject(findProject('einvoice', 'nexus')) + `\n\nIt uses a hybrid RAG approach (60% semantic search + 40% BM25 keyword) — a great example of Prince's GenAI engineering work!`;
  }

  // Fraud Detection
  if (message.includes('fraud') || message.includes('detection')) {
    return describeProject(findProject('fraud'));
  }

  // ETL / Tally
  if (message.includes('etl') || message.includes('tally') || message.includes('pipeline')) {
    return describeProject(findProject('tally', 'knime multi')) || describeProject(findProject('tally'));
  }

  // AI Agent project
  if (message.includes('ai') && (message.includes('agent') || message.includes('analysis'))) {
    return describeProject(findProject('ai data analysis', 'ai-based')) + `\n\nThis showcases Prince's expertise in AI integration and automation!`;
  }

  // KNIME project
  if (message.includes('knime') || message.includes('invoice') || message.includes('peppol')) {
    return describeProject(findProject('knime')) + `\n\nThis demonstrates his enterprise-level automation skills!`;
  }

  // CA Dashboard
  if (/\bca\b/.test(message) || message.includes('dashboard') || message.includes('audit')) {
    return describeProject(findProject('ca dashboard'));
  }

  // LLM / GenAI / RAG
  if (message.includes('llm') || message.includes('genai') || message.includes('gen ai') || message.includes('langchain') || message.includes('groq') || message.includes('gemini') || message.includes('chromadb') || message.includes('vector')) {
    return `Prince builds production GenAI systems! He works with OpenAI, GROQ, and Gemini 2.5 Flash models, orchestrated with LangChain. He has hands-on experience with Retrieval-Augmented Generation (RAG), hybrid search combining semantic (ChromaDB + Sentence Transformers) and keyword (BM25) retrieval, and prompt engineering. See the EInvoice Nexus and AI Data Analysis Agent projects for examples!`;
  }

  // Backend / FastAPI
  if (message.includes('fastapi') || message.includes('backend') || message.includes('api')) {
    return `Prince builds backends with FastAPI, SQLAlchemy, and Alembic, secured with JWT auth and exposing REST APIs over PostgreSQL. His EInvoice Nexus and Fraud Detection systems are both served via FastAPI in production.`;
  }

  // Docker / DevOps
  if (message.includes('docker') || message.includes('devops') || message.includes('deploy') || message.includes('container')) {
    return `Prince containerizes and deploys his apps with Docker and docker-compose on Linux servers, automating workflows with PowerShell and shell scripting. Several of his systems (EInvoice Nexus, Fraud Detection, KNIME pipelines) are Docker-deployed in production.`;
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
    return `Prince has practical ML experience with Scikit-learn and XGBoost, feature engineering, EDA, and outlier detection (IQR/Z-score). He built a Financial Fraud Detection ML system reaching 90% accuracy, deployed in production via FastAPI + Docker. He also engineers GenAI/LLM systems using RAG.`;
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

  // Current work/role (generic — checked after specific topics)
  if (message.includes('current') || message.includes('work') || message.includes('job') || message.includes('role')) {
    return `Prince is currently working as an ${knowledge.currentRole}. He builds production AI/GenAI systems (RAG, LLM apps), automated data workflows with Python and KNIME, and scalable ETL pipelines. Previously, he was a ${knowledge.previousRole}.`;
  }

  // About/Introduction (generic — checked last before default)
  if (message.includes('who') || message.includes('about') || message.includes('introduce') || message.includes('prince') || message.includes('yourself') || message.includes('tell me')) {
    return `${knowledge.name} is an Associate Software Engineer (Data Analytics & AI) at Cygnet.One. He recently graduated with a BE in Electronics and Communication from Vishwakarma Government Engineering College (June 2025). With 6+ internships, he builds production GenAI/LLM systems (RAG, FastAPI, Docker), scalable data pipelines, and AI-powered analytical solutions. Ask me about his skills, projects, or experience!`;
  }

  // Default response
  return `I can help you learn about Prince's:\n\n• Current role and experience\n• LLM/GenAI, RAG, FastAPI & ML skills\n• Projects (EInvoice Nexus, Fraud Detection, Tally ETL, KNIME pipelines, AI Agent)\n• Education and certifications\n• Contact information\n\nWhat would you like to know?`;
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