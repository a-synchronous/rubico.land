export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-09\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types used for the [A]synchronous Functional Programming paradigm\n' +
        'image: https://cdn.cloutsworld.com/assets/tmp/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 339 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to [A]synchronous Functional Programming Data Types. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 10, column: 1, offset: 341 },
            end: { line: 10, column: 183, offset: 523 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 341 },
        end: { line: 10, column: 183, offset: 523 }
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
            start: { line: 12, column: 4, offset: 528 },
            end: { line: 12, column: 24, offset: 548 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 525 },
        end: { line: 12, column: 24, offset: 548 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 13, column: 1, offset: 549 },
            end: { line: 13, column: 250, offset: 798 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 549 },
        end: { line: 13, column: 250, offset: 798 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 15, column: 1, offset: 800 },
            end: { line: 15, column: 64, offset: 863 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 15, column: 64, offset: 863 },
            end: { line: 15, column: 67, offset: 866 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 15, column: 67, offset: 866 },
            end: { line: 15, column: 105, offset: 904 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 15, column: 105, offset: 904 },
            end: { line: 15, column: 110, offset: 909 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 15, column: 110, offset: 909 },
            end: { line: 15, column: 185, offset: 984 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 800 },
        end: { line: 15, column: 185, offset: 984 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 17, column: 1, offset: 986 },
        end: { line: 19, column: 4, offset: 1005 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 21, column: 1, offset: 1007 },
            end: { line: 21, column: 22, offset: 1028 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 22, offset: 1028 },
            end: { line: 21, column: 30, offset: 1036 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 21, column: 30, offset: 1036 },
            end: { line: 21, column: 79, offset: 1085 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 79, offset: 1085 },
            end: { line: 21, column: 87, offset: 1093 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 21, column: 87, offset: 1093 },
            end: { line: 21, column: 147, offset: 1153 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1007 },
        end: { line: 21, column: 147, offset: 1153 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 23, column: 1, offset: 1155 },
        end: { line: 25, column: 4, offset: 1189 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 27, column: 1, offset: 1191 },
            end: { line: 27, column: 56, offset: 1246 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 27, column: 56, offset: 1246 },
            end: { line: 27, column: 63, offset: 1253 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 27, column: 63, offset: 1253 },
            end: { line: 27, column: 67, offset: 1257 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 27, column: 67, offset: 1257 },
            end: { line: 27, column: 83, offset: 1273 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 27, column: 83, offset: 1273 },
            end: { line: 27, column: 249, offset: 1439 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1191 },
        end: { line: 27, column: 249, offset: 1439 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 29, column: 1, offset: 1441 },
        end: { line: 31, column: 4, offset: 1473 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 33, column: 1, offset: 1475 },
            end: { line: 33, column: 22, offset: 1496 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 22, offset: 1496 },
            end: { line: 33, column: 30, offset: 1504 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 33, column: 30, offset: 1504 },
            end: { line: 33, column: 79, offset: 1553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 79, offset: 1553 },
            end: { line: 33, column: 87, offset: 1561 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 33, column: 87, offset: 1561 },
            end: { line: 33, column: 147, offset: 1621 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1475 },
        end: { line: 33, column: 147, offset: 1621 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 35, column: 1, offset: 1623 },
        end: { line: 37, column: 4, offset: 1657 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 39, column: 1, offset: 1659 },
            end: { line: 39, column: 63, offset: 1721 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 39, column: 63, offset: 1721 },
            end: { line: 39, column: 69, offset: 1727 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 39, column: 69, offset: 1727 },
            end: { line: 39, column: 73, offset: 1731 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 39, column: 73, offset: 1731 },
            end: { line: 39, column: 80, offset: 1738 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 39, column: 80, offset: 1738 },
            end: { line: 39, column: 135, offset: 1793 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1659 },
        end: { line: 39, column: 135, offset: 1793 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 41, column: 1, offset: 1795 },
        end: { line: 43, column: 4, offset: 1817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 45, column: 1, offset: 1819 },
            end: { line: 45, column: 130, offset: 1948 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 45, column: 130, offset: 1948 },
            end: { line: 45, column: 134, offset: 1952 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 134, offset: 1952 },
            end: { line: 45, column: 136, offset: 1954 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 45, column: 136, offset: 1954 },
            end: { line: 45, column: 139, offset: 1957 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 139, offset: 1957 },
            end: { line: 45, column: 141, offset: 1959 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 45, column: 141, offset: 1959 },
            end: { line: 45, column: 144, offset: 1962 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 144, offset: 1962 },
            end: { line: 45, column: 146, offset: 1964 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 45, column: 146, offset: 1964 },
            end: { line: 45, column: 150, offset: 1968 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 150, offset: 1968 },
            end: { line: 45, column: 152, offset: 1970 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 45, column: 152, offset: 1970 },
            end: { line: 45, column: 156, offset: 1974 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 156, offset: 1974 },
            end: { line: 45, column: 158, offset: 1976 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 45, column: 158, offset: 1976 },
            end: { line: 45, column: 162, offset: 1980 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 45, column: 162, offset: 1980 },
            end: { line: 45, column: 167, offset: 1985 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 45, column: 167, offset: 1985 },
            end: { line: 45, column: 171, offset: 1989 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 45, column: 171, offset: 1989 },
            end: { line: 45, column: 213, offset: 2031 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 45, column: 213, offset: 2031 },
            end: { line: 45, column: 217, offset: 2035 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 45, column: 217, offset: 2035 },
            end: { line: 45, column: 255, offset: 2073 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1819 },
        end: { line: 45, column: 255, offset: 2073 }
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
        start: { line: 47, column: 1, offset: 2075 },
        end: { line: 54, column: 4, offset: 2212 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 56, column: 1, offset: 2214 },
            end: { line: 56, column: 22, offset: 2235 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 56, column: 22, offset: 2235 },
            end: { line: 56, column: 31, offset: 2244 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 56, column: 31, offset: 2244 },
            end: { line: 56, column: 64, offset: 2277 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2214 },
        end: { line: 56, column: 64, offset: 2277 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 58, column: 1, offset: 2279 },
        end: { line: 60, column: 4, offset: 2316 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 62, column: 1, offset: 2318 },
            end: { line: 62, column: 206, offset: 2523 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2318 },
        end: { line: 62, column: 206, offset: 2523 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 64, column: 1, offset: 2525 },
        end: { line: 67, column: 4, offset: 2610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 69, column: 1, offset: 2612 },
            end: { line: 69, column: 141, offset: 2752 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2612 },
        end: { line: 69, column: 141, offset: 2752 }
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
        start: { line: 71, column: 1, offset: 2754 },
        end: { line: 77, column: 4, offset: 2925 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 79, column: 1, offset: 2927 },
            end: { line: 79, column: 54, offset: 2980 }
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
                start: { line: 79, column: 55, offset: 2981 },
                end: { line: 79, column: 64, offset: 2990 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 54, offset: 2980 },
            end: { line: 79, column: 126, offset: 3052 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 79, column: 126, offset: 3052 },
            end: { line: 79, column: 195, offset: 3121 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2927 },
        end: { line: 79, column: 195, offset: 3121 }
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
        start: { line: 81, column: 1, offset: 3123 },
        end: { line: 86, column: 4, offset: 3290 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 88, column: 1, offset: 3292 },
            end: { line: 88, column: 130, offset: 3421 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 88, column: 130, offset: 3421 },
            end: { line: 88, column: 140, offset: 3431 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 88, column: 140, offset: 3431 },
            end: { line: 88, column: 150, offset: 3441 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 88, column: 150, offset: 3441 },
            end: { line: 88, column: 163, offset: 3454 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 88, column: 163, offset: 3454 },
            end: { line: 88, column: 164, offset: 3455 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3292 },
        end: { line: 88, column: 164, offset: 3455 }
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
        start: { line: 90, column: 1, offset: 3457 },
        end: { line: 99, column: 4, offset: 3626 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 101, column: 1, offset: 3628 },
            end: { line: 101, column: 34, offset: 3661 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 101, column: 34, offset: 3661 },
            end: { line: 101, column: 51, offset: 3678 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 51, offset: 3678 },
            end: { line: 101, column: 56, offset: 3683 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 101, column: 56, offset: 3683 },
            end: { line: 101, column: 78, offset: 3705 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 101, column: 78, offset: 3705 },
            end: { line: 101, column: 185, offset: 3812 }
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
                start: { line: 101, column: 186, offset: 3813 },
                end: { line: 101, column: 203, offset: 3830 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 185, offset: 3812 },
            end: { line: 101, column: 313, offset: 3940 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 313, offset: 3940 },
            end: { line: 101, column: 318, offset: 3945 }
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
                start: { line: 101, column: 319, offset: 3946 },
                end: { line: 101, column: 342, offset: 3969 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 318, offset: 3945 },
            end: { line: 101, column: 478, offset: 4105 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3628 },
        end: { line: 101, column: 478, offset: 4105 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 103, column: 1, offset: 4107 },
            end: { line: 103, column: 104, offset: 4210 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 104, offset: 4210 },
            end: { line: 103, column: 110, offset: 4216 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 103, column: 110, offset: 4216 },
            end: { line: 103, column: 115, offset: 4221 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 115, offset: 4221 },
            end: { line: 103, column: 126, offset: 4232 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 103, column: 126, offset: 4232 },
            end: { line: 103, column: 295, offset: 4401 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 295, offset: 4401 },
            end: { line: 103, column: 301, offset: 4407 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 103, column: 301, offset: 4407 },
            end: { line: 103, column: 397, offset: 4503 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 397, offset: 4503 },
            end: { line: 103, column: 408, offset: 4514 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 103, column: 408, offset: 4514 },
            end: { line: 103, column: 451, offset: 4557 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 451, offset: 4557 },
            end: { line: 103, column: 462, offset: 4568 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 103, column: 462, offset: 4568 },
            end: { line: 103, column: 479, offset: 4585 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 4107 },
        end: { line: 103, column: 479, offset: 4585 }
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
        start: { line: 105, column: 1, offset: 4587 },
        end: { line: 118, column: 4, offset: 4865 }
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
            start: { line: 120, column: 5, offset: 4871 },
            end: { line: 120, column: 42, offset: 4908 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4867 },
        end: { line: 120, column: 42, offset: 4908 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 121, column: 1, offset: 4909 },
            end: { line: 121, column: 329, offset: 5237 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4909 },
        end: { line: 121, column: 329, offset: 5237 }
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
            start: { line: 123, column: 4, offset: 5242 },
            end: { line: 123, column: 25, offset: 5263 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 5239 },
        end: { line: 123, column: 25, offset: 5263 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 124, column: 1, offset: 5264 },
            end: { line: 124, column: 429, offset: 5692 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5264 },
        end: { line: 124, column: 429, offset: 5692 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 126, column: 1, offset: 5694 },
            end: { line: 126, column: 175, offset: 5868 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 126, column: 175, offset: 5868 },
            end: { line: 126, column: 182, offset: 5875 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 126, column: 182, offset: 5875 },
            end: { line: 126, column: 195, offset: 5888 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5694 },
        end: { line: 126, column: 195, offset: 5888 }
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
        start: { line: 128, column: 1, offset: 5890 },
        end: { line: 136, column: 4, offset: 6157 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 138, column: 1, offset: 6159 },
            end: { line: 138, column: 56, offset: 6214 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 138, column: 56, offset: 6214 },
            end: { line: 138, column: 63, offset: 6221 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 138, column: 63, offset: 6221 },
            end: { line: 138, column: 76, offset: 6234 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 6159 },
        end: { line: 138, column: 76, offset: 6234 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 140, column: 1, offset: 6236 },
        end: { line: 143, column: 4, offset: 6349 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 145, column: 1, offset: 6351 },
            end: { line: 145, column: 40, offset: 6390 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 145, column: 40, offset: 6390 },
            end: { line: 145, column: 48, offset: 6398 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 145, column: 48, offset: 6398 },
            end: { line: 145, column: 53, offset: 6403 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 145, column: 53, offset: 6403 },
            end: { line: 145, column: 59, offset: 6409 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 145, column: 59, offset: 6409 },
            end: { line: 145, column: 83, offset: 6433 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 6351 },
        end: { line: 145, column: 83, offset: 6433 }
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
        start: { line: 147, column: 1, offset: 6435 },
        end: { line: 152, column: 4, offset: 6562 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 154, column: 1, offset: 6564 },
            end: { line: 154, column: 42, offset: 6605 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 154, column: 42, offset: 6605 },
            end: { line: 154, column: 49, offset: 6612 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 154, column: 49, offset: 6612 },
            end: { line: 154, column: 66, offset: 6629 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 6564 },
        end: { line: 154, column: 66, offset: 6629 }
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
        start: { line: 156, column: 1, offset: 6631 },
        end: { line: 162, column: 4, offset: 6736 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 164, column: 1, offset: 6738 },
            end: { line: 164, column: 42, offset: 6779 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 164, column: 42, offset: 6779 },
            end: { line: 164, column: 51, offset: 6788 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 164, column: 51, offset: 6788 },
            end: { line: 164, column: 68, offset: 6805 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6738 },
        end: { line: 164, column: 68, offset: 6805 }
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
        start: { line: 166, column: 1, offset: 6807 },
        end: { line: 172, column: 4, offset: 6958 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 174, column: 1, offset: 6960 },
            end: { line: 174, column: 52, offset: 7011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 174, column: 52, offset: 7011 },
            end: { line: 174, column: 62, offset: 7021 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 174, column: 62, offset: 7021 },
            end: { line: 174, column: 68, offset: 7027 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 6960 },
        end: { line: 174, column: 68, offset: 7027 }
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
        start: { line: 176, column: 1, offset: 7029 },
        end: { line: 187, column: 4, offset: 7173 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 189, column: 1, offset: 7175 },
            end: { line: 189, column: 202, offset: 7376 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 7175 },
        end: { line: 189, column: 202, offset: 7376 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 191, column: 1, offset: 7378 },
        end: { line: 193, column: 4, offset: 7414 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 195, column: 1, offset: 7416 },
            end: { line: 195, column: 22, offset: 7437 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 195, column: 22, offset: 7437 },
            end: { line: 195, column: 30, offset: 7445 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 195, column: 30, offset: 7445 },
            end: { line: 195, column: 93, offset: 7508 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 7416 },
        end: { line: 195, column: 93, offset: 7508 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 197, column: 1, offset: 7510 },
        end: { line: 199, column: 4, offset: 7540 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 201, column: 1, offset: 7542 },
            end: { line: 201, column: 142, offset: 7683 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 7542 },
        end: { line: 201, column: 142, offset: 7683 }
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
        start: { line: 203, column: 1, offset: 7685 },
        end: { line: 211, column: 4, offset: 7916 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 213, column: 1, offset: 7918 },
            end: { line: 213, column: 73, offset: 7990 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 213, column: 73, offset: 7990 },
            end: { line: 213, column: 81, offset: 7998 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 213, column: 81, offset: 7998 },
            end: { line: 213, column: 90, offset: 8007 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 7918 },
        end: { line: 213, column: 90, offset: 8007 }
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
        start: { line: 215, column: 1, offset: 8009 },
        end: { line: 220, column: 4, offset: 8209 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 222, column: 1, offset: 8211 },
            end: { line: 222, column: 66, offset: 8276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 222, column: 66, offset: 8276 },
            end: { line: 222, column: 76, offset: 8286 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 222, column: 76, offset: 8286 },
            end: { line: 222, column: 82, offset: 8292 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 8211 },
        end: { line: 222, column: 82, offset: 8292 }
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
        start: { line: 224, column: 1, offset: 8294 },
        end: { line: 233, column: 4, offset: 8456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 235, column: 1, offset: 8458 },
            end: { line: 235, column: 169, offset: 8626 }
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
                start: { line: 235, column: 170, offset: 8627 },
                end: { line: 235, column: 183, offset: 8640 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 169, offset: 8626 },
            end: { line: 235, column: 306, offset: 8763 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 235, column: 306, offset: 8763 },
            end: { line: 235, column: 469, offset: 8926 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 235, column: 469, offset: 8926 },
            end: { line: 235, column: 475, offset: 8932 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 235, column: 475, offset: 8932 },
            end: { line: 235, column: 483, offset: 8940 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 8458 },
        end: { line: 235, column: 483, offset: 8940 }
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
        start: { line: 237, column: 1, offset: 8942 },
        end: { line: 242, column: 4, offset: 9125 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 244, column: 1, offset: 9127 },
            end: { line: 244, column: 26, offset: 9152 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 244, column: 26, offset: 9152 },
            end: { line: 244, column: 31, offset: 9157 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 244, column: 31, offset: 9157 },
            end: { line: 244, column: 44, offset: 9170 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 9127 },
        end: { line: 244, column: 44, offset: 9170 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 246, column: 1, offset: 9172 },
        end: { line: 248, column: 4, offset: 9208 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 250, column: 1, offset: 9210 },
            end: { line: 250, column: 42, offset: 9251 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 250, column: 42, offset: 9251 },
            end: { line: 250, column: 48, offset: 9257 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 250, column: 48, offset: 9257 },
            end: { line: 250, column: 65, offset: 9274 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 9210 },
        end: { line: 250, column: 65, offset: 9274 }
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
        start: { line: 252, column: 1, offset: 9276 },
        end: { line: 260, column: 4, offset: 9426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 262, column: 1, offset: 9428 },
            end: { line: 262, column: 42, offset: 9469 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 262, column: 42, offset: 9469 },
            end: { line: 262, column: 51, offset: 9478 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 262, column: 51, offset: 9478 },
            end: { line: 262, column: 68, offset: 9495 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9428 },
        end: { line: 262, column: 68, offset: 9495 }
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
        start: { line: 264, column: 1, offset: 9497 },
        end: { line: 270, column: 4, offset: 9616 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 272, column: 1, offset: 9618 },
            end: { line: 272, column: 49, offset: 9666 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 272, column: 49, offset: 9666 },
            end: { line: 272, column: 59, offset: 9676 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 272, column: 59, offset: 9676 },
            end: { line: 272, column: 65, offset: 9682 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9618 },
        end: { line: 272, column: 65, offset: 9682 }
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
        start: { line: 274, column: 1, offset: 9684 },
        end: { line: 285, column: 4, offset: 9837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 287, column: 1, offset: 9839 },
            end: { line: 287, column: 202, offset: 10040 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 9839 },
        end: { line: 287, column: 202, offset: 10040 }
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
                    start: { line: 288, column: 5, offset: 10045 },
                    end: { line: 288, column: 113, offset: 10153 }
                  }
                }
              ],
              position: {
                start: { line: 288, column: 5, offset: 10045 },
                end: { line: 288, column: 113, offset: 10153 }
              }
            }
          ],
          position: {
            start: { line: 288, column: 3, offset: 10043 },
            end: { line: 288, column: 113, offset: 10153 }
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
                    start: { line: 289, column: 5, offset: 10158 },
                    end: { line: 289, column: 94, offset: 10247 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 289, column: 94, offset: 10247 },
                    end: { line: 289, column: 110, offset: 10263 }
                  }
                }
              ],
              position: {
                start: { line: 289, column: 5, offset: 10158 },
                end: { line: 289, column: 110, offset: 10263 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 3, offset: 10156 },
            end: { line: 289, column: 110, offset: 10263 }
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
                    start: { line: 290, column: 5, offset: 10268 },
                    end: { line: 290, column: 130, offset: 10393 }
                  }
                }
              ],
              position: {
                start: { line: 290, column: 5, offset: 10268 },
                end: { line: 290, column: 130, offset: 10393 }
              }
            }
          ],
          position: {
            start: { line: 290, column: 3, offset: 10266 },
            end: { line: 290, column: 130, offset: 10393 }
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
                    start: { line: 291, column: 5, offset: 10398 },
                    end: { line: 291, column: 28, offset: 10421 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 291, column: 28, offset: 10421 },
                    end: { line: 291, column: 38, offset: 10431 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 291, column: 38, offset: 10431 },
                    end: { line: 291, column: 64, offset: 10457 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 291, column: 64, offset: 10457 },
                    end: { line: 291, column: 74, offset: 10467 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 291, column: 74, offset: 10467 },
                    end: { line: 291, column: 80, offset: 10473 }
                  }
                }
              ],
              position: {
                start: { line: 291, column: 5, offset: 10398 },
                end: { line: 291, column: 80, offset: 10473 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 3, offset: 10396 },
            end: { line: 291, column: 80, offset: 10473 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 3, offset: 10043 },
        end: { line: 291, column: 80, offset: 10473 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 293, column: 1, offset: 10475 },
            end: { line: 293, column: 9, offset: 10483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 9, offset: 10483 },
            end: { line: 293, column: 14, offset: 10488 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 293, column: 14, offset: 10488 },
            end: { line: 293, column: 48, offset: 10522 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 48, offset: 10522 },
            end: { line: 293, column: 53, offset: 10527 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 293, column: 53, offset: 10527 },
            end: { line: 293, column: 124, offset: 10598 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 10475 },
        end: { line: 293, column: 124, offset: 10598 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 295, column: 1, offset: 10600 },
        end: { line: 301, column: 4, offset: 10676 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 303, column: 1, offset: 10678 },
            end: { line: 303, column: 42, offset: 10719 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 303, column: 42, offset: 10719 },
            end: { line: 303, column: 48, offset: 10725 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 303, column: 48, offset: 10725 },
            end: { line: 303, column: 65, offset: 10742 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 10678 },
        end: { line: 303, column: 65, offset: 10742 }
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
        start: { line: 305, column: 1, offset: 10744 },
        end: { line: 312, column: 4, offset: 10895 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 314, column: 1, offset: 10897 },
            end: { line: 314, column: 42, offset: 10938 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 314, column: 42, offset: 10938 },
            end: { line: 314, column: 51, offset: 10947 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 314, column: 51, offset: 10947 },
            end: { line: 314, column: 68, offset: 10964 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10897 },
        end: { line: 314, column: 68, offset: 10964 }
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
        start: { line: 316, column: 1, offset: 10966 },
        end: { line: 326, column: 4, offset: 11119 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 328, column: 1, offset: 11121 },
            end: { line: 328, column: 49, offset: 11169 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 328, column: 49, offset: 11169 },
            end: { line: 328, column: 59, offset: 11179 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 328, column: 59, offset: 11179 },
            end: { line: 328, column: 65, offset: 11185 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 11121 },
        end: { line: 328, column: 65, offset: 11185 }
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
        start: { line: 330, column: 1, offset: 11187 },
        end: { line: 343, column: 4, offset: 11452 }
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
            start: { line: 345, column: 5, offset: 11458 },
            end: { line: 345, column: 53, offset: 11506 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 11454 },
        end: { line: 345, column: 53, offset: 11506 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 347, column: 1, offset: 11508 },
            end: { line: 347, column: 323, offset: 11830 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 11508 },
        end: { line: 347, column: 323, offset: 11830 }
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
            start: { line: 349, column: 4, offset: 11835 },
            end: { line: 349, column: 23, offset: 11854 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 11832 },
        end: { line: 349, column: 23, offset: 11854 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 350, column: 1, offset: 11855 },
            end: { line: 350, column: 115, offset: 11969 }
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
                start: { line: 350, column: 116, offset: 11970 },
                end: { line: 350, column: 133, offset: 11987 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 115, offset: 11969 },
            end: { line: 350, column: 243, offset: 12097 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 350, column: 243, offset: 12097 },
            end: { line: 350, column: 259, offset: 12113 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 259, offset: 12113 },
            end: { line: 350, column: 278, offset: 12132 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the ',
          position: {
            start: { line: 350, column: 278, offset: 12132 },
            end: { line: 350, column: 438, offset: 12292 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 438, offset: 12292 },
            end: { line: 350, column: 457, offset: 12311 }
          }
        },
        {
          type: 'text',
          value: ' method, and can be consumed with a ',
          position: {
            start: { line: 350, column: 457, offset: 12311 },
            end: { line: 350, column: 493, offset: 12347 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 350, column: 493, offset: 12347 },
            end: { line: 350, column: 503, offset: 12357 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 350, column: 503, offset: 12357 },
            end: { line: 350, column: 509, offset: 12363 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 11855 },
        end: { line: 350, column: 509, offset: 12363 }
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
        start: { line: 352, column: 1, offset: 12365 },
        end: { line: 370, column: 4, offset: 12794 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 372, column: 1, offset: 12796 },
            end: { line: 372, column: 78, offset: 12873 }
          }
        }
      ],
      position: {
        start: { line: 372, column: 1, offset: 12796 },
        end: { line: 372, column: 78, offset: 12873 }
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
        start: { line: 374, column: 1, offset: 12875 },
        end: { line: 410, column: 4, offset: 13356 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A convenient way to create iterators is with generator functions using the ',
          position: {
            start: { line: 412, column: 1, offset: 13358 },
            end: { line: 412, column: 76, offset: 13433 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 412, column: 76, offset: 13433 },
            end: { line: 412, column: 93, offset: 13450 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 412, column: 93, offset: 13450 },
            end: { line: 412, column: 109, offset: 13466 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 412, column: 109, offset: 13466 },
            end: { line: 412, column: 116, offset: 13473 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Generator functions create generators, a kind of iterator.',
          position: {
            start: { line: 412, column: 116, offset: 13473 },
            end: { line: 412, column: 184, offset: 13541 }
          }
        }
      ],
      position: {
        start: { line: 412, column: 1, offset: 13358 },
        end: { line: 412, column: 184, offset: 13541 }
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
        start: { line: 414, column: 1, offset: 13543 },
        end: { line: 432, column: 4, offset: 13909 }
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
            start: { line: 434, column: 4, offset: 13914 },
            end: { line: 434, column: 27, offset: 13937 }
          }
        }
      ],
      position: {
        start: { line: 434, column: 1, offset: 13911 },
        end: { line: 434, column: 27, offset: 13937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 435, column: 1, offset: 13938 },
            end: { line: 435, column: 184, offset: 14121 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 1, offset: 13938 },
        end: { line: 435, column: 184, offset: 14121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 437, column: 1, offset: 14123 },
            end: { line: 437, column: 203, offset: 14325 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 437, column: 203, offset: 14325 },
            end: { line: 437, column: 210, offset: 14332 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 437, column: 210, offset: 14332 },
            end: { line: 437, column: 240, offset: 14362 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 14123 },
        end: { line: 437, column: 240, offset: 14362 }
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
        start: { line: 439, column: 1, offset: 14364 },
        end: { line: 445, column: 4, offset: 14538 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 447, column: 1, offset: 14540 },
            end: { line: 447, column: 31, offset: 14570 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 447, column: 31, offset: 14570 },
            end: { line: 447, column: 38, offset: 14577 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 447, column: 38, offset: 14577 },
            end: { line: 447, column: 43, offset: 14582 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 447, column: 43, offset: 14582 },
            end: { line: 447, column: 50, offset: 14589 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 447, column: 50, offset: 14589 },
            end: { line: 447, column: 111, offset: 14650 }
          }
        }
      ],
      position: {
        start: { line: 447, column: 1, offset: 14540 },
        end: { line: 447, column: 111, offset: 14650 }
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
        start: { line: 449, column: 1, offset: 14652 },
        end: { line: 458, column: 4, offset: 14879 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 460, column: 1, offset: 14881 },
            end: { line: 460, column: 17, offset: 14897 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 460, column: 17, offset: 14897 },
            end: { line: 460, column: 26, offset: 14906 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 460, column: 26, offset: 14906 },
            end: { line: 460, column: 59, offset: 14939 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 14881 },
        end: { line: 460, column: 59, offset: 14939 }
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
        start: { line: 462, column: 1, offset: 14941 },
        end: { line: 482, column: 4, offset: 15358 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 484, column: 1, offset: 15360 },
            end: { line: 484, column: 85, offset: 15444 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 15360 },
        end: { line: 484, column: 85, offset: 15444 }
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
        start: { line: 486, column: 1, offset: 15446 },
        end: { line: 490, column: 4, offset: 15634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 492, column: 1, offset: 15636 },
            end: { line: 492, column: 112, offset: 15747 }
          }
        }
      ],
      position: {
        start: { line: 492, column: 1, offset: 15636 },
        end: { line: 492, column: 112, offset: 15747 }
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
        start: { line: 494, column: 1, offset: 15749 },
        end: { line: 506, column: 4, offset: 16086 }
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
            start: { line: 508, column: 4, offset: 16091 },
            end: { line: 508, column: 36, offset: 16123 }
          }
        }
      ],
      position: {
        start: { line: 508, column: 1, offset: 16088 },
        end: { line: 508, column: 36, offset: 16123 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 509, column: 1, offset: 16124 },
            end: { line: 509, column: 143, offset: 16266 }
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
                start: { line: 509, column: 144, offset: 16267 },
                end: { line: 509, column: 167, offset: 16290 }
              }
            }
          ],
          position: {
            start: { line: 509, column: 143, offset: 16266 },
            end: { line: 509, column: 303, offset: 16426 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 509, column: 303, offset: 16426 },
            end: { line: 509, column: 319, offset: 16442 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]',
          position: {
            start: { line: 509, column: 319, offset: 16442 },
            end: { line: 509, column: 343, offset: 16466 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an async iterator object that can be consumed with a ',
          position: {
            start: { line: 509, column: 343, offset: 16466 },
            end: { line: 509, column: 424, offset: 16547 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 509, column: 424, offset: 16547 },
            end: { line: 509, column: 440, offset: 16563 }
          }
        },
        {
          type: 'text',
          value: ' loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.',
          position: {
            start: { line: 509, column: 440, offset: 16563 },
            end: { line: 509, column: 699, offset: 16822 }
          }
        }
      ],
      position: {
        start: { line: 509, column: 1, offset: 16124 },
        end: { line: 509, column: 699, offset: 16822 }
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
        start: { line: 511, column: 1, offset: 16824 },
        end: { line: 551, column: 4, offset: 17417 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can create async iterators is with async generator functions using the ',
          position: {
            start: { line: 553, column: 1, offset: 17419 },
            end: { line: 553, column: 76, offset: 17494 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 553, column: 76, offset: 17494 },
            end: { line: 553, column: 99, offset: 17517 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 553, column: 99, offset: 17517 },
            end: { line: 553, column: 115, offset: 17533 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 553, column: 115, offset: 17533 },
            end: { line: 553, column: 122, offset: 17540 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Async generator functions create async generators, a kind of async iterator.',
          position: {
            start: { line: 553, column: 122, offset: 17540 },
            end: { line: 553, column: 208, offset: 17626 }
          }
        }
      ],
      position: {
        start: { line: 553, column: 1, offset: 17419 },
        end: { line: 553, column: 208, offset: 17626 }
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
        start: { line: 555, column: 1, offset: 17628 },
        end: { line: 575, column: 4, offset: 18108 }
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
            start: { line: 577, column: 4, offset: 18113 },
            end: { line: 577, column: 24, offset: 18133 }
          }
        }
      ],
      position: {
        start: { line: 577, column: 1, offset: 18110 },
        end: { line: 577, column: 24, offset: 18133 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 578, column: 1, offset: 18134 },
            end: { line: 578, column: 253, offset: 18386 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 18134 },
        end: { line: 578, column: 253, offset: 18386 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 580, column: 1, offset: 18388 },
            end: { line: 580, column: 64, offset: 18451 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 64, offset: 18451 },
            end: { line: 580, column: 70, offset: 18457 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 580, column: 70, offset: 18457 },
            end: { line: 580, column: 103, offset: 18490 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 103, offset: 18490 },
            end: { line: 580, column: 109, offset: 18496 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 580, column: 109, offset: 18496 },
            end: { line: 580, column: 143, offset: 18530 }
          }
        }
      ],
      position: {
        start: { line: 580, column: 1, offset: 18388 },
        end: { line: 580, column: 143, offset: 18530 }
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
                    start: { line: 582, column: 6, offset: 18537 },
                    end: { line: 582, column: 51, offset: 18582 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 582, column: 51, offset: 18582 },
                    end: { line: 582, column: 59, offset: 18590 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 582, column: 59, offset: 18590 },
                    end: { line: 582, column: 120, offset: 18651 }
                  }
                }
              ],
              position: {
                start: { line: 582, column: 6, offset: 18537 },
                end: { line: 582, column: 120, offset: 18651 }
              }
            }
          ],
          position: {
            start: { line: 582, column: 3, offset: 18534 },
            end: { line: 582, column: 120, offset: 18651 }
          }
        }
      ],
      position: {
        start: { line: 582, column: 3, offset: 18534 },
        end: { line: 582, column: 120, offset: 18651 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 584, column: 1, offset: 18653 },
        end: { line: 589, column: 4, offset: 18730 }
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
                    start: { line: 591, column: 6, offset: 18737 },
                    end: { line: 591, column: 64, offset: 18795 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 64, offset: 18795 },
                    end: { line: 591, column: 70, offset: 18801 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 591, column: 70, offset: 18801 },
                    end: { line: 591, column: 127, offset: 18858 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 127, offset: 18858 },
                    end: { line: 591, column: 133, offset: 18864 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 591, column: 133, offset: 18864 },
                    end: { line: 591, column: 144, offset: 18875 }
                  }
                }
              ],
              position: {
                start: { line: 591, column: 6, offset: 18737 },
                end: { line: 591, column: 144, offset: 18875 }
              }
            }
          ],
          position: {
            start: { line: 591, column: 3, offset: 18734 },
            end: { line: 591, column: 144, offset: 18875 }
          }
        }
      ],
      position: {
        start: { line: 591, column: 3, offset: 18734 },
        end: { line: 591, column: 144, offset: 18875 }
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
        start: { line: 593, column: 1, offset: 18877 },
        end: { line: 598, column: 4, offset: 18975 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 600, column: 1, offset: 18977 },
            end: { line: 600, column: 65, offset: 19041 }
          }
        }
      ],
      position: {
        start: { line: 600, column: 1, offset: 18977 },
        end: { line: 600, column: 65, offset: 19041 }
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
                    start: { line: 601, column: 4, offset: 19045 },
                    end: { line: 601, column: 11, offset: 19052 }
                  }
                }
              ],
              position: {
                start: { line: 601, column: 4, offset: 19045 },
                end: { line: 601, column: 11, offset: 19052 }
              }
            }
          ],
          position: {
            start: { line: 601, column: 2, offset: 19043 },
            end: { line: 601, column: 11, offset: 19052 }
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
                    start: { line: 602, column: 4, offset: 19056 },
                    end: { line: 602, column: 9, offset: 19061 }
                  }
                }
              ],
              position: {
                start: { line: 602, column: 4, offset: 19056 },
                end: { line: 602, column: 9, offset: 19061 }
              }
            }
          ],
          position: {
            start: { line: 602, column: 2, offset: 19054 },
            end: { line: 602, column: 9, offset: 19061 }
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
                    start: { line: 603, column: 4, offset: 19065 },
                    end: { line: 603, column: 9, offset: 19070 }
                  }
                }
              ],
              position: {
                start: { line: 603, column: 4, offset: 19065 },
                end: { line: 603, column: 9, offset: 19070 }
              }
            }
          ],
          position: {
            start: { line: 603, column: 2, offset: 19063 },
            end: { line: 603, column: 9, offset: 19070 }
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
                    start: { line: 604, column: 4, offset: 19074 },
                    end: { line: 604, column: 15, offset: 19085 }
                  }
                }
              ],
              position: {
                start: { line: 604, column: 4, offset: 19074 },
                end: { line: 604, column: 15, offset: 19085 }
              }
            }
          ],
          position: {
            start: { line: 604, column: 2, offset: 19072 },
            end: { line: 604, column: 15, offset: 19085 }
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
                    start: { line: 605, column: 4, offset: 19089 },
                    end: { line: 605, column: 21, offset: 19106 }
                  }
                }
              ],
              position: {
                start: { line: 605, column: 4, offset: 19089 },
                end: { line: 605, column: 21, offset: 19106 }
              }
            }
          ],
          position: {
            start: { line: 605, column: 2, offset: 19087 },
            end: { line: 605, column: 21, offset: 19106 }
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
                    start: { line: 606, column: 4, offset: 19110 },
                    end: { line: 606, column: 12, offset: 19118 }
                  }
                }
              ],
              position: {
                start: { line: 606, column: 4, offset: 19110 },
                end: { line: 606, column: 12, offset: 19118 }
              }
            }
          ],
          position: {
            start: { line: 606, column: 2, offset: 19108 },
            end: { line: 606, column: 12, offset: 19118 }
          }
        }
      ],
      position: {
        start: { line: 601, column: 2, offset: 19043 },
        end: { line: 606, column: 12, offset: 19118 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 608, column: 1, offset: 19120 },
            end: { line: 608, column: 67, offset: 19186 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 67, offset: 19186 },
            end: { line: 608, column: 76, offset: 19195 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 608, column: 76, offset: 19195 },
            end: { line: 608, column: 109, offset: 19228 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 109, offset: 19228 },
            end: { line: 608, column: 118, offset: 19237 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 608, column: 118, offset: 19237 },
            end: { line: 608, column: 154, offset: 19273 }
          }
        }
      ],
      position: {
        start: { line: 608, column: 1, offset: 19120 },
        end: { line: 608, column: 154, offset: 19273 }
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
                    start: { line: 610, column: 6, offset: 19280 },
                    end: { line: 610, column: 98, offset: 19372 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 98, offset: 19372 },
                    end: { line: 610, column: 107, offset: 19381 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 610, column: 107, offset: 19381 },
                    end: { line: 610, column: 210, offset: 19484 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 210, offset: 19484 },
                    end: { line: 610, column: 219, offset: 19493 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 610, column: 219, offset: 19493 },
                    end: { line: 610, column: 220, offset: 19494 }
                  }
                }
              ],
              position: {
                start: { line: 610, column: 6, offset: 19280 },
                end: { line: 610, column: 220, offset: 19494 }
              }
            }
          ],
          position: {
            start: { line: 610, column: 3, offset: 19277 },
            end: { line: 610, column: 220, offset: 19494 }
          }
        }
      ],
      position: {
        start: { line: 610, column: 3, offset: 19277 },
        end: { line: 610, column: 220, offset: 19494 }
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
        start: { line: 612, column: 1, offset: 19496 },
        end: { line: 617, column: 4, offset: 19611 }
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
                    start: { line: 619, column: 6, offset: 19618 },
                    end: { line: 619, column: 122, offset: 19734 }
                  }
                }
              ],
              position: {
                start: { line: 619, column: 6, offset: 19618 },
                end: { line: 619, column: 122, offset: 19734 }
              }
            }
          ],
          position: {
            start: { line: 619, column: 3, offset: 19615 },
            end: { line: 619, column: 122, offset: 19734 }
          }
        }
      ],
      position: {
        start: { line: 619, column: 3, offset: 19615 },
        end: { line: 619, column: 122, offset: 19734 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 621, column: 1, offset: 19736 },
        end: { line: 626, column: 4, offset: 19824 }
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
                    start: { line: 628, column: 6, offset: 19831 },
                    end: { line: 628, column: 160, offset: 19985 }
                  }
                }
              ],
              position: {
                start: { line: 628, column: 6, offset: 19831 },
                end: { line: 628, column: 160, offset: 19985 }
              }
            }
          ],
          position: {
            start: { line: 628, column: 3, offset: 19828 },
            end: { line: 628, column: 160, offset: 19985 }
          }
        }
      ],
      position: {
        start: { line: 628, column: 3, offset: 19828 },
        end: { line: 628, column: 160, offset: 19985 }
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
        start: { line: 630, column: 1, offset: 19987 },
        end: { line: 635, column: 4, offset: 20098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 637, column: 1, offset: 20100 },
            end: { line: 637, column: 68, offset: 20167 }
          }
        }
      ],
      position: {
        start: { line: 637, column: 1, offset: 20100 },
        end: { line: 637, column: 68, offset: 20167 }
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
                    start: { line: 638, column: 4, offset: 20171 },
                    end: { line: 638, column: 11, offset: 20178 }
                  }
                }
              ],
              position: {
                start: { line: 638, column: 4, offset: 20171 },
                end: { line: 638, column: 11, offset: 20178 }
              }
            }
          ],
          position: {
            start: { line: 638, column: 2, offset: 20169 },
            end: { line: 638, column: 11, offset: 20178 }
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
                    start: { line: 639, column: 4, offset: 20182 },
                    end: { line: 639, column: 9, offset: 20187 }
                  }
                }
              ],
              position: {
                start: { line: 639, column: 4, offset: 20182 },
                end: { line: 639, column: 9, offset: 20187 }
              }
            }
          ],
          position: {
            start: { line: 639, column: 2, offset: 20180 },
            end: { line: 639, column: 9, offset: 20187 }
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
                    start: { line: 640, column: 4, offset: 20191 },
                    end: { line: 640, column: 9, offset: 20196 }
                  }
                }
              ],
              position: {
                start: { line: 640, column: 4, offset: 20191 },
                end: { line: 640, column: 9, offset: 20196 }
              }
            }
          ],
          position: {
            start: { line: 640, column: 2, offset: 20189 },
            end: { line: 640, column: 9, offset: 20196 }
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
                    start: { line: 641, column: 4, offset: 20200 },
                    end: { line: 641, column: 15, offset: 20211 }
                  }
                }
              ],
              position: {
                start: { line: 641, column: 4, offset: 20200 },
                end: { line: 641, column: 15, offset: 20211 }
              }
            }
          ],
          position: {
            start: { line: 641, column: 2, offset: 20198 },
            end: { line: 641, column: 15, offset: 20211 }
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
                    start: { line: 642, column: 4, offset: 20215 },
                    end: { line: 642, column: 21, offset: 20232 }
                  }
                }
              ],
              position: {
                start: { line: 642, column: 4, offset: 20215 },
                end: { line: 642, column: 21, offset: 20232 }
              }
            }
          ],
          position: {
            start: { line: 642, column: 2, offset: 20213 },
            end: { line: 642, column: 21, offset: 20232 }
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
                    start: { line: 643, column: 4, offset: 20236 },
                    end: { line: 643, column: 12, offset: 20244 }
                  }
                }
              ],
              position: {
                start: { line: 643, column: 4, offset: 20236 },
                end: { line: 643, column: 12, offset: 20244 }
              }
            }
          ],
          position: {
            start: { line: 643, column: 2, offset: 20234 },
            end: { line: 643, column: 12, offset: 20244 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 2, offset: 20169 },
        end: { line: 643, column: 12, offset: 20244 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 645, column: 1, offset: 20246 },
            end: { line: 645, column: 65, offset: 20310 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 65, offset: 20310 },
            end: { line: 645, column: 74, offset: 20319 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 645, column: 74, offset: 20319 },
            end: { line: 645, column: 107, offset: 20352 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 107, offset: 20352 },
            end: { line: 645, column: 116, offset: 20361 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 645, column: 116, offset: 20361 },
            end: { line: 645, column: 151, offset: 20396 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 20246 },
        end: { line: 645, column: 152, offset: 20397 }
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
                    start: { line: 647, column: 6, offset: 20404 },
                    end: { line: 647, column: 87, offset: 20485 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 647, column: 87, offset: 20485 },
                    end: { line: 647, column: 96, offset: 20494 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 647, column: 96, offset: 20494 },
                    end: { line: 647, column: 254, offset: 20652 }
                  }
                }
              ],
              position: {
                start: { line: 647, column: 6, offset: 20404 },
                end: { line: 647, column: 254, offset: 20652 }
              }
            }
          ],
          position: {
            start: { line: 647, column: 3, offset: 20401 },
            end: { line: 647, column: 254, offset: 20652 }
          }
        }
      ],
      position: {
        start: { line: 647, column: 3, offset: 20401 },
        end: { line: 647, column: 254, offset: 20652 }
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
        start: { line: 649, column: 1, offset: 20654 },
        end: { line: 656, column: 4, offset: 20824 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 658, column: 1, offset: 20826 },
            end: { line: 658, column: 66, offset: 20891 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 20826 },
        end: { line: 658, column: 66, offset: 20891 }
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
                    start: { line: 659, column: 4, offset: 20895 },
                    end: { line: 659, column: 11, offset: 20902 }
                  }
                }
              ],
              position: {
                start: { line: 659, column: 4, offset: 20895 },
                end: { line: 659, column: 11, offset: 20902 }
              }
            }
          ],
          position: {
            start: { line: 659, column: 2, offset: 20893 },
            end: { line: 659, column: 11, offset: 20902 }
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
                    start: { line: 660, column: 4, offset: 20906 },
                    end: { line: 660, column: 9, offset: 20911 }
                  }
                }
              ],
              position: {
                start: { line: 660, column: 4, offset: 20906 },
                end: { line: 660, column: 9, offset: 20911 }
              }
            }
          ],
          position: {
            start: { line: 660, column: 2, offset: 20904 },
            end: { line: 660, column: 9, offset: 20911 }
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
                    start: { line: 661, column: 4, offset: 20915 },
                    end: { line: 661, column: 9, offset: 20920 }
                  }
                }
              ],
              position: {
                start: { line: 661, column: 4, offset: 20915 },
                end: { line: 661, column: 9, offset: 20920 }
              }
            }
          ],
          position: {
            start: { line: 661, column: 2, offset: 20913 },
            end: { line: 661, column: 9, offset: 20920 }
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
                    start: { line: 662, column: 4, offset: 20924 },
                    end: { line: 662, column: 15, offset: 20935 }
                  }
                }
              ],
              position: {
                start: { line: 662, column: 4, offset: 20924 },
                end: { line: 662, column: 15, offset: 20935 }
              }
            }
          ],
          position: {
            start: { line: 662, column: 2, offset: 20922 },
            end: { line: 662, column: 15, offset: 20935 }
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
                    start: { line: 663, column: 4, offset: 20939 },
                    end: { line: 663, column: 21, offset: 20956 }
                  }
                }
              ],
              position: {
                start: { line: 663, column: 4, offset: 20939 },
                end: { line: 663, column: 21, offset: 20956 }
              }
            }
          ],
          position: {
            start: { line: 663, column: 2, offset: 20937 },
            end: { line: 663, column: 21, offset: 20956 }
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
                    start: { line: 664, column: 4, offset: 20960 },
                    end: { line: 664, column: 12, offset: 20968 }
                  }
                }
              ],
              position: {
                start: { line: 664, column: 4, offset: 20960 },
                end: { line: 664, column: 12, offset: 20968 }
              }
            }
          ],
          position: {
            start: { line: 664, column: 2, offset: 20958 },
            end: { line: 664, column: 12, offset: 20968 }
          }
        }
      ],
      position: {
        start: { line: 659, column: 2, offset: 20893 },
        end: { line: 664, column: 12, offset: 20968 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 666, column: 1, offset: 20970 },
            end: { line: 666, column: 66, offset: 21035 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 66, offset: 21035 },
            end: { line: 666, column: 75, offset: 21044 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 666, column: 75, offset: 21044 },
            end: { line: 666, column: 108, offset: 21077 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 108, offset: 21077 },
            end: { line: 666, column: 117, offset: 21086 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 666, column: 117, offset: 21086 },
            end: { line: 666, column: 153, offset: 21122 }
          }
        }
      ],
      position: {
        start: { line: 666, column: 1, offset: 20970 },
        end: { line: 666, column: 153, offset: 21122 }
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
                    start: { line: 668, column: 6, offset: 21129 },
                    end: { line: 668, column: 163, offset: 21286 }
                  }
                }
              ],
              position: {
                start: { line: 668, column: 6, offset: 21129 },
                end: { line: 668, column: 163, offset: 21286 }
              }
            }
          ],
          position: {
            start: { line: 668, column: 3, offset: 21126 },
            end: { line: 668, column: 163, offset: 21286 }
          }
        }
      ],
      position: {
        start: { line: 668, column: 3, offset: 21126 },
        end: { line: 668, column: 163, offset: 21286 }
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
        start: { line: 670, column: 1, offset: 21288 },
        end: { line: 675, column: 4, offset: 21402 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 677, column: 1, offset: 21404 },
            end: { line: 677, column: 67, offset: 21470 }
          }
        }
      ],
      position: {
        start: { line: 677, column: 1, offset: 21404 },
        end: { line: 677, column: 67, offset: 21470 }
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
                    start: { line: 678, column: 4, offset: 21474 },
                    end: { line: 678, column: 11, offset: 21481 }
                  }
                }
              ],
              position: {
                start: { line: 678, column: 4, offset: 21474 },
                end: { line: 678, column: 11, offset: 21481 }
              }
            }
          ],
          position: {
            start: { line: 678, column: 2, offset: 21472 },
            end: { line: 678, column: 11, offset: 21481 }
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
                    start: { line: 679, column: 4, offset: 21485 },
                    end: { line: 679, column: 12, offset: 21493 }
                  }
                }
              ],
              position: {
                start: { line: 679, column: 4, offset: 21485 },
                end: { line: 679, column: 12, offset: 21493 }
              }
            }
          ],
          position: {
            start: { line: 679, column: 2, offset: 21483 },
            end: { line: 679, column: 12, offset: 21493 }
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
                    start: { line: 680, column: 4, offset: 21497 },
                    end: { line: 680, column: 9, offset: 21502 }
                  }
                }
              ],
              position: {
                start: { line: 680, column: 4, offset: 21497 },
                end: { line: 680, column: 9, offset: 21502 }
              }
            }
          ],
          position: {
            start: { line: 680, column: 2, offset: 21495 },
            end: { line: 680, column: 9, offset: 21502 }
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
                    start: { line: 681, column: 4, offset: 21506 },
                    end: { line: 681, column: 12, offset: 21514 }
                  }
                }
              ],
              position: {
                start: { line: 681, column: 4, offset: 21506 },
                end: { line: 681, column: 12, offset: 21514 }
              }
            }
          ],
          position: {
            start: { line: 681, column: 2, offset: 21504 },
            end: { line: 681, column: 12, offset: 21514 }
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
                    start: { line: 682, column: 4, offset: 21518 },
                    end: { line: 682, column: 12, offset: 21526 }
                  }
                }
              ],
              position: {
                start: { line: 682, column: 4, offset: 21518 },
                end: { line: 682, column: 12, offset: 21526 }
              }
            }
          ],
          position: {
            start: { line: 682, column: 2, offset: 21516 },
            end: { line: 682, column: 12, offset: 21526 }
          }
        }
      ],
      position: {
        start: { line: 678, column: 2, offset: 21472 },
        end: { line: 682, column: 12, offset: 21526 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 684, column: 1, offset: 21528 },
            end: { line: 684, column: 62, offset: 21589 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 62, offset: 21589 },
            end: { line: 684, column: 72, offset: 21599 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 72, offset: 21599 },
            end: { line: 684, column: 76, offset: 21603 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 76, offset: 21603 },
            end: { line: 684, column: 84, offset: 21611 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 684, column: 84, offset: 21611 },
            end: { line: 684, column: 118, offset: 21645 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 118, offset: 21645 },
            end: { line: 684, column: 128, offset: 21655 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 128, offset: 21655 },
            end: { line: 684, column: 132, offset: 21659 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 132, offset: 21659 },
            end: { line: 684, column: 140, offset: 21667 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 684, column: 140, offset: 21667 },
            end: { line: 684, column: 172, offset: 21699 }
          }
        }
      ],
      position: {
        start: { line: 684, column: 1, offset: 21528 },
        end: { line: 684, column: 172, offset: 21699 }
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
                    start: { line: 686, column: 6, offset: 21706 },
                    end: { line: 686, column: 78, offset: 21778 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 686, column: 78, offset: 21778 },
                    end: { line: 686, column: 88, offset: 21788 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 686, column: 88, offset: 21788 },
                    end: { line: 686, column: 92, offset: 21792 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 686, column: 92, offset: 21792 },
                    end: { line: 686, column: 100, offset: 21800 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 686, column: 100, offset: 21800 },
                    end: { line: 686, column: 178, offset: 21878 }
                  }
                }
              ],
              position: {
                start: { line: 686, column: 6, offset: 21706 },
                end: { line: 686, column: 178, offset: 21878 }
              }
            }
          ],
          position: {
            start: { line: 686, column: 3, offset: 21703 },
            end: { line: 686, column: 178, offset: 21878 }
          }
        }
      ],
      position: {
        start: { line: 686, column: 3, offset: 21703 },
        end: { line: 686, column: 178, offset: 21878 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).chain(f),\n  f(a),\n)',
      position: {
        start: { line: 688, column: 1, offset: 21880 },
        end: { line: 693, column: 4, offset: 21952 }
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
                    start: { line: 695, column: 6, offset: 21959 },
                    end: { line: 695, column: 120, offset: 22073 }
                  }
                }
              ],
              position: {
                start: { line: 695, column: 6, offset: 21959 },
                end: { line: 695, column: 120, offset: 22073 }
              }
            }
          ],
          position: {
            start: { line: 695, column: 3, offset: 21956 },
            end: { line: 695, column: 120, offset: 22073 }
          }
        }
      ],
      position: {
        start: { line: 695, column: 3, offset: 21956 },
        end: { line: 695, column: 120, offset: 22073 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.chain(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 697, column: 1, offset: 22075 },
        end: { line: 702, column: 4, offset: 22152 }
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
                    start: { line: 704, column: 6, offset: 22159 },
                    end: { line: 704, column: 111, offset: 22264 }
                  }
                }
              ],
              position: {
                start: { line: 704, column: 6, offset: 22159 },
                end: { line: 704, column: 111, offset: 22264 }
              }
            }
          ],
          position: {
            start: { line: 704, column: 3, offset: 22156 },
            end: { line: 704, column: 111, offset: 22264 }
          }
        }
      ],
      position: {
        start: { line: 704, column: 3, offset: 22156 },
        end: { line: 704, column: 111, offset: 22264 }
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
        start: { line: 706, column: 1, offset: 22266 },
        end: { line: 711, column: 4, offset: 22369 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 713, column: 1, offset: 22371 },
            end: { line: 713, column: 63, offset: 22433 }
          }
        }
      ],
      position: {
        start: { line: 713, column: 1, offset: 22371 },
        end: { line: 713, column: 63, offset: 22433 }
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
                    start: { line: 714, column: 4, offset: 22437 },
                    end: { line: 714, column: 11, offset: 22444 }
                  }
                }
              ],
              position: {
                start: { line: 714, column: 4, offset: 22437 },
                end: { line: 714, column: 11, offset: 22444 }
              }
            }
          ],
          position: {
            start: { line: 714, column: 2, offset: 22435 },
            end: { line: 714, column: 11, offset: 22444 }
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
                    start: { line: 715, column: 4, offset: 22448 },
                    end: { line: 715, column: 12, offset: 22456 }
                  }
                }
              ],
              position: {
                start: { line: 715, column: 4, offset: 22448 },
                end: { line: 715, column: 12, offset: 22456 }
              }
            }
          ],
          position: {
            start: { line: 715, column: 2, offset: 22446 },
            end: { line: 715, column: 12, offset: 22456 }
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
                    start: { line: 716, column: 4, offset: 22460 },
                    end: { line: 716, column: 9, offset: 22465 }
                  }
                }
              ],
              position: {
                start: { line: 716, column: 4, offset: 22460 },
                end: { line: 716, column: 9, offset: 22465 }
              }
            }
          ],
          position: {
            start: { line: 716, column: 2, offset: 22458 },
            end: { line: 716, column: 9, offset: 22465 }
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
                    start: { line: 717, column: 4, offset: 22469 },
                    end: { line: 717, column: 15, offset: 22480 }
                  }
                }
              ],
              position: {
                start: { line: 717, column: 4, offset: 22469 },
                end: { line: 717, column: 15, offset: 22480 }
              }
            }
          ],
          position: {
            start: { line: 717, column: 2, offset: 22467 },
            end: { line: 717, column: 15, offset: 22480 }
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
                    start: { line: 718, column: 4, offset: 22484 },
                    end: { line: 718, column: 21, offset: 22501 }
                  }
                }
              ],
              position: {
                start: { line: 718, column: 4, offset: 22484 },
                end: { line: 718, column: 21, offset: 22501 }
              }
            }
          ],
          position: {
            start: { line: 718, column: 2, offset: 22482 },
            end: { line: 718, column: 21, offset: 22501 }
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
                    start: { line: 719, column: 4, offset: 22505 },
                    end: { line: 719, column: 12, offset: 22513 }
                  }
                }
              ],
              position: {
                start: { line: 719, column: 4, offset: 22505 },
                end: { line: 719, column: 12, offset: 22513 }
              }
            }
          ],
          position: {
            start: { line: 719, column: 2, offset: 22503 },
            end: { line: 719, column: 12, offset: 22513 }
          }
        }
      ],
      position: {
        start: { line: 714, column: 2, offset: 22435 },
        end: { line: 719, column: 12, offset: 22513 }
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
            start: { line: 721, column: 4, offset: 22518 },
            end: { line: 721, column: 14, offset: 22528 }
          }
        }
      ],
      position: {
        start: { line: 721, column: 1, offset: 22515 },
        end: { line: 721, column: 14, offset: 22528 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 723, column: 1, offset: 22530 },
            end: { line: 723, column: 85, offset: 22614 }
          }
        }
      ],
      position: {
        start: { line: 723, column: 1, offset: 22530 },
        end: { line: 723, column: 85, offset: 22614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 725, column: 1, offset: 22616 },
            end: { line: 725, column: 141, offset: 22756 }
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
                start: { line: 725, column: 142, offset: 22757 },
                end: { line: 725, column: 153, offset: 22768 }
              }
            }
          ],
          position: {
            start: { line: 725, column: 141, offset: 22756 },
            end: { line: 725, column: 176, offset: 22791 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 725, column: 176, offset: 22791 },
            end: { line: 725, column: 177, offset: 22792 }
          }
        }
      ],
      position: {
        start: { line: 725, column: 1, offset: 22616 },
        end: { line: 725, column: 177, offset: 22792 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 726, column: 1, offset: 22793 }
  }
}