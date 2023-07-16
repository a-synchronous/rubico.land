const fsp = require('fs/promises')
const flatMap = require('rubico/flatMap')
const switchCase = require('rubico/switchCase')
const always = require('rubico/always')
const pathResolve = require('path').resolve

/**
 * @name pathWalk
 *
 * @synopsis
 * ```coffeescript [specscript]
 * pathWalk(path string, options {
 *   ignore: Array<string>, // ['node_modules', '.github', 'deploy']
 * }) -> foundPaths Promise<Array<string>>
 * ```
 */
const pathWalk = (path, { ignore = [] } = {}) => fsp.readdir(path, {
  withFileTypes: true,
}).then(flatMap(switchCase([
  dirent => ignore.includes(dirent.name),
  always([]),
  dirent => dirent.isDirectory(),
  ({ name }) => pathWalk(pathResolve(path, name), { ignore }),
  ({ name }) => [pathResolve(path, name)],
])))

module.exports = pathWalk
