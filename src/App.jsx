import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Code, ExternalLink, Database, Brain, BarChart3, Globe, Cloud, FileText, TrendingUp, PieChart, Activity, Zap, Target, Users, Award, Star, CheckCircle, ArrowUpRight, BarChart, LineChart, ScatterChart } from 'lucide-react';
import './index.css';
import Shraddha_Cha_Resume from './Shraddha_Cha_Resume.pdf'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMetrics, setShowMetrics] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced tech stack icons mapping with more analytics-focused icons
  const techIcons = {
    'Python': <Code className="w-4 h-4" />,
    'SQL': <Database className="w-4 h-4" />,
    'AWS': <Cloud className="w-4 h-4" />,
    'Tableau': <BarChart3 className="w-4 h-4" />,
    'Power BI': <BarChart3 className="w-4 h-4" />,
    'Machine Learning': <Brain className="w-4 h-4" />,
    'Data Visualization': <BarChart3 className="w-4 h-4" />,
    'Streamlit': <Globe className="w-4 h-4" />,
    'OpenAI GPT API': <Brain className="w-4 h-4" />,
    'LSTM': <Brain className="w-4 h-4" />,
    'ARIMA': <TrendingUp className="w-4 h-4" />,
    'Random Forest': <Brain className="w-4 h-4" />,
    'Extra Trees': <Brain className="w-4 h-4" />,
    'Scikit-learn': <Brain className="w-4 h-4" />,
    'ROC Analysis': <BarChart3 className="w-4 h-4" />,
    'Window Functions': <Database className="w-4 h-4" />,
    'Data Cleaning': <FileText className="w-4 h-4" />,
    'MySQL': <Database className="w-4 h-4" />,
    'Excel': <FileText className="w-4 h-4" />,
    'Mapbox': <Globe className="w-4 h-4" />,
    'DAX': <Database className="w-4 h-4" />,
    'Power Query': <Database className="w-4 h-4" />,
    'HR Analytics': <Users className="w-4 h-4" />,
    'SAP S/4HANA': <Database className="w-4 h-4" />,
    'BRF+': <Code className="w-4 h-4" />,
    'Fiori': <Globe className="w-4 h-4" />,
    'Requirements Engineering': <FileText className="w-4 h-4" />,
    'Pandas': <FileText className="w-4 h-4" />,
    'Seaborn': <BarChart3 className="w-4 h-4" />,
    'Scipy': <Brain className="w-4 h-4" />,
    'Statsmodels': <Brain className="w-4 h-4" />
  };



  // Enhanced Data Analytics Background Component
  const DataAnalyticsBackground = () => (
    <div className="hero-data-elements">
      <div className="data-element">📊</div>
      <div className="data-element">📈</div>
      <div className="data-element">🔍</div>
      <div className="data-element">💡</div>
      <div className="data-element">📋</div>
      <div className="data-element">🎯</div>
      
      <div className="data-flow-line"></div>
      <div className="data-flow-line"></div>
      <div className="data-flow-line"></div>
    </div>
  );

  // Interactive Chart Component
  const InteractiveChart = ({ data, type = "bar" }) => (
    <motion.div
      className="interactive-chart"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {type === "bar" && (
        <div className="chart-container">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="chart-bar"
              style={{ height: `${item.value}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${item.value}%` }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <span className="chart-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );

  // Enhanced Skill Progress Component
  const SkillProgress = ({ skill, percentage, icon }) => (
    <motion.div
      className="skill-progress"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="skill-header">
        <span className="skill-icon">{icon}</span>
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );

  // Data Analytics Tooltip Component
  const AnalyticsTooltip = ({ children, tooltip }) => (
    <div className="tooltip" data-tooltip={tooltip}>
      {children}
    </div>
  );

  // Enhanced Project Card with Analytics
  const EnhancedProjectCard = ({ project, index }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className="project-card glow-effect"
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Achievement Badge */}
      {project.achievement && (
        <motion.div
          className="achievement-ribbon"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="ribbon-text">🏆 {project.achievement}</span>
        </motion.div>
      )}

      <div className="card-content">
        <div className="project-header">
          <h3 className="project-title">
            {project.title}
          </h3>
          <motion.div
            className="project-category-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {project.category === 'ai' && <Brain className="w-5 h-5" />}
            {project.category === 'data' && <Database className="w-5 h-5" />}
            {project.category === 'viz' && <BarChart3 className="w-5 h-5" />}
            {project.category === 'ml' && <TrendingUp className="w-5 h-5" />}
          </motion.div>
        </div>
        
        <p className="project-description">
          {project.description}
        </p>
        
        <div className="tech-stack">
          <h4 className="tech-stack-title">Technologies Used</h4>
          <div className="tech-tags">
            {project.technologies.map((tech, techIndex) => {
              const getTechCategory = (techName) => {
                const pythonTools = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Scipy', 'Statsmodels', 'Streamlit'];
                const sqlTools = ['SQL', 'MySQL', 'Window Functions', 'Data Cleaning', 'DAX', 'Power Query'];
                const mlTools = ['Machine Learning', 'LSTM', 'ARIMA', 'Random Forest', 'Extra Trees', 'ROC Analysis', 'OpenAI GPT API'];
                const vizTools = ['Tableau', 'Power BI', 'Data Visualization', 'Mapbox', 'HR Analytics'];
                const cloudTools = ['AWS', 'Cloud'];
                const otherTools = ['Excel', 'VBA', 'SAP S/4HANA', 'BRF+', 'Fiori', 'Requirements Engineering'];
                
                if (pythonTools.includes(techName)) return 'python';
                if (sqlTools.includes(techName)) return 'sql';
                if (mlTools.includes(techName)) return 'ml';
                if (vizTools.includes(techName)) return 'viz';
                if (cloudTools.includes(techName)) return 'cloud';
                if (otherTools.includes(techName)) return 'other';
                return 'other';
              };
              
              const category = getTechCategory(tech);
              
              return (
                <motion.span
                  key={techIndex}
                  className={`tech-tag ${category}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {techIcons[tech] || <Code className="w-3 h-3" />}
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </div>
        
        <div className="project-actions">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            View Code
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const projects = [
    {
      title: "AI-Powered Aviation Chatbot",
      description: "Built a Generative AI chatbot using OpenAI GPT API and Streamlit for real-time aviation insights. Integrated predictive models (LSTM for delay prediction, ARIMA for fuel usage forecasting) and deployed scalable cloud-native backend using AWS (Lambda, API Gateway, S3).",
      technologies: ["OpenAI GPT API", "Streamlit", "AWS", "LSTM", "ARIMA", "Python"],
      github: "https://github.com/shraddhac0206/Aviation_Chatbot_ML",
      live: null,
      achievement: "Second Prize – UTA Business Symposium 2025",
      category: "ai"
    },
    {
      title: "Layoffs Data Analysis",
      description: "Cleaned and structured real-world layoffs dataset using SQL, applying ROW_NUMBER() and PARTITION BY to identify and handle duplicates. Created staging tables to preserve raw data integrity and prepared dataset for KPI-driven insights.",
      technologies: ["SQL", "Window Functions", "Data Cleaning", "MySQL"],
      github: "https://github.com/shraddhac0206/Layoffs-Data-Analysis-SQL",
      live: null,
      category: "data"
    },
    {
      title: "Customer Churn Prediction",
      description: "Built churn classification models using bagging-based ensemble techniques (Random Forest, Extra Trees) with OOB validation. Preprocessed telecom customer data and identified key churn drivers (Age, Balance, Activity).",
      technologies: ["Random Forest", "Extra Trees", "Scikit-learn", "Python", "ROC Analysis"],
      github: "https://github.com/shraddhac0206/churn-modeling-bagging",
      live: null,
      category: "ml"
    },
    {
      title: "Airbnb NYC Dashboard",
      description: "Designed interactive Tableau dashboard analyzing 48K+ Airbnb listings by neighborhood, room type, pricing trends, and host activity. Visualized key KPIs and identified peak booking periods and high-demand neighborhoods.",
      technologies: ["Tableau", "Excel", "Mapbox", "Data Visualization"],
      github: "https://github.com/shraddhac0206/Airbnb-Analysis-Tableau",
      live: null,
      category: "viz"
    },
    {
      title: "HR Attrition Dashboard",
      description: "Developed interactive Power BI dashboard analyzing attrition patterns across departments using 1,451 employee records. Built KPIs and DAX measures to visualize relationships between attrition and key factors.",
      technologies: ["Power BI", "DAX", "Power Query", "HR Analytics"],
      github: "https://github.com/shraddhac0206/hr-attrition-dashboard-powerbi",
      live: null,
      category: "viz"
    },
    {
      title: "SAP S/4HANA Sales Order Enhancement",
      description: "Conducted stakeholder analysis and GAP assessment for manual sales order approval process. Proposed SAP BRF+ workflow automation and e-commerce platform integration targeting 40% reduction in processing time.",
      technologies: ["SAP S/4HANA", "BRF+", "Fiori", "Requirements Engineering"],
      github: "https://github.com/shraddhac0206/SAP-S4HANA-Requirements-Document",
      live: null,
      category: "data"
    },
    {
      title: "A/B Testing Analysis",
      description: "Analyzed real-world A/B test data to determine landing page conversion improvements. Performed statistical analysis using two-proportion Z-tests and explored behavioral patterns via subgroup analysis.",
      technologies: ["Python", "Pandas", "Seaborn", "Scipy", "Statsmodels"],
      github: "https://github.com/shraddhac0206/A-B-Testing-Analysis",
      live: null,
      category: "ml"
    },
    {
      title: "Heart Disease Power BI Dashboard",
      description: "Developed an interactive Power BI dashboard to visualize heart disease data and identify clinical patterns. Explored variables such as cholesterol, angina, age, and heart rate to uncover trends and risk indicators. Designed visuals for subgroup analysis and health-based segmentation.",
      technologies: ["Power BI", "DAX", "Data Modeling", "Data Visualization", "Heart Disease Dataset"],
      github: "https://github.com/shraddhac0206/heart-disease-powerbi-dashboard", 
      live: null,
      category: "viz"   
    },
    {
      title: "Riding Through Data: Bike Sharing Analytics",
      description: "Analyzed bike sharing demand patterns using Excel dashboards and Python-based exploratory data analysis. Explored seasonality, user segmentation, and weather impact on rentals using interactive charts and custom visualizations.",
      technologies: ["Excel", "Python", "Pandas", "Matplotlib", "Seaborn", "Data Cleaning", "EDA"],
      github: "https://github.com/shraddhac0206/bike-sharing-analytics-excel-python", // update if needed
      live: null,
      category: "data"
    }    
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'viz', label: 'Visualization' },
    { id: 'ml', label: 'Machine Learning' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const skillGroups = [
    {
      category: "Languages & Programming",
      skills: ["Python", "SQL", "R", "Pyspark", "C++ (basic)"]
    },
    {
      category: "Tech/OS",
      skills: ["MATLAB", "Jupyter Notebook", "AWS", "Microsoft PowerBI", "VSCode", "Github", "Windows", "JIRA", "Azure", "Google Cloud Platform", "Tableau", "Advanced Excel", "Rstudio", "Databricks"]
    },
    {
      category: "Libraries & Frameworks",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "Tidyverse", "Scipy"]
    },
    {
      category: "Machine Learning",
      skills: ["Classification", "Regression", "Clustering", "Neural Networks", "Deep Learning"]
    },
    {
      category: "Technical Competencies",
      skills: ["Business Requirements Gathering", "Predictive Modeling", "Regression Analysis", "Data Risk Management", "A/B Testing", "Data Mining", "ETL Automation", "CRM Analytics", "Statistical Testing", "LLM Exposure", "Data Wrangling", "Data Cleaning", "Documentation", "Technical Consultancy", "Process Assessment", "Client Collaboration"]
    }
  ];

  const workExperience = [
    {
      title: "Business Analysis Graduate Teaching Assistant",
      company: "The University of Texas at Arlington",
      duration: "January 2025 – Present",
      achievements: [
        "Mentored students in Python-based data mining, time series forecasting, and classification techniques aligned with real-world business applications.",
        "Provided hands-on guidance in tools such as Excel, Tableau, and Python for effective data visualization and reporting.",
        "Supported faculty in research initiatives and academic projects involving machine learning and automation."
      ],
      skills: ["Python", "Excel", "Tableau", "Jupyter Notebook", "Scikit-learn", "Pandas", "Matplotlib", "LaTeX", "Google Scholar", "Time Series Forecasting (ARIMA, Exponential Smoothing)", "Classification Algorithms (Decision Trees, Logistic Regression)" ]
    },
    {
      title: "Jr. Data Analyst",
      company: "Capgemini",
      duration: "January 2023 - November 2023",
      achievements: [
        "Queried redemption data using SQL and built pivot tables/VLOOKUP formulas for summarizing activation trends.",
        "Collaborated with product managers, data engineers, and finance analysts to standardize data definitions and streamline reporting workflows across departments, improving reporting consistency in a high-volume environment.",
        "Designed and optimized SQL pipelines and data models to automate financial KPI dashboards, enhancing reporting speed and accuracy by 30% for executive stakeholders.",
        "Automated manual reporting workflows and upgraded dashboard functionality to reduce turnaround time and improve data accessibility for business users."
      ],
      skills: ["SQL (MySQL, PostgreSQL, MS SQL Server)","Alteryx", "Excel (Pivot Tables, VLOOKUP, Advanced Functions)", "Power BI", "Power Query", "Data Modeling (Star Schema, Snowflake Schema)", "DAX", "JIRA", "Confluence", "Git", "GitHub", "Python"]
    },
    {
      title: "Data Analyst Intern",
      company: "Abhyaz",
      duration: "January 2022 - December 2022",
      achievements: [
        "Built dynamic dashboards using Power BI and predictive models to identify top-selling product categories and seasonal demand shifts, helping the marketing team optimize campaign timing and inventory planning.",
        "Created Excel VBA tools for automation and efficiency, integrated data pipelines across departments.",
        "Performed data variance analysis and debugged SQL queries to resolve inconsistencies in weekly sales reports, ensuring accurate data extraction from MySQL Workbook."
      ],
      skills: ["Power BI", "Excel VBA", "SQL", "MySQL", "Predictive Modeling (Linear Regression, Decision Trees)", "Python", "ETL Pipelines", "Data Cleaning (Pandas, Excel)", "Data Visualization Best Practices"]
    }
  ];

  const honorsAchievements = [
    {
      title: "Selected Presenter – Fashion AI Poster, UTA Annual Analytics Symposium 2025",
      description: "Led a 3-member team in developing a Fashion AI tool that combined color analysis, trend forecasting, and personalization algorithms for a smart and sustainable shopping experience. The project received recognition for proposing a sustainable shopping model aimed at reducing fashion waste and improving customer satisfaction through data-driven recommendations."
    },
    {
      title: "Project Lead – Assistive Navigation System for the Visually Impaired, SRMIST 2021",
      description: "Headed a multidisciplinary team to build an easy-to-use and low-cost navigation device for blind users. Focused on real users need to design a working prototype that helped improve independent movement. Managed the project timeline, teamwork, and technical tasks, delivering a practical solution that supported accessibility and everyday use."
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics Certificate",
      skills: "Data Analysis, Spreadsheets, SQL, R, Tableau, Data Cleaning, Data Visualization"
    },
    {
      name: "SAP Business Analyst Professional Certificate",
      skills: "SAP S/4HANA, BRF+, Fiori, Requirements Gathering, GAP Analysis, Business Process Mapping"
    },
    {
      name: "Data Analyst Virtual Experience Program (Accenture – Forage)",
      skills: "Data Cleaning, Storytelling, Business Development, Data Modeling, Microsoft Office, Data Visualization, Presentation Skills"
    },
    {
      name: "Data Analyst Master Program (Simplilearn)",
      skills: "Python, SQL, R, Tableau, Excel, Descriptive Analysis"
    }
  ];

  const getSkillDescription = (skill) => {
    switch (skill) {
      case 'Python':
        return 'Primary programming language for data analysis, machine learning, and automation.';
      case 'SQL':
        return 'Essential for data manipulation, querying, and database management.';
      case 'R':
        return 'Language for statistical computing and graphics.';
      case 'Pyspark':
        return 'Framework for large-scale data processing and machine learning on Apache Spark.';
      case 'C++ (basic)':
        return 'Basic knowledge of C++ for system-level programming and performance optimization.';
      case 'MATLAB':
        return 'Tool for numerical computation, visualization, and programming.';
      case 'Jupyter Notebook':
        return 'Interactive environment for data analysis and machine learning experimentation.';
      case 'AWS':
        return 'Cloud computing platform for scalable infrastructure and data storage.';
      case 'Microsoft PowerBI':
        return 'Powerful tool for data visualization, dashboard creation, and business intelligence.';
      case 'VSCode':
        return 'Integrated development environment for coding and debugging.';
      case 'Github':
        return 'Version control system for collaboration and code management.';
      case 'Windows':
        return 'Operating system for personal and enterprise computing.';
      case 'JIRA':
        return 'Project management and issue tracking tool for agile development.';
      case 'Azure':
        return 'Cloud platform for building, deploying, and managing applications.';
      case 'Google Cloud Platform':
        return 'Cloud computing platform for scalable applications and data processing.';
      case 'Tableau':
        return 'Tool for data visualization, dashboard creation, and business intelligence.';
      case 'Advanced Excel':
        return 'Proficient in advanced Excel functions for data analysis and modeling.';
      case 'Rstudio':
        return 'Integrated development environment for R programming.';
      case 'Databricks':
        return 'Platform for big data processing and machine learning on Apache Spark.';
      case 'Scikit-Learn':
        return 'Library for machine learning algorithms and tools.';
      case 'Pandas':
        return 'Library for data manipulation and analysis.';
      case 'NumPy':
        return 'Library for numerical computing with Python.';
      case 'Matplotlib':
        return 'Library for data visualization and plotting.';
      case 'Seaborn':
        return 'Library for statistical data visualization.';
      case 'NLTK':
        return 'Library for natural language processing.';
      case 'Tidyverse':
        return 'Collection of R packages for data science.';
      case 'Scipy':
        return 'Library for scientific computing and technical computing.';
      case 'Classification':
        return 'Ability to classify data into different categories.';
      case 'Regression':
        return 'Ability to predict continuous values based on input features.';
      case 'Clustering':
        return 'Ability to group similar data points together.';
      case 'Neural Networks':
        return 'Ability to build and train artificial neural networks.';
      case 'Deep Learning':
        return 'Ability to build and train deep neural networks for complex tasks.';
      case 'Business Requirements Gathering':
        return 'Ability to understand and document business needs for data projects.';
      case 'Predictive Modeling':
        return 'Ability to develop and apply models to predict future outcomes.';
      case 'Regression Analysis':
        return 'Ability to analyze relationships between variables.';
      case 'Data Risk Management':
        return 'Ability to identify, assess, and mitigate risks associated with data.';
      case 'A/B Testing':
        return 'Ability to conduct experiments to compare two versions of a product to determine which one performs better.';
      case 'Data Mining':
        return 'Ability to discover patterns and insights from large datasets.';
      case 'ETL Automation':
        return 'Ability to automate the process of extracting, transforming, and loading data.';
      case 'CRM Analytics':
        return 'Ability to analyze customer relationship management data.';
      case 'Statistical Testing':
        return 'Ability to perform statistical hypothesis testing.';
      case 'LLM Exposure':
        return 'Experience with Large Language Models (LLMs) and their applications.';
      case 'Data Wrangling':
        return 'Ability to clean, transform, and prepare data for analysis.';
      case 'Data Cleaning':
        return 'Ability to remove or fix errors in data.';
      case 'Documentation':
        return 'Ability to document processes, findings, and code.';
      case 'Technical Consultancy':
        return 'Ability to provide technical guidance and expertise to others.';
      case 'Process Assessment':
        return 'Ability to evaluate and improve existing processes.';
      case 'Client Collaboration':
        return 'Ability to work effectively with clients and stakeholders.';
      default:
        return '';
    }
  };

  return (
    <div className="App">
      {/* Animated Particles Background */}
      <div className="particles-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{
            animationDelay: `${i * 2}s`,
            left: `${10 + i * 8}%`
          }}></div>
        ))}
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        {/* Data Analytics Background Elements */}
        <div className="nav-analytics-bg">
          {/* Floating Charts */}
          <div className="floating-chart chart-1">
            <div className="chart-bar" style={{height: '60%'}}></div>
            <div className="chart-bar" style={{height: '80%'}}></div>
            <div className="chart-bar" style={{height: '40%'}}></div>
            <div className="chart-bar" style={{height: '90%'}}></div>
          </div>
          <div className="floating-chart chart-2">
            <div className="chart-line"></div>
            <div className="chart-dot"></div>
            <div className="chart-dot"></div>
            <div className="chart-dot"></div>
          </div>
          <div className="floating-chart chart-3">
            <div className="pie-chart">
              <div className="pie-segment" style={{transform: 'rotate(0deg)'}}></div>
              <div className="pie-segment" style={{transform: 'rotate(120deg)'}}></div>
              <div className="pie-segment" style={{transform: 'rotate(240deg)'}}></div>
            </div>
          </div>
          
          {/* Data Points */}
          <div className="data-point dp-1">📊</div>
          <div className="data-point dp-2">📈</div>
          <div className="data-point dp-3">🔍</div>
          <div className="data-point dp-4">💡</div>
          <div className="data-point dp-5">📋</div>
          
          {/* Grid Lines */}
          <div className="grid-line gl-1"></div>
          <div className="grid-line gl-2"></div>
          <div className="grid-line gl-3"></div>
        </div>
        
        <div className="nav-container">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="nav-brand"
            >
              Shraddha Chauhan
            </motion.div>
            <div className="nav-links">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize ${
                    activeSection === section ? 'active' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button className="mobile-menu-btn">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero section min-h-screen flex items-center justify-center relative">
        {/* Background Pattern */}
        <div className="hero-background"></div>
        
        {/* Data Analytics Background Elements */}
        <DataAnalyticsBackground />
        
        <div className="container relative z-10">
          <div className="hero-content">
            {/* Main Content */}
            <div className="hero-main text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="hero-title glow-effect"
              >
                Hi, I'm Shraddha Chauhan
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-role"
              >
                Business Analyst | Data Analyst 
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-tagline"
              >
                I decode data stories and turn them into decisions that move businesses forward.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-buttons"
              >
                <motion.button 
                  onClick={() => scrollToSection('projects')} 
                  className="btn btn-primary glow-effect"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View My Work
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection('contact')} 
                  className="btn btn-secondary glow-effect"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Get In Touch
                </motion.button>
                <motion.a 
                  href={Shraddha_Cha_Resume} 
                  download="Shraddha_Cha_Resume.pdf" 
                  className="btn btn-outline glow-effect"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Download CV
                </motion.a>
              </motion.div>
            </div>
            

            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-quick-links"
            >
              <motion.a
                href="https://www.linkedin.com/in/shraddha-chauhan-235a61233/"
                rel="noopener noreferrer"
                className="quick-link"
                title="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/shraddhac0206"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
                title="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:shraddhachauhan261999@gmail.com"
                className="quick-link"
                title="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="section-subtitle text-lg leading-relaxed">
                I see data like pieces of a puzzle; scattered, intriguing, and full of potential. I love connecting those pieces to reveal stories that spark ideas and drive change.
            </p>
            </div>
          </motion.div>
          
          <div className="grid grid-1 lg:grid-2 gap-12">
            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card education-timeline"
            >
              <div className="card-content">
                <div className="flex items-center mb-8">
                  <div className="education-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Education Journey</h3>
                </div>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker current"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="font-bold text-lg text-blue-600">Master of Science - Business Analytics</h4>
                        <span className="timeline-badge current">Current</span>
                      </div>
                      <p className="text-gray-600 font-medium">The University of Texas at Arlington, United States</p>
                      <p className="text-sm text-gray-500 mb-3">GPA: 3.9/4.0 | Expected Dec 2025</p>
                      <div className="coursework">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Key Coursework:</p>
                        <div className="course-tags">
                          <span className="course-tag">Big Data Analytics</span>
                          <span className="course-tag">Predictive Modeling</span>
                          <span className="course-tag">Data Mining & Warehousing</span>
                          <span className="course-tag">Business Intelligence</span>
                          <span className="course-tag">Applied Statistics</span>
                          <span className="course-tag">Machine Learning</span>
                          <span className="course-tag">Cloud-Based Analytics</span>
                          <span className="course-tag">Financial Forecasting</span>
                          <span className="course-tag">Marketing Analytics</span>
                          <span className="course-tag">Generative AI for Business</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker completed"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="font-bold text-lg text-gray-700">Bachelor of Technology - Electronics and Communication Engineering</h4>
                        <span className="timeline-badge completed">Completed</span>
                      </div>
                      <p className="text-gray-600 font-medium">SRM Institute of Science and Technology, India</p>
                      <p className="text-sm text-gray-500 mb-3">May 2021</p>
                      <div className="coursework">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Key Coursework:</p>
                        <div className="course-tags">
                          <span className="course-tag">Digital Signal Processing</span>
                          <span className="course-tag">Control Systems</span>
                          <span className="course-tag">Embedded Systems</span>
                          <span className="course-tag">Microprocessors</span>
                          <span className="course-tag">C Programming</span>
                          <span className="course-tag">Engineering Mathematics</span>
                          <span className="course-tag">Probability & Statistics</span>
                          <span className="course-tag">Data Structures</span>
                          <span className="course-tag">Simulation & Modeling</span>
                          <span className="course-tag">Fundamentals of Data Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What I Do - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card expertise-card"
            >
              <div className="card-content">
                <div className="flex items-center mb-8">
                  <div className="expertise-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold ml-4">What I Do</h3>
                </div>
                
                <div className="expertise-content">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I work at the intersection of data, design, and decision-making. Whether it's wrangling raw data into clean pipelines, building predictive models, or crafting dashboards that drive action, I love making complex information clear and impactful.
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Over time, I've developed a toolkit that spans programming, visualization, cloud platforms, and machine learning, but I never limit myself to tools. My focus is always on solving real problems: understanding what matters to the business and delivering insights that stick.
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I've worked across projects that involved everything from customer behavior modeling to process automation, and I'm always looking for ways to make insights more accessible, scalable, and forward-looking.
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Right now, I'm especially interested in exploring how AI, automation, and cloud-based analytics can power smarter, faster decisions, and how great storytelling turns those insights into real outcomes.
                  </p>
                  
                  <div className="focus-areas-container">
                    <h4 className="focus-areas-title">Focus Areas</h4>
                    <div className="expertise-highlights">
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span>Data Analysis & Visualization</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span>Predictive Modeling</span>
                      </div>
                      <div className="highlight-item">
                        <div className="highlight-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span>Business Intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Professional Journey in Data Science and Analytics
          </motion.p>
          
          <div className="experience-timeline">
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{experience.title}</h3>
                      <p className="experience-company">{experience.company}</p>
                    </div>
                    <span className="experience-badge">{experience.duration}</span>
                  </div>
                  
                  <div className="experience-achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <div className="achievement-tags">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="achievement-item">
                          <svg className="achievement-bullet" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="currentColor"/>
                          </svg>
                          <span className="achievement-text">{achievement}</span>
                          {achievement.includes('%') && (
                            <span className="achievement-badge">Impact</span>
                          )}
                          {(achievement.includes('automated') || achievement.includes('reduced') || achievement.includes('improved')) && (
                            <span className="achievement-badge">Key</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {experience.skills && (
                    <div className="experience-skills">
                      <h4 className="skills-title">Technologies Used:</h4>
                      <div className="skill-tags">
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A Showcase of my Data Science and Analytics Projects
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="projects-filter"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-3 gap-8">
            {filteredProjects.map((project, index) => (
              <EnhancedProjectCard project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="projects-cta"
          >
            <h3>Interested in My Work?</h3>
            <p>
              I'm always open to discussing new opportunities and collaborations. 
              Let's connect and explore how we can work together on your next project.
            </p>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              My Technical Expertise and Competencies
            </p>
          </motion.div>

          {/* Interactive Skills Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
            <div className="grid grid-2 gap-6">
              <SkillProgress 
                skill="Data Analysis" 
                percentage={95} 
                icon={<BarChart3 className="w-5 h-5" />} 
              />
              <SkillProgress 
                skill="Machine Learning" 
                percentage={90} 
                icon={<Brain className="w-5 h-5" />} 
              />
              <SkillProgress 
                skill="Data Visualization" 
                percentage={92} 
                icon={<PieChart className="w-5 h-5" />} 
              />
              <SkillProgress 
                skill="SQL & Databases" 
                percentage={88} 
                icon={<Database className="w-5 h-5" />} 
              />
              <SkillProgress 
                skill="Python Programming" 
                percentage={94} 
                icon={<Code className="w-5 h-5" />} 
              />
              <SkillProgress 
                skill="Business Intelligence" 
                percentage={87} 
                icon={<TrendingUp className="w-5 h-5" />} 
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {skillGroups.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className={`skill-category-card glow-effect ${skillGroup.category === "Languages & Programming" ? "featured" : ""} ${skillGroup.category === "Machine Learning" ? "ml-featured" : ""}`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    {skillGroup.category === "Languages & Programming" && (
                      <Code className="w-6 h-6" />
                    )}
                    {skillGroup.category === "Tech/OS" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {skillGroup.category === "Libraries & Frameworks" && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {skillGroup.category === "Machine Learning" && (
                      <Brain className="w-6 h-6" />
                    )}
                    {skillGroup.category === "Technical Competencies" && (
                      <CheckCircle className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="skill-category-title">{skillGroup.category}</h3>
                </div>

                {skillGroup.category === "Technical Competencies" ? (
                  <div className="skill-tags">
                    {/* Modeling & Analysis */}
                    <div className="skill-subgroup">
                      <h4 className="skill-subgroup-title">
                        <TrendingUp className="w-4 h-4" />
                        Modeling & Analysis
                      </h4>
                      <div className="skill-tags-row">
                        {skillGroup.skills.filter(skill => 
                          ['Predictive Modeling', 'Regression Analysis', 'A/B Testing', 'Statistical Testing', 'Data Mining'].includes(skill)
                        ).map((skill, skillIndex) => (
                          <AnalyticsTooltip
                            key={skillIndex}
                            tooltip={`${skill} → Used in advanced analytics and statistical modeling projects`}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="skill-tag competency-tag modeling"
                            >
                              {skill}
                            </motion.span>
                          </AnalyticsTooltip>
                        ))}
                      </div>
                    </div>

                    {/* Data Operations */}
                    <div className="skill-subgroup">
                      <h4 className="skill-subgroup-title">
                        <Database className="w-4 h-4" />
                        Data Operations
                      </h4>
                      <div className="skill-tags-row">
                        {skillGroup.skills.filter(skill => 
                          ['Data Wrangling', 'Data Cleaning', 'ETL Automation', 'Data Risk Management', 'CRM Analytics'].includes(skill)
                        ).map((skill, skillIndex) => (
                          <AnalyticsTooltip
                            key={skillIndex}
                            tooltip={`${skill} → Applied in data pipeline development and quality assurance`}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="skill-tag competency-tag data"
                            >
                              {skill}
                            </motion.span>
                          </AnalyticsTooltip>
                        ))}
                      </div>
                    </div>

                    {/* Consulting & Communication */}
                    <div className="skill-subgroup">
                      <h4 className="skill-subgroup-title">
                        <Users className="w-4 h-4" />
                        Consulting & Communication
                      </h4>
                      <div className="skill-tags-row">
                        {skillGroup.skills.filter(skill => 
                          ['Client Collaboration', 'Technical Consultancy', 'Documentation', 'Process Assessment', 'Business Requirements Gathering'].includes(skill)
                        ).map((skill, skillIndex) => (
                          <AnalyticsTooltip
                            key={skillIndex}
                            tooltip={`${skill} → Essential for stakeholder communication and project success`}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="skill-tag competency-tag soft"
                            >
                              {skill}
                            </motion.span>
                          </AnalyticsTooltip>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="skill-tags">
                    {skillGroup.skills.map((skill, skillIndex) => {
                      // Get icon for specific skills
                      const getSkillIcon = (skillName) => {
                        const iconMap = {
                          'Python': <Code className="w-4 h-4" />,
                          'SQL': <Database className="w-4 h-4" />,
                          'AWS': <Cloud className="w-4 h-4" />,
                          'Power BI': <BarChart3 className="w-4 h-4" />,
                          'Tableau': <BarChart3 className="w-4 h-4" />,
                          'R': <Code className="w-4 h-4" />,
                          'Jupyter Notebook': <FileText className="w-4 h-4" />,
                          'GitHub': <Github className="w-4 h-4" />
                        };
                        return iconMap[skillName] || null;
                      };

                      const skillIcon = getSkillIcon(skill);
                      const isProgramming = skillGroup.category === "Languages & Programming";
                      
                      return (
                        <AnalyticsTooltip
                          key={skillIndex}
                          tooltip={`${skill} → ${getSkillDescription(skill)}`}
                        >
                          <motion.span
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`skill-tag ${isProgramming ? "programming-languages" : ""}`}
                          >
                            {skillIcon && <span className="skill-icon">{skillIcon}</span>}
                            {skill}
                          </motion.span>
                        </AnalyticsTooltip>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Achievements Section */}
      <section id="honors" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Honors & Achievements
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Recognition for Innovation, Leadership, and Impactful Contributions
          </motion.p>
          
          <div className="grid grid-3">
            {honorsAchievements.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="honor-card"
              >
                <div className="honor-header">
                  <div className="honor-badges">
                    {index === 0 ? (
                      <>
                        <span className="honor-badge award">Award</span>
                        <span className="honor-badge innovation">Innovation</span>
                      </>
                    ) : (
                      <>
                        <span className="honor-badge leadership">Leadership</span>
                        <span className="honor-badge impact">Impact</span>
                      </>
                    )}
                  </div>
                </div>
                
                <h3 className="honor-title">{honor.title}</h3>
                
                <div className="honor-metrics">
                  {index === 0 ? (
                    <div className="metric-item">
                      <span>Presented to 150+ attendees</span>
                    </div>
                  ) : (
                    <div className="metric-item">
                      <span>3-month development cycle</span>
                    </div>
                  )}
                </div>
                
                <p className="honor-description">
                  {honor.description.split('.').map((sentence, sentenceIndex) => {
                    if (sentence.trim() === '') return null;
                    
                    // Bold key phrases
                    let enhancedSentence = sentence
                      .replace(/(sustainable shopping model)/gi, '<strong>$1</strong>')
                      .replace(/(assistive device)/gi, '<strong>$1</strong>')
                      .replace(/(Fashion AI tool)/gi, '<strong>$1</strong>')
                      .replace(/(navigation device)/gi, '<strong>$1</strong>')
                      .replace(/(blind users)/gi, '<strong>$1</strong>')
                      .replace(/(independent movement)/gi, '<strong>$1</strong>')
                      .replace(/(data-driven recommendations)/gi, '<strong>$1</strong>');
                    
                    return (
                      <span key={sentenceIndex} dangerouslySetInnerHTML={{ __html: enhancedSentence }} />
                    );
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Certifications and Specialized Training Programs
          </motion.p>
          
          <div className="grid grid-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="certification-card"
              >
                <div className="certification-header">
                  <div className="certification-icon">
                    {cert.name.includes('Google') && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                    )}
                    {cert.name.includes('SAP') && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {cert.name.includes('Accenture') && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {cert.name.includes('Simplilearn') && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                  </div>
                  <div className="certification-badge">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Certified
                  </div>
                </div>
                
                <h3 className="certification-title">{cert.name}</h3>
                
                <div className="certification-skills">
                  {cert.skills.split(', ').map((skill, skillIndex) => (
                    <span key={skillIndex} className="certification-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's connect and discuss opportunities
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="contact-content">
                <h3 className="font-semibold text-sm md:text-base">Email</h3>
                <a href="mailto:shraddhachauhan261999@gmail.com" className="text-blue-600 hover:underline text-sm md:text-base contact-link">
                  shraddhachauhan261999@gmail.com
                </a>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
              className="contact-item"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="contact-content">
                <h3 className="font-semibold text-sm md:text-base">Phone</h3>
                <a href="tel:682-389-9848" className="text-blue-600 hover:underline text-sm md:text-base contact-link">
                      682-389-9848
                    </a>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="contact-content">
                <h3 className="font-semibold text-sm md:text-base">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/shraddha-chauhan-235a61233/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm md:text-base contact-link">
                  Linkedin
                    </a>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="contact-content">
                <h3 className="font-semibold text-sm md:text-base">GitHub</h3>
                <a href="https://github.com/shraddhac0206" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm md:text-base contact-link">
                  Github
                    </a>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="contact-item"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1 flex items-center justify-center">
                📍
              </div>
              <div className="contact-content">
                <h3 className="font-semibold text-sm md:text-base">Location</h3>
                <p className="text-gray-600 text-sm md:text-base">Dallas, Texas, United States</p>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 