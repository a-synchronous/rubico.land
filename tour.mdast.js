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
              value: 'Built-in Promise handling',
              position: {
                start: { line: 14, column: 3, offset: 478 },
                end: { line: 14, column: 28, offset: 503 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 1, offset: 476 },
            end: { line: 14, column: 30, offset: 505 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 14, column: 30, offset: 505 },
            end: { line: 14, column: 116, offset: 591 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 14, column: 116, offset: 591 },
            end: { line: 14, column: 121, offset: 596 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). All rubico methods handle the promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 14, column: 121, offset: 596 },
            end: { line: 14, column: 269, offset: 744 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 14, column: 269, offset: 744 },
            end: { line: 14, column: 282, offset: 757 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 14, column: 282, offset: 757 },
            end: { line: 14, column: 306, offset: 781 },
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
                start: { line: 14, column: 307, offset: 782 },
                end: { line: 14, column: 311, offset: 786 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 306, offset: 781 },
            end: { line: 14, column: 392, offset: 867 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 14, column: 392, offset: 867 },
            end: { line: 14, column: 393, offset: 868 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 476 },
        end: { line: 14, column: 393, offset: 868 },
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
        start: { line: 16, column: 1, offset: 870 },
        end: { line: 24, column: 4, offset: 1078 },
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
            start: { line: 26, column: 3, offset: 1082 },
            end: { line: 26, column: 23, offset: 1102 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 1080 },
        end: { line: 26, column: 23, offset: 1102 },
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
                start: { line: 27, column: 3, offset: 1105 },
                end: { line: 27, column: 25, offset: 1127 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 27, column: 1, offset: 1103 },
            end: { line: 27, column: 27, offset: 1129 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 27, column: 27, offset: 1129 },
            end: { line: 27, column: 64, offset: 1166 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 64, offset: 1166 },
            end: { line: 27, column: 70, offset: 1172 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 27, column: 70, offset: 1172 },
            end: { line: 27, column: 92, offset: 1194 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 92, offset: 1194 },
            end: { line: 27, column: 98, offset: 1200 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application's components as smaller, more specialized functions.",
          position: {
            start: { line: 27, column: 98, offset: 1200 },
            end: { line: 27, column: 337, offset: 1439 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1103 },
        end: { line: 27, column: 337, offset: 1439 },
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
        start: { line: 29, column: 1, offset: 1441 },
        end: { line: 46, column: 4, offset: 1846 },
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
            start: { line: 48, column: 3, offset: 1850 },
            end: { line: 48, column: 21, offset: 1868 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1848 },
        end: { line: 48, column: 21, offset: 1868 },
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
                start: { line: 49, column: 3, offset: 1871 },
                end: { line: 49, column: 34, offset: 1902 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 49, column: 1, offset: 1869 },
            end: { line: 49, column: 36, offset: 1904 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there may be times when you'll want to extend an object in a pipeline with new properties, or construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 49, column: 36, offset: 1904 },
            end: { line: 49, column: 235, offset: 2103 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 49, column: 235, offset: 2103 },
            end: { line: 49, column: 240, offset: 2108 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 49, column: 240, offset: 2108 },
            end: { line: 49, column: 278, offset: 2146 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 49, column: 278, offset: 2146 },
            end: { line: 49, column: 284, offset: 2152 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 49, column: 284, offset: 2152 },
            end: { line: 49, column: 288, offset: 2156 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 49, column: 288, offset: 2156 },
            end: { line: 49, column: 296, offset: 2164 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 49, column: 296, offset: 2164 },
            end: { line: 49, column: 297, offset: 2165 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1869 },
        end: { line: 49, column: 297, offset: 2165 },
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
        start: { line: 51, column: 1, offset: 2167 },
        end: { line: 81, column: 4, offset: 2725 },
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
            start: { line: 83, column: 3, offset: 2729 },
            end: { line: 83, column: 15, offset: 2741 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2727 },
        end: { line: 83, column: 15, offset: 2741 },
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
                start: { line: 84, column: 3, offset: 2744 },
                end: { line: 84, column: 24, offset: 2765 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 84, column: 1, offset: 2742 },
            end: { line: 84, column: 26, offset: 2767 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 84, column: 26, offset: 2767 },
            end: { line: 84, column: 64, offset: 2805 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 84, column: 64, offset: 2805 },
            end: { line: 84, column: 69, offset: 2810 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 84, column: 69, offset: 2810 },
            end: { line: 84, column: 302, offset: 3043 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2742 },
        end: { line: 84, column: 302, offset: 3043 },
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
        start: { line: 86, column: 1, offset: 3045 },
        end: { line: 105, column: 4, offset: 3571 },
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
            start: { line: 107, column: 3, offset: 3575 },
            end: { line: 107, column: 29, offset: 3601 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3573 },
        end: { line: 107, column: 29, offset: 3601 },
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
                start: { line: 108, column: 3, offset: 3604 },
                end: { line: 108, column: 51, offset: 3652 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3602 },
            end: { line: 108, column: 53, offset: 3654 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 108, column: 53, offset: 3654 },
            end: { line: 108, column: 196, offset: 3797 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3602 },
        end: { line: 108, column: 196, offset: 3797 },
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
                    start: { line: 110, column: 3, offset: 3801 },
                    end: { line: 110, column: 26, offset: 3824 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3824 },
                    end: { line: 110, column: 37, offset: 3835 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3835 },
                    end: { line: 110, column: 40, offset: 3838 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3838 },
                    end: { line: 110, column: 63, offset: 3861 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3801 },
                end: { line: 110, column: 63, offset: 3861 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3799 },
            end: { line: 110, column: 63, offset: 3861 },
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
                    start: { line: 111, column: 3, offset: 3864 },
                    end: { line: 111, column: 16, offset: 3877 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3877 },
                    end: { line: 111, column: 24, offset: 3885 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3885 },
                    end: { line: 111, column: 27, offset: 3888 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3888 },
                    end: { line: 111, column: 40, offset: 3901 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3864 },
                end: { line: 111, column: 40, offset: 3901 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3862 },
            end: { line: 111, column: 40, offset: 3901 },
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
                    start: { line: 112, column: 3, offset: 3904 },
                    end: { line: 112, column: 15, offset: 3916 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3916 },
                    end: { line: 112, column: 23, offset: 3924 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3924 },
                    end: { line: 112, column: 26, offset: 3927 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3927 },
                    end: { line: 112, column: 38, offset: 3939 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3904 },
                end: { line: 112, column: 38, offset: 3939 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3902 },
            end: { line: 112, column: 38, offset: 3939 },
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
                    start: { line: 113, column: 3, offset: 3942 },
                    end: { line: 113, column: 16, offset: 3955 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 3955 },
                    end: { line: 113, column: 20, offset: 3959 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 3959 },
                    end: { line: 113, column: 23, offset: 3962 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 3962 },
                    end: { line: 113, column: 31, offset: 3970 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3942 },
                end: { line: 113, column: 31, offset: 3970 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3940 },
            end: { line: 113, column: 31, offset: 3970 },
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
                    start: { line: 114, column: 3, offset: 3973 },
                    end: { line: 114, column: 13, offset: 3983 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 3983 },
                    end: { line: 114, column: 22, offset: 3992 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 3992 },
                    end: { line: 114, column: 25, offset: 3995 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 3995 },
                    end: { line: 114, column: 35, offset: 4005 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3973 },
                end: { line: 114, column: 35, offset: 4005 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3971 },
            end: { line: 114, column: 35, offset: 4005 },
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
                    start: { line: 115, column: 3, offset: 4008 },
                    end: { line: 115, column: 17, offset: 4022 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 4022 },
                    end: { line: 115, column: 24, offset: 4029 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 4029 },
                    end: { line: 115, column: 27, offset: 4032 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 4032 },
                    end: { line: 115, column: 37, offset: 4042 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 4008 },
                end: { line: 115, column: 37, offset: 4042 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 4006 },
            end: { line: 115, column: 37, offset: 4042 },
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
                    start: { line: 116, column: 3, offset: 4045 },
                    end: { line: 116, column: 14, offset: 4056 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 4056 },
                    end: { line: 116, column: 21, offset: 4063 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 4063 },
                    end: { line: 116, column: 24, offset: 4066 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 4066 },
                    end: { line: 116, column: 34, offset: 4076 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 4045 },
                end: { line: 116, column: 34, offset: 4076 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 4043 },
            end: { line: 116, column: 34, offset: 4076 },
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
                    start: { line: 117, column: 3, offset: 4079 },
                    end: { line: 117, column: 26, offset: 4102 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 4102 },
                    end: { line: 117, column: 34, offset: 4110 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 4110 },
                    end: { line: 117, column: 37, offset: 4113 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 4113 },
                    end: { line: 117, column: 48, offset: 4124 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 4079 },
                end: { line: 117, column: 48, offset: 4124 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 4077 },
            end: { line: 117, column: 48, offset: 4124 },
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
                    start: { line: 118, column: 3, offset: 4127 },
                    end: { line: 118, column: 23, offset: 4147 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 4147 },
                    end: { line: 118, column: 31, offset: 4155 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4155 },
                    end: { line: 118, column: 34, offset: 4158 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4158 },
                    end: { line: 118, column: 45, offset: 4169 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 4127 },
                end: { line: 118, column: 45, offset: 4169 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4125 },
            end: { line: 118, column: 45, offset: 4169 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3799 },
        end: { line: 118, column: 45, offset: 4169 },
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
        start: { line: 120, column: 1, offset: 4171 },
        end: { line: 140, column: 4, offset: 4586 },
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
            start: { line: 142, column: 3, offset: 4590 },
            end: { line: 142, column: 31, offset: 4618 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4588 },
        end: { line: 142, column: 31, offset: 4618 },
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
                start: { line: 143, column: 3, offset: 4621 },
                end: { line: 143, column: 24, offset: 4642 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4619 },
            end: { line: 143, column: 26, offset: 4644 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 143, column: 26, offset: 4644 },
            end: { line: 143, column: 62, offset: 4680 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 143, column: 62, offset: 4680 },
            end: { line: 143, column: 72, offset: 4690 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 72, offset: 4690 },
            end: { line: 143, column: 73, offset: 4691 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4619 },
        end: { line: 143, column: 73, offset: 4691 },
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
            start: { line: 145, column: 1, offset: 4693 },
            end: { line: 145, column: 98, offset: 4790 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4693 },
        end: { line: 145, column: 98, offset: 4790 },
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
        start: { line: 147, column: 1, offset: 4792 },
        end: { line: 158, column: 4, offset: 5027 },
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
            start: { line: 160, column: 3, offset: 5031 },
            end: { line: 160, column: 14, offset: 5042 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 5029 },
        end: { line: 160, column: 14, offset: 5042 },
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
                start: { line: 161, column: 3, offset: 5045 },
                end: { line: 161, column: 44, offset: 5086 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 1, offset: 5043 },
            end: { line: 161, column: 46, offset: 5088 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 161, column: 46, offset: 5088 },
            end: { line: 161, column: 126, offset: 5168 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 161, column: 126, offset: 5168 },
            end: { line: 161, column: 131, offset: 5173 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 161, column: 131, offset: 5173 },
            end: { line: 161, column: 133, offset: 5175 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 161, column: 133, offset: 5175 },
            end: { line: 161, column: 141, offset: 5183 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 161, column: 141, offset: 5183 },
            end: { line: 161, column: 146, offset: 5188 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 161, column: 146, offset: 5188 },
            end: { line: 161, column: 155, offset: 5197 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 161, column: 155, offset: 5197 },
            end: { line: 161, column: 180, offset: 5222 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 161, column: 180, offset: 5222 },
            end: { line: 161, column: 188, offset: 5230 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 161, column: 188, offset: 5230 },
            end: { line: 161, column: 192, offset: 5234 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 161, column: 192, offset: 5234 },
            end: { line: 161, column: 203, offset: 5245 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 161, column: 203, offset: 5245 },
            end: { line: 161, column: 337, offset: 5379 },
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
                start: { line: 161, column: 338, offset: 5380 },
                end: { line: 161, column: 342, offset: 5384 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 337, offset: 5379 },
            end: { line: 161, column: 411, offset: 5453 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 411, offset: 5453 },
            end: { line: 161, column: 412, offset: 5454 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 5043 },
        end: { line: 161, column: 412, offset: 5454 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: '// length number => string => Generator<string>\n' +
        'const generateSegmentsOfLength = length => function* (string) {\n' +
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
        start: { line: 163, column: 1, offset: 5456 },
        end: { line: 191, column: 4, offset: 6280 },
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
            start: { line: 193, column: 1, offset: 6282 },
            end: { line: 193, column: 92, offset: 6373 },
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
                start: { line: 193, column: 93, offset: 6374 },
                end: { line: 193, column: 105, offset: 6386 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 193, column: 92, offset: 6373 },
            end: { line: 193, column: 122, offset: 6403 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 193, column: 122, offset: 6403 },
            end: { line: 193, column: 144, offset: 6425 },
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
                start: { line: 193, column: 145, offset: 6426 },
                end: { line: 193, column: 149, offset: 6430 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 193, column: 144, offset: 6425 },
            end: { line: 193, column: 157, offset: 6438 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 193, column: 157, offset: 6438 },
            end: { line: 193, column: 158, offset: 6439 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 6282 },
        end: { line: 193, column: 158, offset: 6439 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 194, column: 1, offset: 6440 }
  }
}
