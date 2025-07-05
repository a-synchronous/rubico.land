import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import NavLink from './NavLink.js'
import readmeMdast from '../mdast/readme.js'

const ReactElement = Arche(React)

const { Div, Button, A } = ReactElement

// removes the rubico link heading and duplicate logo
readmeMdast.children.splice(0, 2)

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast({ mdast: readmeMdast })

// () -> Home ReactElement
const Home = ReactElement(props => {
  return Layout(props, [
    Div({ id: 'home' }, [
      readmeContent,
    ])
  ])
})

export default Home
