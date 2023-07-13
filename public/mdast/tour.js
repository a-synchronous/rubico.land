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
        '} = rubico // available globally',
      position: {
        start: { line: 3, column: 1, offset: 179 },
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
                      value: '[a]synchrony',
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
          value: '[a]synchrony',
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
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'Stop worrying about async',
              position: {
                start: { line: 37, column: 3, offset: 714 },
                end: { line: 37, column: 28, offset: 739 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 1, offset: 712 },
            end: { line: 37, column: 30, offset: 741 }
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 37, column: 30, offset: 741 },
            end: { line: 37, column: 216, offset: 927 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 37, column: 216, offset: 927 },
            end: { line: 37, column: 229, offset: 940 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 37, column: 229, offset: 940 },
            end: { line: 37, column: 233, offset: 944 }
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 37, column: 233, offset: 944 },
            end: { line: 37, column: 253, offset: 964 }
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 37, column: 253, offset: 964 },
            end: { line: 37, column: 291, offset: 1002 }
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
                start: { line: 37, column: 292, offset: 1003 },
                end: { line: 37, column: 301, offset: 1012 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 291, offset: 1002 },
            end: { line: 37, column: 382, offset: 1093 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 37, column: 382, offset: 1093 },
            end: { line: 37, column: 383, offset: 1094 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 712 },
        end: { line: 37, column: 383, offset: 1094 }
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
        start: { line: 39, column: 1, offset: 1096 },
        end: { line: 47, column: 4, offset: 1286 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 49, column: 1, offset: 1288 },
            end: { line: 49, column: 11, offset: 1298 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 49, column: 11, offset: 1298 },
            end: { line: 49, column: 16, offset: 1303 }
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 49, column: 16, offset: 1303 },
            end: { line: 49, column: 52, offset: 1339 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 49, column: 52, offset: 1339 },
            end: { line: 49, column: 59, offset: 1346 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 49, column: 59, offset: 1346 },
            end: { line: 49, column: 144, offset: 1431 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1288 },
        end: { line: 49, column: 144, offset: 1431 }
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
            start: { line: 51, column: 3, offset: 1435 },
            end: { line: 51, column: 14, offset: 1446 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1433 },
        end: { line: 51, column: 14, offset: 1446 }
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
                start: { line: 52, column: 3, offset: 1449 },
                end: { line: 52, column: 33, offset: 1479 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 1, offset: 1447 },
            end: { line: 52, column: 35, offset: 1481 }
          }
        },
        {
          type: 'text',
          value: ". Use rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 52, column: 35, offset: 1481 },
            end: { line: 52, column: 258, offset: 1704 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1447 },
        end: { line: 52, column: 258, offset: 1704 }
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
        start: { line: 54, column: 1, offset: 1706 },
        end: { line: 74, column: 4, offset: 2141 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 76, column: 1, offset: 2143 },
            end: { line: 76, column: 5, offset: 2147 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 76, column: 5, offset: 2147 },
            end: { line: 76, column: 10, offset: 2152 }
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 76, column: 10, offset: 2152 },
            end: { line: 76, column: 46, offset: 2188 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 76, column: 46, offset: 2188 },
            end: { line: 76, column: 63, offset: 2205 }
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 76, column: 63, offset: 2205 },
            end: { line: 76, column: 180, offset: 2322 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 76, column: 180, offset: 2322 },
            end: { line: 76, column: 207, offset: 2349 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces rubico's ",
          position: {
            start: { line: 76, column: 207, offset: 2349 },
            end: { line: 76, column: 252, offset: 2394 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 76, column: 252, offset: 2394 },
            end: { line: 76, column: 259, offset: 2401 }
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 76, column: 259, offset: 2401 },
            end: { line: 76, column: 276, offset: 2418 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 76, column: 276, offset: 2418 },
            end: { line: 76, column: 280, offset: 2422 }
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 76, column: 280, offset: 2422 },
            end: { line: 76, column: 384, offset: 2526 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2143 },
        end: { line: 76, column: 384, offset: 2526 }
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
            start: { line: 78, column: 3, offset: 2530 },
            end: { line: 78, column: 15, offset: 2542 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2528 },
        end: { line: 78, column: 15, offset: 2542 }
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
                start: { line: 79, column: 3, offset: 2545 },
                end: { line: 79, column: 38, offset: 2580 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 1, offset: 2543 },
            end: { line: 79, column: 40, offset: 2582 }
          }
        },
        {
          type: 'text',
          value: '. Any rubico method should support data types beyond arrays such as async iterables, strings, sets, maps, binary arrays, and object values.',
          position: {
            start: { line: 79, column: 40, offset: 2582 },
            end: { line: 79, column: 179, offset: 2721 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2543 },
        end: { line: 79, column: 179, offset: 2721 }
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
        'forEach(iterables, pipe([\n' +
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
        start: { line: 81, column: 1, offset: 2723 },
        end: { line: 103, column: 4, offset: 3257 }
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
            start: { line: 105, column: 3, offset: 3261 },
            end: { line: 105, column: 15, offset: 3273 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3259 },
        end: { line: 105, column: 15, offset: 3273 }
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
                start: { line: 106, column: 3, offset: 3276 },
                end: { line: 106, column: 52, offset: 3325 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3274 },
            end: { line: 106, column: 54, offset: 3327 }
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below depicts vanilla JavaScript operators and their rubico analogs.",
          position: {
            start: { line: 106, column: 54, offset: 3327 },
            end: { line: 106, column: 180, offset: 3453 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3274 },
        end: { line: 106, column: 180, offset: 3453 }
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
                    start: { line: 108, column: 3, offset: 3457 },
                    end: { line: 108, column: 26, offset: 3480 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 108, column: 26, offset: 3480 },
                    end: { line: 108, column: 37, offset: 3491 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 108, column: 37, offset: 3491 },
                    end: { line: 108, column: 40, offset: 3494 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 108, column: 40, offset: 3494 },
                    end: { line: 108, column: 63, offset: 3517 }
                  }
                }
              ],
              position: {
                start: { line: 108, column: 3, offset: 3457 },
                end: { line: 108, column: 63, offset: 3517 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3455 },
            end: { line: 108, column: 63, offset: 3517 }
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
                    start: { line: 109, column: 3, offset: 3520 },
                    end: { line: 109, column: 16, offset: 3533 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 109, column: 16, offset: 3533 },
                    end: { line: 109, column: 24, offset: 3541 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 109, column: 24, offset: 3541 },
                    end: { line: 109, column: 27, offset: 3544 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 109, column: 27, offset: 3544 },
                    end: { line: 109, column: 40, offset: 3557 }
                  }
                }
              ],
              position: {
                start: { line: 109, column: 3, offset: 3520 },
                end: { line: 109, column: 40, offset: 3557 }
              }
            }
          ],
          position: {
            start: { line: 109, column: 1, offset: 3518 },
            end: { line: 109, column: 40, offset: 3557 }
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
                    start: { line: 110, column: 3, offset: 3560 },
                    end: { line: 110, column: 15, offset: 3572 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 110, column: 15, offset: 3572 },
                    end: { line: 110, column: 23, offset: 3580 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 23, offset: 3580 },
                    end: { line: 110, column: 26, offset: 3583 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 110, column: 26, offset: 3583 },
                    end: { line: 110, column: 38, offset: 3595 }
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3560 },
                end: { line: 110, column: 38, offset: 3595 }
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3558 },
            end: { line: 110, column: 38, offset: 3595 }
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
                    start: { line: 111, column: 3, offset: 3598 },
                    end: { line: 111, column: 16, offset: 3611 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 111, column: 16, offset: 3611 },
                    end: { line: 111, column: 20, offset: 3615 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 20, offset: 3615 },
                    end: { line: 111, column: 23, offset: 3618 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 111, column: 23, offset: 3618 },
                    end: { line: 111, column: 31, offset: 3626 }
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3598 },
                end: { line: 111, column: 31, offset: 3626 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3596 },
            end: { line: 111, column: 31, offset: 3626 }
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
                    start: { line: 112, column: 3, offset: 3629 },
                    end: { line: 112, column: 13, offset: 3639 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 112, column: 13, offset: 3639 },
                    end: { line: 112, column: 22, offset: 3648 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 22, offset: 3648 },
                    end: { line: 112, column: 25, offset: 3651 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 112, column: 25, offset: 3651 },
                    end: { line: 112, column: 35, offset: 3661 }
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3629 },
                end: { line: 112, column: 35, offset: 3661 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3627 },
            end: { line: 112, column: 35, offset: 3661 }
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
                    start: { line: 113, column: 3, offset: 3664 },
                    end: { line: 113, column: 17, offset: 3678 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 113, column: 17, offset: 3678 },
                    end: { line: 113, column: 24, offset: 3685 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 24, offset: 3685 },
                    end: { line: 113, column: 27, offset: 3688 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 113, column: 27, offset: 3688 },
                    end: { line: 113, column: 37, offset: 3698 }
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3664 },
                end: { line: 113, column: 37, offset: 3698 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3662 },
            end: { line: 113, column: 37, offset: 3698 }
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
                    start: { line: 114, column: 3, offset: 3701 },
                    end: { line: 114, column: 14, offset: 3712 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 114, column: 14, offset: 3712 },
                    end: { line: 114, column: 21, offset: 3719 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 21, offset: 3719 },
                    end: { line: 114, column: 24, offset: 3722 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 114, column: 24, offset: 3722 },
                    end: { line: 114, column: 34, offset: 3732 }
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3701 },
                end: { line: 114, column: 34, offset: 3732 }
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3699 },
            end: { line: 114, column: 34, offset: 3732 }
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
                    start: { line: 115, column: 3, offset: 3735 },
                    end: { line: 115, column: 26, offset: 3758 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 115, column: 26, offset: 3758 },
                    end: { line: 115, column: 34, offset: 3766 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 34, offset: 3766 },
                    end: { line: 115, column: 37, offset: 3769 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 115, column: 37, offset: 3769 },
                    end: { line: 115, column: 48, offset: 3780 }
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3735 },
                end: { line: 115, column: 48, offset: 3780 }
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3733 },
            end: { line: 115, column: 48, offset: 3780 }
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
                    start: { line: 116, column: 3, offset: 3783 },
                    end: { line: 116, column: 23, offset: 3803 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 116, column: 23, offset: 3803 },
                    end: { line: 116, column: 31, offset: 3811 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 31, offset: 3811 },
                    end: { line: 116, column: 34, offset: 3814 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 116, column: 34, offset: 3814 },
                    end: { line: 116, column: 45, offset: 3825 }
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 3783 },
                end: { line: 116, column: 45, offset: 3825 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 3781 },
            end: { line: 116, column: 45, offset: 3825 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3455 },
        end: { line: 116, column: 45, offset: 3825 }
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
        start: { line: 118, column: 1, offset: 3827 },
        end: { line: 142, column: 4, offset: 4248 }
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
            start: { line: 144, column: 3, offset: 4252 },
            end: { line: 144, column: 17, offset: 4266 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 4250 },
        end: { line: 144, column: 17, offset: 4266 }
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
                start: { line: 145, column: 3, offset: 4269 },
                end: { line: 145, column: 27, offset: 4293 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 1, offset: 4267 },
            end: { line: 145, column: 29, offset: 4295 }
          }
        },
        {
          type: 'text',
          value: ". rubico's ",
          position: {
            start: { line: 145, column: 29, offset: 4295 },
            end: { line: 145, column: 40, offset: 4306 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 145, column: 40, offset: 4306 },
            end: { line: 145, column: 50, offset: 4316 }
          }
        },
        {
          type: 'text',
          value: ' catches both errors and rejected Promises. Wrap your application pipeline in a ',
          position: {
            start: { line: 145, column: 50, offset: 4316 },
            end: { line: 145, column: 130, offset: 4396 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 145, column: 130, offset: 4396 },
            end: { line: 145, column: 140, offset: 4406 }
          }
        },
        {
          type: 'text',
          value: ' and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 145, column: 140, offset: 4406 },
            end: { line: 145, column: 217, offset: 4483 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4267 },
        end: { line: 145, column: 217, offset: 4483 }
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
        "    console.log('doing stuff with userId', data.userId)\n" +
        '  },\n' +
        ']), error => console.error(error))\n' +
        '\n' +
        'myApp({}) // Error: userId is required but not found\n' +
        '\n' +
        'myApp({ userId: 1 }) // doing stuff with userId 1',
      position: {
        start: { line: 147, column: 1, offset: 4485 },
        end: { line: 162, column: 4, offset: 4891 }
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
            start: { line: 164, column: 3, offset: 4895 },
            end: { line: 164, column: 14, offset: 4906 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 4893 },
        end: { line: 164, column: 14, offset: 4906 }
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
                start: { line: 165, column: 3, offset: 4909 },
                end: { line: 165, column: 44, offset: 4950 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 1, offset: 4907 },
            end: { line: 165, column: 46, offset: 4952 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with rubico's ",
          position: {
            start: { line: 165, column: 46, offset: 4952 },
            end: { line: 165, column: 127, offset: 5033 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 165, column: 127, offset: 5033 },
            end: { line: 165, column: 139, offset: 5045 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 165, column: 139, offset: 5045 },
            end: { line: 165, column: 151, offset: 5057 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 165, column: 151, offset: 5057 },
            end: { line: 165, column: 160, offset: 5066 }
          }
        },
        {
          type: 'text',
          value: " method. Read more on rubico's transducers ",
          position: {
            start: { line: 165, column: 160, offset: 5066 },
            end: { line: 165, column: 203, offset: 5109 }
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
                start: { line: 165, column: 204, offset: 5110 },
                end: { line: 165, column: 208, offset: 5114 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 203, offset: 5109 },
            end: { line: 165, column: 244, offset: 5150 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 165, column: 244, offset: 5150 },
            end: { line: 165, column: 245, offset: 5151 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 4907 },
        end: { line: 165, column: 245, offset: 5151 }
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
        '  transform(compose([\n' +
        '    Transducer.map(toBinaryInt),\n' +
        '    Transducer.map(String.fromCharCode),\n' +
        "  ]), ''),\n" +
        '])\n' +
        '\n' +
        "const decimals = '16791573288892525934609440079317541905554393653557736896280802239551592289061061348368963'\n" +
        'const notes = decimalsToNotes(decimals)\n' +
        '\n' +
        'console.log(notes) // CCGGAAGFFEEDDCGGFFEEDGGFFEEDCCGGAAGFFEEDDC',
      position: {
        start: { line: 167, column: 1, offset: 5153 },
        end: { line: 192, column: 4, offset: 5817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with rubico in a project (",
          position: {
            start: { line: 194, column: 1, offset: 5819 },
            end: { line: 194, column: 99, offset: 5917 }
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
                start: { line: 194, column: 100, offset: 5918 },
                end: { line: 194, column: 112, offset: 5930 }
              }
            }
          ],
          position: {
            start: { line: 194, column: 99, offset: 5917 },
            end: { line: 194, column: 129, offset: 5947 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 194, column: 129, offset: 5947 },
            end: { line: 194, column: 151, offset: 5969 }
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
                start: { line: 194, column: 152, offset: 5970 },
                end: { line: 194, column: 156, offset: 5974 }
              }
            }
          ],
          position: {
            start: { line: 194, column: 151, offset: 5969 },
            end: { line: 194, column: 164, offset: 5982 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 194, column: 164, offset: 5982 },
            end: { line: 194, column: 165, offset: 5983 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 5819 },
        end: { line: 194, column: 165, offset: 5983 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 195, column: 1, offset: 5984 }
  }
}