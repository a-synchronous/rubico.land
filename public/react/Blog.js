import mdastBase from './mdastBase.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'

// transducersContent ReactElement
const transducersContent = ReactElementFromMdast(mdastBase.get('article:transducers'))

// (path string, content ReactElement) => ReactElement
const BlogItem = pipe([
  ({
    title, author, published, path: blogItemPath, content, back = '/blog',
  }) => ReactElement(props => {
    const { goto, path, children } = props,
      isExpanded = path.endsWith('/')
        ? (path == `${blogItemPath}/`)
        : (path == blogItemPath),
      [transition, setTransition] = useState('none')

    useEffect(() => {
      if (isExpanded) {
        setTransition('start')
        setTimeout(() => {
          setTransition('end')
        }, 360)
      }
    }, [isExpanded])

    return Div({ className: 'blog-item' }, [
      isExpanded ? Span({ id: 'active-spacer' }) : Span(),
      A({
        href: isExpanded ? back : blogItemPath,
        className: isExpanded ? 'active' : '',
        onClick(event) {
          event.preventDefault()
          isExpanded ? goto(back) : goto(blogItemPath)
        },
      }, [
        H1(title),
        isExpanded ? Img({
          className: 'expander-arrow',
          src: '/assets/down-arrow-black.svg',
          alt: 'down-arrow-black',
        }) : Span()
      ]),
      P({ class: isExpanded ? '' : 'inactive' }, `${published} by ${author}`),

      Div({
        className: transition == 'start' ? 'fade-in-out'
          : isExpanded && transition == 'end' ? 'fade-in-out transition-end'
          : 'fade-in-out',
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
  const { path, goto } = props
  const isExpanded = path.endsWith('/') ? path == '/blog/' : path == '/blog'

  useEffect(() => {
    if (isExpanded) {
      goto(CURRENT_PATH)
    }
  }, [])

  return Layout(props, [
    Div({ id: 'blog' }, [
      P('This is a blog about the rubico library, JavaScript, and functional programming.'),
      BlogTransducers(props),
    ]),
  ])
})

export default Blog
