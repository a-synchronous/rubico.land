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
import rubico from 'https://unpkg.com/rubico@latest/es.js'

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

;(async function () {
  try {
    ${code}
  } catch (e) {
    console.log(e)
  }
})()
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

// { code } -> codeRunner React.Element
const CodeRunner = ReactElement(({
  code,
  theme = 'rubico',
  lineWrapping = true,
  lineNumbers = true,
}) => {
  const codeAreaRef = useRef(null)
  const outputAreaRef = useRef(null)
  const [outputAreaSrc, setOutputAreaSrc] = useState(null)
  useEffect(() => {
    if (!codeMirrors.has(codeAreaRef)) return
    codeMirrors.get(codeAreaRef).getDoc().setValue(code)
    setOutputAreaSrc(null)
  }, [code])
  useEffect(() => {
    const cm = CodeMirror(codeAreaRef.current, {
      value: code,
      mode: 'javascript',
      lineWrapping,
      lineNumbers,
      theme,
    })
    codeMirrors.set(codeAreaRef, cm)
    return () => {
      codeMirrors.delete(codeAreaRef)
    }
  }, [])

  return Div([
    Div({ ref: codeAreaRef }),
    Div({ style: { height: '.5em' } }),
    Div({
      style: {
        display: 'grid',
        gridTemplateColumns: '36px 26px 1fr',
      },
    }, [
      Button({
        style: {
          borderRadius: '2px',
          cursor: 'pointer',
          height: '2em',
        },
        onClick: pipe([
          () => codeMirrors.get(codeAreaRef).getValue(),
          transformCodeToIFrameSrc,
          iframeSrc => {
            setOutputAreaSrc(iframeSrc)
          },
        ]),
      }, ['run']),
      Span({
        style: {
          visibility: outputAreaSrc ? 'visible' : 'hidden',
          color: '#3f72fc',
          fontSize: '.80em',
          fontWeight: '625',
          position: 'relative',
          right: '-0.75em',
          bottom: '-0.65em',
        },
      }, [' >']),
      Iframe({
        style: {
          visibility: outputAreaSrc ? 'visible' : 'hidden',
          height: '6em',
          position: 'relative',
          bottom: '-0.05em',
          width: '99%',
        },
        src: outputAreaSrc,
      }),
    ]),
  ])
})

export default CodeRunner
