/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(63.68% 148.21% at 48.57% -48.21%, rgba(7, 56, 185, 0.4) 0%, rgba(3, 25, 83, 0.4) 100%)',
        'radial2': 'radial-gradient(51.41% 105.14% at 50.04% 105.14%, #0A308B 0%, #1E6EFB 100%)',
        'linearText': 'linear-gradient(275.29deg, #88B3FD 36.84%, #5280D1 62.25%, #7CACFF 93.72%)',
        'textRadial': 'radial-gradient(34.52% 53.97% at 55.31% 103.97%, #043BCB 0%, #043BCB 28%, #88B3FD 100%)',
        'cardBg': 'radial-gradient(103.02% 79.39% at 50.04% 100%, rgba(3, 25, 83, 0.7) 0%, rgba(23, 112, 247, 0.7) 100%)',
        'template': 'url("/public/Pattern.png")',
        'mainCard': 'linear-gradient(180deg, rgba(9, 89, 229, 0.56) 0%, rgba(9, 89, 229, 0.2) 100%)',
        'hr' : 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 48.8%, rgba(255, 255, 255, 0) 100%)',

      },
      boxShadow: {
        'button': 'box-shadow: 0px 6.61px 29.75px 0px #1B223C29',
        'card': 'box-shadow: 0px 0px 45.83px 4.58px #BCCAFF33'
      }
    }, 

  },
  plugins: [],
}

