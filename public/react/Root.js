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
import useGlobalState from './useGlobalState.js'
import blogPostList from './blogPostList.js'

const blogUrls = blogPostList.map(get('metadata.href'))

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
  }, {}, () => {
    const path = cleanPath(window.location.pathname)
    return {
      path,
      activeBlogPostHref: blogUrls.find(href => href == path),
    }
  })

  const [_, setIsHamburgerMenuActive] = useIsHamburgerMenuActive()

  const goto = path => {
    history.pushState({ path }, null, path)
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


  const [transition, setTransition] =
    useGlobalState('BlogPost:transition', 'none')

  useEffect(() => {
    const handlePopState = e => {
      console.log('popstate', e)
      const { path = window.location.pathname } = e.state ?? {}
      if (blogUrls.includes(path)) {
        setActiveBlogPostHref(path)
      } else {
        setTransition('none')
      }
      dispatch({ type: 'SET_PATH', path })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // handle anchor
  useEffect(() => {
    const anchor = window.location.hash
    if (anchor) {
      const id = anchor.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          window.scrollTo(0, el.offsetTop + 50)
        } else {
          console.error(`element not found for id ${id} page ${window.location.pathname}`)
        }
      }, 100)
    }
  }, [])

  const childProps = { ...appState, goto, setActiveBlogPostHref }

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
