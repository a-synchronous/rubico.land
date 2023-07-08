import Layout from './Layout.js'
import Docs_1_9_7 from './Docs_1_9_7.js'
import DocsNavItem from './DocsNavItem.js'
import cronistComments from '../cronist/rubico-v2.0.1.js'
import useRubicoVersion from './useRubicoVersion.js'

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
  // const [rubicoVersion] = useRubicoVersion()
  return Layout(props, [
    // Docs_1_9_7(props),
    Div({ id: 'docs' }, [
      Nav([
        DocsNavItem('pipe'),
      ]),
    ]),
  ])
})

export default Docs
