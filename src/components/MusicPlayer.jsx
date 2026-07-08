import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPlay, FaPause, FaStepForward, FaStepBackward, 
  FaVolumeUp, FaVolumeMute, FaMusic 
} from 'react-icons/fa'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Your music playlist - Add your songs here!
  const playlist = [
    {
      id: 1,
      title: 'Coding Flow',
      artist: 'Dev Beats',
      src: '/music/song1.mp3',
      cover: '🎵'
    },
    {
      id: 2,
      title: 'Debug Mode',
      artist: 'Tech Sounds',
      src: '/music/song2.mp3',
      cover: '🎶'
    },
    {
      id: 3,
      title: 'Deploy Day',
      artist: 'Code Rhythm',
      src: '/music/song3.mp3',
      cover: '🎸'
    }
  ]

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)

  const currentTrack = playlist[currentTrackIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => handleNext()

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
    setTimeout(() => audioRef.current?.play(), 100)
  }

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
    setTimeout(() => audioRef.current?.play(), 100)
  }

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)
    setIsMuted(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <section id="music" className="music-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Music Vibes</h2>
          <p className="section-subtitle">
            Relax and enjoy some tunes while exploring my work
          </p>
        </motion.div>

        <motion.div
          className="music-player-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Album Art */}
          <motion.div 
            className="album-art"
            animate={{ 
              rotate: isPlaying ? 360 : 0,
              scale: isPlaying ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <div className="vinyl-disc">
              <span className="cover-emoji">{currentTrack.cover}</span>
            </div>
          </motion.div>

          {/* Track Info */}
          <div className="track-info">
            <motion.h3
              key={currentTrack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentTrack.title}
            </motion.h3>
            <motion.p
              key={`${currentTrack.id}-artist`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {currentTrack.artist}
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <span className="time-display">{formatTime(currentTime)}</span>
            <div className="progress-bar-wrapper">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="progress-bar"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
                }}
              />
            </div>
            <span className="time-display">{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="player-controls">
            <motion.button
              className="control-btn"
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaStepBackward />
            </motion.button>

            <motion.button
              className="control-btn play-btn"
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </motion.button>

            <motion.button
              className="control-btn"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaStepForward />
            </motion.button>
          </div>

          {/* Volume Control */}
          <div className="volume-control">
            <motion.button
              className="volume-btn"
              onClick={toggleMute}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </motion.button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume * 100}
              onChange={handleVolumeChange}
              className="volume-slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${isMuted ? 0 : volume * 100}%, #e5e7eb ${isMuted ? 0 : volume * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>

          {/* Playlist */}
          <div className="playlist">
            <h4><FaMusic /> Playlist</h4>
            <div className="playlist-items">
              {playlist.map((track, index) => (
                <motion.div
                  key={track.id}
                  className={`playlist-item ${index === currentTrackIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentTrackIndex(index)
                    setIsPlaying(true)
                    setTimeout(() => audioRef.current?.play(), 100)
                  }}
                  whileHover={{ x: 5, backgroundColor: '#f3f4f6' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="track-emoji">{track.cover}</span>
                  <div className="track-details">
                    <span className="track-title">{track.title}</span>
                    <span className="track-artist">{track.artist}</span>
                  </div>
                  {index === currentTrackIndex && isPlaying && (
                    <motion.div
                      className="playing-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <audio ref={audioRef} src={currentTrack.src} />
        </motion.div>
      </div>
    </section>
  )
}

export default MusicPlayer
