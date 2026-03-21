import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F7F7F5',
        'bg-tinted': '#EEF4F0',
        'bg-dark': '#111110',
        'bg-forest': '#0C2218',
        'text-primary': '#111110',
        'text-secondary': '#5A5A57',
        'text-tertiary': '#8A8A86',
        'border-light': '#E4E4E0',
        'border-medium': '#C8C8C4',
        'accent': '#007A5F',
        'accent-light': '#E6F5F1',
      },
      fontFamily: {
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
