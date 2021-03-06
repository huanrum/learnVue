var path = require('path')
//var webpack = require('webpack')
//var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './../build/'+__dirname.split('\\').pop()),
    publicPath: '',
    filename: 'build.js'
  },
  resolve: {
        extensions: ['.vue','.ts','.jsx', '.js'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     title: 'Vue '+ __dirname.split('\\').pop(),
        //     template: path.resolve(__dirname, 'index.html'),
        //     inject: true
        // })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}