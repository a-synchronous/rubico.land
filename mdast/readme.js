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
        start: { line: 57, column: 1, offset: 2223 },
        end: { line: 79, column: 4, offset: 2988 },
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
            start: { line: 81, column: 1, offset: 2990 },
            end: { line: 81, column: 123, offset: 3112 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2990 },
        end: { line: 81, column: 123, offset: 3112 },
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
                    start: { line: 83, column: 4, offset: 3117 },
                    end: { line: 83, column: 9, offset: 3122 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 83, column: 9, offset: 3122 },
                    end: { line: 83, column: 48, offset: 3161 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 3117 },
                end: { line: 83, column: 48, offset: 3161 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 83, column: 1, offset: 3114 },
            end: { line: 83, column: 48, offset: 3161 },
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
                    start: { line: 84, column: 4, offset: 3165 },
                    end: { line: 84, column: 14, offset: 3175 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 84, column: 14, offset: 3175 },
                    end: { line: 84, column: 78, offset: 3239 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 3165 },
                end: { line: 84, column: 78, offset: 3239 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 84, column: 1, offset: 3162 },
            end: { line: 84, column: 78, offset: 3239 },
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
                    start: { line: 85, column: 4, offset: 3243 },
                    end: { line: 85, column: 16, offset: 3255 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 85, column: 16, offset: 3255 },
                    end: { line: 85, column: 51, offset: 3290 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 3243 },
                end: { line: 85, column: 51, offset: 3290 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 85, column: 1, offset: 3240 },
            end: { line: 85, column: 51, offset: 3290 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 3114 },
        end: { line: 85, column: 51, offset: 3290 },
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
            start: { line: 87, column: 1, offset: 3292 },
            end: { line: 87, column: 36, offset: 3327 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 87, column: 36, offset: 3327 },
            end: { line: 87, column: 46, offset: 3337 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 87, column: 46, offset: 3337 },
            end: { line: 87, column: 47, offset: 3338 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3292 },
        end: { line: 87, column: 47, offset: 3338 },
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
            start: { line: 89, column: 3, offset: 3342 },
            end: { line: 89, column: 15, offset: 3354 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3340 },
        end: { line: 89, column: 15, offset: 3354 },
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
                start: { line: 90, column: 2, offset: 3356 },
                end: { line: 90, column: 12, offset: 3366 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 90, column: 1, offset: 3355 },
            end: { line: 90, column: 48, offset: 3402 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 90, column: 48, offset: 3402 },
            end: { line: 90, column: 50, offset: 3404 },
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
                start: { line: 90, column: 51, offset: 3405 },
                end: { line: 90, column: 79, offset: 3433 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 90, column: 50, offset: 3404 },
            end: { line: 90, column: 125, offset: 3479 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 90, column: 125, offset: 3479 },
            end: { line: 90, column: 126, offset: 3480 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 3355 },
        end: { line: 90, column: 126, offset: 3480 },
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
            start: { line: 92, column: 1, offset: 3482 },
            end: { line: 92, column: 6, offset: 3487 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 92, column: 6, offset: 3487 },
            end: { line: 92, column: 11, offset: 3492 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3482 },
        end: { line: 92, column: 11, offset: 3492 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 93, column: 1, offset: 3493 },
        end: { line: 95, column: 4, offset: 3517 },
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
            start: { line: 97, column: 1, offset: 3519 },
            end: { line: 97, column: 9, offset: 3527 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 97, column: 9, offset: 3527 },
            end: { line: 97, column: 17, offset: 3535 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3519 },
        end: { line: 97, column: 17, offset: 3535 },
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
        start: { line: 98, column: 1, offset: 3536 },
        end: { line: 103, column: 4, offset: 3710 },
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
            start: { line: 105, column: 1, offset: 3712 },
            end: { line: 105, column: 8, offset: 3719 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 105, column: 8, offset: 3719 },
            end: { line: 105, column: 16, offset: 3727 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' globally',
          position: {
            start: { line: 105, column: 16, offset: 3727 },
            end: { line: 105, column: 25, offset: 3736 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3712 },
        end: { line: 105, column: 25, offset: 3736 },
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
        start: { line: 106, column: 1, offset: 3737 },
        end: { line: 130, column: 4, offset: 4687 },
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
            start: { line: 132, column: 1, offset: 4689 },
            end: { line: 132, column: 8, offset: 4696 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 132, column: 8, offset: 4696 },
            end: { line: 132, column: 16, offset: 4704 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' via ES (',
          position: {
            start: { line: 132, column: 16, offset: 4704 },
            end: { line: 132, column: 25, offset: 4713 },
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
                start: { line: 132, column: 26, offset: 4714 },
                end: { line: 132, column: 36, offset: 4724 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 132, column: 25, offset: 4713 },
            end: { line: 132, column: 108, offset: 4796 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') Modules',
          position: {
            start: { line: 132, column: 108, offset: 4796 },
            end: { line: 132, column: 117, offset: 4805 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 4689 },
        end: { line: 132, column: 117, offset: 4805 },
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
        start: { line: 133, column: 1, offset: 4806 },
        end: { line: 145, column: 4, offset: 5377 },
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
            start: { line: 147, column: 5, offset: 5383 },
            end: { line: 147, column: 24, offset: 5402 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 5379 },
        end: { line: 147, column: 24, offset: 5402 },
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
                    start: { line: 148, column: 4, offset: 5406 },
                    end: { line: 148, column: 30, offset: 5432 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5406 },
                end: { line: 148, column: 30, offset: 5432 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 148, column: 1, offset: 5403 },
            end: { line: 148, column: 30, offset: 5432 },
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
                    start: { line: 149, column: 4, offset: 5436 },
                    end: { line: 149, column: 30, offset: 5462 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 149, column: 4, offset: 5436 },
                end: { line: 149, column: 30, offset: 5462 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 149, column: 1, offset: 5433 },
            end: { line: 149, column: 30, offset: 5462 },
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
                    start: { line: 150, column: 4, offset: 5466 },
                    end: { line: 150, column: 31, offset: 5493 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 150, column: 4, offset: 5466 },
                end: { line: 150, column: 31, offset: 5493 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 150, column: 1, offset: 5463 },
            end: { line: 150, column: 31, offset: 5493 },
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
                    start: { line: 151, column: 4, offset: 5497 },
                    end: { line: 151, column: 28, offset: 5521 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 151, column: 4, offset: 5497 },
                end: { line: 151, column: 28, offset: 5521 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 151, column: 1, offset: 5494 },
            end: { line: 151, column: 28, offset: 5521 },
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
                    start: { line: 152, column: 4, offset: 5525 },
                    end: { line: 152, column: 32, offset: 5553 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 152, column: 4, offset: 5525 },
                end: { line: 152, column: 32, offset: 5553 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 152, column: 1, offset: 5522 },
            end: { line: 152, column: 32, offset: 5553 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 5403 },
        end: { line: 152, column: 32, offset: 5553 },
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
            start: { line: 154, column: 3, offset: 5557 },
            end: { line: 154, column: 20, offset: 5574 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 5555 },
        end: { line: 154, column: 20, offset: 5574 },
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
                        start: { line: 155, column: 5, offset: 5579 },
                        end: { line: 155, column: 71, offset: 5645 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 155, column: 4, offset: 5578 },
                    end: { line: 155, column: 167, offset: 5741 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 155, column: 4, offset: 5578 },
                end: { line: 155, column: 167, offset: 5741 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 155, column: 1, offset: 5575 },
            end: { line: 155, column: 167, offset: 5741 },
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
                        start: { line: 156, column: 5, offset: 5746 },
                        end: { line: 156, column: 63, offset: 5804 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 156, column: 4, offset: 5745 },
                    end: { line: 156, column: 152, offset: 5893 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 156, column: 4, offset: 5745 },
                end: { line: 156, column: 152, offset: 5893 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 156, column: 1, offset: 5742 },
            end: { line: 156, column: 152, offset: 5893 },
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
                        start: { line: 157, column: 5, offset: 5898 },
                        end: { line: 157, column: 77, offset: 5970 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 157, column: 4, offset: 5897 },
                    end: { line: 157, column: 188, offset: 6081 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 157, column: 4, offset: 5897 },
                end: { line: 157, column: 188, offset: 6081 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 157, column: 1, offset: 5894 },
            end: { line: 157, column: 188, offset: 6081 },
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
                        start: { line: 158, column: 5, offset: 6086 },
                        end: { line: 158, column: 77, offset: 6158 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 6085 },
                    end: { line: 158, column: 180, offset: 6261 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 6085 },
                end: { line: 158, column: 180, offset: 6261 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 158, column: 1, offset: 6082 },
            end: { line: 158, column: 180, offset: 6261 },
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
                        start: { line: 159, column: 5, offset: 6266 },
                        end: { line: 159, column: 83, offset: 6344 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 159, column: 4, offset: 6265 },
                    end: { line: 159, column: 191, offset: 6452 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 6265 },
                end: { line: 159, column: 191, offset: 6452 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 159, column: 1, offset: 6262 },
            end: { line: 159, column: 191, offset: 6452 },
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
                        start: { line: 160, column: 5, offset: 6457 },
                        end: { line: 160, column: 66, offset: 6518 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 160, column: 4, offset: 6456 },
                    end: { line: 160, column: 158, offset: 6610 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 160, column: 4, offset: 6456 },
                end: { line: 160, column: 158, offset: 6610 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 160, column: 1, offset: 6453 },
            end: { line: 160, column: 158, offset: 6610 },
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
                        start: { line: 161, column: 5, offset: 6615 },
                        end: { line: 161, column: 68, offset: 6678 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 161, column: 4, offset: 6614 },
                    end: { line: 161, column: 161, offset: 6771 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 161, column: 4, offset: 6614 },
                end: { line: 161, column: 161, offset: 6771 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 1, offset: 6611 },
            end: { line: 161, column: 161, offset: 6771 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 5575 },
        end: { line: 161, column: 161, offset: 6771 },
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
            start: { line: 163, column: 3, offset: 6775 },
            end: { line: 163, column: 15, offset: 6787 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 6773 },
        end: { line: 163, column: 15, offset: 6787 },
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
            start: { line: 164, column: 1, offset: 6788 },
            end: { line: 164, column: 292, offset: 7079 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6788 },
        end: { line: 164, column: 292, offset: 7079 },
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
            start: { line: 166, column: 1, offset: 7081 },
            end: { line: 166, column: 89, offset: 7169 },
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
                start: { line: 166, column: 90, offset: 7170 },
                end: { line: 166, column: 110, offset: 7190 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 166, column: 89, offset: 7169 },
            end: { line: 166, column: 160, offset: 7240 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 166, column: 160, offset: 7240 },
            end: { line: 166, column: 205, offset: 7285 },
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
                start: { line: 166, column: 206, offset: 7286 },
                end: { line: 166, column: 217, offset: 7297 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 166, column: 205, offset: 7285 },
            end: { line: 166, column: 315, offset: 7395 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 166, column: 315, offset: 7395 },
            end: { line: 166, column: 345, offset: 7425 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 7081 },
        end: { line: 166, column: 345, offset: 7425 },
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
            start: { line: 168, column: 3, offset: 7429 },
            end: { line: 168, column: 10, offset: 7436 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 7427 },
        end: { line: 168, column: 10, offset: 7436 },
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
            start: { line: 169, column: 1, offset: 7437 },
            end: { line: 169, column: 11, offset: 7447 },
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
                start: { line: 169, column: 12, offset: 7448 },
                end: { line: 169, column: 24, offset: 7460 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 169, column: 11, offset: 7447 },
            end: { line: 169, column: 86, offset: 7522 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 169, column: 86, offset: 7522 },
            end: { line: 169, column: 87, offset: 7523 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 7437 },
        end: { line: 169, column: 87, offset: 7523 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 170, column: 1, offset: 7524 }
  }
}
