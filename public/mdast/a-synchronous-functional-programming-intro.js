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
        'image: https://rubico.land/assets/rubico-logo-3.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 338 },
            end: { line: 11, column: 67, offset: 404 }
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
                start: { line: 11, column: 68, offset: 405 },
                end: { line: 11, column: 90, offset: 427 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 404 },
            end: { line: 11, column: 145, offset: 482 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 482 },
            end: { line: 11, column: 156, offset: 493 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 495 },
                end: { line: 11, column: 195, offset: 532 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 493 },
            end: { line: 11, column: 197, offset: 534 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 534 },
            end: { line: 11, column: 347, offset: 684 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 338 },
        end: { line: 11, column: 347, offset: 684 }
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
                    start: { line: 13, column: 4, offset: 689 },
                    end: { line: 13, column: 38, offset: 723 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 689 },
                end: { line: 13, column: 38, offset: 723 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 687 },
            end: { line: 13, column: 38, offset: 723 }
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
                    start: { line: 14, column: 4, offset: 727 },
                    end: { line: 14, column: 48, offset: 771 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 727 },
                end: { line: 14, column: 48, offset: 771 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 725 },
            end: { line: 14, column: 48, offset: 771 }
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
                    start: { line: 15, column: 4, offset: 775 },
                    end: { line: 15, column: 86, offset: 857 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 775 },
                end: { line: 15, column: 86, offset: 857 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 773 },
            end: { line: 15, column: 86, offset: 857 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 687 },
        end: { line: 15, column: 86, offset: 857 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 859 },
            end: { line: 17, column: 290, offset: 1148 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 859 },
        end: { line: 17, column: 290, offset: 1148 }
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
            start: { line: 19, column: 5, offset: 1154 },
            end: { line: 19, column: 26, offset: 1175 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1150 },
        end: { line: 19, column: 26, offset: 1175 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'First class functions are functions as data types, as opposed to language constructs. A first class function can be passed to another function as an argument.',
          position: {
            start: { line: 20, column: 1, offset: 1176 },
            end: { line: 20, column: 159, offset: 1334 }
          }
        }
      ],
      position: {
        start: { line: 20, column: 1, offset: 1176 },
        end: { line: 20, column: 159, offset: 1334 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 22, column: 1, offset: 1336 },
            end: { line: 22, column: 23, offset: 1358 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 22, column: 23, offset: 1358 },
            end: { line: 22, column: 31, offset: 1366 }
          }
        },
        {
          type: 'text',
          value: ' is a first class function.',
          position: {
            start: { line: 22, column: 31, offset: 1366 },
            end: { line: 22, column: 58, offset: 1393 }
          }
        }
      ],
      position: {
        start: { line: 22, column: 1, offset: 1336 },
        end: { line: 22, column: 58, offset: 1393 }
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
        start: { line: 24, column: 1, offset: 1395 },
        end: { line: 34, column: 4, offset: 1546 }
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
            start: { line: 36, column: 5, offset: 1552 },
            end: { line: 36, column: 27, offset: 1574 }
          }
        }
      ],
      position: {
        start: { line: 36, column: 1, offset: 1548 },
        end: { line: 36, column: 27, offset: 1574 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Higher-order functions are functions that take other functions as arguments.',
          position: {
            start: { line: 37, column: 1, offset: 1575 },
            end: { line: 37, column: 77, offset: 1651 }
          }
        }
      ],
      position: {
        start: { line: 37, column: 1, offset: 1575 },
        end: { line: 37, column: 77, offset: 1651 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 39, column: 1, offset: 1653 },
            end: { line: 39, column: 64, offset: 1716 }
          }
        }
      ],
      position: {
        start: { line: 39, column: 1, offset: 1653 },
        end: { line: 39, column: 64, offset: 1716 }
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
                        start: { line: 41, column: 6, offset: 1723 },
                        end: { line: 41, column: 22, offset: 1739 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 41, column: 4, offset: 1721 },
                    end: { line: 41, column: 24, offset: 1741 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 41, column: 24, offset: 1741 },
                    end: { line: 41, column: 78, offset: 1795 }
                  }
                }
              ],
              position: {
                start: { line: 41, column: 4, offset: 1721 },
                end: { line: 41, column: 78, offset: 1795 }
              }
            }
          ],
          position: {
            start: { line: 41, column: 2, offset: 1719 },
            end: { line: 41, column: 78, offset: 1795 }
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
                        start: { line: 42, column: 6, offset: 1801 },
                        end: { line: 42, column: 23, offset: 1818 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 42, column: 4, offset: 1799 },
                    end: { line: 42, column: 25, offset: 1820 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 42, column: 25, offset: 1820 },
                    end: { line: 42, column: 100, offset: 1895 }
                  }
                }
              ],
              position: {
                start: { line: 42, column: 4, offset: 1799 },
                end: { line: 42, column: 100, offset: 1895 }
              }
            }
          ],
          position: {
            start: { line: 42, column: 2, offset: 1797 },
            end: { line: 42, column: 100, offset: 1895 }
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
                        start: { line: 43, column: 6, offset: 1901 },
                        end: { line: 43, column: 19, offset: 1914 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 43, column: 4, offset: 1899 },
                    end: { line: 43, column: 21, offset: 1916 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 43, column: 21, offset: 1916 },
                    end: { line: 43, column: 107, offset: 2002 }
                  }
                }
              ],
              position: {
                start: { line: 43, column: 4, offset: 1899 },
                end: { line: 43, column: 107, offset: 2002 }
              }
            }
          ],
          position: {
            start: { line: 43, column: 2, offset: 1897 },
            end: { line: 43, column: 107, offset: 2002 }
          }
        }
      ],
      position: {
        start: { line: 41, column: 2, offset: 1719 },
        end: { line: 43, column: 107, offset: 2002 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the example below, ',
          position: {
            start: { line: 45, column: 1, offset: 2004 },
            end: { line: 45, column: 23, offset: 2026 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 45, column: 23, offset: 2026 },
            end: { line: 45, column: 32, offset: 2035 }
          }
        },
        {
          type: 'text',
          value: ' is a higher-order function.',
          position: {
            start: { line: 45, column: 32, offset: 2035 },
            end: { line: 45, column: 60, offset: 2063 }
          }
        }
      ],
      position: {
        start: { line: 45, column: 1, offset: 2004 },
        end: { line: 45, column: 60, offset: 2063 }
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
        start: { line: 47, column: 1, offset: 2065 },
        end: { line: 61, column: 4, offset: 2323 }
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
            start: { line: 63, column: 5, offset: 2329 },
            end: { line: 63, column: 19, offset: 2343 }
          }
        }
      ],
      position: {
        start: { line: 63, column: 1, offset: 2325 },
        end: { line: 63, column: 19, offset: 2343 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 65, column: 1, offset: 2345 },
            end: { line: 65, column: 70, offset: 2414 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2345 },
        end: { line: 65, column: 70, offset: 2414 }
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
                        start: { line: 67, column: 6, offset: 2421 },
                        end: { line: 67, column: 21, offset: 2436 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 4, offset: 2419 },
                    end: { line: 67, column: 23, offset: 2438 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 67, column: 23, offset: 2438 },
                    end: { line: 67, column: 192, offset: 2607 }
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
                        start: { line: 67, column: 193, offset: 2608 },
                        end: { line: 67, column: 205, offset: 2620 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 67, column: 192, offset: 2607 },
                    end: { line: 67, column: 254, offset: 2669 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 67, column: 254, offset: 2669 },
                    end: { line: 67, column: 256, offset: 2671 }
                  }
                }
              ],
              position: {
                start: { line: 67, column: 4, offset: 2419 },
                end: { line: 67, column: 256, offset: 2671 }
              }
            }
          ],
          position: {
            start: { line: 67, column: 2, offset: 2417 },
            end: { line: 67, column: 256, offset: 2671 }
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
                        start: { line: 68, column: 6, offset: 2677 },
                        end: { line: 68, column: 67, offset: 2738 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 68, column: 4, offset: 2675 },
                    end: { line: 68, column: 69, offset: 2740 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 68, column: 69, offset: 2740 },
                    end: { line: 68, column: 144, offset: 2815 }
                  }
                }
              ],
              position: {
                start: { line: 68, column: 4, offset: 2675 },
                end: { line: 68, column: 144, offset: 2815 }
              }
            }
          ],
          position: {
            start: { line: 68, column: 2, offset: 2673 },
            end: { line: 68, column: 144, offset: 2815 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 2, offset: 2417 },
        end: { line: 68, column: 144, offset: 2815 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 70, column: 1, offset: 2817 },
            end: { line: 70, column: 46, offset: 2862 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2817 },
        end: { line: 70, column: 46, offset: 2862 }
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
                    start: { line: 72, column: 4, offset: 2867 },
                    end: { line: 72, column: 82, offset: 2945 }
                  }
                }
              ],
              position: {
                start: { line: 72, column: 4, offset: 2867 },
                end: { line: 72, column: 82, offset: 2945 }
              }
            }
          ],
          position: {
            start: { line: 72, column: 2, offset: 2865 },
            end: { line: 72, column: 82, offset: 2945 }
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
                    start: { line: 73, column: 4, offset: 2949 },
                    end: { line: 73, column: 91, offset: 3036 }
                  }
                }
              ],
              position: {
                start: { line: 73, column: 4, offset: 2949 },
                end: { line: 73, column: 91, offset: 3036 }
              }
            }
          ],
          position: {
            start: { line: 73, column: 2, offset: 2947 },
            end: { line: 73, column: 91, offset: 3036 }
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
                    start: { line: 74, column: 4, offset: 3040 },
                    end: { line: 74, column: 26, offset: 3062 }
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
                        start: { line: 74, column: 27, offset: 3063 },
                        end: { line: 74, column: 35, offset: 3071 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 74, column: 26, offset: 3062 },
                    end: { line: 74, column: 79, offset: 3115 }
                  }
                }
              ],
              position: {
                start: { line: 74, column: 4, offset: 3040 },
                end: { line: 74, column: 79, offset: 3115 }
              }
            }
          ],
          position: {
            start: { line: 74, column: 2, offset: 3038 },
            end: { line: 74, column: 79, offset: 3115 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 2, offset: 2865 },
        end: { line: 74, column: 79, offset: 3115 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 76, column: 1, offset: 3117 },
            end: { line: 76, column: 14, offset: 3130 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 14, offset: 3130 },
            end: { line: 76, column: 19, offset: 3135 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 76, column: 19, offset: 3135 },
            end: { line: 76, column: 161, offset: 3277 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 76, column: 161, offset: 3277 },
            end: { line: 76, column: 166, offset: 3282 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 76, column: 166, offset: 3282 },
            end: { line: 76, column: 204, offset: 3320 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3117 },
        end: { line: 76, column: 204, offset: 3320 }
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
        start: { line: 78, column: 1, offset: 3322 },
        end: { line: 86, column: 4, offset: 3452 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 88, column: 1, offset: 3454 },
            end: { line: 88, column: 43, offset: 3496 }
          }
        }
      ],
      position: {
        start: { line: 88, column: 1, offset: 3454 },
        end: { line: 88, column: 43, offset: 3496 }
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
                    start: { line: 90, column: 4, offset: 3501 },
                    end: { line: 90, column: 88, offset: 3585 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 3501 },
                end: { line: 90, column: 88, offset: 3585 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 3499 },
            end: { line: 90, column: 88, offset: 3585 }
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
                    start: { line: 91, column: 4, offset: 3589 },
                    end: { line: 91, column: 76, offset: 3661 }
                  }
                }
              ],
              position: {
                start: { line: 91, column: 4, offset: 3589 },
                end: { line: 91, column: 76, offset: 3661 }
              }
            }
          ],
          position: {
            start: { line: 91, column: 2, offset: 3587 },
            end: { line: 91, column: 76, offset: 3661 }
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
                    start: { line: 92, column: 4, offset: 3665 },
                    end: { line: 92, column: 81, offset: 3742 }
                  }
                }
              ],
              position: {
                start: { line: 92, column: 4, offset: 3665 },
                end: { line: 92, column: 81, offset: 3742 }
              }
            }
          ],
          position: {
            start: { line: 92, column: 2, offset: 3663 },
            end: { line: 92, column: 81, offset: 3742 }
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
                    start: { line: 93, column: 4, offset: 3746 },
                    end: { line: 93, column: 114, offset: 3856 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 4, offset: 3746 },
                end: { line: 93, column: 114, offset: 3856 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 2, offset: 3744 },
            end: { line: 93, column: 114, offset: 3856 }
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
                    start: { line: 94, column: 4, offset: 3860 },
                    end: { line: 94, column: 119, offset: 3975 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 4, offset: 3860 },
                end: { line: 94, column: 119, offset: 3975 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 2, offset: 3858 },
            end: { line: 94, column: 119, offset: 3975 }
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
                    start: { line: 95, column: 4, offset: 3979 },
                    end: { line: 95, column: 157, offset: 4132 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 4, offset: 3979 },
                end: { line: 95, column: 157, offset: 4132 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 2, offset: 3977 },
            end: { line: 95, column: 157, offset: 4132 }
          }
        }
      ],
      position: {
        start: { line: 90, column: 2, offset: 3499 },
        end: { line: 95, column: 157, offset: 4132 }
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
            start: { line: 97, column: 5, offset: 4138 },
            end: { line: 97, column: 24, offset: 4157 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4134 },
        end: { line: 97, column: 24, offset: 4157 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Partial application is a technique in functional programming where a curry function is used to partially apply arguments to a function, returning a partially applied function that expects the remaining arguments of the function.',
          position: {
            start: { line: 98, column: 1, offset: 4158 },
            end: { line: 98, column: 229, offset: 4386 }
          }
        }
      ],
      position: {
        start: { line: 98, column: 1, offset: 4158 },
        end: { line: 98, column: 229, offset: 4386 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here is an example of partial application:',
          position: {
            start: { line: 100, column: 1, offset: 4388 },
            end: { line: 100, column: 43, offset: 4430 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 1, offset: 4388 },
        end: { line: 100, column: 43, offset: 4430 }
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
        start: { line: 102, column: 1, offset: 4432 },
        end: { line: 113, column: 4, offset: 4660 }
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
            start: { line: 115, column: 5, offset: 4666 },
            end: { line: 115, column: 47, offset: 4708 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 4662 },
        end: { line: 115, column: 47, offset: 4708 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A monad-like structure or meaningful object is an object that has some meaning beyond its name, for example the Array class creates arrays that can store other data types, and the Promise class creates a promise that can either complete or fail with a result on completion or error on failure. Arrays and Promises are examples of a meaningful objects.',
          position: {
            start: { line: 116, column: 1, offset: 4709 },
            end: { line: 116, column: 352, offset: 5060 }
          }
        }
      ],
      position: {
        start: { line: 116, column: 1, offset: 4709 },
        end: { line: 116, column: 352, offset: 5060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The below example shows a promise ',
          position: {
            start: { line: 118, column: 1, offset: 5062 },
            end: { line: 118, column: 35, offset: 5096 }
          }
        },
        {
          type: 'inlineCode',
          value: 'promiseB',
          position: {
            start: { line: 118, column: 35, offset: 5096 },
            end: { line: 118, column: 45, offset: 5106 }
          }
        },
        {
          type: 'text',
          value: ' chaining functionality with its ',
          position: {
            start: { line: 118, column: 45, offset: 5106 },
            end: { line: 118, column: 78, offset: 5139 }
          }
        },
        {
          type: 'inlineCode',
          value: '.then',
          position: {
            start: { line: 118, column: 78, offset: 5139 },
            end: { line: 118, column: 85, offset: 5146 }
          }
        },
        {
          type: 'text',
          value: ' method in a meaningful way, as if to say "wait for promiseA to resolve, and then execute the result on completion as n, returning n + 2".',
          position: {
            start: { line: 118, column: 85, offset: 5146 },
            end: { line: 118, column: 223, offset: 5284 }
          }
        }
      ],
      position: {
        start: { line: 118, column: 1, offset: 5062 },
        end: { line: 118, column: 223, offset: 5284 }
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
        start: { line: 120, column: 1, offset: 5286 },
        end: { line: 126, column: 4, offset: 5424 }
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
            start: { line: 128, column: 5, offset: 5430 },
            end: { line: 128, column: 42, offset: 5467 }
          }
        }
      ],
      position: {
        start: { line: 128, column: 1, offset: 5426 },
        end: { line: 128, column: 42, offset: 5467 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 130, column: 1, offset: 5469 },
            end: { line: 130, column: 270, offset: 5738 }
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
                start: { line: 130, column: 271, offset: 5739 },
                end: { line: 130, column: 279, offset: 5747 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 270, offset: 5738 },
            end: { line: 130, column: 370, offset: 5838 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 130, column: 370, offset: 5838 },
            end: { line: 130, column: 375, offset: 5843 }
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
                start: { line: 130, column: 376, offset: 5844 },
                end: { line: 130, column: 387, offset: 5855 }
              }
            }
          ],
          position: {
            start: { line: 130, column: 375, offset: 5843 },
            end: { line: 130, column: 481, offset: 5949 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 130, column: 481, offset: 5949 },
            end: { line: 130, column: 552, offset: 6020 }
          }
        }
      ],
      position: {
        start: { line: 130, column: 1, offset: 5469 },
        end: { line: 130, column: 552, offset: 6020 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 132, column: 1, offset: 6022 },
            end: { line: 132, column: 16, offset: 6037 }
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
                start: { line: 132, column: 17, offset: 6038 },
                end: { line: 132, column: 23, offset: 6044 }
              }
            }
          ],
          position: {
            start: { line: 132, column: 16, offset: 6037 },
            end: { line: 132, column: 46, offset: 6067 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 132, column: 46, offset: 6067 },
            end: { line: 132, column: 120, offset: 6141 }
          }
        }
      ],
      position: {
        start: { line: 132, column: 1, offset: 6022 },
        end: { line: 132, column: 120, offset: 6141 }
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
        start: { line: 134, column: 1, offset: 6143 },
        end: { line: 153, column: 4, offset: 6532 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 155, column: 1, offset: 6534 },
            end: { line: 155, column: 65, offset: 6598 }
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
                start: { line: 155, column: 66, offset: 6599 },
                end: { line: 155, column: 73, offset: 6606 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 65, offset: 6598 },
            end: { line: 155, column: 89, offset: 6622 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 155, column: 89, offset: 6622 },
            end: { line: 155, column: 100, offset: 6633 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 155, column: 100, offset: 6633 },
            end: { line: 155, column: 109, offset: 6642 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 155, column: 109, offset: 6642 },
            end: { line: 155, column: 267, offset: 6800 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 155, column: 267, offset: 6800 },
            end: { line: 155, column: 284, offset: 6817 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 155, column: 284, offset: 6817 },
            end: { line: 155, column: 322, offset: 6855 }
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
                start: { line: 155, column: 323, offset: 6856 },
                end: { line: 155, column: 326, offset: 6859 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 322, offset: 6855 },
            end: { line: 155, column: 338, offset: 6871 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 155, column: 338, offset: 6871 },
            end: { line: 155, column: 476, offset: 7009 }
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
                start: { line: 155, column: 477, offset: 7010 },
                end: { line: 155, column: 484, offset: 7017 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 476, offset: 7009 },
            end: { line: 155, column: 500, offset: 7033 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 155, column: 500, offset: 7033 },
            end: { line: 155, column: 518, offset: 7051 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 155, column: 518, offset: 7051 },
            end: { line: 155, column: 531, offset: 7064 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 155, column: 531, offset: 7064 },
            end: { line: 155, column: 541, offset: 7074 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 6534 },
        end: { line: 155, column: 541, offset: 7074 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 157, column: 1, offset: 7076 },
            end: { line: 157, column: 23, offset: 7098 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 157, column: 23, offset: 7098 },
            end: { line: 157, column: 36, offset: 7111 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 157, column: 36, offset: 7111 },
            end: { line: 157, column: 109, offset: 7184 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 157, column: 109, offset: 7184 },
            end: { line: 157, column: 118, offset: 7193 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 157, column: 118, offset: 7193 },
            end: { line: 157, column: 135, offset: 7210 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 157, column: 135, offset: 7210 },
            end: { line: 157, column: 140, offset: 7215 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 157, column: 140, offset: 7215 },
            end: { line: 157, column: 219, offset: 7294 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 157, column: 219, offset: 7294 },
            end: { line: 157, column: 238, offset: 7313 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 157, column: 238, offset: 7313 },
            end: { line: 157, column: 315, offset: 7390 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 157, column: 315, offset: 7390 },
            end: { line: 157, column: 324, offset: 7399 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 157, column: 324, offset: 7399 },
            end: { line: 157, column: 420, offset: 7495 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 7076 },
        end: { line: 157, column: 420, offset: 7495 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 159, column: 1, offset: 7497 },
            end: { line: 159, column: 45, offset: 7541 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7497 },
        end: { line: 159, column: 45, offset: 7541 }
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
        start: { line: 161, column: 1, offset: 7543 },
        end: { line: 195, column: 4, offset: 8168 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 197, column: 1, offset: 8170 },
            end: { line: 197, column: 23, offset: 8192 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 23, offset: 8192 },
            end: { line: 197, column: 28, offset: 8197 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 28, offset: 8197 },
            end: { line: 197, column: 33, offset: 8202 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 33, offset: 8202 },
            end: { line: 197, column: 41, offset: 8210 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 197, column: 41, offset: 8210 },
            end: { line: 197, column: 132, offset: 8301 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 132, offset: 8301 },
            end: { line: 197, column: 137, offset: 8306 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 197, column: 137, offset: 8306 },
            end: { line: 197, column: 141, offset: 8310 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 141, offset: 8310 },
            end: { line: 197, column: 149, offset: 8318 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 197, column: 149, offset: 8318 },
            end: { line: 197, column: 207, offset: 8376 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 197, column: 207, offset: 8376 },
            end: { line: 197, column: 212, offset: 8381 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 212, offset: 8381 },
            end: { line: 197, column: 274, offset: 8443 }
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
                start: { line: 197, column: 275, offset: 8444 },
                end: { line: 197, column: 281, offset: 8450 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 274, offset: 8443 },
            end: { line: 197, column: 296, offset: 8465 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 197, column: 296, offset: 8465 },
            end: { line: 197, column: 315, offset: 8484 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 197, column: 315, offset: 8484 },
            end: { line: 197, column: 323, offset: 8492 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 197, column: 323, offset: 8492 },
            end: { line: 197, column: 385, offset: 8554 }
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
                start: { line: 197, column: 386, offset: 8555 },
                end: { line: 197, column: 389, offset: 8558 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 385, offset: 8554 },
            end: { line: 197, column: 401, offset: 8570 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 197, column: 401, offset: 8570 },
            end: { line: 197, column: 417, offset: 8586 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 197, column: 417, offset: 8586 },
            end: { line: 197, column: 425, offset: 8594 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 197, column: 425, offset: 8594 },
            end: { line: 197, column: 430, offset: 8599 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 197, column: 430, offset: 8599 },
            end: { line: 197, column: 435, offset: 8604 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 197, column: 435, offset: 8604 },
            end: { line: 197, column: 490, offset: 8659 }
          }
        }
      ],
      position: {
        start: { line: 197, column: 1, offset: 8170 },
        end: { line: 197, column: 490, offset: 8659 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 199, column: 1, offset: 8661 },
            end: { line: 199, column: 100, offset: 8760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 100, offset: 8760 },
            end: { line: 199, column: 109, offset: 8769 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 199, column: 109, offset: 8769 },
            end: { line: 199, column: 177, offset: 8837 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 199, column: 177, offset: 8837 },
            end: { line: 199, column: 183, offset: 8843 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 199, column: 183, offset: 8843 },
            end: { line: 199, column: 189, offset: 8849 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 189, offset: 8849 },
            end: { line: 199, column: 198, offset: 8858 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 199, column: 198, offset: 8858 },
            end: { line: 199, column: 261, offset: 8921 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 199, column: 261, offset: 8921 },
            end: { line: 199, column: 270, offset: 8930 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 199, column: 270, offset: 8930 },
            end: { line: 199, column: 308, offset: 8968 }
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
                start: { line: 199, column: 309, offset: 8969 },
                end: { line: 199, column: 313, offset: 8973 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 308, offset: 8968 },
            end: { line: 199, column: 326, offset: 8986 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 199, column: 326, offset: 8986 },
            end: { line: 199, column: 327, offset: 8987 }
          }
        }
      ],
      position: {
        start: { line: 199, column: 1, offset: 8661 },
        end: { line: 199, column: 327, offset: 8987 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 201, column: 1, offset: 8989 },
            end: { line: 201, column: 50, offset: 9038 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 50, offset: 9038 },
            end: { line: 201, column: 58, offset: 9046 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 201, column: 58, offset: 9046 },
            end: { line: 201, column: 94, offset: 9082 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 201, column: 94, offset: 9082 },
            end: { line: 201, column: 107, offset: 9095 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 201, column: 107, offset: 9095 },
            end: { line: 201, column: 173, offset: 9161 }
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
                start: { line: 201, column: 174, offset: 9162 },
                end: { line: 201, column: 177, offset: 9165 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 173, offset: 9161 },
            end: { line: 201, column: 189, offset: 9177 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 201, column: 189, offset: 9177 },
            end: { line: 201, column: 355, offset: 9343 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 201, column: 355, offset: 9343 },
            end: { line: 201, column: 360, offset: 9348 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 201, column: 360, offset: 9348 },
            end: { line: 201, column: 449, offset: 9437 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 201, column: 449, offset: 9437 },
            end: { line: 201, column: 457, offset: 9445 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 201, column: 457, offset: 9445 },
            end: { line: 201, column: 497, offset: 9485 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 201, column: 497, offset: 9485 },
            end: { line: 201, column: 526, offset: 9514 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 201, column: 526, offset: 9514 },
            end: { line: 201, column: 577, offset: 9565 }
          }
        }
      ],
      position: {
        start: { line: 201, column: 1, offset: 8989 },
        end: { line: 201, column: 577, offset: 9565 }
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
            start: { line: 203, column: 5, offset: 9571 },
            end: { line: 203, column: 15, offset: 9581 }
          }
        }
      ],
      position: {
        start: { line: 203, column: 1, offset: 9567 },
        end: { line: 203, column: 15, offset: 9581 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 205, column: 1, offset: 9583 },
            end: { line: 205, column: 80, offset: 9662 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 9583 },
        end: { line: 205, column: 80, offset: 9662 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 207, column: 1, offset: 9664 },
            end: { line: 207, column: 97, offset: 9760 }
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
                start: { line: 207, column: 98, offset: 9761 },
                end: { line: 207, column: 109, offset: 9772 }
              }
            }
          ],
          position: {
            start: { line: 207, column: 97, offset: 9760 },
            end: { line: 207, column: 113, offset: 9776 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 207, column: 113, offset: 9776 },
            end: { line: 207, column: 114, offset: 9777 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 9664 },
        end: { line: 207, column: 114, offset: 9777 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 208, column: 1, offset: 9778 }
  }
}