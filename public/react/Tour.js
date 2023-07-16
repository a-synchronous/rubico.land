import Layout from './Layout.js'
import useRubicoVersion from './useRubicoVersion.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'

// Tour(props {}) -> ReactElement
const Tour = ReactElement(props => {
  const [rubicoVersion] = useRubicoVersion()
  const [tourMdast, setTourMdast] = useState(null)

  useEffect(function updateTourMdast() {
    import(`../mdast/tour-${rubicoVersion}.js`).then(module => {
      const mdast = module.default
      setTourMdast(mdast)
    })
  }, [rubicoVersion])

  return Layout(props, [
    Div({ id: 'tour' }, [
      tourMdast == null ? [] : [
        ReactElementFromMdast({ mdast: tourMdast })
      ]
    ]),
  ])
})

export default Tour
