import ReactElementFromMdast from './ReactElementFromMdast.js'
import Layout from './Layout.js'
import NavLink from './NavLink.js'
import useMediaQuery from './useMediaQuery.js'
import readmeMdast from '../mdast/readme.js'

const ReactElement = Arche(React)

const { Div, Button, A } = ReactElement

// removes the rubico link heading and duplicate logo
readmeMdast.children.splice(0, 3)

// readmeContent ReactElement
const readmeContent = ReactElementFromMdast({ mdast: readmeMdast })

// () -> Home ReactElement
const Home = ReactElement(props => {
  const [mediaQuery] = useMediaQuery('(max-width: 768px)')

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(() => {
        const offset = mediaQuery.matches ? 200 : 300
        const scrollToElement = document.getElementById(anchor.slice(1))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop + offset
          window.scrollTo(0, desiredScrollY)
        }
      }, 10)
    }
  }, [mediaQuery])

  return Layout(props, [
    Div({ id: 'home' }, [
      readmeContent,
    ])
  ])
})

export default Home
