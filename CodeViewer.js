import ReactElement, {
  H1, H2, H3, H4, H5, H6,
  A, P, B, Button, Img,
  Span, Div, Section,
  Script, Iframe,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import inspect from './inspect.js'

const { useState, useEffect, useRef, useCallback, useReducer } = React

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const templateCodeSandbox = code => `
import rubico from 'https://unpkg.com/rubico/es.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const inspect = ${inspect.toString()}

const codeArea = document.createElement('code')
codeArea.style.fontSize = '1.25em'
const panel = document.createElement('pre')
codeArea.appendChild(panel)
document.body.appendChild(panel)

const console = {
  log: (...msgs) => {
    panel.innerHTML += msgs.map(inspect).join(' ')
    panel.innerHTML += '\\n'
  },
}

try {
  ${code}
} catch (e) {
  console.log(e)
}
`.trim()

// code => html_string_with_code
const generateHTMLScript = code => {
  const script = document.createElement('script')
  script.type = 'module'
  script.innerHTML = templateCodeSandbox(code)
  return script
}

// HTMLElement => HTMLDocument
const renderIntoNewHTMLDoc = el => {
  const html = document.createElement('html')
  const body = document.createElement('body')
  body.appendChild(el)
  html.appendChild(body)
  return html
}

// HTMLElement => html_string
const htmlToString = el => {
  const div = document.createElement('div')
  div.appendChild(el)
  return div.innerHTML
}

// code => iframeSrc
const transformCodeToIFrameSrc = pipe([
  generateHTMLScript,
  renderIntoNewHTMLDoc,
  htmlToString,
  encodeURI,
  encodedHtmlString => `data:text/html;charset=utf-8,${encodedHtmlString}`,
])

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
      readOnly: true,
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
