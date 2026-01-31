export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for Rubico V2\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2023-07-15\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/transducers-crash-course-rubico-v2\n' +
        'description: A crash course in transducers for Rubico v2',
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
          value: 'The following example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 12, column: 1, offset: 539 },
            end: { line: 12, column: 89, offset: 627 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 89, offset: 627 },
            end: { line: 12, column: 98, offset: 636 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 12, column: 98, offset: 636 },
            end: { line: 12, column: 112, offset: 650 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 112, offset: 650 },
            end: { line: 12, column: 118, offset: 656 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 118, offset: 656 },
            end: { line: 12, column: 119, offset: 657 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 539 },
        end: { line: 12, column: 119, offset: 657 }
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
        start: { line: 14, column: 1, offset: 659 },
        end: { line: 26, column: 4, offset: 924 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 28, column: 1, offset: 926 },
        end: { line: 28, column: 7, offset: 932 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 30, column: 1, offset: 934 },
            end: { line: 30, column: 352, offset: 1285 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 934 },
        end: { line: 30, column: 352, offset: 1285 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above example and converts it to use Rubico transducers.',
          position: {
            start: { line: 32, column: 1, offset: 1287 },
            end: { line: 32, column: 84, offset: 1370 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1287 },
        end: { line: 32, column: 84, offset: 1370 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 34, column: 1, offset: 1372 },
        end: { line: 34, column: 7, offset: 1378 }
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
        start: { line: 36, column: 1, offset: 1380 },
        end: { line: 51, column: 4, offset: 1724 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 53, column: 1, offset: 1726 },
            end: { line: 53, column: 294, offset: 2019 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1726 },
        end: { line: 53, column: 294, offset: 2019 }
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
        start: { line: 55, column: 1, offset: 2021 },
        end: { line: 62, column: 4, offset: 2171 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 64, column: 1, offset: 2173 },
            end: { line: 64, column: 3, offset: 2175 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 64, column: 3, offset: 2175 },
            end: { line: 64, column: 12, offset: 2184 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 64, column: 12, offset: 2184 },
            end: { line: 64, column: 165, offset: 2337 }
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
                start: { line: 64, column: 166, offset: 2338 },
                end: { line: 64, column: 188, offset: 2360 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 165, offset: 2337 },
            end: { line: 64, column: 284, offset: 2456 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 64, column: 284, offset: 2456 },
            end: { line: 64, column: 285, offset: 2457 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2173 },
        end: { line: 64, column: 285, offset: 2457 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 66, column: 1, offset: 2459 },
            end: { line: 66, column: 3, offset: 2461 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 66, column: 3, offset: 2461 },
            end: { line: 66, column: 15, offset: 2473 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 66, column: 15, offset: 2473 },
            end: { line: 66, column: 43, offset: 2501 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 66, column: 43, offset: 2501 },
            end: { line: 66, column: 52, offset: 2510 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 66, column: 52, offset: 2510 },
            end: { line: 66, column: 73, offset: 2531 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 66, column: 73, offset: 2531 },
            end: { line: 66, column: 82, offset: 2540 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 66, column: 82, offset: 2540 },
            end: { line: 66, column: 243, offset: 2701 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2459 },
        end: { line: 66, column: 243, offset: 2701 }
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
            start: { line: 68, column: 1, offset: 2703 },
            end: { line: 68, column: 38, offset: 2740 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2703 },
        end: { line: 68, column: 38, offset: 2740 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to try to implement transducers yourself. You could also use transducers through Rubico. The ",
          position: {
            start: { line: 70, column: 1, offset: 2742 },
            end: { line: 70, column: 115, offset: 2856 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 70, column: 115, offset: 2856 },
            end: { line: 70, column: 127, offset: 2868 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for Rubico's transducer API.",
          position: {
            start: { line: 70, column: 127, offset: 2868 },
            end: { line: 70, column: 195, offset: 2936 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2742 },
        end: { line: 70, column: 195, offset: 2936 }
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
                        start: { line: 72, column: 5, offset: 2942 },
                        end: { line: 72, column: 19, offset: 2956 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 72, column: 4, offset: 2941 },
                    end: { line: 72, column: 42, offset: 2979 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2941 },
                end: { line: 72, column: 42, offset: 2979 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2939 },
            end: { line: 72, column: 42, offset: 2979 }
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
                        start: { line: 73, column: 5, offset: 2984 },
                        end: { line: 73, column: 22, offset: 3001 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 2983 },
                    end: { line: 73, column: 48, offset: 3027 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2983 },
                end: { line: 73, column: 48, offset: 3027 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2981 },
            end: { line: 73, column: 48, offset: 3027 }
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
                        start: { line: 74, column: 5, offset: 3032 },
                        end: { line: 74, column: 23, offset: 3050 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3031 },
                    end: { line: 74, column: 50, offset: 3077 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3031 },
                end: { line: 74, column: 50, offset: 3077 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3029 },
            end: { line: 74, column: 50, offset: 3077 }
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
                        start: { line: 75, column: 5, offset: 3082 },
                        end: { line: 75, column: 23, offset: 3100 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3081 },
                    end: { line: 75, column: 50, offset: 3127 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3081 },
                end: { line: 75, column: 50, offset: 3127 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3079 },
            end: { line: 75, column: 50, offset: 3127 }
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
                        start: { line: 76, column: 5, offset: 3132 },
                        end: { line: 76, column: 27, offset: 3154 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 76, column: 4, offset: 3131 },
                    end: { line: 76, column: 58, offset: 3185 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3131 },
                end: { line: 76, column: 58, offset: 3185 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3129 },
            end: { line: 76, column: 58, offset: 3185 }
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
                        start: { line: 77, column: 5, offset: 3190 },
                        end: { line: 77, column: 24, offset: 3209 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 77, column: 4, offset: 3189 },
                    end: { line: 77, column: 52, offset: 3237 }
                  }
                }
              ],
              position: {
                start: { line: 77, column: 4, offset: 3189 },
                end: { line: 77, column: 52, offset: 3237 }
              }
            }
          ],
          position: {
            start: { line: 77, column: 2, offset: 3187 },
            end: { line: 77, column: 52, offset: 3237 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 2, offset: 2939 },
        end: { line: 77, column: 52, offset: 3237 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 79, column: 1, offset: 3239 },
            end: { line: 79, column: 143, offset: 3381 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 79, column: 143, offset: 3381 },
            end: { line: 79, column: 154, offset: 3392 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 79, column: 154, offset: 3392 },
            end: { line: 79, column: 159, offset: 3397 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 79, column: 159, offset: 3397 },
            end: { line: 79, column: 167, offset: 3405 }
          }
        },
        {
          type: 'text',
          value: ", and it's also possible to execute a synchronous transducer with vanilla JavaScript ",
          position: {
            start: { line: 79, column: 167, offset: 3405 },
            end: { line: 79, column: 252, offset: 3490 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 79, column: 252, offset: 3490 },
            end: { line: 79, column: 276, offset: 3514 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 79, column: 276, offset: 3514 },
            end: { line: 79, column: 277, offset: 3515 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 3239 },
        end: { line: 79, column: 277, offset: 3515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 81, column: 1, offset: 3517 },
            end: { line: 81, column: 51, offset: 3567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 81, column: 51, offset: 3567 },
            end: { line: 81, column: 64, offset: 3580 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 81, column: 64, offset: 3580 },
            end: { line: 81, column: 86, offset: 3602 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 3517 },
        end: { line: 81, column: 86, offset: 3602 }
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
        "// consume the transducer squaredOdds with Rubico's transform\n" +
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
        start: { line: 83, column: 1, offset: 3604 },
        end: { line: 106, column: 4, offset: 4226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 108, column: 1, offset: 4228 },
            end: { line: 108, column: 77, offset: 4304 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 4228 },
        end: { line: 108, column: 77, offset: 4304 }
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
        start: { line: 110, column: 1, offset: 4306 },
        end: { line: 121, column: 4, offset: 4562 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 123, column: 1, offset: 4564 },
            end: { line: 123, column: 58, offset: 4621 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 123, column: 58, offset: 4621 },
            end: { line: 123, column: 69, offset: 4632 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 123, column: 69, offset: 4632 },
            end: { line: 123, column: 127, offset: 4690 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 4564 },
        end: { line: 123, column: 127, offset: 4690 }
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
        start: { line: 125, column: 1, offset: 4692 },
        end: { line: 141, column: 4, offset: 5024 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with Rubico. You can get started with transducers at the ',
          position: {
            start: { line: 143, column: 1, offset: 5026 },
            end: { line: 143, column: 153, offset: 5178 }
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
                start: { line: 143, column: 154, offset: 5179 },
                end: { line: 143, column: 158, offset: 5183 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 153, offset: 5178 },
            end: { line: 143, column: 181, offset: 5206 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 143, column: 181, offset: 5206 },
            end: { line: 143, column: 182, offset: 5207 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5026 },
        end: { line: 143, column: 182, offset: 5207 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 145, column: 1, offset: 5209 },
            end: { line: 145, column: 17, offset: 5225 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5209 },
        end: { line: 145, column: 17, offset: 5225 }
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
                    start: { line: 146, column: 4, offset: 5229 },
                    end: { line: 146, column: 63, offset: 5288 }
                  }
                }
              ],
              position: {
                start: { line: 146, column: 4, offset: 5229 },
                end: { line: 146, column: 63, offset: 5288 }
              }
            }
          ],
          position: {
            start: { line: 146, column: 2, offset: 5227 },
            end: { line: 146, column: 63, offset: 5288 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 2, offset: 5227 },
        end: { line: 146, column: 63, offset: 5288 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 148, column: 1, offset: 5290 },
            end: { line: 148, column: 15, offset: 5304 }
          }
        }
      ],
      position: {
        start: { line: 148, column: 1, offset: 5290 },
        end: { line: 148, column: 15, offset: 5304 }
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
                    start: { line: 149, column: 4, offset: 5308 },
                    end: { line: 149, column: 102, offset: 5406 }
                  }
                }
              ],
              position: {
                start: { line: 149, column: 4, offset: 5308 },
                end: { line: 149, column: 102, offset: 5406 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 2, offset: 5306 },
            end: { line: 149, column: 102, offset: 5406 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 2, offset: 5306 },
        end: { line: 149, column: 102, offset: 5406 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 150, column: 1, offset: 5407 }
  }
}