import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wallpapers, profile } from '../data/portfolio'

// ─── helpers ────────────────────────────────────────────────────────────────
function padZ(n) { return String(n).padStart(2, '0') }

function getTimeParts() {
  const now = new Date()
  let h = now.getHours()
  const m = padZ(now.getMinutes())
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return { h, m, ampm, full: `${h}:${m}` }
}

function getDateStr() {
  const now = new Date()
  return now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

// ─── LockScreen ─────────────────────────────────────────────────────────────
export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(getTimeParts())
  const [date, setDate] = useState(getDateStr())
  const [wallpaper, setWallpaper] = useState(() => {
    const saved = localStorage.getItem('portfolio-wallpaper-v2')
    return wallpapers.find((w) => w.id === saved) || wallpapers[0]
  })
  const [unlocking, setUnlocking] = useState(false)
  const [particles, setParticles] = useState([])
  const wallRef = useRef(null)
  const parallaxRef = useRef({ x: 0, y: 0 })

  // Clock tick
  useEffect(() => {
    const t = setInterval(() => {
      setTime(getTimeParts())
      setDate(getDateStr())
    }, 1000)
    return () => clearInterval(t)
  }, [])

  // Listen for wallpaper changes (from settings/wallpaper picker)
  useEffect(() => {
    const handler = (e) => {
      const next = wallpapers.find((w) => w.id === e.detail)
      if (next) setWallpaper(next)
    }
    window.addEventListener('wallpaper-change', handler)
    return () => window.removeEventListener('wallpaper-change', handler)
  }, [])

  // Parallax
  useEffect(() => {
    const onMove = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5
      const cy = e.clientY / window.innerHeight - 0.5
      parallaxRef.current = { x: cx, y: cy }
      if (wallRef.current) {
        wallRef.current.style.transform =
          `translate3d(${cx * -28}px, ${cy * -28}px, 0) scale(1.08)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Generate floating particles once
  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 5,
        dur: 6 + Math.random() * 10,
        delay: Math.random() * 8,
        opacity: 0.12 + Math.random() * 0.25,
      }))
    )
  }, [])

  // Derive accent tones from wallpaper accent colour
  const accent = wallpaper.accent || '#64d2ff'
  // parse hex → r,g,b
  const hexToRgb = (hex) => {
    const h = hex.replace('#', '')
    const bigint = parseInt(h.length === 3
      ? h.split('').map(c => c + c).join('')
      : h, 16)
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
  }
  const [ar, ag, ab] = hexToRgb(accent)

  const accentRgb   = `${ar}, ${ag}, ${ab}`
  const accentGlow  = `rgba(${ar}, ${ag}, ${ab}, 0.35)`
  const accentFaint = `rgba(${ar}, ${ag}, ${ab}, 0.12)`
  const accentMid   = `rgba(${ar}, ${ag}, ${ab}, 0.22)`
  const glassStroke = `rgba(${ar}, ${ag}, ${ab}, 0.18)`

  const handleUnlock = () => {
    if (unlocking) return
    setUnlocking(true)
    setTimeout(() => onUnlock(), 820)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') handleUnlock()
  }

  return (
    <AnimatePresence>
      {!unlocking ? (
        <motion.div
          className="ls-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(18px)' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ outline: 'none' }}
        >
          {/* ── Wallpaper ── */}
          <div
            ref={wallRef}
            className="ls-wall"
            style={{ background: wallpaper.background }}
          />

          {/* ── Colour overlay tinted to accent ── */}
          <div
            className="ls-tint"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% 0%, ${accentFaint}, transparent 68%),
                linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.04) 40%, rgba(0,0,0,0.32) 100%)
              `
            }}
          />

          {/* ── Ambient glow behind clock ── */}
          <div
            className="ls-ambient"
            style={{
              background: `radial-gradient(ellipse 55% 38% at 50% 42%, ${accentMid}, transparent 70%)`
            }}
          />

          {/* ── Floating particles ── */}
          <div className="ls-particles" aria-hidden="true">
            {particles.map((p) => (
              <div
                key={p.id}
                className="ls-particle"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  opacity: p.opacity,
                  background: `rgba(${accentRgb}, 0.9)`,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `-${p.delay}s`,
                  boxShadow: `0 0 ${p.size * 3}px rgba(${accentRgb}, 0.6)`,
                }}
              />
            ))}
          </div>

          {/* ── Date ── */}
          <motion.div
            className="ls-date"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          >
            {date}
          </motion.div>

          {/* ── Clock ── */}
          <motion.div
            className="ls-clock"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ls-clock-h">{time.h}</span>
            <span className="ls-clock-colon">:</span>
            <span className="ls-clock-m">{time.m}</span>
            <span className="ls-clock-ampm">{time.ampm}</span>
          </motion.div>

          {/* ── Glass name card ── */}
          <motion.div
            className="ls-name-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              '--ls-accent-rgb': accentRgb,
              '--ls-glow': accentGlow,
              '--ls-faint': accentFaint,
              '--ls-stroke': glassStroke,
            }}
          >
            <div className="ls-name-inner">
              <div className="ls-avatar-wrap">
                <div
                  className="ls-avatar-ring"
                  style={{ boxShadow: `0 0 0 2px ${accentGlow}, 0 0 22px ${accentGlow}` }}
                >
                  <img
                    src="/profile.jpg"
                    alt={profile.initials}
                    className="ls-avatar-img"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="ls-avatar-fallback">{profile.initials}</span>
                </div>
              </div>

              <div className="ls-name-text">
                <h1 className="ls-name">{profile.name}'s Portfolio</h1>
                <p className="ls-role">{profile.role}</p>
              </div>
            </div>

            {/* Unlock button */}
            <button
              className="ls-unlock-btn"
              onClick={handleUnlock}
              aria-label="Enter portfolio"
              style={{
                '--btn-accent': `rgba(${accentRgb}, 1)`,
                '--btn-glow': `rgba(${accentRgb}, 0.45)`,
                '--btn-faint': `rgba(${accentRgb}, 0.14)`,
              }}
            >
              <span className="ls-unlock-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <span>Enter Portfolio</span>
              <span className="ls-unlock-arrow">→</span>
            </button>

            {/* Hint */}
            <p className="ls-hint">Press Enter or click to unlock</p>
          </motion.div>

          {/* ── Wallpaper name badge ── */}
          <motion.div
            className="ls-wp-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ '--ls-stroke': glassStroke }}
          >
            <span
              className="ls-wp-dot"
              style={{ background: accent, boxShadow: `0 0 8px ${accentGlow}` }}
            />
            {wallpaper.name}
          </motion.div>
        </motion.div>
      ) : (
        /* ── Unlock animation overlay ── */
        <motion.div
          key="unlock-flash"
          className="ls-unlock-flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.75, times: [0, 0.35, 1] }}
          style={{ background: `rgba(${accentRgb}, 0.14)` }}
        />
      )}
    </AnimatePresence>
  )
}
