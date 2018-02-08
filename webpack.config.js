const path = require('path');

const config = {
  entry: [
    './src/Skeleton.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Skeleton.js',
    library: 'Skeleton',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_'
    }
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
