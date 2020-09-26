import ReactElement, {
  A, P, B, Q, Button, Img, Br,
  H1, H2, H3, H4, H5, H6,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'

// backToTop ReactElement
const backToTop = Button({
  id: 'back-to-top',
  onClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },
}, 'Back to top')

export default backToTop
