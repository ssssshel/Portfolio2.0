module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fira-Code': ['Fira-Code', 'monospace'],
        'Inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'sm': { 'min': '0px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

      },
      colors: {
        'dark': '#121216',
        'medium': '#BBBAC6',
        'independence': '#49495A',
        'light': '#FBF8F4',
      },
      spacing: {
        '100%': '100vh',
        '90%': '90vh',
        '85%': '85vh',
        '80%': '80vh',
        '75%': '75vh',
        '70%': '70vh',
        '60%': '60vh',
        '50%': '50vh',
        '45%': '45vh',
        '40%': '40vh',
        '35%': '35vh',
        '30%': '30vh'
      }
    }
  },
  plugins: [],
}