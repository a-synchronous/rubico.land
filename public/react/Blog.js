import transducersMdast from '../mdast/transducers-crash-course-rubico-v1.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import BlogItem from './BlogItem.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'

// transducersContent ReactElement
const transducersContent = ReactElementFromMdast(transducersMdast)

const CURRENT_PATH = '/blog/transducers-crash-course-rubico-v1'

// ReactElement
const BlogTransducers = BlogItem({
  ...MdastBlogMetadata(transducersMdast),
  content: transducersContent,
})

// { state, goto } => ReactElement
const Blog = ReactElement(props => {
  const { path, goto } = props
  const isBlogHome = path.replace(/\/g/, '') == '/blog'

  useEffect(() => {
    if (isBlogHome) {
      goto(CURRENT_PATH)
    }
  }, [])

  return Layout(props, [
    Div({ id: 'blog' }, [
      /*
      isBlogHome ? [
        P('This is a blog about the rubico library, JavaScript, and functional programming.'),
      ] : [],
      */
      BlogTransducers(props),
    ]),
  ])
})

export default Blog
