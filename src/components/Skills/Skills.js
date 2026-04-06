import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {
  FaMicrosoft, FaCode, FaLayerGroup, FaJsSquare, FaDatabase, FaJs, FaPlug,
  FaServer, FaProjectDiagram, FaPaintBrush,
} from 'react-icons/fa';
import { skillsData, servicesData } from '../../data/portfolioData';
import './Skills.css';

const skillIconMap = {
  microsoft: FaMicrosoft,
  code: FaCode,
  layers: FaLayerGroup,
  js: FaJsSquare,
  database: FaDatabase,
  jquery: FaJs,
  api: FaPlug,
};

const serviceIconMap = {
  server: FaServer,
  api: FaProjectDiagram,
  layout: FaPaintBrush,
  database: FaDatabase,
};

const SkillRing = ({ percent, inView, delay, color }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <div className="skill-ring">
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id={`grad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={radius} className="ring-bg" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="ring-fill"
          style={{
            strokeDasharray: circumference,
            stroke: `url(#grad-${color.replace('#', '')})`,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </svg>
      <motion.span
        className="skill-percent"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + 0.6, type: 'spring' }}
      >
        {percent}%
      </motion.span>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{'// What I bring to the table'}</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Technologies I master and services I deliver to create impactful solutions
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <button
            className={`skills-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Technical Skills
          </button>
          <button
            className={`skills-tab ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            What I Do
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'skills' ? (
            <motion.div
              key="skills"
              className="skills-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {skillsData.map((skill, index) => {
                const Icon = skillIconMap[skill.icon];
                return (
                  <Tilt
                    key={skill.name}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable={true}
                    glareMaxOpacity={0.08}
                    glareColor={skill.color}
                    glarePosition="all"
                    glareBorderRadius="22px"
                    scale={1.02}
                  >
                    <motion.div
                      className="skill-card"
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <div className="skill-card-glow" style={{ background: skill.color }} />
                      <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}12` }}>
                        <Icon />
                      </div>
                      <SkillRing
                        percent={skill.percent}
                        inView={inView}
                        delay={0.3 + index * 0.08}
                        color={skill.color}
                      />
                      <h3>{skill.name}</h3>
                      <p className="skill-subtitle">{skill.subtitle}</p>
                      <p className="skill-desc">{skill.description}</p>
                    </motion.div>
                  </Tilt>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="services"
              className="services-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {servicesData.map((service, index) => {
                const Icon = serviceIconMap[service.icon];
                return (
                  <motion.div
                    className="service-card"
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-icon-wrapper">
                      <Icon />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-number">0{index + 1}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
