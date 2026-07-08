import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaRobot, FaChess, FaCheckCircle } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Agentic AI: Intelligent Task Execution System',
      year: '2026',
      icon: <FaRobot />,
      description: 'Autonomous AI-driven system that improved task automation efficiency by 40% through intelligent planning and execution using OpenAI API.',
      highlights: [
        'Handled 500+ API requests with optimized pipelines',
        'Reduced manual effort by 35% via intelligent delegation',
        'Full-stack with React.js frontend and FastAPI backend'
      ],
      tech: ['React.js', 'Next.js', 'Node.js', 'FastAPI', 'OpenAI API', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
      image: 'ai-project',
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'AI-Powered Chess Coach',
      year: '2025',
      icon: <FaChess />,
      description: 'Intelligent chess coaching system delivering real-time move suggestions with 95% accuracy using Stockfish engine and python-chess.',
      highlights: [
        'Improved player win rate by 30%',
        'Reduced blunder rate by 25% in guided sessions',
        'Interactive UI with Flask REST API supporting smooth real-time gameplay'
      ],
      tech: ['Python', 'Flask', 'JavaScript', 'HTML/CSS', 'Stockfish', 'python-chess', 'chessboard.js'],
      image: 'chess-project',
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications showcasing my skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-icon">{project.icon}</div>
                <div className="project-year">{project.year}</div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight">
                      <FaCheckCircle />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="tech-badge more">+{project.tech.length - 5} more</span>
                  )}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ×
              </button>
              
              <div className="modal-header" style={{ background: selectedProject.gradient }}>
                <div className="modal-icon">{selectedProject.icon}</div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.year}</p>
              </div>

              <div className="modal-content">
                <p>{selectedProject.description}</p>
                
                <h4>Key Achievements</h4>
                <ul>
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <h4>Technologies Used</h4>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Code
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
