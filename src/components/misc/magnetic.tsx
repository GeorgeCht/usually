import { MouseEventHandler, ReactNode, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'

const Magnetic = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current?.getBoundingClientRect()!
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.0875, y: middleY * 0.0875 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position
  return (
    <Motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.25 }}
    >
      {children}
    </Motion.div>
  )
}

export { Magnetic }
