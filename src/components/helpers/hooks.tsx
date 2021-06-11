import { useRef, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

export const useKeyPress = (keyCode: string) => {
  const [isDown, setDown] = useState(false)
  const downHandler = (e: KeyboardEvent) => {
    if (e.code === keyCode) {
      setDown(true)
    }
  }
  const upHandler = (e: KeyboardEvent) => {
    if (e.code === keyCode) {
      setDown(false)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', downHandler)
    document.addEventListener('keyup', upHandler)
    return () => {
      document.removeEventListener('keydown', downHandler)
      document.removeEventListener('keyup', upHandler)
    }
  })
  return isDown
}

export const useMeasure = () => {
  const ref = useRef<any>()
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })
  const [ro] = useState(
    () =>
      new ResizeObserver(([entry]) =>
        set(entry.contentRect),
      ),
  )
  useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ro])
  return [{ ref }, bounds]
}

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
