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
          url: 'https://rubico.land/assets/rubico-logo-3-3-300.jpg',
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
          value: 'require Rubico with Node.js ',
          position: {
            start: { line: 43, column: 1, offset: 1498 },
            end: { line: 43, column: 29, offset: 1526 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules',
          children: [
            {
              type: 'text',
              value: 'CommonJS modules',
              position: {
                start: { line: 43, column: 30, offset: 1527 },
                end: { line: 43, column: 46, offset: 1543 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 29, offset: 1526 },
            end: { line: 43, column: 121, offset: 1618 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 43, column: 121, offset: 1618 },
            end: { line: 43, column: 122, offset: 1619 }
          }
        }
      ],
      position: {
        start: { line: 43, column: 1, offset: 1498 },
        end: { line: 43, column: 122, offset: 1619 }
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
        start: { line: 44, column: 1, offset: 1620 },
        end: { line: 62, column: 4, offset: 2067 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico in the browser:',
          position: {
            start: { line: 64, column: 1, offset: 2069 },
            end: { line: 64, column: 30, offset: 2098 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2069 },
        end: { line: 64, column: 30, offset: 2098 }
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
        start: { line: 65, column: 1, offset: 2099 },
        end: { line: 80, column: 4, offset: 2736 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import Rubico with Node.js ',
          position: {
            start: { line: 82, column: 1, offset: 2738 },
            end: { line: 82, column: 28, offset: 2765 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://nodejs.org/api/esm.html',
          children: [
            {
              type: 'text',
              value: 'ECMAScript modules',
              position: {
                start: { line: 82, column: 29, offset: 2766 },
                end: { line: 82, column: 47, offset: 2784 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 28, offset: 2765 },
            end: { line: 82, column: 81, offset: 2818 }
          }
        },
        {
          type: 'text',
          value: ':',
          position: {
            start: { line: 82, column: 81, offset: 2818 },
            end: { line: 82, column: 82, offset: 2819 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 2738 },
        end: { line: 82, column: 82, offset: 2819 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// import rubico core globally\n' +
        'import "rubico/global.mjs"\n' +
        '\n' +
        '// import rubico core as rubico\n' +
        'import rubico from "rubico"\n' +
        '\n' +
        '// import an operator from rubico core\n' +
        'import pipe from "rubico/pipe.mjs"\n' +
        '\n' +
        '// import rubico/x as x\n' +
        'import x from "rubico/x/index.mjs"\n' +
        '\n' +
        '// import an operator from rubico/x\n' +
        'import defaultsDeep from "rubico/x/defaultsDeep.mjs"\n' +
        '\n' +
        "// import rubico's Transducer module\n" +
        'import Transducer from "rubico/Transducer.mjs"',
      position: {
        start: { line: 83, column: 1, offset: 2820 },
        end: { line: 101, column: 4, offset: 3266 }
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
            start: { line: 103, column: 4, offset: 3271 },
            end: { line: 103, column: 14, offset: 3281 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 3268 },
        end: { line: 103, column: 14, offset: 3281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author:',
          position: {
            start: { line: 105, column: 1, offset: 3283 },
            end: { line: 105, column: 24, offset: 3306 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 3283 },
        end: { line: 105, column: 24, offset: 3306 }
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
                start: { line: 106, column: 3, offset: 3309 },
                end: { line: 106, column: 463, offset: 3769 }
              }
            }
          ],
          position: {
            start: { line: 106, column: 3, offset: 3309 },
            end: { line: 106, column: 463, offset: 3769 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3307 },
        end: { line: 106, column: 463, offset: 3769 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous functional programming is founded on the following principles:',
          position: {
            start: { line: 108, column: 1, offset: 3771 },
            end: { line: 108, column: 78, offset: 3848 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3771 },
        end: { line: 108, column: 78, offset: 3848 }
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
                  value: 'Asynchronous code should be simple.',
                  position: {
                    start: { line: 109, column: 4, offset: 3852 },
                    end: { line: 109, column: 39, offset: 3887 }
                  }
                }
              ],
              position: {
                start: { line: 109, column: 4, offset: 3852 },
                end: { line: 109, column: 39, offset: 3887 }
              }
            }
          ],
          position: {
            start: { line: 109, column: 2, offset: 3850 },
            end: { line: 109, column: 39, offset: 3887 }
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
                  value: 'Functional style should not care about async.',
                  position: {
                    start: { line: 110, column: 4, offset: 3891 },
                    end: { line: 110, column: 49, offset: 3936 }
                  }
                }
              ],
              position: {
                start: { line: 110, column: 4, offset: 3891 },
                end: { line: 110, column: 49, offset: 3936 }
              }
            }
          ],
          position: {
            start: { line: 110, column: 2, offset: 3889 },
            end: { line: 110, column: 49, offset: 3936 }
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
                  value: 'Functional transformations should be composable, performant, and simple to express.',
                  position: {
                    start: { line: 111, column: 4, offset: 3940 },
                    end: { line: 111, column: 87, offset: 4023 }
                  }
                }
              ],
              position: {
                start: { line: 111, column: 4, offset: 3940 },
                end: { line: 111, column: 87, offset: 4023 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 2, offset: 3938 },
            end: { line: 111, column: 87, offset: 4023 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 2, offset: 3850 },
        end: { line: 111, column: 87, offset: 4023 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 113, column: 1, offset: 4025 },
            end: { line: 113, column: 145, offset: 4169 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 4025 },
        end: { line: 113, column: 145, offset: 4169 }
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
            start: { line: 115, column: 4, offset: 4174 },
            end: { line: 115, column: 16, offset: 4186 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 4171 },
        end: { line: 115, column: 16, offset: 4186 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is a library for [A]synchronous Functional Programming in JavaScript. The library supports a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 117, column: 1, offset: 4188 },
            end: { line: 117, column: 169, offset: 4356 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 4188 },
        end: { line: 117, column: 169, offset: 4356 }
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
        start: { line: 119, column: 1, offset: 4358 },
        end: { line: 153, column: 4, offset: 4853 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, any function may be asynchronous and return a promise, and arguments may be promises as well. If a promise is provided to a Rubico operator in argument position, the Rubico operator will resolve the promise.',
          position: {
            start: { line: 155, column: 1, offset: 4855 },
            end: { line: 155, column: 252, offset: 5106 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 4855 },
        end: { line: 155, column: 252, offset: 5106 }
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
        start: { line: 157, column: 1, offset: 5108 },
        end: { line: 169, column: 4, offset: 5422 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All Rubico operators support both immediate and lazy interfaces. The immediate interface takes all required arguments and executes at once, while the lazy interface takes only the setup arguments and returns a function that only expects the data arguments. This dual interface supports a natural and composable code style.',
          position: {
            start: { line: 171, column: 1, offset: 5424 },
            end: { line: 171, column: 323, offset: 5746 }
          }
        }
      ],
      position: {
        start: { line: 171, column: 1, offset: 5424 },
        end: { line: 171, column: 323, offset: 5746 }
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
        start: { line: 173, column: 1, offset: 5748 },
        end: { line: 185, column: 4, offset: 6041 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The Rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 187, column: 1, offset: 6043 },
            end: { line: 187, column: 182, offset: 6224 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 187, column: 182, offset: 6224 },
            end: { line: 187, column: 187, offset: 6229 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 187, column: 187, offset: 6229 },
            end: { line: 187, column: 219, offset: 6261 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 187, column: 219, offset: 6261 },
            end: { line: 187, column: 224, offset: 6266 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 187, column: 224, offset: 6266 },
            end: { line: 187, column: 240, offset: 6282 }
          }
        }
      ],
      position: {
        start: { line: 187, column: 1, offset: 6043 },
        end: { line: 187, column: 240, offset: 6282 }
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
        start: { line: 189, column: 1, offset: 6284 },
        end: { line: 230, column: 4, offset: 7250 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico offers transducers via the ',
          position: {
            start: { line: 232, column: 1, offset: 7252 },
            end: { line: 232, column: 35, offset: 7286 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 232, column: 35, offset: 7286 },
            end: { line: 232, column: 47, offset: 7298 }
          }
        },
        {
          type: 'text',
          value: " module, which can be used with Rubico's ",
          position: {
            start: { line: 232, column: 47, offset: 7298 },
            end: { line: 232, column: 88, offset: 7339 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 232, column: 88, offset: 7339 },
            end: { line: 232, column: 99, offset: 7350 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 232, column: 99, offset: 7350 },
            end: { line: 232, column: 104, offset: 7355 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 232, column: 104, offset: 7355 },
            end: { line: 232, column: 113, offset: 7364 }
          }
        },
        {
          type: 'text',
          value: ' operators. Use ',
          position: {
            start: { line: 232, column: 113, offset: 7364 },
            end: { line: 232, column: 129, offset: 7380 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 232, column: 129, offset: 7380 },
            end: { line: 232, column: 138, offset: 7389 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 232, column: 138, offset: 7389 },
            end: { line: 232, column: 191, offset: 7442 }
          }
        }
      ],
      position: {
        start: { line: 232, column: 1, offset: 7252 },
        end: { line: 232, column: 191, offset: 7442 }
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
        start: { line: 234, column: 1, offset: 7444 },
        end: { line: 255, column: 4, offset: 7794 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "For advanced asynchronous use cases, some of Rubico's operators have property operators that support varied asynchronous behavior, e.g.",
          position: {
            start: { line: 257, column: 1, offset: 7796 },
            end: { line: 257, column: 136, offset: 7931 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 7796 },
        end: { line: 257, column: 136, offset: 7931 }
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
                    start: { line: 258, column: 4, offset: 7935 },
                    end: { line: 258, column: 9, offset: 7940 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently',
                  position: {
                    start: { line: 258, column: 9, offset: 7940 },
                    end: { line: 258, column: 50, offset: 7981 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 7935 },
                end: { line: 258, column: 50, offset: 7981 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 7933 },
            end: { line: 258, column: 50, offset: 7981 }
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
                    start: { line: 259, column: 4, offset: 7985 },
                    end: { line: 259, column: 14, offset: 7995 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 259, column: 14, offset: 7995 },
                    end: { line: 259, column: 80, offset: 8061 }
                  }
                }
              ],
              position: {
                start: { line: 259, column: 4, offset: 7985 },
                end: { line: 259, column: 80, offset: 8061 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 2, offset: 7983 },
            end: { line: 259, column: 80, offset: 8061 }
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
                    start: { line: 260, column: 4, offset: 8065 },
                    end: { line: 260, column: 16, offset: 8077 }
                  }
                },
                {
                  type: 'text',
                  value: ' - applies a mapper function serially',
                  position: {
                    start: { line: 260, column: 16, offset: 8077 },
                    end: { line: 260, column: 53, offset: 8114 }
                  }
                }
              ],
              position: {
                start: { line: 260, column: 4, offset: 8065 },
                end: { line: 260, column: 53, offset: 8114 }
              }
            }
          ],
          position: {
            start: { line: 260, column: 2, offset: 8063 },
            end: { line: 260, column: 53, offset: 8114 }
          }
        }
      ],
      position: {
        start: { line: 258, column: 2, offset: 7933 },
        end: { line: 260, column: 53, offset: 8114 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 262, column: 1, offset: 8116 },
            end: { line: 262, column: 60, offset: 8175 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 262, column: 60, offset: 8175 },
            end: { line: 262, column: 70, offset: 8185 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 262, column: 70, offset: 8185 },
            end: { line: 262, column: 111, offset: 8226 }
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
                start: { line: 262, column: 112, offset: 8227 },
                end: { line: 262, column: 128, offset: 8243 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 111, offset: 8226 },
            end: { line: 262, column: 155, offset: 8270 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 262, column: 155, offset: 8270 },
            end: { line: 262, column: 156, offset: 8271 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8116 },
        end: { line: 262, column: 156, offset: 8271 }
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
            start: { line: 264, column: 4, offset: 8276 },
            end: { line: 264, column: 14, offset: 8286 }
          }
        }
      ],
      position: {
        start: { line: 264, column: 1, offset: 8273 },
        end: { line: 264, column: 14, offset: 8286 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 265, column: 1, offset: 8287 },
            end: { line: 265, column: 55, offset: 8341 }
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
                start: { line: 265, column: 56, offset: 8342 },
                end: { line: 265, column: 72, offset: 8358 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 55, offset: 8341 },
            end: { line: 265, column: 143, offset: 8429 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 265, column: 143, offset: 8429 },
            end: { line: 265, column: 225, offset: 8511 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 8287 },
        end: { line: 265, column: 225, offset: 8511 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 266, column: 1, offset: 8512 },
        end: { line: 268, column: 4, offset: 8533 }
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
            start: { line: 270, column: 4, offset: 8538 },
            end: { line: 270, column: 16, offset: 8550 }
          }
        }
      ],
      position: {
        start: { line: 270, column: 1, offset: 8535 },
        end: { line: 270, column: 16, offset: 8550 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, please create a pull request.',
          position: {
            start: { line: 271, column: 1, offset: 8551 },
            end: { line: 271, column: 260, offset: 8810 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 8551 },
        end: { line: 271, column: 260, offset: 8810 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 273, column: 1, offset: 8812 },
            end: { line: 273, column: 89, offset: 8900 }
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
                start: { line: 273, column: 90, offset: 8901 },
                end: { line: 273, column: 110, offset: 8921 }
              }
            }
          ],
          position: {
            start: { line: 273, column: 89, offset: 8900 },
            end: { line: 273, column: 160, offset: 8971 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 273, column: 160, offset: 8971 },
            end: { line: 273, column: 205, offset: 9016 }
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
                start: { line: 273, column: 206, offset: 9017 },
                end: { line: 273, column: 217, offset: 9028 }
              }
            }
          ],
          position: {
            start: { line: 273, column: 205, offset: 9016 },
            end: { line: 273, column: 315, offset: 9126 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 273, column: 315, offset: 9126 },
            end: { line: 273, column: 345, offset: 9156 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 8812 },
        end: { line: 273, column: 345, offset: 9156 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 275, column: 1, offset: 9158 },
            end: { line: 275, column: 33, offset: 9190 }
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
                start: { line: 275, column: 34, offset: 9191 },
                end: { line: 275, column: 49, offset: 9206 }
              }
            }
          ],
          position: {
            start: { line: 275, column: 33, offset: 9190 },
            end: { line: 275, column: 119, offset: 9276 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 9158 },
        end: { line: 275, column: 119, offset: 9276 }
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
            start: { line: 277, column: 4, offset: 9281 },
            end: { line: 277, column: 11, offset: 9288 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9278 },
        end: { line: 277, column: 11, offset: 9288 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Rubico is distributed under the ',
          position: {
            start: { line: 278, column: 1, offset: 9289 },
            end: { line: 278, column: 33, offset: 9321 }
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
                start: { line: 278, column: 34, offset: 9322 },
                end: { line: 278, column: 47, offset: 9335 }
              }
            }
          ],
          position: {
            start: { line: 278, column: 33, offset: 9321 },
            end: { line: 278, column: 99, offset: 9387 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 278, column: 99, offset: 9387 },
            end: { line: 278, column: 100, offset: 9388 }
          }
        }
      ],
      position: {
        start: { line: 278, column: 1, offset: 9289 },
        end: { line: 278, column: 100, offset: 9388 }
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
            start: { line: 280, column: 4, offset: 9393 },
            end: { line: 280, column: 11, offset: 9400 }
          }
        }
      ],
      position: {
        start: { line: 280, column: 1, offset: 9390 },
        end: { line: 280, column: 11, offset: 9400 }
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
                    start: { line: 281, column: 4, offset: 9404 },
                    end: { line: 281, column: 31, offset: 9431 }
                  }
                }
              ],
              position: {
                start: { line: 281, column: 4, offset: 9404 },
                end: { line: 281, column: 31, offset: 9431 }
              }
            }
          ],
          position: {
            start: { line: 281, column: 2, offset: 9402 },
            end: { line: 281, column: 31, offset: 9431 }
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
                    start: { line: 282, column: 4, offset: 9435 },
                    end: { line: 282, column: 30, offset: 9461 }
                  }
                }
              ],
              position: {
                start: { line: 282, column: 4, offset: 9435 },
                end: { line: 282, column: 30, offset: 9461 }
              }
            }
          ],
          position: {
            start: { line: 282, column: 2, offset: 9433 },
            end: { line: 282, column: 30, offset: 9461 }
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
                    start: { line: 283, column: 4, offset: 9465 },
                    end: { line: 283, column: 31, offset: 9492 }
                  }
                }
              ],
              position: {
                start: { line: 283, column: 4, offset: 9465 },
                end: { line: 283, column: 31, offset: 9492 }
              }
            }
          ],
          position: {
            start: { line: 283, column: 2, offset: 9463 },
            end: { line: 283, column: 31, offset: 9492 }
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
                    start: { line: 284, column: 4, offset: 9496 },
                    end: { line: 284, column: 28, offset: 9520 }
                  }
                }
              ],
              position: {
                start: { line: 284, column: 4, offset: 9496 },
                end: { line: 284, column: 28, offset: 9520 }
              }
            }
          ],
          position: {
            start: { line: 284, column: 2, offset: 9494 },
            end: { line: 284, column: 28, offset: 9520 }
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
                    start: { line: 285, column: 4, offset: 9524 },
                    end: { line: 285, column: 32, offset: 9552 }
                  }
                }
              ],
              position: {
                start: { line: 285, column: 4, offset: 9524 },
                end: { line: 285, column: 32, offset: 9552 }
              }
            }
          ],
          position: {
            start: { line: 285, column: 2, offset: 9522 },
            end: { line: 285, column: 32, offset: 9552 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 2, offset: 9402 },
        end: { line: 285, column: 32, offset: 9552 }
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
            start: { line: 287, column: 4, offset: 9557 },
            end: { line: 287, column: 8, offset: 9561 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 9554 },
        end: { line: 287, column: 8, offset: 9561 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Learn more about Rubico and [A]synchronous Functional Programming at ',
          position: {
            start: { line: 288, column: 1, offset: 9562 },
            end: { line: 288, column: 70, offset: 9631 }
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
                start: { line: 288, column: 71, offset: 9632 },
                end: { line: 288, column: 95, offset: 9656 }
              }
            }
          ],
          position: {
            start: { line: 288, column: 70, offset: 9631 },
            end: { line: 288, column: 122, offset: 9683 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 288, column: 122, offset: 9683 },
            end: { line: 288, column: 123, offset: 9684 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 1, offset: 9562 },
        end: { line: 288, column: 123, offset: 9684 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 289, column: 1, offset: 9685 }
  }
}