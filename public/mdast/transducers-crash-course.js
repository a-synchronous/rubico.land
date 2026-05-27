export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2026-02-22\n' +
        'updated: 2026-05-27\n' +
        'path: /blog/transducers-crash-course\n' +
        'description: A crash course on Rubico transducers.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 218 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 220 },
            end: { line: 10, column: 288, offset: 507 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 220 },
        end: { line: 10, column: 288, offset: 507 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 509 },
            end: { line: 12, column: 41, offset: 549 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 549 },
            end: { line: 12, column: 54, offset: 562 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 562 },
            end: { line: 12, column: 111, offset: 619 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 619 },
            end: { line: 12, column: 120, offset: 628 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 628 },
            end: { line: 12, column: 140, offset: 648 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 648 },
            end: { line: 12, column: 146, offset: 654 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 654 },
            end: { line: 12, column: 147, offset: 655 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 509 },
        end: { line: 12, column: 147, offset: 655 }
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
        'const transformed = manyNumbers.filter(isOdd).map(square)\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 14, column: 1, offset: 657 },
        end: { line: 24, column: 4, offset: 913 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 915 },
        end: { line: 26, column: 7, offset: 921 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 923 },
            end: { line: 28, column: 204, offset: 1126 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1126 },
            end: { line: 28, column: 210, offset: 1132 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1132 },
            end: { line: 28, column: 215, offset: 1137 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1137 },
            end: { line: 28, column: 224, offset: 1146 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1146 },
            end: { line: 28, column: 361, offset: 1283 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 923 },
        end: { line: 28, column: 361, offset: 1283 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1285 },
            end: { line: 30, column: 76, offset: 1360 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1285 },
        end: { line: 30, column: 76, offset: 1360 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1362 },
        end: { line: 32, column: 7, offset: 1368 }
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
        'const transformed = transform(manyNumbers, squaredOdds, [])\n' +
        '\n' +
        'console.log(transformed)',
      position: {
        start: { line: 34, column: 1, offset: 1370 },
        end: { line: 49, column: 4, offset: 1716 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1718 },
            end: { line: 51, column: 236, offset: 1953 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1718 },
        end: { line: 51, column: 236, offset: 1953 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Reducer = (accumulator any, value any)=>(nextAccumulator Promise|any)\n' +
        '\n' +
        'type Transducer = Reducer=>Reducer',
      position: {
        start: { line: 53, column: 1, offset: 1955 },
        end: { line: 57, column: 4, offset: 2098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "A reducer is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with Rubico's ",
          position: {
            start: { line: 59, column: 1, offset: 2100 },
            end: { line: 59, column: 172, offset: 2271 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/reduce',
          children: [
            {
              type: 'text',
              value: 'reduce',
              position: {
                start: { line: 59, column: 173, offset: 2272 },
                end: { line: 59, column: 179, offset: 2278 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 172, offset: 2271 },
            end: { line: 59, column: 194, offset: 2293 }
          }
        },
        {
          type: 'text',
          value: ' or vanilla JavaScript ',
          position: {
            start: { line: 59, column: 194, offset: 2293 },
            end: { line: 59, column: 217, offset: 2316 }
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
                start: { line: 59, column: 218, offset: 2317 },
                end: { line: 59, column: 240, offset: 2339 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 217, offset: 2316 },
            end: { line: 59, column: 336, offset: 2435 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 336, offset: 2435 },
            end: { line: 59, column: 337, offset: 2436 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2100 },
        end: { line: 59, column: 337, offset: 2436 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer is a function that takes a reducer and returns another reducer. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 61, column: 1, offset: 2438 },
            end: { line: 61, column: 237, offset: 2674 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2438 },
        end: { line: 61, column: 237, offset: 2674 }
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
            start: { line: 63, column: 1, offset: 2676 },
            end: { line: 63, column: 38, offset: 2713 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2676 },
        end: { line: 63, column: 38, offset: 2713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own, however Rubico offers production-ready transducers via its ",
          position: {
            start: { line: 65, column: 1, offset: 2715 },
            end: { line: 65, column: 119, offset: 2833 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/Transducer',
          children: [
            {
              type: 'text',
              value: 'Transducer',
              position: {
                start: { line: 65, column: 120, offset: 2834 },
                end: { line: 65, column: 130, offset: 2844 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 119, offset: 2833 },
            end: { line: 65, column: 149, offset: 2863 }
          }
        },
        {
          type: 'text',
          value: ' module.',
          position: {
            start: { line: 65, column: 149, offset: 2863 },
            end: { line: 65, column: 157, offset: 2871 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2715 },
        end: { line: 65, column: 157, offset: 2871 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 67, column: 1, offset: 2873 },
            end: { line: 67, column: 64, offset: 2936 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 67, column: 64, offset: 2936 },
            end: { line: 67, column: 73, offset: 2945 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 67, column: 73, offset: 2945 },
            end: { line: 67, column: 129, offset: 3001 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/transform',
          children: [
            {
              type: 'text',
              value: 'transform',
              position: {
                start: { line: 67, column: 130, offset: 3002 },
                end: { line: 67, column: 139, offset: 3011 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 129, offset: 3001 },
            end: { line: 67, column: 157, offset: 3029 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 67, column: 157, offset: 3029 },
            end: { line: 67, column: 162, offset: 3034 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/reduce',
          children: [
            {
              type: 'text',
              value: 'reduce',
              position: {
                start: { line: 67, column: 163, offset: 3035 },
                end: { line: 67, column: 169, offset: 3041 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 162, offset: 3034 },
            end: { line: 67, column: 184, offset: 3056 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 67, column: 184, offset: 3056 },
            end: { line: 67, column: 195, offset: 3067 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2873 },
        end: { line: 67, column: 195, offset: 3067 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 69, column: 1, offset: 3069 },
            end: { line: 69, column: 51, offset: 3119 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 69, column: 51, offset: 3119 },
            end: { line: 69, column: 64, offset: 3132 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 69, column: 64, offset: 3132 },
            end: { line: 69, column: 86, offset: 3154 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 3069 },
        end: { line: 69, column: 86, offset: 3154 }
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
        "// use the transducer squaredOdds with Rubico's transform\n" +
        'const transformedWithRubicoTransform = transform(manyNumbers, squaredOdds, [])\n' +
        '\n' +
        'console.log(transformedWithRubicoTransform)\n' +
        '\n' +
        'const arrayConcat = (array, value) => array.concat(value)\n' +
        '\n' +
        '// use the transducer squaredOdds with vanilla JavaScript\n' +
        'const transformedWithArrayReduce =\n' +
        '  manyNumbers.reduce(squaredOdds(arrayConcat), [])\n' +
        '\n' +
        'console.log(transformedWithArrayReduce)',
      position: {
        start: { line: 71, column: 1, offset: 3156 },
        end: { line: 95, column: 4, offset: 3843 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources such as async generators.",
          position: {
            start: { line: 97, column: 1, offset: 3845 },
            end: { line: 97, column: 102, offset: 3946 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3845 },
        end: { line: 97, column: 102, offset: 3946 }
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
        'const array = await transform(myAsyncSource(), Transducer.passthrough, [])\n' +
        '\n' +
        'console.log(array)',
      position: {
        start: { line: 99, column: 1, offset: 3948 },
        end: { line: 111, column: 4, offset: 4199 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above is equivalent to the below with vanilla JavaScript ',
          position: {
            start: { line: 113, column: 1, offset: 4201 },
            end: { line: 113, column: 62, offset: 4262 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 113, column: 62, offset: 4262 },
            end: { line: 113, column: 73, offset: 4273 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 113, column: 73, offset: 4273 },
            end: { line: 113, column: 74, offset: 4274 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 4201 },
        end: { line: 113, column: 74, offset: 4274 }
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
        'const array = []\n' +
        'for await (const number of myAsyncSource()) {\n' +
        '  array.push(number)\n' +
        '}\n' +
        'console.log(array)',
      position: {
        start: { line: 115, column: 1, offset: 4276 },
        end: { line: 129, column: 4, offset: 4537 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Rubico's transducers are simple and useful for creating memory efficient data transformations. Get started with transducers at the ",
          position: {
            start: { line: 131, column: 1, offset: 4539 },
            end: { line: 131, column: 132, offset: 4670 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/Transducer',
          children: [
            {
              type: 'text',
              value: 'docs',
              position: {
                start: { line: 131, column: 133, offset: 4671 },
                end: { line: 131, column: 137, offset: 4675 }
              }
            }
          ],
          position: {
            start: { line: 131, column: 132, offset: 4670 },
            end: { line: 131, column: 156, offset: 4694 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 131, column: 156, offset: 4694 },
            end: { line: 131, column: 157, offset: 4695 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4539 },
        end: { line: 131, column: 157, offset: 4695 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 133, column: 1, offset: 4697 },
            end: { line: 133, column: 17, offset: 4713 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4697 },
        end: { line: 133, column: 17, offset: 4713 }
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
                      value: 'CSP and transducers in JavaScript',
                      position: {
                        start: { line: 134, column: 5, offset: 4718 },
                        end: { line: 134, column: 38, offset: 4751 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 134, column: 4, offset: 4717 },
                    end: { line: 134, column: 100, offset: 4813 }
                  }
                }
              ],
              position: {
                start: { line: 134, column: 4, offset: 4717 },
                end: { line: 134, column: 100, offset: 4813 }
              }
            }
          ],
          position: {
            start: { line: 134, column: 2, offset: 4715 },
            end: { line: 134, column: 100, offset: 4813 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 2, offset: 4715 },
        end: { line: 134, column: 100, offset: 4813 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 136, column: 1, offset: 4815 }
  }
}