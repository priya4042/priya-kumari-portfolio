import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaLaptopCode, FaCode, FaBriefcase, FaUser, FaLightbulb,
  FaChevronDown, FaStar, FaBookReader,
} from 'react-icons/fa';
import { interviewCategories, interviewQuestions } from '../../data/interviewData';
import './Interview.css';

const categoryIcons = {
  laptop: FaLaptopCode,
  code: FaCode,
  briefcase: FaBriefcase,
  user: FaUser,
  lightbulb: FaLightbulb,
};

const difficultyColors = {
  easy: { bg: 'rgba(168, 216, 200, 0.1)', border: 'rgba(168, 216, 200, 0.25)', text: '#a8d8c8' },
  medium: { bg: 'rgba(201, 169, 110, 0.1)', border: 'rgba(201, 169, 110, 0.25)', text: '#c9a96e' },
  hard: { bg: 'rgba(212, 180, 131, 0.1)', border: 'rgba(212, 180, 131, 0.25)', text: '#d4b483' },
};

const QuestionCard = ({ q, isOpen, onToggle }) => {
  const dc = difficultyColors[q.difficulty];

  return (
    <motion.div
      className={`qa-card ${isOpen ? 'open' : ''}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button className="qa-question" onClick={onToggle}>
        <div className="qa-question-left">
          <span className="qa-number">Q{q.id}</span>
          <span className="qa-question-text">{q.question}</span>
        </div>
        <div className="qa-question-right">
          <span
            className="qa-difficulty"
            style={{ background: dc.bg, borderColor: dc.border, color: dc.text }}
          >
            {q.difficulty}
          </span>
          <motion.span
            className="qa-chevron"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown />
          </motion.span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="qa-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="qa-answer-inner">
              <div className="qa-answer-badge">
                <FaStar /> Sample Answer
              </div>
              <p>{q.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Interview = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('portfolio');
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredQuestions = interviewQuestions.filter((q) => q.category === activeCategory);

  const expandAll = () => {
    setOpenQuestions(new Set(filteredQuestions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  return (
    <section id="interview" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">{'// Be prepared'}</span>
          <h2 className="section-title">
            Interview <span className="gradient-text">Prep</span>
          </h2>
          <p className="section-subtitle">
            Common questions a recruiter might ask about this portfolio, my skills, and experience — with detailed answers
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          className="interview-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <FaBookReader className="banner-icon" />
          <div>
            <strong>For Recruiters & Interviewers:</strong> These questions demonstrate my technical depth, problem-solving approach, and communication skills. Click any question to see the detailed answer.
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="interview-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {interviewCategories.map((cat) => {
            const Icon = categoryIcons[cat.icon];
            const count = interviewQuestions.filter((q) => q.category === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`interview-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenQuestions(new Set());
                }}
              >
                <Icon className="tab-icon" />
                <span className="tab-label">{cat.label}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Controls */}
        <div className="interview-controls">
          <span className="controls-label">
            {filteredQuestions.length} question{filteredQuestions.length > 1 ? 's' : ''}
          </span>
          <div className="controls-actions">
            <button className="control-btn" onClick={expandAll}>Expand All</button>
            <button className="control-btn" onClick={collapseAll}>Collapse All</button>
          </div>
        </div>

        {/* Questions List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="qa-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                q={q}
                isOpen={openQuestions.has(q.id)}
                onToggle={() => toggleQuestion(q.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Interview;
