export default {
  type: 'root',
  children: [
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'rubico',
              position: {
                start: { line: 1, column: 4, offset: 3 },
                end: { line: 1, column: 10, offset: 9 }
              }
            }
          ],
          position: {
            start: { line: 1, column: 3, offset: 2 },
            end: { line: 1, column: 33, offset: 32 }
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 33, offset: 32 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://raw.githubusercontent.com/a-synchronous/assets/master/rubico-logo.png',
          alt: 'rubico',
          position: {
            start: { line: 2, column: 1, offset: 33 },
            end: { line: 2, column: 89, offset: 121 }
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 33 },
        end: { line: 2, column: 89, offset: 121 }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'a shallow river in northeastern Italy, just south of Ravenna',
              position: {
                start: { line: 3, column: 3, offset: 124 },
                end: { line: 3, column: 63, offset: 184 }
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 124 },
            end: { line: 3, column: 63, offset: 184 }
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 122 },
        end: { line: 3, column: 63, offset: 184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/workflows/Node.js%20CI/badge.svg',
          alt: 'Node.js CI',
          position: {
            start: { line: 5, column: 1, offset: 186 },
            end: { line: 5, column: 88, offset: 273 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 5, column: 88, offset: 273 },
            end: { line: 6, column: 1, offset: 274 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://codecov.io/gh/a-synchronous/rubico',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://codecov.io/gh/a-synchronous/rubico/branch/master/graph/badge.svg',
              alt: 'codecov',
              position: {
                start: { line: 6, column: 2, offset: 275 },
                end: { line: 6, column: 86, offset: 359 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 274 },
            end: { line: 6, column: 131, offset: 404 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 6, column: 131, offset: 404 },
            end: { line: 7, column: 1, offset: 405 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.npmjs.com/package/rubico',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/npm/v/rubico.svg?style=flat',
              alt: 'npm version',
              position: {
                start: { line: 7, column: 2, offset: 406 },
                end: { line: 7, column: 68, offset: 472 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 405 },
            end: { line: 7, column: 107, offset: 511 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 7, column: 107, offset: 511 },
            end: { line: 8, column: 1, offset: 512 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://opensource.org/licenses/MIT',
          children: [
            {
              type: 'image',
              title: null,
              url: 'https://img.shields.io/badge/License-MIT-blue.svg',
              alt: 'License: MIT',
              position: {
                start: { line: 8, column: 2, offset: 513 },
                end: { line: 8, column: 68, offset: 579 }
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 512 },
            end: { line: 8, column: 106, offset: 617 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 186 },
        end: { line: 8, column: 106, offset: 617 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: '[a]synchronous functional programming',
          position: {
            start: { line: 10, column: 5, offset: 623 },
            end: { line: 10, column: 42, offset: 660 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 619 },
        end: { line: 10, column: 42, offset: 660 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, map, filter } = rubico\n' +
        '\n' +
        'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const asyncSquare = async number => number ** 2\n' +
        '\n' +
        'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'pipe(numbers, [\n' +
        '  filter(isOdd),\n' +
        '  map(asyncSquare),\n' +
        '  console.log, // [1, 9, 25]\n' +
        '])',
      position: {
        start: { line: 12, column: 1, offset: 662 },
        end: { line: 26, column: 4, offset: 938 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Installation',
          position: {
            start: { line: 28, column: 3, offset: 942 },
            end: { line: 28, column: 15, offset: 954 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 940 },
        end: { line: 28, column: 15, offset: 954 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/index.js',
          children: [
            {
              type: 'text',
              value: 'Core build',
              position: {
                start: { line: 29, column: 2, offset: 956 },
                end: { line: 29, column: 12, offset: 966 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 955 },
            end: { line: 29, column: 48, offset: 1002 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 29, column: 48, offset: 1002 },
            end: { line: 29, column: 50, offset: 1004 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/rubico.min.js',
          children: [
            {
              type: 'text',
              value: '~9.8 kB minified and gzipped',
              position: {
                start: { line: 29, column: 51, offset: 1005 },
                end: { line: 29, column: 79, offset: 1033 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 50, offset: 1004 },
            end: { line: 29, column: 125, offset: 1079 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 29, column: 125, offset: 1079 },
            end: { line: 29, column: 126, offset: 1080 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 955 },
        end: { line: 29, column: 126, offset: 1080 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 31, column: 1, offset: 1082 },
            end: { line: 31, column: 6, offset: 1087 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 31, column: 6, offset: 1087 },
            end: { line: 31, column: 11, offset: 1092 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1082 },
        end: { line: 31, column: 11, offset: 1092 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 32, column: 1, offset: 1093 },
        end: { line: 34, column: 4, offset: 1117 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require ',
          position: {
            start: { line: 36, column: 1, offset: 1119 },
            end: { line: 36, column: 9, offset: 1127 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 36, column: 9, offset: 1127 },
            end: { line: 36, column: 17, offset: 1135 }
          }
        },
        {
          type: 'text',
          value: ' in CommonJS.',
          position: {
            start: { line: 36, column: 17, offset: 1135 },
            end: { line: 36, column: 30, offset: 1148 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1119 },
        end: { line: 36, column: 30, offset: 1148 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// import rubico core globally\n' +
        "require('rubico/global')\n" +
        '\n' +
        '// import rubico core as rubico\n' +
        "const rubico = require('rubico')\n" +
        '\n' +
        '// import an operator from rubico core\n' +
        "const pipe = require('rubico/pipe')\n" +
        '\n' +
        '// import rubico/x as x\n' +
        "const x = require('rubico/x')\n" +
        '\n' +
        '// import an operator from rubico/x\n' +
        "const defaultsDeep = require('rubico/x/defaultsDeep')\n" +
        '\n' +
        "// import rubico's Transducer module\n" +
        "const Transducer = require('rubico/Transducer')",
      position: {
        start: { line: 37, column: 1, offset: 1149 },
        end: { line: 55, column: 4, offset: 1596 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import ',
          position: {
            start: { line: 57, column: 1, offset: 1598 },
            end: { line: 57, column: 8, offset: 1605 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 57, column: 8, offset: 1605 },
            end: { line: 57, column: 16, offset: 1613 }
          }
        },
        {
          type: 'text',
          value: ' in the browser.',
          position: {
            start: { line: 57, column: 16, offset: 1613 },
            end: { line: 57, column: 32, offset: 1629 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 1598 },
        end: { line: 57, column: 32, offset: 1629 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: '[htmlmixed]',
      value: '<!-- import rubico core globally -->\n' +
        '<script src="https://unpkg.com/rubico/dist/global.min.js"></script>\n' +
        '\n' +
        '<!-- import rubico core as rubico -->\n' +
        '<script src="https://unpkg.com/rubico/dist/rubico.min.js"></script>\n' +
        '\n' +
        '<!-- import an operator from rubico core -->\n' +
        '<script src="https://unpkg.com/rubico/dist/pipe.min.js"></script>\n' +
        '\n' +
        '<!-- import an operator from rubico/x -->\n' +
        '<script src="https://unpkg.com/rubico/dist/x/defaultsDeep.min.js"></script>\n' +
        '\n' +
        "<!-- import rubico's Transducer module -->\n" +
        '<script src="https://unpkg.com/rubico/dist/Transducer.min.js"></script>',
      position: {
        start: { line: 58, column: 1, offset: 1630 },
        end: { line: 73, column: 4, offset: 2212 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Motivation',
          position: {
            start: { line: 75, column: 3, offset: 2216 },
            end: { line: 75, column: 13, offset: 2226 }
          }
        }
      ],
      position: {
        start: { line: 75, column: 1, offset: 2214 },
        end: { line: 75, column: 13, offset: 2226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 77, column: 1, offset: 2228 },
            end: { line: 77, column: 23, offset: 2250 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2228 },
        end: { line: 77, column: 23, offset: 2250 }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'At a certain point in my career, I grew frustrated with the entanglement of my own code. While looking for something better, I found functional programming. I was excited by the idea of functional composition, but disillusioned by the redundancy of effectful types. I started rubico to capitalize on the prior while rebuking the latter. Many iterations since then, the library has grown into something I personally enjoy using, and continue to use to this day.',
              position: {
                start: { line: 78, column: 3, offset: 2253 },
                end: { line: 78, column: 463, offset: 2713 }
              }
            }
          ],
          position: {
            start: { line: 78, column: 3, offset: 2253 },
            end: { line: 78, column: 463, offset: 2713 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2251 },
        end: { line: 78, column: 463, offset: 2713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is founded on the following principles:',
          position: {
            start: { line: 80, column: 1, offset: 2715 },
            end: { line: 80, column: 47, offset: 2761 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2715 },
        end: { line: 80, column: 47, offset: 2761 }
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
                  value: 'asynchronous code should be simple',
                  position: {
                    start: { line: 81, column: 4, offset: 2765 },
                    end: { line: 81, column: 38, offset: 2799 }
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 2765 },
                end: { line: 81, column: 38, offset: 2799 }
              }
            }
          ],
          position: {
            start: { line: 81, column: 2, offset: 2763 },
            end: { line: 81, column: 38, offset: 2799 }
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
                  value: 'functional style should not care about async',
                  position: {
                    start: { line: 82, column: 4, offset: 2803 },
                    end: { line: 82, column: 48, offset: 2847 }
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 2803 },
                end: { line: 82, column: 48, offset: 2847 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 2, offset: 2801 },
            end: { line: 82, column: 48, offset: 2847 }
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
                  value: 'functional transformations should be composable, performant, and simple to express',
                  position: {
                    start: { line: 83, column: 4, offset: 2851 },
                    end: { line: 83, column: 86, offset: 2933 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 2851 },
                end: { line: 83, column: 86, offset: 2933 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 2849 },
            end: { line: 83, column: 86, offset: 2933 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 2, offset: 2763 },
        end: { line: 83, column: 86, offset: 2933 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 85, column: 1, offset: 2935 },
            end: { line: 85, column: 145, offset: 3079 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 1, offset: 2935 },
        end: { line: 85, column: 145, offset: 3079 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Introduction',
          position: {
            start: { line: 87, column: 3, offset: 3083 },
            end: { line: 87, column: 15, offset: 3095 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3081 },
        end: { line: 87, column: 15, offset: 3095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is a library for async-enabled functional programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 89, column: 1, offset: 3097 },
            end: { line: 89, column: 168, offset: 3264 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3097 },
        end: { line: 89, column: 168, offset: 3264 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '  // compose functions\n' +
        '  pipe, compose, tap,\n' +
        '\n' +
        '  // control flow\n' +
        '  switchCase,\n' +
        '\n' +
        '  // handle errors\n' +
        '  tryCatch,\n' +
        '\n' +
        '  // compose data\n' +
        '  all, assign, get, set, pick, omit,\n' +
        '\n' +
        '  // iterate\n' +
        '  forEach,\n' +
        '\n' +
        '  // transform data\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '\n' +
        '  // compose predicates\n' +
        '  and, or, not, some, every,\n' +
        '\n' +
        '  // comparison operators\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '\n' +
        '  // partial application\n' +
        '  thunkify, always, curry, __,\n' +
        '} = rubico',
      position: {
        start: { line: 91, column: 1, offset: 3266 },
        end: { line: 120, column: 4, offset: 3719 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With async-enabled, or [a]synchronous, functional programming, functions provided to the rubico operators may be asynchronous and return a Promise. Any promises in argument position are also resolved before continuing with the operation.',
          position: {
            start: { line: 122, column: 1, offset: 3721 },
            end: { line: 122, column: 238, offset: 3958 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3721 },
        end: { line: 122, column: 238, offset: 3958 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const helloPromise = Promise.resolve('hello')\n" +
        '\n' +
        "pipe(helloPromise, [ // helloPromise is resolved for 'hello'\n" +
        '  async greeting => `${greeting} world`,\n' +
        '  // the Promise returned from the async function is resolved\n' +
        '  // and the resolved value is passed to console.log\n' +
        '\n' +
        '  console.log, // hello world\n' +
        '])',
      position: {
        start: { line: 124, column: 1, offset: 3960 },
        end: { line: 134, column: 4, offset: 4288 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All rubico operators support both an eager and a lazy API. The eager API takes all required arguments and executes at once, while its lazy API takes only the non-data arguments and executes lazily, returning a function that expects the data arguments. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 136, column: 1, offset: 4290 },
            end: { line: 136, column: 312, offset: 4601 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4290 },
        end: { line: 136, column: 312, offset: 4601 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myObj = { a: 1, b: 2, c: 3 }\n' +
        '\n' +
        '// the first use of map is eager\n' +
        'const myDuplicatedSquaredObject = map(myObj, pipe([\n' +
        '  number => [number, number],\n' +
        '\n' +
        '  // the second use of map is lazy\n' +
        '  map(number => number ** 2),\n' +
        ']))\n' +
        '\n' +
        'console.log(myDuplicatedSquaredObject)\n' +
        '// { a: [1, 1], b: [4, 4], c: [9, 9] }',
      position: {
        start: { line: 138, column: 1, offset: 4603 },
        end: { line: 151, column: 4, offset: 4933 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 153, column: 1, offset: 4935 },
            end: { line: 153, column: 182, offset: 5116 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 153, column: 182, offset: 5116 },
            end: { line: 153, column: 187, offset: 5121 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 153, column: 187, offset: 5121 },
            end: { line: 153, column: 219, offset: 5153 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 153, column: 219, offset: 5153 },
            end: { line: 153, column: 224, offset: 5158 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 153, column: 224, offset: 5158 },
            end: { line: 153, column: 240, offset: 5174 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4935 },
        end: { line: 153, column: 240, offset: 5174 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, tap, map, filter } = rubico\n' +
        '\n' +
        'const toTodosUrl = id => `https://jsonplaceholder.typicode.com/todos/${id}`\n' +
        '\n' +
        'const todoIDs = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'pipe(todoIDs, [\n' +
        '\n' +
        '  // fetch todos per id of todoIDs\n' +
        '  map(pipe([\n' +
        '    toTodosUrl,\n' +
        '    fetch,\n' +
        '    response => response.json(),\n' +
        '\n' +
        '    tap(console.log),\n' +
        "    // { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
        "    // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
        "    // { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
        "    // { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
        "    // { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }\n" +
        '  ])),\n' +
        '\n' +
        '  // group the todos by userId in a new Map\n' +
        '  function createUserTodosMap(todos) {\n' +
        '    const userTodosMap = new Map()\n' +
        '    for (const todo of todos) {\n' +
        '      const { userId } = todo\n' +
        '      if (userTodosMap.has(userId)) {\n' +
        '        userTodosMap.get(userId).push(todo)\n' +
        '      } else {\n' +
        '        userTodosMap.set(userId, [todo])\n' +
        '      }\n' +
        '    }\n' +
        '    return userTodosMap\n' +
        '  },\n' +
        '\n' +
        '  // filter for completed todos\n' +
        '  // map iterates through each value (array of todos) of the userTodosMap\n' +
        '  // filter iterates through each todo of the arrays of todos\n' +
        '  map(filter(function didComplete(todo) {\n' +
        '    return todo.completed\n' +
        '  })),\n' +
        '\n' +
        '  tap(console.log),\n' +
        '  // Map(1) {\n' +
        "  //   1 => [ { userId: 1, id: 4, title: 'et porro tempora', completed: true } ]\n" +
        '  // }\n' +
        '])',
      position: {
        start: { line: 155, column: 1, offset: 5176 },
        end: { line: 204, column: 4, offset: 6627 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico offers transducers in its ',
          position: {
            start: { line: 206, column: 1, offset: 6629 },
            end: { line: 206, column: 34, offset: 6662 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 206, column: 34, offset: 6662 },
            end: { line: 206, column: 46, offset: 6674 }
          }
        },
        {
          type: 'text',
          value: ' module. You can consume these transducers with the ',
          position: {
            start: { line: 206, column: 46, offset: 6674 },
            end: { line: 206, column: 98, offset: 6726 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 206, column: 98, offset: 6726 },
            end: { line: 206, column: 109, offset: 6737 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 206, column: 109, offset: 6737 },
            end: { line: 206, column: 114, offset: 6742 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 114, offset: 6742 },
            end: { line: 206, column: 123, offset: 6751 }
          }
        },
        {
          type: 'text',
          value: ' operators. You should use ',
          position: {
            start: { line: 206, column: 123, offset: 6751 },
            end: { line: 206, column: 150, offset: 6778 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 150, offset: 6778 },
            end: { line: 206, column: 159, offset: 6787 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 206, column: 159, offset: 6787 },
            end: { line: 206, column: 165, offset: 6793 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 206, column: 165, offset: 6793 },
            end: { line: 206, column: 171, offset: 6799 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 206, column: 171, offset: 6799 },
            end: { line: 206, column: 224, offset: 6852 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6629 },
        end: { line: 206, column: 224, offset: 6852 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const isOdd = number => number % 2 == 1\n' +
        '\n' +
        'const asyncSquare = async number => number ** 2\n' +
        '\n' +
        'const generateNumbers = function* () {\n' +
        '  yield 1\n' +
        '  yield 2\n' +
        '  yield 3\n' +
        '  yield 4\n' +
        '  yield 5\n' +
        '}\n' +
        '\n' +
        'pipe(generateNumbers(), [\n' +
        '  transform(compose([\n' +
        '    Transducer.filter(isOdd),\n' +
        '    Transducer.map(asyncSquare),\n' +
        '  ]), []),\n' +
        '  console.log, // [1, 9, 25]\n' +
        '])',
      position: {
        start: { line: 208, column: 1, offset: 6854 },
        end: { line: 228, column: 4, offset: 7220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the operators have property functions that have different asynchronous behavior, e.g.',
          position: {
            start: { line: 230, column: 1, offset: 7222 },
            end: { line: 230, column: 131, offset: 7352 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7222 },
        end: { line: 230, column: 131, offset: 7352 }
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
                    start: { line: 231, column: 4, offset: 7356 },
                    end: { line: 231, column: 9, offset: 7361 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 231, column: 9, offset: 7361 },
                    end: { line: 231, column: 48, offset: 7400 }
                  }
                }
              ],
              position: {
                start: { line: 231, column: 4, offset: 7356 },
                end: { line: 231, column: 48, offset: 7400 }
              }
            }
          ],
          position: {
            start: { line: 231, column: 2, offset: 7354 },
            end: { line: 231, column: 48, offset: 7400 }
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
                  value: 'map.pool',
                  position: {
                    start: { line: 232, column: 4, offset: 7404 },
                    end: { line: 232, column: 14, offset: 7414 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 232, column: 14, offset: 7414 },
                    end: { line: 232, column: 78, offset: 7478 }
                  }
                }
              ],
              position: {
                start: { line: 232, column: 4, offset: 7404 },
                end: { line: 232, column: 78, offset: 7478 }
              }
            }
          ],
          position: {
            start: { line: 232, column: 2, offset: 7402 },
            end: { line: 232, column: 78, offset: 7478 }
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
                  value: 'map.series',
                  position: {
                    start: { line: 233, column: 4, offset: 7482 },
                    end: { line: 233, column: 16, offset: 7494 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 233, column: 16, offset: 7494 },
                    end: { line: 233, column: 51, offset: 7529 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7482 },
                end: { line: 233, column: 51, offset: 7529 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7480 },
            end: { line: 233, column: 51, offset: 7529 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 2, offset: 7354 },
        end: { line: 233, column: 51, offset: 7529 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 235, column: 1, offset: 7531 },
            end: { line: 235, column: 60, offset: 7590 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 235, column: 60, offset: 7590 },
            end: { line: 235, column: 70, offset: 7600 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 235, column: 70, offset: 7600 },
            end: { line: 235, column: 111, offset: 7641 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/docs',
          children: [
            {
              type: 'text',
              value: 'rubico.land/docs',
              position: {
                start: { line: 235, column: 112, offset: 7642 },
                end: { line: 235, column: 128, offset: 7658 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 111, offset: 7641 },
            end: { line: 235, column: 155, offset: 7685 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 235, column: 155, offset: 7685 },
            end: { line: 235, column: 156, offset: 7686 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 7531 },
        end: { line: 235, column: 156, offset: 7686 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Benchmarks',
          position: {
            start: { line: 237, column: 3, offset: 7690 },
            end: { line: 237, column: 13, offset: 7700 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7688 },
        end: { line: 237, column: 13, offset: 7700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 238, column: 1, offset: 7701 },
            end: { line: 238, column: 55, offset: 7755 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/tree/master/benchmark-output',
          children: [
            {
              type: 'text',
              value: 'benchmark-output',
              position: {
                start: { line: 238, column: 56, offset: 7756 },
                end: { line: 238, column: 72, offset: 7772 }
              }
            }
          ],
          position: {
            start: { line: 238, column: 55, offset: 7755 },
            end: { line: 238, column: 143, offset: 7843 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 238, column: 143, offset: 7843 },
            end: { line: 238, column: 225, offset: 7925 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7701 },
        end: { line: 238, column: 225, offset: 7925 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 239, column: 1, offset: 7926 },
        end: { line: 241, column: 4, offset: 7947 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Contributing',
          position: {
            start: { line: 243, column: 3, offset: 7951 },
            end: { line: 243, column: 15, offset: 7963 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7949 },
        end: { line: 243, column: 15, offset: 7963 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, or feel like taking initiative and contributing anything at all, feel free to create a pull request and I will get back to you shortly.',
          position: {
            start: { line: 244, column: 1, offset: 7964 },
            end: { line: 244, column: 366, offset: 8329 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 7964 },
        end: { line: 244, column: 366, offset: 8329 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 246, column: 1, offset: 8331 },
            end: { line: 246, column: 89, offset: 8419 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/pull/12',
          children: [
            {
              type: 'text',
              value: 'example pull request',
              position: {
                start: { line: 246, column: 90, offset: 8420 },
                end: { line: 246, column: 110, offset: 8440 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 89, offset: 8419 },
            end: { line: 246, column: 160, offset: 8490 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 246, column: 160, offset: 8490 },
            end: { line: 246, column: 205, offset: 8535 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22',
          children: [
            {
              type: 'text',
              value: 'help wanted',
              position: {
                start: { line: 246, column: 206, offset: 8536 },
                end: { line: 246, column: 217, offset: 8547 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 205, offset: 8535 },
            end: { line: 246, column: 315, offset: 8645 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 246, column: 315, offset: 8645 },
            end: { line: 246, column: 345, offset: 8675 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8331 },
        end: { line: 246, column: 345, offset: 8675 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 248, column: 1, offset: 8677 },
            end: { line: 248, column: 33, offset: 8709 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/CONTRIBUTING.md',
          children: [
            {
              type: 'text',
              value: 'CONTRIBUTING.md',
              position: {
                start: { line: 248, column: 34, offset: 8710 },
                end: { line: 248, column: 49, offset: 8725 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 33, offset: 8709 },
            end: { line: 248, column: 68, offset: 8744 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8677 },
        end: { line: 248, column: 68, offset: 8744 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'License',
          position: {
            start: { line: 250, column: 3, offset: 8748 },
            end: { line: 250, column: 10, offset: 8755 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8746 },
        end: { line: 250, column: 10, offset: 8755 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 251, column: 1, offset: 8756 },
            end: { line: 251, column: 11, offset: 8766 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/blob/master/LICENSE',
          children: [
            {
              type: 'text',
              value: 'MIT Licensed',
              position: {
                start: { line: 251, column: 12, offset: 8767 },
                end: { line: 251, column: 24, offset: 8779 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 11, offset: 8766 },
            end: { line: 251, column: 86, offset: 8841 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 251, column: 86, offset: 8841 },
            end: { line: 251, column: 87, offset: 8842 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 8756 },
        end: { line: 251, column: 87, offset: 8842 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Support',
          position: {
            start: { line: 253, column: 3, offset: 8846 },
            end: { line: 253, column: 10, offset: 8853 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8844 },
        end: { line: 253, column: 10, offset: 8853 }
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
                  value: 'minimum Node.js version: 16',
                  position: {
                    start: { line: 254, column: 4, offset: 8857 },
                    end: { line: 254, column: 31, offset: 8884 }
                  }
                }
              ],
              position: {
                start: { line: 254, column: 4, offset: 8857 },
                end: { line: 254, column: 31, offset: 8884 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 2, offset: 8855 },
            end: { line: 254, column: 31, offset: 8884 }
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
                  value: 'minimum Chrome version: 63',
                  position: {
                    start: { line: 255, column: 4, offset: 8888 },
                    end: { line: 255, column: 30, offset: 8914 }
                  }
                }
              ],
              position: {
                start: { line: 255, column: 4, offset: 8888 },
                end: { line: 255, column: 30, offset: 8914 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 2, offset: 8886 },
            end: { line: 255, column: 30, offset: 8914 }
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
                  value: 'minimum Firefox version: 57',
                  position: {
                    start: { line: 256, column: 4, offset: 8918 },
                    end: { line: 256, column: 31, offset: 8945 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8918 },
                end: { line: 256, column: 31, offset: 8945 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8916 },
            end: { line: 256, column: 31, offset: 8945 }
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
                  value: 'minimum Edge version: 79',
                  position: {
                    start: { line: 257, column: 4, offset: 8949 },
                    end: { line: 257, column: 28, offset: 8973 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8949 },
                end: { line: 257, column: 28, offset: 8973 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8947 },
            end: { line: 257, column: 28, offset: 8973 }
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
                  value: 'minimum Safari version: 11.1',
                  position: {
                    start: { line: 258, column: 4, offset: 8977 },
                    end: { line: 258, column: 32, offset: 9005 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 8977 },
                end: { line: 258, column: 32, offset: 9005 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8975 },
            end: { line: 258, column: 32, offset: 9005 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 2, offset: 8855 },
        end: { line: 258, column: 32, offset: 9005 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Awesome Resources',
          position: {
            start: { line: 260, column: 3, offset: 9009 },
            end: { line: 260, column: 20, offset: 9026 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 9007 },
        end: { line: 260, column: 20, offset: 9026 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/rubico-a-synchrnous-functional-syntax-motivation-20hf',
          children: [
            {
              type: 'text',
              value: 'rubico simplifies asynchronous code',
              position: {
                start: { line: 261, column: 2, offset: 9028 },
                end: { line: 261, column: 37, offset: 9063 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 1, offset: 9027 },
            end: { line: 261, column: 118, offset: 9144 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 261, column: 118, offset: 9144 },
            end: { line: 262, column: 1, offset: 9145 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 262, column: 1, offset: 9145 },
            end: { line: 262, column: 5, offset: 9149 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 262, column: 5, offset: 9149 },
            end: { line: 263, column: 1, offset: 9150 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-side-effects-and-purity-revised-420h',
          children: [
            {
              type: 'text',
              value: 'Practical Functional Programming in JavaScript - Side Effects and Purity',
              position: {
                start: { line: 263, column: 2, offset: 9151 },
                end: { line: 263, column: 74, offset: 9223 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 1, offset: 9150 },
            end: { line: 263, column: 185, offset: 9334 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 263, column: 185, offset: 9334 },
            end: { line: 264, column: 1, offset: 9335 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 264, column: 1, offset: 9335 },
            end: { line: 264, column: 5, offset: 9339 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 264, column: 5, offset: 9339 },
            end: { line: 265, column: 1, offset: 9340 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-techniques-for-composing-data-c39',
          children: [
            {
              type: 'text',
              value: 'Practical Functional Programming in JavaScript - Techniques for Composing Data',
              position: {
                start: { line: 265, column: 2, offset: 9341 },
                end: { line: 265, column: 80, offset: 9419 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 1, offset: 9340 },
            end: { line: 265, column: 188, offset: 9527 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 265, column: 188, offset: 9527 },
            end: { line: 266, column: 1, offset: 9528 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 266, column: 1, offset: 9528 },
            end: { line: 266, column: 5, offset: 9532 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 266, column: 5, offset: 9532 },
            end: { line: 267, column: 1, offset: 9533 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://dev.to/richytong/practical-functional-programming-in-javascript-error-handling-8g5',
          children: [
            {
              type: 'text',
              value: 'Practical Functional Programming in JavaScript - Error Handling',
              position: {
                start: { line: 267, column: 2, offset: 9534 },
                end: { line: 267, column: 65, offset: 9597 }
              }
            }
          ],
          position: {
            start: { line: 267, column: 1, offset: 9533 },
            end: { line: 267, column: 158, offset: 9690 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 9027 },
        end: { line: 267, column: 158, offset: 9690 }
      }
    },
    {
      type: 'heading',
      depth: 1,
      children: [
        {
          type: 'text',
          value: 'Blog',
          position: {
            start: { line: 269, column: 3, offset: 9694 },
            end: { line: 269, column: 7, offset: 9698 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 9692 },
        end: { line: 269, column: 7, offset: 9698 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Check out the rubico blog at ',
          position: {
            start: { line: 270, column: 1, offset: 9699 },
            end: { line: 270, column: 30, offset: 9728 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/blog',
          children: [
            {
              type: 'text',
              value: 'https://rubico.land/blog',
              position: {
                start: { line: 270, column: 31, offset: 9729 },
                end: { line: 270, column: 55, offset: 9753 }
              }
            }
          ],
          position: {
            start: { line: 270, column: 30, offset: 9728 },
            end: { line: 270, column: 82, offset: 9780 }
          }
        }
      ],
      position: {
        start: { line: 270, column: 1, offset: 9699 },
        end: { line: 270, column: 82, offset: 9780 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 271, column: 1, offset: 9781 }
  }
}