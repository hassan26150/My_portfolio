import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="section experience" id="experience">
      <div className="container" ref={ref}>
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div className="timeline-role-info">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-meta-item">
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="timeline-meta-item">
                      <FiMapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      className="timeline-achievement"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + j * 0.1 }}
                    >
                      <span className="achievement-bullet" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <div className="timeline-stack">
                  {exp.stack.map(tech => (
                    <span key={tech} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
