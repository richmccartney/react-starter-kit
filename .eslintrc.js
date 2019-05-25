module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'eslint-plugin-flowtype'],
  rules: {
    'no-debugger': 'warn',
    'prettier/prettier': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'MethodDefinition[kind="get"]',
        message: 'Please don’t use getters and setters',
      },
      {
        selector: 'MethodDefinition[kind="set"]',
        message: 'Please don’t use getters and setters',
      },
    ],
    'react/require-render-return': 0,
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [2, 'never'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': [
      2,
      {
        any: false,
        Object: true,
        Function: false,
      },
    ],
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        excludeArrowFunctions: true,
      },
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [2, 'never'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
}
