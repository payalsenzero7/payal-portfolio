import type { Project, Skill, Experience, Education, Certification, Stat, NavLink, SocialLink } from '../types';

export const personalInfo = {
  name: 'Payal',
  title: 'Business Analyst',
  tagline: 'Transforming supply chain data into actionable business insights',
  bio: 'I am a detail-oriented Business Analyst with expertise in supply chain analytics, data visualization, and machine learning. I bridge the gap between business needs and technical solutions, turning complex data into strategic decisions.',
  email: 'payalsenzero7@gmail.com',
  github: 'https://github.com/payalsenzero7',
  linkedin: 'https://linkedin.com/in/payalsenzero7',
  location: 'India',
  resumeUrl: '/resume.pdf',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/payalsenzero7', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/payalsenzero7', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:payalsenzero7@gmail.com', icon: 'Mail' },
];

export const stats: Stat[] = [
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Tools Mastered', value: 10, suffix: '+' },
  { label: 'Dashboards Built', value: 8, suffix: '+' },
];

export const skills: Skill[] = [
  // BA Tools
  { name: 'Jira', level: 90, category: 'ba-tools' },
  { name: 'Confluence', level: 85, category: 'ba-tools' },
  { name: 'SQL', level: 88, category: 'ba-tools' },
  { name: 'Visio', level: 80, category: 'ba-tools' },
  { name: 'Lucidchart', level: 85, category: 'ba-tools' },
  
  // Data & Analytics
  { name: 'Tableau', level: 92, category: 'data-analytics' },
  { name: 'Power BI', level: 85, category: 'data-analytics' },
  { name: 'Python', level: 78, category: 'data-analytics' },
  { name: 'Excel', level: 95, category: 'data-analytics' },
  { name: 'Pandas', level: 80, category: 'data-analytics' },
  
  // Methodologies
  { name: 'Agile/Scrum', level: 90, category: 'methodologies' },
  { name: 'SDLC', level: 88, category: 'methodologies' },
  { name: 'Waterfall', level: 75, category: 'methodologies' },
  { name: 'Requirements Gathering', level: 92, category: 'methodologies' },
  { name: 'Process Mapping', level: 88, category: 'methodologies' },
  
  // Soft Skills
  { name: 'Stakeholder Management', level: 90, category: 'soft-skills' },
  { name: 'Communication', level: 92, category: 'soft-skills' },
  { name: 'Problem Solving', level: 90, category: 'soft-skills' },
  { name: 'Critical Thinking', level: 88, category: 'soft-skills' },
];

export const projects: Project[] = [
  {
    id: 'supply-chain-ml',
    title: 'Supply Chain Delivery Delay Prediction',
    description: 'Machine learning model to predict delivery delays using Python and advanced analytics.',
    longDescription: 'Built a comprehensive machine learning pipeline to predict supply chain delivery delays. The project involves data cleaning, feature engineering, and model selection to achieve high accuracy in delay prediction, helping businesses proactively manage their logistics operations.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook', 'Machine Learning'],
    features: [
      'Data cleaning and preprocessing of supply chain datasets',
      'Feature engineering for delivery delay indicators',
      'Multiple ML models compared (Random Forest, XGBoost, etc.)',
      'Model evaluation with cross-validation',
      'Actionable insights for logistics optimization',
    ],
    githubUrl: 'https://github.com/payalsenzero7/supply-chain-management-project',
    category: 'machine-learning',
  },
  {
    id: 'supply-chain-tableau',
    title: 'Supply Chain Tableau Dashboard',
    description: 'Interactive Tableau dashboard for analyzing sales, inventory, regional trends, and supply chain KPIs.',
    longDescription: 'Designed and developed an interactive Tableau dashboard that provides real-time visibility into supply chain performance. The dashboard tracks key metrics including sales performance, inventory turnover, regional distribution trends, and operational KPIs for data-driven decision making.',
    techStack: ['Tableau', 'SQL', 'Data Visualization', 'KPI Tracking', 'Business Intelligence'],
    features: [
      'Interactive sales performance analysis',
      'Inventory turnover and stock level monitoring',
      'Regional trend analysis with geographic visualization',
      'Supply chain KPI tracking and alerting',
      'Drill-down capabilities for root cause analysis',
    ],
    githubUrl: 'https://github.com/payalsenzero7/supply-chain-management-tableau-dashboard',
    category: 'dashboard',
  },
];

export const experience: Experience[] = [
  {
    id: 'ba-1',
    role: 'Business Analyst',
    company: 'Your Company',
    duration: '2023 - Present',
    location: 'India',
    achievements: [
      'Led requirements gathering for supply chain optimization project',
      'Developed Tableau dashboards reducing reporting time by 40%',
      'Collaborated with cross-functional teams to implement ML-based delay prediction',
      'Conducted stakeholder workshops and presented findings to leadership',
    ],
    techStack: ['SQL', 'Tableau', 'Jira', 'Confluence', 'Excel'],
  },
  {
    id: 'ba-2',
    role: 'Junior Business Analyst',
    company: 'Previous Company',
    duration: '2021 - 2023',
    location: 'India',
    achievements: [
      'Assisted in process mapping and documentation',
      'Created reports and visualizations for business stakeholders',
      'Participated in Agile ceremonies and sprint planning',
      'Supported UAT testing and defect tracking',
    ],
    techStack: ['Excel', 'Power BI', 'Jira', 'Visio'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology',
    institution: 'Your University',
    year: '2021',
    description: 'Focused on data analysis, statistics, and business processes.',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary (PCM)',
    institution: 'Your School',
    year: '2017',
    description: 'Physics, Chemistry, Mathematics with Computer Science.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    year: '2024',
  },
  {
    id: 'cert-2',
    name: 'Certified Business Analysis Professional (CBAP)',
    issuer: 'IIBA',
    year: '2024',
  },
  {
    id: 'cert-3',
    name: 'Agile Scrum Master',
    issuer: 'Scrum Alliance',
    year: '2023',
  },
];
