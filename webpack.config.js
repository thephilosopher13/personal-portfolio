const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index : './src/pages/index.js',
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
      filename: 'index.html',
      template: './index.html',
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'about.html',
      template: './about.html',
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'contact.html',
      template: './contact.html',
      chunks: ["contact"],
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
