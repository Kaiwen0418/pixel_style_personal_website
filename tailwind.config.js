module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hopper': "url('/public/images/art_pop/HOPPER.jpg')"
      },
      filter: { // this ensures filter utilities are enabled
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)'
      },
      blur: {
        sm: '2px',
        DEFAULT: '4px', // default blur
        lg: '8px',
        xl: '16px'
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%) translateY(-50%) scaleY(3)' },
          '100%': { transform: 'translateX(0) translateY(-50%) scaleY(3)' },
        },
      },
      animation: {
        'slide-in-right': 'slideInFromRight 1s ease-out forwards',
      },
    },
  },
  variants: {},
  plugins: [],
};
