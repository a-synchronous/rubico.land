import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import CodeRunner from './CodeRunner.js'
import CodeViewer from './CodeViewer.js'
import parsedComments from './rubico-parsed-comments.js'
import parsedReadme from './rubico-parsed-readme.js'
import parsedTour from './rubico-parsed-tour.js'

// leave off image and title from original readme
parsedReadme.children = parsedReadme.children.slice(2)

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

const isArray = Array.isArray

const parsedDocumentationBase = parsedComments.reduce(
  (result, item) => result.set(item.name, item), new Map())

const constructMdastReactElement = function (mdast, constructor) {
  const result = constructor(mdast.children == null
    ? mdast.children.map(mdastToReactElement)
    : mdast.value)
  return result
}

// string -> string
const anchorHashFormat = value => value
  .replace(/\[([\w ]+)\]/g, '$1-')
  .replace(/ /g, '-')
  .toLowerCase()

const anchorHashFromMdast = function (mdast) {
  switch (get('children[0].type')(mdast)) {
    case 'linkReference':
      const firstChar = get('children[0].label')(mdast),
        rest = get('children[1].value')(mdast)
      return `[${firstChar}]${rest}`
    default:
      return get('children[0].value')(mdast)
  }
}

// mdast {
//   type: string,
//   value: string,
//   children: Array<this>,
// } -> React.Element
const mdastToReactElement = function (mdast) {
  const recurse = mdast => 'children' in mdast
    ? mdast.children.map(mdastToReactElement)
    : mdast.value
  switch (mdast.type) {
    case 'root':
      return Article(recurse(mdast))
    case 'heading':
      switch (mdast.depth) {
        case 1:
          const anchorHash = pipe([
            anchorHashFromMdast,
            anchorHashFormat,
          ])(mdast)
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H1({ id: anchorHash }, recurse(mdast))])
        case 2: return H2(recurse(mdast))
        case 3: return H3(recurse(mdast))
        case 4: return H4(recurse(mdast))
        case 5: return H5(recurse(mdast))
        default: return H6(recurse(mdast))
      }
    case 'image':
      return Img({ src: mdast.url, alt: mdast.alt })
    case 'blockquote':
      return Blockquote(recurse(mdast))
    case 'paragraph':
      return P(recurse(mdast))
    case 'strong':
      return B(recurse(mdast))
    case 'text':
      return Span(recurse(mdast))
    case 'list':
      return mdast.ordered ? Ol(recurse(mdast)) : Ul(recurse(mdast))
    case 'listItem':
      return Li(recurse(mdast))
    case 'inlineCode':
      return Code(recurse(mdast))
    case 'code':
      return mdast.meta == '[playground]'
        ? CodeRunner({ code: mdast.value, mode: mdast.lang })
        : CodeViewer({ code: mdast.value, mode: mdast.lang })
    case 'link':
      return A({ href: mdast.url }, recurse(mdast))
    case 'linkReference':
      return Span([Span('['), recurse(mdast), Span(']')])
    case 'html':
      if (mdast.value == '<br />') {
        return Br()
      }
      return Span('')
    default:
      return Span(mdast.value)
  }
}

const pipeDescription = mdastToReactElement(parsedDocumentationBase.get('pipe').description_mdast)

// () -> Home React.Element
const Home = ReactElement(() => mdastToReactElement(parsedReadme))

// () -> Tour React.Element
const Tour = ReactElement(() => mdastToReactElement(parsedTour))

// () -> Docs React.Element
const Docs = ReactElement(() => H1('Docs'))

// () -> Blog React.Element
const Blog = ReactElement(() => H1('Blog'))

// () -> NotFound React.Element
const NotFound = ReactElement(() => H1('Not Found'))

// rubico
const homeAnchor = document.getElementById('home')

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

// props { path: string } -> React.Element
const Root = ReactElement(pipe([
  ({ path }) => useReducer((state, action) => {
    switch (action.type) {
      case 'SET_LOCATION':
        return { ...state, path: action.path }
      default:
        return state
    }
  }, { path }),

  ([state, dispatch]) => {
    const setLocation = function () {
      dispatch({ type: 'SET_LOCATION', path: window.location.pathname })
    }
    useEffect(() => {
      window.addEventListener('popstate', setLocation)
      homeAnchor.addEventListener('click', setLocation)
      tabAnchors.forEach(anchor => {
        anchor.addEventListener('click', setLocation)
      })
      return () => {
        window.removeEventListener('popstate', setLocation)
        homeAnchor.removeEventListener('click', setLocation)
        tabAnchors.forEach(anchor => {
          anchor.removeEventListener('click', setLocation)
        })
      }
    }, [])
    return state
  },

  switchCase([
    eq('/', get('path')), Home,
    eq('/tour', get('path')), Tour,
    eq('/docs', get('path')), Docs,
    eq('/blog', get('path')), Blog,
    NotFound,
  ]),
]))

ReactDOM.render(Root({
  path: window.location.pathname,
}), document.getElementById('root'))
