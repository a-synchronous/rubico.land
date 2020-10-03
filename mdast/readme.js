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
        start: { line: 41, column: 1, offset: 1707 },
        end: { line: 50, column: 4, offset: 1906 },
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
            start: { line: 52, column: 1, offset: 1908 },
            end: { line: 52, column: 149, offset: 2056 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1908 },
        end: { line: 52, column: 149, offset: 2056 },
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
        start: { line: 54, column: 1, offset: 2058 },
        end: { line: 76, column: 4, offset: 2823 },
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
            start: { line: 78, column: 1, offset: 2825 },
            end: { line: 78, column: 123, offset: 2947 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2825 },
        end: { line: 78, column: 123, offset: 2947 },
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
                    start: { line: 80, column: 4, offset: 2952 },
                    end: { line: 80, column: 9, offset: 2957 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 80, column: 9, offset: 2957 },
                    end: { line: 80, column: 48, offset: 2996 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 80, column: 4, offset: 2952 },
                end: { line: 80, column: 48, offset: 2996 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 80, column: 1, offset: 2949 },
            end: { line: 80, column: 48, offset: 2996 },
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
                    start: { line: 81, column: 4, offset: 3000 },
                    end: { line: 81, column: 14, offset: 3010 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 81, column: 14, offset: 3010 },
                    end: { line: 81, column: 78, offset: 3074 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3000 },
                end: { line: 81, column: 78, offset: 3074 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 81, column: 1, offset: 2997 },
            end: { line: 81, column: 78, offset: 3074 },
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
                    start: { line: 82, column: 4, offset: 3078 },
                    end: { line: 82, column: 16, offset: 3090 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 82, column: 16, offset: 3090 },
                    end: { line: 82, column: 51, offset: 3125 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3078 },
                end: { line: 82, column: 51, offset: 3125 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 82, column: 1, offset: 3075 },
            end: { line: 82, column: 51, offset: 3125 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2949 },
        end: { line: 82, column: 51, offset: 3125 },
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
            start: { line: 84, column: 1, offset: 3127 },
            end: { line: 84, column: 36, offset: 3162 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 84, column: 36, offset: 3162 },
            end: { line: 84, column: 46, offset: 3172 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 84, column: 46, offset: 3172 },
            end: { line: 84, column: 47, offset: 3173 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3127 },
        end: { line: 84, column: 47, offset: 3173 },
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
            start: { line: 86, column: 3, offset: 3177 },
            end: { line: 86, column: 18, offset: 3192 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3175 },
        end: { line: 86, column: 18, offset: 3192 },
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
                        start: { line: 87, column: 6, offset: 3198 },
                        end: { line: 87, column: 24, offset: 3216 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 87, column: 5, offset: 3197 },
                    end: { line: 87, column: 50, offset: 3242 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 87, column: 5, offset: 3197 },
                end: { line: 87, column: 50, offset: 3242 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 87, column: 1, offset: 3193 },
            end: { line: 87, column: 50, offset: 3242 },
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
                        start: { line: 88, column: 6, offset: 3248 },
                        end: { line: 88, column: 19, offset: 3261 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 88, column: 5, offset: 3247 },
                    end: { line: 88, column: 46, offset: 3288 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 88, column: 5, offset: 3247 },
                end: { line: 88, column: 46, offset: 3288 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 88, column: 1, offset: 3243 },
            end: { line: 88, column: 46, offset: 3288 },
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
                    start: { line: 89, column: 5, offset: 3293 },
                    end: { line: 89, column: 28, offset: 3316 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 89, column: 5, offset: 3293 },
                end: { line: 89, column: 28, offset: 3316 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 89, column: 1, offset: 3289 },
            end: { line: 89, column: 28, offset: 3316 },
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
                    start: { line: 90, column: 5, offset: 3321 },
                    end: { line: 90, column: 22, offset: 3338 },
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
                        start: { line: 90, column: 23, offset: 3339 },
                        end: { line: 90, column: 51, offset: 3367 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 90, column: 22, offset: 3338 },
                    end: { line: 90, column: 72, offset: 3388 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 90, column: 5, offset: 3321 },
                end: { line: 90, column: 72, offset: 3388 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 90, column: 1, offset: 3317 },
            end: { line: 90, column: 72, offset: 3388 },
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
                        start: { line: 91, column: 6, offset: 3394 },
                        end: { line: 91, column: 22, offset: 3410 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 91, column: 5, offset: 3393 },
                    end: { line: 91, column: 120, offset: 3508 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 91, column: 5, offset: 3393 },
                end: { line: 91, column: 120, offset: 3508 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 91, column: 1, offset: 3389 },
            end: { line: 91, column: 120, offset: 3508 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3193 },
        end: { line: 91, column: 120, offset: 3508 },
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
            start: { line: 93, column: 3, offset: 3512 },
            end: { line: 93, column: 15, offset: 3524 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3510 },
        end: { line: 93, column: 15, offset: 3524 },
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
            start: { line: 94, column: 1, offset: 3525 },
            end: { line: 94, column: 6, offset: 3530 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 94, column: 6, offset: 3530 },
            end: { line: 94, column: 11, offset: 3535 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3525 },
        end: { line: 94, column: 11, offset: 3535 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 95, column: 1, offset: 3536 },
        end: { line: 97, column: 4, offset: 3560 },
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
            start: { line: 99, column: 1, offset: 3562 },
            end: { line: 99, column: 24, offset: 3585 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 99, column: 24, offset: 3585 },
            end: { line: 99, column: 32, offset: 3593 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3562 },
        end: { line: 99, column: 32, offset: 3593 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: null,
      value: '<script src="https://unpkg.com/rubico"></script>',
      position: {
        start: { line: 100, column: 1, offset: 3594 },
        end: { line: 102, column: 4, offset: 3654 },
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
            start: { line: 104, column: 1, offset: 3656 },
            end: { line: 104, column: 15, offset: 3670 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 3656 },
        end: { line: 104, column: 15, offset: 3670 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "import rubico from 'https://unpkg.com/rubico/es.js'",
      position: {
        start: { line: 105, column: 1, offset: 3671 },
        end: { line: 107, column: 4, offset: 3740 },
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
            start: { line: 109, column: 5, offset: 3746 },
            end: { line: 109, column: 24, offset: 3765 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 3742 },
        end: { line: 109, column: 24, offset: 3765 },
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
                    start: { line: 110, column: 4, offset: 3769 },
                    end: { line: 110, column: 30, offset: 3795 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 4, offset: 3769 },
                end: { line: 110, column: 30, offset: 3795 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3766 },
            end: { line: 110, column: 30, offset: 3795 },
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
                    start: { line: 111, column: 4, offset: 3799 },
                    end: { line: 111, column: 30, offset: 3825 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 4, offset: 3799 },
                end: { line: 111, column: 30, offset: 3825 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3796 },
            end: { line: 111, column: 30, offset: 3825 },
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
                    start: { line: 112, column: 4, offset: 3829 },
                    end: { line: 112, column: 31, offset: 3856 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 4, offset: 3829 },
                end: { line: 112, column: 31, offset: 3856 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3826 },
            end: { line: 112, column: 31, offset: 3856 },
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
                    start: { line: 113, column: 4, offset: 3860 },
                    end: { line: 113, column: 28, offset: 3884 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 4, offset: 3860 },
                end: { line: 113, column: 28, offset: 3884 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3857 },
            end: { line: 113, column: 28, offset: 3884 },
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
                    start: { line: 114, column: 4, offset: 3888 },
                    end: { line: 114, column: 32, offset: 3916 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 4, offset: 3888 },
                end: { line: 114, column: 32, offset: 3916 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3885 },
            end: { line: 114, column: 32, offset: 3916 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3766 },
        end: { line: 114, column: 32, offset: 3916 },
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
            start: { line: 116, column: 3, offset: 3920 },
            end: { line: 116, column: 20, offset: 3937 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3918 },
        end: { line: 116, column: 20, offset: 3937 },
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
                        start: { line: 117, column: 5, offset: 3942 },
                        end: { line: 117, column: 71, offset: 4008 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 117, column: 4, offset: 3941 },
                    end: { line: 117, column: 167, offset: 4104 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 4, offset: 3941 },
                end: { line: 117, column: 167, offset: 4104 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 3938 },
            end: { line: 117, column: 167, offset: 4104 },
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
                        start: { line: 118, column: 5, offset: 4109 },
                        end: { line: 118, column: 63, offset: 4167 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 118, column: 4, offset: 4108 },
                    end: { line: 118, column: 152, offset: 4256 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 4, offset: 4108 },
                end: { line: 118, column: 152, offset: 4256 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4105 },
            end: { line: 118, column: 152, offset: 4256 },
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
                        start: { line: 119, column: 5, offset: 4261 },
                        end: { line: 119, column: 77, offset: 4333 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 119, column: 4, offset: 4260 },
                    end: { line: 119, column: 188, offset: 4444 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 119, column: 4, offset: 4260 },
                end: { line: 119, column: 188, offset: 4444 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 4257 },
            end: { line: 119, column: 188, offset: 4444 },
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
                        start: { line: 120, column: 5, offset: 4449 },
                        end: { line: 120, column: 77, offset: 4521 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 120, column: 4, offset: 4448 },
                    end: { line: 120, column: 180, offset: 4624 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 120, column: 4, offset: 4448 },
                end: { line: 120, column: 180, offset: 4624 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 4445 },
            end: { line: 120, column: 180, offset: 4624 },
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
                        start: { line: 121, column: 5, offset: 4629 },
                        end: { line: 121, column: 83, offset: 4707 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 121, column: 4, offset: 4628 },
                    end: { line: 121, column: 191, offset: 4815 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 4, offset: 4628 },
                end: { line: 121, column: 191, offset: 4815 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4625 },
            end: { line: 121, column: 191, offset: 4815 },
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
                        start: { line: 122, column: 5, offset: 4820 },
                        end: { line: 122, column: 66, offset: 4881 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 122, column: 4, offset: 4819 },
                    end: { line: 122, column: 158, offset: 4973 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 4, offset: 4819 },
                end: { line: 122, column: 158, offset: 4973 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4816 },
            end: { line: 122, column: 158, offset: 4973 },
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
                        start: { line: 123, column: 5, offset: 4978 },
                        end: { line: 123, column: 68, offset: 5041 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 123, column: 4, offset: 4977 },
                    end: { line: 123, column: 161, offset: 5134 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 4, offset: 4977 },
                end: { line: 123, column: 161, offset: 5134 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4974 },
            end: { line: 123, column: 161, offset: 5134 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 3938 },
        end: { line: 123, column: 161, offset: 5134 },
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
            start: { line: 125, column: 3, offset: 5138 },
            end: { line: 125, column: 15, offset: 5150 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 5136 },
        end: { line: 125, column: 15, offset: 5150 },
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
            start: { line: 126, column: 1, offset: 5151 },
            end: { line: 126, column: 292, offset: 5442 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5151 },
        end: { line: 126, column: 292, offset: 5442 },
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
            start: { line: 128, column: 1, offset: 5444 },
            end: { line: 128, column: 89, offset: 5532 },
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
                start: { line: 128, column: 90, offset: 5533 },
                end: { line: 128, column: 110, offset: 5553 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 89, offset: 5532 },
            end: { line: 128, column: 160, offset: 5603 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 128, column: 160, offset: 5603 },
            end: { line: 128, column: 205, offset: 5648 },
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
                start: { line: 128, column: 206, offset: 5649 },
                end: { line: 128, column: 217, offset: 5660 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 205, offset: 5648 },
            end: { line: 128, column: 315, offset: 5758 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 128, column: 315, offset: 5758 },
            end: { line: 128, column: 345, offset: 5788 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 5444 },
        end: { line: 128, column: 345, offset: 5788 },
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
            start: { line: 130, column: 3, offset: 5792 },
            end: { line: 130, column: 10, offset: 5799 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 5790 },
        end: { line: 130, column: 10, offset: 5799 },
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
            start: { line: 131, column: 1, offset: 5800 },
            end: { line: 131, column: 11, offset: 5810 },
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
                start: { line: 131, column: 12, offset: 5811 },
                end: { line: 131, column: 24, offset: 5823 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 131, column: 11, offset: 5810 },
            end: { line: 131, column: 86, offset: 5885 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 131, column: 86, offset: 5885 },
            end: { line: 131, column: 87, offset: 5886 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 5800 },
        end: { line: 131, column: 87, offset: 5886 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 132, column: 1, offset: 5887 }
  }
}
