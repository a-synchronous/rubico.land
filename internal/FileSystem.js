const fs = require('fs')
const nodePath = require('path')

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
  await fs.promises.rm(`${this.cwd}/${path}`, { recursive: true, force: true })
}

// new FileSystem(...).mkdirp(path string) -> Promise<>
FileSystem.prototype.mkdirp = async function mkdirp(path) {
  await fs.promises.mkdir(`${this.cwd}/${path}`, { recursive: true })
}

// new FileSystem(...).writeFile(path string, data string) -> Promise<>
FileSystem.prototype.writeFile = async function writeFile(path, data) {
  const directoryPath = path.split('/').slice(0, -1).join('/')
  await this.mkdirp(directoryPath)
  await fs.promises.writeFile(`${this.cwd}/${path}`, data)
}

module.exports = FileSystem
