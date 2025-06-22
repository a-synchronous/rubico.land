export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2024-11-26\n' +
        'updated: 2025-06-21\n' +
        'path: /blog/a-synchronous-functional-programming-intro\n' +
        'description: An introduction to the [A]synchronous Functional Programming paradigm\n' +
        'image: https://rubico.land/assets/rubico-logo-large.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 350 },
            end: { line: 11, column: 67, offset: 416 }
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
                start: { line: 11, column: 68, offset: 417 },
                end: { line: 11, column: 90, offset: 439 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 416 },
            end: { line: 11, column: 145, offset: 494 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 494 },
            end: { line: 11, column: 156, offset: 505 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 507 },
                end: { line: 11, column: 195, offset: 544 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 505 },
            end: { line: 11, column: 197, offset: 546 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 546 },
            end: { line: 11, column: 347, offset: 696 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 350 },
        end: { line: 11, column: 347, offset: 696 }
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
                    start: { line: 13, column: 4, offset: 701 },
                    end: { line: 13, column: 38, offset: 735 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 701 },
                end: { line: 13, column: 38, offset: 735 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 699 },
            end: { line: 13, column: 38, offset: 735 }
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
                    start: { line: 14, column: 4, offset: 739 },
                    end: { line: 14, column: 48, offset: 783 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 739 },
                end: { line: 14, column: 48, offset: 783 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 737 },
            end: { line: 14, column: 48, offset: 783 }
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
                    start: { line: 15, column: 4, offset: 787 },
                    end: { line: 15, column: 86, offset: 869 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 787 },
                end: { line: 15, column: 86, offset: 869 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 785 },
            end: { line: 15, column: 86, offset: 869 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 699 },
        end: { line: 15, column: 86, offset: 869 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 871 },
            end: { line: 17, column: 290, offset: 1160 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 871 },
        end: { line: 17, column: 290, offset: 1160 }
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
            start: { line: 19, column: 5, offset: 1166 },
            end: { line: 19, column: 43, offset: 1204 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1162 },
        end: { line: 19, column: 43, offset: 1204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 21, column: 1, offset: 1206 },
            end: { line: 21, column: 657, offset: 1862 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1206 },
        end: { line: 21, column: 657, offset: 1862 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 23, column: 1, offset: 1864 },
            end: { line: 23, column: 64, offset: 1927 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1864 },
        end: { line: 23, column: 64, offset: 1927 }
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
                        start: { line: 25, column: 6, offset: 1934 },
                        end: { line: 25, column: 22, offset: 1950 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 1932 },
                    end: { line: 25, column: 24, offset: 1952 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 25, column: 24, offset: 1952 },
                    end: { line: 25, column: 78, offset: 2006 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 1932 },
                end: { line: 25, column: 78, offset: 2006 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 1930 },
            end: { line: 25, column: 78, offset: 2006 }
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
                        start: { line: 26, column: 6, offset: 2012 },
                        end: { line: 26, column: 23, offset: 2029 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 26, column: 4, offset: 2010 },
                    end: { line: 26, column: 25, offset: 2031 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 26, column: 25, offset: 2031 },
                    end: { line: 26, column: 100, offset: 2106 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 2010 },
                end: { line: 26, column: 100, offset: 2106 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 2, offset: 2008 },
            end: { line: 26, column: 100, offset: 2106 }
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
                        start: { line: 27, column: 6, offset: 2112 },
                        end: { line: 27, column: 19, offset: 2125 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 27, column: 4, offset: 2110 },
                    end: { line: 27, column: 21, offset: 2127 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 27, column: 21, offset: 2127 },
                    end: { line: 27, column: 107, offset: 2213 }
                  }
                }
              ],
              position: {
                start: { line: 27, column: 4, offset: 2110 },
                end: { line: 27, column: 107, offset: 2213 }
              }
            }
          ],
          position: {
            start: { line: 27, column: 2, offset: 2108 },
            end: { line: 27, column: 107, offset: 2213 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 2, offset: 1930 },
        end: { line: 27, column: 107, offset: 2213 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 29, column: 1, offset: 2215 },
            end: { line: 29, column: 63, offset: 2277 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 2215 },
        end: { line: 29, column: 63, offset: 2277 }
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
                        start: { line: 31, column: 6, offset: 2284 },
                        end: { line: 31, column: 33, offset: 2311 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2282 },
                    end: { line: 31, column: 35, offset: 2313 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 35, offset: 2313 },
                    end: { line: 31, column: 37, offset: 2315 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 37, offset: 2315 },
                    end: { line: 31, column: 57, offset: 2335 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 57, offset: 2335 },
                    end: { line: 31, column: 83, offset: 2361 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2282 },
                end: { line: 31, column: 83, offset: 2361 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2280 },
            end: { line: 31, column: 83, offset: 2361 }
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
                        start: { line: 32, column: 6, offset: 2367 },
                        end: { line: 32, column: 34, offset: 2395 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 2365 },
                    end: { line: 32, column: 36, offset: 2397 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 32, column: 36, offset: 2397 },
                    end: { line: 32, column: 38, offset: 2399 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 32, column: 38, offset: 2399 },
                    end: { line: 32, column: 58, offset: 2419 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 32, column: 58, offset: 2419 },
                    end: { line: 32, column: 84, offset: 2445 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 2365 },
                end: { line: 32, column: 84, offset: 2445 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 2363 },
            end: { line: 32, column: 84, offset: 2445 }
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
                        start: { line: 33, column: 6, offset: 2451 },
                        end: { line: 33, column: 30, offset: 2475 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 2449 },
                    end: { line: 33, column: 32, offset: 2477 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 33, column: 32, offset: 2477 },
                    end: { line: 33, column: 34, offset: 2479 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 33, column: 34, offset: 2479 },
                    end: { line: 33, column: 54, offset: 2499 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 33, column: 54, offset: 2499 },
                    end: { line: 33, column: 80, offset: 2525 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 2449 },
                end: { line: 33, column: 80, offset: 2525 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 2447 },
            end: { line: 33, column: 80, offset: 2525 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 2, offset: 2280 },
        end: { line: 33, column: 80, offset: 2525 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 35, column: 1, offset: 2527 },
            end: { line: 35, column: 81, offset: 2607 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 35, column: 81, offset: 2607 },
            end: { line: 35, column: 90, offset: 2616 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 35, column: 90, offset: 2616 },
            end: { line: 35, column: 122, offset: 2648 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 122, offset: 2648 },
            end: { line: 35, column: 125, offset: 2651 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 35, column: 125, offset: 2651 },
            end: { line: 35, column: 152, offset: 2678 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 152, offset: 2678 },
            end: { line: 35, column: 155, offset: 2681 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 35, column: 155, offset: 2681 },
            end: { line: 35, column: 167, offset: 2693 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 167, offset: 2693 },
            end: { line: 35, column: 170, offset: 2696 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 35, column: 170, offset: 2696 },
            end: { line: 35, column: 181, offset: 2707 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 2527 },
        end: { line: 35, column: 181, offset: 2707 }
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
        start: { line: 37, column: 1, offset: 2709 },
        end: { line: 53, column: 4, offset: 2979 }
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
            start: { line: 55, column: 5, offset: 2985 },
            end: { line: 55, column: 19, offset: 2999 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2981 },
        end: { line: 55, column: 19, offset: 2999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 57, column: 1, offset: 3001 },
            end: { line: 57, column: 70, offset: 3070 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 3001 },
        end: { line: 57, column: 70, offset: 3070 }
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
                        start: { line: 59, column: 6, offset: 3077 },
                        end: { line: 59, column: 21, offset: 3092 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 4, offset: 3075 },
                    end: { line: 59, column: 23, offset: 3094 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 59, column: 23, offset: 3094 },
                    end: { line: 59, column: 192, offset: 3263 }
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
                        start: { line: 59, column: 193, offset: 3264 },
                        end: { line: 59, column: 205, offset: 3276 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 192, offset: 3263 },
                    end: { line: 59, column: 254, offset: 3325 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 59, column: 254, offset: 3325 },
                    end: { line: 59, column: 256, offset: 3327 }
                  }
                }
              ],
              position: {
                start: { line: 59, column: 4, offset: 3075 },
                end: { line: 59, column: 256, offset: 3327 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 2, offset: 3073 },
            end: { line: 59, column: 256, offset: 3327 }
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
                        start: { line: 60, column: 6, offset: 3333 },
                        end: { line: 60, column: 67, offset: 3394 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 60, column: 4, offset: 3331 },
                    end: { line: 60, column: 69, offset: 3396 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 60, column: 69, offset: 3396 },
                    end: { line: 60, column: 144, offset: 3471 }
                  }
                }
              ],
              position: {
                start: { line: 60, column: 4, offset: 3331 },
                end: { line: 60, column: 144, offset: 3471 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 2, offset: 3329 },
            end: { line: 60, column: 144, offset: 3471 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 2, offset: 3073 },
        end: { line: 60, column: 144, offset: 3471 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 62, column: 1, offset: 3473 },
            end: { line: 62, column: 46, offset: 3518 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3473 },
        end: { line: 62, column: 46, offset: 3518 }
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
                    start: { line: 64, column: 4, offset: 3523 },
                    end: { line: 64, column: 82, offset: 3601 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3523 },
                end: { line: 64, column: 82, offset: 3601 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3521 },
            end: { line: 64, column: 82, offset: 3601 }
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
                    start: { line: 65, column: 4, offset: 3605 },
                    end: { line: 65, column: 91, offset: 3692 }
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 3605 },
                end: { line: 65, column: 91, offset: 3692 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 2, offset: 3603 },
            end: { line: 65, column: 91, offset: 3692 }
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
                    start: { line: 66, column: 4, offset: 3696 },
                    end: { line: 66, column: 26, offset: 3718 }
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
                        start: { line: 66, column: 27, offset: 3719 },
                        end: { line: 66, column: 35, offset: 3727 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 66, column: 26, offset: 3718 },
                    end: { line: 66, column: 79, offset: 3771 }
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 3696 },
                end: { line: 66, column: 79, offset: 3771 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 2, offset: 3694 },
            end: { line: 66, column: 79, offset: 3771 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 2, offset: 3521 },
        end: { line: 66, column: 79, offset: 3771 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 68, column: 1, offset: 3773 },
            end: { line: 68, column: 14, offset: 3786 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 14, offset: 3786 },
            end: { line: 68, column: 19, offset: 3791 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 68, column: 19, offset: 3791 },
            end: { line: 68, column: 161, offset: 3933 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 161, offset: 3933 },
            end: { line: 68, column: 166, offset: 3938 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 68, column: 166, offset: 3938 },
            end: { line: 68, column: 204, offset: 3976 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3773 },
        end: { line: 68, column: 204, offset: 3976 }
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
        start: { line: 70, column: 1, offset: 3978 },
        end: { line: 81, column: 4, offset: 4123 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 83, column: 1, offset: 4125 },
            end: { line: 83, column: 43, offset: 4167 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 4125 },
        end: { line: 83, column: 43, offset: 4167 }
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
                    start: { line: 85, column: 4, offset: 4172 },
                    end: { line: 85, column: 88, offset: 4256 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4172 },
                end: { line: 85, column: 88, offset: 4256 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4170 },
            end: { line: 85, column: 88, offset: 4256 }
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
                    start: { line: 86, column: 4, offset: 4260 },
                    end: { line: 86, column: 76, offset: 4332 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4260 },
                end: { line: 86, column: 76, offset: 4332 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4258 },
            end: { line: 86, column: 76, offset: 4332 }
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
                    start: { line: 87, column: 4, offset: 4336 },
                    end: { line: 87, column: 81, offset: 4413 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4336 },
                end: { line: 87, column: 81, offset: 4413 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4334 },
            end: { line: 87, column: 81, offset: 4413 }
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
                    start: { line: 88, column: 4, offset: 4417 },
                    end: { line: 88, column: 114, offset: 4527 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4417 },
                end: { line: 88, column: 114, offset: 4527 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4415 },
            end: { line: 88, column: 114, offset: 4527 }
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
                    start: { line: 89, column: 4, offset: 4531 },
                    end: { line: 89, column: 119, offset: 4646 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 4531 },
                end: { line: 89, column: 119, offset: 4646 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 4529 },
            end: { line: 89, column: 119, offset: 4646 }
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
                    start: { line: 90, column: 4, offset: 4650 },
                    end: { line: 90, column: 157, offset: 4803 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 4650 },
                end: { line: 90, column: 157, offset: 4803 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 4648 },
            end: { line: 90, column: 157, offset: 4803 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 4170 },
        end: { line: 90, column: 157, offset: 4803 }
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
            start: { line: 92, column: 5, offset: 4809 },
            end: { line: 92, column: 42, offset: 4846 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4805 },
        end: { line: 92, column: 42, offset: 4846 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 94, column: 1, offset: 4848 },
            end: { line: 94, column: 270, offset: 5117 }
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
                start: { line: 94, column: 271, offset: 5118 },
                end: { line: 94, column: 279, offset: 5126 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 270, offset: 5117 },
            end: { line: 94, column: 370, offset: 5217 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 94, column: 370, offset: 5217 },
            end: { line: 94, column: 375, offset: 5222 }
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
                start: { line: 94, column: 376, offset: 5223 },
                end: { line: 94, column: 387, offset: 5234 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 375, offset: 5222 },
            end: { line: 94, column: 481, offset: 5328 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 94, column: 481, offset: 5328 },
            end: { line: 94, column: 552, offset: 5399 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 4848 },
        end: { line: 94, column: 552, offset: 5399 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 96, column: 1, offset: 5401 },
            end: { line: 96, column: 16, offset: 5416 }
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
                start: { line: 96, column: 17, offset: 5417 },
                end: { line: 96, column: 23, offset: 5423 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 16, offset: 5416 },
            end: { line: 96, column: 46, offset: 5446 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 96, column: 46, offset: 5446 },
            end: { line: 96, column: 120, offset: 5520 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 5401 },
        end: { line: 96, column: 120, offset: 5520 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const { compose, map, forEach } = rubico\n' +
        '\n' +
        'const ids = [1, 2, 3, 4, 5]\n' +
        '\n' +
        'compose(\n' +
        '  // log each response body\n' +
        '  forEach(console.log),\n' +
        '\n' +
        '  // make a request for each id\n' +
        '  map(async id => {\n' +
        '    const url = `https://jsonplaceholder.typicode.com/todos/${id}`\n' +
        '    const response = await fetch(url)\n' +
        '    const data = await response.json()\n' +
        '    return data\n' +
        '  }),\n' +
        ')(ids)',
      position: {
        start: { line: 98, column: 1, offset: 5522 },
        end: { line: 115, column: 4, offset: 5910 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the rubico ',
          position: {
            start: { line: 117, column: 1, offset: 5912 },
            end: { line: 117, column: 65, offset: 5976 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/compose',
          children: [
            {
              type: 'text',
              value: 'compose',
              position: {
                start: { line: 117, column: 66, offset: 5977 },
                end: { line: 117, column: 73, offset: 5984 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 65, offset: 5976 },
            end: { line: 117, column: 89, offset: 6000 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 117, column: 89, offset: 6000 },
            end: { line: 117, column: 100, offset: 6011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 117, column: 100, offset: 6011 },
            end: { line: 117, column: 109, offset: 6020 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 117, column: 109, offset: 6020 },
            end: { line: 117, column: 267, offset: 6178 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 117, column: 267, offset: 6178 },
            end: { line: 117, column: 284, offset: 6195 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled rubico ',
          position: {
            start: { line: 117, column: 284, offset: 6195 },
            end: { line: 117, column: 322, offset: 6233 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/map',
          children: [
            {
              type: 'text',
              value: 'map',
              position: {
                start: { line: 117, column: 323, offset: 6234 },
                end: { line: 117, column: 326, offset: 6237 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 322, offset: 6233 },
            end: { line: 117, column: 338, offset: 6249 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico ',
          position: {
            start: { line: 117, column: 338, offset: 6249 },
            end: { line: 117, column: 476, offset: 6387 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/forEach',
          children: [
            {
              type: 'text',
              value: 'forEach',
              position: {
                start: { line: 117, column: 477, offset: 6388 },
                end: { line: 117, column: 484, offset: 6395 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 476, offset: 6387 },
            end: { line: 117, column: 500, offset: 6411 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 117, column: 500, offset: 6411 },
            end: { line: 117, column: 518, offset: 6429 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 117, column: 518, offset: 6429 },
            end: { line: 117, column: 531, offset: 6442 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 117, column: 531, offset: 6442 },
            end: { line: 117, column: 541, offset: 6452 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5912 },
        end: { line: 117, column: 541, offset: 6452 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 119, column: 1, offset: 6454 },
            end: { line: 119, column: 23, offset: 6476 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 119, column: 23, offset: 6476 },
            end: { line: 119, column: 36, offset: 6489 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 119, column: 36, offset: 6489 },
            end: { line: 119, column: 109, offset: 6562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 119, column: 109, offset: 6562 },
            end: { line: 119, column: 118, offset: 6571 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 119, column: 118, offset: 6571 },
            end: { line: 119, column: 135, offset: 6588 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 119, column: 135, offset: 6588 },
            end: { line: 119, column: 140, offset: 6593 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 119, column: 140, offset: 6593 },
            end: { line: 119, column: 219, offset: 6672 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 119, column: 219, offset: 6672 },
            end: { line: 119, column: 238, offset: 6691 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 119, column: 238, offset: 6691 },
            end: { line: 119, column: 315, offset: 6768 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 119, column: 315, offset: 6768 },
            end: { line: 119, column: 324, offset: 6777 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 119, column: 324, offset: 6777 },
            end: { line: 119, column: 420, offset: 6873 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6454 },
        end: { line: 119, column: 420, offset: 6873 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 121, column: 1, offset: 6875 },
            end: { line: 121, column: 45, offset: 6919 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6875 },
        end: { line: 121, column: 45, offset: 6919 }
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
        start: { line: 123, column: 1, offset: 6921 },
        end: { line: 157, column: 4, offset: 7546 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 159, column: 1, offset: 7548 },
            end: { line: 159, column: 23, offset: 7570 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 23, offset: 7570 },
            end: { line: 159, column: 28, offset: 7575 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 28, offset: 7575 },
            end: { line: 159, column: 33, offset: 7580 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 33, offset: 7580 },
            end: { line: 159, column: 41, offset: 7588 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 159, column: 41, offset: 7588 },
            end: { line: 159, column: 132, offset: 7679 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 132, offset: 7679 },
            end: { line: 159, column: 137, offset: 7684 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 159, column: 137, offset: 7684 },
            end: { line: 159, column: 141, offset: 7688 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 141, offset: 7688 },
            end: { line: 159, column: 149, offset: 7696 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 159, column: 149, offset: 7696 },
            end: { line: 159, column: 207, offset: 7754 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 207, offset: 7754 },
            end: { line: 159, column: 212, offset: 7759 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the rubico ',
          position: {
            start: { line: 159, column: 212, offset: 7759 },
            end: { line: 159, column: 274, offset: 7821 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/reduce',
          children: [
            {
              type: 'text',
              value: 'reduce',
              position: {
                start: { line: 159, column: 275, offset: 7822 },
                end: { line: 159, column: 281, offset: 7828 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 274, offset: 7821 },
            end: { line: 159, column: 296, offset: 7843 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 159, column: 296, offset: 7843 },
            end: { line: 159, column: 315, offset: 7862 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 315, offset: 7862 },
            end: { line: 159, column: 323, offset: 7870 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the rubico ',
          position: {
            start: { line: 159, column: 323, offset: 7870 },
            end: { line: 159, column: 385, offset: 7932 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/map',
          children: [
            {
              type: 'text',
              value: 'map',
              position: {
                start: { line: 159, column: 386, offset: 7933 },
                end: { line: 159, column: 389, offset: 7936 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 385, offset: 7932 },
            end: { line: 159, column: 401, offset: 7948 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 159, column: 401, offset: 7948 },
            end: { line: 159, column: 417, offset: 7964 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 417, offset: 7964 },
            end: { line: 159, column: 425, offset: 7972 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 425, offset: 7972 },
            end: { line: 159, column: 430, offset: 7977 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 159, column: 430, offset: 7977 },
            end: { line: 159, column: 435, offset: 7982 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 159, column: 435, offset: 7982 },
            end: { line: 159, column: 490, offset: 8037 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7548 },
        end: { line: 159, column: 490, offset: 8037 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 161, column: 1, offset: 8039 },
            end: { line: 161, column: 100, offset: 8138 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 100, offset: 8138 },
            end: { line: 161, column: 109, offset: 8147 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 161, column: 109, offset: 8147 },
            end: { line: 161, column: 177, offset: 8215 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 161, column: 177, offset: 8215 },
            end: { line: 161, column: 183, offset: 8221 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 161, column: 183, offset: 8221 },
            end: { line: 161, column: 189, offset: 8227 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 189, offset: 8227 },
            end: { line: 161, column: 198, offset: 8236 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 161, column: 198, offset: 8236 },
            end: { line: 161, column: 261, offset: 8299 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 261, offset: 8299 },
            end: { line: 161, column: 270, offset: 8308 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 161, column: 270, offset: 8308 },
            end: { line: 161, column: 308, offset: 8346 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/pipe',
          children: [
            {
              type: 'text',
              value: 'pipe',
              position: {
                start: { line: 161, column: 309, offset: 8347 },
                end: { line: 161, column: 313, offset: 8351 }
              }
            }
          ],
          position: {
            start: { line: 161, column: 308, offset: 8346 },
            end: { line: 161, column: 326, offset: 8364 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 326, offset: 8364 },
            end: { line: 161, column: 327, offset: 8365 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8039 },
        end: { line: 161, column: 327, offset: 8365 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 163, column: 1, offset: 8367 },
            end: { line: 163, column: 50, offset: 8416 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 50, offset: 8416 },
            end: { line: 163, column: 58, offset: 8424 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 163, column: 58, offset: 8424 },
            end: { line: 163, column: 94, offset: 8460 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 163, column: 94, offset: 8460 },
            end: { line: 163, column: 107, offset: 8473 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 163, column: 107, offset: 8473 },
            end: { line: 163, column: 173, offset: 8539 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/tap',
          children: [
            {
              type: 'text',
              value: 'tap',
              position: {
                start: { line: 163, column: 174, offset: 8540 },
                end: { line: 163, column: 177, offset: 8543 }
              }
            }
          ],
          position: {
            start: { line: 163, column: 173, offset: 8539 },
            end: { line: 163, column: 189, offset: 8555 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 163, column: 189, offset: 8555 },
            end: { line: 163, column: 355, offset: 8721 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 163, column: 355, offset: 8721 },
            end: { line: 163, column: 360, offset: 8726 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 163, column: 360, offset: 8726 },
            end: { line: 163, column: 449, offset: 8815 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 449, offset: 8815 },
            end: { line: 163, column: 457, offset: 8823 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 163, column: 457, offset: 8823 },
            end: { line: 163, column: 497, offset: 8863 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 163, column: 497, offset: 8863 },
            end: { line: 163, column: 526, offset: 8892 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 163, column: 526, offset: 8892 },
            end: { line: 163, column: 577, offset: 8943 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8367 },
        end: { line: 163, column: 577, offset: 8943 }
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
            start: { line: 165, column: 5, offset: 8949 },
            end: { line: 165, column: 15, offset: 8959 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 8945 },
        end: { line: 165, column: 15, offset: 8959 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 167, column: 1, offset: 8961 },
            end: { line: 167, column: 80, offset: 9040 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 8961 },
        end: { line: 167, column: 80, offset: 9040 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page, ",
          position: {
            start: { line: 169, column: 1, offset: 9042 },
            end: { line: 169, column: 97, offset: 9138 }
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
                start: { line: 169, column: 98, offset: 9139 },
                end: { line: 169, column: 109, offset: 9150 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 97, offset: 9138 },
            end: { line: 169, column: 113, offset: 9154 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 169, column: 113, offset: 9154 },
            end: { line: 169, column: 114, offset: 9155 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 9042 },
        end: { line: 169, column: 114, offset: 9155 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 170, column: 1, offset: 9156 }
  }
}