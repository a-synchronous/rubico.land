import ReactElementFromMdast from './ReactElementFromMdast.js'
import mdastBase from './mdastBase.js'
import Layout from './Layout.js'

const ReactElement = Arche(React)

const { Div } = ReactElement

// tourContent ReactElement
const tourContent = ReactElementFromMdast(mdastBase.get('article:tour'))

// Tour(props {}) -> ReactElement
const Tour = ReactElement(props => {
  return Layout(props, [
    Div([tourContent])
  ])
})

export default Tour
