// uniq(Array) -> unique Array
const uniq = function (array) {
  return [...new Set(array)]
}

export default uniq
