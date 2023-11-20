const { eslint } = require('../shared-linter')
module.exports = {
  ...eslint,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    // 'react-native/no-inline-styles': 0,
    // 'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error', // For checking rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // For checking hook dependencies
  },
}
