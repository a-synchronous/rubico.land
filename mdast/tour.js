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
      meta: '[theme=default]',
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
        end: { line: 14, column: 4, offset: 449 },
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
            start: { line: 16, column: 3, offset: 453 },
            end: { line: 16, column: 20, offset: 470 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 451 },
        end: { line: 16, column: 20, offset: 470 },
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
                        start: { line: 18, column: 6, offset: 477 },
                        end: { line: 18, column: 18, offset: 489 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 18, column: 5, offset: 476 },
                    end: { line: 18, column: 33, offset: 504 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 18, column: 5, offset: 476 },
                end: { line: 18, column: 33, offset: 504 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 18, column: 1, offset: 472 },
            end: { line: 18, column: 33, offset: 504 },
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
                        start: { line: 19, column: 6, offset: 510 },
                        end: { line: 19, column: 17, offset: 521 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 19, column: 5, offset: 509 },
                    end: { line: 19, column: 32, offset: 536 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 19, column: 5, offset: 509 },
                end: { line: 19, column: 32, offset: 536 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 19, column: 1, offset: 505 },
            end: { line: 19, column: 32, offset: 536 },
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
                        start: { line: 20, column: 6, offset: 542 },
                        end: { line: 20, column: 18, offset: 554 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 20, column: 5, offset: 541 },
                    end: { line: 20, column: 34, offset: 570 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 20, column: 5, offset: 541 },
                end: { line: 20, column: 34, offset: 570 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 20, column: 1, offset: 537 },
            end: { line: 20, column: 34, offset: 570 },
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
                        start: { line: 21, column: 6, offset: 576 },
                        end: { line: 21, column: 18, offset: 588 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 21, column: 5, offset: 575 },
                    end: { line: 21, column: 34, offset: 604 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 21, column: 5, offset: 575 },
                end: { line: 21, column: 34, offset: 604 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 571 },
            end: { line: 21, column: 34, offset: 604 },
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
                        start: { line: 22, column: 6, offset: 610 },
                        end: { line: 22, column: 20, offset: 624 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 22, column: 5, offset: 609 },
                    end: { line: 22, column: 38, offset: 642 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 22, column: 5, offset: 609 },
                end: { line: 22, column: 38, offset: 642 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 22, column: 1, offset: 605 },
            end: { line: 22, column: 38, offset: 642 },
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
                        start: { line: 23, column: 6, offset: 648 },
                        end: { line: 23, column: 17, offset: 659 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 5, offset: 647 },
                    end: { line: 23, column: 32, offset: 674 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 23, column: 5, offset: 647 },
                end: { line: 23, column: 32, offset: 674 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 23, column: 1, offset: 643 },
            end: { line: 23, column: 32, offset: 674 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 472 },
        end: { line: 23, column: 32, offset: 674 },
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
                start: { line: 25, column: 4, offset: 679 },
                end: { line: 25, column: 5, offset: 680 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 25, column: 3, offset: 678 },
            end: { line: 25, column: 6, offset: 681 },
            indent: []
          }
        },
        {
          type: 'text',
          value: 'synchrony',
          position: {
            start: { line: 25, column: 6, offset: 681 },
            end: { line: 25, column: 15, offset: 690 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 676 },
        end: { line: 25, column: 15, offset: 690 },
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
                start: { line: 26, column: 3, offset: 693 },
                end: { line: 26, column: 28, offset: 718 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 691 },
            end: { line: 26, column: 30, offset: 720 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 26, column: 30, offset: 720 },
            end: { line: 26, column: 216, offset: 906 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 216, offset: 906 },
            end: { line: 26, column: 229, offset: 919 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 26, column: 229, offset: 919 },
            end: { line: 26, column: 233, offset: 923 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 26, column: 233, offset: 923 },
            end: { line: 26, column: 253, offset: 943 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 26, column: 253, offset: 943 },
            end: { line: 26, column: 291, offset: 981 },
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
                start: { line: 26, column: 292, offset: 982 },
                end: { line: 26, column: 301, offset: 991 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 26, column: 291, offset: 981 },
            end: { line: 26, column: 382, offset: 1072 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 382, offset: 1072 },
            end: { line: 26, column: 383, offset: 1073 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 691 },
        end: { line: 26, column: 383, offset: 1073 },
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
        start: { line: 28, column: 1, offset: 1075 },
        end: { line: 36, column: 4, offset: 1265 },
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
            start: { line: 38, column: 1, offset: 1267 },
            end: { line: 38, column: 11, offset: 1277 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 38, column: 11, offset: 1277 },
            end: { line: 38, column: 16, offset: 1282 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 38, column: 16, offset: 1282 },
            end: { line: 38, column: 52, offset: 1318 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 38, column: 52, offset: 1318 },
            end: { line: 38, column: 59, offset: 1325 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 38, column: 59, offset: 1325 },
            end: { line: 38, column: 144, offset: 1410 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1267 },
        end: { line: 38, column: 144, offset: 1410 },
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
            start: { line: 40, column: 3, offset: 1414 },
            end: { line: 40, column: 14, offset: 1425 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1412 },
        end: { line: 40, column: 14, offset: 1425 },
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
                start: { line: 41, column: 3, offset: 1428 },
                end: { line: 41, column: 33, offset: 1458 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 41, column: 1, offset: 1426 },
            end: { line: 41, column: 35, offset: 1460 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". Use rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 41, column: 35, offset: 1460 },
            end: { line: 41, column: 258, offset: 1683 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1426 },
        end: { line: 41, column: 258, offset: 1683 },
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
        start: { line: 43, column: 1, offset: 1685 },
        end: { line: 63, column: 4, offset: 2121 },
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
            start: { line: 65, column: 1, offset: 2123 },
            end: { line: 65, column: 5, offset: 2127 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 65, column: 5, offset: 2127 },
            end: { line: 65, column: 10, offset: 2132 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 65, column: 10, offset: 2132 },
            end: { line: 65, column: 46, offset: 2168 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 65, column: 46, offset: 2168 },
            end: { line: 65, column: 63, offset: 2185 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 65, column: 63, offset: 2185 },
            end: { line: 65, column: 180, offset: 2302 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 65, column: 180, offset: 2302 },
            end: { line: 65, column: 207, offset: 2329 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces rubico's ",
          position: {
            start: { line: 65, column: 207, offset: 2329 },
            end: { line: 65, column: 252, offset: 2374 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 65, column: 252, offset: 2374 },
            end: { line: 65, column: 259, offset: 2381 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 65, column: 259, offset: 2381 },
            end: { line: 65, column: 276, offset: 2398 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 65, column: 276, offset: 2398 },
            end: { line: 65, column: 280, offset: 2402 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 65, column: 280, offset: 2402 },
            end: { line: 65, column: 384, offset: 2506 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2123 },
        end: { line: 65, column: 384, offset: 2506 },
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
            start: { line: 67, column: 3, offset: 2510 },
            end: { line: 67, column: 15, offset: 2522 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2508 },
        end: { line: 67, column: 15, offset: 2522 },
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
                start: { line: 68, column: 3, offset: 2525 },
                end: { line: 68, column: 52, offset: 2574 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2523 },
            end: { line: 68, column: 54, offset: 2576 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Use ',
          position: {
            start: { line: 68, column: 54, offset: 2576 },
            end: { line: 68, column: 60, offset: 2582 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 68, column: 60, offset: 2582 },
            end: { line: 68, column: 65, offset: 2587 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 65, offset: 2587 },
            end: { line: 68, column: 67, offset: 2589 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 68, column: 67, offset: 2589 },
            end: { line: 68, column: 75, offset: 2597 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 75, offset: 2597 },
            end: { line: 68, column: 77, offset: 2599 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 68, column: 77, offset: 2599 },
            end: { line: 68, column: 85, offset: 2607 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 68, column: 85, offset: 2607 },
            end: { line: 68, column: 87, offset: 2609 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 68, column: 87, offset: 2609 },
            end: { line: 68, column: 98, offset: 2620 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ',  or ',
          position: {
            start: { line: 68, column: 98, offset: 2620 },
            end: { line: 68, column: 104, offset: 2626 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 68, column: 104, offset: 2626 },
            end: { line: 68, column: 113, offset: 2635 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to transform async iterables, strings, sets, maps, binary arrays, and object values. This concept applies generally to any function of rubico; if a transformation + data structure pairing makes sense by math, it should be supported.',
          position: {
            start: { line: 68, column: 113, offset: 2635 },
            end: { line: 68, column: 346, offset: 2868 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2523 },
        end: { line: 68, column: 346, offset: 2868 },
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
        start: { line: 70, column: 1, offset: 2870 },
        end: { line: 89, column: 4, offset: 3396 },
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
            start: { line: 91, column: 3, offset: 3400 },
            end: { line: 91, column: 15, offset: 3412 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3398 },
        end: { line: 91, column: 15, offset: 3412 },
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
                start: { line: 92, column: 3, offset: 3415 },
                end: { line: 92, column: 52, offset: 3464 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 92, column: 1, offset: 3413 },
            end: { line: 92, column: 54, offset: 3466 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below is a map of vanilla JavaScript operators to their functional analogs in rubico.",
          position: {
            start: { line: 92, column: 54, offset: 3466 },
            end: { line: 92, column: 197, offset: 3609 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3413 },
        end: { line: 92, column: 197, offset: 3609 },
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
                    start: { line: 94, column: 3, offset: 3613 },
                    end: { line: 94, column: 26, offset: 3636 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 94, column: 26, offset: 3636 },
                    end: { line: 94, column: 37, offset: 3647 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 94, column: 37, offset: 3647 },
                    end: { line: 94, column: 40, offset: 3650 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 94, column: 40, offset: 3650 },
                    end: { line: 94, column: 63, offset: 3673 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 94, column: 3, offset: 3613 },
                end: { line: 94, column: 63, offset: 3673 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 94, column: 1, offset: 3611 },
            end: { line: 94, column: 63, offset: 3673 },
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
                    start: { line: 95, column: 3, offset: 3676 },
                    end: { line: 95, column: 16, offset: 3689 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 95, column: 16, offset: 3689 },
                    end: { line: 95, column: 24, offset: 3697 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 95, column: 24, offset: 3697 },
                    end: { line: 95, column: 27, offset: 3700 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 95, column: 27, offset: 3700 },
                    end: { line: 95, column: 40, offset: 3713 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 95, column: 3, offset: 3676 },
                end: { line: 95, column: 40, offset: 3713 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3674 },
            end: { line: 95, column: 40, offset: 3713 },
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
                    start: { line: 96, column: 3, offset: 3716 },
                    end: { line: 96, column: 15, offset: 3728 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 96, column: 15, offset: 3728 },
                    end: { line: 96, column: 23, offset: 3736 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 96, column: 23, offset: 3736 },
                    end: { line: 96, column: 26, offset: 3739 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 96, column: 26, offset: 3739 },
                    end: { line: 96, column: 38, offset: 3751 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 96, column: 3, offset: 3716 },
                end: { line: 96, column: 38, offset: 3751 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 96, column: 1, offset: 3714 },
            end: { line: 96, column: 38, offset: 3751 },
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
                    start: { line: 97, column: 3, offset: 3754 },
                    end: { line: 97, column: 16, offset: 3767 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 97, column: 16, offset: 3767 },
                    end: { line: 97, column: 20, offset: 3771 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 97, column: 20, offset: 3771 },
                    end: { line: 97, column: 23, offset: 3774 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 97, column: 23, offset: 3774 },
                    end: { line: 97, column: 31, offset: 3782 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 97, column: 3, offset: 3754 },
                end: { line: 97, column: 31, offset: 3782 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3752 },
            end: { line: 97, column: 31, offset: 3782 },
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
                    start: { line: 98, column: 3, offset: 3785 },
                    end: { line: 98, column: 13, offset: 3795 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 98, column: 13, offset: 3795 },
                    end: { line: 98, column: 22, offset: 3804 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 98, column: 22, offset: 3804 },
                    end: { line: 98, column: 25, offset: 3807 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 98, column: 25, offset: 3807 },
                    end: { line: 98, column: 35, offset: 3817 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 98, column: 3, offset: 3785 },
                end: { line: 98, column: 35, offset: 3817 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 98, column: 1, offset: 3783 },
            end: { line: 98, column: 35, offset: 3817 },
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
                    start: { line: 99, column: 3, offset: 3820 },
                    end: { line: 99, column: 17, offset: 3834 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 99, column: 17, offset: 3834 },
                    end: { line: 99, column: 24, offset: 3841 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 24, offset: 3841 },
                    end: { line: 99, column: 27, offset: 3844 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 99, column: 27, offset: 3844 },
                    end: { line: 99, column: 37, offset: 3854 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3820 },
                end: { line: 99, column: 37, offset: 3854 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3818 },
            end: { line: 99, column: 37, offset: 3854 },
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
                    start: { line: 100, column: 3, offset: 3857 },
                    end: { line: 100, column: 14, offset: 3868 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 100, column: 14, offset: 3868 },
                    end: { line: 100, column: 21, offset: 3875 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 21, offset: 3875 },
                    end: { line: 100, column: 24, offset: 3878 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 100, column: 24, offset: 3878 },
                    end: { line: 100, column: 34, offset: 3888 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3857 },
                end: { line: 100, column: 34, offset: 3888 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3855 },
            end: { line: 100, column: 34, offset: 3888 },
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
                    start: { line: 101, column: 3, offset: 3891 },
                    end: { line: 101, column: 26, offset: 3914 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 101, column: 26, offset: 3914 },
                    end: { line: 101, column: 34, offset: 3922 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 34, offset: 3922 },
                    end: { line: 101, column: 37, offset: 3925 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 101, column: 37, offset: 3925 },
                    end: { line: 101, column: 48, offset: 3936 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3891 },
                end: { line: 101, column: 48, offset: 3936 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3889 },
            end: { line: 101, column: 48, offset: 3936 },
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
                    start: { line: 102, column: 3, offset: 3939 },
                    end: { line: 102, column: 23, offset: 3959 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 102, column: 23, offset: 3959 },
                    end: { line: 102, column: 31, offset: 3967 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 31, offset: 3967 },
                    end: { line: 102, column: 34, offset: 3970 },
                    indent: []
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 102, column: 34, offset: 3970 },
                    end: { line: 102, column: 45, offset: 3981 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3939 },
                end: { line: 102, column: 45, offset: 3981 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3937 },
            end: { line: 102, column: 45, offset: 3981 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3611 },
        end: { line: 102, column: 45, offset: 3981 },
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
        start: { line: 104, column: 1, offset: 3983 },
        end: { line: 124, column: 4, offset: 4398 },
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
            start: { line: 126, column: 3, offset: 4402 },
            end: { line: 126, column: 17, offset: 4416 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4400 },
        end: { line: 126, column: 17, offset: 4416 },
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
                start: { line: 127, column: 3, offset: 4419 },
                end: { line: 127, column: 31, offset: 4447 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 127, column: 1, offset: 4417 },
            end: { line: 127, column: 33, offset: 4449 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - a ',
          position: {
            start: { line: 127, column: 33, offset: 4449 },
            end: { line: 127, column: 38, offset: 4454 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 38, offset: 4454 },
            end: { line: 127, column: 45, offset: 4461 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 127, column: 45, offset: 4461 },
            end: { line: 127, column: 52, offset: 4468 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 52, offset: 4468 },
            end: { line: 127, column: 61, offset: 4477 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. The ',
          position: {
            start: { line: 127, column: 61, offset: 4477 },
            end: { line: 127, column: 67, offset: 4483 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'tryer',
          position: {
            start: { line: 127, column: 67, offset: 4483 },
            end: { line: 127, column: 74, offset: 4490 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is tried, while the ',
          position: {
            start: { line: 127, column: 74, offset: 4490 },
            end: { line: 127, column: 95, offset: 4511 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'catcher',
          position: {
            start: { line: 127, column: 95, offset: 4511 },
            end: { line: 127, column: 104, offset: 4520 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' catches any errors thrown or Promises rejected.',
          position: {
            start: { line: 127, column: 104, offset: 4520 },
            end: { line: 127, column: 152, offset: 4568 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4417 },
        end: { line: 127, column: 152, offset: 4568 },
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
        start: { line: 129, column: 1, offset: 4570 },
        end: { line: 140, column: 4, offset: 4805 },
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
            start: { line: 142, column: 3, offset: 4809 },
            end: { line: 142, column: 14, offset: 4820 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 4807 },
        end: { line: 142, column: 14, offset: 4820 },
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
                start: { line: 143, column: 3, offset: 4823 },
                end: { line: 143, column: 44, offset: 4864 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 1, offset: 4821 },
            end: { line: 143, column: 46, offset: 4866 },
            indent: []
          }
        },
        {
          type: 'text',
          value: " with rubico's transducers. Create transducers via the transformation functions ",
          position: {
            start: { line: 143, column: 46, offset: 4866 },
            end: { line: 143, column: 126, offset: 4946 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 143, column: 126, offset: 4946 },
            end: { line: 143, column: 131, offset: 4951 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 143, column: 131, offset: 4951 },
            end: { line: 143, column: 133, offset: 4953 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'filter',
          position: {
            start: { line: 143, column: 133, offset: 4953 },
            end: { line: 143, column: 141, offset: 4961 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 143, column: 141, offset: 4961 },
            end: { line: 143, column: 146, offset: 4966 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'flatMap',
          position: {
            start: { line: 143, column: 146, offset: 4966 },
            end: { line: 143, column: 155, offset: 4975 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', then consume them with ',
          position: {
            start: { line: 143, column: 155, offset: 4975 },
            end: { line: 143, column: 180, offset: 5000 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 143, column: 180, offset: 5000 },
            end: { line: 143, column: 188, offset: 5008 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 143, column: 188, offset: 5008 },
            end: { line: 143, column: 192, offset: 5012 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 143, column: 192, offset: 5012 },
            end: { line: 143, column: 203, offset: 5023 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Additionally, transducers created with rubico can act on asynchronous data streams or operate asynchronously. More on this behavior ',
          position: {
            start: { line: 143, column: 203, offset: 5023 },
            end: { line: 143, column: 337, offset: 5157 },
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
                start: { line: 143, column: 338, offset: 5158 },
                end: { line: 143, column: 342, offset: 5162 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 143, column: 337, offset: 5157 },
            end: { line: 143, column: 405, offset: 5225 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 405, offset: 5225 },
            end: { line: 143, column: 406, offset: 5226 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4821 },
        end: { line: 143, column: 406, offset: 5226 },
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
        start: { line: 145, column: 1, offset: 5228 },
        end: { line: 173, column: 4, offset: 6052 },
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
          value: "You've arrived at the end of the tour. From here, you could get started with rubico in a project (",
          position: {
            start: { line: 175, column: 1, offset: 6054 },
            end: { line: 175, column: 99, offset: 6152 },
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
                start: { line: 175, column: 100, offset: 6153 },
                end: { line: 175, column: 112, offset: 6165 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 99, offset: 6152 },
            end: { line: 175, column: 129, offset: 6182 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 175, column: 129, offset: 6182 },
            end: { line: 175, column: 151, offset: 6204 },
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
                start: { line: 175, column: 152, offset: 6205 },
                end: { line: 175, column: 156, offset: 6209 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 175, column: 151, offset: 6204 },
            end: { line: 175, column: 164, offset: 6217 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 175, column: 164, offset: 6217 },
            end: { line: 175, column: 165, offset: 6218 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 6054 },
        end: { line: 175, column: 165, offset: 6218 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 176, column: 1, offset: 6219 }
  }
}
