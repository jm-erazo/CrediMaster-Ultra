import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia 'simulador-credito' por el nombre exacto de tu repositorio en GitHub
  base: "/simulador-credito/",
})
