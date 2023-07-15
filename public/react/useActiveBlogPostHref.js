import useGlobalState from './useGlobalState.js'

// useActiveBlogPostHref() -> [activeBlogPostHref string, setter function]
const useActiveBlogPostHref = function () {
  return useGlobalState('activeBlogPostHref', null)
}

export default useActiveBlogPostHref
