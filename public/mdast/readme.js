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
          url: 'https://rubico.land/assets/rubico-logo-3-2-300.jpg',
          alt: 'rubico',
          position: {
            start: { line: 2, column: 1, offset: 33 },
            end: { line: 2, column: 62, offset: 94 }
          }
        }
      ],
      position: {
        start: { line: 2, column: 1, offset: 33 },
        end: { line: 2, column: 62, offset: 94 }
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
                start: { line: 3, column: 3, offset: 97 },
                end: { line: 3, column: 63, offset: 157 }
              }
            }
          ],
          position: {
            start: { line: 3, column: 3, offset: 97 },
            end: { line: 3, column: 63, offset: 157 }
          }
        }
      ],
      position: {
        start: { line: 3, column: 1, offset: 95 },
        end: { line: 3, column: 63, offset: 157 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Source code: ',
          position: {
            start: { line: 5, column: 1, offset: 159 },
            end: { line: 5, column: 14, offset: 172 }
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
                start: { line: 5, column: 15, offset: 173 },
                end: { line: 5, column: 21, offset: 179 }
              }
            }
          ],
          position: {
            start: { line: 5, column: 14, offset: 172 },
            end: { line: 5, column: 63, offset: 221 }
          }
        },
        {
          type: 'text',
          value: ' |\nLicense: ',
          position: {
            start: { line: 5, column: 63, offset: 221 },
            end: { line: 6, column: 10, offset: 233 }
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
                start: { line: 6, column: 11, offset: 234 },
                end: { line: 6, column: 16, offset: 239 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 10, offset: 233 },
            end: { line: 6, column: 68, offset: 291 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 159 },
        end: { line: 6, column: 68, offset: 291 }
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
            start: { line: 8, column: 1, offset: 293 },
            end: { line: 8, column: 88, offset: 380 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 8, column: 88, offset: 380 },
            end: { line: 9, column: 1, offset: 381 }
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
                start: { line: 9, column: 2, offset: 382 },
                end: { line: 9, column: 86, offset: 466 }
              }
            }
          ],
          position: {
            start: { line: 9, column: 1, offset: 381 },
            end: { line: 9, column: 131, offset: 511 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 9, column: 131, offset: 511 },
            end: { line: 10, column: 1, offset: 512 }
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
                start: { line: 10, column: 2, offset: 513 },
                end: { line: 10, column: 68, offset: 579 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 1, offset: 512 },
            end: { line: 10, column: 107, offset: 618 }
          }
        }
      ],
      position: {
        start: { line: 8, column: 1, offset: 293 },
        end: { line: 10, column: 107, offset: 618 }
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
            start: { line: 12, column: 4, offset: 623 },
            end: { line: 12, column: 41, offset: 660 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 620 },
        end: { line: 12, column: 41, offset: 660 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A program is a tree of synchronous or asynchronous functions.',
          position: {
            start: { line: 14, column: 1, offset: 662 },
            end: { line: 14, column: 62, offset: 723 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 662 },
        end: { line: 14, column: 62, offset: 723 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A program can be a combination of programs from different paradigms.',
          position: {
            start: { line: 16, column: 1, offset: 725 },
            end: { line: 16, column: 69, offset: 793 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 725 },
        end: { line: 16, column: 69, offset: 793 }
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
        'pipe(\n' +
        '  numbers, \n' +
        '  filter(isOdd),\n' +
        '  map(asyncSquare),\n' +
        '  console.log,\n' +
        ')',
      position: {
        start: { line: 18, column: 1, offset: 795 },
        end: { line: 33, column: 4, offset: 1058 }
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
            start: { line: 35, column: 4, offset: 1063 },
            end: { line: 35, column: 16, offset: 1075 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 1060 },
        end: { line: 35, column: 16, offset: 1075 }
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
                start: { line: 36, column: 2, offset: 1077 },
                end: { line: 36, column: 12, offset: 1087 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 1, offset: 1076 },
            end: { line: 36, column: 59, offset: 1134 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 36, column: 59, offset: 1134 },
            end: { line: 36, column: 61, offset: 1136 }
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
                start: { line: 36, column: 62, offset: 1137 },
                end: { line: 36, column: 90, offset: 1165 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 61, offset: 1136 },
            end: { line: 36, column: 147, offset: 1222 }
          }
        },
        {
          type: 'text',
          value: ') ',
          position: {
            start: { line: 36, column: 147, offset: 1222 },
            end: { line: 36, column: 149, offset: 1224 }
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
                start: { line: 36, column: 150, offset: 1225 },
                end: { line: 36, column: 167, offset: 1242 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 149, offset: 1224 },
            end: { line: 36, column: 224, offset: 1299 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 36, column: 224, offset: 1299 },
            end: { line: 36, column: 226, offset: 1301 }
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
                start: { line: 36, column: 227, offset: 1302 },
                end: { line: 36, column: 254, offset: 1329 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 226, offset: 1301 },
            end: { line: 36, column: 315, offset: 1390 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 36, column: 315, offset: 1390 },
            end: { line: 36, column: 316, offset: 1391 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1076 },
        end: { line: 36, column: 316, offset: 1391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 38, column: 1, offset: 1393 },
            end: { line: 38, column: 6, offset: 1398 }
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
                start: { line: 38, column: 7, offset: 1399 },
                end: { line: 38, column: 10, offset: 1402 }
              }
            }
          ],
          position: {
            start: { line: 38, column: 6, offset: 1398 },
            end: { line: 38, column: 78, offset: 1470 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 38, column: 78, offset: 1470 },
            end: { line: 38, column: 79, offset: 1471 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1393 },
        end: { line: 38, column: 79, offset: 1471 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 39, column: 1, offset: 1472 },
        end: { line: 41, column: 4, offset: 1496 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require Rubico in ',
          position: {
            start: { line: 44, column: 1, offset: 1499 },
            end: { line: 44, column: 19, offset: 1517 }
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
                start: { line: 44, column: 20, offset: 1518 },
                end: { line: 44, column: 28, offset: 1526 }
              }
            }
          ],
          position: {
            start: { line: 44, column: 19, offset: 1517 },
            end: { line: 44, column: 103, offset: 1601 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 44, column: 103, offset: 1601 },
            end: { line: 44, column: 104, offset: 1602 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1499 },
        end: { line: 44, column: 104, offset: 1602 }
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
        start: { line: 45, column: 1, offset: 1603 },
        end: { line: 63, column: 4, offset: 2050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 66, column: 1, offset: 2053 },
            end: { line: 66, column: 30, offset: 2082 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2053 },
        end: { line: 66, column: 30, offset: 2082 }
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
        start: { line: 67, column: 1, offset: 2083 },
        end: { line: 82, column: 4, offset: 2720 }
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
            start: { line: 84, column: 4, offset: 2725 },
            end: { line: 84, column: 14, offset: 2735 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 1, offset: 2722 },
        end: { line: 84, column: 14, offset: 2735 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author:',
          position: {
            start: { line: 86, column: 1, offset: 2737 },
            end: { line: 86, column: 24, offset: 2760 }
          }
        }
      ],
      position: {
        start: { line: 86, column: 1, offset: 2737 },
        end: { line: 86, column: 24, offset: 2760 }
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
                start: { line: 87, column: 3, offset: 2763 },
                end: { line: 87, column: 463, offset: 3223 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 3, offset: 2763 },
            end: { line: 87, column: 463, offset: 3223 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 2761 },
        end: { line: 87, column: 463, offset: 3223 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is founded on the following principles:',
          position: {
            start: { line: 89, column: 1, offset: 3225 },
            end: { line: 89, column: 47, offset: 3271 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3225 },
        end: { line: 89, column: 47, offset: 3271 }
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
                    start: { line: 90, column: 4, offset: 3275 },
                    end: { line: 90, column: 38, offset: 3309 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 3275 },
                end: { line: 90, column: 38, offset: 3309 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 3273 },
            end: { line: 90, column: 38, offset: 3309 }
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
                    start: { line: 91, column: 4, offset: 3313 },
                    end: { line: 91, column: 48, offset: 3357 }
                  }
                }
              ],
              position: {
                start: { line: 91, column: 4, offset: 3313 },
                end: { line: 91, column: 48, offset: 3357 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 2, offset: 3311 },
            end: { line: 91, column: 48, offset: 3357 }
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
                    start: { line: 92, column: 4, offset: 3361 },
                    end: { line: 92, column: 86, offset: 3443 }
                  }
                }
              ],
              position: {
                start: { line: 92, column: 4, offset: 3361 },
                end: { line: 92, column: 86, offset: 3443 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 2, offset: 3359 },
            end: { line: 92, column: 86, offset: 3443 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 2, offset: 3273 },
        end: { line: 92, column: 86, offset: 3443 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 94, column: 1, offset: 3445 },
            end: { line: 94, column: 145, offset: 3589 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 3445 },
        end: { line: 94, column: 145, offset: 3589 }
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
            start: { line: 96, column: 4, offset: 3594 },
            end: { line: 96, column: 16, offset: 3606 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3591 },
        end: { line: 96, column: 16, offset: 3606 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 98, column: 1, offset: 3608 },
            end: { line: 98, column: 169, offset: 3776 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 3608 },
        end: { line: 98, column: 169, offset: 3776 }
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
        start: { line: 100, column: 1, offset: 3778 },
        end: { line: 134, column: 4, offset: 4273 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 136, column: 1, offset: 4275 },
            end: { line: 136, column: 252, offset: 4526 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4275 },
        end: { line: 136, column: 252, offset: 4526 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const helloPromise = Promise.resolve('hello')\n" +
        '\n' +
        'pipe(\n' +
        "  helloPromise, // helloPromise is resolved for 'hello'\n" +
        '\n' +
        '  async greeting => `${greeting} world`,\n' +
        '  // the Promise returned from the async function is resolved\n' +
        '  // and the resolved value is passed to console.log\n' +
        '\n' +
        '  console.log,\n' +
        ')',
      position: {
        start: { line: 138, column: 1, offset: 4528 },
        end: { line: 150, column: 4, offset: 4842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both immediate and lazy interfaces. The immediate interface takes all required arguments and executes at once, while the lazy interface takes only the setup arguments and returns a function that only expects the data arguments. This dual interface supports a natural and composable code style.',
          position: {
            start: { line: 152, column: 1, offset: 4844 },
            end: { line: 152, column: 323, offset: 5166 }
          }
        }
      ],
      position: {
        start: { line: 152, column: 1, offset: 4844 },
        end: { line: 152, column: 323, offset: 5166 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myObj = { a: 1, b: 2, c: 3 }\n' +
        '\n' +
        '// the first use of map is immediate\n' +
        'const myDuplicatedSquaredObject = map(myObj, pipe(\n' +
        '  number => [number, number],\n' +
        '\n' +
        '  // the second use of map is lazy\n' +
        '  map(number => number ** 2),\n' +
        '))\n' +
        '\n' +
        'console.log(myDuplicatedSquaredObject)',
      position: {
        start: { line: 154, column: 1, offset: 5168 },
        end: { line: 166, column: 4, offset: 5461 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 168, column: 1, offset: 5463 },
            end: { line: 168, column: 182, offset: 5644 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 168, column: 182, offset: 5644 },
            end: { line: 168, column: 187, offset: 5649 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 168, column: 187, offset: 5649 },
            end: { line: 168, column: 219, offset: 5681 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 168, column: 219, offset: 5681 },
            end: { line: 168, column: 224, offset: 5686 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 168, column: 224, offset: 5686 },
            end: { line: 168, column: 240, offset: 5702 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 5463 },
        end: { line: 168, column: 240, offset: 5702 }
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
        '  map(pipe(\n' +
        '    toTodosUrl,\n' +
        '    fetch,\n' +
        '    response => response.json(),\n' +
        '\n' +
        '    tap(console.log),\n' +
        '  )),\n' +
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
        start: { line: 170, column: 1, offset: 5704 },
        end: { line: 211, column: 4, offset: 6670 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 213, column: 1, offset: 6672 },
            end: { line: 213, column: 35, offset: 6706 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 213, column: 35, offset: 6706 },
            end: { line: 213, column: 47, offset: 6718 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 213, column: 47, offset: 6718 },
            end: { line: 213, column: 88, offset: 6759 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 213, column: 88, offset: 6759 },
            end: { line: 213, column: 99, offset: 6770 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 213, column: 99, offset: 6770 },
            end: { line: 213, column: 104, offset: 6775 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 213, column: 104, offset: 6775 },
            end: { line: 213, column: 113, offset: 6784 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 213, column: 113, offset: 6784 },
            end: { line: 213, column: 129, offset: 6800 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 213, column: 129, offset: 6800 },
            end: { line: 213, column: 138, offset: 6809 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 213, column: 138, offset: 6809 },
            end: { line: 213, column: 191, offset: 6862 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 6672 },
        end: { line: 213, column: 191, offset: 6862 }
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
        'pipe(\n' +
        '  generateNumbers(),\n' +
        '  transform(compose(\n' +
        '    Transducer.filter(isOdd),\n' +
        '    Transducer.map(asyncSquare),\n' +
        '  ), []),\n' +
        '  console.log,\n' +
        ')',
      position: {
        start: { line: 215, column: 1, offset: 6864 },
        end: { line: 236, column: 4, offset: 7214 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 238, column: 1, offset: 7216 },
            end: { line: 238, column: 136, offset: 7351 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7216 },
        end: { line: 238, column: 136, offset: 7351 }
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
                    start: { line: 239, column: 4, offset: 7355 },
                    end: { line: 239, column: 9, offset: 7360 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 239, column: 9, offset: 7360 },
                    end: { line: 239, column: 50, offset: 7401 }
                  }
                }
              ],
              position: {
                start: { line: 239, column: 4, offset: 7355 },
                end: { line: 239, column: 50, offset: 7401 }
              }
            }
          ],
          position: {
            start: { line: 239, column: 2, offset: 7353 },
            end: { line: 239, column: 50, offset: 7401 }
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
                    start: { line: 240, column: 4, offset: 7405 },
                    end: { line: 240, column: 14, offset: 7415 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 240, column: 14, offset: 7415 },
                    end: { line: 240, column: 80, offset: 7481 }
                  }
                }
              ],
              position: {
                start: { line: 240, column: 4, offset: 7405 },
                end: { line: 240, column: 80, offset: 7481 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 2, offset: 7403 },
            end: { line: 240, column: 80, offset: 7481 }
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
                    start: { line: 241, column: 4, offset: 7485 },
                    end: { line: 241, column: 16, offset: 7497 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 241, column: 16, offset: 7497 },
                    end: { line: 241, column: 53, offset: 7534 }
                  }
                }
              ],
              position: {
                start: { line: 241, column: 4, offset: 7485 },
                end: { line: 241, column: 53, offset: 7534 }
              }
            }
          ],
          position: {
            start: { line: 241, column: 2, offset: 7483 },
            end: { line: 241, column: 53, offset: 7534 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 2, offset: 7353 },
        end: { line: 241, column: 53, offset: 7534 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 243, column: 1, offset: 7536 },
            end: { line: 243, column: 60, offset: 7595 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 243, column: 60, offset: 7595 },
            end: { line: 243, column: 70, offset: 7605 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 243, column: 70, offset: 7605 },
            end: { line: 243, column: 111, offset: 7646 }
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
                start: { line: 243, column: 112, offset: 7647 },
                end: { line: 243, column: 128, offset: 7663 }
              }
            }
          ],
          position: {
            start: { line: 243, column: 111, offset: 7646 },
            end: { line: 243, column: 155, offset: 7690 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 243, column: 155, offset: 7690 },
            end: { line: 243, column: 156, offset: 7691 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7536 },
        end: { line: 243, column: 156, offset: 7691 }
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
            start: { line: 245, column: 4, offset: 7696 },
            end: { line: 245, column: 14, offset: 7706 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 7693 },
        end: { line: 245, column: 14, offset: 7706 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 246, column: 1, offset: 7707 },
            end: { line: 246, column: 55, offset: 7761 }
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
                start: { line: 246, column: 56, offset: 7762 },
                end: { line: 246, column: 72, offset: 7778 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 55, offset: 7761 },
            end: { line: 246, column: 143, offset: 7849 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 246, column: 143, offset: 7849 },
            end: { line: 246, column: 225, offset: 7931 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 7707 },
        end: { line: 246, column: 225, offset: 7931 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 247, column: 1, offset: 7932 },
        end: { line: 249, column: 4, offset: 7953 }
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
            start: { line: 251, column: 4, offset: 7958 },
            end: { line: 251, column: 16, offset: 7970 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 7955 },
        end: { line: 251, column: 16, offset: 7970 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 252, column: 1, offset: 7971 },
            end: { line: 252, column: 260, offset: 8230 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 7971 },
        end: { line: 252, column: 260, offset: 8230 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 254, column: 1, offset: 8232 },
            end: { line: 254, column: 89, offset: 8320 }
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
                start: { line: 254, column: 90, offset: 8321 },
                end: { line: 254, column: 110, offset: 8341 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 89, offset: 8320 },
            end: { line: 254, column: 160, offset: 8391 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 254, column: 160, offset: 8391 },
            end: { line: 254, column: 205, offset: 8436 }
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
                start: { line: 254, column: 206, offset: 8437 },
                end: { line: 254, column: 217, offset: 8448 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 205, offset: 8436 },
            end: { line: 254, column: 315, offset: 8546 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 254, column: 315, offset: 8546 },
            end: { line: 254, column: 345, offset: 8576 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 1, offset: 8232 },
        end: { line: 254, column: 345, offset: 8576 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 256, column: 1, offset: 8578 },
            end: { line: 256, column: 33, offset: 8610 }
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
                start: { line: 256, column: 34, offset: 8611 },
                end: { line: 256, column: 49, offset: 8626 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 33, offset: 8610 },
            end: { line: 256, column: 119, offset: 8696 }
          }
        }
      ],
      position: {
        start: { line: 256, column: 1, offset: 8578 },
        end: { line: 256, column: 119, offset: 8696 }
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
            start: { line: 258, column: 4, offset: 8701 },
            end: { line: 258, column: 11, offset: 8708 }
          }
        }
      ],
      position: {
        start: { line: 258, column: 1, offset: 8698 },
        end: { line: 258, column: 11, offset: 8708 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is distributed under the ',
          position: {
            start: { line: 259, column: 1, offset: 8709 },
            end: { line: 259, column: 33, offset: 8741 }
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
                start: { line: 259, column: 34, offset: 8742 },
                end: { line: 259, column: 47, offset: 8755 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 33, offset: 8741 },
            end: { line: 259, column: 99, offset: 8807 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 259, column: 99, offset: 8807 },
            end: { line: 259, column: 100, offset: 8808 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 8709 },
        end: { line: 259, column: 100, offset: 8808 }
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
            start: { line: 261, column: 4, offset: 8813 },
            end: { line: 261, column: 11, offset: 8820 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 8810 },
        end: { line: 261, column: 11, offset: 8820 }
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
                    start: { line: 262, column: 4, offset: 8824 },
                    end: { line: 262, column: 31, offset: 8851 }
                  }
                }
              ],
              position: {
                start: { line: 262, column: 4, offset: 8824 },
                end: { line: 262, column: 31, offset: 8851 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 2, offset: 8822 },
            end: { line: 262, column: 31, offset: 8851 }
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
                    start: { line: 263, column: 4, offset: 8855 },
                    end: { line: 263, column: 30, offset: 8881 }
                  }
                }
              ],
              position: {
                start: { line: 263, column: 4, offset: 8855 },
                end: { line: 263, column: 30, offset: 8881 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 2, offset: 8853 },
            end: { line: 263, column: 30, offset: 8881 }
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
                    start: { line: 264, column: 4, offset: 8885 },
                    end: { line: 264, column: 31, offset: 8912 }
                  }
                }
              ],
              position: {
                start: { line: 264, column: 4, offset: 8885 },
                end: { line: 264, column: 31, offset: 8912 }
              }
            }
          ],
          position: {
            start: { line: 264, column: 2, offset: 8883 },
            end: { line: 264, column: 31, offset: 8912 }
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
                    start: { line: 265, column: 4, offset: 8916 },
                    end: { line: 265, column: 28, offset: 8940 }
                  }
                }
              ],
              position: {
                start: { line: 265, column: 4, offset: 8916 },
                end: { line: 265, column: 28, offset: 8940 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 2, offset: 8914 },
            end: { line: 265, column: 28, offset: 8940 }
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
                    start: { line: 266, column: 4, offset: 8944 },
                    end: { line: 266, column: 32, offset: 8972 }
                  }
                }
              ],
              position: {
                start: { line: 266, column: 4, offset: 8944 },
                end: { line: 266, column: 32, offset: 8972 }
              }
            }
          ],
          position: {
            start: { line: 266, column: 2, offset: 8942 },
            end: { line: 266, column: 32, offset: 8972 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 2, offset: 8822 },
        end: { line: 266, column: 32, offset: 8972 }
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
            start: { line: 268, column: 4, offset: 8977 },
            end: { line: 268, column: 8, offset: 8981 }
          }
        }
      ],
      position: {
        start: { line: 268, column: 1, offset: 8974 },
        end: { line: 268, column: 8, offset: 8981 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 269, column: 1, offset: 8982 },
            end: { line: 269, column: 70, offset: 9051 }
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
                start: { line: 269, column: 71, offset: 9052 },
                end: { line: 269, column: 95, offset: 9076 }
              }
            }
          ],
          position: {
            start: { line: 269, column: 70, offset: 9051 },
            end: { line: 269, column: 122, offset: 9103 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 269, column: 122, offset: 9103 },
            end: { line: 269, column: 123, offset: 9104 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 8982 },
        end: { line: 269, column: 123, offset: 9104 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 270, column: 1, offset: 9105 }
  }
}