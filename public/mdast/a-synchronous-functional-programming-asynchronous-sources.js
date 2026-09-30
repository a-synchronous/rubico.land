export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Asynchronous Sources\n' +
        'author: Richard Tong, King of Software at CLOUT\n' +
        'date: 2025-02-23\n' +
        'updated: 2026-02-23\n' +
        'path: /blog/a-synchronous-functional-programming-asynchronous-sources\n' +
        'description: Asynchronous Sources in [A]synchronous Functional Programming.\n' +
        'image: /assets/asynchronous-sources-examples.jpg',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 355 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 357 },
            end: { line: 11, column: 211, offset: 567 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 357 },
        end: { line: 11, column: 211, offset: 567 }
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
            start: { line: 13, column: 4, offset: 572 },
            end: { line: 13, column: 24, offset: 592 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 569 },
        end: { line: 13, column: 24, offset: 592 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Asynchronous Sources are ubiquitous in modern day JavaScript environments, in both web browsers and servers. Asynchronous sources can be data streams, network connections, and event targets. Asynchronous sources execute independently of the main program's execution flow.",
          position: {
            start: { line: 15, column: 1, offset: 594 },
            end: { line: 15, column: 272, offset: 865 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 594 },
        end: { line: 15, column: 272, offset: 865 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Here are some examples of asynchronous sources that occur in web browsers and in ',
          position: {
            start: { line: 17, column: 1, offset: 867 },
            end: { line: 17, column: 82, offset: 948 }
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
                start: { line: 17, column: 83, offset: 949 },
                end: { line: 17, column: 89, offset: 955 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 82, offset: 948 },
            end: { line: 17, column: 113, offset: 979 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 17, column: 113, offset: 979 },
            end: { line: 17, column: 114, offset: 980 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 867 },
        end: { line: 17, column: 114, offset: 980 }
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
        start: { line: 19, column: 1, offset: 982 },
        end: { line: 42, column: 4, offset: 1737 }
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
            start: { line: 44, column: 4, offset: 1742 },
            end: { line: 44, column: 35, offset: 1773 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1739 },
        end: { line: 44, column: 35, offset: 1773 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'On the web, event targets and network connections are both examples of asynchronous sources.',
          position: {
            start: { line: 46, column: 1, offset: 1775 },
            end: { line: 46, column: 93, offset: 1867 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1775 },
        end: { line: 46, column: 93, offset: 1867 }
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
            start: { line: 48, column: 5, offset: 1873 },
            end: { line: 48, column: 29, offset: 1897 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 1869 },
        end: { line: 48, column: 29, offset: 1897 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event target (',
          position: {
            start: { line: 50, column: 1, offset: 1899 },
            end: { line: 50, column: 18, offset: 1916 }
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
                start: { line: 50, column: 19, offset: 1917 },
                end: { line: 50, column: 30, offset: 1928 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 18, offset: 1916 },
            end: { line: 50, column: 93, offset: 1991 }
          }
        },
        {
          type: 'text',
          value: ') is an object that can receive events. Any element (',
          position: {
            start: { line: 50, column: 93, offset: 1991 },
            end: { line: 50, column: 146, offset: 2044 }
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
                start: { line: 50, column: 147, offset: 2045 },
                end: { line: 50, column: 154, offset: 2052 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 146, offset: 2044 },
            end: { line: 50, column: 213, offset: 2111 }
          }
        },
        {
          type: 'text',
          value: '), including the ',
          position: {
            start: { line: 50, column: 213, offset: 2111 },
            end: { line: 50, column: 230, offset: 2128 }
          }
        },
        {
          type: 'inlineCode',
          value: 'document',
          position: {
            start: { line: 50, column: 230, offset: 2128 },
            end: { line: 50, column: 240, offset: 2138 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 240, offset: 2138 },
            end: { line: 50, column: 242, offset: 2140 }
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
                start: { line: 50, column: 243, offset: 2141 },
                end: { line: 50, column: 251, offset: 2149 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 242, offset: 2140 },
            end: { line: 50, column: 311, offset: 2209 }
          }
        },
        {
          type: 'text',
          value: ') object and global ',
          position: {
            start: { line: 50, column: 311, offset: 2209 },
            end: { line: 50, column: 331, offset: 2229 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window',
          position: {
            start: { line: 50, column: 331, offset: 2229 },
            end: { line: 50, column: 339, offset: 2237 }
          }
        },
        {
          type: 'text',
          value: ' (',
          position: {
            start: { line: 50, column: 339, offset: 2237 },
            end: { line: 50, column: 341, offset: 2239 }
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
                start: { line: 50, column: 342, offset: 2240 },
                end: { line: 50, column: 348, offset: 2246 }
              }
            }
          ],
          position: {
            start: { line: 50, column: 341, offset: 2239 },
            end: { line: 50, column: 406, offset: 2304 }
          }
        },
        {
          type: 'text',
          value: ') object, can be considered an event target.',
          position: {
            start: { line: 50, column: 406, offset: 2304 },
            end: { line: 50, column: 450, offset: 2348 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 1899 },
        end: { line: 50, column: 450, offset: 2348 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An event (',
          position: {
            start: { line: 52, column: 1, offset: 2350 },
            end: { line: 52, column: 11, offset: 2360 }
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
                start: { line: 52, column: 12, offset: 2361 },
                end: { line: 52, column: 17, offset: 2366 }
              }
            }
          ],
          position: {
            start: { line: 52, column: 11, offset: 2360 },
            end: { line: 52, column: 74, offset: 2423 }
          }
        },
        {
          type: 'text',
          value: ') is an object that represents an asynchronous occurrence in relation to an event target. For example, a "click" event can occur on a button event target, and a "change" event can occur on an input event target.',
          position: {
            start: { line: 52, column: 74, offset: 2423 },
            end: { line: 52, column: 285, offset: 2634 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2350 },
        end: { line: 52, column: 285, offset: 2634 }
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
        start: { line: 54, column: 1, offset: 2636 },
        end: { line: 66, column: 4, offset: 2942 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'To listen for an event on an event target, you would call the ',
          position: {
            start: { line: 68, column: 1, offset: 2944 },
            end: { line: 68, column: 63, offset: 3006 }
          }
        },
        {
          type: 'inlineCode',
          value: 'addEventListener',
          position: {
            start: { line: 68, column: 63, offset: 3006 },
            end: { line: 68, column: 81, offset: 3024 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and an event listener callback function. You can add multiple event listeners for the same event, and remove event listeners with ',
          position: {
            start: { line: 68, column: 81, offset: 3024 },
            end: { line: 68, column: 259, offset: 3202 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 259, offset: 3202 },
            end: { line: 68, column: 280, offset: 3223 }
          }
        },
        {
          type: 'text',
          value: '. To remove an event listener, you would call the ',
          position: {
            start: { line: 68, column: 280, offset: 3223 },
            end: { line: 68, column: 330, offset: 3273 }
          }
        },
        {
          type: 'inlineCode',
          value: 'removeEventListener',
          position: {
            start: { line: 68, column: 330, offset: 3273 },
            end: { line: 68, column: 351, offset: 3294 }
          }
        },
        {
          type: 'text',
          value: ' method of the event target with the event name and the event listener callback function to remove.',
          position: {
            start: { line: 68, column: 351, offset: 3294 },
            end: { line: 68, column: 450, offset: 3393 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2944 },
        end: { line: 68, column: 450, offset: 3393 }
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
        start: { line: 70, column: 1, offset: 3395 },
        end: { line: 90, column: 4, offset: 3961 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some common events:',
          position: {
            start: { line: 92, column: 1, offset: 3963 },
            end: { line: 92, column: 20, offset: 3982 }
          }
        }
      ],
      position: {
        start: { line: 92, column: 1, offset: 3963 },
        end: { line: 92, column: 20, offset: 3982 }
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
                        start: { line: 93, column: 6, offset: 3988 },
                        end: { line: 93, column: 25, offset: 4007 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 93, column: 5, offset: 3987 },
                    end: { line: 93, column: 96, offset: 4078 }
                  }
                }
              ],
              position: {
                start: { line: 93, column: 5, offset: 3987 },
                end: { line: 93, column: 96, offset: 4078 }
              }
            }
          ],
          position: {
            start: { line: 93, column: 3, offset: 3985 },
            end: { line: 93, column: 96, offset: 4078 }
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
                        start: { line: 94, column: 6, offset: 4084 },
                        end: { line: 94, column: 26, offset: 4104 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 94, column: 5, offset: 4083 },
                    end: { line: 94, column: 50, offset: 4128 }
                  }
                }
              ],
              position: {
                start: { line: 94, column: 5, offset: 4083 },
                end: { line: 94, column: 50, offset: 4128 }
              }
            }
          ],
          position: {
            start: { line: 94, column: 3, offset: 4081 },
            end: { line: 94, column: 50, offset: 4128 }
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
                        start: { line: 95, column: 6, offset: 4134 },
                        end: { line: 95, column: 27, offset: 4155 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 95, column: 5, offset: 4133 },
                    end: { line: 95, column: 52, offset: 4180 }
                  }
                }
              ],
              position: {
                start: { line: 95, column: 5, offset: 4133 },
                end: { line: 95, column: 52, offset: 4180 }
              }
            }
          ],
          position: {
            start: { line: 95, column: 3, offset: 4131 },
            end: { line: 95, column: 52, offset: 4180 }
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
                        start: { line: 96, column: 6, offset: 4186 },
                        end: { line: 96, column: 25, offset: 4205 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 96, column: 5, offset: 4185 },
                    end: { line: 96, column: 48, offset: 4228 }
                  }
                }
              ],
              position: {
                start: { line: 96, column: 5, offset: 4185 },
                end: { line: 96, column: 48, offset: 4228 }
              }
            }
          ],
          position: {
            start: { line: 96, column: 3, offset: 4183 },
            end: { line: 96, column: 48, offset: 4228 }
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
                        start: { line: 97, column: 6, offset: 4234 },
                        end: { line: 97, column: 29, offset: 4257 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 97, column: 5, offset: 4233 },
                    end: { line: 97, column: 56, offset: 4284 }
                  }
                }
              ],
              position: {
                start: { line: 97, column: 5, offset: 4233 },
                end: { line: 97, column: 56, offset: 4284 }
              }
            }
          ],
          position: {
            start: { line: 97, column: 3, offset: 4231 },
            end: { line: 97, column: 56, offset: 4284 }
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
                        start: { line: 98, column: 6, offset: 4290 },
                        end: { line: 98, column: 25, offset: 4309 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 98, column: 5, offset: 4289 },
                    end: { line: 98, column: 48, offset: 4332 }
                  }
                }
              ],
              position: {
                start: { line: 98, column: 5, offset: 4289 },
                end: { line: 98, column: 48, offset: 4332 }
              }
            }
          ],
          position: {
            start: { line: 98, column: 3, offset: 4287 },
            end: { line: 98, column: 48, offset: 4332 }
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
                        start: { line: 99, column: 6, offset: 4338 },
                        end: { line: 99, column: 26, offset: 4358 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 99, column: 5, offset: 4337 },
                    end: { line: 99, column: 50, offset: 4382 }
                  }
                }
              ],
              position: {
                start: { line: 99, column: 5, offset: 4337 },
                end: { line: 99, column: 50, offset: 4382 }
              }
            }
          ],
          position: {
            start: { line: 99, column: 3, offset: 4335 },
            end: { line: 99, column: 50, offset: 4382 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 3, offset: 3985 },
        end: { line: 99, column: 50, offset: 4382 }
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
            start: { line: 101, column: 4, offset: 4387 },
            end: { line: 101, column: 34, offset: 4417 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 4384 },
        end: { line: 101, column: 34, offset: 4417 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 102, column: 1, offset: 4418 }
  }
}