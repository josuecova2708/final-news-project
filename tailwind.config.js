/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
     'bright-turquoise': {
        '50': '#f1fcfb',
        '100': '#cef9f3',
        '200': '#9ef1e6',
        '300': '#5be1d4',
        '400': '#36cbc2',
        '500': '#1cb0a8',
        '600': '#148d89',
        '700': '#147170',
        '800': '#155a5a',
        '900': '#164b4a',
        '950': '#062c2d',
    },
    
      },
      
    },
  },
  plugins: [],
};
