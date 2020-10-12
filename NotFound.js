const ReactElement = Arche(React)

const { H1 } = ReactElement

// () -> NotFound ReactElement
const NotFound = ReactElement(() => H1('Not Found'))

export default NotFound
