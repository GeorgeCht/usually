import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'
import { Marquee } from '@/components/ui/marquee'
import { TimeInAthens } from '@/components/ui/local-time'
import { Magnetic } from '@/components/misc/magnetic'
import { Link } from 'next-view-transitions'
import { Link as LinkFlip } from '@/components/misc/link'
import { UnderlineAction } from '@/components/ui/underline-action'
import { LogoSVG } from '@/components/ui/logo-svg'
import { useLenis } from '@/lib/lenis'

const FooterRoot = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const lenis = useLenis((lenis) => {})
    return (
      <footer
        className={cn(
          'relative flex flex-col items-center justify-end sm:pb-12 pb-6 sm:gap-12 gap-6 min-h-screen',
          className
        )}
        {...props}
        ref={ref}
      >
        <div className={'flex w-screen inset-0 mb-24'}>
          <Marquee baseVelocity={0.375}>
            hello•γεια•ciao•bonjour•olá•こんにちは•
          </Marquee>
        </div>
        <div
          className={
            'flex flex-col min-[1600px]:flex-row w-full md:border-b md:border-black/50 max-[1600px]:gap-10'
          }
        >
          <div className={'w-full min-[1600px]:w-1/2'}>
            <div className={'w-full sm:max-w-[720px]'}>
              <span
                className={
                  'relative flex font-aeonik font-semibold uppercase min-[1600px]:mb-10 mb-2'
                }
              >
                (Let&apos;s connect)
              </span>
              <h3
                className={
                  'font-aeonik font-medium text-black text-3xl min-[1600px]:pb-8'
                }
                style={{ fontFeatureSettings: '"ss01" 1' }}
              >
                We&apos;re always looking for clients and collaborators that
                share the same vision. Drop us a mail and you will hear from us
                as soon as possible.
              </h3>
            </div>
          </div>
          <div className={'w-full min-[1600px]:w-1/4'}>
            <span
              className={
                'relative flex font-aeonik font-semibold uppercase min-[1600px]:mb-10 mb-2'
              }
            >
              (Let&apos;s connect)
            </span>
            <UnderlineAction href={'/approach'}>
              we@usually.design
            </UnderlineAction>
          </div>
          <div className={'w-full min-[1600px]:w-1/4 max-[1600px]:pb-12'}>
            <span
              className={
                'relative flex font-aeonik font-semibold uppercase min-[1600px]:mb-10 mb-2'
              }
            >
              (Call us)
            </span>
            <UnderlineAction href={'/approach'}>
              (+30) 210 123 4353
            </UnderlineAction>
          </div>
        </div>

        <div className={'flex flex-col md:flex-row w-full min-h-60'}>
          <div
            className={
              'w-full md:w-1/2 flex flex-col justify-between max-[1600px]:mb-10'
            }
          >
            <LogoSVG variant={'full'} className={'w-[254px] h-[76px]'} />
            <p className={'font-aeonik text-xl font-semibold max-md:hidden'}>
              Copyright &copy; Usually {new Date().getFullYear()}
            </p>
          </div>
          <div className={'w-full md:w-1/2 flex max-md:flex-row-reverse'}>
            <div
              className={'w-1/2 flex flex-col justify-between max-md:min-h-40'}
            >
              <ul className={'flex flex-col'}>
                {[
                  {
                    title: 'Facebook',
                    url: 'https://facebook.com',
                  },
                  {
                    title: 'Instagram',
                    url: 'https://twitter.com',
                  },
                  {
                    title: 'Behance',
                    url: 'https://behance.com',
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={
                      'font-aeonik font-semibold text-xl leading-tight w-fit'
                    }
                  >
                    <Magnetic>
                      <LinkFlip text={item.title} href={item.url} />
                    </Magnetic>
                  </li>
                ))}
              </ul>
              <span
                onClick={() => lenis?.scrollTo(0)}
                className={
                  'font-aeonik font-semibold text-xl leading-tight w-fit'
                }
              >
                <Magnetic>
                  <p
                    className={
                      'linkflip relative inline-block overflow-hidden h-auto cursor-pointer'
                    }
                  >
                    <span data-text={'Back to top'}>{'Back to top'}</span>
                  </p>
                </Magnetic>
              </span>
            </div>
            <div
              className={'w-1/2 flex flex-col justify-between max-md:min-h-40'}
            >
              <ul className={'flex flex-col'}>
                {[
                  {
                    title: 'Stories',
                    url: '/stories',
                  },
                  {
                    title: 'Approach',
                    url: '/approach',
                  },
                  {
                    title: 'Contact',
                    url: '/contact',
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={
                      'font-aeonik font-semibold text-xl leading-tight w-fit'
                    }
                  >
                    <Magnetic>
                      <LinkFlip text={item.title} href={item.url} />
                    </Magnetic>
                  </li>
                ))}
              </ul>
              <TimeInAthens />
            </div>
          </div>
        </div>
      </footer>
    )
  }
)

FooterRoot.displayName = 'FooterRoot'

const Footer = {
  Root: FooterRoot,
}

export { Footer }
