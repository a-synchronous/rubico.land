export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Data Types\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-13\n' +
        'path: /blog/a-synchronous-functional-programming-data-types\n' +
        'description: Data types in [A]synchronous Functional Programming\n' +
        'image: /assets/monad.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 289 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to [A]synchronous Functional Programming Data Types. In this article we will discuss the data types used for the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 10, column: 1, offset: 291 },
            end: { line: 10, column: 183, offset: 473 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 291 },
        end: { line: 10, column: 183, offset: 473 }
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
            start: { line: 12, column: 4, offset: 478 },
            end: { line: 12, column: 24, offset: 498 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 1, offset: 475 },
        end: { line: 12, column: 24, offset: 498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Primitive data types are fundamental, indivisible building blocks for data representation in all programming. For [A]synchronous Functional Programming, we will consider six primitive data types: number, string, boolean, binary, symbol, and nullish.',
          position: {
            start: { line: 13, column: 1, offset: 499 },
            end: { line: 13, column: 250, offset: 748 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 499 },
        end: { line: 13, column: 250, offset: 748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 15, column: 1, offset: 750 },
            end: { line: 15, column: 64, offset: 813 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 15, column: 64, offset: 813 },
            end: { line: 15, column: 67, offset: 816 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 15, column: 67, offset: 816 },
            end: { line: 15, column: 105, offset: 854 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 15, column: 105, offset: 854 },
            end: { line: 15, column: 110, offset: 859 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 15, column: 110, offset: 859 },
            end: { line: 15, column: 185, offset: 934 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 750 },
        end: { line: 15, column: 185, offset: 934 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 17, column: 1, offset: 936 },
        end: { line: 19, column: 4, offset: 955 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 21, column: 1, offset: 957 },
            end: { line: 21, column: 22, offset: 978 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 22, offset: 978 },
            end: { line: 21, column: 30, offset: 986 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 21, column: 30, offset: 986 },
            end: { line: 21, column: 79, offset: 1035 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 21, column: 79, offset: 1035 },
            end: { line: 21, column: 87, offset: 1043 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 21, column: 87, offset: 1043 },
            end: { line: 21, column: 147, offset: 1103 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 957 },
        end: { line: 21, column: 147, offset: 1103 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 23, column: 1, offset: 1105 },
        end: { line: 25, column: 4, offset: 1139 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 27, column: 1, offset: 1141 },
            end: { line: 27, column: 56, offset: 1196 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 27, column: 56, offset: 1196 },
            end: { line: 27, column: 63, offset: 1203 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 27, column: 63, offset: 1203 },
            end: { line: 27, column: 67, offset: 1207 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 27, column: 67, offset: 1207 },
            end: { line: 27, column: 83, offset: 1223 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 27, column: 83, offset: 1223 },
            end: { line: 27, column: 249, offset: 1389 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1141 },
        end: { line: 27, column: 249, offset: 1389 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 29, column: 1, offset: 1391 },
        end: { line: 31, column: 4, offset: 1423 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 33, column: 1, offset: 1425 },
            end: { line: 33, column: 22, offset: 1446 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 22, offset: 1446 },
            end: { line: 33, column: 30, offset: 1454 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 33, column: 30, offset: 1454 },
            end: { line: 33, column: 79, offset: 1503 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 33, column: 79, offset: 1503 },
            end: { line: 33, column: 87, offset: 1511 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 33, column: 87, offset: 1511 },
            end: { line: 33, column: 147, offset: 1571 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 1425 },
        end: { line: 33, column: 147, offset: 1571 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 35, column: 1, offset: 1573 },
        end: { line: 37, column: 4, offset: 1607 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 39, column: 1, offset: 1609 },
            end: { line: 39, column: 63, offset: 1671 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 39, column: 63, offset: 1671 },
            end: { line: 39, column: 69, offset: 1677 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 39, column: 69, offset: 1677 },
            end: { line: 39, column: 73, offset: 1681 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 39, column: 73, offset: 1681 },
            end: { line: 39, column: 80, offset: 1688 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 39, column: 80, offset: 1688 },
            end: { line: 39, column: 135, offset: 1743 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1609 },
        end: { line: 39, column: 135, offset: 1743 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 41, column: 1, offset: 1745 },
        end: { line: 43, column: 4, offset: 1767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 45, column: 1, offset: 1769 },
            end: { line: 45, column: 130, offset: 1898 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 45, column: 130, offset: 1898 },
            end: { line: 45, column: 134, offset: 1902 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 134, offset: 1902 },
            end: { line: 45, column: 136, offset: 1904 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 45, column: 136, offset: 1904 },
            end: { line: 45, column: 139, offset: 1907 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 139, offset: 1907 },
            end: { line: 45, column: 141, offset: 1909 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 45, column: 141, offset: 1909 },
            end: { line: 45, column: 144, offset: 1912 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 144, offset: 1912 },
            end: { line: 45, column: 146, offset: 1914 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 45, column: 146, offset: 1914 },
            end: { line: 45, column: 150, offset: 1918 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 150, offset: 1918 },
            end: { line: 45, column: 152, offset: 1920 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 45, column: 152, offset: 1920 },
            end: { line: 45, column: 156, offset: 1924 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 45, column: 156, offset: 1924 },
            end: { line: 45, column: 158, offset: 1926 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 45, column: 158, offset: 1926 },
            end: { line: 45, column: 162, offset: 1930 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 45, column: 162, offset: 1930 },
            end: { line: 45, column: 167, offset: 1935 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 45, column: 167, offset: 1935 },
            end: { line: 45, column: 171, offset: 1939 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 45, column: 171, offset: 1939 },
            end: { line: 45, column: 213, offset: 1981 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 45, column: 213, offset: 1981 },
            end: { line: 45, column: 217, offset: 1985 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 45, column: 217, offset: 1985 },
            end: { line: 45, column: 255, offset: 2023 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 1769 },
        end: { line: 45, column: 255, offset: 2023 }
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
        start: { line: 47, column: 1, offset: 2025 },
        end: { line: 54, column: 4, offset: 2162 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 56, column: 1, offset: 2164 },
            end: { line: 56, column: 22, offset: 2185 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 56, column: 22, offset: 2185 },
            end: { line: 56, column: 31, offset: 2194 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 56, column: 31, offset: 2194 },
            end: { line: 56, column: 64, offset: 2227 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2164 },
        end: { line: 56, column: 64, offset: 2227 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 58, column: 1, offset: 2229 },
        end: { line: 60, column: 4, offset: 2266 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 62, column: 1, offset: 2268 },
            end: { line: 62, column: 206, offset: 2473 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 2268 },
        end: { line: 62, column: 206, offset: 2473 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 64, column: 1, offset: 2475 },
        end: { line: 67, column: 4, offset: 2560 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 69, column: 1, offset: 2562 },
            end: { line: 69, column: 141, offset: 2702 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2562 },
        end: { line: 69, column: 141, offset: 2702 }
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
        start: { line: 71, column: 1, offset: 2704 },
        end: { line: 77, column: 4, offset: 2875 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 79, column: 1, offset: 2877 },
            end: { line: 79, column: 54, offset: 2930 }
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
                start: { line: 79, column: 55, offset: 2931 },
                end: { line: 79, column: 64, offset: 2940 }
              }
            }
          ],
          position: {
            start: { line: 79, column: 54, offset: 2930 },
            end: { line: 79, column: 126, offset: 3002 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 79, column: 126, offset: 3002 },
            end: { line: 79, column: 195, offset: 3071 }
          }
        }
      ],
      position: {
        start: { line: 79, column: 1, offset: 2877 },
        end: { line: 79, column: 195, offset: 3071 }
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
        start: { line: 81, column: 1, offset: 3073 },
        end: { line: 86, column: 4, offset: 3240 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 88, column: 1, offset: 3242 },
            end: { line: 88, column: 130, offset: 3371 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 88, column: 130, offset: 3371 },
            end: { line: 88, column: 140, offset: 3381 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 88, column: 140, offset: 3381 },
            end: { line: 88, column: 150, offset: 3391 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 88, column: 150, offset: 3391 },
            end: { line: 88, column: 163, offset: 3404 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 88, column: 163, offset: 3404 },
            end: { line: 88, column: 164, offset: 3405 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3242 },
        end: { line: 88, column: 164, offset: 3405 }
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
        start: { line: 90, column: 1, offset: 3407 },
        end: { line: 99, column: 4, offset: 3576 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 101, column: 1, offset: 3578 },
            end: { line: 101, column: 34, offset: 3611 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 101, column: 34, offset: 3611 },
            end: { line: 101, column: 51, offset: 3628 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 51, offset: 3628 },
            end: { line: 101, column: 56, offset: 3633 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 101, column: 56, offset: 3633 },
            end: { line: 101, column: 78, offset: 3655 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 101, column: 78, offset: 3655 },
            end: { line: 101, column: 185, offset: 3762 }
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
                start: { line: 101, column: 186, offset: 3763 },
                end: { line: 101, column: 203, offset: 3780 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 185, offset: 3762 },
            end: { line: 101, column: 313, offset: 3890 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 101, column: 313, offset: 3890 },
            end: { line: 101, column: 318, offset: 3895 }
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
                start: { line: 101, column: 319, offset: 3896 },
                end: { line: 101, column: 342, offset: 3919 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 318, offset: 3895 },
            end: { line: 101, column: 478, offset: 4055 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 3578 },
        end: { line: 101, column: 478, offset: 4055 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 103, column: 1, offset: 4057 },
            end: { line: 103, column: 104, offset: 4160 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 104, offset: 4160 },
            end: { line: 103, column: 110, offset: 4166 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 103, column: 110, offset: 4166 },
            end: { line: 103, column: 115, offset: 4171 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 115, offset: 4171 },
            end: { line: 103, column: 126, offset: 4182 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 103, column: 126, offset: 4182 },
            end: { line: 103, column: 295, offset: 4351 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 103, column: 295, offset: 4351 },
            end: { line: 103, column: 301, offset: 4357 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 103, column: 301, offset: 4357 },
            end: { line: 103, column: 397, offset: 4453 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 397, offset: 4453 },
            end: { line: 103, column: 408, offset: 4464 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 103, column: 408, offset: 4464 },
            end: { line: 103, column: 451, offset: 4507 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 103, column: 451, offset: 4507 },
            end: { line: 103, column: 462, offset: 4518 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 103, column: 462, offset: 4518 },
            end: { line: 103, column: 479, offset: 4535 }
          }
        }
      ],
      position: {
        start: { line: 103, column: 1, offset: 4057 },
        end: { line: 103, column: 479, offset: 4535 }
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
        start: { line: 105, column: 1, offset: 4537 },
        end: { line: 118, column: 4, offset: 4815 }
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
            start: { line: 120, column: 5, offset: 4821 },
            end: { line: 120, column: 42, offset: 4858 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 4817 },
        end: { line: 120, column: 42, offset: 4858 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 121, column: 1, offset: 4859 },
            end: { line: 121, column: 329, offset: 5187 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4859 },
        end: { line: 121, column: 329, offset: 5187 }
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
            start: { line: 123, column: 4, offset: 5192 },
            end: { line: 123, column: 25, offset: 5213 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 5189 },
        end: { line: 123, column: 25, offset: 5213 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 124, column: 1, offset: 5214 },
            end: { line: 124, column: 429, offset: 5642 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5214 },
        end: { line: 124, column: 429, offset: 5642 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 126, column: 1, offset: 5644 },
            end: { line: 126, column: 175, offset: 5818 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 126, column: 175, offset: 5818 },
            end: { line: 126, column: 182, offset: 5825 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 126, column: 182, offset: 5825 },
            end: { line: 126, column: 195, offset: 5838 }
          }
        }
      ],
      position: {
        start: { line: 126, column: 1, offset: 5644 },
        end: { line: 126, column: 195, offset: 5838 }
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
        start: { line: 128, column: 1, offset: 5840 },
        end: { line: 136, column: 4, offset: 6107 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 138, column: 1, offset: 6109 },
            end: { line: 138, column: 56, offset: 6164 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 138, column: 56, offset: 6164 },
            end: { line: 138, column: 63, offset: 6171 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 138, column: 63, offset: 6171 },
            end: { line: 138, column: 76, offset: 6184 }
          }
        }
      ],
      position: {
        start: { line: 138, column: 1, offset: 6109 },
        end: { line: 138, column: 76, offset: 6184 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 140, column: 1, offset: 6186 },
        end: { line: 143, column: 4, offset: 6299 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 145, column: 1, offset: 6301 },
            end: { line: 145, column: 40, offset: 6340 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 145, column: 40, offset: 6340 },
            end: { line: 145, column: 48, offset: 6348 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 145, column: 48, offset: 6348 },
            end: { line: 145, column: 53, offset: 6353 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 145, column: 53, offset: 6353 },
            end: { line: 145, column: 59, offset: 6359 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 145, column: 59, offset: 6359 },
            end: { line: 145, column: 83, offset: 6383 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 6301 },
        end: { line: 145, column: 83, offset: 6383 }
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
        start: { line: 147, column: 1, offset: 6385 },
        end: { line: 152, column: 4, offset: 6512 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 154, column: 1, offset: 6514 },
            end: { line: 154, column: 42, offset: 6555 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 154, column: 42, offset: 6555 },
            end: { line: 154, column: 49, offset: 6562 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 154, column: 49, offset: 6562 },
            end: { line: 154, column: 66, offset: 6579 }
          }
        }
      ],
      position: {
        start: { line: 154, column: 1, offset: 6514 },
        end: { line: 154, column: 66, offset: 6579 }
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
        start: { line: 156, column: 1, offset: 6581 },
        end: { line: 162, column: 4, offset: 6686 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 164, column: 1, offset: 6688 },
            end: { line: 164, column: 42, offset: 6729 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 164, column: 42, offset: 6729 },
            end: { line: 164, column: 51, offset: 6738 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 164, column: 51, offset: 6738 },
            end: { line: 164, column: 68, offset: 6755 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 6688 },
        end: { line: 164, column: 68, offset: 6755 }
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
        start: { line: 166, column: 1, offset: 6757 },
        end: { line: 172, column: 4, offset: 6908 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 174, column: 1, offset: 6910 },
            end: { line: 174, column: 52, offset: 6961 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 174, column: 52, offset: 6961 },
            end: { line: 174, column: 62, offset: 6971 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 174, column: 62, offset: 6971 },
            end: { line: 174, column: 68, offset: 6977 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 6910 },
        end: { line: 174, column: 68, offset: 6977 }
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
        start: { line: 176, column: 1, offset: 6979 },
        end: { line: 187, column: 4, offset: 7123 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 189, column: 1, offset: 7125 },
            end: { line: 189, column: 202, offset: 7326 }
          }
        }
      ],
      position: {
        start: { line: 189, column: 1, offset: 7125 },
        end: { line: 189, column: 202, offset: 7326 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 191, column: 1, offset: 7328 },
        end: { line: 193, column: 4, offset: 7364 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 195, column: 1, offset: 7366 },
            end: { line: 195, column: 22, offset: 7387 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 195, column: 22, offset: 7387 },
            end: { line: 195, column: 30, offset: 7395 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 195, column: 30, offset: 7395 },
            end: { line: 195, column: 93, offset: 7458 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 1, offset: 7366 },
        end: { line: 195, column: 93, offset: 7458 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 197, column: 1, offset: 7460 },
        end: { line: 199, column: 4, offset: 7490 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 201, column: 1, offset: 7492 },
            end: { line: 201, column: 142, offset: 7633 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 7492 },
        end: { line: 201, column: 142, offset: 7633 }
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
        start: { line: 203, column: 1, offset: 7635 },
        end: { line: 211, column: 4, offset: 7866 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 213, column: 1, offset: 7868 },
            end: { line: 213, column: 73, offset: 7940 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 213, column: 73, offset: 7940 },
            end: { line: 213, column: 81, offset: 7948 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 213, column: 81, offset: 7948 },
            end: { line: 213, column: 90, offset: 7957 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 7868 },
        end: { line: 213, column: 90, offset: 7957 }
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
        start: { line: 215, column: 1, offset: 7959 },
        end: { line: 220, column: 4, offset: 8159 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 222, column: 1, offset: 8161 },
            end: { line: 222, column: 66, offset: 8226 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 222, column: 66, offset: 8226 },
            end: { line: 222, column: 76, offset: 8236 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 222, column: 76, offset: 8236 },
            end: { line: 222, column: 82, offset: 8242 }
          }
        }
      ],
      position: {
        start: { line: 222, column: 1, offset: 8161 },
        end: { line: 222, column: 82, offset: 8242 }
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
        start: { line: 224, column: 1, offset: 8244 },
        end: { line: 233, column: 4, offset: 8406 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 235, column: 1, offset: 8408 },
            end: { line: 235, column: 169, offset: 8576 }
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
                start: { line: 235, column: 170, offset: 8577 },
                end: { line: 235, column: 183, offset: 8590 }
              }
            }
          ],
          position: {
            start: { line: 235, column: 169, offset: 8576 },
            end: { line: 235, column: 306, offset: 8713 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 235, column: 306, offset: 8713 },
            end: { line: 235, column: 469, offset: 8876 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 235, column: 469, offset: 8876 },
            end: { line: 235, column: 475, offset: 8882 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 235, column: 475, offset: 8882 },
            end: { line: 235, column: 483, offset: 8890 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 8408 },
        end: { line: 235, column: 483, offset: 8890 }
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
        start: { line: 237, column: 1, offset: 8892 },
        end: { line: 242, column: 4, offset: 9075 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 244, column: 1, offset: 9077 },
            end: { line: 244, column: 26, offset: 9102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 244, column: 26, offset: 9102 },
            end: { line: 244, column: 31, offset: 9107 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 244, column: 31, offset: 9107 },
            end: { line: 244, column: 44, offset: 9120 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 9077 },
        end: { line: 244, column: 44, offset: 9120 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 246, column: 1, offset: 9122 },
        end: { line: 248, column: 4, offset: 9158 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 250, column: 1, offset: 9160 },
            end: { line: 250, column: 42, offset: 9201 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 250, column: 42, offset: 9201 },
            end: { line: 250, column: 48, offset: 9207 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 250, column: 48, offset: 9207 },
            end: { line: 250, column: 65, offset: 9224 }
          }
        }
      ],
      position: {
        start: { line: 250, column: 1, offset: 9160 },
        end: { line: 250, column: 65, offset: 9224 }
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
        start: { line: 252, column: 1, offset: 9226 },
        end: { line: 260, column: 4, offset: 9376 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 262, column: 1, offset: 9378 },
            end: { line: 262, column: 42, offset: 9419 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 262, column: 42, offset: 9419 },
            end: { line: 262, column: 51, offset: 9428 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 262, column: 51, offset: 9428 },
            end: { line: 262, column: 68, offset: 9445 }
          }
        }
      ],
      position: {
        start: { line: 262, column: 1, offset: 9378 },
        end: { line: 262, column: 68, offset: 9445 }
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
        start: { line: 264, column: 1, offset: 9447 },
        end: { line: 270, column: 4, offset: 9566 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 272, column: 1, offset: 9568 },
            end: { line: 272, column: 49, offset: 9616 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 272, column: 49, offset: 9616 },
            end: { line: 272, column: 59, offset: 9626 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 272, column: 59, offset: 9626 },
            end: { line: 272, column: 65, offset: 9632 }
          }
        }
      ],
      position: {
        start: { line: 272, column: 1, offset: 9568 },
        end: { line: 272, column: 65, offset: 9632 }
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
        start: { line: 274, column: 1, offset: 9634 },
        end: { line: 285, column: 4, offset: 9787 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 287, column: 1, offset: 9789 },
            end: { line: 287, column: 202, offset: 9990 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 9789 },
        end: { line: 287, column: 202, offset: 9990 }
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
                    start: { line: 288, column: 5, offset: 9995 },
                    end: { line: 288, column: 113, offset: 10103 }
                  }
                }
              ],
              position: {
                start: { line: 288, column: 5, offset: 9995 },
                end: { line: 288, column: 113, offset: 10103 }
              }
            }
          ],
          position: {
            start: { line: 288, column: 3, offset: 9993 },
            end: { line: 288, column: 113, offset: 10103 }
          }
        },
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
                    start: { line: 289, column: 5, offset: 10108 },
                    end: { line: 289, column: 94, offset: 10197 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 289, column: 94, offset: 10197 },
                    end: { line: 289, column: 110, offset: 10213 }
                  }
                }
              ],
              position: {
                start: { line: 289, column: 5, offset: 10108 },
                end: { line: 289, column: 110, offset: 10213 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 3, offset: 10106 },
            end: { line: 289, column: 110, offset: 10213 }
          }
        },
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
                    start: { line: 290, column: 5, offset: 10218 },
                    end: { line: 290, column: 130, offset: 10343 }
                  }
                }
              ],
              position: {
                start: { line: 290, column: 5, offset: 10218 },
                end: { line: 290, column: 130, offset: 10343 }
              }
            }
          ],
          position: {
            start: { line: 290, column: 3, offset: 10216 },
            end: { line: 290, column: 130, offset: 10343 }
          }
        },
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
                    start: { line: 291, column: 5, offset: 10348 },
                    end: { line: 291, column: 28, offset: 10371 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 291, column: 28, offset: 10371 },
                    end: { line: 291, column: 38, offset: 10381 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 291, column: 38, offset: 10381 },
                    end: { line: 291, column: 64, offset: 10407 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 291, column: 64, offset: 10407 },
                    end: { line: 291, column: 74, offset: 10417 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 291, column: 74, offset: 10417 },
                    end: { line: 291, column: 80, offset: 10423 }
                  }
                }
              ],
              position: {
                start: { line: 291, column: 5, offset: 10348 },
                end: { line: 291, column: 80, offset: 10423 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 3, offset: 10346 },
            end: { line: 291, column: 80, offset: 10423 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 3, offset: 9993 },
        end: { line: 291, column: 80, offset: 10423 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 293, column: 1, offset: 10425 },
            end: { line: 293, column: 9, offset: 10433 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 9, offset: 10433 },
            end: { line: 293, column: 14, offset: 10438 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 293, column: 14, offset: 10438 },
            end: { line: 293, column: 48, offset: 10472 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 293, column: 48, offset: 10472 },
            end: { line: 293, column: 53, offset: 10477 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 293, column: 53, offset: 10477 },
            end: { line: 293, column: 124, offset: 10548 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 10425 },
        end: { line: 293, column: 124, offset: 10548 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 295, column: 1, offset: 10550 },
        end: { line: 301, column: 4, offset: 10626 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 303, column: 1, offset: 10628 },
            end: { line: 303, column: 42, offset: 10669 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 303, column: 42, offset: 10669 },
            end: { line: 303, column: 48, offset: 10675 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 303, column: 48, offset: 10675 },
            end: { line: 303, column: 65, offset: 10692 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 10628 },
        end: { line: 303, column: 65, offset: 10692 }
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
        start: { line: 305, column: 1, offset: 10694 },
        end: { line: 312, column: 4, offset: 10845 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 314, column: 1, offset: 10847 },
            end: { line: 314, column: 42, offset: 10888 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 314, column: 42, offset: 10888 },
            end: { line: 314, column: 51, offset: 10897 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 314, column: 51, offset: 10897 },
            end: { line: 314, column: 68, offset: 10914 }
          }
        }
      ],
      position: {
        start: { line: 314, column: 1, offset: 10847 },
        end: { line: 314, column: 68, offset: 10914 }
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
        start: { line: 316, column: 1, offset: 10916 },
        end: { line: 326, column: 4, offset: 11069 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 328, column: 1, offset: 11071 },
            end: { line: 328, column: 49, offset: 11119 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 328, column: 49, offset: 11119 },
            end: { line: 328, column: 59, offset: 11129 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 328, column: 59, offset: 11129 },
            end: { line: 328, column: 65, offset: 11135 }
          }
        }
      ],
      position: {
        start: { line: 328, column: 1, offset: 11071 },
        end: { line: 328, column: 65, offset: 11135 }
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
        start: { line: 330, column: 1, offset: 11137 },
        end: { line: 343, column: 4, offset: 11402 }
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
            start: { line: 345, column: 5, offset: 11408 },
            end: { line: 345, column: 53, offset: 11456 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 11404 },
        end: { line: 345, column: 53, offset: 11456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 347, column: 1, offset: 11458 },
            end: { line: 347, column: 323, offset: 11780 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 11458 },
        end: { line: 347, column: 323, offset: 11780 }
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
            start: { line: 349, column: 4, offset: 11785 },
            end: { line: 349, column: 23, offset: 11804 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 11782 },
        end: { line: 349, column: 23, offset: 11804 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 350, column: 1, offset: 11805 },
            end: { line: 350, column: 115, offset: 11919 }
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
                start: { line: 350, column: 116, offset: 11920 },
                end: { line: 350, column: 133, offset: 11937 }
              }
            }
          ],
          position: {
            start: { line: 350, column: 115, offset: 11919 },
            end: { line: 350, column: 243, offset: 12047 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 350, column: 243, offset: 12047 },
            end: { line: 350, column: 259, offset: 12063 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 259, offset: 12063 },
            end: { line: 350, column: 278, offset: 12082 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the ',
          position: {
            start: { line: 350, column: 278, offset: 12082 },
            end: { line: 350, column: 438, offset: 12242 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 350, column: 438, offset: 12242 },
            end: { line: 350, column: 457, offset: 12261 }
          }
        },
        {
          type: 'text',
          value: ' method, and can be consumed with a ',
          position: {
            start: { line: 350, column: 457, offset: 12261 },
            end: { line: 350, column: 493, offset: 12297 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 350, column: 493, offset: 12297 },
            end: { line: 350, column: 503, offset: 12307 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 350, column: 503, offset: 12307 },
            end: { line: 350, column: 509, offset: 12313 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 11805 },
        end: { line: 350, column: 509, offset: 12313 }
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
        start: { line: 352, column: 1, offset: 12315 },
        end: { line: 370, column: 4, offset: 12744 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 372, column: 1, offset: 12746 },
            end: { line: 372, column: 78, offset: 12823 }
          }
        }
      ],
      position: {
        start: { line: 372, column: 1, offset: 12746 },
        end: { line: 372, column: 78, offset: 12823 }
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
        start: { line: 374, column: 1, offset: 12825 },
        end: { line: 410, column: 4, offset: 13306 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A convenient way to create iterators is with generator functions using the ',
          position: {
            start: { line: 412, column: 1, offset: 13308 },
            end: { line: 412, column: 76, offset: 13383 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 412, column: 76, offset: 13383 },
            end: { line: 412, column: 93, offset: 13400 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 412, column: 93, offset: 13400 },
            end: { line: 412, column: 109, offset: 13416 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 412, column: 109, offset: 13416 },
            end: { line: 412, column: 116, offset: 13423 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Generator functions create generators, a kind of iterator.',
          position: {
            start: { line: 412, column: 116, offset: 13423 },
            end: { line: 412, column: 184, offset: 13491 }
          }
        }
      ],
      position: {
        start: { line: 412, column: 1, offset: 13308 },
        end: { line: 412, column: 184, offset: 13491 }
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
        start: { line: 414, column: 1, offset: 13493 },
        end: { line: 432, column: 4, offset: 13859 }
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
            start: { line: 434, column: 4, offset: 13864 },
            end: { line: 434, column: 27, offset: 13887 }
          }
        }
      ],
      position: {
        start: { line: 434, column: 1, offset: 13861 },
        end: { line: 434, column: 27, offset: 13887 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 435, column: 1, offset: 13888 },
            end: { line: 435, column: 184, offset: 14071 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 1, offset: 13888 },
        end: { line: 435, column: 184, offset: 14071 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 437, column: 1, offset: 14073 },
            end: { line: 437, column: 203, offset: 14275 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 437, column: 203, offset: 14275 },
            end: { line: 437, column: 210, offset: 14282 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 437, column: 210, offset: 14282 },
            end: { line: 437, column: 240, offset: 14312 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 14073 },
        end: { line: 437, column: 240, offset: 14312 }
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
        start: { line: 439, column: 1, offset: 14314 },
        end: { line: 445, column: 4, offset: 14488 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 447, column: 1, offset: 14490 },
            end: { line: 447, column: 31, offset: 14520 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 447, column: 31, offset: 14520 },
            end: { line: 447, column: 38, offset: 14527 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 447, column: 38, offset: 14527 },
            end: { line: 447, column: 43, offset: 14532 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 447, column: 43, offset: 14532 },
            end: { line: 447, column: 50, offset: 14539 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 447, column: 50, offset: 14539 },
            end: { line: 447, column: 111, offset: 14600 }
          }
        }
      ],
      position: {
        start: { line: 447, column: 1, offset: 14490 },
        end: { line: 447, column: 111, offset: 14600 }
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
        start: { line: 449, column: 1, offset: 14602 },
        end: { line: 458, column: 4, offset: 14829 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 460, column: 1, offset: 14831 },
            end: { line: 460, column: 17, offset: 14847 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 460, column: 17, offset: 14847 },
            end: { line: 460, column: 26, offset: 14856 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 460, column: 26, offset: 14856 },
            end: { line: 460, column: 59, offset: 14889 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 14831 },
        end: { line: 460, column: 59, offset: 14889 }
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
        start: { line: 462, column: 1, offset: 14891 },
        end: { line: 482, column: 4, offset: 15308 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 484, column: 1, offset: 15310 },
            end: { line: 484, column: 85, offset: 15394 }
          }
        }
      ],
      position: {
        start: { line: 484, column: 1, offset: 15310 },
        end: { line: 484, column: 85, offset: 15394 }
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
        start: { line: 486, column: 1, offset: 15396 },
        end: { line: 490, column: 4, offset: 15584 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 492, column: 1, offset: 15586 },
            end: { line: 492, column: 112, offset: 15697 }
          }
        }
      ],
      position: {
        start: { line: 492, column: 1, offset: 15586 },
        end: { line: 492, column: 112, offset: 15697 }
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
        start: { line: 494, column: 1, offset: 15699 },
        end: { line: 506, column: 4, offset: 16036 }
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
            start: { line: 508, column: 4, offset: 16041 },
            end: { line: 508, column: 36, offset: 16073 }
          }
        }
      ],
      position: {
        start: { line: 508, column: 1, offset: 16038 },
        end: { line: 508, column: 36, offset: 16073 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 509, column: 1, offset: 16074 },
            end: { line: 509, column: 143, offset: 16216 }
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
                start: { line: 509, column: 144, offset: 16217 },
                end: { line: 509, column: 167, offset: 16240 }
              }
            }
          ],
          position: {
            start: { line: 509, column: 143, offset: 16216 },
            end: { line: 509, column: 303, offset: 16376 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 509, column: 303, offset: 16376 },
            end: { line: 509, column: 319, offset: 16392 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]',
          position: {
            start: { line: 509, column: 319, offset: 16392 },
            end: { line: 509, column: 343, offset: 16416 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an async iterator object that can be consumed with a ',
          position: {
            start: { line: 509, column: 343, offset: 16416 },
            end: { line: 509, column: 424, offset: 16497 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 509, column: 424, offset: 16497 },
            end: { line: 509, column: 440, offset: 16513 }
          }
        },
        {
          type: 'text',
          value: ' loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.',
          position: {
            start: { line: 509, column: 440, offset: 16513 },
            end: { line: 509, column: 699, offset: 16772 }
          }
        }
      ],
      position: {
        start: { line: 509, column: 1, offset: 16074 },
        end: { line: 509, column: 699, offset: 16772 }
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
        start: { line: 511, column: 1, offset: 16774 },
        end: { line: 551, column: 4, offset: 17367 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can create async iterators is with async generator functions using the ',
          position: {
            start: { line: 553, column: 1, offset: 17369 },
            end: { line: 553, column: 76, offset: 17444 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 553, column: 76, offset: 17444 },
            end: { line: 553, column: 99, offset: 17467 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 553, column: 99, offset: 17467 },
            end: { line: 553, column: 115, offset: 17483 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 553, column: 115, offset: 17483 },
            end: { line: 553, column: 122, offset: 17490 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Async generator functions create async generators, a kind of async iterator.',
          position: {
            start: { line: 553, column: 122, offset: 17490 },
            end: { line: 553, column: 208, offset: 17576 }
          }
        }
      ],
      position: {
        start: { line: 553, column: 1, offset: 17369 },
        end: { line: 553, column: 208, offset: 17576 }
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
        start: { line: 555, column: 1, offset: 17578 },
        end: { line: 575, column: 4, offset: 18058 }
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
            start: { line: 577, column: 4, offset: 18063 },
            end: { line: 577, column: 24, offset: 18083 }
          }
        }
      ],
      position: {
        start: { line: 577, column: 1, offset: 18060 },
        end: { line: 577, column: 24, offset: 18083 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 578, column: 1, offset: 18084 },
            end: { line: 578, column: 253, offset: 18336 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 18084 },
        end: { line: 578, column: 253, offset: 18336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 580, column: 1, offset: 18338 },
            end: { line: 580, column: 64, offset: 18401 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 64, offset: 18401 },
            end: { line: 580, column: 70, offset: 18407 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 580, column: 70, offset: 18407 },
            end: { line: 580, column: 103, offset: 18440 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 580, column: 103, offset: 18440 },
            end: { line: 580, column: 109, offset: 18446 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 580, column: 109, offset: 18446 },
            end: { line: 580, column: 143, offset: 18480 }
          }
        }
      ],
      position: {
        start: { line: 580, column: 1, offset: 18338 },
        end: { line: 580, column: 143, offset: 18480 }
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
                    start: { line: 582, column: 6, offset: 18487 },
                    end: { line: 582, column: 51, offset: 18532 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 582, column: 51, offset: 18532 },
                    end: { line: 582, column: 59, offset: 18540 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 582, column: 59, offset: 18540 },
                    end: { line: 582, column: 120, offset: 18601 }
                  }
                }
              ],
              position: {
                start: { line: 582, column: 6, offset: 18487 },
                end: { line: 582, column: 120, offset: 18601 }
              }
            }
          ],
          position: {
            start: { line: 582, column: 3, offset: 18484 },
            end: { line: 582, column: 120, offset: 18601 }
          }
        }
      ],
      position: {
        start: { line: 582, column: 3, offset: 18484 },
        end: { line: 582, column: 120, offset: 18601 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 584, column: 1, offset: 18603 },
        end: { line: 589, column: 4, offset: 18680 }
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
                    start: { line: 591, column: 6, offset: 18687 },
                    end: { line: 591, column: 64, offset: 18745 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 64, offset: 18745 },
                    end: { line: 591, column: 70, offset: 18751 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 591, column: 70, offset: 18751 },
                    end: { line: 591, column: 127, offset: 18808 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 591, column: 127, offset: 18808 },
                    end: { line: 591, column: 133, offset: 18814 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 591, column: 133, offset: 18814 },
                    end: { line: 591, column: 144, offset: 18825 }
                  }
                }
              ],
              position: {
                start: { line: 591, column: 6, offset: 18687 },
                end: { line: 591, column: 144, offset: 18825 }
              }
            }
          ],
          position: {
            start: { line: 591, column: 3, offset: 18684 },
            end: { line: 591, column: 144, offset: 18825 }
          }
        }
      ],
      position: {
        start: { line: 591, column: 3, offset: 18684 },
        end: { line: 591, column: 144, offset: 18825 }
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
        start: { line: 593, column: 1, offset: 18827 },
        end: { line: 598, column: 4, offset: 18925 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 600, column: 1, offset: 18927 },
            end: { line: 600, column: 65, offset: 18991 }
          }
        }
      ],
      position: {
        start: { line: 600, column: 1, offset: 18927 },
        end: { line: 600, column: 65, offset: 18991 }
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
                    start: { line: 601, column: 4, offset: 18995 },
                    end: { line: 601, column: 11, offset: 19002 }
                  }
                }
              ],
              position: {
                start: { line: 601, column: 4, offset: 18995 },
                end: { line: 601, column: 11, offset: 19002 }
              }
            }
          ],
          position: {
            start: { line: 601, column: 2, offset: 18993 },
            end: { line: 601, column: 11, offset: 19002 }
          }
        },
        {
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
                    start: { line: 602, column: 4, offset: 19006 },
                    end: { line: 602, column: 9, offset: 19011 }
                  }
                }
              ],
              position: {
                start: { line: 602, column: 4, offset: 19006 },
                end: { line: 602, column: 9, offset: 19011 }
              }
            }
          ],
          position: {
            start: { line: 602, column: 2, offset: 19004 },
            end: { line: 602, column: 9, offset: 19011 }
          }
        },
        {
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
                    start: { line: 603, column: 4, offset: 19015 },
                    end: { line: 603, column: 9, offset: 19020 }
                  }
                }
              ],
              position: {
                start: { line: 603, column: 4, offset: 19015 },
                end: { line: 603, column: 9, offset: 19020 }
              }
            }
          ],
          position: {
            start: { line: 603, column: 2, offset: 19013 },
            end: { line: 603, column: 9, offset: 19020 }
          }
        },
        {
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
                    start: { line: 604, column: 4, offset: 19024 },
                    end: { line: 604, column: 15, offset: 19035 }
                  }
                }
              ],
              position: {
                start: { line: 604, column: 4, offset: 19024 },
                end: { line: 604, column: 15, offset: 19035 }
              }
            }
          ],
          position: {
            start: { line: 604, column: 2, offset: 19022 },
            end: { line: 604, column: 15, offset: 19035 }
          }
        },
        {
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
                    start: { line: 605, column: 4, offset: 19039 },
                    end: { line: 605, column: 21, offset: 19056 }
                  }
                }
              ],
              position: {
                start: { line: 605, column: 4, offset: 19039 },
                end: { line: 605, column: 21, offset: 19056 }
              }
            }
          ],
          position: {
            start: { line: 605, column: 2, offset: 19037 },
            end: { line: 605, column: 21, offset: 19056 }
          }
        },
        {
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
                    start: { line: 606, column: 4, offset: 19060 },
                    end: { line: 606, column: 12, offset: 19068 }
                  }
                }
              ],
              position: {
                start: { line: 606, column: 4, offset: 19060 },
                end: { line: 606, column: 12, offset: 19068 }
              }
            }
          ],
          position: {
            start: { line: 606, column: 2, offset: 19058 },
            end: { line: 606, column: 12, offset: 19068 }
          }
        }
      ],
      position: {
        start: { line: 601, column: 2, offset: 18993 },
        end: { line: 606, column: 12, offset: 19068 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 608, column: 1, offset: 19070 },
            end: { line: 608, column: 67, offset: 19136 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 67, offset: 19136 },
            end: { line: 608, column: 76, offset: 19145 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 608, column: 76, offset: 19145 },
            end: { line: 608, column: 109, offset: 19178 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 608, column: 109, offset: 19178 },
            end: { line: 608, column: 118, offset: 19187 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 608, column: 118, offset: 19187 },
            end: { line: 608, column: 154, offset: 19223 }
          }
        }
      ],
      position: {
        start: { line: 608, column: 1, offset: 19070 },
        end: { line: 608, column: 154, offset: 19223 }
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
                    start: { line: 610, column: 6, offset: 19230 },
                    end: { line: 610, column: 98, offset: 19322 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 98, offset: 19322 },
                    end: { line: 610, column: 107, offset: 19331 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 610, column: 107, offset: 19331 },
                    end: { line: 610, column: 210, offset: 19434 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 610, column: 210, offset: 19434 },
                    end: { line: 610, column: 219, offset: 19443 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 610, column: 219, offset: 19443 },
                    end: { line: 610, column: 220, offset: 19444 }
                  }
                }
              ],
              position: {
                start: { line: 610, column: 6, offset: 19230 },
                end: { line: 610, column: 220, offset: 19444 }
              }
            }
          ],
          position: {
            start: { line: 610, column: 3, offset: 19227 },
            end: { line: 610, column: 220, offset: 19444 }
          }
        }
      ],
      position: {
        start: { line: 610, column: 3, offset: 19227 },
        end: { line: 610, column: 220, offset: 19444 }
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
        start: { line: 612, column: 1, offset: 19446 },
        end: { line: 617, column: 4, offset: 19561 }
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
                    start: { line: 619, column: 6, offset: 19568 },
                    end: { line: 619, column: 122, offset: 19684 }
                  }
                }
              ],
              position: {
                start: { line: 619, column: 6, offset: 19568 },
                end: { line: 619, column: 122, offset: 19684 }
              }
            }
          ],
          position: {
            start: { line: 619, column: 3, offset: 19565 },
            end: { line: 619, column: 122, offset: 19684 }
          }
        }
      ],
      position: {
        start: { line: 619, column: 3, offset: 19565 },
        end: { line: 619, column: 122, offset: 19684 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 621, column: 1, offset: 19686 },
        end: { line: 626, column: 4, offset: 19774 }
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
                    start: { line: 628, column: 6, offset: 19781 },
                    end: { line: 628, column: 160, offset: 19935 }
                  }
                }
              ],
              position: {
                start: { line: 628, column: 6, offset: 19781 },
                end: { line: 628, column: 160, offset: 19935 }
              }
            }
          ],
          position: {
            start: { line: 628, column: 3, offset: 19778 },
            end: { line: 628, column: 160, offset: 19935 }
          }
        }
      ],
      position: {
        start: { line: 628, column: 3, offset: 19778 },
        end: { line: 628, column: 160, offset: 19935 }
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
        start: { line: 630, column: 1, offset: 19937 },
        end: { line: 635, column: 4, offset: 20048 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 637, column: 1, offset: 20050 },
            end: { line: 637, column: 68, offset: 20117 }
          }
        }
      ],
      position: {
        start: { line: 637, column: 1, offset: 20050 },
        end: { line: 637, column: 68, offset: 20117 }
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
                    start: { line: 638, column: 4, offset: 20121 },
                    end: { line: 638, column: 11, offset: 20128 }
                  }
                }
              ],
              position: {
                start: { line: 638, column: 4, offset: 20121 },
                end: { line: 638, column: 11, offset: 20128 }
              }
            }
          ],
          position: {
            start: { line: 638, column: 2, offset: 20119 },
            end: { line: 638, column: 11, offset: 20128 }
          }
        },
        {
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
                    start: { line: 639, column: 4, offset: 20132 },
                    end: { line: 639, column: 9, offset: 20137 }
                  }
                }
              ],
              position: {
                start: { line: 639, column: 4, offset: 20132 },
                end: { line: 639, column: 9, offset: 20137 }
              }
            }
          ],
          position: {
            start: { line: 639, column: 2, offset: 20130 },
            end: { line: 639, column: 9, offset: 20137 }
          }
        },
        {
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
                    start: { line: 640, column: 4, offset: 20141 },
                    end: { line: 640, column: 9, offset: 20146 }
                  }
                }
              ],
              position: {
                start: { line: 640, column: 4, offset: 20141 },
                end: { line: 640, column: 9, offset: 20146 }
              }
            }
          ],
          position: {
            start: { line: 640, column: 2, offset: 20139 },
            end: { line: 640, column: 9, offset: 20146 }
          }
        },
        {
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
                    start: { line: 641, column: 4, offset: 20150 },
                    end: { line: 641, column: 15, offset: 20161 }
                  }
                }
              ],
              position: {
                start: { line: 641, column: 4, offset: 20150 },
                end: { line: 641, column: 15, offset: 20161 }
              }
            }
          ],
          position: {
            start: { line: 641, column: 2, offset: 20148 },
            end: { line: 641, column: 15, offset: 20161 }
          }
        },
        {
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
                    start: { line: 642, column: 4, offset: 20165 },
                    end: { line: 642, column: 21, offset: 20182 }
                  }
                }
              ],
              position: {
                start: { line: 642, column: 4, offset: 20165 },
                end: { line: 642, column: 21, offset: 20182 }
              }
            }
          ],
          position: {
            start: { line: 642, column: 2, offset: 20163 },
            end: { line: 642, column: 21, offset: 20182 }
          }
        },
        {
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
                    start: { line: 643, column: 4, offset: 20186 },
                    end: { line: 643, column: 12, offset: 20194 }
                  }
                }
              ],
              position: {
                start: { line: 643, column: 4, offset: 20186 },
                end: { line: 643, column: 12, offset: 20194 }
              }
            }
          ],
          position: {
            start: { line: 643, column: 2, offset: 20184 },
            end: { line: 643, column: 12, offset: 20194 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 2, offset: 20119 },
        end: { line: 643, column: 12, offset: 20194 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 645, column: 1, offset: 20196 },
            end: { line: 645, column: 65, offset: 20260 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 65, offset: 20260 },
            end: { line: 645, column: 74, offset: 20269 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 645, column: 74, offset: 20269 },
            end: { line: 645, column: 107, offset: 20302 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 645, column: 107, offset: 20302 },
            end: { line: 645, column: 116, offset: 20311 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 645, column: 116, offset: 20311 },
            end: { line: 645, column: 151, offset: 20346 }
          }
        }
      ],
      position: {
        start: { line: 645, column: 1, offset: 20196 },
        end: { line: 645, column: 152, offset: 20347 }
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
                    start: { line: 647, column: 6, offset: 20354 },
                    end: { line: 647, column: 87, offset: 20435 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 647, column: 87, offset: 20435 },
                    end: { line: 647, column: 96, offset: 20444 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 647, column: 96, offset: 20444 },
                    end: { line: 647, column: 254, offset: 20602 }
                  }
                }
              ],
              position: {
                start: { line: 647, column: 6, offset: 20354 },
                end: { line: 647, column: 254, offset: 20602 }
              }
            }
          ],
          position: {
            start: { line: 647, column: 3, offset: 20351 },
            end: { line: 647, column: 254, offset: 20602 }
          }
        }
      ],
      position: {
        start: { line: 647, column: 3, offset: 20351 },
        end: { line: 647, column: 254, offset: 20602 }
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
        start: { line: 649, column: 1, offset: 20604 },
        end: { line: 656, column: 4, offset: 20774 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 658, column: 1, offset: 20776 },
            end: { line: 658, column: 66, offset: 20841 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 20776 },
        end: { line: 658, column: 66, offset: 20841 }
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
                    start: { line: 659, column: 4, offset: 20845 },
                    end: { line: 659, column: 11, offset: 20852 }
                  }
                }
              ],
              position: {
                start: { line: 659, column: 4, offset: 20845 },
                end: { line: 659, column: 11, offset: 20852 }
              }
            }
          ],
          position: {
            start: { line: 659, column: 2, offset: 20843 },
            end: { line: 659, column: 11, offset: 20852 }
          }
        },
        {
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
                    start: { line: 660, column: 4, offset: 20856 },
                    end: { line: 660, column: 9, offset: 20861 }
                  }
                }
              ],
              position: {
                start: { line: 660, column: 4, offset: 20856 },
                end: { line: 660, column: 9, offset: 20861 }
              }
            }
          ],
          position: {
            start: { line: 660, column: 2, offset: 20854 },
            end: { line: 660, column: 9, offset: 20861 }
          }
        },
        {
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
                    start: { line: 661, column: 4, offset: 20865 },
                    end: { line: 661, column: 9, offset: 20870 }
                  }
                }
              ],
              position: {
                start: { line: 661, column: 4, offset: 20865 },
                end: { line: 661, column: 9, offset: 20870 }
              }
            }
          ],
          position: {
            start: { line: 661, column: 2, offset: 20863 },
            end: { line: 661, column: 9, offset: 20870 }
          }
        },
        {
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
                    start: { line: 662, column: 4, offset: 20874 },
                    end: { line: 662, column: 15, offset: 20885 }
                  }
                }
              ],
              position: {
                start: { line: 662, column: 4, offset: 20874 },
                end: { line: 662, column: 15, offset: 20885 }
              }
            }
          ],
          position: {
            start: { line: 662, column: 2, offset: 20872 },
            end: { line: 662, column: 15, offset: 20885 }
          }
        },
        {
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
                    start: { line: 663, column: 4, offset: 20889 },
                    end: { line: 663, column: 21, offset: 20906 }
                  }
                }
              ],
              position: {
                start: { line: 663, column: 4, offset: 20889 },
                end: { line: 663, column: 21, offset: 20906 }
              }
            }
          ],
          position: {
            start: { line: 663, column: 2, offset: 20887 },
            end: { line: 663, column: 21, offset: 20906 }
          }
        },
        {
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
                    start: { line: 664, column: 4, offset: 20910 },
                    end: { line: 664, column: 12, offset: 20918 }
                  }
                }
              ],
              position: {
                start: { line: 664, column: 4, offset: 20910 },
                end: { line: 664, column: 12, offset: 20918 }
              }
            }
          ],
          position: {
            start: { line: 664, column: 2, offset: 20908 },
            end: { line: 664, column: 12, offset: 20918 }
          }
        }
      ],
      position: {
        start: { line: 659, column: 2, offset: 20843 },
        end: { line: 664, column: 12, offset: 20918 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 666, column: 1, offset: 20920 },
            end: { line: 666, column: 66, offset: 20985 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 66, offset: 20985 },
            end: { line: 666, column: 75, offset: 20994 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 666, column: 75, offset: 20994 },
            end: { line: 666, column: 108, offset: 21027 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 666, column: 108, offset: 21027 },
            end: { line: 666, column: 117, offset: 21036 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 666, column: 117, offset: 21036 },
            end: { line: 666, column: 153, offset: 21072 }
          }
        }
      ],
      position: {
        start: { line: 666, column: 1, offset: 20920 },
        end: { line: 666, column: 153, offset: 21072 }
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
                    start: { line: 668, column: 6, offset: 21079 },
                    end: { line: 668, column: 163, offset: 21236 }
                  }
                }
              ],
              position: {
                start: { line: 668, column: 6, offset: 21079 },
                end: { line: 668, column: 163, offset: 21236 }
              }
            }
          ],
          position: {
            start: { line: 668, column: 3, offset: 21076 },
            end: { line: 668, column: 163, offset: 21236 }
          }
        }
      ],
      position: {
        start: { line: 668, column: 3, offset: 21076 },
        end: { line: 668, column: 163, offset: 21236 }
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
        start: { line: 670, column: 1, offset: 21238 },
        end: { line: 675, column: 4, offset: 21352 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 677, column: 1, offset: 21354 },
            end: { line: 677, column: 67, offset: 21420 }
          }
        }
      ],
      position: {
        start: { line: 677, column: 1, offset: 21354 },
        end: { line: 677, column: 67, offset: 21420 }
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
                    start: { line: 678, column: 4, offset: 21424 },
                    end: { line: 678, column: 11, offset: 21431 }
                  }
                }
              ],
              position: {
                start: { line: 678, column: 4, offset: 21424 },
                end: { line: 678, column: 11, offset: 21431 }
              }
            }
          ],
          position: {
            start: { line: 678, column: 2, offset: 21422 },
            end: { line: 678, column: 11, offset: 21431 }
          }
        },
        {
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
                    start: { line: 679, column: 4, offset: 21435 },
                    end: { line: 679, column: 12, offset: 21443 }
                  }
                }
              ],
              position: {
                start: { line: 679, column: 4, offset: 21435 },
                end: { line: 679, column: 12, offset: 21443 }
              }
            }
          ],
          position: {
            start: { line: 679, column: 2, offset: 21433 },
            end: { line: 679, column: 12, offset: 21443 }
          }
        },
        {
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
                    start: { line: 680, column: 4, offset: 21447 },
                    end: { line: 680, column: 9, offset: 21452 }
                  }
                }
              ],
              position: {
                start: { line: 680, column: 4, offset: 21447 },
                end: { line: 680, column: 9, offset: 21452 }
              }
            }
          ],
          position: {
            start: { line: 680, column: 2, offset: 21445 },
            end: { line: 680, column: 9, offset: 21452 }
          }
        },
        {
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
                    start: { line: 681, column: 4, offset: 21456 },
                    end: { line: 681, column: 12, offset: 21464 }
                  }
                }
              ],
              position: {
                start: { line: 681, column: 4, offset: 21456 },
                end: { line: 681, column: 12, offset: 21464 }
              }
            }
          ],
          position: {
            start: { line: 681, column: 2, offset: 21454 },
            end: { line: 681, column: 12, offset: 21464 }
          }
        },
        {
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
                    start: { line: 682, column: 4, offset: 21468 },
                    end: { line: 682, column: 12, offset: 21476 }
                  }
                }
              ],
              position: {
                start: { line: 682, column: 4, offset: 21468 },
                end: { line: 682, column: 12, offset: 21476 }
              }
            }
          ],
          position: {
            start: { line: 682, column: 2, offset: 21466 },
            end: { line: 682, column: 12, offset: 21476 }
          }
        }
      ],
      position: {
        start: { line: 678, column: 2, offset: 21422 },
        end: { line: 682, column: 12, offset: 21476 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 684, column: 1, offset: 21478 },
            end: { line: 684, column: 62, offset: 21539 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 62, offset: 21539 },
            end: { line: 684, column: 72, offset: 21549 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 72, offset: 21549 },
            end: { line: 684, column: 76, offset: 21553 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 76, offset: 21553 },
            end: { line: 684, column: 84, offset: 21561 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 684, column: 84, offset: 21561 },
            end: { line: 684, column: 118, offset: 21595 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 684, column: 118, offset: 21595 },
            end: { line: 684, column: 128, offset: 21605 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 684, column: 128, offset: 21605 },
            end: { line: 684, column: 132, offset: 21609 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 684, column: 132, offset: 21609 },
            end: { line: 684, column: 140, offset: 21617 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 684, column: 140, offset: 21617 },
            end: { line: 684, column: 172, offset: 21649 }
          }
        }
      ],
      position: {
        start: { line: 684, column: 1, offset: 21478 },
        end: { line: 684, column: 172, offset: 21649 }
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
                    start: { line: 686, column: 6, offset: 21656 },
                    end: { line: 686, column: 78, offset: 21728 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 686, column: 78, offset: 21728 },
                    end: { line: 686, column: 88, offset: 21738 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 686, column: 88, offset: 21738 },
                    end: { line: 686, column: 92, offset: 21742 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 686, column: 92, offset: 21742 },
                    end: { line: 686, column: 100, offset: 21750 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 686, column: 100, offset: 21750 },
                    end: { line: 686, column: 178, offset: 21828 }
                  }
                }
              ],
              position: {
                start: { line: 686, column: 6, offset: 21656 },
                end: { line: 686, column: 178, offset: 21828 }
              }
            }
          ],
          position: {
            start: { line: 686, column: 3, offset: 21653 },
            end: { line: 686, column: 178, offset: 21828 }
          }
        }
      ],
      position: {
        start: { line: 686, column: 3, offset: 21653 },
        end: { line: 686, column: 178, offset: 21828 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).chain(f),\n  f(a),\n)',
      position: {
        start: { line: 688, column: 1, offset: 21830 },
        end: { line: 693, column: 4, offset: 21902 }
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
                    start: { line: 695, column: 6, offset: 21909 },
                    end: { line: 695, column: 120, offset: 22023 }
                  }
                }
              ],
              position: {
                start: { line: 695, column: 6, offset: 21909 },
                end: { line: 695, column: 120, offset: 22023 }
              }
            }
          ],
          position: {
            start: { line: 695, column: 3, offset: 21906 },
            end: { line: 695, column: 120, offset: 22023 }
          }
        }
      ],
      position: {
        start: { line: 695, column: 3, offset: 21906 },
        end: { line: 695, column: 120, offset: 22023 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.chain(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 697, column: 1, offset: 22025 },
        end: { line: 702, column: 4, offset: 22102 }
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
                    start: { line: 704, column: 6, offset: 22109 },
                    end: { line: 704, column: 111, offset: 22214 }
                  }
                }
              ],
              position: {
                start: { line: 704, column: 6, offset: 22109 },
                end: { line: 704, column: 111, offset: 22214 }
              }
            }
          ],
          position: {
            start: { line: 704, column: 3, offset: 22106 },
            end: { line: 704, column: 111, offset: 22214 }
          }
        }
      ],
      position: {
        start: { line: 704, column: 3, offset: 22106 },
        end: { line: 704, column: 111, offset: 22214 }
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
        start: { line: 706, column: 1, offset: 22216 },
        end: { line: 711, column: 4, offset: 22319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 713, column: 1, offset: 22321 },
            end: { line: 713, column: 63, offset: 22383 }
          }
        }
      ],
      position: {
        start: { line: 713, column: 1, offset: 22321 },
        end: { line: 713, column: 63, offset: 22383 }
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
                    start: { line: 714, column: 4, offset: 22387 },
                    end: { line: 714, column: 11, offset: 22394 }
                  }
                }
              ],
              position: {
                start: { line: 714, column: 4, offset: 22387 },
                end: { line: 714, column: 11, offset: 22394 }
              }
            }
          ],
          position: {
            start: { line: 714, column: 2, offset: 22385 },
            end: { line: 714, column: 11, offset: 22394 }
          }
        },
        {
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
                    start: { line: 715, column: 4, offset: 22398 },
                    end: { line: 715, column: 12, offset: 22406 }
                  }
                }
              ],
              position: {
                start: { line: 715, column: 4, offset: 22398 },
                end: { line: 715, column: 12, offset: 22406 }
              }
            }
          ],
          position: {
            start: { line: 715, column: 2, offset: 22396 },
            end: { line: 715, column: 12, offset: 22406 }
          }
        },
        {
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
                    start: { line: 716, column: 4, offset: 22410 },
                    end: { line: 716, column: 9, offset: 22415 }
                  }
                }
              ],
              position: {
                start: { line: 716, column: 4, offset: 22410 },
                end: { line: 716, column: 9, offset: 22415 }
              }
            }
          ],
          position: {
            start: { line: 716, column: 2, offset: 22408 },
            end: { line: 716, column: 9, offset: 22415 }
          }
        },
        {
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
                    start: { line: 717, column: 4, offset: 22419 },
                    end: { line: 717, column: 15, offset: 22430 }
                  }
                }
              ],
              position: {
                start: { line: 717, column: 4, offset: 22419 },
                end: { line: 717, column: 15, offset: 22430 }
              }
            }
          ],
          position: {
            start: { line: 717, column: 2, offset: 22417 },
            end: { line: 717, column: 15, offset: 22430 }
          }
        },
        {
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
                    start: { line: 718, column: 4, offset: 22434 },
                    end: { line: 718, column: 21, offset: 22451 }
                  }
                }
              ],
              position: {
                start: { line: 718, column: 4, offset: 22434 },
                end: { line: 718, column: 21, offset: 22451 }
              }
            }
          ],
          position: {
            start: { line: 718, column: 2, offset: 22432 },
            end: { line: 718, column: 21, offset: 22451 }
          }
        },
        {
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
                    start: { line: 719, column: 4, offset: 22455 },
                    end: { line: 719, column: 12, offset: 22463 }
                  }
                }
              ],
              position: {
                start: { line: 719, column: 4, offset: 22455 },
                end: { line: 719, column: 12, offset: 22463 }
              }
            }
          ],
          position: {
            start: { line: 719, column: 2, offset: 22453 },
            end: { line: 719, column: 12, offset: 22463 }
          }
        }
      ],
      position: {
        start: { line: 714, column: 2, offset: 22385 },
        end: { line: 719, column: 12, offset: 22463 }
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
            start: { line: 721, column: 4, offset: 22468 },
            end: { line: 721, column: 14, offset: 22478 }
          }
        }
      ],
      position: {
        start: { line: 721, column: 1, offset: 22465 },
        end: { line: 721, column: 14, offset: 22478 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 723, column: 1, offset: 22480 },
            end: { line: 723, column: 85, offset: 22564 }
          }
        }
      ],
      position: {
        start: { line: 723, column: 1, offset: 22480 },
        end: { line: 723, column: 85, offset: 22564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 725, column: 1, offset: 22566 },
            end: { line: 725, column: 141, offset: 22706 }
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
                start: { line: 725, column: 142, offset: 22707 },
                end: { line: 725, column: 153, offset: 22718 }
              }
            }
          ],
          position: {
            start: { line: 725, column: 141, offset: 22706 },
            end: { line: 725, column: 176, offset: 22741 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 725, column: 176, offset: 22741 },
            end: { line: 725, column: 177, offset: 22742 }
          }
        }
      ],
      position: {
        start: { line: 725, column: 1, offset: 22566 },
        end: { line: 725, column: 177, offset: 22742 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 726, column: 1, offset: 22743 }
  }
}