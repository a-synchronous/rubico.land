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
          url: 'https://cdn.jsdelivr.net/npm/rubico/index.js',
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
            end: { line: 29, column: 59, offset: 1013 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 29, column: 59, offset: 1013 },
            end: { line: 29, column: 61, offset: 1015 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cdn.jsdelivr.net/npm/rubico/dist/rubico.min.js',
          children: [
            {
              type: 'text',
              value: '~7.7 kB minified and gzipped',
              position: {
                start: { line: 29, column: 62, offset: 1016 },
                end: { line: 29, column: 90, offset: 1044 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 61, offset: 1015 },
            end: { line: 29, column: 147, offset: 1101 }
          }
        },
        {
          type: 'text',
          value: ') ',
          position: {
            start: { line: 29, column: 147, offset: 1101 },
            end: { line: 29, column: 149, offset: 1103 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.js',
          children: [
            {
              type: 'text',
              value: 'Transducer module',
              position: {
                start: { line: 29, column: 150, offset: 1104 },
                end: { line: 29, column: 167, offset: 1121 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 149, offset: 1103 },
            end: { line: 29, column: 224, offset: 1178 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 29, column: 224, offset: 1178 },
            end: { line: 29, column: 226, offset: 1180 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.min.js',
          children: [
            {
              type: 'text',
              value: '~1.5kb minified and gzipped',
              position: {
                start: { line: 29, column: 227, offset: 1181 },
                end: { line: 29, column: 254, offset: 1208 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 226, offset: 1180 },
            end: { line: 29, column: 315, offset: 1269 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 29, column: 315, offset: 1269 },
            end: { line: 29, column: 316, offset: 1270 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 955 },
        end: { line: 29, column: 316, offset: 1270 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 31, column: 1, offset: 1272 },
            end: { line: 31, column: 6, offset: 1277 }
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
                start: { line: 31, column: 7, offset: 1278 },
                end: { line: 31, column: 10, offset: 1281 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 6, offset: 1277 },
            end: { line: 31, column: 78, offset: 1349 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 31, column: 78, offset: 1349 },
            end: { line: 31, column: 79, offset: 1350 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1272 },
        end: { line: 31, column: 79, offset: 1350 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 32, column: 1, offset: 1351 },
        end: { line: 34, column: 4, offset: 1375 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 37, column: 1, offset: 1378 },
            end: { line: 37, column: 19, offset: 1396 }
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
                start: { line: 37, column: 20, offset: 1397 },
                end: { line: 37, column: 28, offset: 1405 }
              }
            }
          ],
          position: {
            start: { line: 37, column: 19, offset: 1396 },
            end: { line: 37, column: 103, offset: 1480 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 37, column: 103, offset: 1480 },
            end: { line: 37, column: 104, offset: 1481 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1378 },
        end: { line: 37, column: 104, offset: 1481 }
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
        start: { line: 38, column: 1, offset: 1482 },
        end: { line: 56, column: 4, offset: 1929 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 59, column: 1, offset: 1932 },
            end: { line: 59, column: 30, offset: 1961 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 1, offset: 1932 },
        end: { line: 59, column: 30, offset: 1961 }
      }
    },
    {
      type: 'code',
      lang: 'html',
      meta: '[htmlmixed]',
      value: '<!-- import rubico core globally -->\n' +
        '<script src="https://cdn.jsdelivr.net/npm/rubico/dist/global.min.js"></script>\n' +
        '\n' +
        '<!-- import rubico core as rubico -->\n' +
        '<script src="https://cdn.jsdelivr.net/npm/rubico/dist/rubico.min.js"></script>\n' +
        '\n' +
        '<!-- import an operator from rubico core -->\n' +
        '<script src="https://cdn.jsdelivr.net/npm/rubico/dist/pipe.min.js"></script>\n' +
        '\n' +
        '<!-- import an operator from rubico/x -->\n' +
        '<script src="https://cdn.jsdelivr.net/npm/rubico/dist/x/defaultsDeep.min.js"></script>\n' +
        '\n' +
        "<!-- import rubico's Transducer module -->\n" +
        '<script src="https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.min.js"></script>',
      position: {
        start: { line: 60, column: 1, offset: 1962 },
        end: { line: 75, column: 4, offset: 2599 }
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
            start: { line: 77, column: 4, offset: 2604 },
            end: { line: 77, column: 14, offset: 2614 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2601 },
        end: { line: 77, column: 14, offset: 2614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 79, column: 1, offset: 2616 },
            end: { line: 79, column: 23, offset: 2638 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2616 },
        end: { line: 79, column: 23, offset: 2638 }
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
                start: { line: 80, column: 3, offset: 2641 },
                end: { line: 80, column: 463, offset: 3101 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 3, offset: 2641 },
            end: { line: 80, column: 463, offset: 3101 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2639 },
        end: { line: 80, column: 463, offset: 3101 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 82, column: 1, offset: 3103 },
            end: { line: 82, column: 47, offset: 3149 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 3103 },
        end: { line: 82, column: 47, offset: 3149 }
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
                    start: { line: 83, column: 4, offset: 3153 },
                    end: { line: 83, column: 38, offset: 3187 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 3153 },
                end: { line: 83, column: 38, offset: 3187 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 3151 },
            end: { line: 83, column: 38, offset: 3187 }
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
                    start: { line: 84, column: 4, offset: 3191 },
                    end: { line: 84, column: 48, offset: 3235 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 3191 },
                end: { line: 84, column: 48, offset: 3235 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 3189 },
            end: { line: 84, column: 48, offset: 3235 }
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
                    start: { line: 85, column: 4, offset: 3239 },
                    end: { line: 85, column: 86, offset: 3321 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 3239 },
                end: { line: 85, column: 86, offset: 3321 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 3237 },
            end: { line: 85, column: 86, offset: 3321 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 2, offset: 3151 },
        end: { line: 85, column: 86, offset: 3321 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 87, column: 1, offset: 3323 },
            end: { line: 87, column: 145, offset: 3467 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3323 },
        end: { line: 87, column: 145, offset: 3467 }
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
            start: { line: 89, column: 4, offset: 3472 },
            end: { line: 89, column: 16, offset: 3484 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3469 },
        end: { line: 89, column: 16, offset: 3484 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 91, column: 1, offset: 3486 },
            end: { line: 91, column: 169, offset: 3654 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3486 },
        end: { line: 91, column: 169, offset: 3654 }
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
        start: { line: 93, column: 1, offset: 3656 },
        end: { line: 122, column: 4, offset: 4109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 124, column: 1, offset: 4111 },
            end: { line: 124, column: 252, offset: 4362 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 4111 },
        end: { line: 124, column: 252, offset: 4362 }
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
        start: { line: 126, column: 1, offset: 4364 },
        end: { line: 136, column: 4, offset: 4692 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both eager and lazy APIs. The eager API takes all required arguments and executes at once, while the lazy API takes only the setup arguments and returns a function that only expects the data arguments. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 138, column: 1, offset: 4694 },
            end: { line: 138, column: 291, offset: 4984 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4694 },
        end: { line: 138, column: 291, offset: 4984 }
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
        start: { line: 140, column: 1, offset: 4986 },
        end: { line: 153, column: 4, offset: 5316 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 155, column: 1, offset: 5318 },
            end: { line: 155, column: 182, offset: 5499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 155, column: 182, offset: 5499 },
            end: { line: 155, column: 187, offset: 5504 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 155, column: 187, offset: 5504 },
            end: { line: 155, column: 219, offset: 5536 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 155, column: 219, offset: 5536 },
            end: { line: 155, column: 224, offset: 5541 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 155, column: 224, offset: 5541 },
            end: { line: 155, column: 240, offset: 5557 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 5318 },
        end: { line: 155, column: 240, offset: 5557 }
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
        start: { line: 157, column: 1, offset: 5559 },
        end: { line: 206, column: 4, offset: 7010 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 208, column: 1, offset: 7012 },
            end: { line: 208, column: 35, offset: 7046 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 208, column: 35, offset: 7046 },
            end: { line: 208, column: 47, offset: 7058 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 208, column: 47, offset: 7058 },
            end: { line: 208, column: 88, offset: 7099 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 208, column: 88, offset: 7099 },
            end: { line: 208, column: 99, offset: 7110 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 208, column: 99, offset: 7110 },
            end: { line: 208, column: 104, offset: 7115 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 104, offset: 7115 },
            end: { line: 208, column: 113, offset: 7124 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 208, column: 113, offset: 7124 },
            end: { line: 208, column: 129, offset: 7140 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 129, offset: 7140 },
            end: { line: 208, column: 138, offset: 7149 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 208, column: 138, offset: 7149 },
            end: { line: 208, column: 191, offset: 7202 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7012 },
        end: { line: 208, column: 191, offset: 7202 }
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
        start: { line: 210, column: 1, offset: 7204 },
        end: { line: 230, column: 4, offset: 7568 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 232, column: 1, offset: 7570 },
            end: { line: 232, column: 136, offset: 7705 }
          }
        }
      ],
      position: {
        start: { line: 232, column: 1, offset: 7570 },
        end: { line: 232, column: 136, offset: 7705 }
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
                    start: { line: 233, column: 4, offset: 7709 },
                    end: { line: 233, column: 9, offset: 7714 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 233, column: 9, offset: 7714 },
                    end: { line: 233, column: 50, offset: 7755 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7709 },
                end: { line: 233, column: 50, offset: 7755 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7707 },
            end: { line: 233, column: 50, offset: 7755 }
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
                    start: { line: 234, column: 4, offset: 7759 },
                    end: { line: 234, column: 14, offset: 7769 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 234, column: 14, offset: 7769 },
                    end: { line: 234, column: 80, offset: 7835 }
                  }
                }
              ],
              position: {
                start: { line: 234, column: 4, offset: 7759 },
                end: { line: 234, column: 80, offset: 7835 }
              }
            }
          ],
          position: {
            start: { line: 234, column: 2, offset: 7757 },
            end: { line: 234, column: 80, offset: 7835 }
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
                    start: { line: 235, column: 4, offset: 7839 },
                    end: { line: 235, column: 16, offset: 7851 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 235, column: 16, offset: 7851 },
                    end: { line: 235, column: 53, offset: 7888 }
                  }
                }
              ],
              position: {
                start: { line: 235, column: 4, offset: 7839 },
                end: { line: 235, column: 53, offset: 7888 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 2, offset: 7837 },
            end: { line: 235, column: 53, offset: 7888 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 2, offset: 7707 },
        end: { line: 235, column: 53, offset: 7888 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 237, column: 1, offset: 7890 },
            end: { line: 237, column: 60, offset: 7949 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 237, column: 60, offset: 7949 },
            end: { line: 237, column: 70, offset: 7959 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 237, column: 70, offset: 7959 },
            end: { line: 237, column: 111, offset: 8000 }
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
                start: { line: 237, column: 112, offset: 8001 },
                end: { line: 237, column: 128, offset: 8017 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 111, offset: 8000 },
            end: { line: 237, column: 155, offset: 8044 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 237, column: 155, offset: 8044 },
            end: { line: 237, column: 156, offset: 8045 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7890 },
        end: { line: 237, column: 156, offset: 8045 }
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
            start: { line: 239, column: 4, offset: 8050 },
            end: { line: 239, column: 14, offset: 8060 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 8047 },
        end: { line: 239, column: 14, offset: 8060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 240, column: 1, offset: 8061 },
            end: { line: 240, column: 55, offset: 8115 }
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
                start: { line: 240, column: 56, offset: 8116 },
                end: { line: 240, column: 72, offset: 8132 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 55, offset: 8115 },
            end: { line: 240, column: 143, offset: 8203 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 240, column: 143, offset: 8203 },
            end: { line: 240, column: 225, offset: 8285 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 8061 },
        end: { line: 240, column: 225, offset: 8285 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 241, column: 1, offset: 8286 },
        end: { line: 243, column: 4, offset: 8307 }
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
            start: { line: 245, column: 4, offset: 8312 },
            end: { line: 245, column: 16, offset: 8324 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 8309 },
        end: { line: 245, column: 16, offset: 8324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 246, column: 1, offset: 8325 },
            end: { line: 246, column: 260, offset: 8584 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8325 },
        end: { line: 246, column: 260, offset: 8584 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 248, column: 1, offset: 8586 },
            end: { line: 248, column: 89, offset: 8674 }
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
                start: { line: 248, column: 90, offset: 8675 },
                end: { line: 248, column: 110, offset: 8695 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 89, offset: 8674 },
            end: { line: 248, column: 160, offset: 8745 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 248, column: 160, offset: 8745 },
            end: { line: 248, column: 205, offset: 8790 }
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
                start: { line: 248, column: 206, offset: 8791 },
                end: { line: 248, column: 217, offset: 8802 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 205, offset: 8790 },
            end: { line: 248, column: 315, offset: 8900 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 248, column: 315, offset: 8900 },
            end: { line: 248, column: 345, offset: 8930 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8586 },
        end: { line: 248, column: 345, offset: 8930 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 250, column: 1, offset: 8932 },
            end: { line: 250, column: 33, offset: 8964 }
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
                start: { line: 250, column: 34, offset: 8965 },
                end: { line: 250, column: 49, offset: 8980 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 33, offset: 8964 },
            end: { line: 250, column: 119, offset: 9050 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8932 },
        end: { line: 250, column: 119, offset: 9050 }
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
            start: { line: 252, column: 4, offset: 9055 },
            end: { line: 252, column: 11, offset: 9062 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 9052 },
        end: { line: 252, column: 11, offset: 9062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is ',
          position: {
            start: { line: 253, column: 1, offset: 9063 },
            end: { line: 253, column: 11, offset: 9073 }
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
                start: { line: 253, column: 12, offset: 9074 },
                end: { line: 253, column: 24, offset: 9086 }
              }
            }
          ],
          position: {
            start: { line: 253, column: 11, offset: 9073 },
            end: { line: 253, column: 86, offset: 9148 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 253, column: 86, offset: 9148 },
            end: { line: 253, column: 87, offset: 9149 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 9063 },
        end: { line: 253, column: 87, offset: 9149 }
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
            start: { line: 255, column: 4, offset: 9154 },
            end: { line: 255, column: 11, offset: 9161 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 9151 },
        end: { line: 255, column: 11, offset: 9161 }
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
                    start: { line: 256, column: 4, offset: 9165 },
                    end: { line: 256, column: 31, offset: 9192 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 9165 },
                end: { line: 256, column: 31, offset: 9192 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 9163 },
            end: { line: 256, column: 31, offset: 9192 }
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
                    start: { line: 257, column: 4, offset: 9196 },
                    end: { line: 257, column: 30, offset: 9222 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 9196 },
                end: { line: 257, column: 30, offset: 9222 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 9194 },
            end: { line: 257, column: 30, offset: 9222 }
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
                    start: { line: 258, column: 4, offset: 9226 },
                    end: { line: 258, column: 31, offset: 9253 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 9226 },
                end: { line: 258, column: 31, offset: 9253 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 9224 },
            end: { line: 258, column: 31, offset: 9253 }
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
                    start: { line: 259, column: 4, offset: 9257 },
                    end: { line: 259, column: 28, offset: 9281 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 9257 },
                end: { line: 259, column: 28, offset: 9281 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 9255 },
            end: { line: 259, column: 28, offset: 9281 }
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
                    start: { line: 260, column: 4, offset: 9285 },
                    end: { line: 260, column: 32, offset: 9313 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 9285 },
                end: { line: 260, column: 32, offset: 9313 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 9283 },
            end: { line: 260, column: 32, offset: 9313 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 2, offset: 9163 },
        end: { line: 260, column: 32, offset: 9313 }
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
            start: { line: 262, column: 4, offset: 9318 },
            end: { line: 262, column: 8, offset: 9322 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9315 },
        end: { line: 262, column: 8, offset: 9322 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 263, column: 1, offset: 9323 },
            end: { line: 263, column: 70, offset: 9392 }
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
                start: { line: 263, column: 71, offset: 9393 },
                end: { line: 263, column: 95, offset: 9417 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 70, offset: 9392 },
            end: { line: 263, column: 122, offset: 9444 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 263, column: 122, offset: 9444 },
            end: { line: 263, column: 123, offset: 9445 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 9323 },
        end: { line: 263, column: 123, offset: 9445 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 264, column: 1, offset: 9446 }
  }
}