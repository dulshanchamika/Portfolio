import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
