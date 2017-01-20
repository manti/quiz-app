const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/App.js',
  devtool: 'eval', // not required for prod builds
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/', // Where your static assets are
    historyApiFallback: true,
    port: '5050',
    proxy: {
      '/instahms/**': {
        target: 'https://private-469d8-instaspringapis.apiary-mock.com',
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    chunks: true,
    reasons: true // Show failure reasons
  },
  module: {
    rules: [
      {
        enforce: 'pre', // run before the build process
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false // not inling images
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  performance: {
    hints: false
  }
}
