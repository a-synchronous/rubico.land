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
  ... 91 more items
]