import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'

const FadeInImage = ({
  alt = 'image',
  src,
  className,
  ...props
}: ImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      loading={'lazy'}
      className={cn(
        'object-cover w-full h-full transition-opacity opacity-0',
        className
      )}
      onLoad={(img) => img.currentTarget.classList.remove('opacity-0')}
      {...props}
    />
  )
}

export { FadeInImage as Image }
