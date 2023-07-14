export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V2\n' +
        'author: Richard Tong\n' +
        'date: 2020-10-02\n' +
        'path: /blog/transducers-crash-course-rubico-v2\n' +
        'description: A crash course in rubico v2 transducers',
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
          value: 'Above, ',
          position: {
            start: { line: 27, column: 1, offset: 642 },
            end: { line: 27, column: 8, offset: 649 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 27, column: 8, offset: 649 },
            end: { line: 27, column: 21, offset: 662 }
          }
        },
        {
          type: 'text',
          value: ' goes through two batch transformations from ',
          position: {
            start: { line: 27, column: 21, offset: 662 },
            end: { line: 27, column: 66, offset: 707 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 27, column: 66, offset: 707 },
            end: { line: 27, column: 75, offset: 716 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 27, column: 75, offset: 716 },
            end: { line: 27, column: 80, offset: 721 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 27, column: 80, offset: 721 },
            end: { line: 27, column: 86, offset: 727 }
          }
        },
        {
          type: 'text',
          value: '. This is not so memory efficient.',
          position: {
            start: { line: 27, column: 86, offset: 727 },
            end: { line: 27, column: 120, offset: 761 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 642 },
        end: { line: 27, column: 120, offset: 761 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass without incurring a memory penalty. An item in the transducer transformation would be both filtered and mapped before the next item in the reducing operation.',
          position: {
            start: { line: 29, column: 1, offset: 763 },
            end: { line: 29, column: 237, offset: 999 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 763 },
        end: { line: 29, column: 237, offset: 999 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 31, column: 1, offset: 1001 },
        end: { line: 31, column: 7, offset: 1007 }
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
        'console.log(\n' +
        '  transform(manyNumbers, squaredOdds, [])\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 33, column: 1, offset: 1009 },
        end: { line: 48, column: 4, offset: 1353 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Reducer = (\n' +
        '  accumulator any,\n' +
        '  value any,\n' +
        '  indexOrKey? number|string,\n' +
        '  collection? Foldable,\n' +
        ')=>(nextAccumulator Promise|any)\n' +
        '\n' +
        'type Transducer = Reducer=>Reducer',
      position: {
        start: { line: 50, column: 1, offset: 1355 },
        end: { line: 59, column: 4, offset: 1558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 61, column: 1, offset: 1560 },
            end: { line: 61, column: 3, offset: 1562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 61, column: 3, offset: 1562 },
            end: { line: 61, column: 12, offset: 1571 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and must be used in a reducing operation, such as with ',
          position: {
            start: { line: 61, column: 12, offset: 1571 },
            end: { line: 61, column: 166, offset: 1725 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 61, column: 166, offset: 1725 },
            end: { line: 61, column: 190, offset: 1749 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 61, column: 190, offset: 1749 },
            end: { line: 61, column: 191, offset: 1750 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1560 },
        end: { line: 61, column: 191, offset: 1750 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 63, column: 1, offset: 1752 },
            end: { line: 63, column: 3, offset: 1754 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 63, column: 3, offset: 1754 },
            end: { line: 63, column: 15, offset: 1766 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 63, column: 15, offset: 1766 },
            end: { line: 63, column: 43, offset: 1794 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 43, offset: 1794 },
            end: { line: 63, column: 52, offset: 1803 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 63, column: 52, offset: 1803 },
            end: { line: 63, column: 73, offset: 1824 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 73, offset: 1824 },
            end: { line: 63, column: 82, offset: 1833 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a pipe of transducers to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 63, column: 82, offset: 1833 },
            end: { line: 63, column: 252, offset: 2003 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 1752 },
        end: { line: 63, column: 252, offset: 2003 }
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
            start: { line: 65, column: 1, offset: 2005 },
            end: { line: 65, column: 120, offset: 2124 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2005 },
        end: { line: 65, column: 120, offset: 2124 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 67, column: 1, offset: 2126 },
            end: { line: 67, column: 5, offset: 2130 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 67, column: 5, offset: 2130 },
            end: { line: 67, column: 17, offset: 2142 }
          }
        },
        {
          type: 'text',
          value: " module of rubico offers the core building blocks for rubico's transducer API.",
          position: {
            start: { line: 67, column: 17, offset: 2142 },
            end: { line: 67, column: 95, offset: 2220 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2126 },
        end: { line: 67, column: 95, offset: 2220 }
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
                        start: { line: 69, column: 5, offset: 2226 },
                        end: { line: 69, column: 19, offset: 2240 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 69, column: 4, offset: 2225 },
                    end: { line: 69, column: 42, offset: 2263 }
                  }
                }
              ],
              position: {
                start: { line: 69, column: 4, offset: 2225 },
                end: { line: 69, column: 42, offset: 2263 }
              }
            }
          ],
          position: {
            start: { line: 69, column: 2, offset: 2223 },
            end: { line: 69, column: 42, offset: 2263 }
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
                        start: { line: 70, column: 5, offset: 2268 },
                        end: { line: 70, column: 22, offset: 2285 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 70, column: 4, offset: 2267 },
                    end: { line: 70, column: 48, offset: 2311 }
                  }
                }
              ],
              position: {
                start: { line: 70, column: 4, offset: 2267 },
                end: { line: 70, column: 48, offset: 2311 }
              }
            }
          ],
          position: {
            start: { line: 70, column: 2, offset: 2265 },
            end: { line: 70, column: 48, offset: 2311 }
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
                        start: { line: 71, column: 5, offset: 2316 },
                        end: { line: 71, column: 23, offset: 2334 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 2315 },
                    end: { line: 71, column: 50, offset: 2361 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 2315 },
                end: { line: 71, column: 50, offset: 2361 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 2313 },
            end: { line: 71, column: 50, offset: 2361 }
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
                        start: { line: 72, column: 5, offset: 2366 },
                        end: { line: 72, column: 23, offset: 2384 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 2365 },
                    end: { line: 72, column: 50, offset: 2411 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2365 },
                end: { line: 72, column: 50, offset: 2411 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2363 },
            end: { line: 72, column: 50, offset: 2411 }
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
                        start: { line: 73, column: 5, offset: 2416 },
                        end: { line: 73, column: 27, offset: 2438 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 2415 },
                    end: { line: 73, column: 58, offset: 2469 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2415 },
                end: { line: 73, column: 58, offset: 2469 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2413 },
            end: { line: 73, column: 58, offset: 2469 }
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
                        start: { line: 74, column: 5, offset: 2474 },
                        end: { line: 74, column: 24, offset: 2493 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 2473 },
                    end: { line: 74, column: 52, offset: 2521 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 2473 },
                end: { line: 74, column: 52, offset: 2521 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 2471 },
            end: { line: 74, column: 52, offset: 2521 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 2, offset: 2223 },
        end: { line: 74, column: 52, offset: 2521 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 76, column: 1, offset: 2523 },
            end: { line: 76, column: 143, offset: 2665 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 76, column: 143, offset: 2665 },
            end: { line: 76, column: 154, offset: 2676 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 76, column: 154, offset: 2676 },
            end: { line: 76, column: 159, offset: 2681 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 76, column: 159, offset: 2681 },
            end: { line: 76, column: 167, offset: 2689 }
          }
        },
        {
          type: 'text',
          value: ", and it's also possible to execute a synchronous transducer with vanilla JavaScript ",
          position: {
            start: { line: 76, column: 167, offset: 2689 },
            end: { line: 76, column: 252, offset: 2774 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 76, column: 252, offset: 2774 },
            end: { line: 76, column: 276, offset: 2798 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 76, column: 276, offset: 2798 },
            end: { line: 76, column: 277, offset: 2799 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2523 },
        end: { line: 76, column: 277, offset: 2799 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 78, column: 1, offset: 2801 },
            end: { line: 78, column: 51, offset: 2851 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 78, column: 51, offset: 2851 },
            end: { line: 78, column: 64, offset: 2864 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 78, column: 64, offset: 2864 },
            end: { line: 78, column: 86, offset: 2886 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2801 },
        end: { line: 78, column: 86, offset: 2886 }
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
        "// consume the transducer squaredOdds with rubico's transform\n" +
        'console.log(\n' +
        '  transform(manyNumbers, squaredOdds, [])\n' +
        ') // [1, 9, 25, 36, 49, ...]\n' +
        '\n' +
        'const arrayConcat = (array, value) => array.concat(value)\n' +
        '\n' +
        '// consume the transducer squaredOdds with vanilla JavaScript\n' +
        'console.log(\n' +
        '  manyNumbers.reduce(squaredOdds(arrayConcat), []),\n' +
        ') // [1, 9, 25, 36, 49, ...]',
      position: {
        start: { line: 80, column: 1, offset: 2888 },
        end: { line: 103, column: 4, offset: 3510 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 105, column: 1, offset: 3512 },
            end: { line: 105, column: 77, offset: 3588 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3512 },
        end: { line: 105, column: 77, offset: 3588 }
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
        'transform(myAsyncSource(), Transducer.passthrough, [])\n' +
        '  .then(console.log) // [1, 2, 3, 4, 5, ...]',
      position: {
        start: { line: 107, column: 1, offset: 3590 },
        end: { line: 118, column: 4, offset: 3846 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 120, column: 1, offset: 3848 },
            end: { line: 120, column: 58, offset: 3905 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 120, column: 58, offset: 3905 },
            end: { line: 120, column: 69, offset: 3916 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 120, column: 69, offset: 3916 },
            end: { line: 120, column: 127, offset: 3974 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 3848 },
        end: { line: 120, column: 127, offset: 3974 }
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
        'setTimeout(async function () {\n' +
        '  const array = []\n' +
        '  for await (const number of myAsyncSource()) {\n' +
        '    array.push(number)\n' +
        '  }\n' +
        '  console.log(array) // [1, 2, 3, 4, 5, ...]\n' +
        '}, 0)',
      position: {
        start: { line: 122, column: 1, offset: 3976 },
        end: { line: 138, column: 4, offset: 4308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the ',
          position: {
            start: { line: 140, column: 1, offset: 4310 },
            end: { line: 140, column: 153, offset: 4462 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/Transducer.map',
          children: [
            {
              type: 'text',
              value: 'docs',
              position: {
                start: { line: 140, column: 154, offset: 4463 },
                end: { line: 140, column: 158, offset: 4467 }
              }
            }
          ],
          position: {
            start: { line: 140, column: 153, offset: 4462 },
            end: { line: 140, column: 181, offset: 4490 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 140, column: 181, offset: 4490 },
            end: { line: 140, column: 182, offset: 4491 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 4310 },
        end: { line: 140, column: 182, offset: 4491 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 143, column: 1, offset: 4494 },
            end: { line: 143, column: 17, offset: 4510 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 4494 },
        end: { line: 143, column: 17, offset: 4510 }
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
                    start: { line: 144, column: 4, offset: 4514 },
                    end: { line: 144, column: 63, offset: 4573 }
                  }
                }
              ],
              position: {
                start: { line: 144, column: 4, offset: 4514 },
                end: { line: 144, column: 63, offset: 4573 }
              }
            }
          ],
          position: {
            start: { line: 144, column: 2, offset: 4512 },
            end: { line: 144, column: 63, offset: 4573 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 2, offset: 4512 },
        end: { line: 144, column: 63, offset: 4573 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 146, column: 1, offset: 4575 },
            end: { line: 146, column: 15, offset: 4589 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 4575 },
        end: { line: 146, column: 15, offset: 4589 }
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
                    start: { line: 147, column: 4, offset: 4593 },
                    end: { line: 147, column: 102, offset: 4691 }
                  }
                }
              ],
              position: {
                start: { line: 147, column: 4, offset: 4593 },
                end: { line: 147, column: 102, offset: 4691 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 2, offset: 4591 },
            end: { line: 147, column: 102, offset: 4691 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 2, offset: 4591 },
        end: { line: 147, column: 102, offset: 4691 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 148, column: 1, offset: 4692 }
  }
}