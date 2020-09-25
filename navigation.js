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
  result.style.background = '#65799B'
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

// rubico
const homeAnchor = document.getElementById('home')

homeAnchor.addEventListener('click', event => {
  event.preventDefault()
  DOM.removeElement(activeSpacer)
  history.pushState({}, '', homeAnchor.pathname)
})

// Tour Docs Blog
const tabAnchors = [...document.querySelectorAll('header > nav > a')]

tabAnchors.forEach(anchor => {
  if (window.location.pathname.startsWith(anchor.pathname)) {
    anchor.appendChild(activeSpacer)
  }
  anchor.addEventListener('click', event => {
    event.preventDefault()
    if (window.location.pathname.startsWith(anchor.pathname)) {
      return undefined
    }
    history.pushState({}, '', anchor.pathname)
    anchor.appendChild(activeSpacer)
  })
})

// history
window.addEventListener('popstate', () => {
  DOM.removeElement(activeSpacer)
  const windowLocationPathname = window.location.pathname
  tabAnchors.forEach(anchor => {
    if (windowLocationPathname.startsWith(anchor.pathname)) {
      anchor.appendChild(activeSpacer)
    }
  })
})
