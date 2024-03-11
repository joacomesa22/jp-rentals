/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkest: "#000814",
        lightGray: "#f2f2f2",
        gray: "#E7E7E7",
        lightBlue: "#003566",
        darkBlue: "#001D3D",
        lightYellow: "#FFD60A",
        darkYellow: "#FFC300",
      },
    },
  },
  plugins: [],
};
