import Home from './Home.js'
import Tour from './Tour.js'
import Docs from './Docs_1_9_7.js'
import Blog from './Blog.js'
import NotFound from './NotFound.js'
import Analytics from './Analytics.js'

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

// rubico
const homeAnchor = document.getElementById('home')

// initialState { path: string } -> ReactElement
const Root = ReactElement(props => {
  const [appState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_PATH':
        return { ...state, path: action.path }
      default:
        return state
    }
  }, {
    path: window.location.pathname,
  })

  const updatePathWithLocation = () => {
    dispatch({ type: 'SET_PATH', path: window.location.pathname })
  }

  const goto = path => {
    history.pushState({ path }, '', path)
    dispatch({ type: 'SET_PATH', path })
    setTimeout(() => {
      const active = document.querySelector('#active-spacer')
      if (active != null) {
        active.scrollIntoView({ behavior: 'smooth' })
      }
    }, 325)
    Analytics.goto(path)
  }

  useEffect(() => {
    // scroll active into view on first render
    const active = document.querySelector('#active-spacer')
    if (active != null) {
      active.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', updatePathWithLocation)
    homeAnchor.addEventListener('click', updatePathWithLocation)
    tabAnchors.forEach(anchor => {
      anchor.addEventListener('click', updatePathWithLocation)
    })

    return () => {
      window.removeEventListener('popstate', updatePathWithLocation)
      homeAnchor.removeEventListener('click', updatePathWithLocation)
      tabAnchors.forEach(anchor => {
        anchor.removeEventListener('click', updatePathWithLocation)
      })
    }
  }, [])

  const childProps = { ...appState, goto }

  const { path } = appState

  if (path.startsWith('/tour')) {
    return Tour(childProps)
  }
  if (path.startsWith('/docs')) {
    return Docs(childProps)
  }
  if (path.startsWith('/blog')) {
    return Blog(childProps)
  }
  if (path == '/') {
    return Home(childProps)
  }
  return NotFound(childProps)
})

export default Root
