/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      "dark",
      "lofi",
      {
        mytheme: {
          primary: "#f3e8ff",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
