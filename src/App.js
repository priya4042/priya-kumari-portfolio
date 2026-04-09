import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/App.css';
import './styles/animations.css';
import './styles/responsive.css';

import Loader from './components/Loader/Loader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechMarquee from './components/Marquee/TechMarquee';
import SectionDivider from './components/Marquee/SectionDivider';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
// Interview prep data is in src/data/interviewData.js — for personal study only
import Footer, { BackToTop } from './components/Footer/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div {...pageTransition}>
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          <main>
            <Hero />
            <TechMarquee />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;
