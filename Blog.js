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

// transducersContent ReactElement
const transducersContent = ReactElementFromMdast(mdastBase.get('article:transducers'))

// (path string, content ReactElement) => ReactElement
const BlogItem = pipe([
  ({
    title, author, published, path, content, back = '/blog',
  }) => ReactElement(props => {
    const { goto, state, children } = props,
      isExpanded = state.path == path,
      [isTransitioning, setIsTransitioning] = useState(false)

    return Div({ className: 'blog-item' }, [
      isExpanded ? Span({ id: 'active-spacer' }) : Span(),
      A({
        href: isExpanded ? back : path,
        className: isExpanded ? 'active' : '',
        onClick(event) {
          event.preventDefault()
          isExpanded ? goto(back) : goto(path)
        },
      }, [
        // H1({ id: isExpanded ? 'retractor-header' : '' }, title),
        H1(title),
        isExpanded ? Img({
          className: 'expander-arrow',
          src: '/assets/down-arrow-black.svg',
          alt: 'down-arrow-black',
        }) : Span()
      ]),
      P({ class: isExpanded ? '' : 'inactive' }, `${published} by ${author}`),

      Div({
        className: isExpanded
          ? 'fade-in-out transition-end'
          : 'fade-in-out transition-start',
      }, isExpanded ? [content] : []),
    ])
  }),
])

const CURRENT_PATH = '/blog/2020/10/02/transducers-crash-course'

// ReactElement
const BlogTransducers = BlogItem({
  title: 'Transducers Crash Course',
  author: 'Richard Tong',
  published: 'October 2, 2020',
  path: '/blog/2020/10/02/transducers-crash-course',
  content: transducersContent,
})

// { state, goto } => ReactElement
const Blog = ReactElement(props => {
  const { state, goto } = props
  useEffect(() => {
    if (state.path == '/blog') {
      goto(CURRENT_PATH)
    }
  }, [])
  return Div({ id: 'blog' }, [
    BlogTransducers(props),
  ])
})

export default Blog
