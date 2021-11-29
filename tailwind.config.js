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
      strokeWidth: {
        3: '3',
        4: '4',
        6: '5',
        5: '6',
      },
      backgroundImage: {
        'landing-footer': "url('/image/background/landing-footer.svg')",
        'hero-pattern': "url('/image/background/landing-hero.svg')",
        'hero-pattern-mobile': "url('/image/background/landing-hero-mobile.svg')",
        'hero-circle': "url('/image/background/landing-hero-circle.svg')",
        'hero-circle-mobile': "url('/image/background/landing-hero-circle-mobile.svg')",
        'landing-circle': "url('/image/background/landing-circle.svg')",
        'landing-circle-mobile': "url('/image/background/landing-circle-mobile.svg')",
        'step-blur-pattern': "url('/image/background/landing-blur-shape.svg')",
        'step-blur-pattern-mobile': "url('/image/background/landing-blur-shape-mobile.svg')",
        'step-pattern': "url('/image/background/landing-shape.svg')",
        'step-pattern-mobile': "url('/image/background/landing-shape-mobile.svg')",
        'process-step': "url('/image/background/landing-survey-step.svg')",
        'process-step-mobile': "url('/image/background/landing-survey-step-mobile.svg')",
        'about-hero-shape': "url('/image/background/about-hero-shape.svg')",
        'about-pattern': "url('/image/background/about-hero-pattern.svg')",
        'about-pattern-mobile': "url('/image/background/about-hero-pattern-mobile.svg')",
        'archive-hero-shape': "url('/image/background/archive-hero-shape.svg')",
        'archive-pattern': "url('/image/background/archive-hero-pattern.svg')",
        'archive-pattern-mobile': "url('/image/background/archive-hero-pattern-mobile.svg')",
        'guideline-hero-pattern': "url('/image/background/guideline-hero-pattern.svg')",
        'guideline-hero-pattern-mobile': "url('/image/background/guideline-hero-pattern-mobile.svg')",
        'process-hero-pattern': "url('/image/background/process-hero-pattern.svg')",
        'process-hero-pattern-mobile': "url('/image/background/process-hero-pattern-mobile.svg')",
        'value-hero-pattern': "url('/image/background/value-hero-pattern.svg')",
        'value-hero-pattern-mobile': "url('/image/background/value-hero-pattern-mobile.svg')",
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
