import usePathPageMap from './usePathPageMap.js'

// PathTitle(path string) -> title string
const PathTitle = ReactElement(function (path) {
  const [pathPageMap] = usePathPageMap()
  if (pathPageMap.has(path)) {
    return pathPageMap.get(path).title
  }
  return 'rubico - [a]synchronous functional programming'
})

export default PathTitle
