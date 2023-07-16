const fs = require('fs')
const readline = require('readline')

/**
 * @name readFirstLine
 *
 * @synopsis
 * ```coffeescript [specscript]
 * readFirstLine(filePath string) -> Promise<firstLine string>
 * ```
 */
const readFirstLine = async function (filePath) {
  const readable = fs.createReadStream(filePath)
  const reader = readline.createInterface({ input: readable })
  const line = await new Promise(resolve => {
    reader.on('line', line => {
      reader.close()
      resolve(line)
    })
  })
  readable.close()
  return line
}

module.exports = readFirstLine
