
const webpack = require('webpack');
const path = require('path');

module.exports = {
     mode: 'development',
     resolve: {
          extensions: ['.js']
     },
     entry: __dirname + '/src/index.js',
     module: {
          rules: [
               {
                    test: /\.js$/,
                    use: {
                         loader: 'babel-loader',
                         options: {
                           presets: ['@babel/preset-env']
                         }
                       }
               },
               {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
               }
          ]
     },
     output: {
          path: __dirname + '/dist',
          filename: './bundle.js'
     }
}