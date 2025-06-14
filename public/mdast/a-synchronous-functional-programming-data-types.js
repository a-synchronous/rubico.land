export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 289 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 10, column: 1, offset: 291 },
            end: { line: 10, column: 186, offset: 476 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 291 },
        end: { line: 10, column: 186, offset: 476 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Primitive Data Types',
          position: {
            start: { line: 12, column: 4, offset: 481 },
            end: { line: 12, column: 24, offset: 501 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 478 },
        end: { line: 12, column: 24, offset: 501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 13, column: 1, offset: 502 },
            end: { line: 13, column: 250, offset: 751 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 502 },
        end: { line: 13, column: 250, offset: 751 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 15, column: 1, offset: 753 },
            end: { line: 15, column: 64, offset: 816 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 15, column: 64, offset: 816 },
            end: { line: 15, column: 67, offset: 819 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 15, column: 67, offset: 819 },
            end: { line: 15, column: 105, offset: 857 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 15, column: 105, offset: 857 },
            end: { line: 15, column: 110, offset: 862 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 15, column: 110, offset: 862 },
            end: { line: 15, column: 185, offset: 937 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 753 },
        end: { line: 15, column: 185, offset: 937 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 17, column: 1, offset: 939 },
        end: { line: 19, column: 4, offset: 958 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 21, column: 1, offset: 960 },
            end: { line: 21, column: 22, offset: 981 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 22, offset: 981 },
            end: { line: 21, column: 30, offset: 989 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 21, column: 30, offset: 989 },
            end: { line: 21, column: 79, offset: 1038 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 79, offset: 1038 },
            end: { line: 21, column: 87, offset: 1046 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 21, column: 87, offset: 1046 },
            end: { line: 21, column: 147, offset: 1106 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 960 },
        end: { line: 21, column: 147, offset: 1106 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 23, column: 1, offset: 1108 },
        end: { line: 25, column: 4, offset: 1142 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 27, column: 1, offset: 1144 },
            end: { line: 27, column: 56, offset: 1199 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 27, column: 56, offset: 1199 },
            end: { line: 27, column: 63, offset: 1206 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 27, column: 63, offset: 1206 },
            end: { line: 27, column: 67, offset: 1210 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 27, column: 67, offset: 1210 },
            end: { line: 27, column: 83, offset: 1226 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 27, column: 83, offset: 1226 },
            end: { line: 27, column: 249, offset: 1392 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1144 },
        end: { line: 27, column: 249, offset: 1392 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 29, column: 1, offset: 1394 },
        end: { line: 31, column: 4, offset: 1426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 33, column: 1, offset: 1428 },
            end: { line: 33, column: 22, offset: 1449 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 22, offset: 1449 },
            end: { line: 33, column: 30, offset: 1457 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 33, column: 30, offset: 1457 },
            end: { line: 33, column: 79, offset: 1506 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 79, offset: 1506 },
            end: { line: 33, column: 87, offset: 1514 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 33, column: 87, offset: 1514 },
            end: { line: 33, column: 147, offset: 1574 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1428 },
        end: { line: 33, column: 147, offset: 1574 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 35, column: 1, offset: 1576 },
        end: { line: 37, column: 4, offset: 1610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 39, column: 1, offset: 1612 },
            end: { line: 39, column: 63, offset: 1674 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 39, column: 63, offset: 1674 },
            end: { line: 39, column: 69, offset: 1680 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 39, column: 69, offset: 1680 },
            end: { line: 39, column: 73, offset: 1684 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 39, column: 73, offset: 1684 },
            end: { line: 39, column: 80, offset: 1691 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 39, column: 80, offset: 1691 },
            end: { line: 39, column: 135, offset: 1746 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1612 },
        end: { line: 39, column: 135, offset: 1746 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 41, column: 1, offset: 1748 },
        end: { line: 43, column: 4, offset: 1770 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 45, column: 1, offset: 1772 },
            end: { line: 45, column: 130, offset: 1901 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 45, column: 130, offset: 1901 },
            end: { line: 45, column: 134, offset: 1905 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 134, offset: 1905 },
            end: { line: 45, column: 136, offset: 1907 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 45, column: 136, offset: 1907 },
            end: { line: 45, column: 139, offset: 1910 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 139, offset: 1910 },
            end: { line: 45, column: 141, offset: 1912 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 45, column: 141, offset: 1912 },
            end: { line: 45, column: 144, offset: 1915 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 144, offset: 1915 },
            end: { line: 45, column: 146, offset: 1917 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 45, column: 146, offset: 1917 },
            end: { line: 45, column: 150, offset: 1921 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 150, offset: 1921 },
            end: { line: 45, column: 152, offset: 1923 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 45, column: 152, offset: 1923 },
            end: { line: 45, column: 156, offset: 1927 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 156, offset: 1927 },
            end: { line: 45, column: 158, offset: 1929 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 45, column: 158, offset: 1929 },
            end: { line: 45, column: 162, offset: 1933 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 45, column: 162, offset: 1933 },
            end: { line: 45, column: 167, offset: 1938 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 45, column: 167, offset: 1938 },
            end: { line: 45, column: 171, offset: 1942 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 45, column: 171, offset: 1942 },
            end: { line: 45, column: 213, offset: 1984 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 45, column: 213, offset: 1984 },
            end: { line: 45, column: 217, offset: 1988 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 45, column: 217, offset: 1988 },
            end: { line: 45, column: 255, offset: 2026 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1772 },
        end: { line: 45, column: 255, offset: 2026 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const myNumber = 3\n' +
        'const myCondition = myNumber > 2 // myCondition is a boolean\n' +
        '\n' +
        'if (myCondition) {\n' +
        '  // execute code\n' +
        '}',
      position: {
        start: { line: 47, column: 1, offset: 2028 },
        end: { line: 54, column: 4, offset: 2165 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 56, column: 1, offset: 2167 },
            end: { line: 56, column: 22, offset: 2188 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 56, column: 22, offset: 2188 },
            end: { line: 56, column: 31, offset: 2197 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 56, column: 31, offset: 2197 },
            end: { line: 56, column: 64, offset: 2230 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2167 },
        end: { line: 56, column: 64, offset: 2230 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 58, column: 1, offset: 2232 },
        end: { line: 60, column: 4, offset: 2269 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 62, column: 1, offset: 2271 },
            end: { line: 62, column: 206, offset: 2476 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2271 },
        end: { line: 62, column: 206, offset: 2476 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 64, column: 1, offset: 2478 },
        end: { line: 67, column: 4, offset: 2563 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 69, column: 1, offset: 2565 },
            end: { line: 69, column: 141, offset: 2705 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2565 },
        end: { line: 69, column: 141, offset: 2705 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const fileReader = new FileReader()\n' +
        'fileReader.onload = function (event) {\n' +
        '  // event.target.result is binary data\n' +
        '}\n' +
        'fileReader.readAsArrayBuffer(myFile)',
      position: {
        start: { line: 71, column: 1, offset: 2707 },
        end: { line: 77, column: 4, offset: 2878 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 79, column: 1, offset: 2880 },
            end: { line: 79, column: 54, offset: 2933 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Immutable',
          children: [
            {
              type: 'text',
              value: 'immutable',
              position: {
                start: { line: 79, column: 55, offset: 2934 },
                end: { line: 79, column: 64, offset: 2943 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 54, offset: 2933 },
            end: { line: 79, column: 126, offset: 3005 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 79, column: 126, offset: 3005 },
            end: { line: 79, column: 195, offset: 3074 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2880 },
        end: { line: 79, column: 195, offset: 3074 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const mySymbol1 = Symbol('description')\n" +
        "const mySymbol2 = Symbol('description')\n" +
        'mySymbol1 == mySymbol2 // false\n' +
        '// mySymbol1 is unique from mySymbol2',
      position: {
        start: { line: 81, column: 1, offset: 3076 },
        end: { line: 86, column: 4, offset: 3243 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 88, column: 1, offset: 3245 },
            end: { line: 88, column: 130, offset: 3374 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 88, column: 130, offset: 3374 },
            end: { line: 88, column: 140, offset: 3384 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 88, column: 140, offset: 3384 },
            end: { line: 88, column: 150, offset: 3394 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 88, column: 150, offset: 3394 },
            end: { line: 88, column: 163, offset: 3407 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 88, column: 163, offset: 3407 },
            end: { line: 88, column: 164, offset: 3408 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3245 },
        end: { line: 88, column: 164, offset: 3408 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const o = { a: 1, b: 2, c: 3 }\n' +
        '\n' +
        "const s1 = Symbol('1')\n" +
        "const o[s1] = 'my-unique-prop'\n" +
        '\n' +
        'for (const key in o) {\n' +
        "  // symbol s1 won't be enumerated here\n" +
        '}',
      position: {
        start: { line: 90, column: 1, offset: 3410 },
        end: { line: 99, column: 4, offset: 3579 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 101, column: 1, offset: 3581 },
            end: { line: 101, column: 34, offset: 3614 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 101, column: 34, offset: 3614 },
            end: { line: 101, column: 51, offset: 3631 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 51, offset: 3631 },
            end: { line: 101, column: 56, offset: 3636 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 101, column: 56, offset: 3636 },
            end: { line: 101, column: 78, offset: 3658 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 101, column: 78, offset: 3658 },
            end: { line: 101, column: 185, offset: 3765 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol',
          children: [
            {
              type: 'text',
              value: 'iterable protocol',
              position: {
                start: { line: 101, column: 186, offset: 3766 },
                end: { line: 101, column: 203, offset: 3783 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 185, offset: 3765 },
            end: { line: 101, column: 313, offset: 3893 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 313, offset: 3893 },
            end: { line: 101, column: 318, offset: 3898 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols',
          children: [
            {
              type: 'text',
              value: 'async iterable protocol',
              position: {
                start: { line: 101, column: 319, offset: 3899 },
                end: { line: 101, column: 342, offset: 3922 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 318, offset: 3898 },
            end: { line: 101, column: 478, offset: 4058 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3581 },
        end: { line: 101, column: 478, offset: 4058 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 103, column: 1, offset: 4060 },
            end: { line: 103, column: 104, offset: 4163 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 104, offset: 4163 },
            end: { line: 103, column: 110, offset: 4169 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 103, column: 110, offset: 4169 },
            end: { line: 103, column: 115, offset: 4174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 115, offset: 4174 },
            end: { line: 103, column: 126, offset: 4185 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 103, column: 126, offset: 4185 },
            end: { line: 103, column: 295, offset: 4354 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 295, offset: 4354 },
            end: { line: 103, column: 301, offset: 4360 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 103, column: 301, offset: 4360 },
            end: { line: 103, column: 397, offset: 4456 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 397, offset: 4456 },
            end: { line: 103, column: 408, offset: 4467 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 103, column: 408, offset: 4467 },
            end: { line: 103, column: 451, offset: 4510 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 451, offset: 4510 },
            end: { line: 103, column: 462, offset: 4521 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 103, column: 462, offset: 4521 },
            end: { line: 103, column: 479, offset: 4538 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 4060 },
        end: { line: 103, column: 479, offset: 4538 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'function myFunction(arg) {\n' +
        '  // check is arg is null or undefined\n' +
        '  if (arg == null) {\n' +
        '    return undefined\n' +
        '  }\n' +
        '  // continue with function knowing arg is a meaningful value\n' +
        '}\n' +
        '\n' +
        '// declare myVar2 without initializing\n' +
        'let myVar2\n' +
        '\n' +
        'console.log(myVar2) // undefined',
      position: {
        start: { line: 105, column: 1, offset: 4540 },
        end: { line: 118, column: 4, offset: 4818 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Primitive Versus Reference Data Types',
          position: {
            start: { line: 120, column: 5, offset: 4824 },
            end: { line: 120, column: 42, offset: 4861 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4820 },
        end: { line: 120, column: 42, offset: 4861 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 121, column: 1, offset: 4862 },
            end: { line: 121, column: 329, offset: 5190 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4862 },
        end: { line: 121, column: 329, offset: 5190 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Collection Data Types',
          position: {
            start: { line: 123, column: 4, offset: 5195 },
            end: { line: 123, column: 25, offset: 5216 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 5192 },
        end: { line: 123, column: 25, offset: 5216 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 124, column: 1, offset: 5217 },
            end: { line: 124, column: 429, offset: 5645 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5217 },
        end: { line: 124, column: 429, offset: 5645 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 126, column: 1, offset: 5647 },
            end: { line: 126, column: 175, offset: 5821 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 126, column: 175, offset: 5821 },
            end: { line: 126, column: 182, offset: 5828 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 126, column: 182, offset: 5828 },
            end: { line: 126, column: 195, offset: 5841 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5647 },
        end: { line: 126, column: 195, offset: 5841 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '[1, 2, 3] // array literal\n' +
        'new Array(1, 2, 3) // array constructor\n' +
        '\n' +
        "const myArray = ['a', 'b', 'c']\n" +
        "myArray[0] // 'a', accessed at index 0 of myArray\n" +
        "myArray[1] // 'b', accessed at index 1 of myArray\n" +
        "myArray[2] // 'c', accessed at index 2 of myArray",
      position: {
        start: { line: 128, column: 1, offset: 5843 },
        end: { line: 136, column: 4, offset: 6110 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 138, column: 1, offset: 6112 },
            end: { line: 138, column: 56, offset: 6167 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 138, column: 56, offset: 6167 },
            end: { line: 138, column: 63, offset: 6174 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 138, column: 63, offset: 6174 },
            end: { line: 138, column: 76, offset: 6187 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 6112 },
        end: { line: 138, column: 76, offset: 6187 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 140, column: 1, offset: 6189 },
        end: { line: 143, column: 4, offset: 6302 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 145, column: 1, offset: 6304 },
            end: { line: 145, column: 40, offset: 6343 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 145, column: 40, offset: 6343 },
            end: { line: 145, column: 48, offset: 6351 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 145, column: 48, offset: 6351 },
            end: { line: 145, column: 53, offset: 6356 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 145, column: 53, offset: 6356 },
            end: { line: 145, column: 59, offset: 6362 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 145, column: 59, offset: 6362 },
            end: { line: 145, column: 83, offset: 6386 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 6304 },
        end: { line: 145, column: 83, offset: 6386 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'myArray.slice(0, 3) // [1, 2, 3]\n' +
        'myArray.map(n => n * 2) // [2, 4, 6, 8, 10]',
      position: {
        start: { line: 147, column: 1, offset: 6388 },
        end: { line: 152, column: 4, offset: 6515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 154, column: 1, offset: 6517 },
            end: { line: 154, column: 42, offset: 6558 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 154, column: 42, offset: 6558 },
            end: { line: 154, column: 49, offset: 6565 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 154, column: 49, offset: 6565 },
            end: { line: 154, column: 66, offset: 6582 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 6517 },
        end: { line: 154, column: 66, offset: 6582 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2]\n' +
        '\n' +
        'myArray.push(3)\n' +
        '\n' +
        'console.log(myArray) // [1, 2, 3]',
      position: {
        start: { line: 156, column: 1, offset: 6584 },
        end: { line: 162, column: 4, offset: 6689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 164, column: 1, offset: 6691 },
            end: { line: 164, column: 42, offset: 6732 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 164, column: 42, offset: 6732 },
            end: { line: 164, column: 51, offset: 6741 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 164, column: 51, offset: 6741 },
            end: { line: 164, column: 68, offset: 6758 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6691 },
        end: { line: 164, column: 68, offset: 6758 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3]\n' +
        '\n' +
        'myArray.splice(1, 1) // remove 1 item from index 1 of myArray\n' +
        '\n' +
        'console.log(myArray) // [1, 3]',
      position: {
        start: { line: 166, column: 1, offset: 6760 },
        end: { line: 172, column: 4, offset: 6911 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 174, column: 1, offset: 6913 },
            end: { line: 174, column: 52, offset: 6964 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 174, column: 52, offset: 6964 },
            end: { line: 174, column: 62, offset: 6974 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 174, column: 62, offset: 6974 },
            end: { line: 174, column: 68, offset: 6980 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 6913 },
        end: { line: 174, column: 68, offset: 6980 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'for (const n of numbers) {\n' +
        '  console.log(n)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '  // 4\n' +
        '  // 5\n' +
        '}',
      position: {
        start: { line: 176, column: 1, offset: 6982 },
        end: { line: 187, column: 4, offset: 7126 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 189, column: 1, offset: 7128 },
            end: { line: 189, column: 202, offset: 7329 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 7128 },
        end: { line: 189, column: 202, offset: 7329 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 191, column: 1, offset: 7331 },
        end: { line: 193, column: 4, offset: 7367 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 195, column: 1, offset: 7369 },
            end: { line: 195, column: 22, offset: 7390 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 195, column: 22, offset: 7390 },
            end: { line: 195, column: 30, offset: 7398 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 195, column: 30, offset: 7398 },
            end: { line: 195, column: 93, offset: 7461 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 7369 },
        end: { line: 195, column: 93, offset: 7461 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 197, column: 1, offset: 7463 },
        end: { line: 199, column: 4, offset: 7493 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 201, column: 1, offset: 7495 },
            end: { line: 201, column: 142, offset: 7636 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 7495 },
        end: { line: 201, column: 142, offset: 7636 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const o = {}\n' +
        '\n' +
        "o.a = 1 // set the number 1 as an element at key 'a' on the object o\n" +
        '\n' +
        "const myPropertyName = 'My-Prop'\n" +
        "o[myPropertyName] = 'foo'\n" +
        "// set the string 'foo' as an element at key 'My-Prop' on the object o",
      position: {
        start: { line: 203, column: 1, offset: 7638 },
        end: { line: 211, column: 4, offset: 7869 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 213, column: 1, offset: 7871 },
            end: { line: 213, column: 73, offset: 7943 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 213, column: 73, offset: 7943 },
            end: { line: 213, column: 81, offset: 7951 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 213, column: 81, offset: 7951 },
            end: { line: 213, column: 90, offset: 7960 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 7871 },
        end: { line: 213, column: 90, offset: 7960 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const o = { a: 1, 'My-Prop': 'foo' }\n" +
        '\n' +
        "delete o.a // remove the element 1 under key 'a' from object o\n" +
        "delete o['My-Prop'] // remove the element 'foo' under key 'My-Prop' from object o",
      position: {
        start: { line: 215, column: 1, offset: 7962 },
        end: { line: 220, column: 4, offset: 8162 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 222, column: 1, offset: 8164 },
            end: { line: 222, column: 66, offset: 8229 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 222, column: 66, offset: 8229 },
            end: { line: 222, column: 76, offset: 8239 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 222, column: 76, offset: 8239 },
            end: { line: 222, column: 82, offset: 8245 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 8164 },
        end: { line: 222, column: 82, offset: 8245 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const o = { a: 1, b: 2, c: 3 }\n' +
        'for (const key in o) {\n' +
        '  const value = o[key]\n' +
        '  console.log(key, value)\n' +
        '  // a 1\n' +
        '  // b 2\n' +
        '  // c 3\n' +
        '}',
      position: {
        start: { line: 224, column: 1, offset: 8247 },
        end: { line: 233, column: 4, offset: 8409 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 235, column: 1, offset: 8411 },
            end: { line: 235, column: 169, offset: 8579 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality',
          children: [
            {
              type: 'text',
              value: 'SameValueZero',
              position: {
                start: { line: 235, column: 170, offset: 8580 },
                end: { line: 235, column: 183, offset: 8593 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 169, offset: 8579 },
            end: { line: 235, column: 306, offset: 8716 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 235, column: 306, offset: 8716 },
            end: { line: 235, column: 469, offset: 8879 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 235, column: 469, offset: 8879 },
            end: { line: 235, column: 475, offset: 8885 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 235, column: 475, offset: 8885 },
            end: { line: 235, column: 483, offset: 8893 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 8411 },
        end: { line: 235, column: 483, offset: 8893 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const mySet = new Set([1, 2, 3])\n' +
        '\n' +
        "console.log('set has 1:', mySet.has(1)) // set has 1: true\n" +
        "console.log('set has 0:', mySet.has(0)) // set has 0: false",
      position: {
        start: { line: 237, column: 1, offset: 8895 },
        end: { line: 242, column: 4, offset: 9078 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 244, column: 1, offset: 9080 },
            end: { line: 244, column: 26, offset: 9105 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 244, column: 26, offset: 9105 },
            end: { line: 244, column: 31, offset: 9110 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 244, column: 31, offset: 9110 },
            end: { line: 244, column: 44, offset: 9123 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 9080 },
        end: { line: 244, column: 44, offset: 9123 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 246, column: 1, offset: 9125 },
        end: { line: 248, column: 4, offset: 9161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 250, column: 1, offset: 9163 },
            end: { line: 250, column: 42, offset: 9204 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 250, column: 42, offset: 9204 },
            end: { line: 250, column: 48, offset: 9210 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 250, column: 48, offset: 9210 },
            end: { line: 250, column: 65, offset: 9227 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 9163 },
        end: { line: 250, column: 65, offset: 9227 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const mySet = new Set()\n' +
        '\n' +
        'mySet.add(1)\n' +
        "mySet.add('foo')\n" +
        'mySet.add(true)\n' +
        '\n' +
        "console.log(mySet) // Set(3) { 1, 'foo', true }",
      position: {
        start: { line: 252, column: 1, offset: 9229 },
        end: { line: 260, column: 4, offset: 9379 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 262, column: 1, offset: 9381 },
            end: { line: 262, column: 42, offset: 9422 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 262, column: 42, offset: 9422 },
            end: { line: 262, column: 51, offset: 9431 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 262, column: 51, offset: 9431 },
            end: { line: 262, column: 68, offset: 9448 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9381 },
        end: { line: 262, column: 68, offset: 9448 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const mySet = new Set([1, 2, 3])\n' +
        '\n' +
        'mySet.delete(2)\n' +
        '\n' +
        'console.log(mySet) // Set(2) { 1, 3 }',
      position: {
        start: { line: 264, column: 1, offset: 9450 },
        end: { line: 270, column: 4, offset: 9569 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 272, column: 1, offset: 9571 },
            end: { line: 272, column: 49, offset: 9619 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 272, column: 49, offset: 9619 },
            end: { line: 272, column: 59, offset: 9629 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 272, column: 59, offset: 9629 },
            end: { line: 272, column: 65, offset: 9635 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9571 },
        end: { line: 272, column: 65, offset: 9635 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const mySet = new Set([1, 2, 3, 4, 5])\n' +
        '\n' +
        'for (const num of mySet) {\n' +
        '  console.log(num)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '  // 4\n' +
        '  // 5\n' +
        '}',
      position: {
        start: { line: 274, column: 1, offset: 9637 },
        end: { line: 285, column: 4, offset: 9790 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 287, column: 1, offset: 9792 },
            end: { line: 287, column: 202, offset: 9993 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 9792 },
        end: { line: 287, column: 202, offset: 9993 }
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
                  value: 'In scenarios involving frequent insertions and deletions of elements, maps are more performant than objects.',
                  position: {
                    start: { line: 288, column: 5, offset: 9998 },
                    end: { line: 288, column: 113, offset: 10106 }
                  }
                }
              ],
              position: {
                start: { line: 288, column: 5, offset: 9998 },
                end: { line: 288, column: 113, offset: 10106 }
              }
            }
          ],
          position: {
            start: { line: 288, column: 3, offset: 9996 },
            end: { line: 288, column: 113, offset: 10106 }
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
                  value: 'Maps need to be first converted to plain objects before they can be serialized, e.g. via ',
                  position: {
                    start: { line: 289, column: 5, offset: 10111 },
                    end: { line: 289, column: 94, offset: 10200 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 289, column: 94, offset: 10200 },
                    end: { line: 289, column: 110, offset: 10216 }
                  }
                }
              ],
              position: {
                start: { line: 289, column: 5, offset: 10111 },
                end: { line: 289, column: 110, offset: 10216 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 3, offset: 10109 },
            end: { line: 289, column: 110, offset: 10216 }
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
                  value: 'Map keys can be any value (including functions, objects, or any primitive), while object keys can only be strings or symbols.',
                  position: {
                    start: { line: 290, column: 5, offset: 10221 },
                    end: { line: 290, column: 130, offset: 10346 }
                  }
                }
              ],
              position: {
                start: { line: 290, column: 5, offset: 10221 },
                end: { line: 290, column: 130, offset: 10346 }
              }
            }
          ],
          position: {
            start: { line: 290, column: 3, offset: 10219 },
            end: { line: 290, column: 130, offset: 10346 }
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
                  value: 'Maps are iterable with ',
                  position: {
                    start: { line: 291, column: 5, offset: 10351 },
                    end: { line: 291, column: 28, offset: 10374 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 291, column: 28, offset: 10374 },
                    end: { line: 291, column: 38, offset: 10384 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 291, column: 38, offset: 10384 },
                    end: { line: 291, column: 64, offset: 10410 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 291, column: 64, offset: 10410 },
                    end: { line: 291, column: 74, offset: 10420 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 291, column: 74, offset: 10420 },
                    end: { line: 291, column: 80, offset: 10426 }
                  }
                }
              ],
              position: {
                start: { line: 291, column: 5, offset: 10351 },
                end: { line: 291, column: 80, offset: 10426 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 3, offset: 10349 },
            end: { line: 291, column: 80, offset: 10426 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 3, offset: 9996 },
        end: { line: 291, column: 80, offset: 10426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 293, column: 1, offset: 10428 },
            end: { line: 293, column: 9, offset: 10436 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 9, offset: 10436 },
            end: { line: 293, column: 14, offset: 10441 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 293, column: 14, offset: 10441 },
            end: { line: 293, column: 48, offset: 10475 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 48, offset: 10475 },
            end: { line: 293, column: 53, offset: 10480 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 293, column: 53, offset: 10480 },
            end: { line: 293, column: 124, offset: 10551 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 10428 },
        end: { line: 293, column: 124, offset: 10551 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 295, column: 1, offset: 10553 },
        end: { line: 301, column: 4, offset: 10629 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 303, column: 1, offset: 10631 },
            end: { line: 303, column: 42, offset: 10672 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 303, column: 42, offset: 10672 },
            end: { line: 303, column: 48, offset: 10678 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 303, column: 48, offset: 10678 },
            end: { line: 303, column: 65, offset: 10695 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 10631 },
        end: { line: 303, column: 65, offset: 10695 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const m = new Map()\n' +
        "m.set('a', 1)\n" +
        "m.set('b', 2)\n" +
        "m.set('c', 3)\n" +
        '\n' +
        "console.log(m) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }",
      position: {
        start: { line: 305, column: 1, offset: 10697 },
        end: { line: 312, column: 4, offset: 10848 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 314, column: 1, offset: 10850 },
            end: { line: 314, column: 42, offset: 10891 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 314, column: 42, offset: 10891 },
            end: { line: 314, column: 51, offset: 10900 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 314, column: 51, offset: 10900 },
            end: { line: 314, column: 68, offset: 10917 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10850 },
        end: { line: 314, column: 68, offset: 10917 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const m = new Map([\n' +
        "  ['a', 1],\n" +
        "  ['b', 2],\n" +
        "  ['c', 3],\n" +
        '])\n' +
        '\n' +
        "m.delete('a')\n" +
        '\n' +
        "console.log(m) // Map(2) { 'b' => 2, 'c' => 3 }",
      position: {
        start: { line: 316, column: 1, offset: 10919 },
        end: { line: 326, column: 4, offset: 11072 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 328, column: 1, offset: 11074 },
            end: { line: 328, column: 49, offset: 11122 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 328, column: 49, offset: 11122 },
            end: { line: 328, column: 59, offset: 11132 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 328, column: 59, offset: 11132 },
            end: { line: 328, column: 65, offset: 11138 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 11074 },
        end: { line: 328, column: 65, offset: 11138 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myMap = new Map()\n' +
        '\n' +
        "myMap.set('a', 1)\n" +
        'myMap.set(null, true)\n' +
        "myMap.set(function myFunc() {}, ['example'])\n" +
        '\n' +
        'for (const [key, value] of myMap) {\n' +
        '  console.log(key, value)\n' +
        '  // a 1\n' +
        '  // null true\n' +
        "  // [Function: myFunc] ['example']\n" +
        '}',
      position: {
        start: { line: 330, column: 1, offset: 11140 },
        end: { line: 343, column: 4, offset: 11405 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Which Collection Data Structure Is Right for Me?',
          position: {
            start: { line: 345, column: 5, offset: 11411 },
            end: { line: 345, column: 53, offset: 11459 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 11407 },
        end: { line: 345, column: 53, offset: 11459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 347, column: 1, offset: 11461 },
            end: { line: 347, column: 323, offset: 11783 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 11461 },
        end: { line: 347, column: 323, offset: 11783 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Iterable Data Types',
          position: {
            start: { line: 349, column: 4, offset: 11788 },
            end: { line: 349, column: 23, offset: 11807 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 11785 },
        end: { line: 349, column: 23, offset: 11807 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 350, column: 1, offset: 11808 },
            end: { line: 350, column: 115, offset: 11922 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol',
          children: [
            {
              type: 'text',
              value: 'iterable protocol',
              position: {
                start: { line: 350, column: 116, offset: 11923 },
                end: { line: 350, column: 133, offset: 11940 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 115, offset: 11922 },
            end: { line: 350, column: 243, offset: 12050 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 350, column: 243, offset: 12050 },
            end: { line: 350, column: 259, offset: 12066 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 259, offset: 12066 },
            end: { line: 350, column: 278, offset: 12085 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the ',
          position: {
            start: { line: 350, column: 278, offset: 12085 },
            end: { line: 350, column: 438, offset: 12245 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 438, offset: 12245 },
            end: { line: 350, column: 457, offset: 12264 }
          }
        },
        {
          type: 'text',
          value: ' method, and can be consumed with a ',
          position: {
            start: { line: 350, column: 457, offset: 12264 },
            end: { line: 350, column: 493, offset: 12300 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 350, column: 493, offset: 12300 },
            end: { line: 350, column: 503, offset: 12310 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 350, column: 503, offset: 12310 },
            end: { line: 350, column: 509, offset: 12316 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 11808 },
        end: { line: 350, column: 509, offset: 12316 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const myArray = [1, 2, 3]\n' +
        'myArray[Symbol.iterator]() // Array Iterator\n' +
        'for (const item of myArray) {\n' +
        '  // myArray is iterable\n' +
        '}\n' +
        '\n' +
        "const myMap = new Map([['a', 1], ['b', 2], ['c', 3]])\n" +
        'myMap[Symbol.iterator]() // MapIterator\n' +
        'for (const [key, value] of myMap) {\n' +
        '  // myMap is iterable\n' +
        '}\n' +
        '\n' +
        'const mySet = new Set([1, 2, 3])\n' +
        'mySet[Symbol.iterator]() // SetIterator\n' +
        'for (const value of mySet) {\n' +
        '  // mySet is iterable\n' +
        '}',
      position: {
        start: { line: 352, column: 1, offset: 12318 },
        end: { line: 370, column: 4, offset: 12747 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 372, column: 1, offset: 12749 },
            end: { line: 372, column: 78, offset: 12826 }
          }
        }
      ],
      position: {
        start: { line: 372, column: 1, offset: 12749 },
        end: { line: 372, column: 78, offset: 12826 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'class MyClass {\n' +
        '  constructor() {\n' +
        '  }\n' +
        '\n' +
        '  * [Symbol.iterator]() {\n' +
        '    yield 1\n' +
        '    yield 2\n' +
        '    yield 3\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const myInstance = new MyClass()\n' +
        '// myInstance created from MyClass is iterable\n' +
        'for (const item of myInstance) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}\n' +
        '\n' +
        'const myObject = {\n' +
        '  * [Symbol.iterator]() {\n' +
        '    yield 1\n' +
        '    yield 2\n' +
        '    yield 3\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// myObject is iterable\n' +
        'for (const item of myObject) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 374, column: 1, offset: 12828 },
        end: { line: 410, column: 4, offset: 13309 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A convenient way to create iterators is with generator functions using the ',
          position: {
            start: { line: 412, column: 1, offset: 13311 },
            end: { line: 412, column: 76, offset: 13386 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 412, column: 76, offset: 13386 },
            end: { line: 412, column: 93, offset: 13403 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 412, column: 93, offset: 13403 },
            end: { line: 412, column: 109, offset: 13419 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 412, column: 109, offset: 13419 },
            end: { line: 412, column: 116, offset: 13426 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Generator functions create generators, a kind of iterator.',
          position: {
            start: { line: 412, column: 116, offset: 13426 },
            end: { line: 412, column: 184, offset: 13494 }
          }
        }
      ],
      position: {
        start: { line: 412, column: 1, offset: 13311 },
        end: { line: 412, column: 184, offset: 13494 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'function* myGeneratorFunction() {\n' +
        '  yield 1\n' +
        '  yield 2\n' +
        '  yield 3\n' +
        '}\n' +
        '\n' +
        '// the generator function myGeneratorFunction creates a generator myGenerator\n' +
        'const myGenerator = myGeneratorFunction()\n' +
        '\n' +
        '// myGenerator is iterable\n' +
        'myGenerator[Symbol.iterator]() // Generator\n' +
        'for (const item of myGenerator) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 414, column: 1, offset: 13496 },
        end: { line: 432, column: 4, offset: 13862 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Asynchronous Data Types',
          position: {
            start: { line: 434, column: 4, offset: 13867 },
            end: { line: 434, column: 27, offset: 13890 }
          }
        }
      ],
      position: {
        start: { line: 434, column: 1, offset: 13864 },
        end: { line: 434, column: 27, offset: 13890 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 435, column: 1, offset: 13891 },
            end: { line: 435, column: 184, offset: 14074 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 1, offset: 13891 },
        end: { line: 435, column: 184, offset: 14074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 437, column: 1, offset: 14076 },
            end: { line: 437, column: 203, offset: 14278 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 437, column: 203, offset: 14278 },
            end: { line: 437, column: 210, offset: 14285 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 437, column: 210, offset: 14285 },
            end: { line: 437, column: 240, offset: 14315 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 14076 },
        end: { line: 437, column: 240, offset: 14315 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.then(resolvedValue => {\n' +
        '  // resolvedValue is the resolved value of myPromise\n' +
        '}).catch(error => {\n' +
        '  // error is the rejected error of myPromise\n' +
        '})',
      position: {
        start: { line: 439, column: 1, offset: 14317 },
        end: { line: 445, column: 4, offset: 14491 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 447, column: 1, offset: 14493 },
            end: { line: 447, column: 31, offset: 14523 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 447, column: 31, offset: 14523 },
            end: { line: 447, column: 38, offset: 14530 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 447, column: 38, offset: 14530 },
            end: { line: 447, column: 43, offset: 14535 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 447, column: 43, offset: 14535 },
            end: { line: 447, column: 50, offset: 14542 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 447, column: 50, offset: 14542 },
            end: { line: 447, column: 111, offset: 14603 }
          }
        }
      ],
      position: {
        start: { line: 447, column: 1, offset: 14493 },
        end: { line: 447, column: 111, offset: 14603 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'async function myFunction() {\n' +
        '  try {\n' +
        '    const resolvedValue = await myPromise\n' +
        '    // resolvedValue is the resolved value of myPromise\n' +
        '  } catch (error) {\n' +
        '    // error is the rejected error of myPromise\n' +
        '  }\n' +
        '}',
      position: {
        start: { line: 449, column: 1, offset: 14605 },
        end: { line: 458, column: 4, offset: 14832 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 460, column: 1, offset: 14834 },
            end: { line: 460, column: 17, offset: 14850 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 460, column: 17, offset: 14850 },
            end: { line: 460, column: 26, offset: 14859 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 460, column: 26, offset: 14859 },
            end: { line: 460, column: 59, offset: 14892 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 14834 },
        end: { line: 460, column: 59, offset: 14892 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myPromise = new Promise((resolve, reject) => {\n' +
        '  setTimeout(() => {\n' +
        '    resolve(1)\n' +
        '  }, 100)\n' +
        '})\n' +
        '\n' +
        'myPromise.then(resolvedValue => {\n' +
        '  console.log(resolvedValue) // 1\n' +
        '})\n' +
        '\n' +
        'const myRejectingPromise = new Promise((resolve, reject) => {\n' +
        '  setTimeout(() => {\n' +
        "    reject(new Error('rejected'))\n" +
        '  }, 100)\n' +
        '})\n' +
        '\n' +
        'myRejectingPromise.catch(error => {\n' +
        '  console.error(error) // Error: rejected\n' +
        '})',
      position: {
        start: { line: 462, column: 1, offset: 14894 },
        end: { line: 482, column: 4, offset: 15311 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 484, column: 1, offset: 15313 },
            end: { line: 484, column: 85, offset: 15397 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 15313 },
        end: { line: 484, column: 85, offset: 15397 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Promise.resolve(1) // promise with resolved value 1 that doesn't reject\n" +
        '\n' +
        "Promise.reject(new Error('example')) // promise that rejects with an error with message 'example'",
      position: {
        start: { line: 486, column: 1, offset: 15399 },
        end: { line: 490, column: 4, offset: 15587 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 492, column: 1, offset: 15589 },
            end: { line: 492, column: 112, offset: 15700 }
          }
        }
      ],
      position: {
        start: { line: 492, column: 1, offset: 15589 },
        end: { line: 492, column: 112, offset: 15700 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')\n" +
        '\n' +
        'promise.then(response => {\n' +
        '  console.log(response) // [object Response]\n' +
        '\n' +
        '  const promise2 = response.json()\n' +
        '\n' +
        '  promise2.then(data => {\n' +
        "    console.log(data) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
        '  })\n' +
        '})',
      position: {
        start: { line: 494, column: 1, offset: 15702 },
        end: { line: 506, column: 4, offset: 16039 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Asynchronous Iterable Data Types',
          position: {
            start: { line: 508, column: 4, offset: 16044 },
            end: { line: 508, column: 36, offset: 16076 }
          }
        }
      ],
      position: {
        start: { line: 508, column: 1, offset: 16041 },
        end: { line: 508, column: 36, offset: 16076 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 509, column: 1, offset: 16077 },
            end: { line: 509, column: 143, offset: 16219 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols',
          children: [
            {
              type: 'text',
              value: 'async iterable protocol',
              position: {
                start: { line: 509, column: 144, offset: 16220 },
                end: { line: 509, column: 167, offset: 16243 }
              }
            }
          ],
          position: {
            start: { line: 509, column: 143, offset: 16219 },
            end: { line: 509, column: 303, offset: 16379 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 509, column: 303, offset: 16379 },
            end: { line: 509, column: 319, offset: 16395 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]',
          position: {
            start: { line: 509, column: 319, offset: 16395 },
            end: { line: 509, column: 343, offset: 16419 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an async iterator object that can be consumed with a ',
          position: {
            start: { line: 509, column: 343, offset: 16419 },
            end: { line: 509, column: 424, offset: 16500 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 509, column: 424, offset: 16500 },
            end: { line: 509, column: 440, offset: 16516 }
          }
        },
        {
          type: 'text',
          value: ' loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.',
          position: {
            start: { line: 509, column: 440, offset: 16516 },
            end: { line: 509, column: 699, offset: 16775 }
          }
        }
      ],
      position: {
        start: { line: 509, column: 1, offset: 16077 },
        end: { line: 509, column: 699, offset: 16775 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'class MyClass {\n' +
        '  constructor() {\n' +
        '  }\n' +
        '\n' +
        '  async * [Symbol.asyncIterator]() {\n' +
        '    yield 1\n' +
        '    yield 2\n' +
        '    yield 3\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const myInstance = new MyClass()\n' +
        '// myInstance created from MyClass is async iterable\n' +
        ';(async () => {\n' +
        '  for await (const item of myInstance) {\n' +
        '    console.log(item)\n' +
        '    // 1\n' +
        '    // 2\n' +
        '    // 3\n' +
        '  }\n' +
        '})()\n' +
        '\n' +
        'const myObject = {\n' +
        '  async * [Symbol.asyncIterator]() {\n' +
        '    yield 1\n' +
        '    yield 2\n' +
        '    yield 3\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// myObject is async iterable\n' +
        ';(async () => {\n' +
        '  for await (const item of myObject) {\n' +
        '    console.log(item)\n' +
        '    // 1\n' +
        '    // 2\n' +
        '    // 3\n' +
        '  }\n' +
        '})()',
      position: {
        start: { line: 511, column: 1, offset: 16777 },
        end: { line: 551, column: 4, offset: 17370 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can create async iterators is with async generator functions using the ',
          position: {
            start: { line: 553, column: 1, offset: 17372 },
            end: { line: 553, column: 76, offset: 17447 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 553, column: 76, offset: 17447 },
            end: { line: 553, column: 99, offset: 17470 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 553, column: 99, offset: 17470 },
            end: { line: 553, column: 115, offset: 17486 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 553, column: 115, offset: 17486 },
            end: { line: 553, column: 122, offset: 17493 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Async generator functions create async generators, a kind of async iterator.',
          position: {
            start: { line: 553, column: 122, offset: 17493 },
            end: { line: 553, column: 208, offset: 17579 }
          }
        }
      ],
      position: {
        start: { line: 553, column: 1, offset: 17372 },
        end: { line: 553, column: 208, offset: 17579 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'async function* myAsyncGeneratorFunction() {\n' +
        '  yield 1\n' +
        '  yield 2\n' +
        '  yield 3\n' +
        '}\n' +
        '\n' +
        '// the async generator function myAsyncGeneratorFunction creates an async generator myAsyncGenerator\n' +
        'const myAsyncGenerator = myAsyncGeneratorFunction()\n' +
        '\n' +
        '// myAsyncGenerator is async iterable\n' +
        'myAsyncGenerator[Symbol.asyncIterator]() // AsyncGenerator\n' +
        ';(async () => {\n' +
        '  for await (const item of myAsyncGenerator) {\n' +
        '    console.log(item)\n' +
        '    // 1\n' +
        '    // 2\n' +
        '    // 3\n' +
        '  }\n' +
        '})()',
      position: {
        start: { line: 555, column: 1, offset: 17581 },
        end: { line: 575, column: 4, offset: 18061 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Algebraic Structures',
          position: {
            start: { line: 577, column: 4, offset: 18066 },
            end: { line: 577, column: 24, offset: 18086 }
          }
        }
      ],
      position: {
        start: { line: 577, column: 1, offset: 18063 },
        end: { line: 577, column: 24, offset: 18086 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 578, column: 1, offset: 18087 },
            end: { line: 578, column: 253, offset: 18339 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 18087 },
        end: { line: 578, column: 253, offset: 18339 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 580, column: 1, offset: 18341 },
            end: { line: 580, column: 64, offset: 18404 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 64, offset: 18404 },
            end: { line: 580, column: 70, offset: 18410 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 580, column: 70, offset: 18410 },
            end: { line: 580, column: 103, offset: 18443 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 103, offset: 18443 },
            end: { line: 580, column: 109, offset: 18449 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 580, column: 109, offset: 18449 },
            end: { line: 580, column: 143, offset: 18483 }
          }
        }
      ],
      position: {
        start: { line: 580, column: 1, offset: 18341 },
        end: { line: 580, column: 143, offset: 18483 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  value: 'Identity Law: applying the identity function ',
                  position: {
                    start: { line: 582, column: 6, offset: 18490 },
                    end: { line: 582, column: 51, offset: 18535 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 582, column: 51, offset: 18535 },
                    end: { line: 582, column: 59, offset: 18543 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 582, column: 59, offset: 18543 },
                    end: { line: 582, column: 120, offset: 18604 }
                  }
                }
              ],
              position: {
                start: { line: 582, column: 6, offset: 18490 },
                end: { line: 582, column: 120, offset: 18604 }
              }
            }
          ],
          position: {
            start: { line: 582, column: 3, offset: 18487 },
            end: { line: 582, column: 120, offset: 18604 }
          }
        }
      ],
      position: {
        start: { line: 582, column: 3, offset: 18487 },
        end: { line: 582, column: 120, offset: 18604 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 584, column: 1, offset: 18606 },
        end: { line: 589, column: 4, offset: 18683 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 2,
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
                  value: 'Composition Law: applying two functions in sequence using ',
                  position: {
                    start: { line: 591, column: 6, offset: 18690 },
                    end: { line: 591, column: 64, offset: 18748 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 64, offset: 18748 },
                    end: { line: 591, column: 70, offset: 18754 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 591, column: 70, offset: 18754 },
                    end: { line: 591, column: 127, offset: 18811 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 127, offset: 18811 },
                    end: { line: 591, column: 133, offset: 18817 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 591, column: 133, offset: 18817 },
                    end: { line: 591, column: 144, offset: 18828 }
                  }
                }
              ],
              position: {
                start: { line: 591, column: 6, offset: 18690 },
                end: { line: 591, column: 144, offset: 18828 }
              }
            }
          ],
          position: {
            start: { line: 591, column: 3, offset: 18687 },
            end: { line: 591, column: 144, offset: 18828 }
          }
        }
      ],
      position: {
        start: { line: 591, column: 3, offset: 18687 },
        end: { line: 591, column: 144, offset: 18828 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myFunctor.map(f).map(g),\n' +
        '  myFunctor.map(compose([g, f]))\n' +
        ')',
      position: {
        start: { line: 593, column: 1, offset: 18830 },
        end: { line: 598, column: 4, offset: 18928 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 600, column: 1, offset: 18930 },
            end: { line: 600, column: 65, offset: 18994 }
          }
        }
      ],
      position: {
        start: { line: 600, column: 1, offset: 18930 },
        end: { line: 600, column: 65, offset: 18994 }
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
                  value: 'array',
                  position: {
                    start: { line: 601, column: 4, offset: 18998 },
                    end: { line: 601, column: 11, offset: 19005 }
                  }
                }
              ],
              position: {
                start: { line: 601, column: 4, offset: 18998 },
                end: { line: 601, column: 11, offset: 19005 }
              }
            }
          ],
          position: {
            start: { line: 601, column: 2, offset: 18996 },
            end: { line: 601, column: 11, offset: 19005 }
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
                  value: 'set',
                  position: {
                    start: { line: 602, column: 4, offset: 19009 },
                    end: { line: 602, column: 9, offset: 19014 }
                  }
                }
              ],
              position: {
                start: { line: 602, column: 4, offset: 19009 },
                end: { line: 602, column: 9, offset: 19014 }
              }
            }
          ],
          position: {
            start: { line: 602, column: 2, offset: 19007 },
            end: { line: 602, column: 9, offset: 19014 }
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
                  value: 'map',
                  position: {
                    start: { line: 603, column: 4, offset: 19018 },
                    end: { line: 603, column: 9, offset: 19023 }
                  }
                }
              ],
              position: {
                start: { line: 603, column: 4, offset: 19018 },
                end: { line: 603, column: 9, offset: 19023 }
              }
            }
          ],
          position: {
            start: { line: 603, column: 2, offset: 19016 },
            end: { line: 603, column: 9, offset: 19023 }
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
                  value: 'generator',
                  position: {
                    start: { line: 604, column: 4, offset: 19027 },
                    end: { line: 604, column: 15, offset: 19038 }
                  }
                }
              ],
              position: {
                start: { line: 604, column: 4, offset: 19027 },
                end: { line: 604, column: 15, offset: 19038 }
              }
            }
          ],
          position: {
            start: { line: 604, column: 2, offset: 19025 },
            end: { line: 604, column: 15, offset: 19038 }
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
                  value: 'async generator',
                  position: {
                    start: { line: 605, column: 4, offset: 19042 },
                    end: { line: 605, column: 21, offset: 19059 }
                  }
                }
              ],
              position: {
                start: { line: 605, column: 4, offset: 19042 },
                end: { line: 605, column: 21, offset: 19059 }
              }
            }
          ],
          position: {
            start: { line: 605, column: 2, offset: 19040 },
            end: { line: 605, column: 21, offset: 19059 }
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
                  value: 'object',
                  position: {
                    start: { line: 606, column: 4, offset: 19063 },
                    end: { line: 606, column: 12, offset: 19071 }
                  }
                }
              ],
              position: {
                start: { line: 606, column: 4, offset: 19063 },
                end: { line: 606, column: 12, offset: 19071 }
              }
            }
          ],
          position: {
            start: { line: 606, column: 2, offset: 19061 },
            end: { line: 606, column: 12, offset: 19071 }
          }
        }
      ],
      position: {
        start: { line: 601, column: 2, offset: 18996 },
        end: { line: 606, column: 12, offset: 19071 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 608, column: 1, offset: 19073 },
            end: { line: 608, column: 67, offset: 19139 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 67, offset: 19139 },
            end: { line: 608, column: 76, offset: 19148 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 608, column: 76, offset: 19148 },
            end: { line: 608, column: 109, offset: 19181 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 109, offset: 19181 },
            end: { line: 608, column: 118, offset: 19190 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 608, column: 118, offset: 19190 },
            end: { line: 608, column: 154, offset: 19226 }
          }
        }
      ],
      position: {
        start: { line: 608, column: 1, offset: 19073 },
        end: { line: 608, column: 154, offset: 19226 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  value: 'Distributivity Law: applying two predicate functions in sequence using consecutive calls to ',
                  position: {
                    start: { line: 610, column: 6, offset: 19233 },
                    end: { line: 610, column: 98, offset: 19325 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 98, offset: 19325 },
                    end: { line: 610, column: 107, offset: 19334 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 610, column: 107, offset: 19334 },
                    end: { line: 610, column: 210, offset: 19437 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 210, offset: 19437 },
                    end: { line: 610, column: 219, offset: 19446 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 610, column: 219, offset: 19446 },
                    end: { line: 610, column: 220, offset: 19447 }
                  }
                }
              ],
              position: {
                start: { line: 610, column: 6, offset: 19233 },
                end: { line: 610, column: 220, offset: 19447 }
              }
            }
          ],
          position: {
            start: { line: 610, column: 3, offset: 19230 },
            end: { line: 610, column: 220, offset: 19447 }
          }
        }
      ],
      position: {
        start: { line: 610, column: 3, offset: 19230 },
        end: { line: 610, column: 220, offset: 19447 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myFilterable.filter(x => f(x) && g(x)),\n' +
        '  myFilterable.filter(f).filter(g)\n' +
        ')',
      position: {
        start: { line: 612, column: 1, offset: 19449 },
        end: { line: 617, column: 4, offset: 19564 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 2,
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
                  value: 'Identity Law: applying a predicate function that always returns true is equivalent to not having applied a function.',
                  position: {
                    start: { line: 619, column: 6, offset: 19571 },
                    end: { line: 619, column: 122, offset: 19687 }
                  }
                }
              ],
              position: {
                start: { line: 619, column: 6, offset: 19571 },
                end: { line: 619, column: 122, offset: 19687 }
              }
            }
          ],
          position: {
            start: { line: 619, column: 3, offset: 19568 },
            end: { line: 619, column: 122, offset: 19687 }
          }
        }
      ],
      position: {
        start: { line: 619, column: 3, offset: 19568 },
        end: { line: 619, column: 122, offset: 19687 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 621, column: 1, offset: 19689 },
        end: { line: 626, column: 4, offset: 19777 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 3,
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
                  value: 'Annihilation Law: given two distinct filterables, applying a predicate function that always returns false to both filterables produces equivalent results.',
                  position: {
                    start: { line: 628, column: 6, offset: 19784 },
                    end: { line: 628, column: 160, offset: 19938 }
                  }
                }
              ],
              position: {
                start: { line: 628, column: 6, offset: 19784 },
                end: { line: 628, column: 160, offset: 19938 }
              }
            }
          ],
          position: {
            start: { line: 628, column: 3, offset: 19781 },
            end: { line: 628, column: 160, offset: 19938 }
          }
        }
      ],
      position: {
        start: { line: 628, column: 3, offset: 19781 },
        end: { line: 628, column: 160, offset: 19938 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myFilterableA.filter(() => false),\n' +
        '  myFilterableB.filter(() => false)\n' +
        ')',
      position: {
        start: { line: 630, column: 1, offset: 19940 },
        end: { line: 635, column: 4, offset: 20051 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 637, column: 1, offset: 20053 },
            end: { line: 637, column: 68, offset: 20120 }
          }
        }
      ],
      position: {
        start: { line: 637, column: 1, offset: 20053 },
        end: { line: 637, column: 68, offset: 20120 }
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
                  value: 'array',
                  position: {
                    start: { line: 638, column: 4, offset: 20124 },
                    end: { line: 638, column: 11, offset: 20131 }
                  }
                }
              ],
              position: {
                start: { line: 638, column: 4, offset: 20124 },
                end: { line: 638, column: 11, offset: 20131 }
              }
            }
          ],
          position: {
            start: { line: 638, column: 2, offset: 20122 },
            end: { line: 638, column: 11, offset: 20131 }
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
                  value: 'set',
                  position: {
                    start: { line: 639, column: 4, offset: 20135 },
                    end: { line: 639, column: 9, offset: 20140 }
                  }
                }
              ],
              position: {
                start: { line: 639, column: 4, offset: 20135 },
                end: { line: 639, column: 9, offset: 20140 }
              }
            }
          ],
          position: {
            start: { line: 639, column: 2, offset: 20133 },
            end: { line: 639, column: 9, offset: 20140 }
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
                  value: 'map',
                  position: {
                    start: { line: 640, column: 4, offset: 20144 },
                    end: { line: 640, column: 9, offset: 20149 }
                  }
                }
              ],
              position: {
                start: { line: 640, column: 4, offset: 20144 },
                end: { line: 640, column: 9, offset: 20149 }
              }
            }
          ],
          position: {
            start: { line: 640, column: 2, offset: 20142 },
            end: { line: 640, column: 9, offset: 20149 }
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
                  value: 'generator',
                  position: {
                    start: { line: 641, column: 4, offset: 20153 },
                    end: { line: 641, column: 15, offset: 20164 }
                  }
                }
              ],
              position: {
                start: { line: 641, column: 4, offset: 20153 },
                end: { line: 641, column: 15, offset: 20164 }
              }
            }
          ],
          position: {
            start: { line: 641, column: 2, offset: 20151 },
            end: { line: 641, column: 15, offset: 20164 }
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
                  value: 'async generator',
                  position: {
                    start: { line: 642, column: 4, offset: 20168 },
                    end: { line: 642, column: 21, offset: 20185 }
                  }
                }
              ],
              position: {
                start: { line: 642, column: 4, offset: 20168 },
                end: { line: 642, column: 21, offset: 20185 }
              }
            }
          ],
          position: {
            start: { line: 642, column: 2, offset: 20166 },
            end: { line: 642, column: 21, offset: 20185 }
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
                  value: 'object',
                  position: {
                    start: { line: 643, column: 4, offset: 20189 },
                    end: { line: 643, column: 12, offset: 20197 }
                  }
                }
              ],
              position: {
                start: { line: 643, column: 4, offset: 20189 },
                end: { line: 643, column: 12, offset: 20197 }
              }
            }
          ],
          position: {
            start: { line: 643, column: 2, offset: 20187 },
            end: { line: 643, column: 12, offset: 20197 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 2, offset: 20122 },
        end: { line: 643, column: 12, offset: 20197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 645, column: 1, offset: 20199 },
            end: { line: 645, column: 65, offset: 20263 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 65, offset: 20263 },
            end: { line: 645, column: 74, offset: 20272 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 645, column: 74, offset: 20272 },
            end: { line: 645, column: 107, offset: 20305 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 107, offset: 20305 },
            end: { line: 645, column: 116, offset: 20314 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 645, column: 116, offset: 20314 },
            end: { line: 645, column: 151, offset: 20349 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 20199 },
        end: { line: 645, column: 152, offset: 20350 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  value: 'A given reducing operation is equivalent to two chained reducing operations with ',
                  position: {
                    start: { line: 647, column: 6, offset: 20357 },
                    end: { line: 647, column: 87, offset: 20438 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 647, column: 87, offset: 20438 },
                    end: { line: 647, column: 96, offset: 20447 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 647, column: 96, offset: 20447 },
                    end: { line: 647, column: 254, offset: 20605 }
                  }
                }
              ],
              position: {
                start: { line: 647, column: 6, offset: 20357 },
                end: { line: 647, column: 254, offset: 20605 }
              }
            }
          ],
          position: {
            start: { line: 647, column: 3, offset: 20354 },
            end: { line: 647, column: 254, offset: 20605 }
          }
        }
      ],
      position: {
        start: { line: 647, column: 3, offset: 20354 },
        end: { line: 647, column: 254, offset: 20605 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myFoldable.reduce(reducer),\n' +
        '  myFoldable\n' +
        '    .reduce((accumulator, item) => accumulator.concat([item]) , [])\n' +
        '    .reduce(reducer)\n' +
        ')',
      position: {
        start: { line: 649, column: 1, offset: 20607 },
        end: { line: 656, column: 4, offset: 20777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 658, column: 1, offset: 20779 },
            end: { line: 658, column: 66, offset: 20844 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 20779 },
        end: { line: 658, column: 66, offset: 20844 }
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
                  value: 'array',
                  position: {
                    start: { line: 659, column: 4, offset: 20848 },
                    end: { line: 659, column: 11, offset: 20855 }
                  }
                }
              ],
              position: {
                start: { line: 659, column: 4, offset: 20848 },
                end: { line: 659, column: 11, offset: 20855 }
              }
            }
          ],
          position: {
            start: { line: 659, column: 2, offset: 20846 },
            end: { line: 659, column: 11, offset: 20855 }
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
                  value: 'set',
                  position: {
                    start: { line: 660, column: 4, offset: 20859 },
                    end: { line: 660, column: 9, offset: 20864 }
                  }
                }
              ],
              position: {
                start: { line: 660, column: 4, offset: 20859 },
                end: { line: 660, column: 9, offset: 20864 }
              }
            }
          ],
          position: {
            start: { line: 660, column: 2, offset: 20857 },
            end: { line: 660, column: 9, offset: 20864 }
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
                  value: 'map',
                  position: {
                    start: { line: 661, column: 4, offset: 20868 },
                    end: { line: 661, column: 9, offset: 20873 }
                  }
                }
              ],
              position: {
                start: { line: 661, column: 4, offset: 20868 },
                end: { line: 661, column: 9, offset: 20873 }
              }
            }
          ],
          position: {
            start: { line: 661, column: 2, offset: 20866 },
            end: { line: 661, column: 9, offset: 20873 }
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
                  value: 'generator',
                  position: {
                    start: { line: 662, column: 4, offset: 20877 },
                    end: { line: 662, column: 15, offset: 20888 }
                  }
                }
              ],
              position: {
                start: { line: 662, column: 4, offset: 20877 },
                end: { line: 662, column: 15, offset: 20888 }
              }
            }
          ],
          position: {
            start: { line: 662, column: 2, offset: 20875 },
            end: { line: 662, column: 15, offset: 20888 }
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
                  value: 'async generator',
                  position: {
                    start: { line: 663, column: 4, offset: 20892 },
                    end: { line: 663, column: 21, offset: 20909 }
                  }
                }
              ],
              position: {
                start: { line: 663, column: 4, offset: 20892 },
                end: { line: 663, column: 21, offset: 20909 }
              }
            }
          ],
          position: {
            start: { line: 663, column: 2, offset: 20890 },
            end: { line: 663, column: 21, offset: 20909 }
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
                  value: 'object',
                  position: {
                    start: { line: 664, column: 4, offset: 20913 },
                    end: { line: 664, column: 12, offset: 20921 }
                  }
                }
              ],
              position: {
                start: { line: 664, column: 4, offset: 20913 },
                end: { line: 664, column: 12, offset: 20921 }
              }
            }
          ],
          position: {
            start: { line: 664, column: 2, offset: 20911 },
            end: { line: 664, column: 12, offset: 20921 }
          }
        }
      ],
      position: {
        start: { line: 659, column: 2, offset: 20846 },
        end: { line: 664, column: 12, offset: 20921 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 666, column: 1, offset: 20923 },
            end: { line: 666, column: 66, offset: 20988 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 66, offset: 20988 },
            end: { line: 666, column: 75, offset: 20997 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 666, column: 75, offset: 20997 },
            end: { line: 666, column: 108, offset: 21030 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 108, offset: 21030 },
            end: { line: 666, column: 117, offset: 21039 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 666, column: 117, offset: 21039 },
            end: { line: 666, column: 153, offset: 21075 }
          }
        }
      ],
      position: {
        start: { line: 666, column: 1, offset: 20923 },
        end: { line: 666, column: 153, offset: 21075 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  value: 'Associativity: when concatenating three elements, concatenating the first and then the last two is the same as concatenating the first two and then the last.',
                  position: {
                    start: { line: 668, column: 6, offset: 21082 },
                    end: { line: 668, column: 163, offset: 21239 }
                  }
                }
              ],
              position: {
                start: { line: 668, column: 6, offset: 21082 },
                end: { line: 668, column: 163, offset: 21239 }
              }
            }
          ],
          position: {
            start: { line: 668, column: 3, offset: 21079 },
            end: { line: 668, column: 163, offset: 21239 }
          }
        }
      ],
      position: {
        start: { line: 668, column: 3, offset: 21079 },
        end: { line: 668, column: 163, offset: 21239 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  mySemigroup.concat(a).concat(b, c),\n' +
        '  mySemigroup.concat(a, b).concat(c),\n' +
        ')',
      position: {
        start: { line: 670, column: 1, offset: 21241 },
        end: { line: 675, column: 4, offset: 21355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 677, column: 1, offset: 21357 },
            end: { line: 677, column: 67, offset: 21423 }
          }
        }
      ],
      position: {
        start: { line: 677, column: 1, offset: 21357 },
        end: { line: 677, column: 67, offset: 21423 }
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
                  value: 'array',
                  position: {
                    start: { line: 678, column: 4, offset: 21427 },
                    end: { line: 678, column: 11, offset: 21434 }
                  }
                }
              ],
              position: {
                start: { line: 678, column: 4, offset: 21427 },
                end: { line: 678, column: 11, offset: 21434 }
              }
            }
          ],
          position: {
            start: { line: 678, column: 2, offset: 21425 },
            end: { line: 678, column: 11, offset: 21434 }
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
                  value: 'string',
                  position: {
                    start: { line: 679, column: 4, offset: 21438 },
                    end: { line: 679, column: 12, offset: 21446 }
                  }
                }
              ],
              position: {
                start: { line: 679, column: 4, offset: 21438 },
                end: { line: 679, column: 12, offset: 21446 }
              }
            }
          ],
          position: {
            start: { line: 679, column: 2, offset: 21436 },
            end: { line: 679, column: 12, offset: 21446 }
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
                  value: 'set',
                  position: {
                    start: { line: 680, column: 4, offset: 21450 },
                    end: { line: 680, column: 9, offset: 21455 }
                  }
                }
              ],
              position: {
                start: { line: 680, column: 4, offset: 21450 },
                end: { line: 680, column: 9, offset: 21455 }
              }
            }
          ],
          position: {
            start: { line: 680, column: 2, offset: 21448 },
            end: { line: 680, column: 9, offset: 21455 }
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
                  value: 'binary',
                  position: {
                    start: { line: 681, column: 4, offset: 21459 },
                    end: { line: 681, column: 12, offset: 21467 }
                  }
                }
              ],
              position: {
                start: { line: 681, column: 4, offset: 21459 },
                end: { line: 681, column: 12, offset: 21467 }
              }
            }
          ],
          position: {
            start: { line: 681, column: 2, offset: 21457 },
            end: { line: 681, column: 12, offset: 21467 }
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
                  value: 'object',
                  position: {
                    start: { line: 682, column: 4, offset: 21471 },
                    end: { line: 682, column: 12, offset: 21479 }
                  }
                }
              ],
              position: {
                start: { line: 682, column: 4, offset: 21471 },
                end: { line: 682, column: 12, offset: 21479 }
              }
            }
          ],
          position: {
            start: { line: 682, column: 2, offset: 21469 },
            end: { line: 682, column: 12, offset: 21479 }
          }
        }
      ],
      position: {
        start: { line: 678, column: 2, offset: 21425 },
        end: { line: 682, column: 12, offset: 21479 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 684, column: 1, offset: 21481 },
            end: { line: 684, column: 62, offset: 21542 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 62, offset: 21542 },
            end: { line: 684, column: 72, offset: 21552 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 72, offset: 21552 },
            end: { line: 684, column: 76, offset: 21556 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 76, offset: 21556 },
            end: { line: 684, column: 84, offset: 21564 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 684, column: 84, offset: 21564 },
            end: { line: 684, column: 118, offset: 21598 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 118, offset: 21598 },
            end: { line: 684, column: 128, offset: 21608 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 128, offset: 21608 },
            end: { line: 684, column: 132, offset: 21612 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 132, offset: 21612 },
            end: { line: 684, column: 140, offset: 21620 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 684, column: 140, offset: 21620 },
            end: { line: 684, column: 172, offset: 21652 }
          }
        }
      ],
      position: {
        start: { line: 684, column: 1, offset: 21481 },
        end: { line: 684, column: 172, offset: 21652 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 1,
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
                  value: "Left Identity: wrapping a value in a monad and then calling the monad's ",
                  position: {
                    start: { line: 686, column: 6, offset: 21659 },
                    end: { line: 686, column: 78, offset: 21731 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 686, column: 78, offset: 21731 },
                    end: { line: 686, column: 88, offset: 21741 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 686, column: 88, offset: 21741 },
                    end: { line: 686, column: 92, offset: 21745 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 686, column: 92, offset: 21745 },
                    end: { line: 686, column: 100, offset: 21753 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 686, column: 100, offset: 21753 },
                    end: { line: 686, column: 178, offset: 21831 }
                  }
                }
              ],
              position: {
                start: { line: 686, column: 6, offset: 21659 },
                end: { line: 686, column: 178, offset: 21831 }
              }
            }
          ],
          position: {
            start: { line: 686, column: 3, offset: 21656 },
            end: { line: 686, column: 178, offset: 21831 }
          }
        }
      ],
      position: {
        start: { line: 686, column: 3, offset: 21656 },
        end: { line: 686, column: 178, offset: 21831 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).chain(f),\n  f(a),\n)',
      position: {
        start: { line: 688, column: 1, offset: 21833 },
        end: { line: 693, column: 4, offset: 21905 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 2,
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
                  value: 'Right Identity: given a monad, chaining a function that wraps a value in a monad should result in the given monad.',
                  position: {
                    start: { line: 695, column: 6, offset: 21912 },
                    end: { line: 695, column: 120, offset: 22026 }
                  }
                }
              ],
              position: {
                start: { line: 695, column: 6, offset: 21912 },
                end: { line: 695, column: 120, offset: 22026 }
              }
            }
          ],
          position: {
            start: { line: 695, column: 3, offset: 21909 },
            end: { line: 695, column: 120, offset: 22026 }
          }
        }
      ],
      position: {
        start: { line: 695, column: 3, offset: 21909 },
        end: { line: 695, column: 120, offset: 22026 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.chain(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 697, column: 1, offset: 22028 },
        end: { line: 702, column: 4, offset: 22105 }
      }
    },
    {
      type: 'list',
      ordered: true,
      start: 3,
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
                  value: 'Associativity: the order of execution of chaining operations on a monad does not affect the final result.',
                  position: {
                    start: { line: 704, column: 6, offset: 22112 },
                    end: { line: 704, column: 111, offset: 22217 }
                  }
                }
              ],
              position: {
                start: { line: 704, column: 6, offset: 22112 },
                end: { line: 704, column: 111, offset: 22217 }
              }
            }
          ],
          position: {
            start: { line: 704, column: 3, offset: 22109 },
            end: { line: 704, column: 111, offset: 22217 }
          }
        }
      ],
      position: {
        start: { line: 704, column: 3, offset: 22109 },
        end: { line: 704, column: 111, offset: 22217 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myMonad.chain(f).chain(g),\n' +
        '  myMonad.chain(x => f(x).chain(g))\n' +
        ')',
      position: {
        start: { line: 706, column: 1, offset: 22219 },
        end: { line: 711, column: 4, offset: 22322 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 713, column: 1, offset: 22324 },
            end: { line: 713, column: 63, offset: 22386 }
          }
        }
      ],
      position: {
        start: { line: 713, column: 1, offset: 22324 },
        end: { line: 713, column: 63, offset: 22386 }
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
                  value: 'array',
                  position: {
                    start: { line: 714, column: 4, offset: 22390 },
                    end: { line: 714, column: 11, offset: 22397 }
                  }
                }
              ],
              position: {
                start: { line: 714, column: 4, offset: 22390 },
                end: { line: 714, column: 11, offset: 22397 }
              }
            }
          ],
          position: {
            start: { line: 714, column: 2, offset: 22388 },
            end: { line: 714, column: 11, offset: 22397 }
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
                  value: 'string',
                  position: {
                    start: { line: 715, column: 4, offset: 22401 },
                    end: { line: 715, column: 12, offset: 22409 }
                  }
                }
              ],
              position: {
                start: { line: 715, column: 4, offset: 22401 },
                end: { line: 715, column: 12, offset: 22409 }
              }
            }
          ],
          position: {
            start: { line: 715, column: 2, offset: 22399 },
            end: { line: 715, column: 12, offset: 22409 }
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
                  value: 'set',
                  position: {
                    start: { line: 716, column: 4, offset: 22413 },
                    end: { line: 716, column: 9, offset: 22418 }
                  }
                }
              ],
              position: {
                start: { line: 716, column: 4, offset: 22413 },
                end: { line: 716, column: 9, offset: 22418 }
              }
            }
          ],
          position: {
            start: { line: 716, column: 2, offset: 22411 },
            end: { line: 716, column: 9, offset: 22418 }
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
                  value: 'genreator',
                  position: {
                    start: { line: 717, column: 4, offset: 22422 },
                    end: { line: 717, column: 15, offset: 22433 }
                  }
                }
              ],
              position: {
                start: { line: 717, column: 4, offset: 22422 },
                end: { line: 717, column: 15, offset: 22433 }
              }
            }
          ],
          position: {
            start: { line: 717, column: 2, offset: 22420 },
            end: { line: 717, column: 15, offset: 22433 }
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
                  value: 'async generator',
                  position: {
                    start: { line: 718, column: 4, offset: 22437 },
                    end: { line: 718, column: 21, offset: 22454 }
                  }
                }
              ],
              position: {
                start: { line: 718, column: 4, offset: 22437 },
                end: { line: 718, column: 21, offset: 22454 }
              }
            }
          ],
          position: {
            start: { line: 718, column: 2, offset: 22435 },
            end: { line: 718, column: 21, offset: 22454 }
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
                  value: 'object',
                  position: {
                    start: { line: 719, column: 4, offset: 22458 },
                    end: { line: 719, column: 12, offset: 22466 }
                  }
                }
              ],
              position: {
                start: { line: 719, column: 4, offset: 22458 },
                end: { line: 719, column: 12, offset: 22466 }
              }
            }
          ],
          position: {
            start: { line: 719, column: 2, offset: 22456 },
            end: { line: 719, column: 12, offset: 22466 }
          }
        }
      ],
      position: {
        start: { line: 714, column: 2, offset: 22388 },
        end: { line: 719, column: 12, offset: 22466 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 721, column: 4, offset: 22471 },
            end: { line: 721, column: 14, offset: 22481 }
          }
        }
      ],
      position: {
        start: { line: 721, column: 1, offset: 22468 },
        end: { line: 721, column: 14, offset: 22481 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 723, column: 1, offset: 22483 },
            end: { line: 723, column: 85, offset: 22567 }
          }
        }
      ],
      position: {
        start: { line: 723, column: 1, offset: 22483 },
        end: { line: 723, column: 85, offset: 22567 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 725, column: 1, offset: 22569 },
            end: { line: 725, column: 141, offset: 22709 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'rubico.land',
              position: {
                start: { line: 725, column: 142, offset: 22710 },
                end: { line: 725, column: 153, offset: 22721 }
              }
            }
          ],
          position: {
            start: { line: 725, column: 141, offset: 22709 },
            end: { line: 725, column: 176, offset: 22744 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 725, column: 176, offset: 22744 },
            end: { line: 725, column: 177, offset: 22745 }
          }
        }
      ],
      position: {
        start: { line: 725, column: 1, offset: 22569 },
        end: { line: 725, column: 177, offset: 22745 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 726, column: 1, offset: 22746 }
  }
}