export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for Rubico V1\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2020-10-02\n' +
        'updated: 2026-02-22\n' +
        'path: /blog/transducers-crash-course-rubico-v1\n' +
        'description: A crash course in transducers for Rubico v1',
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
          value: 'Below takes the above example and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1315 },
            end: { line: 30, column: 73, offset: 1387 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1315 },
        end: { line: 30, column: 73, offset: 1387 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1389 },
        end: { line: 32, column: 7, offset: 1395 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'\n" +
        '\n' +
        'const { pipe, map, filter } = rubico\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '])\n' +
        '\n' +
        'const transformed = transform(squaredOdds, [])(manyNumbers)\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 34, column: 1, offset: 1397 },
        end: { line: 53, column: 4, offset: 1822 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 55, column: 1, offset: 1824 },
            end: { line: 55, column: 236, offset: 2059 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 1824 },
        end: { line: 55, column: 236, offset: 2059 }
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
        start: { line: 57, column: 1, offset: 2061 },
        end: { line: 64, column: 4, offset: 2211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 66, column: 1, offset: 2213 },
            end: { line: 66, column: 3, offset: 2215 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 66, column: 3, offset: 2215 },
            end: { line: 66, column: 12, offset: 2224 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 66, column: 12, offset: 2224 },
            end: { line: 66, column: 165, offset: 2377 }
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
                start: { line: 66, column: 166, offset: 2378 },
                end: { line: 66, column: 188, offset: 2400 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 165, offset: 2377 },
            end: { line: 66, column: 284, offset: 2496 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 66, column: 284, offset: 2496 },
            end: { line: 66, column: 285, offset: 2497 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2213 },
        end: { line: 66, column: 285, offset: 2497 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 68, column: 1, offset: 2499 },
            end: { line: 68, column: 3, offset: 2501 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 68, column: 3, offset: 2501 },
            end: { line: 68, column: 15, offset: 2513 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 68, column: 15, offset: 2513 },
            end: { line: 68, column: 43, offset: 2541 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 68, column: 43, offset: 2541 },
            end: { line: 68, column: 52, offset: 2550 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 68, column: 52, offset: 2550 },
            end: { line: 68, column: 73, offset: 2571 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 68, column: 73, offset: 2571 },
            end: { line: 68, column: 82, offset: 2580 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 68, column: 82, offset: 2580 },
            end: { line: 68, column: 243, offset: 2741 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2499 },
        end: { line: 68, column: 243, offset: 2741 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 70, column: 1, offset: 2743 },
        end: { line: 70, column: 7, offset: 2749 }
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
            start: { line: 72, column: 1, offset: 2751 },
            end: { line: 72, column: 38, offset: 2788 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2751 },
        end: { line: 72, column: 38, offset: 2788 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 74, column: 1, offset: 2790 },
        end: { line: 74, column: 7, offset: 2796 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 76, column: 1, offset: 2798 },
            end: { line: 76, column: 75, offset: 2872 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 76, column: 75, offset: 2872 },
            end: { line: 76, column: 81, offset: 2878 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 76, column: 81, offset: 2878 },
            end: { line: 76, column: 93, offset: 2890 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 76, column: 93, offset: 2890 },
            end: { line: 76, column: 102, offset: 2899 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This allows for all function pipelines created with ',
          position: {
            start: { line: 76, column: 102, offset: 2899 },
            end: { line: 76, column: 230, offset: 3027 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 76, column: 230, offset: 3027 },
            end: { line: 76, column: 236, offset: 3033 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 76, column: 236, offset: 3033 },
            end: { line: 76, column: 287, offset: 3084 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2798 },
        end: { line: 76, column: 287, offset: 3084 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of Rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 78, column: 1, offset: 3086 },
            end: { line: 78, column: 171, offset: 3256 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3086 },
        end: { line: 78, column: 171, offset: 3256 }
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
                  type: 'inlineCode',
                  value: 'map',
                  position: {
                    start: { line: 80, column: 4, offset: 3261 },
                    end: { line: 80, column: 9, offset: 3266 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 80, column: 9, offset: 3266 },
                    end: { line: 80, column: 63, offset: 3320 }
                  }
                }
              ],
              position: {
                start: { line: 80, column: 4, offset: 3261 },
                end: { line: 80, column: 63, offset: 3320 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 2, offset: 3259 },
            end: { line: 80, column: 63, offset: 3320 }
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
                  type: 'inlineCode',
                  value: 'filter',
                  position: {
                    start: { line: 81, column: 4, offset: 3324 },
                    end: { line: 81, column: 12, offset: 3332 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 81, column: 12, offset: 3332 },
                    end: { line: 81, column: 68, offset: 3388 }
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 3324 },
                end: { line: 81, column: 68, offset: 3388 }
              }
            }
          ],
          position: {
            start: { line: 81, column: 2, offset: 3322 },
            end: { line: 81, column: 68, offset: 3388 }
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
                  type: 'inlineCode',
                  value: 'flatMap',
                  position: {
                    start: { line: 82, column: 4, offset: 3392 },
                    end: { line: 82, column: 13, offset: 3401 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 82, column: 13, offset: 3401 },
                    end: { line: 82, column: 129, offset: 3517 }
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 3392 },
                end: { line: 82, column: 129, offset: 3517 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 2, offset: 3390 },
            end: { line: 82, column: 129, offset: 3517 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 2, offset: 3259 },
        end: { line: 82, column: 129, offset: 3517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 84, column: 1, offset: 3519 },
            end: { line: 84, column: 64, offset: 3582 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 84, column: 64, offset: 3582 },
            end: { line: 84, column: 73, offset: 3591 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 84, column: 73, offset: 3591 },
            end: { line: 84, column: 129, offset: 3647 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 84, column: 129, offset: 3647 },
            end: { line: 84, column: 140, offset: 3658 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 84, column: 140, offset: 3658 },
            end: { line: 84, column: 145, offset: 3663 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 84, column: 145, offset: 3663 },
            end: { line: 84, column: 153, offset: 3671 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 84, column: 153, offset: 3671 },
            end: { line: 84, column: 164, offset: 3682 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3519 },
        end: { line: 84, column: 164, offset: 3682 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 86, column: 1, offset: 3684 },
            end: { line: 86, column: 51, offset: 3734 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 86, column: 51, offset: 3734 },
            end: { line: 86, column: 64, offset: 3747 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 86, column: 64, offset: 3747 },
            end: { line: 86, column: 86, offset: 3769 }
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3684 },
        end: { line: 86, column: 86, offset: 3769 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 88, column: 1, offset: 3771 },
        end: { line: 88, column: 7, offset: 3777 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'\n" +
        '\n' +
        'const { pipe, map, filter } = rubico\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '])\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        "// use the transducer squaredOdds with Rubico's transform\n" +
        'const transformedWithRubicoTransform = transform(squaredOdds, [])(manyNumbers)\n' +
        '\n' +
        'console.log(transformedWithRubicoTransform)\n' +
        '\n' +
        'const arrayConcat = (array, value) => array.concat(value)\n' +
        '\n' +
        '// use the transducer squaredOdds with vanilla JavaScript\n' +
        'const transformedWithArrayReduce =\n' +
        '    manyNumbers.reduce(squaredOdds(arrayConcat), [])\n' +
        '\n' +
        'console.log(transformedWithArrayReduce)',
      position: {
        start: { line: 90, column: 1, offset: 3779 },
        end: { line: 118, column: 4, offset: 4547 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to Rubico's polymorphic nature, any transducer-capable operator not used in a reduce function is capable of eager transformations. The below example is a non-transducing version of the above.",
          position: {
            start: { line: 120, column: 1, offset: 4549 },
            end: { line: 120, column: 196, offset: 4744 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4549 },
        end: { line: 120, column: 196, offset: 4744 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "import rubico from 'https://cdn.jsdelivr.net/npm/rubico@1/es.js'\n" +
        '\n' +
        'const { pipe, map, filter } = rubico\n' +
        '\n' +
        'const square = number => number ** 2\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '])\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        'console.log(\n' +
        '  squaredOdds(manyNumbers),\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 122, column: 1, offset: 4746 },
        end: { line: 141, column: 4, offset: 5155 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers ',
          position: {
            start: { line: 143, column: 1, offset: 5157 },
            end: { line: 143, column: 146, offset: 5302 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/map',
          children: [
            {
              type: 'text',
              value: 'here',
              position: {
                start: { line: 143, column: 147, offset: 5303 },
                end: { line: 143, column: 151, offset: 5307 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 146, offset: 5302 },
            end: { line: 143, column: 163, offset: 5319 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 163, offset: 5319 },
            end: { line: 143, column: 164, offset: 5320 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5157 },
        end: { line: 143, column: 164, offset: 5320 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 145, column: 1, offset: 5322 },
            end: { line: 145, column: 17, offset: 5338 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5322 },
        end: { line: 145, column: 17, offset: 5338 }
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
                    start: { line: 146, column: 4, offset: 5342 },
                    end: { line: 146, column: 63, offset: 5401 }
                  }
                }
              ],
              position: {
                start: { line: 146, column: 4, offset: 5342 },
                end: { line: 146, column: 63, offset: 5401 }
              }
            }
          ],
          position: {
            start: { line: 146, column: 2, offset: 5340 },
            end: { line: 146, column: 63, offset: 5401 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 2, offset: 5340 },
        end: { line: 146, column: 63, offset: 5401 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 148, column: 1, offset: 5403 },
            end: { line: 148, column: 15, offset: 5417 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 5403 },
        end: { line: 148, column: 15, offset: 5417 }
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
                    start: { line: 149, column: 4, offset: 5421 },
                    end: { line: 149, column: 102, offset: 5519 }
                  }
                }
              ],
              position: {
                start: { line: 149, column: 4, offset: 5421 },
                end: { line: 149, column: 102, offset: 5519 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 2, offset: 5419 },
            end: { line: 149, column: 102, offset: 5519 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 2, offset: 5419 },
        end: { line: 149, column: 102, offset: 5519 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 150, column: 1, offset: 5520 }
  }
}