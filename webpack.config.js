const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
    test: './src/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'build'),
    host: '0.0.0.0',
    port: 9001,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'React',
  //     root: 'React'
  //   }
  // }
}
