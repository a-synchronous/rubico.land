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
      Div({ class: 'cta-links' }, [
        NavLink({ ...props, href: '/tour' }, [
          Button({ id: 'take-the-tour-button' }, 'Take the tour'),
        ]),
        NavLink({ ...props, href: '/docs' }, [
          Button({ id: 'read-the-docs-button' }, 'Read the docs'),
        ]),
        /*
        A({ href: '/tour' }, [
          Button({ id: 'take-the-tour-button' }, 'Take the tour'),
        ]),
        A({ href: '/docs' }, [
          Button({ id: 'read-the-docs-button' }, 'Read the docs'),
        ]),
        */
      ]),
    ])
  ])
})

export default Home
