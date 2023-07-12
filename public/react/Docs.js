import Layout from './Layout.js'
import Docs_1_9_7 from './Docs_1_9_7.js'
import DocsNav from './DocsNav.js'
import cronistRubico from '../cronist/rubico-v2.js'
import useRubicoVersion from './useRubicoVersion.js'
import useDocsViewerFuncName from './useDocsViewerFuncName.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'

const defaultMdastMap = new Map()
cronistRubico.forEach(item => {
  defaultMdastMap.set(item.name, item.mdast)
})
defaultMdastMap.version = 'v2'

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

  console.log('Docs', { path })

  const [rubicoVersion] = useRubicoVersion()
  const [mdastMap, setMdastMap] = useState(defaultMdastMap)
  const [docsViewerFuncName, setDocsViewerFuncName] = useDocsViewerFuncName('')

  useEffect(function updatePathToDefaultViewerFunc() {
    if (path == '/docs') {
      goto(`/docs/${defaultDocsViewerFuncName}`)
    }
  }, [path])

  useEffect(function updateDocsViewerFuncNameFromPath() {
    const funcName = path.replace('/docs/', '')
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
    // Docs_1_9_7(props),
    Div({ id: 'docs' }, [
      DocsNav(props),

      mdastMap.has(docsViewerFuncName) ? [
        Div({ class: 'viewer' }, [
          A({
            href: path,
          }, H1(docsViewerFuncName)),

          Div({ class: 'synopsis' }, [
            ReactElementFromMdast(docsViewerMdast.synopsis)
          ]),

          Div({ class: 'description' }, [
            ReactElementFromMdast(docsViewerMdast.description)
          ]),
        ]),
      ] : [],
    ]),
  ])
})

export default Docs
