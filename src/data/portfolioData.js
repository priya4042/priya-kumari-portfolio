export const personalInfo = {
  name: 'Priya Kumari',
  roles: [
    'Software Developer',
    '.NET Specialist',
    'API Integration Expert',
    'Full Stack Developer',
    'Problem Solver',
  ],
  description:
    'Crafting robust web solutions with .NET & JavaScript. Passionate about building scalable applications, seamless API integrations, and pixel-perfect user experiences.',
  email: 'priya083dhakur101@gmail.com',
  phone: '+91 9733673826',
  location: 'Kangra, Himachal Pradesh, India',
  github: 'https://github.com/priya4042',
  linkedin: 'https://www.linkedin.com/in/priya-kumari-developer', // UPDATE THIS with your real LinkedIn URL
  // IMPORTANT: Replace these with your real photos for authenticity
  // Upload your photo to the public/ folder and use '/your-photo.jpg'
  // Or use a direct image URL from LinkedIn/Google Drive
  heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face',
  aboutImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=650&fit=crop&crop=face',
  stats: [
    { number: 3, label: 'Years Experience', suffix: '+', icon: 'briefcase' },
    { number: 10, label: 'Projects Delivered', suffix: '+', icon: 'code' },
    { number: 7, label: 'Technologies', suffix: '+', icon: 'layers' },
    { number: 100, label: 'Client Satisfaction', suffix: '%', icon: 'heart' },
  ],
};

export const aboutData = {
  title: '.NET & JavaScript',
  paragraphs: [
    "I'm an organized and dependable software developer with strong expertise in ASP.NET technologies, SQL, jQuery, and API integration. I specialize in leading teams for seamless API integration within CRM solutions and thrive in working across both backend and frontend technologies.",
    'Based in Kangra, India, I bring a passion for writing clean, efficient code and building applications that make a real difference. My experience spans from property management systems to forest information portals, giving me a diverse technical background.',
  ],
  highlights: [
    { label: 'Backend Development', value: 'ASP.NET Core, REST APIs' },
    { label: 'Frontend Development', value: 'JavaScript, jQuery, HTML/CSS' },
    { label: 'Database Management', value: 'MS SQL Server, Queries' },
    { label: 'Integration', value: 'Third-party APIs, CRM Solutions' },
  ],
  info: [
    { icon: 'location', label: 'Location', value: 'Kangra, India' },
    { icon: 'email', label: 'Email', value: 'priya083dhakur101@gmail.com' },
    { icon: 'degree', label: 'Degree', value: 'BCA' },
    { icon: 'status', label: 'Status', value: 'Open to Work' },
  ],
};

export const skillsData = [
  { name: '.NET', subtitle: 'Framework & Core', percent: 75, icon: 'microsoft', color: '#6c63ff', description: 'Building enterprise-grade applications' },
  { name: 'ASP.NET', subtitle: 'Web Applications', percent: 75, icon: 'code', color: '#ff6b9d', description: 'Scalable MVC web solutions' },
  { name: 'ASP.NET MVC', subtitle: 'Architecture', percent: 75, icon: 'layers', color: '#4ecdc4', description: 'Clean architecture patterns' },
  { name: 'JavaScript', subtitle: 'Frontend & Logic', percent: 60, icon: 'js', color: '#f7df1e', description: 'Interactive user experiences' },
  { name: 'SQL', subtitle: 'Database Mgmt', percent: 60, icon: 'database', color: '#6c63ff', description: 'Complex queries & optimization' },
  { name: 'jQuery', subtitle: 'DOM Manipulation', percent: 60, icon: 'jquery', color: '#ff6b9d', description: 'Dynamic frontend effects' },
  { name: 'REST API', subtitle: 'Integration', percent: 60, icon: 'api', color: '#4ecdc4', description: 'Seamless service connections' },
];

export const projectsData = [
  {
    title: 'CRM Integration Platform',
    category: 'Enterprise',
    description: 'Led the development of a comprehensive CRM integration platform connecting multiple third-party services with seamless API orchestration.',
    technologies: ['ASP.NET Core', 'REST API', 'SQL Server', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    color: '#6c63ff',
    github: 'https://github.com/priya4042', // UPDATE: Add real repo link if available
    live: null, // UPDATE: Add live demo link if available
  },
  {
    title: 'Hunt Lease Management',
    category: 'Property Management',
    description: 'Built a full-featured lease management system for tracking property agreements, payments, and tenant communications.',
    technologies: ['ASP.NET MVC', 'SQL Server', 'jQuery', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    color: '#ff6b9d',
    github: 'https://github.com/priya4042',
    live: null,
  },
  {
    title: 'Property Tax Portal',
    category: 'Government',
    description: 'Developed a citizen-facing property tax calculation and payment platform used by local government bodies.',
    technologies: ['ASP.NET', 'JavaScript', 'SQL Server', 'Web Forms'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
    color: '#4ecdc4',
    github: 'https://github.com/priya4042',
    live: null,
  },
  {
    title: 'Forest Information Portal',
    category: 'Government',
    description: 'Created an information portal for forest management and data visualization serving government departments.',
    technologies: ['ASP.NET Core', 'REST API', 'MS SQL', 'jQuery'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    color: '#f7df1e',
    github: 'https://github.com/priya4042',
    live: null,
  },
];

export const experienceData = [
  {
    title: 'Software Developer',
    company: 'SoftWebPos',
    location: 'Surat',
    period: 'Sept 2023 - Present',
    current: true,
    description:
      'Building robust web applications using modern technologies and best practices. Leading API integration initiatives and developing scalable CRM solutions. Collaborating with cross-functional teams to deliver high-quality software.',
    technologies: ['ASP.NET Core', 'MS SQL', 'JavaScript', 'jQuery', 'REST API', 'Third-party Integration'],
    achievements: [
      'Led integration of 5+ third-party APIs into CRM platform',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers on best practices',
    ],
  },
  {
    title: 'Software Developer',
    company: 'CS Soft Solution',
    location: 'Chandigarh',
    period: 'Sept 2022 - Aug 2023',
    current: false,
    description:
      'Worked on diverse projects including property management and government portal systems. Developed end-to-end features from database design to frontend implementation.',
    technologies: ['ASP.NET', 'SQL Server', 'JavaScript', 'Web Forms'],
    achievements: [
      'Delivered 3 major projects within tight deadlines',
      'Built the Forest Information Portal from scratch',
      'Reduced bug count by 60% through rigorous testing',
    ],
    projects: [
      { name: 'Hunt Lease', desc: 'Lease management system' },
      { name: 'Property Tax', desc: 'Tax calculation platform' },
      { name: 'Forest Information Portal', desc: 'Government information system' },
    ],
  },
];

export const educationData = [
  {
    year: '2018 - 2021',
    degree: 'Bachelor of Computer Applications',
    institution: 'Dronacharya PG College, Kangra',
    description: 'Comprehensive study of computer science fundamentals, programming, and software development. Built a strong foundation in data structures, algorithms, and web technologies.',
    icon: 'graduation',
    grade: 'First Class',
  },
  {
    year: '2015 - 2016',
    degree: 'Senior Secondary Certificate',
    institution: 'G.A.V Sen Sec School, Kangra',
    description: 'Higher secondary education with focus on science and mathematics, developing analytical thinking.',
    icon: 'school',
  },
  {
    year: '2013 - 2014',
    degree: 'Higher Secondary Certificate',
    institution: 'Adarsh Public Sen Sec School, Matour',
    description: 'Foundation education building strong academic fundamentals and discipline.',
    icon: 'book',
  },
];

export const servicesData = [
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions with .NET, C#, and SQL Server for enterprise applications.',
    icon: 'server',
  },
  {
    title: 'API Development',
    description: 'RESTful API design, implementation, and third-party service integration.',
    icon: 'api',
  },
  {
    title: 'Frontend Development',
    description: 'Interactive, responsive user interfaces with JavaScript, jQuery, and modern CSS.',
    icon: 'layout',
  },
  {
    title: 'Database Design',
    description: 'Efficient database architecture, complex queries, and performance optimization.',
    icon: 'database',
  },
];

export const testimonialsData = [
  {
    name: 'Team Lead',
    role: 'SoftWebPos',
    text: 'Priya is an exceptional developer who consistently delivers high-quality code. Her API integration skills are outstanding, and she has a great ability to break down complex problems into manageable solutions.',
    rating: 5,
  },
  {
    name: 'Project Manager',
    role: 'CS Soft Solution',
    text: 'Working with Priya was a pleasure. She delivered three major projects within tight deadlines and always maintained excellent code quality. Her dedication and problem-solving skills are truly impressive.',
    rating: 5,
  },
  {
    name: 'Senior Developer',
    role: 'SoftWebPos',
    text: 'Priya quickly became a key contributor to our team. Her understanding of .NET and SQL Server is solid, and she has shown great initiative in mentoring junior developers and improving our codebase.',
    rating: 5,
  },
];
