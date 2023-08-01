const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {


  entry: "./src/index.js",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),

    },
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),

      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],
  },

};