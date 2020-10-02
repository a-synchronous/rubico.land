import ReactElement, { Div, Button, A } from './ReactElement.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'
import mdastBase from './mdastBase.js'

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast(mdastBase.get('article:readme'))

// () -> Home ReactElement
const Home = ReactElement(() => Div([
  readmeContent,
  A({ href: '/tour' }, [
    Button({ id: 'take-the-tour-button' }, 'Take the tour'),
  ]),
  A({ href: '/docs' }, [
    Button({ id: 'read-the-docs-button' }, 'Read the docs'),
  ]),
]))

export default Home
