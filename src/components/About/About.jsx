import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FiMapPin, FiCode, FiBriefcase, FiCpu } from 'react-icons/fi';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.2);

  const highlights = [
    { icon: FiCpu, label: 'AI/ML Systems', value: 'End-to-End' },
    { icon: FiCode, label: 'Full Stack', value: 'Mobile + Web' },
    { icon: FiBriefcase, label: 'Experience', value: 'Production-Grade' },
    { icon: FiMapPin, label: 'Location', value: 'Lahore, PK' },
  ];

  return (
    <section className="section about" id="about">
      <div className="grid-pattern" />
      <div className="container" ref={ref}>
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building the <span className="gradient-text">Future</span> with Code & AI
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-photo-container">
              <img 
                src="/profile.jpg" 
                alt="Muhammad Hassan Arshad" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-placeholder" id="profile-photo-area" style={{ display: 'none' }}>
                <div className="photo-icon">
                  <span className="photo-initials">HA</span>
                </div>
                <span className="photo-label">Photo not found</span>
              </div>
              <div className="photo-border-glow" />
              <div className="photo-dots" />
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="about-bio">
              Software Engineer with hands-on experience building production AI/ML systems end-to-end — from trained predictive models to deployed Generative AI pipelines. I design and ship microservices architectures, train and deploy machine learning models, integrate LLMs and diffusion models into production mobile apps, and build full-stack web platforms from scratch.
            </p>
            <p className="about-bio">
              Comfortable across the entire ML lifecycle: synthetic data generation, feature engineering, model training, and microservice deployment. I combine strong engineering fundamentals with AI-augmented development to build fast without compromising on system design.
            </p>
            <p className="about-bio">
              Currently completing my <span className="text-highlight">BS in Software Engineering</span> at the University of Central Punjab, Lahore.
            </p>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="highlight-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="highlight-icon" size={22} />
                  <div className="highlight-info">
                    <span className="highlight-value">{item.value}</span>
                    <span className="highlight-label">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
