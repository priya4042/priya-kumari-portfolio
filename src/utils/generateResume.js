import jsPDF from 'jspdf';

const generateResume = () => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const W = 210;
  const H = 297;
  const ml = 18;
  const mr = 18;
  const cw = W - ml - mr;
  let y = 0;

  const C = {
    primary: [44, 62, 80],
    accent: [41, 128, 185],
    text: [50, 50, 60],
    light: [110, 115, 130],
    white: [255, 255, 255],
    line: [200, 205, 215],
    headerBg: [44, 62, 80],
    headerAccent: [52, 152, 219],
  };

  // ===== HEADER =====
  doc.setFillColor(...C.headerBg);
  doc.rect(0, 0, W, 44, 'F');
  doc.setFillColor(...C.headerAccent);
  doc.rect(0, 44, W, 1.5, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...C.white);
  doc.text('Priya Kumari', ml, 17);

  // Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(160, 200, 240);
  doc.text('Software Developer  |  .NET & JavaScript Specialist', ml, 25);

  // Contact — clean, no location
  doc.setFontSize(8.5);
  doc.setTextColor(190, 205, 225);
  doc.text('priya083dhakur101@gmail.com', ml, 34);
  doc.text('|', ml + 54, 34);
  doc.text('+91 9733673826', ml + 59, 34);
  doc.text('|', ml + 88, 34);
  doc.text('India', ml + 93, 34);

  // Links
  doc.setFontSize(8);
  doc.setTextColor(150, 175, 205);
  doc.text('GitHub: github.com/priya4042', ml, 40);
  doc.text('|', ml + 52, 40);
  doc.text('Portfolio: priya4042.github.io/priya-kumari-portfolio', ml + 57, 40);

  y = 53;

  // ===== HELPERS =====
  const sectionTitle = (title) => {
    checkPage(14);
    // Thicker accent bar
    doc.setFillColor(...C.headerAccent);
    doc.rect(ml, y, 3, 6, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...C.primary);
    doc.text(title.toUpperCase(), ml + 6, y + 4.5);

    // Extending line
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.3);
    const titleWidth = doc.getTextWidth(title.toUpperCase());
    doc.line(ml + 8 + titleWidth, y + 5, W - mr, y + 5);
    y += 11;
  };

  const bodyText = (text) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...C.text);
    const lines = doc.splitTextToSize(text, cw);
    doc.text(lines, ml, y);
    y += lines.length * 4 + 1.5;
  };

  const bullet = (text) => {
    checkPage(10);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(...C.text);

    // Dash bullet for better ATS parsing
    const lines = doc.splitTextToSize('- ' + text, cw - 4);
    doc.text(lines, ml + 3, y);
    y += lines.length * 3.8 + 1.5;
  };

  const checkPage = (need = 25) => {
    if (y + need > H - 16) {
      doc.addPage();
      y = 18;
    }
  };

  const jobHeader = (title, company, location, dates) => {
    checkPage(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...C.primary);
    doc.text(title, ml, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.light);
    doc.text(dates, W - mr, y, { align: 'right' });
    y += 5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(...C.accent);
    doc.text(company + ', ' + location, ml, y);
    y += 5.5;
  };

  // ===== PROFESSIONAL SUMMARY =====
  sectionTitle('Professional Summary');
  bodyText(
    'Results-driven Software Developer with 3+ years of experience building enterprise-grade web applications using ASP.NET Core, C#, JavaScript, SQL Server, and REST APIs. Delivered 10+ production projects including CRM integrations, government portals, and property management systems. Led API integration initiatives reducing manual processes by 70%, optimized database performance by 40%, and mentored junior developers. Skilled in full-stack development from database design to responsive frontend implementation.'
  );
  y += 2;

  // ===== TECHNICAL SKILLS =====
  sectionTitle('Technical Skills');

  const skills = [
    ['Backend', 'C#, .NET Framework, .NET Core, ASP.NET MVC, ASP.NET Web Forms, Entity Framework, LINQ'],
    ['Frontend', 'JavaScript (ES6+), jQuery, HTML5, CSS3, Bootstrap, React.js, Responsive Design'],
    ['Database', 'Microsoft SQL Server, T-SQL, Stored Procedures, Query Optimization, Database Design'],
    ['API & Integration', 'REST API Design & Development, Third-party API Integration, CRM Integration, OAuth'],
    ['Tools', 'Git, Visual Studio, VS Code, IIS, Postman, SQL Server Management Studio'],
    ['Practices', 'Agile/Scrum, Code Review, Unit Testing, SOLID Principles, MVC Architecture'],
  ];

  skills.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.primary);
    const lt = label + ':';
    doc.text(lt, ml + 2, y);
    const lw = doc.getTextWidth(lt) + 3;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...C.text);
    const vl = doc.splitTextToSize(value, cw - lw - 4);
    doc.text(vl, ml + 2 + lw, y);
    y += vl.length * 3.8 + 2;
  });
  y += 2;

  // ===== EXPERIENCE =====
  sectionTitle('Professional Experience');

  jobHeader('Software Developer', 'SoftWebPos', 'Surat, Gujarat', 'Sept 2023 - Present');
  [
    'Develop and maintain enterprise web applications using ASP.NET Core, C#, JavaScript, and jQuery, serving 500+ active users across multiple modules',
    'Led integration of 5+ third-party APIs (payment gateways, CRM services, notification systems), reducing manual data-entry by 70%',
    'Designed and optimized SQL Server queries and stored procedures, improving database performance by 40%',
    'Built RESTful APIs with security best practices, versioning, and comprehensive documentation',
    'Collaborated with cross-functional teams in Agile sprints, delivering features on schedule across 4 sprint cycles',
    'Mentored 2 junior developers on .NET best practices, code review standards, and debugging techniques',
  ].forEach((b) => bullet(b));
  y += 3;

  jobHeader('Software Developer', 'CS Soft Solution', 'Chandigarh, Punjab', 'Sept 2022 - Aug 2023');
  [
    'Delivered 3 full-stack web applications (Hunt Lease, Property Tax Portal, Forest Information Portal) within tight deadlines',
    'Built the Forest Information Portal from scratch: database schema design, backend APIs, and interactive data dashboards',
    'Developed Property Tax Portal enabling online tax calculation and payment, processing 1000+ transactions in Q1',
    'Created Hunt Lease management system with automated payment reminders, reducing missed payments by 80%',
    'Reduced production bug count by 60% through comprehensive testing strategies and code review processes',
  ].forEach((b) => bullet(b));
  y += 3;

  // ===== KEY PROJECTS =====
  sectionTitle('Key Projects');

  const projects = [
    { name: 'CRM Integration Platform', tech: 'ASP.NET Core, REST API, SQL Server, JavaScript', desc: 'Connected 5+ third-party services via unified integration layer, reducing manual data entry by 70% for 500+ users' },
    { name: 'Property Tax Portal', tech: 'ASP.NET MVC, SQL Server, jQuery', desc: 'Government portal for online tax calculation and payment. Processed 1000+ transactions, reduced office visits by 60%' },
    { name: 'Forest Information Portal', tech: 'ASP.NET Core, REST API, MS SQL', desc: 'Built from scratch for government use with real-time dashboards, serving multiple departments with role-based access' },
    { name: 'Hunt Lease Management', tech: 'ASP.NET, SQL Server, jQuery', desc: 'Lease tracking system with automated reminders, document management, reducing missed payments by 80%' },
    { name: 'Portfolio Website', tech: 'React.js, Framer Motion, jsPDF', desc: 'Modern animated portfolio with PDF resume generation, deployed on GitHub Pages, fully responsive across all devices' },
  ];

  projects.forEach((p) => {
    checkPage(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...C.primary);
    doc.text(p.name, ml + 2, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...C.accent);
    doc.text(p.tech, W - mr, y, { align: 'right' });
    y += 4;

    doc.setFontSize(8.5);
    doc.setTextColor(...C.text);
    const dl = doc.splitTextToSize(p.desc, cw - 4);
    doc.text(dl, ml + 2, y);
    y += dl.length * 3.6 + 3.5;
  });

  // ===== EDUCATION =====
  sectionTitle('Education');

  checkPage(16);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...C.primary);
  doc.text('Bachelor of Computer Applications (BCA)', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2018 - 2021', W - mr, y, { align: 'right' });
  y += 4.5;
  doc.setFontSize(9);
  doc.setTextColor(...C.accent);
  doc.text('Dronacharya PG College, Himachal Pradesh', ml, y);
  y += 4;
  doc.setFontSize(8.5);
  doc.setTextColor(...C.text);
  doc.text('First Class | Data Structures, Algorithms, DBMS, Web Technologies, Software Engineering, OOP', ml, y);
  y += 7;

  checkPage(10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...C.primary);
  doc.text('Senior Secondary Certificate', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2015 - 2016', W - mr, y, { align: 'right' });
  y += 4;
  doc.setTextColor(...C.text);
  doc.text('G.A.V Sen Sec School, Himachal Pradesh', ml, y);
  y += 6;

  checkPage(10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...C.primary);
  doc.text('Higher Secondary Certificate', ml, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...C.light);
  doc.text('2013 - 2014', W - mr, y, { align: 'right' });
  y += 4;
  doc.setTextColor(...C.text);
  doc.text('Adarsh Public Sen Sec School, Himachal Pradesh', ml, y);
  y += 7;

  // ===== CORE STRENGTHS =====
  sectionTitle('Core Strengths');
  [
    'Strong problem-solving skills with ability to debug complex production issues efficiently',
    'Excellent collaboration and communication in Agile/Scrum team environments',
    'Self-motivated learner staying current with .NET and modern web development trends',
    'Proven track record of delivering projects under tight deadlines with high code quality',
    'Experience mentoring junior developers and contributing to team knowledge sharing',
  ].forEach((s) => bullet(s));

  // ===== FOOTER =====
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.3);
    doc.line(ml, H - 12, W - mr, H - 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...C.light);
    doc.text('Priya Kumari | Software Developer | priya083dhakur101@gmail.com', ml, H - 8);
    doc.text('Page ' + i + ' of ' + totalPages, W - mr, H - 8, { align: 'right' });
  }

  doc.save('Priya_Kumari_Software_Developer_Resume.pdf');
};

export default generateResume;
