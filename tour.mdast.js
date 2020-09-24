export default {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the rubico tour. This tour covers high level concepts and provides runnable and editable code examples. All code areas have the rubico core methods imported globally.',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 178, offset: 177 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 178, offset: 177 },
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
        '} = rubico // available globally',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 12, column: 4, offset: 400 },
        indent: [
          1, 1, 1, 1, 1,
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
          value: 'Table of Contents',
          position: {
            start: { line: 14, column: 3, offset: 404 },
            end: { line: 14, column: 20, offset: 421 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 402 },
        end: { line: 14, column: 20, offset: 421 },
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
                        start: { line: 16, column: 6, offset: 428 },
                        end: { line: 16, column: 18, offset: 440 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 16, column: 5, offset: 427 },
                    end: { line: 16, column: 33, offset: 455 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 16, column: 5, offset: 427 },
                end: { line: 16, column: 33, offset: 455 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 16, column: 1, offset: 423 },
            end: { line: 16, column: 33, offset: 455 },
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
                        start: { line: 17, column: 6, offset: 461 },
                        end: { line: 17, column: 26, offset: 481 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 17, column: 5, offset: 460 },
                    end: { line: 17, column: 50, offset: 505 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 17, column: 5, offset: 460 },
                end: { line: 17, column: 50, offset: 505 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 17, column: 1, offset: 456 },
            end: { line: 17, column: 50, offset: 505 },
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
                        start: { line: 18, column: 6, offset: 511 },
                        end: { line: 18, column: 24, offset: 529 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 510 },
                    end: { line: 18, column: 46, offset: 551 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 510 },
                end: { line: 18, column: 46, offset: 551 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 506 },
            end: { line: 18, column: 46, offset: 551 },
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
                        start: { line: 19, column: 6, offset: 557 },
                        end: { line: 19, column: 18, offset: 569 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 556 },
                    end: { line: 19, column: 34, offset: 585 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 556 },
                end: { line: 19, column: 34, offset: 585 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 552 },
            end: { line: 19, column: 34, offset: 585 },
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
                        start: { line: 20, column: 6, offset: 591 },
                        end: { line: 20, column: 32, offset: 617 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 590 },
                    end: { line: 20, column: 62, offset: 647 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 590 },
                end: { line: 20, column: 62, offset: 647 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 586 },
            end: { line: 20, column: 62, offset: 647 },
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
                        start: { line: 21, column: 6, offset: 653 },
                        end: { line: 21, column: 34, offset: 681 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 652 },
                    end: { line: 21, column: 66, offset: 713 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 652 },
                end: { line: 21, column: 66, offset: 713 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 648 },
            end: { line: 21, column: 66, offset: 713 },
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
                        start: { line: 22, column: 6, offset: 719 },
                        end: { line: 22, column: 17, offset: 730 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 718 },
                    end: { line: 22, column: 32, offset: 745 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 718 },
                end: { line: 22, column: 32, offset: 745 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 714 },
            end: { line: 22, column: 32, offset: 745 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 423 },
        end: { line: 22, column: 32, offset: 745 },
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
                start: { line: 24, column: 4, offset: 750 },
                end: { line: 24, column: 5, offset: 751 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 24, column: 3, offset: 749 },
            end: { line: 24, column: 6, offset: 752 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 24, column: 6, offset: 752 },
            end: { line: 24, column: 15, offset: 761 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 747 },
        end: { line: 24, column: 15, offset: 761 },
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
                start: { line: 25, column: 3, offset: 764 },
                end: { line: 25, column: 28, offset: 789 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 1, offset: 762 },
            end: { line: 25, column: 30, offset: 791 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 25, column: 30, offset: 791 },
            end: { line: 25, column: 116, offset: 877 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 25, column: 116, offset: 877 },
            end: { line: 25, column: 121, offset: 882 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 25, column: 121, offset: 882 },
            end: { line: 25, column: 265, offset: 1026 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 25, column: 265, offset: 1026 },
            end: { line: 25, column: 278, offset: 1039 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 25, column: 278, offset: 1039 },
            end: { line: 25, column: 302, offset: 1063 },
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
                start: { line: 25, column: 303, offset: 1064 },
                end: { line: 25, column: 307, offset: 1068 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 302, offset: 1063 },
            end: { line: 25, column: 388, offset: 1149 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 25, column: 388, offset: 1149 },
            end: { line: 25, column: 389, offset: 1150 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 762 },
        end: { line: 25, column: 389, offset: 1150 },
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
        start: { line: 27, column: 1, offset: 1152 },
        end: { line: 35, column: 4, offset: 1360 },
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
            start: { line: 37, column: 3, offset: 1364 },
            end: { line: 37, column: 23, offset: 1384 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1362 },
        end: { line: 37, column: 23, offset: 1384 },
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
                start: { line: 38, column: 3, offset: 1387 },
                end: { line: 38, column: 25, offset: 1409 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 38, column: 1, offset: 1385 },
            end: { line: 38, column: 27, offset: 1411 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 38, column: 27, offset: 1411 },
            end: { line: 38, column: 64, offset: 1448 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 64, offset: 1448 },
            end: { line: 38, column: 70, offset: 1454 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 38, column: 70, offset: 1454 },
            end: { line: 38, column: 92, offset: 1476 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 92, offset: 1476 },
            end: { line: 38, column: 98, offset: 1482 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application as a combination of smaller components via ',
          position: {
            start: { line: 38, column: 98, offset: 1482 },
            end: { line: 38, column: 328, offset: 1712 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 328, offset: 1712 },
            end: { line: 38, column: 334, offset: 1718 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 38, column: 334, offset: 1718 },
            end: { line: 38, column: 335, offset: 1719 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1385 },
        end: { line: 38, column: 335, offset: 1719 },
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
        '  reduce(add), // try uncommenting this reducing function\n' +
        '])\n' +
        '\n' +
        'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        "console.log('input:', numbers) // [1, 2, 3, 4, 5]\n" +
        "console.log('output:', squaredOdds(numbers)) // [1, 9, 25]",
      position: {
        start: { line: 40, column: 1, offset: 1721 },
        end: { line: 57, column: 4, offset: 2123 },
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
            start: { line: 59, column: 3, offset: 2127 },
            end: { line: 59, column: 21, offset: 2145 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2125 },
        end: { line: 59, column: 21, offset: 2145 },
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
                start: { line: 60, column: 3, offset: 2148 },
                end: { line: 60, column: 34, offset: 2179 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 60, column: 1, offset: 2146 },
            end: { line: 60, column: 36, offset: 2181 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there may be times when you'll want to extend an object in a pipeline with new properties, or construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 60, column: 36, offset: 2181 },
            end: { line: 60, column: 235, offset: 2380 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 60, column: 235, offset: 2380 },
            end: { line: 60, column: 240, offset: 2385 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 60, column: 240, offset: 2385 },
            end: { line: 60, column: 278, offset: 2423 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 60, column: 278, offset: 2423 },
            end: { line: 60, column: 284, offset: 2429 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 60, column: 284, offset: 2429 },
            end: { line: 60, column: 288, offset: 2433 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 60, column: 288, offset: 2433 },
            end: { line: 60, column: 296, offset: 2441 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 60, column: 296, offset: 2441 },
            end: { line: 60, column: 297, offset: 2442 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2146 },
        end: { line: 60, column: 297, offset: 2442 },
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
        start: { line: 62, column: 1, offset: 2444 },
        end: { line: 92, column: 4, offset: 3002 },
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
            start: { line: 94, column: 3, offset: 3006 },
            end: { line: 94, column: 15, offset: 3018 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3004 },
        end: { line: 94, column: 15, offset: 3018 },
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
                start: { line: 95, column: 3, offset: 3021 },
                end: { line: 95, column: 24, offset: 3042 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3019 },
            end: { line: 95, column: 26, offset: 3044 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 95, column: 26, offset: 3044 },
            end: { line: 95, column: 64, offset: 3082 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 95, column: 64, offset: 3082 },
            end: { line: 95, column: 69, offset: 3087 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 95, column: 69, offset: 3087 },
            end: { line: 95, column: 302, offset: 3320 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3019 },
        end: { line: 95, column: 302, offset: 3320 },
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
        start: { line: 97, column: 1, offset: 3322 },
        end: { line: 116, column: 4, offset: 3848 },
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
            start: { line: 118, column: 3, offset: 3852 },
            end: { line: 118, column: 29, offset: 3878 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3850 },
        end: { line: 118, column: 29, offset: 3878 },
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
                start: { line: 119, column: 3, offset: 3881 },
                end: { line: 119, column: 51, offset: 3929 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3879 },
            end: { line: 119, column: 53, offset: 3931 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 119, column: 53, offset: 3931 },
            end: { line: 119, column: 196, offset: 4074 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3879 },
        end: { line: 119, column: 196, offset: 4074 },
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
                    start: { line: 121, column: 3, offset: 4078 },
                    end: { line: 121, column: 26, offset: 4101 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 121, column: 26, offset: 4101 },
                    end: { line: 121, column: 37, offset: 4112 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 121, column: 37, offset: 4112 },
                    end: { line: 121, column: 40, offset: 4115 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 121, column: 40, offset: 4115 },
                    end: { line: 121, column: 63, offset: 4138 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 3, offset: 4078 },
                end: { line: 121, column: 63, offset: 4138 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4076 },
            end: { line: 121, column: 63, offset: 4138 },
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
                    start: { line: 122, column: 3, offset: 4141 },
                    end: { line: 122, column: 16, offset: 4154 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 122, column: 16, offset: 4154 },
                    end: { line: 122, column: 24, offset: 4162 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 122, column: 24, offset: 4162 },
                    end: { line: 122, column: 27, offset: 4165 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 122, column: 27, offset: 4165 },
                    end: { line: 122, column: 40, offset: 4178 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 3, offset: 4141 },
                end: { line: 122, column: 40, offset: 4178 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4139 },
            end: { line: 122, column: 40, offset: 4178 },
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
                    start: { line: 123, column: 3, offset: 4181 },
                    end: { line: 123, column: 15, offset: 4193 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 123, column: 15, offset: 4193 },
                    end: { line: 123, column: 23, offset: 4201 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 123, column: 23, offset: 4201 },
                    end: { line: 123, column: 26, offset: 4204 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 123, column: 26, offset: 4204 },
                    end: { line: 123, column: 38, offset: 4216 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 3, offset: 4181 },
                end: { line: 123, column: 38, offset: 4216 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4179 },
            end: { line: 123, column: 38, offset: 4216 },
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
                    start: { line: 124, column: 3, offset: 4219 },
                    end: { line: 124, column: 16, offset: 4232 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 124, column: 16, offset: 4232 },
                    end: { line: 124, column: 20, offset: 4236 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 124, column: 20, offset: 4236 },
                    end: { line: 124, column: 23, offset: 4239 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 124, column: 23, offset: 4239 },
                    end: { line: 124, column: 31, offset: 4247 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 3, offset: 4219 },
                end: { line: 124, column: 31, offset: 4247 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 4217 },
            end: { line: 124, column: 31, offset: 4247 },
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
                    start: { line: 125, column: 3, offset: 4250 },
                    end: { line: 125, column: 13, offset: 4260 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 125, column: 13, offset: 4260 },
                    end: { line: 125, column: 22, offset: 4269 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 125, column: 22, offset: 4269 },
                    end: { line: 125, column: 25, offset: 4272 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 125, column: 25, offset: 4272 },
                    end: { line: 125, column: 35, offset: 4282 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 3, offset: 4250 },
                end: { line: 125, column: 35, offset: 4282 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4248 },
            end: { line: 125, column: 35, offset: 4282 },
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
                    start: { line: 126, column: 3, offset: 4285 },
                    end: { line: 126, column: 17, offset: 4299 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 126, column: 17, offset: 4299 },
                    end: { line: 126, column: 24, offset: 4306 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 126, column: 24, offset: 4306 },
                    end: { line: 126, column: 27, offset: 4309 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 126, column: 27, offset: 4309 },
                    end: { line: 126, column: 37, offset: 4319 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 126, column: 3, offset: 4285 },
                end: { line: 126, column: 37, offset: 4319 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 126, column: 1, offset: 4283 },
            end: { line: 126, column: 37, offset: 4319 },
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
                    start: { line: 127, column: 3, offset: 4322 },
                    end: { line: 127, column: 14, offset: 4333 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 127, column: 14, offset: 4333 },
                    end: { line: 127, column: 21, offset: 4340 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 127, column: 21, offset: 4340 },
                    end: { line: 127, column: 24, offset: 4343 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 127, column: 24, offset: 4343 },
                    end: { line: 127, column: 34, offset: 4353 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 127, column: 3, offset: 4322 },
                end: { line: 127, column: 34, offset: 4353 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4320 },
            end: { line: 127, column: 34, offset: 4353 },
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
                    start: { line: 128, column: 3, offset: 4356 },
                    end: { line: 128, column: 26, offset: 4379 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 128, column: 26, offset: 4379 },
                    end: { line: 128, column: 34, offset: 4387 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 128, column: 34, offset: 4387 },
                    end: { line: 128, column: 37, offset: 4390 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 128, column: 37, offset: 4390 },
                    end: { line: 128, column: 48, offset: 4401 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 3, offset: 4356 },
                end: { line: 128, column: 48, offset: 4401 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4354 },
            end: { line: 128, column: 48, offset: 4401 },
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
                    start: { line: 129, column: 3, offset: 4404 },
                    end: { line: 129, column: 23, offset: 4424 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 129, column: 23, offset: 4424 },
                    end: { line: 129, column: 31, offset: 4432 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 129, column: 31, offset: 4432 },
                    end: { line: 129, column: 34, offset: 4435 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 129, column: 34, offset: 4435 },
                    end: { line: 129, column: 45, offset: 4446 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 129, column: 3, offset: 4404 },
                end: { line: 129, column: 45, offset: 4446 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 1, offset: 4402 },
            end: { line: 129, column: 45, offset: 4446 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4076 },
        end: { line: 129, column: 45, offset: 4446 },
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
        start: { line: 131, column: 1, offset: 4448 },
        end: { line: 151, column: 4, offset: 4863 },
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
            start: { line: 153, column: 3, offset: 4867 },
            end: { line: 153, column: 31, offset: 4895 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4865 },
        end: { line: 153, column: 31, offset: 4895 },
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
                start: { line: 154, column: 3, offset: 4898 },
                end: { line: 154, column: 24, offset: 4919 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 4896 },
            end: { line: 154, column: 26, offset: 4921 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 154, column: 26, offset: 4921 },
            end: { line: 154, column: 62, offset: 4957 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 154, column: 62, offset: 4957 },
            end: { line: 154, column: 72, offset: 4967 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 154, column: 72, offset: 4967 },
            end: { line: 154, column: 73, offset: 4968 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4896 },
        end: { line: 154, column: 73, offset: 4968 },
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
            start: { line: 156, column: 1, offset: 4970 },
            end: { line: 156, column: 98, offset: 5067 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 156, column: 1, offset: 4970 },
        end: { line: 156, column: 98, offset: 5067 },
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
        start: { line: 158, column: 1, offset: 5069 },
        end: { line: 169, column: 4, offset: 5304 },
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
            start: { line: 171, column: 3, offset: 5308 },
            end: { line: 171, column: 14, offset: 5319 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 171, column: 1, offset: 5306 },
        end: { line: 171, column: 14, offset: 5319 },
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
                start: { line: 172, column: 3, offset: 5322 },
                end: { line: 172, column: 44, offset: 5363 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 172, column: 1, offset: 5320 },
            end: { line: 172, column: 46, offset: 5365 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 172, column: 46, offset: 5365 },
            end: { line: 172, column: 126, offset: 5445 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 172, column: 126, offset: 5445 },
            end: { line: 172, column: 131, offset: 5450 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 172, column: 131, offset: 5450 },
            end: { line: 172, column: 133, offset: 5452 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 172, column: 133, offset: 5452 },
            end: { line: 172, column: 141, offset: 5460 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 172, column: 141, offset: 5460 },
            end: { line: 172, column: 146, offset: 5465 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 172, column: 146, offset: 5465 },
            end: { line: 172, column: 155, offset: 5474 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 172, column: 155, offset: 5474 },
            end: { line: 172, column: 180, offset: 5499 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 172, column: 180, offset: 5499 },
            end: { line: 172, column: 188, offset: 5507 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 172, column: 188, offset: 5507 },
            end: { line: 172, column: 192, offset: 5511 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 172, column: 192, offset: 5511 },
            end: { line: 172, column: 203, offset: 5522 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 172, column: 203, offset: 5522 },
            end: { line: 172, column: 337, offset: 5656 },
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
                start: { line: 172, column: 338, offset: 5657 },
                end: { line: 172, column: 342, offset: 5661 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 172, column: 337, offset: 5656 },
            end: { line: 172, column: 411, offset: 5730 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 172, column: 411, offset: 5730 },
            end: { line: 172, column: 412, offset: 5731 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 5320 },
        end: { line: 172, column: 412, offset: 5731 },
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
        start: { line: 174, column: 1, offset: 5733 },
        end: { line: 202, column: 4, offset: 6557 },
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
            start: { line: 204, column: 1, offset: 6559 },
            end: { line: 204, column: 92, offset: 6650 },
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
                start: { line: 204, column: 93, offset: 6651 },
                end: { line: 204, column: 105, offset: 6663 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 204, column: 92, offset: 6650 },
            end: { line: 204, column: 122, offset: 6680 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 204, column: 122, offset: 6680 },
            end: { line: 204, column: 144, offset: 6702 },
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
                start: { line: 204, column: 145, offset: 6703 },
                end: { line: 204, column: 149, offset: 6707 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 204, column: 144, offset: 6702 },
            end: { line: 204, column: 157, offset: 6715 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 204, column: 157, offset: 6715 },
            end: { line: 204, column: 158, offset: 6716 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 6559 },
        end: { line: 204, column: 158, offset: 6716 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 205, column: 1, offset: 6717 }
  }
}
