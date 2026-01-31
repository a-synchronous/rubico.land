export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Asynchronous Sources\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-21\n' +
        'updated: 2026-01-31\n' +
        'path: /blog/a-synchronous-functional-programming-asynchronous-sources\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming\n' +
        'image: /assets/HTTP_logo.png',
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
          value: 'Welcome to Asynchronous Sources in [A]synchronous Functional Programming. In this article we will discuss asynchronous sources in [A]synchronous Functional Programming.',
          position: {
            start: { line: 11, column: 1, offset: 338 },
            end: { line: 11, column: 169, offset: 506 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 338 },
        end: { line: 11, column: 169, offset: 506 }
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
            start: { line: 13, column: 4, offset: 511 },
            end: { line: 13, column: 24, offset: 531 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 508 },
        end: { line: 13, column: 24, offset: 531 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `An "asynchronous source" or "stream" is a connection, producer, origin, or target of events, messages, or data. An asynchronous source flows independently of the main program's execution flow.`,
          position: {
            start: { line: 15, column: 1, offset: 533 },
            end: { line: 15, column: 193, offset: 725 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 533 },
        end: { line: 15, column: 193, offset: 725 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below are examples of asynchronous sources that occur on the ',
          position: {
            start: { line: 17, column: 1, offset: 727 },
            end: { line: 17, column: 62, offset: 788 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web',
          children: [
            {
              type: 'text',
              value: 'web',
              position: {
                start: { line: 17, column: 63, offset: 789 },
                end: { line: 17, column: 66, offset: 792 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 62, offset: 788 },
            end: { line: 17, column: 133, offset: 859 }
          }
        },
        {
          type: 'text',
          value: ' and in ',
          position: {
            start: { line: 17, column: 133, offset: 859 },
            end: { line: 17, column: 141, offset: 867 }
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
                start: { line: 17, column: 142, offset: 868 },
                end: { line: 17, column: 148, offset: 874 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 141, offset: 867 },
            end: { line: 17, column: 172, offset: 898 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 17, column: 172, offset: 898 },
            end: { line: 17, column: 173, offset: 899 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 727 },
        end: { line: 17, column: 173, offset: 899 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: '// EventTarget (Web)\n' +
        "const myButtonElement = document.getElementById('#my-button')\n" +
        "myButtonElement.addEventListener('click', event => {\n" +
        '  // event is a click event of the asynchronous source myButtonElement\n' +
        '})\n' +
        '\n' +
        '// WebSocket (Web)\n' +
        "const myWebSocket = new WebSocket('ws://localhost:8080/')\n" +
        "myWebSocket.addEventListener('message', event => {\n" +
        '  // event is a message event of the asynchronous source myWebSocket\n' +
        '})\n' +
        '\n' +
        '// stream.Readable (NodeJS)\n' +
        "const fs = require('fs')\n" +
        "const myReadableStream = fs.createReadStream('/path/to/file')\n" +
        "myReadableStream.on('data', chunk => {\n" +
        '  // chunk is a string or Buffer of the asynchronous source myReadableStream\n' +
        '})',
      position: {
        start: { line: 19, column: 1, offset: 901 },
        end: { line: 38, column: 4, offset: 1564 }
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
            start: { line: 40, column: 4, offset: 1569 },
            end: { line: 40, column: 35, offset: 1600 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1566 },
        end: { line: 40, column: 35, offset: 1600 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'On the web, asynchronous sources can be event targets and WebSocket connections.',
          position: {
            start: { line: 42, column: 1, offset: 1602 },
            end: { line: 42, column: 81, offset: 1682 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 1602 },
        end: { line: 42, column: 81, offset: 1682 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Event',
          position: {
            start: { line: 44, column: 5, offset: 1688 },
            end: { line: 44, column: 10, offset: 1693 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 1684 },
        end: { line: 44, column: 10, offset: 1693 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An "event" (',
          position: {
            start: { line: 46, column: 1, offset: 1695 },
            end: { line: 46, column: 13, offset: 1707 }
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
                start: { line: 46, column: 14, offset: 1708 },
                end: { line: 46, column: 19, offset: 1713 }
              }
            }
          ],
          position: {
            start: { line: 46, column: 13, offset: 1707 },
            end: { line: 46, column: 76, offset: 1770 }
          }
        },
        {
          type: 'text',
          value: ') is an object that represents an asynchronous occurence in relation to an ',
          position: {
            start: { line: 46, column: 76, offset: 1770 },
            end: { line: 46, column: 151, offset: 1845 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '#event-target',
          children: [
            {
              type: 'text',
              value: 'event target',
              position: {
                start: { line: 46, column: 152, offset: 1846 },
                end: { line: 46, column: 164, offset: 1858 }
              }
            }
          ],
          position: {
            start: { line: 46, column: 151, offset: 1845 },
            end: { line: 46, column: 180, offset: 1874 }
          }
        },
        {
          type: 'text',
          value: '. For example a "click" event can occur on a "button" event target.',
          position: {
            start: { line: 46, column: 180, offset: 1874 },
            end: { line: 46, column: 247, offset: 1941 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 1695 },
        end: { line: 46, column: 247, offset: 1941 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type Event = {\n' +
        '  bubbles: boolean,\n' +
        '  cancelable: boolean,\n' +
        '  composed: boolean,\n' +
        '  currentTarget: EventTarget,\n' +
        '  defaultPrevented: boolean,\n' +
        '  eventPhase: number,\n' +
        '  isTrusted: boolean,\n' +
        '  srcElement: EventTarget,\n' +
        '  target: EventTarget,\n' +
        '  timeStamp: number,\n' +
        '  type: string,\n' +
        '}',
      position: {
        start: { line: 48, column: 1, offset: 1943 },
        end: { line: 62, column: 4, offset: 2246 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event bubbles',
          position: {
            start: { line: 64, column: 6, offset: 2253 },
            end: { line: 64, column: 19, offset: 2266 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 2248 },
        end: { line: 64, column: 19, offset: 2266 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event cancelable',
          position: {
            start: { line: 65, column: 6, offset: 2272 },
            end: { line: 65, column: 22, offset: 2288 }
          }
        }
      ],
      position: {
        start: { line: 65, column: 1, offset: 2267 },
        end: { line: 65, column: 22, offset: 2288 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event composed',
          position: {
            start: { line: 66, column: 6, offset: 2294 },
            end: { line: 66, column: 20, offset: 2308 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 2289 },
        end: { line: 66, column: 20, offset: 2308 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event currentTarget',
          position: {
            start: { line: 67, column: 6, offset: 2314 },
            end: { line: 67, column: 25, offset: 2333 }
          }
        }
      ],
      position: {
        start: { line: 67, column: 1, offset: 2309 },
        end: { line: 67, column: 25, offset: 2333 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event defaultPrevented',
          position: {
            start: { line: 68, column: 6, offset: 2339 },
            end: { line: 68, column: 28, offset: 2361 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 2334 },
        end: { line: 68, column: 28, offset: 2361 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event eventPhase',
          position: {
            start: { line: 69, column: 6, offset: 2367 },
            end: { line: 69, column: 22, offset: 2383 }
          }
        }
      ],
      position: {
        start: { line: 69, column: 1, offset: 2362 },
        end: { line: 69, column: 22, offset: 2383 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event isTrusted',
          position: {
            start: { line: 70, column: 6, offset: 2389 },
            end: { line: 70, column: 21, offset: 2404 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 2384 },
        end: { line: 70, column: 21, offset: 2404 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event srcElement',
          position: {
            start: { line: 71, column: 6, offset: 2410 },
            end: { line: 71, column: 22, offset: 2426 }
          }
        }
      ],
      position: {
        start: { line: 71, column: 1, offset: 2405 },
        end: { line: 71, column: 22, offset: 2426 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event target',
          position: {
            start: { line: 72, column: 6, offset: 2432 },
            end: { line: 72, column: 18, offset: 2444 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 2427 },
        end: { line: 72, column: 18, offset: 2444 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event timeStamp',
          position: {
            start: { line: 73, column: 6, offset: 2450 },
            end: { line: 73, column: 21, offset: 2465 }
          }
        }
      ],
      position: {
        start: { line: 73, column: 1, offset: 2445 },
        end: { line: 73, column: 21, offset: 2465 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Event type',
          position: {
            start: { line: 74, column: 6, offset: 2471 },
            end: { line: 74, column: 16, offset: 2481 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 2466 },
        end: { line: 74, column: 16, offset: 2481 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'https://developer.mozilla.org/en-US/docs/Web/API/Event',
          position: {
            start: { line: 76, column: 1, offset: 2483 },
            end: { line: 76, column: 55, offset: 2537 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 2483 },
        end: { line: 76, column: 55, offset: 2537 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Event Types',
          position: {
            start: { line: 78, column: 5, offset: 2543 },
            end: { line: 78, column: 16, offset: 2554 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 2539 },
        end: { line: 78, column: 16, offset: 2554 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'click event',
          position: {
            start: { line: 80, column: 6, offset: 2561 },
            end: { line: 80, column: 17, offset: 2572 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 2556 },
        end: { line: 80, column: 17, offset: 2572 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Fires when mouse's primary button is pressed and released while pointer is inside the event target. For mobile devices, fires when a touch gesture is performed on the element.",
          position: {
            start: { line: 81, column: 1, offset: 2573 },
            end: { line: 81, column: 176, offset: 2748 }
          }
        }
      ],
      position: {
        start: { line: 81, column: 1, offset: 2573 },
        end: { line: 81, column: 176, offset: 2748 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type EventTarget = Element|Document|Window\n' +
        '\n' +
        'type Event = {\n' +
        '  target: EventTarget,\n' +
        '}\n' +
        '\n' +
        "eventTarget.addEventListener('click', event Event)",
      position: {
        start: { line: 83, column: 1, offset: 2750 },
        end: { line: 91, column: 4, offset: 2918 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'dblclick event',
          position: {
            start: { line: 93, column: 6, offset: 2925 },
            end: { line: 93, column: 20, offset: 2939 }
          }
        }
      ],
      position: {
        start: { line: 93, column: 1, offset: 2920 },
        end: { line: 93, column: 20, offset: 2939 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "mouse's primary button is double-clicked (rapidly clicked twice) while pointer is inside the event target.",
          position: {
            start: { line: 94, column: 1, offset: 2940 },
            end: { line: 94, column: 107, offset: 3046 }
          }
        }
      ],
      position: {
        start: { line: 94, column: 1, offset: 2940 },
        end: { line: 94, column: 107, offset: 3046 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'mousedown event',
          position: {
            start: { line: 96, column: 6, offset: 3053 },
            end: { line: 96, column: 21, offset: 3068 }
          }
        }
      ],
      position: {
        start: { line: 96, column: 1, offset: 3048 },
        end: { line: 96, column: 21, offset: 3068 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'mouse button is pressed over event target',
          position: {
            start: { line: 97, column: 1, offset: 3069 },
            end: { line: 97, column: 42, offset: 3110 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 3069 },
        end: { line: 97, column: 42, offset: 3110 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'mouseup',
          position: {
            start: { line: 99, column: 1, offset: 3112 },
            end: { line: 99, column: 10, offset: 3121 }
          }
        },
        {
          type: 'text',
          value: ' - mouse button is released over event target\n',
          position: {
            start: { line: 99, column: 10, offset: 3121 },
            end: { line: 100, column: 1, offset: 3167 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mousemove',
          position: {
            start: { line: 100, column: 1, offset: 3167 },
            end: { line: 100, column: 12, offset: 3178 }
          }
        },
        {
          type: 'text',
          value: ' - pointer is moved while over event target\n',
          position: {
            start: { line: 100, column: 12, offset: 3178 },
            end: { line: 101, column: 1, offset: 3222 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mouseover',
          position: {
            start: { line: 101, column: 1, offset: 3222 },
            end: { line: 101, column: 12, offset: 3233 }
          }
        },
        {
          type: 'text',
          value: ' - pointer\n',
          position: {
            start: { line: 101, column: 12, offset: 3233 },
            end: { line: 102, column: 1, offset: 3245 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mouseout',
          position: {
            start: { line: 102, column: 1, offset: 3245 },
            end: { line: 102, column: 11, offset: 3255 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 102, column: 11, offset: 3255 },
            end: { line: 103, column: 1, offset: 3256 }
          }
        },
        {
          type: 'inlineCode',
          value: 'contextmenu',
          position: {
            start: { line: 103, column: 1, offset: 3256 },
            end: { line: 103, column: 14, offset: 3269 }
          }
        },
        {
          type: 'text',
          value: '\n',
          position: {
            start: { line: 103, column: 14, offset: 3269 },
            end: { line: 104, column: 1, offset: 3270 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wheel',
          position: {
            start: { line: 104, column: 1, offset: 3270 },
            end: { line: 104, column: 8, offset: 3277 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 3112 },
        end: { line: 104, column: 8, offset: 3277 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Event Target',
          position: {
            start: { line: 106, column: 5, offset: 3283 },
            end: { line: 106, column: 17, offset: 3295 }
          }
        }
      ],
      position: {
        start: { line: 106, column: 1, offset: 3279 },
        end: { line: 106, column: 17, offset: 3295 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An "event target" ',
          position: {
            start: { line: 108, column: 1, offset: 3297 },
            end: { line: 108, column: 19, offset: 3315 }
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
                start: { line: 108, column: 20, offset: 3316 },
                end: { line: 108, column: 31, offset: 3327 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 19, offset: 3315 },
            end: { line: 108, column: 94, offset: 3390 }
          }
        },
        {
          type: 'text',
          value: ' is an object that can receive ',
          position: {
            start: { line: 108, column: 94, offset: 3390 },
            end: { line: 108, column: 125, offset: 3421 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '#event',
          children: [
            {
              type: 'text',
              value: 'events',
              position: {
                start: { line: 108, column: 126, offset: 3422 },
                end: { line: 108, column: 132, offset: 3428 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 125, offset: 3421 },
            end: { line: 108, column: 141, offset: 3437 }
          }
        },
        {
          type: 'text',
          value: '. Any ',
          position: {
            start: { line: 108, column: 141, offset: 3437 },
            end: { line: 108, column: 147, offset: 3443 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
          children: [
            {
              type: 'text',
              value: 'DOM',
              position: {
                start: { line: 108, column: 148, offset: 3444 },
                end: { line: 108, column: 151, offset: 3447 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 147, offset: 3443 },
            end: { line: 108, column: 237, offset: 3533 }
          }
        },
        {
          type: 'text',
          value: ' element (',
          position: {
            start: { line: 108, column: 237, offset: 3533 },
            end: { line: 108, column: 247, offset: 3543 }
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
                start: { line: 108, column: 248, offset: 3544 },
                end: { line: 108, column: 255, offset: 3551 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 247, offset: 3543 },
            end: { line: 108, column: 314, offset: 3610 }
          }
        },
        {
          type: 'text',
          value: '), the ',
          position: {
            start: { line: 108, column: 314, offset: 3610 },
            end: { line: 108, column: 321, offset: 3617 }
          }
        },
        {
          type: 'inlineCode',
          value: 'document',
          position: {
            start: { line: 108, column: 321, offset: 3617 },
            end: { line: 108, column: 331, offset: 3627 }
          }
        },
        {
          type: 'text',
          value: ' object (',
          position: {
            start: { line: 108, column: 331, offset: 3627 },
            end: { line: 108, column: 340, offset: 3636 }
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
                start: { line: 108, column: 341, offset: 3637 },
                end: { line: 108, column: 349, offset: 3645 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 340, offset: 3636 },
            end: { line: 108, column: 409, offset: 3705 }
          }
        },
        {
          type: 'text',
          value: '), and global ',
          position: {
            start: { line: 108, column: 409, offset: 3705 },
            end: { line: 108, column: 423, offset: 3719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'window',
          position: {
            start: { line: 108, column: 423, offset: 3719 },
            end: { line: 108, column: 431, offset: 3727 }
          }
        },
        {
          type: 'text',
          value: ' object (',
          position: {
            start: { line: 108, column: 431, offset: 3727 },
            end: { line: 108, column: 440, offset: 3736 }
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
                start: { line: 108, column: 441, offset: 3737 },
                end: { line: 108, column: 447, offset: 3743 }
              }
            }
          ],
          position: {
            start: { line: 108, column: 440, offset: 3736 },
            end: { line: 108, column: 505, offset: 3801 }
          }
        },
        {
          type: 'text',
          value: ') can be considered event targets.',
          position: {
            start: { line: 108, column: 505, offset: 3801 },
            end: { line: 108, column: 539, offset: 3835 }
          }
        }
      ],
      position: {
        start: { line: 108, column: 1, offset: 3297 },
        end: { line: 108, column: 539, offset: 3835 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type AbortSignal = {\n' +
        '  aborted: boolean,\n' +
        '  reason: string,\n' +
        '}\n' +
        '\n' +
        'type EventListener = (event Event)=>()\n' +
        '\n' +
        'type EventTarget = {\n' +
        '  addEventListener: (eventType string, listener EventListener, optionsOrUseCapture {\n' +
        '    capture?: boolean,\n' +
        '    once?: boolean,\n' +
        '    passive?: boolean,\n' +
        '    signal?: AbortSignal,\n' +
        '  }|boolean)=>(),\n' +
        '\n' +
        '  removeEventListener: (eventType string, listener EventListener, optionsOrUseCapture {\n' +
        '    capture?: boolean,\n' +
        '  }|boolean)=>(),\n' +
        '\n' +
        '  dispatchEvent: (event Event)=>boolean,\n' +
        '}',
      position: {
        start: { line: 110, column: 1, offset: 3837 },
        end: { line: 132, column: 4, offset: 4361 }
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
            start: { line: 134, column: 4, offset: 4366 },
            end: { line: 134, column: 34, offset: 4396 }
          }
        }
      ],
      position: {
        start: { line: 134, column: 1, offset: 4363 },
        end: { line: 134, column: 34, offset: 4396 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 135, column: 1, offset: 4397 }
  }
}