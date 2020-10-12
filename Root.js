import Home from './Home.js'
import Tour from './Tour.js'
import Docs from './Docs.js'
import Blog from './Blog.js'
import NotFound from './NotFound.js'
import Analytics from './Analytics.js'
import curry2 from './curry2.js'
import __ from './placeholder.js'

const ReactElement = Arche(React)

const {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} = ReactElement

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const { useState, useEffect, useRef, useCallback, useReducer } = React

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

// rubico
const homeAnchor = document.getElementById('home')

// (prefix string, getter any=>string) => boolean
const startsWith = (prefix, getter) => value => getter(value).startsWith(prefix)

// initialState { path: string } -> ReactElement
const Root = ReactElement(pipe([
  curry2(useReducer, (state, action) => {
    switch (action.type) {
      case 'SET_PATH':
        return { ...state, path: action.path }
      default:
        return state
    }
  }, __),

  ([state, dispatch]) => {
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
    return { state, goto }
  },

  switchCase([
    startsWith('/tour', get('state.path')), Tour,
    startsWith('/docs', get('state.path')), Docs,
    startsWith('/blog', get('state.path')), Blog,
    startsWith('/', get('state.path')), Home,
    NotFound,
  ]),
]))

export default Root
