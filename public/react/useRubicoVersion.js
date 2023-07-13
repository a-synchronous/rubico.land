import useGlobalState from './useGlobalState.js'

// useRubicoVersion() -> [rubicoVersion string, setter function]
const useRubicoVersion = function () {
  return useGlobalState('rubicoVersion', defaultRubicoVersion) // global.js
}

export default useRubicoVersion
