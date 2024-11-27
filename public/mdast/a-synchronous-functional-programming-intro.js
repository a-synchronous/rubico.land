export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2024-11-26\n' +
        'path: /blog/a-synchronous-functional-programming-intro\n' +
        'description: An introduction to the [A]synchronous Functional Programming paradigm',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 4, offset: 272 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 9, column: 1, offset: 274 },
            end: { line: 9, column: 67, offset: 340 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://en.wikipedia.org/wiki/Functional_programming',
          children: [
            {
              type: 'text',
              value: 'Functional Programming',
              position: {
                start: { line: 9, column: 68, offset: 341 },
                end: { line: 9, column: 90, offset: 363 }
              }
            }
          ],
          position: {
            start: { line: 9, column: 67, offset: 340 },
            end: { line: 9, column: 145, offset: 418 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 9, column: 145, offset: 418 },
            end: { line: 9, column: 156, offset: 429 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 9, column: 158, offset: 431 },
                end: { line: 9, column: 195, offset: 468 }
              }
            }
          ],
          position: {
            start: { line: 9, column: 156, offset: 429 },
            end: { line: 9, column: 197, offset: 470 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 9, column: 197, offset: 470 },
            end: { line: 9, column: 347, offset: 620 }
          }
        }
      ],
      position: {
        start: { line: 9, column: 1, offset: 274 },
        end: { line: 9, column: 347, offset: 620 }
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
                  value: 'asynchronous code should be simple',
                  position: {
                    start: { line: 11, column: 4, offset: 625 },
                    end: { line: 11, column: 38, offset: 659 }
                  }
                }
              ],
              position: {
                start: { line: 11, column: 4, offset: 625 },
                end: { line: 11, column: 38, offset: 659 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 2, offset: 623 },
            end: { line: 11, column: 38, offset: 659 }
          }
        },
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
                  value: 'functional style should not care about async',
                  position: {
                    start: { line: 12, column: 4, offset: 663 },
                    end: { line: 12, column: 48, offset: 707 }
                  }
                }
              ],
              position: {
                start: { line: 12, column: 4, offset: 663 },
                end: { line: 12, column: 48, offset: 707 }
              }
            }
          ],
          position: {
            start: { line: 12, column: 2, offset: 661 },
            end: { line: 12, column: 48, offset: 707 }
          }
        },
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
                  value: 'functional transformations should be composable, performant, and simple to express',
                  position: {
                    start: { line: 13, column: 4, offset: 711 },
                    end: { line: 13, column: 86, offset: 793 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 711 },
                end: { line: 13, column: 86, offset: 793 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 709 },
            end: { line: 13, column: 86, offset: 793 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 2, offset: 623 },
        end: { line: 13, column: 86, offset: 793 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 15, column: 1, offset: 795 },
            end: { line: 15, column: 290, offset: 1084 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 795 },
        end: { line: 15, column: 290, offset: 1084 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'First class and higher-order Functions',
          position: {
            start: { line: 17, column: 5, offset: 1090 },
            end: { line: 17, column: 43, offset: 1128 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1086 },
        end: { line: 17, column: 43, offset: 1128 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 19, column: 1, offset: 1130 },
            end: { line: 19, column: 657, offset: 1786 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1130 },
        end: { line: 19, column: 657, offset: 1786 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 21, column: 1, offset: 1788 },
            end: { line: 21, column: 64, offset: 1851 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1788 },
        end: { line: 21, column: 64, offset: 1851 }
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
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.reduce() Method',
                      position: {
                        start: { line: 23, column: 6, offset: 1858 },
                        end: { line: 23, column: 22, offset: 1874 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 23, column: 4, offset: 1856 },
                    end: { line: 23, column: 24, offset: 1876 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 23, column: 24, offset: 1876 },
                    end: { line: 23, column: 78, offset: 1930 }
                  }
                }
              ],
              position: {
                start: { line: 23, column: 4, offset: 1856 },
                end: { line: 23, column: 78, offset: 1930 }
              }
            }
          ],
          position: {
            start: { line: 23, column: 2, offset: 1854 },
            end: { line: 23, column: 78, offset: 1930 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.forEach() Method',
                      position: {
                        start: { line: 24, column: 6, offset: 1936 },
                        end: { line: 24, column: 23, offset: 1953 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 24, column: 4, offset: 1934 },
                    end: { line: 24, column: 25, offset: 1955 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 24, column: 25, offset: 1955 },
                    end: { line: 24, column: 100, offset: 2030 }
                  }
                }
              ],
              position: {
                start: { line: 24, column: 4, offset: 1934 },
                end: { line: 24, column: 100, offset: 2030 }
              }
            }
          ],
          position: {
            start: { line: 24, column: 2, offset: 1932 },
            end: { line: 24, column: 100, offset: 2030 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.map() Method',
                      position: {
                        start: { line: 25, column: 6, offset: 2036 },
                        end: { line: 25, column: 19, offset: 2049 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 2034 },
                    end: { line: 25, column: 21, offset: 2051 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 25, column: 21, offset: 2051 },
                    end: { line: 25, column: 107, offset: 2137 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 2034 },
                end: { line: 25, column: 107, offset: 2137 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 2032 },
            end: { line: 25, column: 107, offset: 2137 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 2, offset: 1854 },
        end: { line: 25, column: 107, offset: 2137 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 27, column: 1, offset: 2139 },
            end: { line: 27, column: 63, offset: 2201 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 2139 },
        end: { line: 27, column: 63, offset: 2201 }
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
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.reduce(firstClassFunction)',
                      position: {
                        start: { line: 29, column: 6, offset: 2208 },
                        end: { line: 29, column: 33, offset: 2235 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 4, offset: 2206 },
                    end: { line: 29, column: 35, offset: 2237 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 29, column: 35, offset: 2237 },
                    end: { line: 29, column: 37, offset: 2239 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 29, column: 37, offset: 2239 },
                    end: { line: 29, column: 57, offset: 2259 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 29, column: 57, offset: 2259 },
                    end: { line: 29, column: 83, offset: 2285 }
                  }
                }
              ],
              position: {
                start: { line: 29, column: 4, offset: 2206 },
                end: { line: 29, column: 83, offset: 2285 }
              }
            }
          ],
          position: {
            start: { line: 29, column: 2, offset: 2204 },
            end: { line: 29, column: 83, offset: 2285 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.forEach(firstClassFunction)',
                      position: {
                        start: { line: 30, column: 6, offset: 2291 },
                        end: { line: 30, column: 34, offset: 2319 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 2289 },
                    end: { line: 30, column: 36, offset: 2321 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 30, column: 36, offset: 2321 },
                    end: { line: 30, column: 38, offset: 2323 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 30, column: 38, offset: 2323 },
                    end: { line: 30, column: 58, offset: 2343 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 30, column: 58, offset: 2343 },
                    end: { line: 30, column: 84, offset: 2369 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 2289 },
                end: { line: 30, column: 84, offset: 2369 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 2287 },
            end: { line: 30, column: 84, offset: 2369 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: '.map(firstClassFunction)',
                      position: {
                        start: { line: 31, column: 6, offset: 2375 },
                        end: { line: 31, column: 30, offset: 2399 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2373 },
                    end: { line: 31, column: 32, offset: 2401 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 32, offset: 2401 },
                    end: { line: 31, column: 34, offset: 2403 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 34, offset: 2403 },
                    end: { line: 31, column: 54, offset: 2423 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 54, offset: 2423 },
                    end: { line: 31, column: 80, offset: 2449 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2373 },
                end: { line: 31, column: 80, offset: 2449 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2371 },
            end: { line: 31, column: 80, offset: 2449 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 2, offset: 2204 },
        end: { line: 31, column: 80, offset: 2449 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 33, column: 1, offset: 2451 },
            end: { line: 33, column: 81, offset: 2531 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 33, column: 81, offset: 2531 },
            end: { line: 33, column: 90, offset: 2540 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 33, column: 90, offset: 2540 },
            end: { line: 33, column: 122, offset: 2572 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 122, offset: 2572 },
            end: { line: 33, column: 125, offset: 2575 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 33, column: 125, offset: 2575 },
            end: { line: 33, column: 152, offset: 2602 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 152, offset: 2602 },
            end: { line: 33, column: 155, offset: 2605 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 33, column: 155, offset: 2605 },
            end: { line: 33, column: 167, offset: 2617 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 167, offset: 2617 },
            end: { line: 33, column: 170, offset: 2620 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 33, column: 170, offset: 2620 },
            end: { line: 33, column: 181, offset: 2631 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 2451 },
        end: { line: 33, column: 181, offset: 2631 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'function logArgs(f) {\n' +
        '  return (...args) => {\n' +
        '    console.log(...args)\n' +
        '    return f(...args)\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const add = (a, b) => a + b\n' +
        'const addWithArgsLogged = logArgs(add)\n' +
        '\n' +
        'const result = addWithArgsLogged(1, 2)\n' +
        '// 1 2\n' +
        '\n' +
        'console.log(result)\n' +
        '// 3',
      position: {
        start: { line: 35, column: 1, offset: 2633 },
        end: { line: 51, column: 4, offset: 2903 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Pure functions',
          position: {
            start: { line: 53, column: 5, offset: 2909 },
            end: { line: 53, column: 19, offset: 2923 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 2905 },
        end: { line: 53, column: 19, offset: 2923 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 55, column: 1, offset: 2925 },
            end: { line: 55, column: 70, offset: 2994 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2925 },
        end: { line: 55, column: 70, offset: 2994 }
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
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: 'No side effects',
                      position: {
                        start: { line: 57, column: 6, offset: 3001 },
                        end: { line: 57, column: 21, offset: 3016 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 57, column: 4, offset: 2999 },
                    end: { line: 57, column: 23, offset: 3018 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 57, column: 23, offset: 3018 },
                    end: { line: 57, column: 192, offset: 3187 }
                  }
                },
                {
                  type: 'link',
                  title: null,
                  url: 'https://en.wikipedia.org/wiki/Immutable_object',
                  children: [
                    {
                      type: 'text',
                      value: 'immutability',
                      position: {
                        start: { line: 57, column: 193, offset: 3188 },
                        end: { line: 57, column: 205, offset: 3200 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 57, column: 192, offset: 3187 },
                    end: { line: 57, column: 254, offset: 3249 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 57, column: 254, offset: 3249 },
                    end: { line: 57, column: 256, offset: 3251 }
                  }
                }
              ],
              position: {
                start: { line: 57, column: 4, offset: 2999 },
                end: { line: 57, column: 256, offset: 3251 }
              }
            }
          ],
          position: {
            start: { line: 57, column: 2, offset: 2997 },
            end: { line: 57, column: 256, offset: 3251 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: 'Deterministic output / Referential transparency / Idempotence',
                      position: {
                        start: { line: 58, column: 6, offset: 3257 },
                        end: { line: 58, column: 67, offset: 3318 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 58, column: 4, offset: 3255 },
                    end: { line: 58, column: 69, offset: 3320 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 58, column: 69, offset: 3320 },
                    end: { line: 58, column: 144, offset: 3395 }
                  }
                }
              ],
              position: {
                start: { line: 58, column: 4, offset: 3255 },
                end: { line: 58, column: 144, offset: 3395 }
              }
            }
          ],
          position: {
            start: { line: 58, column: 2, offset: 3253 },
            end: { line: 58, column: 144, offset: 3395 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 2, offset: 2997 },
        end: { line: 58, column: 144, offset: 3395 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 60, column: 1, offset: 3397 },
            end: { line: 60, column: 46, offset: 3442 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3397 },
        end: { line: 60, column: 46, offset: 3442 }
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
                  value: 'Pure functions are easy to test - simply vary the input for full code coverage',
                  position: {
                    start: { line: 62, column: 4, offset: 3447 },
                    end: { line: 62, column: 82, offset: 3525 }
                  }
                }
              ],
              position: {
                start: { line: 62, column: 4, offset: 3447 },
                end: { line: 62, column: 82, offset: 3525 }
              }
            }
          ],
          position: {
            start: { line: 62, column: 2, offset: 3445 },
            end: { line: 62, column: 82, offset: 3525 }
          }
        },
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
                  value: 'Multiple pure functions can be executed in parallel without interfering with each other',
                  position: {
                    start: { line: 63, column: 4, offset: 3529 },
                    end: { line: 63, column: 91, offset: 3616 }
                  }
                }
              ],
              position: {
                start: { line: 63, column: 4, offset: 3529 },
                end: { line: 63, column: 91, offset: 3616 }
              }
            }
          ],
          position: {
            start: { line: 63, column: 2, offset: 3527 },
            end: { line: 63, column: 91, offset: 3616 }
          }
        },
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
                  value: 'Pure functions can be ',
                  position: {
                    start: { line: 64, column: 4, offset: 3620 },
                    end: { line: 64, column: 26, offset: 3642 }
                  }
                },
                {
                  type: 'link',
                  title: null,
                  url: 'https://en.wikipedia.org/wiki/Memoization',
                  children: [
                    {
                      type: 'text',
                      value: 'memoized',
                      position: {
                        start: { line: 64, column: 27, offset: 3643 },
                        end: { line: 64, column: 35, offset: 3651 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 64, column: 26, offset: 3642 },
                    end: { line: 64, column: 79, offset: 3695 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3620 },
                end: { line: 64, column: 79, offset: 3695 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3618 },
            end: { line: 64, column: 79, offset: 3695 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 2, offset: 3445 },
        end: { line: 64, column: 79, offset: 3695 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 66, column: 1, offset: 3697 },
            end: { line: 66, column: 14, offset: 3710 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 66, column: 14, offset: 3710 },
            end: { line: 66, column: 19, offset: 3715 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 66, column: 19, offset: 3715 },
            end: { line: 66, column: 161, offset: 3857 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 66, column: 161, offset: 3857 },
            end: { line: 66, column: 166, offset: 3862 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 66, column: 166, offset: 3862 },
            end: { line: 66, column: 204, offset: 3900 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3697 },
        end: { line: 66, column: 204, offset: 3900 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const add = (a, b) => a + b\n' +
        '\n' +
        'console.log(add(1, 2))\n' +
        '// 3\n' +
        '\n' +
        'console.log(add(1, 2))\n' +
        '// 3\n' +
        '\n' +
        'console.log(add(1, 2))\n' +
        '// 3',
      position: {
        start: { line: 68, column: 1, offset: 3902 },
        end: { line: 79, column: 4, offset: 4047 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 81, column: 1, offset: 4049 },
            end: { line: 81, column: 43, offset: 4091 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 4049 },
        end: { line: 81, column: 43, offset: 4091 }
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
                  value: "Modifying global variables (global variables are state outside the function's scope)",
                  position: {
                    start: { line: 83, column: 4, offset: 4096 },
                    end: { line: 83, column: 88, offset: 4180 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 4096 },
                end: { line: 83, column: 88, offset: 4180 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 4094 },
            end: { line: 83, column: 88, offset: 4180 }
          }
        },
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
                  value: "Writing to a file (file contents are state outside the function's scope)",
                  position: {
                    start: { line: 84, column: 4, offset: 4184 },
                    end: { line: 84, column: 76, offset: 4256 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 4184 },
                end: { line: 84, column: 76, offset: 4256 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 4182 },
            end: { line: 84, column: 76, offset: 4256 }
          }
        },
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
                  value: "Logging output to the console (console is state outside the function's scope)",
                  position: {
                    start: { line: 85, column: 4, offset: 4260 },
                    end: { line: 85, column: 81, offset: 4337 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4260 },
                end: { line: 85, column: 81, offset: 4337 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4258 },
            end: { line: 85, column: 81, offset: 4337 }
          }
        },
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
                  value: "Inserting, updating, or deleting data from a database (database storage is state outside the function's scope)",
                  position: {
                    start: { line: 86, column: 4, offset: 4341 },
                    end: { line: 86, column: 114, offset: 4451 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4341 },
                end: { line: 86, column: 114, offset: 4451 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4339 },
            end: { line: 86, column: 114, offset: 4451 }
          }
        },
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
                  value: "Sending a network request to an external http API (the API is an interface over state outside the function's scope)",
                  position: {
                    start: { line: 87, column: 4, offset: 4455 },
                    end: { line: 87, column: 119, offset: 4570 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4455 },
                end: { line: 87, column: 119, offset: 4570 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4453 },
            end: { line: 87, column: 119, offset: 4570 }
          }
        },
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
                  value: "Overwriting a key on an object passed as an argument to the function (the object passed to the function is considered state outside the function's scope)",
                  position: {
                    start: { line: 88, column: 4, offset: 4574 },
                    end: { line: 88, column: 157, offset: 4727 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4574 },
                end: { line: 88, column: 157, offset: 4727 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4572 },
            end: { line: 88, column: 157, offset: 4727 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 2, offset: 4094 },
        end: { line: 88, column: 157, offset: 4727 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming',
          position: {
            start: { line: 90, column: 5, offset: 4733 },
            end: { line: 90, column: 42, offset: 4770 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 4729 },
        end: { line: 90, column: 42, offset: 4770 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 92, column: 1, offset: 4772 },
            end: { line: 92, column: 270, offset: 5041 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          children: [
            {
              type: 'text',
              value: 'Promises',
              position: {
                start: { line: 92, column: 271, offset: 5042 },
                end: { line: 92, column: 279, offset: 5050 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 270, offset: 5041 },
            end: { line: 92, column: 370, offset: 5141 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 92, column: 370, offset: 5141 },
            end: { line: 92, column: 375, offset: 5146 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
          children: [
            {
              type: 'text',
              value: 'async/await',
              position: {
                start: { line: 92, column: 376, offset: 5147 },
                end: { line: 92, column: 387, offset: 5158 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 375, offset: 5146 },
            end: { line: 92, column: 481, offset: 5252 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 92, column: 481, offset: 5252 },
            end: { line: 92, column: 552, offset: 5323 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4772 },
        end: { line: 92, column: 552, offset: 5323 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order to operate in the [A]synchronous Functional Programming paradigm, we need the library ',
          position: {
            start: { line: 94, column: 1, offset: 5325 },
            end: { line: 94, column: 96, offset: 5420 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'rubico',
              position: {
                start: { line: 94, column: 97, offset: 5421 },
                end: { line: 94, column: 103, offset: 5427 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 96, offset: 5420 },
            end: { line: 94, column: 126, offset: 5450 }
          }
        },
        {
          type: 'text',
          value: '. Consider the following example:',
          position: {
            start: { line: 94, column: 126, offset: 5450 },
            end: { line: 94, column: 159, offset: 5483 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 5325 },
        end: { line: 94, column: 159, offset: 5483 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, map, forEach } = rubico\n' +
        '\n' +
        'const ids = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'pipe(ids, [\n' +
        '\n' +
        '  // make a request for each id\n' +
        '  map(async id => {\n' +
        '    const url = `https://jsonplaceholder.typicode.com/todos/${id}`\n' +
        '    const response = await fetch(url)\n' +
        '    const data = await response.json()\n' +
        '    return data\n' +
        '  }),\n' +
        '\n' +
        '  // log each response body\n' +
        '  forEach(console.log),\n' +
        '])',
      position: {
        start: { line: 96, column: 1, offset: 5485 },
        end: { line: 114, column: 4, offset: 5870 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the ',
          position: {
            start: { line: 116, column: 1, offset: 5872 },
            end: { line: 116, column: 58, offset: 5929 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 116, column: 58, offset: 5929 },
            end: { line: 116, column: 64, offset: 5935 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 116, column: 64, offset: 5935 },
            end: { line: 116, column: 75, offset: 5946 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 116, column: 75, offset: 5946 },
            end: { line: 116, column: 81, offset: 5952 }
          }
        },
        {
          type: 'text',
          value: ' enables us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 116, column: 81, offset: 5952 },
            end: { line: 116, column: 240, offset: 6111 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 116, column: 240, offset: 6111 },
            end: { line: 116, column: 257, offset: 6128 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled rubico ',
          position: {
            start: { line: 116, column: 257, offset: 6128 },
            end: { line: 116, column: 295, offset: 6166 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 116, column: 295, offset: 6166 },
            end: { line: 116, column: 300, offset: 6171 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico ',
          position: {
            start: { line: 116, column: 300, offset: 6171 },
            end: { line: 116, column: 438, offset: 6309 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 116, column: 438, offset: 6309 },
            end: { line: 116, column: 447, offset: 6318 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 116, column: 447, offset: 6318 },
            end: { line: 116, column: 465, offset: 6336 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 116, column: 465, offset: 6336 },
            end: { line: 116, column: 478, offset: 6349 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 116, column: 478, offset: 6349 },
            end: { line: 116, column: 488, offset: 6359 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 5872 },
        end: { line: 116, column: 488, offset: 6359 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 118, column: 1, offset: 6361 },
            end: { line: 118, column: 23, offset: 6383 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 118, column: 23, offset: 6383 },
            end: { line: 118, column: 36, offset: 6396 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 118, column: 36, offset: 6396 },
            end: { line: 118, column: 109, offset: 6469 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 118, column: 109, offset: 6469 },
            end: { line: 118, column: 118, offset: 6478 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 118, column: 118, offset: 6478 },
            end: { line: 118, column: 135, offset: 6495 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 118, column: 135, offset: 6495 },
            end: { line: 118, column: 140, offset: 6500 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 118, column: 140, offset: 6500 },
            end: { line: 118, column: 219, offset: 6579 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...',
          position: {
            start: { line: 118, column: 219, offset: 6579 },
            end: { line: 118, column: 237, offset: 6597 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 118, column: 237, offset: 6597 },
            end: { line: 118, column: 403, offset: 6763 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 6361 },
        end: { line: 118, column: 403, offset: 6763 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 120, column: 1, offset: 6765 },
            end: { line: 120, column: 45, offset: 6809 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 6765 },
        end: { line: 120, column: 45, offset: 6809 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { pipe, tap, map, forEach, reduce } = rubico\n' +
        '\n' +
        'const add = (a, b) => a + b\n' +
        '\n' +
        'const square = n => n ** 2\n' +
        '\n' +
        'const sleep = milliseconds =>\n' +
        '  new Promise(resolve => setTimeout(resolve, milliseconds))\n' +
        '\n' +
        'const numbers = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'pipe(numbers, [\n' +
        '\n' +
        '  // square each number\n' +
        '  map(square),\n' +
        '\n' +
        '  // for each number, pause then log the number\n' +
        '  tap(async numbers => {\n' +
        '    for (const n of numbers) {\n' +
        '      await sleep(500)\n' +
        '      console.log(n)\n' +
        '    }\n' +
        '  }),\n' +
        '\n' +
        '  // sum up the numbers\n' +
        '  reduce(add, 0),\n' +
        '\n' +
        '  // final pause then log\n' +
        '  async sum => {\n' +
        '    await sleep(500)\n' +
        "    console.log('sum:', sum)\n" +
        '  },\n' +
        '])',
      position: {
        start: { line: 122, column: 1, offset: 6811 },
        end: { line: 156, column: 4, offset: 7436 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 158, column: 1, offset: 7438 },
            end: { line: 158, column: 23, offset: 7460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 23, offset: 7460 },
            end: { line: 158, column: 28, offset: 7465 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 158, column: 28, offset: 7465 },
            end: { line: 158, column: 33, offset: 7470 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 33, offset: 7470 },
            end: { line: 158, column: 41, offset: 7478 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. You can see they are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 158, column: 41, offset: 7478 },
            end: { line: 158, column: 144, offset: 7581 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 144, offset: 7581 },
            end: { line: 158, column: 149, offset: 7586 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 158, column: 149, offset: 7586 },
            end: { line: 158, column: 153, offset: 7590 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 153, offset: 7590 },
            end: { line: 158, column: 161, offset: 7598 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 158, column: 161, offset: 7598 },
            end: { line: 158, column: 219, offset: 7656 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 219, offset: 7656 },
            end: { line: 158, column: 224, offset: 7661 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 224, offset: 7661 },
            end: { line: 158, column: 279, offset: 7716 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 158, column: 279, offset: 7716 },
            end: { line: 158, column: 287, offset: 7724 }
          }
        },
        {
          type: 'text',
          value: ' higher order function, and the ',
          position: {
            start: { line: 158, column: 287, offset: 7724 },
            end: { line: 158, column: 319, offset: 7756 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 319, offset: 7756 },
            end: { line: 158, column: 327, offset: 7764 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 327, offset: 7764 },
            end: { line: 158, column: 382, offset: 7819 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 158, column: 382, offset: 7819 },
            end: { line: 158, column: 387, offset: 7824 }
          }
        },
        {
          type: 'text',
          value: ' higher order function. The composition is similar to what we have seen in the previous example; ',
          position: {
            start: { line: 158, column: 387, offset: 7824 },
            end: { line: 158, column: 484, offset: 7921 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 158, column: 484, offset: 7921 },
            end: { line: 158, column: 490, offset: 7927 }
          }
        },
        {
          type: 'text',
          value: ' creates the overarching composition, and each operation expressed as miniature function composition follows sequentially. We see a new operation in the above example as well with ',
          position: {
            start: { line: 158, column: 490, offset: 7927 },
            end: { line: 158, column: 670, offset: 8107 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 158, column: 670, offset: 8107 },
            end: { line: 158, column: 678, offset: 8115 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 158, column: 678, offset: 8115 },
            end: { line: 158, column: 714, offset: 8151 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 158, column: 714, offset: 8151 },
            end: { line: 158, column: 727, offset: 8164 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see a new rubico operator ',
          position: {
            start: { line: 158, column: 727, offset: 8164 },
            end: { line: 158, column: 802, offset: 8239 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 802, offset: 8239 },
            end: { line: 158, column: 807, offset: 8244 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 158, column: 807, offset: 8244 },
            end: { line: 158, column: 973, offset: 8410 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 973, offset: 8410 },
            end: { line: 158, column: 978, offset: 8415 }
          }
        },
        {
          type: 'text',
          value: ", the return value of the provided first class function is discarded, so that is why we don't see a return value for the first class function provided to ",
          position: {
            start: { line: 158, column: 978, offset: 8415 },
            end: { line: 158, column: 1132, offset: 8569 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 1132, offset: 8569 },
            end: { line: 158, column: 1137, offset: 8574 }
          }
        },
        {
          type: 'text',
          value: ' in the example.',
          position: {
            start: { line: 158, column: 1137, offset: 8574 },
            end: { line: 158, column: 1153, offset: 8590 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 7438 },
        end: { line: 158, column: 1153, offset: 8590 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 160, column: 5, offset: 8596 },
            end: { line: 160, column: 15, offset: 8606 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 8592 },
        end: { line: 160, column: 15, offset: 8606 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro the the [A]synchronous Functional Programming paradigm. Thank you for taking the time to read. I hope to produce these articles at least one every few months.',
          position: {
            start: { line: 162, column: 1, offset: 8608 },
            end: { line: 162, column: 184, offset: 8791 }
          }
        }
      ],
      position: {
        start: { line: 162, column: 1, offset: 8608 },
        end: { line: 162, column: 184, offset: 8791 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are curious about rubico and would like to get started, you can visit the home page for the library, ',
          position: {
            start: { line: 164, column: 1, offset: 8793 },
            end: { line: 164, column: 109, offset: 8901 }
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
                start: { line: 164, column: 110, offset: 8902 },
                end: { line: 164, column: 121, offset: 8913 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 109, offset: 8901 },
            end: { line: 164, column: 144, offset: 8936 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 164, column: 144, offset: 8936 },
            end: { line: 164, column: 145, offset: 8937 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 8793 },
        end: { line: 164, column: 145, offset: 8937 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below are quick links for some of the rubico operators used in the examples:',
          position: {
            start: { line: 166, column: 1, offset: 8939 },
            end: { line: 166, column: 77, offset: 9015 }
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 8939 },
        end: { line: 166, column: 77, offset: 9015 }
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
                  type: 'link',
                  title: null,
                  url: 'https://rubico.land/docs/pipe',
                  children: [
                    {
                      type: 'text',
                      value: 'pipe',
                      position: {
                        start: { line: 167, column: 5, offset: 9020 },
                        end: { line: 167, column: 9, offset: 9024 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 167, column: 4, offset: 9019 },
                    end: { line: 167, column: 41, offset: 9056 }
                  }
                }
              ],
              position: {
                start: { line: 167, column: 4, offset: 9019 },
                end: { line: 167, column: 41, offset: 9056 }
              }
            }
          ],
          position: {
            start: { line: 167, column: 2, offset: 9017 },
            end: { line: 167, column: 41, offset: 9056 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  title: null,
                  url: 'https://rubico.land/docs/tap',
                  children: [
                    {
                      type: 'text',
                      value: 'tap',
                      position: {
                        start: { line: 168, column: 5, offset: 9061 },
                        end: { line: 168, column: 8, offset: 9064 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 168, column: 4, offset: 9060 },
                    end: { line: 168, column: 39, offset: 9095 }
                  }
                }
              ],
              position: {
                start: { line: 168, column: 4, offset: 9060 },
                end: { line: 168, column: 39, offset: 9095 }
              }
            }
          ],
          position: {
            start: { line: 168, column: 2, offset: 9058 },
            end: { line: 168, column: 39, offset: 9095 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  title: null,
                  url: 'https://rubico.land/docs/map',
                  children: [
                    {
                      type: 'text',
                      value: 'map',
                      position: {
                        start: { line: 169, column: 5, offset: 9100 },
                        end: { line: 169, column: 8, offset: 9103 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 169, column: 4, offset: 9099 },
                    end: { line: 169, column: 39, offset: 9134 }
                  }
                }
              ],
              position: {
                start: { line: 169, column: 4, offset: 9099 },
                end: { line: 169, column: 39, offset: 9134 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 2, offset: 9097 },
            end: { line: 169, column: 39, offset: 9134 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  title: null,
                  url: 'https://rubico.land/docs/reduce',
                  children: [
                    {
                      type: 'text',
                      value: 'reduce',
                      position: {
                        start: { line: 170, column: 5, offset: 9139 },
                        end: { line: 170, column: 11, offset: 9145 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 170, column: 4, offset: 9138 },
                    end: { line: 170, column: 45, offset: 9179 }
                  }
                }
              ],
              position: {
                start: { line: 170, column: 4, offset: 9138 },
                end: { line: 170, column: 45, offset: 9179 }
              }
            }
          ],
          position: {
            start: { line: 170, column: 2, offset: 9136 },
            end: { line: 170, column: 45, offset: 9179 }
          }
        },
        {
          type: 'listItem',
          spread: false,
          checked: null,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  title: null,
                  url: 'https://rubico.land/docs/forEach',
                  children: [
                    {
                      type: 'text',
                      value: 'forEach',
                      position: {
                        start: { line: 171, column: 5, offset: 9184 },
                        end: { line: 171, column: 12, offset: 9191 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 171, column: 4, offset: 9183 },
                    end: { line: 171, column: 47, offset: 9226 }
                  }
                }
              ],
              position: {
                start: { line: 171, column: 4, offset: 9183 },
                end: { line: 171, column: 47, offset: 9226 }
              }
            }
          ],
          position: {
            start: { line: 171, column: 2, offset: 9181 },
            end: { line: 171, column: 47, offset: 9226 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 2, offset: 9017 },
        end: { line: 171, column: 47, offset: 9226 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 172, column: 1, offset: 9227 }
  }
}