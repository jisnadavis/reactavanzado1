import { useEffect, useState } from 'react'

export const Usewindow = () => {
  const [windowsize, setwindowsize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight
  }))
  useEffect(() => {
    const handleresize = () => {
      setwindowsize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleresize)
    return () => {
      window.removeEventListener('resize', handleresize)
    }
  }, [])
  return windowsize
}
