import useGlobalState from './useGlobalState.js'
import getCookie from './getCookie.js'

// useRubicoVersion() -> [rubicoVersion string, setter function]
const useRubicoVersion = function () {
  return useGlobalState(
    'rubicoVersion',
    getCookie('rubicoVersion') ?? defaultRubicoVersion
  ) // global.js
}

export default useRubicoVersion
