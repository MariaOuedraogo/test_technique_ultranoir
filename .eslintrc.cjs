module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['error', 'double'],// Enforce the use of double quotes for strings
    'semi': ['error', 'always'], // Enforce the use of semicolons at the end of statements
    'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces of object literals
    'arrow-spacing': ['error', { 'before': true, 'after': true }] // Enforce consistent spacing around arrow function arrows


  },
}
