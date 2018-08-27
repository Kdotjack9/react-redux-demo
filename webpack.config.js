const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',

  entry: `${path.join(__dirname, 'src')}/index.js`,

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js(x)?/,
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new Dotenv()
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
