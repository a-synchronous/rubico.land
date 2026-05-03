export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2026-02-22\n' +
        'updated: 2026-02-22\n' +
        'path: /blog/transducers-crash-course\n' +
        'description: A crash course on Rubico transducers.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 218 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 220 },
            end: { line: 10, column: 288, offset: 507 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 220 },
        end: { line: 10, column: 288, offset: 507 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 509 },
            end: { line: 12, column: 41, offset: 549 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 549 },
            end: { line: 12, column: 54, offset: 562 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 562 },
            end: { line: 12, column: 111, offset: 619 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 619 },
            end: { line: 12, column: 120, offset: 628 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 628 },
            end: { line: 12, column: 140, offset: 648 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 648 },
            end: { line: 12, column: 146, offset: 654 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 654 },
            end: { line: 12, column: 147, offset: 655 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 509 },
        end: { line: 12, column: 147, offset: 655 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        'const transformed = manyNumbers.filter(isOdd).map(square)\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 14, column: 1, offset: 657 },
        end: { line: 24, column: 4, offset: 913 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 915 },
        end: { line: 26, column: 7, offset: 921 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 923 },
            end: { line: 28, column: 204, offset: 1126 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1126 },
            end: { line: 28, column: 210, offset: 1132 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1132 },
            end: { line: 28, column: 215, offset: 1137 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1137 },
            end: { line: 28, column: 224, offset: 1146 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1146 },
            end: { line: 28, column: 361, offset: 1283 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 923 },
        end: { line: 28, column: 361, offset: 1283 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1285 },
            end: { line: 30, column: 76, offset: 1360 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1285 },
        end: { line: 30, column: 76, offset: 1360 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1362 },
        end: { line: 32, column: 7, offset: 1368 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        'const squaredOdds = compose([\n' +
        '  Transducer.filter(isOdd),\n' +
        '  Transducer.map(square),\n' +
        '])\n' +
        '\n' +
        'const transformed = transform(manyNumbers, squaredOdds, [])\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 34, column: 1, offset: 1370 },
        end: { line: 49, column: 4, offset: 1716 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1718 },
            end: { line: 51, column: 236, offset: 1953 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1718 },
        end: { line: 51, column: 236, offset: 1953 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Reducer = (\n' +
        '  accumulator any,\n' +
        '  value any,\n' +
        ')=>(nextAccumulator Promise|any)\n' +
        '\n' +
        'type Transducer = Reducer=>Reducer',
      position: {
        start: { line: 53, column: 1, offset: 1955 },
        end: { line: 60, column: 4, offset: 2105 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 62, column: 1, offset: 2107 },
            end: { line: 62, column: 3, offset: 2109 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 3, offset: 2109 },
            end: { line: 62, column: 12, offset: 2118 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 62, column: 12, offset: 2118 },
            end: { line: 62, column: 165, offset: 2271 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
          children: [
            {
              type: 'text',
              value: 'Array.prototype.reduce',
              position: {
                start: { line: 62, column: 166, offset: 2272 },
                end: { line: 62, column: 188, offset: 2294 }
              }
            }
          ],
          position: {
            start: { line: 62, column: 165, offset: 2271 },
            end: { line: 62, column: 284, offset: 2390 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 62, column: 284, offset: 2390 },
            end: { line: 62, column: 285, offset: 2391 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2107 },
        end: { line: 62, column: 285, offset: 2391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 64, column: 1, offset: 2393 },
            end: { line: 64, column: 3, offset: 2395 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 64, column: 3, offset: 2395 },
            end: { line: 64, column: 15, offset: 2407 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 64, column: 15, offset: 2407 },
            end: { line: 64, column: 43, offset: 2435 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 43, offset: 2435 },
            end: { line: 64, column: 52, offset: 2444 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 64, column: 52, offset: 2444 },
            end: { line: 64, column: 73, offset: 2465 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 73, offset: 2465 },
            end: { line: 64, column: 82, offset: 2474 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 64, column: 82, offset: 2474 },
            end: { line: 64, column: 243, offset: 2635 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2393 },
        end: { line: 64, column: 243, offset: 2635 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/dominoes.png',
          alt: 'dominoes.png',
          position: {
            start: { line: 66, column: 1, offset: 2637 },
            end: { line: 66, column: 38, offset: 2674 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2637 },
        end: { line: 66, column: 38, offset: 2674 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's ",
          position: {
            start: { line: 68, column: 1, offset: 2676 },
            end: { line: 68, column: 155, offset: 2830 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 155, offset: 2830 },
            end: { line: 68, column: 167, offset: 2842 }
          }
        },
        {
          type: 'text',
          value: ' module. The ',
          position: {
            start: { line: 68, column: 167, offset: 2842 },
            end: { line: 68, column: 180, offset: 2855 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 180, offset: 2855 },
            end: { line: 68, column: 192, offset: 2867 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 68, column: 192, offset: 2867 },
            end: { line: 68, column: 260, offset: 2935 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2676 },
        end: { line: 68, column: 260, offset: 2935 }
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
                  type: 'link',
                  title: null,
                  url: '/docs/Transducer.map',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.map',
                      position: {
                        start: { line: 70, column: 5, offset: 2941 },
                        end: { line: 70, column: 19, offset: 2955 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 70, column: 4, offset: 2940 },
                    end: { line: 70, column: 42, offset: 2978 }
                  }
                }
              ],
              position: {
                start: { line: 70, column: 4, offset: 2940 },
                end: { line: 70, column: 42, offset: 2978 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 2, offset: 2938 },
            end: { line: 70, column: 42, offset: 2978 }
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
                  url: '/docs/Transducer.filter',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.filter',
                      position: {
                        start: { line: 71, column: 5, offset: 2983 },
                        end: { line: 71, column: 22, offset: 3000 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 2982 },
                    end: { line: 71, column: 48, offset: 3026 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 2982 },
                end: { line: 71, column: 48, offset: 3026 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 2980 },
            end: { line: 71, column: 48, offset: 3026 }
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
                  url: '/docs/Transducer.flatMap',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.flatMap',
                      position: {
                        start: { line: 72, column: 5, offset: 3031 },
                        end: { line: 72, column: 23, offset: 3049 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 3030 },
                    end: { line: 72, column: 50, offset: 3076 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 3030 },
                end: { line: 72, column: 50, offset: 3076 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 3028 },
            end: { line: 72, column: 50, offset: 3076 }
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
                  url: '/docs/Transducer.forEach',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.forEach',
                      position: {
                        start: { line: 73, column: 5, offset: 3081 },
                        end: { line: 73, column: 23, offset: 3099 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3080 },
                    end: { line: 73, column: 50, offset: 3126 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3080 },
                end: { line: 73, column: 50, offset: 3126 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3078 },
            end: { line: 73, column: 50, offset: 3126 }
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
                  url: '/docs/Transducer.passthrough',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.passthrough',
                      position: {
                        start: { line: 74, column: 5, offset: 3131 },
                        end: { line: 74, column: 27, offset: 3153 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3130 },
                    end: { line: 74, column: 58, offset: 3184 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3130 },
                end: { line: 74, column: 58, offset: 3184 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3128 },
            end: { line: 74, column: 58, offset: 3184 }
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
                  url: '/docs/Transducer.tryCatch',
                  children: [
                    {
                      type: 'text',
                      value: 'Transducer.tryCatch',
                      position: {
                        start: { line: 75, column: 5, offset: 3189 },
                        end: { line: 75, column: 24, offset: 3208 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3188 },
                    end: { line: 75, column: 52, offset: 3236 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3188 },
                end: { line: 75, column: 52, offset: 3236 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3186 },
            end: { line: 75, column: 52, offset: 3236 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 2, offset: 2938 },
        end: { line: 75, column: 52, offset: 3236 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 77, column: 1, offset: 3238 },
            end: { line: 77, column: 64, offset: 3301 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 77, column: 64, offset: 3301 },
            end: { line: 77, column: 73, offset: 3310 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 77, column: 73, offset: 3310 },
            end: { line: 77, column: 129, offset: 3366 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 77, column: 129, offset: 3366 },
            end: { line: 77, column: 140, offset: 3377 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 77, column: 140, offset: 3377 },
            end: { line: 77, column: 145, offset: 3382 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 77, column: 145, offset: 3382 },
            end: { line: 77, column: 153, offset: 3390 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 77, column: 153, offset: 3390 },
            end: { line: 77, column: 164, offset: 3401 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 3238 },
        end: { line: 77, column: 164, offset: 3401 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 79, column: 1, offset: 3403 },
            end: { line: 79, column: 51, offset: 3453 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 79, column: 51, offset: 3453 },
            end: { line: 79, column: 64, offset: 3466 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 79, column: 64, offset: 3466 },
            end: { line: 79, column: 86, offset: 3488 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 3403 },
        end: { line: 79, column: 86, offset: 3488 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const square = number => number ** 2\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const squaredOdds = compose([\n' +
        '  Transducer.filter(isOdd),\n' +
        '  Transducer.map(square),\n' +
        '])\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        "// use the transducer squaredOdds with Rubico's transform\n" +
        'const transformedWithRubicoTransform = transform(manyNumbers, squaredOdds, [])\n' +
        '\n' +
        'console.log(transformedWithRubicoTransform)\n' +
        '\n' +
        'const arrayConcat = (array, value) => array.concat(value)\n' +
        '\n' +
        '// use the transducer squaredOdds with vanilla JavaScript\n' +
        'const transformedWithArrayReduce =\n' +
        '  manyNumbers.reduce(squaredOdds(arrayConcat), [])\n' +
        '\n' +
        'console.log(transformedWithArrayReduce)',
      position: {
        start: { line: 81, column: 1, offset: 3490 },
        end: { line: 105, column: 4, offset: 4177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 107, column: 1, offset: 4179 },
            end: { line: 107, column: 77, offset: 4255 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4179 },
        end: { line: 107, column: 77, offset: 4255 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myAsyncSource = async function* () {\n' +
        '  let number = 0\n' +
        '  while (number < 1000) {\n' +
        '    yield number\n' +
        '    number += 1\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const transformed = await transform(\n' +
        '  myAsyncSource(),\n' +
        '  Transducer.passthrough,\n' +
        '  []\n' +
        ')\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 109, column: 1, offset: 4257 },
        end: { line: 125, column: 4, offset: 4528 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 127, column: 1, offset: 4530 },
            end: { line: 127, column: 58, offset: 4587 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 127, column: 58, offset: 4587 },
            end: { line: 127, column: 69, offset: 4598 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 127, column: 69, offset: 4598 },
            end: { line: 127, column: 127, offset: 4656 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4530 },
        end: { line: 127, column: 127, offset: 4656 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myAsyncSource = async function* () {\n' +
        '  let number = 0\n' +
        '  while (number < 1000) {\n' +
        '    yield number\n' +
        '    number += 1\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const array = []\n' +
        'for await (const number of myAsyncSource()) {\n' +
        '  array.push(number)\n' +
        '}\n' +
        'console.log(array)',
      position: {
        start: { line: 129, column: 1, offset: 4658 },
        end: { line: 143, column: 4, offset: 4919 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers ',
          position: {
            start: { line: 145, column: 1, offset: 4921 },
            end: { line: 145, column: 146, offset: 5066 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/Transducer.map',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 145, column: 147, offset: 5067 },
                end: { line: 145, column: 151, offset: 5071 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 146, offset: 5066 },
            end: { line: 145, column: 174, offset: 5094 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 145, column: 174, offset: 5094 },
            end: { line: 145, column: 175, offset: 5095 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4921 },
        end: { line: 145, column: 175, offset: 5095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 147, column: 1, offset: 5097 },
            end: { line: 147, column: 17, offset: 5113 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 5097 },
        end: { line: 147, column: 17, offset: 5113 }
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
                  value: 'https://tgvashworth.com/2014/08/31/csp-and-transducers.html',
                  position: {
                    start: { line: 148, column: 4, offset: 5117 },
                    end: { line: 148, column: 63, offset: 5176 }
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5117 },
                end: { line: 148, column: 63, offset: 5176 }
              }
            }
          ],
          position: {
            start: { line: 148, column: 2, offset: 5115 },
            end: { line: 148, column: 63, offset: 5176 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 2, offset: 5115 },
        end: { line: 148, column: 63, offset: 5176 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 150, column: 1, offset: 5178 }
  }
}