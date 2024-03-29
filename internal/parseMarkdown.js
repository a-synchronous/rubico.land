require('rubico/global')
const x = require('rubico/x')
const fs = require('fs')
const nodePath = require('path')
const util = require('util')
const cronist = require('cronist')

// string => string
const pathResolve = nodePath.resolve

// path string => Array<fs.Dirent>
const readdirWithFileTypes = path => fs.promises.readdir(path, {
  withFileTypes: true,
})

// object => string
const toString = value => value.toString()

const IGNORE_DIRS = new Set(['.git', 'node_modules'])

// fs.Dirent => boolean
const direntIsIgnored = dirent => IGNORE_DIRS.has(dirent.name)

// fs.Dirent => boolean
const direntIsDirectory = dirent => dirent.isDirectory()

// fs.Dirent => boolean
const direntIsJSFile = dirent => dirent.name.endsWith('.js')

// path string => jsFilePaths Array<string>
const walkPathForJSFilePaths = pipe([
  fork({
    path: x.identity,
    dirents: tryCatch(readdirWithFileTypes, () => []),
  }),
  ({ path, dirents }) => transform(
    map(switchCase([
      and([
        direntIsDirectory,
        not(direntIsIgnored),
      ]), pipe([
        dirent => pathResolve(path, dirent.name),
        walkPathForJSFilePaths]),
      direntIsJSFile, pipe([
        dirent => pathResolve(path, dirent.name),
        Array.of]),
      () => [],
    ])),
    () => [],
  )(dirents)
])

// object -> code string
const toJavaScript = pipe([
  object => util.inspect(object, { depth: Infinity }),
  code => code.replace(/Position /g, ''),
  code => `export default ${code}`,
])

// args Array -> ()
const cli = pipe([
  args => ({
    entrypoint: args.filter(not(arg => arg.startsWith('-'))),
  }),
  tap.if(eq(0, get('entrypoint.length')), () => {
    console.error('path arguments required')
    process.exit(1)
  }),
  get('entrypoint[0]'),
  fs.promises.readFile,
  toString,
  cronist.parseMarkdown,
  toJavaScript,
  x.trace,
])

cli(process.argv.slice(2))
