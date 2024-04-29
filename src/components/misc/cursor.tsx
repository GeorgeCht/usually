'use client'

import { RefObject } from 'react'
import { motion as Motion, Variant } from 'framer-motion'

import React from 'react'
import useMouse from '@react-hook/mouse-position'
import { useCursorStore } from '@/stores/cursor'
import { cn } from '@/lib/utils'
import { useScreenSize } from '@/lib/hooks'

const Cursor = ({
  target,
  className,
}: {
  target: RefObject<HTMLDivElement>
  className?: string
}) => {
  const { cursorText, cursorVariant } = useCursorStore()
  const { screenSize } = useScreenSize()

  const mouse = useMouse(target, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition: number | null = -12
  let mouseYPosition: number | null = -12

  mouse.x !== null ? (mouseXPosition = mouse.clientX!) : (mouseXPosition = null)
  mouse.y !== null ? (mouseYPosition = mouse.clientY!) : (mouseYPosition = null)

  const variants = {
    default: {
      opacity: mouseXPosition !== null ? 0.8 : 0,
      height: mouseXPosition !== null ? 12 : 0,
      width: mouseYPosition !== null ? 12 : 0,
      fontSize: '16px',
      backgroundColor: '#000',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.1,
      },
    } as Variant,
    url: {
      opacity: 1,
      backgroundColor: '#000',
      color: '#000',
      height: mouseXPosition !== null ? 16 : 0,
      width: mouseYPosition !== null ? 16 : 0,
      fontSize: '13px',
      x: mouseXPosition || 0 - 16 / 2,
      y: mouseYPosition || 0 - 16 / 2,
    } as Variant,
    action: {
      opacity: 1,
      backgroundColor: '#000',
      color: '#FFF',
      height: 128,
      width: 128,
      fontSize: '13px',
      x: mouseXPosition || 0 - 128 / 2,
      y: mouseYPosition || 0 - 128 / 2,
    } as Variant,
  }

  const spring = {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  }

  return (
    <React.Fragment>
      {screenSize.width > 640 && (
        <Motion.div
          suppressHydrationWarning
          variants={variants}
          animate={cursorVariant}
          transition={spring}
          className={cn(
            'fixed z-[100] flex content-center justify-center h-2.5 w-2.5 bg-black pointer-events-none text-white text-center text-base rounded-full left-0 top-0',
            className
          )}
        >
          <span
            className={
              'flex-[auto] font-aeonik font-semibold uppercase text-white pointer-events-none m-auto'
            }
          >
            {cursorText}
          </span>
        </Motion.div>
      )}
    </React.Fragment>
  )
}

export { Cursor }
