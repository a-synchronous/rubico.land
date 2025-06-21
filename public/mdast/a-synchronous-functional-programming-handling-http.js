export default {
  type: 'root',
  children: [
    {
      type: 'yaml',
      value: 'title: [A]synchronous Functional Programming - Handling HTTP\n' +
        'author: Richard Tong, CTO and Co-Founder of Claimyr Inc.\n' +
        'date: 2025-06-21\n' +
        'updated: 2025-06-21\n' +
        'path: /blog/a-synchronous-functional-programming-handling-http\n' +
        'description: Handling HTTP in [A]synchronous Functional Programming\n' +
        'image: /assets/HTTP_logo.png',
      position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 9, column: 4, offset: 322 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Welcome to Handling HTTP in [A]synchronous Functional Programming. In this article we will discuss how to handle HTTP in the context of the [A]synchronous Functional Programming paradigm in JavaScript.',
          position: {
            start: { line: 11, column: 1, offset: 324 },
            end: { line: 11, column: 202, offset: 525 }
          }
        }
      ],
      position: {
        start: { line: 11, column: 1, offset: 324 },
        end: { line: 11, column: 202, offset: 525 }
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
            start: { line: 13, column: 4, offset: 530 },
            end: { line: 13, column: 8, offset: 534 }
          }
        }
      ],
      position: {
        start: { line: 13, column: 1, offset: 527 },
        end: { line: 13, column: 8, offset: 534 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP (Hypertext Transfer Protocol) is a ',
          position: {
            start: { line: 15, column: 1, offset: 536 },
            end: { line: 15, column: 41, offset: 576 }
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
                start: { line: 15, column: 42, offset: 577 },
                end: { line: 15, column: 50, offset: 585 }
              }
            }
          ],
          position: {
            start: { line: 15, column: 41, offset: 576 },
            end: { line: 15, column: 122, offset: 657 }
          }
        },
        {
          type: 'text',
          value: ' by which data is transferred over the internet. The internet is just a bunch of computers (including PCs, laptops, and smartphones), and those computers communicate with each other using HTTP. When you visit a website, chances are it was served to you using HTTP. When you use a mobile app, chances are it used HTTP to serve you content.',
          position: {
            start: { line: 15, column: 122, offset: 657 },
            end: { line: 15, column: 460, offset: 995 }
          }
        }
      ],
      position: {
        start: { line: 15, column: 1, offset: 536 },
        end: { line: 15, column: 460, offset: 995 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP adheres to the ',
          position: {
            start: { line: 17, column: 1, offset: 997 },
            end: { line: 17, column: 21, offset: 1017 }
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
                start: { line: 17, column: 22, offset: 1018 },
                end: { line: 17, column: 41, offset: 1037 }
              }
            }
          ],
          position: {
            start: { line: 17, column: 21, offset: 1017 },
            end: { line: 17, column: 107, offset: 1103 }
          }
        },
        {
          type: 'text',
          value: ' where a client sends a request to a server and the server sends a response back to the client.',
          position: {
            start: { line: 17, column: 107, offset: 1103 },
            end: { line: 17, column: 202, offset: 1198 }
          }
        }
      ],
      position: {
        start: { line: 17, column: 1, offset: 997 },
        end: { line: 17, column: 202, offset: 1198 }
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
            start: { line: 19, column: 1, offset: 1200 },
            end: { line: 19, column: 46, offset: 1245 }
          }
        }
      ],
      position: {
        start: { line: 19, column: 1, offset: 1200 },
        end: { line: 19, column: 46, offset: 1245 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In order for clients to find the right servers to request, they need to use a URL.',
          position: {
            start: { line: 21, column: 1, offset: 1247 },
            end: { line: 21, column: 83, offset: 1329 }
          }
        }
      ],
      position: {
        start: { line: 21, column: 1, offset: 1247 },
        end: { line: 21, column: 83, offset: 1329 }
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
            start: { line: 23, column: 4, offset: 1334 },
            end: { line: 23, column: 7, offset: 1337 }
          }
        }
      ],
      position: {
        start: { line: 23, column: 1, offset: 1331 },
        end: { line: 23, column: 7, offset: 1337 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'A URL (Uniform Resource Locator) is a string that uniquely identifies the web address of a resource on the internet. A resource is information or content that can be identified and accessed via a URL. A resources can be a file, an image, a document, or a record in a database.',
          position: {
            start: { line: 25, column: 1, offset: 1339 },
            end: { line: 25, column: 277, offset: 1615 }
          }
        }
      ],
      position: {
        start: { line: 25, column: 1, offset: 1339 },
        end: { line: 25, column: 277, offset: 1615 }
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
            start: { line: 27, column: 1, offset: 1617 },
            end: { line: 27, column: 64, offset: 1680 }
          }
        }
      ],
      position: {
        start: { line: 27, column: 1, offset: 1617 },
        end: { line: 27, column: 64, offset: 1680 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The basic structure of a URL includes the following parts:',
          position: {
            start: { line: 29, column: 1, offset: 1682 },
            end: { line: 29, column: 59, offset: 1740 }
          }
        }
      ],
      position: {
        start: { line: 29, column: 1, offset: 1682 },
        end: { line: 29, column: 59, offset: 1740 }
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
                    start: { line: 30, column: 4, offset: 1744 },
                    end: { line: 30, column: 10, offset: 1750 }
                  }
                }
              ],
              position: {
                start: { line: 30, column: 4, offset: 1744 },
                end: { line: 30, column: 10, offset: 1750 }
              }
            }
          ],
          position: {
            start: { line: 30, column: 2, offset: 1742 },
            end: { line: 30, column: 10, offset: 1750 }
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
                    start: { line: 31, column: 4, offset: 1754 },
                    end: { line: 31, column: 15, offset: 1765 }
                  }
                }
              ],
              position: {
                start: { line: 31, column: 4, offset: 1754 },
                end: { line: 31, column: 15, offset: 1765 }
              }
            }
          ],
          position: {
            start: { line: 31, column: 2, offset: 1752 },
            end: { line: 31, column: 15, offset: 1765 }
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
                    start: { line: 32, column: 4, offset: 1769 },
                    end: { line: 32, column: 8, offset: 1773 }
                  }
                }
              ],
              position: {
                start: { line: 32, column: 4, offset: 1769 },
                end: { line: 32, column: 8, offset: 1773 }
              }
            }
          ],
          position: {
            start: { line: 32, column: 2, offset: 1767 },
            end: { line: 32, column: 8, offset: 1773 }
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
                    start: { line: 33, column: 4, offset: 1777 },
                    end: { line: 33, column: 13, offset: 1786 }
                  }
                }
              ],
              position: {
                start: { line: 33, column: 4, offset: 1777 },
                end: { line: 33, column: 13, offset: 1786 }
              }
            }
          ],
          position: {
            start: { line: 33, column: 2, offset: 1775 },
            end: { line: 33, column: 13, offset: 1786 }
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
                    start: { line: 34, column: 4, offset: 1790 },
                    end: { line: 34, column: 8, offset: 1794 }
                  }
                }
              ],
              position: {
                start: { line: 34, column: 4, offset: 1790 },
                end: { line: 34, column: 8, offset: 1794 }
              }
            }
          ],
          position: {
            start: { line: 34, column: 2, offset: 1788 },
            end: { line: 34, column: 8, offset: 1794 }
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
                    start: { line: 35, column: 4, offset: 1798 },
                    end: { line: 35, column: 20, offset: 1814 }
                  }
                }
              ],
              position: {
                start: { line: 35, column: 4, offset: 1798 },
                end: { line: 35, column: 20, offset: 1814 }
              }
            }
          ],
          position: {
            start: { line: 35, column: 2, offset: 1796 },
            end: { line: 35, column: 20, offset: 1814 }
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
                    start: { line: 36, column: 4, offset: 1818 },
                    end: { line: 36, column: 10, offset: 1824 }
                  }
                }
              ],
              position: {
                start: { line: 36, column: 4, offset: 1818 },
                end: { line: 36, column: 10, offset: 1824 }
              }
            }
          ],
          position: {
            start: { line: 36, column: 2, offset: 1816 },
            end: { line: 36, column: 10, offset: 1824 }
          }
        }
      ],
      position: {
        start: { line: 30, column: 2, offset: 1742 },
        end: { line: 36, column: 10, offset: 1824 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Scheme',
          position: {
            start: { line: 38, column: 5, offset: 1830 },
            end: { line: 38, column: 15, offset: 1840 }
          }
        }
      ],
      position: {
        start: { line: 38, column: 1, offset: 1826 },
        end: { line: 38, column: 15, offset: 1840 }
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
            start: { line: 40, column: 1, offset: 1842 },
            end: { line: 40, column: 78, offset: 1919 }
          }
        }
      ],
      position: {
        start: { line: 40, column: 1, offset: 1842 },
        end: { line: 40, column: 78, offset: 1919 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The scheme of a URL specifies the protocol that the client will use to send a request to the server. For HTTP, the scheme could be ',
          position: {
            start: { line: 42, column: 1, offset: 1921 },
            end: { line: 42, column: 132, offset: 2052 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 42, column: 132, offset: 2052 },
            end: { line: 42, column: 138, offset: 2058 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 42, column: 138, offset: 2058 },
            end: { line: 42, column: 142, offset: 2062 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https',
          position: {
            start: { line: 42, column: 142, offset: 2062 },
            end: { line: 42, column: 149, offset: 2069 }
          }
        },
        {
          type: 'text',
          value: '. Other schemes include ',
          position: {
            start: { line: 42, column: 149, offset: 2069 },
            end: { line: 42, column: 173, offset: 2093 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ws',
          position: {
            start: { line: 42, column: 173, offset: 2093 },
            end: { line: 42, column: 177, offset: 2097 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 42, column: 177, offset: 2097 },
            end: { line: 42, column: 182, offset: 2102 }
          }
        },
        {
          type: 'inlineCode',
          value: 'wss',
          position: {
            start: { line: 42, column: 182, offset: 2102 },
            end: { line: 42, column: 187, offset: 2107 }
          }
        },
        {
          type: 'text',
          value: ' for the WebSocket protocol, ',
          position: {
            start: { line: 42, column: 187, offset: 2107 },
            end: { line: 42, column: 216, offset: 2136 }
          }
        },
        {
          type: 'inlineCode',
          value: 'mailto',
          position: {
            start: { line: 42, column: 216, offset: 2136 },
            end: { line: 42, column: 224, offset: 2144 }
          }
        },
        {
          type: 'text',
          value: ' for the "mailto:" protocol, and ',
          position: {
            start: { line: 42, column: 224, offset: 2144 },
            end: { line: 42, column: 257, offset: 2177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'file',
          position: {
            start: { line: 42, column: 257, offset: 2177 },
            end: { line: 42, column: 263, offset: 2183 }
          }
        },
        {
          type: 'text',
          value: ' for the "file:" protocol.',
          position: {
            start: { line: 42, column: 263, offset: 2183 },
            end: { line: 42, column: 289, offset: 2209 }
          }
        }
      ],
      position: {
        start: { line: 42, column: 1, offset: 1921 },
        end: { line: 42, column: 289, offset: 2209 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Domain Name',
          position: {
            start: { line: 44, column: 5, offset: 2215 },
            end: { line: 44, column: 20, offset: 2230 }
          }
        }
      ],
      position: {
        start: { line: 44, column: 1, offset: 2211 },
        end: { line: 44, column: 20, offset: 2230 }
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
            start: { line: 46, column: 1, offset: 2232 },
            end: { line: 46, column: 88, offset: 2319 }
          }
        }
      ],
      position: {
        start: { line: 46, column: 1, offset: 2232 },
        end: { line: 46, column: 88, offset: 2319 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The domain name of a URL is a unique name that translates to the address of a computer where the resource of the URL is located. Domain names are translated via the ',
          position: {
            start: { line: 48, column: 1, offset: 2321 },
            end: { line: 48, column: 166, offset: 2486 }
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
                start: { line: 48, column: 167, offset: 2487 },
                end: { line: 48, column: 191, offset: 2511 }
              }
            }
          ],
          position: {
            start: { line: 48, column: 166, offset: 2486 },
            end: { line: 48, column: 246, offset: 2566 }
          }
        },
        {
          type: 'text',
          value: ' to computer addresses running web servers to which HTTP clients can send requests.',
          position: {
            start: { line: 48, column: 246, offset: 2566 },
            end: { line: 48, column: 329, offset: 2649 }
          }
        }
      ],
      position: {
        start: { line: 48, column: 1, offset: 2321 },
        end: { line: 48, column: 329, offset: 2649 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Port',
          position: {
            start: { line: 50, column: 5, offset: 2655 },
            end: { line: 50, column: 13, offset: 2663 }
          }
        }
      ],
      position: {
        start: { line: 50, column: 1, offset: 2651 },
        end: { line: 50, column: 13, offset: 2663 }
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
            start: { line: 52, column: 1, offset: 2665 },
            end: { line: 52, column: 74, offset: 2738 }
          }
        }
      ],
      position: {
        start: { line: 52, column: 1, offset: 2665 },
        end: { line: 52, column: 74, offset: 2738 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The port of a URL is a number that identifies a specific process or network service running on the computer where the resource of the URL is located. When a computer starts up a process like a web server, it can assign it a numerical port between 0 and 65535. The web server would then listen on this assigned port for HTTP requests.',
          position: {
            start: { line: 54, column: 1, offset: 2740 },
            end: { line: 54, column: 334, offset: 3073 }
          }
        }
      ],
      position: {
        start: { line: 54, column: 1, offset: 2740 },
        end: { line: 54, column: 334, offset: 3073 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Authority',
          position: {
            start: { line: 56, column: 5, offset: 3079 },
            end: { line: 56, column: 18, offset: 3092 }
          }
        }
      ],
      position: {
        start: { line: 56, column: 1, offset: 3075 },
        end: { line: 56, column: 18, offset: 3092 }
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
            start: { line: 58, column: 1, offset: 3094 },
            end: { line: 58, column: 84, offset: 3177 }
          }
        }
      ],
      position: {
        start: { line: 58, column: 1, offset: 3094 },
        end: { line: 58, column: 84, offset: 3177 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The authority of a URL consists of the domain name and port of the URL separated by a colon.',
          position: {
            start: { line: 60, column: 1, offset: 3179 },
            end: { line: 60, column: 93, offset: 3271 }
          }
        }
      ],
      position: {
        start: { line: 60, column: 1, offset: 3179 },
        end: { line: 60, column: 93, offset: 3271 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Path',
          position: {
            start: { line: 62, column: 5, offset: 3277 },
            end: { line: 62, column: 13, offset: 3285 }
          }
        }
      ],
      position: {
        start: { line: 62, column: 1, offset: 3273 },
        end: { line: 62, column: 13, offset: 3285 }
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
            start: { line: 64, column: 1, offset: 3287 },
            end: { line: 64, column: 74, offset: 3360 }
          }
        }
      ],
      position: {
        start: { line: 64, column: 1, offset: 3287 },
        end: { line: 64, column: 74, offset: 3360 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The path of a URL is a string that identifies the physical or abstract location of the resource within the URL's domain.",
          position: {
            start: { line: 66, column: 1, offset: 3362 },
            end: { line: 66, column: 121, offset: 3482 }
          }
        }
      ],
      position: {
        start: { line: 66, column: 1, offset: 3362 },
        end: { line: 66, column: 121, offset: 3482 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Query Parameters',
          position: {
            start: { line: 68, column: 5, offset: 3488 },
            end: { line: 68, column: 25, offset: 3508 }
          }
        }
      ],
      position: {
        start: { line: 68, column: 1, offset: 3484 },
        end: { line: 68, column: 25, offset: 3508 }
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
            start: { line: 70, column: 1, offset: 3510 },
            end: { line: 70, column: 98, offset: 3607 }
          }
        }
      ],
      position: {
        start: { line: 70, column: 1, offset: 3510 },
        end: { line: 70, column: 98, offset: 3607 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The query parameters of a URL are a list of key-value pairs separated by the ',
          position: {
            start: { line: 72, column: 1, offset: 3609 },
            end: { line: 72, column: 78, offset: 3686 }
          }
        },
        {
          type: 'inlineCode',
          value: '&',
          position: {
            start: { line: 72, column: 78, offset: 3686 },
            end: { line: 72, column: 81, offset: 3689 }
          }
        },
        {
          type: 'text',
          value: ' symbol. The query parameters can further identify the resource of a URL.',
          position: {
            start: { line: 72, column: 81, offset: 3689 },
            end: { line: 72, column: 154, offset: 3762 }
          }
        }
      ],
      position: {
        start: { line: 72, column: 1, offset: 3609 },
        end: { line: 72, column: 154, offset: 3762 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'URL Anchor',
          position: {
            start: { line: 74, column: 5, offset: 3768 },
            end: { line: 74, column: 15, offset: 3778 }
          }
        }
      ],
      position: {
        start: { line: 74, column: 1, offset: 3764 },
        end: { line: 74, column: 15, offset: 3778 }
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
            start: { line: 76, column: 1, offset: 3780 },
            end: { line: 76, column: 78, offset: 3857 }
          }
        }
      ],
      position: {
        start: { line: 76, column: 1, offset: 3780 },
        end: { line: 76, column: 78, offset: 3857 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: `The anchor of a URL specifies a part of the URL's resource, and does not necessarily locate the resource. When a web server serves a web page as a resource, the anchor acts as a sort of "bookmark" inside the resource. Browsers will see the anchor and scroll the page down to where the section identified by the anchor is visible.`,
          position: {
            start: { line: 78, column: 1, offset: 3859 },
            end: { line: 78, column: 330, offset: 4188 }
          }
        }
      ],
      position: {
        start: { line: 78, column: 1, offset: 3859 },
        end: { line: 78, column: 330, offset: 4188 }
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
            start: { line: 80, column: 4, offset: 4193 },
            end: { line: 80, column: 15, offset: 4204 }
          }
        }
      ],
      position: {
        start: { line: 80, column: 1, offset: 4190 },
        end: { line: 80, column: 15, offset: 4204 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP client is a component of a ',
          position: {
            start: { line: 82, column: 1, offset: 4206 },
            end: { line: 82, column: 36, offset: 4241 }
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
                start: { line: 82, column: 37, offset: 4242 },
                end: { line: 82, column: 57, offset: 4262 }
              }
            }
          ],
          position: {
            start: { line: 82, column: 36, offset: 4241 },
            end: { line: 82, column: 110, offset: 4315 }
          }
        },
        {
          type: 'text',
          value: ' running inside a computer that sends HTTP requests to HTTP servers. The JavaScript code below is part of a software application that runs in your web browser. The code demonstrates the use of an HTTP client ',
          position: {
            start: { line: 82, column: 110, offset: 4315 },
            end: { line: 82, column: 318, offset: 4523 }
          }
        },
        {
          type: 'inlineCode',
          value: 'fetch',
          position: {
            start: { line: 82, column: 318, offset: 4523 },
            end: { line: 82, column: 325, offset: 4530 }
          }
        },
        {
          type: 'text',
          value: ' to send a request to an HTTP server at the url ',
          position: {
            start: { line: 82, column: 325, offset: 4530 },
            end: { line: 82, column: 373, offset: 4578 }
          }
        },
        {
          type: 'inlineCode',
          value: 'https://jsonplaceholder.typicode.com/todos/1',
          position: {
            start: { line: 82, column: 373, offset: 4578 },
            end: { line: 82, column: 419, offset: 4624 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 82, column: 419, offset: 4624 },
            end: { line: 82, column: 420, offset: 4625 }
          }
        }
      ],
      position: {
        start: { line: 82, column: 1, offset: 4206 },
        end: { line: 82, column: 420, offset: 4625 }
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
        start: { line: 84, column: 1, offset: 4627 },
        end: { line: 95, column: 4, offset: 4960 }
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
            start: { line: 97, column: 4, offset: 4965 },
            end: { line: 97, column: 16, offset: 4977 }
          }
        }
      ],
      position: {
        start: { line: 97, column: 1, offset: 4962 },
        end: { line: 97, column: 16, offset: 4977 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP request is a message conforming to the HTTP protocol that a client sends to a server. An HTTP request has the following properties:',
          position: {
            start: { line: 99, column: 1, offset: 4979 },
            end: { line: 99, column: 140, offset: 5118 }
          }
        }
      ],
      position: {
        start: { line: 99, column: 1, offset: 4979 },
        end: { line: 99, column: 140, offset: 5118 }
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
                    start: { line: 100, column: 4, offset: 5122 },
                    end: { line: 100, column: 10, offset: 5128 }
                  }
                }
              ],
              position: {
                start: { line: 100, column: 4, offset: 5122 },
                end: { line: 100, column: 10, offset: 5128 }
              }
            }
          ],
          position: {
            start: { line: 100, column: 2, offset: 5120 },
            end: { line: 100, column: 10, offset: 5128 }
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
                    start: { line: 101, column: 4, offset: 5132 },
                    end: { line: 101, column: 7, offset: 5135 }
                  }
                }
              ],
              position: {
                start: { line: 101, column: 4, offset: 5132 },
                end: { line: 101, column: 7, offset: 5135 }
              }
            }
          ],
          position: {
            start: { line: 101, column: 2, offset: 5130 },
            end: { line: 101, column: 7, offset: 5135 }
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
                    start: { line: 102, column: 4, offset: 5139 },
                    end: { line: 102, column: 11, offset: 5146 }
                  }
                }
              ],
              position: {
                start: { line: 102, column: 4, offset: 5139 },
                end: { line: 102, column: 11, offset: 5146 }
              }
            }
          ],
          position: {
            start: { line: 102, column: 2, offset: 5137 },
            end: { line: 102, column: 11, offset: 5146 }
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
                    start: { line: 103, column: 4, offset: 5150 },
                    end: { line: 103, column: 8, offset: 5154 }
                  }
                }
              ],
              position: {
                start: { line: 103, column: 4, offset: 5150 },
                end: { line: 103, column: 8, offset: 5154 }
              }
            }
          ],
          position: {
            start: { line: 103, column: 2, offset: 5148 },
            end: { line: 103, column: 8, offset: 5154 }
          }
        }
      ],
      position: {
        start: { line: 100, column: 2, offset: 5120 },
        end: { line: 103, column: 8, offset: 5154 }
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
            start: { line: 105, column: 5, offset: 5160 },
            end: { line: 105, column: 24, offset: 5179 }
          }
        }
      ],
      position: {
        start: { line: 105, column: 1, offset: 5156 },
        end: { line: 105, column: 24, offset: 5179 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request method is a verb that specifies the purpose of the request, and often dictates the behavior of the web server at the url being requested. The request methods are as follows: ',
          position: {
            start: { line: 107, column: 1, offset: 5181 },
            end: { line: 107, column: 192, offset: 5372 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 107, column: 192, offset: 5372 },
            end: { line: 107, column: 197, offset: 5377 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 197, offset: 5377 },
            end: { line: 107, column: 199, offset: 5379 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 107, column: 199, offset: 5379 },
            end: { line: 107, column: 205, offset: 5385 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 205, offset: 5385 },
            end: { line: 107, column: 207, offset: 5387 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 107, column: 207, offset: 5387 },
            end: { line: 107, column: 213, offset: 5393 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 213, offset: 5393 },
            end: { line: 107, column: 215, offset: 5395 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 107, column: 215, offset: 5395 },
            end: { line: 107, column: 220, offset: 5400 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 220, offset: 5400 },
            end: { line: 107, column: 222, offset: 5402 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 107, column: 222, offset: 5402 },
            end: { line: 107, column: 229, offset: 5409 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 229, offset: 5409 },
            end: { line: 107, column: 231, offset: 5411 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 107, column: 231, offset: 5411 },
            end: { line: 107, column: 239, offset: 5419 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 239, offset: 5419 },
            end: { line: 107, column: 241, offset: 5421 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 107, column: 241, offset: 5421 },
            end: { line: 107, column: 250, offset: 5430 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 107, column: 250, offset: 5430 },
            end: { line: 107, column: 252, offset: 5432 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 107, column: 252, offset: 5432 },
            end: { line: 107, column: 261, offset: 5441 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 107, column: 261, offset: 5441 },
            end: { line: 107, column: 267, offset: 5447 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 107, column: 267, offset: 5447 },
            end: { line: 107, column: 274, offset: 5454 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 107, column: 274, offset: 5454 },
            end: { line: 107, column: 275, offset: 5455 }
          }
        }
      ],
      position: {
        start: { line: 107, column: 1, offset: 5181 },
        end: { line: 107, column: 275, offset: 5455 }
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
            start: { line: 109, column: 6, offset: 5462 },
            end: { line: 109, column: 9, offset: 5465 }
          }
        }
      ],
      position: {
        start: { line: 109, column: 1, offset: 5457 },
        end: { line: 109, column: 9, offset: 5465 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 111, column: 1, offset: 5467 },
            end: { line: 111, column: 5, offset: 5471 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 5, offset: 5471 },
            end: { line: 111, column: 10, offset: 5476 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for a data representation of the resource. ',
          position: {
            start: { line: 111, column: 10, offset: 5476 },
            end: { line: 111, column: 94, offset: 5560 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 111, column: 94, offset: 5560 },
            end: { line: 111, column: 99, offset: 5565 }
          }
        },
        {
          type: 'text',
          value: ' requests are ',
          position: {
            start: { line: 111, column: 99, offset: 5565 },
            end: { line: 111, column: 113, offset: 5579 }
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
                start: { line: 111, column: 114, offset: 5580 },
                end: { line: 111, column: 118, offset: 5584 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 113, offset: 5579 },
            end: { line: 111, column: 180, offset: 5646 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 111, column: 180, offset: 5646 },
            end: { line: 111, column: 182, offset: 5648 }
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
                start: { line: 111, column: 183, offset: 5649 },
                end: { line: 111, column: 193, offset: 5659 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 182, offset: 5648 },
            end: { line: 111, column: 256, offset: 5722 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 111, column: 256, offset: 5722 },
            end: { line: 111, column: 262, offset: 5728 }
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
                start: { line: 111, column: 263, offset: 5729 },
                end: { line: 111, column: 272, offset: 5738 }
              }
            }
          ],
          position: {
            start: { line: 111, column: 262, offset: 5728 },
            end: { line: 111, column: 334, offset: 5800 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 111, column: 334, offset: 5800 },
            end: { line: 111, column: 335, offset: 5801 }
          }
        }
      ],
      position: {
        start: { line: 111, column: 1, offset: 5467 },
        end: { line: 111, column: 335, offset: 5801 }
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
            start: { line: 113, column: 6, offset: 5808 },
            end: { line: 113, column: 10, offset: 5812 }
          }
        }
      ],
      position: {
        start: { line: 113, column: 1, offset: 5803 },
        end: { line: 113, column: 10, offset: 5812 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 115, column: 1, offset: 5814 },
            end: { line: 115, column: 5, offset: 5818 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 5, offset: 5818 },
            end: { line: 115, column: 11, offset: 5824 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server for metadata about the resource. ',
          position: {
            start: { line: 115, column: 11, offset: 5824 },
            end: { line: 115, column: 85, offset: 5898 }
          }
        },
        {
          type: 'inlineCode',
          value: 'HEAD',
          position: {
            start: { line: 115, column: 85, offset: 5898 },
            end: { line: 115, column: 91, offset: 5904 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, idempotent, and cacheable.',
          position: {
            start: { line: 115, column: 91, offset: 5904 },
            end: { line: 115, column: 137, offset: 5950 }
          }
        }
      ],
      position: {
        start: { line: 115, column: 1, offset: 5814 },
        end: { line: 115, column: 137, offset: 5950 }
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
            start: { line: 117, column: 6, offset: 5957 },
            end: { line: 117, column: 10, offset: 5961 }
          }
        }
      ],
      position: {
        start: { line: 117, column: 1, offset: 5952 },
        end: { line: 117, column: 10, offset: 5961 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 119, column: 1, offset: 5963 },
            end: { line: 119, column: 5, offset: 5967 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 5, offset: 5967 },
            end: { line: 119, column: 11, offset: 5973 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to create or update the resource. ',
          position: {
            start: { line: 119, column: 11, offset: 5973 },
            end: { line: 119, column: 95, offset: 6057 }
          }
        },
        {
          type: 'inlineCode',
          value: 'POST',
          position: {
            start: { line: 119, column: 95, offset: 6057 },
            end: { line: 119, column: 101, offset: 6063 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes ',
          position: {
            start: { line: 119, column: 101, offset: 6063 },
            end: { line: 119, column: 195, offset: 6157 }
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
                start: { line: 119, column: 196, offset: 6158 },
                end: { line: 119, column: 205, offset: 6167 }
              }
            }
          ],
          position: {
            start: { line: 119, column: 195, offset: 6157 },
            end: { line: 119, column: 267, offset: 6229 }
          }
        },
        {
          type: 'text',
          value: ' information via the ',
          position: {
            start: { line: 119, column: 267, offset: 6229 },
            end: { line: 119, column: 288, offset: 6250 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 119, column: 288, offset: 6250 },
            end: { line: 119, column: 297, offset: 6259 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 119, column: 297, offset: 6259 },
            end: { line: 119, column: 301, offset: 6263 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 119, column: 301, offset: 6263 },
            end: { line: 119, column: 316, offset: 6278 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 119, column: 316, offset: 6278 },
            end: { line: 119, column: 338, offset: 6300 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 119, column: 338, offset: 6300 },
            end: { line: 119, column: 356, offset: 6318 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 119, column: 356, offset: 6318 },
            end: { line: 119, column: 364, offset: 6326 }
          }
        }
      ],
      position: {
        start: { line: 119, column: 1, offset: 5963 },
        end: { line: 119, column: 364, offset: 6326 }
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
            start: { line: 121, column: 6, offset: 6333 },
            end: { line: 121, column: 9, offset: 6336 }
          }
        }
      ],
      position: {
        start: { line: 121, column: 1, offset: 6328 },
        end: { line: 121, column: 9, offset: 6336 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 123, column: 1, offset: 6338 },
            end: { line: 123, column: 5, offset: 6342 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 5, offset: 6342 },
            end: { line: 123, column: 10, offset: 6347 }
          }
        },
        {
          type: 'text',
          value: " HTTP request method sends data to the web server to replace the resource. If the resource doesn't exist, it may be created. ",
          position: {
            start: { line: 123, column: 10, offset: 6347 },
            end: { line: 123, column: 135, offset: 6472 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PUT',
          position: {
            start: { line: 123, column: 135, offset: 6472 },
            end: { line: 123, column: 140, offset: 6477 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are cacheable.',
          position: {
            start: { line: 123, column: 140, offset: 6477 },
            end: { line: 123, column: 198, offset: 6535 }
          }
        }
      ],
      position: {
        start: { line: 123, column: 1, offset: 6338 },
        end: { line: 123, column: 198, offset: 6535 }
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
            start: { line: 125, column: 6, offset: 6542 },
            end: { line: 125, column: 11, offset: 6547 }
          }
        }
      ],
      position: {
        start: { line: 125, column: 1, offset: 6537 },
        end: { line: 125, column: 11, offset: 6547 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 127, column: 1, offset: 6549 },
            end: { line: 127, column: 5, offset: 6553 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 5, offset: 6553 },
            end: { line: 127, column: 12, offset: 6560 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method sends data to the web server to partially update the resource. ',
          position: {
            start: { line: 127, column: 12, offset: 6560 },
            end: { line: 127, column: 96, offset: 6644 }
          }
        },
        {
          type: 'inlineCode',
          value: 'PATCH',
          position: {
            start: { line: 127, column: 96, offset: 6644 },
            end: { line: 127, column: 103, offset: 6651 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are cacheable only when the response includes freshness information via the ',
          position: {
            start: { line: 127, column: 103, offset: 6651 },
            end: { line: 127, column: 227, offset: 6775 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Expires',
          position: {
            start: { line: 127, column: 227, offset: 6775 },
            end: { line: 127, column: 236, offset: 6784 }
          }
        },
        {
          type: 'text',
          value: ' or ',
          position: {
            start: { line: 127, column: 236, offset: 6784 },
            end: { line: 127, column: 240, offset: 6788 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Cache-Control',
          position: {
            start: { line: 127, column: 240, offset: 6788 },
            end: { line: 127, column: 255, offset: 6803 }
          }
        },
        {
          type: 'text',
          value: ' headers as well as a ',
          position: {
            start: { line: 127, column: 255, offset: 6803 },
            end: { line: 127, column: 277, offset: 6825 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Content-Location',
          position: {
            start: { line: 127, column: 277, offset: 6825 },
            end: { line: 127, column: 295, offset: 6843 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 127, column: 295, offset: 6843 },
            end: { line: 127, column: 303, offset: 6851 }
          }
        }
      ],
      position: {
        start: { line: 127, column: 1, offset: 6549 },
        end: { line: 127, column: 303, offset: 6851 }
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
            start: { line: 129, column: 6, offset: 6858 },
            end: { line: 129, column: 12, offset: 6864 }
          }
        }
      ],
      position: {
        start: { line: 129, column: 1, offset: 6853 },
        end: { line: 129, column: 12, offset: 6864 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 131, column: 1, offset: 6866 },
            end: { line: 131, column: 5, offset: 6870 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 5, offset: 6870 },
            end: { line: 131, column: 13, offset: 6878 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to remove the resource. ',
          position: {
            start: { line: 131, column: 13, offset: 6878 },
            end: { line: 131, column: 78, offset: 6943 }
          }
        },
        {
          type: 'inlineCode',
          value: 'DELETE',
          position: {
            start: { line: 131, column: 78, offset: 6943 },
            end: { line: 131, column: 86, offset: 6951 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 131, column: 86, offset: 6951 },
            end: { line: 131, column: 148, offset: 7013 }
          }
        }
      ],
      position: {
        start: { line: 131, column: 1, offset: 6866 },
        end: { line: 131, column: 148, offset: 7013 }
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
            start: { line: 133, column: 6, offset: 7020 },
            end: { line: 133, column: 13, offset: 7027 }
          }
        }
      ],
      position: {
        start: { line: 133, column: 1, offset: 7015 },
        end: { line: 133, column: 13, offset: 7027 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 135, column: 1, offset: 7029 },
            end: { line: 135, column: 5, offset: 7033 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 5, offset: 7033 },
            end: { line: 135, column: 14, offset: 7042 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to establish a tunnel to the server identified by the resource. ',
          position: {
            start: { line: 135, column: 14, offset: 7042 },
            end: { line: 135, column: 119, offset: 7147 }
          }
        },
        {
          type: 'inlineCode',
          value: 'CONNECT',
          position: {
            start: { line: 135, column: 119, offset: 7147 },
            end: { line: 135, column: 128, offset: 7156 }
          }
        },
        {
          type: 'text',
          value: ' requests are not safe, are not idempotent, and are not cacheable.',
          position: {
            start: { line: 135, column: 128, offset: 7156 },
            end: { line: 135, column: 194, offset: 7222 }
          }
        }
      ],
      position: {
        start: { line: 135, column: 1, offset: 7029 },
        end: { line: 135, column: 194, offset: 7222 }
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
            start: { line: 137, column: 6, offset: 7229 },
            end: { line: 137, column: 13, offset: 7236 }
          }
        }
      ],
      position: {
        start: { line: 137, column: 1, offset: 7224 },
        end: { line: 137, column: 13, offset: 7236 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 139, column: 1, offset: 7238 },
            end: { line: 139, column: 5, offset: 7242 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 5, offset: 7242 },
            end: { line: 139, column: 14, offset: 7251 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to describe the communication options of the resource. ',
          position: {
            start: { line: 139, column: 14, offset: 7251 },
            end: { line: 139, column: 110, offset: 7347 }
          }
        },
        {
          type: 'inlineCode',
          value: 'OPTIONS',
          position: {
            start: { line: 139, column: 110, offset: 7347 },
            end: { line: 139, column: 119, offset: 7356 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 139, column: 119, offset: 7356 },
            end: { line: 139, column: 177, offset: 7414 }
          }
        }
      ],
      position: {
        start: { line: 139, column: 1, offset: 7238 },
        end: { line: 139, column: 177, offset: 7414 }
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
            start: { line: 141, column: 6, offset: 7421 },
            end: { line: 141, column: 11, offset: 7426 }
          }
        }
      ],
      position: {
        start: { line: 141, column: 1, offset: 7416 },
        end: { line: 141, column: 11, offset: 7426 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 143, column: 1, offset: 7428 },
            end: { line: 143, column: 5, offset: 7432 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 5, offset: 7432 },
            end: { line: 143, column: 12, offset: 7439 }
          }
        },
        {
          type: 'text',
          value: ' HTTP request method asks the web server to perform a ',
          position: {
            start: { line: 143, column: 12, offset: 7439 },
            end: { line: 143, column: 66, offset: 7493 }
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
                start: { line: 143, column: 67, offset: 7494 },
                end: { line: 143, column: 81, offset: 7508 }
              }
            }
          ],
          position: {
            start: { line: 143, column: 66, offset: 7493 },
            end: { line: 143, column: 134, offset: 7561 }
          }
        },
        {
          type: 'text',
          value: ' along the path of the URL. ',
          position: {
            start: { line: 143, column: 134, offset: 7561 },
            end: { line: 143, column: 162, offset: 7589 }
          }
        },
        {
          type: 'inlineCode',
          value: 'TRACE',
          position: {
            start: { line: 143, column: 162, offset: 7589 },
            end: { line: 143, column: 169, offset: 7596 }
          }
        },
        {
          type: 'text',
          value: ' requests are safe, are idempotent, and are not cacheable.',
          position: {
            start: { line: 143, column: 169, offset: 7596 },
            end: { line: 143, column: 227, offset: 7654 }
          }
        }
      ],
      position: {
        start: { line: 143, column: 1, offset: 7428 },
        end: { line: 143, column: 227, offset: 7654 }
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
            start: { line: 145, column: 5, offset: 7660 },
            end: { line: 145, column: 21, offset: 7676 }
          }
        }
      ],
      position: {
        start: { line: 145, column: 1, offset: 7656 },
        end: { line: 145, column: 21, offset: 7676 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP request URL is the ',
          position: {
            start: { line: 147, column: 1, offset: 7678 },
            end: { line: 147, column: 29, offset: 7706 }
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
                start: { line: 147, column: 30, offset: 7707 },
                end: { line: 147, column: 33, offset: 7710 }
              }
            }
          ],
          position: {
            start: { line: 147, column: 29, offset: 7706 },
            end: { line: 147, column: 40, offset: 7717 }
          }
        },
        {
          type: 'text',
          value: ' of a request. The request URL is provided to the request when the request is made by the client.',
          position: {
            start: { line: 147, column: 40, offset: 7717 },
            end: { line: 147, column: 137, offset: 7814 }
          }
        }
      ],
      position: {
        start: { line: 147, column: 1, offset: 7678 },
        end: { line: 147, column: 137, offset: 7814 }
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
            start: { line: 149, column: 5, offset: 7820 },
            end: { line: 149, column: 25, offset: 7840 }
          }
        }
      ],
      position: {
        start: { line: 149, column: 1, offset: 7816 },
        end: { line: 149, column: 25, offset: 7840 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP request headers are key-value pairs assigned to each request. HTTP request headers pass additional context and metadata about the request.',
          position: {
            start: { line: 151, column: 1, offset: 7842 },
            end: { line: 151, column: 144, offset: 7985 }
          }
        }
      ],
      position: {
        start: { line: 151, column: 1, offset: 7842 },
        end: { line: 151, column: 144, offset: 7985 }
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
            start: { line: 153, column: 5, offset: 7991 },
            end: { line: 153, column: 22, offset: 8008 }
          }
        }
      ],
      position: {
        start: { line: 153, column: 1, offset: 7987 },
        end: { line: 153, column: 22, offset: 8008 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP request body is the part of the request that carries the bulk of the data sent to the server. The content type of the request body should be specified in the request's ",
          position: {
            start: { line: 155, column: 1, offset: 8010 },
            end: { line: 155, column: 178, offset: 8187 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type',
          children: [
            {
              type: 'text',
              value: 'Content-Type',
              position: {
                start: { line: 155, column: 179, offset: 8188 },
                end: { line: 155, column: 191, offset: 8200 }
              }
            }
          ],
          position: {
            start: { line: 155, column: 178, offset: 8187 },
            end: { line: 155, column: 274, offset: 8283 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 155, column: 274, offset: 8283 },
            end: { line: 155, column: 282, offset: 8291 }
          }
        }
      ],
      position: {
        start: { line: 155, column: 1, offset: 8010 },
        end: { line: 155, column: 282, offset: 8291 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP request bodies:',
          position: {
            start: { line: 157, column: 1, offset: 8293 },
            end: { line: 157, column: 38, offset: 8330 }
          }
        }
      ],
      position: {
        start: { line: 157, column: 1, offset: 8293 },
        end: { line: 157, column: 38, offset: 8330 }
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
                  url: 'https://www.json.org/json-en.html',
                  children: [
                    {
                      type: 'text',
                      value: 'JSON',
                      position: {
                        start: { line: 158, column: 5, offset: 8335 },
                        end: { line: 158, column: 9, offset: 8339 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 158, column: 4, offset: 8334 },
                    end: { line: 158, column: 45, offset: 8375 }
                  }
                },
                {
                  type: 'text',
                  value: ' - request body used for web applications. The request method is typically ',
                  position: {
                    start: { line: 158, column: 45, offset: 8375 },
                    end: { line: 158, column: 120, offset: 8450 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 158, column: 120, offset: 8450 },
                    end: { line: 158, column: 125, offset: 8455 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 158, column: 125, offset: 8455 },
                    end: { line: 158, column: 127, offset: 8457 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 158, column: 127, offset: 8457 },
                    end: { line: 158, column: 133, offset: 8463 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 158, column: 133, offset: 8463 },
                    end: { line: 158, column: 138, offset: 8468 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 158, column: 138, offset: 8468 },
                    end: { line: 158, column: 145, offset: 8475 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 158, column: 145, offset: 8475 },
                    end: { line: 158, column: 151, offset: 8481 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 158, column: 151, offset: 8481 },
                    end: { line: 158, column: 165, offset: 8495 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 158, column: 165, offset: 8495 },
                    end: { line: 158, column: 187, offset: 8517 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 158, column: 187, offset: 8517 },
                    end: { line: 158, column: 205, offset: 8535 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 158, column: 205, offset: 8535 },
                    end: { line: 158, column: 206, offset: 8536 }
                  }
                }
              ],
              position: {
                start: { line: 158, column: 4, offset: 8334 },
                end: { line: 158, column: 206, offset: 8536 }
              }
            }
          ],
          position: {
            start: { line: 158, column: 2, offset: 8332 },
            end: { line: 158, column: 206, offset: 8536 }
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
                  value: 'Binary - request body used for media transfer. The request method is typically ',
                  position: {
                    start: { line: 159, column: 4, offset: 8540 },
                    end: { line: 159, column: 83, offset: 8619 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 159, column: 83, offset: 8619 },
                    end: { line: 159, column: 88, offset: 8624 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 159, column: 88, offset: 8624 },
                    end: { line: 159, column: 92, offset: 8628 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 159, column: 92, offset: 8628 },
                    end: { line: 159, column: 98, offset: 8634 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 159, column: 98, offset: 8634 },
                    end: { line: 159, column: 104, offset: 8640 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 159, column: 104, offset: 8640 },
                    end: { line: 159, column: 118, offset: 8654 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 159, column: 118, offset: 8654 },
                    end: { line: 159, column: 139, offset: 8675 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 159, column: 139, offset: 8675 },
                    end: { line: 159, column: 151, offset: 8687 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 151, offset: 8687 },
                    end: { line: 159, column: 153, offset: 8689 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 159, column: 153, offset: 8689 },
                    end: { line: 159, column: 164, offset: 8700 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 164, offset: 8700 },
                    end: { line: 159, column: 166, offset: 8702 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 159, column: 166, offset: 8702 },
                    end: { line: 159, column: 178, offset: 8714 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 159, column: 178, offset: 8714 },
                    end: { line: 159, column: 180, offset: 8716 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 159, column: 180, offset: 8716 },
                    end: { line: 159, column: 193, offset: 8729 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 159, column: 193, offset: 8729 },
                    end: { line: 159, column: 198, offset: 8734 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 159, column: 198, offset: 8734 },
                    end: { line: 159, column: 209, offset: 8745 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 159, column: 209, offset: 8745 },
                    end: { line: 159, column: 210, offset: 8746 }
                  }
                }
              ],
              position: {
                start: { line: 159, column: 4, offset: 8540 },
                end: { line: 159, column: 210, offset: 8746 }
              }
            }
          ],
          position: {
            start: { line: 159, column: 2, offset: 8538 },
            end: { line: 159, column: 210, offset: 8746 }
          }
        }
      ],
      position: {
        start: { line: 158, column: 2, offset: 8332 },
        end: { line: 159, column: 210, offset: 8746 }
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
            start: { line: 161, column: 4, offset: 8751 },
            end: { line: 161, column: 17, offset: 8764 }
          }
        }
      ],
      position: {
        start: { line: 161, column: 1, offset: 8748 },
        end: { line: 161, column: 17, offset: 8764 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP response is a message conforming to the HTTP protocol that a server sends back to the client. An HTTP response has the following properties:',
          position: {
            start: { line: 163, column: 1, offset: 8766 },
            end: { line: 163, column: 149, offset: 8914 }
          }
        }
      ],
      position: {
        start: { line: 163, column: 1, offset: 8766 },
        end: { line: 163, column: 149, offset: 8914 }
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
                    start: { line: 164, column: 4, offset: 8918 },
                    end: { line: 164, column: 15, offset: 8929 }
                  }
                }
              ],
              position: {
                start: { line: 164, column: 4, offset: 8918 },
                end: { line: 164, column: 15, offset: 8929 }
              }
            }
          ],
          position: {
            start: { line: 164, column: 2, offset: 8916 },
            end: { line: 164, column: 15, offset: 8929 }
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
                    start: { line: 165, column: 4, offset: 8933 },
                    end: { line: 165, column: 11, offset: 8940 }
                  }
                }
              ],
              position: {
                start: { line: 165, column: 4, offset: 8933 },
                end: { line: 165, column: 11, offset: 8940 }
              }
            }
          ],
          position: {
            start: { line: 165, column: 2, offset: 8931 },
            end: { line: 165, column: 11, offset: 8940 }
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
                    start: { line: 166, column: 4, offset: 8944 },
                    end: { line: 166, column: 8, offset: 8948 }
                  }
                }
              ],
              position: {
                start: { line: 166, column: 4, offset: 8944 },
                end: { line: 166, column: 8, offset: 8948 }
              }
            }
          ],
          position: {
            start: { line: 166, column: 2, offset: 8942 },
            end: { line: 166, column: 8, offset: 8948 }
          }
        }
      ],
      position: {
        start: { line: 164, column: 2, offset: 8916 },
        end: { line: 166, column: 8, offset: 8948 }
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
            start: { line: 168, column: 5, offset: 8954 },
            end: { line: 168, column: 30, offset: 8979 }
          }
        }
      ],
      position: {
        start: { line: 168, column: 1, offset: 8950 },
        end: { line: 168, column: 30, offset: 8979 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response status code is a three-digit code that indicates the status of the server's processing of the request.",
          position: {
            start: { line: 170, column: 1, offset: 8981 },
            end: { line: 170, column: 121, offset: 9101 }
          }
        }
      ],
      position: {
        start: { line: 170, column: 1, offset: 8981 },
        end: { line: 170, column: 121, offset: 9101 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Informational Status Codes (100-199)',
          position: {
            start: { line: 172, column: 6, offset: 9108 },
            end: { line: 172, column: 42, offset: 9144 }
          }
        }
      ],
      position: {
        start: { line: 172, column: 1, offset: 9103 },
        end: { line: 172, column: 42, offset: 9144 }
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
            start: { line: 174, column: 7, offset: 9152 },
            end: { line: 174, column: 19, offset: 9164 }
          }
        }
      ],
      position: {
        start: { line: 174, column: 1, offset: 9146 },
        end: { line: 174, column: 19, offset: 9164 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received the request headers and is ready for the client to send the request body.',
          position: {
            start: { line: 176, column: 1, offset: 9166 },
            end: { line: 176, column: 98, offset: 9263 }
          }
        }
      ],
      position: {
        start: { line: 176, column: 1, offset: 9166 },
        end: { line: 176, column: 98, offset: 9263 }
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
            start: { line: 178, column: 7, offset: 9271 },
            end: { line: 178, column: 30, offset: 9294 }
          }
        }
      ],
      position: {
        start: { line: 178, column: 1, offset: 9265 },
        end: { line: 178, column: 30, offset: 9294 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is switching to a different protocol, specified in the ',
          position: {
            start: { line: 180, column: 1, offset: 9296 },
            end: { line: 180, column: 67, offset: 9362 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Upgrade',
          children: [
            {
              type: 'text',
              value: 'Upgrade',
              position: {
                start: { line: 180, column: 68, offset: 9363 },
                end: { line: 180, column: 75, offset: 9370 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 67, offset: 9362 },
            end: { line: 180, column: 153, offset: 9448 }
          }
        },
        {
          type: 'text',
          value: " header, at the client's request. ",
          position: {
            start: { line: 180, column: 153, offset: 9448 },
            end: { line: 180, column: 187, offset: 9482 }
          }
        },
        {
          type: 'inlineCode',
          value: '101 Switching Protocols',
          position: {
            start: { line: 180, column: 187, offset: 9482 },
            end: { line: 180, column: 212, offset: 9507 }
          }
        },
        {
          type: 'text',
          value: ' is used by the ',
          position: {
            start: { line: 180, column: 212, offset: 9507 },
            end: { line: 180, column: 228, offset: 9523 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://http.dev/ws',
          children: [
            {
              type: 'text',
              value: 'WebSocket',
              position: {
                start: { line: 180, column: 229, offset: 9524 },
                end: { line: 180, column: 238, offset: 9533 }
              }
            }
          ],
          position: {
            start: { line: 180, column: 228, offset: 9523 },
            end: { line: 180, column: 260, offset: 9555 }
          }
        },
        {
          type: 'text',
          value: ' protocol when switching from HTTP.',
          position: {
            start: { line: 180, column: 260, offset: 9555 },
            end: { line: 180, column: 295, offset: 9590 }
          }
        }
      ],
      position: {
        start: { line: 180, column: 1, offset: 9296 },
        end: { line: 180, column: 295, offset: 9590 }
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
            start: { line: 182, column: 7, offset: 9598 },
            end: { line: 182, column: 21, offset: 9612 }
          }
        }
      ],
      position: {
        start: { line: 182, column: 1, offset: 9592 },
        end: { line: 182, column: 21, offset: 9612 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has received and is processing the request but no response is available yet.',
          position: {
            start: { line: 184, column: 1, offset: 9614 },
            end: { line: 184, column: 88, offset: 9701 }
          }
        }
      ],
      position: {
        start: { line: 184, column: 1, offset: 9614 },
        end: { line: 184, column: 88, offset: 9701 }
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
            start: { line: 186, column: 7, offset: 9709 },
            end: { line: 186, column: 22, offset: 9724 }
          }
        }
      ],
      position: {
        start: { line: 186, column: 1, offset: 9703 },
        end: { line: 186, column: 22, offset: 9724 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server returns some header information while preparing the rest of the response to allow for the client to start preloading resources.',
          position: {
            start: { line: 188, column: 1, offset: 9726 },
            end: { line: 188, column: 139, offset: 9864 }
          }
        }
      ],
      position: {
        start: { line: 188, column: 1, offset: 9726 },
        end: { line: 188, column: 139, offset: 9864 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Successful Status Codes (200-299)',
          position: {
            start: { line: 190, column: 6, offset: 9871 },
            end: { line: 190, column: 39, offset: 9904 }
          }
        }
      ],
      position: {
        start: { line: 190, column: 1, offset: 9866 },
        end: { line: 190, column: 39, offset: 9904 }
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
            start: { line: 192, column: 7, offset: 9912 },
            end: { line: 192, column: 13, offset: 9918 }
          }
        }
      ],
      position: {
        start: { line: 192, column: 1, offset: 9906 },
        end: { line: 192, column: 13, offset: 9918 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server successfully processed the request. The meaning of success depends on the request method:',
          position: {
            start: { line: 194, column: 1, offset: 9920 },
            end: { line: 194, column: 101, offset: 10020 }
          }
        }
      ],
      position: {
        start: { line: 194, column: 1, offset: 9920 },
        end: { line: 194, column: 101, offset: 10020 }
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
                    start: { line: 195, column: 4, offset: 10024 },
                    end: { line: 195, column: 9, offset: 10029 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource has been successfully retrieved and transmitted in the response message body.',
                  position: {
                    start: { line: 195, column: 9, offset: 10029 },
                    end: { line: 195, column: 102, offset: 10122 }
                  }
                }
              ],
              position: {
                start: { line: 195, column: 4, offset: 10024 },
                end: { line: 195, column: 102, offset: 10122 }
              }
            }
          ],
          position: {
            start: { line: 195, column: 2, offset: 10022 },
            end: { line: 195, column: 102, offset: 10122 }
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
                    start: { line: 196, column: 4, offset: 10126 },
                    end: { line: 196, column: 10, offset: 10132 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The requested metadata about the resource is available in the response headers.',
                  position: {
                    start: { line: 196, column: 10, offset: 10132 },
                    end: { line: 196, column: 92, offset: 10214 }
                  }
                }
              ],
              position: {
                start: { line: 196, column: 4, offset: 10126 },
                end: { line: 196, column: 92, offset: 10214 }
              }
            }
          ],
          position: {
            start: { line: 196, column: 2, offset: 10124 },
            end: { line: 196, column: 92, offset: 10214 }
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
                    start: { line: 197, column: 4, offset: 10218 },
                    end: { line: 197, column: 10, offset: 10224 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was created or updated successfully.',
                  position: {
                    start: { line: 197, column: 10, offset: 10224 },
                    end: { line: 197, column: 62, offset: 10276 }
                  }
                }
              ],
              position: {
                start: { line: 197, column: 4, offset: 10218 },
                end: { line: 197, column: 62, offset: 10276 }
              }
            }
          ],
          position: {
            start: { line: 197, column: 2, offset: 10216 },
            end: { line: 197, column: 62, offset: 10276 }
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
                    start: { line: 198, column: 4, offset: 10280 },
                    end: { line: 198, column: 9, offset: 10285 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was replaced successfully.',
                  position: {
                    start: { line: 198, column: 9, offset: 10285 },
                    end: { line: 198, column: 51, offset: 10327 }
                  }
                }
              ],
              position: {
                start: { line: 198, column: 4, offset: 10280 },
                end: { line: 198, column: 51, offset: 10327 }
              }
            }
          ],
          position: {
            start: { line: 198, column: 2, offset: 10278 },
            end: { line: 198, column: 51, offset: 10327 }
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
                  value: 'PATCH',
                  position: {
                    start: { line: 199, column: 4, offset: 10331 },
                    end: { line: 199, column: 11, offset: 10338 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was updated successfully.',
                  position: {
                    start: { line: 199, column: 11, offset: 10338 },
                    end: { line: 199, column: 52, offset: 10379 }
                  }
                }
              ],
              position: {
                start: { line: 199, column: 4, offset: 10331 },
                end: { line: 199, column: 52, offset: 10379 }
              }
            }
          ],
          position: {
            start: { line: 199, column: 2, offset: 10329 },
            end: { line: 199, column: 52, offset: 10379 }
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
                    start: { line: 200, column: 4, offset: 10383 },
                    end: { line: 200, column: 12, offset: 10391 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The resource was deleted successfully.',
                  position: {
                    start: { line: 200, column: 12, offset: 10391 },
                    end: { line: 200, column: 53, offset: 10432 }
                  }
                }
              ],
              position: {
                start: { line: 200, column: 4, offset: 10383 },
                end: { line: 200, column: 53, offset: 10432 }
              }
            }
          ],
          position: {
            start: { line: 200, column: 2, offset: 10381 },
            end: { line: 200, column: 53, offset: 10432 }
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
                    start: { line: 201, column: 4, offset: 10436 },
                    end: { line: 201, column: 13, offset: 10445 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The connection was established successfully.',
                  position: {
                    start: { line: 201, column: 13, offset: 10445 },
                    end: { line: 201, column: 60, offset: 10492 }
                  }
                }
              ],
              position: {
                start: { line: 201, column: 4, offset: 10436 },
                end: { line: 201, column: 60, offset: 10492 }
              }
            }
          ],
          position: {
            start: { line: 201, column: 2, offset: 10434 },
            end: { line: 201, column: 60, offset: 10492 }
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
                    start: { line: 202, column: 4, offset: 10496 },
                    end: { line: 202, column: 13, offset: 10505 }
                  }
                },
                {
                  type: 'text',
                  value: ' - The communication options are available in the ',
                  position: {
                    start: { line: 202, column: 13, offset: 10505 },
                    end: { line: 202, column: 63, offset: 10555 }
                  }
                },
                {
                  type: 'link',
                  title: null,
                  url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Allow',
                  children: [
                    {
                      type: 'text',
                      value: 'Allow',
                      position: {
                        start: { line: 202, column: 64, offset: 10556 },
                        end: { line: 202, column: 69, offset: 10561 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 202, column: 63, offset: 10555 },
                    end: { line: 202, column: 145, offset: 10637 }
                  }
                },
                {
                  type: 'text',
                  value: ' header.',
                  position: {
                    start: { line: 202, column: 145, offset: 10637 },
                    end: { line: 202, column: 153, offset: 10645 }
                  }
                }
              ],
              position: {
                start: { line: 202, column: 4, offset: 10496 },
                end: { line: 202, column: 153, offset: 10645 }
              }
            }
          ],
          position: {
            start: { line: 202, column: 2, offset: 10494 },
            end: { line: 202, column: 153, offset: 10645 }
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
                  value: 'TRACE',
                  position: {
                    start: { line: 203, column: 4, offset: 10649 },
                    end: { line: 203, column: 11, offset: 10656 }
                  }
                },
                {
                  type: 'text',
                  value: " - The server successfully received and echoed back the client's request.",
                  position: {
                    start: { line: 203, column: 11, offset: 10656 },
                    end: { line: 203, column: 84, offset: 10729 }
                  }
                }
              ],
              position: {
                start: { line: 203, column: 4, offset: 10649 },
                end: { line: 203, column: 84, offset: 10729 }
              }
            }
          ],
          position: {
            start: { line: 203, column: 2, offset: 10647 },
            end: { line: 203, column: 84, offset: 10729 }
          }
        }
      ],
      position: {
        start: { line: 195, column: 2, offset: 10022 },
        end: { line: 203, column: 84, offset: 10729 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '201 Created',
          position: {
            start: { line: 205, column: 7, offset: 10737 },
            end: { line: 205, column: 18, offset: 10748 }
          }
        }
      ],
      position: {
        start: { line: 205, column: 1, offset: 10731 },
        end: { line: 205, column: 18, offset: 10748 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded and a new resource was created.',
          position: {
            start: { line: 207, column: 1, offset: 10750 },
            end: { line: 207, column: 54, offset: 10803 }
          }
        }
      ],
      position: {
        start: { line: 207, column: 1, offset: 10750 },
        end: { line: 207, column: 54, offset: 10803 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '202 Accepted',
          position: {
            start: { line: 209, column: 7, offset: 10811 },
            end: { line: 209, column: 19, offset: 10823 }
          }
        }
      ],
      position: {
        start: { line: 209, column: 1, offset: 10805 },
        end: { line: 209, column: 19, offset: 10823 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request has been received but has not yet been processed.',
          position: {
            start: { line: 211, column: 1, offset: 10825 },
            end: { line: 211, column: 62, offset: 10886 }
          }
        }
      ],
      position: {
        start: { line: 211, column: 1, offset: 10825 },
        end: { line: 211, column: 62, offset: 10886 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '203 Non-Authoritative Information',
          position: {
            start: { line: 213, column: 7, offset: 10894 },
            end: { line: 213, column: 40, offset: 10927 }
          }
        }
      ],
      position: {
        start: { line: 213, column: 1, offset: 10888 },
        end: { line: 213, column: 40, offset: 10927 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request succeeded but the response headers or body were modified by a proxy server before being sent to the client.',
          position: {
            start: { line: 215, column: 1, offset: 10929 },
            end: { line: 215, column: 120, offset: 11048 }
          }
        }
      ],
      position: {
        start: { line: 215, column: 1, offset: 10929 },
        end: { line: 215, column: 120, offset: 11048 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '204 No Content',
          position: {
            start: { line: 217, column: 7, offset: 11056 },
            end: { line: 217, column: 21, offset: 11070 }
          }
        }
      ],
      position: {
        start: { line: 217, column: 1, offset: 11050 },
        end: { line: 217, column: 21, offset: 11070 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, but there is no content available for this request. The client may update its cached headers for the requested resource with the response headers from this request.',
          position: {
            start: { line: 219, column: 1, offset: 11072 },
            end: { line: 219, column: 216, offset: 11287 }
          }
        }
      ],
      position: {
        start: { line: 219, column: 1, offset: 11072 },
        end: { line: 219, column: 216, offset: 11287 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '205 Reset Content',
          position: {
            start: { line: 221, column: 7, offset: 11295 },
            end: { line: 221, column: 24, offset: 11312 }
          }
        }
      ],
      position: {
        start: { line: 221, column: 1, offset: 11289 },
        end: { line: 221, column: 24, offset: 11312 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and asks the client to reset the document to its original state.',
          position: {
            start: { line: 223, column: 1, offset: 11314 },
            end: { line: 223, column: 116, offset: 11429 }
          }
        }
      ],
      position: {
        start: { line: 223, column: 1, offset: 11314 },
        end: { line: 223, column: 116, offset: 11429 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '206 Partial Content',
          position: {
            start: { line: 225, column: 7, offset: 11437 },
            end: { line: 225, column: 26, offset: 11456 }
          }
        }
      ],
      position: {
        start: { line: 225, column: 1, offset: 11431 },
        end: { line: 225, column: 26, offset: 11456 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has successfully processed the request, and is delivering only part of the requested resource. ',
          position: {
            start: { line: 227, column: 1, offset: 11458 },
            end: { line: 227, column: 107, offset: 11564 }
          }
        },
        {
          type: 'inlineCode',
          value: '206 Partial Content',
          position: {
            start: { line: 227, column: 107, offset: 11564 },
            end: { line: 227, column: 128, offset: 11585 }
          }
        },
        {
          type: 'text',
          value: ' is commonly used in ',
          position: {
            start: { line: 227, column: 128, offset: 11585 },
            end: { line: 227, column: 149, offset: 11606 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Range_requests',
          children: [
            {
              type: 'text',
              value: 'range requests',
              position: {
                start: { line: 227, column: 150, offset: 11607 },
                end: { line: 227, column: 164, offset: 11621 }
              }
            }
          ],
          position: {
            start: { line: 227, column: 149, offset: 11606 },
            end: { line: 227, column: 238, offset: 11695 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 227, column: 238, offset: 11695 },
            end: { line: 227, column: 239, offset: 11696 }
          }
        }
      ],
      position: {
        start: { line: 227, column: 1, offset: 11458 },
        end: { line: 227, column: 239, offset: 11696 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Redirection Status Codes (300-399)',
          position: {
            start: { line: 229, column: 6, offset: 11703 },
            end: { line: 229, column: 40, offset: 11737 }
          }
        }
      ],
      position: {
        start: { line: 229, column: 1, offset: 11698 },
        end: { line: 229, column: 40, offset: 11737 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '300 Multiple Choices',
          position: {
            start: { line: 231, column: 7, offset: 11745 },
            end: { line: 231, column: 27, offset: 11765 }
          }
        }
      ],
      position: {
        start: { line: 231, column: 1, offset: 11739 },
        end: { line: 231, column: 27, offset: 11765 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has multiple representations, and the client needs to choose which one to access.',
          position: {
            start: { line: 233, column: 1, offset: 11767 },
            end: { line: 233, column: 95, offset: 11861 }
          }
        }
      ],
      position: {
        start: { line: 233, column: 1, offset: 11767 },
        end: { line: 233, column: 95, offset: 11861 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '301 Moved Permanently',
          position: {
            start: { line: 235, column: 7, offset: 11869 },
            end: { line: 235, column: 28, offset: 11890 }
          }
        }
      ],
      position: {
        start: { line: 235, column: 1, offset: 11863 },
        end: { line: 235, column: 28, offset: 11890 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 237, column: 1, offset: 11892 },
            end: { line: 237, column: 118, offset: 12009 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Location',
          children: [
            {
              type: 'text',
              value: 'Location',
              position: {
                start: { line: 237, column: 119, offset: 12010 },
                end: { line: 237, column: 127, offset: 12018 }
              }
            }
          ],
          position: {
            start: { line: 237, column: 118, offset: 12009 },
            end: { line: 237, column: 206, offset: 12097 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 237, column: 206, offset: 12097 },
            end: { line: 237, column: 230, offset: 12121 }
          }
        }
      ],
      position: {
        start: { line: 237, column: 1, offset: 11892 },
        end: { line: 237, column: 230, offset: 12121 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '302 Found',
          position: {
            start: { line: 239, column: 7, offset: 12129 },
            end: { line: 239, column: 16, offset: 12138 }
          }
        }
      ],
      position: {
        start: { line: 239, column: 1, offset: 12123 },
        end: { line: 239, column: 16, offset: 12138 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 241, column: 1, offset: 12140 },
            end: { line: 241, column: 118, offset: 12257 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 241, column: 118, offset: 12257 },
            end: { line: 241, column: 128, offset: 12267 }
          }
        },
        {
          type: 'text',
          value: ' header of the response.',
          position: {
            start: { line: 241, column: 128, offset: 12267 },
            end: { line: 241, column: 152, offset: 12291 }
          }
        }
      ],
      position: {
        start: { line: 241, column: 1, offset: 12140 },
        end: { line: 241, column: 152, offset: 12291 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '303 See Other',
          position: {
            start: { line: 243, column: 7, offset: 12299 },
            end: { line: 243, column: 20, offset: 12312 }
          }
        }
      ],
      position: {
        start: { line: 243, column: 1, offset: 12293 },
        end: { line: 243, column: 20, offset: 12312 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is redirecting the client's request for the resource to a different resource. The URL of the redirected resource is available in the ",
          position: {
            start: { line: 245, column: 1, offset: 12314 },
            end: { line: 245, column: 145, offset: 12458 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 245, column: 145, offset: 12458 },
            end: { line: 245, column: 155, offset: 12468 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the HTTP ',
          position: {
            start: { line: 245, column: 155, offset: 12468 },
            end: { line: 245, column: 211, offset: 12524 }
          }
        },
        {
          type: 'inlineCode',
          value: 'GET',
          position: {
            start: { line: 245, column: 211, offset: 12524 },
            end: { line: 245, column: 216, offset: 12529 }
          }
        },
        {
          type: 'text',
          value: ' method to request the redirected resource.',
          position: {
            start: { line: 245, column: 216, offset: 12529 },
            end: { line: 245, column: 259, offset: 12572 }
          }
        }
      ],
      position: {
        start: { line: 245, column: 1, offset: 12314 },
        end: { line: 245, column: 259, offset: 12572 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '304 Not Modified',
          position: {
            start: { line: 247, column: 7, offset: 12580 },
            end: { line: 247, column: 23, offset: 12596 }
          }
        }
      ],
      position: {
        start: { line: 247, column: 1, offset: 12574 },
        end: { line: 247, column: 23, offset: 12596 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has not been modified since the last access, so the client can continue to use the same cached version of the resource.',
          position: {
            start: { line: 249, column: 1, offset: 12598 },
            end: { line: 249, column: 133, offset: 12730 }
          }
        }
      ],
      position: {
        start: { line: 249, column: 1, offset: 12598 },
        end: { line: 249, column: 133, offset: 12730 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '307 Temporary Redirect',
          position: {
            start: { line: 251, column: 7, offset: 12738 },
            end: { line: 251, column: 29, offset: 12760 }
          }
        }
      ],
      position: {
        start: { line: 251, column: 1, offset: 12732 },
        end: { line: 251, column: 29, offset: 12760 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved temporarily. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 253, column: 1, offset: 12762 },
            end: { line: 253, column: 118, offset: 12879 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 253, column: 118, offset: 12879 },
            end: { line: 253, column: 128, offset: 12889 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 253, column: 128, offset: 12889 },
            end: { line: 253, column: 235, offset: 12996 }
          }
        }
      ],
      position: {
        start: { line: 253, column: 1, offset: 12762 },
        end: { line: 253, column: 235, offset: 12996 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '308 Permanent Redirect',
          position: {
            start: { line: 255, column: 7, offset: 13004 },
            end: { line: 255, column: 29, offset: 13026 }
          }
        }
      ],
      position: {
        start: { line: 255, column: 1, offset: 12998 },
        end: { line: 255, column: 29, offset: 13026 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource has been moved permanently. The URL of the redirected resource is available in the ',
          position: {
            start: { line: 257, column: 1, offset: 13028 },
            end: { line: 257, column: 118, offset: 13145 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Location',
          position: {
            start: { line: 257, column: 118, offset: 13145 },
            end: { line: 257, column: 128, offset: 13155 }
          }
        },
        {
          type: 'text',
          value: ' header of the response. The client should use the original HTTP method to request the redirected resource.',
          position: {
            start: { line: 257, column: 128, offset: 13155 },
            end: { line: 257, column: 235, offset: 13262 }
          }
        }
      ],
      position: {
        start: { line: 257, column: 1, offset: 13028 },
        end: { line: 257, column: 235, offset: 13262 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Client Error Status Codes (400-499)',
          position: {
            start: { line: 259, column: 6, offset: 13269 },
            end: { line: 259, column: 41, offset: 13304 }
          }
        }
      ],
      position: {
        start: { line: 259, column: 1, offset: 13264 },
        end: { line: 259, column: 41, offset: 13304 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '400 Bad Request',
          position: {
            start: { line: 261, column: 7, offset: 13312 },
            end: { line: 261, column: 22, offset: 13327 }
          }
        }
      ],
      position: {
        start: { line: 261, column: 1, offset: 13306 },
        end: { line: 261, column: 22, offset: 13327 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot process the request due to client error, e.g. invalid syntax.',
          position: {
            start: { line: 263, column: 1, offset: 13329 },
            end: { line: 263, column: 80, offset: 13408 }
          }
        }
      ],
      position: {
        start: { line: 263, column: 1, offset: 13329 },
        end: { line: 263, column: 80, offset: 13408 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '401 Unauthorized',
          position: {
            start: { line: 265, column: 7, offset: 13416 },
            end: { line: 265, column: 23, offset: 13432 }
          }
        }
      ],
      position: {
        start: { line: 265, column: 1, offset: 13410 },
        end: { line: 265, column: 23, offset: 13432 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials.',
          position: {
            start: { line: 267, column: 1, offset: 13434 },
            end: { line: 267, column: 52, offset: 13485 }
          }
        }
      ],
      position: {
        start: { line: 267, column: 1, offset: 13434 },
        end: { line: 267, column: 52, offset: 13485 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '402 Payment Required',
          position: {
            start: { line: 269, column: 7, offset: 13493 },
            end: { line: 269, column: 27, offset: 13513 }
          }
        }
      ],
      position: {
        start: { line: 269, column: 1, offset: 13487 },
        end: { line: 269, column: 27, offset: 13513 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested content is not available until the client makes a payment.',
          position: {
            start: { line: 271, column: 1, offset: 13515 },
            end: { line: 271, column: 73, offset: 13587 }
          }
        }
      ],
      position: {
        start: { line: 271, column: 1, offset: 13515 },
        end: { line: 271, column: 73, offset: 13587 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '403 Forbidden',
          position: {
            start: { line: 273, column: 7, offset: 13595 },
            end: { line: 273, column: 20, offset: 13608 }
          }
        }
      ],
      position: {
        start: { line: 273, column: 1, offset: 13589 },
        end: { line: 273, column: 20, offset: 13608 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is refusing the client access to the requested resource. The client's authentication credentials are usually valid.",
          position: {
            start: { line: 275, column: 1, offset: 13610 },
            end: { line: 275, column: 127, offset: 13736 }
          }
        }
      ],
      position: {
        start: { line: 275, column: 1, offset: 13610 },
        end: { line: 275, column: 127, offset: 13736 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '404 Not Found',
          position: {
            start: { line: 277, column: 7, offset: 13744 },
            end: { line: 277, column: 20, offset: 13757 }
          }
        }
      ],
      position: {
        start: { line: 277, column: 1, offset: 13738 },
        end: { line: 277, column: 20, offset: 13757 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server cannot find the requested resource. The URL is not recognized, or the URL is recognized but the requested resource does not exist.',
          position: {
            start: { line: 279, column: 1, offset: 13759 },
            end: { line: 279, column: 142, offset: 13900 }
          }
        }
      ],
      position: {
        start: { line: 279, column: 1, offset: 13759 },
        end: { line: 279, column: 142, offset: 13900 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '405 Method Not Allowed',
          position: {
            start: { line: 281, column: 7, offset: 13908 },
            end: { line: 281, column: 29, offset: 13930 }
          }
        }
      ],
      position: {
        start: { line: 281, column: 1, offset: 13902 },
        end: { line: 281, column: 29, offset: 13930 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is known by the server but it is not supported for the requested resource.',
          position: {
            start: { line: 283, column: 1, offset: 13932 },
            end: { line: 283, column: 94, offset: 14025 }
          }
        }
      ],
      position: {
        start: { line: 283, column: 1, offset: 13932 },
        end: { line: 283, column: 94, offset: 14025 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '406 Not Acceptable',
          position: {
            start: { line: 285, column: 7, offset: 14033 },
            end: { line: 285, column: 25, offset: 14051 }
          }
        }
      ],
      position: {
        start: { line: 285, column: 1, offset: 14027 },
        end: { line: 285, column: 25, offset: 14051 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The server is unable to provide a response that matches the client's requested format, typically specified in the ",
          position: {
            start: { line: 287, column: 1, offset: 14053 },
            end: { line: 287, column: 115, offset: 14167 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept',
          children: [
            {
              type: 'text',
              value: 'Accept',
              position: {
                start: { line: 287, column: 116, offset: 14168 },
                end: { line: 287, column: 122, offset: 14174 }
              }
            }
          ],
          position: {
            start: { line: 287, column: 115, offset: 14167 },
            end: { line: 287, column: 199, offset: 14251 }
          }
        },
        {
          type: 'text',
          value: ' header of the request.',
          position: {
            start: { line: 287, column: 199, offset: 14251 },
            end: { line: 287, column: 222, offset: 14274 }
          }
        }
      ],
      position: {
        start: { line: 287, column: 1, offset: 14053 },
        end: { line: 287, column: 222, offset: 14274 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '407 Proxy Authentication Required',
          position: {
            start: { line: 289, column: 7, offset: 14282 },
            end: { line: 289, column: 40, offset: 14315 }
          }
        }
      ],
      position: {
        start: { line: 289, column: 1, offset: 14276 },
        end: { line: 289, column: 40, offset: 14315 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request lacks valid authentication credentials for the ',
          position: {
            start: { line: 291, column: 1, offset: 14317 },
            end: { line: 291, column: 60, offset: 14376 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://en.wikipedia.org/wiki/Proxy_server',
          children: [
            {
              type: 'text',
              value: 'proxy server',
              position: {
                start: { line: 291, column: 61, offset: 14377 },
                end: { line: 291, column: 73, offset: 14389 }
              }
            }
          ],
          position: {
            start: { line: 291, column: 60, offset: 14376 },
            end: { line: 291, column: 118, offset: 14434 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 291, column: 118, offset: 14434 },
            end: { line: 291, column: 119, offset: 14435 }
          }
        }
      ],
      position: {
        start: { line: 291, column: 1, offset: 14317 },
        end: { line: 291, column: 120, offset: 14436 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '408 Request Timeout',
          position: {
            start: { line: 293, column: 7, offset: 14444 },
            end: { line: 293, column: 26, offset: 14463 }
          }
        }
      ],
      position: {
        start: { line: 293, column: 1, offset: 14438 },
        end: { line: 293, column: 26, offset: 14463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server would like to shut down the unused connection.',
          position: {
            start: { line: 295, column: 1, offset: 14465 },
            end: { line: 295, column: 58, offset: 14522 }
          }
        }
      ],
      position: {
        start: { line: 295, column: 1, offset: 14465 },
        end: { line: 295, column: 58, offset: 14522 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '409 Conflict',
          position: {
            start: { line: 297, column: 7, offset: 14530 },
            end: { line: 297, column: 19, offset: 14542 }
          }
        }
      ],
      position: {
        start: { line: 297, column: 1, offset: 14524 },
        end: { line: 297, column: 19, offset: 14542 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request conflicts with the current state of the resource, e.g. when trying to create a resource that already exists.',
          position: {
            start: { line: 299, column: 1, offset: 14544 },
            end: { line: 299, column: 121, offset: 14664 }
          }
        }
      ],
      position: {
        start: { line: 299, column: 1, offset: 14544 },
        end: { line: 299, column: 121, offset: 14664 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '410 Gone',
          position: {
            start: { line: 301, column: 7, offset: 14672 },
            end: { line: 301, column: 15, offset: 14680 }
          }
        }
      ],
      position: {
        start: { line: 301, column: 1, offset: 14666 },
        end: { line: 301, column: 15, offset: 14680 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The resource has been permanently removed from the server.',
          position: {
            start: { line: 303, column: 1, offset: 14682 },
            end: { line: 303, column: 59, offset: 14740 }
          }
        }
      ],
      position: {
        start: { line: 303, column: 1, offset: 14682 },
        end: { line: 303, column: 59, offset: 14740 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '411 Length Required',
          position: {
            start: { line: 305, column: 7, offset: 14748 },
            end: { line: 305, column: 26, offset: 14767 }
          }
        }
      ],
      position: {
        start: { line: 305, column: 1, offset: 14742 },
        end: { line: 305, column: 26, offset: 14767 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The ',
          position: {
            start: { line: 307, column: 1, offset: 14769 },
            end: { line: 307, column: 5, offset: 14773 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length',
          children: [
            {
              type: 'text',
              value: 'Content-Length',
              position: {
                start: { line: 307, column: 6, offset: 14774 },
                end: { line: 307, column: 20, offset: 14788 }
              }
            }
          ],
          position: {
            start: { line: 307, column: 5, offset: 14773 },
            end: { line: 307, column: 105, offset: 14873 }
          }
        },
        {
          type: 'text',
          value: ' request header is required but not present.',
          position: {
            start: { line: 307, column: 105, offset: 14873 },
            end: { line: 307, column: 149, offset: 14917 }
          }
        }
      ],
      position: {
        start: { line: 307, column: 1, offset: 14769 },
        end: { line: 307, column: 149, offset: 14917 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '412 Precondition Failed',
          position: {
            start: { line: 309, column: 7, offset: 14925 },
            end: { line: 309, column: 30, offset: 14948 }
          }
        }
      ],
      position: {
        start: { line: 309, column: 1, offset: 14919 },
        end: { line: 309, column: 30, offset: 14948 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request headers has indicated preconditions that the server does not meet.',
          position: {
            start: { line: 311, column: 1, offset: 14950 },
            end: { line: 311, column: 79, offset: 15028 }
          }
        }
      ],
      position: {
        start: { line: 311, column: 1, offset: 14950 },
        end: { line: 311, column: 79, offset: 15028 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '413 Content Too Large',
          position: {
            start: { line: 313, column: 7, offset: 15036 },
            end: { line: 313, column: 28, offset: 15057 }
          }
        }
      ],
      position: {
        start: { line: 313, column: 1, offset: 15030 },
        end: { line: 313, column: 28, offset: 15057 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request body is larger than the limits defined by the server. The server might close the connection or respond with a ',
          position: {
            start: { line: 315, column: 1, offset: 15059 },
            end: { line: 315, column: 123, offset: 15181 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Retry-After',
          children: [
            {
              type: 'text',
              value: 'Retry-After',
              position: {
                start: { line: 315, column: 124, offset: 15182 },
                end: { line: 315, column: 135, offset: 15193 }
              }
            }
          ],
          position: {
            start: { line: 315, column: 123, offset: 15181 },
            end: { line: 315, column: 217, offset: 15275 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 315, column: 217, offset: 15275 },
            end: { line: 315, column: 225, offset: 15283 }
          }
        }
      ],
      position: {
        start: { line: 315, column: 1, offset: 15059 },
        end: { line: 315, column: 225, offset: 15283 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '414 URI Too Long',
          position: {
            start: { line: 317, column: 7, offset: 15291 },
            end: { line: 317, column: 23, offset: 15307 }
          }
        }
      ],
      position: {
        start: { line: 317, column: 1, offset: 15285 },
        end: { line: 317, column: 23, offset: 15307 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The URL of the requested resource is too long.',
          position: {
            start: { line: 319, column: 1, offset: 15309 },
            end: { line: 319, column: 47, offset: 15355 }
          }
        }
      ],
      position: {
        start: { line: 319, column: 1, offset: 15309 },
        end: { line: 319, column: 47, offset: 15355 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '415 Unsupported Media Type',
          position: {
            start: { line: 321, column: 7, offset: 15363 },
            end: { line: 321, column: 33, offset: 15389 }
          }
        }
      ],
      position: {
        start: { line: 321, column: 1, offset: 15357 },
        end: { line: 321, column: 33, offset: 15389 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The media format of the requested resource is not supported by the server.',
          position: {
            start: { line: 323, column: 1, offset: 15391 },
            end: { line: 323, column: 75, offset: 15465 }
          }
        }
      ],
      position: {
        start: { line: 323, column: 1, offset: 15391 },
        end: { line: 323, column: 75, offset: 15465 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '416 Range Not Satisfiable',
          position: {
            start: { line: 325, column: 7, offset: 15473 },
            end: { line: 325, column: 32, offset: 15498 }
          }
        }
      ],
      position: {
        start: { line: 325, column: 1, offset: 15467 },
        end: { line: 325, column: 32, offset: 15498 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The ranges specified in the request's ",
          position: {
            start: { line: 327, column: 1, offset: 15500 },
            end: { line: 327, column: 39, offset: 15538 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Range',
          children: [
            {
              type: 'text',
              value: 'Range',
              position: {
                start: { line: 327, column: 40, offset: 15539 },
                end: { line: 327, column: 45, offset: 15544 }
              }
            }
          ],
          position: {
            start: { line: 327, column: 39, offset: 15538 },
            end: { line: 327, column: 121, offset: 15620 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be fulfilled by the server.',
          position: {
            start: { line: 327, column: 121, offset: 15620 },
            end: { line: 327, column: 163, offset: 15662 }
          }
        }
      ],
      position: {
        start: { line: 327, column: 1, offset: 15500 },
        end: { line: 327, column: 163, offset: 15662 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '417 Expectation Failed',
          position: {
            start: { line: 329, column: 7, offset: 15670 },
            end: { line: 329, column: 29, offset: 15692 }
          }
        }
      ],
      position: {
        start: { line: 329, column: 1, offset: 15664 },
        end: { line: 329, column: 29, offset: 15692 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The expectation indicated by the request's ",
          position: {
            start: { line: 331, column: 1, offset: 15694 },
            end: { line: 331, column: 44, offset: 15737 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Expect',
          children: [
            {
              type: 'text',
              value: 'Expect',
              position: {
                start: { line: 331, column: 45, offset: 15738 },
                end: { line: 331, column: 51, offset: 15744 }
              }
            }
          ],
          position: {
            start: { line: 331, column: 44, offset: 15737 },
            end: { line: 331, column: 128, offset: 15821 }
          }
        },
        {
          type: 'text',
          value: ' header cannot be met by the server.',
          position: {
            start: { line: 331, column: 128, offset: 15821 },
            end: { line: 331, column: 164, offset: 15857 }
          }
        }
      ],
      position: {
        start: { line: 331, column: 1, offset: 15694 },
        end: { line: 331, column: 164, offset: 15857 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: "418 I'm a teapot",
          position: {
            start: { line: 333, column: 7, offset: 15865 },
            end: { line: 333, column: 23, offset: 15881 }
          }
        }
      ],
      position: {
        start: { line: 333, column: 1, offset: 15859 },
        end: { line: 333, column: 23, offset: 15881 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses the attempt to brew coffee with a teapot.',
          position: {
            start: { line: 335, column: 1, offset: 15883 },
            end: { line: 335, column: 61, offset: 15943 }
          }
        }
      ],
      position: {
        start: { line: 335, column: 1, offset: 15883 },
        end: { line: 335, column: 61, offset: 15943 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '421 Misdirected Request',
          position: {
            start: { line: 337, column: 7, offset: 15951 },
            end: { line: 337, column: 30, offset: 15974 }
          }
        }
      ],
      position: {
        start: { line: 337, column: 1, offset: 15945 },
        end: { line: 337, column: 30, offset: 15974 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The request was directed at a server that is not configured to produce a response for the request URL's scheme and authority.",
          position: {
            start: { line: 339, column: 1, offset: 15976 },
            end: { line: 339, column: 126, offset: 16101 }
          }
        }
      ],
      position: {
        start: { line: 339, column: 1, offset: 15976 },
        end: { line: 339, column: 126, offset: 16101 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '422 Unprocessable Content',
          position: {
            start: { line: 341, column: 7, offset: 16109 },
            end: { line: 341, column: 32, offset: 16134 }
          }
        }
      ],
      position: {
        start: { line: 341, column: 1, offset: 16103 },
        end: { line: 341, column: 32, offset: 16134 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request was well-formed but was unable to be processed due to semantic errors.',
          position: {
            start: { line: 343, column: 1, offset: 16136 },
            end: { line: 343, column: 83, offset: 16218 }
          }
        }
      ],
      position: {
        start: { line: 343, column: 1, offset: 16136 },
        end: { line: 343, column: 83, offset: 16218 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '423 Locked',
          position: {
            start: { line: 345, column: 7, offset: 16226 },
            end: { line: 345, column: 17, offset: 16236 }
          }
        }
      ],
      position: {
        start: { line: 345, column: 1, offset: 16220 },
        end: { line: 345, column: 17, offset: 16236 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is locked.',
          position: {
            start: { line: 347, column: 1, offset: 16238 },
            end: { line: 347, column: 34, offset: 16271 }
          }
        }
      ],
      position: {
        start: { line: 347, column: 1, offset: 16238 },
        end: { line: 347, column: 34, offset: 16271 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '424 Failed Dependency',
          position: {
            start: { line: 349, column: 7, offset: 16279 },
            end: { line: 349, column: 28, offset: 16300 }
          }
        }
      ],
      position: {
        start: { line: 349, column: 1, offset: 16273 },
        end: { line: 349, column: 28, offset: 16300 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request failed due to the failure of a previous request.',
          position: {
            start: { line: 351, column: 1, offset: 16302 },
            end: { line: 351, column: 61, offset: 16362 }
          }
        }
      ],
      position: {
        start: { line: 351, column: 1, offset: 16302 },
        end: { line: 351, column: 61, offset: 16362 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '425 Too Early',
          position: {
            start: { line: 353, column: 7, offset: 16370 },
            end: { line: 353, column: 20, offset: 16383 }
          }
        }
      ],
      position: {
        start: { line: 353, column: 1, offset: 16364 },
        end: { line: 353, column: 20, offset: 16383 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is unwilling to risk processing a request that might be replayed.',
          position: {
            start: { line: 355, column: 1, offset: 16385 },
            end: { line: 355, column: 77, offset: 16461 }
          }
        }
      ],
      position: {
        start: { line: 355, column: 1, offset: 16385 },
        end: { line: 355, column: 77, offset: 16461 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '426 Upgrade Required',
          position: {
            start: { line: 357, column: 7, offset: 16469 },
            end: { line: 357, column: 27, offset: 16489 }
          }
        }
      ],
      position: {
        start: { line: 357, column: 1, offset: 16463 },
        end: { line: 357, column: 27, offset: 16489 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server refuses to process the request under the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an ',
          position: {
            start: { line: 359, column: 1, offset: 16491 },
            end: { line: 359, column: 171, offset: 16661 }
          }
        },
        {
          type: 'inlineCode',
          value: 'Upgrade',
          position: {
            start: { line: 359, column: 171, offset: 16661 },
            end: { line: 359, column: 180, offset: 16670 }
          }
        },
        {
          type: 'text',
          value: ' header in the response to indicate the required protocol(s).',
          position: {
            start: { line: 359, column: 180, offset: 16670 },
            end: { line: 359, column: 241, offset: 16731 }
          }
        }
      ],
      position: {
        start: { line: 359, column: 1, offset: 16491 },
        end: { line: 359, column: 241, offset: 16731 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '428 Precondition Required',
          position: {
            start: { line: 361, column: 7, offset: 16739 },
            end: { line: 361, column: 32, offset: 16764 }
          }
        }
      ],
      position: {
        start: { line: 361, column: 1, offset: 16733 },
        end: { line: 361, column: 32, offset: 16764 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The origin server requires the request to be ',
          position: {
            start: { line: 363, column: 1, offset: 16766 },
            end: { line: 363, column: 46, offset: 16811 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests',
          children: [
            {
              type: 'text',
              value: 'conditional',
              position: {
                start: { line: 363, column: 47, offset: 16812 },
                end: { line: 363, column: 58, offset: 16823 }
              }
            }
          ],
          position: {
            start: { line: 363, column: 46, offset: 16811 },
            end: { line: 363, column: 138, offset: 16903 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 363, column: 138, offset: 16903 },
            end: { line: 363, column: 139, offset: 16904 }
          }
        }
      ],
      position: {
        start: { line: 363, column: 1, offset: 16766 },
        end: { line: 363, column: 139, offset: 16904 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '429 Too Many Requests',
          position: {
            start: { line: 365, column: 7, offset: 16912 },
            end: { line: 365, column: 28, offset: 16933 }
          }
        }
      ],
      position: {
        start: { line: 365, column: 1, offset: 16906 },
        end: { line: 365, column: 28, offset: 16933 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client has sent too many requests in a given time period. See ',
          position: {
            start: { line: 367, column: 1, offset: 16935 },
            end: { line: 367, column: 67, offset: 17001 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Rate_limit',
          children: [
            {
              type: 'text',
              value: 'rate limiting',
              position: {
                start: { line: 367, column: 68, offset: 17002 },
                end: { line: 367, column: 81, offset: 17015 }
              }
            }
          ],
          position: {
            start: { line: 367, column: 67, offset: 17001 },
            end: { line: 367, column: 144, offset: 17078 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 367, column: 144, offset: 17078 },
            end: { line: 367, column: 145, offset: 17079 }
          }
        }
      ],
      position: {
        start: { line: 367, column: 1, offset: 16935 },
        end: { line: 367, column: 145, offset: 17079 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '431 Request Header Fields Too Large',
          position: {
            start: { line: 369, column: 7, offset: 17087 },
            end: { line: 369, column: 42, offset: 17122 }
          }
        }
      ],
      position: {
        start: { line: 369, column: 1, offset: 17081 },
        end: { line: 369, column: 42, offset: 17122 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request header fields are too large.',
          position: {
            start: { line: 371, column: 1, offset: 17124 },
            end: { line: 371, column: 41, offset: 17164 }
          }
        }
      ],
      position: {
        start: { line: 371, column: 1, offset: 17124 },
        end: { line: 371, column: 41, offset: 17164 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '451 Unavailable For Legal Reasons',
          position: {
            start: { line: 373, column: 7, offset: 17172 },
            end: { line: 373, column: 40, offset: 17205 }
          }
        }
      ],
      position: {
        start: { line: 373, column: 1, offset: 17166 },
        end: { line: 373, column: 40, offset: 17205 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The requested resource is unavailable due to legal reasons.',
          position: {
            start: { line: 375, column: 1, offset: 17207 },
            end: { line: 375, column: 60, offset: 17266 }
          }
        }
      ],
      position: {
        start: { line: 375, column: 1, offset: 17207 },
        end: { line: 375, column: 60, offset: 17266 }
      }
    },
    {
      type: 'heading',
      depth: 4,
      children: [
        {
          type: 'text',
          value: 'Server Error Status Codes (500-599)',
          position: {
            start: { line: 377, column: 6, offset: 17273 },
            end: { line: 377, column: 41, offset: 17308 }
          }
        }
      ],
      position: {
        start: { line: 377, column: 1, offset: 17268 },
        end: { line: 377, column: 41, offset: 17308 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '500 Internal Server Error',
          position: {
            start: { line: 379, column: 7, offset: 17316 },
            end: { line: 379, column: 32, offset: 17341 }
          }
        }
      ],
      position: {
        start: { line: 379, column: 1, offset: 17310 },
        end: { line: 379, column: 32, offset: 17341 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has encountered a situation it does not know how to handle.',
          position: {
            start: { line: 381, column: 1, offset: 17343 },
            end: { line: 381, column: 71, offset: 17413 }
          }
        }
      ],
      position: {
        start: { line: 381, column: 1, offset: 17343 },
        end: { line: 381, column: 71, offset: 17413 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '501 Not Implemented',
          position: {
            start: { line: 383, column: 7, offset: 17421 },
            end: { line: 383, column: 26, offset: 17440 }
          }
        }
      ],
      position: {
        start: { line: 383, column: 1, offset: 17415 },
        end: { line: 383, column: 26, offset: 17440 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The request method is not supported by the server and cannot be handled.',
          position: {
            start: { line: 385, column: 1, offset: 17442 },
            end: { line: 385, column: 73, offset: 17514 }
          }
        }
      ],
      position: {
        start: { line: 385, column: 1, offset: 17442 },
        end: { line: 385, column: 73, offset: 17514 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '502 Bad Gateway',
          position: {
            start: { line: 387, column: 7, offset: 17522 },
            end: { line: 387, column: 22, offset: 17537 }
          }
        }
      ],
      position: {
        start: { line: 387, column: 1, offset: 17516 },
        end: { line: 387, column: 22, offset: 17537 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The gateway server received an invalid response from an upstream server or origin server.',
          position: {
            start: { line: 389, column: 1, offset: 17539 },
            end: { line: 389, column: 90, offset: 17628 }
          }
        }
      ],
      position: {
        start: { line: 389, column: 1, offset: 17539 },
        end: { line: 389, column: 90, offset: 17628 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '503 Service Unavailable',
          position: {
            start: { line: 391, column: 7, offset: 17636 },
            end: { line: 391, column: 30, offset: 17659 }
          }
        }
      ],
      position: {
        start: { line: 391, column: 1, offset: 17630 },
        end: { line: 391, column: 30, offset: 17659 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server is not ready to handle the request.',
          position: {
            start: { line: 393, column: 1, offset: 17661 },
            end: { line: 393, column: 47, offset: 17707 }
          }
        }
      ],
      position: {
        start: { line: 393, column: 1, offset: 17661 },
        end: { line: 393, column: 47, offset: 17707 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '504 Gateway Timeout',
          position: {
            start: { line: 395, column: 7, offset: 17715 },
            end: { line: 395, column: 26, offset: 17734 }
          }
        }
      ],
      position: {
        start: { line: 395, column: 1, offset: 17709 },
        end: { line: 395, column: 26, offset: 17734 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The gateway server's request to an upstream server or origin server timed out.",
          position: {
            start: { line: 397, column: 1, offset: 17736 },
            end: { line: 397, column: 79, offset: 17814 }
          }
        }
      ],
      position: {
        start: { line: 397, column: 1, offset: 17736 },
        end: { line: 397, column: 79, offset: 17814 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '505 HTTP Version Not Supported',
          position: {
            start: { line: 399, column: 7, offset: 17822 },
            end: { line: 399, column: 37, offset: 17852 }
          }
        }
      ],
      position: {
        start: { line: 399, column: 1, offset: 17816 },
        end: { line: 399, column: 37, offset: 17852 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP version used in the request is not supported by the server.',
          position: {
            start: { line: 401, column: 1, offset: 17854 },
            end: { line: 401, column: 69, offset: 17922 }
          }
        }
      ],
      position: {
        start: { line: 401, column: 1, offset: 17854 },
        end: { line: 401, column: 69, offset: 17922 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '506 Variant Also Negotiates',
          position: {
            start: { line: 403, column: 7, offset: 17930 },
            end: { line: 403, column: 34, offset: 17957 }
          }
        }
      ],
      position: {
        start: { line: 403, column: 1, offset: 17924 },
        end: { line: 403, column: 34, offset: 17957 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server has an internal configuration error related to content negotiation.',
          position: {
            start: { line: 405, column: 1, offset: 17959 },
            end: { line: 405, column: 79, offset: 18037 }
          }
        }
      ],
      position: {
        start: { line: 405, column: 1, offset: 17959 },
        end: { line: 405, column: 79, offset: 18037 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '507 Insufficient Storage',
          position: {
            start: { line: 407, column: 7, offset: 18045 },
            end: { line: 407, column: 31, offset: 18069 }
          }
        }
      ],
      position: {
        start: { line: 407, column: 1, offset: 18039 },
        end: { line: 407, column: 31, offset: 18069 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server does not have enough available storage to successfully process the request.',
          position: {
            start: { line: 409, column: 1, offset: 18071 },
            end: { line: 409, column: 87, offset: 18157 }
          }
        }
      ],
      position: {
        start: { line: 409, column: 1, offset: 18071 },
        end: { line: 409, column: 87, offset: 18157 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '508 Loop Detected',
          position: {
            start: { line: 411, column: 7, offset: 18165 },
            end: { line: 411, column: 24, offset: 18182 }
          }
        }
      ],
      position: {
        start: { line: 411, column: 1, offset: 18159 },
        end: { line: 411, column: 24, offset: 18182 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The server detected an infinite loop while processing the request.',
          position: {
            start: { line: 413, column: 1, offset: 18184 },
            end: { line: 413, column: 67, offset: 18250 }
          }
        }
      ],
      position: {
        start: { line: 413, column: 1, offset: 18184 },
        end: { line: 413, column: 67, offset: 18250 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '510 Not Extended',
          position: {
            start: { line: 415, column: 7, offset: 18258 },
            end: { line: 415, column: 23, offset: 18274 }
          }
        }
      ],
      position: {
        start: { line: 415, column: 1, offset: 18252 },
        end: { line: 415, column: 23, offset: 18274 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client declares an HTTP Extension (',
          position: {
            start: { line: 417, column: 1, offset: 18276 },
            end: { line: 417, column: 40, offset: 18315 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://datatracker.ietf.org/doc/html/rfc2774',
          children: [
            {
              type: 'text',
              value: 'RFC 2774',
              position: {
                start: { line: 417, column: 41, offset: 18316 },
                end: { line: 417, column: 49, offset: 18324 }
              }
            }
          ],
          position: {
            start: { line: 417, column: 40, offset: 18315 },
            end: { line: 417, column: 97, offset: 18372 }
          }
        },
        {
          type: 'text',
          value: ') that should be used to process the request, but the extension is not supported by the server.',
          position: {
            start: { line: 417, column: 97, offset: 18372 },
            end: { line: 417, column: 192, offset: 18467 }
          }
        }
      ],
      position: {
        start: { line: 417, column: 1, offset: 18276 },
        end: { line: 417, column: 192, offset: 18467 }
      }
    },
    {
      type: 'heading',
      depth: 5,
      children: [
        {
          type: 'text',
          value: '511 Network Authentication Required',
          position: {
            start: { line: 419, column: 7, offset: 18475 },
            end: { line: 419, column: 42, offset: 18510 }
          }
        }
      ],
      position: {
        start: { line: 419, column: 1, offset: 18469 },
        end: { line: 419, column: 42, offset: 18510 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The client needs to authenticate to gain network access.',
          position: {
            start: { line: 421, column: 1, offset: 18512 },
            end: { line: 421, column: 57, offset: 18568 }
          }
        }
      ],
      position: {
        start: { line: 421, column: 1, offset: 18512 },
        end: { line: 421, column: 57, offset: 18568 }
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
            start: { line: 423, column: 5, offset: 18574 },
            end: { line: 423, column: 26, offset: 18595 }
          }
        }
      ],
      position: {
        start: { line: 423, column: 1, offset: 18570 },
        end: { line: 423, column: 26, offset: 18595 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'HTTP response headers are key-value pairs assigned to each response. HTTP response headers pass additional context and metadata about the response.',
          position: {
            start: { line: 425, column: 1, offset: 18597 },
            end: { line: 425, column: 148, offset: 18744 }
          }
        }
      ],
      position: {
        start: { line: 425, column: 1, offset: 18597 },
        end: { line: 425, column: 148, offset: 18744 }
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
            start: { line: 427, column: 5, offset: 18750 },
            end: { line: 427, column: 23, offset: 18768 }
          }
        }
      ],
      position: {
        start: { line: 427, column: 1, offset: 18746 },
        end: { line: 427, column: 23, offset: 18768 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The HTTP response body is the part of the response that carries the bulk of the data sent back to the client. The content type of the response body should be specified in the response's ",
          position: {
            start: { line: 429, column: 1, offset: 18770 },
            end: { line: 429, column: 187, offset: 18956 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type',
          children: [
            {
              type: 'text',
              value: 'Content-Type',
              position: {
                start: { line: 429, column: 188, offset: 18957 },
                end: { line: 429, column: 200, offset: 18969 }
              }
            }
          ],
          position: {
            start: { line: 429, column: 187, offset: 18956 },
            end: { line: 429, column: 283, offset: 19052 }
          }
        },
        {
          type: 'text',
          value: ' header.',
          position: {
            start: { line: 429, column: 283, offset: 19052 },
            end: { line: 429, column: 291, offset: 19060 }
          }
        }
      ],
      position: {
        start: { line: 429, column: 1, offset: 18770 },
        end: { line: 429, column: 291, offset: 19060 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some examples of HTTP response bodies:',
          position: {
            start: { line: 431, column: 1, offset: 19062 },
            end: { line: 431, column: 39, offset: 19100 }
          }
        }
      ],
      position: {
        start: { line: 431, column: 1, offset: 19062 },
        end: { line: 431, column: 39, offset: 19100 }
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
                  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                  children: [
                    {
                      type: 'text',
                      value: 'HTML',
                      position: {
                        start: { line: 432, column: 5, offset: 19105 },
                        end: { line: 432, column: 9, offset: 19109 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 432, column: 4, offset: 19104 },
                    end: { line: 432, column: 61, offset: 19161 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web pages. The method of the request is typically ',
                  position: {
                    start: { line: 432, column: 61, offset: 19161 },
                    end: { line: 432, column: 137, offset: 19237 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 432, column: 137, offset: 19237 },
                    end: { line: 432, column: 142, offset: 19242 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 432, column: 142, offset: 19242 },
                    end: { line: 432, column: 148, offset: 19248 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 432, column: 148, offset: 19248 },
                    end: { line: 432, column: 162, offset: 19262 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 432, column: 162, offset: 19262 },
                    end: { line: 432, column: 184, offset: 19284 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/html',
                  position: {
                    start: { line: 432, column: 184, offset: 19284 },
                    end: { line: 432, column: 195, offset: 19295 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 432, column: 195, offset: 19295 },
                    end: { line: 432, column: 196, offset: 19296 }
                  }
                }
              ],
              position: {
                start: { line: 432, column: 4, offset: 19104 },
                end: { line: 432, column: 196, offset: 19296 }
              }
            }
          ],
          position: {
            start: { line: 432, column: 2, offset: 19102 },
            end: { line: 432, column: 196, offset: 19296 }
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
                  url: 'https://www.json.org/json-en.html',
                  children: [
                    {
                      type: 'text',
                      value: 'JSON',
                      position: {
                        start: { line: 433, column: 5, offset: 19301 },
                        end: { line: 433, column: 9, offset: 19305 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 433, column: 4, offset: 19300 },
                    end: { line: 433, column: 45, offset: 19341 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for web applications. The method of the request is typically ',
                  position: {
                    start: { line: 433, column: 45, offset: 19341 },
                    end: { line: 433, column: 128, offset: 19424 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 433, column: 128, offset: 19424 },
                    end: { line: 433, column: 133, offset: 19429 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 433, column: 133, offset: 19429 },
                    end: { line: 433, column: 135, offset: 19431 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 433, column: 135, offset: 19431 },
                    end: { line: 433, column: 141, offset: 19437 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 433, column: 141, offset: 19437 },
                    end: { line: 433, column: 146, offset: 19442 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 433, column: 146, offset: 19442 },
                    end: { line: 433, column: 153, offset: 19449 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 433, column: 153, offset: 19449 },
                    end: { line: 433, column: 159, offset: 19455 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 433, column: 159, offset: 19455 },
                    end: { line: 433, column: 173, offset: 19469 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field must be ',
                  position: {
                    start: { line: 433, column: 173, offset: 19469 },
                    end: { line: 433, column: 195, offset: 19491 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/json',
                  position: {
                    start: { line: 433, column: 195, offset: 19491 },
                    end: { line: 433, column: 213, offset: 19509 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 433, column: 213, offset: 19509 },
                    end: { line: 433, column: 214, offset: 19510 }
                  }
                }
              ],
              position: {
                start: { line: 433, column: 4, offset: 19300 },
                end: { line: 433, column: 214, offset: 19510 }
              }
            }
          ],
          position: {
            start: { line: 433, column: 2, offset: 19298 },
            end: { line: 433, column: 214, offset: 19510 }
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
                  url: 'https://aws.amazon.com/what-is/xml/',
                  children: [
                    {
                      type: 'text',
                      value: 'XML',
                      position: {
                        start: { line: 434, column: 5, offset: 19515 },
                        end: { line: 434, column: 8, offset: 19518 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 4, offset: 19514 },
                    end: { line: 434, column: 46, offset: 19556 }
                  }
                },
                {
                  type: 'text',
                  value: ' - response body used for ',
                  position: {
                    start: { line: 434, column: 46, offset: 19556 },
                    end: { line: 434, column: 72, offset: 19582 }
                  }
                },
                {
                  type: 'link',
                  title: null,
                  url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
                  children: [
                    {
                      type: 'text',
                      value: 'sitemaps',
                      position: {
                        start: { line: 434, column: 73, offset: 19583 },
                        end: { line: 434, column: 81, offset: 19591 }
                      }
                    }
                  ],
                  position: {
                    start: { line: 434, column: 72, offset: 19582 },
                    end: { line: 434, column: 161, offset: 19671 }
                  }
                },
                {
                  type: 'text',
                  value: ' or web applications. The method of the request can be ',
                  position: {
                    start: { line: 434, column: 161, offset: 19671 },
                    end: { line: 434, column: 216, offset: 19726 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 434, column: 216, offset: 19726 },
                    end: { line: 434, column: 221, offset: 19731 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 221, offset: 19731 },
                    end: { line: 434, column: 223, offset: 19733 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PUT',
                  position: {
                    start: { line: 434, column: 223, offset: 19733 },
                    end: { line: 434, column: 228, offset: 19738 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 434, column: 228, offset: 19738 },
                    end: { line: 434, column: 230, offset: 19740 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'POST',
                  position: {
                    start: { line: 434, column: 230, offset: 19740 },
                    end: { line: 434, column: 236, offset: 19746 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 434, column: 236, offset: 19746 },
                    end: { line: 434, column: 241, offset: 19751 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'PATCH',
                  position: {
                    start: { line: 434, column: 241, offset: 19751 },
                    end: { line: 434, column: 248, offset: 19758 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 434, column: 248, offset: 19758 },
                    end: { line: 434, column: 254, offset: 19764 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 434, column: 254, offset: 19764 },
                    end: { line: 434, column: 268, offset: 19778 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 434, column: 268, offset: 19778 },
                    end: { line: 434, column: 289, offset: 19799 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'application/xml',
                  position: {
                    start: { line: 434, column: 289, offset: 19799 },
                    end: { line: 434, column: 306, offset: 19816 }
                  }
                },
                {
                  type: 'text',
                  value: ' or ',
                  position: {
                    start: { line: 434, column: 306, offset: 19816 },
                    end: { line: 434, column: 310, offset: 19820 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'text/xml',
                  position: {
                    start: { line: 434, column: 310, offset: 19820 },
                    end: { line: 434, column: 320, offset: 19830 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 434, column: 320, offset: 19830 },
                    end: { line: 434, column: 321, offset: 19831 }
                  }
                }
              ],
              position: {
                start: { line: 434, column: 4, offset: 19514 },
                end: { line: 434, column: 321, offset: 19831 }
              }
            }
          ],
          position: {
            start: { line: 434, column: 2, offset: 19512 },
            end: { line: 434, column: 321, offset: 19831 }
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
                  value: 'Binary - response body used for media transfer. The method of the request is typically ',
                  position: {
                    start: { line: 435, column: 4, offset: 19835 },
                    end: { line: 435, column: 91, offset: 19922 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'GET',
                  position: {
                    start: { line: 435, column: 91, offset: 19922 },
                    end: { line: 435, column: 96, offset: 19927 }
                  }
                },
                {
                  type: 'text',
                  value: '. The ',
                  position: {
                    start: { line: 435, column: 96, offset: 19927 },
                    end: { line: 435, column: 102, offset: 19933 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'Content-Type',
                  position: {
                    start: { line: 435, column: 102, offset: 19933 },
                    end: { line: 435, column: 116, offset: 19947 }
                  }
                },
                {
                  type: 'text',
                  value: ' header field can be ',
                  position: {
                    start: { line: 435, column: 116, offset: 19947 },
                    end: { line: 435, column: 137, offset: 19968 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/jpeg',
                  position: {
                    start: { line: 435, column: 137, offset: 19968 },
                    end: { line: 435, column: 149, offset: 19980 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 149, offset: 19980 },
                    end: { line: 435, column: 151, offset: 19982 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'image/png',
                  position: {
                    start: { line: 435, column: 151, offset: 19982 },
                    end: { line: 435, column: 162, offset: 19993 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 162, offset: 19993 },
                    end: { line: 435, column: 164, offset: 19995 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/mpeg',
                  position: {
                    start: { line: 435, column: 164, offset: 19995 },
                    end: { line: 435, column: 176, offset: 20007 }
                  }
                },
                {
                  type: 'text',
                  value: ', ',
                  position: {
                    start: { line: 435, column: 176, offset: 20007 },
                    end: { line: 435, column: 178, offset: 20009 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'audio/x-wav',
                  position: {
                    start: { line: 435, column: 178, offset: 20009 },
                    end: { line: 435, column: 191, offset: 20022 }
                  }
                },
                {
                  type: 'text',
                  value: ', or ',
                  position: {
                    start: { line: 435, column: 191, offset: 20022 },
                    end: { line: 435, column: 196, offset: 20027 }
                  }
                },
                {
                  type: 'inlineCode',
                  value: 'video/mp4',
                  position: {
                    start: { line: 435, column: 196, offset: 20027 },
                    end: { line: 435, column: 207, offset: 20038 }
                  }
                },
                {
                  type: 'text',
                  value: '.',
                  position: {
                    start: { line: 435, column: 207, offset: 20038 },
                    end: { line: 435, column: 208, offset: 20039 }
                  }
                }
              ],
              position: {
                start: { line: 435, column: 4, offset: 19835 },
                end: { line: 435, column: 208, offset: 20039 }
              }
            }
          ],
          position: {
            start: { line: 435, column: 2, offset: 19833 },
            end: { line: 435, column: 208, offset: 20039 }
          }
        }
      ],
      position: {
        start: { line: 432, column: 2, offset: 19102 },
        end: { line: 435, column: 208, offset: 20039 }
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
            start: { line: 437, column: 4, offset: 20044 },
            end: { line: 437, column: 15, offset: 20055 }
          }
        }
      ],
      position: {
        start: { line: 437, column: 1, offset: 20041 },
        end: { line: 437, column: 15, offset: 20055 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server is a component of a "web server" or software application running inside a computer that listens on a specific port for HTTP requests. The HTTP server processes those requests and sends back HTTP responses. The ',
          position: {
            start: { line: 439, column: 1, offset: 20057 },
            end: { line: 439, column: 226, offset: 20282 }
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
                start: { line: 439, column: 227, offset: 20283 },
                end: { line: 439, column: 233, offset: 20289 }
              }
            }
          ],
          position: {
            start: { line: 439, column: 226, offset: 20282 },
            end: { line: 439, column: 273, offset: 20329 }
          }
        },
        {
          type: 'text',
          value: ' JavaScript code below is part of a software application that runs inside a computer or "server" in a data center.',
          position: {
            start: { line: 439, column: 273, offset: 20329 },
            end: { line: 439, column: 387, offset: 20443 }
          }
        }
      ],
      position: {
        start: { line: 439, column: 1, offset: 20057 },
        end: { line: 439, column: 387, offset: 20443 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'We can use the NodeJS ',
          position: {
            start: { line: 441, column: 1, offset: 20445 },
            end: { line: 441, column: 23, offset: 20467 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 441, column: 23, offset: 20467 },
            end: { line: 441, column: 29, offset: 20473 }
          }
        },
        {
          type: 'text',
          value: ' module to create an HTTP server.',
          position: {
            start: { line: 441, column: 29, offset: 20473 },
            end: { line: 441, column: 62, offset: 20506 }
          }
        }
      ],
      position: {
        start: { line: 441, column: 1, offset: 20445 },
        end: { line: 441, column: 62, offset: 20506 }
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
        start: { line: 443, column: 1, offset: 20508 },
        end: { line: 456, column: 4, offset: 20744 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The example code above creates an HTTP server with ',
          position: {
            start: { line: 458, column: 1, offset: 20746 },
            end: { line: 458, column: 52, offset: 20797 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http.createServer',
          position: {
            start: { line: 458, column: 52, offset: 20797 },
            end: { line: 458, column: 71, offset: 20816 }
          }
        },
        {
          type: 'text',
          value: ' that takes a simple handler ',
          position: {
            start: { line: 458, column: 71, offset: 20816 },
            end: { line: 458, column: 100, offset: 20845 }
          }
        },
        {
          type: 'inlineCode',
          value: '(request, response) => {...}',
          position: {
            start: { line: 458, column: 100, offset: 20845 },
            end: { line: 458, column: 130, offset: 20875 }
          }
        },
        {
          type: 'text',
          value: '. The HTTP server starts listening on port ',
          position: {
            start: { line: 458, column: 130, offset: 20875 },
            end: { line: 458, column: 173, offset: 20918 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 458, column: 173, offset: 20918 },
            end: { line: 458, column: 179, offset: 20924 }
          }
        },
        {
          type: 'text',
          value: ' with the call to ',
          position: {
            start: { line: 458, column: 179, offset: 20924 },
            end: { line: 458, column: 197, offset: 20942 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 458, column: 197, offset: 20942 },
            end: { line: 458, column: 212, offset: 20957 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 458, column: 212, offset: 20957 },
            end: { line: 458, column: 213, offset: 20958 }
          }
        }
      ],
      position: {
        start: { line: 458, column: 1, offset: 20746 },
        end: { line: 458, column: 213, offset: 20958 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server has the following properties:',
          position: {
            start: { line: 460, column: 1, offset: 20960 },
            end: { line: 460, column: 45, offset: 21004 }
          }
        }
      ],
      position: {
        start: { line: 460, column: 1, offset: 20960 },
        end: { line: 460, column: 45, offset: 21004 }
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
                    start: { line: 461, column: 4, offset: 21008 },
                    end: { line: 461, column: 8, offset: 21012 }
                  }
                }
              ],
              position: {
                start: { line: 461, column: 4, offset: 21008 },
                end: { line: 461, column: 8, offset: 21012 }
              }
            }
          ],
          position: {
            start: { line: 461, column: 2, offset: 21006 },
            end: { line: 461, column: 8, offset: 21012 }
          }
        }
      ],
      position: {
        start: { line: 461, column: 2, offset: 21006 },
        end: { line: 461, column: 8, offset: 21012 }
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
            start: { line: 463, column: 5, offset: 21018 },
            end: { line: 463, column: 21, offset: 21034 }
          }
        }
      ],
      position: {
        start: { line: 463, column: 1, offset: 21014 },
        end: { line: 463, column: 21, offset: 21034 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP server port is a number that represents the network port on which the server is listening. A network port is a logical communication endpoint within a network. The value for the port can range from 0 and 65535. In the above example, we created an HTTP web server that listened on port ',
          position: {
            start: { line: 465, column: 1, offset: 21036 },
            end: { line: 465, column: 294, offset: 21329 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 465, column: 294, offset: 21329 },
            end: { line: 465, column: 300, offset: 21335 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 465, column: 300, offset: 21335 },
            end: { line: 465, column: 301, offset: 21336 }
          }
        }
      ],
      position: {
        start: { line: 465, column: 1, offset: 21036 },
        end: { line: 465, column: 301, offset: 21336 }
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
            start: { line: 467, column: 4, offset: 21341 },
            end: { line: 467, column: 16, offset: 21353 }
          }
        }
      ],
      position: {
        start: { line: 467, column: 1, offset: 21338 },
        end: { line: 467, column: 16, offset: 21353 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler is a component of an HTTP server that processes or "handles" incoming requests from clients.',
          position: {
            start: { line: 469, column: 1, offset: 21355 },
            end: { line: 469, column: 109, offset: 21463 }
          }
        }
      ],
      position: {
        start: { line: 469, column: 1, offset: 21355 },
        end: { line: 469, column: 109, offset: 21463 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Generally, an HTTP handler is responsible for the following:',
          position: {
            start: { line: 471, column: 1, offset: 21465 },
            end: { line: 471, column: 61, offset: 21525 }
          }
        }
      ],
      position: {
        start: { line: 471, column: 1, offset: 21465 },
        end: { line: 471, column: 61, offset: 21525 }
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
                    start: { line: 472, column: 4, offset: 21529 },
                    end: { line: 472, column: 74, offset: 21599 }
                  }
                }
              ],
              position: {
                start: { line: 472, column: 4, offset: 21529 },
                end: { line: 472, column: 74, offset: 21599 }
              }
            }
          ],
          position: {
            start: { line: 472, column: 2, offset: 21527 },
            end: { line: 472, column: 74, offset: 21599 }
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
                    start: { line: 473, column: 4, offset: 21603 },
                    end: { line: 473, column: 52, offset: 21651 }
                  }
                }
              ],
              position: {
                start: { line: 473, column: 4, offset: 21603 },
                end: { line: 473, column: 52, offset: 21651 }
              }
            }
          ],
          position: {
            start: { line: 473, column: 2, offset: 21601 },
            end: { line: 473, column: 52, offset: 21651 }
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
                    start: { line: 474, column: 4, offset: 21655 },
                    end: { line: 474, column: 237, offset: 21888 }
                  }
                }
              ],
              position: {
                start: { line: 474, column: 4, offset: 21655 },
                end: { line: 474, column: 237, offset: 21888 }
              }
            }
          ],
          position: {
            start: { line: 474, column: 2, offset: 21653 },
            end: { line: 474, column: 237, offset: 21888 }
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
                    start: { line: 475, column: 4, offset: 21892 },
                    end: { line: 475, column: 128, offset: 22016 }
                  }
                }
              ],
              position: {
                start: { line: 475, column: 4, offset: 21892 },
                end: { line: 475, column: 128, offset: 22016 }
              }
            }
          ],
          position: {
            start: { line: 475, column: 2, offset: 21890 },
            end: { line: 475, column: 128, offset: 22016 }
          }
        }
      ],
      position: {
        start: { line: 472, column: 2, offset: 21527 },
        end: { line: 475, column: 128, offset: 22016 }
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
            start: { line: 477, column: 5, offset: 22022 },
            end: { line: 477, column: 28, offset: 22045 }
          }
        }
      ],
      position: {
        start: { line: 477, column: 1, offset: 22018 },
        end: { line: 477, column: 28, offset: 22045 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "The NodeJS JavaScript runtime's ",
          position: {
            start: { line: 479, column: 1, offset: 22047 },
            end: { line: 479, column: 33, offset: 22079 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 479, column: 33, offset: 22079 },
            end: { line: 479, column: 39, offset: 22085 }
          }
        },
        {
          type: 'text',
          value: ' module handles most of the processing of the raw HTTP request message and abstracts the parsed information into a NodeJS ',
          position: {
            start: { line: 479, column: 39, offset: 22085 },
            end: { line: 479, column: 161, offset: 22207 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 479, column: 161, offset: 22207 },
            end: { line: 479, column: 176, offset: 22222 }
          }
        },
        {
          type: 'text',
          value: ' object.',
          position: {
            start: { line: 479, column: 176, offset: 22222 },
            end: { line: 479, column: 184, offset: 22230 }
          }
        }
      ],
      position: {
        start: { line: 479, column: 1, offset: 22047 },
        end: { line: 479, column: 184, offset: 22230 }
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
        start: { line: 481, column: 1, offset: 22232 },
        end: { line: 494, column: 4, offset: 22557 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The NodeJS ',
          position: {
            start: { line: 496, column: 1, offset: 22559 },
            end: { line: 496, column: 12, offset: 22570 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 496, column: 12, offset: 22570 },
            end: { line: 496, column: 18, offset: 22576 }
          }
        },
        {
          type: 'text',
          value: ' module offers an interface or "API" for generating HTTP responses as ',
          position: {
            start: { line: 496, column: 18, offset: 22576 },
            end: { line: 496, column: 88, offset: 22646 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 496, column: 88, offset: 22646 },
            end: { line: 496, column: 104, offset: 22662 }
          }
        },
        {
          type: 'text',
          value: ' objects.',
          position: {
            start: { line: 496, column: 104, offset: 22662 },
            end: { line: 496, column: 113, offset: 22671 }
          }
        }
      ],
      position: {
        start: { line: 496, column: 1, offset: 22559 },
        end: { line: 496, column: 113, offset: 22671 }
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
        start: { line: 498, column: 1, offset: 22673 },
        end: { line: 504, column: 4, offset: 22870 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'An HTTP handler in NodeJS handles ',
          position: {
            start: { line: 506, column: 1, offset: 22872 },
            end: { line: 506, column: 35, offset: 22906 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ClientRequest',
          position: {
            start: { line: 506, column: 35, offset: 22906 },
            end: { line: 506, column: 50, offset: 22921 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 506, column: 50, offset: 22921 },
            end: { line: 506, column: 55, offset: 22926 }
          }
        },
        {
          type: 'inlineCode',
          value: 'ServerResponse',
          position: {
            start: { line: 506, column: 55, offset: 22926 },
            end: { line: 506, column: 71, offset: 22942 }
          }
        },
        {
          type: 'text',
          value: ' objects and has the following structure:',
          position: {
            start: { line: 506, column: 71, offset: 22942 },
            end: { line: 506, column: 112, offset: 22983 }
          }
        }
      ],
      position: {
        start: { line: 506, column: 1, offset: 22872 },
        end: { line: 506, column: 112, offset: 22983 }
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
        start: { line: 508, column: 1, offset: 22985 },
        end: { line: 523, column: 4, offset: 23416 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Below is a theoretical NodeJS HTTP handler that handles the request made in the ',
          position: {
            start: { line: 525, column: 1, offset: 23418 },
            end: { line: 525, column: 81, offset: 23498 }
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
                start: { line: 525, column: 82, offset: 23499 },
                end: { line: 525, column: 93, offset: 23510 }
              }
            }
          ],
          position: {
            start: { line: 525, column: 81, offset: 23498 },
            end: { line: 525, column: 108, offset: 23525 }
          }
        },
        {
          type: 'text',
          value: ' example.',
          position: {
            start: { line: 525, column: 108, offset: 23525 },
            end: { line: 525, column: 117, offset: 23534 }
          }
        }
      ],
      position: {
        start: { line: 525, column: 1, offset: 23418 },
        end: { line: 525, column: 117, offset: 23534 }
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
        start: { line: 527, column: 1, offset: 23536 },
        end: { line: 561, column: 4, offset: 24187 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The HTTP server ',
          position: {
            start: { line: 563, column: 1, offset: 24189 },
            end: { line: 563, column: 17, offset: 24205 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server',
          position: {
            start: { line: 563, column: 17, offset: 24205 },
            end: { line: 563, column: 25, offset: 24213 }
          }
        },
        {
          type: 'text',
          value: ' created by the NodeJS ',
          position: {
            start: { line: 563, column: 25, offset: 24213 },
            end: { line: 563, column: 48, offset: 24236 }
          }
        },
        {
          type: 'inlineCode',
          value: 'http',
          position: {
            start: { line: 563, column: 48, offset: 24236 },
            end: { line: 563, column: 54, offset: 24242 }
          }
        },
        {
          type: 'text',
          value: " module's ",
          position: {
            start: { line: 563, column: 54, offset: 24242 },
            end: { line: 563, column: 64, offset: 24252 }
          }
        },
        {
          type: 'inlineCode',
          value: 'createServer',
          position: {
            start: { line: 563, column: 64, offset: 24252 },
            end: { line: 563, column: 78, offset: 24266 }
          }
        },
        {
          type: 'text',
          value: ' accepts the HTTP handler ',
          position: {
            start: { line: 563, column: 78, offset: 24266 },
            end: { line: 563, column: 104, offset: 24292 }
          }
        },
        {
          type: 'inlineCode',
          value: 'handler',
          position: {
            start: { line: 563, column: 104, offset: 24292 },
            end: { line: 563, column: 113, offset: 24301 }
          }
        },
        {
          type: 'text',
          value: ' as a single argument. To start the server we only need to call ',
          position: {
            start: { line: 563, column: 113, offset: 24301 },
            end: { line: 563, column: 177, offset: 24365 }
          }
        },
        {
          type: 'inlineCode',
          value: 'server.listen',
          position: {
            start: { line: 563, column: 177, offset: 24365 },
            end: { line: 563, column: 192, offset: 24380 }
          }
        },
        {
          type: 'text',
          value: ', specifying port ',
          position: {
            start: { line: 563, column: 192, offset: 24380 },
            end: { line: 563, column: 210, offset: 24398 }
          }
        },
        {
          type: 'inlineCode',
          value: '8080',
          position: {
            start: { line: 563, column: 210, offset: 24398 },
            end: { line: 563, column: 216, offset: 24404 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 563, column: 216, offset: 24404 },
            end: { line: 563, column: 217, offset: 24405 }
          }
        }
      ],
      position: {
        start: { line: 563, column: 1, offset: 24189 },
        end: { line: 563, column: 217, offset: 24405 }
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
            start: { line: 565, column: 5, offset: 24411 },
            end: { line: 565, column: 59, offset: 24465 }
          }
        }
      ],
      position: {
        start: { line: 565, column: 1, offset: 24407 },
        end: { line: 565, column: 59, offset: 24465 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'In [A]synchronous Functional Programming, HTTP handlers are simple, reusable, and modular. Consider the following web server implementation with a complex HTTP handler:',
          position: {
            start: { line: 567, column: 1, offset: 24467 },
            end: { line: 567, column: 169, offset: 24635 }
          }
        }
      ],
      position: {
        start: { line: 567, column: 1, offset: 24467 },
        end: { line: 567, column: 169, offset: 24635 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "const http = require('http')\n" +
        '\n' +
        'const complexHandler = async function (request, response) {\n' +
        '  try {\n' +
        "    if (request.url.startsWith('/health')) {\n" +
        '      // GET /health\n' +
        '      response.writeHead(200, {\n' +
        "        'Content-Type': 'text/plain',\n" +
        '      })\n' +
        "      response.end('ok')\n" +
        "    } else if (request => request.method == 'OPTIONS') {\n" +
        '      // OPTIONS\n' +
        '      response.writeHead(204, {\n' +
        "        'Access-Control-Allow-Origin': '*',\n" +
        "        'Access-Control-Allow-Methods': '*',\n" +
        "        'Access-Control-Allow-Headers': '*',\n" +
        "        'Access-Control-Max-Age': '86400',\n" +
        '      })\n' +
        '      response.end()\n' +
        "    } else if (request.method == 'GET' && /^\\/user\\/\\d+$/.test(request.url)) {\n" +
        '      // GET /user/:userId\n' +
        '      // looks up a user by userId\n' +
        '\n' +
        '      const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '      // validate\n' +
        '      if (isNaN(Number(userId))) {\n' +
        "        const error = new Error('Bad Request')\n" +
        '        error.code = 400\n' +
        '        throw error\n' +
        '      }\n' +
        '\n' +
        '      // userTable is a theoretical client for a database\n' +
        '      const user = await userTable.getById(userId)\n' +
        '\n' +
        '      // handle not found\n' +
        '      if (user == null) {\n' +
        "        const error = new Error('Not Found')\n" +
        '        error.code = 404\n' +
        '        throw error\n' +
        '      }\n' +
        '\n' +
        '      // ensure no private user information is exposed\n' +
        '      const publicUser = {\n' +
        '        id: user.id,\n' +
        '        name: user.name,\n' +
        '        birthdate: user.birthdate,\n' +
        '        profilePictureUrl: user.profilePictureUrl,\n' +
        '        createTime: user.createTime,\n' +
        '      }\n' +
        '\n' +
        '      // send back the user resource in the response body\n' +
        '      response.writeHead(200, {\n' +
        "        'Access-Control-Allow-Origin': '*',\n" +
        "        'Content-Type': 'application/json',\n" +
        '      })\n' +
        '      response.end(JSON.stringify({\n' +
        '        user: publicUser,\n' +
        '      }))\n' +
        '\n' +
        '    } else { // not found\n' +
        '      response.writeHead(404, {\n' +
        "        'Content-Type': 'text/plain',\n" +
        '      })\n' +
        "      response.end('Not Found')\n" +
        '    }\n' +
        '  } catch (error) {\n' +
        '    console.error(error)\n' +
        "    if (typeof error.code != 'number') {\n" +
        '      error.code = 500\n' +
        '    }\n' +
        '    response.writeHead(error.code, {\n' +
        "      'Access-Control-Allow-Origin': '*',\n" +
        "      'Content-Type': 'text/plain',\n" +
        '    })\n' +
        '    response.end(error.message)\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'const server = http.createServer(handler)\n' +
        '\n' +
        'const port = 8080\n' +
        '\n' +
        'server.listen(port)',
      position: {
        start: { line: 569, column: 1, offset: 24637 },
        end: { line: 654, column: 4, offset: 26863 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The above handler ',
          position: {
            start: { line: 656, column: 1, offset: 26865 },
            end: { line: 656, column: 19, offset: 26883 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 656, column: 19, offset: 26883 },
            end: { line: 656, column: 35, offset: 26899 }
          }
        },
        {
          type: 'text',
          value: ' has many responsibilities, including handling health checks, options requests, user resource lookups, and errors.',
          position: {
            start: { line: 656, column: 35, offset: 26899 },
            end: { line: 656, column: 149, offset: 27013 }
          }
        }
      ],
      position: {
        start: { line: 656, column: 1, offset: 26865 },
        end: { line: 656, column: 149, offset: 27013 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'With [A]synchronous Functional Programming, we can break down the above complex HTTP handler into simple, modular, and reusable handlers, then use the library ',
          position: {
            start: { line: 658, column: 1, offset: 27015 },
            end: { line: 658, column: 160, offset: 27174 }
          }
        },
        {
          type: 'link',
          title: null,
          url: 'https://rubico.land/',
          children: [
            {
              type: 'text',
              value: 'rubico',
              position: {
                start: { line: 658, column: 161, offset: 27175 },
                end: { line: 658, column: 167, offset: 27181 }
              }
            }
          ],
          position: {
            start: { line: 658, column: 160, offset: 27174 },
            end: { line: 658, column: 190, offset: 27204 }
          }
        },
        {
          type: 'text',
          value: ' to combine those handlers in a meaningful way.',
          position: {
            start: { line: 658, column: 190, offset: 27204 },
            end: { line: 658, column: 237, offset: 27251 }
          }
        }
      ],
      position: {
        start: { line: 658, column: 1, offset: 27015 },
        end: { line: 658, column: 237, offset: 27251 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "First, let's break down the complex handler.",
          position: {
            start: { line: 660, column: 1, offset: 27253 },
            end: { line: 660, column: 45, offset: 27297 }
          }
        }
      ],
      position: {
        start: { line: 660, column: 1, offset: 27253 },
        end: { line: 660, column: 45, offset: 27297 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: 'function healthCheckHandler(request, response) {\n' +
        '  response.writeHead(200, {\n' +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        "  response.end('ok')\n" +
        '}\n' +
        '\n' +
        'function optionsHandler(request, response) {\n' +
        '  response.writeHead(204, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Access-Control-Allow-Methods': '*',\n" +
        "    'Access-Control-Allow-Headers': '*',\n" +
        "    'Access-Control-Max-Age': '86400',\n" +
        '  })\n' +
        '  response.end()\n' +
        '}\n' +
        '\n' +
        'async function getUserHandler(request, response) {\n' +
        '  const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '  // validate\n' +
        '  if (isNaN(Number(userId))) {\n' +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  // userTable is a theoretical client for a database\n' +
        '  const user = await userTable.getById(userId)\n' +
        '\n' +
        '  // handle not found\n' +
        '  if (user == null) {\n' +
        "    const error = new Error('Not Found')\n" +
        '    error.code = 404\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  // ensure no private user information is exposed\n' +
        '  const publicUser = {\n' +
        '    id: user.id,\n' +
        '    name: user.name,\n' +
        '    birthdate: user.birthdate,\n' +
        '    profilePictureUrl: user.profilePictureUrl,\n' +
        '    createTime: user.createTime,\n' +
        '  }\n' +
        '\n' +
        '  // send back the user resource in the response body\n' +
        '  response.writeHead(200, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'application/json',\n" +
        '  })\n' +
        '  response.end(JSON.stringify({\n' +
        '    user: publicUser,\n' +
        '  }))\n' +
        '}\n' +
        '\n' +
        'function notFoundHandler(request, response) {\n' +
        '  response.writeHead(404, {\n' +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        "  response.end('Not Found')\n" +
        '}\n' +
        '\n' +
        'function errorHandler(request, response) {\n' +
        '  console.error(error)\n' +
        "  if (typeof error.code != 'number') {\n" +
        '    error.code = 500\n' +
        '  }\n' +
        '  response.writeHead(error.code, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        '  response.end(error.message)\n' +
        '}',
      position: {
        start: { line: 662, column: 1, offset: 27299 },
        end: { line: 737, column: 4, offset: 29049 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "We've broken down the complex handler ",
          position: {
            start: { line: 739, column: 1, offset: 29051 },
            end: { line: 739, column: 39, offset: 29089 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 739, column: 39, offset: 29089 },
            end: { line: 739, column: 55, offset: 29105 }
          }
        },
        {
          type: 'text',
          value: ' into smaller, simpler handlers ',
          position: {
            start: { line: 739, column: 55, offset: 29105 },
            end: { line: 739, column: 87, offset: 29137 }
          }
        },
        {
          type: 'inlineCode',
          value: 'healthCheckHandler',
          position: {
            start: { line: 739, column: 87, offset: 29137 },
            end: { line: 739, column: 107, offset: 29157 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 107, offset: 29157 },
            end: { line: 739, column: 109, offset: 29159 }
          }
        },
        {
          type: 'inlineCode',
          value: 'optionsHandler',
          position: {
            start: { line: 739, column: 109, offset: 29159 },
            end: { line: 739, column: 125, offset: 29175 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 125, offset: 29175 },
            end: { line: 739, column: 127, offset: 29177 }
          }
        },
        {
          type: 'inlineCode',
          value: 'getUserHandler',
          position: {
            start: { line: 739, column: 127, offset: 29177 },
            end: { line: 739, column: 143, offset: 29193 }
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: { line: 739, column: 143, offset: 29193 },
            end: { line: 739, column: 145, offset: 29195 }
          }
        },
        {
          type: 'inlineCode',
          value: 'notFoundHandler',
          position: {
            start: { line: 739, column: 145, offset: 29195 },
            end: { line: 739, column: 162, offset: 29212 }
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: { line: 739, column: 162, offset: 29212 },
            end: { line: 739, column: 168, offset: 29218 }
          }
        },
        {
          type: 'inlineCode',
          value: 'errorHandler',
          position: {
            start: { line: 739, column: 168, offset: 29218 },
            end: { line: 739, column: 182, offset: 29232 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 739, column: 182, offset: 29232 },
            end: { line: 739, column: 183, offset: 29233 }
          }
        }
      ],
      position: {
        start: { line: 739, column: 1, offset: 29051 },
        end: { line: 739, column: 183, offset: 29233 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "Now let's combine the smaller handlers using rubico's ",
          position: {
            start: { line: 741, column: 1, offset: 29235 },
            end: { line: 741, column: 55, offset: 29289 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/tryCatch',
          children: [
            {
              type: 'text',
              value: 'tryCatch',
              position: {
                start: { line: 741, column: 56, offset: 29290 },
                end: { line: 741, column: 64, offset: 29298 }
              }
            }
          ],
          position: {
            start: { line: 741, column: 55, offset: 29289 },
            end: { line: 741, column: 81, offset: 29315 }
          }
        },
        {
          type: 'text',
          value: ' and ',
          position: {
            start: { line: 741, column: 81, offset: 29315 },
            end: { line: 741, column: 86, offset: 29320 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/docs/switchCase',
          children: [
            {
              type: 'text',
              value: 'switchCase',
              position: {
                start: { line: 741, column: 87, offset: 29321 },
                end: { line: 741, column: 97, offset: 29331 }
              }
            }
          ],
          position: {
            start: { line: 741, column: 86, offset: 29320 },
            end: { line: 741, column: 116, offset: 29350 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 741, column: 116, offset: 29350 },
            end: { line: 741, column: 117, offset: 29351 }
          }
        }
      ],
      position: {
        start: { line: 741, column: 1, offset: 29235 },
        end: { line: 741, column: 117, offset: 29351 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "require('rubico/global') // imports rubico's tryCatch and switchCase operators\n" +
        '\n' +
        'const combinedHandler = tryCatch(\n' +
        '  switchCase([\n' +
        "    request => request.url.startsWith('/health'),\n" +
        '    healthCheckHandler,\n' +
        '\n' +
        "    request => request.method == 'OPTIONS',\n" +
        '    optionsHandler,\n' +
        '\n' +
        "    request => request.method == 'GET' && /^\\/user\\/\\d+$/.test(request.url),\n" +
        '    getUserHandler,\n' +
        '\n' +
        '    notFoundHandler,\n' +
        '  ]),\n' +
        '\n' +
        '  errorHandler\n' +
        ')',
      position: {
        start: { line: 743, column: 1, offset: 29353 },
        end: { line: 762, column: 4, offset: 29782 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'inlineCode',
          value: 'combinedHandler',
          position: {
            start: { line: 764, column: 1, offset: 29784 },
            end: { line: 764, column: 18, offset: 29801 }
          }
        },
        {
          type: 'text',
          value: ' is functionally equivalent to ',
          position: {
            start: { line: 764, column: 18, offset: 29801 },
            end: { line: 764, column: 49, offset: 29832 }
          }
        },
        {
          type: 'inlineCode',
          value: 'complexHandler',
          position: {
            start: { line: 764, column: 49, offset: 29832 },
            end: { line: 764, column: 65, offset: 29848 }
          }
        },
        {
          type: 'text',
          value: ', but is able to be expressed using a combination of smaller, simpler HTTP handlers. The benefits are as follows: being able to structure your application as small, simple components lends itself well to development, testing, and maintenance.',
          position: {
            start: { line: 764, column: 65, offset: 29848 },
            end: { line: 764, column: 307, offset: 30090 }
          }
        }
      ],
      position: {
        start: { line: 764, column: 1, offset: 29784 },
        end: { line: 764, column: 307, offset: 30090 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Development is quick and easy: where you once had to digest and add onto the entire complex component, now you only need to write a simple, greenfield component.',
          position: {
            start: { line: 766, column: 1, offset: 30092 },
            end: { line: 766, column: 162, offset: 30253 }
          }
        }
      ],
      position: {
        start: { line: 766, column: 1, offset: 30092 },
        end: { line: 766, column: 162, offset: 30253 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Testing is simplified: where you once had to write a complex integration test with many controls and conditions for the complex component, now you only need to write simple integration tests for the simple components.',
          position: {
            start: { line: 768, column: 1, offset: 30255 },
            end: { line: 768, column: 218, offset: 30472 }
          }
        }
      ],
      position: {
        start: { line: 768, column: 1, offset: 30255 },
        end: { line: 768, column: 218, offset: 30472 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'The maintenance overhead is reduced: where you once had to concern yourself with testing changes over large areas of code with complex components, now you can reduce the burden to smaller areas of code with simple components.',
          position: {
            start: { line: 770, column: 1, offset: 30474 },
            end: { line: 770, column: 226, offset: 30699 }
          }
        }
      ],
      position: {
        start: { line: 770, column: 1, offset: 30474 },
        end: { line: 770, column: 226, offset: 30699 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Putting everything together:',
          position: {
            start: { line: 772, column: 1, offset: 30701 },
            end: { line: 772, column: 29, offset: 30729 }
          }
        }
      ],
      position: {
        start: { line: 772, column: 1, offset: 30701 },
        end: { line: 772, column: 29, offset: 30729 }
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      meta: null,
      value: "require('rubico/global')\n" +
        "const http = require('http')\n" +
        '\n' +
        'function healthCheckHandler(request, response) {\n' +
        '  response.writeHead(200, {\n' +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        "  response.end('ok')\n" +
        '}\n' +
        '\n' +
        'function optionsHandler(request, response) {\n' +
        '  response.writeHead(204, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Access-Control-Allow-Methods': '*',\n" +
        "    'Access-Control-Allow-Headers': '*',\n" +
        "    'Access-Control-Max-Age': '86400',\n" +
        '  })\n' +
        '  response.end()\n' +
        '}\n' +
        '\n' +
        'async function getUserHandler(request, response) {\n' +
        '  const userId = request.url.match(/\\d+/)[0]\n' +
        '\n' +
        '  // validate\n' +
        '  if (isNaN(Number(userId))) {\n' +
        "    const error = new Error('Bad Request')\n" +
        '    error.code = 400\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  // userTable is a theoretical client for a database\n' +
        '  const user = await userTable.getById(userId)\n' +
        '\n' +
        '  // handle not found\n' +
        '  if (user == null) {\n' +
        "    const error = new Error('Not Found')\n" +
        '    error.code = 404\n' +
        '    throw error\n' +
        '  }\n' +
        '\n' +
        '  // ensure no private user information is exposed\n' +
        '  const publicUser = {\n' +
        '    id: user.id,\n' +
        '    name: user.name,\n' +
        '    birthdate: user.birthdate,\n' +
        '    profilePictureUrl: user.profilePictureUrl,\n' +
        '    createTime: user.createTime,\n' +
        '  }\n' +
        '\n' +
        '  // send back the user resource in the response body\n' +
        '  response.writeHead(200, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'application/json',\n" +
        '  })\n' +
        '  response.end(JSON.stringify({\n' +
        '    user: publicUser,\n' +
        '  }))\n' +
        '}\n' +
        '\n' +
        'function notFoundHandler(request, response) {\n' +
        '  response.writeHead(404, {\n' +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        "  response.end('Not Found')\n" +
        '}\n' +
        '\n' +
        'function errorHandler(request, response) {\n' +
        '  console.error(error)\n' +
        "  if (typeof error.code != 'number') {\n" +
        '    error.code = 500\n' +
        '  }\n' +
        '  response.writeHead(error.code, {\n' +
        "    'Access-Control-Allow-Origin': '*',\n" +
        "    'Content-Type': 'text/plain',\n" +
        '  })\n' +
        '  response.end(error.message)\n' +
        '}\n' +
        '\n' +
        'const combinedHandler = tryCatch(\n' +
        '  switchCase([\n' +
        "    request => request.url.startsWith('/health'),\n" +
        '    healthCheckHandler,\n' +
        '\n' +
        "    request => request.method == 'OPTIONS',\n" +
        '    optionsHandler,\n' +
        '\n' +
        "    request => request.method == 'GET' && /^\\/user\\/\\d+$/.test(request.url),\n" +
        '    getUserHandler,\n' +
        '\n' +
        '    notFoundHandler,\n' +
        '  ]),\n' +
        '\n' +
        '  errorHandler\n' +
        ')\n' +
        '\n' +
        'const server = http.createServer(combinedHandler)\n' +
        '\n' +
        'const port = 8080\n' +
        '\n' +
        'server.listen(port)',
      position: {
        start: { line: 774, column: 1, offset: 30731 },
        end: { line: 875, column: 4, offset: 32960 }
      }
    },
    {
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'text',
          value: 'Conclusion',
          position: {
            start: { line: 877, column: 5, offset: 32966 },
            end: { line: 877, column: 15, offset: 32976 }
          }
        }
      ],
      position: {
        start: { line: 877, column: 1, offset: 32962 },
        end: { line: 877, column: 15, offset: 32976 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'This concludes Handling HTTP in [A]synchronous Functional Programming.',
          position: {
            start: { line: 879, column: 1, offset: 32978 },
            end: { line: 879, column: 71, offset: 33048 }
          }
        }
      ],
      position: {
        start: { line: 879, column: 1, offset: 32978 },
        end: { line: 879, column: 71, offset: 33048 }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: "If you are curious about rubico and would like to get started, please visit rubico's home page: ",
          position: {
            start: { line: 881, column: 1, offset: 33050 },
            end: { line: 881, column: 97, offset: 33146 }
          }
        },
        {
          type: 'link',
          title: null,
          url: '/',
          children: [
            {
              type: 'text',
              value: 'rubico.land',
              position: {
                start: { line: 881, column: 98, offset: 33147 },
                end: { line: 881, column: 109, offset: 33158 }
              }
            }
          ],
          position: {
            start: { line: 881, column: 97, offset: 33146 },
            end: { line: 881, column: 113, offset: 33162 }
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: { line: 881, column: 113, offset: 33162 },
            end: { line: 881, column: 114, offset: 33163 }
          }
        }
      ],
      position: {
        start: { line: 881, column: 1, offset: 33050 },
        end: { line: 881, column: 114, offset: 33163 }
      }
    }
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 882, column: 1, offset: 33164 }
  }
}