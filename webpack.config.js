const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home : './src/pages/home.js',
    about: './src/pages/about.js',
    projects: './src/pages/projects.js',
    contact:'./src/pages/contact.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './/home.html',
      filename: './home.html',
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'about.html',
      template: './about.html',
      chunks: ["about"],
    }),
  ],
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
