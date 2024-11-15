import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px", 
    },
    fontFamily:{
      primary: "var(--font-jetBrains)"
    },
    extend: {
      colors:{
        primary: '#1c1c22',
        accent:{
          DEFAULT: "#00ff99",
          hover:"#00e187",
        }
      },
      keyframes: {
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderRotate: {
          '0%, 100%': { borderColor: 'red', borderRadius: '0' },
          '50%': { borderColor: 'blue', borderRadius: '50%' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        borderAnimation: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'cyan' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'border-animation': 'borderAnimation 2s infinite',
        'border-rotate': 'borderRotate 4s infinite linear',
        'rotate-border': 'rotateBorder 4s infinite linear',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config