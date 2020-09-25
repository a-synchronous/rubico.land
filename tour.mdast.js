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
                  url: '#compositional-control-flow',
                  children: [
                    {
                      type: 'text',
                      value: 'Compositional Control Flow',
                      position: {
                        start: { line: 20, column: 6, offset: 607 },
                        end: { line: 20, column: 32, offset: 633 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 606 },
                    end: { line: 20, column: 62, offset: 663 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 606 },
                end: { line: 20, column: 62, offset: 663 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 602 },
            end: { line: 20, column: 62, offset: 663 },
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
                        start: { line: 21, column: 6, offset: 669 },
                        end: { line: 21, column: 34, offset: 697 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 668 },
                    end: { line: 21, column: 66, offset: 729 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 668 },
                end: { line: 21, column: 66, offset: 729 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 664 },
            end: { line: 21, column: 66, offset: 729 },
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
                        start: { line: 22, column: 6, offset: 735 },
                        end: { line: 22, column: 17, offset: 746 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 734 },
                    end: { line: 22, column: 32, offset: 761 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 734 },
                end: { line: 22, column: 32, offset: 761 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 730 },
            end: { line: 22, column: 32, offset: 761 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 439 },
        end: { line: 22, column: 32, offset: 761 },
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
                start: { line: 24, column: 4, offset: 766 },
                end: { line: 24, column: 5, offset: 767 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 24, column: 3, offset: 765 },
            end: { line: 24, column: 6, offset: 768 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 24, column: 6, offset: 768 },
            end: { line: 24, column: 15, offset: 777 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 763 },
        end: { line: 24, column: 15, offset: 777 },
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
                start: { line: 25, column: 3, offset: 780 },
                end: { line: 25, column: 28, offset: 805 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 1, offset: 778 },
            end: { line: 25, column: 30, offset: 807 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - you can pass synchronous or asynchronous functions to any rubico method, hence the ',
          position: {
            start: { line: 25, column: 30, offset: 807 },
            end: { line: 25, column: 116, offset: 893 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '[a]',
          position: {
            start: { line: 25, column: 116, offset: 893 },
            end: { line: 25, column: 121, offset: 898 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' (optionally asynchronous). All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 25, column: 121, offset: 898 },
            end: { line: 25, column: 265, offset: 1042 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 25, column: 265, offset: 1042 },
            end: { line: 25, column: 278, offset: 1055 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 25, column: 278, offset: 1055 },
            end: { line: 25, column: 302, offset: 1079 },
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
                start: { line: 25, column: 303, offset: 1080 },
                end: { line: 25, column: 307, offset: 1084 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 302, offset: 1079 },
            end: { line: 25, column: 388, offset: 1165 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 25, column: 388, offset: 1165 },
            end: { line: 25, column: 389, offset: 1166 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 778 },
        end: { line: 25, column: 389, offset: 1166 },
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
        start: { line: 27, column: 1, offset: 1168 },
        end: { line: 35, column: 4, offset: 1376 },
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
            start: { line: 37, column: 3, offset: 1380 },
            end: { line: 37, column: 23, offset: 1400 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1378 },
        end: { line: 37, column: 23, offset: 1400 },
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
                start: { line: 38, column: 3, offset: 1403 },
                end: { line: 38, column: 25, offset: 1425 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 38, column: 1, offset: 1401 },
            end: { line: 38, column: 27, offset: 1427 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' by chaining functions together with ',
          position: {
            start: { line: 38, column: 27, offset: 1427 },
            end: { line: 38, column: 64, offset: 1464 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 64, offset: 1464 },
            end: { line: 38, column: 70, offset: 1470 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 38, column: 70, offset: 1470 },
            end: { line: 38, column: 92, offset: 1492 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 92, offset: 1492 },
            end: { line: 38, column: 98, offset: 1498 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application as a combination of smaller components via ',
          position: {
            start: { line: 38, column: 98, offset: 1498 },
            end: { line: 38, column: 328, offset: 1728 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 328, offset: 1728 },
            end: { line: 38, column: 334, offset: 1734 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 38, column: 334, offset: 1734 },
            end: { line: 38, column: 335, offset: 1735 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1401 },
        end: { line: 38, column: 335, offset: 1735 },
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
        start: { line: 40, column: 1, offset: 1737 },
        end: { line: 57, column: 4, offset: 2139 },
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
            start: { line: 59, column: 3, offset: 2143 },
            end: { line: 59, column: 21, offset: 2161 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2141 },
        end: { line: 59, column: 21, offset: 2161 },
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
                start: { line: 60, column: 3, offset: 2164 },
                end: { line: 60, column: 34, offset: 2195 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 60, column: 1, offset: 2162 },
            end: { line: 60, column: 36, offset: 2197 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " - there may be times when you'll want to extend an object in a pipeline with new properties, or construct a new object from an existing one. For times like these, use the property accessor function ",
          position: {
            start: { line: 60, column: 36, offset: 2197 },
            end: { line: 60, column: 235, offset: 2396 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 60, column: 235, offset: 2396 },
            end: { line: 60, column: 240, offset: 2401 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' in conjunction with object composers ',
          position: {
            start: { line: 60, column: 240, offset: 2401 },
            end: { line: 60, column: 278, offset: 2439 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 60, column: 278, offset: 2439 },
            end: { line: 60, column: 284, offset: 2445 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 60, column: 284, offset: 2445 },
            end: { line: 60, column: 288, offset: 2449 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 60, column: 288, offset: 2449 },
            end: { line: 60, column: 296, offset: 2457 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 60, column: 296, offset: 2457 },
            end: { line: 60, column: 297, offset: 2458 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2162 },
        end: { line: 60, column: 297, offset: 2458 },
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
        start: { line: 62, column: 1, offset: 2460 },
        end: { line: 92, column: 4, offset: 3018 },
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
            start: { line: 94, column: 3, offset: 3022 },
            end: { line: 94, column: 15, offset: 3034 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3020 },
        end: { line: 94, column: 15, offset: 3034 },
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
                start: { line: 95, column: 3, offset: 3037 },
                end: { line: 95, column: 24, offset: 3058 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3035 },
            end: { line: 95, column: 26, offset: 3060 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - in addition to arrays, you can use ',
          position: {
            start: { line: 95, column: 26, offset: 3060 },
            end: { line: 95, column: 64, offset: 3098 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 95, column: 64, offset: 3098 },
            end: { line: 95, column: 69, offset: 3103 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 95, column: 69, offset: 3103 },
            end: { line: 95, column: 302, offset: 3336 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3035 },
        end: { line: 95, column: 302, offset: 3336 },
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
        start: { line: 97, column: 1, offset: 3338 },
        end: { line: 116, column: 4, offset: 3864 },
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
            start: { line: 118, column: 3, offset: 3868 },
            end: { line: 118, column: 29, offset: 3894 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3866 },
        end: { line: 118, column: 29, offset: 3894 },
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
                start: { line: 119, column: 3, offset: 3897 },
                end: { line: 119, column: 51, offset: 3945 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3895 },
            end: { line: 119, column: 53, offset: 3947 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 119, column: 53, offset: 3947 },
            end: { line: 119, column: 196, offset: 4090 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3895 },
        end: { line: 119, column: 196, offset: 4090 },
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
                    start: { line: 121, column: 3, offset: 4094 },
                    end: { line: 121, column: 26, offset: 4117 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 121, column: 26, offset: 4117 },
                    end: { line: 121, column: 37, offset: 4128 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 121, column: 37, offset: 4128 },
                    end: { line: 121, column: 40, offset: 4131 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 121, column: 40, offset: 4131 },
                    end: { line: 121, column: 63, offset: 4154 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 3, offset: 4094 },
                end: { line: 121, column: 63, offset: 4154 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4092 },
            end: { line: 121, column: 63, offset: 4154 },
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
                    start: { line: 122, column: 3, offset: 4157 },
                    end: { line: 122, column: 16, offset: 4170 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 122, column: 16, offset: 4170 },
                    end: { line: 122, column: 24, offset: 4178 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 122, column: 24, offset: 4178 },
                    end: { line: 122, column: 27, offset: 4181 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 122, column: 27, offset: 4181 },
                    end: { line: 122, column: 40, offset: 4194 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 3, offset: 4157 },
                end: { line: 122, column: 40, offset: 4194 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4155 },
            end: { line: 122, column: 40, offset: 4194 },
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
                    start: { line: 123, column: 3, offset: 4197 },
                    end: { line: 123, column: 15, offset: 4209 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 123, column: 15, offset: 4209 },
                    end: { line: 123, column: 23, offset: 4217 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 123, column: 23, offset: 4217 },
                    end: { line: 123, column: 26, offset: 4220 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 123, column: 26, offset: 4220 },
                    end: { line: 123, column: 38, offset: 4232 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 3, offset: 4197 },
                end: { line: 123, column: 38, offset: 4232 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4195 },
            end: { line: 123, column: 38, offset: 4232 },
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
                    start: { line: 124, column: 3, offset: 4235 },
                    end: { line: 124, column: 16, offset: 4248 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 124, column: 16, offset: 4248 },
                    end: { line: 124, column: 20, offset: 4252 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 124, column: 20, offset: 4252 },
                    end: { line: 124, column: 23, offset: 4255 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 124, column: 23, offset: 4255 },
                    end: { line: 124, column: 31, offset: 4263 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 3, offset: 4235 },
                end: { line: 124, column: 31, offset: 4263 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 4233 },
            end: { line: 124, column: 31, offset: 4263 },
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
                    start: { line: 125, column: 3, offset: 4266 },
                    end: { line: 125, column: 13, offset: 4276 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 125, column: 13, offset: 4276 },
                    end: { line: 125, column: 22, offset: 4285 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 125, column: 22, offset: 4285 },
                    end: { line: 125, column: 25, offset: 4288 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 125, column: 25, offset: 4288 },
                    end: { line: 125, column: 35, offset: 4298 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 3, offset: 4266 },
                end: { line: 125, column: 35, offset: 4298 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4264 },
            end: { line: 125, column: 35, offset: 4298 },
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
                    start: { line: 126, column: 3, offset: 4301 },
                    end: { line: 126, column: 17, offset: 4315 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 126, column: 17, offset: 4315 },
                    end: { line: 126, column: 24, offset: 4322 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 126, column: 24, offset: 4322 },
                    end: { line: 126, column: 27, offset: 4325 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 126, column: 27, offset: 4325 },
                    end: { line: 126, column: 37, offset: 4335 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 126, column: 3, offset: 4301 },
                end: { line: 126, column: 37, offset: 4335 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 126, column: 1, offset: 4299 },
            end: { line: 126, column: 37, offset: 4335 },
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
                    start: { line: 127, column: 3, offset: 4338 },
                    end: { line: 127, column: 14, offset: 4349 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 127, column: 14, offset: 4349 },
                    end: { line: 127, column: 21, offset: 4356 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 127, column: 21, offset: 4356 },
                    end: { line: 127, column: 24, offset: 4359 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 127, column: 24, offset: 4359 },
                    end: { line: 127, column: 34, offset: 4369 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 127, column: 3, offset: 4338 },
                end: { line: 127, column: 34, offset: 4369 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4336 },
            end: { line: 127, column: 34, offset: 4369 },
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
                    start: { line: 128, column: 3, offset: 4372 },
                    end: { line: 128, column: 26, offset: 4395 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 128, column: 26, offset: 4395 },
                    end: { line: 128, column: 34, offset: 4403 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 128, column: 34, offset: 4403 },
                    end: { line: 128, column: 37, offset: 4406 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 128, column: 37, offset: 4406 },
                    end: { line: 128, column: 48, offset: 4417 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 3, offset: 4372 },
                end: { line: 128, column: 48, offset: 4417 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4370 },
            end: { line: 128, column: 48, offset: 4417 },
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
                    start: { line: 129, column: 3, offset: 4420 },
                    end: { line: 129, column: 23, offset: 4440 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 129, column: 23, offset: 4440 },
                    end: { line: 129, column: 31, offset: 4448 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 129, column: 31, offset: 4448 },
                    end: { line: 129, column: 34, offset: 4451 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 129, column: 34, offset: 4451 },
                    end: { line: 129, column: 45, offset: 4462 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 129, column: 3, offset: 4420 },
                end: { line: 129, column: 45, offset: 4462 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 1, offset: 4418 },
            end: { line: 129, column: 45, offset: 4462 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4092 },
        end: { line: 129, column: 45, offset: 4462 },
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
        start: { line: 131, column: 1, offset: 4464 },
        end: { line: 151, column: 4, offset: 4879 },
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
            start: { line: 153, column: 3, offset: 4883 },
            end: { line: 153, column: 31, offset: 4911 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4881 },
        end: { line: 153, column: 31, offset: 4911 },
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
                start: { line: 154, column: 3, offset: 4914 },
                end: { line: 154, column: 24, offset: 4935 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 4912 },
            end: { line: 154, column: 26, offset: 4937 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', synchronous or asynchronous, with ',
          position: {
            start: { line: 154, column: 26, offset: 4937 },
            end: { line: 154, column: 62, offset: 4973 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 154, column: 62, offset: 4973 },
            end: { line: 154, column: 72, offset: 4983 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 154, column: 72, offset: 4983 },
            end: { line: 154, column: 73, offset: 4984 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4912 },
        end: { line: 154, column: 73, offset: 4984 },
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
            start: { line: 156, column: 1, offset: 4986 },
            end: { line: 156, column: 98, offset: 5083 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 156, column: 1, offset: 4986 },
        end: { line: 156, column: 98, offset: 5083 },
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
        start: { line: 158, column: 1, offset: 5085 },
        end: { line: 169, column: 4, offset: 5320 },
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
            start: { line: 171, column: 3, offset: 5324 },
            end: { line: 171, column: 14, offset: 5335 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 171, column: 1, offset: 5322 },
        end: { line: 171, column: 14, offset: 5335 },
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
                start: { line: 172, column: 3, offset: 5338 },
                end: { line: 172, column: 44, offset: 5379 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 172, column: 1, offset: 5336 },
            end: { line: 172, column: 46, offset: 5381 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 172, column: 46, offset: 5381 },
            end: { line: 172, column: 126, offset: 5461 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 172, column: 126, offset: 5461 },
            end: { line: 172, column: 131, offset: 5466 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 172, column: 131, offset: 5466 },
            end: { line: 172, column: 133, offset: 5468 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 172, column: 133, offset: 5468 },
            end: { line: 172, column: 141, offset: 5476 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 172, column: 141, offset: 5476 },
            end: { line: 172, column: 146, offset: 5481 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 172, column: 146, offset: 5481 },
            end: { line: 172, column: 155, offset: 5490 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 172, column: 155, offset: 5490 },
            end: { line: 172, column: 180, offset: 5515 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 172, column: 180, offset: 5515 },
            end: { line: 172, column: 188, offset: 5523 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 172, column: 188, offset: 5523 },
            end: { line: 172, column: 192, offset: 5527 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 172, column: 192, offset: 5527 },
            end: { line: 172, column: 203, offset: 5538 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 172, column: 203, offset: 5538 },
            end: { line: 172, column: 337, offset: 5672 },
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
                start: { line: 172, column: 338, offset: 5673 },
                end: { line: 172, column: 342, offset: 5677 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 172, column: 337, offset: 5672 },
            end: { line: 172, column: 411, offset: 5746 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 172, column: 411, offset: 5746 },
            end: { line: 172, column: 412, offset: 5747 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 5336 },
        end: { line: 172, column: 412, offset: 5747 },
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
        start: { line: 174, column: 1, offset: 5749 },
        end: { line: 202, column: 4, offset: 6573 },
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
            start: { line: 204, column: 1, offset: 6575 },
            end: { line: 204, column: 92, offset: 6666 },
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
                start: { line: 204, column: 93, offset: 6667 },
                end: { line: 204, column: 105, offset: 6679 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 204, column: 92, offset: 6666 },
            end: { line: 204, column: 122, offset: 6696 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 204, column: 122, offset: 6696 },
            end: { line: 204, column: 144, offset: 6718 },
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
                start: { line: 204, column: 145, offset: 6719 },
                end: { line: 204, column: 149, offset: 6723 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 204, column: 144, offset: 6718 },
            end: { line: 204, column: 157, offset: 6731 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 204, column: 157, offset: 6731 },
            end: { line: 204, column: 158, offset: 6732 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 6575 },
        end: { line: 204, column: 158, offset: 6732 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 205, column: 1, offset: 6733 }
  }
}
