/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00A4F4',
        'brand-blue': '#00A4F4',
        'deep-blue': '#0069AB',
        'dark-gray': '#3D3D3D',
        'deep-blue': '#0069AB',
        'custom-blue': '#00aaff', 
        'custom-blue-start': '#a7e2ff',  // Adjust according to your design
        'custom-blue-end': '#0095de',  // Adjust according to your design
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(101.91deg, #A7E2FF 0%, #0095DE 87.74%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(114.87% 113.36% at 40.95% -10.45%, #35BDFF 38.13%, #008CD0 100%)',
        'gradient-linear': 'linear-gradient(96.34deg, #C5ECFF 0.94%, #95DDFF 96.46%)',
      }
    }
  },
}

