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
      shake: {
        "0%": { transform:"translateX(3px) scale(1)"},
        "5%": { transform:"translateX(-3.2px) scale(1.02)"},
        "10%": { transform:"translateX(3.4px) scale(1.04)"},
        "15%": { transform:"translateX(-3.6px) scale(1.06)"},
        "20%": { transform:"translateX(3.8px) scale(1.08)"},
        "25%": { transform:"translateX(-4px) scale(1.10)"},
        "30%": { transform:"translateX(4.2px) scale(1.12)"},
        "35%": { transform:"translateX(-4.4px) scale(1.14)"},
        "40%": { transform:"translateX(4.6px) scale(1.16)"},
        "45%": { transform:"translateX(-4.8px) scale(1.18)"},
        "50%": { transform:"translateX(5px) scale(1.20)"},
        "55%": { transform:"translateX(-5px) scale(1.22)"},
        "60%": { transform:"translateX(5px)  scale(1.24)"},
        "65%": { transform:"translateX(-5px)  scale(1.26)"},
        "70%": { transform:"translateX(5px)  scale(1.28)"},
        "75%": { transform:"translateX(-5px)  scale(1.30)"},
        "80%": { transform:"translateX(5px)  scale(1.32)"},
        "85%": { transform:"translateX(-5px)  scale(1.34)"},
        "90%": { transform:"translateX(5px)  scale(1.36)"},
        "95%": { transform:"translateX(-5px)  scale(1.38)"},
        "100%": { transform:"translateX(5px) scale(1.4)"}
      },
      "sand-right": {
        "0%": { transform:"scale(0)", opacity:"1"},
        "70%": { transform:"scale(1) skew(-10deg)", opacity:"0.8"},
        "100%": { transform:"scale(1.2) skew(-11deg)", opacity:"0", filter:"blur(4px)"},
      },
      "sand-left": {
        "0%": { transform:"scale(0)", opacity:"1"},
        "70%": { transform:"scale(1.2) skew(8deg)", opacity:"0.8"},
        "100%": { transform:"scale(1.5) skew(9deg)", opacity:"0", filter:"blur(4px)"},
      },
    },
    animation: {
      pyramid: "drop 0.3s forwards, shake 1.5s 1.3s forwards",
      "sand-right": "sand-right 0.4s 0.3s ease-out both",
      "sand-left": "sand-left 0.4s 0.3s ease-out both",
    },
  },
  plugins: [],
} satisfies Config;
