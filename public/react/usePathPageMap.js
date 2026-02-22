import useGlobalState from './useGlobalState.js'
import rubicoV1 from 'https://unpkg.com/rubico@1/dist/rubico.es.min.js'
import rubicoV2 from 'https://unpkg.com/rubico@2/dist/rubico.es.min.js'
import Transducer from 'https://unpkg.com/rubico@2/dist/Transducer.es.min.js'
import FunctionNames from './FunctionNames.js'
import useBlogPostList from './useBlogPostList.js'

function createPathPageMap(options) {
  const { blogPostList } = options

  const m = new Map()

  m.set('/', {
    path: '/',
    title: 'rubico - [a]synchronous functional programming',
    description: 'A library for creating async-enabled function compositions.',
  })

  m.set('/tour', {
    path: '/tour',
    title: 'A tour of rubico',
    description: 'An overview of the rubico library',
  })

  m.set('/docs', {
    path: '/docs',
    title: 'rubico documentation',
    description: 'A reference for the rubico library',
  })

  m.set('/blog', {
    path: '/blog',
    title: 'rubico blog',
    description: 'A blog about the rubico library, JavaScript, and functional programming',
  })

  Array.from([
    FunctionNames(rubicoV1),
    FunctionNames(rubicoV2),
  ]).flat(1).forEach(funcName => {
    m.set(`/docs/${funcName}`, {
      path: `/docs/${funcName}`,
      title: `${funcName} - rubico documentation`,
      description: `Reference for ${funcName}`,
    })
  })

  FunctionNames(Transducer).forEach(funcName => {
    m.set(`/docs/Transducer.${funcName}`, {
      path: `/docs/Transducer.${funcName}`,
      title: `Transducer.${funcName} - rubico documentation`,
      description: `Reference for Transducer.${funcName}`,
    })
  })

  blogPostList.forEach(blogPost => {
    const { metadata } = blogPost
    const { href, title, description } = metadata
    m.set(href, { path: href, title, description })
  })

  return m
}

function usePathPageMap() {
  const [blogPostList] = useBlogPostList()
  const initial = createPathPageMap({ blogPostList })
  const [pathPageMap, setPathPageMap] = useGlobalState('pathPageMap', initial)

  useEffect(() => {
    setPathPageMap(createPathPageMap({ blogPostList }))
  }, [blogPostList])

  return pathPageMap
}

export default usePathPageMap
