import React, { useState } from 'react'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle,
  FaRobot, FaChess, FaTrophy, FaCode, FaAward, FaFilePdf, FaDownload, FaExternalLinkAlt,
  FaImages, FaMusic, FaBriefcase, FaLaptopCode, FaGraduationCap,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'
import {
  profile, links, stats, achievements, projects, skillCategories, wallpapers, services,
} from '../data/portfolio'
import MusicApp from './apps/MusicApp'

const achIcon = { trophy: <FaTrophy />, code: <FaCode />, award: <FaAward />, dev: <FaLaptopCode />, graduation: <FaGraduationCap /> }
const projIcon = { robot: <FaRobot />, chess: <FaChess /> }

// ── experience bullets shown in the "My experience includes" grid ───────────
const experienceIncludes = [
  'Data Structures & Algorithms',
  'Arrays, Graphs, Trees, Linked Lists',
  'Full-Stack Web Development',
  'React.js & Frontend Development',
  'Node.js & Backend APIs',
  'Database Design (MongoDB, SQL)',
  'Git & Version Control',
  'Problem Solving & Optimization',
]

// ── flat tech-stack list ────────────────────────────────────────────────────
const techStack = [
  'React.js', 'Next.js', 'Node.js', 'FastAPI', 'Flask',
  'Java', 'Python', 'JavaScript',
  'MongoDB', 'PostgreSQL', 'SQL',
  'OpenAI API', 'LangChain',
  'AWS', 'Vercel', 'Git', 'GitHub',
]

function AboutApp() {
  return (
    <div className="about-me-root">

      {/* ── Big header ──────────────────────────────────────────────── */}
      <h1 className="ame-title">About Me</h1>

      {/* ── Main bio card ───────────────────────────────────────────── */}
      <div className="ame-card">

        {/* Intro paragraphs */}
        <p className="ame-p">
          Hi, I'm <strong className="ame-bold">{profile.name}</strong>, a{' '}
          <strong className="ame-bold">Computer Science student</strong>{' '}
          at Parul University passionate about problem-solving and building innovative projects.
        </p>

        <p className="ame-p">
          I've solved <strong className="ame-bold">300+ DSA problems</strong> on LeetCode across 
          Arrays, Graphs, Trees, Linked Lists, and Dynamic Programming. I enjoy working on 
          full-stack projects using React, Node.js, and databases to turn ideas into functional 
          applications.
        </p>

        {/* ── My focus areas ──────────────────────────────── */}
        <p className="ame-section-label">My focus areas:</p>

        <div className="ame-exp-grid">
          {experienceIncludes.map((item) => (
            <div key={item} className="ame-exp-item">
              <span className="ame-bullet">•</span>
              {item}
            </div>
          ))}
        </div>

        {/* Closing paragraphs */}
        <p className="ame-p">
          I'm focused on continuously learning and improving my skills through competitive 
          programming, building projects, and exploring new technologies. I believe in writing 
          clean, efficient code and creating solutions that make a difference.
        </p>

        <p className="ame-p">
          Currently pursuing my B.Tech degree, I'm eager to apply my knowledge in real-world 
          scenarios and contribute to meaningful projects. When I'm not coding, I enjoy solving 
          algorithmic challenges and working on innovative ideas.
        </p>

        {/* ── Stats row ─────────────────────────────────────────────── */}
        <div className="ame-stats">
          {stats.map((s) => (
            <div className="ame-stat-box" key={s.label}>
              <span className="ame-stat-n">{s.number}</span>
              <span className="ame-stat-l">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Tech Stack ────────────────────────────────────────────── */}
        <p className="ame-section-label ame-tech-label">Technologies I work with</p>
        <div className="ame-chips">
          {techStack.map((t) => (
            <span key={t} className="ame-chip">{t}</span>
          ))}
        </div>

      </div>

      {/* ── Achievements ──────────────────────────────────────────────── */}
      <h2 className="ame-sub-title">Achievements</h2>
      <div className="ame-ach-list">
        {achievements.map((a) => (
          <div className="ame-ach-row" key={a.title}>
            <div className="ame-ach-ic" style={{ background: `${a.color}22`, color: a.color }}>
              {achIcon[a.icon]}
            </div>
            <div>
              <h4 className="ame-ach-title">{a.title}</h4>
              <p className="ame-ach-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

function WhatImDoingApp() {
  return (
    <div className="what-doing-root">
      <h1 className="what-doing-title">What I'm Currently Doing</h1>
      <p className="what-doing-subtitle">
        My current focus as a Computer Science student
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="service-icon">
              {achIcon[service.icon] || <FaCode />}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="doing-highlights">
        <h2>Skills & Focus Areas</h2>
        <div className="highlights-grid">
          {experienceIncludes.map((item, index) => (
            <motion.div
              key={item}
              className="highlight-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
            >
              <span className="highlight-icon">✓</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectsApp() {
  return (
    <div className="projects-modern">
      <h1 className="projects-modern-title">Projects</h1>
      {projects.map((p) => (
        <div className="project-glass-card" key={p.id}>
          <div className="project-glass-header">
            <h3 className="project-glass-title">{p.title}</h3>
            <span className="project-glass-badge">{p.year}</span>
          </div>
          <p className="project-glass-subtitle">{p.highlights[0]}</p>
          <p className="project-glass-desc">{p.description}</p>
          <div className="project-glass-highlights">
            {p.highlights.slice(1).map((h, i) => (
              <div className="project-glass-highlight" key={i}>
                <span className="highlight-dot">•</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <div className="tech-row-glass">
            {p.tech.map((t) => <span className="tech-badge-glass" key={t}>{t}</span>)}
          </div>
          <div className="proj-links-glass">
            <a href={p.github} target="_blank" rel="noreferrer" className="glass-link">
              <FaGithub /> View Code
            </a>
            <a href={p.live} target="_blank" rel="noreferrer" className="glass-link primary">
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

function SkillsApp() {
  return (
    <div>
      <h1 className="app-h1">Technical Skills</h1>
      <p className="app-sub">Technologies I've learned and worked with</p>
      {skillCategories.map((c) => (
        <div className="skill-cat" key={c.title}>
          <h3>{c.title}</h3>
          <div className="skill-chips">
            {c.skills.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactApp() {
  const items = [
    { ic: <FaEnvelope />, c: '#EA4335', l: 'Email', v: profile.email, href: links.email },
    { ic: <FaPhone />, c: '#34A853', l: 'Phone', v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { ic: <FaMapMarkerAlt />, c: '#4285F4', l: 'Location', v: profile.location, href: null },
  ]
  const socials = [
    { ic: <FaGithub />, l: 'GitHub', href: links.github },
    { ic: <FaLinkedin />, l: 'LinkedIn', href: links.linkedin },
    { ic: <SiLeetcode />, l: 'LeetCode', href: links.leetcode },
  ]
  return (
    <div>
      <h1 className="app-h1">Get In Touch</h1>
      <p className="app-sub">Open to internships, collaborations, and learning opportunities</p>
      <div className="contact-grid">
        {items.map((i) => {
          const inner = (
            <div className="contact-item">
              <div className="ci" style={{ background: `${i.c}22`, color: i.c }}>{i.ic}</div>
              <div>
                <div className="cl">{i.l}</div>
                <div className="cv">{i.v}</div>
              </div>
            </div>
          )
          return i.href ? <a key={i.l} href={i.href} target="_blank" rel="noreferrer">{inner}</a> : <div key={i.l}>{inner}</div>
        })}
      </div>
      <div className="contact-socials">
        {socials.map((s) => (
          <a key={s.l} href={s.href} target="_blank" rel="noreferrer">{s.ic}<span>{s.l}</span></a>
        ))}
      </div>
    </div>
  )
}

function ResumeApp() {
  return (
    <div className="resume-wrap">
      <div className="resume-bar">
        <a href={links.resume} download="Shubham_Paithane_Resume.pdf"><FaDownload size={12} /> Download PDF</a>
      </div>
      <iframe className="resume-frame" src={`${links.resume}#toolbar=0`} title="Résumé" />
    </div>
  )
}

function ResumeView() {
  const education = [
    {
      school: 'Parul University',
      detail: 'B.Tech in Computer Science Engineering',
      meta: 'Gujarat, India',
      date: '2023 - 2027',
    },
    {
      school: 'Computer Science Foundation',
      detail: 'Full-stack development, data structures, AI systems and cloud tools',
      meta: profile.location,
      date: 'Ongoing',
    },
  ]
  const experience = [
    {
      role: 'Full Stack Software Developer',
      org: 'Personal Projects',
      date: '2025 - Present',
      points: [
        'Building responsive web applications with React.js, Next.js, Node.js, FastAPI and Flask.',
        'Designed AI-powered systems using OpenAI API, LangChain, MongoDB and PostgreSQL.',
        'Improved automation efficiency by 40% and handled 500+ API requests through optimized pipelines.',
      ],
    },
    {
      role: 'AI Project Developer',
      org: 'Agentic AI and Chess Coach',
      date: '2025 - 2026',
      points: [
        'Created an intelligent task execution system with autonomous planning and delegation.',
        'Built a chess coaching engine using Stockfish and python-chess with real-time suggestions.',
      ],
    },
  ]
  const skillRows = [
    ['Languages', 'Java, Python, C, JavaScript, HTML, CSS'],
    ['Frameworks', 'React.js, Next.js, FastAPI, Flask, Node.js'],
    ['Databases', 'MongoDB, PostgreSQL, SQL'],
    ['Cloud & Tools', 'AWS, Vercel, Render, Git, GitHub, VS Code'],
  ]

  return (
    <div className="resume-wrap">
      <div className="resume-hero">
        <h1>Resume</h1>
        <a href={links.resume} download="Shubham_Paithane_Resume.pdf"><FaDownload size={14} /> Download Resume</a>
      </div>

      <article className="resume-sheet">
        <header className="resume-head">
          <h2>{profile.fullName.toUpperCase()}</h2>
          <div className="resume-contact-line">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>GitHub: ShubhamPaithane04</span>
            <span>LeetCode: shubham_0_4_</span>
          </div>
        </header>

        <section className="resume-section">
          <h3>Education</h3>
          {education.map((item) => (
            <div className="resume-row" key={item.school}>
              <div>
                <h4>{item.school}</h4>
                <p>{item.detail}</p>
              </div>
              <div className="resume-side">
                <span>{item.meta}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Experience</h3>
          {experience.map((item) => (
            <div className="resume-block" key={item.role}>
              <div className="resume-row">
                <div>
                  <h4>{item.role} <span>| {item.org}</span></h4>
                </div>
                <div className="resume-side"><span>{item.date}</span></div>
              </div>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Projects</h3>
          {projects.map((project) => (
            <div className="resume-block" key={project.id}>
              <div className="resume-row">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="resume-side"><span>{project.year}</span></div>
              </div>
              <ul>
                {project.highlights.slice(0, 3).map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <div className="resume-skill-grid">
            {skillRows.map(([label, value]) => (
              <div className="resume-skill-row" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}

function WallpaperApp() {
  const savedWallpaper = localStorage.getItem('portfolio-wallpaper-v2') || wallpapers[0].id
  const [activeWallpaper, setActiveWallpaper] = useState(savedWallpaper)

  const chooseWallpaper = (id) => {
    localStorage.setItem('portfolio-wallpaper-v2', id)
    setActiveWallpaper(id)
    window.dispatchEvent(new CustomEvent('wallpaper-change', { detail: id }))
  }

  return (
    <div>
      <h1 className="app-h1">Wallpaper</h1>
      <p className="app-sub">Pick a background for the desktop</p>
      <div className="wallpaper-grid">
        {wallpapers.map((wallpaper) => (
          <button
            key={wallpaper.id}
            type="button"
            className={'wallpaper-card' + (activeWallpaper === wallpaper.id ? ' active' : '')}
            onClick={() => chooseWallpaper(wallpaper.id)}
            data-wallpaper-id={wallpaper.id}
          >
            <span className="wallpaper-preview" style={{ background: wallpaper.background }} />
            <span className="wallpaper-meta">
              <span>{wallpaper.name}</span>
              <span className="wallpaper-swatch" style={{ background: wallpaper.accent }} />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Registry: id -> {title, icon, w, h, noPad, render}
export const APPS = {
  about: { title: 'About', icon: <FaCode />, w: 820, h: 780, render: AboutApp },
  doing: { title: "What I'm Doing", icon: <FaBriefcase />, w: 820, h: 720, render: WhatImDoingApp },
  projects: { title: 'Projects', icon: <FaRobot />, w: 820, h: 720, render: ProjectsApp },
  skills: { title: 'Skills', icon: <FaCode />, w: 720, h: 660, render: SkillsApp },
  contact: { title: 'Contact', icon: <FaEnvelope />, w: 680, h: 620, render: ContactApp },
  music: { title: 'Music', icon: <FaMusic />, w: 920, h: 680, noPad: true, render: MusicApp },
  resume: { title: 'Résumé', icon: <FaFilePdf />, w: 720, h: 760, noPad: true, render: ResumeApp },
  wallpaper: { title: 'Wallpaper', icon: <FaImages />, w: 780, h: 620, render: WallpaperApp },
}

APPS.resume.w = 1040
APPS.resume.h = 820
APPS.resume.render = ResumeView
