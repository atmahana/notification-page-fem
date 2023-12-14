/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(1, 90%, 64%)",
        primary: "hsl(219, 85%, 26%)",
        background: "hsl(210, 60%, 98%)",
        foreground: "hsl(224, 21%, 14%)", 
        muted: {
          light: "hsl(219, 14%, 63%)",
          dark: "hsl(219, 12%, 42%)",
        },
        "light-gray-blue-1": "hsl(211, 68%, 94%)",
        "light-gray-blue-2": "hsl(205, 33%, 90%)",
      },
    },
  },
  plugins: [],
};
