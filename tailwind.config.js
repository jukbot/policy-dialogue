module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
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
      landing: '120% 100%',
      survey: '100% 100%',
      step: '90% 100%',
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
        'step-blur-pattern': "url('/image/background/landing-blur-shape.svg')",
        'step-pattern': "url('/image/background/landing-shape.svg')",
        'process-step': "url('/image/background/survey-steps.svg')",
      },
      backgroundPosition: {
        'top-24': 'center top 12rem',
        'top-48': 'center top 24rem',
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
