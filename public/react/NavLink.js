/**
 * @name NavLink
 *
 * @synopsis
 * ```coffeescript [specscript]
 * NavLink(props {
 *   path: string,
 *   href: string,
 *   goto: function,
 *   children: Array<ReactElement>|ReactElement|string,
 * }) -> ReactElement
 * ```
 */
const NavLink = ReactElement(props => {
  const { path, href, goto, children } = props
  let isActive = false
  if (href == '/') {
    if (href == path) {
      isActive = true
    }
  } else if (path.startsWith(href)) {
    isActive = true
  }

  console.log('NavLink', { path, href, isActive })

  return A({
    href,
    class: isActive ? 'nav-link active' : 'nav-link',
    onClick(event) {
      event.preventDefault()
      goto(href)
    },
  }, children)
})

export default NavLink
