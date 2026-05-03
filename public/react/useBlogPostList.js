import useGlobalState from './useGlobalState.js'
import useRubicoVersion from './useRubicoVersion.js'
import MdastBlogMetadata from './MdastBlogMetadata.js'
import transducersCrashCourseMdast from '../mdast/transducers-crash-course.js'
import aSynchronousProgrammingIntroMdast from '../mdast/a-synchronous-functional-programming-intro.js'
import aSynchronousProgrammingDataTypesMdast from '../mdast/a-synchronous-functional-programming-data-types.js'
import aSynchronousProgrammingHandlingHTTPMdast from '../mdast/a-synchronous-functional-programming-handling-http.js'
import aSynchronousProgrammingStatementsVsExpressionsMdast from '../mdast/a-synchronous-functional-programming-statements-vs-expressions.js'

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

const mdastList = [
  transducersCrashCourseMdast,
  aSynchronousProgrammingIntroMdast,
  aSynchronousProgrammingDataTypesMdast,
  aSynchronousProgrammingHandlingHTTPMdast,
  aSynchronousProgrammingStatementsVsExpressionsMdast,
]

const v1MdastList = mdastList.filter(mdast => mdast != transducersCrashCourseMdast)

const initial = createBlogPostList(mdastList)

function useBlogPostList() {
  const [rubicoVersion] = useRubicoVersion()
  const [blogPostList, setBlogPostList] = useGlobalState('blogPostList', initial)

  useEffect(() => {
    if (rubicoVersion == 'v1') {
      setBlogPostList(createBlogPostList(v1MdastList))
    } else {
      setBlogPostList(createBlogPostList(mdastList))
    }
  }, [rubicoVersion])

  return [blogPostList, setBlogPostList]
}

export default useBlogPostList
