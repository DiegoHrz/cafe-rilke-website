import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "parallax" : 'url("../public/assets/home-cafe-2.jpg")',
      },
      fontFamily: {
        "rilke-aldus": "Aldus1",
        "rilke-garamond": "Garamond",
        "rilke-monecias": "Monecias",
      },
      colors: {
        "rilke-red": "#E92933",
      },
    },
  },
  plugins: [],
};
export default config;
