import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { execSync } from 'child_process'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "Atlas Docs",
  description: "Documentation for Engine3D, to look at how to get started",
  vite: {
    plugins: [
      {
        name: 'doxygen-generator',
        async buildStart() {
          console.log('[VitePress Build] Generating Doxygen documentation...')

          try {
            execSync('./build.sh', { 
              stdio: 'inherit',
              cwd: process.cwd()
            })
            console.log('[VitePress Build] Doxygen generation complete')
          } catch (error) {
            console.error('[VitePress Build] Doxygen generation failed:', (error as Error).message)
            throw error
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Docs', link: '/docs/html/index.html', target: '_self' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
		
  },
	markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
})
