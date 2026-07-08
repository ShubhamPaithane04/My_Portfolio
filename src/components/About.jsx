import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCode, FaAward } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Top 1% Nationally',
      description: 'NPTEL Computer Networks & Internet Protocol by IIT Kharagpur',
      color: '#FFD700'
    },
    {
      icon: <FaCode />,
      title: '190+ DSA Problems',
      description: 'Solved on LeetCode covering Arrays, Trees, Graphs, DP',
      color: '#3b82f6'
    },
    {
      icon: <FaAward />,
      title: 'PU Hackathon 2025',
      description: 'Built AI-powered solution under 24 hours at Parul University',
      color: '#10b981'
    }
  ]

  const stats = [
    { number: '40%', label: 'Task Automation Efficiency' },
    { number: '500+', label: 'API Requests Handled' },
    { number: '95%', label: 'AI Accuracy Achieved' },
    { number: '35%', label: 'Manual Effort Reduced' }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my journey and achievements
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p>
              I'm a passionate software developer pursuing <strong>B.Tech in Computer Science Engineering</strong> at 
              Parul University, Gujarat (Expected Graduation: 2027). With a strong foundation in Java, Python, 
              and full-stack development, I specialize in building responsive and intelligent applications.
            </p>
            <p>
              My expertise spans across modern frameworks like <strong>React.js, Next.js, and FastAPI</strong>, 
              with a particular interest in AI integration and automation. I've successfully improved task 
              automation efficiency by 40% and handled 500+ API requests through optimized pipelines in my projects.
            </p>
            <p>
              Beyond coding, I'm passionate about problem-solving and continuously learning new technologies. 
              My achievements include ranking in the <strong>Top 1% Nationally</strong> in NPTEL Computer Networks 
              and solving 190+ DSA problems on LeetCode.
            </p>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="achievement-icon" style={{ background: `${achievement.color}20`, color: achievement.color }}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
