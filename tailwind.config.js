const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    preserveHtmlElements: false,
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['IBMPlexSansThai', 'sans-serif'],
      body: ['IBMPlexSansThaiLooped'],
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '75%': '75%',
      'landing-size': '160% 120%',
      'width-90': '90% 100%',
      'footer-size': '80% 180%',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-body-text)',
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        disabled: 'var(--color-disabled)',
      },
      transformOrigin: {
        middle: '50% 50%',
      },
      backgroundImage: {
        'hero-pattern': "url('/image/background/landing-hero.svg')",
        'hero-pattern-mobile': "url('/image/background/landing-hero-mobile.svg')",
        'step-blur-pattern': "url('/image/background/landing-blur-shape.svg')",
        'step-pattern': "url('/image/background/landing-shape.svg')",
        'process-step': "url('/image/background/landing-survey-step.svg')",
        'step-blur-pattern-mobile': "url('/image/background/landing-blur-shape-mobile.svg')",
        'step-pattern-mobile': "url('/image/background/landing-shape-mobile.svg')",
        'process-step-mobile': "url('/image/background/landing-survey-step-mobile.svg')",
        'landing-footer': "url('/image/background/landing-footer.svg')",
        'rise-impact-footer': "url('/image/background/rise-impact-footer.svg')",
        'clean-water': "url('/image/policy/clean-water.jpg')",
        education: "url('/image/policy/education.jpg')",
        environment: "url('/image/policy/environment.jpg')",
        healthcare: "url('/image/policy/healthcare.jpg')",
        'public-park': "url('/image/policy/public-park.jpg')",
        'public-transport': "url('/image/policy/public-transport.jpg')",
        welfare: "url('/image/policy/welfare.jpg')",
      },
      backgroundPosition: {
        'top-left-2': '3.5rem 2.5rem',
        '-top-6': 'center top -6rem',
        '-top-16': 'center top -16rem',
        'top-right': 'top right 1rem',
      },
      borderRadius: {
        xl: '1rem',
        50: '50%',
      },
    },
  },
  variants: {
    extend: {
      backdropBrightness: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
      backgroundImage: ['hover', 'focus', 'group-hover'],
      rotate: ['active', 'hover', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.transform-box': {
          transformBox: 'fill-box',
          transformOrigin: '50% 50%',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
