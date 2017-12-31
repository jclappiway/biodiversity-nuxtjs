module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: 'standard',
  plugins: [
    'jest',
    'vue'
  ],
  rules: {
    'arrow-spacing': 0,
    'block-spacing': 0,
    'brace-style': 0,
    'comma-spacing' : 0,
    'curly':0,
    'eqeqeq': 0,
    'func-call-spacing': 0,
    'generator-star-spacing': 0,
    'indent': 0,
    'key-spacing': 0,
    'keyword-spacing': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'no-return-await': 0,
    'no-trailing-spaces': 0,
    'padded-blocks' : 0,
    'quotes': 0,
    'semi': 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-infix-ops': 0,
    'space-in-parens': 0,
    'space-unary-ops': 0,
    'spaced-comment': 0,
    'unicode-bom': 0,
    'no-unexpected-multiline': 0
  },
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}
