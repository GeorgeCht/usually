'use client'

import { useCursorStore } from '@/stores/cursor'
import { Link } from 'next-view-transitions'
import React from 'react'

export default function Page() {
  const { hoverAction, hoverReset } = useCursorStore()
  return (
    <React.Fragment>
      <article className={'page-container w-full sm:px-12 px-6 z-0'}>
        <div>
          <h2 className={'h-96'}>Stories</h2>
          <Link href={'/'}>backhome</Link>
          <section className={'body z-0 block relative w-full h-screen'}>
            <div className={'block top-0 w-full h-[5vh] z-0'}>
              <div
                className={
                  'block relative overflow-hidden boxblock w-[calc(100vw-(48px*2))] h-[calc((100vw-(48px*2))*(9/16))] bg-black rounded-[40px] z-0'
                }
                onMouseEnter={hoverAction}
                onMouseLeave={hoverReset}
              >
                <Link href={'/story'}>
                  <video
                    className={
                      'object-cover absolute top-0 left-0 w-full h-full will-change-transform z-0 vt-portfolio-img'
                    }
                    autoPlay
                    muted
                    loop
                    controls={false}
                    playsInline
                    preload={'auto'}
                    draggable={false}
                  >
                    <source
                      src={
                        'https://res.cloudinary.com/dqoxwlhrv/video/upload/f_auto:video,w_1920,q_auto:best/xx36shsmwnxo8doholak'
                      }
                      type={'video/mp4'}
                      className={'absolute pointer-events-none z-0'}
                    />
                    Your browser does not support the video tag.
                  </video>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </React.Fragment>
  )
}
