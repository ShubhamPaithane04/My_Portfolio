import React, { useState, useEffect, useRef } from 'react'
import { FaApple, FaWifi, FaSearch, FaBatteryFull } from 'react-icons/fa'
import { BsToggles2 } from 'react-icons/bs'
import { useWindows } from './WindowContext'
import { links } from '../data/portfolio'

const MENUS = {
  Portfolio: ['About This Portfolio', 'sep', 'Skills', 'sep', 'Hide Others'],
  Resume: ['Open Résumé', 'Download PDF'],
  About: ['Open About', 'What I’m Doing'],
  Projects: ['Agentic AI System', 'AI Chess Coach', 'sep', 'View on GitHub'],
  Skills: ['Open Skills', 'Languages & Frameworks'],
  Contact: ['Send Email', 'LinkedIn', 'GitHub'],
  Help: ['How to use this site', 'sep', 'Keyboard: click icons to open windows'],
}

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return now
}

export default function MenuBar() {
  const { open } = useWindows()
  const [openMenu, setOpenMenu] = useState(null)
  const now = useClock()
  const barRef = useRef(null)

  useEffect(() => {
    const h = (e) => { if (barRef.current && !barRef.current.contains(e.target)) setOpenMenu(null) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
  const mon = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const date = now.getDate()
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

  const handleAction = (menu, item) => {
    setOpenMenu(null)
    const go = (id) => open(id)
    if (item.includes('Résumé') || item === 'Open Résumé') return go('resume')
    if (item === 'Download PDF') { window.open(links.resume, '_blank'); return }
    if (item.startsWith('Open About') || item === 'About This Portfolio' || item.includes('What')) return go('about')
    if (item.includes('Skills') || item.includes('Languages')) return go('skills')
    if (item.includes('Agentic') || item.includes('Chess') || item === 'Open Projects') return go('projects')
    if (item.includes('GitHub')) { window.open(links.github, '_blank'); return }
    if (item.includes('LinkedIn')) { window.open(links.linkedin, '_blank'); return }
    if (item.includes('Email') || item.includes('Contact')) return go('contact')
    if (menu === 'Contact') return go('contact')
  }

  const menuNames = Object.keys(MENUS)

  return (
    <div className="menubar" ref={barRef}>
      <div className="menubar-left">
        <div className="menu-item apple" onClick={() => setOpenMenu(openMenu === 'apple' ? null : 'apple')}>
          <FaApple />
          {openMenu === 'apple' && (
            <div className="menu-dropdown" onClick={(e) => e.stopPropagation()}>
              <div className="menu-dropdown-item" onClick={() => { open('about'); setOpenMenu(null) }}>About This Mac</div>
              <div className="menu-dropdown-sep" />
              <div className="menu-dropdown-item" onClick={() => { open('projects'); setOpenMenu(null) }}>Projects…</div>
              <div className="menu-dropdown-item" onClick={() => { open('contact'); setOpenMenu(null) }}>Contact…</div>
            </div>
          )}
        </div>
        {menuNames.map((name, i) => (
          <div
            key={name}
            className={'menu-item' + (i === 0 ? ' brand' : '') + (i > 3 ? ' hide-sm' : '')}
            onClick={() => setOpenMenu(openMenu === name ? null : name)}
            onMouseEnter={() => openMenu && openMenu !== 'apple' && setOpenMenu(name)}
          >
            {name}
            {openMenu === name && (
              <div className="menu-dropdown" onClick={(e) => e.stopPropagation()}>
                {MENUS[name].map((item, idx) =>
                  item === 'sep' ? (
                    <div key={idx} className="menu-dropdown-sep" />
                  ) : (
                    <div key={idx} className="menu-dropdown-item" onClick={() => handleAction(name, item)}>
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="menubar-right">
        <span className="menu-right-item hide-sm">100%</span>
        <span className="menu-right-item"><span className="battery-shell"><span className="battery-fill" style={{ width: '100%' }} /></span></span>
        <span className="menu-right-item hide-sm"><FaWifi size={14} /></span>
        <span className="menu-right-item"><FaSearch size={13} /></span>
        <span className="menu-right-item hide-sm"><BsToggles2 size={14} /></span>
        <span className="menu-clock">{day} {mon} {date}  {time}</span>
      </div>
    </div>
  )
}
