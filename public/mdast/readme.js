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
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 5, column: 1, offset: 186 },
            end: { line: 5, column: 14, offset: 199 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://github.com/a-synchronous/rubico',
          children: [
            {
              type: 'text',
              value: 'GitHub',
              position: {
                start: { line: 5, column: 15, offset: 200 },
                end: { line: 5, column: 21, offset: 206 }
              }
            }
          ],
          position: {
            start: { line: 5, column: 14, offset: 199 },
            end: { line: 5, column: 63, offset: 248 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 5, column: 63, offset: 248 },
            end: { line: 6, column: 10, offset: 260 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS',
              position: {
                start: { line: 6, column: 11, offset: 261 },
                end: { line: 6, column: 16, offset: 266 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 10, offset: 260 },
            end: { line: 6, column: 68, offset: 318 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 186 },
        end: { line: 6, column: 68, offset: 318 }
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
            start: { line: 8, column: 1, offset: 320 },
            end: { line: 8, column: 88, offset: 407 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 8, column: 88, offset: 407 },
            end: { line: 9, column: 1, offset: 408 }
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
                start: { line: 9, column: 2, offset: 409 },
                end: { line: 9, column: 86, offset: 493 }
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 408 },
            end: { line: 9, column: 131, offset: 538 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 9, column: 131, offset: 538 },
            end: { line: 10, column: 1, offset: 539 }
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
                start: { line: 10, column: 2, offset: 540 },
                end: { line: 10, column: 68, offset: 606 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 539 },
            end: { line: 10, column: 107, offset: 645 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 320 },
        end: { line: 10, column: 107, offset: 645 }
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
            start: { line: 12, column: 4, offset: 650 },
            end: { line: 12, column: 41, offset: 687 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 647 },
        end: { line: 12, column: 41, offset: 687 }
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
        start: { line: 14, column: 1, offset: 689 },
        end: { line: 28, column: 4, offset: 965 }
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
            start: { line: 30, column: 4, offset: 970 },
            end: { line: 30, column: 16, offset: 982 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 967 },
        end: { line: 30, column: 16, offset: 982 }
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
                start: { line: 31, column: 2, offset: 984 },
                end: { line: 31, column: 12, offset: 994 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 983 },
            end: { line: 31, column: 59, offset: 1041 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 31, column: 59, offset: 1041 },
            end: { line: 31, column: 61, offset: 1043 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cdn.jsdelivr.net/npm/rubico/dist/rubico.min.js',
          children: [
            {
              type: 'text',
              value: '~8.3 kB minified and gzipped',
              position: {
                start: { line: 31, column: 62, offset: 1044 },
                end: { line: 31, column: 90, offset: 1072 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 61, offset: 1043 },
            end: { line: 31, column: 147, offset: 1129 }
          }
        },
        {
          type: 'text',
          value: ') ',
          position: {
            start: { line: 31, column: 147, offset: 1129 },
            end: { line: 31, column: 149, offset: 1131 }
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
                start: { line: 31, column: 150, offset: 1132 },
                end: { line: 31, column: 167, offset: 1149 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 149, offset: 1131 },
            end: { line: 31, column: 224, offset: 1206 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 31, column: 224, offset: 1206 },
            end: { line: 31, column: 226, offset: 1208 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.min.js',
          children: [
            {
              type: 'text',
              value: '~1.7kb minified and gzipped',
              position: {
                start: { line: 31, column: 227, offset: 1209 },
                end: { line: 31, column: 254, offset: 1236 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 226, offset: 1208 },
            end: { line: 31, column: 315, offset: 1297 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 31, column: 315, offset: 1297 },
            end: { line: 31, column: 316, offset: 1298 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 983 },
        end: { line: 31, column: 316, offset: 1298 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 33, column: 1, offset: 1300 },
            end: { line: 33, column: 6, offset: 1305 }
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
                start: { line: 33, column: 7, offset: 1306 },
                end: { line: 33, column: 10, offset: 1309 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 6, offset: 1305 },
            end: { line: 33, column: 78, offset: 1377 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 33, column: 78, offset: 1377 },
            end: { line: 33, column: 79, offset: 1378 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1300 },
        end: { line: 33, column: 79, offset: 1378 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 34, column: 1, offset: 1379 },
        end: { line: 36, column: 4, offset: 1403 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 39, column: 1, offset: 1406 },
            end: { line: 39, column: 19, offset: 1424 }
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
                start: { line: 39, column: 20, offset: 1425 },
                end: { line: 39, column: 28, offset: 1433 }
              }
            }
          ],
          position: {
            start: { line: 39, column: 19, offset: 1424 },
            end: { line: 39, column: 103, offset: 1508 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 39, column: 103, offset: 1508 },
            end: { line: 39, column: 104, offset: 1509 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1406 },
        end: { line: 39, column: 104, offset: 1509 }
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
        start: { line: 40, column: 1, offset: 1510 },
        end: { line: 58, column: 4, offset: 1957 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 61, column: 1, offset: 1960 },
            end: { line: 61, column: 30, offset: 1989 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1960 },
        end: { line: 61, column: 30, offset: 1989 }
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
        start: { line: 62, column: 1, offset: 1990 },
        end: { line: 77, column: 4, offset: 2627 }
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
            start: { line: 79, column: 4, offset: 2632 },
            end: { line: 79, column: 14, offset: 2642 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2629 },
        end: { line: 79, column: 14, offset: 2642 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 81, column: 1, offset: 2644 },
            end: { line: 81, column: 23, offset: 2666 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2644 },
        end: { line: 81, column: 23, offset: 2666 }
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
                start: { line: 82, column: 3, offset: 2669 },
                end: { line: 82, column: 463, offset: 3129 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 3, offset: 2669 },
            end: { line: 82, column: 463, offset: 3129 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 2667 },
        end: { line: 82, column: 463, offset: 3129 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 84, column: 1, offset: 3131 },
            end: { line: 84, column: 47, offset: 3177 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3131 },
        end: { line: 84, column: 47, offset: 3177 }
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
                    start: { line: 85, column: 4, offset: 3181 },
                    end: { line: 85, column: 38, offset: 3215 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 3181 },
                end: { line: 85, column: 38, offset: 3215 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 3179 },
            end: { line: 85, column: 38, offset: 3215 }
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
                    start: { line: 86, column: 4, offset: 3219 },
                    end: { line: 86, column: 48, offset: 3263 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 3219 },
                end: { line: 86, column: 48, offset: 3263 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 3217 },
            end: { line: 86, column: 48, offset: 3263 }
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
                    start: { line: 87, column: 4, offset: 3267 },
                    end: { line: 87, column: 86, offset: 3349 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 3267 },
                end: { line: 87, column: 86, offset: 3349 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 3265 },
            end: { line: 87, column: 86, offset: 3349 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 3179 },
        end: { line: 87, column: 86, offset: 3349 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 89, column: 1, offset: 3351 },
            end: { line: 89, column: 145, offset: 3495 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3351 },
        end: { line: 89, column: 145, offset: 3495 }
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
            start: { line: 91, column: 4, offset: 3500 },
            end: { line: 91, column: 16, offset: 3512 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3497 },
        end: { line: 91, column: 16, offset: 3512 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 93, column: 1, offset: 3514 },
            end: { line: 93, column: 169, offset: 3682 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3514 },
        end: { line: 93, column: 169, offset: 3682 }
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
        start: { line: 95, column: 1, offset: 3684 },
        end: { line: 124, column: 4, offset: 4137 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 126, column: 1, offset: 4139 },
            end: { line: 126, column: 252, offset: 4390 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 4139 },
        end: { line: 126, column: 252, offset: 4390 }
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
        start: { line: 128, column: 1, offset: 4392 },
        end: { line: 138, column: 4, offset: 4720 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both eager and lazy interfaces. The eager interface takes all required arguments and executes at once, while the lazy interface takes only the setup arguments and returns a function that only expects the data arguments. This dual interface supports a natural and composable code style.',
          position: {
            start: { line: 140, column: 1, offset: 4722 },
            end: { line: 140, column: 315, offset: 5036 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 4722 },
        end: { line: 140, column: 315, offset: 5036 }
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
        start: { line: 142, column: 1, offset: 5038 },
        end: { line: 155, column: 4, offset: 5368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 157, column: 1, offset: 5370 },
            end: { line: 157, column: 182, offset: 5551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 157, column: 182, offset: 5551 },
            end: { line: 157, column: 187, offset: 5556 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 157, column: 187, offset: 5556 },
            end: { line: 157, column: 219, offset: 5588 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 157, column: 219, offset: 5588 },
            end: { line: 157, column: 224, offset: 5593 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 157, column: 224, offset: 5593 },
            end: { line: 157, column: 240, offset: 5609 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 5370 },
        end: { line: 157, column: 240, offset: 5609 }
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
        start: { line: 159, column: 1, offset: 5611 },
        end: { line: 208, column: 4, offset: 7062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 210, column: 1, offset: 7064 },
            end: { line: 210, column: 35, offset: 7098 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 210, column: 35, offset: 7098 },
            end: { line: 210, column: 47, offset: 7110 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 210, column: 47, offset: 7110 },
            end: { line: 210, column: 88, offset: 7151 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 210, column: 88, offset: 7151 },
            end: { line: 210, column: 99, offset: 7162 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 210, column: 99, offset: 7162 },
            end: { line: 210, column: 104, offset: 7167 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 210, column: 104, offset: 7167 },
            end: { line: 210, column: 113, offset: 7176 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 210, column: 113, offset: 7176 },
            end: { line: 210, column: 129, offset: 7192 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 210, column: 129, offset: 7192 },
            end: { line: 210, column: 138, offset: 7201 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 210, column: 138, offset: 7201 },
            end: { line: 210, column: 191, offset: 7254 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7064 },
        end: { line: 210, column: 191, offset: 7254 }
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
        start: { line: 212, column: 1, offset: 7256 },
        end: { line: 232, column: 4, offset: 7620 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 234, column: 1, offset: 7622 },
            end: { line: 234, column: 136, offset: 7757 }
          }
        }
      ],
      position: {
        start: { line: 234, column: 1, offset: 7622 },
        end: { line: 234, column: 136, offset: 7757 }
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
                    start: { line: 235, column: 4, offset: 7761 },
                    end: { line: 235, column: 9, offset: 7766 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 235, column: 9, offset: 7766 },
                    end: { line: 235, column: 50, offset: 7807 }
                  }
                }
              ],
              position: {
                start: { line: 235, column: 4, offset: 7761 },
                end: { line: 235, column: 50, offset: 7807 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 2, offset: 7759 },
            end: { line: 235, column: 50, offset: 7807 }
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
                    start: { line: 236, column: 4, offset: 7811 },
                    end: { line: 236, column: 14, offset: 7821 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 236, column: 14, offset: 7821 },
                    end: { line: 236, column: 80, offset: 7887 }
                  }
                }
              ],
              position: {
                start: { line: 236, column: 4, offset: 7811 },
                end: { line: 236, column: 80, offset: 7887 }
              }
            }
          ],
          position: {
            start: { line: 236, column: 2, offset: 7809 },
            end: { line: 236, column: 80, offset: 7887 }
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
                    start: { line: 237, column: 4, offset: 7891 },
                    end: { line: 237, column: 16, offset: 7903 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 237, column: 16, offset: 7903 },
                    end: { line: 237, column: 53, offset: 7940 }
                  }
                }
              ],
              position: {
                start: { line: 237, column: 4, offset: 7891 },
                end: { line: 237, column: 53, offset: 7940 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 2, offset: 7889 },
            end: { line: 237, column: 53, offset: 7940 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 2, offset: 7759 },
        end: { line: 237, column: 53, offset: 7940 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 239, column: 1, offset: 7942 },
            end: { line: 239, column: 60, offset: 8001 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 239, column: 60, offset: 8001 },
            end: { line: 239, column: 70, offset: 8011 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 239, column: 70, offset: 8011 },
            end: { line: 239, column: 111, offset: 8052 }
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
                start: { line: 239, column: 112, offset: 8053 },
                end: { line: 239, column: 128, offset: 8069 }
              }
            }
          ],
          position: {
            start: { line: 239, column: 111, offset: 8052 },
            end: { line: 239, column: 155, offset: 8096 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 239, column: 155, offset: 8096 },
            end: { line: 239, column: 156, offset: 8097 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 7942 },
        end: { line: 239, column: 156, offset: 8097 }
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
            start: { line: 241, column: 4, offset: 8102 },
            end: { line: 241, column: 14, offset: 8112 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 8099 },
        end: { line: 241, column: 14, offset: 8112 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 242, column: 1, offset: 8113 },
            end: { line: 242, column: 55, offset: 8167 }
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
                start: { line: 242, column: 56, offset: 8168 },
                end: { line: 242, column: 72, offset: 8184 }
              }
            }
          ],
          position: {
            start: { line: 242, column: 55, offset: 8167 },
            end: { line: 242, column: 143, offset: 8255 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 242, column: 143, offset: 8255 },
            end: { line: 242, column: 225, offset: 8337 }
          }
        }
      ],
      position: {
        start: { line: 242, column: 1, offset: 8113 },
        end: { line: 242, column: 225, offset: 8337 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 243, column: 1, offset: 8338 },
        end: { line: 245, column: 4, offset: 8359 }
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
            start: { line: 247, column: 4, offset: 8364 },
            end: { line: 247, column: 16, offset: 8376 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8361 },
        end: { line: 247, column: 16, offset: 8376 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 248, column: 1, offset: 8377 },
            end: { line: 248, column: 260, offset: 8636 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8377 },
        end: { line: 248, column: 260, offset: 8636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 250, column: 1, offset: 8638 },
            end: { line: 250, column: 89, offset: 8726 }
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
                start: { line: 250, column: 90, offset: 8727 },
                end: { line: 250, column: 110, offset: 8747 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 89, offset: 8726 },
            end: { line: 250, column: 160, offset: 8797 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 250, column: 160, offset: 8797 },
            end: { line: 250, column: 205, offset: 8842 }
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
                start: { line: 250, column: 206, offset: 8843 },
                end: { line: 250, column: 217, offset: 8854 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 205, offset: 8842 },
            end: { line: 250, column: 315, offset: 8952 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 250, column: 315, offset: 8952 },
            end: { line: 250, column: 345, offset: 8982 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8638 },
        end: { line: 250, column: 345, offset: 8982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 252, column: 1, offset: 8984 },
            end: { line: 252, column: 33, offset: 9016 }
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
                start: { line: 252, column: 34, offset: 9017 },
                end: { line: 252, column: 49, offset: 9032 }
              }
            }
          ],
          position: {
            start: { line: 252, column: 33, offset: 9016 },
            end: { line: 252, column: 119, offset: 9102 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 8984 },
        end: { line: 252, column: 119, offset: 9102 }
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
            start: { line: 254, column: 4, offset: 9107 },
            end: { line: 254, column: 11, offset: 9114 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 1, offset: 9104 },
        end: { line: 254, column: 11, offset: 9114 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is distributed under the ',
          position: {
            start: { line: 255, column: 1, offset: 9115 },
            end: { line: 255, column: 33, offset: 9147 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://cloutsworld.com/en-us/legal/license/cfoss',
          children: [
            {
              type: 'text',
              value: 'CFOSS License',
              position: {
                start: { line: 255, column: 34, offset: 9148 },
                end: { line: 255, column: 47, offset: 9161 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 33, offset: 9147 },
            end: { line: 255, column: 99, offset: 9213 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 255, column: 99, offset: 9213 },
            end: { line: 255, column: 100, offset: 9214 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 9115 },
        end: { line: 255, column: 100, offset: 9214 }
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
            start: { line: 257, column: 4, offset: 9219 },
            end: { line: 257, column: 11, offset: 9226 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 9216 },
        end: { line: 257, column: 11, offset: 9226 }
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
                    start: { line: 258, column: 4, offset: 9230 },
                    end: { line: 258, column: 31, offset: 9257 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 9230 },
                end: { line: 258, column: 31, offset: 9257 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 9228 },
            end: { line: 258, column: 31, offset: 9257 }
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
                    start: { line: 259, column: 4, offset: 9261 },
                    end: { line: 259, column: 30, offset: 9287 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 9261 },
                end: { line: 259, column: 30, offset: 9287 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 9259 },
            end: { line: 259, column: 30, offset: 9287 }
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
                    start: { line: 260, column: 4, offset: 9291 },
                    end: { line: 260, column: 31, offset: 9318 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 9291 },
                end: { line: 260, column: 31, offset: 9318 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 9289 },
            end: { line: 260, column: 31, offset: 9318 }
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
                    start: { line: 261, column: 4, offset: 9322 },
                    end: { line: 261, column: 28, offset: 9346 }
                  }
                }
              ],
              position: {
                start: { line: 261, column: 4, offset: 9322 },
                end: { line: 261, column: 28, offset: 9346 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 2, offset: 9320 },
            end: { line: 261, column: 28, offset: 9346 }
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
                    start: { line: 262, column: 4, offset: 9350 },
                    end: { line: 262, column: 32, offset: 9378 }
                  }
                }
              ],
              position: {
                start: { line: 262, column: 4, offset: 9350 },
                end: { line: 262, column: 32, offset: 9378 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 2, offset: 9348 },
            end: { line: 262, column: 32, offset: 9378 }
          }
        }
      ],
      position: {
        start: { line: 258, column: 2, offset: 9228 },
        end: { line: 262, column: 32, offset: 9378 }
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
            start: { line: 264, column: 4, offset: 9383 },
            end: { line: 264, column: 8, offset: 9387 }
          }
        }
      ],
      position: {
        start: { line: 264, column: 1, offset: 9380 },
        end: { line: 264, column: 8, offset: 9387 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 265, column: 1, offset: 9388 },
            end: { line: 265, column: 70, offset: 9457 }
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
                start: { line: 265, column: 71, offset: 9458 },
                end: { line: 265, column: 95, offset: 9482 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 70, offset: 9457 },
            end: { line: 265, column: 122, offset: 9509 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 265, column: 122, offset: 9509 },
            end: { line: 265, column: 123, offset: 9510 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 9388 },
        end: { line: 265, column: 123, offset: 9510 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 266, column: 1, offset: 9511 }
  }
}