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
          value: '. Pass synchronous or asynchronous functions to any rubico method. All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 25, column: 30, offset: 751 },
            end: { line: 25, column: 213, offset: 934 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 25, column: 213, offset: 934 },
            end: { line: 25, column: 226, offset: 947 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 25, column: 226, offset: 947 },
            end: { line: 25, column: 250, offset: 971 },
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
                start: { line: 25, column: 251, offset: 972 },
                end: { line: 25, column: 255, offset: 976 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 250, offset: 971 },
            end: { line: 25, column: 336, offset: 1057 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 25, column: 336, offset: 1057 },
            end: { line: 25, column: 337, offset: 1058 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 722 },
        end: { line: 25, column: 337, offset: 1058 },
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
        start: { line: 27, column: 1, offset: 1060 },
        end: { line: 35, column: 4, offset: 1268 },
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
            start: { line: 37, column: 3, offset: 1272 },
            end: { line: 37, column: 23, offset: 1292 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1270 },
        end: { line: 37, column: 23, offset: 1292 },
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
              value: 'Reduce code complexity with pipelines',
              position: {
                start: { line: 38, column: 3, offset: 1295 },
                end: { line: 38, column: 40, offset: 1332 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 38, column: 1, offset: 1293 },
            end: { line: 38, column: 42, offset: 1334 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' created by ',
          position: {
            start: { line: 38, column: 42, offset: 1334 },
            end: { line: 38, column: 54, offset: 1346 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 54, offset: 1346 },
            end: { line: 38, column: 60, offset: 1352 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 38, column: 60, offset: 1352 },
            end: { line: 38, column: 82, offset: 1374 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 38, column: 82, offset: 1374 },
            end: { line: 38, column: 88, offset: 1380 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application as a pipeline of smaller components.',
          position: {
            start: { line: 38, column: 88, offset: 1380 },
            end: { line: 38, column: 311, offset: 1603 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1293 },
        end: { line: 38, column: 311, offset: 1603 },
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
        'const squaredOddsPipeline = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '  // reduce(add), // try uncommenting this reducing function\n' +
        '])\n' +
        '\n' +
        'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        "console.log('input:', numbers) // [1, 2, 3, 4, 5]\n" +
        "console.log('output:', squaredOddsPipeline(numbers)) // [1, 9, 25]",
      position: {
        start: { line: 40, column: 1, offset: 1605 },
        end: { line: 57, column: 4, offset: 2026 },
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
            start: { line: 59, column: 3, offset: 2030 },
            end: { line: 59, column: 21, offset: 2048 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2028 },
        end: { line: 59, column: 21, offset: 2048 },
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
              value: 'Compose objects in pipelines',
              position: {
                start: { line: 60, column: 3, offset: 2051 },
                end: { line: 60, column: 31, offset: 2079 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 60, column: 1, offset: 2049 },
            end: { line: 60, column: 33, offset: 2081 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use object composers ',
          position: {
            start: { line: 60, column: 33, offset: 2081 },
            end: { line: 60, column: 56, offset: 2104 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 60, column: 56, offset: 2104 },
            end: { line: 60, column: 62, offset: 2110 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 60, column: 62, offset: 2110 },
            end: { line: 60, column: 67, offset: 2115 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 60, column: 67, offset: 2115 },
            end: { line: 60, column: 75, offset: 2123 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' with property accessor ',
          position: {
            start: { line: 60, column: 75, offset: 2123 },
            end: { line: 60, column: 99, offset: 2147 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 60, column: 99, offset: 2147 },
            end: { line: 60, column: 104, offset: 2152 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to encompass a full range of object operations inside pipelines. The result is a high level image of your application and its data flow.',
          position: {
            start: { line: 60, column: 104, offset: 2152 },
            end: { line: 60, column: 241, offset: 2289 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2049 },
        end: { line: 60, column: 241, offset: 2289 },
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
        start: { line: 62, column: 1, offset: 2291 },
        end: { line: 92, column: 4, offset: 2849 },
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
            start: { line: 94, column: 3, offset: 2853 },
            end: { line: 94, column: 15, offset: 2865 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 2851 },
        end: { line: 94, column: 15, offset: 2865 },
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
              value: 'Reuse code across arrays and asynchronous streams',
              position: {
                start: { line: 95, column: 3, offset: 2868 },
                end: { line: 95, column: 52, offset: 2917 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 2866 },
            end: { line: 95, column: 54, offset: 2919 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use ',
          position: {
            start: { line: 95, column: 54, offset: 2919 },
            end: { line: 95, column: 60, offset: 2925 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 95, column: 60, offset: 2925 },
            end: { line: 95, column: 65, offset: 2930 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 95, column: 65, offset: 2930 },
            end: { line: 95, column: 67, offset: 2932 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 95, column: 67, offset: 2932 },
            end: { line: 95, column: 75, offset: 2940 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 95, column: 75, offset: 2940 },
            end: { line: 95, column: 77, offset: 2942 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 95, column: 77, offset: 2942 },
            end: { line: 95, column: 85, offset: 2950 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 95, column: 85, offset: 2950 },
            end: { line: 95, column: 87, offset: 2952 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 95, column: 87, offset: 2952 },
            end: { line: 95, column: 98, offset: 2963 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ',  or ',
          position: {
            start: { line: 95, column: 98, offset: 2963 },
            end: { line: 95, column: 104, offset: 2969 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 95, column: 104, offset: 2969 },
            end: { line: 95, column: 113, offset: 2978 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 95, column: 113, offset: 2978 },
            end: { line: 95, column: 346, offset: 3211 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 2866 },
        end: { line: 95, column: 346, offset: 3211 },
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
        start: { line: 97, column: 1, offset: 3213 },
        end: { line: 116, column: 4, offset: 3739 },
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
            start: { line: 118, column: 3, offset: 3743 },
            end: { line: 118, column: 15, offset: 3755 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3741 },
        end: { line: 118, column: 15, offset: 3755 },
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
                start: { line: 119, column: 3, offset: 3758 },
                end: { line: 119, column: 52, offset: 3807 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3756 },
            end: { line: 119, column: 54, offset: 3809 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 119, column: 54, offset: 3809 },
            end: { line: 119, column: 197, offset: 3952 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3756 },
        end: { line: 119, column: 197, offset: 3952 },
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
                    start: { line: 121, column: 3, offset: 3956 },
                    end: { line: 121, column: 26, offset: 3979 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 121, column: 26, offset: 3979 },
                    end: { line: 121, column: 37, offset: 3990 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 121, column: 37, offset: 3990 },
                    end: { line: 121, column: 40, offset: 3993 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 121, column: 40, offset: 3993 },
                    end: { line: 121, column: 63, offset: 4016 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 3, offset: 3956 },
                end: { line: 121, column: 63, offset: 4016 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 3954 },
            end: { line: 121, column: 63, offset: 4016 },
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
                    start: { line: 122, column: 3, offset: 4019 },
                    end: { line: 122, column: 16, offset: 4032 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 122, column: 16, offset: 4032 },
                    end: { line: 122, column: 24, offset: 4040 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 122, column: 24, offset: 4040 },
                    end: { line: 122, column: 27, offset: 4043 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 122, column: 27, offset: 4043 },
                    end: { line: 122, column: 40, offset: 4056 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 3, offset: 4019 },
                end: { line: 122, column: 40, offset: 4056 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 4017 },
            end: { line: 122, column: 40, offset: 4056 },
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
                    start: { line: 123, column: 3, offset: 4059 },
                    end: { line: 123, column: 15, offset: 4071 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 123, column: 15, offset: 4071 },
                    end: { line: 123, column: 23, offset: 4079 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 123, column: 23, offset: 4079 },
                    end: { line: 123, column: 26, offset: 4082 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 123, column: 26, offset: 4082 },
                    end: { line: 123, column: 38, offset: 4094 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 3, offset: 4059 },
                end: { line: 123, column: 38, offset: 4094 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4057 },
            end: { line: 123, column: 38, offset: 4094 },
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
                    start: { line: 124, column: 3, offset: 4097 },
                    end: { line: 124, column: 16, offset: 4110 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 124, column: 16, offset: 4110 },
                    end: { line: 124, column: 20, offset: 4114 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 124, column: 20, offset: 4114 },
                    end: { line: 124, column: 23, offset: 4117 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 124, column: 23, offset: 4117 },
                    end: { line: 124, column: 31, offset: 4125 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 3, offset: 4097 },
                end: { line: 124, column: 31, offset: 4125 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 4095 },
            end: { line: 124, column: 31, offset: 4125 },
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
                    start: { line: 125, column: 3, offset: 4128 },
                    end: { line: 125, column: 13, offset: 4138 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 125, column: 13, offset: 4138 },
                    end: { line: 125, column: 22, offset: 4147 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 125, column: 22, offset: 4147 },
                    end: { line: 125, column: 25, offset: 4150 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 125, column: 25, offset: 4150 },
                    end: { line: 125, column: 35, offset: 4160 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 3, offset: 4128 },
                end: { line: 125, column: 35, offset: 4160 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4126 },
            end: { line: 125, column: 35, offset: 4160 },
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
                    start: { line: 126, column: 3, offset: 4163 },
                    end: { line: 126, column: 17, offset: 4177 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 126, column: 17, offset: 4177 },
                    end: { line: 126, column: 24, offset: 4184 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 126, column: 24, offset: 4184 },
                    end: { line: 126, column: 27, offset: 4187 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 126, column: 27, offset: 4187 },
                    end: { line: 126, column: 37, offset: 4197 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 126, column: 3, offset: 4163 },
                end: { line: 126, column: 37, offset: 4197 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 126, column: 1, offset: 4161 },
            end: { line: 126, column: 37, offset: 4197 },
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
                    start: { line: 127, column: 3, offset: 4200 },
                    end: { line: 127, column: 14, offset: 4211 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 127, column: 14, offset: 4211 },
                    end: { line: 127, column: 21, offset: 4218 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 127, column: 21, offset: 4218 },
                    end: { line: 127, column: 24, offset: 4221 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 127, column: 24, offset: 4221 },
                    end: { line: 127, column: 34, offset: 4231 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 127, column: 3, offset: 4200 },
                end: { line: 127, column: 34, offset: 4231 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4198 },
            end: { line: 127, column: 34, offset: 4231 },
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
                    start: { line: 128, column: 3, offset: 4234 },
                    end: { line: 128, column: 26, offset: 4257 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 128, column: 26, offset: 4257 },
                    end: { line: 128, column: 34, offset: 4265 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 128, column: 34, offset: 4265 },
                    end: { line: 128, column: 37, offset: 4268 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 128, column: 37, offset: 4268 },
                    end: { line: 128, column: 48, offset: 4279 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 3, offset: 4234 },
                end: { line: 128, column: 48, offset: 4279 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4232 },
            end: { line: 128, column: 48, offset: 4279 },
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
                    start: { line: 129, column: 3, offset: 4282 },
                    end: { line: 129, column: 23, offset: 4302 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 129, column: 23, offset: 4302 },
                    end: { line: 129, column: 31, offset: 4310 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 129, column: 31, offset: 4310 },
                    end: { line: 129, column: 34, offset: 4313 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 129, column: 34, offset: 4313 },
                    end: { line: 129, column: 45, offset: 4324 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 129, column: 3, offset: 4282 },
                end: { line: 129, column: 45, offset: 4324 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 1, offset: 4280 },
            end: { line: 129, column: 45, offset: 4324 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 3954 },
        end: { line: 129, column: 45, offset: 4324 },
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
        start: { line: 131, column: 1, offset: 4326 },
        end: { line: 151, column: 4, offset: 4741 },
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
            start: { line: 153, column: 3, offset: 4745 },
            end: { line: 153, column: 17, offset: 4759 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4743 },
        end: { line: 153, column: 17, offset: 4759 },
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
                start: { line: 154, column: 3, offset: 4762 },
                end: { line: 154, column: 31, offset: 4790 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 4760 },
            end: { line: 154, column: 33, offset: 4792 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 154, column: 33, offset: 4792 },
            end: { line: 154, column: 38, offset: 4797 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 154, column: 38, offset: 4797 },
            end: { line: 154, column: 45, offset: 4804 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 154, column: 45, offset: 4804 },
            end: { line: 154, column: 52, offset: 4811 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 154, column: 52, offset: 4811 },
            end: { line: 154, column: 61, offset: 4820 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 154, column: 61, offset: 4820 },
            end: { line: 154, column: 67, offset: 4826 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 154, column: 67, offset: 4826 },
            end: { line: 154, column: 74, offset: 4833 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 154, column: 74, offset: 4833 },
            end: { line: 154, column: 95, offset: 4854 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 154, column: 95, offset: 4854 },
            end: { line: 154, column: 104, offset: 4863 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected.',
          position: {
            start: { line: 154, column: 104, offset: 4863 },
            end: { line: 154, column: 152, offset: 4911 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4760 },
        end: { line: 154, column: 152, offset: 4911 },
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
        start: { line: 156, column: 1, offset: 4913 },
        end: { line: 167, column: 4, offset: 5148 },
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
            start: { line: 169, column: 3, offset: 5152 },
            end: { line: 169, column: 14, offset: 5163 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 5150 },
        end: { line: 169, column: 14, offset: 5163 },
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
                start: { line: 170, column: 3, offset: 5166 },
                end: { line: 170, column: 44, offset: 5207 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 170, column: 1, offset: 5164 },
            end: { line: 170, column: 46, offset: 5209 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 170, column: 46, offset: 5209 },
            end: { line: 170, column: 126, offset: 5289 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 170, column: 126, offset: 5289 },
            end: { line: 170, column: 131, offset: 5294 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 170, column: 131, offset: 5294 },
            end: { line: 170, column: 133, offset: 5296 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 170, column: 133, offset: 5296 },
            end: { line: 170, column: 141, offset: 5304 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 170, column: 141, offset: 5304 },
            end: { line: 170, column: 146, offset: 5309 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 170, column: 146, offset: 5309 },
            end: { line: 170, column: 155, offset: 5318 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 170, column: 155, offset: 5318 },
            end: { line: 170, column: 180, offset: 5343 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 170, column: 180, offset: 5343 },
            end: { line: 170, column: 188, offset: 5351 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 170, column: 188, offset: 5351 },
            end: { line: 170, column: 192, offset: 5355 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 170, column: 192, offset: 5355 },
            end: { line: 170, column: 203, offset: 5366 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 170, column: 203, offset: 5366 },
            end: { line: 170, column: 337, offset: 5500 },
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
                start: { line: 170, column: 338, offset: 5501 },
                end: { line: 170, column: 342, offset: 5505 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 170, column: 337, offset: 5500 },
            end: { line: 170, column: 411, offset: 5574 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 170, column: 411, offset: 5574 },
            end: { line: 170, column: 412, offset: 5575 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 5164 },
        end: { line: 170, column: 412, offset: 5575 },
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
        start: { line: 172, column: 1, offset: 5577 },
        end: { line: 200, column: 4, offset: 6401 },
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
            start: { line: 202, column: 1, offset: 6403 },
            end: { line: 202, column: 92, offset: 6494 },
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
                start: { line: 202, column: 93, offset: 6495 },
                end: { line: 202, column: 105, offset: 6507 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 202, column: 92, offset: 6494 },
            end: { line: 202, column: 122, offset: 6524 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 202, column: 122, offset: 6524 },
            end: { line: 202, column: 144, offset: 6546 },
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
                start: { line: 202, column: 145, offset: 6547 },
                end: { line: 202, column: 149, offset: 6551 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 202, column: 144, offset: 6546 },
            end: { line: 202, column: 157, offset: 6559 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 202, column: 157, offset: 6559 },
            end: { line: 202, column: 158, offset: 6560 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 6403 },
        end: { line: 202, column: 158, offset: 6560 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 203, column: 1, offset: 6561 }
  }
}
