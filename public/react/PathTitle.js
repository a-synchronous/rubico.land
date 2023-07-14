import pathPageMap from './pathPageMap.js'

// PathTitle(path string) -> title string
const PathTitle = function (path) {
  if (pathPageMap.has(path)) {
    return pathPageMap.get(path).title
  }
  return 'rubico - [a]synchronous functional programming'
}

export default PathTitle
