import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.3 } }}
        >
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="loader-bracket">&lt;</span>
              <span className="loader-text">HA</span>
              <span className="loader-bracket">/&gt;</span>
            </motion.div>

            <div className="loader-bar-container">
              <motion.div
                className="loader-bar"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>

            <motion.p
              className="loader-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
