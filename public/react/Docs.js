import Layout from './Layout.js'
import DocsNav from './DocsNav.js'
import useRubicoVersion from './useRubicoVersion.js'
import useDocsViewerFuncName from './useDocsViewerFuncName.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'

const defaultDocsViewerFuncName = 'pipe'

/**
 * @name Docs
 *
 * @synopsis
 * ```coffeescript [specscript]
 * Docs(props {
 * }) -> ReactElement
 * ```
 */
const Docs = ReactElement(props => {
  const { path, goto } = props

  const [rubicoVersion, setRubicoVersion] = useRubicoVersion()
  const [mdastMap, setMdastMap] = useState(new Map())
  const [docsViewerFuncName, setDocsViewerFuncName] = useDocsViewerFuncName('')

  useEffect(function updatePathToDefaultViewerFunc() {
    if (path == '/docs') {
      goto(`/docs/${defaultDocsViewerFuncName}`)
    }
  }, [path])

  useEffect(function updateDocsViewerFuncNameFromPath() {
    let funcName = path.replace('/docs/', '')
    if (funcName.startsWith('x')) {
      funcName = funcName.replace('x/', '')
    }
    setDocsViewerFuncName(funcName)
  }, [path])

  useEffect(function updateMdastMap() {
    if (rubicoVersion != mdastMap.version) {
      import(`../cronist/rubico-${rubicoVersion}.js`).then(module => {
        const cronistRubico = module.default
        const newMdastMap = new Map()
        cronistRubico.forEach(item => {
          newMdastMap.set(item.name, item.mdast)
        })
        newMdastMap.version = rubicoVersion
        setMdastMap(newMdastMap)
      })
    }
  }, [rubicoVersion])

  const mdastMapHasFuncName = mdastMap.has(docsViewerFuncName)
  const docsViewerMdast = mdastMap.get(docsViewerFuncName)

  return Layout(props, [
    Div({ id: 'docs' }, [
      DocsNav(props),

      mdastMap.size == 0 ? []
      : mdastMap.has(docsViewerFuncName) ? [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerFuncName)),

          Div({ class: 'synopsis' }, [
            ReactElementFromMdast({ mdast: docsViewerMdast.synopsis })
          ]),

          Div({ class: 'description' }, [
            ReactElementFromMdast({ mdast: docsViewerMdast.description })
          ]),
        ]),
      ]
      : [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerFuncName)),

          P(`Not supported in rubico ${rubicoVersion}`),
        ]),
      ],
    ]),
  ])
})

export default Docs
