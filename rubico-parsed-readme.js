export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'rubico',
          position: {
            start: { line: 1, column: 3, offset: 2 },
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
          type: 'image',
          title: null,
          url: 'https://raw.githubusercontent.com/a-synchronous/assets/master/rubico-logo.png',
          alt: 'rubico',
          position: {
            start: { line: 2, column: 1, offset: 9 },
            end: { line: 2, column: 89, offset: 97 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 9 },
        end: { line: 2, column: 89, offset: 97 },
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
                start: { line: 3, column: 3, offset: 100 },
                end: { line: 3, column: 63, offset: 160 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 100 },
            end: { line: 3, column: 63, offset: 160 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 98 },
        end: { line: 3, column: 63, offset: 160 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 5, column: 1, offset: 162 },
        end: { line: 5, column: 7, offset: 168 },
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
            start: { line: 7, column: 1, offset: 170 },
            end: { line: 7, column: 102, offset: 271 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 7, column: 102, offset: 271 },
            end: { line: 8, column: 1, offset: 272 },
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
                start: { line: 8, column: 2, offset: 273 },
                end: { line: 8, column: 86, offset: 357 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 272 },
            end: { line: 8, column: 131, offset: 402 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 7, column: 1, offset: 170 },
        end: { line: 8, column: 131, offset: 402 },
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
                start: { line: 10, column: 6, offset: 409 },
                end: { line: 10, column: 7, offset: 410 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 10, column: 5, offset: 408 },
            end: { line: 10, column: 8, offset: 411 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming',
          position: {
            start: { line: 10, column: 8, offset: 411 },
            end: { line: 10, column: 42, offset: 445 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 404 },
        end: { line: 10, column: 42, offset: 445 },
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
        start: { line: 12, column: 1, offset: 447 },
        end: { line: 25, column: 4, offset: 734 },
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
            start: { line: 27, column: 1, offset: 736 },
            end: { line: 27, column: 23, offset: 758 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 736 },
        end: { line: 27, column: 23, offset: 758 },
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
                start: { line: 28, column: 3, offset: 761 },
                end: { line: 28, column: 463, offset: 1221 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 28, column: 3, offset: 761 },
            end: { line: 28, column: 463, offset: 1221 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 759 },
        end: { line: 28, column: 463, offset: 1221 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This library is founded on the following principles:',
          position: {
            start: { line: 30, column: 1, offset: 1223 },
            end: { line: 30, column: 53, offset: 1275 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1223 },
        end: { line: 30, column: 53, offset: 1275 },
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
                    start: { line: 31, column: 4, offset: 1279 },
                    end: { line: 31, column: 38, offset: 1313 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1279 },
                end: { line: 31, column: 38, offset: 1313 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 1276 },
            end: { line: 31, column: 38, offset: 1313 },
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
                    start: { line: 32, column: 4, offset: 1317 },
                    end: { line: 32, column: 48, offset: 1361 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1317 },
                end: { line: 32, column: 48, offset: 1361 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 32, column: 1, offset: 1314 },
            end: { line: 32, column: 48, offset: 1361 },
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
                    start: { line: 33, column: 4, offset: 1365 },
                    end: { line: 33, column: 86, offset: 1447 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1365 },
                end: { line: 33, column: 86, offset: 1447 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1362 },
            end: { line: 33, column: 86, offset: 1447 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1276 },
        end: { line: 33, column: 86, offset: 1447 },
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
            start: { line: 35, column: 1, offset: 1449 },
            end: { line: 35, column: 145, offset: 1593 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 1449 },
        end: { line: 35, column: 145, offset: 1593 },
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
            start: { line: 37, column: 3, offset: 1597 },
            end: { line: 37, column: 15, offset: 1609 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1595 },
        end: { line: 37, column: 15, offset: 1609 },
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
            start: { line: 39, column: 1, offset: 1611 },
            end: { line: 39, column: 49, offset: 1659 },
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
                start: { line: 39, column: 50, offset: 1660 },
                end: { line: 39, column: 51, offset: 1661 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 39, column: 49, offset: 1659 },
            end: { line: 39, column: 52, offset: 1662 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming in JavaScript.',
          position: {
            start: { line: 39, column: 52, offset: 1662 },
            end: { line: 39, column: 101, offset: 1711 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1611 },
        end: { line: 39, column: 101, offset: 1711 },
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
        start: { line: 41, column: 1, offset: 1713 },
        end: { line: 50, column: 4, offset: 1912 },
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
            start: { line: 52, column: 1, offset: 1914 },
            end: { line: 52, column: 149, offset: 2062 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1914 },
        end: { line: 52, column: 149, offset: 2062 },
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
        start: { line: 54, column: 1, offset: 2064 },
        end: { line: 76, column: 4, offset: 2829 },
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
            start: { line: 78, column: 1, offset: 2831 },
            end: { line: 78, column: 123, offset: 2953 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2831 },
        end: { line: 78, column: 123, offset: 2953 },
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
                    start: { line: 80, column: 4, offset: 2958 },
                    end: { line: 80, column: 9, offset: 2963 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 80, column: 9, offset: 2963 },
                    end: { line: 80, column: 48, offset: 3002 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 80, column: 4, offset: 2958 },
                end: { line: 80, column: 48, offset: 3002 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 80, column: 1, offset: 2955 },
            end: { line: 80, column: 48, offset: 3002 },
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
                    start: { line: 81, column: 4, offset: 3006 },
                    end: { line: 81, column: 14, offset: 3016 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 81, column: 14, offset: 3016 },
                    end: { line: 81, column: 78, offset: 3080 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3006 },
                end: { line: 81, column: 78, offset: 3080 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 3003 },
            end: { line: 81, column: 78, offset: 3080 },
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
                    start: { line: 82, column: 4, offset: 3084 },
                    end: { line: 82, column: 16, offset: 3096 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 82, column: 16, offset: 3096 },
                    end: { line: 82, column: 51, offset: 3131 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3084 },
                end: { line: 82, column: 51, offset: 3131 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 82, column: 1, offset: 3081 },
            end: { line: 82, column: 51, offset: 3131 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2955 },
        end: { line: 82, column: 51, offset: 3131 },
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
            start: { line: 84, column: 1, offset: 3133 },
            end: { line: 84, column: 36, offset: 3168 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 84, column: 36, offset: 3168 },
            end: { line: 84, column: 46, offset: 3178 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 84, column: 46, offset: 3178 },
            end: { line: 84, column: 47, offset: 3179 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3133 },
        end: { line: 84, column: 47, offset: 3179 },
        indent: []
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Getting Started',
          position: {
            start: { line: 86, column: 3, offset: 3183 },
            end: { line: 86, column: 18, offset: 3198 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3181 },
        end: { line: 86, column: 18, offset: 3198 },
        indent: []
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  url: 'https://doc.rubico.land',
                  children: [
                    {
                      type: 'text',
                      value: 'check out the docs',
                      position: {
                        start: { line: 87, column: 6, offset: 3204 },
                        end: { line: 87, column: 24, offset: 3222 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 87, column: 5, offset: 3203 },
                    end: { line: 87, column: 50, offset: 3248 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 87, column: 5, offset: 3203 },
                end: { line: 87, column: 50, offset: 3248 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 87, column: 1, offset: 3199 },
            end: { line: 87, column: 50, offset: 3248 },
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
                  url: 'https://tour.rubico.land',
                  children: [
                    {
                      type: 'text',
                      value: 'take the tour',
                      position: {
                        start: { line: 88, column: 6, offset: 3254 },
                        end: { line: 88, column: 19, offset: 3267 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 88, column: 5, offset: 3253 },
                    end: { line: 88, column: 46, offset: 3294 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 88, column: 5, offset: 3253 },
                end: { line: 88, column: 46, offset: 3294 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 88, column: 1, offset: 3249 },
            end: { line: 88, column: 46, offset: 3294 },
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
                  value: 'use rubico in a project',
                  position: {
                    start: { line: 89, column: 5, offset: 3299 },
                    end: { line: 89, column: 28, offset: 3322 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 89, column: 5, offset: 3299 },
                end: { line: 89, column: 28, offset: 3322 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 89, column: 1, offset: 3295 },
            end: { line: 89, column: 28, offset: 3322 },
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
                  value: 'at your leisure, ',
                  position: {
                    start: { line: 90, column: 5, offset: 3327 },
                    end: { line: 90, column: 22, offset: 3344 },
                    indent: []
                  }
                },
                {
                  type: 'link',
                  title: null,
                  url: '#awesome-resources',
                  children: [
                    {
                      type: 'text',
                      value: 'peruse the awesome resources',
                      position: {
                        start: { line: 90, column: 23, offset: 3345 },
                        end: { line: 90, column: 51, offset: 3373 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 90, column: 22, offset: 3344 },
                    end: { line: 90, column: 72, offset: 3394 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 90, column: 5, offset: 3327 },
                end: { line: 90, column: 72, offset: 3394 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 90, column: 1, offset: 3323 },
            end: { line: 90, column: 72, offset: 3394 },
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
                  url: 'https://github.com/a-synchronous/rubico/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22',
                  children: [
                    {
                      type: 'text',
                      value: 'help with rubico',
                      position: {
                        start: { line: 91, column: 6, offset: 3400 },
                        end: { line: 91, column: 22, offset: 3416 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 91, column: 5, offset: 3399 },
                    end: { line: 91, column: 120, offset: 3514 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 91, column: 5, offset: 3399 },
                end: { line: 91, column: 120, offset: 3514 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 91, column: 1, offset: 3395 },
            end: { line: 91, column: 120, offset: 3514 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3199 },
        end: { line: 91, column: 120, offset: 3514 },
        indent: [ 1, 1, 1, 1 ]
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
            start: { line: 93, column: 3, offset: 3518 },
            end: { line: 93, column: 15, offset: 3530 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3516 },
        end: { line: 93, column: 15, offset: 3530 },
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
            start: { line: 94, column: 1, offset: 3531 },
            end: { line: 94, column: 6, offset: 3536 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 94, column: 6, offset: 3536 },
            end: { line: 94, column: 11, offset: 3541 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3531 },
        end: { line: 94, column: 11, offset: 3541 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 95, column: 1, offset: 3542 },
        end: { line: 97, column: 4, offset: 3566 },
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
            start: { line: 99, column: 1, offset: 3568 },
            end: { line: 99, column: 24, offset: 3591 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 99, column: 24, offset: 3591 },
            end: { line: 99, column: 32, offset: 3599 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3568 },
        end: { line: 99, column: 32, offset: 3599 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/rubico"></script>',
      position: {
        start: { line: 100, column: 1, offset: 3600 },
        end: { line: 102, column: 4, offset: 3660 },
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
            start: { line: 104, column: 1, offset: 3662 },
            end: { line: 104, column: 15, offset: 3676 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3662 },
        end: { line: 104, column: 15, offset: 3676 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import rubico from 'https://unpkg.com/rubico/es.js'",
      position: {
        start: { line: 105, column: 1, offset: 3677 },
        end: { line: 107, column: 4, offset: 3746 },
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
            start: { line: 109, column: 5, offset: 3752 },
            end: { line: 109, column: 24, offset: 3771 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 3748 },
        end: { line: 109, column: 24, offset: 3771 },
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
                    start: { line: 110, column: 4, offset: 3775 },
                    end: { line: 110, column: 30, offset: 3801 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 4, offset: 3775 },
                end: { line: 110, column: 30, offset: 3801 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3772 },
            end: { line: 110, column: 30, offset: 3801 },
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
                    start: { line: 111, column: 4, offset: 3805 },
                    end: { line: 111, column: 30, offset: 3831 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 4, offset: 3805 },
                end: { line: 111, column: 30, offset: 3831 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3802 },
            end: { line: 111, column: 30, offset: 3831 },
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
                    start: { line: 112, column: 4, offset: 3835 },
                    end: { line: 112, column: 31, offset: 3862 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 4, offset: 3835 },
                end: { line: 112, column: 31, offset: 3862 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3832 },
            end: { line: 112, column: 31, offset: 3862 },
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
                    start: { line: 113, column: 4, offset: 3866 },
                    end: { line: 113, column: 28, offset: 3890 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 4, offset: 3866 },
                end: { line: 113, column: 28, offset: 3890 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3863 },
            end: { line: 113, column: 28, offset: 3890 },
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
                    start: { line: 114, column: 4, offset: 3894 },
                    end: { line: 114, column: 32, offset: 3922 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 4, offset: 3894 },
                end: { line: 114, column: 32, offset: 3922 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3891 },
            end: { line: 114, column: 32, offset: 3922 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3772 },
        end: { line: 114, column: 32, offset: 3922 },
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
            start: { line: 116, column: 3, offset: 3926 },
            end: { line: 116, column: 20, offset: 3943 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3924 },
        end: { line: 116, column: 20, offset: 3943 },
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
                        start: { line: 117, column: 5, offset: 3948 },
                        end: { line: 117, column: 71, offset: 4014 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 117, column: 4, offset: 3947 },
                    end: { line: 117, column: 167, offset: 4110 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 4, offset: 3947 },
                end: { line: 117, column: 167, offset: 4110 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 3944 },
            end: { line: 117, column: 167, offset: 4110 },
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
                        start: { line: 118, column: 5, offset: 4115 },
                        end: { line: 118, column: 63, offset: 4173 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 118, column: 4, offset: 4114 },
                    end: { line: 118, column: 152, offset: 4262 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 4, offset: 4114 },
                end: { line: 118, column: 152, offset: 4262 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4111 },
            end: { line: 118, column: 152, offset: 4262 },
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
                        start: { line: 119, column: 5, offset: 4267 },
                        end: { line: 119, column: 77, offset: 4339 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 119, column: 4, offset: 4266 },
                    end: { line: 119, column: 188, offset: 4450 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 119, column: 4, offset: 4266 },
                end: { line: 119, column: 188, offset: 4450 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 4263 },
            end: { line: 119, column: 188, offset: 4450 },
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
                        start: { line: 120, column: 5, offset: 4455 },
                        end: { line: 120, column: 77, offset: 4527 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 120, column: 4, offset: 4454 },
                    end: { line: 120, column: 180, offset: 4630 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 120, column: 4, offset: 4454 },
                end: { line: 120, column: 180, offset: 4630 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 4451 },
            end: { line: 120, column: 180, offset: 4630 },
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
                        start: { line: 121, column: 5, offset: 4635 },
                        end: { line: 121, column: 83, offset: 4713 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 121, column: 4, offset: 4634 },
                    end: { line: 121, column: 191, offset: 4821 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 4, offset: 4634 },
                end: { line: 121, column: 191, offset: 4821 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4631 },
            end: { line: 121, column: 191, offset: 4821 },
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
                        start: { line: 122, column: 5, offset: 4826 },
                        end: { line: 122, column: 66, offset: 4887 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 122, column: 4, offset: 4825 },
                    end: { line: 122, column: 158, offset: 4979 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 4, offset: 4825 },
                end: { line: 122, column: 158, offset: 4979 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4822 },
            end: { line: 122, column: 158, offset: 4979 },
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
                        start: { line: 123, column: 5, offset: 4984 },
                        end: { line: 123, column: 68, offset: 5047 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 123, column: 4, offset: 4983 },
                    end: { line: 123, column: 161, offset: 5140 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 4, offset: 4983 },
                end: { line: 123, column: 161, offset: 5140 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4980 },
            end: { line: 123, column: 161, offset: 5140 },
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
                  url: 'https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducers',
                      position: {
                        start: { line: 124, column: 5, offset: 5145 },
                        end: { line: 124, column: 16, offset: 5156 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 124, column: 4, offset: 5144 },
                    end: { line: 124, column: 85, offset: 5225 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 4, offset: 5144 },
                end: { line: 124, column: 85, offset: 5225 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 5141 },
            end: { line: 124, column: 85, offset: 5225 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 3944 },
        end: { line: 124, column: 85, offset: 5225 },
        indent: [
          1, 1, 1, 1,
          1, 1, 1
        ]
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
            start: { line: 126, column: 3, offset: 5229 },
            end: { line: 126, column: 15, offset: 5241 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5227 },
        end: { line: 126, column: 15, offset: 5241 },
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
            start: { line: 127, column: 1, offset: 5242 },
            end: { line: 127, column: 292, offset: 5533 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 5242 },
        end: { line: 127, column: 292, offset: 5533 },
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
            start: { line: 129, column: 1, offset: 5535 },
            end: { line: 129, column: 89, offset: 5623 },
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
                start: { line: 129, column: 90, offset: 5624 },
                end: { line: 129, column: 110, offset: 5644 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 89, offset: 5623 },
            end: { line: 129, column: 160, offset: 5694 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 129, column: 160, offset: 5694 },
            end: { line: 129, column: 205, offset: 5739 },
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
                start: { line: 129, column: 206, offset: 5740 },
                end: { line: 129, column: 217, offset: 5751 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 205, offset: 5739 },
            end: { line: 129, column: 315, offset: 5849 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 129, column: 315, offset: 5849 },
            end: { line: 129, column: 345, offset: 5879 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 5535 },
        end: { line: 129, column: 345, offset: 5879 },
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
            start: { line: 131, column: 3, offset: 5883 },
            end: { line: 131, column: 10, offset: 5890 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 5881 },
        end: { line: 131, column: 10, offset: 5890 },
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
            start: { line: 132, column: 1, offset: 5891 },
            end: { line: 132, column: 11, offset: 5901 },
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
                start: { line: 132, column: 12, offset: 5902 },
                end: { line: 132, column: 24, offset: 5914 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 132, column: 11, offset: 5901 },
            end: { line: 132, column: 86, offset: 5976 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 132, column: 86, offset: 5976 },
            end: { line: 132, column: 87, offset: 5977 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 5891 },
        end: { line: 132, column: 87, offset: 5977 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 133, column: 1, offset: 5978 }
  }
}
