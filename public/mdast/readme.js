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
              value: 'Rubico',
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
      depth: 2,
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming',
          position: {
            start: { line: 10, column: 4, offset: 622 },
            end: { line: 10, column: 41, offset: 659 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 619 },
        end: { line: 10, column: 41, offset: 659 }
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
        start: { line: 12, column: 1, offset: 661 },
        end: { line: 26, column: 4, offset: 937 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Installation',
          position: {
            start: { line: 28, column: 4, offset: 942 },
            end: { line: 28, column: 16, offset: 954 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 939 },
        end: { line: 28, column: 16, offset: 954 }
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
          value: ') ',
          position: {
            start: { line: 29, column: 125, offset: 1079 },
            end: { line: 29, column: 127, offset: 1081 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/Transducer.js',
          children: [
            {
              type: 'text',
              value: 'Transducer module',
              position: {
                start: { line: 29, column: 128, offset: 1082 },
                end: { line: 29, column: 145, offset: 1099 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 127, offset: 1081 },
            end: { line: 29, column: 191, offset: 1145 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 29, column: 191, offset: 1145 },
            end: { line: 29, column: 193, offset: 1147 }
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
                start: { line: 29, column: 194, offset: 1148 },
                end: { line: 29, column: 221, offset: 1175 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 193, offset: 1147 },
            end: { line: 29, column: 271, offset: 1225 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 29, column: 271, offset: 1225 },
            end: { line: 29, column: 272, offset: 1226 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 955 },
        end: { line: 29, column: 272, offset: 1226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 31, column: 1, offset: 1228 },
            end: { line: 31, column: 6, offset: 1233 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm',
          children: [
            {
              type: 'text',
              value: 'npm',
              position: {
                start: { line: 31, column: 7, offset: 1234 },
                end: { line: 31, column: 10, offset: 1237 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 6, offset: 1233 },
            end: { line: 31, column: 78, offset: 1305 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 31, column: 78, offset: 1305 },
            end: { line: 31, column: 79, offset: 1306 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1228 },
        end: { line: 31, column: 79, offset: 1306 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 32, column: 1, offset: 1307 },
        end: { line: 34, column: 4, offset: 1331 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 37, column: 1, offset: 1334 },
            end: { line: 37, column: 19, offset: 1352 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules',
          children: [
            {
              type: 'text',
              value: 'CommonJS',
              position: {
                start: { line: 37, column: 20, offset: 1353 },
                end: { line: 37, column: 28, offset: 1361 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 19, offset: 1352 },
            end: { line: 37, column: 103, offset: 1436 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 37, column: 103, offset: 1436 },
            end: { line: 37, column: 104, offset: 1437 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1334 },
        end: { line: 37, column: 104, offset: 1437 }
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
        start: { line: 38, column: 1, offset: 1438 },
        end: { line: 56, column: 4, offset: 1885 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 59, column: 1, offset: 1888 },
            end: { line: 59, column: 30, offset: 1917 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1888 },
        end: { line: 59, column: 30, offset: 1917 }
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
        start: { line: 60, column: 1, offset: 1918 },
        end: { line: 75, column: 4, offset: 2500 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Motivation',
          position: {
            start: { line: 77, column: 4, offset: 2505 },
            end: { line: 77, column: 14, offset: 2515 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2502 },
        end: { line: 77, column: 14, offset: 2515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 79, column: 1, offset: 2517 },
            end: { line: 79, column: 23, offset: 2539 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2517 },
        end: { line: 79, column: 23, offset: 2539 }
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
              value: 'At a certain point in my career, I grew frustrated with the entanglement of my own code. While looking for something better, I found functional programming. I was excited by the idea of functional composition, but disillusioned by the redundancy of effectful types. I started Rubico to capitalize on the prior while rebuking the latter. Many iterations since then, the library has grown into something I personally enjoy using, and continue to use to this day.',
              position: {
                start: { line: 80, column: 3, offset: 2542 },
                end: { line: 80, column: 463, offset: 3002 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 3, offset: 2542 },
            end: { line: 80, column: 463, offset: 3002 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2540 },
        end: { line: 80, column: 463, offset: 3002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 82, column: 1, offset: 3004 },
            end: { line: 82, column: 47, offset: 3050 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 3004 },
        end: { line: 82, column: 47, offset: 3050 }
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
                    start: { line: 83, column: 4, offset: 3054 },
                    end: { line: 83, column: 38, offset: 3088 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 3054 },
                end: { line: 83, column: 38, offset: 3088 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 3052 },
            end: { line: 83, column: 38, offset: 3088 }
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
                    start: { line: 84, column: 4, offset: 3092 },
                    end: { line: 84, column: 48, offset: 3136 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 3092 },
                end: { line: 84, column: 48, offset: 3136 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 3090 },
            end: { line: 84, column: 48, offset: 3136 }
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
                    start: { line: 85, column: 4, offset: 3140 },
                    end: { line: 85, column: 86, offset: 3222 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 3140 },
                end: { line: 85, column: 86, offset: 3222 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 3138 },
            end: { line: 85, column: 86, offset: 3222 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 2, offset: 3052 },
        end: { line: 85, column: 86, offset: 3222 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 87, column: 1, offset: 3224 },
            end: { line: 87, column: 145, offset: 3368 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3224 },
        end: { line: 87, column: 145, offset: 3368 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Introduction',
          position: {
            start: { line: 89, column: 4, offset: 3373 },
            end: { line: 89, column: 16, offset: 3385 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3370 },
        end: { line: 89, column: 16, offset: 3385 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 91, column: 1, offset: 3387 },
            end: { line: 91, column: 169, offset: 3555 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3387 },
        end: { line: 91, column: 169, offset: 3555 }
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
        start: { line: 93, column: 1, offset: 3557 },
        end: { line: 122, column: 4, offset: 4010 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, it is resolved for its value before continuing with the operation.',
          position: {
            start: { line: 124, column: 1, offset: 4012 },
            end: { line: 124, column: 273, offset: 4284 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 4012 },
        end: { line: 124, column: 273, offset: 4284 }
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
        start: { line: 126, column: 1, offset: 4286 },
        end: { line: 136, column: 4, offset: 4614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both eager and lazy APIs. The eager API takes all required arguments and executes at once, while the lazy API takes only the setup arguments and returns a function that executes later. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 138, column: 1, offset: 4616 },
            end: { line: 138, column: 274, offset: 4889 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4616 },
        end: { line: 138, column: 274, offset: 4889 }
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
        start: { line: 140, column: 1, offset: 4891 },
        end: { line: 153, column: 4, offset: 5221 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 155, column: 1, offset: 5223 },
            end: { line: 155, column: 182, offset: 5404 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 155, column: 182, offset: 5404 },
            end: { line: 155, column: 187, offset: 5409 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 155, column: 187, offset: 5409 },
            end: { line: 155, column: 219, offset: 5441 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 155, column: 219, offset: 5441 },
            end: { line: 155, column: 224, offset: 5446 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 155, column: 224, offset: 5446 },
            end: { line: 155, column: 240, offset: 5462 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 5223 },
        end: { line: 155, column: 240, offset: 5462 }
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
        start: { line: 157, column: 1, offset: 5464 },
        end: { line: 206, column: 4, offset: 6915 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers through its ',
          position: {
            start: { line: 208, column: 1, offset: 6917 },
            end: { line: 208, column: 39, offset: 6955 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 208, column: 39, offset: 6955 },
            end: { line: 208, column: 51, offset: 6967 }
          }
        },
        {
          type: 'text',
          value: " module. You can consume these transducers with Rubico's ",
          position: {
            start: { line: 208, column: 51, offset: 6967 },
            end: { line: 208, column: 108, offset: 7024 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 208, column: 108, offset: 7024 },
            end: { line: 208, column: 119, offset: 7035 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 208, column: 119, offset: 7035 },
            end: { line: 208, column: 124, offset: 7040 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 124, offset: 7040 },
            end: { line: 208, column: 133, offset: 7049 }
          }
        },
        {
          type: 'text',
          value: ' operators. You can use ',
          position: {
            start: { line: 208, column: 133, offset: 7049 },
            end: { line: 208, column: 157, offset: 7073 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 157, offset: 7073 },
            end: { line: 208, column: 166, offset: 7082 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 208, column: 166, offset: 7082 },
            end: { line: 208, column: 219, offset: 7135 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 6917 },
        end: { line: 208, column: 219, offset: 7135 }
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
        start: { line: 210, column: 1, offset: 7137 },
        end: { line: 230, column: 4, offset: 7501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the Rubico operators have property functions that have various asynchronous behavior, e.g.',
          position: {
            start: { line: 232, column: 1, offset: 7503 },
            end: { line: 232, column: 136, offset: 7638 }
          }
        }
      ],
      position: {
        start: { line: 232, column: 1, offset: 7503 },
        end: { line: 232, column: 136, offset: 7638 }
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
                    start: { line: 233, column: 4, offset: 7642 },
                    end: { line: 233, column: 9, offset: 7647 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 233, column: 9, offset: 7647 },
                    end: { line: 233, column: 50, offset: 7688 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7642 },
                end: { line: 233, column: 50, offset: 7688 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7640 },
            end: { line: 233, column: 50, offset: 7688 }
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
                    start: { line: 234, column: 4, offset: 7692 },
                    end: { line: 234, column: 14, offset: 7702 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 234, column: 14, offset: 7702 },
                    end: { line: 234, column: 80, offset: 7768 }
                  }
                }
              ],
              position: {
                start: { line: 234, column: 4, offset: 7692 },
                end: { line: 234, column: 80, offset: 7768 }
              }
            }
          ],
          position: {
            start: { line: 234, column: 2, offset: 7690 },
            end: { line: 234, column: 80, offset: 7768 }
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
                    start: { line: 235, column: 4, offset: 7772 },
                    end: { line: 235, column: 16, offset: 7784 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 235, column: 16, offset: 7784 },
                    end: { line: 235, column: 53, offset: 7821 }
                  }
                }
              ],
              position: {
                start: { line: 235, column: 4, offset: 7772 },
                end: { line: 235, column: 53, offset: 7821 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 2, offset: 7770 },
            end: { line: 235, column: 53, offset: 7821 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 2, offset: 7640 },
        end: { line: 235, column: 53, offset: 7821 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 237, column: 1, offset: 7823 },
            end: { line: 237, column: 60, offset: 7882 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 237, column: 60, offset: 7882 },
            end: { line: 237, column: 70, offset: 7892 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 237, column: 70, offset: 7892 },
            end: { line: 237, column: 111, offset: 7933 }
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
                start: { line: 237, column: 112, offset: 7934 },
                end: { line: 237, column: 128, offset: 7950 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 111, offset: 7933 },
            end: { line: 237, column: 155, offset: 7977 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 237, column: 155, offset: 7977 },
            end: { line: 237, column: 156, offset: 7978 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7823 },
        end: { line: 237, column: 156, offset: 7978 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Benchmarks',
          position: {
            start: { line: 239, column: 4, offset: 7983 },
            end: { line: 239, column: 14, offset: 7993 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 7980 },
        end: { line: 239, column: 14, offset: 7993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 240, column: 1, offset: 7994 },
            end: { line: 240, column: 55, offset: 8048 }
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
                start: { line: 240, column: 56, offset: 8049 },
                end: { line: 240, column: 72, offset: 8065 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 55, offset: 8048 },
            end: { line: 240, column: 143, offset: 8136 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 240, column: 143, offset: 8136 },
            end: { line: 240, column: 225, offset: 8218 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 7994 },
        end: { line: 240, column: 225, offset: 8218 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 241, column: 1, offset: 8219 },
        end: { line: 243, column: 4, offset: 8240 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Contributing',
          position: {
            start: { line: 245, column: 4, offset: 8245 },
            end: { line: 245, column: 16, offset: 8257 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 8242 },
        end: { line: 245, column: 16, offset: 8257 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 246, column: 1, offset: 8258 },
            end: { line: 246, column: 260, offset: 8517 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8258 },
        end: { line: 246, column: 260, offset: 8517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 248, column: 1, offset: 8519 },
            end: { line: 248, column: 89, offset: 8607 }
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
                start: { line: 248, column: 90, offset: 8608 },
                end: { line: 248, column: 110, offset: 8628 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 89, offset: 8607 },
            end: { line: 248, column: 160, offset: 8678 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 248, column: 160, offset: 8678 },
            end: { line: 248, column: 205, offset: 8723 }
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
                start: { line: 248, column: 206, offset: 8724 },
                end: { line: 248, column: 217, offset: 8735 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 205, offset: 8723 },
            end: { line: 248, column: 315, offset: 8833 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 248, column: 315, offset: 8833 },
            end: { line: 248, column: 345, offset: 8863 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8519 },
        end: { line: 248, column: 345, offset: 8863 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 250, column: 1, offset: 8865 },
            end: { line: 250, column: 33, offset: 8897 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico/blob/master/CONTRIBUTING.md',
          children: [
            {
              type: 'text',
              value: 'CONTRIBUTING.md',
              position: {
                start: { line: 250, column: 34, offset: 8898 },
                end: { line: 250, column: 49, offset: 8913 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 33, offset: 8897 },
            end: { line: 250, column: 119, offset: 8983 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8865 },
        end: { line: 250, column: 119, offset: 8983 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'License',
          position: {
            start: { line: 252, column: 4, offset: 8988 },
            end: { line: 252, column: 11, offset: 8995 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 8985 },
        end: { line: 252, column: 11, offset: 8995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is ',
          position: {
            start: { line: 253, column: 1, offset: 8996 },
            end: { line: 253, column: 11, offset: 9006 }
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
                start: { line: 253, column: 12, offset: 9007 },
                end: { line: 253, column: 24, offset: 9019 }
              }
            }
          ],
          position: {
            start: { line: 253, column: 11, offset: 9006 },
            end: { line: 253, column: 86, offset: 9081 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 253, column: 86, offset: 9081 },
            end: { line: 253, column: 87, offset: 9082 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8996 },
        end: { line: 253, column: 87, offset: 9082 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Support',
          position: {
            start: { line: 255, column: 4, offset: 9087 },
            end: { line: 255, column: 11, offset: 9094 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 9084 },
        end: { line: 255, column: 11, offset: 9094 }
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
                    start: { line: 256, column: 4, offset: 9098 },
                    end: { line: 256, column: 31, offset: 9125 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 9098 },
                end: { line: 256, column: 31, offset: 9125 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 9096 },
            end: { line: 256, column: 31, offset: 9125 }
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
                    start: { line: 257, column: 4, offset: 9129 },
                    end: { line: 257, column: 30, offset: 9155 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 9129 },
                end: { line: 257, column: 30, offset: 9155 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 9127 },
            end: { line: 257, column: 30, offset: 9155 }
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
                    start: { line: 258, column: 4, offset: 9159 },
                    end: { line: 258, column: 31, offset: 9186 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 9159 },
                end: { line: 258, column: 31, offset: 9186 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 9157 },
            end: { line: 258, column: 31, offset: 9186 }
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
                    start: { line: 259, column: 4, offset: 9190 },
                    end: { line: 259, column: 28, offset: 9214 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 9190 },
                end: { line: 259, column: 28, offset: 9214 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 9188 },
            end: { line: 259, column: 28, offset: 9214 }
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
                    start: { line: 260, column: 4, offset: 9218 },
                    end: { line: 260, column: 32, offset: 9246 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 9218 },
                end: { line: 260, column: 32, offset: 9246 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 9216 },
            end: { line: 260, column: 32, offset: 9246 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 2, offset: 9096 },
        end: { line: 260, column: 32, offset: 9246 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Blog',
          position: {
            start: { line: 262, column: 4, offset: 9251 },
            end: { line: 262, column: 8, offset: 9255 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9248 },
        end: { line: 262, column: 8, offset: 9255 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 263, column: 1, offset: 9256 },
            end: { line: 263, column: 70, offset: 9325 }
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
                start: { line: 263, column: 71, offset: 9326 },
                end: { line: 263, column: 95, offset: 9350 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 70, offset: 9325 },
            end: { line: 263, column: 122, offset: 9377 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 263, column: 122, offset: 9377 },
            end: { line: 263, column: 123, offset: 9378 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 9256 },
        end: { line: 263, column: 123, offset: 9378 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 264, column: 1, offset: 9379 }
  }
}