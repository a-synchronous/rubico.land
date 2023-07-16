// FunctionNames() -> names Array<string>
const FunctionNames = function (lib) {
  const result = []
  for (const name in lib) {
    result.push(name)
    const fn = lib[name]
    for (const subName in fn) {
      result.push(`${name}.${subName}`)
    }
  }
  return result
}

export default FunctionNames
