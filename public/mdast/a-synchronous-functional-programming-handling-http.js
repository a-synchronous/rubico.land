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
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 109, column: 1, offset: 4998 },
            end: { line: 109, column: 192, offset: 5189 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 109, column: 192, offset: 5189 },
            end: { line: 109, column: 197, offset: 5194 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 197, offset: 5194 },
            end: { line: 109, column: 199, offset: 5196 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 109, column: 199, offset: 5196 },
            end: { line: 109, column: 205, offset: 5202 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 205, offset: 5202 },
            end: { line: 109, column: 207, offset: 5204 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 109, column: 207, offset: 5204 },
            end: { line: 109, column: 213, offset: 5210 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 213, offset: 5210 },
            end: { line: 109, column: 215, offset: 5212 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 109, column: 215, offset: 5212 },
            end: { line: 109, column: 220, offset: 5217 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 220, offset: 5217 },
            end: { line: 109, column: 222, offset: 5219 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 109, column: 222, offset: 5219 },
            end: { line: 109, column: 230, offset: 5227 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 230, offset: 5227 },
            end: { line: 109, column: 232, offset: 5229 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 109, column: 232, offset: 5229 },
            end: { line: 109, column: 241, offset: 5238 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 241, offset: 5238 },
            end: { line: 109, column: 243, offset: 5240 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 109, column: 243, offset: 5240 },
            end: { line: 109, column: 252, offset: 5249 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 109, column: 252, offset: 5249 },
            end: { line: 109, column: 254, offset: 5251 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 109, column: 254, offset: 5251 },
            end: { line: 109, column: 261, offset: 5258 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 109, column: 261, offset: 5258 },
            end: { line: 109, column: 267, offset: 5264 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 109, column: 267, offset: 5264 },
            end: { line: 109, column: 274, offset: 5271 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 109, column: 274, offset: 5271 },
            end: { line: 109, column: 275, offset: 5272 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 4998 },
        end: { line: 109, column: 275, offset: 5272 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method GET',
          position: {
            start: { line: 111, column: 6, offset: 5279 },
            end: { line: 111, column: 29, offset: 5302 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5274 },
        end: { line: 111, column: 29, offset: 5302 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 113, column: 1, offset: 5304 },
            end: { line: 113, column: 5, offset: 5308 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 113, column: 5, offset: 5308 },
            end: { line: 113, column: 10, offset: 5313 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the specified resource. ',
          position: {
            start: { line: 113, column: 10, offset: 5313 },
            end: { line: 113, column: 104, offset: 5407 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 113, column: 104, offset: 5407 },
            end: { line: 113, column: 109, offset: 5412 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 113, column: 109, offset: 5412 },
            end: { line: 113, column: 123, offset: 5426 }
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
                start: { line: 113, column: 124, offset: 5427 },
                end: { line: 113, column: 128, offset: 5431 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 123, offset: 5426 },
            end: { line: 113, column: 190, offset: 5493 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 113, column: 190, offset: 5493 },
            end: { line: 113, column: 192, offset: 5495 }
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
                start: { line: 113, column: 193, offset: 5496 },
                end: { line: 113, column: 203, offset: 5506 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 192, offset: 5495 },
            end: { line: 113, column: 266, offset: 5569 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 113, column: 266, offset: 5569 },
            end: { line: 113, column: 272, offset: 5575 }
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
                start: { line: 113, column: 273, offset: 5576 },
                end: { line: 113, column: 282, offset: 5585 }
              }
            }
          ],
          position: {
            start: { line: 113, column: 272, offset: 5575 },
            end: { line: 113, column: 344, offset: 5647 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 113, column: 344, offset: 5647 },
            end: { line: 113, column: 345, offset: 5648 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 5304 },
        end: { line: 113, column: 345, offset: 5648 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method HEAD',
          position: {
            start: { line: 115, column: 6, offset: 5655 },
            end: { line: 115, column: 30, offset: 5679 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 5650 },
        end: { line: 115, column: 30, offset: 5679 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 117, column: 1, offset: 5681 },
            end: { line: 117, column: 5, offset: 5685 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 117, column: 5, offset: 5685 },
            end: { line: 117, column: 11, offset: 5691 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the specified resource. ',
          position: {
            start: { line: 117, column: 11, offset: 5691 },
            end: { line: 117, column: 95, offset: 5775 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 117, column: 95, offset: 5775 },
            end: { line: 117, column: 101, offset: 5781 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 117, column: 101, offset: 5781 },
            end: { line: 117, column: 147, offset: 5827 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5681 },
        end: { line: 117, column: 147, offset: 5827 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method POST',
          position: {
            start: { line: 119, column: 6, offset: 5834 },
            end: { line: 119, column: 30, offset: 5858 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 5829 },
        end: { line: 119, column: 30, offset: 5858 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 121, column: 1, offset: 5860 },
            end: { line: 121, column: 5, offset: 5864 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 121, column: 5, offset: 5864 },
            end: { line: 121, column: 11, offset: 5870 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create or update the specified resource. ',
          position: {
            start: { line: 121, column: 11, offset: 5870 },
            end: { line: 121, column: 105, offset: 5964 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 121, column: 105, offset: 5964 },
            end: { line: 121, column: 111, offset: 5970 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 121, column: 111, offset: 5970 },
            end: { line: 121, column: 205, offset: 6064 }
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
                start: { line: 121, column: 206, offset: 6065 },
                end: { line: 121, column: 215, offset: 6074 }
              }
            }
          ],
          position: {
            start: { line: 121, column: 205, offset: 6064 },
            end: { line: 121, column: 277, offset: 6136 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 121, column: 277, offset: 6136 },
            end: { line: 121, column: 298, offset: 6157 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 121, column: 298, offset: 6157 },
            end: { line: 121, column: 307, offset: 6166 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 121, column: 307, offset: 6166 },
            end: { line: 121, column: 311, offset: 6170 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 121, column: 311, offset: 6170 },
            end: { line: 121, column: 326, offset: 6185 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 121, column: 326, offset: 6185 },
            end: { line: 121, column: 348, offset: 6207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 121, column: 348, offset: 6207 },
            end: { line: 121, column: 366, offset: 6225 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 121, column: 366, offset: 6225 },
            end: { line: 121, column: 374, offset: 6233 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 5860 },
        end: { line: 121, column: 374, offset: 6233 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method PUT',
          position: {
            start: { line: 123, column: 6, offset: 6240 },
            end: { line: 123, column: 29, offset: 6263 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6235 },
        end: { line: 123, column: 29, offset: 6263 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 125, column: 1, offset: 6265 },
            end: { line: 125, column: 5, offset: 6269 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 125, column: 5, offset: 6269 },
            end: { line: 125, column: 10, offset: 6274 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the specified resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 125, column: 10, offset: 6274 },
            end: { line: 125, column: 145, offset: 6409 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 125, column: 145, offset: 6409 },
            end: { line: 125, column: 150, offset: 6414 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 125, column: 150, offset: 6414 },
            end: { line: 125, column: 208, offset: 6472 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6265 },
        end: { line: 125, column: 208, offset: 6472 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method PATCH',
          position: {
            start: { line: 127, column: 6, offset: 6479 },
            end: { line: 127, column: 31, offset: 6504 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6474 },
        end: { line: 127, column: 31, offset: 6504 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 129, column: 1, offset: 6506 },
            end: { line: 129, column: 5, offset: 6510 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 129, column: 5, offset: 6510 },
            end: { line: 129, column: 12, offset: 6517 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the specified resource. ',
          position: {
            start: { line: 129, column: 12, offset: 6517 },
            end: { line: 129, column: 106, offset: 6611 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 129, column: 106, offset: 6611 },
            end: { line: 129, column: 113, offset: 6618 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 129, column: 113, offset: 6618 },
            end: { line: 129, column: 237, offset: 6742 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 129, column: 237, offset: 6742 },
            end: { line: 129, column: 246, offset: 6751 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 129, column: 246, offset: 6751 },
            end: { line: 129, column: 250, offset: 6755 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 129, column: 250, offset: 6755 },
            end: { line: 129, column: 265, offset: 6770 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 129, column: 265, offset: 6770 },
            end: { line: 129, column: 287, offset: 6792 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 129, column: 287, offset: 6792 },
            end: { line: 129, column: 305, offset: 6810 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 129, column: 305, offset: 6810 },
            end: { line: 129, column: 313, offset: 6818 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 6506 },
        end: { line: 129, column: 313, offset: 6818 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Request Method DELETE',
          position: {
            start: { line: 131, column: 6, offset: 6825 },
            end: { line: 131, column: 32, offset: 6851 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 6820 },
        end: { line: 131, column: 32, offset: 6851 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 133, column: 1, offset: 6853 },
            end: { line: 133, column: 5, offset: 6857 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 133, column: 5, offset: 6857 },
            end: { line: 133, column: 13, offset: 6865 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the specified resource. ',
          position: {
            start: { line: 133, column: 13, offset: 6865 },
            end: { line: 133, column: 88, offset: 6940 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 133, column: 88, offset: 6940 },
            end: { line: 133, column: 96, offset: 6948 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 133, column: 96, offset: 6948 },
            end: { line: 133, column: 158, offset: 7010 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 6853 },
        end: { line: 133, column: 158, offset: 7010 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP request method CONNECT',
          position: {
            start: { line: 135, column: 6, offset: 7017 },
            end: { line: 135, column: 33, offset: 7044 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7012 },
        end: { line: 135, column: 33, offset: 7044 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 137, column: 1, offset: 7046 },
            end: { line: 137, column: 5, offset: 7050 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 137, column: 5, offset: 7050 },
            end: { line: 137, column: 14, offset: 7059 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the specified resource. ',
          position: {
            start: { line: 137, column: 14, offset: 7059 },
            end: { line: 137, column: 129, offset: 7174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 137, column: 129, offset: 7174 },
            end: { line: 137, column: 138, offset: 7183 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 137, column: 138, offset: 7183 },
            end: { line: 137, column: 204, offset: 7249 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7046 },
        end: { line: 137, column: 204, offset: 7249 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP request method OPTIONS',
          position: {
            start: { line: 139, column: 6, offset: 7256 },
            end: { line: 139, column: 33, offset: 7283 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7251 },
        end: { line: 139, column: 33, offset: 7283 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 141, column: 1, offset: 7285 },
            end: { line: 141, column: 5, offset: 7289 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 141, column: 5, offset: 7289 },
            end: { line: 141, column: 14, offset: 7298 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options for the target resource. ',
          position: {
            start: { line: 141, column: 14, offset: 7298 },
            end: { line: 141, column: 118, offset: 7402 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 141, column: 118, offset: 7402 },
            end: { line: 141, column: 127, offset: 7411 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 141, column: 127, offset: 7411 },
            end: { line: 141, column: 185, offset: 7469 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7285 },
        end: { line: 141, column: 185, offset: 7469 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP request method TRACE',
          position: {
            start: { line: 143, column: 6, offset: 7476 },
            end: { line: 143, column: 31, offset: 7501 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7471 },
        end: { line: 143, column: 31, offset: 7501 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 145, column: 1, offset: 7503 },
            end: { line: 145, column: 5, offset: 7507 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 145, column: 5, offset: 7507 },
            end: { line: 145, column: 12, offset: 7514 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 145, column: 12, offset: 7514 },
            end: { line: 145, column: 66, offset: 7568 }
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
                start: { line: 145, column: 67, offset: 7569 },
                end: { line: 145, column: 81, offset: 7583 }
              }
            }
          ],
          position: {
            start: { line: 145, column: 66, offset: 7568 },
            end: { line: 145, column: 134, offset: 7636 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the specified resource. ',
          position: {
            start: { line: 145, column: 134, offset: 7636 },
            end: { line: 145, column: 177, offset: 7679 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 145, column: 177, offset: 7679 },
            end: { line: 145, column: 184, offset: 7686 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 145, column: 184, offset: 7686 },
            end: { line: 145, column: 242, offset: 7744 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7503 },
        end: { line: 145, column: 242, offset: 7744 }
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
            start: { line: 147, column: 5, offset: 7750 },
            end: { line: 147, column: 21, offset: 7766 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7746 },
        end: { line: 147, column: 21, offset: 7766 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 149, column: 1, offset: 7768 },
            end: { line: 149, column: 29, offset: 7796 }
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
                start: { line: 149, column: 30, offset: 7797 },
                end: { line: 149, column: 33, offset: 7800 }
              }
            }
          ],
          position: {
            start: { line: 149, column: 29, offset: 7796 },
            end: { line: 149, column: 40, offset: 7807 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 149, column: 40, offset: 7807 },
            end: { line: 149, column: 137, offset: 7904 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 7768 },
        end: { line: 149, column: 137, offset: 7904 }
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
            start: { line: 151, column: 5, offset: 7910 },
            end: { line: 151, column: 25, offset: 7930 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 7906 },
        end: { line: 151, column: 25, offset: 7930 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request. Some common HTTP request headers are ',
          position: {
            start: { line: 153, column: 1, offset: 7932 },
            end: { line: 153, column: 182, offset: 8113 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 153, column: 182, offset: 8113 },
            end: { line: 153, column: 196, offset: 8127 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 153, column: 196, offset: 8127 },
            end: { line: 153, column: 198, offset: 8129 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Authorization',
          position: {
            start: { line: 153, column: 198, offset: 8129 },
            end: { line: 153, column: 213, offset: 8144 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 153, column: 213, offset: 8144 },
            end: { line: 153, column: 215, offset: 8146 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cookie',
          position: {
            start: { line: 153, column: 215, offset: 8146 },
            end: { line: 153, column: 223, offset: 8154 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 153, column: 223, offset: 8154 },
            end: { line: 153, column: 229, offset: 8160 }
          }
        },
        {
          type: 'inlineCode',
          value: 'User-Agent',
          position: {
            start: { line: 153, column: 229, offset: 8160 },
            end: { line: 153, column: 241, offset: 8172 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 153, column: 241, offset: 8172 },
            end: { line: 153, column: 242, offset: 8173 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 7932 },
        end: { line: 153, column: 242, offset: 8173 }
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
            start: { line: 155, column: 5, offset: 8179 },
            end: { line: 155, column: 22, offset: 8196 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8175 },
        end: { line: 155, column: 22, offset: 8196 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request body is the part of the request that carries the bulk of the data sent to the server. It is commonly used for ',
          position: {
            start: { line: 157, column: 1, offset: 8198 },
            end: { line: 157, column: 128, offset: 8325 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 157, column: 128, offset: 8325 },
            end: { line: 157, column: 134, offset: 8331 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 134, offset: 8331 },
            end: { line: 157, column: 136, offset: 8333 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 157, column: 136, offset: 8333 },
            end: { line: 157, column: 141, offset: 8338 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 157, column: 141, offset: 8338 },
            end: { line: 157, column: 147, offset: 8344 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 157, column: 147, offset: 8344 },
            end: { line: 157, column: 154, offset: 8351 }
          }
        },
        {
          type: 'text',
          value: ' requests. HTTP request bodies can be string or binary. The content type of the request body should be specified by the ',
          position: {
            start: { line: 157, column: 154, offset: 8351 },
            end: { line: 157, column: 274, offset: 8471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 274, offset: 8471 },
            end: { line: 157, column: 288, offset: 8485 }
          }
        },
        {
          type: 'text',
          value: ' header. Some common values for the ',
          position: {
            start: { line: 157, column: 288, offset: 8485 },
            end: { line: 157, column: 324, offset: 8521 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 324, offset: 8521 },
            end: { line: 157, column: 338, offset: 8535 }
          }
        },
        {
          type: 'text',
          value: ' header of string request bodies are ',
          position: {
            start: { line: 157, column: 338, offset: 8535 },
            end: { line: 157, column: 375, offset: 8572 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/plain',
          position: {
            start: { line: 157, column: 375, offset: 8572 },
            end: { line: 157, column: 387, offset: 8584 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 157, column: 387, offset: 8584 },
            end: { line: 157, column: 392, offset: 8589 }
          }
        },
        {
          type: 'inlineCode',
          value: 'application/json',
          position: {
            start: { line: 157, column: 392, offset: 8589 },
            end: { line: 157, column: 410, offset: 8607 }
          }
        },
        {
          type: 'text',
          value: '. Some common values for the ',
          position: {
            start: { line: 157, column: 410, offset: 8607 },
            end: { line: 157, column: 439, offset: 8636 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 157, column: 439, offset: 8636 },
            end: { line: 157, column: 453, offset: 8650 }
          }
        },
        {
          type: 'text',
          value: ' header of binary request bodies are ',
          position: {
            start: { line: 157, column: 453, offset: 8650 },
            end: { line: 157, column: 490, offset: 8687 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/jpg',
          position: {
            start: { line: 157, column: 490, offset: 8687 },
            end: { line: 157, column: 501, offset: 8698 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 501, offset: 8698 },
            end: { line: 157, column: 503, offset: 8700 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/png',
          position: {
            start: { line: 157, column: 503, offset: 8700 },
            end: { line: 157, column: 514, offset: 8711 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 514, offset: 8711 },
            end: { line: 157, column: 516, offset: 8713 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/mpeg',
          position: {
            start: { line: 157, column: 516, offset: 8713 },
            end: { line: 157, column: 528, offset: 8725 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 157, column: 528, offset: 8725 },
            end: { line: 157, column: 530, offset: 8727 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/x-wav',
          position: {
            start: { line: 157, column: 530, offset: 8727 },
            end: { line: 157, column: 543, offset: 8740 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 157, column: 543, offset: 8740 },
            end: { line: 157, column: 549, offset: 8746 }
          }
        },
        {
          type: 'inlineCode',
          value: 'video/mp4',
          position: {
            start: { line: 157, column: 549, offset: 8746 },
            end: { line: 157, column: 560, offset: 8757 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 157, column: 560, offset: 8757 },
            end: { line: 157, column: 561, offset: 8758 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8198 },
        end: { line: 157, column: 561, offset: 8758 }
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
            start: { line: 159, column: 4, offset: 8763 },
            end: { line: 159, column: 17, offset: 8776 }
          }
        }
      ],
      position: {
        start: { line: 159, column: 1, offset: 8760 },
        end: { line: 159, column: 17, offset: 8776 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client.',
          position: {
            start: { line: 161, column: 1, offset: 8778 },
            end: { line: 161, column: 102, offset: 8879 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8778 },
        end: { line: 161, column: 102, offset: 8879 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8881 },
            end: { line: 163, column: 47, offset: 8927 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8881 },
        end: { line: 163, column: 47, offset: 8927 }
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
                    start: { line: 164, column: 4, offset: 8931 },
                    end: { line: 164, column: 15, offset: 8942 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 8931 },
                end: { line: 164, column: 15, offset: 8942 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 8929 },
            end: { line: 164, column: 15, offset: 8942 }
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
                    start: { line: 165, column: 4, offset: 8946 },
                    end: { line: 165, column: 11, offset: 8953 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 8946 },
                end: { line: 165, column: 11, offset: 8953 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 8944 },
            end: { line: 165, column: 11, offset: 8953 }
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
                    start: { line: 166, column: 4, offset: 8957 },
                    end: { line: 166, column: 8, offset: 8961 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 8957 },
                end: { line: 166, column: 8, offset: 8961 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 8955 },
            end: { line: 166, column: 8, offset: 8961 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 8929 },
        end: { line: 166, column: 8, offset: 8961 }
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
            start: { line: 168, column: 5, offset: 8967 },
            end: { line: 168, column: 30, offset: 8992 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 8963 },
        end: { line: 168, column: 30, offset: 8992 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Response Status Code 100',
          position: {
            start: { line: 170, column: 6, offset: 8999 },
            end: { line: 170, column: 35, offset: 9028 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 8994 },
        end: { line: 170, column: 35, offset: 9028 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'HTTP Response Status Code 200',
          position: {
            start: { line: 172, column: 6, offset: 9035 },
            end: { line: 172, column: 35, offset: 9064 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9030 },
        end: { line: 172, column: 35, offset: 9064 }
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
            start: { line: 174, column: 5, offset: 9070 },
            end: { line: 174, column: 26, offset: 9091 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9066 },
        end: { line: 174, column: 26, offset: 9091 }
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
            start: { line: 175, column: 5, offset: 9096 },
            end: { line: 175, column: 23, offset: 9114 }
          }
        }
      ],
      position: {
        start: { line: 175, column: 1, offset: 9092 },
        end: { line: 175, column: 23, offset: 9114 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some common values for the ',
          position: {
            start: { line: 177, column: 1, offset: 9116 },
            end: { line: 177, column: 28, offset: 9143 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 177, column: 28, offset: 9143 },
            end: { line: 177, column: 42, offset: 9157 }
          }
        },
        {
          type: 'text',
          value: ' header of string response bodies are ',
          position: {
            start: { line: 177, column: 42, offset: 9157 },
            end: { line: 177, column: 80, offset: 9195 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/plain',
          position: {
            start: { line: 177, column: 80, offset: 9195 },
            end: { line: 177, column: 92, offset: 9207 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 177, column: 92, offset: 9207 },
            end: { line: 177, column: 94, offset: 9209 }
          }
        },
        {
          type: 'inlineCode',
          value: 'application/json',
          position: {
            start: { line: 177, column: 94, offset: 9209 },
            end: { line: 177, column: 112, offset: 9227 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 177, column: 112, offset: 9227 },
            end: { line: 177, column: 114, offset: 9229 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/html',
          position: {
            start: { line: 177, column: 114, offset: 9229 },
            end: { line: 177, column: 125, offset: 9240 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 177, column: 125, offset: 9240 },
            end: { line: 177, column: 131, offset: 9246 }
          }
        },
        {
          type: 'inlineCode',
          value: 'text/xml',
          position: {
            start: { line: 177, column: 131, offset: 9246 },
            end: { line: 177, column: 141, offset: 9256 }
          }
        },
        {
          type: 'text',
          value: '. Some common values for the ',
          position: {
            start: { line: 177, column: 141, offset: 9256 },
            end: { line: 177, column: 170, offset: 9285 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Type',
          position: {
            start: { line: 177, column: 170, offset: 9285 },
            end: { line: 177, column: 184, offset: 9299 }
          }
        },
        {
          type: 'text',
          value: ' header of binary response bodies are ',
          position: {
            start: { line: 177, column: 184, offset: 9299 },
            end: { line: 177, column: 222, offset: 9337 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/jpg',
          position: {
            start: { line: 177, column: 222, offset: 9337 },
            end: { line: 177, column: 233, offset: 9348 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 177, column: 233, offset: 9348 },
            end: { line: 177, column: 235, offset: 9350 }
          }
        },
        {
          type: 'inlineCode',
          value: 'image/png',
          position: {
            start: { line: 177, column: 235, offset: 9350 },
            end: { line: 177, column: 246, offset: 9361 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 177, column: 246, offset: 9361 },
            end: { line: 177, column: 248, offset: 9363 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/mpeg',
          position: {
            start: { line: 177, column: 248, offset: 9363 },
            end: { line: 177, column: 260, offset: 9375 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 177, column: 260, offset: 9375 },
            end: { line: 177, column: 262, offset: 9377 }
          }
        },
        {
          type: 'inlineCode',
          value: 'audio/x-wav',
          position: {
            start: { line: 177, column: 262, offset: 9377 },
            end: { line: 177, column: 275, offset: 9390 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 177, column: 275, offset: 9390 },
            end: { line: 177, column: 281, offset: 9396 }
          }
        },
        {
          type: 'inlineCode',
          value: 'video/mp4',
          position: {
            start: { line: 177, column: 281, offset: 9396 },
            end: { line: 177, column: 292, offset: 9407 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 177, column: 292, offset: 9407 },
            end: { line: 177, column: 293, offset: 9408 }
          }
        }
      ],
      position: {
        start: { line: 177, column: 1, offset: 9116 },
        end: { line: 177, column: 293, offset: 9408 }
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
            start: { line: 179, column: 4, offset: 9413 },
            end: { line: 179, column: 15, offset: 9424 }
          }
        }
      ],
      position: {
        start: { line: 179, column: 1, offset: 9410 },
        end: { line: 179, column: 15, offset: 9424 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 181, column: 1, offset: 9426 },
            end: { line: 181, column: 226, offset: 9651 }
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
                start: { line: 181, column: 227, offset: 9652 },
                end: { line: 181, column: 233, offset: 9658 }
              }
            }
          ],
          position: {
            start: { line: 181, column: 226, offset: 9651 },
            end: { line: 181, column: 273, offset: 9698 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 181, column: 273, offset: 9698 },
            end: { line: 181, column: 387, offset: 9812 }
          }
        }
      ],
      position: {
        start: { line: 181, column: 1, offset: 9426 },
        end: { line: 181, column: 387, offset: 9812 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 183, column: 1, offset: 9814 },
            end: { line: 183, column: 23, offset: 9836 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 183, column: 23, offset: 9836 },
            end: { line: 183, column: 29, offset: 9842 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 183, column: 29, offset: 9842 },
            end: { line: 183, column: 62, offset: 9875 }
          }
        }
      ],
      position: {
        start: { line: 183, column: 1, offset: 9814 },
        end: { line: 183, column: 62, offset: 9875 }
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
        start: { line: 185, column: 1, offset: 9877 },
        end: { line: 198, column: 4, offset: 10113 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates an HTTP server with ',
          position: {
            start: { line: 200, column: 1, offset: 10115 },
            end: { line: 200, column: 52, offset: 10166 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 200, column: 52, offset: 10166 },
            end: { line: 200, column: 71, offset: 10185 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 200, column: 71, offset: 10185 },
            end: { line: 200, column: 100, offset: 10214 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 200, column: 100, offset: 10214 },
            end: { line: 200, column: 130, offset: 10244 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 200, column: 130, offset: 10244 },
            end: { line: 200, column: 173, offset: 10287 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 200, column: 173, offset: 10287 },
            end: { line: 200, column: 179, offset: 10293 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 200, column: 179, offset: 10293 },
            end: { line: 200, column: 197, offset: 10311 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 200, column: 197, offset: 10311 },
            end: { line: 200, column: 212, offset: 10326 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 200, column: 212, offset: 10326 },
            end: { line: 200, column: 213, offset: 10327 }
          }
        }
      ],
      position: {
        start: { line: 200, column: 1, offset: 10115 },
        end: { line: 200, column: 213, offset: 10327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 202, column: 1, offset: 10329 },
            end: { line: 202, column: 45, offset: 10373 }
          }
        }
      ],
      position: {
        start: { line: 202, column: 1, offset: 10329 },
        end: { line: 202, column: 45, offset: 10373 }
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
                    start: { line: 203, column: 4, offset: 10377 },
                    end: { line: 203, column: 8, offset: 10381 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10377 },
                end: { line: 203, column: 8, offset: 10381 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10375 },
            end: { line: 203, column: 8, offset: 10381 }
          }
        }
      ],
      position: {
        start: { line: 203, column: 2, offset: 10375 },
        end: { line: 203, column: 8, offset: 10381 }
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
            start: { line: 205, column: 5, offset: 10387 },
            end: { line: 205, column: 21, offset: 10403 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 10383 },
        end: { line: 205, column: 21, offset: 10403 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server port is...',
          position: {
            start: { line: 207, column: 1, offset: 10405 },
            end: { line: 207, column: 27, offset: 10431 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 10405 },
        end: { line: 207, column: 27, offset: 10431 }
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
            start: { line: 209, column: 4, offset: 10436 },
            end: { line: 209, column: 16, offset: 10448 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 10433 },
        end: { line: 209, column: 16, offset: 10448 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 211, column: 1, offset: 10450 },
            end: { line: 211, column: 109, offset: 10558 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 10450 },
        end: { line: 211, column: 109, offset: 10558 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 213, column: 1, offset: 10560 },
            end: { line: 213, column: 61, offset: 10620 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 10560 },
        end: { line: 213, column: 61, offset: 10620 }
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
                    start: { line: 214, column: 4, offset: 10624 },
                    end: { line: 214, column: 74, offset: 10694 }
                  }
                }
              ],
              position: {
                start: { line: 214, column: 4, offset: 10624 },
                end: { line: 214, column: 74, offset: 10694 }
              }
            }
          ],
          position: {
            start: { line: 214, column: 2, offset: 10622 },
            end: { line: 214, column: 74, offset: 10694 }
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
                    start: { line: 215, column: 4, offset: 10698 },
                    end: { line: 215, column: 52, offset: 10746 }
                  }
                }
              ],
              position: {
                start: { line: 215, column: 4, offset: 10698 },
                end: { line: 215, column: 52, offset: 10746 }
              }
            }
          ],
          position: {
            start: { line: 215, column: 2, offset: 10696 },
            end: { line: 215, column: 52, offset: 10746 }
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
                    start: { line: 216, column: 4, offset: 10750 },
                    end: { line: 216, column: 237, offset: 10983 }
                  }
                }
              ],
              position: {
                start: { line: 216, column: 4, offset: 10750 },
                end: { line: 216, column: 237, offset: 10983 }
              }
            }
          ],
          position: {
            start: { line: 216, column: 2, offset: 10748 },
            end: { line: 216, column: 237, offset: 10983 }
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
                    start: { line: 217, column: 4, offset: 10987 },
                    end: { line: 217, column: 128, offset: 11111 }
                  }
                }
              ],
              position: {
                start: { line: 217, column: 4, offset: 10987 },
                end: { line: 217, column: 128, offset: 11111 }
              }
            }
          ],
          position: {
            start: { line: 217, column: 2, offset: 10985 },
            end: { line: 217, column: 128, offset: 11111 }
          }
        }
      ],
      position: {
        start: { line: 214, column: 2, offset: 10622 },
        end: { line: 217, column: 128, offset: 11111 }
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
            start: { line: 219, column: 5, offset: 11117 },
            end: { line: 219, column: 28, offset: 11140 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11113 },
        end: { line: 219, column: 28, offset: 11140 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 221, column: 1, offset: 11142 },
            end: { line: 221, column: 33, offset: 11174 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 221, column: 33, offset: 11174 },
            end: { line: 221, column: 39, offset: 11180 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 221, column: 39, offset: 11180 },
            end: { line: 221, column: 161, offset: 11302 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 221, column: 161, offset: 11302 },
            end: { line: 221, column: 176, offset: 11317 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 221, column: 176, offset: 11317 },
            end: { line: 221, column: 184, offset: 11325 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11142 },
        end: { line: 221, column: 184, offset: 11325 }
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
        start: { line: 223, column: 1, offset: 11327 },
        end: { line: 236, column: 4, offset: 11652 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 238, column: 1, offset: 11654 },
            end: { line: 238, column: 12, offset: 11665 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 238, column: 12, offset: 11665 },
            end: { line: 238, column: 18, offset: 11671 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 238, column: 18, offset: 11671 },
            end: { line: 238, column: 88, offset: 11741 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 238, column: 88, offset: 11741 },
            end: { line: 238, column: 104, offset: 11757 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 238, column: 104, offset: 11757 },
            end: { line: 238, column: 113, offset: 11766 }
          }
        }
      ],
      position: {
        start: { line: 238, column: 1, offset: 11654 },
        end: { line: 238, column: 113, offset: 11766 }
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
        start: { line: 240, column: 1, offset: 11768 },
        end: { line: 246, column: 4, offset: 11965 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 248, column: 1, offset: 11967 },
            end: { line: 248, column: 35, offset: 12001 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 248, column: 35, offset: 12001 },
            end: { line: 248, column: 50, offset: 12016 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 248, column: 50, offset: 12016 },
            end: { line: 248, column: 55, offset: 12021 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 248, column: 55, offset: 12021 },
            end: { line: 248, column: 71, offset: 12037 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 248, column: 71, offset: 12037 },
            end: { line: 248, column: 112, offset: 12078 }
          }
        }
      ],
      position: {
        start: { line: 248, column: 1, offset: 11967 },
        end: { line: 248, column: 112, offset: 12078 }
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
        start: { line: 250, column: 1, offset: 12080 },
        end: { line: 265, column: 4, offset: 12511 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 267, column: 1, offset: 12513 },
            end: { line: 267, column: 81, offset: 12593 }
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
                start: { line: 267, column: 82, offset: 12594 },
                end: { line: 267, column: 93, offset: 12605 }
              }
            }
          ],
          position: {
            start: { line: 267, column: 81, offset: 12593 },
            end: { line: 267, column: 108, offset: 12620 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 267, column: 108, offset: 12620 },
            end: { line: 267, column: 117, offset: 12629 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 12513 },
        end: { line: 267, column: 117, offset: 12629 }
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
        start: { line: 269, column: 1, offset: 12631 },
        end: { line: 303, column: 4, offset: 13282 }
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
            start: { line: 305, column: 5, offset: 13288 },
            end: { line: 305, column: 59, offset: 13342 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 13284 },
        end: { line: 305, column: 59, offset: 13342 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 306, column: 1, offset: 13343 }
  }
}