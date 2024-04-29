import { CustomValueType, Variants } from 'framer-motion'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const lerp = (a: number, b: number, t: number) => a + t * (b - a)

export const easeCustom = [1, 0.2, 0.1, 1]

export const transitionVariants = {
  text: {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.525, delay: 0.375, ease: easeCustom },
      transitionEnd: { top: '47.5%' },
    },
    exit: {
      opacity: 1,
      top: '40%',
      transition: { duration: 0.5, delay: 0.4, ease: [0.333, 1, 0.666, 1] },
    },
  },
  curve: (
    initialPath?:
      | string
      | CustomValueType
      | Array<string | CustomValueType | undefined>
      | [null, ...Array<string | CustomValueType | undefined>],
    targetPath?:
      | string
      | CustomValueType
      | Array<string | CustomValueType | undefined>
      | [null, ...Array<string | CustomValueType | undefined>]
  ): Variants => {
    return {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: { duration: 0.525, delay: 0.375, ease: easeCustom },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.525, ease: easeCustom },
      },
    }
  },
  translate: {
    initial: {
      top: '-300px',
    },
    enter: {
      top: '-100vh',
      transition: { duration: 0.525, delay: 0.375, ease: easeCustom },
      transitionEnd: {
        top: '100vh',
      },
    },
    exit: {
      top: '-300px',
      transition: { duration: 0.525, ease: easeCustom },
    },
  },
}

export const animateVariants = (variants: Variants) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  }
}
