// cleanPath(path) -> clean string
const cleanPath = function (path) {
  if (path == '/') {
    return path
  }
  return path.replace(/\/$/g, '')
}

export default cleanPath
