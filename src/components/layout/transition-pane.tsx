'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { animateVariants, transitionVariants } from '@/lib/utils'
import { useRouter } from 'next/router'

export type Dimensions = {
  width: number | null
  height: number | null
}

const Curve = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  })

  useEffect(() => {
    // Scroll restoration fix @see: https://github.com/vercel/next.js/issues/20951#issuecomment-1003746732
    router.beforePopState((state) => {
      state.options.scroll = false
      return true
    })

    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={'z-[99999]'}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={
          'transition-pane fixed h-[calc(100vh_+_600px)] w-screen pointer-events-none inset-0 bg-[black] transition-opacity duration-[0s] ease-linear delay-[0.1s] z-[999]'
        }
      />
      <Motion.p
        key={'transition-p'}
        className={
          'absolute text-[white] font-aeonik font-bold text-6xl -translate-x-2/4 text-center left-2/4 top-[40%] z-[999]'
        }
        style={{ fontFeatureSettings: '"ss01" 1' }}
        {...animateVariants(transitionVariants.text)}
      >
        usually
      </Motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  )
}

const SVG = ({ height, width }: Dimensions) => {
  const initialPath = `
        M0 300 
        Q${width! / 2} 0 ${width} 300
        L${width} ${height! + 300}
        Q${width! / 2} ${height! + 600} 0 ${height! + 300}
        L0 0
    `
  const targetPath = `
        M0 300
        Q${width! / 2} 0 ${width} 300
        L${width} ${height}
        Q${width! / 2} ${height} 0 ${height}
        L0 0
    `
  return (
    <Motion.svg
      key={'transition-svg'}
      className={
        'fixed h-[calc(100vh_+_600px)] w-screen pointer-events-none inset-0 z-[998]'
      }
      {...animateVariants(transitionVariants.translate)}
    >
      <Motion.path
        key={'transition-path'}
        {...animateVariants(transitionVariants.curve(initialPath, targetPath))}
      />
    </Motion.svg>
  )
}

export { Curve }
