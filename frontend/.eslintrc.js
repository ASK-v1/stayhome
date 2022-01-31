module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['airbnb-typescript', 'react-app'],
};
