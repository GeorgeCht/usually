'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import { motion as Motion, Variant } from 'framer-motion'
import { Link } from 'next-view-transitions'

const Carousel = ({ options }: { options?: EmblaOptionsType }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const projectsData = [
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging', 'Rebrand', 'Design'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
  ]

  return (
    <section className={'embla'}>
      <div className={'embla__viewport'} ref={emblaRef}>
        <div className={'embla__container'}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={
                'relative min-w-0 pl-10 lg:pl-12 xl:flex-[0_0_30%] lg:flex-[0_0_40%] md:flex-[0_0_50%] flex-[0_0_75%]'
              }
            >
              <div className={'relative w-full aspect-[0.7396]'}>
                <Link href={project.url}>
                  <Motion.div
                    className={
                      'group relative object-cover w-full h-full overflow-hidden rounded-[36px] z-30 bg-black'
                    }
                    whileHover={{
                      scale: 0.945,
                      padding: '0.25rem',
                      borderRadius: '62px',
                      transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                      },
                    }}
                  >
                    <Image
                      alt={project.title}
                      className={
                        'absolute z-0 inset-0 object-cover w-full h-full group-hover:opacity-85 opacity-100 transition-all'
                      }
                      src={project.image}
                      width={1635}
                      height={1080}
                    />
                    <div
                      className={
                        'lg:group-hover:opacity-100 lg:opacity-0 flex flex-col md:p-10 p-8 relative z-10 w-full h-full items-center justify-between transition-all'
                      }
                    >
                      <span
                        className={
                          'block font-aeonik font-medium uppercase text-white'
                        }
                      >
                        {project.title.toUpperCase() || ''}
                      </span>
                      <span
                        className={
                          'block font-aeonik font-medium uppercase text-white'
                        }
                      >
                        ({project.tags.join(') (')})
                      </span>
                    </div>
                  </Motion.div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Carousel }
