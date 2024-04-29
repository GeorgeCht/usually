import { cn } from '@/lib/utils'
import { LinkProps } from 'next/link'
import { Link } from 'next-view-transitions'

const LinkRoot = ({
  text,
  className,
  ...props
}: LinkProps & {
  text: string
  className?: string
}) => {
  return (
    <Link
      // scroll={false}
      className={cn(
        'linkflip relative inline-block overflow-hidden h-auto cursor-pointer',
        className
      )}
      {...props}
    >
      <span data-text={text}>{text}</span>
    </Link>
  )
}

export { LinkRoot as Link }
