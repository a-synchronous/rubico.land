import CodeRunner from './CodeRunner.js'
import CodeViewer from './CodeViewer.js'

const isArray = Array.isArray

// string => string
const anchorHashFormat = value => value
  .replace(/\[([\w ]+)\]/g, '$1-')
  .replace(/ /g, '-')
  .toLowerCase()

// mdast object => anchorHash string
const anchorHashFromMdast = function (mdast) {
  const t = get(mdast, 'children[0].type')
  switch (t) {
    case 'linkReference':
      const firstChar = get(mdast, 'children[0].label'),
        rest = get(mdast, 'children[1].value')
      return `[${firstChar}]${rest}`
    case 'text':
      return get(mdast, 'children[0].value')
    default:
      return ''
  }
}

// mdast -> ReactElement
const ReactElementFromMdastRecurse = function ({ mdast, metadata }) {
  return isArray(mdast.children)
    ? mdast.children.map(mdast => ReactElementFromMdast({ mdast, metadata }))
    : mdast.value
}

// code string => [code string, imports Object<string=>string>]
const codeSpliceImports = function (code) {
  const imports = {}
  let result = code
  while (result.includes('import')) {
    result = result.replace(/import (\w+) from '([\s\S]+?)'\n/, (
      match, name, url,
    ) => {
      imports[name] = url
      return ''
    })
  }
  result = result.trimStart()
  return [result, imports]
}

// ReactElementFromMdast({
//   mdast: {
//     type: string,
//     value: string,
//     children: Array<this>,
//   },
//   metadata: {
//     disableCopyButton: boolean,
//   },
// )) -> ReactElement
const ReactElementFromMdast = ReactElement(props => {
  const { mdast, metadata } = props

  switch (mdast.type) {
    case 'yaml': {
      return []
    }
      
    case 'definition':
      switch (mdast.identifier) {
        case 'meta':
        case 'author':
        case 'published':
        case 'updated':
          return P({ className: 'blog-metadata' }, mdast.title)
        default:
          return Span()
      }
    case 'root':
      return Article(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'heading':
      switch (mdast.depth) {
        case 1: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H1({ id: anchorHash }, ReactElementFromMdastRecurse({ mdast, metadata }))])
        }
        case 2: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H2({ id: anchorHash }, ReactElementFromMdastRecurse({ mdast, metadata }))])
        }
        case 3: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H3({ id: anchorHash }, ReactElementFromMdastRecurse({ mdast, metadata }))])
        }
        case 4: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H4({ id: anchorHash }, ReactElementFromMdastRecurse({ mdast, metadata }))])
        }
        case 5: {
          const anchorHash = pipe(mdast, [
            anchorHashFromMdast,
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H5({ id: anchorHash }, ReactElementFromMdastRecurse({ mdast, metadata }))])
        }
        default: return H6(ReactElementFromMdastRecurse({ mdast, metadata }))
      }

    case 'image':
      return Div({ class: 'image' }, [
        Img({ src: mdast.url, alt: mdast.alt })
      ])
    case 'blockquote':
      return Blockquote(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'paragraph':
      return P(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'strong':
      return B(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'text':
      return Span(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'list':
      return mdast.ordered
        ? Ol({ start: mdast.start ?? 1 }, ReactElementFromMdastRecurse({ mdast, metadata }))
        : Ul(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'listItem':
      return Li(ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'inlineCode':
      return Code(ReactElementFromMdastRecurse({ mdast, metadata }))

    case 'code':
      switch (mdast.meta) {
        case '[specscript]':
          return Div([
            // H3('Syntax'),
            CodeViewer({
              code: mdast.value,
              mode: mdast.lang,
              theme: 'coffeescript',
              metadata,
            }),
          ])
        case '[playground]':
          const [code, imports] = codeSpliceImports(mdast.value)
          return CodeRunner({
            code,
            mode: mdast.lang,
            theme: 'rubico',
            imports,
          })
        case '[node]':
          return CodeViewer({
            code: mdast.value,
            mode: mdast.lang,
            theme: 'rubico',
            metadata,
          })
        default:
          return CodeViewer({
            code: mdast.value,
            mode: mdast.meta == null ? mdast.lang : mdast.meta.slice(1, -1),
            theme: 'default',
            metadata,
          })
      }

    case 'link':
      return A({ href: mdast.url }, ReactElementFromMdastRecurse({ mdast, metadata }))
    case 'linkReference':
      return Span([Span('['), ReactElementFromMdastRecurse({ mdast, metadata }), Span(']')])
    case 'html':
      if (mdast.value == '<br />' || mdast.value == '<br>') {
        return Br()
      }
      return Span('')
    default:
      return Span(mdast.value)
  }
})

export default ReactElementFromMdast
