import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
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
  'pipe', 'fork', 'assign',
  'tap', 'tryCatch', 'switchCase',
  'map', 'filter', 'reduce', 'transform', 'flatMap',
  'any', 'all', 'and', 'or', 'not',
  'eq', 'gt', 'lt', 'gte', 'lte',
  'get', 'pick', 'omit',
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

  ({ name, path }) =>
    ReactElement(({ goto, state }) => {
      const isExpanded = state.path == path
      const [isTransitioning, setIsTransitioning] = useState(false)
      return Span({ class: 'docs-item' }, [
        Button({
          class: isExpanded ? 'active' : '',
          onClick() {
            isExpanded ? goto('/docs') : goto(path)
          },
        }, [
          H3({ id: isExpanded ? 'retractor-header' : '' }, name),
        ]),
        isExpanded ? Button({
          onClick() {
            goto(`/docs/${getNextName(name)}`)
          },
        }, [Span({ id: 'next-arrow' }, '➦')]) : Span(),
        Div({
          className: isExpanded
            ? 'fade-in-out transition-end'
            : 'fade-in-out transition-start',
        }, isExpanded
          ? [synopsisBase.get(name), descriptionBase.get(name)]
          : []),
      ])
    }),
])

// documentation React components
const DocsPipe = DocsItem('pipe')
const DocsFork = DocsItem('fork')
const DocsAssign = DocsItem('assign')
const DocsTap = DocsItem('tap')
const DocsTryCatch = DocsItem('tryCatch')
const DocsSwitchCase = DocsItem('switchCase')
const DocsMap = DocsItem('map')
const DocsFilter = DocsItem('filter')
const DocsReduce = DocsItem('reduce')
const DocsTransform = DocsItem('transform')
const DocsFlatMap = DocsItem('flatMap')

const DocsAny = DocsItem('any')
const DocsAll = DocsItem('all')
const DocsAnd = DocsItem('and')
const DocsOr = DocsItem('or')
const DocsNot = DocsItem('not')
const DocsEq = DocsItem('eq')
const DocsGt = DocsItem('gt')
const DocsLt = DocsItem('lt')
const DocsGte = DocsItem('gte')
const DocsLte = DocsItem('lte')
const DocsGet = DocsItem('get')
const DocsPick = DocsItem('pick')
const DocsOmit = DocsItem('omit')

const DocsTrace = DocsItem({ name: 'trace', path: '/docs/x/trace' })

// props Object -> Docs ReactElement
const Docs = ReactElement(props => Div([
  Article({ id: 'docs' }, [
    P('This page documents rubico\'s core API methods. To get started, click on a method below.'),

    H1('Function Composition'),
    Div([DocsPipe(props), DocsFork(props), DocsAssign(props)]),
    Div([DocsTap(props), DocsTryCatch(props), DocsSwitchCase(props)]),

    H1('Transformation + Transducers'),
    Div([
      DocsMap(props), DocsFilter(props), DocsReduce(props),
      DocsTransform(props), DocsFlatMap(props),
    ]),

    H1('Predicate Composition'),
    Div([
      DocsAny(props), DocsAll(props), DocsAnd(props),
      DocsOr(props), DocsNot(props),
    ]),
    Div([
      DocsEq(props), DocsGt(props), DocsLt(props),
      DocsGte(props), DocsLte(props),
    ]),

    H1('Property Access'),
    Div([DocsGet(props), DocsPick(props), DocsOmit(props)]),
  ]),
  // Article([
    // H1('rubico/x/'), // TODO es exports for rubico/x
    // Div([DocsTrace(props)]),
  // ]),
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
        const active = document.querySelector('.active > h3')
        if (active != null) {
          active.scrollIntoView({ behavior: 'smooth' })
        }
      }, 325)
    }
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
