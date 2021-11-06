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
      '150%': '150% 100%',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-body-text)',
        danger: 'var(--color-danger)',
        disabled: 'var(--color-disabled)',
      },
      spacing: {
        120: '120%',
      },
      backgroundImage: {
        'hero-pattern': "url('/image/background/landing-hero.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}
