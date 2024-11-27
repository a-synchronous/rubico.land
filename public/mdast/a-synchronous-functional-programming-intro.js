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
        start: { line: 97, column: 1, offset: 5541 },
        end: { line: 115, column: 4, offset: 5926 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the ',
          position: {
            start: { line: 117, column: 1, offset: 5928 },
            end: { line: 117, column: 58, offset: 5985 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 117, column: 58, offset: 5985 },
            end: { line: 117, column: 64, offset: 5991 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 117, column: 64, offset: 5991 },
            end: { line: 117, column: 75, offset: 6002 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 117, column: 75, offset: 6002 },
            end: { line: 117, column: 81, offset: 6008 }
          }
        },
        {
          type: 'text',
          value: ' enables us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 117, column: 81, offset: 6008 },
            end: { line: 117, column: 240, offset: 6167 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 117, column: 240, offset: 6167 },
            end: { line: 117, column: 257, offset: 6184 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled rubico ',
          position: {
            start: { line: 117, column: 257, offset: 6184 },
            end: { line: 117, column: 295, offset: 6222 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 117, column: 295, offset: 6222 },
            end: { line: 117, column: 300, offset: 6227 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the rubico ',
          position: {
            start: { line: 117, column: 300, offset: 6227 },
            end: { line: 117, column: 438, offset: 6365 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 117, column: 438, offset: 6365 },
            end: { line: 117, column: 447, offset: 6374 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 117, column: 447, offset: 6374 },
            end: { line: 117, column: 465, offset: 6392 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 117, column: 465, offset: 6392 },
            end: { line: 117, column: 478, offset: 6405 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 117, column: 478, offset: 6405 },
            end: { line: 117, column: 488, offset: 6415 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5928 },
        end: { line: 117, column: 488, offset: 6415 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 119, column: 1, offset: 6417 },
            end: { line: 119, column: 23, offset: 6439 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 119, column: 23, offset: 6439 },
            end: { line: 119, column: 36, offset: 6452 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 119, column: 36, offset: 6452 },
            end: { line: 119, column: 109, offset: 6525 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 119, column: 109, offset: 6525 },
            end: { line: 119, column: 118, offset: 6534 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 119, column: 118, offset: 6534 },
            end: { line: 119, column: 135, offset: 6551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 119, column: 135, offset: 6551 },
            end: { line: 119, column: 140, offset: 6556 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 119, column: 140, offset: 6556 },
            end: { line: 119, column: 219, offset: 6635 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...',
          position: {
            start: { line: 119, column: 219, offset: 6635 },
            end: { line: 119, column: 237, offset: 6653 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 119, column: 237, offset: 6653 },
            end: { line: 119, column: 403, offset: 6819 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6417 },
        end: { line: 119, column: 403, offset: 6819 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 121, column: 1, offset: 6821 },
            end: { line: 121, column: 45, offset: 6865 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6821 },
        end: { line: 121, column: 45, offset: 6865 }
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
        start: { line: 123, column: 1, offset: 6867 },
        end: { line: 157, column: 4, offset: 7492 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 159, column: 1, offset: 7494 },
            end: { line: 159, column: 23, offset: 7516 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 23, offset: 7516 },
            end: { line: 159, column: 28, offset: 7521 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 28, offset: 7521 },
            end: { line: 159, column: 33, offset: 7526 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 33, offset: 7526 },
            end: { line: 159, column: 41, offset: 7534 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. You can see they are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 159, column: 41, offset: 7534 },
            end: { line: 159, column: 144, offset: 7637 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 144, offset: 7637 },
            end: { line: 159, column: 149, offset: 7642 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 159, column: 149, offset: 7642 },
            end: { line: 159, column: 153, offset: 7646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 153, offset: 7646 },
            end: { line: 159, column: 161, offset: 7654 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 159, column: 161, offset: 7654 },
            end: { line: 159, column: 219, offset: 7712 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 219, offset: 7712 },
            end: { line: 159, column: 224, offset: 7717 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 159, column: 224, offset: 7717 },
            end: { line: 159, column: 279, offset: 7772 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 279, offset: 7772 },
            end: { line: 159, column: 287, offset: 7780 }
          }
        },
        {
          type: 'text',
          value: ' higher order function, and the ',
          position: {
            start: { line: 159, column: 287, offset: 7780 },
            end: { line: 159, column: 319, offset: 7812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 319, offset: 7812 },
            end: { line: 159, column: 327, offset: 7820 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the ',
          position: {
            start: { line: 159, column: 327, offset: 7820 },
            end: { line: 159, column: 382, offset: 7875 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 159, column: 382, offset: 7875 },
            end: { line: 159, column: 387, offset: 7880 }
          }
        },
        {
          type: 'text',
          value: ' higher order function. The composition is similar to what we have seen in the previous example; ',
          position: {
            start: { line: 159, column: 387, offset: 7880 },
            end: { line: 159, column: 484, offset: 7977 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 159, column: 484, offset: 7977 },
            end: { line: 159, column: 490, offset: 7983 }
          }
        },
        {
          type: 'text',
          value: ' creates the overarching composition, and each operation expressed as miniature function composition follows sequentially. We see a new operation in the above example as well with ',
          position: {
            start: { line: 159, column: 490, offset: 7983 },
            end: { line: 159, column: 670, offset: 8163 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 670, offset: 8163 },
            end: { line: 159, column: 678, offset: 8171 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 159, column: 678, offset: 8171 },
            end: { line: 159, column: 714, offset: 8207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 159, column: 714, offset: 8207 },
            end: { line: 159, column: 727, offset: 8220 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see a new rubico operator ',
          position: {
            start: { line: 159, column: 727, offset: 8220 },
            end: { line: 159, column: 802, offset: 8295 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 159, column: 802, offset: 8295 },
            end: { line: 159, column: 807, offset: 8300 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 159, column: 807, offset: 8300 },
            end: { line: 159, column: 973, offset: 8466 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 159, column: 973, offset: 8466 },
            end: { line: 159, column: 978, offset: 8471 }
          }
        },
        {
          type: 'text',
          value: ", the return value of the provided first class function is discarded, so that is why we don't see a return value for the first class function provided to ",
          position: {
            start: { line: 159, column: 978, offset: 8471 },
            end: { line: 159, column: 1132, offset: 8625 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 159, column: 1132, offset: 8625 },
            end: { line: 159, column: 1137, offset: 8630 }
          }
        },
        {
          type: 'text',
          value: ' in the example.',
          position: {
            start: { line: 159, column: 1137, offset: 8630 },
            end: { line: 159, column: 1153, offset: 8646 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7494 },
        end: { line: 159, column: 1153, offset: 8646 }
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
            start: { line: 161, column: 5, offset: 8652 },
            end: { line: 161, column: 15, offset: 8662 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8648 },
        end: { line: 161, column: 15, offset: 8662 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro the the [A]synchronous Functional Programming paradigm. Thank you for taking the time to read. I hope to produce these articles at least one every few months.',
          position: {
            start: { line: 163, column: 1, offset: 8664 },
            end: { line: 163, column: 184, offset: 8847 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8664 },
        end: { line: 163, column: 184, offset: 8847 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'If you are curious about rubico and would like to get started, you can visit the home page for the library, ',
          position: {
            start: { line: 165, column: 1, offset: 8849 },
            end: { line: 165, column: 109, offset: 8957 }
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
                start: { line: 165, column: 110, offset: 8958 },
                end: { line: 165, column: 121, offset: 8969 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 109, offset: 8957 },
            end: { line: 165, column: 144, offset: 8992 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 165, column: 144, offset: 8992 },
            end: { line: 165, column: 145, offset: 8993 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 8849 },
        end: { line: 165, column: 145, offset: 8993 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below are quick links for some of the rubico operators used in the examples:',
          position: {
            start: { line: 167, column: 1, offset: 8995 },
            end: { line: 167, column: 77, offset: 9071 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 8995 },
        end: { line: 167, column: 77, offset: 9071 }
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
                        start: { line: 168, column: 5, offset: 9076 },
                        end: { line: 168, column: 9, offset: 9080 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 168, column: 4, offset: 9075 },
                    end: { line: 168, column: 41, offset: 9112 }
                  }
                }
              ],
              position: {
                start: { line: 168, column: 4, offset: 9075 },
                end: { line: 168, column: 41, offset: 9112 }
              }
            }
          ],
          position: {
            start: { line: 168, column: 2, offset: 9073 },
            end: { line: 168, column: 41, offset: 9112 }
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
                        start: { line: 169, column: 5, offset: 9117 },
                        end: { line: 169, column: 8, offset: 9120 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 169, column: 4, offset: 9116 },
                    end: { line: 169, column: 39, offset: 9151 }
                  }
                }
              ],
              position: {
                start: { line: 169, column: 4, offset: 9116 },
                end: { line: 169, column: 39, offset: 9151 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 2, offset: 9114 },
            end: { line: 169, column: 39, offset: 9151 }
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
                        start: { line: 170, column: 5, offset: 9156 },
                        end: { line: 170, column: 8, offset: 9159 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 170, column: 4, offset: 9155 },
                    end: { line: 170, column: 39, offset: 9190 }
                  }
                }
              ],
              position: {
                start: { line: 170, column: 4, offset: 9155 },
                end: { line: 170, column: 39, offset: 9190 }
              }
            }
          ],
          position: {
            start: { line: 170, column: 2, offset: 9153 },
            end: { line: 170, column: 39, offset: 9190 }
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
                        start: { line: 171, column: 5, offset: 9195 },
                        end: { line: 171, column: 11, offset: 9201 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 171, column: 4, offset: 9194 },
                    end: { line: 171, column: 45, offset: 9235 }
                  }
                }
              ],
              position: {
                start: { line: 171, column: 4, offset: 9194 },
                end: { line: 171, column: 45, offset: 9235 }
              }
            }
          ],
          position: {
            start: { line: 171, column: 2, offset: 9192 },
            end: { line: 171, column: 45, offset: 9235 }
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
                        start: { line: 172, column: 5, offset: 9240 },
                        end: { line: 172, column: 12, offset: 9247 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 172, column: 4, offset: 9239 },
                    end: { line: 172, column: 47, offset: 9282 }
                  }
                }
              ],
              position: {
                start: { line: 172, column: 4, offset: 9239 },
                end: { line: 172, column: 47, offset: 9282 }
              }
            }
          ],
          position: {
            start: { line: 172, column: 2, offset: 9237 },
            end: { line: 172, column: 47, offset: 9282 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 2, offset: 9073 },
        end: { line: 172, column: 47, offset: 9282 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 173, column: 1, offset: 9283 }
  }
}