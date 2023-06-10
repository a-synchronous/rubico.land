import mdastBase from './mdastBase.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import BlogItem from './BlogItem.js'

// transducersContent ReactElement
const transducersContent = ReactElementFromMdast(mdastBase.get('article:transducers'))

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
