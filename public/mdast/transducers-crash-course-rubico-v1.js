export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V1\n' +
        'author: Richard Tong\n' +
        'date: 2020-10-02\n' +
        'path: /blog/transducers-crash-course-rubico-v1\n' +
        'description: A crash course in rubico v1 transducers. Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 4, offset: 298 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 9, column: 1, offset: 300 },
            end: { line: 9, column: 288, offset: 587 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 300 },
        end: { line: 9, column: 288, offset: 587 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 11, column: 1, offset: 589 },
            end: { line: 11, column: 85, offset: 673 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 11, column: 85, offset: 673 },
            end: { line: 11, column: 94, offset: 682 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 11, column: 94, offset: 682 },
            end: { line: 11, column: 108, offset: 696 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 11, column: 108, offset: 696 },
            end: { line: 11, column: 114, offset: 702 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 11, column: 114, offset: 702 },
            end: { line: 11, column: 115, offset: 703 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 589 },
        end: { line: 11, column: 115, offset: 703 }
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
        'console.log(\n' +
        '  manyNumbers\n' +
        '    .filter(isOdd)\n' +
        '    .map(square),\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 13, column: 1, offset: 705 },
        end: { line: 25, column: 4, offset: 970 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 27, column: 1, offset: 972 },
        end: { line: 27, column: 7, offset: 978 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 29, column: 1, offset: 980 },
            end: { line: 29, column: 352, offset: 1331 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 980 },
        end: { line: 29, column: 352, offset: 1331 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below takes the above example and converts it to use rubico transducers.',
          position: {
            start: { line: 31, column: 1, offset: 1333 },
            end: { line: 31, column: 73, offset: 1405 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1333 },
        end: { line: 31, column: 73, offset: 1405 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 33, column: 1, offset: 1407 },
        end: { line: 33, column: 7, offset: 1413 }
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
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '])\n' +
        '\n' +
        'console.log(\n' +
        '  transform(squaredOdds, [])(manyNumbers),\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 35, column: 1, offset: 1415 },
        end: { line: 50, column: 4, offset: 1735 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 52, column: 1, offset: 1737 },
            end: { line: 52, column: 294, offset: 2030 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1737 },
        end: { line: 52, column: 294, offset: 2030 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 54, column: 1, offset: 2032 },
        end: { line: 58, column: 4, offset: 2130 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 60, column: 1, offset: 2132 },
            end: { line: 60, column: 3, offset: 2134 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 60, column: 3, offset: 2134 },
            end: { line: 60, column: 12, offset: 2143 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 60, column: 12, offset: 2143 },
            end: { line: 60, column: 165, offset: 2296 }
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
                start: { line: 60, column: 166, offset: 2297 },
                end: { line: 60, column: 188, offset: 2319 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 165, offset: 2296 },
            end: { line: 60, column: 284, offset: 2415 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 60, column: 284, offset: 2415 },
            end: { line: 60, column: 285, offset: 2416 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2132 },
        end: { line: 60, column: 285, offset: 2416 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 62, column: 1, offset: 2418 },
            end: { line: 62, column: 3, offset: 2420 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 62, column: 3, offset: 2420 },
            end: { line: 62, column: 15, offset: 2432 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 62, column: 15, offset: 2432 },
            end: { line: 62, column: 43, offset: 2460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 43, offset: 2460 },
            end: { line: 62, column: 52, offset: 2469 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 62, column: 52, offset: 2469 },
            end: { line: 62, column: 73, offset: 2490 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 73, offset: 2490 },
            end: { line: 62, column: 82, offset: 2499 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 62, column: 82, offset: 2499 },
            end: { line: 62, column: 243, offset: 2660 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2418 },
        end: { line: 62, column: 243, offset: 2660 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 64, column: 1, offset: 2662 },
        end: { line: 64, column: 7, offset: 2668 }
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
            start: { line: 66, column: 1, offset: 2670 },
            end: { line: 66, column: 38, offset: 2707 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2670 },
        end: { line: 66, column: 38, offset: 2707 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 68, column: 1, offset: 2709 },
        end: { line: 68, column: 7, offset: 2715 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 70, column: 1, offset: 2717 },
            end: { line: 70, column: 75, offset: 2791 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 70, column: 75, offset: 2791 },
            end: { line: 70, column: 81, offset: 2797 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 70, column: 81, offset: 2797 },
            end: { line: 70, column: 93, offset: 2809 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 70, column: 93, offset: 2809 },
            end: { line: 70, column: 102, offset: 2818 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 70, column: 102, offset: 2818 },
            end: { line: 70, column: 262, offset: 2978 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 70, column: 262, offset: 2978 },
            end: { line: 70, column: 268, offset: 2984 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 70, column: 268, offset: 2984 },
            end: { line: 70, column: 319, offset: 3035 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2717 },
        end: { line: 70, column: 319, offset: 3035 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 72, column: 1, offset: 3037 },
            end: { line: 72, column: 171, offset: 3207 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3037 },
        end: { line: 72, column: 171, offset: 3207 }
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
                    start: { line: 74, column: 4, offset: 3212 },
                    end: { line: 74, column: 9, offset: 3217 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 74, column: 9, offset: 3217 },
                    end: { line: 74, column: 63, offset: 3271 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3212 },
                end: { line: 74, column: 63, offset: 3271 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3210 },
            end: { line: 74, column: 63, offset: 3271 }
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
                    start: { line: 75, column: 4, offset: 3275 },
                    end: { line: 75, column: 12, offset: 3283 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 75, column: 12, offset: 3283 },
                    end: { line: 75, column: 68, offset: 3339 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3275 },
                end: { line: 75, column: 68, offset: 3339 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3273 },
            end: { line: 75, column: 68, offset: 3339 }
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
                    start: { line: 76, column: 4, offset: 3343 },
                    end: { line: 76, column: 13, offset: 3352 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 76, column: 13, offset: 3352 },
                    end: { line: 76, column: 129, offset: 3468 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3343 },
                end: { line: 76, column: 129, offset: 3468 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3341 },
            end: { line: 76, column: 129, offset: 3468 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 2, offset: 3210 },
        end: { line: 76, column: 129, offset: 3468 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 78, column: 1, offset: 3470 },
            end: { line: 78, column: 143, offset: 3612 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 78, column: 143, offset: 3612 },
            end: { line: 78, column: 154, offset: 3623 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 78, column: 154, offset: 3623 },
            end: { line: 78, column: 159, offset: 3628 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 78, column: 159, offset: 3628 },
            end: { line: 78, column: 167, offset: 3636 }
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 78, column: 167, offset: 3636 },
            end: { line: 78, column: 240, offset: 3709 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 78, column: 240, offset: 3709 },
            end: { line: 78, column: 264, offset: 3733 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 78, column: 264, offset: 3733 },
            end: { line: 78, column: 265, offset: 3734 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3470 },
        end: { line: 78, column: 265, offset: 3734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 80, column: 1, offset: 3736 },
            end: { line: 80, column: 51, offset: 3786 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 80, column: 51, offset: 3786 },
            end: { line: 80, column: 64, offset: 3799 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 80, column: 64, offset: 3799 },
            end: { line: 80, column: 86, offset: 3821 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3736 },
        end: { line: 80, column: 86, offset: 3821 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 82, column: 1, offset: 3823 },
        end: { line: 82, column: 7, offset: 3829 }
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
        'const squaredOdds = pipe([\n' +
        '  filter(isOdd),\n' +
        '  map(square),\n' +
        '])\n' +
        '\n' +
        'const manyNumbers = Array.from({ length: 1000 }, (_, i) => i)\n' +
        '\n' +
        'console.log(\n' +
        '  transform(squaredOdds, [])(manyNumbers),\n' +
        ') // [1, 9, 25, 36, 49, ...]\n' +
        '\n' +
        'const arrayConcat = (array, value) => array.concat(value)\n' +
        '\n' +
        'console.log(\n' +
        '  manyNumbers.reduce(squaredOdds(arrayConcat), []),\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 84, column: 1, offset: 3831 },
        end: { line: 105, column: 4, offset: 4305 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 107, column: 1, offset: 4307 },
            end: { line: 107, column: 179, offset: 4485 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4307 },
        end: { line: 107, column: 179, offset: 4485 }
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
        start: { line: 109, column: 1, offset: 4487 },
        end: { line: 124, column: 4, offset: 4792 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the ',
          position: {
            start: { line: 126, column: 1, offset: 4794 },
            end: { line: 126, column: 153, offset: 4946 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/map',
          children: [
            {
              type: 'text',
              value: 'docs',
              position: {
                start: { line: 126, column: 154, offset: 4947 },
                end: { line: 126, column: 158, offset: 4951 }
              }
            }
          ],
          position: {
            start: { line: 126, column: 153, offset: 4946 },
            end: { line: 126, column: 170, offset: 4963 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 126, column: 170, offset: 4963 },
            end: { line: 126, column: 171, offset: 4964 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4794 },
        end: { line: 126, column: 171, offset: 4964 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 128, column: 1, offset: 4966 },
            end: { line: 128, column: 17, offset: 4982 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 4966 },
        end: { line: 128, column: 17, offset: 4982 }
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
                    start: { line: 129, column: 4, offset: 4986 },
                    end: { line: 129, column: 63, offset: 5045 }
                  }
                }
              ],
              position: {
                start: { line: 129, column: 4, offset: 4986 },
                end: { line: 129, column: 63, offset: 5045 }
              }
            }
          ],
          position: {
            start: { line: 129, column: 2, offset: 4984 },
            end: { line: 129, column: 63, offset: 5045 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 2, offset: 4984 },
        end: { line: 129, column: 63, offset: 5045 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 131, column: 1, offset: 5047 },
            end: { line: 131, column: 15, offset: 5061 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 5047 },
        end: { line: 131, column: 15, offset: 5061 }
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
                    start: { line: 132, column: 4, offset: 5065 },
                    end: { line: 132, column: 102, offset: 5163 }
                  }
                }
              ],
              position: {
                start: { line: 132, column: 4, offset: 5065 },
                end: { line: 132, column: 102, offset: 5163 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 2, offset: 5063 },
            end: { line: 132, column: 102, offset: 5163 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 2, offset: 5063 },
        end: { line: 132, column: 102, offset: 5163 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 133, column: 1, offset: 5164 }
  }
}