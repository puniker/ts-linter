module.exports = {

  root: true,
  rules: {
    quotes: ['error', 'single'],
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'dot-notation': 'error',
    'no-var': 'error',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // 'react-native/no-inline-styles': 0,
    // 'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 'error', // For checking rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // For checking hook dependencies
  },
  extends: '@react-native-community',
  plugins: ['react-hooks']
}
