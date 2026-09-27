/* ============================================================
   Single source of truth for all portfolio content.
   Edit this file to personalize the site.
   ============================================================ */

export const personalInfo = {
  name: 'Payal Sen',
  /** Shown in the browser tab + hero heading */
  initials: 'PS',
  role: 'Business Analyst',
  /** Small line above the hero headline */
  eyebrow: 'Business Analyst — Supply Chain & Operations',
  /** Hero headline (keep it punchy) */
  headline: 'Turning warehouse noise into boardroom decisions.',
  /** Hero supporting paragraph */
  lede: 'Payal reads messy operational data — inventory, logistics, procurement — and hands leadership the one chart that ends the debate.',
  /** About section — first sentence is emphasised */
  aboutLead: 'Payal turns operational chaos into decisions people can act on.',
  about: [
    'She spends most of her time inside spreadsheets, SQL queries, and stakeholder meetings — translating between what the data shows and what the business needs to hear.',
    'Her focus is supply chain and operations: inventory positioning, procurement spend, and the small process changes that compound into real savings.',
    'Outside of dashboards, she is usually the one asking "but what does this actually cost us" before anyone else does.',
  ],
  email: 'payalsenzero7@gmail.com',
  github: 'https://github.com/payalsenzero7',
  linkedin: 'https://linkedin.com/in/payalsenzero7',
  location: 'India',
  resumeUrl: '/resume.pdf',
  footerNote: 'Built with data, not decoration',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/** Hero stat row — count-up numbers */
export const stats = [
  { value: 18, suffix: '%', label: 'avg. cost reduction found' },
  { value: 40, suffix: '+', label: 'dashboards shipped' },
  { value: 6, suffix: '', label: 'industries analyzed' },
];

/** Scrolling marquee under the hero */
export const marqueeItems = [
  'SQL',
  'Power BI',
  'Python',
  'Tableau',
  'Excel',
  'Forecasting',
  'Procurement',
];

/** Skills as chip groups (3 cards) */
export const skillGroups = [
  {
    id: 'analysis',
    title: 'Analysis & Tools',
    items: ['SQL', 'Excel / Power Pivot', 'Power BI', 'Python (pandas)', 'Tableau'],
  },
  {
    id: 'domain',
    title: 'Domain',
    items: ['Supply Chain', 'Inventory Planning', 'Procurement', 'Demand Forecasting'],
  },
  {
    id: 'people',
    title: 'Working with people',
    items: ['Stakeholder Comms', 'Data Storytelling', 'Process Mapping', 'Requirements Gathering'],
  },
];

/**
 * Selected work — each card leads with one number.
 * NOTE: the `metric` values below are placeholders. Replace them
 * with your own measured results before sharing the portfolio.
 */
export const projects = [
  {
    id: 'ml-delay-prediction',
    metric: '87%',
    metricLabel: 'delay prediction accuracy',
    title: 'Delivery delay prediction',
    description:
      'Built a machine learning pipeline that flags at-risk supply chain deliveries before they slip, so operations can act early instead of explaining late.',
    tag: 'Machine Learning · Python',
    githubUrl: 'https://github.com/payalsenzero7/supply-chain-management-project',
  },
  {
    id: 'tableau-dashboard',
    metric: '5+',
    metricLabel: 'KPIs in one live view',
    title: 'Supply chain Tableau dashboard',
    description:
      'Replaced scattered spreadsheets with an interactive dashboard covering sales, inventory performance, regional trends, and operational KPIs.',
    tag: 'Dashboards · Tableau',
    githubUrl: 'https://github.com/payalsenzero7/supply-chain-management-tableau-dashboard',
  },
  {
    id: 'ops-reporting',
    metric: '6 → 1',
    metricLabel: 'reporting tools consolidated',
    title: 'Ops reporting overhaul',
    description:
      'Consolidated six disconnected reporting tools into a single dashboard the operations team actually trusts and checks daily.',
    tag: 'Process · Power BI',
    githubUrl: 'https://github.com/payalsenzero7',
  },
];

/** Contact section */
export const contact = {
  heading: 'Have a number that needs explaining?',
  emailLabel: 'Email Payal',
  linkedinLabel: 'LinkedIn',
};
