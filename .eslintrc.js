module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
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
      alias: [['src', './src']],
    },
  },
  plugins: ['react', 'eslint-plugin-react', 'eslint-plugin-react-hooks', 'unicorn'],
  rules: {
    'prettier/prettier': 'error', // if prettier and eslint conflict, throw to eslint --fix
  },
}
