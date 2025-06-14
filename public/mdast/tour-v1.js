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
                      value: '[a]synchrony',
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
          value: '[a]synchrony',
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
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'Stop worrying about async',
              position: {
                start: { line: 26, column: 3, offset: 660 },
                end: { line: 26, column: 28, offset: 685 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 1, offset: 658 },
            end: { line: 26, column: 30, offset: 687 }
          }
        },
        {
          type: 'text',
          value: '. Pass synchronous or asynchronous functions to any rubico operator - all promises are resolved for their promised value before continuing. Run things in parallel without having to call ',
          position: {
            start: { line: 26, column: 30, offset: 687 },
            end: { line: 26, column: 216, offset: 873 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise.all',
          position: {
            start: { line: 26, column: 216, offset: 873 },
            end: { line: 26, column: 229, offset: 886 }
          }
        },
        {
          type: 'text',
          value: ' on ',
          position: {
            start: { line: 26, column: 229, offset: 886 },
            end: { line: 26, column: 233, offset: 890 }
          }
        },
        {
          type: 'inlineCode',
          value: 'someArray.map(...)',
          position: {
            start: { line: 26, column: 233, offset: 890 },
            end: { line: 26, column: 253, offset: 910 }
          }
        },
        {
          type: 'text',
          value: '. For more on this behavior, see this ',
          position: {
            start: { line: 26, column: 253, offset: 910 },
            end: { line: 26, column: 291, offset: 948 }
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
                start: { line: 26, column: 292, offset: 949 },
                end: { line: 26, column: 301, offset: 958 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 291, offset: 948 },
            end: { line: 26, column: 382, offset: 1039 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 26, column: 382, offset: 1039 },
            end: { line: 26, column: 383, offset: 1040 }
          }
        }
      ],
      position: {
        start: { line: 26, column: 1, offset: 658 },
        end: { line: 26, column: 383, offset: 1040 }
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
        start: { line: 28, column: 1, offset: 1042 },
        end: { line: 36, column: 4, offset: 1232 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Press the ',
          position: {
            start: { line: 38, column: 1, offset: 1234 },
            end: { line: 38, column: 11, offset: 1244 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 38, column: 11, offset: 1244 },
            end: { line: 38, column: 16, offset: 1249 }
          }
        },
        {
          type: 'text',
          value: ' button to make five requests using ',
          position: {
            start: { line: 38, column: 16, offset: 1249 },
            end: { line: 38, column: 52, offset: 1285 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 38, column: 52, offset: 1285 },
            end: { line: 38, column: 59, offset: 1292 }
          }
        },
        {
          type: 'text',
          value: ', parse five request bodies, and log five todos out to the console - all in parallel.',
          position: {
            start: { line: 38, column: 59, offset: 1292 },
            end: { line: 38, column: 144, offset: 1377 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1234 },
        end: { line: 38, column: 144, offset: 1377 }
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
            start: { line: 40, column: 3, offset: 1381 },
            end: { line: 40, column: 14, offset: 1392 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1379 },
        end: { line: 40, column: 14, offset: 1392 }
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
                start: { line: 41, column: 3, offset: 1395 },
                end: { line: 41, column: 33, offset: 1425 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 1, offset: 1393 },
            end: { line: 41, column: 35, offset: 1427 }
          }
        },
        {
          type: 'text',
          value: ". Use rubico's operators to create compositions of small, reusable functions. Add functionality to your program by composing the desired function - rubico gives you the tools to make this as simple and seamless as possible.",
          position: {
            start: { line: 41, column: 35, offset: 1427 },
            end: { line: 41, column: 258, offset: 1650 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1393 },
        end: { line: 41, column: 258, offset: 1650 }
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
        start: { line: 43, column: 1, offset: 1652 },
        end: { line: 63, column: 4, offset: 2088 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 65, column: 1, offset: 2090 },
            end: { line: 65, column: 5, offset: 2094 }
          }
        },
        {
          type: 'inlineCode',
          value: 'run',
          position: {
            start: { line: 65, column: 5, offset: 2094 },
            end: { line: 65, column: 10, offset: 2099 }
          }
        },
        {
          type: 'text',
          value: ' button above executes the pipeline ',
          position: {
            start: { line: 65, column: 10, offset: 2099 },
            end: { line: 65, column: 46, offset: 2135 }
          }
        },
        {
          type: 'inlineCode',
          value: 'doMathsWithLogs',
          position: {
            start: { line: 65, column: 46, offset: 2135 },
            end: { line: 65, column: 63, offset: 2152 }
          }
        },
        {
          type: 'text',
          value: ' that logs a number out to the console, then parallelizes its identity operation and another pipeline into an object ',
          position: {
            start: { line: 65, column: 63, offset: 2152 },
            end: { line: 65, column: 180, offset: 2269 }
          }
        },
        {
          type: 'inlineCode',
          value: '{ number, numberSquared }',
          position: {
            start: { line: 65, column: 180, offset: 2269 },
            end: { line: 65, column: 207, offset: 2296 }
          }
        },
        {
          type: 'text',
          value: ". The above example also introduces rubico's ",
          position: {
            start: { line: 65, column: 207, offset: 2296 },
            end: { line: 65, column: 252, offset: 2341 }
          }
        },
        {
          type: 'inlineCode',
          value: 'curry',
          position: {
            start: { line: 65, column: 252, offset: 2341 },
            end: { line: 65, column: 259, offset: 2348 }
          }
        },
        {
          type: 'text',
          value: ' and placeholder ',
          position: {
            start: { line: 65, column: 259, offset: 2348 },
            end: { line: 65, column: 276, offset: 2365 }
          }
        },
        {
          type: 'inlineCode',
          value: '__',
          position: {
            start: { line: 65, column: 276, offset: 2365 },
            end: { line: 65, column: 280, offset: 2369 }
          }
        },
        {
          type: 'text',
          value: '; use these to compose any function by creating a partially applied variant suited for the task at hand.',
          position: {
            start: { line: 65, column: 280, offset: 2369 },
            end: { line: 65, column: 384, offset: 2473 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2090 },
        end: { line: 65, column: 384, offset: 2473 }
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
            start: { line: 67, column: 3, offset: 2477 },
            end: { line: 67, column: 15, offset: 2489 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2475 },
        end: { line: 67, column: 15, offset: 2489 }
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
                start: { line: 68, column: 3, offset: 2492 },
                end: { line: 68, column: 38, offset: 2527 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2490 },
            end: { line: 68, column: 40, offset: 2529 }
          }
        },
        {
          type: 'text',
          value: '. Any rubico method should support data types beyond arrays such as async iterables, strings, sets, maps, binary arrays, and object values.',
          position: {
            start: { line: 68, column: 40, offset: 2529 },
            end: { line: 68, column: 179, offset: 2668 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2490 },
        end: { line: 68, column: 179, offset: 2668 }
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
        start: { line: 70, column: 1, offset: 2670 },
        end: { line: 92, column: 4, offset: 3203 }
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
            start: { line: 94, column: 3, offset: 3207 },
            end: { line: 94, column: 15, offset: 3219 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3205 },
        end: { line: 94, column: 15, offset: 3219 }
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
                start: { line: 95, column: 3, offset: 3222 },
                end: { line: 95, column: 52, offset: 3271 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 1, offset: 3220 },
            end: { line: 95, column: 54, offset: 3273 }
          }
        },
        {
          type: 'text',
          value: " by composing predicates with rubico's logical operators. Below depicts vanilla JavaScript operators and their rubico analogs.",
          position: {
            start: { line: 95, column: 54, offset: 3273 },
            end: { line: 95, column: 180, offset: 3399 }
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3220 },
        end: { line: 95, column: 180, offset: 3399 }
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
                    start: { line: 97, column: 3, offset: 3403 },
                    end: { line: 97, column: 26, offset: 3426 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a ? b : c',
                  position: {
                    start: { line: 97, column: 26, offset: 3426 },
                    end: { line: 97, column: 37, offset: 3437 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 97, column: 37, offset: 3437 },
                    end: { line: 97, column: 40, offset: 3440 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'switchCase([f, g, h])',
                  position: {
                    start: { line: 97, column: 40, offset: 3440 },
                    end: { line: 97, column: 63, offset: 3463 }
                  }
                }
              ],
              position: {
                start: { line: 97, column: 3, offset: 3403 },
                end: { line: 97, column: 63, offset: 3463 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 1, offset: 3401 },
            end: { line: 97, column: 63, offset: 3463 }
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
                    start: { line: 98, column: 3, offset: 3466 },
                    end: { line: 98, column: 16, offset: 3479 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a && b',
                  position: {
                    start: { line: 98, column: 16, offset: 3479 },
                    end: { line: 98, column: 24, offset: 3487 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 98, column: 24, offset: 3487 },
                    end: { line: 98, column: 27, offset: 3490 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'and([f, g])',
                  position: {
                    start: { line: 98, column: 27, offset: 3490 },
                    end: { line: 98, column: 40, offset: 3503 }
                  }
                }
              ],
              position: {
                start: { line: 98, column: 3, offset: 3466 },
                end: { line: 98, column: 40, offset: 3503 }
              }
            }
          ],
          position: {
            start: { line: 98, column: 1, offset: 3464 },
            end: { line: 98, column: 40, offset: 3503 }
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
                    start: { line: 99, column: 3, offset: 3506 },
                    end: { line: 99, column: 15, offset: 3518 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a || b',
                  position: {
                    start: { line: 99, column: 15, offset: 3518 },
                    end: { line: 99, column: 23, offset: 3526 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 99, column: 23, offset: 3526 },
                    end: { line: 99, column: 26, offset: 3529 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'or([f, g])',
                  position: {
                    start: { line: 99, column: 26, offset: 3529 },
                    end: { line: 99, column: 38, offset: 3541 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 3, offset: 3506 },
                end: { line: 99, column: 38, offset: 3541 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 1, offset: 3504 },
            end: { line: 99, column: 38, offset: 3541 }
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
                    start: { line: 100, column: 3, offset: 3544 },
                    end: { line: 100, column: 16, offset: 3557 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '!a',
                  position: {
                    start: { line: 100, column: 16, offset: 3557 },
                    end: { line: 100, column: 20, offset: 3561 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 100, column: 20, offset: 3561 },
                    end: { line: 100, column: 23, offset: 3564 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'not(f)',
                  position: {
                    start: { line: 100, column: 23, offset: 3564 },
                    end: { line: 100, column: 31, offset: 3572 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 3, offset: 3544 },
                end: { line: 100, column: 31, offset: 3572 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 1, offset: 3542 },
            end: { line: 100, column: 31, offset: 3572 }
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
                    start: { line: 101, column: 3, offset: 3575 },
                    end: { line: 101, column: 13, offset: 3585 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a === b',
                  position: {
                    start: { line: 101, column: 13, offset: 3585 },
                    end: { line: 101, column: 22, offset: 3594 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 101, column: 22, offset: 3594 },
                    end: { line: 101, column: 25, offset: 3597 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'eq(f, g)',
                  position: {
                    start: { line: 101, column: 25, offset: 3597 },
                    end: { line: 101, column: 35, offset: 3607 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 3, offset: 3575 },
                end: { line: 101, column: 35, offset: 3607 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 1, offset: 3573 },
            end: { line: 101, column: 35, offset: 3607 }
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
                    start: { line: 102, column: 3, offset: 3610 },
                    end: { line: 102, column: 17, offset: 3624 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a > b',
                  position: {
                    start: { line: 102, column: 17, offset: 3624 },
                    end: { line: 102, column: 24, offset: 3631 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 102, column: 24, offset: 3631 },
                    end: { line: 102, column: 27, offset: 3634 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gt(f, g)',
                  position: {
                    start: { line: 102, column: 27, offset: 3634 },
                    end: { line: 102, column: 37, offset: 3644 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 3, offset: 3610 },
                end: { line: 102, column: 37, offset: 3644 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 1, offset: 3608 },
            end: { line: 102, column: 37, offset: 3644 }
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
                    start: { line: 103, column: 3, offset: 3647 },
                    end: { line: 103, column: 14, offset: 3658 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a < b',
                  position: {
                    start: { line: 103, column: 14, offset: 3658 },
                    end: { line: 103, column: 21, offset: 3665 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 103, column: 21, offset: 3665 },
                    end: { line: 103, column: 24, offset: 3668 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lt(f, g)',
                  position: {
                    start: { line: 103, column: 24, offset: 3668 },
                    end: { line: 103, column: 34, offset: 3678 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 3, offset: 3647 },
                end: { line: 103, column: 34, offset: 3678 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 1, offset: 3645 },
            end: { line: 103, column: 34, offset: 3678 }
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
                    start: { line: 104, column: 3, offset: 3681 },
                    end: { line: 104, column: 26, offset: 3704 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a >= b',
                  position: {
                    start: { line: 104, column: 26, offset: 3704 },
                    end: { line: 104, column: 34, offset: 3712 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 104, column: 34, offset: 3712 },
                    end: { line: 104, column: 37, offset: 3715 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'gte(f, g)',
                  position: {
                    start: { line: 104, column: 37, offset: 3715 },
                    end: { line: 104, column: 48, offset: 3726 }
                  }
                }
              ],
              position: {
                start: { line: 104, column: 3, offset: 3681 },
                end: { line: 104, column: 48, offset: 3726 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 1, offset: 3679 },
            end: { line: 104, column: 48, offset: 3726 }
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
                    start: { line: 105, column: 3, offset: 3729 },
                    end: { line: 105, column: 23, offset: 3749 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a <= b',
                  position: {
                    start: { line: 105, column: 23, offset: 3749 },
                    end: { line: 105, column: 31, offset: 3757 }
                  }
                },
                {
                  type: 'text',
                  value: ' → ',
                  position: {
                    start: { line: 105, column: 31, offset: 3757 },
                    end: { line: 105, column: 34, offset: 3760 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'lte(f, g)',
                  position: {
                    start: { line: 105, column: 34, offset: 3760 },
                    end: { line: 105, column: 45, offset: 3771 }
                  }
                }
              ],
              position: {
                start: { line: 105, column: 3, offset: 3729 },
                end: { line: 105, column: 45, offset: 3771 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 1, offset: 3727 },
            end: { line: 105, column: 45, offset: 3771 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3401 },
        end: { line: 105, column: 45, offset: 3771 }
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
        start: { line: 107, column: 1, offset: 3773 },
        end: { line: 131, column: 4, offset: 4194 }
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
            start: { line: 133, column: 3, offset: 4198 },
            end: { line: 133, column: 17, offset: 4212 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4196 },
        end: { line: 133, column: 17, offset: 4212 }
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
                start: { line: 134, column: 3, offset: 4215 },
                end: { line: 134, column: 27, offset: 4239 }
              }
            }
          ],
          position: {
            start: { line: 134, column: 1, offset: 4213 },
            end: { line: 134, column: 29, offset: 4241 }
          }
        },
        {
          type: 'text',
          value: ". rubico's ",
          position: {
            start: { line: 134, column: 29, offset: 4241 },
            end: { line: 134, column: 40, offset: 4252 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 134, column: 40, offset: 4252 },
            end: { line: 134, column: 50, offset: 4262 }
          }
        },
        {
          type: 'text',
          value: ' catches both errors and rejected Promises. Wrap your application pipeline in a ',
          position: {
            start: { line: 134, column: 50, offset: 4262 },
            end: { line: 134, column: 130, offset: 4342 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tryCatch',
          position: {
            start: { line: 134, column: 130, offset: 4342 },
            end: { line: 134, column: 140, offset: 4352 }
          }
        },
        {
          type: 'text',
          value: ' and never worry about uncaught errors or unhandled promise rejections again.',
          position: {
            start: { line: 134, column: 140, offset: 4352 },
            end: { line: 134, column: 217, offset: 4429 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 4213 },
        end: { line: 134, column: 217, offset: 4429 }
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
        start: { line: 136, column: 1, offset: 4431 },
        end: { line: 151, column: 4, offset: 4819 }
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
            start: { line: 153, column: 3, offset: 4823 },
            end: { line: 153, column: 14, offset: 4834 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4821 },
        end: { line: 153, column: 14, offset: 4834 }
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
                start: { line: 154, column: 3, offset: 4837 },
                end: { line: 154, column: 44, offset: 4878 }
              }
            }
          ],
          position: {
            start: { line: 154, column: 1, offset: 4835 },
            end: { line: 154, column: 46, offset: 4880 }
          }
        },
        {
          type: 'text',
          value: ". Easily express complex transformations in a memory efficient way with rubico's transducer functionality built into its data transformation functions. Read more on rubico's transducers ",
          position: {
            start: { line: 154, column: 46, offset: 4880 },
            end: { line: 154, column: 232, offset: 5066 }
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
                start: { line: 154, column: 233, offset: 5067 },
                end: { line: 154, column: 237, offset: 5071 }
              }
            }
          ],
          position: {
            start: { line: 154, column: 232, offset: 5066 },
            end: { line: 154, column: 273, offset: 5107 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 154, column: 273, offset: 5107 },
            end: { line: 154, column: 274, offset: 5108 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 4835 },
        end: { line: 154, column: 274, offset: 5108 }
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
        start: { line: 156, column: 1, offset: 5110 },
        end: { line: 182, column: 4, offset: 5787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "You've arrived at the end of the tour. From here, you could get started with rubico in a project (",
          position: {
            start: { line: 184, column: 1, offset: 5789 },
            end: { line: 184, column: 99, offset: 5887 }
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
                start: { line: 184, column: 100, offset: 5888 },
                end: { line: 184, column: 112, offset: 5900 }
              }
            }
          ],
          position: {
            start: { line: 184, column: 99, offset: 5887 },
            end: { line: 184, column: 129, offset: 5917 }
          }
        },
        {
          type: 'text',
          value: ') or read more at the ',
          position: {
            start: { line: 184, column: 129, offset: 5917 },
            end: { line: 184, column: 151, offset: 5939 }
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
                start: { line: 184, column: 152, offset: 5940 },
                end: { line: 184, column: 156, offset: 5944 }
              }
            }
          ],
          position: {
            start: { line: 184, column: 151, offset: 5939 },
            end: { line: 184, column: 164, offset: 5952 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 184, column: 164, offset: 5952 },
            end: { line: 184, column: 165, offset: 5953 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 5789 },
        end: { line: 184, column: 165, offset: 5953 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 185, column: 1, offset: 5954 }
  }
}