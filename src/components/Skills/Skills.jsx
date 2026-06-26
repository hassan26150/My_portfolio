import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import skills from '../../data/skills';
import './Skills.css';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];
  const displayed = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section className="section skills" id="skills">
      <div className="container" ref={ref}>
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies I use to bring ideas to life — from training ML models to deploying full-stack systems.
          </p>
        </motion.div>

        <motion.div
          className="skills-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {displayed.map((group, gi) => (
              <motion.div
                key={group.category}
                className="skill-category-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * gi }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon" style={{ color: group.color }}>
                    <group.icon size={22} />
                  </div>
                  <h3 className="skill-category-title">{group.category}</h3>
                </div>

                <div className="skill-items">
                  {group.items.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 * gi + 0.05 * si }}
                    >
                      <div className="skill-info">
                        {skill.icon && <skill.icon className="skill-item-icon" size={16} />}
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 * gi + 0.08 * si, ease: 'easeOut' }}
                          style={{
                            background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
