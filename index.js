import rubico from 'https://unpkg.com/rubico/es.js'

const {
  pipe, fork, assign,
  tap, tryCatch, switchCase,
  map, filter, reduce, transform, flatMap,
  any, all, and, or, not,
  eq, gt, lt, gte, lte,
  get, pick, omit,
} = rubico

const {
  createElement,
  useState, useEffect, useReducer,
  useRef, useCallback,
} = React

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

const Script = ReactElement('script')
const Html = ReactElement('html')
const Body = ReactElement('body')
const Section = ReactElement('section')
const Span = ReactElement('span')
const Div = ReactElement('div')
const Img = ReactElement('img')
const H1 = ReactElement('h1')
const H2 = ReactElement('h2')
const H3 = ReactElement('h3')
const H4 = ReactElement('h4')
const A = ReactElement('a')
const P = ReactElement('p')
const B = ReactElement('b')
const I = ReactElement('i')
const Ul = ReactElement('ul')
const Li = ReactElement('li')
const Textarea = ReactElement('textarea')
const Button = ReactElement('button')
const Iframe = ReactElement('iframe')
const Br = ReactElement('br')
const Code = ReactElement('code')
const Pre = ReactElement('pre')

const Root = ReactElement(() => {
  return H1('hey')
})

ReactDOM.render(Root({}), document.getElementById('js-root'))
