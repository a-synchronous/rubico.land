export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types used for the [A]synchronous Functional Programming paradigm\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to [A]synchronous Functional Programming Data Types. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 10, column: 1, offset: 310 },
            end: { line: 10, column: 183, offset: 492 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 310 },
        end: { line: 10, column: 183, offset: 492 }
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
            start: { line: 12, column: 4, offset: 497 },
            end: { line: 12, column: 24, offset: 517 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 494 },
        end: { line: 12, column: 24, offset: 517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 13, column: 1, offset: 518 },
            end: { line: 13, column: 250, offset: 767 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 518 },
        end: { line: 13, column: 250, offset: 767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 15, column: 1, offset: 769 },
            end: { line: 15, column: 64, offset: 832 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 15, column: 64, offset: 832 },
            end: { line: 15, column: 67, offset: 835 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 15, column: 67, offset: 835 },
            end: { line: 15, column: 105, offset: 873 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 15, column: 105, offset: 873 },
            end: { line: 15, column: 110, offset: 878 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 15, column: 110, offset: 878 },
            end: { line: 15, column: 185, offset: 953 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 769 },
        end: { line: 15, column: 185, offset: 953 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 17, column: 1, offset: 955 },
        end: { line: 19, column: 4, offset: 974 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 21, column: 1, offset: 976 },
            end: { line: 21, column: 22, offset: 997 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 22, offset: 997 },
            end: { line: 21, column: 30, offset: 1005 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 21, column: 30, offset: 1005 },
            end: { line: 21, column: 79, offset: 1054 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 79, offset: 1054 },
            end: { line: 21, column: 87, offset: 1062 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 21, column: 87, offset: 1062 },
            end: { line: 21, column: 147, offset: 1122 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 976 },
        end: { line: 21, column: 147, offset: 1122 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 23, column: 1, offset: 1124 },
        end: { line: 25, column: 4, offset: 1158 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 27, column: 1, offset: 1160 },
            end: { line: 27, column: 56, offset: 1215 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 27, column: 56, offset: 1215 },
            end: { line: 27, column: 63, offset: 1222 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 27, column: 63, offset: 1222 },
            end: { line: 27, column: 67, offset: 1226 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 27, column: 67, offset: 1226 },
            end: { line: 27, column: 83, offset: 1242 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 27, column: 83, offset: 1242 },
            end: { line: 27, column: 249, offset: 1408 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1160 },
        end: { line: 27, column: 249, offset: 1408 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 29, column: 1, offset: 1410 },
        end: { line: 31, column: 4, offset: 1442 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 33, column: 1, offset: 1444 },
            end: { line: 33, column: 22, offset: 1465 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 22, offset: 1465 },
            end: { line: 33, column: 30, offset: 1473 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 33, column: 30, offset: 1473 },
            end: { line: 33, column: 79, offset: 1522 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 79, offset: 1522 },
            end: { line: 33, column: 87, offset: 1530 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 33, column: 87, offset: 1530 },
            end: { line: 33, column: 147, offset: 1590 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1444 },
        end: { line: 33, column: 147, offset: 1590 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 35, column: 1, offset: 1592 },
        end: { line: 37, column: 4, offset: 1626 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 39, column: 1, offset: 1628 },
            end: { line: 39, column: 63, offset: 1690 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 39, column: 63, offset: 1690 },
            end: { line: 39, column: 69, offset: 1696 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 39, column: 69, offset: 1696 },
            end: { line: 39, column: 73, offset: 1700 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 39, column: 73, offset: 1700 },
            end: { line: 39, column: 80, offset: 1707 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 39, column: 80, offset: 1707 },
            end: { line: 39, column: 135, offset: 1762 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1628 },
        end: { line: 39, column: 135, offset: 1762 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 41, column: 1, offset: 1764 },
        end: { line: 43, column: 4, offset: 1786 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 45, column: 1, offset: 1788 },
            end: { line: 45, column: 130, offset: 1917 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 45, column: 130, offset: 1917 },
            end: { line: 45, column: 134, offset: 1921 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 134, offset: 1921 },
            end: { line: 45, column: 136, offset: 1923 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 45, column: 136, offset: 1923 },
            end: { line: 45, column: 139, offset: 1926 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 139, offset: 1926 },
            end: { line: 45, column: 141, offset: 1928 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 45, column: 141, offset: 1928 },
            end: { line: 45, column: 144, offset: 1931 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 144, offset: 1931 },
            end: { line: 45, column: 146, offset: 1933 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 45, column: 146, offset: 1933 },
            end: { line: 45, column: 150, offset: 1937 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 150, offset: 1937 },
            end: { line: 45, column: 152, offset: 1939 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 45, column: 152, offset: 1939 },
            end: { line: 45, column: 156, offset: 1943 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 156, offset: 1943 },
            end: { line: 45, column: 158, offset: 1945 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 45, column: 158, offset: 1945 },
            end: { line: 45, column: 162, offset: 1949 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 45, column: 162, offset: 1949 },
            end: { line: 45, column: 167, offset: 1954 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 45, column: 167, offset: 1954 },
            end: { line: 45, column: 171, offset: 1958 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 45, column: 171, offset: 1958 },
            end: { line: 45, column: 213, offset: 2000 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 45, column: 213, offset: 2000 },
            end: { line: 45, column: 217, offset: 2004 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 45, column: 217, offset: 2004 },
            end: { line: 45, column: 255, offset: 2042 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1788 },
        end: { line: 45, column: 255, offset: 2042 }
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
        start: { line: 47, column: 1, offset: 2044 },
        end: { line: 54, column: 4, offset: 2181 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 56, column: 1, offset: 2183 },
            end: { line: 56, column: 22, offset: 2204 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 56, column: 22, offset: 2204 },
            end: { line: 56, column: 31, offset: 2213 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 56, column: 31, offset: 2213 },
            end: { line: 56, column: 64, offset: 2246 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2183 },
        end: { line: 56, column: 64, offset: 2246 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 58, column: 1, offset: 2248 },
        end: { line: 60, column: 4, offset: 2285 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 62, column: 1, offset: 2287 },
            end: { line: 62, column: 206, offset: 2492 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2287 },
        end: { line: 62, column: 206, offset: 2492 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 64, column: 1, offset: 2494 },
        end: { line: 67, column: 4, offset: 2579 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 69, column: 1, offset: 2581 },
            end: { line: 69, column: 141, offset: 2721 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2581 },
        end: { line: 69, column: 141, offset: 2721 }
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
        start: { line: 71, column: 1, offset: 2723 },
        end: { line: 77, column: 4, offset: 2894 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 79, column: 1, offset: 2896 },
            end: { line: 79, column: 54, offset: 2949 }
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
                start: { line: 79, column: 55, offset: 2950 },
                end: { line: 79, column: 64, offset: 2959 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 54, offset: 2949 },
            end: { line: 79, column: 126, offset: 3021 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 79, column: 126, offset: 3021 },
            end: { line: 79, column: 195, offset: 3090 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2896 },
        end: { line: 79, column: 195, offset: 3090 }
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
        start: { line: 81, column: 1, offset: 3092 },
        end: { line: 86, column: 4, offset: 3259 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 88, column: 1, offset: 3261 },
            end: { line: 88, column: 130, offset: 3390 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 88, column: 130, offset: 3390 },
            end: { line: 88, column: 140, offset: 3400 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 88, column: 140, offset: 3400 },
            end: { line: 88, column: 150, offset: 3410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 88, column: 150, offset: 3410 },
            end: { line: 88, column: 163, offset: 3423 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 88, column: 163, offset: 3423 },
            end: { line: 88, column: 164, offset: 3424 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3261 },
        end: { line: 88, column: 164, offset: 3424 }
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
        start: { line: 90, column: 1, offset: 3426 },
        end: { line: 99, column: 4, offset: 3595 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 101, column: 1, offset: 3597 },
            end: { line: 101, column: 34, offset: 3630 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 101, column: 34, offset: 3630 },
            end: { line: 101, column: 51, offset: 3647 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 51, offset: 3647 },
            end: { line: 101, column: 56, offset: 3652 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 101, column: 56, offset: 3652 },
            end: { line: 101, column: 78, offset: 3674 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 101, column: 78, offset: 3674 },
            end: { line: 101, column: 185, offset: 3781 }
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
                start: { line: 101, column: 186, offset: 3782 },
                end: { line: 101, column: 203, offset: 3799 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 185, offset: 3781 },
            end: { line: 101, column: 313, offset: 3909 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 313, offset: 3909 },
            end: { line: 101, column: 318, offset: 3914 }
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
                start: { line: 101, column: 319, offset: 3915 },
                end: { line: 101, column: 342, offset: 3938 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 318, offset: 3914 },
            end: { line: 101, column: 478, offset: 4074 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3597 },
        end: { line: 101, column: 478, offset: 4074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 103, column: 1, offset: 4076 },
            end: { line: 103, column: 104, offset: 4179 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 104, offset: 4179 },
            end: { line: 103, column: 110, offset: 4185 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 103, column: 110, offset: 4185 },
            end: { line: 103, column: 115, offset: 4190 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 115, offset: 4190 },
            end: { line: 103, column: 126, offset: 4201 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 103, column: 126, offset: 4201 },
            end: { line: 103, column: 295, offset: 4370 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 295, offset: 4370 },
            end: { line: 103, column: 301, offset: 4376 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 103, column: 301, offset: 4376 },
            end: { line: 103, column: 397, offset: 4472 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 397, offset: 4472 },
            end: { line: 103, column: 408, offset: 4483 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 103, column: 408, offset: 4483 },
            end: { line: 103, column: 451, offset: 4526 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 451, offset: 4526 },
            end: { line: 103, column: 462, offset: 4537 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 103, column: 462, offset: 4537 },
            end: { line: 103, column: 479, offset: 4554 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 4076 },
        end: { line: 103, column: 479, offset: 4554 }
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
        start: { line: 105, column: 1, offset: 4556 },
        end: { line: 118, column: 4, offset: 4834 }
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
            start: { line: 120, column: 5, offset: 4840 },
            end: { line: 120, column: 42, offset: 4877 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4836 },
        end: { line: 120, column: 42, offset: 4877 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 121, column: 1, offset: 4878 },
            end: { line: 121, column: 329, offset: 5206 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4878 },
        end: { line: 121, column: 329, offset: 5206 }
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
            start: { line: 123, column: 4, offset: 5211 },
            end: { line: 123, column: 25, offset: 5232 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 5208 },
        end: { line: 123, column: 25, offset: 5232 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 124, column: 1, offset: 5233 },
            end: { line: 124, column: 429, offset: 5661 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5233 },
        end: { line: 124, column: 429, offset: 5661 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 126, column: 1, offset: 5663 },
            end: { line: 126, column: 175, offset: 5837 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 126, column: 175, offset: 5837 },
            end: { line: 126, column: 182, offset: 5844 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 126, column: 182, offset: 5844 },
            end: { line: 126, column: 195, offset: 5857 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5663 },
        end: { line: 126, column: 195, offset: 5857 }
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
        start: { line: 128, column: 1, offset: 5859 },
        end: { line: 136, column: 4, offset: 6126 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 138, column: 1, offset: 6128 },
            end: { line: 138, column: 56, offset: 6183 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 138, column: 56, offset: 6183 },
            end: { line: 138, column: 63, offset: 6190 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 138, column: 63, offset: 6190 },
            end: { line: 138, column: 76, offset: 6203 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 6128 },
        end: { line: 138, column: 76, offset: 6203 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 140, column: 1, offset: 6205 },
        end: { line: 143, column: 4, offset: 6318 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 145, column: 1, offset: 6320 },
            end: { line: 145, column: 40, offset: 6359 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 145, column: 40, offset: 6359 },
            end: { line: 145, column: 48, offset: 6367 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 145, column: 48, offset: 6367 },
            end: { line: 145, column: 53, offset: 6372 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 145, column: 53, offset: 6372 },
            end: { line: 145, column: 59, offset: 6378 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 145, column: 59, offset: 6378 },
            end: { line: 145, column: 83, offset: 6402 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 6320 },
        end: { line: 145, column: 83, offset: 6402 }
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
        start: { line: 147, column: 1, offset: 6404 },
        end: { line: 152, column: 4, offset: 6531 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 154, column: 1, offset: 6533 },
            end: { line: 154, column: 42, offset: 6574 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 154, column: 42, offset: 6574 },
            end: { line: 154, column: 49, offset: 6581 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 154, column: 49, offset: 6581 },
            end: { line: 154, column: 66, offset: 6598 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 6533 },
        end: { line: 154, column: 66, offset: 6598 }
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
        start: { line: 156, column: 1, offset: 6600 },
        end: { line: 162, column: 4, offset: 6705 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 164, column: 1, offset: 6707 },
            end: { line: 164, column: 42, offset: 6748 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 164, column: 42, offset: 6748 },
            end: { line: 164, column: 51, offset: 6757 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 164, column: 51, offset: 6757 },
            end: { line: 164, column: 68, offset: 6774 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6707 },
        end: { line: 164, column: 68, offset: 6774 }
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
        start: { line: 166, column: 1, offset: 6776 },
        end: { line: 172, column: 4, offset: 6927 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 174, column: 1, offset: 6929 },
            end: { line: 174, column: 52, offset: 6980 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 174, column: 52, offset: 6980 },
            end: { line: 174, column: 62, offset: 6990 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 174, column: 62, offset: 6990 },
            end: { line: 174, column: 68, offset: 6996 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 6929 },
        end: { line: 174, column: 68, offset: 6996 }
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
        start: { line: 176, column: 1, offset: 6998 },
        end: { line: 187, column: 4, offset: 7142 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 189, column: 1, offset: 7144 },
            end: { line: 189, column: 202, offset: 7345 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 7144 },
        end: { line: 189, column: 202, offset: 7345 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 191, column: 1, offset: 7347 },
        end: { line: 193, column: 4, offset: 7383 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 195, column: 1, offset: 7385 },
            end: { line: 195, column: 22, offset: 7406 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 195, column: 22, offset: 7406 },
            end: { line: 195, column: 30, offset: 7414 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 195, column: 30, offset: 7414 },
            end: { line: 195, column: 93, offset: 7477 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 7385 },
        end: { line: 195, column: 93, offset: 7477 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 197, column: 1, offset: 7479 },
        end: { line: 199, column: 4, offset: 7509 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 201, column: 1, offset: 7511 },
            end: { line: 201, column: 142, offset: 7652 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 7511 },
        end: { line: 201, column: 142, offset: 7652 }
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
        start: { line: 203, column: 1, offset: 7654 },
        end: { line: 211, column: 4, offset: 7885 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 213, column: 1, offset: 7887 },
            end: { line: 213, column: 73, offset: 7959 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 213, column: 73, offset: 7959 },
            end: { line: 213, column: 81, offset: 7967 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 213, column: 81, offset: 7967 },
            end: { line: 213, column: 90, offset: 7976 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 7887 },
        end: { line: 213, column: 90, offset: 7976 }
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
        start: { line: 215, column: 1, offset: 7978 },
        end: { line: 220, column: 4, offset: 8178 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 222, column: 1, offset: 8180 },
            end: { line: 222, column: 66, offset: 8245 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 222, column: 66, offset: 8245 },
            end: { line: 222, column: 76, offset: 8255 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 222, column: 76, offset: 8255 },
            end: { line: 222, column: 82, offset: 8261 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 8180 },
        end: { line: 222, column: 82, offset: 8261 }
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
        start: { line: 224, column: 1, offset: 8263 },
        end: { line: 233, column: 4, offset: 8425 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 235, column: 1, offset: 8427 },
            end: { line: 235, column: 169, offset: 8595 }
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
                start: { line: 235, column: 170, offset: 8596 },
                end: { line: 235, column: 183, offset: 8609 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 169, offset: 8595 },
            end: { line: 235, column: 306, offset: 8732 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 235, column: 306, offset: 8732 },
            end: { line: 235, column: 469, offset: 8895 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 235, column: 469, offset: 8895 },
            end: { line: 235, column: 475, offset: 8901 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 235, column: 475, offset: 8901 },
            end: { line: 235, column: 483, offset: 8909 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 8427 },
        end: { line: 235, column: 483, offset: 8909 }
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
        start: { line: 237, column: 1, offset: 8911 },
        end: { line: 242, column: 4, offset: 9094 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 244, column: 1, offset: 9096 },
            end: { line: 244, column: 26, offset: 9121 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 244, column: 26, offset: 9121 },
            end: { line: 244, column: 31, offset: 9126 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 244, column: 31, offset: 9126 },
            end: { line: 244, column: 44, offset: 9139 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 9096 },
        end: { line: 244, column: 44, offset: 9139 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 246, column: 1, offset: 9141 },
        end: { line: 248, column: 4, offset: 9177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 250, column: 1, offset: 9179 },
            end: { line: 250, column: 42, offset: 9220 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 250, column: 42, offset: 9220 },
            end: { line: 250, column: 48, offset: 9226 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 250, column: 48, offset: 9226 },
            end: { line: 250, column: 65, offset: 9243 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 9179 },
        end: { line: 250, column: 65, offset: 9243 }
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
        start: { line: 252, column: 1, offset: 9245 },
        end: { line: 260, column: 4, offset: 9395 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 262, column: 1, offset: 9397 },
            end: { line: 262, column: 42, offset: 9438 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 262, column: 42, offset: 9438 },
            end: { line: 262, column: 51, offset: 9447 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 262, column: 51, offset: 9447 },
            end: { line: 262, column: 68, offset: 9464 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9397 },
        end: { line: 262, column: 68, offset: 9464 }
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
        start: { line: 264, column: 1, offset: 9466 },
        end: { line: 270, column: 4, offset: 9585 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 272, column: 1, offset: 9587 },
            end: { line: 272, column: 49, offset: 9635 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 272, column: 49, offset: 9635 },
            end: { line: 272, column: 59, offset: 9645 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 272, column: 59, offset: 9645 },
            end: { line: 272, column: 65, offset: 9651 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9587 },
        end: { line: 272, column: 65, offset: 9651 }
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
        start: { line: 274, column: 1, offset: 9653 },
        end: { line: 285, column: 4, offset: 9806 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 287, column: 1, offset: 9808 },
            end: { line: 287, column: 202, offset: 10009 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 9808 },
        end: { line: 287, column: 202, offset: 10009 }
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
                    start: { line: 288, column: 5, offset: 10014 },
                    end: { line: 288, column: 113, offset: 10122 }
                  }
                }
              ],
              position: {
                start: { line: 288, column: 5, offset: 10014 },
                end: { line: 288, column: 113, offset: 10122 }
              }
            }
          ],
          position: {
            start: { line: 288, column: 3, offset: 10012 },
            end: { line: 288, column: 113, offset: 10122 }
          }
        },
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
                    start: { line: 289, column: 5, offset: 10127 },
                    end: { line: 289, column: 94, offset: 10216 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 289, column: 94, offset: 10216 },
                    end: { line: 289, column: 110, offset: 10232 }
                  }
                }
              ],
              position: {
                start: { line: 289, column: 5, offset: 10127 },
                end: { line: 289, column: 110, offset: 10232 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 3, offset: 10125 },
            end: { line: 289, column: 110, offset: 10232 }
          }
        },
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
                    start: { line: 290, column: 5, offset: 10237 },
                    end: { line: 290, column: 130, offset: 10362 }
                  }
                }
              ],
              position: {
                start: { line: 290, column: 5, offset: 10237 },
                end: { line: 290, column: 130, offset: 10362 }
              }
            }
          ],
          position: {
            start: { line: 290, column: 3, offset: 10235 },
            end: { line: 290, column: 130, offset: 10362 }
          }
        },
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
                    start: { line: 291, column: 5, offset: 10367 },
                    end: { line: 291, column: 28, offset: 10390 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 291, column: 28, offset: 10390 },
                    end: { line: 291, column: 38, offset: 10400 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 291, column: 38, offset: 10400 },
                    end: { line: 291, column: 64, offset: 10426 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 291, column: 64, offset: 10426 },
                    end: { line: 291, column: 74, offset: 10436 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 291, column: 74, offset: 10436 },
                    end: { line: 291, column: 80, offset: 10442 }
                  }
                }
              ],
              position: {
                start: { line: 291, column: 5, offset: 10367 },
                end: { line: 291, column: 80, offset: 10442 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 3, offset: 10365 },
            end: { line: 291, column: 80, offset: 10442 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 3, offset: 10012 },
        end: { line: 291, column: 80, offset: 10442 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 293, column: 1, offset: 10444 },
            end: { line: 293, column: 9, offset: 10452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 9, offset: 10452 },
            end: { line: 293, column: 14, offset: 10457 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 293, column: 14, offset: 10457 },
            end: { line: 293, column: 48, offset: 10491 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 48, offset: 10491 },
            end: { line: 293, column: 53, offset: 10496 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 293, column: 53, offset: 10496 },
            end: { line: 293, column: 124, offset: 10567 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 10444 },
        end: { line: 293, column: 124, offset: 10567 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 295, column: 1, offset: 10569 },
        end: { line: 301, column: 4, offset: 10645 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 303, column: 1, offset: 10647 },
            end: { line: 303, column: 42, offset: 10688 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 303, column: 42, offset: 10688 },
            end: { line: 303, column: 48, offset: 10694 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 303, column: 48, offset: 10694 },
            end: { line: 303, column: 65, offset: 10711 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 10647 },
        end: { line: 303, column: 65, offset: 10711 }
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
        start: { line: 305, column: 1, offset: 10713 },
        end: { line: 312, column: 4, offset: 10864 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 314, column: 1, offset: 10866 },
            end: { line: 314, column: 42, offset: 10907 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 314, column: 42, offset: 10907 },
            end: { line: 314, column: 51, offset: 10916 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 314, column: 51, offset: 10916 },
            end: { line: 314, column: 68, offset: 10933 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10866 },
        end: { line: 314, column: 68, offset: 10933 }
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
        start: { line: 316, column: 1, offset: 10935 },
        end: { line: 326, column: 4, offset: 11088 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 328, column: 1, offset: 11090 },
            end: { line: 328, column: 49, offset: 11138 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 328, column: 49, offset: 11138 },
            end: { line: 328, column: 59, offset: 11148 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 328, column: 59, offset: 11148 },
            end: { line: 328, column: 65, offset: 11154 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 11090 },
        end: { line: 328, column: 65, offset: 11154 }
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
        start: { line: 330, column: 1, offset: 11156 },
        end: { line: 343, column: 4, offset: 11421 }
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
            start: { line: 345, column: 5, offset: 11427 },
            end: { line: 345, column: 53, offset: 11475 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 11423 },
        end: { line: 345, column: 53, offset: 11475 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 347, column: 1, offset: 11477 },
            end: { line: 347, column: 323, offset: 11799 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 11477 },
        end: { line: 347, column: 323, offset: 11799 }
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
            start: { line: 349, column: 4, offset: 11804 },
            end: { line: 349, column: 23, offset: 11823 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 11801 },
        end: { line: 349, column: 23, offset: 11823 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 350, column: 1, offset: 11824 },
            end: { line: 350, column: 115, offset: 11938 }
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
                start: { line: 350, column: 116, offset: 11939 },
                end: { line: 350, column: 133, offset: 11956 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 115, offset: 11938 },
            end: { line: 350, column: 243, offset: 12066 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 350, column: 243, offset: 12066 },
            end: { line: 350, column: 259, offset: 12082 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 259, offset: 12082 },
            end: { line: 350, column: 278, offset: 12101 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the ',
          position: {
            start: { line: 350, column: 278, offset: 12101 },
            end: { line: 350, column: 438, offset: 12261 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 438, offset: 12261 },
            end: { line: 350, column: 457, offset: 12280 }
          }
        },
        {
          type: 'text',
          value: ' method, and can be consumed with a ',
          position: {
            start: { line: 350, column: 457, offset: 12280 },
            end: { line: 350, column: 493, offset: 12316 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 350, column: 493, offset: 12316 },
            end: { line: 350, column: 503, offset: 12326 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 350, column: 503, offset: 12326 },
            end: { line: 350, column: 509, offset: 12332 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 11824 },
        end: { line: 350, column: 509, offset: 12332 }
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
        start: { line: 352, column: 1, offset: 12334 },
        end: { line: 370, column: 4, offset: 12763 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 372, column: 1, offset: 12765 },
            end: { line: 372, column: 78, offset: 12842 }
          }
        }
      ],
      position: {
        start: { line: 372, column: 1, offset: 12765 },
        end: { line: 372, column: 78, offset: 12842 }
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
        start: { line: 374, column: 1, offset: 12844 },
        end: { line: 410, column: 4, offset: 13325 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A convenient way to create iterators is with generator functions using the ',
          position: {
            start: { line: 412, column: 1, offset: 13327 },
            end: { line: 412, column: 76, offset: 13402 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 412, column: 76, offset: 13402 },
            end: { line: 412, column: 93, offset: 13419 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 412, column: 93, offset: 13419 },
            end: { line: 412, column: 109, offset: 13435 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 412, column: 109, offset: 13435 },
            end: { line: 412, column: 116, offset: 13442 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Generator functions create generators, a kind of iterator.',
          position: {
            start: { line: 412, column: 116, offset: 13442 },
            end: { line: 412, column: 184, offset: 13510 }
          }
        }
      ],
      position: {
        start: { line: 412, column: 1, offset: 13327 },
        end: { line: 412, column: 184, offset: 13510 }
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
        start: { line: 414, column: 1, offset: 13512 },
        end: { line: 432, column: 4, offset: 13878 }
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
            start: { line: 434, column: 4, offset: 13883 },
            end: { line: 434, column: 27, offset: 13906 }
          }
        }
      ],
      position: {
        start: { line: 434, column: 1, offset: 13880 },
        end: { line: 434, column: 27, offset: 13906 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 435, column: 1, offset: 13907 },
            end: { line: 435, column: 184, offset: 14090 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 1, offset: 13907 },
        end: { line: 435, column: 184, offset: 14090 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 437, column: 1, offset: 14092 },
            end: { line: 437, column: 203, offset: 14294 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 437, column: 203, offset: 14294 },
            end: { line: 437, column: 210, offset: 14301 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 437, column: 210, offset: 14301 },
            end: { line: 437, column: 240, offset: 14331 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 14092 },
        end: { line: 437, column: 240, offset: 14331 }
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
        start: { line: 439, column: 1, offset: 14333 },
        end: { line: 445, column: 4, offset: 14507 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 447, column: 1, offset: 14509 },
            end: { line: 447, column: 31, offset: 14539 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 447, column: 31, offset: 14539 },
            end: { line: 447, column: 38, offset: 14546 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 447, column: 38, offset: 14546 },
            end: { line: 447, column: 43, offset: 14551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 447, column: 43, offset: 14551 },
            end: { line: 447, column: 50, offset: 14558 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 447, column: 50, offset: 14558 },
            end: { line: 447, column: 111, offset: 14619 }
          }
        }
      ],
      position: {
        start: { line: 447, column: 1, offset: 14509 },
        end: { line: 447, column: 111, offset: 14619 }
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
        start: { line: 449, column: 1, offset: 14621 },
        end: { line: 458, column: 4, offset: 14848 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 460, column: 1, offset: 14850 },
            end: { line: 460, column: 17, offset: 14866 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 460, column: 17, offset: 14866 },
            end: { line: 460, column: 26, offset: 14875 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 460, column: 26, offset: 14875 },
            end: { line: 460, column: 59, offset: 14908 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 14850 },
        end: { line: 460, column: 59, offset: 14908 }
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
        start: { line: 462, column: 1, offset: 14910 },
        end: { line: 482, column: 4, offset: 15327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 484, column: 1, offset: 15329 },
            end: { line: 484, column: 85, offset: 15413 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 15329 },
        end: { line: 484, column: 85, offset: 15413 }
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
        start: { line: 486, column: 1, offset: 15415 },
        end: { line: 490, column: 4, offset: 15603 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 492, column: 1, offset: 15605 },
            end: { line: 492, column: 112, offset: 15716 }
          }
        }
      ],
      position: {
        start: { line: 492, column: 1, offset: 15605 },
        end: { line: 492, column: 112, offset: 15716 }
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
        start: { line: 494, column: 1, offset: 15718 },
        end: { line: 506, column: 4, offset: 16055 }
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
            start: { line: 508, column: 4, offset: 16060 },
            end: { line: 508, column: 36, offset: 16092 }
          }
        }
      ],
      position: {
        start: { line: 508, column: 1, offset: 16057 },
        end: { line: 508, column: 36, offset: 16092 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 509, column: 1, offset: 16093 },
            end: { line: 509, column: 143, offset: 16235 }
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
                start: { line: 509, column: 144, offset: 16236 },
                end: { line: 509, column: 167, offset: 16259 }
              }
            }
          ],
          position: {
            start: { line: 509, column: 143, offset: 16235 },
            end: { line: 509, column: 303, offset: 16395 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 509, column: 303, offset: 16395 },
            end: { line: 509, column: 319, offset: 16411 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]',
          position: {
            start: { line: 509, column: 319, offset: 16411 },
            end: { line: 509, column: 343, offset: 16435 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an async iterator object that can be consumed with a ',
          position: {
            start: { line: 509, column: 343, offset: 16435 },
            end: { line: 509, column: 424, offset: 16516 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 509, column: 424, offset: 16516 },
            end: { line: 509, column: 440, offset: 16532 }
          }
        },
        {
          type: 'text',
          value: ' loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.',
          position: {
            start: { line: 509, column: 440, offset: 16532 },
            end: { line: 509, column: 699, offset: 16791 }
          }
        }
      ],
      position: {
        start: { line: 509, column: 1, offset: 16093 },
        end: { line: 509, column: 699, offset: 16791 }
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
        start: { line: 511, column: 1, offset: 16793 },
        end: { line: 551, column: 4, offset: 17386 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can create async iterators is with async generator functions using the ',
          position: {
            start: { line: 553, column: 1, offset: 17388 },
            end: { line: 553, column: 76, offset: 17463 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 553, column: 76, offset: 17463 },
            end: { line: 553, column: 99, offset: 17486 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 553, column: 99, offset: 17486 },
            end: { line: 553, column: 115, offset: 17502 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 553, column: 115, offset: 17502 },
            end: { line: 553, column: 122, offset: 17509 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Async generator functions create async generators, a kind of async iterator.',
          position: {
            start: { line: 553, column: 122, offset: 17509 },
            end: { line: 553, column: 208, offset: 17595 }
          }
        }
      ],
      position: {
        start: { line: 553, column: 1, offset: 17388 },
        end: { line: 553, column: 208, offset: 17595 }
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
        start: { line: 555, column: 1, offset: 17597 },
        end: { line: 575, column: 4, offset: 18077 }
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
            start: { line: 577, column: 4, offset: 18082 },
            end: { line: 577, column: 24, offset: 18102 }
          }
        }
      ],
      position: {
        start: { line: 577, column: 1, offset: 18079 },
        end: { line: 577, column: 24, offset: 18102 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 578, column: 1, offset: 18103 },
            end: { line: 578, column: 253, offset: 18355 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 18103 },
        end: { line: 578, column: 253, offset: 18355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 580, column: 1, offset: 18357 },
            end: { line: 580, column: 64, offset: 18420 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 64, offset: 18420 },
            end: { line: 580, column: 70, offset: 18426 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 580, column: 70, offset: 18426 },
            end: { line: 580, column: 103, offset: 18459 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 103, offset: 18459 },
            end: { line: 580, column: 109, offset: 18465 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 580, column: 109, offset: 18465 },
            end: { line: 580, column: 143, offset: 18499 }
          }
        }
      ],
      position: {
        start: { line: 580, column: 1, offset: 18357 },
        end: { line: 580, column: 143, offset: 18499 }
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
                    start: { line: 582, column: 6, offset: 18506 },
                    end: { line: 582, column: 51, offset: 18551 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 582, column: 51, offset: 18551 },
                    end: { line: 582, column: 59, offset: 18559 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 582, column: 59, offset: 18559 },
                    end: { line: 582, column: 120, offset: 18620 }
                  }
                }
              ],
              position: {
                start: { line: 582, column: 6, offset: 18506 },
                end: { line: 582, column: 120, offset: 18620 }
              }
            }
          ],
          position: {
            start: { line: 582, column: 3, offset: 18503 },
            end: { line: 582, column: 120, offset: 18620 }
          }
        }
      ],
      position: {
        start: { line: 582, column: 3, offset: 18503 },
        end: { line: 582, column: 120, offset: 18620 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 584, column: 1, offset: 18622 },
        end: { line: 589, column: 4, offset: 18699 }
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
                    start: { line: 591, column: 6, offset: 18706 },
                    end: { line: 591, column: 64, offset: 18764 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 64, offset: 18764 },
                    end: { line: 591, column: 70, offset: 18770 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 591, column: 70, offset: 18770 },
                    end: { line: 591, column: 127, offset: 18827 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 127, offset: 18827 },
                    end: { line: 591, column: 133, offset: 18833 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 591, column: 133, offset: 18833 },
                    end: { line: 591, column: 144, offset: 18844 }
                  }
                }
              ],
              position: {
                start: { line: 591, column: 6, offset: 18706 },
                end: { line: 591, column: 144, offset: 18844 }
              }
            }
          ],
          position: {
            start: { line: 591, column: 3, offset: 18703 },
            end: { line: 591, column: 144, offset: 18844 }
          }
        }
      ],
      position: {
        start: { line: 591, column: 3, offset: 18703 },
        end: { line: 591, column: 144, offset: 18844 }
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
        start: { line: 593, column: 1, offset: 18846 },
        end: { line: 598, column: 4, offset: 18944 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 600, column: 1, offset: 18946 },
            end: { line: 600, column: 65, offset: 19010 }
          }
        }
      ],
      position: {
        start: { line: 600, column: 1, offset: 18946 },
        end: { line: 600, column: 65, offset: 19010 }
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
                    start: { line: 601, column: 4, offset: 19014 },
                    end: { line: 601, column: 11, offset: 19021 }
                  }
                }
              ],
              position: {
                start: { line: 601, column: 4, offset: 19014 },
                end: { line: 601, column: 11, offset: 19021 }
              }
            }
          ],
          position: {
            start: { line: 601, column: 2, offset: 19012 },
            end: { line: 601, column: 11, offset: 19021 }
          }
        },
        {
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
                    start: { line: 602, column: 4, offset: 19025 },
                    end: { line: 602, column: 9, offset: 19030 }
                  }
                }
              ],
              position: {
                start: { line: 602, column: 4, offset: 19025 },
                end: { line: 602, column: 9, offset: 19030 }
              }
            }
          ],
          position: {
            start: { line: 602, column: 2, offset: 19023 },
            end: { line: 602, column: 9, offset: 19030 }
          }
        },
        {
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
                    start: { line: 603, column: 4, offset: 19034 },
                    end: { line: 603, column: 9, offset: 19039 }
                  }
                }
              ],
              position: {
                start: { line: 603, column: 4, offset: 19034 },
                end: { line: 603, column: 9, offset: 19039 }
              }
            }
          ],
          position: {
            start: { line: 603, column: 2, offset: 19032 },
            end: { line: 603, column: 9, offset: 19039 }
          }
        },
        {
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
                    start: { line: 604, column: 4, offset: 19043 },
                    end: { line: 604, column: 15, offset: 19054 }
                  }
                }
              ],
              position: {
                start: { line: 604, column: 4, offset: 19043 },
                end: { line: 604, column: 15, offset: 19054 }
              }
            }
          ],
          position: {
            start: { line: 604, column: 2, offset: 19041 },
            end: { line: 604, column: 15, offset: 19054 }
          }
        },
        {
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
                    start: { line: 605, column: 4, offset: 19058 },
                    end: { line: 605, column: 21, offset: 19075 }
                  }
                }
              ],
              position: {
                start: { line: 605, column: 4, offset: 19058 },
                end: { line: 605, column: 21, offset: 19075 }
              }
            }
          ],
          position: {
            start: { line: 605, column: 2, offset: 19056 },
            end: { line: 605, column: 21, offset: 19075 }
          }
        },
        {
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
                    start: { line: 606, column: 4, offset: 19079 },
                    end: { line: 606, column: 12, offset: 19087 }
                  }
                }
              ],
              position: {
                start: { line: 606, column: 4, offset: 19079 },
                end: { line: 606, column: 12, offset: 19087 }
              }
            }
          ],
          position: {
            start: { line: 606, column: 2, offset: 19077 },
            end: { line: 606, column: 12, offset: 19087 }
          }
        }
      ],
      position: {
        start: { line: 601, column: 2, offset: 19012 },
        end: { line: 606, column: 12, offset: 19087 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 608, column: 1, offset: 19089 },
            end: { line: 608, column: 67, offset: 19155 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 67, offset: 19155 },
            end: { line: 608, column: 76, offset: 19164 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 608, column: 76, offset: 19164 },
            end: { line: 608, column: 109, offset: 19197 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 109, offset: 19197 },
            end: { line: 608, column: 118, offset: 19206 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 608, column: 118, offset: 19206 },
            end: { line: 608, column: 154, offset: 19242 }
          }
        }
      ],
      position: {
        start: { line: 608, column: 1, offset: 19089 },
        end: { line: 608, column: 154, offset: 19242 }
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
                    start: { line: 610, column: 6, offset: 19249 },
                    end: { line: 610, column: 98, offset: 19341 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 98, offset: 19341 },
                    end: { line: 610, column: 107, offset: 19350 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 610, column: 107, offset: 19350 },
                    end: { line: 610, column: 210, offset: 19453 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 210, offset: 19453 },
                    end: { line: 610, column: 219, offset: 19462 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 610, column: 219, offset: 19462 },
                    end: { line: 610, column: 220, offset: 19463 }
                  }
                }
              ],
              position: {
                start: { line: 610, column: 6, offset: 19249 },
                end: { line: 610, column: 220, offset: 19463 }
              }
            }
          ],
          position: {
            start: { line: 610, column: 3, offset: 19246 },
            end: { line: 610, column: 220, offset: 19463 }
          }
        }
      ],
      position: {
        start: { line: 610, column: 3, offset: 19246 },
        end: { line: 610, column: 220, offset: 19463 }
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
        start: { line: 612, column: 1, offset: 19465 },
        end: { line: 617, column: 4, offset: 19580 }
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
                    start: { line: 619, column: 6, offset: 19587 },
                    end: { line: 619, column: 122, offset: 19703 }
                  }
                }
              ],
              position: {
                start: { line: 619, column: 6, offset: 19587 },
                end: { line: 619, column: 122, offset: 19703 }
              }
            }
          ],
          position: {
            start: { line: 619, column: 3, offset: 19584 },
            end: { line: 619, column: 122, offset: 19703 }
          }
        }
      ],
      position: {
        start: { line: 619, column: 3, offset: 19584 },
        end: { line: 619, column: 122, offset: 19703 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 621, column: 1, offset: 19705 },
        end: { line: 626, column: 4, offset: 19793 }
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
                    start: { line: 628, column: 6, offset: 19800 },
                    end: { line: 628, column: 160, offset: 19954 }
                  }
                }
              ],
              position: {
                start: { line: 628, column: 6, offset: 19800 },
                end: { line: 628, column: 160, offset: 19954 }
              }
            }
          ],
          position: {
            start: { line: 628, column: 3, offset: 19797 },
            end: { line: 628, column: 160, offset: 19954 }
          }
        }
      ],
      position: {
        start: { line: 628, column: 3, offset: 19797 },
        end: { line: 628, column: 160, offset: 19954 }
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
        start: { line: 630, column: 1, offset: 19956 },
        end: { line: 635, column: 4, offset: 20067 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 637, column: 1, offset: 20069 },
            end: { line: 637, column: 68, offset: 20136 }
          }
        }
      ],
      position: {
        start: { line: 637, column: 1, offset: 20069 },
        end: { line: 637, column: 68, offset: 20136 }
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
                    start: { line: 638, column: 4, offset: 20140 },
                    end: { line: 638, column: 11, offset: 20147 }
                  }
                }
              ],
              position: {
                start: { line: 638, column: 4, offset: 20140 },
                end: { line: 638, column: 11, offset: 20147 }
              }
            }
          ],
          position: {
            start: { line: 638, column: 2, offset: 20138 },
            end: { line: 638, column: 11, offset: 20147 }
          }
        },
        {
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
                    start: { line: 639, column: 4, offset: 20151 },
                    end: { line: 639, column: 9, offset: 20156 }
                  }
                }
              ],
              position: {
                start: { line: 639, column: 4, offset: 20151 },
                end: { line: 639, column: 9, offset: 20156 }
              }
            }
          ],
          position: {
            start: { line: 639, column: 2, offset: 20149 },
            end: { line: 639, column: 9, offset: 20156 }
          }
        },
        {
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
                    start: { line: 640, column: 4, offset: 20160 },
                    end: { line: 640, column: 9, offset: 20165 }
                  }
                }
              ],
              position: {
                start: { line: 640, column: 4, offset: 20160 },
                end: { line: 640, column: 9, offset: 20165 }
              }
            }
          ],
          position: {
            start: { line: 640, column: 2, offset: 20158 },
            end: { line: 640, column: 9, offset: 20165 }
          }
        },
        {
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
                    start: { line: 641, column: 4, offset: 20169 },
                    end: { line: 641, column: 15, offset: 20180 }
                  }
                }
              ],
              position: {
                start: { line: 641, column: 4, offset: 20169 },
                end: { line: 641, column: 15, offset: 20180 }
              }
            }
          ],
          position: {
            start: { line: 641, column: 2, offset: 20167 },
            end: { line: 641, column: 15, offset: 20180 }
          }
        },
        {
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
                    start: { line: 642, column: 4, offset: 20184 },
                    end: { line: 642, column: 21, offset: 20201 }
                  }
                }
              ],
              position: {
                start: { line: 642, column: 4, offset: 20184 },
                end: { line: 642, column: 21, offset: 20201 }
              }
            }
          ],
          position: {
            start: { line: 642, column: 2, offset: 20182 },
            end: { line: 642, column: 21, offset: 20201 }
          }
        },
        {
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
                    start: { line: 643, column: 4, offset: 20205 },
                    end: { line: 643, column: 12, offset: 20213 }
                  }
                }
              ],
              position: {
                start: { line: 643, column: 4, offset: 20205 },
                end: { line: 643, column: 12, offset: 20213 }
              }
            }
          ],
          position: {
            start: { line: 643, column: 2, offset: 20203 },
            end: { line: 643, column: 12, offset: 20213 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 2, offset: 20138 },
        end: { line: 643, column: 12, offset: 20213 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 645, column: 1, offset: 20215 },
            end: { line: 645, column: 65, offset: 20279 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 65, offset: 20279 },
            end: { line: 645, column: 74, offset: 20288 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 645, column: 74, offset: 20288 },
            end: { line: 645, column: 107, offset: 20321 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 107, offset: 20321 },
            end: { line: 645, column: 116, offset: 20330 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 645, column: 116, offset: 20330 },
            end: { line: 645, column: 151, offset: 20365 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 20215 },
        end: { line: 645, column: 152, offset: 20366 }
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
                    start: { line: 647, column: 6, offset: 20373 },
                    end: { line: 647, column: 87, offset: 20454 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 647, column: 87, offset: 20454 },
                    end: { line: 647, column: 96, offset: 20463 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 647, column: 96, offset: 20463 },
                    end: { line: 647, column: 254, offset: 20621 }
                  }
                }
              ],
              position: {
                start: { line: 647, column: 6, offset: 20373 },
                end: { line: 647, column: 254, offset: 20621 }
              }
            }
          ],
          position: {
            start: { line: 647, column: 3, offset: 20370 },
            end: { line: 647, column: 254, offset: 20621 }
          }
        }
      ],
      position: {
        start: { line: 647, column: 3, offset: 20370 },
        end: { line: 647, column: 254, offset: 20621 }
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
        start: { line: 649, column: 1, offset: 20623 },
        end: { line: 656, column: 4, offset: 20793 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 658, column: 1, offset: 20795 },
            end: { line: 658, column: 66, offset: 20860 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 20795 },
        end: { line: 658, column: 66, offset: 20860 }
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
                    start: { line: 659, column: 4, offset: 20864 },
                    end: { line: 659, column: 11, offset: 20871 }
                  }
                }
              ],
              position: {
                start: { line: 659, column: 4, offset: 20864 },
                end: { line: 659, column: 11, offset: 20871 }
              }
            }
          ],
          position: {
            start: { line: 659, column: 2, offset: 20862 },
            end: { line: 659, column: 11, offset: 20871 }
          }
        },
        {
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
                    start: { line: 660, column: 4, offset: 20875 },
                    end: { line: 660, column: 9, offset: 20880 }
                  }
                }
              ],
              position: {
                start: { line: 660, column: 4, offset: 20875 },
                end: { line: 660, column: 9, offset: 20880 }
              }
            }
          ],
          position: {
            start: { line: 660, column: 2, offset: 20873 },
            end: { line: 660, column: 9, offset: 20880 }
          }
        },
        {
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
                    start: { line: 661, column: 4, offset: 20884 },
                    end: { line: 661, column: 9, offset: 20889 }
                  }
                }
              ],
              position: {
                start: { line: 661, column: 4, offset: 20884 },
                end: { line: 661, column: 9, offset: 20889 }
              }
            }
          ],
          position: {
            start: { line: 661, column: 2, offset: 20882 },
            end: { line: 661, column: 9, offset: 20889 }
          }
        },
        {
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
                    start: { line: 662, column: 4, offset: 20893 },
                    end: { line: 662, column: 15, offset: 20904 }
                  }
                }
              ],
              position: {
                start: { line: 662, column: 4, offset: 20893 },
                end: { line: 662, column: 15, offset: 20904 }
              }
            }
          ],
          position: {
            start: { line: 662, column: 2, offset: 20891 },
            end: { line: 662, column: 15, offset: 20904 }
          }
        },
        {
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
                    start: { line: 663, column: 4, offset: 20908 },
                    end: { line: 663, column: 21, offset: 20925 }
                  }
                }
              ],
              position: {
                start: { line: 663, column: 4, offset: 20908 },
                end: { line: 663, column: 21, offset: 20925 }
              }
            }
          ],
          position: {
            start: { line: 663, column: 2, offset: 20906 },
            end: { line: 663, column: 21, offset: 20925 }
          }
        },
        {
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
                    start: { line: 664, column: 4, offset: 20929 },
                    end: { line: 664, column: 12, offset: 20937 }
                  }
                }
              ],
              position: {
                start: { line: 664, column: 4, offset: 20929 },
                end: { line: 664, column: 12, offset: 20937 }
              }
            }
          ],
          position: {
            start: { line: 664, column: 2, offset: 20927 },
            end: { line: 664, column: 12, offset: 20937 }
          }
        }
      ],
      position: {
        start: { line: 659, column: 2, offset: 20862 },
        end: { line: 664, column: 12, offset: 20937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 666, column: 1, offset: 20939 },
            end: { line: 666, column: 66, offset: 21004 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 66, offset: 21004 },
            end: { line: 666, column: 75, offset: 21013 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 666, column: 75, offset: 21013 },
            end: { line: 666, column: 108, offset: 21046 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 108, offset: 21046 },
            end: { line: 666, column: 117, offset: 21055 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 666, column: 117, offset: 21055 },
            end: { line: 666, column: 153, offset: 21091 }
          }
        }
      ],
      position: {
        start: { line: 666, column: 1, offset: 20939 },
        end: { line: 666, column: 153, offset: 21091 }
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
                    start: { line: 668, column: 6, offset: 21098 },
                    end: { line: 668, column: 163, offset: 21255 }
                  }
                }
              ],
              position: {
                start: { line: 668, column: 6, offset: 21098 },
                end: { line: 668, column: 163, offset: 21255 }
              }
            }
          ],
          position: {
            start: { line: 668, column: 3, offset: 21095 },
            end: { line: 668, column: 163, offset: 21255 }
          }
        }
      ],
      position: {
        start: { line: 668, column: 3, offset: 21095 },
        end: { line: 668, column: 163, offset: 21255 }
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
        start: { line: 670, column: 1, offset: 21257 },
        end: { line: 675, column: 4, offset: 21371 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 677, column: 1, offset: 21373 },
            end: { line: 677, column: 67, offset: 21439 }
          }
        }
      ],
      position: {
        start: { line: 677, column: 1, offset: 21373 },
        end: { line: 677, column: 67, offset: 21439 }
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
                    start: { line: 678, column: 4, offset: 21443 },
                    end: { line: 678, column: 11, offset: 21450 }
                  }
                }
              ],
              position: {
                start: { line: 678, column: 4, offset: 21443 },
                end: { line: 678, column: 11, offset: 21450 }
              }
            }
          ],
          position: {
            start: { line: 678, column: 2, offset: 21441 },
            end: { line: 678, column: 11, offset: 21450 }
          }
        },
        {
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
                    start: { line: 679, column: 4, offset: 21454 },
                    end: { line: 679, column: 12, offset: 21462 }
                  }
                }
              ],
              position: {
                start: { line: 679, column: 4, offset: 21454 },
                end: { line: 679, column: 12, offset: 21462 }
              }
            }
          ],
          position: {
            start: { line: 679, column: 2, offset: 21452 },
            end: { line: 679, column: 12, offset: 21462 }
          }
        },
        {
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
                    start: { line: 680, column: 4, offset: 21466 },
                    end: { line: 680, column: 9, offset: 21471 }
                  }
                }
              ],
              position: {
                start: { line: 680, column: 4, offset: 21466 },
                end: { line: 680, column: 9, offset: 21471 }
              }
            }
          ],
          position: {
            start: { line: 680, column: 2, offset: 21464 },
            end: { line: 680, column: 9, offset: 21471 }
          }
        },
        {
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
                    start: { line: 681, column: 4, offset: 21475 },
                    end: { line: 681, column: 12, offset: 21483 }
                  }
                }
              ],
              position: {
                start: { line: 681, column: 4, offset: 21475 },
                end: { line: 681, column: 12, offset: 21483 }
              }
            }
          ],
          position: {
            start: { line: 681, column: 2, offset: 21473 },
            end: { line: 681, column: 12, offset: 21483 }
          }
        },
        {
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
                    start: { line: 682, column: 4, offset: 21487 },
                    end: { line: 682, column: 12, offset: 21495 }
                  }
                }
              ],
              position: {
                start: { line: 682, column: 4, offset: 21487 },
                end: { line: 682, column: 12, offset: 21495 }
              }
            }
          ],
          position: {
            start: { line: 682, column: 2, offset: 21485 },
            end: { line: 682, column: 12, offset: 21495 }
          }
        }
      ],
      position: {
        start: { line: 678, column: 2, offset: 21441 },
        end: { line: 682, column: 12, offset: 21495 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 684, column: 1, offset: 21497 },
            end: { line: 684, column: 62, offset: 21558 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 62, offset: 21558 },
            end: { line: 684, column: 72, offset: 21568 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 72, offset: 21568 },
            end: { line: 684, column: 76, offset: 21572 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 76, offset: 21572 },
            end: { line: 684, column: 84, offset: 21580 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 684, column: 84, offset: 21580 },
            end: { line: 684, column: 118, offset: 21614 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 118, offset: 21614 },
            end: { line: 684, column: 128, offset: 21624 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 128, offset: 21624 },
            end: { line: 684, column: 132, offset: 21628 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 132, offset: 21628 },
            end: { line: 684, column: 140, offset: 21636 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 684, column: 140, offset: 21636 },
            end: { line: 684, column: 172, offset: 21668 }
          }
        }
      ],
      position: {
        start: { line: 684, column: 1, offset: 21497 },
        end: { line: 684, column: 172, offset: 21668 }
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
                    start: { line: 686, column: 6, offset: 21675 },
                    end: { line: 686, column: 78, offset: 21747 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 686, column: 78, offset: 21747 },
                    end: { line: 686, column: 88, offset: 21757 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 686, column: 88, offset: 21757 },
                    end: { line: 686, column: 92, offset: 21761 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 686, column: 92, offset: 21761 },
                    end: { line: 686, column: 100, offset: 21769 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 686, column: 100, offset: 21769 },
                    end: { line: 686, column: 178, offset: 21847 }
                  }
                }
              ],
              position: {
                start: { line: 686, column: 6, offset: 21675 },
                end: { line: 686, column: 178, offset: 21847 }
              }
            }
          ],
          position: {
            start: { line: 686, column: 3, offset: 21672 },
            end: { line: 686, column: 178, offset: 21847 }
          }
        }
      ],
      position: {
        start: { line: 686, column: 3, offset: 21672 },
        end: { line: 686, column: 178, offset: 21847 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).chain(f),\n  f(a),\n)',
      position: {
        start: { line: 688, column: 1, offset: 21849 },
        end: { line: 693, column: 4, offset: 21921 }
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
                    start: { line: 695, column: 6, offset: 21928 },
                    end: { line: 695, column: 120, offset: 22042 }
                  }
                }
              ],
              position: {
                start: { line: 695, column: 6, offset: 21928 },
                end: { line: 695, column: 120, offset: 22042 }
              }
            }
          ],
          position: {
            start: { line: 695, column: 3, offset: 21925 },
            end: { line: 695, column: 120, offset: 22042 }
          }
        }
      ],
      position: {
        start: { line: 695, column: 3, offset: 21925 },
        end: { line: 695, column: 120, offset: 22042 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.chain(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 697, column: 1, offset: 22044 },
        end: { line: 702, column: 4, offset: 22121 }
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
                    start: { line: 704, column: 6, offset: 22128 },
                    end: { line: 704, column: 111, offset: 22233 }
                  }
                }
              ],
              position: {
                start: { line: 704, column: 6, offset: 22128 },
                end: { line: 704, column: 111, offset: 22233 }
              }
            }
          ],
          position: {
            start: { line: 704, column: 3, offset: 22125 },
            end: { line: 704, column: 111, offset: 22233 }
          }
        }
      ],
      position: {
        start: { line: 704, column: 3, offset: 22125 },
        end: { line: 704, column: 111, offset: 22233 }
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
        start: { line: 706, column: 1, offset: 22235 },
        end: { line: 711, column: 4, offset: 22338 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 713, column: 1, offset: 22340 },
            end: { line: 713, column: 63, offset: 22402 }
          }
        }
      ],
      position: {
        start: { line: 713, column: 1, offset: 22340 },
        end: { line: 713, column: 63, offset: 22402 }
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
                    start: { line: 714, column: 4, offset: 22406 },
                    end: { line: 714, column: 11, offset: 22413 }
                  }
                }
              ],
              position: {
                start: { line: 714, column: 4, offset: 22406 },
                end: { line: 714, column: 11, offset: 22413 }
              }
            }
          ],
          position: {
            start: { line: 714, column: 2, offset: 22404 },
            end: { line: 714, column: 11, offset: 22413 }
          }
        },
        {
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
                    start: { line: 715, column: 4, offset: 22417 },
                    end: { line: 715, column: 12, offset: 22425 }
                  }
                }
              ],
              position: {
                start: { line: 715, column: 4, offset: 22417 },
                end: { line: 715, column: 12, offset: 22425 }
              }
            }
          ],
          position: {
            start: { line: 715, column: 2, offset: 22415 },
            end: { line: 715, column: 12, offset: 22425 }
          }
        },
        {
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
                    start: { line: 716, column: 4, offset: 22429 },
                    end: { line: 716, column: 9, offset: 22434 }
                  }
                }
              ],
              position: {
                start: { line: 716, column: 4, offset: 22429 },
                end: { line: 716, column: 9, offset: 22434 }
              }
            }
          ],
          position: {
            start: { line: 716, column: 2, offset: 22427 },
            end: { line: 716, column: 9, offset: 22434 }
          }
        },
        {
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
                    start: { line: 717, column: 4, offset: 22438 },
                    end: { line: 717, column: 15, offset: 22449 }
                  }
                }
              ],
              position: {
                start: { line: 717, column: 4, offset: 22438 },
                end: { line: 717, column: 15, offset: 22449 }
              }
            }
          ],
          position: {
            start: { line: 717, column: 2, offset: 22436 },
            end: { line: 717, column: 15, offset: 22449 }
          }
        },
        {
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
                    start: { line: 718, column: 4, offset: 22453 },
                    end: { line: 718, column: 21, offset: 22470 }
                  }
                }
              ],
              position: {
                start: { line: 718, column: 4, offset: 22453 },
                end: { line: 718, column: 21, offset: 22470 }
              }
            }
          ],
          position: {
            start: { line: 718, column: 2, offset: 22451 },
            end: { line: 718, column: 21, offset: 22470 }
          }
        },
        {
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
                    start: { line: 719, column: 4, offset: 22474 },
                    end: { line: 719, column: 12, offset: 22482 }
                  }
                }
              ],
              position: {
                start: { line: 719, column: 4, offset: 22474 },
                end: { line: 719, column: 12, offset: 22482 }
              }
            }
          ],
          position: {
            start: { line: 719, column: 2, offset: 22472 },
            end: { line: 719, column: 12, offset: 22482 }
          }
        }
      ],
      position: {
        start: { line: 714, column: 2, offset: 22404 },
        end: { line: 719, column: 12, offset: 22482 }
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
            start: { line: 721, column: 4, offset: 22487 },
            end: { line: 721, column: 14, offset: 22497 }
          }
        }
      ],
      position: {
        start: { line: 721, column: 1, offset: 22484 },
        end: { line: 721, column: 14, offset: 22497 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 723, column: 1, offset: 22499 },
            end: { line: 723, column: 85, offset: 22583 }
          }
        }
      ],
      position: {
        start: { line: 723, column: 1, offset: 22499 },
        end: { line: 723, column: 85, offset: 22583 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 725, column: 1, offset: 22585 },
            end: { line: 725, column: 141, offset: 22725 }
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
                start: { line: 725, column: 142, offset: 22726 },
                end: { line: 725, column: 153, offset: 22737 }
              }
            }
          ],
          position: {
            start: { line: 725, column: 141, offset: 22725 },
            end: { line: 725, column: 176, offset: 22760 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 725, column: 176, offset: 22760 },
            end: { line: 725, column: 177, offset: 22761 }
          }
        }
      ],
      position: {
        start: { line: 725, column: 1, offset: 22585 },
        end: { line: 725, column: 177, offset: 22761 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 726, column: 1, offset: 22762 }
  }
}