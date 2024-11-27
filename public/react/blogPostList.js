import MdastBlogMetadata from './MdastBlogMetadata.js'
import transducersMdastV2 from '../mdast/transducers-crash-course-rubico-v2.js'
import transducersMdastV1 from '../mdast/transducers-crash-course-rubico-v1.js'
import aSynchronousProgrammingIntroMdast from '../mdast/a-synchronous-functional-programming-intro.js'

const blogPostList = [
  aSynchronousProgrammingIntroMdast,
  transducersMdastV2,
  transducersMdastV1,
].map(mdast => ({
  mdast,
  metadata: MdastBlogMetadata(mdast),
}))

export default blogPostList
