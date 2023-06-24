import ReactElementFromMdast from './ReactElementFromMdast.js'
import readmeMdast from '../mdast/readme.js'
import Layout from './Layout.js'

const ReactElement = Arche(React)

const { Div, Button, A } = ReactElement

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast(readmeMdast)

// () -> Home ReactElement
const Home = ReactElement(props => {
  return Layout(props, [
    Div([
      readmeContent,
      A({ href: '/tour' }, [
        Button({ id: 'take-the-tour-button' }, 'Take the tour'),
      ]),
      A({ href: '/docs' }, [
        Button({ id: 'read-the-docs-button' }, 'Read the docs'),
      ]),
    ])
  ])
})

export default Home
