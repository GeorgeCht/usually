'use client'

import React, { PropsWithChildren, useRef } from 'react'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { NavHeader } from '@/components/ui/nav-header'
import { Lenis } from '@/lib/lenis'
import AnimatedCursor from 'react-animated-cursor'

const MainLayout = ({
  children,
  font,
}: PropsWithChildren & {
  font: NextFontWithVariable
}) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <html lang={'en'} className={font.className}>
      <Lenis root>
        <body className={'bg-white'} suppressHydrationWarning>
          <main ref={ref}>
            <NavHeader />
            {children}
          </main>
          <AnimatedCursor
            showSystemCursor
            color={'0, 0, 0'}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              '.button-perspective',
            ]}
          />
        </body>
      </Lenis>
    </html>
  )
}

export { MainLayout }
