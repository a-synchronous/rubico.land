import ReactElement, {
  A, P, B, Button, Img,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section,
  Script, Iframe,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'

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

// () -> Home React.Element
const Home = ReactElement(() => H1('Home'))

// () -> Tour React.Element
const Tour = ReactElement(() => H1('Tour'))

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
