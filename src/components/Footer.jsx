import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/shubhampaithane', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/shubhampaithane', label: 'LinkedIn' },
    { icon: <FaCode />, url: 'https://leetcode.com/shubhampaithane', label: 'LeetCode' },
    { icon: <FaEnvelope />, url: 'mailto:shubhampaithane04@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Shubham Paithane
            </motion.h3>
            <p>Software Developer | Full-Stack & AI Enthusiast</p>
            <p className="footer-tagline">Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            © {currentYear} Shubham Paithane. Made with <FaHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
