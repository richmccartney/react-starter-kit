const webpack = require('webpack')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new ExtractTextPlugin('[name]-[hash].min.css')],
  optimization: {
    minimize: true
  },
})
