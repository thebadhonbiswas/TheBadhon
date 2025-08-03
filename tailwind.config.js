/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        highlight: "var(--highlight)",
        info: "var(--info)",
        text: {
          main: "var(--text-main)",
          light: "var(--text-light)",
        },
      },
    },
  },
  plugins: [],
}