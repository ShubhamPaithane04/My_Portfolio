import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPlay, FaPause, FaStepForward, FaStepBackward, 
  FaVolumeUp, FaVolumeMute 
} from 'react-icons/fa'
import './MusicApp.css'

export default function MusicApp() {
  // Your music playlist - Add your songs here!
  const playlist = [
    {
      id: 1,
      title: 'Sunflower',
      artist: 'Post Malone & Swae Lee',
      album: 'Spider-Man: Into the Spider-Verse',
      src: '/music/song-1.mp3',
      cover: '🌻'
    },
    {
      id: 2,
      title: 'Sweater Weather',
      artist: 'The Neighbourhood',
      album: 'I Love You',
      src: '/music/song-2.mp3',
      cover: '🧥'
    },
    {
      id: 3,
      title: 'Fired Up',
      artist: 'Hype Music',
      album: 'Energy Boost',
      src: '/music/song-3.mp3',
      cover: '🔥'
    },
    {
      id: 4,
      title: 'Never Enough',
      artist: 'Loren Allred',
      album: 'The Greatest Showman',
      src: '/music/song-4.mp3',
      cover: '✨'
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
    <div className="music-app">
      <div className="music-sidebar">
        <h3 className="sidebar-title">Library</h3>
        <div className="sidebar-items">
          <div className="sidebar-item active">📚 All Songs</div>
          <div className="sidebar-item">🎵 Recently Played</div>
          <div className="sidebar-item">❤️ Favorites</div>
        </div>
      </div>

      <div className="music-main">
        <div className="now-playing">
          <motion.div 
            className="album-cover"
            animate={{ 
              rotate: isPlaying ? 360 : 0
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            <div className="vinyl">
              <span className="cover-icon">{currentTrack.cover}</span>
            </div>
          </motion.div>

          <div className="track-details">
            <h2>{currentTrack.title}</h2>
            <p className="artist">{currentTrack.artist}</p>
            <p className="album">{currentTrack.album}</p>
          </div>

          <div className="player-controls-section">
            <div className="progress-section">
              <span className="time">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="progress-slider"
                style={{
                  background: `linear-gradient(to right, #007AFF 0%, #007AFF ${progress}%, #444 ${progress}%, #444 100%)`
                }}
              />
              <span className="time">{formatTime(duration)}</span>
            </div>

            <div className="player-buttons">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStepBackward />
              </motion.button>

              <motion.button
                className="play-button"
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStepForward />
              </motion.button>
            </div>

            <div className="volume-section">
              <motion.button
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
                  background: `linear-gradient(to right, #007AFF 0%, #007AFF ${isMuted ? 0 : volume * 100}%, #444 ${isMuted ? 0 : volume * 100}%, #444 100%)`
                }}
              />
            </div>
          </div>
        </div>

        <div className="playlist-section">
          <h3>Playlist</h3>
          <div className="playlist-table">
            {playlist.map((track, index) => (
              <motion.div
                key={track.id}
                className={`playlist-row ${index === currentTrackIndex ? 'playing' : ''}`}
                onClick={() => {
                  setCurrentTrackIndex(index)
                  setIsPlaying(true)
                  setTimeout(() => audioRef.current?.play(), 100)
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="track-number">
                  {index === currentTrackIndex && isPlaying ? (
                    <div className="playing-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="track-emoji">{track.cover}</span>
                <div className="track-info-inline">
                  <span className="track-name">{track.title}</span>
                  <span className="track-artist-small">{track.artist}</span>
                </div>
                <span className="track-album-small">{track.album}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={currentTrack.src} />
    </div>
  )
}
