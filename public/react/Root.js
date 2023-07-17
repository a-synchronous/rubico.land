import Home from './Home.js'
import Tour from './Tour.js'
import Docs from './Docs.js'
import Blog from './Blog.js'
import NotFound from './NotFound.js'
import Analytics from './Analytics.js'
import PathTitle from './PathTitle.js'
import useRubicoVersion from './useRubicoVersion.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'
import getCookie from './getCookie.js'
import cleanPath from './cleanPath.js'

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
      case 'SET_ACTIVE_BLOG_POST_HREF':
        return { ...state, activeBlogPostHref: action.activeBlogPostHref }
      default:
        return state
    }
  }, {
    path: cleanPath(window.location.pathname),
    activeBlogPostHref: null,
  })

  const [_, setIsHamburgerMenuActive] = useIsHamburgerMenuActive()

  const goto = path => {
    history.pushState({ path }, '', path)
    dispatch({ type: 'SET_PATH', path })
    document.title = PathTitle(path)
    setIsHamburgerMenuActive(false)
    Analytics.goto(path)
  }

  const setActiveBlogPostHref = activeBlogPostHref => {
    dispatch({ type: 'SET_ACTIVE_BLOG_POST_HREF', activeBlogPostHref })
  }

  {
    const { path } = appState
    useEffect(function scrollToTopOnPathChange() {
      scrollTo(0, 0)
    }, [path])
  }

  const updatePathWithLocation = () => {
    goto(cleanPath(window.location.pathname))
  }

  useEffect(() => {
    window.addEventListener('popstate', updatePathWithLocation)

    return () => {
      window.removeEventListener('popstate', updatePathWithLocation)
    }
  }, [])

  const childProps = { ...appState, goto, setActiveBlogPostHref }

  const { path } = appState

  console.log('Root:', { path })

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
