import useRubicoVersion from './useRubicoVersion.js'
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

  const [rubicoVersion] = useRubicoVersion('v2')
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

  const XDocsNavItem = name => {
    const href = `/docs/x/${name}`
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

  if (rubicoVersion == 'v1') {
    return Nav([
      Section([
        H4('Create pipelines'),
        CoreDocsNavItem('pipe'),
        CoreDocsNavItem('pipe.sync'),
        CoreDocsNavItem('tap'),
        CoreDocsNavItem('tap.sync'),
        CoreDocsNavItem('tap.if'),
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
        H4('Compose objects'),
        CoreDocsNavItem('fork'),
        CoreDocsNavItem('fork.series'),
        CoreDocsNavItem('assign'),
        CoreDocsNavItem('get'),
        CoreDocsNavItem('set'),
        CoreDocsNavItem('pick'),
        CoreDocsNavItem('omit'),
      ]),

      Section([
        H4('Transform data'),
        CoreDocsNavItem('map'),
        CoreDocsNavItem('map.entries'),
        CoreDocsNavItem('map.series'),
        CoreDocsNavItem('map.pool'),
        CoreDocsNavItem('map.withIndex'),
        CoreDocsNavItem('map.own'),
        CoreDocsNavItem('filter'),
        CoreDocsNavItem('filter.withIndex'),
        CoreDocsNavItem('reduce'),
        CoreDocsNavItem('transform'),
        CoreDocsNavItem('flatMap'),
      ]),

      Section([
        H4('Compose predicates'),
        CoreDocsNavItem('and'),
        CoreDocsNavItem('or'),
        CoreDocsNavItem('not'),
        CoreDocsNavItem('not.sync'),
      ]),

      Section([
        H4('Aggregate predicates'),
        CoreDocsNavItem('some'),
        CoreDocsNavItem('every'),
      ]),

      Section([
        H4('Comparison'),
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
        CoreDocsNavItem('curry.arity'),
        CoreDocsNavItem('__'),
      ]),

      Section([
        H4('x/'),
        XDocsNavItem('append'),
        XDocsNavItem('callProp'),
        XDocsNavItem('defaultsDeep'),
        XDocsNavItem('differenceWith'),
        XDocsNavItem('filterOut'),
        XDocsNavItem('find'),
        XDocsNavItem('findIndex'),
        XDocsNavItem('first'),
        XDocsNavItem('flatten'),
        XDocsNavItem('forEach'),
        XDocsNavItem('groupBy'),
        XDocsNavItem('has'),
        XDocsNavItem('identity'),
        XDocsNavItem('includes'),
        XDocsNavItem('isDeepEqual'),
        XDocsNavItem('isEmpty'),
        XDocsNavItem('isFunction'),
        XDocsNavItem('isIn'),
        XDocsNavItem('isObject'),
        XDocsNavItem('isString'),
        XDocsNavItem('keys'),
        XDocsNavItem('last'),
        XDocsNavItem('maxBy'),
        XDocsNavItem('noop'),
        XDocsNavItem('pluck'),
        XDocsNavItem('prepend'),
        XDocsNavItem('size'),
        XDocsNavItem('trace'),
        XDocsNavItem('unionWith'),
        XDocsNavItem('uniq'),
        XDocsNavItem('unless'),
        XDocsNavItem('values'),
        XDocsNavItem('when'),
      ]),
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
      CoreDocsNavItem('tap.if'),
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
      CoreDocsNavItem('map.entries'),
      CoreDocsNavItem('map.series'),
      CoreDocsNavItem('map.pool'),
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
      CoreDocsNavItem('curry.arity'),
      CoreDocsNavItem('__'),
    ]),

    Section([
      H4('x/'),
      XDocsNavItem('append'),
      XDocsNavItem('callProp'),
      XDocsNavItem('defaultsDeep'),
      XDocsNavItem('differenceWith'),
      XDocsNavItem('filterOut'),
      XDocsNavItem('find'),
      XDocsNavItem('findIndex'),
      XDocsNavItem('first'),
      XDocsNavItem('flatten'),
      XDocsNavItem('forEach'),
      XDocsNavItem('groupBy'),
      XDocsNavItem('has'),
      XDocsNavItem('identity'),
      XDocsNavItem('includes'),
      XDocsNavItem('isDeepEqual'),
      XDocsNavItem('isEmpty'),
      XDocsNavItem('isFunction'),
      XDocsNavItem('isIn'),
      XDocsNavItem('isObject'),
      XDocsNavItem('isString'),
      XDocsNavItem('keys'),
      XDocsNavItem('last'),
      XDocsNavItem('maxBy'),
      XDocsNavItem('noop'),
      XDocsNavItem('pluck'),
      XDocsNavItem('prepend'),
      XDocsNavItem('size'),
      XDocsNavItem('trace'),
      XDocsNavItem('unionWith'),
      XDocsNavItem('uniq'),
      XDocsNavItem('unless'),
      XDocsNavItem('values'),
      XDocsNavItem('when'),
    ]),
  ])
})

export default DocsNav
