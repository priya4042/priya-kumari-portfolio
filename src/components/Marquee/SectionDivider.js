import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionDivider = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} style={{ padding: '0 24px', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
};

export default SectionDivider;
