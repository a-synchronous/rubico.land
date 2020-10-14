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
        '  pipe, tap,\n' +
        '  switchCase, tryCatch,\n' +
        '  fork, assign, get, pick, omit,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  and, or, not, any, all,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  // thunkify, curry, __, // coming soon\n' +
        '} = rubico // available globally',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 13, column: 4, offset: 457 },
        indent: [
          1, 1, 1, 1, 1,
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
          value: 'Table of Contents',
          position: {
            start: { line: 15, column: 3, offset: 461 },
            end: { line: 15, column: 20, offset: 478 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 459 },
        end: { line: 15, column: 20, offset: 478 },
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
                        start: { line: 17, column: 6, offset: 485 },
                        end: { line: 17, column: 18, offset: 497 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 17, column: 5, offset: 484 },
                    end: { line: 17, column: 33, offset: 512 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 17, column: 5, offset: 484 },
                end: { line: 17, column: 33, offset: 512 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 17, column: 1, offset: 480 },
            end: { line: 17, column: 33, offset: 512 },
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
                        start: { line: 18, column: 6, offset: 518 },
                        end: { line: 18, column: 26, offset: 538 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 517 },
                    end: { line: 18, column: 50, offset: 562 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 517 },
                end: { line: 18, column: 50, offset: 562 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 513 },
            end: { line: 18, column: 50, offset: 562 },
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
                        start: { line: 19, column: 6, offset: 568 },
                        end: { line: 19, column: 24, offset: 586 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 567 },
                    end: { line: 19, column: 46, offset: 608 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 567 },
                end: { line: 19, column: 46, offset: 608 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 563 },
            end: { line: 19, column: 46, offset: 608 },
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
                        start: { line: 20, column: 6, offset: 614 },
                        end: { line: 20, column: 18, offset: 626 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 613 },
                    end: { line: 20, column: 34, offset: 642 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 613 },
                end: { line: 20, column: 34, offset: 642 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 609 },
            end: { line: 20, column: 34, offset: 642 },
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
                        start: { line: 21, column: 6, offset: 648 },
                        end: { line: 21, column: 18, offset: 660 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 647 },
                    end: { line: 21, column: 34, offset: 676 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 647 },
                end: { line: 21, column: 34, offset: 676 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 643 },
            end: { line: 21, column: 34, offset: 676 },
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
                        start: { line: 22, column: 6, offset: 682 },
                        end: { line: 22, column: 20, offset: 696 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 681 },
                    end: { line: 22, column: 38, offset: 714 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 681 },
                end: { line: 22, column: 38, offset: 714 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 677 },
            end: { line: 22, column: 38, offset: 714 },
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
                        start: { line: 23, column: 6, offset: 720 },
                        end: { line: 23, column: 17, offset: 731 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 5, offset: 719 },
                    end: { line: 23, column: 32, offset: 746 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 23, column: 5, offset: 719 },
                end: { line: 23, column: 32, offset: 746 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 23, column: 1, offset: 715 },
            end: { line: 23, column: 32, offset: 746 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 480 },
        end: { line: 23, column: 32, offset: 746 },
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
                start: { line: 25, column: 4, offset: 751 },
                end: { line: 25, column: 5, offset: 752 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 750 },
            end: { line: 25, column: 6, offset: 753 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 25, column: 6, offset: 753 },
            end: { line: 25, column: 15, offset: 762 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 748 },
        end: { line: 25, column: 15, offset: 762 },
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
                start: { line: 26, column: 3, offset: 765 },
                end: { line: 26, column: 28, offset: 790 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 763 },
            end: { line: 26, column: 30, offset: 792 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any rubico method. All rubico methods handle promise resolution for you, meaning you can run things in parallel without having to call ',
          position: {
            start: { line: 26, column: 30, offset: 792 },
            end: { line: 26, column: 213, offset: 975 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 213, offset: 975 },
            end: { line: 26, column: 226, offset: 988 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. More on this behavior ',
          position: {
            start: { line: 26, column: 226, offset: 988 },
            end: { line: 26, column: 250, offset: 1012 },
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
                start: { line: 26, column: 251, offset: 1013 },
                end: { line: 26, column: 255, offset: 1017 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 250, offset: 1012 },
            end: { line: 26, column: 336, offset: 1098 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 336, offset: 1098 },
            end: { line: 26, column: 337, offset: 1099 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 763 },
        end: { line: 26, column: 337, offset: 1099 },
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
        start: { line: 28, column: 1, offset: 1101 },
        end: { line: 36, column: 4, offset: 1309 },
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
            start: { line: 38, column: 3, offset: 1313 },
            end: { line: 38, column: 23, offset: 1333 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1311 },
        end: { line: 38, column: 23, offset: 1333 },
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
                start: { line: 39, column: 3, offset: 1336 },
                end: { line: 39, column: 40, offset: 1373 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 39, column: 1, offset: 1334 },
            end: { line: 39, column: 42, offset: 1375 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' created by ',
          position: {
            start: { line: 39, column: 42, offset: 1375 },
            end: { line: 39, column: 54, offset: 1387 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 39, column: 54, offset: 1387 },
            end: { line: 39, column: 60, offset: 1393 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. You can think about ',
          position: {
            start: { line: 39, column: 60, offset: 1393 },
            end: { line: 39, column: 82, offset: 1415 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 39, column: 82, offset: 1415 },
            end: { line: 39, column: 88, offset: 1421 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' as an analog to the Unix pipe, though with JavaScript functions instead of command line utilities. Enjoy less bugs, more code reuse, and easier maintenance by composing your application as a pipeline of smaller components.',
          position: {
            start: { line: 39, column: 88, offset: 1421 },
            end: { line: 39, column: 311, offset: 1644 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1334 },
        end: { line: 39, column: 311, offset: 1644 },
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
        start: { line: 41, column: 1, offset: 1646 },
        end: { line: 58, column: 4, offset: 2067 },
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
            start: { line: 60, column: 3, offset: 2071 },
            end: { line: 60, column: 21, offset: 2089 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2069 },
        end: { line: 60, column: 21, offset: 2089 },
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
                start: { line: 61, column: 3, offset: 2092 },
                end: { line: 61, column: 31, offset: 2120 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 61, column: 1, offset: 2090 },
            end: { line: 61, column: 33, offset: 2122 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use object composers ',
          position: {
            start: { line: 61, column: 33, offset: 2122 },
            end: { line: 61, column: 56, offset: 2145 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fork',
          position: {
            start: { line: 61, column: 56, offset: 2145 },
            end: { line: 61, column: 62, offset: 2151 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 61, column: 62, offset: 2151 },
            end: { line: 61, column: 67, offset: 2156 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'assign',
          position: {
            start: { line: 61, column: 67, offset: 2156 },
            end: { line: 61, column: 75, offset: 2164 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' with property accessor ',
          position: {
            start: { line: 61, column: 75, offset: 2164 },
            end: { line: 61, column: 99, offset: 2188 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'get',
          position: {
            start: { line: 61, column: 99, offset: 2188 },
            end: { line: 61, column: 104, offset: 2193 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to encompass a full range of object operations inside pipelines. The result is a high level image of your application and its data flow.',
          position: {
            start: { line: 61, column: 104, offset: 2193 },
            end: { line: 61, column: 241, offset: 2330 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2090 },
        end: { line: 61, column: 241, offset: 2330 },
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
        start: { line: 63, column: 1, offset: 2332 },
        end: { line: 93, column: 4, offset: 2890 },
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
            start: { line: 95, column: 3, offset: 2894 },
            end: { line: 95, column: 15, offset: 2906 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 2892 },
        end: { line: 95, column: 15, offset: 2906 },
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
                start: { line: 96, column: 3, offset: 2909 },
                end: { line: 96, column: 52, offset: 2958 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 2907 },
            end: { line: 96, column: 54, offset: 2960 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use ',
          position: {
            start: { line: 96, column: 54, offset: 2960 },
            end: { line: 96, column: 60, offset: 2966 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 96, column: 60, offset: 2966 },
            end: { line: 96, column: 65, offset: 2971 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 96, column: 65, offset: 2971 },
            end: { line: 96, column: 67, offset: 2973 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 96, column: 67, offset: 2973 },
            end: { line: 96, column: 75, offset: 2981 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 96, column: 75, offset: 2981 },
            end: { line: 96, column: 77, offset: 2983 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 96, column: 77, offset: 2983 },
            end: { line: 96, column: 85, offset: 2991 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 96, column: 85, offset: 2991 },
            end: { line: 96, column: 87, offset: 2993 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 96, column: 87, offset: 2993 },
            end: { line: 96, column: 98, offset: 3004 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ',  or ',
          position: {
            start: { line: 96, column: 98, offset: 3004 },
            end: { line: 96, column: 104, offset: 3010 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 96, column: 104, offset: 3010 },
            end: { line: 96, column: 113, offset: 3019 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 96, column: 113, offset: 3019 },
            end: { line: 96, column: 346, offset: 3252 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 2907 },
        end: { line: 96, column: 346, offset: 3252 },
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
        start: { line: 98, column: 1, offset: 3254 },
        end: { line: 117, column: 4, offset: 3780 },
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
            start: { line: 119, column: 3, offset: 3784 },
            end: { line: 119, column: 15, offset: 3796 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3782 },
        end: { line: 119, column: 15, offset: 3796 },
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
                start: { line: 120, column: 3, offset: 3799 },
                end: { line: 120, column: 52, offset: 3848 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 3797 },
            end: { line: 120, column: 54, offset: 3850 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 120, column: 54, offset: 3850 },
            end: { line: 120, column: 197, offset: 3993 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 3797 },
        end: { line: 120, column: 197, offset: 3993 },
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
                    start: { line: 122, column: 3, offset: 3997 },
                    end: { line: 122, column: 26, offset: 4020 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 122, column: 26, offset: 4020 },
                    end: { line: 122, column: 37, offset: 4031 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 122, column: 37, offset: 4031 },
                    end: { line: 122, column: 40, offset: 4034 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 122, column: 40, offset: 4034 },
                    end: { line: 122, column: 63, offset: 4057 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 3, offset: 3997 },
                end: { line: 122, column: 63, offset: 4057 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 3995 },
            end: { line: 122, column: 63, offset: 4057 },
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
                    start: { line: 123, column: 3, offset: 4060 },
                    end: { line: 123, column: 16, offset: 4073 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 123, column: 16, offset: 4073 },
                    end: { line: 123, column: 24, offset: 4081 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 123, column: 24, offset: 4081 },
                    end: { line: 123, column: 27, offset: 4084 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 123, column: 27, offset: 4084 },
                    end: { line: 123, column: 40, offset: 4097 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 123, column: 3, offset: 4060 },
                end: { line: 123, column: 40, offset: 4097 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 123, column: 1, offset: 4058 },
            end: { line: 123, column: 40, offset: 4097 },
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
                    start: { line: 124, column: 3, offset: 4100 },
                    end: { line: 124, column: 15, offset: 4112 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 124, column: 15, offset: 4112 },
                    end: { line: 124, column: 23, offset: 4120 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 124, column: 23, offset: 4120 },
                    end: { line: 124, column: 26, offset: 4123 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 124, column: 26, offset: 4123 },
                    end: { line: 124, column: 38, offset: 4135 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 124, column: 3, offset: 4100 },
                end: { line: 124, column: 38, offset: 4135 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 124, column: 1, offset: 4098 },
            end: { line: 124, column: 38, offset: 4135 },
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
                    start: { line: 125, column: 3, offset: 4138 },
                    end: { line: 125, column: 16, offset: 4151 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 125, column: 16, offset: 4151 },
                    end: { line: 125, column: 20, offset: 4155 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 125, column: 20, offset: 4155 },
                    end: { line: 125, column: 23, offset: 4158 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 125, column: 23, offset: 4158 },
                    end: { line: 125, column: 31, offset: 4166 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 3, offset: 4138 },
                end: { line: 125, column: 31, offset: 4166 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4136 },
            end: { line: 125, column: 31, offset: 4166 },
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
                    start: { line: 126, column: 3, offset: 4169 },
                    end: { line: 126, column: 13, offset: 4179 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 126, column: 13, offset: 4179 },
                    end: { line: 126, column: 22, offset: 4188 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 126, column: 22, offset: 4188 },
                    end: { line: 126, column: 25, offset: 4191 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 126, column: 25, offset: 4191 },
                    end: { line: 126, column: 35, offset: 4201 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 126, column: 3, offset: 4169 },
                end: { line: 126, column: 35, offset: 4201 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 126, column: 1, offset: 4167 },
            end: { line: 126, column: 35, offset: 4201 },
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
                    start: { line: 127, column: 3, offset: 4204 },
                    end: { line: 127, column: 17, offset: 4218 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 127, column: 17, offset: 4218 },
                    end: { line: 127, column: 24, offset: 4225 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 127, column: 24, offset: 4225 },
                    end: { line: 127, column: 27, offset: 4228 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 127, column: 27, offset: 4228 },
                    end: { line: 127, column: 37, offset: 4238 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 127, column: 3, offset: 4204 },
                end: { line: 127, column: 37, offset: 4238 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4202 },
            end: { line: 127, column: 37, offset: 4238 },
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
                    start: { line: 128, column: 3, offset: 4241 },
                    end: { line: 128, column: 14, offset: 4252 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 128, column: 14, offset: 4252 },
                    end: { line: 128, column: 21, offset: 4259 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 128, column: 21, offset: 4259 },
                    end: { line: 128, column: 24, offset: 4262 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 128, column: 24, offset: 4262 },
                    end: { line: 128, column: 34, offset: 4272 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 3, offset: 4241 },
                end: { line: 128, column: 34, offset: 4272 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4239 },
            end: { line: 128, column: 34, offset: 4272 },
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
                    start: { line: 129, column: 3, offset: 4275 },
                    end: { line: 129, column: 26, offset: 4298 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 129, column: 26, offset: 4298 },
                    end: { line: 129, column: 34, offset: 4306 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 129, column: 34, offset: 4306 },
                    end: { line: 129, column: 37, offset: 4309 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 129, column: 37, offset: 4309 },
                    end: { line: 129, column: 48, offset: 4320 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 129, column: 3, offset: 4275 },
                end: { line: 129, column: 48, offset: 4320 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 129, column: 1, offset: 4273 },
            end: { line: 129, column: 48, offset: 4320 },
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
                    start: { line: 130, column: 3, offset: 4323 },
                    end: { line: 130, column: 23, offset: 4343 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 130, column: 23, offset: 4343 },
                    end: { line: 130, column: 31, offset: 4351 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 130, column: 31, offset: 4351 },
                    end: { line: 130, column: 34, offset: 4354 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 130, column: 34, offset: 4354 },
                    end: { line: 130, column: 45, offset: 4365 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 130, column: 3, offset: 4323 },
                end: { line: 130, column: 45, offset: 4365 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 130, column: 1, offset: 4321 },
            end: { line: 130, column: 45, offset: 4365 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3995 },
        end: { line: 130, column: 45, offset: 4365 },
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
        start: { line: 132, column: 1, offset: 4367 },
        end: { line: 152, column: 4, offset: 4782 },
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
            start: { line: 154, column: 3, offset: 4786 },
            end: { line: 154, column: 17, offset: 4800 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4784 },
        end: { line: 154, column: 17, offset: 4800 },
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
                start: { line: 155, column: 3, offset: 4803 },
                end: { line: 155, column: 31, offset: 4831 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 155, column: 1, offset: 4801 },
            end: { line: 155, column: 33, offset: 4833 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 155, column: 33, offset: 4833 },
            end: { line: 155, column: 38, offset: 4838 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 155, column: 38, offset: 4838 },
            end: { line: 155, column: 45, offset: 4845 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 155, column: 45, offset: 4845 },
            end: { line: 155, column: 52, offset: 4852 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 155, column: 52, offset: 4852 },
            end: { line: 155, column: 61, offset: 4861 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 155, column: 61, offset: 4861 },
            end: { line: 155, column: 67, offset: 4867 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 155, column: 67, offset: 4867 },
            end: { line: 155, column: 74, offset: 4874 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 155, column: 74, offset: 4874 },
            end: { line: 155, column: 95, offset: 4895 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 155, column: 95, offset: 4895 },
            end: { line: 155, column: 104, offset: 4904 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected.',
          position: {
            start: { line: 155, column: 104, offset: 4904 },
            end: { line: 155, column: 152, offset: 4952 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 4801 },
        end: { line: 155, column: 152, offset: 4952 },
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
        start: { line: 157, column: 1, offset: 4954 },
        end: { line: 168, column: 4, offset: 5189 },
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
            start: { line: 170, column: 3, offset: 5193 },
            end: { line: 170, column: 14, offset: 5204 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 5191 },
        end: { line: 170, column: 14, offset: 5204 },
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
                start: { line: 171, column: 3, offset: 5207 },
                end: { line: 171, column: 44, offset: 5248 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 171, column: 1, offset: 5205 },
            end: { line: 171, column: 46, offset: 5250 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 171, column: 46, offset: 5250 },
            end: { line: 171, column: 126, offset: 5330 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 171, column: 126, offset: 5330 },
            end: { line: 171, column: 131, offset: 5335 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 171, column: 131, offset: 5335 },
            end: { line: 171, column: 133, offset: 5337 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 171, column: 133, offset: 5337 },
            end: { line: 171, column: 141, offset: 5345 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 171, column: 141, offset: 5345 },
            end: { line: 171, column: 146, offset: 5350 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 171, column: 146, offset: 5350 },
            end: { line: 171, column: 155, offset: 5359 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 171, column: 155, offset: 5359 },
            end: { line: 171, column: 180, offset: 5384 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 171, column: 180, offset: 5384 },
            end: { line: 171, column: 188, offset: 5392 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 171, column: 188, offset: 5392 },
            end: { line: 171, column: 192, offset: 5396 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 171, column: 192, offset: 5396 },
            end: { line: 171, column: 203, offset: 5407 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 171, column: 203, offset: 5407 },
            end: { line: 171, column: 337, offset: 5541 },
            indent: []
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/blog/2020/10/02/transducers-crash-course',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 171, column: 338, offset: 5542 },
                end: { line: 171, column: 342, offset: 5546 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 171, column: 337, offset: 5541 },
            end: { line: 171, column: 405, offset: 5609 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 171, column: 405, offset: 5609 },
            end: { line: 171, column: 406, offset: 5610 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 171, column: 1, offset: 5205 },
        end: { line: 171, column: 406, offset: 5610 },
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
        start: { line: 173, column: 1, offset: 5612 },
        end: { line: 201, column: 4, offset: 6436 },
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
            start: { line: 203, column: 1, offset: 6438 },
            end: { line: 203, column: 92, offset: 6529 },
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
                start: { line: 203, column: 93, offset: 6530 },
                end: { line: 203, column: 105, offset: 6542 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 203, column: 92, offset: 6529 },
            end: { line: 203, column: 122, offset: 6559 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 203, column: 122, offset: 6559 },
            end: { line: 203, column: 144, offset: 6581 },
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
                start: { line: 203, column: 145, offset: 6582 },
                end: { line: 203, column: 149, offset: 6586 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 203, column: 144, offset: 6581 },
            end: { line: 203, column: 157, offset: 6594 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 203, column: 157, offset: 6594 },
            end: { line: 203, column: 158, offset: 6595 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 203, column: 1, offset: 6438 },
        end: { line: 203, column: 158, offset: 6595 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 204, column: 1, offset: 6596 }
  }
}
