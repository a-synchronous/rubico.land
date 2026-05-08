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
        '  pipe, compose,\n' +
        '\n' +
        '  tap, forEach,\n' +
        '\n' +
        '  switchCase,\n' +
        '\n' +
        '  tryCatch,\n' +
        '\n' +
        '  all, assign, get, set, pick, omit,\n' +
        '\n' +
        '  map, filter, flatMap, reduce, transform,\n' +
        '\n' +
        '  and, or, not, some, every,\n' +
        '\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '\n' +
        '  thunkify, always, curry, __,\n' +
        '\n' +
        '} = rubico',
      position: {
        start: { line: 3, column: 1, offset: 201 },
        end: { line: 25, column: 4, offset: 470 }
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
            start: { line: 27, column: 3, offset: 474 },
            end: { line: 27, column: 20, offset: 491 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 472 },
        end: { line: 27, column: 20, offset: 491 }
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
                        start: { line: 29, column: 6, offset: 498 },
                        end: { line: 29, column: 18, offset: 510 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 5, offset: 497 },
                    end: { line: 29, column: 33, offset: 525 }
                  }
                }
              ],
              position: {
                start: { line: 29, column: 5, offset: 497 },
                end: { line: 29, column: 33, offset: 525 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 2, offset: 494 },
            end: { line: 29, column: 33, offset: 525 }
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
                        start: { line: 30, column: 6, offset: 531 },
                        end: { line: 30, column: 17, offset: 542 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 5, offset: 530 },
                    end: { line: 30, column: 32, offset: 557 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 5, offset: 530 },
                end: { line: 30, column: 32, offset: 557 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 527 },
            end: { line: 30, column: 32, offset: 557 }
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
                        start: { line: 31, column: 6, offset: 563 },
                        end: { line: 31, column: 18, offset: 575 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 5, offset: 562 },
                    end: { line: 31, column: 34, offset: 591 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 5, offset: 562 },
                end: { line: 31, column: 34, offset: 591 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 559 },
            end: { line: 31, column: 34, offset: 591 }
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
                        start: { line: 32, column: 6, offset: 597 },
                        end: { line: 32, column: 18, offset: 609 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 5, offset: 596 },
                    end: { line: 32, column: 34, offset: 625 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 5, offset: 596 },
                end: { line: 32, column: 34, offset: 625 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 593 },
            end: { line: 32, column: 34, offset: 625 }
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
                        start: { line: 33, column: 6, offset: 631 },
                        end: { line: 33, column: 20, offset: 645 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 5, offset: 630 },
                    end: { line: 33, column: 38, offset: 663 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 5, offset: 630 },
                end: { line: 33, column: 38, offset: 663 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 627 },
            end: { line: 33, column: 38, offset: 663 }
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
                        start: { line: 34, column: 6, offset: 669 },
                        end: { line: 34, column: 17, offset: 680 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 5, offset: 668 },
                    end: { line: 34, column: 32, offset: 695 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 5, offset: 668 },
                end: { line: 34, column: 32, offset: 695 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 665 },
            end: { line: 34, column: 32, offset: 695 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 2, offset: 494 },
        end: { line: 34, column: 32, offset: 695 }
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
            start: { line: 36, column: 3, offset: 699 },
            end: { line: 36, column: 15, offset: 711 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 697 },
        end: { line: 36, column: 15, offset: 711 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pass ',
          position: {
            start: { line: 37, column: 1, offset: 712 },
            end: { line: 37, column: 6, offset: 717 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'synchronous or asynchronous',
              position: {
                start: { line: 37, column: 8, offset: 719 },
                end: { line: 37, column: 35, offset: 746 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 6, offset: 717 },
            end: { line: 37, column: 37, offset: 748 }
          }
        },
        {
          type: 'text',
          value: ' functions to any Rubico operator - any and all promises will be resolved. Execute functions concurrently without having to call ',
          position: {
            start: { line: 37, column: 37, offset: 748 },
            end: { line: 37, column: 166, offset: 877 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 37, column: 166, offset: 877 },
            end: { line: 37, column: 179, offset: 890 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 37, column: 179, offset: 890 },
            end: { line: 37, column: 183, offset: 894 }
          }
        },
        {
          type: 'inlineCode',
          value: 'array.map',
          position: {
            start: { line: 37, column: 183, offset: 894 },
            end: { line: 37, column: 194, offset: 905 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 37, column: 194, offset: 905 },
            end: { line: 37, column: 195, offset: 906 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 712 },
        end: { line: 37, column: 195, offset: 906 }
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
        start: { line: 39, column: 1, offset: 908 },
        end: { line: 47, column: 4, offset: 1098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 49, column: 1, offset: 1100 },
            end: { line: 49, column: 11, offset: 1110 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 49, column: 11, offset: 1110 },
            end: { line: 49, column: 16, offset: 1115 }
          }
        },
        {
          type: 'text',
          value: ' button to make five concurrent requests using ',
          position: {
            start: { line: 49, column: 16, offset: 1115 },
            end: { line: 49, column: 63, offset: 1162 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 49, column: 63, offset: 1162 },
            end: { line: 49, column: 70, offset: 1169 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console.',
          position: {
            start: { line: 49, column: 70, offset: 1169 },
            end: { line: 49, column: 137, offset: 1236 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1100 },
        end: { line: 49, column: 137, offset: 1236 }
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
            start: { line: 51, column: 3, offset: 1240 },
            end: { line: 51, column: 14, offset: 1251 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1238 },
        end: { line: 51, column: 14, offset: 1251 }
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
                start: { line: 52, column: 3, offset: 1254 },
                end: { line: 52, column: 33, offset: 1284 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 1, offset: 1252 },
            end: { line: 52, column: 35, offset: 1286 }
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality by composing a new function - Rubico gives you the tools to make this as simple and stress-free as possible.",
          position: {
            start: { line: 52, column: 35, offset: 1286 },
            end: { line: 52, column: 239, offset: 1490 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1252 },
        end: { line: 52, column: 239, offset: 1490 }
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
        start: { line: 54, column: 1, offset: 1492 },
        end: { line: 71, column: 4, offset: 1857 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 73, column: 1, offset: 1859 },
            end: { line: 73, column: 38, offset: 1896 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 73, column: 38, offset: 1896 },
            end: { line: 73, column: 55, offset: 1913 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 73, column: 55, offset: 1913 },
            end: { line: 73, column: 173, offset: 2031 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 73, column: 173, offset: 2031 },
            end: { line: 73, column: 200, offset: 2058 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 73, column: 200, offset: 2058 },
            end: { line: 73, column: 245, offset: 2103 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 73, column: 245, offset: 2103 },
            end: { line: 73, column: 252, offset: 2110 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 73, column: 252, offset: 2110 },
            end: { line: 73, column: 278, offset: 2136 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 73, column: 278, offset: 2136 },
            end: { line: 73, column: 282, offset: 2140 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 73, column: 282, offset: 2140 },
            end: { line: 73, column: 352, offset: 2210 }
          }
        }
      ],
      position: {
        start: { line: 73, column: 1, offset: 1859 },
        end: { line: 73, column: 352, offset: 2210 }
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
            start: { line: 75, column: 3, offset: 2214 },
            end: { line: 75, column: 15, offset: 2226 }
          }
        }
      ],
      position: {
        start: { line: 75, column: 1, offset: 2212 },
        end: { line: 75, column: 15, offset: 2226 }
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
                start: { line: 76, column: 3, offset: 2229 },
                end: { line: 76, column: 38, offset: 2264 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 1, offset: 2227 },
            end: { line: 76, column: 40, offset: 2266 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 76, column: 40, offset: 2266 },
            end: { line: 76, column: 202, offset: 2428 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2227 },
        end: { line: 76, column: 202, offset: 2428 }
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
        start: { line: 78, column: 1, offset: 2430 },
        end: { line: 94, column: 4, offset: 2771 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 96, column: 1, offset: 2773 },
            end: { line: 96, column: 43, offset: 2815 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 96, column: 43, offset: 2815 },
            end: { line: 96, column: 48, offset: 2820 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 96, column: 48, offset: 2820 },
            end: { line: 96, column: 72, offset: 2844 }
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
                start: { line: 96, column: 73, offset: 2845 },
                end: { line: 96, column: 80, offset: 2852 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 72, offset: 2844 },
            end: { line: 96, column: 144, offset: 2916 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 96, column: 144, offset: 2916 },
            end: { line: 96, column: 176, offset: 2948 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 96, column: 176, offset: 2948 },
            end: { line: 96, column: 193, offset: 2965 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 96, column: 193, offset: 2965 },
            end: { line: 96, column: 204, offset: 2976 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 96, column: 204, offset: 2976 },
            end: { line: 96, column: 213, offset: 2985 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 96, column: 213, offset: 2985 },
            end: { line: 96, column: 221, offset: 2993 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 96, column: 221, offset: 2993 },
            end: { line: 96, column: 247, offset: 3019 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 96, column: 247, offset: 3019 },
            end: { line: 96, column: 256, offset: 3028 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 96, column: 256, offset: 3028 },
            end: { line: 96, column: 289, offset: 3061 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 96, column: 289, offset: 3061 },
            end: { line: 96, column: 306, offset: 3078 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 96, column: 306, offset: 3078 },
            end: { line: 96, column: 340, offset: 3112 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 96, column: 340, offset: 3112 },
            end: { line: 96, column: 352, offset: 3124 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 96, column: 352, offset: 3124 },
            end: { line: 96, column: 413, offset: 3185 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 96, column: 413, offset: 3185 },
            end: { line: 96, column: 414, offset: 3186 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 2773 },
        end: { line: 96, column: 414, offset: 3186 }
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
            start: { line: 98, column: 3, offset: 3190 },
            end: { line: 98, column: 15, offset: 3202 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 3188 },
        end: { line: 98, column: 15, offset: 3202 }
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
                start: { line: 99, column: 3, offset: 3205 },
                end: { line: 99, column: 52, offset: 3254 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3203 },
            end: { line: 99, column: 54, offset: 3256 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 99, column: 54, offset: 3256 },
            end: { line: 99, column: 185, offset: 3387 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3203 },
        end: { line: 99, column: 185, offset: 3387 }
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
                    start: { line: 101, column: 3, offset: 3391 },
                    end: { line: 101, column: 26, offset: 3414 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 101, column: 26, offset: 3414 },
                    end: { line: 101, column: 37, offset: 3425 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 37, offset: 3425 },
                    end: { line: 101, column: 40, offset: 3428 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 101, column: 40, offset: 3428 },
                    end: { line: 101, column: 63, offset: 3451 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3391 },
                end: { line: 101, column: 63, offset: 3451 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3389 },
            end: { line: 101, column: 63, offset: 3451 }
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
                    start: { line: 102, column: 3, offset: 3454 },
                    end: { line: 102, column: 16, offset: 3467 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 102, column: 16, offset: 3467 },
                    end: { line: 102, column: 24, offset: 3475 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 24, offset: 3475 },
                    end: { line: 102, column: 27, offset: 3478 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 102, column: 27, offset: 3478 },
                    end: { line: 102, column: 40, offset: 3491 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3454 },
                end: { line: 102, column: 40, offset: 3491 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3452 },
            end: { line: 102, column: 40, offset: 3491 }
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
                    start: { line: 103, column: 3, offset: 3494 },
                    end: { line: 103, column: 15, offset: 3506 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 103, column: 15, offset: 3506 },
                    end: { line: 103, column: 23, offset: 3514 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 103, column: 23, offset: 3514 },
                    end: { line: 103, column: 26, offset: 3517 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 103, column: 26, offset: 3517 },
                    end: { line: 103, column: 38, offset: 3529 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 3, offset: 3494 },
                end: { line: 103, column: 38, offset: 3529 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 1, offset: 3492 },
            end: { line: 103, column: 38, offset: 3529 }
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
                    start: { line: 104, column: 3, offset: 3532 },
                    end: { line: 104, column: 16, offset: 3545 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 104, column: 16, offset: 3545 },
                    end: { line: 104, column: 20, offset: 3549 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 104, column: 20, offset: 3549 },
                    end: { line: 104, column: 23, offset: 3552 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 104, column: 23, offset: 3552 },
                    end: { line: 104, column: 31, offset: 3560 }
                  }
                }
              ],
              position: {
                start: { line: 104, column: 3, offset: 3532 },
                end: { line: 104, column: 31, offset: 3560 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3530 },
            end: { line: 104, column: 31, offset: 3560 }
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
                    start: { line: 105, column: 3, offset: 3563 },
                    end: { line: 105, column: 13, offset: 3573 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 105, column: 13, offset: 3573 },
                    end: { line: 105, column: 22, offset: 3582 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 105, column: 22, offset: 3582 },
                    end: { line: 105, column: 25, offset: 3585 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 105, column: 25, offset: 3585 },
                    end: { line: 105, column: 35, offset: 3595 }
                  }
                }
              ],
              position: {
                start: { line: 105, column: 3, offset: 3563 },
                end: { line: 105, column: 35, offset: 3595 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 1, offset: 3561 },
            end: { line: 105, column: 35, offset: 3595 }
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
                    start: { line: 106, column: 3, offset: 3598 },
                    end: { line: 106, column: 17, offset: 3612 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 106, column: 17, offset: 3612 },
                    end: { line: 106, column: 24, offset: 3619 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 106, column: 24, offset: 3619 },
                    end: { line: 106, column: 27, offset: 3622 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 106, column: 27, offset: 3622 },
                    end: { line: 106, column: 37, offset: 3632 }
                  }
                }
              ],
              position: {
                start: { line: 106, column: 3, offset: 3598 },
                end: { line: 106, column: 37, offset: 3632 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3596 },
            end: { line: 106, column: 37, offset: 3632 }
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
                    start: { line: 107, column: 3, offset: 3635 },
                    end: { line: 107, column: 14, offset: 3646 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 107, column: 14, offset: 3646 },
                    end: { line: 107, column: 21, offset: 3653 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 107, column: 21, offset: 3653 },
                    end: { line: 107, column: 24, offset: 3656 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 107, column: 24, offset: 3656 },
                    end: { line: 107, column: 34, offset: 3666 }
                  }
                }
              ],
              position: {
                start: { line: 107, column: 3, offset: 3635 },
                end: { line: 107, column: 34, offset: 3666 }
              }
            }
          ],
          position: {
            start: { line: 107, column: 1, offset: 3633 },
            end: { line: 107, column: 34, offset: 3666 }
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
                    start: { line: 108, column: 3, offset: 3669 },
                    end: { line: 108, column: 26, offset: 3692 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 108, column: 26, offset: 3692 },
                    end: { line: 108, column: 34, offset: 3700 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 108, column: 34, offset: 3700 },
                    end: { line: 108, column: 37, offset: 3703 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 108, column: 37, offset: 3703 },
                    end: { line: 108, column: 48, offset: 3714 }
                  }
                }
              ],
              position: {
                start: { line: 108, column: 3, offset: 3669 },
                end: { line: 108, column: 48, offset: 3714 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3667 },
            end: { line: 108, column: 48, offset: 3714 }
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
                    start: { line: 109, column: 3, offset: 3717 },
                    end: { line: 109, column: 23, offset: 3737 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 109, column: 23, offset: 3737 },
                    end: { line: 109, column: 31, offset: 3745 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 109, column: 31, offset: 3745 },
                    end: { line: 109, column: 34, offset: 3748 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 109, column: 34, offset: 3748 },
                    end: { line: 109, column: 45, offset: 3759 }
                  }
                }
              ],
              position: {
                start: { line: 109, column: 3, offset: 3717 },
                end: { line: 109, column: 45, offset: 3759 }
              }
            }
          ],
          position: {
            start: { line: 109, column: 1, offset: 3715 },
            end: { line: 109, column: 45, offset: 3759 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3389 },
        end: { line: 109, column: 45, offset: 3759 }
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
        start: { line: 111, column: 1, offset: 3761 },
        end: { line: 135, column: 4, offset: 4144 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 137, column: 1, offset: 4146 },
            end: { line: 137, column: 39, offset: 4184 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 137, column: 39, offset: 4184 },
            end: { line: 137, column: 44, offset: 4189 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 137, column: 44, offset: 4189 },
            end: { line: 137, column: 62, offset: 4207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 137, column: 62, offset: 4207 },
            end: { line: 137, column: 74, offset: 4219 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 137, column: 74, offset: 4219 },
            end: { line: 137, column: 79, offset: 4224 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 137, column: 79, offset: 4224 },
            end: { line: 137, column: 83, offset: 4228 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 137, column: 83, offset: 4228 },
            end: { line: 137, column: 94, offset: 4239 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4146 },
        end: { line: 137, column: 94, offset: 4239 }
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
            start: { line: 139, column: 3, offset: 4243 },
            end: { line: 139, column: 17, offset: 4257 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 4241 },
        end: { line: 139, column: 17, offset: 4257 }
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
                start: { line: 140, column: 3, offset: 4260 },
                end: { line: 140, column: 37, offset: 4294 }
              }
            }
          ],
          position: {
            start: { line: 140, column: 1, offset: 4258 },
            end: { line: 140, column: 39, offset: 4296 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 140, column: 39, offset: 4296 },
            end: { line: 140, column: 50, offset: 4307 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 140, column: 50, offset: 4307 },
            end: { line: 140, column: 60, offset: 4317 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 140, column: 60, offset: 4317 },
            end: { line: 140, column: 163, offset: 4420 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 140, column: 163, offset: 4420 },
            end: { line: 140, column: 173, offset: 4430 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 140, column: 173, offset: 4430 },
            end: { line: 140, column: 259, offset: 4516 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 4258 },
        end: { line: 140, column: 259, offset: 4516 }
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
        start: { line: 142, column: 1, offset: 4518 },
        end: { line: 159, column: 4, offset: 4869 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 161, column: 1, offset: 4871 },
            end: { line: 161, column: 36, offset: 4906 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 161, column: 36, offset: 4906 },
            end: { line: 161, column: 46, offset: 4916 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 161, column: 46, offset: 4916 },
            end: { line: 161, column: 89, offset: 4959 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 161, column: 89, offset: 4959 },
            end: { line: 161, column: 95, offset: 4965 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 161, column: 95, offset: 4965 },
            end: { line: 161, column: 127, offset: 4997 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 161, column: 127, offset: 4997 },
            end: { line: 161, column: 141, offset: 5011 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 161, column: 141, offset: 5011 },
            end: { line: 161, column: 183, offset: 5053 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 161, column: 183, offset: 5053 },
            end: { line: 161, column: 193, offset: 5063 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 161, column: 193, offset: 5063 },
            end: { line: 161, column: 203, offset: 5073 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 161, column: 203, offset: 5073 },
            end: { line: 161, column: 211, offset: 5081 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 161, column: 211, offset: 5081 },
            end: { line: 161, column: 215, offset: 5085 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 161, column: 215, offset: 5085 },
            end: { line: 161, column: 221, offset: 5091 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 161, column: 221, offset: 5091 },
            end: { line: 161, column: 235, offset: 5105 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 4871 },
        end: { line: 161, column: 235, offset: 5105 }
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
            start: { line: 163, column: 3, offset: 5109 },
            end: { line: 163, column: 14, offset: 5120 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 5107 },
        end: { line: 163, column: 14, offset: 5120 }
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
                start: { line: 164, column: 3, offset: 5123 },
                end: { line: 164, column: 44, offset: 5164 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 1, offset: 5121 },
            end: { line: 164, column: 46, offset: 5166 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with Rubico's ",
          position: {
            start: { line: 164, column: 46, offset: 5166 },
            end: { line: 164, column: 127, offset: 5247 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 164, column: 127, offset: 5247 },
            end: { line: 164, column: 139, offset: 5259 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 164, column: 139, offset: 5259 },
            end: { line: 164, column: 151, offset: 5271 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 164, column: 151, offset: 5271 },
            end: { line: 164, column: 160, offset: 5280 }
          }
        },
        {
          type: 'text',
          value: ' operator. Read more on transducers ',
          position: {
            start: { line: 164, column: 160, offset: 5280 },
            end: { line: 164, column: 196, offset: 5316 }
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
                start: { line: 164, column: 197, offset: 5317 },
                end: { line: 164, column: 201, offset: 5321 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 196, offset: 5316 },
            end: { line: 164, column: 244, offset: 5364 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 164, column: 244, offset: 5364 },
            end: { line: 164, column: 245, offset: 5365 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 5121 },
        end: { line: 164, column: 245, offset: 5365 }
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
        start: { line: 166, column: 1, offset: 5367 },
        end: { line: 191, column: 4, offset: 5983 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a complex transformation made simple by the Rubico ',
          position: {
            start: { line: 193, column: 1, offset: 5985 },
            end: { line: 193, column: 65, offset: 6049 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 193, column: 65, offset: 6049 },
            end: { line: 193, column: 76, offset: 6060 }
          }
        },
        {
          type: 'text',
          value: ' operator. The operator transforms the generator of decimal segments created by ',
          position: {
            start: { line: 193, column: 76, offset: 6060 },
            end: { line: 193, column: 156, offset: 6140 }
          }
        },
        {
          type: 'inlineCode',
          value: 'generateSegments',
          position: {
            start: { line: 193, column: 156, offset: 6140 },
            end: { line: 193, column: 174, offset: 6158 }
          }
        },
        {
          type: 'text',
          value: ' into the string ',
          position: {
            start: { line: 193, column: 174, offset: 6158 },
            end: { line: 193, column: 191, offset: 6175 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notes',
          position: {
            start: { line: 193, column: 191, offset: 6175 },
            end: { line: 193, column: 198, offset: 6182 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 193, column: 198, offset: 6182 },
            end: { line: 193, column: 199, offset: 6183 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 5985 },
        end: { line: 193, column: 199, offset: 6183 }
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
            start: { line: 195, column: 3, offset: 6187 },
            end: { line: 195, column: 13, offset: 6197 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 6185 },
        end: { line: 195, column: 13, offset: 6197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico (",
          position: {
            start: { line: 197, column: 1, offset: 6199 },
            end: { line: 197, column: 86, offset: 6284 }
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
                start: { line: 197, column: 87, offset: 6285 },
                end: { line: 197, column: 99, offset: 6297 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 86, offset: 6284 },
            end: { line: 197, column: 116, offset: 6314 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 197, column: 116, offset: 6314 },
            end: { line: 197, column: 138, offset: 6336 }
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
                start: { line: 197, column: 139, offset: 6337 },
                end: { line: 197, column: 143, offset: 6341 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 138, offset: 6336 },
            end: { line: 197, column: 151, offset: 6349 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 197, column: 151, offset: 6349 },
            end: { line: 197, column: 152, offset: 6350 }
          }
        }
      ],
      position: {
        start: { line: 197, column: 1, offset: 6199 },
        end: { line: 197, column: 152, offset: 6350 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 198, column: 1, offset: 6351 }
  }
}