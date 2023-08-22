/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Inter']
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
