// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   }
// }) 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update this block 👇
export default defineConfig({
  plugins: [react()],
  base: '/BA-Portfolio/', // <-- Update this to match your GitHub repo name
  server: {
    port: 3000,
    open: true
  }
})
