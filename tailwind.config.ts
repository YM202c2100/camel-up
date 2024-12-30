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
        "0%":   { transform:"translateX(3px)    scale(1.00, 1.00)"},
        "5%":   { transform:"translateX(-3.2px) scale(1.02, 1.01)"},
        "10%":  { transform:"translateX(3.4px)  scale(1.04, 1.02)"},
        "15%":  { transform:"translateX(-3.6px) scale(1.06, 1.03)"},
        "20%":  { transform:"translateX(3.8px)  scale(1.08, 1.04)"},
        "25%":  { transform:"translateX(-4px)   scale(1.10, 1.05)"},
        "30%":  { transform:"translateX(4.2px)  scale(1.12, 1.06)"},
        "35%":  { transform:"translateX(-4.4px) scale(1.14, 1.07)"},
        "40%":  { transform:"translateX(4.6px)  scale(1.16, 1.08)"},
        "45%":  { transform:"translateX(-4.8px) scale(1.18, 1.09)"},
        "50%":  { transform:"translateX(5px)    scale(1.20, 1.10)"},
        "55%":  { transform:"translateX(-5px)   scale(1.22, 1.11)"},
        "60%":  { transform:"translateX(5px)    scale(1.24, 1.12)"},
        "65%":  { transform:"translateX(-5px)   scale(1.26, 1.13)"},
        "70%":  { transform:"translateX(5px)    scale(1.28, 1.14)"},
        "75%":  { transform:"translateX(-5px)   scale(1.30, 1.15)"},
        "80%":  { transform:"translateX(5px)    scale(1.32, 1.16)"},
        "85%":  { transform:"translateX(-5px)   scale(1.34, 1.17)"},
        "90%":  { transform:"translateX(5px)    scale(1.36, 1.18)"},
        "95%":  { transform:"translateX(-5px)   scale(1.38, 1.19)"},
        "100%": { transform:"translateX(5px)    scale(1.40, 1.20)"}
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
