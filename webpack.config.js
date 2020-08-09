const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const WebpackPwaManifest  = require('webpack-pwa-manifest')
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Personal Quiz',
      favicon: './favicon.ico',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    }),
    new WebpackPwaManifest({
      "name": "Personal Quiz",
      "short_name": "Personal Quiz",
      "start_url": "/",
      "display": "standalone",
      "icons": [{
        "src": "./pqicon.png",
        "sizes": "128x128",
        "type": "image/png"
      }],
      "background_color": "#172225",
      "theme_color": "#172225"
    })
 ]
}   