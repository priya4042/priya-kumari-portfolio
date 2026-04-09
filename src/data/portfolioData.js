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
  location: 'India', // Removed specific city as per feedback
  github: 'https://github.com/priya4042',
  linkedin: 'https://www.linkedin.com/in/priya-kumari-developer', // UPDATE with your real LinkedIn URL
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
    'I bring a passion for writing clean, efficient code and building applications that make a real difference. My experience spans from property management systems to forest information portals, giving me a diverse technical background.',
  ],
  highlights: [
    { label: 'Backend Development', value: 'ASP.NET Core, REST APIs' },
    { label: 'Frontend Development', value: 'JavaScript, jQuery, HTML/CSS' },
    { label: 'Database Management', value: 'MS SQL Server, Queries' },
    { label: 'Integration', value: 'Third-party APIs, CRM Solutions' },
  ],
  info: [
    { icon: 'location', label: 'Location', value: 'India' },
    { icon: 'email', label: 'Email', value: 'priya083dhakur101@gmail.com' },
    { icon: 'degree', label: 'Degree', value: 'BCA' },
    { icon: 'status', label: 'Status', value: 'Open to Work' },
  ],
};

// Skills — NO percentages, just level labels
export const skillsData = [
  { name: '.NET', subtitle: 'Framework & Core', level: 'Expert', icon: 'microsoft', color: '#6c63ff', description: 'Building enterprise-grade applications', usedIn: 'CRM Integration Platform' },
  { name: 'ASP.NET', subtitle: 'Web Applications', level: 'Expert', icon: 'code', color: '#ff6b9d', description: 'Scalable MVC web solutions', usedIn: 'Property Tax Portal' },
  { name: 'ASP.NET MVC', subtitle: 'Architecture', level: 'Expert', icon: 'layers', color: '#4ecdc4', description: 'Clean architecture patterns', usedIn: 'Forest Information Portal' },
  { name: 'JavaScript', subtitle: 'Frontend & Logic', level: 'Advanced', icon: 'js', color: '#f7df1e', description: 'Interactive user experiences', usedIn: 'All Projects' },
  { name: 'SQL Server', subtitle: 'Database Mgmt', level: 'Advanced', icon: 'database', color: '#6c63ff', description: 'Complex queries & optimization', usedIn: 'CRM Integration Platform' },
  { name: 'jQuery', subtitle: 'DOM Manipulation', level: 'Advanced', icon: 'jquery', color: '#ff6b9d', description: 'Dynamic frontend effects', usedIn: 'Hunt Lease Management' },
  { name: 'REST API', subtitle: 'Integration', level: 'Advanced', icon: 'api', color: '#4ecdc4', description: 'Seamless service connections', usedIn: 'CRM Integration Platform' },
];

// Services linked to projects
export const servicesData = [
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions with .NET, C#, and SQL Server for enterprise applications.',
    icon: 'server',
    linkedProject: 'CRM Integration Platform',
  },
  {
    title: 'API Development',
    description: 'RESTful API design, implementation, and third-party service integration.',
    icon: 'api',
    linkedProject: 'CRM Integration Platform',
  },
  {
    title: 'Frontend Development',
    description: 'Interactive, responsive user interfaces with JavaScript, jQuery, and modern CSS.',
    icon: 'layout',
    linkedProject: 'Property Tax Portal',
  },
  {
    title: 'Database Design',
    description: 'Efficient database architecture, complex queries, and performance optimization.',
    icon: 'database',
    linkedProject: 'Forest Information Portal',
  },
];

// Projects with STAR method details
export const projectsData = [
  {
    title: 'CRM Integration Platform',
    category: 'Enterprise',
    description: 'Led the development of a comprehensive CRM integration platform connecting multiple third-party services with seamless API orchestration.',
    technologies: ['ASP.NET Core', 'REST API', 'SQL Server', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    color: '#6c63ff',
    github: 'https://github.com/priya4042',
    live: null,
    star: {
      situation: 'SoftWebPos needed to connect multiple third-party services (payment gateways, CRM tools, notification systems) into a unified platform. Manual data entry was causing errors and taking 70% of team time.',
      task: 'I was tasked with designing and building an integration layer that would connect 5+ external APIs seamlessly while ensuring data consistency and error handling.',
      action: 'I designed a service layer architecture with a common interface for all integrations. Implemented OAuth and API key authentication, built retry logic for transient failures, created unified response models with adapters for different API formats, and wrote comprehensive unit tests.',
      result: 'Reduced manual data entry by 70%, eliminated data inconsistencies, integrated 5+ third-party APIs successfully, and the platform now serves 500+ active users daily.',
    },
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
    star: {
      situation: 'CS Soft Solution\'s client needed a digital solution to manage hundreds of property lease agreements that were being tracked manually in spreadsheets, leading to missed payments and lost documents.',
      task: 'Design and develop a complete lease management system with agreement tracking, automated payment reminders, tenant communication, and document management.',
      action: 'Built the system using ASP.NET MVC with a SQL Server database. Implemented automated email notifications for payment due dates, a document upload system, tenant profile management, and a dashboard with lease expiry alerts. Used jQuery for dynamic UI updates.',
      result: 'Digitized the entire lease management process, automated payment reminders reducing missed payments by 80%, and improved tenant communication response time by 60%.',
    },
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
    star: {
      situation: 'Local government needed an online portal for citizens to calculate and pay property taxes. The existing manual process required citizens to visit offices in person, causing long queues and inefficiency.',
      task: 'Build a public-facing web portal where citizens can calculate their property tax, make online payments, and download receipts.',
      action: 'Developed the portal using ASP.NET Web Forms with SQL Server. Built a tax calculation engine based on government rules, integrated payment gateway for online transactions, implemented receipt generation as downloadable PDFs, and created an admin panel for government officials to manage tax records.',
      result: 'Processed 1000+ transactions in the first quarter, reduced office visits by 60%, citizens could pay taxes 24/7 from home, and government saved significant administrative costs.',
    },
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
    star: {
      situation: 'Multiple government departments needed a centralized portal to access forest data — coverage statistics, species information, and monitoring records were scattered across departments with no unified view.',
      task: 'Build the portal from scratch — database design, backend APIs, interactive dashboards, and role-based access for different departments.',
      action: 'Designed the complete database schema in SQL Server. Built RESTful APIs with ASP.NET Core for data access. Created interactive dashboards using jQuery and Chart.js showing forest coverage trends, species distribution maps, and monitoring alerts. Implemented role-based authentication for different government departments.',
      result: 'Unified forest data across departments, provided real-time dashboards that improved decision-making speed, served multiple government departments with role-based access, and received positive feedback from department heads.',
    },
  },
  {
    title: 'Portfolio Website',
    category: 'Freelance',
    description: 'Designed and developed this modern animated portfolio using React.js, Framer Motion, and custom PDF resume generation.',
    technologies: ['React.js', 'Framer Motion', 'CSS3', 'jsPDF'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    color: '#6c63ff',
    github: 'https://github.com/priya4042/priya-kumari-portfolio',
    live: 'https://priya4042.github.io/priya-kumari-portfolio',
    star: {
      situation: 'I needed a professional online presence to showcase my skills, projects, and experience to recruiters in a modern, visually appealing way.',
      task: 'Build a fully responsive, animated portfolio website with interactive elements, downloadable resume, and professional design.',
      action: 'Built from scratch using React.js with component-based architecture. Added smooth animations with Framer Motion, interactive particles with tsparticles, custom SVG logo, custom cursor, parallax tilt effects, typewriter animations, and a PDF resume generator using jsPDF. Made fully responsive across all devices with comprehensive media queries.',
      result: 'Created a professional portfolio that loads fast, works perfectly on all devices, showcases all my work effectively, and generates a recruiter-friendly PDF resume on demand. Deployed on GitHub Pages.',
    },
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
      'Building robust web applications using modern technologies and best practices. Leading API integration initiatives and developing scalable CRM solutions.',
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
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    location: 'Remote',
    period: '2024 - Present',
    current: true,
    description:
      'Taking on freelance projects to expand my skill set into modern frontend technologies including React.js and responsive design.',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Framer Motion', 'Responsive Design'],
    achievements: [
      'Built a fully animated portfolio website using React',
      'Implemented PDF resume generation with jsPDF',
      'Delivered responsive designs across all device sizes',
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
  {
    name: 'Freelance Client',
    role: 'Portfolio Project',
    text: 'Priya built a stunning, modern portfolio website for me using React. The animations are smooth, the design is professional, and it works perfectly on my phone. Highly recommend her frontend skills!',
    rating: 5,
  },
];
