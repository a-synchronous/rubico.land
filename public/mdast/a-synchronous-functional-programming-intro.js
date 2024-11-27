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
          value: ' takes a function ',
          position: {
            start: { line: 33, column: 90, offset: 2540 },
            end: { line: 33, column: 108, offset: 2558 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 108, offset: 2558 },
            end: { line: 33, column: 111, offset: 2561 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 33, column: 111, offset: 2561 },
            end: { line: 33, column: 138, offset: 2588 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 138, offset: 2588 },
            end: { line: 33, column: 141, offset: 2591 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 33, column: 141, offset: 2591 },
            end: { line: 33, column: 153, offset: 2603 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 33, column: 153, offset: 2603 },
            end: { line: 33, column: 156, offset: 2606 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 33, column: 156, offset: 2606 },
            end: { line: 33, column: 167, offset: 2617 }
          }
        }
      ],
      position: {
        start: { line: 33, column: 1, offset: 2451 },
        end: { line: 33, column: 167, offset: 2617 }
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
        start: { line: 35, column: 1, offset: 2619 },
        end: { line: 51, column: 4, offset: 2889 }
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
            start: { line: 53, column: 5, offset: 2895 },
            end: { line: 53, column: 19, offset: 2909 }
          }
        }
      ],
      position: {
        start: { line: 53, column: 1, offset: 2891 },
        end: { line: 53, column: 19, offset: 2909 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 55, column: 1, offset: 2911 },
            end: { line: 55, column: 70, offset: 2980 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2911 },
        end: { line: 55, column: 70, offset: 2980 }
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
                        start: { line: 57, column: 6, offset: 2987 },
                        end: { line: 57, column: 21, offset: 3002 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 57, column: 4, offset: 2985 },
                    end: { line: 57, column: 23, offset: 3004 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 57, column: 23, offset: 3004 },
                    end: { line: 57, column: 192, offset: 3173 }
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
                        start: { line: 57, column: 193, offset: 3174 },
                        end: { line: 57, column: 205, offset: 3186 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 57, column: 192, offset: 3173 },
                    end: { line: 57, column: 254, offset: 3235 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 57, column: 254, offset: 3235 },
                    end: { line: 57, column: 256, offset: 3237 }
                  }
                }
              ],
              position: {
                start: { line: 57, column: 4, offset: 2985 },
                end: { line: 57, column: 256, offset: 3237 }
              }
            }
          ],
          position: {
            start: { line: 57, column: 2, offset: 2983 },
            end: { line: 57, column: 256, offset: 3237 }
          }
        },
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
                        start: { line: 58, column: 6, offset: 3243 },
                        end: { line: 58, column: 67, offset: 3304 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 58, column: 4, offset: 3241 },
                    end: { line: 58, column: 69, offset: 3306 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 58, column: 69, offset: 3306 },
                    end: { line: 58, column: 144, offset: 3381 }
                  }
                }
              ],
              position: {
                start: { line: 58, column: 4, offset: 3241 },
                end: { line: 58, column: 144, offset: 3381 }
              }
            }
          ],
          position: {
            start: { line: 58, column: 2, offset: 3239 },
            end: { line: 58, column: 144, offset: 3381 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 2, offset: 2983 },
        end: { line: 58, column: 144, offset: 3381 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 60, column: 1, offset: 3383 },
            end: { line: 60, column: 46, offset: 3428 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3383 },
        end: { line: 60, column: 46, offset: 3428 }
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
                    start: { line: 62, column: 4, offset: 3433 },
                    end: { line: 62, column: 82, offset: 3511 }
                  }
                }
              ],
              position: {
                start: { line: 62, column: 4, offset: 3433 },
                end: { line: 62, column: 82, offset: 3511 }
              }
            }
          ],
          position: {
            start: { line: 62, column: 2, offset: 3431 },
            end: { line: 62, column: 82, offset: 3511 }
          }
        },
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
                    start: { line: 63, column: 4, offset: 3515 },
                    end: { line: 63, column: 91, offset: 3602 }
                  }
                }
              ],
              position: {
                start: { line: 63, column: 4, offset: 3515 },
                end: { line: 63, column: 91, offset: 3602 }
              }
            }
          ],
          position: {
            start: { line: 63, column: 2, offset: 3513 },
            end: { line: 63, column: 91, offset: 3602 }
          }
        },
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
                    start: { line: 64, column: 4, offset: 3606 },
                    end: { line: 64, column: 26, offset: 3628 }
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
                        start: { line: 64, column: 27, offset: 3629 },
                        end: { line: 64, column: 35, offset: 3637 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 64, column: 26, offset: 3628 },
                    end: { line: 64, column: 79, offset: 3681 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3606 },
                end: { line: 64, column: 79, offset: 3681 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3604 },
            end: { line: 64, column: 79, offset: 3681 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 2, offset: 3431 },
        end: { line: 64, column: 79, offset: 3681 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 66, column: 1, offset: 3683 },
            end: { line: 66, column: 14, offset: 3696 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 66, column: 14, offset: 3696 },
            end: { line: 66, column: 19, offset: 3701 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 66, column: 19, offset: 3701 },
            end: { line: 66, column: 161, offset: 3843 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 66, column: 161, offset: 3843 },
            end: { line: 66, column: 166, offset: 3848 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 66, column: 166, offset: 3848 },
            end: { line: 66, column: 204, offset: 3886 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3683 },
        end: { line: 66, column: 204, offset: 3886 }
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
        start: { line: 68, column: 1, offset: 3888 },
        end: { line: 79, column: 4, offset: 4033 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 81, column: 1, offset: 4035 },
            end: { line: 81, column: 43, offset: 4077 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 4035 },
        end: { line: 81, column: 43, offset: 4077 }
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
                    start: { line: 83, column: 4, offset: 4082 },
                    end: { line: 83, column: 88, offset: 4166 }
                  }
                }
              ],
              position: {
                start: { line: 83, column: 4, offset: 4082 },
                end: { line: 83, column: 88, offset: 4166 }
              }
            }
          ],
          position: {
            start: { line: 83, column: 2, offset: 4080 },
            end: { line: 83, column: 88, offset: 4166 }
          }
        },
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
                    start: { line: 84, column: 4, offset: 4170 },
                    end: { line: 84, column: 76, offset: 4242 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 4170 },
                end: { line: 84, column: 76, offset: 4242 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 4168 },
            end: { line: 84, column: 76, offset: 4242 }
          }
        },
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
                    start: { line: 85, column: 4, offset: 4246 },
                    end: { line: 85, column: 81, offset: 4323 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4246 },
                end: { line: 85, column: 81, offset: 4323 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4244 },
            end: { line: 85, column: 81, offset: 4323 }
          }
        },
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
                    start: { line: 86, column: 4, offset: 4327 },
                    end: { line: 86, column: 114, offset: 4437 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4327 },
                end: { line: 86, column: 114, offset: 4437 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4325 },
            end: { line: 86, column: 114, offset: 4437 }
          }
        },
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
                    start: { line: 87, column: 4, offset: 4441 },
                    end: { line: 87, column: 119, offset: 4556 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4441 },
                end: { line: 87, column: 119, offset: 4556 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4439 },
            end: { line: 87, column: 119, offset: 4556 }
          }
        },
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
                    start: { line: 88, column: 4, offset: 4560 },
                    end: { line: 88, column: 157, offset: 4713 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4560 },
                end: { line: 88, column: 157, offset: 4713 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4558 },
            end: { line: 88, column: 157, offset: 4713 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 2, offset: 4080 },
        end: { line: 88, column: 157, offset: 4713 }
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
            start: { line: 90, column: 5, offset: 4719 },
            end: { line: 90, column: 42, offset: 4756 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 1, offset: 4715 },
        end: { line: 90, column: 42, offset: 4756 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 92, column: 1, offset: 4758 },
            end: { line: 92, column: 270, offset: 5027 }
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
                start: { line: 92, column: 271, offset: 5028 },
                end: { line: 92, column: 279, offset: 5036 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 270, offset: 5027 },
            end: { line: 92, column: 370, offset: 5127 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 92, column: 370, offset: 5127 },
            end: { line: 92, column: 375, offset: 5132 }
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
                start: { line: 92, column: 376, offset: 5133 },
                end: { line: 92, column: 387, offset: 5144 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 375, offset: 5132 },
            end: { line: 92, column: 481, offset: 5238 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 92, column: 481, offset: 5238 },
            end: { line: 92, column: 552, offset: 5309 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4758 },
        end: { line: 92, column: 552, offset: 5309 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order to operate in the [A]synchronous Functional Programming paradigm, we need the library ',
          position: {
            start: { line: 94, column: 1, offset: 5311 },
            end: { line: 94, column: 96, offset: 5406 }
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
                start: { line: 94, column: 97, offset: 5407 },
                end: { line: 94, column: 103, offset: 5413 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 96, offset: 5406 },
            end: { line: 94, column: 126, offset: 5436 }
          }
        },
        {
          type: 'text',
          value: '. Consider the following example:',
          position: {
            start: { line: 94, column: 126, offset: 5436 },
            end: { line: 94, column: 159, offset: 5469 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 5311 },
        end: { line: 94, column: 159, offset: 5469 }
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
        start: { line: 96, column: 1, offset: 5471 },
        end: { line: 114, column: 4, offset: 5856 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the ',
          position: {
            start: { line: 116, column: 1, offset: 5858 },
            end: { line: 116, column: 58, offset: 5915 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 116, column: 58, offset: 5915 },
            end: { line: 116, column: 64, offset: 5921 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 116, column: 64, offset: 5921 },
            end: { line: 116, column: 75, offset: 5932 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 116, column: 75, offset: 5932 },
            end: { line: 116, column: 81, offset: 5938 }
          }
        },
        {
          type: 'text',
          value: ' enables us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 116, column: 81, offset: 5938 },
            end: { line: 116, column: 240, offset: 6097 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 116, column: 240, offset: 6097 },
            end: { line: 116, column: 257, offset: 6114 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled rubico ',
          position: {
            start: { line: 116, column: 257, offset: 6114 },
            end: { line: 116, column: 295, offset: 6152 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 116, column: 295, offset: 6152 },
            end: { line: 116, column: 300, offset: 6157 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico ',
          position: {
            start: { line: 116, column: 300, offset: 6157 },
            end: { line: 116, column: 438, offset: 6295 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 116, column: 438, offset: 6295 },
            end: { line: 116, column: 447, offset: 6304 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 116, column: 447, offset: 6304 },
            end: { line: 116, column: 465, offset: 6322 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 116, column: 465, offset: 6322 },
            end: { line: 116, column: 478, offset: 6335 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 116, column: 478, offset: 6335 },
            end: { line: 116, column: 488, offset: 6345 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 5858 },
        end: { line: 116, column: 488, offset: 6345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 118, column: 1, offset: 6347 },
            end: { line: 118, column: 23, offset: 6369 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 118, column: 23, offset: 6369 },
            end: { line: 118, column: 36, offset: 6382 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 118, column: 36, offset: 6382 },
            end: { line: 118, column: 109, offset: 6455 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 118, column: 109, offset: 6455 },
            end: { line: 118, column: 118, offset: 6464 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 118, column: 118, offset: 6464 },
            end: { line: 118, column: 135, offset: 6481 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 118, column: 135, offset: 6481 },
            end: { line: 118, column: 140, offset: 6486 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 118, column: 140, offset: 6486 },
            end: { line: 118, column: 219, offset: 6565 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...',
          position: {
            start: { line: 118, column: 219, offset: 6565 },
            end: { line: 118, column: 237, offset: 6583 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 118, column: 237, offset: 6583 },
            end: { line: 118, column: 403, offset: 6749 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 6347 },
        end: { line: 118, column: 403, offset: 6749 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 120, column: 1, offset: 6751 },
            end: { line: 120, column: 45, offset: 6795 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 6751 },
        end: { line: 120, column: 45, offset: 6795 }
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
        start: { line: 122, column: 1, offset: 6797 },
        end: { line: 156, column: 4, offset: 7422 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 158, column: 1, offset: 7424 },
            end: { line: 158, column: 23, offset: 7446 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 23, offset: 7446 },
            end: { line: 158, column: 28, offset: 7451 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 158, column: 28, offset: 7451 },
            end: { line: 158, column: 33, offset: 7456 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 33, offset: 7456 },
            end: { line: 158, column: 41, offset: 7464 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. You can see they are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 158, column: 41, offset: 7464 },
            end: { line: 158, column: 144, offset: 7567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 144, offset: 7567 },
            end: { line: 158, column: 149, offset: 7572 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 158, column: 149, offset: 7572 },
            end: { line: 158, column: 153, offset: 7576 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 153, offset: 7576 },
            end: { line: 158, column: 161, offset: 7584 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 158, column: 161, offset: 7584 },
            end: { line: 158, column: 219, offset: 7642 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 219, offset: 7642 },
            end: { line: 158, column: 224, offset: 7647 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 224, offset: 7647 },
            end: { line: 158, column: 279, offset: 7702 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 158, column: 279, offset: 7702 },
            end: { line: 158, column: 287, offset: 7710 }
          }
        },
        {
          type: 'text',
          value: ' higher order function, and the ',
          position: {
            start: { line: 158, column: 287, offset: 7710 },
            end: { line: 158, column: 319, offset: 7742 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 319, offset: 7742 },
            end: { line: 158, column: 327, offset: 7750 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 327, offset: 7750 },
            end: { line: 158, column: 382, offset: 7805 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 158, column: 382, offset: 7805 },
            end: { line: 158, column: 387, offset: 7810 }
          }
        },
        {
          type: 'text',
          value: ' higher order function. The composition is similar to what we have seen in the previous example; ',
          position: {
            start: { line: 158, column: 387, offset: 7810 },
            end: { line: 158, column: 484, offset: 7907 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 158, column: 484, offset: 7907 },
            end: { line: 158, column: 490, offset: 7913 }
          }
        },
        {
          type: 'text',
          value: ' creates the overarching composition, and each operation expressed as miniature function composition follows sequentially. We see a new operation in the above example as well with ',
          position: {
            start: { line: 158, column: 490, offset: 7913 },
            end: { line: 158, column: 670, offset: 8093 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 158, column: 670, offset: 8093 },
            end: { line: 158, column: 678, offset: 8101 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 158, column: 678, offset: 8101 },
            end: { line: 158, column: 714, offset: 8137 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 158, column: 714, offset: 8137 },
            end: { line: 158, column: 727, offset: 8150 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see a new rubico operator ',
          position: {
            start: { line: 158, column: 727, offset: 8150 },
            end: { line: 158, column: 802, offset: 8225 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 802, offset: 8225 },
            end: { line: 158, column: 807, offset: 8230 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 158, column: 807, offset: 8230 },
            end: { line: 158, column: 973, offset: 8396 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 973, offset: 8396 },
            end: { line: 158, column: 978, offset: 8401 }
          }
        },
        {
          type: 'text',
          value: ", the return value of the provided first class function is discarded, so that is why we don't see a return value for the first class function provided to ",
          position: {
            start: { line: 158, column: 978, offset: 8401 },
            end: { line: 158, column: 1132, offset: 8555 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 158, column: 1132, offset: 8555 },
            end: { line: 158, column: 1137, offset: 8560 }
          }
        },
        {
          type: 'text',
          value: ' in the example.',
          position: {
            start: { line: 158, column: 1137, offset: 8560 },
            end: { line: 158, column: 1153, offset: 8576 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 7424 },
        end: { line: 158, column: 1153, offset: 8576 }
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
            start: { line: 160, column: 5, offset: 8582 },
            end: { line: 160, column: 15, offset: 8592 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 8578 },
        end: { line: 160, column: 15, offset: 8592 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro the the [A]synchronous Functional Programming paradigm. Thank you for taking the time to read. I hope to produce these articles at least one every few months.',
          position: {
            start: { line: 162, column: 1, offset: 8594 },
            end: { line: 162, column: 184, offset: 8777 }
          }
        }
      ],
      position: {
        start: { line: 162, column: 1, offset: 8594 },
        end: { line: 162, column: 184, offset: 8777 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are curious about rubico and would like to get started, you can visit the home page for the library, ',
          position: {
            start: { line: 164, column: 1, offset: 8779 },
            end: { line: 164, column: 109, offset: 8887 }
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
                start: { line: 164, column: 110, offset: 8888 },
                end: { line: 164, column: 121, offset: 8899 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 109, offset: 8887 },
            end: { line: 164, column: 144, offset: 8922 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 164, column: 144, offset: 8922 },
            end: { line: 164, column: 145, offset: 8923 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 8779 },
        end: { line: 164, column: 145, offset: 8923 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below are quick links for some of the rubico operators used in the examples:',
          position: {
            start: { line: 166, column: 1, offset: 8925 },
            end: { line: 166, column: 77, offset: 9001 }
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 8925 },
        end: { line: 166, column: 77, offset: 9001 }
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
                        start: { line: 167, column: 5, offset: 9006 },
                        end: { line: 167, column: 9, offset: 9010 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 167, column: 4, offset: 9005 },
                    end: { line: 167, column: 41, offset: 9042 }
                  }
                }
              ],
              position: {
                start: { line: 167, column: 4, offset: 9005 },
                end: { line: 167, column: 41, offset: 9042 }
              }
            }
          ],
          position: {
            start: { line: 167, column: 2, offset: 9003 },
            end: { line: 167, column: 41, offset: 9042 }
          }
        },
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
                        start: { line: 168, column: 5, offset: 9047 },
                        end: { line: 168, column: 8, offset: 9050 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 168, column: 4, offset: 9046 },
                    end: { line: 168, column: 39, offset: 9081 }
                  }
                }
              ],
              position: {
                start: { line: 168, column: 4, offset: 9046 },
                end: { line: 168, column: 39, offset: 9081 }
              }
            }
          ],
          position: {
            start: { line: 168, column: 2, offset: 9044 },
            end: { line: 168, column: 39, offset: 9081 }
          }
        },
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
                        start: { line: 169, column: 5, offset: 9086 },
                        end: { line: 169, column: 8, offset: 9089 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 169, column: 4, offset: 9085 },
                    end: { line: 169, column: 39, offset: 9120 }
                  }
                }
              ],
              position: {
                start: { line: 169, column: 4, offset: 9085 },
                end: { line: 169, column: 39, offset: 9120 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 2, offset: 9083 },
            end: { line: 169, column: 39, offset: 9120 }
          }
        },
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
                        start: { line: 170, column: 5, offset: 9125 },
                        end: { line: 170, column: 11, offset: 9131 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 170, column: 4, offset: 9124 },
                    end: { line: 170, column: 45, offset: 9165 }
                  }
                }
              ],
              position: {
                start: { line: 170, column: 4, offset: 9124 },
                end: { line: 170, column: 45, offset: 9165 }
              }
            }
          ],
          position: {
            start: { line: 170, column: 2, offset: 9122 },
            end: { line: 170, column: 45, offset: 9165 }
          }
        },
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
                        start: { line: 171, column: 5, offset: 9170 },
                        end: { line: 171, column: 12, offset: 9177 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 171, column: 4, offset: 9169 },
                    end: { line: 171, column: 47, offset: 9212 }
                  }
                }
              ],
              position: {
                start: { line: 171, column: 4, offset: 9169 },
                end: { line: 171, column: 47, offset: 9212 }
              }
            }
          ],
          position: {
            start: { line: 171, column: 2, offset: 9167 },
            end: { line: 171, column: 47, offset: 9212 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 2, offset: 9003 },
        end: { line: 171, column: 47, offset: 9212 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 172, column: 1, offset: 9213 }
  }
}