export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'lastUpdated: 2025-06-16\n' +
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
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1274 },
            end: { line: 32, column: 255, offset: 1446 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1192 },
        end: { line: 32, column: 255, offset: 1446 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1448 },
        end: { line: 36, column: 4, offset: 1480 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1482 },
            end: { line: 38, column: 22, offset: 1503 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1503 },
            end: { line: 38, column: 30, offset: 1511 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1511 },
            end: { line: 38, column: 79, offset: 1560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1560 },
            end: { line: 38, column: 87, offset: 1568 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1568 },
            end: { line: 38, column: 147, offset: 1628 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1482 },
        end: { line: 38, column: 147, offset: 1628 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1630 },
        end: { line: 42, column: 4, offset: 1664 }
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
            start: { line: 44, column: 5, offset: 1670 },
            end: { line: 44, column: 12, offset: 1677 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1666 },
        end: { line: 44, column: 12, offset: 1677 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1679 },
            end: { line: 46, column: 63, offset: 1741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1741 },
            end: { line: 46, column: 69, offset: 1747 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1747 },
            end: { line: 46, column: 73, offset: 1751 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1751 },
            end: { line: 46, column: 80, offset: 1758 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1758 },
            end: { line: 46, column: 135, offset: 1813 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1679 },
        end: { line: 46, column: 135, offset: 1813 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1815 },
        end: { line: 50, column: 4, offset: 1837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1839 },
            end: { line: 52, column: 130, offset: 1968 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1968 },
            end: { line: 52, column: 134, offset: 1972 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1972 },
            end: { line: 52, column: 136, offset: 1974 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1974 },
            end: { line: 52, column: 139, offset: 1977 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1977 },
            end: { line: 52, column: 141, offset: 1979 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1979 },
            end: { line: 52, column: 144, offset: 1982 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1982 },
            end: { line: 52, column: 146, offset: 1984 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1984 },
            end: { line: 52, column: 150, offset: 1988 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1988 },
            end: { line: 52, column: 152, offset: 1990 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1990 },
            end: { line: 52, column: 156, offset: 1994 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1994 },
            end: { line: 52, column: 158, offset: 1996 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1996 },
            end: { line: 52, column: 162, offset: 2000 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 2000 },
            end: { line: 52, column: 167, offset: 2005 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 2005 },
            end: { line: 52, column: 171, offset: 2009 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 2009 },
            end: { line: 52, column: 213, offset: 2051 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2051 },
            end: { line: 52, column: 217, offset: 2055 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2055 },
            end: { line: 52, column: 255, offset: 2093 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1839 },
        end: { line: 52, column: 255, offset: 2093 }
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
        start: { line: 54, column: 1, offset: 2095 },
        end: { line: 61, column: 4, offset: 2232 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2234 },
            end: { line: 63, column: 22, offset: 2255 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2255 },
            end: { line: 63, column: 31, offset: 2264 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2264 },
            end: { line: 63, column: 64, offset: 2297 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2234 },
        end: { line: 63, column: 64, offset: 2297 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2299 },
        end: { line: 67, column: 4, offset: 2336 }
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
            start: { line: 69, column: 5, offset: 2342 },
            end: { line: 69, column: 11, offset: 2348 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2338 },
        end: { line: 69, column: 11, offset: 2348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2350 },
            end: { line: 71, column: 154, offset: 2503 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2503 },
            end: { line: 71, column: 166, offset: 2515 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2515 },
            end: { line: 71, column: 208, offset: 2557 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2350 },
        end: { line: 71, column: 208, offset: 2557 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2559 },
        end: { line: 76, column: 4, offset: 2644 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2646 },
            end: { line: 78, column: 137, offset: 2782 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2646 },
        end: { line: 78, column: 137, offset: 2782 }
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
        start: { line: 80, column: 1, offset: 2784 },
        end: { line: 86, column: 4, offset: 2955 }
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
            start: { line: 88, column: 5, offset: 2961 },
            end: { line: 88, column: 11, offset: 2967 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2957 },
        end: { line: 88, column: 11, offset: 2967 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2969 },
            end: { line: 90, column: 54, offset: 3022 }
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
                start: { line: 90, column: 55, offset: 3023 },
                end: { line: 90, column: 64, offset: 3032 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3022 },
            end: { line: 90, column: 126, offset: 3094 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3094 },
            end: { line: 90, column: 194, offset: 3162 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2969 },
        end: { line: 90, column: 194, offset: 3162 }
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
        start: { line: 92, column: 1, offset: 3164 },
        end: { line: 97, column: 4, offset: 3331 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3333 },
            end: { line: 99, column: 130, offset: 3462 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3462 },
            end: { line: 99, column: 140, offset: 3472 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3472 },
            end: { line: 99, column: 150, offset: 3482 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3482 },
            end: { line: 99, column: 163, offset: 3495 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3495 },
            end: { line: 99, column: 164, offset: 3496 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3333 },
        end: { line: 99, column: 164, offset: 3496 }
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
        start: { line: 101, column: 1, offset: 3498 },
        end: { line: 114, column: 4, offset: 3712 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3714 },
            end: { line: 116, column: 34, offset: 3747 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3747 },
            end: { line: 116, column: 51, offset: 3764 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3764 },
            end: { line: 116, column: 56, offset: 3769 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3769 },
            end: { line: 116, column: 78, offset: 3791 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3791 },
            end: { line: 116, column: 185, offset: 3898 }
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
                start: { line: 116, column: 186, offset: 3899 },
                end: { line: 116, column: 203, offset: 3916 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3898 },
            end: { line: 116, column: 313, offset: 4026 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4026 },
            end: { line: 116, column: 318, offset: 4031 }
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
                start: { line: 116, column: 319, offset: 4032 },
                end: { line: 116, column: 342, offset: 4055 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4031 },
            end: { line: 116, column: 478, offset: 4191 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3714 },
        end: { line: 116, column: 478, offset: 4191 }
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
            start: { line: 118, column: 5, offset: 4197 },
            end: { line: 118, column: 12, offset: 4204 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4193 },
        end: { line: 118, column: 12, offset: 4204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4206 },
            end: { line: 120, column: 95, offset: 4300 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4300 },
            end: { line: 120, column: 101, offset: 4306 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4306 },
            end: { line: 120, column: 106, offset: 4311 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4311 },
            end: { line: 120, column: 117, offset: 4322 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4322 },
            end: { line: 120, column: 286, offset: 4491 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4491 },
            end: { line: 120, column: 292, offset: 4497 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4497 },
            end: { line: 120, column: 388, offset: 4593 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4593 },
            end: { line: 120, column: 399, offset: 4604 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4604 },
            end: { line: 120, column: 441, offset: 4646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4646 },
            end: { line: 120, column: 452, offset: 4657 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4657 },
            end: { line: 120, column: 469, offset: 4674 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4206 },
        end: { line: 120, column: 469, offset: 4674 }
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
        start: { line: 122, column: 1, offset: 4676 },
        end: { line: 135, column: 4, offset: 4954 }
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
            start: { line: 137, column: 5, offset: 4960 },
            end: { line: 137, column: 42, offset: 4997 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4956 },
        end: { line: 137, column: 42, offset: 4997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4998 },
            end: { line: 138, column: 329, offset: 5326 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4998 },
        end: { line: 138, column: 329, offset: 5326 }
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
            start: { line: 140, column: 4, offset: 5331 },
            end: { line: 140, column: 25, offset: 5352 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5328 },
        end: { line: 140, column: 25, offset: 5352 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5353 },
            end: { line: 141, column: 429, offset: 5781 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5353 },
        end: { line: 141, column: 429, offset: 5781 }
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
            start: { line: 143, column: 5, offset: 5787 },
            end: { line: 143, column: 10, offset: 5792 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5783 },
        end: { line: 143, column: 10, offset: 5792 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5794 },
            end: { line: 145, column: 175, offset: 5968 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5968 },
            end: { line: 145, column: 182, offset: 5975 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5975 },
            end: { line: 145, column: 195, offset: 5988 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5794 },
        end: { line: 145, column: 195, offset: 5988 }
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
        start: { line: 147, column: 1, offset: 5990 },
        end: { line: 155, column: 4, offset: 6257 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6259 },
            end: { line: 157, column: 56, offset: 6314 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6314 },
            end: { line: 157, column: 63, offset: 6321 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6321 },
            end: { line: 157, column: 76, offset: 6334 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6259 },
        end: { line: 157, column: 76, offset: 6334 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6336 },
        end: { line: 162, column: 4, offset: 6449 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6451 },
            end: { line: 164, column: 40, offset: 6490 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6490 },
            end: { line: 164, column: 48, offset: 6498 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6498 },
            end: { line: 164, column: 53, offset: 6503 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6503 },
            end: { line: 164, column: 59, offset: 6509 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6509 },
            end: { line: 164, column: 83, offset: 6533 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6451 },
        end: { line: 164, column: 83, offset: 6533 }
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
        start: { line: 166, column: 1, offset: 6535 },
        end: { line: 171, column: 4, offset: 6662 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6664 },
            end: { line: 173, column: 42, offset: 6705 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6705 },
            end: { line: 173, column: 49, offset: 6712 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6712 },
            end: { line: 173, column: 66, offset: 6729 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6664 },
        end: { line: 173, column: 66, offset: 6729 }
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
        start: { line: 175, column: 1, offset: 6731 },
        end: { line: 181, column: 4, offset: 6836 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6838 },
            end: { line: 183, column: 42, offset: 6879 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6879 },
            end: { line: 183, column: 51, offset: 6888 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6888 },
            end: { line: 183, column: 68, offset: 6905 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6838 },
        end: { line: 183, column: 68, offset: 6905 }
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
        start: { line: 185, column: 1, offset: 6907 },
        end: { line: 191, column: 4, offset: 7058 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7060 },
            end: { line: 193, column: 52, offset: 7111 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7111 },
            end: { line: 193, column: 62, offset: 7121 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7121 },
            end: { line: 193, column: 68, offset: 7127 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7060 },
        end: { line: 193, column: 68, offset: 7127 }
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
        start: { line: 195, column: 1, offset: 7129 },
        end: { line: 206, column: 4, offset: 7273 }
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
            start: { line: 208, column: 5, offset: 7279 },
            end: { line: 208, column: 11, offset: 7285 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7275 },
        end: { line: 208, column: 11, offset: 7285 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7287 },
            end: { line: 210, column: 199, offset: 7485 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7287 },
        end: { line: 210, column: 199, offset: 7485 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7487 },
        end: { line: 214, column: 4, offset: 7523 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7525 },
            end: { line: 216, column: 22, offset: 7546 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7546 },
            end: { line: 216, column: 30, offset: 7554 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7554 },
            end: { line: 216, column: 91, offset: 7615 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7525 },
        end: { line: 216, column: 91, offset: 7615 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7617 },
        end: { line: 220, column: 4, offset: 7647 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7649 },
            end: { line: 222, column: 142, offset: 7790 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7649 },
        end: { line: 222, column: 142, offset: 7790 }
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
        start: { line: 224, column: 1, offset: 7792 },
        end: { line: 234, column: 4, offset: 8082 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8084 },
            end: { line: 236, column: 73, offset: 8156 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8156 },
            end: { line: 236, column: 81, offset: 8164 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8164 },
            end: { line: 236, column: 90, offset: 8173 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8084 },
        end: { line: 236, column: 90, offset: 8173 }
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
        start: { line: 238, column: 1, offset: 8175 },
        end: { line: 245, column: 4, offset: 8410 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8412 },
            end: { line: 247, column: 66, offset: 8477 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8477 },
            end: { line: 247, column: 76, offset: 8487 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8487 },
            end: { line: 247, column: 82, offset: 8493 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8412 },
        end: { line: 247, column: 82, offset: 8493 }
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
        start: { line: 249, column: 1, offset: 8495 },
        end: { line: 258, column: 4, offset: 8657 }
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
            start: { line: 260, column: 5, offset: 8663 },
            end: { line: 260, column: 8, offset: 8666 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8659 },
        end: { line: 260, column: 8, offset: 8666 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8668 },
            end: { line: 262, column: 169, offset: 8836 }
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
                start: { line: 262, column: 170, offset: 8837 },
                end: { line: 262, column: 183, offset: 8850 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8836 },
            end: { line: 262, column: 306, offset: 8973 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8973 },
            end: { line: 262, column: 469, offset: 9136 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9136 },
            end: { line: 262, column: 475, offset: 9142 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9142 },
            end: { line: 262, column: 483, offset: 9150 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8668 },
        end: { line: 262, column: 483, offset: 9150 }
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
        start: { line: 264, column: 1, offset: 9152 },
        end: { line: 269, column: 4, offset: 9335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9337 },
            end: { line: 271, column: 26, offset: 9362 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9362 },
            end: { line: 271, column: 31, offset: 9367 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9367 },
            end: { line: 271, column: 44, offset: 9380 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9337 },
        end: { line: 271, column: 44, offset: 9380 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9382 },
        end: { line: 275, column: 4, offset: 9418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9420 },
            end: { line: 277, column: 42, offset: 9461 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9461 },
            end: { line: 277, column: 48, offset: 9467 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9467 },
            end: { line: 277, column: 65, offset: 9484 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9420 },
        end: { line: 277, column: 65, offset: 9484 }
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
        start: { line: 279, column: 1, offset: 9486 },
        end: { line: 287, column: 4, offset: 9636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9638 },
            end: { line: 289, column: 42, offset: 9679 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9679 },
            end: { line: 289, column: 51, offset: 9688 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9688 },
            end: { line: 289, column: 68, offset: 9705 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9638 },
        end: { line: 289, column: 68, offset: 9705 }
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
        start: { line: 291, column: 1, offset: 9707 },
        end: { line: 297, column: 4, offset: 9826 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9828 },
            end: { line: 299, column: 49, offset: 9876 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9876 },
            end: { line: 299, column: 59, offset: 9886 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9886 },
            end: { line: 299, column: 65, offset: 9892 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9828 },
        end: { line: 299, column: 65, offset: 9892 }
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
        start: { line: 301, column: 1, offset: 9894 },
        end: { line: 312, column: 4, offset: 10047 }
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
            start: { line: 314, column: 5, offset: 10053 },
            end: { line: 314, column: 8, offset: 10056 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10049 },
        end: { line: 314, column: 8, offset: 10056 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10058 },
            end: { line: 316, column: 203, offset: 10260 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10058 },
        end: { line: 316, column: 203, offset: 10260 }
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
                    start: { line: 317, column: 5, offset: 10265 },
                    end: { line: 317, column: 113, offset: 10373 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10265 },
                end: { line: 317, column: 113, offset: 10373 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10263 },
            end: { line: 317, column: 113, offset: 10373 }
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
                    start: { line: 318, column: 5, offset: 10378 },
                    end: { line: 318, column: 94, offset: 10467 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10467 },
                    end: { line: 318, column: 110, offset: 10483 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10378 },
                end: { line: 318, column: 110, offset: 10483 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10376 },
            end: { line: 318, column: 110, offset: 10483 }
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
                    start: { line: 319, column: 5, offset: 10488 },
                    end: { line: 319, column: 130, offset: 10613 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10488 },
                end: { line: 319, column: 130, offset: 10613 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10486 },
            end: { line: 319, column: 130, offset: 10613 }
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
                    start: { line: 320, column: 5, offset: 10618 },
                    end: { line: 320, column: 28, offset: 10641 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10641 },
                    end: { line: 320, column: 38, offset: 10651 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10651 },
                    end: { line: 320, column: 64, offset: 10677 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10677 },
                    end: { line: 320, column: 74, offset: 10687 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10687 },
                    end: { line: 320, column: 80, offset: 10693 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10618 },
                end: { line: 320, column: 80, offset: 10693 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10616 },
            end: { line: 320, column: 80, offset: 10693 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10263 },
        end: { line: 320, column: 80, offset: 10693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10695 },
            end: { line: 322, column: 9, offset: 10703 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10703 },
            end: { line: 322, column: 14, offset: 10708 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10708 },
            end: { line: 322, column: 48, offset: 10742 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10742 },
            end: { line: 322, column: 53, offset: 10747 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10747 },
            end: { line: 322, column: 124, offset: 10818 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10695 },
        end: { line: 322, column: 124, offset: 10818 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10820 },
        end: { line: 330, column: 4, offset: 10896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10898 },
            end: { line: 332, column: 42, offset: 10939 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10939 },
            end: { line: 332, column: 48, offset: 10945 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10945 },
            end: { line: 332, column: 65, offset: 10962 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10898 },
        end: { line: 332, column: 65, offset: 10962 }
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
        start: { line: 334, column: 1, offset: 10964 },
        end: { line: 341, column: 4, offset: 11115 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11117 },
            end: { line: 343, column: 42, offset: 11158 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11158 },
            end: { line: 343, column: 51, offset: 11167 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11167 },
            end: { line: 343, column: 68, offset: 11184 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11117 },
        end: { line: 343, column: 68, offset: 11184 }
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
        start: { line: 345, column: 1, offset: 11186 },
        end: { line: 355, column: 4, offset: 11339 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11341 },
            end: { line: 357, column: 49, offset: 11389 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11389 },
            end: { line: 357, column: 59, offset: 11399 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11399 },
            end: { line: 357, column: 65, offset: 11405 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11341 },
        end: { line: 357, column: 65, offset: 11405 }
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
        start: { line: 359, column: 1, offset: 11407 },
        end: { line: 372, column: 4, offset: 11672 }
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
            start: { line: 374, column: 5, offset: 11678 },
            end: { line: 374, column: 53, offset: 11726 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11674 },
        end: { line: 374, column: 53, offset: 11726 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11728 },
            end: { line: 376, column: 323, offset: 12050 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11728 },
        end: { line: 376, column: 323, offset: 12050 }
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
            start: { line: 378, column: 4, offset: 12055 },
            end: { line: 378, column: 23, offset: 12074 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12052 },
        end: { line: 378, column: 23, offset: 12074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12075 },
            end: { line: 379, column: 115, offset: 12189 }
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
                start: { line: 379, column: 116, offset: 12190 },
                end: { line: 379, column: 133, offset: 12207 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12189 },
            end: { line: 379, column: 243, offset: 12317 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12317 },
            end: { line: 379, column: 409, offset: 12483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12483 },
            end: { line: 379, column: 419, offset: 12493 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12493 },
            end: { line: 379, column: 425, offset: 12499 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12075 },
        end: { line: 379, column: 425, offset: 12499 }
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
        start: { line: 381, column: 1, offset: 12501 },
        end: { line: 399, column: 4, offset: 12930 }
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
            start: { line: 401, column: 5, offset: 12936 },
            end: { line: 401, column: 22, offset: 12953 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12932 },
        end: { line: 401, column: 22, offset: 12953 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12954 },
            end: { line: 402, column: 78, offset: 13031 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13031 },
            end: { line: 402, column: 99, offset: 13052 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13052 },
            end: { line: 402, column: 252, offset: 13205 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13205 },
            end: { line: 402, column: 258, offset: 13211 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13211 },
            end: { line: 402, column: 259, offset: 13212 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12954 },
        end: { line: 402, column: 259, offset: 13212 }
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
        start: { line: 404, column: 1, offset: 13214 },
        end: { line: 412, column: 4, offset: 13375 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13377 },
            end: { line: 414, column: 73, offset: 13449 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13377 },
        end: { line: 414, column: 73, offset: 13449 }
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
        start: { line: 416, column: 1, offset: 13451 },
        end: { line: 447, column: 4, offset: 13909 }
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
            start: { line: 449, column: 5, offset: 13915 },
            end: { line: 449, column: 39, offset: 13949 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13911 },
        end: { line: 449, column: 39, offset: 13949 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13950 },
            end: { line: 450, column: 103, offset: 14052 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14052 },
            end: { line: 450, column: 120, offset: 14069 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14069 },
            end: { line: 450, column: 136, offset: 14085 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14085 },
            end: { line: 450, column: 143, offset: 14092 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14092 },
            end: { line: 450, column: 152, offset: 14101 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13950 },
        end: { line: 450, column: 152, offset: 14101 }
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
        start: { line: 452, column: 1, offset: 14103 },
        end: { line: 470, column: 4, offset: 14469 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14471 },
            end: { line: 472, column: 159, offset: 14629 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14629 },
            end: { line: 472, column: 182, offset: 14652 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14652 },
            end: { line: 472, column: 183, offset: 14653 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14471 },
        end: { line: 472, column: 183, offset: 14653 }
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
        start: { line: 474, column: 1, offset: 14655 },
        end: { line: 511, column: 4, offset: 15137 }
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
            start: { line: 513, column: 4, offset: 15142 },
            end: { line: 513, column: 27, offset: 15165 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15139 },
        end: { line: 513, column: 27, offset: 15165 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15166 },
            end: { line: 514, column: 184, offset: 15349 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15166 },
        end: { line: 514, column: 184, offset: 15349 }
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
            start: { line: 516, column: 5, offset: 15355 },
            end: { line: 516, column: 12, offset: 15362 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15351 },
        end: { line: 516, column: 12, offset: 15362 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15364 },
            end: { line: 518, column: 143, offset: 15506 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15506 },
            end: { line: 518, column: 150, offset: 15513 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15513 },
            end: { line: 518, column: 157, offset: 15520 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15520 },
            end: { line: 518, column: 165, offset: 15528 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15528 },
            end: { line: 518, column: 173, offset: 15536 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15364 },
        end: { line: 518, column: 173, offset: 15536 }
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
        start: { line: 520, column: 1, offset: 15538 },
        end: { line: 528, column: 4, offset: 15836 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15838 },
            end: { line: 530, column: 15, offset: 15852 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15852 },
            end: { line: 530, column: 22, offset: 15859 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15859 },
            end: { line: 530, column: 166, offset: 16003 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 16003 },
            end: { line: 530, column: 173, offset: 16010 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 16010 },
            end: { line: 530, column: 222, offset: 16059 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15838 },
        end: { line: 530, column: 222, offset: 16059 }
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
        start: { line: 532, column: 1, offset: 16061 },
        end: { line: 544, column: 4, offset: 16366 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16368 },
            end: { line: 546, column: 15, offset: 16382 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16382 },
            end: { line: 546, column: 23, offset: 16390 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16390 },
            end: { line: 546, column: 74, offset: 16441 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16368 },
        end: { line: 546, column: 74, offset: 16441 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16443 },
        end: { line: 552, column: 4, offset: 16528 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16530 },
            end: { line: 554, column: 38, offset: 16567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16567 },
            end: { line: 554, column: 47, offset: 16576 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16576 },
            end: { line: 554, column: 60, offset: 16589 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16530 },
        end: { line: 554, column: 60, offset: 16589 }
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
        start: { line: 556, column: 1, offset: 16591 },
        end: { line: 576, column: 4, offset: 17008 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 17010 },
            end: { line: 578, column: 22, offset: 17031 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17031 },
            end: { line: 578, column: 32, offset: 17041 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17041 },
            end: { line: 578, column: 37, offset: 17046 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17046 },
            end: { line: 578, column: 46, offset: 17055 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17055 },
            end: { line: 578, column: 62, offset: 17071 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17071 },
            end: { line: 578, column: 71, offset: 17080 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17080 },
            end: { line: 578, column: 98, offset: 17107 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 17010 },
        end: { line: 578, column: 98, offset: 17107 }
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
        start: { line: 580, column: 1, offset: 17109 },
        end: { line: 586, column: 4, offset: 17352 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17354 },
            end: { line: 588, column: 112, offset: 17465 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17354 },
        end: { line: 588, column: 112, offset: 17465 }
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
        start: { line: 590, column: 1, offset: 17467 },
        end: { line: 602, column: 4, offset: 17804 }
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
            start: { line: 604, column: 5, offset: 17810 },
            end: { line: 604, column: 16, offset: 17821 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17806 },
        end: { line: 604, column: 16, offset: 17821 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17823 },
            end: { line: 606, column: 5, offset: 17827 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17827 },
            end: { line: 606, column: 21, offset: 17843 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17843 },
            end: { line: 606, column: 52, offset: 17874 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17874 },
            end: { line: 606, column: 59, offset: 17881 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17881 },
            end: { line: 606, column: 145, offset: 17967 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17967 },
            end: { line: 606, column: 152, offset: 17974 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17974 },
            end: { line: 606, column: 169, offset: 17991 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17991 },
            end: { line: 606, column: 185, offset: 18007 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 18007 },
            end: { line: 606, column: 246, offset: 18068 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17823 },
        end: { line: 606, column: 246, offset: 18068 }
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
        start: { line: 608, column: 1, offset: 18070 },
        end: { line: 627, column: 4, offset: 18609 }
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
            start: { line: 629, column: 4, offset: 18614 },
            end: { line: 629, column: 36, offset: 18646 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18611 },
        end: { line: 629, column: 36, offset: 18646 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18647 },
            end: { line: 630, column: 143, offset: 18789 }
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
                start: { line: 630, column: 144, offset: 18790 },
                end: { line: 630, column: 167, offset: 18813 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18789 },
            end: { line: 630, column: 303, offset: 18949 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18949 },
            end: { line: 630, column: 367, offset: 19013 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19013 },
            end: { line: 630, column: 384, offset: 19030 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19030 },
            end: { line: 630, column: 424, offset: 19070 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19070 },
            end: { line: 630, column: 440, offset: 19086 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19086 },
            end: { line: 630, column: 446, offset: 19092 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18647 },
        end: { line: 630, column: 446, offset: 19092 }
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
            start: { line: 632, column: 5, offset: 19098 },
            end: { line: 632, column: 28, offset: 19121 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19094 },
        end: { line: 632, column: 28, offset: 19121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19122 },
            end: { line: 633, column: 84, offset: 19205 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19205 },
            end: { line: 633, column: 110, offset: 19231 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19231 },
            end: { line: 633, column: 276, offset: 19397 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19397 },
            end: { line: 633, column: 282, offset: 19403 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19403 },
            end: { line: 633, column: 283, offset: 19404 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19122 },
        end: { line: 633, column: 283, offset: 19404 }
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
        start: { line: 635, column: 1, offset: 19406 },
        end: { line: 643, column: 4, offset: 19594 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19596 },
            end: { line: 645, column: 79, offset: 19674 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19596 },
        end: { line: 645, column: 79, offset: 19674 }
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
        start: { line: 647, column: 1, offset: 19676 },
        end: { line: 678, column: 4, offset: 20171 }
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
            start: { line: 680, column: 5, offset: 20177 },
            end: { line: 680, column: 51, offset: 20223 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20173 },
        end: { line: 680, column: 51, offset: 20223 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20224 },
            end: { line: 681, column: 35, offset: 20258 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20258 },
            end: { line: 681, column: 58, offset: 20281 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20281 },
            end: { line: 681, column: 70, offset: 20293 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20293 },
            end: { line: 681, column: 77, offset: 20300 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20300 },
            end: { line: 681, column: 122, offset: 20345 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20345 },
            end: { line: 681, column: 138, offset: 20361 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20361 },
            end: { line: 681, column: 146, offset: 20369 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20224 },
        end: { line: 681, column: 146, offset: 20369 }
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
        start: { line: 683, column: 1, offset: 20371 },
        end: { line: 701, column: 4, offset: 20818 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20820 },
            end: { line: 703, column: 184, offset: 21003 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 21003 },
            end: { line: 703, column: 218, offset: 21037 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21037 },
            end: { line: 703, column: 219, offset: 21038 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20820 },
        end: { line: 703, column: 219, offset: 21038 }
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
        start: { line: 705, column: 1, offset: 21040 },
        end: { line: 741, column: 4, offset: 21567 }
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
            start: { line: 743, column: 4, offset: 21572 },
            end: { line: 743, column: 24, offset: 21592 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21569 },
        end: { line: 743, column: 24, offset: 21592 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21593 },
            end: { line: 744, column: 253, offset: 21845 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21593 },
        end: { line: 744, column: 253, offset: 21845 }
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
            start: { line: 746, column: 5, offset: 21851 },
            end: { line: 746, column: 12, offset: 21858 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21847 },
        end: { line: 746, column: 12, offset: 21858 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21860 },
            end: { line: 748, column: 64, offset: 21923 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21923 },
            end: { line: 748, column: 70, offset: 21929 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21929 },
            end: { line: 748, column: 103, offset: 21962 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21962 },
            end: { line: 748, column: 109, offset: 21968 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21968 },
            end: { line: 748, column: 143, offset: 22002 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21860 },
        end: { line: 748, column: 143, offset: 22002 }
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
                    start: { line: 750, column: 5, offset: 22008 },
                    end: { line: 750, column: 50, offset: 22053 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22053 },
                    end: { line: 750, column: 58, offset: 22061 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22061 },
                    end: { line: 750, column: 119, offset: 22122 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 22008 },
                end: { line: 750, column: 119, offset: 22122 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 22005 },
            end: { line: 750, column: 119, offset: 22122 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 22005 },
        end: { line: 750, column: 119, offset: 22122 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22124 },
        end: { line: 757, column: 4, offset: 22201 }
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
        start: { line: 759, column: 1, offset: 22203 },
        end: { line: 766, column: 4, offset: 22347 }
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
                    start: { line: 768, column: 5, offset: 22353 },
                    end: { line: 768, column: 63, offset: 22411 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22411 },
                    end: { line: 768, column: 69, offset: 22417 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22417 },
                    end: { line: 768, column: 126, offset: 22474 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22474 },
                    end: { line: 768, column: 132, offset: 22480 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22480 },
                    end: { line: 768, column: 143, offset: 22491 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22353 },
                end: { line: 768, column: 143, offset: 22491 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22350 },
            end: { line: 768, column: 143, offset: 22491 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22350 },
        end: { line: 768, column: 143, offset: 22491 }
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
        start: { line: 770, column: 1, offset: 22493 },
        end: { line: 775, column: 4, offset: 22589 }
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
        start: { line: 777, column: 1, offset: 22591 },
        end: { line: 785, column: 4, offset: 22772 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22774 },
            end: { line: 787, column: 65, offset: 22838 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22774 },
        end: { line: 787, column: 65, offset: 22838 }
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
                    start: { line: 788, column: 4, offset: 22842 },
                    end: { line: 788, column: 11, offset: 22849 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22842 },
                end: { line: 788, column: 11, offset: 22849 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22840 },
            end: { line: 788, column: 11, offset: 22849 }
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
                    start: { line: 789, column: 4, offset: 22853 },
                    end: { line: 789, column: 9, offset: 22858 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22853 },
                end: { line: 789, column: 9, offset: 22858 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22851 },
            end: { line: 789, column: 9, offset: 22858 }
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
                    start: { line: 790, column: 4, offset: 22862 },
                    end: { line: 790, column: 9, offset: 22867 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22862 },
                end: { line: 790, column: 9, offset: 22867 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22860 },
            end: { line: 790, column: 9, offset: 22867 }
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
                    start: { line: 791, column: 4, offset: 22871 },
                    end: { line: 791, column: 15, offset: 22882 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22871 },
                end: { line: 791, column: 15, offset: 22882 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22869 },
            end: { line: 791, column: 15, offset: 22882 }
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
                    start: { line: 792, column: 4, offset: 22886 },
                    end: { line: 792, column: 21, offset: 22903 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22886 },
                end: { line: 792, column: 21, offset: 22903 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22884 },
            end: { line: 792, column: 21, offset: 22903 }
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
                    start: { line: 793, column: 4, offset: 22907 },
                    end: { line: 793, column: 12, offset: 22915 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22907 },
                end: { line: 793, column: 12, offset: 22915 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22905 },
            end: { line: 793, column: 12, offset: 22915 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22840 },
        end: { line: 793, column: 12, offset: 22915 }
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
            start: { line: 795, column: 5, offset: 22921 },
            end: { line: 795, column: 15, offset: 22931 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22917 },
        end: { line: 795, column: 15, offset: 22931 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22933 },
            end: { line: 797, column: 67, offset: 22999 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22999 },
            end: { line: 797, column: 76, offset: 23008 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 23008 },
            end: { line: 797, column: 109, offset: 23041 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23041 },
            end: { line: 797, column: 118, offset: 23050 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23050 },
            end: { line: 797, column: 154, offset: 23086 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22933 },
        end: { line: 797, column: 154, offset: 23086 }
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
                    start: { line: 799, column: 5, offset: 23092 },
                    end: { line: 799, column: 97, offset: 23184 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23184 },
                    end: { line: 799, column: 106, offset: 23193 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23193 },
                    end: { line: 799, column: 209, offset: 23296 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23296 },
                    end: { line: 799, column: 218, offset: 23305 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23305 },
                    end: { line: 799, column: 219, offset: 23306 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23092 },
                end: { line: 799, column: 219, offset: 23306 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23089 },
            end: { line: 799, column: 219, offset: 23306 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23089 },
        end: { line: 799, column: 219, offset: 23306 }
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
        start: { line: 801, column: 1, offset: 23308 },
        end: { line: 806, column: 4, offset: 23423 }
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
        start: { line: 808, column: 1, offset: 23425 },
        end: { line: 816, column: 4, offset: 23624 }
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
                    start: { line: 818, column: 5, offset: 23630 },
                    end: { line: 818, column: 121, offset: 23746 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23630 },
                end: { line: 818, column: 121, offset: 23746 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23627 },
            end: { line: 818, column: 121, offset: 23746 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23627 },
        end: { line: 818, column: 121, offset: 23746 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23748 },
        end: { line: 825, column: 4, offset: 23836 }
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
        start: { line: 827, column: 1, offset: 23838 },
        end: { line: 832, column: 4, offset: 23962 }
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
                    start: { line: 834, column: 5, offset: 23968 },
                    end: { line: 834, column: 159, offset: 24122 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23968 },
                end: { line: 834, column: 159, offset: 24122 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23965 },
            end: { line: 834, column: 159, offset: 24122 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23965 },
        end: { line: 834, column: 159, offset: 24122 }
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
        start: { line: 836, column: 1, offset: 24124 },
        end: { line: 841, column: 4, offset: 24235 }
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
        start: { line: 843, column: 1, offset: 24237 },
        end: { line: 849, column: 4, offset: 24418 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24420 },
            end: { line: 851, column: 68, offset: 24487 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24420 },
        end: { line: 851, column: 68, offset: 24487 }
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
                    start: { line: 852, column: 4, offset: 24491 },
                    end: { line: 852, column: 11, offset: 24498 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24491 },
                end: { line: 852, column: 11, offset: 24498 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24489 },
            end: { line: 852, column: 11, offset: 24498 }
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
                    start: { line: 853, column: 4, offset: 24502 },
                    end: { line: 853, column: 9, offset: 24507 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24502 },
                end: { line: 853, column: 9, offset: 24507 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24500 },
            end: { line: 853, column: 9, offset: 24507 }
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
                    start: { line: 854, column: 4, offset: 24511 },
                    end: { line: 854, column: 9, offset: 24516 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24511 },
                end: { line: 854, column: 9, offset: 24516 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24509 },
            end: { line: 854, column: 9, offset: 24516 }
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
                    start: { line: 855, column: 4, offset: 24520 },
                    end: { line: 855, column: 15, offset: 24531 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24520 },
                end: { line: 855, column: 15, offset: 24531 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24518 },
            end: { line: 855, column: 15, offset: 24531 }
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
                    start: { line: 856, column: 4, offset: 24535 },
                    end: { line: 856, column: 21, offset: 24552 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24535 },
                end: { line: 856, column: 21, offset: 24552 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24533 },
            end: { line: 856, column: 21, offset: 24552 }
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
                    start: { line: 857, column: 4, offset: 24556 },
                    end: { line: 857, column: 12, offset: 24564 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24556 },
                end: { line: 857, column: 12, offset: 24564 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24554 },
            end: { line: 857, column: 12, offset: 24564 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24489 },
        end: { line: 857, column: 12, offset: 24564 }
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
            start: { line: 859, column: 5, offset: 24570 },
            end: { line: 859, column: 13, offset: 24578 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24566 },
        end: { line: 859, column: 13, offset: 24578 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24580 },
            end: { line: 861, column: 65, offset: 24644 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24644 },
            end: { line: 861, column: 74, offset: 24653 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24653 },
            end: { line: 861, column: 107, offset: 24686 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24686 },
            end: { line: 861, column: 116, offset: 24695 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24695 },
            end: { line: 861, column: 151, offset: 24730 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24580 },
        end: { line: 861, column: 152, offset: 24731 }
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
                    start: { line: 863, column: 5, offset: 24737 },
                    end: { line: 863, column: 86, offset: 24818 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24818 },
                    end: { line: 863, column: 95, offset: 24827 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24827 },
                    end: { line: 863, column: 253, offset: 24985 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24737 },
                end: { line: 863, column: 253, offset: 24985 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24734 },
            end: { line: 863, column: 253, offset: 24985 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24734 },
        end: { line: 863, column: 253, offset: 24985 }
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
        start: { line: 865, column: 1, offset: 24987 },
        end: { line: 872, column: 4, offset: 25157 }
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
        start: { line: 874, column: 1, offset: 25159 },
        end: { line: 884, column: 4, offset: 25393 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25395 },
            end: { line: 886, column: 66, offset: 25460 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25395 },
        end: { line: 886, column: 66, offset: 25460 }
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
                    start: { line: 887, column: 4, offset: 25464 },
                    end: { line: 887, column: 11, offset: 25471 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25464 },
                end: { line: 887, column: 11, offset: 25471 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25462 },
            end: { line: 887, column: 11, offset: 25471 }
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
                    start: { line: 888, column: 4, offset: 25475 },
                    end: { line: 888, column: 9, offset: 25480 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25475 },
                end: { line: 888, column: 9, offset: 25480 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25473 },
            end: { line: 888, column: 9, offset: 25480 }
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
                    start: { line: 889, column: 4, offset: 25484 },
                    end: { line: 889, column: 9, offset: 25489 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25484 },
                end: { line: 889, column: 9, offset: 25489 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25482 },
            end: { line: 889, column: 9, offset: 25489 }
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
                    start: { line: 890, column: 4, offset: 25493 },
                    end: { line: 890, column: 15, offset: 25504 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25493 },
                end: { line: 890, column: 15, offset: 25504 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25491 },
            end: { line: 890, column: 15, offset: 25504 }
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
                    start: { line: 891, column: 4, offset: 25508 },
                    end: { line: 891, column: 21, offset: 25525 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25508 },
                end: { line: 891, column: 21, offset: 25525 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25506 },
            end: { line: 891, column: 21, offset: 25525 }
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
                    start: { line: 892, column: 4, offset: 25529 },
                    end: { line: 892, column: 12, offset: 25537 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25529 },
                end: { line: 892, column: 12, offset: 25537 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25527 },
            end: { line: 892, column: 12, offset: 25537 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25462 },
        end: { line: 892, column: 12, offset: 25537 }
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
            start: { line: 894, column: 5, offset: 25543 },
            end: { line: 894, column: 14, offset: 25552 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25539 },
        end: { line: 894, column: 14, offset: 25552 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25554 },
            end: { line: 896, column: 66, offset: 25619 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25619 },
            end: { line: 896, column: 75, offset: 25628 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25628 },
            end: { line: 896, column: 108, offset: 25661 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25661 },
            end: { line: 896, column: 117, offset: 25670 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25670 },
            end: { line: 896, column: 152, offset: 25705 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25554 },
        end: { line: 896, column: 152, offset: 25705 }
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
                    start: { line: 898, column: 5, offset: 25711 },
                    end: { line: 898, column: 123, offset: 25829 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25711 },
                end: { line: 898, column: 123, offset: 25829 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25708 },
            end: { line: 898, column: 123, offset: 25829 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25708 },
        end: { line: 898, column: 123, offset: 25829 }
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
        start: { line: 900, column: 1, offset: 25831 },
        end: { line: 905, column: 4, offset: 25944 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25946 },
        end: { line: 910, column: 4, offset: 26056 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26058 },
            end: { line: 912, column: 67, offset: 26124 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26058 },
        end: { line: 912, column: 67, offset: 26124 }
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
                    start: { line: 913, column: 4, offset: 26128 },
                    end: { line: 913, column: 11, offset: 26135 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26128 },
                end: { line: 913, column: 11, offset: 26135 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26126 },
            end: { line: 913, column: 11, offset: 26135 }
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
                    start: { line: 914, column: 4, offset: 26139 },
                    end: { line: 914, column: 12, offset: 26147 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26139 },
                end: { line: 914, column: 12, offset: 26147 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26137 },
            end: { line: 914, column: 12, offset: 26147 }
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
                    start: { line: 915, column: 4, offset: 26151 },
                    end: { line: 915, column: 9, offset: 26156 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26151 },
                end: { line: 915, column: 9, offset: 26156 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26149 },
            end: { line: 915, column: 9, offset: 26156 }
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
                    start: { line: 916, column: 4, offset: 26160 },
                    end: { line: 916, column: 12, offset: 26168 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26160 },
                end: { line: 916, column: 12, offset: 26168 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26158 },
            end: { line: 916, column: 12, offset: 26168 }
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
                    start: { line: 917, column: 4, offset: 26172 },
                    end: { line: 917, column: 12, offset: 26180 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26172 },
                end: { line: 917, column: 12, offset: 26180 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26170 },
            end: { line: 917, column: 12, offset: 26180 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26126 },
        end: { line: 917, column: 12, offset: 26180 }
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
            start: { line: 919, column: 5, offset: 26186 },
            end: { line: 919, column: 10, offset: 26191 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26182 },
        end: { line: 919, column: 10, offset: 26191 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26193 },
            end: { line: 921, column: 62, offset: 26254 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26254 },
            end: { line: 921, column: 72, offset: 26264 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26264 },
            end: { line: 921, column: 76, offset: 26268 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26268 },
            end: { line: 921, column: 84, offset: 26276 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26276 },
            end: { line: 921, column: 118, offset: 26310 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26310 },
            end: { line: 921, column: 128, offset: 26320 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26320 },
            end: { line: 921, column: 132, offset: 26324 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26324 },
            end: { line: 921, column: 140, offset: 26332 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26332 },
            end: { line: 921, column: 172, offset: 26364 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26193 },
        end: { line: 921, column: 172, offset: 26364 }
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
                    start: { line: 923, column: 5, offset: 26370 },
                    end: { line: 923, column: 77, offset: 26442 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26442 },
                    end: { line: 923, column: 87, offset: 26452 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26452 },
                    end: { line: 923, column: 91, offset: 26456 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26456 },
                    end: { line: 923, column: 99, offset: 26464 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 923, column: 99, offset: 26464 },
                    end: { line: 923, column: 177, offset: 26542 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26370 },
                end: { line: 923, column: 177, offset: 26542 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26367 },
            end: { line: 923, column: 177, offset: 26542 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26367 },
        end: { line: 923, column: 177, offset: 26542 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26544 },
        end: { line: 930, column: 4, offset: 26617 }
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
        start: { line: 932, column: 1, offset: 26619 },
        end: { line: 940, column: 4, offset: 26781 }
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
                    start: { line: 942, column: 5, offset: 26787 },
                    end: { line: 942, column: 119, offset: 26901 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26787 },
                end: { line: 942, column: 119, offset: 26901 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26784 },
            end: { line: 942, column: 119, offset: 26901 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26784 },
        end: { line: 942, column: 119, offset: 26901 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26903 },
        end: { line: 949, column: 4, offset: 26982 }
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
        start: { line: 951, column: 1, offset: 26984 },
        end: { line: 958, column: 4, offset: 27148 }
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
                    start: { line: 960, column: 5, offset: 27154 },
                    end: { line: 960, column: 118, offset: 27267 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27154 },
                end: { line: 960, column: 118, offset: 27267 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27151 },
            end: { line: 960, column: 118, offset: 27267 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27151 },
        end: { line: 960, column: 118, offset: 27267 }
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
        start: { line: 962, column: 1, offset: 27269 },
        end: { line: 968, column: 4, offset: 27425 }
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
        start: { line: 970, column: 1, offset: 27427 },
        end: { line: 978, column: 4, offset: 27651 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27653 },
            end: { line: 980, column: 63, offset: 27715 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27653 },
        end: { line: 980, column: 63, offset: 27715 }
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
                    start: { line: 981, column: 4, offset: 27719 },
                    end: { line: 981, column: 11, offset: 27726 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27719 },
                end: { line: 981, column: 11, offset: 27726 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27717 },
            end: { line: 981, column: 11, offset: 27726 }
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
                    start: { line: 982, column: 4, offset: 27730 },
                    end: { line: 982, column: 12, offset: 27738 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27730 },
                end: { line: 982, column: 12, offset: 27738 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27728 },
            end: { line: 982, column: 12, offset: 27738 }
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
                    start: { line: 983, column: 4, offset: 27742 },
                    end: { line: 983, column: 9, offset: 27747 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27742 },
                end: { line: 983, column: 9, offset: 27747 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27740 },
            end: { line: 983, column: 9, offset: 27747 }
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
                    start: { line: 984, column: 4, offset: 27751 },
                    end: { line: 984, column: 15, offset: 27762 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27751 },
                end: { line: 984, column: 15, offset: 27762 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27749 },
            end: { line: 984, column: 15, offset: 27762 }
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
                    start: { line: 985, column: 4, offset: 27766 },
                    end: { line: 985, column: 21, offset: 27783 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27766 },
                end: { line: 985, column: 21, offset: 27783 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27764 },
            end: { line: 985, column: 21, offset: 27783 }
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
                    start: { line: 986, column: 4, offset: 27787 },
                    end: { line: 986, column: 12, offset: 27795 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27787 },
                end: { line: 986, column: 12, offset: 27795 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27785 },
            end: { line: 986, column: 12, offset: 27795 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27717 },
        end: { line: 986, column: 12, offset: 27795 }
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
            start: { line: 988, column: 4, offset: 27800 },
            end: { line: 988, column: 14, offset: 27810 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27797 },
        end: { line: 988, column: 14, offset: 27810 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 990, column: 1, offset: 27812 },
            end: { line: 990, column: 85, offset: 27896 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27812 },
        end: { line: 990, column: 85, offset: 27896 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 992, column: 1, offset: 27898 },
            end: { line: 992, column: 141, offset: 28038 }
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
                start: { line: 992, column: 142, offset: 28039 },
                end: { line: 992, column: 153, offset: 28050 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 141, offset: 28038 },
            end: { line: 992, column: 176, offset: 28073 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 176, offset: 28073 },
            end: { line: 992, column: 177, offset: 28074 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27898 },
        end: { line: 992, column: 177, offset: 28074 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28075 }
  }
}