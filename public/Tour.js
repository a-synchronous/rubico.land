import ReactElementFromMdast from './ReactElementFromMdast.js'
import mdastBase from './mdastBase.js'

const ReactElement = Arche(React)

const { Div } = ReactElement

// tourContent ReactElement
const tourContent = ReactElementFromMdast(mdastBase.get('article:tour'))

// () -> ReactElement
const Tour = ReactElement(() => Div([tourContent]))

export default Tour
