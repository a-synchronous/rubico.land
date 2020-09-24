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
              value: 'Save mental resources on Promise handling',
              position: {
                start: { line: 14, column: 3, offset: 478 },
                end: { line: 14, column: 44, offset: 519 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 1, offset: 476 },
            end: { line: 14, column: 46, offset: 521 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 14, column: 46, offset: 521 },
            end: { line: 14, column: 132, offset: 607 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 14, column: 132, offset: 607 },
            end: { line: 14, column: 137, offset: 612 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). For asynchronous functions, rubico handles the promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 14, column: 137, offset: 612 },
            end: { line: 14, column: 302, offset: 777 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 14, column: 302, offset: 777 },
            end: { line: 14, column: 315, offset: 790 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 14, column: 315, offset: 790 },
            end: { line: 14, column: 339, offset: 814 },
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
                start: { line: 14, column: 340, offset: 815 },
                end: { line: 14, column: 344, offset: 819 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 339, offset: 814 },
            end: { line: 14, column: 425, offset: 900 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 14, column: 425, offset: 900 },
            end: { line: 14, column: 426, offset: 901 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 476 },
        end: { line: 14, column: 426, offset: 901 },
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
        start: { line: 16, column: 1, offset: 903 },
        end: { line: 24, column: 4, offset: 1111 },
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
            start: { line: 26, column: 3, offset: 1115 },
            end: { line: 26, column: 23, offset: 1135 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 1113 },
        end: { line: 26, column: 23, offset: 1135 },
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
              value: 'Reduce application complexity',
              position: {
                start: { line: 27, column: 3, offset: 1138 },
                end: { line: 27, column: 32, offset: 1167 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 27, column: 1, offset: 1136 },
            end: { line: 27, column: 34, offset: 1169 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 27, column: 34, offset: 1169 },
            end: { line: 27, column: 71, offset: 1206 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 71, offset: 1206 },
            end: { line: 27, column: 77, offset: 1212 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 27, column: 77, offset: 1212 },
            end: { line: 27, column: 99, offset: 1234 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 99, offset: 1234 },
            end: { line: 27, column: 105, offset: 1240 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities.',
          position: {
            start: { line: 27, column: 105, offset: 1240 },
            end: { line: 27, column: 204, offset: 1339 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1136 },
        end: { line: 27, column: 204, offset: 1339 },
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
        start: { line: 29, column: 1, offset: 1341 },
        end: { line: 46, column: 4, offset: 1746 },
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
            start: { line: 48, column: 3, offset: 1750 },
            end: { line: 48, column: 21, offset: 1768 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1748 },
        end: { line: 48, column: 21, offset: 1768 },
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
                start: { line: 49, column: 3, offset: 1771 },
                end: { line: 49, column: 34, offset: 1802 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 49, column: 1, offset: 1769 },
            end: { line: 49, column: 36, offset: 1804 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there will be times when you'll want to control the shape of objects in a pipeline. You may want to extend an object in your pipeline with new properties, or create a step whereby you construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 49, column: 36, offset: 1804 },
            end: { line: 49, column: 325, offset: 2093 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 49, column: 325, offset: 2093 },
            end: { line: 49, column: 330, offset: 2098 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 49, column: 330, offset: 2098 },
            end: { line: 49, column: 368, offset: 2136 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 49, column: 368, offset: 2136 },
            end: { line: 49, column: 374, offset: 2142 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 49, column: 374, offset: 2142 },
            end: { line: 49, column: 378, offset: 2146 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 49, column: 378, offset: 2146 },
            end: { line: 49, column: 386, offset: 2154 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 49, column: 386, offset: 2154 },
            end: { line: 49, column: 387, offset: 2155 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1769 },
        end: { line: 49, column: 387, offset: 2155 },
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
        start: { line: 51, column: 1, offset: 2157 },
        end: { line: 81, column: 4, offset: 2715 },
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
            start: { line: 83, column: 3, offset: 2719 },
            end: { line: 83, column: 15, offset: 2731 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2717 },
        end: { line: 83, column: 15, offset: 2731 },
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
                start: { line: 84, column: 3, offset: 2734 },
                end: { line: 84, column: 24, offset: 2755 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 84, column: 1, offset: 2732 },
            end: { line: 84, column: 26, offset: 2757 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 84, column: 26, offset: 2757 },
            end: { line: 84, column: 64, offset: 2795 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 84, column: 64, offset: 2795 },
            end: { line: 84, column: 69, offset: 2800 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 84, column: 69, offset: 2800 },
            end: { line: 84, column: 302, offset: 3033 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2732 },
        end: { line: 84, column: 302, offset: 3033 },
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
        start: { line: 86, column: 1, offset: 3035 },
        end: { line: 105, column: 4, offset: 3561 },
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
            start: { line: 107, column: 3, offset: 3565 },
            end: { line: 107, column: 29, offset: 3591 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3563 },
        end: { line: 107, column: 29, offset: 3591 },
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
                start: { line: 108, column: 3, offset: 3594 },
                end: { line: 108, column: 51, offset: 3642 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3592 },
            end: { line: 108, column: 53, offset: 3644 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 108, column: 53, offset: 3644 },
            end: { line: 108, column: 196, offset: 3787 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3592 },
        end: { line: 108, column: 196, offset: 3787 },
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
                    start: { line: 110, column: 3, offset: 3791 },
                    end: { line: 110, column: 26, offset: 3814 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3814 },
                    end: { line: 110, column: 37, offset: 3825 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3825 },
                    end: { line: 110, column: 40, offset: 3828 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3828 },
                    end: { line: 110, column: 63, offset: 3851 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3791 },
                end: { line: 110, column: 63, offset: 3851 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3789 },
            end: { line: 110, column: 63, offset: 3851 },
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
                    start: { line: 111, column: 3, offset: 3854 },
                    end: { line: 111, column: 16, offset: 3867 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3867 },
                    end: { line: 111, column: 24, offset: 3875 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3875 },
                    end: { line: 111, column: 27, offset: 3878 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3878 },
                    end: { line: 111, column: 40, offset: 3891 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3854 },
                end: { line: 111, column: 40, offset: 3891 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3852 },
            end: { line: 111, column: 40, offset: 3891 },
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
                    start: { line: 112, column: 3, offset: 3894 },
                    end: { line: 112, column: 15, offset: 3906 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3906 },
                    end: { line: 112, column: 23, offset: 3914 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3914 },
                    end: { line: 112, column: 26, offset: 3917 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3917 },
                    end: { line: 112, column: 38, offset: 3929 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3894 },
                end: { line: 112, column: 38, offset: 3929 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3892 },
            end: { line: 112, column: 38, offset: 3929 },
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
                    start: { line: 113, column: 3, offset: 3932 },
                    end: { line: 113, column: 16, offset: 3945 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 3945 },
                    end: { line: 113, column: 20, offset: 3949 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 3949 },
                    end: { line: 113, column: 23, offset: 3952 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 3952 },
                    end: { line: 113, column: 31, offset: 3960 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3932 },
                end: { line: 113, column: 31, offset: 3960 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3930 },
            end: { line: 113, column: 31, offset: 3960 },
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
                    start: { line: 114, column: 3, offset: 3963 },
                    end: { line: 114, column: 13, offset: 3973 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 3973 },
                    end: { line: 114, column: 22, offset: 3982 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 3982 },
                    end: { line: 114, column: 25, offset: 3985 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 3985 },
                    end: { line: 114, column: 35, offset: 3995 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3963 },
                end: { line: 114, column: 35, offset: 3995 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3961 },
            end: { line: 114, column: 35, offset: 3995 },
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
                    start: { line: 115, column: 3, offset: 3998 },
                    end: { line: 115, column: 17, offset: 4012 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 4012 },
                    end: { line: 115, column: 24, offset: 4019 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 4019 },
                    end: { line: 115, column: 27, offset: 4022 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 4022 },
                    end: { line: 115, column: 37, offset: 4032 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3998 },
                end: { line: 115, column: 37, offset: 4032 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3996 },
            end: { line: 115, column: 37, offset: 4032 },
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
                    start: { line: 116, column: 3, offset: 4035 },
                    end: { line: 116, column: 14, offset: 4046 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 4046 },
                    end: { line: 116, column: 21, offset: 4053 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 4053 },
                    end: { line: 116, column: 24, offset: 4056 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 4056 },
                    end: { line: 116, column: 34, offset: 4066 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 4035 },
                end: { line: 116, column: 34, offset: 4066 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 4033 },
            end: { line: 116, column: 34, offset: 4066 },
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
                    start: { line: 117, column: 3, offset: 4069 },
                    end: { line: 117, column: 26, offset: 4092 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 4092 },
                    end: { line: 117, column: 34, offset: 4100 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 4100 },
                    end: { line: 117, column: 37, offset: 4103 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 4103 },
                    end: { line: 117, column: 48, offset: 4114 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 4069 },
                end: { line: 117, column: 48, offset: 4114 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 4067 },
            end: { line: 117, column: 48, offset: 4114 },
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
                    start: { line: 118, column: 3, offset: 4117 },
                    end: { line: 118, column: 23, offset: 4137 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 4137 },
                    end: { line: 118, column: 31, offset: 4145 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4145 },
                    end: { line: 118, column: 34, offset: 4148 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4148 },
                    end: { line: 118, column: 45, offset: 4159 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 4117 },
                end: { line: 118, column: 45, offset: 4159 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4115 },
            end: { line: 118, column: 45, offset: 4159 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3789 },
        end: { line: 118, column: 45, offset: 4159 },
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
        start: { line: 120, column: 1, offset: 4161 },
        end: { line: 140, column: 4, offset: 4576 },
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
            start: { line: 142, column: 3, offset: 4580 },
            end: { line: 142, column: 31, offset: 4608 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4578 },
        end: { line: 142, column: 31, offset: 4608 },
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
                start: { line: 143, column: 3, offset: 4611 },
                end: { line: 143, column: 24, offset: 4632 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4609 },
            end: { line: 143, column: 26, offset: 4634 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 143, column: 26, offset: 4634 },
            end: { line: 143, column: 62, offset: 4670 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 143, column: 62, offset: 4670 },
            end: { line: 143, column: 72, offset: 4680 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 72, offset: 4680 },
            end: { line: 143, column: 73, offset: 4681 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4609 },
        end: { line: 143, column: 73, offset: 4681 },
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
            start: { line: 145, column: 1, offset: 4683 },
            end: { line: 145, column: 98, offset: 4780 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4683 },
        end: { line: 145, column: 98, offset: 4780 },
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
        start: { line: 147, column: 1, offset: 4782 },
        end: { line: 158, column: 4, offset: 5017 },
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
            start: { line: 160, column: 3, offset: 5021 },
            end: { line: 160, column: 14, offset: 5032 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 5019 },
        end: { line: 160, column: 14, offset: 5032 },
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
                start: { line: 161, column: 3, offset: 5035 },
                end: { line: 161, column: 44, offset: 5076 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 1, offset: 5033 },
            end: { line: 161, column: 46, offset: 5078 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 161, column: 46, offset: 5078 },
            end: { line: 161, column: 126, offset: 5158 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 161, column: 126, offset: 5158 },
            end: { line: 161, column: 131, offset: 5163 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 161, column: 131, offset: 5163 },
            end: { line: 161, column: 133, offset: 5165 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 161, column: 133, offset: 5165 },
            end: { line: 161, column: 141, offset: 5173 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 161, column: 141, offset: 5173 },
            end: { line: 161, column: 146, offset: 5178 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 161, column: 146, offset: 5178 },
            end: { line: 161, column: 155, offset: 5187 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 161, column: 155, offset: 5187 },
            end: { line: 161, column: 180, offset: 5212 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 161, column: 180, offset: 5212 },
            end: { line: 161, column: 188, offset: 5220 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 161, column: 188, offset: 5220 },
            end: { line: 161, column: 192, offset: 5224 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 161, column: 192, offset: 5224 },
            end: { line: 161, column: 203, offset: 5235 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 161, column: 203, offset: 5235 },
            end: { line: 161, column: 337, offset: 5369 },
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
                start: { line: 161, column: 338, offset: 5370 },
                end: { line: 161, column: 342, offset: 5374 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 337, offset: 5369 },
            end: { line: 161, column: 411, offset: 5443 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 411, offset: 5443 },
            end: { line: 161, column: 412, offset: 5444 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 5033 },
        end: { line: 161, column: 412, offset: 5444 },
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
        start: { line: 163, column: 1, offset: 5446 },
        end: { line: 191, column: 4, offset: 6269 },
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
          value: 'That concludes the rubico tour.',
          position: {
            start: { line: 193, column: 1, offset: 6271 },
            end: { line: 193, column: 32, offset: 6302 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 6271 },
        end: { line: 193, column: 32, offset: 6302 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 194, column: 1, offset: 6303 }
  }
}
