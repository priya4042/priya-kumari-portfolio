import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowUp, FaHeart, FaReact } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './Footer.css';

const footerLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-content">
          <Link to="home" smooth duration={600} className="footer-logo-link">
            <Logo size="md" showText={true} />
          </Link>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="footer-divider" />
          <p className="copyright">
            &copy; {new Date().getFullYear()} Priya Kumari. Crafted with{' '}
            <FaHeart className="heart-icon" /> using{' '}
            <FaReact className="react-icon" /> React
          </p>
        </div>
      </div>
    </footer>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`back-to-top ${visible ? 'visible' : ''}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link to="home" smooth duration={800}>
        <FaArrowUp />
      </Link>
    </motion.div>
  );
};

export default Footer;
