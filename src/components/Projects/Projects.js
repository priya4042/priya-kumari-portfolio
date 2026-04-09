import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaArrowRight, FaGithub, FaTimes, FaStar, FaBullseye, FaTasks, FaBolt, FaTrophy } from 'react-icons/fa';
import { projectsData } from '../../data/portfolioData';
import './Projects.css';

const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

const StarMethodModal = ({ project, onClose }) => {
  if (!project || !project.star) return null;

  return (
    <motion.div
      className="star-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="star-modal"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="star-close" onClick={onClose} aria-label="Close details">
          <FaTimes />
        </button>

        <div className="star-modal-header">
          <img src={project.image} alt={project.title} className="star-modal-img" />
          <div className="star-modal-header-overlay" />
          <div className="star-modal-header-content">
            <span className="star-modal-category" style={{ background: project.color }}>{project.category}</span>
            <h2>{project.title}</h2>
            <div className="star-modal-tech">
              {project.technologies.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>

        <div className="star-modal-body">
          <div className="star-method-label">
            <FaStar className="star-method-icon" /> STAR Method Breakdown
          </div>

          <div className="star-grid">
            <div className="star-item">
              <div className="star-item-header">
                <div className="star-item-icon" style={{ background: 'rgba(201, 169, 110, 0.1)', color: '#c9a96e' }}>
                  <FaBullseye />
                </div>
                <h4>Situation</h4>
              </div>
              <p>{project.star.situation}</p>
            </div>

            <div className="star-item">
              <div className="star-item-header">
                <div className="star-item-icon" style={{ background: 'rgba(212, 180, 131, 0.1)', color: '#d4b483' }}>
                  <FaTasks />
                </div>
                <h4>Task</h4>
              </div>
              <p>{project.star.task}</p>
            </div>

            <div className="star-item">
              <div className="star-item-header">
                <div className="star-item-icon" style={{ background: 'rgba(168, 216, 200, 0.1)', color: '#a8d8c8' }}>
                  <FaBolt />
                </div>
                <h4>Action</h4>
              </div>
              <p>{project.star.action}</p>
            </div>

            <div className="star-item">
              <div className="star-item-header">
                <div className="star-item-icon" style={{ background: 'rgba(201, 169, 110, 0.1)', color: '#c9a96e' }}>
                  <FaTrophy />
                </div>
                <h4>Result</h4>
              </div>
              <p>{project.star.result}</p>
            </div>
          </div>

          <div className="star-modal-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FaGithub /> View Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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
                  data-cursor="View"
                >
                  {/* Image */}
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                    <div className="project-image-overlay">
                      <motion.div className="project-overlay-content">
                        <button
                          className="project-view-btn"
                          onClick={() => setSelectedProject(project)}
                        >
                          <FaExternalLinkAlt />
                          View Details
                        </button>
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
                        <span key={tech} className="project-tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} on GitHub`}>
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="project-link project-link-live" aria-label={`View ${project.title} live demo`}>
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}
                      <button className="project-details-btn" onClick={() => setSelectedProject(project)}>
                        STAR Details <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STAR Method Modal */}
      <AnimatePresence>
        {selectedProject && (
          <StarMethodModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
