import React, { useState, useEffect, useRef } from 'react'
import MenuBar from './MenuBar'
import Widgets from './Widgets'
import Dock from './Dock'
import WindowsLayer from './Window'
import { WindowProvider } from './WindowContext'
import { wallpapers } from '../data/portfolio'

export default function Desktop() {
  const [wallpaper, setWallpaper] = useState(wallpapers[0])
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const wallRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-wallpaper-v2')
    const nextWallpaper = wallpapers.find((w) => w.id === saved)
    if (nextWallpaper) setWallpaper(nextWallpaper)

    const onWallpaperChange = (event) => {
      const next = wallpapers.find((w) => w.id === event.detail)
      if (next) setWallpaper(next)
    }
    window.addEventListener('wallpaper-change', onWallpaperChange)
    return () => window.removeEventListener('wallpaper-change', onWallpaperChange)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5
      const cy = e.clientY / window.innerHeight - 0.5
      setParallax({ x: cx, y: cy })
      if (wallRef.current) {
        wallRef.current.style.transform = `translate3d(${cx * -22}px, ${cy * -22}px, 0) scale(1.06)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <WindowProvider>
      <div className="desktop">
        <div
          ref={wallRef}
          className="wallpaper"
          style={{ background: wallpaper.background }}
        />
        <div className="wallpaper-tint" />
        <MenuBar />
        <Widgets parallax={{ x: parallax.x * -14, y: parallax.y * -14 }} />
        <WindowsLayer />
        <Dock />
      </div>
    </WindowProvider>
  )
}
