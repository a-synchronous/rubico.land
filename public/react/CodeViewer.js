import inspect from './inspect.js'
import CopyIcon from './CopyIcon.js'
import CopySuccessIcon from './CopySuccessIcon.js'
import copyToClipboard from './copyToClipboard.js'

const codeMirrors = new Map()

// { code } -> codeViewer React.Element
const CodeViewer = ReactElement(({
  code,
  mode,
  metadata = {},
}) => {
  const [hover, setHover] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  console.log(metadata)
  const { disableCopyButton } = metadata

  return Div({
    class: hover ? 'code-viewer hover' : 'code-viewer',
    onMouseEnter() {
      setHover(true)
    },
    onMouseLeave() {
      setHover(false)
    }
  }, [
    disableCopyButton ? [] : Button({
      class: 'copy-button',
      onClick() {
        copyToClipboard(code)
        setCopySuccess(true)
        setTimeout(() => {
          setCopySuccess(false)
        }, 500)
      },
    }, [copySuccess ? CopySuccessIcon() : CopyIcon()]),
    mode == "javascript"
      ? Code([Pre(ArcheHighlight.parseJavaScript(code))])
      : Code([Pre(code)]),
  ])
})

export default CodeViewer
