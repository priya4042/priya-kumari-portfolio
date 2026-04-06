# Interview Preparation Guide - Portfolio & Technologies
## Priya Kumari | Software Developer

> This document is for YOUR personal study only. It is NOT shown on the portfolio.
> Open this file before any interview and revise the answers.

---

## TABLE OF CONTENTS

1. [Portfolio Questions (How You Built It)](#1-portfolio-questions)
2. [React.js Questions](#2-reactjs-questions)
3. [JavaScript Questions](#3-javascript-questions)
4. [CSS & Responsive Design Questions](#4-css--responsive-design-questions)
5. [Framer Motion & Animation Questions](#5-framer-motion--animation-questions)
6. [npm & Tooling Questions](#6-npm--tooling-questions)
7. [General Web Development Questions](#7-general-web-development-questions)
8. [.NET & Backend Questions](#8-net--backend-questions)
9. [HR / Behavioral Questions](#9-hr--behavioral-questions)
10. [Tips for Interview Day](#10-tips-for-interview-day)

---

## 1. PORTFOLIO QUESTIONS

### Q1. How did you build this portfolio?
**Answer:** I built this portfolio using React.js — a modern JavaScript library for building user interfaces. I used `create-react-app` to set up the project, then created separate components for each section (Hero, About, Skills, Projects, Experience, Education, Contact). For animations, I used Framer Motion library. The particle background uses tsparticles. I used react-scroll for smooth navigation, react-type-animation for the typewriter effect, and jsPDF to generate a downloadable resume. The entire app is fully responsive using CSS media queries with breakpoints at 480px, 768px, and 1024px.

### Q2. Why did you choose React instead of plain HTML/CSS?
**Answer:** I chose React for several reasons:
- **Component Reusability** — Each section (Hero, Skills, Contact) is a separate, reusable component
- **State Management** — React's useState handles interactive features like tab switching, mobile menu toggle, form state, and accordion open/close
- **Ecosystem** — React has excellent animation libraries (Framer Motion), routing (react-scroll), and UI libraries
- **Performance** — React's Virtual DOM efficiently updates only what changes, making animations smooth
- **Industry Standard** — React is one of the most in-demand skills, so using it shows I can work with modern frameworks
- **Maintainability** — If I want to update my skills or add a project, I just edit a data file, not HTML

### Q3. What is the project structure?
**Answer:** The project follows a standard React component-based architecture:
```
src/
├── components/         # Each UI section is a component
│   ├── Navbar/         # Navigation bar with scroll spy
│   ├── Hero/           # Landing section with typewriter
│   ├── About/          # About me section
│   ├── Skills/         # Skills with animated rings
│   ├── Projects/       # Project showcase with filters
│   ├── Experience/     # Timeline layout
│   ├── Education/      # Education cards
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer & back-to-top
│   ├── Logo/           # Reusable SVG logo component
│   ├── Loader/         # Loading screen animation
│   ├── CustomCursor/   # Custom mouse cursor
│   └── ParticlesBackground/ # Particle animation
├── data/               # All content data separated from UI
│   └── portfolioData.js
├── utils/              # Utility functions
│   └── generateResume.js  # PDF resume generator
└── styles/             # Global CSS
    ├── App.css         # Base styles, variables, resets
    └── responsive.css  # All responsive overrides
```

### Q4. What libraries/packages did you use?
**Answer:** Here are the key packages and why I chose each:

| Package | Purpose | Why I Used It |
|---------|---------|---------------|
| `react` | UI Framework | Component-based architecture |
| `framer-motion` | Animations | Smooth scroll reveals, hover effects, page transitions |
| `react-scroll` | Smooth scrolling | Scroll to sections when clicking nav links |
| `react-type-animation` | Typewriter effect | Cycling through roles in the hero section |
| `react-tsparticles` | Particle background | Interactive canvas-based particle network |
| `react-intersection-observer` | Scroll detection | Trigger animations when sections come into view |
| `react-parallax-tilt` | 3D tilt effect | Card hover effects on Skills and Education |
| `react-icons` | Icon library | Consistent icons throughout the app |
| `jspdf` | PDF generation | Generate downloadable resume on button click |

### Q5. How does the resume download work?
**Answer:** When the user clicks "Download Resume," it calls a function that uses the jsPDF library to programmatically create a 2-page PDF. The function:
1. Creates a new PDF document (A4 size)
2. Draws a navy header with my name, title, and contact info
3. Adds sections — Summary, Skills, Experience, Projects, Education
4. Uses bullet points, proper spacing, and consistent fonts
5. Adds page numbers and footer on every page
6. Triggers a browser download with `doc.save('filename.pdf')`

The PDF is generated client-side — no server needed. It's ATS-friendly (white background, standard fonts) so applicant tracking systems can parse it correctly.

### Q6. How is the custom cursor implemented?
**Answer:** The custom cursor uses Framer Motion's `useMotionValue` and `useSpring` for smooth following:
1. The default cursor is hidden with `cursor: none` in CSS
2. Two elements follow the mouse — a small dot and a larger ring
3. `mousemove` event updates position values
4. `useSpring` adds smooth lag to the ring (follows with delay)
5. When hovering over clickable elements, the ring expands and changes color
6. On mobile devices (< 768px), the custom cursor is completely disabled and default cursor is restored

### Q7. How does the scroll animation work?
**Answer:** I use two techniques for scroll animations:
1. **react-intersection-observer** — The `useInView` hook detects when a component enters the viewport. Each section has `triggerOnce: true` so animations play only once.
2. **Framer Motion** — When `inView` becomes true, I animate elements from `opacity: 0, y: 50` to `opacity: 1, y: 0`. I use `staggerChildren` to animate child elements one after another with small delays, creating a cascade effect.

Example:
```jsx
const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

### Q8. How did you make the SVG logo?
**Answer:** The logo is a React component that renders an inline SVG. It contains:
- A rounded rectangle background with a gradient fill
- The letters "PK" with a purple-to-pink gradient using `<linearGradient>`
- Code brackets `< >` drawn as `<path>` elements
- A teal accent slash and dot for visual interest
- A glow filter using `<feGaussianBlur>` for a subtle glow effect
- It accepts `size` and `showText` props for different contexts (navbar, loader, footer)
- The same SVG design is used for the browser favicon

---

## 2. REACTJS QUESTIONS

### Q9. What is React?
**Answer:** React is a JavaScript library for building user interfaces, created by Facebook. It uses a component-based architecture where you build small, reusable pieces (components) that manage their own state. React uses a Virtual DOM for efficient updates — instead of changing the real DOM directly, React compares the virtual and real DOM and only updates what actually changed. This makes it fast.

### Q10. What is the difference between a component and an element?
**Answer:**
- **Element** — A plain JavaScript object describing what to render: `{ type: 'div', props: { children: 'Hello' } }`. Created with JSX like `<div>Hello</div>`.
- **Component** — A function (or class) that returns elements. Components can have state, props, and lifecycle. Example: `function Hero() { return <section>...</section> }`

### Q11. What is JSX?
**Answer:** JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript. It's not valid JavaScript — Babel compiles it to `React.createElement()` calls. For example:
```jsx
// JSX
<h1 className="title">Hello</h1>
// Compiles to
React.createElement('h1', { className: 'title' }, 'Hello')
```
Key differences from HTML: `className` instead of `class`, `htmlFor` instead of `for`, expressions use `{}`, and all tags must be closed.

### Q12. What is useState?
**Answer:** `useState` is a React Hook that lets functional components have state. It returns an array with the current value and a setter function.
```jsx
const [count, setCount] = useState(0);  // initial value is 0
setCount(5);       // sets count to 5
setCount(c => c+1); // updates based on previous value
```
In my portfolio, I use it for:
- `isLoading` — show/hide the loader screen
- `mobileOpen` — toggle mobile menu
- `activeTab` — switch between Skills and Services tabs
- `formData` — track contact form input values
- `openQuestions` — which accordion items are expanded

### Q13. What is useEffect?
**Answer:** `useEffect` is a Hook for side effects — things that happen outside of rendering, like:
- Fetching data from an API
- Adding event listeners
- Setting timers
- Updating the document title

```jsx
useEffect(() => {
  // This runs after render
  const timer = setTimeout(() => setIsLoading(false), 2400);
  return () => clearTimeout(timer); // Cleanup on unmount
}, []); // Empty array = run once on mount
```
The dependency array controls when it re-runs:
- `[]` — only on mount
- `[value]` — when `value` changes
- No array — every render (avoid this)

### Q14. What are Props?
**Answer:** Props (properties) are how you pass data from a parent component to a child component. They are read-only — a child cannot modify its props.
```jsx
// Parent passes data
<Logo size="nav" showText={true} />

// Child receives and uses it
const Logo = ({ size, showText }) => {
  // use size and showText here
}
```
In my portfolio, I use props for:
- `Logo` component — size variants and text visibility
- `CountUp` — end number and duration
- `SkillRing` — percentage, color, animation delay

### Q15. What is the Virtual DOM?
**Answer:** The Virtual DOM is a lightweight JavaScript copy of the real DOM. When state changes:
1. React creates a new Virtual DOM tree
2. Compares it with the previous one (called "diffing")
3. Identifies the minimum changes needed
4. Updates only those specific parts of the real DOM (called "reconciliation")

This is faster than directly manipulating the real DOM because DOM operations are expensive, while JavaScript object comparisons are cheap.

### Q16. What is the difference between controlled and uncontrolled components?
**Answer:**
- **Controlled** — Form inputs whose value is controlled by React state. You must provide an `onChange` handler. My contact form uses this approach:
```jsx
<input value={formData.name} onChange={handleChange} />
```
- **Uncontrolled** — Form inputs that manage their own state internally using `ref`. The DOM handles the value.

I use controlled components because they give me full control over validation, formatting, and form submission.

### Q17. What is the key prop and why is it important?
**Answer:** The `key` prop is a unique identifier that helps React identify which list items changed, were added, or removed. Without keys, React re-renders the entire list on any change, which is slow.
```jsx
{skills.map(skill => (
  <SkillCard key={skill.name} data={skill} />  // unique key
))}
```
Rules:
- Keys must be unique among siblings
- Don't use array index as key if the list can reorder
- Keys should be stable (don't change between renders)

### Q18. What is conditional rendering?
**Answer:** Showing different UI based on conditions. I use it in several ways:
```jsx
// && operator — show only if true
{exp.current && <div className="badge">Current</div>}

// Ternary — show one or the other
{mobileOpen ? <HiX /> : <HiMenuAlt3 />}

// AnimatePresence — animate mount/unmount
<AnimatePresence>
  {isLoading && <Loader />}
</AnimatePresence>
```

### Q19. What is React.Fragment?
**Answer:** Fragment lets you group multiple elements without adding extra DOM nodes. Instead of wrapping in a `<div>`, you use `<>...</>` (shorthand) or `<React.Fragment>`.
```jsx
return (
  <>
    <Navbar />
    <main>...</main>
    <Footer />
  </>
);
```
This keeps the DOM clean and avoids unnecessary wrapper divs.

### Q20. What is the difference between useEffect and useLayoutEffect?
**Answer:**
- `useEffect` runs asynchronously AFTER the browser paints the screen
- `useLayoutEffect` runs synchronously BEFORE the browser paints

Use `useLayoutEffect` when you need to measure DOM elements or prevent visual flicker. Use `useEffect` for everything else (data fetching, event listeners, timers). In my portfolio, `useEffect` is sufficient for all cases.

---

## 3. JAVASCRIPT QUESTIONS

### Q21. What is the difference between let, const, and var?
**Answer:**
- `var` — function-scoped, hoisted, can be redeclared (old way, avoid it)
- `let` — block-scoped, not hoisted, can be reassigned but not redeclared
- `const` — block-scoped, not hoisted, cannot be reassigned (but object properties can change)

I always use `const` by default, and `let` only when I need to reassign.

### Q22. What are arrow functions?
**Answer:** Arrow functions are a shorter syntax for functions:
```js
// Regular function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;
```
Key differences:
- Shorter syntax
- Don't have their own `this` — they inherit from parent scope
- Can't be used as constructors
- Implicit return for single expressions (no `{}` needed)

### Q23. What is destructuring?
**Answer:** Destructuring extracts values from arrays or objects into variables:
```js
// Object destructuring
const { name, email } = personalInfo;

// Array destructuring
const [count, setCount] = useState(0);

// Function parameter destructuring
const Logo = ({ size, showText }) => { ... }
```
I use it extensively in my React components for props and state.

### Q24. What is the spread operator (...)?
**Answer:** The spread operator expands arrays/objects:
```js
// Spread in arrays
const newArr = [...oldArr, newItem];

// Spread in objects (used in form handling)
setFormData({ ...formData, [e.target.name]: e.target.value });

// Function arguments
doc.setTextColor(...COLORS.primary);  // spreads [44, 62, 80] as 3 arguments
```

### Q25. What are Promises and async/await?
**Answer:** Promises handle asynchronous operations:
```js
// Promise
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// async/await (cleaner syntax)
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
In my portfolio, tsparticles initialization uses async: `const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);`

### Q26. What is map(), filter(), and reduce()?
**Answer:** Array methods I use extensively:
```js
// map — transform each element
{skillsData.map(skill => <SkillCard key={skill.name} data={skill} />)}

// filter — keep elements that pass a test
const filtered = projectsData.filter(p => p.category === activeCategory);

// reduce — accumulate into a single value
const total = numbers.reduce((sum, n) => sum + n, 0);
```

### Q27. What is event handling in JavaScript?
**Answer:**
```js
// Adding event listeners
window.addEventListener('scroll', handleScroll);

// Removing (cleanup)
return () => window.removeEventListener('scroll', handleScroll);

// React event handling
<button onClick={() => setMobileOpen(!mobileOpen)}>

// Event object
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

### Q28. What is the difference between == and ===?
**Answer:**
- `==` (loose equality) — converts types before comparing: `"5" == 5` is `true`
- `===` (strict equality) — no type conversion: `"5" === 5` is `false`

Always use `===` to avoid unexpected bugs.

---

## 4. CSS & RESPONSIVE DESIGN QUESTIONS

### Q29. How did you make this portfolio responsive?
**Answer:** I used multiple techniques:
1. **CSS Grid & Flexbox** — Layouts that naturally adapt to screen size
2. **Media queries** — At breakpoints 480px, 768px, 1024px, 1400px
3. **clamp()** — `font-size: clamp(2rem, 4vw, 3rem)` for fluid typography
4. **Relative units** — rem, em, %, vh, vw instead of fixed px
5. **Mobile-first components** — Some components conditionally render elements
6. **Separate responsive.css** — A dedicated file for responsive overrides

### Q30. What is CSS Grid vs Flexbox?
**Answer:**
- **Flexbox** — One-dimensional (row OR column). Good for navbars, centering, simple layouts.
- **Grid** — Two-dimensional (rows AND columns). Good for complex page layouts, card grids.

In my portfolio:
- **Grid**: Hero section (2 columns), About section, Skills grid, Projects grid, Education grid, Contact section
- **Flexbox**: Navbar, buttons, stat items, social links, timeline items

### Q31. What are CSS Custom Properties (Variables)?
**Answer:** CSS variables defined with `--` prefix, reusable throughout the stylesheet:
```css
:root {
  --bg-primary: #0a0a0f;
  --accent-1: #6c63ff;
  --gradient-primary: linear-gradient(135deg, #6c63ff, #ff6b9d);
}

.card {
  background: var(--bg-card);
  border-color: var(--accent-1);
}
```
Benefits: Single source of truth for colors/spacing, easy theme changes, readable code.

### Q32. What is the box model?
**Answer:** Every HTML element is a box with: Content → Padding → Border → Margin. I use `box-sizing: border-box` (set in my reset CSS) so that padding and border are included in the element's width/height, making layouts predictable.

### Q33. What is `backdrop-filter: blur()`?
**Answer:** A CSS property that applies effects (like blur) to the area BEHIND an element. I use it for:
- **Navbar** — `backdrop-filter: blur(24px)` creates a frosted glass effect when scrolled
- **Floating cards** — Semi-transparent with blur behind them
- **Mobile menu** — Blurred overlay behind the menu

It requires the element to have a semi-transparent background to see the effect.

### Q34. How do CSS animations work?
**Answer:** Two approaches I use:
```css
/* 1. @keyframes animation — for continuous/automatic animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.element { animation: float 6s ease-in-out infinite; }

/* 2. transition — for hover/state changes */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
```

---

## 5. FRAMER MOTION & ANIMATION QUESTIONS

### Q35. What is Framer Motion and why did you use it?
**Answer:** Framer Motion is a React animation library. I chose it because:
- It integrates with React's component model (animate on mount/unmount)
- Declarative API — just set `initial`, `animate`, `exit` props
- `AnimatePresence` handles exit animations (impossible with CSS alone)
- Spring physics for natural-feeling motion
- `useInView` integration for scroll-triggered animations
- Gesture support (whileHover, whileTap)

### Q36. How does AnimatePresence work?
**Answer:** `AnimatePresence` enables exit animations when components unmount:
```jsx
<AnimatePresence>
  {isLoading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}     // plays when removed
    >
      <Loader />
    </motion.div>
  )}
</AnimatePresence>
```
Without AnimatePresence, React removes elements instantly. With it, the exit animation plays first, then the element is removed.

### Q37. What is staggerChildren?
**Answer:** A Framer Motion feature that adds sequential delays to child animations:
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }  // 120ms between each child
  }
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item}>First</motion.div>   {/* 0ms delay */}
  <motion.div variants={item}>Second</motion.div>  {/* 120ms delay */}
  <motion.div variants={item}>Third</motion.div>   {/* 240ms delay */}
</motion.div>
```
I use this in the Hero section to cascade the badge, title, description, and buttons.

### Q38. What is the difference between useMotionValue and useSpring?
**Answer:**
- `useMotionValue` — A reactive value that updates without re-rendering. Used for high-frequency updates like mouse position.
- `useSpring` — Wraps a motion value with spring physics for smooth, natural movement.

In my custom cursor:
```jsx
const cursorX = useMotionValue(0);      // instant position
const ringX = useSpring(cursorX, { damping: 20, stiffness: 150 }); // smooth follow
```
The dot follows instantly, the ring follows with a smooth spring delay.

---

## 6. NPM & TOOLING QUESTIONS

### Q39. What is npm?
**Answer:** npm (Node Package Manager) is a tool for managing JavaScript packages. I use it to:
- Install dependencies: `npm install framer-motion`
- Run scripts: `npm start` (dev server), `npm run build` (production build)
- Manage versions in `package.json`

### Q40. What is create-react-app?
**Answer:** A CLI tool that sets up a React project with zero configuration. It provides:
- Webpack (module bundler)
- Babel (JavaScript compiler for JSX and modern JS)
- ESLint (code linting)
- Dev server with hot reloading
- Production build optimization

I used it because it lets me focus on coding instead of configuration.

### Q41. What happens when you run `npm run build`?
**Answer:** It creates an optimized production build in the `build/` folder:
1. Babel compiles JSX and modern JS to browser-compatible code
2. Webpack bundles all files (JS, CSS, images) into minified chunks
3. CSS is extracted and minified
4. JavaScript is minified and tree-shaken (unused code removed)
5. Assets get content hashes for cache busting
6. The result is static files ready to deploy anywhere

---

## 7. GENERAL WEB DEVELOPMENT QUESTIONS

### Q42. What is the difference between localStorage and sessionStorage?
**Answer:**
- `localStorage` — Data persists even after browser closes. No expiry.
- `sessionStorage` — Data is cleared when the tab/browser closes.
Both store key-value strings up to ~5MB.

### Q43. What is a REST API?
**Answer:** REST is an architectural style for web APIs using HTTP methods:
- GET — Read data
- POST — Create new data
- PUT — Update existing data
- DELETE — Remove data

Key principles: Stateless requests, resource-based URLs (`/api/users/123`), proper status codes (200, 201, 404, 500), and JSON format for data exchange.

### Q44. What is CORS?
**Answer:** Cross-Origin Resource Sharing — a security mechanism that controls which domains can access your API. Browsers block requests from different origins by default. The server must include `Access-Control-Allow-Origin` headers to allow cross-origin requests. In development, the React dev server proxy handles this.

---

## 8. .NET & BACKEND QUESTIONS

### Q45. What is ASP.NET MVC?
**Answer:** A web framework implementing Model-View-Controller:
- **Model** — Data + business logic (C# classes, Entity Framework)
- **View** — UI (Razor pages, HTML)
- **Controller** — Handles requests, calls model, returns view

Request flow: URL → Routing → Controller → Model → View → Response

### Q46. What is Entity Framework?
**Answer:** An ORM that maps C# objects to database tables. Instead of writing raw SQL, you work with C# objects:
```csharp
var users = context.Users.Where(u => u.IsActive).ToList();
```
Supports Code-First (define classes → generate DB) and Database-First (existing DB → generate classes).

### Q47. What is Dependency Injection?
**Answer:** A pattern where dependencies are provided to a class instead of the class creating them:
```csharp
// Instead of this (tight coupling):
public class UserController {
  private UserService service = new UserService();
}

// We do this (loose coupling):
public class UserController {
  private readonly IUserService _service;
  public UserController(IUserService service) {
    _service = service;  // injected from outside
  }
}
```
Benefits: Easier testing (mock dependencies), loose coupling, single responsibility.

---

## 9. HR / BEHAVIORAL QUESTIONS

### Q48. Tell me about yourself.
**Answer:** "I'm a Software Developer with 3+ years of experience specializing in .NET and JavaScript. I currently work at SoftWebPos in Surat where I build enterprise web applications using ASP.NET Core, SQL Server, and REST APIs. I've led the integration of 5+ third-party APIs and improved database performance by 40%. Before that, I delivered 3 major projects at CS Soft Solution including a government Forest Information Portal. I have a BCA degree and I'm passionate about writing clean code and building applications that solve real problems. I also built this portfolio from scratch using React to showcase my frontend skills."

### Q49. Why should we hire you?
**Answer:** "I bring a combination of strong backend skills in .NET with growing frontend expertise in JavaScript and React. I've proven I can deliver complete projects — from database design to API development to UI implementation. I've worked under tight deadlines, mentored junior developers, and improved application performance measurably. I'm a quick learner, a team player, and I'm genuinely passionate about development — building this portfolio in my own time is proof of that."

### Q50. Where do you see yourself in 5 years?
**Answer:** "I see myself as a senior developer leading technical decisions on larger projects. I want to deepen my expertise in full-stack development, potentially learning cloud services like Azure, and contribute to system architecture. I also enjoy mentoring, so I'd like to be in a position where I can help junior developers grow while continuing to learn myself."

### Q51. What is your biggest weakness?
**Answer:** "I tend to be detail-oriented to a fault — sometimes spending too much time perfecting code that's already functional. I've learned to manage this by setting time boundaries and asking 'is this good enough for the current sprint?' I follow the 80/20 rule now: deliver the core value first, then polish in subsequent iterations."

### Q52. Why are you looking for a new opportunity?
**Answer:** "I'm looking for a role where I can work on more challenging projects, learn new technologies, and grow as a developer. I want to be part of a team that values code quality and innovation. I'm also open to exploring roles that combine my backend expertise with frontend development."

---

## 10. TIPS FOR INTERVIEW DAY

### Before the Interview:
- [ ] Review this document thoroughly
- [ ] Open your portfolio on your phone — show it works on mobile
- [ ] Have the portfolio URL ready to share
- [ ] Know the company you're interviewing with — check their tech stack
- [ ] Prepare 3 questions to ask them

### During the Interview:
- **If you don't know an answer** — Say "I haven't worked with that specifically, but here's how I would approach learning it..."
- **Use examples** — Always relate answers back to YOUR projects and experience
- **Show the portfolio** — If they ask about React/CSS/animations, open it and demonstrate live
- **Be honest** — Don't claim to know something you don't. Willingness to learn matters more.

### Key Numbers to Remember:
- 3+ years of experience
- 10+ projects delivered
- 7+ technologies
- 5+ APIs integrated at SoftWebPos
- 40% database performance improvement
- 70% reduction in manual processes through CRM integration
- 60% bug reduction at CS Soft Solution
- 1000+ transactions on Property Tax Portal in Q1

---

*This document is for personal preparation only. Last updated: April 2026.*
