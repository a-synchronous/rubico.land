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
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. Say you wanted to square the odd numbers from 1 - 1000.',
          position: {
            start: { line: 3, column: 1, offset: 29 },
            end: { line: 3, column: 162, offset: 190 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 29 },
        end: { line: 3, column: 162, offset: 190 },
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
        start: { line: 5, column: 1, offset: 192 },
        end: { line: 17, column: 4, offset: 457 },
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
        start: { line: 19, column: 1, offset: 459 },
        end: { line: 19, column: 7, offset: 465 },
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
            start: { line: 21, column: 1, offset: 467 },
            end: { line: 21, column: 23, offset: 489 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 21, column: 23, offset: 489 },
            end: { line: 21, column: 36, offset: 502 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' above goes through two batch transformations from ',
          position: {
            start: { line: 21, column: 36, offset: 502 },
            end: { line: 21, column: 87, offset: 553 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 21, column: 87, offset: 553 },
            end: { line: 21, column: 96, offset: 562 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 21, column: 96, offset: 562 },
            end: { line: 21, column: 101, offset: 567 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 21, column: 101, offset: 567 },
            end: { line: 21, column: 107, offset: 573 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', and is not very memory efficient.',
          position: {
            start: { line: 21, column: 107, offset: 573 },
            end: { line: 21, column: 142, offset: 608 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 467 },
        end: { line: 21, column: 142, offset: 608 },
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
            start: { line: 23, column: 1, offset: 610 },
            end: { line: 23, column: 114, offset: 723 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 610 },
        end: { line: 23, column: 114, offset: 723 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 25, column: 1, offset: 725 },
        end: { line: 25, column: 7, offset: 731 },
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
        start: { line: 27, column: 1, offset: 733 },
        end: { line: 42, column: 4, offset: 1053 },
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
        start: { line: 44, column: 1, offset: 1055 },
        end: { line: 48, column: 4, offset: 1153 },
        indent: [ 1, 1, 1, 1 ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 50, column: 1, offset: 1155 },
        end: { line: 50, column: 7, offset: 1161 },
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
            start: { line: 52, column: 1, offset: 1163 },
            end: { line: 52, column: 3, offset: 1165 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 52, column: 3, offset: 1165 },
            end: { line: 52, column: 12, offset: 1174 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that takes an accumulator and some item of a reducing operation and returns anything.',
          position: {
            start: { line: 52, column: 12, offset: 1174 },
            end: { line: 52, column: 112, offset: 1274 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1163 },
        end: { line: 52, column: 112, offset: 1274 },
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
            start: { line: 54, column: 1, offset: 1276 },
            end: { line: 54, column: 3, offset: 1278 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 54, column: 3, offset: 1278 },
            end: { line: 54, column: 15, offset: 1290 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a Reducer and returns another Reducer. This signature enables declarative, lazy processing of the items of a reducing operation. It also enables creating chained reducers by passing reducers to pipes of transducers. Imagine dominos falling over.',
          position: {
            start: { line: 54, column: 15, offset: 1290 },
            end: { line: 54, column: 286, offset: 1561 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 1276 },
        end: { line: 54, column: 286, offset: 1561 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 56, column: 1, offset: 1563 },
        end: { line: 56, column: 7, offset: 1569 },
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
            start: { line: 58, column: 1, offset: 1571 },
            end: { line: 58, column: 120, offset: 1690 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 1571 },
        end: { line: 58, column: 120, offset: 1690 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 60, column: 1, offset: 1692 },
        end: { line: 60, column: 7, offset: 1698 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The reducer that sets off a chain of transducers is called last. Because of this implementation detail, ',
          position: {
            start: { line: 62, column: 1, offset: 1700 },
            end: { line: 62, column: 105, offset: 1804 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 62, column: 105, offset: 1804 },
            end: { line: 62, column: 111, offset: 1810 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' behaves as ',
          position: {
            start: { line: 62, column: 111, offset: 1810 },
            end: { line: 62, column: 123, offset: 1822 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 62, column: 123, offset: 1822 },
            end: { line: 62, column: 132, offset: 1831 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' when passed a reducer. You can use ',
          position: {
            start: { line: 62, column: 132, offset: 1831 },
            end: { line: 62, column: 168, offset: 1867 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 62, column: 168, offset: 1867 },
            end: { line: 62, column: 174, offset: 1873 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to create chained functionality for reducers - ',
          position: {
            start: { line: 62, column: 174, offset: 1873 },
            end: { line: 62, column: 222, offset: 1921 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 62, column: 222, offset: 1921 },
            end: { line: 62, column: 228, offset: 1927 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' reads left to right in all cases.',
          position: {
            start: { line: 62, column: 228, offset: 1927 },
            end: { line: 62, column: 262, offset: 1961 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 1700 },
        end: { line: 62, column: 262, offset: 1961 },
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
            start: { line: 64, column: 1, offset: 1963 },
            end: { line: 64, column: 171, offset: 2133 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 1963 },
        end: { line: 64, column: 171, offset: 2133 },
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
                    start: { line: 66, column: 4, offset: 2138 },
                    end: { line: 66, column: 9, offset: 2143 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - map a function over items of a reducing operation',
                  position: {
                    start: { line: 66, column: 9, offset: 2143 },
                    end: { line: 66, column: 61, offset: 2195 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 2138 },
                end: { line: 66, column: 61, offset: 2195 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 66, column: 1, offset: 2135 },
            end: { line: 66, column: 61, offset: 2195 },
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
                    start: { line: 67, column: 4, offset: 2199 },
                    end: { line: 67, column: 12, offset: 2207 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items from a reducing operation',
                  position: {
                    start: { line: 67, column: 12, offset: 2207 },
                    end: { line: 67, column: 57, offset: 2252 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2199 },
                end: { line: 67, column: 57, offset: 2252 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 67, column: 1, offset: 2196 },
            end: { line: 67, column: 57, offset: 2252 },
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
                    start: { line: 68, column: 4, offset: 2256 },
                    end: { line: 68, column: 13, offset: 2265 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - additionally flatten the result of a mapping of a function over items of a reducing operation',
                  position: {
                    start: { line: 68, column: 13, offset: 2265 },
                    end: { line: 68, column: 109, offset: 2361 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2256 },
                end: { line: 68, column: 109, offset: 2361 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 68, column: 1, offset: 2253 },
            end: { line: 68, column: 109, offset: 2361 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2135 },
        end: { line: 68, column: 109, offset: 2361 },
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
            start: { line: 70, column: 1, offset: 2363 },
            end: { line: 70, column: 143, offset: 2505 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 70, column: 143, offset: 2505 },
            end: { line: 70, column: 154, offset: 2516 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 70, column: 154, offset: 2516 },
            end: { line: 70, column: 159, offset: 2521 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 70, column: 159, offset: 2521 },
            end: { line: 70, column: 167, offset: 2529 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 70, column: 167, offset: 2529 },
            end: { line: 70, column: 240, offset: 2602 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 70, column: 240, offset: 2602 },
            end: { line: 70, column: 264, offset: 2626 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 70, column: 264, offset: 2626 },
            end: { line: 70, column: 265, offset: 2627 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2363 },
        end: { line: 70, column: 265, offset: 2627 },
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
            start: { line: 72, column: 1, offset: 2629 },
            end: { line: 72, column: 51, offset: 2679 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 72, column: 51, offset: 2679 },
            end: { line: 72, column: 64, offset: 2692 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 72, column: 64, offset: 2692 },
            end: { line: 72, column: 86, offset: 2714 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2629 },
        end: { line: 72, column: 86, offset: 2714 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 74, column: 1, offset: 2716 },
        end: { line: 74, column: 7, offset: 2722 },
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
        start: { line: 76, column: 1, offset: 2724 },
        end: { line: 97, column: 4, offset: 3198 },
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
            start: { line: 99, column: 1, offset: 3200 },
            end: { line: 99, column: 180, offset: 3379 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3200 },
        end: { line: 99, column: 180, offset: 3379 },
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
        start: { line: 101, column: 1, offset: 3381 },
        end: { line: 116, column: 4, offset: 3686 },
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
          value: 'Dominos photo credits:',
          position: {
            start: { line: 118, column: 1, offset: 3688 },
            end: { line: 118, column: 23, offset: 3710 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 3688 },
        end: { line: 118, column: 23, offset: 3710 },
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
                        start: { line: 119, column: 4, offset: 3714 },
                        end: { line: 119, column: 102, offset: 3812 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 119, column: 4, offset: 3714 },
                    end: { line: 119, column: 102, offset: 3812 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 119, column: 4, offset: 3714 },
                end: { line: 119, column: 102, offset: 3812 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 119, column: 1, offset: 3711 },
            end: { line: 119, column: 102, offset: 3812 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 3711 },
        end: { line: 119, column: 102, offset: 3812 },
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
            start: { line: 121, column: 1, offset: 3814 },
            end: { line: 121, column: 17, offset: 3830 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 3814 },
        end: { line: 121, column: 17, offset: 3830 },
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
                        start: { line: 122, column: 4, offset: 3834 },
                        end: { line: 122, column: 63, offset: 3893 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 122, column: 4, offset: 3834 },
                    end: { line: 122, column: 63, offset: 3893 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 4, offset: 3834 },
                end: { line: 122, column: 63, offset: 3893 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 3831 },
            end: { line: 122, column: 63, offset: 3893 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3831 },
        end: { line: 122, column: 63, offset: 3893 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 123, column: 1, offset: 3894 }
  }
}
