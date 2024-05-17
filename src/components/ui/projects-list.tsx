'use client'

import React from 'react'
import { Image } from '../misc/image'
import { Link } from 'next-view-transitions'
import { motion as Motion } from 'framer-motion'

const ProjectList = () => {
  const projectsData = [
    {
      title: 'Tesoro Homemade',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Santorini Boatmen’s Association',
      tags: ['Packaging', 'Rebrand', 'Design'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Jamin Local Products',
      tags: ['Packaging'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Concrete Rodents',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Limni Boutique Hotel',
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
    {
      title: 'Santorini Boatmen’s Association',
      tags: ['Packaging', 'Rebrand', 'Design'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Jamin Local Products',
      tags: ['Packaging'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Concrete Rodents',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
    {
      title: 'Limni Boutique Hotel',
      tags: ['Packaging', 'Rebrand'],
      image: '/img/tesoro_big.png',
      url: '/',
    },
  ]

  return (
    <ul className={'projects-list w-full relative flex flex-col'}>
      {projectsData.map((project, index) => {
        const words = project.title.split(' ')
        const middleIndex = Math.floor(words.length / 2)
        const shouldShowImage = words.length === 2 ? 0 : middleIndex

        return (
          <li
            key={index}
            className={'group lg:py-8 py-4 lg:pt-7 border-b border-gray-300'}
          >
            <Link
              href={project.url}
              className={
                'flex flex-row w-full items-center justify-between gap-5'
              }
            >
              <h3
                className={
                  'lg:text-[4.275vw] leading-none text-3xl font-normal flex lg:flex-row flex-wrap items-center'
                }
              >
                {project.title.split(' ').map((word, index) => (
                  <React.Fragment key={index}>
                    <span className={'pr-3'}>{word}</span>
                    {index === shouldShowImage && (
                      <Motion.div
                        className={
                          'lg:group-hover:w-[156px] group-hover:w-[74px] w-0 overflow-hidden transition-all duration-300 group-hover:mr-3 max-md:hidden'
                        }
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          className={
                            'lg:w-[156px] w-[74px] lg:h-[96px] h-[46px] rounded-lg lg:rounded-2xl object-cover'
                          }
                          width={156}
                          height={96}
                        />
                      </Motion.div>
                    )}
                  </React.Fragment>
                ))}
              </h3>
              <span className={'uppercase font-medium text-end max-xl:hidden'}>
                {project.tags.join(', ')}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export { ProjectList }
