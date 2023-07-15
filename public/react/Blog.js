import transducersMdastV2 from '../mdast/transducers-crash-course-rubico-v2.js'
import transducersMdastV1 from '../mdast/transducers-crash-course-rubico-v1.js'
import Layout from './Layout.js'
import MdastBlogPost from './MdastBlogPost.js'
import useActiveBlogPostHref from './useActiveBlogPostHref.js'

const mdastList = [
  transducersMdastV2,
  transducersMdastV1,
]

// { state, goto } => ReactElement
const Blog = ReactElement(props => {
  const { path, goto } = props
  const isBlogHome = path.replace(/\/g/, '') == '/blog'

  return Layout(props, [
    Div({ id: 'blog' }, [
      mdastList.map(mdast => MdastBlogPost({ ...props, mdast })),
    ]),
  ])
})

export default Blog
