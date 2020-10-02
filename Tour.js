import ReactElement, { Div } from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import mdastBase from './mdastBase.js'

// tourContent ReactElement
const tourContent = ReactElementFromMdast(mdastBase.get('article:tour'))

// () -> ReactElement
const Tour = ReactElement(() => Div([
  tourContent,
]))

export default Tour
