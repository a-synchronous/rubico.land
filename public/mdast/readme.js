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
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A program is a tree of synchronous or asynchronous functions.',
          position: {
            start: { line: 14, column: 1, offset: 689 },
            end: { line: 14, column: 62, offset: 750 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 689 },
        end: { line: 14, column: 62, offset: 750 }
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
        start: { line: 16, column: 1, offset: 752 },
        end: { line: 30, column: 4, offset: 1014 }
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
            start: { line: 32, column: 4, offset: 1019 },
            end: { line: 32, column: 16, offset: 1031 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1016 },
        end: { line: 32, column: 16, offset: 1031 }
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
                start: { line: 33, column: 2, offset: 1033 },
                end: { line: 33, column: 12, offset: 1043 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1032 },
            end: { line: 33, column: 59, offset: 1090 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 33, column: 59, offset: 1090 },
            end: { line: 33, column: 61, offset: 1092 }
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
                start: { line: 33, column: 62, offset: 1093 },
                end: { line: 33, column: 90, offset: 1121 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 61, offset: 1092 },
            end: { line: 33, column: 147, offset: 1178 }
          }
        },
        {
          type: 'text',
          value: ') ',
          position: {
            start: { line: 33, column: 147, offset: 1178 },
            end: { line: 33, column: 149, offset: 1180 }
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
                start: { line: 33, column: 150, offset: 1181 },
                end: { line: 33, column: 167, offset: 1198 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 149, offset: 1180 },
            end: { line: 33, column: 224, offset: 1255 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 33, column: 224, offset: 1255 },
            end: { line: 33, column: 226, offset: 1257 }
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
                start: { line: 33, column: 227, offset: 1258 },
                end: { line: 33, column: 254, offset: 1285 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 226, offset: 1257 },
            end: { line: 33, column: 315, offset: 1346 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 33, column: 315, offset: 1346 },
            end: { line: 33, column: 316, offset: 1347 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1032 },
        end: { line: 33, column: 316, offset: 1347 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 35, column: 1, offset: 1349 },
            end: { line: 35, column: 6, offset: 1354 }
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
                start: { line: 35, column: 7, offset: 1355 },
                end: { line: 35, column: 10, offset: 1358 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 6, offset: 1354 },
            end: { line: 35, column: 78, offset: 1426 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 35, column: 78, offset: 1426 },
            end: { line: 35, column: 79, offset: 1427 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 1349 },
        end: { line: 35, column: 79, offset: 1427 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 36, column: 1, offset: 1428 },
        end: { line: 38, column: 4, offset: 1452 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 41, column: 1, offset: 1455 },
            end: { line: 41, column: 19, offset: 1473 }
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
                start: { line: 41, column: 20, offset: 1474 },
                end: { line: 41, column: 28, offset: 1482 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 19, offset: 1473 },
            end: { line: 41, column: 103, offset: 1557 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 41, column: 103, offset: 1557 },
            end: { line: 41, column: 104, offset: 1558 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 1, offset: 1455 },
        end: { line: 41, column: 104, offset: 1558 }
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
        start: { line: 42, column: 1, offset: 1559 },
        end: { line: 60, column: 4, offset: 2006 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 63, column: 1, offset: 2009 },
            end: { line: 63, column: 30, offset: 2038 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2009 },
        end: { line: 63, column: 30, offset: 2038 }
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
        start: { line: 64, column: 1, offset: 2039 },
        end: { line: 79, column: 4, offset: 2676 }
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
            start: { line: 81, column: 4, offset: 2681 },
            end: { line: 81, column: 14, offset: 2691 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2678 },
        end: { line: 81, column: 14, offset: 2691 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author:',
          position: {
            start: { line: 83, column: 1, offset: 2693 },
            end: { line: 83, column: 24, offset: 2716 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 2693 },
        end: { line: 83, column: 24, offset: 2716 }
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
                start: { line: 84, column: 3, offset: 2719 },
                end: { line: 84, column: 463, offset: 3179 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 3, offset: 2719 },
            end: { line: 84, column: 463, offset: 3179 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2717 },
        end: { line: 84, column: 463, offset: 3179 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 86, column: 1, offset: 3181 },
            end: { line: 86, column: 47, offset: 3227 }
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 3181 },
        end: { line: 86, column: 47, offset: 3227 }
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
                    start: { line: 87, column: 4, offset: 3231 },
                    end: { line: 87, column: 38, offset: 3265 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 3231 },
                end: { line: 87, column: 38, offset: 3265 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 3229 },
            end: { line: 87, column: 38, offset: 3265 }
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
                    start: { line: 88, column: 4, offset: 3269 },
                    end: { line: 88, column: 48, offset: 3313 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 3269 },
                end: { line: 88, column: 48, offset: 3313 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 3267 },
            end: { line: 88, column: 48, offset: 3313 }
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
                    start: { line: 89, column: 4, offset: 3317 },
                    end: { line: 89, column: 86, offset: 3399 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 3317 },
                end: { line: 89, column: 86, offset: 3399 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 3315 },
            end: { line: 89, column: 86, offset: 3399 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 2, offset: 3229 },
        end: { line: 89, column: 86, offset: 3399 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 91, column: 1, offset: 3401 },
            end: { line: 91, column: 145, offset: 3545 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 3401 },
        end: { line: 91, column: 145, offset: 3545 }
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
            start: { line: 93, column: 4, offset: 3550 },
            end: { line: 93, column: 16, offset: 3562 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 3547 },
        end: { line: 93, column: 16, offset: 3562 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 95, column: 1, offset: 3564 },
            end: { line: 95, column: 169, offset: 3732 }
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 3564 },
        end: { line: 95, column: 169, offset: 3732 }
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
        start: { line: 97, column: 1, offset: 3734 },
        end: { line: 131, column: 4, offset: 4229 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 133, column: 1, offset: 4231 },
            end: { line: 133, column: 252, offset: 4482 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4231 },
        end: { line: 133, column: 252, offset: 4482 }
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
        start: { line: 135, column: 1, offset: 4484 },
        end: { line: 145, column: 4, offset: 4797 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both eager and lazy interfaces. The eager interface takes all required arguments and executes at once, while the lazy interface takes only the setup arguments and returns a function that only expects the data arguments. This dual interface supports a natural and composable code style.',
          position: {
            start: { line: 147, column: 1, offset: 4799 },
            end: { line: 147, column: 315, offset: 5113 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 4799 },
        end: { line: 147, column: 315, offset: 5113 }
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
        start: { line: 149, column: 1, offset: 5115 },
        end: { line: 161, column: 4, offset: 5406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 163, column: 1, offset: 5408 },
            end: { line: 163, column: 182, offset: 5589 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 163, column: 182, offset: 5589 },
            end: { line: 163, column: 187, offset: 5594 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 163, column: 187, offset: 5594 },
            end: { line: 163, column: 219, offset: 5626 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 163, column: 219, offset: 5626 },
            end: { line: 163, column: 224, offset: 5631 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 163, column: 224, offset: 5631 },
            end: { line: 163, column: 240, offset: 5647 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 5408 },
        end: { line: 163, column: 240, offset: 5647 }
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
        start: { line: 165, column: 1, offset: 5649 },
        end: { line: 206, column: 4, offset: 6617 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 208, column: 1, offset: 6619 },
            end: { line: 208, column: 35, offset: 6653 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 208, column: 35, offset: 6653 },
            end: { line: 208, column: 47, offset: 6665 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 208, column: 47, offset: 6665 },
            end: { line: 208, column: 88, offset: 6706 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 208, column: 88, offset: 6706 },
            end: { line: 208, column: 99, offset: 6717 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 208, column: 99, offset: 6717 },
            end: { line: 208, column: 104, offset: 6722 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 104, offset: 6722 },
            end: { line: 208, column: 113, offset: 6731 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 208, column: 113, offset: 6731 },
            end: { line: 208, column: 129, offset: 6747 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 208, column: 129, offset: 6747 },
            end: { line: 208, column: 138, offset: 6756 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 208, column: 138, offset: 6756 },
            end: { line: 208, column: 191, offset: 6809 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 6619 },
        end: { line: 208, column: 191, offset: 6809 }
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
        start: { line: 210, column: 1, offset: 6811 },
        end: { line: 230, column: 4, offset: 7161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 232, column: 1, offset: 7163 },
            end: { line: 232, column: 136, offset: 7298 }
          }
        }
      ],
      position: {
        start: { line: 232, column: 1, offset: 7163 },
        end: { line: 232, column: 136, offset: 7298 }
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
                    start: { line: 233, column: 4, offset: 7302 },
                    end: { line: 233, column: 9, offset: 7307 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 233, column: 9, offset: 7307 },
                    end: { line: 233, column: 50, offset: 7348 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7302 },
                end: { line: 233, column: 50, offset: 7348 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7300 },
            end: { line: 233, column: 50, offset: 7348 }
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
                    start: { line: 234, column: 4, offset: 7352 },
                    end: { line: 234, column: 14, offset: 7362 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 234, column: 14, offset: 7362 },
                    end: { line: 234, column: 80, offset: 7428 }
                  }
                }
              ],
              position: {
                start: { line: 234, column: 4, offset: 7352 },
                end: { line: 234, column: 80, offset: 7428 }
              }
            }
          ],
          position: {
            start: { line: 234, column: 2, offset: 7350 },
            end: { line: 234, column: 80, offset: 7428 }
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
                    start: { line: 235, column: 4, offset: 7432 },
                    end: { line: 235, column: 16, offset: 7444 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 235, column: 16, offset: 7444 },
                    end: { line: 235, column: 53, offset: 7481 }
                  }
                }
              ],
              position: {
                start: { line: 235, column: 4, offset: 7432 },
                end: { line: 235, column: 53, offset: 7481 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 2, offset: 7430 },
            end: { line: 235, column: 53, offset: 7481 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 2, offset: 7300 },
        end: { line: 235, column: 53, offset: 7481 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 237, column: 1, offset: 7483 },
            end: { line: 237, column: 60, offset: 7542 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 237, column: 60, offset: 7542 },
            end: { line: 237, column: 70, offset: 7552 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 237, column: 70, offset: 7552 },
            end: { line: 237, column: 111, offset: 7593 }
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
                start: { line: 237, column: 112, offset: 7594 },
                end: { line: 237, column: 128, offset: 7610 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 111, offset: 7593 },
            end: { line: 237, column: 155, offset: 7637 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 237, column: 155, offset: 7637 },
            end: { line: 237, column: 156, offset: 7638 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7483 },
        end: { line: 237, column: 156, offset: 7638 }
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
            start: { line: 239, column: 4, offset: 7643 },
            end: { line: 239, column: 14, offset: 7653 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 7640 },
        end: { line: 239, column: 14, offset: 7653 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 240, column: 1, offset: 7654 },
            end: { line: 240, column: 55, offset: 7708 }
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
                start: { line: 240, column: 56, offset: 7709 },
                end: { line: 240, column: 72, offset: 7725 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 55, offset: 7708 },
            end: { line: 240, column: 143, offset: 7796 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 240, column: 143, offset: 7796 },
            end: { line: 240, column: 225, offset: 7878 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 7654 },
        end: { line: 240, column: 225, offset: 7878 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 241, column: 1, offset: 7879 },
        end: { line: 243, column: 4, offset: 7900 }
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
            start: { line: 245, column: 4, offset: 7905 },
            end: { line: 245, column: 16, offset: 7917 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 7902 },
        end: { line: 245, column: 16, offset: 7917 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 246, column: 1, offset: 7918 },
            end: { line: 246, column: 260, offset: 8177 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 7918 },
        end: { line: 246, column: 260, offset: 8177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 248, column: 1, offset: 8179 },
            end: { line: 248, column: 89, offset: 8267 }
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
                start: { line: 248, column: 90, offset: 8268 },
                end: { line: 248, column: 110, offset: 8288 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 89, offset: 8267 },
            end: { line: 248, column: 160, offset: 8338 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 248, column: 160, offset: 8338 },
            end: { line: 248, column: 205, offset: 8383 }
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
                start: { line: 248, column: 206, offset: 8384 },
                end: { line: 248, column: 217, offset: 8395 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 205, offset: 8383 },
            end: { line: 248, column: 315, offset: 8493 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 248, column: 315, offset: 8493 },
            end: { line: 248, column: 345, offset: 8523 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8179 },
        end: { line: 248, column: 345, offset: 8523 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 250, column: 1, offset: 8525 },
            end: { line: 250, column: 33, offset: 8557 }
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
                start: { line: 250, column: 34, offset: 8558 },
                end: { line: 250, column: 49, offset: 8573 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 33, offset: 8557 },
            end: { line: 250, column: 119, offset: 8643 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8525 },
        end: { line: 250, column: 119, offset: 8643 }
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
            start: { line: 252, column: 4, offset: 8648 },
            end: { line: 252, column: 11, offset: 8655 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 8645 },
        end: { line: 252, column: 11, offset: 8655 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is distributed under the ',
          position: {
            start: { line: 253, column: 1, offset: 8656 },
            end: { line: 253, column: 33, offset: 8688 }
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
                start: { line: 253, column: 34, offset: 8689 },
                end: { line: 253, column: 47, offset: 8702 }
              }
            }
          ],
          position: {
            start: { line: 253, column: 33, offset: 8688 },
            end: { line: 253, column: 99, offset: 8754 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 253, column: 99, offset: 8754 },
            end: { line: 253, column: 100, offset: 8755 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8656 },
        end: { line: 253, column: 100, offset: 8755 }
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
            start: { line: 255, column: 4, offset: 8760 },
            end: { line: 255, column: 11, offset: 8767 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 8757 },
        end: { line: 255, column: 11, offset: 8767 }
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
                    start: { line: 256, column: 4, offset: 8771 },
                    end: { line: 256, column: 31, offset: 8798 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8771 },
                end: { line: 256, column: 31, offset: 8798 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8769 },
            end: { line: 256, column: 31, offset: 8798 }
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
                    start: { line: 257, column: 4, offset: 8802 },
                    end: { line: 257, column: 30, offset: 8828 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8802 },
                end: { line: 257, column: 30, offset: 8828 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8800 },
            end: { line: 257, column: 30, offset: 8828 }
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
                    start: { line: 258, column: 4, offset: 8832 },
                    end: { line: 258, column: 31, offset: 8859 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 8832 },
                end: { line: 258, column: 31, offset: 8859 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8830 },
            end: { line: 258, column: 31, offset: 8859 }
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
                    start: { line: 259, column: 4, offset: 8863 },
                    end: { line: 259, column: 28, offset: 8887 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 8863 },
                end: { line: 259, column: 28, offset: 8887 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 8861 },
            end: { line: 259, column: 28, offset: 8887 }
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
                    start: { line: 260, column: 4, offset: 8891 },
                    end: { line: 260, column: 32, offset: 8919 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 8891 },
                end: { line: 260, column: 32, offset: 8919 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 8889 },
            end: { line: 260, column: 32, offset: 8919 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 2, offset: 8769 },
        end: { line: 260, column: 32, offset: 8919 }
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
            start: { line: 262, column: 4, offset: 8924 },
            end: { line: 262, column: 8, offset: 8928 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8921 },
        end: { line: 262, column: 8, offset: 8928 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 263, column: 1, offset: 8929 },
            end: { line: 263, column: 70, offset: 8998 }
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
                start: { line: 263, column: 71, offset: 8999 },
                end: { line: 263, column: 95, offset: 9023 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 70, offset: 8998 },
            end: { line: 263, column: 122, offset: 9050 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 263, column: 122, offset: 9050 },
            end: { line: 263, column: 123, offset: 9051 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 8929 },
        end: { line: 263, column: 123, offset: 9051 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 264, column: 1, offset: 9052 }
  }
}