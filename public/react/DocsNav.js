import DocsSearch from './DocsSearch.js'
import useRubicoVersion from './useRubicoVersion.js'
import useDocsViewerFuncName from './useDocsViewerFuncName.js'
import useDocsSearchQuery from './useDocsSearchQuery.js'
import rubicoV1 from 'https://unpkg.com/rubico@1/dist/rubico.es.min.js'
import rubicoV2 from 'https://unpkg.com/rubico@2/dist/rubico.es.min.js'
import FunctionNames from './FunctionNames.js'
import uniq from './uniq.js'

// TODO get x dynamically from x export
const xFuncNames = [
  'append',
  'callProp',
  'defaultsDeep',
  'differenceWith',
  'filterOut',
  'find',
  'findIndex',
  'first',
  'flatten',
  'forEach',
  'groupBy',
  'has',
  'identity',
  'includes',
  'isDeepEqual',
  'isEmpty',
  'isFunction',
  'isIn',
  'isObject',
  'isString',
  'keys',
  'last',
  'maxBy',
  'noop',
  'pluck',
  'prepend',
  'size',
  'trace',
  'unionWith',
  'uniq',
  'unless',
  'values',
  'when',
]

const rubicoV1FuncNames = FunctionNames(rubicoV1)
const rubicoV2FuncNames = FunctionNames(rubicoV2)

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

  const [rubicoVersion] = useRubicoVersion()
  const [docsViewerFuncName, setDocsViewerFuncName] = useDocsViewerFuncName('pipe')
  const [docsSearchQuery] = useDocsSearchQuery()

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

  const [docsSearchCandidates, setDocsSearchCandidates] = useState([])

  useEffect(function updateDocsSearchCandidates() {
    const newCandidates = uniq([
      rubicoVersion == 'v1' ? rubicoV1FuncNames : rubicoV2FuncNames,
      xFuncNames,
    ].flat(1))
    setDocsSearchCandidates(newCandidates)
  }, [rubicoVersion])

  const DocsSearchQueryNavItems = ({
    docsSearchQuery, docsSearchCandidates,
  }) => {
    return docsSearchCandidates
    .filter(funcName => (
      funcName.includes(docsSearchQuery)
    ))
    .map(funcName => (
      xFuncNames.includes(funcName)
      ? XDocsNavItem(funcName)
      : CoreDocsNavItem(funcName)
    ))
  }

  if (rubicoVersion == 'v1') {
    return Nav([
      Section([
        DocsSearch(),
      ]),

      docsSearchQuery == '' ? [
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
      ] : [
        Section([
          DocsSearchQueryNavItems({ docsSearchQuery, docsSearchCandidates }),
        ]),
      ],
    ])
  }

  return Nav([
    Section([
      DocsSearch(),
    ]),

    docsSearchQuery == '' ? [
      Section([
        H4('Compose functions'),
        CoreDocsNavItem('pipe'),
        CoreDocsNavItem('compose'),
      ]),

      Section([
        H4('Handle effects'),
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
        H4('Create transducers'),
        CoreDocsNavItem('Transducer.map'),
        CoreDocsNavItem('Transducer.filter'),
        CoreDocsNavItem('Transducer.flatMap'),
        CoreDocsNavItem('Transducer.forEach'),
        CoreDocsNavItem('Transducer.passthrough'),
        CoreDocsNavItem('Transducer.tryCatch'),
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
    ] : [
      Section([
        DocsSearchQueryNavItems({ docsSearchQuery, docsSearchCandidates }),
      ]),
    ]
  ])
})

export default DocsNav
