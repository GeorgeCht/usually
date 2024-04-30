'use client'

import { LogoSVG } from './logo-svg'
import { animateVariants, cn, easeCustom } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion, Variant } from 'framer-motion'
import { PerspectiveButton, PerspectiveText } from './perspective-text'
import { useScreenSize, useScroll } from '@/lib/hooks'
import { useCursorStore } from '@/stores/cursor'
import { Link } from '../misc/link'
import { Link as TransitionLink } from 'next-view-transitions'
import { Magnetic } from '../misc/magnetic'

// TODO: https://cdn.cuberto.com/cb/hello/overview/3.webm
// TODO: https://cdn.cuberto.com/cb/hello/achievement/1.webm
// TODO: https://cdn.cuberto.com/cb/home/summary/2.mp4?3
// TODO: https://blog.olivierlarose.com/tutorials/awwwards-side-menu

const NavHeader = ({ className }: { className?: string }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [logoIsHovered, setLogoIsHovered] = useState(false)
  const { hoverUrl, hoverReset } = useCursorStore()
  const { scrollDirection } = useScroll()
  const { screenSize } = useScreenSize()

  const variants = {
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        type: 'spring',
        mass: 0.7,
        duration: 1.2,
      },
    } as Variant,
    idle: {
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 0.7,
        duration: 1.2,
      },
    } as Variant,
  }

  return (
    <nav
      className={cn(
        'fixed w-full flex items-center justify-between sm:px-12 px-6 sm:py-10 py-6 z-50 transition-transform !duration-700',
        scrollDirection === 'up' && !menuIsOpen
          ? '-translate-y-28'
          : 'translate-y-0',
        className
      )}
    >
      <div className={'group flex basis-1/3 justify-start'}>
        <TransitionLink href={'/'}>
          <Motion.div
            suppressHydrationWarning
            variants={variants}
            animate={logoIsHovered ? 'hover' : 'idle'}
            onMouseEnter={() => setLogoIsHovered(true)}
            onMouseLeave={() => setLogoIsHovered(false)}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
          >
            <Magnetic>
              <LogoSVG variant={'mark'} className={'w-8 h-8 sm:w-10 sm:h-10'} />
            </Magnetic>
          </Motion.div>
          <span className={'sr-only'}>Logo</span>
        </TransitionLink>
      </div>
      <div
        className={
          'group min-[430px]:flex hidden basis-1/3 justify-center m-auto'
        }
      >
        {/* <TransitionLink href={'/'}>
          <LogoSVG
            variant={'full'}
            className={'max-w-36 sm:max-w-40 h-auto group-hover:animate-tada'}
          />
          <span className={'sr-only'}>Logo</span>
        </TransitionLink> */}
      </div>
      <div className={'relative flex basis-1/3 justify-end'}>
        <div className={'relative inline-block -mt-6 sm:-mt-5'}>
          <PerspectiveButton
            isActive={menuIsOpen}
            onClick={() => setMenuIsOpen((state) => !state)}
          />
        </div>
      </div>
      <AnimatePresence mode={'wait'}>
        <Motion.div
          key={'main-nav'}
          {...animateVariants({
            initial: {
              width: '96px',
              height: '40px',
            },
            enter: {
              width:
                screenSize.width > 640 ? '548px' : screenSize.width - 16 * 2,
              height: screenSize.width > 640 ? '694px' : '694px',
              top: '16px',
              right: '16px',
              transition: { duration: 0.625, delay: 0, ease: easeCustom },
            },
            exit: {
              width: '96px',
              height: '40px',
              top: screenSize.width > 640 ? '41px' : '17px',
              right: screenSize.width > 640 ? '48px' : '25px',
              transition: {
                duration: 0.575,
                delay: 0.015,
                ease: easeCustom,
              },
            },
          })}
          animate={menuIsOpen ? 'enter' : 'exit'}
          onMouseLeave={() => setMenuIsOpen(false)}
          className={
            'absolute flex flex-col justify-between px-8 rounded-[32px] overflow-hidden bg-black text-[#FFF] top-4 right-4 sm:top-7 sm:right-7 z-0'
          }
        >
          <ul className={'pt-10'}>
            {[
              {
                title: 'Home',
                url: '/',
              },
              {
                title: 'Stories',
                url: '/stories',
              },
              {
                title: 'Approach',
                url: '/approach',
              },
              {
                title: 'Contact',
                url: '/contact',
              },
            ].map((item, index) => (
              <li
                key={index}
                className={'font-aeonik font-normal text-6xl leading-tight'}
              >
                <Magnetic>
                  <Link
                    href={item.url}
                    onClick={() => setMenuIsOpen((state) => !state)}
                    scroll={false}
                    className={'linkflip'}
                    text={item.title}
                  />
                </Magnetic>
              </li>
            ))}
          </ul>
          <div className={'flex flex-row justify-between w-full pb-12'}>
            <ul className={'flex flex-col gap-1 w-1/2'}>
              {[
                {
                  title: 'Facebook',
                  url: 'https://facebook.com',
                },
                {
                  title: 'Instagram',
                  url: 'https://twitter.com',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={'font-aeonik font-medium text-lg leading-tight'}
                >
                  <Magnetic>
                    <Link
                      text={item.title}
                      href={item.url}
                      onClick={() => setMenuIsOpen((state) => !state)}
                    />
                  </Magnetic>
                </li>
              ))}
            </ul>
            <ul className={'flex flex-col gap-1 w-1/2'}>
              {[
                {
                  title: 'Linked In',
                  url: 'https://facebook.com',
                },
                {
                  title: 'Twitter',
                  url: 'https://twitter.com',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={'font-aeonik font-medium text-lg leading-tight'}
                  onMouseEnter={hoverUrl}
                  onMouseLeave={hoverReset}
                >
                  <Magnetic>
                    <Link
                      text={item.title}
                      href={item.url}
                      onClick={() => setMenuIsOpen((state) => !state)}
                    />
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </Motion.div>
      </AnimatePresence>
    </nav>
  )
}

export { NavHeader }
