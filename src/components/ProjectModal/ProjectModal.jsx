import { motion } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';
import { BsLightningChargeFill } from 'react-icons/bs';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-container"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header" style={{
          background: `linear-gradient(135deg, ${project.color}12, transparent)`
        }}>
          <div className="modal-header-content">
            <span className="project-badge" style={{
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}30`
            }}>
              {project.category}
            </span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-text">{project.longDescription}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">
              <BsLightningChargeFill className="section-icon" />
              Key Features
            </h3>
            <ul className="feature-list">
              {project.features?.map((feature, i) => (
                <motion.li
                  key={i}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <FiCheck className="feature-check" style={{ color: project.color }} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {project.technicalHighlights && (
            <div className="modal-section">
              <h3 className="modal-section-title">Technical Highlights</h3>
              <div className="tech-highlights">
                {project.technicalHighlights.map((highlight, i) => (
                  <div key={i} className="tech-highlight-item glass-card">
                    <span className="highlight-number" style={{ color: project.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Tech Stack</h3>
            <div className="modal-stack">
              {project.stack?.map(tech => (
                <span key={tech} className="modal-stack-tag" style={{
                  borderColor: `${project.color}30`
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiGithub /> View Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
