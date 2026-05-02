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
        'description: A crash course on Rubico transducers',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 217 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 219 },
            end: { line: 10, column: 288, offset: 506 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 219 },
        end: { line: 10, column: 288, offset: 506 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 508 },
            end: { line: 12, column: 41, offset: 548 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 548 },
            end: { line: 12, column: 54, offset: 561 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 561 },
            end: { line: 12, column: 111, offset: 618 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 618 },
            end: { line: 12, column: 120, offset: 627 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 627 },
            end: { line: 12, column: 140, offset: 647 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 647 },
            end: { line: 12, column: 146, offset: 653 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 653 },
            end: { line: 12, column: 147, offset: 654 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 508 },
        end: { line: 12, column: 147, offset: 654 }
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
        start: { line: 14, column: 1, offset: 656 },
        end: { line: 24, column: 4, offset: 912 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 914 },
        end: { line: 26, column: 7, offset: 920 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 922 },
            end: { line: 28, column: 204, offset: 1125 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1125 },
            end: { line: 28, column: 210, offset: 1131 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1131 },
            end: { line: 28, column: 215, offset: 1136 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1136 },
            end: { line: 28, column: 224, offset: 1145 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1145 },
            end: { line: 28, column: 361, offset: 1282 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 922 },
        end: { line: 28, column: 361, offset: 1282 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1284 },
            end: { line: 30, column: 76, offset: 1359 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1284 },
        end: { line: 30, column: 76, offset: 1359 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1361 },
        end: { line: 32, column: 7, offset: 1367 }
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
        start: { line: 34, column: 1, offset: 1369 },
        end: { line: 49, column: 4, offset: 1715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1717 },
            end: { line: 51, column: 236, offset: 1952 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1717 },
        end: { line: 51, column: 236, offset: 1952 }
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
        start: { line: 53, column: 1, offset: 1954 },
        end: { line: 60, column: 4, offset: 2104 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 62, column: 1, offset: 2106 },
            end: { line: 62, column: 3, offset: 2108 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 3, offset: 2108 },
            end: { line: 62, column: 12, offset: 2117 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 62, column: 12, offset: 2117 },
            end: { line: 62, column: 165, offset: 2270 }
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
                start: { line: 62, column: 166, offset: 2271 },
                end: { line: 62, column: 188, offset: 2293 }
              }
            }
          ],
          position: {
            start: { line: 62, column: 165, offset: 2270 },
            end: { line: 62, column: 284, offset: 2389 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 62, column: 284, offset: 2389 },
            end: { line: 62, column: 285, offset: 2390 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2106 },
        end: { line: 62, column: 285, offset: 2390 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 64, column: 1, offset: 2392 },
            end: { line: 64, column: 3, offset: 2394 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 64, column: 3, offset: 2394 },
            end: { line: 64, column: 15, offset: 2406 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 64, column: 15, offset: 2406 },
            end: { line: 64, column: 43, offset: 2434 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 43, offset: 2434 },
            end: { line: 64, column: 52, offset: 2443 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 64, column: 52, offset: 2443 },
            end: { line: 64, column: 73, offset: 2464 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 73, offset: 2464 },
            end: { line: 64, column: 82, offset: 2473 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 64, column: 82, offset: 2473 },
            end: { line: 64, column: 243, offset: 2634 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2392 },
        end: { line: 64, column: 243, offset: 2634 }
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
            start: { line: 66, column: 1, offset: 2636 },
            end: { line: 66, column: 38, offset: 2673 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2636 },
        end: { line: 66, column: 38, offset: 2673 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own. If you are interested in transducers after that, you can use transducers anywhere via Rubico's ",
          position: {
            start: { line: 68, column: 1, offset: 2675 },
            end: { line: 68, column: 155, offset: 2829 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 155, offset: 2829 },
            end: { line: 68, column: 167, offset: 2841 }
          }
        },
        {
          type: 'text',
          value: ' module. The ',
          position: {
            start: { line: 68, column: 167, offset: 2841 },
            end: { line: 68, column: 180, offset: 2854 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 180, offset: 2854 },
            end: { line: 68, column: 192, offset: 2866 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 68, column: 192, offset: 2866 },
            end: { line: 68, column: 260, offset: 2934 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2675 },
        end: { line: 68, column: 260, offset: 2934 }
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
                        start: { line: 70, column: 5, offset: 2940 },
                        end: { line: 70, column: 19, offset: 2954 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 70, column: 4, offset: 2939 },
                    end: { line: 70, column: 42, offset: 2977 }
                  }
                }
              ],
              position: {
                start: { line: 70, column: 4, offset: 2939 },
                end: { line: 70, column: 42, offset: 2977 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 2, offset: 2937 },
            end: { line: 70, column: 42, offset: 2977 }
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
                        start: { line: 71, column: 5, offset: 2982 },
                        end: { line: 71, column: 22, offset: 2999 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 2981 },
                    end: { line: 71, column: 48, offset: 3025 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 2981 },
                end: { line: 71, column: 48, offset: 3025 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 2979 },
            end: { line: 71, column: 48, offset: 3025 }
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
                        start: { line: 72, column: 5, offset: 3030 },
                        end: { line: 72, column: 23, offset: 3048 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 3029 },
                    end: { line: 72, column: 50, offset: 3075 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 3029 },
                end: { line: 72, column: 50, offset: 3075 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 3027 },
            end: { line: 72, column: 50, offset: 3075 }
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
                        start: { line: 73, column: 5, offset: 3080 },
                        end: { line: 73, column: 23, offset: 3098 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3079 },
                    end: { line: 73, column: 50, offset: 3125 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3079 },
                end: { line: 73, column: 50, offset: 3125 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3077 },
            end: { line: 73, column: 50, offset: 3125 }
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
                        start: { line: 74, column: 5, offset: 3130 },
                        end: { line: 74, column: 27, offset: 3152 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3129 },
                    end: { line: 74, column: 58, offset: 3183 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3129 },
                end: { line: 74, column: 58, offset: 3183 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3127 },
            end: { line: 74, column: 58, offset: 3183 }
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
                        start: { line: 75, column: 5, offset: 3188 },
                        end: { line: 75, column: 24, offset: 3207 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3187 },
                    end: { line: 75, column: 52, offset: 3235 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3187 },
                end: { line: 75, column: 52, offset: 3235 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3185 },
            end: { line: 75, column: 52, offset: 3235 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 2, offset: 2937 },
        end: { line: 75, column: 52, offset: 3235 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 77, column: 1, offset: 3237 },
            end: { line: 77, column: 64, offset: 3300 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 77, column: 64, offset: 3300 },
            end: { line: 77, column: 73, offset: 3309 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 77, column: 73, offset: 3309 },
            end: { line: 77, column: 129, offset: 3365 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 77, column: 129, offset: 3365 },
            end: { line: 77, column: 140, offset: 3376 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 77, column: 140, offset: 3376 },
            end: { line: 77, column: 145, offset: 3381 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 77, column: 145, offset: 3381 },
            end: { line: 77, column: 153, offset: 3389 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 77, column: 153, offset: 3389 },
            end: { line: 77, column: 164, offset: 3400 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 3237 },
        end: { line: 77, column: 164, offset: 3400 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 79, column: 1, offset: 3402 },
            end: { line: 79, column: 51, offset: 3452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 79, column: 51, offset: 3452 },
            end: { line: 79, column: 64, offset: 3465 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 79, column: 64, offset: 3465 },
            end: { line: 79, column: 86, offset: 3487 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 3402 },
        end: { line: 79, column: 86, offset: 3487 }
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
        start: { line: 81, column: 1, offset: 3489 },
        end: { line: 105, column: 4, offset: 4176 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 107, column: 1, offset: 4178 },
            end: { line: 107, column: 77, offset: 4254 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4178 },
        end: { line: 107, column: 77, offset: 4254 }
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
        start: { line: 109, column: 1, offset: 4256 },
        end: { line: 125, column: 4, offset: 4527 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 127, column: 1, offset: 4529 },
            end: { line: 127, column: 58, offset: 4586 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 127, column: 58, offset: 4586 },
            end: { line: 127, column: 69, offset: 4597 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 127, column: 69, offset: 4597 },
            end: { line: 127, column: 127, offset: 4655 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4529 },
        end: { line: 127, column: 127, offset: 4655 }
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
        start: { line: 129, column: 1, offset: 4657 },
        end: { line: 143, column: 4, offset: 4918 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers ',
          position: {
            start: { line: 145, column: 1, offset: 4920 },
            end: { line: 145, column: 146, offset: 5065 }
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
                start: { line: 145, column: 147, offset: 5066 },
                end: { line: 145, column: 151, offset: 5070 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 146, offset: 5065 },
            end: { line: 145, column: 174, offset: 5093 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 145, column: 174, offset: 5093 },
            end: { line: 145, column: 175, offset: 5094 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4920 },
        end: { line: 145, column: 175, offset: 5094 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 147, column: 1, offset: 5096 },
            end: { line: 147, column: 17, offset: 5112 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 5096 },
        end: { line: 147, column: 17, offset: 5112 }
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
                    start: { line: 148, column: 4, offset: 5116 },
                    end: { line: 148, column: 63, offset: 5175 }
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5116 },
                end: { line: 148, column: 63, offset: 5175 }
              }
            }
          ],
          position: {
            start: { line: 148, column: 2, offset: 5114 },
            end: { line: 148, column: 63, offset: 5175 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 2, offset: 5114 },
        end: { line: 148, column: 63, offset: 5175 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 150, column: 1, offset: 5177 }
  }
}