export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'rubico',
              position: {
                start: { line: 1, column: 4, offset: 3 },
                end: { line: 1, column: 10, offset: 9 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 3, offset: 2 },
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
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://raw.githubusercontent.com/a-synchronous/assets/master/rubico-logo.png',
          alt: 'rubico',
          position: {
            start: { line: 2, column: 1, offset: 33 },
            end: { line: 2, column: 89, offset: 121 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 33 },
        end: { line: 2, column: 89, offset: 121 },
        indent: []
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'a shallow river in northeastern Italy, just south of Ravenna',
              position: {
                start: { line: 3, column: 3, offset: 124 },
                end: { line: 3, column: 63, offset: 184 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 124 },
            end: { line: 3, column: 63, offset: 184 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 122 },
        end: { line: 3, column: 63, offset: 184 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 5, column: 1, offset: 186 },
        end: { line: 5, column: 7, offset: 192 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/workflows/Node.js%20CI/badge.svg?branch=master',
          alt: 'Node.js CI',
          position: {
            start: { line: 7, column: 1, offset: 194 },
            end: { line: 7, column: 102, offset: 295 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 7, column: 102, offset: 295 },
            end: { line: 8, column: 1, offset: 296 },
            indent: [ 1 ]
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/a-synchronous/rubico',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/a-synchronous/rubico/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 8, column: 2, offset: 297 },
                end: { line: 8, column: 86, offset: 381 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 296 },
            end: { line: 8, column: 131, offset: 426 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 7, column: 1, offset: 194 },
        end: { line: 8, column: 131, offset: 426 },
        indent: [ 1 ]
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'linkReference',
          identifier: 'a',
          label: 'a',
          referenceType: 'shortcut',
          children: [
            {
              type: 'text',
              value: 'a',
              position: {
                start: { line: 10, column: 6, offset: 433 },
                end: { line: 10, column: 7, offset: 434 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 10, column: 5, offset: 432 },
            end: { line: 10, column: 8, offset: 435 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming',
          position: {
            start: { line: 10, column: 8, offset: 435 },
            end: { line: 10, column: 42, offset: 469 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 428 },
        end: { line: 10, column: 42, offset: 469 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, map, filter } = rubico\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const asyncSquare = async number => number ** 2\n' +
        '\n' +
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(asyncSquare),\n' +
        '])\n' +
        '\n' +
        'squaredOdds([1, 2, 3, 4, 5]).then(console.log) // [1, 9, 25]',
      position: {
        start: { line: 12, column: 1, offset: 471 },
        end: { line: 25, column: 4, offset: 758 },
        indent: [
          1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1,
          1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 27, column: 1, offset: 760 },
            end: { line: 27, column: 23, offset: 782 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 760 },
        end: { line: 27, column: 23, offset: 782 },
        indent: []
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'At a certain point in my career, I grew frustrated with the entanglement of my own code. While looking for something better, I found functional programming. I was excited by the idea of functional composition, but disillusioned by the redundancy of effectful types. I started rubico to capitalize on the prior while rebuking the latter. Many iterations since then, the library has grown into something I personally enjoy using, and continue to use to this day.',
              position: {
                start: { line: 28, column: 3, offset: 785 },
                end: { line: 28, column: 463, offset: 1245 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 28, column: 3, offset: 785 },
            end: { line: 28, column: 463, offset: 1245 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 783 },
        end: { line: 28, column: 463, offset: 1245 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is founded on the following principles:',
          position: {
            start: { line: 30, column: 1, offset: 1247 },
            end: { line: 30, column: 47, offset: 1293 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1247 },
        end: { line: 30, column: 47, offset: 1293 },
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
                  value: 'asynchronous code should be simple',
                  position: {
                    start: { line: 31, column: 4, offset: 1297 },
                    end: { line: 31, column: 38, offset: 1331 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1297 },
                end: { line: 31, column: 38, offset: 1331 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 1294 },
            end: { line: 31, column: 38, offset: 1331 },
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
                  value: 'functional style should not care about async',
                  position: {
                    start: { line: 32, column: 4, offset: 1335 },
                    end: { line: 32, column: 48, offset: 1379 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1335 },
                end: { line: 32, column: 48, offset: 1379 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 32, column: 1, offset: 1332 },
            end: { line: 32, column: 48, offset: 1379 },
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
                  value: 'functional transformations should be composable, performant, and simple to express',
                  position: {
                    start: { line: 33, column: 4, offset: 1383 },
                    end: { line: 33, column: 86, offset: 1465 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1383 },
                end: { line: 33, column: 86, offset: 1465 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1380 },
            end: { line: 33, column: 86, offset: 1465 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1294 },
        end: { line: 33, column: 86, offset: 1465 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 35, column: 1, offset: 1467 },
            end: { line: 35, column: 145, offset: 1611 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 1467 },
        end: { line: 35, column: 145, offset: 1611 },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Introduction',
          position: {
            start: { line: 37, column: 3, offset: 1615 },
            end: { line: 37, column: 15, offset: 1627 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1613 },
        end: { line: 37, column: 15, offset: 1627 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is a module of twenty-four operators for ',
          position: {
            start: { line: 39, column: 1, offset: 1629 },
            end: { line: 39, column: 49, offset: 1677 },
            indent: []
          }
        },
        {
          type: 'linkReference',
          identifier: 'a',
          label: 'a',
          referenceType: 'shortcut',
          children: [
            {
              type: 'text',
              value: 'a',
              position: {
                start: { line: 39, column: 50, offset: 1678 },
                end: { line: 39, column: 51, offset: 1679 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 39, column: 49, offset: 1677 },
            end: { line: 39, column: 52, offset: 1680 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming in JavaScript.',
          position: {
            start: { line: 39, column: 52, offset: 1680 },
            end: { line: 39, column: 101, offset: 1729 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1629 },
        end: { line: 39, column: 101, offset: 1729 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '  pipe, fork, assign,\n' +
        '  tap, tryCatch, switchCase,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  any, all, and, or, not,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  get, pick, omit,\n' +
        '} = rubico',
      position: {
        start: { line: 41, column: 1, offset: 1731 },
        end: { line: 50, column: 4, offset: 1930 },
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
          value: 'These operators act sensibly on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions.',
          position: {
            start: { line: 52, column: 1, offset: 1932 },
            end: { line: 52, column: 149, offset: 2080 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1932 },
        end: { line: 52, column: 149, offset: 2080 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, map } = rubico\n' +
        '\n' +
        "const toTodosUrl = id => 'https://jsonplaceholder.typicode.com/todos/' + id\n" +
        '\n' +
        'const fetchedToJson = fetched => fetched.json()\n' +
        '\n' +
        'const logTodoByID = pipe([ // fetch a Todo and log it\n' +
        '  toTodosUrl,\n' +
        '  fetch,\n' +
        '  fetchedToJson,\n' +
        '  console.log,\n' +
        '])\n' +
        '\n' +
        'const todoIDs = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'map(logTodoByID)(todoIDs) // fetch Todos per id of TodoIDs and log them\n' +
        "// { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
        "// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
        "// { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
        "// { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
        "// { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }",
      position: {
        start: { line: 54, column: 1, offset: 2082 },
        end: { line: 76, column: 4, offset: 2847 },
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
          value: 'For different but semanticaly related functionality, rubico exposes additional methods as property functions. For example,',
          position: {
            start: { line: 78, column: 1, offset: 2849 },
            end: { line: 78, column: 123, offset: 2971 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2849 },
        end: { line: 78, column: 123, offset: 2971 },
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
                  value: 'map',
                  position: {
                    start: { line: 80, column: 4, offset: 2976 },
                    end: { line: 80, column: 9, offset: 2981 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 80, column: 9, offset: 2981 },
                    end: { line: 80, column: 48, offset: 3020 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 80, column: 4, offset: 2976 },
                end: { line: 80, column: 48, offset: 3020 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 80, column: 1, offset: 2973 },
            end: { line: 80, column: 48, offset: 3020 },
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
                  value: 'map.pool',
                  position: {
                    start: { line: 81, column: 4, offset: 3024 },
                    end: { line: 81, column: 14, offset: 3034 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 81, column: 14, offset: 3034 },
                    end: { line: 81, column: 78, offset: 3098 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3024 },
                end: { line: 81, column: 78, offset: 3098 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 3021 },
            end: { line: 81, column: 78, offset: 3098 },
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
                  value: 'map.series',
                  position: {
                    start: { line: 82, column: 4, offset: 3102 },
                    end: { line: 82, column: 16, offset: 3114 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 82, column: 16, offset: 3114 },
                    end: { line: 82, column: 51, offset: 3149 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3102 },
                end: { line: 82, column: 51, offset: 3149 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 82, column: 1, offset: 3099 },
            end: { line: 82, column: 51, offset: 3149 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2973 },
        end: { line: 82, column: 51, offset: 3149 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Advanced functions may be found in ',
          position: {
            start: { line: 84, column: 1, offset: 3151 },
            end: { line: 84, column: 36, offset: 3186 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 84, column: 36, offset: 3186 },
            end: { line: 84, column: 46, offset: 3196 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 84, column: 46, offset: 3196 },
            end: { line: 84, column: 47, offset: 3197 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3151 },
        end: { line: 84, column: 47, offset: 3197 },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Installation',
          position: {
            start: { line: 86, column: 3, offset: 3201 },
            end: { line: 86, column: 15, offset: 3213 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3199 },
        end: { line: 86, column: 15, offset: 3213 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 87, column: 1, offset: 3214 },
            end: { line: 87, column: 6, offset: 3219 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 87, column: 6, offset: 3219 },
            end: { line: 87, column: 11, offset: 3224 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3214 },
        end: { line: 87, column: 11, offset: 3224 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 88, column: 1, offset: 3225 },
        end: { line: 90, column: 4, offset: 3249 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'browser script, global ',
          position: {
            start: { line: 92, column: 1, offset: 3251 },
            end: { line: 92, column: 24, offset: 3274 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 92, column: 24, offset: 3274 },
            end: { line: 92, column: 32, offset: 3282 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3251 },
        end: { line: 92, column: 32, offset: 3282 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/rubico"></script>',
      position: {
        start: { line: 93, column: 1, offset: 3283 },
        end: { line: 95, column: 4, offset: 3343 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'browser module',
          position: {
            start: { line: 97, column: 1, offset: 3345 },
            end: { line: 97, column: 15, offset: 3359 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3345 },
        end: { line: 97, column: 15, offset: 3359 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import rubico from 'https://unpkg.com/rubico/es.js'",
      position: {
        start: { line: 98, column: 1, offset: 3360 },
        end: { line: 100, column: 4, offset: 3429 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'System Requirements',
          position: {
            start: { line: 102, column: 5, offset: 3435 },
            end: { line: 102, column: 24, offset: 3454 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 102, column: 1, offset: 3431 },
        end: { line: 102, column: 24, offset: 3454 },
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
                  value: 'minimum node version: 10.3',
                  position: {
                    start: { line: 103, column: 4, offset: 3458 },
                    end: { line: 103, column: 30, offset: 3484 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 3458 },
                end: { line: 103, column: 30, offset: 3484 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 103, column: 1, offset: 3455 },
            end: { line: 103, column: 30, offset: 3484 },
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
                  value: 'minimum Chrome version: 63',
                  position: {
                    start: { line: 104, column: 4, offset: 3488 },
                    end: { line: 104, column: 30, offset: 3514 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 104, column: 4, offset: 3488 },
                end: { line: 104, column: 30, offset: 3514 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3485 },
            end: { line: 104, column: 30, offset: 3514 },
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
                  value: 'minimum Firefox version: 57',
                  position: {
                    start: { line: 105, column: 4, offset: 3518 },
                    end: { line: 105, column: 31, offset: 3545 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 105, column: 4, offset: 3518 },
                end: { line: 105, column: 31, offset: 3545 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 105, column: 1, offset: 3515 },
            end: { line: 105, column: 31, offset: 3545 },
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
                  value: 'minimum Edge version: 79',
                  position: {
                    start: { line: 106, column: 4, offset: 3549 },
                    end: { line: 106, column: 28, offset: 3573 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 106, column: 4, offset: 3549 },
                end: { line: 106, column: 28, offset: 3573 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3546 },
            end: { line: 106, column: 28, offset: 3573 },
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
                  value: 'minimum Safari version: 11.1',
                  position: {
                    start: { line: 107, column: 4, offset: 3577 },
                    end: { line: 107, column: 32, offset: 3605 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 107, column: 4, offset: 3577 },
                end: { line: 107, column: 32, offset: 3605 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 107, column: 1, offset: 3574 },
            end: { line: 107, column: 32, offset: 3605 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3455 },
        end: { line: 107, column: 32, offset: 3605 },
        indent: [ 1, 1, 1, 1 ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Awesome Resources',
          position: {
            start: { line: 109, column: 3, offset: 3609 },
            end: { line: 109, column: 20, offset: 3626 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 3607 },
        end: { line: 109, column: 20, offset: 3626 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-why-it-s-worth-it-ep1',
                  children: [
                    {
                      type: 'text',
                      value: "Practical Functional Programming in JavaScript - Why it's worth it",
                      position: {
                        start: { line: 110, column: 5, offset: 3631 },
                        end: { line: 110, column: 71, offset: 3697 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 110, column: 4, offset: 3630 },
                    end: { line: 110, column: 167, offset: 3793 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 4, offset: 3630 },
                end: { line: 110, column: 167, offset: 3793 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3627 },
            end: { line: 110, column: 167, offset: 3793 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-data-last-1gjo',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Data last',
                      position: {
                        start: { line: 111, column: 5, offset: 3798 },
                        end: { line: 111, column: 63, offset: 3856 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 111, column: 4, offset: 3797 },
                    end: { line: 111, column: 152, offset: 3945 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 4, offset: 3797 },
                end: { line: 111, column: 152, offset: 3945 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3794 },
            end: { line: 111, column: 152, offset: 3945 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-side-effects-and-purity-revised-420h',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Side Effects and Purity',
                      position: {
                        start: { line: 112, column: 5, offset: 3950 },
                        end: { line: 112, column: 77, offset: 4022 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 112, column: 4, offset: 3949 },
                    end: { line: 112, column: 188, offset: 4133 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 4, offset: 3949 },
                end: { line: 112, column: 188, offset: 4133 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3946 },
            end: { line: 112, column: 188, offset: 4133 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-intro-to-transformation-55hm',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Intro to Transformation',
                      position: {
                        start: { line: 113, column: 5, offset: 4138 },
                        end: { line: 113, column: 77, offset: 4210 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 113, column: 4, offset: 4137 },
                    end: { line: 113, column: 180, offset: 4313 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 4, offset: 4137 },
                end: { line: 113, column: 180, offset: 4313 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 4134 },
            end: { line: 113, column: 180, offset: 4313 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-techniques-for-composing-data-c39',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Techniques for Composing Data',
                      position: {
                        start: { line: 114, column: 5, offset: 4318 },
                        end: { line: 114, column: 83, offset: 4396 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 114, column: 4, offset: 4317 },
                    end: { line: 114, column: 191, offset: 4504 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 4, offset: 4317 },
                end: { line: 114, column: 191, offset: 4504 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 4314 },
            end: { line: 114, column: 191, offset: 4504 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-control-flow-2fim',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Control Flow',
                      position: {
                        start: { line: 115, column: 5, offset: 4509 },
                        end: { line: 115, column: 66, offset: 4570 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 115, column: 4, offset: 4508 },
                    end: { line: 115, column: 158, offset: 4662 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 115, column: 4, offset: 4508 },
                end: { line: 115, column: 158, offset: 4662 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 4505 },
            end: { line: 115, column: 158, offset: 4662 },
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
                  type: 'link',
                  title: null,
                  url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-error-handling-8g5',
                  children: [
                    {
                      type: 'text',
                      value: 'Practical Functional Programming in JavaScript - Error Handling',
                      position: {
                        start: { line: 116, column: 5, offset: 4667 },
                        end: { line: 116, column: 68, offset: 4730 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 116, column: 4, offset: 4666 },
                    end: { line: 116, column: 161, offset: 4823 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 116, column: 4, offset: 4666 },
                end: { line: 116, column: 161, offset: 4823 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 4663 },
            end: { line: 116, column: 161, offset: 4823 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3627 },
        end: { line: 116, column: 161, offset: 4823 },
        indent: [ 1, 1, 1, 1, 1, 1 ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Contributing',
          position: {
            start: { line: 118, column: 3, offset: 4827 },
            end: { line: 118, column: 15, offset: 4839 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4825 },
        end: { line: 118, column: 15, offset: 4839 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please announce on the issue thread that you will work on it.',
          position: {
            start: { line: 119, column: 1, offset: 4840 },
            end: { line: 119, column: 292, offset: 5131 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 4840 },
        end: { line: 119, column: 292, offset: 5131 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 121, column: 1, offset: 5133 },
            end: { line: 121, column: 89, offset: 5221 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/pull/12',
          children: [
            {
              type: 'text',
              value: 'example pull request',
              position: {
                start: { line: 121, column: 90, offset: 5222 },
                end: { line: 121, column: 110, offset: 5242 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 89, offset: 5221 },
            end: { line: 121, column: 160, offset: 5292 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 121, column: 160, offset: 5292 },
            end: { line: 121, column: 205, offset: 5337 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22',
          children: [
            {
              type: 'text',
              value: 'help wanted',
              position: {
                start: { line: 121, column: 206, offset: 5338 },
                end: { line: 121, column: 217, offset: 5349 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 205, offset: 5337 },
            end: { line: 121, column: 315, offset: 5447 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 121, column: 315, offset: 5447 },
            end: { line: 121, column: 345, offset: 5477 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 5133 },
        end: { line: 121, column: 345, offset: 5477 },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'License',
          position: {
            start: { line: 123, column: 3, offset: 5481 },
            end: { line: 123, column: 10, offset: 5488 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 5479 },
        end: { line: 123, column: 10, offset: 5488 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 124, column: 1, offset: 5489 },
            end: { line: 124, column: 11, offset: 5499 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/blob/master/LICENSE',
          children: [
            {
              type: 'text',
              value: 'MIT Licensed',
              position: {
                start: { line: 124, column: 12, offset: 5500 },
                end: { line: 124, column: 24, offset: 5512 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 11, offset: 5499 },
            end: { line: 124, column: 86, offset: 5574 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 124, column: 86, offset: 5574 },
            end: { line: 124, column: 87, offset: 5575 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5489 },
        end: { line: 124, column: 87, offset: 5575 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 125, column: 1, offset: 5576 }
  }
}
