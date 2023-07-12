import useDocsViewerFuncName from './useDocsViewerFuncName.js'

/**
 * @name DocsNav
 *
 * @synopsis
 * ```coffeescript [specscript]
 * DocsNav(props {
 *   goto: function,
 * }) -> ReactElement
 * ```
 */
const DocsNav = ReactElement(props => {
  const { goto } = props

  const [docsViewerFuncName, setDocsViewerFuncName] = useDocsViewerFuncName('pipe')

  const CoreDocsNavItem = name => {
    const href = `/docs/${name}`
    return Div({ class: 'docs-nav-item' }, [
      A({
        href,
        onClick(event) {
          event.preventDefault()
          setDocsViewerFuncName(name)
          goto(href)
        },
      }, name)
    ])
  }

  return Nav([
    Section([
      H4('Compose functions'),
      CoreDocsNavItem('pipe'),
      CoreDocsNavItem('compose'),
    ]),

    Section([
      H4('Compose effects'),
      CoreDocsNavItem('tap'),
      CoreDocsNavItem('forEach'),
    ]),

    Section([
      H4('Control flow'),
      CoreDocsNavItem('switchCase'),
    ]),

    Section([
      H4('Handle errors'),
      CoreDocsNavItem('tryCatch'),
    ]),

    Section([
      H4('Handle objects'),
      CoreDocsNavItem('all'),
      CoreDocsNavItem('assign'),
      CoreDocsNavItem('get'),
      CoreDocsNavItem('set'),
      CoreDocsNavItem('pick'),
      CoreDocsNavItem('omit'),
    ]),

    Section([
      H4('Transform data'),
      CoreDocsNavItem('map'),
      CoreDocsNavItem('filter'),
      CoreDocsNavItem('reduce'),
      CoreDocsNavItem('transform'),
      CoreDocsNavItem('flatMap'),
    ]),

    Section([
      H4('Compose predicates'),
      CoreDocsNavItem('and'),
      CoreDocsNavItem('or'),
      CoreDocsNavItem('not'),
      CoreDocsNavItem('some'),
      CoreDocsNavItem('every'),
    ]),

    Section([
      H4('Comparison operators'),
      CoreDocsNavItem('eq'),
      CoreDocsNavItem('gt'),
      CoreDocsNavItem('lt'),
      CoreDocsNavItem('gte'),
      CoreDocsNavItem('lte'),
    ]),

    Section([
      H4('Partial application'),
      CoreDocsNavItem('thunkify'),
      CoreDocsNavItem('always'),
      CoreDocsNavItem('curry'),
      CoreDocsNavItem('__'),
    ]),
  ])
})

export default DocsNav
