export default [
  {
    name: 'Transducer.map',
    synopsis: '```coffeescript [specscript]\n' +
      'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
      'type Transducer = Reducer=>Reducer\n' +
      '\n' +
      'Transducer.map(mapperFunc function) -> mappingTransducer Transducer\n' +
      '```',
    description: 'Creates a mapping transducer with a provided reducer. A reducer is a variadic function that depicts a relationship between an accumulator and any number of arguments. A transducer is a function that accepts a reducer as an argument and returns another reducer.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
      '\n' +
      'type Transducer = Reducer=>Reducer\n' +
      '```\n' +
      '\n' +
      'The transducer signature enables chaining functionality for reducers. `map` is core to this mechanism, and provides a way via transducers to transform the items of reducers.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const mapSquare = Transducer.map(square)\n' +
      '// mapSquare is a transducer\n' +
      '\n' +
      'const squareConcatReducer = mapSquare(concat)\n' +
      '// now mapSquare is passed the reducer function concat; squareConcatReducer\n' +
      '// is a reducer with chained functionality square and concat\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
      ") // '1491625'\n" +
      '```\n' +
      '\n' +
      'Create reducers with chained functionality by using the `Transducer.map` eager API.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const squareConcatReducer = Transducer.map(concat, square)\n' +
      '// now mapSquare is passed the reducer function concat; squareConcatReducer\n' +
      '// is a reducer with chained functionality square and concat\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Transducer.map',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
              'type Transducer = Reducer=>Reducer\n' +
              '\n' +
              'Transducer.map(mapperFunc function) -> mappingTransducer Transducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 210 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 210 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a mapping transducer with a provided reducer. A reducer is a variadic function that depicts a relationship between an accumulator and any number of arguments. A transducer is a function that accepts a reducer as an argument and returns another reducer.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 261, offset: 260 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 261, offset: 260 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
              '\n' +
              'type Transducer = Reducer=>Reducer',
            position: {
              start: { line: 3, column: 1, offset: 262 },
              end: { line: 7, column: 4, offset: 404 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The transducer signature enables chaining functionality for reducers. ',
                position: {
                  start: { line: 9, column: 1, offset: 406 },
                  end: { line: 9, column: 71, offset: 476 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 9, column: 71, offset: 476 },
                  end: { line: 9, column: 76, offset: 481 }
                }
              },
              {
                type: 'text',
                value: ' is core to this mechanism, and provides a way via transducers to transform the items of reducers.',
                position: {
                  start: { line: 9, column: 76, offset: 481 },
                  end: { line: 9, column: 174, offset: 579 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 406 },
              end: { line: 9, column: 174, offset: 579 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const concat = (array, item) => array.concat(item)\n' +
              '\n' +
              'const mapSquare = Transducer.map(square)\n' +
              '// mapSquare is a transducer\n' +
              '\n' +
              'const squareConcatReducer = mapSquare(concat)\n' +
              '// now mapSquare is passed the reducer function concat; squareConcatReducer\n' +
              '// is a reducer with chained functionality square and concat\n' +
              '\n' +
              'console.log(\n' +
              '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'console.log(\n' +
              "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
              ") // '1491625'",
            position: {
              start: { line: 11, column: 1, offset: 581 },
              end: { line: 30, column: 4, offset: 1123 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create reducers with chained functionality by using the ',
                position: {
                  start: { line: 32, column: 1, offset: 1125 },
                  end: { line: 32, column: 57, offset: 1181 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Transducer.map',
                position: {
                  start: { line: 32, column: 57, offset: 1181 },
                  end: { line: 32, column: 73, offset: 1197 }
                }
              },
              {
                type: 'text',
                value: ' eager API.',
                position: {
                  start: { line: 32, column: 73, offset: 1197 },
                  end: { line: 32, column: 84, offset: 1208 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 1, offset: 1125 },
              end: { line: 32, column: 84, offset: 1208 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const concat = (array, item) => array.concat(item)\n' +
              '\n' +
              'const squareConcatReducer = Transducer.map(concat, square)\n' +
              '// now mapSquare is passed the reducer function concat; squareConcatReducer\n' +
              '// is a reducer with chained functionality square and concat',
            position: {
              start: { line: 34, column: 1, offset: 1210 },
              end: { line: 42, column: 4, offset: 1526 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 42, column: 4, offset: 1526 }
        }
      }
    }
  },
  {
    name: 'Transducer.filter',
    synopsis: '```coffeescript [specscript]\n' +
      'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
      'type Transducer = Reducer=>Reducer\n' +
      '\n' +
      'Transducer.filter(predicate function) -> filteringTransducer Transducer\n' +
      '```',
    description: "A reducer in filterable position creates a filtering reducer - one that skips items of the reducer's reducing operation if they test falsy by the predicate. It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of `reduce` must support asynchronous operations. This library provides such an implementation as `reduce`.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const concatOddNumbers = filter(isOdd)(concat)\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(concatOddNumbers, []),\n' +
      ') // [1, 3, 5]\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Transducer.filter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
              'type Transducer = Reducer=>Reducer\n' +
              '\n' +
              'Transducer.filter(predicate function) -> filteringTransducer Transducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 214 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 214 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "A reducer in filterable position creates a filtering reducer - one that skips items of the reducer's reducing operation if they test falsy by the predicate. It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of ",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 262, offset: 261 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 1, column: 262, offset: 261 },
                  end: { line: 1, column: 270, offset: 269 }
                }
              },
              {
                type: 'text',
                value: ' must support asynchronous operations. This library provides such an implementation as ',
                position: {
                  start: { line: 1, column: 270, offset: 269 },
                  end: { line: 1, column: 357, offset: 356 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 1, column: 357, offset: 356 },
                  end: { line: 1, column: 365, offset: 364 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 365, offset: 364 },
                  end: { line: 1, column: 366, offset: 365 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 366, offset: 365 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const concat = (array, item) => array.concat(item)\n' +
              '\n' +
              'const concatOddNumbers = filter(isOdd)(concat)\n' +
              '\n' +
              'console.log(\n' +
              '  [1, 2, 3, 4, 5].reduce(concatOddNumbers, []),\n' +
              ') // [1, 3, 5]',
            position: {
              start: { line: 3, column: 1, offset: 367 },
              end: { line: 13, column: 4, offset: 614 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 614 }
        }
      }
    }
  },
  {
    name: 'Transducer.flatMap',
    synopsis: '```coffeescript [specscript]\n' +
      'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
      'type Transducer = Reducer=>Reducer\n' +
      '\n' +
      'Transducer.flatMap(flatMapper) -> flatMappingTransducer Transducer\n' +
      '```',
    description: "Additionally, `flatMap` is a powerful option when working with transducers. A flatMapping transducer applies a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const powers = number => [number, number ** 2, number ** 3]\n' +
      '\n' +
      'const oddPowers = pipe([\n' +
      '  filter(isOdd),\n' +
      '  flatMap(powers),\n' +
      '])\n' +
      '\n' +
      'const arrayConcat = (array, value) => array.concat(value)\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(oddPowers(arrayConcat), [])([1, 2, 3, 4, 5]),\n' +
      ') // [1, 1, 1, 3, 9, 27, 5, 25, 125]\n' +
      '```\n' +
      '\n' +
      'In the case above, each item of the array of numbers returned by `powers` is called with the reducer `arrayConcat` for flattening into the final result.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Transducer.flatMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 19, offset: 18 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Reducer = (accumulator any, item any)=>(nextAccumulator Promise|any)\n' +
              'type Transducer = Reducer=>Reducer\n' +
              '\n' +
              'Transducer.flatMap(flatMapper) -> flatMappingTransducer Transducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 209 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 209 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Additionally, ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 1, column: 15, offset: 14 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              },
              {
                type: 'text',
                value: " is a powerful option when working with transducers. A flatMapping transducer applies a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.",
                position: {
                  start: { line: 1, column: 24, offset: 23 },
                  end: { line: 1, column: 224, offset: 223 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 224, offset: 223 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const powers = number => [number, number ** 2, number ** 3]\n' +
              '\n' +
              'const oddPowers = pipe([\n' +
              '  filter(isOdd),\n' +
              '  flatMap(powers),\n' +
              '])\n' +
              '\n' +
              'const arrayConcat = (array, value) => array.concat(value)\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(oddPowers(arrayConcat), [])([1, 2, 3, 4, 5]),\n' +
              ') // [1, 1, 1, 3, 9, 27, 5, 25, 125]',
            position: {
              start: { line: 3, column: 1, offset: 225 },
              end: { line: 18, column: 4, offset: 586 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'In the case above, each item of the array of numbers returned by ',
                position: {
                  start: { line: 20, column: 1, offset: 588 },
                  end: { line: 20, column: 66, offset: 653 }
                }
              },
              {
                type: 'inlineCode',
                value: 'powers',
                position: {
                  start: { line: 20, column: 66, offset: 653 },
                  end: { line: 20, column: 74, offset: 661 }
                }
              },
              {
                type: 'text',
                value: ' is called with the reducer ',
                position: {
                  start: { line: 20, column: 74, offset: 661 },
                  end: { line: 20, column: 102, offset: 689 }
                }
              },
              {
                type: 'inlineCode',
                value: 'arrayConcat',
                position: {
                  start: { line: 20, column: 102, offset: 689 },
                  end: { line: 20, column: 115, offset: 702 }
                }
              },
              {
                type: 'text',
                value: ' for flattening into the final result.',
                position: {
                  start: { line: 20, column: 115, offset: 702 },
                  end: { line: 20, column: 153, offset: 740 }
                }
              }
            ],
            position: {
              start: { line: 20, column: 1, offset: 588 },
              end: { line: 20, column: 153, offset: 740 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 20, column: 153, offset: 740 }
        }
      }
    }
  },
  {
    name: '__',
    synopsis: '```coffeescript [specscript]\n__ = Symbol(placeholder)\n```',
    description: 'A special placeholder value `__` (two underscores) that denotes the position of an argument in a curried function.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  curry.arity(3, Array.of, __, 2, 3)(1),\n' +
      ') // [1, 2, 3]\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '__',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '__ = Symbol(placeholder)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 57 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 57 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A special placeholder value ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              },
              {
                type: 'inlineCode',
                value: '__',
                position: {
                  start: { line: 1, column: 29, offset: 28 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              },
              {
                type: 'text',
                value: ' (two underscores) that denotes the position of an argument in a curried function.',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 115, offset: 114 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 115, offset: 114 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              '  curry.arity(3, Array.of, __, 2, 3)(1),\n' +
              ') // [1, 2, 3]',
            position: {
              start: { line: 3, column: 1, offset: 116 },
              end: { line: 7, column: 4, offset: 215 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 215 }
        }
      }
    }
  },
  {
    name: 'FilteringIterator',
    synopsis: '```coffeescript [specscript]\n' +
      'FilteringIterator<\n' +
      '  T any,\n' +
      '  iterator Iterator<T>,\n' +
      '  predicate T=>boolean, # no async\n' +
      '>(iterator, predicate) -> filteringIterator Iterator<T>\n' +
      '\n' +
      'filteringIterator.next() -> { value: T, done: boolean }\n' +
      '```',
    description: 'Creates a filtering iterator, i.e. an iterator that filteres a source iterator by predicate.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'FilteringIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'FilteringIterator<\n' +
              '  T any,\n' +
              '  iterator Iterator<T>,\n' +
              '  predicate T=>boolean, # no async\n' +
              '>(iterator, predicate) -> filteringIterator Iterator<T>\n' +
              '\n' +
              'filteringIterator.next() -> { value: T, done: boolean }',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 232 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 232 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a filtering iterator, i.e. an iterator that filteres a source iterator by predicate.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 93, offset: 92 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 93, offset: 92 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 93, offset: 92 }
        }
      }
    }
  },
  {
    name: 'MappingIterator',
    synopsis: '```coffeescript [specscript]\n' +
      'MappingIterator<\n' +
      '  T any,\n' +
      '  iterator Iterator<T>,\n' +
      '  mapper T=>any,\n' +
      '>(iterator, mapper) -> mappingIterator Object\n' +
      '\n' +
      'mappingIterator.next() -> nextIteration { value: any, done: boolean }\n' +
      '```',
    description: 'Creates a mapping iterator, i.e. an iterator that applies a mapper to each item of a source iterator.\n' +
      '\n' +
      'Note: consuming the mapping iterator also consumes the source iterator.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'MappingIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'MappingIterator<\n' +
              '  T any,\n' +
              '  iterator Iterator<T>,\n' +
              '  mapper T=>any,\n' +
              '>(iterator, mapper) -> mappingIterator Object\n' +
              '\n' +
              'mappingIterator.next() -> nextIteration { value: any, done: boolean }',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 216 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 216 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a mapping iterator, i.e. an iterator that applies a mapper to each item of a source iterator.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 102, offset: 101 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 102, offset: 101 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: consuming the mapping iterator also consumes the source iterator.',
                position: {
                  start: { line: 3, column: 1, offset: 103 },
                  end: { line: 3, column: 72, offset: 174 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 103 },
              end: { line: 3, column: 72, offset: 174 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 72, offset: 174 }
        }
      }
    }
  },
  {
    name: 'NextIteration',
    synopsis: 'NextIteration(value any) -> nextIteration { value, done: false }',
    description: 'Create an object to send for the next iteration',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'NextIteration',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'NextIteration(value any) -> nextIteration { value, done: false }',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 65, offset: 64 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 65, offset: 64 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 65, offset: 64 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create an object to send for the next iteration',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 48, offset: 47 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 48, offset: 47 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 48, offset: 47 }
        }
      }
    }
  },
  {
    name: 'add',
    synopsis: 'add (a any, b any) -> a + b',
    description: '`+` two things',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'add',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'add (a any, b any) -> a + b',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 28, offset: 27 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: '+',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              },
              {
                type: 'text',
                value: ' two things',
                position: {
                  start: { line: 1, column: 4, offset: 3 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      }
    }
  },
  {
    name: 'always',
    synopsis: '```coffeescript [specscript]\nalways(value any) -> getter ()=>value\n```',
    description: 'Create a function that always returns a value.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'always',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'always(value any) -> getter ()=>value',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 70 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 70 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a function that always returns a value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 47, offset: 46 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 47, offset: 46 }
        }
      }
    }
  },
  {
    name: 'arrayConditional',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayConditional(\n' +
      '  array Array<function|value>,\n' +
      '  args Array,\n' +
      '  funcsIndex number,\n' +
      ') -> Promise|any\n' +
      '```',
    description: 'Conditional operator `a ? b : c ? d : e ? ...` for functions.',
    TODO: [
      'isPromise conditional await',
      'benchmark vs regular promise handling'
    ],
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayConditional',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayConditional(\n' +
              '  array Array<function|value>,\n' +
              '  args Array,\n' +
              '  funcsIndex number,\n' +
              ') -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 133 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 133 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Conditional operator ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 }
                }
              },
              {
                type: 'inlineCode',
                value: 'a ? b : c ? d : e ? ...',
                position: {
                  start: { line: 1, column: 22, offset: 21 },
                  end: { line: 1, column: 47, offset: 46 }
                }
              },
              {
                type: 'text',
                value: ' for functions.',
                position: {
                  start: { line: 1, column: 47, offset: 46 },
                  end: { line: 1, column: 62, offset: 61 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 62, offset: 61 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 62, offset: 61 }
        }
      },
      TODO: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      }
    }
  },
  {
    name: 'arrayExtend',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayExtend(array Array, values Array) -> array\n' +
      '```',
    description: 'Extend an array with values.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayExtend(array Array, values Array) -> array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 80 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 80 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Extend an array with values.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      }
    }
  },
  {
    name: 'arrayExtendMap',
    synopsis: '```coffeescript [specscript]\n' +
      'any -> value; any -> mapped\n' +
      '\n' +
      'arrayExtendMap(\n' +
      '  array Array<mapped>,\n' +
      '  values Array<value>,\n' +
      '  valuesIndex number,\n' +
      '  valuesMapper value=>mapped,\n' +
      ') -> array\n' +
      '```',
    description: '`arrayExtend` while mapping',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayExtendMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'any -> value; any -> mapped\n' +
              '\n' +
              'arrayExtendMap(\n' +
              '  array Array<mapped>,\n' +
              '  values Array<value>,\n' +
              '  valuesIndex number,\n' +
              '  valuesMapper value=>mapped,\n' +
              ') -> array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 186 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 186 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'arrayExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'text',
                value: ' while mapping',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 28, offset: 27 }
        }
      }
    }
  },
  {
    name: 'arrayExtendMapIndexes',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayExtendMapIndexes(\n' +
      '  array Array,\n' +
      '  values Array,\n' +
      '  mapper function,\n' +
      '  index number,\n' +
      ') -> array\n' +
      '```',
    description: '`arrayExtend` while mapping indexes',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayExtendMapIndexes',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 22, offset: 21 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayExtendMapIndexes(\n' +
              '  array Array,\n' +
              '  values Array,\n' +
              '  mapper function,\n' +
              '  index number,\n' +
              ') -> array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 132 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 132 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'arrayExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'text',
                value: ' while mapping indexes',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 36, offset: 35 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 36, offset: 35 }
        }
      }
    }
  },
  {
    name: 'arrayExtendMapWithIndex',
    catchphrase: 'internal extend while mapping with index',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayExtendMapWithIndex<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  values Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '  index number,\n' +
      '>(array, values, mapper, index) -> Promise|array\n' +
      '```',
    description: 'Extend an array with values from a mapping operation.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayExtendMapWithIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'internal extend while mapping with index',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 41, offset: 40 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayExtendMapWithIndex<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  values Array<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '  index number,\n' +
              '>(array, values, mapper, index) -> Promise|array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 193 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 193 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Extend an array with values from a mapping operation.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 54, offset: 53 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 54, offset: 53 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 54, offset: 53 }
        }
      }
    }
  },
  {
    name: 'arrayFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayFilter<T>(\n' +
      '  array Array<T>,\n' +
      '  predicate T=>Promise|boolean,\n' +
      ') -> result Promise|Array<T>\n' +
      '```',
    description: 'Filter an array concurrently by predicate. `predicate` may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayFilter<T>(\n' +
              '  array Array<T>,\n' +
              '  predicate T=>Promise|boolean,\n' +
              ') -> result Promise|Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 127 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 127 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter an array concurrently by predicate. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 44, offset: 43 }
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 44, offset: 43 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 76, offset: 75 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 76, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 76, offset: 75 }
        }
      }
    }
  },
  {
    name: 'arrayFilterByConditions',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayFilterByConditions(\n' +
      '  array Array,\n' +
      '  result Array,\n' +
      '  index number,\n' +
      '  conditions Array<boolean>,\n' +
      ') -> result\n' +
      '```',
    description: 'Filter an array by a boolean array of conditions',
    TODO: 'switch positions of index and conditions',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayFilterByConditions',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayFilterByConditions(\n' +
              '  array Array,\n' +
              '  result Array,\n' +
              '  index number,\n' +
              '  conditions Array<boolean>,\n' +
              ') -> result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 145 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 145 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter an array by a boolean array of conditions',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 49, offset: 48 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 49, offset: 48 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'switch positions of index and conditions',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 41, offset: 40 }
        }
      }
    }
  },
  {
    name: 'arrayFilterWithIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayFilterWithIndex<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  index number,\n' +
      '  indexedPredicate (T, index, array)=>Promise|boolean,\n' +
      '>(array, indexedPredicate) -> filteredWithIndex Array<T>\n' +
      '```',
    description: 'Filter an array concurrently by predicate.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayFilterWithIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayFilterWithIndex<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  index number,\n' +
              '  indexedPredicate (T, index, array)=>Promise|boolean,\n' +
              '>(array, indexedPredicate) -> filteredWithIndex Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 209 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 209 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter an array concurrently by predicate.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 43, offset: 42 }
        }
      }
    }
  },
  {
    name: 'arrayForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  array Array<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'arrayForEach(array, callback) -> ()\n' +
      '```',
    description: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.\n' +
      '\n' +
      'Note: iterator is consumed',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  array Array<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'arrayForEach(array, callback) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 115 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 115 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 99, offset: 98 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: iterator is consumed',
                position: {
                  start: { line: 3, column: 1, offset: 100 },
                  end: { line: 3, column: 27, offset: 126 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 3, column: 27, offset: 126 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 27, offset: 126 }
        }
      }
    }
  },
  {
    name: 'arrayJoin',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayJoin(array Array, delimiter string) -> string\n' +
      '```',
    description: 'Call `.join` on an array.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayJoin',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayJoin(array Array, delimiter string) -> string',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 83 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 83 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'inlineCode',
                value: '.join',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              },
              {
                type: 'text',
                value: ' on an array.',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 26, offset: 25 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 26, offset: 25 }
        }
      }
    }
  },
  {
    name: 'arrayMap',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMap(\n' +
      '  array Array,\n' +
      '  mapper (item any, index number, array Array)=>Promise|any,\n' +
      ') -> Promise|Array\n' +
      '```',
    description: 'Apply a mapper to each item of an array, returning an array. Mapper may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMap(\n' +
              '  array Array,\n' +
              '  mapper (item any, index number, array Array)=>Promise|any,\n' +
              ') -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 137 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 137 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper to each item of an array, returning an array. Mapper may be asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 89, offset: 88 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 89, offset: 88 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 89, offset: 88 }
        }
      }
    }
  },
  {
    name: 'arrayMapPoolAsync',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapPoolAsync<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '  concurrencyLimit number,\n' +
      '  result Array,\n' +
      '  index number,\n' +
      '  promises Set<Promise>,\n' +
      '>(array, mapper, concurrencyLimit, result, index, promises) -> result\n' +
      '```',
    description: 'Apply a mapper with limited concurrency to each item of an array, returning a Promise of an array of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMapPoolAsync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapPoolAsync<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '  concurrencyLimit number,\n' +
              '  result Array,\n' +
              '  index number,\n' +
              '  promises Set<Promise>,\n' +
              '>(array, mapper, concurrencyLimit, result, index, promises) -> result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 257 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 257 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper with limited concurrency to each item of an array, returning a Promise of an array of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 110, offset: 109 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 110, offset: 109 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 110, offset: 109 }
        }
      }
    }
  },
  {
    name: 'arrayMapPool',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapPool<\n' +
      '  T any,\n' +
      '  array Array<T>\n' +
      '  mapper T=>Promise|any,\n' +
      '  concurrentLimit number,\n' +
      '>(array, mapper, concurrentLimit) -> Promise|Array\n' +
      '```',
    description: 'Apply a mapper with limited concurrency to each item of an array, returning an array of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMapPool',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapPool<\n' +
              '  T any,\n' +
              '  array Array<T>\n' +
              '  mapper T=>Promise|any,\n' +
              '  concurrentLimit number,\n' +
              '>(array, mapper, concurrentLimit) -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 174 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 174 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper with limited concurrency to each item of an array, returning an array of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 97, offset: 96 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 97, offset: 96 }
        }
      }
    }
  },
  {
    name: 'arrayMapSeriesAsync',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapSeriesAsync<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '  result Array,\n' +
      '  index number,\n' +
      '>(array, mapper, result Array, index) -> Promise|result\n' +
      '```',
    description: 'Apply a mapper in series to each item of an array, returning a Promise of an array of results. `mapper` can be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMapSeriesAsync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapSeriesAsync<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '  result Array,\n' +
              '  index number,\n' +
              '>(array, mapper, result Array, index) -> Promise|result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 193 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 193 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper in series to each item of an array, returning a Promise of an array of results. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 96, offset: 95 }
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 96, offset: 95 },
                  end: { line: 1, column: 104, offset: 103 }
                }
              },
              {
                type: 'text',
                value: ' can be asynchronous.',
                position: {
                  start: { line: 1, column: 104, offset: 103 },
                  end: { line: 1, column: 125, offset: 124 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 125, offset: 124 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 125, offset: 124 }
        }
      }
    }
  },
  {
    name: 'arrayMapSeries',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapSeries<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(array, mapper) -> mappedInSeries Promise|Array\n' +
      '```',
    description: 'Apply a mapper in series to each item of an array, returning an array of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMapSeries',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapSeries<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(array, mapper) -> mappedInSeries Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 149 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 149 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper in series to each item of an array, returning an array of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 82, offset: 81 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 82, offset: 81 }
        }
      }
    }
  },
  {
    name: 'arrayMapWithIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapWithIndex<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  index number,\n' +
      '  indexedMapper (T, index, array)=>Promise|any,\n' +
      '>(array, mapper) -> mappedWithIndex Promise|Array\n' +
      '```',
    description: 'Apply an indexed mapper to each item of an array, returning an array of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMapWithIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapWithIndex<\n' +
              '  T any,\n' +
              '  array Array<T>,\n' +
              '  index number,\n' +
              '  indexedMapper (T, index, array)=>Promise|any,\n' +
              '>(array, mapper) -> mappedWithIndex Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 192 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 192 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply an indexed mapper to each item of an array, returning an array of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 81, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 81, offset: 80 }
        }
      }
    }
  },
  {
    name: 'arrayReduceAsync',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayReduceAsync<T>(\n' +
      '  array Array<T>,\n' +
      '  reducer (any, T)=>any,\n' +
      '  result any,\n' +
      '  index number,\n' +
      ') -> result\n' +
      '```',
    description: 'Execute a reducer for each item of an array, returning a Promise of a single value.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayReduceAsync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayReduceAsync<T>(\n' +
              '  array Array<T>,\n' +
              '  reducer (any, T)=>any,\n' +
              '  result any,\n' +
              '  index number,\n' +
              ') -> result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 138 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 138 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a reducer for each item of an array, returning a Promise of a single value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 84, offset: 83 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 84, offset: 83 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 84, offset: 83 }
        }
      }
    }
  },
  {
    name: 'async',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  result any,\n' +
      '  func ...args=>result\n' +
      '\n' +
      'async(func) -> ...args=>Promise<result>\n' +
      '```',
    description: 'Make a function always return a promise.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'async',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var args ...any,\n' +
              '  result any,\n' +
              '  func ...args=>result\n' +
              '\n' +
              'async(func) -> ...args=>Promise<result>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 127 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 127 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Make a function always return a promise.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 41, offset: 40 }
        }
      }
    }
  },
  {
    name: 'asyncGeneratorFunctionFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'asyncGeneratorFunctionFilter<\n' +
      '  T any,\n' +
      '  args ...any,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '>(asyncGeneratorFunction, predicate)\n' +
      '  -> filteringAsyncGeneratorFunction ...args=>AsyncGenerator<T>\n' +
      '```',
    description: 'Filter an async generator function by predicate. Predicate may be asynchronous, in which case its evaluation is awaited.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'asyncGeneratorFunctionFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'asyncGeneratorFunctionFilter<\n' +
              '  T any,\n' +
              '  args ...any,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '>(asyncGeneratorFunction, predicate)\n' +
              '  -> filteringAsyncGeneratorFunction ...args=>AsyncGenerator<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 272 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 272 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter an async generator function by predicate. Predicate may be asynchronous, in which case its evaluation is awaited.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 121, offset: 120 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 121, offset: 120 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 121, offset: 120 }
        }
      }
    }
  },
  {
    name: 'asyncGeneratorFunctionForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'asyncGeneratorFunctionForEach(asyncGeneratorFunction, callback) -> ...args=>Promise<AsyncGenerator<>>\n' +
      '```',
    description: 'Create an async generator executor that executes a callback for each item of an async generator generated by an async generator function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'asyncGeneratorFunctionForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 30, offset: 29 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'asyncGeneratorFunctionForEach(asyncGeneratorFunction, callback) -> ...args=>Promise<AsyncGenerator<>>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 216 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 216 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create an async generator executor that executes a callback for each item of an async generator generated by an async generator function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 138, offset: 137 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 138, offset: 137 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 138, offset: 137 }
        }
      }
    }
  },
  {
    name: 'asyncGeneratorFunctionMap',
    synopsis: '```coffeescript [specscript]\n' +
      'asyncGeneratorFunctionMap<\n' +
      '  T any,\n' +
      '  args ...any,\n' +
      '  asyncGeneratorFunc ...args=>AsyncGenerator<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(asyncGeneratorFunc, mapper)\n' +
      '  -> mappingAsyncGeneratorFunc ...args=>AsyncGenerator,\n' +
      '```',
    description: 'Create a mapping async generator function from an async generator function and a mapper. A mapping async generator function produces async mapping generators that apply the mapper to each item of the original async generator.\n' +
      '\n' +
      '`mapper` may be asynchronous.',
    TODO: 'isPromise optimization',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'asyncGeneratorFunctionMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 26, offset: 25 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 26, offset: 25 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'asyncGeneratorFunctionMap<\n' +
              '  T any,\n' +
              '  args ...any,\n' +
              '  asyncGeneratorFunc ...args=>AsyncGenerator<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(asyncGeneratorFunc, mapper)\n' +
              '  -> mappingAsyncGeneratorFunc ...args=>AsyncGenerator,',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 243 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 243 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a mapping async generator function from an async generator function and a mapper. A mapping async generator function produces async mapping generators that apply the mapper to each item of the original async generator.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 226, offset: 225 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 226, offset: 225 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 3, column: 1, offset: 227 },
                  end: { line: 3, column: 9, offset: 235 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 3, column: 9, offset: 235 },
                  end: { line: 3, column: 30, offset: 256 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 227 },
              end: { line: 3, column: 30, offset: 256 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 30, offset: 256 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isPromise optimization',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 23, offset: 22 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 23, offset: 22 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 23, offset: 22 }
        }
      }
    }
  },
  {
    name: 'asyncIteratorForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  asyncIterator AsyncIterator<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'asyncIteratorForEach(asyncIterator, callback) -> Promise<>\n' +
      '```',
    description: 'Execute a callback function for each item of an async iterator',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'asyncIteratorForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  asyncIterator AsyncIterator<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'asyncIteratorForEach(asyncIterator, callback) -> Promise<>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 154 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 154 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a callback function for each item of an async iterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 63, offset: 62 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 63, offset: 62 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 63, offset: 62 }
        }
      }
    }
  },
  {
    name: 'asyncIteratorToArray',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  asyncIterator AsyncIterator<T>\n' +
      '\n' +
      'asyncIteratorToArray(asyncIterator) -> Array<T>\n' +
      '```',
    description: 'Convert an async iterator to an array.\n\nNote: async iterator is consumed',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'asyncIteratorToArray',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  asyncIterator AsyncIterator<T>\n' +
              '\n' +
              'asyncIteratorToArray(asyncIterator) -> Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 125 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 125 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Convert an async iterator to an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: async iterator is consumed',
                position: {
                  start: { line: 3, column: 1, offset: 40 },
                  end: { line: 3, column: 33, offset: 72 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 40 },
              end: { line: 3, column: 33, offset: 72 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 33, offset: 72 }
        }
      }
    }
  },
  {
    name: '_binaryExtend',
    synopsis: '```coffeescript [specscript]\n' +
      '_binaryExtend(\n' +
      '  typedArray TypedArray,\n' +
      '  array Array|TypedArray,\n' +
      ') -> concatenatedTypedArray\n' +
      '```',
    description: 'Extend a typed array with an array of values.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '_binaryExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '_binaryExtend(\n' +
              '  typedArray TypedArray,\n' +
              '  array Array|TypedArray,\n' +
              ') -> concatenatedTypedArray',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 126 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 126 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Extend a typed array with an array of values.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 46, offset: 45 }
        }
      }
    }
  },
  {
    name: 'binaryExtend',
    synopsis: '```coffeescript [specscript]\n' +
      'binaryExtend(\n' +
      '  typedArray TypedArray,\n' +
      '  array Array|TypedArray|any,\n' +
      ') -> concatenatedTypedArray\n' +
      '```',
    description: 'Types branching for _binaryExtend',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'binaryExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'binaryExtend(\n' +
              '  typedArray TypedArray,\n' +
              '  array Array|TypedArray|any,\n' +
              ') -> concatenatedTypedArray',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 129 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 129 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Types branching for _binaryExtend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 34, offset: 33 }
        }
      }
    }
  },
  {
    name: 'callPropBinary',
    synopsis: '```coffeescript [specscript]\n' +
      'callPropBinary(\n' +
      '  value object,\n' +
      '  property string,\n' +
      '  arg0 any,\n' +
      '  arg1 any,\n' +
      ') -> value[property](arg0, arg1)\n' +
      '```',
    description: 'Call a property function on a value with two arguments.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'callPropBinary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'callPropBinary(\n' +
              '  value object,\n' +
              '  property string,\n' +
              '  arg0 any,\n' +
              '  arg1 any,\n' +
              ') -> value[property](arg0, arg1)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 140 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 140 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a property function on a value with two arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 56, offset: 55 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 56, offset: 55 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 56, offset: 55 }
        }
      }
    }
  },
  {
    name: 'callPropUnary',
    synopsis: '```coffeescript [specscript]\n' +
      'callPropUnary(\n' +
      '  value object,\n' +
      '  property string,\n' +
      '  arg0 any,\n' +
      ') -> value[property](arg0)\n' +
      '```',
    description: 'Call a property function on a value with a single argument.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'callPropUnary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'callPropUnary(\n' +
              '  value object,\n' +
              '  property string,\n' +
              '  arg0 any,\n' +
              ') -> value[property](arg0)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 121 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 121 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a property function on a value with a single argument.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 60, offset: 59 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 60, offset: 59 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 60, offset: 59 }
        }
      }
    }
  },
  {
    name: 'catcherApply',
    synopsis: '```coffeescript [specscript]\n' +
      'catcherApply<\n' +
      '  args ...any,\n' +
      '  err Error|any,\n' +
      '  catcher (err, ...args)=>any,\n' +
      '>(catcher, err, args) -> catcher(err, ...args)\n' +
      '```',
    description: 'Apply an error and arguments to a catcher.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'catcherApply',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'catcherApply<\n' +
              '  args ...any,\n' +
              '  err Error|any,\n' +
              '  catcher (err, ...args)=>any,\n' +
              '>(catcher, err, args) -> catcher(err, ...args)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 156 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 156 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply an error and arguments to a catcher.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 43, offset: 42 }
        }
      }
    }
  },
  {
    name: 'curry1',
    synopsis: '```coffeescript [specscript]\n' +
      '__ = Symbol(placeholder)\n' +
      '\n' +
      'var func function,\n' +
      '  arg0 __|any,\n' +
      '  _arg0 __|any\n' +
      '\n' +
      'curry1(func, arg0) -> curried _arg0=>function|any\n' +
      '```',
    description: 'Curry a unary function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry1',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '__ = Symbol(placeholder)\n' +
              '\n' +
              'var func function,\n' +
              '  arg0 __|any,\n' +
              '  _arg0 __|any\n' +
              '\n' +
              'curry1(func, arg0) -> curried _arg0=>function|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 158 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 158 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry a unary function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      }
    }
  },
  {
    name: 'curry2',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curry2(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      ') -> function\n' +
      '```',
    description: 'Curry a binary function.\n' +
      '\n' +
      'Note: exactly one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry2',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curry2(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 133 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 133 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry a binary function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: exactly one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 26 },
                  end: { line: 3, column: 51, offset: 76 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 26 },
              end: { line: 3, column: 51, offset: 76 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 51, offset: 76 }
        }
      }
    }
  },
  {
    name: 'curry3',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curry3(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      '  arg2 __|any\n' +
      ') -> function\n' +
      '```',
    description: 'Curry a 3-ary function.\n' +
      '\n' +
      'Note: exactly one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curry3(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              '  arg2 __|any\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 147 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 147 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry a 3-ary function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: exactly one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 25 },
                  end: { line: 3, column: 51, offset: 75 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 51, offset: 75 }
        }
      }
    }
  },
  {
    name: 'curry4',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curry4(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      '  arg2 __|any,\n' +
      '  arg3 __|any,\n' +
      ') -> function\n' +
      '```',
    description: 'Curry a 4-ary function.\n' +
      '\n' +
      'Note: exactly one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry4',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curry4(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              '  arg2 __|any,\n' +
              '  arg3 __|any,\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 163 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 163 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry a 4-ary function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: exactly one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 25 },
                  end: { line: 3, column: 51, offset: 75 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 51, offset: 75 }
        }
      }
    }
  },
  {
    name: 'curry5',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curry5(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      '  arg2 __|any,\n' +
      '  arg3 __|any,\n' +
      '  arg4 __|any,\n' +
      ') -> function\n' +
      '```',
    description: 'Curry a 5-ary function.\n' +
      '\n' +
      'Note: exactly one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry5',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curry5(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              '  arg2 __|any,\n' +
              '  arg3 __|any,\n' +
              '  arg4 __|any,\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 178 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 178 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry a 5-ary function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: exactly one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 25 },
                  end: { line: 3, column: 51, offset: 75 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 51, offset: 75 }
        }
      }
    }
  },
  {
    name: 'curryArgs2',
    synopsis: '```coffeescript [specscript]\n' +
      "type __ = Symbol('placeholder')\n" +
      '\n' +
      'curryArgs2(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      ') -> function\n' +
      '```',
    description: 'Curry arguments for a 2-ary function. Arguments are supplied in placeholder position as an array.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curryArgs2',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "type __ = Symbol('placeholder')\n" +
              '\n' +
              'curryArgs2(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 142 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 142 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry arguments for a 2-ary function. Arguments are supplied in placeholder position as an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 98, offset: 97 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: at least one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 99 },
                  end: { line: 3, column: 52, offset: 150 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 99 },
              end: { line: 3, column: 52, offset: 150 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 52, offset: 150 }
        }
      }
    }
  },
  {
    name: 'curryArgs3',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curryArgs3(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      '  arg2 __|any\n' +
      ') -> function\n' +
      '```',
    description: 'Curry arguments for a 3-ary function. Arguments are supplied in placeholder position as an array.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curryArgs3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curryArgs3(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              '  arg2 __|any\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 151 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 151 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry arguments for a 3-ary function. Arguments are supplied in placeholder position as an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 98, offset: 97 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: at least one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 99 },
                  end: { line: 3, column: 52, offset: 150 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 99 },
              end: { line: 3, column: 52, offset: 150 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 52, offset: 150 }
        }
      }
    }
  },
  {
    name: 'curryArgs4',
    synopsis: '```coffeescript [specscript]\n' +
      "__ = Symbol('placeholder')\n" +
      '\n' +
      'curryArgs4(\n' +
      '  baseFunc function,\n' +
      '  arg0 __|any,\n' +
      '  arg1 __|any,\n' +
      '  arg2 __|any\n' +
      '  arg3 __|any,\n' +
      ') -> function\n' +
      '```',
    description: 'Curry arguments for a 4-ary function. Arguments are supplied in placeholder position as an array.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curryArgs4',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "__ = Symbol('placeholder')\n" +
              '\n' +
              'curryArgs4(\n' +
              '  baseFunc function,\n' +
              '  arg0 __|any,\n' +
              '  arg1 __|any,\n' +
              '  arg2 __|any\n' +
              '  arg3 __|any,\n' +
              ') -> function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 166 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 166 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Curry arguments for a 4-ary function. Arguments are supplied in placeholder position as an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 98, offset: 97 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: at least one argument must be the placeholder',
                position: {
                  start: { line: 3, column: 1, offset: 99 },
                  end: { line: 3, column: 52, offset: 150 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 99 },
              end: { line: 3, column: 52, offset: 150 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 52, offset: 150 }
        }
      }
    }
  },
  {
    name: 'curryArity',
    synopsis: '```coffeescript [specscript]\n' +
      '__ = Symbol(placeholder)\n' +
      '\n' +
      'var arity number,\n' +
      '  func function,\n' +
      '  args Array<__|any>,\n' +
      '  curried function\n' +
      '\n' +
      'curryArity(arity, func, args) -> curried|any\n' +
      '```',
    description: 'Create a curried version of a function with specified arity.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curryArity',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '__ = Symbol(placeholder)\n' +
              '\n' +
              'var arity number,\n' +
              '  func function,\n' +
              '  args Array<__|any>,\n' +
              '  curried function\n' +
              '\n' +
              'curryArity(arity, func, args) -> curried|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 180 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 180 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a curried version of a function with specified arity.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 61, offset: 60 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 61, offset: 60 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 61, offset: 60 }
        }
      }
    }
  },
  {
    name: 'funcApply',
    synopsis: '```coffeescript [specscript]\n' +
      'funcApply<\n' +
      '  args ...any,\n' +
      '  func ...args=>any,\n' +
      '>(func, args) -> func(...args)\n' +
      '```',
    description: 'Apply arguments to a function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'funcApply',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'funcApply<\n' +
              '  args ...any,\n' +
              '  func ...args=>any,\n' +
              '>(func, args) -> func(...args)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 110 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 110 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply arguments to a function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      }
    }
  },
  {
    name: 'funcCall',
    synopsis: '```coffeescript [specscript]\n' +
      'funcCall(func function, context Object, ...args) -> any\n' +
      '```',
    description: 'Apply arguments to a function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'funcCall',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'funcCall(func function, context Object, ...args) -> any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 88 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 88 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply arguments to a function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      }
    }
  },
  {
    name: 'funcObjectAll',
    synopsis: '```coffeescript [specscript]\n' +
      'funcObjectAll(\n' +
      '  funcs Object<args=>Promise|any>\n' +
      ')(args ...any) -> objectAllFuncs ...args=>Promise|Object\n' +
      '```',
    description: 'Concurrently execute the same arguments for each function of an object of functions, returning an object of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'funcObjectAll',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'funcObjectAll(\n' +
              '  funcs Object<args=>Promise|any>\n' +
              ')(args ...any) -> objectAllFuncs ...args=>Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 138 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 138 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Concurrently execute the same arguments for each function of an object of functions, returning an object of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 117, offset: 116 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 117, offset: 116 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 117, offset: 116 }
        }
      }
    }
  },
  {
    name: 'functionObjectAll',
    synopsis: '```coffeescript [specscript]\n' +
      'functionObjectAll(funcs Array<function>, args Array) -> Promise|Object\n' +
      '```',
    description: 'Concurrently execute the same arguments for each function of an object of functions, returning an object of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'functionObjectAll',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'functionObjectAll(funcs Array<function>, args Array) -> Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 103 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 103 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Concurrently execute the same arguments for each function of an object of functions, returning an object of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 117, offset: 116 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 117, offset: 116 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 117, offset: 116 }
        }
      }
    }
  },
  {
    name: 'generatorFunctionFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'generatorFunctionFilter<\n' +
      '  T any,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<T>,\n' +
      '  predicate T=>boolean,\n' +
      '>(generatorFunction, predicate)\n' +
      '  -> filteringGeneratorFunction ...args=>Generator\n' +
      '```',
    description: 'Filter a generator function by predicate.\n' +
      '\n' +
      'Note: async predicates may beget unexpected results',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'generatorFunctionFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'generatorFunctionFilter<\n' +
              '  T any,\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<T>,\n' +
              '  predicate T=>boolean,\n' +
              '>(generatorFunction, predicate)\n' +
              '  -> filteringGeneratorFunction ...args=>Generator',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 231 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 231 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter a generator function by predicate.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 42, offset: 41 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: async predicates may beget unexpected results',
                position: {
                  start: { line: 3, column: 1, offset: 43 },
                  end: { line: 3, column: 52, offset: 94 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 43 },
              end: { line: 3, column: 52, offset: 94 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 52, offset: 94 }
        }
      }
    }
  },
  {
    name: 'generatorFunctionForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  generatorFunction ...args=>Generator<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'generatorFunctionForEach(generatorFunction, callback) -> ...args=>Promise|Generator<>\n' +
      '```',
    description: 'Create a generator executor that executes a callback for each item of a generator generated by a generator function. The executor may return a promise if any execution is asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'generatorFunctionForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 25, offset: 24 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  generatorFunction ...args=>Generator<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'generatorFunctionForEach(generatorFunction, callback) -> ...args=>Promise|Generator<>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 190 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 190 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a generator executor that executes a callback for each item of a generator generated by a generator function. The executor may return a promise if any execution is asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 185, offset: 184 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 185, offset: 184 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 185, offset: 184 }
        }
      }
    }
  },
  {
    name: 'generatorFunctionMap',
    synopsis: '```coffeescript [specscript]\n' +
      'generatorFunctionMap<\n' +
      '  T any,\n' +
      '  args ...any,\n' +
      '  generatorFunc ...args=>Generator<T>,\n' +
      '  mapper T=>any,\n' +
      '>(generatorFunc, mapper) -> mappingGeneratorFunc ...args=>Generator\n' +
      '```',
    description: 'Create a mapping generator function from a generator function and a mapper. A mapping generator function produces mapping generators that apply the mapper to each item of the original generator.',
    TODO: 'playground example',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'generatorFunctionMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'generatorFunctionMap<\n' +
              '  T any,\n' +
              '  args ...any,\n' +
              '  generatorFunc ...args=>Generator<T>,\n' +
              '  mapper T=>any,\n' +
              '>(generatorFunc, mapper) -> mappingGeneratorFunc ...args=>Generator',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 202 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 202 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a mapping generator function from a generator function and a mapper. A mapping generator function produces mapping generators that apply the mapper to each item of the original generator.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 195, offset: 194 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 195, offset: 194 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 195, offset: 194 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'playground example',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 19, offset: 18 }
        }
      }
    }
  },
  {
    name: 'generatorFunctionReduce',
    synopsis: '```coffeescript [specscript]\n' +
      'generatorFunctionReduce<\n' +
      '  T any,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<Promise|T>,\n' +
      '  reducer (any, T)=>Promise|any,\n' +
      '  result any,\n' +
      '>(generatorFunction, reducer, result)\n' +
      '  -> reducingFunction ...args=>Promise|result\n' +
      '```',
    description: 'Execute a reducer for each item of a generator function, returning a single value.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'generatorFunctionReduce',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 24, offset: 23 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'generatorFunctionReduce<\n' +
              '  T any,\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<Promise|T>,\n' +
              '  reducer (any, T)=>Promise|any,\n' +
              '  result any,\n' +
              '>(generatorFunction, reducer, result)\n' +
              '  -> reducingFunction ...args=>Promise|result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 263 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 263 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a reducer for each item of a generator function, returning a single value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 83, offset: 82 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 83, offset: 82 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 83, offset: 82 }
        }
      }
    }
  },
  {
    name: 'identityTransform',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer = (any, any)=>Promise|any\n' +
      '\n' +
      'identityTransform<\n' +
      '  collection any,\n' +
      '  transducer Reducer=>Reducer,\n' +
      '  result undefined|null,\n' +
      '>(args, transducer, result) -> Promise|result\n' +
      '```',
    description: 'Reduce a value, always returning the initial result',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'identityTransform',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Reducer = (any, any)=>Promise|any\n' +
              '\n' +
              'identityTransform<\n' +
              '  collection any,\n' +
              '  transducer Reducer=>Reducer,\n' +
              '  result undefined|null,\n' +
              '>(args, transducer, result) -> Promise|result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 206 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 206 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Reduce a value, always returning the initial result',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 52, offset: 51 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 52, offset: 51 }
        }
      }
    }
  },
  {
    name: 'globalThisHasBuffer',
    synopsis: 'globalThisHasBuffer boolean',
    description: 'Is there a global `Buffer`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'globalThisHasBuffer',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'globalThisHasBuffer boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 28, offset: 27 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Is there a global ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Buffer',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 27, offset: 26 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 27, offset: 26 }
        }
      }
    }
  },
  {
    name: 'hasOwn',
    synopsis: 'hasOwn(object any, key string) -> boolean',
    description: 'Determine whether a value is an array.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'hasOwn',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'hasOwn(object any, key string) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 42, offset: 41 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 42, offset: 41 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 39, offset: 38 }
        }
      }
    }
  },
  {
    name: 'identity',
    synopsis: 'identity(value any) -> value',
    description: 'Returns the first argument',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'identity',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'identity(value any) -> value',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Returns the first argument',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 27, offset: 26 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 27, offset: 26 }
        }
      }
    }
  },
  {
    name: 'identityTransform',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer = (any, any)=>Promise|any\n' +
      '\n' +
      'identityTransform<\n' +
      '  collection any,\n' +
      '  transducer Reducer=>Reducer,\n' +
      '  accum undefined|null,\n' +
      '>(args, transducer, accum) -> Promise|accum\n' +
      '```',
    description: 'Reduce a value, always returning the initial accum',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'identityTransform',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 18, offset: 17 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 18, offset: 17 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Reducer = (any, any)=>Promise|any\n' +
              '\n' +
              'identityTransform<\n' +
              '  collection any,\n' +
              '  transducer Reducer=>Reducer,\n' +
              '  accum undefined|null,\n' +
              '>(args, transducer, accum) -> Promise|accum',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 203 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 203 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Reduce a value, always returning the initial accum',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 51, offset: 50 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 51, offset: 50 }
        }
      }
    }
  },
  {
    name: 'isArray',
    synopsis: 'isArray(value any) -> boolean',
    description: 'Determine whether a value is an array.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isArray',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isArray(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 30, offset: 29 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 39, offset: 38 }
        }
      }
    }
  },
  {
    name: 'isArrayLike',
    synopsis: '```coffeescript [specscript]\nisArrayLike(value any) -> boolean\n```',
    description: 'Tell if a value has positive `length` like an Array.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isArrayLike',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isArrayLike(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 66 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 66 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Tell if a value has positive ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              },
              {
                type: 'inlineCode',
                value: 'length',
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 38, offset: 37 }
                }
              },
              {
                type: 'text',
                value: ' like an Array.',
                position: {
                  start: { line: 1, column: 38, offset: 37 },
                  end: { line: 1, column: 53, offset: 52 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 53, offset: 52 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 53, offset: 52 }
        }
      }
    }
  },
  {
    name: 'isAsyncGeneratorFunction',
    synopsis: 'isAsyncGeneratorFunction(value any) -> boolean',
    description: 'Determine whether a value is an async generator function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isAsyncGeneratorFunction',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 25, offset: 24 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isAsyncGeneratorFunction(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 47, offset: 46 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 47, offset: 46 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is an async generator function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 58, offset: 57 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 58, offset: 57 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 58, offset: 57 }
        }
      }
    }
  },
  {
    name: 'isBinary',
    synopsis: 'isBinary(value any) -> boolean',
    description: 'Determine whether a value is binary. This could be `true` for `TypedArray` or a Node.js `Buffer`.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isBinary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isBinary(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is binary. This could be ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 52, offset: 51 }
                }
              },
              {
                type: 'inlineCode',
                value: 'true',
                position: {
                  start: { line: 1, column: 52, offset: 51 },
                  end: { line: 1, column: 58, offset: 57 }
                }
              },
              {
                type: 'text',
                value: ' for ',
                position: {
                  start: { line: 1, column: 58, offset: 57 },
                  end: { line: 1, column: 63, offset: 62 }
                }
              },
              {
                type: 'inlineCode',
                value: 'TypedArray',
                position: {
                  start: { line: 1, column: 63, offset: 62 },
                  end: { line: 1, column: 75, offset: 74 }
                }
              },
              {
                type: 'text',
                value: ' or a Node.js ',
                position: {
                  start: { line: 1, column: 75, offset: 74 },
                  end: { line: 1, column: 89, offset: 88 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Buffer',
                position: {
                  start: { line: 1, column: 89, offset: 88 },
                  end: { line: 1, column: 97, offset: 96 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 97, offset: 96 },
                  end: { line: 1, column: 98, offset: 97 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 98, offset: 97 }
        }
      }
    }
  },
  {
    name: 'isGeneratorFunction',
    synopsis: 'isGeneratorFunction(value any) -> boolean',
    description: 'Determine whether a value is a generator function.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isGeneratorFunction',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isGeneratorFunction(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 42, offset: 41 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 42, offset: 41 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is a generator function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 51, offset: 50 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 51, offset: 50 }
        }
      }
    }
  },
  {
    name: 'isNodeReadStream',
    synopsis: 'isNodeReadStream(value any) -> boolean',
    description: 'Determine whether a value is a Node.js Readable Stream.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isNodeReadStream',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isNodeReadStream(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 39, offset: 38 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is a Node.js Readable Stream.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 56, offset: 55 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 56, offset: 55 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 56, offset: 55 }
        }
      }
    }
  },
  {
    name: 'isObject',
    synopsis: 'isObject(value any) -> boolean',
    description: 'Determine whether a value is an object. Note that Arrays are also objects in JS.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isObject',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isObject(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is an object. Note that Arrays are also objects in JS.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 81, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 81, offset: 80 }
        }
      }
    }
  },
  {
    name: 'isPromise',
    synopsis: 'isPromise(value any) -> boolean',
    description: 'Determine whether a value is a promise.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isPromise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isPromise(value any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 32, offset: 31 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 32, offset: 31 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is a promise.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 40, offset: 39 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 40, offset: 39 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 40, offset: 39 }
        }
      }
    }
  },
  {
    name: 'iterationMap',
    synopsis: 'iterationMap<\n' +
      '  T any,\n' +
      '  iteration { value: T, done: boolean },\n' +
      '  mapper T=>any,\n' +
      '>(iteration, mapper) -> nextIteration { value: any, done: boolean }',
    description: 'Apply a mapper to an iteration. Noop if iteration is done.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'iterationMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'iterationMap<\n' +
                  'T any,\n' +
                  'iteration { value: T, done: boolean },\n' +
                  'mapper T=>any,',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 17, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 4, column: 17, offset: 80 }
            }
          },
          {
            type: 'blockquote',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: '(iteration, mapper) -> nextIteration { value: any, done: boolean }',
                    position: {
                      start: { line: 5, column: 2, offset: 82 },
                      end: { line: 5, column: 68, offset: 148 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 82 },
                  end: { line: 5, column: 68, offset: 148 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 81 },
              end: { line: 5, column: 68, offset: 148 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 68, offset: 148 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper to an iteration. Noop if iteration is done.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 59, offset: 58 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 59, offset: 58 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 59, offset: 58 }
        }
      }
    }
  },
  {
    name: 'iteratorForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  iterator Iterator<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'iteratorForEach(iterator, callback) -> ()\n' +
      '```',
    description: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.\n' +
      '\n' +
      'Note: iterator is consumed',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'iteratorForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  iterator Iterator<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'iteratorForEach(iterator, callback) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 127 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 127 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 99, offset: 98 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: iterator is consumed',
                position: {
                  start: { line: 3, column: 1, offset: 100 },
                  end: { line: 3, column: 27, offset: 126 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 3, column: 27, offset: 126 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 27, offset: 126 }
        }
      }
    }
  },
  {
    name: 'iteratorReduceAsync',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  iterator Iterator<T>,\n' +
      '  reducer (any, T)=>Promise|any,\n' +
      '  result any,\n' +
      '\n' +
      'iteratorReduceAsync(iterator, reducer, result) -> Promise\n' +
      '```',
    description: 'Execute a reducer for each item of an iterator or async iterator, returning a promise of a single value.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'iteratorReduceAsync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  iterator Iterator<T>,\n' +
              '  reducer (any, T)=>Promise|any,\n' +
              '  result any,\n' +
              '\n' +
              'iteratorReduceAsync(iterator, reducer, result) -> Promise',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 173 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 173 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a reducer for each item of an iterator or async iterator, returning a promise of a single value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 105, offset: 104 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 105, offset: 104 }
        }
      }
    }
  },
  {
    name: 'iteratorReduce',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  iterator Iterator<T>,\n' +
      '  reducer (any, T)=>Promise|any,\n' +
      '  result any,\n' +
      '\n' +
      'iteratorReduce(iterator, reducer, result?) -> Promise|any\n' +
      '```',
    description: 'Execute a reducer for each item of an iterator, returning a single value.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'iteratorReduce',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  iterator Iterator<T>,\n' +
              '  reducer (any, T)=>Promise|any,\n' +
              '  result any,\n' +
              '\n' +
              'iteratorReduce(iterator, reducer, result?) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 173 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 173 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a reducer for each item of an iterator, returning a single value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 74, offset: 73 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 74, offset: 73 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 74, offset: 73 }
        }
      }
    }
  },
  {
    name: 'mapFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'mapFilter<\n' +
      '  T any,\n' +
      '  map Map<any=>T>,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '>(map, predicate) -> filteredValuesByPredicate Map<any=>T>\n' +
      '```',
    description: 'Filter the values of a Map concurrently by predicate. `predicate` may be asynchronous.\n' +
      '\n' +
      'Note: for asynchronous predicates, the order of the resulting Map is not guaranteed',
    TODO: 'mapFilterSeries (will guarantee order for asynchronous predicates)',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'mapFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'mapFilter<\n' +
              '  T any,\n' +
              '  map Map<any=>T>,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '>(map, predicate) -> filteredValuesByPredicate Map<any=>T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 162 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 162 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter the values of a Map concurrently by predicate. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 66, offset: 65 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 66, offset: 65 },
                  end: { line: 1, column: 87, offset: 86 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 87, offset: 86 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: for asynchronous predicates, the order of the resulting Map is not guaranteed',
                position: {
                  start: { line: 3, column: 1, offset: 88 },
                  end: { line: 3, column: 84, offset: 171 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 88 },
              end: { line: 3, column: 84, offset: 171 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 84, offset: 171 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'mapFilterSeries (will guarantee order for asynchronous predicates)',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 67, offset: 66 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 67, offset: 66 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 67, offset: 66 }
        }
      }
    }
  },
  {
    name: 'mapFrom',
    synopsis: '```coffeescript [specscript]\nmapFrom(object Object) -> Map\n```',
    description: 'Create a new Map from an object.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'mapFrom',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'mapFrom(object Object) -> Map',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 62 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 62 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a new Map from an object.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 33, offset: 32 }
        }
      }
    }
  },
  {
    name: 'mapMap',
    synopsis: '```coffeescript [specscript]\n' +
      'mapMap(\n' +
      '  value Map,\n' +
      '  mapper (item any, key any, value)=>Promise|any\n' +
      ') -> Promise|Map<any=>any>\n' +
      '```',
    description: 'Apply a mapper concurrently to each value (not entry) of a Map, returning a Map of results. `mapper` may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'mapMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'mapMap(\n' +
              '  value Map,\n' +
              '  mapper (item any, key any, value)=>Promise|any\n' +
              ') -> Promise|Map<any=>any>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 129 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 129 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper concurrently to each value (not entry) of a Map, returning a Map of results. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 93, offset: 92 }
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 93, offset: 92 },
                  end: { line: 1, column: 101, offset: 100 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 101, offset: 100 },
                  end: { line: 1, column: 122, offset: 121 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 122, offset: 121 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 122, offset: 121 }
        }
      }
    }
  },
  {
    name: 'memoizeCappedUnary',
    synopsis: '```coffeescript [specscript]\n' +
      'memoizeCappedUnary(func function, cap number) -> memoized function\n' +
      '```',
    description: 'Memoize a function. Clear cache when size reaches cap.',
    todo: 'explore Map reimplementation',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'memoizeCappedUnary',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 19, offset: 18 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'memoizeCappedUnary(func function, cap number) -> memoized function',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 99 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 99 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Memoize a function. Clear cache when size reaches cap.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 55, offset: 54 }
        }
      },
      todo: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'explore Map reimplementation',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      }
    }
  },
  {
    name: 'noop',
    synopsis: 'noop() -> ()',
    description: 'Takes nothing, returns `undefined`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'noop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'noop() -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Takes nothing, returns ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              },
              {
                type: 'inlineCode',
                value: 'undefined',
                position: {
                  start: { line: 1, column: 24, offset: 23 },
                  end: { line: 1, column: 35, offset: 34 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 35, offset: 34 }
        }
      }
    }
  },
  {
    name: 'objectAssign',
    synopsis: '```coffeescript [specscript]\n' +
      'objectAssign<\n' +
      '  targetObject Object, sourceObjects ...Object,\n' +
      '>(targetObject, ...sourceObjects) -> merged Object\n' +
      '```',
    description: 'Dereferenced `Object.assign`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectAssign',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'objectAssign<\n' +
              '  targetObject Object, sourceObjects ...Object,\n' +
              '>(targetObject, ...sourceObjects) -> merged Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 145 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 145 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.assign',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      }
    }
  },
  {
    name: 'objectFlatMap',
    synopsis: '```coffeescript [specscript]\n' +
      'Stream<T> = { read: ()=>T, write: T=>() }\n' +
      'Monad<T> = Array<T>|String<T>|Set<T>\n' +
      '  |TypedArray<T>|Stream<T>|Iterator<Promise|T>\n' +
      '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T> }|Object<T>\n' +
      '\n' +
      'objectFlatMap<\n' +
      '  T any,\n' +
      '  object Object<T>,\n' +
      '  flatMapper T=>Promise|Monad<T>|Foldable<T>|T,\n' +
      '>(object, flatMapper) -> Promise|Object<T>\n' +
      '```',
    description: 'Apply a flatMapper to each value of an object, assigning all items of all results into a new object.',
    TODO: '"deeply copies" after objectFlatten changes to deep assignment',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectFlatMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Stream<T> = { read: ()=>T, write: T=>() }\n' +
              'Monad<T> = Array<T>|String<T>|Set<T>\n' +
              '  |TypedArray<T>|Stream<T>|Iterator<Promise|T>\n' +
              '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
              'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T> }|Object<T>\n' +
              '\n' +
              'objectFlatMap<\n' +
              '  T any,\n' +
              '  object Object<T>,\n' +
              '  flatMapper T=>Promise|Monad<T>|Foldable<T>|T,\n' +
              '>(object, flatMapper) -> Promise|Object<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 466 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 14, column: 4, offset: 466 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a flatMapper to each value of an object, assigning all items of all results into a new object.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 101, offset: 100 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 101, offset: 100 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 101, offset: 100 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '"deeply copies" after objectFlatten changes to deep assignment',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 63, offset: 62 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 63, offset: 62 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 63, offset: 62 }
        }
      }
    }
  },
  {
    name: 'objectForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  object Object<T>,\n' +
      '  callback T=>()\n' +
      '\n' +
      'objectForEach(object, callback) -> ()\n' +
      '```',
    description: 'Execute a callback for each value of an object. Return a promise if any executions are asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  object Object<T>,\n' +
              '  callback T=>()\n' +
              '\n' +
              'objectForEach(object, callback) -> ()',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 119 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 119 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a callback for each value of an object. Return a promise if any executions are asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 101, offset: 100 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 101, offset: 100 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 101, offset: 100 }
        }
      }
    }
  },
  {
    name: 'objectKeys',
    synopsis: 'objectKeys<T>(object Object<T>) -> Array<T>',
    description: 'Dereferenced `Object.keys`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectKeys',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectKeys',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 11, offset: 10 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'text',
                value: '(object Object',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 28, offset: 27 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 28, offset: 27 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              },
              {
                type: 'text',
                value: ') -> Array',
                position: {
                  start: { line: 1, column: 31, offset: 30 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 41, offset: 40 },
                  end: { line: 1, column: 44, offset: 43 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 44, offset: 43 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 44, offset: 43 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.keys',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 27, offset: 26 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 27, offset: 26 }
        }
      }
    }
  },
  {
    name: 'objectMap',
    synopsis: '```coffeescript [specscript]\n' +
      'objectMap<\n' +
      '  T any,\n' +
      '  object Object<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(object, mapper) -> Promise|Object\n' +
      '```',
    description: 'Apply a mapper concurrently to each value of an object, returning an object of results. Mapper may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'objectMap<\n' +
              '  T any,\n' +
              '  object Object<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(object, mapper) -> Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 133 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 133 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper concurrently to each value of an object, returning an object of results. Mapper may be asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 116, offset: 115 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 116, offset: 115 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 116, offset: 115 }
        }
      }
    }
  },
  {
    name: 'objectMapOwn',
    synopsis: '```coffeescript [specscript]\n' +
      'objectMapOwn<\n' +
      '  T any,\n' +
      '  object Object<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(object, mapper) -> Promise|Object\n' +
      '```',
    description: "Apply a mapper concurrently to an object's own values, returning an object of results. Mapper may be asynchronous.\n" +
      "Guards mapping by validating that each property is the object's own and not inherited from the prototype chain.",
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectMapOwn',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'objectMapOwn<\n' +
              '  T any,\n' +
              '  object Object<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(object, mapper) -> Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 136 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 136 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Apply a mapper concurrently to an object's own values, returning an object of results. Mapper may be asynchronous.\n" +
                  "Guards mapping by validating that each property is the object's own and not inherited from the prototype chain.",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 112, offset: 226 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 2, column: 112, offset: 226 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 2, column: 112, offset: 226 }
        }
      }
    }
  },
  {
    name: 'objectToString',
    synopsis: 'objectToString(value any) -> string',
    description: 'Get the tag of an object',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectToString',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectToString(value any) -> string',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 36, offset: 35 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 36, offset: 35 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the tag of an object',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 25, offset: 24 }
        }
      }
    }
  },
  {
    name: 'objectValues',
    synopsis: 'objectValues<T>(object Object<T>) -> Array<T>',
    description: 'Dereferenced `Object.values`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectValues',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectValues',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              },
              {
                type: 'text',
                value: '(object Object',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              },
              {
                type: 'text',
                value: ') -> Array',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 43, offset: 42 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 46, offset: 45 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.values',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      }
    }
  },
  {
    name: 'promiseAll',
    synopsis: 'promiseAll(Iterable<Promise|any>) -> Promise<Array>',
    description: 'Dereferenced Promise.all',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'promiseAll',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'promiseAll(Iterable<Promise|any>) -> Promise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              },
              {
                type: 'html',
                value: '<Array>',
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 52, offset: 51 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 52, offset: 51 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced Promise.all',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 25, offset: 24 }
        }
      }
    }
  },
  {
    name: 'promiseObjectAll',
    synopsis: '```coffeescript [specscript]\n' +
      'promiseObjectAll(object<Promise|any>) -> Promise<object>\n' +
      '```',
    description: 'Like `Promise.all` but for objects.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'promiseObjectAll',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'promiseObjectAll(object<Promise|any>) -> Promise<object>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 89 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 89 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Like ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Promise.all',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              },
              {
                type: 'text',
                value: ' but for objects.',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 36, offset: 35 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 36, offset: 35 }
        }
      }
    }
  },
  {
    name: 'promiseRace',
    synopsis: 'promiseRace(Iterable<Promise|any>) -> firstResolvedOrRejected Promise',
    description: 'Dereferenced Promise.race',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'promiseRace',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'promiseRace(Iterable<Promise|any>) -> firstResolvedOrRejected Promise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 70, offset: 69 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 70, offset: 69 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 70, offset: 69 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced Promise.race',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 26, offset: 25 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 26, offset: 25 }
        }
      }
    }
  },
  {
    name: 'reducerFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'reducerFilter<\n' +
      '  T any,\n' +
      '  reducer (any, T)=>Promise|any,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '>(reducer, predicate) -> filteringReducer (any, any)=>Promise|any\n' +
      '```',
    description: "Filter items from a reducer's operation by predicate. `predicate` may be asynchronous.\n" +
      '\n' +
      'Note: If the predicate is asynchronous, the implementation of reduce that consumes the filtering reducer must resolve promises',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'reducerFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'reducerFilter<\n' +
              '  T any,\n' +
              '  reducer (any, T)=>Promise|any,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '>(reducer, predicate) -> filteringReducer (any, any)=>Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 187 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 187 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Filter items from a reducer's operation by predicate. ",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 66, offset: 65 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 66, offset: 65 },
                  end: { line: 1, column: 87, offset: 86 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 87, offset: 86 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: If the predicate is asynchronous, the implementation of reduce that consumes the filtering reducer must resolve promises',
                position: {
                  start: { line: 3, column: 1, offset: 88 },
                  end: { line: 3, column: 127, offset: 214 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 88 },
              end: { line: 3, column: 127, offset: 214 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 127, offset: 214 }
        }
      }
    }
  },
  {
    name: 'reducerFlatten',
    synopsis: '```coffeescript [specscript]\n' +
      'Stream<T> = { read: ()=>T, write: T=>() }\n' +
      'Monad<T> = Array<T>|String<T>|Set<T>\n' +
      '  |TypedArray<T>|Stream<T>|Iterator<Promise|T>\n' +
      '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T> }|Object<T>\n' +
      '\n' +
      'reducerFlatten<T>(\n' +
      '  reducer Reducer<Monad<T>|Foldable<T>|T>,\n' +
      ') -> flatteningReducer Reducer<T>\n' +
      '```',
    description: 'Create a flattening reducer - a reducer that flattens all items of a reducing operation into the result.',
    previously: 'flatteningTransducer',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'reducerFlatten',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Stream<T> = { read: ()=>T, write: T=>() }\n' +
              'Monad<T> = Array<T>|String<T>|Set<T>\n' +
              '  |TypedArray<T>|Stream<T>|Iterator<Promise|T>\n' +
              '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
              'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T> }|Object<T>\n' +
              '\n' +
              'reducerFlatten<T>(\n' +
              '  reducer Reducer<Monad<T>|Foldable<T>|T>,\n' +
              ') -> flatteningReducer Reducer<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 427 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 427 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a flattening reducer - a reducer that flattens all items of a reducing operation into the result.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 105, offset: 104 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 105, offset: 104 }
        }
      },
      previously: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'flatteningTransducer',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 21, offset: 20 }
        }
      }
    }
  },
  {
    name: 'reducerForEach',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'var T any,\n' +
      '  reducer Reducer<T>\n' +
      '\n' +
      'reducerForEach(reducer, callback) -> reducer\n' +
      '```',
    description: 'Create a reducer that additionally executes a callback for each item of its reducing operation.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'reducerForEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              '\n' +
              'var T any,\n' +
              '  reducer Reducer<T>\n' +
              '\n' +
              'reducerForEach(reducer, callback) -> reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 146 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 146 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a reducer that additionally executes a callback for each item of its reducing operation.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 96, offset: 95 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 96, offset: 95 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 96, offset: 95 }
        }
      }
    }
  },
  {
    name: 'reducerMap',
    synopsis: '```coffeescript [specscript]\n' +
      'reducerMap<\n' +
      '  T any,\n' +
      '  reducer (any, T)=>Promise|any,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(reducer, mapper) -> mappingReducer (any, any)=>Promise|any\n' +
      '```',
    description: "Apply a mapper to elements of a reducer's operation. `mapper` may be asynchronous\n" +
      '\n' +
      'Note: If the mapper is asynchronous, the implementation of reduce that consumes the mapping reducer must resolve promises',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'reducerMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'reducerMap<\n' +
              '  T any,\n' +
              '  reducer (any, T)=>Promise|any,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(reducer, mapper) -> mappingReducer (any, any)=>Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 172 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 172 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Apply a mapper to elements of a reducer's operation. ",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 54, offset: 53 }
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 54, offset: 53 },
                  end: { line: 1, column: 62, offset: 61 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous',
                position: {
                  start: { line: 1, column: 62, offset: 61 },
                  end: { line: 1, column: 82, offset: 81 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Note: If the mapper is asynchronous, the implementation of reduce that consumes the mapping reducer must resolve promises',
                position: {
                  start: { line: 3, column: 1, offset: 83 },
                  end: { line: 3, column: 122, offset: 204 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 83 },
              end: { line: 3, column: 122, offset: 204 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 122, offset: 204 }
        }
      }
    }
  },
  {
    name: 'sameValueZero',
    synopsis: '```coffeescript [specscript]\n' +
      'sameValueZero(left any, right any) -> boolean\n' +
      '```',
    description: 'Determine if two values are the same value. [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero).',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'sameValueZero',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'sameValueZero(left any, right any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 78 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 78 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine if two values are the same value. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero',
                children: [
                  {
                    type: 'text',
                    value: 'SameValueZero',
                    position: {
                      start: { line: 1, column: 46, offset: 45 },
                      end: { line: 1, column: 59, offset: 58 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 123, offset: 122 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 123, offset: 122 },
                  end: { line: 1, column: 124, offset: 123 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 124, offset: 123 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 124, offset: 123 }
        }
      }
    }
  },
  {
    name: 'setFilter',
    synopsis: '```coffeescript [specscript]\n' +
      'setFilter<T>(\n' +
      '  set Set<T>,\n' +
      '  predicate T=>Promise|boolean,\n' +
      ') -> filteredSet Promise|Set<T>\n' +
      '```',
    description: 'Filter items of a Set concurrently by predicate. `predicate` may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'setFilter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'setFilter<T>(\n' +
              '  set Set<T>,\n' +
              '  predicate T=>Promise|boolean,\n' +
              ') -> filteredSet Promise|Set<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 124 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 124 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter items of a Set concurrently by predicate. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 50, offset: 49 }
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 50, offset: 49 },
                  end: { line: 1, column: 61, offset: 60 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 61, offset: 60 },
                  end: { line: 1, column: 82, offset: 81 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 82, offset: 81 }
        }
      }
    }
  },
  {
    name: 'setMap',
    synopsis: '```coffeescript [specscript]\n' +
      'setMap<\n' +
      '  T any,\n' +
      '  value Set<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(value, mapper) -> Promise|Set\n' +
      '```',
    description: 'Apply a mapper concurrently to each item of a set, returning a set of results.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'setMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'setMap<\n' +
              '  T any,\n' +
              '  value Set<T>,\n' +
              '  mapper T=>Promise|any,\n' +
              '>(value, mapper) -> Promise|Set',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 122 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 122 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper concurrently to each item of a set, returning a set of results.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 79, offset: 78 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 79, offset: 78 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 79, offset: 78 }
        }
      }
    }
  },
  {
    name: 'streamWrite',
    synopsis: '```coffeescript [specscript]\n' +
      'streamWrite(\n' +
      '  stream Writable,\n' +
      '  chunk string|Buffer|Uint8Array|any,\n' +
      '  encoding string|undefined,\n' +
      '  callback function|undefined,\n' +
      ') -> stream\n' +
      '```',
    description: 'Call `.write` on a Node.js stream',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'streamWrite',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'streamWrite(\n' +
              '  stream Writable,\n' +
              '  chunk string|Buffer|Uint8Array|any,\n' +
              '  encoding string|undefined,\n' +
              '  callback function|undefined,\n' +
              ') -> stream',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 174 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 174 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'inlineCode',
                value: '.write',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'text',
                value: ' on a Node.js stream',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 34, offset: 33 }
        }
      }
    }
  },
  {
    name: 'stringMap',
    synopsis: '```coffeescript [specscript]\n' +
      'stringMap<\n' +
      '  character string,\n' +
      '  str String<character>,\n' +
      '  mapper character=>Promise|string|any,\n' +
      '>(str, mapper) -> stringWithCharactersMapped string\n' +
      '```',
    description: "Filter a string's characters by predicate.",
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'stringMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'stringMap<\n' +
              '  character string,\n' +
              '  str String<character>,\n' +
              '  mapper character=>Promise|string|any,\n' +
              '>(str, mapper) -> stringWithCharactersMapped string',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 180 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 180 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Filter a string's characters by predicate.",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 43, offset: 42 }
        }
      }
    }
  },
  {
    name: 'stringMap',
    synopsis: '```coffeescript [specscript]\n' +
      'stringMap<\n' +
      '  character string,\n' +
      '  str String<character>,\n' +
      '  mapper character=>Promise|string|any,\n' +
      '>(str, mapper) -> stringWithCharactersMapped string\n' +
      '```',
    description: 'Apply a mapper concurrently to each character of a string, returning a string result. `mapper` may be asynchronous.',
    related: 'stringFlatMap',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'stringMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'stringMap<\n' +
              '  character string,\n' +
              '  str String<character>,\n' +
              '  mapper character=>Promise|string|any,\n' +
              '>(str, mapper) -> stringWithCharactersMapped string',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 180 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 180 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper concurrently to each character of a string, returning a string result. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 87, offset: 86 }
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 87, offset: 86 },
                  end: { line: 1, column: 95, offset: 94 }
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 95, offset: 94 },
                  end: { line: 1, column: 116, offset: 115 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 116, offset: 115 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 116, offset: 115 }
        }
      },
      related: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'stringFlatMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      }
    }
  },
  {
    name: 'symbolAsyncIterator',
    synopsis: 'symbolAsyncIterator = Symbol.asyncIterator',
    description: 'Dereferenced `Symbol.asyncIterator`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'symbolAsyncIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 20, offset: 19 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'symbolAsyncIterator = Symbol.asyncIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 43, offset: 42 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Symbol.asyncIterator',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 36, offset: 35 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 36, offset: 35 }
        }
      }
    }
  },
  {
    name: 'symbolIterator',
    synopsis: 'symbolIterator = Symbol.iterator',
    description: 'Dereferenced `Symbol.iterator`',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'symbolIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'symbolIterator = Symbol.iterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 33, offset: 32 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Dereferenced ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Symbol.iterator',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      }
    }
  },
  {
    name: 'tapSync',
    synopsis: '```coffeescript [specscript]\n' +
      'tapSync<\n' +
      '  tapper function,\n' +
      '  args ...any,\n' +
      '>(tapper)(...args) -> args[0]\n' +
      '```',
    description: 'Call a function with arguments, returning the first argument. Promises are not handled.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'tapSync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'tapSync<\n' +
              '  tapper function,\n' +
              '  args ...any,\n' +
              '>(tapper)(...args) -> args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 105 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 105 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a function with arguments, returning the first argument. Promises are not handled.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 88, offset: 87 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 88, offset: 87 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 88, offset: 87 }
        }
      }
    }
  },
  {
    name: 'thunkConditional',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkConditional<\n' +
      '  conditionalExpression boolean,\n' +
      '  thunkOnTruthy ()=>any,\n' +
      '  thunkOnFalsy ()=>any,\n' +
      '>(conditionalExpression, thunkOnTruthy, thunkOnFalsy) -> any\n' +
      '```',
    description: 'Like the conditional operator `a ? b : c` but for thunks.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkConditional',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkConditional<\n' +
              '  conditionalExpression boolean,\n' +
              '  thunkOnTruthy ()=>any,\n' +
              '  thunkOnFalsy ()=>any,\n' +
              '>(conditionalExpression, thunkOnTruthy, thunkOnFalsy) -> any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 193 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 193 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Like the conditional operator ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              },
              {
                type: 'inlineCode',
                value: 'a ? b : c',
                position: {
                  start: { line: 1, column: 31, offset: 30 },
                  end: { line: 1, column: 42, offset: 41 }
                }
              },
              {
                type: 'text',
                value: ' but for thunks.',
                position: {
                  start: { line: 1, column: 42, offset: 41 },
                  end: { line: 1, column: 58, offset: 57 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 58, offset: 57 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 58, offset: 57 }
        }
      }
    }
  },
  {
    name: 'thunkify1',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify1<\n' +
      '  arg0 any,\n' +
      '  func arg0=>any,\n' +
      '>(func, arg0) -> thunk ()=>func(arg0)\n' +
      '```',
    description: 'Create a thunk from a function and one argument.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify1',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify1<\n' +
              '  arg0 any,\n' +
              '  func arg0=>any,\n' +
              '>(func, arg0) -> thunk ()=>func(arg0)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 111 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 111 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk from a function and one argument.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 49, offset: 48 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 49, offset: 48 }
        }
      }
    }
  },
  {
    name: 'thunkify2',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify2<\n' +
      '  arg0 any,\n' +
      '  arg1 any,\n' +
      '  func (arg0, arg1)=>any,\n' +
      '>(func, arg0, arg1) -> thunk ()=>func(arg0, arg1)\n' +
      '```',
    description: 'Create a thunk from a function and two arguments.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify2',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify2<\n' +
              '  arg0 any,\n' +
              '  arg1 any,\n' +
              '  func (arg0, arg1)=>any,\n' +
              '>(func, arg0, arg1) -> thunk ()=>func(arg0, arg1)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 143 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 143 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk from a function and two arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 50, offset: 49 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 50, offset: 49 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 50, offset: 49 }
        }
      }
    }
  },
  {
    name: 'thunkify3',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify3<\n' +
      '  arg0 any,\n' +
      '  arg1 any,\n' +
      '  arg2 any,\n' +
      '  func (arg0, arg1, arg2)=>any,\n' +
      '>(func, arg0, arg1, arg2) -> thunk ()=>func(arg0, arg1, arg2)\n' +
      '```',
    description: 'Create a thunk from a function and three arguments.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify3<\n' +
              '  arg0 any,\n' +
              '  arg1 any,\n' +
              '  arg2 any,\n' +
              '  func (arg0, arg1, arg2)=>any,\n' +
              '>(func, arg0, arg1, arg2) -> thunk ()=>func(arg0, arg1, arg2)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 173 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 173 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk from a function and three arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 52, offset: 51 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 52, offset: 51 }
        }
      }
    }
  },
  {
    name: 'thunkify4',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify4<\n' +
      '  arg0 any,\n' +
      '  arg1 any,\n' +
      '  arg2 any,\n' +
      '  arg3 any,\n' +
      '  func (arg0, arg1, arg2, arg3)=>any,\n' +
      '>(func, arg0, arg1, arg2, arg3) -> thunk ()=>func(arg0, arg1, arg2, arg3)\n' +
      '```',
    description: 'Create a thunk from a function and four arguments.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify4',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify4<\n' +
              '  arg0 any,\n' +
              '  arg1 any,\n' +
              '  arg2 any,\n' +
              '  arg3 any,\n' +
              '  func (arg0, arg1, arg2, arg3)=>any,\n' +
              '>(func, arg0, arg1, arg2, arg3) -> thunk ()=>func(arg0, arg1, arg2, arg3)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 203 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 203 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk from a function and four arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 51, offset: 50 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 51, offset: 50 }
        }
      }
    }
  },
  {
    name: 'thunkify5',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify5<\n' +
      '  arg0 any,\n' +
      '  arg1 any,\n' +
      '  arg2 any,\n' +
      '  arg3 any,\n' +
      '  arg4 any,\n' +
      '  func (arg0, arg1, arg2, arg3, arg4)=>any,\n' +
      '>(func, arg0, arg1, arg2, arg3, arg4) -> thunk ()=>func(arg0, arg1, arg2, arg3, arg4)\n' +
      '```',
    description: 'Create a thunk from a function and five arguments.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify5',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify5<\n' +
              '  arg0 any,\n' +
              '  arg1 any,\n' +
              '  arg2 any,\n' +
              '  arg3 any,\n' +
              '  arg4 any,\n' +
              '  func (arg0, arg1, arg2, arg3, arg4)=>any,\n' +
              '>(func, arg0, arg1, arg2, arg3, arg4) -> thunk ()=>func(arg0, arg1, arg2, arg3, arg4)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 233 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 233 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk from a function and five arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 51, offset: 50 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 51, offset: 50 }
        }
      }
    }
  },
  {
    name: 'timeInLoop',
    synopsis: '```coffeescript [specscript]\n' +
      'timeInLoop(description string, loopCount number, fn function, options? {\n' +
      '  silent?: boolean,\n' +
      '}) -> undefined\n' +
      '```',
    description: 'Logs the amount of time required for a function to run a certain number of times\n' +
      '\n' +
      '```js\n' +
      "timeInLoop('hello', 1e6, () => 'hello') // hello: 1e+6: 3.474ms\n" +
      '```\n' +
      '\n' +
      'Reference: https://gist.github.com/funfunction/91b5876a5f562e1e352aed0fcabc3858',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'timeInLoop(description string, loopCount number, fn function, options? {\n' +
              '  silent?: boolean,\n' +
              '}) -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 141 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 141 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Logs the amount of time required for a function to run a certain number of times',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 81, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 }
            }
          },
          {
            type: 'code',
            lang: 'js',
            meta: null,
            value: "timeInLoop('hello', 1e6, () => 'hello') // hello: 1e+6: 3.474ms",
            position: {
              start: { line: 3, column: 1, offset: 82 },
              end: { line: 5, column: 4, offset: 155 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Reference: https://gist.github.com/funfunction/91b5876a5f562e1e352aed0fcabc3858',
                position: {
                  start: { line: 7, column: 1, offset: 157 },
                  end: { line: 7, column: 80, offset: 236 }
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 157 },
              end: { line: 7, column: 80, offset: 236 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 80, offset: 236 }
        }
      }
    }
  },
  {
    name: 'timeInLoopAsync',
    synopsis: '```coffeescript [specscript]\n' +
      'timeInLoop.async(description string, loopCount number, fn function, options? {\n' +
      '  silent?: boolean,\n' +
      '}) -> undefined\n' +
      '```',
    description: 'Like timeInLoop, but every call is awaited\n' +
      '\n' +
      '```js\n' +
      "timeInLoop.async('async hello', 1e6, async () => 'hello') // async hello: 1e+6: 116.006ms\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoopAsync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 16, offset: 15 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'timeInLoop.async(description string, loopCount number, fn function, options? {\n' +
              '  silent?: boolean,\n' +
              '}) -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 147 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 147 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Like timeInLoop, but every call is awaited',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          },
          {
            type: 'code',
            lang: 'js',
            meta: null,
            value: "timeInLoop.async('async hello', 1e6, async () => 'hello') // async hello: 1e+6: 116.006ms",
            position: {
              start: { line: 3, column: 1, offset: 44 },
              end: { line: 5, column: 4, offset: 143 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 143 }
        }
      }
    }
  },
  {
    name: 'all',
    synopsis: '```coffeescript [specscript]\n' +
      'all(...args, funcsArray Array<function>) -> result Promise|Array\n' +
      '\n' +
      'all(funcsArray Array<function>)(...args) -> result Promise|Array\n' +
      '\n' +
      'all(...args, funcsObject Object<function>) -> result Promise|Object\n' +
      '\n' +
      'all(funcsObject Object<function>)(...args) -> result Promise|Object\n' +
      '```',
    description: 'Function executor and composer. Accepts either an array of functions or an object of functions as the values. Calls each function of the provided array or object in parallel with the provided arguments. Returns either an array or object of the results of the function executions.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const createArrayOfGreetingsFor = all([\n' +
      '  name => `Hi ${name}`,\n' +
      '  name => `Hey ${name}`,\n' +
      '  name => `Hello ${name}`,\n' +
      '])\n' +
      '\n' +
      "const arrayOfGreetingsForFred = createArrayOfGreetingsFor('Fred')\n" +
      '\n' +
      'console.log(arrayOfGreetingsForFred)\n' +
      "// ['Hi Fred', 'Hey Fred', 'Hello Fred']\n" +
      '\n' +
      'const createObjectOfGreetingsFor = all({\n' +
      '  hi: name => `Hi ${name}`,\n' +
      '  hey: name => `Hey ${name}`,\n' +
      '  hello: name => `Hello ${name}`,\n' +
      '})\n' +
      '\n' +
      "const objectOfGreetingsForJane = createObjectOfGreetingsFor('Jane')\n" +
      '\n' +
      'console.log(objectOfGreetingsForJane)\n' +
      "// { hi: 'Hi Jane', hey: 'Hey Jane', hello: 'Hello Jane' }\n" +
      '```\n' +
      '\n' +
      '`all` can simultaneously compose objects and handle promises.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const userbase = new Map()\n' +
      "userbase.set('1', { _id: 1, name: 'George' })\n" +
      '\n' +
      'const getUserByID = async id => userbase.get(id)\n' +
      '\n' +
      'const getAndLogUserById = pipe([\n' +
      '  all({\n' +
      '    id: identity,\n' +
      '    user: getUserByID,\n' +
      '  }),\n' +
      '  tap(({ id, user }) => {\n' +
      '    console.log(`Got user ${JSON.stringify(user)} by id ${id}`)\n' +
      '  }),\n' +
      '])\n' +
      '\n' +
      `getAndLogUserById('1') // Got user {"_id":1,"name":"George"} by id 1\n` +
      '```',
    execution: 'concurrent',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'all',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'all(...args, funcsArray Array<function>) -> result Promise|Array\n' +
              '\n' +
              'all(funcsArray Array<function>)(...args) -> result Promise|Array\n' +
              '\n' +
              'all(...args, funcsObject Object<function>) -> result Promise|Object\n' +
              '\n' +
              'all(funcsObject Object<function>)(...args) -> result Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 301 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 301 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Function executor and composer. Accepts either an array of functions or an object of functions as the values. Calls each function of the provided array or object in parallel with the provided arguments. Returns either an array or object of the results of the function executions.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 280, offset: 279 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 280, offset: 279 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const createArrayOfGreetingsFor = all([\n' +
              '  name => `Hi ${name}`,\n' +
              '  name => `Hey ${name}`,\n' +
              '  name => `Hello ${name}`,\n' +
              '])\n' +
              '\n' +
              "const arrayOfGreetingsForFred = createArrayOfGreetingsFor('Fred')\n" +
              '\n' +
              'console.log(arrayOfGreetingsForFred)\n' +
              "// ['Hi Fred', 'Hey Fred', 'Hello Fred']\n" +
              '\n' +
              'const createObjectOfGreetingsFor = all({\n' +
              '  hi: name => `Hi ${name}`,\n' +
              '  hey: name => `Hey ${name}`,\n' +
              '  hello: name => `Hello ${name}`,\n' +
              '})\n' +
              '\n' +
              "const objectOfGreetingsForJane = createObjectOfGreetingsFor('Jane')\n" +
              '\n' +
              'console.log(objectOfGreetingsForJane)\n' +
              "// { hi: 'Hi Jane', hey: 'Hey Jane', hello: 'Hello Jane' }",
            position: {
              start: { line: 3, column: 1, offset: 281 },
              end: { line: 25, column: 4, offset: 880 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'all',
                position: {
                  start: { line: 27, column: 1, offset: 882 },
                  end: { line: 27, column: 6, offset: 887 }
                }
              },
              {
                type: 'text',
                value: ' can simultaneously compose objects and handle promises.',
                position: {
                  start: { line: 27, column: 6, offset: 887 },
                  end: { line: 27, column: 62, offset: 943 }
                }
              }
            ],
            position: {
              start: { line: 27, column: 1, offset: 882 },
              end: { line: 27, column: 62, offset: 943 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'const userbase = new Map()\n' +
              "userbase.set('1', { _id: 1, name: 'George' })\n" +
              '\n' +
              'const getUserByID = async id => userbase.get(id)\n' +
              '\n' +
              'const getAndLogUserById = pipe([\n' +
              '  all({\n' +
              '    id: identity,\n' +
              '    user: getUserByID,\n' +
              '  }),\n' +
              '  tap(({ id, user }) => {\n' +
              '    console.log(`Got user ${JSON.stringify(user)} by id ${id}`)\n' +
              '  }),\n' +
              '])\n' +
              '\n' +
              `getAndLogUserById('1') // Got user {"_id":1,"name":"George"} by id 1`,
            position: {
              start: { line: 29, column: 1, offset: 945 },
              end: { line: 48, column: 4, offset: 1389 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 48, column: 4, offset: 1389 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      }
    }
  },
  {
    name: 'all.series',
    synopsis: '```coffeescript [specscript]\n' +
      'all.series(...args, funcsArray Array<function>) -> result Promise|Array\n' +
      '\n' +
      'all.series(funcsArray Array<function>)(...args) -> result Promise|Array\n' +
      '```',
    description: '`all` with serial execution.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'all.series([\n' +
      "  greeting => console.log(greeting + ' world'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' mom'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' goodbye'),\n" +
      "])('hello') // hello world\n" +
      '            // hello mom\n' +
      '            // hello goodbye\n' +
      '```',
    execution: 'series',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'all.series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'all.series(...args, funcsArray Array<function>) -> result Promise|Array\n' +
              '\n' +
              'all.series(funcsArray Array<function>)(...args) -> result Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 177 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 177 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'all',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'text',
                value: ' with serial execution.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              'all.series([\n' +
              "  greeting => console.log(greeting + ' world'),\n" +
              '  sleep(1000),\n' +
              "  greeting => console.log(greeting + ' mom'),\n" +
              '  sleep(1000),\n' +
              "  greeting => console.log(greeting + ' goodbye'),\n" +
              "])('hello') // hello world\n" +
              '            // hello mom\n' +
              '            // hello goodbye',
            position: {
              start: { line: 3, column: 1, offset: 30 },
              end: { line: 15, column: 4, offset: 403 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 403 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'always',
    synopsis: '```coffeescript [specscript]\nalways(value any) -> getter ()=>value\n```',
    description: 'Creates a function from a value that always returns the provided value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const always5 = always(5)\n' +
      '\n' +
      'console.log(always5()) // 5\n' +
      'console.log(always5()) // 5\n' +
      'console.log(always5()) // 5\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'always',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'always(value any) -> getter ()=>value',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 70 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 70 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a function from a value that always returns the provided value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 72, offset: 71 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 72, offset: 71 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const always5 = always(5)\n' +
              '\n' +
              'console.log(always5()) // 5\n' +
              'console.log(always5()) // 5\n' +
              'console.log(always5()) // 5',
            position: {
              start: { line: 3, column: 1, offset: 73 },
              end: { line: 9, column: 4, offset: 214 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 214 }
        }
      }
    }
  },
  {
    name: 'and',
    synopsis: '```coffeescript [specscript]\n' +
      'and(values Array<boolean>) -> result boolean\n' +
      '\n' +
      'and(...args, predicatesOrValues Array<function|boolean>) -> Promise|boolean\n' +
      '\n' +
      'and(predicatesOrValues Array<function|boolean>)(...args) -> Promise|boolean\n' +
      '```',
    description: 'Tests an array of boolean values, returning true if all boolean values are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const oneIsLessThanThree = 1 < 3\n' +
      'const twoIsGreaterThanOne = 2 > 1\n' +
      'const threeIsEqualToThree = 3 === 3\n' +
      '\n' +
      'console.log(\n' +
      '  and([oneIsLessThanThree, twoIsGreaterThanOne, threeIsEqualToThree]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'If any values in the array are synchronous or asynchronous predicate functions, `and` takes another argument to test concurrently against the predicate functions, returning true if all array values and resolved values from the predicates are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const isPositive = number => number > 0\n' +
      '\n' +
      'const isLessThan3 = number => number < 3\n' +
      '\n' +
      'console.log(\n' +
      '  and([isOdd, isPositive, isLessThan3])(1),\n' +
      ') // true\n' +
      '```',
    execution: 'series',
    note: '...args slows down here by an order of magnitude',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'and',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'and(values Array<boolean>) -> result boolean\n' +
              '\n' +
              'and(...args, predicatesOrValues Array<function|boolean>) -> Promise|boolean\n' +
              '\n' +
              'and(predicatesOrValues Array<function|boolean>)(...args) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 231 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 231 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Tests an array of boolean values, returning true if all boolean values are truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 83, offset: 82 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 83, offset: 82 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const oneIsLessThanThree = 1 < 3\n' +
              'const twoIsGreaterThanOne = 2 > 1\n' +
              'const threeIsEqualToThree = 3 === 3\n' +
              '\n' +
              'console.log(\n' +
              '  and([oneIsLessThanThree, twoIsGreaterThanOne, threeIsEqualToThree]),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 84 },
              end: { line: 11, column: 4, offset: 312 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If any values in the array are synchronous or asynchronous predicate functions, ',
                position: {
                  start: { line: 13, column: 1, offset: 314 },
                  end: { line: 13, column: 81, offset: 394 }
                }
              },
              {
                type: 'inlineCode',
                value: 'and',
                position: {
                  start: { line: 13, column: 81, offset: 394 },
                  end: { line: 13, column: 86, offset: 399 }
                }
              },
              {
                type: 'text',
                value: ' takes another argument to test concurrently against the predicate functions, returning true if all array values and resolved values from the predicates are truthy.',
                position: {
                  start: { line: 13, column: 86, offset: 399 },
                  end: { line: 13, column: 250, offset: 563 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 314 },
              end: { line: 13, column: 250, offset: 563 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const isPositive = number => number > 0\n' +
              '\n' +
              'const isLessThan3 = number => number < 3\n' +
              '\n' +
              'console.log(\n' +
              '  and([isOdd, isPositive, isLessThan3])(1),\n' +
              ') // true',
            position: {
              start: { line: 15, column: 1, offset: 565 },
              end: { line: 25, column: 4, offset: 786 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 25, column: 4, offset: 786 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      note: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '...args slows down here by an order of magnitude',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 49, offset: 48 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 49, offset: 48 }
        }
      }
    }
  },
  {
    name: '_Promise',
    synopsis: '```coffeescript [specscript]\nnew _Promise() -> _Promise\n```',
    description: 'Internal _Promise. Does not conform to spec.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '_Promise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'new _Promise() -> _Promise',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 59 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 59 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Internal _Promise. Does not conform to spec.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 45, offset: 44 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 45, offset: 44 }
        }
      }
    }
  },
  {
    name: 'arrayMap',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMap(\n' +
      '  array Array,\n' +
      '  mapper (item any, index number, array Array)=>Promise|any,\n' +
      ') -> Promise|Array\n' +
      '```',
    description: 'Apply a mapper to each item of an array, returning an array. Mapper may be asynchronous.',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'arrayMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMap(\n' +
              '  array Array,\n' +
              '  mapper (item any, index number, array Array)=>Promise|any,\n' +
              ') -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 137 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 137 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper to each item of an array, returning an array. Mapper may be asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 89, offset: 88 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 89, offset: 88 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 89, offset: 88 }
        }
      }
    }
  },
  {
    name: 'assign',
    synopsis: '```coffeescript [specscript]\n' +
      'assign(object Object, resolvers Object<function>) -> result Promise|Object\n' +
      '\n' +
      'assign(resolvers Object<function>)(object Object) -> result Promise|Object\n' +
      '```',
    description: 'Function executor and composer. Accepts an object of resolver functions and an argument object. Creates a result object from the argument object, evaluates each resolver with the argument object, and assigns to the result object the evaluations at the corresponding resolver keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const assignSquaredAndCubed = assign({\n' +
      '  squared: ({ number }) => number ** 2,\n' +
      '  cubed: ({ number }) => number ** 3,\n' +
      '})\n' +
      '\n' +
      'console.log(assignSquaredAndCubed({ number: 2 }))\n' +
      '// { number: 2, squared: 4, cubed: 8 }\n' +
      '\n' +
      'console.log(assignSquaredAndCubed({ number: 3 }))\n' +
      '// { number: 3, squared: 9, cubed: 27 }\n' +
      '```\n' +
      '\n' +
      'Any of the resolvers may be asynchronous and return Promises.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'const asyncAssignTotal = assign({\n' +
      '  async total({ numbers }) {\n' +
      '    await sleep(500)\n' +
      '    return numbers.reduce((a, b) => a + b)\n' +
      '  },\n' +
      '})\n' +
      '\n' +
      'asyncAssignTotal({ numbers: [1, 2, 3, 4, 5] }).then(console.log)\n' +
      '// { numbers: [1, 2, 3, 4, 5], total: 15 }\n' +
      '```',
    execution: 'concurrent',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'assign',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'assign(object Object, resolvers Object<function>) -> result Promise|Object\n' +
              '\n' +
              'assign(resolvers Object<function>)(object Object) -> result Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 183 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 183 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Function executor and composer. Accepts an object of resolver functions and an argument object. Creates a result object from the argument object, evaluates each resolver with the argument object, and assigns to the result object the evaluations at the corresponding resolver keys.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 281, offset: 280 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 281, offset: 280 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const assignSquaredAndCubed = assign({\n' +
              '  squared: ({ number }) => number ** 2,\n' +
              '  cubed: ({ number }) => number ** 3,\n' +
              '})\n' +
              '\n' +
              'console.log(assignSquaredAndCubed({ number: 2 }))\n' +
              '// { number: 2, squared: 4, cubed: 8 }\n' +
              '\n' +
              'console.log(assignSquaredAndCubed({ number: 3 }))\n' +
              '// { number: 3, squared: 9, cubed: 27 }',
            position: {
              start: { line: 3, column: 1, offset: 282 },
              end: { line: 14, column: 4, offset: 613 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Any of the resolvers may be asynchronous and return Promises.',
                position: {
                  start: { line: 16, column: 1, offset: 615 },
                  end: { line: 16, column: 62, offset: 676 }
                }
              }
            ],
            position: {
              start: { line: 16, column: 1, offset: 615 },
              end: { line: 16, column: 62, offset: 676 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              'const asyncAssignTotal = assign({\n' +
              '  async total({ numbers }) {\n' +
              '    await sleep(500)\n' +
              '    return numbers.reduce((a, b) => a + b)\n' +
              '  },\n' +
              '})\n' +
              '\n' +
              'asyncAssignTotal({ numbers: [1, 2, 3, 4, 5] }).then(console.log)\n' +
              '// { numbers: [1, 2, 3, 4, 5], total: 15 }',
            position: {
              start: { line: 18, column: 1, offset: 678 },
              end: { line: 30, column: 4, offset: 1021 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 30, column: 4, offset: 1021 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      }
    }
  },
  {
    name: 'compose',
    synopsis: '```coffeescript [specscript]\n' +
      'compose(funcs Array<function>)(...args) -> result Promise|any\n' +
      '\n' +
      'compose(...args, funcs Array<function>) -> result Promise|any\n' +
      '```',
    description: 'Creates a function composition from an array of functions, where each function passes its return value as a single argument to the previous function until all functions have executed. The last function is called with the arguments to the composition, while the result of a function composition is the return value of its first function. If any function of the composition is asynchronous, the result of the execution is a Promise. `compose` is effectively `pipe` in reverse.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const f = number => number * 2\n' +
      '\n' +
      'const g = number => number + 3\n' +
      '\n' +
      'console.log(\n' +
      '  compose(5, [f, g]),\n' +
      ') // 16\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'compose',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'compose(funcs Array<function>)(...args) -> result Promise|any\n' +
              '\n' +
              'compose(...args, funcs Array<function>) -> result Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 157 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 157 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a function composition from an array of functions, where each function passes its return value as a single argument to the previous function until all functions have executed. The last function is called with the arguments to the composition, while the result of a function composition is the return value of its first function. If any function of the composition is asynchronous, the result of the execution is a Promise. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 432, offset: 431 }
                }
              },
              {
                type: 'inlineCode',
                value: 'compose',
                position: {
                  start: { line: 1, column: 432, offset: 431 },
                  end: { line: 1, column: 441, offset: 440 }
                }
              },
              {
                type: 'text',
                value: ' is effectively ',
                position: {
                  start: { line: 1, column: 441, offset: 440 },
                  end: { line: 1, column: 457, offset: 456 }
                }
              },
              {
                type: 'inlineCode',
                value: 'pipe',
                position: {
                  start: { line: 1, column: 457, offset: 456 },
                  end: { line: 1, column: 463, offset: 462 }
                }
              },
              {
                type: 'text',
                value: ' in reverse.',
                position: {
                  start: { line: 1, column: 463, offset: 462 },
                  end: { line: 1, column: 475, offset: 474 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 475, offset: 474 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const f = number => number * 2\n' +
              '\n' +
              'const g = number => number + 3\n' +
              '\n' +
              'console.log(\n' +
              '  compose(5, [f, g]),\n' +
              ') // 16',
            position: {
              start: { line: 3, column: 1, offset: 476 },
              end: { line: 11, column: 4, offset: 613 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 613 }
        }
      }
    }
  },
  {
    name: 'curry',
    synopsis: '```coffeescript [specscript]\n' +
      'type __ = Symbol(placeholder)\n' +
      'type ArgsWithPlaceholder = Array<__|any>\n' +
      '\n' +
      'args ArgsWithPlaceholder\n' +
      'moreArgs ArgsWithPlaceholder\n' +
      '\n' +
      'curry(\n' +
      '  func function,\n' +
      '  ...args\n' +
      ') -> curriedFuncOrResult function|any\n' +
      '\n' +
      'curriedFuncOrResult(...moreArgs) -> anotherCurriedFuncOrResult function|any\n' +
      '```',
    description: "Enable partial application of a function's arguments in any order. Provide the placeholder value `__` to specify an argument to be resolved in the partially applied function.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b, c) => a + b + c\n' +
      '\n' +
      "console.log(curry(add, 'a', 'b', 'c')) // 'abc'\n" +
      "console.log(curry(add)('a', 'b', 'c')) // 'abc'\n" +
      "console.log(curry(add, 'a')('b', 'c')) // 'abc'\n" +
      "console.log(curry(add, 'a', 'b')('c')) // 'abc'\n" +
      "console.log(curry(add)('a')('b')('c')) // 'abc'\n" +
      '\n' +
      "console.log(curry(add, __, 'b', 'c')('a')) // abc\n" +
      "console.log(curry(add, __, __, 'c')('a', 'b')) // abc\n" +
      "console.log(curry(add, __, __, 'c')(__, 'b')('a')) // abc\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type __ = Symbol(placeholder)\n' +
              'type ArgsWithPlaceholder = Array<__|any>\n' +
              '\n' +
              'args ArgsWithPlaceholder\n' +
              'moreArgs ArgsWithPlaceholder\n' +
              '\n' +
              'curry(\n' +
              '  func function,\n' +
              '  ...args\n' +
              ') -> curriedFuncOrResult function|any\n' +
              '\n' +
              'curriedFuncOrResult(...moreArgs) -> anotherCurriedFuncOrResult function|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 14, column: 4, offset: 308 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 14, column: 4, offset: 308 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Enable partial application of a function's arguments in any order. Provide the placeholder value ",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 98, offset: 97 }
                }
              },
              {
                type: 'inlineCode',
                value: '__',
                position: {
                  start: { line: 1, column: 98, offset: 97 },
                  end: { line: 1, column: 102, offset: 101 }
                }
              },
              {
                type: 'text',
                value: ' to specify an argument to be resolved in the partially applied function.',
                position: {
                  start: { line: 1, column: 102, offset: 101 },
                  end: { line: 1, column: 175, offset: 174 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 175, offset: 174 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b, c) => a + b + c\n' +
              '\n' +
              "console.log(curry(add, 'a', 'b', 'c')) // 'abc'\n" +
              "console.log(curry(add)('a', 'b', 'c')) // 'abc'\n" +
              "console.log(curry(add, 'a')('b', 'c')) // 'abc'\n" +
              "console.log(curry(add, 'a', 'b')('c')) // 'abc'\n" +
              "console.log(curry(add)('a')('b')('c')) // 'abc'\n" +
              '\n' +
              "console.log(curry(add, __, 'b', 'c')('a')) // abc\n" +
              "console.log(curry(add, __, __, 'c')('a', 'b')) // abc\n" +
              "console.log(curry(add, __, __, 'c')(__, 'b')('a')) // abc",
            position: {
              start: { line: 3, column: 1, offset: 176 },
              end: { line: 15, column: 4, offset: 645 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 645 }
        }
      }
    }
  },
  {
    name: 'curry.arity',
    synopsis: '```coffeescript [specscript]\n' +
      'type __ = Symbol(placeholder)\n' +
      'type ArgsWithPlaceholder = Array<__|any>\n' +
      '\n' +
      'args ArgsWithPlaceholder\n' +
      'moreArgs ArgsWithPlaceholder\n' +
      '\n' +
      'curry.arity(\n' +
      '  arity number,\n' +
      '  func function,\n' +
      '  ...args\n' +
      ') -> curriedFuncOrResult function|any\n' +
      '\n' +
      'curriedFuncOrResult(...moreArgs) -> anotherCurriedFuncOrResult function|any\n' +
      '```',
    description: '`curry` with specified arity (number of arguments taken by the function) as the first parameter.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b, c = 0) => a + b + c\n' +
      '\n' +
      'console.log(curry.arity(2, add, 1, 2)) // 3\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'curry.arity',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type __ = Symbol(placeholder)\n' +
              'type ArgsWithPlaceholder = Array<__|any>\n' +
              '\n' +
              'args ArgsWithPlaceholder\n' +
              'moreArgs ArgsWithPlaceholder\n' +
              '\n' +
              'curry.arity(\n' +
              '  arity number,\n' +
              '  func function,\n' +
              '  ...args\n' +
              ') -> curriedFuncOrResult function|any\n' +
              '\n' +
              'curriedFuncOrResult(...moreArgs) -> anotherCurriedFuncOrResult function|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 330 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 330 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'curry',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              },
              {
                type: 'text',
                value: ' with specified arity (number of arguments taken by the function) as the first parameter.',
                position: {
                  start: { line: 1, column: 8, offset: 7 },
                  end: { line: 1, column: 97, offset: 96 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b, c = 0) => a + b + c\n' +
              '\n' +
              'console.log(curry.arity(2, add, 1, 2)) // 3',
            position: {
              start: { line: 3, column: 1, offset: 98 },
              end: { line: 7, column: 4, offset: 212 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 212 }
        }
      }
    }
  },
  {
    name: 'eq',
    synopsis: '```coffeescript [specscript]\n' +
      'eq(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
      '\n' +
      'eq(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
      'eq(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
      '\n' +
      'eq(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
      'eq(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
      '\n' +
      'eq(left function, right function)(...args) -> Promise|boolean\n' +
      'eq(...args, left function, right function) -> Promise|boolean\n' +
      '```',
    description: 'Test for [equality (`==`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) between two values.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const areNamesEqual = eq('Ted', 'George')\n" +
      '\n' +
      'console.log(areNamesEqual) // false\n' +
      '```\n' +
      '\n' +
      'If either of the two values are resolver functions, `eq` returns a function that resolves the values to compare from its arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const personIsGeorge = eq(get('name'), 'George')\n" +
      '\n' +
      "const person = { name: 'George', likes: 'bananas' }\n" +
      '\n' +
      'if (personIsGeorge(person)) {\n' +
      "  console.log('The person is george')\n" +
      '}\n' +
      '```',
    execution: 'concurrent',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'eq',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'eq(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
              '\n' +
              'eq(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
              'eq(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
              '\n' +
              'eq(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
              'eq(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
              '\n' +
              'eq(left function, right function)(...args) -> Promise|boolean\n' +
              'eq(...args, left function, right function) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 500 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 500 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test for ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality',
                children: [
                  {
                    type: 'text',
                    value: 'equality (',
                    position: {
                      start: { line: 1, column: 11, offset: 10 },
                      end: { line: 1, column: 21, offset: 20 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: '==',
                    position: {
                      start: { line: 1, column: 21, offset: 20 },
                      end: { line: 1, column: 25, offset: 24 }
                    }
                  },
                  {
                    type: 'text',
                    value: ')',
                    position: {
                      start: { line: 1, column: 25, offset: 24 },
                      end: { line: 1, column: 26, offset: 25 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 10, offset: 9 },
                  end: { line: 1, column: 113, offset: 112 }
                }
              },
              {
                type: 'text',
                value: ' between two values.',
                position: {
                  start: { line: 1, column: 113, offset: 112 },
                  end: { line: 1, column: 133, offset: 132 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 133, offset: 132 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const areNamesEqual = eq('Ted', 'George')\n" +
              '\n' +
              'console.log(areNamesEqual) // false',
            position: {
              start: { line: 3, column: 1, offset: 134 },
              end: { line: 7, column: 4, offset: 243 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If either of the two values are resolver functions, ',
                position: {
                  start: { line: 9, column: 1, offset: 245 },
                  end: { line: 9, column: 53, offset: 297 }
                }
              },
              {
                type: 'inlineCode',
                value: 'eq',
                position: {
                  start: { line: 9, column: 53, offset: 297 },
                  end: { line: 9, column: 57, offset: 301 }
                }
              },
              {
                type: 'text',
                value: ' returns a function that resolves the values to compare from its arguments.',
                position: {
                  start: { line: 9, column: 57, offset: 301 },
                  end: { line: 9, column: 132, offset: 376 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 245 },
              end: { line: 9, column: 132, offset: 376 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const personIsGeorge = eq(get('name'), 'George')\n" +
              '\n' +
              "const person = { name: 'George', likes: 'bananas' }\n" +
              '\n' +
              'if (personIsGeorge(person)) {\n' +
              "  console.log('The person is george')\n" +
              '}',
            position: {
              start: { line: 11, column: 1, offset: 378 },
              end: { line: 19, column: 4, offset: 581 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 581 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      }
    }
  },
  {
    name: 'every',
    synopsis: '```coffeescript [specscript]\n' +
      'type Foldable = Array|Iterable|AsyncIterable|{ reduce: function }|Object\n' +
      '\n' +
      'every(collection Foldable, predicate function) -> result Promise|boolean\n' +
      '\n' +
      'every(predicate function)(collection Foldable) -> result Promise|boolean\n' +
      '```',
    description: 'Test a predicate concurrently across all items of a collection, returning true if all predications are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  every(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  every(isOdd)([1, 3, 5]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The collection can be any iterable, async iterable, or object values iterable collection. Below is an example of `every` accepting an async generator as the collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncNumbers = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'every(async number => number < 6)(asyncNumbers()).then(console.log) // true\n' +
      '```',
    execution: 'concurrent',
    muxing: '',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'every',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Foldable = Array|Iterable|AsyncIterable|{ reduce: function }|Object\n' +
              '\n' +
              'every(collection Foldable, predicate function) -> result Promise|boolean\n' +
              '\n' +
              'every(predicate function)(collection Foldable) -> result Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 253 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 253 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test a predicate concurrently across all items of a collection, returning true if all predications are truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 111, offset: 110 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 111, offset: 110 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  every(isOdd)([1, 2, 3, 4, 5]),\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  every(isOdd)([1, 3, 5]),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 112 },
              end: { line: 13, column: 4, offset: 291 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The collection can be any iterable, async iterable, or object values iterable collection. Below is an example of ',
                position: {
                  start: { line: 15, column: 1, offset: 293 },
                  end: { line: 15, column: 114, offset: 406 }
                }
              },
              {
                type: 'inlineCode',
                value: 'every',
                position: {
                  start: { line: 15, column: 114, offset: 406 },
                  end: { line: 15, column: 121, offset: 413 }
                }
              },
              {
                type: 'text',
                value: ' accepting an async generator as the collection.',
                position: {
                  start: { line: 15, column: 121, offset: 413 },
                  end: { line: 15, column: 169, offset: 461 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 293 },
              end: { line: 15, column: 169, offset: 461 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const asyncNumbers = async function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'every(async number => number < 6)(asyncNumbers()).then(console.log) // true',
            position: {
              start: { line: 17, column: 1, offset: 463 },
              end: { line: 23, column: 4, offset: 660 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 660 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      muxing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      }
    }
  },
  {
    name: 'filter',
    synopsis: '```coffeescript [specscript]\n' +
      'type Filterable = Array|Object|Set|Map|Iterator|AsyncIterator\n' +
      'type Predicate = (\n' +
      '  value any,\n' +
      '  indexOrKey? number|string,\n' +
      '  collection? Filterable,\n' +
      ')=>boolean\n' +
      '\n' +
      'filter(\n' +
      '  collection Filterable,\n' +
      '  predicate Predicate\n' +
      ') -> result Promise|Filterable\n' +
      '\n' +
      'filter(predicate Predicate)(collection Filterable)\n' +
      '  -> result Promise|Filterable\n' +
      '```',
    description: 'Filter out items from a collection based on the results of their concurrent executions with a synchronous or asynchronous predicate function. `filter` accepts the following collections:\n' +
      '\n' +
      ' * `Array`\n' +
      ' * `Object`\n' +
      ' * `Set`\n' +
      ' * `Map`\n' +
      ' * `Iterator`/`Generator`\n' +
      ' * `AsyncIterator`/`AsyncGenerator`\n' +
      '\n' +
      'For arrays (type `Array`), `filter` applies the predicate function to each item of the array, returning a new array containing only the items that tested truthy by the predicate. The order of the items is preserved. On each iteration, the predicate is passed the item, the index of the item, and a reference to the array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const array = [1, 2, 3, 4, 5]\n' +
      '\n' +
      'console.log(filter(isOdd)(array)) // [1, 3, 5]\n' +
      'console.log(filter(array, isOdd)) // [1, 3, 5]\n' +
      '```\n' +
      '\n' +
      'For objects (type `Object`), `filter` applies the predicate function to each value of the object, returning a new object containing only the values that tested truthy by the predicate. On each iteration, the predicate is passed the object value, the key of the object value, and a reference to the object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
      '\n' +
      'console.log(filter(isOdd)(obj)) // { a: 1, c: 3, e: 5 }\n' +
      'console.log(filter(obj, isOdd)) // { a: 1, c: 3, e: 5 }\n' +
      '```\n' +
      '\n' +
      'For sets (type `Set`), `filter` applies the predicate function to each item in the set, returning a new set containing only the items that tested truthy by the predicate. On each iteration, the predicate is passed the item, the same item as the key argument, and a reference to the set.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const set = new Set([1, 2, 3, 4, 5])\n' +
      '\n' +
      'console.log(filter(isOdd)(set)) // Set { 1, 3, 5 }\n' +
      'console.log(filter(set, isOdd)) // Set { 1, 3, 5 }\n' +
      '```\n' +
      '\n' +
      'For maps (type `Map`), `filter` applies the predicate function to the value of each entry of the map, returning a new map containing only the entries where the values tested truthy by the predicate. The order of the entries are preserved. On each iteration, the predicate is passed the map value, the key of the value, and a reference to the map.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
      "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
      '\n' +
      "console.log(filter(isOdd)(m)) // Map(3) { 'a' => 1, 'c' => 3, 'e' => 5 }\n" +
      "console.log(filter(m, isOdd)) // Map(3) { 'a' => 1, 'c' => 3, 'e' => 5 }\n" +
      '```\n' +
      '\n' +
      'For iterators (type `Iterator`) or generators (type `Generator`), `filter` returns a lazily filtered iterator/generator; all values that are normally yielded by the iterator/generator that test falsy by the predicate function are skipped by the lazily filtered iterator/generator. On each iteration, the predicate is passed the iteration value only.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const numbersGeneratorFunction = function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const numbersGenerator = numbersGeneratorFunction()\n' +
      'const oddNumbersGenerator = filter(numbersGeneratorFunction(), isOdd)\n' +
      'const oddNumbersGenerator2 = filter(isOdd)(numbersGeneratorFunction())\n' +
      '\n' +
      'for (const number of numbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 2\n' +
      '                      // 3\n' +
      '                      // 4\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'for (const number of oddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'for (const number of oddNumbersGenerator2) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```\n' +
      '\n' +
      'With asyncIterators (type `AsyncIterator`) or asyncGenerators (type `AsyncGenerator`), `filter` returns a lazily filtered asyncIterator/asyncGenerator; all values that are normally yielded by the asyncIterator/asyncGenerator that test falsy by the predicate function are skipped by the lazily filtered asyncIterator/asyncGenerator. On each iteration, the predicate is passed the iteration value only.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncIsOdd = async number => number % 2 == 1\n' +
      '\n' +
      'const asyncNumbersGeneratorFunction = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const asyncNumbersGenerator = asyncNumbersGeneratorFunction()\n' +
      '\n' +
      'const asyncOddNumbersGenerator = filter(asyncNumbersGeneratorFunction(), asyncIsOdd)\n' +
      '\n' +
      'const asyncOddNumbersGenerator2 = filter(asyncIsOdd)(asyncNumbersGeneratorFunction())\n' +
      '\n' +
      'for await (const number of asyncNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 2\n' +
      '                      // 3\n' +
      '                      // 4\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'for await (const number of asyncOddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'for await (const number of asyncOddNumbersGenerator2) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```',
    execution: 'concurrent',
    transducing: '',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'filter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Filterable = Array|Object|Set|Map|Iterator|AsyncIterator\n' +
              'type Predicate = (\n' +
              '  value any,\n' +
              '  indexOrKey? number|string,\n' +
              '  collection? Filterable,\n' +
              ')=>boolean\n' +
              '\n' +
              'filter(\n' +
              '  collection Filterable,\n' +
              '  predicate Predicate\n' +
              ') -> result Promise|Filterable\n' +
              '\n' +
              'filter(predicate Predicate)(collection Filterable)\n' +
              '  -> result Promise|Filterable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 16, column: 4, offset: 362 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 16, column: 4, offset: 362 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter out items from a collection based on the results of their concurrent executions with a synchronous or asynchronous predicate function. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 143, offset: 142 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 1, column: 143, offset: 142 },
                  end: { line: 1, column: 151, offset: 150 }
                }
              },
              {
                type: 'text',
                value: ' accepts the following collections:',
                position: {
                  start: { line: 1, column: 151, offset: 150 },
                  end: { line: 1, column: 186, offset: 185 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 186, offset: 185 }
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
                        type: 'inlineCode',
                        value: 'Array',
                        position: {
                          start: { line: 3, column: 4, offset: 190 },
                          end: { line: 3, column: 11, offset: 197 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 190 },
                      end: { line: 3, column: 11, offset: 197 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 188 },
                  end: { line: 3, column: 11, offset: 197 }
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
                        type: 'inlineCode',
                        value: 'Object',
                        position: {
                          start: { line: 4, column: 4, offset: 201 },
                          end: { line: 4, column: 12, offset: 209 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 201 },
                      end: { line: 4, column: 12, offset: 209 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 2, offset: 199 },
                  end: { line: 4, column: 12, offset: 209 }
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
                        type: 'inlineCode',
                        value: 'Set',
                        position: {
                          start: { line: 5, column: 4, offset: 213 },
                          end: { line: 5, column: 9, offset: 218 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 213 },
                      end: { line: 5, column: 9, offset: 218 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 211 },
                  end: { line: 5, column: 9, offset: 218 }
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
                        type: 'inlineCode',
                        value: 'Map',
                        position: {
                          start: { line: 6, column: 4, offset: 222 },
                          end: { line: 6, column: 9, offset: 227 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 222 },
                      end: { line: 6, column: 9, offset: 227 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 220 },
                  end: { line: 6, column: 9, offset: 227 }
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
                        type: 'inlineCode',
                        value: 'Iterator',
                        position: {
                          start: { line: 7, column: 4, offset: 231 },
                          end: { line: 7, column: 14, offset: 241 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 7, column: 14, offset: 241 },
                          end: { line: 7, column: 15, offset: 242 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Generator',
                        position: {
                          start: { line: 7, column: 15, offset: 242 },
                          end: { line: 7, column: 26, offset: 253 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 231 },
                      end: { line: 7, column: 26, offset: 253 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 229 },
                  end: { line: 7, column: 26, offset: 253 }
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
                        type: 'inlineCode',
                        value: 'AsyncIterator',
                        position: {
                          start: { line: 8, column: 4, offset: 257 },
                          end: { line: 8, column: 19, offset: 272 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 8, column: 19, offset: 272 },
                          end: { line: 8, column: 20, offset: 273 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'AsyncGenerator',
                        position: {
                          start: { line: 8, column: 20, offset: 273 },
                          end: { line: 8, column: 36, offset: 289 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 257 },
                      end: { line: 8, column: 36, offset: 289 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 2, offset: 255 },
                  end: { line: 8, column: 36, offset: 289 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 2, offset: 188 },
              end: { line: 8, column: 36, offset: 289 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For arrays (type ',
                position: {
                  start: { line: 10, column: 1, offset: 291 },
                  end: { line: 10, column: 18, offset: 308 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Array',
                position: {
                  start: { line: 10, column: 18, offset: 308 },
                  end: { line: 10, column: 25, offset: 315 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 10, column: 25, offset: 315 },
                  end: { line: 10, column: 28, offset: 318 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 10, column: 28, offset: 318 },
                  end: { line: 10, column: 36, offset: 326 }
                }
              },
              {
                type: 'text',
                value: ' applies the predicate function to each item of the array, returning a new array containing only the items that tested truthy by the predicate. The order of the items is preserved. On each iteration, the predicate is passed the item, the index of the item, and a reference to the array.',
                position: {
                  start: { line: 10, column: 36, offset: 326 },
                  end: { line: 10, column: 322, offset: 612 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 291 },
              end: { line: 10, column: 322, offset: 612 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const array = [1, 2, 3, 4, 5]\n' +
              '\n' +
              'console.log(filter(isOdd)(array)) // [1, 3, 5]\n' +
              'console.log(filter(array, isOdd)) // [1, 3, 5]',
            position: {
              start: { line: 12, column: 1, offset: 614 },
              end: { line: 19, column: 4, offset: 810 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For objects (type ',
                position: {
                  start: { line: 21, column: 1, offset: 812 },
                  end: { line: 21, column: 19, offset: 830 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 21, column: 19, offset: 830 },
                  end: { line: 21, column: 27, offset: 838 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 21, column: 27, offset: 838 },
                  end: { line: 21, column: 30, offset: 841 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 21, column: 30, offset: 841 },
                  end: { line: 21, column: 38, offset: 849 }
                }
              },
              {
                type: 'text',
                value: ' applies the predicate function to each value of the object, returning a new object containing only the values that tested truthy by the predicate. On each iteration, the predicate is passed the object value, the key of the object value, and a reference to the object.',
                position: {
                  start: { line: 21, column: 38, offset: 849 },
                  end: { line: 21, column: 306, offset: 1117 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 812 },
              end: { line: 21, column: 306, offset: 1117 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
              '\n' +
              'console.log(filter(isOdd)(obj)) // { a: 1, c: 3, e: 5 }\n' +
              'console.log(filter(obj, isOdd)) // { a: 1, c: 3, e: 5 }',
            position: {
              start: { line: 23, column: 1, offset: 1119 },
              end: { line: 30, column: 4, offset: 1348 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For sets (type ',
                position: {
                  start: { line: 32, column: 1, offset: 1350 },
                  end: { line: 32, column: 16, offset: 1365 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Set',
                position: {
                  start: { line: 32, column: 16, offset: 1365 },
                  end: { line: 32, column: 21, offset: 1370 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 32, column: 21, offset: 1370 },
                  end: { line: 32, column: 24, offset: 1373 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 32, column: 24, offset: 1373 },
                  end: { line: 32, column: 32, offset: 1381 }
                }
              },
              {
                type: 'text',
                value: ' applies the predicate function to each item in the set, returning a new set containing only the items that tested truthy by the predicate. On each iteration, the predicate is passed the item, the same item as the key argument, and a reference to the set.',
                position: {
                  start: { line: 32, column: 32, offset: 1381 },
                  end: { line: 32, column: 287, offset: 1636 }
                }
              }
            ],
            position: {
              start: { line: 32, column: 1, offset: 1350 },
              end: { line: 32, column: 287, offset: 1636 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const set = new Set([1, 2, 3, 4, 5])\n' +
              '\n' +
              'console.log(filter(isOdd)(set)) // Set { 1, 3, 5 }\n' +
              'console.log(filter(set, isOdd)) // Set { 1, 3, 5 }',
            position: {
              start: { line: 34, column: 1, offset: 1638 },
              end: { line: 41, column: 4, offset: 1849 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For maps (type ',
                position: {
                  start: { line: 43, column: 1, offset: 1851 },
                  end: { line: 43, column: 16, offset: 1866 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Map',
                position: {
                  start: { line: 43, column: 16, offset: 1866 },
                  end: { line: 43, column: 21, offset: 1871 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 43, column: 21, offset: 1871 },
                  end: { line: 43, column: 24, offset: 1874 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 43, column: 24, offset: 1874 },
                  end: { line: 43, column: 32, offset: 1882 }
                }
              },
              {
                type: 'text',
                value: ' applies the predicate function to the value of each entry of the map, returning a new map containing only the entries where the values tested truthy by the predicate. The order of the entries are preserved. On each iteration, the predicate is passed the map value, the key of the value, and a reference to the map.',
                position: {
                  start: { line: 43, column: 32, offset: 1882 },
                  end: { line: 43, column: 347, offset: 2197 }
                }
              }
            ],
            position: {
              start: { line: 43, column: 1, offset: 1851 },
              end: { line: 43, column: 347, offset: 2197 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
              "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
              '\n' +
              "console.log(filter(isOdd)(m)) // Map(3) { 'a' => 1, 'c' => 3, 'e' => 5 }\n" +
              "console.log(filter(m, isOdd)) // Map(3) { 'a' => 1, 'c' => 3, 'e' => 5 }",
            position: {
              start: { line: 45, column: 1, offset: 2199 },
              end: { line: 53, column: 4, offset: 2532 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For iterators (type ',
                position: {
                  start: { line: 55, column: 1, offset: 2534 },
                  end: { line: 55, column: 21, offset: 2554 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Iterator',
                position: {
                  start: { line: 55, column: 21, offset: 2554 },
                  end: { line: 55, column: 31, offset: 2564 }
                }
              },
              {
                type: 'text',
                value: ') or generators (type ',
                position: {
                  start: { line: 55, column: 31, offset: 2564 },
                  end: { line: 55, column: 53, offset: 2586 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Generator',
                position: {
                  start: { line: 55, column: 53, offset: 2586 },
                  end: { line: 55, column: 64, offset: 2597 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 55, column: 64, offset: 2597 },
                  end: { line: 55, column: 67, offset: 2600 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 55, column: 67, offset: 2600 },
                  end: { line: 55, column: 75, offset: 2608 }
                }
              },
              {
                type: 'text',
                value: ' returns a lazily filtered iterator/generator; all values that are normally yielded by the iterator/generator that test falsy by the predicate function are skipped by the lazily filtered iterator/generator. On each iteration, the predicate is passed the iteration value only.',
                position: {
                  start: { line: 55, column: 75, offset: 2608 },
                  end: { line: 55, column: 350, offset: 2883 }
                }
              }
            ],
            position: {
              start: { line: 55, column: 1, offset: 2534 },
              end: { line: 55, column: 350, offset: 2883 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const numbersGeneratorFunction = function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'const numbersGenerator = numbersGeneratorFunction()\n' +
              'const oddNumbersGenerator = filter(numbersGeneratorFunction(), isOdd)\n' +
              'const oddNumbersGenerator2 = filter(isOdd)(numbersGeneratorFunction())\n' +
              '\n' +
              'for (const number of numbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 2\n' +
              '                      // 3\n' +
              '                      // 4\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'for (const number of oddNumbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'for (const number of oddNumbersGenerator2) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}',
            position: {
              start: { line: 57, column: 1, offset: 2885 },
              end: { line: 87, column: 4, offset: 3682 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With asyncIterators (type ',
                position: {
                  start: { line: 89, column: 1, offset: 3684 },
                  end: { line: 89, column: 27, offset: 3710 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncIterator',
                position: {
                  start: { line: 89, column: 27, offset: 3710 },
                  end: { line: 89, column: 42, offset: 3725 }
                }
              },
              {
                type: 'text',
                value: ') or asyncGenerators (type ',
                position: {
                  start: { line: 89, column: 42, offset: 3725 },
                  end: { line: 89, column: 69, offset: 3752 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncGenerator',
                position: {
                  start: { line: 89, column: 69, offset: 3752 },
                  end: { line: 89, column: 85, offset: 3768 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 89, column: 85, offset: 3768 },
                  end: { line: 89, column: 88, offset: 3771 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 89, column: 88, offset: 3771 },
                  end: { line: 89, column: 96, offset: 3779 }
                }
              },
              {
                type: 'text',
                value: ' returns a lazily filtered asyncIterator/asyncGenerator; all values that are normally yielded by the asyncIterator/asyncGenerator that test falsy by the predicate function are skipped by the lazily filtered asyncIterator/asyncGenerator. On each iteration, the predicate is passed the iteration value only.',
                position: {
                  start: { line: 89, column: 96, offset: 3779 },
                  end: { line: 89, column: 401, offset: 4084 }
                }
              }
            ],
            position: {
              start: { line: 89, column: 1, offset: 3684 },
              end: { line: 89, column: 401, offset: 4084 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const asyncIsOdd = async number => number % 2 == 1\n' +
              '\n' +
              'const asyncNumbersGeneratorFunction = async function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'const asyncNumbersGenerator = asyncNumbersGeneratorFunction()\n' +
              '\n' +
              'const asyncOddNumbersGenerator = filter(asyncNumbersGeneratorFunction(), asyncIsOdd)\n' +
              '\n' +
              'const asyncOddNumbersGenerator2 = filter(asyncIsOdd)(asyncNumbersGeneratorFunction())\n' +
              '\n' +
              'for await (const number of asyncNumbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 2\n' +
              '                      // 3\n' +
              '                      // 4\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'for await (const number of asyncOddNumbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'for await (const number of asyncOddNumbersGenerator2) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}',
            position: {
              start: { line: 91, column: 1, offset: 4086 },
              end: { line: 123, column: 4, offset: 4980 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 123, column: 4, offset: 4980 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      transducing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      }
    }
  },
  {
    name: 'flatMap',
    synopsis: '```coffeescript [specscript]\n' +
      'type FlatMappable = Array|String|Set|Iterator|AsyncIterator\n' +
      'type Iterable = Iterable|AsyncIterable|Object<value any>\n' +
      '\n' +
      'flatMap(\n' +
      '  collection FlatMappable,\n' +
      '  flatMapper (item any)=>Promise|Iterable,\n' +
      ') -> result Promise|FlatMappable\n' +
      '\n' +
      'flatMap(flatMapper (item any)=>Promise|Iterable)(collection FlatMappable)\n' +
      '  -> result Promise|FlatMappable\n' +
      '```',
    description: 'Applies a flatMapper function concurrently to each item of a collection, creating a new collection of the same type. A flatMapping operation iterates through each item of a collection and applies the flatMapper function to each item, flattening the result of the execution into the result collection. The result of an individual execution can be any iterable, async iterable, or object values iterable collection. The flatMapper function may be asynchronous.\n' +
      '\n' +
      ' * `Iterable` - the execution result is iterated and each item is added to the result collection\n' +
      ' * `AsyncIterable` - the execution result is asynchronously iterated and each item is added to the result collection\n' +
      ' * `Object` - the execution result values are added to the result collection\n' +
      '\n' +
      'The following example demonstrates various execution results being flattened into the same array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'flatMap(identity)([\n' +
      '  [1, 1], // array\n' +
      '  new Set([2, 2]), // set\n' +
      '  (function* () { yield 3; yield 3 })(), // generator\n' +
      '  (async function* () { yield 7; yield 7 })(), // asyncGenerator\n' +
      '  { a: 5, b: 5 }, // object\n' +
      '  new Uint8Array([8]), // typedArray\n' +
      ']).then(console.log)\n' +
      '// [1, 1, 2, 3, 3, 5, 5, 8, 7, 7]\n' +
      '```\n' +
      '\n' +
      'A flatMapping operation concatenates onto the resulting collection synchronous values and muxes any asynchronous values. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'const repeat3 = function* (message) {\n' +
      '  yield message; yield message; yield message\n' +
      '}\n' +
      '\n' +
      'console.log( // sync is concatenated\n' +
      "  flatMap(['foo', 'bar', 'baz'], repeat3),\n" +
      ") // ['foo', 'foo', 'foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']\n" +
      '\n' +
      'const asyncRepeat3 = async function* (message) {\n' +
      '  yield message\n' +
      '  await sleep(100)\n' +
      '  yield message\n' +
      '  await sleep(1000)\n' +
      '  yield message\n' +
      '}\n' +
      '\n' +
      '// async is muxed\n' +
      "flatMap(['foo', 'bar', 'baz'], asyncRepeat3).then(console.log)\n" +
      "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']\n" +
      '```\n' +
      '\n' +
      'For arrays (type `Array`), `flatMap` applies the flatMapper function to each item, pushing (`.push`) the items of each execution into a new array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const duplicate = value => [value, value]\n' +
      '\n' +
      'console.log(\n' +
      '  flatMap([1, 2, 3, 4, 5], duplicate)\n' +
      ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
      '```\n' +
      '\n' +
      'For strings (type `String`), `flatMap` applies the flatMapper function to each character, adding (`+`) the items of each execution into a new string\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const duplicate = value => [value, value]\n' +
      '\n' +
      'console.log(\n' +
      "  flatMap('12345', duplicate)\n" +
      ') // 1122334455\n' +
      '```\n' +
      '\n' +
      'For sets (type `Set`), `flatMap` applies the flatMapper function to each item, adding (`.add`) the items of each execution into a new set\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const pairPlus100 = value => [value, value + 100]\n' +
      '\n' +
      'console.log(\n' +
      '  flatMap(new Set([1, 2, 3, 4, 5]), pairPlus100)\n' +
      ') // Set(10) { 1, 101, 2, 102, 3, 103, 4, 104, 5, 105 }\n' +
      '```',
    execution: 'concurrent',
    transducing: '',
    archive: '* For typed arrays (type [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)) and Node.js buffers (type [`Buffer`](https://nodejs.org/api/buffer.html)), `flatMap` applies a flatMapper function to each value of the typed array/buffer, joining the result of each execution with `.set` into the resulting typed array\n' +
      '\n' +
      ' * For Node.js duplex streams (type [Stream](https://nodejs.org/api/stream.html#class-streamduplex)), `flatMap` applies a flatMapper function to each item of the stream, writing (`.write`) each item of each execution into the duplex stream',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'flatMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type FlatMappable = Array|String|Set|Iterator|AsyncIterator\n' +
              'type Iterable = Iterable|AsyncIterable|Object<value any>\n' +
              '\n' +
              'flatMap(\n' +
              '  collection FlatMappable,\n' +
              '  flatMapper (item any)=>Promise|Iterable,\n' +
              ') -> result Promise|FlatMappable\n' +
              '\n' +
              'flatMap(flatMapper (item any)=>Promise|Iterable)(collection FlatMappable)\n' +
              '  -> result Promise|FlatMappable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 370 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 370 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Applies a flatMapper function concurrently to each item of a collection, creating a new collection of the same type. A flatMapping operation iterates through each item of a collection and applies the flatMapper function to each item, flattening the result of the execution into the result collection. The result of an individual execution can be any iterable, async iterable, or object values iterable collection. The flatMapper function may be asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 459, offset: 458 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 459, offset: 458 }
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
                        type: 'inlineCode',
                        value: 'Iterable',
                        position: {
                          start: { line: 3, column: 4, offset: 463 },
                          end: { line: 3, column: 14, offset: 473 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the execution result is iterated and each item is added to the result collection',
                        position: {
                          start: { line: 3, column: 14, offset: 473 },
                          end: { line: 3, column: 97, offset: 556 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 463 },
                      end: { line: 3, column: 97, offset: 556 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 461 },
                  end: { line: 3, column: 97, offset: 556 }
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
                        type: 'inlineCode',
                        value: 'AsyncIterable',
                        position: {
                          start: { line: 4, column: 4, offset: 560 },
                          end: { line: 4, column: 19, offset: 575 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the execution result is asynchronously iterated and each item is added to the result collection',
                        position: {
                          start: { line: 4, column: 19, offset: 575 },
                          end: { line: 4, column: 117, offset: 673 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 560 },
                      end: { line: 4, column: 117, offset: 673 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 2, offset: 558 },
                  end: { line: 4, column: 117, offset: 673 }
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
                        type: 'inlineCode',
                        value: 'Object',
                        position: {
                          start: { line: 5, column: 4, offset: 677 },
                          end: { line: 5, column: 12, offset: 685 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' - the execution result values are added to the result collection',
                        position: {
                          start: { line: 5, column: 12, offset: 685 },
                          end: { line: 5, column: 77, offset: 750 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 677 },
                      end: { line: 5, column: 77, offset: 750 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 675 },
                  end: { line: 5, column: 77, offset: 750 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 2, offset: 461 },
              end: { line: 5, column: 77, offset: 750 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The following example demonstrates various execution results being flattened into the same array.',
                position: {
                  start: { line: 7, column: 1, offset: 752 },
                  end: { line: 7, column: 98, offset: 849 }
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 752 },
              end: { line: 7, column: 98, offset: 849 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'flatMap(identity)([\n' +
              '  [1, 1], // array\n' +
              '  new Set([2, 2]), // set\n' +
              '  (function* () { yield 3; yield 3 })(), // generator\n' +
              '  (async function* () { yield 7; yield 7 })(), // asyncGenerator\n' +
              '  { a: 5, b: 5 }, // object\n' +
              '  new Uint8Array([8]), // typedArray\n' +
              ']).then(console.log)\n' +
              '// [1, 1, 2, 3, 3, 5, 5, 8, 7, 7]',
            position: {
              start: { line: 9, column: 1, offset: 851 },
              end: { line: 21, column: 4, offset: 1218 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A flatMapping operation concatenates onto the resulting collection synchronous values and muxes any asynchronous values. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items.',
                position: {
                  start: { line: 23, column: 1, offset: 1220 },
                  end: { line: 23, column: 310, offset: 1529 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 1220 },
              end: { line: 23, column: 310, offset: 1529 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              'const repeat3 = function* (message) {\n' +
              '  yield message; yield message; yield message\n' +
              '}\n' +
              '\n' +
              'console.log( // sync is concatenated\n' +
              "  flatMap(['foo', 'bar', 'baz'], repeat3),\n" +
              ") // ['foo', 'foo', 'foo', 'bar', 'bar', 'bar', 'baz', 'baz', 'baz']\n" +
              '\n' +
              'const asyncRepeat3 = async function* (message) {\n' +
              '  yield message\n' +
              '  await sleep(100)\n' +
              '  yield message\n' +
              '  await sleep(1000)\n' +
              '  yield message\n' +
              '}\n' +
              '\n' +
              '// async is muxed\n' +
              "flatMap(['foo', 'bar', 'baz'], asyncRepeat3).then(console.log)\n" +
              "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']",
            position: {
              start: { line: 25, column: 1, offset: 1531 },
              end: { line: 47, column: 4, offset: 2154 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For arrays (type ',
                position: {
                  start: { line: 49, column: 1, offset: 2156 },
                  end: { line: 49, column: 18, offset: 2173 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Array',
                position: {
                  start: { line: 49, column: 18, offset: 2173 },
                  end: { line: 49, column: 25, offset: 2180 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 49, column: 25, offset: 2180 },
                  end: { line: 49, column: 28, offset: 2183 }
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 49, column: 28, offset: 2183 },
                  end: { line: 49, column: 37, offset: 2192 }
                }
              },
              {
                type: 'text',
                value: ' applies the flatMapper function to each item, pushing (',
                position: {
                  start: { line: 49, column: 37, offset: 2192 },
                  end: { line: 49, column: 93, offset: 2248 }
                }
              },
              {
                type: 'inlineCode',
                value: '.push',
                position: {
                  start: { line: 49, column: 93, offset: 2248 },
                  end: { line: 49, column: 100, offset: 2255 }
                }
              },
              {
                type: 'text',
                value: ') the items of each execution into a new array.',
                position: {
                  start: { line: 49, column: 100, offset: 2255 },
                  end: { line: 49, column: 147, offset: 2302 }
                }
              }
            ],
            position: {
              start: { line: 49, column: 1, offset: 2156 },
              end: { line: 49, column: 147, offset: 2302 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const duplicate = value => [value, value]\n' +
              '\n' +
              'console.log(\n' +
              '  flatMap([1, 2, 3, 4, 5], duplicate)\n' +
              ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]',
            position: {
              start: { line: 51, column: 1, offset: 2304 },
              end: { line: 57, column: 4, offset: 2464 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For strings (type ',
                position: {
                  start: { line: 59, column: 1, offset: 2466 },
                  end: { line: 59, column: 19, offset: 2484 }
                }
              },
              {
                type: 'inlineCode',
                value: 'String',
                position: {
                  start: { line: 59, column: 19, offset: 2484 },
                  end: { line: 59, column: 27, offset: 2492 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 59, column: 27, offset: 2492 },
                  end: { line: 59, column: 30, offset: 2495 }
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 59, column: 30, offset: 2495 },
                  end: { line: 59, column: 39, offset: 2504 }
                }
              },
              {
                type: 'text',
                value: ' applies the flatMapper function to each character, adding (',
                position: {
                  start: { line: 59, column: 39, offset: 2504 },
                  end: { line: 59, column: 99, offset: 2564 }
                }
              },
              {
                type: 'inlineCode',
                value: '+',
                position: {
                  start: { line: 59, column: 99, offset: 2564 },
                  end: { line: 59, column: 102, offset: 2567 }
                }
              },
              {
                type: 'text',
                value: ') the items of each execution into a new string',
                position: {
                  start: { line: 59, column: 102, offset: 2567 },
                  end: { line: 59, column: 149, offset: 2614 }
                }
              }
            ],
            position: {
              start: { line: 59, column: 1, offset: 2466 },
              end: { line: 59, column: 149, offset: 2614 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const duplicate = value => [value, value]\n' +
              '\n' +
              'console.log(\n' +
              "  flatMap('12345', duplicate)\n" +
              ') // 1122334455',
            position: {
              start: { line: 61, column: 1, offset: 2616 },
              end: { line: 67, column: 4, offset: 2748 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For sets (type ',
                position: {
                  start: { line: 69, column: 1, offset: 2750 },
                  end: { line: 69, column: 16, offset: 2765 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Set',
                position: {
                  start: { line: 69, column: 16, offset: 2765 },
                  end: { line: 69, column: 21, offset: 2770 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 69, column: 21, offset: 2770 },
                  end: { line: 69, column: 24, offset: 2773 }
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 69, column: 24, offset: 2773 },
                  end: { line: 69, column: 33, offset: 2782 }
                }
              },
              {
                type: 'text',
                value: ' applies the flatMapper function to each item, adding (',
                position: {
                  start: { line: 69, column: 33, offset: 2782 },
                  end: { line: 69, column: 88, offset: 2837 }
                }
              },
              {
                type: 'inlineCode',
                value: '.add',
                position: {
                  start: { line: 69, column: 88, offset: 2837 },
                  end: { line: 69, column: 94, offset: 2843 }
                }
              },
              {
                type: 'text',
                value: ') the items of each execution into a new set',
                position: {
                  start: { line: 69, column: 94, offset: 2843 },
                  end: { line: 69, column: 138, offset: 2887 }
                }
              }
            ],
            position: {
              start: { line: 69, column: 1, offset: 2750 },
              end: { line: 69, column: 138, offset: 2887 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const pairPlus100 = value => [value, value + 100]\n' +
              '\n' +
              'console.log(\n' +
              '  flatMap(new Set([1, 2, 3, 4, 5]), pairPlus100)\n' +
              ') // Set(10) { 1, 101, 2, 102, 3, 103, 4, 104, 5, 105 }',
            position: {
              start: { line: 71, column: 1, offset: 2889 },
              end: { line: 77, column: 4, offset: 3088 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 77, column: 4, offset: 3088 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      transducing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      archive: {
        type: 'root',
        children: [
          {
            type: 'list',
            ordered: false,
            start: null,
            spread: true,
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
                        value: 'For typed arrays (type ',
                        position: {
                          start: { line: 1, column: 3, offset: 2 },
                          end: { line: 1, column: 26, offset: 25 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'TypedArray',
                            position: {
                              start: { line: 1, column: 27, offset: 26 },
                              end: { line: 1, column: 39, offset: 38 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 1, column: 26, offset: 25 },
                          end: { line: 1, column: 152, offset: 151 }
                        }
                      },
                      {
                        type: 'text',
                        value: ') and Node.js buffers (type ',
                        position: {
                          start: { line: 1, column: 152, offset: 151 },
                          end: { line: 1, column: 180, offset: 179 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: 'https://nodejs.org/api/buffer.html',
                        children: [
                          {
                            type: 'inlineCode',
                            value: 'Buffer',
                            position: {
                              start: { line: 1, column: 181, offset: 180 },
                              end: { line: 1, column: 189, offset: 188 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 1, column: 180, offset: 179 },
                          end: { line: 1, column: 226, offset: 225 }
                        }
                      },
                      {
                        type: 'text',
                        value: '), ',
                        position: {
                          start: { line: 1, column: 226, offset: 225 },
                          end: { line: 1, column: 229, offset: 228 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'flatMap',
                        position: {
                          start: { line: 1, column: 229, offset: 228 },
                          end: { line: 1, column: 238, offset: 237 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' applies a flatMapper function to each value of the typed array/buffer, joining the result of each execution with ',
                        position: {
                          start: { line: 1, column: 238, offset: 237 },
                          end: { line: 1, column: 352, offset: 351 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.set',
                        position: {
                          start: { line: 1, column: 352, offset: 351 },
                          end: { line: 1, column: 358, offset: 357 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' into the resulting typed array',
                        position: {
                          start: { line: 1, column: 358, offset: 357 },
                          end: { line: 1, column: 389, offset: 388 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 1, column: 3, offset: 2 },
                      end: { line: 1, column: 389, offset: 388 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 389, offset: 388 }
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
                        value: 'For Node.js duplex streams (type ',
                        position: {
                          start: { line: 3, column: 4, offset: 393 },
                          end: { line: 3, column: 37, offset: 426 }
                        }
                      },
                      {
                        type: 'link',
                        title: null,
                        url: 'https://nodejs.org/api/stream.html#class-streamduplex',
                        children: [
                          {
                            type: 'text',
                            value: 'Stream',
                            position: {
                              start: { line: 3, column: 38, offset: 427 },
                              end: { line: 3, column: 44, offset: 433 }
                            }
                          }
                        ],
                        position: {
                          start: { line: 3, column: 37, offset: 426 },
                          end: { line: 3, column: 100, offset: 489 }
                        }
                      },
                      {
                        type: 'text',
                        value: '), ',
                        position: {
                          start: { line: 3, column: 100, offset: 489 },
                          end: { line: 3, column: 103, offset: 492 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'flatMap',
                        position: {
                          start: { line: 3, column: 103, offset: 492 },
                          end: { line: 3, column: 112, offset: 501 }
                        }
                      },
                      {
                        type: 'text',
                        value: ' applies a flatMapper function to each item of the stream, writing (',
                        position: {
                          start: { line: 3, column: 112, offset: 501 },
                          end: { line: 3, column: 180, offset: 569 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.write',
                        position: {
                          start: { line: 3, column: 180, offset: 569 },
                          end: { line: 3, column: 188, offset: 577 }
                        }
                      },
                      {
                        type: 'text',
                        value: ') each item of each execution into the duplex stream',
                        position: {
                          start: { line: 3, column: 188, offset: 577 },
                          end: { line: 3, column: 240, offset: 629 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 393 },
                      end: { line: 3, column: 240, offset: 629 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 391 },
                  end: { line: 3, column: 240, offset: 629 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 240, offset: 629 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 240, offset: 629 }
        }
      }
    }
  },
  {
    name: 'forEach',
    synopsis: '```coffeescript [specscript]\n' +
      'type Collection = Array|Iterable|AsyncIterable|{ forEach: function }|Object\n' +
      '\n' +
      'forEach(collection Collection, callback function) -> collection Collection\n' +
      '\n' +
      'forEach(callback function)(collection Collection) -> collection Collection\n' +
      '```',
    description: 'Execute a callback for each item of a collection, returning a Promise if the execution is asynchronous.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'forEach([1, 2, 3, 4, 5l], console.log) // 1 2 3 4 5\n' +
      '\n' +
      'forEach({ a: 1, b: 2, c: 3 }, console.log) // 1 2 3\n' +
      '```\n' +
      '\n' +
      'Omit the data argument for a composable API\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([1, 2, 3, 4, 5], [\n' +
      '  filter(number => number % 2 == 1),\n' +
      '  map(number => number ** 2),\n' +
      '  forEach(console.log), // 1\n' +
      '                        // 9\n' +
      '                        // 25\n' +
      '])\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'forEach',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Collection = Array|Iterable|AsyncIterable|{ forEach: function }|Object\n' +
              '\n' +
              'forEach(collection Collection, callback function) -> collection Collection\n' +
              '\n' +
              'forEach(callback function)(collection Collection) -> collection Collection',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 260 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 260 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a callback for each item of a collection, returning a Promise if the execution is asynchronous.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 104, offset: 103 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 104, offset: 103 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'forEach([1, 2, 3, 4, 5l], console.log) // 1 2 3 4 5\n' +
              '\n' +
              'forEach({ a: 1, b: 2, c: 3 }, console.log) // 1 2 3',
            position: {
              start: { line: 3, column: 1, offset: 105 },
              end: { line: 7, column: 4, offset: 240 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Omit the data argument for a composable API',
                position: {
                  start: { line: 9, column: 1, offset: 242 },
                  end: { line: 9, column: 44, offset: 285 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 242 },
              end: { line: 9, column: 44, offset: 285 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe([1, 2, 3, 4, 5], [\n' +
              '  filter(number => number % 2 == 1),\n' +
              '  map(number => number ** 2),\n' +
              '  forEach(console.log), // 1\n' +
              '                        // 9\n' +
              '                        // 25\n' +
              '])',
            position: {
              start: { line: 11, column: 1, offset: 287 },
              end: { line: 19, column: 4, offset: 499 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 499 }
        }
      }
    }
  },
  {
    name: 'get',
    synopsis: '```coffeescript [specscript]\n' +
      'get(\n' +
      '  path string|number|Array<string|number>,\n' +
      '  defaultValue? function|any\n' +
      ')(object Object) -> result Promise|Object\n' +
      '```',
    description: 'Accesses a property of an object given a path denoted by a string, number, or an array of string or numbers.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const getHello = get('hello')\n" +
      '\n' +
      "console.log(getHello({ hello: 'world' })) // world\n" +
      '```\n' +
      '\n' +
      'If the value at the end of the path is not found on the object, returns an optional default value. The default value can be a function resolver that takes the object as an argument. If no default value is provided, returns `undefined`. The function resolver may be asynchronous (returns a promise).\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const getHelloWithDefaultValue = get('hello', 'default')\n" +
      '\n' +
      "console.log(getHelloWithDefaultValue({ foo: 'bar' })) // default\n" +
      '\n' +
      "const getHelloWithDefaultResolver = get('hello', object => object.foo)\n" +
      '\n' +
      "console.log(getHelloWithDefaultResolver({ foo: 'bar' })) // bar\n" +
      '```\n' +
      '\n' +
      '`get` supports three types of path patterns for nested property access.\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      "const getABC0 = get('a.b.c[0]')\n" +
      '\n' +
      "console.log(getABC0({ a: { b: { c: ['hello'] } } })) // hello\n" +
      '\n' +
      "const get00000DotNotation = get('0.0.0.0.0')\n" +
      "const get00000BracketNotation = get('[0][0][0][0][0]')\n" +
      'const get00000ArrayNotation = get([0, 0, 0, 0, 0])\n' +
      '\n' +
      "console.log(get00000DotNotation([[[[['foo']]]]])) // foo\n" +
      "console.log(get00000BracketNotation([[[[['foo']]]]])) // foo\n" +
      "console.log(get00000ArrayNotation([[[[['foo']]]]])) // foo\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'get',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'get(\n' +
              '  path string|number|Array<string|number>,\n' +
              '  defaultValue? function|any\n' +
              ')(object Object) -> result Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 151 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 151 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Accesses a property of an object given a path denoted by a string, number, or an array of string or numbers.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 109, offset: 108 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 109, offset: 108 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const getHello = get('hello')\n" +
              '\n' +
              "console.log(getHello({ hello: 'world' })) // world",
            position: {
              start: { line: 3, column: 1, offset: 110 },
              end: { line: 7, column: 4, offset: 222 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If the value at the end of the path is not found on the object, returns an optional default value. The default value can be a function resolver that takes the object as an argument. If no default value is provided, returns ',
                position: {
                  start: { line: 9, column: 1, offset: 224 },
                  end: { line: 9, column: 224, offset: 447 }
                }
              },
              {
                type: 'inlineCode',
                value: 'undefined',
                position: {
                  start: { line: 9, column: 224, offset: 447 },
                  end: { line: 9, column: 235, offset: 458 }
                }
              },
              {
                type: 'text',
                value: '. The function resolver may be asynchronous (returns a promise).',
                position: {
                  start: { line: 9, column: 235, offset: 458 },
                  end: { line: 9, column: 299, offset: 522 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 224 },
              end: { line: 9, column: 299, offset: 522 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const getHelloWithDefaultValue = get('hello', 'default')\n" +
              '\n' +
              "console.log(getHelloWithDefaultValue({ foo: 'bar' })) // default\n" +
              '\n' +
              "const getHelloWithDefaultResolver = get('hello', object => object.foo)\n" +
              '\n' +
              "console.log(getHelloWithDefaultResolver({ foo: 'bar' })) // bar",
            position: {
              start: { line: 11, column: 1, offset: 524 },
              end: { line: 19, column: 4, offset: 814 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'get',
                position: {
                  start: { line: 21, column: 1, offset: 816 },
                  end: { line: 21, column: 6, offset: 821 }
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access.',
                position: {
                  start: { line: 21, column: 6, offset: 821 },
                  end: { line: 21, column: 72, offset: 887 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 816 },
              end: { line: 21, column: 72, offset: 887 }
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
                        value: 'dot delimited - ',
                        position: {
                          start: { line: 23, column: 4, offset: 892 },
                          end: { line: 23, column: 20, offset: 908 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 23, column: 20, offset: 908 },
                          end: { line: 23, column: 29, offset: 917 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 23, column: 4, offset: 892 },
                      end: { line: 23, column: 29, offset: 917 }
                    }
                  }
                ],
                position: {
                  start: { line: 23, column: 2, offset: 890 },
                  end: { line: 23, column: 29, offset: 917 }
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
                        value: 'bracket notation - ',
                        position: {
                          start: { line: 24, column: 4, offset: 921 },
                          end: { line: 24, column: 23, offset: 940 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 24, column: 23, offset: 940 },
                          end: { line: 24, column: 37, offset: 954 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 4, offset: 921 },
                      end: { line: 24, column: 37, offset: 954 }
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 2, offset: 919 },
                  end: { line: 24, column: 37, offset: 954 }
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
                        value: 'an array of keys or indices - ',
                        position: {
                          start: { line: 25, column: 4, offset: 958 },
                          end: { line: 25, column: 34, offset: 988 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 25, column: 34, offset: 988 },
                          end: { line: 25, column: 53, offset: 1007 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 25, column: 4, offset: 958 },
                      end: { line: 25, column: 53, offset: 1007 }
                    }
                  }
                ],
                position: {
                  start: { line: 25, column: 2, offset: 956 },
                  end: { line: 25, column: 53, offset: 1007 }
                }
              }
            ],
            position: {
              start: { line: 23, column: 2, offset: 890 },
              end: { line: 25, column: 53, offset: 1007 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const getABC0 = get('a.b.c[0]')\n" +
              '\n' +
              "console.log(getABC0({ a: { b: { c: ['hello'] } } })) // hello\n" +
              '\n' +
              "const get00000DotNotation = get('0.0.0.0.0')\n" +
              "const get00000BracketNotation = get('[0][0][0][0][0]')\n" +
              'const get00000ArrayNotation = get([0, 0, 0, 0, 0])\n' +
              '\n' +
              "console.log(get00000DotNotation([[[[['foo']]]]])) // foo\n" +
              "console.log(get00000BracketNotation([[[[['foo']]]]])) // foo\n" +
              "console.log(get00000ArrayNotation([[[[['foo']]]]])) // foo",
            position: {
              start: { line: 27, column: 1, offset: 1009 },
              end: { line: 39, column: 4, offset: 1464 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 39, column: 4, offset: 1464 }
        }
      }
    }
  },
  {
    name: 'gt',
    synopsis: '```coffeescript [specscript]\n' +
      'gt(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
      '\n' +
      'gt(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
      'gt(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
      '\n' +
      'gt(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
      'gt(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
      '\n' +
      'gt(left function, right function)(...args) -> Promise|boolean\n' +
      'gt(...args, left function, right function) -> Promise|boolean\n' +
      '```',
    description: 'Test if a value is greater than (`>`) another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const age = 40\n' +
      '\n' +
      'const isAgeGreaterThan21 = gt(age, 21)\n' +
      '\n' +
      'console.log(isAgeGreaterThan21) // true\n' +
      '```\n' +
      '\n' +
      'If either of the two values are resolver functions, `gt` returns a function that resolves the values to compare from its arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const isOfLegalAge = gt(21, get('age'))\n" +
      '\n' +
      'const juvenile = { age: 16 }\n' +
      '\n' +
      'console.log(isOfLegalAge(juvenile)) // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'gt',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'gt(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
              '\n' +
              'gt(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
              'gt(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
              '\n' +
              'gt(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
              'gt(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
              '\n' +
              'gt(left function, right function)(...args) -> Promise|boolean\n' +
              'gt(...args, left function, right function) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 500 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 500 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a value is greater than (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              },
              {
                type: 'inlineCode',
                value: '>',
                position: {
                  start: { line: 1, column: 34, offset: 33 },
                  end: { line: 1, column: 37, offset: 36 }
                }
              },
              {
                type: 'text',
                value: ') another value.',
                position: {
                  start: { line: 1, column: 37, offset: 36 },
                  end: { line: 1, column: 53, offset: 52 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 53, offset: 52 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const age = 40\n' +
              '\n' +
              'const isAgeGreaterThan21 = gt(age, 21)\n' +
              '\n' +
              'console.log(isAgeGreaterThan21) // true',
            position: {
              start: { line: 3, column: 1, offset: 54 },
              end: { line: 9, column: 4, offset: 180 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If either of the two values are resolver functions, ',
                position: {
                  start: { line: 11, column: 1, offset: 182 },
                  end: { line: 11, column: 53, offset: 234 }
                }
              },
              {
                type: 'inlineCode',
                value: 'gt',
                position: {
                  start: { line: 11, column: 53, offset: 234 },
                  end: { line: 11, column: 57, offset: 238 }
                }
              },
              {
                type: 'text',
                value: ' returns a function that resolves the values to compare from its arguments.',
                position: {
                  start: { line: 11, column: 57, offset: 238 },
                  end: { line: 11, column: 132, offset: 313 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 182 },
              end: { line: 11, column: 132, offset: 313 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const isOfLegalAge = gt(21, get('age'))\n" +
              '\n' +
              'const juvenile = { age: 16 }\n' +
              '\n' +
              'console.log(isOfLegalAge(juvenile)) // false',
            position: {
              start: { line: 13, column: 1, offset: 315 },
              end: { line: 19, column: 4, offset: 461 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 461 }
        }
      }
    }
  },
  {
    name: 'gte',
    synopsis: '```coffeescript [specscript]\n' +
      'gte(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
      '\n' +
      'gte(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
      'gte(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
      '\n' +
      'gte(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
      'gte(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
      '\n' +
      'gte(left function, right function)(...args) -> Promise|boolean\n' +
      'gte(...args, left function, right function) -> Promise|boolean\n' +
      '```',
    description: 'Test if a value is greater than or equal (`>=`) to another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const age = 20\n' +
      '\n' +
      'const isAdultAge = gte(age, 18)\n' +
      '\n' +
      'console.log(isAdultAge) // true\n' +
      '```\n' +
      '\n' +
      'If either of the two values are resolver functions, `gte` returns a function that resolves the values to compare from its arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isAtLeast100 = gte(identity, 100)\n' +
      '\n' +
      'console.log(isAtLeast100(99)) // false\n' +
      'console.log(isAtLeast100(100)) // true\n' +
      'console.log(isAtLeast100(101)) // true\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'gte',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'gte(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
              '\n' +
              'gte(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
              'gte(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
              '\n' +
              'gte(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
              'gte(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
              '\n' +
              'gte(left function, right function)(...args) -> Promise|boolean\n' +
              'gte(...args, left function, right function) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 507 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 507 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a value is greater than or equal (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              },
              {
                type: 'inlineCode',
                value: '>=',
                position: {
                  start: { line: 1, column: 43, offset: 42 },
                  end: { line: 1, column: 47, offset: 46 }
                }
              },
              {
                type: 'text',
                value: ') to another value.',
                position: {
                  start: { line: 1, column: 47, offset: 46 },
                  end: { line: 1, column: 66, offset: 65 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 66, offset: 65 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const age = 20\n' +
              '\n' +
              'const isAdultAge = gte(age, 18)\n' +
              '\n' +
              'console.log(isAdultAge) // true',
            position: {
              start: { line: 3, column: 1, offset: 67 },
              end: { line: 9, column: 4, offset: 178 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If either of the two values are resolver functions, ',
                position: {
                  start: { line: 11, column: 1, offset: 180 },
                  end: { line: 11, column: 53, offset: 232 }
                }
              },
              {
                type: 'inlineCode',
                value: 'gte',
                position: {
                  start: { line: 11, column: 53, offset: 232 },
                  end: { line: 11, column: 58, offset: 237 }
                }
              },
              {
                type: 'text',
                value: ' returns a function that resolves the values to compare from its arguments.',
                position: {
                  start: { line: 11, column: 58, offset: 237 },
                  end: { line: 11, column: 133, offset: 312 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 180 },
              end: { line: 11, column: 133, offset: 312 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'const isAtLeast100 = gte(identity, 100)\n' +
              '\n' +
              'console.log(isAtLeast100(99)) // false\n' +
              'console.log(isAtLeast100(100)) // true\n' +
              'console.log(isAtLeast100(101)) // true',
            position: {
              start: { line: 13, column: 1, offset: 314 },
              end: { line: 21, column: 4, offset: 535 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 21, column: 4, offset: 535 }
        }
      }
    }
  },
  {
    name: 'lt',
    synopsis: '```coffeescript [specscript]\n' +
      'lt(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
      '\n' +
      'lt(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
      'lt(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
      '\n' +
      'lt(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
      'lt(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
      '\n' +
      'lt(left function, right function)(...args) -> Promise|boolean\n' +
      'lt(...args, left function, right function) -> Promise|boolean\n' +
      '```',
    description: 'Test if a value is less than (`<`) another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(lt(1, 3)) // true\n' +
      'console.log(lt(3, 3)) // false\n' +
      'console.log(lt(4, 3)) // false\n' +
      '```\n' +
      '\n' +
      'If either of the two values are resolver functions, `lt` returns a function that resolves the values to compare from its arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThan3 = lt(identity, 3)\n' +
      '\n' +
      'console.log(isLessThan3(1)) // true\n' +
      'console.log(isLessThan3(3)) // false\n' +
      'console.log(isLessThan3(5)) // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'lt',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'lt(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
              '\n' +
              'lt(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
              'lt(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
              '\n' +
              'lt(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
              'lt(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
              '\n' +
              'lt(left function, right function)(...args) -> Promise|boolean\n' +
              'lt(...args, left function, right function) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 500 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 500 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a value is less than (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              },
              {
                type: 'inlineCode',
                value: '<',
                position: {
                  start: { line: 1, column: 31, offset: 30 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              },
              {
                type: 'text',
                value: ') another value.',
                position: {
                  start: { line: 1, column: 34, offset: 33 },
                  end: { line: 1, column: 50, offset: 49 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 50, offset: 49 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(lt(1, 3)) // true\n' +
              'console.log(lt(3, 3)) // false\n' +
              'console.log(lt(4, 3)) // false',
            position: {
              start: { line: 3, column: 1, offset: 51 },
              end: { line: 7, column: 4, offset: 173 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If either of the two values are resolver functions, ',
                position: {
                  start: { line: 9, column: 1, offset: 175 },
                  end: { line: 9, column: 53, offset: 227 }
                }
              },
              {
                type: 'inlineCode',
                value: 'lt',
                position: {
                  start: { line: 9, column: 53, offset: 227 },
                  end: { line: 9, column: 57, offset: 231 }
                }
              },
              {
                type: 'text',
                value: ' returns a function that resolves the values to compare from its arguments.',
                position: {
                  start: { line: 9, column: 57, offset: 231 },
                  end: { line: 9, column: 132, offset: 306 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 175 },
              end: { line: 9, column: 132, offset: 306 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'const isLessThan3 = lt(identity, 3)\n' +
              '\n' +
              'console.log(isLessThan3(1)) // true\n' +
              'console.log(isLessThan3(3)) // false\n' +
              'console.log(isLessThan3(5)) // false',
            position: {
              start: { line: 11, column: 1, offset: 308 },
              end: { line: 19, column: 4, offset: 518 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 518 }
        }
      }
    }
  },
  {
    name: 'lte',
    synopsis: '```coffeescript [specscript]\n' +
      'lte(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
      '\n' +
      'lte(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
      'lte(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
      '\n' +
      'lte(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
      'lte(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
      '\n' +
      'lte(left function, right function)(...args) -> Promise|boolean\n' +
      'lte(...args, left function, right function) -> Promise|boolean\n' +
      '```',
    description: 'Test if a value is less than or equal (`<=`) to another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(lte(1, 3)) // true\n' +
      'console.log(lte(3, 3)) // true\n' +
      'console.log(lte(4, 3)) // false\n' +
      '```\n' +
      '\n' +
      'If either of the two values are resolver functions, `lte` returns a function that resolves the values to compare from its arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThanOrEqualTo3 = lte(identity, 3)\n' +
      '\n' +
      'console.log(isLessThanOrEqualTo3(1), true)\n' +
      'console.log(isLessThanOrEqualTo3(3), true)\n' +
      'console.log(isLessThanOrEqualTo3(5), false)\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'lte',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'lte(leftValue Promise|any, rightValue Promise|any) -> boolean\n' +
              '\n' +
              'lte(leftValue Promise|any, right function)(...args) -> Promise|boolean\n' +
              'lte(...args, leftValue Promise|any, right function) -> Promise|boolean\n' +
              '\n' +
              'lte(left function, rightValue Promise|any)(...args) -> Promise|boolean\n' +
              'lte(...args, left function, rightValue Promise|any) -> Promise|boolean\n' +
              '\n' +
              'lte(left function, right function)(...args) -> Promise|boolean\n' +
              'lte(...args, left function, right function) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 507 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 507 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a value is less than or equal (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 40, offset: 39 }
                }
              },
              {
                type: 'inlineCode',
                value: '<=',
                position: {
                  start: { line: 1, column: 40, offset: 39 },
                  end: { line: 1, column: 44, offset: 43 }
                }
              },
              {
                type: 'text',
                value: ') to another value.',
                position: {
                  start: { line: 1, column: 44, offset: 43 },
                  end: { line: 1, column: 63, offset: 62 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 63, offset: 62 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(lte(1, 3)) // true\n' +
              'console.log(lte(3, 3)) // true\n' +
              'console.log(lte(4, 3)) // false',
            position: {
              start: { line: 3, column: 1, offset: 64 },
              end: { line: 7, column: 4, offset: 188 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If either of the two values are resolver functions, ',
                position: {
                  start: { line: 9, column: 1, offset: 190 },
                  end: { line: 9, column: 53, offset: 242 }
                }
              },
              {
                type: 'inlineCode',
                value: 'lte',
                position: {
                  start: { line: 9, column: 53, offset: 242 },
                  end: { line: 9, column: 58, offset: 247 }
                }
              },
              {
                type: 'text',
                value: ' returns a function that resolves the values to compare from its arguments.',
                position: {
                  start: { line: 9, column: 58, offset: 247 },
                  end: { line: 9, column: 133, offset: 322 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 190 },
              end: { line: 9, column: 133, offset: 322 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'const isLessThanOrEqualTo3 = lte(identity, 3)\n' +
              '\n' +
              'console.log(isLessThanOrEqualTo3(1), true)\n' +
              'console.log(isLessThanOrEqualTo3(3), true)\n' +
              'console.log(isLessThanOrEqualTo3(5), false)',
            position: {
              start: { line: 11, column: 1, offset: 324 },
              end: { line: 19, column: 4, offset: 564 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 564 }
        }
      }
    }
  },
  {
    name: 'map',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapperFunc (value any, index number, array Array)=>Promise|any\n' +
      '\n' +
      'map(arrayMapperFunc)(value Array) -> result Promise|Array\n' +
      'map(value Array, arrayMapperFunc) -> result Promise|Array\n' +
      '\n' +
      'objectMapperFunc (value any, key string, object Object)=>Promise|any\n' +
      '\n' +
      'map(objectMapperFunc)(value Object) -> result Promise|Array\n' +
      'map(value Object, objectMapperFunc) -> result Promise|Array\n' +
      '\n' +
      'setMapperFunc (value any, value, set Set)=>Promise|any\n' +
      '\n' +
      'map(setMapperFunc)(value Set) -> result Promise|Set\n' +
      'map(value Set, setMapperFunc) -> result Promise|Set\n' +
      '\n' +
      'mapMapperFunc (value any, key any, originalMap Map)=>Promise|any\n' +
      '\n' +
      'map(mapMapperFunc)(value Map) -> result Promise|Map\n' +
      'map(value Map, mapMapperFunc) -> result Promise|Map\n' +
      '\n' +
      'iteratorMapperFunc (value any)=>any\n' +
      '\n' +
      'map(iteratorMapperFunc)(value Iterator|Generator) -> result Iterator\n' +
      'map(value Iterator|Generator, iteratorMapperFunc) -> result Iterator\n' +
      '\n' +
      'asyncIteratorMapperFunc (value any)=>Promise|any\n' +
      '\n' +
      'map(asyncIteratorMapperFunc)(value AsyncIterator|AsyncGenerator)\n' +
      '  -> result AsyncIterator\n' +
      'map(value AsyncIterator|AsyncGenerator, asyncIteratorMapperFunc)\n' +
      '  -> result AsyncIterator\n' +
      '```',
    description: 'Applies a synchronous or asynchronous mapper function concurrently to each item of a collection, returning the results in a new collection of the same type. If order is implied by the collection, it is maintained in the result. `map` accepts the following collections:\n' +
      '\n' +
      ' * `Array`\n' +
      ' * `Object`\n' +
      ' * `Set`\n' +
      ' * `Map`\n' +
      ' * `Iterator`/`Generator`\n' +
      ' * `AsyncIterator`/`AsyncGenerator`\n' +
      '\n' +
      'With arrays (type `Array`), `map` applies the mapper function to each item of the array, returning the transformed results in a new array ordered the same as the original array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const array = [1, 2, 3, 4, 5]\n' +
      '\n' +
      'console.log(\n' +
      '  map(array, square)\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)(array)\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '```\n' +
      '\n' +
      'With objects (type `Object`), `map` applies the mapper function to each value of the object, returning the transformed results as values in a new object ordered by the keys of the original object\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)(obj)\n' +
      ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
      '\n' +
      'console.log(\n' +
      '  map(obj, square)\n' +
      ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
      '```\n' +
      '\n' +
      'With sets (type `Set`), `map` applies the mapper function to each value of the set, returning the transformed results unordered in a new set.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const set = new Set([1, 2, 3, 4, 5])\n' +
      '\n' +
      'console.log(\n' +
      '  map(set, square)\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)(set)\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '```\n' +
      '\n' +
      'With maps (type `Map`), `map` applies the mapper function to each value of the map, returning the results at the same keys in a new map. The entries of the resulting map are in the same order as those of the original map\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
      '\n' +
      'console.log(\n' +
      '  map(square)(m)\n' +
      ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }\n" +
      '\n' +
      'console.log(\n' +
      '  map(m, square)\n' +
      ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }\n" +
      '```\n' +
      '\n' +
      'With iterators (type `Iterator`) or generators (type `Generator`), `map` applies the mapper function lazily to each value of the iterator/generator, creating a new iterator with transformed iterations.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const capitalize = string => string.toUpperCase()\n' +
      '\n' +
      'const abcGeneratorFunc = function* () {\n' +
      "  yield 'a'; yield 'b'; yield 'c'\n" +
      '}\n' +
      '\n' +
      'const abcGenerator = abcGeneratorFunc()\n' +
      'const ABCGenerator = map(abcGeneratorFunc(), capitalize)\n' +
      'const ABCGenerator2 = map(capitalize)(abcGeneratorFunc())\n' +
      '\n' +
      "console.log([...abcGenerator]) // ['a', 'b', 'c']\n" +
      '\n' +
      "console.log([...ABCGenerator]) // ['A', 'B', 'C']\n" +
      '\n' +
      "console.log([...ABCGenerator2]) // ['A', 'B', 'C']\n" +
      '```\n' +
      '\n' +
      'With asyncIterators (type `AsyncIterator`, or `AsyncGenerator`), `map` applies the mapper function lazily to each value of the asyncIterator, creating a new asyncIterator with transformed iterations\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const capitalize = string => string.toUpperCase()\n' +
      '\n' +
      'const abcAsyncGeneratorFunc = async function* () {\n' +
      "  yield 'a'; yield 'b'; yield 'c'\n" +
      '}\n' +
      '\n' +
      'const abcAsyncGenerator = abcAsyncGeneratorFunc()\n' +
      'const ABCGenerator = map(abcAsyncGeneratorFunc(), capitalize)\n' +
      'const ABCGenerator2 = map(capitalize)(abcAsyncGeneratorFunc())\n' +
      '\n' +
      ';(async function () {\n' +
      '  for await (const letter of abcAsyncGenerator) {\n' +
      '    console.log(letter)\n' +
      '    // a\n' +
      '    // b\n' +
      '    // c\n' +
      '  }\n' +
      '\n' +
      '  for await (const letter of ABCGenerator) {\n' +
      '    console.log(letter)\n' +
      '    // A\n' +
      '    // B\n' +
      '    // C\n' +
      '  }\n' +
      '\n' +
      '  for await (const letter of ABCGenerator2) {\n' +
      '    console.log(letter)\n' +
      '    // A\n' +
      '    // B\n' +
      '    // C\n' +
      '  }\n' +
      '})()\n' +
      '```',
    execution: 'concurrent',
    TODO: 'streamMap',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'map',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'arrayMapperFunc (value any, index number, array Array)=>Promise|any\n' +
              '\n' +
              'map(arrayMapperFunc)(value Array) -> result Promise|Array\n' +
              'map(value Array, arrayMapperFunc) -> result Promise|Array\n' +
              '\n' +
              'objectMapperFunc (value any, key string, object Object)=>Promise|any\n' +
              '\n' +
              'map(objectMapperFunc)(value Object) -> result Promise|Array\n' +
              'map(value Object, objectMapperFunc) -> result Promise|Array\n' +
              '\n' +
              'setMapperFunc (value any, value, set Set)=>Promise|any\n' +
              '\n' +
              'map(setMapperFunc)(value Set) -> result Promise|Set\n' +
              'map(value Set, setMapperFunc) -> result Promise|Set\n' +
              '\n' +
              'mapMapperFunc (value any, key any, originalMap Map)=>Promise|any\n' +
              '\n' +
              'map(mapMapperFunc)(value Map) -> result Promise|Map\n' +
              'map(value Map, mapMapperFunc) -> result Promise|Map\n' +
              '\n' +
              'iteratorMapperFunc (value any)=>any\n' +
              '\n' +
              'map(iteratorMapperFunc)(value Iterator|Generator) -> result Iterator\n' +
              'map(value Iterator|Generator, iteratorMapperFunc) -> result Iterator\n' +
              '\n' +
              'asyncIteratorMapperFunc (value any)=>Promise|any\n' +
              '\n' +
              'map(asyncIteratorMapperFunc)(value AsyncIterator|AsyncGenerator)\n' +
              '  -> result AsyncIterator\n' +
              'map(value AsyncIterator|AsyncGenerator, asyncIteratorMapperFunc)\n' +
              '  -> result AsyncIterator',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 33, column: 4, offset: 1149 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 33, column: 4, offset: 1149 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Applies a synchronous or asynchronous mapper function concurrently to each item of a collection, returning the results in a new collection of the same type. If order is implied by the collection, it is maintained in the result. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 229, offset: 228 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 1, column: 229, offset: 228 },
                  end: { line: 1, column: 234, offset: 233 }
                }
              },
              {
                type: 'text',
                value: ' accepts the following collections:',
                position: {
                  start: { line: 1, column: 234, offset: 233 },
                  end: { line: 1, column: 269, offset: 268 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 269, offset: 268 }
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
                        type: 'inlineCode',
                        value: 'Array',
                        position: {
                          start: { line: 3, column: 4, offset: 273 },
                          end: { line: 3, column: 11, offset: 280 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 273 },
                      end: { line: 3, column: 11, offset: 280 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 271 },
                  end: { line: 3, column: 11, offset: 280 }
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
                        type: 'inlineCode',
                        value: 'Object',
                        position: {
                          start: { line: 4, column: 4, offset: 284 },
                          end: { line: 4, column: 12, offset: 292 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 284 },
                      end: { line: 4, column: 12, offset: 292 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 2, offset: 282 },
                  end: { line: 4, column: 12, offset: 292 }
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
                        type: 'inlineCode',
                        value: 'Set',
                        position: {
                          start: { line: 5, column: 4, offset: 296 },
                          end: { line: 5, column: 9, offset: 301 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 296 },
                      end: { line: 5, column: 9, offset: 301 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 294 },
                  end: { line: 5, column: 9, offset: 301 }
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
                        type: 'inlineCode',
                        value: 'Map',
                        position: {
                          start: { line: 6, column: 4, offset: 305 },
                          end: { line: 6, column: 9, offset: 310 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 305 },
                      end: { line: 6, column: 9, offset: 310 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 303 },
                  end: { line: 6, column: 9, offset: 310 }
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
                        type: 'inlineCode',
                        value: 'Iterator',
                        position: {
                          start: { line: 7, column: 4, offset: 314 },
                          end: { line: 7, column: 14, offset: 324 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 7, column: 14, offset: 324 },
                          end: { line: 7, column: 15, offset: 325 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Generator',
                        position: {
                          start: { line: 7, column: 15, offset: 325 },
                          end: { line: 7, column: 26, offset: 336 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 314 },
                      end: { line: 7, column: 26, offset: 336 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 312 },
                  end: { line: 7, column: 26, offset: 336 }
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
                        type: 'inlineCode',
                        value: 'AsyncIterator',
                        position: {
                          start: { line: 8, column: 4, offset: 340 },
                          end: { line: 8, column: 19, offset: 355 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 8, column: 19, offset: 355 },
                          end: { line: 8, column: 20, offset: 356 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'AsyncGenerator',
                        position: {
                          start: { line: 8, column: 20, offset: 356 },
                          end: { line: 8, column: 36, offset: 372 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 340 },
                      end: { line: 8, column: 36, offset: 372 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 2, offset: 338 },
                  end: { line: 8, column: 36, offset: 372 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 2, offset: 271 },
              end: { line: 8, column: 36, offset: 372 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With arrays (type ',
                position: {
                  start: { line: 10, column: 1, offset: 374 },
                  end: { line: 10, column: 19, offset: 392 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Array',
                position: {
                  start: { line: 10, column: 19, offset: 392 },
                  end: { line: 10, column: 26, offset: 399 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 10, column: 26, offset: 399 },
                  end: { line: 10, column: 29, offset: 402 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 10, column: 29, offset: 402 },
                  end: { line: 10, column: 34, offset: 407 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function to each item of the array, returning the transformed results in a new array ordered the same as the original array.',
                position: {
                  start: { line: 10, column: 34, offset: 407 },
                  end: { line: 10, column: 178, offset: 551 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 374 },
              end: { line: 10, column: 178, offset: 551 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const array = [1, 2, 3, 4, 5]\n' +
              '\n' +
              'console.log(\n' +
              '  map(array, square)\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'console.log(\n' +
              '  map(square)(array)\n' +
              ') // [1, 4, 9, 16, 25]',
            position: {
              start: { line: 12, column: 1, offset: 553 },
              end: { line: 24, column: 4, offset: 767 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With objects (type ',
                position: {
                  start: { line: 26, column: 1, offset: 769 },
                  end: { line: 26, column: 20, offset: 788 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 26, column: 20, offset: 788 },
                  end: { line: 26, column: 28, offset: 796 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 26, column: 28, offset: 796 },
                  end: { line: 26, column: 31, offset: 799 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 26, column: 31, offset: 799 },
                  end: { line: 26, column: 36, offset: 804 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function to each value of the object, returning the transformed results as values in a new object ordered by the keys of the original object',
                position: {
                  start: { line: 26, column: 36, offset: 804 },
                  end: { line: 26, column: 196, offset: 964 }
                }
              }
            ],
            position: {
              start: { line: 26, column: 1, offset: 769 },
              end: { line: 26, column: 196, offset: 964 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
              '\n' +
              'console.log(\n' +
              '  map(square)(obj)\n' +
              ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
              '\n' +
              'console.log(\n' +
              '  map(obj, square)\n' +
              ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }',
            position: {
              start: { line: 28, column: 1, offset: 966 },
              end: { line: 40, column: 4, offset: 1225 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With sets (type ',
                position: {
                  start: { line: 42, column: 1, offset: 1227 },
                  end: { line: 42, column: 17, offset: 1243 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Set',
                position: {
                  start: { line: 42, column: 17, offset: 1243 },
                  end: { line: 42, column: 22, offset: 1248 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 42, column: 22, offset: 1248 },
                  end: { line: 42, column: 25, offset: 1251 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 42, column: 25, offset: 1251 },
                  end: { line: 42, column: 30, offset: 1256 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function to each value of the set, returning the transformed results unordered in a new set.',
                position: {
                  start: { line: 42, column: 30, offset: 1256 },
                  end: { line: 42, column: 142, offset: 1368 }
                }
              }
            ],
            position: {
              start: { line: 42, column: 1, offset: 1227 },
              end: { line: 42, column: 142, offset: 1368 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const set = new Set([1, 2, 3, 4, 5])\n' +
              '\n' +
              'console.log(\n' +
              '  map(set, square)\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'console.log(\n' +
              '  map(square)(set)\n' +
              ') // [1, 4, 9, 16, 25]',
            position: {
              start: { line: 44, column: 1, offset: 1370 },
              end: { line: 56, column: 4, offset: 1587 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With maps (type ',
                position: {
                  start: { line: 58, column: 1, offset: 1589 },
                  end: { line: 58, column: 17, offset: 1605 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Map',
                position: {
                  start: { line: 58, column: 17, offset: 1605 },
                  end: { line: 58, column: 22, offset: 1610 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 58, column: 22, offset: 1610 },
                  end: { line: 58, column: 25, offset: 1613 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 58, column: 25, offset: 1613 },
                  end: { line: 58, column: 30, offset: 1618 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function to each value of the map, returning the results at the same keys in a new map. The entries of the resulting map are in the same order as those of the original map',
                position: {
                  start: { line: 58, column: 30, offset: 1618 },
                  end: { line: 58, column: 221, offset: 1809 }
                }
              }
            ],
            position: {
              start: { line: 58, column: 1, offset: 1589 },
              end: { line: 58, column: 221, offset: 1809 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
              '\n' +
              'console.log(\n' +
              '  map(square)(m)\n' +
              ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }\n" +
              '\n' +
              'console.log(\n' +
              '  map(m, square)\n' +
              ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }",
            position: {
              start: { line: 60, column: 1, offset: 1811 },
              end: { line: 72, column: 4, offset: 2139 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With iterators (type ',
                position: {
                  start: { line: 74, column: 1, offset: 2141 },
                  end: { line: 74, column: 22, offset: 2162 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Iterator',
                position: {
                  start: { line: 74, column: 22, offset: 2162 },
                  end: { line: 74, column: 32, offset: 2172 }
                }
              },
              {
                type: 'text',
                value: ') or generators (type ',
                position: {
                  start: { line: 74, column: 32, offset: 2172 },
                  end: { line: 74, column: 54, offset: 2194 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Generator',
                position: {
                  start: { line: 74, column: 54, offset: 2194 },
                  end: { line: 74, column: 65, offset: 2205 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 74, column: 65, offset: 2205 },
                  end: { line: 74, column: 68, offset: 2208 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 74, column: 68, offset: 2208 },
                  end: { line: 74, column: 73, offset: 2213 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function lazily to each value of the iterator/generator, creating a new iterator with transformed iterations.',
                position: {
                  start: { line: 74, column: 73, offset: 2213 },
                  end: { line: 74, column: 202, offset: 2342 }
                }
              }
            ],
            position: {
              start: { line: 74, column: 1, offset: 2141 },
              end: { line: 74, column: 202, offset: 2342 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const capitalize = string => string.toUpperCase()\n' +
              '\n' +
              'const abcGeneratorFunc = function* () {\n' +
              "  yield 'a'; yield 'b'; yield 'c'\n" +
              '}\n' +
              '\n' +
              'const abcGenerator = abcGeneratorFunc()\n' +
              'const ABCGenerator = map(abcGeneratorFunc(), capitalize)\n' +
              'const ABCGenerator2 = map(capitalize)(abcGeneratorFunc())\n' +
              '\n' +
              "console.log([...abcGenerator]) // ['a', 'b', 'c']\n" +
              '\n' +
              "console.log([...ABCGenerator]) // ['A', 'B', 'C']\n" +
              '\n' +
              "console.log([...ABCGenerator2]) // ['A', 'B', 'C']",
            position: {
              start: { line: 76, column: 1, offset: 2344 },
              end: { line: 92, column: 4, offset: 2811 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'With asyncIterators (type ',
                position: {
                  start: { line: 94, column: 1, offset: 2813 },
                  end: { line: 94, column: 27, offset: 2839 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncIterator',
                position: {
                  start: { line: 94, column: 27, offset: 2839 },
                  end: { line: 94, column: 42, offset: 2854 }
                }
              },
              {
                type: 'text',
                value: ', or ',
                position: {
                  start: { line: 94, column: 42, offset: 2854 },
                  end: { line: 94, column: 47, offset: 2859 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncGenerator',
                position: {
                  start: { line: 94, column: 47, offset: 2859 },
                  end: { line: 94, column: 63, offset: 2875 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 94, column: 63, offset: 2875 },
                  end: { line: 94, column: 66, offset: 2878 }
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 94, column: 66, offset: 2878 },
                  end: { line: 94, column: 71, offset: 2883 }
                }
              },
              {
                type: 'text',
                value: ' applies the mapper function lazily to each value of the asyncIterator, creating a new asyncIterator with transformed iterations',
                position: {
                  start: { line: 94, column: 71, offset: 2883 },
                  end: { line: 94, column: 199, offset: 3011 }
                }
              }
            ],
            position: {
              start: { line: 94, column: 1, offset: 2813 },
              end: { line: 94, column: 199, offset: 3011 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const capitalize = string => string.toUpperCase()\n' +
              '\n' +
              'const abcAsyncGeneratorFunc = async function* () {\n' +
              "  yield 'a'; yield 'b'; yield 'c'\n" +
              '}\n' +
              '\n' +
              'const abcAsyncGenerator = abcAsyncGeneratorFunc()\n' +
              'const ABCGenerator = map(abcAsyncGeneratorFunc(), capitalize)\n' +
              'const ABCGenerator2 = map(capitalize)(abcAsyncGeneratorFunc())\n' +
              '\n' +
              ';(async function () {\n' +
              '  for await (const letter of abcAsyncGenerator) {\n' +
              '    console.log(letter)\n' +
              '    // a\n' +
              '    // b\n' +
              '    // c\n' +
              '  }\n' +
              '\n' +
              '  for await (const letter of ABCGenerator) {\n' +
              '    console.log(letter)\n' +
              '    // A\n' +
              '    // B\n' +
              '    // C\n' +
              '  }\n' +
              '\n' +
              '  for await (const letter of ABCGenerator2) {\n' +
              '    console.log(letter)\n' +
              '    // A\n' +
              '    // B\n' +
              '    // C\n' +
              '  }\n' +
              '})()',
            position: {
              start: { line: 96, column: 1, offset: 3013 },
              end: { line: 129, column: 4, offset: 3693 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 129, column: 4, offset: 3693 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'streamMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      }
    }
  },
  {
    name: 'map.entries',
    synopsis: '```coffeescript [specscript]\n' +
      'map.entries(\n' +
      '  mapper ([key any, value any])=>Promise|[any, any],\n' +
      ')(value Map|Object) -> Promise|Map|Object\n' +
      '```',
    description: '`map` over the entries rather than the values of a collection. Accepts collections of type `Map` or `Object`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const upperCaseKeysAndSquareValues =\n' +
      '  map.entries(([key, value]) => [key.toUpperCase(), value ** 2])\n' +
      '\n' +
      'console.log(upperCaseKeysAndSquareValues({ a: 1, b: 2, c: 3 }))\n' +
      '// { A: 1, B: 4, C: 9 }\n' +
      '\n' +
      "console.log(upperCaseKeysAndSquareValues(new Map([['a', 1], ['b', 2], ['c', 3]])))\n" +
      "// Map(3) { 'A' => 1, 'B' => 4, 'C' => 9 }\n" +
      '```',
    since: 'v1.7.0',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'map.entries',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'map.entries(\n' +
              '  mapper ([key any, value any])=>Promise|[any, any],\n' +
              ')(value Map|Object) -> Promise|Map|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 140 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 140 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'text',
                value: ' over the entries rather than the values of a collection. Accepts collections of type ',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 92, offset: 91 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Map',
                position: {
                  start: { line: 1, column: 92, offset: 91 },
                  end: { line: 1, column: 97, offset: 96 }
                }
              },
              {
                type: 'text',
                value: ' or ',
                position: {
                  start: { line: 1, column: 97, offset: 96 },
                  end: { line: 1, column: 101, offset: 100 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 1, column: 101, offset: 100 },
                  end: { line: 1, column: 109, offset: 108 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 109, offset: 108 },
                  end: { line: 1, column: 110, offset: 109 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 110, offset: 109 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const upperCaseKeysAndSquareValues =\n' +
              '  map.entries(([key, value]) => [key.toUpperCase(), value ** 2])\n' +
              '\n' +
              'console.log(upperCaseKeysAndSquareValues({ a: 1, b: 2, c: 3 }))\n' +
              '// { A: 1, B: 4, C: 9 }\n' +
              '\n' +
              "console.log(upperCaseKeysAndSquareValues(new Map([['a', 1], ['b', 2], ['c', 3]])))\n" +
              "// Map(3) { 'A' => 1, 'B' => 4, 'C' => 9 }",
            position: {
              start: { line: 3, column: 1, offset: 111 },
              end: { line: 12, column: 4, offset: 459 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 459 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'v1.7.0',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'map.series',
    synopsis: '```coffeescript [specscript]\n' +
      'map.series(\n' +
      '  mapperFunc (value any)=>Promise|any,\n' +
      ')(array Array) -> Promise|Array\n' +
      '```',
    description: '`map` with serial execution.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const delayedLog = number => new Promise(function (resolve) {\n' +
      '  setTimeout(function () {\n' +
      '    console.log(number)\n' +
      '    resolve()\n' +
      '  }, 1000)\n' +
      '})\n' +
      '\n' +
      "console.log('start')\n" +
      'map.series(delayedLog)([1, 2, 3, 4, 5])\n' +
      '```',
    execution: 'series',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'map.series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'map.series(\n' +
              '  mapperFunc (value any)=>Promise|any,\n' +
              ')(array Array) -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 115 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 115 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'text',
                value: ' with serial execution.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const delayedLog = number => new Promise(function (resolve) {\n' +
              '  setTimeout(function () {\n' +
              '    console.log(number)\n' +
              '    resolve()\n' +
              '  }, 1000)\n' +
              '})\n' +
              '\n' +
              "console.log('start')\n" +
              'map.series(delayedLog)([1, 2, 3, 4, 5])',
            position: {
              start: { line: 3, column: 1, offset: 30 },
              end: { line: 13, column: 4, offset: 263 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 263 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'map.pool',
    synopsis: '```coffeescript [specscript]\n' +
      'map.pool(\n' +
      '  maxConcurrency number,\n' +
      '  mapper (value any)=>Promise|any,\n' +
      ')(array Array) -> result Promise|Array\n' +
      '```',
    description: '`map` that specifies the maximum concurrency (number of ongoing promises at any time) of the execution. Only works for arrays.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const ids = [1, 2, 3, 4, 5]\n' +
      '\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'const delayedIdentity = async value => {\n' +
      '  await sleep(1000)\n' +
      '  return value\n' +
      '}\n' +
      '\n' +
      'map.pool(2, pipe([\n' +
      '  delayedIdentity,\n' +
      '  console.log,\n' +
      ']))(ids)\n' +
      '```',
    TODO: 'objectMapPool',
    execution: 'concurrent',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'map.pool',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'map.pool(\n' +
              '  maxConcurrency number,\n' +
              '  mapper (value any)=>Promise|any,\n' +
              ')(array Array) -> result Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 141 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 141 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              },
              {
                type: 'text',
                value: ' that specifies the maximum concurrency (number of ongoing promises at any time) of the execution. Only works for arrays.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 127, offset: 126 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 127, offset: 126 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const ids = [1, 2, 3, 4, 5]\n' +
              '\n' +
              'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              'const delayedIdentity = async value => {\n' +
              '  await sleep(1000)\n' +
              '  return value\n' +
              '}\n' +
              '\n' +
              'map.pool(2, pipe([\n' +
              '  delayedIdentity,\n' +
              '  console.log,\n' +
              ']))(ids)',
            position: {
              start: { line: 3, column: 1, offset: 128 },
              end: { line: 17, column: 4, offset: 397 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 17, column: 4, offset: 397 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'objectMapPool',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      }
    }
  },
  {
    name: 'BrokenPromise',
    catchphrase: 'a Promise that never comes back',
    synopsis: 'new BrokenPromise() -> BrokenPromise {}',
    description: 'A **BrokenPromise** is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.\n' +
      '\n' +
      '```javascript\n' +
      'new BrokenPromise() // a new BrokenPromise instance\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'BrokenPromise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 14, offset: 13 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'a Promise that never comes back',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 32, offset: 31 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 32, offset: 31 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'new BrokenPromise() -> BrokenPromise {}',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 40, offset: 39 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 40, offset: 39 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 40, offset: 39 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              },
              {
                type: 'strong',
                children: [
                  {
                    type: 'text',
                    value: 'BrokenPromise',
                    position: {
                      start: { line: 1, column: 5, offset: 4 },
                      end: { line: 1, column: 18, offset: 17 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 3, offset: 2 },
                  end: { line: 1, column: 20, offset: 19 }
                }
              },
              {
                type: 'text',
                value: ' is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.',
                position: {
                  start: { line: 1, column: 20, offset: 19 },
                  end: { line: 1, column: 126, offset: 125 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 126, offset: 125 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'new BrokenPromise() // a new BrokenPromise instance',
            position: {
              start: { line: 3, column: 1, offset: 127 },
              end: { line: 5, column: 4, offset: 196 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 196 }
        }
      }
    }
  },
  {
    name: 'BrokenPromise.prototype.then',
    catchphrase: 'register an unreachable resolver',
    synopsis: 'new BrokenPromise().then(unreachableResolver function)',
    description: '**BrokenPromise.prototype.then** registers a Promise `.then` resolver function with the internal infinite promise. In that sense, the resolver function _technically_ never gets called. However, it is possible to manually fire the provided `unreachableResolver` with `BrokenPromise.prototype.resolve`.\n' +
      '\n' +
      '```javascript\n' +
      "new BrokenPromise().then(() => console.log('unreachable'))\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'BrokenPromise.prototype.then',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 29, offset: 28 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'register an unreachable resolver',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 33, offset: 32 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'new BrokenPromise().then(unreachableResolver function)',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 55, offset: 54 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'strong',
                children: [
                  {
                    type: 'text',
                    value: 'BrokenPromise.prototype.then',
                    position: {
                      start: { line: 1, column: 3, offset: 2 },
                      end: { line: 1, column: 31, offset: 30 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              },
              {
                type: 'text',
                value: ' registers a Promise ',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 54, offset: 53 }
                }
              },
              {
                type: 'inlineCode',
                value: '.then',
                position: {
                  start: { line: 1, column: 54, offset: 53 },
                  end: { line: 1, column: 61, offset: 60 }
                }
              },
              {
                type: 'text',
                value: ' resolver function with the internal infinite promise. In that sense, the resolver function ',
                position: {
                  start: { line: 1, column: 61, offset: 60 },
                  end: { line: 1, column: 153, offset: 152 }
                }
              },
              {
                type: 'emphasis',
                children: [
                  {
                    type: 'text',
                    value: 'technically',
                    position: {
                      start: { line: 1, column: 154, offset: 153 },
                      end: { line: 1, column: 165, offset: 164 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 153, offset: 152 },
                  end: { line: 1, column: 166, offset: 165 }
                }
              },
              {
                type: 'text',
                value: ' never gets called. However, it is possible to manually fire the provided ',
                position: {
                  start: { line: 1, column: 166, offset: 165 },
                  end: { line: 1, column: 240, offset: 239 }
                }
              },
              {
                type: 'inlineCode',
                value: 'unreachableResolver',
                position: {
                  start: { line: 1, column: 240, offset: 239 },
                  end: { line: 1, column: 261, offset: 260 }
                }
              },
              {
                type: 'text',
                value: ' with ',
                position: {
                  start: { line: 1, column: 261, offset: 260 },
                  end: { line: 1, column: 267, offset: 266 }
                }
              },
              {
                type: 'inlineCode',
                value: 'BrokenPromise.prototype.resolve',
                position: {
                  start: { line: 1, column: 267, offset: 266 },
                  end: { line: 1, column: 300, offset: 299 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 300, offset: 299 },
                  end: { line: 1, column: 301, offset: 300 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 301, offset: 300 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: "new BrokenPromise().then(() => console.log('unreachable'))",
            position: {
              start: { line: 3, column: 1, offset: 302 },
              end: { line: 5, column: 4, offset: 378 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 378 }
        }
      }
    }
  },
  {
    name: 'Cancellable',
    catchphrase: 'make a function return cancellable Promises',
    synopsis: 'Promise { cancel: any=>() } -> CancellablePromise\n' +
      '\n' +
      'Cancellable(\n' +
      '  func ...any=>Promise|any,\n' +
      ') -> cancellablePromiseFactory ...any=>CancellablePromise|any',
    description: '**Cancellable** wraps an async function to apply an effect such that all Promises returned by the wrapped async function are cancellable via the `.cancel` method.\n' +
      '\n' +
      '```javascript\n' +
      'const createInfinitePromise = () => Promise.race([])\n' +
      '\n' +
      'const createCancellablePromise = Cancellable(createInfinitePromise)\n' +
      '\n' +
      'const cancellablePromise = createCancellablePromise()\n' +
      '\n' +
      "cancellablePromise.cancel(new Error('cancelled')).catch(\n" +
      '  err => console.error(err)) // Error: cancelled\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Cancellable',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'make a function return cancellable Promises',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 44, offset: 43 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 44, offset: 43 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 44, offset: 43 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Promise { cancel: any=>() } -> CancellablePromise',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 50, offset: 49 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 50, offset: 49 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Cancellable(\n' +
                  'func ...any=>Promise|any,\n' +
                  ') -> cancellablePromiseFactory ...any=>CancellablePromise|any',
                position: {
                  start: { line: 3, column: 1, offset: 51 },
                  end: { line: 5, column: 62, offset: 153 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 51 },
              end: { line: 5, column: 62, offset: 153 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 62, offset: 153 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'strong',
                children: [
                  {
                    type: 'text',
                    value: 'Cancellable',
                    position: {
                      start: { line: 1, column: 3, offset: 2 },
                      end: { line: 1, column: 14, offset: 13 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              },
              {
                type: 'text',
                value: ' wraps an async function to apply an effect such that all Promises returned by the wrapped async function are cancellable via the ',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 146, offset: 145 }
                }
              },
              {
                type: 'inlineCode',
                value: '.cancel',
                position: {
                  start: { line: 1, column: 146, offset: 145 },
                  end: { line: 1, column: 155, offset: 154 }
                }
              },
              {
                type: 'text',
                value: ' method.',
                position: {
                  start: { line: 1, column: 155, offset: 154 },
                  end: { line: 1, column: 163, offset: 162 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 163, offset: 162 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'const createInfinitePromise = () => Promise.race([])\n' +
              '\n' +
              'const createCancellablePromise = Cancellable(createInfinitePromise)\n' +
              '\n' +
              'const cancellablePromise = createCancellablePromise()\n' +
              '\n' +
              "cancellablePromise.cancel(new Error('cancelled')).catch(\n" +
              '  err => console.error(err)) // Error: cancelled',
            position: {
              start: { line: 3, column: 1, offset: 164 },
              end: { line: 12, column: 4, offset: 465 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 465 }
        }
      }
    }
  },
  {
    name: 'Mux.isSequence',
    synopsis: 'Mux.isSequence(x any) -> boolean',
    catchphrase: 'Tell if Sequence',
    description: 'Mux.isSequence takes anything and returns a Boolean value. Mux.isSequence returns true if the value is an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction.',
    example: 'console.log(\n  Mux.isSequence([[1], [2], [3]]),\n) // true',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.isSequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.isSequence(x any) -> boolean',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 33, offset: 32 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Tell if Sequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.isSequence takes anything and returns a Boolean value. Mux.isSequence returns true if the value is an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 177, offset: 176 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 177, offset: 176 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 177, offset: 176 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'console.log(\nMux.isSequence([[1], [2], [3]]),\n) // true',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 10, offset: 57 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 10, offset: 57 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 10, offset: 57 }
        }
      }
    }
  },
  {
    name: 'Mux.zip',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.zip(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<Array<T|undefined>>\n' +
      '\n' +
      '<T any>Mux.zip(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<Array<T|undefined>>',
    catchphrase: 'Create rows from disparate Sequences',
    description: 'Mux.zip takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields an Array of items of each supplied Sequence for a given iteration. If any Sequence supplied to Mux.zip is AsyncIterable or an AsyncGeneratorFunction, Mux.zip outputs an AsyncIterator. The Iterator or AsyncIterator will iterate as long as the longest iterator of the supplied Sequences; shorter iterators will yield undefined until the longest iterator is consumed.',
    example: "const iterator = Mux.zip([[1, 2, 3], ['a', 'b', 'c']])\n" +
      '\n' +
      'for (const item of iterator) {\n' +
      "  console.log(item) // [1, 'a']\n" +
      "                    // [2, 'b']\n" +
      "                    // [3, 'c']\n" +
      '}',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.zip',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                  'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                  'SyncSequence|AsyncSequence -> Sequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 39, offset: 135 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 5, column: 1, offset: 137 },
                  end: { line: 5, column: 8, offset: 144 }
                }
              },
              {
                type: 'text',
                value: 'Mux.zip(\nx SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 182 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 182 },
                  end: { line: 6, column: 33, offset: 185 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator<Array<T|undefined>>',
                position: {
                  start: { line: 6, column: 33, offset: 185 },
                  end: { line: 7, column: 34, offset: 225 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 34, offset: 225 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 9, column: 1, offset: 227 },
                  end: { line: 9, column: 8, offset: 234 }
                }
              },
              {
                type: 'text',
                value: 'Mux.zip(\nx Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 234 },
                  end: { line: 10, column: 22, offset: 264 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 264 },
                  end: { line: 10, column: 25, offset: 267 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator<Array<T|undefined>>',
                position: {
                  start: { line: 10, column: 25, offset: 267 },
                  end: { line: 11, column: 39, offset: 312 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 227 },
              end: { line: 11, column: 39, offset: 312 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 39, offset: 312 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create rows from disparate Sequences',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 37, offset: 36 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 37, offset: 36 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 37, offset: 36 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.zip takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields an Array of items of each supplied Sequence for a given iteration. If any Sequence supplied to Mux.zip is AsyncIterable or an AsyncGeneratorFunction, Mux.zip outputs an AsyncIterator. The Iterator or AsyncIterator will iterate as long as the longest iterator of the supplied Sequences; shorter iterators will yield undefined until the longest iterator is consumed.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 484, offset: 483 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 484, offset: 483 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 484, offset: 483 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "const iterator = Mux.zip([[1, 2, 3], ['a', 'b', 'c']])",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 55, offset: 54 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for (const item of iterator) {\n' +
                  "console.log(item) // [1, 'a']\n" +
                  "// [2, 'b']\n" +
                  "// [3, 'c']\n" +
                  '}',
                position: {
                  start: { line: 3, column: 1, offset: 56 },
                  end: { line: 7, column: 2, offset: 184 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 56 },
              end: { line: 7, column: 2, offset: 184 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 2, offset: 184 }
        }
      }
    }
  },
  {
    name: 'Mux.concat',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.concat(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.concat(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<T>',
    catchphrase: 'Concatenate Sequences into one',
    description: 'Mux.concat takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the second item of the first Sequence, and so on until all Sequences have been iterated in order. Non-Sequence Items in the top-level Sequence are yielded as they are.',
    example: 'const iter = Mux.concat([\n' +
      '  [1, 2, 3],\n' +
      '  [4, 5, 6],\n' +
      '  [7, 8, 9],\n' +
      '])\n' +
      '\n' +
      'for (const number of iter) {\n' +
      '  console.log(number) // 1 2 3 4 5 6 7 8 9\n' +
      '}',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.concat',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                  'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                  'SyncSequence|AsyncSequence -> Sequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 39, offset: 135 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 5, column: 1, offset: 137 },
                  end: { line: 5, column: 8, offset: 144 }
                }
              },
              {
                type: 'text',
                value: 'Mux.concat(\nx SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 185 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 185 },
                  end: { line: 6, column: 33, offset: 188 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 188 },
                  end: { line: 7, column: 14, offset: 208 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 208 },
                  end: { line: 7, column: 17, offset: 211 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 211 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 9, column: 1, offset: 213 },
                  end: { line: 9, column: 8, offset: 220 }
                }
              },
              {
                type: 'text',
                value: 'Mux.concat(\nx Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 220 },
                  end: { line: 10, column: 22, offset: 253 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 253 },
                  end: { line: 10, column: 25, offset: 256 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 256 },
                  end: { line: 11, column: 19, offset: 281 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 281 },
                  end: { line: 11, column: 22, offset: 284 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 213 },
              end: { line: 11, column: 22, offset: 284 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 22, offset: 284 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Concatenate Sequences into one',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 31, offset: 30 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 31, offset: 30 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.concat takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the second item of the first Sequence, and so on until all Sequences have been iterated in order. Non-Sequence Items in the top-level Sequence are yielded as they are.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 392, offset: 391 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 392, offset: 391 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 392, offset: 391 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'const iter = Mux.concat([\n' +
                  '[1, 2, 3],\n' +
                  '[4, 5, 6],\n' +
                  '[7, 8, 9],\n' +
                  '])',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 3, offset: 67 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 3, offset: 67 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for (const number of iter) {\n' +
                  'console.log(number) // 1 2 3 4 5 6 7 8 9\n' +
                  '}',
                position: {
                  start: { line: 7, column: 1, offset: 69 },
                  end: { line: 9, column: 2, offset: 142 }
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 69 },
              end: { line: 9, column: 2, offset: 142 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 2, offset: 142 }
        }
      }
    }
  },
  {
    name: 'Mux.switch',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.switch(\n' +
      '  x SyncSequence<SyncSequence<T>|T>|T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.switch(\n' +
      '  x Sequence<Sequence<T>|T>|T,\n' +
      ') -> AsyncIterator<T>',
    catchphrase: 'Interleave Sequences into one',
    description: 'Mux.switch takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the first item of the second Sequence, and so on until all Sequences have yielded their first item. Then, the first Sequence yields its second item, the second Sequence yields its second item, and so on until all Sequences have finished iterating. Non-Sequence Items in the top-level Sequence are yielded as they are. When a shorter Sequence finishes iterating, the remaining Sequences will switch yielding amongst themselves.',
    example: 'const iter = Mux.switch([\n' +
      '  [1, 1, 1],\n' +
      '  [2, 2, 2],\n' +
      '  [3, 3, 3],\n' +
      '])\n' +
      'for (const number of iter) {\n' +
      '  console.log(number) // 1 2 3 1 2 3 1 2 3\n' +
      '}',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.switch',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                  'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                  'SyncSequence|AsyncSequence -> Sequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 39, offset: 135 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 5, column: 1, offset: 137 },
                  end: { line: 5, column: 8, offset: 144 }
                }
              },
              {
                type: 'text',
                value: 'Mux.switch(\nx SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 185 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 185 },
                  end: { line: 6, column: 33, offset: 188 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 188 },
                  end: { line: 7, column: 14, offset: 208 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 208 },
                  end: { line: 7, column: 17, offset: 211 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 211 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 9, column: 1, offset: 213 },
                  end: { line: 9, column: 8, offset: 220 }
                }
              },
              {
                type: 'text',
                value: 'Mux.switch(\nx Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 220 },
                  end: { line: 10, column: 22, offset: 253 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 253 },
                  end: { line: 10, column: 25, offset: 256 }
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 256 },
                  end: { line: 11, column: 19, offset: 281 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 281 },
                  end: { line: 11, column: 22, offset: 284 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 213 },
              end: { line: 11, column: 22, offset: 284 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 22, offset: 284 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Interleave Sequences into one',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 30, offset: 29 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.switch takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the first item of the second Sequence, and so on until all Sequences have yielded their first item. Then, the first Sequence yields its second item, the second Sequence yields its second item, and so on until all Sequences have finished iterating. Non-Sequence Items in the top-level Sequence are yielded as they are. When a shorter Sequence finishes iterating, the remaining Sequences will switch yielding amongst themselves.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 651, offset: 650 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 651, offset: 650 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 651, offset: 650 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'const iter = Mux.switch([\n' +
                  '[1, 1, 1],\n' +
                  '[2, 2, 2],\n' +
                  '[3, 3, 3],\n' +
                  '])\n' +
                  'for (const number of iter) {\n' +
                  'console.log(number) // 1 2 3 1 2 3 1 2 3\n' +
                  '}',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 8, column: 2, offset: 141 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 2, offset: 141 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 2, offset: 141 }
        }
      }
    }
  },
  {
    name: 'Mux.race',
    synopsis: 'Iterable|GeneratorFunction -> SyncSequence\n' +
      'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
      'SyncSequence|AsyncSequence -> Sequence\n' +
      '\n' +
      '<T any>Mux.race(\n' +
      '  x SyncSequence<SyncSequence<T>|T>T,\n' +
      ') -> Iterator<T>\n' +
      '\n' +
      '<T any>Mux.race(\n' +
      '  x Sequence<Sequence<T>|T>T,\n' +
      ') -> AsyncIterator<T>',
    catchphrase: 'Asynchronously Race Sequences into one',
    description: 'Mux.race takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items are the synchronous items of the top level Sequence, followed by the asynchronous items of any asynchronous sub Sequences. If any sub Sequences are asynchronous, the order of these asynchronous items in the final returned AsyncIterator is determined by the serial asynchronous resolution of the individual asynchronous sub Sequences. If all Sequences are synchronous, Mux.race behaves just as Mux.concat.',
    example: 'const f = async function*() { await delay(5); yield 10; yield 20 }\n' +
      'const g = async function*() { yield 1; yield 2; yield 3; await delay(10); yield 30 }\n' +
      '\n' +
      'const iter = Mux.race([f, g])\n' +
      '\n' +
      'for await (const number of iter) {\n' +
      '  console.log(number) // 1 2 3 10 20 30\n' +
      '}',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.race',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Iterable|GeneratorFunction -> SyncSequence\n' +
                  'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
                  'SyncSequence|AsyncSequence -> Sequence',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 39, offset: 135 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 5, column: 1, offset: 137 },
                  end: { line: 5, column: 8, offset: 144 }
                }
              },
              {
                type: 'text',
                value: 'Mux.race(\nx SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 183 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 183 },
                  end: { line: 6, column: 33, offset: 186 }
                }
              },
              {
                type: 'text',
                value: '|T>T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 186 },
                  end: { line: 7, column: 14, offset: 205 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 205 },
                  end: { line: 7, column: 17, offset: 208 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 208 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'html',
                value: '<T any>',
                position: {
                  start: { line: 9, column: 1, offset: 210 },
                  end: { line: 9, column: 8, offset: 217 }
                }
              },
              {
                type: 'text',
                value: 'Mux.race(\nx Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 217 },
                  end: { line: 10, column: 22, offset: 248 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 248 },
                  end: { line: 10, column: 25, offset: 251 }
                }
              },
              {
                type: 'text',
                value: '|T>T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 251 },
                  end: { line: 11, column: 19, offset: 275 }
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 275 },
                  end: { line: 11, column: 22, offset: 278 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 210 },
              end: { line: 11, column: 22, offset: 278 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 22, offset: 278 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Asynchronously Race Sequences into one',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 39, offset: 38 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.race takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items are the synchronous items of the top level Sequence, followed by the asynchronous items of any asynchronous sub Sequences. If any sub Sequences are asynchronous, the order of these asynchronous items in the final returned AsyncIterator is determined by the serial asynchronous resolution of the individual asynchronous sub Sequences. If all Sequences are synchronous, Mux.race behaves just as Mux.concat.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 574, offset: 573 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 574, offset: 573 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 574, offset: 573 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'const f = async function*() { await delay(5); yield 10; yield 20 }\n' +
                  'const g = async function*() { yield 1; yield 2; yield 3; await delay(10); yield 30 }',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 85, offset: 151 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 2, column: 85, offset: 151 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'const iter = Mux.race([f, g])',
                position: {
                  start: { line: 4, column: 1, offset: 153 },
                  end: { line: 4, column: 30, offset: 182 }
                }
              }
            ],
            position: {
              start: { line: 4, column: 1, offset: 153 },
              end: { line: 4, column: 30, offset: 182 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for await (const number of iter) {\n' +
                  'console.log(number) // 1 2 3 10 20 30\n' +
                  '}',
                position: {
                  start: { line: 6, column: 1, offset: 184 },
                  end: { line: 8, column: 2, offset: 260 }
                }
              }
            ],
            position: {
              start: { line: 6, column: 1, offset: 184 },
              end: { line: 8, column: 2, offset: 260 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 2, offset: 260 }
        }
      }
    }
  },
  {
    name: [ 'Mux.flatten', 'Mux.flatten' ],
    synopsis: [
      '<T any>Mux.flatten(x Array<Iterable<T>|T>) -> Array<T>\n' +
        '\n' +
        '<T any>Mux.flatten(x Set<Iterable<T>|T>) -> Set<T>\n' +
        '\n' +
        '<T !Array|!Set>Mux.flatten(x T) -> Mux.concat(x)',
      'Iterable|GeneratorFunction -> SyncSequence\n' +
        'AsyncIterable|AsyncGeneratorFunction -> AsyncSequence\n' +
        'SyncSequence|AsyncSequence -> Sequence\n' +
        '\n' +
        '<T any>Mux.race(\n' +
        '  x SyncSequence<SyncSequence<T>|T>,\n' +
        ') -> Iterator<T>\n' +
        '\n' +
        '<T any>Mux.race(\n' +
        '  x Sequence<Sequence<T>|T>,\n' +
        ') -> AsyncIterator<T>'
    ],
    catchphrase: 'Asynchronously Race Sequences into one',
    description: 'Mux.flatten behaves just as Mux.concat except for cases when passed an Array or Set. When passed an Array, Mux.flatten outputs another Array with all elements of the input Array concatenated. When passed a Set, Mux.flatten outputs another Set in the same regard.',
    example: 'console.log(\n  Mux.flatten([[1], 2, [3], 4, [5]]),\n) // [1, 2, 3, 4, 5]',
    mdast: {
      name: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      synopsis: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Asynchronously Race Sequences into one',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 39, offset: 38 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Mux.flatten behaves just as Mux.concat except for cases when passed an Array or Set. When passed an Array, Mux.flatten outputs another Array with all elements of the input Array concatenated. When passed a Set, Mux.flatten outputs another Set in the same regard.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 263, offset: 262 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 263, offset: 262 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 263, offset: 262 }
        }
      },
      example: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'console.log(\n' +
                  'Mux.flatten([[1], 2, [3], 4, [5]]),\n' +
                  ') // [1, 2, 3, 4, 5]',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 3, column: 21, offset: 71 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 21, offset: 71 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 21, offset: 71 }
        }
      }
    }
  },
  {
    name: 'not',
    synopsis: '```coffeescript [specscript]\n' +
      'not(value boolean) -> negated boolean\n' +
      '\n' +
      'not(...args, predicate function) -> negated boolean\n' +
      '\n' +
      'not(predicate function)(...args) -> negated boolean\n' +
      '```',
    description: 'Negate a value like the [logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) operator.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const myObj = { a: 1 }\n' +
      '\n' +
      "console.log(not('a' in myObj)) // false\n" +
      "console.log(not('b' in myObj)) // true\n" +
      '```\n' +
      '\n' +
      'If provided a predicate function, `not` returns a logically inverted predicate that returns true everywhere the original predicate would have returned false.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  not(isOdd)(3),\n' +
      ') // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'not',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'not(value boolean) -> negated boolean\n' +
              '\n' +
              'not(...args, predicate function) -> negated boolean\n' +
              '\n' +
              'not(predicate function)(...args) -> negated boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 176 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 176 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Negate a value like the ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT',
                children: [
                  {
                    type: 'text',
                    value: 'logical NOT (',
                    position: {
                      start: { line: 1, column: 26, offset: 25 },
                      end: { line: 1, column: 39, offset: 38 }
                    }
                  },
                  {
                    type: 'inlineCode',
                    value: '!',
                    position: {
                      start: { line: 1, column: 39, offset: 38 },
                      end: { line: 1, column: 42, offset: 41 }
                    }
                  },
                  {
                    type: 'text',
                    value: ')',
                    position: {
                      start: { line: 1, column: 42, offset: 41 },
                      end: { line: 1, column: 43, offset: 42 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 25, offset: 24 },
                  end: { line: 1, column: 133, offset: 132 }
                }
              },
              {
                type: 'text',
                value: ' operator.',
                position: {
                  start: { line: 1, column: 133, offset: 132 },
                  end: { line: 1, column: 143, offset: 142 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 143, offset: 142 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const myObj = { a: 1 }\n' +
              '\n' +
              "console.log(not('a' in myObj)) // false\n" +
              "console.log(not('b' in myObj)) // true",
            position: {
              start: { line: 3, column: 1, offset: 144 },
              end: { line: 8, column: 4, offset: 277 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If provided a predicate function, ',
                position: {
                  start: { line: 10, column: 1, offset: 279 },
                  end: { line: 10, column: 35, offset: 313 }
                }
              },
              {
                type: 'inlineCode',
                value: 'not',
                position: {
                  start: { line: 10, column: 35, offset: 313 },
                  end: { line: 10, column: 40, offset: 318 }
                }
              },
              {
                type: 'text',
                value: ' returns a logically inverted predicate that returns true everywhere the original predicate would have returned false.',
                position: {
                  start: { line: 10, column: 40, offset: 318 },
                  end: { line: 10, column: 158, offset: 436 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 279 },
              end: { line: 10, column: 158, offset: 436 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  not(isOdd)(3),\n' +
              ') // false',
            position: {
              start: { line: 12, column: 1, offset: 438 },
              end: { line: 18, column: 4, offset: 550 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 18, column: 4, offset: 550 }
        }
      }
    }
  },
  {
    name: 'omit',
    synopsis: '```coffeescript [specscript]\n' +
      'omit(paths Array<string>)(source Object) -> omitted Object\n' +
      '\n' +
      'omit(source Object, paths Array<string>) -> omitted Object\n' +
      '```',
    description: 'Create a new object by excluding provided paths on a source object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  omit({ _id: '1', name: 'George' }, ['_id']),\n" +
      ") // { name: 'George' }\n" +
      '```\n' +
      '\n' +
      '`omit` supports three types of path patterns for nested property access\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  omit(['a.b.d'])({\n" +
      '    a: {\n' +
      '      b: {\n' +
      "        c: 'hello',\n" +
      "        d: 'goodbye',\n" +
      '      },\n' +
      '    },\n' +
      '  }),\n' +
      ") // { a: { b: { c: 'hello' } } }\n" +
      '```\n' +
      '\n' +
      'Compose `omit` inside a `pipe` with its tacit API\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe({ a: 1, b: 2, c: 3 }, [\n' +
      '  map(number => number ** 2),\n' +
      "  omit(['a', 'b']),\n" +
      '  console.log, // { c: 9 }\n' +
      '])\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'omit',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'omit(paths Array<string>)(source Object) -> omitted Object\n' +
              '\n' +
              'omit(source Object, paths Array<string>) -> omitted Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 151 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 151 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a new object by excluding provided paths on a source object.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 68, offset: 67 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 68, offset: 67 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  omit({ _id: '1', name: 'George' }, ['_id']),\n" +
              ") // { name: 'George' }",
            position: {
              start: { line: 3, column: 1, offset: 69 },
              end: { line: 7, column: 4, offset: 183 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'omit',
                position: {
                  start: { line: 9, column: 1, offset: 185 },
                  end: { line: 9, column: 7, offset: 191 }
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access',
                position: {
                  start: { line: 9, column: 7, offset: 191 },
                  end: { line: 9, column: 72, offset: 256 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 185 },
              end: { line: 9, column: 72, offset: 256 }
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
                        value: 'dot delimited - ',
                        position: {
                          start: { line: 11, column: 4, offset: 261 },
                          end: { line: 11, column: 20, offset: 277 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 11, column: 20, offset: 277 },
                          end: { line: 11, column: 29, offset: 286 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 4, offset: 261 },
                      end: { line: 11, column: 29, offset: 286 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 2, offset: 259 },
                  end: { line: 11, column: 29, offset: 286 }
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
                        value: 'bracket notation - ',
                        position: {
                          start: { line: 12, column: 4, offset: 290 },
                          end: { line: 12, column: 23, offset: 309 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 12, column: 23, offset: 309 },
                          end: { line: 12, column: 37, offset: 323 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 4, offset: 290 },
                      end: { line: 12, column: 37, offset: 323 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 2, offset: 288 },
                  end: { line: 12, column: 37, offset: 323 }
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
                        value: 'an array of keys or indices - ',
                        position: {
                          start: { line: 13, column: 4, offset: 327 },
                          end: { line: 13, column: 34, offset: 357 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 13, column: 34, offset: 357 },
                          end: { line: 13, column: 53, offset: 376 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 4, offset: 327 },
                      end: { line: 13, column: 53, offset: 376 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 2, offset: 325 },
                  end: { line: 13, column: 53, offset: 376 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 2, offset: 259 },
              end: { line: 13, column: 53, offset: 376 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  omit(['a.b.d'])({\n" +
              '    a: {\n' +
              '      b: {\n' +
              "        c: 'hello',\n" +
              "        d: 'goodbye',\n" +
              '      },\n' +
              '    },\n' +
              '  }),\n' +
              ") // { a: { b: { c: 'hello' } } }",
            position: {
              start: { line: 15, column: 1, offset: 378 },
              end: { line: 26, column: 4, offset: 559 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Compose ',
                position: {
                  start: { line: 28, column: 1, offset: 561 },
                  end: { line: 28, column: 9, offset: 569 }
                }
              },
              {
                type: 'inlineCode',
                value: 'omit',
                position: {
                  start: { line: 28, column: 9, offset: 569 },
                  end: { line: 28, column: 15, offset: 575 }
                }
              },
              {
                type: 'text',
                value: ' inside a ',
                position: {
                  start: { line: 28, column: 15, offset: 575 },
                  end: { line: 28, column: 25, offset: 585 }
                }
              },
              {
                type: 'inlineCode',
                value: 'pipe',
                position: {
                  start: { line: 28, column: 25, offset: 585 },
                  end: { line: 28, column: 31, offset: 591 }
                }
              },
              {
                type: 'text',
                value: ' with its tacit API',
                position: {
                  start: { line: 28, column: 31, offset: 591 },
                  end: { line: 28, column: 50, offset: 610 }
                }
              }
            ],
            position: {
              start: { line: 28, column: 1, offset: 561 },
              end: { line: 28, column: 50, offset: 610 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe({ a: 1, b: 2, c: 3 }, [\n' +
              '  map(number => number ** 2),\n' +
              "  omit(['a', 'b']),\n" +
              '  console.log, // { c: 9 }\n' +
              '])',
            position: {
              start: { line: 30, column: 1, offset: 612 },
              end: { line: 36, column: 4, offset: 751 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 36, column: 4, offset: 751 }
        }
      }
    }
  },
  {
    name: 'or',
    synopsis: '```coffeescript [specscript]\n' +
      'or(values Array<boolean>) -> result boolean\n' +
      '\n' +
      'or(...args, predicatesOrValues Array<function|boolean>) -> Promise|boolean\n' +
      '\n' +
      'or(predicatesOrValues Array<function|boolean>)(...args) -> Promise|boolean\n' +
      '```',
    description: 'Tests an array of boolean values, returning true if any boolean values are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const oneIsLessThanZero = 1 < 0\n' +
      'const oneIsGreaterThanTwo = 1 > 2\n' +
      'const threeIsNotEqualToThree = 3 !== 3\n' +
      '\n' +
      'console.log(\n' +
      '  or([oneIsLessThanZero, oneIsGreaterThanTwo, threeIsNotEqualToThree]),\n' +
      ') // false\n' +
      '```\n' +
      '\n' +
      'If any values in the array are synchronous or asynchronous predicate functions, `or` takes another argument to test concurrently against the predicate functions, returning true if any array values or resolved values from the predicates are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const isEven = number => number % 2 == 0\n' +
      '\n' +
      'console.log(\n' +
      '  or([isOdd, isEven])(0),\n' +
      ') // true\n' +
      '```',
    execution: 'series',
    note: '...args slows down here by an order of magnitude',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'or',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'or(values Array<boolean>) -> result boolean\n' +
              '\n' +
              'or(...args, predicatesOrValues Array<function|boolean>) -> Promise|boolean\n' +
              '\n' +
              'or(predicatesOrValues Array<function|boolean>)(...args) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 228 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 228 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Tests an array of boolean values, returning true if any boolean values are truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 83, offset: 82 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 83, offset: 82 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const oneIsLessThanZero = 1 < 0\n' +
              'const oneIsGreaterThanTwo = 1 > 2\n' +
              'const threeIsNotEqualToThree = 3 !== 3\n' +
              '\n' +
              'console.log(\n' +
              '  or([oneIsLessThanZero, oneIsGreaterThanTwo, threeIsNotEqualToThree]),\n' +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 84 },
              end: { line: 11, column: 4, offset: 316 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If any values in the array are synchronous or asynchronous predicate functions, ',
                position: {
                  start: { line: 13, column: 1, offset: 318 },
                  end: { line: 13, column: 81, offset: 398 }
                }
              },
              {
                type: 'inlineCode',
                value: 'or',
                position: {
                  start: { line: 13, column: 81, offset: 398 },
                  end: { line: 13, column: 85, offset: 402 }
                }
              },
              {
                type: 'text',
                value: ' takes another argument to test concurrently against the predicate functions, returning true if any array values or resolved values from the predicates are truthy.',
                position: {
                  start: { line: 13, column: 85, offset: 402 },
                  end: { line: 13, column: 248, offset: 565 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 318 },
              end: { line: 13, column: 248, offset: 565 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const isEven = number => number % 2 == 0\n' +
              '\n' +
              'console.log(\n' +
              '  or([isOdd, isEven])(0),\n' +
              ') // true',
            position: {
              start: { line: 15, column: 1, offset: 567 },
              end: { line: 23, column: 4, offset: 729 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 729 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      note: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '...args slows down here by an order of magnitude',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 49, offset: 48 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 49, offset: 48 }
        }
      }
    }
  },
  {
    name: 'pick',
    synopsis: '```coffeescript [specscript]\n' +
      'pick(object Object, keys Array<string>) -> result Object\n' +
      '\n' +
      'pick(keys Array<string>)(object Object) -> result Object\n' +
      '```',
    description: 'Creates a new object from a source object by selecting provided keys. If a provided key does not exist on the source object, excludes it from the resulting object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  pick({ goodbye: 1, world: 2 }, ['hello', 'world']),\n" +
      ') // { world: 2 }\n' +
      '```\n' +
      '\n' +
      '`pick` supports three types of path patterns for nested property access\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const nested = { a: { b: { c: { d: 1, e: [2, 3] } } } }\n' +
      '\n' +
      "console.log(pick(['a.b.c.d'])(nested)) // { a: { b: { c: { d: 1 } } } }\n" +
      '```\n' +
      '\n' +
      'Compose `pick` inside a `pipe` with its tacit API.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe({ a: 1, b: 2, c: 3 }, [\n' +
      '  map(number => number ** 2),\n' +
      "  pick(['a', 'c']),\n" +
      '  console.log, // { a: 1, c: 9 }\n' +
      '])\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'pick',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'pick(object Object, keys Array<string>) -> result Object\n' +
              '\n' +
              'pick(keys Array<string>)(object Object) -> result Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 147 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 147 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a new object from a source object by selecting provided keys. If a provided key does not exist on the source object, excludes it from the resulting object.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 164, offset: 163 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 164, offset: 163 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  pick({ goodbye: 1, world: 2 }, ['hello', 'world']),\n" +
              ') // { world: 2 }',
            position: {
              start: { line: 3, column: 1, offset: 165 },
              end: { line: 7, column: 4, offset: 280 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'pick',
                position: {
                  start: { line: 9, column: 1, offset: 282 },
                  end: { line: 9, column: 7, offset: 288 }
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access',
                position: {
                  start: { line: 9, column: 7, offset: 288 },
                  end: { line: 9, column: 72, offset: 353 }
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 282 },
              end: { line: 9, column: 72, offset: 353 }
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
                        value: 'dot delimited - ',
                        position: {
                          start: { line: 11, column: 4, offset: 358 },
                          end: { line: 11, column: 20, offset: 374 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 11, column: 20, offset: 374 },
                          end: { line: 11, column: 29, offset: 383 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 4, offset: 358 },
                      end: { line: 11, column: 29, offset: 383 }
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 2, offset: 356 },
                  end: { line: 11, column: 29, offset: 383 }
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
                        value: 'bracket notation - ',
                        position: {
                          start: { line: 12, column: 4, offset: 387 },
                          end: { line: 12, column: 23, offset: 406 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 12, column: 23, offset: 406 },
                          end: { line: 12, column: 37, offset: 420 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 4, offset: 387 },
                      end: { line: 12, column: 37, offset: 420 }
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 2, offset: 385 },
                  end: { line: 12, column: 37, offset: 420 }
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
                        value: 'an array of keys or indices - ',
                        position: {
                          start: { line: 13, column: 4, offset: 424 },
                          end: { line: 13, column: 34, offset: 454 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 13, column: 34, offset: 454 },
                          end: { line: 13, column: 53, offset: 473 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 4, offset: 424 },
                      end: { line: 13, column: 53, offset: 473 }
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 2, offset: 422 },
                  end: { line: 13, column: 53, offset: 473 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 2, offset: 356 },
              end: { line: 13, column: 53, offset: 473 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const nested = { a: { b: { c: { d: 1, e: [2, 3] } } } }\n' +
              '\n' +
              "console.log(pick(['a.b.c.d'])(nested)) // { a: { b: { c: { d: 1 } } } }",
            position: {
              start: { line: 15, column: 1, offset: 475 },
              end: { line: 19, column: 4, offset: 634 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Compose ',
                position: {
                  start: { line: 21, column: 1, offset: 636 },
                  end: { line: 21, column: 9, offset: 644 }
                }
              },
              {
                type: 'inlineCode',
                value: 'pick',
                position: {
                  start: { line: 21, column: 9, offset: 644 },
                  end: { line: 21, column: 15, offset: 650 }
                }
              },
              {
                type: 'text',
                value: ' inside a ',
                position: {
                  start: { line: 21, column: 15, offset: 650 },
                  end: { line: 21, column: 25, offset: 660 }
                }
              },
              {
                type: 'inlineCode',
                value: 'pipe',
                position: {
                  start: { line: 21, column: 25, offset: 660 },
                  end: { line: 21, column: 31, offset: 666 }
                }
              },
              {
                type: 'text',
                value: ' with its tacit API.',
                position: {
                  start: { line: 21, column: 31, offset: 666 },
                  end: { line: 21, column: 51, offset: 686 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 636 },
              end: { line: 21, column: 51, offset: 686 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe({ a: 1, b: 2, c: 3 }, [\n' +
              '  map(number => number ** 2),\n' +
              "  pick(['a', 'c']),\n" +
              '  console.log, // { a: 1, c: 9 }\n' +
              '])',
            position: {
              start: { line: 23, column: 1, offset: 688 },
              end: { line: 29, column: 4, offset: 833 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 833 }
        }
      }
    }
  },
  {
    name: 'pipe',
    synopsis: '```coffeescript [specscript]\n' +
      'pipe(funcs Array<function>)(...args) -> result Promise|any\n' +
      '\n' +
      'pipe(...args, funcs Array<function>) -> result Promise|any\n' +
      '```',
    description: 'Creates a function pipeline from an array of functions, where each function passes its return value as a single argument to the next function until all functions have executed. The first function is called with the arguments to the pipeline, while the result of the pipeline execution is the return of its last function. If any function of the pipeline is asynchronous, the result of the execution is a Promise.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const syncAdd123 = pipe([\n' +
      '  number => number + 1,\n' +
      '  number => number + 2,\n' +
      '  number => number + 3,\n' +
      '])\n' +
      '\n' +
      'console.log(syncAdd123(5)) // 11\n' +
      '\n' +
      'const asyncAdd123 = pipe([\n' +
      '  async number => number + 1,\n' +
      '  async number => number + 2,\n' +
      '  async number => number + 3,\n' +
      '])\n' +
      '\n' +
      'asyncAdd123(5).then(console.log) // 11\n' +
      '```\n' +
      '\n' +
      'When passed any amount of arguments before the array of functions, `pipe` executes eagerly; the array of functions is immediately invoked with the supplied arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe(1, 2, 3, [\n' +
      '  Array.of,\n' +
      '  map(number => number * 3),\n' +
      '  console.log, // [3, 6, 9]\n' +
      '])\n' +
      '```',
    execution: 'series',
    transducing: '',
    since: '1.6.0',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'pipe',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'pipe(funcs Array<function>)(...args) -> result Promise|any\n' +
              '\n' +
              'pipe(...args, funcs Array<function>) -> result Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 151 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 151 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates a function pipeline from an array of functions, where each function passes its return value as a single argument to the next function until all functions have executed. The first function is called with the arguments to the pipeline, while the result of the pipeline execution is the return of its last function. If any function of the pipeline is asynchronous, the result of the execution is a Promise.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 412, offset: 411 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 412, offset: 411 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const syncAdd123 = pipe([\n' +
              '  number => number + 1,\n' +
              '  number => number + 2,\n' +
              '  number => number + 3,\n' +
              '])\n' +
              '\n' +
              'console.log(syncAdd123(5)) // 11\n' +
              '\n' +
              'const asyncAdd123 = pipe([\n' +
              '  async number => number + 1,\n' +
              '  async number => number + 2,\n' +
              '  async number => number + 3,\n' +
              '])\n' +
              '\n' +
              'asyncAdd123(5).then(console.log) // 11',
            position: {
              start: { line: 3, column: 1, offset: 413 },
              end: { line: 19, column: 4, offset: 739 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When passed any amount of arguments before the array of functions, ',
                position: {
                  start: { line: 21, column: 1, offset: 741 },
                  end: { line: 21, column: 68, offset: 808 }
                }
              },
              {
                type: 'inlineCode',
                value: 'pipe',
                position: {
                  start: { line: 21, column: 68, offset: 808 },
                  end: { line: 21, column: 74, offset: 814 }
                }
              },
              {
                type: 'text',
                value: ' executes eagerly; the array of functions is immediately invoked with the supplied arguments.',
                position: {
                  start: { line: 21, column: 74, offset: 814 },
                  end: { line: 21, column: 167, offset: 907 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 741 },
              end: { line: 21, column: 167, offset: 907 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe(1, 2, 3, [\n' +
              '  Array.of,\n' +
              '  map(number => number * 3),\n' +
              '  console.log, // [3, 6, 9]\n' +
              '])',
            position: {
              start: { line: 23, column: 1, offset: 909 },
              end: { line: 29, column: 4, offset: 1027 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 1027 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      transducing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.6.0',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  },
  {
    name: 'reduce',
    synopsis: '```coffeescript [specscript]\n' +
      'type Foldable = Array|Object|Map|Iterator|AsyncIterator\n' +
      'type Reducer = (\n' +
      '  accumulator any,\n' +
      '  value any,\n' +
      '  indexOrKey? number|string,\n' +
      '  collection? Foldable,\n' +
      ')=>(nextAccumulator Promise|any)\n' +
      '\n' +
      'reduce(\n' +
      '  collection Foldable,\n' +
      '  reducer Reducer,\n' +
      '  initialValue? function|any\n' +
      ') -> result Promise|any\n' +
      '\n' +
      'reduce(\n' +
      '  reducer Reducer,\n' +
      '  initialValue? function|any\n' +
      ')(collection Foldable) -> result Promise|any\n' +
      '```',
    description: 'Transforms a collection based on a reducer function and optional initial value. In a reducing operation, the result is defined in the beginning as either the initial value if supplied or the first item of the collection. The reducing operation then iterates through the remaining items in the collection, executing the reducer at each iteration to return the result to be used in the next iteration. The final result is the result of the execution of the reducer at the last item of the iteration. `reduce` accepts the following collections:\n' +
      '\n' +
      ' * `Array`\n' +
      ' * `Object`\n' +
      ' * `Set`\n' +
      ' * `Map`\n' +
      ' * `Iterator`/`Generator`\n' +
      ' * `AsyncIterator`/`AsyncGenerator`\n' +
      '\n' +
      'For arrays (type `Array`), `reduce` executes the reducer function for each item of the array in order, returning a new result at each execution to be used in the next execution. On each iteration, the reducer is passed the accumulator, the item of the iteration, the index of the item in the array, and a reference to the original array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const max = (a, b) => a > b ? a : b\n' +
      '\n' +
      'console.log(\n' +
      '  reduce([1, 3, 5, 4, 2], max)\n' +
      ') // 5\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(max)([1, 3, 5, 4, 2])\n' +
      ') // 5\n' +
      '```\n' +
      '\n' +
      'If an optional initial value is provided, the result starts as the provided initial value rather than the first item of the collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(reduce([1, 2, 3, 4, 5], add, 0)) // 15\n' +
      'console.log(reduce(add, 0)([1, 2, 3, 4, 5])) // 15\n' +
      '```\n' +
      '\n' +
      'If the initialization parameter is a function, it is treated as a resolver and called with the arguments to resolve the initial value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
      '\n' +
      'const contrivedInitializer = array => [`initial length ${array.length}`]\n' +
      '\n' +
      'const array = [1, 2, 3, 4, 5]\n' +
      '\n' +
      'console.log(reduce(concatSquares, contrivedInitializer)(array))\n' +
      "// ['initial length 5', 1, 4, 9, 16, 25]\n" +
      'console.log(reduce(array, concatSquares, contrivedInitializer))\n' +
      "// ['initial length 5', 1, 4, 9, 16, 25]\n" +
      '```\n' +
      '\n' +
      'For objects (type `Object`), `reduce` executes the reducer function for each value of the object. On each iteration, the reducer is passed the accumulator, the object value, the key of the object value, and a reference to the original object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(obj, add)\n' +
      ') // 15\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)(obj)\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'For sets (type `Set`), `reduce` executes the reducer function for each item of the set. On each iteration, the reducer is passed the accumulator and item of the set.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const set = new Set([1, 2, 3, 4, 5])\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(set, add)\n' +
      ') // 15\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)(set)\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'For maps (type `Map`), `reduce` executes the reducer function for each value of each entry of the map. On each iteration, the reducer is passed the accumulator, the map item, the key of the map item, and a reference to the original map.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
      '\n' +
      'console.log(\n' +
      '  reduce(m, add)\n' +
      ') // 15\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)(m)\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'For iterators (type `Iterator`) and generators (type `Generator`), `reduce` executes the reducer function for each value of the iterator/generator. On each iteration, the reducer is passed the accumulator and the item of the iteration. The iterator/generator is consumed in the process.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const generate12345 = function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(generate12345(), add)\n' +
      ') // 15\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)(generate12345())\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'For asyncIterators (type `AsyncIterator`) and asyncGenerators (type `AsyncGenerator`), `reduce` executes the reducer function for each value of the asyncIterator/asyncGenerator. On each iteration, the reducer is passed the accumulator and the item of the async iteration. The asyncIterator/asyncGenerator is consumed in the process.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncAdd = async (a, b) => a + b\n' +
      '\n' +
      'const asyncGenerate12345 = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'reduce(asyncGenerate12345(), asyncAdd).then(console.log) // 15\n' +
      '\n' +
      'reduce(asyncAdd)(asyncGenerate12345()).then(console.log) // 15\n' +
      '```',
    execution: 'series',
    transducing: '',
    TODO: [ 'readerReduce', 'reduce.concurrent' ],
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'reduce',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Foldable = Array|Object|Map|Iterator|AsyncIterator\n' +
              'type Reducer = (\n' +
              '  accumulator any,\n' +
              '  value any,\n' +
              '  indexOrKey? number|string,\n' +
              '  collection? Foldable,\n' +
              ')=>(nextAccumulator Promise|any)\n' +
              '\n' +
              'reduce(\n' +
              '  collection Foldable,\n' +
              '  reducer Reducer,\n' +
              '  initialValue? function|any\n' +
              ') -> result Promise|any\n' +
              '\n' +
              'reduce(\n' +
              '  reducer Reducer,\n' +
              '  initialValue? function|any\n' +
              ')(collection Foldable) -> result Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 20, column: 4, offset: 429 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 20, column: 4, offset: 429 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Transforms a collection based on a reducer function and optional initial value. In a reducing operation, the result is defined in the beginning as either the initial value if supplied or the first item of the collection. The reducing operation then iterates through the remaining items in the collection, executing the reducer at each iteration to return the result to be used in the next iteration. The final result is the result of the execution of the reducer at the last item of the iteration. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 499, offset: 498 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 1, column: 499, offset: 498 },
                  end: { line: 1, column: 507, offset: 506 }
                }
              },
              {
                type: 'text',
                value: ' accepts the following collections:',
                position: {
                  start: { line: 1, column: 507, offset: 506 },
                  end: { line: 1, column: 542, offset: 541 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 542, offset: 541 }
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
                        type: 'inlineCode',
                        value: 'Array',
                        position: {
                          start: { line: 3, column: 4, offset: 546 },
                          end: { line: 3, column: 11, offset: 553 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 546 },
                      end: { line: 3, column: 11, offset: 553 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 544 },
                  end: { line: 3, column: 11, offset: 553 }
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
                        type: 'inlineCode',
                        value: 'Object',
                        position: {
                          start: { line: 4, column: 4, offset: 557 },
                          end: { line: 4, column: 12, offset: 565 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 557 },
                      end: { line: 4, column: 12, offset: 565 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 2, offset: 555 },
                  end: { line: 4, column: 12, offset: 565 }
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
                        type: 'inlineCode',
                        value: 'Set',
                        position: {
                          start: { line: 5, column: 4, offset: 569 },
                          end: { line: 5, column: 9, offset: 574 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 569 },
                      end: { line: 5, column: 9, offset: 574 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 567 },
                  end: { line: 5, column: 9, offset: 574 }
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
                        type: 'inlineCode',
                        value: 'Map',
                        position: {
                          start: { line: 6, column: 4, offset: 578 },
                          end: { line: 6, column: 9, offset: 583 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 578 },
                      end: { line: 6, column: 9, offset: 583 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 576 },
                  end: { line: 6, column: 9, offset: 583 }
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
                        type: 'inlineCode',
                        value: 'Iterator',
                        position: {
                          start: { line: 7, column: 4, offset: 587 },
                          end: { line: 7, column: 14, offset: 597 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 7, column: 14, offset: 597 },
                          end: { line: 7, column: 15, offset: 598 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Generator',
                        position: {
                          start: { line: 7, column: 15, offset: 598 },
                          end: { line: 7, column: 26, offset: 609 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 587 },
                      end: { line: 7, column: 26, offset: 609 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 585 },
                  end: { line: 7, column: 26, offset: 609 }
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
                        type: 'inlineCode',
                        value: 'AsyncIterator',
                        position: {
                          start: { line: 8, column: 4, offset: 613 },
                          end: { line: 8, column: 19, offset: 628 }
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 8, column: 19, offset: 628 },
                          end: { line: 8, column: 20, offset: 629 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'AsyncGenerator',
                        position: {
                          start: { line: 8, column: 20, offset: 629 },
                          end: { line: 8, column: 36, offset: 645 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 613 },
                      end: { line: 8, column: 36, offset: 645 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 2, offset: 611 },
                  end: { line: 8, column: 36, offset: 645 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 2, offset: 544 },
              end: { line: 8, column: 36, offset: 645 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For arrays (type ',
                position: {
                  start: { line: 10, column: 1, offset: 647 },
                  end: { line: 10, column: 18, offset: 664 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Array',
                position: {
                  start: { line: 10, column: 18, offset: 664 },
                  end: { line: 10, column: 25, offset: 671 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 10, column: 25, offset: 671 },
                  end: { line: 10, column: 28, offset: 674 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 10, column: 28, offset: 674 },
                  end: { line: 10, column: 36, offset: 682 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each item of the array in order, returning a new result at each execution to be used in the next execution. On each iteration, the reducer is passed the accumulator, the item of the iteration, the index of the item in the array, and a reference to the original array.',
                position: {
                  start: { line: 10, column: 36, offset: 682 },
                  end: { line: 10, column: 338, offset: 984 }
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 647 },
              end: { line: 10, column: 338, offset: 984 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const max = (a, b) => a > b ? a : b\n' +
              '\n' +
              'console.log(\n' +
              '  reduce([1, 3, 5, 4, 2], max)\n' +
              ') // 5\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(max)([1, 3, 5, 4, 2])\n' +
              ') // 5',
            position: {
              start: { line: 12, column: 1, offset: 986 },
              end: { line: 22, column: 4, offset: 1156 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If an optional initial value is provided, the result starts as the provided initial value rather than the first item of the collection.',
                position: {
                  start: { line: 24, column: 1, offset: 1158 },
                  end: { line: 24, column: 136, offset: 1293 }
                }
              }
            ],
            position: {
              start: { line: 24, column: 1, offset: 1158 },
              end: { line: 24, column: 136, offset: 1293 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'console.log(reduce([1, 2, 3, 4, 5], add, 0)) // 15\n' +
              'console.log(reduce(add, 0)([1, 2, 3, 4, 5])) // 15',
            position: {
              start: { line: 26, column: 1, offset: 1295 },
              end: { line: 31, column: 4, offset: 1456 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If the initialization parameter is a function, it is treated as a resolver and called with the arguments to resolve the initial value.',
                position: {
                  start: { line: 33, column: 1, offset: 1458 },
                  end: { line: 33, column: 135, offset: 1592 }
                }
              }
            ],
            position: {
              start: { line: 33, column: 1, offset: 1458 },
              end: { line: 33, column: 135, offset: 1592 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
              '\n' +
              'const contrivedInitializer = array => [`initial length ${array.length}`]\n' +
              '\n' +
              'const array = [1, 2, 3, 4, 5]\n' +
              '\n' +
              'console.log(reduce(concatSquares, contrivedInitializer)(array))\n' +
              "// ['initial length 5', 1, 4, 9, 16, 25]\n" +
              'console.log(reduce(array, concatSquares, contrivedInitializer))\n' +
              "// ['initial length 5', 1, 4, 9, 16, 25]",
            position: {
              start: { line: 35, column: 1, offset: 1594 },
              end: { line: 46, column: 4, offset: 2005 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For objects (type ',
                position: {
                  start: { line: 48, column: 1, offset: 2007 },
                  end: { line: 48, column: 19, offset: 2025 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 48, column: 19, offset: 2025 },
                  end: { line: 48, column: 27, offset: 2033 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 48, column: 27, offset: 2033 },
                  end: { line: 48, column: 30, offset: 2036 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 48, column: 30, offset: 2036 },
                  end: { line: 48, column: 38, offset: 2044 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each value of the object. On each iteration, the reducer is passed the accumulator, the object value, the key of the object value, and a reference to the original object.',
                position: {
                  start: { line: 48, column: 38, offset: 2044 },
                  end: { line: 48, column: 243, offset: 2249 }
                }
              }
            ],
            position: {
              start: { line: 48, column: 1, offset: 2007 },
              end: { line: 48, column: 243, offset: 2249 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(obj, add)\n' +
              ') // 15\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(add)(obj)\n' +
              ') // 15',
            position: {
              start: { line: 50, column: 1, offset: 2251 },
              end: { line: 62, column: 4, offset: 2437 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For sets (type ',
                position: {
                  start: { line: 64, column: 1, offset: 2439 },
                  end: { line: 64, column: 16, offset: 2454 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Set',
                position: {
                  start: { line: 64, column: 16, offset: 2454 },
                  end: { line: 64, column: 21, offset: 2459 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 64, column: 21, offset: 2459 },
                  end: { line: 64, column: 24, offset: 2462 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 64, column: 24, offset: 2462 },
                  end: { line: 64, column: 32, offset: 2470 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each item of the set. On each iteration, the reducer is passed the accumulator and item of the set.',
                position: {
                  start: { line: 64, column: 32, offset: 2470 },
                  end: { line: 64, column: 166, offset: 2604 }
                }
              }
            ],
            position: {
              start: { line: 64, column: 1, offset: 2439 },
              end: { line: 64, column: 166, offset: 2604 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'const set = new Set([1, 2, 3, 4, 5])\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(set, add)\n' +
              ') // 15\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(add)(set)\n' +
              ') // 15',
            position: {
              start: { line: 66, column: 1, offset: 2606 },
              end: { line: 78, column: 4, offset: 2784 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For maps (type ',
                position: {
                  start: { line: 80, column: 1, offset: 2786 },
                  end: { line: 80, column: 16, offset: 2801 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Map',
                position: {
                  start: { line: 80, column: 16, offset: 2801 },
                  end: { line: 80, column: 21, offset: 2806 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 80, column: 21, offset: 2806 },
                  end: { line: 80, column: 24, offset: 2809 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 80, column: 24, offset: 2809 },
                  end: { line: 80, column: 32, offset: 2817 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each value of each entry of the map. On each iteration, the reducer is passed the accumulator, the map item, the key of the map item, and a reference to the original map.',
                position: {
                  start: { line: 80, column: 32, offset: 2817 },
                  end: { line: 80, column: 237, offset: 3022 }
                }
              }
            ],
            position: {
              start: { line: 80, column: 1, offset: 2786 },
              end: { line: 80, column: 237, offset: 3022 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              "const m = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])\n" +
              '\n' +
              'console.log(\n' +
              '  reduce(m, add)\n' +
              ') // 15\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(add)(m)\n' +
              ') // 15',
            position: {
              start: { line: 82, column: 1, offset: 3024 },
              end: { line: 94, column: 4, offset: 3231 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For iterators (type ',
                position: {
                  start: { line: 96, column: 1, offset: 3233 },
                  end: { line: 96, column: 21, offset: 3253 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Iterator',
                position: {
                  start: { line: 96, column: 21, offset: 3253 },
                  end: { line: 96, column: 31, offset: 3263 }
                }
              },
              {
                type: 'text',
                value: ') and generators (type ',
                position: {
                  start: { line: 96, column: 31, offset: 3263 },
                  end: { line: 96, column: 54, offset: 3286 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Generator',
                position: {
                  start: { line: 96, column: 54, offset: 3286 },
                  end: { line: 96, column: 65, offset: 3297 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 96, column: 65, offset: 3297 },
                  end: { line: 96, column: 68, offset: 3300 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 96, column: 68, offset: 3300 },
                  end: { line: 96, column: 76, offset: 3308 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each value of the iterator/generator. On each iteration, the reducer is passed the accumulator and the item of the iteration. The iterator/generator is consumed in the process.',
                position: {
                  start: { line: 96, column: 76, offset: 3308 },
                  end: { line: 96, column: 287, offset: 3519 }
                }
              }
            ],
            position: {
              start: { line: 96, column: 1, offset: 3233 },
              end: { line: 96, column: 287, offset: 3519 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'const generate12345 = function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(generate12345(), add)\n' +
              ') // 15\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(add)(generate12345())\n' +
              ') // 15',
            position: {
              start: { line: 98, column: 1, offset: 3521 },
              end: { line: 112, column: 4, offset: 3771 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For asyncIterators (type ',
                position: {
                  start: { line: 114, column: 1, offset: 3773 },
                  end: { line: 114, column: 26, offset: 3798 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncIterator',
                position: {
                  start: { line: 114, column: 26, offset: 3798 },
                  end: { line: 114, column: 41, offset: 3813 }
                }
              },
              {
                type: 'text',
                value: ') and asyncGenerators (type ',
                position: {
                  start: { line: 114, column: 41, offset: 3813 },
                  end: { line: 114, column: 69, offset: 3841 }
                }
              },
              {
                type: 'inlineCode',
                value: 'AsyncGenerator',
                position: {
                  start: { line: 114, column: 69, offset: 3841 },
                  end: { line: 114, column: 85, offset: 3857 }
                }
              },
              {
                type: 'text',
                value: '), ',
                position: {
                  start: { line: 114, column: 85, offset: 3857 },
                  end: { line: 114, column: 88, offset: 3860 }
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 114, column: 88, offset: 3860 },
                  end: { line: 114, column: 96, offset: 3868 }
                }
              },
              {
                type: 'text',
                value: ' executes the reducer function for each value of the asyncIterator/asyncGenerator. On each iteration, the reducer is passed the accumulator and the item of the async iteration. The asyncIterator/asyncGenerator is consumed in the process.',
                position: {
                  start: { line: 114, column: 96, offset: 3868 },
                  end: { line: 114, column: 333, offset: 4105 }
                }
              }
            ],
            position: {
              start: { line: 114, column: 1, offset: 3773 },
              end: { line: 114, column: 333, offset: 4105 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const asyncAdd = async (a, b) => a + b\n' +
              '\n' +
              'const asyncGenerate12345 = async function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'reduce(asyncGenerate12345(), asyncAdd).then(console.log) // 15\n' +
              '\n' +
              'reduce(asyncAdd)(asyncGenerate12345()).then(console.log) // 15',
            position: {
              start: { line: 116, column: 1, offset: 4107 },
              end: { line: 126, column: 4, offset: 4401 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 126, column: 4, offset: 4401 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      transducing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      TODO: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      }
    }
  },
  {
    name: 'set',
    synopsis: '```coffeescript [specscript]\n' +
      'set(\n' +
      '  object Object,\n' +
      '  path string|Array<string|number>,\n' +
      '  value function|any,\n' +
      ') -> result Promise|Object\n' +
      '\n' +
      'set(\n' +
      '  path string|Array<string|number>,\n' +
      '  value function|any,\n' +
      ')(object Object) -> result Promise|Object\n' +
      '```',
    description: 'Sets a property on a new object shallow cloned from the argument object given a path denoted by a string, number, or an array of string or numbers.\n' +
      '\n' +
      '`set` supports three types of path patterns for nested property access.\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      "console.log(set('a', 1)({ b: 2 })) // { a: 1, b: 2 }\n" +
      '\n' +
      'const nestedAC2 = { a: { c: 2 } }\n' +
      '\n' +
      "console.log(set('a.b', 1)(nestedAC2)) // { a : { b: 1, c: 2 }}\n" +
      '\n' +
      'const nestedA0BC3 = { a: [{ b: { c: 3 } }] }\n' +
      '\n' +
      "console.log(set('a[0].b.c', 4)(nestedA0BC3)) // { a: [{ b: { c: 4 } }] }\n" +
      '```\n' +
      '\n' +
      'The property value may be a function, in which case it is treated as a resolver and provided the argument object to resolve the value to set.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const myObj = { a: 1 }\n' +
      '\n' +
      "const myNewObj = set('b', obj => obj.a + 2)(myObj)\n" +
      '\n' +
      'console.log(myNewObj) // { a: 1, b: 3 }\n' +
      '```',
    since: '1.7.0',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'set',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'set(\n' +
              '  object Object,\n' +
              '  path string|Array<string|number>,\n' +
              '  value function|any,\n' +
              ') -> result Promise|Object\n' +
              '\n' +
              'set(\n' +
              '  path string|Array<string|number>,\n' +
              '  value function|any,\n' +
              ')(object Object) -> result Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 245 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 245 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Sets a property on a new object shallow cloned from the argument object given a path denoted by a string, number, or an array of string or numbers.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 148, offset: 147 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 148, offset: 147 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'set',
                position: {
                  start: { line: 3, column: 1, offset: 149 },
                  end: { line: 3, column: 6, offset: 154 }
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access.',
                position: {
                  start: { line: 3, column: 6, offset: 154 },
                  end: { line: 3, column: 72, offset: 220 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 149 },
              end: { line: 3, column: 72, offset: 220 }
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
                        value: 'dot delimited - ',
                        position: {
                          start: { line: 5, column: 4, offset: 225 },
                          end: { line: 5, column: 20, offset: 241 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 5, column: 20, offset: 241 },
                          end: { line: 5, column: 29, offset: 250 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 225 },
                      end: { line: 5, column: 29, offset: 250 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 223 },
                  end: { line: 5, column: 29, offset: 250 }
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
                        value: 'bracket notation - ',
                        position: {
                          start: { line: 6, column: 4, offset: 254 },
                          end: { line: 6, column: 23, offset: 273 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 6, column: 23, offset: 273 },
                          end: { line: 6, column: 37, offset: 287 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 254 },
                      end: { line: 6, column: 37, offset: 287 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 252 },
                  end: { line: 6, column: 37, offset: 287 }
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
                        value: 'an array of keys or indices - ',
                        position: {
                          start: { line: 7, column: 4, offset: 291 },
                          end: { line: 7, column: 34, offset: 321 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 7, column: 34, offset: 321 },
                          end: { line: 7, column: 53, offset: 340 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 291 },
                      end: { line: 7, column: 53, offset: 340 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 289 },
                  end: { line: 7, column: 53, offset: 340 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 2, offset: 223 },
              end: { line: 7, column: 53, offset: 340 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "console.log(set('a', 1)({ b: 2 })) // { a: 1, b: 2 }\n" +
              '\n' +
              'const nestedAC2 = { a: { c: 2 } }\n' +
              '\n' +
              "console.log(set('a.b', 1)(nestedAC2)) // { a : { b: 1, c: 2 }}\n" +
              '\n' +
              'const nestedA0BC3 = { a: [{ b: { c: 3 } }] }\n' +
              '\n' +
              "console.log(set('a[0].b.c', 4)(nestedA0BC3)) // { a: [{ b: { c: 4 } }] }",
            position: {
              start: { line: 9, column: 1, offset: 342 },
              end: { line: 19, column: 4, offset: 644 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The property value may be a function, in which case it is treated as a resolver and provided the argument object to resolve the value to set.',
                position: {
                  start: { line: 21, column: 1, offset: 646 },
                  end: { line: 21, column: 142, offset: 787 }
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 646 },
              end: { line: 21, column: 142, offset: 787 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const myObj = { a: 1 }\n' +
              '\n' +
              "const myNewObj = set('b', obj => obj.a + 2)(myObj)\n" +
              '\n' +
              'console.log(myNewObj) // { a: 1, b: 3 }',
            position: {
              start: { line: 23, column: 1, offset: 789 },
              end: { line: 29, column: 4, offset: 935 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 935 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.7.0',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  },
  {
    name: 'some',
    synopsis: '```coffeescript [specscript]\n' +
      'type Foldable = Array|Iterable|AsyncIterable|{ reduce: function }|Object\n' +
      '\n' +
      'some(collection Foldable, predicate function) -> Promise|boolean\n' +
      '\n' +
      'some(predicate function)(collection Foldable) -> Promise|boolean\n' +
      '```',
    description: 'Test a predicate concurrently across all items of a collection, returning true if any executions return truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  some([1, 2, 3, 4, 5], isOdd),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The collection can be any iterable, async iterable, or object values iterable collection. Below is an example of `some` accepting an async generator as the collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const toTodosUrl = id => 'https://jsonplaceholder.typicode.com/todos/' + id\n" +
      '\n' +
      'const fetchedToJson = fetched => fetched.json()\n' +
      '\n' +
      'const fetchTodo = pipe([\n' +
      '  toTodosUrl,\n' +
      '  fetch,\n' +
      '  fetchedToJson,\n' +
      '])\n' +
      '\n' +
      'const todoIDsGenerator = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'some(pipe([\n' +
      '  fetchTodo,\n' +
      "  todo => todo.title.startsWith('fugiat'),\n" +
      ']))(todoIDsGenerator()).then(console.log) // true\n' +
      '```',
    execution: 'concurrent',
    muxing: '',
    related: 'or',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'some',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Foldable = Array|Iterable|AsyncIterable|{ reduce: function }|Object\n' +
              '\n' +
              'some(collection Foldable, predicate function) -> Promise|boolean\n' +
              '\n' +
              'some(predicate function)(collection Foldable) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 237 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 237 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test a predicate concurrently across all items of a collection, returning true if any executions return truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 112, offset: 111 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 112, offset: 111 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  some([1, 2, 3, 4, 5], isOdd),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 113 },
              end: { line: 9, column: 4, offset: 239 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The collection can be any iterable, async iterable, or object values iterable collection. Below is an example of ',
                position: {
                  start: { line: 11, column: 1, offset: 241 },
                  end: { line: 11, column: 114, offset: 354 }
                }
              },
              {
                type: 'inlineCode',
                value: 'some',
                position: {
                  start: { line: 11, column: 114, offset: 354 },
                  end: { line: 11, column: 120, offset: 360 }
                }
              },
              {
                type: 'text',
                value: ' accepting an async generator as the collection.',
                position: {
                  start: { line: 11, column: 120, offset: 360 },
                  end: { line: 11, column: 168, offset: 408 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 241 },
              end: { line: 11, column: 168, offset: 408 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const toTodosUrl = id => 'https://jsonplaceholder.typicode.com/todos/' + id\n" +
              '\n' +
              'const fetchedToJson = fetched => fetched.json()\n' +
              '\n' +
              'const fetchTodo = pipe([\n' +
              '  toTodosUrl,\n' +
              '  fetch,\n' +
              '  fetchedToJson,\n' +
              '])\n' +
              '\n' +
              'const todoIDsGenerator = async function* () {\n' +
              '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
              '}\n' +
              '\n' +
              'some(pipe([\n' +
              '  fetchTodo,\n' +
              "  todo => todo.title.startsWith('fugiat'),\n" +
              ']))(todoIDsGenerator()).then(console.log) // true',
            position: {
              start: { line: 13, column: 1, offset: 410 },
              end: { line: 32, column: 4, offset: 848 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 32, column: 4, offset: 848 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'concurrent',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      muxing: {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      },
      related: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'or',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 3, offset: 2 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 3, offset: 2 }
        }
      }
    }
  },
  {
    name: 'switchCase',
    synopsis: '```coffeescript [specscript]\n' +
      'switchCase(conditionalValues Array<boolean|any>) -> Promise|any\n' +
      '\n' +
      'switchCase(\n' +
      '  conditionalFuncsOrValues Array<function|boolean|any>\n' +
      ')(...args) -> Promise|any\n' +
      '```',
    description: 'Functional equivalent to the [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). Accepts an array of conditional functions that specifies cases as pairings of `predicate` and `resolver` functions with the exception of the last, default resolver. All functions are provided with the same arguments and executed in series. The result of a `switchCase` execution is either the result of the execution the last default resolver, or the result of the execution of the first resolver where the associated predicate tested truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const fruitIsYellow = fruit => fruit.color == 'yellow'\n" +
      '\n' +
      'const fruitsGuesser = switchCase([\n' +
      '  fruitIsYellow,\n' +
      "  fruit => fruit.name + ' is possibly a banana',\n" +
      "  fruit => fruit.name + ' is probably not a banana',\n" +
      '])\n' +
      '\n' +
      "console.log(fruitsGuesser({ name: 'plantain', color: 'yellow' }))\n" +
      '// plantain is possibly a banana\n' +
      '\n' +
      "console.log(fruitsGuesser({ name: 'apple', color: 'red' }))\n" +
      '// apple is probably not a banana\n' +
      '```\n' +
      '\n' +
      'Any function can be replaced with a nonfunction (object or primitive) value so that the value is treated as an already resolved value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'switchCase([\n' +
      '  async function asyncIdentity(value) {\n' +
      '    return value\n' +
      '  },\n' +
      "  'something',\n" +
      "  'default',\n" +
      '])(false).then(console.log) // default\n' +
      '```\n' +
      '\n' +
      'If every item in the conditional array is a nonfunction value, `switchCase` executes eagerly.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const age = 26\n' +
      '\n' +
      "const myDrink = switchCase([age >= 21, 'Beer', 'Juice'])\n" +
      '\n' +
      'console.log(myDrink) // Beer\n' +
      '```',
    execution: 'series',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'switchCase',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'switchCase(conditionalValues Array<boolean|any>) -> Promise|any\n' +
              '\n' +
              'switchCase(\n' +
              '  conditionalFuncsOrValues Array<function|boolean|any>\n' +
              ')(...args) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 190 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 190 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Functional equivalent to the ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator',
                children: [
                  {
                    type: 'text',
                    value: 'Conditional (ternary) operator',
                    position: {
                      start: { line: 1, column: 31, offset: 30 },
                      end: { line: 1, column: 61, offset: 60 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 160, offset: 159 }
                }
              },
              {
                type: 'text',
                value: '. Accepts an array of conditional functions that specifies cases as pairings of ',
                position: {
                  start: { line: 1, column: 160, offset: 159 },
                  end: { line: 1, column: 240, offset: 239 }
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 240, offset: 239 },
                  end: { line: 1, column: 251, offset: 250 }
                }
              },
              {
                type: 'text',
                value: ' and ',
                position: {
                  start: { line: 1, column: 251, offset: 250 },
                  end: { line: 1, column: 256, offset: 255 }
                }
              },
              {
                type: 'inlineCode',
                value: 'resolver',
                position: {
                  start: { line: 1, column: 256, offset: 255 },
                  end: { line: 1, column: 266, offset: 265 }
                }
              },
              {
                type: 'text',
                value: ' functions with the exception of the last, default resolver. All functions are provided with the same arguments and executed in series. The result of a ',
                position: {
                  start: { line: 1, column: 266, offset: 265 },
                  end: { line: 1, column: 418, offset: 417 }
                }
              },
              {
                type: 'inlineCode',
                value: 'switchCase',
                position: {
                  start: { line: 1, column: 418, offset: 417 },
                  end: { line: 1, column: 430, offset: 429 }
                }
              },
              {
                type: 'text',
                value: ' execution is either the result of the execution the last default resolver, or the result of the execution of the first resolver where the associated predicate tested truthy.',
                position: {
                  start: { line: 1, column: 430, offset: 429 },
                  end: { line: 1, column: 604, offset: 603 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 604, offset: 603 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const fruitIsYellow = fruit => fruit.color == 'yellow'\n" +
              '\n' +
              'const fruitsGuesser = switchCase([\n' +
              '  fruitIsYellow,\n' +
              "  fruit => fruit.name + ' is possibly a banana',\n" +
              "  fruit => fruit.name + ' is probably not a banana',\n" +
              '])\n' +
              '\n' +
              "console.log(fruitsGuesser({ name: 'plantain', color: 'yellow' }))\n" +
              '// plantain is possibly a banana\n' +
              '\n' +
              "console.log(fruitsGuesser({ name: 'apple', color: 'red' }))\n" +
              '// apple is probably not a banana',
            position: {
              start: { line: 3, column: 1, offset: 605 },
              end: { line: 17, column: 4, offset: 1043 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Any function can be replaced with a nonfunction (object or primitive) value so that the value is treated as an already resolved value.',
                position: {
                  start: { line: 19, column: 1, offset: 1045 },
                  end: { line: 19, column: 135, offset: 1179 }
                }
              }
            ],
            position: {
              start: { line: 19, column: 1, offset: 1045 },
              end: { line: 19, column: 135, offset: 1179 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'switchCase([\n' +
              '  async function asyncIdentity(value) {\n' +
              '    return value\n' +
              '  },\n' +
              "  'something',\n" +
              "  'default',\n" +
              '])(false).then(console.log) // default',
            position: {
              start: { line: 21, column: 1, offset: 1181 },
              end: { line: 29, column: 4, offset: 1353 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If every item in the conditional array is a nonfunction value, ',
                position: {
                  start: { line: 31, column: 1, offset: 1355 },
                  end: { line: 31, column: 64, offset: 1418 }
                }
              },
              {
                type: 'inlineCode',
                value: 'switchCase',
                position: {
                  start: { line: 31, column: 64, offset: 1418 },
                  end: { line: 31, column: 76, offset: 1430 }
                }
              },
              {
                type: 'text',
                value: ' executes eagerly.',
                position: {
                  start: { line: 31, column: 76, offset: 1430 },
                  end: { line: 31, column: 94, offset: 1448 }
                }
              }
            ],
            position: {
              start: { line: 31, column: 1, offset: 1355 },
              end: { line: 31, column: 94, offset: 1448 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const age = 26\n' +
              '\n' +
              "const myDrink = switchCase([age >= 21, 'Beer', 'Juice'])\n" +
              '\n' +
              'console.log(myDrink) // Beer',
            position: {
              start: { line: 33, column: 1, offset: 1450 },
              end: { line: 39, column: 4, offset: 1583 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 39, column: 4, offset: 1583 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'tap',
    synopsis: '```coffeescript [specscript]\n' +
      'tap(func function)(...args) -> Promise|args[0]\n' +
      '```',
    description: 'Call a function with any number of arguments, returning the first argument. Promises created by the tapper are resolved before returning the value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const pipeline = pipe([\n' +
      '  tap(value => console.log(value)),\n' +
      "  tap(value => console.log(value + 'bar')),\n" +
      "  tap(value => console.log(value + 'barbaz')),\n" +
      '])\n' +
      '\n' +
      "pipeline('foo') // 'foo'\n" +
      "                // 'foobar'\n" +
      "                // 'foobarbaz'\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'tap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'tap(func function)(...args) -> Promise|args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 79 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 79 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a function with any number of arguments, returning the first argument. Promises created by the tapper are resolved before returning the value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 148, offset: 147 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 148, offset: 147 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const pipeline = pipe([\n' +
              '  tap(value => console.log(value)),\n' +
              "  tap(value => console.log(value + 'bar')),\n" +
              "  tap(value => console.log(value + 'barbaz')),\n" +
              '])\n' +
              '\n' +
              "pipeline('foo') // 'foo'\n" +
              "                // 'foobar'\n" +
              "                // 'foobarbaz'",
            position: {
              start: { line: 3, column: 1, offset: 149 },
              end: { line: 13, column: 4, offset: 418 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 418 }
        }
      }
    }
  },
  {
    name: 'tap.if',
    synopsis: '```coffeescript [specscript]\n' +
      'tap.if(predicate function, func function)(...args) -> Promise|args[0]\n' +
      '```',
    description: 'A version of `tap` that accepts a predicate function (a function that returns a boolean value) before the function to execute. Only executes the function if the predicate function tests true for the same arguments provided to the execution function.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const logIfOdd = tap.if(\n' +
      '  isOdd,\n' +
      "  number => console.log(number, 'is an odd number')\n" +
      ')\n' +
      '\n' +
      'logIfOdd(2)\n' +
      'logIfOdd(3) // 3 is an odd number\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'tap.if',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'tap.if(predicate function, func function)(...args) -> Promise|args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 102 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 102 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A version of ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tap',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              },
              {
                type: 'text',
                value: ' that accepts a predicate function (a function that returns a boolean value) before the function to execute. Only executes the function if the predicate function tests true for the same arguments provided to the execution function.',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 250, offset: 249 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 250, offset: 249 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const logIfOdd = tap.if(\n' +
              '  isOdd,\n' +
              "  number => console.log(number, 'is an odd number')\n" +
              ')\n' +
              '\n' +
              'logIfOdd(2)\n' +
              'logIfOdd(3) // 3 is an odd number',
            position: {
              start: { line: 3, column: 1, offset: 251 },
              end: { line: 13, column: 4, offset: 457 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 457 }
        }
      }
    }
  },
  {
    name: 'thunkify',
    synopsis: '```coffeescript [specscript]\n' +
      'thunkify(func function, ...args) -> thunk ()=>func(...args)\n' +
      '```',
    description: 'Create a thunk function from another function and any number of arguments. The thunk function takes no arguments, and when called, executes the other function with the provided arguments. The other function is said to be "thunkified".\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const thunkAdd12 = thunkify(add, 1, 2)\n' +
      '\n' +
      'console.log(thunkAdd12()) // 3\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'thunkify',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'thunkify(func function, ...args) -> thunk ()=>func(...args)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 92 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 92 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a thunk function from another function and any number of arguments. The thunk function takes no arguments, and when called, executes the other function with the provided arguments. The other function is said to be "thunkified".',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 235, offset: 234 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 235, offset: 234 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'const thunkAdd12 = thunkify(add, 1, 2)\n' +
              '\n' +
              'console.log(thunkAdd12()) // 3',
            position: {
              start: { line: 3, column: 1, offset: 236 },
              end: { line: 9, column: 4, offset: 366 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 366 }
        }
      }
    }
  },
  {
    name: 'transform',
    synopsis: '```coffeescript [specscript]\n' +
      'type Reducer = (result any, item any)=>(result any)\n' +
      'type Transducer = Reducer=>Reducer\n' +
      'type Transformable = Array|String|Set|TypedArray|{ concat: function }|{ write: function }|Object\n' +
      'type Foldable = Iterable|AsyncIterable|Object<value any>\n' +
      '\n' +
      'initialValue Transformable|((foldable Foldable)=>Promise|Transformable)\n' +
      '\n' +
      'transform(\n' +
      '  foldable Foldable,\n' +
      '  transducer Transducer,\n' +
      '  initialValue? Transformable|(Foldable=>Promise|Transformable),\n' +
      ') -> result Promise|Transformable\n' +
      '\n' +
      'transform(\n' +
      '  transducer Transducer,\n' +
      '  initialValue? Transformable|(Foldable=>Promise|Transformable),\n' +
      ')(foldable Foldable) -> result Promise|Transformable\n' +
      '```',
    description: 'Transforms a transformable collection into any other transformable collection. The type of transformation depends on the collection provided by the initial value. If the initial is a function it is used as a resolver for the provided collection. `transform` accepts transformable collections, or collections that support a concatenation operation:\n' +
      '\n' +
      ' * `Array`; concatenation defined by `result.concat(values)`\n' +
      ' * `string`; concatenation defined by `result + values`\n' +
      ' * `Set`; concatenation defined by `result.add(...values)`\n' +
      ' * `TypedArray`; concatenation defined by `result.set(prevResult); result.set(values, offset)`\n' +
      ' * `{ concat: function }`; concatenation defined by `result.concat(values)`\n' +
      ' * `{ write: function }`; concatenation defined by `result.write(item)`\n' +
      ' * `Object`; concatenation defined by `({ ...result, ...values })`\n' +
      '\n' +
      '`transform` can transform any of the above collections into any of the other above collections.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const squaredOdds = pipe([\n' +
      '  filter(isOdd),\n' +
      '  map(square),\n' +
      '])\n' +
      '\n' +
      '// transform arrays into arrays\n' +
      'console.log(\n' +
      '  transform(squaredOdds, [])([1, 2, 3, 4, 5])\n' +
      ') // [1, 9, 25]\n' +
      '\n' +
      '// transform arrays into strings\n' +
      'console.log(\n' +
      "  transform(squaredOdds, '')([1, 2, 3, 4, 5])\n" +
      ") // '1925'\n" +
      '\n' +
      '// transform arrays into sets\n' +
      'console.log(\n' +
      '  transform(squaredOdds, new Set())([1, 2, 3, 4, 5])\n' +
      ') // Set (3) { 1, 9, 25 }\n' +
      '\n' +
      '// transform arrays into typed arrays\n' +
      'console.log(\n' +
      '  transform(squaredOdds, new Uint8Array())([1, 2, 3, 4, 5]),\n' +
      ') // Uint8Array(3) [ 1, 9, 25 ]\n' +
      '```\n' +
      '\n' +
      '`transform` arrays into objects that implement `.concat`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const Stdout = {\n' +
      '  concat(...args) {\n' +
      '    console.log(...args)\n' +
      '    return this\n' +
      '  },\n' +
      '}\n' +
      '\n' +
      'transform(map(square), Stdout)([1, 2, 3, 4, 5])\n' +
      '// 1\n' +
      '// 4\n' +
      '// 9\n' +
      '// 16\n' +
      '// 25\n' +
      '```\n' +
      '\n' +
      '`transform` an async generator into `process.stdout`, a Node.js writable stream that implements `.write`.\n' +
      '\n' +
      '```javascript [node]\n' +
      '// this example is duplicated in rubico/examples/transformStreamRandomInts.js\n' +
      '\n' +
      "const { pipe, map, transform } = require('rubico')\n" +
      '\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const toString = value => value.toString()\n' +
      '\n' +
      'const randomInt = () => Math.ceil(Math.random() * 100)\n' +
      '\n' +
      'const streamRandomInts = async function* () {\n' +
      '  while (true) {\n' +
      '    yield randomInt()\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'transform(\n' +
      '  map(pipe([square, toString])), process.stdout,\n' +
      ')(streamRandomInts()) // 9216576529289484980147613249169774446246768649...\n' +
      '```',
    execution: 'series',
    transducing: 'TODO explore Semigroup = Iterator|AsyncIterator',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'transform',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'type Reducer = (result any, item any)=>(result any)\n' +
              'type Transducer = Reducer=>Reducer\n' +
              'type Transformable = Array|String|Set|TypedArray|{ concat: function }|{ write: function }|Object\n' +
              'type Foldable = Iterable|AsyncIterable|Object<value any>\n' +
              '\n' +
              'initialValue Transformable|((foldable Foldable)=>Promise|Transformable)\n' +
              '\n' +
              'transform(\n' +
              '  foldable Foldable,\n' +
              '  transducer Transducer,\n' +
              '  initialValue? Transformable|(Foldable=>Promise|Transformable),\n' +
              ') -> result Promise|Transformable\n' +
              '\n' +
              'transform(\n' +
              '  transducer Transducer,\n' +
              '  initialValue? Transformable|(Foldable=>Promise|Transformable),\n' +
              ')(foldable Foldable) -> result Promise|Transformable',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 19, column: 4, offset: 658 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 658 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Transforms a transformable collection into any other transformable collection. The type of transformation depends on the collection provided by the initial value. If the initial is a function it is used as a resolver for the provided collection. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 247, offset: 246 }
                }
              },
              {
                type: 'inlineCode',
                value: 'transform',
                position: {
                  start: { line: 1, column: 247, offset: 246 },
                  end: { line: 1, column: 258, offset: 257 }
                }
              },
              {
                type: 'text',
                value: ' accepts transformable collections, or collections that support a concatenation operation:',
                position: {
                  start: { line: 1, column: 258, offset: 257 },
                  end: { line: 1, column: 348, offset: 347 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 348, offset: 347 }
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
                        type: 'inlineCode',
                        value: 'Array',
                        position: {
                          start: { line: 3, column: 4, offset: 352 },
                          end: { line: 3, column: 11, offset: 359 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 3, column: 11, offset: 359 },
                          end: { line: 3, column: 38, offset: 386 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.concat(values)',
                        position: {
                          start: { line: 3, column: 38, offset: 386 },
                          end: { line: 3, column: 61, offset: 409 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 352 },
                      end: { line: 3, column: 61, offset: 409 }
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 2, offset: 350 },
                  end: { line: 3, column: 61, offset: 409 }
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
                        type: 'inlineCode',
                        value: 'string',
                        position: {
                          start: { line: 4, column: 4, offset: 413 },
                          end: { line: 4, column: 12, offset: 421 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 4, column: 12, offset: 421 },
                          end: { line: 4, column: 39, offset: 448 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result + values',
                        position: {
                          start: { line: 4, column: 39, offset: 448 },
                          end: { line: 4, column: 56, offset: 465 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 413 },
                      end: { line: 4, column: 56, offset: 465 }
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 2, offset: 411 },
                  end: { line: 4, column: 56, offset: 465 }
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
                        type: 'inlineCode',
                        value: 'Set',
                        position: {
                          start: { line: 5, column: 4, offset: 469 },
                          end: { line: 5, column: 9, offset: 474 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 5, column: 9, offset: 474 },
                          end: { line: 5, column: 36, offset: 501 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.add(...values)',
                        position: {
                          start: { line: 5, column: 36, offset: 501 },
                          end: { line: 5, column: 59, offset: 524 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 469 },
                      end: { line: 5, column: 59, offset: 524 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 467 },
                  end: { line: 5, column: 59, offset: 524 }
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
                        type: 'inlineCode',
                        value: 'TypedArray',
                        position: {
                          start: { line: 6, column: 4, offset: 528 },
                          end: { line: 6, column: 16, offset: 540 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 6, column: 16, offset: 540 },
                          end: { line: 6, column: 43, offset: 567 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.set(prevResult); result.set(values, offset)',
                        position: {
                          start: { line: 6, column: 43, offset: 567 },
                          end: { line: 6, column: 95, offset: 619 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 528 },
                      end: { line: 6, column: 95, offset: 619 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 526 },
                  end: { line: 6, column: 95, offset: 619 }
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
                        type: 'inlineCode',
                        value: '{ concat: function }',
                        position: {
                          start: { line: 7, column: 4, offset: 623 },
                          end: { line: 7, column: 26, offset: 645 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 7, column: 26, offset: 645 },
                          end: { line: 7, column: 53, offset: 672 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.concat(values)',
                        position: {
                          start: { line: 7, column: 53, offset: 672 },
                          end: { line: 7, column: 76, offset: 695 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 623 },
                      end: { line: 7, column: 76, offset: 695 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 621 },
                  end: { line: 7, column: 76, offset: 695 }
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
                        type: 'inlineCode',
                        value: '{ write: function }',
                        position: {
                          start: { line: 8, column: 4, offset: 699 },
                          end: { line: 8, column: 25, offset: 720 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 8, column: 25, offset: 720 },
                          end: { line: 8, column: 52, offset: 747 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.write(item)',
                        position: {
                          start: { line: 8, column: 52, offset: 747 },
                          end: { line: 8, column: 72, offset: 767 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 699 },
                      end: { line: 8, column: 72, offset: 767 }
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 2, offset: 697 },
                  end: { line: 8, column: 72, offset: 767 }
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
                        type: 'inlineCode',
                        value: 'Object',
                        position: {
                          start: { line: 9, column: 4, offset: 771 },
                          end: { line: 9, column: 12, offset: 779 }
                        }
                      },
                      {
                        type: 'text',
                        value: '; concatenation defined by ',
                        position: {
                          start: { line: 9, column: 12, offset: 779 },
                          end: { line: 9, column: 39, offset: 806 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '({ ...result, ...values })',
                        position: {
                          start: { line: 9, column: 39, offset: 806 },
                          end: { line: 9, column: 67, offset: 834 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 4, offset: 771 },
                      end: { line: 9, column: 67, offset: 834 }
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 2, offset: 769 },
                  end: { line: 9, column: 67, offset: 834 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 2, offset: 350 },
              end: { line: 9, column: 67, offset: 834 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'transform',
                position: {
                  start: { line: 11, column: 1, offset: 836 },
                  end: { line: 11, column: 12, offset: 847 }
                }
              },
              {
                type: 'text',
                value: ' can transform any of the above collections into any of the other above collections.',
                position: {
                  start: { line: 11, column: 12, offset: 847 },
                  end: { line: 11, column: 96, offset: 931 }
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 836 },
              end: { line: 11, column: 96, offset: 931 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const squaredOdds = pipe([\n' +
              '  filter(isOdd),\n' +
              '  map(square),\n' +
              '])\n' +
              '\n' +
              '// transform arrays into arrays\n' +
              'console.log(\n' +
              '  transform(squaredOdds, [])([1, 2, 3, 4, 5])\n' +
              ') // [1, 9, 25]\n' +
              '\n' +
              '// transform arrays into strings\n' +
              'console.log(\n' +
              "  transform(squaredOdds, '')([1, 2, 3, 4, 5])\n" +
              ") // '1925'\n" +
              '\n' +
              '// transform arrays into sets\n' +
              'console.log(\n' +
              '  transform(squaredOdds, new Set())([1, 2, 3, 4, 5])\n' +
              ') // Set (3) { 1, 9, 25 }\n' +
              '\n' +
              '// transform arrays into typed arrays\n' +
              'console.log(\n' +
              '  transform(squaredOdds, new Uint8Array())([1, 2, 3, 4, 5]),\n' +
              ') // Uint8Array(3) [ 1, 9, 25 ]',
            position: {
              start: { line: 13, column: 1, offset: 933 },
              end: { line: 42, column: 4, offset: 1585 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'transform',
                position: {
                  start: { line: 44, column: 1, offset: 1587 },
                  end: { line: 44, column: 12, offset: 1598 }
                }
              },
              {
                type: 'text',
                value: ' arrays into objects that implement ',
                position: {
                  start: { line: 44, column: 12, offset: 1598 },
                  end: { line: 44, column: 48, offset: 1634 }
                }
              },
              {
                type: 'inlineCode',
                value: '.concat',
                position: {
                  start: { line: 44, column: 48, offset: 1634 },
                  end: { line: 44, column: 57, offset: 1643 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 44, column: 57, offset: 1643 },
                  end: { line: 44, column: 58, offset: 1644 }
                }
              }
            ],
            position: {
              start: { line: 44, column: 1, offset: 1587 },
              end: { line: 44, column: 58, offset: 1644 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'const Stdout = {\n' +
              '  concat(...args) {\n' +
              '    console.log(...args)\n' +
              '    return this\n' +
              '  },\n' +
              '}\n' +
              '\n' +
              'transform(map(square), Stdout)([1, 2, 3, 4, 5])\n' +
              '// 1\n' +
              '// 4\n' +
              '// 9\n' +
              '// 16\n' +
              '// 25',
            position: {
              start: { line: 46, column: 1, offset: 1646 },
              end: { line: 62, column: 4, offset: 1875 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'transform',
                position: {
                  start: { line: 64, column: 1, offset: 1877 },
                  end: { line: 64, column: 12, offset: 1888 }
                }
              },
              {
                type: 'text',
                value: ' an async generator into ',
                position: {
                  start: { line: 64, column: 12, offset: 1888 },
                  end: { line: 64, column: 37, offset: 1913 }
                }
              },
              {
                type: 'inlineCode',
                value: 'process.stdout',
                position: {
                  start: { line: 64, column: 37, offset: 1913 },
                  end: { line: 64, column: 53, offset: 1929 }
                }
              },
              {
                type: 'text',
                value: ', a Node.js writable stream that implements ',
                position: {
                  start: { line: 64, column: 53, offset: 1929 },
                  end: { line: 64, column: 97, offset: 1973 }
                }
              },
              {
                type: 'inlineCode',
                value: '.write',
                position: {
                  start: { line: 64, column: 97, offset: 1973 },
                  end: { line: 64, column: 105, offset: 1981 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 64, column: 105, offset: 1981 },
                  end: { line: 64, column: 106, offset: 1982 }
                }
              }
            ],
            position: {
              start: { line: 64, column: 1, offset: 1877 },
              end: { line: 64, column: 106, offset: 1982 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[node]',
            value: '// this example is duplicated in rubico/examples/transformStreamRandomInts.js\n' +
              '\n' +
              "const { pipe, map, transform } = require('rubico')\n" +
              '\n' +
              'const square = number => number ** 2\n' +
              '\n' +
              'const toString = value => value.toString()\n' +
              '\n' +
              'const randomInt = () => Math.ceil(Math.random() * 100)\n' +
              '\n' +
              'const streamRandomInts = async function* () {\n' +
              '  while (true) {\n' +
              '    yield randomInt()\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              'transform(\n' +
              '  map(pipe([square, toString])), process.stdout,\n' +
              ')(streamRandomInts()) // 9216576529289484980147613249169774446246768649...',
            position: {
              start: { line: 66, column: 1, offset: 1984 },
              end: { line: 86, column: 4, offset: 2504 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 86, column: 4, offset: 2504 }
        }
      },
      execution: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      transducing: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'TODO explore Semigroup = Iterator|AsyncIterator',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 48, offset: 47 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 48, offset: 47 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 48, offset: 47 }
        }
      }
    }
  },
  {
    name: 'tryCatch',
    synopsis: '```coffeescript [specscript]\n' +
      'tryCatch(tryer function, catcher function)(...args) -> Promise|any\n' +
      '\n' +
      'tryCatch(...args, tryer function, catcher function) -> Promise|any\n' +
      '```',
    description: 'Handles errors with a `tryer` and a `catcher` function. Calls the `tryer` function with the provided arguments and catches any errors thrown by the `tryer` function with the `catcher` function. If the `tryer` function is asynchronous and returns a rejected promise, the `catcher` function will execute with the value of the rejected promise. The `catcher` function is called with the error and all arguments supplied to the `tryer` function.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const throwsIfOdd = number => {\n' +
      '  if (number % 2 == 1) {\n' +
      '    throw new Error(`${number} is odd`)\n' +
      '  }\n' +
      "  console.log('did not throw for', number)\n" +
      '}\n' +
      '\n' +
      'const errorHandler = tryCatch(throwsIfOdd, (error, number) => {\n' +
      "  console.log('caught error from number', number)\n" +
      '  console.log(error)\n' +
      '})\n' +
      '\n' +
      'errorHandler(2) // did not throw for 2\n' +
      'errorHandler(3) // caught error from number 3\n' +
      '                // Error: 3 is odd\n' +
      '\n' +
      '```\n' +
      '\n' +
      '`tryCatch` behaves eagerly (executes immediately with a single call and not with multiple calls like a higher order function) when passed any amount of nonfunction (primitive or object) arguments before the `tryer` and `catcher` functions.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'tryCatch(1, 2, 3, function throwSum(...numbers) {\n' +
      '  const sum = numbers.reduce(add)\n' +
      '  throw new Error(`the sum is ${sum}`)\n' +
      '}, function logErrorMessage(error) {\n' +
      '  console.error(error.message) // the sum is 6\n' +
      '})\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'tryCatch',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'tryCatch(tryer function, catcher function)(...args) -> Promise|any\n' +
              '\n' +
              'tryCatch(...args, tryer function, catcher function) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 167 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 167 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Handles errors with a ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 23, offset: 22 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 23, offset: 22 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              },
              {
                type: 'text',
                value: ' and a ',
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 37, offset: 36 }
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 37, offset: 36 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              },
              {
                type: 'text',
                value: ' function. Calls the ',
                position: {
                  start: { line: 1, column: 46, offset: 45 },
                  end: { line: 1, column: 67, offset: 66 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 67, offset: 66 },
                  end: { line: 1, column: 74, offset: 73 }
                }
              },
              {
                type: 'text',
                value: ' function with the provided arguments and catches any errors thrown by the ',
                position: {
                  start: { line: 1, column: 74, offset: 73 },
                  end: { line: 1, column: 149, offset: 148 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 149, offset: 148 },
                  end: { line: 1, column: 156, offset: 155 }
                }
              },
              {
                type: 'text',
                value: ' function with the ',
                position: {
                  start: { line: 1, column: 156, offset: 155 },
                  end: { line: 1, column: 175, offset: 174 }
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 175, offset: 174 },
                  end: { line: 1, column: 184, offset: 183 }
                }
              },
              {
                type: 'text',
                value: ' function. If the ',
                position: {
                  start: { line: 1, column: 184, offset: 183 },
                  end: { line: 1, column: 202, offset: 201 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 202, offset: 201 },
                  end: { line: 1, column: 209, offset: 208 }
                }
              },
              {
                type: 'text',
                value: ' function is asynchronous and returns a rejected promise, the ',
                position: {
                  start: { line: 1, column: 209, offset: 208 },
                  end: { line: 1, column: 271, offset: 270 }
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 271, offset: 270 },
                  end: { line: 1, column: 280, offset: 279 }
                }
              },
              {
                type: 'text',
                value: ' function will execute with the value of the rejected promise. The ',
                position: {
                  start: { line: 1, column: 280, offset: 279 },
                  end: { line: 1, column: 347, offset: 346 }
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 347, offset: 346 },
                  end: { line: 1, column: 356, offset: 355 }
                }
              },
              {
                type: 'text',
                value: ' function is called with the error and all arguments supplied to the ',
                position: {
                  start: { line: 1, column: 356, offset: 355 },
                  end: { line: 1, column: 425, offset: 424 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 425, offset: 424 },
                  end: { line: 1, column: 432, offset: 431 }
                }
              },
              {
                type: 'text',
                value: ' function.',
                position: {
                  start: { line: 1, column: 432, offset: 431 },
                  end: { line: 1, column: 442, offset: 441 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 442, offset: 441 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const throwsIfOdd = number => {\n' +
              '  if (number % 2 == 1) {\n' +
              '    throw new Error(`${number} is odd`)\n' +
              '  }\n' +
              "  console.log('did not throw for', number)\n" +
              '}\n' +
              '\n' +
              'const errorHandler = tryCatch(throwsIfOdd, (error, number) => {\n' +
              "  console.log('caught error from number', number)\n" +
              '  console.log(error)\n' +
              '})\n' +
              '\n' +
              'errorHandler(2) // did not throw for 2\n' +
              'errorHandler(3) // caught error from number 3\n' +
              '                // Error: 3 is odd\n',
            position: {
              start: { line: 3, column: 1, offset: 443 },
              end: { line: 20, column: 4, offset: 880 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'tryCatch',
                position: {
                  start: { line: 22, column: 1, offset: 882 },
                  end: { line: 22, column: 11, offset: 892 }
                }
              },
              {
                type: 'text',
                value: ' behaves eagerly (executes immediately with a single call and not with multiple calls like a higher order function) when passed any amount of nonfunction (primitive or object) arguments before the ',
                position: {
                  start: { line: 22, column: 11, offset: 892 },
                  end: { line: 22, column: 208, offset: 1089 }
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 22, column: 208, offset: 1089 },
                  end: { line: 22, column: 215, offset: 1096 }
                }
              },
              {
                type: 'text',
                value: ' and ',
                position: {
                  start: { line: 22, column: 215, offset: 1096 },
                  end: { line: 22, column: 220, offset: 1101 }
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 22, column: 220, offset: 1101 },
                  end: { line: 22, column: 229, offset: 1110 }
                }
              },
              {
                type: 'text',
                value: ' functions.',
                position: {
                  start: { line: 22, column: 229, offset: 1110 },
                  end: { line: 22, column: 240, offset: 1121 }
                }
              }
            ],
            position: {
              start: { line: 22, column: 1, offset: 882 },
              end: { line: 22, column: 240, offset: 1121 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'tryCatch(1, 2, 3, function throwSum(...numbers) {\n' +
              '  const sum = numbers.reduce(add)\n' +
              '  throw new Error(`the sum is ${sum}`)\n' +
              '}, function logErrorMessage(error) {\n' +
              '  console.error(error.message) // the sum is 6\n' +
              '})',
            position: {
              start: { line: 24, column: 1, offset: 1123 },
              end: { line: 33, column: 4, offset: 1392 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 33, column: 4, offset: 1392 }
        }
      }
    }
  },
  {
    name: 'append',
    synopsis: '```coffeescript [specscript]\n' +
      'append(\n' +
      '  item string|Array,\n' +
      ')(value string|Array) -> string|array\n' +
      '```',
    description: 'Append a string or an array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import append from 'https://unpkg.com/rubico/dist/x/append.es.js'\n" +
      '\n' +
      "const myArray = ['orange', 'apple']\n" +
      '\n' +
      '{\n' +
      "  const result = append(['ananas'])(myArray)\n" +
      "  console.log(result) // ['orange', 'apple', 'ananas']\n" +
      '}\n' +
      '\n' +
      '{\n' +
      "  const result = append('ananas')(myArray)\n" +
      "  console.log(result) // ['orange', 'apple', 'ananas']\n" +
      '}\n' +
      '\n' +
      '{\n' +
      "  const result = append('world')('hello ')\n" +
      "  console.log(result) // 'hello world'\n" +
      '}\n' +
      '```',
    since: '1.7.3',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'append',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'append(\n' +
              '  item string|Array,\n' +
              ')(value string|Array) -> string|array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 99 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 99 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Append a string or an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 29, offset: 28 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import append from 'https://unpkg.com/rubico/dist/x/append.es.js'\n" +
              '\n' +
              "const myArray = ['orange', 'apple']\n" +
              '\n' +
              '{\n' +
              "  const result = append(['ananas'])(myArray)\n" +
              "  console.log(result) // ['orange', 'apple', 'ananas']\n" +
              '}\n' +
              '\n' +
              '{\n' +
              "  const result = append('ananas')(myArray)\n" +
              "  console.log(result) // ['orange', 'apple', 'ananas']\n" +
              '}\n' +
              '\n' +
              '{\n' +
              "  const result = append('world')('hello ')\n" +
              "  console.log(result) // 'hello world'\n" +
              '}',
            position: {
              start: { line: 3, column: 1, offset: 30 },
              end: { line: 22, column: 4, offset: 458 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 22, column: 4, offset: 458 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.7.3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  },
  {
    name: 'callProp',
    synopsis: '```coffeescript [specscript]\n' +
      'callProp(property string, ...args)(object) -> object[property](...args)\n' +
      '```',
    description: 'Calls a property on an object with arguments.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import callProp from 'https://unpkg.com/rubico/dist/x/callProp.es.js'\n" +
      '\n' +
      "const priceRoundedDown = callProp('toFixed', 2)(5.992)\n" +
      "console.log('priceRoundedDown:', priceRoundedDown) // '5.99'\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'callProp',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'callProp(property string, ...args)(object) -> object[property](...args)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 104 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 104 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Calls a property on an object with arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import callProp from 'https://unpkg.com/rubico/dist/x/callProp.es.js'\n" +
              '\n' +
              "const priceRoundedDown = callProp('toFixed', 2)(5.992)\n" +
              "console.log('priceRoundedDown:', priceRoundedDown) // '5.99'",
            position: {
              start: { line: 3, column: 1, offset: 47 },
              end: { line: 8, column: 4, offset: 264 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 264 }
        }
      }
    }
  },
  {
    name: 'defaultsDeep',
    synopsis: '```coffeescript [specscript]\n' +
      'var defaultCollection Array|Object,\n' +
      '  value Array|Object\n' +
      '\n' +
      'defaultsDeep(defaultCollection)(value) -> Array|Object\n' +
      '```',
    description: 'Deeply assign default values to an array or object by an array or object of possibly nested default values.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import defaultsDeep from 'https://unpkg.com/rubico/dist/x/defaultsDeep.es.js'\n" +
      '\n' +
      'const defaultUser = defaultsDeep({\n' +
      "  name: 'placeholder',\n" +
      '  images: [\n' +
      "    { url: 'https://via.placeholder.com/150' },\n" +
      "    { url: 'https://via.placeholder.com/150' },\n" +
      "    { url: 'https://via.placeholder.com/150' },\n" +
      '  ],\n' +
      '})\n' +
      '\n' +
      'console.log(defaultUser({\n' +
      "  name: 'George',\n" +
      "  images: [{ url: 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com' }],\n" +
      '}))\n' +
      '// {\n' +
      "//   name: 'George',\n" +
      '//   images: [\n' +
      "//    { url: 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com' },\n" +
      "//    { url: 'https://via.placeholder.com/150' },\n" +
      "//    { url: 'https://via.placeholder.com/150' },\n" +
      '//   ],\n' +
      '// }\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'defaultsDeep',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var defaultCollection Array|Object,\n' +
              '  value Array|Object\n' +
              '\n' +
              'defaultsDeep(defaultCollection)(value) -> Array|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 145 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 145 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Deeply assign default values to an array or object by an array or object of possibly nested default values.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 108, offset: 107 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 108, offset: 107 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import defaultsDeep from 'https://unpkg.com/rubico/dist/x/defaultsDeep.es.js'\n" +
              '\n' +
              'const defaultUser = defaultsDeep({\n' +
              "  name: 'placeholder',\n" +
              '  images: [\n' +
              "    { url: 'https://via.placeholder.com/150' },\n" +
              "    { url: 'https://via.placeholder.com/150' },\n" +
              "    { url: 'https://via.placeholder.com/150' },\n" +
              '  ],\n' +
              '})\n' +
              '\n' +
              'console.log(defaultUser({\n' +
              "  name: 'George',\n" +
              "  images: [{ url: 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com' }],\n" +
              '}))\n' +
              '// {\n' +
              "//   name: 'George',\n" +
              '//   images: [\n' +
              "//    { url: 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com' },\n" +
              "//    { url: 'https://via.placeholder.com/150' },\n" +
              "//    { url: 'https://via.placeholder.com/150' },\n" +
              '//   ],\n' +
              '// }',
            position: {
              start: { line: 3, column: 1, offset: 109 },
              end: { line: 27, column: 4, offset: 817 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 27, column: 4, offset: 817 }
        }
      }
    }
  },
  {
    name: 'differenceWith',
    synopsis: '```coffeescript [specscript]\n' +
      'differenceWith(\n' +
      '  comparator (any, any)=>Promise|boolean,\n' +
      '  allValues Array,\n' +
      ')(values Array) -> someOrAllValues Array\n' +
      '```',
    description: 'Create an array of all the values in an array that are not in another array as dictated by a comparator.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import differenceWith from 'https://unpkg.com/rubico/dist/x/differenceWith.es.js'\n" +
      "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  differenceWith(isDeepEqual, [{ a: 1 }, { b: 2 }, { c: 3 }])([{ b: 2 }]),\n' +
      ') // [{ a: 1 }, { c: 3 }]\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'differenceWith',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'differenceWith(\n' +
              '  comparator (any, any)=>Promise|boolean,\n' +
              '  allValues Array,\n' +
              ')(values Array) -> someOrAllValues Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 150 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 150 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create an array of all the values in an array that are not in another array as dictated by a comparator.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 105, offset: 104 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import differenceWith from 'https://unpkg.com/rubico/dist/x/differenceWith.es.js'\n" +
              "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  differenceWith(isDeepEqual, [{ a: 1 }, { b: 2 }, { c: 3 }])([{ b: 2 }]),\n' +
              ') // [{ a: 1 }, { c: 3 }]',
            position: {
              start: { line: 3, column: 1, offset: 106 },
              end: { line: 10, column: 4, offset: 409 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 409 }
        }
      }
    }
  },
  {
    name: 'filterOut',
    synopsis: '```coffeescript [specscript]\n' +
      'filterOut(\n' +
      '  arrayPredicate (value any, index number, array Array)=>Promise|boolean\n' +
      ')(array) -> rejectedArray Promise|Array\n' +
      '\n' +
      'filterOut(\n' +
      '  objectPredicate (value any, key string, object Object)=>Promise|boolean\n' +
      ')(object) -> rejectedObject Promise|Object\n' +
      '\n' +
      'filterOut(\n' +
      '  setPredicate (value any, value, set Set)=>Promise|boolean\n' +
      ')(set) -> rejectedSet Promise|Set\n' +
      '\n' +
      'filterOut(\n' +
      '  mapPredicate (value any, key any, map Map)=>Promise|boolean\n' +
      ')(map) -> rejectedMap Promise|Map\n' +
      '\n' +
      'filterOut(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(generatorFunction GeneratorFunction) -> rejectingGeneratorFunction GeneratorFunction\n' +
      '\n' +
      'filterOut(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(asyncGeneratorFunction AsyncGeneratorFunction) -> rejectingAsyncGeneratorFunction AsyncGeneratorFunction\n' +
      '\n' +
      'filterOut(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(reducer Reducer) -> rejectingReducer Reducer\n' +
      '```',
    description: 'The inverse of `filter`. Values that test true by the predicate are filtered out, or "rejected".',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'filterOut',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'filterOut(\n' +
              '  arrayPredicate (value any, index number, array Array)=>Promise|boolean\n' +
              ')(array) -> rejectedArray Promise|Array\n' +
              '\n' +
              'filterOut(\n' +
              '  objectPredicate (value any, key string, object Object)=>Promise|boolean\n' +
              ')(object) -> rejectedObject Promise|Object\n' +
              '\n' +
              'filterOut(\n' +
              '  setPredicate (value any, value, set Set)=>Promise|boolean\n' +
              ')(set) -> rejectedSet Promise|Set\n' +
              '\n' +
              'filterOut(\n' +
              '  mapPredicate (value any, key any, map Map)=>Promise|boolean\n' +
              ')(map) -> rejectedMap Promise|Map\n' +
              '\n' +
              'filterOut(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(generatorFunction GeneratorFunction) -> rejectingGeneratorFunction GeneratorFunction\n' +
              '\n' +
              'filterOut(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(asyncGeneratorFunction AsyncGeneratorFunction) -> rejectingAsyncGeneratorFunction AsyncGeneratorFunction\n' +
              '\n' +
              'filterOut(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(reducer Reducer) -> rejectingReducer Reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 29, column: 4, offset: 899 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 899 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The inverse of ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 }
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 24, offset: 23 }
                }
              },
              {
                type: 'text',
                value: '. Values that test true by the predicate are filtered out, or "rejected".',
                position: {
                  start: { line: 1, column: 24, offset: 23 },
                  end: { line: 1, column: 97, offset: 96 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 97, offset: 96 }
        }
      }
    }
  },
  {
    name: 'find',
    synopsis: '```coffeescript [specscript]\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: (any, T)=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '  foldable Foldable<T>,\n' +
      '  result Promise|T|undefined\n' +
      '\n' +
      'find(predicate)(foldable) -> result\n' +
      '```',
    description: 'Get the first item in a foldable collection that matches a predicate.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import find from 'https://unpkg.com/rubico/dist/x/find.es.js'\n" +
      '\n' +
      'const users = [\n' +
      "  { name: 'John', age: 16 },\n" +
      "  { name: 'Jill', age: 32 },\n" +
      "  { name: 'George', age: 51 },\n" +
      ']\n' +
      '\n' +
      'console.log(\n' +
      '  find(user => user.age > 50)(users),\n' +
      ") // { name: 'George', age: 51 }\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'find',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: (any, T)=>any }|Object<T>\n' +
              '\n' +
              'var T any,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '  foldable Foldable<T>,\n' +
              '  result Promise|T|undefined\n' +
              '\n' +
              'find(predicate)(foldable) -> result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 245 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 245 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the first item in a foldable collection that matches a predicate.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 70, offset: 69 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 70, offset: 69 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import find from 'https://unpkg.com/rubico/dist/x/find.es.js'\n" +
              '\n' +
              'const users = [\n' +
              "  { name: 'John', age: 16 },\n" +
              "  { name: 'Jill', age: 32 },\n" +
              "  { name: 'George', age: 51 },\n" +
              ']\n' +
              '\n' +
              'console.log(\n' +
              '  find(user => user.age > 50)(users),\n' +
              ") // { name: 'George', age: 51 }",
            position: {
              start: { line: 3, column: 1, offset: 71 },
              end: { line: 15, column: 4, offset: 356 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 356 }
        }
      }
    }
  },
  {
    name: 'findIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'findIndex(predicate function)(array Array) -> index Promise|number\n' +
      '```',
    description: 'Returns the index of the first element in an array that satisfies the predicate. Returns -1 if no element satisfies the predicate.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import findIndex from 'https://unpkg.com/rubico/dist/x/findIndex.es.js'\n" +
      '\n' +
      'const oddNumberIndex = findIndex(function isOdd(number) {\n' +
      '  return number % 2 == 1\n' +
      '})([2, 3, 5])\n' +
      '\n' +
      'console.log(oddNumberIndex) // 1\n' +
      '```',
    since: '1.6.26',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'findIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'findIndex(predicate function)(array Array) -> index Promise|number',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 99 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 99 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Returns the index of the first element in an array that satisfies the predicate. Returns -1 if no element satisfies the predicate.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 131, offset: 130 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 131, offset: 130 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import findIndex from 'https://unpkg.com/rubico/dist/x/findIndex.es.js'\n" +
              '\n' +
              'const oddNumberIndex = findIndex(function isOdd(number) {\n' +
              '  return number % 2 == 1\n' +
              '})([2, 3, 5])\n' +
              '\n' +
              'console.log(oddNumberIndex) // 1',
            position: {
              start: { line: 3, column: 1, offset: 132 },
              end: { line: 11, column: 4, offset: 366 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 366 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.6.26',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'first',
    synopsis: '```coffeescript [specscript]\n' +
      'var value Array|string\n' +
      '\n' +
      'first(value) -> any\n' +
      '```',
    description: 'Get the first item of a collection\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import first from 'https://unpkg.com/rubico/dist/x/first.es.js'\n" +
      '\n' +
      'console.log(first([1, 2, 3])) // 1\n' +
      "console.log(first('abc')) // 'a'\n" +
      'console.log(first([])) // undefined\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'first',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var value Array|string\n\nfirst(value) -> any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 76 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 76 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the first item of a collection',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 35, offset: 34 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import first from 'https://unpkg.com/rubico/dist/x/first.es.js'\n" +
              '\n' +
              'console.log(first([1, 2, 3])) // 1\n' +
              "console.log(first('abc')) // 'a'\n" +
              'console.log(first([])) // undefined',
            position: {
              start: { line: 3, column: 1, offset: 36 },
              end: { line: 9, column: 4, offset: 235 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 235 }
        }
      }
    }
  },
  {
    name: 'flatten',
    synopsis: '```coffeescript [specscript]\n' +
      'Stream<T> = { read: ()=>T, write: T=>() }\n' +
      'Monad<T> = Array<T>|String<T>|Set<T>\n' +
      '  |TypedArray<T>|Stream<T>|Iterator<T>|AsyncIterator<T>\n' +
      '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  monad Monad<Monad<T>|Foldable<T>|T>,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<Monad<T>|Foldable<T>|T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<Monad<T>|Foldable<T>|T>,\n' +
      '  reducer Reducer<Monad<T>|Foldable<T>|T>\n' +
      '\n' +
      'flatten(monad) -> Monad<T>\n' +
      '\n' +
      'flatten(generatorFunction) -> ...args=>Generator<T>\n' +
      '\n' +
      'flatten(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
      '\n' +
      'flatten(reducer) -> Reducer<T>\n' +
      '```',
    description: 'Flatten a collection. Works in transducer position.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import flatten from 'https://unpkg.com/rubico/dist/x/flatten.es.js'\n" +
      '\n' +
      'flatten([\n' +
      '  [1, 1],\n' +
      '  new Set([2, 2]),\n' +
      '  (function* () { yield 3; yield 3 })(),\n' +
      '  (async function* () { yield 4; yield 4 })(),\n' +
      '  { a: 5, b: 5 },\n' +
      '  6,\n' +
      '  Promise.resolve(7),\n' +
      '  new Uint8Array([8]),\n' +
      ']).then(console.log)\n' +
      '// [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4]\n' +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      '  [[1], [2], [3], [4], [5]].reduce(flatten(add), 0),\n' +
      ') // 15\n' +
      '```',
    TODO: 'flatten for each type',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'flatten',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Stream<T> = { read: ()=>T, write: T=>() }\n' +
              'Monad<T> = Array<T>|String<T>|Set<T>\n' +
              '  |TypedArray<T>|Stream<T>|Iterator<T>|AsyncIterator<T>\n' +
              '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
              'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
              '\n' +
              'var T any,\n' +
              '  monad Monad<Monad<T>|Foldable<T>|T>,\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<Monad<T>|Foldable<T>|T>,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<Monad<T>|Foldable<T>|T>,\n' +
              '  reducer Reducer<Monad<T>|Foldable<T>|T>\n' +
              '\n' +
              'flatten(monad) -> Monad<T>\n' +
              '\n' +
              'flatten(generatorFunction) -> ...args=>Generator<T>\n' +
              '\n' +
              'flatten(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
              '\n' +
              'flatten(reducer) -> Reducer<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 23, column: 4, offset: 766 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 766 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Flatten a collection. Works in transducer position.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 52, offset: 51 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import flatten from 'https://unpkg.com/rubico/dist/x/flatten.es.js'\n" +
              '\n' +
              'flatten([\n' +
              '  [1, 1],\n' +
              '  new Set([2, 2]),\n' +
              '  (function* () { yield 3; yield 3 })(),\n' +
              '  (async function* () { yield 4; yield 4 })(),\n' +
              '  { a: 5, b: 5 },\n' +
              '  6,\n' +
              '  Promise.resolve(7),\n' +
              '  new Uint8Array([8]),\n' +
              ']).then(console.log)\n' +
              '// [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4]\n' +
              '\n' +
              'const add = (a, b) => a + b\n' +
              '\n' +
              'console.log(\n' +
              '  [[1], [2], [3], [4], [5]].reduce(flatten(add), 0),\n' +
              ') // 15',
            position: {
              start: { line: 3, column: 1, offset: 53 },
              end: { line: 23, column: 4, offset: 512 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 512 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'flatten for each type',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 22, offset: 21 }
        }
      }
    }
  },
  {
    name: 'groupBy',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var property any,\n' +
      '  resolver any=>Promise|any,\n' +
      '  value Foldable\n' +
      '\n' +
      'groupBy(property)(value) -> groupedByProperty Map<any=>Array>\n' +
      '\n' +
      'groupBy(resolver)(value) -> groupedByResolver Promise|Map<any=>Array>\n' +
      '```',
    description: 'Group a foldable collection into a Map of arrays by a property on each of its elements.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import groupBy from 'https://unpkg.com/rubico/dist/x/groupBy.es.js'\n" +
      '\n' +
      'console.log(\n' +
      "  groupBy('age')([\n" +
      "    { name: 'George', age: 22 },\n" +
      "    { name: 'Jane', age: 22 },\n" +
      "    { name: 'Henry', age: 23 },\n" +
      '  ]),\n' +
      ')\n' +
      '// Map {\n' +
      "//   22 => [{ name: 'George', age: 22 }, { name: 'Jane', age: 22 }],\n" +
      "//   23 => [{ name: 'Henry', age: 23 }],\n" +
      '// }\n' +
      '```\n' +
      '\n' +
      'Additionally, pass a resolver in property position to resolve a value for group membership for each item.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import groupBy from 'https://unpkg.com/rubico/dist/x/groupBy.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  groupBy(\n' +
      '    word => word.toLowerCase(),\n' +
      "  )(['Hello', 'hello', 'Hey']),\n" +
      ") // Map { 'hello' => ['Hello', 'hello'], 'hey' => ['Hey'] }\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'groupBy',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
              '\n' +
              'var property any,\n' +
              '  resolver any=>Promise|any,\n' +
              '  value Foldable\n' +
              '\n' +
              'groupBy(property)(value) -> groupedByProperty Map<any=>Array>\n' +
              '\n' +
              'groupBy(resolver)(value) -> groupedByResolver Promise|Map<any=>Array>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 12, column: 4, offset: 347 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 347 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Group a foldable collection into a Map of arrays by a property on each of its elements.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 88, offset: 87 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 88, offset: 87 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import groupBy from 'https://unpkg.com/rubico/dist/x/groupBy.es.js'\n" +
              '\n' +
              'console.log(\n' +
              "  groupBy('age')([\n" +
              "    { name: 'George', age: 22 },\n" +
              "    { name: 'Jane', age: 22 },\n" +
              "    { name: 'Henry', age: 23 },\n" +
              '  ]),\n' +
              ')\n' +
              '// Map {\n' +
              "//   22 => [{ name: 'George', age: 22 }, { name: 'Jane', age: 22 }],\n" +
              "//   23 => [{ name: 'Henry', age: 23 }],\n" +
              '// }',
            position: {
              start: { line: 3, column: 1, offset: 89 },
              end: { line: 17, column: 4, offset: 448 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Additionally, pass a resolver in property position to resolve a value for group membership for each item.',
                position: {
                  start: { line: 19, column: 1, offset: 450 },
                  end: { line: 19, column: 106, offset: 555 }
                }
              }
            ],
            position: {
              start: { line: 19, column: 1, offset: 450 },
              end: { line: 19, column: 106, offset: 555 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import groupBy from 'https://unpkg.com/rubico/dist/x/groupBy.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  groupBy(\n' +
              '    word => word.toLowerCase(),\n' +
              "  )(['Hello', 'hello', 'Hey']),\n" +
              ") // Map { 'hello' => ['Hello', 'hello'], 'hey' => ['Hey'] }",
            position: {
              start: { line: 21, column: 1, offset: 557 },
              end: { line: 29, column: 4, offset: 805 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 805 }
        }
      }
    }
  },
  {
    name: 'has',
    synopsis: '```coffeescript [specscript]\n' +
      'has(key any)(container Set|Map|{ has: function }|Object) -> Promise|boolean\n' +
      '```',
    description: 'Check if a collection has a key.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import has from 'https://unpkg.com/rubico/dist/x/has.es.js'\n" +
      '\n' +
      'console.log(\n' +
      "  has('a')({ a: 1, b: 2, c: 3 }),\n" +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  has('a')({}),\n" +
      ') // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'has',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'has(key any)(container Set|Map|{ has: function }|Object) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 108 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 108 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Check if a collection has a key.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import has from 'https://unpkg.com/rubico/dist/x/has.es.js'\n" +
              '\n' +
              'console.log(\n' +
              "  has('a')({ a: 1, b: 2, c: 3 }),\n" +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  has('a')({}),\n" +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 34 },
              end: { line: 13, column: 4, offset: 223 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 223 }
        }
      }
    }
  },
  {
    name: 'heapUsedInLoop',
    catchphrase: 'max and avg heap used in loop',
    synopsis: 'heapUsedInLoop(\n' +
      '  desc string,\n' +
      '  loopCount number,\n' +
      '  func (loop number)=>any\n' +
      ') -> ()',
    description: '**heapUsedInLoop** is a memory usage measurement function. Supply `description`, `loopCount`, and a function `func` for that function to be run `loopCount` times, finally logging average and max heap used per loop in terms of megabytes MiB.\n' +
      '\n' +
      '```javascript\n' +
      "heapUsedInLoop('my-description', 1e5, function () {\n" +
      '  return 1 + 1\n' +
      '}) /*\n' +
      '0 5.88 MiB\n' +
      '1 5.92 MiB\n' +
      '...\n' +
      '99997 7.34 MiB\n' +
      '99998 7.34 MiB\n' +
      '99999 7.35 MiB\n' +
      'my-description: 1e+5: {\n' +
      '  "max": "7.15 MiB",\n' +
      '  "avg": "5.50 MiB"\n' +
      '}\n' +
      '```',
    'node-only': '',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'heapUsedInLoop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 15, offset: 14 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 15, offset: 14 }
        }
      },
      catchphrase: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'max and avg heap used in loop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 30, offset: 29 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'heapUsedInLoop(\n' +
                  'desc string,\n' +
                  'loopCount number,\n' +
                  'func (loop number)=>any\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 8, offset: 84 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 8, offset: 84 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 8, offset: 84 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'strong',
                children: [
                  {
                    type: 'text',
                    value: 'heapUsedInLoop',
                    position: {
                      start: { line: 1, column: 3, offset: 2 },
                      end: { line: 1, column: 17, offset: 16 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 }
                }
              },
              {
                type: 'text',
                value: ' is a memory usage measurement function. Supply ',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 67, offset: 66 }
                }
              },
              {
                type: 'inlineCode',
                value: 'description',
                position: {
                  start: { line: 1, column: 67, offset: 66 },
                  end: { line: 1, column: 80, offset: 79 }
                }
              },
              {
                type: 'text',
                value: ', ',
                position: {
                  start: { line: 1, column: 80, offset: 79 },
                  end: { line: 1, column: 82, offset: 81 }
                }
              },
              {
                type: 'inlineCode',
                value: 'loopCount',
                position: {
                  start: { line: 1, column: 82, offset: 81 },
                  end: { line: 1, column: 93, offset: 92 }
                }
              },
              {
                type: 'text',
                value: ', and a function ',
                position: {
                  start: { line: 1, column: 93, offset: 92 },
                  end: { line: 1, column: 110, offset: 109 }
                }
              },
              {
                type: 'inlineCode',
                value: 'func',
                position: {
                  start: { line: 1, column: 110, offset: 109 },
                  end: { line: 1, column: 116, offset: 115 }
                }
              },
              {
                type: 'text',
                value: ' for that function to be run ',
                position: {
                  start: { line: 1, column: 116, offset: 115 },
                  end: { line: 1, column: 145, offset: 144 }
                }
              },
              {
                type: 'inlineCode',
                value: 'loopCount',
                position: {
                  start: { line: 1, column: 145, offset: 144 },
                  end: { line: 1, column: 156, offset: 155 }
                }
              },
              {
                type: 'text',
                value: ' times, finally logging average and max heap used per loop in terms of megabytes MiB.',
                position: {
                  start: { line: 1, column: 156, offset: 155 },
                  end: { line: 1, column: 241, offset: 240 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 241, offset: 240 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: "heapUsedInLoop('my-description', 1e5, function () {\n" +
              '  return 1 + 1\n' +
              '}) /*\n' +
              '0 5.88 MiB\n' +
              '1 5.92 MiB\n' +
              '...\n' +
              '99997 7.34 MiB\n' +
              '99998 7.34 MiB\n' +
              '99999 7.35 MiB\n' +
              'my-description: 1e+5: {\n' +
              '  "max": "7.15 MiB",\n' +
              '  "avg": "5.50 MiB"\n' +
              '}',
            position: {
              start: { line: 3, column: 1, offset: 242 },
              end: { line: 17, column: 4, offset: 470 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 17, column: 4, offset: 470 }
        }
      },
      'node-only': {
        type: 'root',
        children: [],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 1, offset: 0 }
        }
      }
    }
  },
  {
    name: 'identity',
    synopsis: '```coffeescript [specscript]\nidentity(value any) -> value\n```',
    description: 'Pass a value and receive the same value back.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import identity from 'https://unpkg.com/rubico/dist/x/identity.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  identity(1),\n' +
      ') // 1\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'identity',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'identity(value any) -> value',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 61 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 61 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Pass a value and receive the same value back.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 46, offset: 45 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import identity from 'https://unpkg.com/rubico/dist/x/identity.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  identity(1),\n' +
              ') // 1',
            position: {
              start: { line: 3, column: 1, offset: 47 },
              end: { line: 9, column: 4, offset: 183 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 183 }
        }
      }
    }
  },
  {
    name: 'includes',
    synopsis: '```coffeescript [specscript]\n' +
      'includes(value any)(container Array|String|Object) -> boolean\n' +
      '```',
    description: 'Check if a collection includes another value by [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero).\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import includes from 'https://unpkg.com/rubico/dist/x/includes.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  includes(5)([1, 2, 3, 4, 5])\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  includes(5)([1, 2, 3])\n' +
      ') // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'includes',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'includes(value any)(container Array|String|Object) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 94 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 94 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Check if a collection includes another value by ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 49, offset: 48 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero',
                children: [
                  {
                    type: 'text',
                    value: 'SameValueZero',
                    position: {
                      start: { line: 1, column: 50, offset: 49 },
                      end: { line: 1, column: 63, offset: 62 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 49, offset: 48 },
                  end: { line: 1, column: 127, offset: 126 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 127, offset: 126 },
                  end: { line: 1, column: 128, offset: 127 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 128, offset: 127 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import includes from 'https://unpkg.com/rubico/dist/x/includes.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  includes(5)([1, 2, 3, 4, 5])\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  includes(5)([1, 2, 3])\n' +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 129 },
              end: { line: 13, column: 4, offset: 334 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 334 }
        }
      }
    }
  },
  {
    name: 'isDeepEqual',
    synopsis: '```coffeescript [specscript]\n' +
      'Nested<T> = Array<Array<T>|Object<T>|Iterable<T>|T>|Object<Array<T>|Object<T>|Iterable<T>|T>\n' +
      '\n' +
      'var left Nested,\n' +
      '  right Nested\n' +
      '\n' +
      'isDeepEqual(left, right) -> boolean\n' +
      '```',
    description: 'Check two values for deep [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) equality.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [3] }),\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [5] }),\n' +
      ') // false\n' +
      '```\n' +
      '\n' +
      'When passed a resolver function as the left or right argument or resolvers as both arguments, returns a function that resolves the value by the resolver before performing the deep equal comparison.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
      '\n' +
      'const isPropADeepEqualTo123Array = isDeepEqual(object => object.a, [1, 2, 3])\n' +
      '\n' +
      'console.log(\n' +
      '  isPropADeepEqualTo123Array({ a: [1, 2, 3] }),\n' +
      ') // true\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isDeepEqual',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 12, offset: 11 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Nested<T> = Array<Array<T>|Object<T>|Iterable<T>|T>|Object<Array<T>|Object<T>|Iterable<T>|T>\n' +
              '\n' +
              'var left Nested,\n' +
              '  right Nested\n' +
              '\n' +
              'isDeepEqual(left, right) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 195 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 195 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Check two values for deep ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 27, offset: 26 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero',
                children: [
                  {
                    type: 'text',
                    value: 'SameValueZero',
                    position: {
                      start: { line: 1, column: 28, offset: 27 },
                      end: { line: 1, column: 41, offset: 40 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 27, offset: 26 },
                  end: { line: 1, column: 105, offset: 104 }
                }
              },
              {
                type: 'text',
                value: ' equality.',
                position: {
                  start: { line: 1, column: 105, offset: 104 },
                  end: { line: 1, column: 115, offset: 114 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 115, offset: 114 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [3] }),\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [5] }),\n' +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 116 },
              end: { line: 13, column: 4, offset: 397 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'When passed a resolver function as the left or right argument or resolvers as both arguments, returns a function that resolves the value by the resolver before performing the deep equal comparison.',
                position: {
                  start: { line: 15, column: 1, offset: 399 },
                  end: { line: 15, column: 198, offset: 596 }
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 399 },
              end: { line: 15, column: 198, offset: 596 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
              '\n' +
              'const isPropADeepEqualTo123Array = isDeepEqual(object => object.a, [1, 2, 3])\n' +
              '\n' +
              'console.log(\n' +
              '  isPropADeepEqualTo123Array({ a: [1, 2, 3] }),\n' +
              ') // true',
            position: {
              start: { line: 17, column: 1, offset: 598 },
              end: { line: 25, column: 4, offset: 855 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 25, column: 4, offset: 855 }
        }
      }
    }
  },
  {
    name: 'isEmpty',
    synopsis: '```coffeescript [specscript]\nisEmpty(value any) -> boolean\n```',
    description: 'Check if a value is empty.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isEmpty from 'https://unpkg.com/rubico/dist/x/isEmpty.es.js'\n" +
      '\n' +
      "console.log('', isEmpty('')) // true\n" +
      'console.log([], isEmpty([])) // true\n' +
      'console.log({}, isEmpty({})) // true\n' +
      'console.log([1, 2, 3], isEmpty([1, 2, 3])) // false\n' +
      'console.log(new Set([1, 2, 3]), isEmpty(new Set([1, 2, 3]))) // false\n' +
      'console.log({ a: 1, b: 2, c: 3 }, isEmpty({ a: 1, b: 2, c: 3 })) // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isEmpty',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isEmpty(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 62 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 62 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Check if a value is empty.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 27, offset: 26 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isEmpty from 'https://unpkg.com/rubico/dist/x/isEmpty.es.js'\n" +
              '\n' +
              "console.log('', isEmpty('')) // true\n" +
              'console.log([], isEmpty([])) // true\n' +
              'console.log({}, isEmpty({})) // true\n' +
              'console.log([1, 2, 3], isEmpty([1, 2, 3])) // false\n' +
              'console.log(new Set([1, 2, 3]), isEmpty(new Set([1, 2, 3]))) // false\n' +
              'console.log({ a: 1, b: 2, c: 3 }, isEmpty({ a: 1, b: 2, c: 3 })) // false',
            position: {
              start: { line: 3, column: 1, offset: 28 },
              end: { line: 12, column: 4, offset: 434 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 434 }
        }
      }
    }
  },
  {
    name: 'isFunction',
    synopsis: '```coffeescript [specscript]\nisFunction(value any) -> boolean\n```',
    description: 'Determine whether a value is a function.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isFunction from 'https://unpkg.com/rubico/dist/x/isFunction.es.js'\n" +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      '  isFunction(add),\n' +
      ') // true\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isFunction',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isFunction(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 65 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 65 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is a function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isFunction from 'https://unpkg.com/rubico/dist/x/isFunction.es.js'\n" +
              '\n' +
              'const add = (a, b) => a + b\n' +
              '\n' +
              'console.log(\n' +
              '  isFunction(add),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 42 },
              end: { line: 11, column: 4, offset: 218 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 218 }
        }
      }
    }
  },
  {
    name: '_isIn',
    synopsis: '```coffeescript [specscript]\n' +
      '_isIn(value any, container Array|Object|String|Set|Map) -> boolean\n' +
      '```',
    description: 'Counterpart to includes. Check if a collection includes another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isIn from 'https://unpkg.com/rubico/dist/x/isIn.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  isIn(1, [1, 2, 3])\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(4, [1, 2, 3])\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(1, { a: 1 })\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(2, { a: 1 })\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('a', 'abc')\n" +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('ab', 'abc')\n" +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('d', 'abc')\n" +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(1, new Set([1, 2, 3]))\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(4, new Set([1, 2, 3]))\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(1, new Map([[1, 1], [2, 2], [3, 3]]))\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(4, new Map([[1, 1], [2, 2], [3, 3]]))\n' +
      ') // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '_isIn',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: '_isIn(value any, container Array|Object|String|Set|Map) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 99 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 99 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Counterpart to includes. Check if a collection includes another value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 71, offset: 70 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 71, offset: 70 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isIn from 'https://unpkg.com/rubico/dist/x/isIn.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  isIn(1, [1, 2, 3])\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(4, [1, 2, 3])\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(1, { a: 1 })\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(2, { a: 1 })\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('a', 'abc')\n" +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('ab', 'abc')\n" +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('d', 'abc')\n" +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(1, new Set([1, 2, 3]))\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(4, new Set([1, 2, 3]))\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(1, new Map([[1, 1], [2, 2], [3, 3]]))\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(4, new Map([[1, 1], [2, 2], [3, 3]]))\n' +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 72 },
              end: { line: 49, column: 4, offset: 722 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 49, column: 4, offset: 722 }
        }
      }
    }
  },
  {
    name: 'isIn',
    synopsis: '```coffeescript [specscript]\n' +
      'isIn(container Array|Object|String|Set|Map)(value any) -> boolean\n' +
      '```',
    description: 'Counterpart to includes. Check if a collection includes another value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isIn from 'https://unpkg.com/rubico/dist/x/isIn.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  isIn([1, 2, 3](1)\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn([1, 2, 3](4)\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn({ a: 1 })(1)\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn({ a: 1 })(2)\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('abc')('a')\n" +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('abc')('ab')\n" +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isIn('abc')('d')\n" +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(new Set([1, 2, 3]))(1)\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(new Set([1, 2, 3]))(4)\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(new Map([[1, 1], [2, 2], [3, 3]]))(1)\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isIn(new Map([[1, 1], [2, 2], [3, 3]]))(4)\n' +
      ') // false\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isIn',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isIn(container Array|Object|String|Set|Map)(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 98 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 98 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Counterpart to includes. Check if a collection includes another value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 71, offset: 70 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 71, offset: 70 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isIn from 'https://unpkg.com/rubico/dist/x/isIn.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  isIn([1, 2, 3](1)\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn([1, 2, 3](4)\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn({ a: 1 })(1)\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn({ a: 1 })(2)\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('abc')('a')\n" +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('abc')('ab')\n" +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isIn('abc')('d')\n" +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(new Set([1, 2, 3]))(1)\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(new Set([1, 2, 3]))(4)\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(new Map([[1, 1], [2, 2], [3, 3]]))(1)\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              '  isIn(new Map([[1, 1], [2, 2], [3, 3]]))(4)\n' +
              ') // false',
            position: {
              start: { line: 3, column: 1, offset: 72 },
              end: { line: 49, column: 4, offset: 720 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 49, column: 4, offset: 720 }
        }
      }
    }
  },
  {
    name: 'isObject',
    synopsis: '```coffeescript [specscript]\nisObject(value any) -> boolean\n```',
    description: 'Determine whether a value has the [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types) of `Object`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isObject from 'https://unpkg.com/rubico/dist/x/isObject.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  isObject({ a: 1, b: 2, c: 3 }),\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      "  isObject('hey'),\n" +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  isObject(new Set([1, 2, 3])),\n' +
      ') // true\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isObject',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isObject(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 63 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 63 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value has the ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 35, offset: 34 }
                }
              },
              {
                type: 'link',
                title: null,
                url: 'http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types',
                children: [
                  {
                    type: 'text',
                    value: 'language type',
                    position: {
                      start: { line: 1, column: 36, offset: 35 },
                      end: { line: 1, column: 49, offset: 48 }
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 35, offset: 34 },
                  end: { line: 1, column: 129, offset: 128 }
                }
              },
              {
                type: 'text',
                value: ' of ',
                position: {
                  start: { line: 1, column: 129, offset: 128 },
                  end: { line: 1, column: 133, offset: 132 }
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 1, column: 133, offset: 132 },
                  end: { line: 1, column: 141, offset: 140 }
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 141, offset: 140 },
                  end: { line: 1, column: 142, offset: 141 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 142, offset: 141 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isObject from 'https://unpkg.com/rubico/dist/x/isObject.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  isObject({ a: 1, b: 2, c: 3 }),\n' +
              ') // true\n' +
              '\n' +
              'console.log(\n' +
              "  isObject('hey'),\n" +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  isObject(new Set([1, 2, 3])),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 143 },
              end: { line: 17, column: 4, offset: 401 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 17, column: 4, offset: 401 }
        }
      }
    }
  },
  {
    name: 'isString',
    synopsis: '```coffeescript [specscript]\nisString(value any) -> boolean\n```',
    description: 'Determine whether a value is a string.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isString from 'https://unpkg.com/rubico/dist/x/isString.es.js'\n" +
      '\n' +
      'console.log(\n' +
      "  isString('hey'),\n" +
      ') // true\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'isString',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 9, offset: 8 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'isString(value any) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 63 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 63 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Determine whether a value is a string.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isString from 'https://unpkg.com/rubico/dist/x/isString.es.js'\n" +
              '\n' +
              'console.log(\n' +
              "  isString('hey'),\n" +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 40 },
              end: { line: 9, column: 4, offset: 183 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 183 }
        }
      }
    }
  },
  {
    name: 'keys',
    synopsis: '```coffeescript [specscript]\n' +
      'keys(value string|Array|Set|Map|object) -> Array<key number|string>\n' +
      '```',
    description: 'Get an array of keys from an instance.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import keys from 'https://unpkg.com/rubico/dist/x/keys.es.js'\n" +
      '\n' +
      "console.log(keys({ a: 1, b: 2, c: 3 })) // ['a', 'b', 'c']\n" +
      "console.log(keys(['hello', 'world'])) // [0, 1]\n" +
      "console.log(keys(new Map([['hello', 1], ['world', 2]]))) // ['hello', 'world']\n" +
      '```',
    since: '1.6.25',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'keys',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'keys(value string|Array|Set|Map|object) -> Array<key number|string>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 100 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 100 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get an array of keys from an instance.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import keys from 'https://unpkg.com/rubico/dist/x/keys.es.js'\n" +
              '\n' +
              "console.log(keys({ a: 1, b: 2, c: 3 })) // ['a', 'b', 'c']\n" +
              "console.log(keys(['hello', 'world'])) // [0, 1]\n" +
              "console.log(keys(new Map([['hello', 1], ['world', 2]]))) // ['hello', 'world']",
            position: {
              start: { line: 3, column: 1, offset: 40 },
              end: { line: 9, column: 4, offset: 319 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 319 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.6.25',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      }
    }
  },
  {
    name: 'last',
    synopsis: '```coffeescript [specscript]\n' +
      'var value Array|string\n' +
      '\n' +
      'last(value) -> any\n' +
      '```',
    description: 'Get the last item of a collection\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import last from 'https://unpkg.com/rubico/dist/x/last.es.js'\n" +
      '\n' +
      'console.log(last([1, 2, 3])) // 3\n' +
      'console.log(last([])) // undefined\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'last',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var value Array|string\n\nlast(value) -> any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 75 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 75 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the last item of a collection',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 34, offset: 33 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import last from 'https://unpkg.com/rubico/dist/x/last.es.js'\n" +
              '\n' +
              'console.log(last([1, 2, 3])) // 3\n' +
              'console.log(last([])) // undefined',
            position: {
              start: { line: 3, column: 1, offset: 35 },
              end: { line: 8, column: 4, offset: 197 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 197 }
        }
      }
    }
  },
  {
    name: 'maxBy',
    synopsis: '```coffeescript [specscript]\n' +
      'maxBy(array Array, path string) -> maxItemByPath any\n' +
      '\n' +
      'maxBy(path string)(array Array) -> maxItemByPath any\n' +
      '```',
    description: 'Finds the item that is the max by a property denoted by path.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import maxBy from 'https://unpkg.com/rubico/dist/x/maxBy.es.js'\n" +
      '\n' +
      'const array = [{ a: 1 }, { a: 2 }, { a: 3 }]\n' +
      '\n' +
      "const maxItem = maxBy(array, 'a')\n" +
      '\n' +
      'console.log(maxItem) // { a: 3 }\n' +
      '```\n' +
      '\n' +
      '`maxBy` composes in a pointfree way.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import maxBy from 'https://unpkg.com/rubico/dist/x/maxBy.es.js'\n" +
      '\n' +
      'const numbers = [1, 2, 3]\n' +
      '\n' +
      'const maxItem = pipe(numbers, [\n' +
      '  map(number => number ** 2),\n' +
      '  map(number => ({ a: { b: { c: number } } })),\n' +
      "  maxBy('a.b.c')\n" +
      '])\n' +
      '\n' +
      'console.log(maxItem) // { a: { b: { c: 9 } } }\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'maxBy',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'maxBy(array Array, path string) -> maxItemByPath any\n' +
              '\n' +
              'maxBy(path string)(array Array) -> maxItemByPath any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 139 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 139 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Finds the item that is the max by a property denoted by path.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 62, offset: 61 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 62, offset: 61 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import maxBy from 'https://unpkg.com/rubico/dist/x/maxBy.es.js'\n" +
              '\n' +
              'const array = [{ a: 1 }, { a: 2 }, { a: 3 }]\n' +
              '\n' +
              "const maxItem = maxBy(array, 'a')\n" +
              '\n' +
              'console.log(maxItem) // { a: 3 }',
            position: {
              start: { line: 3, column: 1, offset: 63 },
              end: { line: 11, column: 4, offset: 272 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'maxBy',
                position: {
                  start: { line: 13, column: 1, offset: 274 },
                  end: { line: 13, column: 8, offset: 281 }
                }
              },
              {
                type: 'text',
                value: ' composes in a pointfree way.',
                position: {
                  start: { line: 13, column: 8, offset: 281 },
                  end: { line: 13, column: 37, offset: 310 }
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 274 },
              end: { line: 13, column: 37, offset: 310 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import maxBy from 'https://unpkg.com/rubico/dist/x/maxBy.es.js'\n" +
              '\n' +
              'const numbers = [1, 2, 3]\n' +
              '\n' +
              'const maxItem = pipe(numbers, [\n' +
              '  map(number => number ** 2),\n' +
              '  map(number => ({ a: { b: { c: number } } })),\n' +
              "  maxBy('a.b.c')\n" +
              '])\n' +
              '\n' +
              'console.log(maxItem) // { a: { b: { c: 9 } } }',
            position: {
              start: { line: 15, column: 1, offset: 312 },
              end: { line: 27, column: 4, offset: 612 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 27, column: 4, offset: 612 }
        }
      }
    }
  },
  {
    name: 'noop',
    synopsis: '```coffeescript [specscript]\nnoop() -> undefined\n```',
    description: "Doesn't do anything.\n" +
      '\n' +
      '```javascript [playground]\n' +
      "import noop from 'https://unpkg.com/rubico/dist/x/noop.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  noop(),\n' +
      ') // undefined\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'noop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'noop() -> undefined',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 52 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 52 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "Doesn't do anything.",
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 21, offset: 20 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import noop from 'https://unpkg.com/rubico/dist/x/noop.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  noop(),\n' +
              ') // undefined',
            position: {
              start: { line: 3, column: 1, offset: 22 },
              end: { line: 9, column: 4, offset: 153 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 153 }
        }
      }
    }
  },
  {
    name: 'pluck',
    synopsis: '```coffeescript [specscript]\n' +
      'pluck(path string)(array Array) -> result Array\n' +
      '\n' +
      'pluck(array Array, path string) -> result Array\n' +
      '```',
    description: 'Creates an array of picked properties denoted by a path from another array.\n' +
      '\n' +
      '`pluck` supports three types of path patterns for nested property access.\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      "import pluck from 'https://unpkg.com/rubico/dist/x/pluck.es.js'\n" +
      '\n' +
      'const users = [\n' +
      "  { name: 'George', age: 33 },\n" +
      "  { name: 'Jane', age: 51 },\n" +
      "  { name: 'Jim', age: 22 },\n" +
      ']\n' +
      '\n' +
      "const usernames = pluck(users, 'name')\n" +
      '\n' +
      "console.log(usernames) // ['George', 'Jane', 'Jim']\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'pluck',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'pluck(path string)(array Array) -> result Array\n' +
              '\n' +
              'pluck(array Array, path string) -> result Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 129 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 129 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Creates an array of picked properties denoted by a path from another array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 76, offset: 75 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 76, offset: 75 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'pluck',
                position: {
                  start: { line: 3, column: 1, offset: 77 },
                  end: { line: 3, column: 8, offset: 84 }
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access.',
                position: {
                  start: { line: 3, column: 8, offset: 84 },
                  end: { line: 3, column: 74, offset: 150 }
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 77 },
              end: { line: 3, column: 74, offset: 150 }
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
                        value: 'dot delimited - ',
                        position: {
                          start: { line: 5, column: 4, offset: 155 },
                          end: { line: 5, column: 20, offset: 171 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 5, column: 20, offset: 171 },
                          end: { line: 5, column: 29, offset: 180 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 155 },
                      end: { line: 5, column: 29, offset: 180 }
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 153 },
                  end: { line: 5, column: 29, offset: 180 }
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
                        value: 'bracket notation - ',
                        position: {
                          start: { line: 6, column: 4, offset: 184 },
                          end: { line: 6, column: 23, offset: 203 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 6, column: 23, offset: 203 },
                          end: { line: 6, column: 37, offset: 217 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 184 },
                      end: { line: 6, column: 37, offset: 217 }
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 2, offset: 182 },
                  end: { line: 6, column: 37, offset: 217 }
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
                        value: 'an array of keys or indices - ',
                        position: {
                          start: { line: 7, column: 4, offset: 221 },
                          end: { line: 7, column: 34, offset: 251 }
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 7, column: 34, offset: 251 },
                          end: { line: 7, column: 53, offset: 270 }
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 221 },
                      end: { line: 7, column: 53, offset: 270 }
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 2, offset: 219 },
                  end: { line: 7, column: 53, offset: 270 }
                }
              }
            ],
            position: {
              start: { line: 5, column: 2, offset: 153 },
              end: { line: 7, column: 53, offset: 270 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import pluck from 'https://unpkg.com/rubico/dist/x/pluck.es.js'\n" +
              '\n' +
              'const users = [\n' +
              "  { name: 'George', age: 33 },\n" +
              "  { name: 'Jane', age: 51 },\n" +
              "  { name: 'Jim', age: 22 },\n" +
              ']\n' +
              '\n' +
              "const usernames = pluck(users, 'name')\n" +
              '\n' +
              "console.log(usernames) // ['George', 'Jane', 'Jim']",
            position: {
              start: { line: 9, column: 1, offset: 272 },
              end: { line: 21, column: 4, offset: 566 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 21, column: 4, offset: 566 }
        }
      }
    }
  },
  {
    name: 'prepend',
    synopsis: '```coffeescript [specscript]\n' +
      'prepend(\n' +
      '  item string|Array,\n' +
      ')(value string|Array) -> string|array\n' +
      '```',
    description: 'Prepend a string or an array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import prepend from 'https://unpkg.com/rubico/dist/x/prepend.es.js'\n" +
      '\n' +
      "const myArray = ['orange', 'apple']\n" +
      '\n' +
      '{\n' +
      "  const result = prepend(['ananas'])(myArray)\n" +
      "  console.log(result) // ['ananas', 'orange', 'apple']\n" +
      '}\n' +
      '\n' +
      '{\n' +
      "  const result = prepend('ananas')(myArray)\n" +
      "  console.log(result) // ['ananas', 'orange', 'apple']\n" +
      '}\n' +
      '\n' +
      '{\n' +
      "  const result = prepend('hello ')('world')\n" +
      "  console.log(result) // 'hello world'\n" +
      '}\n' +
      '```',
    since: '1.7.3',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'prepend',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 8, offset: 7 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'prepend(\n' +
              '  item string|Array,\n' +
              ')(value string|Array) -> string|array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 100 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 100 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Prepend a string or an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 30, offset: 29 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import prepend from 'https://unpkg.com/rubico/dist/x/prepend.es.js'\n" +
              '\n' +
              "const myArray = ['orange', 'apple']\n" +
              '\n' +
              '{\n' +
              "  const result = prepend(['ananas'])(myArray)\n" +
              "  console.log(result) // ['ananas', 'orange', 'apple']\n" +
              '}\n' +
              '\n' +
              '{\n' +
              "  const result = prepend('ananas')(myArray)\n" +
              "  console.log(result) // ['ananas', 'orange', 'apple']\n" +
              '}\n' +
              '\n' +
              '{\n' +
              "  const result = prepend('hello ')('world')\n" +
              "  console.log(result) // 'hello world'\n" +
              '}',
            position: {
              start: { line: 3, column: 1, offset: 31 },
              end: { line: 22, column: 4, offset: 464 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 22, column: 4, offset: 464 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.7.3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  },
  {
    name: 'size',
    synopsis: '```coffeescript [specscript]\nsize(value any) -> number\n```',
    description: 'Get the count of items in a value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import size from 'https://unpkg.com/rubico/dist/x/size.es.js'\n" +
      '\n' +
      'console.log(size([1, 2, 3])) // 3\n' +
      "console.log(size('hey')) // 3\n" +
      'console.log(size(new Set([1, 2, 3]))) // 3\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'size',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'size(value any) -> number',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 4, offset: 58 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 3, column: 4, offset: 58 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get the count of items in a value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 35, offset: 34 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import size from 'https://unpkg.com/rubico/dist/x/size.es.js'\n" +
              '\n' +
              'console.log(size([1, 2, 3])) // 3\n' +
              "console.log(size('hey')) // 3\n" +
              'console.log(size(new Set([1, 2, 3]))) // 3',
            position: {
              start: { line: 3, column: 1, offset: 36 },
              end: { line: 9, column: 4, offset: 236 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 236 }
        }
      }
    }
  },
  {
    name: 'timeInLoop',
    synopsis: 'timeInLoop(desc string, loopCount number, fn function) -> undefined',
    description: 'Logs the amount of time required for a function to run a certain number of times\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      "timeInLoop('hello', 1e6, () => 'hello') // hello: 1e+6: 3.474ms\n" +
      '```\n' +
      '\n' +
      'Reference: https://gist.github.com/funfunction/91b5876a5f562e1e352aed0fcabc3858',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoop',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 11, offset: 10 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoop(desc string, loopCount number, fn function) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 68, offset: 67 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 68, offset: 67 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 68, offset: 67 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Logs the amount of time required for a function to run a certain number of times',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 81, offset: 80 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "timeInLoop('hello', 1e6, () => 'hello') // hello: 1e+6: 3.474ms",
            position: {
              start: { line: 3, column: 1, offset: 82 },
              end: { line: 5, column: 4, offset: 178 }
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Reference: https://gist.github.com/funfunction/91b5876a5f562e1e352aed0fcabc3858',
                position: {
                  start: { line: 7, column: 1, offset: 180 },
                  end: { line: 7, column: 80, offset: 259 }
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 180 },
              end: { line: 7, column: 80, offset: 259 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 80, offset: 259 }
        }
      }
    }
  },
  {
    name: 'timeInLoop.async',
    synopsis: 'timeInLoop.async(desc string, loopCount number, fn function) -> undefined',
    description: 'Like timeInLoop, but every call is awaited\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      "timeInLoop.async('async hello', 1e6, async () => 'hello') // async hello: 1e+6: 116.006ms\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoop.async',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 17, offset: 16 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'timeInLoop.async(desc string, loopCount number, fn function) -> undefined',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 74, offset: 73 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 74, offset: 73 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 74, offset: 73 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Like timeInLoop, but every call is awaited',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 43, offset: 42 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 }
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: "timeInLoop.async('async hello', 1e6, async () => 'hello') // async hello: 1e+6: 116.006ms",
            position: {
              start: { line: 3, column: 1, offset: 44 },
              end: { line: 5, column: 4, offset: 166 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 166 }
        }
      }
    }
  },
  {
    name: 'trace',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  resolved any,\n' +
      '  resolver ...args=>resolved\n' +
      '\n' +
      'trace(...args) -> args[0]\n' +
      '\n' +
      'trace(resolver)(...args) -> resolved\n' +
      '```',
    description: 'Log a value out to the console, returning the value. If the value is a function, treat it as a resolver.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import trace from 'https://unpkg.com/rubico/dist/x/trace.es.js'\n" +
      '\n' +
      'pipe([\n' +
      '  trace,\n' +
      '  trace(value => value.toUpperCase()),\n' +
      "])('hey') // hey\n" +
      '          // HEY\n' +
      "console.log('check your console')\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'trace',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var args ...any,\n' +
              '  resolved any,\n' +
              '  resolver ...args=>resolved\n' +
              '\n' +
              'trace(...args) -> args[0]\n' +
              '\n' +
              'trace(resolver)(...args) -> resolved',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 159 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 159 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Log a value out to the console, returning the value. If the value is a function, treat it as a resolver.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 105, offset: 104 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import trace from 'https://unpkg.com/rubico/dist/x/trace.es.js'\n" +
              '\n' +
              'pipe([\n' +
              '  trace,\n' +
              '  trace(value => value.toUpperCase()),\n' +
              "])('hey') // hey\n" +
              '          // HEY\n' +
              "console.log('check your console')",
            position: {
              start: { line: 3, column: 1, offset: 106 },
              end: { line: 12, column: 4, offset: 324 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 324 }
        }
      }
    }
  },
  {
    name: 'unionWith',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  arrayOfArrays Array<Array<T>>,\n' +
      '  comparator (T, T)=>Promise|boolean\n' +
      '\n' +
      'unionWith(comparator)(arrayOfArrays) -> Array<T>\n' +
      '```',
    description: 'Create an array of unique values from an array of arrays with uniqueness determined by a comparator. The comparator is a function that returns a boolean value, `true` if two given values are distinct.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
      "import unionWith from 'https://unpkg.com/rubico/dist/x/unionWith.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  unionWith(isDeepEqual)([\n' +
      '    [{ a: 1 }, { b: 2 }, { a: 1 }],\n' +
      '    [{ b: 2 }, { b: 2 }, { b: 2 }],\n' +
      '  ]),\n' +
      ') // [{ a: 1 }, { b: 2 }]\n' +
      '```',
    TODO: 'setUnionWith',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'unionWith',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 10, offset: 9 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n' +
              '  arrayOfArrays Array<Array<T>>,\n' +
              '  comparator (T, T)=>Promise|boolean\n' +
              '\n' +
              'unionWith(comparator)(arrayOfArrays) -> Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 163 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 163 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create an array of unique values from an array of arrays with uniqueness determined by a comparator. The comparator is a function that returns a boolean value, ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 161, offset: 160 }
                }
              },
              {
                type: 'inlineCode',
                value: 'true',
                position: {
                  start: { line: 1, column: 161, offset: 160 },
                  end: { line: 1, column: 167, offset: 166 }
                }
              },
              {
                type: 'text',
                value: ' if two given values are distinct.',
                position: {
                  start: { line: 1, column: 167, offset: 166 },
                  end: { line: 1, column: 201, offset: 200 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 201, offset: 200 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import isDeepEqual from 'https://unpkg.com/rubico/dist/x/isDeepEqual.es.js'\n" +
              "import unionWith from 'https://unpkg.com/rubico/dist/x/unionWith.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  unionWith(isDeepEqual)([\n' +
              '    [{ a: 1 }, { b: 2 }, { a: 1 }],\n' +
              '    [{ b: 2 }, { b: 2 }, { b: 2 }],\n' +
              '  ]),\n' +
              ') // [{ a: 1 }, { b: 2 }]',
            position: {
              start: { line: 3, column: 1, offset: 202 },
              end: { line: 13, column: 4, offset: 525 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 525 }
        }
      },
      TODO: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'setUnionWith',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 13, offset: 12 }
        }
      }
    }
  },
  {
    name: 'uniq',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  array Array<T>\n' +
      '\n' +
      'uniq(array) -> Array\n' +
      '```',
    description: 'Get an array of unique values from an array.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import uniq from 'https://unpkg.com/rubico/dist/x/uniq.es.js'\n" +
      '\n' +
      'console.log(\n' +
      '  uniq([1, 2, 2, 3]),\n' +
      ') // [1, 2, 3]\n' +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'uniq',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'var T any,\n  array Array<T>\n\nuniq(array) -> Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 82 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 82 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get an array of unique values from an array.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 45, offset: 44 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import uniq from 'https://unpkg.com/rubico/dist/x/uniq.es.js'\n" +
              '\n' +
              'console.log(\n' +
              '  uniq([1, 2, 2, 3]),\n' +
              ') // [1, 2, 3]',
            position: {
              start: { line: 3, column: 1, offset: 46 },
              end: { line: 9, column: 4, offset: 189 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 189 }
        }
      }
    }
  },
  {
    name: 'unless',
    synopsis: '```coffeescript [specscript]\n' +
      'unless(\n' +
      '  predicate any=>Promise|boolean,\n' +
      '  func function,\n' +
      ')(value any) -> Promise|any\n' +
      '```',
    description: 'Execute a function and return the result unless a condition is true, otherwise return the original value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import unless from 'https://unpkg.com/rubico/dist/x/unless.es.js'\n" +
      '\n' +
      'const isEven = num => num % 2 === 0\n' +
      'const doubleIfOdd = unless(isEven, num => num * 2)\n' +
      '\n' +
      'console.log(doubleIfOdd(100)) // 100\n' +
      'console.log(doubleIfOdd(101)) // 202\n' +
      '```',
    since: '1.7.3',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'unless',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'unless(\n' +
              '  predicate any=>Promise|boolean,\n' +
              '  func function,\n' +
              ')(value any) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 119 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 119 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a function and return the result unless a condition is true, otherwise return the original value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 106, offset: 105 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 106, offset: 105 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import unless from 'https://unpkg.com/rubico/dist/x/unless.es.js'\n" +
              '\n' +
              'const isEven = num => num % 2 === 0\n' +
              'const doubleIfOdd = unless(isEven, num => num * 2)\n' +
              '\n' +
              'console.log(doubleIfOdd(100)) // 100\n' +
              'console.log(doubleIfOdd(101)) // 202',
            position: {
              start: { line: 3, column: 1, offset: 107 },
              end: { line: 11, column: 4, offset: 366 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 366 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.7.3',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  },
  {
    name: 'values',
    synopsis: '```coffeescript [specscript]\n' +
      'values<T>(\n' +
      '  object String<T>|Array<T>|Set<T>|Map<any=>T>|Object<T>,\n' +
      ') -> Array<T>\n' +
      '```',
    description: 'Get an array of values from an instance.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import values from 'https://unpkg.com/rubico/dist/x/values.es.js'\n" +
      '\n' +
      'console.log(values({ a: 1, b: 2, c: 3 })) // [1, 2, 3]\n' +
      "console.log(values('abc')) // ['a', 'b', 'c']\n" +
      "console.log(values(new Map([[1, 'hello'], [2, 'world']]))) // ['hello', 'world']\n" +
      '```',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'values',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'values<T>(\n' +
              '  object String<T>|Array<T>|Set<T>|Map<any=>T>|Object<T>,\n' +
              ') -> Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 4, offset: 115 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 5, column: 4, offset: 115 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Get an array of values from an instance.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 41, offset: 40 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import values from 'https://unpkg.com/rubico/dist/x/values.es.js'\n" +
              '\n' +
              'console.log(values({ a: 1, b: 2, c: 3 })) // [1, 2, 3]\n' +
              "console.log(values('abc')) // ['a', 'b', 'c']\n" +
              "console.log(values(new Map([[1, 'hello'], [2, 'world']]))) // ['hello', 'world']",
            position: {
              start: { line: 3, column: 1, offset: 42 },
              end: { line: 9, column: 4, offset: 321 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 321 }
        }
      }
    }
  },
  {
    name: 'when',
    synopsis: '```coffeescript [specscript]\n' +
      'when(\n' +
      '  predicate any=>Promise|boolean,\n' +
      '  func function,\n' +
      ')(value any) -> Promise|any\n' +
      '```',
    description: 'Execute a function and return the result when a condition is true, otherwise return the original value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import when from 'https://unpkg.com/rubico/dist/x/when.es.js'\n" +
      '\n' +
      'const isEven = num => num % 2 === 0\n' +
      'const doubleIfEven = when(isEven, num => num * 2)\n' +
      '\n' +
      'console.log(doubleIfEven(100)) // 200\n' +
      'console.log(doubleIfEven(101)) // 101\n' +
      '```',
    since: '1.7.1',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'when',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 5, offset: 4 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'when(\n' +
              '  predicate any=>Promise|boolean,\n' +
              '  func function,\n' +
              ')(value any) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 117 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 117 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a function and return the result when a condition is true, otherwise return the original value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 104, offset: 103 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 104, offset: 103 }
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import when from 'https://unpkg.com/rubico/dist/x/when.es.js'\n" +
              '\n' +
              'const isEven = num => num % 2 === 0\n' +
              'const doubleIfEven = when(isEven, num => num * 2)\n' +
              '\n' +
              'console.log(doubleIfEven(100)) // 200\n' +
              'console.log(doubleIfEven(101)) // 101',
            position: {
              start: { line: 3, column: 1, offset: 105 },
              end: { line: 11, column: 4, offset: 361 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 361 }
        }
      },
      since: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: '1.7.1',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 }
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 }
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 6, offset: 5 }
        }
      }
    }
  }
]