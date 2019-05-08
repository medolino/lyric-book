'use strict'
const merge = require('webpack-merge')
const defaultConfig = require('./default')

const config = {
  NODE_ENV: '"production"'
};

module.exports = merge(defaultConfig, config)
