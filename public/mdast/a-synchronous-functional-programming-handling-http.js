export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-16\n' +
        'lastUpdated: 2025-06-16\n' +
        'path: /blog/a-synchronous-functional-programming-handling-http\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming\n' +
        'image: /assets/HTTP_logo.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 326 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 328 },
            end: { line: 11, column: 202, offset: 529 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 328 },
        end: { line: 11, column: 202, offset: 529 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP',
          position: {
            start: { line: 13, column: 4, offset: 534 },
            end: { line: 13, column: 8, offset: 538 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 531 },
        end: { line: 13, column: 8, offset: 538 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP (Hypertext Transfer Protocol) is a ',
          position: {
            start: { line: 15, column: 1, offset: 540 },
            end: { line: 15, column: 41, offset: 580 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/',
          children: [
            {
              type: 'text',
              value: 'protocol',
              position: {
                start: { line: 15, column: 42, offset: 581 },
                end: { line: 15, column: 50, offset: 589 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 41, offset: 580 },
            end: { line: 15, column: 122, offset: 661 }
          }
        },
        {
          type: 'text',
          value: ' by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.',
          position: {
            start: { line: 15, column: 122, offset: 661 },
            end: { line: 15, column: 460, offset: 999 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 540 },
        end: { line: 15, column: 460, offset: 999 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP adheres to the ',
          position: {
            start: { line: 17, column: 1, offset: 1001 },
            end: { line: 17, column: 21, offset: 1021 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.akamai.com/glossary/what-is-the-client-server-model',
          children: [
            {
              type: 'text',
              value: 'client-server model',
              position: {
                start: { line: 17, column: 22, offset: 1022 },
                end: { line: 17, column: 41, offset: 1041 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 21, offset: 1021 },
            end: { line: 17, column: 107, offset: 1107 }
          }
        },
        {
          type: 'text',
          value: ' where a client sends a request to a server and the server sends a response back to the client.',
          position: {
            start: { line: 17, column: 107, offset: 1107 },
            end: { line: 17, column: 202, offset: 1202 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 1001 },
        end: { line: 17, column: 202, offset: 1202 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/http-diagram.jpg',
          alt: 'http-diagram.jpg',
          position: {
            start: { line: 19, column: 1, offset: 1204 },
            end: { line: 19, column: 46, offset: 1249 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1204 },
        end: { line: 19, column: 46, offset: 1249 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1251 },
            end: { line: 21, column: 83, offset: 1333 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1251 },
        end: { line: 21, column: 83, offset: 1333 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'URL',
          position: {
            start: { line: 23, column: 4, offset: 1338 },
            end: { line: 23, column: 7, offset: 1341 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1335 },
        end: { line: 23, column: 7, offset: 1341 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet.',
          position: {
            start: { line: 25, column: 1, offset: 1343 },
            end: { line: 25, column: 117, offset: 1459 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1343 },
        end: { line: 25, column: 117, offset: 1459 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-diagram.jpg',
          alt: 'url-structure-diagram.jpg',
          position: {
            start: { line: 27, column: 1, offset: 1461 },
            end: { line: 27, column: 64, offset: 1524 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1461 },
        end: { line: 27, column: 64, offset: 1524 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1526 },
            end: { line: 29, column: 59, offset: 1584 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1526 },
        end: { line: 29, column: 59, offset: 1584 }
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
                  value: 'scheme',
                  position: {
                    start: { line: 30, column: 4, offset: 1588 },
                    end: { line: 30, column: 10, offset: 1594 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1588 },
                end: { line: 30, column: 10, offset: 1594 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1586 },
            end: { line: 30, column: 10, offset: 1594 }
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
                  value: 'domain name',
                  position: {
                    start: { line: 31, column: 4, offset: 1598 },
                    end: { line: 31, column: 15, offset: 1609 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1598 },
                end: { line: 31, column: 15, offset: 1609 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1596 },
            end: { line: 31, column: 15, offset: 1609 }
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
                  value: 'port',
                  position: {
                    start: { line: 32, column: 4, offset: 1613 },
                    end: { line: 32, column: 8, offset: 1617 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1613 },
                end: { line: 32, column: 8, offset: 1617 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1611 },
            end: { line: 32, column: 8, offset: 1617 }
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
                  value: 'authority',
                  position: {
                    start: { line: 33, column: 4, offset: 1621 },
                    end: { line: 33, column: 13, offset: 1630 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1621 },
                end: { line: 33, column: 13, offset: 1630 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1619 },
            end: { line: 33, column: 13, offset: 1630 }
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
                  value: 'path',
                  position: {
                    start: { line: 34, column: 4, offset: 1634 },
                    end: { line: 34, column: 8, offset: 1638 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1634 },
                end: { line: 34, column: 8, offset: 1638 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1632 },
            end: { line: 34, column: 8, offset: 1638 }
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
                  value: 'query parameters',
                  position: {
                    start: { line: 35, column: 4, offset: 1642 },
                    end: { line: 35, column: 20, offset: 1658 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1642 },
                end: { line: 35, column: 20, offset: 1658 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1640 },
            end: { line: 35, column: 20, offset: 1658 }
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
                  value: 'anchor',
                  position: {
                    start: { line: 36, column: 4, offset: 1662 },
                    end: { line: 36, column: 10, offset: 1668 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1662 },
                end: { line: 36, column: 10, offset: 1668 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1660 },
            end: { line: 36, column: 10, offset: 1668 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1586 },
        end: { line: 36, column: 10, offset: 1668 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Scheme',
          position: {
            start: { line: 38, column: 5, offset: 1674 },
            end: { line: 38, column: 11, offset: 1680 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1670 },
        end: { line: 38, column: 11, offset: 1680 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-scheme-diagram.jpg',
          alt: 'url-structure-scheme-diagram.jpg',
          position: {
            start: { line: 40, column: 1, offset: 1682 },
            end: { line: 40, column: 78, offset: 1759 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1682 },
        end: { line: 40, column: 78, offset: 1759 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 1761 },
            end: { line: 42, column: 132, offset: 1892 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 1892 },
            end: { line: 42, column: 138, offset: 1898 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 1898 },
            end: { line: 42, column: 142, offset: 1902 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 1902 },
            end: { line: 42, column: 149, offset: 1909 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 1909 },
            end: { line: 42, column: 173, offset: 1933 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 1933 },
            end: { line: 42, column: 177, offset: 1937 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 1937 },
            end: { line: 42, column: 182, offset: 1942 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 1942 },
            end: { line: 42, column: 187, offset: 1947 }
          }
        },
        {
          type: 'text',
          value: ' for the WebSocket protocol, ',
          position: {
            start: { line: 42, column: 187, offset: 1947 },
            end: { line: 42, column: 216, offset: 1976 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 216, offset: 1976 },
            end: { line: 42, column: 224, offset: 1984 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 224, offset: 1984 },
            end: { line: 42, column: 257, offset: 2017 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 257, offset: 2017 },
            end: { line: 42, column: 263, offset: 2023 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 263, offset: 2023 },
            end: { line: 42, column: 289, offset: 2049 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 1761 },
        end: { line: 42, column: 289, offset: 2049 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Domain Name',
          position: {
            start: { line: 44, column: 5, offset: 2055 },
            end: { line: 44, column: 16, offset: 2066 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2051 },
        end: { line: 44, column: 16, offset: 2066 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-domain-name-diagram.jpg',
          alt: 'url-structure-domain-name-diagram.jpg',
          position: {
            start: { line: 46, column: 1, offset: 2068 },
            end: { line: 46, column: 88, offset: 2155 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2068 },
        end: { line: 46, column: 88, offset: 2155 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2157 },
            end: { line: 48, column: 166, offset: 2322 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://www.cloudflare.com/learning/dns/what-is-dns/',
          children: [
            {
              type: 'text',
              value: 'Domain Name System (DNS)',
              position: {
                start: { line: 48, column: 167, offset: 2323 },
                end: { line: 48, column: 191, offset: 2347 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2322 },
            end: { line: 48, column: 246, offset: 2402 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2402 },
            end: { line: 48, column: 329, offset: 2485 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2157 },
        end: { line: 48, column: 329, offset: 2485 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Port',
          position: {
            start: { line: 50, column: 5, offset: 2491 },
            end: { line: 50, column: 9, offset: 2495 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2487 },
        end: { line: 50, column: 9, offset: 2495 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-port-diagram.jpg',
          alt: 'url-structure-port-diagram.jpg',
          position: {
            start: { line: 52, column: 1, offset: 2497 },
            end: { line: 52, column: 74, offset: 2570 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2497 },
        end: { line: 52, column: 74, offset: 2570 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2572 },
            end: { line: 54, column: 334, offset: 2905 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2572 },
        end: { line: 54, column: 334, offset: 2905 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Authority',
          position: {
            start: { line: 56, column: 5, offset: 2911 },
            end: { line: 56, column: 14, offset: 2920 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 2907 },
        end: { line: 56, column: 14, offset: 2920 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-authority-diagram.jpg',
          alt: 'url-structure-authority-diagram.jpg',
          position: {
            start: { line: 58, column: 1, offset: 2922 },
            end: { line: 58, column: 84, offset: 3005 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 2922 },
        end: { line: 58, column: 84, offset: 3005 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3007 },
            end: { line: 60, column: 93, offset: 3099 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3007 },
        end: { line: 60, column: 93, offset: 3099 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Path',
          position: {
            start: { line: 62, column: 5, offset: 3105 },
            end: { line: 62, column: 9, offset: 3109 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3101 },
        end: { line: 62, column: 9, offset: 3109 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-path-diagram.jpg',
          alt: 'url-structure-path-diagram.jpg',
          position: {
            start: { line: 64, column: 1, offset: 3111 },
            end: { line: 64, column: 74, offset: 3184 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3111 },
        end: { line: 64, column: 74, offset: 3184 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3186 },
            end: { line: 66, column: 121, offset: 3306 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3186 },
        end: { line: 66, column: 121, offset: 3306 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Query Parameters',
          position: {
            start: { line: 68, column: 5, offset: 3312 },
            end: { line: 68, column: 21, offset: 3328 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3308 },
        end: { line: 68, column: 21, offset: 3328 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-query-parameters-diagram.jpg',
          alt: 'url-structure-query-parameters-diagram.jpg',
          position: {
            start: { line: 70, column: 1, offset: 3330 },
            end: { line: 70, column: 98, offset: 3427 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3330 },
        end: { line: 70, column: 98, offset: 3427 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3429 },
            end: { line: 72, column: 78, offset: 3506 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3506 },
            end: { line: 72, column: 81, offset: 3509 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3509 },
            end: { line: 72, column: 154, offset: 3582 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3429 },
        end: { line: 72, column: 154, offset: 3582 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Anchor',
          position: {
            start: { line: 74, column: 5, offset: 3588 },
            end: { line: 74, column: 11, offset: 3594 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3584 },
        end: { line: 74, column: 11, offset: 3594 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'image',
          title: null,
          url: '/assets/url-structure-anchor-diagram.jpg',
          alt: 'url-structure-anchor-diagram.jpg',
          position: {
            start: { line: 76, column: 1, offset: 3596 },
            end: { line: 76, column: 78, offset: 3673 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3596 },
        end: { line: 76, column: 78, offset: 3673 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 3675 },
            end: { line: 78, column: 330, offset: 4004 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3675 },
        end: { line: 78, column: 330, offset: 4004 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP Client',
          position: {
            start: { line: 80, column: 4, offset: 4009 },
            end: { line: 80, column: 15, offset: 4020 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4006 },
        end: { line: 80, column: 15, offset: 4020 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4022 },
            end: { line: 82, column: 36, offset: 4057 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://en.wikipedia.org/wiki/Application_software',
          children: [
            {
              type: 'text',
              value: 'software application',
              position: {
                start: { line: 82, column: 37, offset: 4058 },
                end: { line: 82, column: 57, offset: 4078 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4057 },
            end: { line: 82, column: 110, offset: 4131 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4131 },
            end: { line: 82, column: 318, offset: 4339 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4339 },
            end: { line: 82, column: 325, offset: 4346 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4346 },
            end: { line: 82, column: 373, offset: 4394 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4394 },
            end: { line: 82, column: 419, offset: 4440 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4440 },
            end: { line: 82, column: 420, offset: 4441 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4022 },
        end: { line: 82, column: 420, offset: 4441 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: '[playground]',
      value: "const url = 'https://jsonplaceholder.typicode.com/todos/1'\n" +
        '\n' +
        'const response = await fetch(url)\n' +
        '\n' +
        "console.log('HTTP Response Status:', response.status)\n" +
        "console.log('HTTP Response Headers:', Object.fromEntries(response.headers))\n" +
        '\n' +
        'const data = await response.json()\n' +
        '\n' +
        "console.log('HTTP Response Body:', data)",
      position: {
        start: { line: 84, column: 1, offset: 4443 },
        end: { line: 95, column: 4, offset: 4776 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP Request',
          position: {
            start: { line: 97, column: 4, offset: 4781 },
            end: { line: 97, column: 16, offset: 4793 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4778 },
        end: { line: 97, column: 16, offset: 4793 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server.',
          position: {
            start: { line: 99, column: 1, offset: 4795 },
            end: { line: 99, column: 94, offset: 4888 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 4795 },
        end: { line: 99, column: 94, offset: 4888 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request has the following properties:',
          position: {
            start: { line: 101, column: 1, offset: 4890 },
            end: { line: 101, column: 46, offset: 4935 }
          }
        }
      ],
      position: {
        start: { line: 101, column: 1, offset: 4890 },
        end: { line: 101, column: 46, offset: 4935 }
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
                  value: 'method',
                  position: {
                    start: { line: 102, column: 4, offset: 4939 },
                    end: { line: 102, column: 10, offset: 4945 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 4939 },
                end: { line: 102, column: 10, offset: 4945 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 4937 },
            end: { line: 102, column: 10, offset: 4945 }
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
                  value: 'url',
                  position: {
                    start: { line: 103, column: 4, offset: 4949 },
                    end: { line: 103, column: 7, offset: 4952 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 4949 },
                end: { line: 103, column: 7, offset: 4952 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 4947 },
            end: { line: 103, column: 7, offset: 4952 }
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
                  value: 'headers',
                  position: {
                    start: { line: 104, column: 4, offset: 4956 },
                    end: { line: 104, column: 11, offset: 4963 }
                  }
                }
              ],
              position: {
                start: { line: 104, column: 4, offset: 4956 },
                end: { line: 104, column: 11, offset: 4963 }
              }
            }
          ],
          position: {
            start: { line: 104, column: 2, offset: 4954 },
            end: { line: 104, column: 11, offset: 4963 }
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
                  value: 'body',
                  position: {
                    start: { line: 105, column: 4, offset: 4967 },
                    end: { line: 105, column: 8, offset: 4971 }
                  }
                }
              ],
              position: {
                start: { line: 105, column: 4, offset: 4967 },
                end: { line: 105, column: 8, offset: 4971 }
              }
            }
          ],
          position: {
            start: { line: 105, column: 2, offset: 4965 },
            end: { line: 105, column: 8, offset: 4971 }
          }
        }
      ],
      position: {
        start: { line: 102, column: 2, offset: 4937 },
        end: { line: 105, column: 8, offset: 4971 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method',
          position: {
            start: { line: 107, column: 5, offset: 4977 },
            end: { line: 107, column: 24, offset: 4996 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 4973 },
        end: { line: 107, column: 24, offset: 4996 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 109, column: 1, offset: 4998 },
            end: { line: 109, column: 191, offset: 5188 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 109, column: 191, offset: 5188 },
            end: { line: 109, column: 196, offset: 5193 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 196, offset: 5193 },
            end: { line: 109, column: 198, offset: 5195 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 109, column: 198, offset: 5195 },
            end: { line: 109, column: 204, offset: 5201 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 204, offset: 5201 },
            end: { line: 109, column: 206, offset: 5203 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 109, column: 206, offset: 5203 },
            end: { line: 109, column: 212, offset: 5209 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 212, offset: 5209 },
            end: { line: 109, column: 214, offset: 5211 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 109, column: 214, offset: 5211 },
            end: { line: 109, column: 219, offset: 5216 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 219, offset: 5216 },
            end: { line: 109, column: 221, offset: 5218 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 109, column: 221, offset: 5218 },
            end: { line: 109, column: 229, offset: 5226 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 229, offset: 5226 },
            end: { line: 109, column: 231, offset: 5228 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 109, column: 231, offset: 5228 },
            end: { line: 109, column: 240, offset: 5237 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 240, offset: 5237 },
            end: { line: 109, column: 242, offset: 5239 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 109, column: 242, offset: 5239 },
            end: { line: 109, column: 251, offset: 5248 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 251, offset: 5248 },
            end: { line: 109, column: 253, offset: 5250 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 109, column: 253, offset: 5250 },
            end: { line: 109, column: 260, offset: 5257 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 109, column: 260, offset: 5257 },
            end: { line: 109, column: 266, offset: 5263 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 109, column: 266, offset: 5263 },
            end: { line: 109, column: 273, offset: 5270 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 109, column: 273, offset: 5270 },
            end: { line: 109, column: 274, offset: 5271 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 4998 },
        end: { line: 109, column: 274, offset: 5271 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'GET',
          position: {
            start: { line: 111, column: 6, offset: 5278 },
            end: { line: 111, column: 9, offset: 5281 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5273 },
        end: { line: 111, column: 9, offset: 5281 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 113, column: 1, offset: 5283 },
            end: { line: 113, column: 3, offset: 5285 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 113, column: 3, offset: 5285 },
            end: { line: 113, column: 8, offset: 5290 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the specified resource. ',
          position: {
            start: { line: 113, column: 8, offset: 5290 },
            end: { line: 113, column: 102, offset: 5384 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 113, column: 102, offset: 5384 },
            end: { line: 113, column: 107, offset: 5389 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 113, column: 107, offset: 5389 },
            end: { line: 113, column: 121, offset: 5403 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP',
          children: [
            {
              type: 'text',
              value: 'safe',
              position: {
                start: { line: 113, column: 122, offset: 5404 },
                end: { line: 113, column: 126, offset: 5408 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 121, offset: 5403 },
            end: { line: 113, column: 188, offset: 5470 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 113, column: 188, offset: 5470 },
            end: { line: 113, column: 190, offset: 5472 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Idempotent',
          children: [
            {
              type: 'text',
              value: 'idempotent',
              position: {
                start: { line: 113, column: 191, offset: 5473 },
                end: { line: 113, column: 201, offset: 5483 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 190, offset: 5472 },
            end: { line: 113, column: 264, offset: 5546 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 113, column: 264, offset: 5546 },
            end: { line: 113, column: 270, offset: 5552 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Cacheable',
          children: [
            {
              type: 'text',
              value: 'cacheable',
              position: {
                start: { line: 113, column: 271, offset: 5553 },
                end: { line: 113, column: 280, offset: 5562 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 270, offset: 5552 },
            end: { line: 113, column: 342, offset: 5624 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 113, column: 342, offset: 5624 },
            end: { line: 113, column: 343, offset: 5625 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 5283 },
        end: { line: 113, column: 343, offset: 5625 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 6, offset: 5632 },
            end: { line: 115, column: 10, offset: 5636 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 5627 },
        end: { line: 115, column: 10, offset: 5636 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 117, column: 1, offset: 5638 },
            end: { line: 117, column: 3, offset: 5640 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 117, column: 3, offset: 5640 },
            end: { line: 117, column: 9, offset: 5646 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the specified resource. ',
          position: {
            start: { line: 117, column: 9, offset: 5646 },
            end: { line: 117, column: 93, offset: 5730 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 117, column: 93, offset: 5730 },
            end: { line: 117, column: 99, offset: 5736 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 117, column: 99, offset: 5736 },
            end: { line: 117, column: 145, offset: 5782 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5638 },
        end: { line: 117, column: 145, offset: 5782 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'POST',
          position: {
            start: { line: 119, column: 6, offset: 5789 },
            end: { line: 119, column: 10, offset: 5793 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 5784 },
        end: { line: 119, column: 10, offset: 5793 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 121, column: 1, offset: 5795 },
            end: { line: 121, column: 3, offset: 5797 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 121, column: 3, offset: 5797 },
            end: { line: 121, column: 9, offset: 5803 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create or update the specified resource. ',
          position: {
            start: { line: 121, column: 9, offset: 5803 },
            end: { line: 121, column: 103, offset: 5897 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 121, column: 103, offset: 5897 },
            end: { line: 121, column: 109, offset: 5903 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 121, column: 109, offset: 5903 },
            end: { line: 121, column: 203, offset: 5997 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Cacheable',
          children: [
            {
              type: 'text',
              value: 'freshness',
              position: {
                start: { line: 121, column: 204, offset: 5998 },
                end: { line: 121, column: 213, offset: 6007 }
              }
            }
          ],
          position: {
            start: { line: 121, column: 203, offset: 5997 },
            end: { line: 121, column: 275, offset: 6069 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 121, column: 275, offset: 6069 },
            end: { line: 121, column: 296, offset: 6090 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 121, column: 296, offset: 6090 },
            end: { line: 121, column: 305, offset: 6099 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 121, column: 305, offset: 6099 },
            end: { line: 121, column: 309, offset: 6103 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 121, column: 309, offset: 6103 },
            end: { line: 121, column: 324, offset: 6118 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 121, column: 324, offset: 6118 },
            end: { line: 121, column: 346, offset: 6140 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 121, column: 346, offset: 6140 },
            end: { line: 121, column: 364, offset: 6158 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 121, column: 364, offset: 6158 },
            end: { line: 121, column: 372, offset: 6166 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 5795 },
        end: { line: 121, column: 372, offset: 6166 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'PUT',
          position: {
            start: { line: 123, column: 6, offset: 6173 },
            end: { line: 123, column: 9, offset: 6176 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6168 },
        end: { line: 123, column: 9, offset: 6176 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 125, column: 1, offset: 6178 },
            end: { line: 125, column: 3, offset: 6180 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 125, column: 3, offset: 6180 },
            end: { line: 125, column: 8, offset: 6185 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the specified resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 125, column: 8, offset: 6185 },
            end: { line: 125, column: 143, offset: 6320 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 125, column: 143, offset: 6320 },
            end: { line: 125, column: 148, offset: 6325 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 125, column: 148, offset: 6325 },
            end: { line: 125, column: 206, offset: 6383 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6178 },
        end: { line: 125, column: 206, offset: 6383 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 6, offset: 6390 },
            end: { line: 127, column: 11, offset: 6395 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6385 },
        end: { line: 127, column: 11, offset: 6395 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 129, column: 1, offset: 6397 },
            end: { line: 129, column: 3, offset: 6399 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 129, column: 3, offset: 6399 },
            end: { line: 129, column: 10, offset: 6406 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the specified resource. ',
          position: {
            start: { line: 129, column: 10, offset: 6406 },
            end: { line: 129, column: 104, offset: 6500 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 129, column: 104, offset: 6500 },
            end: { line: 129, column: 111, offset: 6507 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 129, column: 111, offset: 6507 },
            end: { line: 129, column: 235, offset: 6631 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 129, column: 235, offset: 6631 },
            end: { line: 129, column: 244, offset: 6640 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 129, column: 244, offset: 6640 },
            end: { line: 129, column: 248, offset: 6644 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 129, column: 248, offset: 6644 },
            end: { line: 129, column: 263, offset: 6659 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 129, column: 263, offset: 6659 },
            end: { line: 129, column: 285, offset: 6681 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 129, column: 285, offset: 6681 },
            end: { line: 129, column: 303, offset: 6699 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 129, column: 303, offset: 6699 },
            end: { line: 129, column: 311, offset: 6707 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 6397 },
        end: { line: 129, column: 311, offset: 6707 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 6, offset: 6714 },
            end: { line: 131, column: 12, offset: 6720 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 6709 },
        end: { line: 131, column: 12, offset: 6720 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 133, column: 1, offset: 6722 },
            end: { line: 133, column: 3, offset: 6724 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 133, column: 3, offset: 6724 },
            end: { line: 133, column: 11, offset: 6732 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the specified resource. ',
          position: {
            start: { line: 133, column: 11, offset: 6732 },
            end: { line: 133, column: 86, offset: 6807 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 133, column: 86, offset: 6807 },
            end: { line: 133, column: 94, offset: 6815 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 133, column: 94, offset: 6815 },
            end: { line: 133, column: 156, offset: 6877 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 6722 },
        end: { line: 133, column: 156, offset: 6877 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 6, offset: 6884 },
            end: { line: 135, column: 13, offset: 6891 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 6879 },
        end: { line: 135, column: 13, offset: 6891 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 137, column: 1, offset: 6893 },
            end: { line: 137, column: 3, offset: 6895 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 137, column: 3, offset: 6895 },
            end: { line: 137, column: 12, offset: 6904 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the specified resource. ',
          position: {
            start: { line: 137, column: 12, offset: 6904 },
            end: { line: 137, column: 127, offset: 7019 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 137, column: 127, offset: 7019 },
            end: { line: 137, column: 136, offset: 7028 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 137, column: 136, offset: 7028 },
            end: { line: 137, column: 202, offset: 7094 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 6893 },
        end: { line: 137, column: 202, offset: 7094 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 6, offset: 7101 },
            end: { line: 139, column: 13, offset: 7108 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7096 },
        end: { line: 139, column: 13, offset: 7108 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An ',
          position: {
            start: { line: 141, column: 1, offset: 7110 },
            end: { line: 141, column: 4, offset: 7113 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 141, column: 4, offset: 7113 },
            end: { line: 141, column: 13, offset: 7122 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options for the target resource. ',
          position: {
            start: { line: 141, column: 13, offset: 7122 },
            end: { line: 141, column: 117, offset: 7226 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 141, column: 117, offset: 7226 },
            end: { line: 141, column: 126, offset: 7235 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 141, column: 126, offset: 7235 },
            end: { line: 141, column: 184, offset: 7293 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7110 },
        end: { line: 141, column: 184, offset: 7293 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 6, offset: 7300 },
            end: { line: 143, column: 11, offset: 7305 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7295 },
        end: { line: 143, column: 11, offset: 7305 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A ',
          position: {
            start: { line: 145, column: 1, offset: 7307 },
            end: { line: 145, column: 3, offset: 7309 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 145, column: 3, offset: 7309 },
            end: { line: 145, column: 10, offset: 7316 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 145, column: 10, offset: 7316 },
            end: { line: 145, column: 64, offset: 7370 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://lightyear.ai/tips/what-is-loopback-testing',
          children: [
            {
              type: 'text',
              value: 'loop-back test',
              position: {
                start: { line: 145, column: 65, offset: 7371 },
                end: { line: 145, column: 79, offset: 7385 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 64, offset: 7370 },
            end: { line: 145, column: 132, offset: 7438 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the specified resource. ',
          position: {
            start: { line: 145, column: 132, offset: 7438 },
            end: { line: 145, column: 175, offset: 7481 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 145, column: 175, offset: 7481 },
            end: { line: 145, column: 182, offset: 7488 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 145, column: 182, offset: 7488 },
            end: { line: 145, column: 240, offset: 7546 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7307 },
        end: { line: 145, column: 240, offset: 7546 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Request URL',
          position: {
            start: { line: 147, column: 5, offset: 7552 },
            end: { line: 147, column: 21, offset: 7568 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7548 },
        end: { line: 147, column: 21, offset: 7568 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request URL is the ',
          position: {
            start: { line: 149, column: 1, offset: 7570 },
            end: { line: 149, column: 28, offset: 7597 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '#url',
          children: [
            {
              type: 'text',
              value: 'URL',
              position: {
                start: { line: 149, column: 29, offset: 7598 },
                end: { line: 149, column: 32, offset: 7601 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 28, offset: 7597 },
            end: { line: 149, column: 39, offset: 7608 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 149, column: 39, offset: 7608 },
            end: { line: 149, column: 136, offset: 7705 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 7570 },
        end: { line: 149, column: 136, offset: 7705 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Headers',
          position: {
            start: { line: 151, column: 5, offset: 7711 },
            end: { line: 151, column: 25, offset: 7731 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 7707 },
        end: { line: 151, column: 25, offset: 7731 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request. Some common HTTP request headers are ',
          position: {
            start: { line: 153, column: 1, offset: 7733 },
            end: { line: 153, column: 182, offset: 7914 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 153, column: 182, offset: 7914 },
            end: { line: 153, column: 196, offset: 7928 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 153, column: 196, offset: 7928 },
            end: { line: 153, column: 198, offset: 7930 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Authorization',
          position: {
            start: { line: 153, column: 198, offset: 7930 },
            end: { line: 153, column: 213, offset: 7945 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 153, column: 213, offset: 7945 },
            end: { line: 153, column: 215, offset: 7947 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cookie',
          position: {
            start: { line: 153, column: 215, offset: 7947 },
            end: { line: 153, column: 223, offset: 7955 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 153, column: 223, offset: 7955 },
            end: { line: 153, column: 229, offset: 7961 }
          }
        },
        {
          type: 'inlineCode',
          value: 'User-Agent',
          position: {
            start: { line: 153, column: 229, offset: 7961 },
            end: { line: 153, column: 241, offset: 7973 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 153, column: 241, offset: 7973 },
            end: { line: 153, column: 242, offset: 7974 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 7733 },
        end: { line: 153, column: 242, offset: 7974 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Body',
          position: {
            start: { line: 155, column: 5, offset: 7980 },
            end: { line: 155, column: 22, offset: 7997 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 7976 },
        end: { line: 155, column: 22, offset: 7997 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request body is the part of the request that carries the bulk of the data sent to the server. It is commonly used for ',
          position: {
            start: { line: 157, column: 1, offset: 7999 },
            end: { line: 157, column: 127, offset: 8125 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 157, column: 127, offset: 8125 },
            end: { line: 157, column: 133, offset: 8131 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 133, offset: 8131 },
            end: { line: 157, column: 135, offset: 8133 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 157, column: 135, offset: 8133 },
            end: { line: 157, column: 140, offset: 8138 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 157, column: 140, offset: 8138 },
            end: { line: 157, column: 146, offset: 8144 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 157, column: 146, offset: 8144 },
            end: { line: 157, column: 153, offset: 8151 }
          }
        },
        {
          type: 'text',
          value: ' requests. HTTP request bodies can be string or binary. The content type of the request body should be specified by the ',
          position: {
            start: { line: 157, column: 153, offset: 8151 },
            end: { line: 157, column: 273, offset: 8271 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 273, offset: 8271 },
            end: { line: 157, column: 287, offset: 8285 }
          }
        },
        {
          type: 'text',
          value: ' header. Some common values for the ',
          position: {
            start: { line: 157, column: 287, offset: 8285 },
            end: { line: 157, column: 323, offset: 8321 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 323, offset: 8321 },
            end: { line: 157, column: 337, offset: 8335 }
          }
        },
        {
          type: 'text',
          value: ' header of string request bodies are ',
          position: {
            start: { line: 157, column: 337, offset: 8335 },
            end: { line: 157, column: 374, offset: 8372 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/plain',
          position: {
            start: { line: 157, column: 374, offset: 8372 },
            end: { line: 157, column: 386, offset: 8384 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 157, column: 386, offset: 8384 },
            end: { line: 157, column: 391, offset: 8389 }
          }
        },
        {
          type: 'inlineCode',
          value: 'application/json',
          position: {
            start: { line: 157, column: 391, offset: 8389 },
            end: { line: 157, column: 409, offset: 8407 }
          }
        },
        {
          type: 'text',
          value: '. Some common values for the ',
          position: {
            start: { line: 157, column: 409, offset: 8407 },
            end: { line: 157, column: 438, offset: 8436 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 438, offset: 8436 },
            end: { line: 157, column: 452, offset: 8450 }
          }
        },
        {
          type: 'text',
          value: ' header of binary request bodies are ',
          position: {
            start: { line: 157, column: 452, offset: 8450 },
            end: { line: 157, column: 489, offset: 8487 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/jpg',
          position: {
            start: { line: 157, column: 489, offset: 8487 },
            end: { line: 157, column: 500, offset: 8498 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 500, offset: 8498 },
            end: { line: 157, column: 502, offset: 8500 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/png',
          position: {
            start: { line: 157, column: 502, offset: 8500 },
            end: { line: 157, column: 513, offset: 8511 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 513, offset: 8511 },
            end: { line: 157, column: 515, offset: 8513 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/mpeg',
          position: {
            start: { line: 157, column: 515, offset: 8513 },
            end: { line: 157, column: 527, offset: 8525 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 527, offset: 8525 },
            end: { line: 157, column: 529, offset: 8527 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/x-wav',
          position: {
            start: { line: 157, column: 529, offset: 8527 },
            end: { line: 157, column: 542, offset: 8540 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 157, column: 542, offset: 8540 },
            end: { line: 157, column: 548, offset: 8546 }
          }
        },
        {
          type: 'inlineCode',
          value: 'video/mp4',
          position: {
            start: { line: 157, column: 548, offset: 8546 },
            end: { line: 157, column: 559, offset: 8557 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 157, column: 559, offset: 8557 },
            end: { line: 157, column: 560, offset: 8558 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 7999 },
        end: { line: 157, column: 560, offset: 8558 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP Response',
          position: {
            start: { line: 159, column: 4, offset: 8563 },
            end: { line: 159, column: 17, offset: 8576 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 8560 },
        end: { line: 159, column: 17, offset: 8576 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client.',
          position: {
            start: { line: 161, column: 1, offset: 8578 },
            end: { line: 161, column: 102, offset: 8679 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8578 },
        end: { line: 161, column: 102, offset: 8679 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8681 },
            end: { line: 163, column: 47, offset: 8727 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8681 },
        end: { line: 163, column: 47, offset: 8727 }
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
                  value: 'status code',
                  position: {
                    start: { line: 164, column: 4, offset: 8731 },
                    end: { line: 164, column: 15, offset: 8742 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 8731 },
                end: { line: 164, column: 15, offset: 8742 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 8729 },
            end: { line: 164, column: 15, offset: 8742 }
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
                  value: 'headers',
                  position: {
                    start: { line: 165, column: 4, offset: 8746 },
                    end: { line: 165, column: 11, offset: 8753 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 8746 },
                end: { line: 165, column: 11, offset: 8753 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 8744 },
            end: { line: 165, column: 11, offset: 8753 }
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
                  value: 'body',
                  position: {
                    start: { line: 166, column: 4, offset: 8757 },
                    end: { line: 166, column: 8, offset: 8761 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 8757 },
                end: { line: 166, column: 8, offset: 8761 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 8755 },
            end: { line: 166, column: 8, offset: 8761 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 8729 },
        end: { line: 166, column: 8, offset: 8761 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Response Status Code',
          position: {
            start: { line: 168, column: 5, offset: 8767 },
            end: { line: 168, column: 30, offset: 8792 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 8763 },
        end: { line: 168, column: 30, offset: 8792 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response status code is a three-digit code that indicates the status of the processing done by the HTTP server on a request.',
          position: {
            start: { line: 170, column: 1, offset: 8794 },
            end: { line: 170, column: 133, offset: 8926 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 8794 },
        end: { line: 170, column: 133, offset: 8926 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Informational Status Codes',
          position: {
            start: { line: 172, column: 6, offset: 8933 },
            end: { line: 172, column: 32, offset: 8959 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 8928 },
        end: { line: 172, column: 32, offset: 8959 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The informational status codes indicate the server has received the initial part of a request and will continue processing.',
          position: {
            start: { line: 174, column: 1, offset: 8961 },
            end: { line: 174, column: 124, offset: 9084 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 8961 },
        end: { line: 174, column: 124, offset: 9084 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '100 Continue',
          position: {
            start: { line: 176, column: 7, offset: 9092 },
            end: { line: 176, column: 19, offset: 9104 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9086 },
        end: { line: 176, column: 19, offset: 9104 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 178, column: 1, offset: 9106 },
            end: { line: 178, column: 98, offset: 9203 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9106 },
        end: { line: 178, column: 98, offset: 9203 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 7, offset: 9211 },
            end: { line: 180, column: 30, offset: 9234 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9205 },
        end: { line: 180, column: 30, offset: 9234 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 182, column: 1, offset: 9236 },
            end: { line: 182, column: 67, offset: 9302 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 182, column: 67, offset: 9302 },
            end: { line: 182, column: 76, offset: 9311 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 182, column: 76, offset: 9311 },
            end: { line: 182, column: 110, offset: 9345 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 182, column: 110, offset: 9345 },
            end: { line: 182, column: 135, offset: 9370 }
          }
        },
        {
          type: 'text',
          value: ' is used by the WebSocket protocol when switching from HTTP.',
          position: {
            start: { line: 182, column: 135, offset: 9370 },
            end: { line: 182, column: 195, offset: 9430 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9236 },
        end: { line: 182, column: 195, offset: 9430 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '102 Processing',
          position: {
            start: { line: 184, column: 7, offset: 9438 },
            end: { line: 184, column: 21, offset: 9452 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9432 },
        end: { line: 184, column: 21, offset: 9452 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 186, column: 1, offset: 9454 },
            end: { line: 186, column: 88, offset: 9541 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 9454 },
        end: { line: 186, column: 88, offset: 9541 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '103 Early Hints',
          position: {
            start: { line: 188, column: 7, offset: 9549 },
            end: { line: 188, column: 22, offset: 9564 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 9543 },
        end: { line: 188, column: 22, offset: 9564 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 190, column: 1, offset: 9566 },
            end: { line: 190, column: 139, offset: 9704 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 9566 },
        end: { line: 190, column: 139, offset: 9704 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Successful Status Codes',
          position: {
            start: { line: 192, column: 6, offset: 9711 },
            end: { line: 192, column: 29, offset: 9734 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 9706 },
        end: { line: 192, column: 29, offset: 9734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The successful status codes indicate the server has received, understood, and accepted a request.',
          position: {
            start: { line: 194, column: 1, offset: 9736 },
            end: { line: 194, column: 98, offset: 9833 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 9736 },
        end: { line: 194, column: 98, offset: 9833 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '200 OK',
          position: {
            start: { line: 196, column: 7, offset: 9841 },
            end: { line: 196, column: 13, offset: 9847 }
          }
        }
      ],
      position: {
        start: { line: 196, column: 1, offset: 9835 },
        end: { line: 196, column: 13, offset: 9847 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 198, column: 1, offset: 9849 },
            end: { line: 198, column: 101, offset: 9949 }
          }
        }
      ],
      position: {
        start: { line: 198, column: 1, offset: 9849 },
        end: { line: 198, column: 101, offset: 9949 }
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
                  value: 'GET',
                  position: {
                    start: { line: 199, column: 4, offset: 9953 },
                    end: { line: 199, column: 9, offset: 9958 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 199, column: 9, offset: 9958 },
                    end: { line: 199, column: 102, offset: 10051 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 9953 },
                end: { line: 199, column: 102, offset: 10051 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 9951 },
            end: { line: 199, column: 102, offset: 10051 }
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
                  value: 'HEAD',
                  position: {
                    start: { line: 200, column: 4, offset: 10055 },
                    end: { line: 200, column: 10, offset: 10061 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 200, column: 10, offset: 10061 },
                    end: { line: 200, column: 92, offset: 10143 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10055 },
                end: { line: 200, column: 92, offset: 10143 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10053 },
            end: { line: 200, column: 92, offset: 10143 }
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
                  value: 'POST',
                  position: {
                    start: { line: 201, column: 4, offset: 10147 },
                    end: { line: 201, column: 10, offset: 10153 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully',
                  position: {
                    start: { line: 201, column: 10, offset: 10153 },
                    end: { line: 201, column: 61, offset: 10204 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10147 },
                end: { line: 201, column: 61, offset: 10204 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10145 },
            end: { line: 201, column: 61, offset: 10204 }
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
                  value: 'PUT',
                  position: {
                    start: { line: 202, column: 4, offset: 10208 },
                    end: { line: 202, column: 9, offset: 10213 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was replaced successfully',
                  position: {
                    start: { line: 202, column: 9, offset: 10213 },
                    end: { line: 202, column: 50, offset: 10254 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10208 },
                end: { line: 202, column: 50, offset: 10254 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10206 },
            end: { line: 202, column: 50, offset: 10254 }
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
                  value: 'DELETE',
                  position: {
                    start: { line: 203, column: 4, offset: 10258 },
                    end: { line: 203, column: 12, offset: 10266 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully',
                  position: {
                    start: { line: 203, column: 12, offset: 10266 },
                    end: { line: 203, column: 52, offset: 10306 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10258 },
                end: { line: 203, column: 52, offset: 10306 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10256 },
            end: { line: 203, column: 52, offset: 10306 }
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
                  value: 'CONNECT',
                  position: {
                    start: { line: 204, column: 4, offset: 10310 },
                    end: { line: 204, column: 13, offset: 10319 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully',
                  position: {
                    start: { line: 204, column: 13, offset: 10319 },
                    end: { line: 204, column: 59, offset: 10365 }
                  }
                }
              ],
              position: {
                start: { line: 204, column: 4, offset: 10310 },
                end: { line: 204, column: 59, offset: 10365 }
              }
            }
          ],
          position: {
            start: { line: 204, column: 2, offset: 10308 },
            end: { line: 204, column: 59, offset: 10365 }
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
                  value: 'OPTIONS',
                  position: {
                    start: { line: 205, column: 4, offset: 10369 },
                    end: { line: 205, column: 13, offset: 10378 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available',
                  position: {
                    start: { line: 205, column: 13, offset: 10378 },
                    end: { line: 205, column: 55, offset: 10420 }
                  }
                }
              ],
              position: {
                start: { line: 205, column: 4, offset: 10369 },
                end: { line: 205, column: 55, offset: 10420 }
              }
            }
          ],
          position: {
            start: { line: 205, column: 2, offset: 10367 },
            end: { line: 205, column: 55, offset: 10420 }
          }
        }
      ],
      position: {
        start: { line: 199, column: 2, offset: 9951 },
        end: { line: 205, column: 55, offset: 10420 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Response Headers',
          position: {
            start: { line: 207, column: 5, offset: 10426 },
            end: { line: 207, column: 26, offset: 10447 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 10422 },
        end: { line: 207, column: 26, offset: 10447 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Response Body',
          position: {
            start: { line: 208, column: 5, offset: 10452 },
            end: { line: 208, column: 23, offset: 10470 }
          }
        }
      ],
      position: {
        start: { line: 208, column: 1, offset: 10448 },
        end: { line: 208, column: 23, offset: 10470 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some common values for the ',
          position: {
            start: { line: 210, column: 1, offset: 10472 },
            end: { line: 210, column: 28, offset: 10499 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 210, column: 28, offset: 10499 },
            end: { line: 210, column: 42, offset: 10513 }
          }
        },
        {
          type: 'text',
          value: ' header of string response bodies are ',
          position: {
            start: { line: 210, column: 42, offset: 10513 },
            end: { line: 210, column: 80, offset: 10551 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/plain',
          position: {
            start: { line: 210, column: 80, offset: 10551 },
            end: { line: 210, column: 92, offset: 10563 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 210, column: 92, offset: 10563 },
            end: { line: 210, column: 94, offset: 10565 }
          }
        },
        {
          type: 'inlineCode',
          value: 'application/json',
          position: {
            start: { line: 210, column: 94, offset: 10565 },
            end: { line: 210, column: 112, offset: 10583 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 210, column: 112, offset: 10583 },
            end: { line: 210, column: 114, offset: 10585 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/html',
          position: {
            start: { line: 210, column: 114, offset: 10585 },
            end: { line: 210, column: 125, offset: 10596 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 210, column: 125, offset: 10596 },
            end: { line: 210, column: 131, offset: 10602 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/xml',
          position: {
            start: { line: 210, column: 131, offset: 10602 },
            end: { line: 210, column: 141, offset: 10612 }
          }
        },
        {
          type: 'text',
          value: '. Some common values for the ',
          position: {
            start: { line: 210, column: 141, offset: 10612 },
            end: { line: 210, column: 170, offset: 10641 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 210, column: 170, offset: 10641 },
            end: { line: 210, column: 184, offset: 10655 }
          }
        },
        {
          type: 'text',
          value: ' header of binary response bodies are ',
          position: {
            start: { line: 210, column: 184, offset: 10655 },
            end: { line: 210, column: 222, offset: 10693 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/jpg',
          position: {
            start: { line: 210, column: 222, offset: 10693 },
            end: { line: 210, column: 233, offset: 10704 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 210, column: 233, offset: 10704 },
            end: { line: 210, column: 235, offset: 10706 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/png',
          position: {
            start: { line: 210, column: 235, offset: 10706 },
            end: { line: 210, column: 246, offset: 10717 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 210, column: 246, offset: 10717 },
            end: { line: 210, column: 248, offset: 10719 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/mpeg',
          position: {
            start: { line: 210, column: 248, offset: 10719 },
            end: { line: 210, column: 260, offset: 10731 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 210, column: 260, offset: 10731 },
            end: { line: 210, column: 262, offset: 10733 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/x-wav',
          position: {
            start: { line: 210, column: 262, offset: 10733 },
            end: { line: 210, column: 275, offset: 10746 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 210, column: 275, offset: 10746 },
            end: { line: 210, column: 281, offset: 10752 }
          }
        },
        {
          type: 'inlineCode',
          value: 'video/mp4',
          position: {
            start: { line: 210, column: 281, offset: 10752 },
            end: { line: 210, column: 292, offset: 10763 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 210, column: 292, offset: 10763 },
            end: { line: 210, column: 293, offset: 10764 }
          }
        }
      ],
      position: {
        start: { line: 210, column: 1, offset: 10472 },
        end: { line: 210, column: 293, offset: 10764 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP Server',
          position: {
            start: { line: 212, column: 4, offset: 10769 },
            end: { line: 212, column: 15, offset: 10780 }
          }
        }
      ],
      position: {
        start: { line: 212, column: 1, offset: 10766 },
        end: { line: 212, column: 15, offset: 10780 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 214, column: 1, offset: 10782 },
            end: { line: 214, column: 226, offset: 11007 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://en.wikipedia.org/wiki/Node.js',
          children: [
            {
              type: 'text',
              value: 'NodeJS',
              position: {
                start: { line: 214, column: 227, offset: 11008 },
                end: { line: 214, column: 233, offset: 11014 }
              }
            }
          ],
          position: {
            start: { line: 214, column: 226, offset: 11007 },
            end: { line: 214, column: 273, offset: 11054 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 214, column: 273, offset: 11054 },
            end: { line: 214, column: 387, offset: 11168 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 1, offset: 10782 },
        end: { line: 214, column: 387, offset: 11168 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 216, column: 1, offset: 11170 },
            end: { line: 216, column: 23, offset: 11192 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 216, column: 23, offset: 11192 },
            end: { line: 216, column: 29, offset: 11198 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 216, column: 29, offset: 11198 },
            end: { line: 216, column: 62, offset: 11231 }
          }
        }
      ],
      position: {
        start: { line: 216, column: 1, offset: 11170 },
        end: { line: 216, column: 62, offset: 11231 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const http = require('http')\n" +
        '\n' +
        'const server = http.createServer((request, response) => {\n' +
        '  response.writeHead(200, {\n' +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        "  response.end('ok')\n" +
        '})\n' +
        '\n' +
        'const port = 8080\n' +
        '\n' +
        'server.listen(port)',
      position: {
        start: { line: 218, column: 1, offset: 11233 },
        end: { line: 231, column: 4, offset: 11469 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates an HTTP server with ',
          position: {
            start: { line: 233, column: 1, offset: 11471 },
            end: { line: 233, column: 52, offset: 11522 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 233, column: 52, offset: 11522 },
            end: { line: 233, column: 71, offset: 11541 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 233, column: 71, offset: 11541 },
            end: { line: 233, column: 100, offset: 11570 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 233, column: 100, offset: 11570 },
            end: { line: 233, column: 130, offset: 11600 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 233, column: 130, offset: 11600 },
            end: { line: 233, column: 173, offset: 11643 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 233, column: 173, offset: 11643 },
            end: { line: 233, column: 179, offset: 11649 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 233, column: 179, offset: 11649 },
            end: { line: 233, column: 197, offset: 11667 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 233, column: 197, offset: 11667 },
            end: { line: 233, column: 212, offset: 11682 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 233, column: 212, offset: 11682 },
            end: { line: 233, column: 213, offset: 11683 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 11471 },
        end: { line: 233, column: 213, offset: 11683 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 235, column: 1, offset: 11685 },
            end: { line: 235, column: 45, offset: 11729 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 11685 },
        end: { line: 235, column: 45, offset: 11729 }
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
                  value: 'port',
                  position: {
                    start: { line: 236, column: 4, offset: 11733 },
                    end: { line: 236, column: 8, offset: 11737 }
                  }
                }
              ],
              position: {
                start: { line: 236, column: 4, offset: 11733 },
                end: { line: 236, column: 8, offset: 11737 }
              }
            }
          ],
          position: {
            start: { line: 236, column: 2, offset: 11731 },
            end: { line: 236, column: 8, offset: 11737 }
          }
        }
      ],
      position: {
        start: { line: 236, column: 2, offset: 11731 },
        end: { line: 236, column: 8, offset: 11737 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Server Port',
          position: {
            start: { line: 238, column: 5, offset: 11743 },
            end: { line: 238, column: 21, offset: 11759 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 11739 },
        end: { line: 238, column: 21, offset: 11759 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is...',
          position: {
            start: { line: 240, column: 1, offset: 11761 },
            end: { line: 240, column: 27, offset: 11787 }
          }
        }
      ],
      position: {
        start: { line: 240, column: 1, offset: 11761 },
        end: { line: 240, column: 27, offset: 11787 }
      }
    },
    {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'HTTP Handler',
          position: {
            start: { line: 242, column: 4, offset: 11792 },
            end: { line: 242, column: 16, offset: 11804 }
          }
        }
      ],
      position: {
        start: { line: 242, column: 1, offset: 11789 },
        end: { line: 242, column: 16, offset: 11804 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 244, column: 1, offset: 11806 },
            end: { line: 244, column: 109, offset: 11914 }
          }
        }
      ],
      position: {
        start: { line: 244, column: 1, offset: 11806 },
        end: { line: 244, column: 109, offset: 11914 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 246, column: 1, offset: 11916 },
            end: { line: 246, column: 61, offset: 11976 }
          }
        }
      ],
      position: {
        start: { line: 246, column: 1, offset: 11916 },
        end: { line: 246, column: 61, offset: 11976 }
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
                  value: 'Parsing information from a request such as its headers, path, and body',
                  position: {
                    start: { line: 247, column: 4, offset: 11980 },
                    end: { line: 247, column: 74, offset: 12050 }
                  }
                }
              ],
              position: {
                start: { line: 247, column: 4, offset: 11980 },
                end: { line: 247, column: 74, offset: 12050 }
              }
            }
          ],
          position: {
            start: { line: 247, column: 2, offset: 11978 },
            end: { line: 247, column: 74, offset: 12050 }
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
                  value: 'Validating the information parsed from a request',
                  position: {
                    start: { line: 248, column: 4, offset: 12054 },
                    end: { line: 248, column: 52, offset: 12102 }
                  }
                }
              ],
              position: {
                start: { line: 248, column: 4, offset: 12054 },
                end: { line: 248, column: 52, offset: 12102 }
              }
            }
          ],
          position: {
            start: { line: 248, column: 2, offset: 12052 },
            end: { line: 248, column: 52, offset: 12102 }
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
                  value: 'Sending additional requests to other web servers or "web services", for example sending a request to a database web service (Amazon DynamoDB, Amazon RDS running PostgreSQL or MySQL) or external cache (Redis) to retrieve or store data',
                  position: {
                    start: { line: 249, column: 4, offset: 12106 },
                    end: { line: 249, column: 237, offset: 12339 }
                  }
                }
              ],
              position: {
                start: { line: 249, column: 4, offset: 12106 },
                end: { line: 249, column: 237, offset: 12339 }
              }
            }
          ],
          position: {
            start: { line: 249, column: 2, offset: 12104 },
            end: { line: 249, column: 237, offset: 12339 }
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
                  value: 'Generating the response to the request, including setting the appropriate response headers and writing to the response body.',
                  position: {
                    start: { line: 250, column: 4, offset: 12343 },
                    end: { line: 250, column: 128, offset: 12467 }
                  }
                }
              ],
              position: {
                start: { line: 250, column: 4, offset: 12343 },
                end: { line: 250, column: 128, offset: 12467 }
              }
            }
          ],
          position: {
            start: { line: 250, column: 2, offset: 12341 },
            end: { line: 250, column: 128, offset: 12467 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 2, offset: 11978 },
        end: { line: 250, column: 128, offset: 12467 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'HTTP Handlers in NodeJS',
          position: {
            start: { line: 252, column: 5, offset: 12473 },
            end: { line: 252, column: 28, offset: 12496 }
          }
        }
      ],
      position: {
        start: { line: 252, column: 1, offset: 12469 },
        end: { line: 252, column: 28, offset: 12496 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 254, column: 1, offset: 12498 },
            end: { line: 254, column: 33, offset: 12530 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 254, column: 33, offset: 12530 },
            end: { line: 254, column: 39, offset: 12536 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 254, column: 39, offset: 12536 },
            end: { line: 254, column: 161, offset: 12658 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 254, column: 161, offset: 12658 },
            end: { line: 254, column: 176, offset: 12673 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 254, column: 176, offset: 12673 },
            end: { line: 254, column: 184, offset: 12681 }
          }
        }
      ],
      position: {
        start: { line: 254, column: 1, offset: 12498 },
        end: { line: 254, column: 184, offset: 12681 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type ClientRequest = {\n' +
        '  method: string,\n' +
        '  url: string,\n' +
        '  headers: Object<string>,\n' +
        '  on: (eventName string, eventHandler function)=>undefined,\n' +
        '}\n' +
        '\n' +
        'request ClientRequest\n' +
        '\n' +
        "request.on('data', (data Buffer)=>undefined)\n" +
        "request.on('error', (error Error)=>undefined)\n" +
        "request.on('end', ()=>undefined)",
      position: {
        start: { line: 256, column: 1, offset: 12683 },
        end: { line: 269, column: 4, offset: 13008 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 271, column: 1, offset: 13010 },
            end: { line: 271, column: 12, offset: 13021 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 271, column: 12, offset: 13021 },
            end: { line: 271, column: 18, offset: 13027 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 271, column: 18, offset: 13027 },
            end: { line: 271, column: 88, offset: 13097 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 271, column: 88, offset: 13097 },
            end: { line: 271, column: 104, offset: 13113 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 271, column: 104, offset: 13113 },
            end: { line: 271, column: 113, offset: 13122 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13010 },
        end: { line: 271, column: 113, offset: 13122 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type ServerResponse = {\n' +
        '  writeHead: (statusCode number, headers Object<string>),\n' +
        '  write: (data Buffer|string)=>undefined,\n' +
        '  end: (data Buffer|string)=>undefined\n' +
        '}',
      position: {
        start: { line: 273, column: 1, offset: 13124 },
        end: { line: 279, column: 4, offset: 13321 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 281, column: 1, offset: 13323 },
            end: { line: 281, column: 35, offset: 13357 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 281, column: 35, offset: 13357 },
            end: { line: 281, column: 50, offset: 13372 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 281, column: 50, offset: 13372 },
            end: { line: 281, column: 55, offset: 13377 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 281, column: 55, offset: 13377 },
            end: { line: 281, column: 71, offset: 13393 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 281, column: 71, offset: 13393 },
            end: { line: 281, column: 112, offset: 13434 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 13323 },
        end: { line: 281, column: 112, offset: 13434 }
      }
    },
    {
      type: 'code',
      lang: 'coffeescript',
      meta: '[specscript]',
      value: 'type ClientRequest = {\n' +
        '  method: string,\n' +
        '  url: string,\n' +
        '  headers: Object<string>,\n' +
        '  on: (eventName string, eventHandler function)=>undefined,\n' +
        '}\n' +
        '\n' +
        'type ServerResponse = {\n' +
        '  writeHead: (statusCode number, headers Object<string>),\n' +
        '  write: (data Buffer|string)=>undefined,\n' +
        '  end: (data Buffer|string)=>undefined\n' +
        '}\n' +
        '\n' +
        'type HttpHandler = (request ClientRequest, response ServerResponse)=>Promise|undefined',
      position: {
        start: { line: 283, column: 1, offset: 13436 },
        end: { line: 298, column: 4, offset: 13867 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 300, column: 1, offset: 13869 },
            end: { line: 300, column: 81, offset: 13949 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '#http-client',
          children: [
            {
              type: 'text',
              value: 'HTTP client',
              position: {
                start: { line: 300, column: 82, offset: 13950 },
                end: { line: 300, column: 93, offset: 13961 }
              }
            }
          ],
          position: {
            start: { line: 300, column: 81, offset: 13949 },
            end: { line: 300, column: 108, offset: 13976 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 300, column: 108, offset: 13976 },
            end: { line: 300, column: 117, offset: 13985 }
          }
        }
      ],
      position: {
        start: { line: 300, column: 1, offset: 13869 },
        end: { line: 300, column: 117, offset: 13985 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const http = require('http')\n" +
        '\n' +
        'const handler = function (request, response) {\n' +
        "  if (request.method == 'GET' && request.url == '/todos/1') {\n" +
        '    const status = 200\n' +
        '\n' +
        '    const headers = {\n' +
        "      'Cache-Control': 'max-age=43200',\n" +
        "      'Content-Type': 'application/json; charset=utf-8',\n" +
        "      'Expires': '-1',\n" +
        "      'Pragma': 'no-cache',\n" +
        '    }\n' +
        '\n' +
        '    response.writeHead(status, headers)\n' +
        '\n' +
        '    const data = {\n' +
        '      userId: 1,\n' +
        '      id: 1,\n' +
        "      title: 'delectus aut autem',\n" +
        '      completed: false,\n' +
        '    }\n' +
        '\n' +
        '    response.end(JSON.stringify(data))\n' +
        '  }\n' +
        '\n' +
        '  // ...\n' +
        '}\n' +
        '\n' +
        'const server = http.createServer(handler)\n' +
        '\n' +
        'const port = 8080\n' +
        '\n' +
        'server.listen(port)',
      position: {
        start: { line: 302, column: 1, offset: 13987 },
        end: { line: 336, column: 4, offset: 14638 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Http Handlers in [A]synchronous Functional Programming',
          position: {
            start: { line: 338, column: 5, offset: 14644 },
            end: { line: 338, column: 59, offset: 14698 }
          }
        }
      ],
      position: {
        start: { line: 338, column: 1, offset: 14640 },
        end: { line: 338, column: 59, offset: 14698 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 339, column: 1, offset: 14699 }
  }
}