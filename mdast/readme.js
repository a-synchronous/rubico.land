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
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 8, column: 131, offset: 426 },
            end: { line: 9, column: 1, offset: 427 },
            indent: [ 1 ]
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/rubico',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/rubico.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 9, column: 2, offset: 428 },
                end: { line: 9, column: 68, offset: 494 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 427 },
            end: { line: 9, column: 107, offset: 533 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 7, column: 1, offset: 194 },
        end: { line: 9, column: 107, offset: 533 },
        indent: [ 1, 1 ]
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
                start: { line: 11, column: 6, offset: 540 },
                end: { line: 11, column: 7, offset: 541 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 5, offset: 539 },
            end: { line: 11, column: 8, offset: 542 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming',
          position: {
            start: { line: 11, column: 8, offset: 542 },
            end: { line: 11, column: 42, offset: 576 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 535 },
        end: { line: 11, column: 42, offset: 576 },
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
        start: { line: 13, column: 1, offset: 578 },
        end: { line: 26, column: 4, offset: 865 },
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
            start: { line: 28, column: 1, offset: 867 },
            end: { line: 28, column: 23, offset: 889 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 867 },
        end: { line: 28, column: 23, offset: 889 },
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
                start: { line: 29, column: 3, offset: 892 },
                end: { line: 29, column: 463, offset: 1352 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 29, column: 3, offset: 892 },
            end: { line: 29, column: 463, offset: 1352 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 890 },
        end: { line: 29, column: 463, offset: 1352 },
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
            start: { line: 31, column: 1, offset: 1354 },
            end: { line: 31, column: 47, offset: 1400 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1354 },
        end: { line: 31, column: 47, offset: 1400 },
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
                    start: { line: 32, column: 4, offset: 1404 },
                    end: { line: 32, column: 38, offset: 1438 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1404 },
                end: { line: 32, column: 38, offset: 1438 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 32, column: 1, offset: 1401 },
            end: { line: 32, column: 38, offset: 1438 },
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
                    start: { line: 33, column: 4, offset: 1442 },
                    end: { line: 33, column: 48, offset: 1486 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1442 },
                end: { line: 33, column: 48, offset: 1486 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1439 },
            end: { line: 33, column: 48, offset: 1486 },
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
                    start: { line: 34, column: 4, offset: 1490 },
                    end: { line: 34, column: 86, offset: 1572 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1490 },
                end: { line: 34, column: 86, offset: 1572 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 34, column: 1, offset: 1487 },
            end: { line: 34, column: 86, offset: 1572 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1401 },
        end: { line: 34, column: 86, offset: 1572 },
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
            start: { line: 36, column: 1, offset: 1574 },
            end: { line: 36, column: 145, offset: 1718 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1574 },
        end: { line: 36, column: 145, offset: 1718 },
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
            start: { line: 38, column: 3, offset: 1722 },
            end: { line: 38, column: 15, offset: 1734 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1720 },
        end: { line: 38, column: 15, offset: 1734 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is a module of twenty-eight operators for ',
          position: {
            start: { line: 40, column: 1, offset: 1736 },
            end: { line: 40, column: 50, offset: 1785 },
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
                start: { line: 40, column: 51, offset: 1786 },
                end: { line: 40, column: 52, offset: 1787 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 40, column: 50, offset: 1785 },
            end: { line: 40, column: 53, offset: 1788 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming in JavaScript.',
          position: {
            start: { line: 40, column: 53, offset: 1788 },
            end: { line: 40, column: 102, offset: 1837 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1736 },
        end: { line: 40, column: 102, offset: 1837 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '  pipe, tap,\n' +
        '  switchCase, tryCatch,\n' +
        '  fork, assign, get, pick, omit,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  and, or, not, any, all,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  thunkify, always,\n' +
        '  curry, __,\n' +
        '} = rubico',
      position: {
        start: { line: 42, column: 1, offset: 1839 },
        end: { line: 53, column: 4, offset: 2071 },
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
          value: 'These operators act sensibly on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions.',
          position: {
            start: { line: 55, column: 1, offset: 2073 },
            end: { line: 55, column: 149, offset: 2221 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2073 },
        end: { line: 55, column: 149, offset: 2221 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, map } = rubico\n' +
        '\n' +
        'const toTodosUrl = id => `https://jsonplaceholder.typicode.com/todos/${id}`\n' +
        '\n' +
        'const logTodoByID = pipe([ // fetch a Todo and log it\n' +
        '  toTodosUrl,\n' +
        '  fetch,\n' +
        '  response => response.json(),\n' +
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
        start: { line: 57, column: 1, offset: 2223 },
        end: { line: 77, column: 4, offset: 2953 },
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
          type: 'text',
          value: 'For different but semanticaly related functionality, rubico exposes additional methods as property functions. For example,',
          position: {
            start: { line: 79, column: 1, offset: 2955 },
            end: { line: 79, column: 123, offset: 3077 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2955 },
        end: { line: 79, column: 123, offset: 3077 },
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
                    start: { line: 81, column: 4, offset: 3082 },
                    end: { line: 81, column: 9, offset: 3087 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 81, column: 9, offset: 3087 },
                    end: { line: 81, column: 48, offset: 3126 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3082 },
                end: { line: 81, column: 48, offset: 3126 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 3079 },
            end: { line: 81, column: 48, offset: 3126 },
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
                    start: { line: 82, column: 4, offset: 3130 },
                    end: { line: 82, column: 14, offset: 3140 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 82, column: 14, offset: 3140 },
                    end: { line: 82, column: 78, offset: 3204 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3130 },
                end: { line: 82, column: 78, offset: 3204 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 82, column: 1, offset: 3127 },
            end: { line: 82, column: 78, offset: 3204 },
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
                    start: { line: 83, column: 4, offset: 3208 },
                    end: { line: 83, column: 16, offset: 3220 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 83, column: 16, offset: 3220 },
                    end: { line: 83, column: 51, offset: 3255 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 3208 },
                end: { line: 83, column: 51, offset: 3255 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 83, column: 1, offset: 3205 },
            end: { line: 83, column: 51, offset: 3255 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 3079 },
        end: { line: 83, column: 51, offset: 3255 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced functions, please visit ',
          position: {
            start: { line: 85, column: 1, offset: 3257 },
            end: { line: 85, column: 38, offset: 3294 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 85, column: 38, offset: 3294 },
            end: { line: 85, column: 48, offset: 3304 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can find the full method documentation at ',
          position: {
            start: { line: 85, column: 48, offset: 3304 },
            end: { line: 85, column: 96, offset: 3352 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/docs',
          children: [
            {
              type: 'text',
              value: 'rubico.land/docs',
              position: {
                start: { line: 85, column: 97, offset: 3353 },
                end: { line: 85, column: 113, offset: 3369 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 85, column: 96, offset: 3352 },
            end: { line: 85, column: 140, offset: 3396 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 85, column: 140, offset: 3396 },
            end: { line: 85, column: 141, offset: 3397 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 85, column: 1, offset: 3257 },
        end: { line: 85, column: 141, offset: 3397 },
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
            start: { line: 87, column: 3, offset: 3401 },
            end: { line: 87, column: 15, offset: 3413 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3399 },
        end: { line: 87, column: 15, offset: 3413 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/index.js',
          children: [
            {
              type: 'text',
              value: 'Core build',
              position: {
                start: { line: 88, column: 2, offset: 3415 },
                end: { line: 88, column: 12, offset: 3425 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 88, column: 1, offset: 3414 },
            end: { line: 88, column: 48, offset: 3461 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 88, column: 48, offset: 3461 },
            end: { line: 88, column: 50, offset: 3463 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/rubico.min.js',
          children: [
            {
              type: 'text',
              value: '~7.0 kB minified and gzipped',
              position: {
                start: { line: 88, column: 51, offset: 3464 },
                end: { line: 88, column: 79, offset: 3492 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 88, column: 50, offset: 3463 },
            end: { line: 88, column: 125, offset: 3538 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 88, column: 125, offset: 3538 },
            end: { line: 88, column: 126, offset: 3539 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3414 },
        end: { line: 88, column: 126, offset: 3539 },
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
            start: { line: 90, column: 1, offset: 3541 },
            end: { line: 90, column: 6, offset: 3546 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 90, column: 6, offset: 3546 },
            end: { line: 90, column: 11, offset: 3551 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 3541 },
        end: { line: 90, column: 11, offset: 3551 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 91, column: 1, offset: 3552 },
        end: { line: 93, column: 4, offset: 3576 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require ',
          position: {
            start: { line: 95, column: 1, offset: 3578 },
            end: { line: 95, column: 9, offset: 3586 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 95, column: 9, offset: 3586 },
            end: { line: 95, column: 17, offset: 3594 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3578 },
        end: { line: 95, column: 17, offset: 3594 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const rubico = require('rubico')\n" +
        "const pipe = require('rubico/pipe')\n" +
        "const tap = require('rubico/tap')\n" +
        "const defaultsDeep = require('rubico/x/defaultsDeep')",
      position: {
        start: { line: 96, column: 1, offset: 3595 },
        end: { line: 101, column: 4, offset: 3769 },
        indent: [ 1, 1, 1, 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import ',
          position: {
            start: { line: 103, column: 1, offset: 3771 },
            end: { line: 103, column: 8, offset: 3778 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 103, column: 8, offset: 3778 },
            end: { line: 103, column: 16, offset: 3786 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' globally',
          position: {
            start: { line: 103, column: 16, offset: 3786 },
            end: { line: 103, column: 25, offset: 3795 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3771 },
        end: { line: 103, column: 25, offset: 3795 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<!-- development -->\n' +
        '<script src="https://unpkg.com/rubico"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/pipe.js"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/tap.js"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/x/defaultsDeep.js"></script>\n' +
        '<script>\n' +
        'console.log(rubico) // { pipe, tap, ... }\n' +
        'console.log(pipe) // [Function: pipe]\n' +
        'console.log(tap) // [Function: tap]\n' +
        'console.log(defaultsDeep) // [Function: defaultsDeep]\n' +
        '</script>\n' +
        '\n' +
        '<!-- production -->\n' +
        '<script src="https://unpkg.com/rubico/dist/rubico.min.js"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/pipe.min.js"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/tap.min.js"></script>\n' +
        '<script src="https://unpkg.com/rubico/dist/x/defaultsDeep.min.js"></script>\n' +
        '<script>\n' +
        'console.log(rubico) // { pipe, tap, ... }\n' +
        'console.log(pipe) // [Function: pipe]\n' +
        'console.log(tap) // [Function: tap]\n' +
        'console.log(defaultsDeep) // [Function: defaultsDeep]\n' +
        '</script>',
      position: {
        start: { line: 104, column: 1, offset: 3796 },
        end: { line: 128, column: 4, offset: 4746 },
        indent: [
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import ',
          position: {
            start: { line: 130, column: 1, offset: 4748 },
            end: { line: 130, column: 8, offset: 4755 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 130, column: 8, offset: 4755 },
            end: { line: 130, column: 16, offset: 4763 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' via ES (',
          position: {
            start: { line: 130, column: 16, offset: 4763 },
            end: { line: 130, column: 25, offset: 4772 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
          children: [
            {
              type: 'text',
              value: 'JavaScript',
              position: {
                start: { line: 130, column: 26, offset: 4773 },
                end: { line: 130, column: 36, offset: 4783 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 130, column: 25, offset: 4772 },
            end: { line: 130, column: 108, offset: 4855 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') Modules',
          position: {
            start: { line: 130, column: 108, offset: 4855 },
            end: { line: 130, column: 117, offset: 4864 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 4748 },
        end: { line: 130, column: 117, offset: 4864 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// development\n' +
        "import rubico from 'https://unpkg.com/rubico/es.js'\n" +
        "import pipe from 'https://unpkg.com/rubico/dist/pipe.es.js'\n" +
        "import tap from 'https://unpkg.com/rubico/dist/tap.es.js'\n" +
        "import defaultsDeep from 'https://unpkg.com/rubico/dist/x/defaultsDeep.es.js'\n" +
        '\n' +
        '// production\n' +
        "import rubico from 'https://unpkg.com/rubico/dist/rubico.es.min.js'\n" +
        "import pipe from 'https://unpkg.com/rubico/dist/pipe.es.min.js'\n" +
        "import tap from 'https://unpkg.com/rubico/dist/tap.es.min.js'\n" +
        "import defaultsDeep from 'https://unpkg.com/rubico/dist/x/defaultsDeep.es.min.js'",
      position: {
        start: { line: 131, column: 1, offset: 4865 },
        end: { line: 143, column: 4, offset: 5436 },
        indent: [
          1, 1, 1, 1, 1,
          1, 1, 1, 1, 1,
          1, 1
        ]
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
            start: { line: 145, column: 5, offset: 5442 },
            end: { line: 145, column: 24, offset: 5461 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5438 },
        end: { line: 145, column: 24, offset: 5461 },
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
                    start: { line: 146, column: 4, offset: 5465 },
                    end: { line: 146, column: 30, offset: 5491 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 146, column: 4, offset: 5465 },
                end: { line: 146, column: 30, offset: 5491 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 146, column: 1, offset: 5462 },
            end: { line: 146, column: 30, offset: 5491 },
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
                    start: { line: 147, column: 4, offset: 5495 },
                    end: { line: 147, column: 30, offset: 5521 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 147, column: 4, offset: 5495 },
                end: { line: 147, column: 30, offset: 5521 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 147, column: 1, offset: 5492 },
            end: { line: 147, column: 30, offset: 5521 },
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
                    start: { line: 148, column: 4, offset: 5525 },
                    end: { line: 148, column: 31, offset: 5552 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5525 },
                end: { line: 148, column: 31, offset: 5552 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 148, column: 1, offset: 5522 },
            end: { line: 148, column: 31, offset: 5552 },
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
                    start: { line: 149, column: 4, offset: 5556 },
                    end: { line: 149, column: 28, offset: 5580 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 149, column: 4, offset: 5556 },
                end: { line: 149, column: 28, offset: 5580 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 149, column: 1, offset: 5553 },
            end: { line: 149, column: 28, offset: 5580 },
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
                    start: { line: 150, column: 4, offset: 5584 },
                    end: { line: 150, column: 32, offset: 5612 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 150, column: 4, offset: 5584 },
                end: { line: 150, column: 32, offset: 5612 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 150, column: 1, offset: 5581 },
            end: { line: 150, column: 32, offset: 5612 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 5462 },
        end: { line: 150, column: 32, offset: 5612 },
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
            start: { line: 152, column: 3, offset: 5616 },
            end: { line: 152, column: 20, offset: 5633 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 5614 },
        end: { line: 152, column: 20, offset: 5633 },
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
                        start: { line: 153, column: 5, offset: 5638 },
                        end: { line: 153, column: 71, offset: 5704 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 153, column: 4, offset: 5637 },
                    end: { line: 153, column: 167, offset: 5800 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 153, column: 4, offset: 5637 },
                end: { line: 153, column: 167, offset: 5800 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 153, column: 1, offset: 5634 },
            end: { line: 153, column: 167, offset: 5800 },
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
                        start: { line: 154, column: 5, offset: 5805 },
                        end: { line: 154, column: 63, offset: 5863 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 154, column: 4, offset: 5804 },
                    end: { line: 154, column: 152, offset: 5952 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 154, column: 4, offset: 5804 },
                end: { line: 154, column: 152, offset: 5952 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 5801 },
            end: { line: 154, column: 152, offset: 5952 },
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
                        start: { line: 155, column: 5, offset: 5957 },
                        end: { line: 155, column: 77, offset: 6029 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 155, column: 4, offset: 5956 },
                    end: { line: 155, column: 188, offset: 6140 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 155, column: 4, offset: 5956 },
                end: { line: 155, column: 188, offset: 6140 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 155, column: 1, offset: 5953 },
            end: { line: 155, column: 188, offset: 6140 },
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
                        start: { line: 156, column: 5, offset: 6145 },
                        end: { line: 156, column: 77, offset: 6217 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 156, column: 4, offset: 6144 },
                    end: { line: 156, column: 180, offset: 6320 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 156, column: 4, offset: 6144 },
                end: { line: 156, column: 180, offset: 6320 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 156, column: 1, offset: 6141 },
            end: { line: 156, column: 180, offset: 6320 },
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
                        start: { line: 157, column: 5, offset: 6325 },
                        end: { line: 157, column: 83, offset: 6403 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 157, column: 4, offset: 6324 },
                    end: { line: 157, column: 191, offset: 6511 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 157, column: 4, offset: 6324 },
                end: { line: 157, column: 191, offset: 6511 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 157, column: 1, offset: 6321 },
            end: { line: 157, column: 191, offset: 6511 },
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
                        start: { line: 158, column: 5, offset: 6516 },
                        end: { line: 158, column: 66, offset: 6577 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 6515 },
                    end: { line: 158, column: 158, offset: 6669 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 6515 },
                end: { line: 158, column: 158, offset: 6669 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 158, column: 1, offset: 6512 },
            end: { line: 158, column: 158, offset: 6669 },
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
                        start: { line: 159, column: 5, offset: 6674 },
                        end: { line: 159, column: 68, offset: 6737 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 159, column: 4, offset: 6673 },
                    end: { line: 159, column: 161, offset: 6830 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 6673 },
                end: { line: 159, column: 161, offset: 6830 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 159, column: 1, offset: 6670 },
            end: { line: 159, column: 161, offset: 6830 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 5634 },
        end: { line: 159, column: 161, offset: 6830 },
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
            start: { line: 161, column: 3, offset: 6834 },
            end: { line: 161, column: 15, offset: 6846 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 6832 },
        end: { line: 161, column: 15, offset: 6846 },
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
            start: { line: 162, column: 1, offset: 6847 },
            end: { line: 162, column: 292, offset: 7138 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 162, column: 1, offset: 6847 },
        end: { line: 162, column: 292, offset: 7138 },
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
            start: { line: 164, column: 1, offset: 7140 },
            end: { line: 164, column: 89, offset: 7228 },
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
                start: { line: 164, column: 90, offset: 7229 },
                end: { line: 164, column: 110, offset: 7249 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 164, column: 89, offset: 7228 },
            end: { line: 164, column: 160, offset: 7299 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 164, column: 160, offset: 7299 },
            end: { line: 164, column: 205, offset: 7344 },
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
                start: { line: 164, column: 206, offset: 7345 },
                end: { line: 164, column: 217, offset: 7356 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 164, column: 205, offset: 7344 },
            end: { line: 164, column: 315, offset: 7454 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 164, column: 315, offset: 7454 },
            end: { line: 164, column: 345, offset: 7484 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 7140 },
        end: { line: 164, column: 345, offset: 7484 },
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
            start: { line: 166, column: 3, offset: 7488 },
            end: { line: 166, column: 10, offset: 7495 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 7486 },
        end: { line: 166, column: 10, offset: 7495 },
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
            start: { line: 167, column: 1, offset: 7496 },
            end: { line: 167, column: 11, offset: 7506 },
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
                start: { line: 167, column: 12, offset: 7507 },
                end: { line: 167, column: 24, offset: 7519 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 167, column: 11, offset: 7506 },
            end: { line: 167, column: 86, offset: 7581 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 167, column: 86, offset: 7581 },
            end: { line: 167, column: 87, offset: 7582 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 7496 },
        end: { line: 167, column: 87, offset: 7582 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 168, column: 1, offset: 7583 }
  }
}
