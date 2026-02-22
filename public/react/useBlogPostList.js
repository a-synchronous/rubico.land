import useGlobalState from './useGlobalState.js'
import useRubicoVersion from './useRubicoVersion.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import transducersCrashCourseMdast from '../mdast/transducers-crash-course.js'
import aSynchronousProgrammingIntroMdast from '../mdast/a-synchronous-functional-programming-intro.js'
import aSynchronousProgrammingDataTypesMdast from '../mdast/a-synchronous-functional-programming-data-types.js'
import aSynchronousProgrammingHandlingHTTPMdast from '../mdast/a-synchronous-functional-programming-handling-http.js'

function createBlogPostList(mdastList) {
  return mdastList.map(mdast => ({
    mdast,
    metadata: MdastBlogMetadata(mdast),
  })).sort((a, b) => {
    const timeA =
      new Date(a.metadata.dateUpdated ?? a.metadata.datePublished).getTime()
    const timeB =
      new Date(b.metadata.dateUpdated ?? b.metadata.datePublished).getTime()
    return timeB - timeA
  })
}

const initial = createBlogPostList([
  aSynchronousProgrammingHandlingHTTPMdast,
  aSynchronousProgrammingDataTypesMdast,
  aSynchronousProgrammingIntroMdast,
  transducersCrashCourseMdast,
])

function useBlogPostList() {
  const [rubicoVersion] = useRubicoVersion()
  const [blogPostList, setBlogPostList] = useGlobalState('blogPostList', initial)

  useEffect(() => {
    if (rubicoVersion == 'v1') {
      const blogPostList1 = createBlogPostList([
        aSynchronousProgrammingHandlingHTTPMdast,
        aSynchronousProgrammingDataTypesMdast,
        aSynchronousProgrammingIntroMdast,
      ])
      setBlogPostList(blogPostList1)
    } else {
      const blogPostList1 = createBlogPostList([
        aSynchronousProgrammingHandlingHTTPMdast,
        aSynchronousProgrammingDataTypesMdast,
        aSynchronousProgrammingIntroMdast,
        transducersCrashCourseMdast,
      ])
      setBlogPostList(blogPostList1)
    }
  }, [rubicoVersion])

  return [blogPostList, setBlogPostList]
}

export default useBlogPostList
