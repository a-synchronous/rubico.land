import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import ShortLink from './ShortLink.js'
import CodeViewer from './CodeViewer.js'
import cronistComments from './comments.cronist.js'
import readmeMdast from './readme.mdast.js'
import tourMdast from './tour.mdast.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

// Map<(parsedCommentName string)=>(parsedComment object)>
const commentsBase = cronistComments.reduce(
  (result, item) => result.set(item.name, item), new Map())

// leave off image and title from original readme
readmeMdast.children = readmeMdast.children.slice(2)

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
preload.forEach(name => {
  const comment = commentsBase.get(name)
  MemoizedReactElementFromMdast(comment.description_mdast)
  MemoizedReactElementFromMdast(comment.synopsis_mdast)
})

const identity = value => value

const isArray = Array.isArray

// (prefix string, getter any=>string) => boolean
const startsWith = (prefix, getter) => value => getter(value).startsWith(prefix)

// synopsisBase.get(name string) -> synopsis ReactElement
const synopsisBase = {
  get(name) {
    const comment = commentsBase.get(name)
    if (comment == null) {
      return Span('Syntax not found')
    }
    return 'synopsis_mdast' in comment
      ? MemoizedReactElementFromMdast(comment.synopsis_mdast)
      : Pre(comment.synopsis)
  },
}

// descriptionBase.get(name string) -> description ReactElement
const descriptionBase = {
  get(name) {
    const comment = commentsBase.get(name)
    return comment == null
      ? Span('Description not found')
      : MemoizedReactElementFromMdast(comment.description_mdast)
  },
}

console.log('commentsBase', commentsBase)

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast(readmeMdast)

// () -> Home ReactElement
const Home = ReactElement(() => Div([
  readmeContent,
  A({ href: '/tour' }, [
    Button({ id: 'take-the-tour-button' }, 'Take the tour'),
  ]),
  A({ href: '/docs' }, [
    Button({ id: 'read-the-docs-button' }, 'Read the docs'),
  ]),
]))

// tour ReactElement
const tourContent = ReactElementFromMdast(tourMdast)

// () -> ReactElement
const Tour = ReactElement(() => Div([
  tourContent,
]))

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
    'map.series', 'map.pool', 'map.withIndex',
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
  ({
    name, path, back = '/docs', getNextMethodName = getNextName,
  }) =>
    ReactElement(props => {
      const { goto, state, children } = props,
        isExpanded = state.path == path,
        [isTransitioning, setIsTransitioning] = useState(false)

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
          H3({ id: isExpanded ? 'retractor-header' : '' }, name),
        ]),
        isExpanded ? A({
          href: `${back}/${getNextMethodName(name)}`,
          onClick(event) {
            event.preventDefault()
            goto(`${back}/${getNextMethodName(name)}`)
          },
        }, [Span({ id: 'next-arrow' }, '➦')]) : Span(),

        Div({
          className: isExpanded
            ? 'fade-in-out transition-end'
            : 'fade-in-out transition-start',
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
  Article({ id: 'docs' }, [
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
        DocsMapSeries(props), DocsMapPool(props), DocsMapWithIndex(props),
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

// () -> Blog ReactElement
const Blog = ReactElement(() => H1('Blog'))

// () -> NotFound ReactElement
const NotFound = ReactElement(() => H1('Not Found'))

// rubico
const homeAnchor = document.getElementById('home')

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

// reducer function => initialState any => any
const StateReducer = reducer => initialState => useReducer(reducer, initialState)

// initialState { path: string } -> ReactElement
const Root = ReactElement(pipe([
  StateReducer((state, action) => {
    switch (action.type) {
      case 'SET_PATH':
        return { ...state, path: action.path }
      default:
        return state
    }
  }),

  ([state, dispatch]) => {
    const updatePathWithLocation = () => {
      dispatch({ type: 'SET_PATH', path: window.location.pathname })
    }
    const goto = path => {
      history.pushState({ path }, '', path)
      dispatch({ type: 'SET_PATH', path })
      setTimeout(() => {
        const active = document.querySelector('#active-spacer')
        if (active != null) {
          active.scrollIntoView({ behavior: 'smooth' })
        }
      }, 325)
    }

    useEffect(() => {
      // scroll active into view on first render
      const active = document.querySelector('#active-spacer')
      if (active != null) {
        active.scrollIntoView({ behavior: 'smooth' })
      }
    }, [])
    useEffect(() => {
      window.addEventListener('popstate', updatePathWithLocation)
      homeAnchor.addEventListener('click', updatePathWithLocation)
      tabAnchors.forEach(anchor => {
        anchor.addEventListener('click', updatePathWithLocation)
      })

      return () => {
        window.removeEventListener('popstate', updatePathWithLocation)
        homeAnchor.removeEventListener('click', updatePathWithLocation)
        tabAnchors.forEach(anchor => {
          anchor.removeEventListener('click', updatePathWithLocation)
        })
      }
    }, [])
    return { state, goto }
  },

  switchCase([
    startsWith('/tour', get('state.path')), Tour,
    startsWith('/docs', get('state.path')), Docs,
    startsWith('/blog', get('state.path')), Blog,
    startsWith('/', get('state.path')), Home,
    NotFound,
  ]),
]))

ReactDOM.render(Root({
  path: window.location.pathname,
}), document.getElementById('root'))
