'use client'

import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const isClient = typeof window === 'object'

  const [screenSize, setScreenSize] = useState(
    isClient
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : {
          width: 0,
          height: 0,
        }
  )

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient])

  return { screenSize }
}

export const useSsr = () => {
  const isDOM =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.documentElement

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  }
}

export const useScroll = () => {
  const { isBrowser } = useSsr()
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
  )
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top)
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>()

  const listener = (e: Event) => {
    isBrowser && setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(
      lastScrollTop > -bodyOffset.top || scrollY < 600 ? 'down' : 'up'
    )
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
