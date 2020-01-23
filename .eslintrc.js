module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-console': ['error', { allow: ['log', 'error'] }],
    'template-curly-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-use-before-define': ['error', { 'variables': false }],
    'no-shadow': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
  },
};
