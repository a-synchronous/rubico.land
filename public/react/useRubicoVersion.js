import useGlobalState from './useGlobalState.js'

// useRubicoVersion() -> [rubicoVersion string, setter function]
const useRubicoVersion = function () {
  return useGlobalState('rubicoVersion', 'v2')
}

export default useRubicoVersion
