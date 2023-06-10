const fs = require('fs')
const nodePath = require('path')

// pathResolve(path string) -> absPath string
const pathResolve = path => nodePath.resolve(path)

/**
 * @name FileSystem
 *
 * @synopsis
 * ```coffeescript [specscript]
 * new FileSystem(options {
 *   cwd: string,
 * })
 * ```
 */
const FileSystem = function (options) {
  this.cwd = options.cwd
}

// new FileSystem(...).rmrf(path string) -> Promise<>
FileSystem.prototype.rmrf = async function rmrf(path) {
  const absPath = pathResolve(this.cwd, path)
  await fs.promises.rm(absPath, { recursive: true, force: true })
}

// new FileSystem(...).mkdirp(path string) -> Promise<>
FileSystem.prototype.mkdirp = async function mkdirp(path) {
  const absPath = pathResolve(this.cwd, path)
  await fs.promises.mkdir(absPath, { recursive: true })
}

// new FileSystem(...).writeFile(path string, data string) -> Promise<>
FileSystem.prototype.writeFile = async function writeFile(path, data) {
  const directoryPath = path.split('/').slice(0, -1).join('/')
  await this.mkdirp(directoryPath)
  const absPath = pathResolve(this.cwd, path)
  await fs.promises.writeFile(absPath, data)
}

module.exports = FileSystem
