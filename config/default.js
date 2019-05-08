const merge = require('webpack-merge')

let defaultLocalConfig
try {
  defaultLocalConfig = require('./default.local')
} catch (e) {
  defaultLocalConfig = {}
}

const config = {
  LOGO_PATH: '"./assets/logo.png"',
  APP_NAME: '"LyricBook"'
};

module.exports = merge(config, defaultLocalConfig)
