import useRubicoVersion from './useRubicoVersion.js'
import inspect from './inspect.js'

const templateCodeSandbox = ({ code, imports }) => `
${
  Object.entries(imports)
    .map(([name, url]) => `import ${name} from '${url}'`)
    .join('\n')
}

const {
  pipe, compose,

  tap, forEach,

  switchCase,

  tryCatch,

  all, assign, get, set, pick, omit,

  map, filter, flatMap, reduce, transform,

  and, or, not, some, every,

  eq, gt, lt, gte, lte,

  thunkify, always, curry, __,
} = rubico

// deprecated methods from v1
const { fork } = rubico

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
console.error = console.log

;(async function () {
  try {
    ${code}
  } catch (e) {
    console.log(e)
  }
})()
`.trim()

// { code: string, imports: Object<string> } => html_string_with_code string
const generateHTMLScript = ({ code, imports }) => {
  const script = document.createElement('script')
  script.type = 'module'
  script.innerHTML = templateCodeSandbox({ code, imports })
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

// { code: string, imports: Object<string> } => iframeSrc
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
  imports: propsImports,
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

  const [rubicoVersion] = useRubicoVersion()

  const createImports = rubicoVersion => rubicoVersion == 'v1' ? ({
    ...propsImports,
    rubico: `https://unpkg.com/rubico@${rubicoVersion}/dist/rubico.es.min.js`,
  }) : ({
    ...propsImports,
    rubico: `https://unpkg.com/rubico@${rubicoVersion}/dist/rubico.es.min.js`,
    Transducer: `https://unpkg.com/rubico@${rubicoVersion}/dist/Transducer.es.min.js`,
  })

  const [imports, setImports] = useState(createImports(rubicoVersion))

  useEffect(function updateImports() {
    setImports(createImports(rubicoVersion))
  }, [rubicoVersion, propsImports])

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
          textAlign: 'center',
          borderRadius: '2px',
          width: '36px',
          padding: '0',
          cursor: 'pointer',
          height: '2em',
          outline: 'none',
          boxShadow: '1px 1px grey',
        },
        onClick: pipe([
          all({
            code: () => codeMirrors.get(codeAreaRef).getValue(),
            imports: always(imports),
          }),
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
