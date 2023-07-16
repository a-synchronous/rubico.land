require('rubico/global')
const fs = require('fs')
const pathWalk = require('./pathWalk')
const readFirstLine = require('./readFirstLine')
const contentTypeFromExt = require('./contentTypeFromExt')

/**
 * @name S3Website
 *
 * @synopsis
 * ```coffeescript [specscript]
 * new S3Website(s3Bucket S3Bucket) -> S3Website
 * ```
 */
const S3Website = function (s3Bucket) {
  this.s3Bucket = s3Bucket
  return this
}

/**
 * @name S3Website.prototype.deploy
 *
 * @synopsis
 * ```coffeescript [specscript]
 * new S3Website(s3Bucket S3Bucket).deploy(options {
 *   rootPath: string,
 *   concurrency?: number,
 *   redirectMap?: Map<(key string)=>(url string)>,
 *   dryRun?: boolean,
 * }) -> Promise<>
 * ```
 */

S3Website.prototype.deploy = async function (options) {
  const {
    rootPath,
    concurrency = 10,
    redirectMap = new Map(),
    dryRun = false,
  } = options

  return pipe(pathWalk(rootPath), [
    map.pool(concurrency, async filePath => {
      let contentType = 'text/plain'
      const firstLine = await readFirstLine(filePath)
      if (firstLine.includes('<!DOCTYPE html>')) {
        contentType = 'text/html'
      } else if (filePath.includes('.')) {
        contentType = contentTypeFromExt(filePath.split('.').slice(-1)[0])
      }

      const key = filePath.replace(`${rootPath}/`, '')

      const shouldCreateRedirect = redirectMap.has(key)

      if (shouldCreateRedirect) {
        console.log('Redirecting', key, '->', redirectMap.get(key))
      }

      let didDryRun = false
      if (dryRun) {
        didDryRun = true
        // noop
      } else {
        await this.s3Bucket.putObject(key, await fs.promises.readFile(filePath), {
          ContentType: contentType,
          Expires: new Date(),

          ...shouldCreateRedirect ? {
            WebsiteRedirectLocation: redirectMap.get(key),
          } : {},

        })
      }

      const { HOME } = process.env
      console.log(
        `[${contentType}]`,
        filePath.replace(HOME, '~'),
        '->',
        filePath.replace(rootPath, ''),
      )

      return { key, didCreateRedirect: shouldCreateRedirect, didDryRun }
    }),
  ])
}

module.exports = S3Website
