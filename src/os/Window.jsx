import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaMinus, FaExpand, FaCompress } from 'react-icons/fa'
import { useWindows } from './WindowContext'
import { APPS } from './Apps'

function clampInit(app, spawn) {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const preferredW = app.noPad ? Math.max(app.w, 900) : app.w
  const preferredH = app.noPad ? Math.max(app.h, 800) : app.h
  const w = Math.min(preferredW, vw - 32)
  const h = Math.min(preferredH, vh - 110)
  const off = (spawn || 0) * 26
  const x = Math.max(16, Math.min(vw - w - 16, Math.round((vw - w) / 2) + off))
  const y = Math.max(42, Math.min(vh - h - 82, Math.round((vh - h) / 2) + off))
  return { w, h, x, y }
}

function Win({ win }) {
  const { activeId, close, minimize, maximize, focus } = useWindows()
  const app = APPS[win.app]
  const active = activeId === win.id
  const initRef = useRef(clampInit(app, win.spawn))
  const [pos, setPos] = useState({ x: initRef.current.x, y: initRef.current.y })
  const drag = useRef(null)

  const onDragStart = (e) => {
    if (win.maximized) return // Disable drag when maximized
    focus(win.id)
    drag.current = { sx: e.clientX, sy: e.clientY, px: pos.x, py: pos.y }
    const move = (ev) => {
      const d = drag.current
      if (!d) return
      const nx = d.px + ev.clientX - d.sx
      const ny = Math.max(30, d.py + ev.clientY - d.sy)
      setPos({ x: nx, y: ny })
    }
    const up = () => {
      drag.current = null
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerup', up)
    }
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerup', up)
  }

  // Calculate maximized dimensions
  const maxDimensions = win.maximized ? {
    width: window.innerWidth - 32,
    height: window.innerHeight - 110,
    left: 16,
    top: 42
  } : {
    width: initRef.current.w,
    height: initRef.current.h,
    left: pos.x,
    top: pos.y
  }

  return (
    <motion.div
      className={'window' + (active ? '' : ' inactive')}
      style={{ ...maxDimensions, zIndex: win.z }}
      initial={{ opacity: 0, scale: 0.85, y: 26 }}
      animate={
        win.minimized
          ? { opacity: 0, scale: 0.25, y: window.innerHeight * 0.5, transformOrigin: 'bottom center' }
          : win.maximized
          ? { ...maxDimensions, opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.16 } }}
      transition={{ type: 'spring', stiffness: 340, damping: 30 }}
      onMouseDown={() => focus(win.id)}
    >
      <div className="titlebar" onPointerDown={onDragStart}>
        <div className="traffic" onPointerDown={(e) => e.stopPropagation()}>
          <button className="light red" onClick={() => close(win.id)} aria-label="Close">
            <FaTimes />
          </button>
          <button className="light yellow" onClick={() => minimize(win.id)} aria-label="Minimize">
            <FaMinus />
          </button>
          <button className="light green" onClick={() => maximize(win.id)} aria-label="Maximize">
            {win.maximized ? <FaCompress size={8} /> : <FaExpand size={8} />}
          </button>
        </div>
        <div className="win-title">{app.title}</div>
      </div>
      <div className="window-body" style={app.noPad ? { padding: 0 } : undefined}>
        {React.createElement(app.render)}
      </div>
    </motion.div>
  )
}

export default function WindowsLayer() {
  const { windows } = useWindows()
  return (
    <div className="windows-layer">
      <AnimatePresence>
        {windows.map((w) => (!w.minimized || true) && <Win key={w.id} win={w} />)}
      </AnimatePresence>
    </div>
  )
}
