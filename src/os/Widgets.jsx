import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { FaBackward, FaForward, FaPlay, FaPause } from 'react-icons/fa'
import { profile, services, musicTracks } from '../data/portfolio'
import { useWindows } from './WindowContext'

const iconFor = { 
  code: <FaCode />, 
  dev: <FaLaptopCode />, 
  graduation: <FaGraduationCap /> 
}

// Small hover-tilt wrapper for that subtle 3D feel
function Tilt({ children, className, strength = 6 }) {
  const ref = useRef(null)
  const [t, setT] = useState({ rx: 0, ry: 0 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setT({ rx: -py * strength, ry: px * strength })
  }
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: 'transform 0.18s ease-out',
      }}
    >
      {children}
    </div>
  )
}

function ProfileCard() {
  const [err, setErr] = useState(false)
  return (
    <Tilt className="widget">
      <div className="card profile-card">
        {err ? (
          <div className="profile-fallback">
            <span className="profile-tagline">From Vision to Reality</span>
          </div>
        ) : (
          <img src={profile.photo} alt={profile.name} onError={() => setErr(true)} draggable={false} />
        )}
      </div>
    </Tilt>
  )
}

function DoingCard() {
  const { open } = useWindows()
  
  return (
    <Tilt className="widget doing-card-wrap" strength={4}>
      <div 
        className="card doing-card clickable-card" 
        onClick={() => open('doing')}
        style={{ cursor: 'pointer' }}
      >
        <h3>What I'm doing</h3>
        {services.map((s) => (
          <div className="doing-row" key={s.title}>
            <div className="doing-ic">{iconFor[s.icon]}</div>
            <div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Tilt>
  )
}

function AboutCard() {
  return (
    <div className="widget" style={{ gridColumn: '1 / -1' }}>
      <div className="card about-card">
        <h3>About me</h3>
        <p>{profile.summary}</p>
        <p>{profile.summary2}</p>
      </div>
    </div>
  )
}

function MusicCard() {
  const [playing, setPlaying] = useState(false)
  const [coverErr, setCoverErr] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const audioRef = useRef(null)
  const nowPlaying = musicTracks[trackIndex]

  useEffect(() => {
    setCoverErr(false)
    const a = audioRef.current
    if (!a) return
    a.load()
    if (playing) a.play().catch(() => setPlaying(false))
  }, [trackIndex])

  const toggle = () => {
    const a = audioRef.current
    if (!a || !nowPlaying?.src) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  const changeTrack = (direction) => {
    setTrackIndex((current) => (current + direction + musicTracks.length) % musicTracks.length)
  }

  return (
    <div className="widget" style={{ gridColumn: '1 / -1' }}>
      <div className="card music-card">
        <div className={'disc' + (playing ? ' spinning' : '')}>
          {!coverErr ? (
            <img src={nowPlaying.cover} alt="" onError={() => setCoverErr(true)} draggable={false} />
          ) : (
            <div className="disc-label">{nowPlaying.artist.split(' ').map((w) => w[0]).join('')}</div>
          )}
          <div className="disc-hole" />
        </div>
        <div className="music-mid">
          <div className="mt">{nowPlaying.title}</div>
          <div className="ma">{nowPlaying.artist}</div>
          <div className="music-controls">
            <button aria-label="Previous" onClick={() => changeTrack(-1)}><FaBackward /></button>
            <button className="play" aria-label="Play/Pause" onClick={toggle}>
              {playing ? <FaPause size={13} /> : <FaPlay size={13} style={{ marginLeft: 2 }} />}
            </button>
            <button aria-label="Next" onClick={() => changeTrack(1)}><FaForward /></button>
          </div>
        </div>
        <audio ref={audioRef} src={nowPlaying.src} onEnded={() => changeTrack(1)} preload="none" />
      </div>
    </div>
  )
}

export default function Widgets({ parallax }) {
  return (
    <div className="widgets-layer">
      <motion.div
        className="widgets-col"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <ProfileCard />
        <DoingCard />
        <AboutCard />
        <MusicCard />
      </motion.div>
    </div>
  )
}
