/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#804BE5',
        success: '#0ABBC7',
        info: '#0E61E4',
        error: '#D140B5',
        warning: '#E3A110',
        disabled: '#4D568D',
        purple100: '#202649',
        purple50: '#383C72'
      }
    }
  },
  plugins: []
}
