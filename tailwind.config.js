/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        darkImage: 'url("assets/images/wallpaper-dark.webp")',
        lightImage: 'url("assets/images/wallpaper.webp")',
        mobileImage: 'url("assets/images/wallpaper-phone.webp")',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        scale: {
          '0%': { transform: 'scale(0.90)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'button-pop': 'scale 1s ease-in-out',
      },
    },
    variants: {
      extend: { backgroundImage: ['dark'] },
    },
  },
  plugins: [],
};
