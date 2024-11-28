import rubicoV1 from 'https://unpkg.com/rubico@1/dist/rubico.es.min.js'
import rubicoV2 from 'https://unpkg.com/rubico@2/dist/rubico.es.min.js'
import Transducer from 'https://unpkg.com/rubico@2/dist/Transducer.es.min.js'
import FunctionNames from './FunctionNames.js'
import blogPostList from './blogPostList.js'

const pathPageMap = new Map()
const m = pathPageMap

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

/* TODO x function names
FunctionNames(x).forEach(funcName => {
  m.set(`/docs/x/${funcName}`, {
    path: `/docs/x/${funcName}`,
    title: `x/${funcName} - rubico documentation`,
    description: `Reference for x/${funcName}`,
  })
})
*/

export default pathPageMap
