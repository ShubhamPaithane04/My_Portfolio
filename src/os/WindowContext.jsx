import React, { createContext, useContext, useState, useCallback, useRef } from 'react'

const WindowContext = createContext(null)
export const useWindows = () => useContext(WindowContext)

let zCounter = 10

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([]) // {id, app, minimized, maximized}
  const [activeId, setActiveId] = useState(null)
  const spawnOffset = useRef(0)

  const focus = useCallback((id) => {
    zCounter += 1
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z: zCounter, minimized: false } : w)))
    setActiveId(id)
  }, [])

  const open = useCallback((appId) => {
    setWindows((ws) => {
      const existing = ws.find((w) => w.app === appId)
      zCounter += 1
      if (existing) {
        setActiveId(existing.id)
        return ws.map((w) => (w.app === appId ? { ...w, z: zCounter, minimized: false } : w))
      }
      spawnOffset.current = (spawnOffset.current + 1) % 6
      const id = `${appId}-${Date.now()}`
      setActiveId(id)
      return [...ws, { id, app: appId, z: zCounter, minimized: false, maximized: false, spawn: spawnOffset.current }]
    })
  }, [])

  const close = useCallback((id) => {
    setWindows((ws) => ws.filter((w) => w.id !== id))
  }, [])

  const minimize = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)))
    setActiveId(null)
  }, [])

  const maximize = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)))
  }, [])

  const isOpen = useCallback((appId) => windows.some((w) => w.app === appId && !w.minimized), [windows])

  const value = { windows, activeId, open, close, minimize, maximize, focus, isOpen }
  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
}
