/* ============================================================
   Single source of truth for all portfolio content.
   Sourced from payal_sen_business_analyst_cv.pdf.
   Edit this file to personalize the site.
   ============================================================ */

/** Public assets live under the GitHub Pages base path, not the domain root. */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

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
  lede: 'I read messy operational data — inventory, logistics, fulfilment — and hand leadership the one chart that ends the debate.',
  /** About section — first sentence is emphasised */
  aboutLead: 'I turn operational chaos into decisions people can act on.',
  about: [
    'MBA in Business Analytics from MIT World Peace University, currently a Business Analyst Intern at AI Variant, where I gather requirements from cross-functional stakeholders and turn them into published Power BI and Tableau dashboards.',
    'My work sits in supply chain and operations: cleaning and validating the data in Power Query, modelling it, writing DAX measures, and running the exploratory analysis in Python that explains why deliveries slip and what that costs.',
    'Before analytics I spent three years in due diligence at Vcheck Global and counselling at UpGrad, which is probably why I am the person in the room asking "but what does this actually cost us" before anyone else does.',
  ],
  phone: '+91 9511817632',
  phoneHref: '+919511817632',
  email: 'payalsenzero7@gmail.com',
  github: 'https://github.com/payalsenzero7',
  linkedin: 'https://linkedin.com/in/payalsen07',
  location: 'Pune, Maharashtra, India',
  languages: 'English · Hindi · Marathi',
  resumeUrl: asset('resume.pdf'),
  footerNote: 'Built with data, not decoration',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Hero stat row — count-up numbers.
 * Every figure here is measured from the work described in the CV / notebook.
 */
export const stats = [
  { value: 2.1, prefix: '$', suffix: 'M', decimals: 1, label: 'loss traced to late deliveries' },
  { value: 172765, prefix: '', suffix: '', decimals: 0, label: 'orders analysed end to end' },
  { value: 8, prefix: '', suffix: '+', decimals: 0, label: 'KPIs in one live operational view' },
];

/** Scrolling marquee under the hero */
export const marqueeItems = [
  'Power BI',
  'SQL',
  'Python',
  'Tableau',
  'Excel',
  'Power Query',
  'DAX',
  'KPI Reporting',
  'ETL',
  'Gap Analysis',
];

/**
 * The toolset, rendered as a row of brand-mark tiles.
 * `icon` keys resolve in components/ui/SkillIcon.tsx
 */
export const toolkit = [
  { id: 'excel', label: 'Excel', note: 'Advanced', icon: 'excel' },
  { id: 'sql', label: 'SQL', note: 'Querying', icon: 'sql' },
  { id: 'python', label: 'Python', note: 'Pandas', icon: 'python' },
  { id: 'powerbi', label: 'Power BI', note: 'DAX · Modelling', icon: 'powerbi' },
  { id: 'tableau', label: 'Tableau', note: 'Dashboards', icon: 'tableau' },
  { id: 'powerquery', label: 'Power Query', note: 'ETL', icon: 'powerquery' },
  { id: 'dax', label: 'DAX', note: 'Measures', icon: 'dax' },
] as const;

/** Skills as chip groups (3 cards) — `icon` keys resolve in SkillIcon */
export const skillGroups = [
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    items: [
      { label: 'Data Cleaning', icon: 'sparkles' },
      { label: 'ETL', icon: 'workflow' },
      { label: 'EDA', icon: 'search' },
      { label: 'KPI Reporting', icon: 'target' },
      { label: 'Dashboard Development', icon: 'chartColumn' },
      { label: 'Data Validation', icon: 'badgeCheck' },
      { label: 'Trend Analysis', icon: 'trendingUp' },
      { label: 'Data Storytelling', icon: 'presentation' },
    ],
  },
  {
    id: 'business',
    title: 'Business Analysis',
    items: [
      { label: 'Requirement Gathering', icon: 'clipboardList' },
      { label: 'Process Analysis', icon: 'gitBranch' },
      { label: 'Gap Analysis', icon: 'ruler' },
      { label: 'User Stories', icon: 'fileText' },
      { label: 'Stakeholder Communication', icon: 'users' },
      { label: 'Process Improvement', icon: 'zap' },
    ],
  },
  {
    id: 'ways',
    title: 'Ways of Working',
    items: [
      { label: 'Agile / Scrum', icon: 'jira' },
      { label: 'SDLC', icon: 'blocks' },
      { label: 'Cross-functional Collaboration', icon: 'network' },
      { label: 'Data Modelling', icon: 'layers' },
      { label: 'Problem-solving', icon: 'lightbulb' },
      { label: 'Communication', icon: 'messageSquare' },
      { label: 'Attention to Detail', icon: 'focus' },
      { label: 'Time Management', icon: 'timer' },
    ],
  },
] as const;

/** Work experience, most recent first */
export const experience = [
  {
    id: 'ai-variant',
    role: 'Business Analyst Intern',
    company: 'AI Variant',
    period: 'Jul 2025 – Present',
    location: 'Pune, Maharashtra',
    current: true,
    points: [
      'Gathered business requirements from cross-functional stakeholders, translated them into analytical deliverables, and presented data-driven insights during weekly sprint reviews.',
      'Designed and published interactive Power BI and Tableau dashboards tracking 8+ KPIs — order volume, delivery SLA and stock levels — used by management for weekly performance reviews.',
      'Executed an ETL pipeline in Power Query to clean and transform supply chain datasets, resolving missing values, duplicates and type errors to improve accuracy for downstream KPI reporting.',
      'Conducted EDA on supply chain and operations datasets in Python (Pandas) to surface demand trends, late delivery patterns and inventory gaps, feeding management reporting directly.',
      'Created DAX measures and data models in Power BI to support structured, drillable reporting and trend analysis for business stakeholders.',
      'Performed gap analysis on operational workflows and documented findings as structured business recommendations for process improvement.',
    ],
  },
  {
    id: 'vcheck',
    role: 'Diligence Analyst Intern',
    company: 'Vcheck Global',
    period: 'Mar 2025 – Jun 2025',
    location: 'Pune, Maharashtra',
    current: false,
    points: [
      'Prepared structured due diligence reports by cross-verifying financial records, corporate filings and regulatory disclosures across multiple U.S. government databases, ensuring accuracy prior to client delivery.',
      'Researched litigation, compliance risks and background verification data, supporting timely and accurate investigation outcomes for clients.',
      'Collaborated with team members to maintain consistent data quality standards and meet delivery deadlines across concurrent investigation assignments.',
    ],
  },
  {
    id: 'upgrad',
    role: 'Education Counsellor',
    company: 'UpGrad',
    period: 'Jul 2024 – Sep 2024',
    location: 'Pune, Maharashtra',
    current: false,
    points: [
      'Evaluated prospective student requirements and provided tailored program guidance, contributing to student conversion and satisfaction metrics.',
      'Collaborated with cross-functional teams to analyse workflow gaps and recommend process improvements for counselling operations.',
    ],
  },
  {
    id: 'ifas',
    role: 'Sales Executive',
    company: 'IFAS Pvt Ltd',
    period: 'Jun 2022 – Aug 2023',
    location: 'Pune, Maharashtra',
    current: false,
    points: [
      'Tracked sales performance and prepared structured activity reports using Excel for team and management review.',
      'Consistently achieved and exceeded assigned sales targets, strengthening communication and negotiation skills through direct client interactions.',
    ],
  },
] as const;

/** Education, most recent first */
export const education = [
  {
    id: 'mba',
    qualification: 'MBA — Business Analytics',
    institution: 'MIT World Peace University',
    period: 'Aug 2023 – Aug 2025',
    location: 'Pune, Maharashtra',
  },
  {
    id: 'bcom',
    qualification: 'Bachelor of Commerce (B.Com)',
    institution: 'Dr. Punjab Rao Deshmukh College of Commerce',
    period: 'Nov 2017 – Nov 2020',
    location: 'Nagpur, Maharashtra',
  },
  {
    id: 'hsc',
    qualification: 'Higher Secondary Certificate (HSC)',
    institution: 'Saket Public Junior College of Science',
    period: 'Jun 2015 – Mar 2017',
    location: 'Gondia, Maharashtra',
  },
  {
    id: 'cbse',
    qualification: 'Secondary School Certificate (CBSE)',
    institution: 'Saket Public School',
    period: 'Jun 2014 – Mar 2015',
    location: 'Gondia, Maharashtra',
  },
] as const;

/** Certifications */
export const certifications = [
  { id: 'coursera', title: 'Business Analytics Specialization', issuer: 'Coursera', icon: 'coursera' },
  { id: 'udemy', title: 'Microsoft Excel Financial Modeling', issuer: 'Udemy', icon: 'udemy' },
  { id: 'excelr', title: 'Business Analysis and Data Analysis', issuer: 'ExcelR', icon: 'medal' },
] as const;

/**
 * Selected work — each card leads with one measured number.
 * `repo` is the GitHub slug used to pull live metadata at build time
 * (see scripts/fetch-repos.mjs). Null = no public repo, links to the profile.
 *
 * `tableauUrl` is the one thing you need to fill in yourself:
 *   1. Open "Supply Chain Tableau Dashboard.twbx" in Tableau Desktop
 *   2. Server -> Tableau Public -> Publish...  (free account)
 *   3. Copy the view URL, e.g. https://public.tableau.com/views/Name/View
 * Paste it below and the card gains a "View live dashboard" link.
 */
const tableauPublicUrl: string | null = null;

export const projects = [
  {
    id: 'delivery-performance',
    repo: 'supply-chain-management-project',
    metric: '$2.1M',
    metricLabel: 'loss traced to late deliveries',
    title: 'Supply Chain Delivery Performance Analysis',
    description:
      'Cleaned and modelled 172,765 orders, then segmented by region, shipping mode and category to isolate where delays come from — and what each one costs in lost profit.',
    tag: 'Python · Pandas · EDA',
    /** Renders the real notebook, outputs included, via nbviewer */
    demoUrl: 'https://nbviewer.org/github/payalsenzero7/supply-chain-management-project/blob/main/SupplyChain.ipynb',
    demoLabel: 'Open notebook',
  },
  {
    id: 'supply-chain-dashboard',
    repo: 'supply-chain-management-tableau-dashboard',
    metric: '8+',
    metricLabel: 'KPIs in one operational view',
    title: 'Supply Chain Management Analytics Dashboard',
    description:
      'End-to-end dashboard over the same supply chain data: ETL in Power Query, a modelled star schema, DAX measures and drill-downs for order volume, delivery performance and inventory.',
    tag: 'Dashboards · Power BI · Tableau',
    demoUrl: tableauPublicUrl,
    demoLabel: 'View live dashboard',
  },
  {
    id: 'zomato-analytics',
    repo: null,
    metric: '2',
    metricLabel: 'tools compared on one dataset',
    title: 'Zomato Restaurant Analytics',
    description:
      'Analysed a restaurant dataset for preference, cuisine and pricing trends across locations, then rebuilt the story in both Tableau and Power BI using bar charts, maps and trend visuals.',
    tag: 'Tableau · Power BI · Excel',
    demoUrl: null,
    demoLabel: null,
  },
] as const;

/** Contact section */
export const contact = {
  heading: 'Have a number that needs explaining?',
  emailLabel: 'Email Payal',
  linkedinLabel: 'LinkedIn',
};
