export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: Transducers Crash Course\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2026-02-22\n' +
        'updated: 2026-10-09\n' +
        'path: /blog/transducers-crash-course\n' +
        'description: A crash course on Rubico transducers.',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 214 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Transducers enable composable and memory efficient wrangling of very large or even infinite sets of data. With transducers, each item of the data is transformed by all operations in a single pass, as opposed to the data having to go through batch transformations one operation at a time.',
          position: {
            start: { line: 10, column: 1, offset: 216 },
            end: { line: 10, column: 288, offset: 503 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 216 },
        end: { line: 10, column: 288, offset: 503 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example depicts the array ',
          position: {
            start: { line: 12, column: 1, offset: 505 },
            end: { line: 12, column: 41, offset: 545 }
          }
        },
        {
          type: 'inlineCode',
          value: 'manyNumbers',
          position: {
            start: { line: 12, column: 41, offset: 545 },
            end: { line: 12, column: 54, offset: 558 }
          }
        },
        {
          type: 'text',
          value: ' going through two batch transformations, one with Array ',
          position: {
            start: { line: 12, column: 54, offset: 558 },
            end: { line: 12, column: 111, offset: 615 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 12, column: 111, offset: 615 },
            end: { line: 12, column: 120, offset: 624 }
          }
        },
        {
          type: 'text',
          value: ' and one with Array ',
          position: {
            start: { line: 12, column: 120, offset: 624 },
            end: { line: 12, column: 140, offset: 644 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 12, column: 140, offset: 644 },
            end: { line: 12, column: 146, offset: 650 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 12, column: 146, offset: 650 },
            end: { line: 12, column: 147, offset: 651 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 505 },
        end: { line: 12, column: 147, offset: 651 }
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
        start: { line: 14, column: 1, offset: 653 },
        end: { line: 24, column: 4, offset: 909 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 26, column: 1, offset: 911 },
        end: { line: 26, column: 7, offset: 917 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With transducers, you can express the above transformation as a single pass. Each item would be both filtered and mapped before the next item in the array. Batch transformations such as those with Array ',
          position: {
            start: { line: 28, column: 1, offset: 919 },
            end: { line: 28, column: 204, offset: 1122 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 28, column: 204, offset: 1122 },
            end: { line: 28, column: 210, offset: 1128 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 28, column: 210, offset: 1128 },
            end: { line: 28, column: 215, offset: 1133 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 28, column: 215, offset: 1133 },
            end: { line: 28, column: 224, offset: 1142 }
          }
        },
        {
          type: 'text',
          value: ' must create an intermediate array between each operation; transducers do not have this requirement and so do not incur a memory penalty.',
          position: {
            start: { line: 28, column: 224, offset: 1142 },
            end: { line: 28, column: 361, offset: 1279 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 919 },
        end: { line: 28, column: 361, offset: 1279 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The next example takes the above and converts it to use Rubico transducers.',
          position: {
            start: { line: 30, column: 1, offset: 1281 },
            end: { line: 30, column: 76, offset: 1356 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1281 },
        end: { line: 30, column: 76, offset: 1356 }
      }
    },
    {
      type: 'html',
      value: '<br />',
      position: {
        start: { line: 32, column: 1, offset: 1358 },
        end: { line: 32, column: 7, offset: 1364 }
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
        start: { line: 34, column: 1, offset: 1366 },
        end: { line: 49, column: 4, offset: 1712 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now the numbers are transformed in a single pass, avoiding the memory penalty 🎉. Transducers offer many benefits and expressive power, but can be difficult to pick up. You can build intuition for transducers by starting with reducers.',
          position: {
            start: { line: 51, column: 1, offset: 1714 },
            end: { line: 51, column: 236, offset: 1949 }
          }
        }
      ],
      position: {
        start: { line: 51, column: 1, offset: 1714 },
        end: { line: 51, column: 236, offset: 1949 }
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
        start: { line: 53, column: 1, offset: 1951 },
        end: { line: 57, column: 4, offset: 2094 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "A reducer is a function that defines a relationship between an accumulator and an item in a transformation, and can be used in a reducing operation, such as with Rubico's ",
          position: {
            start: { line: 59, column: 1, offset: 2096 },
            end: { line: 59, column: 172, offset: 2267 }
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
                start: { line: 59, column: 173, offset: 2268 },
                end: { line: 59, column: 179, offset: 2274 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 172, offset: 2267 },
            end: { line: 59, column: 194, offset: 2289 }
          }
        },
        {
          type: 'text',
          value: ' or vanilla JavaScript ',
          position: {
            start: { line: 59, column: 194, offset: 2289 },
            end: { line: 59, column: 217, offset: 2312 }
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
                start: { line: 59, column: 218, offset: 2313 },
                end: { line: 59, column: 240, offset: 2335 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 217, offset: 2312 },
            end: { line: 59, column: 336, offset: 2431 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 59, column: 336, offset: 2431 },
            end: { line: 59, column: 337, offset: 2432 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 2096 },
        end: { line: 59, column: 337, offset: 2432 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer is a function that takes a reducer and returns another reducer. Transducers enable function chains with reducers - pass a reducer to a transducer to create a reducer with chained functionality. Imagine dominos falling over.',
          position: {
            start: { line: 61, column: 1, offset: 2434 },
            end: { line: 61, column: 237, offset: 2670 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 2434 },
        end: { line: 61, column: 237, offset: 2670 }
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
            start: { line: 63, column: 1, offset: 2672 },
            end: { line: 63, column: 38, offset: 2709 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2672 },
        end: { line: 63, column: 38, offset: 2709 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "It's a good exercise to implement transducers on your own, however Rubico offers production-ready transducers via its ",
          position: {
            start: { line: 65, column: 1, offset: 2711 },
            end: { line: 65, column: 119, offset: 2829 }
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
                start: { line: 65, column: 120, offset: 2830 },
                end: { line: 65, column: 130, offset: 2840 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 119, offset: 2829 },
            end: { line: 65, column: 149, offset: 2859 }
          }
        },
        {
          type: 'text',
          value: ' module.',
          position: {
            start: { line: 65, column: 149, offset: 2859 },
            end: { line: 65, column: 157, offset: 2867 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2711 },
        end: { line: 65, column: 157, offset: 2867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A transducer must be used with a reduce function such as Array ',
          position: {
            start: { line: 67, column: 1, offset: 2869 },
            end: { line: 67, column: 64, offset: 2932 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 67, column: 64, offset: 2932 },
            end: { line: 67, column: 73, offset: 2941 }
          }
        },
        {
          type: 'text',
          value: '. Rubico provides async-capable reduce functions as the ',
          position: {
            start: { line: 67, column: 73, offset: 2941 },
            end: { line: 67, column: 129, offset: 2997 }
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
                start: { line: 67, column: 130, offset: 2998 },
                end: { line: 67, column: 139, offset: 3007 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 129, offset: 2997 },
            end: { line: 67, column: 157, offset: 3025 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 67, column: 157, offset: 3025 },
            end: { line: 67, column: 162, offset: 3030 }
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
                start: { line: 67, column: 163, offset: 3031 },
                end: { line: 67, column: 169, offset: 3037 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 162, offset: 3030 },
            end: { line: 67, column: 184, offset: 3052 }
          }
        },
        {
          type: 'text',
          value: ' operators.',
          position: {
            start: { line: 67, column: 184, offset: 3052 },
            end: { line: 67, column: 195, offset: 3063 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2869 },
        end: { line: 67, column: 195, offset: 3063 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following example shows the function pipeline ',
          position: {
            start: { line: 69, column: 1, offset: 3065 },
            end: { line: 69, column: 51, offset: 3115 }
          }
        },
        {
          type: 'inlineCode',
          value: 'squaredOdds',
          position: {
            start: { line: 69, column: 51, offset: 3115 },
            end: { line: 69, column: 64, offset: 3128 }
          }
        },
        {
          type: 'text',
          value: ' used as a transducer.',
          position: {
            start: { line: 69, column: 64, offset: 3128 },
            end: { line: 69, column: 86, offset: 3150 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 3065 },
        end: { line: 69, column: 86, offset: 3150 }
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
        start: { line: 71, column: 1, offset: 3152 },
        end: { line: 95, column: 4, offset: 3839 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "With Rubico's transducers, it is possible to transform asynchronous sources such as async generators.",
          position: {
            start: { line: 97, column: 1, offset: 3841 },
            end: { line: 97, column: 102, offset: 3942 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3841 },
        end: { line: 97, column: 102, offset: 3942 }
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
        start: { line: 99, column: 1, offset: 3944 },
        end: { line: 111, column: 4, offset: 4195 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above is equivalent to the below with vanilla JavaScript ',
          position: {
            start: { line: 113, column: 1, offset: 4197 },
            end: { line: 113, column: 62, offset: 4258 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await',
          position: {
            start: { line: 113, column: 62, offset: 4258 },
            end: { line: 113, column: 73, offset: 4269 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 113, column: 73, offset: 4269 },
            end: { line: 113, column: 74, offset: 4270 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 4197 },
        end: { line: 113, column: 74, offset: 4270 }
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
        start: { line: 115, column: 1, offset: 4272 },
        end: { line: 129, column: 4, offset: 4533 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Rubico's transducers are simple and useful for creating memory efficient data transformations. Get started with transducers at the ",
          position: {
            start: { line: 131, column: 1, offset: 4535 },
            end: { line: 131, column: 132, offset: 4666 }
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
                start: { line: 131, column: 133, offset: 4667 },
                end: { line: 131, column: 137, offset: 4671 }
              }
            }
          ],
          position: {
            start: { line: 131, column: 132, offset: 4666 },
            end: { line: 131, column: 156, offset: 4690 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 131, column: 156, offset: 4690 },
            end: { line: 131, column: 157, offset: 4691 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4535 },
        end: { line: 131, column: 157, offset: 4691 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Further reading:',
          position: {
            start: { line: 133, column: 1, offset: 4693 },
            end: { line: 133, column: 17, offset: 4709 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4693 },
        end: { line: 133, column: 17, offset: 4709 }
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
                        start: { line: 134, column: 5, offset: 4714 },
                        end: { line: 134, column: 38, offset: 4747 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 134, column: 4, offset: 4713 },
                    end: { line: 134, column: 100, offset: 4809 }
                  }
                }
              ],
              position: {
                start: { line: 134, column: 4, offset: 4713 },
                end: { line: 134, column: 100, offset: 4809 }
              }
            }
          ],
          position: {
            start: { line: 134, column: 2, offset: 4711 },
            end: { line: 134, column: 100, offset: 4809 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 2, offset: 4711 },
        end: { line: 134, column: 100, offset: 4809 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 136, column: 1, offset: 4811 }
  }
}