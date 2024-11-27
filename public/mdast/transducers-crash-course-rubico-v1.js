export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V1\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2020-10-02\n' +
        'path: /blog/transducers-crash-course-rubico-v1\n' +
        'description: A crash course in transducers for rubico v1',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 4, offset: 231 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 9, column: 1, offset: 233 },
            end: { line: 9, column: 288, offset: 520 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 233 },
        end: { line: 9, column: 288, offset: 520 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 11, column: 1, offset: 522 },
            end: { line: 11, column: 85, offset: 606 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 11, column: 85, offset: 606 },
            end: { line: 11, column: 94, offset: 615 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 11, column: 94, offset: 615 },
            end: { line: 11, column: 108, offset: 629 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 11, column: 108, offset: 629 },
            end: { line: 11, column: 114, offset: 635 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 11, column: 114, offset: 635 },
            end: { line: 11, column: 115, offset: 636 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 522 },
        end: { line: 11, column: 115, offset: 636 }
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
        start: { line: 13, column: 1, offset: 638 },
        end: { line: 25, column: 4, offset: 903 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 27, column: 1, offset: 905 },
        end: { line: 27, column: 7, offset: 911 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 29, column: 1, offset: 913 },
            end: { line: 29, column: 352, offset: 1264 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 913 },
        end: { line: 29, column: 352, offset: 1264 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below takes the above example and converts it to use rubico transducers.',
          position: {
            start: { line: 31, column: 1, offset: 1266 },
            end: { line: 31, column: 73, offset: 1338 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1266 },
        end: { line: 31, column: 73, offset: 1338 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 33, column: 1, offset: 1340 },
        end: { line: 33, column: 7, offset: 1346 }
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
        start: { line: 35, column: 1, offset: 1348 },
        end: { line: 50, column: 4, offset: 1668 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 52, column: 1, offset: 1670 },
            end: { line: 52, column: 294, offset: 1963 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1670 },
        end: { line: 52, column: 294, offset: 1963 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 54, column: 1, offset: 1965 },
        end: { line: 58, column: 4, offset: 2063 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 60, column: 1, offset: 2065 },
            end: { line: 60, column: 3, offset: 2067 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 60, column: 3, offset: 2067 },
            end: { line: 60, column: 12, offset: 2076 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 60, column: 12, offset: 2076 },
            end: { line: 60, column: 165, offset: 2229 }
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
                start: { line: 60, column: 166, offset: 2230 },
                end: { line: 60, column: 188, offset: 2252 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 165, offset: 2229 },
            end: { line: 60, column: 284, offset: 2348 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 60, column: 284, offset: 2348 },
            end: { line: 60, column: 285, offset: 2349 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 2065 },
        end: { line: 60, column: 285, offset: 2349 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 62, column: 1, offset: 2351 },
            end: { line: 62, column: 3, offset: 2353 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 62, column: 3, offset: 2353 },
            end: { line: 62, column: 15, offset: 2365 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 62, column: 15, offset: 2365 },
            end: { line: 62, column: 43, offset: 2393 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 43, offset: 2393 },
            end: { line: 62, column: 52, offset: 2402 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 62, column: 52, offset: 2402 },
            end: { line: 62, column: 73, offset: 2423 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 62, column: 73, offset: 2423 },
            end: { line: 62, column: 82, offset: 2432 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 62, column: 82, offset: 2432 },
            end: { line: 62, column: 243, offset: 2593 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2351 },
        end: { line: 62, column: 243, offset: 2593 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 64, column: 1, offset: 2595 },
        end: { line: 64, column: 7, offset: 2601 }
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
            start: { line: 66, column: 1, offset: 2603 },
            end: { line: 66, column: 38, offset: 2640 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2603 },
        end: { line: 66, column: 38, offset: 2640 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 68, column: 1, offset: 2642 },
        end: { line: 68, column: 7, offset: 2648 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 70, column: 1, offset: 2650 },
            end: { line: 70, column: 75, offset: 2724 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 70, column: 75, offset: 2724 },
            end: { line: 70, column: 81, offset: 2730 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 70, column: 81, offset: 2730 },
            end: { line: 70, column: 93, offset: 2742 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 70, column: 93, offset: 2742 },
            end: { line: 70, column: 102, offset: 2751 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 70, column: 102, offset: 2751 },
            end: { line: 70, column: 262, offset: 2911 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 70, column: 262, offset: 2911 },
            end: { line: 70, column: 268, offset: 2917 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 70, column: 268, offset: 2917 },
            end: { line: 70, column: 319, offset: 2968 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2650 },
        end: { line: 70, column: 319, offset: 2968 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 72, column: 1, offset: 2970 },
            end: { line: 72, column: 171, offset: 3140 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2970 },
        end: { line: 72, column: 171, offset: 3140 }
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
                    start: { line: 74, column: 4, offset: 3145 },
                    end: { line: 74, column: 9, offset: 3150 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 74, column: 9, offset: 3150 },
                    end: { line: 74, column: 63, offset: 3204 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3145 },
                end: { line: 74, column: 63, offset: 3204 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3143 },
            end: { line: 74, column: 63, offset: 3204 }
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
                    start: { line: 75, column: 4, offset: 3208 },
                    end: { line: 75, column: 12, offset: 3216 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 75, column: 12, offset: 3216 },
                    end: { line: 75, column: 68, offset: 3272 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3208 },
                end: { line: 75, column: 68, offset: 3272 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3206 },
            end: { line: 75, column: 68, offset: 3272 }
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
                    start: { line: 76, column: 4, offset: 3276 },
                    end: { line: 76, column: 13, offset: 3285 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 76, column: 13, offset: 3285 },
                    end: { line: 76, column: 129, offset: 3401 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3276 },
                end: { line: 76, column: 129, offset: 3401 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3274 },
            end: { line: 76, column: 129, offset: 3401 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 2, offset: 3143 },
        end: { line: 76, column: 129, offset: 3401 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 78, column: 1, offset: 3403 },
            end: { line: 78, column: 143, offset: 3545 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 78, column: 143, offset: 3545 },
            end: { line: 78, column: 154, offset: 3556 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 78, column: 154, offset: 3556 },
            end: { line: 78, column: 159, offset: 3561 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 78, column: 159, offset: 3561 },
            end: { line: 78, column: 167, offset: 3569 }
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 78, column: 167, offset: 3569 },
            end: { line: 78, column: 240, offset: 3642 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 78, column: 240, offset: 3642 },
            end: { line: 78, column: 264, offset: 3666 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 78, column: 264, offset: 3666 },
            end: { line: 78, column: 265, offset: 3667 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3403 },
        end: { line: 78, column: 265, offset: 3667 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 80, column: 1, offset: 3669 },
            end: { line: 80, column: 51, offset: 3719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 80, column: 51, offset: 3719 },
            end: { line: 80, column: 64, offset: 3732 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 80, column: 64, offset: 3732 },
            end: { line: 80, column: 86, offset: 3754 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3669 },
        end: { line: 80, column: 86, offset: 3754 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 82, column: 1, offset: 3756 },
        end: { line: 82, column: 7, offset: 3762 }
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
        start: { line: 84, column: 1, offset: 3764 },
        end: { line: 105, column: 4, offset: 4238 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 107, column: 1, offset: 4240 },
            end: { line: 107, column: 179, offset: 4418 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4240 },
        end: { line: 107, column: 179, offset: 4418 }
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
        start: { line: 109, column: 1, offset: 4420 },
        end: { line: 124, column: 4, offset: 4725 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the ',
          position: {
            start: { line: 126, column: 1, offset: 4727 },
            end: { line: 126, column: 153, offset: 4879 }
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
                start: { line: 126, column: 154, offset: 4880 },
                end: { line: 126, column: 158, offset: 4884 }
              }
            }
          ],
          position: {
            start: { line: 126, column: 153, offset: 4879 },
            end: { line: 126, column: 170, offset: 4896 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 126, column: 170, offset: 4896 },
            end: { line: 126, column: 171, offset: 4897 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4727 },
        end: { line: 126, column: 171, offset: 4897 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 128, column: 1, offset: 4899 },
            end: { line: 128, column: 17, offset: 4915 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 4899 },
        end: { line: 128, column: 17, offset: 4915 }
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
                    start: { line: 129, column: 4, offset: 4919 },
                    end: { line: 129, column: 63, offset: 4978 }
                  }
                }
              ],
              position: {
                start: { line: 129, column: 4, offset: 4919 },
                end: { line: 129, column: 63, offset: 4978 }
              }
            }
          ],
          position: {
            start: { line: 129, column: 2, offset: 4917 },
            end: { line: 129, column: 63, offset: 4978 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 2, offset: 4917 },
        end: { line: 129, column: 63, offset: 4978 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 131, column: 1, offset: 4980 },
            end: { line: 131, column: 15, offset: 4994 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4980 },
        end: { line: 131, column: 15, offset: 4994 }
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
                    start: { line: 132, column: 4, offset: 4998 },
                    end: { line: 132, column: 102, offset: 5096 }
                  }
                }
              ],
              position: {
                start: { line: 132, column: 4, offset: 4998 },
                end: { line: 132, column: 102, offset: 5096 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 2, offset: 4996 },
            end: { line: 132, column: 102, offset: 5096 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 2, offset: 4996 },
        end: { line: 132, column: 102, offset: 5096 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 133, column: 1, offset: 5097 }
  }
}