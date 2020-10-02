import readmeMdast from './mdast/readme.js'
import tourMdast from './mdast/tour.js'
import transducersMdast from './mdast/transducers.js'
import cronistComments from './mdast/comments.cronist.js'

// leave off image and title from original readme
readmeMdast.children = readmeMdast.children.slice(2)

// Map<(parsedCommentName string)=>(parsedComment object)>
const mdastBase = cronistComments.reduce(
  (result, item) => result.set(item.name, item), new Map())

mdastBase.set('article:readme', readmeMdast)
mdastBase.set('article:tour', tourMdast)
mdastBase.set('article:transducers', transducersMdast)

export default mdastBase
