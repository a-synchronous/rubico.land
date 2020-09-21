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

const {
  useState, useEffect, useReducer,
  useRef, useCallback,
} = React

const isArray = Array.isArray

// () -> Home React.Element
const Home = ReactElement(() => H1('Home'))

// { path } -> Echo React.Element
const Echo = ReactElement(({ path }) => H1(path))

// props { path: string } -> React.Element
const Router = switchCase([
  eq('/', get('path')), Home,
  Echo,
])

// js-root
ReactDOM.render(pipe([
  Router,
])({
  path: window.location.pathname,
}), document.getElementById('js-root'))
