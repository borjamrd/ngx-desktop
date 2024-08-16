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
    },
    variants: {
      extend: { backgroundImage: ['dark'] },
    },
  },
  plugins: [],
};
