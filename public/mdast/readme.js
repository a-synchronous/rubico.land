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
          value: 'rubico is a library for async-enabled functional programming in JavaScript. The library operators support a simple and composable functional style in asynchronous environments.',
          position: {
            start: { line: 89, column: 1, offset: 3111 },
            end: { line: 89, column: 177, offset: 3287 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3111 },
        end: { line: 89, column: 177, offset: 3287 }
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
        start: { line: 91, column: 1, offset: 3289 },
        end: { line: 120, column: 4, offset: 3742 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With async-enabled, or [a]synchronous, functional programming, functions provided to the rubico operators may be asynchronous and return a Promise. Any promises in argument position are also resolved before continuing with the operation.',
          position: {
            start: { line: 122, column: 1, offset: 3744 },
            end: { line: 122, column: 238, offset: 3981 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 3744 },
        end: { line: 122, column: 238, offset: 3981 }
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
        start: { line: 124, column: 1, offset: 3983 },
        end: { line: 134, column: 4, offset: 4311 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'All rubico operators support both an eager and a lazy API. The eager API takes all required arguments and executes at once, while its lazy API takes only the non-data arguments and executes lazily, returning a function that expects the data arguments. This dual API supports a natural and composable code style.',
          position: {
            start: { line: 136, column: 1, offset: 4313 },
            end: { line: 136, column: 312, offset: 4624 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 4313 },
        end: { line: 136, column: 312, offset: 4624 }
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
        start: { line: 138, column: 1, offset: 4626 },
        end: { line: 151, column: 4, offset: 4956 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The rubico operators are versatile and act on a wide range of vanilla JavaScript types to create declarative, extensible, and async-enabled function compositions. The same operator ',
          position: {
            start: { line: 153, column: 1, offset: 4958 },
            end: { line: 153, column: 182, offset: 5139 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 153, column: 182, offset: 5139 },
            end: { line: 153, column: 187, offset: 5144 }
          }
        },
        {
          type: 'text',
          value: ' can act on an array and also a ',
          position: {
            start: { line: 153, column: 187, offset: 5144 },
            end: { line: 153, column: 219, offset: 5176 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 153, column: 219, offset: 5176 },
            end: { line: 153, column: 224, offset: 5181 }
          }
        },
        {
          type: 'text',
          value: ' data structure.',
          position: {
            start: { line: 153, column: 224, offset: 5181 },
            end: { line: 153, column: 240, offset: 5197 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 4958 },
        end: { line: 153, column: 240, offset: 5197 }
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
        start: { line: 155, column: 1, offset: 5199 },
        end: { line: 204, column: 4, offset: 6650 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico offers transducers in its ',
          position: {
            start: { line: 206, column: 1, offset: 6652 },
            end: { line: 206, column: 34, offset: 6685 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Transducer',
          position: {
            start: { line: 206, column: 34, offset: 6685 },
            end: { line: 206, column: 46, offset: 6697 }
          }
        },
        {
          type: 'text',
          value: ' module. You can consume these transducers with the ',
          position: {
            start: { line: 206, column: 46, offset: 6697 },
            end: { line: 206, column: 98, offset: 6749 }
          }
        },
        {
          type: 'inlineCode',
          value: 'transform',
          position: {
            start: { line: 206, column: 98, offset: 6749 },
            end: { line: 206, column: 109, offset: 6760 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 206, column: 109, offset: 6760 },
            end: { line: 206, column: 114, offset: 6765 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 114, offset: 6765 },
            end: { line: 206, column: 123, offset: 6774 }
          }
        },
        {
          type: 'text',
          value: ' operators. You should use ',
          position: {
            start: { line: 206, column: 123, offset: 6774 },
            end: { line: 206, column: 150, offset: 6801 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 206, column: 150, offset: 6801 },
            end: { line: 206, column: 159, offset: 6810 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 206, column: 159, offset: 6810 },
            end: { line: 206, column: 165, offset: 6816 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 206, column: 165, offset: 6816 },
            end: { line: 206, column: 171, offset: 6822 }
          }
        },
        {
          type: 'text',
          value: ' to chain a left-to-right composition of transducers.',
          position: {
            start: { line: 206, column: 171, offset: 6822 },
            end: { line: 206, column: 224, offset: 6875 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 6652 },
        end: { line: 206, column: 224, offset: 6875 }
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
        start: { line: 208, column: 1, offset: 6877 },
        end: { line: 228, column: 4, offset: 7243 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For advanced asynchronous use cases, some of the operators have property functions that have different asynchronous behavior, e.g.',
          position: {
            start: { line: 230, column: 1, offset: 7245 },
            end: { line: 230, column: 131, offset: 7375 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7245 },
        end: { line: 230, column: 131, offset: 7375 }
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
                    start: { line: 231, column: 4, offset: 7379 },
                    end: { line: 231, column: 9, offset: 7384 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently',
                  position: {
                    start: { line: 231, column: 9, offset: 7384 },
                    end: { line: 231, column: 48, offset: 7423 }
                  }
                }
              ],
              position: {
                start: { line: 231, column: 4, offset: 7379 },
                end: { line: 231, column: 48, offset: 7423 }
              }
            }
          ],
          position: {
            start: { line: 231, column: 2, offset: 7377 },
            end: { line: 231, column: 48, offset: 7423 }
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
                    start: { line: 232, column: 4, offset: 7427 },
                    end: { line: 232, column: 14, offset: 7437 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function concurrently with a concurrency limit',
                  position: {
                    start: { line: 232, column: 14, offset: 7437 },
                    end: { line: 232, column: 78, offset: 7501 }
                  }
                }
              ],
              position: {
                start: { line: 232, column: 4, offset: 7427 },
                end: { line: 232, column: 78, offset: 7501 }
              }
            }
          ],
          position: {
            start: { line: 232, column: 2, offset: 7425 },
            end: { line: 232, column: 78, offset: 7501 }
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
                    start: { line: 233, column: 4, offset: 7505 },
                    end: { line: 233, column: 16, offset: 7517 }
                  }
                },
                {
                  type: 'text',
                  value: ' - apply a mapper function serially',
                  position: {
                    start: { line: 233, column: 16, offset: 7517 },
                    end: { line: 233, column: 51, offset: 7552 }
                  }
                }
              ],
              position: {
                start: { line: 233, column: 4, offset: 7505 },
                end: { line: 233, column: 51, offset: 7552 }
              }
            }
          ],
          position: {
            start: { line: 233, column: 2, offset: 7503 },
            end: { line: 233, column: 51, offset: 7552 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 2, offset: 7377 },
        end: { line: 233, column: 51, offset: 7552 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more functions beyond the core operators, please visit ',
          position: {
            start: { line: 235, column: 1, offset: 7554 },
            end: { line: 235, column: 60, offset: 7613 }
          }
        },
        {
          type: 'inlineCode',
          value: 'rubico/x',
          position: {
            start: { line: 235, column: 60, offset: 7613 },
            end: { line: 235, column: 70, offset: 7623 }
          }
        },
        {
          type: 'text',
          value: '. You can find the full documentation at ',
          position: {
            start: { line: 235, column: 70, offset: 7623 },
            end: { line: 235, column: 111, offset: 7664 }
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
                start: { line: 235, column: 112, offset: 7665 },
                end: { line: 235, column: 128, offset: 7681 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 111, offset: 7664 },
            end: { line: 235, column: 155, offset: 7708 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 235, column: 155, offset: 7708 },
            end: { line: 235, column: 156, offset: 7709 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 7554 },
        end: { line: 235, column: 156, offset: 7709 }
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
            start: { line: 237, column: 3, offset: 7713 },
            end: { line: 237, column: 13, offset: 7723 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 7711 },
        end: { line: 237, column: 13, offset: 7723 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Please find the published benchmark output inside the ',
          position: {
            start: { line: 238, column: 1, offset: 7724 },
            end: { line: 238, column: 55, offset: 7778 }
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
                start: { line: 238, column: 56, offset: 7779 },
                end: { line: 238, column: 72, offset: 7795 }
              }
            }
          ],
          position: {
            start: { line: 238, column: 55, offset: 7778 },
            end: { line: 238, column: 143, offset: 7866 }
          }
        },
        {
          type: 'text',
          value: ' folder. You can run the benchmarks on your own system with the following command:',
          position: {
            start: { line: 238, column: 143, offset: 7866 },
            end: { line: 238, column: 225, offset: 7948 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 7724 },
        end: { line: 238, column: 225, offset: 7948 }
      }
    },
    {
      type: 'code',
      lang: null,
      meta: null,
      value: 'npm run bench',
      position: {
        start: { line: 239, column: 1, offset: 7949 },
        end: { line: 241, column: 4, offset: 7970 }
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
            start: { line: 243, column: 3, offset: 7974 },
            end: { line: 243, column: 15, offset: 7986 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 7972 },
        end: { line: 243, column: 15, offset: 7986 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Your feedback and contributions are welcome. If you have a suggestion, please raise an issue. Prior to that, please search through the issues first in case your suggestion has been made already. If you decide to work on an issue, or feel like taking initiative and contributing anything at all, feel free to create a pull request and I will get back to you shortly.',
          position: {
            start: { line: 244, column: 1, offset: 7987 },
            end: { line: 244, column: 366, offset: 8352 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 7987 },
        end: { line: 244, column: 366, offset: 8352 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pull requests should provide some basic context and link the relevant issue. Here is an ',
          position: {
            start: { line: 246, column: 1, offset: 8354 },
            end: { line: 246, column: 89, offset: 8442 }
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
                start: { line: 246, column: 90, offset: 8443 },
                end: { line: 246, column: 110, offset: 8463 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 89, offset: 8442 },
            end: { line: 246, column: 160, offset: 8513 }
          }
        },
        {
          type: 'text',
          value: '. If you are interested in contributing, the ',
          position: {
            start: { line: 246, column: 160, offset: 8513 },
            end: { line: 246, column: 205, offset: 8558 }
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
                start: { line: 246, column: 206, offset: 8559 },
                end: { line: 246, column: 217, offset: 8570 }
              }
            }
          ],
          position: {
            start: { line: 246, column: 205, offset: 8558 },
            end: { line: 246, column: 315, offset: 8668 }
          }
        },
        {
          type: 'text',
          value: ' tag is a good place to start.',
          position: {
            start: { line: 246, column: 315, offset: 8668 },
            end: { line: 246, column: 345, offset: 8698 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 8354 },
        end: { line: 246, column: 345, offset: 8698 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'For more information please see ',
          position: {
            start: { line: 248, column: 1, offset: 8700 },
            end: { line: 248, column: 33, offset: 8732 }
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
                start: { line: 248, column: 34, offset: 8733 },
                end: { line: 248, column: 49, offset: 8748 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 33, offset: 8732 },
            end: { line: 248, column: 68, offset: 8767 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8700 },
        end: { line: 248, column: 68, offset: 8767 }
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
            start: { line: 250, column: 3, offset: 8771 },
            end: { line: 250, column: 10, offset: 8778 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 8769 },
        end: { line: 250, column: 10, offset: 8778 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'rubico is ',
          position: {
            start: { line: 251, column: 1, offset: 8779 },
            end: { line: 251, column: 11, offset: 8789 }
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
                start: { line: 251, column: 12, offset: 8790 },
                end: { line: 251, column: 24, offset: 8802 }
              }
            }
          ],
          position: {
            start: { line: 251, column: 11, offset: 8789 },
            end: { line: 251, column: 86, offset: 8864 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 251, column: 86, offset: 8864 },
            end: { line: 251, column: 87, offset: 8865 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 8779 },
        end: { line: 251, column: 87, offset: 8865 }
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
            start: { line: 253, column: 3, offset: 8869 },
            end: { line: 253, column: 10, offset: 8876 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 8867 },
        end: { line: 253, column: 10, offset: 8876 }
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
                    start: { line: 254, column: 4, offset: 8880 },
                    end: { line: 254, column: 31, offset: 8907 }
                  }
                }
              ],
              position: {
                start: { line: 254, column: 4, offset: 8880 },
                end: { line: 254, column: 31, offset: 8907 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 2, offset: 8878 },
            end: { line: 254, column: 31, offset: 8907 }
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
                    start: { line: 255, column: 4, offset: 8911 },
                    end: { line: 255, column: 30, offset: 8937 }
                  }
                }
              ],
              position: {
                start: { line: 255, column: 4, offset: 8911 },
                end: { line: 255, column: 30, offset: 8937 }
              }
            }
          ],
          position: {
            start: { line: 255, column: 2, offset: 8909 },
            end: { line: 255, column: 30, offset: 8937 }
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
                    start: { line: 256, column: 4, offset: 8941 },
                    end: { line: 256, column: 31, offset: 8968 }
                  }
                }
              ],
              position: {
                start: { line: 256, column: 4, offset: 8941 },
                end: { line: 256, column: 31, offset: 8968 }
              }
            }
          ],
          position: {
            start: { line: 256, column: 2, offset: 8939 },
            end: { line: 256, column: 31, offset: 8968 }
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
                    start: { line: 257, column: 4, offset: 8972 },
                    end: { line: 257, column: 28, offset: 8996 }
                  }
                }
              ],
              position: {
                start: { line: 257, column: 4, offset: 8972 },
                end: { line: 257, column: 28, offset: 8996 }
              }
            }
          ],
          position: {
            start: { line: 257, column: 2, offset: 8970 },
            end: { line: 257, column: 28, offset: 8996 }
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
                    start: { line: 258, column: 4, offset: 9000 },
                    end: { line: 258, column: 32, offset: 9028 }
                  }
                }
              ],
              position: {
                start: { line: 258, column: 4, offset: 9000 },
                end: { line: 258, column: 32, offset: 9028 }
              }
            }
          ],
          position: {
            start: { line: 258, column: 2, offset: 8998 },
            end: { line: 258, column: 32, offset: 9028 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 2, offset: 8878 },
        end: { line: 258, column: 32, offset: 9028 }
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
            start: { line: 260, column: 3, offset: 9032 },
            end: { line: 260, column: 20, offset: 9049 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 9030 },
        end: { line: 260, column: 20, offset: 9049 }
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
                start: { line: 261, column: 2, offset: 9051 },
                end: { line: 261, column: 37, offset: 9086 }
              }
            }
          ],
          position: {
            start: { line: 261, column: 1, offset: 9050 },
            end: { line: 261, column: 118, offset: 9167 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 261, column: 118, offset: 9167 },
            end: { line: 262, column: 1, offset: 9168 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 262, column: 1, offset: 9168 },
            end: { line: 262, column: 5, offset: 9172 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 262, column: 5, offset: 9172 },
            end: { line: 263, column: 1, offset: 9173 }
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
                start: { line: 263, column: 2, offset: 9174 },
                end: { line: 263, column: 74, offset: 9246 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 1, offset: 9173 },
            end: { line: 263, column: 185, offset: 9357 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 263, column: 185, offset: 9357 },
            end: { line: 264, column: 1, offset: 9358 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 264, column: 1, offset: 9358 },
            end: { line: 264, column: 5, offset: 9362 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 264, column: 5, offset: 9362 },
            end: { line: 265, column: 1, offset: 9363 }
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
                start: { line: 265, column: 2, offset: 9364 },
                end: { line: 265, column: 80, offset: 9442 }
              }
            }
          ],
          position: {
            start: { line: 265, column: 1, offset: 9363 },
            end: { line: 265, column: 188, offset: 9550 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 265, column: 188, offset: 9550 },
            end: { line: 266, column: 1, offset: 9551 }
          }
        },
        {
          type: 'html',
          value: '<br>',
          position: {
            start: { line: 266, column: 1, offset: 9551 },
            end: { line: 266, column: 5, offset: 9555 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 266, column: 5, offset: 9555 },
            end: { line: 267, column: 1, offset: 9556 }
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
                start: { line: 267, column: 2, offset: 9557 },
                end: { line: 267, column: 65, offset: 9620 }
              }
            }
          ],
          position: {
            start: { line: 267, column: 1, offset: 9556 },
            end: { line: 267, column: 158, offset: 9713 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 9050 },
        end: { line: 267, column: 158, offset: 9713 }
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
            start: { line: 269, column: 3, offset: 9717 },
            end: { line: 269, column: 7, offset: 9721 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 9715 },
        end: { line: 269, column: 7, offset: 9721 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Check out the rubico blog at ',
          position: {
            start: { line: 270, column: 1, offset: 9722 },
            end: { line: 270, column: 30, offset: 9751 }
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
                start: { line: 270, column: 31, offset: 9752 },
                end: { line: 270, column: 55, offset: 9776 }
              }
            }
          ],
          position: {
            start: { line: 270, column: 30, offset: 9751 },
            end: { line: 270, column: 82, offset: 9803 }
          }
        }
      ],
      position: {
        start: { line: 270, column: 1, offset: 9722 },
        end: { line: 270, column: 82, offset: 9803 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 271, column: 1, offset: 9804 }
  }
}