export default [
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
      '```\n',
    description: 'Creates a filtering iterator, i.e. an iterator that filteres a source iterator by predicate.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 233 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 93 }
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
      '```\n',
    description: 'Creates a mapping iterator, i.e. an iterator that applies a mapper to each item of a source iterator.\n' +
      '\n' +
      'Note: consuming the mapping iterator also consumes the source iterator.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 217 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 175 }
      }
    }
  },
  {
    name: 'NextIteration',
    synopsis: 'NextIteration(value any) -> nextIteration { value, done: false }\n',
    description: 'Create an object to send for the next iteration\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 65 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 48 }
      }
    }
  },
  {
    name: 'add',
    synopsis: 'add (a any, b any) -> a + b\n',
    description: '`+` two things\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 28 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 15 }
      }
    }
  },
  {
    name: 'always',
    synopsis: '```coffeescript [specscript]\nalways(value any) -> getter ()=>value\n```\n',
    description: 'Create a function that always returns a value.\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 71 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 47 }
      }
    }
  },
  {
    name: 'arrayExtend',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayExtend(array Array, values Array) -> array\n' +
      '```\n',
    description: 'Extend an array with values.\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 81 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 29 }
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
      '```\n',
    description: '`arrayExtend` while mapping\n',
    synopsis_mdast: {
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
        end: { line: 11, column: 1, offset: 187 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 28 }
      }
    }
  },
  {
    name: 'arrayExtendMapWithIndex',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayExtendMapWithIndex<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  values Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '  index number,\n' +
      '>(array, values, mapper, index) -> Promise|array\n' +
      '```\n',
    description: 'Extend an array with values from a mapping operation.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 194 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 54 }
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
      '```\n',
    description: 'Filter an array concurrently by predicate. `predicate` may be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 128 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 76 }
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
      '```\n',
    description: 'Filter an array by a boolean array of conditions\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 146 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 49 }
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
      '```\n',
    description: 'Filter an array concurrently by predicate.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 210 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 43 }
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
      '```\n',
    description: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.\n' +
      '\n' +
      'Note: iterator is consumed\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 116 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 127 }
      }
    }
  },
  {
    name: 'arrayJoin',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayJoin(array Array, delimiter string) -> string\n' +
      '```\n',
    description: 'Call `.join` on an array.\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 84 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 26 }
      }
    }
  },
  {
    name: 'arrayMap',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMap<\n' +
      '  T any,\n' +
      '  array Array<T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(array, mapper) -> Promise|Array\n' +
      '```\n',
    description: 'Apply a mapper to each item of an array, returning an array. Mapper may be asynchronous.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'arrayMap<\n' +
            '  T any,\n' +
            '  array Array<T>,\n' +
            '  mapper T=>Promise|any,\n' +
            '>(array, mapper) -> Promise|Array',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 7, column: 4, offset: 128 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 129 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 89 }
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
      '```\n',
    description: 'Apply a mapper with limited concurrency to each item of an array, returning a Promise of an array of results.\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 258 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 110 }
      }
    }
  },
  {
    name: '\narrayMapPool',
    synopsis: '```coffeescript [specscript]\n' +
      'arrayMapPool<\n' +
      '  T any,\n' +
      '  array Array<T>\n' +
      '  mapper T=>Promise|any,\n' +
      '  concurrentLimit number,\n' +
      '>(array, mapper, concurrentLimit) -> Promise|Array\n' +
      '```\n',
    description: 'Apply a mapper with limited concurrency to each item of an array, returning an array of results.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 175 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 97 }
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
      '```\n',
    description: 'Apply a mapper in series to each item of an array, returning a Promise of an array of results. `mapper` can be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 194 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 125 }
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
      '```\n',
    description: 'Apply a mapper in series to each item of an array, returning an array of results.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 150 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 82 }
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
      '```\n',
    description: 'Apply an indexed mapper to each item of an array, returning an array of results.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 193 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 81 }
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
      '```\n',
    description: 'Execute a reducer for each item of an array, returning a Promise of a single value.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 139 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 84 }
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
      '```\n',
    description: 'Make a function always return a promise.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 128 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 41 }
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
      '```\n',
    description: 'Filter an async generator function by predicate. Predicate may be asynchronous, in which case its evaluation is awaited.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 273 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 121 }
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
      '```\n',
    description: 'Create an async generator executor that executes a callback for each item of an async generator generated by an async generator function.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 217 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 138 }
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
      '```\n',
    description: 'Create a mapping async generator function from an async generator function and a mapper. A mapping async generator function produces async mapping generators that apply the mapper to each item of the original async generator.\n' +
      '\n' +
      '`mapper` may be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 244 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 257 }
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
      '```\n',
    description: 'Execute a callback function for each item of an async iterator\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 155 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 63 }
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
      '```\n',
    description: 'Convert an async iterator to an array.\n' +
      '\n' +
      'Note: async iterator is consumed\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 126 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 73 }
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
      '```\n',
    description: 'Extend a typed array with an array of values.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 127 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 46 }
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
      '```\n',
    description: 'Types branching for _binaryExtend\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 130 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 34 }
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
      '```\n',
    description: 'Call a property function on a value with two arguments.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 141 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 56 }
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
      '```\n',
    description: 'Call a property function on a value with a single argument.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 122 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 60 }
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
      '```\n',
    description: 'Apply an error and arguments to a catcher.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 157 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 43 }
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
      '```\n',
    description: 'Curry a binary function.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 134 }
      }
    },
    description_mdast: {
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
              value: 'Note: at least one argument must be the placeholder',
              position: {
                start: { line: 3, column: 1, offset: 26 },
                end: { line: 3, column: 52, offset: 77 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 26 },
            end: { line: 3, column: 52, offset: 77 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 78 }
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
      '```\n',
    description: 'Curry a 3-ary function.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder\n',
    synopsis_mdast: {
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
        end: { line: 11, column: 1, offset: 148 }
      }
    },
    description_mdast: {
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
              value: 'Note: at least one argument must be the placeholder',
              position: {
                start: { line: 3, column: 1, offset: 25 },
                end: { line: 3, column: 52, offset: 76 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 25 },
            end: { line: 3, column: 52, offset: 76 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 77 }
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
      '```\n',
    description: 'Curry a 4-ary function.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 164 }
      }
    },
    description_mdast: {
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
              value: 'Note: at least one argument must be the placeholder',
              position: {
                start: { line: 3, column: 1, offset: 25 },
                end: { line: 3, column: 52, offset: 76 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 25 },
            end: { line: 3, column: 52, offset: 76 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 4, column: 1, offset: 77 }
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
      '```\n',
    description: 'Curry arguments for a 3-ary function. Arguments are supplied in placeholder position as an array.\n' +
      '\n' +
      'Note: at least one argument must be the placeholder\n',
    synopsis_mdast: {
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
        end: { line: 11, column: 1, offset: 152 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 151 }
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
      '```\n',
    description: 'Apply arguments to a function.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 111 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 31 }
      }
    }
  },
  {
    name: 'funcConditional',
    synopsis: '```coffeescript [specscript]\n' +
      'funcConditional(\n' +
      '  funcs Array<args=>Promise|any>,\n' +
      '  args Array,\n' +
      '  funcsIndex number,\n' +
      ') -> Promise|any\n' +
      '```\n',
    description: 'Conditional operator `a ? b : c ? d : e ? ...` for functions.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'funcConditional(\n' +
            '  funcs Array<args=>Promise|any>,\n' +
            '  args Array,\n' +
            '  funcsIndex number,\n' +
            ') -> Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 7, column: 4, offset: 135 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 136 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 62 }
      }
    }
  },
  {
    name: 'funcObjectAll',
    synopsis: '```coffeescript [specscript]\n' +
      'funcObjectAll(\n' +
      '  funcs Object<args=>Promise|any>\n' +
      ')(args ...any) -> objectAllFuncs ...args=>Promise|Object\n' +
      '```\n',
    description: 'Concurrently execute the same arguments for each function of an object of functions, returning an object of results.\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 139 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 117 }
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
      '```\n',
    description: 'Filter a generator function by predicate.\n' +
      '\n' +
      'Note: async predicates may beget unexpected results\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 232 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 95 }
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
      '```\n',
    description: 'Create a generator executor that executes a callback for each item of a generator generated by a generator function. The executor may return a promise if any execution is asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 191 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 185 }
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
      '```\n',
    description: 'Create a mapping generator function from a generator function and a mapper. A mapping generator function produces mapping generators that apply the mapper to each item of the original generator.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 203 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 195 }
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
      '```\n',
    description: 'Execute a reducer for each item of a generator function, returning a single value.\n',
    synopsis_mdast: {
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
        end: { line: 11, column: 1, offset: 264 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 83 }
      }
    }
  },
  {
    name: 'genericTransformToNull',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer = (any, any)=>Promise|any\n' +
      '\n' +
      'genericTransformToNull<\n' +
      '  args Array,\n' +
      '  transducer Reducer=>Reducer,\n' +
      '  result undefined|null,\n' +
      '>(args, transducer, result) -> Promise|result\n' +
      '```\n',
    description: 'Reduce a value, always returning null or undefined.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Reducer = (any, any)=>Promise|any\n' +
            '\n' +
            'genericTransformToNull<\n' +
            '  args Array,\n' +
            '  transducer Reducer=>Reducer,\n' +
            '  result undefined|null,\n' +
            '>(args, transducer, result) -> Promise|result',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 207 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 208 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Reduce a value, always returning null or undefined.',
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
        end: { line: 2, column: 1, offset: 52 }
      }
    }
  },
  {
    name: 'globalThisHasBuffer',
    synopsis: 'globalThisHasBuffer boolean\n',
    description: 'Is there a global `Buffer`\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 28 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 27 }
      }
    }
  },
  {
    name: 'identity',
    synopsis: 'identity(value any) -> value\n',
    description: 'Returns the first argument\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 29 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 27 }
      }
    }
  },
  {
    name: 'isArray',
    synopsis: 'isArray(value any) -> boolean\n',
    description: 'Determine whether a value is an array.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 30 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 39 }
      }
    }
  },
  {
    name: 'isAsyncGeneratorFunction',
    synopsis: 'isAsyncGeneratorFunction(value any) -> boolean\n',
    description: 'Determine whether a value is an async generator function.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 47 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 58 }
      }
    }
  },
  {
    name: 'isBinary',
    synopsis: 'isBinary(value any) -> boolean\n',
    description: 'Determine whether a value is binary. This could be `true` for `TypedArray` or a Node.js `Buffer`.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 31 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 98 }
      }
    }
  },
  {
    name: 'isGeneratorFunction',
    synopsis: 'isGeneratorFunction(value any) -> boolean\n',
    description: 'Determine whether a value is a generator function.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 42 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 51 }
      }
    }
  },
  {
    name: 'isNodeReadStream',
    synopsis: 'isNodeReadStream(value any) -> boolean\n',
    description: 'Determine whether a value is a Node.js Readable Stream.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 39 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 56 }
      }
    }
  },
  {
    name: 'isPromise',
    synopsis: 'isPromise(value any) -> boolean\n',
    description: 'Determine whether a value is a promise.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 32 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 40 }
      }
    }
  },
  {
    name: 'iterationMap',
    synopsis: 'iterationMap<\n' +
      '  T any,\n' +
      '  iteration { value: T, done: boolean },\n' +
      '  mapper T=>any,\n' +
      '>(iteration, mapper) -> nextIteration { value: any, done: boolean }\n',
    description: 'Apply a mapper to an iteration. Noop if iteration is done.\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 149 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 59 }
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
      '```\n',
    description: 'Call a callback for each item of an iterator. Return a promise if any executions are asynchronous.\n' +
      '\n' +
      'Note: iterator is consumed\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 128 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 127 }
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
      '```\n',
    description: 'Execute a reducer for each item of an iterator or async iterator, returning a promise of a single value.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 174 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 105 }
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
      '```\n',
    description: 'Execute a reducer for each item of an iterator, returning a single value.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 174 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 74 }
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
      '```\n',
    description: 'Filter the values of a Map concurrently by predicate. `predicate` may be asynchronous.\n' +
      '\n' +
      'Note: for asynchronous predicates, the order of the resulting Map is not guaranteed\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 163 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 172 }
      }
    }
  },
  {
    name: 'mapMap',
    synopsis: '```coffeescript [specscript]\n' +
      'mapMap<\n' +
      '  T any,\n' +
      '  value Map<any=>T>,\n' +
      '  mapper T=>Promise|any,\n' +
      '>(value, mapper) -> Promise|Map<any=>any>\n' +
      '```\n',
    description: 'Apply a mapper concurrently to each value (not entry) of a Map, returning a Map of results. `mapper` may be asynchronous.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'mapMap<\n' +
            '  T any,\n' +
            '  value Map<any=>T>,\n' +
            '  mapper T=>Promise|any,\n' +
            '>(value, mapper) -> Promise|Map<any=>any>',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 7, column: 4, offset: 137 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 138 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 122 }
      }
    }
  },
  {
    name: 'memoizeCappedUnary',
    synopsis: '```coffeescript [specscript]\n' +
      'memoizeCappedUnary(func function, cap number) -> memoized function\n' +
      '```\n',
    description: 'Memoize a function. Clear cache when size reaches cap.\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 100 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 55 }
      }
    }
  },
  {
    name: 'noop',
    synopsis: 'noop() -> ()\n',
    description: 'Takes nothing, returns `undefined`\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 13 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 35 }
      }
    }
  },
  {
    name: 'objectAssign',
    synopsis: '```coffeescript [specscript]\n' +
      'objectAssign<\n' +
      '  targetObject Object, sourceObjects ...Object,\n' +
      '>(targetObject, ...sourceObjects) -> merged Object\n' +
      '```\n',
    description: 'Dereferenced `Object.assign`\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 146 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 29 }
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
      '```\n',
    description: 'Apply a flatMapper to each value of an object, assigning all items of all results into a new object.\n',
    synopsis_mdast: {
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
        end: { line: 15, column: 1, offset: 467 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 101 }
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
      '```\n',
    description: 'Execute a callback for each value of an object. Return a promise if any executions are asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 120 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 101 }
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
      '```\n',
    description: 'Apply a mapper concurrently to each value of an object, returning an object of results. Mapper may be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 134 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 116 }
      }
    }
  },
  {
    name: 'objectToString',
    synopsis: 'objectToString(value any) -> string\n',
    description: 'Get the tag of an object\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 36 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 25 }
      }
    }
  },
  {
    name: 'objectValues',
    synopsis: 'objectValues<T>(object Object<T>) -> Array<T>\n',
    description: 'Dereferenced `Object.values`\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 46 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 29 }
      }
    }
  },
  {
    name: 'promiseAll',
    synopsis: 'promiseAll(Iterable<Promise|any>) -> Promise<Array>\n',
    description: 'Dereferenced Promise.all\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 52 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 25 }
      }
    }
  },
  {
    name: 'promiseObjectAll',
    synopsis: '```coffeescript [specscript]\n' +
      'promiseObjectAll(object<Promise|any>) -> Promise<object>\n' +
      '```\n',
    description: 'Like `Promise.all` but for objects.\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 90 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 36 }
      }
    }
  },
  {
    name: 'promiseRace',
    synopsis: 'promiseRace(Iterable<Promise|any>) -> firstResolvedOrRejected Promise\n',
    description: 'Dereferenced Promise.race\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 70 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 26 }
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
      '```\n',
    description: "Filter items from a reducer's operation by predicate. `predicate` may be asynchronous.\n" +
      '\n' +
      'Note: If the predicate is asynchronous, the implementation of reduce that consumes the filtering reducer must resolve promises\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 188 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 215 }
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
      '```\n',
    description: 'Create a flattening reducer - a reducer that flattens all items of a reducing operation into the result.\n',
    synopsis_mdast: {
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
        end: { line: 13, column: 1, offset: 428 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 105 }
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
      '```\n',
    description: 'Create a reducer that additionally executes a callback for each item of its reducing operation.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 147 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 96 }
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
      '```\n',
    description: "Apply a mapper to elements of a reducer's operation. `mapper` may be asynchronous\n" +
      '\n' +
      'Note: If the mapper is asynchronous, the implementation of reduce that consumes the mapping reducer must resolve promises\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 173 }
      }
    },
    description_mdast: {
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
        end: { line: 4, column: 1, offset: 205 }
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
      '```\n',
    description: 'Filter items of a Set concurrently by predicate. `predicate` may be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 125 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 82 }
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
      '```\n',
    description: 'Apply a mapper concurrently to each item of a set, returning a set of results.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 123 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 79 }
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
      '```\n',
    description: 'Call `.write` on a Node.js stream\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 175 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 34 }
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
      '```\n',
    description: "Filter a string's characters by predicate.\n",
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 181 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 43 }
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
      '```\n',
    description: 'Apply a mapper concurrently to each character of a string, returning a string result. `mapper` may be asynchronous.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 181 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 116 }
      }
    }
  },
  {
    name: 'symbolAsyncIterator',
    synopsis: 'symbolAsyncIterator = Symbol.asyncIterator\n',
    description: 'Dereferenced `Symbol.asyncIterator`\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 43 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 36 }
      }
    }
  },
  {
    name: 'symbolIterator',
    synopsis: 'symbolIterator = Symbol.iterator\n',
    description: 'Dereferenced `Symbol.iterator`\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 33 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 31 }
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
      '```\n',
    description: 'Call a function with arguments, returning the first argument. Promises are not handled.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 106 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 88 }
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
      '```\n',
    description: 'Like the conditional operator `a ? b : c` but for thunks.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 194 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 58 }
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
      '```\n',
    description: 'Create a thunk from a function and one argument.\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 112 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 49 }
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
      '```\n',
    description: 'Create a thunk from a function and two arguments.\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 144 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 50 }
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
      '```\n',
    description: 'Create a thunk from a function and three arguments.\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 174 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 52 }
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
      '```\n',
    description: 'Create a thunk from a function and four arguments.\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 204 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 51 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 264 }
      }
    },
    description_mdast: {
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
        end: { line: 24, column: 1, offset: 527 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 134 }
      }
    },
    description_mdast: {
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
        end: { line: 14, column: 1, offset: 323 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 264 }
      }
    },
    description_mdast: {
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
        end: { line: 33, column: 1, offset: 707 }
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
      '```\n',
    description: 'Compose an object from a source object merged with the evaluations of a specifying object of functions. Functions of the specifying object may return Promises.\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 165 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Compose an object from a source object merged with the evaluations of a specifying object of functions. Functions of the specifying object may return Promises.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 160, offset: 159 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 160, offset: 159 },
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
            start: { line: 3, column: 1, offset: 161 },
            end: { line: 14, column: 4, offset: 484 },
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
        end: { line: 15, column: 1, offset: 485 }
      }
    }
  },
  {
    name: 'eq',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  leftCompare any,\n' +
      '  rightCompare any,\n' +
      '  left (value=>Promise|leftCompare)|leftCompare,\n' +
      '  right (value=>Promise|rightCompare)|rightCompare\n' +
      '\n' +
      'eq(left, right)(value) -> Promise|boolean\n' +
      '```\n',
    description: 'Test for strict equality (`===`) between the returns of two functions. Either parameter may be an actual value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const personIsGeorge = eq(person => person.name, 'George')\n" +
      '\n' +
      'console.log(\n' +
      "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var value any,\n' +
            '  leftCompare any,\n' +
            '  rightCompare any,\n' +
            '  left (value=>Promise|leftCompare)|leftCompare,\n' +
            '  right (value=>Promise|rightCompare)|rightCompare\n' +
            '\n' +
            'eq(left, right)(value) -> Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 229 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 230 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Test for strict equality (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 27, offset: 26 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '===',
              position: {
                start: { line: 1, column: 27, offset: 26 },
                end: { line: 1, column: 32, offset: 31 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ') between the returns of two functions. Either parameter may be an actual value.',
              position: {
                start: { line: 1, column: 32, offset: 31 },
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
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: "const personIsGeorge = eq(person => person.name, 'George')\n" +
            '\n' +
            'console.log(\n' +
            "  personIsGeorge({ name: 'George', likes: 'bananas' }),\n" +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 113 },
            end: { line: 9, column: 4, offset: 282 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 283 }
      }
    }
  },
  {
    name: 'filter',
    synopsis: '```coffeescript [specscript]\n' +
      'Filterable<T> = Array<T>|Object<T>|Set<T>|Map<T>\n' +
      '  |Iterator<T>|AsyncIterator<T>|{ filter: (T=>boolean)=>any }\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      '\n' +
      'var T any,\n' +
      '  predicate T=>Promise|boolean,\n' +
      '  filterable Filterable<T>,\n' +
      '  args ...any,\n' +
      '  generatorFunction ...args=>Generator<Promise|T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  reducer Reducer<T>\n' +
      '\n' +
      'filter(predicate)(filterable) -> Promise|Filterable<T>\n' +
      '\n' +
      'filter(predicate)(generatorFunction) -> ...args=>Generator<T>\n' +
      '\n' +
      'filter(predicate)(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
      '\n' +
      'filter(predicate)(reducer) -> Reducer<T>\n' +
      '```\n',
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
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Filterable<T> = Array<T>|Object<T>|Set<T>|Map<T>\n' +
            '  |Iterator<T>|AsyncIterator<T>|{ filter: (T=>boolean)=>any }\n' +
            'Reducer<T> = (any, T)=>Promise|any\n' +
            '\n' +
            'var T any,\n' +
            '  predicate T=>Promise|boolean,\n' +
            '  filterable Filterable<T>,\n' +
            '  args ...any,\n' +
            '  generatorFunction ...args=>Generator<Promise|T>,\n' +
            '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
            '  reducer Reducer<T>\n' +
            '\n' +
            'filter(predicate)(filterable) -> Promise|Filterable<T>\n' +
            '\n' +
            'filter(predicate)(generatorFunction) -> ...args=>Generator<T>\n' +
            '\n' +
            'filter(predicate)(asyncGeneratorFunction) -> ...args=>AsyncGenerator<T>\n' +
            '\n' +
            'filter(predicate)(reducer) -> Reducer<T>',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 21, column: 4, offset: 624 },
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
        end: { line: 22, column: 1, offset: 625 }
      }
    },
    description_mdast: {
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
        end: { line: 91, column: 1, offset: 3147 }
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
      '```\n',
    description: '`filter` with each predicate call supplemented by index and reference to original collection.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const uniq = filter.withIndex(\n' +
      '  (item, index, array) => item !== array[index + 1])\n' +
      '\n' +
      'console.log(\n' +
      '  uniq([1, 1, 1, 2, 2, 2, 3, 3, 3]),\n' +
      ') // [1, 2, 3]\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 187 }
      }
    },
    description_mdast: {
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
        end: { line: 11, column: 1, offset: 276 }
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
      '```\n',
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
      'In the case above, each item of the array of numbers returned by `powers` is called with the reducer `arrayConcat` for flattening into the final result.\n',
    synopsis_mdast: {
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
        end: { line: 25, column: 1, offset: 787 }
      }
    },
    description_mdast: {
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
        end: { line: 121, column: 1, offset: 4546 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 251 }
      }
    },
    description_mdast: {
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
        end: { line: 34, column: 1, offset: 730 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 147 }
      }
    },
    description_mdast: {
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
        end: { line: 16, column: 1, offset: 408 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 170 }
      }
    },
    description_mdast: {
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
        end: { line: 48, column: 1, offset: 1014 }
      }
    }
  },
  {
    name: 'gt',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  leftCompare any,\n' +
      '  rightCompare any,\n' +
      '  left (value=>Promise|leftCompare)|leftCompare,\n' +
      '  right (value=>Promise|rightCompare)|rightCompare\n' +
      '\n' +
      'gt(left, right)(value) -> Promise|boolean\n' +
      '```\n',
    description: 'Test if a left value is greater than (`>`) a right value. Either parameter may be an actual value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOfLegalAge = gt(21, person => person.age)\n' +
      '\n' +
      'const juvenile = { age: 16 }\n' +
      '\n' +
      'console.log(isOfLegalAge(juvenile)) // false\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var value any,\n' +
            '  leftCompare any,\n' +
            '  rightCompare any,\n' +
            '  left (value=>Promise|leftCompare)|leftCompare,\n' +
            '  right (value=>Promise|rightCompare)|rightCompare\n' +
            '\n' +
            'gt(left, right)(value) -> Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 229 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 230 }
      }
    },
    description_mdast: {
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
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOfLegalAge = gt(21, person => person.age)\n' +
            '\n' +
            'const juvenile = { age: 16 }\n' +
            '\n' +
            'console.log(isOfLegalAge(juvenile)) // false',
          position: {
            start: { line: 3, column: 1, offset: 100 },
            end: { line: 9, column: 4, offset: 256 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 257 }
      }
    }
  },
  {
    name: 'gte',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  leftCompare any,\n' +
      '  rightCompare any,\n' +
      '  left (value=>Promise|leftCompare)|leftCompare,\n' +
      '  right (value=>Promise|rightCompare)|rightCompare\n' +
      '\n' +
      'gte(left, right)(value) -> Promise|boolean\n' +
      '```\n',
    description: 'Test if a left value is greater than or equal (`>=`) to a right value. Either parameter may be an actual value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isAtLeast100 = gte(identity, 100)\n' +
      '\n' +
      'console.log(isAtLeast100(99)) // false\n' +
      'console.log(isAtLeast100(100)) // true\n' +
      'console.log(isAtLeast100(101)) // true\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var value any,\n' +
            '  leftCompare any,\n' +
            '  rightCompare any,\n' +
            '  left (value=>Promise|leftCompare)|leftCompare,\n' +
            '  right (value=>Promise|rightCompare)|rightCompare\n' +
            '\n' +
            'gte(left, right)(value) -> Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 230 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 231 }
      }
    },
    description_mdast: {
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
            start: { line: 3, column: 1, offset: 113 },
            end: { line: 11, column: 4, offset: 334 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 335 }
      }
    }
  },
  {
    name: 'lt',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  leftCompare any,\n' +
      '  rightCompare any,\n' +
      '  left (value=>Promise|leftCompare)|leftCompare,\n' +
      '  right (value=>Promise|rightCompare)|rightCompare\n' +
      '\n' +
      'lt(left, right)(value) -> Promise|boolean\n' +
      '```\n',
    description: 'Test if a left value is less than (`<`) a right value. Either parameter may be an actual value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThan3 = lt(identity, 3)\n' +
      '\n' +
      'console.log(isLessThan3(1), true)\n' +
      'console.log(isLessThan3(3), false)\n' +
      'console.log(isLessThan3(5), false)\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var value any,\n' +
            '  leftCompare any,\n' +
            '  rightCompare any,\n' +
            '  left (value=>Promise|leftCompare)|leftCompare,\n' +
            '  right (value=>Promise|rightCompare)|rightCompare\n' +
            '\n' +
            'lt(left, right)(value) -> Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 229 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 230 }
      }
    },
    description_mdast: {
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
            start: { line: 3, column: 1, offset: 97 },
            end: { line: 11, column: 4, offset: 301 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 302 }
      }
    }
  },
  {
    name: 'lte',
    synopsis: '```coffeescript [specscript]\n' +
      'var value any,\n' +
      '  leftCompare any,\n' +
      '  rightCompare any,\n' +
      '  left (value=>Promise|leftCompare)|leftCompare,\n' +
      '  right (value=>Promise|rightCompare)|rightCompare\n' +
      '\n' +
      'lte(left, right)(value) -> Promise|boolean\n' +
      '```\n',
    description: 'Test if a left value is less than or equal (`<=`) to a right value. Either parameter may be an actual value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const identity = value => value\n' +
      '\n' +
      'const isLessThanOrEqualTo3 = lte(identity, 3)\n' +
      '\n' +
      'console.log(isLessThanOrEqualTo3(1), true)\n' +
      'console.log(isLessThanOrEqualTo3(3), true)\n' +
      'console.log(isLessThanOrEqualTo3(5), false)\n' +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var value any,\n' +
            '  leftCompare any,\n' +
            '  rightCompare any,\n' +
            '  left (value=>Promise|leftCompare)|leftCompare,\n' +
            '  right (value=>Promise|rightCompare)|rightCompare\n' +
            '\n' +
            'lte(left, right)(value) -> Promise|boolean',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 9, column: 4, offset: 230 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 231 }
      }
    },
    description_mdast: {
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
            start: { line: 3, column: 1, offset: 110 },
            end: { line: 11, column: 4, offset: 350 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 351 }
      }
    }
  },
  {
    name: 'map',
    synopsis: '```coffeescript [specscript]\n' +
      'Functor<T> = Array<T>|Object<T>|Set<T>|Map<T>\n' +
      '  |Iterator<T>|AsyncIterator<T>|{ map: (T=>any)=>any }\n' +
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
      'map(mapper)(functor) -> Promise|Functor\n' +
      '\n' +
      'map(mapper)(generatorFunction) -> ...args=>Generator\n' +
      '\n' +
      'map(mapper)(asyncGeneratorFunction) -> ...args=>AsyncGenerator\n' +
      '\n' +
      'map(mapper)(reducer) -> Reducer\n' +
      '```\n',
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
      ' * Generator Functions `function* () {}` - `map(mapper)(generatorFunction)` creates a generator function that generates generators of mapped values. Async mappers are yielded synchronously and may lead to unexpected results here.\n' +
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
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Functor<T> = Array<T>|Object<T>|Set<T>|Map<T>\n' +
            '  |Iterator<T>|AsyncIterator<T>|{ map: (T=>any)=>any }\n' +
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
            'map(mapper)(functor) -> Promise|Functor\n' +
            '\n' +
            'map(mapper)(generatorFunction) -> ...args=>Generator\n' +
            '\n' +
            'map(mapper)(asyncGeneratorFunction) -> ...args=>AsyncGenerator\n' +
            '\n' +
            'map(mapper)(reducer) -> Reducer',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 21, column: 4, offset: 550 },
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
        end: { line: 22, column: 1, offset: 551 }
      }
    },
    description_mdast: {
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
                      value: ' creates a generator function that generates generators of mapped values. Async mappers are yielded synchronously and may lead to unexpected results here.',
                      position: {
                        start: { line: 29, column: 76, offset: 1446 },
                        end: { line: 29, column: 230, offset: 1600 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 29, column: 4, offset: 1374 },
                    end: { line: 29, column: 230, offset: 1600 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 29, column: 1, offset: 1371 },
                end: { line: 29, column: 230, offset: 1600 },
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
                        start: { line: 30, column: 4, offset: 1604 },
                        end: { line: 30, column: 30, offset: 1630 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'async function* () {}',
                      position: {
                        start: { line: 30, column: 30, offset: 1630 },
                        end: { line: 30, column: 53, offset: 1653 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - ',
                      position: {
                        start: { line: 30, column: 53, offset: 1653 },
                        end: { line: 30, column: 56, offset: 1656 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'map(mapper)(asyncGeneratorFunction)',
                      position: {
                        start: { line: 30, column: 56, offset: 1656 },
                        end: { line: 30, column: 93, offset: 1693 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' creates an async generator function that generates async generators of mapped values. Promises produced by async mappers are resolved.',
                      position: {
                        start: { line: 30, column: 93, offset: 1693 },
                        end: { line: 30, column: 228, offset: 1828 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 30, column: 4, offset: 1604 },
                    end: { line: 30, column: 228, offset: 1828 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 30, column: 1, offset: 1601 },
                end: { line: 30, column: 228, offset: 1828 },
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
                        start: { line: 31, column: 4, offset: 1832 },
                        end: { line: 31, column: 13, offset: 1841 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: '(accumulator, item)=>accumulator',
                      position: {
                        start: { line: 31, column: 13, offset: 1841 },
                        end: { line: 31, column: 47, offset: 1875 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: ' - ',
                      position: {
                        start: { line: 31, column: 47, offset: 1875 },
                        end: { line: 31, column: 50, offset: 1878 },
                        indent: []
                      }
                    },
                    {
                      type: 'inlineCode',
                      value: 'map(mapper)(reducer)',
                      position: {
                        start: { line: 31, column: 50, offset: 1878 },
                        end: { line: 31, column: 72, offset: 1900 },
                        indent: []
                      }
                    },
                    {
                      type: 'text',
                      value: " creates a transducer that, when called with another reducer, creates a mapping step for each item of the reducer's reducing operation. Promises produced by async mappers are resolved.",
                      position: {
                        start: { line: 31, column: 72, offset: 1900 },
                        end: { line: 31, column: 256, offset: 2084 },
                        indent: []
                      }
                    }
                  ],
                  position: {
                    start: { line: 31, column: 4, offset: 1832 },
                    end: { line: 31, column: 256, offset: 2084 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 31, column: 1, offset: 1829 },
                end: { line: 31, column: 256, offset: 2084 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 29, column: 1, offset: 1371 },
            end: { line: 31, column: 256, offset: 2084 },
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
                start: { line: 33, column: 1, offset: 2086 },
                end: { line: 33, column: 88, offset: 2173 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 2086 },
            end: { line: 33, column: 88, offset: 2173 },
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
            start: { line: 35, column: 1, offset: 2175 },
            end: { line: 51, column: 4, offset: 2491 },
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
                start: { line: 53, column: 1, offset: 2493 },
                end: { line: 53, column: 42, offset: 2534 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 53, column: 42, offset: 2534 },
                end: { line: 53, column: 47, offset: 2539 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' with a reducer. A reducer is a variadic function that depicts a relationship between an accumulator and any number of arguments. A transducer is a function that accepts a reducer as an argument and returns another reducer.',
              position: {
                start: { line: 53, column: 47, offset: 2539 },
                end: { line: 53, column: 270, offset: 2762 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 53, column: 1, offset: 2493 },
            end: { line: 53, column: 270, offset: 2762 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Reducer<T> = (any, T)=>Promise|any\n\nTransducer = Reducer=>Reducer',
          position: {
            start: { line: 55, column: 1, offset: 2764 },
            end: { line: 59, column: 4, offset: 2862 },
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
                start: { line: 61, column: 1, offset: 2864 },
                end: { line: 61, column: 71, offset: 2934 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 61, column: 71, offset: 2934 },
                end: { line: 61, column: 76, offset: 2939 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' is core to this mechanism, and provides a way via transducers to transform items of reducers. To ',
              position: {
                start: { line: 61, column: 76, offset: 2939 },
                end: { line: 61, column: 174, offset: 3037 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'map',
              position: {
                start: { line: 61, column: 174, offset: 3037 },
                end: { line: 61, column: 179, offset: 3042 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', reducers are just another category.',
              position: {
                start: { line: 61, column: 179, offset: 3042 },
                end: { line: 61, column: 216, offset: 3079 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 61, column: 1, offset: 2864 },
            end: { line: 61, column: 216, offset: 3079 },
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
            start: { line: 63, column: 1, offset: 3081 },
            end: { line: 88, column: 4, offset: 3828 },
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
        end: { line: 89, column: 1, offset: 3829 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 130 }
      }
    },
    description_mdast: {
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
        end: { line: 14, column: 1, offset: 264 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 169 }
      }
    },
    description_mdast: {
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
        end: { line: 14, column: 1, offset: 258 }
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
      '```\n',
    description: '`map` with an indexed mapper.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const range = length => map.withIndex(\n' +
      '  (_, index) => index + 1)(Array(length))\n' +
      '\n' +
      'console.log(range(5)) // [1, 2, 3, 4, 5]\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 179 }
      }
    },
    description_mdast: {
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
        end: { line: 9, column: 1, offset: 185 }
      }
    }
  },
  {
    name: 'BrokenPromise',
    synopsis: 'new BrokenPromise() -> BrokenPromise {}\n',
    description: 'A **BrokenPromise** is a Promise that never resolves or rejects, taking an infinite amount of time to get back to the caller.\n' +
      '\n' +
      '```javascript\n' +
      'new BrokenPromise() // a new BrokenPromise instance\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 40 }
      }
    },
    description_mdast: {
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
        end: { line: 6, column: 1, offset: 197 }
      }
    }
  },
  {
    name: 'BrokenPromise.prototype.then',
    synopsis: 'new BrokenPromise().then(unreachableResolver function)\n',
    description: '**BrokenPromise.prototype.then** registers a Promise `.then` resolver function with the internal infinite promise. In that sense, the resolver function _technically_ never gets called. However, it is possible to manually fire the provided `unreachableResolver` with `BrokenPromise.prototype.resolve`.\n' +
      '\n' +
      '```javascript\n' +
      "new BrokenPromise().then(() => console.log('unreachable'))\n" +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 55 }
      }
    },
    description_mdast: {
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
        end: { line: 6, column: 1, offset: 379 }
      }
    }
  },
  {
    name: 'Cancellable',
    synopsis: 'Promise { cancel: any=>() } -> CancellablePromise\n' +
      '\n' +
      'Cancellable(\n' +
      '  func ...any=>Promise|any,\n' +
      ') -> cancellablePromiseFactory ...any=>CancellablePromise|any\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 154 }
      }
    },
    description_mdast: {
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
        end: { line: 13, column: 1, offset: 466 }
      }
    }
  },
  {
    name: 'Mux.isSequence',
    synopsis: 'Mux.isSequence(x any) -> boolean\n',
    description: 'Mux.isSequence takes anything and returns a Boolean value. Mux.isSequence returns true if the value is an Iterable, GeneratorFunction, AsyncIterable, or AsyncGeneratorFunction.\n',
    synopsis_mdast: {
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
        end: { line: 2, column: 1, offset: 33 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 177 }
      }
    }
  },
  {
    name: '\nMux.zip',
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
      ') -> AsyncIterator<Array<T|undefined>>\n',
    description: 'Mux.zip takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields an Array of items of each supplied Sequence for a given iteration. If any Sequence supplied to Mux.zip is AsyncIterable or an AsyncGeneratorFunction, Mux.zip outputs an AsyncIterator. The Iterator or AsyncIterator will iterate as long as the longest iterator of the supplied Sequences; shorter iterators will yield undefined until the longest iterator is consumed.\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 313 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 484 }
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
      ') -> AsyncIterator<T>\n',
    description: 'Mux.concat takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the second item of the first Sequence, and so on until all Sequences have been iterated in order. Non-Sequence Items in the top-level Sequence are yielded as they are.\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 285 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 392 }
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
      ') -> AsyncIterator<T>\n',
    description: 'Mux.switch takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items is the first item of the first Sequence, the next is the first item of the second Sequence, and so on until all Sequences have yielded their first item. Then, the first Sequence yields its second item, the second Sequence yields its second item, and so on until all Sequences have finished iterating. Non-Sequence Items in the top-level Sequence are yielded as they are. When a shorter Sequence finishes iterating, the remaining Sequences will switch yielding amongst themselves.\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 285 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 651 }
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
      ') -> AsyncIterator<T>\n',
    description: 'Mux.race takes a Sequence of items or Sequences of items and outputs either an Iterator or an AsyncIterator that yields each item individually. The first of these items are the synchronous items of the top level Sequence, followed by the asynchronous items of any asynchronous sub Sequences. If any sub Sequences are asynchronous, the order of these asynchronous items in the final returned AsyncIterator is determined by the serial asynchronous resolution of the individual asynchronous sub Sequences. If all Sequences are synchronous, Mux.race behaves just as Mux.concat.\n',
    synopsis_mdast: {
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
        end: { line: 12, column: 1, offset: 279 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 574 }
      }
    }
  },
  {
    name: 'Mux.flatten',
    synopsis: '<T any>Mux.flatten(x Array<Iterable<T>|T>) -> Array<T>\n' +
      '\n' +
      '<T any>Mux.flatten(x Set<Iterable<T>|T>) -> Set<T>\n' +
      '\n' +
      '<T !Array|!Set>Mux.flatten(x T) -> Mux.concat(x)\n',
    description: 'Mux.flatten behaves just as Mux.concat except for cases when passed an Array or Set. When passed an Array, Mux.flatten outputs another Array with all elements of the input Array concatenated. When passed a Set, Mux.flatten outputs another Set in the same regard.\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 8, offset: 7 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.flatten(x Array<Iterable',
              position: {
                start: { line: 1, column: 8, offset: 7 },
                end: { line: 1, column: 36, offset: 35 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 36, offset: 35 },
                end: { line: 1, column: 39, offset: 38 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>) -> Array',
              position: {
                start: { line: 1, column: 39, offset: 38 },
                end: { line: 1, column: 52, offset: 51 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 1, column: 52, offset: 51 },
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
              type: 'html',
              value: '<T any>',
              position: {
                start: { line: 3, column: 1, offset: 56 },
                end: { line: 3, column: 8, offset: 63 },
                indent: []
              }
            },
            {
              type: 'text',
              value: 'Mux.flatten(x Set<Iterable',
              position: {
                start: { line: 3, column: 8, offset: 63 },
                end: { line: 3, column: 34, offset: 89 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 3, column: 34, offset: 89 },
                end: { line: 3, column: 37, offset: 92 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '|T>) -> Set',
              position: {
                start: { line: 3, column: 37, offset: 92 },
                end: { line: 3, column: 48, offset: 103 },
                indent: []
              }
            },
            {
              type: 'html',
              value: '<T>',
              position: {
                start: { line: 3, column: 48, offset: 103 },
                end: { line: 3, column: 51, offset: 106 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 56 },
            end: { line: 3, column: 51, offset: 106 },
            indent: []
          }
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: '<T !Array|!Set>Mux.flatten(x T) -> Mux.concat(x)',
              position: {
                start: { line: 5, column: 1, offset: 108 },
                end: { line: 5, column: 49, offset: 156 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 5, column: 1, offset: 108 },
            end: { line: 5, column: 49, offset: 156 },
            indent: []
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 6, column: 1, offset: 157 }
      }
    },
    description_mdast: {
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
        end: { line: 2, column: 1, offset: 263 }
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
      '```\n',
    description: 'Negate a predicate (`!`)\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  not(isOdd)(3),\n' +
      ') // false\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 123 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Negate a predicate (',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 21, offset: 20 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: '!',
              position: {
                start: { line: 1, column: 21, offset: 20 },
                end: { line: 1, column: 24, offset: 23 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ')',
              position: {
                start: { line: 1, column: 24, offset: 23 },
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
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const isOdd = number => number % 2 == 1\n' +
            '\n' +
            'console.log(\n' +
            '  not(isOdd)(3),\n' +
            ') // false',
          position: {
            start: { line: 3, column: 1, offset: 26 },
            end: { line: 9, column: 4, offset: 138 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 139 }
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
      '```\n',
    description: '`not` without promise handling.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const isOdd = number => number % 2 == 1\n' +
      '\n' +
      'console.log(\n' +
      '  not.sync(isOdd)(2),\n' +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 128 }
      }
    },
    description_mdast: {
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
        end: { line: 10, column: 1, offset: 150 }
      }
    }
  },
  {
    name: 'omit',
    synopsis: '```coffeescript [specscript]\n' +
      'var keys Array<string>,\n' +
      '  source Object\n' +
      '\n' +
      'omit(keys)(source) -> omitted Object\n' +
      '```\n',
    description: 'Create a new object by excluding specific keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
      ") // { name: 'George' }\n" +
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'var keys Array<string>,\n' +
            '  source Object\n' +
            '\n' +
            'omit(keys)(source) -> omitted Object',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 6, column: 4, offset: 110 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 7, column: 1, offset: 111 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Create a new object by excluding specific keys.',
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
            "  omit(['_id'])({ _id: '1', name: 'George' }),\n" +
            ") // { name: 'George' }",
          position: {
            start: { line: 3, column: 1, offset: 49 },
            end: { line: 7, column: 4, offset: 163 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 164 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 133 }
      }
    },
    description_mdast: {
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
        end: { line: 12, column: 1, offset: 272 }
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
      '```\n',
    description: 'Create a new object by including specific keys.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'console.log(\n' +
      "  pick(['hello', 'world'])({ goodbye: 1, world: 2 }),\n" +
      ') // { world: 2 }\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 110 }
      }
    },
    description_mdast: {
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
            ') // { world: 2 }',
          position: {
            start: { line: 3, column: 1, offset: 49 },
            end: { line: 7, column: 4, offset: 164 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 165 }
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
      '```\n',
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
      'When passed a reducer in argument position, a function pipeline composes the reducer such that the transducers are applied in series, calling the reducer as the last step to end the chain. The resulting reducer has chained transducing functionality; note however that it must be used in conjunction with `transform` or `reduce` to have a transducing effect. For more information on this behavior, see [this resource on transducers](https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md).\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 16, column: 1, offset: 292 }
      }
    },
    description_mdast: {
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
              value: 'When passed a reducer in argument position, a function pipeline composes the reducer such that the transducers are applied in series, calling the reducer as the last step to end the chain. The resulting reducer has chained transducing functionality; note however that it must be used in conjunction with ',
              position: {
                start: { line: 13, column: 1, offset: 370 },
                end: { line: 13, column: 305, offset: 674 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'transform',
              position: {
                start: { line: 13, column: 305, offset: 674 },
                end: { line: 13, column: 316, offset: 685 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' or ',
              position: {
                start: { line: 13, column: 316, offset: 685 },
                end: { line: 13, column: 320, offset: 689 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 13, column: 320, offset: 689 },
                end: { line: 13, column: 328, offset: 697 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' to have a transducing effect. For more information on this behavior, see ',
              position: {
                start: { line: 13, column: 328, offset: 697 },
                end: { line: 13, column: 402, offset: 771 },
                indent: []
              }
            },
            {
              type: 'link',
              title: null,
              url: 'https://github.com/a-synchronous/rubico/blob/master/TRANSDUCERS.md',
              children: [
                {
                  type: 'text',
                  value: 'this resource on transducers',
                  position: {
                    start: { line: 13, column: 403, offset: 772 },
                    end: { line: 13, column: 431, offset: 800 },
                    indent: []
                  }
                }
              ],
              position: {
                start: { line: 13, column: 402, offset: 771 },
                end: { line: 13, column: 500, offset: 869 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 13, column: 500, offset: 869 },
                end: { line: 13, column: 501, offset: 870 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 13, column: 1, offset: 370 },
            end: { line: 13, column: 501, offset: 870 },
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
            start: { line: 15, column: 1, offset: 872 },
            end: { line: 34, column: 4, offset: 1202 },
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
        end: { line: 35, column: 1, offset: 1203 }
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
      '```\n',
    description: "`pipe` that doesn't automatically resolve promises. This variant is a good option if more performance is desired or if manual promise handling is required.\n" +
      '\n' +
      '```javascript [playground]\n' +
      'pipe.sync([\n' +
      '  value => Promise.resolve(value),\n' +
      '  promise => promise.then(console.log)\n' +
      "])('hey') // hey\n" +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 140 }
      }
    },
    description_mdast: {
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
        end: { line: 9, column: 1, offset: 291 }
      }
    }
  },
  {
    name: 'reduce',
    synopsis: '```coffeescript [specscript]\n' +
      'Reducer<T> = (any, T)=>Promise|any\n' +
      'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
      '\n' +
      'var T any,\n' +
      '  args ...any,\n' +
      '  reducer Reducer<T>,\n' +
      '  init (...args=>Promise|any)|any,\n' +
      '  foldable Foldable<T>\n' +
      '  generatorFunction ...args=>Generator<Promise|T>,\n' +
      '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
      '  moreReducers ...Reducer<T>\n' +
      '\n' +
      'reduce(reducer, init?)(foldable) -> Promise|any\n' +
      '\n' +
      'reduce(reducer, init?)(generatorFunction) -> ...args=>Promise|any\n' +
      '\n' +
      'reduce(reducer, init?)(asyncGeneratorFunction) -> ...args=>Promise|any\n' +
      '\n' +
      'reduce(reducer, init?)(...moreReducers) -> ...args=>Promise|any\n' +
      '```\n',
    description: 'Execute a reducer for each item of a collection, resulting in a single output value.\n' +
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
      'reduce(asyncAppReducer, state)(asyncFetchActions(5)).then(\n' +
      "  reducedState => console.log('finalState', reducedState))\n" +
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
      '```\n',
    synopsis_mdast: {
      type: 'root',
      children: [
        {
          type: 'code',
          lang: 'coffeescript',
          meta: '[specscript]',
          value: 'Reducer<T> = (any, T)=>Promise|any\n' +
            'Foldable<T> = Iterable<T>|AsyncIterable<T>|{ reduce: Reducer<T>=>any }|Object<T>\n' +
            '\n' +
            'var T any,\n' +
            '  args ...any,\n' +
            '  reducer Reducer<T>,\n' +
            '  init (...args=>Promise|any)|any,\n' +
            '  foldable Foldable<T>\n' +
            '  generatorFunction ...args=>Generator<Promise|T>,\n' +
            '  asyncGeneratorFunction ...args=>AsyncGenerator<T>,\n' +
            '  moreReducers ...Reducer<T>\n' +
            '\n' +
            'reduce(reducer, init?)(foldable) -> Promise|any\n' +
            '\n' +
            'reduce(reducer, init?)(generatorFunction) -> ...args=>Promise|any\n' +
            '\n' +
            'reduce(reducer, init?)(asyncGeneratorFunction) -> ...args=>Promise|any\n' +
            '\n' +
            'reduce(reducer, init?)(...moreReducers) -> ...args=>Promise|any',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 21, column: 4, offset: 641 },
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
        end: { line: 22, column: 1, offset: 642 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Execute a reducer for each item of a collection, resulting in a single output value.',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 85, offset: 84 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 85, offset: 84 },
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
            start: { line: 3, column: 1, offset: 86 },
            end: { line: 9, column: 4, offset: 205 },
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
                start: { line: 11, column: 1, offset: 207 },
                end: { line: 11, column: 295, offset: 501 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 11, column: 1, offset: 207 },
            end: { line: 11, column: 295, offset: 501 },
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
            start: { line: 13, column: 1, offset: 503 },
            end: { line: 19, column: 4, offset: 618 },
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
                start: { line: 21, column: 1, offset: 620 },
                end: { line: 21, column: 178, offset: 797 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 21, column: 1, offset: 620 },
            end: { line: 21, column: 178, offset: 797 },
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
            start: { line: 23, column: 1, offset: 799 },
            end: { line: 31, column: 4, offset: 1022 },
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
                start: { line: 33, column: 1, offset: 1024 },
                end: { line: 33, column: 110, offset: 1133 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 33, column: 1, offset: 1024 },
            end: { line: 33, column: 110, offset: 1133 },
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
            'reduce(asyncAppReducer, state)(asyncFetchActions(5)).then(\n' +
            "  reducedState => console.log('finalState', reducedState))\n" +
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
            start: { line: 35, column: 1, offset: 1135 },
            end: { line: 81, column: 4, offset: 2833 },
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
                start: { line: 83, column: 1, offset: 2835 },
                end: { line: 83, column: 60, offset: 2894 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'reduce',
              position: {
                start: { line: 83, column: 60, offset: 2894 },
                end: { line: 83, column: 68, offset: 2902 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' concatenates any reducers in argument position onto the initial reducer, producing a combined reducer that performs a chained operation per each item in a reducing operation.',
              position: {
                start: { line: 83, column: 68, offset: 2902 },
                end: { line: 83, column: 243, offset: 3077 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 83, column: 1, offset: 2835 },
            end: { line: 83, column: 243, offset: 3077 },
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
            start: { line: 85, column: 1, offset: 3079 },
            end: { line: 114, column: 4, offset: 3799 },
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
        end: { line: 115, column: 1, offset: 3800 }
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
      '```\n',
    description: 'Conditional operator for functions. Cases are defined as pairings of `predicate` and `resolver`, with the exception of the last, default case.\n' +
      '\n' +
      '```javascript [playground]\n' +
      "const fruitIsYellow = fruit => fruit.color == 'yellow'\n" +
      '\n' +
      'const fruitsGuesser = switchCase([\n' +
      "  fruitIsYellow, fruit => fruit.name + ' is possibly a banana',\n" +
      "  fruit => fruit.name + ' is probably not a banana',\n" +
      '])\n' +
      '\n' +
      'console.log(\n' +
      "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
      ') // plantain is possibly a banana\n' +
      '```\n' +
      '\n' +
      'If an even number of functions is supplied, the last predicate should always return true.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'const questionableIsOdd = switchCase([\n' +
      '  number => number === 1, () => true,\n' +
      '  number => number === 2, () => false,\n' +
      '  number => number === 3, () => true,\n' +
      '  number => number === 4, () => false,\n' +
      '  number => number === 5, () => true,\n' +
      '  () => true, number => number % 2 === 1,\n' +
      '])\n' +
      '\n' +
      'console.log(questionableIsOdd(1)) // true\n' +
      'console.log(questionableIsOdd(6)) // false\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 14, column: 1, offset: 326 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Conditional operator for functions. Cases are defined as pairings of ',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 70, offset: 69 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'predicate',
              position: {
                start: { line: 1, column: 70, offset: 69 },
                end: { line: 1, column: 81, offset: 80 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' and ',
              position: {
                start: { line: 1, column: 81, offset: 80 },
                end: { line: 1, column: 86, offset: 85 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'resolver',
              position: {
                start: { line: 1, column: 86, offset: 85 },
                end: { line: 1, column: 96, offset: 95 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ', with the exception of the last, default case.',
              position: {
                start: { line: 1, column: 96, offset: 95 },
                end: { line: 1, column: 143, offset: 142 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 143, offset: 142 },
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
            "  fruitIsYellow, fruit => fruit.name + ' is possibly a banana',\n" +
            "  fruit => fruit.name + ' is probably not a banana',\n" +
            '])\n' +
            '\n' +
            'console.log(\n' +
            "  fruitsGuesser({ name: 'plantain', color: 'yellow' }),\n" +
            ') // plantain is possibly a banana',
          position: {
            start: { line: 3, column: 1, offset: 144 },
            end: { line: 14, column: 4, offset: 490 },
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
              value: 'If an even number of functions is supplied, the last predicate should always return true.',
              position: {
                start: { line: 16, column: 1, offset: 492 },
                end: { line: 16, column: 90, offset: 581 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 16, column: 1, offset: 492 },
            end: { line: 16, column: 90, offset: 581 },
            indent: []
          }
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[playground]',
          value: 'const questionableIsOdd = switchCase([\n' +
            '  number => number === 1, () => true,\n' +
            '  number => number === 2, () => false,\n' +
            '  number => number === 3, () => true,\n' +
            '  number => number === 4, () => false,\n' +
            '  number => number === 5, () => true,\n' +
            '  () => true, number => number % 2 === 1,\n' +
            '])\n' +
            '\n' +
            'console.log(questionableIsOdd(1)) // true\n' +
            'console.log(questionableIsOdd(6)) // false',
          position: {
            start: { line: 18, column: 1, offset: 583 },
            end: { line: 30, column: 4, offset: 975 },
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
        end: { line: 31, column: 1, offset: 976 }
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
      '```\n',
    description: 'Call a function with a value, returning the value. Promises created by the tapper are resolved before returning the value.\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      '  tap(console.log),\n' +
      "  value => value + 'bar',\n" +
      '  tap(console.log),\n' +
      "])('foo') // 'foo'\n" +
      "          // 'foobar'\n" +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 121 }
      }
    },
    description_mdast: {
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
        end: { line: 11, column: 1, offset: 269 }
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
      '```\n',
    description: 'Synchronous `tap`\n' +
      '\n' +
      '```javascript [playground]\n' +
      'pipe([\n' +
      "  tap.sync(number => console.log('square', number ** 2)),\n" +
      "  tap.sync(number => console.log('cube', number ** 3)),\n" +
      '])(3) // 9\n' +
      '      // 27\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 110 }
      }
    },
    description_mdast: {
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
        end: { line: 10, column: 1, offset: 194 }
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
      '```\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 173 }
      }
    },
    description_mdast: {
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
        end: { line: 13, column: 1, offset: 238 }
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
      '```\n',
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
      '`transform`, like `reduce`, supports reducer combination. This has a use case in state management, where, for a state object, incoming objects are merged.\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 24, column: 1, offset: 815 }
      }
    },
    description_mdast: {
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
              value: ', supports reducer combination. This has a use case in state management, where, for a state object, incoming objects are merged.',
              position: {
                start: { line: 79, column: 27, offset: 2026 },
                end: { line: 79, column: 155, offset: 2154 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 79, column: 1, offset: 2000 },
            end: { line: 79, column: 155, offset: 2154 },
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
            start: { line: 81, column: 1, offset: 2156 },
            end: { line: 115, column: 4, offset: 3021 },
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
        end: { line: 116, column: 1, offset: 3022 }
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
      '```\n',
    description: 'Try a `tryer`, catch with `catcher`. On error or rejected promise, call the `catcher` with the error followed by any arguments to the tryer.\n' +
      '\n' +
      'Note: if the return value is to be used in a future computation, be sure to account for that in both the `tryer` and the `catcher`\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 176 }
      }
    },
    description_mdast: {
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
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Note: if the return value is to be used in a future computation, be sure to account for that in both the ',
              position: {
                start: { line: 3, column: 1, offset: 142 },
                end: { line: 3, column: 106, offset: 247 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'tryer',
              position: {
                start: { line: 3, column: 106, offset: 247 },
                end: { line: 3, column: 113, offset: 254 },
                indent: []
              }
            },
            {
              type: 'text',
              value: ' and the ',
              position: {
                start: { line: 3, column: 113, offset: 254 },
                end: { line: 3, column: 122, offset: 263 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'catcher',
              position: {
                start: { line: 3, column: 122, offset: 263 },
                end: { line: 3, column: 131, offset: 272 },
                indent: []
              }
            }
          ],
          position: {
            start: { line: 3, column: 1, offset: 142 },
            end: { line: 3, column: 131, offset: 272 },
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
            start: { line: 5, column: 1, offset: 274 },
            end: { line: 18, column: 4, offset: 580 },
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
        end: { line: 19, column: 1, offset: 581 }
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
      '```\n',
    description: 'Deeply assign default values to an array or object by an array or object of possibly nested default values.\n' +
      '\n' +
      '```javascript [node]\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 146 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'const defaultUser = defaultsDeep({\n' +
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
            end: { line: 25, column: 4, offset: 732 },
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
        end: { line: 26, column: 1, offset: 733 }
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
      '```\n',
    description: 'Get the first item in a foldable collection that matches a predicate.\n' +
      '\n' +
      '```javascript [node]\n' +
      'const users = [\n' +
      "  { name: 'John', age: 16 },\n" +
      "  { name: 'Jill', age: 32 },\n" +
      "  { name: 'George', age: 51 },\n" +
      ']\n' +
      '\n' +
      'console.log(\n' +
      '  find(user => user.age > 50)(users),\n' +
      ") // { name: 'George', age: 51 }\n" +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 11, column: 1, offset: 246 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'const users = [\n' +
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
            end: { line: 13, column: 4, offset: 287 },
            indent: [
              1, 1, 1, 1, 1,
              1, 1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 14, column: 1, offset: 288 }
      }
    }
  },
  {
    name: 'first',
    synopsis: '```coffeescript [specscript]\n' +
      'var value Array|string\n' +
      '\n' +
      'first(value) -> any\n' +
      '```\n',
    description: 'Get the first item of a collection\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(first([1, 2, 3])) // 1\n' +
      "console.log(first('abc')) // 'a'\n" +
      'console.log(first([])) // undefined\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 77 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'console.log(first([1, 2, 3])) // 1\n' +
            "console.log(first('abc')) // 'a'\n" +
            'console.log(first([])) // undefined',
          position: {
            start: { line: 3, column: 1, offset: 36 },
            end: { line: 7, column: 4, offset: 164 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 165 }
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
      '```\n',
    description: 'Flatten a collection. Works in transducer position.\n' +
      '\n' +
      '```javascript [node]\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 24, column: 1, offset: 767 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'flatten([\n' +
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
            end: { line: 21, column: 4, offset: 437 },
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
        end: { line: 22, column: 1, offset: 438 }
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
      '```\n',
    description: 'Execute a callback for each item of a collection, returning a Promise if any execution is asynchronous. Effectively `callback => map(tap)(callback)`. Also works in transducer position.\n' +
      '\n' +
      '```javascript [node]\n' +
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 20, column: 1, offset: 525 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'forEach(console.log)([1, 2, 3, 4, 5]) // 1 2 3 4 5\n' +
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
            end: { line: 20, column: 4, offset: 620 },
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
        end: { line: 21, column: 1, offset: 621 }
      }
    }
  },
  {
    name: 'heapUsedInLoop',
    synopsis: 'heapUsedInLoop(\n' +
      '  desc string,\n' +
      '  loopCount number,\n' +
      '  func (loop number)=>any\n' +
      ') -> ()\n',
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
      '```\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 85 }
      }
    },
    description_mdast: {
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
        end: { line: 18, column: 1, offset: 471 }
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
      '```\n',
    description: 'Check two values for deep strict equality.\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(\n' +
      '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [3] }),\n' +
      ') // true\n' +
      '\n' +
      'console.log(\n' +
      '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [5] }),\n' +
      ') // false\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 9, column: 1, offset: 196 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Check two values for deep strict equality.',
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
        },
        {
          type: 'code',
          lang: 'javascript',
          meta: '[node]',
          value: 'console.log(\n' +
            '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [3] }),\n' +
            ') // true\n' +
            '\n' +
            'console.log(\n' +
            '  isDeepEqual({ a: 1, b: 2, c: [3] }, { a: 1, b: 2, c: [5] }),\n' +
            ') // false',
          position: {
            start: { line: 3, column: 1, offset: 44 },
            end: { line: 11, column: 4, offset: 242 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 12, column: 1, offset: 243 }
      }
    }
  },
  {
    name: 'isEmpty',
    synopsis: '```coffeescript [specscript]\nisEmpty(value any) -> boolean\n```\n',
    description: 'Check if a value is empty.\n' +
      '\n' +
      '```javascript [node]\n' +
      "console.log(isEmpty('')) // true\n" +
      'console.log(isEmpty([])) // true\n' +
      'console.log(isEmpty(new Set())) // true\n' +
      'console.log(isEmpty(new Map())) // true\n' +
      'console.log(isEmpty({})) // true\n' +
      "console.log(isEmpty('hey')) // false\n" +
      'console.log(isEmpty([1, 2, 3])) // false\n' +
      'console.log(isEmpty(new Set([1, 2, 3]))) // false\n' +
      "console.log(isEmpty(new Map([['a', 1], ['b', 2], ['c', 3]]))) // false\n" +
      'console.log(isEmpty({ a: 1, b: 2, c: 3 })) // false\n' +
      'console.log(isEmpty(100)) // false\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 63 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: "console.log(isEmpty('')) // true\n" +
            'console.log(isEmpty([])) // true\n' +
            'console.log(isEmpty(new Set())) // true\n' +
            'console.log(isEmpty(new Map())) // true\n' +
            'console.log(isEmpty({})) // true\n' +
            "console.log(isEmpty('hey')) // false\n" +
            'console.log(isEmpty([1, 2, 3])) // false\n' +
            'console.log(isEmpty(new Set([1, 2, 3]))) // false\n' +
            "console.log(isEmpty(new Map([['a', 1], ['b', 2], ['c', 3]]))) // false\n" +
            'console.log(isEmpty({ a: 1, b: 2, c: 3 })) // false\n' +
            'console.log(isEmpty(100)) // false',
          position: {
            start: { line: 3, column: 1, offset: 28 },
            end: { line: 15, column: 4, offset: 517 },
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
        end: { line: 16, column: 1, offset: 518 }
      }
    }
  },
  {
    name: 'isFunction',
    synopsis: '```coffeescript [specscript]\nisFunction(value any) -> boolean\n```\n',
    description: 'Determine whether a value is a function.\n' +
      '\n' +
      '```javascript [node]\n' +
      'const add = (a, b) => a + b\n' +
      '\n' +
      'console.log(\n' +
      '  isFunction(add),\n' +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 66 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'const add = (a, b) => a + b\n' +
            '\n' +
            'console.log(\n' +
            '  isFunction(add),\n' +
            ') // true',
          position: {
            start: { line: 3, column: 1, offset: 42 },
            end: { line: 9, column: 4, offset: 137 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 138 }
      }
    }
  },
  {
    name: 'isObject',
    synopsis: '```coffeescript [specscript]\nisObject(value any) -> boolean\n```\n',
    description: 'Determine whether a value is a direct `Object`.\n' +
      '\n' +
      '```javascript [node]\n' +
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
      ') // false\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 64 }
      }
    },
    description_mdast: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Determine whether a value is a direct ',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 39, offset: 38 },
                indent: []
              }
            },
            {
              type: 'inlineCode',
              value: 'Object',
              position: {
                start: { line: 1, column: 39, offset: 38 },
                end: { line: 1, column: 47, offset: 46 },
                indent: []
              }
            },
            {
              type: 'text',
              value: '.',
              position: {
                start: { line: 1, column: 47, offset: 46 },
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
          meta: '[node]',
          value: 'console.log(\n' +
            '  isObject({ a: 1, b: 2, c: 3 }),\n' +
            ') // true\n' +
            '\n' +
            'console.log(\n' +
            "  isObject('hey'),\n" +
            ') // false\n' +
            '\n' +
            'console.log(\n' +
            '  isObject(new Set([1, 2, 3])),\n' +
            ') // false',
          position: {
            start: { line: 3, column: 1, offset: 49 },
            end: { line: 15, column: 4, offset: 231 },
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
        end: { line: 16, column: 1, offset: 232 }
      }
    }
  },
  {
    name: 'isString',
    synopsis: '```coffeescript [specscript]\nisString(value any) -> boolean\n```\n',
    description: 'Determine whether a value is a string.\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(\n' +
      "  isString('hey'),\n" +
      ') // true\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 64 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: "console.log(\n  isString('hey'),\n) // true",
          position: {
            start: { line: 3, column: 1, offset: 40 },
            end: { line: 7, column: 4, offset: 106 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 107 }
      }
    }
  },
  {
    name: 'last',
    synopsis: '```coffeescript [specscript]\n' +
      'var value Array|string\n' +
      '\n' +
      'last(value) -> any\n' +
      '```\n',
    description: 'Get the last item of a collection\n' +
      '\n' +
      '```javascript [node]\n' +
      "const last = require('rubico/x/last')\n" +
      '\n' +
      'console.log(last([1, 2, 3])) // 3\n' +
      'console.log(last([])) // undefined\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 6, column: 1, offset: 76 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: "const last = require('rubico/x/last')\n" +
            '\n' +
            'console.log(last([1, 2, 3])) // 3\n' +
            'console.log(last([])) // undefined',
          position: {
            start: { line: 3, column: 1, offset: 35 },
            end: { line: 8, column: 4, offset: 167 },
            indent: [ 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 1, offset: 168 }
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
      '```\n',
    description: 'Apply a getter denoted by path across all items of a collection, creating a new collection of plucked values. Also works in transducer position.\n' +
      '\n' +
      '```javascript [node]\n' +
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
      "  users.reduce(pluck('age')(add)),\n" +
      ') // total age: 96\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 21, column: 1, offset: 503 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'const users = [\n' +
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
            "  users.reduce(pluck('age')(add)),\n" +
            ') // total age: 96',
          position: {
            start: { line: 3, column: 1, offset: 146 },
            end: { line: 20, column: 4, offset: 482 },
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
        end: { line: 21, column: 1, offset: 483 }
      }
    }
  },
  {
    name: 'size',
    synopsis: '```coffeescript [specscript]\nsize(value any) -> number\n```\n',
    description: 'Get the count of items in a value.\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(\n' +
      '  size([1, 2, 3]),\n' +
      ') // 3\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 4, column: 1, offset: 59 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'console.log(\n  size([1, 2, 3]),\n) // 3',
          position: {
            start: { line: 3, column: 1, offset: 36 },
            end: { line: 7, column: 4, offset: 99 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 100 }
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
      '```\n',
    description: 'Log a value out to the console, returning the value. If the value is a function, treat it as a resolver.\n' +
      '\n' +
      '```javascript [node]\n' +
      'pipe([\n' +
      '  trace,\n' +
      '  trace(value => value.toUpperCase()),\n' +
      "])('hey') // hey\n" +
      '          // HEY\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 10, column: 1, offset: 160 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'pipe([\n' +
            '  trace,\n' +
            '  trace(value => value.toUpperCase()),\n' +
            "])('hey') // hey\n" +
            '          // HEY',
          position: {
            start: { line: 3, column: 1, offset: 106 },
            end: { line: 9, column: 4, offset: 219 },
            indent: [ 1, 1, 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 10, column: 1, offset: 220 }
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
      '```\n',
    description: 'Create an array of unique values from an array of arrays with uniqueness determined by a comparator. The comparator is a function that returns a boolean value, `true` if two given values are distinct.\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(\n' +
      '  unionWith(isDeepEqual)([\n' +
      '    [{ a: 1 }, { b: 2 }, { a: 1 }],\n' +
      '    [{ b: 2 }, { b: 2 }, { b: 2 }],\n' +
      '  ]),\n' +
      ') // [{ a: 1 }, { b: 2 }]\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 8, column: 1, offset: 164 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'console.log(\n' +
            '  unionWith(isDeepEqual)([\n' +
            '    [{ a: 1 }, { b: 2 }, { a: 1 }],\n' +
            '    [{ b: 2 }, { b: 2 }, { b: 2 }],\n' +
            '  ]),\n' +
            ') // [{ a: 1 }, { b: 2 }]',
          position: {
            start: { line: 3, column: 1, offset: 202 },
            end: { line: 10, column: 4, offset: 370 },
            indent: [
              1, 1, 1, 1,
              1, 1, 1
            ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 11, column: 1, offset: 371 }
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
      '```\n',
    description: 'Get an array of unique values from an array.\n' +
      '\n' +
      '```javascript [node]\n' +
      'console.log(\n' +
      '  uniq([1, 2, 2, 3]),\n' +
      ') // [1, 2, 3]\n' +
      '```\n',
    synopsis_mdast: {
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
        end: { line: 7, column: 1, offset: 83 }
      }
    },
    description_mdast: {
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
          meta: '[node]',
          value: 'console.log(\n  uniq([1, 2, 2, 3]),\n) // [1, 2, 3]',
          position: {
            start: { line: 3, column: 1, offset: 46 },
            end: { line: 7, column: 4, offset: 120 },
            indent: [ 1, 1, 1, 1 ]
          }
        }
      ],
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 8, column: 1, offset: 121 }
      }
    }
  }
]
