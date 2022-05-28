export default [
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
              end: { line: 3, column: 4, offset: 57 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '__',
                position: {
                  start: { line: 1, column: 29, offset: 28 },
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' (two underscores) that denotes the position of an argument in a curried function.',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 115, offset: 114 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 115, offset: 114 },
              indent: []
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
              end: { line: 7, column: 4, offset: 215 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 },
              indent: []
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
              end: { line: 9, column: 4, offset: 232 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 93, offset: 92 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 93, offset: 92 },
              indent: []
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
                  end: { line: 1, column: 16, offset: 15 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 },
              indent: []
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
              end: { line: 9, column: 4, offset: 216 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 102, offset: 101 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 102, offset: 101 },
              indent: []
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
                  end: { line: 3, column: 72, offset: 174 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 103 },
              end: { line: 3, column: 72, offset: 174 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
                  end: { line: 1, column: 65, offset: 64 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 65, offset: 64 },
              indent: []
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
                  end: { line: 1, column: 48, offset: 47 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 48, offset: 47 },
              indent: []
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
                  end: { line: 1, column: 28, offset: 27 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 },
              indent: []
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' two things',
                position: {
                  start: { line: 1, column: 4, offset: 3 },
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 3, column: 4, offset: 70 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 47, offset: 46 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 },
              indent: []
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 3, column: 4, offset: 80 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 10, column: 4, offset: 186 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' while mapping',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 28, offset: 27 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 },
              indent: []
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
                  end: { line: 1, column: 22, offset: 21 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 },
              indent: []
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
              end: { line: 8, column: 4, offset: 132 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' while mapping indexes',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 },
              indent: []
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 },
              indent: []
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
              end: { line: 9, column: 4, offset: 193 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 54, offset: 53 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 54, offset: 53 },
              indent: []
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 6, column: 4, offset: 127 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 44, offset: 43 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 44, offset: 43 },
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 76, offset: 75 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 76, offset: 75 },
              indent: []
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
              end: { line: 8, column: 4, offset: 145 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 },
              indent: []
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
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 },
              indent: []
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              end: { line: 8, column: 4, offset: 209 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 43, offset: 42 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 7, column: 4, offset: 115 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 99, offset: 98 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 },
              indent: []
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
                  end: { line: 3, column: 27, offset: 126 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 3, column: 27, offset: 126 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 3, column: 4, offset: 83 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.join',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' on an array.',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 26, offset: 25 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 },
              indent: []
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 6, column: 4, offset: 137 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 89, offset: 88 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 89, offset: 88 },
              indent: []
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
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 },
              indent: []
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
              end: { line: 11, column: 4, offset: 257 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 110, offset: 109 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 110, offset: 109 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 8, column: 4, offset: 174 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 97, offset: 96 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 },
              indent: []
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
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 },
              indent: []
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
              end: { line: 9, column: 4, offset: 193 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 96, offset: 95 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 96, offset: 95 },
                  end: { line: 1, column: 104, offset: 103 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' can be asynchronous.',
                position: {
                  start: { line: 1, column: 104, offset: 103 },
                  end: { line: 1, column: 125, offset: 124 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 125, offset: 124 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 7, column: 4, offset: 149 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 82, offset: 81 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 },
              indent: []
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
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 },
              indent: []
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
              end: { line: 8, column: 4, offset: 192 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 81, offset: 80 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 },
              indent: []
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
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
              end: { line: 8, column: 4, offset: 138 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 84, offset: 83 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 84, offset: 83 },
              indent: []
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
              end: { line: 7, column: 4, offset: 127 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 },
              indent: []
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
              end: { line: 9, column: 4, offset: 272 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 121, offset: 120 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 121, offset: 120 },
              indent: []
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
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
              end: { line: 7, column: 4, offset: 216 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 138, offset: 137 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 138, offset: 137 },
              indent: []
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
                  end: { line: 1, column: 26, offset: 25 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 },
              indent: []
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
              end: { line: 9, column: 4, offset: 243 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 226, offset: 225 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 226, offset: 225 },
              indent: []
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
                  end: { line: 3, column: 9, offset: 235 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 3, column: 9, offset: 235 },
                  end: { line: 3, column: 30, offset: 256 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 227 },
              end: { line: 3, column: 30, offset: 256 },
              indent: []
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
                  end: { line: 1, column: 23, offset: 22 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 23, offset: 22 },
              indent: []
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              end: { line: 7, column: 4, offset: 154 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 63, offset: 62 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 63, offset: 62 },
              indent: []
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              end: { line: 6, column: 4, offset: 125 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 3, column: 33, offset: 72 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 40 },
              end: { line: 3, column: 33, offset: 72 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 6, column: 4, offset: 126 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 46, offset: 45 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 6, column: 4, offset: 129 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 34, offset: 33 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 8, column: 4, offset: 140 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 56, offset: 55 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 56, offset: 55 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 7, column: 4, offset: 121 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 60, offset: 59 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 60, offset: 59 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 7, column: 4, offset: 156 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 43, offset: 42 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 9, column: 4, offset: 158 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 9, column: 4, offset: 133 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
                  end: { line: 3, column: 51, offset: 76 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 26 },
              end: { line: 3, column: 51, offset: 76 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 10, column: 4, offset: 147 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
                  end: { line: 3, column: 51, offset: 75 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 11, column: 4, offset: 163 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
                  end: { line: 3, column: 51, offset: 75 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 12, column: 4, offset: 178 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
                  end: { line: 3, column: 51, offset: 75 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 25 },
              end: { line: 3, column: 51, offset: 75 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
              end: { line: 10, column: 4, offset: 151 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 98, offset: 97 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 },
              indent: []
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
                  end: { line: 3, column: 52, offset: 150 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 99 },
              end: { line: 3, column: 52, offset: 150 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
              end: { line: 10, column: 4, offset: 180 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 61, offset: 60 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 61, offset: 60 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 6, column: 4, offset: 110 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 5, column: 4, offset: 138 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 117, offset: 116 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 117, offset: 116 },
              indent: []
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
    name: 'funcsOrValuesConditional',
    synopsis: '```coffeescript [specscript]\n' +
      'funcsOrValuesConditional(\n' +
      '  funcsOrValues Array<function|value>,\n' +
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
                value: 'funcsOrValuesConditional',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
            value: 'funcsOrValuesConditional(\n' +
              '  funcsOrValues Array<function|value>,\n' +
              '  args Array,\n' +
              '  funcsIndex number,\n' +
              ') -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 149 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                value: 'Conditional operator ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'a ? b : c ? d : e ? ...',
                position: {
                  start: { line: 1, column: 22, offset: 21 },
                  end: { line: 1, column: 47, offset: 46 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' for functions.',
                position: {
                  start: { line: 1, column: 47, offset: 46 },
                  end: { line: 1, column: 62, offset: 61 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 62, offset: 61 },
              indent: []
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
              end: { line: 9, column: 4, offset: 231 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 42, offset: 41 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 },
              indent: []
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
                  end: { line: 3, column: 52, offset: 94 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 43 },
              end: { line: 3, column: 52, offset: 94 },
              indent: []
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
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
              end: { line: 7, column: 4, offset: 190 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 185, offset: 184 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 185, offset: 184 },
              indent: []
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              end: { line: 8, column: 4, offset: 202 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 195, offset: 194 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 195, offset: 194 },
              indent: []
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
                  end: { line: 1, column: 19, offset: 18 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 },
              indent: []
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 24, offset: 23 },
              indent: []
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
              end: { line: 10, column: 4, offset: 263 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 83, offset: 82 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 83, offset: 82 },
              indent: []
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
      '  args Array,\n' +
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
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 },
              indent: []
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
              '  args Array,\n' +
              '  transducer Reducer=>Reducer,\n' +
              '  result undefined|null,\n' +
              '>(args, transducer, result) -> Promise|result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 202 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 202 }
        }
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
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 },
              indent: []
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
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 },
              indent: []
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
                  end: { line: 1, column: 28, offset: 27 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 28, offset: 27 },
              indent: []
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
                  end: { line: 1, column: 19, offset: 18 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Buffer',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 42, offset: 41 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 },
              indent: []
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 },
              indent: []
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 3, column: 4, offset: 66 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'length',
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 38, offset: 37 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' like an Array.',
                position: {
                  start: { line: 1, column: 38, offset: 37 },
                  end: { line: 1, column: 53, offset: 52 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 53, offset: 52 },
              indent: []
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
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
                  end: { line: 1, column: 47, offset: 46 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 },
              indent: []
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
                  end: { line: 1, column: 58, offset: 57 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 58, offset: 57 },
              indent: []
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'true',
                position: {
                  start: { line: 1, column: 52, offset: 51 },
                  end: { line: 1, column: 58, offset: 57 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' for ',
                position: {
                  start: { line: 1, column: 58, offset: 57 },
                  end: { line: 1, column: 63, offset: 62 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'TypedArray',
                position: {
                  start: { line: 1, column: 63, offset: 62 },
                  end: { line: 1, column: 75, offset: 74 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' or a Node.js ',
                position: {
                  start: { line: 1, column: 75, offset: 74 },
                  end: { line: 1, column: 89, offset: 88 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Buffer',
                position: {
                  start: { line: 1, column: 89, offset: 88 },
                  end: { line: 1, column: 97, offset: 96 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 97, offset: 96 },
                  end: { line: 1, column: 98, offset: 97 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 98, offset: 97 },
              indent: []
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
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 },
              indent: []
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
                  end: { line: 1, column: 42, offset: 41 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 42, offset: 41 },
              indent: []
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
                  end: { line: 1, column: 51, offset: 50 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 },
              indent: []
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
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 1, column: 56, offset: 55 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 56, offset: 55 },
              indent: []
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
                  end: { line: 1, column: 81, offset: 80 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 81, offset: 80 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
                  end: { line: 1, column: 32, offset: 31 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 },
              indent: []
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
                  end: { line: 1, column: 40, offset: 39 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 40, offset: 39 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
                  '  T any,\n' +
                  '  iteration { value: T, done: boolean },\n' +
                  '  mapper T=>any,',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 4, column: 17, offset: 80 },
                  indent: [ 1, 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 4, column: 17, offset: 80 },
              indent: [ 1, 1, 1 ]
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
                      end: { line: 5, column: 68, offset: 148 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 2, offset: 82 },
                  end: { line: 5, column: 68, offset: 148 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 81 },
              end: { line: 5, column: 68, offset: 148 },
              indent: []
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
                  end: { line: 1, column: 59, offset: 58 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 59, offset: 58 },
              indent: []
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
                  end: { line: 1, column: 16, offset: 15 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 16, offset: 15 },
              indent: []
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
              end: { line: 7, column: 4, offset: 127 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 99, offset: 98 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 },
              indent: []
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
                  end: { line: 3, column: 27, offset: 126 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 3, column: 27, offset: 126 },
              indent: []
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
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 },
              indent: []
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
              end: { line: 8, column: 4, offset: 173 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 105, offset: 104 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 8, column: 4, offset: 173 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 74, offset: 73 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 74, offset: 73 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 162 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 66, offset: 65 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 66, offset: 65 },
                  end: { line: 1, column: 87, offset: 86 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 87, offset: 86 },
              indent: []
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
                  end: { line: 3, column: 84, offset: 171 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 88 },
              end: { line: 3, column: 84, offset: 171 },
              indent: []
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
                  end: { line: 1, column: 67, offset: 66 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 67, offset: 66 },
              indent: []
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 3, column: 4, offset: 62 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 6, column: 4, offset: 129 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 93, offset: 92 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 93, offset: 92 },
                  end: { line: 1, column: 101, offset: 100 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 101, offset: 100 },
                  end: { line: 1, column: 122, offset: 121 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 122, offset: 121 },
              indent: []
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
                  end: { line: 1, column: 19, offset: 18 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 19, offset: 18 },
              indent: []
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
              end: { line: 3, column: 4, offset: 99 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 },
              indent: []
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'undefined',
                position: {
                  start: { line: 1, column: 24, offset: 23 },
                  end: { line: 1, column: 35, offset: 34 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 5, column: 4, offset: 145 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.assign',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 14, column: 4, offset: 466 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1
              ]
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
                  end: { line: 1, column: 101, offset: 100 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 101, offset: 100 },
              indent: []
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
                  end: { line: 1, column: 63, offset: 62 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 63, offset: 62 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 7, column: 4, offset: 119 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 101, offset: 100 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 101, offset: 100 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 11, offset: 10 },
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '(object Object',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 28, offset: 27 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 28, offset: 27 },
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') -> Array',
                position: {
                  start: { line: 1, column: 31, offset: 30 },
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 41, offset: 40 },
                  end: { line: 1, column: 44, offset: 43 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 44, offset: 43 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.keys',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 133 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 116, offset: 115 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 116, offset: 115 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 7, column: 4, offset: 136 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 2, column: 112, offset: 226 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 2, column: 112, offset: 226 },
              indent: [ 1 ]
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 },
              indent: []
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
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 16, offset: 15 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '(object Object',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 30, offset: 29 },
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') -> Array',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 43, offset: 42 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 1, column: 43, offset: 42 },
                  end: { line: 1, column: 46, offset: 45 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.values',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 1, column: 45, offset: 44 },
                  indent: []
                }
              },
              {
                type: 'html',
                value: '<Array>',
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 },
              indent: []
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
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 25, offset: 24 },
              indent: []
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
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
              end: { line: 3, column: 4, offset: 89 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Promise.all',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 19, offset: 18 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' but for objects.',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 },
              indent: []
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
                  end: { line: 1, column: 70, offset: 69 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 70, offset: 69 },
              indent: []
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
                  end: { line: 1, column: 26, offset: 25 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 26, offset: 25 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 7, column: 4, offset: 187 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 55, offset: 54 },
                  end: { line: 1, column: 66, offset: 65 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 66, offset: 65 },
                  end: { line: 1, column: 87, offset: 86 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 87, offset: 86 },
              indent: []
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
                  end: { line: 3, column: 127, offset: 214 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 88 },
              end: { line: 3, column: 127, offset: 214 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 12, column: 4, offset: 427 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
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
                  end: { line: 1, column: 105, offset: 104 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 },
              indent: []
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 8, column: 4, offset: 146 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 96, offset: 95 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 96, offset: 95 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
              end: { line: 7, column: 4, offset: 172 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 54, offset: 53 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 54, offset: 53 },
                  end: { line: 1, column: 62, offset: 61 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous',
                position: {
                  start: { line: 1, column: 62, offset: 61 },
                  end: { line: 1, column: 82, offset: 81 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 },
              indent: []
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
                  end: { line: 3, column: 122, offset: 204 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 83 },
              end: { line: 3, column: 122, offset: 204 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              end: { line: 3, column: 4, offset: 78 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 45, offset: 44 },
                  indent: []
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
                      end: { line: 1, column: 59, offset: 58 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 123, offset: 122 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 123, offset: 122 },
                  end: { line: 1, column: 124, offset: 123 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 124, offset: 123 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 6, column: 4, offset: 124 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 50, offset: 49 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 50, offset: 49 },
                  end: { line: 1, column: 61, offset: 60 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 61, offset: 60 },
                  end: { line: 1, column: 82, offset: 81 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 7, column: 4, offset: 122 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 79, offset: 78 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 79, offset: 78 },
              indent: []
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 8, column: 4, offset: 174 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.write',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' on a Node.js stream',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 34, offset: 33 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 180 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 43, offset: 42 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 180 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 87, offset: 86 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'mapper',
                position: {
                  start: { line: 1, column: 87, offset: 86 },
                  end: { line: 1, column: 95, offset: 94 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' may be asynchronous.',
                position: {
                  start: { line: 1, column: 95, offset: 94 },
                  end: { line: 1, column: 116, offset: 115 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 116, offset: 115 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 20, offset: 19 },
              indent: []
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
                  end: { line: 1, column: 43, offset: 42 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 43, offset: 42 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Symbol.asyncIterator',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 36, offset: 35 },
              indent: []
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 },
              indent: []
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Symbol.iterator',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 6, column: 4, offset: 105 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 88, offset: 87 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 88, offset: 87 },
              indent: []
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
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
              end: { line: 7, column: 4, offset: 193 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'a ? b : c',
                position: {
                  start: { line: 1, column: 31, offset: 30 },
                  end: { line: 1, column: 42, offset: 41 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' but for thunks.',
                position: {
                  start: { line: 1, column: 42, offset: 41 },
                  end: { line: 1, column: 58, offset: 57 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 58, offset: 57 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 6, column: 4, offset: 111 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 143 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 50, offset: 49 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 50, offset: 49 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 8, column: 4, offset: 173 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 9, column: 4, offset: 203 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 51, offset: 50 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 10, column: 4, offset: 233 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 51, offset: 50 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 51, offset: 50 },
              indent: []
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
    name: 'all',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
      '  |{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '  foldable Foldable<T>\n' +
      '\n' +
      'all(predicate)(foldable) -> Promise|boolean\n' +
      '```',
    description: 'Test a predicate concurrently across all items of a collection, returning true if all predications are truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  all(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // false\n' +
      '\n' +
      'console.log(\n' +
      '  all(isOdd)([1, 3, 5]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The value may be an asynchronous stream.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncNumbers = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'all(async number => number < 6)(asyncNumbers()).then(console.log) // true\n' +
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
                value: 'all',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
              '  |{ reduce: Reducer<T>=>any }|Object<T>\n' +
              '\n' +
              'var T any,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '  foldable Foldable<T>\n' +
              '\n' +
              'all(predicate)(foldable) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 263 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 263 }
        }
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
                  end: { line: 1, column: 111, offset: 110 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 111, offset: 110 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  all(isOdd)([1, 2, 3, 4, 5]),\n' +
              ') // false\n' +
              '\n' +
              'console.log(\n' +
              '  all(isOdd)([1, 3, 5]),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 112 },
              end: { line: 13, column: 4, offset: 287 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The value may be an asynchronous stream.',
                position: {
                  start: { line: 15, column: 1, offset: 289 },
                  end: { line: 15, column: 41, offset: 329 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 289 },
              end: { line: 15, column: 41, offset: 329 },
              indent: []
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
              'all(async number => number < 6)(asyncNumbers()).then(console.log) // true',
            position: {
              start: { line: 17, column: 1, offset: 331 },
              end: { line: 23, column: 4, offset: 526 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 526 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'always',
    synopsis: '```coffeescript [specscript]\nalways(value any) -> getter ()=>value\n```',
    description: 'Create a function that always returns a value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const always5 = always(5)\n' +
      '\n' +
      'console.log(always5()) // 5\n' +
      '\n' +
      'console.log(\n' +
      '  fork({\n' +
      '    a: always(1),\n' +
      '    b: always(2),\n' +
      '    c: always(3),\n' +
      '  })(),\n' +
      ') // { a: 1, b: 2, c: 3 }\n' +
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 3, column: 4, offset: 70 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 47, offset: 46 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const always5 = always(5)\n' +
              '\n' +
              'console.log(always5()) // 5\n' +
              '\n' +
              'console.log(\n' +
              '  fork({\n' +
              '    a: always(1),\n' +
              '    b: always(2),\n' +
              '    c: always(3),\n' +
              '  })(),\n' +
              ') // { a: 1, b: 2, c: 3 }',
            position: {
              start: { line: 3, column: 1, offset: 48 },
              end: { line: 15, column: 4, offset: 244 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 244 }
        }
      }
    }
  },
  {
    name: 'and',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  predicates Array<value=>Promise|boolean>\n' +
      '\n' +
      'and(predicates)(value) -> Promise|boolean\n' +
      '```',
    description: 'Test an array of predicates concurrently against a single input, returning true if all test truthy.\n' +
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
    execution: 'serial',
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'var value any,\n' +
              '  predicates Array<value=>Promise|boolean>\n' +
              '\n' +
              'and(predicates)(value) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 133 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 133 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test an array of predicates concurrently against a single input, returning true if all test truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 100, offset: 99 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 100, offset: 99 },
              indent: []
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
              start: { line: 3, column: 1, offset: 101 },
              end: { line: 13, column: 4, offset: 322 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 322 }
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
                value: 'serial',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 },
              indent: []
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
    name: 'any',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
      '  |{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '  foldable Foldable<T>\n' +
      '\n' +
      'any(predicate)(foldable) -> Promise|boolean\n' +
      '```',
    description: 'Test a predicate concurrently across all items of a collection, returning true if any test truthy.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  any(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // true\n' +
      '```\n' +
      '\n' +
      'The value may be an asynchronous stream.\n' +
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
      'any(pipe([\n' +
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
                value: 'any',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>\n' +
              '  |{ reduce: Reducer<T>=>any }|Object<T>\n' +
              '\n' +
              'var T any,\n' +
              '  predicate T=>Promise|boolean,\n' +
              '  foldable Foldable<T>\n' +
              '\n' +
              'any(predicate)(foldable) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 263 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 263 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test a predicate concurrently across all items of a collection, returning true if any test truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 99, offset: 98 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  any(isOdd)([1, 2, 3, 4, 5]),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 9, column: 4, offset: 225 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The value may be an asynchronous stream.',
                position: {
                  start: { line: 11, column: 1, offset: 227 },
                  end: { line: 11, column: 41, offset: 267 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 227 },
              end: { line: 11, column: 41, offset: 267 },
              indent: []
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
              'any(pipe([\n' +
              '  fetchTodo,\n' +
              "  todo => todo.title.startsWith('fugiat'),\n" +
              ']))(todoIDsGenerator()).then(console.log) // true',
            position: {
              start: { line: 13, column: 1, offset: 269 },
              end: { line: 32, column: 4, offset: 706 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 32, column: 4, offset: 706 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
    name: 'assign',
    synopsis: '```coffeescript [specscript]\n' +
      'var source Object,\n' +
      '  funcsObject Object<source=>Promise|any>\n' +
      '\n' +
      'assign(funcsObject)(source) -> resultsMergedWithSource Promise|Object\n' +
      '```',
    description: 'Compose an object from a source object merged with its evaluations with a specifying object of functions. Functions of the specifying object may return Promises.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  assign({\n' +
      '    squared: ({ number }) => number ** 2,\n' +
      '    cubed: ({ number }) => number ** 3,\n' +
      '  })({ number: 3 }),\n' +
      ') // { number: 3, squared: 9, cubed: 27 }\n' +
      '\n' +
      'assign({\n' +
      '  asyncNumber: async ({ number }) => number,\n' +
      '})({ number: 3 }).then(console.log) // { number: 3, asyncNumber: 3 }\n' +
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
            value: 'var source Object,\n' +
              '  funcsObject Object<source=>Promise|any>\n' +
              '\n' +
              'assign(funcsObject)(source) -> resultsMergedWithSource Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 164 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 164 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Compose an object from a source object merged with its evaluations with a specifying object of functions. Functions of the specifying object may return Promises.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 162, offset: 161 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 162, offset: 161 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              '  assign({\n' +
              '    squared: ({ number }) => number ** 2,\n' +
              '    cubed: ({ number }) => number ** 3,\n' +
              '  })({ number: 3 }),\n' +
              ') // { number: 3, squared: 9, cubed: 27 }\n' +
              '\n' +
              'assign({\n' +
              '  asyncNumber: async ({ number }) => number,\n' +
              '})({ number: 3 }).then(console.log) // { number: 3, asyncNumber: 3 }',
            position: {
              start: { line: 3, column: 1, offset: 163 },
              end: { line: 14, column: 4, offset: 486 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 14, column: 4, offset: 486 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'curry',
    synopsis: '```coffeescript [specscript]\n' +
      '__ = Symbol(placeholder)\n' +
      '\n' +
      'var func function,\n' +
      '  args ...(__|any),\n' +
      '  moreArgs ...(__|any)\n' +
      '\n' +
      'curry(func, ...args) -> curried function|any\n' +
      '\n' +
      'curry(func, ...args)(...moreArgs) -> curried function|any\n' +
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
            value: '__ = Symbol(placeholder)\n' +
              '\n' +
              'var func function,\n' +
              '  args ...(__|any),\n' +
              '  moreArgs ...(__|any)\n' +
              '\n' +
              'curry(func, ...args) -> curried function|any\n' +
              '\n' +
              'curry(func, ...args)(...moreArgs) -> curried function|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 11, column: 4, offset: 225 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 225 }
        }
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
                  end: { line: 1, column: 98, offset: 97 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '__',
                position: {
                  start: { line: 1, column: 98, offset: 97 },
                  end: { line: 1, column: 102, offset: 101 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' to specify an argument to be resolved in the partially applied function.',
                position: {
                  start: { line: 1, column: 102, offset: 101 },
                  end: { line: 1, column: 175, offset: 174 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 175, offset: 174 },
              indent: []
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
              end: { line: 15, column: 4, offset: 645 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
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
      '__ = Symbol(placeholder)\n' +
      '\n' +
      'var arity number,\n' +
      '  func function,\n' +
      '  args Array<__|any>,\n' +
      '  curried function\n' +
      '\n' +
      'curry.arity(arity, func, ...args) -> curried|any\n' +
      '```',
    description: '`curry` with specified arity as the first parameter. Useful for locking down variadic functions.\n' +
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
            value: '__ = Symbol(placeholder)\n' +
              '\n' +
              'var arity number,\n' +
              '  func function,\n' +
              '  args Array<__|any>,\n' +
              '  curried function\n' +
              '\n' +
              'curry.arity(arity, func, ...args) -> curried|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 10, column: 4, offset: 184 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 184 }
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with specified arity as the first parameter. Useful for locking down variadic functions.',
                position: {
                  start: { line: 1, column: 8, offset: 7 },
                  end: { line: 1, column: 97, offset: 96 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 },
              indent: []
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
              end: { line: 7, column: 4, offset: 212 },
              indent: [ 1, 1, 1, 1 ]
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
      'eq(leftValue any, rightValue any) -> boolean\n' +
      'eq(leftValue any, right function)(value any) -> Promise|boolean\n' +
      'eq(left function, rightValue any)(value any) -> Promise|boolean\n' +
      'eq(left function, right function)(value any) -> Promise|boolean\n' +
      '```',
    description: 'Test for [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) between the returns of two functions. Either parameter may be an actual value for comparison.\n' +
      '\n' +
      'If both arguments are values, `eq` eagerly computes and returns a boolean value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const areNamesEqual = eq('Ted', 'George')\n" +
      '\n' +
      'console.log(areNamesEqual) // false\n' +
      '```\n' +
      '\n' +
      'If both arguments are functions, `eq` treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.\n' +
      '\n' +
      'If only one argument is a function, `eq` still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const personIsGeorge = eq(person => person.name, 'George')\n" +
      '\n' +
      'console.log(\n' +
      "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
      ') // true\n' +
      '```\n' +
      '\n' +
      'More on SameValueZero: [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)',
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
            value: 'eq(leftValue any, rightValue any) -> boolean\n' +
              'eq(leftValue any, right function)(value any) -> Promise|boolean\n' +
              'eq(left function, rightValue any)(value any) -> Promise|boolean\n' +
              'eq(left function, right function)(value any) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 269 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 269 }
        }
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
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
                      start: { line: 1, column: 11, offset: 10 },
                      end: { line: 1, column: 24, offset: 23 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 10, offset: 9 },
                  end: { line: 1, column: 88, offset: 87 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' between the returns of two functions. Either parameter may be an actual value for comparison.',
                position: {
                  start: { line: 1, column: 88, offset: 87 },
                  end: { line: 1, column: 182, offset: 181 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 182, offset: 181 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are values, ',
                position: {
                  start: { line: 3, column: 1, offset: 183 },
                  end: { line: 3, column: 31, offset: 213 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'eq',
                position: {
                  start: { line: 3, column: 31, offset: 213 },
                  end: { line: 3, column: 35, offset: 217 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' eagerly computes and returns a boolean value.',
                position: {
                  start: { line: 3, column: 35, offset: 217 },
                  end: { line: 3, column: 81, offset: 263 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 183 },
              end: { line: 3, column: 81, offset: 263 },
              indent: []
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
              start: { line: 5, column: 1, offset: 265 },
              end: { line: 9, column: 4, offset: 374 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are functions, ',
                position: {
                  start: { line: 11, column: 1, offset: 376 },
                  end: { line: 11, column: 34, offset: 409 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'eq',
                position: {
                  start: { line: 11, column: 34, offset: 409 },
                  end: { line: 11, column: 38, offset: 413 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.',
                position: {
                  start: { line: 11, column: 38, offset: 413 },
                  end: { line: 11, column: 196, offset: 571 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 376 },
              end: { line: 11, column: 196, offset: 571 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If only one argument is a function, ',
                position: {
                  start: { line: 13, column: 1, offset: 573 },
                  end: { line: 13, column: 37, offset: 609 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'eq',
                position: {
                  start: { line: 13, column: 37, offset: 609 },
                  end: { line: 13, column: 41, offset: 613 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.',
                position: {
                  start: { line: 13, column: 41, offset: 613 },
                  end: { line: 13, column: 208, offset: 780 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 573 },
              end: { line: 13, column: 208, offset: 780 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const personIsGeorge = eq(person => person.name, 'George')\n" +
              '\n' +
              'console.log(\n' +
              "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
              ') // true',
            position: {
              start: { line: 15, column: 1, offset: 782 },
              end: { line: 21, column: 4, offset: 951 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'More on SameValueZero: ',
                position: {
                  start: { line: 23, column: 1, offset: 953 },
                  end: { line: 23, column: 24, offset: 976 },
                  indent: []
                }
              },
              {
                type: 'link',
                title: null,
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness',
                children: [
                  {
                    type: 'text',
                    value: 'Equality comparisons and sameness',
                    position: {
                      start: { line: 23, column: 25, offset: 977 },
                      end: { line: 23, column: 58, offset: 1010 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 23, column: 24, offset: 976 },
                  end: { line: 23, column: 150, offset: 1102 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 953 },
              end: { line: 23, column: 150, offset: 1102 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 150, offset: 1102 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'filter',
    catchphrase: 'exclude items by predicate',
    synopsis: '```coffeescript [specscript]\n' +
      'filter(\n' +
      '  arrayPredicate (value any, index number, array Array)=>Promise|boolean\n' +
      ')(array) -> filteredArray Promise|Array\n' +
      '\n' +
      'filter(\n' +
      '  objectPredicate (value any, key string, object Object)=>Promise|boolean\n' +
      ')(object) -> filteredObject Promise|Object\n' +
      '\n' +
      'filter(\n' +
      '  setPredicate (value any, value, set Set)=>Promise|boolean\n' +
      ')(set) -> filteredSet Promise|Set\n' +
      '\n' +
      'filter(\n' +
      '  mapPredicate (value any, key any, map Map)=>Promise|boolean\n' +
      ')(map) -> filteredMap Promise|Map\n' +
      '\n' +
      'filter(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(generatorFunction GeneratorFunction) -> filteringGeneratorFunction GeneratorFunction\n' +
      '\n' +
      'filter(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(asyncGeneratorFunction AsyncGeneratorFunction) -> filteringAsyncGeneratorFunction AsyncGeneratorFunction\n' +
      '\n' +
      'filter(\n' +
      '  predicate (value any)=>Promise|boolean\n' +
      ')(reducer Reducer) -> filteringReducer Reducer\n' +
      '```',
    description: 'Filter out items from a filterable based on the results of their concurrent executions with a predicate. `filter` recognizes several vanilla JavaScript types as filterables.\n' +
      '\n' +
      ' * `Array` - filter array items by predicate\n' +
      ' * `Object` - filter object values by predicate\n' +
      ' * `Set` - filter Set values by predicate\n' +
      ' * `Map` - filter Map values by predicate (not entries)\n' +
      ' * `Iterator` - skip iterations by predicate\n' +
      ' * `AsyncIterator` - skip async iterations by predicate\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  filter(isOdd)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 3, 5]\n' +
      '\n' +
      'console.log(\n' +
      '  filter(isOdd)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
      ') // { a: 1, c: 3, e: 5 }\n' +
      '\n' +
      'console.log(\n' +
      '  filter(isOdd)(new Set([1, 2, 3, 4, 5])),\n' +
      ') // Set { 1, 3, 5 }\n' +
      '```\n' +
      '\n' +
      'Passing a generator function to `filter` in filterable position returns a generator function that produces filtering generators; all values that are normally yielded by a generator that test falsy by the predicate are skipped by a filtering generator.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const numbersGeneratorFunction = function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const oddNumbersGeneratorFunction = filter(isOdd)(numbersGeneratorFunction)\n' +
      '\n' +
      'for (const number of oddNumbersGeneratorFunction()) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'const oddNumbersGenerator = filter(isOdd)(numbersGeneratorFunction())\n' +
      '\n' +
      'for (const number of oddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```\n' +
      '\n' +
      'In a similar vein to generator functions, passing an async generator function in filterable position creates an async generator function of filtered async generators. Each filtered async generator skips async iterations with values that test falsy by the predicate.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const asyncIsOdd = async number => number % 2 == 1\n' +
      '\n' +
      'const asyncNumbersGeneratorFunction = async function* () {\n' +
      '  yield 1; yield 2; yield 3; yield 4; yield 5\n' +
      '}\n' +
      '\n' +
      'const asyncOddNumbersGeneratorFunction = filter(asyncIsOdd)(asyncNumbersGeneratorFunction)\n' +
      '\n' +
      'for await (const number of asyncOddNumbersGeneratorFunction()) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '\n' +
      'const asyncOddNumbersGenerator = filter(asyncIsOdd)(asyncNumbersGeneratorFunction())\n' +
      '\n' +
      'for await (const number of asyncOddNumbersGenerator) {\n' +
      '  console.log(number) // 1\n' +
      '                      // 3\n' +
      '                      // 5\n' +
      '}\n' +
      '```\n' +
      '\n' +
      "A reducer in filterable position creates a filtering reducer - one that skips items of the reducer's reducing operation if they test falsy by the predicate. It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of `reduce` must support asynchronous operations. This library provides such an implementation as `reduce`.\n" +
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 7, offset: 6 }
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
                value: 'exclude items by predicate',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 27, offset: 26 }
        }
      },
      synopsis: {
        type: 'root',
        children: [
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'filter(\n' +
              '  arrayPredicate (value any, index number, array Array)=>Promise|boolean\n' +
              ')(array) -> filteredArray Promise|Array\n' +
              '\n' +
              'filter(\n' +
              '  objectPredicate (value any, key string, object Object)=>Promise|boolean\n' +
              ')(object) -> filteredObject Promise|Object\n' +
              '\n' +
              'filter(\n' +
              '  setPredicate (value any, value, set Set)=>Promise|boolean\n' +
              ')(set) -> filteredSet Promise|Set\n' +
              '\n' +
              'filter(\n' +
              '  mapPredicate (value any, key any, map Map)=>Promise|boolean\n' +
              ')(map) -> filteredMap Promise|Map\n' +
              '\n' +
              'filter(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(generatorFunction GeneratorFunction) -> filteringGeneratorFunction GeneratorFunction\n' +
              '\n' +
              'filter(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(asyncGeneratorFunction AsyncGeneratorFunction) -> filteringAsyncGeneratorFunction AsyncGeneratorFunction\n' +
              '\n' +
              'filter(\n' +
              '  predicate (value any)=>Promise|boolean\n' +
              ')(reducer Reducer) -> filteringReducer Reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 29, column: 4, offset: 878 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 878 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Filter out items from a filterable based on the results of their concurrent executions with a predicate. ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 106, offset: 105 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 1, column: 106, offset: 105 },
                  end: { line: 1, column: 114, offset: 113 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' recognizes several vanilla JavaScript types as filterables.',
                position: {
                  start: { line: 1, column: 114, offset: 113 },
                  end: { line: 1, column: 174, offset: 173 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 174, offset: 173 },
              indent: []
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
                          start: { line: 3, column: 4, offset: 178 },
                          end: { line: 3, column: 11, offset: 185 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - filter array items by predicate',
                        position: {
                          start: { line: 3, column: 11, offset: 185 },
                          end: { line: 3, column: 45, offset: 219 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 178 },
                      end: { line: 3, column: 45, offset: 219 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 1, offset: 175 },
                  end: { line: 3, column: 45, offset: 219 },
                  indent: []
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
                          start: { line: 4, column: 4, offset: 223 },
                          end: { line: 4, column: 12, offset: 231 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - filter object values by predicate',
                        position: {
                          start: { line: 4, column: 12, offset: 231 },
                          end: { line: 4, column: 48, offset: 267 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 223 },
                      end: { line: 4, column: 48, offset: 267 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 1, offset: 220 },
                  end: { line: 4, column: 48, offset: 267 },
                  indent: []
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
                          start: { line: 5, column: 4, offset: 271 },
                          end: { line: 5, column: 9, offset: 276 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - filter Set values by predicate',
                        position: {
                          start: { line: 5, column: 9, offset: 276 },
                          end: { line: 5, column: 42, offset: 309 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 271 },
                      end: { line: 5, column: 42, offset: 309 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 268 },
                  end: { line: 5, column: 42, offset: 309 },
                  indent: []
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
                          start: { line: 6, column: 4, offset: 313 },
                          end: { line: 6, column: 9, offset: 318 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - filter Map values by predicate (not entries)',
                        position: {
                          start: { line: 6, column: 9, offset: 318 },
                          end: { line: 6, column: 56, offset: 365 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 313 },
                      end: { line: 6, column: 56, offset: 365 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 310 },
                  end: { line: 6, column: 56, offset: 365 },
                  indent: []
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
                          start: { line: 7, column: 4, offset: 369 },
                          end: { line: 7, column: 14, offset: 379 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - skip iterations by predicate',
                        position: {
                          start: { line: 7, column: 14, offset: 379 },
                          end: { line: 7, column: 45, offset: 410 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 369 },
                      end: { line: 7, column: 45, offset: 410 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 366 },
                  end: { line: 7, column: 45, offset: 410 },
                  indent: []
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
                          start: { line: 8, column: 4, offset: 414 },
                          end: { line: 8, column: 19, offset: 429 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - skip async iterations by predicate',
                        position: {
                          start: { line: 8, column: 19, offset: 429 },
                          end: { line: 8, column: 56, offset: 466 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 414 },
                      end: { line: 8, column: 56, offset: 466 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 411 },
                  end: { line: 8, column: 56, offset: 466 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 175 },
              end: { line: 8, column: 56, offset: 466 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  filter(isOdd)([1, 2, 3, 4, 5]),\n' +
              ') // [1, 3, 5]\n' +
              '\n' +
              'console.log(\n' +
              '  filter(isOdd)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
              ') // { a: 1, c: 3, e: 5 }\n' +
              '\n' +
              'console.log(\n' +
              '  filter(isOdd)(new Set([1, 2, 3, 4, 5])),\n' +
              ') // Set { 1, 3, 5 }',
            position: {
              start: { line: 10, column: 1, offset: 468 },
              end: { line: 24, column: 4, offset: 770 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Passing a generator function to ',
                position: {
                  start: { line: 26, column: 1, offset: 772 },
                  end: { line: 26, column: 33, offset: 804 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 26, column: 33, offset: 804 },
                  end: { line: 26, column: 41, offset: 812 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' in filterable position returns a generator function that produces filtering generators; all values that are normally yielded by a generator that test falsy by the predicate are skipped by a filtering generator.',
                position: {
                  start: { line: 26, column: 41, offset: 812 },
                  end: { line: 26, column: 252, offset: 1023 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 26, column: 1, offset: 772 },
              end: { line: 26, column: 252, offset: 1023 },
              indent: []
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
              'const oddNumbersGeneratorFunction = filter(isOdd)(numbersGeneratorFunction)\n' +
              '\n' +
              'for (const number of oddNumbersGeneratorFunction()) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'const oddNumbersGenerator = filter(isOdd)(numbersGeneratorFunction())\n' +
              '\n' +
              'for (const number of oddNumbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}',
            position: {
              start: { line: 28, column: 1, offset: 1025 },
              end: { line: 50, column: 4, offset: 1606 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'In a similar vein to generator functions, passing an async generator function in filterable position creates an async generator function of filtered async generators. Each filtered async generator skips async iterations with values that test falsy by the predicate.',
                position: {
                  start: { line: 52, column: 1, offset: 1608 },
                  end: { line: 52, column: 266, offset: 1873 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 52, column: 1, offset: 1608 },
              end: { line: 52, column: 266, offset: 1873 },
              indent: []
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
              'const asyncOddNumbersGeneratorFunction = filter(asyncIsOdd)(asyncNumbersGeneratorFunction)\n' +
              '\n' +
              'for await (const number of asyncOddNumbersGeneratorFunction()) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}\n' +
              '\n' +
              'const asyncOddNumbersGenerator = filter(asyncIsOdd)(asyncNumbersGeneratorFunction())\n' +
              '\n' +
              'for await (const number of asyncOddNumbersGenerator) {\n' +
              '  console.log(number) // 1\n' +
              '                      // 3\n' +
              '                      // 5\n' +
              '}',
            position: {
              start: { line: 54, column: 1, offset: 1875 },
              end: { line: 76, column: 4, offset: 2530 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: "A reducer in filterable position creates a filtering reducer - one that skips items of the reducer's reducing operation if they test falsy by the predicate. It is possible to use an asynchronous predicate when filtering a reducer, however the implementation of ",
                position: {
                  start: { line: 78, column: 1, offset: 2532 },
                  end: { line: 78, column: 262, offset: 2793 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 78, column: 262, offset: 2793 },
                  end: { line: 78, column: 270, offset: 2801 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' must support asynchronous operations. This library provides such an implementation as ',
                position: {
                  start: { line: 78, column: 270, offset: 2801 },
                  end: { line: 78, column: 357, offset: 2888 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 78, column: 357, offset: 2888 },
                  end: { line: 78, column: 365, offset: 2896 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 78, column: 365, offset: 2896 },
                  end: { line: 78, column: 366, offset: 2897 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 78, column: 1, offset: 2532 },
              end: { line: 78, column: 366, offset: 2897 },
              indent: []
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
              start: { line: 80, column: 1, offset: 2899 },
              end: { line: 90, column: 4, offset: 3146 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 90, column: 4, offset: 3146 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'filter.withIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  index number,\n' +
      '  array Array<T>,\n' +
      '  indexedPredicate (T, index, array)=>Promise|boolean\n' +
      '\n' +
      'filter.withIndex(indexedPredicate)(array) -> Array<T>\n' +
      '```',
    description: '`filter` with each predicate call supplemented by index and reference to original collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const uniq = filter.withIndex(\n' +
      '  (item, index, array) => item !== array[index + 1])\n' +
      '\n' +
      'console.log(\n' +
      '  uniq([1, 1, 1, 2, 2, 2, 3, 3, 3]),\n' +
      ') // [1, 2, 3]\n' +
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
                value: 'filter.withIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
            value: 'var T any,\n' +
              '  index number,\n' +
              '  array Array<T>,\n' +
              '  indexedPredicate (T, index, array)=>Promise|boolean\n' +
              '\n' +
              'filter.withIndex(indexedPredicate)(array) -> Array<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 186 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 186 }
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
                value: 'filter',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with each predicate call supplemented by index and reference to original collection.',
                position: {
                  start: { line: 1, column: 9, offset: 8 },
                  end: { line: 1, column: 94, offset: 93 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 94, offset: 93 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const uniq = filter.withIndex(\n' +
              '  (item, index, array) => item !== array[index + 1])\n' +
              '\n' +
              'console.log(\n' +
              '  uniq([1, 1, 1, 2, 2, 2, 3, 3, 3]),\n' +
              ') // [1, 2, 3]',
            position: {
              start: { line: 3, column: 1, offset: 95 },
              end: { line: 10, column: 4, offset: 275 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 275 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'flatMap',
    synopsis: '```coffeescript [specscript]\n' +
      'Stream<T> = { read: ()=>T, write: T=>() }\n' +
      'Monad<T> = Array<T>|String<T>|Set<T>\n' +
      '  |TypedArray<T>|Stream<T>|Iterator<T>|AsyncIterator<T>\n' +
      '  |{ chain: T=>Monad<T> }|{ flatMap: T=>Monad<T> }|Object<T>\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  flatMapper T=>Promise|Monad<T>|Foldable<T>|T,\n' +
      '  monad Monad<T>,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<Promise|T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  reducer Reducer<T>\n' +
      '\n' +
      'flatMap(flatMapper)(monad) -> Monad<T>\n' +
      '\n' +
      'flatMap(flatMapper)(generatorFunction) -> ...args=>Generator<T>\n' +
      '\n' +
      'flatMap(flatMapper)(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
      '\n' +
      'flatMap(flatMapper)(reducer) -> Reducer<T>\n' +
      '```',
    description: 'Apply a flatMapper concurrently to each item of a monad, flattening the items of each execution into a new monad that is the same type as the original.\n' +
      '\n' +
      'The following list outlines high level behavior for various input monads.\n' +
      '\n' +
      ' * `Array` - Apply a flatMapper to each item, pushing (`.push`) the items of each execution into a new array\n' +
      ' * `String` - Apply a flatMapper to each character, adding (`+`) the items of each execution into a new string\n' +
      ' * `Set` - Apply a flatMapper to each item, adding (`.add`) the items of each execution into a new set\n' +
      ' * `TypedArray` - Apply a flatMapper to each byte, setting (`.set`) the items of each execution into a new typed array\n' +
      ' * `Buffer (Node.js)` - Apply a flatMapper to each byte, setting (`.set`) the items of each execution into a new Node.js Buffer\n' +
      ' * `stream.Duplex (Node.js)` - Apply a flatMapper to each item, writing (`.write`) the items of each execution into a new duplex stream\n' +
      ' * `Object` - Apply a flatMapper to each value, assigning (`Object.assign`) the items of each execution into a new object\n' +
      " * `Reducer` - Apply a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.\n" +
      ' * `{ chain: function }` - Call `.chain` directly with flatMapper\n' +
      ' * `{ flatMap: function }` - Call `.flatMap` directly with flatMapper\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const duplicate = number => [number, number]\n' +
      '\n' +
      'console.log(\n' +
      '  flatMap(duplicate)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
      '\n' +
      'const asyncDuplicate = async number => [number, number]\n' +
      '\n' +
      'flatMap(asyncDuplicate)( // concurrent execution\n' +
      '  [1, 2, 3, 4, 5]).then(console.log) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
      '```\n' +
      '\n' +
      'A flatMapping operation concatenates onto the result synchronous values and muxes any asynchronous values. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'const repeat3 = function* (message) {\n' +
      '  yield message; yield message; yield message\n' +
      '}\n' +
      '\n' +
      'console.log( // sync is concatenated\n' +
      "  flatMap(repeat3)(['foo', 'bar', 'baz']),\n" +
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
      'flatMap(asyncRepeat3)( // async is muxed\n' +
      "  ['foo', 'bar', 'baz']).then(console.log)\n" +
      "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']\n" +
      '```\n' +
      '\n' +
      'In general, flattening is by order of concatenation with the exception of async iterables, which are muxed. Below, the two `4`s are asynchronous and are pushed onto the result after all the synchronous values have been flattened.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'flatMap(identity)([\n' +
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
      '```\n' +
      '\n' +
      'Purer functional programming is possible with `flatMap` and explicit monads. An explicit monad is any object that defines a method `.chain` or `.flatMap`.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const Maybe = value => ({\n' +
      '  chain(flatMapper) {\n' +
      '    return value == null ? value : flatMapper(value)\n' +
      '  },\n' +
      '})\n' +
      '\n' +
      'const userbase = new Map([\n' +
      "  ['1', { _id: '1', name: 'George' }],\n" +
      "  ['2', { _id: '2', name: 'Jane' }],\n" +
      "  ['3', { _id: '3', name: 'Jim' }],\n" +
      '])\n' +
      '\n' +
      'const getUserByID = async userID => userbase.get(userID)\n' +
      '\n' +
      'const logUserByID = pipe([\n' +
      '  getUserByID,\n' +
      '  Maybe,\n' +
      '  flatMap(console.log),\n' +
      '])\n' +
      '\n' +
      "logUserByID('5')\n" +
      '\n' +
      "logUserByID('1') // { _id: '1', name: 'George' }\n" +
      '```\n' +
      '\n' +
      "Additionally, `flatMap` is a powerful option when working with transducers. A flatMapping transducer applies a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.\n" +
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
                value: 'flatMap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              '  flatMapper T=>Promise|Monad<T>|Foldable<T>|T,\n' +
              '  monad Monad<T>,\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<Promise|T>,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  reducer Reducer<T>\n' +
              '\n' +
              'flatMap(flatMapper)(monad) -> Monad<T>\n' +
              '\n' +
              'flatMap(flatMapper)(generatorFunction) -> ...args=>Generator<T>\n' +
              '\n' +
              'flatMap(flatMapper)(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
              '\n' +
              'flatMap(flatMapper)(reducer) -> Reducer<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 24, column: 4, offset: 786 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 24, column: 4, offset: 786 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a flatMapper concurrently to each item of a monad, flattening the items of each execution into a new monad that is the same type as the original.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 152, offset: 151 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 152, offset: 151 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The following list outlines high level behavior for various input monads.',
                position: {
                  start: { line: 3, column: 1, offset: 153 },
                  end: { line: 3, column: 74, offset: 226 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 153 },
              end: { line: 3, column: 74, offset: 226 },
              indent: []
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
                          start: { line: 5, column: 4, offset: 231 },
                          end: { line: 5, column: 11, offset: 238 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each item, pushing (',
                        position: {
                          start: { line: 5, column: 11, offset: 238 },
                          end: { line: 5, column: 56, offset: 283 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.push',
                        position: {
                          start: { line: 5, column: 56, offset: 283 },
                          end: { line: 5, column: 63, offset: 290 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new array',
                        position: {
                          start: { line: 5, column: 63, offset: 290 },
                          end: { line: 5, column: 109, offset: 336 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 231 },
                      end: { line: 5, column: 109, offset: 336 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 228 },
                  end: { line: 5, column: 109, offset: 336 },
                  indent: []
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
                        value: 'String',
                        position: {
                          start: { line: 6, column: 4, offset: 340 },
                          end: { line: 6, column: 12, offset: 348 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each character, adding (',
                        position: {
                          start: { line: 6, column: 12, offset: 348 },
                          end: { line: 6, column: 61, offset: 397 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '+',
                        position: {
                          start: { line: 6, column: 61, offset: 397 },
                          end: { line: 6, column: 64, offset: 400 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new string',
                        position: {
                          start: { line: 6, column: 64, offset: 400 },
                          end: { line: 6, column: 111, offset: 447 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 340 },
                      end: { line: 6, column: 111, offset: 447 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 337 },
                  end: { line: 6, column: 111, offset: 447 },
                  indent: []
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
                          start: { line: 7, column: 4, offset: 451 },
                          end: { line: 7, column: 9, offset: 456 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each item, adding (',
                        position: {
                          start: { line: 7, column: 9, offset: 456 },
                          end: { line: 7, column: 53, offset: 500 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.add',
                        position: {
                          start: { line: 7, column: 53, offset: 500 },
                          end: { line: 7, column: 59, offset: 506 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new set',
                        position: {
                          start: { line: 7, column: 59, offset: 506 },
                          end: { line: 7, column: 103, offset: 550 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 451 },
                      end: { line: 7, column: 103, offset: 550 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 448 },
                  end: { line: 7, column: 103, offset: 550 },
                  indent: []
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
                          start: { line: 8, column: 4, offset: 554 },
                          end: { line: 8, column: 16, offset: 566 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each byte, setting (',
                        position: {
                          start: { line: 8, column: 16, offset: 566 },
                          end: { line: 8, column: 61, offset: 611 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.set',
                        position: {
                          start: { line: 8, column: 61, offset: 611 },
                          end: { line: 8, column: 67, offset: 617 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new typed array',
                        position: {
                          start: { line: 8, column: 67, offset: 617 },
                          end: { line: 8, column: 119, offset: 669 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 554 },
                      end: { line: 8, column: 119, offset: 669 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 551 },
                  end: { line: 8, column: 119, offset: 669 },
                  indent: []
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
                        value: 'Buffer (Node.js)',
                        position: {
                          start: { line: 9, column: 4, offset: 673 },
                          end: { line: 9, column: 22, offset: 691 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each byte, setting (',
                        position: {
                          start: { line: 9, column: 22, offset: 691 },
                          end: { line: 9, column: 67, offset: 736 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.set',
                        position: {
                          start: { line: 9, column: 67, offset: 736 },
                          end: { line: 9, column: 73, offset: 742 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new Node.js Buffer',
                        position: {
                          start: { line: 9, column: 73, offset: 742 },
                          end: { line: 9, column: 128, offset: 797 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 4, offset: 673 },
                      end: { line: 9, column: 128, offset: 797 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 670 },
                  end: { line: 9, column: 128, offset: 797 },
                  indent: []
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
                        value: 'stream.Duplex (Node.js)',
                        position: {
                          start: { line: 10, column: 4, offset: 801 },
                          end: { line: 10, column: 29, offset: 826 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each item, writing (',
                        position: {
                          start: { line: 10, column: 29, offset: 826 },
                          end: { line: 10, column: 74, offset: 871 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.write',
                        position: {
                          start: { line: 10, column: 74, offset: 871 },
                          end: { line: 10, column: 82, offset: 879 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new duplex stream',
                        position: {
                          start: { line: 10, column: 82, offset: 879 },
                          end: { line: 10, column: 136, offset: 933 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 10, column: 4, offset: 801 },
                      end: { line: 10, column: 136, offset: 933 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 10, column: 1, offset: 798 },
                  end: { line: 10, column: 136, offset: 933 },
                  indent: []
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
                          start: { line: 11, column: 4, offset: 937 },
                          end: { line: 11, column: 12, offset: 945 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Apply a flatMapper to each value, assigning (',
                        position: {
                          start: { line: 11, column: 12, offset: 945 },
                          end: { line: 11, column: 60, offset: 993 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Object.assign',
                        position: {
                          start: { line: 11, column: 60, offset: 993 },
                          end: { line: 11, column: 75, offset: 1008 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ') the items of each execution into a new object',
                        position: {
                          start: { line: 11, column: 75, offset: 1008 },
                          end: { line: 11, column: 122, offset: 1055 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 4, offset: 937 },
                      end: { line: 11, column: 122, offset: 1055 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 934 },
                  end: { line: 11, column: 122, offset: 1055 },
                  indent: []
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
                        value: 'Reducer',
                        position: {
                          start: { line: 12, column: 4, offset: 1059 },
                          end: { line: 12, column: 13, offset: 1068 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: " - Apply a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.",
                        position: {
                          start: { line: 12, column: 13, offset: 1068 },
                          end: { line: 12, column: 136, offset: 1191 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 4, offset: 1059 },
                      end: { line: 12, column: 136, offset: 1191 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 1056 },
                  end: { line: 12, column: 136, offset: 1191 },
                  indent: []
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
                        value: '{ chain: function }',
                        position: {
                          start: { line: 13, column: 4, offset: 1195 },
                          end: { line: 13, column: 25, offset: 1216 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Call ',
                        position: {
                          start: { line: 13, column: 25, offset: 1216 },
                          end: { line: 13, column: 33, offset: 1224 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.chain',
                        position: {
                          start: { line: 13, column: 33, offset: 1224 },
                          end: { line: 13, column: 41, offset: 1232 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' directly with flatMapper',
                        position: {
                          start: { line: 13, column: 41, offset: 1232 },
                          end: { line: 13, column: 66, offset: 1257 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 4, offset: 1195 },
                      end: { line: 13, column: 66, offset: 1257 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 1192 },
                  end: { line: 13, column: 66, offset: 1257 },
                  indent: []
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
                        value: '{ flatMap: function }',
                        position: {
                          start: { line: 14, column: 4, offset: 1261 },
                          end: { line: 14, column: 27, offset: 1284 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - Call ',
                        position: {
                          start: { line: 14, column: 27, offset: 1284 },
                          end: { line: 14, column: 35, offset: 1292 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.flatMap',
                        position: {
                          start: { line: 14, column: 35, offset: 1292 },
                          end: { line: 14, column: 45, offset: 1302 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' directly with flatMapper',
                        position: {
                          start: { line: 14, column: 45, offset: 1302 },
                          end: { line: 14, column: 70, offset: 1327 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 14, column: 4, offset: 1261 },
                      end: { line: 14, column: 70, offset: 1327 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 14, column: 1, offset: 1258 },
                  end: { line: 14, column: 70, offset: 1327 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 228 },
              end: { line: 14, column: 70, offset: 1327 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const duplicate = number => [number, number]\n' +
              '\n' +
              'console.log(\n' +
              '  flatMap(duplicate)([1, 2, 3, 4, 5]),\n' +
              ') // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\n' +
              '\n' +
              'const asyncDuplicate = async number => [number, number]\n' +
              '\n' +
              'flatMap(asyncDuplicate)( // concurrent execution\n' +
              '  [1, 2, 3, 4, 5]).then(console.log) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]',
            position: {
              start: { line: 16, column: 1, offset: 1329 },
              end: { line: 27, column: 4, offset: 1671 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A flatMapping operation concatenates onto the result synchronous values and muxes any asynchronous values. Muxing, or asynchronously "mixing", is the process of combining multiple asynchronous sources into one source, with order determined by the asynchronous resolution of the individual items.',
                position: {
                  start: { line: 29, column: 1, offset: 1673 },
                  end: { line: 29, column: 296, offset: 1968 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 29, column: 1, offset: 1673 },
              end: { line: 29, column: 296, offset: 1968 },
              indent: []
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
              "  flatMap(repeat3)(['foo', 'bar', 'baz']),\n" +
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
              'flatMap(asyncRepeat3)( // async is muxed\n' +
              "  ['foo', 'bar', 'baz']).then(console.log)\n" +
              "// ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz']",
            position: {
              start: { line: 31, column: 1, offset: 1970 },
              end: { line: 53, column: 4, offset: 2596 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'In general, flattening is by order of concatenation with the exception of async iterables, which are muxed. Below, the two ',
                position: {
                  start: { line: 55, column: 1, offset: 2598 },
                  end: { line: 55, column: 124, offset: 2721 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '4',
                position: {
                  start: { line: 55, column: 124, offset: 2721 },
                  end: { line: 55, column: 127, offset: 2724 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 's are asynchronous and are pushed onto the result after all the synchronous values have been flattened.',
                position: {
                  start: { line: 55, column: 127, offset: 2724 },
                  end: { line: 55, column: 230, offset: 2827 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 55, column: 1, offset: 2598 },
              end: { line: 55, column: 230, offset: 2827 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const identity = value => value\n' +
              '\n' +
              'flatMap(identity)([\n' +
              '  [1, 1],\n' +
              '  new Set([2, 2]),\n' +
              '  (function* () { yield 3; yield 3 })(),\n' +
              '  (async function* () { yield 4; yield 4 })(),\n' +
              '  { a: 5, b: 5 },\n' +
              '  6,\n' +
              '  Promise.resolve(7),\n' +
              '  new Uint8Array([8]),\n' +
              ']).then(console.log)\n' +
              '// [1, 1, 2, 3, 3, 5, 5, 6, 7, 8, 4, 4]',
            position: {
              start: { line: 57, column: 1, offset: 2829 },
              end: { line: 71, column: 4, offset: 3158 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Purer functional programming is possible with ',
                position: {
                  start: { line: 73, column: 1, offset: 3160 },
                  end: { line: 73, column: 47, offset: 3206 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 73, column: 47, offset: 3206 },
                  end: { line: 73, column: 56, offset: 3215 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' and explicit monads. An explicit monad is any object that defines a method ',
                position: {
                  start: { line: 73, column: 56, offset: 3215 },
                  end: { line: 73, column: 132, offset: 3291 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.chain',
                position: {
                  start: { line: 73, column: 132, offset: 3291 },
                  end: { line: 73, column: 140, offset: 3299 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' or ',
                position: {
                  start: { line: 73, column: 140, offset: 3299 },
                  end: { line: 73, column: 144, offset: 3303 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.flatMap',
                position: {
                  start: { line: 73, column: 144, offset: 3303 },
                  end: { line: 73, column: 154, offset: 3313 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 73, column: 154, offset: 3313 },
                  end: { line: 73, column: 155, offset: 3314 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 73, column: 1, offset: 3160 },
              end: { line: 73, column: 155, offset: 3314 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const Maybe = value => ({\n' +
              '  chain(flatMapper) {\n' +
              '    return value == null ? value : flatMapper(value)\n' +
              '  },\n' +
              '})\n' +
              '\n' +
              'const userbase = new Map([\n' +
              "  ['1', { _id: '1', name: 'George' }],\n" +
              "  ['2', { _id: '2', name: 'Jane' }],\n" +
              "  ['3', { _id: '3', name: 'Jim' }],\n" +
              '])\n' +
              '\n' +
              'const getUserByID = async userID => userbase.get(userID)\n' +
              '\n' +
              'const logUserByID = pipe([\n' +
              '  getUserByID,\n' +
              '  Maybe,\n' +
              '  flatMap(console.log),\n' +
              '])\n' +
              '\n' +
              "logUserByID('5')\n" +
              '\n' +
              "logUserByID('1') // { _id: '1', name: 'George' }",
            position: {
              start: { line: 75, column: 1, offset: 3316 },
              end: { line: 99, column: 4, offset: 3803 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Additionally, ',
                position: {
                  start: { line: 101, column: 1, offset: 3805 },
                  end: { line: 101, column: 15, offset: 3819 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'flatMap',
                position: {
                  start: { line: 101, column: 15, offset: 3819 },
                  end: { line: 101, column: 24, offset: 3828 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: " is a powerful option when working with transducers. A flatMapping transducer applies a flatMapper to each item of a reducer's reducing operation, calling each item of each execution with the reducer.",
                position: {
                  start: { line: 101, column: 24, offset: 3828 },
                  end: { line: 101, column: 224, offset: 4028 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 101, column: 1, offset: 3805 },
              end: { line: 101, column: 224, offset: 4028 },
              indent: []
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
              start: { line: 103, column: 1, offset: 4030 },
              end: { line: 118, column: 4, offset: 4391 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'In the case above, each item of the array of numbers returned by ',
                position: {
                  start: { line: 120, column: 1, offset: 4393 },
                  end: { line: 120, column: 66, offset: 4458 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'powers',
                position: {
                  start: { line: 120, column: 66, offset: 4458 },
                  end: { line: 120, column: 74, offset: 4466 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' is called with the reducer ',
                position: {
                  start: { line: 120, column: 74, offset: 4466 },
                  end: { line: 120, column: 102, offset: 4494 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'arrayConcat',
                position: {
                  start: { line: 120, column: 102, offset: 4494 },
                  end: { line: 120, column: 115, offset: 4507 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' for flattening into the final result.',
                position: {
                  start: { line: 120, column: 115, offset: 4507 },
                  end: { line: 120, column: 153, offset: 4545 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 120, column: 1, offset: 4393 },
              end: { line: 120, column: 153, offset: 4545 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 120, column: 153, offset: 4545 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'fork',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  funcsArray Array<...args=>Promise|any>,\n' +
      '  funcsObject Object<...args=>Promise|any>\n' +
      '\n' +
      'fork(funcsArray)(...args) -> parallelized Promise|Array\n' +
      '\n' +
      'fork(funcsObject)(...args) -> parallelized Promise|Object\n' +
      '```',
    description: 'Run an array or object of functions in parallel, returning an array or object result.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  fork({\n' +
      '    greetings: fork([\n' +
      "      greeting => greeting + ' world',\n" +
      "      greeting => greeting + ' mom',\n" +
      '    ]),\n' +
      "  })('hello'),\n" +
      ") // { greetings: ['hello world', 'hello mom'] }\n" +
      '```\n' +
      '\n' +
      'Use `fork` to simultaneously compose objects and handle async.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const userbase = new Map()\n' +
      "userbase.set('1', { _id: 1, name: 'George' })\n" +
      '\n' +
      'const getUserByID = async id => userbase.get(id)\n' +
      '\n' +
      'pipe([\n' +
      '  fork({\n' +
      '    id: identity,\n' +
      '    user: getUserByID,\n' +
      '  }),\n' +
      '  tap(({ id, user }) => {\n' +
      '    console.log(`Got user ${JSON.stringify(user)} by id ${id}`)\n' +
      '  }),\n' +
      "])('1')\n" +
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
                value: 'fork',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  funcsArray Array<...args=>Promise|any>,\n' +
              '  funcsObject Object<...args=>Promise|any>\n' +
              '\n' +
              'fork(funcsArray)(...args) -> parallelized Promise|Array\n' +
              '\n' +
              'fork(funcsObject)(...args) -> parallelized Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 9, column: 4, offset: 250 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 250 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Run an array or object of functions in parallel, returning an array or object result.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 86, offset: 85 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 86, offset: 85 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              '  fork({\n' +
              '    greetings: fork([\n' +
              "      greeting => greeting + ' world',\n" +
              "      greeting => greeting + ' mom',\n" +
              '    ]),\n' +
              "  })('hello'),\n" +
              ") // { greetings: ['hello world', 'hello mom'] }",
            position: {
              start: { line: 3, column: 1, offset: 87 },
              end: { line: 12, column: 4, offset: 309 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Use ',
                position: {
                  start: { line: 14, column: 1, offset: 311 },
                  end: { line: 14, column: 5, offset: 315 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'fork',
                position: {
                  start: { line: 14, column: 5, offset: 315 },
                  end: { line: 14, column: 11, offset: 321 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' to simultaneously compose objects and handle async.',
                position: {
                  start: { line: 14, column: 11, offset: 321 },
                  end: { line: 14, column: 63, offset: 373 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 14, column: 1, offset: 311 },
              end: { line: 14, column: 63, offset: 373 },
              indent: []
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
              'pipe([\n' +
              '  fork({\n' +
              '    id: identity,\n' +
              '    user: getUserByID,\n' +
              '  }),\n' +
              '  tap(({ id, user }) => {\n' +
              '    console.log(`Got user ${JSON.stringify(user)} by id ${id}`)\n' +
              '  }),\n' +
              "])('1')",
            position: {
              start: { line: 16, column: 1, offset: 375 },
              end: { line: 33, column: 4, offset: 729 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 33, column: 4, offset: 729 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'fork.series',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  funcs Array<...args=>Promise|any>\n' +
      '\n' +
      'fork.series(funcs)(...args) => forkedInSeries Promise|Array\n' +
      '```',
    description: '`fork` with serial execution.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      'fork.series([\n' +
      "  greeting => console.log(greeting + ' world'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' mom'),\n" +
      '  sleep(1000),\n' +
      "  greeting => console.log(greeting + ' darkness'),\n" +
      "])('hello') // hello world\n" +
      '            // hello mom\n' +
      '            // hello darkness\n' +
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
                value: 'fork.series',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  funcs Array<...args=>Promise|any>\n' +
              '\n' +
              'fork.series(funcs)(...args) => forkedInSeries Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 146 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 146 }
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
                value: 'fork',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with serial execution.',
                position: {
                  start: { line: 1, column: 7, offset: 6 },
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const sleep = ms => () => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              'fork.series([\n' +
              "  greeting => console.log(greeting + ' world'),\n" +
              '  sleep(1000),\n' +
              "  greeting => console.log(greeting + ' mom'),\n" +
              '  sleep(1000),\n' +
              "  greeting => console.log(greeting + ' darkness'),\n" +
              "])('hello') // hello world\n" +
              '            // hello mom\n' +
              '            // hello darkness',
            position: {
              start: { line: 3, column: 1, offset: 31 },
              end: { line: 15, column: 4, offset: 407 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 407 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
    name: 'get',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  path string|number|Array<string|number>,\n' +
      '  defaultValue (value=>any)|any\n' +
      '\n' +
      'get(path, defaultValue?) -> getter value=>any\n' +
      '```',
    description: 'Create a getter that accesses a property on a value denoted by path.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  get('hello')({ hello: 'world' }),\n" +
      ') // world\n' +
      '```\n' +
      '\n' +
      'It is possible to return a default value on not found by supplying the value or resolver of such value as the second parameter.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  get('hello', 'default')({ foo: 'bar' }),\n" +
      ') // default\n' +
      '\n' +
      'console.log(\n' +
      "  get('hello', object => object.foo)({ foo: 'bar' }),\n" +
      ') // bar\n' +
      '```\n' +
      '\n' +
      '`get` supports three types of path patterns for nested property access.\n' +
      '\n' +
      " * dot delimited - `'a.b.c'`\n" +
      " * bracket notation - `'a[0].value'`\n" +
      " * an array of keys or indices - `['a', 0, 'value']`\n" +
      '\n' +
      '```javascript [playground]\n' +
      "const nestedABC0 = { a: { b: { c: ['hello'] } } }\n" +
      '\n' +
      'console.log(\n' +
      "  get('a.b.c[0]')(nestedABC0),\n" +
      ') // hello\n' +
      '\n' +
      "const nested00000 = [[[[['foo']]]]]\n" +
      '\n' +
      'console.log(\n' +
      "  get('0.0.0.0.0')(nested00000),\n" +
      ') // foo\n' +
      '\n' +
      'console.log(\n' +
      "  get('[0][0][0][0][0]')(nested00000),\n" +
      ') // foo\n' +
      '\n' +
      'console.log(\n' +
      '  get([0, 0, 0, 0, 0])(nested00000),\n' +
      ') // foo\n' +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'var value any,\n' +
              '  path string|number|Array<string|number>,\n' +
              '  defaultValue (value=>any)|any\n' +
              '\n' +
              'get(path, defaultValue?) -> getter value=>any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 169 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 169 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a getter that accesses a property on a value denoted by path.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 69, offset: 68 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 69, offset: 68 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "console.log(\n  get('hello')({ hello: 'world' }),\n) // world",
            position: {
              start: { line: 3, column: 1, offset: 70 },
              end: { line: 7, column: 4, offset: 160 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'It is possible to return a default value on not found by supplying the value or resolver of such value as the second parameter.',
                position: {
                  start: { line: 9, column: 1, offset: 162 },
                  end: { line: 9, column: 128, offset: 289 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 162 },
              end: { line: 9, column: 128, offset: 289 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  get('hello', 'default')({ foo: 'bar' }),\n" +
              ') // default\n' +
              '\n' +
              'console.log(\n' +
              "  get('hello', object => object.foo)({ foo: 'bar' }),\n" +
              ') // bar',
            position: {
              start: { line: 11, column: 1, offset: 291 },
              end: { line: 19, column: 4, offset: 467 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'get',
                position: {
                  start: { line: 21, column: 1, offset: 469 },
                  end: { line: 21, column: 6, offset: 474 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' supports three types of path patterns for nested property access.',
                position: {
                  start: { line: 21, column: 6, offset: 474 },
                  end: { line: 21, column: 72, offset: 540 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 469 },
              end: { line: 21, column: 72, offset: 540 },
              indent: []
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
                          start: { line: 23, column: 4, offset: 545 },
                          end: { line: 23, column: 20, offset: 561 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 23, column: 20, offset: 561 },
                          end: { line: 23, column: 29, offset: 570 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 23, column: 4, offset: 545 },
                      end: { line: 23, column: 29, offset: 570 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 23, column: 1, offset: 542 },
                  end: { line: 23, column: 29, offset: 570 },
                  indent: []
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
                          start: { line: 24, column: 4, offset: 574 },
                          end: { line: 24, column: 23, offset: 593 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 24, column: 23, offset: 593 },
                          end: { line: 24, column: 37, offset: 607 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 24, column: 4, offset: 574 },
                      end: { line: 24, column: 37, offset: 607 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 24, column: 1, offset: 571 },
                  end: { line: 24, column: 37, offset: 607 },
                  indent: []
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
                          start: { line: 25, column: 4, offset: 611 },
                          end: { line: 25, column: 34, offset: 641 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 25, column: 34, offset: 641 },
                          end: { line: 25, column: 53, offset: 660 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 25, column: 4, offset: 611 },
                      end: { line: 25, column: 53, offset: 660 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 25, column: 1, offset: 608 },
                  end: { line: 25, column: 53, offset: 660 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 23, column: 1, offset: 542 },
              end: { line: 25, column: 53, offset: 660 },
              indent: [ 1, 1 ]
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "const nestedABC0 = { a: { b: { c: ['hello'] } } }\n" +
              '\n' +
              'console.log(\n' +
              "  get('a.b.c[0]')(nestedABC0),\n" +
              ') // hello\n' +
              '\n' +
              "const nested00000 = [[[[['foo']]]]]\n" +
              '\n' +
              'console.log(\n' +
              "  get('0.0.0.0.0')(nested00000),\n" +
              ') // foo\n' +
              '\n' +
              'console.log(\n' +
              "  get('[0][0][0][0][0]')(nested00000),\n" +
              ') // foo\n' +
              '\n' +
              'console.log(\n' +
              '  get([0, 0, 0, 0, 0])(nested00000),\n' +
              ') // foo',
            position: {
              start: { line: 27, column: 1, offset: 662 },
              end: { line: 47, column: 4, offset: 1013 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 47, column: 4, offset: 1013 }
        }
      }
    }
  },
  {
    name: 'gt',
    synopsis: '```coffeescript [specscript]\n' +
      'gt(leftValue any, rightValue any) -> boolean\n' +
      'gt(leftValue any, right function)(value any) -> Promise|boolean\n' +
      'gt(left function, rightValue any)(value any) -> Promise|boolean\n' +
      'gt(left function, right function)(value any) -> Promise|boolean\n' +
      '```',
    description: 'Test if a left value is greater than (`>`) a right value. Either parameter may be an actual value.\n' +
      '\n' +
      'If both arguments are values, `gt` eagerly computes and returns a boolean value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const age = 40\n' +
      '\n' +
      'const isAgeGreaterThan21 = gt(age, 21)\n' +
      '\n' +
      'console.log(isAgeGreaterThan21) // true\n' +
      '```\n' +
      '\n' +
      'If both arguments are functions, `gt` treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.\n' +
      '\n' +
      'If only one argument is a function, `gt` still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOfLegalAge = gt(21, person => person.age)\n' +
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
            value: 'gt(leftValue any, rightValue any) -> boolean\n' +
              'gt(leftValue any, right function)(value any) -> Promise|boolean\n' +
              'gt(left function, rightValue any)(value any) -> Promise|boolean\n' +
              'gt(left function, right function)(value any) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 269 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 269 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a left value is greater than (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '>',
                position: {
                  start: { line: 1, column: 39, offset: 38 },
                  end: { line: 1, column: 42, offset: 41 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') a right value. Either parameter may be an actual value.',
                position: {
                  start: { line: 1, column: 42, offset: 41 },
                  end: { line: 1, column: 99, offset: 98 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 99, offset: 98 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are values, ',
                position: {
                  start: { line: 3, column: 1, offset: 100 },
                  end: { line: 3, column: 31, offset: 130 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gt',
                position: {
                  start: { line: 3, column: 31, offset: 130 },
                  end: { line: 3, column: 35, offset: 134 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' eagerly computes and returns a boolean value.',
                position: {
                  start: { line: 3, column: 35, offset: 134 },
                  end: { line: 3, column: 81, offset: 180 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 100 },
              end: { line: 3, column: 81, offset: 180 },
              indent: []
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
              start: { line: 5, column: 1, offset: 182 },
              end: { line: 11, column: 4, offset: 308 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are functions, ',
                position: {
                  start: { line: 13, column: 1, offset: 310 },
                  end: { line: 13, column: 34, offset: 343 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gt',
                position: {
                  start: { line: 13, column: 34, offset: 343 },
                  end: { line: 13, column: 38, offset: 347 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.',
                position: {
                  start: { line: 13, column: 38, offset: 347 },
                  end: { line: 13, column: 196, offset: 505 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 310 },
              end: { line: 13, column: 196, offset: 505 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If only one argument is a function, ',
                position: {
                  start: { line: 15, column: 1, offset: 507 },
                  end: { line: 15, column: 37, offset: 543 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gt',
                position: {
                  start: { line: 15, column: 37, offset: 543 },
                  end: { line: 15, column: 41, offset: 547 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.',
                position: {
                  start: { line: 15, column: 41, offset: 547 },
                  end: { line: 15, column: 208, offset: 714 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 507 },
              end: { line: 15, column: 208, offset: 714 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOfLegalAge = gt(21, person => person.age)\n' +
              '\n' +
              'const juvenile = { age: 16 }\n' +
              '\n' +
              'console.log(isOfLegalAge(juvenile)) // false',
            position: {
              start: { line: 17, column: 1, offset: 716 },
              end: { line: 23, column: 4, offset: 872 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 872 }
        }
      }
    }
  },
  {
    name: 'gte',
    synopsis: '```coffeescript [specscript]\n' +
      'gte(leftValue any, rightValue any) -> boolean\n' +
      'gte(leftValue any, right function)(value any) -> Promise|boolean\n' +
      'gte(left function, rightValue any)(value any) -> Promise|boolean\n' +
      'gte(left function, right function)(value any) -> Promise|boolean\n' +
      '```',
    description: 'Test if a left value is greater than or equal (`>=`) to a right value. Either parameter may be an actual value.\n' +
      '\n' +
      'If both arguments are values, `gte` eagerly computes and returns a boolean value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const age = 20\n' +
      '\n' +
      'const isAdultAge = gte(age, 18)\n' +
      '\n' +
      'console.log(isAdultAge) // true\n' +
      '```\n' +
      '\n' +
      'If both arguments are functions, `gte` treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.\n' +
      '\n' +
      'If only one argument is a function, `gte` still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.\n' +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'gte(leftValue any, rightValue any) -> boolean\n' +
              'gte(leftValue any, right function)(value any) -> Promise|boolean\n' +
              'gte(left function, rightValue any)(value any) -> Promise|boolean\n' +
              'gte(left function, right function)(value any) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 273 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 273 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a left value is greater than or equal (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 48, offset: 47 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '>=',
                position: {
                  start: { line: 1, column: 48, offset: 47 },
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') to a right value. Either parameter may be an actual value.',
                position: {
                  start: { line: 1, column: 52, offset: 51 },
                  end: { line: 1, column: 112, offset: 111 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 112, offset: 111 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are values, ',
                position: {
                  start: { line: 3, column: 1, offset: 113 },
                  end: { line: 3, column: 31, offset: 143 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gte',
                position: {
                  start: { line: 3, column: 31, offset: 143 },
                  end: { line: 3, column: 36, offset: 148 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' eagerly computes and returns a boolean value.',
                position: {
                  start: { line: 3, column: 36, offset: 148 },
                  end: { line: 3, column: 82, offset: 194 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 113 },
              end: { line: 3, column: 82, offset: 194 },
              indent: []
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
              start: { line: 5, column: 1, offset: 196 },
              end: { line: 11, column: 4, offset: 307 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are functions, ',
                position: {
                  start: { line: 13, column: 1, offset: 309 },
                  end: { line: 13, column: 34, offset: 342 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gte',
                position: {
                  start: { line: 13, column: 34, offset: 342 },
                  end: { line: 13, column: 39, offset: 347 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.',
                position: {
                  start: { line: 13, column: 39, offset: 347 },
                  end: { line: 13, column: 197, offset: 505 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 309 },
              end: { line: 13, column: 197, offset: 505 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If only one argument is a function, ',
                position: {
                  start: { line: 15, column: 1, offset: 507 },
                  end: { line: 15, column: 37, offset: 543 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'gte',
                position: {
                  start: { line: 15, column: 37, offset: 543 },
                  end: { line: 15, column: 42, offset: 548 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.',
                position: {
                  start: { line: 15, column: 42, offset: 548 },
                  end: { line: 15, column: 209, offset: 715 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 507 },
              end: { line: 15, column: 209, offset: 715 },
              indent: []
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
              start: { line: 17, column: 1, offset: 717 },
              end: { line: 25, column: 4, offset: 938 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 25, column: 4, offset: 938 }
        }
      }
    }
  },
  {
    name: 'lt',
    synopsis: '```coffeescript [specscript]\n' +
      'lt(leftValue any, rightValue any) -> boolean\n' +
      'lt(leftValue any, right function)(value any) -> Promise|boolean\n' +
      'lt(left function, rightValue any)(value any) -> Promise|boolean\n' +
      'lt(left function, right function)(value any) -> Promise|boolean\n' +
      '```',
    description: 'Test if a left value is less than (`<`) a right value. Either parameter may be an actual value.\n' +
      '\n' +
      'If both arguments are values, `lt` eagerly computes and returns a boolean value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(lt(1, 3)) // true\n' +
      'console.log(lt(3, 3)) // false\n' +
      'console.log(lt(4, 3)) // false\n' +
      '```\n' +
      '\n' +
      'If both arguments are functions, `lt` treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.\n' +
      '\n' +
      'If only one argument is a function, `lt` still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThan3 = lt(identity, 3)\n' +
      '\n' +
      'console.log(isLessThan3(1), true)\n' +
      'console.log(isLessThan3(3), false)\n' +
      'console.log(isLessThan3(5), false)\n' +
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
            value: 'lt(leftValue any, rightValue any) -> boolean\n' +
              'lt(leftValue any, right function)(value any) -> Promise|boolean\n' +
              'lt(left function, rightValue any)(value any) -> Promise|boolean\n' +
              'lt(left function, right function)(value any) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 269 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 269 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a left value is less than (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '<',
                position: {
                  start: { line: 1, column: 36, offset: 35 },
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') a right value. Either parameter may be an actual value.',
                position: {
                  start: { line: 1, column: 39, offset: 38 },
                  end: { line: 1, column: 96, offset: 95 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 96, offset: 95 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are values, ',
                position: {
                  start: { line: 3, column: 1, offset: 97 },
                  end: { line: 3, column: 31, offset: 127 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lt',
                position: {
                  start: { line: 3, column: 31, offset: 127 },
                  end: { line: 3, column: 35, offset: 131 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' eagerly computes and returns a boolean value.',
                position: {
                  start: { line: 3, column: 35, offset: 131 },
                  end: { line: 3, column: 81, offset: 177 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 97 },
              end: { line: 3, column: 81, offset: 177 },
              indent: []
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
              start: { line: 5, column: 1, offset: 179 },
              end: { line: 9, column: 4, offset: 301 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are functions, ',
                position: {
                  start: { line: 11, column: 1, offset: 303 },
                  end: { line: 11, column: 34, offset: 336 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lt',
                position: {
                  start: { line: 11, column: 34, offset: 336 },
                  end: { line: 11, column: 38, offset: 340 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.',
                position: {
                  start: { line: 11, column: 38, offset: 340 },
                  end: { line: 11, column: 196, offset: 498 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 303 },
              end: { line: 11, column: 196, offset: 498 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If only one argument is a function, ',
                position: {
                  start: { line: 13, column: 1, offset: 500 },
                  end: { line: 13, column: 37, offset: 536 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lt',
                position: {
                  start: { line: 13, column: 37, offset: 536 },
                  end: { line: 13, column: 41, offset: 540 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.',
                position: {
                  start: { line: 13, column: 41, offset: 540 },
                  end: { line: 13, column: 208, offset: 707 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 500 },
              end: { line: 13, column: 208, offset: 707 },
              indent: []
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
              'console.log(isLessThan3(1), true)\n' +
              'console.log(isLessThan3(3), false)\n' +
              'console.log(isLessThan3(5), false)',
            position: {
              start: { line: 15, column: 1, offset: 709 },
              end: { line: 23, column: 4, offset: 913 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 913 }
        }
      }
    }
  },
  {
    name: 'lte',
    synopsis: '```coffeescript [specscript]\n' +
      'lte(leftValue any, rightValue any) -> boolean\n' +
      'lte(leftValue any, right function)(value any) -> Promise|boolean\n' +
      'lte(left function, rightValue any)(value any) -> Promise|boolean\n' +
      'lte(left function, right function)(value any) -> Promise|boolean\n' +
      '```',
    description: 'Test if a left value is less than or equal (`<=`) to a right value. Either parameter may be an actual value.\n' +
      '\n' +
      'If both arguments are values, `lte` eagerly computes and returns a boolean value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(lte(1, 3)) // true\n' +
      'console.log(lte(3, 3)) // true\n' +
      'console.log(lte(4, 3)) // false\n' +
      '```\n' +
      '\n' +
      'If both arguments are functions, `lte` treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.\n' +
      '\n' +
      'If only one argument is a function, `lte` still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.\n' +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'lte(leftValue any, rightValue any) -> boolean\n' +
              'lte(leftValue any, right function)(value any) -> Promise|boolean\n' +
              'lte(left function, rightValue any)(value any) -> Promise|boolean\n' +
              'lte(left function, right function)(value any) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 273 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 273 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test if a left value is less than or equal (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 45, offset: 44 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '<=',
                position: {
                  start: { line: 1, column: 45, offset: 44 },
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') to a right value. Either parameter may be an actual value.',
                position: {
                  start: { line: 1, column: 49, offset: 48 },
                  end: { line: 1, column: 109, offset: 108 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 109, offset: 108 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are values, ',
                position: {
                  start: { line: 3, column: 1, offset: 110 },
                  end: { line: 3, column: 31, offset: 140 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lte',
                position: {
                  start: { line: 3, column: 31, offset: 140 },
                  end: { line: 3, column: 36, offset: 145 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' eagerly computes and returns a boolean value.',
                position: {
                  start: { line: 3, column: 36, offset: 145 },
                  end: { line: 3, column: 82, offset: 191 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 110 },
              end: { line: 3, column: 82, offset: 191 },
              indent: []
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
              start: { line: 5, column: 1, offset: 193 },
              end: { line: 9, column: 4, offset: 317 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If both arguments are functions, ',
                position: {
                  start: { line: 11, column: 1, offset: 319 },
                  end: { line: 11, column: 34, offset: 352 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lte',
                position: {
                  start: { line: 11, column: 34, offset: 352 },
                  end: { line: 11, column: 39, offset: 357 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' treats those functions as argument resolvers and returns a function that first resolves its arguments by the argument resolvers before making the comparison.',
                position: {
                  start: { line: 11, column: 39, offset: 357 },
                  end: { line: 11, column: 197, offset: 515 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 319 },
              end: { line: 11, column: 197, offset: 515 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If only one argument is a function, ',
                position: {
                  start: { line: 13, column: 1, offset: 517 },
                  end: { line: 13, column: 37, offset: 553 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'lte',
                position: {
                  start: { line: 13, column: 37, offset: 553 },
                  end: { line: 13, column: 42, offset: 558 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' still returns a function that resolves its arguments by the argument resolver, treating the value (non function) argument as an already resolved value for comparison.',
                position: {
                  start: { line: 13, column: 42, offset: 558 },
                  end: { line: 13, column: 209, offset: 725 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 517 },
              end: { line: 13, column: 209, offset: 725 },
              indent: []
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
              start: { line: 15, column: 1, offset: 727 },
              end: { line: 23, column: 4, offset: 967 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 967 }
        }
      }
    }
  },
  {
    name: 'map',
    synopsis: '```coffeescript [specscript]\n' +
      'map(\n' +
      '  arrayMapper (value any, index number, array Array)=>Promise|any\n' +
      ')(array) -> mappedArray Promise|Array\n' +
      '\n' +
      'map(\n' +
      '  objectMapper (value any, key string, object Object)=>Promise|any\n' +
      ')(object) -> mappedObject Promise|Array\n' +
      '\n' +
      'map(\n' +
      '  setMapper (value any, value, set Set)=>Promise|any\n' +
      ')(set) -> mappedSet Promise|Set\n' +
      '\n' +
      'map(\n' +
      '  mapMapper (value any, key any, originalMap Map)=>Promise|any\n' +
      ')(originalMap) -> mappedMap Promise|Map\n' +
      '\n' +
      'map(\n' +
      '  probablyShouldBeSyncMapper (value any)=>any\n' +
      ')(generatorFunction) -> mappingGeneratorFunction ...args=>Generator\n' +
      '\n' +
      'map(\n' +
      '  mapper (value any)=>Promise|any\n' +
      ')(asyncGeneratorFunction) -> mappingAsyncGeneratorFunction ...args=>AsyncGenerator\n' +
      '\n' +
      'map(\n' +
      '  mapper (value any)=>Promise|any\n' +
      ')(originalReducer Reducer) -> mappingReducer Reducer\n' +
      '```',
    description: 'Apply a mapper concurrently to each item of a functor, returning the results in a functor of the same type. If order is implied by the collection, it is maintained in the result. The following list describes `map` behavior with vanilla JavaScript functors.\n' +
      '\n' +
      ' * `Array` - apply a mapper to items, returning a new array of results\n' +
      ' * `Object` - apply a mapper to object values, returning a new object of results\n' +
      ' * `Set` - apply a mapper to Set items, returning a new `Set` of results\n' +
      ' * `Map` - apply a mapper to Map values (not entries), returning a new `Map` of results\n' +
      " * `Iterator`/`Generator` - return an iterator that applies a mapper to each iteration's value, yielding mapped iterations\n" +
      " * `AsyncIterator`/`AsyncGenerator` - return an async iterator that applies a mapper to each async iteration's value, yielding Promises of a mapped iterations\n" +
      ' * `{ map: function }` - call `.map` directly with mapper\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'console.log(\n' +
      '  map(square)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  map(square)(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])),\n" +
      ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }\n" +
      '\n' +
      'console.log(\n' +
      '  map(square)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
      ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }\n' +
      '```\n' +
      '\n' +
      '`map` recognizes three types of functions in functor position:\n' +
      '\n' +
      ' * Generator Functions `function* () {}` - `map(mapper)(generatorFunction)` creates a generator function that generates generators of mapped values. Async mappers are yielded synchronously and may lead to unexpected results.\n' +
      ' * Async Generator Functions `async function* () {}` - `map(mapper)(asyncGeneratorFunction)` creates an async generator function that generates async generators of mapped values. Promises produced by async mappers are resolved.\n' +
      " * Reducers `(accumulator, item)=>accumulator` - `map(mapper)(reducer)` creates a transducer that, when called with another reducer, creates a mapping step for each item of the reducer's reducing operation. Promises produced by async mappers are resolved.\n" +
      '\n' +
      'Use mapping generator functions to create lazy computations executed at iteration time.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const capitalize = string => string.toUpperCase()\n' +
      '\n' +
      'const abc = function* () {\n' +
      "  yield 'a'; yield 'b'; yield 'c'\n" +
      '}\n' +
      '\n' +
      'const ABC = map(capitalize)(abc)\n' +
      '\n' +
      'const abcIter = abc()\n' +
      '\n' +
      'const ABCIter = ABC()\n' +
      '\n' +
      "console.log([...abcIter]) // ['a', 'b', 'c']\n" +
      '\n' +
      "console.log([...ABCIter]) // ['A', 'B', 'C']\n" +
      '```\n' +
      '\n' +
      'Create a mapping transducer by supplying `map` with a reducer. A reducer is a variadic function that depicts a relationship between an accumulator and any number of arguments. A transducer is a function that accepts a reducer as an argument and returns another reducer.\n' +
      '\n' +
      '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'Transducer = Reducer=>Reducer\n' +
      '```\n' +
      '\n' +
      'The transducer signature enables chaining functionality for reducers. `map` is core to this mechanism, and provides a way via transducers to transform items of reducers. To `map`, reducers are just another category.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const concat = (array, item) => array.concat(item)\n' +
      '\n' +
      'const mapSquare = map(square)\n' +
      '// mapSquare could potentially be a transducer, but at this point, it is\n' +
      '// undifferentiated and not necessarily locked in to transducer behavior.\n' +
      '\n' +
      'console.log(\n' +
      '  mapSquare([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'const squareConcatReducer = mapSquare(concat)\n' +
      '// now mapSquare is passed the function concat, so it assumes transducer\n' +
      '// position. squareConcatReducer is a reducer with chained functionality\n' +
      '// square and concat.\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
      ") // '1491625'\n" +
      '```',
    execution: 'concurrent',
    transducing: '',
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'map(\n' +
              '  arrayMapper (value any, index number, array Array)=>Promise|any\n' +
              ')(array) -> mappedArray Promise|Array\n' +
              '\n' +
              'map(\n' +
              '  objectMapper (value any, key string, object Object)=>Promise|any\n' +
              ')(object) -> mappedObject Promise|Array\n' +
              '\n' +
              'map(\n' +
              '  setMapper (value any, value, set Set)=>Promise|any\n' +
              ')(set) -> mappedSet Promise|Set\n' +
              '\n' +
              'map(\n' +
              '  mapMapper (value any, key any, originalMap Map)=>Promise|any\n' +
              ')(originalMap) -> mappedMap Promise|Map\n' +
              '\n' +
              'map(\n' +
              '  probablyShouldBeSyncMapper (value any)=>any\n' +
              ')(generatorFunction) -> mappingGeneratorFunction ...args=>Generator\n' +
              '\n' +
              'map(\n' +
              '  mapper (value any)=>Promise|any\n' +
              ')(asyncGeneratorFunction) -> mappingAsyncGeneratorFunction ...args=>AsyncGenerator\n' +
              '\n' +
              'map(\n' +
              '  mapper (value any)=>Promise|any\n' +
              ')(originalReducer Reducer) -> mappingReducer Reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 29, column: 4, offset: 790 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 29, column: 4, offset: 790 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a mapper concurrently to each item of a functor, returning the results in a functor of the same type. If order is implied by the collection, it is maintained in the result. The following list describes ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 209, offset: 208 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 1, column: 209, offset: 208 },
                  end: { line: 1, column: 214, offset: 213 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' behavior with vanilla JavaScript functors.',
                position: {
                  start: { line: 1, column: 214, offset: 213 },
                  end: { line: 1, column: 257, offset: 256 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 257, offset: 256 },
              indent: []
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
                          start: { line: 3, column: 4, offset: 261 },
                          end: { line: 3, column: 11, offset: 268 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - apply a mapper to items, returning a new array of results',
                        position: {
                          start: { line: 3, column: 11, offset: 268 },
                          end: { line: 3, column: 71, offset: 328 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 3, column: 4, offset: 261 },
                      end: { line: 3, column: 71, offset: 328 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 1, offset: 258 },
                  end: { line: 3, column: 71, offset: 328 },
                  indent: []
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
                          start: { line: 4, column: 4, offset: 332 },
                          end: { line: 4, column: 12, offset: 340 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - apply a mapper to object values, returning a new object of results',
                        position: {
                          start: { line: 4, column: 12, offset: 340 },
                          end: { line: 4, column: 81, offset: 409 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 4, column: 4, offset: 332 },
                      end: { line: 4, column: 81, offset: 409 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 1, offset: 329 },
                  end: { line: 4, column: 81, offset: 409 },
                  indent: []
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
                          start: { line: 5, column: 4, offset: 413 },
                          end: { line: 5, column: 9, offset: 418 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - apply a mapper to Set items, returning a new ',
                        position: {
                          start: { line: 5, column: 9, offset: 418 },
                          end: { line: 5, column: 57, offset: 466 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Set',
                        position: {
                          start: { line: 5, column: 57, offset: 466 },
                          end: { line: 5, column: 62, offset: 471 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' of results',
                        position: {
                          start: { line: 5, column: 62, offset: 471 },
                          end: { line: 5, column: 73, offset: 482 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 5, column: 4, offset: 413 },
                      end: { line: 5, column: 73, offset: 482 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 1, offset: 410 },
                  end: { line: 5, column: 73, offset: 482 },
                  indent: []
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
                          start: { line: 6, column: 4, offset: 486 },
                          end: { line: 6, column: 9, offset: 491 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - apply a mapper to Map values (not entries), returning a new ',
                        position: {
                          start: { line: 6, column: 9, offset: 491 },
                          end: { line: 6, column: 72, offset: 554 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Map',
                        position: {
                          start: { line: 6, column: 72, offset: 554 },
                          end: { line: 6, column: 77, offset: 559 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' of results',
                        position: {
                          start: { line: 6, column: 77, offset: 559 },
                          end: { line: 6, column: 88, offset: 570 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 6, column: 4, offset: 486 },
                      end: { line: 6, column: 88, offset: 570 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 1, offset: 483 },
                  end: { line: 6, column: 88, offset: 570 },
                  indent: []
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
                          start: { line: 7, column: 4, offset: 574 },
                          end: { line: 7, column: 14, offset: 584 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 7, column: 14, offset: 584 },
                          end: { line: 7, column: 15, offset: 585 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'Generator',
                        position: {
                          start: { line: 7, column: 15, offset: 585 },
                          end: { line: 7, column: 26, offset: 596 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: " - return an iterator that applies a mapper to each iteration's value, yielding mapped iterations",
                        position: {
                          start: { line: 7, column: 26, offset: 596 },
                          end: { line: 7, column: 123, offset: 693 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 7, column: 4, offset: 574 },
                      end: { line: 7, column: 123, offset: 693 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 7, column: 1, offset: 571 },
                  end: { line: 7, column: 123, offset: 693 },
                  indent: []
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
                          start: { line: 8, column: 4, offset: 697 },
                          end: { line: 8, column: 19, offset: 712 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: '/',
                        position: {
                          start: { line: 8, column: 19, offset: 712 },
                          end: { line: 8, column: 20, offset: 713 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'AsyncGenerator',
                        position: {
                          start: { line: 8, column: 20, offset: 713 },
                          end: { line: 8, column: 36, offset: 729 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: " - return an async iterator that applies a mapper to each async iteration's value, yielding Promises of a mapped iterations",
                        position: {
                          start: { line: 8, column: 36, offset: 729 },
                          end: { line: 8, column: 159, offset: 852 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 8, column: 4, offset: 697 },
                      end: { line: 8, column: 159, offset: 852 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 8, column: 1, offset: 694 },
                  end: { line: 8, column: 159, offset: 852 },
                  indent: []
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
                        value: '{ map: function }',
                        position: {
                          start: { line: 9, column: 4, offset: 856 },
                          end: { line: 9, column: 23, offset: 875 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - call ',
                        position: {
                          start: { line: 9, column: 23, offset: 875 },
                          end: { line: 9, column: 31, offset: 883 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '.map',
                        position: {
                          start: { line: 9, column: 31, offset: 883 },
                          end: { line: 9, column: 37, offset: 889 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' directly with mapper',
                        position: {
                          start: { line: 9, column: 37, offset: 889 },
                          end: { line: 9, column: 58, offset: 910 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 9, column: 4, offset: 856 },
                      end: { line: 9, column: 58, offset: 910 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 9, column: 1, offset: 853 },
                  end: { line: 9, column: 58, offset: 910 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 258 },
              end: { line: 9, column: 58, offset: 910 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const square = number => number ** 2\n' +
              '\n' +
              'console.log(\n' +
              '  map(square)([1, 2, 3, 4, 5]),\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'console.log(\n' +
              "  map(square)(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])),\n" +
              ") // Map { 'a' => 1, 'b' => 4, 'c' => 9, 'd' => 16, 'e' => 25 }\n" +
              '\n' +
              'console.log(\n' +
              '  map(square)({ a: 1, b: 2, c: 3, d: 4, e: 5 }),\n' +
              ') // { a: 1, b: 4, c: 9, d: 16, e: 25 }',
            position: {
              start: { line: 11, column: 1, offset: 912 },
              end: { line: 25, column: 4, offset: 1305 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 27, column: 1, offset: 1307 },
                  end: { line: 27, column: 6, offset: 1312 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' recognizes three types of functions in functor position:',
                position: {
                  start: { line: 27, column: 6, offset: 1312 },
                  end: { line: 27, column: 63, offset: 1369 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 27, column: 1, offset: 1307 },
              end: { line: 27, column: 63, offset: 1369 },
              indent: []
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
                        value: 'Generator Functions ',
                        position: {
                          start: { line: 29, column: 4, offset: 1374 },
                          end: { line: 29, column: 24, offset: 1394 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'function* () {}',
                        position: {
                          start: { line: 29, column: 24, offset: 1394 },
                          end: { line: 29, column: 41, offset: 1411 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 29, column: 41, offset: 1411 },
                          end: { line: 29, column: 44, offset: 1414 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'map(mapper)(generatorFunction)',
                        position: {
                          start: { line: 29, column: 44, offset: 1414 },
                          end: { line: 29, column: 76, offset: 1446 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' creates a generator function that generates generators of mapped values. Async mappers are yielded synchronously and may lead to unexpected results.',
                        position: {
                          start: { line: 29, column: 76, offset: 1446 },
                          end: { line: 29, column: 225, offset: 1595 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 4, offset: 1374 },
                      end: { line: 29, column: 225, offset: 1595 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 1, offset: 1371 },
                  end: { line: 29, column: 225, offset: 1595 },
                  indent: []
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
                        value: 'Async Generator Functions ',
                        position: {
                          start: { line: 30, column: 4, offset: 1599 },
                          end: { line: 30, column: 30, offset: 1625 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'async function* () {}',
                        position: {
                          start: { line: 30, column: 30, offset: 1625 },
                          end: { line: 30, column: 53, offset: 1648 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 30, column: 53, offset: 1648 },
                          end: { line: 30, column: 56, offset: 1651 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'map(mapper)(asyncGeneratorFunction)',
                        position: {
                          start: { line: 30, column: 56, offset: 1651 },
                          end: { line: 30, column: 93, offset: 1688 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' creates an async generator function that generates async generators of mapped values. Promises produced by async mappers are resolved.',
                        position: {
                          start: { line: 30, column: 93, offset: 1688 },
                          end: { line: 30, column: 228, offset: 1823 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 30, column: 4, offset: 1599 },
                      end: { line: 30, column: 228, offset: 1823 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 1596 },
                  end: { line: 30, column: 228, offset: 1823 },
                  indent: []
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
                        value: 'Reducers ',
                        position: {
                          start: { line: 31, column: 4, offset: 1827 },
                          end: { line: 31, column: 13, offset: 1836 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '(accumulator, item)=>accumulator',
                        position: {
                          start: { line: 31, column: 13, offset: 1836 },
                          end: { line: 31, column: 47, offset: 1870 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 31, column: 47, offset: 1870 },
                          end: { line: 31, column: 50, offset: 1873 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'map(mapper)(reducer)',
                        position: {
                          start: { line: 31, column: 50, offset: 1873 },
                          end: { line: 31, column: 72, offset: 1895 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: " creates a transducer that, when called with another reducer, creates a mapping step for each item of the reducer's reducing operation. Promises produced by async mappers are resolved.",
                        position: {
                          start: { line: 31, column: 72, offset: 1895 },
                          end: { line: 31, column: 256, offset: 2079 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 31, column: 4, offset: 1827 },
                      end: { line: 31, column: 256, offset: 2079 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 31, column: 1, offset: 1824 },
                  end: { line: 31, column: 256, offset: 2079 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 29, column: 1, offset: 1371 },
              end: { line: 31, column: 256, offset: 2079 },
              indent: [ 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Use mapping generator functions to create lazy computations executed at iteration time.',
                position: {
                  start: { line: 33, column: 1, offset: 2081 },
                  end: { line: 33, column: 88, offset: 2168 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 33, column: 1, offset: 2081 },
              end: { line: 33, column: 88, offset: 2168 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const capitalize = string => string.toUpperCase()\n' +
              '\n' +
              'const abc = function* () {\n' +
              "  yield 'a'; yield 'b'; yield 'c'\n" +
              '}\n' +
              '\n' +
              'const ABC = map(capitalize)(abc)\n' +
              '\n' +
              'const abcIter = abc()\n' +
              '\n' +
              'const ABCIter = ABC()\n' +
              '\n' +
              "console.log([...abcIter]) // ['a', 'b', 'c']\n" +
              '\n' +
              "console.log([...ABCIter]) // ['A', 'B', 'C']",
            position: {
              start: { line: 35, column: 1, offset: 2170 },
              end: { line: 51, column: 4, offset: 2486 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a mapping transducer by supplying ',
                position: {
                  start: { line: 53, column: 1, offset: 2488 },
                  end: { line: 53, column: 42, offset: 2529 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 53, column: 42, offset: 2529 },
                  end: { line: 53, column: 47, offset: 2534 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with a reducer. A reducer is a variadic function that depicts a relationship between an accumulator and any number of arguments. A transducer is a function that accepts a reducer as an argument and returns another reducer.',
                position: {
                  start: { line: 53, column: 47, offset: 2534 },
                  end: { line: 53, column: 270, offset: 2757 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 53, column: 1, offset: 2488 },
              end: { line: 53, column: 270, offset: 2757 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'coffeescript',
            meta: '[specscript]',
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              '\n' +
              'Transducer = Reducer=>Reducer',
            position: {
              start: { line: 55, column: 1, offset: 2759 },
              end: { line: 59, column: 4, offset: 2857 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'The transducer signature enables chaining functionality for reducers. ',
                position: {
                  start: { line: 61, column: 1, offset: 2859 },
                  end: { line: 61, column: 71, offset: 2929 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 61, column: 71, offset: 2929 },
                  end: { line: 61, column: 76, offset: 2934 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' is core to this mechanism, and provides a way via transducers to transform items of reducers. To ',
                position: {
                  start: { line: 61, column: 76, offset: 2934 },
                  end: { line: 61, column: 174, offset: 3032 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'map',
                position: {
                  start: { line: 61, column: 174, offset: 3032 },
                  end: { line: 61, column: 179, offset: 3037 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', reducers are just another category.',
                position: {
                  start: { line: 61, column: 179, offset: 3037 },
                  end: { line: 61, column: 216, offset: 3074 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 61, column: 1, offset: 2859 },
              end: { line: 61, column: 216, offset: 3074 },
              indent: []
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
              'const mapSquare = map(square)\n' +
              '// mapSquare could potentially be a transducer, but at this point, it is\n' +
              '// undifferentiated and not necessarily locked in to transducer behavior.\n' +
              '\n' +
              'console.log(\n' +
              '  mapSquare([1, 2, 3, 4, 5]),\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'const squareConcatReducer = mapSquare(concat)\n' +
              '// now mapSquare is passed the function concat, so it assumes transducer\n' +
              '// position. squareConcatReducer is a reducer with chained functionality\n' +
              '// square and concat.\n' +
              '\n' +
              'console.log(\n' +
              '  [1, 2, 3, 4, 5].reduce(squareConcatReducer, []),\n' +
              ') // [1, 4, 9, 16, 25]\n' +
              '\n' +
              'console.log(\n' +
              "  [1, 2, 3, 4, 5].reduce(squareConcatReducer, ''),\n" +
              ") // '1491625'",
            position: {
              start: { line: 63, column: 1, offset: 3076 },
              end: { line: 88, column: 4, offset: 3823 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 88, column: 4, offset: 3823 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
    description: '`map` over the entries of a `Map` or `Object`.\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  map.entries(\n' +
      '    ([key, value]) => [key.toUpperCase(), value ** 2],\n' +
      '  )({ a: 1, b: 2, c: 3 })\n' +
      ') // { A: 1, B: 4, C: 9 }\n' +
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 5, column: 4, offset: 140 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' over the entries of a ',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Map',
                position: {
                  start: { line: 1, column: 29, offset: 28 },
                  end: { line: 1, column: 34, offset: 33 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' or ',
                position: {
                  start: { line: 1, column: 34, offset: 33 },
                  end: { line: 1, column: 38, offset: 37 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 1, column: 38, offset: 37 },
                  end: { line: 1, column: 46, offset: 45 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 46, offset: 45 },
                  end: { line: 1, column: 47, offset: 46 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 47, offset: 46 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              '  map.entries(\n' +
              '    ([key, value]) => [key.toUpperCase(), value ** 2],\n' +
              '  )({ a: 1, b: 2, c: 3 })\n' +
              ') // { A: 1, B: 4, C: 9 }',
            position: {
              start: { line: 2, column: 1, offset: 47 },
              end: { line: 8, column: 4, offset: 212 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 212 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
      'var T any,\n' +
      '  mapper T=>Promise|any,\n' +
      '  array Array<T>\n' +
      '\n' +
      'map.series(mapper)(array) -> Promise|Array\n' +
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
            value: 'var T any,\n' +
              '  mapper T=>Promise|any,\n' +
              '  array Array<T>\n' +
              '\n' +
              'map.series(mapper)(array) -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 129 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 129 }
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with serial execution.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
              end: { line: 13, column: 4, offset: 263 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
      'var maxConcurrency number,\n' +
      '  T any,\n' +
      '  mapper T=>Promise|any,\n' +
      '  array Array<T>\n' +
      '\n' +
      'map.pool(maxConcurrency, mapper)(array) -> Promise|Array\n' +
      '```',
    description: '`map` with limited concurrency.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const delayedLog = x => new Promise(function (resolve) {\n' +
      '  setTimeout(function () {\n' +
      '    console.log(x)\n' +
      '    resolve()\n' +
      '  }, 1000)\n' +
      '})\n' +
      '\n' +
      "console.log('start')\n" +
      'map.pool(2, delayedLog)([1, 2, 3, 4, 5])\n' +
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
            value: 'var maxConcurrency number,\n' +
              '  T any,\n' +
              '  mapper T=>Promise|any,\n' +
              '  array Array<T>\n' +
              '\n' +
              'map.pool(maxConcurrency, mapper)(array) -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 168 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 168 }
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with limited concurrency.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 32, offset: 31 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const delayedLog = x => new Promise(function (resolve) {\n' +
              '  setTimeout(function () {\n' +
              '    console.log(x)\n' +
              '    resolve()\n' +
              '  }, 1000)\n' +
              '})\n' +
              '\n' +
              "console.log('start')\n" +
              'map.pool(2, delayedLog)([1, 2, 3, 4, 5])',
            position: {
              start: { line: 3, column: 1, offset: 33 },
              end: { line: 13, column: 4, offset: 257 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 257 }
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
    name: 'map.withIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  index number,\n' +
      '  array Array<T>,\n' +
      '  indexedMapper (T, index, array)=>Promise|any\n' +
      '\n' +
      'map.withIndex(indexedMapper)(array) -> Promise|Array\n' +
      '```',
    description: '`map` with an indexed mapper.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const range = length => map.withIndex(\n' +
      '  (_, index) => index + 1)(Array(length))\n' +
      '\n' +
      'console.log(range(5)) // [1, 2, 3, 4, 5]\n' +
      '```',
    execution: 'concurrent',
    related: 'map, filter.withIndex',
    mdast: {
      name: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'map.withIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
              '  index number,\n' +
              '  array Array<T>,\n' +
              '  indexedMapper (T, index, array)=>Promise|any\n' +
              '\n' +
              'map.withIndex(indexedMapper)(array) -> Promise|Array',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 4, offset: 178 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 178 }
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with an indexed mapper.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const range = length => map.withIndex(\n' +
              '  (_, index) => index + 1)(Array(length))\n' +
              '\n' +
              'console.log(range(5)) // [1, 2, 3, 4, 5]',
            position: {
              start: { line: 3, column: 1, offset: 31 },
              end: { line: 8, column: 4, offset: 184 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 184 }
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 11, offset: 10 }
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
                value: 'map, filter.withIndex',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 22, offset: 21 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 },
              indent: []
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
    name: 'map.own',
    synopsis: '```coffeescript [specscript]\n' +
      'var T any,\n' +
      '  object Object<T>,\n' +
      '  mapper T=>Promise|any\n' +
      '\n' +
      'map.own(mapper)(object) -> Promise|Object\n' +
      '```',
    description: "`map` over an object's own properties.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'const Person = function (name) {\n' +
      '  this.name = name\n' +
      '}\n' +
      '\n' +
      'Person.prototype.greet = function () {}\n' +
      '\n' +
      "const david = new Person('david')\n" +
      'david.a = 1\n' +
      'david.b = 2\n' +
      'david.c = 3\n' +
      '\n' +
      'const square = number => number ** 2\n' +
      'console.log(\n' +
      '  map.own(square)(david)\n' +
      ') // { name: NaN, a: 1, b: 4, c: 9 }\n' +
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
                value: 'map.own',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
            value: 'var T any,\n' +
              '  object Object<T>,\n' +
              '  mapper T=>Promise|any\n' +
              '\n' +
              'map.own(mapper)(object) -> Promise|Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 130 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 130 }
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: " over an object's own properties.",
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const Person = function (name) {\n' +
              '  this.name = name\n' +
              '}\n' +
              '\n' +
              'Person.prototype.greet = function () {}\n' +
              '\n' +
              "const david = new Person('david')\n" +
              'david.a = 1\n' +
              'david.b = 2\n' +
              'david.c = 3\n' +
              '\n' +
              'const square = number => number ** 2\n' +
              'console.log(\n' +
              '  map.own(square)(david)\n' +
              ') // { name: NaN, a: 1, b: 4, c: 9 }',
            position: {
              start: { line: 3, column: 1, offset: 40 },
              end: { line: 19, column: 4, offset: 349 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 349 }
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
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 14, offset: 13 },
              indent: []
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
                  end: { line: 1, column: 32, offset: 31 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 },
              indent: []
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
                  end: { line: 1, column: 40, offset: 39 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 40, offset: 39 },
              indent: []
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
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
                      end: { line: 1, column: 18, offset: 17 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 3, offset: 2 },
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.',
                position: {
                  start: { line: 1, column: 20, offset: 19 },
                  end: { line: 1, column: 126, offset: 125 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 126, offset: 125 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: 'new BrokenPromise() // a new BrokenPromise instance',
            position: {
              start: { line: 3, column: 1, offset: 127 },
              end: { line: 5, column: 4, offset: 196 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 },
              indent: []
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
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 },
              indent: []
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
                      end: { line: 1, column: 31, offset: 30 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' registers a Promise ',
                position: {
                  start: { line: 1, column: 33, offset: 32 },
                  end: { line: 1, column: 54, offset: 53 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.then',
                position: {
                  start: { line: 1, column: 54, offset: 53 },
                  end: { line: 1, column: 61, offset: 60 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' resolver function with the internal infinite promise. In that sense, the resolver function ',
                position: {
                  start: { line: 1, column: 61, offset: 60 },
                  end: { line: 1, column: 153, offset: 152 },
                  indent: []
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
                      end: { line: 1, column: 165, offset: 164 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 153, offset: 152 },
                  end: { line: 1, column: 166, offset: 165 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' never gets called. However, it is possible to manually fire the provided ',
                position: {
                  start: { line: 1, column: 166, offset: 165 },
                  end: { line: 1, column: 240, offset: 239 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'unreachableResolver',
                position: {
                  start: { line: 1, column: 240, offset: 239 },
                  end: { line: 1, column: 261, offset: 260 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with ',
                position: {
                  start: { line: 1, column: 261, offset: 260 },
                  end: { line: 1, column: 267, offset: 266 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'BrokenPromise.prototype.resolve',
                position: {
                  start: { line: 1, column: 267, offset: 266 },
                  end: { line: 1, column: 300, offset: 299 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 300, offset: 299 },
                  end: { line: 1, column: 301, offset: 300 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 301, offset: 300 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: null,
            value: "new BrokenPromise().then(() => console.log('unreachable'))",
            position: {
              start: { line: 3, column: 1, offset: 302 },
              end: { line: 5, column: 4, offset: 378 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
                  end: { line: 1, column: 44, offset: 43 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 44, offset: 43 },
              indent: []
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
                  end: { line: 1, column: 50, offset: 49 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 50, offset: 49 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Cancellable(\n' +
                  '  func ...any=>Promise|any,\n' +
                  ') -> cancellablePromiseFactory ...any=>CancellablePromise|any',
                position: {
                  start: { line: 3, column: 1, offset: 51 },
                  end: { line: 5, column: 62, offset: 153 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 51 },
              end: { line: 5, column: 62, offset: 153 },
              indent: [ 1, 1 ]
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
                      end: { line: 1, column: 14, offset: 13 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 16, offset: 15 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' wraps an async function to apply an effect such that all Promises returned by the wrapped async function are cancellable via the ',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 146, offset: 145 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.cancel',
                position: {
                  start: { line: 1, column: 146, offset: 145 },
                  end: { line: 1, column: 155, offset: 154 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' method.',
                position: {
                  start: { line: 1, column: 155, offset: 154 },
                  end: { line: 1, column: 163, offset: 162 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 163, offset: 162 },
              indent: []
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
              end: { line: 12, column: 4, offset: 465 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 },
              indent: []
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
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 17, offset: 16 },
              indent: []
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
                  end: { line: 1, column: 177, offset: 176 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 177, offset: 176 },
              indent: []
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
                value: 'console.log(\n  Mux.isSequence([',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 19, offset: 31 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '1',
                label: '1',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1',
                    position: {
                      start: { line: 2, column: 20, offset: 32 },
                      end: { line: 2, column: 21, offset: 33 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 19, offset: 31 },
                  end: { line: 2, column: 22, offset: 34 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', ',
                position: {
                  start: { line: 2, column: 22, offset: 34 },
                  end: { line: 2, column: 24, offset: 36 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: '2',
                label: '2',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '2',
                    position: {
                      start: { line: 2, column: 25, offset: 37 },
                      end: { line: 2, column: 26, offset: 38 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 24, offset: 36 },
                  end: { line: 2, column: 27, offset: 39 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', ',
                position: {
                  start: { line: 2, column: 27, offset: 39 },
                  end: { line: 2, column: 29, offset: 41 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: '3',
                label: '3',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '3',
                    position: {
                      start: { line: 2, column: 30, offset: 42 },
                      end: { line: 2, column: 31, offset: 43 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 29, offset: 41 },
                  end: { line: 2, column: 32, offset: 44 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ']),\n) // true',
                position: {
                  start: { line: 2, column: 32, offset: 44 },
                  end: { line: 3, column: 10, offset: 57 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 10, offset: 57 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
                  end: { line: 3, column: 39, offset: 135 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 },
              indent: [ 1, 1 ]
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
                  end: { line: 5, column: 8, offset: 144 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.zip(\n  x SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 182 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 182 },
                  end: { line: 6, column: 33, offset: 185 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator<Array<T|undefined>>',
                position: {
                  start: { line: 6, column: 33, offset: 185 },
                  end: { line: 7, column: 34, offset: 225 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 34, offset: 225 },
              indent: [ 1, 1 ]
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
                  end: { line: 9, column: 8, offset: 234 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.zip(\n  x Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 234 },
                  end: { line: 10, column: 22, offset: 264 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 264 },
                  end: { line: 10, column: 25, offset: 267 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator<Array<T|undefined>>',
                position: {
                  start: { line: 10, column: 25, offset: 267 },
                  end: { line: 11, column: 39, offset: 312 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 227 },
              end: { line: 11, column: 39, offset: 312 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 37, offset: 36 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 37, offset: 36 },
              indent: []
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
                  end: { line: 1, column: 484, offset: 483 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 484, offset: 483 },
              indent: []
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
                value: 'const iterator = Mux.zip([',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: '1, 2, 3',
                label: '1, 2, 3',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1, 2, 3',
                    position: {
                      start: { line: 1, column: 28, offset: 27 },
                      end: { line: 1, column: 35, offset: 34 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 27, offset: 26 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', ',
                position: {
                  start: { line: 1, column: 36, offset: 35 },
                  end: { line: 1, column: 38, offset: 37 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: "'a', 'b', 'c'",
                label: "'a', 'b', 'c'",
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: "'a', 'b', 'c'",
                    position: {
                      start: { line: 1, column: 39, offset: 38 },
                      end: { line: 1, column: 52, offset: 51 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 38, offset: 37 },
                  end: { line: 1, column: 53, offset: 52 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '])',
                position: {
                  start: { line: 1, column: 53, offset: 52 },
                  end: { line: 1, column: 55, offset: 54 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 55, offset: 54 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for (const item of iterator) {\n  console.log(item) // ',
                position: {
                  start: { line: 3, column: 1, offset: 56 },
                  end: { line: 4, column: 24, offset: 110 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: "1, 'a'",
                label: "1, 'a'",
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: "1, 'a'",
                    position: {
                      start: { line: 4, column: 25, offset: 111 },
                      end: { line: 4, column: 31, offset: 117 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 24, offset: 110 },
                  end: { line: 4, column: 32, offset: 118 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '\n                    // ',
                position: {
                  start: { line: 4, column: 32, offset: 118 },
                  end: { line: 5, column: 24, offset: 142 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: "2, 'b'",
                label: "2, 'b'",
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: "2, 'b'",
                    position: {
                      start: { line: 5, column: 25, offset: 143 },
                      end: { line: 5, column: 31, offset: 149 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 5, column: 24, offset: 142 },
                  end: { line: 5, column: 32, offset: 150 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '\n                    // ',
                position: {
                  start: { line: 5, column: 32, offset: 150 },
                  end: { line: 6, column: 24, offset: 174 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: "3, 'c'",
                label: "3, 'c'",
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: "3, 'c'",
                    position: {
                      start: { line: 6, column: 25, offset: 175 },
                      end: { line: 6, column: 31, offset: 181 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 6, column: 24, offset: 174 },
                  end: { line: 6, column: 32, offset: 182 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '\n}',
                position: {
                  start: { line: 6, column: 32, offset: 182 },
                  end: { line: 7, column: 2, offset: 184 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 3, column: 1, offset: 56 },
              end: { line: 7, column: 2, offset: 184 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 3, column: 39, offset: 135 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 },
              indent: [ 1, 1 ]
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
                  end: { line: 5, column: 8, offset: 144 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.concat(\n  x SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 185 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 185 },
                  end: { line: 6, column: 33, offset: 188 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 188 },
                  end: { line: 7, column: 14, offset: 208 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 208 },
                  end: { line: 7, column: 17, offset: 211 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 211 },
              indent: [ 1, 1 ]
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
                  end: { line: 9, column: 8, offset: 220 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.concat(\n  x Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 220 },
                  end: { line: 10, column: 22, offset: 253 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 253 },
                  end: { line: 10, column: 25, offset: 256 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 256 },
                  end: { line: 11, column: 19, offset: 281 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 281 },
                  end: { line: 11, column: 22, offset: 284 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 213 },
              end: { line: 11, column: 22, offset: 284 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
                  end: { line: 1, column: 392, offset: 391 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 392, offset: 391 },
              indent: []
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
                value: 'const iter = Mux.concat([\n  ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 3, offset: 28 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '1, 2, 3',
                label: '1, 2, 3',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1, 2, 3',
                    position: {
                      start: { line: 2, column: 4, offset: 29 },
                      end: { line: 2, column: 11, offset: 36 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 3, offset: 28 },
                  end: { line: 2, column: 12, offset: 37 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n  ',
                position: {
                  start: { line: 2, column: 12, offset: 37 },
                  end: { line: 3, column: 3, offset: 41 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '4, 5, 6',
                label: '4, 5, 6',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '4, 5, 6',
                    position: {
                      start: { line: 3, column: 4, offset: 42 },
                      end: { line: 3, column: 11, offset: 49 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 3, offset: 41 },
                  end: { line: 3, column: 12, offset: 50 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n  ',
                position: {
                  start: { line: 3, column: 12, offset: 50 },
                  end: { line: 4, column: 3, offset: 54 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '7, 8, 9',
                label: '7, 8, 9',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '7, 8, 9',
                    position: {
                      start: { line: 4, column: 4, offset: 55 },
                      end: { line: 4, column: 11, offset: 62 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 3, offset: 54 },
                  end: { line: 4, column: 12, offset: 63 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n])',
                position: {
                  start: { line: 4, column: 12, offset: 63 },
                  end: { line: 5, column: 3, offset: 67 },
                  indent: [ 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 3, offset: 67 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for (const number of iter) {\n' +
                  '  console.log(number) // 1 2 3 4 5 6 7 8 9\n' +
                  '}',
                position: {
                  start: { line: 7, column: 1, offset: 69 },
                  end: { line: 9, column: 2, offset: 142 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 7, column: 1, offset: 69 },
              end: { line: 9, column: 2, offset: 142 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
                  end: { line: 3, column: 39, offset: 135 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 },
              indent: [ 1, 1 ]
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
                  end: { line: 5, column: 8, offset: 144 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.switch(\n  x SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 185 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 185 },
                  end: { line: 6, column: 33, offset: 188 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 188 },
                  end: { line: 7, column: 14, offset: 208 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 208 },
                  end: { line: 7, column: 17, offset: 211 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 211 },
              indent: [ 1, 1 ]
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
                  end: { line: 9, column: 8, offset: 220 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.switch(\n  x Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 220 },
                  end: { line: 10, column: 22, offset: 253 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 253 },
                  end: { line: 10, column: 25, offset: 256 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>|T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 256 },
                  end: { line: 11, column: 19, offset: 281 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 281 },
                  end: { line: 11, column: 22, offset: 284 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 213 },
              end: { line: 11, column: 22, offset: 284 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
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
                  end: { line: 1, column: 651, offset: 650 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 651, offset: 650 },
              indent: []
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
                value: 'const iter = Mux.switch([\n  ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 3, offset: 28 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '1, 1, 1',
                label: '1, 1, 1',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1, 1, 1',
                    position: {
                      start: { line: 2, column: 4, offset: 29 },
                      end: { line: 2, column: 11, offset: 36 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 3, offset: 28 },
                  end: { line: 2, column: 12, offset: 37 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n  ',
                position: {
                  start: { line: 2, column: 12, offset: 37 },
                  end: { line: 3, column: 3, offset: 41 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '2, 2, 2',
                label: '2, 2, 2',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '2, 2, 2',
                    position: {
                      start: { line: 3, column: 4, offset: 42 },
                      end: { line: 3, column: 11, offset: 49 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 3, offset: 41 },
                  end: { line: 3, column: 12, offset: 50 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n  ',
                position: {
                  start: { line: 3, column: 12, offset: 50 },
                  end: { line: 4, column: 3, offset: 54 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '3, 3, 3',
                label: '3, 3, 3',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '3, 3, 3',
                    position: {
                      start: { line: 4, column: 4, offset: 55 },
                      end: { line: 4, column: 11, offset: 62 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 3, offset: 54 },
                  end: { line: 4, column: 12, offset: 63 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ',\n' +
                  '])\n' +
                  'for (const number of iter) {\n' +
                  '  console.log(number) // 1 2 3 1 2 3 1 2 3\n' +
                  '}',
                position: {
                  start: { line: 4, column: 12, offset: 63 },
                  end: { line: 8, column: 2, offset: 141 },
                  indent: [ 1, 1, 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 8, column: 2, offset: 141 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
                  end: { line: 3, column: 39, offset: 135 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 39, offset: 135 },
              indent: [ 1, 1 ]
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
                  end: { line: 5, column: 8, offset: 144 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.race(\n  x SyncSequence<SyncSequence',
                position: {
                  start: { line: 5, column: 8, offset: 144 },
                  end: { line: 6, column: 30, offset: 183 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 6, column: 30, offset: 183 },
                  end: { line: 6, column: 33, offset: 186 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>T,\n) -> Iterator',
                position: {
                  start: { line: 6, column: 33, offset: 186 },
                  end: { line: 7, column: 14, offset: 205 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 7, column: 14, offset: 205 },
                  end: { line: 7, column: 17, offset: 208 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 5, column: 1, offset: 137 },
              end: { line: 7, column: 17, offset: 208 },
              indent: [ 1, 1 ]
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
                  end: { line: 9, column: 8, offset: 217 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: 'Mux.race(\n  x Sequence<Sequence',
                position: {
                  start: { line: 9, column: 8, offset: 217 },
                  end: { line: 10, column: 22, offset: 248 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 10, column: 22, offset: 248 },
                  end: { line: 10, column: 25, offset: 251 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '|T>T,\n) -> AsyncIterator',
                position: {
                  start: { line: 10, column: 25, offset: 251 },
                  end: { line: 11, column: 19, offset: 275 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'html',
                value: '<T>',
                position: {
                  start: { line: 11, column: 19, offset: 275 },
                  end: { line: 11, column: 22, offset: 278 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 210 },
              end: { line: 11, column: 22, offset: 278 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 1, column: 574, offset: 573 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 574, offset: 573 },
              indent: []
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
                value: 'const f = async function',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 25, offset: 24 },
                  indent: []
                }
              },
              {
                type: 'emphasis',
                children: [
                  {
                    type: 'text',
                    value: '() { await delay(5); yield 10; yield 20 }\n' +
                      'const g = async function',
                    position: {
                      start: { line: 1, column: 26, offset: 25 },
                      end: { line: 2, column: 25, offset: 91 },
                      indent: [ 1 ]
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 25, offset: 24 },
                  end: { line: 2, column: 26, offset: 92 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'text',
                value: '() { yield 1; yield 2; yield 3; await delay(10); yield 30 }',
                position: {
                  start: { line: 2, column: 26, offset: 92 },
                  end: { line: 2, column: 85, offset: 151 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 2, column: 85, offset: 151 },
              indent: [ 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'const iter = Mux.race(',
                position: {
                  start: { line: 4, column: 1, offset: 153 },
                  end: { line: 4, column: 23, offset: 175 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: 'f, g',
                label: 'f, g',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: 'f, g',
                    position: {
                      start: { line: 4, column: 24, offset: 176 },
                      end: { line: 4, column: 28, offset: 180 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 4, column: 23, offset: 175 },
                  end: { line: 4, column: 29, offset: 181 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ')',
                position: {
                  start: { line: 4, column: 29, offset: 181 },
                  end: { line: 4, column: 30, offset: 182 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 4, column: 1, offset: 153 },
              end: { line: 4, column: 30, offset: 182 },
              indent: []
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'for await (const number of iter) {\n' +
                  '  console.log(number) // 1 2 3 10 20 30\n' +
                  '}',
                position: {
                  start: { line: 6, column: 1, offset: 184 },
                  end: { line: 8, column: 2, offset: 260 },
                  indent: [ 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 6, column: 1, offset: 184 },
              end: { line: 8, column: 2, offset: 260 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
                  end: { line: 1, column: 263, offset: 262 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 263, offset: 262 },
              indent: []
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
                value: 'console.log(\n  Mux.flatten([',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 2, column: 16, offset: 28 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '1',
                label: '1',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1',
                    position: {
                      start: { line: 2, column: 17, offset: 29 },
                      end: { line: 2, column: 18, offset: 30 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 16, offset: 28 },
                  end: { line: 2, column: 19, offset: 31 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', 2, ',
                position: {
                  start: { line: 2, column: 19, offset: 31 },
                  end: { line: 2, column: 24, offset: 36 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: '3',
                label: '3',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '3',
                    position: {
                      start: { line: 2, column: 25, offset: 37 },
                      end: { line: 2, column: 26, offset: 38 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 24, offset: 36 },
                  end: { line: 2, column: 27, offset: 39 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', 4, ',
                position: {
                  start: { line: 2, column: 27, offset: 39 },
                  end: { line: 2, column: 32, offset: 44 },
                  indent: []
                }
              },
              {
                type: 'linkReference',
                identifier: '5',
                label: '5',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '5',
                    position: {
                      start: { line: 2, column: 33, offset: 45 },
                      end: { line: 2, column: 34, offset: 46 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 2, column: 32, offset: 44 },
                  end: { line: 2, column: 35, offset: 47 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ']),\n) // ',
                position: {
                  start: { line: 2, column: 35, offset: 47 },
                  end: { line: 3, column: 6, offset: 56 },
                  indent: [ 1 ]
                }
              },
              {
                type: 'linkReference',
                identifier: '1, 2, 3, 4, 5',
                label: '1, 2, 3, 4, 5',
                referenceType: 'shortcut',
                children: [
                  {
                    type: 'text',
                    value: '1, 2, 3, 4, 5',
                    position: {
                      start: { line: 3, column: 7, offset: 57 },
                      end: { line: 3, column: 20, offset: 70 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 3, column: 6, offset: 56 },
                  end: { line: 3, column: 21, offset: 71 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 3, column: 21, offset: 71 },
              indent: [ 1, 1 ]
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
      'var args ...any,\n' +
      '  predicate ...args=>Promise|boolean\n' +
      '\n' +
      'not(predicate)(...args) -> boolean\n' +
      '```',
    description: 'Negate a value (`!`)\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const myObj = { a: 1 }\n' +
      '\n' +
      "console.log(not('a' in myObj)) // false\n" +
      "console.log(not('b' in myObj)) // true\n" +
      '```\n' +
      '\n' +
      'If passed a function predicate, `not` returns a logically inverted predicate that returns true everywhere the original predicate would have returned false and vice versa.\n' +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  predicate ...args=>Promise|boolean\n' +
              '\n' +
              'not(predicate)(...args) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 122 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 122 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Negate a value (',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 17, offset: 16 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '!',
                position: {
                  start: { line: 1, column: 17, offset: 16 },
                  end: { line: 1, column: 20, offset: 19 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ')',
                position: {
                  start: { line: 1, column: 20, offset: 19 },
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              start: { line: 3, column: 1, offset: 22 },
              end: { line: 8, column: 4, offset: 155 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If passed a function predicate, ',
                position: {
                  start: { line: 10, column: 1, offset: 157 },
                  end: { line: 10, column: 33, offset: 189 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'not',
                position: {
                  start: { line: 10, column: 33, offset: 189 },
                  end: { line: 10, column: 38, offset: 194 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' returns a logically inverted predicate that returns true everywhere the original predicate would have returned false and vice versa.',
                position: {
                  start: { line: 10, column: 38, offset: 194 },
                  end: { line: 10, column: 171, offset: 327 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 10, column: 1, offset: 157 },
              end: { line: 10, column: 171, offset: 327 },
              indent: []
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
              start: { line: 12, column: 1, offset: 329 },
              end: { line: 18, column: 4, offset: 441 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 18, column: 4, offset: 441 }
        }
      }
    }
  },
  {
    name: 'not.sync',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  syncPredicate ...args=>boolean\n' +
      '\n' +
      'not.sync(syncPredicate)(...args) -> boolean\n' +
      '```',
    description: '`not` without promise handling.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  not.sync(isOdd)(2),\n' +
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
                value: 'not.sync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  syncPredicate ...args=>boolean\n' +
              '\n' +
              'not.sync(syncPredicate)(...args) -> boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 127 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                type: 'inlineCode',
                value: 'not',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' without promise handling.',
                position: {
                  start: { line: 1, column: 6, offset: 5 },
                  end: { line: 1, column: 32, offset: 31 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 32, offset: 31 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'console.log(\n' +
              '  not.sync(isOdd)(2),\n' +
              ') // true',
            position: {
              start: { line: 3, column: 1, offset: 33 },
              end: { line: 9, column: 4, offset: 149 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 149 }
        }
      }
    }
  },
  {
    name: 'omit',
    synopsis: '```coffeescript [specscript]\n' +
      'var paths Array<string>,\n' +
      '  source Object\n' +
      '\n' +
      'omit(paths)(source) -> omitted Object\n' +
      '```',
    description: 'Create a new object by excluding specific paths on a source object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
      ") // { name: 'George' }\n" +
      '```\n' +
      '\n' +
      'Path patterns are the same as those supported by `get`:\n' +
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
            value: 'var paths Array<string>,\n' +
              '  source Object\n' +
              '\n' +
              'omit(paths)(source) -> omitted Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 112 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 112 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a new object by excluding specific paths on a source object.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 68, offset: 67 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 68, offset: 67 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
              ") // { name: 'George' }",
            position: {
              start: { line: 3, column: 1, offset: 69 },
              end: { line: 7, column: 4, offset: 183 },
              indent: [ 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Path patterns are the same as those supported by ',
                position: {
                  start: { line: 9, column: 1, offset: 185 },
                  end: { line: 9, column: 50, offset: 234 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'get',
                position: {
                  start: { line: 9, column: 50, offset: 234 },
                  end: { line: 9, column: 55, offset: 239 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ':',
                position: {
                  start: { line: 9, column: 55, offset: 239 },
                  end: { line: 9, column: 56, offset: 240 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 9, column: 1, offset: 185 },
              end: { line: 9, column: 56, offset: 240 },
              indent: []
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
                          start: { line: 11, column: 4, offset: 245 },
                          end: { line: 11, column: 20, offset: 261 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a.b.c'",
                        position: {
                          start: { line: 11, column: 20, offset: 261 },
                          end: { line: 11, column: 29, offset: 270 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 11, column: 4, offset: 245 },
                      end: { line: 11, column: 29, offset: 270 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 11, column: 1, offset: 242 },
                  end: { line: 11, column: 29, offset: 270 },
                  indent: []
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
                          start: { line: 12, column: 4, offset: 274 },
                          end: { line: 12, column: 23, offset: 293 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "'a[0].value'",
                        position: {
                          start: { line: 12, column: 23, offset: 293 },
                          end: { line: 12, column: 37, offset: 307 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 12, column: 4, offset: 274 },
                      end: { line: 12, column: 37, offset: 307 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 12, column: 1, offset: 271 },
                  end: { line: 12, column: 37, offset: 307 },
                  indent: []
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
                          start: { line: 13, column: 4, offset: 311 },
                          end: { line: 13, column: 34, offset: 341 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: "['a', 0, 'value']",
                        position: {
                          start: { line: 13, column: 34, offset: 341 },
                          end: { line: 13, column: 53, offset: 360 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 13, column: 4, offset: 311 },
                      end: { line: 13, column: 53, offset: 360 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 1, offset: 308 },
                  end: { line: 13, column: 53, offset: 360 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 242 },
              end: { line: 13, column: 53, offset: 360 },
              indent: [ 1, 1 ]
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
              start: { line: 15, column: 1, offset: 362 },
              end: { line: 26, column: 4, offset: 543 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 26, column: 4, offset: 543 }
        }
      }
    }
  },
  {
    name: 'or',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  predicates Array<value=>Promise|boolean>\n' +
      '\n' +
      'or(predicates)(value) -> Promise|boolean\n' +
      '```',
    description: 'Test an array of predicates concurrently against a single input, returning true if any of them test truthy.\n' +
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
                  end: { line: 1, column: 3, offset: 2 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 3, offset: 2 },
              indent: []
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
            value: 'var value any,\n' +
              '  predicates Array<value=>Promise|boolean>\n' +
              '\n' +
              'or(predicates)(value) -> Promise|boolean',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 132 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 132 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Test an array of predicates concurrently against a single input, returning true if any of them test truthy.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 108, offset: 107 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 108, offset: 107 },
              indent: []
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
              start: { line: 3, column: 1, offset: 109 },
              end: { line: 11, column: 4, offset: 271 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 271 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 49, offset: 48 },
              indent: []
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
      'var keys Array<string>,\n' +
      '  source Object\n' +
      '\n' +
      'pick(keys)(source) -> picked Object\n' +
      '```',
    description: 'Create a new object by including specific keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  pick(['hello', 'world'])({ goodbye: 1, world: 2 }),\n" +
      ') // { world: 2 }\n' +
      '\n' +
      'console.log(\n' +
      "  pick(['a.b.c.d'])({ a: { b: { c: { d: 1, e: [2, 3] } } } }),\n" +
      ') // { a: { b: { c: { d: 1 } } } }\n' +
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
            value: 'var keys Array<string>,\n' +
              '  source Object\n' +
              '\n' +
              'pick(keys)(source) -> picked Object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 109 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 109 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a new object by including specific keys.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 48, offset: 47 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 48, offset: 47 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  pick(['hello', 'world'])({ goodbye: 1, world: 2 }),\n" +
              ') // { world: 2 }\n' +
              '\n' +
              'console.log(\n' +
              "  pick(['a.b.c.d'])({ a: { b: { c: { d: 1, e: [2, 3] } } } }),\n" +
              ') // { a: { b: { c: { d: 1 } } } }',
            position: {
              start: { line: 3, column: 1, offset: 49 },
              end: { line: 11, column: 4, offset: 276 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 11, column: 4, offset: 276 }
        }
      }
    }
  },
  {
    name: 'pipe',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'var args ...any,\n' +
      '  funcs [\n' +
      '    ...args=>Promise|any,\n' +
      '    ...Array<any=>Promise|any>,\n' +
      '  ],\n' +
      '  transducers Array<Reducer=>Reducer>\n' +
      '  reducer Reducer,\n' +
      '\n' +
      'pipe(funcs)(...args) -> Promise|any\n' +
      '\n' +
      'pipe(transducers)(reducer) -> Reducer\n' +
      '```',
    description: 'Create a function pipeline, where each function passes its return value as a single argument to the next function until all functions have executed. The result of a pipeline execution is the return of its last function.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      '  pipe([\n' +
      '    number => number + 1,\n' +
      '    number => number + 2,\n' +
      '    number => number + 3,\n' +
      '  ])(5),\n' +
      ') // 11\n' +
      '```\n' +
      '\n' +
      'In order to create pipelines of transducers that read left to right, `pipe` chains the functions (assuming they are transducers) in reverse when passed a reducer in argument position. This results in a reducer with chained functionality. For more information on this behavior, see [this blog post on transducers](https://rubico.land/blog/2020/10/02/transducers-crash-course).\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const square = number => number ** 2\n' +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'const squaredOdds = pipe([\n' +
      '  filter(isOdd),\n' +
      '  map(square),\n' +
      '])\n' +
      '\n' +
      'console.log(\n' +
      '  [1, 2, 3, 4, 5].reduce(squaredOdds(add), 0),\n' +
      ') // 35\n' +
      '\n' +
      'console.log(\n' +
      '  squaredOdds([1, 2, 3, 4, 5])\n' +
      ') // [1, 9, 25]\n' +
      '```\n' +
      '\n' +
      'For the sake of a sane API, pipe behaves eagerly when passed any amount of arguments before the array of functions.\n' +
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              '\n' +
              'var args ...any,\n' +
              '  funcs [\n' +
              '    ...args=>Promise|any,\n' +
              '    ...Array<any=>Promise|any>,\n' +
              '  ],\n' +
              '  transducers Array<Reducer=>Reducer>\n' +
              '  reducer Reducer,\n' +
              '\n' +
              'pipe(funcs)(...args) -> Promise|any\n' +
              '\n' +
              'pipe(transducers)(reducer) -> Reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 15, column: 4, offset: 291 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 291 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a function pipeline, where each function passes its return value as a single argument to the next function until all functions have executed. The result of a pipeline execution is the return of its last function.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 220, offset: 219 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 220, offset: 219 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              '  pipe([\n' +
              '    number => number + 1,\n' +
              '    number => number + 2,\n' +
              '    number => number + 3,\n' +
              '  ])(5),\n' +
              ') // 11',
            position: {
              start: { line: 3, column: 1, offset: 221 },
              end: { line: 11, column: 4, offset: 368 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'In order to create pipelines of transducers that read left to right, ',
                position: {
                  start: { line: 13, column: 1, offset: 370 },
                  end: { line: 13, column: 70, offset: 439 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'pipe',
                position: {
                  start: { line: 13, column: 70, offset: 439 },
                  end: { line: 13, column: 76, offset: 445 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' chains the functions (assuming they are transducers) in reverse when passed a reducer in argument position. This results in a reducer with chained functionality. For more information on this behavior, see ',
                position: {
                  start: { line: 13, column: 76, offset: 445 },
                  end: { line: 13, column: 282, offset: 651 },
                  indent: []
                }
              },
              {
                type: 'link',
                title: null,
                url: 'https://rubico.land/blog/2020/10/02/transducers-crash-course',
                children: [
                  {
                    type: 'text',
                    value: 'this blog post on transducers',
                    position: {
                      start: { line: 13, column: 283, offset: 652 },
                      end: { line: 13, column: 312, offset: 681 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 13, column: 282, offset: 651 },
                  end: { line: 13, column: 375, offset: 744 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 13, column: 375, offset: 744 },
                  end: { line: 13, column: 376, offset: 745 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 13, column: 1, offset: 370 },
              end: { line: 13, column: 376, offset: 745 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const isOdd = number => number % 2 == 1\n' +
              '\n' +
              'const square = number => number ** 2\n' +
              '\n' +
              'const add = (a, b) => a + b\n' +
              '\n' +
              'const squaredOdds = pipe([\n' +
              '  filter(isOdd),\n' +
              '  map(square),\n' +
              '])\n' +
              '\n' +
              'console.log(\n' +
              '  [1, 2, 3, 4, 5].reduce(squaredOdds(add), 0),\n' +
              ') // 35\n' +
              '\n' +
              'console.log(\n' +
              '  squaredOdds([1, 2, 3, 4, 5])\n' +
              ') // [1, 9, 25]',
            position: {
              start: { line: 15, column: 1, offset: 747 },
              end: { line: 34, column: 4, offset: 1077 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'For the sake of a sane API, pipe behaves eagerly when passed any amount of arguments before the array of functions.',
                position: {
                  start: { line: 36, column: 1, offset: 1079 },
                  end: { line: 36, column: 116, offset: 1194 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 36, column: 1, offset: 1079 },
              end: { line: 36, column: 116, offset: 1194 },
              indent: []
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
              start: { line: 38, column: 1, offset: 1196 },
              end: { line: 44, column: 4, offset: 1314 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 44, column: 4, offset: 1314 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
    name: 'pipe.sync',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  funcs [...args=>any, ...Array<any=>any>]\n' +
      '\n' +
      'pipe.sync(funcs) -> syncPipeline ...args=>any\n' +
      '```',
    description: "`pipe` that doesn't automatically resolve promises. This variant is a good option if more performance is desired or if manual promise handling is required.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'pipe.sync([\n' +
      '  value => Promise.resolve(value),\n' +
      '  promise => promise.then(console.log)\n' +
      "])('hey') // hey\n" +
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
                value: 'pipe.sync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  funcs [...args=>any, ...Array<any=>any>]\n' +
              '\n' +
              'pipe.sync(funcs) -> syncPipeline ...args=>any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 139 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 139 }
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
                value: 'pipe',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: " that doesn't automatically resolve promises. This variant is a good option if more performance is desired or if manual promise handling is required.",
                position: {
                  start: { line: 1, column: 7, offset: 6 },
                  end: { line: 1, column: 156, offset: 155 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 156, offset: 155 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe.sync([\n' +
              '  value => Promise.resolve(value),\n' +
              '  promise => promise.then(console.log)\n' +
              "])('hey') // hey",
            position: {
              start: { line: 3, column: 1, offset: 157 },
              end: { line: 8, column: 4, offset: 290 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 8, column: 4, offset: 290 }
        }
      }
    }
  },
  {
    name: 'reduce',
    synopsis: '```coffeescript [specscript]\n' +
      'reduce(\n' +
      '  arrayReducer (result any, value any, index number, array Array)=>Promise|any,\n' +
      '  init? (array=>Promise|any)|any,\n' +
      ')(array) -> Promise|result\n' +
      '\n' +
      'reduce(\n' +
      '  objectReducer (result any, value any, key string, object Object)=>Promise|any,\n' +
      '  init? (object=>Promise|any)|any,\n' +
      ')(object) -> Promise|result\n' +
      '\n' +
      'reduce(\n' +
      '  mapReducer (result any, value any, key any, map Map)=>Promise|any,\n' +
      '  init? (map=>Promise|any)|any,\n' +
      ')(map) -> Promise|result\n' +
      '\n' +
      'Foldable = Iterable|AsyncIterable|{ reduce: (reducer, result?)=>any }\n' +
      '\n' +
      'reduce(\n' +
      '  reducer (result any, value any)=>Promise|any,\n' +
      '  init? ((foldable Foldable)=>Promise|any)|any,\n' +
      ')(foldable) -> Promise|result\n' +
      '\n' +
      'reduce(\n' +
      '  reducer (result any, value any)=>Promise|any,\n' +
      '  init? (()=>Promise|any)|any,\n' +
      ')(generatorFunction) -> reducingGeneratorValuesFunction (...generatorFunctionArgs)=>Promise|any\n' +
      '\n' +
      'reduce(\n' +
      '  reducer (result any, value any)=>Promise|any,\n' +
      '  init? (()=>Promise|any)|any,\n' +
      ')(asyncGeneratorFunction) -> reducingAsyncGeneratorValuesFunction (...asyncGeneratorFunctionArgs)=>Promise|any\n' +
      '\n' +
      'reduce(reducer, init?)(...moreReducers) -> ...args=>Promise|any\n' +
      '```',
    description: 'Execute a reducer for each item of a collection, returning a single output value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const max = (a, b) => a > b ? a : b\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(max)([1, 3, 5, 4, 2]),\n' +
      ') // 5\n' +
      '```\n' +
      '\n' +
      'If an optional initialization parameter is supplied, the result starts as that parameter rather than the first item of the collection. For memory and performance, this library makes no assumptions about immutability. Handle references for this initial value with care, as they could be mutated.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(add)([1, 2, 3, 4, 5], 0),\n' +
      ') // 15\n' +
      '```\n' +
      '\n' +
      'If the initialization parameter is a function, it is treated as a resolver and called with the input arguments to resolve an initial value for the accumulator at execution time.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
      '\n' +
      'const initEmptyArray = () => []\n' +
      '\n' +
      'console.log(\n' +
      '  reduce(concatSquares, initEmptyArray)([1, 2, 3, 4, 5]),\n' +
      ') // [1, 4, 9, 16, 25]\n' +
      '```\n' +
      '\n' +
      'Fully asynchronous reducing operations are possible with asynchronous reducers and asynchronous data streams.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
      '\n' +
      '// asyncAppReducer(\n' +
      '//   state { todos: Array },\n' +
      '//   action { type: string, todoID: string },\n' +
      '// ) -> state\n' +
      'const asyncAppReducer = async function (state, action) {\n' +
      "  if (action.type == 'FETCH_TODO') {\n" +
      '    const todo = await fetch(\n' +
      "      'https://jsonplaceholder.typicode.com/todos/' + action.todoID,\n" +
      '    ).then(response => response.json())\n' +
      "    console.log('fetched', todo)\n" +
      '    state.todos.push(todo)\n' +
      '    return state\n' +
      '  }\n' +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const asyncFetchActions = async function* (count) {\n' +
      '  let idCount = 0\n' +
      '  while (++idCount <= count) {\n' +
      '    await sleep(1000)\n' +
      "    yield { type: 'FETCH_TODO', todoID: idCount }\n" +
      '  }\n' +
      '}\n' +
      '\n' +
      'const state = { todos: [] }\n' +
      '\n' +
      'reduce(asyncAppReducer, state)(asyncFetchActions(5))\n' +
      "  .then(reducedState => console.log('finalState', reducedState))\n" +
      '\n' +
      "// fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
      "// fetched { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
      "// fetched { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
      "// fetched { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
      "// fetched { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }\n" +
      '// finalState {\n' +
      '//   todos: [\n' +
      "//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },\n" +
      "//     { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false },\n" +
      "//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },\n" +
      "//     { userId: 1, id: 4, title: 'et porro tempora', completed: true },\n" +
      "//     { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false },\n" +
      '//   ],\n' +
      '// }\n' +
      '```\n' +
      '\n' +
      'If the first argument to a reducing function is a reducer, `reduce` concatenates any reducers in argument position onto the initial reducer, producing a combined reducer that performs a chained operation per each item in a reducing operation.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const reducerA = (state, action) => {\n' +
      "  if (action.type == 'A') return { ...state, A: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerB = (state, action) => {\n' +
      "  if (action.type == 'B') return { ...state, B: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerC = (state, action) => {\n' +
      "  if (action.type == 'C') return { ...state, C: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      '// state => state\n' +
      'const traceMiddleware = tap(\n' +
      "  (state, action) => console.log('state, action', state, action))\n" +
      '\n' +
      'const reducingABC = reduce(\n' +
      '  traceMiddleware, () => ({}))(reducerA, reducerB, reducerC)\n' +
      '\n' +
      "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
      '\n' +
      'console.log(\n' +
      "  'final state:',\n" +
      '  reducingABC(actions),\n' +
      ') // { A: true, B: true, C: true }\n' +
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
            value: 'reduce(\n' +
              '  arrayReducer (result any, value any, index number, array Array)=>Promise|any,\n' +
              '  init? (array=>Promise|any)|any,\n' +
              ')(array) -> Promise|result\n' +
              '\n' +
              'reduce(\n' +
              '  objectReducer (result any, value any, key string, object Object)=>Promise|any,\n' +
              '  init? (object=>Promise|any)|any,\n' +
              ')(object) -> Promise|result\n' +
              '\n' +
              'reduce(\n' +
              '  mapReducer (result any, value any, key any, map Map)=>Promise|any,\n' +
              '  init? (map=>Promise|any)|any,\n' +
              ')(map) -> Promise|result\n' +
              '\n' +
              'Foldable = Iterable|AsyncIterable|{ reduce: (reducer, result?)=>any }\n' +
              '\n' +
              'reduce(\n' +
              '  reducer (result any, value any)=>Promise|any,\n' +
              '  init? ((foldable Foldable)=>Promise|any)|any,\n' +
              ')(foldable) -> Promise|result\n' +
              '\n' +
              'reduce(\n' +
              '  reducer (result any, value any)=>Promise|any,\n' +
              '  init? (()=>Promise|any)|any,\n' +
              ')(generatorFunction) -> reducingGeneratorValuesFunction (...generatorFunctionArgs)=>Promise|any\n' +
              '\n' +
              'reduce(\n' +
              '  reducer (result any, value any)=>Promise|any,\n' +
              '  init? (()=>Promise|any)|any,\n' +
              ')(asyncGeneratorFunction) -> reducingAsyncGeneratorValuesFunction (...asyncGeneratorFunctionArgs)=>Promise|any\n' +
              '\n' +
              'reduce(reducer, init?)(...moreReducers) -> ...args=>Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 35, column: 4, offset: 1123 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 35, column: 4, offset: 1123 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a reducer for each item of a collection, returning a single output value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 82, offset: 81 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 82, offset: 81 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const max = (a, b) => a > b ? a : b\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(max)([1, 3, 5, 4, 2]),\n' +
              ') // 5',
            position: {
              start: { line: 3, column: 1, offset: 83 },
              end: { line: 9, column: 4, offset: 202 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If an optional initialization parameter is supplied, the result starts as that parameter rather than the first item of the collection. For memory and performance, this library makes no assumptions about immutability. Handle references for this initial value with care, as they could be mutated.',
                position: {
                  start: { line: 11, column: 1, offset: 204 },
                  end: { line: 11, column: 295, offset: 498 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 11, column: 1, offset: 204 },
              end: { line: 11, column: 295, offset: 498 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const add = (a, b) => a + b\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(add)([1, 2, 3, 4, 5], 0),\n' +
              ') // 15',
            position: {
              start: { line: 13, column: 1, offset: 500 },
              end: { line: 19, column: 4, offset: 615 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If the initialization parameter is a function, it is treated as a resolver and called with the input arguments to resolve an initial value for the accumulator at execution time.',
                position: {
                  start: { line: 21, column: 1, offset: 617 },
                  end: { line: 21, column: 178, offset: 794 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 21, column: 1, offset: 617 },
              end: { line: 21, column: 178, offset: 794 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const concatSquares = (array, value) => array.concat(value ** 2)\n' +
              '\n' +
              'const initEmptyArray = () => []\n' +
              '\n' +
              'console.log(\n' +
              '  reduce(concatSquares, initEmptyArray)([1, 2, 3, 4, 5]),\n' +
              ') // [1, 4, 9, 16, 25]',
            position: {
              start: { line: 23, column: 1, offset: 796 },
              end: { line: 31, column: 4, offset: 1019 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Fully asynchronous reducing operations are possible with asynchronous reducers and asynchronous data streams.',
                position: {
                  start: { line: 33, column: 1, offset: 1021 },
                  end: { line: 33, column: 110, offset: 1130 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 33, column: 1, offset: 1021 },
              end: { line: 33, column: 110, offset: 1130 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))\n' +
              '\n' +
              '// asyncAppReducer(\n' +
              '//   state { todos: Array },\n' +
              '//   action { type: string, todoID: string },\n' +
              '// ) -> state\n' +
              'const asyncAppReducer = async function (state, action) {\n' +
              "  if (action.type == 'FETCH_TODO') {\n" +
              '    const todo = await fetch(\n' +
              "      'https://jsonplaceholder.typicode.com/todos/' + action.todoID,\n" +
              '    ).then(response => response.json())\n' +
              "    console.log('fetched', todo)\n" +
              '    state.todos.push(todo)\n' +
              '    return state\n' +
              '  }\n' +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const asyncFetchActions = async function* (count) {\n' +
              '  let idCount = 0\n' +
              '  while (++idCount <= count) {\n' +
              '    await sleep(1000)\n' +
              "    yield { type: 'FETCH_TODO', todoID: idCount }\n" +
              '  }\n' +
              '}\n' +
              '\n' +
              'const state = { todos: [] }\n' +
              '\n' +
              'reduce(asyncAppReducer, state)(asyncFetchActions(5))\n' +
              "  .then(reducedState => console.log('finalState', reducedState))\n" +
              '\n' +
              "// fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n" +
              "// fetched { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false }\n" +
              "// fetched { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }\n" +
              "// fetched { userId: 1, id: 4, title: 'et porro tempora', completed: true }\n" +
              "// fetched { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false }\n" +
              '// finalState {\n' +
              '//   todos: [\n' +
              "//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },\n" +
              "//     { userId: 1, id: 2, title: 'quis ut nam facilis...', completed: false },\n" +
              "//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },\n" +
              "//     { userId: 1, id: 4, title: 'et porro tempora', completed: true },\n" +
              "//     { userId: 1, id: 5, title: 'laboriosam mollitia...', completed: false },\n" +
              '//   ],\n' +
              '// }',
            position: {
              start: { line: 35, column: 1, offset: 1132 },
              end: { line: 81, column: 4, offset: 2830 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If the first argument to a reducing function is a reducer, ',
                position: {
                  start: { line: 83, column: 1, offset: 2832 },
                  end: { line: 83, column: 60, offset: 2891 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 83, column: 60, offset: 2891 },
                  end: { line: 83, column: 68, offset: 2899 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' concatenates any reducers in argument position onto the initial reducer, producing a combined reducer that performs a chained operation per each item in a reducing operation.',
                position: {
                  start: { line: 83, column: 68, offset: 2899 },
                  end: { line: 83, column: 243, offset: 3074 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 83, column: 1, offset: 2832 },
              end: { line: 83, column: 243, offset: 3074 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const reducerA = (state, action) => {\n' +
              "  if (action.type == 'A') return { ...state, A: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const reducerB = (state, action) => {\n' +
              "  if (action.type == 'B') return { ...state, B: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const reducerC = (state, action) => {\n' +
              "  if (action.type == 'C') return { ...state, C: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              '// state => state\n' +
              'const traceMiddleware = tap(\n' +
              "  (state, action) => console.log('state, action', state, action))\n" +
              '\n' +
              'const reducingABC = reduce(\n' +
              '  traceMiddleware, () => ({}))(reducerA, reducerB, reducerC)\n' +
              '\n' +
              "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
              '\n' +
              'console.log(\n' +
              "  'final state:',\n" +
              '  reducingABC(actions),\n' +
              ') // { A: true, B: true, C: true }',
            position: {
              start: { line: 85, column: 1, offset: 3076 },
              end: { line: 114, column: 4, offset: 3796 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 114, column: 4, offset: 3796 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
      'var value any,\n' +
      '  path string|Array<string|number>,\n' +
      '  value (value=>any)|any\n' +
      '\n' +
      'set(path, value) -> setter  object=>object\n' +
      '```',
    description: 'Create a setter that sets a property on an object denoted by path.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  set('a', 1)({ b: 2 })\n" +
      ') // { a: 1, b: 2 }\n' +
      '\n' +
      'console.log(\n' +
      "  set('a.b', 1)({ a: { c: 2 } }),\n" +
      ') // { a : { b: 1, c: 2 }}\n' +
      '\n' +
      'console.log(\n' +
      "  set('a[0].b.c', 4)({ a: [{ b: { c: 3 } }] }),\n" +
      ') // { a: [{ b: { c: 4 } }] }\n' +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'var value any,\n' +
              '  path string|Array<string|number>,\n' +
              '  value (value=>any)|any\n' +
              '\n' +
              'set(path, value) -> setter  object=>object',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 152 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 152 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Create a setter that sets a property on an object denoted by path.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 67, offset: 66 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 67, offset: 66 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'console.log(\n' +
              "  set('a', 1)({ b: 2 })\n" +
              ') // { a: 1, b: 2 }\n' +
              '\n' +
              'console.log(\n' +
              "  set('a.b', 1)({ a: { c: 2 } }),\n" +
              ') // { a : { b: 1, c: 2 }}\n' +
              '\n' +
              'console.log(\n' +
              "  set('a[0].b.c', 4)({ a: [{ b: { c: 3 } }] }),\n" +
              ') // { a: [{ b: { c: 4 } }] }',
            position: {
              start: { line: 3, column: 1, offset: 68 },
              end: { line: 15, column: 4, offset: 322 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 15, column: 4, offset: 322 }
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
    name: 'switchCase',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  result any,\n' +
      '  predicate ...args=>Promise|boolean,\n' +
      '  resolver ...args=>Promise|result,\n' +
      '  defaultResolver ...args=>Promise|result,\n' +
      '  conditionalFunctions [\n' +
      '    ...Array<predicate|resolver>,\n' +
      '    defaultResolver,\n' +
      '  ]\n' +
      '\n' +
      'switchCase(conditionalFunctions)(...args) -> Promise|result\n' +
      '```',
    description: 'Conditional operator for values or functions. Cases are defined as pairings of `predicate` and `value` (or `resolver` thereof), with the exception of the last, default resolver or value.\n' +
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
      'console.log(\n' +
      "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
      ') // plantain is possibly a banana\n' +
      '```\n' +
      '\n' +
      'A mixture of functions and values can be supplied as any of the array items.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'switchCase([\n' +
      '  async function asyncFalse() {\n' +
      '    return false\n' +
      '  },\n' +
      "  'something not returned',\n" +
      "  'default',\n" +
      ']).then(console.log) // default\n' +
      '```\n' +
      '\n' +
      'If every item in the argument array to switchCase is a value, switchCase should behave as the ternary ? : operator. Any promises are resolved serially.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const a = 1\n' +
      '\n' +
      'switchCase([\n' +
      '  a == 1,\n' +
      "  Promise.resolve('hello world'),\n" +
      "  'default',\n" +
      ']).then(console.log) // hello world\n' +
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  result any,\n' +
              '  predicate ...args=>Promise|boolean,\n' +
              '  resolver ...args=>Promise|result,\n' +
              '  defaultResolver ...args=>Promise|result,\n' +
              '  conditionalFunctions [\n' +
              '    ...Array<predicate|resolver>,\n' +
              '    defaultResolver,\n' +
              '  ]\n' +
              '\n' +
              'switchCase(conditionalFunctions)(...args) -> Promise|result',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 13, column: 4, offset: 325 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 13, column: 4, offset: 325 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Conditional operator for values or functions. Cases are defined as pairings of ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 80, offset: 79 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'predicate',
                position: {
                  start: { line: 1, column: 80, offset: 79 },
                  end: { line: 1, column: 91, offset: 90 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' and ',
                position: {
                  start: { line: 1, column: 91, offset: 90 },
                  end: { line: 1, column: 96, offset: 95 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'value',
                position: {
                  start: { line: 1, column: 96, offset: 95 },
                  end: { line: 1, column: 103, offset: 102 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' (or ',
                position: {
                  start: { line: 1, column: 103, offset: 102 },
                  end: { line: 1, column: 108, offset: 107 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'resolver',
                position: {
                  start: { line: 1, column: 108, offset: 107 },
                  end: { line: 1, column: 118, offset: 117 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' thereof), with the exception of the last, default resolver or value.',
                position: {
                  start: { line: 1, column: 118, offset: 117 },
                  end: { line: 1, column: 187, offset: 186 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 187, offset: 186 },
              indent: []
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
              'console.log(\n' +
              "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
              ') // plantain is possibly a banana',
            position: {
              start: { line: 3, column: 1, offset: 188 },
              end: { line: 15, column: 4, offset: 536 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A mixture of functions and values can be supplied as any of the array items.',
                position: {
                  start: { line: 17, column: 1, offset: 538 },
                  end: { line: 17, column: 77, offset: 614 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 17, column: 1, offset: 538 },
              end: { line: 17, column: 77, offset: 614 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'switchCase([\n' +
              '  async function asyncFalse() {\n' +
              '    return false\n' +
              '  },\n' +
              "  'something not returned',\n" +
              "  'default',\n" +
              ']).then(console.log) // default',
            position: {
              start: { line: 19, column: 1, offset: 616 },
              end: { line: 27, column: 4, offset: 786 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'If every item in the argument array to switchCase is a value, switchCase should behave as the ternary ? : operator. Any promises are resolved serially.',
                position: {
                  start: { line: 29, column: 1, offset: 788 },
                  end: { line: 29, column: 152, offset: 939 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 29, column: 1, offset: 788 },
              end: { line: 29, column: 152, offset: 939 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const a = 1\n' +
              '\n' +
              'switchCase([\n' +
              '  a == 1,\n' +
              "  Promise.resolve('hello world'),\n" +
              "  'default',\n" +
              ']).then(console.log) // hello world',
            position: {
              start: { line: 31, column: 1, offset: 941 },
              end: { line: 39, column: 4, offset: 1090 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 39, column: 4, offset: 1090 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
      'var args ...any,\n' +
      '  tapper ...args=>Promise|any\n' +
      '\n' +
      'tap(tapper)(...args) -> Promise|args[0]\n' +
      '```',
    description: 'Call a function with a value, returning the value. Promises created by the tapper are resolved before returning the value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      '  tap(console.log),\n' +
      "  value => value + 'bar',\n" +
      '  tap(console.log),\n' +
      "])('foo') // 'foo'\n" +
      "          // 'foobar'\n" +
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  tapper ...args=>Promise|any\n' +
              '\n' +
              'tap(tapper)(...args) -> Promise|args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 120 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 120 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Call a function with a value, returning the value. Promises created by the tapper are resolved before returning the value.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 123, offset: 122 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 123, offset: 122 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe([\n' +
              '  tap(console.log),\n' +
              "  value => value + 'bar',\n" +
              '  tap(console.log),\n' +
              "])('foo') // 'foo'\n" +
              "          // 'foobar'",
            position: {
              start: { line: 3, column: 1, offset: 124 },
              end: { line: 10, column: 4, offset: 268 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 10, column: 4, offset: 268 }
        }
      }
    }
  },
  {
    name: 'tap.sync',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  tapper ...args=>any\n' +
      '\n' +
      'tap.sync(tapper)(...args) -> args[0]\n' +
      '```',
    description: 'Synchronous `tap`\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      "  tap.sync(number => console.log('square', number ** 2)),\n" +
      "  tap.sync(number => console.log('cube', number ** 3)),\n" +
      '])(3) // 9\n' +
      '      // 27\n' +
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
                value: 'tap.sync',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  tapper ...args=>any\n' +
              '\n' +
              'tap.sync(tapper)(...args) -> args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 109 },
              indent: [ 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 6, column: 4, offset: 109 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Synchronous ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'tap',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 18, offset: 17 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'pipe([\n' +
              "  tap.sync(number => console.log('square', number ** 2)),\n" +
              "  tap.sync(number => console.log('cube', number ** 3)),\n" +
              '])(3) // 9\n' +
              '      // 27',
            position: {
              start: { line: 3, column: 1, offset: 19 },
              end: { line: 9, column: 4, offset: 193 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 193 }
        }
      }
    }
  },
  {
    name: 'tap.if',
    synopsis: '```coffeescript [specscript]\n' +
      'var args ...any,\n' +
      '  predicate ...args=>Promise|boolean,\n' +
      '  tapper ...args=>Promise|any\n' +
      '\n' +
      'tap.if(predicate, tapper)(...args) -> Promise|args[0]\n' +
      '```',
    description: 'Conditional `tap` by predicate\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'const logIfOdd = tap.if(\n' +
      '  isOdd,\n' +
      "  number => console.log(number, 'is an odd number'))\n" +
      '\n' +
      'logIfOdd(2)\n' +
      'logIfOdd(3) // 3 is an odd number\n' +
      '```',
    related: 'tap',
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  predicate ...args=>Promise|boolean,\n' +
              '  tapper ...args=>Promise|any\n' +
              '\n' +
              'tap.if(predicate, tapper)(...args) -> Promise|args[0]',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 172 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                value: 'Conditional ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'tap',
                position: {
                  start: { line: 1, column: 13, offset: 12 },
                  end: { line: 1, column: 18, offset: 17 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' by predicate',
                position: {
                  start: { line: 1, column: 18, offset: 17 },
                  end: { line: 1, column: 31, offset: 30 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 31, offset: 30 },
              indent: []
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
              "  number => console.log(number, 'is an odd number'))\n" +
              '\n' +
              'logIfOdd(2)\n' +
              'logIfOdd(3) // 3 is an odd number',
            position: {
              start: { line: 3, column: 1, offset: 32 },
              end: { line: 12, column: 4, offset: 237 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 12, column: 4, offset: 237 }
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
                value: 'tap',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 1, column: 4, offset: 3 }
        }
      }
    }
  },
  {
    name: 'thunkify',
    synopsis: '```coffeescript [specscript]\n' +
      'var func function,\n' +
      '  args ...any\n' +
      '\n' +
      'thunkify(func, ...args) -> thunk ()=>func(...args)\n' +
      '```',
    description: 'Create a thunk from a function and any number of arguments. A thunk is a function that takes no arguments - the computation it represents has already been "thunk" with given function and arguments.\n' +
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
            value: 'var func function,\n' +
              '  args ...any\n' +
              '\n' +
              'thunkify(func, ...args) -> thunk ()=>func(...args)',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 6, column: 4, offset: 117 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                value: 'Create a thunk from a function and any number of arguments. A thunk is a function that takes no arguments - the computation it represents has already been "thunk" with given function and arguments.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 198, offset: 197 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 198, offset: 197 },
              indent: []
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
              start: { line: 3, column: 1, offset: 199 },
              end: { line: 9, column: 4, offset: 329 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 9, column: 4, offset: 329 }
        }
      }
    }
  },
  {
    name: 'transform',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Semigroup<T> = Array<T>|String<T>|Set<T>|TypedArray<T>\n' +
      '  |{ concat: Reducer<T> }|{ write: Reducer<T> }|Object<T>\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  args ...any,\n' +
      '  transducer Reducer=>Reducer,\n' +
      '  init (...args=>Promise|Semigroup<T>)|Semigroup<T>,\n' +
      '  foldable Foldable<T>,\n' +
      '  generatorFunction ...args=>Generator<T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  reducers ...Reducer<T>\n' +
      '\n' +
      'transform(transducer, init?)(foldable) -> Promise|Semigroup\n' +
      '\n' +
      'transform(transducer, init?)(generatorFunction) -> ...args=>Promise|Semigroup\n' +
      '\n' +
      'transform(transducer, init?)(asyncGeneratorFunction) -> ...args=>Promise|Semigroup\n' +
      '\n' +
      'transform(transducer, init?)(...reducers) -> ...args=>Promise|Semigroup\n' +
      '```',
    description: 'Reduce a value by transducer and concatenation, returning a semigroup of transduced items. The initial value may be a function, in which case it is treated as a resolver.\n' +
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
      'console.log(\n' +
      '  transform(squaredOdds, () => [])([1, 2, 3, 4, 5]),\n' +
      ') // [1, 9, 25]\n' +
      '\n' +
      'console.log(\n' +
      "  transform(squaredOdds, '')([1, 2, 3, 4, 5]),\n" +
      ") // '1925'\n" +
      '\n' +
      'console.log(\n' +
      '  transform(squaredOdds, () => new Uint8Array())([1, 2, 3, 4, 5]),\n' +
      ') // Uint8Array(3) [ 1, 9, 25 ]\n' +
      '```\n' +
      '\n' +
      'A `Semigroup` is any type with some notion of concatenation. This could possibly manifest in a `.concat` method.\n' +
      ' * `Array` - `result.concat(values)`\n' +
      ' * `string` - `result + values`\n' +
      ' * `Set` - `result.add(...values)`\n' +
      ' * `TypedArray` - `result.set(prevResult); result.set(values, offset)`\n' +
      ' * `{ concat: function }` - `result.concat(values)`\n' +
      ' * `{ write: function }` - essentially `item.pipe(result)` or `result.write(item)`\n' +
      ' * `Object` - `({ ...result, ...values })`\n' +
      '\n' +
      'Here is a simple `Semigroup` as an object that implements `.concat`.\n' +
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
      'Here is a transformation of an async generator to a Node.js writable stream, `process.stdout`.\n' +
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
      '```\n' +
      '\n' +
      '`transform`, like `reduce`, supports reducer combination. This variant of state management automatically assigns (`Object.assign`) pipeline objects into the aggregate state object.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const reducerA = async (state, action) => {\n' +
      "  if (action.type == 'A') return { ...state, A: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerB = async (state, action) => {\n' +
      "  if (action.type == 'B') return { ...state, B: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const reducerC = async (state, action) => {\n' +
      "  if (action.type == 'C') return { ...state, C: true }\n" +
      '  return state\n' +
      '}\n' +
      '\n' +
      'const logAction = function (action) {\n' +
      "  console.log('action', action)\n" +
      '  return action\n' +
      '}\n' +
      '\n' +
      'const reducingABC = transform(\n' +
      '  map(logAction), // transducer logger middleware\n' +
      '  () => ({}), // initial state resolver\n' +
      ')(reducerA, reducerB, reducerC)\n' +
      '\n' +
      "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
      '\n' +
      'reducingABC(actions).then(\n' +
      "  state => console.log('state', state))\n" +
      "// action { type: 'A' }\n" +
      "// action { type: 'B' }\n" +
      "// action { type: 'C' }\n" +
      '// state { A: true, B: true, C: true }\n' +
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
            value: 'Reducer<T> = (any, T)=>Promise|any\n' +
              'Semigroup<T> = Array<T>|String<T>|Set<T>|TypedArray<T>\n' +
              '  |{ concat: Reducer<T> }|{ write: Reducer<T> }|Object<T>\n' +
              'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
              '\n' +
              'var T any,\n' +
              '  args ...any,\n' +
              '  transducer Reducer=>Reducer,\n' +
              '  init (...args=>Promise|Semigroup<T>)|Semigroup<T>,\n' +
              '  foldable Foldable<T>,\n' +
              '  generatorFunction ...args=>Generator<T>,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  reducers ...Reducer<T>\n' +
              '\n' +
              'transform(transducer, init?)(foldable) -> Promise|Semigroup\n' +
              '\n' +
              'transform(transducer, init?)(generatorFunction) -> ...args=>Promise|Semigroup\n' +
              '\n' +
              'transform(transducer, init?)(asyncGeneratorFunction) -> ...args=>Promise|Semigroup\n' +
              '\n' +
              'transform(transducer, init?)(...reducers) -> ...args=>Promise|Semigroup',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 23, column: 4, offset: 814 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 23, column: 4, offset: 814 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Reduce a value by transducer and concatenation, returning a semigroup of transduced items. The initial value may be a function, in which case it is treated as a resolver.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 171, offset: 170 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 171, offset: 170 },
              indent: []
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
              'console.log(\n' +
              '  transform(squaredOdds, () => [])([1, 2, 3, 4, 5]),\n' +
              ') // [1, 9, 25]\n' +
              '\n' +
              'console.log(\n' +
              "  transform(squaredOdds, '')([1, 2, 3, 4, 5]),\n" +
              ") // '1925'\n" +
              '\n' +
              'console.log(\n' +
              '  transform(squaredOdds, () => new Uint8Array())([1, 2, 3, 4, 5]),\n' +
              ') // Uint8Array(3) [ 1, 9, 25 ]',
            position: {
              start: { line: 3, column: 1, offset: 172 },
              end: { line: 24, column: 4, offset: 612 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'A ',
                position: {
                  start: { line: 26, column: 1, offset: 614 },
                  end: { line: 26, column: 3, offset: 616 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Semigroup',
                position: {
                  start: { line: 26, column: 3, offset: 616 },
                  end: { line: 26, column: 14, offset: 627 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' is any type with some notion of concatenation. This could possibly manifest in a ',
                position: {
                  start: { line: 26, column: 14, offset: 627 },
                  end: { line: 26, column: 96, offset: 709 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.concat',
                position: {
                  start: { line: 26, column: 96, offset: 709 },
                  end: { line: 26, column: 105, offset: 718 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' method.',
                position: {
                  start: { line: 26, column: 105, offset: 718 },
                  end: { line: 26, column: 113, offset: 726 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 26, column: 1, offset: 614 },
              end: { line: 26, column: 113, offset: 726 },
              indent: []
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
                          start: { line: 27, column: 4, offset: 730 },
                          end: { line: 27, column: 11, offset: 737 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 27, column: 11, offset: 737 },
                          end: { line: 27, column: 14, offset: 740 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.concat(values)',
                        position: {
                          start: { line: 27, column: 14, offset: 740 },
                          end: { line: 27, column: 37, offset: 763 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 27, column: 4, offset: 730 },
                      end: { line: 27, column: 37, offset: 763 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 27, column: 1, offset: 727 },
                  end: { line: 27, column: 37, offset: 763 },
                  indent: []
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
                          start: { line: 28, column: 4, offset: 767 },
                          end: { line: 28, column: 12, offset: 775 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 28, column: 12, offset: 775 },
                          end: { line: 28, column: 15, offset: 778 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result + values',
                        position: {
                          start: { line: 28, column: 15, offset: 778 },
                          end: { line: 28, column: 32, offset: 795 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 28, column: 4, offset: 767 },
                      end: { line: 28, column: 32, offset: 795 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 28, column: 1, offset: 764 },
                  end: { line: 28, column: 32, offset: 795 },
                  indent: []
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
                          start: { line: 29, column: 4, offset: 799 },
                          end: { line: 29, column: 9, offset: 804 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 29, column: 9, offset: 804 },
                          end: { line: 29, column: 12, offset: 807 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.add(...values)',
                        position: {
                          start: { line: 29, column: 12, offset: 807 },
                          end: { line: 29, column: 35, offset: 830 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 29, column: 4, offset: 799 },
                      end: { line: 29, column: 35, offset: 830 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 29, column: 1, offset: 796 },
                  end: { line: 29, column: 35, offset: 830 },
                  indent: []
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
                          start: { line: 30, column: 4, offset: 834 },
                          end: { line: 30, column: 16, offset: 846 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 30, column: 16, offset: 846 },
                          end: { line: 30, column: 19, offset: 849 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.set(prevResult); result.set(values, offset)',
                        position: {
                          start: { line: 30, column: 19, offset: 849 },
                          end: { line: 30, column: 71, offset: 901 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 30, column: 4, offset: 834 },
                      end: { line: 30, column: 71, offset: 901 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 30, column: 1, offset: 831 },
                  end: { line: 30, column: 71, offset: 901 },
                  indent: []
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
                          start: { line: 31, column: 4, offset: 905 },
                          end: { line: 31, column: 26, offset: 927 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 31, column: 26, offset: 927 },
                          end: { line: 31, column: 29, offset: 930 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.concat(values)',
                        position: {
                          start: { line: 31, column: 29, offset: 930 },
                          end: { line: 31, column: 52, offset: 953 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 31, column: 4, offset: 905 },
                      end: { line: 31, column: 52, offset: 953 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 31, column: 1, offset: 902 },
                  end: { line: 31, column: 52, offset: 953 },
                  indent: []
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
                          start: { line: 32, column: 4, offset: 957 },
                          end: { line: 32, column: 25, offset: 978 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - essentially ',
                        position: {
                          start: { line: 32, column: 25, offset: 978 },
                          end: { line: 32, column: 40, offset: 993 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'item.pipe(result)',
                        position: {
                          start: { line: 32, column: 40, offset: 993 },
                          end: { line: 32, column: 59, offset: 1012 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' or ',
                        position: {
                          start: { line: 32, column: 59, offset: 1012 },
                          end: { line: 32, column: 63, offset: 1016 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: 'result.write(item)',
                        position: {
                          start: { line: 32, column: 63, offset: 1016 },
                          end: { line: 32, column: 83, offset: 1036 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 32, column: 4, offset: 957 },
                      end: { line: 32, column: 83, offset: 1036 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 32, column: 1, offset: 954 },
                  end: { line: 32, column: 83, offset: 1036 },
                  indent: []
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
                          start: { line: 33, column: 4, offset: 1040 },
                          end: { line: 33, column: 12, offset: 1048 },
                          indent: []
                        }
                      },
                      {
                        type: 'text',
                        value: ' - ',
                        position: {
                          start: { line: 33, column: 12, offset: 1048 },
                          end: { line: 33, column: 15, offset: 1051 },
                          indent: []
                        }
                      },
                      {
                        type: 'inlineCode',
                        value: '({ ...result, ...values })',
                        position: {
                          start: { line: 33, column: 15, offset: 1051 },
                          end: { line: 33, column: 43, offset: 1079 },
                          indent: []
                        }
                      }
                    ],
                    position: {
                      start: { line: 33, column: 4, offset: 1040 },
                      end: { line: 33, column: 43, offset: 1079 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 33, column: 1, offset: 1037 },
                  end: { line: 33, column: 43, offset: 1079 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 27, column: 1, offset: 727 },
              end: { line: 33, column: 43, offset: 1079 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Here is a simple ',
                position: {
                  start: { line: 35, column: 1, offset: 1081 },
                  end: { line: 35, column: 18, offset: 1098 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Semigroup',
                position: {
                  start: { line: 35, column: 18, offset: 1098 },
                  end: { line: 35, column: 29, offset: 1109 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' as an object that implements ',
                position: {
                  start: { line: 35, column: 29, offset: 1109 },
                  end: { line: 35, column: 59, offset: 1139 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: '.concat',
                position: {
                  start: { line: 35, column: 59, offset: 1139 },
                  end: { line: 35, column: 68, offset: 1148 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 35, column: 68, offset: 1148 },
                  end: { line: 35, column: 69, offset: 1149 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 35, column: 1, offset: 1081 },
              end: { line: 35, column: 69, offset: 1149 },
              indent: []
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
              start: { line: 37, column: 1, offset: 1151 },
              end: { line: 53, column: 4, offset: 1380 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Here is a transformation of an async generator to a Node.js writable stream, ',
                position: {
                  start: { line: 55, column: 1, offset: 1382 },
                  end: { line: 55, column: 78, offset: 1459 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'process.stdout',
                position: {
                  start: { line: 55, column: 78, offset: 1459 },
                  end: { line: 55, column: 94, offset: 1475 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 55, column: 94, offset: 1475 },
                  end: { line: 55, column: 95, offset: 1476 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 55, column: 1, offset: 1382 },
              end: { line: 55, column: 95, offset: 1476 },
              indent: []
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
              start: { line: 57, column: 1, offset: 1478 },
              end: { line: 77, column: 4, offset: 1998 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1
              ]
            }
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'inlineCode',
                value: 'transform',
                position: {
                  start: { line: 79, column: 1, offset: 2000 },
                  end: { line: 79, column: 12, offset: 2011 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', like ',
                position: {
                  start: { line: 79, column: 12, offset: 2011 },
                  end: { line: 79, column: 19, offset: 2018 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'reduce',
                position: {
                  start: { line: 79, column: 19, offset: 2018 },
                  end: { line: 79, column: 27, offset: 2026 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', supports reducer combination. This variant of state management automatically assigns (',
                position: {
                  start: { line: 79, column: 27, offset: 2026 },
                  end: { line: 79, column: 115, offset: 2114 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object.assign',
                position: {
                  start: { line: 79, column: 115, offset: 2114 },
                  end: { line: 79, column: 130, offset: 2129 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ') pipeline objects into the aggregate state object.',
                position: {
                  start: { line: 79, column: 130, offset: 2129 },
                  end: { line: 79, column: 181, offset: 2180 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 79, column: 1, offset: 2000 },
              end: { line: 79, column: 181, offset: 2180 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const reducerA = async (state, action) => {\n' +
              "  if (action.type == 'A') return { ...state, A: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const reducerB = async (state, action) => {\n' +
              "  if (action.type == 'B') return { ...state, B: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const reducerC = async (state, action) => {\n' +
              "  if (action.type == 'C') return { ...state, C: true }\n" +
              '  return state\n' +
              '}\n' +
              '\n' +
              'const logAction = function (action) {\n' +
              "  console.log('action', action)\n" +
              '  return action\n' +
              '}\n' +
              '\n' +
              'const reducingABC = transform(\n' +
              '  map(logAction), // transducer logger middleware\n' +
              '  () => ({}), // initial state resolver\n' +
              ')(reducerA, reducerB, reducerC)\n' +
              '\n' +
              "const actions = [{ type: 'A' }, { type: 'B' }, { type: 'C' }]\n" +
              '\n' +
              'reducingABC(actions).then(\n' +
              "  state => console.log('state', state))\n" +
              "// action { type: 'A' }\n" +
              "// action { type: 'B' }\n" +
              "// action { type: 'C' }\n" +
              '// state { A: true, B: true, C: true }',
            position: {
              start: { line: 81, column: 1, offset: 2182 },
              end: { line: 115, column: 4, offset: 3047 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 115, column: 4, offset: 3047 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 48, offset: 47 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 48, offset: 47 },
              indent: []
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
      'var args ...any,\n' +
      '  tryer ...args=>Promise|any,\n' +
      '  catcher (error Error, ...args)=>Promise|any\n' +
      '\n' +
      'tryCatch(tryer, catcher)(...args) -> Promise|any\n' +
      '```',
    description: 'Try a `tryer`, catch with `catcher`. On error or rejected promise, call the `catcher` with the error followed by any arguments to the tryer.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const errorThrower = tryCatch(\n' +
      '  message => {\n' +
      '    throw new Error(message)\n' +
      '  },\n' +
      '  (err, message) => {\n' +
      '    console.log(err)\n' +
      '    return `${message} from catcher`\n' +
      '  },\n' +
      ')\n' +
      '\n' +
      "console.log(errorThrower('hello')) // Error: hello\n" +
      '                                   // hello from catcher\n' +
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
            value: 'var args ...any,\n' +
              '  tryer ...args=>Promise|any,\n' +
              '  catcher (error Error, ...args)=>Promise|any\n' +
              '\n' +
              'tryCatch(tryer, catcher)(...args) -> Promise|any',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 7, column: 4, offset: 175 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 7, column: 4, offset: 175 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Try a ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'tryer',
                position: {
                  start: { line: 1, column: 7, offset: 6 },
                  end: { line: 1, column: 14, offset: 13 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', catch with ',
                position: {
                  start: { line: 1, column: 14, offset: 13 },
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 27, offset: 26 },
                  end: { line: 1, column: 36, offset: 35 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '. On error or rejected promise, call the ',
                position: {
                  start: { line: 1, column: 36, offset: 35 },
                  end: { line: 1, column: 77, offset: 76 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'catcher',
                position: {
                  start: { line: 1, column: 77, offset: 76 },
                  end: { line: 1, column: 86, offset: 85 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' with the error followed by any arguments to the tryer.',
                position: {
                  start: { line: 1, column: 86, offset: 85 },
                  end: { line: 1, column: 141, offset: 140 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 141, offset: 140 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: 'const errorThrower = tryCatch(\n' +
              '  message => {\n' +
              '    throw new Error(message)\n' +
              '  },\n' +
              '  (err, message) => {\n' +
              '    console.log(err)\n' +
              '    return `${message} from catcher`\n' +
              '  },\n' +
              ')\n' +
              '\n' +
              "console.log(errorThrower('hello')) // Error: hello\n" +
              '                                   // hello from catcher',
            position: {
              start: { line: 3, column: 1, offset: 142 },
              end: { line: 16, column: 4, offset: 448 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 16, column: 4, offset: 448 }
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 5, column: 4, offset: 99 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 29, offset: 28 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 29, offset: 28 },
              indent: []
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
              end: { line: 22, column: 4, offset: 458 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 3, column: 4, offset: 104 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 46, offset: 45 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 },
              indent: []
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
              end: { line: 8, column: 4, offset: 264 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
              end: { line: 6, column: 4, offset: 145 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 108, offset: 107 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 108, offset: 107 },
              indent: []
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
              end: { line: 27, column: 4, offset: 817 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
              end: { line: 6, column: 4, offset: 150 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 105, offset: 104 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 },
              indent: []
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
              end: { line: 10, column: 4, offset: 409 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 29, column: 4, offset: 899 },
              indent: [
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 16, offset: 15 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'filter',
                position: {
                  start: { line: 1, column: 16, offset: 15 },
                  end: { line: 1, column: 24, offset: 23 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '. Values that test true by the predicate are filtered out, or "rejected".',
                position: {
                  start: { line: 1, column: 24, offset: 23 },
                  end: { line: 1, column: 97, offset: 96 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 97, offset: 96 },
              indent: []
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 10, column: 4, offset: 245 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 70, offset: 69 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 70, offset: 69 },
              indent: []
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
              end: { line: 15, column: 4, offset: 356 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1
              ]
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 3, column: 4, offset: 99 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 131, offset: 130 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 131, offset: 130 },
              indent: []
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
              end: { line: 11, column: 4, offset: 366 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
              end: { line: 5, column: 4, offset: 76 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 35, offset: 34 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 },
              indent: []
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
              end: { line: 9, column: 4, offset: 235 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 23, column: 4, offset: 766 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1
              ]
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
                  end: { line: 1, column: 52, offset: 51 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 52, offset: 51 },
              indent: []
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
              end: { line: 23, column: 4, offset: 512 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 22, offset: 21 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 22, offset: 21 },
              indent: []
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
    name: 'forEach',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'var T any,\n' +
      '  callback T=>(),\n' +
      '  collection Iterable<T>|AsyncIterable<T>{ forEach: callback=>() }|Object<T>,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  reducer Reducer<T>\n' +
      '\n' +
      'forEach(callback)(collection) -> Promise<>|()\n' +
      '\n' +
      'forEach(callback)(generatorFunction) -> ...args=>Promise<>|()\n' +
      '\n' +
      'forEach(callback)(asyncGeneratorFunction) -> ...args=>Promise<>\n' +
      '\n' +
      'forEach(callback)(reducer) -> Reducer<T>\n' +
      '```',
    description: 'Execute a callback for each item of a collection, returning a Promise if any execution is asynchronous. Effectively `callback => map(tap)(callback)`. Also works in transducer position.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "import forEach from 'https://unpkg.com/rubico/dist/x/forEach.es.js'\n" +
      '\n' +
      'forEach(console.log)([1, 2, 3, 4, 5]) // 1 2 3 4 5\n' +
      'forEach(console.log)({ a: 1, b: 2, c: 3 }) // 1 2 3\n' +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      "const logNumber = number => console.log('got number', number)\n" +
      '\n' +
      'const numbers = [1, 2, 3, 4, 5]\n' +
      'const result = numbers.reduce(forEach(logNumber)(add), 0)\n' +
      '// got number 1\n' +
      '// got number 2\n' +
      '// got number 3\n' +
      '// got number 4\n' +
      '// got number 5\n' +
      '\n' +
      "console.log('result', result) // result 10\n" +
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              '\n' +
              'var T any,\n' +
              '  callback T=>(),\n' +
              '  collection Iterable<T>|AsyncIterable<T>{ forEach: callback=>() }|Object<T>,\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<T>,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  reducer Reducer<T>\n' +
              '\n' +
              'forEach(callback)(collection) -> Promise<>|()\n' +
              '\n' +
              'forEach(callback)(generatorFunction) -> ...args=>Promise<>|()\n' +
              '\n' +
              'forEach(callback)(asyncGeneratorFunction) -> ...args=>Promise<>\n' +
              '\n' +
              'forEach(callback)(reducer) -> Reducer<T>',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 19, column: 4, offset: 524 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 19, column: 4, offset: 524 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Execute a callback for each item of a collection, returning a Promise if any execution is asynchronous. Effectively ',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 117, offset: 116 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'callback => map(tap)(callback)',
                position: {
                  start: { line: 1, column: 117, offset: 116 },
                  end: { line: 1, column: 149, offset: 148 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '. Also works in transducer position.',
                position: {
                  start: { line: 1, column: 149, offset: 148 },
                  end: { line: 1, column: 185, offset: 184 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 185, offset: 184 },
              indent: []
            }
          },
          {
            type: 'code',
            lang: 'javascript',
            meta: '[playground]',
            value: "import forEach from 'https://unpkg.com/rubico/dist/x/forEach.es.js'\n" +
              '\n' +
              'forEach(console.log)([1, 2, 3, 4, 5]) // 1 2 3 4 5\n' +
              'forEach(console.log)({ a: 1, b: 2, c: 3 }) // 1 2 3\n' +
              '\n' +
              'const add = (a, b) => a + b\n' +
              '\n' +
              "const logNumber = number => console.log('got number', number)\n" +
              '\n' +
              'const numbers = [1, 2, 3, 4, 5]\n' +
              'const result = numbers.reduce(forEach(logNumber)(add), 0)\n' +
              '// got number 1\n' +
              '// got number 2\n' +
              '// got number 3\n' +
              '// got number 4\n' +
              '// got number 5\n' +
              '\n' +
              "console.log('result', result) // result 10",
            position: {
              start: { line: 3, column: 1, offset: 186 },
              end: { line: 22, column: 4, offset: 695 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 22, column: 4, offset: 695 }
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 12, column: 4, offset: 347 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1
              ]
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
                  end: { line: 1, column: 88, offset: 87 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 88, offset: 87 },
              indent: []
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
              end: { line: 17, column: 4, offset: 448 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
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
                  end: { line: 19, column: 106, offset: 555 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 19, column: 1, offset: 450 },
              end: { line: 19, column: 106, offset: 555 },
              indent: []
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
              end: { line: 29, column: 4, offset: 805 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 4, offset: 3 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 4, offset: 3 },
              indent: []
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
              end: { line: 3, column: 4, offset: 108 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 33, offset: 32 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 33, offset: 32 },
              indent: []
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
              end: { line: 13, column: 4, offset: 223 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 15, offset: 14 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 15, offset: 14 },
              indent: []
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
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
                  '  desc string,\n' +
                  '  loopCount number,\n' +
                  '  func (loop number)=>any\n' +
                  ') -> ()',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 5, column: 8, offset: 84 },
                  indent: [ 1, 1, 1, 1 ]
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 5, column: 8, offset: 84 },
              indent: [ 1, 1, 1, 1 ]
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
                      end: { line: 1, column: 17, offset: 16 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 19, offset: 18 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' is a memory usage measurement function. Supply ',
                position: {
                  start: { line: 1, column: 19, offset: 18 },
                  end: { line: 1, column: 67, offset: 66 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'description',
                position: {
                  start: { line: 1, column: 67, offset: 66 },
                  end: { line: 1, column: 80, offset: 79 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', ',
                position: {
                  start: { line: 1, column: 80, offset: 79 },
                  end: { line: 1, column: 82, offset: 81 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'loopCount',
                position: {
                  start: { line: 1, column: 82, offset: 81 },
                  end: { line: 1, column: 93, offset: 92 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ', and a function ',
                position: {
                  start: { line: 1, column: 93, offset: 92 },
                  end: { line: 1, column: 110, offset: 109 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'func',
                position: {
                  start: { line: 1, column: 110, offset: 109 },
                  end: { line: 1, column: 116, offset: 115 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' for that function to be run ',
                position: {
                  start: { line: 1, column: 116, offset: 115 },
                  end: { line: 1, column: 145, offset: 144 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'loopCount',
                position: {
                  start: { line: 1, column: 145, offset: 144 },
                  end: { line: 1, column: 156, offset: 155 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' times, finally logging average and max heap used per loop in terms of megabytes MiB.',
                position: {
                  start: { line: 1, column: 156, offset: 155 },
                  end: { line: 1, column: 241, offset: 240 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 241, offset: 240 },
              indent: []
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
              end: { line: 17, column: 4, offset: 470 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 3, column: 4, offset: 61 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 46, offset: 45 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 46, offset: 45 },
              indent: []
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
              end: { line: 9, column: 4, offset: 183 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 3, column: 4, offset: 94 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 49, offset: 48 },
                  indent: []
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
                      end: { line: 1, column: 63, offset: 62 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 49, offset: 48 },
                  end: { line: 1, column: 127, offset: 126 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 127, offset: 126 },
                  end: { line: 1, column: 128, offset: 127 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 128, offset: 127 },
              indent: []
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
              end: { line: 13, column: 4, offset: 334 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 12, offset: 11 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 12, offset: 11 },
              indent: []
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
              end: { line: 8, column: 4, offset: 195 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1
              ]
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
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
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
                      end: { line: 1, column: 41, offset: 40 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 27, offset: 26 },
                  end: { line: 1, column: 105, offset: 104 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' equality.',
                position: {
                  start: { line: 1, column: 105, offset: 104 },
                  end: { line: 1, column: 115, offset: 114 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 115, offset: 114 },
              indent: []
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
              end: { line: 13, column: 4, offset: 397 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 15, column: 198, offset: 596 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 15, column: 1, offset: 399 },
              end: { line: 15, column: 198, offset: 596 },
              indent: []
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
              end: { line: 25, column: 4, offset: 855 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 3, column: 4, offset: 62 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 27, offset: 26 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 27, offset: 26 },
              indent: []
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
              end: { line: 12, column: 4, offset: 434 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 11, offset: 10 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 11, offset: 10 },
              indent: []
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
              end: { line: 3, column: 4, offset: 65 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 },
              indent: []
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
              end: { line: 11, column: 4, offset: 218 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 3, column: 4, offset: 63 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 35, offset: 34 },
                  indent: []
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
                      end: { line: 1, column: 49, offset: 48 },
                      indent: []
                    }
                  }
                ],
                position: {
                  start: { line: 1, column: 35, offset: 34 },
                  end: { line: 1, column: 129, offset: 128 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' of ',
                position: {
                  start: { line: 1, column: 129, offset: 128 },
                  end: { line: 1, column: 133, offset: 132 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'Object',
                position: {
                  start: { line: 1, column: 133, offset: 132 },
                  end: { line: 1, column: 141, offset: 140 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: '.',
                position: {
                  start: { line: 1, column: 141, offset: 140 },
                  end: { line: 1, column: 142, offset: 141 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 142, offset: 141 },
              indent: []
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
              end: { line: 17, column: 4, offset: 401 },
              indent: [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                1, 1
              ]
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
                  end: { line: 1, column: 9, offset: 8 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 9, offset: 8 },
              indent: []
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
              end: { line: 3, column: 4, offset: 63 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
              end: { line: 9, column: 4, offset: 183 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 3, column: 4, offset: 100 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 39, offset: 38 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 39, offset: 38 },
              indent: []
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
              end: { line: 9, column: 4, offset: 319 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 5, column: 4, offset: 75 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 34, offset: 33 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 34, offset: 33 },
              indent: []
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
              end: { line: 8, column: 4, offset: 197 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 3, column: 4, offset: 52 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 21, offset: 20 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 21, offset: 20 },
              indent: []
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
              end: { line: 9, column: 4, offset: 153 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
      'Functor<T> = Array<T>|Object<T>|Iterator<T>|AsyncIterator<T>|{ map: T=>any }\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'var T any,\n' +
      '  mapper T=>Promise|any,\n' +
      '  functor Functor<T>\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  reducer Reducer<T>\n' +
      '\n' +
      'pluck(functor) -> Promise|Functor\n' +
      '\n' +
      'pluck(generatorFunction) -> ...args=>Generator\n' +
      '\n' +
      'pluck(asyncGeneratorFunction) -> ...args=>AsyncGenerator\n' +
      '\n' +
      'pluck(reducer) -> Reducer\n' +
      '```',
    description: 'Apply a getter denoted by path across all items of a collection, creating a new collection of plucked values. Also works in transducer position.\n' +
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
      "const usernames = pluck('name')(users)\n" +
      '\n' +
      "console.log(usernames) // ['George', 'Jane', 'Jim']\n" +
      '\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      "  'total age:',\n" +
      "  users.reduce(pluck('age')(add), 0),\n" +
      ') // total age: 96\n' +
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
            value: 'Functor<T> = Array<T>|Object<T>|Iterator<T>|AsyncIterator<T>|{ map: T=>any }\n' +
              'Reducer<T> = (any, T)=>Promise|any\n' +
              '\n' +
              'var T any,\n' +
              '  mapper T=>Promise|any,\n' +
              '  functor Functor<T>\n' +
              '  args ...any,\n' +
              '  generatorFunction ...args=>Generator<T>,\n' +
              '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
              '  reducer Reducer<T>\n' +
              '\n' +
              'pluck(functor) -> Promise|Functor\n' +
              '\n' +
              'pluck(generatorFunction) -> ...args=>Generator\n' +
              '\n' +
              'pluck(asyncGeneratorFunction) -> ...args=>AsyncGenerator\n' +
              '\n' +
              'pluck(reducer) -> Reducer',
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 20, column: 4, offset: 502 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 20, column: 4, offset: 502 }
        }
      },
      description: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Apply a getter denoted by path across all items of a collection, creating a new collection of plucked values. Also works in transducer position.',
                position: {
                  start: { line: 1, column: 1, offset: 0 },
                  end: { line: 1, column: 145, offset: 144 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 145, offset: 144 },
              indent: []
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
              "const usernames = pluck('name')(users)\n" +
              '\n' +
              "console.log(usernames) // ['George', 'Jane', 'Jim']\n" +
              '\n' +
              'const add = (a, b) => a + b\n' +
              '\n' +
              'console.log(\n' +
              "  'total age:',\n" +
              "  users.reduce(pluck('age')(add), 0),\n" +
              ') // total age: 96',
            position: {
              start: { line: 3, column: 1, offset: 146 },
              end: { line: 22, column: 4, offset: 556 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
            }
          }
        ],
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 22, column: 4, offset: 556 }
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
                  end: { line: 1, column: 8, offset: 7 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 8, offset: 7 },
              indent: []
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
              end: { line: 5, column: 4, offset: 100 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 30, offset: 29 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 30, offset: 29 },
              indent: []
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
              end: { line: 22, column: 4, offset: 464 },
              indent: [
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 3, column: 4, offset: 58 },
              indent: [ 1, 1 ]
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
                  end: { line: 1, column: 35, offset: 34 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 35, offset: 34 },
              indent: []
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
              end: { line: 9, column: 4, offset: 236 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
              end: { line: 9, column: 4, offset: 159 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 105, offset: 104 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 105, offset: 104 },
              indent: []
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
              end: { line: 12, column: 4, offset: 324 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 10, offset: 9 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 10, offset: 9 },
              indent: []
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
              end: { line: 7, column: 4, offset: 163 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 161, offset: 160 },
                  indent: []
                }
              },
              {
                type: 'inlineCode',
                value: 'true',
                position: {
                  start: { line: 1, column: 161, offset: 160 },
                  end: { line: 1, column: 167, offset: 166 },
                  indent: []
                }
              },
              {
                type: 'text',
                value: ' if two given values are distinct.',
                position: {
                  start: { line: 1, column: 167, offset: 166 },
                  end: { line: 1, column: 201, offset: 200 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 201, offset: 200 },
              indent: []
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
              end: { line: 13, column: 4, offset: 525 },
              indent: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 13, offset: 12 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 13, offset: 12 },
              indent: []
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 6, column: 4, offset: 82 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 45, offset: 44 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 45, offset: 44 },
              indent: []
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
              end: { line: 9, column: 4, offset: 189 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 6, column: 4, offset: 119 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 106, offset: 105 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 106, offset: 105 },
              indent: []
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
              end: { line: 11, column: 4, offset: 366 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
                  end: { line: 1, column: 7, offset: 6 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 7, offset: 6 },
              indent: []
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
              end: { line: 5, column: 4, offset: 115 },
              indent: [ 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 41, offset: 40 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 41, offset: 40 },
              indent: []
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
              end: { line: 9, column: 4, offset: 321 },
              indent: [ 1, 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 5, offset: 4 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 5, offset: 4 },
              indent: []
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
              end: { line: 6, column: 4, offset: 117 },
              indent: [ 1, 1, 1, 1, 1 ]
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
                  end: { line: 1, column: 104, offset: 103 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 104, offset: 103 },
              indent: []
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
              end: { line: 11, column: 4, offset: 361 },
              indent: [
                1, 1, 1, 1,
                1, 1, 1, 1
              ]
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
                  end: { line: 1, column: 6, offset: 5 },
                  indent: []
                }
              }
            ],
            position: {
              start: { line: 1, column: 1, offset: 0 },
              end: { line: 1, column: 6, offset: 5 },
              indent: []
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
