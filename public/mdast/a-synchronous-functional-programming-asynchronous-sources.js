export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Asynchronous Sources\n' +
        'author: Richard Yufei Tong, King of Software at CLOUT\n' +
        'date: 2025-02-23\n' +
        'updated: 2026-02-23\n' +
        'path: /blog/a-synchronous-functional-programming-asynchronous-sources\n' +
        'description: Asynchronous Sources in [A]synchronous Functional Programming\n' +
        'image: /assets/asynchronous-sources-examples.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 360 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 362 },
            end: { line: 11, column: 211, offset: 572 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 362 },
        end: { line: 11, column: 211, offset: 572 }
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
            start: { line: 13, column: 4, offset: 577 },
            end: { line: 13, column: 24, offset: 597 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 574 },
        end: { line: 13, column: 24, offset: 597 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Asynchronous Sources are ubiquitous in modern day JavaScript environments, in both web browsers and servers. Asynchronous sources can be data streams, network connections, and event targets. Asynchronous sources execute independently of the main program's execution flow.",
          position: {
            start: { line: 15, column: 1, offset: 599 },
            end: { line: 15, column: 272, offset: 870 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 599 },
        end: { line: 15, column: 272, offset: 870 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of asynchronous sources that occur in web browsers and in ',
          position: {
            start: { line: 17, column: 1, offset: 872 },
            end: { line: 17, column: 82, offset: 953 }
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
                start: { line: 17, column: 83, offset: 954 },
                end: { line: 17, column: 89, offset: 960 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 82, offset: 953 },
            end: { line: 17, column: 113, offset: 984 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 17, column: 113, offset: 984 },
            end: { line: 17, column: 114, offset: 985 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 872 },
        end: { line: 17, column: 114, offset: 985 }
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
        start: { line: 19, column: 1, offset: 987 },
        end: { line: 42, column: 4, offset: 1742 }
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
            start: { line: 44, column: 4, offset: 1747 },
            end: { line: 44, column: 35, offset: 1778 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1744 },
        end: { line: 44, column: 35, offset: 1778 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'On the web, event targets and network connections are both examples of asynchronous sources.',
          position: {
            start: { line: 46, column: 1, offset: 1780 },
            end: { line: 46, column: 93, offset: 1872 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1780 },
        end: { line: 46, column: 93, offset: 1872 }
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
            start: { line: 48, column: 5, offset: 1878 },
            end: { line: 48, column: 29, offset: 1902 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1874 },
        end: { line: 48, column: 29, offset: 1902 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event target (',
          position: {
            start: { line: 50, column: 1, offset: 1904 },
            end: { line: 50, column: 18, offset: 1921 }
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
                start: { line: 50, column: 19, offset: 1922 },
                end: { line: 50, column: 30, offset: 1933 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 18, offset: 1921 },
            end: { line: 50, column: 93, offset: 1996 }
          }
        },
        {
          type: 'text',
          value: ') is an object that can receive events. Any element (',
          position: {
            start: { line: 50, column: 93, offset: 1996 },
            end: { line: 50, column: 146, offset: 2049 }
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
                start: { line: 50, column: 147, offset: 2050 },
                end: { line: 50, column: 154, offset: 2057 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 146, offset: 2049 },
            end: { line: 50, column: 213, offset: 2116 }
          }
        },
        {
          type: 'text',
          value: '), including the ',
          position: {
            start: { line: 50, column: 213, offset: 2116 },
            end: { line: 50, column: 230, offset: 2133 }
          }
        },
        {
          type: 'inlineCode',
          value: 'document',
          position: {
            start: { line: 50, column: 230, offset: 2133 },
            end: { line: 50, column: 240, offset: 2143 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 240, offset: 2143 },
            end: { line: 50, column: 242, offset: 2145 }
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
                start: { line: 50, column: 243, offset: 2146 },
                end: { line: 50, column: 251, offset: 2154 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 242, offset: 2145 },
            end: { line: 50, column: 311, offset: 2214 }
          }
        },
        {
          type: 'text',
          value: ') object and global ',
          position: {
            start: { line: 50, column: 311, offset: 2214 },
            end: { line: 50, column: 331, offset: 2234 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window',
          position: {
            start: { line: 50, column: 331, offset: 2234 },
            end: { line: 50, column: 339, offset: 2242 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 339, offset: 2242 },
            end: { line: 50, column: 341, offset: 2244 }
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
                start: { line: 50, column: 342, offset: 2245 },
                end: { line: 50, column: 348, offset: 2251 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 341, offset: 2244 },
            end: { line: 50, column: 406, offset: 2309 }
          }
        },
        {
          type: 'text',
          value: ') object, can be considered an event target.',
          position: {
            start: { line: 50, column: 406, offset: 2309 },
            end: { line: 50, column: 450, offset: 2353 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 1904 },
        end: { line: 50, column: 450, offset: 2353 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event (',
          position: {
            start: { line: 52, column: 1, offset: 2355 },
            end: { line: 52, column: 11, offset: 2365 }
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
                start: { line: 52, column: 12, offset: 2366 },
                end: { line: 52, column: 17, offset: 2371 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 11, offset: 2365 },
            end: { line: 52, column: 74, offset: 2428 }
          }
        },
        {
          type: 'text',
          value: ') is an object that represents an asynchronous occurrence in relation to an event target. For example, a "click" event can occur on a button event target, and a "change" event can occur on an input event target.',
          position: {
            start: { line: 52, column: 74, offset: 2428 },
            end: { line: 52, column: 285, offset: 2639 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2355 },
        end: { line: 52, column: 285, offset: 2639 }
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
        start: { line: 54, column: 1, offset: 2641 },
        end: { line: 66, column: 4, offset: 2947 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To listen for an event on an event target, you would call the ',
          position: {
            start: { line: 68, column: 1, offset: 2949 },
            end: { line: 68, column: 63, offset: 3011 }
          }
        },
        {
          type: 'inlineCode',
          value: 'addEventListener',
          position: {
            start: { line: 68, column: 63, offset: 3011 },
            end: { line: 68, column: 81, offset: 3029 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and an event listener callback function. You can add multiple event listeners for the same event, and remove event listeners with ',
          position: {
            start: { line: 68, column: 81, offset: 3029 },
            end: { line: 68, column: 259, offset: 3207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 259, offset: 3207 },
            end: { line: 68, column: 280, offset: 3228 }
          }
        },
        {
          type: 'text',
          value: '. To remove an event listener, you would call the ',
          position: {
            start: { line: 68, column: 280, offset: 3228 },
            end: { line: 68, column: 330, offset: 3278 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 330, offset: 3278 },
            end: { line: 68, column: 351, offset: 3299 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and the event listener callback function to remove.',
          position: {
            start: { line: 68, column: 351, offset: 3299 },
            end: { line: 68, column: 450, offset: 3398 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2949 },
        end: { line: 68, column: 450, offset: 3398 }
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
        start: { line: 70, column: 1, offset: 3400 },
        end: { line: 90, column: 4, offset: 3966 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some common events:',
          position: {
            start: { line: 92, column: 1, offset: 3968 },
            end: { line: 92, column: 20, offset: 3987 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3968 },
        end: { line: 92, column: 20, offset: 3987 }
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
                        start: { line: 93, column: 6, offset: 3993 },
                        end: { line: 93, column: 25, offset: 4012 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 93, column: 5, offset: 3992 },
                    end: { line: 93, column: 96, offset: 4083 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 5, offset: 3992 },
                end: { line: 93, column: 96, offset: 4083 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 3, offset: 3990 },
            end: { line: 93, column: 96, offset: 4083 }
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
                        start: { line: 94, column: 6, offset: 4089 },
                        end: { line: 94, column: 26, offset: 4109 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 94, column: 5, offset: 4088 },
                    end: { line: 94, column: 50, offset: 4133 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 5, offset: 4088 },
                end: { line: 94, column: 50, offset: 4133 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 3, offset: 4086 },
            end: { line: 94, column: 50, offset: 4133 }
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
                        start: { line: 95, column: 6, offset: 4139 },
                        end: { line: 95, column: 27, offset: 4160 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 95, column: 5, offset: 4138 },
                    end: { line: 95, column: 52, offset: 4185 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 5, offset: 4138 },
                end: { line: 95, column: 52, offset: 4185 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 3, offset: 4136 },
            end: { line: 95, column: 52, offset: 4185 }
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
                        start: { line: 96, column: 6, offset: 4191 },
                        end: { line: 96, column: 25, offset: 4210 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 96, column: 5, offset: 4190 },
                    end: { line: 96, column: 48, offset: 4233 }
                  }
                }
              ],
              position: {
                start: { line: 96, column: 5, offset: 4190 },
                end: { line: 96, column: 48, offset: 4233 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 3, offset: 4188 },
            end: { line: 96, column: 48, offset: 4233 }
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
                        start: { line: 97, column: 6, offset: 4239 },
                        end: { line: 97, column: 29, offset: 4262 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 97, column: 5, offset: 4238 },
                    end: { line: 97, column: 56, offset: 4289 }
                  }
                }
              ],
              position: {
                start: { line: 97, column: 5, offset: 4238 },
                end: { line: 97, column: 56, offset: 4289 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 3, offset: 4236 },
            end: { line: 97, column: 56, offset: 4289 }
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
                        start: { line: 98, column: 6, offset: 4295 },
                        end: { line: 98, column: 25, offset: 4314 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 98, column: 5, offset: 4294 },
                    end: { line: 98, column: 48, offset: 4337 }
                  }
                }
              ],
              position: {
                start: { line: 98, column: 5, offset: 4294 },
                end: { line: 98, column: 48, offset: 4337 }
              }
            }
          ],
          position: {
            start: { line: 98, column: 3, offset: 4292 },
            end: { line: 98, column: 48, offset: 4337 }
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
                        start: { line: 99, column: 6, offset: 4343 },
                        end: { line: 99, column: 26, offset: 4363 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 99, column: 5, offset: 4342 },
                    end: { line: 99, column: 50, offset: 4387 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 5, offset: 4342 },
                end: { line: 99, column: 50, offset: 4387 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 3, offset: 4340 },
            end: { line: 99, column: 50, offset: 4387 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 3, offset: 3990 },
        end: { line: 99, column: 50, offset: 4387 }
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
            start: { line: 101, column: 4, offset: 4392 },
            end: { line: 101, column: 34, offset: 4422 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 4389 },
        end: { line: 101, column: 34, offset: 4422 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 102, column: 1, offset: 4423 }
  }
}