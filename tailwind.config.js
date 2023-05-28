/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'outer': '6px 6px 10px -1px rgb(0,0,0,0.15),-6px -6px 10px -1px rgb(255,255,255,0.7)',
        'inner': 'inset 4px 4px 6px -1px rgb(0,0,0,0.2), inset -4px -4px 6px -1px rgb(255,255,255,0.7), -0.5px -0.5px 0px rgb(255,255,255,1), 0.5px 0.5px 0px rgb(0,0,0,0.15), 0px 12px 10px -10px rgb(0,0,0,0.05)',
        '5xl': "20px 20px 50px rgb(0, 0, 0, 0.5)",
      },
      colors: {
        'midnight ': {
          'main': 'gray-900',
          'cont': 'gray-800',
          'text': 'white',
        },
        'midday ': {
          'main': 'gray-100',
          'cont': 'white',
          'text': 'gray-700',
        },
        // ...
      },
    },
  },
  plugins: [],
}
