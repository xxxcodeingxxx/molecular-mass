/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#f7f7f7",
        lteTxt: "#595959",
        darkMode: "#333333",
        dmTxt: "#dbdbdb",
        headerBg: "#2b2b2b",
      },
    },
  },
  plugins: [],
};
