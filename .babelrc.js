module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        modules: false,
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: ['@vue/babel-plugin-jsx'],
}
