const sass = require('sass');

module.exports = {
  style: {
    modules: {
      localIdentName: '[local]__[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
    sass: {
      loaderOptions: {
        implementation: sass,
      },
    },
    css: {
      loaderOptions: {
        modules: {
          exportLocalsConvention: 'camelCase',
        },
      },
    },
  },
};
