import useGlobalState from './useGlobalState.js'

// useActiveBlogPostHref(href string) -> [activeBlogPostHref string, setter function]
const useActiveBlogPostHref = function (href) {
  const path = window.location.pathname
  console.log('useActiveBlogPostHref', { href, path })
  return useGlobalState('activeBlogPostHref', href == path ? href : null)
}

export default useActiveBlogPostHref
