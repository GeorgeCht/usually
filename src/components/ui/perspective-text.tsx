import { cn } from '@/lib/utils'
import { motion as Motion } from 'framer-motion'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

const PerspectiveButton = ({
  isActive,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isActive: boolean
}) => {
  return (
    <div
      className={
        'absolute w-24 h-10 cursor-pointer overflow-hidden rounded-[25px] right-0 top-0 z-50 button-perspective'
      }
      {...props}
    >
      <Motion.div
        className={'slider w-full h-full relative'}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.75, 0, 0.25, 1] }}
      >
        <div className={'el w-full h-full text-[#FFF]'}>
          <PerspectiveText
            classNames={{ text: 'font-aeonik font-semibold uppercase' }}
          >
            (menu)
          </PerspectiveText>
        </div>
        <div className={'el w-full h-full'}>
          <PerspectiveText
            classNames={{ text: 'font-aeonik font-semibold uppercase' }}
          >
            (close)
          </PerspectiveText>
        </div>
      </Motion.div>
    </div>
  )
}

const PerspectiveText = ({
  children,
  className,
  classNames = {
    base: '',
    text: 'font-aeonik font-semibold',
  },
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  classNames?: {
    base?: string
    text?: string
  }
}) => {
  return (
    <div
      className={cn('text-perspective', className, classNames?.base)}
      {...props}
    >
      {[...Array(2)].map((_, index) => {
        return (
          <p
            key={index}
            style={{ transformStyle: 'preserve-3d' }}
            className={classNames?.text}
          >
            {children}
          </p>
        )
      })}
    </div>
  )
}

export { PerspectiveButton, PerspectiveText }
