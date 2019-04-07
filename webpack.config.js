const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'app.js')
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './public'),
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
