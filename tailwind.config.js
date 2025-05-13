module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-color00": "var(--neutral-color00)",
        "neutral-color10": "var(--neutral-color10)",
        "neutral-color100": "var(--neutral-color100)",
        "neutral-color20": "var(--neutral-color20)",
        "neutral-color40": "var(--neutral-color40)",
        "neutral-color60": "var(--neutral-color60)",
        "neutral-color80": "var(--neutral-color80)",
        "primary-colordark-blue": "var(--primary-colordark-blue)",
        "primary-colordark-blue-80": "var(--primary-colordark-blue-80)",
        "state-colorpink-red": "var(--state-colorpink-red)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-12px-bold": "var(--body-12px-bold-font-family)",
        "body-12px-medium": "var(--body-12px-medium-font-family)",
        "body-14px-bold": "var(--body-14px-bold-font-family)",
        "body-14px-medium": "var(--body-14px-medium-font-family)",
        "body-16px-bold": "var(--body-16px-bold-font-family)",
        "body-16px-medium": "var(--body-16px-medium-font-family)",
        "heading-24px-bold": "var(--heading-24px-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
