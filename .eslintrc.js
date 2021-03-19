module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended', // resolve eslint and prettier conflict
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
      alias: [['src', './src']],
    },
  },
  plugins: ['react', 'eslint-plugin-react', 'eslint-plugin-react-hooks', 'unicorn'],
  rules: {
    'no-use-before-define': 'off',

    '@typescript-eslint/no-var-requires': 'off',

    'react/jsx-filename-extension': 'off',
    'unicorn/prefer-query-selector': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
