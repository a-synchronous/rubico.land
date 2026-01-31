export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2025-06-13\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 306 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 308 },
            end: { line: 11, column: 186, offset: 493 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 308 },
        end: { line: 11, column: 186, offset: 493 }
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
            start: { line: 13, column: 4, offset: 498 },
            end: { line: 13, column: 24, offset: 518 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 495 },
        end: { line: 13, column: 24, offset: 518 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 14, column: 1, offset: 519 },
            end: { line: 14, column: 250, offset: 768 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 519 },
        end: { line: 14, column: 250, offset: 768 }
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
            start: { line: 16, column: 5, offset: 774 },
            end: { line: 16, column: 11, offset: 780 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 770 },
        end: { line: 16, column: 11, offset: 780 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 18, column: 1, offset: 782 },
            end: { line: 18, column: 64, offset: 845 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 18, column: 64, offset: 845 },
            end: { line: 18, column: 67, offset: 848 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 18, column: 67, offset: 848 },
            end: { line: 18, column: 105, offset: 886 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 18, column: 105, offset: 886 },
            end: { line: 18, column: 110, offset: 891 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 18, column: 110, offset: 891 },
            end: { line: 18, column: 185, offset: 966 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 782 },
        end: { line: 18, column: 185, offset: 966 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 20, column: 1, offset: 968 },
        end: { line: 22, column: 4, offset: 987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 24, column: 1, offset: 989 },
            end: { line: 24, column: 22, offset: 1010 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 22, offset: 1010 },
            end: { line: 24, column: 30, offset: 1018 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 24, column: 30, offset: 1018 },
            end: { line: 24, column: 79, offset: 1067 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 24, column: 79, offset: 1067 },
            end: { line: 24, column: 87, offset: 1075 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 24, column: 87, offset: 1075 },
            end: { line: 24, column: 147, offset: 1135 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 1, offset: 989 },
        end: { line: 24, column: 147, offset: 1135 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 26, column: 1, offset: 1137 },
        end: { line: 28, column: 4, offset: 1171 }
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
            start: { line: 30, column: 5, offset: 1177 },
            end: { line: 30, column: 11, offset: 1183 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 1, offset: 1173 },
        end: { line: 30, column: 11, offset: 1183 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 32, column: 1, offset: 1185 },
            end: { line: 32, column: 56, offset: 1240 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 32, column: 56, offset: 1240 },
            end: { line: 32, column: 63, offset: 1247 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 32, column: 63, offset: 1247 },
            end: { line: 32, column: 67, offset: 1251 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 32, column: 67, offset: 1251 },
            end: { line: 32, column: 83, offset: 1267 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 32, column: 83, offset: 1267 },
            end: { line: 32, column: 255, offset: 1439 }
          }
        }
      ],
      position: {
        start: { line: 32, column: 1, offset: 1185 },
        end: { line: 32, column: 255, offset: 1439 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 34, column: 1, offset: 1441 },
        end: { line: 36, column: 4, offset: 1473 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 38, column: 1, offset: 1475 },
            end: { line: 38, column: 22, offset: 1496 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 22, offset: 1496 },
            end: { line: 38, column: 30, offset: 1504 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 38, column: 30, offset: 1504 },
            end: { line: 38, column: 79, offset: 1553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 38, column: 79, offset: 1553 },
            end: { line: 38, column: 87, offset: 1561 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 38, column: 87, offset: 1561 },
            end: { line: 38, column: 147, offset: 1621 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1475 },
        end: { line: 38, column: 147, offset: 1621 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 40, column: 1, offset: 1623 },
        end: { line: 42, column: 4, offset: 1657 }
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
            start: { line: 44, column: 5, offset: 1663 },
            end: { line: 44, column: 12, offset: 1670 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1659 },
        end: { line: 44, column: 12, offset: 1670 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 46, column: 1, offset: 1672 },
            end: { line: 46, column: 63, offset: 1734 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 46, column: 63, offset: 1734 },
            end: { line: 46, column: 69, offset: 1740 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 46, column: 69, offset: 1740 },
            end: { line: 46, column: 73, offset: 1744 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 46, column: 73, offset: 1744 },
            end: { line: 46, column: 80, offset: 1751 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 46, column: 80, offset: 1751 },
            end: { line: 46, column: 135, offset: 1806 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1672 },
        end: { line: 46, column: 135, offset: 1806 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 48, column: 1, offset: 1808 },
        end: { line: 50, column: 4, offset: 1830 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 52, column: 1, offset: 1832 },
            end: { line: 52, column: 130, offset: 1961 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 52, column: 130, offset: 1961 },
            end: { line: 52, column: 134, offset: 1965 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 134, offset: 1965 },
            end: { line: 52, column: 136, offset: 1967 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 52, column: 136, offset: 1967 },
            end: { line: 52, column: 139, offset: 1970 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 139, offset: 1970 },
            end: { line: 52, column: 141, offset: 1972 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 52, column: 141, offset: 1972 },
            end: { line: 52, column: 144, offset: 1975 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 144, offset: 1975 },
            end: { line: 52, column: 146, offset: 1977 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 52, column: 146, offset: 1977 },
            end: { line: 52, column: 150, offset: 1981 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 150, offset: 1981 },
            end: { line: 52, column: 152, offset: 1983 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 52, column: 152, offset: 1983 },
            end: { line: 52, column: 156, offset: 1987 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 52, column: 156, offset: 1987 },
            end: { line: 52, column: 158, offset: 1989 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 52, column: 158, offset: 1989 },
            end: { line: 52, column: 162, offset: 1993 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 52, column: 162, offset: 1993 },
            end: { line: 52, column: 167, offset: 1998 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 52, column: 167, offset: 1998 },
            end: { line: 52, column: 171, offset: 2002 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 52, column: 171, offset: 2002 },
            end: { line: 52, column: 213, offset: 2044 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 52, column: 213, offset: 2044 },
            end: { line: 52, column: 217, offset: 2048 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 52, column: 217, offset: 2048 },
            end: { line: 52, column: 255, offset: 2086 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 1832 },
        end: { line: 52, column: 255, offset: 2086 }
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
        start: { line: 54, column: 1, offset: 2088 },
        end: { line: 61, column: 4, offset: 2225 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 63, column: 1, offset: 2227 },
            end: { line: 63, column: 22, offset: 2248 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 63, column: 22, offset: 2248 },
            end: { line: 63, column: 31, offset: 2257 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 63, column: 31, offset: 2257 },
            end: { line: 63, column: 64, offset: 2290 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2227 },
        end: { line: 63, column: 64, offset: 2290 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 65, column: 1, offset: 2292 },
        end: { line: 67, column: 4, offset: 2329 }
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
            start: { line: 69, column: 5, offset: 2335 },
            end: { line: 69, column: 11, offset: 2341 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2331 },
        end: { line: 69, column: 11, offset: 2341 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 71, column: 1, offset: 2343 },
            end: { line: 71, column: 154, offset: 2496 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 71, column: 154, offset: 2496 },
            end: { line: 71, column: 166, offset: 2508 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 71, column: 166, offset: 2508 },
            end: { line: 71, column: 208, offset: 2550 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2343 },
        end: { line: 71, column: 208, offset: 2550 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 73, column: 1, offset: 2552 },
        end: { line: 76, column: 4, offset: 2637 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 78, column: 1, offset: 2639 },
            end: { line: 78, column: 137, offset: 2775 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2639 },
        end: { line: 78, column: 137, offset: 2775 }
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
        start: { line: 80, column: 1, offset: 2777 },
        end: { line: 86, column: 4, offset: 2948 }
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
            start: { line: 88, column: 5, offset: 2954 },
            end: { line: 88, column: 11, offset: 2960 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 2950 },
        end: { line: 88, column: 11, offset: 2960 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 90, column: 1, offset: 2962 },
            end: { line: 90, column: 54, offset: 3015 }
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
                start: { line: 90, column: 55, offset: 3016 },
                end: { line: 90, column: 64, offset: 3025 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 54, offset: 3015 },
            end: { line: 90, column: 126, offset: 3087 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 90, column: 126, offset: 3087 },
            end: { line: 90, column: 194, offset: 3155 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 2962 },
        end: { line: 90, column: 194, offset: 3155 }
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
        start: { line: 92, column: 1, offset: 3157 },
        end: { line: 97, column: 4, offset: 3324 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 99, column: 1, offset: 3326 },
            end: { line: 99, column: 130, offset: 3455 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 99, column: 130, offset: 3455 },
            end: { line: 99, column: 140, offset: 3465 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 99, column: 140, offset: 3465 },
            end: { line: 99, column: 150, offset: 3475 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 99, column: 150, offset: 3475 },
            end: { line: 99, column: 163, offset: 3488 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 99, column: 163, offset: 3488 },
            end: { line: 99, column: 164, offset: 3489 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3326 },
        end: { line: 99, column: 164, offset: 3489 }
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
        start: { line: 101, column: 1, offset: 3491 },
        end: { line: 114, column: 4, offset: 3705 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 116, column: 1, offset: 3707 },
            end: { line: 116, column: 34, offset: 3740 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 116, column: 34, offset: 3740 },
            end: { line: 116, column: 51, offset: 3757 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 51, offset: 3757 },
            end: { line: 116, column: 56, offset: 3762 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 116, column: 56, offset: 3762 },
            end: { line: 116, column: 78, offset: 3784 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 116, column: 78, offset: 3784 },
            end: { line: 116, column: 185, offset: 3891 }
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
                start: { line: 116, column: 186, offset: 3892 },
                end: { line: 116, column: 203, offset: 3909 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 185, offset: 3891 },
            end: { line: 116, column: 313, offset: 4019 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 116, column: 313, offset: 4019 },
            end: { line: 116, column: 318, offset: 4024 }
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
                start: { line: 116, column: 319, offset: 4025 },
                end: { line: 116, column: 342, offset: 4048 }
              }
            }
          ],
          position: {
            start: { line: 116, column: 318, offset: 4024 },
            end: { line: 116, column: 478, offset: 4184 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 3707 },
        end: { line: 116, column: 478, offset: 4184 }
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
            start: { line: 118, column: 5, offset: 4190 },
            end: { line: 118, column: 12, offset: 4197 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 4186 },
        end: { line: 118, column: 12, offset: 4197 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 120, column: 1, offset: 4199 },
            end: { line: 120, column: 95, offset: 4293 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 95, offset: 4293 },
            end: { line: 120, column: 101, offset: 4299 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 120, column: 101, offset: 4299 },
            end: { line: 120, column: 106, offset: 4304 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 106, offset: 4304 },
            end: { line: 120, column: 117, offset: 4315 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 120, column: 117, offset: 4315 },
            end: { line: 120, column: 286, offset: 4484 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 120, column: 286, offset: 4484 },
            end: { line: 120, column: 292, offset: 4490 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 120, column: 292, offset: 4490 },
            end: { line: 120, column: 388, offset: 4586 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 388, offset: 4586 },
            end: { line: 120, column: 399, offset: 4597 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 120, column: 399, offset: 4597 },
            end: { line: 120, column: 441, offset: 4639 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 120, column: 441, offset: 4639 },
            end: { line: 120, column: 452, offset: 4650 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 120, column: 452, offset: 4650 },
            end: { line: 120, column: 469, offset: 4667 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4199 },
        end: { line: 120, column: 469, offset: 4667 }
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
        start: { line: 122, column: 1, offset: 4669 },
        end: { line: 135, column: 4, offset: 4947 }
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
            start: { line: 137, column: 5, offset: 4953 },
            end: { line: 137, column: 42, offset: 4990 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 4949 },
        end: { line: 137, column: 42, offset: 4990 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 138, column: 1, offset: 4991 },
            end: { line: 138, column: 329, offset: 5319 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4991 },
        end: { line: 138, column: 329, offset: 5319 }
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
            start: { line: 140, column: 4, offset: 5324 },
            end: { line: 140, column: 25, offset: 5345 }
          }
        }
      ],
      position: {
        start: { line: 140, column: 1, offset: 5321 },
        end: { line: 140, column: 25, offset: 5345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 141, column: 1, offset: 5346 },
            end: { line: 141, column: 429, offset: 5774 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5346 },
        end: { line: 141, column: 429, offset: 5774 }
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
            start: { line: 143, column: 5, offset: 5780 },
            end: { line: 143, column: 10, offset: 5785 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 5776 },
        end: { line: 143, column: 10, offset: 5785 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 145, column: 1, offset: 5787 },
            end: { line: 145, column: 175, offset: 5961 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 145, column: 175, offset: 5961 },
            end: { line: 145, column: 182, offset: 5968 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 145, column: 182, offset: 5968 },
            end: { line: 145, column: 195, offset: 5981 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 5787 },
        end: { line: 145, column: 195, offset: 5981 }
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
        start: { line: 147, column: 1, offset: 5983 },
        end: { line: 155, column: 4, offset: 6250 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 157, column: 1, offset: 6252 },
            end: { line: 157, column: 56, offset: 6307 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 157, column: 56, offset: 6307 },
            end: { line: 157, column: 63, offset: 6314 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 157, column: 63, offset: 6314 },
            end: { line: 157, column: 76, offset: 6327 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 6252 },
        end: { line: 157, column: 76, offset: 6327 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 159, column: 1, offset: 6329 },
        end: { line: 162, column: 4, offset: 6442 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 164, column: 1, offset: 6444 },
            end: { line: 164, column: 40, offset: 6483 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 164, column: 40, offset: 6483 },
            end: { line: 164, column: 48, offset: 6491 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 164, column: 48, offset: 6491 },
            end: { line: 164, column: 53, offset: 6496 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 164, column: 53, offset: 6496 },
            end: { line: 164, column: 59, offset: 6502 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 164, column: 59, offset: 6502 },
            end: { line: 164, column: 83, offset: 6526 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6444 },
        end: { line: 164, column: 83, offset: 6526 }
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
        start: { line: 166, column: 1, offset: 6528 },
        end: { line: 171, column: 4, offset: 6655 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 173, column: 1, offset: 6657 },
            end: { line: 173, column: 42, offset: 6698 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 173, column: 42, offset: 6698 },
            end: { line: 173, column: 49, offset: 6705 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 173, column: 49, offset: 6705 },
            end: { line: 173, column: 66, offset: 6722 }
          }
        }
      ],
      position: {
        start: { line: 173, column: 1, offset: 6657 },
        end: { line: 173, column: 66, offset: 6722 }
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
        start: { line: 175, column: 1, offset: 6724 },
        end: { line: 181, column: 4, offset: 6829 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 183, column: 1, offset: 6831 },
            end: { line: 183, column: 42, offset: 6872 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 183, column: 42, offset: 6872 },
            end: { line: 183, column: 51, offset: 6881 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 183, column: 51, offset: 6881 },
            end: { line: 183, column: 68, offset: 6898 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 6831 },
        end: { line: 183, column: 68, offset: 6898 }
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
        start: { line: 185, column: 1, offset: 6900 },
        end: { line: 191, column: 4, offset: 7051 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 193, column: 1, offset: 7053 },
            end: { line: 193, column: 52, offset: 7104 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 193, column: 52, offset: 7104 },
            end: { line: 193, column: 62, offset: 7114 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 193, column: 62, offset: 7114 },
            end: { line: 193, column: 68, offset: 7120 }
          }
        }
      ],
      position: {
        start: { line: 193, column: 1, offset: 7053 },
        end: { line: 193, column: 68, offset: 7120 }
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
        start: { line: 195, column: 1, offset: 7122 },
        end: { line: 206, column: 4, offset: 7266 }
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
            start: { line: 208, column: 5, offset: 7272 },
            end: { line: 208, column: 11, offset: 7278 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 7268 },
        end: { line: 208, column: 11, offset: 7278 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 210, column: 1, offset: 7280 },
            end: { line: 210, column: 199, offset: 7478 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 7280 },
        end: { line: 210, column: 199, offset: 7478 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 212, column: 1, offset: 7480 },
        end: { line: 214, column: 4, offset: 7516 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 216, column: 1, offset: 7518 },
            end: { line: 216, column: 22, offset: 7539 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 216, column: 22, offset: 7539 },
            end: { line: 216, column: 30, offset: 7547 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 216, column: 30, offset: 7547 },
            end: { line: 216, column: 91, offset: 7608 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 7518 },
        end: { line: 216, column: 91, offset: 7608 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 218, column: 1, offset: 7610 },
        end: { line: 220, column: 4, offset: 7640 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 222, column: 1, offset: 7642 },
            end: { line: 222, column: 142, offset: 7783 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 7642 },
        end: { line: 222, column: 142, offset: 7783 }
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
        start: { line: 224, column: 1, offset: 7785 },
        end: { line: 234, column: 4, offset: 8075 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 236, column: 1, offset: 8077 },
            end: { line: 236, column: 73, offset: 8149 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 236, column: 73, offset: 8149 },
            end: { line: 236, column: 81, offset: 8157 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 236, column: 81, offset: 8157 },
            end: { line: 236, column: 90, offset: 8166 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8077 },
        end: { line: 236, column: 90, offset: 8166 }
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
        start: { line: 238, column: 1, offset: 8168 },
        end: { line: 245, column: 4, offset: 8403 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 247, column: 1, offset: 8405 },
            end: { line: 247, column: 66, offset: 8470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 247, column: 66, offset: 8470 },
            end: { line: 247, column: 76, offset: 8480 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 247, column: 76, offset: 8480 },
            end: { line: 247, column: 82, offset: 8486 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 8405 },
        end: { line: 247, column: 82, offset: 8486 }
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
        start: { line: 249, column: 1, offset: 8488 },
        end: { line: 258, column: 4, offset: 8650 }
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
            start: { line: 260, column: 5, offset: 8656 },
            end: { line: 260, column: 8, offset: 8659 }
          }
        }
      ],
      position: {
        start: { line: 260, column: 1, offset: 8652 },
        end: { line: 260, column: 8, offset: 8659 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 262, column: 1, offset: 8661 },
            end: { line: 262, column: 169, offset: 8829 }
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
                start: { line: 262, column: 170, offset: 8830 },
                end: { line: 262, column: 183, offset: 8843 }
              }
            }
          ],
          position: {
            start: { line: 262, column: 169, offset: 8829 },
            end: { line: 262, column: 306, offset: 8966 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 262, column: 306, offset: 8966 },
            end: { line: 262, column: 469, offset: 9129 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 262, column: 469, offset: 9129 },
            end: { line: 262, column: 475, offset: 9135 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 262, column: 475, offset: 9135 },
            end: { line: 262, column: 483, offset: 9143 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 8661 },
        end: { line: 262, column: 483, offset: 9143 }
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
        start: { line: 264, column: 1, offset: 9145 },
        end: { line: 269, column: 4, offset: 9328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 271, column: 1, offset: 9330 },
            end: { line: 271, column: 26, offset: 9355 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 271, column: 26, offset: 9355 },
            end: { line: 271, column: 31, offset: 9360 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 271, column: 31, offset: 9360 },
            end: { line: 271, column: 44, offset: 9373 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 9330 },
        end: { line: 271, column: 44, offset: 9373 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 273, column: 1, offset: 9375 },
        end: { line: 275, column: 4, offset: 9411 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 277, column: 1, offset: 9413 },
            end: { line: 277, column: 42, offset: 9454 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 277, column: 42, offset: 9454 },
            end: { line: 277, column: 48, offset: 9460 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 277, column: 48, offset: 9460 },
            end: { line: 277, column: 65, offset: 9477 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 9413 },
        end: { line: 277, column: 65, offset: 9477 }
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
        start: { line: 279, column: 1, offset: 9479 },
        end: { line: 287, column: 4, offset: 9629 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 289, column: 1, offset: 9631 },
            end: { line: 289, column: 42, offset: 9672 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 289, column: 42, offset: 9672 },
            end: { line: 289, column: 51, offset: 9681 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 289, column: 51, offset: 9681 },
            end: { line: 289, column: 68, offset: 9698 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 9631 },
        end: { line: 289, column: 68, offset: 9698 }
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
        start: { line: 291, column: 1, offset: 9700 },
        end: { line: 297, column: 4, offset: 9819 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 299, column: 1, offset: 9821 },
            end: { line: 299, column: 49, offset: 9869 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 299, column: 49, offset: 9869 },
            end: { line: 299, column: 59, offset: 9879 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 299, column: 59, offset: 9879 },
            end: { line: 299, column: 65, offset: 9885 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 9821 },
        end: { line: 299, column: 65, offset: 9885 }
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
        start: { line: 301, column: 1, offset: 9887 },
        end: { line: 312, column: 4, offset: 10040 }
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
            start: { line: 314, column: 5, offset: 10046 },
            end: { line: 314, column: 8, offset: 10049 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10042 },
        end: { line: 314, column: 8, offset: 10049 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 316, column: 1, offset: 10051 },
            end: { line: 316, column: 203, offset: 10253 }
          }
        }
      ],
      position: {
        start: { line: 316, column: 1, offset: 10051 },
        end: { line: 316, column: 203, offset: 10253 }
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
                    start: { line: 317, column: 5, offset: 10258 },
                    end: { line: 317, column: 113, offset: 10366 }
                  }
                }
              ],
              position: {
                start: { line: 317, column: 5, offset: 10258 },
                end: { line: 317, column: 113, offset: 10366 }
              }
            }
          ],
          position: {
            start: { line: 317, column: 3, offset: 10256 },
            end: { line: 317, column: 113, offset: 10366 }
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
                    start: { line: 318, column: 5, offset: 10371 },
                    end: { line: 318, column: 94, offset: 10460 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 318, column: 94, offset: 10460 },
                    end: { line: 318, column: 110, offset: 10476 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10371 },
                end: { line: 318, column: 110, offset: 10476 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10369 },
            end: { line: 318, column: 110, offset: 10476 }
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
                    start: { line: 319, column: 5, offset: 10481 },
                    end: { line: 319, column: 130, offset: 10606 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10481 },
                end: { line: 319, column: 130, offset: 10606 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10479 },
            end: { line: 319, column: 130, offset: 10606 }
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
                    start: { line: 320, column: 5, offset: 10611 },
                    end: { line: 320, column: 28, offset: 10634 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 320, column: 28, offset: 10634 },
                    end: { line: 320, column: 38, offset: 10644 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 320, column: 38, offset: 10644 },
                    end: { line: 320, column: 64, offset: 10670 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 320, column: 64, offset: 10670 },
                    end: { line: 320, column: 74, offset: 10680 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 320, column: 74, offset: 10680 },
                    end: { line: 320, column: 80, offset: 10686 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10611 },
                end: { line: 320, column: 80, offset: 10686 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10609 },
            end: { line: 320, column: 80, offset: 10686 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 3, offset: 10256 },
        end: { line: 320, column: 80, offset: 10686 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 322, column: 1, offset: 10688 },
            end: { line: 322, column: 9, offset: 10696 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 9, offset: 10696 },
            end: { line: 322, column: 14, offset: 10701 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 322, column: 14, offset: 10701 },
            end: { line: 322, column: 48, offset: 10735 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 322, column: 48, offset: 10735 },
            end: { line: 322, column: 53, offset: 10740 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 322, column: 53, offset: 10740 },
            end: { line: 322, column: 124, offset: 10811 }
          }
        }
      ],
      position: {
        start: { line: 322, column: 1, offset: 10688 },
        end: { line: 322, column: 124, offset: 10811 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 324, column: 1, offset: 10813 },
        end: { line: 330, column: 4, offset: 10889 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 332, column: 1, offset: 10891 },
            end: { line: 332, column: 42, offset: 10932 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 332, column: 42, offset: 10932 },
            end: { line: 332, column: 48, offset: 10938 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 332, column: 48, offset: 10938 },
            end: { line: 332, column: 65, offset: 10955 }
          }
        }
      ],
      position: {
        start: { line: 332, column: 1, offset: 10891 },
        end: { line: 332, column: 65, offset: 10955 }
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
        start: { line: 334, column: 1, offset: 10957 },
        end: { line: 341, column: 4, offset: 11108 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 343, column: 1, offset: 11110 },
            end: { line: 343, column: 42, offset: 11151 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 343, column: 42, offset: 11151 },
            end: { line: 343, column: 51, offset: 11160 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 343, column: 51, offset: 11160 },
            end: { line: 343, column: 68, offset: 11177 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 11110 },
        end: { line: 343, column: 68, offset: 11177 }
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
        start: { line: 345, column: 1, offset: 11179 },
        end: { line: 355, column: 4, offset: 11332 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 357, column: 1, offset: 11334 },
            end: { line: 357, column: 49, offset: 11382 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 357, column: 49, offset: 11382 },
            end: { line: 357, column: 59, offset: 11392 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 357, column: 59, offset: 11392 },
            end: { line: 357, column: 65, offset: 11398 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 11334 },
        end: { line: 357, column: 65, offset: 11398 }
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
        start: { line: 359, column: 1, offset: 11400 },
        end: { line: 372, column: 4, offset: 11665 }
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
            start: { line: 374, column: 5, offset: 11671 },
            end: { line: 374, column: 53, offset: 11719 }
          }
        }
      ],
      position: {
        start: { line: 374, column: 1, offset: 11667 },
        end: { line: 374, column: 53, offset: 11719 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 376, column: 1, offset: 11721 },
            end: { line: 376, column: 323, offset: 12043 }
          }
        }
      ],
      position: {
        start: { line: 376, column: 1, offset: 11721 },
        end: { line: 376, column: 323, offset: 12043 }
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
            start: { line: 378, column: 4, offset: 12048 },
            end: { line: 378, column: 23, offset: 12067 }
          }
        }
      ],
      position: {
        start: { line: 378, column: 1, offset: 12045 },
        end: { line: 378, column: 23, offset: 12067 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 379, column: 1, offset: 12068 },
            end: { line: 379, column: 115, offset: 12182 }
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
                start: { line: 379, column: 116, offset: 12183 },
                end: { line: 379, column: 133, offset: 12200 }
              }
            }
          ],
          position: {
            start: { line: 379, column: 115, offset: 12182 },
            end: { line: 379, column: 243, offset: 12310 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 379, column: 243, offset: 12310 },
            end: { line: 379, column: 409, offset: 12476 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 379, column: 409, offset: 12476 },
            end: { line: 379, column: 419, offset: 12486 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 379, column: 419, offset: 12486 },
            end: { line: 379, column: 425, offset: 12492 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12068 },
        end: { line: 379, column: 425, offset: 12492 }
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
        start: { line: 381, column: 1, offset: 12494 },
        end: { line: 399, column: 4, offset: 12923 }
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
            start: { line: 401, column: 5, offset: 12929 },
            end: { line: 401, column: 22, offset: 12946 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 12925 },
        end: { line: 401, column: 22, offset: 12946 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 402, column: 1, offset: 12947 },
            end: { line: 402, column: 78, offset: 13024 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 402, column: 78, offset: 13024 },
            end: { line: 402, column: 99, offset: 13045 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 402, column: 99, offset: 13045 },
            end: { line: 402, column: 252, offset: 13198 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 402, column: 252, offset: 13198 },
            end: { line: 402, column: 258, offset: 13204 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 402, column: 258, offset: 13204 },
            end: { line: 402, column: 259, offset: 13205 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12947 },
        end: { line: 402, column: 259, offset: 13205 }
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
        start: { line: 404, column: 1, offset: 13207 },
        end: { line: 412, column: 4, offset: 13368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 414, column: 1, offset: 13370 },
            end: { line: 414, column: 73, offset: 13442 }
          }
        }
      ],
      position: {
        start: { line: 414, column: 1, offset: 13370 },
        end: { line: 414, column: 73, offset: 13442 }
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
        start: { line: 416, column: 1, offset: 13444 },
        end: { line: 447, column: 4, offset: 13902 }
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
            start: { line: 449, column: 5, offset: 13908 },
            end: { line: 449, column: 39, offset: 13942 }
          }
        }
      ],
      position: {
        start: { line: 449, column: 1, offset: 13904 },
        end: { line: 449, column: 39, offset: 13942 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 450, column: 1, offset: 13943 },
            end: { line: 450, column: 103, offset: 14045 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 450, column: 103, offset: 14045 },
            end: { line: 450, column: 120, offset: 14062 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 450, column: 120, offset: 14062 },
            end: { line: 450, column: 136, offset: 14078 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 450, column: 136, offset: 14078 },
            end: { line: 450, column: 143, offset: 14085 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 450, column: 143, offset: 14085 },
            end: { line: 450, column: 152, offset: 14094 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13943 },
        end: { line: 450, column: 152, offset: 14094 }
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
        start: { line: 452, column: 1, offset: 14096 },
        end: { line: 470, column: 4, offset: 14462 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 472, column: 1, offset: 14464 },
            end: { line: 472, column: 159, offset: 14622 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 472, column: 159, offset: 14622 },
            end: { line: 472, column: 182, offset: 14645 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 472, column: 182, offset: 14645 },
            end: { line: 472, column: 183, offset: 14646 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 1, offset: 14464 },
        end: { line: 472, column: 183, offset: 14646 }
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
        start: { line: 474, column: 1, offset: 14648 },
        end: { line: 511, column: 4, offset: 15130 }
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
            start: { line: 513, column: 4, offset: 15135 },
            end: { line: 513, column: 27, offset: 15158 }
          }
        }
      ],
      position: {
        start: { line: 513, column: 1, offset: 15132 },
        end: { line: 513, column: 27, offset: 15158 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 514, column: 1, offset: 15159 },
            end: { line: 514, column: 184, offset: 15342 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15159 },
        end: { line: 514, column: 184, offset: 15342 }
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
            start: { line: 516, column: 5, offset: 15348 },
            end: { line: 516, column: 12, offset: 15355 }
          }
        }
      ],
      position: {
        start: { line: 516, column: 1, offset: 15344 },
        end: { line: 516, column: 12, offset: 15355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 518, column: 1, offset: 15357 },
            end: { line: 518, column: 143, offset: 15499 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 518, column: 143, offset: 15499 },
            end: { line: 518, column: 150, offset: 15506 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 518, column: 150, offset: 15506 },
            end: { line: 518, column: 157, offset: 15513 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 518, column: 157, offset: 15513 },
            end: { line: 518, column: 165, offset: 15521 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 518, column: 165, offset: 15521 },
            end: { line: 518, column: 173, offset: 15529 }
          }
        }
      ],
      position: {
        start: { line: 518, column: 1, offset: 15357 },
        end: { line: 518, column: 173, offset: 15529 }
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
        start: { line: 520, column: 1, offset: 15531 },
        end: { line: 528, column: 4, offset: 15829 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 530, column: 1, offset: 15831 },
            end: { line: 530, column: 15, offset: 15845 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 15, offset: 15845 },
            end: { line: 530, column: 22, offset: 15852 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 530, column: 22, offset: 15852 },
            end: { line: 530, column: 166, offset: 15996 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 530, column: 166, offset: 15996 },
            end: { line: 530, column: 173, offset: 16003 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 530, column: 173, offset: 16003 },
            end: { line: 530, column: 222, offset: 16052 }
          }
        }
      ],
      position: {
        start: { line: 530, column: 1, offset: 15831 },
        end: { line: 530, column: 222, offset: 16052 }
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
        start: { line: 532, column: 1, offset: 16054 },
        end: { line: 544, column: 4, offset: 16359 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 546, column: 1, offset: 16361 },
            end: { line: 546, column: 15, offset: 16375 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 546, column: 15, offset: 16375 },
            end: { line: 546, column: 23, offset: 16383 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 546, column: 23, offset: 16383 },
            end: { line: 546, column: 74, offset: 16434 }
          }
        }
      ],
      position: {
        start: { line: 546, column: 1, offset: 16361 },
        end: { line: 546, column: 74, offset: 16434 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 548, column: 1, offset: 16436 },
        end: { line: 552, column: 4, offset: 16521 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 554, column: 1, offset: 16523 },
            end: { line: 554, column: 38, offset: 16560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 554, column: 38, offset: 16560 },
            end: { line: 554, column: 47, offset: 16569 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 554, column: 47, offset: 16569 },
            end: { line: 554, column: 60, offset: 16582 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 16523 },
        end: { line: 554, column: 60, offset: 16582 }
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
        start: { line: 556, column: 1, offset: 16584 },
        end: { line: 576, column: 4, offset: 17001 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 578, column: 1, offset: 17003 },
            end: { line: 578, column: 22, offset: 17024 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 578, column: 22, offset: 17024 },
            end: { line: 578, column: 32, offset: 17034 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 578, column: 32, offset: 17034 },
            end: { line: 578, column: 37, offset: 17039 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 578, column: 37, offset: 17039 },
            end: { line: 578, column: 46, offset: 17048 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 578, column: 46, offset: 17048 },
            end: { line: 578, column: 62, offset: 17064 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 578, column: 62, offset: 17064 },
            end: { line: 578, column: 71, offset: 17073 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 578, column: 71, offset: 17073 },
            end: { line: 578, column: 98, offset: 17100 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 17003 },
        end: { line: 578, column: 98, offset: 17100 }
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
        start: { line: 580, column: 1, offset: 17102 },
        end: { line: 586, column: 4, offset: 17345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 588, column: 1, offset: 17347 },
            end: { line: 588, column: 112, offset: 17458 }
          }
        }
      ],
      position: {
        start: { line: 588, column: 1, offset: 17347 },
        end: { line: 588, column: 112, offset: 17458 }
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
        start: { line: 590, column: 1, offset: 17460 },
        end: { line: 602, column: 4, offset: 17797 }
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
            start: { line: 604, column: 5, offset: 17803 },
            end: { line: 604, column: 16, offset: 17814 }
          }
        }
      ],
      position: {
        start: { line: 604, column: 1, offset: 17799 },
        end: { line: 604, column: 16, offset: 17814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 606, column: 1, offset: 17816 },
            end: { line: 606, column: 5, offset: 17820 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 5, offset: 17820 },
            end: { line: 606, column: 21, offset: 17836 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 606, column: 21, offset: 17836 },
            end: { line: 606, column: 52, offset: 17867 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 52, offset: 17867 },
            end: { line: 606, column: 59, offset: 17874 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 606, column: 59, offset: 17874 },
            end: { line: 606, column: 145, offset: 17960 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 606, column: 145, offset: 17960 },
            end: { line: 606, column: 152, offset: 17967 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 606, column: 152, offset: 17967 },
            end: { line: 606, column: 169, offset: 17984 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 606, column: 169, offset: 17984 },
            end: { line: 606, column: 185, offset: 18000 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 606, column: 185, offset: 18000 },
            end: { line: 606, column: 246, offset: 18061 }
          }
        }
      ],
      position: {
        start: { line: 606, column: 1, offset: 17816 },
        end: { line: 606, column: 246, offset: 18061 }
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
        start: { line: 608, column: 1, offset: 18063 },
        end: { line: 627, column: 4, offset: 18602 }
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
            start: { line: 629, column: 4, offset: 18607 },
            end: { line: 629, column: 36, offset: 18639 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 1, offset: 18604 },
        end: { line: 629, column: 36, offset: 18639 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 630, column: 1, offset: 18640 },
            end: { line: 630, column: 143, offset: 18782 }
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
                start: { line: 630, column: 144, offset: 18783 },
                end: { line: 630, column: 167, offset: 18806 }
              }
            }
          ],
          position: {
            start: { line: 630, column: 143, offset: 18782 },
            end: { line: 630, column: 303, offset: 18942 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 630, column: 303, offset: 18942 },
            end: { line: 630, column: 367, offset: 19006 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 630, column: 367, offset: 19006 },
            end: { line: 630, column: 384, offset: 19023 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 630, column: 384, offset: 19023 },
            end: { line: 630, column: 424, offset: 19063 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 630, column: 424, offset: 19063 },
            end: { line: 630, column: 440, offset: 19079 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 630, column: 440, offset: 19079 },
            end: { line: 630, column: 446, offset: 19085 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18640 },
        end: { line: 630, column: 446, offset: 19085 }
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
            start: { line: 632, column: 5, offset: 19091 },
            end: { line: 632, column: 28, offset: 19114 }
          }
        }
      ],
      position: {
        start: { line: 632, column: 1, offset: 19087 },
        end: { line: 632, column: 28, offset: 19114 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 633, column: 1, offset: 19115 },
            end: { line: 633, column: 84, offset: 19198 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 633, column: 84, offset: 19198 },
            end: { line: 633, column: 110, offset: 19224 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 633, column: 110, offset: 19224 },
            end: { line: 633, column: 276, offset: 19390 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 633, column: 276, offset: 19390 },
            end: { line: 633, column: 282, offset: 19396 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 633, column: 282, offset: 19396 },
            end: { line: 633, column: 283, offset: 19397 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19115 },
        end: { line: 633, column: 283, offset: 19397 }
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
        start: { line: 635, column: 1, offset: 19399 },
        end: { line: 643, column: 4, offset: 19587 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 645, column: 1, offset: 19589 },
            end: { line: 645, column: 79, offset: 19667 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 19589 },
        end: { line: 645, column: 79, offset: 19667 }
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
        start: { line: 647, column: 1, offset: 19669 },
        end: { line: 678, column: 4, offset: 20164 }
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
            start: { line: 680, column: 5, offset: 20170 },
            end: { line: 680, column: 51, offset: 20216 }
          }
        }
      ],
      position: {
        start: { line: 680, column: 1, offset: 20166 },
        end: { line: 680, column: 51, offset: 20216 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 681, column: 1, offset: 20217 },
            end: { line: 681, column: 35, offset: 20251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 681, column: 35, offset: 20251 },
            end: { line: 681, column: 58, offset: 20274 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 681, column: 58, offset: 20274 },
            end: { line: 681, column: 70, offset: 20286 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 681, column: 70, offset: 20286 },
            end: { line: 681, column: 77, offset: 20293 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 681, column: 77, offset: 20293 },
            end: { line: 681, column: 122, offset: 20338 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 681, column: 122, offset: 20338 },
            end: { line: 681, column: 138, offset: 20354 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 681, column: 138, offset: 20354 },
            end: { line: 681, column: 146, offset: 20362 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20217 },
        end: { line: 681, column: 146, offset: 20362 }
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
        start: { line: 683, column: 1, offset: 20364 },
        end: { line: 701, column: 4, offset: 20811 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 703, column: 1, offset: 20813 },
            end: { line: 703, column: 184, offset: 20996 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 703, column: 184, offset: 20996 },
            end: { line: 703, column: 218, offset: 21030 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 703, column: 218, offset: 21030 },
            end: { line: 703, column: 219, offset: 21031 }
          }
        }
      ],
      position: {
        start: { line: 703, column: 1, offset: 20813 },
        end: { line: 703, column: 219, offset: 21031 }
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
        start: { line: 705, column: 1, offset: 21033 },
        end: { line: 741, column: 4, offset: 21560 }
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
            start: { line: 743, column: 4, offset: 21565 },
            end: { line: 743, column: 24, offset: 21585 }
          }
        }
      ],
      position: {
        start: { line: 743, column: 1, offset: 21562 },
        end: { line: 743, column: 24, offset: 21585 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 744, column: 1, offset: 21586 },
            end: { line: 744, column: 253, offset: 21838 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21586 },
        end: { line: 744, column: 253, offset: 21838 }
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
            start: { line: 746, column: 5, offset: 21844 },
            end: { line: 746, column: 12, offset: 21851 }
          }
        }
      ],
      position: {
        start: { line: 746, column: 1, offset: 21840 },
        end: { line: 746, column: 12, offset: 21851 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 748, column: 1, offset: 21853 },
            end: { line: 748, column: 64, offset: 21916 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 64, offset: 21916 },
            end: { line: 748, column: 70, offset: 21922 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 748, column: 70, offset: 21922 },
            end: { line: 748, column: 103, offset: 21955 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 748, column: 103, offset: 21955 },
            end: { line: 748, column: 109, offset: 21961 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 748, column: 109, offset: 21961 },
            end: { line: 748, column: 143, offset: 21995 }
          }
        }
      ],
      position: {
        start: { line: 748, column: 1, offset: 21853 },
        end: { line: 748, column: 143, offset: 21995 }
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
                    start: { line: 750, column: 5, offset: 22001 },
                    end: { line: 750, column: 50, offset: 22046 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 750, column: 50, offset: 22046 },
                    end: { line: 750, column: 58, offset: 22054 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 750, column: 58, offset: 22054 },
                    end: { line: 750, column: 119, offset: 22115 }
                  }
                }
              ],
              position: {
                start: { line: 750, column: 5, offset: 22001 },
                end: { line: 750, column: 119, offset: 22115 }
              }
            }
          ],
          position: {
            start: { line: 750, column: 2, offset: 21998 },
            end: { line: 750, column: 119, offset: 22115 }
          }
        }
      ],
      position: {
        start: { line: 750, column: 2, offset: 21998 },
        end: { line: 750, column: 119, offset: 22115 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 752, column: 1, offset: 22117 },
        end: { line: 757, column: 4, offset: 22194 }
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
        start: { line: 759, column: 1, offset: 22196 },
        end: { line: 766, column: 4, offset: 22340 }
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
                    start: { line: 768, column: 5, offset: 22346 },
                    end: { line: 768, column: 63, offset: 22404 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 63, offset: 22404 },
                    end: { line: 768, column: 69, offset: 22410 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 768, column: 69, offset: 22410 },
                    end: { line: 768, column: 126, offset: 22467 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 768, column: 126, offset: 22467 },
                    end: { line: 768, column: 132, offset: 22473 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 768, column: 132, offset: 22473 },
                    end: { line: 768, column: 143, offset: 22484 }
                  }
                }
              ],
              position: {
                start: { line: 768, column: 5, offset: 22346 },
                end: { line: 768, column: 143, offset: 22484 }
              }
            }
          ],
          position: {
            start: { line: 768, column: 2, offset: 22343 },
            end: { line: 768, column: 143, offset: 22484 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 2, offset: 22343 },
        end: { line: 768, column: 143, offset: 22484 }
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
        start: { line: 770, column: 1, offset: 22486 },
        end: { line: 775, column: 4, offset: 22582 }
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
        start: { line: 777, column: 1, offset: 22584 },
        end: { line: 785, column: 4, offset: 22765 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 787, column: 1, offset: 22767 },
            end: { line: 787, column: 65, offset: 22831 }
          }
        }
      ],
      position: {
        start: { line: 787, column: 1, offset: 22767 },
        end: { line: 787, column: 65, offset: 22831 }
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
                    start: { line: 788, column: 4, offset: 22835 },
                    end: { line: 788, column: 11, offset: 22842 }
                  }
                }
              ],
              position: {
                start: { line: 788, column: 4, offset: 22835 },
                end: { line: 788, column: 11, offset: 22842 }
              }
            }
          ],
          position: {
            start: { line: 788, column: 2, offset: 22833 },
            end: { line: 788, column: 11, offset: 22842 }
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
                    start: { line: 789, column: 4, offset: 22846 },
                    end: { line: 789, column: 9, offset: 22851 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22846 },
                end: { line: 789, column: 9, offset: 22851 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22844 },
            end: { line: 789, column: 9, offset: 22851 }
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
                    start: { line: 790, column: 4, offset: 22855 },
                    end: { line: 790, column: 9, offset: 22860 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22855 },
                end: { line: 790, column: 9, offset: 22860 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22853 },
            end: { line: 790, column: 9, offset: 22860 }
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
                    start: { line: 791, column: 4, offset: 22864 },
                    end: { line: 791, column: 15, offset: 22875 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22864 },
                end: { line: 791, column: 15, offset: 22875 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22862 },
            end: { line: 791, column: 15, offset: 22875 }
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
                    start: { line: 792, column: 4, offset: 22879 },
                    end: { line: 792, column: 21, offset: 22896 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22879 },
                end: { line: 792, column: 21, offset: 22896 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22877 },
            end: { line: 792, column: 21, offset: 22896 }
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
                    start: { line: 793, column: 4, offset: 22900 },
                    end: { line: 793, column: 12, offset: 22908 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22900 },
                end: { line: 793, column: 12, offset: 22908 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22898 },
            end: { line: 793, column: 12, offset: 22908 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 2, offset: 22833 },
        end: { line: 793, column: 12, offset: 22908 }
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
            start: { line: 795, column: 5, offset: 22914 },
            end: { line: 795, column: 15, offset: 22924 }
          }
        }
      ],
      position: {
        start: { line: 795, column: 1, offset: 22910 },
        end: { line: 795, column: 15, offset: 22924 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 797, column: 1, offset: 22926 },
            end: { line: 797, column: 67, offset: 22992 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 67, offset: 22992 },
            end: { line: 797, column: 76, offset: 23001 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 797, column: 76, offset: 23001 },
            end: { line: 797, column: 109, offset: 23034 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 797, column: 109, offset: 23034 },
            end: { line: 797, column: 118, offset: 23043 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 797, column: 118, offset: 23043 },
            end: { line: 797, column: 154, offset: 23079 }
          }
        }
      ],
      position: {
        start: { line: 797, column: 1, offset: 22926 },
        end: { line: 797, column: 154, offset: 23079 }
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
                    start: { line: 799, column: 5, offset: 23085 },
                    end: { line: 799, column: 97, offset: 23177 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 97, offset: 23177 },
                    end: { line: 799, column: 106, offset: 23186 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 799, column: 106, offset: 23186 },
                    end: { line: 799, column: 209, offset: 23289 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 799, column: 209, offset: 23289 },
                    end: { line: 799, column: 218, offset: 23298 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 799, column: 218, offset: 23298 },
                    end: { line: 799, column: 219, offset: 23299 }
                  }
                }
              ],
              position: {
                start: { line: 799, column: 5, offset: 23085 },
                end: { line: 799, column: 219, offset: 23299 }
              }
            }
          ],
          position: {
            start: { line: 799, column: 2, offset: 23082 },
            end: { line: 799, column: 219, offset: 23299 }
          }
        }
      ],
      position: {
        start: { line: 799, column: 2, offset: 23082 },
        end: { line: 799, column: 219, offset: 23299 }
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
        start: { line: 801, column: 1, offset: 23301 },
        end: { line: 806, column: 4, offset: 23416 }
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
        start: { line: 808, column: 1, offset: 23418 },
        end: { line: 816, column: 4, offset: 23617 }
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
                    start: { line: 818, column: 5, offset: 23623 },
                    end: { line: 818, column: 121, offset: 23739 }
                  }
                }
              ],
              position: {
                start: { line: 818, column: 5, offset: 23623 },
                end: { line: 818, column: 121, offset: 23739 }
              }
            }
          ],
          position: {
            start: { line: 818, column: 2, offset: 23620 },
            end: { line: 818, column: 121, offset: 23739 }
          }
        }
      ],
      position: {
        start: { line: 818, column: 2, offset: 23620 },
        end: { line: 818, column: 121, offset: 23739 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 820, column: 1, offset: 23741 },
        end: { line: 825, column: 4, offset: 23829 }
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
        start: { line: 827, column: 1, offset: 23831 },
        end: { line: 832, column: 4, offset: 23955 }
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
                    start: { line: 834, column: 5, offset: 23961 },
                    end: { line: 834, column: 159, offset: 24115 }
                  }
                }
              ],
              position: {
                start: { line: 834, column: 5, offset: 23961 },
                end: { line: 834, column: 159, offset: 24115 }
              }
            }
          ],
          position: {
            start: { line: 834, column: 2, offset: 23958 },
            end: { line: 834, column: 159, offset: 24115 }
          }
        }
      ],
      position: {
        start: { line: 834, column: 2, offset: 23958 },
        end: { line: 834, column: 159, offset: 24115 }
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
        start: { line: 836, column: 1, offset: 24117 },
        end: { line: 841, column: 4, offset: 24228 }
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
        start: { line: 843, column: 1, offset: 24230 },
        end: { line: 849, column: 4, offset: 24411 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 851, column: 1, offset: 24413 },
            end: { line: 851, column: 68, offset: 24480 }
          }
        }
      ],
      position: {
        start: { line: 851, column: 1, offset: 24413 },
        end: { line: 851, column: 68, offset: 24480 }
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
                    start: { line: 852, column: 4, offset: 24484 },
                    end: { line: 852, column: 11, offset: 24491 }
                  }
                }
              ],
              position: {
                start: { line: 852, column: 4, offset: 24484 },
                end: { line: 852, column: 11, offset: 24491 }
              }
            }
          ],
          position: {
            start: { line: 852, column: 2, offset: 24482 },
            end: { line: 852, column: 11, offset: 24491 }
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
                    start: { line: 853, column: 4, offset: 24495 },
                    end: { line: 853, column: 9, offset: 24500 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24495 },
                end: { line: 853, column: 9, offset: 24500 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24493 },
            end: { line: 853, column: 9, offset: 24500 }
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
                    start: { line: 854, column: 4, offset: 24504 },
                    end: { line: 854, column: 9, offset: 24509 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24504 },
                end: { line: 854, column: 9, offset: 24509 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24502 },
            end: { line: 854, column: 9, offset: 24509 }
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
                    start: { line: 855, column: 4, offset: 24513 },
                    end: { line: 855, column: 15, offset: 24524 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24513 },
                end: { line: 855, column: 15, offset: 24524 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24511 },
            end: { line: 855, column: 15, offset: 24524 }
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
                    start: { line: 856, column: 4, offset: 24528 },
                    end: { line: 856, column: 21, offset: 24545 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24528 },
                end: { line: 856, column: 21, offset: 24545 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24526 },
            end: { line: 856, column: 21, offset: 24545 }
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
                    start: { line: 857, column: 4, offset: 24549 },
                    end: { line: 857, column: 12, offset: 24557 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24549 },
                end: { line: 857, column: 12, offset: 24557 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24547 },
            end: { line: 857, column: 12, offset: 24557 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 2, offset: 24482 },
        end: { line: 857, column: 12, offset: 24557 }
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
            start: { line: 859, column: 5, offset: 24563 },
            end: { line: 859, column: 13, offset: 24571 }
          }
        }
      ],
      position: {
        start: { line: 859, column: 1, offset: 24559 },
        end: { line: 859, column: 13, offset: 24571 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 861, column: 1, offset: 24573 },
            end: { line: 861, column: 65, offset: 24637 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 65, offset: 24637 },
            end: { line: 861, column: 74, offset: 24646 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 861, column: 74, offset: 24646 },
            end: { line: 861, column: 107, offset: 24679 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 861, column: 107, offset: 24679 },
            end: { line: 861, column: 116, offset: 24688 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 861, column: 116, offset: 24688 },
            end: { line: 861, column: 151, offset: 24723 }
          }
        }
      ],
      position: {
        start: { line: 861, column: 1, offset: 24573 },
        end: { line: 861, column: 152, offset: 24724 }
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
                    start: { line: 863, column: 5, offset: 24730 },
                    end: { line: 863, column: 86, offset: 24811 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 863, column: 86, offset: 24811 },
                    end: { line: 863, column: 95, offset: 24820 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 863, column: 95, offset: 24820 },
                    end: { line: 863, column: 253, offset: 24978 }
                  }
                }
              ],
              position: {
                start: { line: 863, column: 5, offset: 24730 },
                end: { line: 863, column: 253, offset: 24978 }
              }
            }
          ],
          position: {
            start: { line: 863, column: 2, offset: 24727 },
            end: { line: 863, column: 253, offset: 24978 }
          }
        }
      ],
      position: {
        start: { line: 863, column: 2, offset: 24727 },
        end: { line: 863, column: 253, offset: 24978 }
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
        start: { line: 865, column: 1, offset: 24980 },
        end: { line: 872, column: 4, offset: 25150 }
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
        start: { line: 874, column: 1, offset: 25152 },
        end: { line: 884, column: 4, offset: 25386 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 886, column: 1, offset: 25388 },
            end: { line: 886, column: 66, offset: 25453 }
          }
        }
      ],
      position: {
        start: { line: 886, column: 1, offset: 25388 },
        end: { line: 886, column: 66, offset: 25453 }
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
                    start: { line: 887, column: 4, offset: 25457 },
                    end: { line: 887, column: 11, offset: 25464 }
                  }
                }
              ],
              position: {
                start: { line: 887, column: 4, offset: 25457 },
                end: { line: 887, column: 11, offset: 25464 }
              }
            }
          ],
          position: {
            start: { line: 887, column: 2, offset: 25455 },
            end: { line: 887, column: 11, offset: 25464 }
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
                    start: { line: 888, column: 4, offset: 25468 },
                    end: { line: 888, column: 9, offset: 25473 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25468 },
                end: { line: 888, column: 9, offset: 25473 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25466 },
            end: { line: 888, column: 9, offset: 25473 }
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
                    start: { line: 889, column: 4, offset: 25477 },
                    end: { line: 889, column: 9, offset: 25482 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25477 },
                end: { line: 889, column: 9, offset: 25482 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25475 },
            end: { line: 889, column: 9, offset: 25482 }
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
                    start: { line: 890, column: 4, offset: 25486 },
                    end: { line: 890, column: 15, offset: 25497 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25486 },
                end: { line: 890, column: 15, offset: 25497 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25484 },
            end: { line: 890, column: 15, offset: 25497 }
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
                    start: { line: 891, column: 4, offset: 25501 },
                    end: { line: 891, column: 21, offset: 25518 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25501 },
                end: { line: 891, column: 21, offset: 25518 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25499 },
            end: { line: 891, column: 21, offset: 25518 }
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
                    start: { line: 892, column: 4, offset: 25522 },
                    end: { line: 892, column: 12, offset: 25530 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25522 },
                end: { line: 892, column: 12, offset: 25530 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25520 },
            end: { line: 892, column: 12, offset: 25530 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 2, offset: 25455 },
        end: { line: 892, column: 12, offset: 25530 }
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
            start: { line: 894, column: 5, offset: 25536 },
            end: { line: 894, column: 14, offset: 25545 }
          }
        }
      ],
      position: {
        start: { line: 894, column: 1, offset: 25532 },
        end: { line: 894, column: 14, offset: 25545 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 896, column: 1, offset: 25547 },
            end: { line: 896, column: 66, offset: 25612 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 66, offset: 25612 },
            end: { line: 896, column: 75, offset: 25621 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 896, column: 75, offset: 25621 },
            end: { line: 896, column: 108, offset: 25654 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 896, column: 108, offset: 25654 },
            end: { line: 896, column: 117, offset: 25663 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 896, column: 117, offset: 25663 },
            end: { line: 896, column: 152, offset: 25698 }
          }
        }
      ],
      position: {
        start: { line: 896, column: 1, offset: 25547 },
        end: { line: 896, column: 152, offset: 25698 }
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
                    start: { line: 898, column: 5, offset: 25704 },
                    end: { line: 898, column: 123, offset: 25822 }
                  }
                }
              ],
              position: {
                start: { line: 898, column: 5, offset: 25704 },
                end: { line: 898, column: 123, offset: 25822 }
              }
            }
          ],
          position: {
            start: { line: 898, column: 2, offset: 25701 },
            end: { line: 898, column: 123, offset: 25822 }
          }
        }
      ],
      position: {
        start: { line: 898, column: 2, offset: 25701 },
        end: { line: 898, column: 123, offset: 25822 }
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
        start: { line: 900, column: 1, offset: 25824 },
        end: { line: 905, column: 4, offset: 25937 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 907, column: 1, offset: 25939 },
        end: { line: 910, column: 4, offset: 26049 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 912, column: 1, offset: 26051 },
            end: { line: 912, column: 67, offset: 26117 }
          }
        }
      ],
      position: {
        start: { line: 912, column: 1, offset: 26051 },
        end: { line: 912, column: 67, offset: 26117 }
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
                    start: { line: 913, column: 4, offset: 26121 },
                    end: { line: 913, column: 11, offset: 26128 }
                  }
                }
              ],
              position: {
                start: { line: 913, column: 4, offset: 26121 },
                end: { line: 913, column: 11, offset: 26128 }
              }
            }
          ],
          position: {
            start: { line: 913, column: 2, offset: 26119 },
            end: { line: 913, column: 11, offset: 26128 }
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
                    start: { line: 914, column: 4, offset: 26132 },
                    end: { line: 914, column: 12, offset: 26140 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26132 },
                end: { line: 914, column: 12, offset: 26140 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26130 },
            end: { line: 914, column: 12, offset: 26140 }
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
                    start: { line: 915, column: 4, offset: 26144 },
                    end: { line: 915, column: 9, offset: 26149 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26144 },
                end: { line: 915, column: 9, offset: 26149 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26142 },
            end: { line: 915, column: 9, offset: 26149 }
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
                    start: { line: 916, column: 4, offset: 26153 },
                    end: { line: 916, column: 12, offset: 26161 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26153 },
                end: { line: 916, column: 12, offset: 26161 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26151 },
            end: { line: 916, column: 12, offset: 26161 }
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
                    start: { line: 917, column: 4, offset: 26165 },
                    end: { line: 917, column: 12, offset: 26173 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26165 },
                end: { line: 917, column: 12, offset: 26173 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26163 },
            end: { line: 917, column: 12, offset: 26173 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 2, offset: 26119 },
        end: { line: 917, column: 12, offset: 26173 }
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
            start: { line: 919, column: 5, offset: 26179 },
            end: { line: 919, column: 10, offset: 26184 }
          }
        }
      ],
      position: {
        start: { line: 919, column: 1, offset: 26175 },
        end: { line: 919, column: 10, offset: 26184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 921, column: 1, offset: 26186 },
            end: { line: 921, column: 62, offset: 26247 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 62, offset: 26247 },
            end: { line: 921, column: 72, offset: 26257 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 72, offset: 26257 },
            end: { line: 921, column: 76, offset: 26261 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 76, offset: 26261 },
            end: { line: 921, column: 84, offset: 26269 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 921, column: 84, offset: 26269 },
            end: { line: 921, column: 118, offset: 26303 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 921, column: 118, offset: 26303 },
            end: { line: 921, column: 128, offset: 26313 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 921, column: 128, offset: 26313 },
            end: { line: 921, column: 132, offset: 26317 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 921, column: 132, offset: 26317 },
            end: { line: 921, column: 140, offset: 26325 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 921, column: 140, offset: 26325 },
            end: { line: 921, column: 172, offset: 26357 }
          }
        }
      ],
      position: {
        start: { line: 921, column: 1, offset: 26186 },
        end: { line: 921, column: 172, offset: 26357 }
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
                    start: { line: 923, column: 5, offset: 26363 },
                    end: { line: 923, column: 77, offset: 26435 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 923, column: 77, offset: 26435 },
                    end: { line: 923, column: 87, offset: 26445 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 923, column: 87, offset: 26445 },
                    end: { line: 923, column: 91, offset: 26449 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 923, column: 91, offset: 26449 },
                    end: { line: 923, column: 99, offset: 26457 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 923, column: 99, offset: 26457 },
                    end: { line: 923, column: 177, offset: 26535 }
                  }
                }
              ],
              position: {
                start: { line: 923, column: 5, offset: 26363 },
                end: { line: 923, column: 177, offset: 26535 }
              }
            }
          ],
          position: {
            start: { line: 923, column: 2, offset: 26360 },
            end: { line: 923, column: 177, offset: 26535 }
          }
        }
      ],
      position: {
        start: { line: 923, column: 2, offset: 26360 },
        end: { line: 923, column: 177, offset: 26535 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 925, column: 1, offset: 26537 },
        end: { line: 930, column: 4, offset: 26610 }
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
        start: { line: 932, column: 1, offset: 26612 },
        end: { line: 940, column: 4, offset: 26774 }
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
                    start: { line: 942, column: 5, offset: 26780 },
                    end: { line: 942, column: 119, offset: 26894 }
                  }
                }
              ],
              position: {
                start: { line: 942, column: 5, offset: 26780 },
                end: { line: 942, column: 119, offset: 26894 }
              }
            }
          ],
          position: {
            start: { line: 942, column: 2, offset: 26777 },
            end: { line: 942, column: 119, offset: 26894 }
          }
        }
      ],
      position: {
        start: { line: 942, column: 2, offset: 26777 },
        end: { line: 942, column: 119, offset: 26894 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 944, column: 1, offset: 26896 },
        end: { line: 949, column: 4, offset: 26975 }
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
        start: { line: 951, column: 1, offset: 26977 },
        end: { line: 958, column: 4, offset: 27141 }
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
                    start: { line: 960, column: 5, offset: 27147 },
                    end: { line: 960, column: 118, offset: 27260 }
                  }
                }
              ],
              position: {
                start: { line: 960, column: 5, offset: 27147 },
                end: { line: 960, column: 118, offset: 27260 }
              }
            }
          ],
          position: {
            start: { line: 960, column: 2, offset: 27144 },
            end: { line: 960, column: 118, offset: 27260 }
          }
        }
      ],
      position: {
        start: { line: 960, column: 2, offset: 27144 },
        end: { line: 960, column: 118, offset: 27260 }
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
        start: { line: 962, column: 1, offset: 27262 },
        end: { line: 968, column: 4, offset: 27418 }
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
        start: { line: 970, column: 1, offset: 27420 },
        end: { line: 978, column: 4, offset: 27644 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 980, column: 1, offset: 27646 },
            end: { line: 980, column: 63, offset: 27708 }
          }
        }
      ],
      position: {
        start: { line: 980, column: 1, offset: 27646 },
        end: { line: 980, column: 63, offset: 27708 }
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
                    start: { line: 981, column: 4, offset: 27712 },
                    end: { line: 981, column: 11, offset: 27719 }
                  }
                }
              ],
              position: {
                start: { line: 981, column: 4, offset: 27712 },
                end: { line: 981, column: 11, offset: 27719 }
              }
            }
          ],
          position: {
            start: { line: 981, column: 2, offset: 27710 },
            end: { line: 981, column: 11, offset: 27719 }
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
                    start: { line: 982, column: 4, offset: 27723 },
                    end: { line: 982, column: 12, offset: 27731 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27723 },
                end: { line: 982, column: 12, offset: 27731 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27721 },
            end: { line: 982, column: 12, offset: 27731 }
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
                    start: { line: 983, column: 4, offset: 27735 },
                    end: { line: 983, column: 9, offset: 27740 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27735 },
                end: { line: 983, column: 9, offset: 27740 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27733 },
            end: { line: 983, column: 9, offset: 27740 }
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
                    start: { line: 984, column: 4, offset: 27744 },
                    end: { line: 984, column: 15, offset: 27755 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27744 },
                end: { line: 984, column: 15, offset: 27755 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27742 },
            end: { line: 984, column: 15, offset: 27755 }
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
                    start: { line: 985, column: 4, offset: 27759 },
                    end: { line: 985, column: 21, offset: 27776 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27759 },
                end: { line: 985, column: 21, offset: 27776 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27757 },
            end: { line: 985, column: 21, offset: 27776 }
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
                    start: { line: 986, column: 4, offset: 27780 },
                    end: { line: 986, column: 12, offset: 27788 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27780 },
                end: { line: 986, column: 12, offset: 27788 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27778 },
            end: { line: 986, column: 12, offset: 27788 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 2, offset: 27710 },
        end: { line: 986, column: 12, offset: 27788 }
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
            start: { line: 988, column: 4, offset: 27793 },
            end: { line: 988, column: 14, offset: 27803 }
          }
        }
      ],
      position: {
        start: { line: 988, column: 1, offset: 27790 },
        end: { line: 988, column: 14, offset: 27803 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Data Types in [A]synchronous Functional Programming.',
          position: {
            start: { line: 990, column: 1, offset: 27805 },
            end: { line: 990, column: 68, offset: 27872 }
          }
        }
      ],
      position: {
        start: { line: 990, column: 1, offset: 27805 },
        end: { line: 990, column: 68, offset: 27872 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are interested in getting started with Rubico and [A]synchronous Functional Programming, please visit Rubico's home page: ",
          position: {
            start: { line: 992, column: 1, offset: 27874 },
            end: { line: 992, column: 130, offset: 28003 }
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
                start: { line: 992, column: 131, offset: 28004 },
                end: { line: 992, column: 142, offset: 28015 }
              }
            }
          ],
          position: {
            start: { line: 992, column: 130, offset: 28003 },
            end: { line: 992, column: 146, offset: 28019 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 992, column: 146, offset: 28019 },
            end: { line: 992, column: 147, offset: 28020 }
          }
        }
      ],
      position: {
        start: { line: 992, column: 1, offset: 27874 },
        end: { line: 992, column: 147, offset: 28020 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 993, column: 1, offset: 28021 }
  }
}