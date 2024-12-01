require('rubico/global')
const fs = require('fs')
const IndexHtml = require('./IndexHtml')
const IndexJs = require('./IndexJs')
const package = require('../package.json')

/**
 * @name ServePage
 *
 * @synopsis
 * ```coffeescript [specscript]
 * ServePage({
 *   env: string,
 *   entrypoint?: string,
 *   bypassPublicCache?: boolean,
 *   htmlServerPort: number,
 *   dependencies {
 *     publicCache: Map<(url string)=>(content string)>,
 *     scripts: Array<string>,
 *     stylesheets: Array<string>,
 *   },
 * }) -> servePage (request Request, response Response)=>()
 * ```
 */
const ServePage = function ({
  env,
  entrypoint = '/index.js',
  bypassPublicCache = false,
  htmlServerPort,
  dependencies,
}) {
  const {
    publicCache,
    scripts,
    stylesheets,
  } = dependencies

  return async function servePage(request, response) {
    const url = new URL(request.url, 'http://throwaway')
    const path = decodeURIComponent(url.pathname)
    const clean = path

    console.log('path', path)

    if (publicCache.has(path)) {
      const { content, contentType } =
        bypassPublicCache
        ? await publicCache.readFileFromUrl(path)
        : publicCache.get(path)
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': contentType,
      })
      response.end(content)
    }
    else if (clean == '/index.js') {
      const js = IndexJs({ env })
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/javascript',
      })
      response.end(js)
    }
    else if (clean == '/') {
      const html = IndexHtml({
        title: 'rubico - [a]synchronous functional programming',
        description: 'The official online shop for CLOUŢ.',
        path: '/',
      })
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html',
      })
      response.end(html)
    }
    else {
      console.log('not found', request.method, request.url)
      response.writeHead(404, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
      })
      response.end('Not Found')
    }
  }
}

module.exports = ServePage
