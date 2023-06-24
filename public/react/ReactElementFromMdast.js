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
  switch (get('children[0].type')(mdast)) {
    case 'linkReference':
      const firstChar = get('children[0].label')(mdast),
        rest = get('children[1].value')(mdast)
      return `[${firstChar}]${rest}`
    default:
      return get('children[0].value')(mdast)
  }
}

// mdast -> ReactElement
const ReactElementFromMdastRecurse = function (mdast, props = {}) {
  return isArray(mdast.children)
    ? mdast.children.map(ReactElementFromMdast)
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

// mdast {
//   type: string,
//   value: string,
//   children: Array<this>,
// } -> ReactElement
const ReactElementFromMdast = function (mdast, props = {}) {
  switch (mdast.type) {
    case 'definition':
      switch (mdast.identifier) {
        case 'meta':
        case 'author':
        case 'published':
          return P({ className: 'blog-metadata' }, mdast.title)
        default:
          return Span()
      }
    case 'root':
      return Article(props, ReactElementFromMdastRecurse(mdast, props))
    case 'heading':
      switch (mdast.depth) {
        case 1:
          const anchorHash = pipe(mdast, [
            tap(console.log),
            anchorHashFromMdast,
            tap(console.log),
            anchorHashFormat,
          ])
          return A({
            class: 'anchor-hash',
            href: `#${anchorHash}`,
            style: { display: 'flex', placeItems: 'center' },
          }, [H1({ id: anchorHash }, ReactElementFromMdastRecurse(mdast))])
        case 2: return H2(ReactElementFromMdastRecurse(mdast))
        case 3: return H3(ReactElementFromMdastRecurse(mdast))
        case 4: return H4(ReactElementFromMdastRecurse(mdast))
        case 5: return H5(ReactElementFromMdastRecurse(mdast))
        default: return H6(ReactElementFromMdastRecurse(mdast))
      }

    case 'image':
      return Img({ src: mdast.url, alt: mdast.alt })
    case 'blockquote':
      return Blockquote(ReactElementFromMdastRecurse(mdast))
    case 'paragraph':
      return P(ReactElementFromMdastRecurse(mdast))
    case 'strong':
      return B(ReactElementFromMdastRecurse(mdast))
    case 'text':
      return Span(ReactElementFromMdastRecurse(mdast))
    case 'list':
      return mdast.ordered
        ? Ol(ReactElementFromMdastRecurse(mdast))
        : Ul(ReactElementFromMdastRecurse(mdast))
    case 'listItem':
      return Li(ReactElementFromMdastRecurse(mdast))
    case 'inlineCode':
      return Code(ReactElementFromMdastRecurse(mdast))

    case 'code':
      switch (mdast.meta) {
        case '[specscript]':
          return Div([
            H3('Syntax'),
            CodeViewer({
              code: mdast.value,
              mode: mdast.lang,
              theme: 'coffeescript',
            }),
          ])
        case '[playground]':
          const [code, imports] = codeSpliceImports(mdast.value)
          return CodeRunner({
            code,
            mode: mdast.lang,
            theme: 'rubico',
            imports: {
              ...imports,
              rubico: `https://unpkg.com/rubico@${rubicoPlaygroundVersion}/dist/rubico.es.min.js`,
              Transducer: `https://unpkg.com/rubico@${rubicoPlaygroundVersion}/dist/Transducer.es.min.js`,
            },
          })
        case '[node]':
          return CodeViewer({
            code: mdast.value,
            mode: mdast.lang,
            theme: 'rubico',
          })
        default:
          return CodeViewer({
            code: mdast.value,
            mode: mdast.meta == null ? mdast.lang : mdast.meta.slice(1, -1),
            theme: 'default',
          })
      }

    case 'link':
      return A({ href: mdast.url }, ReactElementFromMdastRecurse(mdast))
    case 'linkReference':
      return Span([Span('['), ReactElementFromMdastRecurse(mdast), Span(']')])
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
