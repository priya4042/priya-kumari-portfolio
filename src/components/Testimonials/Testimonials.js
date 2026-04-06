import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonialsData } from '../../data/portfolioData';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{'// What people say'}</span>
          <h2 className="section-title">
            Testi<span className="gradient-text">monials</span>
          </h2>
          <p className="section-subtitle">
            Feedback from colleagues and managers I've worked with
          </p>
        </motion.div>

        <motion.div
          className="testimonials-container"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Cards */}
          <div className="testimonials-slider">
            {testimonialsData.map((t, index) => (
              <motion.div
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                key={index}
                initial={false}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.9,
                  x: index === activeIndex ? 0 : index < activeIndex ? -50 : 50,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="testimonial-controls">
            <button className="testi-btn" onClick={prev} aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>
            <div className="testimonial-dots">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi-btn" onClick={next} aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
