import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F8F8F7",
        foreground: "#111111",
        card: {
          DEFAULT: "#FFFFFF",
          border: "#E7E7E5",
          hoverBorder: "#D2D2CF",
        },
        luzia: {
          bg: "#F8F8F7",
          card: "#FFFFFF",
          border: "#E7E7E5",
          borderHover: "#D2D2CF",
          heading: "#111111",
          body: "#666665",
          sub: "#737373",
          muted: "#888888",
          pillBg: "#F2F2F0",
          pillText: "#333333",
          pillHover: "#EAEAE8",
          purple: "#7430F7",
          green: "#00C047",
        },
      },
      borderRadius: {
        "section": "28px",
        "card": "24px",
        "inner": "18px",
        "pill": "9999px",
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-plus-jakarta)",
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        display: "-0.025em",
        tightest: "-0.035em",
      },
      maxWidth: {
        container: "1140px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(0, 0, 0, 0.04)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.03)",
        elevation: "0 12px 36px rgba(0, 0, 0, 0.06)",
      },
      scale: {
        "108": "1.08",
      },
    },
  },
  plugins: [],
};

export default config;
