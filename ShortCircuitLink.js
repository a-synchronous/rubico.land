import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'

// { goto: function, href: string, children: Array } -> anchor React.Element
const ShortCircuitLink = ReactElement(({
  goto, href, children,
}) => A({
  href,
  class: 'short-circuit-link',
  onClick(event) {
    event.preventDefault()
    goto(href)
  },
}, children))

/* example
// { goto: function } -> Home React.Element
const Home = ReactElement(({ goto }) => Div([
  mdastToReactElement(parsedReadme),
  Div({ class: 'flex-center' }, [
    ShortCircuitLink({ goto, href: '/tour' }, 'Tour'),
    ShortCircuitLink({ goto, href: '/docs' }, 'Docs'),
    ShortCircuitLink({ goto, href: '/blog' }, 'Blog'),
  ]),
]))
*/

export default ShortCircuitLink
