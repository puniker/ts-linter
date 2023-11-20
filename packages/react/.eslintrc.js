const { eslint } = require('../shared-linter')
module.exports = {
  ...eslint,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
