export default {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the rubico tour.',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 28, offset: 27 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 28, offset: 27 },
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
            start: { line: 3, column: 3, offset: 31 },
            end: { line: 3, column: 20, offset: 48 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 29 },
        end: { line: 3, column: 20, offset: 48 },
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
                        start: { line: 5, column: 6, offset: 55 },
                        end: { line: 5, column: 18, offset: 67 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 5, column: 5, offset: 54 },
                    end: { line: 5, column: 33, offset: 82 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 5, column: 5, offset: 54 },
                end: { line: 5, column: 33, offset: 82 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 50 },
            end: { line: 5, column: 33, offset: 82 },
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
                        start: { line: 6, column: 6, offset: 88 },
                        end: { line: 6, column: 26, offset: 108 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 6, column: 5, offset: 87 },
                    end: { line: 6, column: 50, offset: 132 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 6, column: 5, offset: 87 },
                end: { line: 6, column: 50, offset: 132 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 83 },
            end: { line: 6, column: 50, offset: 132 },
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
                        start: { line: 7, column: 6, offset: 138 },
                        end: { line: 7, column: 24, offset: 156 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 7, column: 5, offset: 137 },
                    end: { line: 7, column: 46, offset: 178 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 7, column: 5, offset: 137 },
                end: { line: 7, column: 46, offset: 178 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 133 },
            end: { line: 7, column: 46, offset: 178 },
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
                        start: { line: 8, column: 6, offset: 184 },
                        end: { line: 8, column: 18, offset: 196 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 8, column: 5, offset: 183 },
                    end: { line: 8, column: 34, offset: 212 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 8, column: 5, offset: 183 },
                end: { line: 8, column: 34, offset: 212 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 179 },
            end: { line: 8, column: 34, offset: 212 },
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
                        start: { line: 9, column: 6, offset: 218 },
                        end: { line: 9, column: 32, offset: 244 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 9, column: 5, offset: 217 },
                    end: { line: 9, column: 62, offset: 274 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 9, column: 5, offset: 217 },
                end: { line: 9, column: 62, offset: 274 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 213 },
            end: { line: 9, column: 62, offset: 274 },
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
                        start: { line: 10, column: 6, offset: 280 },
                        end: { line: 10, column: 34, offset: 308 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 10, column: 5, offset: 279 },
                    end: { line: 10, column: 66, offset: 340 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 10, column: 5, offset: 279 },
                end: { line: 10, column: 66, offset: 340 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 275 },
            end: { line: 10, column: 66, offset: 340 },
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
                        start: { line: 11, column: 6, offset: 346 },
                        end: { line: 11, column: 17, offset: 357 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 11, column: 5, offset: 345 },
                    end: { line: 11, column: 32, offset: 372 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 11, column: 5, offset: 345 },
                end: { line: 11, column: 32, offset: 372 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 341 },
            end: { line: 11, column: 32, offset: 372 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 50 },
        end: { line: 11, column: 32, offset: 372 },
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
                start: { line: 13, column: 4, offset: 377 },
                end: { line: 13, column: 5, offset: 378 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 13, column: 3, offset: 376 },
            end: { line: 13, column: 6, offset: 379 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 13, column: 6, offset: 379 },
            end: { line: 13, column: 15, offset: 388 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 374 },
        end: { line: 13, column: 15, offset: 388 },
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
                start: { line: 14, column: 3, offset: 391 },
                end: { line: 14, column: 44, offset: 432 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 1, offset: 389 },
            end: { line: 14, column: 46, offset: 434 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 14, column: 46, offset: 434 },
            end: { line: 14, column: 132, offset: 520 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 14, column: 132, offset: 520 },
            end: { line: 14, column: 137, offset: 525 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). For asynchronous functions, rubico handles the promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 14, column: 137, offset: 525 },
            end: { line: 14, column: 302, offset: 690 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 14, column: 302, offset: 690 },
            end: { line: 14, column: 315, offset: 703 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 14, column: 315, offset: 703 },
            end: { line: 14, column: 339, offset: 727 },
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
                start: { line: 14, column: 340, offset: 728 },
                end: { line: 14, column: 344, offset: 732 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 14, column: 339, offset: 727 },
            end: { line: 14, column: 425, offset: 813 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 14, column: 425, offset: 813 },
            end: { line: 14, column: 426, offset: 814 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 389 },
        end: { line: 14, column: 426, offset: 814 },
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
        start: { line: 16, column: 1, offset: 816 },
        end: { line: 24, column: 4, offset: 1024 },
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
            start: { line: 26, column: 3, offset: 1028 },
            end: { line: 26, column: 23, offset: 1048 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 1026 },
        end: { line: 26, column: 23, offset: 1048 },
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
                start: { line: 27, column: 3, offset: 1051 },
                end: { line: 27, column: 32, offset: 1080 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 27, column: 1, offset: 1049 },
            end: { line: 27, column: 34, offset: 1082 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 27, column: 34, offset: 1082 },
            end: { line: 27, column: 71, offset: 1119 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 71, offset: 1119 },
            end: { line: 27, column: 77, offset: 1125 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 27, column: 77, offset: 1125 },
            end: { line: 27, column: 99, offset: 1147 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 27, column: 99, offset: 1147 },
            end: { line: 27, column: 105, offset: 1153 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities.',
          position: {
            start: { line: 27, column: 105, offset: 1153 },
            end: { line: 27, column: 204, offset: 1252 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1049 },
        end: { line: 27, column: 204, offset: 1252 },
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
        start: { line: 29, column: 1, offset: 1254 },
        end: { line: 46, column: 4, offset: 1659 },
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
            start: { line: 48, column: 3, offset: 1663 },
            end: { line: 48, column: 21, offset: 1681 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1661 },
        end: { line: 48, column: 21, offset: 1681 },
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
                start: { line: 49, column: 3, offset: 1684 },
                end: { line: 49, column: 34, offset: 1715 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 49, column: 1, offset: 1682 },
            end: { line: 49, column: 36, offset: 1717 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there will be times when you'll want to control the shape of objects in a pipeline. You may want to extend an object in your pipeline with new properties, or create a step whereby you construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 49, column: 36, offset: 1717 },
            end: { line: 49, column: 325, offset: 2006 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 49, column: 325, offset: 2006 },
            end: { line: 49, column: 330, offset: 2011 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 49, column: 330, offset: 2011 },
            end: { line: 49, column: 368, offset: 2049 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 49, column: 368, offset: 2049 },
            end: { line: 49, column: 374, offset: 2055 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 49, column: 374, offset: 2055 },
            end: { line: 49, column: 378, offset: 2059 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 49, column: 378, offset: 2059 },
            end: { line: 49, column: 386, offset: 2067 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 49, column: 386, offset: 2067 },
            end: { line: 49, column: 387, offset: 2068 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1682 },
        end: { line: 49, column: 387, offset: 2068 },
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
        start: { line: 51, column: 1, offset: 2070 },
        end: { line: 81, column: 4, offset: 2628 },
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
            start: { line: 83, column: 3, offset: 2632 },
            end: { line: 83, column: 15, offset: 2644 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2630 },
        end: { line: 83, column: 15, offset: 2644 },
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
                start: { line: 84, column: 3, offset: 2647 },
                end: { line: 84, column: 24, offset: 2668 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 84, column: 1, offset: 2645 },
            end: { line: 84, column: 26, offset: 2670 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 84, column: 26, offset: 2670 },
            end: { line: 84, column: 64, offset: 2708 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 84, column: 64, offset: 2708 },
            end: { line: 84, column: 69, offset: 2713 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 84, column: 69, offset: 2713 },
            end: { line: 84, column: 302, offset: 2946 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2645 },
        end: { line: 84, column: 302, offset: 2946 },
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
        start: { line: 86, column: 1, offset: 2948 },
        end: { line: 105, column: 4, offset: 3474 },
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
            start: { line: 107, column: 3, offset: 3478 },
            end: { line: 107, column: 29, offset: 3504 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3476 },
        end: { line: 107, column: 29, offset: 3504 },
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
                start: { line: 108, column: 3, offset: 3507 },
                end: { line: 108, column: 51, offset: 3555 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3505 },
            end: { line: 108, column: 53, offset: 3557 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 108, column: 53, offset: 3557 },
            end: { line: 108, column: 196, offset: 3700 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3505 },
        end: { line: 108, column: 196, offset: 3700 },
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
                    start: { line: 110, column: 3, offset: 3704 },
                    end: { line: 110, column: 26, offset: 3727 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3727 },
                    end: { line: 110, column: 37, offset: 3738 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3738 },
                    end: { line: 110, column: 40, offset: 3741 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3741 },
                    end: { line: 110, column: 63, offset: 3764 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3704 },
                end: { line: 110, column: 63, offset: 3764 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3702 },
            end: { line: 110, column: 63, offset: 3764 },
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
                    start: { line: 111, column: 3, offset: 3767 },
                    end: { line: 111, column: 16, offset: 3780 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3780 },
                    end: { line: 111, column: 24, offset: 3788 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3788 },
                    end: { line: 111, column: 27, offset: 3791 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3791 },
                    end: { line: 111, column: 40, offset: 3804 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3767 },
                end: { line: 111, column: 40, offset: 3804 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3765 },
            end: { line: 111, column: 40, offset: 3804 },
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
                    start: { line: 112, column: 3, offset: 3807 },
                    end: { line: 112, column: 15, offset: 3819 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3819 },
                    end: { line: 112, column: 23, offset: 3827 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3827 },
                    end: { line: 112, column: 26, offset: 3830 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3830 },
                    end: { line: 112, column: 38, offset: 3842 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3807 },
                end: { line: 112, column: 38, offset: 3842 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3805 },
            end: { line: 112, column: 38, offset: 3842 },
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
                    start: { line: 113, column: 3, offset: 3845 },
                    end: { line: 113, column: 16, offset: 3858 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 3858 },
                    end: { line: 113, column: 20, offset: 3862 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 3862 },
                    end: { line: 113, column: 23, offset: 3865 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 3865 },
                    end: { line: 113, column: 31, offset: 3873 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3845 },
                end: { line: 113, column: 31, offset: 3873 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3843 },
            end: { line: 113, column: 31, offset: 3873 },
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
                    start: { line: 114, column: 3, offset: 3876 },
                    end: { line: 114, column: 13, offset: 3886 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 3886 },
                    end: { line: 114, column: 22, offset: 3895 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 3895 },
                    end: { line: 114, column: 25, offset: 3898 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 3898 },
                    end: { line: 114, column: 35, offset: 3908 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3876 },
                end: { line: 114, column: 35, offset: 3908 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3874 },
            end: { line: 114, column: 35, offset: 3908 },
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
                    start: { line: 115, column: 3, offset: 3911 },
                    end: { line: 115, column: 17, offset: 3925 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 3925 },
                    end: { line: 115, column: 24, offset: 3932 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 3932 },
                    end: { line: 115, column: 27, offset: 3935 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 3935 },
                    end: { line: 115, column: 37, offset: 3945 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3911 },
                end: { line: 115, column: 37, offset: 3945 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3909 },
            end: { line: 115, column: 37, offset: 3945 },
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
                    start: { line: 116, column: 3, offset: 3948 },
                    end: { line: 116, column: 14, offset: 3959 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 3959 },
                    end: { line: 116, column: 21, offset: 3966 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 3966 },
                    end: { line: 116, column: 24, offset: 3969 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 3969 },
                    end: { line: 116, column: 34, offset: 3979 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 3948 },
                end: { line: 116, column: 34, offset: 3979 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 3946 },
            end: { line: 116, column: 34, offset: 3979 },
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
                    start: { line: 117, column: 3, offset: 3982 },
                    end: { line: 117, column: 26, offset: 4005 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 4005 },
                    end: { line: 117, column: 34, offset: 4013 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 4013 },
                    end: { line: 117, column: 37, offset: 4016 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 4016 },
                    end: { line: 117, column: 48, offset: 4027 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 3982 },
                end: { line: 117, column: 48, offset: 4027 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 3980 },
            end: { line: 117, column: 48, offset: 4027 },
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
                    start: { line: 118, column: 3, offset: 4030 },
                    end: { line: 118, column: 23, offset: 4050 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 4050 },
                    end: { line: 118, column: 31, offset: 4058 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4058 },
                    end: { line: 118, column: 34, offset: 4061 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4061 },
                    end: { line: 118, column: 45, offset: 4072 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 4030 },
                end: { line: 118, column: 45, offset: 4072 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4028 },
            end: { line: 118, column: 45, offset: 4072 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3702 },
        end: { line: 118, column: 45, offset: 4072 },
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
        start: { line: 120, column: 1, offset: 4074 },
        end: { line: 140, column: 4, offset: 4489 },
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
            start: { line: 142, column: 3, offset: 4493 },
            end: { line: 142, column: 31, offset: 4521 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4491 },
        end: { line: 142, column: 31, offset: 4521 },
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
                start: { line: 143, column: 3, offset: 4524 },
                end: { line: 143, column: 24, offset: 4545 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4522 },
            end: { line: 143, column: 26, offset: 4547 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 143, column: 26, offset: 4547 },
            end: { line: 143, column: 62, offset: 4583 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 143, column: 62, offset: 4583 },
            end: { line: 143, column: 72, offset: 4593 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 72, offset: 4593 },
            end: { line: 143, column: 73, offset: 4594 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4522 },
        end: { line: 143, column: 73, offset: 4594 },
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
            start: { line: 145, column: 1, offset: 4596 },
            end: { line: 145, column: 98, offset: 4693 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4596 },
        end: { line: 145, column: 98, offset: 4693 },
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
        start: { line: 147, column: 1, offset: 4695 },
        end: { line: 158, column: 4, offset: 4930 },
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
            start: { line: 160, column: 3, offset: 4934 },
            end: { line: 160, column: 14, offset: 4945 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 4932 },
        end: { line: 160, column: 14, offset: 4945 },
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
                start: { line: 161, column: 3, offset: 4948 },
                end: { line: 161, column: 44, offset: 4989 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 1, offset: 4946 },
            end: { line: 161, column: 46, offset: 4991 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 161, column: 46, offset: 4991 },
            end: { line: 161, column: 126, offset: 5071 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 161, column: 126, offset: 5071 },
            end: { line: 161, column: 131, offset: 5076 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 161, column: 131, offset: 5076 },
            end: { line: 161, column: 133, offset: 5078 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 161, column: 133, offset: 5078 },
            end: { line: 161, column: 141, offset: 5086 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 161, column: 141, offset: 5086 },
            end: { line: 161, column: 146, offset: 5091 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 161, column: 146, offset: 5091 },
            end: { line: 161, column: 155, offset: 5100 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 161, column: 155, offset: 5100 },
            end: { line: 161, column: 180, offset: 5125 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 161, column: 180, offset: 5125 },
            end: { line: 161, column: 188, offset: 5133 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 161, column: 188, offset: 5133 },
            end: { line: 161, column: 192, offset: 5137 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 161, column: 192, offset: 5137 },
            end: { line: 161, column: 203, offset: 5148 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 161, column: 203, offset: 5148 },
            end: { line: 161, column: 337, offset: 5282 },
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
                start: { line: 161, column: 338, offset: 5283 },
                end: { line: 161, column: 342, offset: 5287 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 161, column: 337, offset: 5282 },
            end: { line: 161, column: 411, offset: 5356 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 411, offset: 5356 },
            end: { line: 161, column: 412, offset: 5357 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 4946 },
        end: { line: 161, column: 412, offset: 5357 },
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
        start: { line: 163, column: 1, offset: 5359 },
        end: { line: 191, column: 4, offset: 6182 },
        indent: [
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1
        ]
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 192, column: 1, offset: 6183 }
  }
}
