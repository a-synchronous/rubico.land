import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import mdastBase from './mdastBase.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

// transducersContent ReactElementFromMdast
const transducersContent = ReactElementFromMdast(mdastBase.get('article:transducers'))

const BlogItem = pipe([
  value => typeof value == 'string' ? ({ name: value }) : value,
  assign({
    path: get('path', ({ name }) => `/blog/${name}`),
  }),
  ({ name, path, back = '/blog' }) => ReactElement(props => {
      const { goto, state, children } = props
  }),
])

// () -> Blog ReactElement
const Blog = ReactElement(props => Div([
  transducersContent,
]))

export default Blog
