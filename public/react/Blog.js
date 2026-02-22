import Layout from './Layout.js'
import MdastBlogPost from './MdastBlogPost.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import useBlogPostList from './useBlogPostList.js'
import useRubicoVersion from './useRubicoVersion.js'

// { state, goto } => ReactElement
const Blog = ReactElement(props => {
  const { path, goto } = props
  const isBlogHome = path.replace(/\/g/, '') == '/blog'

  const [blogPostList] = useBlogPostList()

  const blogPostsProps = blogPostList.map(data => ({ ...props, ...data }))

  const activeBlogPostIndex =
    blogPostsProps.findIndex(({ metadata }) => metadata.href == path)

  const [rubicoVersion] = useRubicoVersion()

  if (path == '/blog') {
    return Layout(props, [
      Div({ id: 'blog' }, [
        blogPostsProps.map(blogPostProps => MdastBlogPost(blogPostProps))
      ]),
    ])
  }

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
      P(`Not available in Rubico ${rubicoVersion}.`),
      blogPostsProps.map(blogPostProps => MdastBlogPost(blogPostProps))
    ]),
  ])
})

export default Blog
