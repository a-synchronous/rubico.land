export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Tong\n' +
        'date: 2020-10-02\n' +
        'path: /blog/2020/10/02/transducers-crash-course',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 4, offset: 125 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Transducers Crash Course',
          position: {
            start: { line: 8, column: 4, offset: 130 },
            end: { line: 8, column: 28, offset: 154 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 127 },
        end: { line: 8, column: 28, offset: 154 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. Say you wanted to square the odd numbers from one to one thousand.',
          position: {
            start: { line: 10, column: 1, offset: 156 },
            end: { line: 10, column: 173, offset: 328 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 156 },
        end: { line: 10, column: 173, offset: 328 }
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
        start: { line: 12, column: 1, offset: 330 },
        end: { line: 24, column: 4, offset: 595 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 597 },
        end: { line: 26, column: 7, offset: 603 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 28, column: 1, offset: 605 },
            end: { line: 28, column: 23, offset: 627 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 28, column: 23, offset: 627 },
            end: { line: 28, column: 36, offset: 640 }
          }
        },
        {
          type: 'text',
          value: ' goes through two batch transformations from ',
          position: {
            start: { line: 28, column: 36, offset: 640 },
            end: { line: 28, column: 81, offset: 685 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 81, offset: 685 },
            end: { line: 28, column: 90, offset: 694 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 90, offset: 694 },
            end: { line: 28, column: 95, offset: 699 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 95, offset: 699 },
            end: { line: 28, column: 101, offset: 705 }
          }
        },
        {
          type: 'text',
          value: ' - this is not so memory efficient.',
          position: {
            start: { line: 28, column: 101, offset: 705 },
            end: { line: 28, column: 136, offset: 740 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 605 },
        end: { line: 28, column: 136, offset: 740 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass without incurring a memory penalty.',
          position: {
            start: { line: 30, column: 1, offset: 742 },
            end: { line: 30, column: 114, offset: 855 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 742 },
        end: { line: 30, column: 114, offset: 855 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 857 },
        end: { line: 32, column: 7, offset: 863 }
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
        start: { line: 34, column: 1, offset: 865 },
        end: { line: 49, column: 4, offset: 1185 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 51, column: 1, offset: 1187 },
        end: { line: 55, column: 4, offset: 1285 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 57, column: 1, offset: 1287 },
        end: { line: 57, column: 7, offset: 1293 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 59, column: 1, offset: 1295 },
            end: { line: 59, column: 3, offset: 1297 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 59, column: 3, offset: 1297 },
            end: { line: 59, column: 12, offset: 1306 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and any number of items, and is usually used with some reducing implementation, e.g. ',
          position: {
            start: { line: 59, column: 12, offset: 1306 },
            end: { line: 59, column: 163, offset: 1457 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 59, column: 163, offset: 1457 },
            end: { line: 59, column: 187, offset: 1481 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 187, offset: 1481 },
            end: { line: 59, column: 188, offset: 1482 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1295 },
        end: { line: 59, column: 188, offset: 1482 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 61, column: 1, offset: 1484 },
            end: { line: 61, column: 3, offset: 1486 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 61, column: 3, offset: 1486 },
            end: { line: 61, column: 15, offset: 1498 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 61, column: 15, offset: 1498 },
            end: { line: 61, column: 43, offset: 1526 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 43, offset: 1526 },
            end: { line: 61, column: 52, offset: 1535 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 61, column: 52, offset: 1535 },
            end: { line: 61, column: 73, offset: 1556 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 73, offset: 1556 },
            end: { line: 61, column: 82, offset: 1565 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable chaining functionality on reducers - pass a reducer to a pipe of transducers to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 61, column: 82, offset: 1565 },
            end: { line: 61, column: 257, offset: 1740 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1484 },
        end: { line: 61, column: 257, offset: 1740 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 63, column: 1, offset: 1742 },
        end: { line: 63, column: 7, offset: 1748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://www.pngkit.com/png/detail/220-2206099_junior-alex-berlaga-helps-set-dominoes-world-records.png',
          alt: 'dominoes.png',
          position: {
            start: { line: 65, column: 1, offset: 1750 },
            end: { line: 65, column: 120, offset: 1869 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 1750 },
        end: { line: 65, column: 120, offset: 1869 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 67, column: 1, offset: 1871 },
        end: { line: 67, column: 7, offset: 1877 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 69, column: 1, offset: 1879 },
            end: { line: 69, column: 75, offset: 1953 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 69, column: 75, offset: 1953 },
            end: { line: 69, column: 81, offset: 1959 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 69, column: 81, offset: 1959 },
            end: { line: 69, column: 93, offset: 1971 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 69, column: 93, offset: 1971 },
            end: { line: 69, column: 102, offset: 1980 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 69, column: 102, offset: 1980 },
            end: { line: 69, column: 262, offset: 2140 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 69, column: 262, offset: 2140 },
            end: { line: 69, column: 268, offset: 2146 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 69, column: 268, offset: 2146 },
            end: { line: 69, column: 319, offset: 2197 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 1879 },
        end: { line: 69, column: 319, offset: 2197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 71, column: 1, offset: 2199 },
            end: { line: 71, column: 171, offset: 2369 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2199 },
        end: { line: 71, column: 171, offset: 2369 }
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
                    start: { line: 73, column: 4, offset: 2374 },
                    end: { line: 73, column: 9, offset: 2379 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 73, column: 9, offset: 2379 },
                    end: { line: 73, column: 63, offset: 2433 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2374 },
                end: { line: 73, column: 63, offset: 2433 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2372 },
            end: { line: 73, column: 63, offset: 2433 }
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
                    start: { line: 74, column: 4, offset: 2437 },
                    end: { line: 74, column: 12, offset: 2445 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 74, column: 12, offset: 2445 },
                    end: { line: 74, column: 68, offset: 2501 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 2437 },
                end: { line: 74, column: 68, offset: 2501 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 2435 },
            end: { line: 74, column: 68, offset: 2501 }
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
                    start: { line: 75, column: 4, offset: 2505 },
                    end: { line: 75, column: 13, offset: 2514 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 75, column: 13, offset: 2514 },
                    end: { line: 75, column: 129, offset: 2630 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 2505 },
                end: { line: 75, column: 129, offset: 2630 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 2503 },
            end: { line: 75, column: 129, offset: 2630 }
          }
        }
      ],
      position: {
        start: { line: 73, column: 2, offset: 2372 },
        end: { line: 75, column: 129, offset: 2630 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 77, column: 1, offset: 2632 },
            end: { line: 77, column: 143, offset: 2774 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 77, column: 143, offset: 2774 },
            end: { line: 77, column: 154, offset: 2785 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 77, column: 154, offset: 2785 },
            end: { line: 77, column: 159, offset: 2790 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 77, column: 159, offset: 2790 },
            end: { line: 77, column: 167, offset: 2798 }
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 77, column: 167, offset: 2798 },
            end: { line: 77, column: 240, offset: 2871 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 77, column: 240, offset: 2871 },
            end: { line: 77, column: 264, offset: 2895 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 77, column: 264, offset: 2895 },
            end: { line: 77, column: 265, offset: 2896 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2632 },
        end: { line: 77, column: 265, offset: 2896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 79, column: 1, offset: 2898 },
            end: { line: 79, column: 51, offset: 2948 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 79, column: 51, offset: 2948 },
            end: { line: 79, column: 64, offset: 2961 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 79, column: 64, offset: 2961 },
            end: { line: 79, column: 86, offset: 2983 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2898 },
        end: { line: 79, column: 86, offset: 2983 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 81, column: 1, offset: 2985 },
        end: { line: 81, column: 7, offset: 2991 }
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
        start: { line: 83, column: 1, offset: 2993 },
        end: { line: 104, column: 4, offset: 3467 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 106, column: 1, offset: 3469 },
            end: { line: 106, column: 179, offset: 3647 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3469 },
        end: { line: 106, column: 179, offset: 3647 }
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
        start: { line: 108, column: 1, offset: 3649 },
        end: { line: 123, column: 4, offset: 3954 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "I'll leave you today with three places where transducers shine:",
          position: {
            start: { line: 125, column: 1, offset: 3956 },
            end: { line: 125, column: 64, offset: 4019 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 3956 },
        end: { line: 125, column: 64, offset: 4019 }
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
                  type: 'text',
                  value: 'chaining transforming operations',
                  position: {
                    start: { line: 126, column: 5, offset: 4024 },
                    end: { line: 126, column: 37, offset: 4056 }
                  }
                }
              ],
              position: {
                start: { line: 126, column: 5, offset: 4024 },
                end: { line: 126, column: 37, offset: 4056 }
              }
            }
          ],
          position: {
            start: { line: 126, column: 2, offset: 4021 },
            end: { line: 126, column: 37, offset: 4056 }
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
                  value: 'transforming items of async iterables or potentially infinite sources',
                  position: {
                    start: { line: 127, column: 5, offset: 4061 },
                    end: { line: 127, column: 74, offset: 4130 }
                  }
                }
              ],
              position: {
                start: { line: 127, column: 5, offset: 4061 },
                end: { line: 127, column: 74, offset: 4130 }
              }
            }
          ],
          position: {
            start: { line: 127, column: 2, offset: 4058 },
            end: { line: 127, column: 74, offset: 4130 }
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
                  value: 'modifying the behavior of an existing reducing operation',
                  position: {
                    start: { line: 128, column: 5, offset: 4135 },
                    end: { line: 128, column: 61, offset: 4191 }
                  }
                }
              ],
              position: {
                start: { line: 128, column: 5, offset: 4135 },
                end: { line: 128, column: 61, offset: 4191 }
              }
            }
          ],
          position: {
            start: { line: 128, column: 2, offset: 4132 },
            end: { line: 128, column: 61, offset: 4191 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 2, offset: 4021 },
        end: { line: 128, column: 61, offset: 4191 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 131, column: 1, offset: 4194 },
            end: { line: 131, column: 15, offset: 4208 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4194 },
        end: { line: 131, column: 15, offset: 4208 }
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
                    start: { line: 132, column: 4, offset: 4212 },
                    end: { line: 132, column: 102, offset: 4310 }
                  }
                }
              ],
              position: {
                start: { line: 132, column: 4, offset: 4212 },
                end: { line: 132, column: 102, offset: 4310 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 2, offset: 4210 },
            end: { line: 132, column: 102, offset: 4310 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 2, offset: 4210 },
        end: { line: 132, column: 102, offset: 4310 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 134, column: 1, offset: 4312 },
            end: { line: 134, column: 17, offset: 4328 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 4312 },
        end: { line: 134, column: 17, offset: 4328 }
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
                    start: { line: 135, column: 4, offset: 4332 },
                    end: { line: 135, column: 63, offset: 4391 }
                  }
                }
              ],
              position: {
                start: { line: 135, column: 4, offset: 4332 },
                end: { line: 135, column: 63, offset: 4391 }
              }
            }
          ],
          position: {
            start: { line: 135, column: 2, offset: 4330 },
            end: { line: 135, column: 63, offset: 4391 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 2, offset: 4330 },
        end: { line: 135, column: 63, offset: 4391 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 136, column: 1, offset: 4392 }
  }
}