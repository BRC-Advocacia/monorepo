/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-escuro": "var(--azul-escuro)",
        amarelo: "var(--amarelo)",
        "cinza-escuro": "var(--cinza-escuro)",
        "cinza-azulado": "var(--cinza-azulado)",
        "azul-claro": "var(--azul-claro)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
