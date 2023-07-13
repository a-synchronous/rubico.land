const DatePublished = require('./DatePublished')

/**
 * @name MdastBlogMetadata
 *
 * @synopsis
 * ```coffeescript [specscript]
 * MdastBlogMetadata(mdast {
 *   children: Array<{
 *     type: string,
 *     value: string,
 *   }>
 * }) -> metadata {
 *   title: string,
 *   published: string,
 *   path: string,
 *   author: string,
 *   description: string,
 * }
 * ```
 */
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
    description: data.description,
  }
  return data
}

module.exports = MdastBlogMetadata
