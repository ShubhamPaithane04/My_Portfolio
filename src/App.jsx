import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaApple } from 'react-icons/fa'
import Desktop from './os/Desktop'
import LockScreen from './os/LockScreen'
import './os/os.css'
import './os/LockScreen.css'

// ─── App ─────────────────────────────────────────────────────────────────────
// Flow:  booting (Apple logo + bar)  →  locked (LockScreen)  →  desktop
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [booting, setBooting] = useState(true)
  const [progress, setProgress] = useState(0)
  const [locked, setLocked]   = useState(true)

  // Boot sequence
  useEffect(() => {
    const t    = setInterval(() => setProgress((p) => Math.min(100, p + 4 + Math.random() * 8)), 90)
    const done = setTimeout(() => setBooting(false), 1900)
    return () => { clearInterval(t); clearTimeout(done) }
  }, [])

  return (
    <>
      {/* Desktop is always mounted underneath */}
      <Desktop />

      {/* Lock screen sits on top of the desktop until the user unlocks */}
      <AnimatePresence>
        {!booting && locked && (
          <LockScreen key="lockscreen" onUnlock={() => setLocked(false)} />
        )}
      </AnimatePresence>

      {/* Boot splash (Apple logo + progress bar) */}
      <AnimatePresence>
        {booting && (
          <motion.div
            className="boot"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="boot-logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaApple />
            </motion.div>
            <div className="boot-bar">
              <div className="boot-fill" style={{ width: `${progress}%` }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
