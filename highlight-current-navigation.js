const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

/**
 * @name ColorfulSpacer
 *
 * @synopsis
 * ColorfulSpacer() -> colorfulSpacer DOMElement.span
 */
const ColorfulSpacer = function () {
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

// current link styling
const navbarLinks = document.querySelectorAll('#navbar > nav > a')

// { pathname } -> boolean
const isNavbarLinkCurrent = eq(window.location.pathname, get('pathname'))

// object|undefined
const currentNavbarLink = [...navbarLinks].find(isNavbarLinkCurrent)
if (typeof currentNavbarLink == 'object') {
  currentNavbarLink.style.position = 'relative'
  currentNavbarLink.appendChild(ColorfulSpacer())
}
