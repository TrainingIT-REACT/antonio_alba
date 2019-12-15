// Libraries.
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'img': path.resolve(__dirname, 'img')
    }
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'src'),
    disableHostCheck: true,
    publicPath: '/',
    historyApiFallback: true,
    open: false,
    proxy: {
      '/albums': {
          target: 'http://localhost:3001',
          secure: false
      },
      '/songs': {
          target: 'http://localhost:3001',
          secure: false
      },
      '/images': {
          target: 'http://localhost:3001',
          secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/commons.css",
      chunkFilename: "css/commons.css"
    }),
    new CopyWebpackPlugin([
      { from: "src/img", to: "img" }
    ]),
    new CopyWebpackPlugin([
      { from: "public/manifest.json", to: "manifest.json" }
    ]),
    new CopyWebpackPlugin([
      { from: "public/favicon.ico", to: "favicon.ico" }
    ]),
    new CopyWebpackPlugin([
      { from: "src/serviceWorker.js", to: "serviceWorker.js" }
    ])
  ]
};
