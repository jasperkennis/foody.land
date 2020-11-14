module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'template-curly-spacing': 'off',
    indent: 'off',
    'no-console': 'off',
    'linebreak-style': [
        'error',
        'unix'
    ],
    quotes: [
        'error',
        'single'
    ],
    semi: [
        'error',
        'never'
    ],
    'comma-dangle': [
        'error',
        'always-multiline'
    ],
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
};
