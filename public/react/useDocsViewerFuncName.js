import useGlobalState from './useGlobalState.js'

// useDocsViewerFuncName(defaultValue string) -> [value string, setter function]
const useDocsViewerFuncName = function (defaultValue) {
  return useGlobalState('docsViewerFuncName', defaultValue)
}

export default useDocsViewerFuncName
