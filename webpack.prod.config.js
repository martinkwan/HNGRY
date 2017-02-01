const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.*\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
