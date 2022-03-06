module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/max-len': ['error', {
      code: 120,
      template: 100,
    }],
    'vue/no-parsing-error': ['error', {
      'invalid-first-character-of-tag-name': false,
    }],
    'linebreak-style': ['error', 'windows'],
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
