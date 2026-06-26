import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import { education } from '../../data/experience';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="section education" id="education">
      <div className="container" ref={ref}>
        <motion.div
          className="edu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="edu-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="edu-card-accent" />

            <div className="edu-icon-wrapper">
              <FiBookOpen size={28} />
            </div>

            <div className="edu-content">
              <div className="edu-top">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-location">{edu.location}</p>
                </div>
                <div className="edu-period-badge">
                  <FiAward size={14} />
                  {edu.period}
                </div>
              </div>

              <div className="edu-coursework">
                <h4 className="coursework-title">Relevant Coursework</h4>
                <div className="coursework-tags">
                  {edu.coursework.map((course, j) => (
                    <motion.span
                      key={course}
                      className="coursework-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + j * 0.05 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
