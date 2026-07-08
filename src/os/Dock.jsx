import React, { useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail, SiApplemusic, SiLeetcode } from 'react-icons/si'
import { MdOutlineWallpaper } from 'react-icons/md'
import { FiUser, FiFolder, FiFileText, FiZap, FiMail, FiBriefcase } from 'react-icons/fi'
import { useWindows } from './WindowContext'
import { links } from '../data/portfolio'

// Center dock — external links (open in new tab)
const CENTER_ITEMS = [
  { id: 'github', cls: 't-github', label: 'GitHub', href: links.github, icon: <FaGithub /> },
  { id: 'gmail', cls: 't-gmail', label: 'Gmail', href: links.email, icon: <SiGmail color="#EA4335" /> },
  { id: 'linkedin', cls: 't-linkedin', label: 'LinkedIn', href: links.linkedin, icon: <FaLinkedin /> },
  { id: 'leetcode', cls: 't-leetcode', label: 'LeetCode', href: links.leetcode, icon: <SiLeetcode color="#FFA116" /> },
  { app: 'music', cls: 't-music', label: 'Music', icon: <SiApplemusic /> },
  { app: 'wallpaper', cls: 't-wallpaper', label: 'Wallpaper', icon: <MdOutlineWallpaper /> },
]

const LEFT = [
  { app: 'about', label: 'About', icon: <FiUser /> },
  { app: 'doing', label: "What I'm Doing", icon: <FiBriefcase /> },
  { app: 'projects', label: 'Projects', icon: <FiFolder /> },
  { app: 'resume', label: 'Résumé', icon: <FiFileText /> },
]
const RIGHT = [
  { app: 'skills', label: 'Skills', icon: <FiZap /> },
  { app: 'contact', label: 'Contact', icon: <FiMail /> },
]

function DockGroup({ items }) {
  const dockRef = useRef(null)
  const [mouseX, setMouseX] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div
      className="dock"
      ref={dockRef}
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => { setMouseX(null); setHover(null) }}
    >
      {items.map((it) => (
        <DockApp key={it.app} app={it} mouseX={mouseX} dockRef={dockRef} hover={hover} setHover={setHover} />
      ))}
    </div>
  )
}

function MagTile({ children, dist }) {
  // magnification based on distance from cursor
  const scale = Math.max(1, 1.5 - Math.abs(dist) / 90)
  const lift = (scale - 1) * 26
  return (
    <div style={{ transform: `translateY(${-lift}px) scale(${scale})`, transformOrigin: 'bottom center', transition: 'transform 0.08s linear' }}>
      {children}
    </div>
  )
}

export default function Dock() {
  const dockRef = useRef(null)
  const [mouseX, setMouseX] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div className="dock-wrap">
      <DockGroup items={LEFT} />

      <div
        className="dock"
        ref={dockRef}
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => { setMouseX(null); setHover(null) }}
      >
        {CENTER_ITEMS.map((item) => (
          item.app ? (
            <DockApp key={item.app} app={item} mouseX={mouseX} dockRef={dockRef} hover={hover} setHover={setHover} />
          ) : (
            <DockLink key={item.id} s={item} mouseX={mouseX} dockRef={dockRef} hover={hover} setHover={setHover} />
          )
        ))}
      </div>

      <DockGroup items={RIGHT} />
    </div>
  )
}

function DockApp({ app, mouseX, dockRef, hover, setHover }) {
  const { open, isOpen } = useWindows()
  const ref = useRef(null)
  let dist = 999
  if (mouseX != null && ref.current) {
    const r = ref.current.getBoundingClientRect()
    dist = mouseX - (r.left + r.width / 2)
  }

  return (
    <button
      ref={ref}
      type="button"
      className="dock-item"
      aria-label={app.label}
      onClick={() => open(app.app)}
      onMouseEnter={() => setHover(app.app)}
      onMouseMove={() => setHover(app.app)}
      onMouseLeave={() => setHover(null)}
    >
      <MagTile dist={dist}>
        <div className={'dock-tile ' + (app.cls || 't-app')}>{app.icon}</div>
      </MagTile>
      {isOpen(app.app) && <div className="dock-dot" />}
      {hover === app.app && <div className="dock-tooltip">{app.label}</div>}
    </button>
  )
}

function DockLink({ s, mouseX, dockRef, hover, setHover }) {
  const ref = useRef(null)
  let dist = 999
  if (mouseX != null && ref.current) {
    const r = ref.current.getBoundingClientRect()
    dist = mouseX - (r.left + r.width / 2)
  }
  return (
    <a
      ref={ref}
      className="dock-item"
      href={s.href}
      aria-label={s.label}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(s.id)}
      onMouseMove={() => setHover(s.id)}
      onMouseLeave={() => setHover(null)}
    >
      <MagTile dist={dist}>
        <div className={'dock-tile ' + s.cls}>{s.icon}</div>
      </MagTile>
      {hover === s.id && <div className="dock-tooltip">{s.label}</div>}
    </a>
  )
}
