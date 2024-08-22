import NavLink from './NavLink.js'
import Slider from './Slider.js'
import GithubMark from './GithubMark.js'
import HamburgerMenu from './HamburgerMenu.js'
import HamburgerMenuIcon from './HamburgerMenuIcon.js'
import setCookie from './setCookie.js'
import useMediaQuery from './useMediaQuery.js'
import useRubicoVersion from './useRubicoVersion.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

/**
 * @name Layout
 *
 * @synopsis
 * ```coffeescript [specscript]
 * Layout(props {
 *   path: string,
 *   goto: function,
 *   children: ReactElement|Array<ReactElement>|string,
 * }) -> ReactElement
 * ```
 */
const Layout = ReactElement(props => {
  const { path, goto, children } = props

  const [mediaQuery] = useMediaQuery('(max-width: 768px)')
  const [rubicoVersion, setRubicoVersion] = useRubicoVersion()
  const [
    isHamburgerMenuActive, setIsHamburgerMenuActive,
  ] = useIsHamburgerMenuActive()

  useEffect(function resetHamburgerMenu() {
    if (!mediaQuery.matches && isHamburgerMenuActive) {
      setIsHamburgerMenuActive(false)
    }
  }, [mediaQuery.matches])

  return Div({ id: 'layout' }, [
    Nav([
      Div({ class: 'home' }, [
        A({
          id: 'home-link',
          href: '/',
        }, [
          Img({
            src: 'https://raw.githubusercontent.com/a-synchronous/assets/master/rubico-logo.png',
            alt: 'rubico-national-park',
          }),
          Span({ class: 'text1' }, 'rubico'),
        ]),

        Select({
          onChange(event) {
            setCookie('rubicoVersion', event.target.value)
            setRubicoVersion(event.target.value)
          },
        }, [
          Option({ value: 'v1', selected: rubicoVersion == 'v1' }, 'v1'),
          Option({ value: 'v2', selected: rubicoVersion == 'v2' }, 'v2'),
        ]),

        Div({ class: 'links' }, [
          NavLink({ ...props, href: '/tour' }, 'Tour'),
          NavLink({ ...props, href: '/docs' }, 'Docs'),
          NavLink({ ...props, href: '/blog' }, 'Blog'),
        ]),
      ]),

      // Span({ class: 'nav-spacer' }),


      Div({ class: 'right-links' }, [
        mediaQuery.matches ? [
          Button({
            id: 'hamburger-menu-icon',
            class: isHamburgerMenuActive ? 'active' : '',
            onClick() {
              setIsHamburgerMenuActive(!isHamburgerMenuActive)
            },
          }, [
            HamburgerMenuIcon(),
          ]),
        ] : [
          A({
            id: 'github-link',
            href: 'https://github.com/a-synchronous/rubico',
          }, [
            GithubMark(),
          ])
        ]
      ]),
    ]),

    Slider({
      index: isHamburgerMenuActive ? 1 : 0,
      translateOffset: '10%',
    }, [
      Main([children]),
      HamburgerMenu(props),
    ]),

    Footer([
      P({
        style: { fontSize: '12px', color: 'grey' },
      }, `© ${new Date().getFullYear()} Richard Tong`),
    ]),
  ])
})

export default Layout
