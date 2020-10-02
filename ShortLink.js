import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'

// { goto: function, href: string, children: Array } => anchor React.Element
const ShortLink = ReactElement(({
  goto, href, children,
}) => A({
  href,
  class: 'short-link',
  onClick(event) {
    event.preventDefault()
    goto(href)
  },
}, children))

export default ShortLink
