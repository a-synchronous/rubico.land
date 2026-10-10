export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Asynchronous Sources\n' +
        'author: Richard Tong, King of Technology at CLOUŢ\n' +
        'date: 2025-02-23\n' +
        'updated: 2026-10-09\n' +
        'path: /blog/a-synchronous-functional-programming-asynchronous-sources\n' +
        'description: Asynchronous Sources in [A]synchronous Functional Programming.\n' +
        'image: /assets/asynchronous-sources-examples.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 357 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 359 },
            end: { line: 11, column: 211, offset: 569 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 359 },
        end: { line: 11, column: 211, offset: 569 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Asynchronous Sources',
          position: {
            start: { line: 13, column: 4, offset: 574 },
            end: { line: 13, column: 24, offset: 594 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 571 },
        end: { line: 13, column: 24, offset: 594 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Asynchronous Sources are ubiquitous in modern day JavaScript environments, in both web browsers and servers. Asynchronous sources can be data streams, network connections, and event targets. Asynchronous sources execute independently of the main program's execution flow.",
          position: {
            start: { line: 15, column: 1, offset: 596 },
            end: { line: 15, column: 272, offset: 867 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 596 },
        end: { line: 15, column: 272, offset: 867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of asynchronous sources that occur in web browsers and in ',
          position: {
            start: { line: 17, column: 1, offset: 869 },
            end: { line: 17, column: 82, offset: 950 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://nodejs.org/en',
          children: [
            {
              type: 'text',
              value: 'NodeJS',
              position: {
                start: { line: 17, column: 83, offset: 951 },
                end: { line: 17, column: 89, offset: 957 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 82, offset: 950 },
            end: { line: 17, column: 113, offset: 981 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 17, column: 113, offset: 981 },
            end: { line: 17, column: 114, offset: 982 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 869 },
        end: { line: 17, column: 114, offset: 982 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// EventTarget (Web)\n' +
        "const myButtonElement = document.getElementById('#my-button')\n" +
        "myButtonElement.addEventListener('click', event => {\n" +
        '  // event is a click event of the event target myButtonElement\n' +
        '})\n' +
        '\n' +
        '// fetch response (web)\n' +
        "const response = await fetch('https://jsonplaceholder.typicode.com/posts')\n" +
        '// response.body\n' +
        '\n' +
        '// WebSocket (Web)\n' +
        "const myWebsocket = new WebSocket('ws://localhost:8080/')\n" +
        "websocket.addEventListener('message', event => {\n" +
        '  // event is a message event of the WebSocket connection myWebsocket\n' +
        '})\n' +
        '\n' +
        '// stream.Readable (NodeJS)\n' +
        "const fs = require('fs')\n" +
        "const myReadableStream = fs.createReadStream('/path/to/my/file')\n" +
        "myReadableStream.on('data', chunk => {\n" +
        '  // chunk is data from the file stream myReadableStream\n' +
        '})',
      position: {
        start: { line: 19, column: 1, offset: 984 },
        end: { line: 42, column: 4, offset: 1739 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Asynchronous Sources on the Web',
          position: {
            start: { line: 44, column: 4, offset: 1744 },
            end: { line: 44, column: 35, offset: 1775 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1741 },
        end: { line: 44, column: 35, offset: 1775 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'On the web, event targets and network connections are both examples of asynchronous sources.',
          position: {
            start: { line: 46, column: 1, offset: 1777 },
            end: { line: 46, column: 93, offset: 1869 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1777 },
        end: { line: 46, column: 93, offset: 1869 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Event Targets and Events',
          position: {
            start: { line: 48, column: 5, offset: 1875 },
            end: { line: 48, column: 29, offset: 1899 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1871 },
        end: { line: 48, column: 29, offset: 1899 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event target (',
          position: {
            start: { line: 50, column: 1, offset: 1901 },
            end: { line: 50, column: 18, offset: 1918 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget',
          children: [
            {
              type: 'text',
              value: 'EventTarget',
              position: {
                start: { line: 50, column: 19, offset: 1919 },
                end: { line: 50, column: 30, offset: 1930 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 18, offset: 1918 },
            end: { line: 50, column: 93, offset: 1993 }
          }
        },
        {
          type: 'text',
          value: ') is an object that can receive events. Any element (',
          position: {
            start: { line: 50, column: 93, offset: 1993 },
            end: { line: 50, column: 146, offset: 2046 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element',
          children: [
            {
              type: 'text',
              value: 'Element',
              position: {
                start: { line: 50, column: 147, offset: 2047 },
                end: { line: 50, column: 154, offset: 2054 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 146, offset: 2046 },
            end: { line: 50, column: 213, offset: 2113 }
          }
        },
        {
          type: 'text',
          value: '), including the ',
          position: {
            start: { line: 50, column: 213, offset: 2113 },
            end: { line: 50, column: 230, offset: 2130 }
          }
        },
        {
          type: 'inlineCode',
          value: 'document',
          position: {
            start: { line: 50, column: 230, offset: 2130 },
            end: { line: 50, column: 240, offset: 2140 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 240, offset: 2140 },
            end: { line: 50, column: 242, offset: 2142 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document',
          children: [
            {
              type: 'text',
              value: 'Document',
              position: {
                start: { line: 50, column: 243, offset: 2143 },
                end: { line: 50, column: 251, offset: 2151 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 242, offset: 2142 },
            end: { line: 50, column: 311, offset: 2211 }
          }
        },
        {
          type: 'text',
          value: ') object and global ',
          position: {
            start: { line: 50, column: 311, offset: 2211 },
            end: { line: 50, column: 331, offset: 2231 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window',
          position: {
            start: { line: 50, column: 331, offset: 2231 },
            end: { line: 50, column: 339, offset: 2239 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 339, offset: 2239 },
            end: { line: 50, column: 341, offset: 2241 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window',
          children: [
            {
              type: 'text',
              value: 'Window',
              position: {
                start: { line: 50, column: 342, offset: 2242 },
                end: { line: 50, column: 348, offset: 2248 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 341, offset: 2241 },
            end: { line: 50, column: 406, offset: 2306 }
          }
        },
        {
          type: 'text',
          value: ') object, can be considered an event target.',
          position: {
            start: { line: 50, column: 406, offset: 2306 },
            end: { line: 50, column: 450, offset: 2350 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 1901 },
        end: { line: 50, column: 450, offset: 2350 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event (',
          position: {
            start: { line: 52, column: 1, offset: 2352 },
            end: { line: 52, column: 11, offset: 2362 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event',
          children: [
            {
              type: 'text',
              value: 'Event',
              position: {
                start: { line: 52, column: 12, offset: 2363 },
                end: { line: 52, column: 17, offset: 2368 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 11, offset: 2362 },
            end: { line: 52, column: 74, offset: 2425 }
          }
        },
        {
          type: 'text',
          value: ') is an object that represents an asynchronous occurrence in relation to an event target. For example, a "click" event can occur on a button event target, and a "change" event can occur on an input event target.',
          position: {
            start: { line: 52, column: 74, offset: 2425 },
            end: { line: 52, column: 285, offset: 2636 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2352 },
        end: { line: 52, column: 285, offset: 2636 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Event = {\n' +
        '  type: string,\n' +
        '  target: EventTarget,\n' +
        '}\n' +
        '\n' +
        'type EventListener = (event Event)=>any\n' +
        '\n' +
        'type EventTarget = {\n' +
        '  addEventListener: (eventName string, listener EventListener)=>undefined,\n' +
        '  removeEventListener: (eventName string, listener EventListener)=>undefined,\n' +
        '}',
      position: {
        start: { line: 54, column: 1, offset: 2638 },
        end: { line: 66, column: 4, offset: 2944 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To listen for an event on an event target, you would call the ',
          position: {
            start: { line: 68, column: 1, offset: 2946 },
            end: { line: 68, column: 63, offset: 3008 }
          }
        },
        {
          type: 'inlineCode',
          value: 'addEventListener',
          position: {
            start: { line: 68, column: 63, offset: 3008 },
            end: { line: 68, column: 81, offset: 3026 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and an event listener callback function. You can add multiple event listeners for the same event, and remove event listeners with ',
          position: {
            start: { line: 68, column: 81, offset: 3026 },
            end: { line: 68, column: 259, offset: 3204 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 259, offset: 3204 },
            end: { line: 68, column: 280, offset: 3225 }
          }
        },
        {
          type: 'text',
          value: '. To remove an event listener, you would call the ',
          position: {
            start: { line: 68, column: 280, offset: 3225 },
            end: { line: 68, column: 330, offset: 3275 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 330, offset: 3275 },
            end: { line: 68, column: 351, offset: 3296 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and the event listener callback function to remove.',
          position: {
            start: { line: 68, column: 351, offset: 3296 },
            end: { line: 68, column: 450, offset: 3395 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2946 },
        end: { line: 68, column: 450, offset: 3395 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// myButton is an event target\n' +
        "const myButton = document.getElementById('my-button')\n" +
        '\n' +
        'const myListener = event => {\n' +
        '  console.log(event.target)\n' +
        '}\n' +
        '\n' +
        "// adds myListener to myButton's click event listeners\n" +
        "myButton.addEventListener('click', myListener)\n" +
        '\n' +
        'const myOtherListener = event => {\n' +
        '  console.log(event.target)\n' +
        '}\n' +
        '\n' +
        "// adds myOtherListener to myButton's click event listeners\n" +
        "myButton.addEventListener('click', myOtherListener)\n" +
        '\n' +
        "// removes myOtherListener from myButton's click event listeners\n" +
        "myButton.removeEventListener('click', myOtherListener)",
      position: {
        start: { line: 70, column: 1, offset: 3397 },
        end: { line: 90, column: 4, offset: 3963 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some common events:',
          position: {
            start: { line: 92, column: 1, offset: 3965 },
            end: { line: 92, column: 20, offset: 3984 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3965 },
        end: { line: 92, column: 20, offset: 3984 }
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
                  url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element focus event',
                      position: {
                        start: { line: 93, column: 6, offset: 3990 },
                        end: { line: 93, column: 25, offset: 4009 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 93, column: 5, offset: 3989 },
                    end: { line: 93, column: 96, offset: 4080 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 5, offset: 3989 },
                end: { line: 93, column: 96, offset: 4080 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 3, offset: 3987 },
            end: { line: 93, column: 96, offset: 4080 }
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
                  url: '#element-change-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element change event',
                      position: {
                        start: { line: 94, column: 6, offset: 4086 },
                        end: { line: 94, column: 26, offset: 4106 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 94, column: 5, offset: 4085 },
                    end: { line: 94, column: 50, offset: 4130 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 5, offset: 4085 },
                end: { line: 94, column: 50, offset: 4130 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 3, offset: 4083 },
            end: { line: 94, column: 50, offset: 4130 }
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
                  url: '#element-keydown-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element keydown event',
                      position: {
                        start: { line: 95, column: 6, offset: 4136 },
                        end: { line: 95, column: 27, offset: 4157 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 95, column: 5, offset: 4135 },
                    end: { line: 95, column: 52, offset: 4182 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 5, offset: 4135 },
                end: { line: 95, column: 52, offset: 4182 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 3, offset: 4133 },
            end: { line: 95, column: 52, offset: 4182 }
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
                  url: '#element-keyup-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element keyup event',
                      position: {
                        start: { line: 96, column: 6, offset: 4188 },
                        end: { line: 96, column: 25, offset: 4207 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 96, column: 5, offset: 4187 },
                    end: { line: 96, column: 48, offset: 4230 }
                  }
                }
              ],
              position: {
                start: { line: 96, column: 5, offset: 4187 },
                end: { line: 96, column: 48, offset: 4230 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 3, offset: 4185 },
            end: { line: 96, column: 48, offset: 4230 }
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
                  url: '#element-mousemove-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element mousemove event',
                      position: {
                        start: { line: 97, column: 6, offset: 4236 },
                        end: { line: 97, column: 29, offset: 4259 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 97, column: 5, offset: 4235 },
                    end: { line: 97, column: 56, offset: 4286 }
                  }
                }
              ],
              position: {
                start: { line: 97, column: 5, offset: 4235 },
                end: { line: 97, column: 56, offset: 4286 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 3, offset: 4233 },
            end: { line: 97, column: 56, offset: 4286 }
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
                  url: '#element-click-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element click event',
                      position: {
                        start: { line: 98, column: 6, offset: 4292 },
                        end: { line: 98, column: 25, offset: 4311 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 98, column: 5, offset: 4291 },
                    end: { line: 98, column: 48, offset: 4334 }
                  }
                }
              ],
              position: {
                start: { line: 98, column: 5, offset: 4291 },
                end: { line: 98, column: 48, offset: 4334 }
              }
            }
          ],
          position: {
            start: { line: 98, column: 3, offset: 4289 },
            end: { line: 98, column: 48, offset: 4334 }
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
                  url: '#element-scroll-event',
                  children: [
                    {
                      type: 'text',
                      value: 'Element scroll event',
                      position: {
                        start: { line: 99, column: 6, offset: 4340 },
                        end: { line: 99, column: 26, offset: 4360 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 99, column: 5, offset: 4339 },
                    end: { line: 99, column: 50, offset: 4384 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 5, offset: 4339 },
                end: { line: 99, column: 50, offset: 4384 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 3, offset: 4337 },
            end: { line: 99, column: 50, offset: 4384 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 3, offset: 3987 },
        end: { line: 99, column: 50, offset: 4384 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Asynchronous Sources in NodeJS',
          position: {
            start: { line: 101, column: 4, offset: 4389 },
            end: { line: 101, column: 34, offset: 4419 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 4386 },
        end: { line: 101, column: 34, offset: 4419 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 102, column: 1, offset: 4420 }
  }
}