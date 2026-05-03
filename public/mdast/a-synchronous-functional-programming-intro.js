export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2024-11-26\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/a-synchronous-functional-programming-intro\n' +
        'description: An introduction to the [A]synchronous Functional Programming paradigm.\n' +
        'image: https://rubico.land/assets/rubico-logo-large.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 346 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 348 },
            end: { line: 11, column: 67, offset: 414 }
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
                start: { line: 11, column: 68, offset: 415 },
                end: { line: 11, column: 90, offset: 437 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 414 },
            end: { line: 11, column: 145, offset: 492 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 492 },
            end: { line: 11, column: 156, offset: 503 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 505 },
                end: { line: 11, column: 195, offset: 542 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 503 },
            end: { line: 11, column: 197, offset: 544 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 544 },
            end: { line: 11, column: 347, offset: 694 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 348 },
        end: { line: 11, column: 347, offset: 694 }
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
                    start: { line: 13, column: 4, offset: 699 },
                    end: { line: 13, column: 38, offset: 733 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 699 },
                end: { line: 13, column: 38, offset: 733 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 697 },
            end: { line: 13, column: 38, offset: 733 }
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
                    start: { line: 14, column: 4, offset: 737 },
                    end: { line: 14, column: 48, offset: 781 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 737 },
                end: { line: 14, column: 48, offset: 781 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 735 },
            end: { line: 14, column: 48, offset: 781 }
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
                    start: { line: 15, column: 4, offset: 785 },
                    end: { line: 15, column: 86, offset: 867 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 785 },
                end: { line: 15, column: 86, offset: 867 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 783 },
            end: { line: 15, column: 86, offset: 867 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 697 },
        end: { line: 15, column: 86, offset: 867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 869 },
            end: { line: 17, column: 290, offset: 1158 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 869 },
        end: { line: 17, column: 290, offset: 1158 }
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
            start: { line: 19, column: 5, offset: 1164 },
            end: { line: 19, column: 43, offset: 1202 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1160 },
        end: { line: 19, column: 43, offset: 1202 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 21, column: 1, offset: 1204 },
            end: { line: 21, column: 657, offset: 1860 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1204 },
        end: { line: 21, column: 657, offset: 1860 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 23, column: 1, offset: 1862 },
            end: { line: 23, column: 64, offset: 1925 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1862 },
        end: { line: 23, column: 64, offset: 1925 }
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
                        start: { line: 25, column: 6, offset: 1932 },
                        end: { line: 25, column: 22, offset: 1948 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 1930 },
                    end: { line: 25, column: 24, offset: 1950 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 25, column: 24, offset: 1950 },
                    end: { line: 25, column: 78, offset: 2004 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 1930 },
                end: { line: 25, column: 78, offset: 2004 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 1928 },
            end: { line: 25, column: 78, offset: 2004 }
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
                        start: { line: 26, column: 6, offset: 2010 },
                        end: { line: 26, column: 23, offset: 2027 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 26, column: 4, offset: 2008 },
                    end: { line: 26, column: 25, offset: 2029 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 26, column: 25, offset: 2029 },
                    end: { line: 26, column: 100, offset: 2104 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 2008 },
                end: { line: 26, column: 100, offset: 2104 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 2, offset: 2006 },
            end: { line: 26, column: 100, offset: 2104 }
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
                        start: { line: 27, column: 6, offset: 2110 },
                        end: { line: 27, column: 19, offset: 2123 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 27, column: 4, offset: 2108 },
                    end: { line: 27, column: 21, offset: 2125 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 27, column: 21, offset: 2125 },
                    end: { line: 27, column: 107, offset: 2211 }
                  }
                }
              ],
              position: {
                start: { line: 27, column: 4, offset: 2108 },
                end: { line: 27, column: 107, offset: 2211 }
              }
            }
          ],
          position: {
            start: { line: 27, column: 2, offset: 2106 },
            end: { line: 27, column: 107, offset: 2211 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 2, offset: 1928 },
        end: { line: 27, column: 107, offset: 2211 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 29, column: 1, offset: 2213 },
            end: { line: 29, column: 63, offset: 2275 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 2213 },
        end: { line: 29, column: 63, offset: 2275 }
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
                        start: { line: 31, column: 6, offset: 2282 },
                        end: { line: 31, column: 33, offset: 2309 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2280 },
                    end: { line: 31, column: 35, offset: 2311 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 35, offset: 2311 },
                    end: { line: 31, column: 37, offset: 2313 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 37, offset: 2313 },
                    end: { line: 31, column: 57, offset: 2333 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 57, offset: 2333 },
                    end: { line: 31, column: 83, offset: 2359 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2280 },
                end: { line: 31, column: 83, offset: 2359 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2278 },
            end: { line: 31, column: 83, offset: 2359 }
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
                        start: { line: 32, column: 6, offset: 2365 },
                        end: { line: 32, column: 34, offset: 2393 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 2363 },
                    end: { line: 32, column: 36, offset: 2395 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 32, column: 36, offset: 2395 },
                    end: { line: 32, column: 38, offset: 2397 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 32, column: 38, offset: 2397 },
                    end: { line: 32, column: 58, offset: 2417 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 32, column: 58, offset: 2417 },
                    end: { line: 32, column: 84, offset: 2443 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 2363 },
                end: { line: 32, column: 84, offset: 2443 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 2361 },
            end: { line: 32, column: 84, offset: 2443 }
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
                        start: { line: 33, column: 6, offset: 2449 },
                        end: { line: 33, column: 30, offset: 2473 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 2447 },
                    end: { line: 33, column: 32, offset: 2475 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 33, column: 32, offset: 2475 },
                    end: { line: 33, column: 34, offset: 2477 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 33, column: 34, offset: 2477 },
                    end: { line: 33, column: 54, offset: 2497 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 33, column: 54, offset: 2497 },
                    end: { line: 33, column: 80, offset: 2523 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 2447 },
                end: { line: 33, column: 80, offset: 2523 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 2445 },
            end: { line: 33, column: 80, offset: 2523 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 2, offset: 2278 },
        end: { line: 33, column: 80, offset: 2523 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 35, column: 1, offset: 2525 },
            end: { line: 35, column: 81, offset: 2605 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 35, column: 81, offset: 2605 },
            end: { line: 35, column: 90, offset: 2614 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 35, column: 90, offset: 2614 },
            end: { line: 35, column: 122, offset: 2646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 122, offset: 2646 },
            end: { line: 35, column: 125, offset: 2649 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 35, column: 125, offset: 2649 },
            end: { line: 35, column: 152, offset: 2676 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 152, offset: 2676 },
            end: { line: 35, column: 155, offset: 2679 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 35, column: 155, offset: 2679 },
            end: { line: 35, column: 167, offset: 2691 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 167, offset: 2691 },
            end: { line: 35, column: 170, offset: 2694 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 35, column: 170, offset: 2694 },
            end: { line: 35, column: 181, offset: 2705 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 2525 },
        end: { line: 35, column: 181, offset: 2705 }
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
        start: { line: 37, column: 1, offset: 2707 },
        end: { line: 53, column: 4, offset: 2977 }
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
            start: { line: 55, column: 5, offset: 2983 },
            end: { line: 55, column: 19, offset: 2997 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2979 },
        end: { line: 55, column: 19, offset: 2997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 57, column: 1, offset: 2999 },
            end: { line: 57, column: 70, offset: 3068 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 2999 },
        end: { line: 57, column: 70, offset: 3068 }
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
                        start: { line: 59, column: 6, offset: 3075 },
                        end: { line: 59, column: 21, offset: 3090 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 4, offset: 3073 },
                    end: { line: 59, column: 23, offset: 3092 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 59, column: 23, offset: 3092 },
                    end: { line: 59, column: 192, offset: 3261 }
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
                        start: { line: 59, column: 193, offset: 3262 },
                        end: { line: 59, column: 205, offset: 3274 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 192, offset: 3261 },
                    end: { line: 59, column: 254, offset: 3323 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 59, column: 254, offset: 3323 },
                    end: { line: 59, column: 256, offset: 3325 }
                  }
                }
              ],
              position: {
                start: { line: 59, column: 4, offset: 3073 },
                end: { line: 59, column: 256, offset: 3325 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 2, offset: 3071 },
            end: { line: 59, column: 256, offset: 3325 }
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
                        start: { line: 60, column: 6, offset: 3331 },
                        end: { line: 60, column: 67, offset: 3392 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 60, column: 4, offset: 3329 },
                    end: { line: 60, column: 69, offset: 3394 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 60, column: 69, offset: 3394 },
                    end: { line: 60, column: 144, offset: 3469 }
                  }
                }
              ],
              position: {
                start: { line: 60, column: 4, offset: 3329 },
                end: { line: 60, column: 144, offset: 3469 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 2, offset: 3327 },
            end: { line: 60, column: 144, offset: 3469 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 2, offset: 3071 },
        end: { line: 60, column: 144, offset: 3469 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 62, column: 1, offset: 3471 },
            end: { line: 62, column: 46, offset: 3516 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3471 },
        end: { line: 62, column: 46, offset: 3516 }
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
                    start: { line: 64, column: 4, offset: 3521 },
                    end: { line: 64, column: 82, offset: 3599 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3521 },
                end: { line: 64, column: 82, offset: 3599 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3519 },
            end: { line: 64, column: 82, offset: 3599 }
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
                    start: { line: 65, column: 4, offset: 3603 },
                    end: { line: 65, column: 91, offset: 3690 }
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 3603 },
                end: { line: 65, column: 91, offset: 3690 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 2, offset: 3601 },
            end: { line: 65, column: 91, offset: 3690 }
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
                    start: { line: 66, column: 4, offset: 3694 },
                    end: { line: 66, column: 26, offset: 3716 }
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
                        start: { line: 66, column: 27, offset: 3717 },
                        end: { line: 66, column: 35, offset: 3725 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 66, column: 26, offset: 3716 },
                    end: { line: 66, column: 79, offset: 3769 }
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 3694 },
                end: { line: 66, column: 79, offset: 3769 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 2, offset: 3692 },
            end: { line: 66, column: 79, offset: 3769 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 2, offset: 3519 },
        end: { line: 66, column: 79, offset: 3769 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 68, column: 1, offset: 3771 },
            end: { line: 68, column: 14, offset: 3784 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 14, offset: 3784 },
            end: { line: 68, column: 19, offset: 3789 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 68, column: 19, offset: 3789 },
            end: { line: 68, column: 161, offset: 3931 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 161, offset: 3931 },
            end: { line: 68, column: 166, offset: 3936 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 68, column: 166, offset: 3936 },
            end: { line: 68, column: 204, offset: 3974 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3771 },
        end: { line: 68, column: 204, offset: 3974 }
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
        start: { line: 70, column: 1, offset: 3976 },
        end: { line: 81, column: 4, offset: 4121 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 83, column: 1, offset: 4123 },
            end: { line: 83, column: 43, offset: 4165 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 4123 },
        end: { line: 83, column: 43, offset: 4165 }
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
                    start: { line: 85, column: 4, offset: 4170 },
                    end: { line: 85, column: 88, offset: 4254 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4170 },
                end: { line: 85, column: 88, offset: 4254 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4168 },
            end: { line: 85, column: 88, offset: 4254 }
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
                    start: { line: 86, column: 4, offset: 4258 },
                    end: { line: 86, column: 76, offset: 4330 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4258 },
                end: { line: 86, column: 76, offset: 4330 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4256 },
            end: { line: 86, column: 76, offset: 4330 }
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
                    start: { line: 87, column: 4, offset: 4334 },
                    end: { line: 87, column: 81, offset: 4411 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4334 },
                end: { line: 87, column: 81, offset: 4411 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4332 },
            end: { line: 87, column: 81, offset: 4411 }
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
                    start: { line: 88, column: 4, offset: 4415 },
                    end: { line: 88, column: 114, offset: 4525 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4415 },
                end: { line: 88, column: 114, offset: 4525 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4413 },
            end: { line: 88, column: 114, offset: 4525 }
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
                    start: { line: 89, column: 4, offset: 4529 },
                    end: { line: 89, column: 119, offset: 4644 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 4529 },
                end: { line: 89, column: 119, offset: 4644 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 4527 },
            end: { line: 89, column: 119, offset: 4644 }
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
                    start: { line: 90, column: 4, offset: 4648 },
                    end: { line: 90, column: 157, offset: 4801 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 4648 },
                end: { line: 90, column: 157, offset: 4801 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 4646 },
            end: { line: 90, column: 157, offset: 4801 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 4168 },
        end: { line: 90, column: 157, offset: 4801 }
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
            start: { line: 92, column: 5, offset: 4807 },
            end: { line: 92, column: 42, offset: 4844 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4803 },
        end: { line: 92, column: 42, offset: 4844 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 94, column: 1, offset: 4846 },
            end: { line: 94, column: 270, offset: 5115 }
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
                start: { line: 94, column: 271, offset: 5116 },
                end: { line: 94, column: 279, offset: 5124 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 270, offset: 5115 },
            end: { line: 94, column: 370, offset: 5215 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 94, column: 370, offset: 5215 },
            end: { line: 94, column: 375, offset: 5220 }
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
                start: { line: 94, column: 376, offset: 5221 },
                end: { line: 94, column: 387, offset: 5232 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 375, offset: 5220 },
            end: { line: 94, column: 481, offset: 5326 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 94, column: 481, offset: 5326 },
            end: { line: 94, column: 552, offset: 5397 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 4846 },
        end: { line: 94, column: 552, offset: 5397 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 96, column: 1, offset: 5399 },
            end: { line: 96, column: 16, offset: 5414 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'Rubico',
              position: {
                start: { line: 96, column: 17, offset: 5415 },
                end: { line: 96, column: 23, offset: 5421 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 16, offset: 5414 },
            end: { line: 96, column: 46, offset: 5444 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 96, column: 46, offset: 5444 },
            end: { line: 96, column: 120, offset: 5518 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 5399 },
        end: { line: 96, column: 120, offset: 5518 }
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
        start: { line: 98, column: 1, offset: 5520 },
        end: { line: 115, column: 4, offset: 5908 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 117, column: 1, offset: 5910 },
            end: { line: 117, column: 65, offset: 5974 }
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
                start: { line: 117, column: 66, offset: 5975 },
                end: { line: 117, column: 73, offset: 5982 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 65, offset: 5974 },
            end: { line: 117, column: 89, offset: 5998 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 117, column: 89, offset: 5998 },
            end: { line: 117, column: 100, offset: 6009 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 117, column: 100, offset: 6009 },
            end: { line: 117, column: 109, offset: 6018 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 117, column: 109, offset: 6018 },
            end: { line: 117, column: 267, offset: 6176 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 117, column: 267, offset: 6176 },
            end: { line: 117, column: 284, offset: 6193 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 117, column: 284, offset: 6193 },
            end: { line: 117, column: 322, offset: 6231 }
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
                start: { line: 117, column: 323, offset: 6232 },
                end: { line: 117, column: 326, offset: 6235 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 322, offset: 6231 },
            end: { line: 117, column: 338, offset: 6247 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 117, column: 338, offset: 6247 },
            end: { line: 117, column: 476, offset: 6385 }
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
                start: { line: 117, column: 477, offset: 6386 },
                end: { line: 117, column: 484, offset: 6393 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 476, offset: 6385 },
            end: { line: 117, column: 500, offset: 6409 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 117, column: 500, offset: 6409 },
            end: { line: 117, column: 518, offset: 6427 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 117, column: 518, offset: 6427 },
            end: { line: 117, column: 531, offset: 6440 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 117, column: 531, offset: 6440 },
            end: { line: 117, column: 541, offset: 6450 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5910 },
        end: { line: 117, column: 541, offset: 6450 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 119, column: 1, offset: 6452 },
            end: { line: 119, column: 23, offset: 6474 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 119, column: 23, offset: 6474 },
            end: { line: 119, column: 36, offset: 6487 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 119, column: 36, offset: 6487 },
            end: { line: 119, column: 109, offset: 6560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 119, column: 109, offset: 6560 },
            end: { line: 119, column: 118, offset: 6569 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 119, column: 118, offset: 6569 },
            end: { line: 119, column: 135, offset: 6586 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 119, column: 135, offset: 6586 },
            end: { line: 119, column: 140, offset: 6591 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 119, column: 140, offset: 6591 },
            end: { line: 119, column: 219, offset: 6670 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 119, column: 219, offset: 6670 },
            end: { line: 119, column: 238, offset: 6689 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 119, column: 238, offset: 6689 },
            end: { line: 119, column: 315, offset: 6766 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 119, column: 315, offset: 6766 },
            end: { line: 119, column: 324, offset: 6775 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 119, column: 324, offset: 6775 },
            end: { line: 119, column: 420, offset: 6871 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6452 },
        end: { line: 119, column: 420, offset: 6871 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 121, column: 1, offset: 6873 },
            end: { line: 121, column: 45, offset: 6917 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6873 },
        end: { line: 121, column: 45, offset: 6917 }
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
        start: { line: 123, column: 1, offset: 6919 },
        end: { line: 157, column: 4, offset: 7544 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 159, column: 1, offset: 7546 },
            end: { line: 159, column: 23, offset: 7568 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 23, offset: 7568 },
            end: { line: 159, column: 28, offset: 7573 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 28, offset: 7573 },
            end: { line: 159, column: 33, offset: 7578 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 33, offset: 7578 },
            end: { line: 159, column: 41, offset: 7586 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 159, column: 41, offset: 7586 },
            end: { line: 159, column: 132, offset: 7677 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 132, offset: 7677 },
            end: { line: 159, column: 137, offset: 7682 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 159, column: 137, offset: 7682 },
            end: { line: 159, column: 141, offset: 7686 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 141, offset: 7686 },
            end: { line: 159, column: 149, offset: 7694 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 159, column: 149, offset: 7694 },
            end: { line: 159, column: 207, offset: 7752 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 207, offset: 7752 },
            end: { line: 159, column: 212, offset: 7757 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 212, offset: 7757 },
            end: { line: 159, column: 274, offset: 7819 }
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
                start: { line: 159, column: 275, offset: 7820 },
                end: { line: 159, column: 281, offset: 7826 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 274, offset: 7819 },
            end: { line: 159, column: 296, offset: 7841 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 159, column: 296, offset: 7841 },
            end: { line: 159, column: 315, offset: 7860 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 315, offset: 7860 },
            end: { line: 159, column: 323, offset: 7868 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 323, offset: 7868 },
            end: { line: 159, column: 385, offset: 7930 }
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
                start: { line: 159, column: 386, offset: 7931 },
                end: { line: 159, column: 389, offset: 7934 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 385, offset: 7930 },
            end: { line: 159, column: 401, offset: 7946 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 159, column: 401, offset: 7946 },
            end: { line: 159, column: 417, offset: 7962 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 417, offset: 7962 },
            end: { line: 159, column: 425, offset: 7970 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 425, offset: 7970 },
            end: { line: 159, column: 430, offset: 7975 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 159, column: 430, offset: 7975 },
            end: { line: 159, column: 435, offset: 7980 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 159, column: 435, offset: 7980 },
            end: { line: 159, column: 490, offset: 8035 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7546 },
        end: { line: 159, column: 490, offset: 8035 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 161, column: 1, offset: 8037 },
            end: { line: 161, column: 100, offset: 8136 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 100, offset: 8136 },
            end: { line: 161, column: 109, offset: 8145 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 161, column: 109, offset: 8145 },
            end: { line: 161, column: 177, offset: 8213 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 161, column: 177, offset: 8213 },
            end: { line: 161, column: 183, offset: 8219 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 161, column: 183, offset: 8219 },
            end: { line: 161, column: 189, offset: 8225 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 189, offset: 8225 },
            end: { line: 161, column: 198, offset: 8234 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 161, column: 198, offset: 8234 },
            end: { line: 161, column: 261, offset: 8297 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 261, offset: 8297 },
            end: { line: 161, column: 270, offset: 8306 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 161, column: 270, offset: 8306 },
            end: { line: 161, column: 308, offset: 8344 }
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
                start: { line: 161, column: 309, offset: 8345 },
                end: { line: 161, column: 313, offset: 8349 }
              }
            }
          ],
          position: {
            start: { line: 161, column: 308, offset: 8344 },
            end: { line: 161, column: 326, offset: 8362 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 326, offset: 8362 },
            end: { line: 161, column: 327, offset: 8363 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8037 },
        end: { line: 161, column: 327, offset: 8363 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 163, column: 1, offset: 8365 },
            end: { line: 163, column: 50, offset: 8414 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 50, offset: 8414 },
            end: { line: 163, column: 58, offset: 8422 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 163, column: 58, offset: 8422 },
            end: { line: 163, column: 94, offset: 8458 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 163, column: 94, offset: 8458 },
            end: { line: 163, column: 107, offset: 8471 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 163, column: 107, offset: 8471 },
            end: { line: 163, column: 173, offset: 8537 }
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
                start: { line: 163, column: 174, offset: 8538 },
                end: { line: 163, column: 177, offset: 8541 }
              }
            }
          ],
          position: {
            start: { line: 163, column: 173, offset: 8537 },
            end: { line: 163, column: 189, offset: 8553 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 163, column: 189, offset: 8553 },
            end: { line: 163, column: 355, offset: 8719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 163, column: 355, offset: 8719 },
            end: { line: 163, column: 360, offset: 8724 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 163, column: 360, offset: 8724 },
            end: { line: 163, column: 449, offset: 8813 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 449, offset: 8813 },
            end: { line: 163, column: 457, offset: 8821 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 163, column: 457, offset: 8821 },
            end: { line: 163, column: 497, offset: 8861 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 163, column: 497, offset: 8861 },
            end: { line: 163, column: 526, offset: 8890 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 163, column: 526, offset: 8890 },
            end: { line: 163, column: 577, offset: 8941 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8365 },
        end: { line: 163, column: 577, offset: 8941 }
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
            start: { line: 165, column: 5, offset: 8947 },
            end: { line: 165, column: 15, offset: 8957 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 8943 },
        end: { line: 165, column: 15, offset: 8957 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 167, column: 1, offset: 8959 },
            end: { line: 167, column: 80, offset: 9038 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 8959 },
        end: { line: 167, column: 80, offset: 9038 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 169, column: 1, offset: 9040 },
            end: { line: 169, column: 97, offset: 9136 }
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
                start: { line: 169, column: 98, offset: 9137 },
                end: { line: 169, column: 109, offset: 9148 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 97, offset: 9136 },
            end: { line: 169, column: 113, offset: 9152 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 169, column: 113, offset: 9152 },
            end: { line: 169, column: 114, offset: 9153 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 9040 },
        end: { line: 169, column: 114, offset: 9153 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 170, column: 1, offset: 9154 }
  }
}