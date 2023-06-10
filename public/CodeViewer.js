import inspect from './inspect.js'

const ReactElement = Arche(React)

const {
  H1, H2, H3, H4, H5, H6,
  A, P, B, Button, Img,
  Span, Div, Section,
  Script, Iframe,
  Ul, Ol, Li,
  Code, Pre,
} = ReactElement

const { useState, useEffect, useRef, useCallback, useReducer } = React

const codeMirrors = new Map()

// { code } -> codeViewer React.Element
const CodeViewer = ReactElement(({
  code,
  mode = 'javascript',
  theme = 'default',
  lineWrapping = true,
  lineNumbers = false,
}) => {
  const codeAreaRef = useRef(null)
  useEffect(() => {
    if (!codeMirrors.has(codeAreaRef)) return
    codeMirrors.get(codeAreaRef).getDoc().setValue(code)
  }, [code])
  useEffect(() => {
    const cm = CodeMirror(codeAreaRef.current, {
      value: code,
      mode,
      lineWrapping,
      lineNumbers,
      theme,
      readOnly: 'nocursor',
      // cursorBlinkRate: -1,
    })
    codeMirrors.set(codeAreaRef, cm)
    return () => {
      codeMirrors.delete(codeAreaRef)
    }
  }, [])

  return Div([
    Div({ ref: codeAreaRef }),
  ])
})

export default CodeViewer
