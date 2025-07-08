import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {target: "es2020"},
  test: {
    globals: true, // Makes describe, test, expect available globally
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/tests/setupTests.js', // Optional: for global setup like @testing-library/jest-dom
    css: true, // If you need to process CSS in tests
  }
})
