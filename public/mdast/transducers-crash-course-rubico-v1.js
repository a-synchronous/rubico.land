export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for Rubico V1\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2020-10-02\n' +
        'updated: 2026-01-31\n' +
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
          value: 'The below example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 12, column: 1, offset: 539 },
            end: { line: 12, column: 85, offset: 623 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 85, offset: 623 },
            end: { line: 12, column: 94, offset: 632 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 12, column: 94, offset: 632 },
            end: { line: 12, column: 108, offset: 646 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 108, offset: 646 },
            end: { line: 12, column: 114, offset: 652 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 114, offset: 652 },
            end: { line: 12, column: 115, offset: 653 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 539 },
        end: { line: 12, column: 115, offset: 653 }
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
        start: { line: 14, column: 1, offset: 655 },
        end: { line: 26, column: 4, offset: 920 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 28, column: 1, offset: 922 },
        end: { line: 28, column: 7, offset: 928 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 30, column: 1, offset: 930 },
            end: { line: 30, column: 352, offset: 1281 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 930 },
        end: { line: 30, column: 352, offset: 1281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below takes the above example and converts it to use Rubico transducers.',
          position: {
            start: { line: 32, column: 1, offset: 1283 },
            end: { line: 32, column: 73, offset: 1355 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1283 },
        end: { line: 32, column: 73, offset: 1355 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 34, column: 1, offset: 1357 },
        end: { line: 34, column: 7, offset: 1363 }
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
        start: { line: 36, column: 1, offset: 1365 },
        end: { line: 51, column: 4, offset: 1685 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 53, column: 1, offset: 1687 },
            end: { line: 53, column: 294, offset: 1980 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1687 },
        end: { line: 53, column: 294, offset: 1980 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 55, column: 1, offset: 1982 },
        end: { line: 59, column: 4, offset: 2080 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 61, column: 1, offset: 2082 },
            end: { line: 61, column: 3, offset: 2084 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 3, offset: 2084 },
            end: { line: 61, column: 12, offset: 2093 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 61, column: 12, offset: 2093 },
            end: { line: 61, column: 165, offset: 2246 }
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
                start: { line: 61, column: 166, offset: 2247 },
                end: { line: 61, column: 188, offset: 2269 }
              }
            }
          ],
          position: {
            start: { line: 61, column: 165, offset: 2246 },
            end: { line: 61, column: 284, offset: 2365 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 61, column: 284, offset: 2365 },
            end: { line: 61, column: 285, offset: 2366 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2082 },
        end: { line: 61, column: 285, offset: 2366 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 63, column: 1, offset: 2368 },
            end: { line: 63, column: 3, offset: 2370 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 63, column: 3, offset: 2370 },
            end: { line: 63, column: 15, offset: 2382 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 63, column: 15, offset: 2382 },
            end: { line: 63, column: 43, offset: 2410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 43, offset: 2410 },
            end: { line: 63, column: 52, offset: 2419 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 63, column: 52, offset: 2419 },
            end: { line: 63, column: 73, offset: 2440 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 73, offset: 2440 },
            end: { line: 63, column: 82, offset: 2449 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 63, column: 82, offset: 2449 },
            end: { line: 63, column: 243, offset: 2610 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2368 },
        end: { line: 63, column: 243, offset: 2610 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 65, column: 1, offset: 2612 },
        end: { line: 65, column: 7, offset: 2618 }
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
            start: { line: 67, column: 1, offset: 2620 },
            end: { line: 67, column: 38, offset: 2657 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2620 },
        end: { line: 67, column: 38, offset: 2657 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 69, column: 1, offset: 2659 },
        end: { line: 69, column: 7, offset: 2665 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 71, column: 1, offset: 2667 },
            end: { line: 71, column: 75, offset: 2741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 71, column: 75, offset: 2741 },
            end: { line: 71, column: 81, offset: 2747 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 71, column: 81, offset: 2747 },
            end: { line: 71, column: 93, offset: 2759 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 71, column: 93, offset: 2759 },
            end: { line: 71, column: 102, offset: 2768 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 71, column: 102, offset: 2768 },
            end: { line: 71, column: 262, offset: 2928 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 71, column: 262, offset: 2928 },
            end: { line: 71, column: 268, offset: 2934 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 71, column: 268, offset: 2934 },
            end: { line: 71, column: 319, offset: 2985 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2667 },
        end: { line: 71, column: 319, offset: 2985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of Rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 73, column: 1, offset: 2987 },
            end: { line: 73, column: 171, offset: 3157 }
          }
        }
      ],
      position: {
        start: { line: 73, column: 1, offset: 2987 },
        end: { line: 73, column: 171, offset: 3157 }
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
                    start: { line: 75, column: 4, offset: 3162 },
                    end: { line: 75, column: 9, offset: 3167 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 75, column: 9, offset: 3167 },
                    end: { line: 75, column: 63, offset: 3221 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3162 },
                end: { line: 75, column: 63, offset: 3221 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3160 },
            end: { line: 75, column: 63, offset: 3221 }
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
                    start: { line: 76, column: 4, offset: 3225 },
                    end: { line: 76, column: 12, offset: 3233 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 76, column: 12, offset: 3233 },
                    end: { line: 76, column: 68, offset: 3289 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3225 },
                end: { line: 76, column: 68, offset: 3289 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3223 },
            end: { line: 76, column: 68, offset: 3289 }
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
                    start: { line: 77, column: 4, offset: 3293 },
                    end: { line: 77, column: 13, offset: 3302 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 77, column: 13, offset: 3302 },
                    end: { line: 77, column: 129, offset: 3418 }
                  }
                }
              ],
              position: {
                start: { line: 77, column: 4, offset: 3293 },
                end: { line: 77, column: 129, offset: 3418 }
              }
            }
          ],
          position: {
            start: { line: 77, column: 2, offset: 3291 },
            end: { line: 77, column: 129, offset: 3418 }
          }
        }
      ],
      position: {
        start: { line: 75, column: 2, offset: 3160 },
        end: { line: 77, column: 129, offset: 3418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 79, column: 1, offset: 3420 },
            end: { line: 79, column: 143, offset: 3562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 79, column: 143, offset: 3562 },
            end: { line: 79, column: 154, offset: 3573 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 79, column: 154, offset: 3573 },
            end: { line: 79, column: 159, offset: 3578 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 79, column: 159, offset: 3578 },
            end: { line: 79, column: 167, offset: 3586 }
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 79, column: 167, offset: 3586 },
            end: { line: 79, column: 240, offset: 3659 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 79, column: 240, offset: 3659 },
            end: { line: 79, column: 264, offset: 3683 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 79, column: 264, offset: 3683 },
            end: { line: 79, column: 265, offset: 3684 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 3420 },
        end: { line: 79, column: 265, offset: 3684 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 81, column: 1, offset: 3686 },
            end: { line: 81, column: 51, offset: 3736 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 81, column: 51, offset: 3736 },
            end: { line: 81, column: 64, offset: 3749 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 81, column: 64, offset: 3749 },
            end: { line: 81, column: 86, offset: 3771 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 3686 },
        end: { line: 81, column: 86, offset: 3771 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 83, column: 1, offset: 3773 },
        end: { line: 83, column: 7, offset: 3779 }
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
        start: { line: 85, column: 1, offset: 3781 },
        end: { line: 106, column: 4, offset: 4255 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to Rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 108, column: 1, offset: 4257 },
            end: { line: 108, column: 179, offset: 4435 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 4257 },
        end: { line: 108, column: 179, offset: 4435 }
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
        start: { line: 110, column: 1, offset: 4437 },
        end: { line: 125, column: 4, offset: 4742 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers at the ',
          position: {
            start: { line: 127, column: 1, offset: 4744 },
            end: { line: 127, column: 153, offset: 4896 }
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
                start: { line: 127, column: 154, offset: 4897 },
                end: { line: 127, column: 158, offset: 4901 }
              }
            }
          ],
          position: {
            start: { line: 127, column: 153, offset: 4896 },
            end: { line: 127, column: 170, offset: 4913 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 127, column: 170, offset: 4913 },
            end: { line: 127, column: 171, offset: 4914 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4744 },
        end: { line: 127, column: 171, offset: 4914 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 129, column: 1, offset: 4916 },
            end: { line: 129, column: 17, offset: 4932 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 4916 },
        end: { line: 129, column: 17, offset: 4932 }
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
                    start: { line: 130, column: 4, offset: 4936 },
                    end: { line: 130, column: 63, offset: 4995 }
                  }
                }
              ],
              position: {
                start: { line: 130, column: 4, offset: 4936 },
                end: { line: 130, column: 63, offset: 4995 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 2, offset: 4934 },
            end: { line: 130, column: 63, offset: 4995 }
          }
        }
      ],
      position: {
        start: { line: 130, column: 2, offset: 4934 },
        end: { line: 130, column: 63, offset: 4995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 132, column: 1, offset: 4997 },
            end: { line: 132, column: 15, offset: 5011 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 4997 },
        end: { line: 132, column: 15, offset: 5011 }
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
                    start: { line: 133, column: 4, offset: 5015 },
                    end: { line: 133, column: 102, offset: 5113 }
                  }
                }
              ],
              position: {
                start: { line: 133, column: 4, offset: 5015 },
                end: { line: 133, column: 102, offset: 5113 }
              }
            }
          ],
          position: {
            start: { line: 133, column: 2, offset: 5013 },
            end: { line: 133, column: 102, offset: 5113 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 2, offset: 5013 },
        end: { line: 133, column: 102, offset: 5113 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 134, column: 1, offset: 5114 }
  }
}