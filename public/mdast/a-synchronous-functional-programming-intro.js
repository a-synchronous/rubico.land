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
        'description: An introduction to the [A]synchronous Functional Programming paradigm\n' +
        'image: https://rubico.land/assets/rubico-logo-large.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 345 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello, welcome to my series on a new paradigm built on top of the ',
          position: {
            start: { line: 11, column: 1, offset: 347 },
            end: { line: 11, column: 67, offset: 413 }
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
                start: { line: 11, column: 68, offset: 414 },
                end: { line: 11, column: 90, offset: 436 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 67, offset: 413 },
            end: { line: 11, column: 145, offset: 491 }
          }
        },
        {
          type: 'text',
          value: ' paradigm: ',
          position: {
            start: { line: 11, column: 145, offset: 491 },
            end: { line: 11, column: 156, offset: 502 }
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: '[A]synchronous Functional Programming',
              position: {
                start: { line: 11, column: 158, offset: 504 },
                end: { line: 11, column: 195, offset: 541 }
              }
            }
          ],
          position: {
            start: { line: 11, column: 156, offset: 502 },
            end: { line: 11, column: 197, offset: 543 }
          }
        },
        {
          type: 'text',
          value: '. The [A]synchronous Functional Programming paradigm generally follows the Functional Programming paradigm and is founded on the following principles:',
          position: {
            start: { line: 11, column: 197, offset: 543 },
            end: { line: 11, column: 347, offset: 693 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 347 },
        end: { line: 11, column: 347, offset: 693 }
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
                    start: { line: 13, column: 4, offset: 698 },
                    end: { line: 13, column: 38, offset: 732 }
                  }
                }
              ],
              position: {
                start: { line: 13, column: 4, offset: 698 },
                end: { line: 13, column: 38, offset: 732 }
              }
            }
          ],
          position: {
            start: { line: 13, column: 2, offset: 696 },
            end: { line: 13, column: 38, offset: 732 }
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
                    start: { line: 14, column: 4, offset: 736 },
                    end: { line: 14, column: 48, offset: 780 }
                  }
                }
              ],
              position: {
                start: { line: 14, column: 4, offset: 736 },
                end: { line: 14, column: 48, offset: 780 }
              }
            }
          ],
          position: {
            start: { line: 14, column: 2, offset: 734 },
            end: { line: 14, column: 48, offset: 780 }
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
                    start: { line: 15, column: 4, offset: 784 },
                    end: { line: 15, column: 86, offset: 866 }
                  }
                }
              ],
              position: {
                start: { line: 15, column: 4, offset: 784 },
                end: { line: 15, column: 86, offset: 866 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 2, offset: 782 },
            end: { line: 15, column: 86, offset: 866 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 2, offset: 696 },
        end: { line: 15, column: 86, offset: 866 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'At its core, [A]synchronous Functional Programming, like Functional Programming, uses functions to construct programs, leading to code that is modular, predictable, and easy to reason about. [A]synchronous Functional Programming inherits the following concepts from Functional Programming:',
          position: {
            start: { line: 17, column: 1, offset: 868 },
            end: { line: 17, column: 290, offset: 1157 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 868 },
        end: { line: 17, column: 290, offset: 1157 }
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
            start: { line: 19, column: 5, offset: 1163 },
            end: { line: 19, column: 43, offset: 1201 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1159 },
        end: { line: 19, column: 43, offset: 1201 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 21, column: 1, offset: 1203 },
            end: { line: 21, column: 657, offset: 1859 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1203 },
        end: { line: 21, column: 657, offset: 1859 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 23, column: 1, offset: 1861 },
            end: { line: 23, column: 64, offset: 1924 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1861 },
        end: { line: 23, column: 64, offset: 1924 }
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
                        start: { line: 25, column: 6, offset: 1931 },
                        end: { line: 25, column: 22, offset: 1947 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 1929 },
                    end: { line: 25, column: 24, offset: 1949 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 25, column: 24, offset: 1949 },
                    end: { line: 25, column: 78, offset: 2003 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 1929 },
                end: { line: 25, column: 78, offset: 2003 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 1927 },
            end: { line: 25, column: 78, offset: 2003 }
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
                        start: { line: 26, column: 6, offset: 2009 },
                        end: { line: 26, column: 23, offset: 2026 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 26, column: 4, offset: 2007 },
                    end: { line: 26, column: 25, offset: 2028 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 26, column: 25, offset: 2028 },
                    end: { line: 26, column: 100, offset: 2103 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 2007 },
                end: { line: 26, column: 100, offset: 2103 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 2, offset: 2005 },
            end: { line: 26, column: 100, offset: 2103 }
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
                        start: { line: 27, column: 6, offset: 2109 },
                        end: { line: 27, column: 19, offset: 2122 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 27, column: 4, offset: 2107 },
                    end: { line: 27, column: 21, offset: 2124 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 27, column: 21, offset: 2124 },
                    end: { line: 27, column: 107, offset: 2210 }
                  }
                }
              ],
              position: {
                start: { line: 27, column: 4, offset: 2107 },
                end: { line: 27, column: 107, offset: 2210 }
              }
            }
          ],
          position: {
            start: { line: 27, column: 2, offset: 2105 },
            end: { line: 27, column: 107, offset: 2210 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 2, offset: 1927 },
        end: { line: 27, column: 107, offset: 2210 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 29, column: 1, offset: 2212 },
            end: { line: 29, column: 63, offset: 2274 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 2212 },
        end: { line: 29, column: 63, offset: 2274 }
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
                        start: { line: 31, column: 6, offset: 2281 },
                        end: { line: 31, column: 33, offset: 2308 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2279 },
                    end: { line: 31, column: 35, offset: 2310 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 35, offset: 2310 },
                    end: { line: 31, column: 37, offset: 2312 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 37, offset: 2312 },
                    end: { line: 31, column: 57, offset: 2332 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 57, offset: 2332 },
                    end: { line: 31, column: 83, offset: 2358 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2279 },
                end: { line: 31, column: 83, offset: 2358 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2277 },
            end: { line: 31, column: 83, offset: 2358 }
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
                        start: { line: 32, column: 6, offset: 2364 },
                        end: { line: 32, column: 34, offset: 2392 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 2362 },
                    end: { line: 32, column: 36, offset: 2394 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 32, column: 36, offset: 2394 },
                    end: { line: 32, column: 38, offset: 2396 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 32, column: 38, offset: 2396 },
                    end: { line: 32, column: 58, offset: 2416 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 32, column: 58, offset: 2416 },
                    end: { line: 32, column: 84, offset: 2442 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 2362 },
                end: { line: 32, column: 84, offset: 2442 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 2360 },
            end: { line: 32, column: 84, offset: 2442 }
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
                        start: { line: 33, column: 6, offset: 2448 },
                        end: { line: 33, column: 30, offset: 2472 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 2446 },
                    end: { line: 33, column: 32, offset: 2474 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 33, column: 32, offset: 2474 },
                    end: { line: 33, column: 34, offset: 2476 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 33, column: 34, offset: 2476 },
                    end: { line: 33, column: 54, offset: 2496 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 33, column: 54, offset: 2496 },
                    end: { line: 33, column: 80, offset: 2522 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 2446 },
                end: { line: 33, column: 80, offset: 2522 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 2444 },
            end: { line: 33, column: 80, offset: 2522 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 2, offset: 2277 },
        end: { line: 33, column: 80, offset: 2522 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 35, column: 1, offset: 2524 },
            end: { line: 35, column: 81, offset: 2604 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 35, column: 81, offset: 2604 },
            end: { line: 35, column: 90, offset: 2613 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 35, column: 90, offset: 2613 },
            end: { line: 35, column: 122, offset: 2645 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 122, offset: 2645 },
            end: { line: 35, column: 125, offset: 2648 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 35, column: 125, offset: 2648 },
            end: { line: 35, column: 152, offset: 2675 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 152, offset: 2675 },
            end: { line: 35, column: 155, offset: 2678 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 35, column: 155, offset: 2678 },
            end: { line: 35, column: 167, offset: 2690 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 167, offset: 2690 },
            end: { line: 35, column: 170, offset: 2693 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 35, column: 170, offset: 2693 },
            end: { line: 35, column: 181, offset: 2704 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 2524 },
        end: { line: 35, column: 181, offset: 2704 }
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
        start: { line: 37, column: 1, offset: 2706 },
        end: { line: 53, column: 4, offset: 2976 }
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
            start: { line: 55, column: 5, offset: 2982 },
            end: { line: 55, column: 19, offset: 2996 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2978 },
        end: { line: 55, column: 19, offset: 2996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 57, column: 1, offset: 2998 },
            end: { line: 57, column: 70, offset: 3067 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 2998 },
        end: { line: 57, column: 70, offset: 3067 }
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
                        start: { line: 59, column: 6, offset: 3074 },
                        end: { line: 59, column: 21, offset: 3089 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 4, offset: 3072 },
                    end: { line: 59, column: 23, offset: 3091 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 59, column: 23, offset: 3091 },
                    end: { line: 59, column: 192, offset: 3260 }
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
                        start: { line: 59, column: 193, offset: 3261 },
                        end: { line: 59, column: 205, offset: 3273 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 192, offset: 3260 },
                    end: { line: 59, column: 254, offset: 3322 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 59, column: 254, offset: 3322 },
                    end: { line: 59, column: 256, offset: 3324 }
                  }
                }
              ],
              position: {
                start: { line: 59, column: 4, offset: 3072 },
                end: { line: 59, column: 256, offset: 3324 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 2, offset: 3070 },
            end: { line: 59, column: 256, offset: 3324 }
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
                        start: { line: 60, column: 6, offset: 3330 },
                        end: { line: 60, column: 67, offset: 3391 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 60, column: 4, offset: 3328 },
                    end: { line: 60, column: 69, offset: 3393 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 60, column: 69, offset: 3393 },
                    end: { line: 60, column: 144, offset: 3468 }
                  }
                }
              ],
              position: {
                start: { line: 60, column: 4, offset: 3328 },
                end: { line: 60, column: 144, offset: 3468 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 2, offset: 3326 },
            end: { line: 60, column: 144, offset: 3468 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 2, offset: 3070 },
        end: { line: 60, column: 144, offset: 3468 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 62, column: 1, offset: 3470 },
            end: { line: 62, column: 46, offset: 3515 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3470 },
        end: { line: 62, column: 46, offset: 3515 }
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
                    start: { line: 64, column: 4, offset: 3520 },
                    end: { line: 64, column: 82, offset: 3598 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3520 },
                end: { line: 64, column: 82, offset: 3598 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3518 },
            end: { line: 64, column: 82, offset: 3598 }
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
                    start: { line: 65, column: 4, offset: 3602 },
                    end: { line: 65, column: 91, offset: 3689 }
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 3602 },
                end: { line: 65, column: 91, offset: 3689 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 2, offset: 3600 },
            end: { line: 65, column: 91, offset: 3689 }
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
                    start: { line: 66, column: 4, offset: 3693 },
                    end: { line: 66, column: 26, offset: 3715 }
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
                        start: { line: 66, column: 27, offset: 3716 },
                        end: { line: 66, column: 35, offset: 3724 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 66, column: 26, offset: 3715 },
                    end: { line: 66, column: 79, offset: 3768 }
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 3693 },
                end: { line: 66, column: 79, offset: 3768 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 2, offset: 3691 },
            end: { line: 66, column: 79, offset: 3768 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 2, offset: 3518 },
        end: { line: 66, column: 79, offset: 3768 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 68, column: 1, offset: 3770 },
            end: { line: 68, column: 14, offset: 3783 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 14, offset: 3783 },
            end: { line: 68, column: 19, offset: 3788 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 68, column: 19, offset: 3788 },
            end: { line: 68, column: 161, offset: 3930 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 161, offset: 3930 },
            end: { line: 68, column: 166, offset: 3935 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 68, column: 166, offset: 3935 },
            end: { line: 68, column: 204, offset: 3973 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3770 },
        end: { line: 68, column: 204, offset: 3973 }
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
        start: { line: 70, column: 1, offset: 3975 },
        end: { line: 81, column: 4, offset: 4120 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 83, column: 1, offset: 4122 },
            end: { line: 83, column: 43, offset: 4164 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 4122 },
        end: { line: 83, column: 43, offset: 4164 }
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
                    start: { line: 85, column: 4, offset: 4169 },
                    end: { line: 85, column: 88, offset: 4253 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4169 },
                end: { line: 85, column: 88, offset: 4253 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4167 },
            end: { line: 85, column: 88, offset: 4253 }
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
                    start: { line: 86, column: 4, offset: 4257 },
                    end: { line: 86, column: 76, offset: 4329 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4257 },
                end: { line: 86, column: 76, offset: 4329 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4255 },
            end: { line: 86, column: 76, offset: 4329 }
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
                    start: { line: 87, column: 4, offset: 4333 },
                    end: { line: 87, column: 81, offset: 4410 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4333 },
                end: { line: 87, column: 81, offset: 4410 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4331 },
            end: { line: 87, column: 81, offset: 4410 }
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
                    start: { line: 88, column: 4, offset: 4414 },
                    end: { line: 88, column: 114, offset: 4524 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4414 },
                end: { line: 88, column: 114, offset: 4524 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4412 },
            end: { line: 88, column: 114, offset: 4524 }
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
                    start: { line: 89, column: 4, offset: 4528 },
                    end: { line: 89, column: 119, offset: 4643 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 4528 },
                end: { line: 89, column: 119, offset: 4643 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 4526 },
            end: { line: 89, column: 119, offset: 4643 }
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
                    start: { line: 90, column: 4, offset: 4647 },
                    end: { line: 90, column: 157, offset: 4800 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 4647 },
                end: { line: 90, column: 157, offset: 4800 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 4645 },
            end: { line: 90, column: 157, offset: 4800 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 4167 },
        end: { line: 90, column: 157, offset: 4800 }
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
            start: { line: 92, column: 5, offset: 4806 },
            end: { line: 92, column: 42, offset: 4843 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4802 },
        end: { line: 92, column: 42, offset: 4843 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 94, column: 1, offset: 4845 },
            end: { line: 94, column: 270, offset: 5114 }
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
                start: { line: 94, column: 271, offset: 5115 },
                end: { line: 94, column: 279, offset: 5123 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 270, offset: 5114 },
            end: { line: 94, column: 370, offset: 5214 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 94, column: 370, offset: 5214 },
            end: { line: 94, column: 375, offset: 5219 }
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
                start: { line: 94, column: 376, offset: 5220 },
                end: { line: 94, column: 387, offset: 5231 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 375, offset: 5219 },
            end: { line: 94, column: 481, offset: 5325 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 94, column: 481, offset: 5325 },
            end: { line: 94, column: 552, offset: 5396 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 4845 },
        end: { line: 94, column: 552, offset: 5396 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 96, column: 1, offset: 5398 },
            end: { line: 96, column: 16, offset: 5413 }
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
                start: { line: 96, column: 17, offset: 5414 },
                end: { line: 96, column: 23, offset: 5420 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 16, offset: 5413 },
            end: { line: 96, column: 46, offset: 5443 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 96, column: 46, offset: 5443 },
            end: { line: 96, column: 120, offset: 5517 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 5398 },
        end: { line: 96, column: 120, offset: 5517 }
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
        start: { line: 98, column: 1, offset: 5519 },
        end: { line: 115, column: 4, offset: 5907 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 117, column: 1, offset: 5909 },
            end: { line: 117, column: 65, offset: 5973 }
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
                start: { line: 117, column: 66, offset: 5974 },
                end: { line: 117, column: 73, offset: 5981 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 65, offset: 5973 },
            end: { line: 117, column: 89, offset: 5997 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 117, column: 89, offset: 5997 },
            end: { line: 117, column: 100, offset: 6008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 117, column: 100, offset: 6008 },
            end: { line: 117, column: 109, offset: 6017 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 117, column: 109, offset: 6017 },
            end: { line: 117, column: 267, offset: 6175 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 117, column: 267, offset: 6175 },
            end: { line: 117, column: 284, offset: 6192 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 117, column: 284, offset: 6192 },
            end: { line: 117, column: 322, offset: 6230 }
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
                start: { line: 117, column: 323, offset: 6231 },
                end: { line: 117, column: 326, offset: 6234 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 322, offset: 6230 },
            end: { line: 117, column: 338, offset: 6246 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 117, column: 338, offset: 6246 },
            end: { line: 117, column: 476, offset: 6384 }
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
                start: { line: 117, column: 477, offset: 6385 },
                end: { line: 117, column: 484, offset: 6392 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 476, offset: 6384 },
            end: { line: 117, column: 500, offset: 6408 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 117, column: 500, offset: 6408 },
            end: { line: 117, column: 518, offset: 6426 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 117, column: 518, offset: 6426 },
            end: { line: 117, column: 531, offset: 6439 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 117, column: 531, offset: 6439 },
            end: { line: 117, column: 541, offset: 6449 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5909 },
        end: { line: 117, column: 541, offset: 6449 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 119, column: 1, offset: 6451 },
            end: { line: 119, column: 23, offset: 6473 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 119, column: 23, offset: 6473 },
            end: { line: 119, column: 36, offset: 6486 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 119, column: 36, offset: 6486 },
            end: { line: 119, column: 109, offset: 6559 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 119, column: 109, offset: 6559 },
            end: { line: 119, column: 118, offset: 6568 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 119, column: 118, offset: 6568 },
            end: { line: 119, column: 135, offset: 6585 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 119, column: 135, offset: 6585 },
            end: { line: 119, column: 140, offset: 6590 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 119, column: 140, offset: 6590 },
            end: { line: 119, column: 219, offset: 6669 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 119, column: 219, offset: 6669 },
            end: { line: 119, column: 238, offset: 6688 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 119, column: 238, offset: 6688 },
            end: { line: 119, column: 315, offset: 6765 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 119, column: 315, offset: 6765 },
            end: { line: 119, column: 324, offset: 6774 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 119, column: 324, offset: 6774 },
            end: { line: 119, column: 420, offset: 6870 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6451 },
        end: { line: 119, column: 420, offset: 6870 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 121, column: 1, offset: 6872 },
            end: { line: 121, column: 45, offset: 6916 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6872 },
        end: { line: 121, column: 45, offset: 6916 }
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
        start: { line: 123, column: 1, offset: 6918 },
        end: { line: 157, column: 4, offset: 7543 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 159, column: 1, offset: 7545 },
            end: { line: 159, column: 23, offset: 7567 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 23, offset: 7567 },
            end: { line: 159, column: 28, offset: 7572 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 28, offset: 7572 },
            end: { line: 159, column: 33, offset: 7577 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 33, offset: 7577 },
            end: { line: 159, column: 41, offset: 7585 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 159, column: 41, offset: 7585 },
            end: { line: 159, column: 132, offset: 7676 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 132, offset: 7676 },
            end: { line: 159, column: 137, offset: 7681 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 159, column: 137, offset: 7681 },
            end: { line: 159, column: 141, offset: 7685 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 141, offset: 7685 },
            end: { line: 159, column: 149, offset: 7693 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 159, column: 149, offset: 7693 },
            end: { line: 159, column: 207, offset: 7751 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 207, offset: 7751 },
            end: { line: 159, column: 212, offset: 7756 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 212, offset: 7756 },
            end: { line: 159, column: 274, offset: 7818 }
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
                start: { line: 159, column: 275, offset: 7819 },
                end: { line: 159, column: 281, offset: 7825 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 274, offset: 7818 },
            end: { line: 159, column: 296, offset: 7840 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 159, column: 296, offset: 7840 },
            end: { line: 159, column: 315, offset: 7859 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 315, offset: 7859 },
            end: { line: 159, column: 323, offset: 7867 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 323, offset: 7867 },
            end: { line: 159, column: 385, offset: 7929 }
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
                start: { line: 159, column: 386, offset: 7930 },
                end: { line: 159, column: 389, offset: 7933 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 385, offset: 7929 },
            end: { line: 159, column: 401, offset: 7945 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 159, column: 401, offset: 7945 },
            end: { line: 159, column: 417, offset: 7961 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 417, offset: 7961 },
            end: { line: 159, column: 425, offset: 7969 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 425, offset: 7969 },
            end: { line: 159, column: 430, offset: 7974 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 159, column: 430, offset: 7974 },
            end: { line: 159, column: 435, offset: 7979 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 159, column: 435, offset: 7979 },
            end: { line: 159, column: 490, offset: 8034 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7545 },
        end: { line: 159, column: 490, offset: 8034 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 161, column: 1, offset: 8036 },
            end: { line: 161, column: 100, offset: 8135 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 100, offset: 8135 },
            end: { line: 161, column: 109, offset: 8144 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 161, column: 109, offset: 8144 },
            end: { line: 161, column: 177, offset: 8212 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 161, column: 177, offset: 8212 },
            end: { line: 161, column: 183, offset: 8218 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 161, column: 183, offset: 8218 },
            end: { line: 161, column: 189, offset: 8224 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 189, offset: 8224 },
            end: { line: 161, column: 198, offset: 8233 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 161, column: 198, offset: 8233 },
            end: { line: 161, column: 261, offset: 8296 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 261, offset: 8296 },
            end: { line: 161, column: 270, offset: 8305 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 161, column: 270, offset: 8305 },
            end: { line: 161, column: 308, offset: 8343 }
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
                start: { line: 161, column: 309, offset: 8344 },
                end: { line: 161, column: 313, offset: 8348 }
              }
            }
          ],
          position: {
            start: { line: 161, column: 308, offset: 8343 },
            end: { line: 161, column: 326, offset: 8361 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 326, offset: 8361 },
            end: { line: 161, column: 327, offset: 8362 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8036 },
        end: { line: 161, column: 327, offset: 8362 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 163, column: 1, offset: 8364 },
            end: { line: 163, column: 50, offset: 8413 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 50, offset: 8413 },
            end: { line: 163, column: 58, offset: 8421 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 163, column: 58, offset: 8421 },
            end: { line: 163, column: 94, offset: 8457 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 163, column: 94, offset: 8457 },
            end: { line: 163, column: 107, offset: 8470 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 163, column: 107, offset: 8470 },
            end: { line: 163, column: 173, offset: 8536 }
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
                start: { line: 163, column: 174, offset: 8537 },
                end: { line: 163, column: 177, offset: 8540 }
              }
            }
          ],
          position: {
            start: { line: 163, column: 173, offset: 8536 },
            end: { line: 163, column: 189, offset: 8552 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 163, column: 189, offset: 8552 },
            end: { line: 163, column: 355, offset: 8718 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 163, column: 355, offset: 8718 },
            end: { line: 163, column: 360, offset: 8723 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 163, column: 360, offset: 8723 },
            end: { line: 163, column: 449, offset: 8812 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 449, offset: 8812 },
            end: { line: 163, column: 457, offset: 8820 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 163, column: 457, offset: 8820 },
            end: { line: 163, column: 497, offset: 8860 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 163, column: 497, offset: 8860 },
            end: { line: 163, column: 526, offset: 8889 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 163, column: 526, offset: 8889 },
            end: { line: 163, column: 577, offset: 8940 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8364 },
        end: { line: 163, column: 577, offset: 8940 }
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
            start: { line: 165, column: 5, offset: 8946 },
            end: { line: 165, column: 15, offset: 8956 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 8942 },
        end: { line: 165, column: 15, offset: 8956 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 167, column: 1, offset: 8958 },
            end: { line: 167, column: 80, offset: 9037 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 8958 },
        end: { line: 167, column: 80, offset: 9037 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 169, column: 1, offset: 9039 },
            end: { line: 169, column: 97, offset: 9135 }
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
                start: { line: 169, column: 98, offset: 9136 },
                end: { line: 169, column: 109, offset: 9147 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 97, offset: 9135 },
            end: { line: 169, column: 113, offset: 9151 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 169, column: 113, offset: 9151 },
            end: { line: 169, column: 114, offset: 9152 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 9039 },
        end: { line: 169, column: 114, offset: 9152 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 170, column: 1, offset: 9153 }
  }
}