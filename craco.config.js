module.exports = {
  style: {
    modules: {
      localIdentName: "[local]__[hash:base64:5]",
      exportLocalsConvention: "camelCase",
    },
    sass: {
      loaderOptions: {
        implementation: require("sass"),
      },
    },
  },
};
