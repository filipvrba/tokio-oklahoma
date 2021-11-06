const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const portFinderSync = require('portfinder-sync');
const ip = require('internal-ip');
//const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const infoColor = (_message) =>
{
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`
}

module.exports = {
  mode: "development",
  devServer: {
    host: '0.0.0.0',
    port: portFinderSync.getPort(8080),
    contentBase: './dist',
    watchContentBase: true,
    open: true,
    https: false,
    useLocalIp: true,
    disableHostCheck: true,
    overlay: true,
    noInfo: true,
    after: function(app, server, compiler)
    {
        const port = server.options.port
        const https = server.options.https ? 's' : ''
        const localIp = ip.v4.sync()
        const domain1 = `http${https}://${localIp}:${port}`
        const domain2 = `http${https}://localhost:${port}`
        
        console.log(`Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`)
    }
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      },
      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use:
        [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'assets/fonts/'
                }
            }
        ]
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: path.resolve(__dirname, '../static') }
        ]
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./index_template.html"
    })
  ]
};
