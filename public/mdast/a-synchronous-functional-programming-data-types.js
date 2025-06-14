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
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The number primitive data type represents integer numbers like ',
          position: {
            start: { line: 16, column: 1, offset: 777 },
            end: { line: 16, column: 64, offset: 840 }
          }
        },
        {
          type: 'inlineCode',
          value: '1',
          position: {
            start: { line: 16, column: 64, offset: 840 },
            end: { line: 16, column: 67, offset: 843 }
          }
        },
        {
          type: 'text',
          value: ' and also floating-point numbers like ',
          position: {
            start: { line: 16, column: 67, offset: 843 },
            end: { line: 16, column: 105, offset: 881 }
          }
        },
        {
          type: 'inlineCode',
          value: '1.2',
          position: {
            start: { line: 16, column: 105, offset: 881 },
            end: { line: 16, column: 110, offset: 886 }
          }
        },
        {
          type: 'text',
          value: '. To create a number in JavaScript you only need to write a number literal.',
          position: {
            start: { line: 16, column: 110, offset: 886 },
            end: { line: 16, column: 185, offset: 961 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 777 },
        end: { line: 16, column: 185, offset: 961 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '1',
      position: {
        start: { line: 18, column: 1, offset: 963 },
        end: { line: 20, column: 4, offset: 982 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 22, column: 1, offset: 984 },
            end: { line: 22, column: 22, offset: 1005 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 22, column: 22, offset: 1005 },
            end: { line: 22, column: 30, offset: 1013 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a number. You can use the ',
          position: {
            start: { line: 22, column: 30, offset: 1013 },
            end: { line: 22, column: 79, offset: 1062 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Number',
          position: {
            start: { line: 22, column: 79, offset: 1062 },
            end: { line: 22, column: 87, offset: 1070 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like strings to numbers.',
          position: {
            start: { line: 22, column: 87, offset: 1070 },
            end: { line: 22, column: 147, offset: 1130 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 984 },
        end: { line: 22, column: 147, offset: 1130 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Number('3') // 3",
      position: {
        start: { line: 24, column: 1, offset: 1132 },
        end: { line: 26, column: 4, offset: 1166 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The string primitive data type represents strings like ',
          position: {
            start: { line: 28, column: 1, offset: 1168 },
            end: { line: 28, column: 56, offset: 1223 }
          }
        },
        {
          type: 'inlineCode',
          value: "'abc'",
          position: {
            start: { line: 28, column: 56, offset: 1223 },
            end: { line: 28, column: 63, offset: 1230 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 28, column: 63, offset: 1230 },
            end: { line: 28, column: 67, offset: 1234 }
          }
        },
        {
          type: 'inlineCode',
          value: "'Hello World!'",
          position: {
            start: { line: 28, column: 67, offset: 1234 },
            end: { line: 28, column: 83, offset: 1250 }
          }
        },
        {
          type: 'text',
          value: '. Strings are useful for storing textual data, which is pretty much the entire internet aside from numbers. To create a string in JavaScript you can a string literal.',
          position: {
            start: { line: 28, column: 83, offset: 1250 },
            end: { line: 28, column: 249, offset: 1416 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 1168 },
        end: { line: 28, column: 249, offset: 1416 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "'Hello World!'",
      position: {
        start: { line: 30, column: 1, offset: 1418 },
        end: { line: 32, column: 4, offset: 1450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You may also use the ',
          position: {
            start: { line: 34, column: 1, offset: 1452 },
            end: { line: 34, column: 22, offset: 1473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 34, column: 22, offset: 1473 },
            end: { line: 34, column: 30, offset: 1481 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a string. You can use the ',
          position: {
            start: { line: 34, column: 30, offset: 1481 },
            end: { line: 34, column: 79, offset: 1530 }
          }
        },
        {
          type: 'inlineCode',
          value: 'String',
          position: {
            start: { line: 34, column: 79, offset: 1530 },
            end: { line: 34, column: 87, offset: 1538 }
          }
        },
        {
          type: 'text',
          value: ' constructor to convert other types like numbers to strings.',
          position: {
            start: { line: 34, column: 87, offset: 1538 },
            end: { line: 34, column: 147, offset: 1598 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 1452 },
        end: { line: 34, column: 147, offset: 1598 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "String(3) // '3'",
      position: {
        start: { line: 36, column: 1, offset: 1600 },
        end: { line: 38, column: 4, offset: 1634 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The boolean primitive data type represents the logical values ',
          position: {
            start: { line: 40, column: 1, offset: 1636 },
            end: { line: 40, column: 63, offset: 1698 }
          }
        },
        {
          type: 'inlineCode',
          value: 'true',
          position: {
            start: { line: 40, column: 63, offset: 1698 },
            end: { line: 40, column: 69, offset: 1704 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 40, column: 69, offset: 1704 },
            end: { line: 40, column: 73, offset: 1708 }
          }
        },
        {
          type: 'inlineCode',
          value: 'false',
          position: {
            start: { line: 40, column: 73, offset: 1708 },
            end: { line: 40, column: 80, offset: 1715 }
          }
        },
        {
          type: 'text',
          value: '. To create a boolean, you can write a boolean literal.',
          position: {
            start: { line: 40, column: 80, offset: 1715 },
            end: { line: 40, column: 135, offset: 1770 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1636 },
        end: { line: 40, column: 135, offset: 1770 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'true',
      position: {
        start: { line: 42, column: 1, offset: 1772 },
        end: { line: 44, column: 4, offset: 1794 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Simply writing out the boolean value isn't so useful, however. Normally you would create booleans by using the logical operators ",
          position: {
            start: { line: 46, column: 1, offset: 1796 },
            end: { line: 46, column: 130, offset: 1925 }
          }
        },
        {
          type: 'inlineCode',
          value: '==',
          position: {
            start: { line: 46, column: 130, offset: 1925 },
            end: { line: 46, column: 134, offset: 1929 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 46, column: 134, offset: 1929 },
            end: { line: 46, column: 136, offset: 1931 }
          }
        },
        {
          type: 'inlineCode',
          value: '>',
          position: {
            start: { line: 46, column: 136, offset: 1931 },
            end: { line: 46, column: 139, offset: 1934 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 46, column: 139, offset: 1934 },
            end: { line: 46, column: 141, offset: 1936 }
          }
        },
        {
          type: 'inlineCode',
          value: '<',
          position: {
            start: { line: 46, column: 141, offset: 1936 },
            end: { line: 46, column: 144, offset: 1939 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 46, column: 144, offset: 1939 },
            end: { line: 46, column: 146, offset: 1941 }
          }
        },
        {
          type: 'inlineCode',
          value: '>=',
          position: {
            start: { line: 46, column: 146, offset: 1941 },
            end: { line: 46, column: 150, offset: 1945 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 46, column: 150, offset: 1945 },
            end: { line: 46, column: 152, offset: 1947 }
          }
        },
        {
          type: 'inlineCode',
          value: '<=',
          position: {
            start: { line: 46, column: 152, offset: 1947 },
            end: { line: 46, column: 156, offset: 1951 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 46, column: 156, offset: 1951 },
            end: { line: 46, column: 158, offset: 1953 }
          }
        },
        {
          type: 'inlineCode',
          value: '&&',
          position: {
            start: { line: 46, column: 158, offset: 1953 },
            end: { line: 46, column: 162, offset: 1957 }
          }
        },
        {
          type: 'text',
          value: ', or ',
          position: {
            start: { line: 46, column: 162, offset: 1957 },
            end: { line: 46, column: 167, offset: 1962 }
          }
        },
        {
          type: 'inlineCode',
          value: '||',
          position: {
            start: { line: 46, column: 167, offset: 1962 },
            end: { line: 46, column: 171, offset: 1966 }
          }
        },
        {
          type: 'text',
          value: ' on variables. Then you can use them with ',
          position: {
            start: { line: 46, column: 171, offset: 1966 },
            end: { line: 46, column: 213, offset: 2008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'if',
          position: {
            start: { line: 46, column: 213, offset: 2008 },
            end: { line: 46, column: 217, offset: 2012 }
          }
        },
        {
          type: 'text',
          value: ' statements to control code execution.',
          position: {
            start: { line: 46, column: 217, offset: 2012 },
            end: { line: 46, column: 255, offset: 2050 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1796 },
        end: { line: 46, column: 255, offset: 2050 }
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
        start: { line: 48, column: 1, offset: 2052 },
        end: { line: 55, column: 4, offset: 2189 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 57, column: 1, offset: 2191 },
            end: { line: 57, column: 22, offset: 2212 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Boolean',
          position: {
            start: { line: 57, column: 22, offset: 2212 },
            end: { line: 57, column: 31, offset: 2221 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a boolean.',
          position: {
            start: { line: 57, column: 31, offset: 2221 },
            end: { line: 57, column: 64, offset: 2254 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 2191 },
        end: { line: 57, column: 64, offset: 2254 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'Boolean(0) // false',
      position: {
        start: { line: 59, column: 1, offset: 2256 },
        end: { line: 61, column: 4, offset: 2293 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The binary primitive data type is useful for storing binary data. Some common forms of binary data are image data and video data. You can use one of the TypedArray constructors to create binary data types.',
          position: {
            start: { line: 63, column: 1, offset: 2295 },
            end: { line: 63, column: 206, offset: 2500 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2295 },
        end: { line: 63, column: 206, offset: 2500 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// Uint8Array is a TypedArray constructor\nnew Uint8Array([1, 2, 3])',
      position: {
        start: { line: 65, column: 1, offset: 2502 },
        end: { line: 68, column: 4, offset: 2587 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "In practice, you usually won't use the constructors when working with binary data. Instead, you would access the binary data through an API.",
          position: {
            start: { line: 70, column: 1, offset: 2589 },
            end: { line: 70, column: 141, offset: 2729 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2589 },
        end: { line: 70, column: 141, offset: 2729 }
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
        start: { line: 72, column: 1, offset: 2731 },
        end: { line: 78, column: 4, offset: 2902 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The symbol primitive data type represents unique and ',
          position: {
            start: { line: 80, column: 1, offset: 2904 },
            end: { line: 80, column: 54, offset: 2957 }
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
                start: { line: 80, column: 55, offset: 2958 },
                end: { line: 80, column: 64, offset: 2967 }
              }
            }
          ],
          position: {
            start: { line: 80, column: 54, offset: 2957 },
            end: { line: 80, column: 126, offset: 3029 }
          }
        },
        {
          type: 'text',
          value: ' values, and are primarily used as identifiers for object properties.',
          position: {
            start: { line: 80, column: 126, offset: 3029 },
            end: { line: 80, column: 195, offset: 3098 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2904 },
        end: { line: 80, column: 195, offset: 3098 }
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
        start: { line: 82, column: 1, offset: 3100 },
        end: { line: 87, column: 4, offset: 3267 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Object properties defined with symbols are non-enumerable, and won't be discoverable with standard object iteration methods like ",
          position: {
            start: { line: 89, column: 1, offset: 3269 },
            end: { line: 89, column: 130, offset: 3398 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 89, column: 130, offset: 3398 },
            end: { line: 89, column: 140, offset: 3408 }
          }
        },
        {
          type: 'text',
          value: ' loops or ',
          position: {
            start: { line: 89, column: 140, offset: 3408 },
            end: { line: 89, column: 150, offset: 3418 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object.keys',
          position: {
            start: { line: 89, column: 150, offset: 3418 },
            end: { line: 89, column: 163, offset: 3431 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 89, column: 163, offset: 3431 },
            end: { line: 89, column: 164, offset: 3432 }
          }
        }
      ],
      position: {
        start: { line: 89, column: 1, offset: 3269 },
        end: { line: 89, column: 164, offset: 3432 }
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
        start: { line: 91, column: 1, offset: 3434 },
        end: { line: 100, column: 4, offset: 3603 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some useful built-in symbols are ',
          position: {
            start: { line: 102, column: 1, offset: 3605 },
            end: { line: 102, column: 34, offset: 3638 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.iterator',
          position: {
            start: { line: 102, column: 34, offset: 3638 },
            end: { line: 102, column: 51, offset: 3655 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 102, column: 51, offset: 3655 },
            end: { line: 102, column: 56, offset: 3660 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Symbol.asyncIterator',
          position: {
            start: { line: 102, column: 56, offset: 3660 },
            end: { line: 102, column: 78, offset: 3682 }
          }
        },
        {
          type: 'text',
          value: '. These symbols, when used to define properties on objects, implement special protocols for iteration. See ',
          position: {
            start: { line: 102, column: 78, offset: 3682 },
            end: { line: 102, column: 185, offset: 3789 }
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
                start: { line: 102, column: 186, offset: 3790 },
                end: { line: 102, column: 203, offset: 3807 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 185, offset: 3789 },
            end: { line: 102, column: 313, offset: 3917 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 102, column: 313, offset: 3917 },
            end: { line: 102, column: 318, offset: 3922 }
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
                start: { line: 102, column: 319, offset: 3923 },
                end: { line: 102, column: 342, offset: 3946 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 318, offset: 3922 },
            end: { line: 102, column: 478, offset: 4082 }
          }
        }
      ],
      position: {
        start: { line: 102, column: 1, offset: 3605 },
        end: { line: 102, column: 478, offset: 4082 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Finally, the nullish data type represents the absence of a meaningful value and encopasses two values: ',
          position: {
            start: { line: 104, column: 1, offset: 4084 },
            end: { line: 104, column: 104, offset: 4187 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 104, column: 104, offset: 4187 },
            end: { line: 104, column: 110, offset: 4193 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 104, column: 110, offset: 4193 },
            end: { line: 104, column: 115, offset: 4198 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 104, column: 115, offset: 4198 },
            end: { line: 104, column: 126, offset: 4209 }
          }
        },
        {
          type: 'text',
          value: '. Both of these values are very similar in that they both express the absence of a meaningful value, but they are used differently in practice. Generally, you would use ',
          position: {
            start: { line: 104, column: 126, offset: 4209 },
            end: { line: 104, column: 295, offset: 4378 }
          }
        },
        {
          type: 'inlineCode',
          value: 'null',
          position: {
            start: { line: 104, column: 295, offset: 4378 },
            end: { line: 104, column: 301, offset: 4384 }
          }
        },
        {
          type: 'text',
          value: " to express the intentional absence of an object value, while you wouldn't normally have to use ",
          position: {
            start: { line: 104, column: 301, offset: 4384 },
            end: { line: 104, column: 397, offset: 4480 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 104, column: 397, offset: 4480 },
            end: { line: 104, column: 408, offset: 4491 }
          }
        },
        {
          type: 'text',
          value: ', though it is sometimes stylish to return ',
          position: {
            start: { line: 104, column: 408, offset: 4491 },
            end: { line: 104, column: 451, offset: 4534 }
          }
        },
        {
          type: 'inlineCode',
          value: 'undefined',
          position: {
            start: { line: 104, column: 451, offset: 4534 },
            end: { line: 104, column: 462, offset: 4545 }
          }
        },
        {
          type: 'text',
          value: ' from a function.',
          position: {
            start: { line: 104, column: 462, offset: 4545 },
            end: { line: 104, column: 479, offset: 4562 }
          }
        }
      ],
      position: {
        start: { line: 104, column: 1, offset: 4084 },
        end: { line: 104, column: 479, offset: 4562 }
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
        start: { line: 106, column: 1, offset: 4564 },
        end: { line: 119, column: 4, offset: 4842 }
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
            start: { line: 121, column: 5, offset: 4848 },
            end: { line: 121, column: 42, offset: 4885 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 4844 },
        end: { line: 121, column: 42, offset: 4885 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "As a rule of thumb, anything that isn't a primitive data type is a reference data type. While primitive data types store actual values (numbers, strings) directly in memory, reference data types store references (memory addresses) to objects. The rest of the data types discussed in this article fall under reference data types.",
          position: {
            start: { line: 122, column: 1, offset: 4886 },
            end: { line: 122, column: 329, offset: 5214 }
          }
        }
      ],
      position: {
        start: { line: 122, column: 1, offset: 4886 },
        end: { line: 122, column: 329, offset: 5214 }
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
            start: { line: 124, column: 4, offset: 5219 },
            end: { line: 124, column: 25, offset: 5240 }
          }
        }
      ],
      position: {
        start: { line: 124, column: 1, offset: 5216 },
        end: { line: 124, column: 25, offset: 5240 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Collection data types are structures that can hold multiple values and multiple types of values, including primitives and other collection data types. The collection data types are fundamental to general programming as well as [A]synchronous Functional Programming, because we often need to think about data in terms of groups. For this article we will consider four essential collection data types: array, object, set, and map.',
          position: {
            start: { line: 125, column: 1, offset: 5241 },
            end: { line: 125, column: 429, offset: 5669 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 5241 },
        end: { line: 125, column: 429, offset: 5669 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The array data type is an ordered collection of elements that can be accessed through a numerical index. You can create an array by writing an array literal, or by using the ',
          position: {
            start: { line: 127, column: 1, offset: 5671 },
            end: { line: 127, column: 175, offset: 5845 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 127, column: 175, offset: 5845 },
            end: { line: 127, column: 182, offset: 5852 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 127, column: 182, offset: 5852 },
            end: { line: 127, column: 195, offset: 5865 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 5671 },
        end: { line: 127, column: 195, offset: 5865 }
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
        start: { line: 129, column: 1, offset: 5867 },
        end: { line: 137, column: 4, offset: 6134 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also create arrays using static methods on the ',
          position: {
            start: { line: 139, column: 1, offset: 6136 },
            end: { line: 139, column: 56, offset: 6191 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Array',
          position: {
            start: { line: 139, column: 56, offset: 6191 },
            end: { line: 139, column: 63, offset: 6198 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 139, column: 63, offset: 6198 },
            end: { line: 139, column: 76, offset: 6211 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 6136 },
        end: { line: 139, column: 76, offset: 6211 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "Array.from('foo') // ['f', 'o', 'o']\n" +
        "Array.of('foo', 2, 'bar', true) // ['foo', 2, 'bar', true]",
      position: {
        start: { line: 141, column: 1, offset: 6213 },
        end: { line: 144, column: 4, offset: 6326 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Several array instance methods such as ',
          position: {
            start: { line: 146, column: 1, offset: 6328 },
            end: { line: 146, column: 40, offset: 6367 }
          }
        },
        {
          type: 'inlineCode',
          value: '.slice',
          position: {
            start: { line: 146, column: 40, offset: 6367 },
            end: { line: 146, column: 48, offset: 6375 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 146, column: 48, offset: 6375 },
            end: { line: 146, column: 53, offset: 6380 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 146, column: 53, offset: 6380 },
            end: { line: 146, column: 59, offset: 6386 }
          }
        },
        {
          type: 'text',
          value: ' also create new arrays.',
          position: {
            start: { line: 146, column: 59, offset: 6386 },
            end: { line: 146, column: 83, offset: 6410 }
          }
        }
      ],
      position: {
        start: { line: 146, column: 1, offset: 6328 },
        end: { line: 146, column: 83, offset: 6410 }
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
        start: { line: 148, column: 1, offset: 6412 },
        end: { line: 153, column: 4, offset: 6539 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an item into an array, use the ',
          position: {
            start: { line: 155, column: 1, offset: 6541 },
            end: { line: 155, column: 42, offset: 6582 }
          }
        },
        {
          type: 'inlineCode',
          value: '.push',
          position: {
            start: { line: 155, column: 42, offset: 6582 },
            end: { line: 155, column: 49, offset: 6589 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 155, column: 49, offset: 6589 },
            end: { line: 155, column: 66, offset: 6606 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 6541 },
        end: { line: 155, column: 66, offset: 6606 }
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
        start: { line: 157, column: 1, offset: 6608 },
        end: { line: 163, column: 4, offset: 6713 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an array, use the ',
          position: {
            start: { line: 165, column: 1, offset: 6715 },
            end: { line: 165, column: 42, offset: 6756 }
          }
        },
        {
          type: 'inlineCode',
          value: '.splice',
          position: {
            start: { line: 165, column: 42, offset: 6756 },
            end: { line: 165, column: 51, offset: 6765 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 165, column: 51, offset: 6765 },
            end: { line: 165, column: 68, offset: 6782 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 6715 },
        end: { line: 165, column: 68, offset: 6782 }
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
        start: { line: 167, column: 1, offset: 6784 },
        end: { line: 173, column: 4, offset: 6935 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of an array, use a ',
          position: {
            start: { line: 175, column: 1, offset: 6937 },
            end: { line: 175, column: 52, offset: 6988 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 175, column: 52, offset: 6988 },
            end: { line: 175, column: 62, offset: 6998 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 175, column: 62, offset: 6998 },
            end: { line: 175, column: 68, offset: 7004 }
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 6937 },
        end: { line: 175, column: 68, offset: 7004 }
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
        start: { line: 177, column: 1, offset: 7006 },
        end: { line: 188, column: 4, offset: 7150 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The object data type is an unordered collection of elements that is accessed by string or symbol keys, as opposed to numerical indexes for arrays. You can create an object by writing an object literal.',
          position: {
            start: { line: 190, column: 1, offset: 7152 },
            end: { line: 190, column: 202, offset: 7353 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 7152 },
        end: { line: 190, column: 202, offset: 7353 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "{ a: 1, b: 'foo' }",
      position: {
        start: { line: 192, column: 1, offset: 7355 },
        end: { line: 194, column: 4, offset: 7391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the ',
          position: {
            start: { line: 196, column: 1, offset: 7393 },
            end: { line: 196, column: 22, offset: 7414 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Object',
          position: {
            start: { line: 196, column: 22, offset: 7414 },
            end: { line: 196, column: 30, offset: 7422 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create an object, though this is not as common.',
          position: {
            start: { line: 196, column: 30, offset: 7422 },
            end: { line: 196, column: 93, offset: 7485 }
          }
        }
      ],
      position: {
        start: { line: 196, column: 1, offset: 7393 },
        end: { line: 196, column: 93, offset: 7485 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Object()',
      position: {
        start: { line: 198, column: 1, offset: 7487 },
        end: { line: 200, column: 4, offset: 7517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into an object, use property accessor syntax. Property accessor syntax has two forms: dot notation and bracket notation.',
          position: {
            start: { line: 202, column: 1, offset: 7519 },
            end: { line: 202, column: 142, offset: 7660 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 7519 },
        end: { line: 202, column: 142, offset: 7660 }
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
        start: { line: 204, column: 1, offset: 7662 },
        end: { line: 212, column: 4, offset: 7893 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an item from an object, use property accessor syntax with the ',
          position: {
            start: { line: 214, column: 1, offset: 7895 },
            end: { line: 214, column: 73, offset: 7967 }
          }
        },
        {
          type: 'inlineCode',
          value: 'delete',
          position: {
            start: { line: 214, column: 73, offset: 7967 },
            end: { line: 214, column: 81, offset: 7975 }
          }
        },
        {
          type: 'text',
          value: ' keyword.',
          position: {
            start: { line: 214, column: 81, offset: 7975 },
            end: { line: 214, column: 90, offset: 7984 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 1, offset: 7895 },
        end: { line: 214, column: 90, offset: 7984 }
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
        start: { line: 216, column: 1, offset: 7986 },
        end: { line: 221, column: 4, offset: 8186 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the enumerable properties of an object, use a ',
          position: {
            start: { line: 223, column: 1, offset: 8188 },
            end: { line: 223, column: 66, offset: 8253 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...in',
          position: {
            start: { line: 223, column: 66, offset: 8253 },
            end: { line: 223, column: 76, offset: 8263 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 223, column: 76, offset: 8263 },
            end: { line: 223, column: 82, offset: 8269 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 8188 },
        end: { line: 223, column: 82, offset: 8269 }
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
        start: { line: 225, column: 1, offset: 8271 },
        end: { line: 234, column: 4, offset: 8433 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The set data type is a unique collection of elements that is ordered by insertion order. Value equality (what determines the elements' uniqueness) is determined by the ",
          position: {
            start: { line: 236, column: 1, offset: 8435 },
            end: { line: 236, column: 169, offset: 8603 }
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
                start: { line: 236, column: 170, offset: 8604 },
                end: { line: 236, column: 183, offset: 8617 }
              }
            }
          ],
          position: {
            start: { line: 236, column: 169, offset: 8603 },
            end: { line: 236, column: 306, offset: 8740 }
          }
        },
        {
          type: 'text',
          value: " algorithm. Although there isn't a way to access an element of a set like there is for arrays and objects, you can tell if a set has an element by using the set's ",
          position: {
            start: { line: 236, column: 306, offset: 8740 },
            end: { line: 236, column: 469, offset: 8903 }
          }
        },
        {
          type: 'inlineCode',
          value: '.has',
          position: {
            start: { line: 236, column: 469, offset: 8903 },
            end: { line: 236, column: 475, offset: 8909 }
          }
        },
        {
          type: 'text',
          value: ' method.',
          position: {
            start: { line: 236, column: 475, offset: 8909 },
            end: { line: 236, column: 483, offset: 8917 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 1, offset: 8435 },
        end: { line: 236, column: 483, offset: 8917 }
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
        start: { line: 238, column: 1, offset: 8919 },
        end: { line: 243, column: 4, offset: 9102 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To create a set, use the ',
          position: {
            start: { line: 245, column: 1, offset: 9104 },
            end: { line: 245, column: 26, offset: 9129 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Set',
          position: {
            start: { line: 245, column: 26, offset: 9129 },
            end: { line: 245, column: 31, offset: 9134 }
          }
        },
        {
          type: 'text',
          value: ' constructor.',
          position: {
            start: { line: 245, column: 31, offset: 9134 },
            end: { line: 245, column: 44, offset: 9147 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 9104 },
        end: { line: 245, column: 44, offset: 9147 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'new Set([1, 2, 3])',
      position: {
        start: { line: 247, column: 1, offset: 9149 },
        end: { line: 249, column: 4, offset: 9185 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a set, use the ',
          position: {
            start: { line: 251, column: 1, offset: 9187 },
            end: { line: 251, column: 42, offset: 9228 }
          }
        },
        {
          type: 'inlineCode',
          value: '.add',
          position: {
            start: { line: 251, column: 42, offset: 9228 },
            end: { line: 251, column: 48, offset: 9234 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 251, column: 48, offset: 9234 },
            end: { line: 251, column: 65, offset: 9251 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 9187 },
        end: { line: 251, column: 65, offset: 9251 }
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
        start: { line: 253, column: 1, offset: 9253 },
        end: { line: 261, column: 4, offset: 9403 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a set, use the ',
          position: {
            start: { line: 263, column: 1, offset: 9405 },
            end: { line: 263, column: 42, offset: 9446 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 263, column: 42, offset: 9446 },
            end: { line: 263, column: 51, offset: 9455 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 263, column: 51, offset: 9455 },
            end: { line: 263, column: 68, offset: 9472 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 9405 },
        end: { line: 263, column: 68, offset: 9472 }
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
        start: { line: 265, column: 1, offset: 9474 },
        end: { line: 271, column: 4, offset: 9593 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a set, use a ',
          position: {
            start: { line: 273, column: 1, offset: 9595 },
            end: { line: 273, column: 49, offset: 9643 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 273, column: 49, offset: 9643 },
            end: { line: 273, column: 59, offset: 9653 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 273, column: 59, offset: 9653 },
            end: { line: 273, column: 65, offset: 9659 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 9595 },
        end: { line: 273, column: 65, offset: 9659 }
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
        start: { line: 275, column: 1, offset: 9661 },
        end: { line: 286, column: 4, offset: 9814 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The map data type is a collection of elements ordered by insertion order and can be accessed using keys of any data type. Maps are similar to objects in many regards but with a few crucial differences:',
          position: {
            start: { line: 288, column: 1, offset: 9816 },
            end: { line: 288, column: 202, offset: 10017 }
          }
        }
      ],
      position: {
        start: { line: 288, column: 1, offset: 9816 },
        end: { line: 288, column: 202, offset: 10017 }
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
                    start: { line: 289, column: 5, offset: 10022 },
                    end: { line: 289, column: 113, offset: 10130 }
                  }
                }
              ],
              position: {
                start: { line: 289, column: 5, offset: 10022 },
                end: { line: 289, column: 113, offset: 10130 }
              }
            }
          ],
          position: {
            start: { line: 289, column: 3, offset: 10020 },
            end: { line: 289, column: 113, offset: 10130 }
          }
        },
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
                    start: { line: 290, column: 5, offset: 10135 },
                    end: { line: 290, column: 94, offset: 10224 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'JSON.stringify',
                  position: {
                    start: { line: 290, column: 94, offset: 10224 },
                    end: { line: 290, column: 110, offset: 10240 }
                  }
                }
              ],
              position: {
                start: { line: 290, column: 5, offset: 10135 },
                end: { line: 290, column: 110, offset: 10240 }
              }
            }
          ],
          position: {
            start: { line: 290, column: 3, offset: 10133 },
            end: { line: 290, column: 110, offset: 10240 }
          }
        },
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
                    start: { line: 291, column: 5, offset: 10245 },
                    end: { line: 291, column: 130, offset: 10370 }
                  }
                }
              ],
              position: {
                start: { line: 291, column: 5, offset: 10245 },
                end: { line: 291, column: 130, offset: 10370 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 3, offset: 10243 },
            end: { line: 291, column: 130, offset: 10370 }
          }
        },
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
                    start: { line: 292, column: 5, offset: 10375 },
                    end: { line: 292, column: 28, offset: 10398 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...of',
                  position: {
                    start: { line: 292, column: 28, offset: 10398 },
                    end: { line: 292, column: 38, offset: 10408 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops, while objects use ',
                  position: {
                    start: { line: 292, column: 38, offset: 10408 },
                    end: { line: 292, column: 64, offset: 10434 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'for...in',
                  position: {
                    start: { line: 292, column: 64, offset: 10434 },
                    end: { line: 292, column: 74, offset: 10444 }
                  }
                },
                {
                  type: 'text',
                  value: ' loops',
                  position: {
                    start: { line: 292, column: 74, offset: 10444 },
                    end: { line: 292, column: 80, offset: 10450 }
                  }
                }
              ],
              position: {
                start: { line: 292, column: 5, offset: 10375 },
                end: { line: 292, column: 80, offset: 10450 }
              }
            }
          ],
          position: {
            start: { line: 292, column: 3, offset: 10373 },
            end: { line: 292, column: 80, offset: 10450 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 3, offset: 10020 },
        end: { line: 292, column: 80, offset: 10450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Use the ',
          position: {
            start: { line: 294, column: 1, offset: 10452 },
            end: { line: 294, column: 9, offset: 10460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 294, column: 9, offset: 10460 },
            end: { line: 294, column: 14, offset: 10465 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a map. The ',
          position: {
            start: { line: 294, column: 14, offset: 10465 },
            end: { line: 294, column: 48, offset: 10499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Map',
          position: {
            start: { line: 294, column: 48, offset: 10499 },
            end: { line: 294, column: 53, offset: 10504 }
          }
        },
        {
          type: 'text',
          value: " constructor accepts an array of arrays representing the map's entries.",
          position: {
            start: { line: 294, column: 53, offset: 10504 },
            end: { line: 294, column: 124, offset: 10575 }
          }
        }
      ],
      position: {
        start: { line: 294, column: 1, offset: 10452 },
        end: { line: 294, column: 124, offset: 10575 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const m = new Map([\n  ['a', 1],\n  ['b', 2],\n  ['c', 3],\n])",
      position: {
        start: { line: 296, column: 1, offset: 10577 },
        end: { line: 302, column: 4, offset: 10653 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To insert an element into a map, use the ',
          position: {
            start: { line: 304, column: 1, offset: 10655 },
            end: { line: 304, column: 42, offset: 10696 }
          }
        },
        {
          type: 'inlineCode',
          value: '.set',
          position: {
            start: { line: 304, column: 42, offset: 10696 },
            end: { line: 304, column: 48, offset: 10702 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 304, column: 48, offset: 10702 },
            end: { line: 304, column: 65, offset: 10719 }
          }
        }
      ],
      position: {
        start: { line: 304, column: 1, offset: 10655 },
        end: { line: 304, column: 65, offset: 10719 }
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
        start: { line: 306, column: 1, offset: 10721 },
        end: { line: 313, column: 4, offset: 10872 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To remove an element from a map, use the ',
          position: {
            start: { line: 315, column: 1, offset: 10874 },
            end: { line: 315, column: 42, offset: 10915 }
          }
        },
        {
          type: 'inlineCode',
          value: '.delete',
          position: {
            start: { line: 315, column: 42, offset: 10915 },
            end: { line: 315, column: 51, offset: 10924 }
          }
        },
        {
          type: 'text',
          value: ' instance method.',
          position: {
            start: { line: 315, column: 51, offset: 10924 },
            end: { line: 315, column: 68, offset: 10941 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 10874 },
        end: { line: 315, column: 68, offset: 10941 }
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
        start: { line: 317, column: 1, offset: 10943 },
        end: { line: 327, column: 4, offset: 11096 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To iterate through the elements of a map, use a ',
          position: {
            start: { line: 329, column: 1, offset: 11098 },
            end: { line: 329, column: 49, offset: 11146 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 329, column: 49, offset: 11146 },
            end: { line: 329, column: 59, offset: 11156 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 329, column: 59, offset: 11156 },
            end: { line: 329, column: 65, offset: 11162 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 11098 },
        end: { line: 329, column: 65, offset: 11162 }
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
        start: { line: 331, column: 1, offset: 11164 },
        end: { line: 344, column: 4, offset: 11429 }
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
            start: { line: 346, column: 5, offset: 11435 },
            end: { line: 346, column: 53, offset: 11483 }
          }
        }
      ],
      position: {
        start: { line: 346, column: 1, offset: 11431 },
        end: { line: 346, column: 53, offset: 11483 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'When thinking about which collection data structure to use for your data, always choose the data structure that most naturally models your data. Arrays are good for lists of data, while objects and maps are good for relational data. Use sets over arrays when you need to be able to easily remove an element from your data.',
          position: {
            start: { line: 348, column: 1, offset: 11485 },
            end: { line: 348, column: 323, offset: 11807 }
          }
        }
      ],
      position: {
        start: { line: 348, column: 1, offset: 11485 },
        end: { line: 348, column: 323, offset: 11807 }
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
            start: { line: 350, column: 4, offset: 11812 },
            end: { line: 350, column: 23, offset: 11831 }
          }
        }
      ],
      position: {
        start: { line: 350, column: 1, offset: 11809 },
        end: { line: 350, column: 23, offset: 11831 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Iterable data types are data types that can be iterated over. Specifically, all iterable data types implement the ',
          position: {
            start: { line: 351, column: 1, offset: 11832 },
            end: { line: 351, column: 115, offset: 11946 }
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
                start: { line: 351, column: 116, offset: 11947 },
                end: { line: 351, column: 133, offset: 11964 }
              }
            }
          ],
          position: {
            start: { line: 351, column: 115, offset: 11946 },
            end: { line: 351, column: 243, offset: 12074 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 351, column: 243, offset: 12074 },
            end: { line: 351, column: 259, offset: 12090 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 351, column: 259, offset: 12090 },
            end: { line: 351, column: 278, offset: 12109 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an iterator object. The collection data types excluding object (array, map, and set) are all iterable data types that implement the ',
          position: {
            start: { line: 351, column: 278, offset: 12109 },
            end: { line: 351, column: 438, offset: 12269 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.iterator]',
          position: {
            start: { line: 351, column: 438, offset: 12269 },
            end: { line: 351, column: 457, offset: 12288 }
          }
        },
        {
          type: 'text',
          value: ' method, and can be consumed with a ',
          position: {
            start: { line: 351, column: 457, offset: 12288 },
            end: { line: 351, column: 493, offset: 12324 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for...of',
          position: {
            start: { line: 351, column: 493, offset: 12324 },
            end: { line: 351, column: 503, offset: 12334 }
          }
        },
        {
          type: 'text',
          value: ' loop.',
          position: {
            start: { line: 351, column: 503, offset: 12334 },
            end: { line: 351, column: 509, offset: 12340 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 11832 },
        end: { line: 351, column: 509, offset: 12340 }
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
        start: { line: 353, column: 1, offset: 12342 },
        end: { line: 371, column: 4, offset: 12771 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also implement the iterable protocol on your own classes and objects.',
          position: {
            start: { line: 373, column: 1, offset: 12773 },
            end: { line: 373, column: 78, offset: 12850 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 12773 },
        end: { line: 373, column: 78, offset: 12850 }
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
        start: { line: 375, column: 1, offset: 12852 },
        end: { line: 411, column: 4, offset: 13333 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A convenient way to create iterators is with generator functions using the ',
          position: {
            start: { line: 413, column: 1, offset: 13335 },
            end: { line: 413, column: 76, offset: 13410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'function* () {}',
          position: {
            start: { line: 413, column: 76, offset: 13410 },
            end: { line: 413, column: 93, offset: 13427 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 413, column: 93, offset: 13427 },
            end: { line: 413, column: 109, offset: 13443 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 413, column: 109, offset: 13443 },
            end: { line: 413, column: 116, offset: 13450 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Generator functions create generators, a kind of iterator.',
          position: {
            start: { line: 413, column: 116, offset: 13450 },
            end: { line: 413, column: 184, offset: 13518 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 13335 },
        end: { line: 413, column: 184, offset: 13518 }
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
        start: { line: 415, column: 1, offset: 13520 },
        end: { line: 433, column: 4, offset: 13886 }
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
            start: { line: 435, column: 4, offset: 13891 },
            end: { line: 435, column: 27, offset: 13914 }
          }
        }
      ],
      position: {
        start: { line: 435, column: 1, offset: 13888 },
        end: { line: 435, column: 27, offset: 13914 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous data types are data types that represent asynchronous operations. For [A]synchronous Functional Programming we will only consider one asynchronous data type: the promise.',
          position: {
            start: { line: 436, column: 1, offset: 13915 },
            end: { line: 436, column: 184, offset: 14098 }
          }
        }
      ],
      position: {
        start: { line: 436, column: 1, offset: 13915 },
        end: { line: 436, column: 184, offset: 14098 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The promise data type represents an asynchronous operation that resolves to a single value, or rejects with an error. The way you can access the resolved value or rejected error of a promise is via the ',
          position: {
            start: { line: 438, column: 1, offset: 14100 },
            end: { line: 438, column: 203, offset: 14302 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 438, column: 203, offset: 14302 },
            end: { line: 438, column: 210, offset: 14309 }
          }
        },
        {
          type: 'text',
          value: ' method of a promise instance.',
          position: {
            start: { line: 438, column: 210, offset: 14309 },
            end: { line: 438, column: 240, offset: 14339 }
          }
        }
      ],
      position: {
        start: { line: 438, column: 1, offset: 14100 },
        end: { line: 438, column: 240, offset: 14339 }
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
        start: { line: 440, column: 1, offset: 14341 },
        end: { line: 446, column: 4, offset: 14515 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use the keywords ',
          position: {
            start: { line: 448, column: 1, offset: 14517 },
            end: { line: 448, column: 31, offset: 14547 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async',
          position: {
            start: { line: 448, column: 31, offset: 14547 },
            end: { line: 448, column: 38, offset: 14554 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 448, column: 38, offset: 14554 },
            end: { line: 448, column: 43, offset: 14559 }
          }
        },
        {
          type: 'inlineCode',
          value: 'await',
          position: {
            start: { line: 448, column: 43, offset: 14559 },
            end: { line: 448, column: 50, offset: 14566 }
          }
        },
        {
          type: 'text',
          value: ' to access the resolved value or rejected error of a promise.',
          position: {
            start: { line: 448, column: 50, offset: 14566 },
            end: { line: 448, column: 111, offset: 14627 }
          }
        }
      ],
      position: {
        start: { line: 448, column: 1, offset: 14517 },
        end: { line: 448, column: 111, offset: 14627 }
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
        start: { line: 450, column: 1, offset: 14629 },
        end: { line: 459, column: 4, offset: 14856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can use the ',
          position: {
            start: { line: 461, column: 1, offset: 14858 },
            end: { line: 461, column: 17, offset: 14874 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Promise',
          position: {
            start: { line: 461, column: 17, offset: 14874 },
            end: { line: 461, column: 26, offset: 14883 }
          }
        },
        {
          type: 'text',
          value: ' constructor to create a promise.',
          position: {
            start: { line: 461, column: 26, offset: 14883 },
            end: { line: 461, column: 59, offset: 14916 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 1, offset: 14858 },
        end: { line: 461, column: 59, offset: 14916 }
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
        start: { line: 463, column: 1, offset: 14918 },
        end: { line: 483, column: 4, offset: 15335 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can also use methods on the Promise constructor to conveniently create promises.',
          position: {
            start: { line: 485, column: 1, offset: 15337 },
            end: { line: 485, column: 85, offset: 15421 }
          }
        }
      ],
      position: {
        start: { line: 485, column: 1, offset: 15337 },
        end: { line: 485, column: 85, offset: 15421 }
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
        start: { line: 487, column: 1, offset: 15423 },
        end: { line: 491, column: 4, offset: 15611 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In practice, you usually do not have to create promises. Instead, most asynchronous APIs will return a promise.',
          position: {
            start: { line: 493, column: 1, offset: 15613 },
            end: { line: 493, column: 112, offset: 15724 }
          }
        }
      ],
      position: {
        start: { line: 493, column: 1, offset: 15613 },
        end: { line: 493, column: 112, offset: 15724 }
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
        start: { line: 495, column: 1, offset: 15726 },
        end: { line: 507, column: 4, offset: 16063 }
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
            start: { line: 509, column: 4, offset: 16068 },
            end: { line: 509, column: 36, offset: 16100 }
          }
        }
      ],
      position: {
        start: { line: 509, column: 1, offset: 16065 },
        end: { line: 509, column: 36, offset: 16100 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Asynchronous iterable data types combine asynchronous data types with iterable data types. All asynchronous iterable data types implement the ',
          position: {
            start: { line: 510, column: 1, offset: 16101 },
            end: { line: 510, column: 143, offset: 16243 }
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
                start: { line: 510, column: 144, offset: 16244 },
                end: { line: 510, column: 167, offset: 16267 }
              }
            }
          ],
          position: {
            start: { line: 510, column: 143, offset: 16243 },
            end: { line: 510, column: 303, offset: 16403 }
          }
        },
        {
          type: 'text',
          value: ' using a method ',
          position: {
            start: { line: 510, column: 303, offset: 16403 },
            end: { line: 510, column: 319, offset: 16419 }
          }
        },
        {
          type: 'inlineCode',
          value: '[Symbol.asyncIterator]',
          position: {
            start: { line: 510, column: 319, offset: 16419 },
            end: { line: 510, column: 343, offset: 16443 }
          }
        },
        {
          type: 'text',
          value: ' that, when called, returns an async iterator object that can be consumed with a ',
          position: {
            start: { line: 510, column: 343, offset: 16443 },
            end: { line: 510, column: 424, offset: 16524 }
          }
        },
        {
          type: 'inlineCode',
          value: 'for await...of',
          position: {
            start: { line: 510, column: 424, offset: 16524 },
            end: { line: 510, column: 440, offset: 16540 }
          }
        },
        {
          type: 'text',
          value: ' loop. As of this article (2025), no built-in JavaScript data types currently implement the async iterable protocol. The only way to create async iterable data types is to implement the async iterable protocol yourself or by using an async generator function.',
          position: {
            start: { line: 510, column: 440, offset: 16540 },
            end: { line: 510, column: 699, offset: 16799 }
          }
        }
      ],
      position: {
        start: { line: 510, column: 1, offset: 16101 },
        end: { line: 510, column: 699, offset: 16799 }
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
        start: { line: 512, column: 1, offset: 16801 },
        end: { line: 552, column: 4, offset: 17394 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You can create async iterators is with async generator functions using the ',
          position: {
            start: { line: 554, column: 1, offset: 17396 },
            end: { line: 554, column: 76, offset: 17471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async function* () {}',
          position: {
            start: { line: 554, column: 76, offset: 17471 },
            end: { line: 554, column: 99, offset: 17494 }
          }
        },
        {
          type: 'text',
          value: ' syntax and the ',
          position: {
            start: { line: 554, column: 99, offset: 17494 },
            end: { line: 554, column: 115, offset: 17510 }
          }
        },
        {
          type: 'inlineCode',
          value: 'yield',
          position: {
            start: { line: 554, column: 115, offset: 17510 },
            end: { line: 554, column: 122, offset: 17517 }
          }
        },
        {
          type: 'text',
          value: ' keyword. Async generator functions create async generators, a kind of async iterator.',
          position: {
            start: { line: 554, column: 122, offset: 17517 },
            end: { line: 554, column: 208, offset: 17603 }
          }
        }
      ],
      position: {
        start: { line: 554, column: 1, offset: 17396 },
        end: { line: 554, column: 208, offset: 17603 }
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
        start: { line: 556, column: 1, offset: 17605 },
        end: { line: 576, column: 4, offset: 18085 }
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
            start: { line: 578, column: 4, offset: 18090 },
            end: { line: 578, column: 24, offset: 18110 }
          }
        }
      ],
      position: {
        start: { line: 578, column: 1, offset: 18087 },
        end: { line: 578, column: 24, offset: 18110 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Algebraic structures are special classes of data types that are identified by the presence of a specific method. For [A]synchronous Functional Programming, we will consider five algebraic structures: functor, filterable, foldable, semigroup, and monad.',
          position: {
            start: { line: 579, column: 1, offset: 18111 },
            end: { line: 579, column: 253, offset: 18363 }
          }
        }
      ],
      position: {
        start: { line: 579, column: 1, offset: 18111 },
        end: { line: 579, column: 253, offset: 18363 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The functor algebraic structure identifies data types with the ',
          position: {
            start: { line: 581, column: 1, offset: 18365 },
            end: { line: 581, column: 64, offset: 18428 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 581, column: 64, offset: 18428 },
            end: { line: 581, column: 70, offset: 18434 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 581, column: 70, offset: 18434 },
            end: { line: 581, column: 103, offset: 18467 }
          }
        },
        {
          type: 'inlineCode',
          value: '.map',
          position: {
            start: { line: 581, column: 103, offset: 18467 },
            end: { line: 581, column: 109, offset: 18473 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the functor laws:',
          position: {
            start: { line: 581, column: 109, offset: 18473 },
            end: { line: 581, column: 143, offset: 18507 }
          }
        }
      ],
      position: {
        start: { line: 581, column: 1, offset: 18365 },
        end: { line: 581, column: 143, offset: 18507 }
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
                    start: { line: 583, column: 6, offset: 18514 },
                    end: { line: 583, column: 51, offset: 18559 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'a => a',
                  position: {
                    start: { line: 583, column: 51, offset: 18559 },
                    end: { line: 583, column: 59, offset: 18567 }
                  }
                },
                {
                  type: 'text',
                  value: ' to a functor is equivalent to not having applied a function.',
                  position: {
                    start: { line: 583, column: 59, offset: 18567 },
                    end: { line: 583, column: 120, offset: 18628 }
                  }
                }
              ],
              position: {
                start: { line: 583, column: 6, offset: 18514 },
                end: { line: 583, column: 120, offset: 18628 }
              }
            }
          ],
          position: {
            start: { line: 583, column: 3, offset: 18511 },
            end: { line: 583, column: 120, offset: 18628 }
          }
        }
      ],
      position: {
        start: { line: 583, column: 3, offset: 18511 },
        end: { line: 583, column: 120, offset: 18628 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFunctor.map(identity),\n  myFunctor\n)',
      position: {
        start: { line: 585, column: 1, offset: 18630 },
        end: { line: 590, column: 4, offset: 18707 }
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
                    start: { line: 592, column: 6, offset: 18714 },
                    end: { line: 592, column: 64, offset: 18772 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 592, column: 64, offset: 18772 },
                    end: { line: 592, column: 70, offset: 18778 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to applying their composition in a single ',
                  position: {
                    start: { line: 592, column: 70, offset: 18778 },
                    end: { line: 592, column: 127, offset: 18835 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.map',
                  position: {
                    start: { line: 592, column: 127, offset: 18835 },
                    end: { line: 592, column: 133, offset: 18841 }
                  }
                },
                {
                  type: 'text',
                  value: ' operation.',
                  position: {
                    start: { line: 592, column: 133, offset: 18841 },
                    end: { line: 592, column: 144, offset: 18852 }
                  }
                }
              ],
              position: {
                start: { line: 592, column: 6, offset: 18714 },
                end: { line: 592, column: 144, offset: 18852 }
              }
            }
          ],
          position: {
            start: { line: 592, column: 3, offset: 18711 },
            end: { line: 592, column: 144, offset: 18852 }
          }
        }
      ],
      position: {
        start: { line: 592, column: 3, offset: 18711 },
        end: { line: 592, column: 144, offset: 18852 }
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
        start: { line: 594, column: 1, offset: 18854 },
        end: { line: 599, column: 4, offset: 18952 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be functors:',
          position: {
            start: { line: 601, column: 1, offset: 18954 },
            end: { line: 601, column: 65, offset: 19018 }
          }
        }
      ],
      position: {
        start: { line: 601, column: 1, offset: 18954 },
        end: { line: 601, column: 65, offset: 19018 }
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
                    start: { line: 602, column: 4, offset: 19022 },
                    end: { line: 602, column: 11, offset: 19029 }
                  }
                }
              ],
              position: {
                start: { line: 602, column: 4, offset: 19022 },
                end: { line: 602, column: 11, offset: 19029 }
              }
            }
          ],
          position: {
            start: { line: 602, column: 2, offset: 19020 },
            end: { line: 602, column: 11, offset: 19029 }
          }
        },
        {
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
                    start: { line: 603, column: 4, offset: 19033 },
                    end: { line: 603, column: 9, offset: 19038 }
                  }
                }
              ],
              position: {
                start: { line: 603, column: 4, offset: 19033 },
                end: { line: 603, column: 9, offset: 19038 }
              }
            }
          ],
          position: {
            start: { line: 603, column: 2, offset: 19031 },
            end: { line: 603, column: 9, offset: 19038 }
          }
        },
        {
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
                    start: { line: 604, column: 4, offset: 19042 },
                    end: { line: 604, column: 9, offset: 19047 }
                  }
                }
              ],
              position: {
                start: { line: 604, column: 4, offset: 19042 },
                end: { line: 604, column: 9, offset: 19047 }
              }
            }
          ],
          position: {
            start: { line: 604, column: 2, offset: 19040 },
            end: { line: 604, column: 9, offset: 19047 }
          }
        },
        {
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
                    start: { line: 605, column: 4, offset: 19051 },
                    end: { line: 605, column: 15, offset: 19062 }
                  }
                }
              ],
              position: {
                start: { line: 605, column: 4, offset: 19051 },
                end: { line: 605, column: 15, offset: 19062 }
              }
            }
          ],
          position: {
            start: { line: 605, column: 2, offset: 19049 },
            end: { line: 605, column: 15, offset: 19062 }
          }
        },
        {
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
                    start: { line: 606, column: 4, offset: 19066 },
                    end: { line: 606, column: 21, offset: 19083 }
                  }
                }
              ],
              position: {
                start: { line: 606, column: 4, offset: 19066 },
                end: { line: 606, column: 21, offset: 19083 }
              }
            }
          ],
          position: {
            start: { line: 606, column: 2, offset: 19064 },
            end: { line: 606, column: 21, offset: 19083 }
          }
        },
        {
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
                    start: { line: 607, column: 4, offset: 19087 },
                    end: { line: 607, column: 12, offset: 19095 }
                  }
                }
              ],
              position: {
                start: { line: 607, column: 4, offset: 19087 },
                end: { line: 607, column: 12, offset: 19095 }
              }
            }
          ],
          position: {
            start: { line: 607, column: 2, offset: 19085 },
            end: { line: 607, column: 12, offset: 19095 }
          }
        }
      ],
      position: {
        start: { line: 602, column: 2, offset: 19020 },
        end: { line: 607, column: 12, offset: 19095 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The filterable algebraic structure identifies data types with the ',
          position: {
            start: { line: 609, column: 1, offset: 19097 },
            end: { line: 609, column: 67, offset: 19163 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 609, column: 67, offset: 19163 },
            end: { line: 609, column: 76, offset: 19172 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 609, column: 76, offset: 19172 },
            end: { line: 609, column: 109, offset: 19205 }
          }
        },
        {
          type: 'inlineCode',
          value: '.filter',
          position: {
            start: { line: 609, column: 109, offset: 19205 },
            end: { line: 609, column: 118, offset: 19214 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 609, column: 118, offset: 19214 },
            end: { line: 609, column: 154, offset: 19250 }
          }
        }
      ],
      position: {
        start: { line: 609, column: 1, offset: 19097 },
        end: { line: 609, column: 154, offset: 19250 }
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
                    start: { line: 611, column: 6, offset: 19257 },
                    end: { line: 611, column: 98, offset: 19349 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 611, column: 98, offset: 19349 },
                    end: { line: 611, column: 107, offset: 19358 }
                  }
                },
                {
                  type: 'text',
                  value: ' is equivalent to executing both predicate functions in a logical AND expression with a single call to ',
                  position: {
                    start: { line: 611, column: 107, offset: 19358 },
                    end: { line: 611, column: 210, offset: 19461 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.filter',
                  position: {
                    start: { line: 611, column: 210, offset: 19461 },
                    end: { line: 611, column: 219, offset: 19470 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 611, column: 219, offset: 19470 },
                    end: { line: 611, column: 220, offset: 19471 }
                  }
                }
              ],
              position: {
                start: { line: 611, column: 6, offset: 19257 },
                end: { line: 611, column: 220, offset: 19471 }
              }
            }
          ],
          position: {
            start: { line: 611, column: 3, offset: 19254 },
            end: { line: 611, column: 220, offset: 19471 }
          }
        }
      ],
      position: {
        start: { line: 611, column: 3, offset: 19254 },
        end: { line: 611, column: 220, offset: 19471 }
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
        start: { line: 613, column: 1, offset: 19473 },
        end: { line: 618, column: 4, offset: 19588 }
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
                    start: { line: 620, column: 6, offset: 19595 },
                    end: { line: 620, column: 122, offset: 19711 }
                  }
                }
              ],
              position: {
                start: { line: 620, column: 6, offset: 19595 },
                end: { line: 620, column: 122, offset: 19711 }
              }
            }
          ],
          position: {
            start: { line: 620, column: 3, offset: 19592 },
            end: { line: 620, column: 122, offset: 19711 }
          }
        }
      ],
      position: {
        start: { line: 620, column: 3, offset: 19592 },
        end: { line: 620, column: 122, offset: 19711 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myFilterable.filter(() => true),\n  myFilterable\n)',
      position: {
        start: { line: 622, column: 1, offset: 19713 },
        end: { line: 627, column: 4, offset: 19801 }
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
                    start: { line: 629, column: 6, offset: 19808 },
                    end: { line: 629, column: 160, offset: 19962 }
                  }
                }
              ],
              position: {
                start: { line: 629, column: 6, offset: 19808 },
                end: { line: 629, column: 160, offset: 19962 }
              }
            }
          ],
          position: {
            start: { line: 629, column: 3, offset: 19805 },
            end: { line: 629, column: 160, offset: 19962 }
          }
        }
      ],
      position: {
        start: { line: 629, column: 3, offset: 19805 },
        end: { line: 629, column: 160, offset: 19962 }
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
        start: { line: 631, column: 1, offset: 19964 },
        end: { line: 636, column: 4, offset: 20075 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be filterables:',
          position: {
            start: { line: 638, column: 1, offset: 20077 },
            end: { line: 638, column: 68, offset: 20144 }
          }
        }
      ],
      position: {
        start: { line: 638, column: 1, offset: 20077 },
        end: { line: 638, column: 68, offset: 20144 }
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
                    start: { line: 639, column: 4, offset: 20148 },
                    end: { line: 639, column: 11, offset: 20155 }
                  }
                }
              ],
              position: {
                start: { line: 639, column: 4, offset: 20148 },
                end: { line: 639, column: 11, offset: 20155 }
              }
            }
          ],
          position: {
            start: { line: 639, column: 2, offset: 20146 },
            end: { line: 639, column: 11, offset: 20155 }
          }
        },
        {
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
                    start: { line: 640, column: 4, offset: 20159 },
                    end: { line: 640, column: 9, offset: 20164 }
                  }
                }
              ],
              position: {
                start: { line: 640, column: 4, offset: 20159 },
                end: { line: 640, column: 9, offset: 20164 }
              }
            }
          ],
          position: {
            start: { line: 640, column: 2, offset: 20157 },
            end: { line: 640, column: 9, offset: 20164 }
          }
        },
        {
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
                    start: { line: 641, column: 4, offset: 20168 },
                    end: { line: 641, column: 9, offset: 20173 }
                  }
                }
              ],
              position: {
                start: { line: 641, column: 4, offset: 20168 },
                end: { line: 641, column: 9, offset: 20173 }
              }
            }
          ],
          position: {
            start: { line: 641, column: 2, offset: 20166 },
            end: { line: 641, column: 9, offset: 20173 }
          }
        },
        {
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
                    start: { line: 642, column: 4, offset: 20177 },
                    end: { line: 642, column: 15, offset: 20188 }
                  }
                }
              ],
              position: {
                start: { line: 642, column: 4, offset: 20177 },
                end: { line: 642, column: 15, offset: 20188 }
              }
            }
          ],
          position: {
            start: { line: 642, column: 2, offset: 20175 },
            end: { line: 642, column: 15, offset: 20188 }
          }
        },
        {
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
                    start: { line: 643, column: 4, offset: 20192 },
                    end: { line: 643, column: 21, offset: 20209 }
                  }
                }
              ],
              position: {
                start: { line: 643, column: 4, offset: 20192 },
                end: { line: 643, column: 21, offset: 20209 }
              }
            }
          ],
          position: {
            start: { line: 643, column: 2, offset: 20190 },
            end: { line: 643, column: 21, offset: 20209 }
          }
        },
        {
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
                    start: { line: 644, column: 4, offset: 20213 },
                    end: { line: 644, column: 12, offset: 20221 }
                  }
                }
              ],
              position: {
                start: { line: 644, column: 4, offset: 20213 },
                end: { line: 644, column: 12, offset: 20221 }
              }
            }
          ],
          position: {
            start: { line: 644, column: 2, offset: 20211 },
            end: { line: 644, column: 12, offset: 20221 }
          }
        }
      ],
      position: {
        start: { line: 639, column: 2, offset: 20146 },
        end: { line: 644, column: 12, offset: 20221 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The foldable algebraic structure identifies data types with the ',
          position: {
            start: { line: 646, column: 1, offset: 20223 },
            end: { line: 646, column: 65, offset: 20287 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 646, column: 65, offset: 20287 },
            end: { line: 646, column: 74, offset: 20296 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 646, column: 74, offset: 20296 },
            end: { line: 646, column: 107, offset: 20329 }
          }
        },
        {
          type: 'inlineCode',
          value: '.reduce',
          position: {
            start: { line: 646, column: 107, offset: 20329 },
            end: { line: 646, column: 116, offset: 20338 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following law:',
          position: {
            start: { line: 646, column: 116, offset: 20338 },
            end: { line: 646, column: 151, offset: 20373 }
          }
        }
      ],
      position: {
        start: { line: 646, column: 1, offset: 20223 },
        end: { line: 646, column: 152, offset: 20374 }
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
                    start: { line: 648, column: 6, offset: 20381 },
                    end: { line: 648, column: 87, offset: 20462 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.reduce',
                  position: {
                    start: { line: 648, column: 87, offset: 20462 },
                    end: { line: 648, column: 96, offset: 20471 }
                  }
                },
                {
                  type: 'text',
                  value: ' where the first reduce concatenates every item in the foldable onto an array and the second reduce takes the array and performs the given reducing operation.',
                  position: {
                    start: { line: 648, column: 96, offset: 20471 },
                    end: { line: 648, column: 254, offset: 20629 }
                  }
                }
              ],
              position: {
                start: { line: 648, column: 6, offset: 20381 },
                end: { line: 648, column: 254, offset: 20629 }
              }
            }
          ],
          position: {
            start: { line: 648, column: 3, offset: 20378 },
            end: { line: 648, column: 254, offset: 20629 }
          }
        }
      ],
      position: {
        start: { line: 648, column: 3, offset: 20378 },
        end: { line: 648, column: 254, offset: 20629 }
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
        start: { line: 650, column: 1, offset: 20631 },
        end: { line: 657, column: 4, offset: 20801 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be foldables:',
          position: {
            start: { line: 659, column: 1, offset: 20803 },
            end: { line: 659, column: 66, offset: 20868 }
          }
        }
      ],
      position: {
        start: { line: 659, column: 1, offset: 20803 },
        end: { line: 659, column: 66, offset: 20868 }
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
                    start: { line: 660, column: 4, offset: 20872 },
                    end: { line: 660, column: 11, offset: 20879 }
                  }
                }
              ],
              position: {
                start: { line: 660, column: 4, offset: 20872 },
                end: { line: 660, column: 11, offset: 20879 }
              }
            }
          ],
          position: {
            start: { line: 660, column: 2, offset: 20870 },
            end: { line: 660, column: 11, offset: 20879 }
          }
        },
        {
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
                    start: { line: 661, column: 4, offset: 20883 },
                    end: { line: 661, column: 9, offset: 20888 }
                  }
                }
              ],
              position: {
                start: { line: 661, column: 4, offset: 20883 },
                end: { line: 661, column: 9, offset: 20888 }
              }
            }
          ],
          position: {
            start: { line: 661, column: 2, offset: 20881 },
            end: { line: 661, column: 9, offset: 20888 }
          }
        },
        {
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
                    start: { line: 662, column: 4, offset: 20892 },
                    end: { line: 662, column: 9, offset: 20897 }
                  }
                }
              ],
              position: {
                start: { line: 662, column: 4, offset: 20892 },
                end: { line: 662, column: 9, offset: 20897 }
              }
            }
          ],
          position: {
            start: { line: 662, column: 2, offset: 20890 },
            end: { line: 662, column: 9, offset: 20897 }
          }
        },
        {
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
                    start: { line: 663, column: 4, offset: 20901 },
                    end: { line: 663, column: 15, offset: 20912 }
                  }
                }
              ],
              position: {
                start: { line: 663, column: 4, offset: 20901 },
                end: { line: 663, column: 15, offset: 20912 }
              }
            }
          ],
          position: {
            start: { line: 663, column: 2, offset: 20899 },
            end: { line: 663, column: 15, offset: 20912 }
          }
        },
        {
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
                    start: { line: 664, column: 4, offset: 20916 },
                    end: { line: 664, column: 21, offset: 20933 }
                  }
                }
              ],
              position: {
                start: { line: 664, column: 4, offset: 20916 },
                end: { line: 664, column: 21, offset: 20933 }
              }
            }
          ],
          position: {
            start: { line: 664, column: 2, offset: 20914 },
            end: { line: 664, column: 21, offset: 20933 }
          }
        },
        {
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
                    start: { line: 665, column: 4, offset: 20937 },
                    end: { line: 665, column: 12, offset: 20945 }
                  }
                }
              ],
              position: {
                start: { line: 665, column: 4, offset: 20937 },
                end: { line: 665, column: 12, offset: 20945 }
              }
            }
          ],
          position: {
            start: { line: 665, column: 2, offset: 20935 },
            end: { line: 665, column: 12, offset: 20945 }
          }
        }
      ],
      position: {
        start: { line: 660, column: 2, offset: 20870 },
        end: { line: 665, column: 12, offset: 20945 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The semigroup algebraic structure identifies data types with the ',
          position: {
            start: { line: 667, column: 1, offset: 20947 },
            end: { line: 667, column: 66, offset: 21012 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 667, column: 66, offset: 21012 },
            end: { line: 667, column: 75, offset: 21021 }
          }
        },
        {
          type: 'text',
          value: ' method. Data types implementing ',
          position: {
            start: { line: 667, column: 75, offset: 21021 },
            end: { line: 667, column: 108, offset: 21054 }
          }
        },
        {
          type: 'inlineCode',
          value: '.concat',
          position: {
            start: { line: 667, column: 108, offset: 21054 },
            end: { line: 667, column: 117, offset: 21063 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the following laws:',
          position: {
            start: { line: 667, column: 117, offset: 21063 },
            end: { line: 667, column: 153, offset: 21099 }
          }
        }
      ],
      position: {
        start: { line: 667, column: 1, offset: 20947 },
        end: { line: 667, column: 153, offset: 21099 }
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
                    start: { line: 669, column: 6, offset: 21106 },
                    end: { line: 669, column: 163, offset: 21263 }
                  }
                }
              ],
              position: {
                start: { line: 669, column: 6, offset: 21106 },
                end: { line: 669, column: 163, offset: 21263 }
              }
            }
          ],
          position: {
            start: { line: 669, column: 3, offset: 21103 },
            end: { line: 669, column: 163, offset: 21263 }
          }
        }
      ],
      position: {
        start: { line: 669, column: 3, offset: 21103 },
        end: { line: 669, column: 163, offset: 21263 }
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
        start: { line: 671, column: 1, offset: 21265 },
        end: { line: 676, column: 4, offset: 21379 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be semigroups:',
          position: {
            start: { line: 678, column: 1, offset: 21381 },
            end: { line: 678, column: 67, offset: 21447 }
          }
        }
      ],
      position: {
        start: { line: 678, column: 1, offset: 21381 },
        end: { line: 678, column: 67, offset: 21447 }
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
                    start: { line: 679, column: 4, offset: 21451 },
                    end: { line: 679, column: 11, offset: 21458 }
                  }
                }
              ],
              position: {
                start: { line: 679, column: 4, offset: 21451 },
                end: { line: 679, column: 11, offset: 21458 }
              }
            }
          ],
          position: {
            start: { line: 679, column: 2, offset: 21449 },
            end: { line: 679, column: 11, offset: 21458 }
          }
        },
        {
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
                    start: { line: 680, column: 4, offset: 21462 },
                    end: { line: 680, column: 12, offset: 21470 }
                  }
                }
              ],
              position: {
                start: { line: 680, column: 4, offset: 21462 },
                end: { line: 680, column: 12, offset: 21470 }
              }
            }
          ],
          position: {
            start: { line: 680, column: 2, offset: 21460 },
            end: { line: 680, column: 12, offset: 21470 }
          }
        },
        {
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
                    start: { line: 681, column: 4, offset: 21474 },
                    end: { line: 681, column: 9, offset: 21479 }
                  }
                }
              ],
              position: {
                start: { line: 681, column: 4, offset: 21474 },
                end: { line: 681, column: 9, offset: 21479 }
              }
            }
          ],
          position: {
            start: { line: 681, column: 2, offset: 21472 },
            end: { line: 681, column: 9, offset: 21479 }
          }
        },
        {
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
                    start: { line: 682, column: 4, offset: 21483 },
                    end: { line: 682, column: 12, offset: 21491 }
                  }
                }
              ],
              position: {
                start: { line: 682, column: 4, offset: 21483 },
                end: { line: 682, column: 12, offset: 21491 }
              }
            }
          ],
          position: {
            start: { line: 682, column: 2, offset: 21481 },
            end: { line: 682, column: 12, offset: 21491 }
          }
        },
        {
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
                    start: { line: 683, column: 4, offset: 21495 },
                    end: { line: 683, column: 12, offset: 21503 }
                  }
                }
              ],
              position: {
                start: { line: 683, column: 4, offset: 21495 },
                end: { line: 683, column: 12, offset: 21503 }
              }
            }
          ],
          position: {
            start: { line: 683, column: 2, offset: 21493 },
            end: { line: 683, column: 12, offset: 21503 }
          }
        }
      ],
      position: {
        start: { line: 679, column: 2, offset: 21449 },
        end: { line: 683, column: 12, offset: 21503 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The monad algebraic structure identifies data types with the ',
          position: {
            start: { line: 685, column: 1, offset: 21505 },
            end: { line: 685, column: 62, offset: 21566 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 685, column: 62, offset: 21566 },
            end: { line: 685, column: 72, offset: 21576 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 685, column: 72, offset: 21576 },
            end: { line: 685, column: 76, offset: 21580 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 685, column: 76, offset: 21580 },
            end: { line: 685, column: 84, offset: 21588 }
          }
        },
        {
          type: 'text',
          value: ' methods. Data types implementing ',
          position: {
            start: { line: 685, column: 84, offset: 21588 },
            end: { line: 685, column: 118, offset: 21622 }
          }
        },
        {
          type: 'inlineCode',
          value: '.flatMap',
          position: {
            start: { line: 685, column: 118, offset: 21622 },
            end: { line: 685, column: 128, offset: 21632 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 685, column: 128, offset: 21632 },
            end: { line: 685, column: 132, offset: 21636 }
          }
        },
        {
          type: 'inlineCode',
          value: '.chain',
          position: {
            start: { line: 685, column: 132, offset: 21636 },
            end: { line: 685, column: 140, offset: 21644 }
          }
        },
        {
          type: 'text',
          value: ' must conform to the monad laws:',
          position: {
            start: { line: 685, column: 140, offset: 21644 },
            end: { line: 685, column: 172, offset: 21676 }
          }
        }
      ],
      position: {
        start: { line: 685, column: 1, offset: 21505 },
        end: { line: 685, column: 172, offset: 21676 }
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
                    start: { line: 687, column: 6, offset: 21683 },
                    end: { line: 687, column: 78, offset: 21755 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.flatMap',
                  position: {
                    start: { line: 687, column: 78, offset: 21755 },
                    end: { line: 687, column: 88, offset: 21765 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 687, column: 88, offset: 21765 },
                    end: { line: 687, column: 92, offset: 21769 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: '.chain',
                  position: {
                    start: { line: 687, column: 92, offset: 21769 },
                    end: { line: 687, column: 100, offset: 21777 }
                  }
                },
                {
                  type: 'text',
                  value: ' with a function is equivalent to directly applying the function to the value.',
                  position: {
                    start: { line: 687, column: 100, offset: 21777 },
                    end: { line: 687, column: 178, offset: 21855 }
                  }
                }
              ],
              position: {
                start: { line: 687, column: 6, offset: 21683 },
                end: { line: 687, column: 178, offset: 21855 }
              }
            }
          ],
          position: {
            start: { line: 687, column: 3, offset: 21680 },
            end: { line: 687, column: 178, offset: 21855 }
          }
        }
      ],
      position: {
        start: { line: 687, column: 3, offset: 21680 },
        end: { line: 687, column: 178, offset: 21855 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  MyMonad.of(a).flatMap(f),\n  f(a),\n)',
      position: {
        start: { line: 689, column: 1, offset: 21857 },
        end: { line: 694, column: 4, offset: 21931 }
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
                    start: { line: 696, column: 6, offset: 21938 },
                    end: { line: 696, column: 120, offset: 22052 }
                  }
                }
              ],
              position: {
                start: { line: 696, column: 6, offset: 21938 },
                end: { line: 696, column: 120, offset: 22052 }
              }
            }
          ],
          position: {
            start: { line: 696, column: 3, offset: 21935 },
            end: { line: 696, column: 120, offset: 22052 }
          }
        }
      ],
      position: {
        start: { line: 696, column: 3, offset: 21935 },
        end: { line: 696, column: 120, offset: 22052 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n  myMonad.flatMap(MyMonad.of),\n  myMonad\n)',
      position: {
        start: { line: 698, column: 1, offset: 22054 },
        end: { line: 703, column: 4, offset: 22133 }
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
                    start: { line: 705, column: 6, offset: 22140 },
                    end: { line: 705, column: 111, offset: 22245 }
                  }
                }
              ],
              position: {
                start: { line: 705, column: 6, offset: 22140 },
                end: { line: 705, column: 111, offset: 22245 }
              }
            }
          ],
          position: {
            start: { line: 705, column: 3, offset: 22137 },
            end: { line: 705, column: 111, offset: 22245 }
          }
        }
      ],
      position: {
        start: { line: 705, column: 3, offset: 22137 },
        end: { line: 705, column: 111, offset: 22245 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'assert.equivalent(\n' +
        '  myMonad.flatMap(f).flatMap(g),\n' +
        '  myMonad.flatMap(x => f(x).flatMap(g))\n' +
        ')',
      position: {
        start: { line: 707, column: 1, offset: 22247 },
        end: { line: 712, column: 4, offset: 22358 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following built-in data types are considered to be monads:',
          position: {
            start: { line: 714, column: 1, offset: 22360 },
            end: { line: 714, column: 63, offset: 22422 }
          }
        }
      ],
      position: {
        start: { line: 714, column: 1, offset: 22360 },
        end: { line: 714, column: 63, offset: 22422 }
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
                    start: { line: 715, column: 4, offset: 22426 },
                    end: { line: 715, column: 11, offset: 22433 }
                  }
                }
              ],
              position: {
                start: { line: 715, column: 4, offset: 22426 },
                end: { line: 715, column: 11, offset: 22433 }
              }
            }
          ],
          position: {
            start: { line: 715, column: 2, offset: 22424 },
            end: { line: 715, column: 11, offset: 22433 }
          }
        },
        {
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
                    start: { line: 716, column: 4, offset: 22437 },
                    end: { line: 716, column: 12, offset: 22445 }
                  }
                }
              ],
              position: {
                start: { line: 716, column: 4, offset: 22437 },
                end: { line: 716, column: 12, offset: 22445 }
              }
            }
          ],
          position: {
            start: { line: 716, column: 2, offset: 22435 },
            end: { line: 716, column: 12, offset: 22445 }
          }
        },
        {
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
                    start: { line: 717, column: 4, offset: 22449 },
                    end: { line: 717, column: 9, offset: 22454 }
                  }
                }
              ],
              position: {
                start: { line: 717, column: 4, offset: 22449 },
                end: { line: 717, column: 9, offset: 22454 }
              }
            }
          ],
          position: {
            start: { line: 717, column: 2, offset: 22447 },
            end: { line: 717, column: 9, offset: 22454 }
          }
        },
        {
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
                    start: { line: 718, column: 4, offset: 22458 },
                    end: { line: 718, column: 15, offset: 22469 }
                  }
                }
              ],
              position: {
                start: { line: 718, column: 4, offset: 22458 },
                end: { line: 718, column: 15, offset: 22469 }
              }
            }
          ],
          position: {
            start: { line: 718, column: 2, offset: 22456 },
            end: { line: 718, column: 15, offset: 22469 }
          }
        },
        {
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
                    start: { line: 719, column: 4, offset: 22473 },
                    end: { line: 719, column: 21, offset: 22490 }
                  }
                }
              ],
              position: {
                start: { line: 719, column: 4, offset: 22473 },
                end: { line: 719, column: 21, offset: 22490 }
              }
            }
          ],
          position: {
            start: { line: 719, column: 2, offset: 22471 },
            end: { line: 719, column: 21, offset: 22490 }
          }
        },
        {
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
                    start: { line: 720, column: 4, offset: 22494 },
                    end: { line: 720, column: 12, offset: 22502 }
                  }
                }
              ],
              position: {
                start: { line: 720, column: 4, offset: 22494 },
                end: { line: 720, column: 12, offset: 22502 }
              }
            }
          ],
          position: {
            start: { line: 720, column: 2, offset: 22492 },
            end: { line: 720, column: 12, offset: 22502 }
          }
        }
      ],
      position: {
        start: { line: 715, column: 2, offset: 22424 },
        end: { line: 720, column: 12, offset: 22502 }
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
            start: { line: 722, column: 4, offset: 22507 },
            end: { line: 722, column: 14, offset: 22517 }
          }
        }
      ],
      position: {
        start: { line: 722, column: 1, offset: 22504 },
        end: { line: 722, column: 14, offset: 22517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the data types of the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 724, column: 1, offset: 22519 },
            end: { line: 724, column: 85, offset: 22603 }
          }
        }
      ],
      position: {
        start: { line: 724, column: 1, offset: 22519 },
        end: { line: 724, column: 85, offset: 22603 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are interested in getting started with rubico and [A]synchronous Functional Programming, please visit the home page for the library: ',
          position: {
            start: { line: 726, column: 1, offset: 22605 },
            end: { line: 726, column: 141, offset: 22745 }
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
                start: { line: 726, column: 142, offset: 22746 },
                end: { line: 726, column: 153, offset: 22757 }
              }
            }
          ],
          position: {
            start: { line: 726, column: 141, offset: 22745 },
            end: { line: 726, column: 176, offset: 22780 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 726, column: 176, offset: 22780 },
            end: { line: 726, column: 177, offset: 22781 }
          }
        }
      ],
      position: {
        start: { line: 726, column: 1, offset: 22605 },
        end: { line: 726, column: 177, offset: 22781 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 727, column: 1, offset: 22782 }
  }
}