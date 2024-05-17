'use client'

import { cn } from '@/lib/utils'

type ArrayLengthMutationKeys =
  | 'splice'
  | 'push'
  | 'pop'
  | 'shift'
  | 'unshift'
  | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
  ? TItems
  : never
type FixedLengthArray<T extends Array<any>> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> }

const Switch = ({
  state,
  labels,
  className,
  onSliderClick,
  onGridClick,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onClick'
> & {
  state: 'slider' | 'grid'
  labels: FixedLengthArray<[string, string]>
  onSliderClick?: React.MouseEventHandler<HTMLDivElement> | undefined
  onGridClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) => {
  return (
    <div
      className={cn(
        'fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center'
      )}
      {...props}
    >
      <div
        className={
          'flex items-center w-auto h-auto p-1 rounded-full bg-black transition-all duration-300 cursor-pointer'
        }
      >
        <span
          role={'switch'}
          aria-checked={state === 'slider'}
          onClick={onSliderClick}
          className={cn(
            'flex items-center w-auto h-[46px] px-5 uppercase font-semibold rounded-full transition-all duration-300',
            state === 'slider' ? 'bg-white text-black' : 'text-white'
          )}
        >
          <span className={'max-md:hidden'}>{labels[0]}</span>
          <span className={'md:hidden'}>{labels[0].split(' ')[0]}</span>
        </span>
        <span
          role={'switch'}
          aria-checked={state === 'grid'}
          onClick={onGridClick}
          className={cn(
            'flex items-center w-auto h-[46px] px-5 uppercase font-semibold rounded-full transition-all duration-300',
            state === 'grid' ? 'bg-white text-black' : 'text-white'
          )}
        >
          <span className={'max-md:hidden'}>{labels[1]}</span>
          <span className={'md:hidden'}>{labels[1].split(' ')[0]}</span>
        </span>
      </div>
    </div>
  )
}

export { Switch }
