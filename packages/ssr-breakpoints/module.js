const path = require('path')

module.exports = function () {
  // const options = Object.assign({}, moduleOptions)
  this.options.css.push('@biodiversity/ssr-breakpoints/style.css')
  this.addPlugin({src: path.resolve(__dirname, 'plugin.js')})
}
module.exports.meta = require('./package.json')
