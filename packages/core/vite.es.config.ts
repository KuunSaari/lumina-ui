import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs'

const COMP_NAMES = [
  'Icon',
  'Button',
  'ButtonGroup'
] as const

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)
}


export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 注意，DTS默认使用tsconfig.json，这里指定tsconfig.app.json，因为tsconfig.json没有include
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'LuminaUI',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome'
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes('/packages/utils')) {
            return 'utils'
          }
          for (const name of getDirectoriesSync('../components')) {
            if (id.includes(`/packages/components/${name}`)) {
              return name
            }
          }
        }
      }
    }
  }
})
