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
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/Transducer.js',
          children: [
            {
              type: 'text',
              value: 'Transducer module',
              position: {
                start: { line: 31, column: 2, offset: 1083 },
                end: { line: 31, column: 19, offset: 1100 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 1082 },
            end: { line: 31, column: 65, offset: 1146 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 31, column: 65, offset: 1146 },
            end: { line: 31, column: 67, offset: 1148 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/Transducer.min.js',
          children: [
            {
              type: 'text',
              value: '~1.5kb minified and gzipped',
              position: {
                start: { line: 31, column: 68, offset: 1149 },
                end: { line: 31, column: 95, offset: 1176 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 67, offset: 1148 },
            end: { line: 31, column: 145, offset: 1226 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 31, column: 145, offset: 1226 },
            end: { line: 31, column: 146, offset: 1227 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1082 },
        end: { line: 31, column: 146, offset: 1227 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 33, column: 1, offset: 1229 },
            end: { line: 33, column: 6, offset: 1234 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 33, column: 6, offset: 1234 },
            end: { line: 33, column: 11, offset: 1239 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1229 },
        end: { line: 33, column: 11, offset: 1239 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 34, column: 1, offset: 1240 },
        end: { line: 36, column: 4, offset: 1264 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require ',
          position: {
            start: { line: 38, column: 1, offset: 1266 },
            end: { line: 38, column: 9, offset: 1274 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 38, column: 9, offset: 1274 },
            end: { line: 38, column: 17, offset: 1282 }
          }
        },
        {
          type: 'text',
          value: ' in CommonJS.',
          position: {
            start: { line: 38, column: 17, offset: 1282 },
            end: { line: 38, column: 30, offset: 1295 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1266 },
        end: { line: 38, column: 30, offset: 1295 }
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
        start: { line: 39, column: 1, offset: 1296 },
        end: { line: 57, column: 4, offset: 1743 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import ',
          position: {
            start: { line: 59, column: 1, offset: 1745 },
            end: { line: 59, column: 8, offset: 1752 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 59, column: 8, offset: 1752 },
            end: { line: 59, column: 16, offset: 1760 }
          }
        },
        {
          type: 'text',
          value: ' in the browser.',
          position: {
            start: { line: 59, column: 16, offset: 1760 },
            end: { line: 59, column: 32, offset: 1776 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1745 },
        end: { line: 59, column: 32, offset: 1776 }
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
        start: { line: 60, column: 1, offset: 1777 },
        end: { line: 75, column: 4, offset: 2359 }
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
            start: { line: 77, column: 3, offset: 2363 },
            end: { line: 77, column: 13, offset: 2373 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2361 },
        end: { line: 77, column: 13, offset: 2373 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 79, column: 1, offset: 2375 },
            end: { line: 79, column: 23, offset: 2397 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2375 },
        end: { line: 79, column: 23, offset: 2397 }
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
                start: { line: 80, column: 3, offset: 2400 },
                end: { line: 80, column: 463, offset: 2860 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 3, offset: 2400 },
            end: { line: 80, column: 463, offset: 2860 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2398 },
        end: { line: 80, column: 463, offset: 2860 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is founded on the following principles:',
          position: {
            start: { line: 82, column: 1, offset: 2862 },
            end: { line: 82, column: 47, offset: 2908 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 2862 },
        end: { line: 82, column: 47, offset: 2908 }
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
                    start: { line: 83, column: 4, offset: 2912 },
                    end: { line: 83, column: 38, offset: 2946 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 2912 },
                end: { line: 83, column: 38, offset: 2946 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 2910 },
            end: { line: 83, column: 38, offset: 2946 }
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
                    start: { line: 84, column: 4, offset: 2950 },
                    end: { line: 84, column: 48, offset: 2994 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 2950 },
                end: { line: 84, column: 48, offset: 2994 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 2948 },
            end: { line: 84, column: 48, offset: 2994 }
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
                    start: { line: 85, column: 4, offset: 2998 },
                    end: { line: 85, column: 86, offset: 3080 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 2998 },
                end: { line: 85, column: 86, offset: 3080 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 2996 },
            end: { line: 85, column: 86, offset: 3080 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 2, offset: 2910 },
        end: { line: 85, column: 86, offset: 3080 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 87, column: 1, offset: 3082 },
            end: { line: 87, column: 145, offset: 3226 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3082 },
        end: { line: 87, column: 145, offset: 3226 }
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
            start: { line: 89, column: 3, offset: 3230 },
            end: { line: 89, column: 15, offset: 3242 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3228 },
        end: { line: 89, column: 15, offset: 3242 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 91, column: 1, offset: 3244 },
            end: { line: 91, column: 169, offset: 3412 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3244 },
        end: { line: 91, column: 169, offset: 3412 }
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
        start: { line: 93, column: 1, offset: 3414 },
        end: { line: 122, column: 4, offset: 3867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise. All promises are resolved for their values before continuing with the operation.',
          position: {
            start: { line: 124, column: 1, offset: 3869 },
            end: { line: 124, column: 180, offset: 4048 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 3869 },
        end: { line: 124, column: 180, offset: 4048 }
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
        start: { line: 126, column: 1, offset: 4050 },
        end: { line: 136, column: 4, offset: 4378 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All rubico operators support both eager and lazy APIs. The eager API takes all required arguments and executes at once, while the lazy API takes only the setup arguments and returns a function that executes later. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 138, column: 1, offset: 4380 },
            end: { line: 138, column: 274, offset: 4653 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4380 },
        end: { line: 138, column: 274, offset: 4653 }
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
        start: { line: 140, column: 1, offset: 4655 },
        end: { line: 153, column: 4, offset: 4985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 155, column: 1, offset: 4987 },
            end: { line: 155, column: 182, offset: 5168 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 155, column: 182, offset: 5168 },
            end: { line: 155, column: 187, offset: 5173 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 155, column: 187, offset: 5173 },
            end: { line: 155, column: 219, offset: 5205 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 155, column: 219, offset: 5205 },
            end: { line: 155, column: 224, offset: 5210 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 155, column: 224, offset: 5210 },
            end: { line: 155, column: 240, offset: 5226 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 4987 },
        end: { line: 155, column: 240, offset: 5226 }
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
        start: { line: 157, column: 1, offset: 5228 },
        end: { line: 206, column: 4, offset: 6679 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico offers transducers through its ',
          position: {
            start: { line: 208, column: 1, offset: 6681 },
            end: { line: 208, column: 39, offset: 6719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 208, column: 39, offset: 6719 },
            end: { line: 208, column: 51, offset: 6731 }
          }
        },
        {
          type: 'text',
          value: " module. You can consume these transducers with rubico's ",
          position: {
            start: { line: 208, column: 51, offset: 6731 },
            end: { line: 208, column: 108, offset: 6788 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 208, column: 108, offset: 6788 },
            end: { line: 208, column: 119, offset: 6799 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 208, column: 119, offset: 6799 },
            end: { line: 208, column: 124, offset: 6804 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 124, offset: 6804 },
            end: { line: 208, column: 133, offset: 6813 }
          }
        },
        {
          type: 'text',
          value: ' operators. You can use ',
          position: {
            start: { line: 208, column: 133, offset: 6813 },
            end: { line: 208, column: 157, offset: 6837 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 157, offset: 6837 },
            end: { line: 208, column: 166, offset: 6846 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 208, column: 166, offset: 6846 },
            end: { line: 208, column: 219, offset: 6899 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 6681 },
        end: { line: 208, column: 219, offset: 6899 }
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
        start: { line: 210, column: 1, offset: 6901 },
        end: { line: 230, column: 4, offset: 7265 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the rubico operators have property functions that have various asynchronous behavior, e.g.',
          position: {
            start: { line: 232, column: 1, offset: 7267 },
            end: { line: 232, column: 136, offset: 7402 }
          }
        }
      ],
      position: {
        start: { line: 232, column: 1, offset: 7267 },
        end: { line: 232, column: 136, offset: 7402 }
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
                    start: { line: 233, column: 4, offset: 7406 },
                    end: { line: 233, column: 9, offset: 7411 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 233, column: 9, offset: 7411 },
                    end: { line: 233, column: 50, offset: 7452 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7406 },
                end: { line: 233, column: 50, offset: 7452 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7404 },
            end: { line: 233, column: 50, offset: 7452 }
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
                    start: { line: 234, column: 4, offset: 7456 },
                    end: { line: 234, column: 14, offset: 7466 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 234, column: 14, offset: 7466 },
                    end: { line: 234, column: 80, offset: 7532 }
                  }
                }
              ],
              position: {
                start: { line: 234, column: 4, offset: 7456 },
                end: { line: 234, column: 80, offset: 7532 }
              }
            }
          ],
          position: {
            start: { line: 234, column: 2, offset: 7454 },
            end: { line: 234, column: 80, offset: 7532 }
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
                    start: { line: 235, column: 4, offset: 7536 },
                    end: { line: 235, column: 16, offset: 7548 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 235, column: 16, offset: 7548 },
                    end: { line: 235, column: 53, offset: 7585 }
                  }
                }
              ],
              position: {
                start: { line: 235, column: 4, offset: 7536 },
                end: { line: 235, column: 53, offset: 7585 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 2, offset: 7534 },
            end: { line: 235, column: 53, offset: 7585 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 2, offset: 7404 },
        end: { line: 235, column: 53, offset: 7585 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 237, column: 1, offset: 7587 },
            end: { line: 237, column: 60, offset: 7646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 237, column: 60, offset: 7646 },
            end: { line: 237, column: 70, offset: 7656 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 237, column: 70, offset: 7656 },
            end: { line: 237, column: 111, offset: 7697 }
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
                start: { line: 237, column: 112, offset: 7698 },
                end: { line: 237, column: 128, offset: 7714 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 111, offset: 7697 },
            end: { line: 237, column: 155, offset: 7741 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 237, column: 155, offset: 7741 },
            end: { line: 237, column: 156, offset: 7742 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7587 },
        end: { line: 237, column: 156, offset: 7742 }
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
            start: { line: 239, column: 3, offset: 7746 },
            end: { line: 239, column: 13, offset: 7756 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 7744 },
        end: { line: 239, column: 13, offset: 7756 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 240, column: 1, offset: 7757 },
            end: { line: 240, column: 55, offset: 7811 }
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
                start: { line: 240, column: 56, offset: 7812 },
                end: { line: 240, column: 72, offset: 7828 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 55, offset: 7811 },
            end: { line: 240, column: 143, offset: 7899 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 240, column: 143, offset: 7899 },
            end: { line: 240, column: 225, offset: 7981 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 7757 },
        end: { line: 240, column: 225, offset: 7981 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 241, column: 1, offset: 7982 },
        end: { line: 243, column: 4, offset: 8003 }
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
            start: { line: 245, column: 3, offset: 8007 },
            end: { line: 245, column: 15, offset: 8019 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 8005 },
        end: { line: 245, column: 15, offset: 8019 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 246, column: 1, offset: 8020 },
            end: { line: 246, column: 260, offset: 8279 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8020 },
        end: { line: 246, column: 260, offset: 8279 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 248, column: 1, offset: 8281 },
            end: { line: 248, column: 89, offset: 8369 }
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
                start: { line: 248, column: 90, offset: 8370 },
                end: { line: 248, column: 110, offset: 8390 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 89, offset: 8369 },
            end: { line: 248, column: 160, offset: 8440 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 248, column: 160, offset: 8440 },
            end: { line: 248, column: 205, offset: 8485 }
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
                start: { line: 248, column: 206, offset: 8486 },
                end: { line: 248, column: 217, offset: 8497 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 205, offset: 8485 },
            end: { line: 248, column: 315, offset: 8595 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 248, column: 315, offset: 8595 },
            end: { line: 248, column: 345, offset: 8625 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8281 },
        end: { line: 248, column: 345, offset: 8625 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 250, column: 1, offset: 8627 },
            end: { line: 250, column: 33, offset: 8659 }
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
                start: { line: 250, column: 34, offset: 8660 },
                end: { line: 250, column: 49, offset: 8675 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 33, offset: 8659 },
            end: { line: 250, column: 68, offset: 8694 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8627 },
        end: { line: 250, column: 68, offset: 8694 }
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
            start: { line: 252, column: 3, offset: 8698 },
            end: { line: 252, column: 10, offset: 8705 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 8696 },
        end: { line: 252, column: 10, offset: 8705 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 253, column: 1, offset: 8706 },
            end: { line: 253, column: 11, offset: 8716 }
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
                start: { line: 253, column: 12, offset: 8717 },
                end: { line: 253, column: 24, offset: 8729 }
              }
            }
          ],
          position: {
            start: { line: 253, column: 11, offset: 8716 },
            end: { line: 253, column: 86, offset: 8791 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 253, column: 86, offset: 8791 },
            end: { line: 253, column: 87, offset: 8792 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8706 },
        end: { line: 253, column: 87, offset: 8792 }
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
            start: { line: 255, column: 3, offset: 8796 },
            end: { line: 255, column: 10, offset: 8803 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 8794 },
        end: { line: 255, column: 10, offset: 8803 }
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
                    start: { line: 256, column: 4, offset: 8807 },
                    end: { line: 256, column: 31, offset: 8834 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8807 },
                end: { line: 256, column: 31, offset: 8834 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8805 },
            end: { line: 256, column: 31, offset: 8834 }
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
                    start: { line: 257, column: 4, offset: 8838 },
                    end: { line: 257, column: 30, offset: 8864 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8838 },
                end: { line: 257, column: 30, offset: 8864 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8836 },
            end: { line: 257, column: 30, offset: 8864 }
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
                    start: { line: 258, column: 4, offset: 8868 },
                    end: { line: 258, column: 31, offset: 8895 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 8868 },
                end: { line: 258, column: 31, offset: 8895 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8866 },
            end: { line: 258, column: 31, offset: 8895 }
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
                    start: { line: 259, column: 4, offset: 8899 },
                    end: { line: 259, column: 28, offset: 8923 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 8899 },
                end: { line: 259, column: 28, offset: 8923 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 8897 },
            end: { line: 259, column: 28, offset: 8923 }
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
                    start: { line: 260, column: 4, offset: 8927 },
                    end: { line: 260, column: 32, offset: 8955 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 8927 },
                end: { line: 260, column: 32, offset: 8955 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 8925 },
            end: { line: 260, column: 32, offset: 8955 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 2, offset: 8805 },
        end: { line: 260, column: 32, offset: 8955 }
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
            start: { line: 262, column: 3, offset: 8959 },
            end: { line: 262, column: 20, offset: 8976 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8957 },
        end: { line: 262, column: 20, offset: 8976 }
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
                start: { line: 263, column: 2, offset: 8978 },
                end: { line: 263, column: 37, offset: 9013 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 1, offset: 8977 },
            end: { line: 263, column: 118, offset: 9094 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 263, column: 118, offset: 9094 },
            end: { line: 264, column: 1, offset: 9095 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 264, column: 1, offset: 9095 },
            end: { line: 264, column: 5, offset: 9099 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 264, column: 5, offset: 9099 },
            end: { line: 265, column: 1, offset: 9100 }
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
                start: { line: 265, column: 2, offset: 9101 },
                end: { line: 265, column: 74, offset: 9173 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 1, offset: 9100 },
            end: { line: 265, column: 185, offset: 9284 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 265, column: 185, offset: 9284 },
            end: { line: 266, column: 1, offset: 9285 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 266, column: 1, offset: 9285 },
            end: { line: 266, column: 5, offset: 9289 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 266, column: 5, offset: 9289 },
            end: { line: 267, column: 1, offset: 9290 }
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
                start: { line: 267, column: 2, offset: 9291 },
                end: { line: 267, column: 80, offset: 9369 }
              }
            }
          ],
          position: {
            start: { line: 267, column: 1, offset: 9290 },
            end: { line: 267, column: 188, offset: 9477 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 267, column: 188, offset: 9477 },
            end: { line: 268, column: 1, offset: 9478 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 268, column: 1, offset: 9478 },
            end: { line: 268, column: 5, offset: 9482 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 268, column: 5, offset: 9482 },
            end: { line: 269, column: 1, offset: 9483 }
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
                start: { line: 269, column: 2, offset: 9484 },
                end: { line: 269, column: 65, offset: 9547 }
              }
            }
          ],
          position: {
            start: { line: 269, column: 1, offset: 9483 },
            end: { line: 269, column: 158, offset: 9640 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 8977 },
        end: { line: 269, column: 158, offset: 9640 }
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
            start: { line: 271, column: 3, offset: 9644 },
            end: { line: 271, column: 7, offset: 9648 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9642 },
        end: { line: 271, column: 7, offset: 9648 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Check out the rubico blog at ',
          position: {
            start: { line: 272, column: 1, offset: 9649 },
            end: { line: 272, column: 30, offset: 9678 }
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
                start: { line: 272, column: 31, offset: 9679 },
                end: { line: 272, column: 55, offset: 9703 }
              }
            }
          ],
          position: {
            start: { line: 272, column: 30, offset: 9678 },
            end: { line: 272, column: 82, offset: 9730 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9649 },
        end: { line: 272, column: 82, offset: 9730 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 273, column: 1, offset: 9731 }
  }
}