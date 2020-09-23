// any -> string
const inspect = function (value, depth = 0) {
  const inspectDeeper = item => inspect(item, depth + 1)
  if (Array.isArray(value)) {
    return `[${value.map(inspectDeeper).join(', ')}]`
  }
  if (ArrayBuffer.isView(value)) {
    return `${value.constructor.name} [${value.join(', ')}]`
  }
  if (typeof value == 'string') {
    return depth == 0 ? value : `'${value}'`
  }
  if (value == null) {
    return `${value}`
  }
  if (value.constructor == Set) {
    let result = `Set { `
    const resultValues = []
    for (const item of value) {
      resultValues.push(inspectDeeper(item))
    }
    result += resultValues.join(', ')
    result += ' }'
    return result
  }
  if (value.constructor == Map) {
    let result = 'Map { '
    const entries = []
    for (const [key, item] of value) {
      entries.push(`${inspectDeeper(key)} => ${inspectDeeper(item)}`)
    }
    result += entries.join(', ')
    result += ' }'
    return result
  }
  if (value.constructor == Object) {
    let result = '{ '
    const entries = []
    for (const key in value) {
      entries.push(`${key}: ${inspectDeeper(value[key])}`)
    }
    result += entries.join(', ')
    result += ' }'
    return result
  }
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`
  }
  return `${value}`
}

export default inspect
