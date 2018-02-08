const path = require('path');

const config = {
  entry: [
    './src/Skeleton.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'Skeleton.js'
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader',
        test: /\.(js|jsx)$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;
