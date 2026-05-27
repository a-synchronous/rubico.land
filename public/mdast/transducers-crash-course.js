export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2026-02-22\n' +
        'updated: 2026-05-27\n' +
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
      value: 'type Reducer = (accumulator any, value any)=>(nextAccumulator Promise|any)\n' +
        '\n' +
        'type Transducer = Reducer=>Reducer',
      position: {
        start: { line: 53, column: 1, offset: 1955 },
        end: { line: 57, column: 4, offset: 2098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 59, column: 1, offset: 2100 },
            end: { line: 59, column: 3, offset: 2102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 59, column: 3, offset: 2102 },
            end: { line: 59, column: 12, offset: 2111 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 59, column: 12, offset: 2111 },
            end: { line: 59, column: 165, offset: 2264 }
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
                start: { line: 59, column: 166, offset: 2265 },
                end: { line: 59, column: 188, offset: 2287 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 165, offset: 2264 },
            end: { line: 59, column: 284, offset: 2383 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 284, offset: 2383 },
            end: { line: 59, column: 285, offset: 2384 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2100 },
        end: { line: 59, column: 285, offset: 2384 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 61, column: 1, offset: 2386 },
            end: { line: 61, column: 3, offset: 2388 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 61, column: 3, offset: 2388 },
            end: { line: 61, column: 15, offset: 2400 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 61, column: 15, offset: 2400 },
            end: { line: 61, column: 43, offset: 2428 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 43, offset: 2428 },
            end: { line: 61, column: 52, offset: 2437 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 61, column: 52, offset: 2437 },
            end: { line: 61, column: 73, offset: 2458 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 73, offset: 2458 },
            end: { line: 61, column: 82, offset: 2467 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 61, column: 82, offset: 2467 },
            end: { line: 61, column: 243, offset: 2628 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2386 },
        end: { line: 61, column: 243, offset: 2628 }
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
            start: { line: 63, column: 1, offset: 2630 },
            end: { line: 63, column: 38, offset: 2667 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2630 },
        end: { line: 63, column: 38, offset: 2667 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's ",
          position: {
            start: { line: 65, column: 1, offset: 2669 },
            end: { line: 65, column: 155, offset: 2823 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 65, column: 155, offset: 2823 },
            end: { line: 65, column: 167, offset: 2835 }
          }
        },
        {
          type: 'text',
          value: ' module. The ',
          position: {
            start: { line: 65, column: 167, offset: 2835 },
            end: { line: 65, column: 180, offset: 2848 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 65, column: 180, offset: 2848 },
            end: { line: 65, column: 192, offset: 2860 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 65, column: 192, offset: 2860 },
            end: { line: 65, column: 260, offset: 2928 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2669 },
        end: { line: 65, column: 260, offset: 2928 }
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
                        start: { line: 67, column: 5, offset: 2934 },
                        end: { line: 67, column: 19, offset: 2948 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 4, offset: 2933 },
                    end: { line: 67, column: 42, offset: 2971 }
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2933 },
                end: { line: 67, column: 42, offset: 2971 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 2, offset: 2931 },
            end: { line: 67, column: 42, offset: 2971 }
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
                        start: { line: 68, column: 5, offset: 2976 },
                        end: { line: 68, column: 22, offset: 2993 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 68, column: 4, offset: 2975 },
                    end: { line: 68, column: 48, offset: 3019 }
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2975 },
                end: { line: 68, column: 48, offset: 3019 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 2, offset: 2973 },
            end: { line: 68, column: 48, offset: 3019 }
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
                        start: { line: 69, column: 5, offset: 3024 },
                        end: { line: 69, column: 23, offset: 3042 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 69, column: 4, offset: 3023 },
                    end: { line: 69, column: 50, offset: 3069 }
                  }
                }
              ],
              position: {
                start: { line: 69, column: 4, offset: 3023 },
                end: { line: 69, column: 50, offset: 3069 }
              }
            }
          ],
          position: {
            start: { line: 69, column: 2, offset: 3021 },
            end: { line: 69, column: 50, offset: 3069 }
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
                        start: { line: 70, column: 5, offset: 3074 },
                        end: { line: 70, column: 23, offset: 3092 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 70, column: 4, offset: 3073 },
                    end: { line: 70, column: 50, offset: 3119 }
                  }
                }
              ],
              position: {
                start: { line: 70, column: 4, offset: 3073 },
                end: { line: 70, column: 50, offset: 3119 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 2, offset: 3071 },
            end: { line: 70, column: 50, offset: 3119 }
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
                        start: { line: 71, column: 5, offset: 3124 },
                        end: { line: 71, column: 27, offset: 3146 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 3123 },
                    end: { line: 71, column: 58, offset: 3177 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 3123 },
                end: { line: 71, column: 58, offset: 3177 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 3121 },
            end: { line: 71, column: 58, offset: 3177 }
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
                        start: { line: 72, column: 5, offset: 3182 },
                        end: { line: 72, column: 24, offset: 3201 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 3181 },
                    end: { line: 72, column: 52, offset: 3229 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 3181 },
                end: { line: 72, column: 52, offset: 3229 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 3179 },
            end: { line: 72, column: 52, offset: 3229 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 2, offset: 2931 },
        end: { line: 72, column: 52, offset: 3229 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 74, column: 1, offset: 3231 },
            end: { line: 74, column: 64, offset: 3294 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 74, column: 64, offset: 3294 },
            end: { line: 74, column: 73, offset: 3303 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 74, column: 73, offset: 3303 },
            end: { line: 74, column: 129, offset: 3359 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 74, column: 129, offset: 3359 },
            end: { line: 74, column: 140, offset: 3370 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 74, column: 140, offset: 3370 },
            end: { line: 74, column: 145, offset: 3375 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 74, column: 145, offset: 3375 },
            end: { line: 74, column: 153, offset: 3383 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 74, column: 153, offset: 3383 },
            end: { line: 74, column: 164, offset: 3394 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3231 },
        end: { line: 74, column: 164, offset: 3394 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 76, column: 1, offset: 3396 },
            end: { line: 76, column: 51, offset: 3446 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 76, column: 51, offset: 3446 },
            end: { line: 76, column: 64, offset: 3459 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 76, column: 64, offset: 3459 },
            end: { line: 76, column: 86, offset: 3481 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3396 },
        end: { line: 76, column: 86, offset: 3481 }
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
        start: { line: 78, column: 1, offset: 3483 },
        end: { line: 102, column: 4, offset: 4170 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources such as async generators.",
          position: {
            start: { line: 104, column: 1, offset: 4172 },
            end: { line: 104, column: 102, offset: 4273 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 4172 },
        end: { line: 104, column: 102, offset: 4273 }
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
        'const array = await transform(myAsyncSource(), Transducer.passthrough, [])\n' +
        '\n' +
        'console.log(array)',
      position: {
        start: { line: 106, column: 1, offset: 4275 },
        end: { line: 118, column: 4, offset: 4526 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above is equivalent to the below with vanilla JavaScript ',
          position: {
            start: { line: 120, column: 1, offset: 4528 },
            end: { line: 120, column: 62, offset: 4589 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 120, column: 62, offset: 4589 },
            end: { line: 120, column: 73, offset: 4600 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 120, column: 73, offset: 4600 },
            end: { line: 120, column: 74, offset: 4601 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4528 },
        end: { line: 120, column: 74, offset: 4601 }
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
        start: { line: 122, column: 1, offset: 4603 },
        end: { line: 136, column: 4, offset: 4864 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Rubico's transducers are simple and useful for creating memory efficient data transformations. Get started with transducers at the ",
          position: {
            start: { line: 138, column: 1, offset: 4866 },
            end: { line: 138, column: 132, offset: 4997 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/Transducer.map',
          children: [
            {
              type: 'text',
              value: 'docs',
              position: {
                start: { line: 138, column: 133, offset: 4998 },
                end: { line: 138, column: 137, offset: 5002 }
              }
            }
          ],
          position: {
            start: { line: 138, column: 132, offset: 4997 },
            end: { line: 138, column: 160, offset: 5025 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 138, column: 160, offset: 5025 },
            end: { line: 138, column: 161, offset: 5026 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4866 },
        end: { line: 138, column: 161, offset: 5026 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 140, column: 1, offset: 5028 },
            end: { line: 140, column: 17, offset: 5044 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5028 },
        end: { line: 140, column: 17, offset: 5044 }
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
                    start: { line: 141, column: 4, offset: 5048 },
                    end: { line: 141, column: 63, offset: 5107 }
                  }
                }
              ],
              position: {
                start: { line: 141, column: 4, offset: 5048 },
                end: { line: 141, column: 63, offset: 5107 }
              }
            }
          ],
          position: {
            start: { line: 141, column: 2, offset: 5046 },
            end: { line: 141, column: 63, offset: 5107 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 2, offset: 5046 },
        end: { line: 141, column: 63, offset: 5107 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 143, column: 1, offset: 5109 }
  }
}