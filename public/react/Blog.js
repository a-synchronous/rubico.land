import transducersMdastV2 from '../mdast/transducers-crash-course-rubico-v2.js'
import transducersMdastV1 from '../mdast/transducers-crash-course-rubico-v1.js'
import aSynchronousProgrammingIntroMdast from '../mdast/a-synchronous-functional-programming-intro.js'
import Layout from './Layout.js'
import MdastBlogPost from './MdastBlogPost.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import blogPostList from './blogPostList.js'

// { state, goto } => ReactElement
const Blog = ReactElement(props => {
  const { path, goto } = props
  const isBlogHome = path.replace(/\/g/, '') == '/blog'

  const blogPostsProps = blogPostList.map(data => ({ ...props, ...data }))

  const activeBlogPostIndex =
    blogPostsProps.findIndex(({ metadata }) => metadata.href == path)

  if (activeBlogPostIndex > -1) {
    const activeBlogPost = MdastBlogPost(blogPostsProps[activeBlogPostIndex])
    const otherBlogPosts =
      blogPostsProps
      .filter((_, i) => i != activeBlogPostIndex)
      .map(blogPostProps => MdastBlogPost(blogPostProps))

    return Layout(props, [
      Div({ id: 'blog' }, [
        activeBlogPost,
        otherBlogPosts,
      ]),
    ])
  }

  return Layout(props, [
    Div({ id: 'blog' }, [
      blogPostsProps.map(blogPostProps => MdastBlogPost(blogPostProps))
    ]),
  ])
})

export default Blog
