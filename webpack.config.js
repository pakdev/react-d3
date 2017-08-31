var path = require('path');

module.exports = {
    entry: { 
      app: [
        path.resolve(__dirname, 'app/main.js')
      ]
    },
    devServer: {
      contentBase: './build',
      port: 8080,
      hot: true
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.css$/, loader: 'style!css'
      }]
    }
};
