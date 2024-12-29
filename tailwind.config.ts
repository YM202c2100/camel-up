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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      drop: {
        "0%": { transform: "translateY(-100px) rotate(1deg)"},
        "100%": { transform: "translateY(0px) rotate(0deg)"}
      },
      "sand-right": {
        "0%": { transform: "scale(0)", opacity: "1"},
        "70%": { transform: "scale(1) skew(-10deg)", opacity: "0.8"},
        "100%": { transform: "scale(1.2) skew(-11deg)", opacity: "0.3", filter:"blur(4px)"},
      },
      "sand-left": {
        "0%": { transform: "scale(0)", opacity: "1"},
        "70%": { transform: "scale(1.2) skew(8deg)", opacity: "0.8"},
        "100%": { transform: "scale(1.5) skew(9deg)", opacity: "0.3", filter:"blur(4px)"},
      },
    },
    animation: {
      drop: "drop 0.3s",
      "sand-right": "sand-right 0.4s 0.3s ease-out",
      "sand-left": "sand-left 0.4s 0.3s ease-out",
    },
  },
  plugins: [],
} satisfies Config;
