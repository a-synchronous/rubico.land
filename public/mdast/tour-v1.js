export default {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to the Rubico tour. This tour covers high level concepts and provides runnable and editable code examples. All code areas have the Rubico core methods imported globally.',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 178, offset: 177 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 178, offset: 177 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '  pipe, tap,\n' +
        '  switchCase, tryCatch,\n' +
        '  fork, assign, get, set, pick, omit,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  and, or, not, any, all,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  thunkify, always,\n' +
        '  curry, __,\n' +
        '} = rubico',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 14, column: 4, offset: 416 }
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
            start: { line: 16, column: 3, offset: 420 },
            end: { line: 16, column: 20, offset: 437 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 418 },
        end: { line: 16, column: 20, offset: 437 }
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
                        start: { line: 18, column: 6, offset: 444 },
                        end: { line: 18, column: 18, offset: 456 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 443 },
                    end: { line: 18, column: 33, offset: 471 }
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 443 },
                end: { line: 18, column: 33, offset: 471 }
              }
            }
          ],
          position: {
            start: { line: 18, column: 2, offset: 440 },
            end: { line: 18, column: 33, offset: 471 }
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
                        start: { line: 19, column: 6, offset: 477 },
                        end: { line: 19, column: 17, offset: 488 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 476 },
                    end: { line: 19, column: 32, offset: 503 }
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 476 },
                end: { line: 19, column: 32, offset: 503 }
              }
            }
          ],
          position: {
            start: { line: 19, column: 2, offset: 473 },
            end: { line: 19, column: 32, offset: 503 }
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
                        start: { line: 20, column: 6, offset: 509 },
                        end: { line: 20, column: 18, offset: 521 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 508 },
                    end: { line: 20, column: 34, offset: 537 }
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 508 },
                end: { line: 20, column: 34, offset: 537 }
              }
            }
          ],
          position: {
            start: { line: 20, column: 2, offset: 505 },
            end: { line: 20, column: 34, offset: 537 }
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
                        start: { line: 21, column: 6, offset: 543 },
                        end: { line: 21, column: 18, offset: 555 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 542 },
                    end: { line: 21, column: 34, offset: 571 }
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 542 },
                end: { line: 21, column: 34, offset: 571 }
              }
            }
          ],
          position: {
            start: { line: 21, column: 2, offset: 539 },
            end: { line: 21, column: 34, offset: 571 }
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
                        start: { line: 22, column: 6, offset: 577 },
                        end: { line: 22, column: 20, offset: 591 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 576 },
                    end: { line: 22, column: 38, offset: 609 }
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 576 },
                end: { line: 22, column: 38, offset: 609 }
              }
            }
          ],
          position: {
            start: { line: 22, column: 2, offset: 573 },
            end: { line: 22, column: 38, offset: 609 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 2, offset: 440 },
        end: { line: 22, column: 38, offset: 609 }
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
            start: { line: 24, column: 3, offset: 613 },
            end: { line: 24, column: 15, offset: 625 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 611 },
        end: { line: 24, column: 15, offset: 625 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pass ',
          position: {
            start: { line: 25, column: 1, offset: 626 },
            end: { line: 25, column: 6, offset: 631 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'synchronous or asynchronous',
              position: {
                start: { line: 25, column: 8, offset: 633 },
                end: { line: 25, column: 35, offset: 660 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 6, offset: 631 },
            end: { line: 25, column: 37, offset: 662 }
          }
        },
        {
          type: 'text',
          value: ' functions to any Rubico operator - any and all promises will be resolved. Execute functions concurrently without having to call ',
          position: {
            start: { line: 25, column: 37, offset: 662 },
            end: { line: 25, column: 166, offset: 791 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 25, column: 166, offset: 791 },
            end: { line: 25, column: 179, offset: 804 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 25, column: 179, offset: 804 },
            end: { line: 25, column: 183, offset: 808 }
          }
        },
        {
          type: 'inlineCode',
          value: 'array.map',
          position: {
            start: { line: 25, column: 183, offset: 808 },
            end: { line: 25, column: 194, offset: 819 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 25, column: 194, offset: 819 },
            end: { line: 25, column: 195, offset: 820 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 626 },
        end: { line: 25, column: 195, offset: 820 }
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
        start: { line: 27, column: 1, offset: 822 },
        end: { line: 35, column: 4, offset: 1012 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 37, column: 1, offset: 1014 },
            end: { line: 37, column: 11, offset: 1024 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 37, column: 11, offset: 1024 },
            end: { line: 37, column: 16, offset: 1029 }
          }
        },
        {
          type: 'text',
          value: ' button to make five concurrent requests using ',
          position: {
            start: { line: 37, column: 16, offset: 1029 },
            end: { line: 37, column: 63, offset: 1076 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 37, column: 63, offset: 1076 },
            end: { line: 37, column: 70, offset: 1083 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console.',
          position: {
            start: { line: 37, column: 70, offset: 1083 },
            end: { line: 37, column: 137, offset: 1150 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1014 },
        end: { line: 37, column: 137, offset: 1150 }
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
            start: { line: 39, column: 3, offset: 1154 },
            end: { line: 39, column: 14, offset: 1165 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1152 },
        end: { line: 39, column: 14, offset: 1165 }
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
                start: { line: 40, column: 3, offset: 1168 },
                end: { line: 40, column: 33, offset: 1198 }
              }
            }
          ],
          position: {
            start: { line: 40, column: 1, offset: 1166 },
            end: { line: 40, column: 35, offset: 1200 }
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality by composing a new function - Rubico gives you the tools to make this as simple and stress-free as possible.",
          position: {
            start: { line: 40, column: 35, offset: 1200 },
            end: { line: 40, column: 239, offset: 1404 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1166 },
        end: { line: 40, column: 239, offset: 1404 }
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
        '  fork({\n' +
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
        start: { line: 42, column: 1, offset: 1406 },
        end: { line: 59, column: 4, offset: 1772 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 61, column: 1, offset: 1774 },
            end: { line: 61, column: 38, offset: 1811 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 61, column: 38, offset: 1811 },
            end: { line: 61, column: 55, offset: 1828 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 61, column: 55, offset: 1828 },
            end: { line: 61, column: 173, offset: 1946 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 61, column: 173, offset: 1946 },
            end: { line: 61, column: 200, offset: 1973 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 61, column: 200, offset: 1973 },
            end: { line: 61, column: 245, offset: 2018 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 61, column: 245, offset: 2018 },
            end: { line: 61, column: 252, offset: 2025 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 61, column: 252, offset: 2025 },
            end: { line: 61, column: 278, offset: 2051 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 61, column: 278, offset: 2051 },
            end: { line: 61, column: 282, offset: 2055 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 61, column: 282, offset: 2055 },
            end: { line: 61, column: 352, offset: 2125 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1774 },
        end: { line: 61, column: 352, offset: 2125 }
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
            start: { line: 63, column: 3, offset: 2129 },
            end: { line: 63, column: 15, offset: 2141 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2127 },
        end: { line: 63, column: 15, offset: 2141 }
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
                start: { line: 64, column: 3, offset: 2144 },
                end: { line: 64, column: 38, offset: 2179 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 1, offset: 2142 },
            end: { line: 64, column: 40, offset: 2181 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 64, column: 40, offset: 2181 },
            end: { line: 64, column: 202, offset: 2343 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2142 },
        end: { line: 64, column: 202, offset: 2343 }
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
        'iterables.forEach(pipe([\n' +
        '  map(square),\n' +
        '  console.log,\n' +
        ']))',
      position: {
        start: { line: 66, column: 1, offset: 2345 },
        end: { line: 82, column: 4, offset: 2687 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 84, column: 1, offset: 2689 },
            end: { line: 84, column: 43, offset: 2731 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 84, column: 43, offset: 2731 },
            end: { line: 84, column: 48, offset: 2736 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 84, column: 48, offset: 2736 },
            end: { line: 84, column: 72, offset: 2760 }
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
                start: { line: 84, column: 73, offset: 2761 },
                end: { line: 84, column: 80, offset: 2768 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 72, offset: 2760 },
            end: { line: 84, column: 144, offset: 2832 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 84, column: 144, offset: 2832 },
            end: { line: 84, column: 176, offset: 2864 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 84, column: 176, offset: 2864 },
            end: { line: 84, column: 193, offset: 2881 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 84, column: 193, offset: 2881 },
            end: { line: 84, column: 204, offset: 2892 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 84, column: 204, offset: 2892 },
            end: { line: 84, column: 213, offset: 2901 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 84, column: 213, offset: 2901 },
            end: { line: 84, column: 221, offset: 2909 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 84, column: 221, offset: 2909 },
            end: { line: 84, column: 247, offset: 2935 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 84, column: 247, offset: 2935 },
            end: { line: 84, column: 256, offset: 2944 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 84, column: 256, offset: 2944 },
            end: { line: 84, column: 289, offset: 2977 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 84, column: 289, offset: 2977 },
            end: { line: 84, column: 306, offset: 2994 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 84, column: 306, offset: 2994 },
            end: { line: 84, column: 340, offset: 3028 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 84, column: 340, offset: 3028 },
            end: { line: 84, column: 352, offset: 3040 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 84, column: 352, offset: 3040 },
            end: { line: 84, column: 413, offset: 3101 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 84, column: 413, offset: 3101 },
            end: { line: 84, column: 414, offset: 3102 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2689 },
        end: { line: 84, column: 414, offset: 3102 }
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
            start: { line: 86, column: 3, offset: 3106 },
            end: { line: 86, column: 15, offset: 3118 }
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3104 },
        end: { line: 86, column: 15, offset: 3118 }
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
                start: { line: 87, column: 3, offset: 3121 },
                end: { line: 87, column: 52, offset: 3170 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 1, offset: 3119 },
            end: { line: 87, column: 54, offset: 3172 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 87, column: 54, offset: 3172 },
            end: { line: 87, column: 185, offset: 3303 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3119 },
        end: { line: 87, column: 185, offset: 3303 }
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
                    start: { line: 89, column: 3, offset: 3307 },
                    end: { line: 89, column: 26, offset: 3330 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 89, column: 26, offset: 3330 },
                    end: { line: 89, column: 37, offset: 3341 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 89, column: 37, offset: 3341 },
                    end: { line: 89, column: 40, offset: 3344 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 89, column: 40, offset: 3344 },
                    end: { line: 89, column: 63, offset: 3367 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 3, offset: 3307 },
                end: { line: 89, column: 63, offset: 3367 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 1, offset: 3305 },
            end: { line: 89, column: 63, offset: 3367 }
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
                    start: { line: 90, column: 3, offset: 3370 },
                    end: { line: 90, column: 16, offset: 3383 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 90, column: 16, offset: 3383 },
                    end: { line: 90, column: 24, offset: 3391 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 90, column: 24, offset: 3391 },
                    end: { line: 90, column: 27, offset: 3394 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 90, column: 27, offset: 3394 },
                    end: { line: 90, column: 40, offset: 3407 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 3, offset: 3370 },
                end: { line: 90, column: 40, offset: 3407 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 1, offset: 3368 },
            end: { line: 90, column: 40, offset: 3407 }
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
                    start: { line: 91, column: 3, offset: 3410 },
                    end: { line: 91, column: 15, offset: 3422 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 91, column: 15, offset: 3422 },
                    end: { line: 91, column: 23, offset: 3430 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 91, column: 23, offset: 3430 },
                    end: { line: 91, column: 26, offset: 3433 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 91, column: 26, offset: 3433 },
                    end: { line: 91, column: 38, offset: 3445 }
                  }
                }
              ],
              position: {
                start: { line: 91, column: 3, offset: 3410 },
                end: { line: 91, column: 38, offset: 3445 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 1, offset: 3408 },
            end: { line: 91, column: 38, offset: 3445 }
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
                    start: { line: 92, column: 3, offset: 3448 },
                    end: { line: 92, column: 16, offset: 3461 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 92, column: 16, offset: 3461 },
                    end: { line: 92, column: 20, offset: 3465 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 92, column: 20, offset: 3465 },
                    end: { line: 92, column: 23, offset: 3468 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 92, column: 23, offset: 3468 },
                    end: { line: 92, column: 31, offset: 3476 }
                  }
                }
              ],
              position: {
                start: { line: 92, column: 3, offset: 3448 },
                end: { line: 92, column: 31, offset: 3476 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 1, offset: 3446 },
            end: { line: 92, column: 31, offset: 3476 }
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
                    start: { line: 93, column: 3, offset: 3479 },
                    end: { line: 93, column: 13, offset: 3489 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 93, column: 13, offset: 3489 },
                    end: { line: 93, column: 22, offset: 3498 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 93, column: 22, offset: 3498 },
                    end: { line: 93, column: 25, offset: 3501 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 93, column: 25, offset: 3501 },
                    end: { line: 93, column: 35, offset: 3511 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 3, offset: 3479 },
                end: { line: 93, column: 35, offset: 3511 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 1, offset: 3477 },
            end: { line: 93, column: 35, offset: 3511 }
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
                    start: { line: 94, column: 3, offset: 3514 },
                    end: { line: 94, column: 17, offset: 3528 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 94, column: 17, offset: 3528 },
                    end: { line: 94, column: 24, offset: 3535 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 94, column: 24, offset: 3535 },
                    end: { line: 94, column: 27, offset: 3538 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 94, column: 27, offset: 3538 },
                    end: { line: 94, column: 37, offset: 3548 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 3, offset: 3514 },
                end: { line: 94, column: 37, offset: 3548 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 1, offset: 3512 },
            end: { line: 94, column: 37, offset: 3548 }
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
                    start: { line: 95, column: 3, offset: 3551 },
                    end: { line: 95, column: 14, offset: 3562 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 95, column: 14, offset: 3562 },
                    end: { line: 95, column: 21, offset: 3569 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 95, column: 21, offset: 3569 },
                    end: { line: 95, column: 24, offset: 3572 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 95, column: 24, offset: 3572 },
                    end: { line: 95, column: 34, offset: 3582 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 3, offset: 3551 },
                end: { line: 95, column: 34, offset: 3582 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3549 },
            end: { line: 95, column: 34, offset: 3582 }
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
                    start: { line: 96, column: 3, offset: 3585 },
                    end: { line: 96, column: 26, offset: 3608 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 96, column: 26, offset: 3608 },
                    end: { line: 96, column: 34, offset: 3616 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 96, column: 34, offset: 3616 },
                    end: { line: 96, column: 37, offset: 3619 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 96, column: 37, offset: 3619 },
                    end: { line: 96, column: 48, offset: 3630 }
                  }
                }
              ],
              position: {
                start: { line: 96, column: 3, offset: 3585 },
                end: { line: 96, column: 48, offset: 3630 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 3583 },
            end: { line: 96, column: 48, offset: 3630 }
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
                    start: { line: 97, column: 3, offset: 3633 },
                    end: { line: 97, column: 23, offset: 3653 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 97, column: 23, offset: 3653 },
                    end: { line: 97, column: 31, offset: 3661 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 97, column: 31, offset: 3661 },
                    end: { line: 97, column: 34, offset: 3664 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 97, column: 34, offset: 3664 },
                    end: { line: 97, column: 45, offset: 3675 }
                  }
                }
              ],
              position: {
                start: { line: 97, column: 3, offset: 3633 },
                end: { line: 97, column: 45, offset: 3675 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3631 },
            end: { line: 97, column: 45, offset: 3675 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3305 },
        end: { line: 97, column: 45, offset: 3675 }
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
        start: { line: 99, column: 1, offset: 3677 },
        end: { line: 123, column: 4, offset: 4060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 125, column: 1, offset: 4062 },
            end: { line: 125, column: 39, offset: 4100 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 125, column: 39, offset: 4100 },
            end: { line: 125, column: 44, offset: 4105 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 125, column: 44, offset: 4105 },
            end: { line: 125, column: 62, offset: 4123 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 125, column: 62, offset: 4123 },
            end: { line: 125, column: 74, offset: 4135 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 125, column: 74, offset: 4135 },
            end: { line: 125, column: 79, offset: 4140 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 125, column: 79, offset: 4140 },
            end: { line: 125, column: 83, offset: 4144 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 125, column: 83, offset: 4144 },
            end: { line: 125, column: 94, offset: 4155 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 4062 },
        end: { line: 125, column: 94, offset: 4155 }
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
            start: { line: 127, column: 3, offset: 4159 },
            end: { line: 127, column: 17, offset: 4173 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4157 },
        end: { line: 127, column: 17, offset: 4173 }
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
                start: { line: 128, column: 3, offset: 4176 },
                end: { line: 128, column: 37, offset: 4210 }
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4174 },
            end: { line: 128, column: 39, offset: 4212 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 128, column: 39, offset: 4212 },
            end: { line: 128, column: 50, offset: 4223 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 128, column: 50, offset: 4223 },
            end: { line: 128, column: 60, offset: 4233 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 128, column: 60, offset: 4233 },
            end: { line: 128, column: 163, offset: 4336 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 128, column: 163, offset: 4336 },
            end: { line: 128, column: 173, offset: 4346 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 128, column: 173, offset: 4346 },
            end: { line: 128, column: 259, offset: 4432 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 4174 },
        end: { line: 128, column: 259, offset: 4432 }
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
        ']), error => console.error(error))\n' +
        '\n' +
        'myApp({})\n' +
        '\n' +
        'myApp({ userId: 1 })',
      position: {
        start: { line: 130, column: 1, offset: 4434 },
        end: { line: 145, column: 4, offset: 4759 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 147, column: 1, offset: 4761 },
            end: { line: 147, column: 36, offset: 4796 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 147, column: 36, offset: 4796 },
            end: { line: 147, column: 46, offset: 4806 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 147, column: 46, offset: 4806 },
            end: { line: 147, column: 89, offset: 4849 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 147, column: 89, offset: 4849 },
            end: { line: 147, column: 95, offset: 4855 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 147, column: 95, offset: 4855 },
            end: { line: 147, column: 127, offset: 4887 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 147, column: 127, offset: 4887 },
            end: { line: 147, column: 141, offset: 4901 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 147, column: 141, offset: 4901 },
            end: { line: 147, column: 183, offset: 4943 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 147, column: 183, offset: 4943 },
            end: { line: 147, column: 193, offset: 4953 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 147, column: 193, offset: 4953 },
            end: { line: 147, column: 203, offset: 4963 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 147, column: 203, offset: 4963 },
            end: { line: 147, column: 211, offset: 4971 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 147, column: 211, offset: 4971 },
            end: { line: 147, column: 215, offset: 4975 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 147, column: 215, offset: 4975 },
            end: { line: 147, column: 221, offset: 4981 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 147, column: 221, offset: 4981 },
            end: { line: 147, column: 235, offset: 4995 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 4761 },
        end: { line: 147, column: 235, offset: 4995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico in a project (",
          position: {
            start: { line: 149, column: 1, offset: 4997 },
            end: { line: 149, column: 99, offset: 5095 }
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
                start: { line: 149, column: 100, offset: 5096 },
                end: { line: 149, column: 112, offset: 5108 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 99, offset: 5095 },
            end: { line: 149, column: 129, offset: 5125 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 149, column: 129, offset: 5125 },
            end: { line: 149, column: 151, offset: 5147 }
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
                start: { line: 149, column: 152, offset: 5148 },
                end: { line: 149, column: 156, offset: 5152 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 151, offset: 5147 },
            end: { line: 149, column: 164, offset: 5160 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 149, column: 164, offset: 5160 },
            end: { line: 149, column: 165, offset: 5161 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 4997 },
        end: { line: 149, column: 165, offset: 5161 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 150, column: 1, offset: 5162 }
  }
}