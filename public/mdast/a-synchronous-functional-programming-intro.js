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
        'image: https://rubico.land/assets/rubico-logo-3-3.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 338 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 340 },
            end: { line: 11, column: 67, offset: 406 }
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
                start: { line: 11, column: 68, offset: 407 },
                end: { line: 11, column: 90, offset: 429 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 406 },
            end: { line: 11, column: 145, offset: 484 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 484 },
            end: { line: 11, column: 156, offset: 495 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 497 },
                end: { line: 11, column: 195, offset: 534 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 495 },
            end: { line: 11, column: 197, offset: 536 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 536 },
            end: { line: 11, column: 347, offset: 686 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 340 },
        end: { line: 11, column: 347, offset: 686 }
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
                    start: { line: 13, column: 4, offset: 691 },
                    end: { line: 13, column: 38, offset: 725 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 691 },
                end: { line: 13, column: 38, offset: 725 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 689 },
            end: { line: 13, column: 38, offset: 725 }
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
                    start: { line: 14, column: 4, offset: 729 },
                    end: { line: 14, column: 48, offset: 773 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 729 },
                end: { line: 14, column: 48, offset: 773 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 727 },
            end: { line: 14, column: 48, offset: 773 }
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
                    start: { line: 15, column: 4, offset: 777 },
                    end: { line: 15, column: 86, offset: 859 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 777 },
                end: { line: 15, column: 86, offset: 859 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 775 },
            end: { line: 15, column: 86, offset: 859 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 689 },
        end: { line: 15, column: 86, offset: 859 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 861 },
            end: { line: 17, column: 290, offset: 1150 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 861 },
        end: { line: 17, column: 290, offset: 1150 }
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
            start: { line: 19, column: 5, offset: 1156 },
            end: { line: 19, column: 26, offset: 1177 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1152 },
        end: { line: 19, column: 26, offset: 1177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'First class functions are functions as data types, as opposed to language constructs. A first class function can be passed to another function as an argument.',
          position: {
            start: { line: 20, column: 1, offset: 1178 },
            end: { line: 20, column: 159, offset: 1336 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1178 },
        end: { line: 20, column: 159, offset: 1336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 22, column: 1, offset: 1338 },
            end: { line: 22, column: 23, offset: 1360 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 22, column: 23, offset: 1360 },
            end: { line: 22, column: 31, offset: 1368 }
          }
        },
        {
          type: 'text',
          value: ' is a first class function.',
          position: {
            start: { line: 22, column: 31, offset: 1368 },
            end: { line: 22, column: 58, offset: 1395 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1338 },
        end: { line: 22, column: 58, offset: 1395 }
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
        start: { line: 24, column: 1, offset: 1397 },
        end: { line: 34, column: 4, offset: 1548 }
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
            start: { line: 36, column: 5, offset: 1554 },
            end: { line: 36, column: 27, offset: 1576 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1550 },
        end: { line: 36, column: 27, offset: 1576 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Higher-order functions are functions that take other functions as arguments.',
          position: {
            start: { line: 37, column: 1, offset: 1577 },
            end: { line: 37, column: 77, offset: 1653 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1577 },
        end: { line: 37, column: 77, offset: 1653 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 39, column: 1, offset: 1655 },
            end: { line: 39, column: 64, offset: 1718 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1655 },
        end: { line: 39, column: 64, offset: 1718 }
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
                        start: { line: 41, column: 6, offset: 1725 },
                        end: { line: 41, column: 22, offset: 1741 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 41, column: 4, offset: 1723 },
                    end: { line: 41, column: 24, offset: 1743 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 41, column: 24, offset: 1743 },
                    end: { line: 41, column: 78, offset: 1797 }
                  }
                }
              ],
              position: {
                start: { line: 41, column: 4, offset: 1723 },
                end: { line: 41, column: 78, offset: 1797 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 2, offset: 1721 },
            end: { line: 41, column: 78, offset: 1797 }
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
                        start: { line: 42, column: 6, offset: 1803 },
                        end: { line: 42, column: 23, offset: 1820 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 42, column: 4, offset: 1801 },
                    end: { line: 42, column: 25, offset: 1822 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 42, column: 25, offset: 1822 },
                    end: { line: 42, column: 100, offset: 1897 }
                  }
                }
              ],
              position: {
                start: { line: 42, column: 4, offset: 1801 },
                end: { line: 42, column: 100, offset: 1897 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 2, offset: 1799 },
            end: { line: 42, column: 100, offset: 1897 }
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
                        start: { line: 43, column: 6, offset: 1903 },
                        end: { line: 43, column: 19, offset: 1916 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 43, column: 4, offset: 1901 },
                    end: { line: 43, column: 21, offset: 1918 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 43, column: 21, offset: 1918 },
                    end: { line: 43, column: 107, offset: 2004 }
                  }
                }
              ],
              position: {
                start: { line: 43, column: 4, offset: 1901 },
                end: { line: 43, column: 107, offset: 2004 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 2, offset: 1899 },
            end: { line: 43, column: 107, offset: 2004 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 2, offset: 1721 },
        end: { line: 43, column: 107, offset: 2004 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 45, column: 1, offset: 2006 },
            end: { line: 45, column: 23, offset: 2028 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 45, column: 23, offset: 2028 },
            end: { line: 45, column: 32, offset: 2037 }
          }
        },
        {
          type: 'text',
          value: ' is a higher-order function.',
          position: {
            start: { line: 45, column: 32, offset: 2037 },
            end: { line: 45, column: 60, offset: 2065 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 2006 },
        end: { line: 45, column: 60, offset: 2065 }
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
        start: { line: 47, column: 1, offset: 2067 },
        end: { line: 61, column: 4, offset: 2325 }
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
            start: { line: 63, column: 5, offset: 2331 },
            end: { line: 63, column: 19, offset: 2345 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2327 },
        end: { line: 63, column: 19, offset: 2345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 65, column: 1, offset: 2347 },
            end: { line: 65, column: 70, offset: 2416 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2347 },
        end: { line: 65, column: 70, offset: 2416 }
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
                        start: { line: 67, column: 6, offset: 2423 },
                        end: { line: 67, column: 21, offset: 2438 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 4, offset: 2421 },
                    end: { line: 67, column: 23, offset: 2440 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 67, column: 23, offset: 2440 },
                    end: { line: 67, column: 192, offset: 2609 }
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
                        start: { line: 67, column: 193, offset: 2610 },
                        end: { line: 67, column: 205, offset: 2622 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 192, offset: 2609 },
                    end: { line: 67, column: 254, offset: 2671 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 67, column: 254, offset: 2671 },
                    end: { line: 67, column: 256, offset: 2673 }
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2421 },
                end: { line: 67, column: 256, offset: 2673 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 2, offset: 2419 },
            end: { line: 67, column: 256, offset: 2673 }
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
                        start: { line: 68, column: 6, offset: 2679 },
                        end: { line: 68, column: 67, offset: 2740 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 68, column: 4, offset: 2677 },
                    end: { line: 68, column: 69, offset: 2742 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 68, column: 69, offset: 2742 },
                    end: { line: 68, column: 144, offset: 2817 }
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2677 },
                end: { line: 68, column: 144, offset: 2817 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 2, offset: 2675 },
            end: { line: 68, column: 144, offset: 2817 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 2, offset: 2419 },
        end: { line: 68, column: 144, offset: 2817 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 70, column: 1, offset: 2819 },
            end: { line: 70, column: 46, offset: 2864 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2819 },
        end: { line: 70, column: 46, offset: 2864 }
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
                    start: { line: 72, column: 4, offset: 2869 },
                    end: { line: 72, column: 82, offset: 2947 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2869 },
                end: { line: 72, column: 82, offset: 2947 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2867 },
            end: { line: 72, column: 82, offset: 2947 }
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
                    start: { line: 73, column: 4, offset: 2951 },
                    end: { line: 73, column: 91, offset: 3038 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2951 },
                end: { line: 73, column: 91, offset: 3038 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2949 },
            end: { line: 73, column: 91, offset: 3038 }
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
                    start: { line: 74, column: 4, offset: 3042 },
                    end: { line: 74, column: 26, offset: 3064 }
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
                        start: { line: 74, column: 27, offset: 3065 },
                        end: { line: 74, column: 35, offset: 3073 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 26, offset: 3064 },
                    end: { line: 74, column: 79, offset: 3117 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3042 },
                end: { line: 74, column: 79, offset: 3117 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3040 },
            end: { line: 74, column: 79, offset: 3117 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 2, offset: 2867 },
        end: { line: 74, column: 79, offset: 3117 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 76, column: 1, offset: 3119 },
            end: { line: 76, column: 14, offset: 3132 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 14, offset: 3132 },
            end: { line: 76, column: 19, offset: 3137 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 76, column: 19, offset: 3137 },
            end: { line: 76, column: 161, offset: 3279 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 161, offset: 3279 },
            end: { line: 76, column: 166, offset: 3284 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 76, column: 166, offset: 3284 },
            end: { line: 76, column: 204, offset: 3322 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3119 },
        end: { line: 76, column: 204, offset: 3322 }
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
        start: { line: 78, column: 1, offset: 3324 },
        end: { line: 86, column: 4, offset: 3454 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 88, column: 1, offset: 3456 },
            end: { line: 88, column: 43, offset: 3498 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3456 },
        end: { line: 88, column: 43, offset: 3498 }
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
                    start: { line: 90, column: 4, offset: 3503 },
                    end: { line: 90, column: 88, offset: 3587 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 3503 },
                end: { line: 90, column: 88, offset: 3587 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 3501 },
            end: { line: 90, column: 88, offset: 3587 }
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
                    start: { line: 91, column: 4, offset: 3591 },
                    end: { line: 91, column: 76, offset: 3663 }
                  }
                }
              ],
              position: {
                start: { line: 91, column: 4, offset: 3591 },
                end: { line: 91, column: 76, offset: 3663 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 2, offset: 3589 },
            end: { line: 91, column: 76, offset: 3663 }
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
                    start: { line: 92, column: 4, offset: 3667 },
                    end: { line: 92, column: 81, offset: 3744 }
                  }
                }
              ],
              position: {
                start: { line: 92, column: 4, offset: 3667 },
                end: { line: 92, column: 81, offset: 3744 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 2, offset: 3665 },
            end: { line: 92, column: 81, offset: 3744 }
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
                    start: { line: 93, column: 4, offset: 3748 },
                    end: { line: 93, column: 114, offset: 3858 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 4, offset: 3748 },
                end: { line: 93, column: 114, offset: 3858 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 2, offset: 3746 },
            end: { line: 93, column: 114, offset: 3858 }
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
                    start: { line: 94, column: 4, offset: 3862 },
                    end: { line: 94, column: 119, offset: 3977 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 4, offset: 3862 },
                end: { line: 94, column: 119, offset: 3977 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 2, offset: 3860 },
            end: { line: 94, column: 119, offset: 3977 }
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
                    start: { line: 95, column: 4, offset: 3981 },
                    end: { line: 95, column: 157, offset: 4134 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 4, offset: 3981 },
                end: { line: 95, column: 157, offset: 4134 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 2, offset: 3979 },
            end: { line: 95, column: 157, offset: 4134 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 2, offset: 3501 },
        end: { line: 95, column: 157, offset: 4134 }
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
            start: { line: 97, column: 5, offset: 4140 },
            end: { line: 97, column: 24, offset: 4159 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4136 },
        end: { line: 97, column: 24, offset: 4159 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Partial application is a technique in functional programming where a curry function is used to partially apply arguments to a function, returning a partially applied function that expects the remaining arguments of the function.',
          position: {
            start: { line: 98, column: 1, offset: 4160 },
            end: { line: 98, column: 229, offset: 4388 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 4160 },
        end: { line: 98, column: 229, offset: 4388 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is an example of partial application:',
          position: {
            start: { line: 100, column: 1, offset: 4390 },
            end: { line: 100, column: 43, offset: 4432 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 1, offset: 4390 },
        end: { line: 100, column: 43, offset: 4432 }
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
        start: { line: 102, column: 1, offset: 4434 },
        end: { line: 113, column: 4, offset: 4662 }
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
            start: { line: 115, column: 5, offset: 4668 },
            end: { line: 115, column: 47, offset: 4710 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 4664 },
        end: { line: 115, column: 47, offset: 4710 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A monad-like structure or meaningful object is an object that has some meaning beyond its name, for example the Array class creates arrays that can store other data types, and the Promise class creates a promise that can either complete or fail with a result on completion or error on failure. Arrays and Promises are examples of a meaningful objects.',
          position: {
            start: { line: 116, column: 1, offset: 4711 },
            end: { line: 116, column: 352, offset: 5062 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 4711 },
        end: { line: 116, column: 352, offset: 5062 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below example shows a promise ',
          position: {
            start: { line: 118, column: 1, offset: 5064 },
            end: { line: 118, column: 35, offset: 5098 }
          }
        },
        {
          type: 'inlineCode',
          value: 'promiseB',
          position: {
            start: { line: 118, column: 35, offset: 5098 },
            end: { line: 118, column: 45, offset: 5108 }
          }
        },
        {
          type: 'text',
          value: ' chaining functionality with its ',
          position: {
            start: { line: 118, column: 45, offset: 5108 },
            end: { line: 118, column: 78, offset: 5141 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 118, column: 78, offset: 5141 },
            end: { line: 118, column: 85, offset: 5148 }
          }
        },
        {
          type: 'text',
          value: ' method in a meaningful way, as if to say "wait for promiseA to resolve, and then execute the result on completion as n, returning n + 2".',
          position: {
            start: { line: 118, column: 85, offset: 5148 },
            end: { line: 118, column: 223, offset: 5286 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 5064 },
        end: { line: 118, column: 223, offset: 5286 }
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
        start: { line: 120, column: 1, offset: 5288 },
        end: { line: 126, column: 4, offset: 5426 }
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
            start: { line: 128, column: 5, offset: 5432 },
            end: { line: 128, column: 42, offset: 5469 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 5428 },
        end: { line: 128, column: 42, offset: 5469 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 130, column: 1, offset: 5471 },
            end: { line: 130, column: 270, offset: 5740 }
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
                start: { line: 130, column: 271, offset: 5741 },
                end: { line: 130, column: 279, offset: 5749 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 270, offset: 5740 },
            end: { line: 130, column: 370, offset: 5840 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 130, column: 370, offset: 5840 },
            end: { line: 130, column: 375, offset: 5845 }
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
                start: { line: 130, column: 376, offset: 5846 },
                end: { line: 130, column: 387, offset: 5857 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 375, offset: 5845 },
            end: { line: 130, column: 481, offset: 5951 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 130, column: 481, offset: 5951 },
            end: { line: 130, column: 552, offset: 6022 }
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 5471 },
        end: { line: 130, column: 552, offset: 6022 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 132, column: 1, offset: 6024 },
            end: { line: 132, column: 16, offset: 6039 }
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
                start: { line: 132, column: 17, offset: 6040 },
                end: { line: 132, column: 23, offset: 6046 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 16, offset: 6039 },
            end: { line: 132, column: 46, offset: 6069 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 132, column: 46, offset: 6069 },
            end: { line: 132, column: 120, offset: 6143 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 6024 },
        end: { line: 132, column: 120, offset: 6143 }
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
        start: { line: 134, column: 1, offset: 6145 },
        end: { line: 153, column: 4, offset: 6534 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 155, column: 1, offset: 6536 },
            end: { line: 155, column: 65, offset: 6600 }
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
                start: { line: 155, column: 66, offset: 6601 },
                end: { line: 155, column: 73, offset: 6608 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 65, offset: 6600 },
            end: { line: 155, column: 89, offset: 6624 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 155, column: 89, offset: 6624 },
            end: { line: 155, column: 100, offset: 6635 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 155, column: 100, offset: 6635 },
            end: { line: 155, column: 109, offset: 6644 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 155, column: 109, offset: 6644 },
            end: { line: 155, column: 267, offset: 6802 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 155, column: 267, offset: 6802 },
            end: { line: 155, column: 284, offset: 6819 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 155, column: 284, offset: 6819 },
            end: { line: 155, column: 322, offset: 6857 }
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
                start: { line: 155, column: 323, offset: 6858 },
                end: { line: 155, column: 326, offset: 6861 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 322, offset: 6857 },
            end: { line: 155, column: 338, offset: 6873 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 155, column: 338, offset: 6873 },
            end: { line: 155, column: 476, offset: 7011 }
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
                start: { line: 155, column: 477, offset: 7012 },
                end: { line: 155, column: 484, offset: 7019 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 476, offset: 7011 },
            end: { line: 155, column: 500, offset: 7035 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 155, column: 500, offset: 7035 },
            end: { line: 155, column: 518, offset: 7053 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 155, column: 518, offset: 7053 },
            end: { line: 155, column: 531, offset: 7066 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 155, column: 531, offset: 7066 },
            end: { line: 155, column: 541, offset: 7076 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 6536 },
        end: { line: 155, column: 541, offset: 7076 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 157, column: 1, offset: 7078 },
            end: { line: 157, column: 23, offset: 7100 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 157, column: 23, offset: 7100 },
            end: { line: 157, column: 36, offset: 7113 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 157, column: 36, offset: 7113 },
            end: { line: 157, column: 109, offset: 7186 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 157, column: 109, offset: 7186 },
            end: { line: 157, column: 118, offset: 7195 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 157, column: 118, offset: 7195 },
            end: { line: 157, column: 135, offset: 7212 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 157, column: 135, offset: 7212 },
            end: { line: 157, column: 140, offset: 7217 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 157, column: 140, offset: 7217 },
            end: { line: 157, column: 219, offset: 7296 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 157, column: 219, offset: 7296 },
            end: { line: 157, column: 238, offset: 7315 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 157, column: 238, offset: 7315 },
            end: { line: 157, column: 315, offset: 7392 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 157, column: 315, offset: 7392 },
            end: { line: 157, column: 324, offset: 7401 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 157, column: 324, offset: 7401 },
            end: { line: 157, column: 420, offset: 7497 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 7078 },
        end: { line: 157, column: 420, offset: 7497 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 159, column: 1, offset: 7499 },
            end: { line: 159, column: 45, offset: 7543 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7499 },
        end: { line: 159, column: 45, offset: 7543 }
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
        start: { line: 161, column: 1, offset: 7545 },
        end: { line: 195, column: 4, offset: 8170 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 197, column: 1, offset: 8172 },
            end: { line: 197, column: 23, offset: 8194 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 23, offset: 8194 },
            end: { line: 197, column: 28, offset: 8199 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 28, offset: 8199 },
            end: { line: 197, column: 33, offset: 8204 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 33, offset: 8204 },
            end: { line: 197, column: 41, offset: 8212 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 197, column: 41, offset: 8212 },
            end: { line: 197, column: 132, offset: 8303 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 132, offset: 8303 },
            end: { line: 197, column: 137, offset: 8308 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 197, column: 137, offset: 8308 },
            end: { line: 197, column: 141, offset: 8312 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 141, offset: 8312 },
            end: { line: 197, column: 149, offset: 8320 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 197, column: 149, offset: 8320 },
            end: { line: 197, column: 207, offset: 8378 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 207, offset: 8378 },
            end: { line: 197, column: 212, offset: 8383 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 212, offset: 8383 },
            end: { line: 197, column: 274, offset: 8445 }
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
                start: { line: 197, column: 275, offset: 8446 },
                end: { line: 197, column: 281, offset: 8452 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 274, offset: 8445 },
            end: { line: 197, column: 296, offset: 8467 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 197, column: 296, offset: 8467 },
            end: { line: 197, column: 315, offset: 8486 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 315, offset: 8486 },
            end: { line: 197, column: 323, offset: 8494 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 323, offset: 8494 },
            end: { line: 197, column: 385, offset: 8556 }
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
                start: { line: 197, column: 386, offset: 8557 },
                end: { line: 197, column: 389, offset: 8560 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 385, offset: 8556 },
            end: { line: 197, column: 401, offset: 8572 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 197, column: 401, offset: 8572 },
            end: { line: 197, column: 417, offset: 8588 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 197, column: 417, offset: 8588 },
            end: { line: 197, column: 425, offset: 8596 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 425, offset: 8596 },
            end: { line: 197, column: 430, offset: 8601 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 197, column: 430, offset: 8601 },
            end: { line: 197, column: 435, offset: 8606 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 197, column: 435, offset: 8606 },
            end: { line: 197, column: 490, offset: 8661 }
          }
        }
      ],
      position: {
        start: { line: 197, column: 1, offset: 8172 },
        end: { line: 197, column: 490, offset: 8661 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 199, column: 1, offset: 8663 },
            end: { line: 199, column: 100, offset: 8762 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 100, offset: 8762 },
            end: { line: 199, column: 109, offset: 8771 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 199, column: 109, offset: 8771 },
            end: { line: 199, column: 177, offset: 8839 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 199, column: 177, offset: 8839 },
            end: { line: 199, column: 183, offset: 8845 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 199, column: 183, offset: 8845 },
            end: { line: 199, column: 189, offset: 8851 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 189, offset: 8851 },
            end: { line: 199, column: 198, offset: 8860 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 199, column: 198, offset: 8860 },
            end: { line: 199, column: 261, offset: 8923 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 261, offset: 8923 },
            end: { line: 199, column: 270, offset: 8932 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 199, column: 270, offset: 8932 },
            end: { line: 199, column: 308, offset: 8970 }
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
                start: { line: 199, column: 309, offset: 8971 },
                end: { line: 199, column: 313, offset: 8975 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 308, offset: 8970 },
            end: { line: 199, column: 326, offset: 8988 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 199, column: 326, offset: 8988 },
            end: { line: 199, column: 327, offset: 8989 }
          }
        }
      ],
      position: {
        start: { line: 199, column: 1, offset: 8663 },
        end: { line: 199, column: 327, offset: 8989 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 201, column: 1, offset: 8991 },
            end: { line: 201, column: 50, offset: 9040 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 50, offset: 9040 },
            end: { line: 201, column: 58, offset: 9048 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 201, column: 58, offset: 9048 },
            end: { line: 201, column: 94, offset: 9084 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 201, column: 94, offset: 9084 },
            end: { line: 201, column: 107, offset: 9097 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 201, column: 107, offset: 9097 },
            end: { line: 201, column: 173, offset: 9163 }
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
                start: { line: 201, column: 174, offset: 9164 },
                end: { line: 201, column: 177, offset: 9167 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 173, offset: 9163 },
            end: { line: 201, column: 189, offset: 9179 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 201, column: 189, offset: 9179 },
            end: { line: 201, column: 355, offset: 9345 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 201, column: 355, offset: 9345 },
            end: { line: 201, column: 360, offset: 9350 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 201, column: 360, offset: 9350 },
            end: { line: 201, column: 449, offset: 9439 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 449, offset: 9439 },
            end: { line: 201, column: 457, offset: 9447 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 201, column: 457, offset: 9447 },
            end: { line: 201, column: 497, offset: 9487 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 201, column: 497, offset: 9487 },
            end: { line: 201, column: 526, offset: 9516 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 201, column: 526, offset: 9516 },
            end: { line: 201, column: 577, offset: 9567 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 8991 },
        end: { line: 201, column: 577, offset: 9567 }
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
            start: { line: 203, column: 5, offset: 9573 },
            end: { line: 203, column: 15, offset: 9583 }
          }
        }
      ],
      position: {
        start: { line: 203, column: 1, offset: 9569 },
        end: { line: 203, column: 15, offset: 9583 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 205, column: 1, offset: 9585 },
            end: { line: 205, column: 80, offset: 9664 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 9585 },
        end: { line: 205, column: 80, offset: 9664 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 207, column: 1, offset: 9666 },
            end: { line: 207, column: 97, offset: 9762 }
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
                start: { line: 207, column: 98, offset: 9763 },
                end: { line: 207, column: 109, offset: 9774 }
              }
            }
          ],
          position: {
            start: { line: 207, column: 97, offset: 9762 },
            end: { line: 207, column: 113, offset: 9778 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 207, column: 113, offset: 9778 },
            end: { line: 207, column: 114, offset: 9779 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 9666 },
        end: { line: 207, column: 114, offset: 9779 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 208, column: 1, offset: 9780 }
  }
}