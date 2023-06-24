import DatePublished from './DatePublished.js'

const MdastBlogMetadata = function (mdast) {
  const yamlChild = mdast.children.find(eq('yaml', get('type')))
  if (yamlChild == null) {
    return {}
  }
  const data = pipe(yamlChild.value.split('\n'), [
    map(keyValue => keyValue.split(': ')),
    Object.fromEntries,
  ])
  return {
    title: data.title,
    published: DatePublished(data.date),
    path: data.path,
    author: data.author,
  }
  return data
}

export default MdastBlogMetadata
