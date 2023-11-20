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
  },
}
