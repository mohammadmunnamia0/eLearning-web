/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HindSiliguri: ['"Hind Siliguri"', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
   daisyui: {
    themes: ["light", "dark"], // include the themes you want
    darkTheme: "dark",         // optional: define which one is used for dark
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
  },
}

