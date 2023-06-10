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

  return Div({ id: 'layout' }, [
    Header([
      A({
        id: 'home',
        href: '/',
      }, [
        Img({
          src: 'https://raw.githubusercontent.com/a-synchronous/assets/master/rubico-logo.png',
          alt: 'rubico-national-park',
        }),
        Span({ class: 'text1' }, 'rubico'),
      ]),

      Nav([
        A({
          href: '/tour',
          class: path.startsWith('/tour') ? 'active' : '',
          onClick(event) {
            event.preventDefault()
            goto('/tour')
          },
        }, 'Tour'),
        A({
          href: '/docs',
          class: path.startsWith('/docs') ? 'active' : '',
          onClick(event) {
            event.preventDefault()
            goto('/docs')
          },
        }, 'Docs'),
        A({
          href: '/blog',
          class: path.startsWith('/blog') ? 'active' : '',
          onClick(event) {
            event.preventDefault()
            goto('/blog')
          },
        }, 'Blog'),
      ]),

      A({
        id: 'github-link',
        href: 'https://github.com/a-synchronous/rubico',
      }, [
        Span({ class: 'text2' }, [
          'Github',
          Svg({
            x: '0px',
            y: '0px',
            viewBox: '0 0 100 100',
            width: '20',
            height: '20',
          }, [
            Path({
              fill: 'currentColor',
              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
            }),
            Polygon({
              fill: 'currentColor',
              points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
            }),
          ]),
        ]),
      ]),
    ]),

    children,

    Footer([
      P({
        style: { fontSize: '12px', color: 'grey' },
      }, '© 2023 Richard Tong'),
    ]),
  ])
})

export default Layout
