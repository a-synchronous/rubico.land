// any -> string
const inspect = function (value) {
  if (Array.isArray(value)) {
    return `[${value.map(inspect).join(', ')}]`
  }
  if (ArrayBuffer.isView(value)) {
    return `${value.constructor} [${value.join(', ')}]`
  }
  if (typeof value == 'string') {
    return value
  }
  if (value == null) {
    return `${value}`
  }
  if (value.constructor == Set) {
    return `Set { ${[...value].map(inspect).join(', ')} }`
  }
  if (value.constructor == Map) {
    let result = 'Map { '
    const entries = []
    for (const [key, item] of value) {
      entries.push(`${key} => ${inspect(item)}`)
    }
    result += entries.join(', ')
    result += ' }'
    return result
  }
  if (value.constructor == Object) {
    let result = '{ '
    const entries = []
    for (const key in object) {
      entries.push(key + ': ' + inspect(object[key]))
    }
    result += entries.join(', ')
    result += ' }'
    return result
  }
  return `${value}`
}

export default inspect
