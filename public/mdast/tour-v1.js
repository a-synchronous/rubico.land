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
                        start: { line: 23, column: 6, offset: 615 },
                        end: { line: 23, column: 17, offset: 626 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 5, offset: 614 },
                    end: { line: 23, column: 32, offset: 641 }
                  }
                }
              ],
              position: {
                start: { line: 23, column: 5, offset: 614 },
                end: { line: 23, column: 32, offset: 641 }
              }
            }
          ],
          position: {
            start: { line: 23, column: 2, offset: 611 },
            end: { line: 23, column: 32, offset: 641 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 2, offset: 440 },
        end: { line: 23, column: 32, offset: 641 }
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
            start: { line: 25, column: 3, offset: 645 },
            end: { line: 25, column: 15, offset: 657 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 643 },
        end: { line: 25, column: 15, offset: 657 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pass ',
          position: {
            start: { line: 26, column: 1, offset: 658 },
            end: { line: 26, column: 6, offset: 663 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'synchronous or asynchronous',
              position: {
                start: { line: 26, column: 8, offset: 665 },
                end: { line: 26, column: 35, offset: 692 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 6, offset: 663 },
            end: { line: 26, column: 37, offset: 694 }
          }
        },
        {
          type: 'text',
          value: ' functions to any Rubico operator - any and all promises will be resolved. Execute functions concurrently without having to call ',
          position: {
            start: { line: 26, column: 37, offset: 694 },
            end: { line: 26, column: 166, offset: 823 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 166, offset: 823 },
            end: { line: 26, column: 179, offset: 836 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 26, column: 179, offset: 836 },
            end: { line: 26, column: 183, offset: 840 }
          }
        },
        {
          type: 'inlineCode',
          value: 'array.map',
          position: {
            start: { line: 26, column: 183, offset: 840 },
            end: { line: 26, column: 194, offset: 851 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 194, offset: 851 },
            end: { line: 26, column: 195, offset: 852 }
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 658 },
        end: { line: 26, column: 195, offset: 852 }
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
        start: { line: 28, column: 1, offset: 854 },
        end: { line: 36, column: 4, offset: 1044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 38, column: 1, offset: 1046 },
            end: { line: 38, column: 11, offset: 1056 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 38, column: 11, offset: 1056 },
            end: { line: 38, column: 16, offset: 1061 }
          }
        },
        {
          type: 'text',
          value: ' button to make five concurrent requests using ',
          position: {
            start: { line: 38, column: 16, offset: 1061 },
            end: { line: 38, column: 63, offset: 1108 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 38, column: 63, offset: 1108 },
            end: { line: 38, column: 70, offset: 1115 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console.',
          position: {
            start: { line: 38, column: 70, offset: 1115 },
            end: { line: 38, column: 137, offset: 1182 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1046 },
        end: { line: 38, column: 137, offset: 1182 }
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
            start: { line: 40, column: 3, offset: 1186 },
            end: { line: 40, column: 14, offset: 1197 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1184 },
        end: { line: 40, column: 14, offset: 1197 }
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
                start: { line: 41, column: 3, offset: 1200 },
                end: { line: 41, column: 33, offset: 1230 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 1, offset: 1198 },
            end: { line: 41, column: 35, offset: 1232 }
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality by composing a new function - Rubico gives you the tools to make this as simple and stress-free as possible.",
          position: {
            start: { line: 41, column: 35, offset: 1232 },
            end: { line: 41, column: 239, offset: 1436 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1198 },
        end: { line: 41, column: 239, offset: 1436 }
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
        start: { line: 43, column: 1, offset: 1438 },
        end: { line: 63, column: 4, offset: 1874 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The code above executes the pipeline ',
          position: {
            start: { line: 65, column: 1, offset: 1876 },
            end: { line: 65, column: 38, offset: 1913 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 65, column: 38, offset: 1913 },
            end: { line: 65, column: 55, offset: 1930 }
          }
        },
        {
          type: 'text',
          value: ', logging a number out to the console and composing an identity operation and another Rubico pipeline into the object ',
          position: {
            start: { line: 65, column: 55, offset: 1930 },
            end: { line: 65, column: 173, offset: 2048 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 65, column: 173, offset: 2048 },
            end: { line: 65, column: 200, offset: 2075 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 65, column: 200, offset: 2075 },
            end: { line: 65, column: 245, offset: 2120 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 65, column: 245, offset: 2120 },
            end: { line: 65, column: 252, offset: 2127 }
          }
        },
        {
          type: 'text',
          value: ' operator and placeholder ',
          position: {
            start: { line: 65, column: 252, offset: 2127 },
            end: { line: 65, column: 278, offset: 2153 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 65, column: 278, offset: 2153 },
            end: { line: 65, column: 282, offset: 2157 }
          }
        },
        {
          type: 'text',
          value: '; use these to create a partially applied function that suits any API.',
          position: {
            start: { line: 65, column: 282, offset: 2157 },
            end: { line: 65, column: 352, offset: 2227 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 1876 },
        end: { line: 65, column: 352, offset: 2227 }
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
            start: { line: 67, column: 3, offset: 2231 },
            end: { line: 67, column: 15, offset: 2243 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2229 },
        end: { line: 67, column: 15, offset: 2243 }
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
                start: { line: 68, column: 3, offset: 2246 },
                end: { line: 68, column: 38, offset: 2281 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2244 },
            end: { line: 68, column: 40, offset: 2283 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays where sensible, including generators, async generators, strings, sets, maps, binary data, and plain objects.',
          position: {
            start: { line: 68, column: 40, offset: 2283 },
            end: { line: 68, column: 202, offset: 2445 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2244 },
        end: { line: 68, column: 202, offset: 2445 }
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
        start: { line: 70, column: 1, offset: 2447 },
        end: { line: 92, column: 4, offset: 2980 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 94, column: 1, offset: 2982 },
            end: { line: 94, column: 43, offset: 3024 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 94, column: 43, offset: 3024 },
            end: { line: 94, column: 48, offset: 3029 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 94, column: 48, offset: 3029 },
            end: { line: 94, column: 72, offset: 3053 }
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
                start: { line: 94, column: 73, offset: 3054 },
                end: { line: 94, column: 80, offset: 3061 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 72, offset: 3053 },
            end: { line: 94, column: 144, offset: 3125 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 94, column: 144, offset: 3125 },
            end: { line: 94, column: 176, offset: 3157 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 94, column: 176, offset: 3157 },
            end: { line: 94, column: 193, offset: 3174 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 94, column: 193, offset: 3174 },
            end: { line: 94, column: 204, offset: 3185 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 94, column: 204, offset: 3185 },
            end: { line: 94, column: 213, offset: 3194 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 94, column: 213, offset: 3194 },
            end: { line: 94, column: 221, offset: 3202 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 94, column: 221, offset: 3202 },
            end: { line: 94, column: 247, offset: 3228 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 94, column: 247, offset: 3228 },
            end: { line: 94, column: 256, offset: 3237 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 94, column: 256, offset: 3237 },
            end: { line: 94, column: 289, offset: 3270 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 94, column: 289, offset: 3270 },
            end: { line: 94, column: 306, offset: 3287 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 94, column: 306, offset: 3287 },
            end: { line: 94, column: 340, offset: 3321 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 94, column: 340, offset: 3321 },
            end: { line: 94, column: 352, offset: 3333 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 94, column: 352, offset: 3333 },
            end: { line: 94, column: 413, offset: 3394 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 94, column: 413, offset: 3394 },
            end: { line: 94, column: 414, offset: 3395 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 2982 },
        end: { line: 94, column: 414, offset: 3395 }
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
            start: { line: 96, column: 3, offset: 3399 },
            end: { line: 96, column: 15, offset: 3411 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3397 },
        end: { line: 96, column: 15, offset: 3411 }
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
                start: { line: 97, column: 3, offset: 3414 },
                end: { line: 97, column: 52, offset: 3463 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3412 },
            end: { line: 97, column: 54, offset: 3465 }
          }
        },
        {
          type: 'text',
          value: ". Compose predicate functions with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 97, column: 54, offset: 3465 },
            end: { line: 97, column: 185, offset: 3596 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3412 },
        end: { line: 97, column: 185, offset: 3596 }
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
                    start: { line: 99, column: 3, offset: 3600 },
                    end: { line: 99, column: 26, offset: 3623 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 99, column: 26, offset: 3623 },
                    end: { line: 99, column: 37, offset: 3634 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 37, offset: 3634 },
                    end: { line: 99, column: 40, offset: 3637 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 99, column: 40, offset: 3637 },
                    end: { line: 99, column: 63, offset: 3660 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3600 },
                end: { line: 99, column: 63, offset: 3660 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3598 },
            end: { line: 99, column: 63, offset: 3660 }
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
                    start: { line: 100, column: 3, offset: 3663 },
                    end: { line: 100, column: 16, offset: 3676 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 100, column: 16, offset: 3676 },
                    end: { line: 100, column: 24, offset: 3684 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 24, offset: 3684 },
                    end: { line: 100, column: 27, offset: 3687 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 100, column: 27, offset: 3687 },
                    end: { line: 100, column: 40, offset: 3700 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3663 },
                end: { line: 100, column: 40, offset: 3700 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3661 },
            end: { line: 100, column: 40, offset: 3700 }
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
                    start: { line: 101, column: 3, offset: 3703 },
                    end: { line: 101, column: 15, offset: 3715 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 101, column: 15, offset: 3715 },
                    end: { line: 101, column: 23, offset: 3723 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 23, offset: 3723 },
                    end: { line: 101, column: 26, offset: 3726 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 101, column: 26, offset: 3726 },
                    end: { line: 101, column: 38, offset: 3738 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3703 },
                end: { line: 101, column: 38, offset: 3738 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3701 },
            end: { line: 101, column: 38, offset: 3738 }
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
                    start: { line: 102, column: 3, offset: 3741 },
                    end: { line: 102, column: 16, offset: 3754 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 102, column: 16, offset: 3754 },
                    end: { line: 102, column: 20, offset: 3758 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 20, offset: 3758 },
                    end: { line: 102, column: 23, offset: 3761 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 102, column: 23, offset: 3761 },
                    end: { line: 102, column: 31, offset: 3769 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3741 },
                end: { line: 102, column: 31, offset: 3769 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3739 },
            end: { line: 102, column: 31, offset: 3769 }
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
                    start: { line: 103, column: 3, offset: 3772 },
                    end: { line: 103, column: 13, offset: 3782 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 103, column: 13, offset: 3782 },
                    end: { line: 103, column: 22, offset: 3791 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 103, column: 22, offset: 3791 },
                    end: { line: 103, column: 25, offset: 3794 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 103, column: 25, offset: 3794 },
                    end: { line: 103, column: 35, offset: 3804 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 3, offset: 3772 },
                end: { line: 103, column: 35, offset: 3804 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 1, offset: 3770 },
            end: { line: 103, column: 35, offset: 3804 }
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
                    start: { line: 104, column: 3, offset: 3807 },
                    end: { line: 104, column: 17, offset: 3821 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 104, column: 17, offset: 3821 },
                    end: { line: 104, column: 24, offset: 3828 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 104, column: 24, offset: 3828 },
                    end: { line: 104, column: 27, offset: 3831 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 104, column: 27, offset: 3831 },
                    end: { line: 104, column: 37, offset: 3841 }
                  }
                }
              ],
              position: {
                start: { line: 104, column: 3, offset: 3807 },
                end: { line: 104, column: 37, offset: 3841 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3805 },
            end: { line: 104, column: 37, offset: 3841 }
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
                    start: { line: 105, column: 3, offset: 3844 },
                    end: { line: 105, column: 14, offset: 3855 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 105, column: 14, offset: 3855 },
                    end: { line: 105, column: 21, offset: 3862 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 105, column: 21, offset: 3862 },
                    end: { line: 105, column: 24, offset: 3865 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 105, column: 24, offset: 3865 },
                    end: { line: 105, column: 34, offset: 3875 }
                  }
                }
              ],
              position: {
                start: { line: 105, column: 3, offset: 3844 },
                end: { line: 105, column: 34, offset: 3875 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 1, offset: 3842 },
            end: { line: 105, column: 34, offset: 3875 }
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
                    start: { line: 106, column: 3, offset: 3878 },
                    end: { line: 106, column: 26, offset: 3901 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 106, column: 26, offset: 3901 },
                    end: { line: 106, column: 34, offset: 3909 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 106, column: 34, offset: 3909 },
                    end: { line: 106, column: 37, offset: 3912 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 106, column: 37, offset: 3912 },
                    end: { line: 106, column: 48, offset: 3923 }
                  }
                }
              ],
              position: {
                start: { line: 106, column: 3, offset: 3878 },
                end: { line: 106, column: 48, offset: 3923 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3876 },
            end: { line: 106, column: 48, offset: 3923 }
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
                    start: { line: 107, column: 3, offset: 3926 },
                    end: { line: 107, column: 23, offset: 3946 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 107, column: 23, offset: 3946 },
                    end: { line: 107, column: 31, offset: 3954 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 107, column: 31, offset: 3954 },
                    end: { line: 107, column: 34, offset: 3957 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 107, column: 34, offset: 3957 },
                    end: { line: 107, column: 45, offset: 3968 }
                  }
                }
              ],
              position: {
                start: { line: 107, column: 3, offset: 3926 },
                end: { line: 107, column: 45, offset: 3968 }
              }
            }
          ],
          position: {
            start: { line: 107, column: 1, offset: 3924 },
            end: { line: 107, column: 45, offset: 3968 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3598 },
        end: { line: 107, column: 45, offset: 3968 }
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
        start: { line: 109, column: 1, offset: 3970 },
        end: { line: 133, column: 4, offset: 4391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 135, column: 1, offset: 4393 },
            end: { line: 135, column: 39, offset: 4431 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 135, column: 39, offset: 4431 },
            end: { line: 135, column: 44, offset: 4436 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 135, column: 44, offset: 4436 },
            end: { line: 135, column: 62, offset: 4454 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 135, column: 62, offset: 4454 },
            end: { line: 135, column: 74, offset: 4466 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 135, column: 74, offset: 4466 },
            end: { line: 135, column: 79, offset: 4471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 135, column: 79, offset: 4471 },
            end: { line: 135, column: 83, offset: 4475 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 135, column: 83, offset: 4475 },
            end: { line: 135, column: 94, offset: 4486 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 4393 },
        end: { line: 135, column: 94, offset: 4486 }
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
            start: { line: 137, column: 3, offset: 4490 },
            end: { line: 137, column: 17, offset: 4504 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4488 },
        end: { line: 137, column: 17, offset: 4504 }
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
                start: { line: 138, column: 3, offset: 4507 },
                end: { line: 138, column: 37, offset: 4541 }
              }
            }
          ],
          position: {
            start: { line: 138, column: 1, offset: 4505 },
            end: { line: 138, column: 39, offset: 4543 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 138, column: 39, offset: 4543 },
            end: { line: 138, column: 50, offset: 4554 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 138, column: 50, offset: 4554 },
            end: { line: 138, column: 60, offset: 4564 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a Rubico ',
          position: {
            start: { line: 138, column: 60, offset: 4564 },
            end: { line: 138, column: 163, offset: 4667 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 138, column: 163, offset: 4667 },
            end: { line: 138, column: 173, offset: 4677 }
          }
        },
        {
          type: 'text',
          value: ' operator and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 138, column: 173, offset: 4677 },
            end: { line: 138, column: 259, offset: 4763 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4505 },
        end: { line: 138, column: 259, offset: 4763 }
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
        start: { line: 140, column: 1, offset: 4765 },
        end: { line: 155, column: 4, offset: 5153 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 157, column: 1, offset: 5155 },
            end: { line: 157, column: 36, offset: 5190 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 157, column: 36, offset: 5190 },
            end: { line: 157, column: 46, offset: 5200 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 157, column: 46, offset: 5200 },
            end: { line: 157, column: 89, offset: 5243 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 157, column: 89, offset: 5243 },
            end: { line: 157, column: 95, offset: 5249 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 157, column: 95, offset: 5249 },
            end: { line: 157, column: 127, offset: 5281 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 157, column: 127, offset: 5281 },
            end: { line: 157, column: 141, offset: 5295 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 157, column: 141, offset: 5295 },
            end: { line: 157, column: 183, offset: 5337 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 157, column: 183, offset: 5337 },
            end: { line: 157, column: 193, offset: 5347 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 157, column: 193, offset: 5347 },
            end: { line: 157, column: 203, offset: 5357 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 157, column: 203, offset: 5357 },
            end: { line: 157, column: 211, offset: 5365 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 157, column: 211, offset: 5365 },
            end: { line: 157, column: 215, offset: 5369 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 157, column: 215, offset: 5369 },
            end: { line: 157, column: 221, offset: 5375 }
          }
        },
        {
          type: 'text',
          value: ' is undefined.',
          position: {
            start: { line: 157, column: 221, offset: 5375 },
            end: { line: 157, column: 235, offset: 5389 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 5155 },
        end: { line: 157, column: 235, offset: 5389 }
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
            start: { line: 159, column: 3, offset: 5393 },
            end: { line: 159, column: 14, offset: 5404 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 5391 },
        end: { line: 159, column: 14, offset: 5404 }
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
                start: { line: 160, column: 3, offset: 5407 },
                end: { line: 160, column: 44, offset: 5448 }
              }
            }
          ],
          position: {
            start: { line: 160, column: 1, offset: 5405 },
            end: { line: 160, column: 46, offset: 5450 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with Rubico's transducer functionality built into its data transformation functions. Read more on Rubico's transducers ",
          position: {
            start: { line: 160, column: 46, offset: 5450 },
            end: { line: 160, column: 232, offset: 5636 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/blog/transducers-crash-course-v1',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 160, column: 233, offset: 5637 },
                end: { line: 160, column: 237, offset: 5641 }
              }
            }
          ],
          position: {
            start: { line: 160, column: 232, offset: 5636 },
            end: { line: 160, column: 273, offset: 5677 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 160, column: 273, offset: 5677 },
            end: { line: 160, column: 274, offset: 5678 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 5405 },
        end: { line: 160, column: 274, offset: 5678 }
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
        '  // the pipe of maps is a transducer\n' +
        '  transform(pipe([\n' +
        '    map(toBinaryInt),\n' +
        '    map(String.fromCharCode),\n' +
        "  ]), ''),\n" +
        '])\n' +
        '\n' +
        "const decimals = '16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963'\n" +
        'const notes = decimalsToNotes(decimals)\n' +
        '\n' +
        'console.log(notes) // CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC',
      position: {
        start: { line: 162, column: 1, offset: 5680 },
        end: { line: 188, column: 4, offset: 6357 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a complex transformation made simple by the Rubico ',
          position: {
            start: { line: 190, column: 1, offset: 6359 },
            end: { line: 190, column: 65, offset: 6423 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 190, column: 65, offset: 6423 },
            end: { line: 190, column: 76, offset: 6434 }
          }
        },
        {
          type: 'text',
          value: ' operator. The operator transforms the generator of decimal segments created by ',
          position: {
            start: { line: 190, column: 76, offset: 6434 },
            end: { line: 190, column: 156, offset: 6514 }
          }
        },
        {
          type: 'inlineCode',
          value: 'generateSegments',
          position: {
            start: { line: 190, column: 156, offset: 6514 },
            end: { line: 190, column: 174, offset: 6532 }
          }
        },
        {
          type: 'text',
          value: ' into the string ',
          position: {
            start: { line: 190, column: 174, offset: 6532 },
            end: { line: 190, column: 191, offset: 6549 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notes',
          position: {
            start: { line: 190, column: 191, offset: 6549 },
            end: { line: 190, column: 198, offset: 6556 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 190, column: 198, offset: 6556 },
            end: { line: 190, column: 199, offset: 6557 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 6359 },
        end: { line: 190, column: 199, offset: 6557 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico in a project (",
          position: {
            start: { line: 192, column: 1, offset: 6559 },
            end: { line: 192, column: 99, offset: 6657 }
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
                start: { line: 192, column: 100, offset: 6658 },
                end: { line: 192, column: 112, offset: 6670 }
              }
            }
          ],
          position: {
            start: { line: 192, column: 99, offset: 6657 },
            end: { line: 192, column: 129, offset: 6687 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 192, column: 129, offset: 6687 },
            end: { line: 192, column: 151, offset: 6709 }
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
                start: { line: 192, column: 152, offset: 6710 },
                end: { line: 192, column: 156, offset: 6714 }
              }
            }
          ],
          position: {
            start: { line: 192, column: 151, offset: 6709 },
            end: { line: 192, column: 164, offset: 6722 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 192, column: 164, offset: 6722 },
            end: { line: 192, column: 165, offset: 6723 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 6559 },
        end: { line: 192, column: 165, offset: 6723 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 193, column: 1, offset: 6724 }
  }
}