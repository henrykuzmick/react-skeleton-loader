module.exports = {
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
  },
};
