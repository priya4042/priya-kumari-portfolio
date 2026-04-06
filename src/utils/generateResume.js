import jsPDF from 'jspdf';

const generateResume = () => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const W = 210;
  const H = 297;
  const ml = 18; // margin left
  const mr = 18; // margin right
  const cw = W - ml - mr; // content width
  let y = 0;

  // Colors
  const C = {
    primary: [44, 62, 80],      // Dark navy for headings
    accent: [41, 128, 185],     // Professional blue for accents
    text: [55, 55, 65],         // Dark gray for body
    light: [120, 120, 135],     // Light gray for secondary
    white: [255, 255, 255],
    line: [200, 205, 215],      // Subtle lines
    pillBg: [235, 240, 248],    // Light blue pills
    headerBg: [44, 62, 80],     // Navy header
    headerAccent: [52, 152, 219], // Blue accent
  };

  // ============================================
  // HEADER — Clean navy bar with white text
  // ============================================
  doc.setFillColor(...C.headerBg);
  doc.rect(0, 0, W, 48, 'F');

  // Accent bottom line
  doc.setFillColor(...C.headerAccent);
  doc.rect(0, 48, W, 1.5, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...C.white);
  doc.text('Priya Kumari', ml, 18);

  // Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11.5);
  doc.setTextColor(160, 200, 240);
  doc.text('Software Developer  |  .NET & JavaScript Specialist', ml, 26);

  // Contact row 1
  doc.setFontSize(8.5);
  doc.setTextColor(190, 205, 225);
  doc.text('priya083dhakur101@gmail.com', ml, 35);
  doc.text('|', ml + 55, 35);
  doc.text('+91 9733673826', ml + 60, 35);
  doc.text('|', ml + 90, 35);
  doc.text('Kangra, Himachal Pradesh, India', ml + 95, 35);

  // Contact row 2 - links
  doc.setFontSize(7.5);
  doc.setTextColor(150, 175, 205);
  doc.text('GitHub: github.com/priya4042', ml, 42);
  doc.text('|', ml + 50, 42);
  doc.text('LinkedIn: linkedin.com/in/priya-kumari', ml + 55, 42);
  doc.text('|', ml + 115, 42);
  doc.text('Portfolio: priya4042.github.io', ml + 120, 42);

  y = 57;

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  const sectionTitle = (title) => {
    checkPage(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...C.primary);
    doc.text(title.toUpperCase(), ml, y);
    y += 1.5;
    // Underline
    doc.setDrawColor(...C.headerAccent);
    doc.setLineWidth(0.8);
    doc.line(ml, y, ml + 42, y);
    // Thin line extending
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.2);
    doc.line(ml + 42, y, W - mr, y);
    y += 6;
  };

  const bodyText = (text, indent = 0) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...C.text);
    const lines = doc.splitTextToSize(text, cw - indent);
    doc.text(lines, ml + indent, y);
    y += lines.length * 4 + 1;
  };

  const bullet = (text, indent = 5) => {
    checkPage(10);
    // Bullet dot
    doc.setFillColor(...C.headerAccent);
    doc.circle(ml + indent - 1.5, y - 1.2, 0.8, 'F');
    // Text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(...C.text);
    const lines = doc.splitTextToSize(text, cw - indent - 4);
    doc.text(lines, ml + indent + 2, y);
    y += lines.length * 3.8 + 1.8;
  };

  const checkPage = (need = 25) => {
    if (y + need > H - 16) {
      doc.addPage();
      y = 18;
    }
  };

  const jobHeader = (title, company, location, dates) => {
    checkPage(22);
    // Title and dates on same line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...C.primary);
    doc.text(title, ml, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.light);
    doc.text(dates, W - mr, y, { align: 'right' });
    y += 4.5;

    // Company
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(...C.accent);
    doc.text(company + ', ' + location, ml, y);
    y += 5.5;
  };

  // ============================================
  // PROFESSIONAL SUMMARY
  // ============================================
  sectionTitle('Professional Summary');
  bodyText(
    'Results-driven Software Developer with 3+ years of hands-on experience building enterprise-grade web applications using ASP.NET Core, C#, JavaScript, SQL Server, and REST APIs. Proven track record of delivering 10+ production projects including CRM integrations, government portals, and property management systems. Skilled in leading API integration initiatives, optimizing database performance by up to 40%, and mentoring junior developers. Seeking to leverage my full-stack development expertise to drive impactful solutions at a forward-thinking organization.'
  );
  y += 2;

  // ============================================
  // TECHNICAL SKILLS
  // ============================================
  sectionTitle('Technical Skills');

  const skills = [
    ['Backend', 'C#, .NET Framework, .NET Core, ASP.NET MVC, ASP.NET Web Forms, Entity Framework'],
    ['Frontend', 'JavaScript (ES6+), jQuery, HTML5, CSS3, Bootstrap, Responsive Design'],
    ['Database', 'Microsoft SQL Server, T-SQL, Stored Procedures, Database Optimization'],
    ['API & Integration', 'REST API Design, Third-party API Integration, CRM Integration, Web Services'],
    ['Tools & Practices', 'Git, Visual Studio, VS Code, IIS, Agile/Scrum, Code Review, Unit Testing'],
  ];

  skills.forEach(([label, value]) => {
    // Label
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.primary);
    const labelText = label + ':';
    doc.text(labelText, ml + 2, y);
    const lw = doc.getTextWidth(labelText) + 3;

    // Value
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.text);
    const valLines = doc.splitTextToSize(value, cw - lw - 4);
    doc.text(valLines, ml + 2 + lw, y);
    y += valLines.length * 3.8 + 2;
  });
  y += 2;

  // ============================================
  // PROFESSIONAL EXPERIENCE
  // ============================================
  sectionTitle('Professional Experience');

  // --- Job 1 ---
  jobHeader('Software Developer', 'SoftWebPos', 'Surat, Gujarat', 'Sept 2023 - Present');

  [
    'Develop and maintain enterprise web applications using ASP.NET Core, C#, JavaScript, and jQuery, serving 500+ active users across multiple modules.',
    'Led the integration of 5+ third-party APIs (payment gateways, CRM services, notification systems) into the core platform, reducing manual data-entry processes by 70%.',
    'Designed and optimized complex SQL Server queries and stored procedures, improving database query performance by 40%.',
    'Built RESTful APIs following best practices for security, versioning, and documentation, enabling seamless frontend-backend communication.',
    'Collaborated with cross-functional teams in Agile sprints to deliver features on schedule across 4 sprint cycles.',
    'Mentored 2 junior developers on .NET best practices, code review standards, and debugging techniques.',
    'Implemented responsive UI components using JavaScript and jQuery, enhancing user experience across devices.',
  ].forEach((b) => bullet(b));

  y += 3;

  // --- Job 2 ---
  jobHeader('Software Developer', 'CS Soft Solution', 'Chandigarh, Punjab', 'Sept 2022 - Aug 2023');

  [
    'Delivered 3 full-stack web applications (Hunt Lease, Property Tax Portal, Forest Information Portal) within tight deadlines, all deployed to production successfully.',
    'Built the Forest Information Portal from scratch for government use - designed database schema, developed backend APIs, and created interactive frontend dashboards.',
    'Developed the Property Tax Portal enabling citizens to calculate and pay property taxes online, processing 1000+ transactions in the first quarter.',
    'Created the Hunt Lease management system for tracking property agreements, tenant data, and payment schedules with automated notifications.',
    'Reduced production bug count by 60% through implementation of comprehensive testing strategies and code review processes.',
    'Wrote clean, maintainable code following SOLID principles and MVC architecture patterns.',
  ].forEach((b) => bullet(b));

  y += 3;

  // ============================================
  // KEY PROJECTS
  // ============================================
  sectionTitle('Key Projects');

  const projects = [
    {
      name: 'CRM Integration Platform',
      tech: 'ASP.NET Core, REST API, SQL Server, JavaScript',
      desc: 'Led development of a CRM integration platform connecting multiple third-party services, reducing manual data entry by 70% and improving team productivity.',
    },
    {
      name: 'Property Tax Portal',
      tech: 'ASP.NET MVC, SQL Server, jQuery, Bootstrap',
      desc: 'Citizen-facing portal for local government enabling online tax calculation, payment processing, and receipt generation. Processed 1000+ transactions in Q1.',
    },
    {
      name: 'Forest Information Portal',
      tech: 'ASP.NET Core, REST API, MS SQL, jQuery',
      desc: 'Government information portal for forest management with real-time data dashboards, serving multiple government departments.',
    },
    {
      name: 'Hunt Lease Management System',
      tech: 'ASP.NET, SQL Server, JavaScript',
      desc: 'Full-featured lease management system with property agreements tracking, automated payment reminders, and document management.',
    },
  ];

  projects.forEach((p) => {
    checkPage(16);
    // Project name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...C.primary);
    doc.text(p.name, ml + 2, y);

    // Tech stack on same line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...C.accent);
    doc.text(p.tech, W - mr, y, { align: 'right' });
    y += 4;

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.text);
    const dl = doc.splitTextToSize(p.desc, cw - 4);
    doc.text(dl, ml + 2, y);
    y += dl.length * 3.6 + 4;
  });

  // ============================================
  // EDUCATION
  // ============================================
  sectionTitle('Education');

  // BCA
  checkPage(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...C.primary);
  doc.text('Bachelor of Computer Applications (BCA)', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2018 - 2021', W - mr, y, { align: 'right' });
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...C.accent);
  doc.text('Dronacharya PG College, Kangra, Himachal Pradesh', ml, y);
  y += 4;

  doc.setFontSize(8.5);
  doc.setTextColor(...C.text);
  doc.text('First Class | Coursework: Data Structures, Algorithms, DBMS, Web Technologies, Software Engineering, OOP', ml, y);
  y += 7;

  // Sr Secondary
  checkPage(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...C.primary);
  doc.text('Senior Secondary Certificate', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2015 - 2016', W - mr, y, { align: 'right' });
  y += 4;
  doc.setFontSize(8.5);
  doc.setTextColor(...C.text);
  doc.text('G.A.V Sen Sec School, Kangra, Himachal Pradesh', ml, y);
  y += 6;

  // Hr Secondary
  checkPage(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...C.primary);
  doc.text('Higher Secondary Certificate', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2013 - 2014', W - mr, y, { align: 'right' });
  y += 4;
  doc.setFontSize(8.5);
  doc.setTextColor(...C.text);
  doc.text('Adarsh Public Sen Sec School, Matour, Himachal Pradesh', ml, y);
  y += 7;

  // ============================================
  // CORE STRENGTHS
  // ============================================
  sectionTitle('Core Strengths');

  [
    'Strong problem-solving and analytical skills with ability to debug complex production issues efficiently.',
    'Excellent team collaboration and communication - experienced working in Agile/Scrum environments.',
    'Self-motivated learner who stays updated with the latest .NET and web development trends and best practices.',
    'Proven ability to deliver projects under tight deadlines while maintaining high code quality standards.',
    'Experience mentoring junior developers and actively contributing to team knowledge sharing sessions.',
  ].forEach((s) => bullet(s));

  // ============================================
  // FOOTER on every page
  // ============================================
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    // Footer line
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.3);
    doc.line(ml, H - 12, W - mr, H - 12);

    // Footer text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...C.light);
    doc.text('Priya Kumari | Software Developer', ml, H - 8);
    doc.text('Page ' + i + ' of ' + totalPages, W - mr, H - 8, { align: 'right' });
  }

  // Save
  doc.save('Priya_Kumari_Software_Developer_Resume.pdf');
};

export default generateResume;
