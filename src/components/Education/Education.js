import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaGraduationCap, FaSchool, FaBookReader, FaMedal } from 'react-icons/fa';
import { educationData } from '../../data/portfolioData';
import './Education.css';

const iconMap = {
  graduation: FaGraduationCap,
  school: FaSchool,
  book: FaBookReader,
};

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{'// My learning journey'}</span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background that built my technical foundation
          </p>
        </motion.div>

        <div className="education-grid">
          {educationData.map((edu, index) => {
            const Icon = iconMap[edu.icon];
            return (
              <Tilt
                key={index}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#c9a96e"
                glareBorderRadius="22px"
                scale={1.02}
              >
                <motion.div
                  className="edu-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                >
                  <div className="edu-top-bar" />
                  <div className="edu-header">
                    <div className="edu-icon">
                      <Icon />
                    </div>
                    <div className="edu-year-badge">{edu.year}</div>
                  </div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                  {edu.grade && (
                    <div className="edu-grade">
                      <FaMedal className="grade-icon" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                  <div className="edu-card-number">0{index + 1}</div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
