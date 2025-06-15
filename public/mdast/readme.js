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
              value: '~7.7 kB minified and gzipped',
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
          value: 'rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 89, column: 1, offset: 3097 },
            end: { line: 89, column: 169, offset: 3265 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3097 },
        end: { line: 89, column: 169, offset: 3265 }
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
        start: { line: 91, column: 1, offset: 3267 },
        end: { line: 120, column: 4, offset: 3720 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise. All promises are resolved for their values before continuing with the operation.',
          position: {
            start: { line: 122, column: 1, offset: 3722 },
            end: { line: 122, column: 180, offset: 3901 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3722 },
        end: { line: 122, column: 180, offset: 3901 }
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
        start: { line: 124, column: 1, offset: 3903 },
        end: { line: 134, column: 4, offset: 4231 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All rubico operators support both eager and lazy APIs. The eager API takes all required arguments and executes at once, while the lazy API takes only the setup arguments and returns a function that executes later. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 136, column: 1, offset: 4233 },
            end: { line: 136, column: 274, offset: 4506 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4233 },
        end: { line: 136, column: 274, offset: 4506 }
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
        start: { line: 138, column: 1, offset: 4508 },
        end: { line: 151, column: 4, offset: 4838 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 153, column: 1, offset: 4840 },
            end: { line: 153, column: 182, offset: 5021 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 153, column: 182, offset: 5021 },
            end: { line: 153, column: 187, offset: 5026 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 153, column: 187, offset: 5026 },
            end: { line: 153, column: 219, offset: 5058 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 153, column: 219, offset: 5058 },
            end: { line: 153, column: 224, offset: 5063 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 153, column: 224, offset: 5063 },
            end: { line: 153, column: 240, offset: 5079 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4840 },
        end: { line: 153, column: 240, offset: 5079 }
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
        start: { line: 155, column: 1, offset: 5081 },
        end: { line: 204, column: 4, offset: 6532 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico offers transducers through its ',
          position: {
            start: { line: 206, column: 1, offset: 6534 },
            end: { line: 206, column: 39, offset: 6572 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 206, column: 39, offset: 6572 },
            end: { line: 206, column: 51, offset: 6584 }
          }
        },
        {
          type: 'text',
          value: " module. You can consume these transducers with rubico's ",
          position: {
            start: { line: 206, column: 51, offset: 6584 },
            end: { line: 206, column: 108, offset: 6641 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 206, column: 108, offset: 6641 },
            end: { line: 206, column: 119, offset: 6652 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 206, column: 119, offset: 6652 },
            end: { line: 206, column: 124, offset: 6657 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 124, offset: 6657 },
            end: { line: 206, column: 133, offset: 6666 }
          }
        },
        {
          type: 'text',
          value: ' operators. You can use ',
          position: {
            start: { line: 206, column: 133, offset: 6666 },
            end: { line: 206, column: 157, offset: 6690 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 157, offset: 6690 },
            end: { line: 206, column: 166, offset: 6699 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 206, column: 166, offset: 6699 },
            end: { line: 206, column: 219, offset: 6752 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6534 },
        end: { line: 206, column: 219, offset: 6752 }
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
        '  transform(compose(\n' +
        '    Transducer.filter(isOdd),\n' +
        '    Transducer.map(asyncSquare),\n' +
        '  ), []),\n' +
        '  console.log, // [1, 9, 25]\n' +
        '])',
      position: {
        start: { line: 208, column: 1, offset: 6754 },
        end: { line: 228, column: 4, offset: 7118 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the rubico operators have property functions that have various asynchronous behavior, e.g.',
          position: {
            start: { line: 230, column: 1, offset: 7120 },
            end: { line: 230, column: 136, offset: 7255 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7120 },
        end: { line: 230, column: 136, offset: 7255 }
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
                    start: { line: 231, column: 4, offset: 7259 },
                    end: { line: 231, column: 9, offset: 7264 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 231, column: 9, offset: 7264 },
                    end: { line: 231, column: 50, offset: 7305 }
                  }
                }
              ],
              position: {
                start: { line: 231, column: 4, offset: 7259 },
                end: { line: 231, column: 50, offset: 7305 }
              }
            }
          ],
          position: {
            start: { line: 231, column: 2, offset: 7257 },
            end: { line: 231, column: 50, offset: 7305 }
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
                    start: { line: 232, column: 4, offset: 7309 },
                    end: { line: 232, column: 14, offset: 7319 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 232, column: 14, offset: 7319 },
                    end: { line: 232, column: 80, offset: 7385 }
                  }
                }
              ],
              position: {
                start: { line: 232, column: 4, offset: 7309 },
                end: { line: 232, column: 80, offset: 7385 }
              }
            }
          ],
          position: {
            start: { line: 232, column: 2, offset: 7307 },
            end: { line: 232, column: 80, offset: 7385 }
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
                    start: { line: 233, column: 4, offset: 7389 },
                    end: { line: 233, column: 16, offset: 7401 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 233, column: 16, offset: 7401 },
                    end: { line: 233, column: 53, offset: 7438 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7389 },
                end: { line: 233, column: 53, offset: 7438 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7387 },
            end: { line: 233, column: 53, offset: 7438 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 2, offset: 7257 },
        end: { line: 233, column: 53, offset: 7438 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 235, column: 1, offset: 7440 },
            end: { line: 235, column: 60, offset: 7499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 235, column: 60, offset: 7499 },
            end: { line: 235, column: 70, offset: 7509 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 235, column: 70, offset: 7509 },
            end: { line: 235, column: 111, offset: 7550 }
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
                start: { line: 235, column: 112, offset: 7551 },
                end: { line: 235, column: 128, offset: 7567 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 111, offset: 7550 },
            end: { line: 235, column: 155, offset: 7594 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 235, column: 155, offset: 7594 },
            end: { line: 235, column: 156, offset: 7595 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 7440 },
        end: { line: 235, column: 156, offset: 7595 }
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
            start: { line: 237, column: 3, offset: 7599 },
            end: { line: 237, column: 13, offset: 7609 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7597 },
        end: { line: 237, column: 13, offset: 7609 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 238, column: 1, offset: 7610 },
            end: { line: 238, column: 55, offset: 7664 }
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
                start: { line: 238, column: 56, offset: 7665 },
                end: { line: 238, column: 72, offset: 7681 }
              }
            }
          ],
          position: {
            start: { line: 238, column: 55, offset: 7664 },
            end: { line: 238, column: 143, offset: 7752 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 238, column: 143, offset: 7752 },
            end: { line: 238, column: 225, offset: 7834 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7610 },
        end: { line: 238, column: 225, offset: 7834 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 239, column: 1, offset: 7835 },
        end: { line: 241, column: 4, offset: 7856 }
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
            start: { line: 243, column: 3, offset: 7860 },
            end: { line: 243, column: 15, offset: 7872 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7858 },
        end: { line: 243, column: 15, offset: 7872 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 244, column: 1, offset: 7873 },
            end: { line: 244, column: 260, offset: 8132 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 7873 },
        end: { line: 244, column: 260, offset: 8132 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 246, column: 1, offset: 8134 },
            end: { line: 246, column: 89, offset: 8222 }
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
                start: { line: 246, column: 90, offset: 8223 },
                end: { line: 246, column: 110, offset: 8243 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 89, offset: 8222 },
            end: { line: 246, column: 160, offset: 8293 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 246, column: 160, offset: 8293 },
            end: { line: 246, column: 205, offset: 8338 }
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
                start: { line: 246, column: 206, offset: 8339 },
                end: { line: 246, column: 217, offset: 8350 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 205, offset: 8338 },
            end: { line: 246, column: 315, offset: 8448 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 246, column: 315, offset: 8448 },
            end: { line: 246, column: 345, offset: 8478 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8134 },
        end: { line: 246, column: 345, offset: 8478 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 248, column: 1, offset: 8480 },
            end: { line: 248, column: 33, offset: 8512 }
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
                start: { line: 248, column: 34, offset: 8513 },
                end: { line: 248, column: 49, offset: 8528 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 33, offset: 8512 },
            end: { line: 248, column: 68, offset: 8547 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8480 },
        end: { line: 248, column: 68, offset: 8547 }
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
            start: { line: 250, column: 3, offset: 8551 },
            end: { line: 250, column: 10, offset: 8558 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8549 },
        end: { line: 250, column: 10, offset: 8558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 251, column: 1, offset: 8559 },
            end: { line: 251, column: 11, offset: 8569 }
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
                start: { line: 251, column: 12, offset: 8570 },
                end: { line: 251, column: 24, offset: 8582 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 11, offset: 8569 },
            end: { line: 251, column: 86, offset: 8644 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 251, column: 86, offset: 8644 },
            end: { line: 251, column: 87, offset: 8645 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 8559 },
        end: { line: 251, column: 87, offset: 8645 }
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
            start: { line: 253, column: 3, offset: 8649 },
            end: { line: 253, column: 10, offset: 8656 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8647 },
        end: { line: 253, column: 10, offset: 8656 }
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
                    start: { line: 254, column: 4, offset: 8660 },
                    end: { line: 254, column: 31, offset: 8687 }
                  }
                }
              ],
              position: {
                start: { line: 254, column: 4, offset: 8660 },
                end: { line: 254, column: 31, offset: 8687 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 2, offset: 8658 },
            end: { line: 254, column: 31, offset: 8687 }
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
                    start: { line: 255, column: 4, offset: 8691 },
                    end: { line: 255, column: 30, offset: 8717 }
                  }
                }
              ],
              position: {
                start: { line: 255, column: 4, offset: 8691 },
                end: { line: 255, column: 30, offset: 8717 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 2, offset: 8689 },
            end: { line: 255, column: 30, offset: 8717 }
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
                    start: { line: 256, column: 4, offset: 8721 },
                    end: { line: 256, column: 31, offset: 8748 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8721 },
                end: { line: 256, column: 31, offset: 8748 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8719 },
            end: { line: 256, column: 31, offset: 8748 }
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
                    start: { line: 257, column: 4, offset: 8752 },
                    end: { line: 257, column: 28, offset: 8776 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8752 },
                end: { line: 257, column: 28, offset: 8776 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8750 },
            end: { line: 257, column: 28, offset: 8776 }
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
                    start: { line: 258, column: 4, offset: 8780 },
                    end: { line: 258, column: 32, offset: 8808 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 8780 },
                end: { line: 258, column: 32, offset: 8808 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8778 },
            end: { line: 258, column: 32, offset: 8808 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 2, offset: 8658 },
        end: { line: 258, column: 32, offset: 8808 }
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
            start: { line: 260, column: 3, offset: 8812 },
            end: { line: 260, column: 20, offset: 8829 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8810 },
        end: { line: 260, column: 20, offset: 8829 }
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
                start: { line: 261, column: 2, offset: 8831 },
                end: { line: 261, column: 37, offset: 8866 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 1, offset: 8830 },
            end: { line: 261, column: 118, offset: 8947 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 261, column: 118, offset: 8947 },
            end: { line: 262, column: 1, offset: 8948 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 262, column: 1, offset: 8948 },
            end: { line: 262, column: 5, offset: 8952 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 262, column: 5, offset: 8952 },
            end: { line: 263, column: 1, offset: 8953 }
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
                start: { line: 263, column: 2, offset: 8954 },
                end: { line: 263, column: 74, offset: 9026 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 1, offset: 8953 },
            end: { line: 263, column: 185, offset: 9137 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 263, column: 185, offset: 9137 },
            end: { line: 264, column: 1, offset: 9138 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 264, column: 1, offset: 9138 },
            end: { line: 264, column: 5, offset: 9142 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 264, column: 5, offset: 9142 },
            end: { line: 265, column: 1, offset: 9143 }
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
                start: { line: 265, column: 2, offset: 9144 },
                end: { line: 265, column: 80, offset: 9222 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 1, offset: 9143 },
            end: { line: 265, column: 188, offset: 9330 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 265, column: 188, offset: 9330 },
            end: { line: 266, column: 1, offset: 9331 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 266, column: 1, offset: 9331 },
            end: { line: 266, column: 5, offset: 9335 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 266, column: 5, offset: 9335 },
            end: { line: 267, column: 1, offset: 9336 }
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
                start: { line: 267, column: 2, offset: 9337 },
                end: { line: 267, column: 65, offset: 9400 }
              }
            }
          ],
          position: {
            start: { line: 267, column: 1, offset: 9336 },
            end: { line: 267, column: 158, offset: 9493 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 8830 },
        end: { line: 267, column: 158, offset: 9493 }
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
            start: { line: 269, column: 3, offset: 9497 },
            end: { line: 269, column: 7, offset: 9501 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 9495 },
        end: { line: 269, column: 7, offset: 9501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Check out the rubico blog at ',
          position: {
            start: { line: 270, column: 1, offset: 9502 },
            end: { line: 270, column: 30, offset: 9531 }
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
                start: { line: 270, column: 31, offset: 9532 },
                end: { line: 270, column: 55, offset: 9556 }
              }
            }
          ],
          position: {
            start: { line: 270, column: 30, offset: 9531 },
            end: { line: 270, column: 82, offset: 9583 }
          }
        }
      ],
      position: {
        start: { line: 270, column: 1, offset: 9502 },
        end: { line: 270, column: 82, offset: 9583 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 271, column: 1, offset: 9584 }
  }
}