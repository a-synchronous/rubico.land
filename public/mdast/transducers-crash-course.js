export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Tong, King of Software at CLOUT\n' +
        'date: 2026-02-22\n' +
        'updated: 2026-05-27\n' +
        'path: /blog/transducers-crash-course\n' +
        'description: A crash course on Rubico transducers.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 212 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 214 },
            end: { line: 10, column: 288, offset: 501 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 214 },
        end: { line: 10, column: 288, offset: 501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 503 },
            end: { line: 12, column: 41, offset: 543 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 543 },
            end: { line: 12, column: 54, offset: 556 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 556 },
            end: { line: 12, column: 111, offset: 613 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 613 },
            end: { line: 12, column: 120, offset: 622 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 622 },
            end: { line: 12, column: 140, offset: 642 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 642 },
            end: { line: 12, column: 146, offset: 648 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 648 },
            end: { line: 12, column: 147, offset: 649 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 503 },
        end: { line: 12, column: 147, offset: 649 }
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
        start: { line: 14, column: 1, offset: 651 },
        end: { line: 24, column: 4, offset: 907 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 909 },
        end: { line: 26, column: 7, offset: 915 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 917 },
            end: { line: 28, column: 204, offset: 1120 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1120 },
            end: { line: 28, column: 210, offset: 1126 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1126 },
            end: { line: 28, column: 215, offset: 1131 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1131 },
            end: { line: 28, column: 224, offset: 1140 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1140 },
            end: { line: 28, column: 361, offset: 1277 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 917 },
        end: { line: 28, column: 361, offset: 1277 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1279 },
            end: { line: 30, column: 76, offset: 1354 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1279 },
        end: { line: 30, column: 76, offset: 1354 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1356 },
        end: { line: 32, column: 7, offset: 1362 }
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
        start: { line: 34, column: 1, offset: 1364 },
        end: { line: 49, column: 4, offset: 1710 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1712 },
            end: { line: 51, column: 236, offset: 1947 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1712 },
        end: { line: 51, column: 236, offset: 1947 }
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
        start: { line: 53, column: 1, offset: 1949 },
        end: { line: 57, column: 4, offset: 2092 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "A reducer is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with Rubico's ",
          position: {
            start: { line: 59, column: 1, offset: 2094 },
            end: { line: 59, column: 172, offset: 2265 }
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
                start: { line: 59, column: 173, offset: 2266 },
                end: { line: 59, column: 179, offset: 2272 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 172, offset: 2265 },
            end: { line: 59, column: 194, offset: 2287 }
          }
        },
        {
          type: 'text',
          value: ' or vanilla JavaScript ',
          position: {
            start: { line: 59, column: 194, offset: 2287 },
            end: { line: 59, column: 217, offset: 2310 }
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
                start: { line: 59, column: 218, offset: 2311 },
                end: { line: 59, column: 240, offset: 2333 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 217, offset: 2310 },
            end: { line: 59, column: 336, offset: 2429 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 336, offset: 2429 },
            end: { line: 59, column: 337, offset: 2430 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2094 },
        end: { line: 59, column: 337, offset: 2430 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer is a function that takes a reducer and returns another reducer. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 61, column: 1, offset: 2432 },
            end: { line: 61, column: 237, offset: 2668 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2432 },
        end: { line: 61, column: 237, offset: 2668 }
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
            start: { line: 63, column: 1, offset: 2670 },
            end: { line: 63, column: 38, offset: 2707 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2670 },
        end: { line: 63, column: 38, offset: 2707 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own, however Rubico offers production-ready transducers via its ",
          position: {
            start: { line: 65, column: 1, offset: 2709 },
            end: { line: 65, column: 119, offset: 2827 }
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
                start: { line: 65, column: 120, offset: 2828 },
                end: { line: 65, column: 130, offset: 2838 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 119, offset: 2827 },
            end: { line: 65, column: 149, offset: 2857 }
          }
        },
        {
          type: 'text',
          value: ' module.',
          position: {
            start: { line: 65, column: 149, offset: 2857 },
            end: { line: 65, column: 157, offset: 2865 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2709 },
        end: { line: 65, column: 157, offset: 2865 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 67, column: 1, offset: 2867 },
            end: { line: 67, column: 64, offset: 2930 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 67, column: 64, offset: 2930 },
            end: { line: 67, column: 73, offset: 2939 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 67, column: 73, offset: 2939 },
            end: { line: 67, column: 129, offset: 2995 }
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
                start: { line: 67, column: 130, offset: 2996 },
                end: { line: 67, column: 139, offset: 3005 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 129, offset: 2995 },
            end: { line: 67, column: 157, offset: 3023 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 67, column: 157, offset: 3023 },
            end: { line: 67, column: 162, offset: 3028 }
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
                start: { line: 67, column: 163, offset: 3029 },
                end: { line: 67, column: 169, offset: 3035 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 162, offset: 3028 },
            end: { line: 67, column: 184, offset: 3050 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 67, column: 184, offset: 3050 },
            end: { line: 67, column: 195, offset: 3061 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2867 },
        end: { line: 67, column: 195, offset: 3061 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 69, column: 1, offset: 3063 },
            end: { line: 69, column: 51, offset: 3113 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 69, column: 51, offset: 3113 },
            end: { line: 69, column: 64, offset: 3126 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 69, column: 64, offset: 3126 },
            end: { line: 69, column: 86, offset: 3148 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 3063 },
        end: { line: 69, column: 86, offset: 3148 }
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
        start: { line: 71, column: 1, offset: 3150 },
        end: { line: 95, column: 4, offset: 3837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources such as async generators.",
          position: {
            start: { line: 97, column: 1, offset: 3839 },
            end: { line: 97, column: 102, offset: 3940 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3839 },
        end: { line: 97, column: 102, offset: 3940 }
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
        start: { line: 99, column: 1, offset: 3942 },
        end: { line: 111, column: 4, offset: 4193 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above is equivalent to the below with vanilla JavaScript ',
          position: {
            start: { line: 113, column: 1, offset: 4195 },
            end: { line: 113, column: 62, offset: 4256 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 113, column: 62, offset: 4256 },
            end: { line: 113, column: 73, offset: 4267 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 113, column: 73, offset: 4267 },
            end: { line: 113, column: 74, offset: 4268 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 4195 },
        end: { line: 113, column: 74, offset: 4268 }
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
        start: { line: 115, column: 1, offset: 4270 },
        end: { line: 129, column: 4, offset: 4531 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Rubico's transducers are simple and useful for creating memory efficient data transformations. Get started with transducers at the ",
          position: {
            start: { line: 131, column: 1, offset: 4533 },
            end: { line: 131, column: 132, offset: 4664 }
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
                start: { line: 131, column: 133, offset: 4665 },
                end: { line: 131, column: 137, offset: 4669 }
              }
            }
          ],
          position: {
            start: { line: 131, column: 132, offset: 4664 },
            end: { line: 131, column: 156, offset: 4688 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 131, column: 156, offset: 4688 },
            end: { line: 131, column: 157, offset: 4689 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4533 },
        end: { line: 131, column: 157, offset: 4689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 133, column: 1, offset: 4691 },
            end: { line: 133, column: 17, offset: 4707 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4691 },
        end: { line: 133, column: 17, offset: 4707 }
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
                        start: { line: 134, column: 5, offset: 4712 },
                        end: { line: 134, column: 38, offset: 4745 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 134, column: 4, offset: 4711 },
                    end: { line: 134, column: 100, offset: 4807 }
                  }
                }
              ],
              position: {
                start: { line: 134, column: 4, offset: 4711 },
                end: { line: 134, column: 100, offset: 4807 }
              }
            }
          ],
          position: {
            start: { line: 134, column: 2, offset: 4709 },
            end: { line: 134, column: 100, offset: 4807 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 2, offset: 4709 },
        end: { line: 134, column: 100, offset: 4807 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 136, column: 1, offset: 4809 }
  }
}