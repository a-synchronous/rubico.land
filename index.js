import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import commentsMdast from './comments.mdast.js'
import readmeMdast from './readme.mdast.js'
import tourMdast from './tour.mdast.js'

// leave off image and title from original readme
readmeMdast.children = readmeMdast.children.slice(2)

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

const identity = value => value

const isArray = Array.isArray

// (prefix string, getter any=>string) => boolean
const startsWith = (prefix, getter) => value => getter(value).startsWith(prefix)

// Map<(parsedCommentName string)=>(parsedComment object)>
const commentsBase = commentsMdast.reduce(
  (result, item) => result.set(item.name, item), new Map())

// backToTop ReactElement
const backToTop = Button({
  id: 'back-to-top',
  onClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },
}, 'Back to top')

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast(readmeMdast)

// () -> Home ReactElement
const Home = ReactElement(() => Div([
  readmeContent,
  Div([backToTop]),
]))

// tour ReactElement
const tourContent = ReactElementFromMdast(tourMdast)

// () -> ReactElement
const Tour = ReactElement(() => Div([
  tourContent,
  Div([backToTop]),
]))

// name string => ReactElement
const DocsItem = pipe([
  fork({
    name: identity,
    comment: pipe([
      name => commentsBase.get(name),
      get('description_mdast'),
      ReactElementFromMdast,
    ]),
    path: name => `/docs/${name}`,
  }),

  ({ name, comment, path }) =>
    ReactElement(({ goto, state }) => {
      return Span({ class: 'docs-item' }, [
        Button({
          class: 'docs-item-button-shrink',
          onClick() {
            if (state.path == path) {
              goto('/docs')
            } else {
              goto(path)
            }
          },
        }, [Span(name)]),
        state.path == path ? comment : Span(),
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

// props Object -> Docs ReactElement
const Docs = ReactElement(props => Div([
  Article([
    H1('Function Composition'),
    Div([DocsPipe(props), DocsFork(props), DocsAssign(props)]),
    H1('Transformation + Transducers'),
    Div([
      DocsMap(props), DocsFilter(props), DocsReduce(props),
      DocsTransform(props), DocsFlatMap(props)]),

    H1('Predicate Composition'),
    Div([
      DocsAny(props), DocsAll(props), DocsAnd(props),
      DocsOr(props), DocsNot(props)]),
    Div([
      DocsEq(props), DocsGt(props), DocsLt(props),
      DocsGte(props), DocsLte(props)]),

    H1('Property Access'),
    Div([DocsGet(props), DocsPick(props), DocsOmit(props)]),
  ]),
  Article([
    H1('rubico/x/'),
  ]),
  Div([backToTop]),
]))

// () -> Blog ReactElement
const Blog = ReactElement(() => H1('Blog'))

// () -> NotFound ReactElement
const NotFound = ReactElement(() => H1('Not Found'))

// rubico
const homeAnchor = document.getElementById('home')

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

// props { state: { path: string } } -> ReactElement
const Router = ReactElement(switchCase([
  startsWith('/tour', get('state.path')), Tour,
  startsWith('/docs', get('state.path')), Docs,
  startsWith('/blog', get('state.path')), Blog,
  startsWith('/', get('state.path')), Home,
  NotFound,
]))

// props { path: string } -> ReactElement
const Root = ReactElement(
  ({ path }) => {
    const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case 'SET_PATH':
          return { ...state, path: action.path }
        default:
          return state
      }
    }, { path })

    const updatePathWithLocation = () => {
      dispatch({ type: 'SET_PATH', path: window.location.pathname })
    }
    const goto = path => {
      history.pushState({ path }, '', path)
      dispatch({ type: 'SET_PATH', path })
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

    return Router({ state, goto })
  },
)

ReactDOM.render(Root({
  path: window.location.pathname,
}), document.getElementById('root'))
