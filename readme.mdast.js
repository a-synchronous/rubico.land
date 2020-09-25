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
          value: 'rubico is founded on the following principles:',
          position: {
            start: { line: 30, column: 1, offset: 1223 },
            end: { line: 30, column: 47, offset: 1269 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1223 },
        end: { line: 30, column: 47, offset: 1269 },
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
                    start: { line: 31, column: 4, offset: 1273 },
                    end: { line: 31, column: 38, offset: 1307 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1273 },
                end: { line: 31, column: 38, offset: 1307 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 1270 },
            end: { line: 31, column: 38, offset: 1307 },
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
                    start: { line: 32, column: 4, offset: 1311 },
                    end: { line: 32, column: 48, offset: 1355 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1311 },
                end: { line: 32, column: 48, offset: 1355 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 32, column: 1, offset: 1308 },
            end: { line: 32, column: 48, offset: 1355 },
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
                    start: { line: 33, column: 4, offset: 1359 },
                    end: { line: 33, column: 86, offset: 1441 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1359 },
                end: { line: 33, column: 86, offset: 1441 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1356 },
            end: { line: 33, column: 86, offset: 1441 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1270 },
        end: { line: 33, column: 86, offset: 1441 },
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
            start: { line: 35, column: 1, offset: 1443 },
            end: { line: 35, column: 145, offset: 1587 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 1443 },
        end: { line: 35, column: 145, offset: 1587 },
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
            start: { line: 37, column: 3, offset: 1591 },
            end: { line: 37, column: 15, offset: 1603 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1589 },
        end: { line: 37, column: 15, offset: 1603 },
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
            start: { line: 39, column: 1, offset: 1605 },
            end: { line: 39, column: 49, offset: 1653 },
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
                start: { line: 39, column: 50, offset: 1654 },
                end: { line: 39, column: 51, offset: 1655 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 39, column: 49, offset: 1653 },
            end: { line: 39, column: 52, offset: 1656 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchronous functional programming in JavaScript.',
          position: {
            start: { line: 39, column: 52, offset: 1656 },
            end: { line: 39, column: 101, offset: 1705 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1605 },
        end: { line: 39, column: 101, offset: 1705 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[theme=default]',
      value: 'const {\n' +
        '  pipe, fork, assign,\n' +
        '  tap, tryCatch, switchCase,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  any, all, and, or, not,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  get, pick, omit,\n' +
        '} = rubico',
      position: {
        start: { line: 41, column: 1, offset: 1707 },
        end: { line: 50, column: 4, offset: 1922 },
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
            start: { line: 52, column: 1, offset: 1924 },
            end: { line: 52, column: 149, offset: 2072 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1924 },
        end: { line: 52, column: 149, offset: 2072 },
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
        start: { line: 54, column: 1, offset: 2074 },
        end: { line: 76, column: 4, offset: 2839 },
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
            start: { line: 78, column: 1, offset: 2841 },
            end: { line: 78, column: 123, offset: 2963 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2841 },
        end: { line: 78, column: 123, offset: 2963 },
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
                    start: { line: 80, column: 4, offset: 2968 },
                    end: { line: 80, column: 9, offset: 2973 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 80, column: 9, offset: 2973 },
                    end: { line: 80, column: 48, offset: 3012 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 80, column: 4, offset: 2968 },
                end: { line: 80, column: 48, offset: 3012 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 80, column: 1, offset: 2965 },
            end: { line: 80, column: 48, offset: 3012 },
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
                    start: { line: 81, column: 4, offset: 3016 },
                    end: { line: 81, column: 14, offset: 3026 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 81, column: 14, offset: 3026 },
                    end: { line: 81, column: 78, offset: 3090 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3016 },
                end: { line: 81, column: 78, offset: 3090 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 3013 },
            end: { line: 81, column: 78, offset: 3090 },
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
                    start: { line: 82, column: 4, offset: 3094 },
                    end: { line: 82, column: 16, offset: 3106 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 82, column: 16, offset: 3106 },
                    end: { line: 82, column: 51, offset: 3141 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3094 },
                end: { line: 82, column: 51, offset: 3141 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 82, column: 1, offset: 3091 },
            end: { line: 82, column: 51, offset: 3141 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2965 },
        end: { line: 82, column: 51, offset: 3141 },
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
            start: { line: 84, column: 1, offset: 3143 },
            end: { line: 84, column: 36, offset: 3178 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 84, column: 36, offset: 3178 },
            end: { line: 84, column: 46, offset: 3188 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 84, column: 46, offset: 3188 },
            end: { line: 84, column: 47, offset: 3189 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3143 },
        end: { line: 84, column: 47, offset: 3189 },
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
            start: { line: 86, column: 3, offset: 3193 },
            end: { line: 86, column: 18, offset: 3208 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3191 },
        end: { line: 86, column: 18, offset: 3208 },
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
                        start: { line: 87, column: 6, offset: 3214 },
                        end: { line: 87, column: 24, offset: 3232 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 87, column: 5, offset: 3213 },
                    end: { line: 87, column: 50, offset: 3258 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 87, column: 5, offset: 3213 },
                end: { line: 87, column: 50, offset: 3258 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 87, column: 1, offset: 3209 },
            end: { line: 87, column: 50, offset: 3258 },
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
                        start: { line: 88, column: 6, offset: 3264 },
                        end: { line: 88, column: 19, offset: 3277 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 88, column: 5, offset: 3263 },
                    end: { line: 88, column: 46, offset: 3304 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 88, column: 5, offset: 3263 },
                end: { line: 88, column: 46, offset: 3304 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 88, column: 1, offset: 3259 },
            end: { line: 88, column: 46, offset: 3304 },
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
                    start: { line: 89, column: 5, offset: 3309 },
                    end: { line: 89, column: 28, offset: 3332 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 89, column: 5, offset: 3309 },
                end: { line: 89, column: 28, offset: 3332 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 89, column: 1, offset: 3305 },
            end: { line: 89, column: 28, offset: 3332 },
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
                    start: { line: 90, column: 5, offset: 3337 },
                    end: { line: 90, column: 22, offset: 3354 },
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
                        start: { line: 90, column: 23, offset: 3355 },
                        end: { line: 90, column: 51, offset: 3383 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 90, column: 22, offset: 3354 },
                    end: { line: 90, column: 72, offset: 3404 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 90, column: 5, offset: 3337 },
                end: { line: 90, column: 72, offset: 3404 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 90, column: 1, offset: 3333 },
            end: { line: 90, column: 72, offset: 3404 },
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
                        start: { line: 91, column: 6, offset: 3410 },
                        end: { line: 91, column: 22, offset: 3426 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 91, column: 5, offset: 3409 },
                    end: { line: 91, column: 120, offset: 3524 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 91, column: 5, offset: 3409 },
                end: { line: 91, column: 120, offset: 3524 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 91, column: 1, offset: 3405 },
            end: { line: 91, column: 120, offset: 3524 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3209 },
        end: { line: 91, column: 120, offset: 3524 },
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
            start: { line: 93, column: 3, offset: 3528 },
            end: { line: 93, column: 15, offset: 3540 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3526 },
        end: { line: 93, column: 15, offset: 3540 },
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
            start: { line: 94, column: 1, offset: 3541 },
            end: { line: 94, column: 6, offset: 3546 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 94, column: 6, offset: 3546 },
            end: { line: 94, column: 11, offset: 3551 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3541 },
        end: { line: 94, column: 11, offset: 3551 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: '[theme=default]',
      value: 'npm i rubico',
      position: {
        start: { line: 95, column: 1, offset: 3552 },
        end: { line: 97, column: 4, offset: 3592 },
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
            start: { line: 99, column: 1, offset: 3594 },
            end: { line: 99, column: 24, offset: 3617 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 99, column: 24, offset: 3617 },
            end: { line: 99, column: 32, offset: 3625 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3594 },
        end: { line: 99, column: 32, offset: 3625 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: '[theme=default]',
      value: '<script src="https://unpkg.com/rubico"></script>',
      position: {
        start: { line: 100, column: 1, offset: 3626 },
        end: { line: 102, column: 4, offset: 3702 },
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
            start: { line: 104, column: 1, offset: 3704 },
            end: { line: 104, column: 15, offset: 3718 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3704 },
        end: { line: 104, column: 15, offset: 3718 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[theme=default]',
      value: "import rubico from 'https://unpkg.com/rubico/es.js'",
      position: {
        start: { line: 105, column: 1, offset: 3719 },
        end: { line: 107, column: 4, offset: 3804 },
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
            start: { line: 109, column: 5, offset: 3810 },
            end: { line: 109, column: 24, offset: 3829 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 3806 },
        end: { line: 109, column: 24, offset: 3829 },
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
                    start: { line: 110, column: 4, offset: 3833 },
                    end: { line: 110, column: 30, offset: 3859 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 4, offset: 3833 },
                end: { line: 110, column: 30, offset: 3859 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3830 },
            end: { line: 110, column: 30, offset: 3859 },
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
                    start: { line: 111, column: 4, offset: 3863 },
                    end: { line: 111, column: 30, offset: 3889 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 4, offset: 3863 },
                end: { line: 111, column: 30, offset: 3889 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3860 },
            end: { line: 111, column: 30, offset: 3889 },
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
                    start: { line: 112, column: 4, offset: 3893 },
                    end: { line: 112, column: 31, offset: 3920 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 4, offset: 3893 },
                end: { line: 112, column: 31, offset: 3920 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3890 },
            end: { line: 112, column: 31, offset: 3920 },
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
                    start: { line: 113, column: 4, offset: 3924 },
                    end: { line: 113, column: 28, offset: 3948 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 4, offset: 3924 },
                end: { line: 113, column: 28, offset: 3948 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3921 },
            end: { line: 113, column: 28, offset: 3948 },
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
                    start: { line: 114, column: 4, offset: 3952 },
                    end: { line: 114, column: 32, offset: 3980 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 4, offset: 3952 },
                end: { line: 114, column: 32, offset: 3980 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3949 },
            end: { line: 114, column: 32, offset: 3980 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3830 },
        end: { line: 114, column: 32, offset: 3980 },
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
            start: { line: 116, column: 3, offset: 3984 },
            end: { line: 116, column: 20, offset: 4001 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3982 },
        end: { line: 116, column: 20, offset: 4001 },
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
                        start: { line: 117, column: 5, offset: 4006 },
                        end: { line: 117, column: 71, offset: 4072 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 117, column: 4, offset: 4005 },
                    end: { line: 117, column: 167, offset: 4168 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 4, offset: 4005 },
                end: { line: 117, column: 167, offset: 4168 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 4002 },
            end: { line: 117, column: 167, offset: 4168 },
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
                        start: { line: 118, column: 5, offset: 4173 },
                        end: { line: 118, column: 63, offset: 4231 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 118, column: 4, offset: 4172 },
                    end: { line: 118, column: 152, offset: 4320 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 4, offset: 4172 },
                end: { line: 118, column: 152, offset: 4320 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4169 },
            end: { line: 118, column: 152, offset: 4320 },
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
                        start: { line: 119, column: 5, offset: 4325 },
                        end: { line: 119, column: 77, offset: 4397 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 119, column: 4, offset: 4324 },
                    end: { line: 119, column: 188, offset: 4508 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 119, column: 4, offset: 4324 },
                end: { line: 119, column: 188, offset: 4508 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 4321 },
            end: { line: 119, column: 188, offset: 4508 },
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
                        start: { line: 120, column: 5, offset: 4513 },
                        end: { line: 120, column: 77, offset: 4585 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 120, column: 4, offset: 4512 },
                    end: { line: 120, column: 180, offset: 4688 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 120, column: 4, offset: 4512 },
                end: { line: 120, column: 180, offset: 4688 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 4509 },
            end: { line: 120, column: 180, offset: 4688 },
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
                        start: { line: 121, column: 5, offset: 4693 },
                        end: { line: 121, column: 83, offset: 4771 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 121, column: 4, offset: 4692 },
                    end: { line: 121, column: 191, offset: 4879 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 4, offset: 4692 },
                end: { line: 121, column: 191, offset: 4879 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4689 },
            end: { line: 121, column: 191, offset: 4879 },
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
                        start: { line: 122, column: 5, offset: 4884 },
                        end: { line: 122, column: 66, offset: 4945 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 122, column: 4, offset: 4883 },
                    end: { line: 122, column: 158, offset: 5037 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 4, offset: 4883 },
                end: { line: 122, column: 158, offset: 5037 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4880 },
            end: { line: 122, column: 158, offset: 5037 },
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
                        start: { line: 123, column: 5, offset: 5042 },
                        end: { line: 123, column: 68, offset: 5105 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 123, column: 4, offset: 5041 },
                    end: { line: 123, column: 161, offset: 5198 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 4, offset: 5041 },
                end: { line: 123, column: 161, offset: 5198 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 5038 },
            end: { line: 123, column: 161, offset: 5198 },
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
                        start: { line: 124, column: 5, offset: 5203 },
                        end: { line: 124, column: 16, offset: 5214 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 124, column: 4, offset: 5202 },
                    end: { line: 124, column: 85, offset: 5283 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 4, offset: 5202 },
                end: { line: 124, column: 85, offset: 5283 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 5199 },
            end: { line: 124, column: 85, offset: 5283 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 4002 },
        end: { line: 124, column: 85, offset: 5283 },
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
            start: { line: 126, column: 3, offset: 5287 },
            end: { line: 126, column: 15, offset: 5299 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5285 },
        end: { line: 126, column: 15, offset: 5299 },
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
            start: { line: 127, column: 1, offset: 5300 },
            end: { line: 127, column: 292, offset: 5591 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 5300 },
        end: { line: 127, column: 292, offset: 5591 },
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
            start: { line: 129, column: 1, offset: 5593 },
            end: { line: 129, column: 89, offset: 5681 },
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
                start: { line: 129, column: 90, offset: 5682 },
                end: { line: 129, column: 110, offset: 5702 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 89, offset: 5681 },
            end: { line: 129, column: 160, offset: 5752 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 129, column: 160, offset: 5752 },
            end: { line: 129, column: 205, offset: 5797 },
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
                start: { line: 129, column: 206, offset: 5798 },
                end: { line: 129, column: 217, offset: 5809 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 205, offset: 5797 },
            end: { line: 129, column: 315, offset: 5907 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 129, column: 315, offset: 5907 },
            end: { line: 129, column: 345, offset: 5937 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 5593 },
        end: { line: 129, column: 345, offset: 5937 },
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
            start: { line: 131, column: 3, offset: 5941 },
            end: { line: 131, column: 10, offset: 5948 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 5939 },
        end: { line: 131, column: 10, offset: 5948 },
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
            start: { line: 132, column: 1, offset: 5949 },
            end: { line: 132, column: 11, offset: 5959 },
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
                start: { line: 132, column: 12, offset: 5960 },
                end: { line: 132, column: 24, offset: 5972 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 132, column: 11, offset: 5959 },
            end: { line: 132, column: 86, offset: 6034 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 132, column: 86, offset: 6034 },
            end: { line: 132, column: 87, offset: 6035 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 5949 },
        end: { line: 132, column: 87, offset: 6035 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 133, column: 1, offset: 6036 }
  }
}
