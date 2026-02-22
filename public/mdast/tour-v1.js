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
        'console.log(doMathsWithLogs(3))\n' +
        '// input: 3\n' +
        '// result of square: 9\n' +
        '// { number: 3, numberSquared: 9 }',
      position: {
        start: { line: 42, column: 1, offset: 1406 },
        end: { line: 62, column: 4, offset: 1842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 64, column: 1, offset: 1844 },
            end: { line: 64, column: 38, offset: 1881 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 64, column: 38, offset: 1881 },
            end: { line: 64, column: 55, offset: 1898 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 64, column: 55, offset: 1898 },
            end: { line: 64, column: 173, offset: 2016 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 64, column: 173, offset: 2016 },
            end: { line: 64, column: 200, offset: 2043 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 64, column: 200, offset: 2043 },
            end: { line: 64, column: 245, offset: 2088 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 64, column: 245, offset: 2088 },
            end: { line: 64, column: 252, offset: 2095 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 64, column: 252, offset: 2095 },
            end: { line: 64, column: 278, offset: 2121 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 64, column: 278, offset: 2121 },
            end: { line: 64, column: 282, offset: 2125 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 64, column: 282, offset: 2125 },
            end: { line: 64, column: 352, offset: 2195 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 1844 },
        end: { line: 64, column: 352, offset: 2195 }
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
            start: { line: 66, column: 3, offset: 2199 },
            end: { line: 66, column: 15, offset: 2211 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2197 },
        end: { line: 66, column: 15, offset: 2211 }
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
                start: { line: 67, column: 3, offset: 2214 },
                end: { line: 67, column: 38, offset: 2249 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 1, offset: 2212 },
            end: { line: 67, column: 40, offset: 2251 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 67, column: 40, offset: 2251 },
            end: { line: 67, column: 202, offset: 2413 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2212 },
        end: { line: 67, column: 202, offset: 2413 }
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
        ']))\n' +
        '// [1, 2, 3, 4, 5]\n' +
        "// '1491625'\n" +
        '// Set { 1, 4, 9, 16, 25 }\n' +
        '// Uint8Array [1, 4, 9, 16, 25]\n' +
        '// { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
        "// Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }",
      position: {
        start: { line: 69, column: 1, offset: 2415 },
        end: { line: 91, column: 4, offset: 2948 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 93, column: 1, offset: 2950 },
            end: { line: 93, column: 43, offset: 2992 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 93, column: 43, offset: 2992 },
            end: { line: 93, column: 48, offset: 2997 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 93, column: 48, offset: 2997 },
            end: { line: 93, column: 72, offset: 3021 }
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
                start: { line: 93, column: 73, offset: 3022 },
                end: { line: 93, column: 80, offset: 3029 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 72, offset: 3021 },
            end: { line: 93, column: 144, offset: 3093 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 93, column: 144, offset: 3093 },
            end: { line: 93, column: 176, offset: 3125 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 93, column: 176, offset: 3125 },
            end: { line: 93, column: 193, offset: 3142 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 93, column: 193, offset: 3142 },
            end: { line: 93, column: 204, offset: 3153 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 93, column: 204, offset: 3153 },
            end: { line: 93, column: 213, offset: 3162 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 93, column: 213, offset: 3162 },
            end: { line: 93, column: 221, offset: 3170 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 93, column: 221, offset: 3170 },
            end: { line: 93, column: 247, offset: 3196 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 93, column: 247, offset: 3196 },
            end: { line: 93, column: 256, offset: 3205 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 93, column: 256, offset: 3205 },
            end: { line: 93, column: 289, offset: 3238 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 93, column: 289, offset: 3238 },
            end: { line: 93, column: 306, offset: 3255 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 93, column: 306, offset: 3255 },
            end: { line: 93, column: 340, offset: 3289 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 93, column: 340, offset: 3289 },
            end: { line: 93, column: 352, offset: 3301 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 93, column: 352, offset: 3301 },
            end: { line: 93, column: 413, offset: 3362 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 93, column: 413, offset: 3362 },
            end: { line: 93, column: 414, offset: 3363 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 2950 },
        end: { line: 93, column: 414, offset: 3363 }
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
            start: { line: 95, column: 3, offset: 3367 },
            end: { line: 95, column: 15, offset: 3379 }
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3365 },
        end: { line: 95, column: 15, offset: 3379 }
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
                start: { line: 96, column: 3, offset: 3382 },
                end: { line: 96, column: 52, offset: 3431 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 3380 },
            end: { line: 96, column: 54, offset: 3433 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 96, column: 54, offset: 3433 },
            end: { line: 96, column: 185, offset: 3564 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3380 },
        end: { line: 96, column: 185, offset: 3564 }
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
                    start: { line: 98, column: 3, offset: 3568 },
                    end: { line: 98, column: 26, offset: 3591 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 98, column: 26, offset: 3591 },
                    end: { line: 98, column: 37, offset: 3602 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 98, column: 37, offset: 3602 },
                    end: { line: 98, column: 40, offset: 3605 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 98, column: 40, offset: 3605 },
                    end: { line: 98, column: 63, offset: 3628 }
                  }
                }
              ],
              position: {
                start: { line: 98, column: 3, offset: 3568 },
                end: { line: 98, column: 63, offset: 3628 }
              }
            }
          ],
          position: {
            start: { line: 98, column: 1, offset: 3566 },
            end: { line: 98, column: 63, offset: 3628 }
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
                    start: { line: 99, column: 3, offset: 3631 },
                    end: { line: 99, column: 16, offset: 3644 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 99, column: 16, offset: 3644 },
                    end: { line: 99, column: 24, offset: 3652 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 24, offset: 3652 },
                    end: { line: 99, column: 27, offset: 3655 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 99, column: 27, offset: 3655 },
                    end: { line: 99, column: 40, offset: 3668 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3631 },
                end: { line: 99, column: 40, offset: 3668 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3629 },
            end: { line: 99, column: 40, offset: 3668 }
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
                    start: { line: 100, column: 3, offset: 3671 },
                    end: { line: 100, column: 15, offset: 3683 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 100, column: 15, offset: 3683 },
                    end: { line: 100, column: 23, offset: 3691 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 23, offset: 3691 },
                    end: { line: 100, column: 26, offset: 3694 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 100, column: 26, offset: 3694 },
                    end: { line: 100, column: 38, offset: 3706 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3671 },
                end: { line: 100, column: 38, offset: 3706 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3669 },
            end: { line: 100, column: 38, offset: 3706 }
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
                    start: { line: 101, column: 3, offset: 3709 },
                    end: { line: 101, column: 16, offset: 3722 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 101, column: 16, offset: 3722 },
                    end: { line: 101, column: 20, offset: 3726 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 20, offset: 3726 },
                    end: { line: 101, column: 23, offset: 3729 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 101, column: 23, offset: 3729 },
                    end: { line: 101, column: 31, offset: 3737 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3709 },
                end: { line: 101, column: 31, offset: 3737 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3707 },
            end: { line: 101, column: 31, offset: 3737 }
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
                    start: { line: 102, column: 3, offset: 3740 },
                    end: { line: 102, column: 13, offset: 3750 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 102, column: 13, offset: 3750 },
                    end: { line: 102, column: 22, offset: 3759 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 22, offset: 3759 },
                    end: { line: 102, column: 25, offset: 3762 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 102, column: 25, offset: 3762 },
                    end: { line: 102, column: 35, offset: 3772 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3740 },
                end: { line: 102, column: 35, offset: 3772 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3738 },
            end: { line: 102, column: 35, offset: 3772 }
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
                    start: { line: 103, column: 3, offset: 3775 },
                    end: { line: 103, column: 17, offset: 3789 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 103, column: 17, offset: 3789 },
                    end: { line: 103, column: 24, offset: 3796 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 103, column: 24, offset: 3796 },
                    end: { line: 103, column: 27, offset: 3799 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 103, column: 27, offset: 3799 },
                    end: { line: 103, column: 37, offset: 3809 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 3, offset: 3775 },
                end: { line: 103, column: 37, offset: 3809 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 1, offset: 3773 },
            end: { line: 103, column: 37, offset: 3809 }
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
                    start: { line: 104, column: 3, offset: 3812 },
                    end: { line: 104, column: 14, offset: 3823 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 104, column: 14, offset: 3823 },
                    end: { line: 104, column: 21, offset: 3830 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 104, column: 21, offset: 3830 },
                    end: { line: 104, column: 24, offset: 3833 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 104, column: 24, offset: 3833 },
                    end: { line: 104, column: 34, offset: 3843 }
                  }
                }
              ],
              position: {
                start: { line: 104, column: 3, offset: 3812 },
                end: { line: 104, column: 34, offset: 3843 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3810 },
            end: { line: 104, column: 34, offset: 3843 }
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
                    start: { line: 105, column: 3, offset: 3846 },
                    end: { line: 105, column: 26, offset: 3869 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 105, column: 26, offset: 3869 },
                    end: { line: 105, column: 34, offset: 3877 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 105, column: 34, offset: 3877 },
                    end: { line: 105, column: 37, offset: 3880 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 105, column: 37, offset: 3880 },
                    end: { line: 105, column: 48, offset: 3891 }
                  }
                }
              ],
              position: {
                start: { line: 105, column: 3, offset: 3846 },
                end: { line: 105, column: 48, offset: 3891 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 1, offset: 3844 },
            end: { line: 105, column: 48, offset: 3891 }
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
                    start: { line: 106, column: 3, offset: 3894 },
                    end: { line: 106, column: 23, offset: 3914 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 106, column: 23, offset: 3914 },
                    end: { line: 106, column: 31, offset: 3922 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 106, column: 31, offset: 3922 },
                    end: { line: 106, column: 34, offset: 3925 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 106, column: 34, offset: 3925 },
                    end: { line: 106, column: 45, offset: 3936 }
                  }
                }
              ],
              position: {
                start: { line: 106, column: 3, offset: 3894 },
                end: { line: 106, column: 45, offset: 3936 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3892 },
            end: { line: 106, column: 45, offset: 3936 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 3566 },
        end: { line: 106, column: 45, offset: 3936 }
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
        start: { line: 108, column: 1, offset: 3938 },
        end: { line: 132, column: 4, offset: 4359 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 134, column: 1, offset: 4361 },
            end: { line: 134, column: 39, offset: 4399 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 134, column: 39, offset: 4399 },
            end: { line: 134, column: 44, offset: 4404 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 134, column: 44, offset: 4404 },
            end: { line: 134, column: 62, offset: 4422 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 134, column: 62, offset: 4422 },
            end: { line: 134, column: 74, offset: 4434 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 134, column: 74, offset: 4434 },
            end: { line: 134, column: 79, offset: 4439 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 134, column: 79, offset: 4439 },
            end: { line: 134, column: 83, offset: 4443 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 134, column: 83, offset: 4443 },
            end: { line: 134, column: 94, offset: 4454 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 4361 },
        end: { line: 134, column: 94, offset: 4454 }
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
            start: { line: 136, column: 3, offset: 4458 },
            end: { line: 136, column: 17, offset: 4472 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4456 },
        end: { line: 136, column: 17, offset: 4472 }
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
                start: { line: 137, column: 3, offset: 4475 },
                end: { line: 137, column: 37, offset: 4509 }
              }
            }
          ],
          position: {
            start: { line: 137, column: 1, offset: 4473 },
            end: { line: 137, column: 39, offset: 4511 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 137, column: 39, offset: 4511 },
            end: { line: 137, column: 50, offset: 4522 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 137, column: 50, offset: 4522 },
            end: { line: 137, column: 60, offset: 4532 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 137, column: 60, offset: 4532 },
            end: { line: 137, column: 163, offset: 4635 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 137, column: 163, offset: 4635 },
            end: { line: 137, column: 173, offset: 4645 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 137, column: 173, offset: 4645 },
            end: { line: 137, column: 259, offset: 4731 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4473 },
        end: { line: 137, column: 259, offset: 4731 }
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
        'myApp({}) // Error: userId is required but not found\n' +
        '\n' +
        'myApp({ userId: 1 }) // validated user 1',
      position: {
        start: { line: 139, column: 1, offset: 4733 },
        end: { line: 154, column: 4, offset: 5121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 156, column: 1, offset: 5123 },
            end: { line: 156, column: 36, offset: 5158 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 156, column: 36, offset: 5158 },
            end: { line: 156, column: 46, offset: 5168 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 156, column: 46, offset: 5168 },
            end: { line: 156, column: 89, offset: 5211 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 156, column: 89, offset: 5211 },
            end: { line: 156, column: 95, offset: 5217 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 156, column: 95, offset: 5217 },
            end: { line: 156, column: 127, offset: 5249 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 156, column: 127, offset: 5249 },
            end: { line: 156, column: 141, offset: 5263 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 156, column: 141, offset: 5263 },
            end: { line: 156, column: 183, offset: 5305 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 156, column: 183, offset: 5305 },
            end: { line: 156, column: 193, offset: 5315 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 156, column: 193, offset: 5315 },
            end: { line: 156, column: 203, offset: 5325 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 156, column: 203, offset: 5325 },
            end: { line: 156, column: 211, offset: 5333 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 156, column: 211, offset: 5333 },
            end: { line: 156, column: 215, offset: 5337 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 156, column: 215, offset: 5337 },
            end: { line: 156, column: 221, offset: 5343 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 156, column: 221, offset: 5343 },
            end: { line: 156, column: 235, offset: 5357 }
          }
        }
      ],
      position: {
        start: { line: 156, column: 1, offset: 5123 },
        end: { line: 156, column: 235, offset: 5357 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico in a project (",
          position: {
            start: { line: 158, column: 1, offset: 5359 },
            end: { line: 158, column: 99, offset: 5457 }
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
                start: { line: 158, column: 100, offset: 5458 },
                end: { line: 158, column: 112, offset: 5470 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 99, offset: 5457 },
            end: { line: 158, column: 129, offset: 5487 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 158, column: 129, offset: 5487 },
            end: { line: 158, column: 151, offset: 5509 }
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
                start: { line: 158, column: 152, offset: 5510 },
                end: { line: 158, column: 156, offset: 5514 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 151, offset: 5509 },
            end: { line: 158, column: 164, offset: 5522 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 158, column: 164, offset: 5522 },
            end: { line: 158, column: 165, offset: 5523 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 5359 },
        end: { line: 158, column: 165, offset: 5523 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 159, column: 1, offset: 5524 }
  }
}