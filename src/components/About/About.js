import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {
  FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaBriefcase,
  FaDownload, FaCheckCircle, FaArrowRight,
} from 'react-icons/fa';
import { aboutData, personalInfo } from '../../data/portfolioData';
import generateResume from '../../utils/generateResume';
import './About.css';

const iconMap = {
  location: FaMapMarkerAlt,
  email: FaEnvelope,
  degree: FaGraduationCap,
  status: FaBriefcase,
};

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div className="section-header" {...fadeUp(0)}>
          <span className="section-tag">{'// Get to know me'}</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-image" {...fadeUp(0.2)}>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.12}
              glareColor="#c9a96e"
              glarePosition="all"
              glareBorderRadius="24px"
              className="about-tilt-wrapper"
            >
              <div className="about-img-card">
                <img
                  src={personalInfo.aboutImage}
                  alt={personalInfo.name}
                  className="about-photo"
                />
                <div className="about-img-overlay" />
              </div>
            </Tilt>

            {/* Experience badge */}
            <motion.div
              className="about-experience-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            >
              <span className="exp-number">3+</span>
              <span className="exp-text">Years<br />Experience</span>
            </motion.div>

            {/* Project count badge */}
            <motion.div
              className="about-project-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            >
              <span className="proj-number">10+</span>
              <span className="proj-text">Projects</span>
            </motion.div>

            <div className="about-decoration about-dec-dots" />
            <div className="about-decoration about-dec-circle" />
          </motion.div>

          <motion.div className="about-content" {...fadeUp(0.3)}>
            <h3>
              I'm a passionate <span className="highlight">Software Developer</span> specialized
              in <span className="highlight">{aboutData.title}</span>
            </h3>

            {aboutData.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Skill highlights */}
            <div className="about-highlights">
              {aboutData.highlights.map((item, i) => (
                <motion.div
                  className="highlight-item"
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <FaCheckCircle className="highlight-check" />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-info-grid">
              {aboutData.info.map((info, i) => {
                const Icon = iconMap[info.icon];
                return (
                  <motion.div
                    className="info-item"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ y: -4, borderColor: 'rgba(201, 169, 110, 0.3)' }}
                  >
                    <div className="info-icon">
                      <Icon />
                    </div>
                    <div>
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="about-cta-row">
              <button onClick={generateResume} className="btn btn-primary" data-cursor="Download">
                <span>Download Resume</span>
                <FaDownload />
              </button>
              <a href={`mailto:${personalInfo.email}`} className="about-contact-link" data-cursor="Contact">
                <span>Let's work together</span>
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
