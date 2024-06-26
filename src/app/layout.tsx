import React from 'react'
import localFont from 'next/font/local'
import { ViewTransitions } from 'next-view-transitions'
import { MainLayout } from '@/components/layout/main-layout'
import type { Metadata, Viewport } from 'next'

import './globals.css'

const aeonik = localFont({
  src: [
    {
      path: '/fonts/Aeonik-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '/fonts/Aeonik-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-aeonik',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ViewTransitions>
        <MainLayout font={aeonik}>{children}</MainLayout>
      </ViewTransitions>
    </>
  )
}
