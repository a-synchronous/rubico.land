export default {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the rubico tour. This tour covers high level concepts and provides runnable and editable code examples.',
          position: {
            start: { line: 1, column: 1, offset: 0 },
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
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Table of Contents',
          position: {
            start: { line: 3, column: 3, offset: 118 },
            end: { line: 3, column: 20, offset: 135 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 116 },
        end: { line: 3, column: 20, offset: 135 },
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
                  url: '#a-synchrony',
                  children: [
                    {
                      type: 'text',
                      value: '[a]synchrony',
                      position: {
                        start: { line: 5, column: 6, offset: 142 },
                        end: { line: 5, column: 18, offset: 154 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 5, column: 5, offset: 141 },
                    end: { line: 5, column: 33, offset: 169 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 5, column: 5, offset: 141 },
                end: { line: 5, column: 33, offset: 169 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 137 },
            end: { line: 5, column: 33, offset: 169 },
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
                  url: '#function-composition',
                  children: [
                    {
                      type: 'text',
                      value: 'Function Composition',
                      position: {
                        start: { line: 6, column: 6, offset: 175 },
                        end: { line: 6, column: 26, offset: 195 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 6, column: 5, offset: 174 },
                    end: { line: 6, column: 50, offset: 219 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 6, column: 5, offset: 174 },
                end: { line: 6, column: 50, offset: 219 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 170 },
            end: { line: 6, column: 50, offset: 219 },
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
                  url: '#object-composition',
                  children: [
                    {
                      type: 'text',
                      value: 'Object Composition',
                      position: {
                        start: { line: 7, column: 6, offset: 225 },
                        end: { line: 7, column: 24, offset: 243 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 7, column: 5, offset: 224 },
                    end: { line: 7, column: 46, offset: 265 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 7, column: 5, offset: 224 },
                end: { line: 7, column: 46, offset: 265 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 220 },
            end: { line: 7, column: 46, offset: 265 },
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
                  url: '#polymorphism',
                  children: [
                    {
                      type: 'text',
                      value: 'Polymorphism',
                      position: {
                        start: { line: 8, column: 6, offset: 271 },
                        end: { line: 8, column: 18, offset: 283 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 8, column: 5, offset: 270 },
                    end: { line: 8, column: 34, offset: 299 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 8, column: 5, offset: 270 },
                end: { line: 8, column: 34, offset: 299 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 266 },
            end: { line: 8, column: 34, offset: 299 },
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
                  url: '#compositional-control-flow',
                  children: [
                    {
                      type: 'text',
                      value: 'Compositional Control Flow',
                      position: {
                        start: { line: 9, column: 6, offset: 305 },
                        end: { line: 9, column: 32, offset: 331 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 9, column: 5, offset: 304 },
                    end: { line: 9, column: 62, offset: 361 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 9, column: 5, offset: 304 },
                end: { line: 9, column: 62, offset: 361 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 300 },
            end: { line: 9, column: 62, offset: 361 },
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
                  url: '#tryer-catcher-error-handling',
                  children: [
                    {
                      type: 'text',
                      value: 'Tryer-Catcher Error Handling',
                      position: {
                        start: { line: 10, column: 6, offset: 367 },
                        end: { line: 10, column: 34, offset: 395 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 10, column: 5, offset: 366 },
                    end: { line: 10, column: 66, offset: 427 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 10, column: 5, offset: 366 },
                end: { line: 10, column: 66, offset: 427 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 362 },
            end: { line: 10, column: 66, offset: 427 },
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
                  url: '#transducers',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducers',
                      position: {
                        start: { line: 11, column: 6, offset: 433 },
                        end: { line: 11, column: 17, offset: 444 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 11, column: 5, offset: 432 },
                    end: { line: 11, column: 32, offset: 459 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 11, column: 5, offset: 432 },
                end: { line: 11, column: 32, offset: 459 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 428 },
            end: { line: 11, column: 32, offset: 459 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 137 },
        end: { line: 11, column: 32, offset: 459 },
        indent: [ 1, 1, 1, 1, 1, 1 ]
      }
    },
    {
      type: 'heading',
      depth: 1,
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
                start: { line: 13, column: 4, offset: 464 },
                end: { line: 13, column: 5, offset: 465 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 13, column: 3, offset: 463 },
            end: { line: 13, column: 6, offset: 466 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 13, column: 6, offset: 466 },
            end: { line: 13, column: 15, offset: 475 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 461 },
        end: { line: 13, column: 15, offset: 475 },
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
              value: 'Stop worrying about Promise handling',
              position: {
                start: { line: 14, column: 3, offset: 478 },
                end: { line: 14, column: 39, offset: 514 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 1, offset: 476 },
            end: { line: 14, column: 41, offset: 516 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 14, column: 41, offset: 516 },
            end: { line: 14, column: 127, offset: 602 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 14, column: 127, offset: 602 },
            end: { line: 14, column: 132, offset: 607 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 14, column: 132, offset: 607 },
            end: { line: 14, column: 276, offset: 751 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 14, column: 276, offset: 751 },
            end: { line: 14, column: 289, offset: 764 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 14, column: 289, offset: 764 },
            end: { line: 14, column: 313, offset: 788 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/rubico-a-synchrnous-functional-syntax-motivation-20hf',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 14, column: 314, offset: 789 },
                end: { line: 14, column: 318, offset: 793 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 313, offset: 788 },
            end: { line: 14, column: 399, offset: 874 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 14, column: 399, offset: 874 },
            end: { line: 14, column: 400, offset: 875 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 476 },
        end: { line: 14, column: 400, offset: 875 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const getTodo = id => fetch('https://jsonplaceholder.typicode.com/todos/' + id)\n" +
        '\n' +
        'map(pipe([\n' +
        '  getTodo,\n' +
        '  res => res.json(),\n' +
        '  console.log,\n' +
        ']))([1, 2, 3, 4, 5]) // try adding a 6',
      position: {
        start: { line: 16, column: 1, offset: 877 },
        end: { line: 24, column: 4, offset: 1085 },
        indent: [
          1, 1, 1, 1,
          1, 1, 1, 1
        ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Function Composition',
          position: {
            start: { line: 26, column: 3, offset: 1089 },
            end: { line: 26, column: 23, offset: 1109 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 1087 },
        end: { line: 26, column: 23, offset: 1109 },
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
              value: 'Reduce code complexity',
              position: {
                start: { line: 27, column: 3, offset: 1112 },
                end: { line: 27, column: 25, offset: 1134 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 27, column: 1, offset: 1110 },
            end: { line: 27, column: 27, offset: 1136 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 27, column: 27, offset: 1136 },
            end: { line: 27, column: 64, offset: 1173 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 64, offset: 1173 },
            end: { line: 27, column: 70, offset: 1179 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 27, column: 70, offset: 1179 },
            end: { line: 27, column: 92, offset: 1201 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 92, offset: 1201 },
            end: { line: 27, column: 98, offset: 1207 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application's components as smaller, more specialized functions.",
          position: {
            start: { line: 27, column: 98, offset: 1207 },
            end: { line: 27, column: 337, offset: 1446 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1110 },
        end: { line: 27, column: 337, offset: 1446 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const square = number => number ** 2\n' +
        '\n' +
        'const isOdd = number => number % 2 === 1\n' +
        '\n' +
        'const add = (a, b) => a + b\n' +
        '\n' +
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '  // reduce(add), // try uncommenting this reducing function\n' +
        '])\n' +
        '\n' +
        'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        "console.log('input:', numbers) // [1, 2, 3, 4, 5]\n" +
        "console.log('output:', squaredOdds(numbers)) // [1, 9, 25]",
      position: {
        start: { line: 29, column: 1, offset: 1448 },
        end: { line: 46, column: 4, offset: 1853 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
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
          value: 'Object Composition',
          position: {
            start: { line: 48, column: 3, offset: 1857 },
            end: { line: 48, column: 21, offset: 1875 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1855 },
        end: { line: 48, column: 21, offset: 1875 },
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
              value: 'Declaratively transform objects',
              position: {
                start: { line: 49, column: 3, offset: 1878 },
                end: { line: 49, column: 34, offset: 1909 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 49, column: 1, offset: 1876 },
            end: { line: 49, column: 36, offset: 1911 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there may be times when you'll want to extend an object in a pipeline with new properties, or construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 49, column: 36, offset: 1911 },
            end: { line: 49, column: 235, offset: 2110 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 49, column: 235, offset: 2110 },
            end: { line: 49, column: 240, offset: 2115 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 49, column: 240, offset: 2115 },
            end: { line: 49, column: 278, offset: 2153 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 49, column: 278, offset: 2153 },
            end: { line: 49, column: 284, offset: 2159 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 49, column: 284, offset: 2159 },
            end: { line: 49, column: 288, offset: 2163 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 49, column: 288, offset: 2163 },
            end: { line: 49, column: 296, offset: 2171 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 49, column: 296, offset: 2171 },
            end: { line: 49, column: 297, offset: 2172 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1876 },
        end: { line: 49, column: 297, offset: 2172 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const identity = value => value\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const double = number => number * 2\n' +
        '\n' +
        'const add = (a, b) => a + b\n' +
        '\n' +
        'const doMaths = pipe([\n' +
        '  fork({\n' +
        '    original: identity,\n' +
        '    doubled: double,\n' +
        '    squared: square,\n' +
        '  }),\n' +
        '  /* try uncommenting this assignment\n' +
        '  assign({\n' +
        '    total: pipe([\n' +
        '      fork([\n' +
        "        get('original'),\n" +
        "        get('doubled'),\n" +
        "        get('squared'),\n" +
        '      ]),\n' +
        '      reduce(add),\n' +
        '    ]),\n' +
        '  }),\n' +
        '  */\n' +
        '])\n' +
        '\n' +
        "console.log('maths on 3:', doMaths(3)) // { original: 3, doubled: 6, squared: 9 }",
      position: {
        start: { line: 51, column: 1, offset: 2174 },
        end: { line: 81, column: 4, offset: 2732 },
        indent: [
          1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1,
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
          value: 'Polymorphism',
          position: {
            start: { line: 83, column: 3, offset: 2736 },
            end: { line: 83, column: 15, offset: 2748 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2734 },
        end: { line: 83, column: 15, offset: 2748 },
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
              value: 'Act on any collection',
              position: {
                start: { line: 84, column: 3, offset: 2751 },
                end: { line: 84, column: 24, offset: 2772 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 84, column: 1, offset: 2749 },
            end: { line: 84, column: 26, offset: 2774 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 84, column: 26, offset: 2774 },
            end: { line: 84, column: 64, offset: 2812 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 84, column: 64, offset: 2812 },
            end: { line: 84, column: 69, offset: 2817 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 84, column: 69, offset: 2817 },
            end: { line: 84, column: 302, offset: 3050 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2749 },
        end: { line: 84, column: 302, offset: 3050 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const square = number => number ** 2\n' +
        '\n' +
        'const iterables = [\n' +
        '  [1, 2, 3, 4, 5],\n' +
        "  '12345',\n" +
        '  new Set([1, 2, 3, 4, 5]),\n' +
        '  new Uint8Array([1, 2, 3, 4, 5]),\n' +
        '  { a: 1, b: 2, c: 3, d: 4, e: 5 },\n' +
        "  new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]),\n" +
        ']\n' +
        '\n' +
        'iterables.forEach(pipe([map(square), console.log]))\n' +
        '// [1, 2, 3, 4, 5]\n' +
        "// '1491625'\n" +
        '// Set { 1, 4, 9, 16, 25 }\n' +
        '// Uint8Array [1, 4, 9, 16, 25]\n' +
        '// { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
        "// Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }",
      position: {
        start: { line: 86, column: 1, offset: 3052 },
        end: { line: 105, column: 4, offset: 3578 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Compositional Control Flow',
          position: {
            start: { line: 107, column: 3, offset: 3582 },
            end: { line: 107, column: 29, offset: 3608 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3580 },
        end: { line: 107, column: 29, offset: 3608 },
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
              value: 'Create declarative, SQL-like logical expressions',
              position: {
                start: { line: 108, column: 3, offset: 3611 },
                end: { line: 108, column: 51, offset: 3659 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3609 },
            end: { line: 108, column: 53, offset: 3661 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 108, column: 53, offset: 3661 },
            end: { line: 108, column: 196, offset: 3804 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3609 },
        end: { line: 108, column: 196, offset: 3804 },
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
                  value: 'Conditional (Ternary), ',
                  position: {
                    start: { line: 110, column: 3, offset: 3808 },
                    end: { line: 110, column: 26, offset: 3831 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3831 },
                    end: { line: 110, column: 37, offset: 3842 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3842 },
                    end: { line: 110, column: 40, offset: 3845 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3845 },
                    end: { line: 110, column: 63, offset: 3868 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3808 },
                end: { line: 110, column: 63, offset: 3868 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3806 },
            end: { line: 110, column: 63, offset: 3868 },
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
                  value: 'Logical And, ',
                  position: {
                    start: { line: 111, column: 3, offset: 3871 },
                    end: { line: 111, column: 16, offset: 3884 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3884 },
                    end: { line: 111, column: 24, offset: 3892 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3892 },
                    end: { line: 111, column: 27, offset: 3895 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3895 },
                    end: { line: 111, column: 40, offset: 3908 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3871 },
                end: { line: 111, column: 40, offset: 3908 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3869 },
            end: { line: 111, column: 40, offset: 3908 },
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
                  value: 'Logical Or, ',
                  position: {
                    start: { line: 112, column: 3, offset: 3911 },
                    end: { line: 112, column: 15, offset: 3923 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3923 },
                    end: { line: 112, column: 23, offset: 3931 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3931 },
                    end: { line: 112, column: 26, offset: 3934 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3934 },
                    end: { line: 112, column: 38, offset: 3946 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3911 },
                end: { line: 112, column: 38, offset: 3946 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3909 },
            end: { line: 112, column: 38, offset: 3946 },
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
                  value: 'Logical Not, ',
                  position: {
                    start: { line: 113, column: 3, offset: 3949 },
                    end: { line: 113, column: 16, offset: 3962 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 3962 },
                    end: { line: 113, column: 20, offset: 3966 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 3966 },
                    end: { line: 113, column: 23, offset: 3969 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 3969 },
                    end: { line: 113, column: 31, offset: 3977 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3949 },
                end: { line: 113, column: 31, offset: 3977 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3947 },
            end: { line: 113, column: 31, offset: 3977 },
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
                  value: 'Identity, ',
                  position: {
                    start: { line: 114, column: 3, offset: 3980 },
                    end: { line: 114, column: 13, offset: 3990 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 3990 },
                    end: { line: 114, column: 22, offset: 3999 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 3999 },
                    end: { line: 114, column: 25, offset: 4002 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 4002 },
                    end: { line: 114, column: 35, offset: 4012 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3980 },
                end: { line: 114, column: 35, offset: 4012 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3978 },
            end: { line: 114, column: 35, offset: 4012 },
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
                  value: 'Greater Than, ',
                  position: {
                    start: { line: 115, column: 3, offset: 4015 },
                    end: { line: 115, column: 17, offset: 4029 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 4029 },
                    end: { line: 115, column: 24, offset: 4036 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 4036 },
                    end: { line: 115, column: 27, offset: 4039 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 4039 },
                    end: { line: 115, column: 37, offset: 4049 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 4015 },
                end: { line: 115, column: 37, offset: 4049 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 4013 },
            end: { line: 115, column: 37, offset: 4049 },
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
                  value: 'Less Than, ',
                  position: {
                    start: { line: 116, column: 3, offset: 4052 },
                    end: { line: 116, column: 14, offset: 4063 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 4063 },
                    end: { line: 116, column: 21, offset: 4070 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 4070 },
                    end: { line: 116, column: 24, offset: 4073 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 4073 },
                    end: { line: 116, column: 34, offset: 4083 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 4052 },
                end: { line: 116, column: 34, offset: 4083 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 4050 },
            end: { line: 116, column: 34, offset: 4083 },
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
                  value: 'Greater Than or Equal, ',
                  position: {
                    start: { line: 117, column: 3, offset: 4086 },
                    end: { line: 117, column: 26, offset: 4109 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 4109 },
                    end: { line: 117, column: 34, offset: 4117 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 4117 },
                    end: { line: 117, column: 37, offset: 4120 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 4120 },
                    end: { line: 117, column: 48, offset: 4131 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 4086 },
                end: { line: 117, column: 48, offset: 4131 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 4084 },
            end: { line: 117, column: 48, offset: 4131 },
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
                  value: 'Less Than or Equal, ',
                  position: {
                    start: { line: 118, column: 3, offset: 4134 },
                    end: { line: 118, column: 23, offset: 4154 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 4154 },
                    end: { line: 118, column: 31, offset: 4162 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4162 },
                    end: { line: 118, column: 34, offset: 4165 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4165 },
                    end: { line: 118, column: 45, offset: 4176 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 4134 },
                end: { line: 118, column: 45, offset: 4176 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4132 },
            end: { line: 118, column: 45, offset: 4176 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3806 },
        end: { line: 118, column: 45, offset: 4176 },
        indent: [
          1, 1, 1, 1,
          1, 1, 1, 1
        ]
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const hasFlag = flag => array => array.includes(flag)\n' +
        '\n' +
        'const log = message => () => console.log(message)\n' +
        '\n' +
        'const cli = switchCase([\n' +
        '  or([\n' +
        "    hasFlag('-h'),\n" +
        "    hasFlag('--help'),\n" +
        "  ]), log('USAGE: ...'),\n" +
        '  or([\n' +
        "    hasFlag('-v'),\n" +
        "    hasFlag('--version'),\n" +
        "  ]), log('v0.0.0'),\n" +
        "  log('USAGE: ...'),\n" +
        '])\n' +
        '\n' +
        "cli(['-h']) // USAGE: ...\n" +
        "cli(['--version']) // v0.0.0\n" +
        "cli(['???']) // USAGE: ...",
      position: {
        start: { line: 120, column: 1, offset: 4178 },
        end: { line: 140, column: 4, offset: 4593 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Tryer-Catcher Error Handling',
          position: {
            start: { line: 142, column: 3, offset: 4597 },
            end: { line: 142, column: 31, offset: 4625 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4595 },
        end: { line: 142, column: 31, offset: 4625 },
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
              value: 'Reliably catch errors',
              position: {
                start: { line: 143, column: 3, offset: 4628 },
                end: { line: 143, column: 24, offset: 4649 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4626 },
            end: { line: 143, column: 26, offset: 4651 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 143, column: 26, offset: 4651 },
            end: { line: 143, column: 62, offset: 4687 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 143, column: 62, offset: 4687 },
            end: { line: 143, column: 72, offset: 4697 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 72, offset: 4697 },
            end: { line: 143, column: 73, offset: 4698 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4626 },
        end: { line: 143, column: 73, offset: 4698 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Note: when composing, ensure return values from both the tryer and the catcher are the same type.',
          position: {
            start: { line: 145, column: 1, offset: 4700 },
            end: { line: 145, column: 98, offset: 4797 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4700 },
        end: { line: 145, column: 98, offset: 4797 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log(\n' +
        '  tryCatch(\n' +
        '    JSON.parse,\n' +
        '    error => ({ error, timestamp: Date.now() })\n' +
        "  )('hello')\n" +
        ')\n' +
        '// {\n' +
        '//   error: SyntaxError: Unexpected token h in JSON at position 0,\n' +
        '//   timestamp: number,\n' +
        '// }',
      position: {
        start: { line: 147, column: 1, offset: 4799 },
        end: { line: 158, column: 4, offset: 5034 },
        indent: [
          1, 1, 1, 1, 1,
          1, 1, 1, 1, 1,
          1
        ]
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Transducers',
          position: {
            start: { line: 160, column: 3, offset: 5038 },
            end: { line: 160, column: 14, offset: 5049 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 5036 },
        end: { line: 160, column: 14, offset: 5049 },
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
              value: 'Wrangle large or infinite streams of data',
              position: {
                start: { line: 161, column: 3, offset: 5052 },
                end: { line: 161, column: 44, offset: 5093 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 1, offset: 5050 },
            end: { line: 161, column: 46, offset: 5095 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 161, column: 46, offset: 5095 },
            end: { line: 161, column: 126, offset: 5175 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 161, column: 126, offset: 5175 },
            end: { line: 161, column: 131, offset: 5180 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 161, column: 131, offset: 5180 },
            end: { line: 161, column: 133, offset: 5182 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 161, column: 133, offset: 5182 },
            end: { line: 161, column: 141, offset: 5190 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 161, column: 141, offset: 5190 },
            end: { line: 161, column: 146, offset: 5195 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 161, column: 146, offset: 5195 },
            end: { line: 161, column: 155, offset: 5204 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 161, column: 155, offset: 5204 },
            end: { line: 161, column: 180, offset: 5229 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 161, column: 180, offset: 5229 },
            end: { line: 161, column: 188, offset: 5237 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 161, column: 188, offset: 5237 },
            end: { line: 161, column: 192, offset: 5241 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 161, column: 192, offset: 5241 },
            end: { line: 161, column: 203, offset: 5252 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 161, column: 203, offset: 5252 },
            end: { line: 161, column: 337, offset: 5386 },
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
              value: 'here',
              position: {
                start: { line: 161, column: 338, offset: 5387 },
                end: { line: 161, column: 342, offset: 5391 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 337, offset: 5386 },
            end: { line: 161, column: 411, offset: 5460 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 411, offset: 5460 },
            end: { line: 161, column: 412, offset: 5461 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 5050 },
        end: { line: 161, column: 412, offset: 5461 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: '// length number => string => Generator<string>\n' +
        'const generateSegmentsOfLength = length => function*(string) {\n' +
        '  for (let i = 0; i < string.length; i += length) {\n' +
        '    yield string.slice(i, i + length)\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// bigint -> string\n' +
        'const toBinaryString = value => value.toString(2)\n' +
        '\n' +
        '// string -> number\n' +
        'const toBinaryInt = value => parseInt(value, 2)\n' +
        '\n' +
        '// decimal string -> notes string\n' +
        'const decimalStringToNotes = pipe([\n' +
        '  BigInt,\n' +
        '  toBinaryString,\n' +
        '  generateSegmentsOfLength(7),\n' +
        '  transform(map(pipe([\n' +
        '    toBinaryInt,\n' +
        '    String.fromCharCode,\n' +
        "  ])), ''), // map(pipe([...])) is a transducer consumed by transform\n" +
        '])\n' +
        '\n' +
        'console.log(\n' +
        "  decimalStringToNotes('16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963')\n" +
        ') // CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC',
      position: {
        start: { line: 163, column: 1, offset: 5463 },
        end: { line: 191, column: 4, offset: 6286 },
        indent: [
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'That concludes the rubico tour. From here, you could get started with rubico in a project (',
          position: {
            start: { line: 193, column: 1, offset: 6288 },
            end: { line: 193, column: 92, offset: 6379 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: '/#installation',
          children: [
            {
              type: 'text',
              value: 'installation',
              position: {
                start: { line: 193, column: 93, offset: 6380 },
                end: { line: 193, column: 105, offset: 6392 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 193, column: 92, offset: 6379 },
            end: { line: 193, column: 122, offset: 6409 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 193, column: 122, offset: 6409 },
            end: { line: 193, column: 144, offset: 6431 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs',
          children: [
            {
              type: 'text',
              value: 'docs',
              position: {
                start: { line: 193, column: 145, offset: 6432 },
                end: { line: 193, column: 149, offset: 6436 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 193, column: 144, offset: 6431 },
            end: { line: 193, column: 157, offset: 6444 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 193, column: 157, offset: 6444 },
            end: { line: 193, column: 158, offset: 6445 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 6288 },
        end: { line: 193, column: 158, offset: 6445 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 194, column: 1, offset: 6446 }
  }
}
