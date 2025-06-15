export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'lastUpdated: 2025-06-14\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 313 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 315 },
            end: { line: 11, column: 186, offset: 500 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 315 },
        end: { line: 11, column: 186, offset: 500 }
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
            start: { line: 13, column: 4, offset: 505 },
            end: { line: 13, column: 24, offset: 525 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 502 },
        end: { line: 13, column: 24, offset: 525 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 526 },
            end: { line: 14, column: 250, offset: 775 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 526 },
        end: { line: 14, column: 250, offset: 775 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Number',
          position: {
            start: { line: 16, column: 5, offset: 781 },
            end: { line: 16, column: 11, offset: 787 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 777 },
        end: { line: 16, column: 11, offset: 787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 789 },
            end: { line: 18, column: 64, offset: 852 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 852 },
            end: { line: 18, column: 67, offset: 855 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 855 },
            end: { line: 18, column: 105, offset: 893 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 893 },
            end: { line: 18, column: 110, offset: 898 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 898 },
            end: { line: 18, column: 185, offset: 973 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 789 },
        end: { line: 18, column: 185, offset: 973 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 975 },
        end: { line: 22, column: 4, offset: 994 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 996 },
            end: { line: 24, column: 22, offset: 1017 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1017 },
            end: { line: 24, column: 30, offset: 1025 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1025 },
            end: { line: 24, column: 79, offset: 1074 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1074 },
            end: { line: 24, column: 87, offset: 1082 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1082 },
            end: { line: 24, column: 147, offset: 1142 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 996 },
        end: { line: 24, column: 147, offset: 1142 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1144 },
        end: { line: 28, column: 4, offset: 1178 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'String',
          position: {
            start: { line: 30, column: 5, offset: 1184 },
            end: { line: 30, column: 11, offset: 1190 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1180 },
        end: { line: 30, column: 11, offset: 1190 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1192 },
            end: { line: 32, column: 56, offset: 1247 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1247 },
            end: { line: 32, column: 63, offset: 1254 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1254 },
            end: { line: 32, column: 67, offset: 1258 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1258 },
            end: { line: 32, column: 83, offset: 1274 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1274 },
            end: { line: 32, column: 249, offset: 1440 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1192 },
        end: { line: 32, column: 249, offset: 1440 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1442 },
        end: { line: 36, column: 4, offset: 1474 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1476 },
            end: { line: 38, column: 22, offset: 1497 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1497 },
            end: { line: 38, column: 30, offset: 1505 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1505 },
            end: { line: 38, column: 79, offset: 1554 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1554 },
            end: { line: 38, column: 87, offset: 1562 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1562 },
            end: { line: 38, column: 147, offset: 1622 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1476 },
        end: { line: 38, column: 147, offset: 1622 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1624 },
        end: { line: 42, column: 4, offset: 1658 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Boolean',
          position: {
            start: { line: 44, column: 5, offset: 1664 },
            end: { line: 44, column: 12, offset: 1671 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1660 },
        end: { line: 44, column: 12, offset: 1671 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1673 },
            end: { line: 46, column: 63, offset: 1735 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1735 },
            end: { line: 46, column: 69, offset: 1741 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1741 },
            end: { line: 46, column: 73, offset: 1745 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1745 },
            end: { line: 46, column: 80, offset: 1752 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1752 },
            end: { line: 46, column: 135, offset: 1807 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1673 },
        end: { line: 46, column: 135, offset: 1807 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1809 },
        end: { line: 50, column: 4, offset: 1831 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1833 },
            end: { line: 52, column: 130, offset: 1962 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1962 },
            end: { line: 52, column: 134, offset: 1966 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1966 },
            end: { line: 52, column: 136, offset: 1968 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1968 },
            end: { line: 52, column: 139, offset: 1971 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1971 },
            end: { line: 52, column: 141, offset: 1973 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1973 },
            end: { line: 52, column: 144, offset: 1976 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1976 },
            end: { line: 52, column: 146, offset: 1978 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1978 },
            end: { line: 52, column: 150, offset: 1982 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1982 },
            end: { line: 52, column: 152, offset: 1984 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1984 },
            end: { line: 52, column: 156, offset: 1988 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1988 },
            end: { line: 52, column: 158, offset: 1990 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1990 },
            end: { line: 52, column: 162, offset: 1994 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 1994 },
            end: { line: 52, column: 167, offset: 1999 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 1999 },
            end: { line: 52, column: 171, offset: 2003 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 2003 },
            end: { line: 52, column: 213, offset: 2045 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2045 },
            end: { line: 52, column: 217, offset: 2049 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2049 },
            end: { line: 52, column: 255, offset: 2087 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1833 },
        end: { line: 52, column: 255, offset: 2087 }
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
        start: { line: 54, column: 1, offset: 2089 },
        end: { line: 61, column: 4, offset: 2226 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2228 },
            end: { line: 63, column: 22, offset: 2249 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2249 },
            end: { line: 63, column: 31, offset: 2258 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2258 },
            end: { line: 63, column: 64, offset: 2291 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2228 },
        end: { line: 63, column: 64, offset: 2291 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2293 },
        end: { line: 67, column: 4, offset: 2330 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Binary',
          position: {
            start: { line: 69, column: 5, offset: 2336 },
            end: { line: 69, column: 11, offset: 2342 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2332 },
        end: { line: 69, column: 11, offset: 2342 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 71, column: 1, offset: 2344 },
            end: { line: 71, column: 206, offset: 2549 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2344 },
        end: { line: 71, column: 206, offset: 2549 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2551 },
        end: { line: 76, column: 4, offset: 2636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2638 },
            end: { line: 78, column: 141, offset: 2778 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2638 },
        end: { line: 78, column: 141, offset: 2778 }
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
        start: { line: 80, column: 1, offset: 2780 },
        end: { line: 86, column: 4, offset: 2951 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Symbol',
          position: {
            start: { line: 88, column: 5, offset: 2957 },
            end: { line: 88, column: 11, offset: 2963 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2953 },
        end: { line: 88, column: 11, offset: 2963 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2965 },
            end: { line: 90, column: 54, offset: 3018 }
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
                start: { line: 90, column: 55, offset: 3019 },
                end: { line: 90, column: 64, offset: 3028 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3018 },
            end: { line: 90, column: 126, offset: 3090 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3090 },
            end: { line: 90, column: 195, offset: 3159 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2965 },
        end: { line: 90, column: 195, offset: 3159 }
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
        start: { line: 92, column: 1, offset: 3161 },
        end: { line: 97, column: 4, offset: 3328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3330 },
            end: { line: 99, column: 130, offset: 3459 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3459 },
            end: { line: 99, column: 140, offset: 3469 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3469 },
            end: { line: 99, column: 150, offset: 3479 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3479 },
            end: { line: 99, column: 163, offset: 3492 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3492 },
            end: { line: 99, column: 164, offset: 3493 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3330 },
        end: { line: 99, column: 164, offset: 3493 }
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
        start: { line: 101, column: 1, offset: 3495 },
        end: { line: 110, column: 4, offset: 3664 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 112, column: 1, offset: 3666 },
            end: { line: 112, column: 34, offset: 3699 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 112, column: 34, offset: 3699 },
            end: { line: 112, column: 51, offset: 3716 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 112, column: 51, offset: 3716 },
            end: { line: 112, column: 56, offset: 3721 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 112, column: 56, offset: 3721 },
            end: { line: 112, column: 78, offset: 3743 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 112, column: 78, offset: 3743 },
            end: { line: 112, column: 185, offset: 3850 }
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
                start: { line: 112, column: 186, offset: 3851 },
                end: { line: 112, column: 203, offset: 3868 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 185, offset: 3850 },
            end: { line: 112, column: 313, offset: 3978 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 112, column: 313, offset: 3978 },
            end: { line: 112, column: 318, offset: 3983 }
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
                start: { line: 112, column: 319, offset: 3984 },
                end: { line: 112, column: 342, offset: 4007 }
              }
            }
          ],
          position: {
            start: { line: 112, column: 318, offset: 3983 },
            end: { line: 112, column: 478, offset: 4143 }
          }
        }
      ],
      position: {
        start: { line: 112, column: 1, offset: 3666 },
        end: { line: 112, column: 478, offset: 4143 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Nullish',
          position: {
            start: { line: 114, column: 5, offset: 4149 },
            end: { line: 114, column: 12, offset: 4156 }
          }
        }
      ],
      position: {
        start: { line: 114, column: 1, offset: 4145 },
        end: { line: 114, column: 12, offset: 4156 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 116, column: 1, offset: 4158 },
            end: { line: 116, column: 104, offset: 4261 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 116, column: 104, offset: 4261 },
            end: { line: 116, column: 110, offset: 4267 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 110, offset: 4267 },
            end: { line: 116, column: 115, offset: 4272 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 116, column: 115, offset: 4272 },
            end: { line: 116, column: 126, offset: 4283 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 116, column: 126, offset: 4283 },
            end: { line: 116, column: 295, offset: 4452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 116, column: 295, offset: 4452 },
            end: { line: 116, column: 301, offset: 4458 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 116, column: 301, offset: 4458 },
            end: { line: 116, column: 397, offset: 4554 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 116, column: 397, offset: 4554 },
            end: { line: 116, column: 408, offset: 4565 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 116, column: 408, offset: 4565 },
            end: { line: 116, column: 451, offset: 4608 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 116, column: 451, offset: 4608 },
            end: { line: 116, column: 462, offset: 4619 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 116, column: 462, offset: 4619 },
            end: { line: 116, column: 479, offset: 4636 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 4158 },
        end: { line: 116, column: 479, offset: 4636 }
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
        start: { line: 118, column: 1, offset: 4638 },
        end: { line: 131, column: 4, offset: 4916 }
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
            start: { line: 133, column: 5, offset: 4922 },
            end: { line: 133, column: 42, offset: 4959 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 4918 },
        end: { line: 133, column: 42, offset: 4959 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 134, column: 1, offset: 4960 },
            end: { line: 134, column: 329, offset: 5288 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 4960 },
        end: { line: 134, column: 329, offset: 5288 }
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
            start: { line: 136, column: 4, offset: 5293 },
            end: { line: 136, column: 25, offset: 5314 }
          }
        }
      ],
      position: {
        start: { line: 136, column: 1, offset: 5290 },
        end: { line: 136, column: 25, offset: 5314 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 137, column: 1, offset: 5315 },
            end: { line: 137, column: 429, offset: 5743 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 5315 },
        end: { line: 137, column: 429, offset: 5743 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Array',
          position: {
            start: { line: 139, column: 5, offset: 5749 },
            end: { line: 139, column: 10, offset: 5754 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 5745 },
        end: { line: 139, column: 10, offset: 5754 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 141, column: 1, offset: 5756 },
            end: { line: 141, column: 175, offset: 5930 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 141, column: 175, offset: 5930 },
            end: { line: 141, column: 182, offset: 5937 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 141, column: 182, offset: 5937 },
            end: { line: 141, column: 195, offset: 5950 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5756 },
        end: { line: 141, column: 195, offset: 5950 }
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
        start: { line: 143, column: 1, offset: 5952 },
        end: { line: 151, column: 4, offset: 6219 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 153, column: 1, offset: 6221 },
            end: { line: 153, column: 56, offset: 6276 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 153, column: 56, offset: 6276 },
            end: { line: 153, column: 63, offset: 6283 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 153, column: 63, offset: 6283 },
            end: { line: 153, column: 76, offset: 6296 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 6221 },
        end: { line: 153, column: 76, offset: 6296 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 155, column: 1, offset: 6298 },
        end: { line: 158, column: 4, offset: 6411 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 160, column: 1, offset: 6413 },
            end: { line: 160, column: 40, offset: 6452 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 160, column: 40, offset: 6452 },
            end: { line: 160, column: 48, offset: 6460 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 160, column: 48, offset: 6460 },
            end: { line: 160, column: 53, offset: 6465 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 160, column: 53, offset: 6465 },
            end: { line: 160, column: 59, offset: 6471 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 160, column: 59, offset: 6471 },
            end: { line: 160, column: 83, offset: 6495 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 6413 },
        end: { line: 160, column: 83, offset: 6495 }
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
        start: { line: 162, column: 1, offset: 6497 },
        end: { line: 167, column: 4, offset: 6624 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 169, column: 1, offset: 6626 },
            end: { line: 169, column: 42, offset: 6667 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 169, column: 42, offset: 6667 },
            end: { line: 169, column: 49, offset: 6674 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 169, column: 49, offset: 6674 },
            end: { line: 169, column: 66, offset: 6691 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 6626 },
        end: { line: 169, column: 66, offset: 6691 }
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
        start: { line: 171, column: 1, offset: 6693 },
        end: { line: 177, column: 4, offset: 6798 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 179, column: 1, offset: 6800 },
            end: { line: 179, column: 42, offset: 6841 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 179, column: 42, offset: 6841 },
            end: { line: 179, column: 51, offset: 6850 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 179, column: 51, offset: 6850 },
            end: { line: 179, column: 68, offset: 6867 }
          }
        }
      ],
      position: {
        start: { line: 179, column: 1, offset: 6800 },
        end: { line: 179, column: 68, offset: 6867 }
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
        start: { line: 181, column: 1, offset: 6869 },
        end: { line: 187, column: 4, offset: 7020 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 189, column: 1, offset: 7022 },
            end: { line: 189, column: 52, offset: 7073 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 189, column: 52, offset: 7073 },
            end: { line: 189, column: 62, offset: 7083 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 189, column: 62, offset: 7083 },
            end: { line: 189, column: 68, offset: 7089 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 7022 },
        end: { line: 189, column: 68, offset: 7089 }
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
        start: { line: 191, column: 1, offset: 7091 },
        end: { line: 202, column: 4, offset: 7235 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Object',
          position: {
            start: { line: 204, column: 5, offset: 7241 },
            end: { line: 204, column: 11, offset: 7247 }
          }
        }
      ],
      position: {
        start: { line: 204, column: 1, offset: 7237 },
        end: { line: 204, column: 11, offset: 7247 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 206, column: 1, offset: 7249 },
            end: { line: 206, column: 202, offset: 7450 }
          }
        }
      ],
      position: {
        start: { line: 206, column: 1, offset: 7249 },
        end: { line: 206, column: 202, offset: 7450 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 208, column: 1, offset: 7452 },
        end: { line: 210, column: 4, offset: 7488 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 212, column: 1, offset: 7490 },
            end: { line: 212, column: 22, offset: 7511 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 212, column: 22, offset: 7511 },
            end: { line: 212, column: 30, offset: 7519 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 212, column: 30, offset: 7519 },
            end: { line: 212, column: 93, offset: 7582 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 7490 },
        end: { line: 212, column: 93, offset: 7582 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 214, column: 1, offset: 7584 },
        end: { line: 216, column: 4, offset: 7614 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 218, column: 1, offset: 7616 },
            end: { line: 218, column: 142, offset: 7757 }
          }
        }
      ],
      position: {
        start: { line: 218, column: 1, offset: 7616 },
        end: { line: 218, column: 142, offset: 7757 }
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
        start: { line: 220, column: 1, offset: 7759 },
        end: { line: 228, column: 4, offset: 7990 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 230, column: 1, offset: 7992 },
            end: { line: 230, column: 73, offset: 8064 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 230, column: 73, offset: 8064 },
            end: { line: 230, column: 81, offset: 8072 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 230, column: 81, offset: 8072 },
            end: { line: 230, column: 90, offset: 8081 }
          }
        }
      ],
      position: {
        start: { line: 230, column: 1, offset: 7992 },
        end: { line: 230, column: 90, offset: 8081 }
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
        start: { line: 232, column: 1, offset: 8083 },
        end: { line: 237, column: 4, offset: 8283 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 239, column: 1, offset: 8285 },
            end: { line: 239, column: 66, offset: 8350 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 239, column: 66, offset: 8350 },
            end: { line: 239, column: 76, offset: 8360 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 239, column: 76, offset: 8360 },
            end: { line: 239, column: 82, offset: 8366 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 8285 },
        end: { line: 239, column: 82, offset: 8366 }
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
        start: { line: 241, column: 1, offset: 8368 },
        end: { line: 250, column: 4, offset: 8530 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Set',
          position: {
            start: { line: 252, column: 5, offset: 8536 },
            end: { line: 252, column: 8, offset: 8539 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 8532 },
        end: { line: 252, column: 8, offset: 8539 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 254, column: 1, offset: 8541 },
            end: { line: 254, column: 169, offset: 8709 }
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
                start: { line: 254, column: 170, offset: 8710 },
                end: { line: 254, column: 183, offset: 8723 }
              }
            }
          ],
          position: {
            start: { line: 254, column: 169, offset: 8709 },
            end: { line: 254, column: 306, offset: 8846 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 254, column: 306, offset: 8846 },
            end: { line: 254, column: 469, offset: 9009 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 254, column: 469, offset: 9009 },
            end: { line: 254, column: 475, offset: 9015 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 254, column: 475, offset: 9015 },
            end: { line: 254, column: 483, offset: 9023 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 1, offset: 8541 },
        end: { line: 254, column: 483, offset: 9023 }
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
        start: { line: 256, column: 1, offset: 9025 },
        end: { line: 261, column: 4, offset: 9208 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 263, column: 1, offset: 9210 },
            end: { line: 263, column: 26, offset: 9235 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 263, column: 26, offset: 9235 },
            end: { line: 263, column: 31, offset: 9240 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 263, column: 31, offset: 9240 },
            end: { line: 263, column: 44, offset: 9253 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 9210 },
        end: { line: 263, column: 44, offset: 9253 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 265, column: 1, offset: 9255 },
        end: { line: 267, column: 4, offset: 9291 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 269, column: 1, offset: 9293 },
            end: { line: 269, column: 42, offset: 9334 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 269, column: 42, offset: 9334 },
            end: { line: 269, column: 48, offset: 9340 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 269, column: 48, offset: 9340 },
            end: { line: 269, column: 65, offset: 9357 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 9293 },
        end: { line: 269, column: 65, offset: 9357 }
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
        start: { line: 271, column: 1, offset: 9359 },
        end: { line: 279, column: 4, offset: 9509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 281, column: 1, offset: 9511 },
            end: { line: 281, column: 42, offset: 9552 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 281, column: 42, offset: 9552 },
            end: { line: 281, column: 51, offset: 9561 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 281, column: 51, offset: 9561 },
            end: { line: 281, column: 68, offset: 9578 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 9511 },
        end: { line: 281, column: 68, offset: 9578 }
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
        start: { line: 283, column: 1, offset: 9580 },
        end: { line: 289, column: 4, offset: 9699 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 291, column: 1, offset: 9701 },
            end: { line: 291, column: 49, offset: 9749 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 291, column: 49, offset: 9749 },
            end: { line: 291, column: 59, offset: 9759 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 291, column: 59, offset: 9759 },
            end: { line: 291, column: 65, offset: 9765 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 9701 },
        end: { line: 291, column: 65, offset: 9765 }
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
        start: { line: 293, column: 1, offset: 9767 },
        end: { line: 304, column: 4, offset: 9920 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Map',
          position: {
            start: { line: 306, column: 5, offset: 9926 },
            end: { line: 306, column: 8, offset: 9929 }
          }
        }
      ],
      position: {
        start: { line: 306, column: 1, offset: 9922 },
        end: { line: 306, column: 8, offset: 9929 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 308, column: 1, offset: 9931 },
            end: { line: 308, column: 202, offset: 10132 }
          }
        }
      ],
      position: {
        start: { line: 308, column: 1, offset: 9931 },
        end: { line: 308, column: 202, offset: 10132 }
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
                    start: { line: 309, column: 5, offset: 10137 },
                    end: { line: 309, column: 113, offset: 10245 }
                  }
                }
              ],
              position: {
                start: { line: 309, column: 5, offset: 10137 },
                end: { line: 309, column: 113, offset: 10245 }
              }
            }
          ],
          position: {
            start: { line: 309, column: 3, offset: 10135 },
            end: { line: 309, column: 113, offset: 10245 }
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
                    start: { line: 310, column: 5, offset: 10250 },
                    end: { line: 310, column: 94, offset: 10339 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 310, column: 94, offset: 10339 },
                    end: { line: 310, column: 110, offset: 10355 }
                  }
                }
              ],
              position: {
                start: { line: 310, column: 5, offset: 10250 },
                end: { line: 310, column: 110, offset: 10355 }
              }
            }
          ],
          position: {
            start: { line: 310, column: 3, offset: 10248 },
            end: { line: 310, column: 110, offset: 10355 }
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
                    start: { line: 311, column: 5, offset: 10360 },
                    end: { line: 311, column: 130, offset: 10485 }
                  }
                }
              ],
              position: {
                start: { line: 311, column: 5, offset: 10360 },
                end: { line: 311, column: 130, offset: 10485 }
              }
            }
          ],
          position: {
            start: { line: 311, column: 3, offset: 10358 },
            end: { line: 311, column: 130, offset: 10485 }
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
                    start: { line: 312, column: 5, offset: 10490 },
                    end: { line: 312, column: 28, offset: 10513 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 312, column: 28, offset: 10513 },
                    end: { line: 312, column: 38, offset: 10523 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 312, column: 38, offset: 10523 },
                    end: { line: 312, column: 64, offset: 10549 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 312, column: 64, offset: 10549 },
                    end: { line: 312, column: 74, offset: 10559 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 312, column: 74, offset: 10559 },
                    end: { line: 312, column: 80, offset: 10565 }
                  }
                }
              ],
              position: {
                start: { line: 312, column: 5, offset: 10490 },
                end: { line: 312, column: 80, offset: 10565 }
              }
            }
          ],
          position: {
            start: { line: 312, column: 3, offset: 10488 },
            end: { line: 312, column: 80, offset: 10565 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 3, offset: 10135 },
        end: { line: 312, column: 80, offset: 10565 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 314, column: 1, offset: 10567 },
            end: { line: 314, column: 9, offset: 10575 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 314, column: 9, offset: 10575 },
            end: { line: 314, column: 14, offset: 10580 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 314, column: 14, offset: 10580 },
            end: { line: 314, column: 48, offset: 10614 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 314, column: 48, offset: 10614 },
            end: { line: 314, column: 53, offset: 10619 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 314, column: 53, offset: 10619 },
            end: { line: 314, column: 124, offset: 10690 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10567 },
        end: { line: 314, column: 124, offset: 10690 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 316, column: 1, offset: 10692 },
        end: { line: 322, column: 4, offset: 10768 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 324, column: 1, offset: 10770 },
            end: { line: 324, column: 42, offset: 10811 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 324, column: 42, offset: 10811 },
            end: { line: 324, column: 48, offset: 10817 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 324, column: 48, offset: 10817 },
            end: { line: 324, column: 65, offset: 10834 }
          }
        }
      ],
      position: {
        start: { line: 324, column: 1, offset: 10770 },
        end: { line: 324, column: 65, offset: 10834 }
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
        start: { line: 326, column: 1, offset: 10836 },
        end: { line: 333, column: 4, offset: 10987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 335, column: 1, offset: 10989 },
            end: { line: 335, column: 42, offset: 11030 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 335, column: 42, offset: 11030 },
            end: { line: 335, column: 51, offset: 11039 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 335, column: 51, offset: 11039 },
            end: { line: 335, column: 68, offset: 11056 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 10989 },
        end: { line: 335, column: 68, offset: 11056 }
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
        start: { line: 337, column: 1, offset: 11058 },
        end: { line: 347, column: 4, offset: 11211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 349, column: 1, offset: 11213 },
            end: { line: 349, column: 49, offset: 11261 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 349, column: 49, offset: 11261 },
            end: { line: 349, column: 59, offset: 11271 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 349, column: 59, offset: 11271 },
            end: { line: 349, column: 65, offset: 11277 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 11213 },
        end: { line: 349, column: 65, offset: 11277 }
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
        start: { line: 351, column: 1, offset: 11279 },
        end: { line: 364, column: 4, offset: 11544 }
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
            start: { line: 366, column: 5, offset: 11550 },
            end: { line: 366, column: 53, offset: 11598 }
          }
        }
      ],
      position: {
        start: { line: 366, column: 1, offset: 11546 },
        end: { line: 366, column: 53, offset: 11598 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 368, column: 1, offset: 11600 },
            end: { line: 368, column: 323, offset: 11922 }
          }
        }
      ],
      position: {
        start: { line: 368, column: 1, offset: 11600 },
        end: { line: 368, column: 323, offset: 11922 }
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
            start: { line: 370, column: 4, offset: 11927 },
            end: { line: 370, column: 23, offset: 11946 }
          }
        }
      ],
      position: {
        start: { line: 370, column: 1, offset: 11924 },
        end: { line: 370, column: 23, offset: 11946 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 371, column: 1, offset: 11947 },
            end: { line: 371, column: 115, offset: 12061 }
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
                start: { line: 371, column: 116, offset: 12062 },
                end: { line: 371, column: 133, offset: 12079 }
              }
            }
          ],
          position: {
            start: { line: 371, column: 115, offset: 12061 },
            end: { line: 371, column: 243, offset: 12189 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 371, column: 243, offset: 12189 },
            end: { line: 371, column: 409, offset: 12355 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 371, column: 409, offset: 12355 },
            end: { line: 371, column: 419, offset: 12365 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 371, column: 419, offset: 12365 },
            end: { line: 371, column: 425, offset: 12371 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 11947 },
        end: { line: 371, column: 425, offset: 12371 }
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
        start: { line: 373, column: 1, offset: 12373 },
        end: { line: 391, column: 4, offset: 12802 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Iterable Protocol',
          position: {
            start: { line: 393, column: 5, offset: 12808 },
            end: { line: 393, column: 22, offset: 12825 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 12804 },
        end: { line: 393, column: 22, offset: 12825 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 394, column: 1, offset: 12826 },
            end: { line: 394, column: 78, offset: 12903 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 394, column: 78, offset: 12903 },
            end: { line: 394, column: 99, offset: 12924 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 394, column: 99, offset: 12924 },
            end: { line: 394, column: 252, offset: 13077 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 394, column: 252, offset: 13077 },
            end: { line: 394, column: 258, offset: 13083 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 394, column: 258, offset: 13083 },
            end: { line: 394, column: 259, offset: 13084 }
          }
        }
      ],
      position: {
        start: { line: 394, column: 1, offset: 12826 },
        end: { line: 394, column: 259, offset: 13084 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Iterator = {\n' +
        '  next: (input? any)=>{ done: boolean, value: any }\n' +
        '}\n' +
        '\n' +
        'type Iterable = {\n' +
        '  [Symbol.iterator]: ()=>Iterator\n' +
        '}',
      position: {
        start: { line: 396, column: 1, offset: 13086 },
        end: { line: 404, column: 4, offset: 13245 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 406, column: 1, offset: 13247 },
            end: { line: 406, column: 73, offset: 13319 }
          }
        }
      ],
      position: {
        start: { line: 406, column: 1, offset: 13247 },
        end: { line: 406, column: 73, offset: 13319 }
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
        start: { line: 408, column: 1, offset: 13321 },
        end: { line: 444, column: 4, offset: 13802 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Generators and Generator Functions',
          position: {
            start: { line: 446, column: 5, offset: 13808 },
            end: { line: 446, column: 39, offset: 13842 }
          }
        }
      ],
      position: {
        start: { line: 446, column: 1, offset: 13804 },
        end: { line: 446, column: 39, offset: 13842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 447, column: 1, offset: 13843 },
            end: { line: 447, column: 103, offset: 13945 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 447, column: 103, offset: 13945 },
            end: { line: 447, column: 120, offset: 13962 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 447, column: 120, offset: 13962 },
            end: { line: 447, column: 136, offset: 13978 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 447, column: 136, offset: 13978 },
            end: { line: 447, column: 143, offset: 13985 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 447, column: 143, offset: 13985 },
            end: { line: 447, column: 152, offset: 13994 }
          }
        }
      ],
      position: {
        start: { line: 447, column: 1, offset: 13843 },
        end: { line: 447, column: 152, offset: 13994 }
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
        start: { line: 449, column: 1, offset: 13996 },
        end: { line: 467, column: 4, offset: 14362 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 469, column: 1, offset: 14364 },
            end: { line: 469, column: 159, offset: 14522 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 469, column: 159, offset: 14522 },
            end: { line: 469, column: 182, offset: 14545 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 469, column: 182, offset: 14545 },
            end: { line: 469, column: 183, offset: 14546 }
          }
        }
      ],
      position: {
        start: { line: 469, column: 1, offset: 14364 },
        end: { line: 469, column: 183, offset: 14546 }
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
        '\n' +
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
        'for await (const item of myObject) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 471, column: 1, offset: 14548 },
        end: { line: 508, column: 4, offset: 15036 }
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
            start: { line: 510, column: 4, offset: 15041 },
            end: { line: 510, column: 27, offset: 15064 }
          }
        }
      ],
      position: {
        start: { line: 510, column: 1, offset: 15038 },
        end: { line: 510, column: 27, offset: 15064 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 511, column: 1, offset: 15065 },
            end: { line: 511, column: 184, offset: 15248 }
          }
        }
      ],
      position: {
        start: { line: 511, column: 1, offset: 15065 },
        end: { line: 511, column: 184, offset: 15248 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Promise',
          position: {
            start: { line: 513, column: 5, offset: 15254 },
            end: { line: 513, column: 12, offset: 15261 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15250 },
        end: { line: 513, column: 12, offset: 15261 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 515, column: 1, offset: 15263 },
            end: { line: 515, column: 203, offset: 15465 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 515, column: 203, offset: 15465 },
            end: { line: 515, column: 210, offset: 15472 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 515, column: 210, offset: 15472 },
            end: { line: 515, column: 240, offset: 15502 }
          }
        }
      ],
      position: {
        start: { line: 515, column: 1, offset: 15263 },
        end: { line: 515, column: 240, offset: 15502 }
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
        start: { line: 517, column: 1, offset: 15504 },
        end: { line: 523, column: 4, offset: 15678 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 525, column: 1, offset: 15680 },
            end: { line: 525, column: 31, offset: 15710 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 525, column: 31, offset: 15710 },
            end: { line: 525, column: 38, offset: 15717 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 525, column: 38, offset: 15717 },
            end: { line: 525, column: 43, offset: 15722 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 525, column: 43, offset: 15722 },
            end: { line: 525, column: 50, offset: 15729 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 525, column: 50, offset: 15729 },
            end: { line: 525, column: 111, offset: 15790 }
          }
        }
      ],
      position: {
        start: { line: 525, column: 1, offset: 15680 },
        end: { line: 525, column: 111, offset: 15790 }
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
        start: { line: 527, column: 1, offset: 15792 },
        end: { line: 536, column: 4, offset: 16019 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 538, column: 1, offset: 16021 },
            end: { line: 538, column: 17, offset: 16037 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 538, column: 17, offset: 16037 },
            end: { line: 538, column: 26, offset: 16046 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 538, column: 26, offset: 16046 },
            end: { line: 538, column: 59, offset: 16079 }
          }
        }
      ],
      position: {
        start: { line: 538, column: 1, offset: 16021 },
        end: { line: 538, column: 59, offset: 16079 }
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
        start: { line: 540, column: 1, offset: 16081 },
        end: { line: 560, column: 4, offset: 16498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 562, column: 1, offset: 16500 },
            end: { line: 562, column: 85, offset: 16584 }
          }
        }
      ],
      position: {
        start: { line: 562, column: 1, offset: 16500 },
        end: { line: 562, column: 85, offset: 16584 }
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
        start: { line: 564, column: 1, offset: 16586 },
        end: { line: 568, column: 4, offset: 16774 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 570, column: 1, offset: 16776 },
            end: { line: 570, column: 112, offset: 16887 }
          }
        }
      ],
      position: {
        start: { line: 570, column: 1, offset: 16776 },
        end: { line: 570, column: 112, offset: 16887 }
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
        start: { line: 572, column: 1, offset: 16889 },
        end: { line: 584, column: 4, offset: 17226 }
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
            start: { line: 586, column: 4, offset: 17231 },
            end: { line: 586, column: 36, offset: 17263 }
          }
        }
      ],
      position: {
        start: { line: 586, column: 1, offset: 17228 },
        end: { line: 586, column: 36, offset: 17263 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 587, column: 1, offset: 17264 },
            end: { line: 587, column: 143, offset: 17406 }
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
                start: { line: 587, column: 144, offset: 17407 },
                end: { line: 587, column: 167, offset: 17430 }
              }
            }
          ],
          position: {
            start: { line: 587, column: 143, offset: 17406 },
            end: { line: 587, column: 303, offset: 17566 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 587, column: 303, offset: 17566 },
            end: { line: 587, column: 367, offset: 17630 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 587, column: 367, offset: 17630 },
            end: { line: 587, column: 384, offset: 17647 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 587, column: 384, offset: 17647 },
            end: { line: 587, column: 424, offset: 17687 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 587, column: 424, offset: 17687 },
            end: { line: 587, column: 440, offset: 17703 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 587, column: 440, offset: 17703 },
            end: { line: 587, column: 446, offset: 17709 }
          }
        }
      ],
      position: {
        start: { line: 587, column: 1, offset: 17264 },
        end: { line: 587, column: 446, offset: 17709 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Async Iterable Protocol',
          position: {
            start: { line: 589, column: 5, offset: 17715 },
            end: { line: 589, column: 28, offset: 17738 }
          }
        }
      ],
      position: {
        start: { line: 589, column: 1, offset: 17711 },
        end: { line: 589, column: 28, offset: 17738 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 590, column: 1, offset: 17739 },
            end: { line: 590, column: 84, offset: 17822 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 590, column: 84, offset: 17822 },
            end: { line: 590, column: 110, offset: 17848 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 590, column: 110, offset: 17848 },
            end: { line: 590, column: 276, offset: 18014 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 590, column: 276, offset: 18014 },
            end: { line: 590, column: 282, offset: 18020 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 590, column: 282, offset: 18020 },
            end: { line: 590, column: 283, offset: 18021 }
          }
        }
      ],
      position: {
        start: { line: 590, column: 1, offset: 17739 },
        end: { line: 590, column: 283, offset: 18021 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type AsyncIterator = {\n' +
        '  next: (input? any)=>Promise<{ done: boolean, value: any }>\n' +
        '}\n' +
        '\n' +
        'type AsyncIterable = {\n' +
        '  [Symbol.asyncIterator]: ()=>AsyncIterator\n' +
        '}',
      position: {
        start: { line: 592, column: 1, offset: 18023 },
        end: { line: 600, column: 4, offset: 18211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 602, column: 1, offset: 18213 },
            end: { line: 602, column: 79, offset: 18291 }
          }
        }
      ],
      position: {
        start: { line: 602, column: 1, offset: 18213 },
        end: { line: 602, column: 79, offset: 18291 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'class MyAsyncIterable {\n' +
        '  constructor() {\n' +
        '  }\n' +
        '\n' +
        '  [Symbol.asyncIterator]() {\n' +
        '    return {\n' +
        '      count: 0,\n' +
        '      async next() {\n' +
        '        this.count += 1\n' +
        '\n' +
        '        if (this.count > 5) {\n' +
        '          return { value: undefined, done: true }\n' +
        '        }\n' +
        '\n' +
        '        return { value: this.count, done: false }\n' +
        '      }\n' +
        '    }\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const myAsyncIterable = new MyAsyncIterable()\n' +
        '\n' +
        'for await (const number of myAsyncIterable) {\n' +
        '  console.log(number)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '  // 4\n' +
        '  // 5\n' +
        '}',
      position: {
        start: { line: 604, column: 1, offset: 18293 },
        end: { line: 635, column: 4, offset: 18788 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Async Generators and Async Generator Functions',
          position: {
            start: { line: 637, column: 5, offset: 18794 },
            end: { line: 637, column: 51, offset: 18840 }
          }
        }
      ],
      position: {
        start: { line: 637, column: 1, offset: 18790 },
        end: { line: 637, column: 51, offset: 18840 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 638, column: 1, offset: 18841 },
            end: { line: 638, column: 35, offset: 18875 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 638, column: 35, offset: 18875 },
            end: { line: 638, column: 58, offset: 18898 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 638, column: 58, offset: 18898 },
            end: { line: 638, column: 70, offset: 18910 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 638, column: 70, offset: 18910 },
            end: { line: 638, column: 77, offset: 18917 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 638, column: 77, offset: 18917 },
            end: { line: 638, column: 122, offset: 18962 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 638, column: 122, offset: 18962 },
            end: { line: 638, column: 138, offset: 18978 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 638, column: 138, offset: 18978 },
            end: { line: 638, column: 146, offset: 18986 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 1, offset: 18841 },
        end: { line: 638, column: 146, offset: 18986 }
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
        start: { line: 640, column: 1, offset: 18988 },
        end: { line: 660, column: 4, offset: 19468 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 662, column: 1, offset: 19470 },
            end: { line: 662, column: 184, offset: 19653 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 662, column: 184, offset: 19653 },
            end: { line: 662, column: 218, offset: 19687 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 662, column: 218, offset: 19687 },
            end: { line: 662, column: 219, offset: 19688 }
          }
        }
      ],
      position: {
        start: { line: 662, column: 1, offset: 19470 },
        end: { line: 662, column: 219, offset: 19688 }
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
        start: { line: 664, column: 1, offset: 19690 },
        end: { line: 704, column: 4, offset: 20283 }
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
            start: { line: 706, column: 4, offset: 20288 },
            end: { line: 706, column: 24, offset: 20308 }
          }
        }
      ],
      position: {
        start: { line: 706, column: 1, offset: 20285 },
        end: { line: 706, column: 24, offset: 20308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 707, column: 1, offset: 20309 },
            end: { line: 707, column: 253, offset: 20561 }
          }
        }
      ],
      position: {
        start: { line: 707, column: 1, offset: 20309 },
        end: { line: 707, column: 253, offset: 20561 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Functor',
          position: {
            start: { line: 709, column: 5, offset: 20567 },
            end: { line: 709, column: 12, offset: 20574 }
          }
        }
      ],
      position: {
        start: { line: 709, column: 1, offset: 20563 },
        end: { line: 709, column: 12, offset: 20574 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 711, column: 1, offset: 20576 },
            end: { line: 711, column: 64, offset: 20639 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 711, column: 64, offset: 20639 },
            end: { line: 711, column: 70, offset: 20645 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 711, column: 70, offset: 20645 },
            end: { line: 711, column: 103, offset: 20678 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 711, column: 103, offset: 20678 },
            end: { line: 711, column: 109, offset: 20684 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 711, column: 109, offset: 20684 },
            end: { line: 711, column: 143, offset: 20718 }
          }
        }
      ],
      position: {
        start: { line: 711, column: 1, offset: 20576 },
        end: { line: 711, column: 143, offset: 20718 }
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
                    start: { line: 713, column: 5, offset: 20724 },
                    end: { line: 713, column: 50, offset: 20769 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 713, column: 50, offset: 20769 },
                    end: { line: 713, column: 58, offset: 20777 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 713, column: 58, offset: 20777 },
                    end: { line: 713, column: 119, offset: 20838 }
                  }
                }
              ],
              position: {
                start: { line: 713, column: 5, offset: 20724 },
                end: { line: 713, column: 119, offset: 20838 }
              }
            }
          ],
          position: {
            start: { line: 713, column: 2, offset: 20721 },
            end: { line: 713, column: 119, offset: 20838 }
          }
        }
      ],
      position: {
        start: { line: 713, column: 2, offset: 20721 },
        end: { line: 713, column: 119, offset: 20838 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 715, column: 1, offset: 20840 },
        end: { line: 720, column: 4, offset: 20917 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'const identity = a => a\n' +
        '\n' +
        'console.log(myArray.map(identity))\n' +
        'console.log(myArray)',
      position: {
        start: { line: 722, column: 1, offset: 20919 },
        end: { line: 729, column: 4, offset: 21063 }
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
                    start: { line: 731, column: 5, offset: 21069 },
                    end: { line: 731, column: 63, offset: 21127 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 731, column: 63, offset: 21127 },
                    end: { line: 731, column: 69, offset: 21133 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 731, column: 69, offset: 21133 },
                    end: { line: 731, column: 126, offset: 21190 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 731, column: 126, offset: 21190 },
                    end: { line: 731, column: 132, offset: 21196 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 731, column: 132, offset: 21196 },
                    end: { line: 731, column: 143, offset: 21207 }
                  }
                }
              ],
              position: {
                start: { line: 731, column: 5, offset: 21069 },
                end: { line: 731, column: 143, offset: 21207 }
              }
            }
          ],
          position: {
            start: { line: 731, column: 2, offset: 21066 },
            end: { line: 731, column: 143, offset: 21207 }
          }
        }
      ],
      position: {
        start: { line: 731, column: 2, offset: 21066 },
        end: { line: 731, column: 143, offset: 21207 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myFunctor.map(f).map(g),\n' +
        '  myFunctor.map(compose(g, f))\n' +
        ')',
      position: {
        start: { line: 733, column: 1, offset: 21209 },
        end: { line: 738, column: 4, offset: 21305 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'const f = x => x + 1\n' +
        'const g = x => x * 2\n' +
        '\n' +
        'console.log(myArray.map(f).map(g))\n' +
        'console.log(myArray.map(compose(g, f)))',
      position: {
        start: { line: 740, column: 1, offset: 21307 },
        end: { line: 748, column: 4, offset: 21488 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 750, column: 1, offset: 21490 },
            end: { line: 750, column: 65, offset: 21554 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 1, offset: 21490 },
        end: { line: 750, column: 65, offset: 21554 }
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
                    start: { line: 751, column: 4, offset: 21558 },
                    end: { line: 751, column: 11, offset: 21565 }
                  }
                }
              ],
              position: {
                start: { line: 751, column: 4, offset: 21558 },
                end: { line: 751, column: 11, offset: 21565 }
              }
            }
          ],
          position: {
            start: { line: 751, column: 2, offset: 21556 },
            end: { line: 751, column: 11, offset: 21565 }
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
                    start: { line: 752, column: 4, offset: 21569 },
                    end: { line: 752, column: 9, offset: 21574 }
                  }
                }
              ],
              position: {
                start: { line: 752, column: 4, offset: 21569 },
                end: { line: 752, column: 9, offset: 21574 }
              }
            }
          ],
          position: {
            start: { line: 752, column: 2, offset: 21567 },
            end: { line: 752, column: 9, offset: 21574 }
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
                    start: { line: 753, column: 4, offset: 21578 },
                    end: { line: 753, column: 9, offset: 21583 }
                  }
                }
              ],
              position: {
                start: { line: 753, column: 4, offset: 21578 },
                end: { line: 753, column: 9, offset: 21583 }
              }
            }
          ],
          position: {
            start: { line: 753, column: 2, offset: 21576 },
            end: { line: 753, column: 9, offset: 21583 }
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
                    start: { line: 754, column: 4, offset: 21587 },
                    end: { line: 754, column: 15, offset: 21598 }
                  }
                }
              ],
              position: {
                start: { line: 754, column: 4, offset: 21587 },
                end: { line: 754, column: 15, offset: 21598 }
              }
            }
          ],
          position: {
            start: { line: 754, column: 2, offset: 21585 },
            end: { line: 754, column: 15, offset: 21598 }
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
                    start: { line: 755, column: 4, offset: 21602 },
                    end: { line: 755, column: 21, offset: 21619 }
                  }
                }
              ],
              position: {
                start: { line: 755, column: 4, offset: 21602 },
                end: { line: 755, column: 21, offset: 21619 }
              }
            }
          ],
          position: {
            start: { line: 755, column: 2, offset: 21600 },
            end: { line: 755, column: 21, offset: 21619 }
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
                    start: { line: 756, column: 4, offset: 21623 },
                    end: { line: 756, column: 12, offset: 21631 }
                  }
                }
              ],
              position: {
                start: { line: 756, column: 4, offset: 21623 },
                end: { line: 756, column: 12, offset: 21631 }
              }
            }
          ],
          position: {
            start: { line: 756, column: 2, offset: 21621 },
            end: { line: 756, column: 12, offset: 21631 }
          }
        }
      ],
      position: {
        start: { line: 751, column: 2, offset: 21556 },
        end: { line: 756, column: 12, offset: 21631 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Filterable',
          position: {
            start: { line: 758, column: 5, offset: 21637 },
            end: { line: 758, column: 15, offset: 21647 }
          }
        }
      ],
      position: {
        start: { line: 758, column: 1, offset: 21633 },
        end: { line: 758, column: 15, offset: 21647 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 760, column: 1, offset: 21649 },
            end: { line: 760, column: 67, offset: 21715 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 760, column: 67, offset: 21715 },
            end: { line: 760, column: 76, offset: 21724 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 760, column: 76, offset: 21724 },
            end: { line: 760, column: 109, offset: 21757 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 760, column: 109, offset: 21757 },
            end: { line: 760, column: 118, offset: 21766 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 760, column: 118, offset: 21766 },
            end: { line: 760, column: 154, offset: 21802 }
          }
        }
      ],
      position: {
        start: { line: 760, column: 1, offset: 21649 },
        end: { line: 760, column: 154, offset: 21802 }
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
                    start: { line: 762, column: 5, offset: 21808 },
                    end: { line: 762, column: 97, offset: 21900 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 762, column: 97, offset: 21900 },
                    end: { line: 762, column: 106, offset: 21909 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 762, column: 106, offset: 21909 },
                    end: { line: 762, column: 209, offset: 22012 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 762, column: 209, offset: 22012 },
                    end: { line: 762, column: 218, offset: 22021 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 762, column: 218, offset: 22021 },
                    end: { line: 762, column: 219, offset: 22022 }
                  }
                }
              ],
              position: {
                start: { line: 762, column: 5, offset: 21808 },
                end: { line: 762, column: 219, offset: 22022 }
              }
            }
          ],
          position: {
            start: { line: 762, column: 2, offset: 21805 },
            end: { line: 762, column: 219, offset: 22022 }
          }
        }
      ],
      position: {
        start: { line: 762, column: 2, offset: 21805 },
        end: { line: 762, column: 219, offset: 22022 }
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
        start: { line: 764, column: 1, offset: 22024 },
        end: { line: 769, column: 4, offset: 22139 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'const f = n => n > 2\n' +
        'const g = n => n % 2 == 1\n' +
        '\n' +
        'console.log(myArray.filter(x => f(x) && g(x)))\n' +
        'console.log(myArray.filter(f).filter(g))',
      position: {
        start: { line: 771, column: 1, offset: 22141 },
        end: { line: 779, column: 4, offset: 22340 }
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
                    start: { line: 781, column: 5, offset: 22346 },
                    end: { line: 781, column: 121, offset: 22462 }
                  }
                }
              ],
              position: {
                start: { line: 781, column: 5, offset: 22346 },
                end: { line: 781, column: 121, offset: 22462 }
              }
            }
          ],
          position: {
            start: { line: 781, column: 2, offset: 22343 },
            end: { line: 781, column: 121, offset: 22462 }
          }
        }
      ],
      position: {
        start: { line: 781, column: 2, offset: 22343 },
        end: { line: 781, column: 121, offset: 22462 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 783, column: 1, offset: 22464 },
        end: { line: 788, column: 4, offset: 22552 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'console.log(myArray.filter(() => true))\n' +
        'console.log(myArray)',
      position: {
        start: { line: 790, column: 1, offset: 22554 },
        end: { line: 795, column: 4, offset: 22678 }
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
                    start: { line: 797, column: 5, offset: 22684 },
                    end: { line: 797, column: 159, offset: 22838 }
                  }
                }
              ],
              position: {
                start: { line: 797, column: 5, offset: 22684 },
                end: { line: 797, column: 159, offset: 22838 }
              }
            }
          ],
          position: {
            start: { line: 797, column: 2, offset: 22681 },
            end: { line: 797, column: 159, offset: 22838 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 2, offset: 22681 },
        end: { line: 797, column: 159, offset: 22838 }
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
        start: { line: 799, column: 1, offset: 22840 },
        end: { line: 804, column: 4, offset: 22951 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArrayA = [1, 2, 3, 4, 5]\n' +
        "const myArrayB = ['a', 'b', 'c']\n" +
        '\n' +
        'console.log(myArrayA.filter(() => false))\n' +
        'console.log(myArrayB.filter(() => false))',
      position: {
        start: { line: 806, column: 1, offset: 22953 },
        end: { line: 812, column: 4, offset: 23134 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 814, column: 1, offset: 23136 },
            end: { line: 814, column: 68, offset: 23203 }
          }
        }
      ],
      position: {
        start: { line: 814, column: 1, offset: 23136 },
        end: { line: 814, column: 68, offset: 23203 }
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
                    start: { line: 815, column: 4, offset: 23207 },
                    end: { line: 815, column: 11, offset: 23214 }
                  }
                }
              ],
              position: {
                start: { line: 815, column: 4, offset: 23207 },
                end: { line: 815, column: 11, offset: 23214 }
              }
            }
          ],
          position: {
            start: { line: 815, column: 2, offset: 23205 },
            end: { line: 815, column: 11, offset: 23214 }
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
                    start: { line: 816, column: 4, offset: 23218 },
                    end: { line: 816, column: 9, offset: 23223 }
                  }
                }
              ],
              position: {
                start: { line: 816, column: 4, offset: 23218 },
                end: { line: 816, column: 9, offset: 23223 }
              }
            }
          ],
          position: {
            start: { line: 816, column: 2, offset: 23216 },
            end: { line: 816, column: 9, offset: 23223 }
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
                    start: { line: 817, column: 4, offset: 23227 },
                    end: { line: 817, column: 9, offset: 23232 }
                  }
                }
              ],
              position: {
                start: { line: 817, column: 4, offset: 23227 },
                end: { line: 817, column: 9, offset: 23232 }
              }
            }
          ],
          position: {
            start: { line: 817, column: 2, offset: 23225 },
            end: { line: 817, column: 9, offset: 23232 }
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
                    start: { line: 818, column: 4, offset: 23236 },
                    end: { line: 818, column: 15, offset: 23247 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 4, offset: 23236 },
                end: { line: 818, column: 15, offset: 23247 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23234 },
            end: { line: 818, column: 15, offset: 23247 }
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
                    start: { line: 819, column: 4, offset: 23251 },
                    end: { line: 819, column: 21, offset: 23268 }
                  }
                }
              ],
              position: {
                start: { line: 819, column: 4, offset: 23251 },
                end: { line: 819, column: 21, offset: 23268 }
              }
            }
          ],
          position: {
            start: { line: 819, column: 2, offset: 23249 },
            end: { line: 819, column: 21, offset: 23268 }
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
                    start: { line: 820, column: 4, offset: 23272 },
                    end: { line: 820, column: 12, offset: 23280 }
                  }
                }
              ],
              position: {
                start: { line: 820, column: 4, offset: 23272 },
                end: { line: 820, column: 12, offset: 23280 }
              }
            }
          ],
          position: {
            start: { line: 820, column: 2, offset: 23270 },
            end: { line: 820, column: 12, offset: 23280 }
          }
        }
      ],
      position: {
        start: { line: 815, column: 2, offset: 23205 },
        end: { line: 820, column: 12, offset: 23280 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Foldable',
          position: {
            start: { line: 822, column: 5, offset: 23286 },
            end: { line: 822, column: 13, offset: 23294 }
          }
        }
      ],
      position: {
        start: { line: 822, column: 1, offset: 23282 },
        end: { line: 822, column: 13, offset: 23294 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 824, column: 1, offset: 23296 },
            end: { line: 824, column: 65, offset: 23360 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 824, column: 65, offset: 23360 },
            end: { line: 824, column: 74, offset: 23369 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 824, column: 74, offset: 23369 },
            end: { line: 824, column: 107, offset: 23402 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 824, column: 107, offset: 23402 },
            end: { line: 824, column: 116, offset: 23411 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 824, column: 116, offset: 23411 },
            end: { line: 824, column: 151, offset: 23446 }
          }
        }
      ],
      position: {
        start: { line: 824, column: 1, offset: 23296 },
        end: { line: 824, column: 152, offset: 23447 }
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
                    start: { line: 826, column: 5, offset: 23453 },
                    end: { line: 826, column: 86, offset: 23534 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 826, column: 86, offset: 23534 },
                    end: { line: 826, column: 95, offset: 23543 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 826, column: 95, offset: 23543 },
                    end: { line: 826, column: 253, offset: 23701 }
                  }
                }
              ],
              position: {
                start: { line: 826, column: 5, offset: 23453 },
                end: { line: 826, column: 253, offset: 23701 }
              }
            }
          ],
          position: {
            start: { line: 826, column: 2, offset: 23450 },
            end: { line: 826, column: 253, offset: 23701 }
          }
        }
      ],
      position: {
        start: { line: 826, column: 2, offset: 23450 },
        end: { line: 826, column: 253, offset: 23701 }
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
        start: { line: 828, column: 1, offset: 23703 },
        end: { line: 835, column: 4, offset: 23873 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        'const add = (a, b) => a + b\n' +
        '\n' +
        'console.log(myArray.reduce(add))\n' +
        'console.log(\n' +
        '  myArray\n' +
        '    .reduce((accumulator, item) => accumulator.concat([item]) , [])\n' +
        '    .reduce(add)\n' +
        ')',
      position: {
        start: { line: 837, column: 1, offset: 23875 },
        end: { line: 847, column: 4, offset: 24109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 849, column: 1, offset: 24111 },
            end: { line: 849, column: 66, offset: 24176 }
          }
        }
      ],
      position: {
        start: { line: 849, column: 1, offset: 24111 },
        end: { line: 849, column: 66, offset: 24176 }
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
                    start: { line: 850, column: 4, offset: 24180 },
                    end: { line: 850, column: 11, offset: 24187 }
                  }
                }
              ],
              position: {
                start: { line: 850, column: 4, offset: 24180 },
                end: { line: 850, column: 11, offset: 24187 }
              }
            }
          ],
          position: {
            start: { line: 850, column: 2, offset: 24178 },
            end: { line: 850, column: 11, offset: 24187 }
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
                    start: { line: 851, column: 4, offset: 24191 },
                    end: { line: 851, column: 9, offset: 24196 }
                  }
                }
              ],
              position: {
                start: { line: 851, column: 4, offset: 24191 },
                end: { line: 851, column: 9, offset: 24196 }
              }
            }
          ],
          position: {
            start: { line: 851, column: 2, offset: 24189 },
            end: { line: 851, column: 9, offset: 24196 }
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
                    start: { line: 852, column: 4, offset: 24200 },
                    end: { line: 852, column: 9, offset: 24205 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24200 },
                end: { line: 852, column: 9, offset: 24205 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24198 },
            end: { line: 852, column: 9, offset: 24205 }
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
                    start: { line: 853, column: 4, offset: 24209 },
                    end: { line: 853, column: 15, offset: 24220 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24209 },
                end: { line: 853, column: 15, offset: 24220 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24207 },
            end: { line: 853, column: 15, offset: 24220 }
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
                    start: { line: 854, column: 4, offset: 24224 },
                    end: { line: 854, column: 21, offset: 24241 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24224 },
                end: { line: 854, column: 21, offset: 24241 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24222 },
            end: { line: 854, column: 21, offset: 24241 }
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
                    start: { line: 855, column: 4, offset: 24245 },
                    end: { line: 855, column: 12, offset: 24253 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24245 },
                end: { line: 855, column: 12, offset: 24253 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24243 },
            end: { line: 855, column: 12, offset: 24253 }
          }
        }
      ],
      position: {
        start: { line: 850, column: 2, offset: 24178 },
        end: { line: 855, column: 12, offset: 24253 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Semigroup',
          position: {
            start: { line: 857, column: 5, offset: 24259 },
            end: { line: 857, column: 14, offset: 24268 }
          }
        }
      ],
      position: {
        start: { line: 857, column: 1, offset: 24255 },
        end: { line: 857, column: 14, offset: 24268 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 859, column: 1, offset: 24270 },
            end: { line: 859, column: 66, offset: 24335 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 859, column: 66, offset: 24335 },
            end: { line: 859, column: 75, offset: 24344 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 859, column: 75, offset: 24344 },
            end: { line: 859, column: 108, offset: 24377 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 859, column: 108, offset: 24377 },
            end: { line: 859, column: 117, offset: 24386 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 859, column: 117, offset: 24386 },
            end: { line: 859, column: 152, offset: 24421 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24270 },
        end: { line: 859, column: 152, offset: 24421 }
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
                    start: { line: 861, column: 5, offset: 24427 },
                    end: { line: 861, column: 162, offset: 24584 }
                  }
                }
              ],
              position: {
                start: { line: 861, column: 5, offset: 24427 },
                end: { line: 861, column: 162, offset: 24584 }
              }
            }
          ],
          position: {
            start: { line: 861, column: 2, offset: 24424 },
            end: { line: 861, column: 162, offset: 24584 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 2, offset: 24424 },
        end: { line: 861, column: 162, offset: 24584 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  mySemigroup.concat(a).concat(b, c),\n' +
        '  mySemigroup.concat(a, b).concat(c)\n' +
        ')',
      position: {
        start: { line: 863, column: 1, offset: 24586 },
        end: { line: 868, column: 4, offset: 24699 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 870, column: 1, offset: 24701 },
        end: { line: 873, column: 4, offset: 24811 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 875, column: 1, offset: 24813 },
            end: { line: 875, column: 67, offset: 24879 }
          }
        }
      ],
      position: {
        start: { line: 875, column: 1, offset: 24813 },
        end: { line: 875, column: 67, offset: 24879 }
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
                    start: { line: 876, column: 4, offset: 24883 },
                    end: { line: 876, column: 11, offset: 24890 }
                  }
                }
              ],
              position: {
                start: { line: 876, column: 4, offset: 24883 },
                end: { line: 876, column: 11, offset: 24890 }
              }
            }
          ],
          position: {
            start: { line: 876, column: 2, offset: 24881 },
            end: { line: 876, column: 11, offset: 24890 }
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
                    start: { line: 877, column: 4, offset: 24894 },
                    end: { line: 877, column: 12, offset: 24902 }
                  }
                }
              ],
              position: {
                start: { line: 877, column: 4, offset: 24894 },
                end: { line: 877, column: 12, offset: 24902 }
              }
            }
          ],
          position: {
            start: { line: 877, column: 2, offset: 24892 },
            end: { line: 877, column: 12, offset: 24902 }
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
                    start: { line: 878, column: 4, offset: 24906 },
                    end: { line: 878, column: 9, offset: 24911 }
                  }
                }
              ],
              position: {
                start: { line: 878, column: 4, offset: 24906 },
                end: { line: 878, column: 9, offset: 24911 }
              }
            }
          ],
          position: {
            start: { line: 878, column: 2, offset: 24904 },
            end: { line: 878, column: 9, offset: 24911 }
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
                    start: { line: 879, column: 4, offset: 24915 },
                    end: { line: 879, column: 12, offset: 24923 }
                  }
                }
              ],
              position: {
                start: { line: 879, column: 4, offset: 24915 },
                end: { line: 879, column: 12, offset: 24923 }
              }
            }
          ],
          position: {
            start: { line: 879, column: 2, offset: 24913 },
            end: { line: 879, column: 12, offset: 24923 }
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
                    start: { line: 880, column: 4, offset: 24927 },
                    end: { line: 880, column: 12, offset: 24935 }
                  }
                }
              ],
              position: {
                start: { line: 880, column: 4, offset: 24927 },
                end: { line: 880, column: 12, offset: 24935 }
              }
            }
          ],
          position: {
            start: { line: 880, column: 2, offset: 24925 },
            end: { line: 880, column: 12, offset: 24935 }
          }
        }
      ],
      position: {
        start: { line: 876, column: 2, offset: 24881 },
        end: { line: 880, column: 12, offset: 24935 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Monad',
          position: {
            start: { line: 882, column: 5, offset: 24941 },
            end: { line: 882, column: 10, offset: 24946 }
          }
        }
      ],
      position: {
        start: { line: 882, column: 1, offset: 24937 },
        end: { line: 882, column: 10, offset: 24946 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 884, column: 1, offset: 24948 },
            end: { line: 884, column: 62, offset: 25009 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 884, column: 62, offset: 25009 },
            end: { line: 884, column: 72, offset: 25019 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 884, column: 72, offset: 25019 },
            end: { line: 884, column: 76, offset: 25023 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 884, column: 76, offset: 25023 },
            end: { line: 884, column: 84, offset: 25031 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 884, column: 84, offset: 25031 },
            end: { line: 884, column: 118, offset: 25065 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 884, column: 118, offset: 25065 },
            end: { line: 884, column: 128, offset: 25075 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 884, column: 128, offset: 25075 },
            end: { line: 884, column: 132, offset: 25079 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 884, column: 132, offset: 25079 },
            end: { line: 884, column: 140, offset: 25087 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 884, column: 140, offset: 25087 },
            end: { line: 884, column: 172, offset: 25119 }
          }
        }
      ],
      position: {
        start: { line: 884, column: 1, offset: 24948 },
        end: { line: 884, column: 172, offset: 25119 }
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
                    start: { line: 886, column: 5, offset: 25125 },
                    end: { line: 886, column: 77, offset: 25197 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 886, column: 77, offset: 25197 },
                    end: { line: 886, column: 87, offset: 25207 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 886, column: 87, offset: 25207 },
                    end: { line: 886, column: 91, offset: 25211 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 886, column: 91, offset: 25211 },
                    end: { line: 886, column: 99, offset: 25219 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 886, column: 99, offset: 25219 },
                    end: { line: 886, column: 177, offset: 25297 }
                  }
                }
              ],
              position: {
                start: { line: 886, column: 5, offset: 25125 },
                end: { line: 886, column: 177, offset: 25297 }
              }
            }
          ],
          position: {
            start: { line: 886, column: 2, offset: 25122 },
            end: { line: 886, column: 177, offset: 25297 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 2, offset: 25122 },
        end: { line: 886, column: 177, offset: 25297 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 888, column: 1, offset: 25299 },
        end: { line: 893, column: 4, offset: 25372 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const ArrayOf = curry.arity(1, Array.of)\n' +
        '\n' +
        'const f = x => [x ** 2]\n' +
        'const a = 9\n' +
        '\n' +
        'console.log(ArrayOf(a).flatMap(f))\n' +
        'console.log(f(a))',
      position: {
        start: { line: 895, column: 1, offset: 25374 },
        end: { line: 903, column: 4, offset: 25536 }
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
                    start: { line: 905, column: 5, offset: 25542 },
                    end: { line: 905, column: 119, offset: 25656 }
                  }
                }
              ],
              position: {
                start: { line: 905, column: 5, offset: 25542 },
                end: { line: 905, column: 119, offset: 25656 }
              }
            }
          ],
          position: {
            start: { line: 905, column: 2, offset: 25539 },
            end: { line: 905, column: 119, offset: 25656 }
          }
        }
      ],
      position: {
        start: { line: 905, column: 2, offset: 25539 },
        end: { line: 905, column: 119, offset: 25656 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 907, column: 1, offset: 25658 },
        end: { line: 912, column: 4, offset: 25737 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'const ArrayOf = curry.arity(1, Array.of)\n' +
        '\n' +
        'console.log(myArray.flatMap(ArrayOf))\n' +
        'console.log(myArray)',
      position: {
        start: { line: 914, column: 1, offset: 25739 },
        end: { line: 921, column: 4, offset: 25903 }
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
                  value: 'Associativity: the order of execution of chaining monadic operations on a monad does not affect the final result.',
                  position: {
                    start: { line: 923, column: 5, offset: 25909 },
                    end: { line: 923, column: 118, offset: 26022 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 25909 },
                end: { line: 923, column: 118, offset: 26022 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 25906 },
            end: { line: 923, column: 118, offset: 26022 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 25906 },
        end: { line: 923, column: 118, offset: 26022 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// f and g are functions that return a monad\n' +
        'assert.equivalent(\n' +
        '  myMonad.flatMap(f).flatMap(g),\n' +
        '  myMonad.flatMap(x => f(x).flatMap(g))\n' +
        ')',
      position: {
        start: { line: 925, column: 1, offset: 26024 },
        end: { line: 931, column: 4, offset: 26180 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const f = x => [x ** 2]\n' +
        'const g = x => x % 2 == 0 ? [] : [x ** 2]\n' +
        '\n' +
        'const myArray = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'console.log(myArray.flatMap(f).flatMap(g))\n' +
        'console.log(myArray.flatMap(x => f(x).flatMap(g)))',
      position: {
        start: { line: 933, column: 1, offset: 26182 },
        end: { line: 941, column: 4, offset: 26406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 943, column: 1, offset: 26408 },
            end: { line: 943, column: 63, offset: 26470 }
          }
        }
      ],
      position: {
        start: { line: 943, column: 1, offset: 26408 },
        end: { line: 943, column: 63, offset: 26470 }
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
                    start: { line: 944, column: 4, offset: 26474 },
                    end: { line: 944, column: 11, offset: 26481 }
                  }
                }
              ],
              position: {
                start: { line: 944, column: 4, offset: 26474 },
                end: { line: 944, column: 11, offset: 26481 }
              }
            }
          ],
          position: {
            start: { line: 944, column: 2, offset: 26472 },
            end: { line: 944, column: 11, offset: 26481 }
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
                    start: { line: 945, column: 4, offset: 26485 },
                    end: { line: 945, column: 12, offset: 26493 }
                  }
                }
              ],
              position: {
                start: { line: 945, column: 4, offset: 26485 },
                end: { line: 945, column: 12, offset: 26493 }
              }
            }
          ],
          position: {
            start: { line: 945, column: 2, offset: 26483 },
            end: { line: 945, column: 12, offset: 26493 }
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
                    start: { line: 946, column: 4, offset: 26497 },
                    end: { line: 946, column: 9, offset: 26502 }
                  }
                }
              ],
              position: {
                start: { line: 946, column: 4, offset: 26497 },
                end: { line: 946, column: 9, offset: 26502 }
              }
            }
          ],
          position: {
            start: { line: 946, column: 2, offset: 26495 },
            end: { line: 946, column: 9, offset: 26502 }
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
                    start: { line: 947, column: 4, offset: 26506 },
                    end: { line: 947, column: 15, offset: 26517 }
                  }
                }
              ],
              position: {
                start: { line: 947, column: 4, offset: 26506 },
                end: { line: 947, column: 15, offset: 26517 }
              }
            }
          ],
          position: {
            start: { line: 947, column: 2, offset: 26504 },
            end: { line: 947, column: 15, offset: 26517 }
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
                    start: { line: 948, column: 4, offset: 26521 },
                    end: { line: 948, column: 21, offset: 26538 }
                  }
                }
              ],
              position: {
                start: { line: 948, column: 4, offset: 26521 },
                end: { line: 948, column: 21, offset: 26538 }
              }
            }
          ],
          position: {
            start: { line: 948, column: 2, offset: 26519 },
            end: { line: 948, column: 21, offset: 26538 }
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
                    start: { line: 949, column: 4, offset: 26542 },
                    end: { line: 949, column: 12, offset: 26550 }
                  }
                }
              ],
              position: {
                start: { line: 949, column: 4, offset: 26542 },
                end: { line: 949, column: 12, offset: 26550 }
              }
            }
          ],
          position: {
            start: { line: 949, column: 2, offset: 26540 },
            end: { line: 949, column: 12, offset: 26550 }
          }
        }
      ],
      position: {
        start: { line: 944, column: 2, offset: 26472 },
        end: { line: 949, column: 12, offset: 26550 }
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
            start: { line: 951, column: 4, offset: 26555 },
            end: { line: 951, column: 14, offset: 26565 }
          }
        }
      ],
      position: {
        start: { line: 951, column: 1, offset: 26552 },
        end: { line: 951, column: 14, offset: 26565 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 953, column: 1, offset: 26567 },
            end: { line: 953, column: 85, offset: 26651 }
          }
        }
      ],
      position: {
        start: { line: 953, column: 1, offset: 26567 },
        end: { line: 953, column: 85, offset: 26651 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 955, column: 1, offset: 26653 },
            end: { line: 955, column: 141, offset: 26793 }
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
                start: { line: 955, column: 142, offset: 26794 },
                end: { line: 955, column: 153, offset: 26805 }
              }
            }
          ],
          position: {
            start: { line: 955, column: 141, offset: 26793 },
            end: { line: 955, column: 176, offset: 26828 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 955, column: 176, offset: 26828 },
            end: { line: 955, column: 177, offset: 26829 }
          }
        }
      ],
      position: {
        start: { line: 955, column: 1, offset: 26653 },
        end: { line: 955, column: 177, offset: 26829 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 956, column: 1, offset: 26830 }
  }
}