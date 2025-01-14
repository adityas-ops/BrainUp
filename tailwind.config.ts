import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#292929",
        activeColor: "#DB2777",
        textColor: "#FFFFFF",
        textColorSecondary: "#CBCBCB",
        navColor:"4F4F4F",
        success: "#00FF00",
        error: "#FF0000",
        warning: "#FFA500",
      },
    },
  },
  plugins: [],
} satisfies Config;
