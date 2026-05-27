export default {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the Rubico tour. This tour covers high level concepts and provides runnable and editable code examples. All code areas have the Rubico core methods and Transducer module imported globally.',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 200, offset: 199 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 200, offset: 199 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '\n' +
        '  // function composition\n' +
        '  pipe, compose, tap,\n' +
        '\n' +
        '  // conditional operators\n' +
        '  switchCase,\n' +
        '\n' +
        '  // error handling\n' +
        '  tryCatch,\n' +
        '\n' +
        '  // data construction\n' +
        '  all, assign, get, set, pick, omit,\n' +
        '\n' +
        '  // iteration\n' +
        '  forEach,\n' +
        '\n' +
        '  // transformation\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '\n' +
        '  // data testing\n' +
        '  some, every,\n' +
        '\n' +
        '  // logical operators\n' +
        '  and, or, not,\n' +
        '\n' +
        '  // comparison operators\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '\n' +
        '  // partial application\n' +
        '  thunkify, always, curry, __,\n' +
        '\n' +
        '} = rubico',
      position: {
        start: { line: 3, column: 1, offset: 201 },
        end: { line: 37, column: 4, offset: 696 }
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
            start: { line: 39, column: 3, offset: 700 },
            end: { line: 39, column: 20, offset: 717 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 698 },
        end: { line: 39, column: 20, offset: 717 }
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
                      value: '[A]synchrony',
                      position: {
                        start: { line: 41, column: 6, offset: 724 },
                        end: { line: 41, column: 18, offset: 736 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 41, column: 5, offset: 723 },
                    end: { line: 41, column: 33, offset: 751 }
                  }
                }
              ],
              position: {
                start: { line: 41, column: 5, offset: 723 },
                end: { line: 41, column: 33, offset: 751 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 2, offset: 720 },
            end: { line: 41, column: 33, offset: 751 }
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
                  url: '#composition',
                  children: [
                    {
                      type: 'text',
                      value: 'Composition',
                      position: {
                        start: { line: 42, column: 6, offset: 757 },
                        end: { line: 42, column: 17, offset: 768 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 42, column: 5, offset: 756 },
                    end: { line: 42, column: 32, offset: 783 }
                  }
                }
              ],
              position: {
                start: { line: 42, column: 5, offset: 756 },
                end: { line: 42, column: 32, offset: 783 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 2, offset: 753 },
            end: { line: 42, column: 32, offset: 783 }
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
                        start: { line: 43, column: 6, offset: 789 },
                        end: { line: 43, column: 18, offset: 801 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 43, column: 5, offset: 788 },
                    end: { line: 43, column: 34, offset: 817 }
                  }
                }
              ],
              position: {
                start: { line: 43, column: 5, offset: 788 },
                end: { line: 43, column: 34, offset: 817 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 2, offset: 785 },
            end: { line: 43, column: 34, offset: 817 }
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
                        start: { line: 44, column: 6, offset: 823 },
                        end: { line: 44, column: 18, offset: 835 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 44, column: 5, offset: 822 },
                    end: { line: 44, column: 34, offset: 851 }
                  }
                }
              ],
              position: {
                start: { line: 44, column: 5, offset: 822 },
                end: { line: 44, column: 34, offset: 851 }
              }
            }
          ],
          position: {
            start: { line: 44, column: 2, offset: 819 },
            end: { line: 44, column: 34, offset: 851 }
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
                        start: { line: 45, column: 6, offset: 857 },
                        end: { line: 45, column: 20, offset: 871 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 45, column: 5, offset: 856 },
                    end: { line: 45, column: 38, offset: 889 }
                  }
                }
              ],
              position: {
                start: { line: 45, column: 5, offset: 856 },
                end: { line: 45, column: 38, offset: 889 }
              }
            }
          ],
          position: {
            start: { line: 45, column: 2, offset: 853 },
            end: { line: 45, column: 38, offset: 889 }
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
                        start: { line: 46, column: 6, offset: 895 },
                        end: { line: 46, column: 17, offset: 906 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 46, column: 5, offset: 894 },
                    end: { line: 46, column: 32, offset: 921 }
                  }
                }
              ],
              position: {
                start: { line: 46, column: 5, offset: 894 },
                end: { line: 46, column: 32, offset: 921 }
              }
            }
          ],
          position: {
            start: { line: 46, column: 2, offset: 891 },
            end: { line: 46, column: 32, offset: 921 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 2, offset: 720 },
        end: { line: 46, column: 32, offset: 921 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: '[A]synchrony',
          position: {
            start: { line: 48, column: 3, offset: 925 },
            end: { line: 48, column: 15, offset: 937 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 923 },
        end: { line: 48, column: 15, offset: 937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pass ',
          position: {
            start: { line: 49, column: 1, offset: 938 },
            end: { line: 49, column: 6, offset: 943 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'synchronous or asynchronous',
              position: {
                start: { line: 49, column: 8, offset: 945 },
                end: { line: 49, column: 35, offset: 972 }
              }
            }
          ],
          position: {
            start: { line: 49, column: 6, offset: 943 },
            end: { line: 49, column: 37, offset: 974 }
          }
        },
        {
          type: 'text',
          value: ' functions to any Rubico operator - any and all promises will be resolved. Execute functions concurrently without having to call ',
          position: {
            start: { line: 49, column: 37, offset: 974 },
            end: { line: 49, column: 166, offset: 1103 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 49, column: 166, offset: 1103 },
            end: { line: 49, column: 179, offset: 1116 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 49, column: 179, offset: 1116 },
            end: { line: 49, column: 183, offset: 1120 }
          }
        },
        {
          type: 'inlineCode',
          value: 'array.map',
          position: {
            start: { line: 49, column: 183, offset: 1120 },
            end: { line: 49, column: 194, offset: 1131 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 49, column: 194, offset: 1131 },
            end: { line: 49, column: 195, offset: 1132 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 938 },
        end: { line: 49, column: 195, offset: 1132 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const getTodo = id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)\n' +
        '\n' +
        'map([1, 2, 3, 4, 5], pipe([\n' +
        '  getTodo,\n' +
        '  res => res.json(),\n' +
        '  console.log,\n' +
        ']))',
      position: {
        start: { line: 51, column: 1, offset: 1134 },
        end: { line: 59, column: 4, offset: 1324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 61, column: 1, offset: 1326 },
            end: { line: 61, column: 11, offset: 1336 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 61, column: 11, offset: 1336 },
            end: { line: 61, column: 16, offset: 1341 }
          }
        },
        {
          type: 'text',
          value: ' button to make five concurrent requests using ',
          position: {
            start: { line: 61, column: 16, offset: 1341 },
            end: { line: 61, column: 63, offset: 1388 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 61, column: 63, offset: 1388 },
            end: { line: 61, column: 70, offset: 1395 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console.',
          position: {
            start: { line: 61, column: 70, offset: 1395 },
            end: { line: 61, column: 137, offset: 1462 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1326 },
        end: { line: 61, column: 137, offset: 1462 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Composition',
          position: {
            start: { line: 63, column: 3, offset: 1466 },
            end: { line: 63, column: 14, offset: 1477 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 1464 },
        end: { line: 63, column: 14, offset: 1477 }
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
              value: 'Reduce coupling and complexity',
              position: {
                start: { line: 64, column: 3, offset: 1480 },
                end: { line: 64, column: 33, offset: 1510 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 1, offset: 1478 },
            end: { line: 64, column: 35, offset: 1512 }
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality by composing a new function - Rubico gives you the tools to make this as simple and stress-free as possible.",
          position: {
            start: { line: 64, column: 35, offset: 1512 },
            end: { line: 64, column: 239, offset: 1716 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 1478 },
        end: { line: 64, column: 239, offset: 1716 }
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
        'const doMathsWithLogs = pipe([\n' +
        "  tap(number => console.log('input:', number)),\n" +
        '  all({\n' +
        '    number: identity,\n' +
        '    numberSquared: pipe([\n' +
        '      square,\n' +
        "      tap(curry.arity(2, console.log, 'result of square:', __)),\n" +
        '    ]),\n' +
        '  }),\n' +
        '])\n' +
        '\n' +
        'console.log(doMathsWithLogs(3))',
      position: {
        start: { line: 66, column: 1, offset: 1718 },
        end: { line: 83, column: 4, offset: 2083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 85, column: 1, offset: 2085 },
            end: { line: 85, column: 38, offset: 2122 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 85, column: 38, offset: 2122 },
            end: { line: 85, column: 55, offset: 2139 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 85, column: 55, offset: 2139 },
            end: { line: 85, column: 173, offset: 2257 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 85, column: 173, offset: 2257 },
            end: { line: 85, column: 200, offset: 2284 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 85, column: 200, offset: 2284 },
            end: { line: 85, column: 245, offset: 2329 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 85, column: 245, offset: 2329 },
            end: { line: 85, column: 252, offset: 2336 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 85, column: 252, offset: 2336 },
            end: { line: 85, column: 278, offset: 2362 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 85, column: 278, offset: 2362 },
            end: { line: 85, column: 282, offset: 2366 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 85, column: 282, offset: 2366 },
            end: { line: 85, column: 352, offset: 2436 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 1, offset: 2085 },
        end: { line: 85, column: 352, offset: 2436 }
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
            start: { line: 87, column: 3, offset: 2440 },
            end: { line: 87, column: 15, offset: 2452 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 2438 },
        end: { line: 87, column: 15, offset: 2452 }
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
              value: 'Expressive power at your fingertips',
              position: {
                start: { line: 88, column: 3, offset: 2455 },
                end: { line: 88, column: 38, offset: 2490 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 1, offset: 2453 },
            end: { line: 88, column: 40, offset: 2492 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 88, column: 40, offset: 2492 },
            end: { line: 88, column: 202, offset: 2654 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2453 },
        end: { line: 88, column: 202, offset: 2654 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const square = number => number ** 2\n' +
        '\n' +
        'const functors = [\n' +
        '  [1, 2, 3, 4, 5],\n' +
        "  '12345',\n" +
        '  new Set([1, 2, 3, 4, 5]),\n' +
        '  new Uint8Array([1, 2, 3, 4, 5]),\n' +
        '  { a: 1, b: 2, c: 3, d: 4, e: 5 },\n' +
        "  new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]),\n" +
        ']\n' +
        '\n' +
        'forEach(functors, pipe([\n' +
        '  map(square),\n' +
        '  console.log,\n' +
        ']))',
      position: {
        start: { line: 90, column: 1, offset: 2656 },
        end: { line: 106, column: 4, offset: 2997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 108, column: 1, offset: 2999 },
            end: { line: 108, column: 43, offset: 3041 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 108, column: 43, offset: 3041 },
            end: { line: 108, column: 48, offset: 3046 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 108, column: 48, offset: 3046 },
            end: { line: 108, column: 72, offset: 3070 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/blog/a-synchronous-functional-programming-data-types#functor',
          children: [
            {
              type: 'text',
              value: 'functor',
              position: {
                start: { line: 108, column: 73, offset: 3071 },
                end: { line: 108, column: 80, offset: 3078 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 72, offset: 3070 },
            end: { line: 108, column: 144, offset: 3142 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 108, column: 144, offset: 3142 },
            end: { line: 108, column: 176, offset: 3174 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 108, column: 176, offset: 3174 },
            end: { line: 108, column: 193, offset: 3191 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 108, column: 193, offset: 3191 },
            end: { line: 108, column: 204, offset: 3202 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 108, column: 204, offset: 3202 },
            end: { line: 108, column: 213, offset: 3211 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 108, column: 213, offset: 3211 },
            end: { line: 108, column: 221, offset: 3219 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 108, column: 221, offset: 3219 },
            end: { line: 108, column: 247, offset: 3245 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 108, column: 247, offset: 3245 },
            end: { line: 108, column: 256, offset: 3254 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 108, column: 256, offset: 3254 },
            end: { line: 108, column: 289, offset: 3287 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 108, column: 289, offset: 3287 },
            end: { line: 108, column: 306, offset: 3304 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 108, column: 306, offset: 3304 },
            end: { line: 108, column: 340, offset: 3338 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 108, column: 340, offset: 3338 },
            end: { line: 108, column: 352, offset: 3350 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 108, column: 352, offset: 3350 },
            end: { line: 108, column: 413, offset: 3411 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 108, column: 413, offset: 3411 },
            end: { line: 108, column: 414, offset: 3412 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 2999 },
        end: { line: 108, column: 414, offset: 3412 }
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
            start: { line: 110, column: 3, offset: 3416 },
            end: { line: 110, column: 15, offset: 3428 }
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3414 },
        end: { line: 110, column: 15, offset: 3428 }
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
                start: { line: 111, column: 3, offset: 3431 },
                end: { line: 111, column: 52, offset: 3480 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3429 },
            end: { line: 111, column: 54, offset: 3482 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 111, column: 54, offset: 3482 },
            end: { line: 111, column: 185, offset: 3613 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 3429 },
        end: { line: 111, column: 185, offset: 3613 }
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
                    start: { line: 113, column: 3, offset: 3617 },
                    end: { line: 113, column: 26, offset: 3640 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 113, column: 26, offset: 3640 },
                    end: { line: 113, column: 37, offset: 3651 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 37, offset: 3651 },
                    end: { line: 113, column: 40, offset: 3654 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 113, column: 40, offset: 3654 },
                    end: { line: 113, column: 63, offset: 3677 }
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3617 },
                end: { line: 113, column: 63, offset: 3677 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3615 },
            end: { line: 113, column: 63, offset: 3677 }
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
                    start: { line: 114, column: 3, offset: 3680 },
                    end: { line: 114, column: 16, offset: 3693 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 114, column: 16, offset: 3693 },
                    end: { line: 114, column: 24, offset: 3701 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 24, offset: 3701 },
                    end: { line: 114, column: 27, offset: 3704 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 114, column: 27, offset: 3704 },
                    end: { line: 114, column: 40, offset: 3717 }
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3680 },
                end: { line: 114, column: 40, offset: 3717 }
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3678 },
            end: { line: 114, column: 40, offset: 3717 }
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
                    start: { line: 115, column: 3, offset: 3720 },
                    end: { line: 115, column: 15, offset: 3732 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 115, column: 15, offset: 3732 },
                    end: { line: 115, column: 23, offset: 3740 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 23, offset: 3740 },
                    end: { line: 115, column: 26, offset: 3743 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 115, column: 26, offset: 3743 },
                    end: { line: 115, column: 38, offset: 3755 }
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3720 },
                end: { line: 115, column: 38, offset: 3755 }
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3718 },
            end: { line: 115, column: 38, offset: 3755 }
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
                    start: { line: 116, column: 3, offset: 3758 },
                    end: { line: 116, column: 16, offset: 3771 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 116, column: 16, offset: 3771 },
                    end: { line: 116, column: 20, offset: 3775 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 20, offset: 3775 },
                    end: { line: 116, column: 23, offset: 3778 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 116, column: 23, offset: 3778 },
                    end: { line: 116, column: 31, offset: 3786 }
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 3758 },
                end: { line: 116, column: 31, offset: 3786 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 3756 },
            end: { line: 116, column: 31, offset: 3786 }
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
                    start: { line: 117, column: 3, offset: 3789 },
                    end: { line: 117, column: 13, offset: 3799 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 117, column: 13, offset: 3799 },
                    end: { line: 117, column: 22, offset: 3808 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 22, offset: 3808 },
                    end: { line: 117, column: 25, offset: 3811 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 117, column: 25, offset: 3811 },
                    end: { line: 117, column: 35, offset: 3821 }
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 3789 },
                end: { line: 117, column: 35, offset: 3821 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 3787 },
            end: { line: 117, column: 35, offset: 3821 }
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
                    start: { line: 118, column: 3, offset: 3824 },
                    end: { line: 118, column: 17, offset: 3838 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 118, column: 17, offset: 3838 },
                    end: { line: 118, column: 24, offset: 3845 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 24, offset: 3845 },
                    end: { line: 118, column: 27, offset: 3848 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 118, column: 27, offset: 3848 },
                    end: { line: 118, column: 37, offset: 3858 }
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 3824 },
                end: { line: 118, column: 37, offset: 3858 }
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 3822 },
            end: { line: 118, column: 37, offset: 3858 }
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
                    start: { line: 119, column: 3, offset: 3861 },
                    end: { line: 119, column: 14, offset: 3872 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 119, column: 14, offset: 3872 },
                    end: { line: 119, column: 21, offset: 3879 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 119, column: 21, offset: 3879 },
                    end: { line: 119, column: 24, offset: 3882 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 119, column: 24, offset: 3882 },
                    end: { line: 119, column: 34, offset: 3892 }
                  }
                }
              ],
              position: {
                start: { line: 119, column: 3, offset: 3861 },
                end: { line: 119, column: 34, offset: 3892 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3859 },
            end: { line: 119, column: 34, offset: 3892 }
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
                    start: { line: 120, column: 3, offset: 3895 },
                    end: { line: 120, column: 26, offset: 3918 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 120, column: 26, offset: 3918 },
                    end: { line: 120, column: 34, offset: 3926 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 120, column: 34, offset: 3926 },
                    end: { line: 120, column: 37, offset: 3929 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 120, column: 37, offset: 3929 },
                    end: { line: 120, column: 48, offset: 3940 }
                  }
                }
              ],
              position: {
                start: { line: 120, column: 3, offset: 3895 },
                end: { line: 120, column: 48, offset: 3940 }
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 3893 },
            end: { line: 120, column: 48, offset: 3940 }
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
                    start: { line: 121, column: 3, offset: 3943 },
                    end: { line: 121, column: 23, offset: 3963 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 121, column: 23, offset: 3963 },
                    end: { line: 121, column: 31, offset: 3971 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 121, column: 31, offset: 3971 },
                    end: { line: 121, column: 34, offset: 3974 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 121, column: 34, offset: 3974 },
                    end: { line: 121, column: 45, offset: 3985 }
                  }
                }
              ],
              position: {
                start: { line: 121, column: 3, offset: 3943 },
                end: { line: 121, column: 45, offset: 3985 }
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 3941 },
            end: { line: 121, column: 45, offset: 3985 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 3615 },
        end: { line: 121, column: 45, offset: 3985 }
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
        '  ]),\n' +
        "  log('USAGE: ...'),\n" +
        '\n' +
        '  or([\n' +
        "    hasFlag('-v'),\n" +
        "    hasFlag('--version'),\n" +
        '  ]),\n' +
        "  log('v0.0.0'),\n" +
        '\n' +
        "  log('USAGE: ...'),\n" +
        '])\n' +
        '\n' +
        "cli(['-h'])\n" +
        "cli(['--version'])\n" +
        "cli(['???'])",
      position: {
        start: { line: 123, column: 1, offset: 3987 },
        end: { line: 147, column: 4, offset: 4370 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 149, column: 1, offset: 4372 },
            end: { line: 149, column: 39, offset: 4410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 149, column: 39, offset: 4410 },
            end: { line: 149, column: 44, offset: 4415 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 149, column: 44, offset: 4415 },
            end: { line: 149, column: 62, offset: 4433 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 149, column: 62, offset: 4433 },
            end: { line: 149, column: 74, offset: 4445 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 149, column: 74, offset: 4445 },
            end: { line: 149, column: 79, offset: 4450 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 149, column: 79, offset: 4450 },
            end: { line: 149, column: 83, offset: 4454 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 149, column: 83, offset: 4454 },
            end: { line: 149, column: 94, offset: 4465 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 4372 },
        end: { line: 149, column: 94, offset: 4465 }
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
            start: { line: 151, column: 3, offset: 4469 },
            end: { line: 151, column: 17, offset: 4483 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 4467 },
        end: { line: 151, column: 17, offset: 4483 }
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
              value: 'Confidently throw and catch errors',
              position: {
                start: { line: 152, column: 3, offset: 4486 },
                end: { line: 152, column: 37, offset: 4520 }
              }
            }
          ],
          position: {
            start: { line: 152, column: 1, offset: 4484 },
            end: { line: 152, column: 39, offset: 4522 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 152, column: 39, offset: 4522 },
            end: { line: 152, column: 50, offset: 4533 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 152, column: 50, offset: 4533 },
            end: { line: 152, column: 60, offset: 4543 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 152, column: 60, offset: 4543 },
            end: { line: 152, column: 163, offset: 4646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 152, column: 163, offset: 4646 },
            end: { line: 152, column: 173, offset: 4656 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 152, column: 173, offset: 4656 },
            end: { line: 152, column: 259, offset: 4742 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 4484 },
        end: { line: 152, column: 259, offset: 4742 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myApp = tryCatch(pipe([\n' +
        '  tap(function validate(data) {\n' +
        '    if (data.userId == null) {\n' +
        "      throw new Error('userId is required but not found')\n" +
        '    }\n' +
        '  }),\n' +
        '  data => {\n' +
        "    console.log('validated user', data.userId)\n" +
        '  },\n' +
        ']), function errorHandler(error) {\n' +
        '  console.error(error)\n' +
        '})\n' +
        '\n' +
        'myApp({})\n' +
        '\n' +
        'myApp({ userId: 1 })',
      position: {
        start: { line: 154, column: 1, offset: 4744 },
        end: { line: 171, column: 4, offset: 5095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 173, column: 1, offset: 5097 },
            end: { line: 173, column: 36, offset: 5132 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 173, column: 36, offset: 5132 },
            end: { line: 173, column: 46, offset: 5142 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 173, column: 46, offset: 5142 },
            end: { line: 173, column: 89, offset: 5185 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 173, column: 89, offset: 5185 },
            end: { line: 173, column: 95, offset: 5191 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 173, column: 95, offset: 5191 },
            end: { line: 173, column: 127, offset: 5223 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 173, column: 127, offset: 5223 },
            end: { line: 173, column: 141, offset: 5237 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 173, column: 141, offset: 5237 },
            end: { line: 173, column: 183, offset: 5279 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 173, column: 183, offset: 5279 },
            end: { line: 173, column: 193, offset: 5289 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 173, column: 193, offset: 5289 },
            end: { line: 173, column: 203, offset: 5299 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 173, column: 203, offset: 5299 },
            end: { line: 173, column: 211, offset: 5307 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 173, column: 211, offset: 5307 },
            end: { line: 173, column: 215, offset: 5311 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 173, column: 215, offset: 5311 },
            end: { line: 173, column: 221, offset: 5317 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 173, column: 221, offset: 5317 },
            end: { line: 173, column: 235, offset: 5331 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 5097 },
        end: { line: 173, column: 235, offset: 5331 }
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
            start: { line: 175, column: 3, offset: 5335 },
            end: { line: 175, column: 14, offset: 5346 }
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 5333 },
        end: { line: 175, column: 14, offset: 5346 }
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
                start: { line: 176, column: 3, offset: 5349 },
                end: { line: 176, column: 44, offset: 5390 }
              }
            }
          ],
          position: {
            start: { line: 176, column: 1, offset: 5347 },
            end: { line: 176, column: 46, offset: 5392 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with Rubico's ",
          position: {
            start: { line: 176, column: 46, offset: 5392 },
            end: { line: 176, column: 127, offset: 5473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 176, column: 127, offset: 5473 },
            end: { line: 176, column: 139, offset: 5485 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 176, column: 139, offset: 5485 },
            end: { line: 176, column: 151, offset: 5497 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 176, column: 151, offset: 5497 },
            end: { line: 176, column: 160, offset: 5506 }
          }
        },
        {
          type: 'text',
          value: ' operator. Read more on transducers ',
          position: {
            start: { line: 176, column: 160, offset: 5506 },
            end: { line: 176, column: 196, offset: 5542 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/blog/transducers-crash-course-rubico-v2',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 176, column: 197, offset: 5543 },
                end: { line: 176, column: 201, offset: 5547 }
              }
            }
          ],
          position: {
            start: { line: 176, column: 196, offset: 5542 },
            end: { line: 176, column: 244, offset: 5590 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 176, column: 244, offset: 5590 },
            end: { line: 176, column: 245, offset: 5591 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 5347 },
        end: { line: 176, column: 245, offset: 5591 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const toBinaryString = value => value.toString(2)\n' +
        '\n' +
        'const toBinaryInt = value => parseInt(value, 2)\n' +
        '\n' +
        'const decimalsToNotes = pipe([\n' +
        '  BigInt,\n' +
        '  toBinaryString,\n' +
        '\n' +
        '  function* generateSegments(str, length = 7) {\n' +
        '    for (let i = 0; i < str.length; i += length) {\n' +
        '      yield str.slice(i, i + length)\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  transform(compose(\n' +
        '    Transducer.map(toBinaryInt),\n' +
        '    Transducer.map(String.fromCharCode),\n' +
        "  ), ''),\n" +
        '])\n' +
        '\n' +
        "const decimals = '16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963'\n" +
        'const notes = decimalsToNotes(decimals)\n' +
        '\n' +
        'console.log(notes)',
      position: {
        start: { line: 178, column: 1, offset: 5593 },
        end: { line: 203, column: 4, offset: 6209 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a complex transformation made simple by the Rubico ',
          position: {
            start: { line: 205, column: 1, offset: 6211 },
            end: { line: 205, column: 65, offset: 6275 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 205, column: 65, offset: 6275 },
            end: { line: 205, column: 76, offset: 6286 }
          }
        },
        {
          type: 'text',
          value: ' operator. The operator transforms the generator of decimal segments created by ',
          position: {
            start: { line: 205, column: 76, offset: 6286 },
            end: { line: 205, column: 156, offset: 6366 }
          }
        },
        {
          type: 'inlineCode',
          value: 'generateSegments',
          position: {
            start: { line: 205, column: 156, offset: 6366 },
            end: { line: 205, column: 174, offset: 6384 }
          }
        },
        {
          type: 'text',
          value: ' into the string ',
          position: {
            start: { line: 205, column: 174, offset: 6384 },
            end: { line: 205, column: 191, offset: 6401 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notes',
          position: {
            start: { line: 205, column: 191, offset: 6401 },
            end: { line: 205, column: 198, offset: 6408 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 205, column: 198, offset: 6408 },
            end: { line: 205, column: 199, offset: 6409 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 6211 },
        end: { line: 205, column: 199, offset: 6409 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 207, column: 3, offset: 6413 },
            end: { line: 207, column: 13, offset: 6423 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 6411 },
        end: { line: 207, column: 13, offset: 6423 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico (",
          position: {
            start: { line: 209, column: 1, offset: 6425 },
            end: { line: 209, column: 86, offset: 6510 }
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
                start: { line: 209, column: 87, offset: 6511 },
                end: { line: 209, column: 99, offset: 6523 }
              }
            }
          ],
          position: {
            start: { line: 209, column: 86, offset: 6510 },
            end: { line: 209, column: 116, offset: 6540 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 209, column: 116, offset: 6540 },
            end: { line: 209, column: 138, offset: 6562 }
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
                start: { line: 209, column: 139, offset: 6563 },
                end: { line: 209, column: 143, offset: 6567 }
              }
            }
          ],
          position: {
            start: { line: 209, column: 138, offset: 6562 },
            end: { line: 209, column: 151, offset: 6575 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 209, column: 151, offset: 6575 },
            end: { line: 209, column: 152, offset: 6576 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 6425 },
        end: { line: 209, column: 152, offset: 6576 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 210, column: 1, offset: 6577 }
  }
}