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
          url: 'https://github.com/a-synchronous/rubico/workflows/Node.js%20CI/badge.svg?branch=master',
          alt: 'Node.js CI',
          position: {
            start: { line: 5, column: 1, offset: 186 },
            end: { line: 5, column: 102, offset: 287 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 5, column: 102, offset: 287 },
            end: { line: 6, column: 1, offset: 288 }
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
                start: { line: 6, column: 2, offset: 289 },
                end: { line: 6, column: 86, offset: 373 }
              }
            }
          ],
          position: {
            start: { line: 6, column: 1, offset: 288 },
            end: { line: 6, column: 131, offset: 418 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 6, column: 131, offset: 418 },
            end: { line: 7, column: 1, offset: 419 }
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
                start: { line: 7, column: 2, offset: 420 },
                end: { line: 7, column: 68, offset: 486 }
              }
            }
          ],
          position: {
            start: { line: 7, column: 1, offset: 419 },
            end: { line: 7, column: 107, offset: 525 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 7, column: 107, offset: 525 },
            end: { line: 8, column: 1, offset: 526 }
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
                start: { line: 8, column: 2, offset: 527 },
                end: { line: 8, column: 68, offset: 593 }
              }
            }
          ],
          position: {
            start: { line: 8, column: 1, offset: 526 },
            end: { line: 8, column: 106, offset: 631 }
          }
        }
      ],
      position: {
        start: { line: 5, column: 1, offset: 186 },
        end: { line: 8, column: 106, offset: 631 }
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
            start: { line: 10, column: 5, offset: 637 },
            end: { line: 10, column: 42, offset: 674 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 633 },
        end: { line: 10, column: 42, offset: 674 }
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
        start: { line: 12, column: 1, offset: 676 },
        end: { line: 26, column: 4, offset: 952 }
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
            start: { line: 28, column: 3, offset: 956 },
            end: { line: 28, column: 15, offset: 968 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 954 },
        end: { line: 28, column: 15, offset: 968 }
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
                start: { line: 29, column: 2, offset: 970 },
                end: { line: 29, column: 12, offset: 980 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 969 },
            end: { line: 29, column: 48, offset: 1016 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 29, column: 48, offset: 1016 },
            end: { line: 29, column: 50, offset: 1018 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://unpkg.com/rubico/dist/rubico.min.js',
          children: [
            {
              type: 'text',
              value: '~6.8 kB minified and gzipped',
              position: {
                start: { line: 29, column: 51, offset: 1019 },
                end: { line: 29, column: 79, offset: 1047 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 50, offset: 1018 },
            end: { line: 29, column: 125, offset: 1093 }
          }
        },
        {
          type: 'text',
          value: ')',
          position: {
            start: { line: 29, column: 125, offset: 1093 },
            end: { line: 29, column: 126, offset: 1094 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 969 },
        end: { line: 29, column: 126, offset: 1094 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'with ',
          position: {
            start: { line: 31, column: 1, offset: 1096 },
            end: { line: 31, column: 6, offset: 1101 }
          }
        },
        {
          type: 'inlineCode',
          value: 'npm',
          position: {
            start: { line: 31, column: 6, offset: 1101 },
            end: { line: 31, column: 11, offset: 1106 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1096 },
        end: { line: 31, column: 11, offset: 1106 }
      }
    },
    {
      type: 'code',
      lang: 'bash',
      meta: null,
      value: 'npm i rubico',
      position: {
        start: { line: 32, column: 1, offset: 1107 },
        end: { line: 34, column: 4, offset: 1131 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'require ',
          position: {
            start: { line: 36, column: 1, offset: 1133 },
            end: { line: 36, column: 9, offset: 1141 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 36, column: 9, offset: 1141 },
            end: { line: 36, column: 17, offset: 1149 }
          }
        },
        {
          type: 'text',
          value: ' in CommonJS.',
          position: {
            start: { line: 36, column: 17, offset: 1149 },
            end: { line: 36, column: 30, offset: 1162 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1133 },
        end: { line: 36, column: 30, offset: 1162 }
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
        start: { line: 37, column: 1, offset: 1163 },
        end: { line: 55, column: 4, offset: 1610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'import ',
          position: {
            start: { line: 57, column: 1, offset: 1612 },
            end: { line: 57, column: 8, offset: 1619 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico',
          position: {
            start: { line: 57, column: 8, offset: 1619 },
            end: { line: 57, column: 16, offset: 1627 }
          }
        },
        {
          type: 'text',
          value: ' in the browser.',
          position: {
            start: { line: 57, column: 16, offset: 1627 },
            end: { line: 57, column: 32, offset: 1643 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 1612 },
        end: { line: 57, column: 32, offset: 1643 }
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
        start: { line: 58, column: 1, offset: 1644 },
        end: { line: 73, column: 4, offset: 2226 }
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
            start: { line: 75, column: 3, offset: 2230 },
            end: { line: 75, column: 13, offset: 2240 }
          }
        }
      ],
      position: {
        start: { line: 75, column: 1, offset: 2228 },
        end: { line: 75, column: 13, offset: 2240 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A note from the author',
          position: {
            start: { line: 77, column: 1, offset: 2242 },
            end: { line: 77, column: 23, offset: 2264 }
          }
        }
      ],
      position: {
        start: { line: 77, column: 1, offset: 2242 },
        end: { line: 77, column: 23, offset: 2264 }
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
                start: { line: 78, column: 3, offset: 2267 },
                end: { line: 78, column: 463, offset: 2727 }
              }
            }
          ],
          position: {
            start: { line: 78, column: 3, offset: 2267 },
            end: { line: 78, column: 463, offset: 2727 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2265 },
        end: { line: 78, column: 463, offset: 2727 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is founded on the following principles:',
          position: {
            start: { line: 80, column: 1, offset: 2729 },
            end: { line: 80, column: 47, offset: 2775 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2729 },
        end: { line: 80, column: 47, offset: 2775 }
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
                    start: { line: 81, column: 4, offset: 2779 },
                    end: { line: 81, column: 38, offset: 2813 }
                  }
                }
              ],
              position: {
                start: { line: 81, column: 4, offset: 2779 },
                end: { line: 81, column: 38, offset: 2813 }
              }
            }
          ],
          position: {
            start: { line: 81, column: 2, offset: 2777 },
            end: { line: 81, column: 38, offset: 2813 }
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
                    start: { line: 82, column: 4, offset: 2817 },
                    end: { line: 82, column: 48, offset: 2861 }
                  }
                }
              ],
              position: {
                start: { line: 82, column: 4, offset: 2817 },
                end: { line: 82, column: 48, offset: 2861 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 2, offset: 2815 },
            end: { line: 82, column: 48, offset: 2861 }
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
                    start: { line: 83, column: 4, offset: 2865 },
                    end: { line: 83, column: 86, offset: 2947 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 2865 },
                end: { line: 83, column: 86, offset: 2947 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 2863 },
            end: { line: 83, column: 86, offset: 2947 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 2, offset: 2777 },
        end: { line: 83, column: 86, offset: 2947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When you import this library, you obtain the freedom that comes from having those three points fulfilled. The result is something you may enjoy.',
          position: {
            start: { line: 85, column: 1, offset: 2949 },
            end: { line: 85, column: 145, offset: 3093 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 1, offset: 2949 },
        end: { line: 85, column: 145, offset: 3093 }
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
            start: { line: 87, column: 3, offset: 3097 },
            end: { line: 87, column: 15, offset: 3109 }
          }
        }
      ],
      position: {
        start: { line: 87, column: 1, offset: 3095 },
        end: { line: 87, column: 15, offset: 3109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is a library for async-enabled functional programming in JavaScript. The library methods support a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 89, column: 1, offset: 3111 },
            end: { line: 89, column: 175, offset: 3285 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3111 },
        end: { line: 89, column: 175, offset: 3285 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const {\n' +
        '  // compose functions\n' +
        '  pipe, compose,\n' +
        '\n' +
        '  // handle effects\n' +
        '  tap, forEach,\n' +
        '\n' +
        '  // control flow\n' +
        '  switchCase,\n' +
        '\n' +
        '  // handle errors\n' +
        '  tryCatch,\n' +
        '\n' +
        '  // handle objects\n' +
        '  all, assign, get, set, pick, omit,\n' +
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
        start: { line: 91, column: 1, offset: 3287 },
        end: { line: 120, column: 4, offset: 3749 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With async-enabled, or [a]synchronous, functional programming, functions provided to the rubico methods may be asynchronous and return a Promise. Any promises in argument position are also resolved before continuing with the operation.',
          position: {
            start: { line: 122, column: 1, offset: 3751 },
            end: { line: 122, column: 236, offset: 3986 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3751 },
        end: { line: 122, column: 236, offset: 3986 }
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
        start: { line: 124, column: 1, offset: 3988 },
        end: { line: 134, column: 4, offset: 4316 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Most methods support both an eager and a tacit API. The eager API takes all required arguments and executes at once, while its tacit API takes only the non-data arguments and executes lazily, returning a function that expects the data arguments. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 136, column: 1, offset: 4318 },
            end: { line: 136, column: 306, offset: 4623 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4318 },
        end: { line: 136, column: 306, offset: 4623 }
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
        '  // the second use of map is tacit\n' +
        '  map(number => number ** 2),\n' +
        ']))\n' +
        '\n' +
        'console.log(myDuplicatedSquaredObject)\n' +
        '// { a: [1, 1], b: [4, 4], c: [9, 9] }',
      position: {
        start: { line: 138, column: 1, offset: 4625 },
        end: { line: 151, column: 4, offset: 4956 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The rubico methods are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 153, column: 1, offset: 4958 },
            end: { line: 153, column: 180, offset: 5137 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 153, column: 180, offset: 5137 },
            end: { line: 153, column: 185, offset: 5142 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 153, column: 185, offset: 5142 },
            end: { line: 153, column: 217, offset: 5174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 153, column: 217, offset: 5174 },
            end: { line: 153, column: 222, offset: 5179 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 153, column: 222, offset: 5179 },
            end: { line: 153, column: 238, offset: 5195 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4958 },
        end: { line: 153, column: 238, offset: 5195 }
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
        start: { line: 155, column: 1, offset: 5197 },
        end: { line: 204, column: 4, offset: 6648 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico offers transducers in its ',
          position: {
            start: { line: 206, column: 1, offset: 6650 },
            end: { line: 206, column: 34, offset: 6683 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 206, column: 34, offset: 6683 },
            end: { line: 206, column: 46, offset: 6695 }
          }
        },
        {
          type: 'text',
          value: ' module. You can consume these transducers with the ',
          position: {
            start: { line: 206, column: 46, offset: 6695 },
            end: { line: 206, column: 98, offset: 6747 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 206, column: 98, offset: 6747 },
            end: { line: 206, column: 109, offset: 6758 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 206, column: 109, offset: 6758 },
            end: { line: 206, column: 114, offset: 6763 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 114, offset: 6763 },
            end: { line: 206, column: 123, offset: 6772 }
          }
        },
        {
          type: 'text',
          value: ' methods. You should use ',
          position: {
            start: { line: 206, column: 123, offset: 6772 },
            end: { line: 206, column: 148, offset: 6797 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 148, offset: 6797 },
            end: { line: 206, column: 157, offset: 6806 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 206, column: 157, offset: 6806 },
            end: { line: 206, column: 163, offset: 6812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 206, column: 163, offset: 6812 },
            end: { line: 206, column: 169, offset: 6818 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 206, column: 169, offset: 6818 },
            end: { line: 206, column: 222, offset: 6871 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6650 },
        end: { line: 206, column: 222, offset: 6871 }
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
        start: { line: 208, column: 1, offset: 6873 },
        end: { line: 228, column: 4, offset: 7239 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the methods have property functions that have different asynchronous behavior, e.g.',
          position: {
            start: { line: 230, column: 1, offset: 7241 },
            end: { line: 230, column: 129, offset: 7369 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7241 },
        end: { line: 230, column: 129, offset: 7369 }
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
                    start: { line: 231, column: 4, offset: 7373 },
                    end: { line: 231, column: 9, offset: 7378 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 231, column: 9, offset: 7378 },
                    end: { line: 231, column: 48, offset: 7417 }
                  }
                }
              ],
              position: {
                start: { line: 231, column: 4, offset: 7373 },
                end: { line: 231, column: 48, offset: 7417 }
              }
            }
          ],
          position: {
            start: { line: 231, column: 2, offset: 7371 },
            end: { line: 231, column: 48, offset: 7417 }
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
                    start: { line: 232, column: 4, offset: 7421 },
                    end: { line: 232, column: 14, offset: 7431 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 232, column: 14, offset: 7431 },
                    end: { line: 232, column: 78, offset: 7495 }
                  }
                }
              ],
              position: {
                start: { line: 232, column: 4, offset: 7421 },
                end: { line: 232, column: 78, offset: 7495 }
              }
            }
          ],
          position: {
            start: { line: 232, column: 2, offset: 7419 },
            end: { line: 232, column: 78, offset: 7495 }
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
                    start: { line: 233, column: 4, offset: 7499 },
                    end: { line: 233, column: 16, offset: 7511 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 233, column: 16, offset: 7511 },
                    end: { line: 233, column: 51, offset: 7546 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7499 },
                end: { line: 233, column: 51, offset: 7546 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7497 },
            end: { line: 233, column: 51, offset: 7546 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 2, offset: 7371 },
        end: { line: 233, column: 51, offset: 7546 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core methods, please visit ',
          position: {
            start: { line: 235, column: 1, offset: 7548 },
            end: { line: 235, column: 58, offset: 7605 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 235, column: 58, offset: 7605 },
            end: { line: 235, column: 68, offset: 7615 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 235, column: 68, offset: 7615 },
            end: { line: 235, column: 109, offset: 7656 }
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
                start: { line: 235, column: 110, offset: 7657 },
                end: { line: 235, column: 126, offset: 7673 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 109, offset: 7656 },
            end: { line: 235, column: 153, offset: 7700 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 235, column: 153, offset: 7700 },
            end: { line: 235, column: 154, offset: 7701 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 7548 },
        end: { line: 235, column: 154, offset: 7701 }
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
            start: { line: 237, column: 3, offset: 7705 },
            end: { line: 237, column: 15, offset: 7717 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7703 },
        end: { line: 237, column: 15, offset: 7717 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, or feel like taking initiative and contributing anything at all, feel free to create a pull request and I will get back to you shortly.',
          position: {
            start: { line: 238, column: 1, offset: 7718 },
            end: { line: 238, column: 366, offset: 8083 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7718 },
        end: { line: 238, column: 366, offset: 8083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 240, column: 1, offset: 8085 },
            end: { line: 240, column: 89, offset: 8173 }
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
                start: { line: 240, column: 90, offset: 8174 },
                end: { line: 240, column: 110, offset: 8194 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 89, offset: 8173 },
            end: { line: 240, column: 160, offset: 8244 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 240, column: 160, offset: 8244 },
            end: { line: 240, column: 205, offset: 8289 }
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
                start: { line: 240, column: 206, offset: 8290 },
                end: { line: 240, column: 217, offset: 8301 }
              }
            }
          ],
          position: {
            start: { line: 240, column: 205, offset: 8289 },
            end: { line: 240, column: 315, offset: 8399 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 240, column: 315, offset: 8399 },
            end: { line: 240, column: 345, offset: 8429 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 8085 },
        end: { line: 240, column: 345, offset: 8429 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 242, column: 1, offset: 8431 },
            end: { line: 242, column: 33, offset: 8463 }
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
                start: { line: 242, column: 34, offset: 8464 },
                end: { line: 242, column: 49, offset: 8479 }
              }
            }
          ],
          position: {
            start: { line: 242, column: 33, offset: 8463 },
            end: { line: 242, column: 68, offset: 8498 }
          }
        }
      ],
      position: {
        start: { line: 242, column: 1, offset: 8431 },
        end: { line: 242, column: 68, offset: 8498 }
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
            start: { line: 244, column: 3, offset: 8502 },
            end: { line: 244, column: 10, offset: 8509 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 8500 },
        end: { line: 244, column: 10, offset: 8509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 245, column: 1, offset: 8510 },
            end: { line: 245, column: 11, offset: 8520 }
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
                start: { line: 245, column: 12, offset: 8521 },
                end: { line: 245, column: 24, offset: 8533 }
              }
            }
          ],
          position: {
            start: { line: 245, column: 11, offset: 8520 },
            end: { line: 245, column: 86, offset: 8595 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 245, column: 86, offset: 8595 },
            end: { line: 245, column: 87, offset: 8596 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 8510 },
        end: { line: 245, column: 87, offset: 8596 }
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
            start: { line: 247, column: 3, offset: 8600 },
            end: { line: 247, column: 10, offset: 8607 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8598 },
        end: { line: 247, column: 10, offset: 8607 }
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
                  value: 'minimum Node.js version: 12',
                  position: {
                    start: { line: 248, column: 4, offset: 8611 },
                    end: { line: 248, column: 31, offset: 8638 }
                  }
                }
              ],
              position: {
                start: { line: 248, column: 4, offset: 8611 },
                end: { line: 248, column: 31, offset: 8638 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 2, offset: 8609 },
            end: { line: 248, column: 31, offset: 8638 }
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
                    start: { line: 249, column: 4, offset: 8642 },
                    end: { line: 249, column: 30, offset: 8668 }
                  }
                }
              ],
              position: {
                start: { line: 249, column: 4, offset: 8642 },
                end: { line: 249, column: 30, offset: 8668 }
              }
            }
          ],
          position: {
            start: { line: 249, column: 2, offset: 8640 },
            end: { line: 249, column: 30, offset: 8668 }
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
                    start: { line: 250, column: 4, offset: 8672 },
                    end: { line: 250, column: 31, offset: 8699 }
                  }
                }
              ],
              position: {
                start: { line: 250, column: 4, offset: 8672 },
                end: { line: 250, column: 31, offset: 8699 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 2, offset: 8670 },
            end: { line: 250, column: 31, offset: 8699 }
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
                    start: { line: 251, column: 4, offset: 8703 },
                    end: { line: 251, column: 28, offset: 8727 }
                  }
                }
              ],
              position: {
                start: { line: 251, column: 4, offset: 8703 },
                end: { line: 251, column: 28, offset: 8727 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 2, offset: 8701 },
            end: { line: 251, column: 28, offset: 8727 }
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
                    start: { line: 252, column: 4, offset: 8731 },
                    end: { line: 252, column: 32, offset: 8759 }
                  }
                }
              ],
              position: {
                start: { line: 252, column: 4, offset: 8731 },
                end: { line: 252, column: 32, offset: 8759 }
              }
            }
          ],
          position: {
            start: { line: 252, column: 2, offset: 8729 },
            end: { line: 252, column: 32, offset: 8759 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 2, offset: 8609 },
        end: { line: 252, column: 32, offset: 8759 }
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
            start: { line: 254, column: 3, offset: 8763 },
            end: { line: 254, column: 20, offset: 8780 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 1, offset: 8761 },
        end: { line: 254, column: 20, offset: 8780 }
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
                start: { line: 255, column: 2, offset: 8782 },
                end: { line: 255, column: 37, offset: 8817 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 1, offset: 8781 },
            end: { line: 255, column: 118, offset: 8898 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 255, column: 118, offset: 8898 },
            end: { line: 256, column: 1, offset: 8899 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 256, column: 1, offset: 8899 },
            end: { line: 256, column: 5, offset: 8903 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 256, column: 5, offset: 8903 },
            end: { line: 257, column: 1, offset: 8904 }
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
                start: { line: 257, column: 2, offset: 8905 },
                end: { line: 257, column: 65, offset: 8968 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 1, offset: 8904 },
            end: { line: 257, column: 158, offset: 9061 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 257, column: 158, offset: 9061 },
            end: { line: 258, column: 1, offset: 9062 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 258, column: 1, offset: 9062 },
            end: { line: 258, column: 5, offset: 9066 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 258, column: 5, offset: 9066 },
            end: { line: 259, column: 1, offset: 9067 }
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
                start: { line: 259, column: 2, offset: 9068 },
                end: { line: 259, column: 80, offset: 9146 }
              }
            }
          ],
          position: {
            start: { line: 259, column: 1, offset: 9067 },
            end: { line: 259, column: 188, offset: 9254 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 259, column: 188, offset: 9254 },
            end: { line: 260, column: 1, offset: 9255 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 260, column: 1, offset: 9255 },
            end: { line: 260, column: 5, offset: 9259 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 260, column: 5, offset: 9259 },
            end: { line: 261, column: 1, offset: 9260 }
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
                start: { line: 261, column: 2, offset: 9261 },
                end: { line: 261, column: 74, offset: 9333 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 1, offset: 9260 },
            end: { line: 261, column: 185, offset: 9444 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 8781 },
        end: { line: 261, column: 185, offset: 9444 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 262, column: 1, offset: 9445 }
  }
}