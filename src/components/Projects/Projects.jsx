import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import projects from '../../data/projects';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Projects.css';

const filters = ['All', 'AI/ML', 'Full Stack'];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

  return (
    <section className="section projects" id="projects">
      <div className="container" ref={ref}>
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-grade systems spanning AI/ML, microservices, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Projects - Large Cards */}
            {featured.length > 0 && (
              <div className="featured-projects">
                {featured.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="project-card featured-card glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 * i }}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-card-glow" style={{
                      background: `radial-gradient(ellipse at top, ${project.color}15, transparent 60%)`
                    }} />

                    <div className="project-card-content">
                      <div className="project-card-top">
                        <span className="project-badge" style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}>
                          {project.category}
                        </span>
                        <span className="featured-tag">Featured</span>
                      </div>

                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-desc">{project.description}</p>

                      <div className="project-stack">
                        {project.stack.slice(0, 6).map(tech => (
                          <span key={tech} className="stack-tag">{tech}</span>
                        ))}
                        {project.stack.length > 6 && (
                          <span className="stack-tag stack-more">+{project.stack.length - 6}</span>
                        )}
                      </div>

                      <div className="project-card-footer">
                        <button
                          className="project-link case-study-link"
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        >
                          View Case Study <FiArrowRight />
                        </button>
                        <div className="project-links">
                          {project.github && project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-icon-link"
                              onClick={e => e.stopPropagation()}
                              aria-label="GitHub"
                            >
                              <FiGithub size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Regular Projects - Smaller Grid */}
            {regular.length > 0 && (
              <div className="regular-projects">
                {regular.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="project-card regular-card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="project-card-content">
                      <div className="project-card-top">
                        <span className="project-badge" style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}>
                          {project.category}
                        </span>
                      </div>

                      <h3 className="project-title small">{project.title}</h3>
                      <p className="project-subtitle small">{project.subtitle}</p>
                      <p className="project-desc small">{project.description}</p>

                      <div className="project-stack">
                        {project.stack.slice(0, 4).map(tech => (
                          <span key={tech} className="stack-tag">{tech}</span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="stack-tag stack-more">+{project.stack.length - 4}</span>
                        )}
                      </div>

                      <div className="project-card-footer">
                        <button
                          className="project-link"
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        >
                          Details <FiArrowRight />
                        </button>
                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-icon-link"
                            onClick={e => e.stopPropagation()}
                            aria-label="GitHub"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
