/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#07080D',
        paper: '#F6F2E9',
        gold: '#C9A24B',
        japan: { 50: '#FBF3F6', ink: '#3A1E2E', accent: '#D88CA6', navy: '#1B2340' },
        india: { purple: '#3B0E52', saffron: '#E8792E', gold: '#F2B33D', cream: '#F7EAD2' },
        egypt: { sand: '#D8B073', bronze: '#8A5A2B', navy: '#1B2635', beige: '#EFDFC0' },
        italy: { sea: '#0B4C5F', emerald: '#1E7A63', stone: '#F1ECE1' },
        brazil: { green: '#04A777', yellow: '#FFD23F', blue: '#0B3D91', sunset: '#F0653B' },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(.16,.8,.24,1)',
      },
    },
  },
  plugins: [],
}
