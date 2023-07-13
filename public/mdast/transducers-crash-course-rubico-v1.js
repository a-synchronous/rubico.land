export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V1\n' +
        'author: Richard Tong\n' +
        'date: 2020-10-02\n' +
        'path: /blog/transducers-crash-course-rubico-v1\n' +
        'description: A crash course in rubico v1 transducers',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 4, offset: 191 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. Say you wanted to square the odd numbers from one to one thousand.',
          position: {
            start: { line: 9, column: 1, offset: 193 },
            end: { line: 9, column: 173, offset: 365 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 193 },
        end: { line: 9, column: 173, offset: 365 }
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
        start: { line: 11, column: 1, offset: 367 },
        end: { line: 23, column: 4, offset: 632 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 25, column: 1, offset: 634 },
        end: { line: 25, column: 7, offset: 640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 27, column: 1, offset: 642 },
            end: { line: 27, column: 23, offset: 664 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 27, column: 23, offset: 664 },
            end: { line: 27, column: 36, offset: 677 }
          }
        },
        {
          type: 'text',
          value: ' goes through two batch transformations from ',
          position: {
            start: { line: 27, column: 36, offset: 677 },
            end: { line: 27, column: 81, offset: 722 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 27, column: 81, offset: 722 },
            end: { line: 27, column: 90, offset: 731 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 27, column: 90, offset: 731 },
            end: { line: 27, column: 95, offset: 736 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 27, column: 95, offset: 736 },
            end: { line: 27, column: 101, offset: 742 }
          }
        },
        {
          type: 'text',
          value: ' - this is not so memory efficient.',
          position: {
            start: { line: 27, column: 101, offset: 742 },
            end: { line: 27, column: 136, offset: 777 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 642 },
        end: { line: 27, column: 136, offset: 777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass without incurring a memory penalty.',
          position: {
            start: { line: 29, column: 1, offset: 779 },
            end: { line: 29, column: 114, offset: 892 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 779 },
        end: { line: 29, column: 114, offset: 892 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 31, column: 1, offset: 894 },
        end: { line: 31, column: 7, offset: 900 }
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
        start: { line: 33, column: 1, offset: 902 },
        end: { line: 48, column: 4, offset: 1222 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 50, column: 1, offset: 1224 },
        end: { line: 54, column: 4, offset: 1322 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 56, column: 1, offset: 1324 },
        end: { line: 56, column: 7, offset: 1330 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 58, column: 1, offset: 1332 },
            end: { line: 58, column: 3, offset: 1334 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 58, column: 3, offset: 1334 },
            end: { line: 58, column: 12, offset: 1343 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and any number of items, and is usually used with some reducing implementation, e.g. ',
          position: {
            start: { line: 58, column: 12, offset: 1343 },
            end: { line: 58, column: 163, offset: 1494 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 58, column: 163, offset: 1494 },
            end: { line: 58, column: 187, offset: 1518 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 58, column: 187, offset: 1518 },
            end: { line: 58, column: 188, offset: 1519 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 1332 },
        end: { line: 58, column: 188, offset: 1519 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 60, column: 1, offset: 1521 },
            end: { line: 60, column: 3, offset: 1523 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 60, column: 3, offset: 1523 },
            end: { line: 60, column: 15, offset: 1535 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 60, column: 15, offset: 1535 },
            end: { line: 60, column: 43, offset: 1563 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 60, column: 43, offset: 1563 },
            end: { line: 60, column: 52, offset: 1572 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 60, column: 52, offset: 1572 },
            end: { line: 60, column: 73, offset: 1593 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 60, column: 73, offset: 1593 },
            end: { line: 60, column: 82, offset: 1602 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable chaining functionality on reducers - pass a reducer to a pipe of transducers to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 60, column: 82, offset: 1602 },
            end: { line: 60, column: 257, offset: 1777 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 1521 },
        end: { line: 60, column: 257, offset: 1777 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 62, column: 1, offset: 1779 },
        end: { line: 62, column: 7, offset: 1785 }
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
            start: { line: 64, column: 1, offset: 1787 },
            end: { line: 64, column: 120, offset: 1906 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 1787 },
        end: { line: 64, column: 120, offset: 1906 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 66, column: 1, offset: 1908 },
        end: { line: 66, column: 7, offset: 1914 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 68, column: 1, offset: 1916 },
            end: { line: 68, column: 75, offset: 1990 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 68, column: 75, offset: 1990 },
            end: { line: 68, column: 81, offset: 1996 }
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 68, column: 81, offset: 1996 },
            end: { line: 68, column: 93, offset: 2008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 68, column: 93, offset: 2008 },
            end: { line: 68, column: 102, offset: 2017 }
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purely for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 68, column: 102, offset: 2017 },
            end: { line: 68, column: 262, offset: 2177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 68, column: 262, offset: 2177 },
            end: { line: 68, column: 268, offset: 2183 }
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 68, column: 268, offset: 2183 },
            end: { line: 68, column: 319, offset: 2234 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 1916 },
        end: { line: 68, column: 319, offset: 2234 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 70, column: 1, offset: 2236 },
            end: { line: 70, column: 171, offset: 2406 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2236 },
        end: { line: 70, column: 171, offset: 2406 }
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
                    start: { line: 72, column: 4, offset: 2411 },
                    end: { line: 72, column: 9, offset: 2416 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 72, column: 9, offset: 2416 },
                    end: { line: 72, column: 63, offset: 2470 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2411 },
                end: { line: 72, column: 63, offset: 2470 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2409 },
            end: { line: 72, column: 63, offset: 2470 }
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
                    start: { line: 73, column: 4, offset: 2474 },
                    end: { line: 73, column: 12, offset: 2482 }
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 73, column: 12, offset: 2482 },
                    end: { line: 73, column: 68, offset: 2538 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2474 },
                end: { line: 73, column: 68, offset: 2538 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2472 },
            end: { line: 73, column: 68, offset: 2538 }
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
                    start: { line: 74, column: 4, offset: 2542 },
                    end: { line: 74, column: 13, offset: 2551 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 74, column: 13, offset: 2551 },
                    end: { line: 74, column: 129, offset: 2667 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 2542 },
                end: { line: 74, column: 129, offset: 2667 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 2540 },
            end: { line: 74, column: 129, offset: 2667 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 2, offset: 2409 },
        end: { line: 74, column: 129, offset: 2667 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 76, column: 1, offset: 2669 },
            end: { line: 76, column: 143, offset: 2811 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 76, column: 143, offset: 2811 },
            end: { line: 76, column: 154, offset: 2822 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 76, column: 154, offset: 2822 },
            end: { line: 76, column: 159, offset: 2827 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 76, column: 159, offset: 2827 },
            end: { line: 76, column: 167, offset: 2835 }
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 76, column: 167, offset: 2835 },
            end: { line: 76, column: 240, offset: 2908 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 76, column: 240, offset: 2908 },
            end: { line: 76, column: 264, offset: 2932 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 76, column: 264, offset: 2932 },
            end: { line: 76, column: 265, offset: 2933 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2669 },
        end: { line: 76, column: 265, offset: 2933 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 78, column: 1, offset: 2935 },
            end: { line: 78, column: 51, offset: 2985 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 78, column: 51, offset: 2985 },
            end: { line: 78, column: 64, offset: 2998 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 78, column: 64, offset: 2998 },
            end: { line: 78, column: 86, offset: 3020 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2935 },
        end: { line: 78, column: 86, offset: 3020 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 80, column: 1, offset: 3022 },
        end: { line: 80, column: 7, offset: 3028 }
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
        start: { line: 82, column: 1, offset: 3030 },
        end: { line: 103, column: 4, offset: 3504 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transformations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 105, column: 1, offset: 3506 },
            end: { line: 105, column: 179, offset: 3684 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3506 },
        end: { line: 105, column: 179, offset: 3684 }
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
        start: { line: 107, column: 1, offset: 3686 },
        end: { line: 122, column: 4, offset: 3991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "I'll leave you today with three places where transducers shine:",
          position: {
            start: { line: 124, column: 1, offset: 3993 },
            end: { line: 124, column: 64, offset: 4056 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 3993 },
        end: { line: 124, column: 64, offset: 4056 }
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
                    start: { line: 125, column: 5, offset: 4061 },
                    end: { line: 125, column: 37, offset: 4093 }
                  }
                }
              ],
              position: {
                start: { line: 125, column: 5, offset: 4061 },
                end: { line: 125, column: 37, offset: 4093 }
              }
            }
          ],
          position: {
            start: { line: 125, column: 2, offset: 4058 },
            end: { line: 125, column: 37, offset: 4093 }
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
                    start: { line: 126, column: 5, offset: 4098 },
                    end: { line: 126, column: 74, offset: 4167 }
                  }
                }
              ],
              position: {
                start: { line: 126, column: 5, offset: 4098 },
                end: { line: 126, column: 74, offset: 4167 }
              }
            }
          ],
          position: {
            start: { line: 126, column: 2, offset: 4095 },
            end: { line: 126, column: 74, offset: 4167 }
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
                    start: { line: 127, column: 5, offset: 4172 },
                    end: { line: 127, column: 61, offset: 4228 }
                  }
                }
              ],
              position: {
                start: { line: 127, column: 5, offset: 4172 },
                end: { line: 127, column: 61, offset: 4228 }
              }
            }
          ],
          position: {
            start: { line: 127, column: 2, offset: 4169 },
            end: { line: 127, column: 61, offset: 4228 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 2, offset: 4058 },
        end: { line: 127, column: 61, offset: 4228 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 130, column: 1, offset: 4231 },
            end: { line: 130, column: 15, offset: 4245 }
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 4231 },
        end: { line: 130, column: 15, offset: 4245 }
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
                    start: { line: 131, column: 4, offset: 4249 },
                    end: { line: 131, column: 102, offset: 4347 }
                  }
                }
              ],
              position: {
                start: { line: 131, column: 4, offset: 4249 },
                end: { line: 131, column: 102, offset: 4347 }
              }
            }
          ],
          position: {
            start: { line: 131, column: 2, offset: 4247 },
            end: { line: 131, column: 102, offset: 4347 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 2, offset: 4247 },
        end: { line: 131, column: 102, offset: 4347 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 133, column: 1, offset: 4349 },
            end: { line: 133, column: 17, offset: 4365 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4349 },
        end: { line: 133, column: 17, offset: 4365 }
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
                    start: { line: 134, column: 4, offset: 4369 },
                    end: { line: 134, column: 63, offset: 4428 }
                  }
                }
              ],
              position: {
                start: { line: 134, column: 4, offset: 4369 },
                end: { line: 134, column: 63, offset: 4428 }
              }
            }
          ],
          position: {
            start: { line: 134, column: 2, offset: 4367 },
            end: { line: 134, column: 63, offset: 4428 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 2, offset: 4367 },
        end: { line: 134, column: 63, offset: 4428 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 135, column: 1, offset: 4429 }
  }
}