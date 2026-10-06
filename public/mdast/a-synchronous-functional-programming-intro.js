export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Tong, King of Software at CLOUŢ\n' +
        'date: 2024-11-26\n' +
        'updated: 2026-10-06\n' +
        'path: /blog/a-synchronous-functional-programming-intro\n' +
        'description: An introduction to the [A]synchronous Functional Programming paradigm.\n' +
        'image: https://rubico.land/assets/rubico-logo-large.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 340 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 342 },
            end: { line: 11, column: 67, offset: 408 }
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
                start: { line: 11, column: 68, offset: 409 },
                end: { line: 11, column: 90, offset: 431 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 408 },
            end: { line: 11, column: 145, offset: 486 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 486 },
            end: { line: 11, column: 156, offset: 497 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 499 },
                end: { line: 11, column: 195, offset: 536 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 497 },
            end: { line: 11, column: 197, offset: 538 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 538 },
            end: { line: 11, column: 347, offset: 688 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 342 },
        end: { line: 11, column: 347, offset: 688 }
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
                    start: { line: 13, column: 4, offset: 693 },
                    end: { line: 13, column: 38, offset: 727 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 693 },
                end: { line: 13, column: 38, offset: 727 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 691 },
            end: { line: 13, column: 38, offset: 727 }
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
                    start: { line: 14, column: 4, offset: 731 },
                    end: { line: 14, column: 48, offset: 775 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 731 },
                end: { line: 14, column: 48, offset: 775 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 729 },
            end: { line: 14, column: 48, offset: 775 }
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
                    start: { line: 15, column: 4, offset: 779 },
                    end: { line: 15, column: 86, offset: 861 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 779 },
                end: { line: 15, column: 86, offset: 861 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 777 },
            end: { line: 15, column: 86, offset: 861 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 691 },
        end: { line: 15, column: 86, offset: 861 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 863 },
            end: { line: 17, column: 290, offset: 1152 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 863 },
        end: { line: 17, column: 290, offset: 1152 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'First Class Functions',
          position: {
            start: { line: 19, column: 5, offset: 1158 },
            end: { line: 19, column: 26, offset: 1179 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1154 },
        end: { line: 19, column: 26, offset: 1179 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'First class functions are functions as data types, as opposed to language constructs. A first class function can be passed to another function as an argument.',
          position: {
            start: { line: 20, column: 1, offset: 1180 },
            end: { line: 20, column: 159, offset: 1338 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1180 },
        end: { line: 20, column: 159, offset: 1338 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 22, column: 1, offset: 1340 },
            end: { line: 22, column: 23, offset: 1362 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 22, column: 23, offset: 1362 },
            end: { line: 22, column: 31, offset: 1370 }
          }
        },
        {
          type: 'text',
          value: ' is a first class function.',
          position: {
            start: { line: 22, column: 31, offset: 1370 },
            end: { line: 22, column: 58, offset: 1397 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1340 },
        end: { line: 22, column: 58, offset: 1397 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'function square(n) {\n' +
        '  return n ** 2\n' +
        '}\n' +
        '\n' +
        'const array = [1, 2, 3]\n' +
        '\n' +
        'const squared = array.map(square)\n' +
        '\n' +
        'console.log(squared)',
      position: {
        start: { line: 24, column: 1, offset: 1399 },
        end: { line: 34, column: 4, offset: 1550 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Higher-Order Functions',
          position: {
            start: { line: 36, column: 5, offset: 1556 },
            end: { line: 36, column: 27, offset: 1578 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1552 },
        end: { line: 36, column: 27, offset: 1578 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Higher-order functions are functions that take other functions as arguments.',
          position: {
            start: { line: 37, column: 1, offset: 1579 },
            end: { line: 37, column: 77, offset: 1655 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1579 },
        end: { line: 37, column: 77, offset: 1655 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 39, column: 1, offset: 1657 },
            end: { line: 39, column: 64, offset: 1720 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1657 },
        end: { line: 39, column: 64, offset: 1720 }
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
                        start: { line: 41, column: 6, offset: 1727 },
                        end: { line: 41, column: 22, offset: 1743 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 41, column: 4, offset: 1725 },
                    end: { line: 41, column: 24, offset: 1745 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 41, column: 24, offset: 1745 },
                    end: { line: 41, column: 78, offset: 1799 }
                  }
                }
              ],
              position: {
                start: { line: 41, column: 4, offset: 1725 },
                end: { line: 41, column: 78, offset: 1799 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 2, offset: 1723 },
            end: { line: 41, column: 78, offset: 1799 }
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
                        start: { line: 42, column: 6, offset: 1805 },
                        end: { line: 42, column: 23, offset: 1822 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 42, column: 4, offset: 1803 },
                    end: { line: 42, column: 25, offset: 1824 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 42, column: 25, offset: 1824 },
                    end: { line: 42, column: 100, offset: 1899 }
                  }
                }
              ],
              position: {
                start: { line: 42, column: 4, offset: 1803 },
                end: { line: 42, column: 100, offset: 1899 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 2, offset: 1801 },
            end: { line: 42, column: 100, offset: 1899 }
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
                        start: { line: 43, column: 6, offset: 1905 },
                        end: { line: 43, column: 19, offset: 1918 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 43, column: 4, offset: 1903 },
                    end: { line: 43, column: 21, offset: 1920 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 43, column: 21, offset: 1920 },
                    end: { line: 43, column: 107, offset: 2006 }
                  }
                }
              ],
              position: {
                start: { line: 43, column: 4, offset: 1903 },
                end: { line: 43, column: 107, offset: 2006 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 2, offset: 1901 },
            end: { line: 43, column: 107, offset: 2006 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 2, offset: 1723 },
        end: { line: 43, column: 107, offset: 2006 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 45, column: 1, offset: 2008 },
            end: { line: 45, column: 23, offset: 2030 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 45, column: 23, offset: 2030 },
            end: { line: 45, column: 32, offset: 2039 }
          }
        },
        {
          type: 'text',
          value: ' is a higher-order function.',
          position: {
            start: { line: 45, column: 32, offset: 2039 },
            end: { line: 45, column: 60, offset: 2067 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 2008 },
        end: { line: 45, column: 60, offset: 2067 }
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
        '\n' +
        'console.log(result)',
      position: {
        start: { line: 47, column: 1, offset: 2069 },
        end: { line: 61, column: 4, offset: 2327 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Pure Functions',
          position: {
            start: { line: 63, column: 5, offset: 2333 },
            end: { line: 63, column: 19, offset: 2347 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2329 },
        end: { line: 63, column: 19, offset: 2347 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 65, column: 1, offset: 2349 },
            end: { line: 65, column: 70, offset: 2418 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2349 },
        end: { line: 65, column: 70, offset: 2418 }
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
                        start: { line: 67, column: 6, offset: 2425 },
                        end: { line: 67, column: 21, offset: 2440 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 4, offset: 2423 },
                    end: { line: 67, column: 23, offset: 2442 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 67, column: 23, offset: 2442 },
                    end: { line: 67, column: 192, offset: 2611 }
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
                        start: { line: 67, column: 193, offset: 2612 },
                        end: { line: 67, column: 205, offset: 2624 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 192, offset: 2611 },
                    end: { line: 67, column: 254, offset: 2673 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 67, column: 254, offset: 2673 },
                    end: { line: 67, column: 256, offset: 2675 }
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2423 },
                end: { line: 67, column: 256, offset: 2675 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 2, offset: 2421 },
            end: { line: 67, column: 256, offset: 2675 }
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
                        start: { line: 68, column: 6, offset: 2681 },
                        end: { line: 68, column: 67, offset: 2742 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 68, column: 4, offset: 2679 },
                    end: { line: 68, column: 69, offset: 2744 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 68, column: 69, offset: 2744 },
                    end: { line: 68, column: 144, offset: 2819 }
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2679 },
                end: { line: 68, column: 144, offset: 2819 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 2, offset: 2677 },
            end: { line: 68, column: 144, offset: 2819 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 2, offset: 2421 },
        end: { line: 68, column: 144, offset: 2819 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 70, column: 1, offset: 2821 },
            end: { line: 70, column: 46, offset: 2866 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2821 },
        end: { line: 70, column: 46, offset: 2866 }
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
                    start: { line: 72, column: 4, offset: 2871 },
                    end: { line: 72, column: 82, offset: 2949 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2871 },
                end: { line: 72, column: 82, offset: 2949 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2869 },
            end: { line: 72, column: 82, offset: 2949 }
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
                    start: { line: 73, column: 4, offset: 2953 },
                    end: { line: 73, column: 91, offset: 3040 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2953 },
                end: { line: 73, column: 91, offset: 3040 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2951 },
            end: { line: 73, column: 91, offset: 3040 }
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
                    start: { line: 74, column: 4, offset: 3044 },
                    end: { line: 74, column: 26, offset: 3066 }
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
                        start: { line: 74, column: 27, offset: 3067 },
                        end: { line: 74, column: 35, offset: 3075 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 26, offset: 3066 },
                    end: { line: 74, column: 79, offset: 3119 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3044 },
                end: { line: 74, column: 79, offset: 3119 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3042 },
            end: { line: 74, column: 79, offset: 3119 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 2, offset: 2869 },
        end: { line: 74, column: 79, offset: 3119 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 76, column: 1, offset: 3121 },
            end: { line: 76, column: 14, offset: 3134 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 14, offset: 3134 },
            end: { line: 76, column: 19, offset: 3139 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 76, column: 19, offset: 3139 },
            end: { line: 76, column: 161, offset: 3281 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 161, offset: 3281 },
            end: { line: 76, column: 166, offset: 3286 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 76, column: 166, offset: 3286 },
            end: { line: 76, column: 204, offset: 3324 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3121 },
        end: { line: 76, column: 204, offset: 3324 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const add = (a, b) => a + b\n' +
        '\n' +
        'console.log(add(1, 2))\n' +
        '\n' +
        'console.log(add(1, 2))\n' +
        '\n' +
        'console.log(add(1, 2))',
      position: {
        start: { line: 78, column: 1, offset: 3326 },
        end: { line: 86, column: 4, offset: 3456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 88, column: 1, offset: 3458 },
            end: { line: 88, column: 43, offset: 3500 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3458 },
        end: { line: 88, column: 43, offset: 3500 }
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
                    start: { line: 90, column: 4, offset: 3505 },
                    end: { line: 90, column: 88, offset: 3589 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 3505 },
                end: { line: 90, column: 88, offset: 3589 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 3503 },
            end: { line: 90, column: 88, offset: 3589 }
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
                    start: { line: 91, column: 4, offset: 3593 },
                    end: { line: 91, column: 76, offset: 3665 }
                  }
                }
              ],
              position: {
                start: { line: 91, column: 4, offset: 3593 },
                end: { line: 91, column: 76, offset: 3665 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 2, offset: 3591 },
            end: { line: 91, column: 76, offset: 3665 }
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
                    start: { line: 92, column: 4, offset: 3669 },
                    end: { line: 92, column: 81, offset: 3746 }
                  }
                }
              ],
              position: {
                start: { line: 92, column: 4, offset: 3669 },
                end: { line: 92, column: 81, offset: 3746 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 2, offset: 3667 },
            end: { line: 92, column: 81, offset: 3746 }
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
                    start: { line: 93, column: 4, offset: 3750 },
                    end: { line: 93, column: 114, offset: 3860 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 4, offset: 3750 },
                end: { line: 93, column: 114, offset: 3860 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 2, offset: 3748 },
            end: { line: 93, column: 114, offset: 3860 }
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
                    start: { line: 94, column: 4, offset: 3864 },
                    end: { line: 94, column: 119, offset: 3979 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 4, offset: 3864 },
                end: { line: 94, column: 119, offset: 3979 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 2, offset: 3862 },
            end: { line: 94, column: 119, offset: 3979 }
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
                    start: { line: 95, column: 4, offset: 3983 },
                    end: { line: 95, column: 157, offset: 4136 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 4, offset: 3983 },
                end: { line: 95, column: 157, offset: 4136 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 2, offset: 3981 },
            end: { line: 95, column: 157, offset: 4136 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 2, offset: 3503 },
        end: { line: 95, column: 157, offset: 4136 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Partial Application',
          position: {
            start: { line: 97, column: 5, offset: 4142 },
            end: { line: 97, column: 24, offset: 4161 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4138 },
        end: { line: 97, column: 24, offset: 4161 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Partial application is a technique in functional programming where a curry function is used to partially apply arguments to a function, returning a partially applied function that expects the remaining arguments of the function.',
          position: {
            start: { line: 98, column: 1, offset: 4162 },
            end: { line: 98, column: 229, offset: 4390 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 4162 },
        end: { line: 98, column: 229, offset: 4390 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is an example of partial application:',
          position: {
            start: { line: 100, column: 1, offset: 4392 },
            end: { line: 100, column: 43, offset: 4434 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 1, offset: 4392 },
        end: { line: 100, column: 43, offset: 4434 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'function multiply(a, b, c) {\n' +
        '  return a * b * c\n' +
        '}\n' +
        '\n' +
        'const multiply__5 = curry(multiply, __, __, 5)\n' +
        'const multiply3_5 = curry(multiply__5, 3, __)\n' +
        '\n' +
        'const product = multiply3_5(4)\n' +
        '\n' +
        'console.log(product)',
      position: {
        start: { line: 102, column: 1, offset: 4436 },
        end: { line: 113, column: 4, offset: 4664 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Monad-Like Structures / Meaningful Objects',
          position: {
            start: { line: 115, column: 5, offset: 4670 },
            end: { line: 115, column: 47, offset: 4712 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 4666 },
        end: { line: 115, column: 47, offset: 4712 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A monad-like structure or meaningful object is an object that has some meaning beyond its name, for example the Array class creates arrays that can store other data types, and the Promise class creates a promise that can either complete or fail with a result on completion or error on failure. Arrays and Promises are examples of a meaningful objects.',
          position: {
            start: { line: 116, column: 1, offset: 4713 },
            end: { line: 116, column: 352, offset: 5064 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 4713 },
        end: { line: 116, column: 352, offset: 5064 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below example shows a promise ',
          position: {
            start: { line: 118, column: 1, offset: 5066 },
            end: { line: 118, column: 35, offset: 5100 }
          }
        },
        {
          type: 'inlineCode',
          value: 'promiseB',
          position: {
            start: { line: 118, column: 35, offset: 5100 },
            end: { line: 118, column: 45, offset: 5110 }
          }
        },
        {
          type: 'text',
          value: ' chaining functionality with its ',
          position: {
            start: { line: 118, column: 45, offset: 5110 },
            end: { line: 118, column: 78, offset: 5143 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 118, column: 78, offset: 5143 },
            end: { line: 118, column: 85, offset: 5150 }
          }
        },
        {
          type: 'text',
          value: ' method in a meaningful way, as if to say "wait for promiseA to resolve, and then execute the result on completion as n, returning n + 2".',
          position: {
            start: { line: 118, column: 85, offset: 5150 },
            end: { line: 118, column: 223, offset: 5288 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 5066 },
        end: { line: 118, column: 223, offset: 5288 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: 'const promiseA = Promise.resolve(1)\n' +
        '\n' +
        'const promiseB = promiseA.then(n => n + 2)\n' +
        '\n' +
        'promiseB.then(console.log)',
      position: {
        start: { line: 120, column: 1, offset: 5290 },
        end: { line: 126, column: 4, offset: 5428 }
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
            start: { line: 128, column: 5, offset: 5434 },
            end: { line: 128, column: 42, offset: 5471 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 5430 },
        end: { line: 128, column: 42, offset: 5471 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 130, column: 1, offset: 5473 },
            end: { line: 130, column: 270, offset: 5742 }
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
                start: { line: 130, column: 271, offset: 5743 },
                end: { line: 130, column: 279, offset: 5751 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 270, offset: 5742 },
            end: { line: 130, column: 370, offset: 5842 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 130, column: 370, offset: 5842 },
            end: { line: 130, column: 375, offset: 5847 }
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
                start: { line: 130, column: 376, offset: 5848 },
                end: { line: 130, column: 387, offset: 5859 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 375, offset: 5847 },
            end: { line: 130, column: 481, offset: 5953 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 130, column: 481, offset: 5953 },
            end: { line: 130, column: 552, offset: 6024 }
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 5473 },
        end: { line: 130, column: 552, offset: 6024 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 132, column: 1, offset: 6026 },
            end: { line: 132, column: 16, offset: 6041 }
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
                start: { line: 132, column: 17, offset: 6042 },
                end: { line: 132, column: 23, offset: 6048 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 16, offset: 6041 },
            end: { line: 132, column: 46, offset: 6071 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 132, column: 46, offset: 6071 },
            end: { line: 132, column: 120, offset: 6145 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 6026 },
        end: { line: 132, column: 120, offset: 6145 }
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
        '\n' +
        '])',
      position: {
        start: { line: 134, column: 1, offset: 6147 },
        end: { line: 153, column: 4, offset: 6536 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 155, column: 1, offset: 6538 },
            end: { line: 155, column: 65, offset: 6602 }
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
                start: { line: 155, column: 66, offset: 6603 },
                end: { line: 155, column: 73, offset: 6610 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 65, offset: 6602 },
            end: { line: 155, column: 89, offset: 6626 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 155, column: 89, offset: 6626 },
            end: { line: 155, column: 100, offset: 6637 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 155, column: 100, offset: 6637 },
            end: { line: 155, column: 109, offset: 6646 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 155, column: 109, offset: 6646 },
            end: { line: 155, column: 267, offset: 6804 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 155, column: 267, offset: 6804 },
            end: { line: 155, column: 284, offset: 6821 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 155, column: 284, offset: 6821 },
            end: { line: 155, column: 322, offset: 6859 }
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
                start: { line: 155, column: 323, offset: 6860 },
                end: { line: 155, column: 326, offset: 6863 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 322, offset: 6859 },
            end: { line: 155, column: 338, offset: 6875 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 155, column: 338, offset: 6875 },
            end: { line: 155, column: 476, offset: 7013 }
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
                start: { line: 155, column: 477, offset: 7014 },
                end: { line: 155, column: 484, offset: 7021 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 476, offset: 7013 },
            end: { line: 155, column: 500, offset: 7037 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 155, column: 500, offset: 7037 },
            end: { line: 155, column: 518, offset: 7055 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 155, column: 518, offset: 7055 },
            end: { line: 155, column: 531, offset: 7068 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 155, column: 531, offset: 7068 },
            end: { line: 155, column: 541, offset: 7078 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 6538 },
        end: { line: 155, column: 541, offset: 7078 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 157, column: 1, offset: 7080 },
            end: { line: 157, column: 23, offset: 7102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 157, column: 23, offset: 7102 },
            end: { line: 157, column: 36, offset: 7115 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 157, column: 36, offset: 7115 },
            end: { line: 157, column: 109, offset: 7188 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 157, column: 109, offset: 7188 },
            end: { line: 157, column: 118, offset: 7197 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 157, column: 118, offset: 7197 },
            end: { line: 157, column: 135, offset: 7214 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 157, column: 135, offset: 7214 },
            end: { line: 157, column: 140, offset: 7219 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 157, column: 140, offset: 7219 },
            end: { line: 157, column: 219, offset: 7298 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 157, column: 219, offset: 7298 },
            end: { line: 157, column: 238, offset: 7317 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 157, column: 238, offset: 7317 },
            end: { line: 157, column: 315, offset: 7394 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 157, column: 315, offset: 7394 },
            end: { line: 157, column: 324, offset: 7403 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 157, column: 324, offset: 7403 },
            end: { line: 157, column: 420, offset: 7499 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 7080 },
        end: { line: 157, column: 420, offset: 7499 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 159, column: 1, offset: 7501 },
            end: { line: 159, column: 45, offset: 7545 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7501 },
        end: { line: 159, column: 45, offset: 7545 }
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
        start: { line: 161, column: 1, offset: 7547 },
        end: { line: 195, column: 4, offset: 8172 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 197, column: 1, offset: 8174 },
            end: { line: 197, column: 23, offset: 8196 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 23, offset: 8196 },
            end: { line: 197, column: 28, offset: 8201 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 28, offset: 8201 },
            end: { line: 197, column: 33, offset: 8206 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 33, offset: 8206 },
            end: { line: 197, column: 41, offset: 8214 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 197, column: 41, offset: 8214 },
            end: { line: 197, column: 132, offset: 8305 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 132, offset: 8305 },
            end: { line: 197, column: 137, offset: 8310 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 197, column: 137, offset: 8310 },
            end: { line: 197, column: 141, offset: 8314 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 141, offset: 8314 },
            end: { line: 197, column: 149, offset: 8322 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 197, column: 149, offset: 8322 },
            end: { line: 197, column: 207, offset: 8380 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 207, offset: 8380 },
            end: { line: 197, column: 212, offset: 8385 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 212, offset: 8385 },
            end: { line: 197, column: 274, offset: 8447 }
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
                start: { line: 197, column: 275, offset: 8448 },
                end: { line: 197, column: 281, offset: 8454 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 274, offset: 8447 },
            end: { line: 197, column: 296, offset: 8469 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 197, column: 296, offset: 8469 },
            end: { line: 197, column: 315, offset: 8488 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 315, offset: 8488 },
            end: { line: 197, column: 323, offset: 8496 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 323, offset: 8496 },
            end: { line: 197, column: 385, offset: 8558 }
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
                start: { line: 197, column: 386, offset: 8559 },
                end: { line: 197, column: 389, offset: 8562 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 385, offset: 8558 },
            end: { line: 197, column: 401, offset: 8574 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 197, column: 401, offset: 8574 },
            end: { line: 197, column: 417, offset: 8590 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 197, column: 417, offset: 8590 },
            end: { line: 197, column: 425, offset: 8598 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 425, offset: 8598 },
            end: { line: 197, column: 430, offset: 8603 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 197, column: 430, offset: 8603 },
            end: { line: 197, column: 435, offset: 8608 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 197, column: 435, offset: 8608 },
            end: { line: 197, column: 490, offset: 8663 }
          }
        }
      ],
      position: {
        start: { line: 197, column: 1, offset: 8174 },
        end: { line: 197, column: 490, offset: 8663 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 199, column: 1, offset: 8665 },
            end: { line: 199, column: 100, offset: 8764 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 100, offset: 8764 },
            end: { line: 199, column: 109, offset: 8773 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 199, column: 109, offset: 8773 },
            end: { line: 199, column: 177, offset: 8841 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 199, column: 177, offset: 8841 },
            end: { line: 199, column: 183, offset: 8847 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 199, column: 183, offset: 8847 },
            end: { line: 199, column: 189, offset: 8853 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 189, offset: 8853 },
            end: { line: 199, column: 198, offset: 8862 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 199, column: 198, offset: 8862 },
            end: { line: 199, column: 261, offset: 8925 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 261, offset: 8925 },
            end: { line: 199, column: 270, offset: 8934 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 199, column: 270, offset: 8934 },
            end: { line: 199, column: 308, offset: 8972 }
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
                start: { line: 199, column: 309, offset: 8973 },
                end: { line: 199, column: 313, offset: 8977 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 308, offset: 8972 },
            end: { line: 199, column: 326, offset: 8990 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 199, column: 326, offset: 8990 },
            end: { line: 199, column: 327, offset: 8991 }
          }
        }
      ],
      position: {
        start: { line: 199, column: 1, offset: 8665 },
        end: { line: 199, column: 327, offset: 8991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 201, column: 1, offset: 8993 },
            end: { line: 201, column: 50, offset: 9042 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 50, offset: 9042 },
            end: { line: 201, column: 58, offset: 9050 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 201, column: 58, offset: 9050 },
            end: { line: 201, column: 94, offset: 9086 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 201, column: 94, offset: 9086 },
            end: { line: 201, column: 107, offset: 9099 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 201, column: 107, offset: 9099 },
            end: { line: 201, column: 173, offset: 9165 }
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
                start: { line: 201, column: 174, offset: 9166 },
                end: { line: 201, column: 177, offset: 9169 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 173, offset: 9165 },
            end: { line: 201, column: 189, offset: 9181 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 201, column: 189, offset: 9181 },
            end: { line: 201, column: 355, offset: 9347 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 201, column: 355, offset: 9347 },
            end: { line: 201, column: 360, offset: 9352 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 201, column: 360, offset: 9352 },
            end: { line: 201, column: 449, offset: 9441 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 449, offset: 9441 },
            end: { line: 201, column: 457, offset: 9449 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 201, column: 457, offset: 9449 },
            end: { line: 201, column: 497, offset: 9489 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 201, column: 497, offset: 9489 },
            end: { line: 201, column: 526, offset: 9518 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 201, column: 526, offset: 9518 },
            end: { line: 201, column: 577, offset: 9569 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 8993 },
        end: { line: 201, column: 577, offset: 9569 }
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
            start: { line: 203, column: 5, offset: 9575 },
            end: { line: 203, column: 15, offset: 9585 }
          }
        }
      ],
      position: {
        start: { line: 203, column: 1, offset: 9571 },
        end: { line: 203, column: 15, offset: 9585 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 205, column: 1, offset: 9587 },
            end: { line: 205, column: 80, offset: 9666 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 9587 },
        end: { line: 205, column: 80, offset: 9666 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 207, column: 1, offset: 9668 },
            end: { line: 207, column: 97, offset: 9764 }
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
                start: { line: 207, column: 98, offset: 9765 },
                end: { line: 207, column: 109, offset: 9776 }
              }
            }
          ],
          position: {
            start: { line: 207, column: 97, offset: 9764 },
            end: { line: 207, column: 113, offset: 9780 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 207, column: 113, offset: 9780 },
            end: { line: 207, column: 114, offset: 9781 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 9668 },
        end: { line: 207, column: 114, offset: 9781 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 208, column: 1, offset: 9782 }
  }
}