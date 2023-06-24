import ReactElementFromMdast from './ReactElementFromMdast.js'
import tourMdast from '../mdast/tour.js'
import Layout from './Layout.js'

// tourContent ReactElement
const tourContent = ReactElementFromMdast(tourMdast)

// Tour(props {}) -> ReactElement
const Tour = ReactElement(props => {
  return Layout(props, [
    Div([tourContent])
  ])
})

export default Tour
