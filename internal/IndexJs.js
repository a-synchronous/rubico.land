/**
 * @name IndexJs
 *
 * @synopsis
 * ```coffeescript [specscript]
 * IndexJs(options {
 *   env: string,
 * }) -> html string
 * ```
 */

const IndexJs = function (options) {
  const { env } = options

  return `
import './global.js'
// import './config-${env}.js'
import Root from './app/Root.js'

ReactDOM.hydrate(Root(), document.body)
  `.trim()
}

module.exports = IndexJs
