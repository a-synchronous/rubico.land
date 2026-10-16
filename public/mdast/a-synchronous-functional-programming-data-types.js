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
        'image: /assets/monad.png\n' +
        'disable-copy-button: true',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 4, offset: 329 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Data Types in [A]synchronous Functional Programming. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 12, column: 1, offset: 331 },
            end: { line: 12, column: 186, offset: 516 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 331 },
        end: { line: 12, column: 186, offset: 516 }
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
            start: { line: 14, column: 4, offset: 521 },
            end: { line: 14, column: 24, offset: 541 }
          }
        }
      ],
      position: {
        start: { line: 14, column: 1, offset: 518 },
        end: { line: 14, column: 24, offset: 541 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 15, column: 1, offset: 542 },
            end: { line: 15, column: 250, offset: 791 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 542 },
        end: { line: 15, column: 250, offset: 791 }
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
            start: { line: 17, column: 5, offset: 797 },
            end: { line: 17, column: 11, offset: 803 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 793 },
        end: { line: 17, column: 11, offset: 803 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 19, column: 1, offset: 805 },
            end: { line: 19, column: 64, offset: 868 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 19, column: 64, offset: 868 },
            end: { line: 19, column: 67, offset: 871 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 19, column: 67, offset: 871 },
            end: { line: 19, column: 105, offset: 909 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 19, column: 105, offset: 909 },
            end: { line: 19, column: 110, offset: 914 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 19, column: 110, offset: 914 },
            end: { line: 19, column: 185, offset: 989 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 805 },
        end: { line: 19, column: 185, offset: 989 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 21, column: 1, offset: 991 },
        end: { line: 23, column: 4, offset: 1010 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 25, column: 1, offset: 1012 },
            end: { line: 25, column: 22, offset: 1033 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 25, column: 22, offset: 1033 },
            end: { line: 25, column: 30, offset: 1041 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 25, column: 30, offset: 1041 },
            end: { line: 25, column: 79, offset: 1090 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 25, column: 79, offset: 1090 },
            end: { line: 25, column: 87, offset: 1098 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 25, column: 87, offset: 1098 },
            end: { line: 25, column: 147, offset: 1158 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1012 },
        end: { line: 25, column: 147, offset: 1158 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 27, column: 1, offset: 1160 },
        end: { line: 29, column: 4, offset: 1194 }
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
            start: { line: 31, column: 5, offset: 1200 },
            end: { line: 31, column: 11, offset: 1206 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 1, offset: 1196 },
        end: { line: 31, column: 11, offset: 1206 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 33, column: 1, offset: 1208 },
            end: { line: 33, column: 56, offset: 1263 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 33, column: 56, offset: 1263 },
            end: { line: 33, column: 63, offset: 1270 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 33, column: 63, offset: 1270 },
            end: { line: 33, column: 67, offset: 1274 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 33, column: 67, offset: 1274 },
            end: { line: 33, column: 83, offset: 1290 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can write a string literal.',
          position: {
            start: { line: 33, column: 83, offset: 1290 },
            end: { line: 33, column: 255, offset: 1462 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1208 },
        end: { line: 33, column: 255, offset: 1462 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 35, column: 1, offset: 1464 },
        end: { line: 37, column: 4, offset: 1496 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 39, column: 1, offset: 1498 },
            end: { line: 39, column: 22, offset: 1519 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 39, column: 22, offset: 1519 },
            end: { line: 39, column: 30, offset: 1527 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 39, column: 30, offset: 1527 },
            end: { line: 39, column: 79, offset: 1576 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 39, column: 79, offset: 1576 },
            end: { line: 39, column: 87, offset: 1584 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 39, column: 87, offset: 1584 },
            end: { line: 39, column: 147, offset: 1644 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1498 },
        end: { line: 39, column: 147, offset: 1644 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 41, column: 1, offset: 1646 },
        end: { line: 43, column: 4, offset: 1680 }
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
            start: { line: 45, column: 5, offset: 1686 },
            end: { line: 45, column: 12, offset: 1693 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1682 },
        end: { line: 45, column: 12, offset: 1693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 47, column: 1, offset: 1695 },
            end: { line: 47, column: 63, offset: 1757 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 47, column: 63, offset: 1757 },
            end: { line: 47, column: 69, offset: 1763 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 47, column: 69, offset: 1763 },
            end: { line: 47, column: 73, offset: 1767 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 47, column: 73, offset: 1767 },
            end: { line: 47, column: 80, offset: 1774 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 47, column: 80, offset: 1774 },
            end: { line: 47, column: 135, offset: 1829 }
          }
        }
      ],
      position: {
        start: { line: 47, column: 1, offset: 1695 },
        end: { line: 47, column: 135, offset: 1829 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 49, column: 1, offset: 1831 },
        end: { line: 51, column: 4, offset: 1853 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 53, column: 1, offset: 1855 },
            end: { line: 53, column: 130, offset: 1984 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 53, column: 130, offset: 1984 },
            end: { line: 53, column: 134, offset: 1988 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 53, column: 134, offset: 1988 },
            end: { line: 53, column: 136, offset: 1990 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 53, column: 136, offset: 1990 },
            end: { line: 53, column: 139, offset: 1993 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 53, column: 139, offset: 1993 },
            end: { line: 53, column: 141, offset: 1995 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 53, column: 141, offset: 1995 },
            end: { line: 53, column: 144, offset: 1998 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 53, column: 144, offset: 1998 },
            end: { line: 53, column: 146, offset: 2000 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 53, column: 146, offset: 2000 },
            end: { line: 53, column: 150, offset: 2004 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 53, column: 150, offset: 2004 },
            end: { line: 53, column: 152, offset: 2006 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 53, column: 152, offset: 2006 },
            end: { line: 53, column: 156, offset: 2010 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 53, column: 156, offset: 2010 },
            end: { line: 53, column: 158, offset: 2012 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 53, column: 158, offset: 2012 },
            end: { line: 53, column: 162, offset: 2016 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 53, column: 162, offset: 2016 },
            end: { line: 53, column: 167, offset: 2021 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 53, column: 167, offset: 2021 },
            end: { line: 53, column: 171, offset: 2025 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 53, column: 171, offset: 2025 },
            end: { line: 53, column: 213, offset: 2067 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 53, column: 213, offset: 2067 },
            end: { line: 53, column: 217, offset: 2071 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 53, column: 217, offset: 2071 },
            end: { line: 53, column: 255, offset: 2109 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 1855 },
        end: { line: 53, column: 255, offset: 2109 }
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
        start: { line: 55, column: 1, offset: 2111 },
        end: { line: 62, column: 4, offset: 2248 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 64, column: 1, offset: 2250 },
            end: { line: 64, column: 22, offset: 2271 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 64, column: 22, offset: 2271 },
            end: { line: 64, column: 31, offset: 2280 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 64, column: 31, offset: 2280 },
            end: { line: 64, column: 64, offset: 2313 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2250 },
        end: { line: 64, column: 64, offset: 2313 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 66, column: 1, offset: 2315 },
        end: { line: 68, column: 4, offset: 2352 }
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
            start: { line: 70, column: 5, offset: 2358 },
            end: { line: 70, column: 11, offset: 2364 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2354 },
        end: { line: 70, column: 11, offset: 2364 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the ',
          position: {
            start: { line: 72, column: 1, offset: 2366 },
            end: { line: 72, column: 154, offset: 2519 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TypedArray',
          position: {
            start: { line: 72, column: 154, offset: 2519 },
            end: { line: 72, column: 166, offset: 2531 }
          }
        },
        {
          type: 'text',
          value: ' constructors to create binary data types.',
          position: {
            start: { line: 72, column: 166, offset: 2531 },
            end: { line: 72, column: 208, offset: 2573 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2366 },
        end: { line: 72, column: 208, offset: 2573 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 74, column: 1, offset: 2575 },
        end: { line: 77, column: 4, offset: 2660 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 79, column: 1, offset: 2662 },
            end: { line: 79, column: 137, offset: 2798 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2662 },
        end: { line: 79, column: 137, offset: 2798 }
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
        start: { line: 81, column: 1, offset: 2800 },
        end: { line: 87, column: 4, offset: 2971 }
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
            start: { line: 89, column: 5, offset: 2977 },
            end: { line: 89, column: 11, offset: 2983 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 2973 },
        end: { line: 89, column: 11, offset: 2983 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 91, column: 1, offset: 2985 },
            end: { line: 91, column: 54, offset: 3038 }
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
                start: { line: 91, column: 55, offset: 3039 },
                end: { line: 91, column: 64, offset: 3048 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 54, offset: 3038 },
            end: { line: 91, column: 126, offset: 3110 }
          }
        },
        {
          type: 'text',
          value: ' values, and is primarily used as identifiers for object properties.',
          position: {
            start: { line: 91, column: 126, offset: 3110 },
            end: { line: 91, column: 194, offset: 3178 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 2985 },
        end: { line: 91, column: 194, offset: 3178 }
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
        start: { line: 93, column: 1, offset: 3180 },
        end: { line: 98, column: 4, offset: 3347 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 100, column: 1, offset: 3349 },
            end: { line: 100, column: 130, offset: 3478 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 100, column: 130, offset: 3478 },
            end: { line: 100, column: 140, offset: 3488 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 100, column: 140, offset: 3488 },
            end: { line: 100, column: 150, offset: 3498 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 100, column: 150, offset: 3498 },
            end: { line: 100, column: 163, offset: 3511 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 100, column: 163, offset: 3511 },
            end: { line: 100, column: 164, offset: 3512 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 1, offset: 3349 },
        end: { line: 100, column: 164, offset: 3512 }
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
        start: { line: 102, column: 1, offset: 3514 },
        end: { line: 115, column: 4, offset: 3728 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 117, column: 1, offset: 3730 },
            end: { line: 117, column: 34, offset: 3763 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 117, column: 34, offset: 3763 },
            end: { line: 117, column: 51, offset: 3780 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 117, column: 51, offset: 3780 },
            end: { line: 117, column: 56, offset: 3785 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 117, column: 56, offset: 3785 },
            end: { line: 117, column: 78, offset: 3807 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 117, column: 78, offset: 3807 },
            end: { line: 117, column: 185, offset: 3914 }
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
                start: { line: 117, column: 186, offset: 3915 },
                end: { line: 117, column: 203, offset: 3932 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 185, offset: 3914 },
            end: { line: 117, column: 313, offset: 4042 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 117, column: 313, offset: 4042 },
            end: { line: 117, column: 318, offset: 4047 }
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
                start: { line: 117, column: 319, offset: 4048 },
                end: { line: 117, column: 342, offset: 4071 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 318, offset: 4047 },
            end: { line: 117, column: 478, offset: 4207 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 3730 },
        end: { line: 117, column: 478, offset: 4207 }
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
            start: { line: 119, column: 5, offset: 4213 },
            end: { line: 119, column: 12, offset: 4220 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 4209 },
        end: { line: 119, column: 12, offset: 4220 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 121, column: 1, offset: 4222 },
            end: { line: 121, column: 95, offset: 4316 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 121, column: 95, offset: 4316 },
            end: { line: 121, column: 101, offset: 4322 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 121, column: 101, offset: 4322 },
            end: { line: 121, column: 106, offset: 4327 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 121, column: 106, offset: 4327 },
            end: { line: 121, column: 117, offset: 4338 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 121, column: 117, offset: 4338 },
            end: { line: 121, column: 286, offset: 4507 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 121, column: 286, offset: 4507 },
            end: { line: 121, column: 292, offset: 4513 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 121, column: 292, offset: 4513 },
            end: { line: 121, column: 388, offset: 4609 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 121, column: 388, offset: 4609 },
            end: { line: 121, column: 399, offset: 4620 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes useful to return ',
          position: {
            start: { line: 121, column: 399, offset: 4620 },
            end: { line: 121, column: 441, offset: 4662 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 121, column: 441, offset: 4662 },
            end: { line: 121, column: 452, offset: 4673 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 121, column: 452, offset: 4673 },
            end: { line: 121, column: 469, offset: 4690 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4222 },
        end: { line: 121, column: 469, offset: 4690 }
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
        start: { line: 123, column: 1, offset: 4692 },
        end: { line: 136, column: 4, offset: 4970 }
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
            start: { line: 138, column: 5, offset: 4976 },
            end: { line: 138, column: 42, offset: 5013 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 4972 },
        end: { line: 138, column: 42, offset: 5013 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 139, column: 1, offset: 5014 },
            end: { line: 139, column: 329, offset: 5342 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 5014 },
        end: { line: 139, column: 329, offset: 5342 }
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
            start: { line: 141, column: 4, offset: 5347 },
            end: { line: 141, column: 25, offset: 5368 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 5344 },
        end: { line: 141, column: 25, offset: 5368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 142, column: 1, offset: 5369 },
            end: { line: 142, column: 429, offset: 5797 }
          }
        }
      ],
      position: {
        start: { line: 142, column: 1, offset: 5369 },
        end: { line: 142, column: 429, offset: 5797 }
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
            start: { line: 144, column: 5, offset: 5803 },
            end: { line: 144, column: 10, offset: 5808 }
          }
        }
      ],
      position: {
        start: { line: 144, column: 1, offset: 5799 },
        end: { line: 144, column: 10, offset: 5808 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 146, column: 1, offset: 5810 },
            end: { line: 146, column: 175, offset: 5984 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 146, column: 175, offset: 5984 },
            end: { line: 146, column: 182, offset: 5991 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 146, column: 182, offset: 5991 },
            end: { line: 146, column: 195, offset: 6004 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 5810 },
        end: { line: 146, column: 195, offset: 6004 }
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
        start: { line: 148, column: 1, offset: 6006 },
        end: { line: 156, column: 4, offset: 6273 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 158, column: 1, offset: 6275 },
            end: { line: 158, column: 56, offset: 6330 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 158, column: 56, offset: 6330 },
            end: { line: 158, column: 63, offset: 6337 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 158, column: 63, offset: 6337 },
            end: { line: 158, column: 76, offset: 6350 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 6275 },
        end: { line: 158, column: 76, offset: 6350 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 160, column: 1, offset: 6352 },
        end: { line: 163, column: 4, offset: 6465 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 165, column: 1, offset: 6467 },
            end: { line: 165, column: 40, offset: 6506 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 165, column: 40, offset: 6506 },
            end: { line: 165, column: 48, offset: 6514 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 165, column: 48, offset: 6514 },
            end: { line: 165, column: 53, offset: 6519 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 165, column: 53, offset: 6519 },
            end: { line: 165, column: 59, offset: 6525 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 165, column: 59, offset: 6525 },
            end: { line: 165, column: 83, offset: 6549 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 6467 },
        end: { line: 165, column: 83, offset: 6549 }
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
        start: { line: 167, column: 1, offset: 6551 },
        end: { line: 172, column: 4, offset: 6678 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 174, column: 1, offset: 6680 },
            end: { line: 174, column: 42, offset: 6721 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 174, column: 42, offset: 6721 },
            end: { line: 174, column: 49, offset: 6728 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 174, column: 49, offset: 6728 },
            end: { line: 174, column: 66, offset: 6745 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 6680 },
        end: { line: 174, column: 66, offset: 6745 }
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
        start: { line: 176, column: 1, offset: 6747 },
        end: { line: 182, column: 4, offset: 6852 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 184, column: 1, offset: 6854 },
            end: { line: 184, column: 42, offset: 6895 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 184, column: 42, offset: 6895 },
            end: { line: 184, column: 51, offset: 6904 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 184, column: 51, offset: 6904 },
            end: { line: 184, column: 68, offset: 6921 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 6854 },
        end: { line: 184, column: 68, offset: 6921 }
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
        start: { line: 186, column: 1, offset: 6923 },
        end: { line: 192, column: 4, offset: 7074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 194, column: 1, offset: 7076 },
            end: { line: 194, column: 52, offset: 7127 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 194, column: 52, offset: 7127 },
            end: { line: 194, column: 62, offset: 7137 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 194, column: 62, offset: 7137 },
            end: { line: 194, column: 68, offset: 7143 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 7076 },
        end: { line: 194, column: 68, offset: 7143 }
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
        start: { line: 196, column: 1, offset: 7145 },
        end: { line: 207, column: 4, offset: 7289 }
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
            start: { line: 209, column: 5, offset: 7295 },
            end: { line: 209, column: 11, offset: 7301 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 7291 },
        end: { line: 209, column: 11, offset: 7301 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol key, as opposed to numerical index for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 211, column: 1, offset: 7303 },
            end: { line: 211, column: 199, offset: 7501 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 7303 },
        end: { line: 211, column: 199, offset: 7501 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 213, column: 1, offset: 7503 },
        end: { line: 215, column: 4, offset: 7539 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 217, column: 1, offset: 7541 },
            end: { line: 217, column: 22, offset: 7562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 217, column: 22, offset: 7562 },
            end: { line: 217, column: 30, offset: 7570 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is less common.',
          position: {
            start: { line: 217, column: 30, offset: 7570 },
            end: { line: 217, column: 91, offset: 7631 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 7541 },
        end: { line: 217, column: 91, offset: 7631 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 219, column: 1, offset: 7633 },
        end: { line: 221, column: 4, offset: 7663 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 223, column: 1, offset: 7665 },
            end: { line: 223, column: 142, offset: 7806 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 7665 },
        end: { line: 223, column: 142, offset: 7806 }
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
        start: { line: 225, column: 1, offset: 7808 },
        end: { line: 235, column: 4, offset: 8098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 237, column: 1, offset: 8100 },
            end: { line: 237, column: 73, offset: 8172 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 237, column: 73, offset: 8172 },
            end: { line: 237, column: 81, offset: 8180 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 237, column: 81, offset: 8180 },
            end: { line: 237, column: 90, offset: 8189 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 8100 },
        end: { line: 237, column: 90, offset: 8189 }
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
        start: { line: 239, column: 1, offset: 8191 },
        end: { line: 246, column: 4, offset: 8426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 248, column: 1, offset: 8428 },
            end: { line: 248, column: 66, offset: 8493 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 248, column: 66, offset: 8493 },
            end: { line: 248, column: 76, offset: 8503 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 248, column: 76, offset: 8503 },
            end: { line: 248, column: 82, offset: 8509 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 8428 },
        end: { line: 248, column: 82, offset: 8509 }
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
        start: { line: 250, column: 1, offset: 8511 },
        end: { line: 259, column: 4, offset: 8673 }
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
            start: { line: 261, column: 5, offset: 8679 },
            end: { line: 261, column: 8, offset: 8682 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 8675 },
        end: { line: 261, column: 8, offset: 8682 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 263, column: 1, offset: 8684 },
            end: { line: 263, column: 169, offset: 8852 }
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
                start: { line: 263, column: 170, offset: 8853 },
                end: { line: 263, column: 183, offset: 8866 }
              }
            }
          ],
          position: {
            start: { line: 263, column: 169, offset: 8852 },
            end: { line: 263, column: 306, offset: 8989 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 263, column: 306, offset: 8989 },
            end: { line: 263, column: 469, offset: 9152 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 263, column: 469, offset: 9152 },
            end: { line: 263, column: 475, offset: 9158 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 263, column: 475, offset: 9158 },
            end: { line: 263, column: 483, offset: 9166 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 8684 },
        end: { line: 263, column: 483, offset: 9166 }
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
        start: { line: 265, column: 1, offset: 9168 },
        end: { line: 270, column: 4, offset: 9351 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 272, column: 1, offset: 9353 },
            end: { line: 272, column: 26, offset: 9378 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 272, column: 26, offset: 9378 },
            end: { line: 272, column: 31, offset: 9383 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 272, column: 31, offset: 9383 },
            end: { line: 272, column: 44, offset: 9396 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9353 },
        end: { line: 272, column: 44, offset: 9396 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 274, column: 1, offset: 9398 },
        end: { line: 276, column: 4, offset: 9434 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 278, column: 1, offset: 9436 },
            end: { line: 278, column: 42, offset: 9477 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 278, column: 42, offset: 9477 },
            end: { line: 278, column: 48, offset: 9483 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 278, column: 48, offset: 9483 },
            end: { line: 278, column: 65, offset: 9500 }
          }
        }
      ],
      position: {
        start: { line: 278, column: 1, offset: 9436 },
        end: { line: 278, column: 65, offset: 9500 }
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
        start: { line: 280, column: 1, offset: 9502 },
        end: { line: 288, column: 4, offset: 9652 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 290, column: 1, offset: 9654 },
            end: { line: 290, column: 42, offset: 9695 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 290, column: 42, offset: 9695 },
            end: { line: 290, column: 51, offset: 9704 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 290, column: 51, offset: 9704 },
            end: { line: 290, column: 68, offset: 9721 }
          }
        }
      ],
      position: {
        start: { line: 290, column: 1, offset: 9654 },
        end: { line: 290, column: 68, offset: 9721 }
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
        start: { line: 292, column: 1, offset: 9723 },
        end: { line: 298, column: 4, offset: 9842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 300, column: 1, offset: 9844 },
            end: { line: 300, column: 49, offset: 9892 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 300, column: 49, offset: 9892 },
            end: { line: 300, column: 59, offset: 9902 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 300, column: 59, offset: 9902 },
            end: { line: 300, column: 65, offset: 9908 }
          }
        }
      ],
      position: {
        start: { line: 300, column: 1, offset: 9844 },
        end: { line: 300, column: 65, offset: 9908 }
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
        start: { line: 302, column: 1, offset: 9910 },
        end: { line: 313, column: 4, offset: 10063 }
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
            start: { line: 315, column: 5, offset: 10069 },
            end: { line: 315, column: 8, offset: 10072 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 10065 },
        end: { line: 315, column: 8, offset: 10072 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order that can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 317, column: 1, offset: 10074 },
            end: { line: 317, column: 203, offset: 10276 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 10074 },
        end: { line: 317, column: 203, offset: 10276 }
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
                    start: { line: 318, column: 5, offset: 10281 },
                    end: { line: 318, column: 113, offset: 10389 }
                  }
                }
              ],
              position: {
                start: { line: 318, column: 5, offset: 10281 },
                end: { line: 318, column: 113, offset: 10389 }
              }
            }
          ],
          position: {
            start: { line: 318, column: 3, offset: 10279 },
            end: { line: 318, column: 113, offset: 10389 }
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
                    start: { line: 319, column: 5, offset: 10394 },
                    end: { line: 319, column: 94, offset: 10483 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 319, column: 94, offset: 10483 },
                    end: { line: 319, column: 110, offset: 10499 }
                  }
                }
              ],
              position: {
                start: { line: 319, column: 5, offset: 10394 },
                end: { line: 319, column: 110, offset: 10499 }
              }
            }
          ],
          position: {
            start: { line: 319, column: 3, offset: 10392 },
            end: { line: 319, column: 110, offset: 10499 }
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
                    start: { line: 320, column: 5, offset: 10504 },
                    end: { line: 320, column: 130, offset: 10629 }
                  }
                }
              ],
              position: {
                start: { line: 320, column: 5, offset: 10504 },
                end: { line: 320, column: 130, offset: 10629 }
              }
            }
          ],
          position: {
            start: { line: 320, column: 3, offset: 10502 },
            end: { line: 320, column: 130, offset: 10629 }
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
                    start: { line: 321, column: 5, offset: 10634 },
                    end: { line: 321, column: 28, offset: 10657 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 321, column: 28, offset: 10657 },
                    end: { line: 321, column: 38, offset: 10667 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 321, column: 38, offset: 10667 },
                    end: { line: 321, column: 64, offset: 10693 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 321, column: 64, offset: 10693 },
                    end: { line: 321, column: 74, offset: 10703 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 321, column: 74, offset: 10703 },
                    end: { line: 321, column: 80, offset: 10709 }
                  }
                }
              ],
              position: {
                start: { line: 321, column: 5, offset: 10634 },
                end: { line: 321, column: 80, offset: 10709 }
              }
            }
          ],
          position: {
            start: { line: 321, column: 3, offset: 10632 },
            end: { line: 321, column: 80, offset: 10709 }
          }
        }
      ],
      position: {
        start: { line: 318, column: 3, offset: 10279 },
        end: { line: 321, column: 80, offset: 10709 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 323, column: 1, offset: 10711 },
            end: { line: 323, column: 9, offset: 10719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 323, column: 9, offset: 10719 },
            end: { line: 323, column: 14, offset: 10724 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 323, column: 14, offset: 10724 },
            end: { line: 323, column: 48, offset: 10758 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 323, column: 48, offset: 10758 },
            end: { line: 323, column: 53, offset: 10763 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 323, column: 53, offset: 10763 },
            end: { line: 323, column: 124, offset: 10834 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 10711 },
        end: { line: 323, column: 124, offset: 10834 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 325, column: 1, offset: 10836 },
        end: { line: 331, column: 4, offset: 10912 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 333, column: 1, offset: 10914 },
            end: { line: 333, column: 42, offset: 10955 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 333, column: 42, offset: 10955 },
            end: { line: 333, column: 48, offset: 10961 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 333, column: 48, offset: 10961 },
            end: { line: 333, column: 65, offset: 10978 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 10914 },
        end: { line: 333, column: 65, offset: 10978 }
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
        start: { line: 335, column: 1, offset: 10980 },
        end: { line: 342, column: 4, offset: 11131 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 344, column: 1, offset: 11133 },
            end: { line: 344, column: 42, offset: 11174 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 344, column: 42, offset: 11174 },
            end: { line: 344, column: 51, offset: 11183 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 344, column: 51, offset: 11183 },
            end: { line: 344, column: 68, offset: 11200 }
          }
        }
      ],
      position: {
        start: { line: 344, column: 1, offset: 11133 },
        end: { line: 344, column: 68, offset: 11200 }
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
        start: { line: 346, column: 1, offset: 11202 },
        end: { line: 356, column: 4, offset: 11355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 358, column: 1, offset: 11357 },
            end: { line: 358, column: 49, offset: 11405 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 358, column: 49, offset: 11405 },
            end: { line: 358, column: 59, offset: 11415 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 358, column: 59, offset: 11415 },
            end: { line: 358, column: 65, offset: 11421 }
          }
        }
      ],
      position: {
        start: { line: 358, column: 1, offset: 11357 },
        end: { line: 358, column: 65, offset: 11421 }
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
        start: { line: 360, column: 1, offset: 11423 },
        end: { line: 373, column: 4, offset: 11688 }
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
            start: { line: 375, column: 5, offset: 11694 },
            end: { line: 375, column: 53, offset: 11742 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 11690 },
        end: { line: 375, column: 53, offset: 11742 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 377, column: 1, offset: 11744 },
            end: { line: 377, column: 323, offset: 12066 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 11744 },
        end: { line: 377, column: 323, offset: 12066 }
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
            start: { line: 379, column: 4, offset: 12071 },
            end: { line: 379, column: 23, offset: 12090 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 12068 },
        end: { line: 379, column: 23, offset: 12090 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 380, column: 1, offset: 12091 },
            end: { line: 380, column: 115, offset: 12205 }
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
                start: { line: 380, column: 116, offset: 12206 },
                end: { line: 380, column: 133, offset: 12223 }
              }
            }
          ],
          position: {
            start: { line: 380, column: 115, offset: 12205 },
            end: { line: 380, column: 243, offset: 12333 }
          }
        },
        {
          type: 'text',
          value: '. The collection data types excluding object (array, map, and set) are all built-in data types that implement the iterable protocol. Iterables can be consumed with a ',
          position: {
            start: { line: 380, column: 243, offset: 12333 },
            end: { line: 380, column: 409, offset: 12499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 380, column: 409, offset: 12499 },
            end: { line: 380, column: 419, offset: 12509 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 380, column: 419, offset: 12509 },
            end: { line: 380, column: 425, offset: 12515 }
          }
        }
      ],
      position: {
        start: { line: 380, column: 1, offset: 12091 },
        end: { line: 380, column: 425, offset: 12515 }
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
        start: { line: 382, column: 1, offset: 12517 },
        end: { line: 400, column: 4, offset: 12946 }
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
            start: { line: 402, column: 5, offset: 12952 },
            end: { line: 402, column: 22, offset: 12969 }
          }
        }
      ],
      position: {
        start: { line: 402, column: 1, offset: 12948 },
        end: { line: 402, column: 22, offset: 12969 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 403, column: 1, offset: 12970 },
            end: { line: 403, column: 78, offset: 13047 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]()',
          position: {
            start: { line: 403, column: 78, offset: 13047 },
            end: { line: 403, column: 99, offset: 13068 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the iterator protocol. An object implements the iterator protocol by implementing the synchronous method ',
          position: {
            start: { line: 403, column: 99, offset: 13068 },
            end: { line: 403, column: 252, offset: 13221 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 403, column: 252, offset: 13221 },
            end: { line: 403, column: 258, offset: 13227 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 403, column: 258, offset: 13227 },
            end: { line: 403, column: 259, offset: 13228 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 12970 },
        end: { line: 403, column: 259, offset: 13228 }
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
        start: { line: 405, column: 1, offset: 13230 },
        end: { line: 413, column: 4, offset: 13391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 415, column: 1, offset: 13393 },
            end: { line: 415, column: 73, offset: 13465 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 13393 },
        end: { line: 415, column: 73, offset: 13465 }
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
        start: { line: 417, column: 1, offset: 13467 },
        end: { line: 448, column: 4, offset: 13925 }
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
            start: { line: 450, column: 5, offset: 13931 },
            end: { line: 450, column: 39, offset: 13965 }
          }
        }
      ],
      position: {
        start: { line: 450, column: 1, offset: 13927 },
        end: { line: 450, column: 39, offset: 13965 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use generator functions to create generators, a kind of iterator. Generator functions use the ',
          position: {
            start: { line: 451, column: 1, offset: 13966 },
            end: { line: 451, column: 103, offset: 14068 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 451, column: 103, offset: 14068 },
            end: { line: 451, column: 120, offset: 14085 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 451, column: 120, offset: 14085 },
            end: { line: 451, column: 136, offset: 14101 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 451, column: 136, offset: 14101 },
            end: { line: 451, column: 143, offset: 14108 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 451, column: 143, offset: 14108 },
            end: { line: 451, column: 152, offset: 14117 }
          }
        }
      ],
      position: {
        start: { line: 451, column: 1, offset: 13966 },
        end: { line: 451, column: 152, offset: 14117 }
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
        start: { line: 453, column: 1, offset: 14119 },
        end: { line: 471, column: 4, offset: 14485 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generators implement the iterator protocol by default, so often it is simpler to use a generator function to implement the iterable protocol using the syntax ',
          position: {
            start: { line: 473, column: 1, offset: 14487 },
            end: { line: 473, column: 159, offset: 14645 }
          }
        },
        {
          type: 'inlineCode',
          value: '* [Symbol.iterator]()',
          position: {
            start: { line: 473, column: 159, offset: 14645 },
            end: { line: 473, column: 182, offset: 14668 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 473, column: 182, offset: 14668 },
            end: { line: 473, column: 183, offset: 14669 }
          }
        }
      ],
      position: {
        start: { line: 473, column: 1, offset: 14487 },
        end: { line: 473, column: 183, offset: 14669 }
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
        start: { line: 475, column: 1, offset: 14671 },
        end: { line: 512, column: 4, offset: 15153 }
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
            start: { line: 514, column: 4, offset: 15158 },
            end: { line: 514, column: 27, offset: 15181 }
          }
        }
      ],
      position: {
        start: { line: 514, column: 1, offset: 15155 },
        end: { line: 514, column: 27, offset: 15181 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 515, column: 1, offset: 15182 },
            end: { line: 515, column: 184, offset: 15365 }
          }
        }
      ],
      position: {
        start: { line: 515, column: 1, offset: 15182 },
        end: { line: 515, column: 184, offset: 15365 }
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
            start: { line: 517, column: 5, offset: 15371 },
            end: { line: 517, column: 12, offset: 15378 }
          }
        }
      ],
      position: {
        start: { line: 517, column: 1, offset: 15367 },
        end: { line: 517, column: 12, offset: 15378 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value or rejects with an error. Promise instances have a ',
          position: {
            start: { line: 519, column: 1, offset: 15380 },
            end: { line: 519, column: 143, offset: 15522 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 519, column: 143, offset: 15522 },
            end: { line: 519, column: 150, offset: 15529 }
          }
        },
        {
          type: 'text',
          value: ' and a ',
          position: {
            start: { line: 519, column: 150, offset: 15529 },
            end: { line: 519, column: 157, offset: 15536 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 519, column: 157, offset: 15536 },
            end: { line: 519, column: 165, offset: 15544 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 519, column: 165, offset: 15544 },
            end: { line: 519, column: 173, offset: 15552 }
          }
        }
      ],
      position: {
        start: { line: 519, column: 1, offset: 15380 },
        end: { line: 519, column: 173, offset: 15552 }
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
        start: { line: 521, column: 1, offset: 15554 },
        end: { line: 529, column: 4, offset: 15852 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 531, column: 1, offset: 15854 },
            end: { line: 531, column: 15, offset: 15868 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 531, column: 15, offset: 15868 },
            end: { line: 531, column: 22, offset: 15875 }
          }
        },
        {
          type: 'text',
          value: " method resolves the promise's resolved value and catches any errors rejected from the promise. Either of the resolvers provided to a promise's ",
          position: {
            start: { line: 531, column: 22, offset: 15875 },
            end: { line: 531, column: 166, offset: 16019 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 531, column: 166, offset: 16019 },
            end: { line: 531, column: 173, offset: 16026 }
          }
        },
        {
          type: 'text',
          value: ' method may be asynchronous and return a promise.',
          position: {
            start: { line: 531, column: 173, offset: 16026 },
            end: { line: 531, column: 222, offset: 16075 }
          }
        }
      ],
      position: {
        start: { line: 531, column: 1, offset: 15854 },
        end: { line: 531, column: 222, offset: 16075 }
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
        start: { line: 533, column: 1, offset: 16077 },
        end: { line: 545, column: 4, offset: 16382 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The promise's ",
          position: {
            start: { line: 547, column: 1, offset: 16384 },
            end: { line: 547, column: 15, offset: 16398 }
          }
        },
        {
          type: 'inlineCode',
          value: '.catch',
          position: {
            start: { line: 547, column: 15, offset: 16398 },
            end: { line: 547, column: 23, offset: 16406 }
          }
        },
        {
          type: 'text',
          value: ' method catches any errors rejected from a promise.',
          position: {
            start: { line: 547, column: 23, offset: 16406 },
            end: { line: 547, column: 74, offset: 16457 }
          }
        }
      ],
      position: {
        start: { line: 547, column: 1, offset: 16384 },
        end: { line: 547, column: 74, offset: 16457 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'myPromise.catch(error => {\n  // error is rejected from myPromise\n})',
      position: {
        start: { line: 549, column: 1, offset: 16459 },
        end: { line: 553, column: 4, offset: 16544 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a promise, you can use the ',
          position: {
            start: { line: 555, column: 1, offset: 16546 },
            end: { line: 555, column: 38, offset: 16583 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 555, column: 38, offset: 16583 },
            end: { line: 555, column: 47, offset: 16592 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 555, column: 47, offset: 16592 },
            end: { line: 555, column: 60, offset: 16605 }
          }
        }
      ],
      position: {
        start: { line: 555, column: 1, offset: 16546 },
        end: { line: 555, column: 60, offset: 16605 }
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
        start: { line: 557, column: 1, offset: 16607 },
        end: { line: 577, column: 4, offset: 17024 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 579, column: 1, offset: 17026 },
            end: { line: 579, column: 22, offset: 17047 }
          }
        },
        {
          type: 'inlineCode',
          value: '.resolve',
          position: {
            start: { line: 579, column: 22, offset: 17047 },
            end: { line: 579, column: 32, offset: 17057 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 579, column: 32, offset: 17057 },
            end: { line: 579, column: 37, offset: 17062 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reject',
          position: {
            start: { line: 579, column: 37, offset: 17062 },
            end: { line: 579, column: 46, offset: 17071 }
          }
        },
        {
          type: 'text',
          value: ' methods on the ',
          position: {
            start: { line: 579, column: 46, offset: 17071 },
            end: { line: 579, column: 62, offset: 17087 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 579, column: 62, offset: 17087 },
            end: { line: 579, column: 71, offset: 17096 }
          }
        },
        {
          type: 'text',
          value: ' object to create promises.',
          position: {
            start: { line: 579, column: 71, offset: 17096 },
            end: { line: 579, column: 98, offset: 17123 }
          }
        }
      ],
      position: {
        start: { line: 579, column: 1, offset: 17026 },
        end: { line: 579, column: 98, offset: 17123 }
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
        start: { line: 581, column: 1, offset: 17125 },
        end: { line: 587, column: 4, offset: 17368 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 589, column: 1, offset: 17370 },
            end: { line: 589, column: 112, offset: 17481 }
          }
        }
      ],
      position: {
        start: { line: 589, column: 1, offset: 17370 },
        end: { line: 589, column: 112, offset: 17481 }
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
        start: { line: 591, column: 1, offset: 17483 },
        end: { line: 603, column: 4, offset: 17820 }
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
            start: { line: 605, column: 5, offset: 17826 },
            end: { line: 605, column: 16, offset: 17837 }
          }
        }
      ],
      position: {
        start: { line: 605, column: 1, offset: 17822 },
        end: { line: 605, column: 16, offset: 17837 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 607, column: 1, offset: 17839 },
            end: { line: 607, column: 5, offset: 17843 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 607, column: 5, offset: 17843 },
            end: { line: 607, column: 21, offset: 17859 }
          }
        },
        {
          type: 'text',
          value: ' syntax permits the use of the ',
          position: {
            start: { line: 607, column: 21, offset: 17859 },
            end: { line: 607, column: 52, offset: 17890 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 607, column: 52, offset: 17890 },
            end: { line: 607, column: 59, offset: 17897 }
          }
        },
        {
          type: 'text',
          value: ' keyword that enables an imperative style of code to handle promises. You can use the ',
          position: {
            start: { line: 607, column: 59, offset: 17897 },
            end: { line: 607, column: 145, offset: 17983 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 607, column: 145, offset: 17983 },
            end: { line: 607, column: 152, offset: 17990 }
          }
        },
        {
          type: 'text',
          value: ' keyword from an ',
          position: {
            start: { line: 607, column: 152, offset: 17990 },
            end: { line: 607, column: 169, offset: 18007 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function',
          position: {
            start: { line: 607, column: 169, offset: 18007 },
            end: { line: 607, column: 185, offset: 18023 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 607, column: 185, offset: 18023 },
            end: { line: 607, column: 246, offset: 18084 }
          }
        }
      ],
      position: {
        start: { line: 607, column: 1, offset: 17839 },
        end: { line: 607, column: 246, offset: 18084 }
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
        start: { line: 609, column: 1, offset: 18086 },
        end: { line: 628, column: 4, offset: 18625 }
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
            start: { line: 630, column: 4, offset: 18630 },
            end: { line: 630, column: 36, offset: 18662 }
          }
        }
      ],
      position: {
        start: { line: 630, column: 1, offset: 18627 },
        end: { line: 630, column: 36, offset: 18662 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 631, column: 1, offset: 18663 },
            end: { line: 631, column: 143, offset: 18805 }
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
                start: { line: 631, column: 144, offset: 18806 },
                end: { line: 631, column: 167, offset: 18829 }
              }
            }
          ],
          position: {
            start: { line: 631, column: 143, offset: 18805 },
            end: { line: 631, column: 303, offset: 18965 }
          }
        },
        {
          type: 'text',
          value: '. The only built-in data types that implement this protocol are ',
          position: {
            start: { line: 631, column: 303, offset: 18965 },
            end: { line: 631, column: 367, offset: 19029 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerators',
          position: {
            start: { line: 631, column: 367, offset: 19029 },
            end: { line: 631, column: 384, offset: 19046 }
          }
        },
        {
          type: 'text',
          value: '. Async iterables are consumable with a ',
          position: {
            start: { line: 631, column: 384, offset: 19046 },
            end: { line: 631, column: 424, offset: 19086 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 631, column: 424, offset: 19086 },
            end: { line: 631, column: 440, offset: 19102 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 631, column: 440, offset: 19102 },
            end: { line: 631, column: 446, offset: 19108 }
          }
        }
      ],
      position: {
        start: { line: 631, column: 1, offset: 18663 },
        end: { line: 631, column: 446, offset: 19108 }
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
            start: { line: 633, column: 5, offset: 19114 },
            end: { line: 633, column: 28, offset: 19137 }
          }
        }
      ],
      position: {
        start: { line: 633, column: 1, offset: 19110 },
        end: { line: 633, column: 28, offset: 19137 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The async iterable protocol is implemented on classes and objects under the method ',
          position: {
            start: { line: 634, column: 1, offset: 19138 },
            end: { line: 634, column: 84, offset: 19221 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]()',
          position: {
            start: { line: 634, column: 84, offset: 19221 },
            end: { line: 634, column: 110, offset: 19247 }
          }
        },
        {
          type: 'text',
          value: '. The method returns an object that conforms to the async iterator protocol. An object implements the async iterator protocol by implementing the asynchronous method ',
          position: {
            start: { line: 634, column: 110, offset: 19247 },
            end: { line: 634, column: 276, offset: 19413 }
          }
        },
        {
          type: 'inlineCode',
          value: 'next',
          position: {
            start: { line: 634, column: 276, offset: 19413 },
            end: { line: 634, column: 282, offset: 19419 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 634, column: 282, offset: 19419 },
            end: { line: 634, column: 283, offset: 19420 }
          }
        }
      ],
      position: {
        start: { line: 634, column: 1, offset: 19138 },
        end: { line: 634, column: 283, offset: 19420 }
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
        start: { line: 636, column: 1, offset: 19422 },
        end: { line: 644, column: 4, offset: 19610 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can implement the async iterable protocol on your own classes and objects.',
          position: {
            start: { line: 646, column: 1, offset: 19612 },
            end: { line: 646, column: 79, offset: 19690 }
          }
        }
      ],
      position: {
        start: { line: 646, column: 1, offset: 19612 },
        end: { line: 646, column: 79, offset: 19690 }
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
        start: { line: 648, column: 1, offset: 19692 },
        end: { line: 679, column: 4, offset: 20187 }
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
            start: { line: 681, column: 5, offset: 20193 },
            end: { line: 681, column: 51, offset: 20239 }
          }
        }
      ],
      position: {
        start: { line: 681, column: 1, offset: 20189 },
        end: { line: 681, column: 51, offset: 20239 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generator functions use the ',
          position: {
            start: { line: 682, column: 1, offset: 20240 },
            end: { line: 682, column: 35, offset: 20274 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 682, column: 35, offset: 20274 },
            end: { line: 682, column: 58, offset: 20297 }
          }
        },
        {
          type: 'text',
          value: ' syntax and ',
          position: {
            start: { line: 682, column: 58, offset: 20297 },
            end: { line: 682, column: 70, offset: 20309 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 682, column: 70, offset: 20309 },
            end: { line: 682, column: 77, offset: 20316 }
          }
        },
        {
          type: 'text',
          value: ' keyword and always return an async iterable ',
          position: {
            start: { line: 682, column: 77, offset: 20316 },
            end: { line: 682, column: 122, offset: 20361 }
          }
        },
        {
          type: 'inlineCode',
          value: 'AsyncGenerator',
          position: {
            start: { line: 682, column: 122, offset: 20361 },
            end: { line: 682, column: 138, offset: 20377 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 682, column: 138, offset: 20377 },
            end: { line: 682, column: 146, offset: 20385 }
          }
        }
      ],
      position: {
        start: { line: 682, column: 1, offset: 20240 },
        end: { line: 682, column: 146, offset: 20385 }
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
        start: { line: 684, column: 1, offset: 20387 },
        end: { line: 702, column: 4, offset: 20834 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Async generators implement the async iterator protocol by default, so often it is simpler to use an async generator function to implement the async iterable protocol using the syntax ',
          position: {
            start: { line: 704, column: 1, offset: 20836 },
            end: { line: 704, column: 184, offset: 21019 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async * [Symbol.asyncIterator]()',
          position: {
            start: { line: 704, column: 184, offset: 21019 },
            end: { line: 704, column: 218, offset: 21053 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 704, column: 218, offset: 21053 },
            end: { line: 704, column: 219, offset: 21054 }
          }
        }
      ],
      position: {
        start: { line: 704, column: 1, offset: 20836 },
        end: { line: 704, column: 219, offset: 21054 }
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
        start: { line: 706, column: 1, offset: 21056 },
        end: { line: 742, column: 4, offset: 21583 }
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
            start: { line: 744, column: 4, offset: 21588 },
            end: { line: 744, column: 24, offset: 21608 }
          }
        }
      ],
      position: {
        start: { line: 744, column: 1, offset: 21585 },
        end: { line: 744, column: 24, offset: 21608 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 745, column: 1, offset: 21609 },
            end: { line: 745, column: 253, offset: 21861 }
          }
        }
      ],
      position: {
        start: { line: 745, column: 1, offset: 21609 },
        end: { line: 745, column: 253, offset: 21861 }
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
            start: { line: 747, column: 5, offset: 21867 },
            end: { line: 747, column: 12, offset: 21874 }
          }
        }
      ],
      position: {
        start: { line: 747, column: 1, offset: 21863 },
        end: { line: 747, column: 12, offset: 21874 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 749, column: 1, offset: 21876 },
            end: { line: 749, column: 64, offset: 21939 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 749, column: 64, offset: 21939 },
            end: { line: 749, column: 70, offset: 21945 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 749, column: 70, offset: 21945 },
            end: { line: 749, column: 103, offset: 21978 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 749, column: 103, offset: 21978 },
            end: { line: 749, column: 109, offset: 21984 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 749, column: 109, offset: 21984 },
            end: { line: 749, column: 143, offset: 22018 }
          }
        }
      ],
      position: {
        start: { line: 749, column: 1, offset: 21876 },
        end: { line: 749, column: 143, offset: 22018 }
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
                    start: { line: 751, column: 5, offset: 22024 },
                    end: { line: 751, column: 50, offset: 22069 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 751, column: 50, offset: 22069 },
                    end: { line: 751, column: 58, offset: 22077 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 751, column: 58, offset: 22077 },
                    end: { line: 751, column: 119, offset: 22138 }
                  }
                }
              ],
              position: {
                start: { line: 751, column: 5, offset: 22024 },
                end: { line: 751, column: 119, offset: 22138 }
              }
            }
          ],
          position: {
            start: { line: 751, column: 2, offset: 22021 },
            end: { line: 751, column: 119, offset: 22138 }
          }
        }
      ],
      position: {
        start: { line: 751, column: 2, offset: 22021 },
        end: { line: 751, column: 119, offset: 22138 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 753, column: 1, offset: 22140 },
        end: { line: 758, column: 4, offset: 22217 }
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
        start: { line: 760, column: 1, offset: 22219 },
        end: { line: 767, column: 4, offset: 22363 }
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
                    start: { line: 769, column: 5, offset: 22369 },
                    end: { line: 769, column: 63, offset: 22427 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 769, column: 63, offset: 22427 },
                    end: { line: 769, column: 69, offset: 22433 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 769, column: 69, offset: 22433 },
                    end: { line: 769, column: 126, offset: 22490 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 769, column: 126, offset: 22490 },
                    end: { line: 769, column: 132, offset: 22496 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 769, column: 132, offset: 22496 },
                    end: { line: 769, column: 143, offset: 22507 }
                  }
                }
              ],
              position: {
                start: { line: 769, column: 5, offset: 22369 },
                end: { line: 769, column: 143, offset: 22507 }
              }
            }
          ],
          position: {
            start: { line: 769, column: 2, offset: 22366 },
            end: { line: 769, column: 143, offset: 22507 }
          }
        }
      ],
      position: {
        start: { line: 769, column: 2, offset: 22366 },
        end: { line: 769, column: 143, offset: 22507 }
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
        start: { line: 771, column: 1, offset: 22509 },
        end: { line: 776, column: 4, offset: 22605 }
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
        start: { line: 778, column: 1, offset: 22607 },
        end: { line: 786, column: 4, offset: 22788 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 788, column: 1, offset: 22790 },
            end: { line: 788, column: 65, offset: 22854 }
          }
        }
      ],
      position: {
        start: { line: 788, column: 1, offset: 22790 },
        end: { line: 788, column: 65, offset: 22854 }
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
                    start: { line: 789, column: 4, offset: 22858 },
                    end: { line: 789, column: 11, offset: 22865 }
                  }
                }
              ],
              position: {
                start: { line: 789, column: 4, offset: 22858 },
                end: { line: 789, column: 11, offset: 22865 }
              }
            }
          ],
          position: {
            start: { line: 789, column: 2, offset: 22856 },
            end: { line: 789, column: 11, offset: 22865 }
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
                    start: { line: 790, column: 4, offset: 22869 },
                    end: { line: 790, column: 9, offset: 22874 }
                  }
                }
              ],
              position: {
                start: { line: 790, column: 4, offset: 22869 },
                end: { line: 790, column: 9, offset: 22874 }
              }
            }
          ],
          position: {
            start: { line: 790, column: 2, offset: 22867 },
            end: { line: 790, column: 9, offset: 22874 }
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
                    start: { line: 791, column: 4, offset: 22878 },
                    end: { line: 791, column: 9, offset: 22883 }
                  }
                }
              ],
              position: {
                start: { line: 791, column: 4, offset: 22878 },
                end: { line: 791, column: 9, offset: 22883 }
              }
            }
          ],
          position: {
            start: { line: 791, column: 2, offset: 22876 },
            end: { line: 791, column: 9, offset: 22883 }
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
                    start: { line: 792, column: 4, offset: 22887 },
                    end: { line: 792, column: 15, offset: 22898 }
                  }
                }
              ],
              position: {
                start: { line: 792, column: 4, offset: 22887 },
                end: { line: 792, column: 15, offset: 22898 }
              }
            }
          ],
          position: {
            start: { line: 792, column: 2, offset: 22885 },
            end: { line: 792, column: 15, offset: 22898 }
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
                    start: { line: 793, column: 4, offset: 22902 },
                    end: { line: 793, column: 21, offset: 22919 }
                  }
                }
              ],
              position: {
                start: { line: 793, column: 4, offset: 22902 },
                end: { line: 793, column: 21, offset: 22919 }
              }
            }
          ],
          position: {
            start: { line: 793, column: 2, offset: 22900 },
            end: { line: 793, column: 21, offset: 22919 }
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
                    start: { line: 794, column: 4, offset: 22923 },
                    end: { line: 794, column: 12, offset: 22931 }
                  }
                }
              ],
              position: {
                start: { line: 794, column: 4, offset: 22923 },
                end: { line: 794, column: 12, offset: 22931 }
              }
            }
          ],
          position: {
            start: { line: 794, column: 2, offset: 22921 },
            end: { line: 794, column: 12, offset: 22931 }
          }
        }
      ],
      position: {
        start: { line: 789, column: 2, offset: 22856 },
        end: { line: 794, column: 12, offset: 22931 }
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
            start: { line: 796, column: 5, offset: 22937 },
            end: { line: 796, column: 15, offset: 22947 }
          }
        }
      ],
      position: {
        start: { line: 796, column: 1, offset: 22933 },
        end: { line: 796, column: 15, offset: 22947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 798, column: 1, offset: 22949 },
            end: { line: 798, column: 67, offset: 23015 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 798, column: 67, offset: 23015 },
            end: { line: 798, column: 76, offset: 23024 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 798, column: 76, offset: 23024 },
            end: { line: 798, column: 109, offset: 23057 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 798, column: 109, offset: 23057 },
            end: { line: 798, column: 118, offset: 23066 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 798, column: 118, offset: 23066 },
            end: { line: 798, column: 154, offset: 23102 }
          }
        }
      ],
      position: {
        start: { line: 798, column: 1, offset: 22949 },
        end: { line: 798, column: 154, offset: 23102 }
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
                    start: { line: 800, column: 5, offset: 23108 },
                    end: { line: 800, column: 97, offset: 23200 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 800, column: 97, offset: 23200 },
                    end: { line: 800, column: 106, offset: 23209 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 800, column: 106, offset: 23209 },
                    end: { line: 800, column: 209, offset: 23312 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 800, column: 209, offset: 23312 },
                    end: { line: 800, column: 218, offset: 23321 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 800, column: 218, offset: 23321 },
                    end: { line: 800, column: 219, offset: 23322 }
                  }
                }
              ],
              position: {
                start: { line: 800, column: 5, offset: 23108 },
                end: { line: 800, column: 219, offset: 23322 }
              }
            }
          ],
          position: {
            start: { line: 800, column: 2, offset: 23105 },
            end: { line: 800, column: 219, offset: 23322 }
          }
        }
      ],
      position: {
        start: { line: 800, column: 2, offset: 23105 },
        end: { line: 800, column: 219, offset: 23322 }
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
        start: { line: 802, column: 1, offset: 23324 },
        end: { line: 807, column: 4, offset: 23439 }
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
        start: { line: 809, column: 1, offset: 23441 },
        end: { line: 817, column: 4, offset: 23640 }
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
                    start: { line: 819, column: 5, offset: 23646 },
                    end: { line: 819, column: 121, offset: 23762 }
                  }
                }
              ],
              position: {
                start: { line: 819, column: 5, offset: 23646 },
                end: { line: 819, column: 121, offset: 23762 }
              }
            }
          ],
          position: {
            start: { line: 819, column: 2, offset: 23643 },
            end: { line: 819, column: 121, offset: 23762 }
          }
        }
      ],
      position: {
        start: { line: 819, column: 2, offset: 23643 },
        end: { line: 819, column: 121, offset: 23762 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 821, column: 1, offset: 23764 },
        end: { line: 826, column: 4, offset: 23852 }
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
        start: { line: 828, column: 1, offset: 23854 },
        end: { line: 833, column: 4, offset: 23978 }
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
                    start: { line: 835, column: 5, offset: 23984 },
                    end: { line: 835, column: 159, offset: 24138 }
                  }
                }
              ],
              position: {
                start: { line: 835, column: 5, offset: 23984 },
                end: { line: 835, column: 159, offset: 24138 }
              }
            }
          ],
          position: {
            start: { line: 835, column: 2, offset: 23981 },
            end: { line: 835, column: 159, offset: 24138 }
          }
        }
      ],
      position: {
        start: { line: 835, column: 2, offset: 23981 },
        end: { line: 835, column: 159, offset: 24138 }
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
        start: { line: 837, column: 1, offset: 24140 },
        end: { line: 842, column: 4, offset: 24251 }
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
        start: { line: 844, column: 1, offset: 24253 },
        end: { line: 850, column: 4, offset: 24434 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 852, column: 1, offset: 24436 },
            end: { line: 852, column: 68, offset: 24503 }
          }
        }
      ],
      position: {
        start: { line: 852, column: 1, offset: 24436 },
        end: { line: 852, column: 68, offset: 24503 }
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
                    start: { line: 853, column: 4, offset: 24507 },
                    end: { line: 853, column: 11, offset: 24514 }
                  }
                }
              ],
              position: {
                start: { line: 853, column: 4, offset: 24507 },
                end: { line: 853, column: 11, offset: 24514 }
              }
            }
          ],
          position: {
            start: { line: 853, column: 2, offset: 24505 },
            end: { line: 853, column: 11, offset: 24514 }
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
                    start: { line: 854, column: 4, offset: 24518 },
                    end: { line: 854, column: 9, offset: 24523 }
                  }
                }
              ],
              position: {
                start: { line: 854, column: 4, offset: 24518 },
                end: { line: 854, column: 9, offset: 24523 }
              }
            }
          ],
          position: {
            start: { line: 854, column: 2, offset: 24516 },
            end: { line: 854, column: 9, offset: 24523 }
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
                    start: { line: 855, column: 4, offset: 24527 },
                    end: { line: 855, column: 9, offset: 24532 }
                  }
                }
              ],
              position: {
                start: { line: 855, column: 4, offset: 24527 },
                end: { line: 855, column: 9, offset: 24532 }
              }
            }
          ],
          position: {
            start: { line: 855, column: 2, offset: 24525 },
            end: { line: 855, column: 9, offset: 24532 }
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
                    start: { line: 856, column: 4, offset: 24536 },
                    end: { line: 856, column: 15, offset: 24547 }
                  }
                }
              ],
              position: {
                start: { line: 856, column: 4, offset: 24536 },
                end: { line: 856, column: 15, offset: 24547 }
              }
            }
          ],
          position: {
            start: { line: 856, column: 2, offset: 24534 },
            end: { line: 856, column: 15, offset: 24547 }
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
                    start: { line: 857, column: 4, offset: 24551 },
                    end: { line: 857, column: 21, offset: 24568 }
                  }
                }
              ],
              position: {
                start: { line: 857, column: 4, offset: 24551 },
                end: { line: 857, column: 21, offset: 24568 }
              }
            }
          ],
          position: {
            start: { line: 857, column: 2, offset: 24549 },
            end: { line: 857, column: 21, offset: 24568 }
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
                    start: { line: 858, column: 4, offset: 24572 },
                    end: { line: 858, column: 12, offset: 24580 }
                  }
                }
              ],
              position: {
                start: { line: 858, column: 4, offset: 24572 },
                end: { line: 858, column: 12, offset: 24580 }
              }
            }
          ],
          position: {
            start: { line: 858, column: 2, offset: 24570 },
            end: { line: 858, column: 12, offset: 24580 }
          }
        }
      ],
      position: {
        start: { line: 853, column: 2, offset: 24505 },
        end: { line: 858, column: 12, offset: 24580 }
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
            start: { line: 860, column: 5, offset: 24586 },
            end: { line: 860, column: 13, offset: 24594 }
          }
        }
      ],
      position: {
        start: { line: 860, column: 1, offset: 24582 },
        end: { line: 860, column: 13, offset: 24594 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 862, column: 1, offset: 24596 },
            end: { line: 862, column: 65, offset: 24660 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 862, column: 65, offset: 24660 },
            end: { line: 862, column: 74, offset: 24669 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 862, column: 74, offset: 24669 },
            end: { line: 862, column: 107, offset: 24702 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 862, column: 107, offset: 24702 },
            end: { line: 862, column: 116, offset: 24711 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 862, column: 116, offset: 24711 },
            end: { line: 862, column: 151, offset: 24746 }
          }
        }
      ],
      position: {
        start: { line: 862, column: 1, offset: 24596 },
        end: { line: 862, column: 152, offset: 24747 }
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
                    start: { line: 864, column: 5, offset: 24753 },
                    end: { line: 864, column: 86, offset: 24834 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 864, column: 86, offset: 24834 },
                    end: { line: 864, column: 95, offset: 24843 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 864, column: 95, offset: 24843 },
                    end: { line: 864, column: 253, offset: 25001 }
                  }
                }
              ],
              position: {
                start: { line: 864, column: 5, offset: 24753 },
                end: { line: 864, column: 253, offset: 25001 }
              }
            }
          ],
          position: {
            start: { line: 864, column: 2, offset: 24750 },
            end: { line: 864, column: 253, offset: 25001 }
          }
        }
      ],
      position: {
        start: { line: 864, column: 2, offset: 24750 },
        end: { line: 864, column: 253, offset: 25001 }
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
        start: { line: 866, column: 1, offset: 25003 },
        end: { line: 873, column: 4, offset: 25173 }
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
        start: { line: 875, column: 1, offset: 25175 },
        end: { line: 885, column: 4, offset: 25409 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 887, column: 1, offset: 25411 },
            end: { line: 887, column: 66, offset: 25476 }
          }
        }
      ],
      position: {
        start: { line: 887, column: 1, offset: 25411 },
        end: { line: 887, column: 66, offset: 25476 }
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
                    start: { line: 888, column: 4, offset: 25480 },
                    end: { line: 888, column: 11, offset: 25487 }
                  }
                }
              ],
              position: {
                start: { line: 888, column: 4, offset: 25480 },
                end: { line: 888, column: 11, offset: 25487 }
              }
            }
          ],
          position: {
            start: { line: 888, column: 2, offset: 25478 },
            end: { line: 888, column: 11, offset: 25487 }
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
                    start: { line: 889, column: 4, offset: 25491 },
                    end: { line: 889, column: 9, offset: 25496 }
                  }
                }
              ],
              position: {
                start: { line: 889, column: 4, offset: 25491 },
                end: { line: 889, column: 9, offset: 25496 }
              }
            }
          ],
          position: {
            start: { line: 889, column: 2, offset: 25489 },
            end: { line: 889, column: 9, offset: 25496 }
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
                    start: { line: 890, column: 4, offset: 25500 },
                    end: { line: 890, column: 9, offset: 25505 }
                  }
                }
              ],
              position: {
                start: { line: 890, column: 4, offset: 25500 },
                end: { line: 890, column: 9, offset: 25505 }
              }
            }
          ],
          position: {
            start: { line: 890, column: 2, offset: 25498 },
            end: { line: 890, column: 9, offset: 25505 }
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
                    start: { line: 891, column: 4, offset: 25509 },
                    end: { line: 891, column: 15, offset: 25520 }
                  }
                }
              ],
              position: {
                start: { line: 891, column: 4, offset: 25509 },
                end: { line: 891, column: 15, offset: 25520 }
              }
            }
          ],
          position: {
            start: { line: 891, column: 2, offset: 25507 },
            end: { line: 891, column: 15, offset: 25520 }
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
                    start: { line: 892, column: 4, offset: 25524 },
                    end: { line: 892, column: 21, offset: 25541 }
                  }
                }
              ],
              position: {
                start: { line: 892, column: 4, offset: 25524 },
                end: { line: 892, column: 21, offset: 25541 }
              }
            }
          ],
          position: {
            start: { line: 892, column: 2, offset: 25522 },
            end: { line: 892, column: 21, offset: 25541 }
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
                    start: { line: 893, column: 4, offset: 25545 },
                    end: { line: 893, column: 12, offset: 25553 }
                  }
                }
              ],
              position: {
                start: { line: 893, column: 4, offset: 25545 },
                end: { line: 893, column: 12, offset: 25553 }
              }
            }
          ],
          position: {
            start: { line: 893, column: 2, offset: 25543 },
            end: { line: 893, column: 12, offset: 25553 }
          }
        }
      ],
      position: {
        start: { line: 888, column: 2, offset: 25478 },
        end: { line: 893, column: 12, offset: 25553 }
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
            start: { line: 895, column: 5, offset: 25559 },
            end: { line: 895, column: 14, offset: 25568 }
          }
        }
      ],
      position: {
        start: { line: 895, column: 1, offset: 25555 },
        end: { line: 895, column: 14, offset: 25568 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 897, column: 1, offset: 25570 },
            end: { line: 897, column: 66, offset: 25635 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 897, column: 66, offset: 25635 },
            end: { line: 897, column: 75, offset: 25644 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 897, column: 75, offset: 25644 },
            end: { line: 897, column: 108, offset: 25677 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 897, column: 108, offset: 25677 },
            end: { line: 897, column: 117, offset: 25686 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 897, column: 117, offset: 25686 },
            end: { line: 897, column: 152, offset: 25721 }
          }
        }
      ],
      position: {
        start: { line: 897, column: 1, offset: 25570 },
        end: { line: 897, column: 152, offset: 25721 }
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
                    start: { line: 899, column: 5, offset: 25727 },
                    end: { line: 899, column: 123, offset: 25845 }
                  }
                }
              ],
              position: {
                start: { line: 899, column: 5, offset: 25727 },
                end: { line: 899, column: 123, offset: 25845 }
              }
            }
          ],
          position: {
            start: { line: 899, column: 2, offset: 25724 },
            end: { line: 899, column: 123, offset: 25845 }
          }
        }
      ],
      position: {
        start: { line: 899, column: 2, offset: 25724 },
        end: { line: 899, column: 123, offset: 25845 }
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
        start: { line: 901, column: 1, offset: 25847 },
        end: { line: 906, column: 4, offset: 25960 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'console.log([0].concat(1).concat(2, 3))\n' +
        'console.log([0].concat(1, 2).concat(3))',
      position: {
        start: { line: 908, column: 1, offset: 25962 },
        end: { line: 911, column: 4, offset: 26072 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 913, column: 1, offset: 26074 },
            end: { line: 913, column: 67, offset: 26140 }
          }
        }
      ],
      position: {
        start: { line: 913, column: 1, offset: 26074 },
        end: { line: 913, column: 67, offset: 26140 }
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
                    start: { line: 914, column: 4, offset: 26144 },
                    end: { line: 914, column: 11, offset: 26151 }
                  }
                }
              ],
              position: {
                start: { line: 914, column: 4, offset: 26144 },
                end: { line: 914, column: 11, offset: 26151 }
              }
            }
          ],
          position: {
            start: { line: 914, column: 2, offset: 26142 },
            end: { line: 914, column: 11, offset: 26151 }
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
                    start: { line: 915, column: 4, offset: 26155 },
                    end: { line: 915, column: 12, offset: 26163 }
                  }
                }
              ],
              position: {
                start: { line: 915, column: 4, offset: 26155 },
                end: { line: 915, column: 12, offset: 26163 }
              }
            }
          ],
          position: {
            start: { line: 915, column: 2, offset: 26153 },
            end: { line: 915, column: 12, offset: 26163 }
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
                    start: { line: 916, column: 4, offset: 26167 },
                    end: { line: 916, column: 9, offset: 26172 }
                  }
                }
              ],
              position: {
                start: { line: 916, column: 4, offset: 26167 },
                end: { line: 916, column: 9, offset: 26172 }
              }
            }
          ],
          position: {
            start: { line: 916, column: 2, offset: 26165 },
            end: { line: 916, column: 9, offset: 26172 }
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
                    start: { line: 917, column: 4, offset: 26176 },
                    end: { line: 917, column: 12, offset: 26184 }
                  }
                }
              ],
              position: {
                start: { line: 917, column: 4, offset: 26176 },
                end: { line: 917, column: 12, offset: 26184 }
              }
            }
          ],
          position: {
            start: { line: 917, column: 2, offset: 26174 },
            end: { line: 917, column: 12, offset: 26184 }
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
                    start: { line: 918, column: 4, offset: 26188 },
                    end: { line: 918, column: 12, offset: 26196 }
                  }
                }
              ],
              position: {
                start: { line: 918, column: 4, offset: 26188 },
                end: { line: 918, column: 12, offset: 26196 }
              }
            }
          ],
          position: {
            start: { line: 918, column: 2, offset: 26186 },
            end: { line: 918, column: 12, offset: 26196 }
          }
        }
      ],
      position: {
        start: { line: 914, column: 2, offset: 26142 },
        end: { line: 918, column: 12, offset: 26196 }
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
            start: { line: 920, column: 5, offset: 26202 },
            end: { line: 920, column: 10, offset: 26207 }
          }
        }
      ],
      position: {
        start: { line: 920, column: 1, offset: 26198 },
        end: { line: 920, column: 10, offset: 26207 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 922, column: 1, offset: 26209 },
            end: { line: 922, column: 62, offset: 26270 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 922, column: 62, offset: 26270 },
            end: { line: 922, column: 72, offset: 26280 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 922, column: 72, offset: 26280 },
            end: { line: 922, column: 76, offset: 26284 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 922, column: 76, offset: 26284 },
            end: { line: 922, column: 84, offset: 26292 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 922, column: 84, offset: 26292 },
            end: { line: 922, column: 118, offset: 26326 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 922, column: 118, offset: 26326 },
            end: { line: 922, column: 128, offset: 26336 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 922, column: 128, offset: 26336 },
            end: { line: 922, column: 132, offset: 26340 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 922, column: 132, offset: 26340 },
            end: { line: 922, column: 140, offset: 26348 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 922, column: 140, offset: 26348 },
            end: { line: 922, column: 172, offset: 26380 }
          }
        }
      ],
      position: {
        start: { line: 922, column: 1, offset: 26209 },
        end: { line: 922, column: 172, offset: 26380 }
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
                    start: { line: 924, column: 5, offset: 26386 },
                    end: { line: 924, column: 77, offset: 26458 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 924, column: 77, offset: 26458 },
                    end: { line: 924, column: 87, offset: 26468 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 924, column: 87, offset: 26468 },
                    end: { line: 924, column: 91, offset: 26472 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 924, column: 91, offset: 26472 },
                    end: { line: 924, column: 99, offset: 26480 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value, given the function returns a monad.',
                  position: {
                    start: { line: 924, column: 99, offset: 26480 },
                    end: { line: 924, column: 213, offset: 26594 }
                  }
                }
              ],
              position: {
                start: { line: 924, column: 5, offset: 26386 },
                end: { line: 924, column: 213, offset: 26594 }
              }
            }
          ],
          position: {
            start: { line: 924, column: 2, offset: 26383 },
            end: { line: 924, column: 213, offset: 26594 }
          }
        }
      ],
      position: {
        start: { line: 924, column: 2, offset: 26383 },
        end: { line: 924, column: 213, offset: 26594 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a)\n)',
      position: {
        start: { line: 926, column: 1, offset: 26596 },
        end: { line: 931, column: 4, offset: 26669 }
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
        start: { line: 933, column: 1, offset: 26671 },
        end: { line: 941, column: 4, offset: 26833 }
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
                    start: { line: 943, column: 5, offset: 26839 },
                    end: { line: 943, column: 119, offset: 26953 }
                  }
                }
              ],
              position: {
                start: { line: 943, column: 5, offset: 26839 },
                end: { line: 943, column: 119, offset: 26953 }
              }
            }
          ],
          position: {
            start: { line: 943, column: 2, offset: 26836 },
            end: { line: 943, column: 119, offset: 26953 }
          }
        }
      ],
      position: {
        start: { line: 943, column: 2, offset: 26836 },
        end: { line: 943, column: 119, offset: 26953 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 945, column: 1, offset: 26955 },
        end: { line: 950, column: 4, offset: 27034 }
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
        start: { line: 952, column: 1, offset: 27036 },
        end: { line: 959, column: 4, offset: 27200 }
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
                    start: { line: 961, column: 5, offset: 27206 },
                    end: { line: 961, column: 118, offset: 27319 }
                  }
                }
              ],
              position: {
                start: { line: 961, column: 5, offset: 27206 },
                end: { line: 961, column: 118, offset: 27319 }
              }
            }
          ],
          position: {
            start: { line: 961, column: 2, offset: 27203 },
            end: { line: 961, column: 118, offset: 27319 }
          }
        }
      ],
      position: {
        start: { line: 961, column: 2, offset: 27203 },
        end: { line: 961, column: 118, offset: 27319 }
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
        start: { line: 963, column: 1, offset: 27321 },
        end: { line: 969, column: 4, offset: 27477 }
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
        start: { line: 971, column: 1, offset: 27479 },
        end: { line: 979, column: 4, offset: 27703 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 981, column: 1, offset: 27705 },
            end: { line: 981, column: 63, offset: 27767 }
          }
        }
      ],
      position: {
        start: { line: 981, column: 1, offset: 27705 },
        end: { line: 981, column: 63, offset: 27767 }
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
                    start: { line: 982, column: 4, offset: 27771 },
                    end: { line: 982, column: 11, offset: 27778 }
                  }
                }
              ],
              position: {
                start: { line: 982, column: 4, offset: 27771 },
                end: { line: 982, column: 11, offset: 27778 }
              }
            }
          ],
          position: {
            start: { line: 982, column: 2, offset: 27769 },
            end: { line: 982, column: 11, offset: 27778 }
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
                    start: { line: 983, column: 4, offset: 27782 },
                    end: { line: 983, column: 12, offset: 27790 }
                  }
                }
              ],
              position: {
                start: { line: 983, column: 4, offset: 27782 },
                end: { line: 983, column: 12, offset: 27790 }
              }
            }
          ],
          position: {
            start: { line: 983, column: 2, offset: 27780 },
            end: { line: 983, column: 12, offset: 27790 }
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
                    start: { line: 984, column: 4, offset: 27794 },
                    end: { line: 984, column: 9, offset: 27799 }
                  }
                }
              ],
              position: {
                start: { line: 984, column: 4, offset: 27794 },
                end: { line: 984, column: 9, offset: 27799 }
              }
            }
          ],
          position: {
            start: { line: 984, column: 2, offset: 27792 },
            end: { line: 984, column: 9, offset: 27799 }
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
                    start: { line: 985, column: 4, offset: 27803 },
                    end: { line: 985, column: 15, offset: 27814 }
                  }
                }
              ],
              position: {
                start: { line: 985, column: 4, offset: 27803 },
                end: { line: 985, column: 15, offset: 27814 }
              }
            }
          ],
          position: {
            start: { line: 985, column: 2, offset: 27801 },
            end: { line: 985, column: 15, offset: 27814 }
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
                    start: { line: 986, column: 4, offset: 27818 },
                    end: { line: 986, column: 21, offset: 27835 }
                  }
                }
              ],
              position: {
                start: { line: 986, column: 4, offset: 27818 },
                end: { line: 986, column: 21, offset: 27835 }
              }
            }
          ],
          position: {
            start: { line: 986, column: 2, offset: 27816 },
            end: { line: 986, column: 21, offset: 27835 }
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
                    start: { line: 987, column: 4, offset: 27839 },
                    end: { line: 987, column: 12, offset: 27847 }
                  }
                }
              ],
              position: {
                start: { line: 987, column: 4, offset: 27839 },
                end: { line: 987, column: 12, offset: 27847 }
              }
            }
          ],
          position: {
            start: { line: 987, column: 2, offset: 27837 },
            end: { line: 987, column: 12, offset: 27847 }
          }
        }
      ],
      position: {
        start: { line: 982, column: 2, offset: 27769 },
        end: { line: 987, column: 12, offset: 27847 }
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
            start: { line: 989, column: 4, offset: 27852 },
            end: { line: 989, column: 14, offset: 27862 }
          }
        }
      ],
      position: {
        start: { line: 989, column: 1, offset: 27849 },
        end: { line: 989, column: 14, offset: 27862 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Data Types in [A]synchronous Functional Programming.',
          position: {
            start: { line: 991, column: 1, offset: 27864 },
            end: { line: 991, column: 68, offset: 27931 }
          }
        }
      ],
      position: {
        start: { line: 991, column: 1, offset: 27864 },
        end: { line: 991, column: 68, offset: 27931 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are interested in getting started with Rubico and [A]synchronous Functional Programming, please visit Rubico's home page: ",
          position: {
            start: { line: 993, column: 1, offset: 27933 },
            end: { line: 993, column: 130, offset: 28062 }
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
                start: { line: 993, column: 131, offset: 28063 },
                end: { line: 993, column: 142, offset: 28074 }
              }
            }
          ],
          position: {
            start: { line: 993, column: 130, offset: 28062 },
            end: { line: 993, column: 146, offset: 28078 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 993, column: 146, offset: 28078 },
            end: { line: 993, column: 147, offset: 28079 }
          }
        }
      ],
      position: {
        start: { line: 993, column: 1, offset: 27933 },
        end: { line: 993, column: 147, offset: 28079 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 994, column: 1, offset: 28080 }
  }
}