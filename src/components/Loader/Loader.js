import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const nameLetters = 'Priya Kumari'.split('');
const roleText = 'Software Developer';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-wrapper"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Subtle grid pattern */}
          <div className="loader-grid-bg" />

          <motion.div className="loader-content">
            {/* Animated initials */}
            <motion.div
              className="loader-initials"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 120, damping: 12 }}
            >
              <span className="loader-initial-text">PK</span>
              <motion.div
                className="loader-initial-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="loader-initial-ring loader-initial-ring-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Letter-by-letter name reveal */}
            <div className="loader-name">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="loader-letter"
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.06,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Animated divider line */}
            <motion.div
              className="loader-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Role text fade in */}
            <motion.p
              className="loader-role"
              initial={{ opacity: 0, letterSpacing: '8px' }}
              animate={{ opacity: 1, letterSpacing: '4px' }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {roleText}
            </motion.p>

            {/* Progress bar with percentage */}
            <motion.div
              className="loader-progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="loader-bar">
                <motion.div
                  className="loader-bar-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.div>

            {/* Bottom dots */}
            <div className="loader-dots">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="loader-dot"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{
                    delay: 1.6 + i * 0.15,
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
