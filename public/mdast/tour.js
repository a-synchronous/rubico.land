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
        '} = rubico // available globally',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 14, column: 4, offset: 438 },
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
          value: 'Table of Contents',
          position: {
            start: { line: 16, column: 3, offset: 442 },
            end: { line: 16, column: 20, offset: 459 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 440 },
        end: { line: 16, column: 20, offset: 459 },
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
                        start: { line: 18, column: 6, offset: 466 },
                        end: { line: 18, column: 18, offset: 478 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 465 },
                    end: { line: 18, column: 33, offset: 493 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 465 },
                end: { line: 18, column: 33, offset: 493 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 461 },
            end: { line: 18, column: 33, offset: 493 },
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
                  url: '#composition',
                  children: [
                    {
                      type: 'text',
                      value: 'Composition',
                      position: {
                        start: { line: 19, column: 6, offset: 499 },
                        end: { line: 19, column: 17, offset: 510 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 498 },
                    end: { line: 19, column: 32, offset: 525 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 498 },
                end: { line: 19, column: 32, offset: 525 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 494 },
            end: { line: 19, column: 32, offset: 525 },
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
                        start: { line: 20, column: 6, offset: 531 },
                        end: { line: 20, column: 18, offset: 543 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 530 },
                    end: { line: 20, column: 34, offset: 559 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 530 },
                end: { line: 20, column: 34, offset: 559 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 526 },
            end: { line: 20, column: 34, offset: 559 },
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
                        start: { line: 21, column: 6, offset: 565 },
                        end: { line: 21, column: 18, offset: 577 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 564 },
                    end: { line: 21, column: 34, offset: 593 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 564 },
                end: { line: 21, column: 34, offset: 593 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 560 },
            end: { line: 21, column: 34, offset: 593 },
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
                        start: { line: 22, column: 6, offset: 599 },
                        end: { line: 22, column: 20, offset: 613 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 598 },
                    end: { line: 22, column: 38, offset: 631 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 598 },
                end: { line: 22, column: 38, offset: 631 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 594 },
            end: { line: 22, column: 38, offset: 631 },
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
                        start: { line: 23, column: 6, offset: 637 },
                        end: { line: 23, column: 17, offset: 648 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 5, offset: 636 },
                    end: { line: 23, column: 32, offset: 663 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 23, column: 5, offset: 636 },
                end: { line: 23, column: 32, offset: 663 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 23, column: 1, offset: 632 },
            end: { line: 23, column: 32, offset: 663 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 461 },
        end: { line: 23, column: 32, offset: 663 },
        indent: [ 1, 1, 1, 1, 1 ]
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
                start: { line: 25, column: 4, offset: 668 },
                end: { line: 25, column: 5, offset: 669 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 667 },
            end: { line: 25, column: 6, offset: 670 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 25, column: 6, offset: 670 },
            end: { line: 25, column: 15, offset: 679 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 665 },
        end: { line: 25, column: 15, offset: 679 },
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
                start: { line: 26, column: 3, offset: 682 },
                end: { line: 26, column: 28, offset: 707 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 680 },
            end: { line: 26, column: 30, offset: 709 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any Rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 26, column: 30, offset: 709 },
            end: { line: 26, column: 216, offset: 895 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 216, offset: 895 },
            end: { line: 26, column: 229, offset: 908 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 26, column: 229, offset: 908 },
            end: { line: 26, column: 233, offset: 912 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 26, column: 233, offset: 912 },
            end: { line: 26, column: 253, offset: 932 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 26, column: 253, offset: 932 },
            end: { line: 26, column: 291, offset: 970 },
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
              value: 'blog post',
              position: {
                start: { line: 26, column: 292, offset: 971 },
                end: { line: 26, column: 301, offset: 980 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 291, offset: 970 },
            end: { line: 26, column: 382, offset: 1061 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 382, offset: 1061 },
            end: { line: 26, column: 383, offset: 1062 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 680 },
        end: { line: 26, column: 383, offset: 1062 },
        indent: []
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const getTodo = id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)\n' +
        '\n' +
        'map(pipe([\n' +
        '  getTodo,\n' +
        '  res => res.json(),\n' +
        '  console.log,\n' +
        ']))([1, 2, 3, 4, 5])',
      position: {
        start: { line: 28, column: 1, offset: 1064 },
        end: { line: 36, column: 4, offset: 1254 },
        indent: [
          1, 1, 1, 1,
          1, 1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 38, column: 1, offset: 1256 },
            end: { line: 38, column: 11, offset: 1266 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 38, column: 11, offset: 1266 },
            end: { line: 38, column: 16, offset: 1271 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 38, column: 16, offset: 1271 },
            end: { line: 38, column: 52, offset: 1307 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 38, column: 52, offset: 1307 },
            end: { line: 38, column: 59, offset: 1314 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 38, column: 59, offset: 1314 },
            end: { line: 38, column: 144, offset: 1399 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1256 },
        end: { line: 38, column: 144, offset: 1399 },
        indent: []
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
            start: { line: 40, column: 3, offset: 1403 },
            end: { line: 40, column: 14, offset: 1414 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1401 },
        end: { line: 40, column: 14, offset: 1414 },
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
              value: 'Reduce coupling and complexity',
              position: {
                start: { line: 41, column: 3, offset: 1417 },
                end: { line: 41, column: 33, offset: 1447 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 41, column: 1, offset: 1415 },
            end: { line: 41, column: 35, offset: 1449 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - Rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 41, column: 35, offset: 1449 },
            end: { line: 41, column: 258, offset: 1672 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1415 },
        end: { line: 41, column: 258, offset: 1672 },
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
        start: { line: 43, column: 1, offset: 1674 },
        end: { line: 63, column: 4, offset: 2110 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 65, column: 1, offset: 2112 },
            end: { line: 65, column: 5, offset: 2116 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 65, column: 5, offset: 2116 },
            end: { line: 65, column: 10, offset: 2121 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 65, column: 10, offset: 2121 },
            end: { line: 65, column: 46, offset: 2157 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 65, column: 46, offset: 2157 },
            end: { line: 65, column: 63, offset: 2174 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 65, column: 63, offset: 2174 },
            end: { line: 65, column: 180, offset: 2291 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 65, column: 180, offset: 2291 },
            end: { line: 65, column: 207, offset: 2318 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 65, column: 207, offset: 2318 },
            end: { line: 65, column: 252, offset: 2363 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 65, column: 252, offset: 2363 },
            end: { line: 65, column: 259, offset: 2370 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 65, column: 259, offset: 2370 },
            end: { line: 65, column: 276, offset: 2387 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 65, column: 276, offset: 2387 },
            end: { line: 65, column: 280, offset: 2391 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 65, column: 280, offset: 2391 },
            end: { line: 65, column: 384, offset: 2495 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2112 },
        end: { line: 65, column: 384, offset: 2495 },
        indent: []
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
            start: { line: 67, column: 3, offset: 2499 },
            end: { line: 67, column: 15, offset: 2511 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2497 },
        end: { line: 67, column: 15, offset: 2511 },
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
                start: { line: 68, column: 3, offset: 2514 },
                end: { line: 68, column: 52, offset: 2563 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2512 },
            end: { line: 68, column: 54, offset: 2565 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use ',
          position: {
            start: { line: 68, column: 54, offset: 2565 },
            end: { line: 68, column: 60, offset: 2571 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 68, column: 60, offset: 2571 },
            end: { line: 68, column: 65, offset: 2576 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 65, offset: 2576 },
            end: { line: 68, column: 67, offset: 2578 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 68, column: 67, offset: 2578 },
            end: { line: 68, column: 75, offset: 2586 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 75, offset: 2586 },
            end: { line: 68, column: 77, offset: 2588 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 68, column: 77, offset: 2588 },
            end: { line: 68, column: 85, offset: 2596 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 85, offset: 2596 },
            end: { line: 68, column: 87, offset: 2598 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 68, column: 87, offset: 2598 },
            end: { line: 68, column: 98, offset: 2609 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ',  or ',
          position: {
            start: { line: 68, column: 98, offset: 2609 },
            end: { line: 68, column: 104, offset: 2615 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 68, column: 104, offset: 2615 },
            end: { line: 68, column: 113, offset: 2624 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of Rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 68, column: 113, offset: 2624 },
            end: { line: 68, column: 346, offset: 2857 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2512 },
        end: { line: 68, column: 346, offset: 2857 },
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
        start: { line: 70, column: 1, offset: 2859 },
        end: { line: 89, column: 4, offset: 3385 },
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
            start: { line: 91, column: 3, offset: 3389 },
            end: { line: 91, column: 15, offset: 3401 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3387 },
        end: { line: 91, column: 15, offset: 3401 },
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
                start: { line: 92, column: 3, offset: 3404 },
                end: { line: 92, column: 52, offset: 3453 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 92, column: 1, offset: 3402 },
            end: { line: 92, column: 54, offset: 3455 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with Rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in Rubico.",
          position: {
            start: { line: 92, column: 54, offset: 3455 },
            end: { line: 92, column: 197, offset: 3598 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3402 },
        end: { line: 92, column: 197, offset: 3598 },
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
                    start: { line: 94, column: 3, offset: 3602 },
                    end: { line: 94, column: 26, offset: 3625 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 94, column: 26, offset: 3625 },
                    end: { line: 94, column: 37, offset: 3636 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 94, column: 37, offset: 3636 },
                    end: { line: 94, column: 40, offset: 3639 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 94, column: 40, offset: 3639 },
                    end: { line: 94, column: 63, offset: 3662 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 94, column: 3, offset: 3602 },
                end: { line: 94, column: 63, offset: 3662 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 94, column: 1, offset: 3600 },
            end: { line: 94, column: 63, offset: 3662 },
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
                    start: { line: 95, column: 3, offset: 3665 },
                    end: { line: 95, column: 16, offset: 3678 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 95, column: 16, offset: 3678 },
                    end: { line: 95, column: 24, offset: 3686 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 95, column: 24, offset: 3686 },
                    end: { line: 95, column: 27, offset: 3689 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 95, column: 27, offset: 3689 },
                    end: { line: 95, column: 40, offset: 3702 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 95, column: 3, offset: 3665 },
                end: { line: 95, column: 40, offset: 3702 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3663 },
            end: { line: 95, column: 40, offset: 3702 },
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
                    start: { line: 96, column: 3, offset: 3705 },
                    end: { line: 96, column: 15, offset: 3717 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 96, column: 15, offset: 3717 },
                    end: { line: 96, column: 23, offset: 3725 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 96, column: 23, offset: 3725 },
                    end: { line: 96, column: 26, offset: 3728 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 96, column: 26, offset: 3728 },
                    end: { line: 96, column: 38, offset: 3740 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 96, column: 3, offset: 3705 },
                end: { line: 96, column: 38, offset: 3740 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 3703 },
            end: { line: 96, column: 38, offset: 3740 },
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
                    start: { line: 97, column: 3, offset: 3743 },
                    end: { line: 97, column: 16, offset: 3756 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 97, column: 16, offset: 3756 },
                    end: { line: 97, column: 20, offset: 3760 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 97, column: 20, offset: 3760 },
                    end: { line: 97, column: 23, offset: 3763 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 97, column: 23, offset: 3763 },
                    end: { line: 97, column: 31, offset: 3771 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 97, column: 3, offset: 3743 },
                end: { line: 97, column: 31, offset: 3771 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3741 },
            end: { line: 97, column: 31, offset: 3771 },
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
                    start: { line: 98, column: 3, offset: 3774 },
                    end: { line: 98, column: 13, offset: 3784 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 98, column: 13, offset: 3784 },
                    end: { line: 98, column: 22, offset: 3793 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 98, column: 22, offset: 3793 },
                    end: { line: 98, column: 25, offset: 3796 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 98, column: 25, offset: 3796 },
                    end: { line: 98, column: 35, offset: 3806 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 98, column: 3, offset: 3774 },
                end: { line: 98, column: 35, offset: 3806 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 98, column: 1, offset: 3772 },
            end: { line: 98, column: 35, offset: 3806 },
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
                    start: { line: 99, column: 3, offset: 3809 },
                    end: { line: 99, column: 17, offset: 3823 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 99, column: 17, offset: 3823 },
                    end: { line: 99, column: 24, offset: 3830 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 24, offset: 3830 },
                    end: { line: 99, column: 27, offset: 3833 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 99, column: 27, offset: 3833 },
                    end: { line: 99, column: 37, offset: 3843 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3809 },
                end: { line: 99, column: 37, offset: 3843 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3807 },
            end: { line: 99, column: 37, offset: 3843 },
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
                    start: { line: 100, column: 3, offset: 3846 },
                    end: { line: 100, column: 14, offset: 3857 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 100, column: 14, offset: 3857 },
                    end: { line: 100, column: 21, offset: 3864 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 21, offset: 3864 },
                    end: { line: 100, column: 24, offset: 3867 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 100, column: 24, offset: 3867 },
                    end: { line: 100, column: 34, offset: 3877 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3846 },
                end: { line: 100, column: 34, offset: 3877 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3844 },
            end: { line: 100, column: 34, offset: 3877 },
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
                    start: { line: 101, column: 3, offset: 3880 },
                    end: { line: 101, column: 26, offset: 3903 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 101, column: 26, offset: 3903 },
                    end: { line: 101, column: 34, offset: 3911 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 34, offset: 3911 },
                    end: { line: 101, column: 37, offset: 3914 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 101, column: 37, offset: 3914 },
                    end: { line: 101, column: 48, offset: 3925 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3880 },
                end: { line: 101, column: 48, offset: 3925 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3878 },
            end: { line: 101, column: 48, offset: 3925 },
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
                    start: { line: 102, column: 3, offset: 3928 },
                    end: { line: 102, column: 23, offset: 3948 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 102, column: 23, offset: 3948 },
                    end: { line: 102, column: 31, offset: 3956 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 31, offset: 3956 },
                    end: { line: 102, column: 34, offset: 3959 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 102, column: 34, offset: 3959 },
                    end: { line: 102, column: 45, offset: 3970 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3928 },
                end: { line: 102, column: 45, offset: 3970 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3926 },
            end: { line: 102, column: 45, offset: 3970 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3600 },
        end: { line: 102, column: 45, offset: 3970 },
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
        start: { line: 104, column: 1, offset: 3972 },
        end: { line: 124, column: 4, offset: 4387 },
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
            start: { line: 126, column: 3, offset: 4391 },
            end: { line: 126, column: 17, offset: 4405 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4389 },
        end: { line: 126, column: 17, offset: 4405 },
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
                start: { line: 127, column: 3, offset: 4408 },
                end: { line: 127, column: 31, offset: 4436 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4406 },
            end: { line: 127, column: 33, offset: 4438 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 127, column: 33, offset: 4438 },
            end: { line: 127, column: 38, offset: 4443 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 38, offset: 4443 },
            end: { line: 127, column: 45, offset: 4450 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 127, column: 45, offset: 4450 },
            end: { line: 127, column: 52, offset: 4457 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 52, offset: 4457 },
            end: { line: 127, column: 61, offset: 4466 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 127, column: 61, offset: 4466 },
            end: { line: 127, column: 67, offset: 4472 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 67, offset: 4472 },
            end: { line: 127, column: 74, offset: 4479 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 127, column: 74, offset: 4479 },
            end: { line: 127, column: 95, offset: 4500 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 95, offset: 4500 },
            end: { line: 127, column: 104, offset: 4509 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected. You can use a single error handler with ',
          position: {
            start: { line: 127, column: 104, offset: 4509 },
            end: { line: 127, column: 193, offset: 4598 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 127, column: 193, offset: 4598 },
            end: { line: 127, column: 203, offset: 4608 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to catch all errors thrown by sync or async functions including promise rejections in a ',
          position: {
            start: { line: 127, column: 203, offset: 4608 },
            end: { line: 127, column: 292, offset: 4697 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 127, column: 292, offset: 4697 },
            end: { line: 127, column: 298, offset: 4703 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 127, column: 298, offset: 4703 },
            end: { line: 127, column: 299, offset: 4704 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4406 },
        end: { line: 127, column: 299, offset: 4704 },
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
        start: { line: 129, column: 1, offset: 4706 },
        end: { line: 140, column: 4, offset: 4941 },
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
            start: { line: 142, column: 3, offset: 4945 },
            end: { line: 142, column: 14, offset: 4956 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4943 },
        end: { line: 142, column: 14, offset: 4956 },
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
                start: { line: 143, column: 3, offset: 4959 },
                end: { line: 143, column: 44, offset: 5000 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4957 },
            end: { line: 143, column: 46, offset: 5002 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with Rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 143, column: 46, offset: 5002 },
            end: { line: 143, column: 126, offset: 5082 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 143, column: 126, offset: 5082 },
            end: { line: 143, column: 131, offset: 5087 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 143, column: 131, offset: 5087 },
            end: { line: 143, column: 133, offset: 5089 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 143, column: 133, offset: 5089 },
            end: { line: 143, column: 141, offset: 5097 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 143, column: 141, offset: 5097 },
            end: { line: 143, column: 146, offset: 5102 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 143, column: 146, offset: 5102 },
            end: { line: 143, column: 155, offset: 5111 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 143, column: 155, offset: 5111 },
            end: { line: 143, column: 180, offset: 5136 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 143, column: 180, offset: 5136 },
            end: { line: 143, column: 188, offset: 5144 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 143, column: 188, offset: 5144 },
            end: { line: 143, column: 192, offset: 5148 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 143, column: 192, offset: 5148 },
            end: { line: 143, column: 203, offset: 5159 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with Rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 143, column: 203, offset: 5159 },
            end: { line: 143, column: 337, offset: 5293 },
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
                start: { line: 143, column: 338, offset: 5294 },
                end: { line: 143, column: 342, offset: 5298 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 337, offset: 5293 },
            end: { line: 143, column: 405, offset: 5361 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 405, offset: 5361 },
            end: { line: 143, column: 406, offset: 5362 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4957 },
        end: { line: 143, column: 406, offset: 5362 },
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
        start: { line: 145, column: 1, offset: 5364 },
        end: { line: 173, column: 4, offset: 6188 },
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
          value: "You've arrived at the end of the tour. From here, you could get started with Rubico in a project (",
          position: {
            start: { line: 175, column: 1, offset: 6190 },
            end: { line: 175, column: 99, offset: 6288 },
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
                start: { line: 175, column: 100, offset: 6289 },
                end: { line: 175, column: 112, offset: 6301 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 99, offset: 6288 },
            end: { line: 175, column: 129, offset: 6318 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 175, column: 129, offset: 6318 },
            end: { line: 175, column: 151, offset: 6340 },
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
                start: { line: 175, column: 152, offset: 6341 },
                end: { line: 175, column: 156, offset: 6345 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 151, offset: 6340 },
            end: { line: 175, column: 164, offset: 6353 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 175, column: 164, offset: 6353 },
            end: { line: 175, column: 165, offset: 6354 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 6190 },
        end: { line: 175, column: 165, offset: 6354 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 176, column: 1, offset: 6355 }
  }
}
