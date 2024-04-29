import type { Config } from 'tailwindcss'
import type { PluginCreator, PluginsConfig } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['var(--font-aeonik)'],
      },
      keyframes: {
        tada: {
          '0%': {
            transform: 'scaleX(1)',
          },
          '10%, 20%': {
            transform: 'scale3d(0.9, 0.9, 0.9) rotate(-3deg)',
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(3deg)',
          },
          '40%, 60%, 80%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate(-3deg)',
          },
          to: {
            transform: 'scaleX(1)',
          },
        },
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(720deg)',
          },
        },
        spinout: {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
      },
      animation: {
        spin: 'spin 1s ease-in',
        spinout: 'spinout 1s ease-out',
        tada: 'tada 1s ease-in-out',
        marquee: 'marquee var(--duration, 30s) linear infinite',
        blink: 'blink 0.975s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('second', '&:nth-child(2)')
      addVariant('third', '&:nth-child(3)')
    } as PluginCreator,
  ],
}
export default config
