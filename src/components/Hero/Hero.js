import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaArrowRight, FaDownload, FaMicrosoft, FaJsSquare, FaDatabase, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import { personalInfo } from '../../data/portfolioData';
import generateResume from '../../utils/generateResume';
import CountUp from './CountUp';
import './Hero.css';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-gradient-orb hero-orb-1" />
      <div className="hero-gradient-orb hero-orb-2" />
      <div className="hero-gradient-orb hero-orb-3" />
      <div className="hero-grid-pattern" />

      <div className="hero-container container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
          <motion.div className="hero-badge" variants={item}>
            <HiOutlineSparkles className="badge-sparkle" />
            <span className="badge-dot" />
            Open to Opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={item}>
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div className="hero-typewriter" variants={item}>
            <span className="typewriter-arrow">&#9654;</span>
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 2200])}
              wrapper="span"
              speed={45}
              deletionSpeed={55}
              repeat={Infinity}
              className="typewriter-text"
            />
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p className="hero-description" variants={item}>
            {personalInfo.description}
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn btn-primary btn-magnetic" data-cursor="Connect">
                <span>Let's Talk</span>
                <FaArrowRight className="btn-icon" />
                <div className="btn-shimmer" />
              </button>
            </Link>
            <button onClick={generateResume} className="btn btn-glass" data-cursor="Download">
              <span>Download Resume</span>
              <FaDownload className="btn-icon" />
            </button>
          </motion.div>

          <motion.div className="hero-social-row" variants={item}>
            <span className="social-label">Find me on</span>
            <div className="hero-social-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero-social-link">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero-social-link">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="hero-social-line" />
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={imageVariants} initial="hidden" animate="show">
          <div className="hero-image-wrapper">
            {/* Decorative rings */}
            <div className="hero-deco-ring hero-deco-ring-1" />
            <div className="hero-deco-ring hero-deco-ring-2" />
            <div className="hero-deco-ring hero-deco-ring-3" />

            {/* Main image */}
            <div className="hero-image-container">
              <div className="hero-image-gradient-border">
                <img
                  src={personalInfo.heroImage}
                  alt={personalInfo.name}
                  className="hero-image"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating tech cards */}
            <motion.div
              className="floating-card card-1"
              animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="fc-icon" style={{ background: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}>
                <FaMicrosoft />
              </div>
              <div className="fc-text">
                <span className="fc-name">.NET Core</span>
                <span className="fc-level">Expert</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card card-2"
              animate={{ y: [0, 14, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="fc-icon" style={{ background: 'rgba(201, 169, 110, 0.12)', color: '#c9a96e' }}>
                <FaJsSquare />
              </div>
              <div className="fc-text">
                <span className="fc-name">JavaScript</span>
                <span className="fc-level">Advanced</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card card-3"
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              <div className="fc-icon" style={{ background: 'rgba(168, 216, 200, 0.12)', color: '#a8d8c8' }}>
                <FaDatabase />
              </div>
              <div className="fc-text">
                <span className="fc-name">SQL Server</span>
                <span className="fc-level">Advanced</span>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              className="hero-exp-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
            >
              <span className="hero-exp-number">3+</span>
              <span className="hero-exp-label">Years Exp.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        className="hero-stats-bar"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div className="container">
          <div className="hero-stats">
            {personalInfo.stats.map((stat, index) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number-row">
                  <CountUp end={stat.number} duration={2.5} />
                  <span className="stat-plus">{stat.suffix}</span>
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
