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
      meta: '[theme=default]',
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
        end: { line: 12, column: 4, offset: 416 },
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
            start: { line: 14, column: 3, offset: 420 },
            end: { line: 14, column: 20, offset: 437 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 418 },
        end: { line: 14, column: 20, offset: 437 },
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
                        start: { line: 16, column: 6, offset: 444 },
                        end: { line: 16, column: 18, offset: 456 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 16, column: 5, offset: 443 },
                    end: { line: 16, column: 33, offset: 471 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 16, column: 5, offset: 443 },
                end: { line: 16, column: 33, offset: 471 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 16, column: 1, offset: 439 },
            end: { line: 16, column: 33, offset: 471 },
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
                        start: { line: 17, column: 6, offset: 477 },
                        end: { line: 17, column: 26, offset: 497 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 17, column: 5, offset: 476 },
                    end: { line: 17, column: 50, offset: 521 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 17, column: 5, offset: 476 },
                end: { line: 17, column: 50, offset: 521 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 17, column: 1, offset: 472 },
            end: { line: 17, column: 50, offset: 521 },
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
                        start: { line: 18, column: 6, offset: 527 },
                        end: { line: 18, column: 24, offset: 545 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 526 },
                    end: { line: 18, column: 46, offset: 567 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 526 },
                end: { line: 18, column: 46, offset: 567 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 522 },
            end: { line: 18, column: 46, offset: 567 },
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
                        start: { line: 19, column: 6, offset: 573 },
                        end: { line: 19, column: 18, offset: 585 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 572 },
                    end: { line: 19, column: 34, offset: 601 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 572 },
                end: { line: 19, column: 34, offset: 601 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 568 },
            end: { line: 19, column: 34, offset: 601 },
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
                  url: '#control-flow',
                  children: [
                    {
                      type: 'text',
                      value: 'Control Flow',
                      position: {
                        start: { line: 20, column: 6, offset: 607 },
                        end: { line: 20, column: 18, offset: 619 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 606 },
                    end: { line: 20, column: 34, offset: 635 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 606 },
                end: { line: 20, column: 34, offset: 635 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 602 },
            end: { line: 20, column: 34, offset: 635 },
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
                  url: '#error-handling',
                  children: [
                    {
                      type: 'text',
                      value: 'Error Handling',
                      position: {
                        start: { line: 21, column: 6, offset: 641 },
                        end: { line: 21, column: 20, offset: 655 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 640 },
                    end: { line: 21, column: 38, offset: 673 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 640 },
                end: { line: 21, column: 38, offset: 673 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 636 },
            end: { line: 21, column: 38, offset: 673 },
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
                        start: { line: 22, column: 6, offset: 679 },
                        end: { line: 22, column: 17, offset: 690 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 678 },
                    end: { line: 22, column: 32, offset: 705 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 678 },
                end: { line: 22, column: 32, offset: 705 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 674 },
            end: { line: 22, column: 32, offset: 705 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 439 },
        end: { line: 22, column: 32, offset: 705 },
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
                start: { line: 24, column: 4, offset: 710 },
                end: { line: 24, column: 5, offset: 711 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 24, column: 3, offset: 709 },
            end: { line: 24, column: 6, offset: 712 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 24, column: 6, offset: 712 },
            end: { line: 24, column: 15, offset: 721 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 707 },
        end: { line: 24, column: 15, offset: 721 },
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
              value: 'Stop worrying about async',
              position: {
                start: { line: 25, column: 3, offset: 724 },
                end: { line: 25, column: 28, offset: 749 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 1, offset: 722 },
            end: { line: 25, column: 30, offset: 751 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 25, column: 30, offset: 751 },
            end: { line: 25, column: 116, offset: 837 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 25, column: 116, offset: 837 },
            end: { line: 25, column: 121, offset: 842 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 25, column: 121, offset: 842 },
            end: { line: 25, column: 265, offset: 986 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 25, column: 265, offset: 986 },
            end: { line: 25, column: 278, offset: 999 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 25, column: 278, offset: 999 },
            end: { line: 25, column: 302, offset: 1023 },
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
                start: { line: 25, column: 303, offset: 1024 },
                end: { line: 25, column: 307, offset: 1028 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 302, offset: 1023 },
            end: { line: 25, column: 388, offset: 1109 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 25, column: 388, offset: 1109 },
            end: { line: 25, column: 389, offset: 1110 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 722 },
        end: { line: 25, column: 389, offset: 1110 },
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
        start: { line: 27, column: 1, offset: 1112 },
        end: { line: 35, column: 4, offset: 1320 },
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
            start: { line: 37, column: 3, offset: 1324 },
            end: { line: 37, column: 23, offset: 1344 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1322 },
        end: { line: 37, column: 23, offset: 1344 },
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
                start: { line: 38, column: 3, offset: 1347 },
                end: { line: 38, column: 25, offset: 1369 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 38, column: 1, offset: 1345 },
            end: { line: 38, column: 27, offset: 1371 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 38, column: 27, offset: 1371 },
            end: { line: 38, column: 64, offset: 1408 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 64, offset: 1408 },
            end: { line: 38, column: 70, offset: 1414 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 38, column: 70, offset: 1414 },
            end: { line: 38, column: 92, offset: 1436 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 92, offset: 1436 },
            end: { line: 38, column: 98, offset: 1442 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application as a combination of smaller components via ',
          position: {
            start: { line: 38, column: 98, offset: 1442 },
            end: { line: 38, column: 328, offset: 1672 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 328, offset: 1672 },
            end: { line: 38, column: 334, offset: 1678 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 38, column: 334, offset: 1678 },
            end: { line: 38, column: 335, offset: 1679 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1345 },
        end: { line: 38, column: 335, offset: 1679 },
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
        start: { line: 40, column: 1, offset: 1681 },
        end: { line: 57, column: 4, offset: 2086 },
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
            start: { line: 59, column: 3, offset: 2090 },
            end: { line: 59, column: 21, offset: 2108 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2088 },
        end: { line: 59, column: 21, offset: 2108 },
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
              value: 'Declaratively massage object shape',
              position: {
                start: { line: 60, column: 3, offset: 2111 },
                end: { line: 60, column: 37, offset: 2145 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 60, column: 1, offset: 2109 },
            end: { line: 60, column: 39, offset: 2147 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " to fit the next function in your pipeline. There may be times when you'll want to extend an object with new properties, or construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 60, column: 39, offset: 2147 },
            end: { line: 60, column: 265, offset: 2373 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 60, column: 265, offset: 2373 },
            end: { line: 60, column: 270, offset: 2378 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 60, column: 270, offset: 2378 },
            end: { line: 60, column: 308, offset: 2416 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 60, column: 308, offset: 2416 },
            end: { line: 60, column: 314, offset: 2422 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 60, column: 314, offset: 2422 },
            end: { line: 60, column: 318, offset: 2426 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 60, column: 318, offset: 2426 },
            end: { line: 60, column: 326, offset: 2434 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 60, column: 326, offset: 2434 },
            end: { line: 60, column: 327, offset: 2435 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2109 },
        end: { line: 60, column: 327, offset: 2435 },
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
        start: { line: 62, column: 1, offset: 2437 },
        end: { line: 92, column: 4, offset: 2995 },
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
            start: { line: 94, column: 3, offset: 2999 },
            end: { line: 94, column: 15, offset: 3011 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 2997 },
        end: { line: 94, column: 15, offset: 3011 },
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
                start: { line: 95, column: 3, offset: 3014 },
                end: { line: 95, column: 24, offset: 3035 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3012 },
            end: { line: 95, column: 26, offset: 3037 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 95, column: 26, offset: 3037 },
            end: { line: 95, column: 64, offset: 3075 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 95, column: 64, offset: 3075 },
            end: { line: 95, column: 69, offset: 3080 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 95, column: 69, offset: 3080 },
            end: { line: 95, column: 302, offset: 3313 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3012 },
        end: { line: 95, column: 302, offset: 3313 },
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
        start: { line: 97, column: 1, offset: 3315 },
        end: { line: 116, column: 4, offset: 3841 },
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
          value: 'Control Flow',
          position: {
            start: { line: 118, column: 3, offset: 3845 },
            end: { line: 118, column: 15, offset: 3857 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3843 },
        end: { line: 118, column: 15, offset: 3857 },
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
              value: 'Create declarative, SQL-esque logical expressions',
              position: {
                start: { line: 119, column: 3, offset: 3860 },
                end: { line: 119, column: 52, offset: 3909 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3858 },
            end: { line: 119, column: 54, offset: 3911 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 119, column: 54, offset: 3911 },
            end: { line: 119, column: 197, offset: 4054 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3858 },
        end: { line: 119, column: 197, offset: 4054 },
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
                    start: { line: 121, column: 3, offset: 4058 },
                    end: { line: 121, column: 26, offset: 4081 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 121, column: 26, offset: 4081 },
                    end: { line: 121, column: 37, offset: 4092 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 121, column: 37, offset: 4092 },
                    end: { line: 121, column: 40, offset: 4095 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 121, column: 40, offset: 4095 },
                    end: { line: 121, column: 63, offset: 4118 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 3, offset: 4058 },
                end: { line: 121, column: 63, offset: 4118 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4056 },
            end: { line: 121, column: 63, offset: 4118 },
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
                    start: { line: 122, column: 3, offset: 4121 },
                    end: { line: 122, column: 16, offset: 4134 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 122, column: 16, offset: 4134 },
                    end: { line: 122, column: 24, offset: 4142 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 122, column: 24, offset: 4142 },
                    end: { line: 122, column: 27, offset: 4145 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 122, column: 27, offset: 4145 },
                    end: { line: 122, column: 40, offset: 4158 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 3, offset: 4121 },
                end: { line: 122, column: 40, offset: 4158 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4119 },
            end: { line: 122, column: 40, offset: 4158 },
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
                    start: { line: 123, column: 3, offset: 4161 },
                    end: { line: 123, column: 15, offset: 4173 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 123, column: 15, offset: 4173 },
                    end: { line: 123, column: 23, offset: 4181 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 123, column: 23, offset: 4181 },
                    end: { line: 123, column: 26, offset: 4184 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 123, column: 26, offset: 4184 },
                    end: { line: 123, column: 38, offset: 4196 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 3, offset: 4161 },
                end: { line: 123, column: 38, offset: 4196 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4159 },
            end: { line: 123, column: 38, offset: 4196 },
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
                    start: { line: 124, column: 3, offset: 4199 },
                    end: { line: 124, column: 16, offset: 4212 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 124, column: 16, offset: 4212 },
                    end: { line: 124, column: 20, offset: 4216 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 124, column: 20, offset: 4216 },
                    end: { line: 124, column: 23, offset: 4219 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 124, column: 23, offset: 4219 },
                    end: { line: 124, column: 31, offset: 4227 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 3, offset: 4199 },
                end: { line: 124, column: 31, offset: 4227 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 4197 },
            end: { line: 124, column: 31, offset: 4227 },
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
                    start: { line: 125, column: 3, offset: 4230 },
                    end: { line: 125, column: 13, offset: 4240 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 125, column: 13, offset: 4240 },
                    end: { line: 125, column: 22, offset: 4249 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 125, column: 22, offset: 4249 },
                    end: { line: 125, column: 25, offset: 4252 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 125, column: 25, offset: 4252 },
                    end: { line: 125, column: 35, offset: 4262 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 3, offset: 4230 },
                end: { line: 125, column: 35, offset: 4262 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4228 },
            end: { line: 125, column: 35, offset: 4262 },
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
                    start: { line: 126, column: 3, offset: 4265 },
                    end: { line: 126, column: 17, offset: 4279 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 126, column: 17, offset: 4279 },
                    end: { line: 126, column: 24, offset: 4286 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 126, column: 24, offset: 4286 },
                    end: { line: 126, column: 27, offset: 4289 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 126, column: 27, offset: 4289 },
                    end: { line: 126, column: 37, offset: 4299 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 126, column: 3, offset: 4265 },
                end: { line: 126, column: 37, offset: 4299 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 126, column: 1, offset: 4263 },
            end: { line: 126, column: 37, offset: 4299 },
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
                    start: { line: 127, column: 3, offset: 4302 },
                    end: { line: 127, column: 14, offset: 4313 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 127, column: 14, offset: 4313 },
                    end: { line: 127, column: 21, offset: 4320 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 127, column: 21, offset: 4320 },
                    end: { line: 127, column: 24, offset: 4323 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 127, column: 24, offset: 4323 },
                    end: { line: 127, column: 34, offset: 4333 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 127, column: 3, offset: 4302 },
                end: { line: 127, column: 34, offset: 4333 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4300 },
            end: { line: 127, column: 34, offset: 4333 },
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
                    start: { line: 128, column: 3, offset: 4336 },
                    end: { line: 128, column: 26, offset: 4359 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 128, column: 26, offset: 4359 },
                    end: { line: 128, column: 34, offset: 4367 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 128, column: 34, offset: 4367 },
                    end: { line: 128, column: 37, offset: 4370 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 128, column: 37, offset: 4370 },
                    end: { line: 128, column: 48, offset: 4381 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 3, offset: 4336 },
                end: { line: 128, column: 48, offset: 4381 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4334 },
            end: { line: 128, column: 48, offset: 4381 },
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
                    start: { line: 129, column: 3, offset: 4384 },
                    end: { line: 129, column: 23, offset: 4404 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 129, column: 23, offset: 4404 },
                    end: { line: 129, column: 31, offset: 4412 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 129, column: 31, offset: 4412 },
                    end: { line: 129, column: 34, offset: 4415 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 129, column: 34, offset: 4415 },
                    end: { line: 129, column: 45, offset: 4426 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 129, column: 3, offset: 4384 },
                end: { line: 129, column: 45, offset: 4426 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 1, offset: 4382 },
            end: { line: 129, column: 45, offset: 4426 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4056 },
        end: { line: 129, column: 45, offset: 4426 },
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
        start: { line: 131, column: 1, offset: 4428 },
        end: { line: 151, column: 4, offset: 4843 },
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
          value: 'Error Handling',
          position: {
            start: { line: 153, column: 3, offset: 4847 },
            end: { line: 153, column: 17, offset: 4861 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4845 },
        end: { line: 153, column: 17, offset: 4861 },
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
              value: 'Handle errors with functions',
              position: {
                start: { line: 154, column: 3, offset: 4864 },
                end: { line: 154, column: 31, offset: 4892 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 4862 },
            end: { line: 154, column: 33, offset: 4894 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 154, column: 33, offset: 4894 },
            end: { line: 154, column: 38, offset: 4899 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 154, column: 38, offset: 4899 },
            end: { line: 154, column: 45, offset: 4906 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 154, column: 45, offset: 4906 },
            end: { line: 154, column: 52, offset: 4913 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 154, column: 52, offset: 4913 },
            end: { line: 154, column: 61, offset: 4922 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 154, column: 61, offset: 4922 },
            end: { line: 154, column: 67, offset: 4928 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 154, column: 67, offset: 4928 },
            end: { line: 154, column: 74, offset: 4935 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 154, column: 74, offset: 4935 },
            end: { line: 154, column: 95, offset: 4956 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 154, column: 95, offset: 4956 },
            end: { line: 154, column: 104, offset: 4965 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected.',
          position: {
            start: { line: 154, column: 104, offset: 4965 },
            end: { line: 154, column: 152, offset: 5013 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4862 },
        end: { line: 154, column: 152, offset: 5013 },
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
        start: { line: 156, column: 1, offset: 5015 },
        end: { line: 167, column: 4, offset: 5250 },
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
            start: { line: 169, column: 3, offset: 5254 },
            end: { line: 169, column: 14, offset: 5265 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 5252 },
        end: { line: 169, column: 14, offset: 5265 },
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
                start: { line: 170, column: 3, offset: 5268 },
                end: { line: 170, column: 44, offset: 5309 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 170, column: 1, offset: 5266 },
            end: { line: 170, column: 46, offset: 5311 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 170, column: 46, offset: 5311 },
            end: { line: 170, column: 126, offset: 5391 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 170, column: 126, offset: 5391 },
            end: { line: 170, column: 131, offset: 5396 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 170, column: 131, offset: 5396 },
            end: { line: 170, column: 133, offset: 5398 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 170, column: 133, offset: 5398 },
            end: { line: 170, column: 141, offset: 5406 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 170, column: 141, offset: 5406 },
            end: { line: 170, column: 146, offset: 5411 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 170, column: 146, offset: 5411 },
            end: { line: 170, column: 155, offset: 5420 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 170, column: 155, offset: 5420 },
            end: { line: 170, column: 180, offset: 5445 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 170, column: 180, offset: 5445 },
            end: { line: 170, column: 188, offset: 5453 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 170, column: 188, offset: 5453 },
            end: { line: 170, column: 192, offset: 5457 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 170, column: 192, offset: 5457 },
            end: { line: 170, column: 203, offset: 5468 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 170, column: 203, offset: 5468 },
            end: { line: 170, column: 337, offset: 5602 },
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
                start: { line: 170, column: 338, offset: 5603 },
                end: { line: 170, column: 342, offset: 5607 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 170, column: 337, offset: 5602 },
            end: { line: 170, column: 411, offset: 5676 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 170, column: 411, offset: 5676 },
            end: { line: 170, column: 412, offset: 5677 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 5266 },
        end: { line: 170, column: 412, offset: 5677 },
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
        start: { line: 172, column: 1, offset: 5679 },
        end: { line: 200, column: 4, offset: 6503 },
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
            start: { line: 202, column: 1, offset: 6505 },
            end: { line: 202, column: 92, offset: 6596 },
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
                start: { line: 202, column: 93, offset: 6597 },
                end: { line: 202, column: 105, offset: 6609 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 202, column: 92, offset: 6596 },
            end: { line: 202, column: 122, offset: 6626 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 202, column: 122, offset: 6626 },
            end: { line: 202, column: 144, offset: 6648 },
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
                start: { line: 202, column: 145, offset: 6649 },
                end: { line: 202, column: 149, offset: 6653 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 202, column: 144, offset: 6648 },
            end: { line: 202, column: 157, offset: 6661 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 202, column: 157, offset: 6661 },
            end: { line: 202, column: 158, offset: 6662 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 6505 },
        end: { line: 202, column: 158, offset: 6662 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 203, column: 1, offset: 6663 }
  }
}
