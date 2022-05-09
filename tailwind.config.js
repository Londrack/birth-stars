module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
            fadein: 'fadein 0.4s ease-in-out',
            showmodalbox: 'showmodalbox 0.6s ease-in-out',
        },
        keyframes: {
            fadein: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
            showmodalbox:{
                '0%': {
                    opacity: 0,
                    transform: 'translateY(40px)'
                },
                '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                },
            }
          }
      },
    },
    plugins: [],
  }