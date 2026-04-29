/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: { 
        colors: {
        bg: "#0a0a0f",
        surface: "#0d0d14",
        "purple-mid": "#534AB7",
        "purple-light": "#7F77DD",
        "purple-pale": "#AFA9EC",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
  },
  plugins: [],
}
}
