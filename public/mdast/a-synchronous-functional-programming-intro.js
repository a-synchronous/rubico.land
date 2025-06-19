export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2024-11-26\n' +
        'path: /blog/a-synchronous-functional-programming-intro\n' +
        'description: An introduction to the [A]synchronous Functional Programming paradigm\n' +
        'image: https://rubico.land/assets/rubico-logo-large.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 4, offset: 328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 10, column: 1, offset: 330 },
            end: { line: 10, column: 67, offset: 396 }
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
                start: { line: 10, column: 68, offset: 397 },
                end: { line: 10, column: 90, offset: 419 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 67, offset: 396 },
            end: { line: 10, column: 145, offset: 474 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 10, column: 145, offset: 474 },
            end: { line: 10, column: 156, offset: 485 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 10, column: 158, offset: 487 },
                end: { line: 10, column: 195, offset: 524 }
              }
            }
          ],
          position: {
            start: { line: 10, column: 156, offset: 485 },
            end: { line: 10, column: 197, offset: 526 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 10, column: 197, offset: 526 },
            end: { line: 10, column: 347, offset: 676 }
          }
        }
      ],
      position: {
        start: { line: 10, column: 1, offset: 330 },
        end: { line: 10, column: 347, offset: 676 }
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
                    start: { line: 12, column: 4, offset: 681 },
                    end: { line: 12, column: 38, offset: 715 }
                  }
                }
              ],
              position: {
                start: { line: 12, column: 4, offset: 681 },
                end: { line: 12, column: 38, offset: 715 }
              }
            }
          ],
          position: {
            start: { line: 12, column: 2, offset: 679 },
            end: { line: 12, column: 38, offset: 715 }
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
                    start: { line: 13, column: 4, offset: 719 },
                    end: { line: 13, column: 48, offset: 763 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 719 },
                end: { line: 13, column: 48, offset: 763 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 717 },
            end: { line: 13, column: 48, offset: 763 }
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
                    start: { line: 14, column: 4, offset: 767 },
                    end: { line: 14, column: 86, offset: 849 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 767 },
                end: { line: 14, column: 86, offset: 849 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 765 },
            end: { line: 14, column: 86, offset: 849 }
          }
        }
      ],
      position: {
        start: { line: 12, column: 2, offset: 679 },
        end: { line: 14, column: 86, offset: 849 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 16, column: 1, offset: 851 },
            end: { line: 16, column: 290, offset: 1140 }
          }
        }
      ],
      position: {
        start: { line: 16, column: 1, offset: 851 },
        end: { line: 16, column: 290, offset: 1140 }
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
            start: { line: 18, column: 5, offset: 1146 },
            end: { line: 18, column: 43, offset: 1184 }
          }
        }
      ],
      position: {
        start: { line: 18, column: 1, offset: 1142 },
        end: { line: 18, column: 43, offset: 1184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 20, column: 1, offset: 1186 },
            end: { line: 20, column: 657, offset: 1842 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1186 },
        end: { line: 20, column: 657, offset: 1842 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 22, column: 1, offset: 1844 },
            end: { line: 22, column: 64, offset: 1907 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1844 },
        end: { line: 22, column: 64, offset: 1907 }
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
                        start: { line: 24, column: 6, offset: 1914 },
                        end: { line: 24, column: 22, offset: 1930 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 24, column: 4, offset: 1912 },
                    end: { line: 24, column: 24, offset: 1932 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 24, column: 24, offset: 1932 },
                    end: { line: 24, column: 78, offset: 1986 }
                  }
                }
              ],
              position: {
                start: { line: 24, column: 4, offset: 1912 },
                end: { line: 24, column: 78, offset: 1986 }
              }
            }
          ],
          position: {
            start: { line: 24, column: 2, offset: 1910 },
            end: { line: 24, column: 78, offset: 1986 }
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
                        start: { line: 25, column: 6, offset: 1992 },
                        end: { line: 25, column: 23, offset: 2009 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 1990 },
                    end: { line: 25, column: 25, offset: 2011 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 25, column: 25, offset: 2011 },
                    end: { line: 25, column: 100, offset: 2086 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 1990 },
                end: { line: 25, column: 100, offset: 2086 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 1988 },
            end: { line: 25, column: 100, offset: 2086 }
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
                        start: { line: 26, column: 6, offset: 2092 },
                        end: { line: 26, column: 19, offset: 2105 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 26, column: 4, offset: 2090 },
                    end: { line: 26, column: 21, offset: 2107 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 26, column: 21, offset: 2107 },
                    end: { line: 26, column: 107, offset: 2193 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 2090 },
                end: { line: 26, column: 107, offset: 2193 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 2, offset: 2088 },
            end: { line: 26, column: 107, offset: 2193 }
          }
        }
      ],
      position: {
        start: { line: 24, column: 2, offset: 1910 },
        end: { line: 26, column: 107, offset: 2193 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 28, column: 1, offset: 2195 },
            end: { line: 28, column: 63, offset: 2257 }
          }
        }
      ],
      position: {
        start: { line: 28, column: 1, offset: 2195 },
        end: { line: 28, column: 63, offset: 2257 }
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
                        start: { line: 30, column: 6, offset: 2264 },
                        end: { line: 30, column: 33, offset: 2291 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 2262 },
                    end: { line: 30, column: 35, offset: 2293 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 30, column: 35, offset: 2293 },
                    end: { line: 30, column: 37, offset: 2295 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 30, column: 37, offset: 2295 },
                    end: { line: 30, column: 57, offset: 2315 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 30, column: 57, offset: 2315 },
                    end: { line: 30, column: 83, offset: 2341 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 2262 },
                end: { line: 30, column: 83, offset: 2341 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 2260 },
            end: { line: 30, column: 83, offset: 2341 }
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
                        start: { line: 31, column: 6, offset: 2347 },
                        end: { line: 31, column: 34, offset: 2375 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2345 },
                    end: { line: 31, column: 36, offset: 2377 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 36, offset: 2377 },
                    end: { line: 31, column: 38, offset: 2379 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 38, offset: 2379 },
                    end: { line: 31, column: 58, offset: 2399 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 58, offset: 2399 },
                    end: { line: 31, column: 84, offset: 2425 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2345 },
                end: { line: 31, column: 84, offset: 2425 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2343 },
            end: { line: 31, column: 84, offset: 2425 }
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
                        start: { line: 32, column: 6, offset: 2431 },
                        end: { line: 32, column: 30, offset: 2455 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 2429 },
                    end: { line: 32, column: 32, offset: 2457 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 32, column: 32, offset: 2457 },
                    end: { line: 32, column: 34, offset: 2459 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 32, column: 34, offset: 2459 },
                    end: { line: 32, column: 54, offset: 2479 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 32, column: 54, offset: 2479 },
                    end: { line: 32, column: 80, offset: 2505 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 2429 },
                end: { line: 32, column: 80, offset: 2505 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 2427 },
            end: { line: 32, column: 80, offset: 2505 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 2260 },
        end: { line: 32, column: 80, offset: 2505 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 34, column: 1, offset: 2507 },
            end: { line: 34, column: 81, offset: 2587 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 34, column: 81, offset: 2587 },
            end: { line: 34, column: 90, offset: 2596 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 34, column: 90, offset: 2596 },
            end: { line: 34, column: 122, offset: 2628 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 34, column: 122, offset: 2628 },
            end: { line: 34, column: 125, offset: 2631 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 34, column: 125, offset: 2631 },
            end: { line: 34, column: 152, offset: 2658 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 34, column: 152, offset: 2658 },
            end: { line: 34, column: 155, offset: 2661 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 34, column: 155, offset: 2661 },
            end: { line: 34, column: 167, offset: 2673 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 34, column: 167, offset: 2673 },
            end: { line: 34, column: 170, offset: 2676 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 34, column: 170, offset: 2676 },
            end: { line: 34, column: 181, offset: 2687 }
          }
        }
      ],
      position: {
        start: { line: 34, column: 1, offset: 2507 },
        end: { line: 34, column: 181, offset: 2687 }
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
        start: { line: 36, column: 1, offset: 2689 },
        end: { line: 52, column: 4, offset: 2959 }
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
            start: { line: 54, column: 5, offset: 2965 },
            end: { line: 54, column: 19, offset: 2979 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2961 },
        end: { line: 54, column: 19, offset: 2979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 56, column: 1, offset: 2981 },
            end: { line: 56, column: 70, offset: 3050 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2981 },
        end: { line: 56, column: 70, offset: 3050 }
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
                        start: { line: 58, column: 6, offset: 3057 },
                        end: { line: 58, column: 21, offset: 3072 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 58, column: 4, offset: 3055 },
                    end: { line: 58, column: 23, offset: 3074 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 58, column: 23, offset: 3074 },
                    end: { line: 58, column: 192, offset: 3243 }
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
                        start: { line: 58, column: 193, offset: 3244 },
                        end: { line: 58, column: 205, offset: 3256 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 58, column: 192, offset: 3243 },
                    end: { line: 58, column: 254, offset: 3305 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 58, column: 254, offset: 3305 },
                    end: { line: 58, column: 256, offset: 3307 }
                  }
                }
              ],
              position: {
                start: { line: 58, column: 4, offset: 3055 },
                end: { line: 58, column: 256, offset: 3307 }
              }
            }
          ],
          position: {
            start: { line: 58, column: 2, offset: 3053 },
            end: { line: 58, column: 256, offset: 3307 }
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
                        start: { line: 59, column: 6, offset: 3313 },
                        end: { line: 59, column: 67, offset: 3374 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 4, offset: 3311 },
                    end: { line: 59, column: 69, offset: 3376 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 59, column: 69, offset: 3376 },
                    end: { line: 59, column: 144, offset: 3451 }
                  }
                }
              ],
              position: {
                start: { line: 59, column: 4, offset: 3311 },
                end: { line: 59, column: 144, offset: 3451 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 2, offset: 3309 },
            end: { line: 59, column: 144, offset: 3451 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 2, offset: 3053 },
        end: { line: 59, column: 144, offset: 3451 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 61, column: 1, offset: 3453 },
            end: { line: 61, column: 46, offset: 3498 }
          }
        }
      ],
      position: {
        start: { line: 61, column: 1, offset: 3453 },
        end: { line: 61, column: 46, offset: 3498 }
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
                    start: { line: 63, column: 4, offset: 3503 },
                    end: { line: 63, column: 82, offset: 3581 }
                  }
                }
              ],
              position: {
                start: { line: 63, column: 4, offset: 3503 },
                end: { line: 63, column: 82, offset: 3581 }
              }
            }
          ],
          position: {
            start: { line: 63, column: 2, offset: 3501 },
            end: { line: 63, column: 82, offset: 3581 }
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
                    start: { line: 64, column: 4, offset: 3585 },
                    end: { line: 64, column: 91, offset: 3672 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3585 },
                end: { line: 64, column: 91, offset: 3672 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3583 },
            end: { line: 64, column: 91, offset: 3672 }
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
                    start: { line: 65, column: 4, offset: 3676 },
                    end: { line: 65, column: 26, offset: 3698 }
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
                        start: { line: 65, column: 27, offset: 3699 },
                        end: { line: 65, column: 35, offset: 3707 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 65, column: 26, offset: 3698 },
                    end: { line: 65, column: 79, offset: 3751 }
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 3676 },
                end: { line: 65, column: 79, offset: 3751 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 2, offset: 3674 },
            end: { line: 65, column: 79, offset: 3751 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 2, offset: 3501 },
        end: { line: 65, column: 79, offset: 3751 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 67, column: 1, offset: 3753 },
            end: { line: 67, column: 14, offset: 3766 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 67, column: 14, offset: 3766 },
            end: { line: 67, column: 19, offset: 3771 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 67, column: 19, offset: 3771 },
            end: { line: 67, column: 161, offset: 3913 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 67, column: 161, offset: 3913 },
            end: { line: 67, column: 166, offset: 3918 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 67, column: 166, offset: 3918 },
            end: { line: 67, column: 204, offset: 3956 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 3753 },
        end: { line: 67, column: 204, offset: 3956 }
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
        start: { line: 69, column: 1, offset: 3958 },
        end: { line: 80, column: 4, offset: 4103 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 82, column: 1, offset: 4105 },
            end: { line: 82, column: 43, offset: 4147 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4105 },
        end: { line: 82, column: 43, offset: 4147 }
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
                    start: { line: 84, column: 4, offset: 4152 },
                    end: { line: 84, column: 88, offset: 4236 }
                  }
                }
              ],
              position: {
                start: { line: 84, column: 4, offset: 4152 },
                end: { line: 84, column: 88, offset: 4236 }
              }
            }
          ],
          position: {
            start: { line: 84, column: 2, offset: 4150 },
            end: { line: 84, column: 88, offset: 4236 }
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
                    start: { line: 85, column: 4, offset: 4240 },
                    end: { line: 85, column: 76, offset: 4312 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4240 },
                end: { line: 85, column: 76, offset: 4312 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4238 },
            end: { line: 85, column: 76, offset: 4312 }
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
                    start: { line: 86, column: 4, offset: 4316 },
                    end: { line: 86, column: 81, offset: 4393 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4316 },
                end: { line: 86, column: 81, offset: 4393 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4314 },
            end: { line: 86, column: 81, offset: 4393 }
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
                    start: { line: 87, column: 4, offset: 4397 },
                    end: { line: 87, column: 114, offset: 4507 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4397 },
                end: { line: 87, column: 114, offset: 4507 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4395 },
            end: { line: 87, column: 114, offset: 4507 }
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
                    start: { line: 88, column: 4, offset: 4511 },
                    end: { line: 88, column: 119, offset: 4626 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4511 },
                end: { line: 88, column: 119, offset: 4626 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4509 },
            end: { line: 88, column: 119, offset: 4626 }
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
                    start: { line: 89, column: 4, offset: 4630 },
                    end: { line: 89, column: 157, offset: 4783 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 4630 },
                end: { line: 89, column: 157, offset: 4783 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 4628 },
            end: { line: 89, column: 157, offset: 4783 }
          }
        }
      ],
      position: {
        start: { line: 84, column: 2, offset: 4150 },
        end: { line: 89, column: 157, offset: 4783 }
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
            start: { line: 91, column: 5, offset: 4789 },
            end: { line: 91, column: 42, offset: 4826 }
          }
        }
      ],
      position: {
        start: { line: 91, column: 1, offset: 4785 },
        end: { line: 91, column: 42, offset: 4826 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 93, column: 1, offset: 4828 },
            end: { line: 93, column: 270, offset: 5097 }
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
                start: { line: 93, column: 271, offset: 5098 },
                end: { line: 93, column: 279, offset: 5106 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 270, offset: 5097 },
            end: { line: 93, column: 370, offset: 5197 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 93, column: 370, offset: 5197 },
            end: { line: 93, column: 375, offset: 5202 }
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
                start: { line: 93, column: 376, offset: 5203 },
                end: { line: 93, column: 387, offset: 5214 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 375, offset: 5202 },
            end: { line: 93, column: 481, offset: 5308 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 93, column: 481, offset: 5308 },
            end: { line: 93, column: 552, offset: 5379 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 4828 },
        end: { line: 93, column: 552, offset: 5379 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order to operate in the [A]synchronous Functional Programming paradigm, we need the library ',
          position: {
            start: { line: 95, column: 1, offset: 5381 },
            end: { line: 95, column: 96, offset: 5476 }
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
                start: { line: 95, column: 97, offset: 5477 },
                end: { line: 95, column: 103, offset: 5483 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 96, offset: 5476 },
            end: { line: 95, column: 126, offset: 5506 }
          }
        },
        {
          type: 'text',
          value: '. Consider the following example:',
          position: {
            start: { line: 95, column: 126, offset: 5506 },
            end: { line: 95, column: 159, offset: 5539 }
          }
        }
      ],
      position: {
        start: { line: 95, column: 1, offset: 5381 },
        end: { line: 95, column: 159, offset: 5539 }
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
        start: { line: 97, column: 1, offset: 5541 },
        end: { line: 114, column: 4, offset: 5929 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the ',
          position: {
            start: { line: 116, column: 1, offset: 5931 },
            end: { line: 116, column: 58, offset: 5988 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 116, column: 58, offset: 5988 },
            end: { line: 116, column: 67, offset: 5997 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 116, column: 67, offset: 5997 },
            end: { line: 116, column: 78, offset: 6008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 116, column: 78, offset: 6008 },
            end: { line: 116, column: 87, offset: 6017 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 116, column: 87, offset: 6017 },
            end: { line: 116, column: 245, offset: 6175 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 116, column: 245, offset: 6175 },
            end: { line: 116, column: 262, offset: 6192 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled rubico ',
          position: {
            start: { line: 116, column: 262, offset: 6192 },
            end: { line: 116, column: 300, offset: 6230 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 116, column: 300, offset: 6230 },
            end: { line: 116, column: 305, offset: 6235 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico ',
          position: {
            start: { line: 116, column: 305, offset: 6235 },
            end: { line: 116, column: 443, offset: 6373 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 116, column: 443, offset: 6373 },
            end: { line: 116, column: 452, offset: 6382 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 116, column: 452, offset: 6382 },
            end: { line: 116, column: 470, offset: 6400 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 116, column: 470, offset: 6400 },
            end: { line: 116, column: 483, offset: 6413 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 116, column: 483, offset: 6413 },
            end: { line: 116, column: 493, offset: 6423 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 5931 },
        end: { line: 116, column: 493, offset: 6423 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 118, column: 1, offset: 6425 },
            end: { line: 118, column: 23, offset: 6447 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 118, column: 23, offset: 6447 },
            end: { line: 118, column: 36, offset: 6460 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 118, column: 36, offset: 6460 },
            end: { line: 118, column: 109, offset: 6533 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 118, column: 109, offset: 6533 },
            end: { line: 118, column: 118, offset: 6542 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 118, column: 118, offset: 6542 },
            end: { line: 118, column: 135, offset: 6559 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 118, column: 135, offset: 6559 },
            end: { line: 118, column: 140, offset: 6564 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 118, column: 140, offset: 6564 },
            end: { line: 118, column: 219, offset: 6643 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 118, column: 219, offset: 6643 },
            end: { line: 118, column: 238, offset: 6662 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 118, column: 238, offset: 6662 },
            end: { line: 118, column: 315, offset: 6739 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 118, column: 315, offset: 6739 },
            end: { line: 118, column: 324, offset: 6748 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 118, column: 324, offset: 6748 },
            end: { line: 118, column: 420, offset: 6844 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 6425 },
        end: { line: 118, column: 420, offset: 6844 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 120, column: 1, offset: 6846 },
            end: { line: 120, column: 45, offset: 6890 }
          }
        }
      ],
      position: {
        start: { line: 120, column: 1, offset: 6846 },
        end: { line: 120, column: 45, offset: 6890 }
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
        start: { line: 122, column: 1, offset: 6892 },
        end: { line: 156, column: 4, offset: 7517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 158, column: 1, offset: 7519 },
            end: { line: 158, column: 23, offset: 7541 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 23, offset: 7541 },
            end: { line: 158, column: 28, offset: 7546 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 158, column: 28, offset: 7546 },
            end: { line: 158, column: 33, offset: 7551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 33, offset: 7551 },
            end: { line: 158, column: 41, offset: 7559 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. You can see they are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 158, column: 41, offset: 7559 },
            end: { line: 158, column: 144, offset: 7662 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 144, offset: 7662 },
            end: { line: 158, column: 149, offset: 7667 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 158, column: 149, offset: 7667 },
            end: { line: 158, column: 153, offset: 7671 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 153, offset: 7671 },
            end: { line: 158, column: 161, offset: 7679 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 158, column: 161, offset: 7679 },
            end: { line: 158, column: 219, offset: 7737 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 158, column: 219, offset: 7737 },
            end: { line: 158, column: 224, offset: 7742 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 224, offset: 7742 },
            end: { line: 158, column: 279, offset: 7797 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 158, column: 279, offset: 7797 },
            end: { line: 158, column: 287, offset: 7805 }
          }
        },
        {
          type: 'text',
          value: ' higher order function, and the ',
          position: {
            start: { line: 158, column: 287, offset: 7805 },
            end: { line: 158, column: 319, offset: 7837 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 158, column: 319, offset: 7837 },
            end: { line: 158, column: 327, offset: 7845 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 158, column: 327, offset: 7845 },
            end: { line: 158, column: 382, offset: 7900 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 158, column: 382, offset: 7900 },
            end: { line: 158, column: 387, offset: 7905 }
          }
        },
        {
          type: 'text',
          value: ' higher order function.',
          position: {
            start: { line: 158, column: 387, offset: 7905 },
            end: { line: 158, column: 410, offset: 7928 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 1, offset: 7519 },
        end: { line: 158, column: 410, offset: 7928 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 160, column: 1, offset: 7930 },
            end: { line: 160, column: 100, offset: 8029 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 160, column: 100, offset: 8029 },
            end: { line: 160, column: 109, offset: 8038 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 160, column: 109, offset: 8038 },
            end: { line: 160, column: 177, offset: 8106 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 160, column: 177, offset: 8106 },
            end: { line: 160, column: 183, offset: 8112 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 160, column: 183, offset: 8112 },
            end: { line: 160, column: 189, offset: 8118 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 160, column: 189, offset: 8118 },
            end: { line: 160, column: 198, offset: 8127 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 160, column: 198, offset: 8127 },
            end: { line: 160, column: 261, offset: 8190 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 160, column: 261, offset: 8190 },
            end: { line: 160, column: 270, offset: 8199 }
          }
        },
        {
          type: 'text',
          value: ' we create a function "pipeline" with ',
          position: {
            start: { line: 160, column: 270, offset: 8199 },
            end: { line: 160, column: 308, offset: 8237 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 160, column: 308, offset: 8237 },
            end: { line: 160, column: 314, offset: 8243 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 160, column: 314, offset: 8243 },
            end: { line: 160, column: 315, offset: 8244 }
          }
        }
      ],
      position: {
        start: { line: 160, column: 1, offset: 7930 },
        end: { line: 160, column: 315, offset: 8244 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example as well with ',
          position: {
            start: { line: 162, column: 1, offset: 8246 },
            end: { line: 162, column: 58, offset: 8303 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 162, column: 58, offset: 8303 },
            end: { line: 162, column: 66, offset: 8311 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 162, column: 66, offset: 8311 },
            end: { line: 162, column: 102, offset: 8347 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 162, column: 102, offset: 8347 },
            end: { line: 162, column: 115, offset: 8360 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see a new operator ',
          position: {
            start: { line: 162, column: 115, offset: 8360 },
            end: { line: 162, column: 183, offset: 8428 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 162, column: 183, offset: 8428 },
            end: { line: 162, column: 188, offset: 8433 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 162, column: 188, offset: 8433 },
            end: { line: 162, column: 354, offset: 8599 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 162, column: 354, offset: 8599 },
            end: { line: 162, column: 359, offset: 8604 }
          }
        },
        {
          type: 'text',
          value: ", the return value of the provided function is unused, so we don't see ",
          position: {
            start: { line: 162, column: 359, offset: 8604 },
            end: { line: 162, column: 430, offset: 8675 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 162, column: 430, offset: 8675 },
            end: { line: 162, column: 435, offset: 8680 }
          }
        },
        {
          type: 'text',
          value: ' affecting the rest of the pipeline.',
          position: {
            start: { line: 162, column: 435, offset: 8680 },
            end: { line: 162, column: 471, offset: 8716 }
          }
        }
      ],
      position: {
        start: { line: 162, column: 1, offset: 8246 },
        end: { line: 162, column: 471, offset: 8716 }
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
            start: { line: 164, column: 5, offset: 8722 },
            end: { line: 164, column: 15, offset: 8732 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 1, offset: 8718 },
        end: { line: 164, column: 15, offset: 8732 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro the the [A]synchronous Functional Programming paradigm. Thank you for taking the time to read. I hope to produce these articles at least one every few months.',
          position: {
            start: { line: 166, column: 1, offset: 8734 },
            end: { line: 166, column: 184, offset: 8917 }
          }
        }
      ],
      position: {
        start: { line: 166, column: 1, offset: 8734 },
        end: { line: 166, column: 184, offset: 8917 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are curious about rubico and would like to get started, you can visit the home page for the library, ',
          position: {
            start: { line: 168, column: 1, offset: 8919 },
            end: { line: 168, column: 109, offset: 9027 }
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
                start: { line: 168, column: 110, offset: 9028 },
                end: { line: 168, column: 121, offset: 9039 }
              }
            }
          ],
          position: {
            start: { line: 168, column: 109, offset: 9027 },
            end: { line: 168, column: 144, offset: 9062 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 168, column: 144, offset: 9062 },
            end: { line: 168, column: 145, offset: 9063 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 8919 },
        end: { line: 168, column: 145, offset: 9063 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below are quick links for some of the rubico operators used in the examples:',
          position: {
            start: { line: 170, column: 1, offset: 9065 },
            end: { line: 170, column: 77, offset: 9141 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 9065 },
        end: { line: 170, column: 77, offset: 9141 }
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
                        start: { line: 171, column: 5, offset: 9146 },
                        end: { line: 171, column: 9, offset: 9150 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 171, column: 4, offset: 9145 },
                    end: { line: 171, column: 41, offset: 9182 }
                  }
                }
              ],
              position: {
                start: { line: 171, column: 4, offset: 9145 },
                end: { line: 171, column: 41, offset: 9182 }
              }
            }
          ],
          position: {
            start: { line: 171, column: 2, offset: 9143 },
            end: { line: 171, column: 41, offset: 9182 }
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
                        start: { line: 172, column: 5, offset: 9187 },
                        end: { line: 172, column: 8, offset: 9190 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 172, column: 4, offset: 9186 },
                    end: { line: 172, column: 39, offset: 9221 }
                  }
                }
              ],
              position: {
                start: { line: 172, column: 4, offset: 9186 },
                end: { line: 172, column: 39, offset: 9221 }
              }
            }
          ],
          position: {
            start: { line: 172, column: 2, offset: 9184 },
            end: { line: 172, column: 39, offset: 9221 }
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
                        start: { line: 173, column: 5, offset: 9226 },
                        end: { line: 173, column: 8, offset: 9229 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 173, column: 4, offset: 9225 },
                    end: { line: 173, column: 39, offset: 9260 }
                  }
                }
              ],
              position: {
                start: { line: 173, column: 4, offset: 9225 },
                end: { line: 173, column: 39, offset: 9260 }
              }
            }
          ],
          position: {
            start: { line: 173, column: 2, offset: 9223 },
            end: { line: 173, column: 39, offset: 9260 }
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
                        start: { line: 174, column: 5, offset: 9265 },
                        end: { line: 174, column: 11, offset: 9271 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 174, column: 4, offset: 9264 },
                    end: { line: 174, column: 45, offset: 9305 }
                  }
                }
              ],
              position: {
                start: { line: 174, column: 4, offset: 9264 },
                end: { line: 174, column: 45, offset: 9305 }
              }
            }
          ],
          position: {
            start: { line: 174, column: 2, offset: 9262 },
            end: { line: 174, column: 45, offset: 9305 }
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
                        start: { line: 175, column: 5, offset: 9310 },
                        end: { line: 175, column: 12, offset: 9317 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 175, column: 4, offset: 9309 },
                    end: { line: 175, column: 47, offset: 9352 }
                  }
                }
              ],
              position: {
                start: { line: 175, column: 4, offset: 9309 },
                end: { line: 175, column: 47, offset: 9352 }
              }
            }
          ],
          position: {
            start: { line: 175, column: 2, offset: 9307 },
            end: { line: 175, column: 47, offset: 9352 }
          }
        }
      ],
      position: {
        start: { line: 171, column: 2, offset: 9143 },
        end: { line: 175, column: 47, offset: 9352 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 176, column: 1, offset: 9353 }
  }
}