require('rubico/global')
const fs = require('fs')
const contentTypeFromExt = require('./contentTypeFromExt')
const pathWalk = require('presidium/internal/pathWalk')

/**
 * @name StaticCache
 *
 * @synopsis
 * ```coffeescript [specscript]
 * new StaticCache(options {
 *   directory: string,
 * }) -> staticCache Map<(url string)=>(content string)>
 * ```
 */
class StaticCache {
  constructor(options) {
    this.directory = options.directory
    this.ready = this.readyPromise()
  }

  // readyPromise() -> Promise<>
  async readyPromise() {
    const staticFilenames = await pathWalk(this.directory)
    this.cache = new Map()
    await forEach(staticFilenames, async filename => {
      const buf = await fs.promises.readFile(filename)
      //const content = buf.toString('utf8')
      const url = filename.replace(this.directory, '/').replace(/\/\//g, '/')
      const ext = filename.split('.').slice(-1)[0]
      this.cache.set(url, {
        content: buf,
        contentType: contentTypeFromExt(ext),
      })
    })
  }

  has(...args) {
    return this.cache.has(...args)
  }

  get(...args) {
    return this.cache.get(...args)
  }

  async readFileFromUrl(url) {
    const filename = `${this.directory}/${url}`.replace(/\/\//g, '/')
    const ext = filename.split('.').slice(-1)[0]
    return {
      content: await fs.promises.readFile(filename),
      contentType: contentTypeFromExt(ext),
    }
  }
}

module.exports = StaticCache
