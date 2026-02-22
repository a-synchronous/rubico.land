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
        'console.log(doMathsWithLogs(3))\n' +
        '// input: 3\n' +
        '// result of square: 9\n' +
        '// { number: 3, numberSquared: 9 }',
      position: {
        start: { line: 54, column: 1, offset: 1492 },
        end: { line: 74, column: 4, offset: 1927 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 76, column: 1, offset: 1929 },
            end: { line: 76, column: 38, offset: 1966 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 76, column: 38, offset: 1966 },
            end: { line: 76, column: 55, offset: 1983 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 76, column: 55, offset: 1983 },
            end: { line: 76, column: 173, offset: 2101 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 76, column: 173, offset: 2101 },
            end: { line: 76, column: 200, offset: 2128 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 76, column: 200, offset: 2128 },
            end: { line: 76, column: 245, offset: 2173 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 76, column: 245, offset: 2173 },
            end: { line: 76, column: 252, offset: 2180 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 76, column: 252, offset: 2180 },
            end: { line: 76, column: 278, offset: 2206 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 76, column: 278, offset: 2206 },
            end: { line: 76, column: 282, offset: 2210 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 76, column: 282, offset: 2210 },
            end: { line: 76, column: 352, offset: 2280 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 1929 },
        end: { line: 76, column: 352, offset: 2280 }
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
            start: { line: 78, column: 3, offset: 2284 },
            end: { line: 78, column: 15, offset: 2296 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2282 },
        end: { line: 78, column: 15, offset: 2296 }
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
                start: { line: 79, column: 3, offset: 2299 },
                end: { line: 79, column: 38, offset: 2334 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 1, offset: 2297 },
            end: { line: 79, column: 40, offset: 2336 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 79, column: 40, offset: 2336 },
            end: { line: 79, column: 202, offset: 2498 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2297 },
        end: { line: 79, column: 202, offset: 2498 }
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
        ']))\n' +
        '// [1, 2, 3, 4, 5]\n' +
        "// '1491625'\n" +
        '// Set { 1, 4, 9, 16, 25 }\n' +
        '// Uint8Array [1, 4, 9, 16, 25]\n' +
        '// { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
        "// Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }",
      position: {
        start: { line: 81, column: 1, offset: 2500 },
        end: { line: 103, column: 4, offset: 3032 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 105, column: 1, offset: 3034 },
            end: { line: 105, column: 43, offset: 3076 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 105, column: 43, offset: 3076 },
            end: { line: 105, column: 48, offset: 3081 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 105, column: 48, offset: 3081 },
            end: { line: 105, column: 72, offset: 3105 }
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
                start: { line: 105, column: 73, offset: 3106 },
                end: { line: 105, column: 80, offset: 3113 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 72, offset: 3105 },
            end: { line: 105, column: 144, offset: 3177 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 105, column: 144, offset: 3177 },
            end: { line: 105, column: 176, offset: 3209 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 105, column: 176, offset: 3209 },
            end: { line: 105, column: 193, offset: 3226 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 105, column: 193, offset: 3226 },
            end: { line: 105, column: 204, offset: 3237 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 105, column: 204, offset: 3237 },
            end: { line: 105, column: 213, offset: 3246 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 105, column: 213, offset: 3246 },
            end: { line: 105, column: 221, offset: 3254 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 105, column: 221, offset: 3254 },
            end: { line: 105, column: 247, offset: 3280 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 105, column: 247, offset: 3280 },
            end: { line: 105, column: 256, offset: 3289 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 105, column: 256, offset: 3289 },
            end: { line: 105, column: 289, offset: 3322 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 105, column: 289, offset: 3322 },
            end: { line: 105, column: 306, offset: 3339 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 105, column: 306, offset: 3339 },
            end: { line: 105, column: 340, offset: 3373 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 105, column: 340, offset: 3373 },
            end: { line: 105, column: 352, offset: 3385 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 105, column: 352, offset: 3385 },
            end: { line: 105, column: 413, offset: 3446 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 105, column: 413, offset: 3446 },
            end: { line: 105, column: 414, offset: 3447 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3034 },
        end: { line: 105, column: 414, offset: 3447 }
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
            start: { line: 107, column: 3, offset: 3451 },
            end: { line: 107, column: 15, offset: 3463 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3449 },
        end: { line: 107, column: 15, offset: 3463 }
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
                start: { line: 108, column: 3, offset: 3466 },
                end: { line: 108, column: 52, offset: 3515 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3464 },
            end: { line: 108, column: 54, offset: 3517 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 108, column: 54, offset: 3517 },
            end: { line: 108, column: 185, offset: 3648 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3464 },
        end: { line: 108, column: 185, offset: 3648 }
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
                    start: { line: 110, column: 3, offset: 3652 },
                    end: { line: 110, column: 26, offset: 3675 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3675 },
                    end: { line: 110, column: 37, offset: 3686 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3686 },
                    end: { line: 110, column: 40, offset: 3689 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3689 },
                    end: { line: 110, column: 63, offset: 3712 }
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3652 },
                end: { line: 110, column: 63, offset: 3712 }
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3650 },
            end: { line: 110, column: 63, offset: 3712 }
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
                    start: { line: 111, column: 3, offset: 3715 },
                    end: { line: 111, column: 16, offset: 3728 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3728 },
                    end: { line: 111, column: 24, offset: 3736 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3736 },
                    end: { line: 111, column: 27, offset: 3739 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3739 },
                    end: { line: 111, column: 40, offset: 3752 }
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3715 },
                end: { line: 111, column: 40, offset: 3752 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3713 },
            end: { line: 111, column: 40, offset: 3752 }
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
                    start: { line: 112, column: 3, offset: 3755 },
                    end: { line: 112, column: 15, offset: 3767 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3767 },
                    end: { line: 112, column: 23, offset: 3775 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3775 },
                    end: { line: 112, column: 26, offset: 3778 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3778 },
                    end: { line: 112, column: 38, offset: 3790 }
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3755 },
                end: { line: 112, column: 38, offset: 3790 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3753 },
            end: { line: 112, column: 38, offset: 3790 }
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
                    start: { line: 113, column: 3, offset: 3793 },
                    end: { line: 113, column: 16, offset: 3806 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 3806 },
                    end: { line: 113, column: 20, offset: 3810 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 3810 },
                    end: { line: 113, column: 23, offset: 3813 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 3813 },
                    end: { line: 113, column: 31, offset: 3821 }
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3793 },
                end: { line: 113, column: 31, offset: 3821 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3791 },
            end: { line: 113, column: 31, offset: 3821 }
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
                    start: { line: 114, column: 3, offset: 3824 },
                    end: { line: 114, column: 13, offset: 3834 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 3834 },
                    end: { line: 114, column: 22, offset: 3843 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 3843 },
                    end: { line: 114, column: 25, offset: 3846 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 3846 },
                    end: { line: 114, column: 35, offset: 3856 }
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3824 },
                end: { line: 114, column: 35, offset: 3856 }
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3822 },
            end: { line: 114, column: 35, offset: 3856 }
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
                    start: { line: 115, column: 3, offset: 3859 },
                    end: { line: 115, column: 17, offset: 3873 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 3873 },
                    end: { line: 115, column: 24, offset: 3880 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 3880 },
                    end: { line: 115, column: 27, offset: 3883 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 3883 },
                    end: { line: 115, column: 37, offset: 3893 }
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3859 },
                end: { line: 115, column: 37, offset: 3893 }
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3857 },
            end: { line: 115, column: 37, offset: 3893 }
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
                    start: { line: 116, column: 3, offset: 3896 },
                    end: { line: 116, column: 14, offset: 3907 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 3907 },
                    end: { line: 116, column: 21, offset: 3914 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 3914 },
                    end: { line: 116, column: 24, offset: 3917 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 3917 },
                    end: { line: 116, column: 34, offset: 3927 }
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 3896 },
                end: { line: 116, column: 34, offset: 3927 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 3894 },
            end: { line: 116, column: 34, offset: 3927 }
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
                    start: { line: 117, column: 3, offset: 3930 },
                    end: { line: 117, column: 26, offset: 3953 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 3953 },
                    end: { line: 117, column: 34, offset: 3961 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 3961 },
                    end: { line: 117, column: 37, offset: 3964 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 3964 },
                    end: { line: 117, column: 48, offset: 3975 }
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 3930 },
                end: { line: 117, column: 48, offset: 3975 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 3928 },
            end: { line: 117, column: 48, offset: 3975 }
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
                    start: { line: 118, column: 3, offset: 3978 },
                    end: { line: 118, column: 23, offset: 3998 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 3998 },
                    end: { line: 118, column: 31, offset: 4006 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4006 },
                    end: { line: 118, column: 34, offset: 4009 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4009 },
                    end: { line: 118, column: 45, offset: 4020 }
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 3978 },
                end: { line: 118, column: 45, offset: 4020 }
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 3976 },
            end: { line: 118, column: 45, offset: 4020 }
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3650 },
        end: { line: 118, column: 45, offset: 4020 }
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
        "cli(['-h']) // USAGE: ...\n" +
        "cli(['--version']) // v0.0.0\n" +
        "cli(['???']) // USAGE: ...",
      position: {
        start: { line: 120, column: 1, offset: 4022 },
        end: { line: 144, column: 4, offset: 4443 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 146, column: 1, offset: 4445 },
            end: { line: 146, column: 39, offset: 4483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 146, column: 39, offset: 4483 },
            end: { line: 146, column: 44, offset: 4488 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 146, column: 44, offset: 4488 },
            end: { line: 146, column: 62, offset: 4506 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 146, column: 62, offset: 4506 },
            end: { line: 146, column: 74, offset: 4518 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 146, column: 74, offset: 4518 },
            end: { line: 146, column: 79, offset: 4523 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 146, column: 79, offset: 4523 },
            end: { line: 146, column: 83, offset: 4527 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 146, column: 83, offset: 4527 },
            end: { line: 146, column: 94, offset: 4538 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4445 },
        end: { line: 146, column: 94, offset: 4538 }
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
            start: { line: 148, column: 3, offset: 4542 },
            end: { line: 148, column: 17, offset: 4556 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 4540 },
        end: { line: 148, column: 17, offset: 4556 }
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
                start: { line: 149, column: 3, offset: 4559 },
                end: { line: 149, column: 37, offset: 4593 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 1, offset: 4557 },
            end: { line: 149, column: 39, offset: 4595 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 149, column: 39, offset: 4595 },
            end: { line: 149, column: 50, offset: 4606 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 149, column: 50, offset: 4606 },
            end: { line: 149, column: 60, offset: 4616 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 149, column: 60, offset: 4616 },
            end: { line: 149, column: 163, offset: 4719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 149, column: 163, offset: 4719 },
            end: { line: 149, column: 173, offset: 4729 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 149, column: 173, offset: 4729 },
            end: { line: 149, column: 259, offset: 4815 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 4557 },
        end: { line: 149, column: 259, offset: 4815 }
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
        'myApp({}) // Error: userId is required but not found\n' +
        '\n' +
        'myApp({ userId: 1 }) // validated user 1',
      position: {
        start: { line: 151, column: 1, offset: 4817 },
        end: { line: 168, column: 4, offset: 5231 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 170, column: 1, offset: 5233 },
            end: { line: 170, column: 36, offset: 5268 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 170, column: 36, offset: 5268 },
            end: { line: 170, column: 46, offset: 5278 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 170, column: 46, offset: 5278 },
            end: { line: 170, column: 89, offset: 5321 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 170, column: 89, offset: 5321 },
            end: { line: 170, column: 95, offset: 5327 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 170, column: 95, offset: 5327 },
            end: { line: 170, column: 127, offset: 5359 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 170, column: 127, offset: 5359 },
            end: { line: 170, column: 141, offset: 5373 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 170, column: 141, offset: 5373 },
            end: { line: 170, column: 183, offset: 5415 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 170, column: 183, offset: 5415 },
            end: { line: 170, column: 193, offset: 5425 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 170, column: 193, offset: 5425 },
            end: { line: 170, column: 203, offset: 5435 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 170, column: 203, offset: 5435 },
            end: { line: 170, column: 211, offset: 5443 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 170, column: 211, offset: 5443 },
            end: { line: 170, column: 215, offset: 5447 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 170, column: 215, offset: 5447 },
            end: { line: 170, column: 221, offset: 5453 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 170, column: 221, offset: 5453 },
            end: { line: 170, column: 235, offset: 5467 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 5233 },
        end: { line: 170, column: 235, offset: 5467 }
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
            start: { line: 172, column: 3, offset: 5471 },
            end: { line: 172, column: 14, offset: 5482 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 5469 },
        end: { line: 172, column: 14, offset: 5482 }
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
                start: { line: 173, column: 3, offset: 5485 },
                end: { line: 173, column: 44, offset: 5526 }
              }
            }
          ],
          position: {
            start: { line: 173, column: 1, offset: 5483 },
            end: { line: 173, column: 46, offset: 5528 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with Rubico's ",
          position: {
            start: { line: 173, column: 46, offset: 5528 },
            end: { line: 173, column: 127, offset: 5609 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 173, column: 127, offset: 5609 },
            end: { line: 173, column: 139, offset: 5621 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 173, column: 139, offset: 5621 },
            end: { line: 173, column: 151, offset: 5633 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 173, column: 151, offset: 5633 },
            end: { line: 173, column: 160, offset: 5642 }
          }
        },
        {
          type: 'text',
          value: ' operator. Read more on transducers ',
          position: {
            start: { line: 173, column: 160, offset: 5642 },
            end: { line: 173, column: 196, offset: 5678 }
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
                start: { line: 173, column: 197, offset: 5679 },
                end: { line: 173, column: 201, offset: 5683 }
              }
            }
          ],
          position: {
            start: { line: 173, column: 196, offset: 5678 },
            end: { line: 173, column: 244, offset: 5726 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 173, column: 244, offset: 5726 },
            end: { line: 173, column: 245, offset: 5727 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 5483 },
        end: { line: 173, column: 245, offset: 5727 }
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
        'console.log(notes) // CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC',
      position: {
        start: { line: 175, column: 1, offset: 5729 },
        end: { line: 200, column: 4, offset: 6391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a complex transformation made simple by the Rubico ',
          position: {
            start: { line: 202, column: 1, offset: 6393 },
            end: { line: 202, column: 65, offset: 6457 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 202, column: 65, offset: 6457 },
            end: { line: 202, column: 76, offset: 6468 }
          }
        },
        {
          type: 'text',
          value: ' operator. The operator transforms the generator of decimal segments created by ',
          position: {
            start: { line: 202, column: 76, offset: 6468 },
            end: { line: 202, column: 156, offset: 6548 }
          }
        },
        {
          type: 'inlineCode',
          value: 'generateSegments',
          position: {
            start: { line: 202, column: 156, offset: 6548 },
            end: { line: 202, column: 174, offset: 6566 }
          }
        },
        {
          type: 'text',
          value: ' into the string ',
          position: {
            start: { line: 202, column: 174, offset: 6566 },
            end: { line: 202, column: 191, offset: 6583 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notes',
          position: {
            start: { line: 202, column: 191, offset: 6583 },
            end: { line: 202, column: 198, offset: 6590 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 202, column: 198, offset: 6590 },
            end: { line: 202, column: 199, offset: 6591 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 6393 },
        end: { line: 202, column: 199, offset: 6591 }
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
            start: { line: 204, column: 3, offset: 6595 },
            end: { line: 204, column: 13, offset: 6605 }
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 6593 },
        end: { line: 204, column: 13, offset: 6605 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico (",
          position: {
            start: { line: 206, column: 1, offset: 6607 },
            end: { line: 206, column: 86, offset: 6692 }
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
                start: { line: 206, column: 87, offset: 6693 },
                end: { line: 206, column: 99, offset: 6705 }
              }
            }
          ],
          position: {
            start: { line: 206, column: 86, offset: 6692 },
            end: { line: 206, column: 116, offset: 6722 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 206, column: 116, offset: 6722 },
            end: { line: 206, column: 138, offset: 6744 }
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
                start: { line: 206, column: 139, offset: 6745 },
                end: { line: 206, column: 143, offset: 6749 }
              }
            }
          ],
          position: {
            start: { line: 206, column: 138, offset: 6744 },
            end: { line: 206, column: 151, offset: 6757 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 206, column: 151, offset: 6757 },
            end: { line: 206, column: 152, offset: 6758 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6607 },
        end: { line: 206, column: 152, offset: 6758 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 207, column: 1, offset: 6759 }
  }
}