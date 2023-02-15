const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      // this is only required when adding a remote, by convention its used
      name: 'container',
      remotes: {
        appOne: 'appOne@http://localhost:8081/remoteEntry.js',
        appTwo: 'appTwo@http://localhost:8082/remoteEntry.js'
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
