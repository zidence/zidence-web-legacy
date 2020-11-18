module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': 'error',
    'react/destructuring-assignment': 'error',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 0,
  },
}
