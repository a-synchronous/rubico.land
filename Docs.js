import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import mdastBase from './mdastBase.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

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
  name => mdastBase.get(name),
  fork([
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
    const comment = mdastBase.get(name)
    if (comment == null) {
      return Span('Syntax not found')
    }
    return MemoizedReactElementFromMdast(comment.mdast.synopsis)
  },
}

// descriptionBase.get(name string) -> description ReactElement
const descriptionBase = {
  get(name) {
    const comment = mdastBase.get(name)
    return comment == null
      ? Span('Description not found')
      : MemoizedReactElementFromMdast(comment.mdast.description)
  },
}

const namesOrder = [
  'pipe',
    'pipe.sync',
  'fork',
    'fork.series',
  'assign',
  'tap',
    'tap.sync',
    'tap.if',
  'tryCatch',
  'switchCase',
  'map',
    'map.series', 'map.pool', 'map.withIndex', 'map.own',
  'filter',
    'filter.withIndex',
  'reduce',
  'transform',
  'flatMap',
  'any',
  'all',
  'and',
  'or',
  'not',
  'not.sync',
  'eq',
  'gt',
  'lt',
  'gte',
  'lte',
  'get',
  'pick',
  'omit',
  'defaultsDeep',
  'find',
  'first',
  'flatten',
  'forEach',
  'isDeepEqual',
  'isEmpty',
  'isFunction',
  'isObject',
  'isString',
  'last',
  'pluck',
  'size',
  'trace',
  'unionWith',
  'uniq',
]

// name string -> nextName string
const getNextName = name => namesOrder[(namesOrder.indexOf(name) + 1) % namesOrder.length]

// name string => ReactElement
// { name: string, path: string } => ReactElement
const DocsItem = pipe([
  value => typeof value == 'string' ? ({ name: value }) : value,
  assign({
    path: get('path', ({ name }) => `/docs/${name}`),
  }),
  ({ name, path, back = '/docs', getNextMethodName = getNextName }) =>
    ReactElement(props => {
      const { goto, state, children } = props,
        isExpanded = state.path.endsWith('/')
          ? (path == state.path.slice(0, state.path.length - 1))
          : (path == state.path),
        [transition, setTransition] = useState('none')

      useEffect(() => {
        if (isExpanded) {
          setTransition('start')
          setTimeout(() => {
            setTransition('end')
          }, 360)
        }
      }, [isExpanded])

      return Div({ className: 'docs-item' }, [
        isExpanded ? Span({ id: 'active-spacer' }) : Span(),
        A({
          href: isExpanded ? back : path,
          className: isExpanded ? 'active' : '',
          onClick(event) {
            event.preventDefault()
            isExpanded ? goto(back) : goto(path)
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
const DocsPipe = DocsItem('pipe')
const DocsPipeSync = DocsItem('pipe.sync')
const DocsFork = DocsItem('fork')
const DocsForkSeries = DocsItem('fork.series')
const DocsAssign = DocsItem('assign')
const DocsTap = DocsItem('tap')
const DocsTapSync = DocsItem('tap.sync')
const DocsTapIf = DocsItem('tap.if')
const DocsTryCatch = DocsItem('tryCatch')
const DocsSwitchCase = DocsItem('switchCase')
const DocsMap = DocsItem('map')
const DocsMapSeries = DocsItem('map.series')
const DocsMapPool = DocsItem('map.pool')
const DocsMapWithIndex = DocsItem('map.withIndex')
const DocsMapOwn = DocsItem('map.own')
const DocsFilter = DocsItem('filter')
const DocsFilterWithIndex = DocsItem('filter.withIndex')
const DocsReduce = DocsItem('reduce')
const DocsTransform = DocsItem('transform')
const DocsFlatMap = DocsItem('flatMap')

const DocsAny = DocsItem('any')
const DocsAll = DocsItem('all')
const DocsAnd = DocsItem('and')
const DocsOr = DocsItem('or')
const DocsNot = DocsItem('not')
const DocsNotSync = DocsItem('not.sync')
const DocsEq = DocsItem('eq')
const DocsGt = DocsItem('gt')
const DocsLt = DocsItem('lt')
const DocsGte = DocsItem('gte')
const DocsLte = DocsItem('lte')
const DocsGet = DocsItem('get')
const DocsPick = DocsItem('pick')
const DocsOmit = DocsItem('omit')

const DocsDefaultsDeep = DocsItem('defaultsDeep')
const DocsFind = DocsItem('find')
const DocsFirst = DocsItem('first')
const DocsFlatten = DocsItem('flatten')
const DocsForEach = DocsItem('forEach')
const DocsIsDeepEqual = DocsItem('isDeepEqual')
const DocsIsEmpty = DocsItem('isEmpty')
const DocsIsFunction = DocsItem('isFunction')
const DocsIsObject = DocsItem('isObject')
const DocsIsString = DocsItem('isString')
const DocsLast = DocsItem('last')
const DocsPluck = DocsItem('pluck')
const DocsSize = DocsItem('size')
const DocsTrace = DocsItem('trace')
const DocsUnionWith = DocsItem('unionWith')
const DocsUniq = DocsItem('uniq')

// props Object -> Docs ReactElement
const Docs = ReactElement(props => Div([
  Div({ id: 'docs' }, [
    P('This page documents rubico\'s API methods. To get started, click on a link below.'),

    /* probably will move this to the bottom
    Span([
      A({
        href: '/docs/x',
        className: 'docs-link',
        onClick(event) {
          event.preventDefault()
          props.goto('/docs/x')
        },
      }, [H1('x/')]),
    ]),
    */

    H1('Function Composition'),
    Div([
      DocsPipe(props, [
        DocsPipeSync(props),
      ]),
      DocsFork(props, [
        DocsForkSeries(props),
      ]),
      DocsAssign(props),
      DocsTap(props, [
        DocsTapSync(props),
        DocsTapIf(props),
      ]),
      DocsTryCatch(props),
      DocsSwitchCase(props),
    ]),

    H1('Transformation + Transducers'),
    Div([
      DocsMap(props, [
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

    H1('Predicate Composition'),
    Div([
      DocsAny(props),
      DocsAll(props),
      DocsAnd(props),
      DocsOr(props),
      DocsNot(props, [
        DocsNotSync(props),
      ]),
      DocsEq(props),
      DocsGt(props),
      DocsLt(props),
      DocsGte(props),
      DocsLte(props),
    ]),

    H1('Property Access'),
    Div([
      DocsGet(props),
      DocsPick(props),
      DocsOmit(props),
    ]),

    H1('x/ - stable'),
    Div([
      DocsDefaultsDeep(props),
      DocsFind(props),
      DocsFirst(props),
      DocsFlatten(props),
      DocsForEach(props),
      DocsIsDeepEqual(props),
      DocsIsEmpty(props),
      DocsIsFunction(props),
      DocsIsObject(props),
      DocsIsString(props),
      DocsLast(props),
      DocsPluck(props),
      DocsSize(props),
      DocsTrace(props),
      DocsUnionWith(props),
      DocsUniq(props),
    ]),
  ]),
]))

export default Docs
