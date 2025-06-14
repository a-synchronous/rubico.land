export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V2\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2023-07-15\n' +
        'path: /blog/transducers-crash-course-rubico-v2\n' +
        'description: A crash course in transducers for rubico v2',
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
          value: 'The following example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 11, column: 1, offset: 522 },
            end: { line: 11, column: 89, offset: 610 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 11, column: 89, offset: 610 },
            end: { line: 11, column: 98, offset: 619 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 11, column: 98, offset: 619 },
            end: { line: 11, column: 112, offset: 633 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 11, column: 112, offset: 633 },
            end: { line: 11, column: 118, offset: 639 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 11, column: 118, offset: 639 },
            end: { line: 11, column: 119, offset: 640 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 522 },
        end: { line: 11, column: 119, offset: 640 }
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
        start: { line: 13, column: 1, offset: 642 },
        end: { line: 25, column: 4, offset: 907 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 27, column: 1, offset: 909 },
        end: { line: 27, column: 7, offset: 915 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 29, column: 1, offset: 917 },
            end: { line: 29, column: 352, offset: 1268 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 917 },
        end: { line: 29, column: 352, offset: 1268 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above example and converts it to use rubico transducers.',
          position: {
            start: { line: 31, column: 1, offset: 1270 },
            end: { line: 31, column: 84, offset: 1353 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1270 },
        end: { line: 31, column: 84, offset: 1353 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 33, column: 1, offset: 1355 },
        end: { line: 33, column: 7, offset: 1361 }
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
        start: { line: 35, column: 1, offset: 1363 },
        end: { line: 50, column: 4, offset: 1707 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 52, column: 1, offset: 1709 },
            end: { line: 52, column: 294, offset: 2002 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1709 },
        end: { line: 52, column: 294, offset: 2002 }
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
        start: { line: 54, column: 1, offset: 2004 },
        end: { line: 61, column: 4, offset: 2154 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 63, column: 1, offset: 2156 },
            end: { line: 63, column: 3, offset: 2158 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 63, column: 3, offset: 2158 },
            end: { line: 63, column: 12, offset: 2167 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 63, column: 12, offset: 2167 },
            end: { line: 63, column: 165, offset: 2320 }
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
                start: { line: 63, column: 166, offset: 2321 },
                end: { line: 63, column: 188, offset: 2343 }
              }
            }
          ],
          position: {
            start: { line: 63, column: 165, offset: 2320 },
            end: { line: 63, column: 284, offset: 2439 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 63, column: 284, offset: 2439 },
            end: { line: 63, column: 285, offset: 2440 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2156 },
        end: { line: 63, column: 285, offset: 2440 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 65, column: 1, offset: 2442 },
            end: { line: 65, column: 3, offset: 2444 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 65, column: 3, offset: 2444 },
            end: { line: 65, column: 15, offset: 2456 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 65, column: 15, offset: 2456 },
            end: { line: 65, column: 43, offset: 2484 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 65, column: 43, offset: 2484 },
            end: { line: 65, column: 52, offset: 2493 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 65, column: 52, offset: 2493 },
            end: { line: 65, column: 73, offset: 2514 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 65, column: 73, offset: 2514 },
            end: { line: 65, column: 82, offset: 2523 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 65, column: 82, offset: 2523 },
            end: { line: 65, column: 243, offset: 2684 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2442 },
        end: { line: 65, column: 243, offset: 2684 }
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
            start: { line: 67, column: 1, offset: 2686 },
            end: { line: 67, column: 38, offset: 2723 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2686 },
        end: { line: 67, column: 38, offset: 2723 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to try to implement transducers yourself. You could also use transducers through rubico. The ",
          position: {
            start: { line: 69, column: 1, offset: 2725 },
            end: { line: 69, column: 115, offset: 2839 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 69, column: 115, offset: 2839 },
            end: { line: 69, column: 127, offset: 2851 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for rubico's transducer API.",
          position: {
            start: { line: 69, column: 127, offset: 2851 },
            end: { line: 69, column: 195, offset: 2919 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2725 },
        end: { line: 69, column: 195, offset: 2919 }
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
                        start: { line: 71, column: 5, offset: 2925 },
                        end: { line: 71, column: 19, offset: 2939 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 71, column: 4, offset: 2924 },
                    end: { line: 71, column: 42, offset: 2962 }
                  }
                }
              ],
              position: {
                start: { line: 71, column: 4, offset: 2924 },
                end: { line: 71, column: 42, offset: 2962 }
              }
            }
          ],
          position: {
            start: { line: 71, column: 2, offset: 2922 },
            end: { line: 71, column: 42, offset: 2962 }
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
                        start: { line: 72, column: 5, offset: 2967 },
                        end: { line: 72, column: 22, offset: 2984 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 2966 },
                    end: { line: 72, column: 48, offset: 3010 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2966 },
                end: { line: 72, column: 48, offset: 3010 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2964 },
            end: { line: 72, column: 48, offset: 3010 }
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
                        start: { line: 73, column: 5, offset: 3015 },
                        end: { line: 73, column: 23, offset: 3033 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3014 },
                    end: { line: 73, column: 50, offset: 3060 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3014 },
                end: { line: 73, column: 50, offset: 3060 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3012 },
            end: { line: 73, column: 50, offset: 3060 }
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
                        start: { line: 74, column: 5, offset: 3065 },
                        end: { line: 74, column: 23, offset: 3083 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3064 },
                    end: { line: 74, column: 50, offset: 3110 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3064 },
                end: { line: 74, column: 50, offset: 3110 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3062 },
            end: { line: 74, column: 50, offset: 3110 }
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
                        start: { line: 75, column: 5, offset: 3115 },
                        end: { line: 75, column: 27, offset: 3137 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3114 },
                    end: { line: 75, column: 58, offset: 3168 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3114 },
                end: { line: 75, column: 58, offset: 3168 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3112 },
            end: { line: 75, column: 58, offset: 3168 }
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
                        start: { line: 76, column: 5, offset: 3173 },
                        end: { line: 76, column: 24, offset: 3192 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 76, column: 4, offset: 3172 },
                    end: { line: 76, column: 52, offset: 3220 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3172 },
                end: { line: 76, column: 52, offset: 3220 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3170 },
            end: { line: 76, column: 52, offset: 3220 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 2, offset: 2922 },
        end: { line: 76, column: 52, offset: 3220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 78, column: 1, offset: 3222 },
            end: { line: 78, column: 143, offset: 3364 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 78, column: 143, offset: 3364 },
            end: { line: 78, column: 154, offset: 3375 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 78, column: 154, offset: 3375 },
            end: { line: 78, column: 159, offset: 3380 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 78, column: 159, offset: 3380 },
            end: { line: 78, column: 167, offset: 3388 }
          }
        },
        {
          type: 'text',
          value: ", and it's also possible to execute a synchronous transducer with vanilla JavaScript ",
          position: {
            start: { line: 78, column: 167, offset: 3388 },
            end: { line: 78, column: 252, offset: 3473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 78, column: 252, offset: 3473 },
            end: { line: 78, column: 276, offset: 3497 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 78, column: 276, offset: 3497 },
            end: { line: 78, column: 277, offset: 3498 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3222 },
        end: { line: 78, column: 277, offset: 3498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 80, column: 1, offset: 3500 },
            end: { line: 80, column: 51, offset: 3550 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 80, column: 51, offset: 3550 },
            end: { line: 80, column: 64, offset: 3563 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 80, column: 64, offset: 3563 },
            end: { line: 80, column: 86, offset: 3585 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3500 },
        end: { line: 80, column: 86, offset: 3585 }
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
        start: { line: 82, column: 1, offset: 3587 },
        end: { line: 105, column: 4, offset: 4209 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 107, column: 1, offset: 4211 },
            end: { line: 107, column: 77, offset: 4287 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4211 },
        end: { line: 107, column: 77, offset: 4287 }
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
        start: { line: 109, column: 1, offset: 4289 },
        end: { line: 120, column: 4, offset: 4545 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 122, column: 1, offset: 4547 },
            end: { line: 122, column: 58, offset: 4604 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 122, column: 58, offset: 4604 },
            end: { line: 122, column: 69, offset: 4615 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 122, column: 69, offset: 4615 },
            end: { line: 122, column: 127, offset: 4673 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 4547 },
        end: { line: 122, column: 127, offset: 4673 }
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
        start: { line: 124, column: 1, offset: 4675 },
        end: { line: 140, column: 4, offset: 5007 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the ',
          position: {
            start: { line: 142, column: 1, offset: 5009 },
            end: { line: 142, column: 153, offset: 5161 }
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
                start: { line: 142, column: 154, offset: 5162 },
                end: { line: 142, column: 158, offset: 5166 }
              }
            }
          ],
          position: {
            start: { line: 142, column: 153, offset: 5161 },
            end: { line: 142, column: 181, offset: 5189 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 142, column: 181, offset: 5189 },
            end: { line: 142, column: 182, offset: 5190 }
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 5009 },
        end: { line: 142, column: 182, offset: 5190 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 144, column: 1, offset: 5192 },
            end: { line: 144, column: 17, offset: 5208 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 5192 },
        end: { line: 144, column: 17, offset: 5208 }
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
                    start: { line: 145, column: 4, offset: 5212 },
                    end: { line: 145, column: 63, offset: 5271 }
                  }
                }
              ],
              position: {
                start: { line: 145, column: 4, offset: 5212 },
                end: { line: 145, column: 63, offset: 5271 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 2, offset: 5210 },
            end: { line: 145, column: 63, offset: 5271 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 2, offset: 5210 },
        end: { line: 145, column: 63, offset: 5271 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 147, column: 1, offset: 5273 },
            end: { line: 147, column: 15, offset: 5287 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 5273 },
        end: { line: 147, column: 15, offset: 5287 }
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
                    start: { line: 148, column: 4, offset: 5291 },
                    end: { line: 148, column: 102, offset: 5389 }
                  }
                }
              ],
              position: {
                start: { line: 148, column: 4, offset: 5291 },
                end: { line: 148, column: 102, offset: 5389 }
              }
            }
          ],
          position: {
            start: { line: 148, column: 2, offset: 5289 },
            end: { line: 148, column: 102, offset: 5389 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 2, offset: 5289 },
        end: { line: 148, column: 102, offset: 5389 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 149, column: 1, offset: 5390 }
  }
}