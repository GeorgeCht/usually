import { cn } from '@/lib/utils'
import React, { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

const PageWrapper = forwardRef<
  HTMLElement,
  {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(({ className, children, startContent, endContent, ...props }, ref) => {
  return (
    <React.Fragment>
      {startContent || null}
      <article
        aria-roledescription={'page-container'}
        className={cn('page-container w-full sm:px-12 px-6 z-0', className)}
        {...props}
        ref={ref}
      >
        {children}
      </article>
      {endContent || null}
    </React.Fragment>
  )
})

PageWrapper.displayName = 'PageWrapper'

const PageSection = forwardRef<
  HTMLElement,
  {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
  } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(({ className, children, startContent, endContent, ...props }, ref) => {
  return (
    <React.Fragment>
      {startContent || null}
      <section
        aria-roledescription={'page-section'}
        className={cn('relative', className)}
        {...props}
        ref={ref}
      >
        {children}
      </section>
      {endContent || null}
    </React.Fragment>
  )
})

PageSection.displayName = 'PageSection'

const Page = {
  Wrapper: PageWrapper,
  Section: PageSection,
}

export { Page }
