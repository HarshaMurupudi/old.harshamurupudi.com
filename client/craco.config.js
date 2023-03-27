const path = require('path');
const { addAfterLoader, loaderByName } = require('@craco/craco');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
        test: /\.mdx?$/,
        loader: require.resolve('@mdx-js/loader'),
      });
      return webpackConfig;
    },
  },
};
