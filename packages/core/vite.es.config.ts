import { defineConfig } from 'vite'
import { readdirSync } from 'fs'
import { resolve } from 'path'
// @ts-ignore
import shell from 'shelljs'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import hooks from './hooksPlugin'
import terser from '@rollup/plugin-terser'

const TRY_MOVE_STYLES_DELAY = 800 as const

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

function moveStyles() {
  try {
    readdirSync('./dist/es/theme')
    shell.mv('./dist/es/theme', './dist')
  } catch (_) {
    setTimeout(moveStyles, TRY_MOVE_STYLES_DELAY)
  }
}

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 注意，DTS默认使用tsconfig.json，这里指定tsconfig.app.json，因为tsconfig.json没有include
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types'
    }),
    hooks({
      rmFiles: ['./dist/es', './dist/theme'],
      afterBuild: moveStyles
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ['log'],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          '@DEV': JSON.stringify(isDev),
          '@PROD': JSON.stringify(isProd),
          '@TEST': JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    })
  ],
  build: {
    outDir: 'dist/es',
    cssCodeSplit: true,
    minify: false,
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
          if (
            assetInfo.type === 'asset' &&
            /\.(css)$/i.test(assetInfo.name as string)
          ) {
            console.log('Build:', assetInfo.name)
            return 'theme/[name].[ext]'
          }
          return assetInfo.name as string
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (
            id.includes('/packages/utils') ||
            id.includes('plugin-vue:export-helper')
          ) {
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
