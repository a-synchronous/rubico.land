import ReactElement, {
  H1, H2, H3, H4, H5, H6,
  A, P, B, Q, Button, Img, Br,
  Span, Div, Section, Article,
  Script, Iframe, Blockquote,
  Ul, Ol, Li,
  Code, Pre,
} from './ReactElement.js'
import CodeRunner from './CodeRunner.js'
import CodeViewer from './CodeViewer.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

// string => string
const anchorHashFormat = value => value
  .replace(/\[([\w ]+)\]/g, '$1-')
  .replace(/ /g, '-')
  .toLowerCase()

// mdast object => anchorHash string
const anchorHashFromMdast = function (mdast) {
  switch (get('children[0].type')(mdast)) {
    case 'linkReference':
      const firstChar = get('children[0].label')(mdast),
        rest = get('children[1].value')(mdast)
      return `[${firstChar}]${rest}`
    default:
      return get('children[0].value')(mdast)
  }
}

// mdast {
//   type: string,
//   value: string,
//   children: Array<this>,
// } -> ReactElement
const ReactElementFromMdast = function (mdast, props = {}) {
  const recurse = mdast => 'children' in mdast
    ? mdast.children.map(ReactElementFromMdast)
    : mdast.value

  switch (mdast.type) {
    case 'root':
      return Article(props, recurse(mdast))
    case 'heading':
      switch (mdast.depth) {
        case 1:
          const anchorHash = pipe([
            anchorHashFromMdast,
            anchorHashFormat,
          ])(mdast)
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H1({ id: anchorHash }, recurse(mdast))])
        case 2: return H2(recurse(mdast))
        case 3: return H3(recurse(mdast))
        case 4: return H4(recurse(mdast))
        case 5: return H5(recurse(mdast))
        default: return H6(recurse(mdast))
      }

    case 'image':
      return Img({ src: mdast.url, alt: mdast.alt })
    case 'blockquote':
      return Blockquote(recurse(mdast))
    case 'paragraph':
      return P(recurse(mdast))
    case 'strong':
      return B(recurse(mdast))
    case 'text':
      return Span(recurse(mdast))
    case 'list':
      return mdast.ordered ? Ol(recurse(mdast)) : Ul(recurse(mdast))
    case 'listItem':
      return Li(recurse(mdast))

    case 'inlineCode':
      return Code(recurse(mdast))
    case 'code':
      if (mdast.lang == 'coffeescript') {
        return Div([
          H3('Synopsis'),
          CodeViewer({
            code: mdast.value,
            mode: mdast.lang,
            theme: 'coffeescript',
          }),
        ])
      }
      if (mdast.meta == '[theme=default]') {
        return CodeViewer({ code: mdast.value, mode: mdast.lang, theme: 'default' })
      }
      return mdast.meta == '[playground]'
        ? CodeRunner({ code: mdast.value, mode: mdast.lang })
        : CodeViewer({ code: mdast.value, mode: mdast.lang, theme: 'rubico' })
    case 'link':
      return A({ href: mdast.url }, recurse(mdast))
    case 'linkReference':
      return Span([Span('['), recurse(mdast), Span(']')])
    case 'html':
      if (mdast.value == '<br />') {
        return Br()
      }
      return Span('')
    default:
      return Span(mdast.value)
  }
}

export default ReactElementFromMdast
