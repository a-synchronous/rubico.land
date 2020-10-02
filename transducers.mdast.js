export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Transducers',
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 14, offset: 13 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 14, offset: 13 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or infinite sets of data. Say you wanted to square just the odd numbers from 1 - 1000.',
          position: {
            start: { line: 2, column: 1, offset: 14 },
            end: { line: 2, column: 162, offset: 175 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 14 },
        end: { line: 2, column: 162, offset: 175 },
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
        start: { line: 4, column: 1, offset: 177 },
        end: { line: 16, column: 4, offset: 442 },
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
        start: { line: 18, column: 1, offset: 444 },
        end: { line: 18, column: 7, offset: 450 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 20, column: 1, offset: 452 },
            end: { line: 20, column: 14, offset: 465 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' above goes through two batch transformations from ',
          position: {
            start: { line: 20, column: 14, offset: 465 },
            end: { line: 20, column: 65, offset: 516 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 20, column: 65, offset: 516 },
            end: { line: 20, column: 74, offset: 525 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 20, column: 74, offset: 525 },
            end: { line: 20, column: 79, offset: 530 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 20, column: 79, offset: 530 },
            end: { line: 20, column: 85, offset: 536 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '. It is not very memory efficient. With transducers, you could express the above transformation as a single pass without incurring a memory penalty.',
          position: {
            start: { line: 20, column: 85, offset: 536 },
            end: { line: 20, column: 233, offset: 684 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 452 },
        end: { line: 20, column: 233, offset: 684 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 22, column: 1, offset: 686 },
        end: { line: 22, column: 7, offset: 692 },
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
        start: { line: 24, column: 1, offset: 694 },
        end: { line: 39, column: 4, offset: 1014 },
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
        start: { line: 41, column: 1, offset: 1016 },
        end: { line: 45, column: 4, offset: 1114 },
        indent: [ 1, 1, 1, 1 ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 47, column: 1, offset: 1116 },
        end: { line: 47, column: 7, offset: 1122 },
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
            start: { line: 49, column: 1, offset: 1124 },
            end: { line: 49, column: 3, offset: 1126 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 49, column: 3, offset: 1126 },
            end: { line: 49, column: 12, offset: 1135 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that takes an accumulator and some item of a reducing operation and returns anything.',
          position: {
            start: { line: 49, column: 12, offset: 1135 },
            end: { line: 49, column: 112, offset: 1235 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 49, column: 1, offset: 1124 },
        end: { line: 49, column: 112, offset: 1235 },
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
            start: { line: 51, column: 1, offset: 1237 },
            end: { line: 51, column: 3, offset: 1239 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 51, column: 3, offset: 1239 },
            end: { line: 51, column: 15, offset: 1251 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a Reducer and returns another Reducer. This signature enables declarative, lazy processing of the items of a reducing operation. It also enables creating chained reducers by passing reducers to pipes of transducers. Imagine dominos falling over.',
          position: {
            start: { line: 51, column: 15, offset: 1251 },
            end: { line: 51, column: 286, offset: 1522 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1237 },
        end: { line: 51, column: 286, offset: 1522 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 53, column: 1, offset: 1524 },
        end: { line: 53, column: 7, offset: 1530 },
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
            start: { line: 55, column: 1, offset: 1532 },
            end: { line: 55, column: 120, offset: 1651 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 1532 },
        end: { line: 55, column: 120, offset: 1651 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 57, column: 1, offset: 1653 },
        end: { line: 57, column: 7, offset: 1659 },
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
            start: { line: 59, column: 1, offset: 1661 },
            end: { line: 59, column: 105, offset: 1765 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 59, column: 105, offset: 1765 },
            end: { line: 59, column: 111, offset: 1771 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' will behave as ',
          position: {
            start: { line: 59, column: 111, offset: 1771 },
            end: { line: 59, column: 127, offset: 1787 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 59, column: 127, offset: 1787 },
            end: { line: 59, column: 136, offset: 1796 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' when passed a reducer. You can use ',
          position: {
            start: { line: 59, column: 136, offset: 1796 },
            end: { line: 59, column: 172, offset: 1832 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 59, column: 172, offset: 1832 },
            end: { line: 59, column: 178, offset: 1838 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' to create chained functionality for reducers - ',
          position: {
            start: { line: 59, column: 178, offset: 1838 },
            end: { line: 59, column: 226, offset: 1886 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 59, column: 226, offset: 1886 },
            end: { line: 59, column: 232, offset: 1892 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' will read left to right in all cases.',
          position: {
            start: { line: 59, column: 232, offset: 1892 },
            end: { line: 59, column: 270, offset: 1930 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1661 },
        end: { line: 59, column: 270, offset: 1930 },
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
            start: { line: 61, column: 1, offset: 1932 },
            end: { line: 61, column: 171, offset: 2102 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1932 },
        end: { line: 61, column: 171, offset: 2102 },
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
                    start: { line: 63, column: 4, offset: 2107 },
                    end: { line: 63, column: 9, offset: 2112 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - map a function over items of a reducing operation',
                  position: {
                    start: { line: 63, column: 9, offset: 2112 },
                    end: { line: 63, column: 61, offset: 2164 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 63, column: 4, offset: 2107 },
                end: { line: 63, column: 61, offset: 2164 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 63, column: 1, offset: 2104 },
            end: { line: 63, column: 61, offset: 2164 },
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
                    start: { line: 64, column: 4, offset: 2168 },
                    end: { line: 64, column: 12, offset: 2176 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - filter out items from a reducing operation',
                  position: {
                    start: { line: 64, column: 12, offset: 2176 },
                    end: { line: 64, column: 57, offset: 2221 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 2168 },
                end: { line: 64, column: 57, offset: 2221 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 64, column: 1, offset: 2165 },
            end: { line: 64, column: 57, offset: 2221 },
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
                    start: { line: 65, column: 4, offset: 2225 },
                    end: { line: 65, column: 13, offset: 2234 },
                    indent: []
                  }
                },
                {
                  type: 'text',
                  value: ' - additionally flatten the result of a mapping of a function over items of a reducing operation',
                  position: {
                    start: { line: 65, column: 13, offset: 2234 },
                    end: { line: 65, column: 109, offset: 2330 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 2225 },
                end: { line: 65, column: 109, offset: 2330 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 65, column: 1, offset: 2222 },
            end: { line: 65, column: 109, offset: 2330 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2104 },
        end: { line: 65, column: 109, offset: 2330 },
        indent: [ 1, 1 ]
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Due to rubico's polymorphism, transducers must be used with reducing implementations to have a transducing effect. This library provides async-capable implementations as ",
          position: {
            start: { line: 67, column: 1, offset: 2332 },
            end: { line: 67, column: 171, offset: 2502 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 67, column: 171, offset: 2502 },
            end: { line: 67, column: 182, offset: 2513 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 67, column: 182, offset: 2513 },
            end: { line: 67, column: 187, offset: 2518 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 67, column: 187, offset: 2518 },
            end: { line: 67, column: 195, offset: 2526 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ", though it's entirely possible to execute a synchronous transducer with ",
          position: {
            start: { line: 67, column: 195, offset: 2526 },
            end: { line: 67, column: 268, offset: 2599 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 67, column: 268, offset: 2599 },
            end: { line: 67, column: 292, offset: 2623 },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 67, column: 292, offset: 2623 },
            end: { line: 67, column: 293, offset: 2624 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2332 },
        end: { line: 67, column: 293, offset: 2624 },
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
            start: { line: 69, column: 1, offset: 2626 },
            end: { line: 69, column: 51, offset: 2676 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 69, column: 51, offset: 2676 },
            end: { line: 69, column: 64, offset: 2689 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 69, column: 64, offset: 2689 },
            end: { line: 69, column: 86, offset: 2711 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2626 },
        end: { line: 69, column: 86, offset: 2711 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 71, column: 1, offset: 2713 },
        end: { line: 71, column: 7, offset: 2719 },
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
        start: { line: 73, column: 1, offset: 2721 },
        end: { line: 94, column: 4, offset: 3195 },
        indent: [
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1
        ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 96, column: 1, offset: 3197 },
        end: { line: 96, column: 7, offset: 3203 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below is an eager version of the above - ',
          position: {
            start: { line: 98, column: 1, offset: 3205 },
            end: { line: 98, column: 46, offset: 3250 },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 98, column: 46, offset: 3250 },
            end: { line: 98, column: 59, offset: 3263 },
            indent: []
          }
        },
        {
          type: 'text',
          value: ' is not a transducer below because it is not used with a reducing operation.',
          position: {
            start: { line: 98, column: 59, offset: 3263 },
            end: { line: 98, column: 135, offset: 3339 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 3205 },
        end: { line: 98, column: 135, offset: 3339 },
        indent: []
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 100, column: 1, offset: 3341 },
        end: { line: 100, column: 7, offset: 3347 },
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
        start: { line: 102, column: 1, offset: 3349 },
        end: { line: 117, column: 4, offset: 3654 },
        indent: [
          1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1,
          1, 1, 1
        ]
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 119, column: 1, offset: 3656 },
        end: { line: 119, column: 7, offset: 3662 },
        indent: []
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Dominos photo credits:',
          position: {
            start: { line: 121, column: 1, offset: 3664 },
            end: { line: 121, column: 23, offset: 3686 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 3664 },
        end: { line: 121, column: 23, offset: 3686 },
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
                        start: { line: 122, column: 4, offset: 3690 },
                        end: { line: 122, column: 102, offset: 3788 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 122, column: 4, offset: 3690 },
                    end: { line: 122, column: 102, offset: 3788 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 122, column: 4, offset: 3690 },
                end: { line: 122, column: 102, offset: 3788 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 122, column: 1, offset: 3687 },
            end: { line: 122, column: 102, offset: 3788 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3687 },
        end: { line: 122, column: 102, offset: 3788 },
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
            start: { line: 124, column: 1, offset: 3790 },
            end: { line: 124, column: 17, offset: 3806 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 3790 },
        end: { line: 124, column: 17, offset: 3806 },
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
                        start: { line: 125, column: 4, offset: 3810 },
                        end: { line: 125, column: 63, offset: 3869 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 125, column: 4, offset: 3810 },
                    end: { line: 125, column: 63, offset: 3869 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 125, column: 4, offset: 3810 },
                end: { line: 125, column: 63, offset: 3869 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 125, column: 1, offset: 3807 },
            end: { line: 125, column: 63, offset: 3869 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 3807 },
        end: { line: 125, column: 63, offset: 3869 },
        indent: []
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 126, column: 1, offset: 3870 }
  }
}
