export default [
  {
    name: 'arrayExtendMap',
    synopsis: '```coffeescript [specscript]\n' +
      'any -> value; any -> mapped\n' +
      '\n' +
      'arrayExtendMap(\n' +
      '  array Array<mapped>,\n' +
      '  values Array<value>,\n' +
      '  valuesIndex number,\n' +
      '  valuesMapper value=>mapped,\n' +
      ') -> array\n' +
      '```\n',
    description: 'internal extend while mapping\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'any -> value; any -> mapped\n' +
            '\n' +
            'arrayExtendMap(\n' +
            '  array Array<mapped>,\n' +
            '  values Array<value>,\n' +
            '  valuesIndex number,\n' +
            '  valuesMapper value=>mapped,\n' +
            ') -> array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 10, column: 4, offset: 186 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 11, column: 1, offset: 187 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'internal extend while mapping',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 30, offset: 29 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 30, offset: 29 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 30 }
      }
    }
  },
  {
    name: 'pipe',
    synopsis: '```coffeescript [specscript]\n' +
      'pipe<args ...any>(\n' +
      '  funcs [\n' +
      '    ...args=>any,\n' +
      '    ...Array<any=>any>,\n' +
      '  ],\n' +
      ') -> pipeline ...args=>Promise|any\n' +
      '\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Transducer = Reducer=>Reducer\n' +
      '\n' +
      'pipe(\n' +
      '  transducers Array<Transducer>,\n' +
      ')(reducer Reducer) -> composed Reducer\n' +
      '```\n',
    description: 'Chain together an array of functions as a pipe, each function passing its return value as the first argument to the next function until all functions have executed. The final result is the return of the last function execution.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  pipe([\n' +
      '    number => number + 1,\n' +
      '    number => number + 2,\n' +
      '    number => number + 3,\n' +
      '  ])(5),\n' +
      ') // 11\n' +
      '```\n' +
      '\n' +
      'When passed a reducer, a pipe of transducers composes the reducer such that the transducers are applied in series, calling the reducer as the last step to end the chain. The resulting reducer must be used in conjunction with `reduce` to have a transducing effect. For more information on this behavior, see [this resource on transducers](https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md).\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const squaredOdds = pipe([\n' +
      '  filter(isOdd),\n' +
      '  map(square),\n' +
      '])\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(squaredOdds(add), 0),\n' +
      ') // 35\n' +
      '\n' +
      'console.log(\n' +
      '  squaredOdds([1, 2, 3, 4, 5])\n' +
      ') // [1, 9, 25]\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'pipe<args ...any>(\n' +
            '  funcs [\n' +
            '    ...args=>any,\n' +
            '    ...Array<any=>any>,\n' +
            '  ],\n' +
            ') -> pipeline ...args=>Promise|any\n' +
            '\n' +
            'Reducer<T> = (any, T)=>Promise|any\n' +
            'Transducer = Reducer=>Reducer\n' +
            '\n' +
            'pipe(\n' +
            '  transducers Array<Transducer>,\n' +
            ')(reducer Reducer) -> composed Reducer',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 15, column: 4, offset: 288 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 16, column: 1, offset: 289 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Chain together an array of functions as a pipe, each function passing its return value as the first argument to the next function until all functions have executed. The final result is the return of the last function execution.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 228, offset: 227 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 228, offset: 227 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            '  pipe([\n' +
            '    number => number + 1,\n' +
            '    number => number + 2,\n' +
            '    number => number + 3,\n' +
            '  ])(5),\n' +
            ') // 11',
          position: {
            start: { line: 3, column: 1, offset: 229 },
            end: { line: 11, column: 4, offset: 376 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'When passed a reducer, a pipe of transducers composes the reducer such that the transducers are applied in series, calling the reducer as the last step to end the chain. The resulting reducer must be used in conjunction with ',
              position: {
                start: { line: 13, column: 1, offset: 378 },
                end: { line: 13, column: 226, offset: 603 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 13, column: 226, offset: 603 },
                end: { line: 13, column: 234, offset: 611 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' to have a transducing effect. For more information on this behavior, see ',
              position: {
                start: { line: 13, column: 234, offset: 611 },
                end: { line: 13, column: 308, offset: 685 },
                indent: []
              }
            },
            {
              type: 'link',
              title: null,
              url: 'https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md',
              children: [
                {
                  type: 'text',
                  value: 'this resource on transducers',
                  position: {
                    start: { line: 13, column: 309, offset: 686 },
                    end: { line: 13, column: 337, offset: 714 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 13, column: 308, offset: 685 },
                end: { line: 13, column: 406, offset: 783 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 13, column: 406, offset: 783 },
                end: { line: 13, column: 407, offset: 784 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 13, column: 1, offset: 378 },
            end: { line: 13, column: 407, offset: 784 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const square = number => number ** 2\n' +
            '\n' +
            'const add = (a, b) => a + b\n' +
            '\n' +
            'const squaredOdds = pipe([\n' +
            '  filter(isOdd),\n' +
            '  map(square),\n' +
            '])\n' +
            '\n' +
            'console.log(\n' +
            '  [1, 2, 3, 4, 5].reduce(squaredOdds(add), 0),\n' +
            ') // 35\n' +
            '\n' +
            'console.log(\n' +
            '  squaredOdds([1, 2, 3, 4, 5])\n' +
            ') // [1, 9, 25]',
          position: {
            start: { line: 15, column: 1, offset: 786 },
            end: { line: 34, column: 4, offset: 1116 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 35, column: 1, offset: 1117 }
      }
    }
  },
  {
    name: 'fork',
    synopsis: '```coffeescript [specscript]\n' +
      'fork<args ...any>(\n' +
      '  funcs Object<...args=>Promise|any>,\n' +
      ')(...args) -> result Promise|Object\n' +
      '\n' +
      'fork<args ...any>(\n' +
      '  funcs Array<...args=>Promise|any>,\n' +
      ')(...args) -> result Promise|Array\n' +
      '```\n',
    description: 'A multi-purpose function, parallelizes multiple functions with concurrent execution into either an object, an array, or a nested mix of both. Has use cases in parallel execution and object composition.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  fork({\n' +
      '    greetings: fork([\n' +
      "      greeting => greeting + ' world',\n" +
      "      greeting => greeting + ' mom',\n" +
      '    ]),\n' +
      "  })('hello'),\n" +
      ") // { greetings: ['hello world', 'hello mom'] }\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'fork<args ...any>(\n' +
            '  funcs Object<...args=>Promise|any>,\n' +
            ')(...args) -> result Promise|Object\n' +
            '\n' +
            'fork<args ...any>(\n' +
            '  funcs Array<...args=>Promise|any>,\n' +
            ')(...args) -> result Promise|Array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 217 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 218 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A multi-purpose function, parallelizes multiple functions with concurrent execution into either an object, an array, or a nested mix of both. Has use cases in parallel execution and object composition.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 202, offset: 201 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 202, offset: 201 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            '  fork({\n' +
            '    greetings: fork([\n' +
            "      greeting => greeting + ' world',\n" +
            "      greeting => greeting + ' mom',\n" +
            '    ]),\n' +
            "  })('hello'),\n" +
            ") // { greetings: ['hello world', 'hello mom'] }",
          position: {
            start: { line: 3, column: 1, offset: 203 },
            end: { line: 12, column: 4, offset: 425 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 13, column: 1, offset: 426 }
      }
    }
  },
  {
    name: 'fork.series',
    synopsis: '```coffeescript [specscript]\n' +
      'fork.series<args ...any>(\n' +
      '  funcs Array<...args=>Promise|any>,\n' +
      ')(...args) -> Promise|Array\n' +
      '```\n',
    description: '`fork` with serial execution.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'fork.series([\n' +
      "  greeting => console.log(greeting + ' world'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' mom'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' darkness'),\n" +
      "])('hello') // hello world\n" +
      '            // hello mom\n' +
      '            // hello darkness\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'fork.series<args ...any>(\n' +
            '  funcs Array<...args=>Promise|any>,\n' +
            ')(...args) -> Promise|Array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 123 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 124 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'fork',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 7, offset: 6 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with serial execution.',
              position: {
                start: { line: 1, column: 7, offset: 6 },
                end: { line: 1, column: 30, offset: 29 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 30, offset: 29 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
            '\n' +
            'fork.series([\n' +
            "  greeting => console.log(greeting + ' world'),\n" +
            '  sleep(1000),\n' +
            "  greeting => console.log(greeting + ' mom'),\n" +
            '  sleep(1000),\n' +
            "  greeting => console.log(greeting + ' darkness'),\n" +
            "])('hello') // hello world\n" +
            '            // hello mom\n' +
            '            // hello darkness',
          position: {
            start: { line: 3, column: 1, offset: 31 },
            end: { line: 15, column: 4, offset: 407 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
              1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 16, column: 1, offset: 408 }
      }
    }
  },
  {
    name: 'assign',
    synopsis: '```coffeescript [specscript]\n' +
      'assign(\n' +
      '  funcs Object<source=>Promise|any>,\n' +
      ')(source Object) -> resultsMergedWithSource Promise|Object\n' +
      '```\n',
    description: 'Compose an object from a source object merged with the evaluations of the property functions of a specifying object of functions. Functions of the specifying object of functions may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  assign({\n' +
      '    squared: ({ number }) => number ** 2,\n' +
      '    cubed: ({ number }) => number ** 3,\n' +
      '  })({ number: 3 }),\n' +
      ') // { number: 3, squared: 9, cubed: 27 }\n' +
      '\n' +
      'assign({\n' +
      '  asyncNumber: async ({ number }) => number,\n' +
      '})({ number: 3 }).then(console.log) // { number: 3, asyncNumber: 3 }\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'assign(\n' +
            '  funcs Object<source=>Promise|any>,\n' +
            ')(source Object) -> resultsMergedWithSource Promise|Object',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 136 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 137 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Compose an object from a source object merged with the evaluations of the property functions of a specifying object of functions. Functions of the specifying object of functions may be asynchronous.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 199, offset: 198 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 199, offset: 198 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            '  assign({\n' +
            '    squared: ({ number }) => number ** 2,\n' +
            '    cubed: ({ number }) => number ** 3,\n' +
            '  })({ number: 3 }),\n' +
            ') // { number: 3, squared: 9, cubed: 27 }\n' +
            '\n' +
            'assign({\n' +
            '  asyncNumber: async ({ number }) => number,\n' +
            '})({ number: 3 }).then(console.log) // { number: 3, asyncNumber: 3 }',
          position: {
            start: { line: 3, column: 1, offset: 200 },
            end: { line: 14, column: 4, offset: 523 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 15, column: 1, offset: 524 }
      }
    }
  },
  {
    name: 'tap',
    synopsis: '```coffeescript [specscript]\n' +
      'tap(tapper value=>Promise|any)(value any) -> value\n' +
      '```\n',
    description: 'Call a function with a value, returning the value. Promises created by the tapper are resolved before returning the value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      '  tap(console.log),\n' +
      "  value => value + 'bar'\n" +
      '  tap(console.log),\n' +
      "])('foo') // 'foo'\n" +
      "          // 'foobar'\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'tap(tapper value=>Promise|any)(value any) -> value',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 4, offset: 83 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 84 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Call a function with a value, returning the value. Promises created by the tapper are resolved before returning the value.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 123, offset: 122 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 123, offset: 122 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'pipe([\n' +
            '  tap(console.log),\n' +
            "  value => value + 'bar'\n" +
            '  tap(console.log),\n' +
            "])('foo') // 'foo'\n" +
            "          // 'foobar'",
          position: {
            start: { line: 3, column: 1, offset: 124 },
            end: { line: 10, column: 4, offset: 267 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 11, column: 1, offset: 268 }
      }
    }
  },
  {
    name: 'tap.sync',
    synopsis: '```coffeescript [specscript]\n' +
      'tap.sync(\n' +
      '  tapper value=>any,\n' +
      ')(value any) -> value\n' +
      '```\n',
    description: 'Synchronous tap\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      "  tap.sync(number => console.log('square', number ** 2))\n" +
      "  tap.sync(number => console.log('cube', number ** 3))\n" +
      '])(3) // 9\n' +
      '      // 27\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'tap.sync(\n  tapper value=>any,\n)(value any) -> value',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 85 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 86 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Synchronous tap',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 16, offset: 15 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 16, offset: 15 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'pipe([\n' +
            "  tap.sync(number => console.log('square', number ** 2))\n" +
            "  tap.sync(number => console.log('cube', number ** 3))\n" +
            '])(3) // 9\n' +
            '      // 27',
          position: {
            start: { line: 3, column: 1, offset: 17 },
            end: { line: 9, column: 4, offset: 189 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 190 }
      }
    }
  },
  {
    name: 'tap.if',
    synopsis: '```coffeescript [specscript]\n' +
      'tap.if<args ...any>(\n' +
      '  predicate ...args=>Promise|boolean,\n' +
      '  func ...args=>Promise|any,\n' +
      ')(...args) -> Promise|value\n' +
      '```\n',
    description: 'Conditional tap by predicate\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const logIfOdd = tap.if(\n' +
      '  isOdd,\n' +
      "  number => console.log(number, 'is an odd number'))\n" +
      '\n' +
      'logIfOdd(2)\n' +
      'logIfOdd(3) // 3 is an odd number\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'tap.if<args ...any>(\n' +
            '  predicate ...args=>Promise|boolean,\n' +
            '  func ...args=>Promise|any,\n' +
            ')(...args) -> Promise|value',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 148 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 149 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Conditional tap by predicate',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 29, offset: 28 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 29, offset: 28 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const logIfOdd = tap.if(\n' +
            '  isOdd,\n' +
            "  number => console.log(number, 'is an odd number'))\n" +
            '\n' +
            'logIfOdd(2)\n' +
            'logIfOdd(3) // 3 is an odd number',
          position: {
            start: { line: 3, column: 1, offset: 30 },
            end: { line: 12, column: 4, offset: 235 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 13, column: 1, offset: 236 }
      }
    }
  },
  {
    name: 'tryCatch',
    synopsis: '```coffeescript [specscript]\n' +
      'tryCatch<args ...any>(\n' +
      '  tryer ...args=>Promise|any,\n' +
      '  catcher (err Error|any, ...args)=>Promise|any,\n' +
      ')(...args) -> result Promise|any\n' +
      '```\n',
    description: 'Try a tryer, catch with catcher. On error or rejected Promise, call the catcher with the error followed by any arguments to the tryer.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const errorThrower = tryCatch(\n' +
      '  message => {\n' +
      '    throw new Error(message)\n' +
      '  },\n' +
      '  (err, message) => {\n' +
      '    console.log(err)\n' +
      '    return `${message} from catcher`\n' +
      '  },\n' +
      ')\n' +
      '\n' +
      "console.log(errorThrower('hello')) // Error: hello\n" +
      '                                   // hello from catcher\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'tryCatch<args ...any>(\n' +
            '  tryer ...args=>Promise|any,\n' +
            '  catcher (err Error|any, ...args)=>Promise|any,\n' +
            ')(...args) -> result Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 167 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 168 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Try a tryer, catch with catcher. On error or rejected Promise, call the catcher with the error followed by any arguments to the tryer.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 135, offset: 134 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 135, offset: 134 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const errorThrower = tryCatch(\n' +
            '  message => {\n' +
            '    throw new Error(message)\n' +
            '  },\n' +
            '  (err, message) => {\n' +
            '    console.log(err)\n' +
            '    return `${message} from catcher`\n' +
            '  },\n' +
            ')\n' +
            '\n' +
            "console.log(errorThrower('hello')) // Error: hello\n" +
            '                                   // hello from catcher',
          position: {
            start: { line: 3, column: 1, offset: 136 },
            end: { line: 16, column: 4, offset: 442 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 17, column: 1, offset: 443 }
      }
    }
  },
  {
    name: 'switchCase',
    synopsis: '```coffeescript [specscript]\n' +
      'switchCase<args ...any>(\n' +
      '  conditionalFunctions Array<...args=>Promise|boolean|any>\n' +
      ')(...args) -> result Promise|any\n' +
      '```\n',
    description: 'Conditional operator for functions. Odd indexed functions should be resolvers, while even indexed functions excluding the last should be predicates. For an odd number of functions, the last even indexed function should be a default resolver function. Any predicates or resolvers may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const fruitIsYellow = fruit => fruit.color == 'yellow'\n" +
      '\n' +
      'const fruitsGuesser = switchCase([\n' +
      "  fruitIsYellow, fruit => fruit.name + ' is possibly a banana',\n" +
      "  fruit => fruit.name + ' is probably not a banana',\n" +
      '])\n' +
      '\n' +
      'console.log(\n' +
      "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
      ') // plantain is possibly a banana\n' +
      '```\n' +
      '\n' +
      'If an even number of functions is supplied, the last predicate should always return true.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const questionableIsOdd = switchCase([\n' +
      '  number => number === 1, () => true,\n' +
      '  number => number === 2, () => false,\n' +
      '  number => number === 3, () => true,\n' +
      '  number => number === 4, () => false,\n' +
      '  number => number === 5, () => true,\n' +
      '  () => true, number => number % 2 === 1,\n' +
      '])\n' +
      '\n' +
      'console.log(questionableIsOdd(1)) // true\n' +
      'console.log(questionableIsOdd(6)) // false\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'switchCase<args ...any>(\n' +
            '  conditionalFunctions Array<...args=>Promise|boolean|any>\n' +
            ')(...args) -> result Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 149 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 150 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Conditional operator for functions. Odd indexed functions should be resolvers, while even indexed functions excluding the last should be predicates. For an odd number of functions, the last even indexed function should be a default resolver function. Any predicates or resolvers may be asynchronous.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 300, offset: 299 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 300, offset: 299 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "const fruitIsYellow = fruit => fruit.color == 'yellow'\n" +
            '\n' +
            'const fruitsGuesser = switchCase([\n' +
            "  fruitIsYellow, fruit => fruit.name + ' is possibly a banana',\n" +
            "  fruit => fruit.name + ' is probably not a banana',\n" +
            '])\n' +
            '\n' +
            'console.log(\n' +
            "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
            ') // plantain is possibly a banana',
          position: {
            start: { line: 3, column: 1, offset: 301 },
            end: { line: 14, column: 4, offset: 647 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
              1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'If an even number of functions is supplied, the last predicate should always return true.',
              position: {
                start: { line: 16, column: 1, offset: 649 },
                end: { line: 16, column: 90, offset: 738 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 16, column: 1, offset: 649 },
            end: { line: 16, column: 90, offset: 738 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const questionableIsOdd = switchCase([\n' +
            '  number => number === 1, () => true,\n' +
            '  number => number === 2, () => false,\n' +
            '  number => number === 3, () => true,\n' +
            '  number => number === 4, () => false,\n' +
            '  number => number === 5, () => true,\n' +
            '  () => true, number => number % 2 === 1,\n' +
            '])\n' +
            '\n' +
            'console.log(questionableIsOdd(1)) // true\n' +
            'console.log(questionableIsOdd(6)) // false',
          position: {
            start: { line: 18, column: 1, offset: 740 },
            end: { line: 30, column: 4, offset: 1132 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
              1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 31, column: 1, offset: 1133 }
      }
    }
  },
  {
    name: 'map',
    synopsis: '```coffeescript [specscript]\n' +
      'Functor<T> = Array<T>|Object<T>\n' +
      '  |Iterator<T>|AsyncIterator<T>|{ map: T=>any }\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'map<T>(\n' +
      '  mapper T=>Promise|any,\n' +
      ')(Functor<T>) -> mappedFunctor Promise|Functor\n' +
      '\n' +
      'map<T>(\n' +
      '  mapper T=>any, # note: only synchronous predicates allowed here\n' +
      ')(generatorFunction GeneratorFunction<T>)\n' +
      '  -> mappingGeneratorFunction GeneratorFunction\n' +
      '\n' +
      'map<T>(\n' +
      '  mapper T=>Promise|any,\n' +
      ')(asyncGeneratorFunction AsyncGeneratorFunction<T>)\n' +
      '  -> mappingAsyncGeneratorFunction AsyncGeneratorFunction\n' +
      '\n' +
      'map<T>(\n' +
      '  mapper T=>Promise|any,\n' +
      ')(reducer Reducer<T>) -> mappingReducer Reducer\n' +
      '```\n',
    description: 'Apply a mapper concurrently to each item of a collection, returning a collection of the same type with all results. If order is implied by the collection, it is maintained in the result. Below are valid collections along with their iteration behavior.\n' +
      '\n' +
      ' * `Array` - iterate values by index\n' +
      ' * `Object` - iterate object values\n' +
      ' * `Iterator`/`Generator` - iterate by calling `.next`\n' +
      ' * `AsyncIterator`/`AsyncGenerator` - iterate by calling `.next`, then awaiting. Mapper is still applied concurrently.\n' +
      ' * `{ map: mapper (T=>any)=>this }` - literal functor - call `.map` directly with mapper.\n' +
      '\n' +
      'For all other types, the mapper is applied directly to the data parameter.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)({ a: 1, b: 2, c: 3 }),\n' +
      ') // { a: 1, b: 4, c: 9 }\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)(3)\n' +
      ') // 9\n' +
      '```\n' +
      '\n' +
      'Functions are regarded as resolvers. Each of the following calls, when passed to a mapping function `map(mapper)`, creates a function with all items of its return transformed by the mapper.\n' +
      '\n' +
      ' * `...any=>Iterator` or `GeneratorFunction` - items of the iterator are mapped into a new iterator. Warning: using an async mapper in a synchronous generator function is not recommended and could lead to unexpected behavior.\n' +
      ' * `...any=>AsyncIterator` or `AsyncGeneratorFunction` - items of the async iterator are mapped into a new async iterator. Async result items are awaited in a new async iterator. Async mapper functions are valid.\n' +
      ' * `Reducer<T> = (any, T)=>Promise|any` - when combined with `reduce` or any implementation thereof, items of the reducing operation are transformed by the mapper function. If an async mapper function is desired here, it is possible with rubico `reduce`.\n' +
      '\n' +
      'With mapping generator functions and mapping async generator functions, transformations on iterators and their async counterparts are simple to compose.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const capitalize = string => string.toUpperCase()\n' +
      '\n' +
      'const abc = function* () {\n' +
      "  yield 'a'; yield 'b'; yield 'c'\n" +
      '}\n' +
      '\n' +
      'const ABC = map(capitalize)(abc)\n' +
      '\n' +
      'const abcIter = abc()\n' +
      '\n' +
      'const ABCIter = ABC()\n' +
      '\n' +
      "console.log([...abcIter]) // ['a', 'b', 'c']\n" +
      '\n' +
      "console.log([...ABCIter]) // ['A', 'B', 'C']\n" +
      '```\n' +
      '\n' +
      'Function laziness is extended to reducer functions as [transducers](https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md).\n' +
      '\n' +
      '```\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'Transducer = Reducer=>Reducer\n' +
      '```\n' +
      '\n' +
      'A reducer is a variadic function like the one supplied to `Array.prototype.reduce`, but without the index and reference to the accumulated result per call. A transducer is a function that accepts a reducer function as an argument and returns another reducer function, which enables chaining functionality for reducers. `map` is core to this mechanism, and provides a way to create transducers with mapper functions.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const mapSquare = map(square)\n' +
      '// mapSquare could potentially be a transducer, but at this point, it is\n' +
      '// undifferentiated and not necessarily locked in to transducer behavior.\n' +
      '\n' +
      'console.log(\n' +
      '  mapSquare([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'const squareConcatReducer = mapSquare(concat)\n' +
      '// now mapSquare is passed the function concat, so it assumes transducer\n' +
      '// position. squareConcatReducer is a reducer with chained functionality\n' +
      '// square and concat.\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
      ") // '1491625'\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Functor<T> = Array<T>|Object<T>\n' +
            '  |Iterator<T>|AsyncIterator<T>|{ map: T=>any }\n' +
            'Reducer<T> = (any, T)=>Promise|any\n' +
            '\n' +
            'map<T>(\n' +
            '  mapper T=>Promise|any,\n' +
            ')(Functor<T>) -> mappedFunctor Promise|Functor\n' +
            '\n' +
            'map<T>(\n' +
            '  mapper T=>any, # note: only synchronous predicates allowed here\n' +
            ')(generatorFunction GeneratorFunction<T>)\n' +
            '  -> mappingGeneratorFunction GeneratorFunction\n' +
            '\n' +
            'map<T>(\n' +
            '  mapper T=>Promise|any,\n' +
            ')(asyncGeneratorFunction AsyncGeneratorFunction<T>)\n' +
            '  -> mappingAsyncGeneratorFunction AsyncGeneratorFunction\n' +
            '\n' +
            'map<T>(\n' +
            '  mapper T=>Promise|any,\n' +
            ')(reducer Reducer<T>) -> mappingReducer Reducer',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 23, column: 4, offset: 619 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 24, column: 1, offset: 620 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Apply a mapper concurrently to each item of a collection, returning a collection of the same type with all results. If order is implied by the collection, it is maintained in the result. Below are valid collections along with their iteration behavior.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 252, offset: 251 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 252, offset: 251 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Array',
                      position: {
                        start: { line: 3, column: 4, offset: 256 },
                        end: { line: 3, column: 11, offset: 263 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - iterate values by index',
                      position: {
                        start: { line: 3, column: 11, offset: 263 },
                        end: { line: 3, column: 37, offset: 289 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 3, column: 4, offset: 256 },
                    end: { line: 3, column: 37, offset: 289 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 3, column: 1, offset: 253 },
                end: { line: 3, column: 37, offset: 289 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Object',
                      position: {
                        start: { line: 4, column: 4, offset: 293 },
                        end: { line: 4, column: 12, offset: 301 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - iterate object values',
                      position: {
                        start: { line: 4, column: 12, offset: 301 },
                        end: { line: 4, column: 36, offset: 325 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 4, column: 4, offset: 293 },
                    end: { line: 4, column: 36, offset: 325 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 4, column: 1, offset: 290 },
                end: { line: 4, column: 36, offset: 325 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Iterator',
                      position: {
                        start: { line: 5, column: 4, offset: 329 },
                        end: { line: 5, column: 14, offset: 339 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: '/',
                      position: {
                        start: { line: 5, column: 14, offset: 339 },
                        end: { line: 5, column: 15, offset: 340 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Generator',
                      position: {
                        start: { line: 5, column: 15, offset: 340 },
                        end: { line: 5, column: 26, offset: 351 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - iterate by calling ',
                      position: {
                        start: { line: 5, column: 26, offset: 351 },
                        end: { line: 5, column: 48, offset: 373 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.next',
                      position: {
                        start: { line: 5, column: 48, offset: 373 },
                        end: { line: 5, column: 55, offset: 380 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 5, column: 4, offset: 329 },
                    end: { line: 5, column: 55, offset: 380 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 5, column: 1, offset: 326 },
                end: { line: 5, column: 55, offset: 380 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'AsyncIterator',
                      position: {
                        start: { line: 6, column: 4, offset: 384 },
                        end: { line: 6, column: 19, offset: 399 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: '/',
                      position: {
                        start: { line: 6, column: 19, offset: 399 },
                        end: { line: 6, column: 20, offset: 400 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'AsyncGenerator',
                      position: {
                        start: { line: 6, column: 20, offset: 400 },
                        end: { line: 6, column: 36, offset: 416 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - iterate by calling ',
                      position: {
                        start: { line: 6, column: 36, offset: 416 },
                        end: { line: 6, column: 58, offset: 438 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.next',
                      position: {
                        start: { line: 6, column: 58, offset: 438 },
                        end: { line: 6, column: 65, offset: 445 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ', then awaiting. Mapper is still applied concurrently.',
                      position: {
                        start: { line: 6, column: 65, offset: 445 },
                        end: { line: 6, column: 119, offset: 499 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 6, column: 4, offset: 384 },
                    end: { line: 6, column: 119, offset: 499 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 6, column: 1, offset: 381 },
                end: { line: 6, column: 119, offset: 499 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: '{ map: mapper (T=>any)=>this }',
                      position: {
                        start: { line: 7, column: 4, offset: 503 },
                        end: { line: 7, column: 36, offset: 535 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - literal functor - call ',
                      position: {
                        start: { line: 7, column: 36, offset: 535 },
                        end: { line: 7, column: 62, offset: 561 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.map',
                      position: {
                        start: { line: 7, column: 62, offset: 561 },
                        end: { line: 7, column: 68, offset: 567 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' directly with mapper.',
                      position: {
                        start: { line: 7, column: 68, offset: 567 },
                        end: { line: 7, column: 90, offset: 589 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 7, column: 4, offset: 503 },
                    end: { line: 7, column: 90, offset: 589 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 7, column: 1, offset: 500 },
                end: { line: 7, column: 90, offset: 589 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 253 },
            end: { line: 7, column: 90, offset: 589 },
            indent: [ 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'For all other types, the mapper is applied directly to the data parameter.',
              position: {
                start: { line: 9, column: 1, offset: 591 },
                end: { line: 9, column: 75, offset: 665 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 591 },
            end: { line: 9, column: 75, offset: 665 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const square = number => number ** 2\n' +
            '\n' +
            'console.log(\n' +
            '  map(square)([1, 2, 3, 4, 5]),\n' +
            ') // [1, 4, 9, 16, 25]\n' +
            '\n' +
            'console.log(\n' +
            '  map(square)({ a: 1, b: 2, c: 3 }),\n' +
            ') // { a: 1, b: 4, c: 9 }\n' +
            '\n' +
            'console.log(\n' +
            '  map(square)(3)\n' +
            ') // 9',
          position: {
            start: { line: 11, column: 1, offset: 667 },
            end: { line: 25, column: 4, offset: 918 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Functions are regarded as resolvers. Each of the following calls, when passed to a mapping function ',
              position: {
                start: { line: 27, column: 1, offset: 920 },
                end: { line: 27, column: 101, offset: 1020 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'map(mapper)',
              position: {
                start: { line: 27, column: 101, offset: 1020 },
                end: { line: 27, column: 114, offset: 1033 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', creates a function with all items of its return transformed by the mapper.',
              position: {
                start: { line: 27, column: 114, offset: 1033 },
                end: { line: 27, column: 190, offset: 1109 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 27, column: 1, offset: 920 },
            end: { line: 27, column: 190, offset: 1109 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: '...any=>Iterator',
                      position: {
                        start: { line: 29, column: 4, offset: 1114 },
                        end: { line: 29, column: 22, offset: 1132 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or ',
                      position: {
                        start: { line: 29, column: 22, offset: 1132 },
                        end: { line: 29, column: 26, offset: 1136 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'GeneratorFunction',
                      position: {
                        start: { line: 29, column: 26, offset: 1136 },
                        end: { line: 29, column: 45, offset: 1155 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - items of the iterator are mapped into a new iterator. Warning: using an async mapper in a synchronous generator function is not recommended and could lead to unexpected behavior.',
                      position: {
                        start: { line: 29, column: 45, offset: 1155 },
                        end: { line: 29, column: 226, offset: 1336 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 4, offset: 1114 },
                    end: { line: 29, column: 226, offset: 1336 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 29, column: 1, offset: 1111 },
                end: { line: 29, column: 226, offset: 1336 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: '...any=>AsyncIterator',
                      position: {
                        start: { line: 30, column: 4, offset: 1340 },
                        end: { line: 30, column: 27, offset: 1363 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or ',
                      position: {
                        start: { line: 30, column: 27, offset: 1363 },
                        end: { line: 30, column: 31, offset: 1367 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'AsyncGeneratorFunction',
                      position: {
                        start: { line: 30, column: 31, offset: 1367 },
                        end: { line: 30, column: 55, offset: 1391 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - items of the async iterator are mapped into a new async iterator. Async result items are awaited in a new async iterator. Async mapper functions are valid.',
                      position: {
                        start: { line: 30, column: 55, offset: 1391 },
                        end: { line: 30, column: 213, offset: 1549 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1340 },
                    end: { line: 30, column: 213, offset: 1549 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 30, column: 1, offset: 1337 },
                end: { line: 30, column: 213, offset: 1549 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Reducer<T> = (any, T)=>Promise|any',
                      position: {
                        start: { line: 31, column: 4, offset: 1553 },
                        end: { line: 31, column: 40, offset: 1589 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - when combined with ',
                      position: {
                        start: { line: 31, column: 40, offset: 1589 },
                        end: { line: 31, column: 62, offset: 1611 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'reduce',
                      position: {
                        start: { line: 31, column: 62, offset: 1611 },
                        end: { line: 31, column: 70, offset: 1619 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or any implementation thereof, items of the reducing operation are transformed by the mapper function. If an async mapper function is desired here, it is possible with rubico ',
                      position: {
                        start: { line: 31, column: 70, offset: 1619 },
                        end: { line: 31, column: 246, offset: 1795 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'reduce',
                      position: {
                        start: { line: 31, column: 246, offset: 1795 },
                        end: { line: 31, column: 254, offset: 1803 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: '.',
                      position: {
                        start: { line: 31, column: 254, offset: 1803 },
                        end: { line: 31, column: 255, offset: 1804 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1553 },
                    end: { line: 31, column: 255, offset: 1804 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 1, offset: 1550 },
                end: { line: 31, column: 255, offset: 1804 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 1111 },
            end: { line: 31, column: 255, offset: 1804 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'With mapping generator functions and mapping async generator functions, transformations on iterators and their async counterparts are simple to compose.',
              position: {
                start: { line: 33, column: 1, offset: 1806 },
                end: { line: 33, column: 153, offset: 1958 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1806 },
            end: { line: 33, column: 153, offset: 1958 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const capitalize = string => string.toUpperCase()\n' +
            '\n' +
            'const abc = function* () {\n' +
            "  yield 'a'; yield 'b'; yield 'c'\n" +
            '}\n' +
            '\n' +
            'const ABC = map(capitalize)(abc)\n' +
            '\n' +
            'const abcIter = abc()\n' +
            '\n' +
            'const ABCIter = ABC()\n' +
            '\n' +
            "console.log([...abcIter]) // ['a', 'b', 'c']\n" +
            '\n' +
            "console.log([...ABCIter]) // ['A', 'B', 'C']",
          position: {
            start: { line: 35, column: 1, offset: 1960 },
            end: { line: 51, column: 4, offset: 2276 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Function laziness is extended to reducer functions as ',
              position: {
                start: { line: 53, column: 1, offset: 2278 },
                end: { line: 53, column: 55, offset: 2332 },
                indent: []
              }
            },
            {
              type: 'link',
              title: null,
              url: 'https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md',
              children: [
                {
                  type: 'text',
                  value: 'transducers',
                  position: {
                    start: { line: 53, column: 56, offset: 2333 },
                    end: { line: 53, column: 67, offset: 2344 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 53, column: 55, offset: 2332 },
                end: { line: 53, column: 136, offset: 2413 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 53, column: 136, offset: 2413 },
                end: { line: 53, column: 137, offset: 2414 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 53, column: 1, offset: 2278 },
            end: { line: 53, column: 137, offset: 2414 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: null,
          meta: null,
          value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
          position: {
            start: { line: 55, column: 1, offset: 2416 },
            end: { line: 59, column: 4, offset: 2489 },
            indent: [ 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A reducer is a variadic function like the one supplied to ',
              position: {
                start: { line: 61, column: 1, offset: 2491 },
                end: { line: 61, column: 59, offset: 2549 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'Array.prototype.reduce',
              position: {
                start: { line: 61, column: 59, offset: 2549 },
                end: { line: 61, column: 83, offset: 2573 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', but without the index and reference to the accumulated result per call. A transducer is a function that accepts a reducer function as an argument and returns another reducer function, which enables chaining functionality for reducers. ',
              position: {
                start: { line: 61, column: 83, offset: 2573 },
                end: { line: 61, column: 320, offset: 2810 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 61, column: 320, offset: 2810 },
                end: { line: 61, column: 325, offset: 2815 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is core to this mechanism, and provides a way to create transducers with mapper functions.',
              position: {
                start: { line: 61, column: 325, offset: 2815 },
                end: { line: 61, column: 416, offset: 2906 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 61, column: 1, offset: 2491 },
            end: { line: 61, column: 416, offset: 2906 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const square = number => number ** 2\n' +
            '\n' +
            'const concat = (array, item) => array.concat(item)\n' +
            '\n' +
            'const mapSquare = map(square)\n' +
            '// mapSquare could potentially be a transducer, but at this point, it is\n' +
            '// undifferentiated and not necessarily locked in to transducer behavior.\n' +
            '\n' +
            'console.log(\n' +
            '  mapSquare([1, 2, 3, 4, 5]),\n' +
            ') // [1, 4, 9, 16, 25]\n' +
            '\n' +
            'const squareConcatReducer = mapSquare(concat)\n' +
            '// now mapSquare is passed the function concat, so it assumes transducer\n' +
            '// position. squareConcatReducer is a reducer with chained functionality\n' +
            '// square and concat.\n' +
            '\n' +
            'console.log(\n' +
            '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
            ') // [1, 4, 9, 16, 25]\n' +
            '\n' +
            'console.log(\n' +
            "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
            ") // '1491625'",
          position: {
            start: { line: 63, column: 1, offset: 2908 },
            end: { line: 88, column: 4, offset: 3655 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 89, column: 1, offset: 3656 }
      }
    }
  },
  {
    name: 'map.pool',
    synopsis: '```coffeescript [specscript]\n' +
      'map.pool(\n' +
      '  maxConcurrency number,\n' +
      '  mapper any=>Promise|any\n' +
      ')(value Array) -> Promise|Array\n' +
      '```\n',
    description: '`map` with a concurrency limit that specifies the maximum number of promises in flight at any given moment.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const delayedLog = x => new Promise(function (resolve) {\n' +
      '  setTimeout(function () {\n' +
      '    console.log(x)\n' +
      '    resolve()\n' +
      '  }, 1000)\n' +
      '})\n' +
      '\n' +
      "console.log('start')\n" +
      'map.pool(2, delayedLog)([1, 2, 3, 4, 5])\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'map.pool(\n' +
            '  maxConcurrency number,\n' +
            '  mapper any=>Promise|any\n' +
            ')(value Array) -> Promise|Array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 125 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 126 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 6, offset: 5 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with a concurrency limit that specifies the maximum number of promises in flight at any given moment.',
              position: {
                start: { line: 1, column: 6, offset: 5 },
                end: { line: 1, column: 108, offset: 107 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 108, offset: 107 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const delayedLog = x => new Promise(function (resolve) {\n' +
            '  setTimeout(function () {\n' +
            '    console.log(x)\n' +
            '    resolve()\n' +
            '  }, 1000)\n' +
            '})\n' +
            '\n' +
            "console.log('start')\n" +
            'map.pool(2, delayedLog)([1, 2, 3, 4, 5])',
          position: {
            start: { line: 3, column: 1, offset: 109 },
            end: { line: 13, column: 4, offset: 333 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 14, column: 1, offset: 334 }
      }
    }
  },
  {
    name: 'map.withIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'map.withIndex(\n' +
      '  mapper (item T, index number, Array<T>)=>Promise|any,\n' +
      ')(Array<T>) -> Promise|Array\n' +
      '```\n',
    description: '`map` with index and collection parameters additionally supplied to the mapper each iteration.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const range = length => map.withIndex(\n' +
      '  (_, index) => index + 1)(Array(length))\n' +
      '\n' +
      'console.log(range(5)) // [1, 2, 3, 4, 5]\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'map.withIndex(\n' +
            '  mapper (item T, index number, Array<T>)=>Promise|any,\n' +
            ')(Array<T>) -> Promise|Array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 132 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 133 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 6, offset: 5 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with index and collection parameters additionally supplied to the mapper each iteration.',
              position: {
                start: { line: 1, column: 6, offset: 5 },
                end: { line: 1, column: 95, offset: 94 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 95, offset: 94 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const range = length => map.withIndex(\n' +
            '  (_, index) => index + 1)(Array(length))\n' +
            '\n' +
            'console.log(range(5)) // [1, 2, 3, 4, 5]',
          position: {
            start: { line: 3, column: 1, offset: 96 },
            end: { line: 8, column: 4, offset: 249 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 1, offset: 250 }
      }
    }
  },
  {
    name: 'filter',
    synopsis: '```coffeescript [specscript]\n' +
      'Filterable<T> = Array<T>|Object<T>\n' +
      '  |Iterable<T>|AsyncIterable<T>|{ filter: T=>boolean }\n' +
      '\n' +
      'filter<T>(\n' +
      '  predicate T=>Promise|boolean,\n' +
      ')(value Filterable<T>) -> filtered Promise|Filterable<T>\n' +
      '\n' +
      'filter<T>(\n' +
      '  predicate T=>boolean, # note: only synchronous predicates allowed here\n' +
      ')(generatorFunction GeneratorFunction<T>)\n' +
      '  -> filteringGeneratorFunction GeneratorFunction<T>\n' +
      '\n' +
      'filter<T>(\n' +
      '  predicate T=>Promise|boolean,\n' +
      ')(asyncGeneratorFunction AsyncGeneratorFunction<T>)\n' +
      '  -> filteringAsyncGeneratorFunction AsyncGeneratorFunction<T>\n' +
      '\n' +
      'filter<T>(\n' +
      '  predicate T=>Promise|boolean,\n' +
      ')(reducer (any, T)=>Promise|any)\n' +
      '  -> filteringReducer (any, T)=>Promise|any\n' +
      '```\n',
    description: 'Exclude items from a collection based on the results of their concurrent execution with the predicate. The predicate may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  filter(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 3, 5]\n' +
      '\n' +
      'console.log(\n' +
      '  filter(isOdd)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
      ') // { a: 1, c: 3, e: 5 }\n' +
      '```\n' +
      '\n' +
      'Passing a generator function to `filter` returns a filtering generator function; all values that are normally yielded by a generator function that test falsy with the predicate are skipped by the returned filtering generator function.\n' +
      '\n' +
      '**Warning**: usage of an async predicate with generator functions or iterators may lead to undesirable behavior.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const numbers = function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const oddNumbers = filter(isOdd)(numbers)\n' +
      '\n' +
      'for (const number of oddNumbers()) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'const oddNumbersGenerator = filter(isOdd)(numbers())\n' +
      '\n' +
      'for (const number of oddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```\n' +
      '\n' +
      'In a similar vein to generators, `filter` also filters elements from async generators.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncIsOdd = async number => number % 2 == 1\n' +
      '\n' +
      'const asyncNumbers = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const asyncOddNumbers = filter(asyncIsOdd)(asyncNumbers)\n' +
      '\n' +
      'for await (const number of asyncOddNumbers()) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'const asyncOddNumbersGenerator = filter(asyncIsOdd)(asyncNumbers())\n' +
      '\n' +
      'for await (const number of asyncOddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```\n' +
      '\n' +
      'Finally, `filter` creates filtering transducers. A reducer created from a filtering transducer skips items of a reducing operation if they test falsy under the predicate.\n' +
      '\n' +
      'Note: It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of `reduce` must support asynchronous operations. This library provides such an implementation as `reduce`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const concatOddNumbers = filter(isOdd)(concat)\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(concatOddNumbers, []),\n' +
      ') // [1, 3, 5]\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Filterable<T> = Array<T>|Object<T>\n' +
            '  |Iterable<T>|AsyncIterable<T>|{ filter: T=>boolean }\n' +
            '\n' +
            'filter<T>(\n' +
            '  predicate T=>Promise|boolean,\n' +
            ')(value Filterable<T>) -> filtered Promise|Filterable<T>\n' +
            '\n' +
            'filter<T>(\n' +
            '  predicate T=>boolean, # note: only synchronous predicates allowed here\n' +
            ')(generatorFunction GeneratorFunction<T>)\n' +
            '  -> filteringGeneratorFunction GeneratorFunction<T>\n' +
            '\n' +
            'filter<T>(\n' +
            '  predicate T=>Promise|boolean,\n' +
            ')(asyncGeneratorFunction AsyncGeneratorFunction<T>)\n' +
            '  -> filteringAsyncGeneratorFunction AsyncGeneratorFunction<T>\n' +
            '\n' +
            'filter<T>(\n' +
            '  predicate T=>Promise|boolean,\n' +
            ')(reducer (any, T)=>Promise|any)\n' +
            '  -> filteringReducer (any, T)=>Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 23, column: 4, offset: 683 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 24, column: 1, offset: 684 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Exclude items from a collection based on the results of their concurrent execution with the predicate. The predicate may be asynchronous.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 138, offset: 137 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 138, offset: 137 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'console.log(\n' +
            '  filter(isOdd)([1, 2, 3, 4, 5]),\n' +
            ') // [1, 3, 5]\n' +
            '\n' +
            'console.log(\n' +
            '  filter(isOdd)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
            ') // { a: 1, c: 3, e: 5 }',
          position: {
            start: { line: 3, column: 1, offset: 139 },
            end: { line: 13, column: 4, offset: 363 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Passing a generator function to ',
              position: {
                start: { line: 15, column: 1, offset: 365 },
                end: { line: 15, column: 33, offset: 397 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'filter',
              position: {
                start: { line: 15, column: 33, offset: 397 },
                end: { line: 15, column: 41, offset: 405 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' returns a filtering generator function; all values that are normally yielded by a generator function that test falsy with the predicate are skipped by the returned filtering generator function.',
              position: {
                start: { line: 15, column: 41, offset: 405 },
                end: { line: 15, column: 235, offset: 599 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 15, column: 1, offset: 365 },
            end: { line: 15, column: 235, offset: 599 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'Warning',
                  position: {
                    start: { line: 17, column: 3, offset: 603 },
                    end: { line: 17, column: 10, offset: 610 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 17, column: 1, offset: 601 },
                end: { line: 17, column: 12, offset: 612 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ': usage of an async predicate with generator functions or iterators may lead to undesirable behavior.',
              position: {
                start: { line: 17, column: 12, offset: 612 },
                end: { line: 17, column: 113, offset: 713 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 17, column: 1, offset: 601 },
            end: { line: 17, column: 113, offset: 713 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const numbers = function* () {\n' +
            '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
            '}\n' +
            '\n' +
            'const oddNumbers = filter(isOdd)(numbers)\n' +
            '\n' +
            'for (const number of oddNumbers()) {\n' +
            '  console.log(number) // 1\n' +
            '                      // 3\n' +
            '                      // 5\n' +
            '}\n' +
            '\n' +
            'const oddNumbersGenerator = filter(isOdd)(numbers())\n' +
            '\n' +
            'for (const number of oddNumbersGenerator) {\n' +
            '  console.log(number) // 1\n' +
            '                      // 3\n' +
            '                      // 5\n' +
            '}',
          position: {
            start: { line: 19, column: 1, offset: 715 },
            end: { line: 41, column: 4, offset: 1211 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'In a similar vein to generators, ',
              position: {
                start: { line: 43, column: 1, offset: 1213 },
                end: { line: 43, column: 34, offset: 1246 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'filter',
              position: {
                start: { line: 43, column: 34, offset: 1246 },
                end: { line: 43, column: 42, offset: 1254 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' also filters elements from async generators.',
              position: {
                start: { line: 43, column: 42, offset: 1254 },
                end: { line: 43, column: 87, offset: 1299 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 43, column: 1, offset: 1213 },
            end: { line: 43, column: 87, offset: 1299 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const asyncIsOdd = async number => number % 2 == 1\n' +
            '\n' +
            'const asyncNumbers = async function* () {\n' +
            '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
            '}\n' +
            '\n' +
            'const asyncOddNumbers = filter(asyncIsOdd)(asyncNumbers)\n' +
            '\n' +
            'for await (const number of asyncOddNumbers()) {\n' +
            '  console.log(number) // 1\n' +
            '                      // 3\n' +
            '                      // 5\n' +
            '}\n' +
            '\n' +
            'const asyncOddNumbersGenerator = filter(asyncIsOdd)(asyncNumbers())\n' +
            '\n' +
            'for await (const number of asyncOddNumbersGenerator) {\n' +
            '  console.log(number) // 1\n' +
            '                      // 3\n' +
            '                      // 5\n' +
            '}',
          position: {
            start: { line: 45, column: 1, offset: 1301 },
            end: { line: 67, column: 4, offset: 1871 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Finally, ',
              position: {
                start: { line: 69, column: 1, offset: 1873 },
                end: { line: 69, column: 10, offset: 1882 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'filter',
              position: {
                start: { line: 69, column: 10, offset: 1882 },
                end: { line: 69, column: 18, offset: 1890 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' creates filtering transducers. A reducer created from a filtering transducer skips items of a reducing operation if they test falsy under the predicate.',
              position: {
                start: { line: 69, column: 18, offset: 1890 },
                end: { line: 69, column: 171, offset: 2043 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 69, column: 1, offset: 1873 },
            end: { line: 69, column: 171, offset: 2043 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Note: It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of ',
              position: {
                start: { line: 71, column: 1, offset: 2045 },
                end: { line: 71, column: 111, offset: 2155 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 71, column: 111, offset: 2155 },
                end: { line: 71, column: 119, offset: 2163 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' must support asynchronous operations. This library provides such an implementation as ',
              position: {
                start: { line: 71, column: 119, offset: 2163 },
                end: { line: 71, column: 206, offset: 2250 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 71, column: 206, offset: 2250 },
                end: { line: 71, column: 214, offset: 2258 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 71, column: 214, offset: 2258 },
                end: { line: 71, column: 215, offset: 2259 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 71, column: 1, offset: 2045 },
            end: { line: 71, column: 215, offset: 2259 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const concat = (array, item) => array.concat(item)\n' +
            '\n' +
            'const concatOddNumbers = filter(isOdd)(concat)\n' +
            '\n' +
            'console.log(\n' +
            '  [1, 2, 3, 4, 5].reduce(concatOddNumbers, []),\n' +
            ') // [1, 3, 5]',
          position: {
            start: { line: 73, column: 1, offset: 2261 },
            end: { line: 83, column: 4, offset: 2508 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 84, column: 1, offset: 2509 }
      }
    }
  },
  {
    name: 'filter.withIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'filter.withIndex(\n' +
      '  predicate T=>Promise|boolean,\n' +
      ')(value Array<T>) -> filteredArray Array<T>\n' +
      '```\n',
    description: '`filter` with each predicate call supplemented by index and reference to original collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const uniq = filter.withIndex(\n' +
      '  (item, index, array) => item !== array[index + 1])\n' +
      '\n' +
      'console.log(\n' +
      '  uniq([1, 1, 1, 2, 2, 2, 3, 3, 3]),\n' +
      ') // [1, 2, 3]\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'filter.withIndex(\n' +
            '  predicate T=>Promise|boolean,\n' +
            ')(value Array<T>) -> filteredArray Array<T>',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 126 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 127 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'filter',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 9, offset: 8 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with each predicate call supplemented by index and reference to original collection.',
              position: {
                start: { line: 1, column: 9, offset: 8 },
                end: { line: 1, column: 94, offset: 93 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 94, offset: 93 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const uniq = filter.withIndex(\n' +
            '  (item, index, array) => item !== array[index + 1])\n' +
            '\n' +
            'console.log(\n' +
            '  uniq([1, 1, 1, 2, 2, 2, 3, 3, 3]),\n' +
            ') // [1, 2, 3]',
          position: {
            start: { line: 3, column: 1, offset: 95 },
            end: { line: 10, column: 4, offset: 275 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 11, column: 1, offset: 276 }
      }
    }
  },
  {
    name: 'reduce',
    synopsis: '```coffeescript [specscript]\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
      '  |{ reduce: (any, T)=>any }|Object<T>\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Transducer = Reducer=>Reducer\n' +
      '\n' +
      'reduce<T>(\n' +
      '  reducer Reducer<T>,\n' +
      '  init (collection=>Promise|any)|any?,\n' +
      ')(collection Foldable<T>) -> Promise|any\n' +
      '\n' +
      'reduce<args ...any>(\n' +
      '  reducer Reducer,\n' +
      '  init (...args=>Promise|any)|any?,\n' +
      ')(value GeneratorFunction|AsyncGeneratorFunction)\n' +
      '  -> reducingFunction ...args=>Promise|Semigroup|any\n' +
      '\n' +
      'reduce<args ...any>(\n' +
      '  reducer Reducer,\n' +
      '  init (...args=>Promise|any)|any?,\n' +
      ')(anotherReducer Reducer, moreReducers ...Reducer)\n' +
      '  -> chainedReducingFunction ...args=>Promise|any\n' +
      '```\n',
    description: 'Execute a reducer for each item of a collection, resulting in a single output value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const max = (a, b) => a > b ? a : b\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(max)([1, 3, 5, 4, 2]),\n' +
      ') // 5\n' +
      '```\n' +
      '\n' +
      'If the optional initialization parameter is supplied, the result starts as that parameter rather than the first item of the collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)([1, 2, 3, 4, 5], 0),\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'If the initialization parameter is a function, it is treated as a resolver and called with the input arguments to resolve an initial value for the accumulator. Unless care is exercised when handling references for this initial value, a function `init` is the recommended way to use reduce for transformations on non-primitive initial values.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
      '\n' +
      'const initEmptyArray = () => []\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(concatSquares, initEmptyArray)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '```\n' +
      '\n' +
      'The concept of iteratable reducer execution goes beyond synchronous reducers on arrays. Reducers can be asynchronous, while data parameters can be asynchronous streams.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      '// asyncAppReducer(\n' +
      '//   state { todos: Array },\n' +
      '//   action { type: string, todoID: string },\n' +
      '// ) -> state\n' +
      'const asyncAppReducer = async function (state, action) {\n' +
      "  if (action.type == 'FETCH_TODO') {\n" +
      '    const todo = await fetch(\n' +
      "      'https://jsonplaceholder.typicode.com/todos/' + action.todoID,\n" +
      '    ).then(response => response.json())\n' +
      "    console.log('fetched', todo)\n" +
      '    state.todos.push(todo)\n' +
      '    return state\n' +
      '  }\n' +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const asyncFetchActions = async function* (count) {\n' +
      '  let idCount = 0\n' +
      '  while (++idCount <= count) {\n' +
      '    await sleep(1000)\n' +
      "    yield { type: 'FETCH_TODO', todoID: idCount }\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'const state = { todos: [] }\n' +
      '\n' +
      'reduce(asyncAppReducer, state)(asyncFetchActions(5)).then(\n' +
      "  reducedState => console.log('finalState', reducedState))\n" +
      '\n' +
      "// fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
      "// fetched { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
      "// fetched { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
      "// fetched { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
      "// fetched { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }\n" +
      '// finalState {\n' +
      '//   todos: [\n' +
      "//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },\n" +
      "//     { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false },\n" +
      "//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },\n" +
      "//     { userId: 1, id: 4, title: 'et porro tempora', completed: true },\n" +
      "//     { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false },\n" +
      '//   ],\n' +
      '// }\n' +
      '```\n' +
      '\n' +
      'If the first argument to a reducing function is a reducer, `reduce` concatenates any reducers in argument position onto the initial reducer, producing a combined reducer that performs a chained operation per each item in a reducing operation.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const reducerA = (state, action) => {\n' +
      "  if (action.type == 'A') return { ...state, A: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerB = (state, action) => {\n' +
      "  if (action.type == 'B') return { ...state, B: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerC = (state, action) => {\n' +
      "  if (action.type == 'C') return { ...state, C: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducingABC = reduce(\n' +
      '  reducerA, () => ({}))(reducerB, reducerC)\n' +
      '\n' +
      "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
      '\n' +
      'console.log(\n' +
      '  reducingABC(actions),\n' +
      ') // { A: true, B: true, C: true }\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
            '  |{ reduce: (any, T)=>any }|Object<T>\n' +
            'Reducer<T> = (any, T)=>Promise|any\n' +
            'Transducer = Reducer=>Reducer\n' +
            '\n' +
            'reduce<T>(\n' +
            '  reducer Reducer<T>,\n' +
            '  init (collection=>Promise|any)|any?,\n' +
            ')(collection Foldable<T>) -> Promise|any\n' +
            '\n' +
            'reduce<args ...any>(\n' +
            '  reducer Reducer,\n' +
            '  init (...args=>Promise|any)|any?,\n' +
            ')(value GeneratorFunction|AsyncGeneratorFunction)\n' +
            '  -> reducingFunction ...args=>Promise|Semigroup|any\n' +
            '\n' +
            'reduce<args ...any>(\n' +
            '  reducer Reducer,\n' +
            '  init (...args=>Promise|any)|any?,\n' +
            ')(anotherReducer Reducer, moreReducers ...Reducer)\n' +
            '  -> chainedReducingFunction ...args=>Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 23, column: 4, offset: 651 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 24, column: 1, offset: 652 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Execute a reducer for each item of a collection, resulting in a single output value.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 85, offset: 84 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 85, offset: 84 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const max = (a, b) => a > b ? a : b\n' +
            '\n' +
            'console.log(\n' +
            '  reduce(max)([1, 3, 5, 4, 2]),\n' +
            ') // 5',
          position: {
            start: { line: 3, column: 1, offset: 86 },
            end: { line: 9, column: 4, offset: 205 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'If the optional initialization parameter is supplied, the result starts as that parameter rather than the first item of the collection.',
              position: {
                start: { line: 11, column: 1, offset: 207 },
                end: { line: 11, column: 136, offset: 342 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 207 },
            end: { line: 11, column: 136, offset: 342 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const add = (a, b) => a + b\n' +
            '\n' +
            'console.log(\n' +
            '  reduce(add)([1, 2, 3, 4, 5], 0),\n' +
            ') // 15',
          position: {
            start: { line: 13, column: 1, offset: 344 },
            end: { line: 19, column: 4, offset: 459 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'If the initialization parameter is a function, it is treated as a resolver and called with the input arguments to resolve an initial value for the accumulator. Unless care is exercised when handling references for this initial value, a function ',
              position: {
                start: { line: 21, column: 1, offset: 461 },
                end: { line: 21, column: 246, offset: 706 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'init',
              position: {
                start: { line: 21, column: 246, offset: 706 },
                end: { line: 21, column: 252, offset: 712 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is the recommended way to use reduce for transformations on non-primitive initial values.',
              position: {
                start: { line: 21, column: 252, offset: 712 },
                end: { line: 21, column: 342, offset: 802 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 461 },
            end: { line: 21, column: 342, offset: 802 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
            '\n' +
            'const initEmptyArray = () => []\n' +
            '\n' +
            'console.log(\n' +
            '  reduce(concatSquares, initEmptyArray)([1, 2, 3, 4, 5]),\n' +
            ') // [1, 4, 9, 16, 25]',
          position: {
            start: { line: 23, column: 1, offset: 804 },
            end: { line: 31, column: 4, offset: 1027 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'The concept of iteratable reducer execution goes beyond synchronous reducers on arrays. Reducers can be asynchronous, while data parameters can be asynchronous streams.',
              position: {
                start: { line: 33, column: 1, offset: 1029 },
                end: { line: 33, column: 169, offset: 1197 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1029 },
            end: { line: 33, column: 169, offset: 1197 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
            '\n' +
            '// asyncAppReducer(\n' +
            '//   state { todos: Array },\n' +
            '//   action { type: string, todoID: string },\n' +
            '// ) -> state\n' +
            'const asyncAppReducer = async function (state, action) {\n' +
            "  if (action.type == 'FETCH_TODO') {\n" +
            '    const todo = await fetch(\n' +
            "      'https://jsonplaceholder.typicode.com/todos/' + action.todoID,\n" +
            '    ).then(response => response.json())\n' +
            "    console.log('fetched', todo)\n" +
            '    state.todos.push(todo)\n' +
            '    return state\n' +
            '  }\n' +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const asyncFetchActions = async function* (count) {\n' +
            '  let idCount = 0\n' +
            '  while (++idCount <= count) {\n' +
            '    await sleep(1000)\n' +
            "    yield { type: 'FETCH_TODO', todoID: idCount }\n" +
            '  }\n' +
            '}\n' +
            '\n' +
            'const state = { todos: [] }\n' +
            '\n' +
            'reduce(asyncAppReducer, state)(asyncFetchActions(5)).then(\n' +
            "  reducedState => console.log('finalState', reducedState))\n" +
            '\n' +
            "// fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
            "// fetched { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
            "// fetched { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
            "// fetched { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
            "// fetched { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }\n" +
            '// finalState {\n' +
            '//   todos: [\n' +
            "//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },\n" +
            "//     { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false },\n" +
            "//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },\n" +
            "//     { userId: 1, id: 4, title: 'et porro tempora', completed: true },\n" +
            "//     { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false },\n" +
            '//   ],\n' +
            '// }',
          position: {
            start: { line: 35, column: 1, offset: 1199 },
            end: { line: 81, column: 4, offset: 2897 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'If the first argument to a reducing function is a reducer, ',
              position: {
                start: { line: 83, column: 1, offset: 2899 },
                end: { line: 83, column: 60, offset: 2958 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 83, column: 60, offset: 2958 },
                end: { line: 83, column: 68, offset: 2966 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' concatenates any reducers in argument position onto the initial reducer, producing a combined reducer that performs a chained operation per each item in a reducing operation.',
              position: {
                start: { line: 83, column: 68, offset: 2966 },
                end: { line: 83, column: 243, offset: 3141 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 83, column: 1, offset: 2899 },
            end: { line: 83, column: 243, offset: 3141 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const reducerA = (state, action) => {\n' +
            "  if (action.type == 'A') return { ...state, A: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const reducerB = (state, action) => {\n' +
            "  if (action.type == 'B') return { ...state, B: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const reducerC = (state, action) => {\n' +
            "  if (action.type == 'C') return { ...state, C: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const reducingABC = reduce(\n' +
            '  reducerA, () => ({}))(reducerB, reducerC)\n' +
            '\n' +
            "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
            '\n' +
            'console.log(\n' +
            '  reducingABC(actions),\n' +
            ') // { A: true, B: true, C: true }',
          position: {
            start: { line: 85, column: 1, offset: 3143 },
            end: { line: 109, column: 4, offset: 3714 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 110, column: 1, offset: 3715 }
      }
    }
  },
  {
    name: 'transform',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Transducer = Reducer=>Reducer\n' +
      'Semigroup = Array|string|Set|TypedArray\n' +
      '  |{ concat: function }|{ write: function }|Object\n' +
      'Foldable = Iterable|AsyncIterable|{ reduce: function }|Object|any\n' +
      '\n' +
      'transform(\n' +
      '  transducer Transducer,\n' +
      '  init (collection=>Promise|Semigroup|any)|Semigroup|any,\n' +
      ')(collection Foldable)\n' +
      '  -> result Promise|Semigroup|any\n' +
      '\n' +
      'transform<args ...any>(\n' +
      '  transducer Transducer,\n' +
      '  init (...args=>Promise|Semigroup|any)|Semigroup|any,\n' +
      ')(value GeneratorFunction|AsyncGeneratorFunction)\n' +
      '  -> transformingFunction ...args=>Promise|Semigroup|any\n' +
      '\n' +
      'transform<args ...any>(\n' +
      '  transducer Transducer,\n' +
      '  init (...args=>Promise|Semigroup|any)|Semigroup|any,\n' +
      ')(reducer Reducer, moreReducers ...Reducer)\n' +
      '  -> chainedTransformingFunction ...args=>Promise|Semigroup|any\n' +
      '```\n',
    description: 'Execute a transducer for each item of a collection, concatenating results into the accumulator. The initial value may be a function, in which case it is treated as a resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const squaredOdds = pipe([\n' +
      '  filter(isOdd),\n' +
      '  map(square),\n' +
      '])\n' +
      '\n' +
      'console.log(\n' +
      '  transform(squaredOdds, () => [])([1, 2, 3, 4, 5]),\n' +
      ') // [1, 9, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  transform(squaredOdds, '')([1, 2, 3, 4, 5]),\n" +
      ") // '1925'\n" +
      '\n' +
      'console.log(\n' +
      '  transform(squaredOdds, () => new Uint8Array())([1, 2, 3, 4, 5]),\n' +
      ') // Uint8Array(3) [ 1, 9, 25 ]\n' +
      '```\n' +
      '\n' +
      'Concatenation varies by aggregate result and pipeline item. Generally, if an item is of the same type as the aggregate result, it is flattened into the result. Otherwise, the item is appended.\n' +
      '\n' +
      ' * `Array` - concatenation resembles `result.concat(item)`. Non-arrays are concatenated as items, while arrays are flattened.\n' +
      ' * `string` - concatenation is `result + item`\n' +
      ' * `Set` - concatenation resembles `result.add(item)` for individual items; other sets are flattened.\n' +
      ' * `TypedArray` - concatenation is managing ArrayBuffers while appending items. Careful about the types here - a `Uint8Array` should only concatenate 8-bit unsigned numbers if not concatenating other `Uint8Array`s\n' +
      ' * { concat: function } - an object that implements concat. Concatenation calls the `.concat` method in `result.concat(item)`. Flattening is left to the implementation.\n' +
      ' * { write: function } - an object that implements write; these are for Node.js streams. Concatenation calls the method `.write` in `result.write(item)` or `item.pipe(result)` if the `item` is readable.\n' +
      ' * Object - a regular object, this could be state. Concatenation is a shallow merge `{ ...object, ...item }` or identity for null and undefined.\n' +
      '\n' +
      'Any object that implements `.concat` can be transformed as a Semigroup.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const Max = function (number) {\n' +
      '  this.number = number\n' +
      '}\n' +
      '\n' +
      'Max.prototype.concat = function (otherMax) {\n' +
      '  return new Max(Math.max(\n' +
      '    this.number,\n' +
      '    otherMax.constructor == Max ? otherMax.number : otherMax,\n' +
      '  ))\n' +
      '}\n' +
      '\n' +
      'console.log(\n' +
      '  transform(\n' +
      '    map(Math.abs), new Max(-Infinity),\n' +
      '  )([-1, -2, -3, -4, -5]).number,\n' +
      ') // 5\n' +
      '```\n' +
      '\n' +
      'Node.js WritableStream interfaces are consumed as well.\n' +
      '\n' +
      '```javascript\n' +
      '// this example is duplicated in rubico/examples/transformStreamRandomInts.js\n' +
      '\n' +
      "const { pipe, map, transform } = require('rubico')\n" +
      '\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const toString = value => value.toString()\n' +
      '\n' +
      'const randomInt = () => Math.ceil(Math.random() * 100)\n' +
      '\n' +
      'const streamRandomInts = async function* () {\n' +
      '  while (true) {\n' +
      '    yield randomInt()\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'transform(\n' +
      '  map(pipe([square, toString])), process.stdout,\n' +
      ')(streamRandomInts()) // 9216576529289484980147613249169774446246768649...\n' +
      '```\n' +
      '\n' +
      '`transform`, like `reduce`, supports reducer combination. This has a use case in state management, where for an aggregate state object, incoming values are concatenated (shallowly assigned).\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const reducerA = async (state, action) => {\n' +
      "  if (action.type == 'A') return { ...state, A: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerB = async (state, action) => {\n' +
      "  if (action.type == 'B') return { ...state, B: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerC = async (state, action) => {\n' +
      "  if (action.type == 'C') return { ...state, C: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const logAction = function (action) {\n' +
      "  console.log('action', action)\n" +
      '  return action\n' +
      '}\n' +
      '\n' +
      'const reducingABC = transform(\n' +
      '  map(logAction), // transducer middleware\n' +
      '  () => ({}),\n' +
      ')(reducerA, reducerB, reducerC)\n' +
      '\n' +
      "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
      '\n' +
      'reducingABC(actions).then(\n' +
      "  state => console.log('state', state)) // action { type: 'A' }\n" +
      "                                        // action { type: 'B' }\n" +
      "                                        // action { type: 'C' }\n" +
      '                                        // state { A: true, B: true, C: true }\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Reducer<T> = (any, T)=>Promise|any\n' +
            'Transducer = Reducer=>Reducer\n' +
            'Semigroup = Array|string|Set|TypedArray\n' +
            '  |{ concat: function }|{ write: function }|Object\n' +
            'Foldable = Iterable|AsyncIterable|{ reduce: function }|Object|any\n' +
            '\n' +
            'transform(\n' +
            '  transducer Transducer,\n' +
            '  init (collection=>Promise|Semigroup|any)|Semigroup|any,\n' +
            ')(collection Foldable)\n' +
            '  -> result Promise|Semigroup|any\n' +
            '\n' +
            'transform<args ...any>(\n' +
            '  transducer Transducer,\n' +
            '  init (...args=>Promise|Semigroup|any)|Semigroup|any,\n' +
            ')(value GeneratorFunction|AsyncGeneratorFunction)\n' +
            '  -> transformingFunction ...args=>Promise|Semigroup|any\n' +
            '\n' +
            'transform<args ...any>(\n' +
            '  transducer Transducer,\n' +
            '  init (...args=>Promise|Semigroup|any)|Semigroup|any,\n' +
            ')(reducer Reducer, moreReducers ...Reducer)\n' +
            '  -> chainedTransformingFunction ...args=>Promise|Semigroup|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 25, column: 4, offset: 831 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 26, column: 1, offset: 832 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Execute a transducer for each item of a collection, concatenating results into the accumulator. The initial value may be a function, in which case it is treated as a resolver.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 176, offset: 175 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 176, offset: 175 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const square = number => number ** 2\n' +
            '\n' +
            'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const squaredOdds = pipe([\n' +
            '  filter(isOdd),\n' +
            '  map(square),\n' +
            '])\n' +
            '\n' +
            'console.log(\n' +
            '  transform(squaredOdds, () => [])([1, 2, 3, 4, 5]),\n' +
            ') // [1, 9, 25]\n' +
            '\n' +
            'console.log(\n' +
            "  transform(squaredOdds, '')([1, 2, 3, 4, 5]),\n" +
            ") // '1925'\n" +
            '\n' +
            'console.log(\n' +
            '  transform(squaredOdds, () => new Uint8Array())([1, 2, 3, 4, 5]),\n' +
            ') // Uint8Array(3) [ 1, 9, 25 ]',
          position: {
            start: { line: 3, column: 1, offset: 177 },
            end: { line: 24, column: 4, offset: 617 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Concatenation varies by aggregate result and pipeline item. Generally, if an item is of the same type as the aggregate result, it is flattened into the result. Otherwise, the item is appended.',
              position: {
                start: { line: 26, column: 1, offset: 619 },
                end: { line: 26, column: 193, offset: 811 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 619 },
            end: { line: 26, column: 193, offset: 811 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Array',
                      position: {
                        start: { line: 28, column: 4, offset: 816 },
                        end: { line: 28, column: 11, offset: 823 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - concatenation resembles ',
                      position: {
                        start: { line: 28, column: 11, offset: 823 },
                        end: { line: 28, column: 38, offset: 850 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'result.concat(item)',
                      position: {
                        start: { line: 28, column: 38, offset: 850 },
                        end: { line: 28, column: 59, offset: 871 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: '. Non-arrays are concatenated as items, while arrays are flattened.',
                      position: {
                        start: { line: 28, column: 59, offset: 871 },
                        end: { line: 28, column: 126, offset: 938 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 28, column: 4, offset: 816 },
                    end: { line: 28, column: 126, offset: 938 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 28, column: 1, offset: 813 },
                end: { line: 28, column: 126, offset: 938 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'string',
                      position: {
                        start: { line: 29, column: 4, offset: 942 },
                        end: { line: 29, column: 12, offset: 950 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - concatenation is ',
                      position: {
                        start: { line: 29, column: 12, offset: 950 },
                        end: { line: 29, column: 32, offset: 970 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'result + item',
                      position: {
                        start: { line: 29, column: 32, offset: 970 },
                        end: { line: 29, column: 47, offset: 985 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 4, offset: 942 },
                    end: { line: 29, column: 47, offset: 985 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 29, column: 1, offset: 939 },
                end: { line: 29, column: 47, offset: 985 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Set',
                      position: {
                        start: { line: 30, column: 4, offset: 989 },
                        end: { line: 30, column: 9, offset: 994 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - concatenation resembles ',
                      position: {
                        start: { line: 30, column: 9, offset: 994 },
                        end: { line: 30, column: 36, offset: 1021 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'result.add(item)',
                      position: {
                        start: { line: 30, column: 36, offset: 1021 },
                        end: { line: 30, column: 54, offset: 1039 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' for individual items; other sets are flattened.',
                      position: {
                        start: { line: 30, column: 54, offset: 1039 },
                        end: { line: 30, column: 102, offset: 1087 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 989 },
                    end: { line: 30, column: 102, offset: 1087 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 30, column: 1, offset: 986 },
                end: { line: 30, column: 102, offset: 1087 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'TypedArray',
                      position: {
                        start: { line: 31, column: 4, offset: 1091 },
                        end: { line: 31, column: 16, offset: 1103 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - concatenation is managing ArrayBuffers while appending items. Careful about the types here - a ',
                      position: {
                        start: { line: 31, column: 16, offset: 1103 },
                        end: { line: 31, column: 114, offset: 1201 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Uint8Array',
                      position: {
                        start: { line: 31, column: 114, offset: 1201 },
                        end: { line: 31, column: 126, offset: 1213 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' should only concatenate 8-bit unsigned numbers if not concatenating other ',
                      position: {
                        start: { line: 31, column: 126, offset: 1213 },
                        end: { line: 31, column: 201, offset: 1288 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Uint8Array',
                      position: {
                        start: { line: 31, column: 201, offset: 1288 },
                        end: { line: 31, column: 213, offset: 1300 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: 's',
                      position: {
                        start: { line: 31, column: 213, offset: 1300 },
                        end: { line: 31, column: 214, offset: 1301 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1091 },
                    end: { line: 31, column: 214, offset: 1301 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 1, offset: 1088 },
                end: { line: 31, column: 214, offset: 1301 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: '{ concat: function } - an object that implements concat. Concatenation calls the ',
                      position: {
                        start: { line: 32, column: 4, offset: 1305 },
                        end: { line: 32, column: 85, offset: 1386 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.concat',
                      position: {
                        start: { line: 32, column: 85, offset: 1386 },
                        end: { line: 32, column: 94, offset: 1395 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' method in ',
                      position: {
                        start: { line: 32, column: 94, offset: 1395 },
                        end: { line: 32, column: 105, offset: 1406 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'result.concat(item)',
                      position: {
                        start: { line: 32, column: 105, offset: 1406 },
                        end: { line: 32, column: 126, offset: 1427 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: '. Flattening is left to the implementation.',
                      position: {
                        start: { line: 32, column: 126, offset: 1427 },
                        end: { line: 32, column: 169, offset: 1470 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 1305 },
                    end: { line: 32, column: 169, offset: 1470 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 32, column: 1, offset: 1302 },
                end: { line: 32, column: 169, offset: 1470 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: '{ write: function } - an object that implements write; these are for Node.js streams. Concatenation calls the method ',
                      position: {
                        start: { line: 33, column: 4, offset: 1474 },
                        end: { line: 33, column: 121, offset: 1591 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.write',
                      position: {
                        start: { line: 33, column: 121, offset: 1591 },
                        end: { line: 33, column: 129, offset: 1599 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' in ',
                      position: {
                        start: { line: 33, column: 129, offset: 1599 },
                        end: { line: 33, column: 133, offset: 1603 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'result.write(item)',
                      position: {
                        start: { line: 33, column: 133, offset: 1603 },
                        end: { line: 33, column: 153, offset: 1623 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or ',
                      position: {
                        start: { line: 33, column: 153, offset: 1623 },
                        end: { line: 33, column: 157, offset: 1627 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'item.pipe(result)',
                      position: {
                        start: { line: 33, column: 157, offset: 1627 },
                        end: { line: 33, column: 176, offset: 1646 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' if the ',
                      position: {
                        start: { line: 33, column: 176, offset: 1646 },
                        end: { line: 33, column: 184, offset: 1654 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'item',
                      position: {
                        start: { line: 33, column: 184, offset: 1654 },
                        end: { line: 33, column: 190, offset: 1660 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' is readable.',
                      position: {
                        start: { line: 33, column: 190, offset: 1660 },
                        end: { line: 33, column: 203, offset: 1673 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 1474 },
                    end: { line: 33, column: 203, offset: 1673 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 33, column: 1, offset: 1471 },
                end: { line: 33, column: 203, offset: 1673 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Object - a regular object, this could be state. Concatenation is a shallow merge ',
                      position: {
                        start: { line: 34, column: 4, offset: 1677 },
                        end: { line: 34, column: 85, offset: 1758 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '{ ...object, ...item }',
                      position: {
                        start: { line: 34, column: 85, offset: 1758 },
                        end: { line: 34, column: 109, offset: 1782 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or identity for null and undefined.',
                      position: {
                        start: { line: 34, column: 109, offset: 1782 },
                        end: { line: 34, column: 145, offset: 1818 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 4, offset: 1677 },
                    end: { line: 34, column: 145, offset: 1818 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 34, column: 1, offset: 1674 },
                end: { line: 34, column: 145, offset: 1818 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 28, column: 1, offset: 813 },
            end: { line: 34, column: 145, offset: 1818 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Any object that implements ',
              position: {
                start: { line: 36, column: 1, offset: 1820 },
                end: { line: 36, column: 28, offset: 1847 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.concat',
              position: {
                start: { line: 36, column: 28, offset: 1847 },
                end: { line: 36, column: 37, offset: 1856 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' can be transformed as a Semigroup.',
              position: {
                start: { line: 36, column: 37, offset: 1856 },
                end: { line: 36, column: 72, offset: 1891 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 36, column: 1, offset: 1820 },
            end: { line: 36, column: 72, offset: 1891 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const Max = function (number) {\n' +
            '  this.number = number\n' +
            '}\n' +
            '\n' +
            'Max.prototype.concat = function (otherMax) {\n' +
            '  return new Max(Math.max(\n' +
            '    this.number,\n' +
            '    otherMax.constructor == Max ? otherMax.number : otherMax,\n' +
            '  ))\n' +
            '}\n' +
            '\n' +
            'console.log(\n' +
            '  transform(\n' +
            '    map(Math.abs), new Max(-Infinity),\n' +
            '  )([-1, -2, -3, -4, -5]).number,\n' +
            ') // 5',
          position: {
            start: { line: 38, column: 1, offset: 1893 },
            end: { line: 55, column: 4, offset: 2246 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Node.js WritableStream interfaces are consumed as well.',
              position: {
                start: { line: 57, column: 1, offset: 2248 },
                end: { line: 57, column: 56, offset: 2303 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 57, column: 1, offset: 2248 },
            end: { line: 57, column: 56, offset: 2303 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: '// this example is duplicated in rubico/examples/transformStreamRandomInts.js\n' +
            '\n' +
            "const { pipe, map, transform } = require('rubico')\n" +
            '\n' +
            'const square = number => number ** 2\n' +
            '\n' +
            'const toString = value => value.toString()\n' +
            '\n' +
            'const randomInt = () => Math.ceil(Math.random() * 100)\n' +
            '\n' +
            'const streamRandomInts = async function* () {\n' +
            '  while (true) {\n' +
            '    yield randomInt()\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            'transform(\n' +
            '  map(pipe([square, toString])), process.stdout,\n' +
            ')(streamRandomInts()) // 9216576529289484980147613249169774446246768649...',
          position: {
            start: { line: 59, column: 1, offset: 2305 },
            end: { line: 79, column: 4, offset: 2818 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'transform',
              position: {
                start: { line: 81, column: 1, offset: 2820 },
                end: { line: 81, column: 12, offset: 2831 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', like ',
              position: {
                start: { line: 81, column: 12, offset: 2831 },
                end: { line: 81, column: 19, offset: 2838 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 81, column: 19, offset: 2838 },
                end: { line: 81, column: 27, offset: 2846 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', supports reducer combination. This has a use case in state management, where for an aggregate state object, incoming values are concatenated (shallowly assigned).',
              position: {
                start: { line: 81, column: 27, offset: 2846 },
                end: { line: 81, column: 191, offset: 3010 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 2820 },
            end: { line: 81, column: 191, offset: 3010 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const reducerA = async (state, action) => {\n' +
            "  if (action.type == 'A') return { ...state, A: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const reducerB = async (state, action) => {\n' +
            "  if (action.type == 'B') return { ...state, B: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const reducerC = async (state, action) => {\n' +
            "  if (action.type == 'C') return { ...state, C: true }\n" +
            '  return state\n' +
            '}\n' +
            '\n' +
            'const logAction = function (action) {\n' +
            "  console.log('action', action)\n" +
            '  return action\n' +
            '}\n' +
            '\n' +
            'const reducingABC = transform(\n' +
            '  map(logAction), // transducer middleware\n' +
            '  () => ({}),\n' +
            ')(reducerA, reducerB, reducerC)\n' +
            '\n' +
            "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
            '\n' +
            'reducingABC(actions).then(\n' +
            "  state => console.log('state', state)) // action { type: 'A' }\n" +
            "                                        // action { type: 'B' }\n" +
            "                                        // action { type: 'C' }\n" +
            '                                        // state { A: true, B: true, C: true }',
          position: {
            start: { line: 83, column: 1, offset: 3012 },
            end: { line: 116, column: 4, offset: 3964 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 117, column: 1, offset: 3965 }
      }
    }
  },
  {
    name: 'flatMap',
    synopsis: '```coffeescript [specscript]\n' +
      'DuplexStream = { read: function, write: function }\n' +
      'Monad = Array|String|Set\n' +
      '  |TypedArray|DuplexStream|Iterator|AsyncIterator\n' +
      '  |{ chain: function }|{ flatMap: function }|Object\n' +
      'Foldable = Iterable|AsyncIterable|{ reduce: function }\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'flatMap<T>(\n' +
      '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
      ')(value Monad<T>) -> result Monad\n' +
      '\n' +
      'flatMap<T>(\n' +
      '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
      ')(value GeneratorFunction<T>|AsyncGeneratorFunction<T>)\n' +
      '  -> flatMappingGeneratorFunction GeneratorFunction<T>|AsyncGeneratorFunction<T>\n' +
      '\n' +
      'flatMap<T>(\n' +
      '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
      ')(value Reducer<T>) -> flatMappingReducer Reducer\n' +
      '```\n',
    description: 'Apply a function to each item of a collection, flattening any resulting collection. The result is always the same type as the input value with all items mapped and flattened. The following outlines behavior for various collections.\n' +
      '\n' +
      '  * `Array` - map items then flatten results into a new `Array`\n' +
      '  * `String|string` - map items then flatten (`+`) results into a new `string`\n' +
      '  * `Set` - map items then flatten results into a new `Set`\n' +
      '  * `TypedArray` - map items then flatten results into a new `TypedArray`\n' +
      '  * `Buffer (Node.js)` - map items then flatten results into a new `Buffer`\n' +
      "  * `stream.Duplex (Node.js)` - map over stream items by async iteration, then call stream's `.write` to flatten\n" +
      '  * `{ chain: function }`, i.e. object that implements `.chain` - this function is called directly\n' +
      '  * `{ flatMap: function }`, i.e. object that implements `.flatMap` - this function is called directly\n' +
      '  * `Object` - a plain Object, values are mapped then flattened into result by `Object.assign`\n' +
      '  * `Reducer` - a function to be used in a reducing operation. Items of a flatMapped reducing operation are mapped then flattened into the aggregate\n' +
      '\n' +
      'On arrays, map the flatMapper function with concurrent asynchronous execution, then flatten the result one depth.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const duplicate = number => [number, number]\n' +
      '\n' +
      'console.log(\n' +
      '  flatMap(duplicate)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
      '\n' +
      'const asyncDuplicate = async number => [number, number]\n' +
      '\n' +
      'flatMap(asyncDuplicate)( // concurrent execution\n' +
      '  [1, 2, 3, 4, 5]).then(console.log) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
      '```\n' +
      '\n' +
      'Collections returned by the flatMapper are flattened into the result by type-specific iteration and concatenation, while async iterables are muxed. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items. This behavior is useful for working with asynchronous streams, e.g. of DOM events or requests.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'const repeat3 = function* (message) {\n' +
      '  yield message; yield message; yield message\n' +
      '}\n' +
      '\n' +
      'console.log( // sync is concatenated\n' +
      "  flatMap(repeat3)(['foo', 'bar', 'baz']),\n" +
      ") // ['foo', 'foo', 'foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']\n" +
      '\n' +
      'const asyncRepeat3 = async function* (message) {\n' +
      '  yield message\n' +
      '  await sleep(100)\n' +
      '  yield message\n' +
      '  await sleep(1000)\n' +
      '  yield message\n' +
      '}\n' +
      '\n' +
      'flatMap(asyncRepeat3)( // async is muxed\n' +
      "  ['foo', 'bar', 'baz']).then(console.log)\n" +
      "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']\n" +
      '```\n' +
      '\n' +
      'Upon flatMapper execution, flatten any collection return into the result.\n' +
      '\n' +
      '  * Iterable - items are concatenated into the result\n' +
      '  * Iterator/Generator - items are concatenated into the result. Source is consumed.\n' +
      '  * Object that implements `.reduce` - this function is called directly for flattening\n' +
      '  * Object that implements `.chain` or `.flatMap` - either of these is called directly to flatten\n' +
      '  * any other Object - values are flattened\n' +
      '  * AsyncIterable - items are muxed by asynchronous resolution\n' +
      '  * AsyncIterator/AsyncGenerator - items are muxed by asynchronous resolution. Source is consumed.\n' +
      '\n' +
      'All other types are left in the result as they are.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'flatMap(identity)([\n' +
      '  [1, 1],\n' +
      '  new Set([2, 2]),\n' +
      '  (function* () { yield 3; yield 3 })(),\n' +
      '  (async function* () { yield 4; yield 4 })(),\n' +
      '  { a: 5, b: 5 },\n' +
      '  6,\n' +
      '  Promise.resolve(7),\n' +
      '  new Uint8Array([8]),\n' +
      ']).then(console.log)\n' +
      '// [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4]\n' +
      '```\n' +
      '\n' +
      "Purer functional programming is possible with flatMap operation on monads. A monad could be any object that implements `.chain` or `.flatMap`. When a flatMapping operation encounters a monad, it calls the monad's `.chain` method directly to flatten.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const Maybe = value => ({\n' +
      '  chain(flatMapper) {\n' +
      '    return value == null ? value : flatMapper(value)\n' +
      '  },\n' +
      '})\n' +
      '\n' +
      'flatMap(console.log)(Maybe(null))\n' +
      '\n' +
      "flatMap(console.log)(Maybe('hello world')) // hello world\n" +
      '```\n' +
      '\n' +
      'In addition to monads, `flatMap` is a powerful option when working with transducers as well. A flatMapping transducer is like a mapping transducer except all items of the reducing operation are additionally flattened into the result.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const powers = number => [number, number ** 2, number ** 3]\n' +
      '\n' +
      'const oddPowers = pipe([\n' +
      '  filter(isOdd),\n' +
      '  flatMap(powers),\n' +
      '])\n' +
      '\n' +
      'console.log(\n' +
      '  transform(oddPowers, [])([1, 2, 3, 4, 5]),\n' +
      ') // [1, 1, 1, 3, 9, 27, 5, 25, 125]\n' +
      '\n' +
      'const asyncPowers = async number => [number, number ** 2, number ** 3]\n' +
      '\n' +
      'const asyncOddPowers = pipe([\n' +
      '  filter(isOdd),\n' +
      '  flatMap(asyncPowers),\n' +
      '])\n' +
      '\n' +
      'transform(asyncOddPowers, [])([1, 2, 3, 4, 5]).then(console.log)\n' +
      '// [1, 1, 1, 3, 9, 27, 5, 25, 125]\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'DuplexStream = { read: function, write: function }\n' +
            'Monad = Array|String|Set\n' +
            '  |TypedArray|DuplexStream|Iterator|AsyncIterator\n' +
            '  |{ chain: function }|{ flatMap: function }|Object\n' +
            'Foldable = Iterable|AsyncIterable|{ reduce: function }\n' +
            'Reducer<T> = (any, T)=>Promise|any\n' +
            '\n' +
            'flatMap<T>(\n' +
            '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
            ')(value Monad<T>) -> result Monad\n' +
            '\n' +
            'flatMap<T>(\n' +
            '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
            ')(value GeneratorFunction<T>|AsyncGeneratorFunction<T>)\n' +
            '  -> flatMappingGeneratorFunction GeneratorFunction<T>|AsyncGeneratorFunction<T>\n' +
            '\n' +
            'flatMap<T>(\n' +
            '  flatMapper T=>Promise|Monad|Foldable|any,\n' +
            ')(value Reducer<T>) -> flatMappingReducer Reducer',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 21, column: 4, offset: 692 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 22, column: 1, offset: 693 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Apply a function to each item of a collection, flattening any resulting collection. The result is always the same type as the input value with all items mapped and flattened. The following outlines behavior for various collections.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 232, offset: 231 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 232, offset: 231 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Array',
                      position: {
                        start: { line: 3, column: 5, offset: 237 },
                        end: { line: 3, column: 12, offset: 244 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - map items then flatten results into a new ',
                      position: {
                        start: { line: 3, column: 12, offset: 244 },
                        end: { line: 3, column: 57, offset: 289 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Array',
                      position: {
                        start: { line: 3, column: 57, offset: 289 },
                        end: { line: 3, column: 64, offset: 296 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 3, column: 5, offset: 237 },
                    end: { line: 3, column: 64, offset: 296 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 3, column: 1, offset: 233 },
                end: { line: 3, column: 64, offset: 296 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'String|string',
                      position: {
                        start: { line: 4, column: 5, offset: 301 },
                        end: { line: 4, column: 20, offset: 316 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - map items then flatten (',
                      position: {
                        start: { line: 4, column: 20, offset: 316 },
                        end: { line: 4, column: 47, offset: 343 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '+',
                      position: {
                        start: { line: 4, column: 47, offset: 343 },
                        end: { line: 4, column: 50, offset: 346 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ') results into a new ',
                      position: {
                        start: { line: 4, column: 50, offset: 346 },
                        end: { line: 4, column: 71, offset: 367 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'string',
                      position: {
                        start: { line: 4, column: 71, offset: 367 },
                        end: { line: 4, column: 79, offset: 375 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 4, column: 5, offset: 301 },
                    end: { line: 4, column: 79, offset: 375 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 4, column: 1, offset: 297 },
                end: { line: 4, column: 79, offset: 375 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Set',
                      position: {
                        start: { line: 5, column: 5, offset: 380 },
                        end: { line: 5, column: 10, offset: 385 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - map items then flatten results into a new ',
                      position: {
                        start: { line: 5, column: 10, offset: 385 },
                        end: { line: 5, column: 55, offset: 430 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Set',
                      position: {
                        start: { line: 5, column: 55, offset: 430 },
                        end: { line: 5, column: 60, offset: 435 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 5, column: 5, offset: 380 },
                    end: { line: 5, column: 60, offset: 435 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 5, column: 1, offset: 376 },
                end: { line: 5, column: 60, offset: 435 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'TypedArray',
                      position: {
                        start: { line: 6, column: 5, offset: 440 },
                        end: { line: 6, column: 17, offset: 452 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - map items then flatten results into a new ',
                      position: {
                        start: { line: 6, column: 17, offset: 452 },
                        end: { line: 6, column: 62, offset: 497 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'TypedArray',
                      position: {
                        start: { line: 6, column: 62, offset: 497 },
                        end: { line: 6, column: 74, offset: 509 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 6, column: 5, offset: 440 },
                    end: { line: 6, column: 74, offset: 509 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 6, column: 1, offset: 436 },
                end: { line: 6, column: 74, offset: 509 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Buffer (Node.js)',
                      position: {
                        start: { line: 7, column: 5, offset: 514 },
                        end: { line: 7, column: 23, offset: 532 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - map items then flatten results into a new ',
                      position: {
                        start: { line: 7, column: 23, offset: 532 },
                        end: { line: 7, column: 68, offset: 577 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Buffer',
                      position: {
                        start: { line: 7, column: 68, offset: 577 },
                        end: { line: 7, column: 76, offset: 585 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 7, column: 5, offset: 514 },
                    end: { line: 7, column: 76, offset: 585 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 7, column: 1, offset: 510 },
                end: { line: 7, column: 76, offset: 585 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'stream.Duplex (Node.js)',
                      position: {
                        start: { line: 8, column: 5, offset: 590 },
                        end: { line: 8, column: 30, offset: 615 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: " - map over stream items by async iteration, then call stream's ",
                      position: {
                        start: { line: 8, column: 30, offset: 615 },
                        end: { line: 8, column: 94, offset: 679 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.write',
                      position: {
                        start: { line: 8, column: 94, offset: 679 },
                        end: { line: 8, column: 102, offset: 687 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' to flatten',
                      position: {
                        start: { line: 8, column: 102, offset: 687 },
                        end: { line: 8, column: 113, offset: 698 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 8, column: 5, offset: 590 },
                    end: { line: 8, column: 113, offset: 698 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 8, column: 1, offset: 586 },
                end: { line: 8, column: 113, offset: 698 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: '{ chain: function }',
                      position: {
                        start: { line: 9, column: 5, offset: 703 },
                        end: { line: 9, column: 26, offset: 724 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ', i.e. object that implements ',
                      position: {
                        start: { line: 9, column: 26, offset: 724 },
                        end: { line: 9, column: 56, offset: 754 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.chain',
                      position: {
                        start: { line: 9, column: 56, offset: 754 },
                        end: { line: 9, column: 64, offset: 762 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - this function is called directly',
                      position: {
                        start: { line: 9, column: 64, offset: 762 },
                        end: { line: 9, column: 99, offset: 797 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 9, column: 5, offset: 703 },
                    end: { line: 9, column: 99, offset: 797 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 9, column: 1, offset: 699 },
                end: { line: 9, column: 99, offset: 797 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: '{ flatMap: function }',
                      position: {
                        start: { line: 10, column: 5, offset: 802 },
                        end: { line: 10, column: 28, offset: 825 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ', i.e. object that implements ',
                      position: {
                        start: { line: 10, column: 28, offset: 825 },
                        end: { line: 10, column: 58, offset: 855 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.flatMap',
                      position: {
                        start: { line: 10, column: 58, offset: 855 },
                        end: { line: 10, column: 68, offset: 865 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - this function is called directly',
                      position: {
                        start: { line: 10, column: 68, offset: 865 },
                        end: { line: 10, column: 103, offset: 900 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 10, column: 5, offset: 802 },
                    end: { line: 10, column: 103, offset: 900 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 10, column: 1, offset: 798 },
                end: { line: 10, column: 103, offset: 900 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Object',
                      position: {
                        start: { line: 11, column: 5, offset: 905 },
                        end: { line: 11, column: 13, offset: 913 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - a plain Object, values are mapped then flattened into result by ',
                      position: {
                        start: { line: 11, column: 13, offset: 913 },
                        end: { line: 11, column: 80, offset: 980 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'Object.assign',
                      position: {
                        start: { line: 11, column: 80, offset: 980 },
                        end: { line: 11, column: 95, offset: 995 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 11, column: 5, offset: 905 },
                    end: { line: 11, column: 95, offset: 995 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 11, column: 1, offset: 901 },
                end: { line: 11, column: 95, offset: 995 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'inlineCode',
                      value: 'Reducer',
                      position: {
                        start: { line: 12, column: 5, offset: 1000 },
                        end: { line: 12, column: 14, offset: 1009 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - a function to be used in a reducing operation. Items of a flatMapped reducing operation are mapped then flattened into the aggregate',
                      position: {
                        start: { line: 12, column: 14, offset: 1009 },
                        end: { line: 12, column: 149, offset: 1144 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 12, column: 5, offset: 1000 },
                    end: { line: 12, column: 149, offset: 1144 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 12, column: 1, offset: 996 },
                end: { line: 12, column: 149, offset: 1144 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 233 },
            end: { line: 12, column: 149, offset: 1144 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'On arrays, map the flatMapper function with concurrent asynchronous execution, then flatten the result one depth.',
              position: {
                start: { line: 14, column: 1, offset: 1146 },
                end: { line: 14, column: 114, offset: 1259 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 1, offset: 1146 },
            end: { line: 14, column: 114, offset: 1259 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const duplicate = number => [number, number]\n' +
            '\n' +
            'console.log(\n' +
            '  flatMap(duplicate)([1, 2, 3, 4, 5]),\n' +
            ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
            '\n' +
            'const asyncDuplicate = async number => [number, number]\n' +
            '\n' +
            'flatMap(asyncDuplicate)( // concurrent execution\n' +
            '  [1, 2, 3, 4, 5]).then(console.log) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]',
          position: {
            start: { line: 16, column: 1, offset: 1261 },
            end: { line: 27, column: 4, offset: 1603 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
              1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Collections returned by the flatMapper are flattened into the result by type-specific iteration and concatenation, while async iterables are muxed. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items. This behavior is useful for working with asynchronous streams, e.g. of DOM events or requests.',
              position: {
                start: { line: 29, column: 1, offset: 1605 },
                end: { line: 29, column: 432, offset: 2036 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 1605 },
            end: { line: 29, column: 432, offset: 2036 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
            '\n' +
            'const repeat3 = function* (message) {\n' +
            '  yield message; yield message; yield message\n' +
            '}\n' +
            '\n' +
            'console.log( // sync is concatenated\n' +
            "  flatMap(repeat3)(['foo', 'bar', 'baz']),\n" +
            ") // ['foo', 'foo', 'foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']\n" +
            '\n' +
            'const asyncRepeat3 = async function* (message) {\n' +
            '  yield message\n' +
            '  await sleep(100)\n' +
            '  yield message\n' +
            '  await sleep(1000)\n' +
            '  yield message\n' +
            '}\n' +
            '\n' +
            'flatMap(asyncRepeat3)( // async is muxed\n' +
            "  ['foo', 'bar', 'baz']).then(console.log)\n" +
            "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']",
          position: {
            start: { line: 31, column: 1, offset: 2038 },
            end: { line: 53, column: 4, offset: 2664 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Upon flatMapper execution, flatten any collection return into the result.',
              position: {
                start: { line: 55, column: 1, offset: 2666 },
                end: { line: 55, column: 74, offset: 2739 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 55, column: 1, offset: 2666 },
            end: { line: 55, column: 74, offset: 2739 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Iterable - items are concatenated into the result',
                      position: {
                        start: { line: 57, column: 5, offset: 2745 },
                        end: { line: 57, column: 54, offset: 2794 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 57, column: 5, offset: 2745 },
                    end: { line: 57, column: 54, offset: 2794 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 57, column: 1, offset: 2741 },
                end: { line: 57, column: 54, offset: 2794 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Iterator/Generator - items are concatenated into the result. Source is consumed.',
                      position: {
                        start: { line: 58, column: 5, offset: 2799 },
                        end: { line: 58, column: 85, offset: 2879 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 58, column: 5, offset: 2799 },
                    end: { line: 58, column: 85, offset: 2879 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 58, column: 1, offset: 2795 },
                end: { line: 58, column: 85, offset: 2879 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Object that implements ',
                      position: {
                        start: { line: 59, column: 5, offset: 2884 },
                        end: { line: 59, column: 28, offset: 2907 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.reduce',
                      position: {
                        start: { line: 59, column: 28, offset: 2907 },
                        end: { line: 59, column: 37, offset: 2916 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - this function is called directly for flattening',
                      position: {
                        start: { line: 59, column: 37, offset: 2916 },
                        end: { line: 59, column: 87, offset: 2966 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 5, offset: 2884 },
                    end: { line: 59, column: 87, offset: 2966 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 59, column: 1, offset: 2880 },
                end: { line: 59, column: 87, offset: 2966 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Object that implements ',
                      position: {
                        start: { line: 60, column: 5, offset: 2971 },
                        end: { line: 60, column: 28, offset: 2994 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.chain',
                      position: {
                        start: { line: 60, column: 28, offset: 2994 },
                        end: { line: 60, column: 36, offset: 3002 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' or ',
                      position: {
                        start: { line: 60, column: 36, offset: 3002 },
                        end: { line: 60, column: 40, offset: 3006 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '.flatMap',
                      position: {
                        start: { line: 60, column: 40, offset: 3006 },
                        end: { line: 60, column: 50, offset: 3016 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - either of these is called directly to flatten',
                      position: {
                        start: { line: 60, column: 50, offset: 3016 },
                        end: { line: 60, column: 98, offset: 3064 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 60, column: 5, offset: 2971 },
                    end: { line: 60, column: 98, offset: 3064 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 60, column: 1, offset: 2967 },
                end: { line: 60, column: 98, offset: 3064 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'any other Object - values are flattened',
                      position: {
                        start: { line: 61, column: 5, offset: 3069 },
                        end: { line: 61, column: 44, offset: 3108 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 61, column: 5, offset: 3069 },
                    end: { line: 61, column: 44, offset: 3108 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 61, column: 1, offset: 3065 },
                end: { line: 61, column: 44, offset: 3108 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'AsyncIterable - items are muxed by asynchronous resolution',
                      position: {
                        start: { line: 62, column: 5, offset: 3113 },
                        end: { line: 62, column: 63, offset: 3171 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 62, column: 5, offset: 3113 },
                    end: { line: 62, column: 63, offset: 3171 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 62, column: 1, offset: 3109 },
                end: { line: 62, column: 63, offset: 3171 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'AsyncIterator/AsyncGenerator - items are muxed by asynchronous resolution. Source is consumed.',
                      position: {
                        start: { line: 63, column: 5, offset: 3176 },
                        end: { line: 63, column: 99, offset: 3270 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 63, column: 5, offset: 3176 },
                    end: { line: 63, column: 99, offset: 3270 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 63, column: 1, offset: 3172 },
                end: { line: 63, column: 99, offset: 3270 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 57, column: 1, offset: 2741 },
            end: { line: 63, column: 99, offset: 3270 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'All other types are left in the result as they are.',
              position: {
                start: { line: 65, column: 1, offset: 3272 },
                end: { line: 65, column: 52, offset: 3323 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 65, column: 1, offset: 3272 },
            end: { line: 65, column: 52, offset: 3323 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const identity = value => value\n' +
            '\n' +
            'flatMap(identity)([\n' +
            '  [1, 1],\n' +
            '  new Set([2, 2]),\n' +
            '  (function* () { yield 3; yield 3 })(),\n' +
            '  (async function* () { yield 4; yield 4 })(),\n' +
            '  { a: 5, b: 5 },\n' +
            '  6,\n' +
            '  Promise.resolve(7),\n' +
            '  new Uint8Array([8]),\n' +
            ']).then(console.log)\n' +
            '// [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4]',
          position: {
            start: { line: 67, column: 1, offset: 3325 },
            end: { line: 81, column: 4, offset: 3654 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Purer functional programming is possible with flatMap operation on monads. A monad could be any object that implements ',
              position: {
                start: { line: 83, column: 1, offset: 3656 },
                end: { line: 83, column: 120, offset: 3775 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.chain',
              position: {
                start: { line: 83, column: 120, offset: 3775 },
                end: { line: 83, column: 128, offset: 3783 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' or ',
              position: {
                start: { line: 83, column: 128, offset: 3783 },
                end: { line: 83, column: 132, offset: 3787 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.flatMap',
              position: {
                start: { line: 83, column: 132, offset: 3787 },
                end: { line: 83, column: 142, offset: 3797 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ". When a flatMapping operation encounters a monad, it calls the monad's ",
              position: {
                start: { line: 83, column: 142, offset: 3797 },
                end: { line: 83, column: 214, offset: 3869 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.chain',
              position: {
                start: { line: 83, column: 214, offset: 3869 },
                end: { line: 83, column: 222, offset: 3877 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' method directly to flatten.',
              position: {
                start: { line: 83, column: 222, offset: 3877 },
                end: { line: 83, column: 250, offset: 3905 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 83, column: 1, offset: 3656 },
            end: { line: 83, column: 250, offset: 3905 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const Maybe = value => ({\n' +
            '  chain(flatMapper) {\n' +
            '    return value == null ? value : flatMapper(value)\n' +
            '  },\n' +
            '})\n' +
            '\n' +
            'flatMap(console.log)(Maybe(null))\n' +
            '\n' +
            "flatMap(console.log)(Maybe('hello world')) // hello world",
          position: {
            start: { line: 85, column: 1, offset: 3907 },
            end: { line: 95, column: 4, offset: 4140 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'In addition to monads, ',
              position: {
                start: { line: 97, column: 1, offset: 4142 },
                end: { line: 97, column: 24, offset: 4165 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'flatMap',
              position: {
                start: { line: 97, column: 24, offset: 4165 },
                end: { line: 97, column: 33, offset: 4174 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is a powerful option when working with transducers as well. A flatMapping transducer is like a mapping transducer except all items of the reducing operation are additionally flattened into the result.',
              position: {
                start: { line: 97, column: 33, offset: 4174 },
                end: { line: 97, column: 234, offset: 4375 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 4142 },
            end: { line: 97, column: 234, offset: 4375 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const powers = number => [number, number ** 2, number ** 3]\n' +
            '\n' +
            'const oddPowers = pipe([\n' +
            '  filter(isOdd),\n' +
            '  flatMap(powers),\n' +
            '])\n' +
            '\n' +
            'console.log(\n' +
            '  transform(oddPowers, [])([1, 2, 3, 4, 5]),\n' +
            ') // [1, 1, 1, 3, 9, 27, 5, 25, 125]\n' +
            '\n' +
            'const asyncPowers = async number => [number, number ** 2, number ** 3]\n' +
            '\n' +
            'const asyncOddPowers = pipe([\n' +
            '  filter(isOdd),\n' +
            '  flatMap(asyncPowers),\n' +
            '])\n' +
            '\n' +
            'transform(asyncOddPowers, [])([1, 2, 3, 4, 5]).then(console.log)\n' +
            '// [1, 1, 1, 3, 9, 27, 5, 25, 125]',
          position: {
            start: { line: 99, column: 1, offset: 4377 },
            end: { line: 122, column: 4, offset: 4917 },
            indent: [
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 123, column: 1, offset: 4918 }
      }
    }
  },
  {
    name: 'get',
    synopsis: '```coffeescript [specscript]\n' +
      'get(\n' +
      '  path string|Array|any,\n' +
      '  defaultValue (object=>any)|any?,\n' +
      ')(object) -> result any\n' +
      '```\n',
    description: 'Access properties on objects. `get(property)` creates a function that, when supplied an object, returns the value on the object associated with `property`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  get('hello')({ hello: 'world' }),\n" +
      ') // world\n' +
      '```\n' +
      '\n' +
      '`get` accepts a default value to return if the property is not found. This default value may be a resolver of such value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  get('hello', 'default')({ foo: 'bar' }),\n" +
      ') // default\n' +
      '\n' +
      'console.log(\n' +
      "  get('hello', object => object.foo)({ foo: 'bar' }),\n" +
      ') // bar\n' +
      '```\n' +
      '\n' +
      'At times it is necessary to access nested properties. `get` supports nested property access for the following `path` patterns.\n' +
      '\n' +
      ' * a dot delimited string\n' +
      ' * bracket notation property access\n' +
      ' * an array of string keys or number indices\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const nestedABC0 = { a: { b: { c: ['hello'] } } }\n" +
      '\n' +
      'console.log(\n' +
      "  get('a.b.c[0]')(nestedABC0),\n" +
      ') // hello\n' +
      '\n' +
      "const nested00000 = [[[[['foo']]]]]\n" +
      '\n' +
      'console.log(\n' +
      "  get('0.0.0.0.0')(nested00000),\n" +
      ') // foo\n' +
      '\n' +
      'console.log(\n' +
      "  get('[0][0][0][0][0]')(nested00000),\n" +
      ') // foo\n' +
      '\n' +
      'console.log(\n' +
      '  get([0, 0, 0, 0, 0])(nested00000),\n' +
      ') // foo\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'get(\n' +
            '  path string|Array|any,\n' +
            '  defaultValue (object=>any)|any?,\n' +
            ')(object) -> result any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 121 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 122 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Access properties on objects. ',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 31, offset: 30 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'get(property)',
              position: {
                start: { line: 1, column: 31, offset: 30 },
                end: { line: 1, column: 46, offset: 45 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' creates a function that, when supplied an object, returns the value on the object associated with ',
              position: {
                start: { line: 1, column: 46, offset: 45 },
                end: { line: 1, column: 145, offset: 144 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'property',
              position: {
                start: { line: 1, column: 145, offset: 144 },
                end: { line: 1, column: 155, offset: 154 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 1, column: 155, offset: 154 },
                end: { line: 1, column: 156, offset: 155 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 156, offset: 155 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "console.log(\n  get('hello')({ hello: 'world' }),\n) // world",
          position: {
            start: { line: 3, column: 1, offset: 157 },
            end: { line: 7, column: 4, offset: 247 },
            indent: [ 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'get',
              position: {
                start: { line: 9, column: 1, offset: 249 },
                end: { line: 9, column: 6, offset: 254 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' accepts a default value to return if the property is not found. This default value may be a resolver of such value.',
              position: {
                start: { line: 9, column: 6, offset: 254 },
                end: { line: 9, column: 122, offset: 370 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 249 },
            end: { line: 9, column: 122, offset: 370 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            "  get('hello', 'default')({ foo: 'bar' }),\n" +
            ') // default\n' +
            '\n' +
            'console.log(\n' +
            "  get('hello', object => object.foo)({ foo: 'bar' }),\n" +
            ') // bar',
          position: {
            start: { line: 11, column: 1, offset: 372 },
            end: { line: 19, column: 4, offset: 548 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'At times it is necessary to access nested properties. ',
              position: {
                start: { line: 21, column: 1, offset: 550 },
                end: { line: 21, column: 55, offset: 604 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'get',
              position: {
                start: { line: 21, column: 55, offset: 604 },
                end: { line: 21, column: 60, offset: 609 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' supports nested property access for the following ',
              position: {
                start: { line: 21, column: 60, offset: 609 },
                end: { line: 21, column: 111, offset: 660 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'path',
              position: {
                start: { line: 21, column: 111, offset: 660 },
                end: { line: 21, column: 117, offset: 666 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' patterns.',
              position: {
                start: { line: 21, column: 117, offset: 666 },
                end: { line: 21, column: 127, offset: 676 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 550 },
            end: { line: 21, column: 127, offset: 676 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'a dot delimited string',
                      position: {
                        start: { line: 23, column: 4, offset: 681 },
                        end: { line: 23, column: 26, offset: 703 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 4, offset: 681 },
                    end: { line: 23, column: 26, offset: 703 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 23, column: 1, offset: 678 },
                end: { line: 23, column: 26, offset: 703 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'bracket notation property access',
                      position: {
                        start: { line: 24, column: 4, offset: 707 },
                        end: { line: 24, column: 36, offset: 739 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 24, column: 4, offset: 707 },
                    end: { line: 24, column: 36, offset: 739 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 24, column: 1, offset: 704 },
                end: { line: 24, column: 36, offset: 739 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'an array of string keys or number indices',
                      position: {
                        start: { line: 25, column: 4, offset: 743 },
                        end: { line: 25, column: 45, offset: 784 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 743 },
                    end: { line: 25, column: 45, offset: 784 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 25, column: 1, offset: 740 },
                end: { line: 25, column: 45, offset: 784 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 23, column: 1, offset: 678 },
            end: { line: 25, column: 45, offset: 784 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "const nestedABC0 = { a: { b: { c: ['hello'] } } }\n" +
            '\n' +
            'console.log(\n' +
            "  get('a.b.c[0]')(nestedABC0),\n" +
            ') // hello\n' +
            '\n' +
            "const nested00000 = [[[[['foo']]]]]\n" +
            '\n' +
            'console.log(\n' +
            "  get('0.0.0.0.0')(nested00000),\n" +
            ') // foo\n' +
            '\n' +
            'console.log(\n' +
            "  get('[0][0][0][0][0]')(nested00000),\n" +
            ') // foo\n' +
            '\n' +
            'console.log(\n' +
            '  get([0, 0, 0, 0, 0])(nested00000),\n' +
            ') // foo',
          position: {
            start: { line: 27, column: 1, offset: 786 },
            end: { line: 47, column: 4, offset: 1137 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 48, column: 1, offset: 1138 }
      }
    }
  },
  {
    name: 'pick',
    synopsis: '```coffeescript [specscript]\n' +
      'pick<T>(Array<string>)(source Object<T>) -> picked Object<T>\n' +
      '```\n',
    description: 'Create a new object by including specific keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  pick(['hello', 'world'])({ goodbye: 1, world: 2 }),\n" +
      ') // { world: 2 }\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'pick<T>(Array<string>)(source Object<T>) -> picked Object<T>',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 4, offset: 93 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 94 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Create a new object by including specific keys.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 48, offset: 47 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 48, offset: 47 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            "  pick(['hello', 'world'])({ goodbye: 1, world: 2 }),\n" +
            ') // { world: 2 }',
          position: {
            start: { line: 3, column: 1, offset: 49 },
            end: { line: 7, column: 4, offset: 164 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 165 }
      }
    }
  },
  {
    name: 'omit',
    synopsis: '```coffeescript [specscript]\n' +
      'omit<T>(Array<string>)(source Object<T>) -> omitted Object<T>\n' +
      '```\n',
    description: 'Create a new object by excluding specific keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
      ") // { name: 'George' }\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'omit<T>(Array<string>)(source Object<T>) -> omitted Object<T>',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 4, offset: 94 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 95 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Create a new object by excluding specific keys.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 48, offset: 47 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 48, offset: 47 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n' +
            "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
            ") // { name: 'George' }",
          position: {
            start: { line: 3, column: 1, offset: 49 },
            end: { line: 7, column: 4, offset: 163 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 164 }
      }
    }
  },
  {
    name: 'any',
    synopsis: '```coffeescript [specscript]\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
      '  |{ reduce: (any, T)=>any }|Object<T>\n' +
      '\n' +
      'any<T>(\n' +
      '  predicate T=>Promise|boolean\n' +
      ')(value Foldable<T>) -> anyTruthyByPredicate Promise|boolean\n' +
      '```\n',
    description: 'Test a predicate concurrently across all items of a collection, returning true if any predication is truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  any(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The predicate may return a Promise, while the value may be an asynchronous stream.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const toTodosUrl = id => 'https://jsonplaceholder.typicode.com/todos/' + id\n" +
      '\n' +
      'const fetchedToJson = fetched => fetched.json()\n' +
      '\n' +
      'const fetchTodo = pipe([\n' +
      '  toTodosUrl,\n' +
      '  fetch,\n' +
      '  fetchedToJson,\n' +
      '])\n' +
      '\n' +
      'const todoIDsGenerator = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'any(pipe([\n' +
      '  fetchTodo,\n' +
      "  todo => todo.title.startsWith('fugiat'),\n" +
      ']))(todoIDsGenerator()).then(console.log) // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
            '  |{ reduce: (any, T)=>any }|Object<T>\n' +
            '\n' +
            'any<T>(\n' +
            '  predicate T=>Promise|boolean\n' +
            ')(value Foldable<T>) -> anyTruthyByPredicate Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 8, column: 4, offset: 215 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 1, offset: 216 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test a predicate concurrently across all items of a collection, returning true if any predication is truthy.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 109, offset: 108 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 109, offset: 108 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'console.log(\n' +
            '  any(isOdd)([1, 2, 3, 4, 5]),\n' +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 110 },
            end: { line: 9, column: 4, offset: 235 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'The predicate may return a Promise, while the value may be an asynchronous stream.',
              position: {
                start: { line: 11, column: 1, offset: 237 },
                end: { line: 11, column: 83, offset: 319 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 237 },
            end: { line: 11, column: 83, offset: 319 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "const toTodosUrl = id => 'https://jsonplaceholder.typicode.com/todos/' + id\n" +
            '\n' +
            'const fetchedToJson = fetched => fetched.json()\n' +
            '\n' +
            'const fetchTodo = pipe([\n' +
            '  toTodosUrl,\n' +
            '  fetch,\n' +
            '  fetchedToJson,\n' +
            '])\n' +
            '\n' +
            'const todoIDsGenerator = async function* () {\n' +
            '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
            '}\n' +
            '\n' +
            'any(pipe([\n' +
            '  fetchTodo,\n' +
            "  todo => todo.title.startsWith('fugiat'),\n" +
            ']))(todoIDsGenerator()).then(console.log) // true',
          position: {
            start: { line: 13, column: 1, offset: 321 },
            end: { line: 32, column: 4, offset: 758 },
            indent: [
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 33, column: 1, offset: 759 }
      }
    }
  },
  {
    name: 'all',
    synopsis: '```coffeescript [specscript]\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
      '  |{ reduce: (any, T)=>any }|Object<T>\n' +
      '\n' +
      'all<T>(\n' +
      '  predicate T=>Promise|boolean,\n' +
      ')(value Foldable<T>) -> allTruthyByPredicate Promise|boolean\n' +
      '```\n',
    description: 'Test a predicate concurrently across all items of a collection, returning true if all predications are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  all(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  all(isOdd)([1, 3, 5]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The predicate may return a Promise, while the value may be an asynchronous stream.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncNumbers = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'all(async number => number < 6)(asyncNumbers()).then(console.log) // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
            '  |{ reduce: (any, T)=>any }|Object<T>\n' +
            '\n' +
            'all<T>(\n' +
            '  predicate T=>Promise|boolean,\n' +
            ')(value Foldable<T>) -> allTruthyByPredicate Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 8, column: 4, offset: 216 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 1, offset: 217 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test a predicate concurrently across all items of a collection, returning true if all predications are truthy.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 111, offset: 110 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 111, offset: 110 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'console.log(\n' +
            '  all(isOdd)([1, 2, 3, 4, 5]),\n' +
            ') // false\n' +
            '\n' +
            'console.log(\n' +
            '  all(isOdd)([1, 3, 5]),\n' +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 112 },
            end: { line: 13, column: 4, offset: 287 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'The predicate may return a Promise, while the value may be an asynchronous stream.',
              position: {
                start: { line: 15, column: 1, offset: 289 },
                end: { line: 15, column: 83, offset: 371 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 15, column: 1, offset: 289 },
            end: { line: 15, column: 83, offset: 371 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const asyncNumbers = async function* () {\n' +
            '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
            '}\n' +
            '\n' +
            'all(async number => number < 6)(asyncNumbers()).then(console.log) // true',
          position: {
            start: { line: 17, column: 1, offset: 373 },
            end: { line: 23, column: 4, offset: 568 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 24, column: 1, offset: 569 }
      }
    }
  },
  {
    name: 'not',
    synopsis: '```coffeescript [specscript]\n' +
      'not(\n' +
      '  predicate ...any=>Promise|boolean,\n' +
      ') -> invertedPredicate ...any=>Promise|boolean\n' +
      '```\n',
    description: 'Logically invert a predicate (`!`) by always logically inverting its return value. Predicate may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  not(isOdd)(3),\n' +
      ') // false\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'not(\n' +
            '  predicate ...any=>Promise|boolean,\n' +
            ') -> invertedPredicate ...any=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 121 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 122 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Logically invert a predicate (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 31, offset: 30 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '!',
              position: {
                start: { line: 1, column: 31, offset: 30 },
                end: { line: 1, column: 34, offset: 33 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') by always logically inverting its return value. Predicate may be asynchronous.',
              position: {
                start: { line: 1, column: 34, offset: 33 },
                end: { line: 1, column: 114, offset: 113 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 114, offset: 113 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'console.log(\n' +
            '  not(isOdd)(3),\n' +
            ') // false',
          position: {
            start: { line: 3, column: 1, offset: 115 },
            end: { line: 9, column: 4, offset: 227 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 228 }
      }
    }
  },
  {
    name: 'not.sync',
    synopsis: '```coffeescript [specscript]\n' +
      'not.sync(func ...any=>boolean) -> logicallyInverted ...any=>boolean\n' +
      '```\n',
    description: 'Logically invert a function without promise handling.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  not.sync(isOdd)(2),\n' +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'not.sync(func ...any=>boolean) -> logicallyInverted ...any=>boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 4, offset: 100 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 101 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Logically invert a function without promise handling.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 54, offset: 53 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 54, offset: 53 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'console.log(\n  not.sync(isOdd)(2),\n) // true',
          position: {
            start: { line: 3, column: 1, offset: 55 },
            end: { line: 7, column: 4, offset: 130 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 131 }
      }
    }
  },
  {
    name: 'and',
    synopsis: '```coffeescript [specscript]\n' +
      'and(\n' +
      '  predicates Array<value=>Promise|boolean>\n' +
      ')(value any) -> allTruthy Promise|boolean\n' +
      '```\n',
    description: 'Test an array of predicates concurrently against a single input, returning true if all are truthy. Predicates may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const isPositive = number => number > 0\n' +
      '\n' +
      'const isLessThan3 = number => number < 3\n' +
      '\n' +
      'console.log(\n' +
      '  and([isOdd, isPositive, isLessThan3])(1),\n' +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'and(\n' +
            '  predicates Array<value=>Promise|boolean>\n' +
            ')(value any) -> allTruthy Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 122 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 123 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test an array of predicates concurrently against a single input, returning true if all are truthy. Predicates may be asynchronous.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 131, offset: 130 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 131, offset: 130 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const isPositive = number => number > 0\n' +
            '\n' +
            'const isLessThan3 = number => number < 3\n' +
            '\n' +
            'console.log(\n' +
            '  and([isOdd, isPositive, isLessThan3])(1),\n' +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 132 },
            end: { line: 13, column: 4, offset: 353 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 14, column: 1, offset: 354 }
      }
    }
  },
  {
    name: 'or',
    synopsis: '```coffeescript [specscript]\n' +
      'or(\n' +
      '  predicates Array<value=>Promise|boolean>\n' +
      ')(value any) -> anyTruthy Promise|boolean\n' +
      '```\n',
    description: 'Test an array of predicates concurrently against a single input, returning true if any of them test truthy. Predicates may be asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const isEven = number => number % 2 == 0\n' +
      '\n' +
      'console.log(\n' +
      '  or([isOdd, isEven])(0),\n' +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'or(\n' +
            '  predicates Array<value=>Promise|boolean>\n' +
            ')(value any) -> anyTruthy Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 4, offset: 121 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 122 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test an array of predicates concurrently against a single input, returning true if any of them test truthy. Predicates may be asynchronous.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 140, offset: 139 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 140, offset: 139 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'const isEven = number => number % 2 == 0\n' +
            '\n' +
            'console.log(\n' +
            '  or([isOdd, isEven])(0),\n' +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 141 },
            end: { line: 11, column: 4, offset: 303 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 304 }
      }
    }
  },
  {
    name: 'eq',
    synopsis: '```coffeescript [specscript]\n' +
      'eq(\n' +
      '  left (any=>Promise|boolean)|any,\n' +
      '  right (any=>Promise|boolean)|any,\n' +
      ') -> strictEqualBy (value any)=>Promise|boolean\n' +
      '```\n',
    description: 'Test for strict equality (`===`) between two values. Either parameter may be an asynchronous resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const personIsGeorge = eq(person => person.name, 'George')\n" +
      '\n' +
      'console.log(\n' +
      "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'eq(\n' +
            '  left (any=>Promise|boolean)|any,\n' +
            '  right (any=>Promise|boolean)|any,\n' +
            ') -> strictEqualBy (value any)=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 155 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 156 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for strict equality (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 27, offset: 26 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '===',
              position: {
                start: { line: 1, column: 27, offset: 26 },
                end: { line: 1, column: 32, offset: 31 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') between two values. Either parameter may be an asynchronous resolver.',
              position: {
                start: { line: 1, column: 32, offset: 31 },
                end: { line: 1, column: 103, offset: 102 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 103, offset: 102 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "const personIsGeorge = eq(person => person.name, 'George')\n" +
            '\n' +
            'console.log(\n' +
            "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 104 },
            end: { line: 9, column: 4, offset: 273 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 274 }
      }
    }
  },
  {
    name: 'gt',
    synopsis: '```coffeescript [specscript]\n' +
      'gt(\n' +
      '  left (any=>Promise|boolean)|any,\n' +
      '  right (any=>Promise|boolean)|any,\n' +
      ')(value any) -> greaterThanBy(value any)=>Promise|boolean\n' +
      '```\n',
    description: 'Test for left value greater than (`>`) right value. Either parameter may be an asynchronous resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOfLegalAge = gt(21, person => person.age)\n' +
      '\n' +
      'const juvenile = { age: 16 }\n' +
      '\n' +
      'console.log(isOfLegalAge(juvenile)) // false\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'gt(\n' +
            '  left (any=>Promise|boolean)|any,\n' +
            '  right (any=>Promise|boolean)|any,\n' +
            ')(value any) -> greaterThanBy(value any)=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 165 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 166 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for left value greater than (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 35, offset: 34 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '>',
              position: {
                start: { line: 1, column: 35, offset: 34 },
                end: { line: 1, column: 38, offset: 37 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') right value. Either parameter may be an asynchronous resolver.',
              position: {
                start: { line: 1, column: 38, offset: 37 },
                end: { line: 1, column: 102, offset: 101 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 102, offset: 101 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOfLegalAge = gt(21, person => person.age)\n' +
            '\n' +
            'const juvenile = { age: 16 }\n' +
            '\n' +
            'console.log(isOfLegalAge(juvenile)) // false',
          position: {
            start: { line: 3, column: 1, offset: 103 },
            end: { line: 9, column: 4, offset: 259 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 260 }
      }
    }
  },
  {
    name: 'lt',
    synopsis: '```coffeescript [specscript]\n' +
      'lt(\n' +
      '  left (any=>Promise|boolean)|any,\n' +
      '  right (any=>Promise|boolean)|any,\n' +
      ')(value any) -> lessThanBy(value any)=>Promise|boolean\n' +
      '```\n',
    description: 'Test for left value less than (`<`) right value. Either parameter may be an asynchronous resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThan3 = lt(identity, 3)\n' +
      '\n' +
      'console.log(isLessThan3(1), true)\n' +
      'console.log(isLessThan3(3), false)\n' +
      'console.log(isLessThan3(5), false)\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'lt(\n' +
            '  left (any=>Promise|boolean)|any,\n' +
            '  right (any=>Promise|boolean)|any,\n' +
            ')(value any) -> lessThanBy(value any)=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 162 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 163 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for left value less than (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 32, offset: 31 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '<',
              position: {
                start: { line: 1, column: 32, offset: 31 },
                end: { line: 1, column: 35, offset: 34 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') right value. Either parameter may be an asynchronous resolver.',
              position: {
                start: { line: 1, column: 35, offset: 34 },
                end: { line: 1, column: 99, offset: 98 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 99, offset: 98 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const identity = value => value\n' +
            '\n' +
            'const isLessThan3 = lt(identity, 3)\n' +
            '\n' +
            'console.log(isLessThan3(1), true)\n' +
            'console.log(isLessThan3(3), false)\n' +
            'console.log(isLessThan3(5), false)',
          position: {
            start: { line: 3, column: 1, offset: 100 },
            end: { line: 11, column: 4, offset: 304 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 305 }
      }
    }
  },
  {
    name: 'gte',
    synopsis: '```coffeescript [specscript]\n' +
      'gte(\n' +
      '  left (any=>Promise|boolean)|any,\n' +
      '  right (any=>Promise|boolean)|any,\n' +
      ')(value any) -> greaterThanOrEqualToBy(value any)=>Promise|boolean\n' +
      '```\n',
    description: 'Test for left value greater than or equal to (`>=`) right value. Either parameter may be an asynchronous resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isAtLeast100 = gte(identity, 100)\n' +
      '\n' +
      'console.log(isAtLeast100(99)) // false\n' +
      'console.log(isAtLeast100(100)) // true\n' +
      'console.log(isAtLeast100(101)) // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'gte(\n' +
            '  left (any=>Promise|boolean)|any,\n' +
            '  right (any=>Promise|boolean)|any,\n' +
            ')(value any) -> greaterThanOrEqualToBy(value any)=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 175 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 176 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for left value greater than or equal to (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 47, offset: 46 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '>=',
              position: {
                start: { line: 1, column: 47, offset: 46 },
                end: { line: 1, column: 51, offset: 50 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') right value. Either parameter may be an asynchronous resolver.',
              position: {
                start: { line: 1, column: 51, offset: 50 },
                end: { line: 1, column: 115, offset: 114 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 115, offset: 114 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const identity = value => value\n' +
            '\n' +
            'const isAtLeast100 = gte(identity, 100)\n' +
            '\n' +
            'console.log(isAtLeast100(99)) // false\n' +
            'console.log(isAtLeast100(100)) // true\n' +
            'console.log(isAtLeast100(101)) // true',
          position: {
            start: { line: 3, column: 1, offset: 116 },
            end: { line: 11, column: 4, offset: 337 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 338 }
      }
    }
  },
  {
    name: 'lte',
    synopsis: '```coffeescript [specscript]\n' +
      'lte(\n' +
      '  left (any=>Promise|boolean)|any,\n' +
      '  right (any=>Promise|boolean)|any,\n' +
      ')(value any) -> lessThanBy(value any)=>Promise|boolean\n' +
      '```\n',
    description: 'Test for left value less than or equal to (`<=`) right value. Either parameter may be an asynchronous resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThanOrEqualTo3 = lte(identity, 3)\n' +
      '\n' +
      'console.log(isLessThanOrEqualTo3(1), true)\n' +
      'console.log(isLessThanOrEqualTo3(3), true)\n' +
      'console.log(isLessThanOrEqualTo3(5), false)\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'lte(\n' +
            '  left (any=>Promise|boolean)|any,\n' +
            '  right (any=>Promise|boolean)|any,\n' +
            ')(value any) -> lessThanBy(value any)=>Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 163 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 164 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for left value less than or equal to (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 44, offset: 43 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '<=',
              position: {
                start: { line: 1, column: 44, offset: 43 },
                end: { line: 1, column: 48, offset: 47 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') right value. Either parameter may be an asynchronous resolver.',
              position: {
                start: { line: 1, column: 48, offset: 47 },
                end: { line: 1, column: 112, offset: 111 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 112, offset: 111 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const identity = value => value\n' +
            '\n' +
            'const isLessThanOrEqualTo3 = lte(identity, 3)\n' +
            '\n' +
            'console.log(isLessThanOrEqualTo3(1), true)\n' +
            'console.log(isLessThanOrEqualTo3(3), true)\n' +
            'console.log(isLessThanOrEqualTo3(5), false)',
          position: {
            start: { line: 3, column: 1, offset: 113 },
            end: { line: 11, column: 4, offset: 353 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 354 }
      }
    }
  },
  {
    name: 'heapUsedInLoop',
    synopsis: 'heapUsedInLoop(\n' +
      '  desc string,\n' +
      '  loopCount number,\n' +
      '  func (loop number)=>any\n' +
      ') -> ()\n',
    description: '**heapUsedInLoop** is a memory usage measurement function. Supply `description`, `loopCount`, and a function `func` for that function to be run `loopCount` times, finally logging average and max heap used per loop in terms of megabytes MiB.\n' +
      '\n' +
      '```javascript\n' +
      "heapUsedInLoop('my-description', 1e5, function () {\n" +
      '  return 1 + 1\n' +
      '}) /*\n' +
      '0 5.88 MiB\n' +
      '1 5.92 MiB\n' +
      '...\n' +
      '99997 7.34 MiB\n' +
      '99998 7.34 MiB\n' +
      '99999 7.35 MiB\n' +
      'my-description: 1e+5: {\n' +
      '  "max": "7.15 MiB",\n' +
      '  "avg": "5.50 MiB"\n' +
      '}\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'heapUsedInLoop(\n' +
                '  desc string,\n' +
                '  loopCount number,\n' +
                '  func (loop number)=>any\n' +
                ') -> ()',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 5, column: 8, offset: 84 },
                indent: [ 1, 1, 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 5, column: 8, offset: 84 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 85 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'heapUsedInLoop',
                  position: {
                    start: { line: 1, column: 3, offset: 2 },
                    end: { line: 1, column: 17, offset: 16 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 19, offset: 18 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is a memory usage measurement function. Supply ',
              position: {
                start: { line: 1, column: 19, offset: 18 },
                end: { line: 1, column: 67, offset: 66 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'description',
              position: {
                start: { line: 1, column: 67, offset: 66 },
                end: { line: 1, column: 80, offset: 79 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', ',
              position: {
                start: { line: 1, column: 80, offset: 79 },
                end: { line: 1, column: 82, offset: 81 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'loopCount',
              position: {
                start: { line: 1, column: 82, offset: 81 },
                end: { line: 1, column: 93, offset: 92 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', and a function ',
              position: {
                start: { line: 1, column: 93, offset: 92 },
                end: { line: 1, column: 110, offset: 109 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'func',
              position: {
                start: { line: 1, column: 110, offset: 109 },
                end: { line: 1, column: 116, offset: 115 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' for that function to be run ',
              position: {
                start: { line: 1, column: 116, offset: 115 },
                end: { line: 1, column: 145, offset: 144 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'loopCount',
              position: {
                start: { line: 1, column: 145, offset: 144 },
                end: { line: 1, column: 156, offset: 155 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' times, finally logging average and max heap used per loop in terms of megabytes MiB.',
              position: {
                start: { line: 1, column: 156, offset: 155 },
                end: { line: 1, column: 241, offset: 240 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 241, offset: 240 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: "heapUsedInLoop('my-description', 1e5, function () {\n" +
            '  return 1 + 1\n' +
            '}) /*\n' +
            '0 5.88 MiB\n' +
            '1 5.92 MiB\n' +
            '...\n' +
            '99997 7.34 MiB\n' +
            '99998 7.34 MiB\n' +
            '99999 7.35 MiB\n' +
            'my-description: 1e+5: {\n' +
            '  "max": "7.15 MiB",\n' +
            '  "avg": "5.50 MiB"\n' +
            '}',
          position: {
            start: { line: 3, column: 1, offset: 242 },
            end: { line: 17, column: 4, offset: 470 },
            indent: [
              1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1,
              1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 18, column: 1, offset: 471 }
      }
    }
  },
  {
    name: 'size',
    synopsis: 'size(value String|Array|Object|Set|Map) -> number\n',
    description: '`size` accepts a String, Array, Object, Set, or Map and returns its current size in items as a number.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'size(value String|Array|Object|Set|Map) -> number',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 50, offset: 49 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 50, offset: 49 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 50 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'size',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 7, offset: 6 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' accepts a String, Array, Object, Set, or Map and returns its current size in items as a number.',
              position: {
                start: { line: 1, column: 7, offset: 6 },
                end: { line: 1, column: 103, offset: 102 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 103, offset: 102 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 103 }
      }
    }
  },
  {
    name: 'trace',
    synopsis: 'any -> T\n' +
      '\n' +
      'trace(\n' +
      '  reducer (any, ...any)=>Promise|any\n' +
      ') -> tracingReducer (any, ...any)=>Promise|any,\n' +
      '\n' +
      'trace(point !function, ...restArgs) -> point\n',
    description: 'Log a value out to the console, returning the value. If the value is a function, treat is as a resolver and log lazily.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      '  trace,\n' +
      '  trace(value => value.toUpperCase()),\n' +
      "])('hey') // hey\n" +
      '          // HEY\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'any -> T',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 9, offset: 8 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 9, offset: 8 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'trace(\n' +
                '  reducer (any, ...any)=>Promise|any\n' +
                ') -> tracingReducer (any, ...any)=>Promise|any,',
              position: {
                start: { line: 3, column: 1, offset: 10 },
                end: { line: 5, column: 48, offset: 101 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 10 },
            end: { line: 5, column: 48, offset: 101 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'trace(point !function, ...restArgs) -> point',
              position: {
                start: { line: 7, column: 1, offset: 103 },
                end: { line: 7, column: 45, offset: 147 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 103 },
            end: { line: 7, column: 45, offset: 147 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 148 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Log a value out to the console, returning the value. If the value is a function, treat is as a resolver and log lazily.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 120, offset: 119 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 120, offset: 119 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'pipe([\n' +
            '  trace,\n' +
            '  trace(value => value.toUpperCase()),\n' +
            "])('hey') // hey\n" +
            '          // HEY',
          position: {
            start: { line: 3, column: 1, offset: 121 },
            end: { line: 9, column: 4, offset: 240 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 241 }
      }
    }
  },
  {
    name: 'unionWith',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>unionWith(\n' +
      '  predicate (T, T)=>Promise<boolean>|boolean,\n' +
      ')(values Array<Sequence<T>|T>|T) -> result Promise<Array<T>>|Array<T>\n' +
      '\n' +
      '<T any>unionWith(\n' +
      '  predicate (T, T)=>Promise<boolean>|boolean,\n' +
      ')(values Set<Sequence<T>|T>|T) -> result Promise<Set<T>>|Set<T>\n' +
      '\n' +
      '<T any>unionWith(\n' +
      '  predicate (T, T)=>boolean,\n' +
      ')(values SyncSequence<SyncSequence<T>|T>|T) -> result Iterator<T>\n' +
      '\n' +
      '<T any>unionWith(\n' +
      '  predicate (T, T)=>Promise<boolean>|boolean,\n' +
      ')(values Sequence<Sequence<T>|T>|T) -> result AsyncIterator<T>\n',
    description: "`unionWith` accepts a binary function `predicate` and any Sequence `values` and returns a flattened collection with all sub items `T` of the Sequence `values` uniq'd by `predicate`. The binary function `predicate` takes two arguments that represent two given sub items `T` and returns an expression that evaluates to true if those two given sub items are the same. A Sequence of values can be an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction. The possible return values of `unionWith` are:\n" +
      ' * Array - for Array `values`\n' +
      ' * Set - for Set `values`\n' +
      ' * Iterator - for Iterables beyond Array and Set, such as GeneratorFunctions\n' +
      ' * AsyncIterator - for AsyncIterables and AsyncGeneratorFunctions\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                'SyncSequence|AsyncSequence -> Sequence',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 39, offset: 135 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 39, offset: 135 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 5, column: 1, offset: 137 },
                end: { line: 5, column: 8, offset: 144 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'unionWith(\n  predicate (T, T)=>Promise',
              position: {
                start: { line: 5, column: 8, offset: 144 },
                end: { line: 6, column: 28, offset: 182 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<boolean>',
              position: {
                start: { line: 6, column: 28, offset: 182 },
                end: { line: 6, column: 37, offset: 191 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|boolean,\n)(values Array<Sequence',
              position: {
                start: { line: 6, column: 37, offset: 191 },
                end: { line: 7, column: 24, offset: 224 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 24, offset: 224 },
                end: { line: 7, column: 27, offset: 227 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T) -> result Promise<Array',
              position: {
                start: { line: 7, column: 27, offset: 227 },
                end: { line: 7, column: 57, offset: 257 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 57, offset: 257 },
                end: { line: 7, column: 60, offset: 260 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '>|Array',
              position: {
                start: { line: 7, column: 60, offset: 260 },
                end: { line: 7, column: 67, offset: 267 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 67, offset: 267 },
                end: { line: 7, column: 70, offset: 270 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 7, column: 70, offset: 270 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 9, column: 1, offset: 272 },
                end: { line: 9, column: 8, offset: 279 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'unionWith(\n  predicate (T, T)=>Promise',
              position: {
                start: { line: 9, column: 8, offset: 279 },
                end: { line: 10, column: 28, offset: 317 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<boolean>',
              position: {
                start: { line: 10, column: 28, offset: 317 },
                end: { line: 10, column: 37, offset: 326 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|boolean,\n)(values Set<Sequence',
              position: {
                start: { line: 10, column: 37, offset: 326 },
                end: { line: 11, column: 22, offset: 357 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 22, offset: 357 },
                end: { line: 11, column: 25, offset: 360 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T) -> result Promise<Set',
              position: {
                start: { line: 11, column: 25, offset: 360 },
                end: { line: 11, column: 53, offset: 388 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 53, offset: 388 },
                end: { line: 11, column: 56, offset: 391 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '>|Set',
              position: {
                start: { line: 11, column: 56, offset: 391 },
                end: { line: 11, column: 61, offset: 396 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 61, offset: 396 },
                end: { line: 11, column: 64, offset: 399 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 272 },
            end: { line: 11, column: 64, offset: 399 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 13, column: 1, offset: 401 },
                end: { line: 13, column: 8, offset: 408 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'unionWith(\n' +
                '  predicate (T, T)=>boolean,\n' +
                ')(values SyncSequence<SyncSequence',
              position: {
                start: { line: 13, column: 8, offset: 408 },
                end: { line: 15, column: 35, offset: 482 },
                indent: [ 1, 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 15, column: 35, offset: 482 },
                end: { line: 15, column: 38, offset: 485 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T) -> result Iterator',
              position: {
                start: { line: 15, column: 38, offset: 485 },
                end: { line: 15, column: 63, offset: 510 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 15, column: 63, offset: 510 },
                end: { line: 15, column: 66, offset: 513 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 13, column: 1, offset: 401 },
            end: { line: 15, column: 66, offset: 513 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 17, column: 1, offset: 515 },
                end: { line: 17, column: 8, offset: 522 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'unionWith(\n  predicate (T, T)=>Promise',
              position: {
                start: { line: 17, column: 8, offset: 522 },
                end: { line: 18, column: 28, offset: 560 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<boolean>',
              position: {
                start: { line: 18, column: 28, offset: 560 },
                end: { line: 18, column: 37, offset: 569 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|boolean,\n)(values Sequence<Sequence',
              position: {
                start: { line: 18, column: 37, offset: 569 },
                end: { line: 19, column: 27, offset: 605 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 19, column: 27, offset: 605 },
                end: { line: 19, column: 30, offset: 608 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T) -> result AsyncIterator',
              position: {
                start: { line: 19, column: 30, offset: 608 },
                end: { line: 19, column: 60, offset: 638 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 19, column: 60, offset: 638 },
                end: { line: 19, column: 63, offset: 641 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 17, column: 1, offset: 515 },
            end: { line: 19, column: 63, offset: 641 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 20, column: 1, offset: 642 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'unionWith',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 12, offset: 11 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' accepts a binary function ',
              position: {
                start: { line: 1, column: 12, offset: 11 },
                end: { line: 1, column: 39, offset: 38 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'predicate',
              position: {
                start: { line: 1, column: 39, offset: 38 },
                end: { line: 1, column: 50, offset: 49 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' and any Sequence ',
              position: {
                start: { line: 1, column: 50, offset: 49 },
                end: { line: 1, column: 68, offset: 67 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'values',
              position: {
                start: { line: 1, column: 68, offset: 67 },
                end: { line: 1, column: 76, offset: 75 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' and returns a flattened collection with all sub items ',
              position: {
                start: { line: 1, column: 76, offset: 75 },
                end: { line: 1, column: 131, offset: 130 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'T',
              position: {
                start: { line: 1, column: 131, offset: 130 },
                end: { line: 1, column: 134, offset: 133 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' of the Sequence ',
              position: {
                start: { line: 1, column: 134, offset: 133 },
                end: { line: 1, column: 151, offset: 150 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'values',
              position: {
                start: { line: 1, column: 151, offset: 150 },
                end: { line: 1, column: 159, offset: 158 },
                indent: []
              }
            },
            {
              type: 'text',
              value: " uniq'd by ",
              position: {
                start: { line: 1, column: 159, offset: 158 },
                end: { line: 1, column: 170, offset: 169 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'predicate',
              position: {
                start: { line: 1, column: 170, offset: 169 },
                end: { line: 1, column: 181, offset: 180 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '. The binary function ',
              position: {
                start: { line: 1, column: 181, offset: 180 },
                end: { line: 1, column: 203, offset: 202 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'predicate',
              position: {
                start: { line: 1, column: 203, offset: 202 },
                end: { line: 1, column: 214, offset: 213 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' takes two arguments that represent two given sub items ',
              position: {
                start: { line: 1, column: 214, offset: 213 },
                end: { line: 1, column: 270, offset: 269 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'T',
              position: {
                start: { line: 1, column: 270, offset: 269 },
                end: { line: 1, column: 273, offset: 272 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' and returns an expression that evaluates to true if those two given sub items are the same. A Sequence of values can be an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction. The possible return values of ',
              position: {
                start: { line: 1, column: 273, offset: 272 },
                end: { line: 1, column: 498, offset: 497 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'unionWith',
              position: {
                start: { line: 1, column: 498, offset: 497 },
                end: { line: 1, column: 509, offset: 508 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' are:',
              position: {
                start: { line: 1, column: 509, offset: 508 },
                end: { line: 1, column: 514, offset: 513 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 514, offset: 513 },
            indent: []
          }
        },
        {
          type: 'list',
          ordered: false,
          start: null,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Array - for Array ',
                      position: {
                        start: { line: 2, column: 4, offset: 517 },
                        end: { line: 2, column: 22, offset: 535 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'values',
                      position: {
                        start: { line: 2, column: 22, offset: 535 },
                        end: { line: 2, column: 30, offset: 543 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 2, column: 4, offset: 517 },
                    end: { line: 2, column: 30, offset: 543 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 2, column: 1, offset: 514 },
                end: { line: 2, column: 30, offset: 543 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Set - for Set ',
                      position: {
                        start: { line: 3, column: 4, offset: 547 },
                        end: { line: 3, column: 18, offset: 561 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'values',
                      position: {
                        start: { line: 3, column: 18, offset: 561 },
                        end: { line: 3, column: 26, offset: 569 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 3, column: 4, offset: 547 },
                    end: { line: 3, column: 26, offset: 569 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 3, column: 1, offset: 544 },
                end: { line: 3, column: 26, offset: 569 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Iterator - for Iterables beyond Array and Set, such as GeneratorFunctions',
                      position: {
                        start: { line: 4, column: 4, offset: 573 },
                        end: { line: 4, column: 77, offset: 646 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 4, column: 4, offset: 573 },
                    end: { line: 4, column: 77, offset: 646 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 4, column: 1, offset: 570 },
                end: { line: 4, column: 77, offset: 646 },
                indent: []
              }
            },
            {
              type: 'listItem',
              spread: false,
              checked: null,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'AsyncIterator - for AsyncIterables and AsyncGeneratorFunctions',
                      position: {
                        start: { line: 5, column: 4, offset: 650 },
                        end: { line: 5, column: 66, offset: 712 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 5, column: 4, offset: 650 },
                    end: { line: 5, column: 66, offset: 712 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 5, column: 1, offset: 647 },
                end: { line: 5, column: 66, offset: 712 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 2, column: 1, offset: 514 },
            end: { line: 5, column: 66, offset: 712 },
            indent: [ 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 713 }
      }
    }
  },
  {
    name: 'uniq',
    synopsis: '<T any>uniq(arr Array<T>) -> uniqArr Array<T>\n',
    description: '`uniq` takes an Array of items and returns an Array of items containing only the unique items of that Array.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 8, offset: 7 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'uniq(arr Array',
              position: {
                start: { line: 1, column: 8, offset: 7 },
                end: { line: 1, column: 22, offset: 21 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 22, offset: 21 },
                end: { line: 1, column: 25, offset: 24 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') -> uniqArr Array',
              position: {
                start: { line: 1, column: 25, offset: 24 },
                end: { line: 1, column: 43, offset: 42 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 43, offset: 42 },
                end: { line: 1, column: 46, offset: 45 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 46, offset: 45 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 46 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'inlineCode',
              value: 'uniq',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 7, offset: 6 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' takes an Array of items and returns an Array of items containing only the unique items of that Array.',
              position: {
                start: { line: 1, column: 7, offset: 6 },
                end: { line: 1, column: 109, offset: 108 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 109, offset: 108 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 109 }
      }
    }
  },
  {
    name: 'BrokenPromise',
    synopsis: 'new BrokenPromise() -> BrokenPromise {}\n',
    description: 'A **BrokenPromise** is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.\n' +
      '\n' +
      '```javascript\n' +
      'new BrokenPromise() // a new BrokenPromise instance\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'new BrokenPromise() -> BrokenPromise {}',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 40, offset: 39 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 40, offset: 39 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 40 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A ',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 3, offset: 2 },
                indent: []
              }
            },
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'BrokenPromise',
                  position: {
                    start: { line: 1, column: 5, offset: 4 },
                    end: { line: 1, column: 18, offset: 17 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 1, column: 3, offset: 2 },
                end: { line: 1, column: 20, offset: 19 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.',
              position: {
                start: { line: 1, column: 20, offset: 19 },
                end: { line: 1, column: 126, offset: 125 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 126, offset: 125 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: 'new BrokenPromise() // a new BrokenPromise instance',
          position: {
            start: { line: 3, column: 1, offset: 127 },
            end: { line: 5, column: 4, offset: 196 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 197 }
      }
    }
  },
  {
    name: 'BrokenPromise.prototype.then',
    synopsis: 'new BrokenPromise().then(unreachableResolver function)\n',
    description: '**BrokenPromise.prototype.then** registers a Promise `.then` resolver function with the internal infinite promise. In that sense, the resolver function _technically_ never gets called. However, it is possible to manually fire the provided `unreachableResolver` with `BrokenPromise.prototype.resolve`.\n' +
      '\n' +
      '```javascript\n' +
      "new BrokenPromise().then(() => console.log('unreachable'))\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'new BrokenPromise().then(unreachableResolver function)',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 55, offset: 54 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 55, offset: 54 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 55 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'BrokenPromise.prototype.then',
                  position: {
                    start: { line: 1, column: 3, offset: 2 },
                    end: { line: 1, column: 31, offset: 30 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 33, offset: 32 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' registers a Promise ',
              position: {
                start: { line: 1, column: 33, offset: 32 },
                end: { line: 1, column: 54, offset: 53 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.then',
              position: {
                start: { line: 1, column: 54, offset: 53 },
                end: { line: 1, column: 61, offset: 60 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' resolver function with the internal infinite promise. In that sense, the resolver function ',
              position: {
                start: { line: 1, column: 61, offset: 60 },
                end: { line: 1, column: 153, offset: 152 },
                indent: []
              }
            },
            {
              type: 'emphasis',
              children: [
                {
                  type: 'text',
                  value: 'technically',
                  position: {
                    start: { line: 1, column: 154, offset: 153 },
                    end: { line: 1, column: 165, offset: 164 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 1, column: 153, offset: 152 },
                end: { line: 1, column: 166, offset: 165 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' never gets called. However, it is possible to manually fire the provided ',
              position: {
                start: { line: 1, column: 166, offset: 165 },
                end: { line: 1, column: 240, offset: 239 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'unreachableResolver',
              position: {
                start: { line: 1, column: 240, offset: 239 },
                end: { line: 1, column: 261, offset: 260 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with ',
              position: {
                start: { line: 1, column: 261, offset: 260 },
                end: { line: 1, column: 267, offset: 266 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'BrokenPromise.prototype.resolve',
              position: {
                start: { line: 1, column: 267, offset: 266 },
                end: { line: 1, column: 300, offset: 299 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 1, column: 300, offset: 299 },
                end: { line: 1, column: 301, offset: 300 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 301, offset: 300 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: "new BrokenPromise().then(() => console.log('unreachable'))",
          position: {
            start: { line: 3, column: 1, offset: 302 },
            end: { line: 5, column: 4, offset: 378 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 379 }
      }
    }
  },
  {
    name: 'Cancellable',
    synopsis: 'Promise { cancel: any=>() } -> CancellablePromise\n' +
      '\n' +
      'Cancellable(\n' +
      '  func ...any=>Promise|any,\n' +
      ') -> cancellablePromiseFactory ...any=>CancellablePromise|any\n',
    description: '**Cancellable** wraps an async function to apply an effect such that all Promises returned by the wrapped async function are cancellable via the `.cancel` method.\n' +
      '\n' +
      '```javascript\n' +
      'const createInfinitePromise = () => Promise.race([])\n' +
      '\n' +
      'const createCancellablePromise = Cancellable(createInfinitePromise)\n' +
      '\n' +
      'const cancellablePromise = createCancellablePromise()\n' +
      '\n' +
      "cancellablePromise.cancel(new Error('cancelled')).catch(\n" +
      '  err => console.error(err)) // Error: cancelled\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Promise { cancel: any=>() } -> CancellablePromise',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 50, offset: 49 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 50, offset: 49 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Cancellable(\n' +
                '  func ...any=>Promise|any,\n' +
                ') -> cancellablePromiseFactory ...any=>CancellablePromise|any',
              position: {
                start: { line: 3, column: 1, offset: 51 },
                end: { line: 5, column: 62, offset: 153 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 51 },
            end: { line: 5, column: 62, offset: 153 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 154 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'strong',
              children: [
                {
                  type: 'text',
                  value: 'Cancellable',
                  position: {
                    start: { line: 1, column: 3, offset: 2 },
                    end: { line: 1, column: 14, offset: 13 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 16, offset: 15 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' wraps an async function to apply an effect such that all Promises returned by the wrapped async function are cancellable via the ',
              position: {
                start: { line: 1, column: 16, offset: 15 },
                end: { line: 1, column: 146, offset: 145 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '.cancel',
              position: {
                start: { line: 1, column: 146, offset: 145 },
                end: { line: 1, column: 155, offset: 154 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' method.',
              position: {
                start: { line: 1, column: 155, offset: 154 },
                end: { line: 1, column: 163, offset: 162 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 163, offset: 162 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: null,
          value: 'const createInfinitePromise = () => Promise.race([])\n' +
            '\n' +
            'const createCancellablePromise = Cancellable(createInfinitePromise)\n' +
            '\n' +
            'const cancellablePromise = createCancellablePromise()\n' +
            '\n' +
            "cancellablePromise.cancel(new Error('cancelled')).catch(\n" +
            '  err => console.error(err)) // Error: cancelled',
          position: {
            start: { line: 3, column: 1, offset: 164 },
            end: { line: 12, column: 4, offset: 465 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 13, column: 1, offset: 466 }
      }
    }
  },
  {
    name: 'Mux.isSequence',
    synopsis: 'Mux.isSequence(x any) -> boolean\n',
    description: 'Mux.isSequence takes anything and returns a Boolean value. Mux.isSequence returns true if the value is an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.isSequence(x any) -> boolean',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 33, offset: 32 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 33, offset: 32 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 33 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.isSequence takes anything and returns a Boolean value. Mux.isSequence returns true if the value is an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 177, offset: 176 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 177, offset: 176 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 177 }
      }
    }
  },
  {
    name: '\nMux.zip',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.zip(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<Array<T|undefined>>\n' +
      '\n' +
      '<T any>Mux.zip(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<Array<T|undefined>>\n',
    description: 'Mux.zip takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields an Array of items of each supplied Sequence for a given iteration. If any Sequence supplied to Mux.zip is AsyncIterable or an AsyncGeneratorFunction, Mux.zip outputs an AsyncIterator. The Iterator or AsyncIterator will iterate as long as the longest iterator of the supplied Sequences; shorter iterators will yield undefined until the longest iterator is consumed.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                'SyncSequence|AsyncSequence -> Sequence',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 39, offset: 135 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 39, offset: 135 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 5, column: 1, offset: 137 },
                end: { line: 5, column: 8, offset: 144 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.zip(\n  x SyncSequence<SyncSequence',
              position: {
                start: { line: 5, column: 8, offset: 144 },
                end: { line: 6, column: 30, offset: 182 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 6, column: 30, offset: 182 },
                end: { line: 6, column: 33, offset: 185 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> Iterator<Array<T|undefined>>',
              position: {
                start: { line: 6, column: 33, offset: 185 },
                end: { line: 7, column: 34, offset: 225 },
                indent: [ 1 ]
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 7, column: 34, offset: 225 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 9, column: 1, offset: 227 },
                end: { line: 9, column: 8, offset: 234 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.zip(\n  x Sequence<Sequence',
              position: {
                start: { line: 9, column: 8, offset: 234 },
                end: { line: 10, column: 22, offset: 264 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 10, column: 22, offset: 264 },
                end: { line: 10, column: 25, offset: 267 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> AsyncIterator<Array<T|undefined>>',
              position: {
                start: { line: 10, column: 25, offset: 267 },
                end: { line: 11, column: 39, offset: 312 },
                indent: [ 1 ]
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 227 },
            end: { line: 11, column: 39, offset: 312 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 313 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.zip takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields an Array of items of each supplied Sequence for a given iteration. If any Sequence supplied to Mux.zip is AsyncIterable or an AsyncGeneratorFunction, Mux.zip outputs an AsyncIterator. The Iterator or AsyncIterator will iterate as long as the longest iterator of the supplied Sequences; shorter iterators will yield undefined until the longest iterator is consumed.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 484, offset: 483 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 484, offset: 483 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 484 }
      }
    }
  },
  {
    name: 'Mux.concat',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.concat(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.concat(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<T>\n',
    description: 'Mux.concat takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the second item of the first Sequence, and so on until all Sequences have been iterated in order. Non-Sequence Items in the top-level Sequence are yielded as they are.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                'SyncSequence|AsyncSequence -> Sequence',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 39, offset: 135 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 39, offset: 135 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 5, column: 1, offset: 137 },
                end: { line: 5, column: 8, offset: 144 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.concat(\n  x SyncSequence<SyncSequence',
              position: {
                start: { line: 5, column: 8, offset: 144 },
                end: { line: 6, column: 30, offset: 185 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 6, column: 30, offset: 185 },
                end: { line: 6, column: 33, offset: 188 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> Iterator',
              position: {
                start: { line: 6, column: 33, offset: 188 },
                end: { line: 7, column: 14, offset: 208 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 14, offset: 208 },
                end: { line: 7, column: 17, offset: 211 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 7, column: 17, offset: 211 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 9, column: 1, offset: 213 },
                end: { line: 9, column: 8, offset: 220 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.concat(\n  x Sequence<Sequence',
              position: {
                start: { line: 9, column: 8, offset: 220 },
                end: { line: 10, column: 22, offset: 253 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 10, column: 22, offset: 253 },
                end: { line: 10, column: 25, offset: 256 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> AsyncIterator',
              position: {
                start: { line: 10, column: 25, offset: 256 },
                end: { line: 11, column: 19, offset: 281 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 19, offset: 281 },
                end: { line: 11, column: 22, offset: 284 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 213 },
            end: { line: 11, column: 22, offset: 284 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 285 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.concat takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the second item of the first Sequence, and so on until all Sequences have been iterated in order. Non-Sequence Items in the top-level Sequence are yielded as they are.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 392, offset: 391 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 392, offset: 391 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 392 }
      }
    }
  },
  {
    name: 'Mux.switch',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.switch(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.switch(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<T>\n',
    description: 'Mux.switch takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the first item of the second Sequence, and so on until all Sequences have yielded their first item. Then, the first Sequence yields its second item, the second Sequence yields its second item, and so on until all Sequences have finished iterating. Non-Sequence Items in the top-level Sequence are yielded as they are. When a shorter Sequence finishes iterating, the remaining Sequences will switch yielding amongst themselves.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                'SyncSequence|AsyncSequence -> Sequence',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 39, offset: 135 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 39, offset: 135 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 5, column: 1, offset: 137 },
                end: { line: 5, column: 8, offset: 144 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.switch(\n  x SyncSequence<SyncSequence',
              position: {
                start: { line: 5, column: 8, offset: 144 },
                end: { line: 6, column: 30, offset: 185 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 6, column: 30, offset: 185 },
                end: { line: 6, column: 33, offset: 188 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> Iterator',
              position: {
                start: { line: 6, column: 33, offset: 188 },
                end: { line: 7, column: 14, offset: 208 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 14, offset: 208 },
                end: { line: 7, column: 17, offset: 211 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 7, column: 17, offset: 211 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 9, column: 1, offset: 213 },
                end: { line: 9, column: 8, offset: 220 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.switch(\n  x Sequence<Sequence',
              position: {
                start: { line: 9, column: 8, offset: 220 },
                end: { line: 10, column: 22, offset: 253 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 10, column: 22, offset: 253 },
                end: { line: 10, column: 25, offset: 256 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>|T,\n) -> AsyncIterator',
              position: {
                start: { line: 10, column: 25, offset: 256 },
                end: { line: 11, column: 19, offset: 281 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 19, offset: 281 },
                end: { line: 11, column: 22, offset: 284 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 213 },
            end: { line: 11, column: 22, offset: 284 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 285 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.switch takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the first item of the second Sequence, and so on until all Sequences have yielded their first item. Then, the first Sequence yields its second item, the second Sequence yields its second item, and so on until all Sequences have finished iterating. Non-Sequence Items in the top-level Sequence are yielded as they are. When a shorter Sequence finishes iterating, the remaining Sequences will switch yielding amongst themselves.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 651, offset: 650 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 651, offset: 650 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 651 }
      }
    }
  },
  {
    name: 'Mux.race',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.race(\n' +
      '  x SyncSequence<SyncSequence<T>|T>T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.race(\n' +
      '  x Sequence<Sequence<T>|T>T,\n' +
      ') -> AsyncIterator<T>\n',
    description: 'Mux.race takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items are the synchronous items of the top level Sequence, followed by the asynchronous items of any asynchronous sub Sequences. If any sub Sequences are asynchronous, the order of these asynchronous items in the final returned AsyncIterator is determined by the serial asynchronous resolution of the individual asynchronous sub Sequences. If all Sequences are synchronous, Mux.race behaves just as Mux.concat.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                'SyncSequence|AsyncSequence -> Sequence',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 3, column: 39, offset: 135 },
                indent: [ 1, 1 ]
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 3, column: 39, offset: 135 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 5, column: 1, offset: 137 },
                end: { line: 5, column: 8, offset: 144 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.race(\n  x SyncSequence<SyncSequence',
              position: {
                start: { line: 5, column: 8, offset: 144 },
                end: { line: 6, column: 30, offset: 183 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 6, column: 30, offset: 183 },
                end: { line: 6, column: 33, offset: 186 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>T,\n) -> Iterator',
              position: {
                start: { line: 6, column: 33, offset: 186 },
                end: { line: 7, column: 14, offset: 205 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 7, column: 14, offset: 205 },
                end: { line: 7, column: 17, offset: 208 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 7, column: 17, offset: 208 },
            indent: [ 1, 1 ]
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 9, column: 1, offset: 210 },
                end: { line: 9, column: 8, offset: 217 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.race(\n  x Sequence<Sequence',
              position: {
                start: { line: 9, column: 8, offset: 217 },
                end: { line: 10, column: 22, offset: 248 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 10, column: 22, offset: 248 },
                end: { line: 10, column: 25, offset: 251 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>T,\n) -> AsyncIterator',
              position: {
                start: { line: 10, column: 25, offset: 251 },
                end: { line: 11, column: 19, offset: 275 },
                indent: [ 1 ]
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 11, column: 19, offset: 275 },
                end: { line: 11, column: 22, offset: 278 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 210 },
            end: { line: 11, column: 22, offset: 278 },
            indent: [ 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 279 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.race takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items are the synchronous items of the top level Sequence, followed by the asynchronous items of any asynchronous sub Sequences. If any sub Sequences are asynchronous, the order of these asynchronous items in the final returned AsyncIterator is determined by the serial asynchronous resolution of the individual asynchronous sub Sequences. If all Sequences are synchronous, Mux.race behaves just as Mux.concat.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 574, offset: 573 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 574, offset: 573 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 574 }
      }
    }
  },
  {
    name: 'Mux.flatten',
    synopsis: '<T any>Mux.flatten(x Array<Iterable<T>|T>) -> Array<T>\n' +
      '\n' +
      '<T any>Mux.flatten(x Set<Iterable<T>|T>) -> Set<T>\n' +
      '\n' +
      '<T !Array|!Set>Mux.flatten(x T) -> Mux.concat(x)\n',
    description: 'Mux.flatten behaves just as Mux.concat except for cases when passed an Array or Set. When passed an Array, Mux.flatten outputs another Array with all elements of the input Array concatenated. When passed a Set, Mux.flatten outputs another Set in the same regard.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 8, offset: 7 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.flatten(x Array<Iterable',
              position: {
                start: { line: 1, column: 8, offset: 7 },
                end: { line: 1, column: 36, offset: 35 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 36, offset: 35 },
                end: { line: 1, column: 39, offset: 38 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>) -> Array',
              position: {
                start: { line: 1, column: 39, offset: 38 },
                end: { line: 1, column: 52, offset: 51 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 52, offset: 51 },
                end: { line: 1, column: 55, offset: 54 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 55, offset: 54 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 3, column: 1, offset: 56 },
                end: { line: 3, column: 8, offset: 63 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.flatten(x Set<Iterable',
              position: {
                start: { line: 3, column: 8, offset: 63 },
                end: { line: 3, column: 34, offset: 89 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 3, column: 34, offset: 89 },
                end: { line: 3, column: 37, offset: 92 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>) -> Set',
              position: {
                start: { line: 3, column: 37, offset: 92 },
                end: { line: 3, column: 48, offset: 103 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 3, column: 48, offset: 103 },
                end: { line: 3, column: 51, offset: 106 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 56 },
            end: { line: 3, column: 51, offset: 106 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: '<T !Array|!Set>Mux.flatten(x T) -> Mux.concat(x)',
              position: {
                start: { line: 5, column: 1, offset: 108 },
                end: { line: 5, column: 49, offset: 156 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 108 },
            end: { line: 5, column: 49, offset: 156 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 157 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Mux.flatten behaves just as Mux.concat except for cases when passed an Array or Set. When passed an Array, Mux.flatten outputs another Array with all elements of the input Array concatenated. When passed a Set, Mux.flatten outputs another Set in the same regard.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 263, offset: 262 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 263, offset: 262 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 2, column: 1, offset: 263 }
      }
    }
  }
]
