const isArray = Array.isArray

/**
 * @name ReactElement
 *
 * @synopsis
 * ReactElement(
 *   type string|((props object)=>ReactObject),
 * )(innerText string) -> ReactObject
 *
 * ReactElement(
 *   type string|((props object)=>ReactObject),
 * )(props Object, children Array<ReactObject>) -> ReactObject
 *
 * @description
 * Create a React object
 *
 * ```javascript [playground]
 * const P = ReactElement('p')
 *
 * const MyElement = ReactElement(props => {
 *   return P(props.message)
 * })
 *
 * MyElement({ message: 'hey' }) // <p>hey</p>
 *
 * const myDivHelloWorld = Div([H1('hello'), 'world'])
 * // <div><h1>hello</h1> world</div>
 * ```
 */
const ReactElement = type => function creatingReactElement(arg0, arg1) {
  if (isArray(arg0)) {
    return React.createElement(type, {}, ...arg0)
  }
  if (typeof arg0 == 'string') {
    return React.createElement(type, {}, arg0)
  }
  return React.createElement(type, arg0, arg1)
}

export const Script = ReactElement('script')
export const Html = ReactElement('html')
export const Body = ReactElement('body')
export const Section = ReactElement('section')
export const Span = ReactElement('span')
export const Div = ReactElement('div')
export const Img = ReactElement('img')
export const H1 = ReactElement('h1')
export const H2 = ReactElement('h2')
export const H3 = ReactElement('h3')
export const H4 = ReactElement('h4')
export const H5 = ReactElement('h5')
export const H6 = ReactElement('h6')
export const A = ReactElement('a')
export const P = ReactElement('p')
export const B = ReactElement('b')
export const Q = ReactElement('q')
export const I = ReactElement('i')
export const Ul = ReactElement('ul')
export const Ol = ReactElement('ol')
export const Li = ReactElement('li')
export const Textarea = ReactElement('textarea')
export const Button = ReactElement('button')
export const Iframe = ReactElement('iframe')
export const Br = ReactElement('br')
export const Code = ReactElement('code')
export const Pre = ReactElement('pre')

export default ReactElement
