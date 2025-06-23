// ext string => contentType string
const contentTypeFromExt = ext => {
  switch (ext) {
    case 'webmanifest':
      return 'application/manifest+json'
    case 'json':
      return 'application/json'
    case 'svg':
      return 'image/svg+xml'
    case 'js':
      return 'text/javascript'
    case 'html':
      return 'text/html'
    case 'css':
      return 'text/css'
    case 'gif':
      return 'image/gif'
    case 'jpg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'ico':
      return 'image/x-icon'
    case 'mp3':
      return 'audio/mpeg'
    case 'mp4':
      return 'video/mp4'
    case 'xml':
      return 'text/xml'
    default:
      return 'text/plain'
  }
}

module.exports = contentTypeFromExt
