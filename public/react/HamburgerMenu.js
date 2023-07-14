import NavLink from './NavLink.js'
import DocsNav from './DocsNav.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

const HamburgerMenu = ReactElement(props => {
  const [isHamburgerMenuActive] = useIsHamburgerMenuActive()
  return Div({
    id: 'hamburger-menu',
    class: isHamburgerMenuActive ? 'active' : '',
  }, [
    Nav([
      NavLink({ ...props, href: '/' }, 'Home'),
      Hr(),
      NavLink({ ...props, href: '/tour' }, 'Tour'),
      Hr(),
      NavLink({ ...props, href: '/docs' }, 'Docs'),
      Hr(),
      NavLink({ ...props, href: '/blog' }, 'Blog'),
    ]),

    Div({ class: 'docs-nav' }, [
      DocsNav(props),
    ]),
  ])
})

export default HamburgerMenu
