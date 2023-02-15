const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'appOne',
      filename: 'remoteEntry.js',
      exposes: {
        './AppOneIndex': './src/bootstrap',
      },
      //shared: ['faker'],
      shared: {
        faker: {
          singleton: true,
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
