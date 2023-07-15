export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course for rubico V2\n' +
        'author: Richard Tong\n' +
        'date: 2023-07-15\n' +
        'path: /blog/transducers-crash-course-rubico-v2\n' +
        'description: A crash course in rubico v2 transducers. Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 4, offset: 298 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 9, column: 1, offset: 300 },
            end: { line: 9, column: 288, offset: 587 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 300 },
        end: { line: 9, column: 288, offset: 587 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts numbers going through two batch transformations, one with ',
          position: {
            start: { line: 11, column: 1, offset: 589 },
            end: { line: 11, column: 89, offset: 677 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 11, column: 89, offset: 677 },
            end: { line: 11, column: 98, offset: 686 }
          }
        },
        {
          type: 'text',
          value: ' and one with ',
          position: {
            start: { line: 11, column: 98, offset: 686 },
            end: { line: 11, column: 112, offset: 700 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 11, column: 112, offset: 700 },
            end: { line: 11, column: 118, offset: 706 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 11, column: 118, offset: 706 },
            end: { line: 11, column: 119, offset: 707 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 589 },
        end: { line: 11, column: 119, offset: 707 }
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
        start: { line: 13, column: 1, offset: 709 },
        end: { line: 25, column: 4, offset: 974 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 27, column: 1, offset: 976 },
        end: { line: 27, column: 7, offset: 982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you could express the above transformation as a single pass. An item in the transformation would be both filtered and mapped before the next item in the reducing operation. Batch transformations must create an intermediate array between each operation; transducers do not have this requirement and so do not incur the memory penalty.',
          position: {
            start: { line: 29, column: 1, offset: 984 },
            end: { line: 29, column: 352, offset: 1335 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 984 },
        end: { line: 29, column: 352, offset: 1335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above example and converts it to use rubico transducers.',
          position: {
            start: { line: 31, column: 1, offset: 1337 },
            end: { line: 31, column: 84, offset: 1420 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1337 },
        end: { line: 31, column: 84, offset: 1420 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 33, column: 1, offset: 1422 },
        end: { line: 33, column: 7, offset: 1428 }
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
        start: { line: 35, column: 1, offset: 1430 },
        end: { line: 50, column: 4, offset: 1774 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but they can be confusing to anyone picking them up for the first time. I have found it easiest to build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 52, column: 1, offset: 1776 },
            end: { line: 52, column: 294, offset: 2069 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1776 },
        end: { line: 52, column: 294, offset: 2069 }
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
        start: { line: 54, column: 1, offset: 2071 },
        end: { line: 63, column: 4, offset: 2274 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 65, column: 1, offset: 2276 },
            end: { line: 65, column: 3, offset: 2278 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 65, column: 3, offset: 2278 },
            end: { line: 65, column: 12, offset: 2287 }
          }
        },
        {
          type: 'text',
          value: ' is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with ',
          position: {
            start: { line: 65, column: 12, offset: 2287 },
            end: { line: 65, column: 165, offset: 2440 }
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
                start: { line: 65, column: 166, offset: 2441 },
                end: { line: 65, column: 188, offset: 2463 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 165, offset: 2440 },
            end: { line: 65, column: 284, offset: 2559 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 65, column: 284, offset: 2559 },
            end: { line: 65, column: 285, offset: 2560 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2276 },
        end: { line: 65, column: 285, offset: 2560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 67, column: 1, offset: 2562 },
            end: { line: 67, column: 3, offset: 2564 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 67, column: 3, offset: 2564 },
            end: { line: 67, column: 15, offset: 2576 }
          }
        },
        {
          type: 'text',
          value: ' is a function that takes a ',
          position: {
            start: { line: 67, column: 15, offset: 2576 },
            end: { line: 67, column: 43, offset: 2604 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 67, column: 43, offset: 2604 },
            end: { line: 67, column: 52, offset: 2613 }
          }
        },
        {
          type: 'text',
          value: ' and returns another ',
          position: {
            start: { line: 67, column: 52, offset: 2613 },
            end: { line: 67, column: 73, offset: 2634 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Reducer',
          position: {
            start: { line: 67, column: 73, offset: 2634 },
            end: { line: 67, column: 82, offset: 2643 }
          }
        },
        {
          type: 'text',
          value: '. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 67, column: 82, offset: 2643 },
            end: { line: 67, column: 243, offset: 2804 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2562 },
        end: { line: 67, column: 243, offset: 2804 }
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
            start: { line: 69, column: 1, offset: 2806 },
            end: { line: 69, column: 38, offset: 2843 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2806 },
        end: { line: 69, column: 38, offset: 2843 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to try to implement transducers yourself. You could also use transducers through rubico. The ",
          position: {
            start: { line: 71, column: 1, offset: 2845 },
            end: { line: 71, column: 115, offset: 2959 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 71, column: 115, offset: 2959 },
            end: { line: 71, column: 127, offset: 2971 }
          }
        },
        {
          type: 'text',
          value: " module offers the core building blocks for rubico's transducer API.",
          position: {
            start: { line: 71, column: 127, offset: 2971 },
            end: { line: 71, column: 195, offset: 3039 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2845 },
        end: { line: 71, column: 195, offset: 3039 }
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
                        start: { line: 73, column: 5, offset: 3045 },
                        end: { line: 73, column: 19, offset: 3059 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 73, column: 4, offset: 3044 },
                    end: { line: 73, column: 42, offset: 3082 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 3044 },
                end: { line: 73, column: 42, offset: 3082 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 3042 },
            end: { line: 73, column: 42, offset: 3082 }
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
                        start: { line: 74, column: 5, offset: 3087 },
                        end: { line: 74, column: 22, offset: 3104 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 4, offset: 3086 },
                    end: { line: 74, column: 48, offset: 3130 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3086 },
                end: { line: 74, column: 48, offset: 3130 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3084 },
            end: { line: 74, column: 48, offset: 3130 }
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
                        start: { line: 75, column: 5, offset: 3135 },
                        end: { line: 75, column: 23, offset: 3153 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 75, column: 4, offset: 3134 },
                    end: { line: 75, column: 50, offset: 3180 }
                  }
                }
              ],
              position: {
                start: { line: 75, column: 4, offset: 3134 },
                end: { line: 75, column: 50, offset: 3180 }
              }
            }
          ],
          position: {
            start: { line: 75, column: 2, offset: 3132 },
            end: { line: 75, column: 50, offset: 3180 }
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
                        start: { line: 76, column: 5, offset: 3185 },
                        end: { line: 76, column: 23, offset: 3203 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 76, column: 4, offset: 3184 },
                    end: { line: 76, column: 50, offset: 3230 }
                  }
                }
              ],
              position: {
                start: { line: 76, column: 4, offset: 3184 },
                end: { line: 76, column: 50, offset: 3230 }
              }
            }
          ],
          position: {
            start: { line: 76, column: 2, offset: 3182 },
            end: { line: 76, column: 50, offset: 3230 }
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
                        start: { line: 77, column: 5, offset: 3235 },
                        end: { line: 77, column: 27, offset: 3257 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 77, column: 4, offset: 3234 },
                    end: { line: 77, column: 58, offset: 3288 }
                  }
                }
              ],
              position: {
                start: { line: 77, column: 4, offset: 3234 },
                end: { line: 77, column: 58, offset: 3288 }
              }
            }
          ],
          position: {
            start: { line: 77, column: 2, offset: 3232 },
            end: { line: 77, column: 58, offset: 3288 }
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
                        start: { line: 78, column: 5, offset: 3293 },
                        end: { line: 78, column: 24, offset: 3312 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 78, column: 4, offset: 3292 },
                    end: { line: 78, column: 52, offset: 3340 }
                  }
                }
              ],
              position: {
                start: { line: 78, column: 4, offset: 3292 },
                end: { line: 78, column: 52, offset: 3340 }
              }
            }
          ],
          position: {
            start: { line: 78, column: 2, offset: 3290 },
            end: { line: 78, column: 52, offset: 3340 }
          }
        }
      ],
      position: {
        start: { line: 73, column: 2, offset: 3042 },
        end: { line: 78, column: 52, offset: 3340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reducing implementation to have a transducing effect. This library provides async-capable implementations as ',
          position: {
            start: { line: 80, column: 1, offset: 3342 },
            end: { line: 80, column: 143, offset: 3484 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 80, column: 143, offset: 3484 },
            end: { line: 80, column: 154, offset: 3495 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 80, column: 154, offset: 3495 },
            end: { line: 80, column: 159, offset: 3500 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 80, column: 159, offset: 3500 },
            end: { line: 80, column: 167, offset: 3508 }
          }
        },
        {
          type: 'text',
          value: ", and it's also possible to execute a synchronous transducer with vanilla JavaScript ",
          position: {
            start: { line: 80, column: 167, offset: 3508 },
            end: { line: 80, column: 252, offset: 3593 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array.prototype.reduce',
          position: {
            start: { line: 80, column: 252, offset: 3593 },
            end: { line: 80, column: 276, offset: 3617 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 80, column: 276, offset: 3617 },
            end: { line: 80, column: 277, offset: 3618 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 3342 },
        end: { line: 80, column: 277, offset: 3618 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 82, column: 1, offset: 3620 },
            end: { line: 82, column: 51, offset: 3670 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 82, column: 51, offset: 3670 },
            end: { line: 82, column: 64, offset: 3683 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 82, column: 64, offset: 3683 },
            end: { line: 82, column: 86, offset: 3705 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 3620 },
        end: { line: 82, column: 86, offset: 3705 }
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
        start: { line: 84, column: 1, offset: 3707 },
        end: { line: 107, column: 4, offset: 4329 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With rubico's transducers, it is possible to transform asynchronous sources.",
          position: {
            start: { line: 109, column: 1, offset: 4331 },
            end: { line: 109, column: 77, offset: 4407 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 4331 },
        end: { line: 109, column: 77, offset: 4407 }
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
        start: { line: 111, column: 1, offset: 4409 },
        end: { line: 122, column: 4, offset: 4665 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This is powerful in comparison to the vanilla JavaScript ',
          position: {
            start: { line: 124, column: 1, offset: 4667 },
            end: { line: 124, column: 58, offset: 4724 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 124, column: 58, offset: 4724 },
            end: { line: 124, column: 69, offset: 4735 }
          }
        },
        {
          type: 'text',
          value: ', where it takes more lines to express the same operation.',
          position: {
            start: { line: 124, column: 69, offset: 4735 },
            end: { line: 124, column: 127, offset: 4793 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 4667 },
        end: { line: 124, column: 127, offset: 4793 }
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
        start: { line: 126, column: 1, offset: 4795 },
        end: { line: 142, column: 4, offset: 5127 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers are useful for creating memory efficient data transformations, and are easy to use with rubico. You can get started with transducers at the ',
          position: {
            start: { line: 144, column: 1, offset: 5129 },
            end: { line: 144, column: 153, offset: 5281 }
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
                start: { line: 144, column: 154, offset: 5282 },
                end: { line: 144, column: 158, offset: 5286 }
              }
            }
          ],
          position: {
            start: { line: 144, column: 153, offset: 5281 },
            end: { line: 144, column: 181, offset: 5309 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 144, column: 181, offset: 5309 },
            end: { line: 144, column: 182, offset: 5310 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 5129 },
        end: { line: 144, column: 182, offset: 5310 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 146, column: 1, offset: 5312 },
            end: { line: 146, column: 17, offset: 5328 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 5312 },
        end: { line: 146, column: 17, offset: 5328 }
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
                    start: { line: 147, column: 4, offset: 5332 },
                    end: { line: 147, column: 63, offset: 5391 }
                  }
                }
              ],
              position: {
                start: { line: 147, column: 4, offset: 5332 },
                end: { line: 147, column: 63, offset: 5391 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 2, offset: 5330 },
            end: { line: 147, column: 63, offset: 5391 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 2, offset: 5330 },
        end: { line: 147, column: 63, offset: 5391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Photo credits:',
          position: {
            start: { line: 149, column: 1, offset: 5393 },
            end: { line: 149, column: 15, offset: 5407 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 5393 },
        end: { line: 149, column: 15, offset: 5407 }
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
                    start: { line: 150, column: 4, offset: 5411 },
                    end: { line: 150, column: 102, offset: 5509 }
                  }
                }
              ],
              position: {
                start: { line: 150, column: 4, offset: 5411 },
                end: { line: 150, column: 102, offset: 5509 }
              }
            }
          ],
          position: {
            start: { line: 150, column: 2, offset: 5409 },
            end: { line: 150, column: 102, offset: 5509 }
          }
        }
      ],
      position: {
        start: { line: 150, column: 2, offset: 5409 },
        end: { line: 150, column: 102, offset: 5509 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 151, column: 1, offset: 5510 }
  }
}