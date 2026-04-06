import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../Logo/Logo';
import './Navbar.css';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="nav-container">
        <Link to="home" smooth duration={600} className="nav-logo" data-cursor="Home">
          <Logo size="nav" showText={true} />
        </Link>

        <ul className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="active"
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth duration={600} offset={-80} className="nav-cta desktop-only" data-cursor="Hire">
          <span className="cta-dot" />
          Hire Me
        </Link>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mobile-menu-header">
                <Logo size="sm" />
              </div>
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-80}
                      spy
                      activeClass="active"
                      className="mobile-nav-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="mobile-link-number">0{i + 1}.</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mobile-menu-footer">
                <a href="mailto:priya083dhakur101@gmail.com" className="btn btn-primary">
                  <span>Hire Me</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
