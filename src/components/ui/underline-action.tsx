import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Link as TransitionLink } from 'next-view-transitions'

const UnderlineAction = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <TransitionLink
      {...props}
      className={cn(
        'link-underline font-aeonik font-medium text-4xl pb-2 px-2.5',
        className
      )}
    >
      → {children}
    </TransitionLink>
  )
}

export { UnderlineAction }
