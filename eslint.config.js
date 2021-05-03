module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js'], moduleDirectory: ['node_modules', './'] },
    },
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    camelcase: 0,
    'import/order': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'react/jsx-no-target-blank': 0,
    'default-case': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 0,
  },
  ignores: ['next.config.js'],
};
