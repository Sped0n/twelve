import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace']
      },
      fontWeight: {
        light: '200',
        normal: '300',
        medium: '400',
        semibold: '500',
        bold: '600'
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typography]
} satisfies Config
