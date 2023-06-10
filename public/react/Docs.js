import Layout from './Layout.js'
import Docs_1_9_7 from './Docs_1_9_7.js'

/**
 * @name Docs
 *
 * @synopsis
 * ```coffeescript [specscript]
 * Docs(props {
 * }) -> ReactElement
 * ```
 */
const Docs = ReactElement(props => {
  return Layout(props, [
    Docs_1_9_7(props),
  ])
})

export default Docs
