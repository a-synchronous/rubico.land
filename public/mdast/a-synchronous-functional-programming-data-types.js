export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'updated: 2025-06-16\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 309 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 311 },
            end: { line: 11, column: 186, offset: 496 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 311 },
        end: { line: 11, column: 186, offset: 496 }
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
            start: { line: 13, column: 4, offset: 501 },
            end: { line: 13, column: 24, offset: 521 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 498 },
        end: { line: 13, column: 24, offset: 521 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 522 },
            end: { line: 14, column: 250, offset: 771 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 522 },
        end: { line: 14, column: 250, offset: 771 }
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
            start: { line: 16, column: 5, offset: 777 },
            end: { line: 16, column: 11, offset: 783 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 773 },
        end: { line: 16, column: 11, offset: 783 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 785 },
            end: { line: 18, column: 64, offset: 848 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 848 },
            end: { line: 18, column: 67, offset: 851 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 851 },
            end: { line: 18, column: 105, offset: 889 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 889 },
            end: { line: 18, column: 110, offset: 894 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 894 },
            end: { line: 18, column: 185, offset: 969 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 785 },
        end: { line: 18, column: 185, offset: 969 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 971 },
        end: { line: 22, column: 4, offset: 990 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 992 },
            end: { line: 24, column: 22, offset: 1013 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1013 },
            end: { line: 24, column: 30, offset: 1021 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1021 },
            end: { line: 24, column: 79, offset: 1070 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1070 },
            end: { line: 24, column: 87, offset: 1078 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1078 },
            end: { line: 24, column: 147, offset: 1138 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 992 },
        end: { line: 24, column: 147, offset: 1138 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1140 },
        end: { line: 28, column: 4, offset: 1174 }
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
            start: { line: 30, column: 5, offset: 1180 },
            end: { line: 30, column: 11, offset: 1186 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1176 },
        end: { line: 30, column: 11, offset: 1186 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1188 },
            end: { line: 32, column: 56, offset: 1243 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1243 },
            end: { line: 32, column: 63, offset: 1250 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1250 },
            end: { line: 32, column: 67, offset: 1254 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1254 },
            end: { line: 32, column: 83, offset: 1270 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1270 },
            end: { line: 32, column: 255, offset: 1442 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1188 },
        end: { line: 32, column: 255, offset: 1442 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1444 },
        end: { line: 36, column: 4, offset: 1476 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1478 },
            end: { line: 38, column: 22, offset: 1499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1499 },
            end: { line: 38, column: 30, offset: 1507 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1507 },
            end: { line: 38, column: 79, offset: 1556 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1556 },
            end: { line: 38, column: 87, offset: 1564 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1564 },
            end: { line: 38, column: 147, offset: 1624 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1478 },
        end: { line: 38, column: 147, offset: 1624 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1626 },
        end: { line: 42, column: 4, offset: 1660 }
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
            start: { line: 44, column: 5, offset: 1666 },
            end: { line: 44, column: 12, offset: 1673 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1662 },
        end: { line: 44, column: 12, offset: 1673 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1675 },
            end: { line: 46, column: 63, offset: 1737 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1737 },
            end: { line: 46, column: 69, offset: 1743 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1743 },
            end: { line: 46, column: 73, offset: 1747 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1747 },
            end: { line: 46, column: 80, offset: 1754 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1754 },
            end: { line: 46, column: 135, offset: 1809 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1675 },
        end: { line: 46, column: 135, offset: 1809 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1811 },
        end: { line: 50, column: 4, offset: 1833 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1835 },
            end: { line: 52, column: 130, offset: 1964 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1964 },
            end: { line: 52, column: 134, offset: 1968 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1968 },
            end: { line: 52, column: 136, offset: 1970 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1970 },
            end: { line: 52, column: 139, offset: 1973 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1973 },
            end: { line: 52, column: 141, offset: 1975 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1975 },
            end: { line: 52, column: 144, offset: 1978 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1978 },
            end: { line: 52, column: 146, offset: 1980 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1980 },
            end: { line: 52, column: 150, offset: 1984 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1984 },
            end: { line: 52, column: 152, offset: 1986 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1986 },
            end: { line: 52, column: 156, offset: 1990 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1990 },
            end: { line: 52, column: 158, offset: 1992 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1992 },
            end: { line: 52, column: 162, offset: 1996 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 1996 },
            end: { line: 52, column: 167, offset: 2001 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 2001 },
            end: { line: 52, column: 171, offset: 2005 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 2005 },
            end: { line: 52, column: 213, offset: 2047 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2047 },
            end: { line: 52, column: 217, offset: 2051 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2051 },
            end: { line: 52, column: 255, offset: 2089 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1835 },
        end: { line: 52, column: 255, offset: 2089 }
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
        start: { line: 54, column: 1, offset: 2091 },
        end: { line: 61, column: 4, offset: 2228 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2230 },
            end: { line: 63, column: 22, offset: 2251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2251 },
            end: { line: 63, column: 31, offset: 2260 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2260 },
            end: { line: 63, column: 64, offset: 2293 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2230 },
        end: { line: 63, column: 64, offset: 2293 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2295 },
        end: { line: 67, column: 4, offset: 2332 }
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
            start: { line: 69, column: 5, offset: 2338 },
            end: { line: 69, column: 11, offset: 2344 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2334 },
        end: { line: 69, column: 11, offset: 2344 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2346 },
            end: { line: 71, column: 154, offset: 2499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2499 },
            end: { line: 71, column: 166, offset: 2511 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2511 },
            end: { line: 71, column: 208, offset: 2553 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2346 },
        end: { line: 71, column: 208, offset: 2553 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2555 },
        end: { line: 76, column: 4, offset: 2640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2642 },
            end: { line: 78, column: 137, offset: 2778 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2642 },
        end: { line: 78, column: 137, offset: 2778 }
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
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3090 },
            end: { line: 90, column: 194, offset: 3158 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2965 },
        end: { line: 90, column: 194, offset: 3158 }
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
        start: { line: 92, column: 1, offset: 3160 },
        end: { line: 97, column: 4, offset: 3327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3329 },
            end: { line: 99, column: 130, offset: 3458 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3458 },
            end: { line: 99, column: 140, offset: 3468 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3468 },
            end: { line: 99, column: 150, offset: 3478 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3478 },
            end: { line: 99, column: 163, offset: 3491 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3491 },
            end: { line: 99, column: 164, offset: 3492 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3329 },
        end: { line: 99, column: 164, offset: 3492 }
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
        start: { line: 101, column: 1, offset: 3494 },
        end: { line: 114, column: 4, offset: 3708 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3710 },
            end: { line: 116, column: 34, offset: 3743 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3743 },
            end: { line: 116, column: 51, offset: 3760 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3760 },
            end: { line: 116, column: 56, offset: 3765 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3765 },
            end: { line: 116, column: 78, offset: 3787 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3787 },
            end: { line: 116, column: 185, offset: 3894 }
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
                start: { line: 116, column: 186, offset: 3895 },
                end: { line: 116, column: 203, offset: 3912 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3894 },
            end: { line: 116, column: 313, offset: 4022 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4022 },
            end: { line: 116, column: 318, offset: 4027 }
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
                start: { line: 116, column: 319, offset: 4028 },
                end: { line: 116, column: 342, offset: 4051 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4027 },
            end: { line: 116, column: 478, offset: 4187 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3710 },
        end: { line: 116, column: 478, offset: 4187 }
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
            start: { line: 118, column: 5, offset: 4193 },
            end: { line: 118, column: 12, offset: 4200 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4189 },
        end: { line: 118, column: 12, offset: 4200 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4202 },
            end: { line: 120, column: 95, offset: 4296 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4296 },
            end: { line: 120, column: 101, offset: 4302 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4302 },
            end: { line: 120, column: 106, offset: 4307 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4307 },
            end: { line: 120, column: 117, offset: 4318 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4318 },
            end: { line: 120, column: 286, offset: 4487 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4487 },
            end: { line: 120, column: 292, offset: 4493 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4493 },
            end: { line: 120, column: 388, offset: 4589 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4589 },
            end: { line: 120, column: 399, offset: 4600 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4600 },
            end: { line: 120, column: 441, offset: 4642 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4642 },
            end: { line: 120, column: 452, offset: 4653 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4653 },
            end: { line: 120, column: 469, offset: 4670 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4202 },
        end: { line: 120, column: 469, offset: 4670 }
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
        start: { line: 122, column: 1, offset: 4672 },
        end: { line: 135, column: 4, offset: 4950 }
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
            start: { line: 137, column: 5, offset: 4956 },
            end: { line: 137, column: 42, offset: 4993 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4952 },
        end: { line: 137, column: 42, offset: 4993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4994 },
            end: { line: 138, column: 329, offset: 5322 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4994 },
        end: { line: 138, column: 329, offset: 5322 }
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
            start: { line: 140, column: 4, offset: 5327 },
            end: { line: 140, column: 25, offset: 5348 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5324 },
        end: { line: 140, column: 25, offset: 5348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5349 },
            end: { line: 141, column: 429, offset: 5777 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5349 },
        end: { line: 141, column: 429, offset: 5777 }
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
            start: { line: 143, column: 5, offset: 5783 },
            end: { line: 143, column: 10, offset: 5788 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5779 },
        end: { line: 143, column: 10, offset: 5788 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5790 },
            end: { line: 145, column: 175, offset: 5964 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5964 },
            end: { line: 145, column: 182, offset: 5971 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5971 },
            end: { line: 145, column: 195, offset: 5984 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5790 },
        end: { line: 145, column: 195, offset: 5984 }
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
        start: { line: 147, column: 1, offset: 5986 },
        end: { line: 155, column: 4, offset: 6253 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6255 },
            end: { line: 157, column: 56, offset: 6310 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6310 },
            end: { line: 157, column: 63, offset: 6317 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6317 },
            end: { line: 157, column: 76, offset: 6330 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6255 },
        end: { line: 157, column: 76, offset: 6330 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6332 },
        end: { line: 162, column: 4, offset: 6445 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6447 },
            end: { line: 164, column: 40, offset: 6486 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6486 },
            end: { line: 164, column: 48, offset: 6494 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6494 },
            end: { line: 164, column: 53, offset: 6499 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6499 },
            end: { line: 164, column: 59, offset: 6505 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6505 },
            end: { line: 164, column: 83, offset: 6529 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6447 },
        end: { line: 164, column: 83, offset: 6529 }
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
        start: { line: 166, column: 1, offset: 6531 },
        end: { line: 171, column: 4, offset: 6658 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6660 },
            end: { line: 173, column: 42, offset: 6701 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6701 },
            end: { line: 173, column: 49, offset: 6708 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6708 },
            end: { line: 173, column: 66, offset: 6725 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6660 },
        end: { line: 173, column: 66, offset: 6725 }
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
        start: { line: 175, column: 1, offset: 6727 },
        end: { line: 181, column: 4, offset: 6832 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6834 },
            end: { line: 183, column: 42, offset: 6875 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6875 },
            end: { line: 183, column: 51, offset: 6884 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6884 },
            end: { line: 183, column: 68, offset: 6901 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6834 },
        end: { line: 183, column: 68, offset: 6901 }
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
        start: { line: 185, column: 1, offset: 6903 },
        end: { line: 191, column: 4, offset: 7054 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7056 },
            end: { line: 193, column: 52, offset: 7107 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7107 },
            end: { line: 193, column: 62, offset: 7117 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7117 },
            end: { line: 193, column: 68, offset: 7123 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7056 },
        end: { line: 193, column: 68, offset: 7123 }
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
        start: { line: 195, column: 1, offset: 7125 },
        end: { line: 206, column: 4, offset: 7269 }
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
            start: { line: 208, column: 5, offset: 7275 },
            end: { line: 208, column: 11, offset: 7281 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7271 },
        end: { line: 208, column: 11, offset: 7281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7283 },
            end: { line: 210, column: 199, offset: 7481 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7283 },
        end: { line: 210, column: 199, offset: 7481 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7483 },
        end: { line: 214, column: 4, offset: 7519 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7521 },
            end: { line: 216, column: 22, offset: 7542 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7542 },
            end: { line: 216, column: 30, offset: 7550 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7550 },
            end: { line: 216, column: 91, offset: 7611 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7521 },
        end: { line: 216, column: 91, offset: 7611 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7613 },
        end: { line: 220, column: 4, offset: 7643 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7645 },
            end: { line: 222, column: 142, offset: 7786 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7645 },
        end: { line: 222, column: 142, offset: 7786 }
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
        start: { line: 224, column: 1, offset: 7788 },
        end: { line: 234, column: 4, offset: 8078 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8080 },
            end: { line: 236, column: 73, offset: 8152 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8152 },
            end: { line: 236, column: 81, offset: 8160 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8160 },
            end: { line: 236, column: 90, offset: 8169 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8080 },
        end: { line: 236, column: 90, offset: 8169 }
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
        start: { line: 238, column: 1, offset: 8171 },
        end: { line: 245, column: 4, offset: 8406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8408 },
            end: { line: 247, column: 66, offset: 8473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8473 },
            end: { line: 247, column: 76, offset: 8483 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8483 },
            end: { line: 247, column: 82, offset: 8489 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8408 },
        end: { line: 247, column: 82, offset: 8489 }
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
        start: { line: 249, column: 1, offset: 8491 },
        end: { line: 258, column: 4, offset: 8653 }
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
            start: { line: 260, column: 5, offset: 8659 },
            end: { line: 260, column: 8, offset: 8662 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8655 },
        end: { line: 260, column: 8, offset: 8662 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8664 },
            end: { line: 262, column: 169, offset: 8832 }
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
                start: { line: 262, column: 170, offset: 8833 },
                end: { line: 262, column: 183, offset: 8846 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8832 },
            end: { line: 262, column: 306, offset: 8969 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8969 },
            end: { line: 262, column: 469, offset: 9132 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9132 },
            end: { line: 262, column: 475, offset: 9138 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9138 },
            end: { line: 262, column: 483, offset: 9146 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8664 },
        end: { line: 262, column: 483, offset: 9146 }
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
        start: { line: 264, column: 1, offset: 9148 },
        end: { line: 269, column: 4, offset: 9331 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9333 },
            end: { line: 271, column: 26, offset: 9358 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9358 },
            end: { line: 271, column: 31, offset: 9363 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9363 },
            end: { line: 271, column: 44, offset: 9376 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9333 },
        end: { line: 271, column: 44, offset: 9376 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9378 },
        end: { line: 275, column: 4, offset: 9414 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9416 },
            end: { line: 277, column: 42, offset: 9457 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9457 },
            end: { line: 277, column: 48, offset: 9463 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9463 },
            end: { line: 277, column: 65, offset: 9480 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9416 },
        end: { line: 277, column: 65, offset: 9480 }
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
        start: { line: 279, column: 1, offset: 9482 },
        end: { line: 287, column: 4, offset: 9632 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9634 },
            end: { line: 289, column: 42, offset: 9675 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9675 },
            end: { line: 289, column: 51, offset: 9684 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9684 },
            end: { line: 289, column: 68, offset: 9701 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9634 },
        end: { line: 289, column: 68, offset: 9701 }
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
        start: { line: 291, column: 1, offset: 9703 },
        end: { line: 297, column: 4, offset: 9822 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9824 },
            end: { line: 299, column: 49, offset: 9872 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9872 },
            end: { line: 299, column: 59, offset: 9882 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9882 },
            end: { line: 299, column: 65, offset: 9888 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9824 },
        end: { line: 299, column: 65, offset: 9888 }
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
        start: { line: 301, column: 1, offset: 9890 },
        end: { line: 312, column: 4, offset: 10043 }
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
            start: { line: 314, column: 5, offset: 10049 },
            end: { line: 314, column: 8, offset: 10052 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10045 },
        end: { line: 314, column: 8, offset: 10052 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10054 },
            end: { line: 316, column: 203, offset: 10256 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10054 },
        end: { line: 316, column: 203, offset: 10256 }
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
                    start: { line: 317, column: 5, offset: 10261 },
                    end: { line: 317, column: 113, offset: 10369 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10261 },
                end: { line: 317, column: 113, offset: 10369 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10259 },
            end: { line: 317, column: 113, offset: 10369 }
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
                    start: { line: 318, column: 5, offset: 10374 },
                    end: { line: 318, column: 94, offset: 10463 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10463 },
                    end: { line: 318, column: 110, offset: 10479 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10374 },
                end: { line: 318, column: 110, offset: 10479 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10372 },
            end: { line: 318, column: 110, offset: 10479 }
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
                    start: { line: 319, column: 5, offset: 10484 },
                    end: { line: 319, column: 130, offset: 10609 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10484 },
                end: { line: 319, column: 130, offset: 10609 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10482 },
            end: { line: 319, column: 130, offset: 10609 }
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
                    start: { line: 320, column: 5, offset: 10614 },
                    end: { line: 320, column: 28, offset: 10637 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10637 },
                    end: { line: 320, column: 38, offset: 10647 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10647 },
                    end: { line: 320, column: 64, offset: 10673 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10673 },
                    end: { line: 320, column: 74, offset: 10683 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10683 },
                    end: { line: 320, column: 80, offset: 10689 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10614 },
                end: { line: 320, column: 80, offset: 10689 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10612 },
            end: { line: 320, column: 80, offset: 10689 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10259 },
        end: { line: 320, column: 80, offset: 10689 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10691 },
            end: { line: 322, column: 9, offset: 10699 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10699 },
            end: { line: 322, column: 14, offset: 10704 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10704 },
            end: { line: 322, column: 48, offset: 10738 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10738 },
            end: { line: 322, column: 53, offset: 10743 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10743 },
            end: { line: 322, column: 124, offset: 10814 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10691 },
        end: { line: 322, column: 124, offset: 10814 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10816 },
        end: { line: 330, column: 4, offset: 10892 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10894 },
            end: { line: 332, column: 42, offset: 10935 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10935 },
            end: { line: 332, column: 48, offset: 10941 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10941 },
            end: { line: 332, column: 65, offset: 10958 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10894 },
        end: { line: 332, column: 65, offset: 10958 }
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
        start: { line: 334, column: 1, offset: 10960 },
        end: { line: 341, column: 4, offset: 11111 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11113 },
            end: { line: 343, column: 42, offset: 11154 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11154 },
            end: { line: 343, column: 51, offset: 11163 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11163 },
            end: { line: 343, column: 68, offset: 11180 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11113 },
        end: { line: 343, column: 68, offset: 11180 }
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
        start: { line: 345, column: 1, offset: 11182 },
        end: { line: 355, column: 4, offset: 11335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11337 },
            end: { line: 357, column: 49, offset: 11385 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11385 },
            end: { line: 357, column: 59, offset: 11395 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11395 },
            end: { line: 357, column: 65, offset: 11401 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11337 },
        end: { line: 357, column: 65, offset: 11401 }
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
        start: { line: 359, column: 1, offset: 11403 },
        end: { line: 372, column: 4, offset: 11668 }
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
            start: { line: 374, column: 5, offset: 11674 },
            end: { line: 374, column: 53, offset: 11722 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11670 },
        end: { line: 374, column: 53, offset: 11722 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11724 },
            end: { line: 376, column: 323, offset: 12046 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11724 },
        end: { line: 376, column: 323, offset: 12046 }
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
            start: { line: 378, column: 4, offset: 12051 },
            end: { line: 378, column: 23, offset: 12070 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12048 },
        end: { line: 378, column: 23, offset: 12070 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12071 },
            end: { line: 379, column: 115, offset: 12185 }
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
                start: { line: 379, column: 116, offset: 12186 },
                end: { line: 379, column: 133, offset: 12203 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12185 },
            end: { line: 379, column: 243, offset: 12313 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12313 },
            end: { line: 379, column: 409, offset: 12479 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12479 },
            end: { line: 379, column: 419, offset: 12489 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12489 },
            end: { line: 379, column: 425, offset: 12495 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12071 },
        end: { line: 379, column: 425, offset: 12495 }
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
        start: { line: 381, column: 1, offset: 12497 },
        end: { line: 399, column: 4, offset: 12926 }
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
            start: { line: 401, column: 5, offset: 12932 },
            end: { line: 401, column: 22, offset: 12949 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12928 },
        end: { line: 401, column: 22, offset: 12949 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12950 },
            end: { line: 402, column: 78, offset: 13027 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13027 },
            end: { line: 402, column: 99, offset: 13048 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13048 },
            end: { line: 402, column: 252, offset: 13201 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13201 },
            end: { line: 402, column: 258, offset: 13207 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13207 },
            end: { line: 402, column: 259, offset: 13208 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12950 },
        end: { line: 402, column: 259, offset: 13208 }
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
        start: { line: 404, column: 1, offset: 13210 },
        end: { line: 412, column: 4, offset: 13371 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13373 },
            end: { line: 414, column: 73, offset: 13445 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13373 },
        end: { line: 414, column: 73, offset: 13445 }
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
        start: { line: 416, column: 1, offset: 13447 },
        end: { line: 447, column: 4, offset: 13905 }
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
            start: { line: 449, column: 5, offset: 13911 },
            end: { line: 449, column: 39, offset: 13945 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13907 },
        end: { line: 449, column: 39, offset: 13945 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13946 },
            end: { line: 450, column: 103, offset: 14048 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14048 },
            end: { line: 450, column: 120, offset: 14065 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14065 },
            end: { line: 450, column: 136, offset: 14081 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14081 },
            end: { line: 450, column: 143, offset: 14088 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14088 },
            end: { line: 450, column: 152, offset: 14097 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13946 },
        end: { line: 450, column: 152, offset: 14097 }
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
        start: { line: 452, column: 1, offset: 14099 },
        end: { line: 470, column: 4, offset: 14465 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14467 },
            end: { line: 472, column: 159, offset: 14625 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14625 },
            end: { line: 472, column: 182, offset: 14648 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14648 },
            end: { line: 472, column: 183, offset: 14649 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14467 },
        end: { line: 472, column: 183, offset: 14649 }
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
        start: { line: 474, column: 1, offset: 14651 },
        end: { line: 511, column: 4, offset: 15133 }
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
            start: { line: 513, column: 4, offset: 15138 },
            end: { line: 513, column: 27, offset: 15161 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15135 },
        end: { line: 513, column: 27, offset: 15161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15162 },
            end: { line: 514, column: 184, offset: 15345 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15162 },
        end: { line: 514, column: 184, offset: 15345 }
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
            start: { line: 516, column: 5, offset: 15351 },
            end: { line: 516, column: 12, offset: 15358 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15347 },
        end: { line: 516, column: 12, offset: 15358 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15360 },
            end: { line: 518, column: 143, offset: 15502 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15502 },
            end: { line: 518, column: 150, offset: 15509 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15509 },
            end: { line: 518, column: 157, offset: 15516 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15516 },
            end: { line: 518, column: 165, offset: 15524 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15524 },
            end: { line: 518, column: 173, offset: 15532 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15360 },
        end: { line: 518, column: 173, offset: 15532 }
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
        start: { line: 520, column: 1, offset: 15534 },
        end: { line: 528, column: 4, offset: 15832 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15834 },
            end: { line: 530, column: 15, offset: 15848 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15848 },
            end: { line: 530, column: 22, offset: 15855 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15855 },
            end: { line: 530, column: 166, offset: 15999 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 15999 },
            end: { line: 530, column: 173, offset: 16006 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 16006 },
            end: { line: 530, column: 222, offset: 16055 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15834 },
        end: { line: 530, column: 222, offset: 16055 }
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
        start: { line: 532, column: 1, offset: 16057 },
        end: { line: 544, column: 4, offset: 16362 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16364 },
            end: { line: 546, column: 15, offset: 16378 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16378 },
            end: { line: 546, column: 23, offset: 16386 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16386 },
            end: { line: 546, column: 74, offset: 16437 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16364 },
        end: { line: 546, column: 74, offset: 16437 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16439 },
        end: { line: 552, column: 4, offset: 16524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16526 },
            end: { line: 554, column: 38, offset: 16563 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16563 },
            end: { line: 554, column: 47, offset: 16572 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16572 },
            end: { line: 554, column: 60, offset: 16585 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16526 },
        end: { line: 554, column: 60, offset: 16585 }
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
        start: { line: 556, column: 1, offset: 16587 },
        end: { line: 576, column: 4, offset: 17004 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 17006 },
            end: { line: 578, column: 22, offset: 17027 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17027 },
            end: { line: 578, column: 32, offset: 17037 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17037 },
            end: { line: 578, column: 37, offset: 17042 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17042 },
            end: { line: 578, column: 46, offset: 17051 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17051 },
            end: { line: 578, column: 62, offset: 17067 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17067 },
            end: { line: 578, column: 71, offset: 17076 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17076 },
            end: { line: 578, column: 98, offset: 17103 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 17006 },
        end: { line: 578, column: 98, offset: 17103 }
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
        start: { line: 580, column: 1, offset: 17105 },
        end: { line: 586, column: 4, offset: 17348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17350 },
            end: { line: 588, column: 112, offset: 17461 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17350 },
        end: { line: 588, column: 112, offset: 17461 }
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
        start: { line: 590, column: 1, offset: 17463 },
        end: { line: 602, column: 4, offset: 17800 }
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
            start: { line: 604, column: 5, offset: 17806 },
            end: { line: 604, column: 16, offset: 17817 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17802 },
        end: { line: 604, column: 16, offset: 17817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17819 },
            end: { line: 606, column: 5, offset: 17823 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17823 },
            end: { line: 606, column: 21, offset: 17839 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17839 },
            end: { line: 606, column: 52, offset: 17870 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17870 },
            end: { line: 606, column: 59, offset: 17877 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17877 },
            end: { line: 606, column: 145, offset: 17963 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17963 },
            end: { line: 606, column: 152, offset: 17970 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17970 },
            end: { line: 606, column: 169, offset: 17987 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17987 },
            end: { line: 606, column: 185, offset: 18003 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 18003 },
            end: { line: 606, column: 246, offset: 18064 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17819 },
        end: { line: 606, column: 246, offset: 18064 }
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
        start: { line: 608, column: 1, offset: 18066 },
        end: { line: 627, column: 4, offset: 18605 }
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
            start: { line: 629, column: 4, offset: 18610 },
            end: { line: 629, column: 36, offset: 18642 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18607 },
        end: { line: 629, column: 36, offset: 18642 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18643 },
            end: { line: 630, column: 143, offset: 18785 }
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
                start: { line: 630, column: 144, offset: 18786 },
                end: { line: 630, column: 167, offset: 18809 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18785 },
            end: { line: 630, column: 303, offset: 18945 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18945 },
            end: { line: 630, column: 367, offset: 19009 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19009 },
            end: { line: 630, column: 384, offset: 19026 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19026 },
            end: { line: 630, column: 424, offset: 19066 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19066 },
            end: { line: 630, column: 440, offset: 19082 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19082 },
            end: { line: 630, column: 446, offset: 19088 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18643 },
        end: { line: 630, column: 446, offset: 19088 }
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
            start: { line: 632, column: 5, offset: 19094 },
            end: { line: 632, column: 28, offset: 19117 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19090 },
        end: { line: 632, column: 28, offset: 19117 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19118 },
            end: { line: 633, column: 84, offset: 19201 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19201 },
            end: { line: 633, column: 110, offset: 19227 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19227 },
            end: { line: 633, column: 276, offset: 19393 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19393 },
            end: { line: 633, column: 282, offset: 19399 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19399 },
            end: { line: 633, column: 283, offset: 19400 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19118 },
        end: { line: 633, column: 283, offset: 19400 }
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
        start: { line: 635, column: 1, offset: 19402 },
        end: { line: 643, column: 4, offset: 19590 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19592 },
            end: { line: 645, column: 79, offset: 19670 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19592 },
        end: { line: 645, column: 79, offset: 19670 }
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
        start: { line: 647, column: 1, offset: 19672 },
        end: { line: 678, column: 4, offset: 20167 }
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
            start: { line: 680, column: 5, offset: 20173 },
            end: { line: 680, column: 51, offset: 20219 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20169 },
        end: { line: 680, column: 51, offset: 20219 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20220 },
            end: { line: 681, column: 35, offset: 20254 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20254 },
            end: { line: 681, column: 58, offset: 20277 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20277 },
            end: { line: 681, column: 70, offset: 20289 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20289 },
            end: { line: 681, column: 77, offset: 20296 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20296 },
            end: { line: 681, column: 122, offset: 20341 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20341 },
            end: { line: 681, column: 138, offset: 20357 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20357 },
            end: { line: 681, column: 146, offset: 20365 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20220 },
        end: { line: 681, column: 146, offset: 20365 }
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
        start: { line: 683, column: 1, offset: 20367 },
        end: { line: 701, column: 4, offset: 20814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20816 },
            end: { line: 703, column: 184, offset: 20999 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 20999 },
            end: { line: 703, column: 218, offset: 21033 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21033 },
            end: { line: 703, column: 219, offset: 21034 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20816 },
        end: { line: 703, column: 219, offset: 21034 }
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
        start: { line: 705, column: 1, offset: 21036 },
        end: { line: 741, column: 4, offset: 21563 }
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
            start: { line: 743, column: 4, offset: 21568 },
            end: { line: 743, column: 24, offset: 21588 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21565 },
        end: { line: 743, column: 24, offset: 21588 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21589 },
            end: { line: 744, column: 253, offset: 21841 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21589 },
        end: { line: 744, column: 253, offset: 21841 }
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
            start: { line: 746, column: 5, offset: 21847 },
            end: { line: 746, column: 12, offset: 21854 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21843 },
        end: { line: 746, column: 12, offset: 21854 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21856 },
            end: { line: 748, column: 64, offset: 21919 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21919 },
            end: { line: 748, column: 70, offset: 21925 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21925 },
            end: { line: 748, column: 103, offset: 21958 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21958 },
            end: { line: 748, column: 109, offset: 21964 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21964 },
            end: { line: 748, column: 143, offset: 21998 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21856 },
        end: { line: 748, column: 143, offset: 21998 }
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
                    start: { line: 750, column: 5, offset: 22004 },
                    end: { line: 750, column: 50, offset: 22049 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22049 },
                    end: { line: 750, column: 58, offset: 22057 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22057 },
                    end: { line: 750, column: 119, offset: 22118 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 22004 },
                end: { line: 750, column: 119, offset: 22118 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 22001 },
            end: { line: 750, column: 119, offset: 22118 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 22001 },
        end: { line: 750, column: 119, offset: 22118 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22120 },
        end: { line: 757, column: 4, offset: 22197 }
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
        start: { line: 759, column: 1, offset: 22199 },
        end: { line: 766, column: 4, offset: 22343 }
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
                    start: { line: 768, column: 5, offset: 22349 },
                    end: { line: 768, column: 63, offset: 22407 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22407 },
                    end: { line: 768, column: 69, offset: 22413 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22413 },
                    end: { line: 768, column: 126, offset: 22470 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22470 },
                    end: { line: 768, column: 132, offset: 22476 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22476 },
                    end: { line: 768, column: 143, offset: 22487 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22349 },
                end: { line: 768, column: 143, offset: 22487 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22346 },
            end: { line: 768, column: 143, offset: 22487 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22346 },
        end: { line: 768, column: 143, offset: 22487 }
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
        start: { line: 770, column: 1, offset: 22489 },
        end: { line: 775, column: 4, offset: 22585 }
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
        start: { line: 777, column: 1, offset: 22587 },
        end: { line: 785, column: 4, offset: 22768 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22770 },
            end: { line: 787, column: 65, offset: 22834 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22770 },
        end: { line: 787, column: 65, offset: 22834 }
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
                    start: { line: 788, column: 4, offset: 22838 },
                    end: { line: 788, column: 11, offset: 22845 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22838 },
                end: { line: 788, column: 11, offset: 22845 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22836 },
            end: { line: 788, column: 11, offset: 22845 }
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
                    start: { line: 789, column: 4, offset: 22849 },
                    end: { line: 789, column: 9, offset: 22854 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22849 },
                end: { line: 789, column: 9, offset: 22854 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22847 },
            end: { line: 789, column: 9, offset: 22854 }
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
                    start: { line: 790, column: 4, offset: 22858 },
                    end: { line: 790, column: 9, offset: 22863 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22858 },
                end: { line: 790, column: 9, offset: 22863 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22856 },
            end: { line: 790, column: 9, offset: 22863 }
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
                    start: { line: 791, column: 4, offset: 22867 },
                    end: { line: 791, column: 15, offset: 22878 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22867 },
                end: { line: 791, column: 15, offset: 22878 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22865 },
            end: { line: 791, column: 15, offset: 22878 }
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
                    start: { line: 792, column: 4, offset: 22882 },
                    end: { line: 792, column: 21, offset: 22899 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22882 },
                end: { line: 792, column: 21, offset: 22899 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22880 },
            end: { line: 792, column: 21, offset: 22899 }
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
                    start: { line: 793, column: 4, offset: 22903 },
                    end: { line: 793, column: 12, offset: 22911 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22903 },
                end: { line: 793, column: 12, offset: 22911 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22901 },
            end: { line: 793, column: 12, offset: 22911 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22836 },
        end: { line: 793, column: 12, offset: 22911 }
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
            start: { line: 795, column: 5, offset: 22917 },
            end: { line: 795, column: 15, offset: 22927 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22913 },
        end: { line: 795, column: 15, offset: 22927 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22929 },
            end: { line: 797, column: 67, offset: 22995 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22995 },
            end: { line: 797, column: 76, offset: 23004 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 23004 },
            end: { line: 797, column: 109, offset: 23037 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23037 },
            end: { line: 797, column: 118, offset: 23046 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23046 },
            end: { line: 797, column: 154, offset: 23082 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22929 },
        end: { line: 797, column: 154, offset: 23082 }
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
                    start: { line: 799, column: 5, offset: 23088 },
                    end: { line: 799, column: 97, offset: 23180 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23180 },
                    end: { line: 799, column: 106, offset: 23189 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23189 },
                    end: { line: 799, column: 209, offset: 23292 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23292 },
                    end: { line: 799, column: 218, offset: 23301 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23301 },
                    end: { line: 799, column: 219, offset: 23302 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23088 },
                end: { line: 799, column: 219, offset: 23302 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23085 },
            end: { line: 799, column: 219, offset: 23302 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23085 },
        end: { line: 799, column: 219, offset: 23302 }
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
        start: { line: 801, column: 1, offset: 23304 },
        end: { line: 806, column: 4, offset: 23419 }
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
        start: { line: 808, column: 1, offset: 23421 },
        end: { line: 816, column: 4, offset: 23620 }
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
                    start: { line: 818, column: 5, offset: 23626 },
                    end: { line: 818, column: 121, offset: 23742 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23626 },
                end: { line: 818, column: 121, offset: 23742 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23623 },
            end: { line: 818, column: 121, offset: 23742 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23623 },
        end: { line: 818, column: 121, offset: 23742 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23744 },
        end: { line: 825, column: 4, offset: 23832 }
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
        start: { line: 827, column: 1, offset: 23834 },
        end: { line: 832, column: 4, offset: 23958 }
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
                    start: { line: 834, column: 5, offset: 23964 },
                    end: { line: 834, column: 159, offset: 24118 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23964 },
                end: { line: 834, column: 159, offset: 24118 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23961 },
            end: { line: 834, column: 159, offset: 24118 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23961 },
        end: { line: 834, column: 159, offset: 24118 }
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
        start: { line: 836, column: 1, offset: 24120 },
        end: { line: 841, column: 4, offset: 24231 }
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
        start: { line: 843, column: 1, offset: 24233 },
        end: { line: 849, column: 4, offset: 24414 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24416 },
            end: { line: 851, column: 68, offset: 24483 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24416 },
        end: { line: 851, column: 68, offset: 24483 }
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
                    start: { line: 852, column: 4, offset: 24487 },
                    end: { line: 852, column: 11, offset: 24494 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24487 },
                end: { line: 852, column: 11, offset: 24494 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24485 },
            end: { line: 852, column: 11, offset: 24494 }
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
                    start: { line: 853, column: 4, offset: 24498 },
                    end: { line: 853, column: 9, offset: 24503 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24498 },
                end: { line: 853, column: 9, offset: 24503 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24496 },
            end: { line: 853, column: 9, offset: 24503 }
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
                    start: { line: 854, column: 4, offset: 24507 },
                    end: { line: 854, column: 9, offset: 24512 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24507 },
                end: { line: 854, column: 9, offset: 24512 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24505 },
            end: { line: 854, column: 9, offset: 24512 }
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
                    start: { line: 855, column: 4, offset: 24516 },
                    end: { line: 855, column: 15, offset: 24527 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24516 },
                end: { line: 855, column: 15, offset: 24527 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24514 },
            end: { line: 855, column: 15, offset: 24527 }
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
                    start: { line: 856, column: 4, offset: 24531 },
                    end: { line: 856, column: 21, offset: 24548 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24531 },
                end: { line: 856, column: 21, offset: 24548 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24529 },
            end: { line: 856, column: 21, offset: 24548 }
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
                    start: { line: 857, column: 4, offset: 24552 },
                    end: { line: 857, column: 12, offset: 24560 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24552 },
                end: { line: 857, column: 12, offset: 24560 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24550 },
            end: { line: 857, column: 12, offset: 24560 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24485 },
        end: { line: 857, column: 12, offset: 24560 }
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
            start: { line: 859, column: 5, offset: 24566 },
            end: { line: 859, column: 13, offset: 24574 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24562 },
        end: { line: 859, column: 13, offset: 24574 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24576 },
            end: { line: 861, column: 65, offset: 24640 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24640 },
            end: { line: 861, column: 74, offset: 24649 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24649 },
            end: { line: 861, column: 107, offset: 24682 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24682 },
            end: { line: 861, column: 116, offset: 24691 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24691 },
            end: { line: 861, column: 151, offset: 24726 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24576 },
        end: { line: 861, column: 152, offset: 24727 }
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
                    start: { line: 863, column: 5, offset: 24733 },
                    end: { line: 863, column: 86, offset: 24814 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24814 },
                    end: { line: 863, column: 95, offset: 24823 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24823 },
                    end: { line: 863, column: 253, offset: 24981 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24733 },
                end: { line: 863, column: 253, offset: 24981 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24730 },
            end: { line: 863, column: 253, offset: 24981 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24730 },
        end: { line: 863, column: 253, offset: 24981 }
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
        start: { line: 865, column: 1, offset: 24983 },
        end: { line: 872, column: 4, offset: 25153 }
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
        start: { line: 874, column: 1, offset: 25155 },
        end: { line: 884, column: 4, offset: 25389 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25391 },
            end: { line: 886, column: 66, offset: 25456 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25391 },
        end: { line: 886, column: 66, offset: 25456 }
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
                    start: { line: 887, column: 4, offset: 25460 },
                    end: { line: 887, column: 11, offset: 25467 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25460 },
                end: { line: 887, column: 11, offset: 25467 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25458 },
            end: { line: 887, column: 11, offset: 25467 }
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
                    start: { line: 888, column: 4, offset: 25471 },
                    end: { line: 888, column: 9, offset: 25476 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25471 },
                end: { line: 888, column: 9, offset: 25476 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25469 },
            end: { line: 888, column: 9, offset: 25476 }
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
                    start: { line: 889, column: 4, offset: 25480 },
                    end: { line: 889, column: 9, offset: 25485 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25480 },
                end: { line: 889, column: 9, offset: 25485 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25478 },
            end: { line: 889, column: 9, offset: 25485 }
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
                    start: { line: 890, column: 4, offset: 25489 },
                    end: { line: 890, column: 15, offset: 25500 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25489 },
                end: { line: 890, column: 15, offset: 25500 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25487 },
            end: { line: 890, column: 15, offset: 25500 }
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
                    start: { line: 891, column: 4, offset: 25504 },
                    end: { line: 891, column: 21, offset: 25521 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25504 },
                end: { line: 891, column: 21, offset: 25521 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25502 },
            end: { line: 891, column: 21, offset: 25521 }
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
                    start: { line: 892, column: 4, offset: 25525 },
                    end: { line: 892, column: 12, offset: 25533 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25525 },
                end: { line: 892, column: 12, offset: 25533 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25523 },
            end: { line: 892, column: 12, offset: 25533 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25458 },
        end: { line: 892, column: 12, offset: 25533 }
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
            start: { line: 894, column: 5, offset: 25539 },
            end: { line: 894, column: 14, offset: 25548 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25535 },
        end: { line: 894, column: 14, offset: 25548 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25550 },
            end: { line: 896, column: 66, offset: 25615 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25615 },
            end: { line: 896, column: 75, offset: 25624 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25624 },
            end: { line: 896, column: 108, offset: 25657 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25657 },
            end: { line: 896, column: 117, offset: 25666 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25666 },
            end: { line: 896, column: 152, offset: 25701 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25550 },
        end: { line: 896, column: 152, offset: 25701 }
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
                    start: { line: 898, column: 5, offset: 25707 },
                    end: { line: 898, column: 123, offset: 25825 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25707 },
                end: { line: 898, column: 123, offset: 25825 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25704 },
            end: { line: 898, column: 123, offset: 25825 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25704 },
        end: { line: 898, column: 123, offset: 25825 }
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
        start: { line: 900, column: 1, offset: 25827 },
        end: { line: 905, column: 4, offset: 25940 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25942 },
        end: { line: 910, column: 4, offset: 26052 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26054 },
            end: { line: 912, column: 67, offset: 26120 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26054 },
        end: { line: 912, column: 67, offset: 26120 }
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
                    start: { line: 913, column: 4, offset: 26124 },
                    end: { line: 913, column: 11, offset: 26131 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26124 },
                end: { line: 913, column: 11, offset: 26131 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26122 },
            end: { line: 913, column: 11, offset: 26131 }
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
                    start: { line: 914, column: 4, offset: 26135 },
                    end: { line: 914, column: 12, offset: 26143 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26135 },
                end: { line: 914, column: 12, offset: 26143 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26133 },
            end: { line: 914, column: 12, offset: 26143 }
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
                    start: { line: 915, column: 4, offset: 26147 },
                    end: { line: 915, column: 9, offset: 26152 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26147 },
                end: { line: 915, column: 9, offset: 26152 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26145 },
            end: { line: 915, column: 9, offset: 26152 }
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
                    start: { line: 916, column: 4, offset: 26156 },
                    end: { line: 916, column: 12, offset: 26164 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26156 },
                end: { line: 916, column: 12, offset: 26164 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26154 },
            end: { line: 916, column: 12, offset: 26164 }
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
                    start: { line: 917, column: 4, offset: 26168 },
                    end: { line: 917, column: 12, offset: 26176 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26168 },
                end: { line: 917, column: 12, offset: 26176 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26166 },
            end: { line: 917, column: 12, offset: 26176 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26122 },
        end: { line: 917, column: 12, offset: 26176 }
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
            start: { line: 919, column: 5, offset: 26182 },
            end: { line: 919, column: 10, offset: 26187 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26178 },
        end: { line: 919, column: 10, offset: 26187 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26189 },
            end: { line: 921, column: 62, offset: 26250 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26250 },
            end: { line: 921, column: 72, offset: 26260 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26260 },
            end: { line: 921, column: 76, offset: 26264 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26264 },
            end: { line: 921, column: 84, offset: 26272 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26272 },
            end: { line: 921, column: 118, offset: 26306 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26306 },
            end: { line: 921, column: 128, offset: 26316 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26316 },
            end: { line: 921, column: 132, offset: 26320 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26320 },
            end: { line: 921, column: 140, offset: 26328 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26328 },
            end: { line: 921, column: 172, offset: 26360 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26189 },
        end: { line: 921, column: 172, offset: 26360 }
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
                    start: { line: 923, column: 5, offset: 26366 },
                    end: { line: 923, column: 77, offset: 26438 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26438 },
                    end: { line: 923, column: 87, offset: 26448 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26448 },
                    end: { line: 923, column: 91, offset: 26452 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26452 },
                    end: { line: 923, column: 99, offset: 26460 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 923, column: 99, offset: 26460 },
                    end: { line: 923, column: 177, offset: 26538 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26366 },
                end: { line: 923, column: 177, offset: 26538 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26363 },
            end: { line: 923, column: 177, offset: 26538 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26363 },
        end: { line: 923, column: 177, offset: 26538 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26540 },
        end: { line: 930, column: 4, offset: 26613 }
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
        start: { line: 932, column: 1, offset: 26615 },
        end: { line: 940, column: 4, offset: 26777 }
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
                    start: { line: 942, column: 5, offset: 26783 },
                    end: { line: 942, column: 119, offset: 26897 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26783 },
                end: { line: 942, column: 119, offset: 26897 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26780 },
            end: { line: 942, column: 119, offset: 26897 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26780 },
        end: { line: 942, column: 119, offset: 26897 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26899 },
        end: { line: 949, column: 4, offset: 26978 }
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
        start: { line: 951, column: 1, offset: 26980 },
        end: { line: 958, column: 4, offset: 27144 }
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
                    start: { line: 960, column: 5, offset: 27150 },
                    end: { line: 960, column: 118, offset: 27263 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27150 },
                end: { line: 960, column: 118, offset: 27263 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27147 },
            end: { line: 960, column: 118, offset: 27263 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27147 },
        end: { line: 960, column: 118, offset: 27263 }
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
        start: { line: 962, column: 1, offset: 27265 },
        end: { line: 968, column: 4, offset: 27421 }
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
        start: { line: 970, column: 1, offset: 27423 },
        end: { line: 978, column: 4, offset: 27647 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27649 },
            end: { line: 980, column: 63, offset: 27711 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27649 },
        end: { line: 980, column: 63, offset: 27711 }
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
                    start: { line: 981, column: 4, offset: 27715 },
                    end: { line: 981, column: 11, offset: 27722 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27715 },
                end: { line: 981, column: 11, offset: 27722 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27713 },
            end: { line: 981, column: 11, offset: 27722 }
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
                    start: { line: 982, column: 4, offset: 27726 },
                    end: { line: 982, column: 12, offset: 27734 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27726 },
                end: { line: 982, column: 12, offset: 27734 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27724 },
            end: { line: 982, column: 12, offset: 27734 }
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
                    start: { line: 983, column: 4, offset: 27738 },
                    end: { line: 983, column: 9, offset: 27743 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27738 },
                end: { line: 983, column: 9, offset: 27743 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27736 },
            end: { line: 983, column: 9, offset: 27743 }
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
                    start: { line: 984, column: 4, offset: 27747 },
                    end: { line: 984, column: 15, offset: 27758 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27747 },
                end: { line: 984, column: 15, offset: 27758 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27745 },
            end: { line: 984, column: 15, offset: 27758 }
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
                    start: { line: 985, column: 4, offset: 27762 },
                    end: { line: 985, column: 21, offset: 27779 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27762 },
                end: { line: 985, column: 21, offset: 27779 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27760 },
            end: { line: 985, column: 21, offset: 27779 }
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
                    start: { line: 986, column: 4, offset: 27783 },
                    end: { line: 986, column: 12, offset: 27791 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27783 },
                end: { line: 986, column: 12, offset: 27791 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27781 },
            end: { line: 986, column: 12, offset: 27791 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27713 },
        end: { line: 986, column: 12, offset: 27791 }
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
            start: { line: 988, column: 4, offset: 27796 },
            end: { line: 988, column: 14, offset: 27806 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27793 },
        end: { line: 988, column: 14, offset: 27806 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 990, column: 1, offset: 27808 },
            end: { line: 990, column: 85, offset: 27892 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27808 },
        end: { line: 990, column: 85, offset: 27892 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 992, column: 1, offset: 27894 },
            end: { line: 992, column: 141, offset: 28034 }
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
                start: { line: 992, column: 142, offset: 28035 },
                end: { line: 992, column: 153, offset: 28046 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 141, offset: 28034 },
            end: { line: 992, column: 176, offset: 28069 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 176, offset: 28069 },
            end: { line: 992, column: 177, offset: 28070 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27894 },
        end: { line: 992, column: 177, offset: 28070 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28071 }
  }
}