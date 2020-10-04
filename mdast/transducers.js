export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Transducers Crash Course',
          position: {
            start: { line: 1, column: 4, offset: 3 },
            end: { line: 1, column: 28, offset: 27 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 28, offset: 27 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. Say you wanted to square the odd numbers from one to one thousand.',
          position: {
            start: { line: 3, column: 1, offset: 29 },
            end: { line: 3, column: 173, offset: 201 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 29 },
        end: { line: 3, column: 173, offset: 201 },
        indent: []
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
        start: { line: 5, column: 1, offset: 203 },
        end: { line: 17, column: 4, offset: 468 },
        indent: [
          1, 1, 1, 1, 1,
          1, 1, 1, 1, 1,
          1, 1
        ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 19, column: 1, offset: 470 },
        end: { line: 19, column: 7, offset: 476 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 21, column: 1, offset: 478 },
            end: { line: 21, column: 23, offset: 500 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 21, column: 23, offset: 500 },
            end: { line: 21, column: 36, offset: 513 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' goes through two batch transformations from ',
          position: {
            start: { line: 21, column: 36, offset: 513 },
            end: { line: 21, column: 81, offset: 558 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 21, column: 81, offset: 558 },
            end: { line: 21, column: 90, offset: 567 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 21, column: 90, offset: 567 },
            end: { line: 21, column: 95, offset: 572 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 21, column: 95, offset: 572 },
            end: { line: 21, column: 101, offset: 578 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' - this is not so memory efficient.',
          position: {
            start: { line: 21, column: 101, offset: 578 },
            end: { line: 21, column: 136, offset: 613 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 478 },
        end: { line: 21, column: 136, offset: 613 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass without incurring a memory penalty.',
          position: {
            start: { line: 23, column: 1, offset: 615 },
            end: { line: 23, column: 114, offset: 728 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 615 },
        end: { line: 23, column: 114, offset: 728 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 25, column: 1, offset: 730 },
        end: { line: 25, column: 7, offset: 736 },
        indent: []
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
        start: { line: 27, column: 1, offset: 738 },
        end: { line: 42, column: 4, offset: 1058 },
        indent: [
          1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1,
          1, 1, 1
        ]
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
      position: {
        start: { line: 44, column: 1, offset: 1060 },
        end: { line: 48, column: 4, offset: 1158 },
        indent: [ 1, 1, 1, 1 ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 50, column: 1, offset: 1160 },
        end: { line: 50, column: 7, offset: 1166 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 52, column: 1, offset: 1168 },
            end: { line: 52, column: 3, offset: 1170 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 52, column: 3, offset: 1170 },
            end: { line: 52, column: 12, offset: 1179 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and any number of items, and is usually used with some reducing implementation, e.g. ',
          position: {
            start: { line: 52, column: 12, offset: 1179 },
            end: { line: 52, column: 163, offset: 1330 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 52, column: 163, offset: 1330 },
            end: { line: 52, column: 187, offset: 1354 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 52, column: 187, offset: 1354 },
            end: { line: 52, column: 188, offset: 1355 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1168 },
        end: { line: 52, column: 188, offset: 1355 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 54, column: 1, offset: 1357 },
            end: { line: 54, column: 3, offset: 1359 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 54, column: 3, offset: 1359 },
            end: { line: 54, column: 15, offset: 1371 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 54, column: 15, offset: 1371 },
            end: { line: 54, column: 43, offset: 1399 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 54, column: 43, offset: 1399 },
            end: { line: 54, column: 52, offset: 1408 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 54, column: 52, offset: 1408 },
            end: { line: 54, column: 73, offset: 1429 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 54, column: 73, offset: 1429 },
            end: { line: 54, column: 82, offset: 1438 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. Transducers enable chaining functionality on reducers - pass a reducer to a pipe of transducers to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 54, column: 82, offset: 1438 },
            end: { line: 54, column: 257, offset: 1613 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 1357 },
        end: { line: 54, column: 257, offset: 1613 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 56, column: 1, offset: 1615 },
        end: { line: 56, column: 7, offset: 1621 },
        indent: []
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
            start: { line: 58, column: 1, offset: 1623 },
            end: { line: 58, column: 120, offset: 1742 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 1623 },
        end: { line: 58, column: 120, offset: 1742 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 60, column: 1, offset: 1744 },
        end: { line: 60, column: 7, offset: 1750 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Since the reducer that sets off a pipeline of transducers is called last, ',
          position: {
            start: { line: 62, column: 1, offset: 1752 },
            end: { line: 62, column: 75, offset: 1826 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 62, column: 75, offset: 1826 },
            end: { line: 62, column: 81, offset: 1832 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 62, column: 81, offset: 1832 },
            end: { line: 62, column: 93, offset: 1844 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 62, column: 93, offset: 1844 },
            end: { line: 62, column: 102, offset: 1853 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and chains functions in reverse when a reducer is passed in data position. This decision is purly for API, and allows for all function pipelines created with ',
          position: {
            start: { line: 62, column: 102, offset: 1853 },
            end: { line: 62, column: 261, offset: 2012 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 62, column: 261, offset: 2012 },
            end: { line: 62, column: 267, offset: 2018 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', even those of transducers, to read left to right.',
          position: {
            start: { line: 62, column: 267, offset: 2018 },
            end: { line: 62, column: 318, offset: 2069 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 1752 },
        end: { line: 62, column: 318, offset: 2069 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The following operators are the core building blocks of rubico's transducer API. It is possible to perform the full spectrum of tranducer transformations with just these.",
          position: {
            start: { line: 64, column: 1, offset: 2071 },
            end: { line: 64, column: 171, offset: 2241 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2071 },
        end: { line: 64, column: 171, offset: 2241 },
        indent: []
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
                    start: { line: 66, column: 4, offset: 2246 },
                    end: { line: 66, column: 9, offset: 2251 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper to each item of a reducing operation',
                  position: {
                    start: { line: 66, column: 9, offset: 2251 },
                    end: { line: 66, column: 63, offset: 2305 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 2246 },
                end: { line: 66, column: 63, offset: 2305 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 66, column: 1, offset: 2243 },
            end: { line: 66, column: 63, offset: 2305 },
            indent: []
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
                    start: { line: 67, column: 4, offset: 2309 },
                    end: { line: 67, column: 12, offset: 2317 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items of a reducing operation by predicate',
                  position: {
                    start: { line: 67, column: 12, offset: 2317 },
                    end: { line: 67, column: 68, offset: 2373 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2309 },
                end: { line: 67, column: 68, offset: 2373 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 67, column: 1, offset: 2306 },
            end: { line: 67, column: 68, offset: 2373 },
            indent: []
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
                    start: { line: 68, column: 4, offset: 2377 },
                    end: { line: 68, column: 13, offset: 2386 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a flatMapper to each item of a reducing operation, flattening each item of the result into the accumulator.',
                  position: {
                    start: { line: 68, column: 13, offset: 2386 },
                    end: { line: 68, column: 129, offset: 2502 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2377 },
                end: { line: 68, column: 129, offset: 2502 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2374 },
            end: { line: 68, column: 129, offset: 2502 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2243 },
        end: { line: 68, column: 129, offset: 2502 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 70, column: 1, offset: 2504 },
            end: { line: 70, column: 143, offset: 2646 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 70, column: 143, offset: 2646 },
            end: { line: 70, column: 154, offset: 2657 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 70, column: 154, offset: 2657 },
            end: { line: 70, column: 159, offset: 2662 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 70, column: 159, offset: 2662 },
            end: { line: 70, column: 167, offset: 2670 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 70, column: 167, offset: 2670 },
            end: { line: 70, column: 240, offset: 2743 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 70, column: 240, offset: 2743 },
            end: { line: 70, column: 264, offset: 2767 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 70, column: 264, offset: 2767 },
            end: { line: 70, column: 265, offset: 2768 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2504 },
        end: { line: 70, column: 265, offset: 2768 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 72, column: 1, offset: 2770 },
            end: { line: 72, column: 51, offset: 2820 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 72, column: 51, offset: 2820 },
            end: { line: 72, column: 64, offset: 2833 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 72, column: 64, offset: 2833 },
            end: { line: 72, column: 86, offset: 2855 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2770 },
        end: { line: 72, column: 86, offset: 2855 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 74, column: 1, offset: 2857 },
        end: { line: 74, column: 7, offset: 2863 },
        indent: []
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
        start: { line: 76, column: 1, offset: 2865 },
        end: { line: 97, column: 4, offset: 3339 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphic nature, any transducer not used in a reduce implementation is capable of eager transforomations. Below is an eager version of the above transformation.",
          position: {
            start: { line: 99, column: 1, offset: 3341 },
            end: { line: 99, column: 180, offset: 3520 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3341 },
        end: { line: 99, column: 180, offset: 3520 },
        indent: []
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
        start: { line: 101, column: 1, offset: 3522 },
        end: { line: 116, column: 4, offset: 3827 },
        indent: [
          1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1,
          1, 1, 1
        ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "I'll leave you today with three places where transducers shine:",
          position: {
            start: { line: 118, column: 1, offset: 3829 },
            end: { line: 118, column: 64, offset: 3892 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3829 },
        end: { line: 118, column: 64, offset: 3892 },
        indent: []
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
                    start: { line: 119, column: 5, offset: 3897 },
                    end: { line: 119, column: 37, offset: 3929 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 119, column: 5, offset: 3897 },
                end: { line: 119, column: 37, offset: 3929 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3893 },
            end: { line: 119, column: 37, offset: 3929 },
            indent: []
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
                    start: { line: 120, column: 5, offset: 3934 },
                    end: { line: 120, column: 74, offset: 4003 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 120, column: 5, offset: 3934 },
                end: { line: 120, column: 74, offset: 4003 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 120, column: 1, offset: 3930 },
            end: { line: 120, column: 74, offset: 4003 },
            indent: []
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
                  value: 'modifying the functionality into an existing reducing operation',
                  position: {
                    start: { line: 121, column: 5, offset: 4008 },
                    end: { line: 121, column: 68, offset: 4071 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 121, column: 5, offset: 4008 },
                end: { line: 121, column: 68, offset: 4071 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 121, column: 1, offset: 4004 },
            end: { line: 121, column: 68, offset: 4071 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3893 },
        end: { line: 121, column: 68, offset: 4071 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 124, column: 1, offset: 4074 },
            end: { line: 124, column: 15, offset: 4088 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 4074 },
        end: { line: 124, column: 15, offset: 4088 },
        indent: []
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
                  url: 'https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/',
                  children: [
                    {
                      type: 'text',
                      value: 'https://www.pngkit.com/view/u2w7e6u2y3o0o0y3_junior-alex-berlaga-helps-set-dominoes-world-records/',
                      position: {
                        start: { line: 125, column: 4, offset: 4092 },
                        end: { line: 125, column: 102, offset: 4190 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 125, column: 4, offset: 4092 },
                    end: { line: 125, column: 102, offset: 4190 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 4, offset: 4092 },
                end: { line: 125, column: 102, offset: 4190 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 4089 },
            end: { line: 125, column: 102, offset: 4190 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 4089 },
        end: { line: 125, column: 102, offset: 4190 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 127, column: 1, offset: 4192 },
            end: { line: 127, column: 17, offset: 4208 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 4192 },
        end: { line: 127, column: 17, offset: 4208 },
        indent: []
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
                  url: 'https://tgvashworth.com/2014/08/31/csp-and-transducers.html',
                  children: [
                    {
                      type: 'text',
                      value: 'https://tgvashworth.com/2014/08/31/csp-and-transducers.html',
                      position: {
                        start: { line: 128, column: 4, offset: 4212 },
                        end: { line: 128, column: 63, offset: 4271 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 128, column: 4, offset: 4212 },
                    end: { line: 128, column: 63, offset: 4271 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 128, column: 4, offset: 4212 },
                end: { line: 128, column: 63, offset: 4271 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 128, column: 1, offset: 4209 },
            end: { line: 128, column: 63, offset: 4271 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 4209 },
        end: { line: 128, column: 63, offset: 4271 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 129, column: 1, offset: 4272 }
  }
}
