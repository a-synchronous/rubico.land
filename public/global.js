const ReactElement = Arche(React)

window.ReactElement = ReactElement

for (const elementName in ReactElement) {
  window[elementName] = ReactElement[elementName]
}

window.Main = ReactElement('main')
window.Svg = ReactElement('svg')
window.Path = ReactElement('path')
window.Rect = ReactElement('rect')
window.Mask = ReactElement('mask')
window.Style = ReactElement('style')

for (const key in rubico) {
  window[key] = rubico[key]
}

window.useCallback = React.useCallback
window.useContext = React.useContext
window.useDebugValue = React.useDebugValue
window.useEffect = React.useEffect
window.useImperativeHandle = React.useImperativeHandle
window.useLayoutEffect = React.useLayoutEffect
window.useMemo = React.useMemo
window.useReducer = React.useReducer
window.useRef = React.useRef
window.useState = React.useState
