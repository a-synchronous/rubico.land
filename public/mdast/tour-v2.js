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
        '} = rubico',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 25, column: 4, offset: 448 }
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
            start: { line: 27, column: 3, offset: 452 },
            end: { line: 27, column: 20, offset: 469 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 450 },
        end: { line: 27, column: 20, offset: 469 }
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
                        start: { line: 29, column: 6, offset: 476 },
                        end: { line: 29, column: 18, offset: 488 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 5, offset: 475 },
                    end: { line: 29, column: 33, offset: 503 }
                  }
                }
              ],
              position: {
                start: { line: 29, column: 5, offset: 475 },
                end: { line: 29, column: 33, offset: 503 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 2, offset: 472 },
            end: { line: 29, column: 33, offset: 503 }
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
                        start: { line: 30, column: 6, offset: 509 },
                        end: { line: 30, column: 17, offset: 520 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 5, offset: 508 },
                    end: { line: 30, column: 32, offset: 535 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 5, offset: 508 },
                end: { line: 30, column: 32, offset: 535 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 505 },
            end: { line: 30, column: 32, offset: 535 }
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
                        start: { line: 31, column: 6, offset: 541 },
                        end: { line: 31, column: 18, offset: 553 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 5, offset: 540 },
                    end: { line: 31, column: 34, offset: 569 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 5, offset: 540 },
                end: { line: 31, column: 34, offset: 569 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 537 },
            end: { line: 31, column: 34, offset: 569 }
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
                        start: { line: 32, column: 6, offset: 575 },
                        end: { line: 32, column: 18, offset: 587 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 5, offset: 574 },
                    end: { line: 32, column: 34, offset: 603 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 5, offset: 574 },
                end: { line: 32, column: 34, offset: 603 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 571 },
            end: { line: 32, column: 34, offset: 603 }
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
                        start: { line: 33, column: 6, offset: 609 },
                        end: { line: 33, column: 20, offset: 623 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 5, offset: 608 },
                    end: { line: 33, column: 38, offset: 641 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 5, offset: 608 },
                end: { line: 33, column: 38, offset: 641 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 605 },
            end: { line: 33, column: 38, offset: 641 }
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
                        start: { line: 34, column: 6, offset: 647 },
                        end: { line: 34, column: 17, offset: 658 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 34, column: 5, offset: 646 },
                    end: { line: 34, column: 32, offset: 673 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 5, offset: 646 },
                end: { line: 34, column: 32, offset: 673 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 643 },
            end: { line: 34, column: 32, offset: 673 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 2, offset: 472 },
        end: { line: 34, column: 32, offset: 673 }
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
            start: { line: 36, column: 3, offset: 677 },
            end: { line: 36, column: 15, offset: 689 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 675 },
        end: { line: 36, column: 15, offset: 689 }
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
                start: { line: 37, column: 3, offset: 692 },
                end: { line: 37, column: 28, offset: 717 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 1, offset: 690 },
            end: { line: 37, column: 30, offset: 719 }
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 37, column: 30, offset: 719 },
            end: { line: 37, column: 216, offset: 905 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 37, column: 216, offset: 905 },
            end: { line: 37, column: 229, offset: 918 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 37, column: 229, offset: 918 },
            end: { line: 37, column: 233, offset: 922 }
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 37, column: 233, offset: 922 },
            end: { line: 37, column: 253, offset: 942 }
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 37, column: 253, offset: 942 },
            end: { line: 37, column: 291, offset: 980 }
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
                start: { line: 37, column: 292, offset: 981 },
                end: { line: 37, column: 301, offset: 990 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 291, offset: 980 },
            end: { line: 37, column: 382, offset: 1071 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 37, column: 382, offset: 1071 },
            end: { line: 37, column: 383, offset: 1072 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 690 },
        end: { line: 37, column: 383, offset: 1072 }
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
        start: { line: 39, column: 1, offset: 1074 },
        end: { line: 47, column: 4, offset: 1264 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 49, column: 1, offset: 1266 },
            end: { line: 49, column: 11, offset: 1276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 49, column: 11, offset: 1276 },
            end: { line: 49, column: 16, offset: 1281 }
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 49, column: 16, offset: 1281 },
            end: { line: 49, column: 52, offset: 1317 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 49, column: 52, offset: 1317 },
            end: { line: 49, column: 59, offset: 1324 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 49, column: 59, offset: 1324 },
            end: { line: 49, column: 144, offset: 1409 }
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1266 },
        end: { line: 49, column: 144, offset: 1409 }
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
            start: { line: 51, column: 3, offset: 1413 },
            end: { line: 51, column: 14, offset: 1424 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1411 },
        end: { line: 51, column: 14, offset: 1424 }
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
                start: { line: 52, column: 3, offset: 1427 },
                end: { line: 52, column: 33, offset: 1457 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 1, offset: 1425 },
            end: { line: 52, column: 35, offset: 1459 }
          }
        },
        {
          type: 'text',
          value: ". Use rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 52, column: 35, offset: 1459 },
            end: { line: 52, column: 258, offset: 1682 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1425 },
        end: { line: 52, column: 258, offset: 1682 }
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
        start: { line: 54, column: 1, offset: 1684 },
        end: { line: 74, column: 4, offset: 2119 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 76, column: 1, offset: 2121 },
            end: { line: 76, column: 5, offset: 2125 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 76, column: 5, offset: 2125 },
            end: { line: 76, column: 10, offset: 2130 }
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 76, column: 10, offset: 2130 },
            end: { line: 76, column: 46, offset: 2166 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 76, column: 46, offset: 2166 },
            end: { line: 76, column: 63, offset: 2183 }
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 76, column: 63, offset: 2183 },
            end: { line: 76, column: 180, offset: 2300 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 76, column: 180, offset: 2300 },
            end: { line: 76, column: 207, offset: 2327 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces rubico's ",
          position: {
            start: { line: 76, column: 207, offset: 2327 },
            end: { line: 76, column: 252, offset: 2372 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 76, column: 252, offset: 2372 },
            end: { line: 76, column: 259, offset: 2379 }
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 76, column: 259, offset: 2379 },
            end: { line: 76, column: 276, offset: 2396 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 76, column: 276, offset: 2396 },
            end: { line: 76, column: 280, offset: 2400 }
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 76, column: 280, offset: 2400 },
            end: { line: 76, column: 384, offset: 2504 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2121 },
        end: { line: 76, column: 384, offset: 2504 }
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
            start: { line: 78, column: 3, offset: 2508 },
            end: { line: 78, column: 15, offset: 2520 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2506 },
        end: { line: 78, column: 15, offset: 2520 }
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
                start: { line: 79, column: 3, offset: 2523 },
                end: { line: 79, column: 38, offset: 2558 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 1, offset: 2521 },
            end: { line: 79, column: 40, offset: 2560 }
          }
        },
        {
          type: 'text',
          value: '. Any rubico method should support data types beyond arrays such as async iterables, strings, sets, maps, binary arrays, and object values.',
          position: {
            start: { line: 79, column: 40, offset: 2560 },
            end: { line: 79, column: 179, offset: 2699 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2521 },
        end: { line: 79, column: 179, offset: 2699 }
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
        start: { line: 81, column: 1, offset: 2701 },
        end: { line: 103, column: 4, offset: 3235 }
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
            start: { line: 105, column: 3, offset: 3239 },
            end: { line: 105, column: 15, offset: 3251 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3237 },
        end: { line: 105, column: 15, offset: 3251 }
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
                start: { line: 106, column: 3, offset: 3254 },
                end: { line: 106, column: 52, offset: 3303 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 1, offset: 3252 },
            end: { line: 106, column: 54, offset: 3305 }
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below depicts vanilla JavaScript operators and their rubico analogs.",
          position: {
            start: { line: 106, column: 54, offset: 3305 },
            end: { line: 106, column: 180, offset: 3431 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3252 },
        end: { line: 106, column: 180, offset: 3431 }
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
                    start: { line: 108, column: 3, offset: 3435 },
                    end: { line: 108, column: 26, offset: 3458 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 108, column: 26, offset: 3458 },
                    end: { line: 108, column: 37, offset: 3469 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 108, column: 37, offset: 3469 },
                    end: { line: 108, column: 40, offset: 3472 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 108, column: 40, offset: 3472 },
                    end: { line: 108, column: 63, offset: 3495 }
                  }
                }
              ],
              position: {
                start: { line: 108, column: 3, offset: 3435 },
                end: { line: 108, column: 63, offset: 3495 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 1, offset: 3433 },
            end: { line: 108, column: 63, offset: 3495 }
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
                    start: { line: 109, column: 3, offset: 3498 },
                    end: { line: 109, column: 16, offset: 3511 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 109, column: 16, offset: 3511 },
                    end: { line: 109, column: 24, offset: 3519 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 109, column: 24, offset: 3519 },
                    end: { line: 109, column: 27, offset: 3522 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 109, column: 27, offset: 3522 },
                    end: { line: 109, column: 40, offset: 3535 }
                  }
                }
              ],
              position: {
                start: { line: 109, column: 3, offset: 3498 },
                end: { line: 109, column: 40, offset: 3535 }
              }
            }
          ],
          position: {
            start: { line: 109, column: 1, offset: 3496 },
            end: { line: 109, column: 40, offset: 3535 }
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
                    start: { line: 110, column: 3, offset: 3538 },
                    end: { line: 110, column: 15, offset: 3550 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 110, column: 15, offset: 3550 },
                    end: { line: 110, column: 23, offset: 3558 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 110, column: 23, offset: 3558 },
                    end: { line: 110, column: 26, offset: 3561 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 110, column: 26, offset: 3561 },
                    end: { line: 110, column: 38, offset: 3573 }
                  }
                }
              ],
              position: {
                start: { line: 110, column: 3, offset: 3538 },
                end: { line: 110, column: 38, offset: 3573 }
              }
            }
          ],
          position: {
            start: { line: 110, column: 1, offset: 3536 },
            end: { line: 110, column: 38, offset: 3573 }
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
                    start: { line: 111, column: 3, offset: 3576 },
                    end: { line: 111, column: 16, offset: 3589 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 111, column: 16, offset: 3589 },
                    end: { line: 111, column: 20, offset: 3593 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 111, column: 20, offset: 3593 },
                    end: { line: 111, column: 23, offset: 3596 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 111, column: 23, offset: 3596 },
                    end: { line: 111, column: 31, offset: 3604 }
                  }
                }
              ],
              position: {
                start: { line: 111, column: 3, offset: 3576 },
                end: { line: 111, column: 31, offset: 3604 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 1, offset: 3574 },
            end: { line: 111, column: 31, offset: 3604 }
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
                    start: { line: 112, column: 3, offset: 3607 },
                    end: { line: 112, column: 13, offset: 3617 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 112, column: 13, offset: 3617 },
                    end: { line: 112, column: 22, offset: 3626 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 112, column: 22, offset: 3626 },
                    end: { line: 112, column: 25, offset: 3629 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 112, column: 25, offset: 3629 },
                    end: { line: 112, column: 35, offset: 3639 }
                  }
                }
              ],
              position: {
                start: { line: 112, column: 3, offset: 3607 },
                end: { line: 112, column: 35, offset: 3639 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 1, offset: 3605 },
            end: { line: 112, column: 35, offset: 3639 }
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
                    start: { line: 113, column: 3, offset: 3642 },
                    end: { line: 113, column: 17, offset: 3656 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 113, column: 17, offset: 3656 },
                    end: { line: 113, column: 24, offset: 3663 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 113, column: 24, offset: 3663 },
                    end: { line: 113, column: 27, offset: 3666 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 113, column: 27, offset: 3666 },
                    end: { line: 113, column: 37, offset: 3676 }
                  }
                }
              ],
              position: {
                start: { line: 113, column: 3, offset: 3642 },
                end: { line: 113, column: 37, offset: 3676 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 1, offset: 3640 },
            end: { line: 113, column: 37, offset: 3676 }
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
                    start: { line: 114, column: 3, offset: 3679 },
                    end: { line: 114, column: 14, offset: 3690 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 114, column: 14, offset: 3690 },
                    end: { line: 114, column: 21, offset: 3697 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 114, column: 21, offset: 3697 },
                    end: { line: 114, column: 24, offset: 3700 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 114, column: 24, offset: 3700 },
                    end: { line: 114, column: 34, offset: 3710 }
                  }
                }
              ],
              position: {
                start: { line: 114, column: 3, offset: 3679 },
                end: { line: 114, column: 34, offset: 3710 }
              }
            }
          ],
          position: {
            start: { line: 114, column: 1, offset: 3677 },
            end: { line: 114, column: 34, offset: 3710 }
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
                    start: { line: 115, column: 3, offset: 3713 },
                    end: { line: 115, column: 26, offset: 3736 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 115, column: 26, offset: 3736 },
                    end: { line: 115, column: 34, offset: 3744 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 115, column: 34, offset: 3744 },
                    end: { line: 115, column: 37, offset: 3747 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 115, column: 37, offset: 3747 },
                    end: { line: 115, column: 48, offset: 3758 }
                  }
                }
              ],
              position: {
                start: { line: 115, column: 3, offset: 3713 },
                end: { line: 115, column: 48, offset: 3758 }
              }
            }
          ],
          position: {
            start: { line: 115, column: 1, offset: 3711 },
            end: { line: 115, column: 48, offset: 3758 }
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
                    start: { line: 116, column: 3, offset: 3761 },
                    end: { line: 116, column: 23, offset: 3781 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 116, column: 23, offset: 3781 },
                    end: { line: 116, column: 31, offset: 3789 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 116, column: 31, offset: 3789 },
                    end: { line: 116, column: 34, offset: 3792 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 116, column: 34, offset: 3792 },
                    end: { line: 116, column: 45, offset: 3803 }
                  }
                }
              ],
              position: {
                start: { line: 116, column: 3, offset: 3761 },
                end: { line: 116, column: 45, offset: 3803 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 1, offset: 3759 },
            end: { line: 116, column: 45, offset: 3803 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3433 },
        end: { line: 116, column: 45, offset: 3803 }
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
        start: { line: 118, column: 1, offset: 3805 },
        end: { line: 142, column: 4, offset: 4226 }
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
            start: { line: 144, column: 3, offset: 4230 },
            end: { line: 144, column: 17, offset: 4244 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 4228 },
        end: { line: 144, column: 17, offset: 4244 }
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
                start: { line: 145, column: 3, offset: 4247 },
                end: { line: 145, column: 27, offset: 4271 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 1, offset: 4245 },
            end: { line: 145, column: 29, offset: 4273 }
          }
        },
        {
          type: 'text',
          value: ". rubico's ",
          position: {
            start: { line: 145, column: 29, offset: 4273 },
            end: { line: 145, column: 40, offset: 4284 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 145, column: 40, offset: 4284 },
            end: { line: 145, column: 50, offset: 4294 }
          }
        },
        {
          type: 'text',
          value: ' catches both errors and rejected Promises. Wrap your application pipeline in a ',
          position: {
            start: { line: 145, column: 50, offset: 4294 },
            end: { line: 145, column: 130, offset: 4374 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 145, column: 130, offset: 4374 },
            end: { line: 145, column: 140, offset: 4384 }
          }
        },
        {
          type: 'text',
          value: ' and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 145, column: 140, offset: 4384 },
            end: { line: 145, column: 217, offset: 4461 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4245 },
        end: { line: 145, column: 217, offset: 4461 }
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
        start: { line: 147, column: 1, offset: 4463 },
        end: { line: 162, column: 4, offset: 4869 }
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
            start: { line: 164, column: 3, offset: 4873 },
            end: { line: 164, column: 14, offset: 4884 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 4871 },
        end: { line: 164, column: 14, offset: 4884 }
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
                start: { line: 165, column: 3, offset: 4887 },
                end: { line: 165, column: 44, offset: 4928 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 1, offset: 4885 },
            end: { line: 165, column: 46, offset: 4930 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with rubico's ",
          position: {
            start: { line: 165, column: 46, offset: 4930 },
            end: { line: 165, column: 127, offset: 5011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Trasnducer',
          position: {
            start: { line: 165, column: 127, offset: 5011 },
            end: { line: 165, column: 139, offset: 5023 }
          }
        },
        {
          type: 'text',
          value: ' module and ',
          position: {
            start: { line: 165, column: 139, offset: 5023 },
            end: { line: 165, column: 151, offset: 5035 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 165, column: 151, offset: 5035 },
            end: { line: 165, column: 160, offset: 5044 }
          }
        },
        {
          type: 'text',
          value: " method. Read more on rubico's transducers ",
          position: {
            start: { line: 165, column: 160, offset: 5044 },
            end: { line: 165, column: 203, offset: 5087 }
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
                start: { line: 165, column: 204, offset: 5088 },
                end: { line: 165, column: 208, offset: 5092 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 203, offset: 5087 },
            end: { line: 165, column: 244, offset: 5128 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 165, column: 244, offset: 5128 },
            end: { line: 165, column: 245, offset: 5129 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 4885 },
        end: { line: 165, column: 245, offset: 5129 }
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
        start: { line: 167, column: 1, offset: 5131 },
        end: { line: 192, column: 4, offset: 5795 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with rubico in a project (",
          position: {
            start: { line: 194, column: 1, offset: 5797 },
            end: { line: 194, column: 99, offset: 5895 }
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
                start: { line: 194, column: 100, offset: 5896 },
                end: { line: 194, column: 112, offset: 5908 }
              }
            }
          ],
          position: {
            start: { line: 194, column: 99, offset: 5895 },
            end: { line: 194, column: 129, offset: 5925 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 194, column: 129, offset: 5925 },
            end: { line: 194, column: 151, offset: 5947 }
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
                start: { line: 194, column: 152, offset: 5948 },
                end: { line: 194, column: 156, offset: 5952 }
              }
            }
          ],
          position: {
            start: { line: 194, column: 151, offset: 5947 },
            end: { line: 194, column: 164, offset: 5960 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 194, column: 164, offset: 5960 },
            end: { line: 194, column: 165, offset: 5961 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 5797 },
        end: { line: 194, column: 165, offset: 5961 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 195, column: 1, offset: 5962 }
  }
}