export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2025-06-13\n' +
        'updated: 2026-05-05\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming.\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 309 },
            end: { line: 11, column: 186, offset: 494 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 309 },
        end: { line: 11, column: 186, offset: 494 }
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
            start: { line: 13, column: 4, offset: 499 },
            end: { line: 13, column: 24, offset: 519 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 496 },
        end: { line: 13, column: 24, offset: 519 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 520 },
            end: { line: 14, column: 250, offset: 769 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 520 },
        end: { line: 14, column: 250, offset: 769 }
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
            start: { line: 16, column: 5, offset: 775 },
            end: { line: 16, column: 11, offset: 781 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 771 },
        end: { line: 16, column: 11, offset: 781 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 783 },
            end: { line: 18, column: 64, offset: 846 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 846 },
            end: { line: 18, column: 67, offset: 849 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 849 },
            end: { line: 18, column: 105, offset: 887 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 887 },
            end: { line: 18, column: 110, offset: 892 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 892 },
            end: { line: 18, column: 185, offset: 967 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 783 },
        end: { line: 18, column: 185, offset: 967 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 969 },
        end: { line: 22, column: 4, offset: 988 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 990 },
            end: { line: 24, column: 22, offset: 1011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1011 },
            end: { line: 24, column: 30, offset: 1019 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1019 },
            end: { line: 24, column: 79, offset: 1068 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1068 },
            end: { line: 24, column: 87, offset: 1076 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1076 },
            end: { line: 24, column: 147, offset: 1136 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 990 },
        end: { line: 24, column: 147, offset: 1136 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1138 },
        end: { line: 28, column: 4, offset: 1172 }
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
            start: { line: 30, column: 5, offset: 1178 },
            end: { line: 30, column: 11, offset: 1184 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1174 },
        end: { line: 30, column: 11, offset: 1184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1186 },
            end: { line: 32, column: 56, offset: 1241 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1241 },
            end: { line: 32, column: 63, offset: 1248 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1248 },
            end: { line: 32, column: 67, offset: 1252 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1252 },
            end: { line: 32, column: 83, offset: 1268 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1268 },
            end: { line: 32, column: 255, offset: 1440 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1186 },
        end: { line: 32, column: 255, offset: 1440 }
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
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2344 },
            end: { line: 71, column: 154, offset: 2497 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2497 },
            end: { line: 71, column: 166, offset: 2509 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2509 },
            end: { line: 71, column: 208, offset: 2551 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2344 },
        end: { line: 71, column: 208, offset: 2551 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2553 },
        end: { line: 76, column: 4, offset: 2638 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2640 },
            end: { line: 78, column: 137, offset: 2776 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2640 },
        end: { line: 78, column: 137, offset: 2776 }
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
        start: { line: 80, column: 1, offset: 2778 },
        end: { line: 86, column: 4, offset: 2949 }
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
            start: { line: 88, column: 5, offset: 2955 },
            end: { line: 88, column: 11, offset: 2961 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2951 },
        end: { line: 88, column: 11, offset: 2961 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2963 },
            end: { line: 90, column: 54, offset: 3016 }
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
                start: { line: 90, column: 55, offset: 3017 },
                end: { line: 90, column: 64, offset: 3026 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3016 },
            end: { line: 90, column: 126, offset: 3088 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3088 },
            end: { line: 90, column: 194, offset: 3156 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2963 },
        end: { line: 90, column: 194, offset: 3156 }
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
        start: { line: 92, column: 1, offset: 3158 },
        end: { line: 97, column: 4, offset: 3325 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3327 },
            end: { line: 99, column: 130, offset: 3456 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3456 },
            end: { line: 99, column: 140, offset: 3466 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3466 },
            end: { line: 99, column: 150, offset: 3476 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3476 },
            end: { line: 99, column: 163, offset: 3489 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3489 },
            end: { line: 99, column: 164, offset: 3490 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3327 },
        end: { line: 99, column: 164, offset: 3490 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const o = { a: 1, b: 2, c: 3 }\n' +
        '\n' +
        "const s1 = Symbol('1')\n" +
        "o[s1] = 'my-unique-prop'\n" +
        '\n' +
        "// symbol s1 won't be enumerated here\n" +
        'for (const key in o) {\n' +
        '  console.log(key)\n' +
        '  // a\n' +
        '  // b\n' +
        '  // c\n' +
        '}',
      position: {
        start: { line: 101, column: 1, offset: 3492 },
        end: { line: 114, column: 4, offset: 3706 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3708 },
            end: { line: 116, column: 34, offset: 3741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3741 },
            end: { line: 116, column: 51, offset: 3758 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3758 },
            end: { line: 116, column: 56, offset: 3763 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3763 },
            end: { line: 116, column: 78, offset: 3785 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3785 },
            end: { line: 116, column: 185, offset: 3892 }
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
                start: { line: 116, column: 186, offset: 3893 },
                end: { line: 116, column: 203, offset: 3910 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3892 },
            end: { line: 116, column: 313, offset: 4020 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4020 },
            end: { line: 116, column: 318, offset: 4025 }
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
                start: { line: 116, column: 319, offset: 4026 },
                end: { line: 116, column: 342, offset: 4049 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4025 },
            end: { line: 116, column: 478, offset: 4185 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3708 },
        end: { line: 116, column: 478, offset: 4185 }
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
            start: { line: 118, column: 5, offset: 4191 },
            end: { line: 118, column: 12, offset: 4198 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4187 },
        end: { line: 118, column: 12, offset: 4198 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4200 },
            end: { line: 120, column: 95, offset: 4294 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4294 },
            end: { line: 120, column: 101, offset: 4300 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4300 },
            end: { line: 120, column: 106, offset: 4305 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4305 },
            end: { line: 120, column: 117, offset: 4316 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4316 },
            end: { line: 120, column: 286, offset: 4485 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4485 },
            end: { line: 120, column: 292, offset: 4491 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4491 },
            end: { line: 120, column: 388, offset: 4587 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4587 },
            end: { line: 120, column: 399, offset: 4598 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4598 },
            end: { line: 120, column: 441, offset: 4640 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4640 },
            end: { line: 120, column: 452, offset: 4651 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4651 },
            end: { line: 120, column: 469, offset: 4668 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4200 },
        end: { line: 120, column: 469, offset: 4668 }
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
        start: { line: 122, column: 1, offset: 4670 },
        end: { line: 135, column: 4, offset: 4948 }
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
            start: { line: 137, column: 5, offset: 4954 },
            end: { line: 137, column: 42, offset: 4991 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4950 },
        end: { line: 137, column: 42, offset: 4991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4992 },
            end: { line: 138, column: 329, offset: 5320 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4992 },
        end: { line: 138, column: 329, offset: 5320 }
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
            start: { line: 140, column: 4, offset: 5325 },
            end: { line: 140, column: 25, offset: 5346 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5322 },
        end: { line: 140, column: 25, offset: 5346 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5347 },
            end: { line: 141, column: 429, offset: 5775 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5347 },
        end: { line: 141, column: 429, offset: 5775 }
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
            start: { line: 143, column: 5, offset: 5781 },
            end: { line: 143, column: 10, offset: 5786 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5777 },
        end: { line: 143, column: 10, offset: 5786 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5788 },
            end: { line: 145, column: 175, offset: 5962 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5962 },
            end: { line: 145, column: 182, offset: 5969 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5969 },
            end: { line: 145, column: 195, offset: 5982 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5788 },
        end: { line: 145, column: 195, offset: 5982 }
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
        start: { line: 147, column: 1, offset: 5984 },
        end: { line: 155, column: 4, offset: 6251 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6253 },
            end: { line: 157, column: 56, offset: 6308 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6308 },
            end: { line: 157, column: 63, offset: 6315 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6315 },
            end: { line: 157, column: 76, offset: 6328 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6253 },
        end: { line: 157, column: 76, offset: 6328 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6330 },
        end: { line: 162, column: 4, offset: 6443 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6445 },
            end: { line: 164, column: 40, offset: 6484 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6484 },
            end: { line: 164, column: 48, offset: 6492 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6492 },
            end: { line: 164, column: 53, offset: 6497 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6497 },
            end: { line: 164, column: 59, offset: 6503 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6503 },
            end: { line: 164, column: 83, offset: 6527 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6445 },
        end: { line: 164, column: 83, offset: 6527 }
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
        start: { line: 166, column: 1, offset: 6529 },
        end: { line: 171, column: 4, offset: 6656 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6658 },
            end: { line: 173, column: 42, offset: 6699 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6699 },
            end: { line: 173, column: 49, offset: 6706 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6706 },
            end: { line: 173, column: 66, offset: 6723 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6658 },
        end: { line: 173, column: 66, offset: 6723 }
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
        start: { line: 175, column: 1, offset: 6725 },
        end: { line: 181, column: 4, offset: 6830 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6832 },
            end: { line: 183, column: 42, offset: 6873 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6873 },
            end: { line: 183, column: 51, offset: 6882 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6882 },
            end: { line: 183, column: 68, offset: 6899 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6832 },
        end: { line: 183, column: 68, offset: 6899 }
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
        start: { line: 185, column: 1, offset: 6901 },
        end: { line: 191, column: 4, offset: 7052 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7054 },
            end: { line: 193, column: 52, offset: 7105 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7105 },
            end: { line: 193, column: 62, offset: 7115 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7115 },
            end: { line: 193, column: 68, offset: 7121 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7054 },
        end: { line: 193, column: 68, offset: 7121 }
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
        start: { line: 195, column: 1, offset: 7123 },
        end: { line: 206, column: 4, offset: 7267 }
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
            start: { line: 208, column: 5, offset: 7273 },
            end: { line: 208, column: 11, offset: 7279 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7269 },
        end: { line: 208, column: 11, offset: 7279 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7281 },
            end: { line: 210, column: 199, offset: 7479 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7281 },
        end: { line: 210, column: 199, offset: 7479 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7481 },
        end: { line: 214, column: 4, offset: 7517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7519 },
            end: { line: 216, column: 22, offset: 7540 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7540 },
            end: { line: 216, column: 30, offset: 7548 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7548 },
            end: { line: 216, column: 91, offset: 7609 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7519 },
        end: { line: 216, column: 91, offset: 7609 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7611 },
        end: { line: 220, column: 4, offset: 7641 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7643 },
            end: { line: 222, column: 142, offset: 7784 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7643 },
        end: { line: 222, column: 142, offset: 7784 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const o = {}\n' +
        '\n' +
        "o.a = 1 // set the number 1 as an element at key 'a' on the object o\n" +
        '\n' +
        "const myPropertyName = 'My-Prop'\n" +
        "o[myPropertyName] = 'foo'\n" +
        "// set the string 'foo' as an element at key 'My-Prop' on the object o\n" +
        '\n' +
        "console.log(o) // { a: 1, 'My-Prop': 'foo' }",
      position: {
        start: { line: 224, column: 1, offset: 7786 },
        end: { line: 234, column: 4, offset: 8076 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8078 },
            end: { line: 236, column: 73, offset: 8150 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8150 },
            end: { line: 236, column: 81, offset: 8158 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8158 },
            end: { line: 236, column: 90, offset: 8167 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8078 },
        end: { line: 236, column: 90, offset: 8167 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const o = { a: 1, 'My-Prop': 'foo' }\n" +
        '\n' +
        "delete o.a // remove the element 1 under key 'a' from object o\n" +
        "delete o['My-Prop'] // remove the element 'foo' under key 'My-Prop' from object o\n" +
        '\n' +
        'console.log(o) // {}',
      position: {
        start: { line: 238, column: 1, offset: 8169 },
        end: { line: 245, column: 4, offset: 8404 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8406 },
            end: { line: 247, column: 66, offset: 8471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8471 },
            end: { line: 247, column: 76, offset: 8481 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8481 },
            end: { line: 247, column: 82, offset: 8487 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8406 },
        end: { line: 247, column: 82, offset: 8487 }
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
        start: { line: 249, column: 1, offset: 8489 },
        end: { line: 258, column: 4, offset: 8651 }
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
            start: { line: 260, column: 5, offset: 8657 },
            end: { line: 260, column: 8, offset: 8660 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8653 },
        end: { line: 260, column: 8, offset: 8660 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8662 },
            end: { line: 262, column: 169, offset: 8830 }
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
                start: { line: 262, column: 170, offset: 8831 },
                end: { line: 262, column: 183, offset: 8844 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8830 },
            end: { line: 262, column: 306, offset: 8967 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8967 },
            end: { line: 262, column: 469, offset: 9130 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9130 },
            end: { line: 262, column: 475, offset: 9136 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9136 },
            end: { line: 262, column: 483, offset: 9144 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8662 },
        end: { line: 262, column: 483, offset: 9144 }
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
        start: { line: 264, column: 1, offset: 9146 },
        end: { line: 269, column: 4, offset: 9329 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9331 },
            end: { line: 271, column: 26, offset: 9356 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9356 },
            end: { line: 271, column: 31, offset: 9361 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9361 },
            end: { line: 271, column: 44, offset: 9374 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9331 },
        end: { line: 271, column: 44, offset: 9374 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9376 },
        end: { line: 275, column: 4, offset: 9412 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9414 },
            end: { line: 277, column: 42, offset: 9455 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9455 },
            end: { line: 277, column: 48, offset: 9461 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9461 },
            end: { line: 277, column: 65, offset: 9478 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9414 },
        end: { line: 277, column: 65, offset: 9478 }
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
        start: { line: 279, column: 1, offset: 9480 },
        end: { line: 287, column: 4, offset: 9630 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9632 },
            end: { line: 289, column: 42, offset: 9673 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9673 },
            end: { line: 289, column: 51, offset: 9682 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9682 },
            end: { line: 289, column: 68, offset: 9699 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9632 },
        end: { line: 289, column: 68, offset: 9699 }
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
        start: { line: 291, column: 1, offset: 9701 },
        end: { line: 297, column: 4, offset: 9820 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9822 },
            end: { line: 299, column: 49, offset: 9870 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9870 },
            end: { line: 299, column: 59, offset: 9880 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9880 },
            end: { line: 299, column: 65, offset: 9886 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9822 },
        end: { line: 299, column: 65, offset: 9886 }
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
        start: { line: 301, column: 1, offset: 9888 },
        end: { line: 312, column: 4, offset: 10041 }
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
            start: { line: 314, column: 5, offset: 10047 },
            end: { line: 314, column: 8, offset: 10050 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10043 },
        end: { line: 314, column: 8, offset: 10050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10052 },
            end: { line: 316, column: 203, offset: 10254 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10052 },
        end: { line: 316, column: 203, offset: 10254 }
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
                    start: { line: 317, column: 5, offset: 10259 },
                    end: { line: 317, column: 113, offset: 10367 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10259 },
                end: { line: 317, column: 113, offset: 10367 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10257 },
            end: { line: 317, column: 113, offset: 10367 }
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
                    start: { line: 318, column: 5, offset: 10372 },
                    end: { line: 318, column: 94, offset: 10461 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10461 },
                    end: { line: 318, column: 110, offset: 10477 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10372 },
                end: { line: 318, column: 110, offset: 10477 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10370 },
            end: { line: 318, column: 110, offset: 10477 }
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
                    start: { line: 319, column: 5, offset: 10482 },
                    end: { line: 319, column: 130, offset: 10607 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10482 },
                end: { line: 319, column: 130, offset: 10607 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10480 },
            end: { line: 319, column: 130, offset: 10607 }
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
                    start: { line: 320, column: 5, offset: 10612 },
                    end: { line: 320, column: 28, offset: 10635 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10635 },
                    end: { line: 320, column: 38, offset: 10645 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10645 },
                    end: { line: 320, column: 64, offset: 10671 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10671 },
                    end: { line: 320, column: 74, offset: 10681 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10681 },
                    end: { line: 320, column: 80, offset: 10687 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10612 },
                end: { line: 320, column: 80, offset: 10687 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10610 },
            end: { line: 320, column: 80, offset: 10687 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10257 },
        end: { line: 320, column: 80, offset: 10687 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10689 },
            end: { line: 322, column: 9, offset: 10697 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10697 },
            end: { line: 322, column: 14, offset: 10702 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10702 },
            end: { line: 322, column: 48, offset: 10736 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10736 },
            end: { line: 322, column: 53, offset: 10741 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10741 },
            end: { line: 322, column: 124, offset: 10812 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10689 },
        end: { line: 322, column: 124, offset: 10812 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10814 },
        end: { line: 330, column: 4, offset: 10890 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10892 },
            end: { line: 332, column: 42, offset: 10933 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10933 },
            end: { line: 332, column: 48, offset: 10939 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10939 },
            end: { line: 332, column: 65, offset: 10956 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10892 },
        end: { line: 332, column: 65, offset: 10956 }
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
        start: { line: 334, column: 1, offset: 10958 },
        end: { line: 341, column: 4, offset: 11109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11111 },
            end: { line: 343, column: 42, offset: 11152 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11152 },
            end: { line: 343, column: 51, offset: 11161 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11161 },
            end: { line: 343, column: 68, offset: 11178 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11111 },
        end: { line: 343, column: 68, offset: 11178 }
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
        start: { line: 345, column: 1, offset: 11180 },
        end: { line: 355, column: 4, offset: 11333 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11335 },
            end: { line: 357, column: 49, offset: 11383 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11383 },
            end: { line: 357, column: 59, offset: 11393 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11393 },
            end: { line: 357, column: 65, offset: 11399 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11335 },
        end: { line: 357, column: 65, offset: 11399 }
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
        start: { line: 359, column: 1, offset: 11401 },
        end: { line: 372, column: 4, offset: 11666 }
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
            start: { line: 374, column: 5, offset: 11672 },
            end: { line: 374, column: 53, offset: 11720 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11668 },
        end: { line: 374, column: 53, offset: 11720 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11722 },
            end: { line: 376, column: 323, offset: 12044 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11722 },
        end: { line: 376, column: 323, offset: 12044 }
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
            start: { line: 378, column: 4, offset: 12049 },
            end: { line: 378, column: 23, offset: 12068 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12046 },
        end: { line: 378, column: 23, offset: 12068 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12069 },
            end: { line: 379, column: 115, offset: 12183 }
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
                start: { line: 379, column: 116, offset: 12184 },
                end: { line: 379, column: 133, offset: 12201 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12183 },
            end: { line: 379, column: 243, offset: 12311 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12311 },
            end: { line: 379, column: 409, offset: 12477 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12477 },
            end: { line: 379, column: 419, offset: 12487 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12487 },
            end: { line: 379, column: 425, offset: 12493 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12069 },
        end: { line: 379, column: 425, offset: 12493 }
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
        start: { line: 381, column: 1, offset: 12495 },
        end: { line: 399, column: 4, offset: 12924 }
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
            start: { line: 401, column: 5, offset: 12930 },
            end: { line: 401, column: 22, offset: 12947 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12926 },
        end: { line: 401, column: 22, offset: 12947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12948 },
            end: { line: 402, column: 78, offset: 13025 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13025 },
            end: { line: 402, column: 99, offset: 13046 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13046 },
            end: { line: 402, column: 252, offset: 13199 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13199 },
            end: { line: 402, column: 258, offset: 13205 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13205 },
            end: { line: 402, column: 259, offset: 13206 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12948 },
        end: { line: 402, column: 259, offset: 13206 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Iterator = {\n' +
        '  next: (input? any)=>({ value: any, done: boolean })\n' +
        '}\n' +
        '\n' +
        'type Iterable = {\n' +
        '  [Symbol.iterator]: ()=>Iterator\n' +
        '}',
      position: {
        start: { line: 404, column: 1, offset: 13208 },
        end: { line: 412, column: 4, offset: 13369 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13371 },
            end: { line: 414, column: 73, offset: 13443 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13371 },
        end: { line: 414, column: 73, offset: 13443 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'class MyIterable {\n' +
        '  constructor() {\n' +
        '  }\n' +
        '\n' +
        '  [Symbol.iterator]() {\n' +
        '    return {\n' +
        '      count: 0,\n' +
        '      next() {\n' +
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
        'const myIterable = new MyIterable()\n' +
        '\n' +
        'for (const number of myIterable) {\n' +
        '  console.log(number)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '  // 4\n' +
        '  // 5\n' +
        '}',
      position: {
        start: { line: 416, column: 1, offset: 13445 },
        end: { line: 447, column: 4, offset: 13903 }
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
            start: { line: 449, column: 5, offset: 13909 },
            end: { line: 449, column: 39, offset: 13943 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13905 },
        end: { line: 449, column: 39, offset: 13943 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13944 },
            end: { line: 450, column: 103, offset: 14046 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14046 },
            end: { line: 450, column: 120, offset: 14063 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14063 },
            end: { line: 450, column: 136, offset: 14079 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14079 },
            end: { line: 450, column: 143, offset: 14086 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14086 },
            end: { line: 450, column: 152, offset: 14095 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13944 },
        end: { line: 450, column: 152, offset: 14095 }
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
        start: { line: 452, column: 1, offset: 14097 },
        end: { line: 470, column: 4, offset: 14463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14465 },
            end: { line: 472, column: 159, offset: 14623 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14623 },
            end: { line: 472, column: 182, offset: 14646 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14646 },
            end: { line: 472, column: 183, offset: 14647 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14465 },
        end: { line: 472, column: 183, offset: 14647 }
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
        'for (const item of myObject) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 474, column: 1, offset: 14649 },
        end: { line: 511, column: 4, offset: 15131 }
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
            start: { line: 513, column: 4, offset: 15136 },
            end: { line: 513, column: 27, offset: 15159 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15133 },
        end: { line: 513, column: 27, offset: 15159 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15160 },
            end: { line: 514, column: 184, offset: 15343 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15160 },
        end: { line: 514, column: 184, offset: 15343 }
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
            start: { line: 516, column: 5, offset: 15349 },
            end: { line: 516, column: 12, offset: 15356 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15345 },
        end: { line: 516, column: 12, offset: 15356 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15358 },
            end: { line: 518, column: 143, offset: 15500 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15500 },
            end: { line: 518, column: 150, offset: 15507 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15507 },
            end: { line: 518, column: 157, offset: 15514 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15514 },
            end: { line: 518, column: 165, offset: 15522 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15522 },
            end: { line: 518, column: 173, offset: 15530 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15358 },
        end: { line: 518, column: 173, offset: 15530 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type SyncOrAsyncResolver = any=>Promise|any\n' +
        'type SyncOrAsyncErrorResolver = (Error|any)=>Promise|any\n' +
        '\n' +
        'type Promise = {\n' +
        '  then: (onFulfilled SyncOrAsyncResolver, onRejected SyncOrAsyncErrorResolver)=>Promise,\n' +
        '  catch: (onRejected SyncOrAsyncErrorResolver)=>Promise\n' +
        '}',
      position: {
        start: { line: 520, column: 1, offset: 15532 },
        end: { line: 528, column: 4, offset: 15830 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15832 },
            end: { line: 530, column: 15, offset: 15846 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15846 },
            end: { line: 530, column: 22, offset: 15853 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15853 },
            end: { line: 530, column: 166, offset: 15997 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 15997 },
            end: { line: 530, column: 173, offset: 16004 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 16004 },
            end: { line: 530, column: 222, offset: 16053 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15832 },
        end: { line: 530, column: 222, offset: 16053 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'const onFulfilled = resolvedValue => {\n' +
        '  // resolvedValue is the resolved value of promise1\n' +
        '}\n' +
        '\n' +
        'const onRejected = error => {\n' +
        '  // error is the rejected error of promise1\n' +
        '}\n' +
        '\n' +
        'const promise2 = promise1.then(onFulfilled, onRejected)\n' +
        '\n' +
        '// promise2 is a promise returned from promise1.then(...)',
      position: {
        start: { line: 532, column: 1, offset: 16055 },
        end: { line: 544, column: 4, offset: 16360 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16362 },
            end: { line: 546, column: 15, offset: 16376 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16376 },
            end: { line: 546, column: 23, offset: 16384 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16384 },
            end: { line: 546, column: 74, offset: 16435 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16362 },
        end: { line: 546, column: 74, offset: 16435 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16437 },
        end: { line: 552, column: 4, offset: 16522 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16524 },
            end: { line: 554, column: 38, offset: 16561 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16561 },
            end: { line: 554, column: 47, offset: 16570 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16570 },
            end: { line: 554, column: 60, offset: 16583 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16524 },
        end: { line: 554, column: 60, offset: 16583 }
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
        start: { line: 556, column: 1, offset: 16585 },
        end: { line: 576, column: 4, offset: 17002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 17004 },
            end: { line: 578, column: 22, offset: 17025 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17025 },
            end: { line: 578, column: 32, offset: 17035 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17035 },
            end: { line: 578, column: 37, offset: 17040 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17040 },
            end: { line: 578, column: 46, offset: 17049 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17049 },
            end: { line: 578, column: 62, offset: 17065 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17065 },
            end: { line: 578, column: 71, offset: 17074 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17074 },
            end: { line: 578, column: 98, offset: 17101 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 17004 },
        end: { line: 578, column: 98, offset: 17101 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const promiseThatResolves = Promise.resolve(1)\n' +
        'promiseThatResolves.then(console.log) // 1\n' +
        '\n' +
        "const promiseThatRejects = Promise.reject(new Error('example'))\n" +
        'promiseThatRejects.catch(console.error) // Error: example',
      position: {
        start: { line: 580, column: 1, offset: 17103 },
        end: { line: 586, column: 4, offset: 17346 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17348 },
            end: { line: 588, column: 112, offset: 17459 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17348 },
        end: { line: 588, column: 112, offset: 17459 }
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
        start: { line: 590, column: 1, offset: 17461 },
        end: { line: 602, column: 4, offset: 17798 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Async/Await',
          position: {
            start: { line: 604, column: 5, offset: 17804 },
            end: { line: 604, column: 16, offset: 17815 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17800 },
        end: { line: 604, column: 16, offset: 17815 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17817 },
            end: { line: 606, column: 5, offset: 17821 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17821 },
            end: { line: 606, column: 21, offset: 17837 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17837 },
            end: { line: 606, column: 52, offset: 17868 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17868 },
            end: { line: 606, column: 59, offset: 17875 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17875 },
            end: { line: 606, column: 145, offset: 17961 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17961 },
            end: { line: 606, column: 152, offset: 17968 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17968 },
            end: { line: 606, column: 169, offset: 17985 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17985 },
            end: { line: 606, column: 185, offset: 18001 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 18001 },
            end: { line: 606, column: 246, offset: 18062 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17817 },
        end: { line: 606, column: 246, offset: 18062 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'async function handleWithAsyncAwait(myPromise) {\n' +
        '  try {\n' +
        '    const resolvedValue = await myPromise\n' +
        '    // resolvedValue is the resolved value of myPromise\n' +
        '\n' +
        '    console.log(resolvedValue)\n' +
        '  } catch (error) {\n' +
        '    // error is an error rejected from myPromise\n' +
        '\n' +
        '    console.error(error)\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const promiseThatResolves = Promise.resolve(3)\n' +
        'handleWithAsyncAwait(promiseThatResolves) // 3\n' +
        '\n' +
        "const promiseThatRejects = Promise.reject(new Error('rejected'))\n" +
        'handleWithAsyncAwait(promiseThatRejects) // Error: rejected',
      position: {
        start: { line: 608, column: 1, offset: 18064 },
        end: { line: 627, column: 4, offset: 18603 }
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
            start: { line: 629, column: 4, offset: 18608 },
            end: { line: 629, column: 36, offset: 18640 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18605 },
        end: { line: 629, column: 36, offset: 18640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18641 },
            end: { line: 630, column: 143, offset: 18783 }
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
                start: { line: 630, column: 144, offset: 18784 },
                end: { line: 630, column: 167, offset: 18807 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18783 },
            end: { line: 630, column: 303, offset: 18943 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18943 },
            end: { line: 630, column: 367, offset: 19007 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19007 },
            end: { line: 630, column: 384, offset: 19024 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19024 },
            end: { line: 630, column: 424, offset: 19064 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19064 },
            end: { line: 630, column: 440, offset: 19080 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19080 },
            end: { line: 630, column: 446, offset: 19086 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18641 },
        end: { line: 630, column: 446, offset: 19086 }
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
            start: { line: 632, column: 5, offset: 19092 },
            end: { line: 632, column: 28, offset: 19115 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19088 },
        end: { line: 632, column: 28, offset: 19115 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19116 },
            end: { line: 633, column: 84, offset: 19199 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19199 },
            end: { line: 633, column: 110, offset: 19225 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19225 },
            end: { line: 633, column: 276, offset: 19391 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19391 },
            end: { line: 633, column: 282, offset: 19397 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19397 },
            end: { line: 633, column: 283, offset: 19398 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19116 },
        end: { line: 633, column: 283, offset: 19398 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type AsyncIterator = {\n' +
        '  next: (input? any)=>Promise<{ value: any, done: boolean }>\n' +
        '}\n' +
        '\n' +
        'type AsyncIterable = {\n' +
        '  [Symbol.asyncIterator]: ()=>AsyncIterator\n' +
        '}',
      position: {
        start: { line: 635, column: 1, offset: 19400 },
        end: { line: 643, column: 4, offset: 19588 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19590 },
            end: { line: 645, column: 79, offset: 19668 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19590 },
        end: { line: 645, column: 79, offset: 19668 }
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
        start: { line: 647, column: 1, offset: 19670 },
        end: { line: 678, column: 4, offset: 20165 }
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
            start: { line: 680, column: 5, offset: 20171 },
            end: { line: 680, column: 51, offset: 20217 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20167 },
        end: { line: 680, column: 51, offset: 20217 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20218 },
            end: { line: 681, column: 35, offset: 20252 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20252 },
            end: { line: 681, column: 58, offset: 20275 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20275 },
            end: { line: 681, column: 70, offset: 20287 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20287 },
            end: { line: 681, column: 77, offset: 20294 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20294 },
            end: { line: 681, column: 122, offset: 20339 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20339 },
            end: { line: 681, column: 138, offset: 20355 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20355 },
            end: { line: 681, column: 146, offset: 20363 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20218 },
        end: { line: 681, column: 146, offset: 20363 }
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
        'for await (const item of myAsyncGenerator) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 683, column: 1, offset: 20365 },
        end: { line: 701, column: 4, offset: 20812 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20814 },
            end: { line: 703, column: 184, offset: 20997 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 20997 },
            end: { line: 703, column: 218, offset: 21031 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21031 },
            end: { line: 703, column: 219, offset: 21032 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20814 },
        end: { line: 703, column: 219, offset: 21032 }
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
        'for await (const item of myInstance) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}\n' +
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
        'for await (const item of myObject) {\n' +
        '  console.log(item)\n' +
        '  // 1\n' +
        '  // 2\n' +
        '  // 3\n' +
        '}',
      position: {
        start: { line: 705, column: 1, offset: 21034 },
        end: { line: 741, column: 4, offset: 21561 }
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
            start: { line: 743, column: 4, offset: 21566 },
            end: { line: 743, column: 24, offset: 21586 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21563 },
        end: { line: 743, column: 24, offset: 21586 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21587 },
            end: { line: 744, column: 253, offset: 21839 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21587 },
        end: { line: 744, column: 253, offset: 21839 }
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
            start: { line: 746, column: 5, offset: 21845 },
            end: { line: 746, column: 12, offset: 21852 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21841 },
        end: { line: 746, column: 12, offset: 21852 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21854 },
            end: { line: 748, column: 64, offset: 21917 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21917 },
            end: { line: 748, column: 70, offset: 21923 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21923 },
            end: { line: 748, column: 103, offset: 21956 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21956 },
            end: { line: 748, column: 109, offset: 21962 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21962 },
            end: { line: 748, column: 143, offset: 21996 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21854 },
        end: { line: 748, column: 143, offset: 21996 }
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
                    start: { line: 750, column: 5, offset: 22002 },
                    end: { line: 750, column: 50, offset: 22047 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22047 },
                    end: { line: 750, column: 58, offset: 22055 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22055 },
                    end: { line: 750, column: 119, offset: 22116 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 22002 },
                end: { line: 750, column: 119, offset: 22116 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 21999 },
            end: { line: 750, column: 119, offset: 22116 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 21999 },
        end: { line: 750, column: 119, offset: 22116 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22118 },
        end: { line: 757, column: 4, offset: 22195 }
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
        start: { line: 759, column: 1, offset: 22197 },
        end: { line: 766, column: 4, offset: 22341 }
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
                    start: { line: 768, column: 5, offset: 22347 },
                    end: { line: 768, column: 63, offset: 22405 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22405 },
                    end: { line: 768, column: 69, offset: 22411 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22411 },
                    end: { line: 768, column: 126, offset: 22468 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22468 },
                    end: { line: 768, column: 132, offset: 22474 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22474 },
                    end: { line: 768, column: 143, offset: 22485 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22347 },
                end: { line: 768, column: 143, offset: 22485 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22344 },
            end: { line: 768, column: 143, offset: 22485 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22344 },
        end: { line: 768, column: 143, offset: 22485 }
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
        start: { line: 770, column: 1, offset: 22487 },
        end: { line: 775, column: 4, offset: 22583 }
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
        start: { line: 777, column: 1, offset: 22585 },
        end: { line: 785, column: 4, offset: 22766 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22768 },
            end: { line: 787, column: 65, offset: 22832 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22768 },
        end: { line: 787, column: 65, offset: 22832 }
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
                    start: { line: 788, column: 4, offset: 22836 },
                    end: { line: 788, column: 11, offset: 22843 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22836 },
                end: { line: 788, column: 11, offset: 22843 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22834 },
            end: { line: 788, column: 11, offset: 22843 }
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
                    start: { line: 789, column: 4, offset: 22847 },
                    end: { line: 789, column: 9, offset: 22852 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22847 },
                end: { line: 789, column: 9, offset: 22852 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22845 },
            end: { line: 789, column: 9, offset: 22852 }
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
                    start: { line: 790, column: 4, offset: 22856 },
                    end: { line: 790, column: 9, offset: 22861 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22856 },
                end: { line: 790, column: 9, offset: 22861 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22854 },
            end: { line: 790, column: 9, offset: 22861 }
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
                    start: { line: 791, column: 4, offset: 22865 },
                    end: { line: 791, column: 15, offset: 22876 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22865 },
                end: { line: 791, column: 15, offset: 22876 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22863 },
            end: { line: 791, column: 15, offset: 22876 }
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
                    start: { line: 792, column: 4, offset: 22880 },
                    end: { line: 792, column: 21, offset: 22897 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22880 },
                end: { line: 792, column: 21, offset: 22897 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22878 },
            end: { line: 792, column: 21, offset: 22897 }
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
                    start: { line: 793, column: 4, offset: 22901 },
                    end: { line: 793, column: 12, offset: 22909 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22901 },
                end: { line: 793, column: 12, offset: 22909 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22899 },
            end: { line: 793, column: 12, offset: 22909 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22834 },
        end: { line: 793, column: 12, offset: 22909 }
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
            start: { line: 795, column: 5, offset: 22915 },
            end: { line: 795, column: 15, offset: 22925 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22911 },
        end: { line: 795, column: 15, offset: 22925 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22927 },
            end: { line: 797, column: 67, offset: 22993 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22993 },
            end: { line: 797, column: 76, offset: 23002 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 23002 },
            end: { line: 797, column: 109, offset: 23035 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23035 },
            end: { line: 797, column: 118, offset: 23044 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23044 },
            end: { line: 797, column: 154, offset: 23080 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22927 },
        end: { line: 797, column: 154, offset: 23080 }
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
                    start: { line: 799, column: 5, offset: 23086 },
                    end: { line: 799, column: 97, offset: 23178 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23178 },
                    end: { line: 799, column: 106, offset: 23187 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23187 },
                    end: { line: 799, column: 209, offset: 23290 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23290 },
                    end: { line: 799, column: 218, offset: 23299 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23299 },
                    end: { line: 799, column: 219, offset: 23300 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23086 },
                end: { line: 799, column: 219, offset: 23300 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23083 },
            end: { line: 799, column: 219, offset: 23300 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23083 },
        end: { line: 799, column: 219, offset: 23300 }
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
        start: { line: 801, column: 1, offset: 23302 },
        end: { line: 806, column: 4, offset: 23417 }
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
        start: { line: 808, column: 1, offset: 23419 },
        end: { line: 816, column: 4, offset: 23618 }
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
                    start: { line: 818, column: 5, offset: 23624 },
                    end: { line: 818, column: 121, offset: 23740 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23624 },
                end: { line: 818, column: 121, offset: 23740 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23621 },
            end: { line: 818, column: 121, offset: 23740 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23621 },
        end: { line: 818, column: 121, offset: 23740 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23742 },
        end: { line: 825, column: 4, offset: 23830 }
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
        start: { line: 827, column: 1, offset: 23832 },
        end: { line: 832, column: 4, offset: 23956 }
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
                    start: { line: 834, column: 5, offset: 23962 },
                    end: { line: 834, column: 159, offset: 24116 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23962 },
                end: { line: 834, column: 159, offset: 24116 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23959 },
            end: { line: 834, column: 159, offset: 24116 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23959 },
        end: { line: 834, column: 159, offset: 24116 }
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
        start: { line: 836, column: 1, offset: 24118 },
        end: { line: 841, column: 4, offset: 24229 }
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
        start: { line: 843, column: 1, offset: 24231 },
        end: { line: 849, column: 4, offset: 24412 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24414 },
            end: { line: 851, column: 68, offset: 24481 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24414 },
        end: { line: 851, column: 68, offset: 24481 }
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
                    start: { line: 852, column: 4, offset: 24485 },
                    end: { line: 852, column: 11, offset: 24492 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24485 },
                end: { line: 852, column: 11, offset: 24492 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24483 },
            end: { line: 852, column: 11, offset: 24492 }
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
                    start: { line: 853, column: 4, offset: 24496 },
                    end: { line: 853, column: 9, offset: 24501 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24496 },
                end: { line: 853, column: 9, offset: 24501 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24494 },
            end: { line: 853, column: 9, offset: 24501 }
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
                    start: { line: 854, column: 4, offset: 24505 },
                    end: { line: 854, column: 9, offset: 24510 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24505 },
                end: { line: 854, column: 9, offset: 24510 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24503 },
            end: { line: 854, column: 9, offset: 24510 }
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
                    start: { line: 855, column: 4, offset: 24514 },
                    end: { line: 855, column: 15, offset: 24525 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24514 },
                end: { line: 855, column: 15, offset: 24525 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24512 },
            end: { line: 855, column: 15, offset: 24525 }
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
                    start: { line: 856, column: 4, offset: 24529 },
                    end: { line: 856, column: 21, offset: 24546 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24529 },
                end: { line: 856, column: 21, offset: 24546 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24527 },
            end: { line: 856, column: 21, offset: 24546 }
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
                    start: { line: 857, column: 4, offset: 24550 },
                    end: { line: 857, column: 12, offset: 24558 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24550 },
                end: { line: 857, column: 12, offset: 24558 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24548 },
            end: { line: 857, column: 12, offset: 24558 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24483 },
        end: { line: 857, column: 12, offset: 24558 }
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
            start: { line: 859, column: 5, offset: 24564 },
            end: { line: 859, column: 13, offset: 24572 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24560 },
        end: { line: 859, column: 13, offset: 24572 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24574 },
            end: { line: 861, column: 65, offset: 24638 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24638 },
            end: { line: 861, column: 74, offset: 24647 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24647 },
            end: { line: 861, column: 107, offset: 24680 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24680 },
            end: { line: 861, column: 116, offset: 24689 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24689 },
            end: { line: 861, column: 151, offset: 24724 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24574 },
        end: { line: 861, column: 152, offset: 24725 }
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
                    start: { line: 863, column: 5, offset: 24731 },
                    end: { line: 863, column: 86, offset: 24812 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24812 },
                    end: { line: 863, column: 95, offset: 24821 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24821 },
                    end: { line: 863, column: 253, offset: 24979 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24731 },
                end: { line: 863, column: 253, offset: 24979 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24728 },
            end: { line: 863, column: 253, offset: 24979 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24728 },
        end: { line: 863, column: 253, offset: 24979 }
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
        start: { line: 865, column: 1, offset: 24981 },
        end: { line: 872, column: 4, offset: 25151 }
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
        start: { line: 874, column: 1, offset: 25153 },
        end: { line: 884, column: 4, offset: 25387 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25389 },
            end: { line: 886, column: 66, offset: 25454 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25389 },
        end: { line: 886, column: 66, offset: 25454 }
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
                    start: { line: 887, column: 4, offset: 25458 },
                    end: { line: 887, column: 11, offset: 25465 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25458 },
                end: { line: 887, column: 11, offset: 25465 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25456 },
            end: { line: 887, column: 11, offset: 25465 }
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
                    start: { line: 888, column: 4, offset: 25469 },
                    end: { line: 888, column: 9, offset: 25474 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25469 },
                end: { line: 888, column: 9, offset: 25474 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25467 },
            end: { line: 888, column: 9, offset: 25474 }
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
                    start: { line: 889, column: 4, offset: 25478 },
                    end: { line: 889, column: 9, offset: 25483 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25478 },
                end: { line: 889, column: 9, offset: 25483 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25476 },
            end: { line: 889, column: 9, offset: 25483 }
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
                    start: { line: 890, column: 4, offset: 25487 },
                    end: { line: 890, column: 15, offset: 25498 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25487 },
                end: { line: 890, column: 15, offset: 25498 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25485 },
            end: { line: 890, column: 15, offset: 25498 }
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
                    start: { line: 891, column: 4, offset: 25502 },
                    end: { line: 891, column: 21, offset: 25519 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25502 },
                end: { line: 891, column: 21, offset: 25519 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25500 },
            end: { line: 891, column: 21, offset: 25519 }
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
                    start: { line: 892, column: 4, offset: 25523 },
                    end: { line: 892, column: 12, offset: 25531 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25523 },
                end: { line: 892, column: 12, offset: 25531 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25521 },
            end: { line: 892, column: 12, offset: 25531 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25456 },
        end: { line: 892, column: 12, offset: 25531 }
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
            start: { line: 894, column: 5, offset: 25537 },
            end: { line: 894, column: 14, offset: 25546 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25533 },
        end: { line: 894, column: 14, offset: 25546 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25548 },
            end: { line: 896, column: 66, offset: 25613 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25613 },
            end: { line: 896, column: 75, offset: 25622 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25622 },
            end: { line: 896, column: 108, offset: 25655 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25655 },
            end: { line: 896, column: 117, offset: 25664 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25664 },
            end: { line: 896, column: 152, offset: 25699 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25548 },
        end: { line: 896, column: 152, offset: 25699 }
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
                  value: 'Associativity: the grouping of items between concatenation operations on a semigroup does not affect the final result.',
                  position: {
                    start: { line: 898, column: 5, offset: 25705 },
                    end: { line: 898, column: 123, offset: 25823 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25705 },
                end: { line: 898, column: 123, offset: 25823 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25702 },
            end: { line: 898, column: 123, offset: 25823 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25702 },
        end: { line: 898, column: 123, offset: 25823 }
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
        start: { line: 900, column: 1, offset: 25825 },
        end: { line: 905, column: 4, offset: 25938 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25940 },
        end: { line: 910, column: 4, offset: 26050 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26052 },
            end: { line: 912, column: 67, offset: 26118 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26052 },
        end: { line: 912, column: 67, offset: 26118 }
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
                    start: { line: 913, column: 4, offset: 26122 },
                    end: { line: 913, column: 11, offset: 26129 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26122 },
                end: { line: 913, column: 11, offset: 26129 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26120 },
            end: { line: 913, column: 11, offset: 26129 }
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
                    start: { line: 914, column: 4, offset: 26133 },
                    end: { line: 914, column: 12, offset: 26141 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26133 },
                end: { line: 914, column: 12, offset: 26141 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26131 },
            end: { line: 914, column: 12, offset: 26141 }
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
                    start: { line: 915, column: 4, offset: 26145 },
                    end: { line: 915, column: 9, offset: 26150 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26145 },
                end: { line: 915, column: 9, offset: 26150 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26143 },
            end: { line: 915, column: 9, offset: 26150 }
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
                    start: { line: 916, column: 4, offset: 26154 },
                    end: { line: 916, column: 12, offset: 26162 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26154 },
                end: { line: 916, column: 12, offset: 26162 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26152 },
            end: { line: 916, column: 12, offset: 26162 }
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
                    start: { line: 917, column: 4, offset: 26166 },
                    end: { line: 917, column: 12, offset: 26174 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26166 },
                end: { line: 917, column: 12, offset: 26174 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26164 },
            end: { line: 917, column: 12, offset: 26174 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26120 },
        end: { line: 917, column: 12, offset: 26174 }
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
            start: { line: 919, column: 5, offset: 26180 },
            end: { line: 919, column: 10, offset: 26185 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26176 },
        end: { line: 919, column: 10, offset: 26185 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26187 },
            end: { line: 921, column: 62, offset: 26248 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26248 },
            end: { line: 921, column: 72, offset: 26258 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26258 },
            end: { line: 921, column: 76, offset: 26262 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26262 },
            end: { line: 921, column: 84, offset: 26270 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26270 },
            end: { line: 921, column: 118, offset: 26304 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26304 },
            end: { line: 921, column: 128, offset: 26314 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26314 },
            end: { line: 921, column: 132, offset: 26318 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26318 },
            end: { line: 921, column: 140, offset: 26326 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26326 },
            end: { line: 921, column: 172, offset: 26358 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26187 },
        end: { line: 921, column: 172, offset: 26358 }
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
                    start: { line: 923, column: 5, offset: 26364 },
                    end: { line: 923, column: 77, offset: 26436 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26436 },
                    end: { line: 923, column: 87, offset: 26446 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26446 },
                    end: { line: 923, column: 91, offset: 26450 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26450 },
                    end: { line: 923, column: 99, offset: 26458 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value, given the function returns a monad.',
                  position: {
                    start: { line: 923, column: 99, offset: 26458 },
                    end: { line: 923, column: 213, offset: 26572 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26364 },
                end: { line: 923, column: 213, offset: 26572 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26361 },
            end: { line: 923, column: 213, offset: 26572 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26361 },
        end: { line: 923, column: 213, offset: 26572 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26574 },
        end: { line: 930, column: 4, offset: 26647 }
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
        start: { line: 932, column: 1, offset: 26649 },
        end: { line: 940, column: 4, offset: 26811 }
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
                    start: { line: 942, column: 5, offset: 26817 },
                    end: { line: 942, column: 119, offset: 26931 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26817 },
                end: { line: 942, column: 119, offset: 26931 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26814 },
            end: { line: 942, column: 119, offset: 26931 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26814 },
        end: { line: 942, column: 119, offset: 26931 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26933 },
        end: { line: 949, column: 4, offset: 27012 }
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
        start: { line: 951, column: 1, offset: 27014 },
        end: { line: 958, column: 4, offset: 27178 }
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
                    start: { line: 960, column: 5, offset: 27184 },
                    end: { line: 960, column: 118, offset: 27297 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27184 },
                end: { line: 960, column: 118, offset: 27297 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27181 },
            end: { line: 960, column: 118, offset: 27297 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27181 },
        end: { line: 960, column: 118, offset: 27297 }
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
        start: { line: 962, column: 1, offset: 27299 },
        end: { line: 968, column: 4, offset: 27455 }
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
        start: { line: 970, column: 1, offset: 27457 },
        end: { line: 978, column: 4, offset: 27681 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27683 },
            end: { line: 980, column: 63, offset: 27745 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27683 },
        end: { line: 980, column: 63, offset: 27745 }
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
                    start: { line: 981, column: 4, offset: 27749 },
                    end: { line: 981, column: 11, offset: 27756 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27749 },
                end: { line: 981, column: 11, offset: 27756 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27747 },
            end: { line: 981, column: 11, offset: 27756 }
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
                    start: { line: 982, column: 4, offset: 27760 },
                    end: { line: 982, column: 12, offset: 27768 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27760 },
                end: { line: 982, column: 12, offset: 27768 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27758 },
            end: { line: 982, column: 12, offset: 27768 }
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
                    start: { line: 983, column: 4, offset: 27772 },
                    end: { line: 983, column: 9, offset: 27777 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27772 },
                end: { line: 983, column: 9, offset: 27777 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27770 },
            end: { line: 983, column: 9, offset: 27777 }
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
                    start: { line: 984, column: 4, offset: 27781 },
                    end: { line: 984, column: 15, offset: 27792 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27781 },
                end: { line: 984, column: 15, offset: 27792 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27779 },
            end: { line: 984, column: 15, offset: 27792 }
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
                    start: { line: 985, column: 4, offset: 27796 },
                    end: { line: 985, column: 21, offset: 27813 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27796 },
                end: { line: 985, column: 21, offset: 27813 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27794 },
            end: { line: 985, column: 21, offset: 27813 }
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
                    start: { line: 986, column: 4, offset: 27817 },
                    end: { line: 986, column: 12, offset: 27825 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27817 },
                end: { line: 986, column: 12, offset: 27825 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27815 },
            end: { line: 986, column: 12, offset: 27825 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27747 },
        end: { line: 986, column: 12, offset: 27825 }
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
            start: { line: 988, column: 4, offset: 27830 },
            end: { line: 988, column: 14, offset: 27840 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27827 },
        end: { line: 988, column: 14, offset: 27840 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Data Types in [A]synchronous Functional Programming.',
          position: {
            start: { line: 990, column: 1, offset: 27842 },
            end: { line: 990, column: 68, offset: 27909 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27842 },
        end: { line: 990, column: 68, offset: 27909 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are interested in getting started with Rubico and [A]synchronous Functional Programming, please visit Rubico's home page: ",
          position: {
            start: { line: 992, column: 1, offset: 27911 },
            end: { line: 992, column: 130, offset: 28040 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/',
          children: [
            {
              type: 'text',
              value: 'rubico.land',
              position: {
                start: { line: 992, column: 131, offset: 28041 },
                end: { line: 992, column: 142, offset: 28052 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 130, offset: 28040 },
            end: { line: 992, column: 146, offset: 28056 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 146, offset: 28056 },
            end: { line: 992, column: 147, offset: 28057 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27911 },
        end: { line: 992, column: 147, offset: 28057 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28058 }
  }
}