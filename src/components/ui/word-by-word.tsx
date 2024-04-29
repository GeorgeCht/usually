import { cn } from '@/lib/utils'
import {
  MotionValue,
  motion as Motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import React, { ReactNode, useRef } from 'react'

const WordByWord = ({
  className,
  text,
}: {
  text: string
  className?: string
}) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.5', 'start 0.1'],
  })

  const words = text.split(' ')
  return (
    <p
      ref={container}
      className={cn(
        'flex text-6xl leading-none max-w-screen-xl text-black flex-wrap',
        className
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: ReactNode
  progress: MotionValue<number>
  range: number[]
}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className={'relative mr-3 mt-3'}>
      <span className={'absolute opacity-10'}>{children}</span>
      <Motion.span style={{ opacity: opacity }}>{children}</Motion.span>
    </span>
  )
}

export { WordByWord }
