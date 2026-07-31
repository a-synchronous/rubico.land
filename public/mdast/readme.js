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
        '  console.log,\n' +
        '])',
      position: {
        start: { line: 14, column: 1, offset: 689 },
        end: { line: 28, column: 4, offset: 951 }
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
            start: { line: 30, column: 4, offset: 956 },
            end: { line: 30, column: 16, offset: 968 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 953 },
        end: { line: 30, column: 16, offset: 968 }
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
                start: { line: 31, column: 2, offset: 970 },
                end: { line: 31, column: 12, offset: 980 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 1, offset: 969 },
            end: { line: 31, column: 59, offset: 1027 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 31, column: 59, offset: 1027 },
            end: { line: 31, column: 61, offset: 1029 }
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
                start: { line: 31, column: 62, offset: 1030 },
                end: { line: 31, column: 90, offset: 1058 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 61, offset: 1029 },
            end: { line: 31, column: 147, offset: 1115 }
          }
        },
        {
          type: 'text',
          value: ') ',
          position: {
            start: { line: 31, column: 147, offset: 1115 },
            end: { line: 31, column: 149, offset: 1117 }
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
                start: { line: 31, column: 150, offset: 1118 },
                end: { line: 31, column: 167, offset: 1135 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 149, offset: 1117 },
            end: { line: 31, column: 224, offset: 1192 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 31, column: 224, offset: 1192 },
            end: { line: 31, column: 226, offset: 1194 }
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
                start: { line: 31, column: 227, offset: 1195 },
                end: { line: 31, column: 254, offset: 1222 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 226, offset: 1194 },
            end: { line: 31, column: 315, offset: 1283 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 31, column: 315, offset: 1283 },
            end: { line: 31, column: 316, offset: 1284 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 969 },
        end: { line: 31, column: 316, offset: 1284 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 33, column: 1, offset: 1286 },
            end: { line: 33, column: 6, offset: 1291 }
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
                start: { line: 33, column: 7, offset: 1292 },
                end: { line: 33, column: 10, offset: 1295 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 6, offset: 1291 },
            end: { line: 33, column: 78, offset: 1363 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 33, column: 78, offset: 1363 },
            end: { line: 33, column: 79, offset: 1364 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1286 },
        end: { line: 33, column: 79, offset: 1364 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 34, column: 1, offset: 1365 },
        end: { line: 36, column: 4, offset: 1389 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 39, column: 1, offset: 1392 },
            end: { line: 39, column: 19, offset: 1410 }
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
                start: { line: 39, column: 20, offset: 1411 },
                end: { line: 39, column: 28, offset: 1419 }
              }
            }
          ],
          position: {
            start: { line: 39, column: 19, offset: 1410 },
            end: { line: 39, column: 103, offset: 1494 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 39, column: 103, offset: 1494 },
            end: { line: 39, column: 104, offset: 1495 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1392 },
        end: { line: 39, column: 104, offset: 1495 }
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
        start: { line: 40, column: 1, offset: 1496 },
        end: { line: 58, column: 4, offset: 1943 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 61, column: 1, offset: 1946 },
            end: { line: 61, column: 30, offset: 1975 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 1946 },
        end: { line: 61, column: 30, offset: 1975 }
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
        start: { line: 62, column: 1, offset: 1976 },
        end: { line: 77, column: 4, offset: 2613 }
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
            start: { line: 79, column: 4, offset: 2618 },
            end: { line: 79, column: 14, offset: 2628 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2615 },
        end: { line: 79, column: 14, offset: 2628 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author:',
          position: {
            start: { line: 81, column: 1, offset: 2630 },
            end: { line: 81, column: 24, offset: 2653 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2630 },
        end: { line: 81, column: 24, offset: 2653 }
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
                start: { line: 82, column: 3, offset: 2656 },
                end: { line: 82, column: 463, offset: 3116 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 3, offset: 2656 },
            end: { line: 82, column: 463, offset: 3116 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 2654 },
        end: { line: 82, column: 463, offset: 3116 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 84, column: 1, offset: 3118 },
            end: { line: 84, column: 47, offset: 3164 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 3118 },
        end: { line: 84, column: 47, offset: 3164 }
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
                    start: { line: 85, column: 4, offset: 3168 },
                    end: { line: 85, column: 38, offset: 3202 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 3168 },
                end: { line: 85, column: 38, offset: 3202 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 3166 },
            end: { line: 85, column: 38, offset: 3202 }
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
                    start: { line: 86, column: 4, offset: 3206 },
                    end: { line: 86, column: 48, offset: 3250 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 3206 },
                end: { line: 86, column: 48, offset: 3250 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 3204 },
            end: { line: 86, column: 48, offset: 3250 }
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
                    start: { line: 87, column: 4, offset: 3254 },
                    end: { line: 87, column: 86, offset: 3336 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 3254 },
                end: { line: 87, column: 86, offset: 3336 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 3252 },
            end: { line: 87, column: 86, offset: 3336 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 3166 },
        end: { line: 87, column: 86, offset: 3336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 89, column: 1, offset: 3338 },
            end: { line: 89, column: 145, offset: 3482 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3338 },
        end: { line: 89, column: 145, offset: 3482 }
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
            start: { line: 91, column: 4, offset: 3487 },
            end: { line: 91, column: 16, offset: 3499 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3484 },
        end: { line: 91, column: 16, offset: 3499 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 93, column: 1, offset: 3501 },
            end: { line: 93, column: 169, offset: 3669 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3501 },
        end: { line: 93, column: 169, offset: 3669 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '\n' +
        '  // function composition\n' +
        '  pipe, compose, tap,\n' +
        '\n' +
        '  // conditional operators\n' +
        '  switchCase,\n' +
        '\n' +
        '  // error handling\n' +
        '  tryCatch,\n' +
        '\n' +
        '  // data construction\n' +
        '  all, assign, get, set, pick, omit,\n' +
        '\n' +
        '  // iteration\n' +
        '  forEach,\n' +
        '\n' +
        '  // transformation\n' +
        '  map, filter, reduce, transform, flatMap,\n' +
        '\n' +
        '  // data testing\n' +
        '  some, every,\n' +
        '\n' +
        '  // logical operators\n' +
        '  and, or, not,\n' +
        '\n' +
        '  // comparison operators\n' +
        '  eq, gt, lt, gte, lte,\n' +
        '\n' +
        '  // partial application\n' +
        '  thunkify, always, curry, __,\n' +
        '\n' +
        '} = rubico',
      position: {
        start: { line: 95, column: 1, offset: 3671 },
        end: { line: 129, column: 4, offset: 4166 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 131, column: 1, offset: 4168 },
            end: { line: 131, column: 252, offset: 4419 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 4168 },
        end: { line: 131, column: 252, offset: 4419 }
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
        '  console.log,\n' +
        '])',
      position: {
        start: { line: 133, column: 1, offset: 4421 },
        end: { line: 143, column: 4, offset: 4734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both eager and lazy interfaces. The eager interface takes all required arguments and executes at once, while the lazy interface takes only the setup arguments and returns a function that only expects the data arguments. This dual interface supports a natural and composable code style.',
          position: {
            start: { line: 145, column: 1, offset: 4736 },
            end: { line: 145, column: 315, offset: 5050 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 4736 },
        end: { line: 145, column: 315, offset: 5050 }
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
        'console.log(myDuplicatedSquaredObject)',
      position: {
        start: { line: 147, column: 1, offset: 5052 },
        end: { line: 159, column: 4, offset: 5343 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 161, column: 1, offset: 5345 },
            end: { line: 161, column: 182, offset: 5526 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 161, column: 182, offset: 5526 },
            end: { line: 161, column: 187, offset: 5531 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 161, column: 187, offset: 5531 },
            end: { line: 161, column: 219, offset: 5563 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 161, column: 219, offset: 5563 },
            end: { line: 161, column: 224, offset: 5568 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 161, column: 224, offset: 5568 },
            end: { line: 161, column: 240, offset: 5584 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 5345 },
        end: { line: 161, column: 240, offset: 5584 }
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
        '])',
      position: {
        start: { line: 163, column: 1, offset: 5586 },
        end: { line: 204, column: 4, offset: 6554 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 206, column: 1, offset: 6556 },
            end: { line: 206, column: 35, offset: 6590 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 206, column: 35, offset: 6590 },
            end: { line: 206, column: 47, offset: 6602 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 206, column: 47, offset: 6602 },
            end: { line: 206, column: 88, offset: 6643 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 206, column: 88, offset: 6643 },
            end: { line: 206, column: 99, offset: 6654 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 206, column: 99, offset: 6654 },
            end: { line: 206, column: 104, offset: 6659 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 104, offset: 6659 },
            end: { line: 206, column: 113, offset: 6668 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 206, column: 113, offset: 6668 },
            end: { line: 206, column: 129, offset: 6684 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 129, offset: 6684 },
            end: { line: 206, column: 138, offset: 6693 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 206, column: 138, offset: 6693 },
            end: { line: 206, column: 191, offset: 6746 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6556 },
        end: { line: 206, column: 191, offset: 6746 }
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
        '  console.log,\n' +
        '])',
      position: {
        start: { line: 208, column: 1, offset: 6748 },
        end: { line: 228, column: 4, offset: 7098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 230, column: 1, offset: 7100 },
            end: { line: 230, column: 136, offset: 7235 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7100 },
        end: { line: 230, column: 136, offset: 7235 }
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
                    start: { line: 231, column: 4, offset: 7239 },
                    end: { line: 231, column: 9, offset: 7244 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 231, column: 9, offset: 7244 },
                    end: { line: 231, column: 50, offset: 7285 }
                  }
                }
              ],
              position: {
                start: { line: 231, column: 4, offset: 7239 },
                end: { line: 231, column: 50, offset: 7285 }
              }
            }
          ],
          position: {
            start: { line: 231, column: 2, offset: 7237 },
            end: { line: 231, column: 50, offset: 7285 }
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
                    start: { line: 232, column: 4, offset: 7289 },
                    end: { line: 232, column: 14, offset: 7299 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 232, column: 14, offset: 7299 },
                    end: { line: 232, column: 80, offset: 7365 }
                  }
                }
              ],
              position: {
                start: { line: 232, column: 4, offset: 7289 },
                end: { line: 232, column: 80, offset: 7365 }
              }
            }
          ],
          position: {
            start: { line: 232, column: 2, offset: 7287 },
            end: { line: 232, column: 80, offset: 7365 }
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
                    start: { line: 233, column: 4, offset: 7369 },
                    end: { line: 233, column: 16, offset: 7381 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 233, column: 16, offset: 7381 },
                    end: { line: 233, column: 53, offset: 7418 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7369 },
                end: { line: 233, column: 53, offset: 7418 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7367 },
            end: { line: 233, column: 53, offset: 7418 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 2, offset: 7237 },
        end: { line: 233, column: 53, offset: 7418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 235, column: 1, offset: 7420 },
            end: { line: 235, column: 60, offset: 7479 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 235, column: 60, offset: 7479 },
            end: { line: 235, column: 70, offset: 7489 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 235, column: 70, offset: 7489 },
            end: { line: 235, column: 111, offset: 7530 }
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
                start: { line: 235, column: 112, offset: 7531 },
                end: { line: 235, column: 128, offset: 7547 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 111, offset: 7530 },
            end: { line: 235, column: 155, offset: 7574 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 235, column: 155, offset: 7574 },
            end: { line: 235, column: 156, offset: 7575 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 7420 },
        end: { line: 235, column: 156, offset: 7575 }
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
            start: { line: 237, column: 4, offset: 7580 },
            end: { line: 237, column: 14, offset: 7590 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7577 },
        end: { line: 237, column: 14, offset: 7590 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 238, column: 1, offset: 7591 },
            end: { line: 238, column: 55, offset: 7645 }
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
                start: { line: 238, column: 56, offset: 7646 },
                end: { line: 238, column: 72, offset: 7662 }
              }
            }
          ],
          position: {
            start: { line: 238, column: 55, offset: 7645 },
            end: { line: 238, column: 143, offset: 7733 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 238, column: 143, offset: 7733 },
            end: { line: 238, column: 225, offset: 7815 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7591 },
        end: { line: 238, column: 225, offset: 7815 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 239, column: 1, offset: 7816 },
        end: { line: 241, column: 4, offset: 7837 }
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
            start: { line: 243, column: 4, offset: 7842 },
            end: { line: 243, column: 16, offset: 7854 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7839 },
        end: { line: 243, column: 16, offset: 7854 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 244, column: 1, offset: 7855 },
            end: { line: 244, column: 260, offset: 8114 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 7855 },
        end: { line: 244, column: 260, offset: 8114 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 246, column: 1, offset: 8116 },
            end: { line: 246, column: 89, offset: 8204 }
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
                start: { line: 246, column: 90, offset: 8205 },
                end: { line: 246, column: 110, offset: 8225 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 89, offset: 8204 },
            end: { line: 246, column: 160, offset: 8275 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 246, column: 160, offset: 8275 },
            end: { line: 246, column: 205, offset: 8320 }
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
                start: { line: 246, column: 206, offset: 8321 },
                end: { line: 246, column: 217, offset: 8332 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 205, offset: 8320 },
            end: { line: 246, column: 315, offset: 8430 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 246, column: 315, offset: 8430 },
            end: { line: 246, column: 345, offset: 8460 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8116 },
        end: { line: 246, column: 345, offset: 8460 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 248, column: 1, offset: 8462 },
            end: { line: 248, column: 33, offset: 8494 }
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
                start: { line: 248, column: 34, offset: 8495 },
                end: { line: 248, column: 49, offset: 8510 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 33, offset: 8494 },
            end: { line: 248, column: 119, offset: 8580 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8462 },
        end: { line: 248, column: 119, offset: 8580 }
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
            start: { line: 250, column: 4, offset: 8585 },
            end: { line: 250, column: 11, offset: 8592 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8582 },
        end: { line: 250, column: 11, offset: 8592 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is distributed under the ',
          position: {
            start: { line: 251, column: 1, offset: 8593 },
            end: { line: 251, column: 33, offset: 8625 }
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
                start: { line: 251, column: 34, offset: 8626 },
                end: { line: 251, column: 47, offset: 8639 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 33, offset: 8625 },
            end: { line: 251, column: 99, offset: 8691 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 251, column: 99, offset: 8691 },
            end: { line: 251, column: 100, offset: 8692 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 8593 },
        end: { line: 251, column: 100, offset: 8692 }
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
            start: { line: 253, column: 4, offset: 8697 },
            end: { line: 253, column: 11, offset: 8704 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8694 },
        end: { line: 253, column: 11, offset: 8704 }
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
                    start: { line: 254, column: 4, offset: 8708 },
                    end: { line: 254, column: 31, offset: 8735 }
                  }
                }
              ],
              position: {
                start: { line: 254, column: 4, offset: 8708 },
                end: { line: 254, column: 31, offset: 8735 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 2, offset: 8706 },
            end: { line: 254, column: 31, offset: 8735 }
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
                    start: { line: 255, column: 4, offset: 8739 },
                    end: { line: 255, column: 30, offset: 8765 }
                  }
                }
              ],
              position: {
                start: { line: 255, column: 4, offset: 8739 },
                end: { line: 255, column: 30, offset: 8765 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 2, offset: 8737 },
            end: { line: 255, column: 30, offset: 8765 }
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
                    start: { line: 256, column: 4, offset: 8769 },
                    end: { line: 256, column: 31, offset: 8796 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8769 },
                end: { line: 256, column: 31, offset: 8796 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8767 },
            end: { line: 256, column: 31, offset: 8796 }
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
                    start: { line: 257, column: 4, offset: 8800 },
                    end: { line: 257, column: 28, offset: 8824 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8800 },
                end: { line: 257, column: 28, offset: 8824 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8798 },
            end: { line: 257, column: 28, offset: 8824 }
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
                    start: { line: 258, column: 4, offset: 8828 },
                    end: { line: 258, column: 32, offset: 8856 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 8828 },
                end: { line: 258, column: 32, offset: 8856 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8826 },
            end: { line: 258, column: 32, offset: 8856 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 2, offset: 8706 },
        end: { line: 258, column: 32, offset: 8856 }
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
            start: { line: 260, column: 4, offset: 8861 },
            end: { line: 260, column: 8, offset: 8865 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8858 },
        end: { line: 260, column: 8, offset: 8865 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 261, column: 1, offset: 8866 },
            end: { line: 261, column: 70, offset: 8935 }
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
                start: { line: 261, column: 71, offset: 8936 },
                end: { line: 261, column: 95, offset: 8960 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 70, offset: 8935 },
            end: { line: 261, column: 122, offset: 8987 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 261, column: 122, offset: 8987 },
            end: { line: 261, column: 123, offset: 8988 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 8866 },
        end: { line: 261, column: 123, offset: 8988 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 262, column: 1, offset: 8989 }
  }
}