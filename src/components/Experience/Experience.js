import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaProjectDiagram, FaCheckCircle, FaStar } from 'react-icons/fa';
import { experienceData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{"// Where I've worked"}</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building software solutions
          </p>
        </motion.div>

        <div className="timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {experienceData.map((exp, index) => (
            <motion.div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.25, type: 'spring', stiffness: 200 }}
              >
                <FaBriefcase />
              </motion.div>

              <motion.div
                className="timeline-content"
                whileHover={{ y: -6 }}
              >
                {exp.current && (
                  <div className="timeline-badge">
                    <FaStar className="badge-star" /> Current Role
                  </div>
                )}
                <h3>{exp.title}</h3>
                <h4>
                  <FaBuilding /> {exp.company}, {exp.location}
                </h4>
                <span className="timeline-date">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <p>{exp.description}</p>

                {/* Achievements */}
                {exp.achievements && (
                  <div className="timeline-achievements">
                    <h5>Key Achievements</h5>
                    {exp.achievements.map((achievement, i) => (
                      <div className="achievement-item" key={i}>
                        <FaCheckCircle className="achievement-check" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="timeline-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {exp.projects && exp.projects.length > 0 && (
                  <div className="timeline-projects">
                    <h5>Projects</h5>
                    {exp.projects.map((proj) => (
                      <div className="mini-project" key={proj.name}>
                        <FaProjectDiagram />
                        <div>
                          <strong>{proj.name}</strong>
                          <span>{proj.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
