/*
 * ============================================
 *  INTERVIEW PREPARATION DATA
 *  For personal study ONLY — NOT shown on portfolio
 *
 *  Full study guide: ./INTERVIEW_PREPARATION.md
 *  This file has the same Q&A in structured format
 * ============================================
 */

export const interviewCategories = [
  { id: 'portfolio', label: 'About This Portfolio', icon: 'laptop' },
  { id: 'react', label: 'React.js', icon: 'code' },
  { id: 'javascript', label: 'JavaScript', icon: 'code' },
  { id: 'css', label: 'CSS & Responsive', icon: 'code' },
  { id: 'animation', label: 'Framer Motion', icon: 'lightbulb' },
  { id: 'technical', label: '.NET & Backend', icon: 'code' },
  { id: 'experience', label: 'Work Experience', icon: 'briefcase' },
  { id: 'behavioral', label: 'Behavioral / HR', icon: 'user' },
  { id: 'scenario', label: 'Scenario Based', icon: 'lightbulb' },
];

export const interviewQuestions = [

  // =============================================
  // PORTFOLIO - How You Built It
  // =============================================
  {
    id: 1, category: 'portfolio', difficulty: 'easy',
    question: 'How did you build this portfolio website?',
    answer: 'I built it using React.js with create-react-app. I created separate components for each section (Hero, About, Skills, Projects, Experience, Education, Contact). For animations I used Framer Motion, tsparticles for the particle background, react-scroll for smooth navigation, react-type-animation for the typewriter effect, and jsPDF to generate a downloadable resume. The entire app is fully responsive using CSS media queries at 480px, 768px, and 1024px breakpoints.',
  },
  {
    id: 2, category: 'portfolio', difficulty: 'easy',
    question: 'Why did you choose React instead of plain HTML/CSS/JS?',
    answer: 'React provides component reusability (each section is a separate component), efficient state management with useState (tab switching, mobile menu, form state), a rich ecosystem of animation libraries (Framer Motion), Virtual DOM for fast updates, and it is an industry-standard skill recruiters look for. Also, updating content means editing a data file instead of multiple HTML files.',
  },
  {
    id: 3, category: 'portfolio', difficulty: 'medium',
    question: 'What is the project structure of this portfolio?',
    answer: 'It follows a component-based architecture: src/components/ has folders for each section (Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer, Logo, Loader, CustomCursor, ParticlesBackground). src/data/ has portfolioData.js with all content. src/utils/ has generateResume.js for PDF generation. src/styles/ has App.css (global styles, variables, resets) and responsive.css (all responsive overrides). Each component has its own .js and .css file for encapsulation.',
  },
  {
    id: 4, category: 'portfolio', difficulty: 'medium',
    question: 'What libraries/packages did you use and why?',
    answer: 'framer-motion for animations (scroll reveals, hover effects, page transitions), react-scroll for smooth scrolling to sections, react-type-animation for typewriter effect, react-tsparticles for interactive particle background, react-intersection-observer for detecting when sections enter viewport, react-parallax-tilt for 3D card hover effects, react-icons for consistent icons, and jspdf for client-side PDF resume generation. Each was chosen for its specific strength.',
  },
  {
    id: 5, category: 'portfolio', difficulty: 'medium',
    question: 'How does the resume download feature work?',
    answer: 'When clicking "Download Resume," a function using jsPDF creates a 2-page PDF client-side — no server needed. It draws a navy header with name and contact info, adds sections (Summary, Skills, Experience, Projects, Education) with proper formatting, bullet points, consistent fonts, and page numbers on every page. The PDF uses white background with standard fonts so ATS (Applicant Tracking Systems) can parse it correctly. It triggers browser download with doc.save().',
  },
  {
    id: 6, category: 'portfolio', difficulty: 'medium',
    question: 'How is the custom cursor implemented?',
    answer: 'The default cursor is hidden with cursor:none in CSS. Two elements follow the mouse — a small dot and a larger ring. mousemove event updates Framer Motion\'s useMotionValue for position. useSpring adds smooth lag to the ring so it follows with a natural delay. When hovering over clickable elements, the ring expands and changes color via a MutationObserver that detects new interactive elements. On mobile (<768px), the custom cursor is completely disabled.',
  },
  {
    id: 7, category: 'portfolio', difficulty: 'hard',
    question: 'How do the scroll-triggered animations work?',
    answer: 'I use react-intersection-observer\'s useInView hook which detects when a component enters the viewport (with threshold: 0.15 and triggerOnce: true so animations play only once). When inView becomes true, Framer Motion animates elements from {opacity:0, y:50} to {opacity:1, y:0}. I use staggerChildren to cascade child animations with small delays. The IntersectionObserver API is performant because it runs asynchronously and doesn\'t block the main thread.',
  },
  {
    id: 8, category: 'portfolio', difficulty: 'medium',
    question: 'How did you make the SVG logo component?',
    answer: 'The logo is a React component rendering inline SVG. It has a rounded rectangle background with gradient fill, "PK" letters with purple-to-pink linearGradient, code brackets as path elements, a teal accent dot, and a glow filter using feGaussianBlur. It accepts size and showText props for different contexts (navbar shows icon+name, footer shows icon+name+role, loader shows large icon). The same SVG design is used for the browser favicon, generated as PNG using sharp.',
  },
  {
    id: 9, category: 'portfolio', difficulty: 'easy',
    question: 'How did you make this portfolio responsive?',
    answer: 'Multiple techniques: CSS Grid and Flexbox for adaptive layouts, media queries at 480px/768px/1024px/1400px breakpoints, clamp() for fluid typography, relative units (rem, %, vh, vw), a dedicated responsive.css file for overrides, touch device detection to disable custom cursor, landscape phone handling, and print styles. I test on Chrome DevTools device toolbar for multiple screen sizes.',
  },

  // =============================================
  // REACT.JS
  // =============================================
  {
    id: 10, category: 'react', difficulty: 'easy',
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces, created by Facebook/Meta. It uses a component-based architecture where you build reusable UI pieces that manage their own state. React uses a Virtual DOM — a lightweight JavaScript copy of the real DOM. When state changes, React compares virtual and real DOM, identifies minimum changes needed, and updates only those parts. This makes it fast and efficient.',
  },
  {
    id: 11, category: 'react', difficulty: 'easy',
    question: 'What is JSX?',
    answer: 'JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript. It\'s not valid JavaScript — Babel compiles it to React.createElement() calls. Key differences from HTML: className instead of class, htmlFor instead of for, expressions use curly braces {}, and all tags must be closed (including self-closing like <img />).',
  },
  {
    id: 12, category: 'react', difficulty: 'easy',
    question: 'What is useState and how do you use it?',
    answer: 'useState is a React Hook that lets functional components have state. It returns an array with [currentValue, setterFunction]. Example: const [count, setCount] = useState(0). In my portfolio I use it for: isLoading (show/hide loader), mobileOpen (toggle mobile menu), activeTab (switch Skills/Services), formData (contact form inputs), openQuestions (accordion items). When you call the setter, React re-renders the component.',
  },
  {
    id: 13, category: 'react', difficulty: 'medium',
    question: 'What is useEffect and when do you use it?',
    answer: 'useEffect is a Hook for side effects — things outside rendering like event listeners, timers, API calls. It runs after render. The dependency array controls when: [] runs once on mount, [value] runs when value changes, no array runs every render (avoid). Always return a cleanup function for listeners/timers. In my portfolio: setTimeout for loader, scroll listener for navbar, body overflow lock for mobile menu.',
  },
  {
    id: 14, category: 'react', difficulty: 'easy',
    question: 'What are Props?',
    answer: 'Props (properties) are how you pass data from parent to child components. They are read-only — a child cannot modify its props. Example: <Logo size="nav" showText={true} /> — the Logo component receives size and showText as props. Props flow one way (parent → child), which makes data flow predictable.',
  },
  {
    id: 15, category: 'react', difficulty: 'medium',
    question: 'What is the Virtual DOM?',
    answer: 'The Virtual DOM is a lightweight JavaScript copy of the real DOM. When state changes: 1) React creates a new Virtual DOM tree, 2) Compares it with the previous one (diffing), 3) Identifies minimum changes needed, 4) Updates only those specific parts of the real DOM (reconciliation). This is faster than direct DOM manipulation because JS object comparisons are cheap while DOM operations are expensive.',
  },
  {
    id: 16, category: 'react', difficulty: 'medium',
    question: 'What is the key prop and why is it important?',
    answer: 'The key prop is a unique identifier that helps React track which list items changed, were added, or removed. Without keys, React re-renders the entire list. Rules: keys must be unique among siblings, don\'t use array index as key if the list can reorder (use a stable ID), keys should not change between renders. In my portfolio: skills.map(skill => <SkillCard key={skill.name} />).',
  },
  {
    id: 17, category: 'react', difficulty: 'medium',
    question: 'Controlled vs uncontrolled components?',
    answer: 'Controlled components have their value managed by React state — you provide a value prop and onChange handler: <input value={formData.name} onChange={handleChange} />. Uncontrolled components manage their own state via the DOM using refs. My contact form uses controlled components because they give full control over validation, formatting, and submission.',
  },
  {
    id: 18, category: 'react', difficulty: 'easy',
    question: 'What is conditional rendering?',
    answer: 'Showing different UI based on conditions. Three patterns I use: 1) && operator — {exp.current && <Badge>Current</Badge>} shows badge only if current is true. 2) Ternary — {mobileOpen ? <HiX /> : <HiMenuAlt3 />} shows one or the other. 3) AnimatePresence — wraps conditional elements to enable exit animations when they unmount.',
  },
  {
    id: 19, category: 'react', difficulty: 'medium',
    question: 'What is useCallback and when would you use it?',
    answer: 'useCallback memoizes a function so it doesn\'t get recreated on every render. Useful when passing callbacks to child components (prevents unnecessary re-renders) or for expensive functions. In my portfolio: const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []) — memoized because it\'s passed to the Particles component and shouldn\'t trigger re-renders.',
  },

  // =============================================
  // JAVASCRIPT
  // =============================================
  {
    id: 20, category: 'javascript', difficulty: 'easy',
    question: 'What is the difference between let, const, and var?',
    answer: 'var is function-scoped, hoisted, can be redeclared (old, avoid it). let is block-scoped, can be reassigned but not redeclared. const is block-scoped, cannot be reassigned (but object properties can change). I always use const by default, let only when reassignment is needed, never var.',
  },
  {
    id: 21, category: 'javascript', difficulty: 'easy',
    question: 'What are arrow functions?',
    answer: 'Shorter syntax: const add = (a, b) => a + b. Key differences from regular functions: no own "this" (inherit from parent scope), can\'t be used as constructors, implicit return for single expressions (no {} needed). I use them extensively in React components for event handlers and map callbacks.',
  },
  {
    id: 22, category: 'javascript', difficulty: 'easy',
    question: 'What is destructuring?',
    answer: 'Extracting values from arrays/objects into variables. Object: const { name, email } = personalInfo. Array: const [count, setCount] = useState(0). Function params: const Logo = ({ size, showText }) => {}. I use it extensively for React props, state, and data access.',
  },
  {
    id: 23, category: 'javascript', difficulty: 'easy',
    question: 'What is the spread operator (...)?',
    answer: 'Expands arrays/objects. Arrays: [...oldArr, newItem]. Objects: { ...formData, [e.target.name]: e.target.value } (used in form handling to update one field while keeping others). Function args: doc.setTextColor(...COLORS.primary) spreads [44,62,80] as 3 separate arguments.',
  },
  {
    id: 24, category: 'javascript', difficulty: 'medium',
    question: 'What are Promises and async/await?',
    answer: 'Promises handle asynchronous operations. They have 3 states: pending, fulfilled, rejected. async/await is cleaner syntax: mark function as async, use await before promises. try/catch handles errors. In my portfolio, tsparticles init uses it: const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []).',
  },
  {
    id: 25, category: 'javascript', difficulty: 'easy',
    question: 'What is map(), filter(), and reduce()?',
    answer: 'Array methods: map transforms each element (I use it to render lists of components), filter keeps elements passing a test (project category filtering), reduce accumulates into single value. These are used extensively in React for rendering dynamic lists and filtering data.',
  },
  {
    id: 26, category: 'javascript', difficulty: 'easy',
    question: 'Difference between == and ===?',
    answer: '== (loose equality) converts types before comparing: "5" == 5 is true. === (strict equality) no type conversion: "5" === 5 is false. Always use === to avoid unexpected bugs from type coercion.',
  },
  {
    id: 27, category: 'javascript', difficulty: 'medium',
    question: 'What is closure in JavaScript?',
    answer: 'A closure is a function that remembers variables from its outer scope even after the outer function has finished. Example: function counter() { let count = 0; return () => ++count; }. The returned function "closes over" count. Used in React hooks internally and in my CountUp component where the interval callback accesses outer variables.',
  },

  // =============================================
  // CSS & RESPONSIVE
  // =============================================
  {
    id: 28, category: 'css', difficulty: 'easy',
    question: 'What is CSS Grid vs Flexbox?',
    answer: 'Flexbox is one-dimensional (row OR column) — good for navbars, centering, simple layouts. Grid is two-dimensional (rows AND columns) — good for complex page layouts, card grids. In my portfolio: Grid for Hero (2 columns), Skills grid, Projects grid, Contact section. Flexbox for Navbar, buttons, stats, social links, timeline.',
  },
  {
    id: 29, category: 'css', difficulty: 'easy',
    question: 'What are CSS Custom Properties (Variables)?',
    answer: 'Variables defined with -- prefix in :root, reusable everywhere: --accent-1: #6c63ff; used as color: var(--accent-1). Benefits: single source of truth, easy theme changes, readable code. My portfolio has variables for all colors, gradients, fonts, and transitions.',
  },
  {
    id: 30, category: 'css', difficulty: 'easy',
    question: 'What is the CSS box model?',
    answer: 'Every element is a box: Content → Padding → Border → Margin. I use box-sizing: border-box (in reset CSS) so padding and border are included in width/height, making layouts predictable.',
  },
  {
    id: 31, category: 'css', difficulty: 'medium',
    question: 'What is backdrop-filter?',
    answer: 'A CSS property that applies effects (like blur) to the area BEHIND an element. I use backdrop-filter: blur(24px) on the navbar for a frosted glass effect when scrolled, on floating cards for semi-transparent blur, and on the mobile menu overlay. Requires semi-transparent background to see the effect.',
  },
  {
    id: 32, category: 'css', difficulty: 'medium',
    question: 'How do media queries work?',
    answer: '@media (max-width: 768px) { ... } applies styles only when viewport is 768px or smaller. I use breakpoints at: 480px (mobile phones), 768px (tablets), 1024px (small laptops), 1400px (large screens). Also use (hover: none) for touch devices and (orientation: landscape) for rotated phones. Best practice: mobile-first approach.',
  },
  {
    id: 33, category: 'css', difficulty: 'medium',
    question: 'What is clamp() in CSS?',
    answer: 'clamp(min, preferred, max) creates responsive values. Example: font-size: clamp(2rem, 4vw, 3rem) — font is at least 2rem, scales with viewport at 4vw, but caps at 3rem. I use it for responsive section titles so they scale smoothly without needing media queries for every size.',
  },

  // =============================================
  // FRAMER MOTION & ANIMATIONS
  // =============================================
  {
    id: 34, category: 'animation', difficulty: 'easy',
    question: 'What is Framer Motion?',
    answer: 'A React animation library. It integrates with React\'s component lifecycle, has a declarative API (just set initial, animate, exit props), supports AnimatePresence for exit animations, spring physics for natural motion, and gesture support (whileHover, whileTap). I chose it over CSS animations because it handles mount/unmount animations which CSS cannot do.',
  },
  {
    id: 35, category: 'animation', difficulty: 'medium',
    question: 'How does AnimatePresence work?',
    answer: 'AnimatePresence enables exit animations when components unmount. Normally React removes elements instantly. With AnimatePresence wrapping conditional renders, the exit animation plays first, THEN the element is removed from DOM. I use it for: loader screen fade-out, mobile menu slide, tab content switching, and accordion open/close.',
  },
  {
    id: 36, category: 'animation', difficulty: 'medium',
    question: 'What is staggerChildren?',
    answer: 'A Framer Motion variant property that adds sequential delays to child animations. Parent: transition: { staggerChildren: 0.12 } adds 120ms between each child. First child animates at 0ms, second at 120ms, third at 240ms — creating a cascade effect. I use it in the Hero section to sequentially reveal badge, title, typewriter, description, and buttons.',
  },
  {
    id: 37, category: 'animation', difficulty: 'hard',
    question: 'Explain useMotionValue vs useSpring.',
    answer: 'useMotionValue creates a reactive value that updates WITHOUT triggering React re-renders — essential for high-frequency updates like mouse tracking. useSpring wraps a motion value with spring physics for smooth, natural movement. In my custom cursor: cursorX = useMotionValue(0) for instant dot position, ringX = useSpring(cursorX, {damping:20, stiffness:150}) for the ring that follows with smooth delay.',
  },

  // =============================================
  // .NET & BACKEND
  // =============================================
  {
    id: 38, category: 'technical', difficulty: 'medium',
    question: 'What is ASP.NET MVC?',
    answer: 'A web framework implementing Model-View-Controller pattern. Model represents data and business logic (C# classes, Entity Framework). View handles UI (Razor pages, HTML). Controller manages requests, calls model, returns view. Flow: URL → Routing → Controller Action → Model interaction → View rendering → Response. Separation of concerns makes code maintainable and testable.',
  },
  {
    id: 39, category: 'technical', difficulty: 'medium',
    question: 'Difference between .NET Framework and .NET Core?',
    answer: '.NET Framework is Windows-only, legacy. .NET Core (now .NET 5+) is cross-platform, open-source, better performance, supports microservices, has built-in dependency injection, uses Kestrel web server, supports side-by-side versioning and containers. I use .NET Core because it is the modern standard with better performance and deployment flexibility.',
  },
  {
    id: 40, category: 'technical', difficulty: 'hard',
    question: 'How do you optimize SQL Server performance?',
    answer: 'Strategies I use: 1) Proper indexing on frequently queried columns with covering indexes. 2) Query optimization — avoid SELECT *, use JOINs over subqueries, avoid cursors. 3) Stored procedures for cached execution plans. 4) Execution Plan analysis to find table scans and bottlenecks. 5) Server-side pagination for large datasets. 6) Parameterized queries to prevent SQL injection and benefit from plan caching. These techniques gave me 40% improvement at SoftWebPos.',
  },
  {
    id: 41, category: 'technical', difficulty: 'medium',
    question: 'What is REST API and how do you design one?',
    answer: 'REST uses HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove). Principles: resource-based URLs (/api/users/123), stateless requests, proper status codes (200, 201, 400, 404, 500), JSON format, versioning (/api/v1/users), JWT authentication. I have built and integrated 5+ REST APIs in production.',
  },
  {
    id: 42, category: 'technical', difficulty: 'medium',
    question: 'What is Entity Framework?',
    answer: 'An ORM mapping C# objects to database tables. Instead of raw SQL, you work with C# objects and LINQ queries. Supports Code-First (define classes → generate DB) and Database-First. Features: migrations for schema changes, lazy/eager loading, change tracking. I use it for rapid development while falling back to raw SQL for performance-critical queries.',
  },
  {
    id: 43, category: 'technical', difficulty: 'hard',
    question: 'What is Dependency Injection in .NET Core?',
    answer: 'A pattern where dependencies are provided to a class rather than created by it. In .NET Core, register services in Program.cs with three lifetimes: Transient (new instance every time), Scoped (one per HTTP request), Singleton (one for app lifetime). Benefits: loose coupling, easier unit testing with mocks, single responsibility. I inject database contexts, API clients, and business services into controllers.',
  },

  // =============================================
  // WORK EXPERIENCE
  // =============================================
  {
    id: 44, category: 'experience', difficulty: 'medium',
    question: 'Tell me about the CRM integration project.',
    answer: 'At SoftWebPos, I integrated 5+ third-party APIs (payment gateways, notification services, external data sources) into our CRM. I designed a service layer pattern — each external service had its own wrapper class implementing a common interface. Handled OAuth/API key authentication, rate limiting, error handling with retry logic, and response mapping. Result: 70% reduction in manual data entry. Key challenge was different API formats, solved with a unified response model and adapters.',
  },
  {
    id: 45, category: 'experience', difficulty: 'hard',
    question: 'How did you improve database performance by 40%?',
    answer: 'Analyzed slow queries using SQL Server Profiler and Execution Plans. Fixed: 1) Missing indexes on frequently queried columns, 2) N+1 query problems — refactored to eager loading and batch queries, 3) Large table scans — rewrote with proper WHERE clauses and JOINs, 4) Complex logic moved to stored procedures for cached execution plans, 5) Full dataset loading replaced with server-side pagination. Combined effect: 40% improvement.',
  },
  {
    id: 46, category: 'experience', difficulty: 'medium',
    question: 'Describe the Forest Information Portal you built.',
    answer: 'Built from scratch at CS Soft Solution for government use. Designed SQL Server schema for forest regions, species data, monitoring records, user management. Backend: ASP.NET MVC with service layer. Frontend: jQuery and Chart.js for data visualization (forest coverage trends, species distribution). Responsive UI with Bootstrap. Challenges: large datasets (solved with pagination/caching), role-based access for different government departments.',
  },

  // =============================================
  // BEHAVIORAL / HR
  // =============================================
  {
    id: 47, category: 'behavioral', difficulty: 'easy',
    question: 'Tell me about yourself.',
    answer: 'I am a Software Developer with 3+ years of experience specializing in .NET and JavaScript. Currently at SoftWebPos in Surat building enterprise web apps using ASP.NET Core, SQL Server, and REST APIs. I led integration of 5+ third-party APIs and improved database performance by 40%. Previously delivered 3 major projects at CS Soft Solution including a government Forest Information Portal. I have a BCA degree and I am passionate about clean code — I built this portfolio from scratch using React to showcase my frontend skills.',
  },
  {
    id: 48, category: 'behavioral', difficulty: 'easy',
    question: 'Why should we hire you?',
    answer: 'I bring strong backend skills in .NET with growing frontend expertise in JavaScript and React. I have proven I can deliver complete projects from database design to API development to UI. I have worked under tight deadlines, mentored junior developers, and improved performance measurably. I am a quick learner, team player, and genuinely passionate about development — building this portfolio in my own time is proof of that.',
  },
  {
    id: 49, category: 'behavioral', difficulty: 'easy',
    question: 'How do you handle tight deadlines?',
    answer: 'I prioritize by impact and urgency, break large tasks into smaller chunks, deliver MVP first then iterate. I communicate proactively — if I foresee a delay, I raise it early. At CS Soft Solution I delivered 3 projects within tight deadlines using this approach. I avoid perfectionism early on — get it working first, then optimize.',
  },
  {
    id: 50, category: 'behavioral', difficulty: 'easy',
    question: 'What is your biggest weakness?',
    answer: 'I tend to be detail-oriented to a fault — sometimes spending too much time perfecting code that is already functional. I have learned to manage this by setting time boundaries and asking "is this good enough for this sprint?" I follow the 80/20 rule: deliver core value first, polish in subsequent iterations.',
  },
  {
    id: 51, category: 'behavioral', difficulty: 'medium',
    question: 'Describe a time you mentored a junior developer.',
    answer: 'At SoftWebPos, I mentored 2 juniors. One struggled with REST API design. Instead of giving answers, I pair-programmed with them — built a small API together explaining each design decision. I set up code review sessions with constructive feedback and explanations. Within 2 months they were independently building APIs. Key was patience, explaining the "why," and letting them learn from safe mistakes.',
  },

  // =============================================
  // SCENARIO BASED
  // =============================================
  {
    id: 52, category: 'scenario', difficulty: 'hard',
    question: 'Production API returns 500 errors. How do you debug?',
    answer: 'Systematic approach: 1) Check logs (app logs, IIS logs, Event Viewer) for error message and stack trace. 2) Reproduce in Postman with same parameters. 3) Check recent deployments via git log. 4) Check dependencies (DB server, third-party APIs). 5) Check server resources (CPU, memory, disk). 6) Debug locally with same data. 7) Hotfix if critical, then proper fix with tests. 8) Post-mortem — document root cause, add monitoring.',
  },
  {
    id: 53, category: 'scenario', difficulty: 'hard',
    question: 'How would you design a user authentication system?',
    answer: 'JWT-based: 1) User submits credentials to /api/auth/login. 2) Validate against BCrypt-hashed password in DB. 3) Generate JWT with claims (id, role, expiry) signed with secret key. 4) Return JWT, store in httpOnly cookies (not localStorage). 5) Middleware validates JWT on each request. 6) Refresh tokens for seamless renewal. 7) Role-based authorization with [Authorize] attributes. 8) Rate limiting on login to prevent brute force.',
  },
  {
    id: 54, category: 'scenario', difficulty: 'hard',
    question: 'Walk through integrating a third-party payment API.',
    answer: 'Steps: 1) Study API docs thoroughly. 2) Create sandbox account. 3) Design service layer with interface (IPaymentService) for loose coupling. 4) Implement auth (OAuth/API Key) in reusable HTTP client. 5) Build wrapper methods (CreatePayment, GetStatus, Refund). 6) Add error handling with retry logic and logging. 7) Write unit tests with mocked responses. 8) Test in sandbox extensively. 9) Implement webhooks for async updates. 10) Deploy with feature flag for gradual rollout.',
  },
  {
    id: 55, category: 'scenario', difficulty: 'medium',
    question: 'Client wants a feature but deadline is unrealistic. What do you do?',
    answer: 'Analyze full scope, break into sub-tasks with estimates. Have transparent conversation with options: 1) MVP approach — core functionality by deadline, enhancements in phase 2. 2) Parallel work — distribute if team available. 3) Scope negotiation — identify must-haves vs nice-to-haves. Always present solutions not just problems. This approach helped me deliver 3 projects on time at CS Soft Solution.',
  },
];
