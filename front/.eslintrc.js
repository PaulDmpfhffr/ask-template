module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'double'],
    semi: ['warn', 'always'],
    'no-unused-vars': 'warn',
  },
};
