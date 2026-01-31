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
          value: ' functions to any Rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 37, column: 37, offset: 748 },
            end: { line: 37, column: 189, offset: 900 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 37, column: 189, offset: 900 },
            end: { line: 37, column: 202, offset: 913 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 37, column: 202, offset: 913 },
            end: { line: 37, column: 206, offset: 917 }
          }
        },
        {
          type: 'inlineCode',
          value: 'array.map',
          position: {
            start: { line: 37, column: 206, offset: 917 },
            end: { line: 37, column: 217, offset: 928 }
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 37, column: 217, offset: 928 },
            end: { line: 37, column: 255, offset: 966 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/rubico-a-synchrnous-functional-syntax-motivation-20hf',
          children: [
            {
              type: 'text',
              value: 'blog post',
              position: {
                start: { line: 37, column: 256, offset: 967 },
                end: { line: 37, column: 265, offset: 976 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 255, offset: 966 },
            end: { line: 37, column: 346, offset: 1057 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 37, column: 346, offset: 1057 },
            end: { line: 37, column: 347, offset: 1058 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 712 },
        end: { line: 37, column: 347, offset: 1058 }
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
        start: { line: 39, column: 1, offset: 1060 },
        end: { line: 47, column: 4, offset: 1250 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 49, column: 1, offset: 1252 },
            end: { line: 49, column: 11, offset: 1262 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 49, column: 11, offset: 1262 },
            end: { line: 49, column: 16, offset: 1267 }
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 49, column: 16, offset: 1267 },
            end: { line: 49, column: 52, offset: 1303 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 49, column: 52, offset: 1303 },
            end: { line: 49, column: 59, offset: 1310 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 49, column: 59, offset: 1310 },
            end: { line: 49, column: 144, offset: 1395 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1252 },
        end: { line: 49, column: 144, offset: 1395 }
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
            start: { line: 51, column: 3, offset: 1399 },
            end: { line: 51, column: 14, offset: 1410 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1397 },
        end: { line: 51, column: 14, offset: 1410 }
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
                start: { line: 52, column: 3, offset: 1413 },
                end: { line: 52, column: 33, offset: 1443 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 1, offset: 1411 },
            end: { line: 52, column: 35, offset: 1445 }
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - Rubico gives you the tools to make this as simple and stress-free as possible.",
          position: {
            start: { line: 52, column: 35, offset: 1445 },
            end: { line: 52, column: 261, offset: 1671 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1411 },
        end: { line: 52, column: 261, offset: 1671 }
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
        start: { line: 54, column: 1, offset: 1673 },
        end: { line: 74, column: 4, offset: 2108 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 76, column: 1, offset: 2110 },
            end: { line: 76, column: 5, offset: 2114 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 76, column: 5, offset: 2114 },
            end: { line: 76, column: 10, offset: 2119 }
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 76, column: 10, offset: 2119 },
            end: { line: 76, column: 46, offset: 2155 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 76, column: 46, offset: 2155 },
            end: { line: 76, column: 63, offset: 2172 }
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes an identity operation and another pipeline into an object ',
          position: {
            start: { line: 76, column: 63, offset: 2172 },
            end: { line: 76, column: 179, offset: 2288 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 76, column: 179, offset: 2288 },
            end: { line: 76, column: 206, offset: 2315 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 76, column: 206, offset: 2315 },
            end: { line: 76, column: 251, offset: 2360 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 76, column: 251, offset: 2360 },
            end: { line: 76, column: 258, offset: 2367 }
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 76, column: 258, offset: 2367 },
            end: { line: 76, column: 275, offset: 2384 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 76, column: 275, offset: 2384 },
            end: { line: 76, column: 279, offset: 2388 }
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 76, column: 279, offset: 2388 },
            end: { line: 76, column: 383, offset: 2492 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2110 },
        end: { line: 76, column: 383, offset: 2492 }
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
            start: { line: 78, column: 3, offset: 2496 },
            end: { line: 78, column: 15, offset: 2508 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2494 },
        end: { line: 78, column: 15, offset: 2508 }
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
                start: { line: 79, column: 3, offset: 2511 },
                end: { line: 79, column: 38, offset: 2546 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 1, offset: 2509 },
            end: { line: 79, column: 40, offset: 2548 }
          }
        },
        {
          type: 'text',
          value: '. All Rubico methods support data types beyond arrays including generators, async generators, strings, sets, maps, binary, and plain objects where sensible.',
          position: {
            start: { line: 79, column: 40, offset: 2548 },
            end: { line: 79, column: 196, offset: 2704 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2509 },
        end: { line: 79, column: 196, offset: 2704 }
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
        start: { line: 81, column: 1, offset: 2706 },
        end: { line: 103, column: 4, offset: 3238 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, the Rubico operator ',
          position: {
            start: { line: 105, column: 1, offset: 3240 },
            end: { line: 105, column: 43, offset: 3282 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 105, column: 43, offset: 3282 },
            end: { line: 105, column: 48, offset: 3287 }
          }
        },
        {
          type: 'text',
          value: ' acts on a multitude of ',
          position: {
            start: { line: 105, column: 48, offset: 3287 },
            end: { line: 105, column: 72, offset: 3311 }
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
                start: { line: 105, column: 73, offset: 3312 },
                end: { line: 105, column: 80, offset: 3319 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 72, offset: 3311 },
            end: { line: 105, column: 144, offset: 3383 }
          }
        },
        {
          type: 'text',
          value: ' data types, including an array ',
          position: {
            start: { line: 105, column: 144, offset: 3383 },
            end: { line: 105, column: 176, offset: 3415 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 105, column: 176, offset: 3415 },
            end: { line: 105, column: 193, offset: 3432 }
          }
        },
        {
          type: 'text',
          value: ', a string ',
          position: {
            start: { line: 105, column: 193, offset: 3432 },
            end: { line: 105, column: 204, offset: 3443 }
          }
        },
        {
          type: 'inlineCode',
          value: "'12345'",
          position: {
            start: { line: 105, column: 204, offset: 3443 },
            end: { line: 105, column: 213, offset: 3452 }
          }
        },
        {
          type: 'text',
          value: ', a set ',
          position: {
            start: { line: 105, column: 213, offset: 3452 },
            end: { line: 105, column: 221, offset: 3460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Set([1, 2, 3, 4, 5])',
          position: {
            start: { line: 105, column: 221, offset: 3460 },
            end: { line: 105, column: 247, offset: 3486 }
          }
        },
        {
          type: 'text',
          value: ', binary ',
          position: {
            start: { line: 105, column: 247, offset: 3486 },
            end: { line: 105, column: 256, offset: 3495 }
          }
        },
        {
          type: 'inlineCode',
          value: 'new Uint8Array([1, 2, 3, 4, 5])',
          position: {
            start: { line: 105, column: 256, offset: 3495 },
            end: { line: 105, column: 289, offset: 3528 }
          }
        },
        {
          type: 'text',
          value: ', a plain object ',
          position: {
            start: { line: 105, column: 289, offset: 3528 },
            end: { line: 105, column: 306, offset: 3545 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ a: 1, b: 2, c: 3, d: 4, e: 5 }',
          position: {
            start: { line: 105, column: 306, offset: 3545 },
            end: { line: 105, column: 340, offset: 3579 }
          }
        },
        {
          type: 'text',
          value: ', and a map ',
          position: {
            start: { line: 105, column: 340, offset: 3579 },
            end: { line: 105, column: 352, offset: 3591 }
          }
        },
        {
          type: 'inlineCode',
          value: "new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])",
          position: {
            start: { line: 105, column: 352, offset: 3591 },
            end: { line: 105, column: 413, offset: 3652 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 105, column: 413, offset: 3652 },
            end: { line: 105, column: 414, offset: 3653 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3240 },
        end: { line: 105, column: 414, offset: 3653 }
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
            start: { line: 107, column: 3, offset: 3657 },
            end: { line: 107, column: 15, offset: 3669 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 3655 },
        end: { line: 107, column: 15, offset: 3669 }
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
                start: { line: 108, column: 3, offset: 3672 },
                end: { line: 108, column: 52, offset: 3721 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3670 },
            end: { line: 108, column: 54, offset: 3723 }
          }
        },
        {
          type: 'text',
          value: " by composing predicates with Rubico's logical operators. Below depicts vanilla JavaScript operators and their Rubico analogs.",
          position: {
            start: { line: 108, column: 54, offset: 3723 },
            end: { line: 108, column: 180, offset: 3849 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3670 },
        end: { line: 108, column: 180, offset: 3849 }
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
                    start: { line: 110, column: 3, offset: 3853 },
                    end: { line: 110, column: 26, offset: 3876 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 110, column: 26, offset: 3876 },
                    end: { line: 110, column: 37, offset: 3887 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 37, offset: 3887 },
                    end: { line: 110, column: 40, offset: 3890 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 110, column: 40, offset: 3890 },
                    end: { line: 110, column: 63, offset: 3913 }
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3853 },
                end: { line: 110, column: 63, offset: 3913 }
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3851 },
            end: { line: 110, column: 63, offset: 3913 }
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
                    start: { line: 111, column: 3, offset: 3916 },
                    end: { line: 111, column: 16, offset: 3929 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 111, column: 16, offset: 3929 },
                    end: { line: 111, column: 24, offset: 3937 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 24, offset: 3937 },
                    end: { line: 111, column: 27, offset: 3940 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 111, column: 27, offset: 3940 },
                    end: { line: 111, column: 40, offset: 3953 }
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3916 },
                end: { line: 111, column: 40, offset: 3953 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3914 },
            end: { line: 111, column: 40, offset: 3953 }
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
                    start: { line: 112, column: 3, offset: 3956 },
                    end: { line: 112, column: 15, offset: 3968 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 112, column: 15, offset: 3968 },
                    end: { line: 112, column: 23, offset: 3976 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 23, offset: 3976 },
                    end: { line: 112, column: 26, offset: 3979 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 112, column: 26, offset: 3979 },
                    end: { line: 112, column: 38, offset: 3991 }
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3956 },
                end: { line: 112, column: 38, offset: 3991 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3954 },
            end: { line: 112, column: 38, offset: 3991 }
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
                    start: { line: 113, column: 3, offset: 3994 },
                    end: { line: 113, column: 16, offset: 4007 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 113, column: 16, offset: 4007 },
                    end: { line: 113, column: 20, offset: 4011 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 20, offset: 4011 },
                    end: { line: 113, column: 23, offset: 4014 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 113, column: 23, offset: 4014 },
                    end: { line: 113, column: 31, offset: 4022 }
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3994 },
                end: { line: 113, column: 31, offset: 4022 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3992 },
            end: { line: 113, column: 31, offset: 4022 }
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
                    start: { line: 114, column: 3, offset: 4025 },
                    end: { line: 114, column: 13, offset: 4035 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 114, column: 13, offset: 4035 },
                    end: { line: 114, column: 22, offset: 4044 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 22, offset: 4044 },
                    end: { line: 114, column: 25, offset: 4047 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 114, column: 25, offset: 4047 },
                    end: { line: 114, column: 35, offset: 4057 }
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 4025 },
                end: { line: 114, column: 35, offset: 4057 }
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 4023 },
            end: { line: 114, column: 35, offset: 4057 }
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
                    start: { line: 115, column: 3, offset: 4060 },
                    end: { line: 115, column: 17, offset: 4074 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 115, column: 17, offset: 4074 },
                    end: { line: 115, column: 24, offset: 4081 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 24, offset: 4081 },
                    end: { line: 115, column: 27, offset: 4084 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 115, column: 27, offset: 4084 },
                    end: { line: 115, column: 37, offset: 4094 }
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 4060 },
                end: { line: 115, column: 37, offset: 4094 }
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 4058 },
            end: { line: 115, column: 37, offset: 4094 }
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
                    start: { line: 116, column: 3, offset: 4097 },
                    end: { line: 116, column: 14, offset: 4108 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 116, column: 14, offset: 4108 },
                    end: { line: 116, column: 21, offset: 4115 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 21, offset: 4115 },
                    end: { line: 116, column: 24, offset: 4118 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 116, column: 24, offset: 4118 },
                    end: { line: 116, column: 34, offset: 4128 }
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 4097 },
                end: { line: 116, column: 34, offset: 4128 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 4095 },
            end: { line: 116, column: 34, offset: 4128 }
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
                    start: { line: 117, column: 3, offset: 4131 },
                    end: { line: 117, column: 26, offset: 4154 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 117, column: 26, offset: 4154 },
                    end: { line: 117, column: 34, offset: 4162 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 117, column: 34, offset: 4162 },
                    end: { line: 117, column: 37, offset: 4165 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 117, column: 37, offset: 4165 },
                    end: { line: 117, column: 48, offset: 4176 }
                  }
                }
              ],
              position: {
                start: { line: 117, column: 3, offset: 4131 },
                end: { line: 117, column: 48, offset: 4176 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 1, offset: 4129 },
            end: { line: 117, column: 48, offset: 4176 }
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
                    start: { line: 118, column: 3, offset: 4179 },
                    end: { line: 118, column: 23, offset: 4199 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 118, column: 23, offset: 4199 },
                    end: { line: 118, column: 31, offset: 4207 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 118, column: 31, offset: 4207 },
                    end: { line: 118, column: 34, offset: 4210 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 118, column: 34, offset: 4210 },
                    end: { line: 118, column: 45, offset: 4221 }
                  }
                }
              ],
              position: {
                start: { line: 118, column: 3, offset: 4179 },
                end: { line: 118, column: 45, offset: 4221 }
              }
            }
          ],
          position: {
            start: { line: 118, column: 1, offset: 4177 },
            end: { line: 118, column: 45, offset: 4221 }
          }
        }
      ],
      position: {
        start: { line: 110, column: 1, offset: 3851 },
        end: { line: 118, column: 45, offset: 4221 }
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
        start: { line: 120, column: 1, offset: 4223 },
        end: { line: 144, column: 4, offset: 4644 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above example shows a declarative ',
          position: {
            start: { line: 146, column: 1, offset: 4646 },
            end: { line: 146, column: 39, offset: 4684 }
          }
        },
        {
          type: 'inlineCode',
          value: 'cli',
          position: {
            start: { line: 146, column: 39, offset: 4684 },
            end: { line: 146, column: 44, offset: 4689 }
          }
        },
        {
          type: 'text',
          value: ' using the Rubico ',
          position: {
            start: { line: 146, column: 44, offset: 4689 },
            end: { line: 146, column: 62, offset: 4707 }
          }
        },
        {
          type: 'inlineCode',
          value: 'switchCase',
          position: {
            start: { line: 146, column: 62, offset: 4707 },
            end: { line: 146, column: 74, offset: 4719 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 146, column: 74, offset: 4719 },
            end: { line: 146, column: 79, offset: 4724 }
          }
        },
        {
          type: 'inlineCode',
          value: 'or',
          position: {
            start: { line: 146, column: 79, offset: 4724 },
            end: { line: 146, column: 83, offset: 4728 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 146, column: 83, offset: 4728 },
            end: { line: 146, column: 94, offset: 4739 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4646 },
        end: { line: 146, column: 94, offset: 4739 }
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
            start: { line: 148, column: 3, offset: 4743 },
            end: { line: 148, column: 17, offset: 4757 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 4741 },
        end: { line: 148, column: 17, offset: 4757 }
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
              value: 'Confidently throw errors',
              position: {
                start: { line: 149, column: 3, offset: 4760 },
                end: { line: 149, column: 27, offset: 4784 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 1, offset: 4758 },
            end: { line: 149, column: 29, offset: 4786 }
          }
        },
        {
          type: 'text',
          value: ". Rubico's ",
          position: {
            start: { line: 149, column: 29, offset: 4786 },
            end: { line: 149, column: 40, offset: 4797 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 149, column: 40, offset: 4797 },
            end: { line: 149, column: 50, offset: 4807 }
          }
        },
        {
          type: 'text',
          value: ' operator catches both thrown errors and rejected Promises. Wrap your application pipeline in a ',
          position: {
            start: { line: 149, column: 50, offset: 4807 },
            end: { line: 149, column: 146, offset: 4903 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 149, column: 146, offset: 4903 },
            end: { line: 149, column: 156, offset: 4913 }
          }
        },
        {
          type: 'text',
          value: ' and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 149, column: 156, offset: 4913 },
            end: { line: 149, column: 233, offset: 4990 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 4758 },
        end: { line: 149, column: 233, offset: 4990 }
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
        start: { line: 151, column: 1, offset: 4992 },
        end: { line: 168, column: 4, offset: 5406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example above depicts a Rubico ',
          position: {
            start: { line: 170, column: 1, offset: 5408 },
            end: { line: 170, column: 36, offset: 5443 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 170, column: 36, offset: 5443 },
            end: { line: 170, column: 46, offset: 5453 }
          }
        },
        {
          type: 'text',
          value: ' operator wrapping a pipeline created by a ',
          position: {
            start: { line: 170, column: 46, offset: 5453 },
            end: { line: 170, column: 89, offset: 5496 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 170, column: 89, offset: 5496 },
            end: { line: 170, column: 95, offset: 5502 }
          }
        },
        {
          type: 'text',
          value: ' operator. The catcher function ',
          position: {
            start: { line: 170, column: 95, offset: 5502 },
            end: { line: 170, column: 127, offset: 5534 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 170, column: 127, offset: 5534 },
            end: { line: 170, column: 141, offset: 5548 }
          }
        },
        {
          type: 'text',
          value: ' catches the error thrown by the function ',
          position: {
            start: { line: 170, column: 141, offset: 5548 },
            end: { line: 170, column: 183, offset: 5590 }
          }
        },
        {
          type: 'inlineCode',
          value: 'validate',
          position: {
            start: { line: 170, column: 183, offset: 5590 },
            end: { line: 170, column: 193, offset: 5600 }
          }
        },
        {
          type: 'text',
          value: ' when the ',
          position: {
            start: { line: 170, column: 193, offset: 5600 },
            end: { line: 170, column: 203, offset: 5610 }
          }
        },
        {
          type: 'inlineCode',
          value: 'userId',
          position: {
            start: { line: 170, column: 203, offset: 5610 },
            end: { line: 170, column: 211, offset: 5618 }
          }
        },
        {
          type: 'text',
          value: ' of ',
          position: {
            start: { line: 170, column: 211, offset: 5618 },
            end: { line: 170, column: 215, offset: 5622 }
          }
        },
        {
          type: 'inlineCode',
          value: 'data',
          position: {
            start: { line: 170, column: 215, offset: 5622 },
            end: { line: 170, column: 221, offset: 5628 }
          }
        },
        {
          type: 'text',
          value: ' is nullish.',
          position: {
            start: { line: 170, column: 221, offset: 5628 },
            end: { line: 170, column: 233, offset: 5640 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 5408 },
        end: { line: 170, column: 233, offset: 5640 }
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
            start: { line: 172, column: 3, offset: 5644 },
            end: { line: 172, column: 14, offset: 5655 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 5642 },
        end: { line: 172, column: 14, offset: 5655 }
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
                start: { line: 173, column: 3, offset: 5658 },
                end: { line: 173, column: 44, offset: 5699 }
              }
            }
          ],
          position: {
            start: { line: 173, column: 1, offset: 5656 },
            end: { line: 173, column: 46, offset: 5701 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with Rubico's ",
          position: {
            start: { line: 173, column: 46, offset: 5701 },
            end: { line: 173, column: 127, offset: 5782 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 173, column: 127, offset: 5782 },
            end: { line: 173, column: 139, offset: 5794 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 173, column: 139, offset: 5794 },
            end: { line: 173, column: 151, offset: 5806 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 173, column: 151, offset: 5806 },
            end: { line: 173, column: 160, offset: 5815 }
          }
        },
        {
          type: 'text',
          value: ' operator. Read more on transducers ',
          position: {
            start: { line: 173, column: 160, offset: 5815 },
            end: { line: 173, column: 196, offset: 5851 }
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
                start: { line: 173, column: 197, offset: 5852 },
                end: { line: 173, column: 201, offset: 5856 }
              }
            }
          ],
          position: {
            start: { line: 173, column: 196, offset: 5851 },
            end: { line: 173, column: 244, offset: 5899 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 173, column: 244, offset: 5899 },
            end: { line: 173, column: 245, offset: 5900 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 5656 },
        end: { line: 173, column: 245, offset: 5900 }
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
        start: { line: 175, column: 1, offset: 5902 },
        end: { line: 200, column: 4, offset: 6564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a complex transformation made simple by the Rubico ',
          position: {
            start: { line: 202, column: 1, offset: 6566 },
            end: { line: 202, column: 65, offset: 6630 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 202, column: 65, offset: 6630 },
            end: { line: 202, column: 76, offset: 6641 }
          }
        },
        {
          type: 'text',
          value: ' operator. The operator transforms the generator of decimal segments created by ',
          position: {
            start: { line: 202, column: 76, offset: 6641 },
            end: { line: 202, column: 156, offset: 6721 }
          }
        },
        {
          type: 'inlineCode',
          value: 'generateSegments',
          position: {
            start: { line: 202, column: 156, offset: 6721 },
            end: { line: 202, column: 174, offset: 6739 }
          }
        },
        {
          type: 'text',
          value: ' into the string ',
          position: {
            start: { line: 202, column: 174, offset: 6739 },
            end: { line: 202, column: 191, offset: 6756 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notes',
          position: {
            start: { line: 202, column: 191, offset: 6756 },
            end: { line: 202, column: 198, offset: 6763 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 202, column: 198, offset: 6763 },
            end: { line: 202, column: 199, offset: 6764 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 6566 },
        end: { line: 202, column: 199, offset: 6764 }
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
            start: { line: 204, column: 3, offset: 6768 },
            end: { line: 204, column: 13, offset: 6778 }
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 6766 },
        end: { line: 204, column: 13, offset: 6778 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico (",
          position: {
            start: { line: 206, column: 1, offset: 6780 },
            end: { line: 206, column: 86, offset: 6865 }
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
                start: { line: 206, column: 87, offset: 6866 },
                end: { line: 206, column: 99, offset: 6878 }
              }
            }
          ],
          position: {
            start: { line: 206, column: 86, offset: 6865 },
            end: { line: 206, column: 116, offset: 6895 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 206, column: 116, offset: 6895 },
            end: { line: 206, column: 138, offset: 6917 }
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
                start: { line: 206, column: 139, offset: 6918 },
                end: { line: 206, column: 143, offset: 6922 }
              }
            }
          ],
          position: {
            start: { line: 206, column: 138, offset: 6917 },
            end: { line: 206, column: 151, offset: 6930 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 206, column: 151, offset: 6930 },
            end: { line: 206, column: 152, offset: 6931 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6780 },
        end: { line: 206, column: 152, offset: 6931 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 207, column: 1, offset: 6932 }
  }
}