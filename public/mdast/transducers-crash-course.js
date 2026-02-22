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
        'description: A crash course on Rubico transducers\n' +
        'image: /assets/dominoes.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 245 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 11, column: 1, offset: 247 },
            end: { line: 11, column: 288, offset: 534 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 247 },
        end: { line: 11, column: 288, offset: 534 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 13, column: 1, offset: 536 },
            end: { line: 13, column: 41, offset: 576 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 13, column: 41, offset: 576 },
            end: { line: 13, column: 54, offset: 589 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 13, column: 54, offset: 589 },
            end: { line: 13, column: 111, offset: 646 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 13, column: 111, offset: 646 },
            end: { line: 13, column: 120, offset: 655 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 13, column: 120, offset: 655 },
            end: { line: 13, column: 140, offset: 675 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 13, column: 140, offset: 675 },
            end: { line: 13, column: 146, offset: 681 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 13, column: 146, offset: 681 },
            end: { line: 13, column: 147, offset: 682 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 536 },
        end: { line: 13, column: 147, offset: 682 }
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
        start: { line: 15, column: 1, offset: 684 },
        end: { line: 25, column: 4, offset: 940 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 27, column: 1, offset: 942 },
        end: { line: 27, column: 7, offset: 948 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 29, column: 1, offset: 950 },
            end: { line: 29, column: 204, offset: 1153 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 29, column: 204, offset: 1153 },
            end: { line: 29, column: 210, offset: 1159 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 29, column: 210, offset: 1159 },
            end: { line: 29, column: 215, offset: 1164 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 29, column: 215, offset: 1164 },
            end: { line: 29, column: 224, offset: 1173 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 29, column: 224, offset: 1173 },
            end: { line: 29, column: 361, offset: 1310 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 950 },
        end: { line: 29, column: 361, offset: 1310 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 31, column: 1, offset: 1312 },
            end: { line: 31, column: 76, offset: 1387 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1312 },
        end: { line: 31, column: 76, offset: 1387 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 33, column: 1, offset: 1389 },
        end: { line: 33, column: 7, offset: 1395 }
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
        start: { line: 35, column: 1, offset: 1397 },
        end: { line: 50, column: 4, offset: 1743 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 52, column: 1, offset: 1745 },
            end: { line: 52, column: 236, offset: 1980 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1745 },
        end: { line: 52, column: 236, offset: 1980 }
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
        start: { line: 54, column: 1, offset: 1982 },
        end: { line: 61, column: 4, offset: 2132 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 63, column: 1, offset: 2134 },
            end: { line: 63, column: 3, offset: 2136 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 3, offset: 2136 },
            end: { line: 63, column: 12, offset: 2145 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 63, column: 12, offset: 2145 },
            end: { line: 63, column: 165, offset: 2298 }
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
                start: { line: 63, column: 166, offset: 2299 },
                end: { line: 63, column: 188, offset: 2321 }
              }
            }
          ],
          position: {
            start: { line: 63, column: 165, offset: 2298 },
            end: { line: 63, column: 284, offset: 2417 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 63, column: 284, offset: 2417 },
            end: { line: 63, column: 285, offset: 2418 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2134 },
        end: { line: 63, column: 285, offset: 2418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 65, column: 1, offset: 2420 },
            end: { line: 65, column: 3, offset: 2422 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 65, column: 3, offset: 2422 },
            end: { line: 65, column: 15, offset: 2434 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 65, column: 15, offset: 2434 },
            end: { line: 65, column: 43, offset: 2462 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 65, column: 43, offset: 2462 },
            end: { line: 65, column: 52, offset: 2471 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 65, column: 52, offset: 2471 },
            end: { line: 65, column: 73, offset: 2492 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 65, column: 73, offset: 2492 },
            end: { line: 65, column: 82, offset: 2501 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 65, column: 82, offset: 2501 },
            end: { line: 65, column: 243, offset: 2662 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2420 },
        end: { line: 65, column: 243, offset: 2662 }
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
            start: { line: 67, column: 1, offset: 2664 },
            end: { line: 67, column: 38, offset: 2701 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2664 },
        end: { line: 67, column: 38, offset: 2701 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's ",
          position: {
            start: { line: 69, column: 1, offset: 2703 },
            end: { line: 69, column: 155, offset: 2857 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 69, column: 155, offset: 2857 },
            end: { line: 69, column: 167, offset: 2869 }
          }
        },
        {
          type: 'text',
          value: ' module. The ',
          position: {
            start: { line: 69, column: 167, offset: 2869 },
            end: { line: 69, column: 180, offset: 2882 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 69, column: 180, offset: 2882 },
            end: { line: 69, column: 192, offset: 2894 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 69, column: 192, offset: 2894 },
            end: { line: 69, column: 260, offset: 2962 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2703 },
        end: { line: 69, column: 260, offset: 2962 }
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
                        start: { line: 71, column: 5, offset: 2968 },
                        end: { line: 71, column: 19, offset: 2982 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 2967 },
                    end: { line: 71, column: 42, offset: 3005 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 2967 },
                end: { line: 71, column: 42, offset: 3005 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 2965 },
            end: { line: 71, column: 42, offset: 3005 }
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
                        start: { line: 72, column: 5, offset: 3010 },
                        end: { line: 72, column: 22, offset: 3027 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 3009 },
                    end: { line: 72, column: 48, offset: 3053 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 3009 },
                end: { line: 72, column: 48, offset: 3053 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 3007 },
            end: { line: 72, column: 48, offset: 3053 }
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
                        start: { line: 73, column: 5, offset: 3058 },
                        end: { line: 73, column: 23, offset: 3076 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3057 },
                    end: { line: 73, column: 50, offset: 3103 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3057 },
                end: { line: 73, column: 50, offset: 3103 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3055 },
            end: { line: 73, column: 50, offset: 3103 }
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
                        start: { line: 74, column: 5, offset: 3108 },
                        end: { line: 74, column: 23, offset: 3126 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3107 },
                    end: { line: 74, column: 50, offset: 3153 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3107 },
                end: { line: 74, column: 50, offset: 3153 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3105 },
            end: { line: 74, column: 50, offset: 3153 }
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
                        start: { line: 75, column: 5, offset: 3158 },
                        end: { line: 75, column: 27, offset: 3180 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3157 },
                    end: { line: 75, column: 58, offset: 3211 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3157 },
                end: { line: 75, column: 58, offset: 3211 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3155 },
            end: { line: 75, column: 58, offset: 3211 }
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
                        start: { line: 76, column: 5, offset: 3216 },
                        end: { line: 76, column: 24, offset: 3235 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 76, column: 4, offset: 3215 },
                    end: { line: 76, column: 52, offset: 3263 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3215 },
                end: { line: 76, column: 52, offset: 3263 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3213 },
            end: { line: 76, column: 52, offset: 3263 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 2, offset: 2965 },
        end: { line: 76, column: 52, offset: 3263 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 78, column: 1, offset: 3265 },
            end: { line: 78, column: 64, offset: 3328 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 78, column: 64, offset: 3328 },
            end: { line: 78, column: 73, offset: 3337 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 78, column: 73, offset: 3337 },
            end: { line: 78, column: 129, offset: 3393 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 78, column: 129, offset: 3393 },
            end: { line: 78, column: 140, offset: 3404 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 78, column: 140, offset: 3404 },
            end: { line: 78, column: 145, offset: 3409 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 78, column: 145, offset: 3409 },
            end: { line: 78, column: 153, offset: 3417 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 78, column: 153, offset: 3417 },
            end: { line: 78, column: 164, offset: 3428 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3265 },
        end: { line: 78, column: 164, offset: 3428 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 80, column: 1, offset: 3430 },
            end: { line: 80, column: 51, offset: 3480 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 80, column: 51, offset: 3480 },
            end: { line: 80, column: 64, offset: 3493 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 80, column: 64, offset: 3493 },
            end: { line: 80, column: 86, offset: 3515 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3430 },
        end: { line: 80, column: 86, offset: 3515 }
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
        start: { line: 82, column: 1, offset: 3517 },
        end: { line: 106, column: 4, offset: 4204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 108, column: 1, offset: 4206 },
            end: { line: 108, column: 77, offset: 4282 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 4206 },
        end: { line: 108, column: 77, offset: 4282 }
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
        start: { line: 110, column: 1, offset: 4284 },
        end: { line: 126, column: 4, offset: 4555 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 128, column: 1, offset: 4557 },
            end: { line: 128, column: 58, offset: 4614 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 128, column: 58, offset: 4614 },
            end: { line: 128, column: 69, offset: 4625 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 128, column: 69, offset: 4625 },
            end: { line: 128, column: 127, offset: 4683 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 4557 },
        end: { line: 128, column: 127, offset: 4683 }
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
        start: { line: 130, column: 1, offset: 4685 },
        end: { line: 144, column: 4, offset: 4946 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers ',
          position: {
            start: { line: 146, column: 1, offset: 4948 },
            end: { line: 146, column: 146, offset: 5093 }
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
                start: { line: 146, column: 147, offset: 5094 },
                end: { line: 146, column: 151, offset: 5098 }
              }
            }
          ],
          position: {
            start: { line: 146, column: 146, offset: 5093 },
            end: { line: 146, column: 174, offset: 5121 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 146, column: 174, offset: 5121 },
            end: { line: 146, column: 175, offset: 5122 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4948 },
        end: { line: 146, column: 175, offset: 5122 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 148, column: 1, offset: 5124 },
            end: { line: 148, column: 17, offset: 5140 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 5124 },
        end: { line: 148, column: 17, offset: 5140 }
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
                    start: { line: 149, column: 4, offset: 5144 },
                    end: { line: 149, column: 63, offset: 5203 }
                  }
                }
              ],
              position: {
                start: { line: 149, column: 4, offset: 5144 },
                end: { line: 149, column: 63, offset: 5203 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 2, offset: 5142 },
            end: { line: 149, column: 63, offset: 5203 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 2, offset: 5142 },
        end: { line: 149, column: 63, offset: 5203 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 151, column: 1, offset: 5205 },
            end: { line: 151, column: 15, offset: 5219 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 5205 },
        end: { line: 151, column: 15, offset: 5219 }
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
                    start: { line: 152, column: 4, offset: 5223 },
                    end: { line: 152, column: 102, offset: 5321 }
                  }
                }
              ],
              position: {
                start: { line: 152, column: 4, offset: 5223 },
                end: { line: 152, column: 102, offset: 5321 }
              }
            }
          ],
          position: {
            start: { line: 152, column: 2, offset: 5221 },
            end: { line: 152, column: 102, offset: 5321 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 2, offset: 5221 },
        end: { line: 152, column: 102, offset: 5321 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 153, column: 1, offset: 5322 }
  }
}