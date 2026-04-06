import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/App.css';
import './styles/responsive.css';

import Loader from './components/Loader/Loader';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
// Interview prep data is in src/data/interviewData.js — for personal study only
import Footer, { BackToTop } from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Testimonials />
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
