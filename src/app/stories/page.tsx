'use client'

import React from 'react'

import { Page } from '@/components/layout/page-layout'
import { Carousel } from '@/components/ui/carousel'
import { ProjectList } from '@/components/ui/projects-list'
import { Switch } from '@/components/ui/switch'

export default function StoriesPage() {
  const [viewState, setViewState] = React.useState<'slider' | 'grid'>('grid')
  return (
    <Page.Wrapper>
      <Page.Section className={'h-screen flex justify-center items-start'}>
        <div className={'flex w-full pt-28'}>
          {viewState === 'grid' ? <ProjectList /> : <Carousel />}
          <Switch
            state={viewState}
            labels={['Slider view', 'Grid view']}
            onSliderClick={() => setViewState('slider')}
            onGridClick={() => setViewState('grid')}
          />
        </div>
      </Page.Section>
    </Page.Wrapper>
  )
}
