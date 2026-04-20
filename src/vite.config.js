import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // NOTE: If you are deploying to GitHub Pages, uncomment the line below 
  // and replace 'your-repo-name' with the actual name of your repository.
  base: '/chaima-portfolio/', 

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    // Increases the chunk size limit warning to avoid warnings from Three.js
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          framer: ['framer-motion']
        }
      }
    }
  }
});
