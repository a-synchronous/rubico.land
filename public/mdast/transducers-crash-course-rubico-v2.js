export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for Rubico V2\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2023-07-15\n' +
        'updated: 2026-02-22\n' +
        'path: /blog/transducers-crash-course-rubico-v2\n' +
        'description: A crash course in transducers for Rubico v2',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 248 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 250 },
            end: { line: 10, column: 288, offset: 537 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 250 },
        end: { line: 10, column: 288, offset: 537 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 539 },
            end: { line: 12, column: 41, offset: 579 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 579 },
            end: { line: 12, column: 54, offset: 592 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 592 },
            end: { line: 12, column: 111, offset: 649 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 649 },
            end: { line: 12, column: 120, offset: 658 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 658 },
            end: { line: 12, column: 140, offset: 678 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 678 },
            end: { line: 12, column: 146, offset: 684 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 684 },
            end: { line: 12, column: 147, offset: 685 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 539 },
        end: { line: 12, column: 147, offset: 685 }
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
        start: { line: 14, column: 1, offset: 687 },
        end: { line: 24, column: 4, offset: 943 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 945 },
        end: { line: 26, column: 7, offset: 951 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 953 },
            end: { line: 28, column: 204, offset: 1156 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1156 },
            end: { line: 28, column: 210, offset: 1162 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1162 },
            end: { line: 28, column: 215, offset: 1167 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1167 },
            end: { line: 28, column: 224, offset: 1176 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1176 },
            end: { line: 28, column: 361, offset: 1313 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 953 },
        end: { line: 28, column: 361, offset: 1313 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1315 },
            end: { line: 30, column: 76, offset: 1390 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1315 },
        end: { line: 30, column: 76, offset: 1390 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1392 },
        end: { line: 32, column: 7, offset: 1398 }
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
        start: { line: 34, column: 1, offset: 1400 },
        end: { line: 49, column: 4, offset: 1746 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1748 },
            end: { line: 51, column: 236, offset: 1983 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1748 },
        end: { line: 51, column: 236, offset: 1983 }
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
        start: { line: 53, column: 1, offset: 1985 },
        end: { line: 60, column: 4, offset: 2135 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 62, column: 1, offset: 2137 },
            end: { line: 62, column: 3, offset: 2139 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 3, offset: 2139 },
            end: { line: 62, column: 12, offset: 2148 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 62, column: 12, offset: 2148 },
            end: { line: 62, column: 165, offset: 2301 }
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
                start: { line: 62, column: 166, offset: 2302 },
                end: { line: 62, column: 188, offset: 2324 }
              }
            }
          ],
          position: {
            start: { line: 62, column: 165, offset: 2301 },
            end: { line: 62, column: 284, offset: 2420 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 62, column: 284, offset: 2420 },
            end: { line: 62, column: 285, offset: 2421 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2137 },
        end: { line: 62, column: 285, offset: 2421 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 64, column: 1, offset: 2423 },
            end: { line: 64, column: 3, offset: 2425 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 64, column: 3, offset: 2425 },
            end: { line: 64, column: 15, offset: 2437 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 64, column: 15, offset: 2437 },
            end: { line: 64, column: 43, offset: 2465 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 43, offset: 2465 },
            end: { line: 64, column: 52, offset: 2474 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 64, column: 52, offset: 2474 },
            end: { line: 64, column: 73, offset: 2495 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 73, offset: 2495 },
            end: { line: 64, column: 82, offset: 2504 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 64, column: 82, offset: 2504 },
            end: { line: 64, column: 243, offset: 2665 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2423 },
        end: { line: 64, column: 243, offset: 2665 }
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
            start: { line: 66, column: 1, offset: 2667 },
            end: { line: 66, column: 38, offset: 2704 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2667 },
        end: { line: 66, column: 38, offset: 2704 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's ",
          position: {
            start: { line: 68, column: 1, offset: 2706 },
            end: { line: 68, column: 155, offset: 2860 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 155, offset: 2860 },
            end: { line: 68, column: 167, offset: 2872 }
          }
        },
        {
          type: 'text',
          value: ' module. The ',
          position: {
            start: { line: 68, column: 167, offset: 2872 },
            end: { line: 68, column: 180, offset: 2885 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 180, offset: 2885 },
            end: { line: 68, column: 192, offset: 2897 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 68, column: 192, offset: 2897 },
            end: { line: 68, column: 260, offset: 2965 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2706 },
        end: { line: 68, column: 260, offset: 2965 }
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
                        start: { line: 70, column: 5, offset: 2971 },
                        end: { line: 70, column: 19, offset: 2985 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 70, column: 4, offset: 2970 },
                    end: { line: 70, column: 42, offset: 3008 }
                  }
                }
              ],
              position: {
                start: { line: 70, column: 4, offset: 2970 },
                end: { line: 70, column: 42, offset: 3008 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 2, offset: 2968 },
            end: { line: 70, column: 42, offset: 3008 }
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
                        start: { line: 71, column: 5, offset: 3013 },
                        end: { line: 71, column: 22, offset: 3030 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 3012 },
                    end: { line: 71, column: 48, offset: 3056 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 3012 },
                end: { line: 71, column: 48, offset: 3056 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 3010 },
            end: { line: 71, column: 48, offset: 3056 }
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
                        start: { line: 72, column: 5, offset: 3061 },
                        end: { line: 72, column: 23, offset: 3079 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 3060 },
                    end: { line: 72, column: 50, offset: 3106 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 3060 },
                end: { line: 72, column: 50, offset: 3106 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 3058 },
            end: { line: 72, column: 50, offset: 3106 }
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
                        start: { line: 73, column: 5, offset: 3111 },
                        end: { line: 73, column: 23, offset: 3129 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3110 },
                    end: { line: 73, column: 50, offset: 3156 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3110 },
                end: { line: 73, column: 50, offset: 3156 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3108 },
            end: { line: 73, column: 50, offset: 3156 }
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
                        start: { line: 74, column: 5, offset: 3161 },
                        end: { line: 74, column: 27, offset: 3183 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3160 },
                    end: { line: 74, column: 58, offset: 3214 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3160 },
                end: { line: 74, column: 58, offset: 3214 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3158 },
            end: { line: 74, column: 58, offset: 3214 }
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
                        start: { line: 75, column: 5, offset: 3219 },
                        end: { line: 75, column: 24, offset: 3238 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3218 },
                    end: { line: 75, column: 52, offset: 3266 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3218 },
                end: { line: 75, column: 52, offset: 3266 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3216 },
            end: { line: 75, column: 52, offset: 3266 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 2, offset: 2968 },
        end: { line: 75, column: 52, offset: 3266 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 77, column: 1, offset: 3268 },
            end: { line: 77, column: 64, offset: 3331 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 77, column: 64, offset: 3331 },
            end: { line: 77, column: 73, offset: 3340 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 77, column: 73, offset: 3340 },
            end: { line: 77, column: 129, offset: 3396 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 77, column: 129, offset: 3396 },
            end: { line: 77, column: 140, offset: 3407 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 77, column: 140, offset: 3407 },
            end: { line: 77, column: 145, offset: 3412 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 77, column: 145, offset: 3412 },
            end: { line: 77, column: 153, offset: 3420 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 77, column: 153, offset: 3420 },
            end: { line: 77, column: 164, offset: 3431 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 3268 },
        end: { line: 77, column: 164, offset: 3431 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 79, column: 1, offset: 3433 },
            end: { line: 79, column: 51, offset: 3483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 79, column: 51, offset: 3483 },
            end: { line: 79, column: 64, offset: 3496 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 79, column: 64, offset: 3496 },
            end: { line: 79, column: 86, offset: 3518 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 3433 },
        end: { line: 79, column: 86, offset: 3518 }
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
        start: { line: 81, column: 1, offset: 3520 },
        end: { line: 105, column: 4, offset: 4207 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 107, column: 1, offset: 4209 },
            end: { line: 107, column: 77, offset: 4285 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4209 },
        end: { line: 107, column: 77, offset: 4285 }
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
        start: { line: 109, column: 1, offset: 4287 },
        end: { line: 125, column: 4, offset: 4558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 127, column: 1, offset: 4560 },
            end: { line: 127, column: 58, offset: 4617 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 127, column: 58, offset: 4617 },
            end: { line: 127, column: 69, offset: 4628 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 127, column: 69, offset: 4628 },
            end: { line: 127, column: 127, offset: 4686 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4560 },
        end: { line: 127, column: 127, offset: 4686 }
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
        start: { line: 129, column: 1, offset: 4688 },
        end: { line: 143, column: 4, offset: 4949 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers ',
          position: {
            start: { line: 145, column: 1, offset: 4951 },
            end: { line: 145, column: 146, offset: 5096 }
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
                start: { line: 145, column: 147, offset: 5097 },
                end: { line: 145, column: 151, offset: 5101 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 146, offset: 5096 },
            end: { line: 145, column: 174, offset: 5124 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 145, column: 174, offset: 5124 },
            end: { line: 145, column: 175, offset: 5125 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4951 },
        end: { line: 145, column: 175, offset: 5125 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 147, column: 1, offset: 5127 },
            end: { line: 147, column: 17, offset: 5143 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 5127 },
        end: { line: 147, column: 17, offset: 5143 }
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
                    start: { line: 148, column: 4, offset: 5147 },
                    end: { line: 148, column: 63, offset: 5206 }
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5147 },
                end: { line: 148, column: 63, offset: 5206 }
              }
            }
          ],
          position: {
            start: { line: 148, column: 2, offset: 5145 },
            end: { line: 148, column: 63, offset: 5206 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 2, offset: 5145 },
        end: { line: 148, column: 63, offset: 5206 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 150, column: 1, offset: 5208 },
            end: { line: 150, column: 15, offset: 5222 }
          }
        }
      ],
      position: {
        start: { line: 150, column: 1, offset: 5208 },
        end: { line: 150, column: 15, offset: 5222 }
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
                  value: 'https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/',
                  position: {
                    start: { line: 151, column: 4, offset: 5226 },
                    end: { line: 151, column: 102, offset: 5324 }
                  }
                }
              ],
              position: {
                start: { line: 151, column: 4, offset: 5226 },
                end: { line: 151, column: 102, offset: 5324 }
              }
            }
          ],
          position: {
            start: { line: 151, column: 2, offset: 5224 },
            end: { line: 151, column: 102, offset: 5324 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 2, offset: 5224 },
        end: { line: 151, column: 102, offset: 5324 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 152, column: 1, offset: 5325 }
  }
}