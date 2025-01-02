/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chocolate: {
          50: '#faf6f4',
          100: '#f0e6e0',
          200: '#e1cdc1',
          300: '#d2b4a2',
          400: '#c39b83',
          500: '#b48264',
          600: '#a5694b',
          700: '#8b563d',
          800: '#714532',
          900: '#573427',
        },
        milk: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fafafa',
          500: '#f9f9f9',
          600: '#f7f7f7',
          700: '#f5f5f5',
          800: '#f4f4f4',
          900: '#f2f2f2',
        },
        golden: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
      },
    },
  },
  plugins: [],
};