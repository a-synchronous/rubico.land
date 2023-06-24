import ReactElementFromMdast from './ReactElementFromMdast.js'
import cronistComments from '../mdast-v1.9.7/comments.cronist.js'

// Map<(parsedCommentName string)=>(parsedComment object)>
const rubicoCronistMap = cronistComments.reduce(
  (result, item) => result.set(item.name, item), new Map())

// memoizeCappedUnary(func function, cap number) -> memoized function
const memoizeCappedUnary = function (func, cap) {
  const cache = new Map(),
    memoized = function memoized(arg0) {
      if (cache.has(arg0)) {
        return cache.get(arg0)
      }
      const result = func(arg0)
      cache.set(arg0, result)
      if (cache.size > cap) {
        cache.clear()
      }
      return result
    }
  memoized.cache = cache
  return memoized
}

// memoize React components, cache size 500
const MemoizedReactElementFromMdast = memoizeCappedUnary(ReactElementFromMdast, 500)

// preload some of the larger cache items
const preload = ['map', 'filter', 'reduce', 'transform', 'flatMap']

preload.forEach(pipe([
  name => rubicoCronistMap.get(name),
  all([
    get('mdast.description'),
    get('mdast.synopsis'),
  ]),
  map(MemoizedReactElementFromMdast),
]))

const identity = value => value

const isArray = Array.isArray

// synopsisBase.get(name string) -> synopsis ReactElement
const synopsisBase = {
  get(name) {
    const comment = rubicoCronistMap.get(name)
    if (comment == null) {
      return Span('Syntax not found')
    }
    return MemoizedReactElementFromMdast(comment.mdast.synopsis)
  },
}

// descriptionBase.get(name string) -> description ReactElement
const descriptionBase = {
  get(name) {
    const comment = rubicoCronistMap.get(name)
    return comment == null
      ? Span('Description not found')
      : MemoizedReactElementFromMdast(comment.mdast.description)
  },
}

// each call to DocsItem adds to this list
const namesOrder = []

// name string -> nextName string
const getNextName = name => namesOrder[(namesOrder.indexOf(name) + 1) % namesOrder.length]

// name string => ReactElement
// { name: string, path: string } => ReactElement
const DocsItem = pipe([
  value => typeof value == 'string' ? ({ name: value }) : value,
  tap(({ name }) => namesOrder.push(name)),
  assign({
    path: get('path', ({ name }) => `/docs/${name}`),
    docItemPath({ name }) {
      return `/docs/${name}`
    },
  }),
  ({
    name, docItemPath, back = '/docs', getNextMethodName = getNextName,
  }) => ReactElement(props => {
    const { goto, path, children } = props
    const isExpanded = path.endsWith('/')
      ? (docItemPath == path.slice(0, -1))
      : (docItemPath == path)
    const [transition, setTransition] = useState('none')

    useEffect(() => {
      if (isExpanded) {
        setTransition('start')
        setTimeout(() => {
          setTransition('end')
        }, 360)
      }
    }, [isExpanded])

    return Div({ key: name, className: 'docs-item' }, [
      isExpanded ? Span({ id: 'active-spacer' }) : Span(),
      A({
        href: isExpanded ? back : docItemPath,
        className: isExpanded ? 'active' : '',
        onClick(event) {
          event.preventDefault()
          isExpanded ? goto(back) : goto(docItemPath)
        },
      }, [
        H3(name),
        isExpanded ? Img({
          className: 'expander-arrow',
          src: '/assets/down-arrow-rubico-green.svg',
          alt: 'down-arrow-rubico-green',
        }) : Span()
      ]),
      isExpanded ? A({
        href: `${back}/${getNextMethodName(name)}`,
        onClick(event) {
          event.preventDefault()
          goto(`${back}/${getNextMethodName(name)}`)
        },
      }, [Img({
        className: 'next-arrow',
        src: '/assets/right-arrow-rubico-green.svg',
        alt: 'right-green-arrow',
      })]) : Span(),

      Div({
        className: transition == 'start' ? 'fade-in-out'
        : isExpanded && transition == 'end' ? 'fade-in-out transition-end'
        : 'fade-in-out',
      }, isExpanded ? [
        synopsisBase.get(name),
        descriptionBase.get(name),
      ] : []),

      Div({ className: 'docs-item-children' }, children),
    ])
  }),
])

// documentation React components
// order of creation dictates order on page
const DocsPipe = DocsItem('pipe')
const DocsPipeSync = DocsItem('pipe.sync')
const DocsTap = DocsItem('tap')
const DocsTapSync = DocsItem('tap.sync')
const DocsTapIf = DocsItem('tap.if')
const DocsSwitchCase = DocsItem('switchCase')
const DocsTryCatch = DocsItem('tryCatch')
const DocsFork = DocsItem('fork')
const DocsForkSeries = DocsItem('fork.series')
const DocsAssign = DocsItem('assign')
const DocsGet = DocsItem('get')
const DocsSet = DocsItem('set')
const DocsPick = DocsItem('pick')
const DocsOmit = DocsItem('omit')
const DocsMap = DocsItem('map')
const DocsMapEntries = DocsItem('map.entries')
const DocsMapSeries = DocsItem('map.series')
const DocsMapPool = DocsItem('map.pool')
const DocsMapWithIndex = DocsItem('map.withIndex')
const DocsMapOwn = DocsItem('map.own')
const DocsFilter = DocsItem('filter')
const DocsFilterWithIndex = DocsItem('filter.withIndex')
const DocsReduce = DocsItem('reduce')
const DocsTransform = DocsItem('transform')
const DocsFlatMap = DocsItem('flatMap')

const DocsAnd = DocsItem('and')
const DocsOr = DocsItem('or')
const DocsNot = DocsItem('not')
const DocsNotSync = DocsItem('not.sync')
const DocsAny = DocsItem('any')
const DocsAll = DocsItem('all')
const DocsEq = DocsItem('eq')
const DocsGt = DocsItem('gt')
const DocsLt = DocsItem('lt')
const DocsGte = DocsItem('gte')
const DocsLte = DocsItem('lte')

const DocsThunkify = DocsItem('thunkify')
const DocsAlways = DocsItem('always')
const DocsCurry = DocsItem('curry')
const DocsCurryArity = DocsItem('curry.arity')
const Docs__ = DocsItem('__')

const DocsAppend = DocsItem('append')
const DocsCallProp = DocsItem('callProp')
const DocsDefaultsDeep = DocsItem('defaultsDeep')
const DocsDifferenceWith = DocsItem('differenceWith')
const DocsFilterOut = DocsItem('filterOut')
const DocsFind = DocsItem('find')
const DocsFindIndex = DocsItem('findIndex')
const DocsFirst = DocsItem('first')
const DocsFlatten = DocsItem('flatten')
const DocsForEach = DocsItem('forEach')
const DocsGroupBy = DocsItem('groupBy')
const DocsHas = DocsItem('has')
const DocsIdentity = DocsItem('identity')
const DocsIncludes = DocsItem('includes')
const DocsIsDeepEqual = DocsItem('isDeepEqual')
const DocsIsEmpty = DocsItem('isEmpty')
const DocsIsFunction = DocsItem('isFunction')
const DocsIsIn = DocsItem('isIn')
const DocsIsObject = DocsItem('isObject')
const DocsIsString = DocsItem('isString')
const DocsKeys = DocsItem('keys')
const DocsLast = DocsItem('last')
const DocsMaxBy = DocsItem('maxBy')
const DocsNoop = DocsItem('noop')
const DocsPluck = DocsItem('pluck')
const DocsPrepend = DocsItem('prepend')
const DocsSize = DocsItem('size')
const DocsTrace = DocsItem('trace')
const DocsUnionWith = DocsItem('unionWith')
const DocsUniq = DocsItem('uniq')
const DocsUnless = DocsItem('unless')
const DocsValues = DocsItem('values')
const DocsWhen = DocsItem('when')

// props Object -> Docs ReactElement
const Docs_1_9_7 = ReactElement(props => Div([
  Div({ id: 'docs' }, [
    P('This page documents rubico\'s API methods. To get started, click on a link below.'),

    H1('Create Pipelines'),
    Div([
      DocsPipe(props, [
        DocsPipeSync(props),
      ]),
      DocsTap(props, [
        DocsTapSync(props),
        DocsTapIf(props),
      ]),
    ]),

    H1('Control Flow'),
    Div([
      DocsSwitchCase(props),
    ]),

    H1('Handle Errors'),
    Div([
      DocsTryCatch(props),
    ]),

    H1('Compose Objects'),
    Div([
      DocsFork(props, [
        DocsForkSeries(props),
      ]),
      DocsAssign(props),
      DocsGet(props),
      DocsSet(props),
      DocsPick(props),
      DocsOmit(props),
    ]),

    H1('Transform Data'),
    Div([
      DocsMap(props, [
        DocsMapEntries(props),
        DocsMapSeries(props),
        DocsMapPool(props),
        DocsMapWithIndex(props),
        DocsMapOwn(props),
      ]),
      DocsFilter(props, [
        DocsFilterWithIndex(props),
      ]),
      DocsReduce(props),
      DocsTransform(props),
      DocsFlatMap(props),
    ]),

    H1('Compose Predicates'),
    Div([
      DocsAnd(props),
      DocsOr(props),
      DocsNot(props, [
        DocsNotSync(props),
      ]),
    ]),

    H1('Aggregate Predicates'),
    Div([
      DocsAny(props),
      DocsAll(props),
    ]),

    H1('Comparison'),
    Div([
      DocsEq(props),
      DocsGt(props),
      DocsLt(props),
      DocsGte(props),
      DocsLte(props),
    ]),

    H1('Partial Application'),
    Div([
      DocsThunkify(props),
      DocsAlways(props),
      DocsCurry(props, [
        DocsCurryArity(props),
      ]),
      Docs__(props),
    ]),

    H1('x/ - stable'),
    Div([
      DocsAppend(props),
      DocsCallProp(props),
      DocsDefaultsDeep(props),
      DocsDifferenceWith(props),
      DocsFilterOut(props),
      DocsFind(props),
      DocsFindIndex(props),
      DocsFirst(props),
      DocsFlatten(props),
      DocsForEach(props),
      DocsGroupBy(props),
      DocsHas(props),
      DocsIdentity(props),
      DocsIncludes(props),
      DocsIsDeepEqual(props),
      DocsIsEmpty(props),
      DocsIsFunction(props),
      DocsIsIn(props),
      DocsIsObject(props),
      DocsIsString(props),
      DocsKeys(props),
      DocsLast(props),
      DocsMaxBy(props),
      DocsNoop(props),
      DocsPluck(props),
      DocsPrepend(props),
      DocsSize(props),
      DocsTrace(props),
      DocsUnionWith(props),
      DocsUniq(props),
      DocsUnless(props),
      DocsValues(props),
      DocsWhen(props),
    ]),
  ]),
  Div({
    id: 'back-to-top',
  }, [
    A({
      href: '/docs',
      onClick(event) {
        event.preventDefault()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        window.history.pushState({}, document.title, '/docs')
      },
    }, 'Back to top'),
  ]),
]))

export default Docs_1_9_7
