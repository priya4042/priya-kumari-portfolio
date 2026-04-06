import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';
import './Loader.css';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-wrapper"
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="loader-bg-pattern" />
          <motion.div
            className="loader-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Spinning rings around logo */}
            <div className="loader-ring-container">
              <motion.div
                className="loader-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="loader-ring loader-ring-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="loader-center-logo"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Logo size="lg" />
              </motion.div>
            </div>

            <motion.div
              className="loader-text-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="loader-name">Priya Kumari</h2>
              <p className="loader-role">Software Developer</p>
            </motion.div>

            <div className="loader-bar">
              <motion.div
                className="loader-bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>

            <motion.div
              className="loader-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="loader-dot-item"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
