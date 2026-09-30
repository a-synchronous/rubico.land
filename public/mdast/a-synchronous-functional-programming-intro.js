export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Intro\n' +
        'author: Richard Tong, King of Software at CLOUT\n' +
        'date: 2024-11-26\n' +
        'updated: 2026-01-31\n' +
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
          value: 'First class and higher-order Functions',
          position: {
            start: { line: 19, column: 5, offset: 1158 },
            end: { line: 19, column: 43, offset: 1196 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1154 },
        end: { line: 19, column: 43, offset: 1196 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Functions that fall under first class and higher-order functions are all functions that can take other functions as arguments and return a function as the result. The distinction between the two is subtle: a "higher-order" function is a function that takes one or more functions as arguments and returns a function or value as a result, while a "first class" function is a function that can be treated like any other data type (e.g. number, string, function) in a programming language. First class functions are passed as arguments to higher-order functions. There can be no higher-order functions without first class functions in any programming language.',
          position: {
            start: { line: 21, column: 1, offset: 1198 },
            end: { line: 21, column: 657, offset: 1854 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1198 },
        end: { line: 21, column: 657, offset: 1854 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of higher-order functions in JavaScript:',
          position: {
            start: { line: 23, column: 1, offset: 1856 },
            end: { line: 23, column: 64, offset: 1919 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1856 },
        end: { line: 23, column: 64, offset: 1919 }
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
                        start: { line: 25, column: 6, offset: 1926 },
                        end: { line: 25, column: 22, offset: 1942 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 25, column: 4, offset: 1924 },
                    end: { line: 25, column: 24, offset: 1944 }
                  }
                },
                {
                  type: 'text',
                  value: ': Iterates through an array and returns a single value',
                  position: {
                    start: { line: 25, column: 24, offset: 1944 },
                    end: { line: 25, column: 78, offset: 1998 }
                  }
                }
              ],
              position: {
                start: { line: 25, column: 4, offset: 1924 },
                end: { line: 25, column: 78, offset: 1998 }
              }
            }
          ],
          position: {
            start: { line: 25, column: 2, offset: 1922 },
            end: { line: 25, column: 78, offset: 1998 }
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
                        start: { line: 26, column: 6, offset: 2004 },
                        end: { line: 26, column: 23, offset: 2021 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 26, column: 4, offset: 2002 },
                    end: { line: 26, column: 25, offset: 2023 }
                  }
                },
                {
                  type: 'text',
                  value: ': Executes a callback function on each of the elements in an array in order',
                  position: {
                    start: { line: 26, column: 25, offset: 2023 },
                    end: { line: 26, column: 100, offset: 2098 }
                  }
                }
              ],
              position: {
                start: { line: 26, column: 4, offset: 2002 },
                end: { line: 26, column: 100, offset: 2098 }
              }
            }
          ],
          position: {
            start: { line: 26, column: 2, offset: 2000 },
            end: { line: 26, column: 100, offset: 2098 }
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
                        start: { line: 27, column: 6, offset: 2104 },
                        end: { line: 27, column: 19, offset: 2117 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 27, column: 4, offset: 2102 },
                    end: { line: 27, column: 21, offset: 2119 }
                  }
                },
                {
                  type: 'text',
                  value: ': Returns a new array made up of the return values from the provided callback function',
                  position: {
                    start: { line: 27, column: 21, offset: 2119 },
                    end: { line: 27, column: 107, offset: 2205 }
                  }
                }
              ],
              position: {
                start: { line: 27, column: 4, offset: 2102 },
                end: { line: 27, column: 107, offset: 2205 }
              }
            }
          ],
          position: {
            start: { line: 27, column: 2, offset: 2100 },
            end: { line: 27, column: 107, offset: 2205 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 2, offset: 1922 },
        end: { line: 27, column: 107, offset: 2205 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of first class functions in JavaScript:',
          position: {
            start: { line: 29, column: 1, offset: 2207 },
            end: { line: 29, column: 63, offset: 2269 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 2207 },
        end: { line: 29, column: 63, offset: 2269 }
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
                        start: { line: 31, column: 6, offset: 2276 },
                        end: { line: 31, column: 33, offset: 2303 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 2274 },
                    end: { line: 31, column: 35, offset: 2305 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 31, column: 35, offset: 2305 },
                    end: { line: 31, column: 37, offset: 2307 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 31, column: 37, offset: 2307 },
                    end: { line: 31, column: 57, offset: 2327 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 31, column: 57, offset: 2327 },
                    end: { line: 31, column: 83, offset: 2353 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 2274 },
                end: { line: 31, column: 83, offset: 2353 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 2272 },
            end: { line: 31, column: 83, offset: 2353 }
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
                        start: { line: 32, column: 6, offset: 2359 },
                        end: { line: 32, column: 34, offset: 2387 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 32, column: 4, offset: 2357 },
                    end: { line: 32, column: 36, offset: 2389 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 32, column: 36, offset: 2389 },
                    end: { line: 32, column: 38, offset: 2391 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 32, column: 38, offset: 2391 },
                    end: { line: 32, column: 58, offset: 2411 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 32, column: 58, offset: 2411 },
                    end: { line: 32, column: 84, offset: 2437 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 2357 },
                end: { line: 32, column: 84, offset: 2437 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 2355 },
            end: { line: 32, column: 84, offset: 2437 }
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
                        start: { line: 33, column: 6, offset: 2443 },
                        end: { line: 33, column: 30, offset: 2467 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 33, column: 4, offset: 2441 },
                    end: { line: 33, column: 32, offset: 2469 }
                  }
                },
                {
                  type: 'text',
                  value: ': ',
                  position: {
                    start: { line: 33, column: 32, offset: 2469 },
                    end: { line: 33, column: 34, offset: 2471 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'firstClassFunction',
                  position: {
                    start: { line: 33, column: 34, offset: 2471 },
                    end: { line: 33, column: 54, offset: 2491 }
                  }
                },
                {
                  type: 'text',
                  value: ' is a first class function',
                  position: {
                    start: { line: 33, column: 54, offset: 2491 },
                    end: { line: 33, column: 80, offset: 2517 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 2441 },
                end: { line: 33, column: 80, offset: 2517 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 2439 },
            end: { line: 33, column: 80, offset: 2517 }
          }
        }
      ],
      position: {
        start: { line: 31, column: 2, offset: 2272 },
        end: { line: 33, column: 80, offset: 2517 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'You could even write your own higher-order functions, for example, the function ',
          position: {
            start: { line: 35, column: 1, offset: 2519 },
            end: { line: 35, column: 81, offset: 2599 }
          }
        },
        {
          type: 'inlineCode',
          value: 'logArgs',
          position: {
            start: { line: 35, column: 81, offset: 2599 },
            end: { line: 35, column: 90, offset: 2608 }
          }
        },
        {
          type: 'text',
          value: ' takes the first class function ',
          position: {
            start: { line: 35, column: 90, offset: 2608 },
            end: { line: 35, column: 122, offset: 2640 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 122, offset: 2640 },
            end: { line: 35, column: 125, offset: 2643 }
          }
        },
        {
          type: 'text',
          value: ' and logs the arguments to ',
          position: {
            start: { line: 35, column: 125, offset: 2643 },
            end: { line: 35, column: 152, offset: 2670 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 152, offset: 2670 },
            end: { line: 35, column: 155, offset: 2673 }
          }
        },
        {
          type: 'text',
          value: ' every time ',
          position: {
            start: { line: 35, column: 155, offset: 2673 },
            end: { line: 35, column: 167, offset: 2685 }
          }
        },
        {
          type: 'inlineCode',
          value: 'f',
          position: {
            start: { line: 35, column: 167, offset: 2685 },
            end: { line: 35, column: 170, offset: 2688 }
          }
        },
        {
          type: 'text',
          value: ' is called.',
          position: {
            start: { line: 35, column: 170, offset: 2688 },
            end: { line: 35, column: 181, offset: 2699 }
          }
        }
      ],
      position: {
        start: { line: 35, column: 1, offset: 2519 },
        end: { line: 35, column: 181, offset: 2699 }
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
        start: { line: 37, column: 1, offset: 2701 },
        end: { line: 53, column: 4, offset: 2971 }
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
            start: { line: 55, column: 5, offset: 2977 },
            end: { line: 55, column: 19, offset: 2991 }
          }
        }
      ],
      position: {
        start: { line: 55, column: 1, offset: 2973 },
        end: { line: 55, column: 19, offset: 2991 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions are functions that have the following characteristics:',
          position: {
            start: { line: 57, column: 1, offset: 2993 },
            end: { line: 57, column: 70, offset: 3062 }
          }
        }
      ],
      position: {
        start: { line: 57, column: 1, offset: 2993 },
        end: { line: 57, column: 70, offset: 3062 }
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
                        start: { line: 59, column: 6, offset: 3069 },
                        end: { line: 59, column: 21, offset: 3084 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 4, offset: 3067 },
                    end: { line: 59, column: 23, offset: 3086 }
                  }
                },
                {
                  type: 'text',
                  value: ': A pure function does not change any variables, data, or state outside its scope, nor does it modify any outside state referenced by variables inside of its scope (see ',
                  position: {
                    start: { line: 59, column: 23, offset: 3086 },
                    end: { line: 59, column: 192, offset: 3255 }
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
                        start: { line: 59, column: 193, offset: 3256 },
                        end: { line: 59, column: 205, offset: 3268 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 59, column: 192, offset: 3255 },
                    end: { line: 59, column: 254, offset: 3317 }
                  }
                },
                {
                  type: 'text',
                  value: ').',
                  position: {
                    start: { line: 59, column: 254, offset: 3317 },
                    end: { line: 59, column: 256, offset: 3319 }
                  }
                }
              ],
              position: {
                start: { line: 59, column: 4, offset: 3067 },
                end: { line: 59, column: 256, offset: 3319 }
              }
            }
          ],
          position: {
            start: { line: 59, column: 2, offset: 3065 },
            end: { line: 59, column: 256, offset: 3319 }
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
                        start: { line: 60, column: 6, offset: 3325 },
                        end: { line: 60, column: 67, offset: 3386 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 60, column: 4, offset: 3323 },
                    end: { line: 60, column: 69, offset: 3388 }
                  }
                },
                {
                  type: 'text',
                  value: ': Given the same input, a pure function will always return the same output.',
                  position: {
                    start: { line: 60, column: 69, offset: 3388 },
                    end: { line: 60, column: 144, offset: 3463 }
                  }
                }
              ],
              position: {
                start: { line: 60, column: 4, offset: 3323 },
                end: { line: 60, column: 144, offset: 3463 }
              }
            }
          ],
          position: {
            start: { line: 60, column: 2, offset: 3321 },
            end: { line: 60, column: 144, offset: 3463 }
          }
        }
      ],
      position: {
        start: { line: 59, column: 2, offset: 3065 },
        end: { line: 60, column: 144, offset: 3463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Pure functions have the following advantages:',
          position: {
            start: { line: 62, column: 1, offset: 3465 },
            end: { line: 62, column: 46, offset: 3510 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3465 },
        end: { line: 62, column: 46, offset: 3510 }
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
                    start: { line: 64, column: 4, offset: 3515 },
                    end: { line: 64, column: 82, offset: 3593 }
                  }
                }
              ],
              position: {
                start: { line: 64, column: 4, offset: 3515 },
                end: { line: 64, column: 82, offset: 3593 }
              }
            }
          ],
          position: {
            start: { line: 64, column: 2, offset: 3513 },
            end: { line: 64, column: 82, offset: 3593 }
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
                    start: { line: 65, column: 4, offset: 3597 },
                    end: { line: 65, column: 91, offset: 3684 }
                  }
                }
              ],
              position: {
                start: { line: 65, column: 4, offset: 3597 },
                end: { line: 65, column: 91, offset: 3684 }
              }
            }
          ],
          position: {
            start: { line: 65, column: 2, offset: 3595 },
            end: { line: 65, column: 91, offset: 3684 }
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
                    start: { line: 66, column: 4, offset: 3688 },
                    end: { line: 66, column: 26, offset: 3710 }
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
                        start: { line: 66, column: 27, offset: 3711 },
                        end: { line: 66, column: 35, offset: 3719 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 66, column: 26, offset: 3710 },
                    end: { line: 66, column: 79, offset: 3763 }
                  }
                }
              ],
              position: {
                start: { line: 66, column: 4, offset: 3688 },
                end: { line: 66, column: 79, offset: 3763 }
              }
            }
          ],
          position: {
            start: { line: 66, column: 2, offset: 3686 },
            end: { line: 66, column: 79, offset: 3763 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 2, offset: 3513 },
        end: { line: 66, column: 79, offset: 3763 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The function ',
          position: {
            start: { line: 68, column: 1, offset: 3765 },
            end: { line: 68, column: 14, offset: 3778 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 14, offset: 3778 },
            end: { line: 68, column: 19, offset: 3783 }
          }
        },
        {
          type: 'text',
          value: ' is a pure function because it does not have any side effects (nothing changes outside of its scope) and it has deterministic output (calling ',
          position: {
            start: { line: 68, column: 19, offset: 3783 },
            end: { line: 68, column: 161, offset: 3925 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 68, column: 161, offset: 3925 },
            end: { line: 68, column: 166, offset: 3930 }
          }
        },
        {
          type: 'text',
          value: ' with 1 and 2 will always result in 3)',
          position: {
            start: { line: 68, column: 166, offset: 3930 },
            end: { line: 68, column: 204, offset: 3968 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3765 },
        end: { line: 68, column: 204, offset: 3968 }
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
        start: { line: 70, column: 1, offset: 3970 },
        end: { line: 81, column: 4, offset: 4115 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The following are examples of side effects',
          position: {
            start: { line: 83, column: 1, offset: 4117 },
            end: { line: 83, column: 43, offset: 4159 }
          }
        }
      ],
      position: {
        start: { line: 83, column: 1, offset: 4117 },
        end: { line: 83, column: 43, offset: 4159 }
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
                    start: { line: 85, column: 4, offset: 4164 },
                    end: { line: 85, column: 88, offset: 4248 }
                  }
                }
              ],
              position: {
                start: { line: 85, column: 4, offset: 4164 },
                end: { line: 85, column: 88, offset: 4248 }
              }
            }
          ],
          position: {
            start: { line: 85, column: 2, offset: 4162 },
            end: { line: 85, column: 88, offset: 4248 }
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
                    start: { line: 86, column: 4, offset: 4252 },
                    end: { line: 86, column: 76, offset: 4324 }
                  }
                }
              ],
              position: {
                start: { line: 86, column: 4, offset: 4252 },
                end: { line: 86, column: 76, offset: 4324 }
              }
            }
          ],
          position: {
            start: { line: 86, column: 2, offset: 4250 },
            end: { line: 86, column: 76, offset: 4324 }
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
                    start: { line: 87, column: 4, offset: 4328 },
                    end: { line: 87, column: 81, offset: 4405 }
                  }
                }
              ],
              position: {
                start: { line: 87, column: 4, offset: 4328 },
                end: { line: 87, column: 81, offset: 4405 }
              }
            }
          ],
          position: {
            start: { line: 87, column: 2, offset: 4326 },
            end: { line: 87, column: 81, offset: 4405 }
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
                    start: { line: 88, column: 4, offset: 4409 },
                    end: { line: 88, column: 114, offset: 4519 }
                  }
                }
              ],
              position: {
                start: { line: 88, column: 4, offset: 4409 },
                end: { line: 88, column: 114, offset: 4519 }
              }
            }
          ],
          position: {
            start: { line: 88, column: 2, offset: 4407 },
            end: { line: 88, column: 114, offset: 4519 }
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
                    start: { line: 89, column: 4, offset: 4523 },
                    end: { line: 89, column: 119, offset: 4638 }
                  }
                }
              ],
              position: {
                start: { line: 89, column: 4, offset: 4523 },
                end: { line: 89, column: 119, offset: 4638 }
              }
            }
          ],
          position: {
            start: { line: 89, column: 2, offset: 4521 },
            end: { line: 89, column: 119, offset: 4638 }
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
                    start: { line: 90, column: 4, offset: 4642 },
                    end: { line: 90, column: 157, offset: 4795 }
                  }
                }
              ],
              position: {
                start: { line: 90, column: 4, offset: 4642 },
                end: { line: 90, column: 157, offset: 4795 }
              }
            }
          ],
          position: {
            start: { line: 90, column: 2, offset: 4640 },
            end: { line: 90, column: 157, offset: 4795 }
          }
        }
      ],
      position: {
        start: { line: 85, column: 2, offset: 4162 },
        end: { line: 90, column: 157, offset: 4795 }
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
            start: { line: 92, column: 5, offset: 4801 },
            end: { line: 92, column: 42, offset: 4838 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 4797 },
        end: { line: 92, column: 42, offset: 4838 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: '[A]synchronous Functional Programming builds on these concepts, extending the ideas of Functional Programming to modern JavaScript (ECMAScript 6 onwards). In particular, the [A]synchronous Functional Programming paradigm considers current asynchronous primitives (e.g. ',
          position: {
            start: { line: 94, column: 1, offset: 4840 },
            end: { line: 94, column: 270, offset: 5109 }
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
                start: { line: 94, column: 271, offset: 5110 },
                end: { line: 94, column: 279, offset: 5118 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 270, offset: 5109 },
            end: { line: 94, column: 370, offset: 5209 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 94, column: 370, offset: 5209 },
            end: { line: 94, column: 375, offset: 5214 }
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
                start: { line: 94, column: 376, offset: 5215 },
                end: { line: 94, column: 387, offset: 5226 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 375, offset: 5214 },
            end: { line: 94, column: 481, offset: 5320 }
          }
        },
        {
          type: 'text',
          value: ') when creating modular and predictable programs composed of functions.',
          position: {
            start: { line: 94, column: 481, offset: 5320 },
            end: { line: 94, column: 552, offset: 5391 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 4840 },
        end: { line: 94, column: 552, offset: 5391 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the ',
          position: {
            start: { line: 96, column: 1, offset: 5393 },
            end: { line: 96, column: 16, offset: 5408 }
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
                start: { line: 96, column: 17, offset: 5409 },
                end: { line: 96, column: 23, offset: 5415 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 16, offset: 5408 },
            end: { line: 96, column: 46, offset: 5438 }
          }
        },
        {
          type: 'text',
          value: ' library to operate in the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 96, column: 46, offset: 5438 },
            end: { line: 96, column: 120, offset: 5512 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 5393 },
        end: { line: 96, column: 120, offset: 5512 }
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
        start: { line: 98, column: 1, offset: 5514 },
        end: { line: 115, column: 4, offset: 5902 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Above we see a composition of functions created with the Rubico ',
          position: {
            start: { line: 117, column: 1, offset: 5904 },
            end: { line: 117, column: 65, offset: 5968 }
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
                start: { line: 117, column: 66, offset: 5969 },
                end: { line: 117, column: 73, offset: 5976 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 65, offset: 5968 },
            end: { line: 117, column: 89, offset: 5992 }
          }
        },
        {
          type: 'text',
          value: ' operator. ',
          position: {
            start: { line: 117, column: 89, offset: 5992 },
            end: { line: 117, column: 100, offset: 6003 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 117, column: 100, offset: 6003 },
            end: { line: 117, column: 109, offset: 6012 }
          }
        },
        {
          type: 'text',
          value: ' allows us to chain together operations sequentially, the result of one function becoming the argument to the next. The above composition starts with the ids ',
          position: {
            start: { line: 117, column: 109, offset: 6012 },
            end: { line: 117, column: 267, offset: 6170 }
          }
        },
        {
          type: 'inlineCode',
          value: '[1, 2, 3, 4, 5]',
          position: {
            start: { line: 117, column: 267, offset: 6170 },
            end: { line: 117, column: 284, offset: 6187 }
          }
        },
        {
          type: 'text',
          value: ', then using the async-enabled Rubico ',
          position: {
            start: { line: 117, column: 284, offset: 6187 },
            end: { line: 117, column: 322, offset: 6225 }
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
                start: { line: 117, column: 323, offset: 6226 },
                end: { line: 117, column: 326, offset: 6229 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 322, offset: 6225 },
            end: { line: 117, column: 338, offset: 6241 }
          }
        },
        {
          type: 'text',
          value: ' operator, makes a request for each id and parses out the response body. Each parsed out response body is then logged out with the Rubico ',
          position: {
            start: { line: 117, column: 338, offset: 6241 },
            end: { line: 117, column: 476, offset: 6379 }
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
                start: { line: 117, column: 477, offset: 6380 },
                end: { line: 117, column: 484, offset: 6387 }
              }
            }
          ],
          position: {
            start: { line: 117, column: 476, offset: 6379 },
            end: { line: 117, column: 500, offset: 6403 }
          }
        },
        {
          type: 'text',
          value: ' operator and the ',
          position: {
            start: { line: 117, column: 500, offset: 6403 },
            end: { line: 117, column: 518, offset: 6421 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 117, column: 518, offset: 6421 },
            end: { line: 117, column: 531, offset: 6434 }
          }
        },
        {
          type: 'text',
          value: ' function.',
          position: {
            start: { line: 117, column: 531, offset: 6434 },
            end: { line: 117, column: 541, offset: 6444 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5904 },
        end: { line: 117, column: 541, offset: 6444 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 119, column: 1, offset: 6446 },
            end: { line: 119, column: 23, offset: 6468 }
          }
        },
        {
          type: 'inlineCode',
          value: 'console.log',
          position: {
            start: { line: 119, column: 23, offset: 6468 },
            end: { line: 119, column: 36, offset: 6481 }
          }
        },
        {
          type: 'text',
          value: ' is a first-class function - it is provided to the higher order function ',
          position: {
            start: { line: 119, column: 36, offset: 6481 },
            end: { line: 119, column: 109, offset: 6554 }
          }
        },
        {
          type: 'inlineCode',
          value: 'forEach',
          position: {
            start: { line: 119, column: 109, offset: 6554 },
            end: { line: 119, column: 118, offset: 6563 }
          }
        },
        {
          type: 'text',
          value: ' as an argument. ',
          position: {
            start: { line: 119, column: 118, offset: 6563 },
            end: { line: 119, column: 135, offset: 6580 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 119, column: 135, offset: 6580 },
            end: { line: 119, column: 140, offset: 6585 }
          }
        },
        {
          type: 'text',
          value: ' is also a higher order function, accepting the anonymous first-class function ',
          position: {
            start: { line: 119, column: 140, offset: 6585 },
            end: { line: 119, column: 219, offset: 6664 }
          }
        },
        {
          type: 'inlineCode',
          value: 'async id => {...}',
          position: {
            start: { line: 119, column: 219, offset: 6664 },
            end: { line: 119, column: 238, offset: 6683 }
          }
        },
        {
          type: 'text',
          value: '. This combination of higher order functions and first-class functions using ',
          position: {
            start: { line: 119, column: 238, offset: 6683 },
            end: { line: 119, column: 315, offset: 6760 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 119, column: 315, offset: 6760 },
            end: { line: 119, column: 324, offset: 6769 }
          }
        },
        {
          type: 'text',
          value: ' is what is known as a "function composition". There are no pure functions in the above example.',
          position: {
            start: { line: 119, column: 324, offset: 6769 },
            end: { line: 119, column: 420, offset: 6865 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 6446 },
        end: { line: 119, column: 420, offset: 6865 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Now consider an example with pure functions:',
          position: {
            start: { line: 121, column: 1, offset: 6867 },
            end: { line: 121, column: 45, offset: 6911 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6867 },
        end: { line: 121, column: 45, offset: 6911 }
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
        start: { line: 123, column: 1, offset: 6913 },
        end: { line: 157, column: 4, offset: 7538 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In the above example, ',
          position: {
            start: { line: 159, column: 1, offset: 7540 },
            end: { line: 159, column: 23, offset: 7562 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 23, offset: 7562 },
            end: { line: 159, column: 28, offset: 7567 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 28, offset: 7567 },
            end: { line: 159, column: 33, offset: 7572 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 33, offset: 7572 },
            end: { line: 159, column: 41, offset: 7580 }
          }
        },
        {
          type: 'text',
          value: ' are pure functions. They are very simple, expressed almost as pure math. A given input to ',
          position: {
            start: { line: 159, column: 41, offset: 7580 },
            end: { line: 159, column: 132, offset: 7671 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 132, offset: 7671 },
            end: { line: 159, column: 137, offset: 7676 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 159, column: 137, offset: 7676 },
            end: { line: 159, column: 141, offset: 7680 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 141, offset: 7680 },
            end: { line: 159, column: 149, offset: 7688 }
          }
        },
        {
          type: 'text',
          value: ' would result in the same output for each invocation. The ',
          position: {
            start: { line: 159, column: 149, offset: 7688 },
            end: { line: 159, column: 207, offset: 7746 }
          }
        },
        {
          type: 'inlineCode',
          value: 'add',
          position: {
            start: { line: 159, column: 207, offset: 7746 },
            end: { line: 159, column: 212, offset: 7751 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 212, offset: 7751 },
            end: { line: 159, column: 274, offset: 7813 }
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
                start: { line: 159, column: 275, offset: 7814 },
                end: { line: 159, column: 281, offset: 7820 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 274, offset: 7813 },
            end: { line: 159, column: 296, offset: 7835 }
          }
        },
        {
          type: 'text',
          value: ' operator, and the ',
          position: {
            start: { line: 159, column: 296, offset: 7835 },
            end: { line: 159, column: 315, offset: 7854 }
          }
        },
        {
          type: 'inlineCode',
          value: 'square',
          position: {
            start: { line: 159, column: 315, offset: 7854 },
            end: { line: 159, column: 323, offset: 7862 }
          }
        },
        {
          type: 'text',
          value: ' function is provided as a first class function to the Rubico ',
          position: {
            start: { line: 159, column: 323, offset: 7862 },
            end: { line: 159, column: 385, offset: 7924 }
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
                start: { line: 159, column: 386, offset: 7925 },
                end: { line: 159, column: 389, offset: 7928 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 385, offset: 7924 },
            end: { line: 159, column: 401, offset: 7940 }
          }
        },
        {
          type: 'text',
          value: ' operator. Both ',
          position: {
            start: { line: 159, column: 401, offset: 7940 },
            end: { line: 159, column: 417, offset: 7956 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 159, column: 417, offset: 7956 },
            end: { line: 159, column: 425, offset: 7964 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 159, column: 425, offset: 7964 },
            end: { line: 159, column: 430, offset: 7969 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map',
          position: {
            start: { line: 159, column: 430, offset: 7969 },
            end: { line: 159, column: 435, offset: 7974 }
          }
        },
        {
          type: 'text',
          value: ' operators are considered to be higher order functions.',
          position: {
            start: { line: 159, column: 435, offset: 7974 },
            end: { line: 159, column: 490, offset: 8029 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 7540 },
        end: { line: 159, column: 490, offset: 8029 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The combination of first class and high order functions above is similar to what we have seen with ',
          position: {
            start: { line: 161, column: 1, offset: 8031 },
            end: { line: 161, column: 100, offset: 8130 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 100, offset: 8130 },
            end: { line: 161, column: 109, offset: 8139 }
          }
        },
        {
          type: 'text',
          value: ' in the previous example. The difference is the use of the operator ',
          position: {
            start: { line: 161, column: 109, offset: 8139 },
            end: { line: 161, column: 177, offset: 8207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'pipe',
          position: {
            start: { line: 161, column: 177, offset: 8207 },
            end: { line: 161, column: 183, offset: 8213 }
          }
        },
        {
          type: 'text',
          value: ' over ',
          position: {
            start: { line: 161, column: 183, offset: 8213 },
            end: { line: 161, column: 189, offset: 8219 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 189, offset: 8219 },
            end: { line: 161, column: 198, offset: 8228 }
          }
        },
        {
          type: 'text',
          value: ', in this case instead of creating a function composition with ',
          position: {
            start: { line: 161, column: 198, offset: 8228 },
            end: { line: 161, column: 261, offset: 8291 }
          }
        },
        {
          type: 'inlineCode',
          value: 'compose',
          position: {
            start: { line: 161, column: 261, offset: 8291 },
            end: { line: 161, column: 270, offset: 8300 }
          }
        },
        {
          type: 'text',
          value: ' we create a "function pipeline" with ',
          position: {
            start: { line: 161, column: 270, offset: 8300 },
            end: { line: 161, column: 308, offset: 8338 }
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
                start: { line: 161, column: 309, offset: 8339 },
                end: { line: 161, column: 313, offset: 8343 }
              }
            }
          ],
          position: {
            start: { line: 161, column: 308, offset: 8338 },
            end: { line: 161, column: 326, offset: 8356 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 161, column: 326, offset: 8356 },
            end: { line: 161, column: 327, offset: 8357 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8031 },
        end: { line: 161, column: 327, offset: 8357 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We see a new operation in the above example with ',
          position: {
            start: { line: 163, column: 1, offset: 8359 },
            end: { line: 163, column: 50, offset: 8408 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 50, offset: 8408 },
            end: { line: 163, column: 58, offset: 8416 }
          }
        },
        {
          type: 'text',
          value: '. It takes the squared numbers from ',
          position: {
            start: { line: 163, column: 58, offset: 8416 },
            end: { line: 163, column: 94, offset: 8452 }
          }
        },
        {
          type: 'inlineCode',
          value: 'map(square)',
          position: {
            start: { line: 163, column: 94, offset: 8452 },
            end: { line: 163, column: 107, offset: 8465 }
          }
        },
        {
          type: 'text',
          value: ' and adds them all together into a final sum. We see the operator ',
          position: {
            start: { line: 163, column: 107, offset: 8465 },
            end: { line: 163, column: 173, offset: 8531 }
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
                start: { line: 163, column: 174, offset: 8532 },
                end: { line: 163, column: 177, offset: 8535 }
              }
            }
          ],
          position: {
            start: { line: 163, column: 173, offset: 8531 },
            end: { line: 163, column: 189, offset: 8547 }
          }
        },
        {
          type: 'text',
          value: ' as well - it allows us to provide an asynchronous function to the composition, logging out the squared numbers while waiting 500 milliseconds between each log. With ',
          position: {
            start: { line: 163, column: 189, offset: 8547 },
            end: { line: 163, column: 355, offset: 8713 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap',
          position: {
            start: { line: 163, column: 355, offset: 8713 },
            end: { line: 163, column: 360, offset: 8718 }
          }
        },
        {
          type: 'text',
          value: ', the return value of the provided function is unused, so we can expect the input to the ',
          position: {
            start: { line: 163, column: 360, offset: 8718 },
            end: { line: 163, column: 449, offset: 8807 }
          }
        },
        {
          type: 'inlineCode',
          value: 'reduce',
          position: {
            start: { line: 163, column: 449, offset: 8807 },
            end: { line: 163, column: 457, offset: 8815 }
          }
        },
        {
          type: 'text',
          value: ' operation following the tap expression ',
          position: {
            start: { line: 163, column: 457, offset: 8815 },
            end: { line: 163, column: 497, offset: 8855 }
          }
        },
        {
          type: 'inlineCode',
          value: 'tap(async numbers => {...})',
          position: {
            start: { line: 163, column: 497, offset: 8855 },
            end: { line: 163, column: 526, offset: 8884 }
          }
        },
        {
          type: 'text',
          value: ' to be the same as the input to the tap expression.',
          position: {
            start: { line: 163, column: 526, offset: 8884 },
            end: { line: 163, column: 577, offset: 8935 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8359 },
        end: { line: 163, column: 577, offset: 8935 }
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
            start: { line: 165, column: 5, offset: 8941 },
            end: { line: 165, column: 15, offset: 8951 }
          }
        }
      ],
      position: {
        start: { line: 165, column: 1, offset: 8937 },
        end: { line: 165, column: 15, offset: 8951 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes the intro to the [A]synchronous Functional Programming paradigm.',
          position: {
            start: { line: 167, column: 1, offset: 8953 },
            end: { line: 167, column: 80, offset: 9032 }
          }
        }
      ],
      position: {
        start: { line: 167, column: 1, offset: 8953 },
        end: { line: 167, column: 80, offset: 9032 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about Rubico and would like to get started, please visit Rubico's home page, ",
          position: {
            start: { line: 169, column: 1, offset: 9034 },
            end: { line: 169, column: 97, offset: 9130 }
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
                start: { line: 169, column: 98, offset: 9131 },
                end: { line: 169, column: 109, offset: 9142 }
              }
            }
          ],
          position: {
            start: { line: 169, column: 97, offset: 9130 },
            end: { line: 169, column: 113, offset: 9146 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 169, column: 113, offset: 9146 },
            end: { line: 169, column: 114, offset: 9147 }
          }
        }
      ],
      position: {
        start: { line: 169, column: 1, offset: 9034 },
        end: { line: 169, column: 114, offset: 9147 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 170, column: 1, offset: 9148 }
  }
}