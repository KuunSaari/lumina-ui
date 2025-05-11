import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: [
      'packages/**/*.{js,mjs,cjs,ts,vue,tsx}',
      'packages/**/**/*.{js,mjs,cjs,ts,vue,tsx',
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser,
    },
    rules: {
      // 关闭 ESLint 的分号检查，让 Prettier 控制分号
      semi: 'off',
      // 允许使用单引号，与 Prettier 的 singleQuote 配置一致
      quotes: ['error', 'single', { avoidEscape: true }],
      // 要求箭头函数的参数始终使用括号，与 Prettier 的 arrowParens 配置一致
      'arrow-parens': ['error', 'always'],
      // 控制每个属性单独占一行的规则与 Prettier 配置保持一致
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignores: ['a', 'span', 'img'],
        },
      ],
    },
  },
  pluginVue.configs['flat/essential'],
  {
    files: ['packages/**/*.vue', 'packages/**/**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': 'off'
    },
  },
])
