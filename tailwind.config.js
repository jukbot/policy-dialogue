module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      'landing-size': '160% 120%',
      'width-90': '90% 100%',
      'footer-size': '80% 180%',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-body-text)',
        danger: 'var(--color-danger)',
        disabled: 'var(--color-disabled)',
      },
      backgroundImage: {
        'hero-pattern': "url('/image/background/landing-hero.svg')",
        'hero-pattern-mobile': "url('/image/background/landing-hero-mobile.svg')",
        'step-blur-pattern': "url('/image/background/landing-blur-shape.svg')",
        'step-pattern': "url('/image/background/landing-shape.svg')",
        'process-step': "url('/image/background/landing-survey-step.svg')",
        'landing-footer': "url('/image/background/landing-footer.svg')",
        'rise-impact-footer': "url('/image/background/rise-impact-footer.svg')",
      },
      backgroundPosition: {
        '-top-6': 'center top -6rem',
        'top-16': 'center top 16rem',
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
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}
