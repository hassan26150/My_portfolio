import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FiEdit3, FiClock } from 'react-icons/fi';
import './Blog.css';

export default function Blog() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="section blog" id="blog">
      <div className="container" ref={ref}>
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Blog</span>
          <h2 className="section-title">
            Thoughts & <span className="gradient-text">Insights</span>
          </h2>
        </motion.div>

        <motion.div
          className="blog-coming-soon glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="coming-soon-icon">
            <FiEdit3 size={40} />
          </div>
          <h3 className="coming-soon-title">Coming Soon</h3>
          <p className="coming-soon-desc">
            I'm working on articles about AI/ML engineering, microservices architecture, 
            and building production-grade systems. Stay tuned for deep dives into the 
            technical decisions behind my projects.
          </p>
          <div className="coming-soon-topics">
            <span className="topic-tag">AI/ML Engineering</span>
            <span className="topic-tag">System Design</span>
            <span className="topic-tag">Microservices</span>
            <span className="topic-tag">LLM Integration</span>
            <span className="topic-tag">Full Stack Dev</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
