import ReactElement, {
  A, P, B, Button, Img,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section,
  Script, Iframe,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const forEach = func => map(tap(func))

const {
  createElement,
  useState, useEffect, useReducer,
  useRef, useCallback,
} = React

// ActiveSpacer() -> ActiveSpacer DOMElement.span
const ActiveSpacer = function () {
  const result = document.createElement('span')
  result.style.position = 'absolute'
  result.style.height = '4px'
  result.style.width = '72px'
  result.style.right = '-8px'
  result.style.top = '32px'
  result.style.background = 'steelblue'
  result.style.border = 'none'
  result.style.borderRadius = '8px'
  return result
}

const DOM = {
  // removeChild(id string) -> ()
  removeElement(element) {
    if (element.parentNode == null) {
      return undefined
    }
    element.parentNode.removeChild(element)
  },
}

// DOMElement
// one element is transferred when it is appended
const activeSpacer = ActiveSpacer()

const tabAnchors = [...document.querySelectorAll('header > nav > a')]

tabAnchors.forEach(anchor => {
  if (anchor.pathname == window.location.pathname) {
    anchor.appendChild(activeSpacer)
  }
  anchor.addEventListener('click', function handler(event) {
    event.preventDefault()
    if (anchor.pathname == window.location.pathname) {
      return undefined
    }
    history.pushState({}, '', anchor.pathname)
    anchor.appendChild(activeSpacer)
  })
})

const homeAnchor = document.getElementById('home')

homeAnchor.addEventListener('click', function handler(event) {
  event.preventDefault()
  DOM.removeElement(activeSpacer)
  history.pushState({}, '', homeAnchor.pathname)
})
