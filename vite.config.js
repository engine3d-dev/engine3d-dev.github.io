import { defineConfig } from 'vite'
import { execSync } from 'child_process'
import path from 'path'

export default defineConfig({
  plugins: [
    {
      name: 'doxygen-generator',
      async buildStart() {
        console.log('[Vite Build] Generating Doxygen documentation...')

        try {
          execSync('./build.sh', { 
            stdio: 'inherit',
            cwd: process.cwd()
          })
          console.log('[Vite Build] Doxygen generation complete')
        } catch (error) {
          console.error('[Vite Build] Doxygen generation failed:', error.message)
          throw error
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
