module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  plugins: [
    'security',
    'chai-expect',
  ],
  extends: ['airbnb-base', 'plugin:security/recommended'],
  rules: {
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': ["**/*spec.js", "acceptance-test/**/*"]
    }],
    'chai-expect/missing-assertion': 2,
    'chai-expect/terminating-properties': 1,
  }
};
