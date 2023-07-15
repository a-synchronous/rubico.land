import Layout from './Layout.js'
import tourV2Mdast from '../mdast/tour-v2.js'
import useRubicoVersion from './useRubicoVersion.js'
import ReactElementFromMdast from './ReactElementFromMdast.js'

tourV2Mdast.version = defaultRubicoVersion

// Tour(props {}) -> ReactElement
const Tour = ReactElement(props => {
  const [rubicoVersion] = useRubicoVersion()
  const [tourMdast, setTourMdast] = useState(tourV2Mdast)

  useEffect(function updateTourMdast() {
    if (tourMdast.version != rubicoVersion) {
      import(`../mdast/tour-${rubicoVersion}.js`).then(module => {
        const mdast = module.default
        mdast.version = rubicoVersion
        setTourMdast(mdast)
      })
    }
  }, [rubicoVersion])

  return Layout(props, [
    Div({ id: 'tour' }, [
      ReactElementFromMdast({ mdast: tourMdast })
    ]),
  ])
})

export default Tour
