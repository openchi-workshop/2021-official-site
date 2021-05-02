const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  chainWebpack: (config) => {
    config.module
      .rule("glsl")
      .test(/\.glsl$/)
      .use("webpack-glsl-loader")
      .loader("webpack-glsl-loader");
  },
};
