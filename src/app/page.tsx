'use client'

import { Curve } from '@/components/layout/transition-pane'
import Head from 'next/head'
import { Image } from '@/components/misc/image'
import { Inter } from 'next/font/google'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { AnimatePresence, motion as Motion, Variant } from 'framer-motion'

import React, { useEffect, useLayoutEffect } from 'react'
import { Cursor } from '@/components/misc/cursor'
import { LogoSVG } from '@/components/ui/logo-svg'
import { useScreenSize } from '@/lib/hooks'
import { UpRightArrow } from '@/components/icons/up-right-arrow'
import { WordByWord } from '@/components/ui/word-by-word'
import { useCursorStore } from '@/stores/cursor'
import { Link } from 'next-view-transitions'
import { Link as LinkFlip } from '@/components/misc/link'
import { UnderlineAction } from '@/components/ui/underline-action'
import { easeCustom, animateVariants } from '@/lib/utils'
import { Magnetic } from '@/components/misc/magnetic'
import { Marquee } from '@/components/ui/marquee'
import { TimeInAthens } from '@/components/ui/local-time'
import { Footer } from '@/components/layout/footer'
import { Page } from '@/components/layout/page-layout'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [storiesAreOpen, setStoriesAreOpen] = useState(false)
  const [storiesIndex, setStoriesIndex] = useState<0 | 1 | 2>(0)
  const [logoDimenstions, setLogoDimenstions] = useState<{
    width: number
    height: number
  } | null>(null)
  const [heroContent, setHeroContent] = useState<{
    width: number
    height: number
  } | null>(null)
  const section = useRef<HTMLDivElement>(null)
  const footer = useRef<HTMLElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)

  const logoSvgRef = useRef<SVGSVGElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  const { screenSize } = useScreenSize()
  const { contextSafe } = useGSAP({ scope: container })
  const { hoverAction, hoverReset } = useCursorStore()

  const storiesData = [
    {
      title: 'Cross & Roll Brand Creation',
      link: '/',
      img: '/img/crossroll_big.png',
      tags: '(packaging) (branding)',
      year: '2022',
    },
    {
      title: 'Jamin Brand Design',
      link: '/',
      img: '/img/jamin_big.png',
      tags: '(other) (design)',
      year: '2023',
    },
    {
      title: 'Tesoro Packaging',
      link: '/',
      img: '/img/tesoro_big.png',
      tags: '(test) (packaging)',
      year: '2024',
    },
  ]

  const tl = useRef()

  useGSAP(
    () => {
      // @ts-expect-error
      tl.current = gsap.timeline().from(target.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'bottom bottom',
          end: 'top top',
          scrub: true,
          invalidateOnRefresh: true,
        },
        width: screenSize.width >= 640 ? '60vw' : '100%',
        height:
          screenSize.width >= 640 ? '900px' : `${screenSize.width - 48}px`,
        duration: 2,
        delay: 2,
      })
    },
    { scope: container }
  )

  useGSAP(() => {
    // @ts-expect-error
    tl.current = gsap.timeline().from('.bg-controller', {
      scrollTrigger: {
        trigger: section.current,
        start: 'top -42%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true,
      },
      background: '#FFF000',
    })
  })

  useGSAP(() => {
    // @ts-expect-error
    tl.current = gsap.timeline().from('.footer-bg-controller', {
      scrollTrigger: {
        trigger: footer.current,
        start: 'top 50%',
        end: 'bottom 100%',
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 0,
    })
  })

  useEffect(() => {
    logoSvgRef.current &&
      setLogoDimenstions({
        width: logoSvgRef.current.clientWidth,
        height: logoSvgRef.current.clientHeight,
      })

    heroContentRef.current &&
      setHeroContent({
        width: heroContentRef.current.clientWidth,
        height: heroContentRef.current.clientHeight,
      })
  }, [screenSize])

  return (
    <React.Fragment>
      <Page.Wrapper
        startContent={
          <React.Fragment>
            <div
              className={
                'w-full h-full fixed inset-0 bg-[#FFF] bg-controller z-0'
              }
            />
            <div
              className={
                'w-full h-full fixed inset-0 bg-[#FFF000] opacity-100 footer-bg-controller z-0'
              }
            />
          </React.Fragment>
        }
      >
        <Page.Section
          className={'relative w-full min-h-fit sm:min-h-[80vh] h-full z-0'}
          ref={section}
        >
          <LogoSVG className={'w-full h-auto pt-24 z-0'} ref={logoSvgRef} />
          <div
            ref={heroContentRef}
            className={
              'w-full flex lg:flex-row flex-col gap-6 justify-between sm:pt-12 pb-8'
            }
          >
            <div className={'w-full sm:w-[498px]'}>
              <h3
                className={'font-aeonik font-medium text-black text-2xl'}
                style={{ fontFeatureSettings: '"ss01" 1' }}
              >
                The creative workspace of Nick Grivos usually focusing on
                Branding & Packaging but always going beyond that.
              </h3>
            </div>
            <div
              className={
                'group flex flex-row-reverse relative gap-4 w-full lg:w-auto'
              }
              onMouseEnter={() =>
                screenSize.width > 1024 && setStoriesAreOpen(true)
              }
              onMouseLeave={() =>
                screenSize.width > 1024 && setStoriesAreOpen(false)
              }
            >
              <div className={'w-full relative'}>
                <Motion.div
                  key={'main-nav'}
                  {...animateVariants({
                    initial: {
                      width: 0,
                      height: 0,
                    },
                    enter: {
                      width:
                        screenSize.width > 1024
                          ? `${screenSize.width * 0.6}px`
                          : screenSize.width - 8 * 2,
                      height:
                        screenSize.width > 640
                          ? `${
                              heroContent?.height! + logoDimenstions?.height! ||
                              600
                            }px`
                          : `${
                              heroContent?.height! +
                                logoDimenstions?.height! -
                                100 || 600
                            }px`,
                      bottom: '-40px',
                      right: '-40px',
                      transition: {
                        duration: 0.615,
                        ease: easeCustom,
                      },
                    },
                    exit: {
                      width: 0,
                      height: 0,
                      bottom: '-40px',
                      right: '-40px',
                      transition: {
                        duration: 0.475,
                        delay: 0.125,
                        ease: easeCustom,
                      },
                    },
                  })}
                  className={
                    'absolute flex flex-col justify-between rounded-[32px] overflow-hidden bg-black text-[#FFF] bottom-0 right-0 z-0'
                  }
                  animate={storiesAreOpen ? 'enter' : 'exit'}
                >
                  <Motion.div
                    key={'hover-project-title'}
                    className={'absolute bottom-0 z-10'}
                    {...animateVariants({
                      initial: {
                        x: 15,
                        opacity: 0,
                      },
                      enter: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.475,
                          delay: 0.385,
                          ease: easeCustom,
                        },
                      },
                      exit: {
                        x: 15,
                        opacity: 0,
                        transition: {
                          duration: 0.275,
                          ease: easeCustom,
                        },
                      },
                    })}
                    animate={storiesAreOpen ? 'enter' : 'exit'}
                  >
                    <h2
                      className={
                        'font-aeonik font-normal text-5xl max-w-[328px] text-white mb-8 ml-10'
                      }
                    >
                      {storiesData[storiesIndex].title}
                    </h2>
                  </Motion.div>
                  <Motion.div
                    key={'hover-project-tags'}
                    className={'absolute inset-0 z-10'}
                    {...animateVariants({
                      initial: {
                        x: 15,
                        opacity: 0,
                      },
                      enter: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.475,
                          delay: 0.185,
                          ease: easeCustom,
                        },
                      },
                      exit: {
                        x: 15,
                        opacity: 0,
                        transition: {
                          duration: 0.275,
                          ease: easeCustom,
                        },
                      },
                    })}
                    animate={storiesAreOpen ? 'enter' : 'exit'}
                  >
                    <h3
                      className={
                        'font-aeonik font-medium uppercase text-white mt-10 ml-10'
                      }
                    >
                      {storiesData[storiesIndex].tags}
                    </h3>
                  </Motion.div>
                  <Motion.div
                    key={'hover-project-year'}
                    className={'absolute top-0 right-28 z-10'}
                    {...animateVariants({
                      initial: {
                        x: -15,
                        opacity: 0,
                      },
                      enter: {
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.475,
                          delay: 0.185,
                          ease: easeCustom,
                        },
                      },
                      exit: {
                        x: -15,
                        opacity: 0,
                        transition: {
                          duration: 0.275,
                          ease: easeCustom,
                        },
                      },
                    })}
                    animate={storiesAreOpen ? 'enter' : 'exit'}
                  >
                    <h3
                      className={
                        'font-aeonik font-medium uppercase text-white mt-10 mr-10'
                      }
                    >
                      {storiesData[storiesIndex].year}
                    </h3>
                  </Motion.div>
                  <Motion.div
                    key={storiesIndex}
                    className={'w-full h-full absolute opacity-70 z-0'}
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                  >
                    <Image
                      className={'object-cover w-full h-full'}
                      src={storiesData[storiesIndex].img}
                      alt={storiesData[storiesIndex].title}
                      width={1635}
                      height={1080}
                    />
                  </Motion.div>
                </Motion.div>
                <ul
                  className={
                    'flex flex-row w-full gap-1.5 *:relative *:aspect-[9/12] *:overflow-hidden'
                  }
                >
                  <li
                    onMouseEnter={() => setStoriesIndex(0)}
                    className={
                      'w-1/4 lg:w-[70px] bg-black rounded-2xl link cursor-pointer'
                    }
                  >
                    <Image
                      className={
                        'object-cover w-full h-full md:hover:scale-125 transition-all'
                      }
                      src={'/img/9.webp'}
                      alt={'story-showcase'}
                      width={630}
                      height={630}
                    />
                  </li>
                  <li
                    onMouseEnter={() => setStoriesIndex(1)}
                    className={
                      'w-1/4 lg:w-[70px] bg-black rounded-2xl link cursor-pointer'
                    }
                  >
                    <Image
                      className={
                        'object-cover w-full h-full md:hover:scale-125 transition-all'
                      }
                      src={'/img/4.webp'}
                      alt={'story-showcase'}
                      width={630}
                      height={630}
                    />
                  </li>
                  <li
                    onMouseEnter={() => setStoriesIndex(2)}
                    className={
                      'w-1/4 lg:w-[70px] bg-black rounded-2xl link cursor-pointer'
                    }
                  >
                    <Image
                      className={
                        'object-cover w-full h-full md:hover:scale-125 transition-all'
                      }
                      src={'/img/7.webp'}
                      alt={'story-showcase'}
                      width={630}
                      height={630}
                    />
                  </li>
                  <li
                    className={
                      'flex items-center justify-center w-1/4 lg:w-[70px] bg-black lg:group-hover:bg-[#FFF000] transition-colors delay-100 rounded-2xl link cursor-pointer'
                    }
                  >
                    <UpRightArrow
                      className={
                        'text-white lg:group-hover:text-black transition-colors delay-100'
                      }
                    />
                  </li>
                </ul>
              </div>
              <div className={'hidden lg:block z-10'}>
                <p
                  className={
                    'font-aeonik text-lg font-medium leading-[1.1em] group-hover:text-white transition-colors delay-100 w-20 uppercase lg:text-end text-start'
                  }
                >
                  Latest stories
                </p>
              </div>
            </div>
          </div>
        </Page.Section>
        <Page.Section className={'body z-0 block h-screen'}>
          <div className={'block top-0 w-full h-[5vh] z-0'} ref={container}>
            <div
              ref={target}
              className={
                'block relative overflow-hidden boxblock w-full sm:w-[calc(100vw-(48px*2))] h-[calc(80vh-(24px*2))] sm:h-[calc((100vw-(48px*2))*(9/16))] bg-black rounded-3xl md:rounded-[40px] z-0'
              }
              onMouseEnter={hoverAction}
              onMouseLeave={hoverReset}
            >
              <Link href={'/story'} className={'action-link'}>
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
                      'https://res.cloudinary.com/dqoxwlhrv/video/upload/f_auto:video,w_1920,q_auto:best/lzae5vdegpk0bo60xasn'
                    }
                    type={'video/mp4'}
                    className={'absolute pointer-events-none z-0'}
                  />
                  Your browser does not support the video tag.
                </video>
              </Link>
            </div>
          </div>
        </Page.Section>
        <Page.Section className={'flex items-center min-h-screen w-full'}>
          <div className={'flex flex-col sm:flex-row justify-between w-full'}>
            <div className={'w-fit'}>
              <span
                className={
                  'font-aeonik font-medium text-4xl sm:text-6xl md:text-8xl pr-10 md:pr-32'
                }
              >
                →
              </span>
            </div>
            <div className={'w-fit flex-1'}>
              <WordByWord
                className={
                  'font-aeonik font-medium text-4xl sm:text-6xl md:text-8xl'
                }
                text={
                  'We use design and technology to create brands and products that perform, delight, and scale and products that perform.'
                }
              />
            </div>
            <div className={'pt-5 w-fit relative flex flex-row'}>
              <span className={'font-aeonik font-semibold uppercase'}>
                (Approach)
              </span>
            </div>
          </div>
          {/* <UnderlineAction href={'/approach'}>Visit website</UnderlineAction> */}
        </Page.Section>
        <Page.Section className={'flex flex-col'}>
          <h2
            className={
              'flex flex-col font-aeonik font-medium leading-none text-6xl sm:text-[120px] md:text-[160px]'
            }
          >
            <span>Selected</span>
            <span>Stories</span>
          </h2>
          <div
            className={
              'flex flex-col-reverse md:flex-row relative w-full gap-6 pb-6 pt-20'
            }
          >
            <div className={'w-full md:w-[60%]'}>
              <div
                className={
                  'overflow-hidden w-full md:w-[80%] aspect-square rounded-3xl'
                }
              >
                <Link href={'/'}>
                  <Image
                    alt={'image'}
                    className={'object-cover w-full h-full'}
                    src={'/img/troktika_big.png'}
                    width={1635}
                    height={1080}
                  />
                  <span className={'sr-only'}>
                    Click to visit project story
                  </span>
                </Link>
              </div>
            </div>
            <div className={'w-full md:w-[40%]'}>
              <div className={'w-full sm:max-w-[498px] min-h-[35vw]'}>
                <span
                  className={
                    'relative flex font-aeonik font-semibold uppercase mb-10'
                  }
                >
                  (Selected stories)
                </span>
                <h3
                  className={'font-aeonik font-medium text-black text-2xl pb-8'}
                  style={{ fontFeatureSettings: '"ss01" 1' }}
                >
                  The creative workspace of Nick Grivos usually focusing on
                  Branding & Packaging but always going beyond that.
                </h3>
              </div>
              <div
                className={'overflow-hidden w-full aspect-square rounded-3xl'}
              >
                <Link href={'/'}>
                  <Image
                    alt={'image'}
                    className={'object-cover w-full h-full'}
                    src={'/img/crossroll_big_2.png'}
                    width={1635}
                    height={1080}
                  />
                  <span className={'sr-only'}>
                    Click to visit project story
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className={'flex justify-center relative w-full pt-0 md:pt-20'}>
            <div
              className={
                'overflow-hidden w-full md:w-[60%] aspect-square md:aspect-video rounded-3xl'
              }
            >
              <Link href={'/'}>
                <Image
                  alt={'image'}
                  className={'object-cover w-full h-full'}
                  src={'/img/crossroll_big.png'}
                  width={1635}
                  height={1080}
                />
                <span className={'sr-only'}>Click to visit project story</span>
              </Link>
            </div>
          </div>
          <div
            className={
              'flex flex-col md:flex-row justify-end items-end relative w-full gap-6 pb-6 md:pt-28'
            }
          >
            <div className={'w-full md:w-[40%]'} />
            <div className={'w-full md:w-[60%] flex items-end justify-end'}>
              <div
                className={
                  'overflow-hidden w-full md:w-[80%] aspect-square rounded-3xl'
                }
              >
                <Link href={'/'}>
                  <Image
                    alt={'image'}
                    className={'object-cover w-full h-full'}
                    src={'/img/jamin_big.png'}
                    width={1635}
                    height={1080}
                  />
                  <span className={'sr-only'}>
                    Click to visit project story
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col md:flex-row justify-end items-end relative w-full gap-6 pb-6 mt-0 md:-mt-28'
            }
          >
            <div className={'w-full md:w-[40%]'}>
              <div
                className={
                  'overflow-hidden w-full md:w-[80%] aspect-square md:aspect-[5/4] rounded-3xl'
                }
              >
                <Link href={'/'}>
                  <Image
                    alt={'image'}
                    className={'object-cover w-full h-full'}
                    src={'/img/tesoro_big.png'}
                    width={1635}
                    height={1080}
                  />
                  <span className={'sr-only'}>
                    Click to visit project story
                  </span>
                </Link>
              </div>
            </div>
            <div className={'w-full md:w-[60%] flex items-end justify-end'} />
          </div>
          <div
            className={
              'flex flex-col md:flex-row justify-end items-end relative w-full gap-6 pb-6 md:pt-20'
            }
          >
            <div className={'w-full md:w-[40%]'} />
            <div className={'w-full md:w-[60%] flex justify-end'}>
              <div className={'relative w-full md:w-[80%]'}>
                <UnderlineAction href={'/stories'}>
                  View all stories
                </UnderlineAction>
              </div>
            </div>
          </div>
        </Page.Section>
        <Footer.Root ref={footer} />
      </Page.Wrapper>
    </React.Fragment>
  )
}
