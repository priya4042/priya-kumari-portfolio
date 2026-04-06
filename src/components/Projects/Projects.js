import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../../data/portfolioData';
import './Projects.css';

const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{'// My recent work'}</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications I've built that solve business problems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <Tilt
                key={project.title}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor={project.color}
                glareBorderRadius="20px"
                scale={1.01}
              >
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-cursor="View"
                >
                  {/* Image */}
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="project-image-overlay">
                      <motion.div
                        className="project-overlay-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="project-view-btn">
                          <FaExternalLinkAlt />
                          View Details
                        </span>
                      </motion.div>
                    </div>
                    <div className="project-category-badge" style={{ background: project.color }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="project-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <span className="project-learn-more">
                        Learn more <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
