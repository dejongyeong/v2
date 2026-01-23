// tailwind.config.mjs

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-blue": "#045FFF",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
