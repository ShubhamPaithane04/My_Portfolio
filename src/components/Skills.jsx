import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Python', emoji: '🐍', color: '#3776AB' },
        { name: 'Java', emoji: '☕', color: '#007396' },
        { name: 'JavaScript', emoji: '⚡', color: '#F7DF1E' },
        { name: 'HTML5', emoji: '🌐', color: '#E34F26' },
        { name: 'CSS3', emoji: '🎨', color: '#1572B6' }
      ]
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      skills: [
        { name: 'React.js', emoji: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', emoji: '▲', color: '#000000' },
        { name: 'Node.js', emoji: '🟢', color: '#339933' },
        { name: 'FastAPI', emoji: '⚡', color: '#009688' },
        { name: 'Flask', emoji: '🌶️', color: '#000000' }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', emoji: '🍃', color: '#47A248' },
        { name: 'PostgreSQL', emoji: '🐘', color: '#4169E1' },
        { name: 'SQL', emoji: '💾', color: '#CC2927' }
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: '☁️',
      skills: [
        { name: 'AWS', emoji: '☁️', color: '#FF9900' },
        { name: 'Vercel', emoji: '▲', color: '#000000' },
        { name: 'Git', emoji: '📦', color: '#F05032' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.emoji}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
