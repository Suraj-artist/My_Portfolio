import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 2.5s linear infinite", // For spinning animation
        glow: "glow 2s infinite", // For glowing animation
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #00ffcc, 0 0 30px #00ffcc" },
          "50%": { boxShadow: "0 0 25px #00ffcc, 0 0 50px #00ffcc" },
        },
      },
    },
  },
}) 