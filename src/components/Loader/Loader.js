import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Minimal spinner */}
            <div className="loader-spinner-wrap">
              <motion.div
                className="loader-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="loader-text-group">
              <h2 className="loader-name">Priya Kumari</h2>
              <div className="loader-divider" />
              <p className="loader-role">Software Developer</p>
            </div>

            {/* Progress bar */}
            <div className="loader-bar">
              <motion.div
                className="loader-bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
