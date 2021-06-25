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
        '  fork, assign, get, pick, omit,\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '  and, or, not, any, all,\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '  thunkify, always,\n' +
        '  curry, __,\n' +
        '} = rubico // available globally',
      position: {
        start: { line: 3, column: 1, offset: 179 },
        end: { line: 14, column: 4, offset: 433 },
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
            start: { line: 16, column: 3, offset: 437 },
            end: { line: 16, column: 20, offset: 454 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 435 },
        end: { line: 16, column: 20, offset: 454 },
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
                        start: { line: 18, column: 6, offset: 461 },
                        end: { line: 18, column: 18, offset: 473 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 460 },
                    end: { line: 18, column: 33, offset: 488 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 460 },
                end: { line: 18, column: 33, offset: 488 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 456 },
            end: { line: 18, column: 33, offset: 488 },
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
                        start: { line: 19, column: 6, offset: 494 },
                        end: { line: 19, column: 17, offset: 505 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 493 },
                    end: { line: 19, column: 32, offset: 520 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 493 },
                end: { line: 19, column: 32, offset: 520 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 489 },
            end: { line: 19, column: 32, offset: 520 },
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
                        start: { line: 20, column: 6, offset: 526 },
                        end: { line: 20, column: 18, offset: 538 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 525 },
                    end: { line: 20, column: 34, offset: 554 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 525 },
                end: { line: 20, column: 34, offset: 554 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 521 },
            end: { line: 20, column: 34, offset: 554 },
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
                        start: { line: 21, column: 6, offset: 560 },
                        end: { line: 21, column: 18, offset: 572 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 559 },
                    end: { line: 21, column: 34, offset: 588 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 559 },
                end: { line: 21, column: 34, offset: 588 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 555 },
            end: { line: 21, column: 34, offset: 588 },
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
                        start: { line: 22, column: 6, offset: 594 },
                        end: { line: 22, column: 20, offset: 608 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 593 },
                    end: { line: 22, column: 38, offset: 626 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 593 },
                end: { line: 22, column: 38, offset: 626 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 589 },
            end: { line: 22, column: 38, offset: 626 },
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
                        start: { line: 23, column: 6, offset: 632 },
                        end: { line: 23, column: 17, offset: 643 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 5, offset: 631 },
                    end: { line: 23, column: 32, offset: 658 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 23, column: 5, offset: 631 },
                end: { line: 23, column: 32, offset: 658 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 23, column: 1, offset: 627 },
            end: { line: 23, column: 32, offset: 658 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 456 },
        end: { line: 23, column: 32, offset: 658 },
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
                start: { line: 25, column: 4, offset: 663 },
                end: { line: 25, column: 5, offset: 664 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 662 },
            end: { line: 25, column: 6, offset: 665 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 25, column: 6, offset: 665 },
            end: { line: 25, column: 15, offset: 674 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 660 },
        end: { line: 25, column: 15, offset: 674 },
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
                start: { line: 26, column: 3, offset: 677 },
                end: { line: 26, column: 28, offset: 702 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 675 },
            end: { line: 26, column: 30, offset: 704 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any Rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 26, column: 30, offset: 704 },
            end: { line: 26, column: 216, offset: 890 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 216, offset: 890 },
            end: { line: 26, column: 229, offset: 903 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 26, column: 229, offset: 903 },
            end: { line: 26, column: 233, offset: 907 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 26, column: 233, offset: 907 },
            end: { line: 26, column: 253, offset: 927 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 26, column: 253, offset: 927 },
            end: { line: 26, column: 291, offset: 965 },
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
                start: { line: 26, column: 292, offset: 966 },
                end: { line: 26, column: 301, offset: 975 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 291, offset: 965 },
            end: { line: 26, column: 382, offset: 1056 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 382, offset: 1056 },
            end: { line: 26, column: 383, offset: 1057 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 675 },
        end: { line: 26, column: 383, offset: 1057 },
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
        start: { line: 28, column: 1, offset: 1059 },
        end: { line: 36, column: 4, offset: 1249 },
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
            start: { line: 38, column: 1, offset: 1251 },
            end: { line: 38, column: 11, offset: 1261 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 38, column: 11, offset: 1261 },
            end: { line: 38, column: 16, offset: 1266 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 38, column: 16, offset: 1266 },
            end: { line: 38, column: 52, offset: 1302 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 38, column: 52, offset: 1302 },
            end: { line: 38, column: 59, offset: 1309 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 38, column: 59, offset: 1309 },
            end: { line: 38, column: 144, offset: 1394 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1251 },
        end: { line: 38, column: 144, offset: 1394 },
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
            start: { line: 40, column: 3, offset: 1398 },
            end: { line: 40, column: 14, offset: 1409 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1396 },
        end: { line: 40, column: 14, offset: 1409 },
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
                start: { line: 41, column: 3, offset: 1412 },
                end: { line: 41, column: 33, offset: 1442 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 41, column: 1, offset: 1410 },
            end: { line: 41, column: 35, offset: 1444 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". Use Rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - Rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 41, column: 35, offset: 1444 },
            end: { line: 41, column: 258, offset: 1667 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1410 },
        end: { line: 41, column: 258, offset: 1667 },
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
        start: { line: 43, column: 1, offset: 1669 },
        end: { line: 63, column: 4, offset: 2105 },
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
            start: { line: 65, column: 1, offset: 2107 },
            end: { line: 65, column: 5, offset: 2111 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 65, column: 5, offset: 2111 },
            end: { line: 65, column: 10, offset: 2116 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 65, column: 10, offset: 2116 },
            end: { line: 65, column: 46, offset: 2152 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 65, column: 46, offset: 2152 },
            end: { line: 65, column: 63, offset: 2169 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 65, column: 63, offset: 2169 },
            end: { line: 65, column: 180, offset: 2286 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 65, column: 180, offset: 2286 },
            end: { line: 65, column: 207, offset: 2313 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces Rubico's ",
          position: {
            start: { line: 65, column: 207, offset: 2313 },
            end: { line: 65, column: 252, offset: 2358 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 65, column: 252, offset: 2358 },
            end: { line: 65, column: 259, offset: 2365 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 65, column: 259, offset: 2365 },
            end: { line: 65, column: 276, offset: 2382 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 65, column: 276, offset: 2382 },
            end: { line: 65, column: 280, offset: 2386 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 65, column: 280, offset: 2386 },
            end: { line: 65, column: 384, offset: 2490 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2107 },
        end: { line: 65, column: 384, offset: 2490 },
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
            start: { line: 67, column: 3, offset: 2494 },
            end: { line: 67, column: 15, offset: 2506 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2492 },
        end: { line: 67, column: 15, offset: 2506 },
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
                start: { line: 68, column: 3, offset: 2509 },
                end: { line: 68, column: 52, offset: 2558 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2507 },
            end: { line: 68, column: 54, offset: 2560 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use ',
          position: {
            start: { line: 68, column: 54, offset: 2560 },
            end: { line: 68, column: 60, offset: 2566 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 68, column: 60, offset: 2566 },
            end: { line: 68, column: 65, offset: 2571 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 65, offset: 2571 },
            end: { line: 68, column: 67, offset: 2573 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 68, column: 67, offset: 2573 },
            end: { line: 68, column: 75, offset: 2581 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 75, offset: 2581 },
            end: { line: 68, column: 77, offset: 2583 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 68, column: 77, offset: 2583 },
            end: { line: 68, column: 85, offset: 2591 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 85, offset: 2591 },
            end: { line: 68, column: 87, offset: 2593 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 68, column: 87, offset: 2593 },
            end: { line: 68, column: 98, offset: 2604 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ',  or ',
          position: {
            start: { line: 68, column: 98, offset: 2604 },
            end: { line: 68, column: 104, offset: 2610 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 68, column: 104, offset: 2610 },
            end: { line: 68, column: 113, offset: 2619 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of Rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 68, column: 113, offset: 2619 },
            end: { line: 68, column: 346, offset: 2852 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2507 },
        end: { line: 68, column: 346, offset: 2852 },
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
        start: { line: 70, column: 1, offset: 2854 },
        end: { line: 89, column: 4, offset: 3380 },
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
            start: { line: 91, column: 3, offset: 3384 },
            end: { line: 91, column: 15, offset: 3396 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3382 },
        end: { line: 91, column: 15, offset: 3396 },
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
                start: { line: 92, column: 3, offset: 3399 },
                end: { line: 92, column: 52, offset: 3448 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 92, column: 1, offset: 3397 },
            end: { line: 92, column: 54, offset: 3450 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with Rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in Rubico.",
          position: {
            start: { line: 92, column: 54, offset: 3450 },
            end: { line: 92, column: 197, offset: 3593 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3397 },
        end: { line: 92, column: 197, offset: 3593 },
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
                    start: { line: 94, column: 3, offset: 3597 },
                    end: { line: 94, column: 26, offset: 3620 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 94, column: 26, offset: 3620 },
                    end: { line: 94, column: 37, offset: 3631 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 94, column: 37, offset: 3631 },
                    end: { line: 94, column: 40, offset: 3634 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 94, column: 40, offset: 3634 },
                    end: { line: 94, column: 63, offset: 3657 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 94, column: 3, offset: 3597 },
                end: { line: 94, column: 63, offset: 3657 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 94, column: 1, offset: 3595 },
            end: { line: 94, column: 63, offset: 3657 },
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
                    start: { line: 95, column: 3, offset: 3660 },
                    end: { line: 95, column: 16, offset: 3673 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 95, column: 16, offset: 3673 },
                    end: { line: 95, column: 24, offset: 3681 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 95, column: 24, offset: 3681 },
                    end: { line: 95, column: 27, offset: 3684 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 95, column: 27, offset: 3684 },
                    end: { line: 95, column: 40, offset: 3697 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 95, column: 3, offset: 3660 },
                end: { line: 95, column: 40, offset: 3697 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3658 },
            end: { line: 95, column: 40, offset: 3697 },
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
                    start: { line: 96, column: 3, offset: 3700 },
                    end: { line: 96, column: 15, offset: 3712 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 96, column: 15, offset: 3712 },
                    end: { line: 96, column: 23, offset: 3720 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 96, column: 23, offset: 3720 },
                    end: { line: 96, column: 26, offset: 3723 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 96, column: 26, offset: 3723 },
                    end: { line: 96, column: 38, offset: 3735 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 96, column: 3, offset: 3700 },
                end: { line: 96, column: 38, offset: 3735 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 3698 },
            end: { line: 96, column: 38, offset: 3735 },
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
                    start: { line: 97, column: 3, offset: 3738 },
                    end: { line: 97, column: 16, offset: 3751 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 97, column: 16, offset: 3751 },
                    end: { line: 97, column: 20, offset: 3755 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 97, column: 20, offset: 3755 },
                    end: { line: 97, column: 23, offset: 3758 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 97, column: 23, offset: 3758 },
                    end: { line: 97, column: 31, offset: 3766 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 97, column: 3, offset: 3738 },
                end: { line: 97, column: 31, offset: 3766 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3736 },
            end: { line: 97, column: 31, offset: 3766 },
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
                    start: { line: 98, column: 3, offset: 3769 },
                    end: { line: 98, column: 13, offset: 3779 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 98, column: 13, offset: 3779 },
                    end: { line: 98, column: 22, offset: 3788 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 98, column: 22, offset: 3788 },
                    end: { line: 98, column: 25, offset: 3791 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 98, column: 25, offset: 3791 },
                    end: { line: 98, column: 35, offset: 3801 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 98, column: 3, offset: 3769 },
                end: { line: 98, column: 35, offset: 3801 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 98, column: 1, offset: 3767 },
            end: { line: 98, column: 35, offset: 3801 },
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
                    start: { line: 99, column: 3, offset: 3804 },
                    end: { line: 99, column: 17, offset: 3818 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 99, column: 17, offset: 3818 },
                    end: { line: 99, column: 24, offset: 3825 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 24, offset: 3825 },
                    end: { line: 99, column: 27, offset: 3828 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 99, column: 27, offset: 3828 },
                    end: { line: 99, column: 37, offset: 3838 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3804 },
                end: { line: 99, column: 37, offset: 3838 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3802 },
            end: { line: 99, column: 37, offset: 3838 },
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
                    start: { line: 100, column: 3, offset: 3841 },
                    end: { line: 100, column: 14, offset: 3852 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 100, column: 14, offset: 3852 },
                    end: { line: 100, column: 21, offset: 3859 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 21, offset: 3859 },
                    end: { line: 100, column: 24, offset: 3862 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 100, column: 24, offset: 3862 },
                    end: { line: 100, column: 34, offset: 3872 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3841 },
                end: { line: 100, column: 34, offset: 3872 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3839 },
            end: { line: 100, column: 34, offset: 3872 },
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
                    start: { line: 101, column: 3, offset: 3875 },
                    end: { line: 101, column: 26, offset: 3898 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 101, column: 26, offset: 3898 },
                    end: { line: 101, column: 34, offset: 3906 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 34, offset: 3906 },
                    end: { line: 101, column: 37, offset: 3909 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 101, column: 37, offset: 3909 },
                    end: { line: 101, column: 48, offset: 3920 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3875 },
                end: { line: 101, column: 48, offset: 3920 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3873 },
            end: { line: 101, column: 48, offset: 3920 },
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
                    start: { line: 102, column: 3, offset: 3923 },
                    end: { line: 102, column: 23, offset: 3943 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 102, column: 23, offset: 3943 },
                    end: { line: 102, column: 31, offset: 3951 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 31, offset: 3951 },
                    end: { line: 102, column: 34, offset: 3954 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 102, column: 34, offset: 3954 },
                    end: { line: 102, column: 45, offset: 3965 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3923 },
                end: { line: 102, column: 45, offset: 3965 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3921 },
            end: { line: 102, column: 45, offset: 3965 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3595 },
        end: { line: 102, column: 45, offset: 3965 },
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
        start: { line: 104, column: 1, offset: 3967 },
        end: { line: 124, column: 4, offset: 4382 },
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
            start: { line: 126, column: 3, offset: 4386 },
            end: { line: 126, column: 17, offset: 4400 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4384 },
        end: { line: 126, column: 17, offset: 4400 },
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
                start: { line: 127, column: 3, offset: 4403 },
                end: { line: 127, column: 31, offset: 4431 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4401 },
            end: { line: 127, column: 33, offset: 4433 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 127, column: 33, offset: 4433 },
            end: { line: 127, column: 38, offset: 4438 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 38, offset: 4438 },
            end: { line: 127, column: 45, offset: 4445 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 127, column: 45, offset: 4445 },
            end: { line: 127, column: 52, offset: 4452 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 52, offset: 4452 },
            end: { line: 127, column: 61, offset: 4461 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 127, column: 61, offset: 4461 },
            end: { line: 127, column: 67, offset: 4467 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 67, offset: 4467 },
            end: { line: 127, column: 74, offset: 4474 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 127, column: 74, offset: 4474 },
            end: { line: 127, column: 95, offset: 4495 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 95, offset: 4495 },
            end: { line: 127, column: 104, offset: 4504 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected. You can use a single error handler with ',
          position: {
            start: { line: 127, column: 104, offset: 4504 },
            end: { line: 127, column: 193, offset: 4593 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 127, column: 193, offset: 4593 },
            end: { line: 127, column: 203, offset: 4603 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to catch all errors thrown by sync or async functions including promise rejections in a ',
          position: {
            start: { line: 127, column: 203, offset: 4603 },
            end: { line: 127, column: 292, offset: 4692 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 127, column: 292, offset: 4692 },
            end: { line: 127, column: 298, offset: 4698 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 127, column: 298, offset: 4698 },
            end: { line: 127, column: 299, offset: 4699 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4401 },
        end: { line: 127, column: 299, offset: 4699 },
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
        start: { line: 129, column: 1, offset: 4701 },
        end: { line: 140, column: 4, offset: 4936 },
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
            start: { line: 142, column: 3, offset: 4940 },
            end: { line: 142, column: 14, offset: 4951 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4938 },
        end: { line: 142, column: 14, offset: 4951 },
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
                start: { line: 143, column: 3, offset: 4954 },
                end: { line: 143, column: 44, offset: 4995 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4952 },
            end: { line: 143, column: 46, offset: 4997 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with Rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 143, column: 46, offset: 4997 },
            end: { line: 143, column: 126, offset: 5077 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 143, column: 126, offset: 5077 },
            end: { line: 143, column: 131, offset: 5082 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 143, column: 131, offset: 5082 },
            end: { line: 143, column: 133, offset: 5084 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 143, column: 133, offset: 5084 },
            end: { line: 143, column: 141, offset: 5092 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 143, column: 141, offset: 5092 },
            end: { line: 143, column: 146, offset: 5097 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 143, column: 146, offset: 5097 },
            end: { line: 143, column: 155, offset: 5106 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 143, column: 155, offset: 5106 },
            end: { line: 143, column: 180, offset: 5131 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 143, column: 180, offset: 5131 },
            end: { line: 143, column: 188, offset: 5139 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 143, column: 188, offset: 5139 },
            end: { line: 143, column: 192, offset: 5143 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 143, column: 192, offset: 5143 },
            end: { line: 143, column: 203, offset: 5154 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with Rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 143, column: 203, offset: 5154 },
            end: { line: 143, column: 337, offset: 5288 },
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
                start: { line: 143, column: 338, offset: 5289 },
                end: { line: 143, column: 342, offset: 5293 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 337, offset: 5288 },
            end: { line: 143, column: 405, offset: 5356 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 405, offset: 5356 },
            end: { line: 143, column: 406, offset: 5357 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4952 },
        end: { line: 143, column: 406, offset: 5357 },
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
        start: { line: 145, column: 1, offset: 5359 },
        end: { line: 173, column: 4, offset: 6183 },
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
            start: { line: 175, column: 1, offset: 6185 },
            end: { line: 175, column: 99, offset: 6283 },
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
                start: { line: 175, column: 100, offset: 6284 },
                end: { line: 175, column: 112, offset: 6296 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 99, offset: 6283 },
            end: { line: 175, column: 129, offset: 6313 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 175, column: 129, offset: 6313 },
            end: { line: 175, column: 151, offset: 6335 },
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
                start: { line: 175, column: 152, offset: 6336 },
                end: { line: 175, column: 156, offset: 6340 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 151, offset: 6335 },
            end: { line: 175, column: 164, offset: 6348 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 175, column: 164, offset: 6348 },
            end: { line: 175, column: 165, offset: 6349 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 6185 },
        end: { line: 175, column: 165, offset: 6349 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 176, column: 1, offset: 6350 }
  }
}
