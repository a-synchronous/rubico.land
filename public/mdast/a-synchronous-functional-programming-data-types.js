export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2025-06-13\n' +
        'updated: 2026-10-09\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming.\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 303 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 305 },
            end: { line: 11, column: 186, offset: 490 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 305 },
        end: { line: 11, column: 186, offset: 490 }
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
            start: { line: 13, column: 4, offset: 495 },
            end: { line: 13, column: 24, offset: 515 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 492 },
        end: { line: 13, column: 24, offset: 515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 516 },
            end: { line: 14, column: 250, offset: 765 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 516 },
        end: { line: 14, column: 250, offset: 765 }
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
            start: { line: 16, column: 5, offset: 771 },
            end: { line: 16, column: 11, offset: 777 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 767 },
        end: { line: 16, column: 11, offset: 777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 779 },
            end: { line: 18, column: 64, offset: 842 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 842 },
            end: { line: 18, column: 67, offset: 845 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 845 },
            end: { line: 18, column: 105, offset: 883 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 883 },
            end: { line: 18, column: 110, offset: 888 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 888 },
            end: { line: 18, column: 185, offset: 963 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 779 },
        end: { line: 18, column: 185, offset: 963 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 965 },
        end: { line: 22, column: 4, offset: 984 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 986 },
            end: { line: 24, column: 22, offset: 1007 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1007 },
            end: { line: 24, column: 30, offset: 1015 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1015 },
            end: { line: 24, column: 79, offset: 1064 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1064 },
            end: { line: 24, column: 87, offset: 1072 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1072 },
            end: { line: 24, column: 147, offset: 1132 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 986 },
        end: { line: 24, column: 147, offset: 1132 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1134 },
        end: { line: 28, column: 4, offset: 1168 }
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
            start: { line: 30, column: 5, offset: 1174 },
            end: { line: 30, column: 11, offset: 1180 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1170 },
        end: { line: 30, column: 11, offset: 1180 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1182 },
            end: { line: 32, column: 56, offset: 1237 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1237 },
            end: { line: 32, column: 63, offset: 1244 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1244 },
            end: { line: 32, column: 67, offset: 1248 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1248 },
            end: { line: 32, column: 83, offset: 1264 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1264 },
            end: { line: 32, column: 255, offset: 1436 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1182 },
        end: { line: 32, column: 255, offset: 1436 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1438 },
        end: { line: 36, column: 4, offset: 1470 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1472 },
            end: { line: 38, column: 22, offset: 1493 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1493 },
            end: { line: 38, column: 30, offset: 1501 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1501 },
            end: { line: 38, column: 79, offset: 1550 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1550 },
            end: { line: 38, column: 87, offset: 1558 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1558 },
            end: { line: 38, column: 147, offset: 1618 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1472 },
        end: { line: 38, column: 147, offset: 1618 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1620 },
        end: { line: 42, column: 4, offset: 1654 }
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
            start: { line: 44, column: 5, offset: 1660 },
            end: { line: 44, column: 12, offset: 1667 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1656 },
        end: { line: 44, column: 12, offset: 1667 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1669 },
            end: { line: 46, column: 63, offset: 1731 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1731 },
            end: { line: 46, column: 69, offset: 1737 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1737 },
            end: { line: 46, column: 73, offset: 1741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1741 },
            end: { line: 46, column: 80, offset: 1748 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1748 },
            end: { line: 46, column: 135, offset: 1803 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1669 },
        end: { line: 46, column: 135, offset: 1803 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1805 },
        end: { line: 50, column: 4, offset: 1827 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1829 },
            end: { line: 52, column: 130, offset: 1958 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1958 },
            end: { line: 52, column: 134, offset: 1962 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1962 },
            end: { line: 52, column: 136, offset: 1964 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1964 },
            end: { line: 52, column: 139, offset: 1967 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1967 },
            end: { line: 52, column: 141, offset: 1969 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1969 },
            end: { line: 52, column: 144, offset: 1972 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1972 },
            end: { line: 52, column: 146, offset: 1974 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1974 },
            end: { line: 52, column: 150, offset: 1978 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1978 },
            end: { line: 52, column: 152, offset: 1980 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1980 },
            end: { line: 52, column: 156, offset: 1984 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1984 },
            end: { line: 52, column: 158, offset: 1986 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1986 },
            end: { line: 52, column: 162, offset: 1990 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 1990 },
            end: { line: 52, column: 167, offset: 1995 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 1995 },
            end: { line: 52, column: 171, offset: 1999 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 1999 },
            end: { line: 52, column: 213, offset: 2041 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2041 },
            end: { line: 52, column: 217, offset: 2045 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2045 },
            end: { line: 52, column: 255, offset: 2083 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1829 },
        end: { line: 52, column: 255, offset: 2083 }
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
        start: { line: 54, column: 1, offset: 2085 },
        end: { line: 61, column: 4, offset: 2222 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2224 },
            end: { line: 63, column: 22, offset: 2245 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2245 },
            end: { line: 63, column: 31, offset: 2254 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2254 },
            end: { line: 63, column: 64, offset: 2287 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2224 },
        end: { line: 63, column: 64, offset: 2287 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2289 },
        end: { line: 67, column: 4, offset: 2326 }
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
            start: { line: 69, column: 5, offset: 2332 },
            end: { line: 69, column: 11, offset: 2338 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2328 },
        end: { line: 69, column: 11, offset: 2338 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2340 },
            end: { line: 71, column: 154, offset: 2493 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2493 },
            end: { line: 71, column: 166, offset: 2505 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2505 },
            end: { line: 71, column: 208, offset: 2547 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2340 },
        end: { line: 71, column: 208, offset: 2547 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2549 },
        end: { line: 76, column: 4, offset: 2634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2636 },
            end: { line: 78, column: 137, offset: 2772 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2636 },
        end: { line: 78, column: 137, offset: 2772 }
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
        start: { line: 80, column: 1, offset: 2774 },
        end: { line: 86, column: 4, offset: 2945 }
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
            start: { line: 88, column: 5, offset: 2951 },
            end: { line: 88, column: 11, offset: 2957 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2947 },
        end: { line: 88, column: 11, offset: 2957 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2959 },
            end: { line: 90, column: 54, offset: 3012 }
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
                start: { line: 90, column: 55, offset: 3013 },
                end: { line: 90, column: 64, offset: 3022 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3012 },
            end: { line: 90, column: 126, offset: 3084 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3084 },
            end: { line: 90, column: 194, offset: 3152 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2959 },
        end: { line: 90, column: 194, offset: 3152 }
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
        start: { line: 92, column: 1, offset: 3154 },
        end: { line: 97, column: 4, offset: 3321 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3323 },
            end: { line: 99, column: 130, offset: 3452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3452 },
            end: { line: 99, column: 140, offset: 3462 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3462 },
            end: { line: 99, column: 150, offset: 3472 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3472 },
            end: { line: 99, column: 163, offset: 3485 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3485 },
            end: { line: 99, column: 164, offset: 3486 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3323 },
        end: { line: 99, column: 164, offset: 3486 }
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
        start: { line: 101, column: 1, offset: 3488 },
        end: { line: 114, column: 4, offset: 3702 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3704 },
            end: { line: 116, column: 34, offset: 3737 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3737 },
            end: { line: 116, column: 51, offset: 3754 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3754 },
            end: { line: 116, column: 56, offset: 3759 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3759 },
            end: { line: 116, column: 78, offset: 3781 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3781 },
            end: { line: 116, column: 185, offset: 3888 }
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
                start: { line: 116, column: 186, offset: 3889 },
                end: { line: 116, column: 203, offset: 3906 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3888 },
            end: { line: 116, column: 313, offset: 4016 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4016 },
            end: { line: 116, column: 318, offset: 4021 }
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
                start: { line: 116, column: 319, offset: 4022 },
                end: { line: 116, column: 342, offset: 4045 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4021 },
            end: { line: 116, column: 478, offset: 4181 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3704 },
        end: { line: 116, column: 478, offset: 4181 }
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
            start: { line: 118, column: 5, offset: 4187 },
            end: { line: 118, column: 12, offset: 4194 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4183 },
        end: { line: 118, column: 12, offset: 4194 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4196 },
            end: { line: 120, column: 95, offset: 4290 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4290 },
            end: { line: 120, column: 101, offset: 4296 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4296 },
            end: { line: 120, column: 106, offset: 4301 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4301 },
            end: { line: 120, column: 117, offset: 4312 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4312 },
            end: { line: 120, column: 286, offset: 4481 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4481 },
            end: { line: 120, column: 292, offset: 4487 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4487 },
            end: { line: 120, column: 388, offset: 4583 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4583 },
            end: { line: 120, column: 399, offset: 4594 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4594 },
            end: { line: 120, column: 441, offset: 4636 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4636 },
            end: { line: 120, column: 452, offset: 4647 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4647 },
            end: { line: 120, column: 469, offset: 4664 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4196 },
        end: { line: 120, column: 469, offset: 4664 }
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
        start: { line: 122, column: 1, offset: 4666 },
        end: { line: 135, column: 4, offset: 4944 }
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
            start: { line: 137, column: 5, offset: 4950 },
            end: { line: 137, column: 42, offset: 4987 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4946 },
        end: { line: 137, column: 42, offset: 4987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4988 },
            end: { line: 138, column: 329, offset: 5316 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4988 },
        end: { line: 138, column: 329, offset: 5316 }
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
            start: { line: 140, column: 4, offset: 5321 },
            end: { line: 140, column: 25, offset: 5342 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5318 },
        end: { line: 140, column: 25, offset: 5342 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5343 },
            end: { line: 141, column: 429, offset: 5771 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5343 },
        end: { line: 141, column: 429, offset: 5771 }
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
            start: { line: 143, column: 5, offset: 5777 },
            end: { line: 143, column: 10, offset: 5782 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5773 },
        end: { line: 143, column: 10, offset: 5782 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5784 },
            end: { line: 145, column: 175, offset: 5958 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5958 },
            end: { line: 145, column: 182, offset: 5965 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5965 },
            end: { line: 145, column: 195, offset: 5978 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5784 },
        end: { line: 145, column: 195, offset: 5978 }
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
        start: { line: 147, column: 1, offset: 5980 },
        end: { line: 155, column: 4, offset: 6247 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6249 },
            end: { line: 157, column: 56, offset: 6304 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6304 },
            end: { line: 157, column: 63, offset: 6311 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6311 },
            end: { line: 157, column: 76, offset: 6324 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6249 },
        end: { line: 157, column: 76, offset: 6324 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6326 },
        end: { line: 162, column: 4, offset: 6439 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6441 },
            end: { line: 164, column: 40, offset: 6480 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6480 },
            end: { line: 164, column: 48, offset: 6488 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6488 },
            end: { line: 164, column: 53, offset: 6493 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6493 },
            end: { line: 164, column: 59, offset: 6499 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6499 },
            end: { line: 164, column: 83, offset: 6523 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6441 },
        end: { line: 164, column: 83, offset: 6523 }
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
        start: { line: 166, column: 1, offset: 6525 },
        end: { line: 171, column: 4, offset: 6652 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6654 },
            end: { line: 173, column: 42, offset: 6695 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6695 },
            end: { line: 173, column: 49, offset: 6702 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6702 },
            end: { line: 173, column: 66, offset: 6719 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6654 },
        end: { line: 173, column: 66, offset: 6719 }
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
        start: { line: 175, column: 1, offset: 6721 },
        end: { line: 181, column: 4, offset: 6826 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6828 },
            end: { line: 183, column: 42, offset: 6869 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6869 },
            end: { line: 183, column: 51, offset: 6878 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6878 },
            end: { line: 183, column: 68, offset: 6895 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6828 },
        end: { line: 183, column: 68, offset: 6895 }
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
        start: { line: 185, column: 1, offset: 6897 },
        end: { line: 191, column: 4, offset: 7048 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7050 },
            end: { line: 193, column: 52, offset: 7101 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7101 },
            end: { line: 193, column: 62, offset: 7111 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7111 },
            end: { line: 193, column: 68, offset: 7117 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7050 },
        end: { line: 193, column: 68, offset: 7117 }
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
        start: { line: 195, column: 1, offset: 7119 },
        end: { line: 206, column: 4, offset: 7263 }
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
            start: { line: 208, column: 5, offset: 7269 },
            end: { line: 208, column: 11, offset: 7275 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7265 },
        end: { line: 208, column: 11, offset: 7275 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7277 },
            end: { line: 210, column: 199, offset: 7475 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7277 },
        end: { line: 210, column: 199, offset: 7475 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7477 },
        end: { line: 214, column: 4, offset: 7513 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7515 },
            end: { line: 216, column: 22, offset: 7536 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7536 },
            end: { line: 216, column: 30, offset: 7544 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7544 },
            end: { line: 216, column: 91, offset: 7605 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7515 },
        end: { line: 216, column: 91, offset: 7605 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7607 },
        end: { line: 220, column: 4, offset: 7637 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7639 },
            end: { line: 222, column: 142, offset: 7780 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7639 },
        end: { line: 222, column: 142, offset: 7780 }
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
        start: { line: 224, column: 1, offset: 7782 },
        end: { line: 234, column: 4, offset: 8072 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8074 },
            end: { line: 236, column: 73, offset: 8146 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8146 },
            end: { line: 236, column: 81, offset: 8154 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8154 },
            end: { line: 236, column: 90, offset: 8163 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8074 },
        end: { line: 236, column: 90, offset: 8163 }
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
        start: { line: 238, column: 1, offset: 8165 },
        end: { line: 245, column: 4, offset: 8400 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8402 },
            end: { line: 247, column: 66, offset: 8467 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8467 },
            end: { line: 247, column: 76, offset: 8477 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8477 },
            end: { line: 247, column: 82, offset: 8483 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8402 },
        end: { line: 247, column: 82, offset: 8483 }
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
        start: { line: 249, column: 1, offset: 8485 },
        end: { line: 258, column: 4, offset: 8647 }
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
            start: { line: 260, column: 5, offset: 8653 },
            end: { line: 260, column: 8, offset: 8656 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8649 },
        end: { line: 260, column: 8, offset: 8656 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8658 },
            end: { line: 262, column: 169, offset: 8826 }
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
                start: { line: 262, column: 170, offset: 8827 },
                end: { line: 262, column: 183, offset: 8840 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8826 },
            end: { line: 262, column: 306, offset: 8963 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8963 },
            end: { line: 262, column: 469, offset: 9126 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9126 },
            end: { line: 262, column: 475, offset: 9132 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9132 },
            end: { line: 262, column: 483, offset: 9140 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8658 },
        end: { line: 262, column: 483, offset: 9140 }
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
        start: { line: 264, column: 1, offset: 9142 },
        end: { line: 269, column: 4, offset: 9325 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9327 },
            end: { line: 271, column: 26, offset: 9352 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9352 },
            end: { line: 271, column: 31, offset: 9357 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9357 },
            end: { line: 271, column: 44, offset: 9370 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9327 },
        end: { line: 271, column: 44, offset: 9370 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9372 },
        end: { line: 275, column: 4, offset: 9408 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9410 },
            end: { line: 277, column: 42, offset: 9451 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9451 },
            end: { line: 277, column: 48, offset: 9457 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9457 },
            end: { line: 277, column: 65, offset: 9474 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9410 },
        end: { line: 277, column: 65, offset: 9474 }
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
        start: { line: 279, column: 1, offset: 9476 },
        end: { line: 287, column: 4, offset: 9626 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9628 },
            end: { line: 289, column: 42, offset: 9669 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9669 },
            end: { line: 289, column: 51, offset: 9678 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9678 },
            end: { line: 289, column: 68, offset: 9695 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9628 },
        end: { line: 289, column: 68, offset: 9695 }
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
        start: { line: 291, column: 1, offset: 9697 },
        end: { line: 297, column: 4, offset: 9816 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9818 },
            end: { line: 299, column: 49, offset: 9866 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9866 },
            end: { line: 299, column: 59, offset: 9876 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9876 },
            end: { line: 299, column: 65, offset: 9882 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9818 },
        end: { line: 299, column: 65, offset: 9882 }
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
        start: { line: 301, column: 1, offset: 9884 },
        end: { line: 312, column: 4, offset: 10037 }
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
            start: { line: 314, column: 5, offset: 10043 },
            end: { line: 314, column: 8, offset: 10046 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10039 },
        end: { line: 314, column: 8, offset: 10046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10048 },
            end: { line: 316, column: 203, offset: 10250 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10048 },
        end: { line: 316, column: 203, offset: 10250 }
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
                    start: { line: 317, column: 5, offset: 10255 },
                    end: { line: 317, column: 113, offset: 10363 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10255 },
                end: { line: 317, column: 113, offset: 10363 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10253 },
            end: { line: 317, column: 113, offset: 10363 }
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
                    start: { line: 318, column: 5, offset: 10368 },
                    end: { line: 318, column: 94, offset: 10457 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10457 },
                    end: { line: 318, column: 110, offset: 10473 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10368 },
                end: { line: 318, column: 110, offset: 10473 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10366 },
            end: { line: 318, column: 110, offset: 10473 }
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
                    start: { line: 319, column: 5, offset: 10478 },
                    end: { line: 319, column: 130, offset: 10603 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10478 },
                end: { line: 319, column: 130, offset: 10603 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10476 },
            end: { line: 319, column: 130, offset: 10603 }
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
                    start: { line: 320, column: 5, offset: 10608 },
                    end: { line: 320, column: 28, offset: 10631 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10631 },
                    end: { line: 320, column: 38, offset: 10641 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10641 },
                    end: { line: 320, column: 64, offset: 10667 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10667 },
                    end: { line: 320, column: 74, offset: 10677 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10677 },
                    end: { line: 320, column: 80, offset: 10683 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10608 },
                end: { line: 320, column: 80, offset: 10683 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10606 },
            end: { line: 320, column: 80, offset: 10683 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10253 },
        end: { line: 320, column: 80, offset: 10683 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10685 },
            end: { line: 322, column: 9, offset: 10693 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10693 },
            end: { line: 322, column: 14, offset: 10698 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10698 },
            end: { line: 322, column: 48, offset: 10732 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10732 },
            end: { line: 322, column: 53, offset: 10737 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10737 },
            end: { line: 322, column: 124, offset: 10808 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10685 },
        end: { line: 322, column: 124, offset: 10808 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10810 },
        end: { line: 330, column: 4, offset: 10886 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10888 },
            end: { line: 332, column: 42, offset: 10929 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10929 },
            end: { line: 332, column: 48, offset: 10935 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10935 },
            end: { line: 332, column: 65, offset: 10952 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10888 },
        end: { line: 332, column: 65, offset: 10952 }
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
        start: { line: 334, column: 1, offset: 10954 },
        end: { line: 341, column: 4, offset: 11105 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11107 },
            end: { line: 343, column: 42, offset: 11148 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11148 },
            end: { line: 343, column: 51, offset: 11157 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11157 },
            end: { line: 343, column: 68, offset: 11174 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11107 },
        end: { line: 343, column: 68, offset: 11174 }
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
        start: { line: 345, column: 1, offset: 11176 },
        end: { line: 355, column: 4, offset: 11329 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11331 },
            end: { line: 357, column: 49, offset: 11379 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11379 },
            end: { line: 357, column: 59, offset: 11389 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11389 },
            end: { line: 357, column: 65, offset: 11395 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11331 },
        end: { line: 357, column: 65, offset: 11395 }
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
        start: { line: 359, column: 1, offset: 11397 },
        end: { line: 372, column: 4, offset: 11662 }
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
            start: { line: 374, column: 5, offset: 11668 },
            end: { line: 374, column: 53, offset: 11716 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11664 },
        end: { line: 374, column: 53, offset: 11716 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11718 },
            end: { line: 376, column: 323, offset: 12040 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11718 },
        end: { line: 376, column: 323, offset: 12040 }
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
            start: { line: 378, column: 4, offset: 12045 },
            end: { line: 378, column: 23, offset: 12064 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12042 },
        end: { line: 378, column: 23, offset: 12064 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12065 },
            end: { line: 379, column: 115, offset: 12179 }
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
                start: { line: 379, column: 116, offset: 12180 },
                end: { line: 379, column: 133, offset: 12197 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12179 },
            end: { line: 379, column: 243, offset: 12307 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12307 },
            end: { line: 379, column: 409, offset: 12473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12473 },
            end: { line: 379, column: 419, offset: 12483 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12483 },
            end: { line: 379, column: 425, offset: 12489 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12065 },
        end: { line: 379, column: 425, offset: 12489 }
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
        start: { line: 381, column: 1, offset: 12491 },
        end: { line: 399, column: 4, offset: 12920 }
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
            start: { line: 401, column: 5, offset: 12926 },
            end: { line: 401, column: 22, offset: 12943 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12922 },
        end: { line: 401, column: 22, offset: 12943 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12944 },
            end: { line: 402, column: 78, offset: 13021 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13021 },
            end: { line: 402, column: 99, offset: 13042 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13042 },
            end: { line: 402, column: 252, offset: 13195 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13195 },
            end: { line: 402, column: 258, offset: 13201 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13201 },
            end: { line: 402, column: 259, offset: 13202 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12944 },
        end: { line: 402, column: 259, offset: 13202 }
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
        start: { line: 404, column: 1, offset: 13204 },
        end: { line: 412, column: 4, offset: 13365 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13367 },
            end: { line: 414, column: 73, offset: 13439 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13367 },
        end: { line: 414, column: 73, offset: 13439 }
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
        start: { line: 416, column: 1, offset: 13441 },
        end: { line: 447, column: 4, offset: 13899 }
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
            start: { line: 449, column: 5, offset: 13905 },
            end: { line: 449, column: 39, offset: 13939 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13901 },
        end: { line: 449, column: 39, offset: 13939 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13940 },
            end: { line: 450, column: 103, offset: 14042 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14042 },
            end: { line: 450, column: 120, offset: 14059 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14059 },
            end: { line: 450, column: 136, offset: 14075 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14075 },
            end: { line: 450, column: 143, offset: 14082 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14082 },
            end: { line: 450, column: 152, offset: 14091 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13940 },
        end: { line: 450, column: 152, offset: 14091 }
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
        start: { line: 452, column: 1, offset: 14093 },
        end: { line: 470, column: 4, offset: 14459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14461 },
            end: { line: 472, column: 159, offset: 14619 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14619 },
            end: { line: 472, column: 182, offset: 14642 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14642 },
            end: { line: 472, column: 183, offset: 14643 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14461 },
        end: { line: 472, column: 183, offset: 14643 }
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
        start: { line: 474, column: 1, offset: 14645 },
        end: { line: 511, column: 4, offset: 15127 }
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
            start: { line: 513, column: 4, offset: 15132 },
            end: { line: 513, column: 27, offset: 15155 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15129 },
        end: { line: 513, column: 27, offset: 15155 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15156 },
            end: { line: 514, column: 184, offset: 15339 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15156 },
        end: { line: 514, column: 184, offset: 15339 }
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
            start: { line: 516, column: 5, offset: 15345 },
            end: { line: 516, column: 12, offset: 15352 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15341 },
        end: { line: 516, column: 12, offset: 15352 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15354 },
            end: { line: 518, column: 143, offset: 15496 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15496 },
            end: { line: 518, column: 150, offset: 15503 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15503 },
            end: { line: 518, column: 157, offset: 15510 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15510 },
            end: { line: 518, column: 165, offset: 15518 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15518 },
            end: { line: 518, column: 173, offset: 15526 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15354 },
        end: { line: 518, column: 173, offset: 15526 }
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
        start: { line: 520, column: 1, offset: 15528 },
        end: { line: 528, column: 4, offset: 15826 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15828 },
            end: { line: 530, column: 15, offset: 15842 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15842 },
            end: { line: 530, column: 22, offset: 15849 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15849 },
            end: { line: 530, column: 166, offset: 15993 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 15993 },
            end: { line: 530, column: 173, offset: 16000 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 16000 },
            end: { line: 530, column: 222, offset: 16049 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15828 },
        end: { line: 530, column: 222, offset: 16049 }
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
        start: { line: 532, column: 1, offset: 16051 },
        end: { line: 544, column: 4, offset: 16356 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16358 },
            end: { line: 546, column: 15, offset: 16372 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16372 },
            end: { line: 546, column: 23, offset: 16380 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16380 },
            end: { line: 546, column: 74, offset: 16431 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16358 },
        end: { line: 546, column: 74, offset: 16431 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16433 },
        end: { line: 552, column: 4, offset: 16518 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16520 },
            end: { line: 554, column: 38, offset: 16557 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16557 },
            end: { line: 554, column: 47, offset: 16566 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16566 },
            end: { line: 554, column: 60, offset: 16579 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16520 },
        end: { line: 554, column: 60, offset: 16579 }
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
        start: { line: 556, column: 1, offset: 16581 },
        end: { line: 576, column: 4, offset: 16998 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 17000 },
            end: { line: 578, column: 22, offset: 17021 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17021 },
            end: { line: 578, column: 32, offset: 17031 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17031 },
            end: { line: 578, column: 37, offset: 17036 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17036 },
            end: { line: 578, column: 46, offset: 17045 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17045 },
            end: { line: 578, column: 62, offset: 17061 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17061 },
            end: { line: 578, column: 71, offset: 17070 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17070 },
            end: { line: 578, column: 98, offset: 17097 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 17000 },
        end: { line: 578, column: 98, offset: 17097 }
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
        start: { line: 580, column: 1, offset: 17099 },
        end: { line: 586, column: 4, offset: 17342 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17344 },
            end: { line: 588, column: 112, offset: 17455 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17344 },
        end: { line: 588, column: 112, offset: 17455 }
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
        start: { line: 590, column: 1, offset: 17457 },
        end: { line: 602, column: 4, offset: 17794 }
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
            start: { line: 604, column: 5, offset: 17800 },
            end: { line: 604, column: 16, offset: 17811 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17796 },
        end: { line: 604, column: 16, offset: 17811 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17813 },
            end: { line: 606, column: 5, offset: 17817 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17817 },
            end: { line: 606, column: 21, offset: 17833 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17833 },
            end: { line: 606, column: 52, offset: 17864 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17864 },
            end: { line: 606, column: 59, offset: 17871 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17871 },
            end: { line: 606, column: 145, offset: 17957 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17957 },
            end: { line: 606, column: 152, offset: 17964 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17964 },
            end: { line: 606, column: 169, offset: 17981 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17981 },
            end: { line: 606, column: 185, offset: 17997 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 17997 },
            end: { line: 606, column: 246, offset: 18058 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17813 },
        end: { line: 606, column: 246, offset: 18058 }
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
        start: { line: 608, column: 1, offset: 18060 },
        end: { line: 627, column: 4, offset: 18599 }
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
            start: { line: 629, column: 4, offset: 18604 },
            end: { line: 629, column: 36, offset: 18636 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18601 },
        end: { line: 629, column: 36, offset: 18636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18637 },
            end: { line: 630, column: 143, offset: 18779 }
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
                start: { line: 630, column: 144, offset: 18780 },
                end: { line: 630, column: 167, offset: 18803 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18779 },
            end: { line: 630, column: 303, offset: 18939 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18939 },
            end: { line: 630, column: 367, offset: 19003 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19003 },
            end: { line: 630, column: 384, offset: 19020 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19020 },
            end: { line: 630, column: 424, offset: 19060 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19060 },
            end: { line: 630, column: 440, offset: 19076 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19076 },
            end: { line: 630, column: 446, offset: 19082 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18637 },
        end: { line: 630, column: 446, offset: 19082 }
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
            start: { line: 632, column: 5, offset: 19088 },
            end: { line: 632, column: 28, offset: 19111 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19084 },
        end: { line: 632, column: 28, offset: 19111 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19112 },
            end: { line: 633, column: 84, offset: 19195 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19195 },
            end: { line: 633, column: 110, offset: 19221 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19221 },
            end: { line: 633, column: 276, offset: 19387 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19387 },
            end: { line: 633, column: 282, offset: 19393 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19393 },
            end: { line: 633, column: 283, offset: 19394 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19112 },
        end: { line: 633, column: 283, offset: 19394 }
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
        start: { line: 635, column: 1, offset: 19396 },
        end: { line: 643, column: 4, offset: 19584 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19586 },
            end: { line: 645, column: 79, offset: 19664 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19586 },
        end: { line: 645, column: 79, offset: 19664 }
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
        start: { line: 647, column: 1, offset: 19666 },
        end: { line: 678, column: 4, offset: 20161 }
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
            start: { line: 680, column: 5, offset: 20167 },
            end: { line: 680, column: 51, offset: 20213 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20163 },
        end: { line: 680, column: 51, offset: 20213 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20214 },
            end: { line: 681, column: 35, offset: 20248 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20248 },
            end: { line: 681, column: 58, offset: 20271 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20271 },
            end: { line: 681, column: 70, offset: 20283 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20283 },
            end: { line: 681, column: 77, offset: 20290 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20290 },
            end: { line: 681, column: 122, offset: 20335 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20335 },
            end: { line: 681, column: 138, offset: 20351 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20351 },
            end: { line: 681, column: 146, offset: 20359 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20214 },
        end: { line: 681, column: 146, offset: 20359 }
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
        start: { line: 683, column: 1, offset: 20361 },
        end: { line: 701, column: 4, offset: 20808 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20810 },
            end: { line: 703, column: 184, offset: 20993 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 20993 },
            end: { line: 703, column: 218, offset: 21027 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21027 },
            end: { line: 703, column: 219, offset: 21028 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20810 },
        end: { line: 703, column: 219, offset: 21028 }
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
        start: { line: 705, column: 1, offset: 21030 },
        end: { line: 741, column: 4, offset: 21557 }
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
            start: { line: 743, column: 4, offset: 21562 },
            end: { line: 743, column: 24, offset: 21582 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21559 },
        end: { line: 743, column: 24, offset: 21582 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21583 },
            end: { line: 744, column: 253, offset: 21835 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21583 },
        end: { line: 744, column: 253, offset: 21835 }
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
            start: { line: 746, column: 5, offset: 21841 },
            end: { line: 746, column: 12, offset: 21848 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21837 },
        end: { line: 746, column: 12, offset: 21848 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21850 },
            end: { line: 748, column: 64, offset: 21913 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21913 },
            end: { line: 748, column: 70, offset: 21919 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21919 },
            end: { line: 748, column: 103, offset: 21952 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21952 },
            end: { line: 748, column: 109, offset: 21958 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21958 },
            end: { line: 748, column: 143, offset: 21992 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21850 },
        end: { line: 748, column: 143, offset: 21992 }
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
                    start: { line: 750, column: 5, offset: 21998 },
                    end: { line: 750, column: 50, offset: 22043 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22043 },
                    end: { line: 750, column: 58, offset: 22051 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22051 },
                    end: { line: 750, column: 119, offset: 22112 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 21998 },
                end: { line: 750, column: 119, offset: 22112 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 21995 },
            end: { line: 750, column: 119, offset: 22112 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 21995 },
        end: { line: 750, column: 119, offset: 22112 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22114 },
        end: { line: 757, column: 4, offset: 22191 }
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
        start: { line: 759, column: 1, offset: 22193 },
        end: { line: 766, column: 4, offset: 22337 }
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
                    start: { line: 768, column: 5, offset: 22343 },
                    end: { line: 768, column: 63, offset: 22401 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22401 },
                    end: { line: 768, column: 69, offset: 22407 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22407 },
                    end: { line: 768, column: 126, offset: 22464 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22464 },
                    end: { line: 768, column: 132, offset: 22470 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22470 },
                    end: { line: 768, column: 143, offset: 22481 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22343 },
                end: { line: 768, column: 143, offset: 22481 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22340 },
            end: { line: 768, column: 143, offset: 22481 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22340 },
        end: { line: 768, column: 143, offset: 22481 }
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
        start: { line: 770, column: 1, offset: 22483 },
        end: { line: 775, column: 4, offset: 22579 }
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
        start: { line: 777, column: 1, offset: 22581 },
        end: { line: 785, column: 4, offset: 22762 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22764 },
            end: { line: 787, column: 65, offset: 22828 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22764 },
        end: { line: 787, column: 65, offset: 22828 }
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
                    start: { line: 788, column: 4, offset: 22832 },
                    end: { line: 788, column: 11, offset: 22839 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22832 },
                end: { line: 788, column: 11, offset: 22839 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22830 },
            end: { line: 788, column: 11, offset: 22839 }
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
                    start: { line: 789, column: 4, offset: 22843 },
                    end: { line: 789, column: 9, offset: 22848 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22843 },
                end: { line: 789, column: 9, offset: 22848 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22841 },
            end: { line: 789, column: 9, offset: 22848 }
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
                    start: { line: 790, column: 4, offset: 22852 },
                    end: { line: 790, column: 9, offset: 22857 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22852 },
                end: { line: 790, column: 9, offset: 22857 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22850 },
            end: { line: 790, column: 9, offset: 22857 }
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
                    start: { line: 791, column: 4, offset: 22861 },
                    end: { line: 791, column: 15, offset: 22872 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22861 },
                end: { line: 791, column: 15, offset: 22872 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22859 },
            end: { line: 791, column: 15, offset: 22872 }
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
                    start: { line: 792, column: 4, offset: 22876 },
                    end: { line: 792, column: 21, offset: 22893 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22876 },
                end: { line: 792, column: 21, offset: 22893 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22874 },
            end: { line: 792, column: 21, offset: 22893 }
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
                    start: { line: 793, column: 4, offset: 22897 },
                    end: { line: 793, column: 12, offset: 22905 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22897 },
                end: { line: 793, column: 12, offset: 22905 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22895 },
            end: { line: 793, column: 12, offset: 22905 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22830 },
        end: { line: 793, column: 12, offset: 22905 }
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
            start: { line: 795, column: 5, offset: 22911 },
            end: { line: 795, column: 15, offset: 22921 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22907 },
        end: { line: 795, column: 15, offset: 22921 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22923 },
            end: { line: 797, column: 67, offset: 22989 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22989 },
            end: { line: 797, column: 76, offset: 22998 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 22998 },
            end: { line: 797, column: 109, offset: 23031 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23031 },
            end: { line: 797, column: 118, offset: 23040 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23040 },
            end: { line: 797, column: 154, offset: 23076 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22923 },
        end: { line: 797, column: 154, offset: 23076 }
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
                    start: { line: 799, column: 5, offset: 23082 },
                    end: { line: 799, column: 97, offset: 23174 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23174 },
                    end: { line: 799, column: 106, offset: 23183 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23183 },
                    end: { line: 799, column: 209, offset: 23286 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23286 },
                    end: { line: 799, column: 218, offset: 23295 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23295 },
                    end: { line: 799, column: 219, offset: 23296 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23082 },
                end: { line: 799, column: 219, offset: 23296 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23079 },
            end: { line: 799, column: 219, offset: 23296 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23079 },
        end: { line: 799, column: 219, offset: 23296 }
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
        start: { line: 801, column: 1, offset: 23298 },
        end: { line: 806, column: 4, offset: 23413 }
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
        start: { line: 808, column: 1, offset: 23415 },
        end: { line: 816, column: 4, offset: 23614 }
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
                    start: { line: 818, column: 5, offset: 23620 },
                    end: { line: 818, column: 121, offset: 23736 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23620 },
                end: { line: 818, column: 121, offset: 23736 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23617 },
            end: { line: 818, column: 121, offset: 23736 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23617 },
        end: { line: 818, column: 121, offset: 23736 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23738 },
        end: { line: 825, column: 4, offset: 23826 }
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
        start: { line: 827, column: 1, offset: 23828 },
        end: { line: 832, column: 4, offset: 23952 }
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
                    start: { line: 834, column: 5, offset: 23958 },
                    end: { line: 834, column: 159, offset: 24112 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23958 },
                end: { line: 834, column: 159, offset: 24112 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23955 },
            end: { line: 834, column: 159, offset: 24112 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23955 },
        end: { line: 834, column: 159, offset: 24112 }
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
        start: { line: 836, column: 1, offset: 24114 },
        end: { line: 841, column: 4, offset: 24225 }
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
        start: { line: 843, column: 1, offset: 24227 },
        end: { line: 849, column: 4, offset: 24408 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24410 },
            end: { line: 851, column: 68, offset: 24477 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24410 },
        end: { line: 851, column: 68, offset: 24477 }
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
                    start: { line: 852, column: 4, offset: 24481 },
                    end: { line: 852, column: 11, offset: 24488 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24481 },
                end: { line: 852, column: 11, offset: 24488 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24479 },
            end: { line: 852, column: 11, offset: 24488 }
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
                    start: { line: 853, column: 4, offset: 24492 },
                    end: { line: 853, column: 9, offset: 24497 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24492 },
                end: { line: 853, column: 9, offset: 24497 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24490 },
            end: { line: 853, column: 9, offset: 24497 }
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
                    start: { line: 854, column: 4, offset: 24501 },
                    end: { line: 854, column: 9, offset: 24506 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24501 },
                end: { line: 854, column: 9, offset: 24506 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24499 },
            end: { line: 854, column: 9, offset: 24506 }
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
                    start: { line: 855, column: 4, offset: 24510 },
                    end: { line: 855, column: 15, offset: 24521 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24510 },
                end: { line: 855, column: 15, offset: 24521 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24508 },
            end: { line: 855, column: 15, offset: 24521 }
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
                    start: { line: 856, column: 4, offset: 24525 },
                    end: { line: 856, column: 21, offset: 24542 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24525 },
                end: { line: 856, column: 21, offset: 24542 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24523 },
            end: { line: 856, column: 21, offset: 24542 }
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
                    start: { line: 857, column: 4, offset: 24546 },
                    end: { line: 857, column: 12, offset: 24554 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24546 },
                end: { line: 857, column: 12, offset: 24554 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24544 },
            end: { line: 857, column: 12, offset: 24554 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24479 },
        end: { line: 857, column: 12, offset: 24554 }
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
            start: { line: 859, column: 5, offset: 24560 },
            end: { line: 859, column: 13, offset: 24568 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24556 },
        end: { line: 859, column: 13, offset: 24568 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24570 },
            end: { line: 861, column: 65, offset: 24634 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24634 },
            end: { line: 861, column: 74, offset: 24643 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24643 },
            end: { line: 861, column: 107, offset: 24676 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24676 },
            end: { line: 861, column: 116, offset: 24685 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24685 },
            end: { line: 861, column: 151, offset: 24720 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24570 },
        end: { line: 861, column: 152, offset: 24721 }
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
                    start: { line: 863, column: 5, offset: 24727 },
                    end: { line: 863, column: 86, offset: 24808 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24808 },
                    end: { line: 863, column: 95, offset: 24817 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24817 },
                    end: { line: 863, column: 253, offset: 24975 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24727 },
                end: { line: 863, column: 253, offset: 24975 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24724 },
            end: { line: 863, column: 253, offset: 24975 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24724 },
        end: { line: 863, column: 253, offset: 24975 }
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
        start: { line: 865, column: 1, offset: 24977 },
        end: { line: 872, column: 4, offset: 25147 }
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
        start: { line: 874, column: 1, offset: 25149 },
        end: { line: 884, column: 4, offset: 25383 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25385 },
            end: { line: 886, column: 66, offset: 25450 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25385 },
        end: { line: 886, column: 66, offset: 25450 }
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
                    start: { line: 887, column: 4, offset: 25454 },
                    end: { line: 887, column: 11, offset: 25461 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25454 },
                end: { line: 887, column: 11, offset: 25461 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25452 },
            end: { line: 887, column: 11, offset: 25461 }
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
                    start: { line: 888, column: 4, offset: 25465 },
                    end: { line: 888, column: 9, offset: 25470 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25465 },
                end: { line: 888, column: 9, offset: 25470 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25463 },
            end: { line: 888, column: 9, offset: 25470 }
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
                    start: { line: 889, column: 4, offset: 25474 },
                    end: { line: 889, column: 9, offset: 25479 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25474 },
                end: { line: 889, column: 9, offset: 25479 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25472 },
            end: { line: 889, column: 9, offset: 25479 }
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
                    start: { line: 890, column: 4, offset: 25483 },
                    end: { line: 890, column: 15, offset: 25494 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25483 },
                end: { line: 890, column: 15, offset: 25494 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25481 },
            end: { line: 890, column: 15, offset: 25494 }
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
                    start: { line: 891, column: 4, offset: 25498 },
                    end: { line: 891, column: 21, offset: 25515 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25498 },
                end: { line: 891, column: 21, offset: 25515 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25496 },
            end: { line: 891, column: 21, offset: 25515 }
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
                    start: { line: 892, column: 4, offset: 25519 },
                    end: { line: 892, column: 12, offset: 25527 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25519 },
                end: { line: 892, column: 12, offset: 25527 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25517 },
            end: { line: 892, column: 12, offset: 25527 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25452 },
        end: { line: 892, column: 12, offset: 25527 }
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
            start: { line: 894, column: 5, offset: 25533 },
            end: { line: 894, column: 14, offset: 25542 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25529 },
        end: { line: 894, column: 14, offset: 25542 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25544 },
            end: { line: 896, column: 66, offset: 25609 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25609 },
            end: { line: 896, column: 75, offset: 25618 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25618 },
            end: { line: 896, column: 108, offset: 25651 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25651 },
            end: { line: 896, column: 117, offset: 25660 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25660 },
            end: { line: 896, column: 152, offset: 25695 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25544 },
        end: { line: 896, column: 152, offset: 25695 }
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
                    start: { line: 898, column: 5, offset: 25701 },
                    end: { line: 898, column: 123, offset: 25819 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25701 },
                end: { line: 898, column: 123, offset: 25819 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25698 },
            end: { line: 898, column: 123, offset: 25819 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25698 },
        end: { line: 898, column: 123, offset: 25819 }
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
        start: { line: 900, column: 1, offset: 25821 },
        end: { line: 905, column: 4, offset: 25934 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25936 },
        end: { line: 910, column: 4, offset: 26046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26048 },
            end: { line: 912, column: 67, offset: 26114 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26048 },
        end: { line: 912, column: 67, offset: 26114 }
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
                    start: { line: 913, column: 4, offset: 26118 },
                    end: { line: 913, column: 11, offset: 26125 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26118 },
                end: { line: 913, column: 11, offset: 26125 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26116 },
            end: { line: 913, column: 11, offset: 26125 }
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
                    start: { line: 914, column: 4, offset: 26129 },
                    end: { line: 914, column: 12, offset: 26137 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26129 },
                end: { line: 914, column: 12, offset: 26137 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26127 },
            end: { line: 914, column: 12, offset: 26137 }
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
                    start: { line: 915, column: 4, offset: 26141 },
                    end: { line: 915, column: 9, offset: 26146 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26141 },
                end: { line: 915, column: 9, offset: 26146 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26139 },
            end: { line: 915, column: 9, offset: 26146 }
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
                    start: { line: 916, column: 4, offset: 26150 },
                    end: { line: 916, column: 12, offset: 26158 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26150 },
                end: { line: 916, column: 12, offset: 26158 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26148 },
            end: { line: 916, column: 12, offset: 26158 }
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
                    start: { line: 917, column: 4, offset: 26162 },
                    end: { line: 917, column: 12, offset: 26170 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26162 },
                end: { line: 917, column: 12, offset: 26170 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26160 },
            end: { line: 917, column: 12, offset: 26170 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26116 },
        end: { line: 917, column: 12, offset: 26170 }
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
            start: { line: 919, column: 5, offset: 26176 },
            end: { line: 919, column: 10, offset: 26181 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26172 },
        end: { line: 919, column: 10, offset: 26181 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26183 },
            end: { line: 921, column: 62, offset: 26244 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26244 },
            end: { line: 921, column: 72, offset: 26254 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26254 },
            end: { line: 921, column: 76, offset: 26258 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26258 },
            end: { line: 921, column: 84, offset: 26266 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26266 },
            end: { line: 921, column: 118, offset: 26300 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26300 },
            end: { line: 921, column: 128, offset: 26310 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26310 },
            end: { line: 921, column: 132, offset: 26314 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26314 },
            end: { line: 921, column: 140, offset: 26322 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26322 },
            end: { line: 921, column: 172, offset: 26354 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26183 },
        end: { line: 921, column: 172, offset: 26354 }
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
                    start: { line: 923, column: 5, offset: 26360 },
                    end: { line: 923, column: 77, offset: 26432 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26432 },
                    end: { line: 923, column: 87, offset: 26442 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26442 },
                    end: { line: 923, column: 91, offset: 26446 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26446 },
                    end: { line: 923, column: 99, offset: 26454 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value, given the function returns a monad.',
                  position: {
                    start: { line: 923, column: 99, offset: 26454 },
                    end: { line: 923, column: 213, offset: 26568 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26360 },
                end: { line: 923, column: 213, offset: 26568 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26357 },
            end: { line: 923, column: 213, offset: 26568 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26357 },
        end: { line: 923, column: 213, offset: 26568 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26570 },
        end: { line: 930, column: 4, offset: 26643 }
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
        start: { line: 932, column: 1, offset: 26645 },
        end: { line: 940, column: 4, offset: 26807 }
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
                    start: { line: 942, column: 5, offset: 26813 },
                    end: { line: 942, column: 119, offset: 26927 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26813 },
                end: { line: 942, column: 119, offset: 26927 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26810 },
            end: { line: 942, column: 119, offset: 26927 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26810 },
        end: { line: 942, column: 119, offset: 26927 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26929 },
        end: { line: 949, column: 4, offset: 27008 }
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
        start: { line: 951, column: 1, offset: 27010 },
        end: { line: 958, column: 4, offset: 27174 }
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
                    start: { line: 960, column: 5, offset: 27180 },
                    end: { line: 960, column: 118, offset: 27293 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27180 },
                end: { line: 960, column: 118, offset: 27293 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27177 },
            end: { line: 960, column: 118, offset: 27293 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27177 },
        end: { line: 960, column: 118, offset: 27293 }
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
        start: { line: 962, column: 1, offset: 27295 },
        end: { line: 968, column: 4, offset: 27451 }
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
        start: { line: 970, column: 1, offset: 27453 },
        end: { line: 978, column: 4, offset: 27677 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27679 },
            end: { line: 980, column: 63, offset: 27741 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27679 },
        end: { line: 980, column: 63, offset: 27741 }
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
                    start: { line: 981, column: 4, offset: 27745 },
                    end: { line: 981, column: 11, offset: 27752 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27745 },
                end: { line: 981, column: 11, offset: 27752 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27743 },
            end: { line: 981, column: 11, offset: 27752 }
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
                    start: { line: 982, column: 4, offset: 27756 },
                    end: { line: 982, column: 12, offset: 27764 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27756 },
                end: { line: 982, column: 12, offset: 27764 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27754 },
            end: { line: 982, column: 12, offset: 27764 }
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
                    start: { line: 983, column: 4, offset: 27768 },
                    end: { line: 983, column: 9, offset: 27773 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27768 },
                end: { line: 983, column: 9, offset: 27773 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27766 },
            end: { line: 983, column: 9, offset: 27773 }
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
                    start: { line: 984, column: 4, offset: 27777 },
                    end: { line: 984, column: 15, offset: 27788 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27777 },
                end: { line: 984, column: 15, offset: 27788 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27775 },
            end: { line: 984, column: 15, offset: 27788 }
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
                    start: { line: 985, column: 4, offset: 27792 },
                    end: { line: 985, column: 21, offset: 27809 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27792 },
                end: { line: 985, column: 21, offset: 27809 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27790 },
            end: { line: 985, column: 21, offset: 27809 }
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
                    start: { line: 986, column: 4, offset: 27813 },
                    end: { line: 986, column: 12, offset: 27821 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27813 },
                end: { line: 986, column: 12, offset: 27821 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27811 },
            end: { line: 986, column: 12, offset: 27821 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27743 },
        end: { line: 986, column: 12, offset: 27821 }
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
            start: { line: 988, column: 4, offset: 27826 },
            end: { line: 988, column: 14, offset: 27836 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27823 },
        end: { line: 988, column: 14, offset: 27836 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Data Types in [A]synchronous Functional Programming.',
          position: {
            start: { line: 990, column: 1, offset: 27838 },
            end: { line: 990, column: 68, offset: 27905 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27838 },
        end: { line: 990, column: 68, offset: 27905 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are interested in getting started with Rubico and [A]synchronous Functional Programming, please visit Rubico's home page: ",
          position: {
            start: { line: 992, column: 1, offset: 27907 },
            end: { line: 992, column: 130, offset: 28036 }
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
                start: { line: 992, column: 131, offset: 28037 },
                end: { line: 992, column: 142, offset: 28048 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 130, offset: 28036 },
            end: { line: 992, column: 146, offset: 28052 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 146, offset: 28052 },
            end: { line: 992, column: 147, offset: 28053 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27907 },
        end: { line: 992, column: 147, offset: 28053 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28054 }
  }
}