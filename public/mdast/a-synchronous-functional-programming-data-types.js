export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, King of Software at CLOUT\n' +
        'date: 2025-06-13\n' +
        'updated: 2026-05-05\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming.\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 301 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 303 },
            end: { line: 11, column: 186, offset: 488 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 303 },
        end: { line: 11, column: 186, offset: 488 }
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
            start: { line: 13, column: 4, offset: 493 },
            end: { line: 13, column: 24, offset: 513 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 490 },
        end: { line: 13, column: 24, offset: 513 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 514 },
            end: { line: 14, column: 250, offset: 763 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 514 },
        end: { line: 14, column: 250, offset: 763 }
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
            start: { line: 16, column: 5, offset: 769 },
            end: { line: 16, column: 11, offset: 775 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 765 },
        end: { line: 16, column: 11, offset: 775 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 777 },
            end: { line: 18, column: 64, offset: 840 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 840 },
            end: { line: 18, column: 67, offset: 843 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 843 },
            end: { line: 18, column: 105, offset: 881 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 881 },
            end: { line: 18, column: 110, offset: 886 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 886 },
            end: { line: 18, column: 185, offset: 961 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 777 },
        end: { line: 18, column: 185, offset: 961 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 963 },
        end: { line: 22, column: 4, offset: 982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 984 },
            end: { line: 24, column: 22, offset: 1005 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1005 },
            end: { line: 24, column: 30, offset: 1013 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1013 },
            end: { line: 24, column: 79, offset: 1062 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1062 },
            end: { line: 24, column: 87, offset: 1070 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1070 },
            end: { line: 24, column: 147, offset: 1130 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 984 },
        end: { line: 24, column: 147, offset: 1130 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1132 },
        end: { line: 28, column: 4, offset: 1166 }
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
            start: { line: 30, column: 5, offset: 1172 },
            end: { line: 30, column: 11, offset: 1178 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1168 },
        end: { line: 30, column: 11, offset: 1178 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1180 },
            end: { line: 32, column: 56, offset: 1235 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1235 },
            end: { line: 32, column: 63, offset: 1242 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1242 },
            end: { line: 32, column: 67, offset: 1246 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1246 },
            end: { line: 32, column: 83, offset: 1262 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1262 },
            end: { line: 32, column: 255, offset: 1434 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1180 },
        end: { line: 32, column: 255, offset: 1434 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1436 },
        end: { line: 36, column: 4, offset: 1468 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1470 },
            end: { line: 38, column: 22, offset: 1491 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1491 },
            end: { line: 38, column: 30, offset: 1499 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1499 },
            end: { line: 38, column: 79, offset: 1548 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1548 },
            end: { line: 38, column: 87, offset: 1556 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1556 },
            end: { line: 38, column: 147, offset: 1616 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1470 },
        end: { line: 38, column: 147, offset: 1616 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1618 },
        end: { line: 42, column: 4, offset: 1652 }
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
            start: { line: 44, column: 5, offset: 1658 },
            end: { line: 44, column: 12, offset: 1665 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1654 },
        end: { line: 44, column: 12, offset: 1665 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1667 },
            end: { line: 46, column: 63, offset: 1729 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1729 },
            end: { line: 46, column: 69, offset: 1735 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1735 },
            end: { line: 46, column: 73, offset: 1739 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1739 },
            end: { line: 46, column: 80, offset: 1746 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1746 },
            end: { line: 46, column: 135, offset: 1801 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1667 },
        end: { line: 46, column: 135, offset: 1801 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1803 },
        end: { line: 50, column: 4, offset: 1825 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1827 },
            end: { line: 52, column: 130, offset: 1956 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1956 },
            end: { line: 52, column: 134, offset: 1960 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1960 },
            end: { line: 52, column: 136, offset: 1962 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1962 },
            end: { line: 52, column: 139, offset: 1965 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1965 },
            end: { line: 52, column: 141, offset: 1967 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1967 },
            end: { line: 52, column: 144, offset: 1970 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1970 },
            end: { line: 52, column: 146, offset: 1972 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1972 },
            end: { line: 52, column: 150, offset: 1976 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1976 },
            end: { line: 52, column: 152, offset: 1978 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1978 },
            end: { line: 52, column: 156, offset: 1982 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1982 },
            end: { line: 52, column: 158, offset: 1984 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1984 },
            end: { line: 52, column: 162, offset: 1988 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 1988 },
            end: { line: 52, column: 167, offset: 1993 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 1993 },
            end: { line: 52, column: 171, offset: 1997 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 1997 },
            end: { line: 52, column: 213, offset: 2039 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2039 },
            end: { line: 52, column: 217, offset: 2043 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2043 },
            end: { line: 52, column: 255, offset: 2081 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1827 },
        end: { line: 52, column: 255, offset: 2081 }
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
        start: { line: 54, column: 1, offset: 2083 },
        end: { line: 61, column: 4, offset: 2220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2222 },
            end: { line: 63, column: 22, offset: 2243 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2243 },
            end: { line: 63, column: 31, offset: 2252 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2252 },
            end: { line: 63, column: 64, offset: 2285 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2222 },
        end: { line: 63, column: 64, offset: 2285 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2287 },
        end: { line: 67, column: 4, offset: 2324 }
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
            start: { line: 69, column: 5, offset: 2330 },
            end: { line: 69, column: 11, offset: 2336 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2326 },
        end: { line: 69, column: 11, offset: 2336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2338 },
            end: { line: 71, column: 154, offset: 2491 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2491 },
            end: { line: 71, column: 166, offset: 2503 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2503 },
            end: { line: 71, column: 208, offset: 2545 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2338 },
        end: { line: 71, column: 208, offset: 2545 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2547 },
        end: { line: 76, column: 4, offset: 2632 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2634 },
            end: { line: 78, column: 137, offset: 2770 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2634 },
        end: { line: 78, column: 137, offset: 2770 }
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
        start: { line: 80, column: 1, offset: 2772 },
        end: { line: 86, column: 4, offset: 2943 }
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
            start: { line: 88, column: 5, offset: 2949 },
            end: { line: 88, column: 11, offset: 2955 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2945 },
        end: { line: 88, column: 11, offset: 2955 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2957 },
            end: { line: 90, column: 54, offset: 3010 }
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
                start: { line: 90, column: 55, offset: 3011 },
                end: { line: 90, column: 64, offset: 3020 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3010 },
            end: { line: 90, column: 126, offset: 3082 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3082 },
            end: { line: 90, column: 194, offset: 3150 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2957 },
        end: { line: 90, column: 194, offset: 3150 }
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
        start: { line: 92, column: 1, offset: 3152 },
        end: { line: 97, column: 4, offset: 3319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3321 },
            end: { line: 99, column: 130, offset: 3450 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3450 },
            end: { line: 99, column: 140, offset: 3460 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3460 },
            end: { line: 99, column: 150, offset: 3470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3470 },
            end: { line: 99, column: 163, offset: 3483 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3483 },
            end: { line: 99, column: 164, offset: 3484 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3321 },
        end: { line: 99, column: 164, offset: 3484 }
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
        start: { line: 101, column: 1, offset: 3486 },
        end: { line: 114, column: 4, offset: 3700 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3702 },
            end: { line: 116, column: 34, offset: 3735 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3735 },
            end: { line: 116, column: 51, offset: 3752 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3752 },
            end: { line: 116, column: 56, offset: 3757 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3757 },
            end: { line: 116, column: 78, offset: 3779 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3779 },
            end: { line: 116, column: 185, offset: 3886 }
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
                start: { line: 116, column: 186, offset: 3887 },
                end: { line: 116, column: 203, offset: 3904 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3886 },
            end: { line: 116, column: 313, offset: 4014 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4014 },
            end: { line: 116, column: 318, offset: 4019 }
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
                start: { line: 116, column: 319, offset: 4020 },
                end: { line: 116, column: 342, offset: 4043 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4019 },
            end: { line: 116, column: 478, offset: 4179 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3702 },
        end: { line: 116, column: 478, offset: 4179 }
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
            start: { line: 118, column: 5, offset: 4185 },
            end: { line: 118, column: 12, offset: 4192 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4181 },
        end: { line: 118, column: 12, offset: 4192 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4194 },
            end: { line: 120, column: 95, offset: 4288 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4288 },
            end: { line: 120, column: 101, offset: 4294 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4294 },
            end: { line: 120, column: 106, offset: 4299 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4299 },
            end: { line: 120, column: 117, offset: 4310 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4310 },
            end: { line: 120, column: 286, offset: 4479 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4479 },
            end: { line: 120, column: 292, offset: 4485 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4485 },
            end: { line: 120, column: 388, offset: 4581 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4581 },
            end: { line: 120, column: 399, offset: 4592 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4592 },
            end: { line: 120, column: 441, offset: 4634 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4634 },
            end: { line: 120, column: 452, offset: 4645 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4645 },
            end: { line: 120, column: 469, offset: 4662 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4194 },
        end: { line: 120, column: 469, offset: 4662 }
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
        start: { line: 122, column: 1, offset: 4664 },
        end: { line: 135, column: 4, offset: 4942 }
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
            start: { line: 137, column: 5, offset: 4948 },
            end: { line: 137, column: 42, offset: 4985 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4944 },
        end: { line: 137, column: 42, offset: 4985 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4986 },
            end: { line: 138, column: 329, offset: 5314 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4986 },
        end: { line: 138, column: 329, offset: 5314 }
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
            start: { line: 140, column: 4, offset: 5319 },
            end: { line: 140, column: 25, offset: 5340 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5316 },
        end: { line: 140, column: 25, offset: 5340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5341 },
            end: { line: 141, column: 429, offset: 5769 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5341 },
        end: { line: 141, column: 429, offset: 5769 }
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
            start: { line: 143, column: 5, offset: 5775 },
            end: { line: 143, column: 10, offset: 5780 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5771 },
        end: { line: 143, column: 10, offset: 5780 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5782 },
            end: { line: 145, column: 175, offset: 5956 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5956 },
            end: { line: 145, column: 182, offset: 5963 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5963 },
            end: { line: 145, column: 195, offset: 5976 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5782 },
        end: { line: 145, column: 195, offset: 5976 }
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
        start: { line: 147, column: 1, offset: 5978 },
        end: { line: 155, column: 4, offset: 6245 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6247 },
            end: { line: 157, column: 56, offset: 6302 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6302 },
            end: { line: 157, column: 63, offset: 6309 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6309 },
            end: { line: 157, column: 76, offset: 6322 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6247 },
        end: { line: 157, column: 76, offset: 6322 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6324 },
        end: { line: 162, column: 4, offset: 6437 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6439 },
            end: { line: 164, column: 40, offset: 6478 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6478 },
            end: { line: 164, column: 48, offset: 6486 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6486 },
            end: { line: 164, column: 53, offset: 6491 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6491 },
            end: { line: 164, column: 59, offset: 6497 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6497 },
            end: { line: 164, column: 83, offset: 6521 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6439 },
        end: { line: 164, column: 83, offset: 6521 }
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
        start: { line: 166, column: 1, offset: 6523 },
        end: { line: 171, column: 4, offset: 6650 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6652 },
            end: { line: 173, column: 42, offset: 6693 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6693 },
            end: { line: 173, column: 49, offset: 6700 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6700 },
            end: { line: 173, column: 66, offset: 6717 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6652 },
        end: { line: 173, column: 66, offset: 6717 }
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
        start: { line: 175, column: 1, offset: 6719 },
        end: { line: 181, column: 4, offset: 6824 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6826 },
            end: { line: 183, column: 42, offset: 6867 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6867 },
            end: { line: 183, column: 51, offset: 6876 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6876 },
            end: { line: 183, column: 68, offset: 6893 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6826 },
        end: { line: 183, column: 68, offset: 6893 }
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
        start: { line: 185, column: 1, offset: 6895 },
        end: { line: 191, column: 4, offset: 7046 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7048 },
            end: { line: 193, column: 52, offset: 7099 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7099 },
            end: { line: 193, column: 62, offset: 7109 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7109 },
            end: { line: 193, column: 68, offset: 7115 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7048 },
        end: { line: 193, column: 68, offset: 7115 }
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
        start: { line: 195, column: 1, offset: 7117 },
        end: { line: 206, column: 4, offset: 7261 }
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
            start: { line: 208, column: 5, offset: 7267 },
            end: { line: 208, column: 11, offset: 7273 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7263 },
        end: { line: 208, column: 11, offset: 7273 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7275 },
            end: { line: 210, column: 199, offset: 7473 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7275 },
        end: { line: 210, column: 199, offset: 7473 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7475 },
        end: { line: 214, column: 4, offset: 7511 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7513 },
            end: { line: 216, column: 22, offset: 7534 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7534 },
            end: { line: 216, column: 30, offset: 7542 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7542 },
            end: { line: 216, column: 91, offset: 7603 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7513 },
        end: { line: 216, column: 91, offset: 7603 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7605 },
        end: { line: 220, column: 4, offset: 7635 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7637 },
            end: { line: 222, column: 142, offset: 7778 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7637 },
        end: { line: 222, column: 142, offset: 7778 }
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
        start: { line: 224, column: 1, offset: 7780 },
        end: { line: 234, column: 4, offset: 8070 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8072 },
            end: { line: 236, column: 73, offset: 8144 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8144 },
            end: { line: 236, column: 81, offset: 8152 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8152 },
            end: { line: 236, column: 90, offset: 8161 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8072 },
        end: { line: 236, column: 90, offset: 8161 }
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
        start: { line: 238, column: 1, offset: 8163 },
        end: { line: 245, column: 4, offset: 8398 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8400 },
            end: { line: 247, column: 66, offset: 8465 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8465 },
            end: { line: 247, column: 76, offset: 8475 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8475 },
            end: { line: 247, column: 82, offset: 8481 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8400 },
        end: { line: 247, column: 82, offset: 8481 }
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
        start: { line: 249, column: 1, offset: 8483 },
        end: { line: 258, column: 4, offset: 8645 }
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
            start: { line: 260, column: 5, offset: 8651 },
            end: { line: 260, column: 8, offset: 8654 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8647 },
        end: { line: 260, column: 8, offset: 8654 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8656 },
            end: { line: 262, column: 169, offset: 8824 }
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
                start: { line: 262, column: 170, offset: 8825 },
                end: { line: 262, column: 183, offset: 8838 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8824 },
            end: { line: 262, column: 306, offset: 8961 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8961 },
            end: { line: 262, column: 469, offset: 9124 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9124 },
            end: { line: 262, column: 475, offset: 9130 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9130 },
            end: { line: 262, column: 483, offset: 9138 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8656 },
        end: { line: 262, column: 483, offset: 9138 }
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
        start: { line: 264, column: 1, offset: 9140 },
        end: { line: 269, column: 4, offset: 9323 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9325 },
            end: { line: 271, column: 26, offset: 9350 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9350 },
            end: { line: 271, column: 31, offset: 9355 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9355 },
            end: { line: 271, column: 44, offset: 9368 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9325 },
        end: { line: 271, column: 44, offset: 9368 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9370 },
        end: { line: 275, column: 4, offset: 9406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9408 },
            end: { line: 277, column: 42, offset: 9449 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9449 },
            end: { line: 277, column: 48, offset: 9455 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9455 },
            end: { line: 277, column: 65, offset: 9472 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9408 },
        end: { line: 277, column: 65, offset: 9472 }
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
        start: { line: 279, column: 1, offset: 9474 },
        end: { line: 287, column: 4, offset: 9624 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9626 },
            end: { line: 289, column: 42, offset: 9667 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9667 },
            end: { line: 289, column: 51, offset: 9676 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9676 },
            end: { line: 289, column: 68, offset: 9693 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9626 },
        end: { line: 289, column: 68, offset: 9693 }
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
        start: { line: 291, column: 1, offset: 9695 },
        end: { line: 297, column: 4, offset: 9814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9816 },
            end: { line: 299, column: 49, offset: 9864 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9864 },
            end: { line: 299, column: 59, offset: 9874 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9874 },
            end: { line: 299, column: 65, offset: 9880 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9816 },
        end: { line: 299, column: 65, offset: 9880 }
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
        start: { line: 301, column: 1, offset: 9882 },
        end: { line: 312, column: 4, offset: 10035 }
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
            start: { line: 314, column: 5, offset: 10041 },
            end: { line: 314, column: 8, offset: 10044 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10037 },
        end: { line: 314, column: 8, offset: 10044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10046 },
            end: { line: 316, column: 203, offset: 10248 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10046 },
        end: { line: 316, column: 203, offset: 10248 }
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
                    start: { line: 317, column: 5, offset: 10253 },
                    end: { line: 317, column: 113, offset: 10361 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10253 },
                end: { line: 317, column: 113, offset: 10361 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10251 },
            end: { line: 317, column: 113, offset: 10361 }
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
                    start: { line: 318, column: 5, offset: 10366 },
                    end: { line: 318, column: 94, offset: 10455 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10455 },
                    end: { line: 318, column: 110, offset: 10471 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10366 },
                end: { line: 318, column: 110, offset: 10471 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10364 },
            end: { line: 318, column: 110, offset: 10471 }
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
                    start: { line: 319, column: 5, offset: 10476 },
                    end: { line: 319, column: 130, offset: 10601 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10476 },
                end: { line: 319, column: 130, offset: 10601 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10474 },
            end: { line: 319, column: 130, offset: 10601 }
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
                    start: { line: 320, column: 5, offset: 10606 },
                    end: { line: 320, column: 28, offset: 10629 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10629 },
                    end: { line: 320, column: 38, offset: 10639 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10639 },
                    end: { line: 320, column: 64, offset: 10665 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10665 },
                    end: { line: 320, column: 74, offset: 10675 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10675 },
                    end: { line: 320, column: 80, offset: 10681 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10606 },
                end: { line: 320, column: 80, offset: 10681 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10604 },
            end: { line: 320, column: 80, offset: 10681 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10251 },
        end: { line: 320, column: 80, offset: 10681 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10683 },
            end: { line: 322, column: 9, offset: 10691 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10691 },
            end: { line: 322, column: 14, offset: 10696 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10696 },
            end: { line: 322, column: 48, offset: 10730 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10730 },
            end: { line: 322, column: 53, offset: 10735 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10735 },
            end: { line: 322, column: 124, offset: 10806 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10683 },
        end: { line: 322, column: 124, offset: 10806 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10808 },
        end: { line: 330, column: 4, offset: 10884 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10886 },
            end: { line: 332, column: 42, offset: 10927 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10927 },
            end: { line: 332, column: 48, offset: 10933 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10933 },
            end: { line: 332, column: 65, offset: 10950 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10886 },
        end: { line: 332, column: 65, offset: 10950 }
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
        start: { line: 334, column: 1, offset: 10952 },
        end: { line: 341, column: 4, offset: 11103 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11105 },
            end: { line: 343, column: 42, offset: 11146 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11146 },
            end: { line: 343, column: 51, offset: 11155 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11155 },
            end: { line: 343, column: 68, offset: 11172 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11105 },
        end: { line: 343, column: 68, offset: 11172 }
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
        start: { line: 345, column: 1, offset: 11174 },
        end: { line: 355, column: 4, offset: 11327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11329 },
            end: { line: 357, column: 49, offset: 11377 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11377 },
            end: { line: 357, column: 59, offset: 11387 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11387 },
            end: { line: 357, column: 65, offset: 11393 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11329 },
        end: { line: 357, column: 65, offset: 11393 }
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
        start: { line: 359, column: 1, offset: 11395 },
        end: { line: 372, column: 4, offset: 11660 }
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
            start: { line: 374, column: 5, offset: 11666 },
            end: { line: 374, column: 53, offset: 11714 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11662 },
        end: { line: 374, column: 53, offset: 11714 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11716 },
            end: { line: 376, column: 323, offset: 12038 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11716 },
        end: { line: 376, column: 323, offset: 12038 }
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
            start: { line: 378, column: 4, offset: 12043 },
            end: { line: 378, column: 23, offset: 12062 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12040 },
        end: { line: 378, column: 23, offset: 12062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12063 },
            end: { line: 379, column: 115, offset: 12177 }
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
                start: { line: 379, column: 116, offset: 12178 },
                end: { line: 379, column: 133, offset: 12195 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12177 },
            end: { line: 379, column: 243, offset: 12305 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12305 },
            end: { line: 379, column: 409, offset: 12471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12471 },
            end: { line: 379, column: 419, offset: 12481 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12481 },
            end: { line: 379, column: 425, offset: 12487 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12063 },
        end: { line: 379, column: 425, offset: 12487 }
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
        start: { line: 381, column: 1, offset: 12489 },
        end: { line: 399, column: 4, offset: 12918 }
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
            start: { line: 401, column: 5, offset: 12924 },
            end: { line: 401, column: 22, offset: 12941 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12920 },
        end: { line: 401, column: 22, offset: 12941 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12942 },
            end: { line: 402, column: 78, offset: 13019 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13019 },
            end: { line: 402, column: 99, offset: 13040 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13040 },
            end: { line: 402, column: 252, offset: 13193 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13193 },
            end: { line: 402, column: 258, offset: 13199 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13199 },
            end: { line: 402, column: 259, offset: 13200 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12942 },
        end: { line: 402, column: 259, offset: 13200 }
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
        start: { line: 404, column: 1, offset: 13202 },
        end: { line: 412, column: 4, offset: 13363 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13365 },
            end: { line: 414, column: 73, offset: 13437 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13365 },
        end: { line: 414, column: 73, offset: 13437 }
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
        start: { line: 416, column: 1, offset: 13439 },
        end: { line: 447, column: 4, offset: 13897 }
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
            start: { line: 449, column: 5, offset: 13903 },
            end: { line: 449, column: 39, offset: 13937 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13899 },
        end: { line: 449, column: 39, offset: 13937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13938 },
            end: { line: 450, column: 103, offset: 14040 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14040 },
            end: { line: 450, column: 120, offset: 14057 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14057 },
            end: { line: 450, column: 136, offset: 14073 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14073 },
            end: { line: 450, column: 143, offset: 14080 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14080 },
            end: { line: 450, column: 152, offset: 14089 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13938 },
        end: { line: 450, column: 152, offset: 14089 }
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
        start: { line: 452, column: 1, offset: 14091 },
        end: { line: 470, column: 4, offset: 14457 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14459 },
            end: { line: 472, column: 159, offset: 14617 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14617 },
            end: { line: 472, column: 182, offset: 14640 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14640 },
            end: { line: 472, column: 183, offset: 14641 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14459 },
        end: { line: 472, column: 183, offset: 14641 }
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
        start: { line: 474, column: 1, offset: 14643 },
        end: { line: 511, column: 4, offset: 15125 }
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
            start: { line: 513, column: 4, offset: 15130 },
            end: { line: 513, column: 27, offset: 15153 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15127 },
        end: { line: 513, column: 27, offset: 15153 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15154 },
            end: { line: 514, column: 184, offset: 15337 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15154 },
        end: { line: 514, column: 184, offset: 15337 }
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
            start: { line: 516, column: 5, offset: 15343 },
            end: { line: 516, column: 12, offset: 15350 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15339 },
        end: { line: 516, column: 12, offset: 15350 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15352 },
            end: { line: 518, column: 143, offset: 15494 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15494 },
            end: { line: 518, column: 150, offset: 15501 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15501 },
            end: { line: 518, column: 157, offset: 15508 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15508 },
            end: { line: 518, column: 165, offset: 15516 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15516 },
            end: { line: 518, column: 173, offset: 15524 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15352 },
        end: { line: 518, column: 173, offset: 15524 }
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
        start: { line: 520, column: 1, offset: 15526 },
        end: { line: 528, column: 4, offset: 15824 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15826 },
            end: { line: 530, column: 15, offset: 15840 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15840 },
            end: { line: 530, column: 22, offset: 15847 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15847 },
            end: { line: 530, column: 166, offset: 15991 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 15991 },
            end: { line: 530, column: 173, offset: 15998 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 15998 },
            end: { line: 530, column: 222, offset: 16047 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15826 },
        end: { line: 530, column: 222, offset: 16047 }
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
        start: { line: 532, column: 1, offset: 16049 },
        end: { line: 544, column: 4, offset: 16354 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16356 },
            end: { line: 546, column: 15, offset: 16370 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16370 },
            end: { line: 546, column: 23, offset: 16378 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16378 },
            end: { line: 546, column: 74, offset: 16429 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16356 },
        end: { line: 546, column: 74, offset: 16429 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16431 },
        end: { line: 552, column: 4, offset: 16516 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16518 },
            end: { line: 554, column: 38, offset: 16555 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16555 },
            end: { line: 554, column: 47, offset: 16564 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16564 },
            end: { line: 554, column: 60, offset: 16577 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16518 },
        end: { line: 554, column: 60, offset: 16577 }
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
        start: { line: 556, column: 1, offset: 16579 },
        end: { line: 576, column: 4, offset: 16996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 16998 },
            end: { line: 578, column: 22, offset: 17019 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17019 },
            end: { line: 578, column: 32, offset: 17029 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17029 },
            end: { line: 578, column: 37, offset: 17034 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17034 },
            end: { line: 578, column: 46, offset: 17043 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17043 },
            end: { line: 578, column: 62, offset: 17059 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17059 },
            end: { line: 578, column: 71, offset: 17068 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17068 },
            end: { line: 578, column: 98, offset: 17095 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 16998 },
        end: { line: 578, column: 98, offset: 17095 }
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
        start: { line: 580, column: 1, offset: 17097 },
        end: { line: 586, column: 4, offset: 17340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17342 },
            end: { line: 588, column: 112, offset: 17453 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17342 },
        end: { line: 588, column: 112, offset: 17453 }
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
        start: { line: 590, column: 1, offset: 17455 },
        end: { line: 602, column: 4, offset: 17792 }
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
            start: { line: 604, column: 5, offset: 17798 },
            end: { line: 604, column: 16, offset: 17809 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17794 },
        end: { line: 604, column: 16, offset: 17809 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17811 },
            end: { line: 606, column: 5, offset: 17815 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17815 },
            end: { line: 606, column: 21, offset: 17831 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17831 },
            end: { line: 606, column: 52, offset: 17862 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17862 },
            end: { line: 606, column: 59, offset: 17869 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17869 },
            end: { line: 606, column: 145, offset: 17955 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17955 },
            end: { line: 606, column: 152, offset: 17962 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17962 },
            end: { line: 606, column: 169, offset: 17979 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17979 },
            end: { line: 606, column: 185, offset: 17995 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 17995 },
            end: { line: 606, column: 246, offset: 18056 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17811 },
        end: { line: 606, column: 246, offset: 18056 }
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
        start: { line: 608, column: 1, offset: 18058 },
        end: { line: 627, column: 4, offset: 18597 }
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
            start: { line: 629, column: 4, offset: 18602 },
            end: { line: 629, column: 36, offset: 18634 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18599 },
        end: { line: 629, column: 36, offset: 18634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18635 },
            end: { line: 630, column: 143, offset: 18777 }
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
                start: { line: 630, column: 144, offset: 18778 },
                end: { line: 630, column: 167, offset: 18801 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18777 },
            end: { line: 630, column: 303, offset: 18937 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18937 },
            end: { line: 630, column: 367, offset: 19001 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19001 },
            end: { line: 630, column: 384, offset: 19018 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19018 },
            end: { line: 630, column: 424, offset: 19058 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19058 },
            end: { line: 630, column: 440, offset: 19074 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19074 },
            end: { line: 630, column: 446, offset: 19080 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18635 },
        end: { line: 630, column: 446, offset: 19080 }
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
            start: { line: 632, column: 5, offset: 19086 },
            end: { line: 632, column: 28, offset: 19109 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19082 },
        end: { line: 632, column: 28, offset: 19109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19110 },
            end: { line: 633, column: 84, offset: 19193 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19193 },
            end: { line: 633, column: 110, offset: 19219 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19219 },
            end: { line: 633, column: 276, offset: 19385 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19385 },
            end: { line: 633, column: 282, offset: 19391 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19391 },
            end: { line: 633, column: 283, offset: 19392 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19110 },
        end: { line: 633, column: 283, offset: 19392 }
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
        start: { line: 635, column: 1, offset: 19394 },
        end: { line: 643, column: 4, offset: 19582 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19584 },
            end: { line: 645, column: 79, offset: 19662 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19584 },
        end: { line: 645, column: 79, offset: 19662 }
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
        start: { line: 647, column: 1, offset: 19664 },
        end: { line: 678, column: 4, offset: 20159 }
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
            start: { line: 680, column: 5, offset: 20165 },
            end: { line: 680, column: 51, offset: 20211 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20161 },
        end: { line: 680, column: 51, offset: 20211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20212 },
            end: { line: 681, column: 35, offset: 20246 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20246 },
            end: { line: 681, column: 58, offset: 20269 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20269 },
            end: { line: 681, column: 70, offset: 20281 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20281 },
            end: { line: 681, column: 77, offset: 20288 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20288 },
            end: { line: 681, column: 122, offset: 20333 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20333 },
            end: { line: 681, column: 138, offset: 20349 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20349 },
            end: { line: 681, column: 146, offset: 20357 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20212 },
        end: { line: 681, column: 146, offset: 20357 }
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
        start: { line: 683, column: 1, offset: 20359 },
        end: { line: 701, column: 4, offset: 20806 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20808 },
            end: { line: 703, column: 184, offset: 20991 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 20991 },
            end: { line: 703, column: 218, offset: 21025 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21025 },
            end: { line: 703, column: 219, offset: 21026 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20808 },
        end: { line: 703, column: 219, offset: 21026 }
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
        start: { line: 705, column: 1, offset: 21028 },
        end: { line: 741, column: 4, offset: 21555 }
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
            start: { line: 743, column: 4, offset: 21560 },
            end: { line: 743, column: 24, offset: 21580 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21557 },
        end: { line: 743, column: 24, offset: 21580 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21581 },
            end: { line: 744, column: 253, offset: 21833 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21581 },
        end: { line: 744, column: 253, offset: 21833 }
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
            start: { line: 746, column: 5, offset: 21839 },
            end: { line: 746, column: 12, offset: 21846 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21835 },
        end: { line: 746, column: 12, offset: 21846 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21848 },
            end: { line: 748, column: 64, offset: 21911 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21911 },
            end: { line: 748, column: 70, offset: 21917 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21917 },
            end: { line: 748, column: 103, offset: 21950 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21950 },
            end: { line: 748, column: 109, offset: 21956 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21956 },
            end: { line: 748, column: 143, offset: 21990 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21848 },
        end: { line: 748, column: 143, offset: 21990 }
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
                    start: { line: 750, column: 5, offset: 21996 },
                    end: { line: 750, column: 50, offset: 22041 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22041 },
                    end: { line: 750, column: 58, offset: 22049 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22049 },
                    end: { line: 750, column: 119, offset: 22110 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 21996 },
                end: { line: 750, column: 119, offset: 22110 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 21993 },
            end: { line: 750, column: 119, offset: 22110 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 21993 },
        end: { line: 750, column: 119, offset: 22110 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22112 },
        end: { line: 757, column: 4, offset: 22189 }
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
        start: { line: 759, column: 1, offset: 22191 },
        end: { line: 766, column: 4, offset: 22335 }
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
                    start: { line: 768, column: 5, offset: 22341 },
                    end: { line: 768, column: 63, offset: 22399 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22399 },
                    end: { line: 768, column: 69, offset: 22405 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22405 },
                    end: { line: 768, column: 126, offset: 22462 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22462 },
                    end: { line: 768, column: 132, offset: 22468 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22468 },
                    end: { line: 768, column: 143, offset: 22479 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22341 },
                end: { line: 768, column: 143, offset: 22479 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22338 },
            end: { line: 768, column: 143, offset: 22479 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22338 },
        end: { line: 768, column: 143, offset: 22479 }
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
        start: { line: 770, column: 1, offset: 22481 },
        end: { line: 775, column: 4, offset: 22577 }
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
        start: { line: 777, column: 1, offset: 22579 },
        end: { line: 785, column: 4, offset: 22760 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22762 },
            end: { line: 787, column: 65, offset: 22826 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22762 },
        end: { line: 787, column: 65, offset: 22826 }
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
                    start: { line: 788, column: 4, offset: 22830 },
                    end: { line: 788, column: 11, offset: 22837 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22830 },
                end: { line: 788, column: 11, offset: 22837 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22828 },
            end: { line: 788, column: 11, offset: 22837 }
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
                    start: { line: 789, column: 4, offset: 22841 },
                    end: { line: 789, column: 9, offset: 22846 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22841 },
                end: { line: 789, column: 9, offset: 22846 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22839 },
            end: { line: 789, column: 9, offset: 22846 }
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
                    start: { line: 790, column: 4, offset: 22850 },
                    end: { line: 790, column: 9, offset: 22855 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22850 },
                end: { line: 790, column: 9, offset: 22855 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22848 },
            end: { line: 790, column: 9, offset: 22855 }
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
                    start: { line: 791, column: 4, offset: 22859 },
                    end: { line: 791, column: 15, offset: 22870 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22859 },
                end: { line: 791, column: 15, offset: 22870 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22857 },
            end: { line: 791, column: 15, offset: 22870 }
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
                    start: { line: 792, column: 4, offset: 22874 },
                    end: { line: 792, column: 21, offset: 22891 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22874 },
                end: { line: 792, column: 21, offset: 22891 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22872 },
            end: { line: 792, column: 21, offset: 22891 }
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
                    start: { line: 793, column: 4, offset: 22895 },
                    end: { line: 793, column: 12, offset: 22903 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22895 },
                end: { line: 793, column: 12, offset: 22903 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22893 },
            end: { line: 793, column: 12, offset: 22903 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22828 },
        end: { line: 793, column: 12, offset: 22903 }
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
            start: { line: 795, column: 5, offset: 22909 },
            end: { line: 795, column: 15, offset: 22919 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22905 },
        end: { line: 795, column: 15, offset: 22919 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22921 },
            end: { line: 797, column: 67, offset: 22987 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22987 },
            end: { line: 797, column: 76, offset: 22996 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 22996 },
            end: { line: 797, column: 109, offset: 23029 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23029 },
            end: { line: 797, column: 118, offset: 23038 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23038 },
            end: { line: 797, column: 154, offset: 23074 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22921 },
        end: { line: 797, column: 154, offset: 23074 }
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
                    start: { line: 799, column: 5, offset: 23080 },
                    end: { line: 799, column: 97, offset: 23172 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23172 },
                    end: { line: 799, column: 106, offset: 23181 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23181 },
                    end: { line: 799, column: 209, offset: 23284 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23284 },
                    end: { line: 799, column: 218, offset: 23293 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23293 },
                    end: { line: 799, column: 219, offset: 23294 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23080 },
                end: { line: 799, column: 219, offset: 23294 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23077 },
            end: { line: 799, column: 219, offset: 23294 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23077 },
        end: { line: 799, column: 219, offset: 23294 }
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
        start: { line: 801, column: 1, offset: 23296 },
        end: { line: 806, column: 4, offset: 23411 }
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
        start: { line: 808, column: 1, offset: 23413 },
        end: { line: 816, column: 4, offset: 23612 }
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
                    start: { line: 818, column: 5, offset: 23618 },
                    end: { line: 818, column: 121, offset: 23734 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23618 },
                end: { line: 818, column: 121, offset: 23734 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23615 },
            end: { line: 818, column: 121, offset: 23734 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23615 },
        end: { line: 818, column: 121, offset: 23734 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23736 },
        end: { line: 825, column: 4, offset: 23824 }
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
        start: { line: 827, column: 1, offset: 23826 },
        end: { line: 832, column: 4, offset: 23950 }
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
                    start: { line: 834, column: 5, offset: 23956 },
                    end: { line: 834, column: 159, offset: 24110 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23956 },
                end: { line: 834, column: 159, offset: 24110 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23953 },
            end: { line: 834, column: 159, offset: 24110 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23953 },
        end: { line: 834, column: 159, offset: 24110 }
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
        start: { line: 836, column: 1, offset: 24112 },
        end: { line: 841, column: 4, offset: 24223 }
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
        start: { line: 843, column: 1, offset: 24225 },
        end: { line: 849, column: 4, offset: 24406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24408 },
            end: { line: 851, column: 68, offset: 24475 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24408 },
        end: { line: 851, column: 68, offset: 24475 }
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
                    start: { line: 852, column: 4, offset: 24479 },
                    end: { line: 852, column: 11, offset: 24486 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24479 },
                end: { line: 852, column: 11, offset: 24486 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24477 },
            end: { line: 852, column: 11, offset: 24486 }
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
                    start: { line: 853, column: 4, offset: 24490 },
                    end: { line: 853, column: 9, offset: 24495 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24490 },
                end: { line: 853, column: 9, offset: 24495 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24488 },
            end: { line: 853, column: 9, offset: 24495 }
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
                    start: { line: 854, column: 4, offset: 24499 },
                    end: { line: 854, column: 9, offset: 24504 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24499 },
                end: { line: 854, column: 9, offset: 24504 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24497 },
            end: { line: 854, column: 9, offset: 24504 }
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
                    start: { line: 855, column: 4, offset: 24508 },
                    end: { line: 855, column: 15, offset: 24519 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24508 },
                end: { line: 855, column: 15, offset: 24519 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24506 },
            end: { line: 855, column: 15, offset: 24519 }
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
                    start: { line: 856, column: 4, offset: 24523 },
                    end: { line: 856, column: 21, offset: 24540 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24523 },
                end: { line: 856, column: 21, offset: 24540 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24521 },
            end: { line: 856, column: 21, offset: 24540 }
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
                    start: { line: 857, column: 4, offset: 24544 },
                    end: { line: 857, column: 12, offset: 24552 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24544 },
                end: { line: 857, column: 12, offset: 24552 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24542 },
            end: { line: 857, column: 12, offset: 24552 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24477 },
        end: { line: 857, column: 12, offset: 24552 }
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
            start: { line: 859, column: 5, offset: 24558 },
            end: { line: 859, column: 13, offset: 24566 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24554 },
        end: { line: 859, column: 13, offset: 24566 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24568 },
            end: { line: 861, column: 65, offset: 24632 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24632 },
            end: { line: 861, column: 74, offset: 24641 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24641 },
            end: { line: 861, column: 107, offset: 24674 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24674 },
            end: { line: 861, column: 116, offset: 24683 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24683 },
            end: { line: 861, column: 151, offset: 24718 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24568 },
        end: { line: 861, column: 152, offset: 24719 }
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
                    start: { line: 863, column: 5, offset: 24725 },
                    end: { line: 863, column: 86, offset: 24806 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24806 },
                    end: { line: 863, column: 95, offset: 24815 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24815 },
                    end: { line: 863, column: 253, offset: 24973 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24725 },
                end: { line: 863, column: 253, offset: 24973 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24722 },
            end: { line: 863, column: 253, offset: 24973 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24722 },
        end: { line: 863, column: 253, offset: 24973 }
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
        start: { line: 865, column: 1, offset: 24975 },
        end: { line: 872, column: 4, offset: 25145 }
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
        start: { line: 874, column: 1, offset: 25147 },
        end: { line: 884, column: 4, offset: 25381 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25383 },
            end: { line: 886, column: 66, offset: 25448 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25383 },
        end: { line: 886, column: 66, offset: 25448 }
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
                    start: { line: 887, column: 4, offset: 25452 },
                    end: { line: 887, column: 11, offset: 25459 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25452 },
                end: { line: 887, column: 11, offset: 25459 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25450 },
            end: { line: 887, column: 11, offset: 25459 }
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
                    start: { line: 888, column: 4, offset: 25463 },
                    end: { line: 888, column: 9, offset: 25468 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25463 },
                end: { line: 888, column: 9, offset: 25468 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25461 },
            end: { line: 888, column: 9, offset: 25468 }
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
                    start: { line: 889, column: 4, offset: 25472 },
                    end: { line: 889, column: 9, offset: 25477 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25472 },
                end: { line: 889, column: 9, offset: 25477 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25470 },
            end: { line: 889, column: 9, offset: 25477 }
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
                    start: { line: 890, column: 4, offset: 25481 },
                    end: { line: 890, column: 15, offset: 25492 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25481 },
                end: { line: 890, column: 15, offset: 25492 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25479 },
            end: { line: 890, column: 15, offset: 25492 }
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
                    start: { line: 891, column: 4, offset: 25496 },
                    end: { line: 891, column: 21, offset: 25513 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25496 },
                end: { line: 891, column: 21, offset: 25513 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25494 },
            end: { line: 891, column: 21, offset: 25513 }
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
                    start: { line: 892, column: 4, offset: 25517 },
                    end: { line: 892, column: 12, offset: 25525 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25517 },
                end: { line: 892, column: 12, offset: 25525 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25515 },
            end: { line: 892, column: 12, offset: 25525 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25450 },
        end: { line: 892, column: 12, offset: 25525 }
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
            start: { line: 894, column: 5, offset: 25531 },
            end: { line: 894, column: 14, offset: 25540 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25527 },
        end: { line: 894, column: 14, offset: 25540 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25542 },
            end: { line: 896, column: 66, offset: 25607 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25607 },
            end: { line: 896, column: 75, offset: 25616 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25616 },
            end: { line: 896, column: 108, offset: 25649 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25649 },
            end: { line: 896, column: 117, offset: 25658 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25658 },
            end: { line: 896, column: 152, offset: 25693 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25542 },
        end: { line: 896, column: 152, offset: 25693 }
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
                    start: { line: 898, column: 5, offset: 25699 },
                    end: { line: 898, column: 123, offset: 25817 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25699 },
                end: { line: 898, column: 123, offset: 25817 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25696 },
            end: { line: 898, column: 123, offset: 25817 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25696 },
        end: { line: 898, column: 123, offset: 25817 }
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
        start: { line: 900, column: 1, offset: 25819 },
        end: { line: 905, column: 4, offset: 25932 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25934 },
        end: { line: 910, column: 4, offset: 26044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26046 },
            end: { line: 912, column: 67, offset: 26112 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26046 },
        end: { line: 912, column: 67, offset: 26112 }
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
                    start: { line: 913, column: 4, offset: 26116 },
                    end: { line: 913, column: 11, offset: 26123 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26116 },
                end: { line: 913, column: 11, offset: 26123 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26114 },
            end: { line: 913, column: 11, offset: 26123 }
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
                    start: { line: 914, column: 4, offset: 26127 },
                    end: { line: 914, column: 12, offset: 26135 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26127 },
                end: { line: 914, column: 12, offset: 26135 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26125 },
            end: { line: 914, column: 12, offset: 26135 }
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
                    start: { line: 915, column: 4, offset: 26139 },
                    end: { line: 915, column: 9, offset: 26144 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26139 },
                end: { line: 915, column: 9, offset: 26144 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26137 },
            end: { line: 915, column: 9, offset: 26144 }
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
                    start: { line: 916, column: 4, offset: 26148 },
                    end: { line: 916, column: 12, offset: 26156 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26148 },
                end: { line: 916, column: 12, offset: 26156 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26146 },
            end: { line: 916, column: 12, offset: 26156 }
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
                    start: { line: 917, column: 4, offset: 26160 },
                    end: { line: 917, column: 12, offset: 26168 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26160 },
                end: { line: 917, column: 12, offset: 26168 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26158 },
            end: { line: 917, column: 12, offset: 26168 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26114 },
        end: { line: 917, column: 12, offset: 26168 }
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
            start: { line: 919, column: 5, offset: 26174 },
            end: { line: 919, column: 10, offset: 26179 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26170 },
        end: { line: 919, column: 10, offset: 26179 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26181 },
            end: { line: 921, column: 62, offset: 26242 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26242 },
            end: { line: 921, column: 72, offset: 26252 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26252 },
            end: { line: 921, column: 76, offset: 26256 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26256 },
            end: { line: 921, column: 84, offset: 26264 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26264 },
            end: { line: 921, column: 118, offset: 26298 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26298 },
            end: { line: 921, column: 128, offset: 26308 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26308 },
            end: { line: 921, column: 132, offset: 26312 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26312 },
            end: { line: 921, column: 140, offset: 26320 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26320 },
            end: { line: 921, column: 172, offset: 26352 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26181 },
        end: { line: 921, column: 172, offset: 26352 }
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
                    start: { line: 923, column: 5, offset: 26358 },
                    end: { line: 923, column: 77, offset: 26430 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26430 },
                    end: { line: 923, column: 87, offset: 26440 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26440 },
                    end: { line: 923, column: 91, offset: 26444 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26444 },
                    end: { line: 923, column: 99, offset: 26452 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value, given the function returns a monad.',
                  position: {
                    start: { line: 923, column: 99, offset: 26452 },
                    end: { line: 923, column: 213, offset: 26566 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26358 },
                end: { line: 923, column: 213, offset: 26566 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26355 },
            end: { line: 923, column: 213, offset: 26566 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26355 },
        end: { line: 923, column: 213, offset: 26566 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26568 },
        end: { line: 930, column: 4, offset: 26641 }
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
        start: { line: 932, column: 1, offset: 26643 },
        end: { line: 940, column: 4, offset: 26805 }
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
                    start: { line: 942, column: 5, offset: 26811 },
                    end: { line: 942, column: 119, offset: 26925 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26811 },
                end: { line: 942, column: 119, offset: 26925 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26808 },
            end: { line: 942, column: 119, offset: 26925 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26808 },
        end: { line: 942, column: 119, offset: 26925 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26927 },
        end: { line: 949, column: 4, offset: 27006 }
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
        start: { line: 951, column: 1, offset: 27008 },
        end: { line: 958, column: 4, offset: 27172 }
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
                    start: { line: 960, column: 5, offset: 27178 },
                    end: { line: 960, column: 118, offset: 27291 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27178 },
                end: { line: 960, column: 118, offset: 27291 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27175 },
            end: { line: 960, column: 118, offset: 27291 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27175 },
        end: { line: 960, column: 118, offset: 27291 }
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
        start: { line: 962, column: 1, offset: 27293 },
        end: { line: 968, column: 4, offset: 27449 }
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
        start: { line: 970, column: 1, offset: 27451 },
        end: { line: 978, column: 4, offset: 27675 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27677 },
            end: { line: 980, column: 63, offset: 27739 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27677 },
        end: { line: 980, column: 63, offset: 27739 }
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
                    start: { line: 981, column: 4, offset: 27743 },
                    end: { line: 981, column: 11, offset: 27750 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27743 },
                end: { line: 981, column: 11, offset: 27750 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27741 },
            end: { line: 981, column: 11, offset: 27750 }
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
                    start: { line: 982, column: 4, offset: 27754 },
                    end: { line: 982, column: 12, offset: 27762 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27754 },
                end: { line: 982, column: 12, offset: 27762 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27752 },
            end: { line: 982, column: 12, offset: 27762 }
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
                    start: { line: 983, column: 4, offset: 27766 },
                    end: { line: 983, column: 9, offset: 27771 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27766 },
                end: { line: 983, column: 9, offset: 27771 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27764 },
            end: { line: 983, column: 9, offset: 27771 }
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
                    start: { line: 984, column: 4, offset: 27775 },
                    end: { line: 984, column: 15, offset: 27786 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27775 },
                end: { line: 984, column: 15, offset: 27786 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27773 },
            end: { line: 984, column: 15, offset: 27786 }
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
                    start: { line: 985, column: 4, offset: 27790 },
                    end: { line: 985, column: 21, offset: 27807 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27790 },
                end: { line: 985, column: 21, offset: 27807 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27788 },
            end: { line: 985, column: 21, offset: 27807 }
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
                    start: { line: 986, column: 4, offset: 27811 },
                    end: { line: 986, column: 12, offset: 27819 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27811 },
                end: { line: 986, column: 12, offset: 27819 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27809 },
            end: { line: 986, column: 12, offset: 27819 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27741 },
        end: { line: 986, column: 12, offset: 27819 }
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
            start: { line: 988, column: 4, offset: 27824 },
            end: { line: 988, column: 14, offset: 27834 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27821 },
        end: { line: 988, column: 14, offset: 27834 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Data Types in [A]synchronous Functional Programming.',
          position: {
            start: { line: 990, column: 1, offset: 27836 },
            end: { line: 990, column: 68, offset: 27903 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27836 },
        end: { line: 990, column: 68, offset: 27903 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are interested in getting started with Rubico and [A]synchronous Functional Programming, please visit Rubico's home page: ",
          position: {
            start: { line: 992, column: 1, offset: 27905 },
            end: { line: 992, column: 130, offset: 28034 }
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
                start: { line: 992, column: 131, offset: 28035 },
                end: { line: 992, column: 142, offset: 28046 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 130, offset: 28034 },
            end: { line: 992, column: 146, offset: 28050 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 146, offset: 28050 },
            end: { line: 992, column: 147, offset: 28051 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27905 },
        end: { line: 992, column: 147, offset: 28051 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28052 }
  }
}