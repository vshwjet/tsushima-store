/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#001a2c",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF3333",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#164e63",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#0ea5e9",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        midorima: ['"Midorima"', 'sans-serif'],
        tsushima: ['"Tsushima"', 'sans-serif'],
        futura: ['"Futura"', 'sans-serif'],
      },
    },
  },
}

